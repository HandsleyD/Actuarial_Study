---
normalized_id: shared-pdf-reference-geweke-j-contemporary-bayesian-econometrics-and-statistics-wiley-2005-isbn-0471679321-308s-gl
exam_code: SHARED
material_scope: geweke j. contemporary bayesian econometrics and statistics (wiley, 2005)(isbn 0471679321)(308s)_gl_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Geweke J. Contemporary Bayesian Econometrics and Statistics (Wiley, 2005)(ISBN 0471679321)(308s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-geweke-j-contemporary-bayesian-econometrics-and-statistics-wiley-2005-isbn-0471679321-308s-gl

Contemporary Bayesian
Econometrics and Statistics

JOHN GEWEKE
University of Iowa
Departments of Economics and Statistics
Iowa City, Iowa




A JOHN WILEY & SONS, INC., PUBLICATION
Copyright  2005 by John Wiley & Sons, Inc. All rights reserved.

Published by John Wiley & Sons, Inc., Hoboken, New Jersey.
Published simultaneously in Canada.

No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form
or by any means, electronic, mechanical, photocopying, recording, scanning, or otherwise, except as
permitted under Section 107 or 108 of the 1976 United States Copyright Act, without either the prior
written permission of the Publisher, or authorization through payment of the appropriate per-copy fee
to the Copyright Clearance Center, Inc., 222 Rosewood Drive, Danvers, MA 01923, (978) 750-8400,
fax (978) 750-4470, or on the web at www.copyright.com. Requests to the Publisher for permission
should be addressed to the Permissions Department, John Wiley & Sons, Inc., 111 River Street,
Hoboken, NJ 07030, (201) 748-6011, fax (201) 748-6008, or online at
http://www.wiley.com/go/permission.

Limit of Liability/Disclaimer of Warranty: While the publisher and author have used their best efforts
in preparing this book, they make no representations or warranties with respect to the accuracy or
completeness of the contents of this book and specifically disclaim any implied warranties of
merchantability or fitness for a particular purpose. No warranty may be created or extended by sales
representatives or written sales materials. The advice and strategies contained herein may not be
suitable for your situation. You should consult with a professional where appropriate. Neither the
publisher nor author shall be liable for any loss of profit or any other commercial damages, including
but not limited to special, incidental, consequential, or other damages.

For general information on our other products and services or for technical support, please contact our
Customer Care Department within the United States at (800) 762-2974, outside the United States at
(317) 572-3993 or fax (317) 572-4002.

Wiley also publishes its books in a variety of electronic formats. Some content that appears in print
may not be available in electronic formats. For more information about Wiley products, visit our web
site at www.wiley.com.

Library of Congress Cataloging-in-Publication Data:

Geweke, John.
  Contemporary Bayesian econometrics and statistics / John Geweke.
     p. cm.
  Includes bibliographical references and index.
  ISBN-13 978-0-471-67932-5 (cloth)
  ISBN-10 0-471-67932-1 (cloth)
   1. Econometrics. 2. Bayesian statistical decision theory. 3. Decision
 making—Mathematical models. I. Title.

HB139.G478 2005
330 .01 519542—dc22
                                                           2005043948

Printed in the United States of America.

10 9 8 7 6 5 4 3 2 1
     Contents



Preface                                                            ix

1. Introduction                                                     1
   1.1    Two Examples, 3
          1.1.1 Public School Class Sizes, 4
          1.1.2 Value at Risk, 5
   1.2    Observables, Unobservables, and Objects of Interest, 7
   1.3    Conditioning and Updating, 10
   1.4    Simulators, 13
   1.5    Modeling, 15
   1.6    Decisionmaking, 17

2. Elements of Bayesian Inference                                  21

   2.1    Basics, 21
   2.2    Sufficiency, Ancillarity, and Nuisance Parameters, 31
          2.2.1 Sufficiency, 31
          2.2.2 Ancillarity, 33
          2.2.3 Nuisance Parameters, 35
   2.3    Conjugate Prior Distributions, 38
   2.4    Bayesian Decision Theory and Point Estimation, 46
   2.5    Credible Sets, 56
   2.6    Model Comparison, 61
          2.6.1 Marginal Likelihoods, 62
          2.6.2 Predictive Densities, 66




                                                                    v
vi                                                                     CONTENTS


3. Topics in Bayesian Inference                                              73

     3.1   Hierarchical Priors and Latent Variables, 73
     3.2   Improper Prior Distributions, 78
     3.3   Prior Robustness and the Density Ratio Class, 87
     3.4   Asymptotic Analysis, 91
     3.5   The Likelihood Principle, 97

4. Posterior Simulation                                                     105
     4.1   Direct Sampling, 106
     4.2   Acceptance and Importance Sampling, 110
           4.2.1 Acceptance Sampling, 111
           4.2.2 Importance Sampling, 114
     4.3   Markov Chain Monte Carlo, 119
           4.3.1 The Gibbs Sampler, 120
           4.3.2 The Metropolis–Hastings Algorithm, 122
     4.4   Variance Reduction, 127
           4.4.1 Concentrated Expectations, 128
           4.4.2 Antithetic Sampling, 130
     4.5   Some Continuous State Space Markov Chain Theory, 133
           4.5.1 Convergence of the Gibbs Sampler, 137
           4.5.2 Convergence of the Metropolis–Hastings Algorithm, 139
     4.6   Hybrid Markov Chain Monte Carlo Methods, 142
           4.6.1 Transition Mixtures, 142
           4.6.2 Metropolis within Gibbs, 143
     4.7   Numerical Accuracy and Convergence in Markov Chain
           Monte Carlo, 145

5. Linear Models                                                            153
     5.1   BACC and the Normal Linear Regression Model, 154
     5.2   Seemingly Unrelated Regressions Models, 162
     5.3   Linear Constraints in the Linear Model, 169
           5.3.1 Linear Inequality Constraints, 170
           5.3.2 Conjectured Linear Restrictions, Linear Inequality Constraints,
                  and Covariate Selection, 172
     5.4   Nonlinear Regression, 175
           5.4.1 Nonlinear Regression with Smoothness Priors, 176
           5.4.2 Nonlinear Regression with Basis Functions, 185
CONTENTS                                                                 vii

6. Modeling with Latent Variables                                       195

   6.1     Censored Normal Linear Models, 196
   6.2     Probit Linear Models, 200
   6.3     The Independent Finite State Model, 202
   6.4     Modeling with Mixtures of Normal Distributions, 205
           6.4.1 The Independent Student-t Linear Model, 206
           6.4.2 Normal Mixture Linear Models, 208
           6.4.3 Generalizing the Observable Outcomes, 215

7. Modeling for Time Series                                             221

   7.1     Linear Models with Serial Correlation, 222
   7.2     The First-Order Markov Finite State Model, 226
           7.2.1 Inference in the Nonstationary Model, 229
           7.2.2 Inference in the Stationary Model, 230
   7.3     Markov Normal Mixture Linear Model, 233

8. Bayesian Investigation                                               245

   8.1     Implementing Simulation Methods, 246
           8.1.1 Density Ratio Tests, 247
           8.1.2 Joint Distribution Tests, 251
   8.2     Formal Model Comparison, 255
           8.2.1 Bayes Factors for Modeling with Common Likelihoods, 255
           8.2.2 Marginal Likelihood Approximation Using Importance
                  Sampling, 256
           8.2.3 Marginal Likelihood Approximation Using Gibbs Sampling, 257
           8.2.4 Density Ratio Marginal Likelihood Approximation, 259
   8.3     Model Specification, 262
           8.3.1 Prior Predictive Analysis, 262
           8.3.2 Posterior Predictive Analysis, 267
   8.4     Bayesian Communication, 271
   8.5     Density Ratio Robustness Bounds, 277

Bibliography                                                            283

Author Index                                                            293

Subject Index                                                           295
      Preface


Bayesian analysis provides a unified and coherent way of thinking about decision
problems and how to solve them using data and other information. The goal of this
book is to acquaint the reader in a serious way with this approach and its problem-
solving potential, and to this end it has two objectives. The first is to provide
a clear understanding of Bayesian analysis, grounded in the theory of inference
and optimal decisionmaking, which will enable the reader to confidently analyze
real problems. The second is to equip the reader with state-of-the-art simulation
methods that can be used to solve these problems.
   This book is written for research professionals who use econometrics and similar
statistical methods in their work, and for Ph.D. students in disciplines that do the
same. These disciplines include economics and statistics, as well as the many social
sciences and fields in business and public policy schools that study decisionmaking
on the basis of data and other information. The book assumes the same knowledge
of mathematical statistics as most Ph.D. courses in econometrics, and familiarity
with linear models at the level of a graduate applied econometrics course or a
master’s statistics course. The entire book was developed through a decade of
teaching at this level, all of the material having been presented at least twice
and some more than a half-dozen times. This vetting process has afforded the
opportunity to minimize the barriers to entry to a sound and practical grasp of
Bayesian analysis for the intended audience.
   Loosely speaking, the first three chapters address the objective of a clear under-
standing of Bayesian analysis—how to think—and the next five, the objective
of presenting and applying simulation methods—how to act. There is no sharp
distinction between these two objectives. In particular, as one gains greater confi-
dence with “hands on” methods, it is natural to rethink the formulation of problems
at hand with the knowledge that what was not long ago impossible is now prac-
tical. The text has many examples and exercises that follow this path, ranging
from questions that have been used in examinations to substantial projects that
extend or apply the methods presented. Some of these examples and exercises use
the Bayesian analysis, computation, and communication (BACC) extension of the
mathematical applications Matlab, Splus, R, and Gauss. The reader will find the
                                                                                  ix
x                                                                             PREFACE



software and documentation, along with data and code for examples, in the online
appendix for this text at http://www.biz.uiowa.edu/cbes.
   The book takes up specific models as vehicles for understanding Bayesian anal-
ysis and applying simulation methods. This entails solving problems in a practical
way and at the level of detail required by research professionals whose work must
withstand subsequent scrutiny. In some cases these solutions did not exist only a
few years ago (prior to 2005), and are not yet widely known among econometri-
cians and statisticians. Therefore the book concentrates on a handful of models in
some depth, rather than attempting to survey all models with a scope similar to
that of leading (and much longer) graduate econometrics texts. The coverage here
should not be taken as a judgment that other models are somehow less important or
significant, or cannot be approached using Bayesian analysis. Just the opposite is
true. The approaches and methods in this book are being used to improve models
and decisionmaking at an accelerating rate, as perusal of the tables of contents of
leading journals such as the Journal of the American Statistical Association, the
Journal of the Royal Statistical Society, and the Journal of Econometrics will ver-
ify. The reader of this book will be well equipped to understand this research, to
appreciate its relevance to problems at hand, and to tailor existing methods to these
problems.
   The organization is designed to meet a variety of uses in graduate education. All
begin with Chapter 1, which provides an overview of the rest of the text at a lower
technical level than is used subsequently. This material, which can be covered
in 1–2 weeks in a traditional setting or in the first day of an intensive course,
provides the reader with motivation for the more technical work that follows. A
full-year graduate course can cover the first four chapters in the first semester,
perhaps using the material on discrete-state Markov processes in Chapter 7 as an
entrée to the theory of Markov chain Monte Carlo (MCMC) methods in Chapter 4.
The second semester then begins with hands-on computing and applications and
proceeds through the rest of the book. One can base a one-semester course on
Chapters 1 and 2, the first three sections of Chapter 4, Section 5.1, plus other parts
of Chapters 5, 6, and 7 as time and interests dictate. For example, completion
of Chapter 5 will concentrate on linear models. Chapter 6 concentrates on latent
variable models, and for this concentration the material on hierarchical priors at the
start of Chapter 3 may also be of interest. An intensive applications-oriented course
of 1–2 weeks can be based on Chapter 1, Section 2.1, Section 4.3, and Section
5.1, plus other parts of Chapters 5, 6, and 7 consistent with time and interests. The
online appendix provides ample material for computing laboratory sessions in such
a course.
   I am very grateful to a number of people who contributed, in one way or
another, to the book. Scores of graduate students were involved since the mid-
1990s as material was developed, discarded, modified, and redeveloped in graduate
courses at the Universities of Minnesota and Iowa. Of these former graduate or
postdoctoral students, Gianni Amisano, Pat Bajari, Hulya Eraslan, Merrell Hora,
John Landon-Lane, Lea Petrella, Arnie Quinn, Hisashi Tanizaki, and Nobuhiko
Terui all played roles in improving the text, computing code, or examples. I owe
PREFACE                                                                         xi

a special debt to my former student Bill McCausland, who also conceived the
BACC software and brought it into being. I am grateful to the National Science
Foundation for support of software development and research incorporated here.
For nurturing many aspects of the Bayesian approach to thinking reflected in these
pages, I am especially grateful to Jim Berger, Jay Kadane, Dennis Lindley, Dale
Poirier, Christopher Sims, Luke Tierney, and Arnold Zellner. Finally, for advice
and comments on many specific aspects of the book I thank Siddhartha Chib,
Bill Griffiths, Gary Koop, Peter Rossi, Christopher Sims, Mark Steel, and Herman
van Dijk.

                                                                   John Geweke

Iowa City, Iowa
CHAPTER 1




      Introduction


The evolution of modern society is driven by decisions that affect the welfare
and choices of large groups of individuals. Of the scores of examples, a few will
illustrate the characteristics of decisionmaking that motivate our approach:

   1. A new drug has been developed in the laboratories of a private firm over
      a period of several years and at a cost of tens of millions of dollars. It has
      been tested in animals, and in increasingly larger groups of human beings
      in a succession of highly structured clinical trials. If the drug is approved
      by the Food and Drug Administration (FDA), it will be available for all
      licensed physicians to use at their discretion. The FDA must decide whether
      to approve the drug.
   2. Since the mid-1980s evidence from many different sources, taken together,
      clearly indicates that the earth’s climate is warming. The evidence that this
      warming is due to human activities, in particular the emission of carbon
      dioxide, is not as compelling but becomes stronger every year. The economic
      activities responsible for increases in the emission of carbon dioxide are
      critical to the aspirations of billions of people, and to the political order that
      would be needed to sustain a policy that would limit emissions. How should
      the evidence be presented to political leaders who are able to make and
      enforce decisions about emissions policy? What should their decision be?
   3. A multi-billion-dollar firm is seeking to buy a firm of similar size. The
      two firms have documented cost reductions that will be possible because
      of the merger. On the other hand, joint ownership of the two firms will
      likely increase market power, making it in the interests of the merged firm
      to set higher price cost margins than did the two firms separately. How
      should lawyers and economists—whether disinterested or not—document
      and synthesize the evidence on both points for the regulatory authorities who
      decide whether to permit the merger? How should the regulatory authorities


Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.

                                                                                      1
2                                                                        INTRODUCTION


       make their decision? If they deny the merger, the firms must decide whether
       to appeal the decision to the courts.
    4. A standard petroleum refining procedure produces two-thirds unleaded gaso-
       line and one-third heating oil (or jet aviation fuel, its near equivalent).
       Refinery management buys crude oil, and produces and sells gasoline and
       heating oil. The wholesale prices of these products are volatile. Management
       can guarantee the difference between selling and buying prices, by means
       of futures contracts in which speculators (risk takers) commit to purchasing
       specified amounts of gasoline or heating oil, and selling agreed-on amounts
       of crude oil, at fixed prices. Should management lock in some or all of its
       net return in this way? If some, then how much?

   These decisions differ in many ways. The second and third will appear promi-
nently in the media; the first might, the last rarely will. The second is a matter
of urgent global public policy, and the last is entirely private. The other two are
mixtures; in each case the final decision is a matter of public policy, but in both the
matter is raised to the level of public policy through a sequence of private decisions,
in which anticipation of the ultimate public policy decision is quite important.
   Yet these decisions have many features in common:

    1. The decision must be made on the basis of less-than-perfect information.
       By “perfect information” is meant all the information the decisionmaker(s)
       would requisition if information were free, that is, immediately available at
       no cost in resources diverted from other uses.
    2. The decision must be made at a specified time. Either waiting is prohibited
       by law or regulation (examples 1 and 3), is denied by the definition of the
       decision (example 4), or “wait” amounts to making a critical choice that may
       circumscribe future options (example 2).
    3. The information bearing on the decision, and the consequences of the deci-
       sion, are primarily quantitative. The relationship between information and
       outcome, mediated by working hypotheses about the connection between the
       two, is nondeterministic.
    4. There are multiple sources of information bearing on each decision. Whether
       the information is highly structured and derived from controlled experiments
       (example 1), consists of numerous studies using different approaches and
       likely reaching different conclusions (examples 2 and 3), or originates in
       different time periods and settings whose relation to the decision at hand must
       be assessed repeatedly (example 4), this information must be aggregated,
       explicitly or implicitly, in the decision.

   We will often refer to “investigators” and “clients,” terms due to Hildreth (1963).
The investigator is the applied statistician or econometrician whose function is to
convey quantitative information in a manner that facilitates and thereby improves
decisions. The client may be the actual decisionmaker, or—more often—another
scientist working to support the decision with information. The client’s identity
TWO EXAMPLES                                                                        3

and preferences may be well known to the investigator (example: an expert witness
hired by any interested party), or many clients may be unknown to the investigator
(example: the readers of a subsequently well-cited academic paper reporting the
investigator’s work).
   The objective of this book is to provide investigators with understanding and
technical tools that will enable them to communicate effectively with clients, includ-
ing decisionmakers and other investigators. Several themes emerge:

   1. Make all assumptions explicit.
   2. Explicitly quantify all of the essentials, including the assumptions.
   3. Synthesize, or provide the means to synthesize, different approaches and
      models.
   4. Represent the inevitable uncertainty in ways that will be useful to the client.

    The understanding of effective communication is grounded in Bayesian inference
and decision theory. The grounding emerges not from any single high-minded
principle, but rather from the fact that this foundation is by far the most coherent
and comprehensive one that presently exists. It may eventually be superseded by
a superior model, but for the foreseeable future it is the foundation of economics
and rational quantitative decisionmaking.
    The reader grounded in non-Bayesian methods need not take any of this for
granted. To these readers, the utility of the approach taken here will emerge as
successive real problems succumb to effective treatment using Bayesian methods,
while remaining considerably more difficult, if not entirely intractable, using non-
Bayesian approaches.
    Simulation methods provide an indispensable link between principles and prac-
tice. These methods, essentially unavailable before the late 1980s, represent uncer-
tainty in terms of a large but finite number of synthetic random drawings from the
distribution of unobservables (examples: parameters and latent variables), condi-
tional on what is known (examples: data and the constraints imposed by economic
theory) and the model(s) used to relate unobservables to what is known. Algorithms
for the generation of the synthetic random drawings are governed by this represen-
tation of uncertainty. The investigator who masters these tools not only becomes a
more fluent communicator of results but also greatly expands the choices of con-
texts, or models, in which to represent uncertainty and provide useful information
to decisionmakers.


1.1 TWO EXAMPLES

This chapter is an overview of the chapters that follow. It provides much of what is
needed for the reader to be a knowledgeable client, that is, a receiver of information
communicated in the way just discussed. Being an effective investigator requires
the considerably more detailed and technical understanding that the other chapters
convey.
4                                                                         INTRODUCTION


1.1.1 Public School Class Sizes
The determination of class size in public schools is a political and fiscal decision
whose details vary from state to state and district to district. Regardless of the
details, the decision ultimately made balances the fact that, given the number of
students in the district, a lower student : teacher ratio is more costly, against
the perception that a lower student : teacher ratio also increases the quality of
education. Moreover, quality is difficult to measure. The most readily available
measures are test scores. Changes made in federal funding of locally controlled
public education since 2001 emphasize test scores as indicators of quality, and
create fiscal incentives for local school boards to maintain and improve the test
scores of students in their districts.
   In this environment, there are several issues that decisionmaking clients must
address and in which Bayesian investigation is important:

    1. What is the relationship between the student : teacher ratio and test scores?
       Quite a few other factors, all of them measurable, may also affect test scores.
       We are uncertain about how to model the relationship, and for any one model
       there is uncertainty about the parameters in this model. Even if we were
       certain of both the model and the parameters, there would still be uncertainty
       about the resulting test scores. Full reporting and effective decisionmaking
       require that all these aspects of uncertainty be expressed.
    2. The tradeoff between costs, on one hand, and quality of education, on the
       other hand, needs to be expressed. “Funding formulas” that use test scores
       to determine revenues available to school administrators (the clients) express
       at least part of this relationship quantitatively. In addition, a client may wish
       to see the implications of alternative valuations of educational quality, as
       expressed in test scores, for decisions about class size. Funding formulas may
       be expressed in terms of targets that make this an analytically challenging
       problem. The simulation methods that are an integral part of contemporary
       Bayesian econometrics and statistics make it practical to solve such problems
       routinely.
    3. Another set of prospective clients consists of elected and appointed poli-
       cymakers who determine funding formulas. Since these policymakers are
       distinct from school administrators, any funding formula anticipates (at least
       implicitly) the way that these administrators will handle tradeoffs between
       the costs of classroom staffing and the incentives created in the funding for-
       mulas. Depending on administrators’ behavior, different policies may incur
       higher, or lower, costs to attain the same outcome as measured by test scores.

   Bayesian analysis provides a coherent and practical framework for combining
information and data in a useful way in this and other decisionmaking situations.
Chapters 2 and 3 take up the critical technical steps in integrating data and other
sources of information and representing the values of the decisionmaking client.
Chapter 4 provides the simulation methods that make it practical and routine to
TWO EXAMPLES                                                                             5

undertake the required analysis. The remaining chapters return to this particular
decision problem at several points.


1.1.2 Value at Risk
Financial institutions (banks, brokerage firms, insurance companies) own a variety
of financial assets, often with total value in the many billions of dollars. They may
include debt issued by businesses, loans to individuals, and government bonds.
These firms also have financial liabilities: for example, deposit accounts in the
case of private banks and life insurance policies in the case of insurance companies.
Taken together, the holdings of financial assets or liabilities by a firm are known
as its “portfolio.”
    The value of an institution’s portfolio, or of a particular part of it, is constantly
changing. This is the case even if the institution initiates no change in its holdings,
because the market price of the institution’s assets or liabilities change from day to
day and even minute to minute. Thus every such institution is involved in a risky
business. In general, the larger the institution, the more difficult it is to assess this
risk because of both the large variety of assets and liabilities and the number of
individuals within the institution who have authority to change specified holdings
in the institution’s portfolio.
    Beginning about 1990 financial institutions, and government agencies with
oversight and regulatory responsibility for these institutions, developed measures
of the risk inherent in institutions’ portfolios. One of the simplest and most widely
used is value at risk. To convey the essentials of the idea, let pt be the market
value of an institution’s entire portfolio, or of a defined portion of it. In the former
case, pt is the net worth of the institution—what would remain in the hypothetical
situation that the institution were to sell all its assets and meet all of its liabilities.
In the latter case it might be (for example) the institution’s holding of conventional
mortgages, or of U.S. government bonds.
    The value pt is constantly changing. This is in part a consequence of holdings
by the institution, but it is also a result of changes in market prices. Value at risk
is more concerned with the latter, so pt is taken to be the portfolio value assuming
that its composition remains fixed. “Value at risk” is defined with respect to a future
time period, say, t ∗ , relative to the current period t, where t ∗ > t and t ∗ − t may
range from less than a day to as long as a month. A typical definition of value at
risk is that it is the loss in portfolio value vt,t ∗ that satisfies

                               P (pt − pt ∗ ≥ vt,t ∗ ) = .05.                        (1.1)

Thus value at risk is a hypothetical decline in value, such that the probability of an
even greater decline is 5%. The choice of .05 appears arbitrary, since other values
could be used, but .05 is by far the most common, and in fact some regulatory
authorities establish limits of vt,t ∗ in relation to pt based on (1.1).
   The precise notion of probability in (1.1) is important. Models for establishing
value at risk provide a distribution for pt ∗ , conditional on pt and, perhaps, other
6                                                                        INTRODUCTION


information available at time t. From this distribution we can then determine vt,t ∗ .
Most models used for this purpose are formulated in terms of the period-to-period
return on the portfolio

                               rt = (pt − pt−1 )/pt−1 ,

and statistical modeling usually directly addresses the behavior of the time series

                          yt = log(1 + rt ) = log(pt /pt−1 ).                     (1.2)

    One of the simplest models is

                                    yt ∼ N (µ, σ 2 ).                             (1.3)

Even this simple model leaves open a number of questions. For example, is it really
intended that the same model (including the same mean and variance) pertains today
for “high tech” stocks as it did in 1999, before the rapid decline in their value? In
any event, the parameters µ and σ 2 are unknown, so how is this fact to be handled
in the context of (1.1)? This problem is especially vexing if µ and σ 2 are subject
to periodic changes, as the high-tech example suggests at least sometimes must be
the case if we insist on proceeding with (1.3).
    One of the biggest difficulties with (1.3) is that it is demonstrably bad as a
description of returns that are relatively large in absolute value, at least with fixed
µ and σ 2 . If we take as the fixed values of µ and σ 2 their conventional estimates
based on daily stock price indices for the entire twentieth century, then the model
implies that “crashes” like the one that occurred in October 1987, are events that
are so rare as to be impossible for all practical purposes. [For the daily Standard
and Poors 500 stock returns for January 3, 1928–April 30, 1991, from Ryden et al.
(1998) used in Sections 7.3 and 8.3, the mean is .000182, the standard deviation
is .0135, and the largest return in absolute value is −.228, which is 16.9 standard
deviations from the mean. If z ∼ N (0,1) then P (z ≤ −16.9) = 2.25 × 10−64 . The
inverse of this probability is 4.44 × 1063 . Dividing by 260 trading days in the year
yields 1.71 × 1061 years. The estimated age of the universe is 1.2 × 1010 years.
Chapter 8 takes up Bayesian specification analysis, which is the systematic and
constructive assessment of this sort of incongruence of a model with reality.] This,
of course, makes explicit the fact that we are uncertain about more than just the
unknown parameters µ and σ 2 in (1.3). In fact we are also uncertain about the
functional form of the distribution, and our notion of “probability” in (1.1) should
account for this, too.
    Section 1.4 introduces an alternative to (1.3), which is developed in detail in
Section 7.3. An important variant on the value at risk problem arises when a
decisionmaker (say, a vice president of an investment bank) selects the value .05,
as opposed to some other probability, in (1.1). This integration of behavior with
probability is the foundation of Bayesian decision theory, as well as of important
parts of modern economics and finance. We shall return to this theme repeatedly,
for example, in Sections 2.4 and 4.1.
OBSERVABLES, UNOBSERVABLES, AND OBJECTS OF INTEREST                                    7

1.2 OBSERVABLES, UNOBSERVABLES, AND OBJECTS OF INTEREST

A model is a simplified description of reality that is at least potentially useful in
decisionmaking. Since models are simplified, they are never literally true; what-
ever the “data-generating process” may be, it is not the model. Since models are
constructed for the purpose of decisionmaking, different decision problems can
appropriately lead to different models despite the fact that the reality they simplify is
the same. A well-known example is Newtonian physics, which is inadequate when
applied to cosmology or subatomic interactions but works quite well in launching
satellites and sending people to the moon. In the development of positron emission
tomography and other kinds of imaging based on the excitation of subatomic par-
ticles, on other hand, quantum mechanics (a different model) functions quite well
whereas Newtonian mechanics is inapplicable.
    All scientific models have certain features in common. One is that they often
reduce an aspect of reality to a few quantitative concepts that are unobservable but
organize observables in a way that is useful in decisionmaking. The gravitational
constant or the charge of an electron in physics, and the variance of asset returns or
the equation of a demand function in the examples in the previous section are all
examples of unobservables. Observables can be measured directly; the acceleration
of an object when dropped, the accumulation of charge on an electrode, average
test scores in different school districts, and sample means of asset returns are all
examples.
    A model posits certain relationships between observables and unobservables;
without these relationships the concepts embodied in the unobservables would be
vacuous. A scientific model takes the form “Given the values of the unobservables,
the observables will behave in the following way.” The relationship may or may
not be deterministic. Thus a model may be cast in the form

                                       p(y | θ ),

in which θ is a vector of unobservables and y is a vector of observables. The
unobservables θ are typically parameters or latent variables. It is important to
distinguish between the observables y, a random vector, and their values after
they are observed, which we shall denote yo and are commonly called “data.”
The functional form of the probability density p gives the model some of its
content. In the simple example of Section 1.1.1 the observables might be pairs of
student : teacher ratios and test score averages in a sample of school districts, and
the unobservables the slope and intercept parameters of a normal linear regression
model linking the two. In the simple example of Section 1.1.2, the observables
might be asset returns y1 , . . . , yT , and the unobservable is σ 2 = var(yt ).
    The relationship p(y | θ) between observables and unobservables is central, but
it is not enough for decisionmaking. The relationship between the gravitational
constant g and the acceleration that results when a force is applied to a mass is
not enough to deliver a communications satellite into orbit—we had better know
quite a lot about the value of g. Likewise, in assessing value at risk using the
8                                                                        INTRODUCTION


simplified model of Section 1.1.2, we must know something about σ 2 . In general,
the density p(y | θ) may restrict the behavior of y regardless of θ (e.g., when
dropped, everyday objects accelerate at rates that differ negligibly with their mass)
but for decisionmaking we must know something about θ . (An object will fall
about how many meters per second squared at sea level?) A very general way to
represent knowledge about θ is by means of a density p(θ ). Formally, we may
combine p(θ ) and p(y | θ ) to produce information about the observables:
                                   
                           p(y) = p(θ )p(y | θ ) dθ .

How we obtain information about θ, and how p(θ ) changes in response to new
information are two of the central topics of this book. In particular, we shall turn
shortly to the question of how information about θ changes when y is observed.
   In any decision there is typically more than one model at hand that is at least
potentially useful. In fact, much of the work of actual decisionmakers lies in sorting
through and weighing the implications of different models. To recognize this fact,
we shall further index the relation between observables and unobservables by A to
denote the model: p(y | θ ) becomes p(y | θ A , A), and p(θ ) becomes p(θ A | A).
The vector of unobservables (in many cases, the parameters of the model A) θ A
belongs to the set A ⊆ RkA . Alternative models will be denoted A1 , A2 , . . . . Note
that the unobservables need not be the same in the models, but the observables
y ∈ Y are. When several models have the same set of observables, and then we
obtain observations (which we call “data”), it becomes possible to discriminate
among models. We shall return to this topic in Section 1.5, where we will see
that with a bit more effort we can actually use the data to assign probabilities to
competing models.
   More generally, however, the models relevant to the decision at hand need not all
have the same set of observables. A classic example is the work of Friedman (1957)
on the marginal propensity to consume. One model (A1 ) used aggregate time series
data on income and consumption, while another model (A2 ) used income and con-
sumption measures for different households at the same point in time. The sets of
models addressed the same unobservable—marginal propensity to consume—but
reached different conclusions. Friedman’s contribution was to show that the models
A1 and A2 did, indeed, have different unobservables (θ A1 and θ A2 ), and that the
differences in θ A1 and θ A2 were consistent with a third, more appropriate, concept
of marginal propensity to consume. We shall denote the object of interest on which
decisionmaking depends, and which all models relevant to the decision have some-
thing to say, by the vector ω. We shall denote the implications of model A for ω
by p(ω | y, θ A , A). The models at hand must specify this density; if they do not,
then they are not pertinent to the decision at hand.
   We can apply this idea to the two examples in the previous section. In the
case of the class size decision, ω might be a q × 1 vector of average test scores
conditional on q alternative decisions that might be made about class size. In the
case of value at risk, ω might be a 5 × 1 vector, the value of the portfolio at the
end of each of the next 5 business days.
OBSERVABLES, UNOBSERVABLES, AND OBJECTS OF INTEREST                                     9

   In summary, we have identified three components of a complete model, A,
involving unobservables (often parameters) θ A , observables y, and a vector of
interest ω:
                                 p(θ A | A),                              (1.4)
                                     p(y | θ A , A),                                (1.5)
                                    p(ω | y, θ A , A).                              (1.6)

The ordering of (1.4)–(1.6) emphasizes the fact that the model A specifies the joint
distribution

             p(θ A , y, ω | A) = p(θ A | A)p(y | θ A , A)p(ω | y, θ A , A).         (1.7)

It is precisely this joint distribution that makes it possible to use data to inform deci-
sions in an internally consistent manner, and—with more structure to be introduced
in Section 1.6—addresses the question of which decision would be optimal.

Exercise 1.2.1 Conditional Probability. A test for the presence of a disease can
be administered by a nurse. A result “positive” (+) indicates disease present; a
result “negative” (−) indicates disease absent. However, the test is not perfect. The
sensitivity of the test is the probability of a “positive” result conditional on the
disease being present; it is .98. The specificity of the test is the probability of a
“negative” result conditional on the disease being absent; it is .90. The incidence
of the disease is the probability that the disease is present in a randomly selected
individual; it is .005.
    Denoting specificity by p, sensitivity by q, incidence by π, and test outcome by
+ or −, develop an expression for the probability of disease conditional on a “pos-
itive” outcome and one for the probability of disease conditional on a “negative”
outcome, if the test is administered to a randomly selected individual. Evaluate
these expressions using the values given above.

Exercise 1.2.2 Non-Bayesian Statistics. Suppose the model A is y ∼ N (µ, 1),
µ ≥ 0, and the sample consists of a single observation y = y o .

  (a) Show that S = (max(y − 1.96, 0), max(y + 1.96, 0)) is a 95% classical
      confidence interval for µ, that is, P (µ ∈ S | µ, A) = .95.
  (b) Show that if y o = −2.0 is observed, then the 95% classical confidence inter-
      val is the empty set.

Exercise 1.2.3 Ex Ante and Ex Post Tests. Let y have a uniform distribution
on the interval (θ , θ + 1), and suppose that it is desired to test the null hypothesis
H0 : θ = 0 versus the alternative hypothesis H1 : θ = 0.9 (which are the only two
values of θ that are possible). A single observation x is available. Consider the test
that rejects H0 if y ≥ 0.95, and accepts H0 otherwise.

   (a) Calculate the probabilities of type I and type II errors for this test.
10                                                                                    INTRODUCTION


     (b) Explain why it does not make common sense, for decisionmaking purposes,
         to accept mechanically the outcome of this test when the observed y o lies
         in the interval (0.9, 1.0).


1.3 CONDITIONING AND UPDATING

Because a complete model provides a joint density p(θ A , y, ω | A), it is in prin-
ciple possible to address the entire range of possible marginal and conditional
distributions involving the unobservables, observables, and vector of interest. Let
yo denote the actual value of the observable—the data, “y observed.” Then with the
data in hand, the relevant probability density for a decision based on the model A
is p(ω | yo , A). This is the single most important principle in Bayesian inference in
support of decisionmaking. The principle, however, subsumes a great many details
taken up in subsequent chapters.
   It is useful to break up the process of obtaining p(ω | yo , A) into a number of
steps, and to introduce some more terminology. The distribution corresponding to
the density p(θ A | A) is usually known as the prior distribution and that corre-
sponding to p(y | θ A , A), as the observables distribution. The distribution of the
unobservable θ A , conditional on the observed yo , has density
                                 p(θ A , yo | A)   p(θ A | A)p(yo | θ A , A)
              p(θ A | yo , A) =                  =                                           (1.8)
                                   p(y | A)
                                        o                   p(yo | A)
                               ∝ p(θ A | A)p(yo | θ A , A).

Expression (1.8) is usually called the posterior density of the unobservable θ A . The
corresponding distribution is the posterior distribution.
   The distinction between the prior and posterior distributions of θ A is not quite
as tidy as this widely used notation and terminology suggests, however. To see
this, define Yt = (y1 , . . . , yt ), for t = 0, . . . , T with the understanding that
Y0 = {∅}, and consider the decomposition of the probability density of the observ-
ables y = YT :

                                            
                                            T
                         p(y | θ A , A) =         p(yt | Yt−1 , θ A , A).                    (1.9)
                                            t=1

In fact, densities of observables are usually constructed in exactly this way, because
when there is dependence between observations, a recursive model is typically the
natural representation.
                     t = (y1 , . . . , yt ) is available but (yt+1 , . . . , yT ) is not. (If “t”
                            o                                 o             o
   Suppose that Yo                     o

denotes time, then we are between periods t and t + 1). Then

                  p(θ A | Yot , A) ∝ p(θ A | A)p(Yot | θ A , A)
                                                    
                                                    t
                                   = p(θ A | A)           p(yos | Yos−1 , θ A , A).
                                                    s=1
CONDITIONING AND UPDATING                                                                11

When yot+1 becomes available, then

                                                     
                                                     t+1
               p(θ A | Yot+1 , A) ∝ p(θ A | A)             p(yos | Yos−1 , θ A , A)
                                                     s=1

                                    ∝ p(θ A | Yot , A)p(yot+1 | Yot , θ A , A).       (1.10)

The change in the distribution of θ A brought about by the introduction of yot+1 ,
made clear in (1.10), is usually known as Bayesian updating. Comparing (1.10)
with (1.8), note that p(θ A | Yot , A) plays the same role in (1.10) as does the prior
density p(θ A | A) in (1.8), and that p(yot+1 | Yot , θ A , A) plays the same role in
(1.10) as does p(yo | θ A , A) in (1.8). Indeed, from the perspective of what happens
at “time” t + 1, p(θ A | Yot , A) is the prior density of θ A , and p(θ A | Yot+1 , A) is
the posterior density of θ A . This emphasizes the fact that “prior” and “posterior”
distributions (or densities, or moments, or other properties of unobservables) are
always with respect to an incremental information set. In (1.8) this information is
the entire data set yo = YoT , whereas in (1.10) it is yot+1 .
   From the posterior density (1.8), the density relevant for decisionmaking is
                                
               p(ω | y , A) =
                       o
                                         p(θ A | yo , A)p(ω | θ A , yo , A) dθ A .    (1.11)
                                    A


It is important to acknowledge that we are proceeding in a way that is different
from most non-Bayesian statistics, generally termed “classical” statistics. The key
difference between Bayesian and non-Bayesian statistics is, in fact, in conditioning.
Likelihood-based non-Bayesian statistics conditions on A and θ A , and compares the
implication p(y | θ A , A) with yo . This avoids the need for any statement about the
prior density p(θ A | A), at the cost of conditioning on what is unknown. Bayesian
statistics conditions on yo , and utilizes the full density p(θ A , y, ω | A) to build up
coherent tools for decisionmaking, but demands specification of p(θ A | A).
    The strategic advantage of Bayesian statistics stems from the fact that its con-
ditioning is driven by the actual availability of information and by its complete
integration with the theory of economic behavior under uncertainty, achieved by
Friedman and Savage (1948, 1952). We shall return to this point in Section 1.6 and
subsequently in this book.
    Two additional matters need to be addressed, as well. The first is that (1.8) and
(1.11) are mere formalities as stated; actually representing the densities p(θ A | yo , A)
and p(ω | yo , A) in practical ways for decisionmaking is a technical challenge of high
order. Indeed, the principles stated here have been recognized since at least the mid-
1950s, but it was not until the application of simulation methods in the 1980s that
they began to take on the practical significance that they have today. We return to
these developments in Section 1.4 and Chapter 4.
    The other matter ignored is explicit attention to multiple models A1 , . . . , AJ . In
fact, it is not necessary to confine attention to a single model, and the developments
here may be extended to several models simultaneously. We do this in Section 1.5.
12                                                                      INTRODUCTION


Exercise 1.3.1 A Simple Posterior Distribution. Suppose that y ∼ N (µ, 1) and
the sample consists of a single observation y o . Suppose that an investigator has a
prior distribution for µ that is uniform on (0, 4).

     (a) Derive the investigator’s posterior distribution for µ.
     (b) Suppose that y o = −2. Find an interval (µ1 , µ2 ) such that

                                P [µ ∈ (µ1 , µ2 ) | y o ] = 0.95.

         (The answer consists of a pair of real numbers.)
     (c) Do the same for the case y o = 1.
     (d) Are your intervals in (b) and (c) the shortest possible in each case? (You
         need not use a formal argument. A sketch is enough.)

Exercise 1.3.2 Applied Conditioning and Updating. On a popular, nationally
televised game show the guest is shown three doors. Behind one door there is a
valuable prize (e.g., a new luxury automobile), and behind the other two doors there
are trivial prizes (perhaps a new toaster). The host of the game show knows which
prizes are behind which doors. The guest, who cannot see the prizes, chooses one
door for the host to open. But before he opens the door selected by the guest, the
host always opens one of the two doors not chosen by the guest, and this always
reveals a trivial prize. (The guest and the television audience, having watched the
show many times, know that this always happens.) The guest is then given the
opportunity to change her selected door. After the guest makes her final choice,
that door is opened and the guest receives the prize behind her chosen door.
   If you were the guest, would you change your door selection when given the
opportunity to do so? Would you be indifferent about changing your selection?
Defend your answer with a formal probability argument.

Exercise 1.3.3 Prior Distributions. Two graduate students play the following
game. An amount of money W is placed in a sealed envelope. An amount 2W is
placed in another sealed envelope. Student A is given one envelope, and student
B is given the other envelope. (The assignment of envelopes is random, and the
students do not know which envelope they have received.) Before student A opens
his envelope and keeps the money inside, he may exchange envelopes with student
B, if B is willing to do this. (At this point, B has not opened her envelope,
either; the game is symmetric.) In either case, each student keeps the money in the
envelope finally accepted. Both students are rational and risk-neutral; that is, they
behave so as to maximize the expected value of the money they keep at the end
of the game.
   Student A reasons as follows. “There is an unknown amount of money, x, in
my envelope. It is just as likely that B’s envelope has 2x as it is that it has x/2.
Conditional on x, my expected gain from switching envelopes is .5(2x + .5x) −
x = .25x. Since this is positive for all x, I should offer to switch envelopes.”
   Student B says that the expected gain from switching envelopes is zero.
SIMULATORS                                                                                 13

   Explain the fallacy in A’s argument, and provide the details of B’s argument.
In each case use the laws of probability carefully.


1.4 SIMULATORS

Decisionmaking requires specific tasks involving posterior distributions. The finan-
cial manager in Section 1.1.2 is concerned   about the distribution of values of an
asset 5 days from now ω = pT +5 = pT exp( 5s=1 yT +s ). She has at hand observa-
tions on returns through the present time period, T , of the form yo = (y1o , . . . , yTo ) ,
and is using a model with a parameter vector θ A . The value at risk she seeks to
determine is the number c with the property
                              pT −c
                                       p(ω | yo , A) dω = 0.05.
                              −∞

    The manager might recognize that she can decompose this problem into two
parts. First, if she knows the value of θ A —or, more precisely, if the model A
specifies the value of θ A with no uncertainty—then finding c amounts to deriving
the inverse cumulative distribution function (cdf) of ω from p(yT +1 , . . . , yT +5 |
yo , θ A , A). This task can be completed analytically for the model (1.3) with known
µ and σ 2 , but for realistic models with uncertainty about parameters this is at best
tedious and in general impossible.
    At this point the financial manager, or one of her staff, might point out that it is
relatively easy to simulate most models of financial time series. One such model is
the Markov mixture of normals model, discussed in more detail in Section 7.3, in
which each yt is drawn from one of L alternative normal distributions N (µj , σ 2j ).
Each day t is characterized by an unobserved state variable st that assumes one of
the values 1, 2, . . . or L, and then

                               st = j ⇒ yt ∼ N (µj , σ 2j ).                           (1.12)

The state variables themselves obey a first-order Markov process in which

                               P (st = j | st−1 = i) = pij .                           (1.13)

In applications to financial modeling it is reasonable that the values of σ 2j vary
                                    for example, σ 1 /σ 2 ≈ 3, and the state variable
                                                       2   2
substantially depending on the state,
is persistent as indicated by pii     j =i pij . Such a structure gives rise to episodes
of high and low volatility, a feature seen in most financial returns data.
    Widely available mathematical applications software makes it easy to simulate
this and many other models. Given the current state st = i, the next period’s state
is drawn from the distribution (1.13), and then yt+1 is drawn from the selected
normal distribution in (1.12). Our firm manager can exploit this fact if she knows
the parameters of the model and the current state sT = j . She repeatedly simulates
14                                                                      INTRODUCTION


the model forward from the current day T , obtaining in simulation m the returns
yT(m)
   +s (s = 1, . .. , 5) and the corresponding simulated asset price 5 days hence,
ω(m) = pTo exp( 5s=1 yT(m) +s ). At the end she can sort the M simulations of ω, and
find a number c(M) such that 5% of the draws are below and 95% are above
                                     a.s.
pTo − c(M) . It turns out that c(M) → c as M increases.
    This solves only part of the manager’s problem. The model, in fact, has many
unobservables, not only the unknown parameters µj , σ 2j and pij but also the
states st . Together they constitute the unobservables vector θ A in this model. The
simulation just described requires all of the parameters and the current state sT .
Noting that
                                 
                p(ω | yo , A) =       p(ω | yo , θ A , A)p(θ A | yo , A) dθ A , (1.14)
                               A

the manager might well recognize that if she could simulate

                                θ (m)
                                  A  p(θ A | y , A)
                                               o
                                                                               (1.15)

and next apply the algorithm just described to draw

                             ω(m)  p(ω | yo , θ (m)
                                                 A , A),                       (1.16)

then the distribution of ω(m) would be that corresponding to the density (1.14).
   This strategy is valid, but producing the draws in (1.15) is much more challeng-
ing than was developing the algorithm behind (1.16). The latter simulation was
relatively easy because it corresponds to the recursion in the natural expression of
the model; recall (1.4)–(1.6). Given θ A , the model tells us how y1 , then y2 , and
so on, are produced, and as a consequence simulating into the future is typically
straightforward. The distribution (1.15), on the other hand, asks us to reverse this
process: given that a set of observables was produced by the model A, with prior
distribution p(θ A | A) and observables distribution p(y | θ A, A), make drawings
from the distribution with posterior density p(θ A | yo , A). The formal definition
(1.8) is not much help in this task.
   This impasse is typical if we attempt to use simulation to unravel the actual
distribution corresponding to p(ω | yo , A) in a useful way. Until the late 1980s
this problem had succumbed to solution in only a few simple cases, and these did
not go very far beyond the even smaller set of cases that could be solved analyt-
ically from start to finish. Geweke (1989a) pointed out that importance sampling
methods described in Hammersly and Handscomb (1964) could be used together
with standard optimization methods to simulate θ (m)
                                                   A  p(θ A | y , A). The follow-
                                                                  o

ing year Gelfand and Smith (1990) published their discovery that methods then
being used in image reconstruction could be adapted to construct a Markov chain
G such that if

                            θ (m)           (m−1)
                              A  p(θ A | θ A     , yo , G)
MODELING                                                                                15

           d
then θ (m)
       A −→ p(θ A | y , A). This work in short order burgeoned into an even more
                       o

general set of procedures, known as Markov chain Monte Carlo (MCMC), which
achieves the same result for almost any complete model. Section 7.3 shows how to
apply these methods to the Markov mixture of normals model used in this example.
   All of these methods, including importance sampling, produce what are known
as posterior simulators. These algorithms make it practical to address quantitative
decisionmaking problems, using a rich variety of models. Posterior simulators are
the focus of Chapter 4.


1.5 MODELING

To this point we have taken the complete model (1.4)–(1.6) as given. In fact, the
investigator begins with much less. Typically the vector of interest ω is specified (at
least implicitly) by the client making the decision. The composition of the observ-
ables vector is sometimes obvious, but in general the question of which observables
are best used to inform quantitative decisionmaking is itself an important, interest-
ing, and sometimes difficult question.
    This leaves almost all of (1.4)–(1.6) to be specified by the investigator. There
is, of course, no algorithm mapping reality into models. The ability to isolate the
important features of an actual decision problem, and organize them into a model
that is workable and brings to bear all the important features of the decision is an
acquired and well-rewarded skill. However this process does involve some spe-
cific technical steps that themselves can be cast as intermediate decision problems
addressed by the investigator.
    One such step is to incorporate competing models A1 , A2 , . . . , AJ in the process
of inference and decisionmaking. In Section 1.2 we constructed a joint probability
distribution for the unobservables θ A , the observables y, and the vector of interest
ω, in the context of model A. Suppose that we have done that for each of models
A1 , . . . , AJ and that the vector of observables is the same for each of these models.
Then we have

     p(θ Aj | Aj ), p(y | θ Aj , Aj ), p(ω | θ Aj , y, Aj )   (j = 1, . . . , J ).
                                                                              J
   If we now provide a prior probability p(Aj ) for each model, with            j =1
p(Aj ) = 1, there is a complete probability distribution over models, unobserv-
                                                        J
ables, observables, and the vector of interest. Let A = j =1 Aj . In each model the
density (1.14), built up from (1.8) and (1.6), provides p(ω | yo , Aj ). Then

                                     
                                     J
                    p(ω | y, A) =           p(ω | y, Aj )p(Aj | y, A).               (1.17)
                                     j =1


The posterior density of ω is given by (1.17) with the data yo replacing the observ-
able y. It is a weighted average of the posterior densities of ω in the various models;
16                                                                                   INTRODUCTION


indeed, (1.17) is sometimes called model averaging. The weights are

                          p(Aj )p(yo | Aj )     p(Aj )p(yo | Aj )
       p(Aj | yo , A) =                     =                       .                     (1.18)
                             p(yo | A)          J
                                                   p(Aj )p(yo | Aj )
                                                           j =1


The data therefore affect the weights by means of
                                 
                p(yo | Aj ) =              p(θ Aj , yo | Aj ) dθ Aj
                                     Aj
                                 
                             =             p(θ Aj | Aj )p(yo | θ Aj , Aj ) dθ Aj .         (1.19)
                                     Aj


   The number p(yo | Aj ) is known as the marginal likelihood of model Aj . The
technical obstacles to the computation, or approximation, of p(yo | Aj ) are at least
as severe as those for simulating θ A , but rapid progress on this problem was made
during the 1990s, and this is becoming an increasingly routine procedure.
   For any pair of models (Ai , Aj ), we obtain

                          p(Ai | yo )   p(Ai ) p(yo | Ai )
                                      =       ·            .                               (1.20)
                          p(Aj | yo )   p(Aj ) p(yo | Aj )

Note that the ratio is independent of the composition of the full complement of
models in A. It is therefore a useful summary of the evidence in the data yo about
the relative posterior probabilities of the two models. The left side of (1.20) is
known as the posterior odds ratio, and it is decomposed on the right side into the
product of the prior odds ratio and the Bayes factor. Expressions (1.17) and (1.18)
imply that providing the marginal likelihood of a model is quite useful for the
subsequent work, including decisionmaking, with several models.
    Expression (1.19) for the marginal likelihood makes plain that the bearing of a
model on decisionmaking—its weight in the model averaging process (1.17)—
depends on the prior density p(θ Ai | Ai ) as well as the observables density
p(y | θ Ai , Ai ). In particular, a model Ai may be an excellent representation of
the data in the sense that for some value(s) of θ Ai , p(yo | θ Ai , Ai ) is large rela-
tive to the best fit p(yo | θ Aj , Aj ) in other models, but if p(θ Ai | Ai ) places low
(even zero) probability on those values, then the posterior odds ratio (1.20) may
run heavily against model Ai .
    The investigator’s problem in specifying p(θ Ai | Ai ) is no more (or less) difficult
than that of designing the observables density p(y | θ Ai , Ai ). The two are inseparable:
p(θ Ai | Ai ) has no implications for observables without p(y | θ Ai , Ai ), and p(y |
θ Ai , Ai ) says little about p(y | Ai ) until we have p(θ Ai | Ai ) in hand. The first two
components of any complete model, (1.4) and (1.5), combined with some relatively
simple simulation, can help in these steps of the investigator’s problem. Suppose that
one or more aspects of the observables y, which we can represent quite generally as
g(y), are thought to be important aspects of reality bearing on a decision, that therefore
DECISIONMAKING                                                                       17

should be well represented by the model. In the case of our financial decisionmaker
from Section 1.1.2, one concern might focus on the model’s stance on “crashes” in
the value of financial assets like the one day return of worse than −20% experienced
during October 1987, for many assets; then g(y) = 1 if y exhibits such a day and
g(y) = 0 if not. For any specified prior and observables densities, it is generally
straightforward to simulate

                      θ (m)
                        A  p(θ A | A), y
                                         (m)
                                              p(y | θ (m)
                                                       A , A)


and then construct g(y(m) ). The resulting g(y(m) ) (m = 1, . . . , ) is an independent
identically distributed (i.i.d.) sample from p[g(y) | A].
    This process enables the investigator to understand key properties of a model
A before undertaking the more demanding task of developing a posterior sim-
ulator θ (m)
          A  p(θ A | y , A). It provides guidance in choosing the prior density
                          o

p(θ A | A) corresponding to p(y | θ A , A), and can reveal that an observables density
p(y | θ A , A) fails to capture important aspects of reality no matter what the value of
θ A . These tasks are all part of what is generally referred to as “model specification”
in econometrics. We shall return to them in detail in Chapter 8.


1.6 DECISIONMAKING

The key property of the vector of interest ω is that it mediates aspects of real-
ity that are relevant for the decision that motivates the econometric or statistical
modeling in the first place. To illustrate this point, return again to the decision
of school administrators about the class sizes described in Section 1.1.1. School
administrators prefer certain outcomes to others; for example, it is quite likely that
they prefer high test scores and small teaching budgets to low test scores and large
expenditures for teachers’ salaries. Suppose, for sake of simplicity, that the teach-
ing budget can be controlled with certainty by hiring more or fewer teachers. In
Bayesian decision theory such a decision is known as an action, and represented
generically by a vector a. The vector of interest ω includes all the uncertain fac-
tors that matter to administrators in evaluating the outcome; it could be a single
summary of test scores, or it might disaggregate to measure test outcomes for
different groups of students. The expected utility paradigm, associated with von
Neumann and Morgenstern (1944), states that decisions are made so as to max-
imize the expected value of a utility function U (a, ω) defined over all possible
outcomes and decisions. The term “utility” is universal in economics, whereas in
Bayesian decision theory the concept of “loss” prevails; the loss function L(a, ω)
is used in place of the utility function U (a, ω). The only distinction is that the
decisionmaker seeks to minimize, not maximize, E[L(a, ω)]. We can always take
L(a, ω) = −U (a, ω).
   This paradigm fits naturally into the relationship between the model A with
parameter vector θ A , the observable vector y, and the vector of interest ω. Expres-
sion (1.11) provides the distribution relevant to the decision in the use of a single
18                                                                                INTRODUCTION


model A—that is, the distribution relevant for the expectation E[L(a, ω)], which
therefore may be written
                          
    E[L(a, ω) | yo , A] =   L(a, ω)p(ω | yo , A) dω
                                 A
                                 
                           =               L(a, ω)p(θ A | yo , A)p(ω | θ A , yo , A) dθ A dω.
                                     A


   Section 1.4 outlines how, in principle, we might obtain drawings ω(m) from
(1.11). Typically those drawings can be used to solve the formal decision problem.
In the simplest case, there are only two possible actions (a = 0, a = 1), and the
drawings ω(m) are i.i.d. Then, so long as E[L(0, ω)] and E[L(1, ω)] both exist—a
requirement for the expected utility paradigm to be applicable—the strong law of
large numbers implies

                                
                                M
                                                   a.s.
                           −1
                       M              L(a, ω(m) ) → E[L(a, ω) | yo , A]
                                m=1

for a = 0 and a = 1. More generally, if a is continuous and E[L(a, ω)] is twice
differentiable, then typically

                       
                       M
                                                   a.s.
                M −1         ∂L(a, ω(m) )/∂a → ∂E[L(a, ω) | yo , A]/∂a
                       m=1

and this feature may be exploited to solve for the value a =       a that minimizes
expected loss, using a steepest-descent algorithm. More often, the draws ω(m) from
(1.11) are serially dependent, but this complication turns out not to be essential.
We revisit these issues at the level of technical detail required for their application
subsequently in Chapter 4. This formalization of the decisionmaking process can
be extended to the case of several competing models, using the setup developed in
Sections 2.6 and 8.2.
   Decisionmaking plays, or should play, an important role in modeling and infer-
ence. It focuses attention, first, on the vector of interest ω that is relevant to the
decision problem—namely, the unobservables that will ultimately drive the sub-
jective evaluation of the decision ex post. Given ω, we may then consider the
observables y that are most likely to be useful in providing information about
ω before the decision is made. The observables then govern consideration of the
relevant models A, their vectors of unobservables θ A , and the associated prior
densities p(θ A | A). Note that this amounts to stepping backward through the
marginal–conditional decomposition (1.7), a process that is often informal.
   In practice, formal decisionmaking is most useful for the structure that it places
on the research endeavor from start to finish. Rarely, if ever, do decisionmakers
DECISIONMAKING                                                                  19

think and talk about decisions entirely and explicitly within the formal frame-
work we have laid out here. However, the discipline of formal decision theory
combined with Bayesian inference can, when well executed, earn the respect of
real decisionmakers, and therefore a “seat at the table.” In many ways, this is the
ultimate goal of Bayesian inference, and achieving it is a high reward to applied
econometrics and statistics.
CHAPTER 2




      Elements of Bayesian Inference


This chapter systematically develops the principles of Bayesian inference that are
used repeatedly in the rest of the book. The purpose is threefold: to set up nota-
tion, to provide an introduction for statisticians and econometricians unfamiliar with
Bayesian methods, and to set forth some technical challenges addressed in subse-
quent chapters. The development emphasizes the eventual application of Bayesian
inference in decisionmaking contexts.
    The introduction here is concise, concentrating on analytic essentials and touch-
ing lightly on some concepts of greater depth. Those versed in Bayesian methods
at the level of Berger (1985) or Bernardo and Smith (1994) can easily skip to the
fourth chapter and beyond, consulting Section 2.1 as required for notation. Those
seeking a complete introduction can consult these references as well as the next
chapter, perhaps supplemented by DeGroot (1970), Berger and Wolpert (1988),
and Poirier (1988) on the distinction between Bayesian and non-Bayesian meth-
ods. On Bayesian econometrics in particular, see Zellner (1971), Poirier (1995),
Koop (2003), and Lancaster (2004). All the concepts introduced in this chapter are
illustrated using the normal linear regression model.
    The results presented in this chapter are not operational. In particular, they
all involve integrals that rarely can be evaluated analytically, and the dimensions
of integration are typically greater than the four or five for which deterministic
numerical methods are practical. Chapter 4 provides the analytical development
of posterior simulators, which are then used in the practical procedures developed
subsequently.


2.1 BASICS

Bayesian inference takes place in the context of one or more statistical or econo-
metric models. A model describes the behavior of a p × 1 vector of observable
random vectors yt . The index t has one of a number of interpretations determined
by the application including time, individuals in a random sample, location, as
Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.

                                                                                   21
22                                                           ELEMENTS OF BAYESIAN INFERENCE


well as combinations of these and other relevant attributes of the observables. Let
Yt = {ys }ts=1 denote the subsample consisting of the first t observables. The sample
space for yt is ψ t , that for Yt is t , and ψ 0 = 0 = {ø}. A model, A, specifies a
corresponding sequence of probability density functions

                                 p(yt | Yt−1 , θ A , A),                              (2.1)

in which θ A is a kA × 1 vector of unobservables and θ A ∈ A ⊆ RkA . The inter-
pretation of θ A depends on the model A. In many contexts θ A is a vector of a fixed
number of unknown parameters. However, θ A may also include unobservables that
economists and other social scientists call “latent variables,” and in that case kA
typically depends on the size of the sample. We return to this interpretation in more
detail in Section 3.1.
   The notation p(·) will be used to denote a generic probability density function
(pdf) with respect to a generic measure ν(·). The measure ν permits the random
vector to be continuous (Lebesgue measure), discrete (point mass) or a mixture
of the two. Thus, for example, if ν(·) assigns ordinary (Lebesgue) measure
                                                                          1  to the
unit interval and
                  the measure  one  to the  point x = 0.7, and p(x)  =    2
                                                                              I(0,1) (x),
then P (A) = A p(x) dν(x) is the probability function corresponding to a random
variable that is uniformly distributed on the unit interval with probability 12 , and
takes on the value 0.7 with probability 12 .
   The pdf of YT , conditional on the model and the vector of unobservables θ A , is

                                          
                                          T
                      p(YT | θ A , A) =         p(yt | Yt−1 , θ A , A).               (2.2)
                                          t=1

If the model specifies that the yt are independent and identically distributed, then

                         p(yt | Yt−1 , θ A , A) = p(yt | θ A , A)

and in this case
                                                
                                                T
                         p(YT | θ A , A) =            p(yt | θ A , A).
                                                t=1

More generally, the index t may pertain to cross sections, to time series, or both.
Time series models and language preserve this generality.
    When used alone, expressions like yt and YT denote random vectors. In
equations (2.1) and (2.2) yt and YT are arguments of functions. These uses are
distinct from the observed values themselves. To preserve this distinction explic-
itly, denote observed yt by yot and observed YT by YoT . In general, the superscript
o will denote the observed value of a random vector. For example, if the observed
value of the random vector YT is YoT , then the likelihood function is any function
L(θ A ; YoT , A) ∝ p(YoT | θ A , A). Unless the number of observations, T , is important
to the topic at hand, we shall simply denote the observables by y, their observed
values (the data) by yo , and the sample space by .
BASICS                                                                                  23

   The pdf (2.2) is the first component of the model A introduced in Section 1.2.
The second component is the prior density p(θ A | A). The prior density is a
formal representation of the values of the vector of unobservables θ A that are
reasonable in the model A. It reflects everything that is known, or believed,
about θ A prior to learning the observed values yo . For example, if A has finite
Lebesgue measure, then the prior density could assign probability uniformly in A :
p(θ A ) = [ν(A )]−1 . The notation extends to the extreme case in which the model
assigns exact values θ ∗A to all unobservables, θ A = θ ∗A . In that case ν places point
mass at θ ∗A and p(θ ∗A ) = 1. In general, the functional forms of the observables
densities p(yt | Yt−1 , θ A , A) (t = 1, . . . , T ) and the prior density p(θ A | A) are
chosen simultaneously as part of the model A as discussed in Section 1.2.
   Given (2.2) and the prior density, we obtain

                        p(y, θ A | A) = p(θ A | A)p(y | θ A , A).                    (2.3)

Thus model A provides a joint density of the observables, y, and unobservables,
θ A . Expression (2.3) decomposes this density as a marginal density in θ A (the
prior) and a density in y conditional on θ A (the data density). The joint density can
also be expressed as the product of the marginal density in y and the conditional
density in θ A :
                        p(y, θ A | A) = p(y | A)p(θ A | y, A).                    (2.4)

   Both terms on the right side of (2.4) may be written in terms of the prior density
and observables density. The marginal density in y is
                                         
  p(y | A) =     p(y, θ A | A) dν(θ A ) =     p(θ A | A)p(y | θ A , A) dν(θ A ). (2.5)
                A                            A

Note that the integral appearing in this expression is absolutely convergent for
almost all y, because p(y, θ A | A) is the joint distribution of y and θ A . Expression
(2.5) is the density of the observable y implied by the model a priori. It is a
prediction of what the data will be, before they are observed. It makes explicit the
predictive content of the model A, and indicates the instrumental role of the vector
of unobservables θ A in expressing this prediction. This expression also emphasizes
that since the observables density and prior density are complementary in forming
the predictions of the model, they should be chosen together. If y is replaced with
yo in (2.5), then p(yo | A) is a real number.

   Definition 2.1.1    The marginal likelihood of the model A is p(yo | A).

   This terminology [which dates at least to Raiffa and Schlaifer (1961), Section
2.1] reflects the fact that with yo in place of y, (2.5) can be interpreted as
“marginalizing”
               the vector of unobservables in the likelihood function, that is,
p(yo | A) = A L(θ A ; yo , A) dν(θ A ). But note that this is true only if L(θ A ; yo , A)
carries forward all constants of integration in p(yo , θ A | A), that is, L(θ A ; yo , A) =
p(yo , θ A | A) and not simply L(θ A ; yo , A) ∝ p(yo , θ A | A).
24                                                       ELEMENTS OF BAYESIAN INFERENCE


     The second conditional density on the right side of (2.4) is

                                          p(θ A | A)p(y | θ A , A)
                       p(θ A | y, A) =                             .               (2.6)
                                                  p(y | A)

If y is replaced with yo in (2.6), then this expression provides the distribution of the
vector of unobservables θ A conditional on the data yo in the context of the model
A. Since p(θ A | A) conveys what is known about θ A before (“a priori”) learning
yo , p(θ A | yo , A) communicates what is known after (“a posteriori”) learning yo .

   Definition 2.1.2    The posterior density of the vector of unobservables θ A in
the model A is
                                          p(θ A | A)p(yo | θ A , A)
                      p(θ A | yo , A) =                             .              (2.7)
                                                  p(yo | A)

    The expression in the denominator of (2.7) is the marginal likelihood. In many
circumstances it suffices to know just the shape of the posterior density p(θ A |
yo , A) and it is costly to evaluate p(yo | A). In this case it is useful to exploit the
fact that

                       p(θ A | yo , A) ∝ p(θ A | A)p(yo | θ A , A).                (2.8)

   Definition 2.1.3 Any nonnegative function k(x) proportional to a probability
density function p(x) is a kernel of p(x).

    The expression on the right side of (2.8) is a kernel of the posterior density. In
general, any finitely integrable nonnegative function is the kernel of some proba-
bility density function. To emphasize the distinction between the posterior density
function proper and a kernel of that function, we shall sometimes refer to (2.7) as
the normalized posterior density, whereas the right side of (2.8) is the posterior
density kernel in standard form. Any function k(θ A | yo , A) ∝ p(θ A | yo , A) is a
kernel of the posterior density.
    The third and final component of the model A is a vector of interest ω ∈  ⊆ Rq
representing entities the model is intended to describe, together with a conditional
density p(ω | y, θ A , A). Whereas θ A is specific to the model A, ω remains the
same across models. This includes a wide range of possibilities.

Example 2.1.1 Vector of Interest in the Value at Risk Example If we         are inter-
ested only in the portfolio value 5 days hence, we can take ω = pT exp( 5s=1 yT +s ).
A model of asset returns, A, provides p(yt | Yt−1 , θ A , A), and thereby p(ω |
YoT , θ A , A). The simple, but unrealistic, model (1.3) implies log(ω|pT ) | (µ, σ 2 ) ∼
N (5µ, 5σ 2 ) conditional on θ A = (µ, σ 2 ) . As we shall see (Examples 2.1.2 and
2.3.3), for certain prior distributions we may remove the conditioning on µ and
σ 2 and obtain similar compact expressions for the distribution of ω. In general,
however, this will not be possible, and in particular it cannot be done in the more
realistic model (1.12)–(1.13).
BASICS                                                                                   25

   Definition 2.1.4 A complete model A consists of three components: the
observables density p(y | θ A , A), the prior density p(θ A | A), and the vector of
interest density, p(ω | y, θ A , A).

   The objective of inference can generally be expressed as the posterior density
of the vector of interest ω. When there is just one model, A, this is
                              
             p(ω | y , A) =
                     o
                                       p(ω | yo , θ A , A)p(θ A | yo , A) dν(θ A ).    (2.9)
                                  A


By means of (2.8) and (2.9), p(ω | yo , A) is expressed in terms of the three com-
ponents of the model A. Quite often—but by no means always—the objective of
inference can be expressed E[h(ω) | yo , A] for suitably chosen h(·). This formu-
lation includes several special cases of interest.
    If a hypothesis restricts θ A to a set A0 ⊂ A , then, by taking h(ω) = IA0 (θ A ),
we have E[h(ω) | yo , A] = P (θ A ∈ A0 | yo , A), the posterior probability that the
hypothesis is true in the context of model A. For example, suppose that in the
class size example (Section 1.1.1) the investigator uses a normal linear model in
which class size is the second component of xt , and wishes to ascertain whether
increasing class size lowers test scores. Then A0 might consist of all those sets
of parameters (β, h) for which β 2 < 0.
    Another important class of cases arises from prediction problems, ω =
(yT +1 , . . . , yT +q ). The appropriate choice of h(ω) may include expected values,
turning point probabilities, and predictive
                                                intervals. In the value at risk example
(Section 1.1.2) let ωs = pT exp( sr=1 yT +r ) (s = 1, . . . , 5) denote the portfolio
values over the next 5 days. The maximum value over the period corresponds
to h(ω) = sups=1,...,5 ωs . To assess the probability of a turning point in portfolio
value on day T + 3, we would set h(ω) = 1 if ω2 < ω3 > ω4 or ω2 > ω3 < ω4
and h(ω) = 0 otherwise. To assess the probability that pT − pT +5 ≥ c define
h(ω; c) = 1 if ω5 ≤ pT − c and h(ω; c) = 0 otherwise. The value at risk prob-
lem is to find that c for which E[h(ω; c) | YoT , A] = .05, a relatively easy task if
we can compute E[h(ω; c) | YoT , A] for any value of c.
    Yet another useful class of functions arises whenever a decisionmaker must take
one of two actions, a1 or a2 . Then, h(ω) = L(a1 , ω) − L(a2 , ω), in which L(a, ω)
denotes the loss incurred if action a is taken and then the realization of the vector of
interest is ω. In the drug approval example at the beginning of Chapter 1, the FDA
must decide whether to approve a drug; ω might be a vector of health outcomes.
In the merger example, the regulatory authority must either approve or disapprove
the proposed merger; ω might be a vector of prices of products produced by the
firms involved.

Example 2.1.2 Normal Linear Regression Model For an observable T × 1 vec-
tor of dependent variables y and T × k matrix of fixed covariates X, assume

                  y | (β, h, X, A) ∼ N (Xβ, h−1 IT ); rank(X) = k.                    (2.10)
26                                                        ELEMENTS OF BAYESIAN INFERENCE


The fixed and observed covariates X are part of the model specification A, but it
will prove convenient to include them explicitly in the notation for the conditional
distribution of observables (2.10). We shall sometimes write X = [x1 , . . . , xT ] and
let ε denote the T × 1 vector of disturbances, with εt = yt − β  xt (t = 1, . . . , T ).
The parameter h is the precision of each of the i.i.d. disturbances εt ; it is the
inverse of var(εt ) = σ 2 . (More generally, the precision of any random variable is
the inverse of its variance.) The vector of unobservables is the parameter vector
θ A = (β  , h). The coefficient vector β and the precision h are independent in the
prior. The prior distribution of β is

                                 β | A ∼ N (β, H−1 ).                             (2.11)

In (2.11) the mean β is a k × 1 vector of constants. This vector is specified as
part of the prior distribution. The precision H is a k × k positive definite matrix of
constants, also specified as part of the prior distribution. (In general, an underscore
will denote constants in prior distributions.) The prior distribution of h is

                                   s 2 h | A ∼ χ 2 (ν).                           (2.12)

The formulation (2.12) is a concise way of expressing a gamma distribution for h.
In general, the two-parameter gamma distribution can be represented in this form
[see Johnson et al. (1994), Section 17.3]. In a given application, (2.11)–(2.12) is not
necessarily an adequate representation of prior information and beliefs, and other
prior distributions could be used. However, (2.11)–(2.12) has attractive analytical
properties that will become clear in due course, and Section 8.4 discusses methods
for modifying this and other prior distributions.
   In (2.11) β , H, and H−1 are respectively the prior mean, prior precision, and
prior variance of β. Thus
                                  1/2
             p(β | A) = (2π)−k/2 H exp[−(β − β) H(β − β)/2].                   (2.13)

To derive the probability density corresponding to (2.12) recall that if w ∼
χ 2 (ν) then
                 p(w) = [2ν/2 (ν/2)]−1 w(ν−2)/2 exp(−w/2),              (2.14)

E(w) = ν, and var(w) = 2ν. Hence the prior mean and variance of h are E(h |
A) = ν/s 2 and var(h | A) = 2ν/s 4 , respectively. Through the usual change of vari-
able, the pdf of h is

              p(h | A) = [2ν/2 (ν/2)]−1 (s 2 )ν/2 h(ν−2)/2 exp(−s 2 h/2).         (2.15)

Another change of variable yields the prior pdf of σ 2 = h−1 :

       p(σ 2 | A) = [2ν/2 (ν/2)]−1 (s 2 )ν/2 (σ 2 )−(ν+2)/2 exp(−s 2 /2σ 2 ).     (2.16)
BASICS                                                                              27

   From the specification (2.10), we obtain

      p(y | β, h, X, A) = (2π)−T /2 hT /2 exp[−h(y − Xβ) (y − Xβ)/2].          (2.17)

The posterior density kernel in standard form is the product of (2.13), (2.15), and
(2.17) evaluated at yo :

         (2π )−(T +k)/2 [2ν/2 (ν/2)]−1                                         (2.18a)
               1/2
            · H (s 2 )ν/2                                                    (2.18b)
            · h(T +ν−2)/2 exp(−s 2 h/2)                                        (2.18c)
                                                       
            · exp{−[(β − β) H(β − β) + h(y − Xβ) (y − Xβ)]/2}.
                                                 o          o
                                                                               (2.18d)

To interpret this expression, it is useful to begin with some algebra. Complete the
square in β of the term in brackets in (2.18d) to obtain

  (β − β) H(β − β) + h(yo − Xβ) (yo − Xβ) = (β − β) H(β − β) + Q,

where
                  H = H + hX X,                                                (2.19)
                          −1                     −1
                   β = H (Hβ + hX y) = H (Hβ + hX Xb),                        (2.20)
                                             
                  Q = hyo yo + β  Hβ − β Hβ,                                  (2.21)

where b denotes the coefficients in the ordinary least-squares fit of yo to X, b =
(X X)−1 X yo .
    If (2.18a)–(2.18d) is interpreted as a function of β only, then (2.18d) is a pos-
terior density kernel for β conditional on h, and our square completion shows that

                 p(β | h, yo , X, A) ∝ exp[−(β − β) H(β − β)/2].               (2.22)

Consequently
                                                       −1
                           β | (h, yo , X, A) ∼ N (β, H ).                      (2.23)

The conditional posterior distribution of β is normal because the prior distribution
of β is normal and the likelihood function in β, (2.18d), is a kernel of a multivariate
normal distribution. Note the symmetry of the prior and observables distributions
as they are combined in (2.19), (2.20), and (2.23). The precision of the posterior
distribution is the sum of the prior precision and the term hX X. The latter is the
posterior precision in the limit as the prior precision H → 0, and might therefore
be called the observables precision matrix. The mean of the posterior distribution
is the matrix weighted average of the prior mean β and the vector b. The latter is
the limiting posterior mean as H → 0. The respective matrix weights are the prior
precision matrix H and the observables precision matrix hX X.
28                                                      ELEMENTS OF BAYESIAN INFERENCE


   Interpreting the product of (2.18a)–(2.18d) as a function of h alone, we see
that a kernel of h | (β, yo , X, A) is the product of (2.18c) and (2.18d). Hence the
posterior density of h conditional on β and the data is

  p(h | β, yo , X, A) ∝ h(T +ν−2)/2 exp{−[s 2 + (yo − Xβ) (yo − Xβ)]h/2}.      (2.24)
Comparing this expression with (2.12) and (2.15), it is evident that

                            s 2 h | (β, yo , X, A) ∼ χ 2 (ν)                    (2.25)

where
                 s 2 = s 2 + (yo − Xβ) (yo − Xβ) and ν = T + ν.                (2.26)

There is again an evident symmetry between the prior and the observables, and it
again arises because the kernel of the prior density for h, (2.15), and the kernel of
the observables density function in h, (2.17) have the same functional form.
   The prior distributions (2.11) and (2.12) are attractive because they lead to the
simple and interpretable results (2.23) and (2.25). We shall study this property more
generally and systematically in the consideration of conjugate and conditionally
conjugate priors, in Section 2.3. The results (2.23) and (2.25) are not immedi-
ately useful, for they do not provide distributions conditional only on the data and
prior information. We cannot obtain these distributions analytically, although this is
possible using different priors. Alternatively, a numerical approach may be taken.
We will pursue the former strategy in Section 2.3, and the latter method will be
developed in Section 4.3.

Example 2.1.3 Geometric Interpretation of the Normal Linear Regression
Model with Two Covariates There is an informative geometric interpretation
of the posterior mean β, conditional on h, due to Leamer (1973). A geometric
representation of the level contours of the prior pdf of β (2.13) consists of the
ellipses

                            β : (β − β) H(β − β) = c1

for various positive constants c1 . Because (2.13) implies (β − β) H(β − β) | A ∼
χ 2 (k), the prior probability that β is in the interior of the ellipse is 1 − α if
c1 = χ 2α (k). Interpreting the pdf of y given in (2.17) as a density kernel for β
and substituting yo for y, the level contours of that density are the ellipses β :
(β − b) hX X(β − b) = c2 .
    Now consider the set of points β such that there is no point β ∗ ∈ Rk for which
both p(β ∗ | A) > p(β | A) and p(yo | β ∗ , h, X, A) > p(yo | β, h, X, A). Through
the usual constrained optimization calculus, this is the set of points that solves the
first-order condition for the objective function

                   (β − b) hX X(β − b) + λ(β − β) H(β − β).                  (2.27)
BASICS                                                                                             29

     4                                                   4

     3                                                   3

     2                                                   2
b2




                                                    b2
     1                                                   1

     0                                                   0

   −1                                                 −1

   −2                                                 −2
     −4 −3     −2   −1     0    1     2   3     4       −4 −3     −2   −1     0    1    2    3     4
                          (a)                                                (b)

Figure 2.1. Normal linear model with two regressors—geometric interpretation: (a) prior and likelihood
contours with locus of posterior means; (b) prior, likelihood, and posterior contours.



This entire set is indexed by the Lagrange multiplier λ. Setting the first derivative
of (2.27) with respect to β to zero, this curve may be expressed

                         β(λ; h) = [hX X + λH]−1 (hX Xb + λHβ)

Observe that β(1; h) = β.
   An example for the case k = 2 is presented in Figure 2.1. The level contours of
the prior distribution are represented by the lighter ellipses; those for the likelihood,
by the darker ellipses. The curve β(1; h) is the solid curve shown in Figure 2.1a.
This locus of tangencies between the ellipses is indexed by h and traces the condi-
tional posterior mean β as a function of h. In particular, limh→0 β(1; h) = β, and
limh→∞ β(1; h) = b. In the example portrayed, β 2 (1; h) < β 2 and β 2 (1; h) < b2 ,
for most values of h. This illustrates some subtleties of the matrix weighted aver-
age of β and b in (2.20). The darkest ellipses in Figure 2.1b indicate the level
contours of the posterior distribution of β for the case h = 1. For more on the
question of the sensitivity of the posterior mean to the prior mean, in this setting,
see Leamer (1982).

Exercise 2.1.1 Combining Information “Suppose that a random sample of size
T is drawn from a normal population with unknown mean µ and known precision
h. There is always a normal prior distribution for µ that will lead to a normal
posterior distribution for µ with mean µ and precision h, for any real µ and
positive h.”
   Is this statement true or false? If true, prove it. If false, provide a counterexample,
a correct version of the statement, and a proof of the correct version.

Exercise 2.1.2 Probability Density Kernels Let p(y) denote the probability den-
sity of an n × 1 random vector y and suppose that

                                    log p(y) = y Ay + b y + c.
30                                                     ELEMENTS OF BAYESIAN INFERENCE


The n × n matrix A is negative definite.

     (a) Show that y has a multivariate normal distribution. Express its precision H
         in terms of A and its mean µ in terms of A and b.
     (b) Express c in terms of H and µ.

Exercise 2.1.3 The Generalized Normal Linear Regression Model Suppose
that in model A of Example 2.1.2, y | (β, X, A)∼N (Xβ, V), where V is a known
T × T positive definite matrix. Show that given the prior distribution (2.11) the pos-
                                                         −1
terior distribution of β | (yo , X, A) is then β ∼N (β, H ), and provide expressions
for H and β.

Exercise 2.1.4 The Short Rank Normal Linear Model Suppose that in the nor-
mal linear model of Example 2.1.2, rank(X) < k. All other aspects of the model
remain the same as in Example 2.1.2.
                                                     −1
     (a) Show that β | (h = 1, yo , X, A) ∼ N (β, H ), and provide expressions for
         H and β. [Of course, the least-squares estimate b = (X X)−1 X yo does not
         exist in this case.]
     (b) Show that if k = 6, then

               P [(β−β) H(β−β) < 12.5922 | (h = 1, yo , X, A)] = .95.

     (c) Suppose that for the k × 1 vector a, it is the case that Xa = 0. Suppose also
         that H = Ik . Show that the prior distribution and the posterior distribution
         of a β are the same. For k = 2, draw a sketch in β 1 and β 2 space similar
         to Figure 2.1a to illustrate what is going on. [Hint: (H + X X)−1 = H−1 −
         H−1 X (XH−1 X + IT )−1 XH−1 .]
     (d) Rework (c) for the case of any nonsingular prior variance matrix H−1 . For
         some linear combinations a β, the prior and posterior distribution are the
         same. What can you say about the vectors a for which this is true? How
         does the sketch you drew in (c) change for this more general case?

Exercise 2.1.5 Distribution of σ 2 and Related Parameters This exercise is
about the prior distribution of σ 2 in (2.16), its properties, and related distributions.

     (a) Derive (2.16) from (2.15).
     (b) Suppose that σ 2 has the pdf (2.16). Derive the mean and variance of σ 2 ,
         indicating any additional assumptions that are necessary for these moments
         to exist. [Hints:
          (i) This is not an elaborate integration problem. What does (2.16) tell you
              about the integral of the kernel of the pdf of σ 2 ?
         (ii) (x + 1) = x (x) for all x > 0.]
     (c) If σ 2 has the pdf (2.16), what is the pdf of σ ? Express the median of
         the distribution of σ in terms of the median χ 2.50 (ν) of the chi-squared
         distribution with ν degrees of freedom.
SUFFICIENCY, ANCILLARITY, AND NUISANCE PARAMETERS                                    31

2.2 SUFFICIENCY, ANCILLARITY, AND NUISANCE PARAMETERS

The steps that are undertaken to derive the posterior distribution p(θ A | yo , A) or
the marginal likelihood p(yo | A) depend on the relations between yo and θ A in
these expressions. In particular circumstances these expressions can be simplified.
Two of the most useful arise when the data can be reduced to a smaller set of
statistics (called sufficient statistics) for the purpose of inference, and again when a
subset of this set (called ancillary statistics) can be regarded as fixed for the same
purpose.

2.2.1 Sufficiency

Definition 2.2.1 The vector s = s(y; A) is a sufficient statistic in a model with
the observables density p(y | θ A , A) if

               p[y | s(y; A), θ A , A] = p[y | s(y; A), A] ∀ θ A ∈ A .          (2.28)

   Heuristically, (2.28) implies that there is no information about y originating in
θ A in the density p(y | θ A , A), beyond that conveyed by s ex ante. This suggests
that in learning about θ A , nothing would be lost by confining attention to s(y; A)
rather than y. This is indeed the case.

   Theorem 2.2.1 Ex Post and Ex Ante Equivalence of Sufficiency The vector
s(y; A) is a sufficient statistic in a model with observables density p(y | θ A , A) if
and only if for all θ A ∈ A and for all y ∈ , we have

                         p(θ A | y, A) = p[θ A | s(y; A), A].                    (2.29)


   Proof: Suppose that (2.28) is true. Then
                                              p(y | θ A , s, A)p(θ A | s, A)
           p(θ A | y, A) = p(θ A | y, s, A) =
                                                       p(y | s, A)
                           p(y | s, A)p(θ A | s, A)
                         =                          = p(θ A | s, A).
                                 p(y | s, A)
Conversely, if (2.29) is true, then
                                p(θ A | y, s, A)p(y | s, A)
              p(y | s, θ A , A) =
                                       p(θ A | s, A)
                                p(θ A | y, A)p(y | s, A)
                              =                           = p(y | s, A).
                                     p(θ A | y, A)

  Note that the conditions in Theorem 2.2.1 hold for any choice of the prior density
p(θ A | A) and vector of interest ω. This is because sufficiency is a property of the
32                                                     ELEMENTS OF BAYESIAN INFERENCE


observables density p(y | θ A , A) alone. In demonstrating the sufficiency of s(y; A)
in an observables density, it is usually easiest to use a third, equivalent condition.

   Theorem 2.2.2 Factorization Criterion The vector s(y; A) is a sufficient
statistic in a model with data density p(y | θ A , A) if and only if

                     p(y | θ A , A) = p[s(y; A) | θ A , A]r(y; A)               (2.30)

for some function r(y; A).

   Proof: It suffices to show that (2.29) and (2.30) are equivalent. First suppose
that (2.30) is true. Then

                          p(y | θ A , A)p(θ A | A)
          p(θ A | y, A) =
                                  p(y | A)
                          p(s | θ A , A)r(y; A)p(θ A | A)
                        =                                 = p(θ A | s, A).
                                       p(y | A)

On the other hand, given (2.29), it follows that

                           p(θ A | y, A)p(y | A)
           p(y | θ A , A) =
                                 p(θ A | A)
                                         p(y | A)
                         = p(θ A | s, A)
                                         p(θ A | A)
                           p(s | θ A , A)p(θ A | A) p(y | A)
                         =                          ·
                                   p(s | A)           p(θ A | A)
                           p(s | θ A , A)p(y | A)
                         =                        = p(s | θ A , A)r(y; A),
                                  p(s | A)

where in the last equation r(y; A) = p(y | A)/p(s | A).

   The factorization criterion is particularly useful in demonstrating that s(y; A) is
a sufficient statistic. This is because it is often relatively easy to demonstrate that
for the likelihood function

                          L(θ A ; y, A) = L[θ A ; s(y; A), A].                  (2.31)

It is always the case that

                         L(θ A ; y, A) = p(y | θ A , A)r1 (y),

where r1 (y) absorbs any constants excluded from the likelihood function, and

                   L[θ A ; s(y; A), A] = p[s(y; A) | θ A , A]r2 (y),
SUFFICIENCY, ANCILLARITY, AND NUISANCE PARAMETERS                                           33

where r2 (y) absorbs any such constants, including the Jacobian of transformation
between y and s(y; A). Hence, if (2.31) is true for all θ A ∈ A and y ∈ Y , then
s(y; A) is a sufficient statistic.

Example 2.2.1 Sufficient Statistics in the Normal Linear Regression Model
From (2.17), we have

               p(y | β, h, X, A) ∝ hT /2 exp[−h(y − Xβ) (y − Xβ)/2].

Completing the square, we obtain

          (y − Xβ) (y − Xβ) = (y − Xb) (y − Xb) + (β − b) X X(β − b)
                                 = s 2 + (β − b) X X(β − b),

where b = (X X)−1 X y, and s 2 = (y − Xb) (y − Xb). By the factorization crite-
rion, [b, s 2 , X X, T ] is a sufficient statistic in the normal linear regression model
A. This is equivalent to [Z Z, T ], where Z = [X, y].


2.2.2 Ancillarity

Definition 2.2.2 Suppose that s(y; A) is a sufficient statistic in the observables
density p(y | θ A , A). If there exist partitions s = (s1 , s2 ) and θ A = (θ A1 , θ A2 )
such that

                              p(θ A | A) = p(θ A1 | A)p(θ A2 | A),                      (2.32)
                          p(s1 | θ A , A) = p(s1 | θ A1 , A),                           (2.33)
                       p(s2 | s1 , θ A , A) = p(s2 | s1 , θ A2 , A),                    (2.34)

then s1 is an ancillary statistic with respect to θ A2 .

   Ancillarity implies

    p(θ A | y, A) ∝ p(θ A | s, A)
                   ∝ p(θ A1 | A)p(θ A2 | A)p(s1 | θ A , A)p(s2 | s1 , θ A , A)
                   = p(θ A1 | A)p(s1 | θ A1 , A)p(θ A2 | A)p(s2 | s1 , θ A2 , A).       (2.35)

It simplifies inference when the vector of interest ω depends on θ A2 and y, but not
θ A1 , or, alternatively, when ω depends on θ A1 and y, but not θ A2 . In the first case
p(ω | y, θ A , A) = p(ω | y, θ A2 , A) and (2.35) implies

                     p(θ A2 | y, A) ∝ p(θ A2 | A)p(s2 | s1 , θ A2 , A).
34                                                             ELEMENTS OF BAYESIAN INFERENCE


Then
                      
     p(ω | y, A) =              p(ω | y, θ A , A)p(θ A | y, A) dν(θ A )
                          A
                      
                  ∝             p(ω | y, θ A2 , A)p(θ A2 | A)p(s2 | s1 , θ A2 , A) dν(θ A2 ).
                          A2

This means that for purposes of learning about ω from the data yo it is necessary
only to use the prior density of θ A2 , p(θ A2 | A), and the conditional density of
s2 , p(s2 | s1 , θ A2 , A). Since p(ω | y, A) is not affected by the prior distribution
of θ A1 or the marginal density p(s1 | θ A , A), it is not necessary to develop these
distributions beyond establishing the properties (2.32)–(2.34). The random vector
s1 (yT ; A) can be treated as fixed, and the parameter vector θ A1 can be ignored.

Example 2.2.2 Ancillarity in the Normal Linear Regression Model Mod-
ify the assumptions made in Example 2.1.2 by making X random, with pdf
p(X | η, A),η ∈ H . If p(β, h, η | A) = p(β, h | A)p(η | A), then X is ancillary
with respect to (β, h). If the distribution of the vector of interest depends only on
β and h, the matrix X can be treated as fixed and the parameter vector η ignored.
That is exactly what was done in Example 2.1.2. Therefore that treatment of the
normal linear regression model with X fixed is also appropriate when X is random
but ancillary with respect to (β, h), and the distribution of the vector of interest
depends only on β and h. This happens often in applied work.

   If p(ω | y, θ A , A) = p(ω | y, θ A1 , A), the factorization (2.35) is also useful,
because then
                    
    p(ω | y, A) ∝        p(ω | y, θ A1 , A)p(θ A1 | A)p(s1 | θ A1 , A) dν(θ A1 ).
                      A1


Since p(ω | y, A) is not affected by the prior distribution of θ A2 or the conditional
density p(s2 | s1 , θ A2 , A), it is not necessary to develop these distributions beyond
establishing the properties (2.32)–(2.34). The random vector s2 can simply be
ignored.

Example 2.2.3 Missing Data It is sometimes the case that not all of the observ-
ables y are, in fact, observed. For example, in a survey some respondents may
not reply to some questions; time series data may be quarterly before a certain
date and monthly thereafter. Let y = (yo , ym ), where yo denotes the observables
subsequently observed and ym denotes those that are subsequently missing. Let the
inclusion indicator I be isomorphic to y with It = 1 if yt ∈ yo and It = 0 if yt ∈ ym .
Without further assumptions a complete model must specify p(y, I | θ A , A). But
suppose further that θ A = (θ A1 , θ A2 ) and

                p(y, I | θ A1 , θ A2 , A) = p(y | θ A1 , A)p(I | y, θ A2 , A)              (2.36)
SUFFICIENCY, ANCILLARITY, AND NUISANCE PARAMETERS                                             35

and p(θ A | A) = p(θ A1 | A) p(θ A2 | A). If, in addition

                       p(I | yo , ym , θ A2 , A) = p(I | yo , θ A2 , A)                    (2.37)

then the missing observables ym are said to be missing at random. From (2.36)
                            
       p(yo , I | θ A , A) = p(yo , ym | θ A1 , A)p(I | yo , ym , θ A2 , A) dν(ym )
                                                      
                          = p(I | yo , θ A2 , A)          p(yo , ym | θ A1 , A) dν(ym )

                          = p(I | yo , θ A2 , A)p(yo | θ A1 , A).                          (2.38)

[If p(I | y, θ A2 , A) = p(I | θ A2 , A), then the missing observables ym are said to
be missing completely at random, which of course implies (2.37). For further
discussion, see Gelman et al. (1995) or Little and Rubin (2002).] Comparison of
(2.38) with (2.33) and (2.34) shows that yo is an ancillary statistic with respect to
θ A2 . If the vector of interest ω does not depend on θ A2 , as is generally
                                                                          the case,
then the investigator need be concerned only with p(θ A1 | A) and p(yo , ym |
θ A1 , A) dν(ym ). The last expression is cumbersome, in principle, but can often be
managed easily using simulation methods; see Example 5.2.1 and Exercises 5.3.3,
6.4.3, and 7.1.1.


2.2.3 Nuisance Parameters
If θ A = (θ A1 , θ A2 ) and p(ω | y, θ A , A) = p(ω | y, θ A2 , A) but there is no ancil-
lary statistic with respect to θ A2 , then θ A1 is a vector of nuisance parameters.
In non-Bayesian econometrics nuisance parameters can be troublesome, because
test and related statistics pertaining to E[h(ω) | y, θ A , A] depend on the value
of the unknown parameter vector θ A2 . Nuisance parameters never present any
fundamental difficulty in Bayesian inference, because they are marginalized in the
posterior distribution of ω:
                                
            p(ω | yo , A) =         p(ω | yo , θ A , A)p(θ A | yo , A) dν(θ A )
                              A
                              
                          =            p(ω | yo , θ A2 , A)p(θ A2 | yo , A)
                              A2
                                  
                              ×              p(θ A1 | θ A2 , yo , A) dν(θ A1 ) dν(θ A2 )
                                       A1
                              
                          =            p(ω | yo , θ A2 , A)p(θ A2 | yo , A) dν(θ A2 ).
                              A2


In a posterior simulator, if θ (m)                       (m)
                               A ∼ p(θ A | y , A) then θ A1 can be ignored and
                                            o
                  (m)
ω ∼ p(ω | y , θ A2 , A).
  (m)          o
36                                                       ELEMENTS OF BAYESIAN INFERENCE


Example 2.2.4 Precision as a Nuisance Parameter in the Normal Linear
Regression Model It is often the case that p(ω | β, h, A) = p(ω | β, A) in this
model. In the context of Example 2.1.2 the precision h is then a nuisance parameter.
At a formal level, we may therefore work directly with the posterior distribution
β | (yo , X, A) instead of (β, h) | (yo , X, A) by integrating h from the joint dis-
tribution whose kernel is (2.18c)–(2.18d). At a practical level this is challenging
since there is no closed-form solution except in a few limiting cases like the one
presented in Example 3.2.1. Numerical procedures provide a ready solution to the
practical problem for the situation of Example 2.1.2; see Example 4.3.1.

Exercise 2.2.1 Models for Positive Observables The observable yt is strictly
positive. In model A, the distribution of yt is exponential:

         yt | (θ, A) ∼ exp(θ −1 ), p(yt | θ , A) = θ exp(−θyt )I(0,∞) (yt ).

In model B, the distribution of yt is half-normal:

                        yt | (h, B) ∼ H N (0, h−1 ), p(yt | h, B)
                              = (π/2)−1/2 h1/2 exp(−hyt2 /2)I(0,∞) (yt ).

The observables y1 , . . . . , yT are independently and identically distributed. Indicate
a vector of sufficient statistics in model A, and one in model B.
   (For continuation, see Exercise 2.3.3.)

Exercise 2.2.2 A Complete Uniform Distribution Model Suppose that
y1 , . . . , yT are independently distributed, each with a uniform distribution on the
interval [0, θ].

     (a) What is p(y1 , . . . , yT | θ , A)?
     (b) Find a 2 × 1 sufficient statistic vector for θ .
     (c) Find the maximum likelihood estimator of θ . What important regularity
         condition underlying the conventional asymptotic distribution theory of max-
         imum likelihood estimators is violated in this case?
     (d) Suppose that the model is completed with the prior density

                               p(θ | A) = λ exp(−λθ )I(0,∞) (θ ),

         where λ is a specified positive constant. Find a kernel of the posterior density
         for θ .
     (e) Suppose that the model is completed with the prior density p(θ | A) =
         c−1 I(0,c) (θ ), where c is a specified positive constant. Find the posterior den-
         sity (not a kernel) and the moments E(θ | yo , A) and var(θ | yo , A).

     (For continuation, see Exercise 2.3.2.)
SUFFICIENCY, ANCILLARITY, AND NUISANCE PARAMETERS                                        37

Exercise 2.2.3 Sufficiency and Ancillarity for the Uniform Distribution Sup-
pose that (yt , t = 1, . . . , T ) are independently distributed, each with a uniform
distribution on the interval [θ , θ + 1]. Define

  ymin = min (yt ); ymax = max (yt ); y ∗ = (ymin + ymax )/2; r = ymax − ymin .
          t=1,...,T               t=1,...,T



  (a) Show that (y ∗ , r) is a sufficient statistic.
  (b) Show that y ∗ is not a sufficient statistic.
  (c) Show that the distribution of yt is location-invariant: p(yt | θ + a) = p(yt −
      a | θ).
  (d) Show that the distribution of r does not depend on θ .
  (e) Show that r is ancillary with respect to θ .

                                                                                i.i.d.
Exercise 2.2.4 A Truncated Normal Distribution Suppose that yt ∼ N
(µ, h−1 ) but that yt is also truncated below at a:

                  p(yt | µ, h, a, A) ∝ exp[−h(yt − µ)2 /2]I[a,∞) (yt ).

  (a) Write the probability density p(y1 , . . . , yT | µ, h, a, A).
  (b) Find a nontrivial vector of sufficient statistics s in a model with this observ-
      ables density. (The trivial vector of sufficient statistics is the entire
      data set.)
  (c) Are any of the sufficient statistics in (b) ancillary with respect to (µ, h)?

Exercise 2.2.5 Conditioning in the Normal Linear Regression Model Assume
the observables distribution

                           y1t = αy2t + β 1 x1t + β 2 x2t + ε1t               (2.39)
                                 y2t = γ 1 x1t + γ 2 x3t + ε2t                (2.40)
                                                        
                           ε1t     i.i.d.      0            h−1 0
                                    ∼ N             ,        1
                           ε2t                 0             0 h−1
                                                                2


for t = 1, . . . , T . The covariates x1t , x2t , and x3t are all fixed. This is a sim-
ple example of what is called a “recursive simultaneous equations system” in
econometrics. Note that y2t is determined in (2.40); conditional on y2t , y1t is then
determined independently in (2.39).

  (a) Indicate a vector of sufficient statistics. (There is more than one right answer.
      But a shorter vector is better than a longer vector.)
  (b) Suppose that the vector of interest ω is a function of only α and β 1 . What
      are the ancillary statistics, if any? What are the nuisance parameters, if any?
38                                                             ELEMENTS OF BAYESIAN INFERENCE


     (c) In the same situation as (b), can you reformulate the model and thereby
         reduce the vector of sufficient statistics? If so, indicate any ancillary statistics
         and nuisance parameters in this new model.
     (d) Suppose that what is ultimately of interest is P (y1,T +1 > c | xT +1 = xT +1 ),
         where it is assumed that the same model will apply in period T + 1 and

                                 xT +1 = (x1,T +1 , x2,T +1 , x3,T +1 ).

         What are the ancillary statistics, if any? What are the nuisance parameters,
         if any?


2.3 CONJUGATE PRIOR DISTRIBUTIONS

The densities p(θ A | A) and p(YT | θ A , A) together represent a belief regarding the
observables YT . In selecting the distribution of unobservables, or the conditional
distribution of observables, the richer the class of functional forms from which to
choose, the more adequate the representation of prior beliefs possible. On the other
hand, the choice is constrained by the tractability of the posterior density p(θ A |
YoT , A) ∝ p(θ A | A)p(YoT | θ A , A), which is jointly determined by the choice of
functional forms for the data density and prior density. The search for rich tractable
classes of prior distributions may be formalized by considering classes of prior
densities, p(θ A | γ A , A). In this approach, γ A is a vector of constants that indexes
prior beliefs. In fact, we have already considered this approach in Example 2.1.2,
in which the parameters indexing prior beliefs were β, H, s 2 , and ν.

   Definition 2.3.1 Suppose that the observables density p(YT | θ A , A) has the
r × 1 sufficient statistic vector sT = sT (YT ; A), that r is fixed as T varies, and
(sT )1 = T . Denote the corresponding likelihood function

  L(θ A ; soT , A) = L(θ A ; sT (YoT , A), A) = L(θ A ; YoT , A) ∝ p(YoT | θ A , A).

Then the conjugate family of prior densities with respect to p(YT | θ A , A) is {p(θ A |
γ A , A), γ A ∈ A }, where

                    p(θ A | γ A , A) ∝ L(θ A ; γ A , A) = k(θ A | γ A , A)             (2.41)

and                                
                       A = γA :             k(θ A | γ A , A) dν(θ A ) < ∞ .
                                       A


   The kernel of any conjugate prior density may be interpreted as a likelihood
function corresponding to a notional data set Z(γ A )1 with sample size (γ A )1 and
sufficient statistic s(γ A )1 (Z(γ A )1 ). To the extent that we can represent prior beliefs
arising from notional data with the same probability density functional form as the
CONJUGATE PRIOR DISTRIBUTIONS                                                         39

likelihood function, a conjugate prior distribution will provide a good representation
of belief. Because of (2.41), the prior density and the likelihood function have
exactly the same functional form in θ A .

Example 2.3.1 The Conjugate Prior Density in a Simplified Normal Linear
Model Suppose that in the normal linear regression model the precision is known,
h = h0 . From the proof of the Gauss–Markov theorem, recall

                   (yo −Xβ) (yo −Xβ) = s 2 + (β−b) X X(β−b),                   (2.42)

where s 2 = (yo −Xb) (yo −Xb). Hence from (2.17), we obtain

                  p(y | β, X, A) ∝ exp[−h0 (β−b)X X(β−b)/2].                     (2.43)

Thus b and X X are sufficient statistics. Since (2.43) is the kernel of a normal
density in β, β | A ∼ N (β, H−1 ) is the conjugate prior distribution of β, with
γ A = {β, H}. This prior distribution corresponds to a notional data set in which the
least-squares coefficient vector (“b”) is β and the moment matrix of the covariates
(“X X”) is h−1
             0 H.
                              i.i.d.
   A special instance is yt ∼ N (µ, 1). The conjugate prior distribution is µ ∼
N (µ, h−1 ). The notional data set corresponds to a sample of size h with sample
mean µ.
   More generally, the conjugate prior distribution can be expressed in terms of
notional data in the form

                                       R β ∼N (r, V).                             (2.44)
                                       q×k


Often V is a diagonal matrix, and then (2.44) may be interpreted as the combination
of q independent components of information about β, in the same way that the
covariates X provide T such independent components in the normal linear model.
From (2.44) the pdf of the random vector z = Rβ is

             p(z) = (2π)−q/2 |V|−1/2 exp[−(r − Rβ) V−1 (r − Rβ)/2].

Hence if rank(R) = k, then (2.44) implies β | A ∼ N (β, H−1 ), with H = R V−1 R
and β = (R V−1 R)−1 R V−1 r. This representation of prior information was intro-
duced by Theil and Goldberger (1961); recall the similar development for actual
data in Exercise 2.1.3.

   The following extension of the idea of a conjugate family of prior densities will
prove useful in subsequent work.

   Definition 2.3.2 In the data density p(YT | θ A , A) let θ A = (θ A1 , θ A2 ) and
fix θ A2 = θ 0A2 . Suppose that the data density p(YT | θ A1 , θ 0A2 , A) has the r ∗ × 1
40                                                                  ELEMENTS OF BAYESIAN INFERENCE



sufficient statistic vector s∗T = s∗T (YT ; θ 0A2 , A), that r ∗ is fixed as T varies, and
(s∗T )1 = T . Denote the corresponding partial likelihood function

         L(θ A1 ; θ 0A2 , s∗o
                           T , A) = L(θ A1 ; θ A2 , YT , A) ∝ p(YT | θ A1 , θ A2 , A).
                                               0     o           o            0


Then the conditionally conjugate family of prior densities with respect to p(YT |
θ A1 , θ 0A2 , A) is {p(θ A1 | γ ∗A , θ 0A2 , A), γ ∗A ∈ A∗ }, where

         p(θ A1 | γ ∗A , θ 0A2 , A) ∝ L(θ A1 ; θ 0A2 , γ ∗A , A) = k(θ A1 | γ ∗A , θ 0A2 , A)

and                                   
                       ∗
                       A =   γ ∗A :          k(θ A1 | γ ∗A , θ 0A2 , A) dν(θ A1 ) < ∞ .
                                       A1


Example 2.3.2 Conditionally Conjugate Prior Distributions in the Normal Lin-
ear Model In Example 2.1.2 the prior distribution (2.11)–(2.12) for the parameter
vector θ A = (β  , h) was indexed by γ A = {β, H, s 2 , ν}. In Example 2.2.1 it was
seen that sT = (T , b, s 2 , X X) is a sufficient statistic because

              p(yo | β, h, X, A) ∝ hT /2 exp{−h[s 2 + (β−b) X X(β−b)]/2}                      (2.45)

where s 2 = (yo − Xb) (yo − Xb). For h = h0 , Example 2.3.1 provides the condi-
tionally conjugate prior density. Conditioning on β = β 0 and employing (2.42),
we obtain

                          p(yo | h, β = β 0 , X, A) ∝ hT /2 exp(−s 2 h/2)

where s 2 = s 2 + (β 0 − b) X X(β 0 − b). Hence the prior density (2.15) is condi-
tionally conjugate. It corresponds to a notional sample of ν − 2 observations of
   i.i.d.                    ν−2
εt ∼ N (0, h−1 ) in which t=1 ε2t = s 2 .

Example 2.3.3 The Conjugate Prior Distribution in the Normal Linear Regres-
sion Model The prior density (2.11)–(2.12) is conditionally conjugate but not
conjugate. To obtain a conjugate family of prior densities, regard (2.45) as a density
kernel in h and β, and seek to determine its form. Observe that

    p(yo | β, h, X, A) dβ ∝ hT /2 exp(−hs 2 /2)
 Rk
         
     ·         exp[−h(β−b) X X(β−b)/2] dβ
         Rk
                                                    −1/2
             = hT /2 exp(−hs 2 /2)(2π)k/2 h−k/2 X X     ∝ h(T −k)/2 exp(−hs 2 /2), (2.46)

and that the kernel of (2.45) in β is

                                      exp[−h(β−b) X X(β−b)/2].                                (2.47)
CONJUGATE PRIOR DISTRIBUTIONS                                                       41

Since (2.46) is the kernel of a chi-square density in s 2 h and (2.47) is the kernel of
a multivariate normal density in β, it follows that the conjugate prior distribution
can be represented

                                   s 2 h | A ∼ χ 2 (ν),                          (2.48)

                              β | (h, A) ∼ N (β, h−1 H−1 ).                      (2.49)

The combination (2.48)–(2.49) is a specific instance of a normal-gamma prior, so
called because the distribution (2.49) is normal, and because any gamma distribu-
tion for h can be written in the form (2.48).
   The corresponding posterior density kernel is
                1/2 (T +ν−2)/2
               hH h            exp(−s 2 h/2)
                  · exp{−h[(β − β) H(β − β) + (yo −Xβ) (yo −Xβ)]/2}.           (2.50)

From (2.42) the term in brackets in this expression is
                                                                    
                  s 2 + (β−β) H(β−β) + β  Hβ + b X Xb − β Hβ,                (2.51)

where
                                                    −1
                     H = H + X X and β = H (Hβ + X Xb).                        (2.52)

[Note that the definition of H in (2.52) is not the same as H in the model with a
conditionally conjugate prior distribution (2.19).] The posterior density kernel in β
alone is exp[−h(β−β) H(β−β)/2], whence β | (h, yo , X, A) ∼ N [β, (hH)−1 ]. Let
                                                                
                         Q∗ = s 2 + β  Hβ + b X Xb − β Hβ,                    (2.53)

and then substitute (2.53) in (2.51) and (2.51) in (2.50):

         p(β, h | yo , X, A) ∝ h(T +k+ν−2)/2
                               · exp{−h[s 2 + (β−β) H(β−β) + Q∗ ]/2}.           (2.54)

Integrating this expression with respect to β, we obtain
                                                   −1/2
         p(h | yo , X, A) ∝ h(T +k+ν−2)/2 (2π)k/2 hH    exp[−h(s 2 + Q∗ )/2]
                         ∝ h(T +ν−2)/2 exp[−h(s 2 + Q∗ )/2],

and so
                               s 2 h | (yo , X, A) ∼ χ 2 (ν).                    (2.55)
42                                                         ELEMENTS OF BAYESIAN INFERENCE


where
                              s 2 = s 2 + Q∗ and ν = ν + T .                       (2.56)

To get some insight into Q∗ , a little manipulation of (2.53) yields
                Q∗ = s 2 + (β − b) X X(β − b) + (β − β) H(β − β).               (2.57)

The first term in this expression is the sum of squared residuals, which clearly is
informative for h—in fact, T /s 2 is the maximum likelihood estimate of h. The
last two terms in (2.57) measure the distance between the prior mean β and the
least-squares vector b. Note that if β = b, then β = b as well and these terms
vanish. The second term in (2.57) is the distance between b and β using a metric
proportional to data precision hX X, and the third term is the distance between
β and β using a metric proportional to prior precision hH. If these distances are
large, then in the context of the model the explanation is that h is small. A larger
value of (β − b) X X(β − b) or (β − β) H(β − β) contributes to a larger value of
Q∗ and hence a smaller value of h by means of (2.55).
    Note that we may also integrate (2.54) with respect to h to obtain p(β |
yo , X, A). The kernel of (2.54) in h is that of the distribution
                   [s 2 + (β−β) H(β−β) + Q∗ ]h ∼ χ 2 (T + k + ν).

Referring to the constant of integration for this distribution [e.g., see (2.15)] and
integrating (2.54) with respect to h, we obtain
             p(β | yo , X, A) ∝ [s 2 + (β−β) H(β−β) + Q∗ ]−(T +k+ν)/2 .

The kernel of this expression is that of a multivariate Student-tdistribution (Johnson
and Kotz 1972, Chapter 37; Zellner 1971, Appendix B.2) with location vector β,
                  −1
scale matrix s 2 H , and T + ν degrees of freedom:
                                                              −1
                    β | (yo , X, A) ∼ t[β, (T + ν)−1 s 2 H ; T + ν].               (2.58)

   In Example 2.3.3 the potential for an analytically tractable posterior density
inherent in conjugate prior densities was realized. The prior density, likelihood
kernel, and posterior density were all members of the normal-gamma family. This
commonality of distribution families generalizes to a much wider class of observ-
ables distributions.

   Definition 2.3.3 The exponential family of distributions consists of all distri-
butions with the observables density
                                 T             r                T         
                                                                 
    p(YT | θ A , A) = [g(θ A )]T
                                    f (yt ) exp     ci φ i (θ A )     hi (yt ) ,
                                     t=1                i=1                t=1



where A ⊃ θ A , f (·) and {ci , φ i (·), hi (·)}ri=1 are all specified.
CONJUGATE PRIOR DISTRIBUTIONS                                                                                43

   Examples within the exponential family include the normal, Bernoulli, Poisson,
and exponential distributions. A sufficient statistic is
                                                           
                               
                               T
                           T,     hi (yt )(i = 1, . . . , r) .
                                       o

                                           t=1

The conjugate family of prior densities is
                                                                r                        
                                                                
                    p(θ A | γ A , A) ∝ [g(θ A )] exp    γ1
                                                                          ci φ i (θ A )γ i+1 ,           (2.59)
                                                                    i=1
                                                            r                                    
                                                              
       γA ∈         A =   γA :                     γ1
                                          [g(θ A )] exp             ci φ i (θ A )γ i+1 dθ A < ∞ .
                                     A                       i=1

The posterior density of θ A has kernel
                                   r                                
                                                           
                                                            T
                       γ 1 +T
              [g(θ A )]       exp     ci φ i (θ A ) γ i+1 +   hi (yt ) .                                 (2.60)
                                             i=1                              t=1

Thus the conjugate prior may be interpreted as a set of γ 1 observations, with
sufficient statistics γ i (i = 2, . . . , r + 1). The multiplicative interaction between the
prior and the likelihood function is of precisely the same form as the multiplicative
interaction between successive observations. Consequently it is a simple matter to
combine prior information of this form as well. Specifically, given n independent
experts with prior density kernels
                                     r                       
                              j                           j
                             γ1
                   [g(θ A )] exp            ci φ i (θ A )γ i+1 (j = 1, . . . , n),
                                            i=1

                                                                              n        j
the joint prior density is of the form (2.59) with γ i =                         j =1 γ i (i = 1, . . . , r + 1).

Exercise 2.3.1 Some Conjugate Prior Distributions In each case find the con-
jugate prior distribution corresponding to the observables distribution, and provide
a “notional data” interpretation for the prior:

   (a) yt (t = 1, . . . , T ) is i.i.d. uniform on (θ 1 , θ 2 ).
           i.i.d.
  (b) yt ∼ N (0, σ 2 ) (t = 1, . . . , T ).
           i.i.d.
   (c) yt ∼ H N (µ, 1) (t = 1, . . . , T ), where HN is the half-normal distribution

                    p(yt | µ) = (π/2)−1/2 exp[−(yt − µ)2 /2] · I(µ,∞) (yt ).

           i.i.d.
  (d) yt ∼ Poisson(θ ); that is, P (yt = j | θ ) = exp(−θ)θ j /j ! (j = 0, 1, 2, . . .).
44                                                            ELEMENTS OF BAYESIAN INFERENCE


Exercise 2.3.2 A Complete Uniform Distribution Model (This is a continua-
tion of Exercise 2.2.2.) The observables y1 , . . . , yT are independently distributed,
each with a uniform distribution on the interval [0, θ].

     (a) Show that p(θ | A) ∝ θ −γ 1 I[γ 2 ,∞) (θ ) is the kernel of the family of conjugate
         prior densities for θ . Express the properly normalized prior density function.
         What is the set A of permissible values of (γ 1 , γ 2 ) ?
     (b) Express the posterior density (not merely the kernel) corresponding to the
         likelihood function [derived in Exercise 2.2.2(a)] and the prior density in (a).

     (For continuation, see Exercise 2.5.1.)

Exercise 2.3.3 Models for Positive Observables (This is a continuation of
Exercise 2.2.1.) The observables yt are i.i.d. and strictly positive. In model A

                          p(yt | θ , A) = θ exp(−θyt )I(0,∞) (yt ),

while in model B

                  p(yt | h, B) = (π /2)−1/2 h1/2 exp(−hyt2 /2)I(0,∞) (yt ).

     (a) Derive the conjugate prior densities p(θ | A) and p(h | B). Make sure that
         the densities are properly normalized—that is, they should integrate to one
         over the relevant range (but you do not need to demonstrate that fact). In
         each case, if the prior distribution is from a common parametric distribu-
         tion family (e.g., normal, uniform, . . .), name the family and indicate the
         parameter(s).
     (b) Express the posterior density kernel for each model. If either posterior dis-
         tribution is from a common parametric distribution family, name the family
         and indicate the parameter(s). If possible, indicate the posterior mean and
         variance of the single unobservable in each case.

     (For continuation, see Exercise 2.4.6.)

Exercise 2.3.4 Completing the Argument                  Derive (2.57) from (2.53).

Exercise 2.3.5 Uniform Distribution on the Centered Disk Suppose that the
2 × 1 random vectors yt are independently and uniformly distributed on a disk
centered at (0, 0) with radius r:

                      p(yt | r, A) = π −1 r −2 IS(r) (yt ) (t = 1, . . . , T )

where S(r) = {(y1 , y2 ) : y12 + y22 ≤ r 2 }.
CONJUGATE PRIOR DISTRIBUTIONS                                                        45

  (a) Find a sufficient statistic in a model with this observables density.
  (b) What is the maximum likelihood estimate of r?
  (c) Find the family of conjugate prior distributions for r.
  (d) Let q = r −1 and suppose that the prior distribution of q is s 2 q ∼ χ 2 (ν).
      What is the posterior distribution of q (or r)? Be as specific as possible.
                                                             i.i.d.
Exercise 2.3.6 Interval Data Suppose that                  yT ∼ N (µ, h−1 ) but none
                                               y1 , . . . , 
of the 
       yt are observable. Instead, we observe
                                 
                                 1 if   yt ≤ c1
                            yt = 2 if c1 <    yt ≤ c2 .
                                 
                                   3 if  yt > c2

The constants c1 and c2 are known. (This kind of problem can arise in survey
data when respondents are asked to provide intervals. For example, respondents
are generally more willing to indicate that their income is within a bracket than
they are to provide actual income.)

  (a) What is the vector of unobservables in this model?
  (b) Write the likelihood function for µ and h. Provide a 3 × 1 sufficient statistic
      vector.
  (c) What is the conjugate prior distribution for µ and h?

   (Exercise 6.2.2 is related, and extends this exercise.)

Exercise 2.3.7 Spells of Employment and the Exponential Distribution An
economic consultant for a fast-food chain has been given a random sample of the
chain’s service workers. In her model, A, the length of time y between the time
the worker is hired and the time a worker quits has an exponential distribution
with parameter θ −1 , p(y | θ) = θ exp(−θy). For the purposes of this problem,
assume that no one is ever laid off or fired. The only way of leaving employment
is by quitting. You can also assume that no one ever has more than one spell of
employment with the company—if they quit, they never come back.
   In this problem we consider the case in which the consultant’s data consist
entirely of “complete spells;” that is, for each individual t in the sample the
consultant observes the length of time, yt , between hiring and quitting.

  (a) Express the joint density of the observables and find a sufficient statistic
      vector for θ.
  (b) Show that the conjugate prior distribution of θ has the form s 2 θ ∼ χ 2 (ν),
      and provide an “artificial data” interpretation of (s 2 , ν).
  (c) Using the prior density in (b), express the kernel of the posterior density.
      Show that the posterior distribution of θ has a gamma distribution of the
      form s 2 θ ∼ χ 2 (ν). Express s 2 and ν in terms of the sufficient statistics from
      (a) and (γ 1 , γ 2 ) from (b).
46                                                        ELEMENTS OF BAYESIAN INFERENCE


Exercise 2.3.8 Censored Spells in the Exponential Model In the same situation
as Exercise 2.3.7, suppose instead that the consultant’s data do not consist entirely
of complete spells. Instead, the consultant collects data by gathering a random
sample of the records of everyone hired in the first quarter of 1998. Because of the
limitations of her budget, she can gather records only through the end of 2000. T1 of
the individuals in her sample quit before the end of 2000, and for these individuals
she knows the length of the spell of employment yt . T2 of the individuals in her
sample were still working for the fast-food chain at the end of 2000, and for these
individuals she has only a lower bound zt on the spell of employment.

     (a) Express the joint density of the observables in this situation.
     (b) What is a vector of sufficient statistics for θ? (Do better than the trivial
         answer y1o , . . . , yTo1 , z1o , . . . zTo2 .)
     (c) Is the prior distribution from Exercise 2.3.7(b) still conjugate? If it is, pro-
         vide an “artificial data” interpretation of the distribution. If it is not, find the
         conjugate prior distribution in this situation.

   [This exercise, and Exercise 2.3.7, are examples of Bayesian survival analysis
for which there is a substantial literature. The simulation methods developed in
Chapter 4 were first applied to survival analysis by Dellaportas and Smith (1993).
For applications in economics, see DeJong (1993) and Campolieti (2000, 2001).]


2.4 BAYESIAN DECISION THEORY AND POINT ESTIMATION

The elements of Bayesian decision theory are isomorphic to those of behavior under
uncertainty in economics. The connection was first developed in a series of papers
by Friedman and Savage (1948, 1952) and Savage (1951), and classic expositions
of this and related work are Berger (1985) and Pratt et al. (1995). Both Bayesian
decisionmakers and economic agents associate a cardinal measure with all possible
combinations of random elements in their environment that they cannot control,
and those elements that they do control. The latter are called “actions” in Bayesian
decision theory and “choices” in economics. The mapping to a cardinal measure
is a loss function in the former and a utility function in the latter, but except for
a change in sign they serve the same purpose. The decisionmaker takes the Bayes
action that minimizes the expected value of his loss function; the economic agent
makes the choice that maximizes the expected value of her utility function. The
formal setup for the Bayesian decisionmaker is as follows.

   Definition 2.4.1 The elements of a Bayesian decision problem are an action
a ∈ A ⊆ Rm controlled by the decisionmaker, a loss function L(a, ω) depending
on the action and a vector of interest ω ∈  ⊆ Rq , and a distribution function P
for ω. The objective of the decisionmaker is to minimize the Bayes risk function
                                         
                   R(a) = E[L(a, ω)] =     L(a, ω)p(ω) dν(ω).
                                                
BAYESIAN DECISION THEORY AND POINT ESTIMATION                                       47

    The decision problem originates in the need to choose a. The loss function is the
criterion for choosing a. It specifies the vector of interest ω, which in turn suggests
the data and models the decisionmaker may wish to use. These data and models
dictate the form of P , which need not be specified at this level of generality.

   Definition 2.4.2 If the Bayes risk function R(a) exists for all a ∈ A, then any
solution 
         a = arg mina∈A R(a) of the Bayesian decision problem is a Bayes action.
The associated Bayes risk is R(
                               a ).

    In application the relevant conditioning set is the information available at the
time the action a is taken. This might be when no data are available (as when an
experiment is designed), when some data are available (as when deciding which
experiment, if any, to conduct next), or when data are being observed regularly (as
in forecasting situations). The term Bayes risk is sometimes confined to the case of
a prior distribution [see, e.g., Berger (1985), Section 1.3]. The broader definition
is adopted here because of its utility in applied Bayesian decisionmaking.
    The random vector ω in Definitions 2.4.1 and 2.4.2 is the vector of inter-
est identified at the end of Section 1.2. In the class size example introduced in
Section 1.1.1, the vector of interest ω is the average test score in the school dis-
trict. If T is the number of teachers in the school district, S is the number of
students, c is the cost of each teacher, and the school district places the value
d on each test point for each student each year, then the loss function might be
L(T , ω) = cT − dSω. The relationship between class size and test scores creates a
link between T and ω. Uncertainty about the link is reflected in the distribution of
ω conditional on T . Such problems can be solved routinely using the simulation
methods set forth in Chapter 4, and we return to this problem with such methods
in hand in Example 5.1.2.
    Nevertheless, simple loss functions teach a great deal about the structure of
Bayesian decision problems. In particular, three solutions are often applied by
investigators who do not expressly articulate the loss function that supports the solu-
tion. The critical client is then well served by examining whether her loss function
is well approximated by the one that the investigator has assumed implicitly.

   Definition 2.4.3   The loss function L(a, ω) is a quadratic loss function if

                           L(a, ω) = (a − ω) Q(a − ω),                         (2.61)

where Q is a positive definite matrix.

   This definition is more general than it might first seem; any second-order poly-
nomial in a and ω can be brought into the form (a − ω) Q(a − ω) plus a random
term that is unaffected by a. If Q is positive definite, then the loss function is
quadratic. Note the symmetry in the loss function of Definition 2.4.3; for a given
action a the realized loss is the same if the outcome is ω = a + δ or ω = a − δ.
An actual application may or may not be well served by this characteristic, and
this point should be examined before proceeding with a quadratic loss function,
which leads to the following simple implication.
48                                                         ELEMENTS OF BAYESIAN INFERENCE


   Theorem 2.4.1 Bayes Action with a Quadratic Loss Function If the loss
function is (2.61) and A = Rq , then the Bayes action is 
                                                         a = E(ω) and the Bayes
          a ) = tr[Q var(ω)].
risk is R(

     Proof: Note that
                                      
               R(a) = E[L(a, ω)] =            (a − ω) Q(a − ω)p(ω) dν(ω)
                                          

is twice differentiable:
                                          
                           ∂R(a)/∂a = 2           Q(a − ω)p(ω) dν(ω),
                                              

                    ∂ 2 R(a)/∂a∂a = 2Q.

These conditions imply that 
                            a = E(ω) is the unique Bayes action. The Bayes risk is

                   a−ω) Q(
                 E(       a−ω) = trE[Q(    a−ω) ]
                                        a−ω)(
                    = trE{Q[ω−E(ω)][ω−E(ω)] } = tr[Q var(ω)].

    This result is strong and perhaps surprising in two dimensions: (1) the action
is the same no matter what the positive definite matrix Q—a change in Q will
affect Bayes risk but will leave the Bayes action unchanged; and (2) it is only the
mean of ω that matters for the Bayes action. Other properties of the distribution
are irrelevant beyond the fact that variance must exist for the problem to be well
defined. Second moments matter for Bayes risk, but not for the choice of a.
    Note that if ω were replaced by its mean, which we can denote ω, in the quadratic
loss function, then L(a, ω) = (a−ω) Q(a−ω). The loss-minimizing action is

a = ω, which is also the solution of the actual Bayesian decision problem. This fact
is sometimes referred to as the certainty equivalence principle, after Simon (1956),
who introduced it in a more general context. A corollary is that if only means are
reported by an investigator, then the application of the investigator’s findings is
effectively restricted to decisions well characterized by quadratic loss. This may or
may not be a reasonable limitation. It depends on the application at hand.
    Because of their symmetry, quadratic loss functions are especially inappropriate
if the consequences of an action being “too high” are quite different in severity, as
will be the case if an action is similarly “too low.” This asymmetry is characteristic
of many situations that are described as “risky” in the colloquial use of that word.
The following loss function explicitly incorporates asymmetry, for the case of an
action with a single dimension.

   Definition 2.4.4 If a ∈ A ⊆ R and ω ∈  ⊆ A, the loss function L(a, ω) is a
linear–linear loss function if

             L(a, ω) = (1 − q)(a − ω)I(−∞,a) (ω) + q(ω − a)I(a,∞) (ω)              (2.62)

where q ∈ (0, 1).
BAYESIAN DECISION THEORY AND POINT ESTIMATION                                       49

   To take a familiar example, consider an individual with modest savings who
is about to retire. Let a represent the individual’s postretirement economic stan-
dard of living and ω the return on her savings. If ω > a, she will find her wealth
accumulating, whereas if ω < a, she will eventually become destitute. In an appli-
cation of a linear–linear (or “lin-lin”) loss function, it would be the case that
q < 12 .

   Theorem 2.4.2 Bayes Action with a Linear–Linear Loss Function If the
loss function L(a, ω) is (2.62), the random variable ω is absolutely continuous and
A = R, then the Bayes action is

                              
                              a = {a : P (ω ≤ a) = q}                           (2.63)

and the Bayes risk is

        R(                   a −ω | ω ≤
          a ) = q(1 − q) · [E(         a ) + E(ω − 
                                                    a | ω >
                                                           a )].

  Proof: To verify the solution note that
                                 a                     ∞
  R(a) = E[L(a, ω)] = (1 − q)       (a − ω)p(ω) dω + q     (ω − a)p(ω) dω.
                                    −∞                         a

This function is twice differentiable:

                   dR(a)/da = (1 − q)P (ω ≤ a) − qP (ω > a),
                 d R(a)/da 2 = p(a).
                   2



The first-order condition implies

             (1 − q)P (ω ≤ a) = q[1 − P (ω ≤ a)] ⇔ P (ω ≤ a) = q.               (2.64)

     a ) > 0 for 
If p(           a satisfying (2.64), there is a unique Bayes action, and if not, then

a is set valued. Substituting a = a in (2.62) and taking the expectation, we obtain

          R(               a − ω) | ω ≤ 
            a ) = (1 − q)E[(            a ]P (ω ≤ 
                                                   a)
                   + qE[(ω − 
                             a) | ω > 
                                      a ]P (ω > 
                                                a)
                              a − ω) | ω ≤ 
                = q(1 − q){E[(            a ] + E[(ω − 
                                                        a) | ω > 
                                                                 a ]}.

   The Bayes action   a is the qth quantile of the distribution of ω. If q is small
(large), then the loss if ω is larger (smaller) than a is relatively small (large), and
so the Bayes action is small (large) relative to typical realizations of ω. Note the
implication of Theorem 2.4.2 for our retiree: because q < 12 , she will choose a
standard of living, a, less than the median of ω (which would be the Bayes action
if q = 12 ). The Bayes action for the linear–linear function provides some insight
50                                                    ELEMENTS OF BAYESIAN INFERENCE


into the structure of the value at risk problem introduced in Section 1.1.2. In this
problem ω is the value of the portfolio in the future period t ∗ . For any quadratic
loss function L(a, ω) = (a − ω)2 q, the solution is a = E(ω). Such a loss function
is inappropriate if the decisionmaker is concerned about the risk undertaken by
institutions with fiduciary responsibilities to preserve capital. A loss function of
the form (2.62) would be more appropriate, and if we take q = .05, then the Bayes
action is the 5% quantile of the distribution of ω.
   It is common to see reports of “most probable” or “most likely” values of
random variables. One of the attractions of these solutions is that they are easy to
compute. Unlike the quadratic and linear–linear loss functions, no integration of
probability densities is required. The formal rationale for this action rests on some
rather strong requirements.

   Definition 2.4.5 If the distribution of ω is absolutely continuous, the loss func-
tion L(a, ω; ε) is a zero–one loss function if a ∈  and

                            L(a, ω; ε) = 1 − INε (a) (ω),

where Nε (a) is an open ε neighborhood of a.

   Theorem 2.4.3 Bayes Action with a Zero–One Loss Function Suppose that
p(ω) is a continuous function with a unique mode at ω = a, and A = Rq . Let 
                                                                             a(ε)
be the Bayes action for a zero–one loss function. Then limε→0 a(ε) = 
                                                                      a.

   Proof: Given any δ > 0, let δ = {ω : p(ω) > p(      a ) − δ}. For δ sufficiently
small, δ is an open neighborhood of the mode    a. There exists ε∗ > 0 such that if
ε < ε∗ , then Nε (
                  a ) ⊆ δ . Hence ∀ε < ε∗ , Nε (
                                                 a(ε)) ∩ δ = {∅}. (Why?) Since δ
can be arbitrarily small,                               a(ε)).
                          a must be a limit point of Nε (

    Of course, if the mean and the mode of ω are the same, then quadratic loss
and zero–one loss lead to the same Bayes action. This action will also result if in
addition the distribution of ω is symmetric about its mean, and linear–linear loss
applies element by element with q = 12 . It is rare to find modes reported without
at least an implicit appeal to unimodality, symmetry, or both. The solution of the
zero–one loss Bayesian decision problem is appealing because of its computational
simplicity rather then its approximation of common actual loss functions.
    As a practical matter, attention need not be confined to these or other loss func-
tions because they lead to analytically simple solutions. Example 5.1.2 illustrates
the use of a realistic but analytically intractable loss function, together with a pos-
terior simulator, to find the Bayes action. For an application in marketing, see Rossi
et al. (1996).
    Bayesian point estimation is a Bayes action corresponding to a loss function in
which the vector of interest ω is the vector of unobservables θ A . In the usual setup
BAYESIAN DECISION THEORY AND POINT ESTIMATION                                              51

in which the relevant distribution is the posterior, the Bayes action is the point
estimate
                             
               
               θ A = arg min      L( 
                                     θ A , θ A )p(θ A | yo , A) dν(θ A ).
                                
                                θA   A

   Bayesian point estimation differs fundamentally from non-Bayesian approaches
to estimation that seek a rule, or estimator θ ∗A (y), to minimize
                        
                           L[θ ∗A (y), θ A ]p(y | θ A , A) dν(y).
                            


In the solution of this problem     θ A nearly always depends on θ A as well as on
y, and consequently   θ A is almost never feasible. There is no single principle for
eliminating the dependence of     θ A on θ A , and since this can usually be done in a
number of reasonable ways there is often a proliferation of non-Bayesian estimates
in any particular application. By contrast, given a complete model and a loss
function, the Bayesian point estimate is well defined as long as E[L(             θ A, θ A) |
yo , A] is well defined and finite for at least some  θ A.
    The solution of Bayesian decision problems in the three specific cases just
considered carries through directly to the specific case of point estimation of the
vector of unobservables θ A . A quadratic loss function L(    θ A , θ A ) leads to the pos-
terior mean  θ A = E(θ A | yo , A). The linear–linear loss function for a parameter
selects the posterior qth quantile. The limiting zero–one loss function leads to the
mode of p(θ A | yo , A) when applied to the entire vector θ A .
    Point estimation of parameters is heavily emphasized in statistics—perhaps more
so in the non-Bayesian than the Bayesian literature, but the latter also positions point
estimation prominently. This nearly always reflects the evolution of technology
rather than the underlying decision problem. The parameter vector θ A , in the context
of a complete model, provides expression of
                                 
                    p(ω | A) =        p(ω | θ A , A)p(θ A | A) dν(θ A )
                                     A

in a way that facilitates Bayesian updating with data:
                              
              p(ω | yo , A) =      p(ω | θ A , A)p(θ A | yo , A) dν(θ A ).             (2.65)
                                     A

Even technically oriented decisionmakers have little use for parameters, which are
intermediate devices of interest to investigators. Occasionally some components of
ω correspond to certain components of θ A , but this emphasizes that it is the vector
of interest ω and not the parameter vector θ A that matters in the decision. It is
never the case that

                                p(ω | yo , A) = p(ω | 
                                                      θ A , A),                        (2.66)
52                                                               ELEMENTS OF BAYESIAN INFERENCE


an assumption commonly made in non-Bayesian statistics. There may, of course,
be cases in which the difference between (2.65) and (2.66) is negligible, but this
again enforces the point that the governing rule is (2.65) rather than (2.66). The
burden is to demonstrate the closeness of (2.66) to (2.65) if we are to use (2.66).
   To illustrate the techniques involved in analytic approaches to Bayesian point
estimation, and provide some more insight into the normal linear regression model,
consider the tasks of estimating β and h, respectively.

Example 2.4.1 Estimation of β in the Normal Linear Regression Model In
the normal linear regression model (2.10)–(2.12)
                                                                   −1
                                 β | (h, yo , X, A) ∼ N (β, H ).

(Throughout this example we condition on h as well as the data.) Given any
quadratic loss function, 
                         β = E[β | h, yo , X, A] = β. Given a zero–one loss func-
      
tion, β = β, as well. Given the linear–linear loss function

         L(
           β j , β j ) = (1 − q)(
                                 β j − β j )I(−∞,β j ) (β j ) + q(
                                                                   β j − β j )I(β j ,∞) (β j ),

                               jj
                  β j = β j + (h )1/2 −1 (q),

           jj                                          −1
where h denotes the (j, j )th entry of H and −1 is the inverse cdf of the
standard normal distribution. If q = 12 , then 
                                               β j = β j . Clearly the equivalence of the
three estimates is driven by the unimodality and symmetry of the posterior density
of β, and will emerge whenever the posterior pdf of the parameter estimated is
unimodal and symmetric.

Example 2.4.2 Estimation of h, σ 2 = h−1 , and σ = h−1/2 in the Normal Linear
Regression Model In the normal linear regression model (2.10)–(2.12)

                                  s 2 h | (β, yo , X, A) ∼ χ 2 (ν),

where s 2 and ν are as defined in (2.26). Since the mean of a chi-square random
variable is its degrees of freedom,  h | (β, yo , X, A) = ν/s 2 if the loss function is
quadratic. From (2.14) the mode of the chi square pdf is its degrees of freedom
less two (or else zero, whichever is larger), and so the zero–one loss estimate is

h | (β, yo , X, A) = (ν − 2)/s 2 if ν ≥ 2.
   Through the same change of variable to σ 2 = h−1 undertaken in the prior leading
to the pdf (2.16), we have

     p[σ 2 | β, yo , X, A] = [2ν/2 (ν/2)]−1 (s 2 )ν/2 (σ 2 )−(ν+2)/2 exp(−s 2 /2σ 2 ).             (2.67)

E[σ 2 | (β, yo , X, A)] = s 2 /(ν − 2) if ν > 2, but estimation of σ 2 under quadratic
loss has no solution if ν ≤ 2. The mode of p[σ 2 | (β, yo , X, A)] occurs at s 2 /(ν +
2), which is therefore the zero–one loss estimate of σ 2 in this model.
BAYESIAN DECISION THEORY AND POINT ESTIMATION                                         53

   If we transform instead to the standard deviation σ = h−1/2 , by the usual change
of variable

   p[σ | β, yo , X, A] = [2(ν−2)/2 (ν/2)]−1 (s 2 )ν/2 σ −(ν+1) exp(−s 2 /2σ 2 ).   (2.68)

The corresponding posterior mean and Bayes estimate under a quadratic loss func-
tion are

              2−1/2 [(ν − 1)/2]    (ν/2)1/2 [(ν − 1)/2] 2 1/2
        
        σ =                     s=                     (s /ν) .                    (2.69)
                    (ν/2)                  (ν/2)

With a zero–one loss function the Bayes estimate of σ is the posterior mode
s/(ν + 1)1/2 .
   In all three cases there is no simple closed-form expression for the median of the
posterior distribution, which is in turn the estimate under a symmetric linear–linear
loss function. But it is easy to compute the estimates, given s 2 and ν, using standard
software for the inverse of the cdf of a chi square random variable. Here are some
values in the case of h:


                  s2         ν         Mean        Mode         Median

                   5         5         1.000       0.60          .8702
                  20        20         1.000       0.90          .9669
                 100       100         1.000       0.98          .9934


   Note that for a fixed value of s 2 /ν, the estimates converge as ν increases. This
is due to the fact that the distribution of a normalized chi square random variable
approaches the standard normal distribution as ν increases, and the normal pdf is
symmetric about its mean. Also note that the mode is always below the median
and the mean is always above, and that the distance between the mode and the
median is about twice that between the mean and the median.

Exercise 2.4.1 Generalizing the Quadratic Loss Function                    Consider the
weighted squared-error loss function

                        L(            ω − ω) Q(
                          ω, ω) = w(ω)(         ω − ω)

where Q is a positive definite matrix and w(ω) > 0 ∀ ω ∈ . Show that the cor-
responding Bayes estimate of ω is

                                      E[ωw(ω) | yo , A]
                                 
                                 ω=                     .
                                      E[w(ω) | yo , A]
54                                                      ELEMENTS OF BAYESIAN INFERENCE


Exercise 2.4.2 Generalizing the Linear–Linear Loss Function In this exercise
the distribution of ω need not be absolutely continuous. This implies that 
                                                                           a defined
in (2.63) need not exist. However, if (2.63) is replaced by

                       
                       a = {a : P (ω ≤ a) ≥ q, P (ω ≥ a) ≥ 1 − q}                (2.70)

then 
     a will always exist, although it still need not be unique.

     (a) Under what conditions will the loss functions

               L1 (a, ω) = (1 − q1 )(a − ω)I(−∞,a) (ω) + q1 (ω − a)I(a,∞) (ω)

         and

               L2 (a, ω) = (1 − q2 )(a − ω)I(−∞,a) (ω) + q2 (ω − a)I(a,∞) (ω),

         where q1 ∈ (0, 1) and q2 ∈ (0, 1) but q1 = q2 , lead to the same Bayes
         action 
                a?
     (b) The risk function can be defined with respect to the probability measure P
         of the random variable ω as
                              a                          ∞
             R(a) = (1 − q)      (a − ω) dP (ω) dω + q       (ω − a) dP (ω) dω.
                                 −∞                          a

         Show that the right derivative of R(·) is

                           dR/da + = (1 − q)P (ω ≤ a) − qP (ω > a)

         and the left derivative is

                           dR/da − = (1 − q)P (ω < a) − qP (ω ≥ a).

     (c) Show that if P (ω ≤ a) < q, then dR/da + < 0, and if P (ω ≥ a) < 1 − q,
         then dR/da − > 0. Conclude that a defined in (2.70) is the set of Bayes
         actions.
     (d) Under what conditions is 
                                  a unique?

Exercise 2.4.3 Linex Loss Function            Zellner (1986a) proposed the linear–
exponential (or “linex”) loss function

                        L(a, ω) = exp[r(a − ω)] − r(a − ω) − 1,

where r = 0.

     (a) Show that the Bayes action is a = −r −1 log{E[exp(−rω)]}.
     (b) Show that if, in addition, ω ∼ N (µ, h−1 ), then 
                                                          a = µ − (r/2h).
BAYESIAN DECISION THEORY AND POINT ESTIMATION                                           55

Exercise 2.4.4 Properties of Estimates Let θ A = (θ A1 , θ A2 ).
  (a) Consider two cases. In both cases, the loss function is quadratic. In the first
      case it is of the form L(      θ A , θ A ), but in the second case it is of the form
      L(θ A1 , θ A1 ), but is still quadratic. Is the Bayes estimate of θ A1 the same in
      the two cases?
  (b) Consider two cases. In both cases, the loss function is zero–one. In the first
      case it is of the form L(      θ A , θ A ), but in the second case it is of the form
      L(θ A1 , θ A1 ), but is still zero–one. Is the Bayes estimate of θ A1 the same in
      the two cases?

Exercise 2.4.5 Point Estimation for the Lognormal Distribution                   Suppose
                     i.i.d.
log(yt ) | (µ, h, A) ∼ N (µ, h−1 ) (t = 1, . . . , T ).
  (a) Beginning with the pdf of the univariate normal distribution, derive and
      express the pdf of y in terms of µ and h. Then derive E(yt | µ, h, A). In
      doing this you may find it convenient to use the moment generating function
      for z ∼ N (µ, h−1 ), which is E[exp(tz)] = exp(tµ + t 2 /2h)
  (b) Here, and for the rest of this exercise, suppose that h is known but µ is not,
      and µ | A ∼ N (µ, h−1 ). Derive the posterior distribution for µ.
  (c) Find the Bayes estimate   ω of ω = E(yt | µ, h, A), given a quadratic loss
      function.
  (d) Find the Bayes estimate   ω of ω = E(yt | µ, h, A), given the loss function
      L(ω, ω) = |ω − ω|.
  (e) Find the Bayes estimate   ω of ω = E(yt | µ, h, A), given a zero–one loss
      function.

Exercise 2.4.6 Models for Positive Observables Recall the exponential
model in Exercise 2.3.3. The observables y1 , . . . . , yT are i.i.d., p(yt | θ , A) =
θ exp (−θyt )I(0,∞) (yt ). Suppose ω = yT +1 , which is (as yet) unobserved, inde-
pendent of the observed y1 = y1o , . . . , yT = yTo , and has the same distribution as
each of y1 , . . . , yT . Find the estimate 
                                            ω of ω implied by the loss function

                      ω − ω)I(−∞,ω) (ω) + 3(ω − 
                     (                          ω)I(ω,∞) (ω).

Make your answer compact, and use conventional notation to the extent you can.
(For continuation, see Exercise 2.6.2.)

Exercise 2.4.7 Decisionmaking under Uncertainty In deciding whether to per-
mit a merger of two large firms selling the same product, a government regulatory
body (GRB) considers the change ω in the price of the product that will occur
following the merger. The GRB can take the action a = 1 (permit the merger) or
a = 0 (forbid the merger). Its loss function is L(a, ω) with L(0, ω) = 0. The GRB
                                                                       −1
is uncertain about ω, but given all available information, ω ∼ N (ω, hω ).
56                                                    ELEMENTS OF BAYESIAN INFERENCE


     (a) Suppose that the GRB’s loss function is L(1, ω) = (ω − ω∗ )3 + g(ω − ω∗ )2 .
         In this loss function, ω∗ > 0 and g > 0. What does the loss function express
         about the GRB’s attitude toward price changes following the merger?
     (b) Continuing to assume the same loss function as in (a), express the GRB’s
         decision rule in terms of ω, hω , ω∗ , and g.
     (c) Now suppose instead that the GRB’s loss function is L(1, ω) = exp(f ω) −
         b. In this loss function f > 0 and b > 0. Does this loss function express
         attitudes toward price change similar to those for the loss function in (a)?
     (d) Continuing to assume the loss function in (c), express the GRB’s decision
         rule in terms of ω, hω , f ,and b.
     (e) Suppose that the GRB’s staff reports ω but not hω . Would this matter in
         part (b)? In part (d)?


2.5 CREDIBLE SETS

A credible set conveys one aspect of uncertainty about a vector of interest ω ∈ 
with pdf p(ω). It is a mapping from the distribution of ω to a subset of  containing
ω with given probability.

     Definition 2.5.1     A set C ⊆  such that
                                       
                           P (ω ∈ C) =   p(ω) dν(ω) = 1 − α                       (2.71)
                                       C

is a 100(1 − α)% credible set for ω with respect to p(ω).

   If the distribution of ω is absolutely continuous, so that dν(ω) = dω, then C
must exist, and except possibly in the case α = 0, C will not be unique. On the
other hand, if ω is a discrete random variable then C will exist only for certain
values of α. In what follows in this section, for any S ⊆ , S =  − S, and
ν(S) = S dν(ω).
   A posterior credible set is defined using (2.71) and p(ω) = p(ω | yo , A). It
differs fundamentally from a non-Bayesian confidence region. The latter is a set
R(y) ⊆  such that

          P [ω ∈ R(y) | θ A , A]
                
             =            p(ω | y, θ A , A) dν(ω) p(y | θ A , A) dν(y) = 1 − α.
                       R(y)

With the exception of a few elementary cases, it is generally impossible to find an
expression for P [ω ∈ R(YT ) | θ A , A] that does not involve the unobservables θ A .
The problem is essentially the same as that arising for non-Bayesian point estimates.
Even when these problems can be solved, non-Bayesian confidence regions easily
can lead to awkward results.
CREDIBLE SETS                                                                       57

Example 2.5.1 A Simple Confidence Interval Suppose that {yt }Tt=1 are inde-
pendently and uniformly distributed on the interval [θ − .5, θ + .5], and T = 25.
A 95% confidence interval for θ is [
                                    θ − .056, 
                                              θ + .056], where

                            
                            θ = [min(yt ) + max(yt )]/2.

Consider case 1:

                min(yt ) = 3.10, max(yt ) = 3.20, R = [3.094, 3.206],

and case 2:

                min(yt ) = 3.00, max(yt ) = 3.96, R = [3.424, 3.536].

Both results defy common sense. In case 1, θ could be as small as 2.7 and as
large as 3.6, and in case 2, it is certain that θ must be in the interval [3.46, 3.50].
In both cases the difficulty is that it is intuitive to condition on the data actually
observed, whereas this non-Bayesian procedure provides intervals that include θ
with probability .75 in hypothetical repetitions of the experiment of collecting
samples of size T = 25.
   To construct credible sets, introduce the prior distribution θ ∼ N (θ, h−1 ). Then
100% credible sets are [2.7, 3.6] in case 1 and [3.46, 3.50] in case 2. As h → 0,
95% credible sets are [2.7225, 3.5775] in case 1, and [3.461, 3.499] in case 2. In
general, credible sets are not hard to determine for any given values of θ and h.

   Credible sets are invariant under transformation. If
                                    
                       P (ω ∈ C) =      p(ω) dν(ω) = 1 − α,
                                      C


f :→      is one-to-one,  ω = f (ω), and C   is the image of C under f , then
P (     
    ω ∈ C) = 1 − α. Clearly credible sets are not unique, in general. For example,
if the posterior distribution of ω is absolutely continuous and α > 0, then there are
uncountably many solutions of (2.71) for C. Nor, in general, need a credible set
of a specified size exist if the posterior distribution is not absolutely continuous.
An interesting subset of all credible sets is the set of highest probability density
(HPD) credible sets.

   Definition 2.5.2 A 100(1-α)% highest probability density (HPD) credible set
for ω with respect to p(ω) is a 100(1-α)% credible set C for ω with the property
that if ω1 ∈ C and ω2 ∈ C then p(ω1 ) ≥ p(ω2 )∀ω1 ∈ C and all ω2 ∈ C.

   The elements of the set of HPD credible sets are often unique up to sets of ν-
measure 0. This is always the case if there exists a function c : (0, 1) → R+ with
the property that P [ω : p(ω) ≥ c(α)] = (1 − α). For example, HPD credible sets
for multivariate normal distributions are unique and consist of ellipses and their
58                                                      ELEMENTS OF BAYESIAN INFERENCE


interiors, like those shown in Figure 2.1. On the other hand, HPD credible sets for
a uniform distribution are not unique.
   It is natural to cast the choice of a particular credible set from among all possible
credible sets as a Bayesian decision problem. The HPD credible sets correspond
to the set of solutions of one such problem.

    Theorem 2.5.1 Optimality of Highest-Density Regions Suppose that the dis-
tribution of ω is absolutely continuous and p(ω) is the pdf of ω. For all C ⊆ ,
let ν(C) be the Lebesgue (ordinary) measure of C. Let C ∗ (α) = {C : P (ω ∈ C) =
1 − α}. Given the loss function L(C, ω) = kν(C) − IC (ω), with k > 0 and defined
on [C ∗ (α) × ] → R, C is a solution of

                                              ω)]
                                    minCE[L(C,                                  (2.72)

if and only if for all ω1 ∈ C and ω2 ∈ C, p(ω1 ) ≥ p(ω2 ), except possibly for a
collection of (ω1 , ω2 ) with probability zero.

   Proof: For any C ∈ C ∗ (α), E[L(C, ω)] = kν(C) − (1 − α), and consequently
the solutions of (2.72) and the problem minC∈C ∗ (α) ν(C) are the same.
   Suppose that for all ω1 ∈ C and ω2 ∈ C, p(ω1 ) ≥ p(ω2 ), except possibly for
a collection of (ω1 , ω2 ) with posterior probability zero. For any other D ∈ C ∗ (α),
we obtain

       P (ω ∈ C) = P (ω ∈ D) ⇒ P (ω ∈ C ∩ D) = P (ω ∈ C ∩ D),

and consequently
                                    
           inf p(ω)ν(C ∩ D) ≤              p(ω) dν(ω)
         ω∈C∩D                       C∩D
                                    
                                =          p(ω) dν(ω) ≤ sup p(ω)ν(C ∩ D).
                                     C∩D                  C∩D


By assumption supC∩D p(ω) ≤ infω∈C∩D p(ω), and so ν(C ∩ D) ≤ ν(C ∩ D),
whence ν(C) ≤ ν(D).
   Now suppose the contrary—that there exist E ⊆ C and B ⊆ C such that
ω1 ∈ E, ω2 ∈ B ⇒ p(ω2 ) ≥ p(ω1 ), and P (ω ∈ E) = P (ω ∈ B) > 0. Let D =
(C ∩ E) ∪ B. Then D ∈ C ∗ (α), and by the argument in the previous paragraph
ν(D) < ν(C).

   HPD credible sets are not invariant under transformation, as illustrated
in Figure 2.2. Figure 2.2a illustrates p(ω), with the solid line indicating the
unique 80% HPD interval. The transformation ω∗ = f (ω) = ω1/2 , illustrated in
Figure 2.2b, leads to the pdf for ω∗ shown in Figure 2.2d. The solid line in that
figure indicates the image of the HPD interval from Figure 2.2a. Clearly this is not
the 80% HPD interval for ω∗ , which is indicated by the solid line in Figure 2.2c.
CREDIBLE SETS                                                                                     59

        0.8                                                 2.5
        0.7
                                                             2
        0.6
        0.5                                                 1.5
p(w)




                                                    w*
        0.4
        0.2                                                  1

        0.2
                                                            0.5
        0.1
         0                                                   0
              0   1    2         3       4      5                 0   1    2         3      4       5
                           w                                                    w
                           (a)                                                 (b)

        1.4                                                 1.4

        1.2                                                 1.2

         1                                                   1

        0.8                                                 0.8
p(w*)




                                                    p(w*)




        0.6                                                 0.6

        0.4                                                 0.4

        0.2                                                 0.2
         0                                                   0
              0   1    2         3       4      5                 0   1    2         3      4       5
                           w*                                                  w*
                           (c)                                                 (d)

Figure 2.2. Some credible sets and projections under transformation: (a) HPD region for ω; (b) mapping
into ω∗ ; (c) HPD region for ω∗ ; (d) ω HPD region mapped into ω∗ .



    More generally, if f :  → ∗ is a one-to-one function, then p(ω∗ ) =
p[f −1 (ω∗ )]J [f −1 (ω∗ )] where J (ω) = |∂f/∂ω|−1 is the Jacobian of transforma-
tion. If p(ω1 ) ≥ p(ω2 ) but p(ω1 )J (ω1 ) < p(ω2 )J (ω2 ), then p(ω∗1 ) < p(ω∗2 ) for
ω∗1 = f (ω1 ), ω∗2 = f (ω2 ).

Example 2.5.2 Highest Conditional Posterior Density Regions in the Normal
Linear Regression Model In the model (2.10)–(2.12) the conditional posterior
distribution of β is (2.23). From the corresponding density kernel (2.22), a highest
posterior density region is of the form

                                     {β : (β−β) H(β−β) ≤ c}.

Because (β−β) H(β−β) | (h, yo , X, A) ∼ χ 2 (k), a 100(1 − α)% highest condi-
tional posterior density region for β is

                            C = {β : (β−β) H(β−β) ≤ χ 2α (k)}.
60                                                        ELEMENTS OF BAYESIAN INFERENCE


   In the same model, the conditional posterior distribution of h is (2.25) and
the corresponding conditional posterior density kernel (2.24) is unimodal. If ν =
T + ν > 2, then p(h | β, yo , X, A) is monotone increasing for h < (ν − 2)/s 2 and
monotone decreasing for h > (ν − 2)/s 2 . Moreover, limh→0 p(h|β, yo , X, A) =
limh→∞ p(h|β, yo , X, A) = 0. Therefore a highest conditional, posterior density
region is of the form (c1 , c2 ), with

                   p(h = c1 | β, yo , X, A) = p(h = c2 | β, yo , X, A)

and
                            c2
                                  p(h | β, yo , X, A) dh = 1 − α.
                            c1


If T + ν ≤ 2, then p(h | β, yo , X, A) is monotone decreasing and the region is of
the form (0, c) with c = χ 2α (T + ν)/s 2 . A similar analysis may be applied to obtain
highest conditional posterior density regions for σ 2 , beginning from (2.67), and for
σ , beginning from (2.68).

Exercise 2.5.1 A Complete Uniform Distribution Model (This is a continua-
tion of Exercise 2.3.2.) The observables y1 , . . . , yT are independently distributed,
each with a uniform distribution on the interval [0, θ]. The posterior distribution is
that corresponding to the conjugate prior distribution, found in Exercise 2.3.2(b).

     (a) Find the 90% highest posterior density interval for θ.
     (b) Find the Bayes estimate θ of θ given, alternatively
          (i) A quadratic loss function
         (ii) A linear–linear loss function

                  L(
                    θ, θ) = (1 − q)(
                                    θ − θ)I(−∞,θ ) (θ) + q(θ − 
                                                                θ )I[ θ ,∞) (θ );

         (iii) A zero–one loss function L(
                                          θ, θ ; ε) = 1 − INε (θ ) (θ).

Exercise 2.5.2 Credible Sets under Transformation In a complete model sup-
pose that the likelihood function is L(θ A ; yo , A) and the prior density is p(θ A | A).
Let γ A = f (θ A ), where f is one-to-one. Let L∗ (γ A ; yo , A) be the corresponding
likelihood function for γ A , and let p∗ (γ A | A) be the corresponding prior den-
sity for γ A . Provide either a proof or a specific counterexample for each of the
following statements:

     (a) If  θ A is the mode of L(θ A ; yo , A), then    γ A = f ( θ A ) is the mode of
            ∗
         L (γ A ; y , A).
                     o

     (b) If                                          γ A = f (
             θ A is the mode of p(θ A | yo , A), then         θ A ) is the mode of p(γ A |
           o
         y , A).
MODEL COMPARISON                                                                        61

   (c) If R is a 95% highest posterior density region for θ A , and S is the image of
       R under f , then S is a 95% highest posterior density region for γ A .

Exercise 2.5.3 Point Estimates and Credible Sets In a complete model yt |
        i.i.d.
(µ, A) ∼ N (µ, 1) (t = 1, . . . , T ) and the prior distribution is µ ∼ N (0, 4) trun-
cated to µ ≥ 0: p(µ | A) = (2π)−1/2 exp(−µ2 /8)I[0,∞) (µ). In answering each of
the following questions, express your answer in terms of the sample size T , the
observed sample mean y oT , and the pdf and cdf φ and  (respectively) of the
standard normal distribution.

  (a) What is the Bayes estimate of µ given
        (i) A quadratic loss function?
       (ii) A zero–one loss function?
      (iii) A linear–linear loss function with q = .75?
  (b) What is a 90% highest posterior density region for µ?

   [Hints: (i) You may need to consider more than one case in each situation,
depending on the values of y oT and T ; (ii) a standard result in distribution theory
states that if x ∼ N (0, 1) but is truncated to x ≥ c, then E(x) = φ(c)/[1 − (c)].]


2.6 MODEL COMPARISON

Often we must reach a conclusion or make a decision based on several models
rather than one, and there is a large literature on model selection. The complete
probability structure introduced in Section 1.5 suggests that model averaging, not
model choice, is the essence of the problem. This insight goes back at least to
Jeffreys (1939). Its importance in statistics was recognized by Roberts (1965) and in
econometrics by Zellner (1971) and Leamer (1978). More recently Draper (1995),
Chatfield (1995), Kass and Raftery (1995), and Hoeting et al. (1999) have reviewed
theoretical and practical aspects of Bayesian model averaging.
    For specificity denote the models j = 1, . . . , J . Model j has unobservables
vector θ Aj , unobservables prior density p(θ Aj | Aj ), observables density p(y |
θ Aj , Aj ), and vector of interest density p(ω | y, θ Aj , Aj ). The J models are related
by their predictions for a common set of observables y and a common vector
of interest ω. The numbers of unobservables in the models may or may not
be the same and various models may or may not nest one another. The vec-
tor of interest is substantively the same for all models, although its distribution
is model-specific. The specification of the collection of J models is completed
with the prior probabilities p(Aj ) (j = 1, . . . , J ) for the respective models, and
J
   j =1 p(Aj ) = 1. There is no essential conceptual distinction between model and
prior—we could just as well regard the entire collection as a single model, with
{p(Aj ), p(θ Aj | Aj ) dν j (θ Aj )}Jj=1 providing the prior distribution of unobservables.
At an operational level the distinction is usually clarified by the fact that we may
undertake the essential computations one model at a time.
62                                                                   ELEMENTS OF BAYESIAN INFERENCE


2.6.1 Marginal Likelihoods
The density p(ω | yo ) is ultimately of interest. The formal solution is

                                              
                                              J
                      p(ω | yo ) =                   p(ω | yo , Aj )p(Aj | yo ),             (2.73)
                                              j =1


known as model averaging. In expression (2.73), we obtain

             p(Aj | yo ) = p(yo | Aj )p(Aj )/p(yo ) ∝ p(yo | Aj )p(Aj ).                     (2.74)

Thus the weight p(Aj | yo ) in (2.73) is the product of the model prior probability
p(Aj ), and the marginal likelihood p(yo | Aj ) of Definition 2.1.1. As noted there
                                   
              p(y | Aj ) =
                  o
                                             p(yo | θ Aj , Aj )p(θ Aj | Aj ) dν j (θ Aj ).   (2.75)
                                       Aj


It is important to recognize that if p(yo | θ Aj , Aj ) is replaced by the correspond-
ing likelihood function L(θ Aj ; yo , Aj ) ∝ p(yo | θ Aj , Aj ) in (2.75), then, unless the
constants of proportionality are the same across all models, (2.73) will no longer
be true. Ignoring this fact can be extremely misleading because omitted constants
in likelihood functions can vary by many orders of magnitude from one model to
the next with the same data set.
    The development in (2.73)–(2.75) indicates that the marginal likelihood p(yo |
Aj ) is the key additional component, beyond the analysis of the individual models
Aj , that model averaging requires.

Example 2.6.1 Marginal Likelihood in the Normal Linear Regression Model
with Fixed Precision If h = h0 and β | A ∼ N (β, H−1 ), then

      p(β | A)p(yo | β, h0 , X, A)
                         T /2  1/2
        = (2π)−(T +k)/2 h H  0

            · exp{−[h0 (y − Xβ) (yo − Xβ) + (β − β) H(β − β)]/2}.
                           o
                                                                                             (2.76)

Completing the square as in Example 2.1.2, the term in brackets is

                                        (β−β) H(β−β) + Q,                                   (2.77)

                                        −1
with H = H + h0 X X, β = H (Hβ + h0 X Xb), and

                                                       
              Q = h0 yo yo + β  H β − β H β                                                (2.78)

                 = h0 s 2 + (b−β) h0 X X(b−β) + (β − β) H(β − β),                         (2.79)
MODEL COMPARISON                                                                               63

where s 2 = (yo −Xb) (yo −Xb). [Expression (2.79) follows from (2.78) in the same
way as (2.57) from (2.53).] Substituting (2.79) in (2.77) and then (2.77) in (2.76),
the marginal likelihood is
       
                p(β | A)p(yo | β, h0 , X, A) dβ
           Rk
                                                         
                                       T /2     1/2
                = (2π)−(T +k)/2 h0               H           exp{−[(β−β) H(β−β) + Q]/2} dβ
                                                         Rk
                                    1/2  −1/2
                                  T /2 
                = (2π)−T /2 h0    H H         exp(−Q/2)                                 (2.80)
                                     
                       −T /2 T /2     1/2
                = (2π)      h0 ( H / H )
                  · exp{−[h0 s 2 + (b−β) h0 X X(b−β) + (β − β) H(β − β)]/2}.

This expression indicates those features of a model that contribute to a higher
marginal likelihood, and thus a greater weight in model averaging.

Example 2.6.2 Marginal Likelihood in the Normal Linear Regression Model
with Conjugate Prior Example 2.3.3 showed that the conjugate prior distribution
in the normal linear regression model (2.10) is given by (2.48) and (2.49). The
posterior density kernel in standard form is

    p(h | A)p(β | h, A)p(yo | X, β, h, A)
                                                  1/2
        = [2ν/2 (ν/2)]−1 (2π)−(T +k)/2 (s 2 )ν/2 H h(T +k+ν−2)/2 exp(−s 2 h/2)
                · exp{−h[(β − β) H(β − β) + (yo − Xβ) (yo − Xβ)]/2}.

The last term in brackets can be expressed (β−β) H(β−β) + Q∗ . The posterior
parameters β and H are defined in (2.52) and Q∗ is given in (2.57). Then
                      
                             p(h | A)p(β | h, A)p(yo | β, h, X, A) dβ
                        Rk
                                                                       
                             = [2ν/2 (ν/2)]−1 (2π )−T /2 (s 2 )ν/2 (H / H)1/2
                                 · h(T +ν−2)/2 exp[−(s 2 + Q∗ )h/2].                       (2.81)

The last line in this expression is a kernel of the density corresponding to the
distribution (s 2 + Q∗ )h ∼ χ 2 (T + ν), from which [recall (2.15)]
                           ∞
                                  h(T +ν−2)/2 exp[−(s 2 + Q∗ )h/2] dh                      (2.82)
                             0

                                 = 2(T +ν)/2 [(T + ν)/2](s 2 + Q∗ )−(T +ν)/2 .             (2.83)
64                                                                ELEMENTS OF BAYESIAN INFERENCE


Substituting for Q∗ from (2.57) and then placing (2.83) in (2.81), the marginal
likelihood is
        ∞
              p(h | A)p(β | h, A)p(yo | β, h, X, A) dh dβ
        Rk     0
                                               
            = π −T /2 { [(T + ν)/2]/ (ν/2)}(H / H)1/2 (s 2 )ν/2
               · [s 2 + s 2 + (b−β) X X(b−β) + (β − β) H(β − β)]−(T +ν)/2 .                    (2.84)


     From (2.74), the ratio of posterior probabilities of two models is
                               P (Aj | yo )   P (Aj ) p(yo | Aj )
                                            =        ·            .                               (2.85)
                               P (Ak | yo )   P (Ak ) p(yo | Ak )
This ratio is central in comparing models.

   Definition 2.6.1 In favor of the model Aj versus the model Ak , the prior odds
ratio is P (Aj )/P (Ak ); the Bayes factor is p(yo | Aj )/p(yo | Ak ); and the posterior
odds ratio is P (Aj | yo )/P (Ak | yo ).

    In (2.85) the posterior odds ratio is expressed as the product of the prior odds
ratio and the Bayes factor. The Bayes factor, in turn, is the ratio of marginal
likelihoods. If a Bayesian investigator reports the marginal likelihood of a model,
then others can use this to make comparisons with other models and include the
model in the process of model averaging. In special cases there are analytical
expressions for Bayes factors, and these reveal those properties of models and data
that are important in the posterior odds ratio.

Example 2.6.3 Bayes Factor for Two Normal Linear Regression Models with
Conjugate Priors Suppose that there are two models

                                       y ∼ N (Xj β j , h−1
                                                        j IT ),

              s 2j hj | Aj ∼ χ 2 (ν j ), β j | (hj , Aj ) ∼ N (β j , H−1
                                                                      j ) (j = 1, 2).

Note that the vector y is the same for the two models. They may therefore be
used in model averaging, and can be regarded as competing specifications for the
observable y. From (2.84) and Definition 2.6.1 the Bayes factor in favor of model
A1 versus model A2 is
                                                      1/2
   p(yo | X1 , A1 )    [(T + ν 1 )/2] (ν 2 /2)     H  H2      (s 21 )ν 1 /2
                                                     1
                    =                          ·            ·
   p(yo | X2 , A2 )    [(T + ν 2 )/2] (ν 1 /2)     H  H1      (s 22 )ν 2 /2
                                                     2

            [s 21 + s12 + (b1 −β 1 ) X1 X1 (b1 −β 1 ) + (β 1 − β 1 ) H1 (β 1 − β 1 )]−(T +ν 1 )/2
        ·                                                                                            .
            [s 22 + s22 + (b2 −β 2 ) X2 X2 (b2 −β 2 ) + (β 2 − β 2 ) H2 (β 2 − β 2 )]−(T +ν 2 )/2
                                                                                                  (2.86)
MODEL COMPARISON                                                                             65

In the same situation the likelihood ratio statistic is (s12 /s22 )−T /2 . All of the mod-
ifications of this statistic in (2.86) come about because of the prior distributions
in the two models. Conventional non-Bayesian hypothesis tests comparing the two
models are based on the fact that if one of the models nests the other—that is, if
either X1 = X2 A21 or X2 = X1 A12 —then (s12 /s22 )−T /2 has a convenient sampling
distribution. There is no such nesting required for the use of Bayes factors and
posterior odds ratios. Furthermore, while X1 = X2 A21 implies that the likelihood
ratio (s12 /s22 )−T /2 cannot exceed 1, the Bayes factor can be any positive number.
     Inspection of (2.86) indicates those aspects of model and observed data that lead
to a higher Bayes factor in favor of the first model. If ν 1 = ν 2 = ν, s 21 = s 22 = s 2 ,
β 1 = b1 and β 2 = b2 , then the second line of (2.86) reduces to [(s 2 + s12 )/(s 2 +
s22 )] −(T +ν)/2 . If s 2 is small relative to s12 and s22 , and ν is small relative to T , this
is a minor modification of the likelihood ratio. The first line of (2.86) favors the
model in which the prior precision is a relatively more important component of the
posterior precision of the coefficient vector. In a situation in which prior means
agreed with the least-squares fit, the model that concentrates its prior probability
more intensely on this point is favored in the first line.


    In the model averaging process (2.73) it is the relative posterior probabilities,
or equivalently the posterior odds ratios, of the models under consideration that
matter. In general, there is no sense in which we are forced to choose among
models. In some cases, however, choice of models is the essence of the decision
problem; see, for example, Bajari and Lee (2003), who use alternative models and
Bayes factors in deciding whether there has been collusion at an auction. With no
real loss of generality, assume that there are only two models in the choice set.
Treating model choice as a Bayes action, let L(Ai , Aj ) denote the loss incurred
in choosing model Ai conditional on model Aj being true. Suppose further that
L(Ai , Ai ) = 0 and L(Ai , Aj ) > 0 if i = j . Given the data yo , the expected loss
from choosing model Ai is P (Aj | yo )L(Ai , Aj ) (j = i), and so the Bayes action
is to choose model 1 if P (A2 | yo )L(A1 , A2 ) < P (A1 | yo )L(A2 , A1 ), that is, if

                    P (A1 | yo )   P (A1 )p(yo | A1 )   L(A1 , A2 )
                                 =                    >             .
                    P (A2 | yo )   P (A2 )p(yo | A2 )   L(A2 , A1 )

  Definition 2.6.2 In choosing between two models, the ratio of loss functions
L(A1 , A2 )/L(A2 , A1 ) is the Bayes critical value.


    We choose model 1 if the posterior odds ratio in favor of it exceeds the Bayes
critical value. For reasons of economy an investigator may therefore report only the
marginal likelihood, leaving it to his or her clients—the users of the investigator’s
research—to provide their own prior model probabilities and loss functions. The
steps of reporting marginal likelihoods and Bayes factors are sometimes called
hypothesis testing as well.
66                                                          ELEMENTS OF BAYESIAN INFERENCE


2.6.2 Predictive Densities
The marginal likelihood of model Aj , p(YoT | Aj ), is the measure of how well
model Aj predicted the data YoT that are relevant for the comparison of model
j with other models. In fact, there is a more formal link between the marginal
likelihood of a model and the adequacy of the model’s predictions that underscores
the predictive interpretation of p(YoT | Aj ). To establish this link, first consider the
distribution of yT +1 , . . . , yF conditional on YoT and model A.

  Definition 2.6.3     The predictive density of yT +1 , . . . , yF conditional on YoT and
model A is
                               p(yT +1 , . . . , yF | YoT , A).                     (2.87)

   The predictive density is relevant after formulation of model A and observing
YT = YoT , but before observing yT +1 , . . . , yF . Once yT +1 , . . . , yF are known, we
can evaluate (2.87) at the observed values.

   Definition 2.6.4 The predictive likelihood of yoT +1 , . . . , yoF conditional on YoT
and the model A is the real number p(yoT +1 , . . . , yoF | YoT , A).

   It is natural to compare how well alternative models predict the same set of
observations, by comparing their predictive likelihoods.

  Definition 2.6.5 The predictive Bayes factor in favor of model Aj , versus
model Ak , is p(yoT +1 , . . . , yoF | YoT , Aj )/p(yoT +1 , . . . , yoF | YoT , Ak ).

   There is a formal link between predictive likelihood and marginal likelihood
that is illuminating and useful, dating at least to Geisel (1975).

   Theorem 2.6.1 Representation of Predictive Likelihood              The predictive like-
lihood is a ratio of marginal likelihoods:

                 p(yoT +1 , . . . , yoF | YoT , A) = p(YoF | A)/p(YoT | A).

     Proof:

                 p(YF | A) = p(YF | YT , A)p(YT | A)
                              = p(yT +1 , . . . , yF | YT , A)p(YT | A).


    Theorem 2.6.1 shows that the predictive likelihood is the multiplicative updat-
ing factor applied to the marginal likelihood p(YoT | A), after the observations
yoT +1 , . . . , yoF become available, that produces the new marginal likelihood
p(YoF | A). This updating relationship is quite general.
MODEL COMPARISON                                                                              67

   Corollary 2.6.1 Decomposition of the Marginal Likelihood For any strictly
                                     q
increasing sequence of integers {sj }j =0 with s0 = 0 and sq = T , the marginal like-
lihood may be decomposed

                                      
                                      q
                     p(YoT | A) =            p(yosτ −1 +1 , . . . , yosτ | Yosτ −1 , A).   (2.88)
                                      τ =1

   This result immediately implies that the Bayes factor in favor of model Aj
versus model Ak can be decomposed in terms of predictive Bayes factors:
                                                                                
                  p(YoT | Aj )  p(ysτ −1 +1 , . . . , ysτ | Ysτ −1 , Aj )
                                 q     o                    o      o
                              =                                                    .
                  p(YoT | Ak ) τ =1 p(yosτ −1 +1 , . . . , yosτ | Yosτ −1 , Ak )

    The decomposition in Corollary 2.6.1 summarizes the “out of sample prediction
record” of the model as expressed in the predictive likelihoods. In the sense made
precise by (2.88) and the use of p(YoT | A) in model averaging [(2.73) and (2.74)],
there is no distinction between a model’s adequacy and its out of sample predic-
tion record. The decomposition (2.88) may be interpreted as a formal expression
of Milton Friedman’s well-known identification of a model’s evaluation with its
predictive performance: “Theory is to be judged by its predictive power . . . The
only relevant test of the validity of a hypothesis is comparison of its predictions
with experience” [see Friedman (1953), pp. 8–9; emphasis in original]. There are
striking similarities between Friedman (1953) and Jeffreys (1939, 1961). The third
edition (Jeffreys 1961) contains, in Chapter 1, essentially the results presented here
for the very special case of deterministic dichotomous outcomes.

Example 2.6.4 Predictive Densities in the Normal Linear Regression Model
with Fixed Precision Suppose that the specification of the normal linear regres-
sion model (2.10)–(2.11) applies to F observations. Precision is fixed at h = h0 .
The covariate matrix X and outcome vector yo for the first T observations are
known. For the last f = F − T observations the covariate matrix  X is known but
the corresponding outcome vector yo is not. Thus

                                                          −1
                              β | (yo , X, 
                                           X, A) ∼ N (β, H ),

                                         −1
with H = H + h0 X X and β = H (Hβ + h0 X yo ). Since

                           y | (β, yo , X, 
                                          X, A) ∼ N ( 
                                                       Xβ, h−1
                                                            0 If )


it follows that
                                                    −1 
                     y | (yo , X, 
                                 X, A) ∼ N ( 
                                              Xβ, 
                                                  XH X + h−1
                                                           0 If ).
68                                                           ELEMENTS OF BAYESIAN INFERENCE


When 
     y = yo is observed, the predictive likelihood for the last f observations is
                                                     −1/2
                                   −1              
 p(             X, A) = (2π)−f/2 
    yo | yo , X,                   XH X + h−1  0 I f 
                                                −1 
                                  yo − 
                          · exp[−(    Xβ) ( 
                                              XH X + h−1    −1
                                                       0 If ) (yo − 
                                                                     Xβ)/2].
                                                                              (2.89)
     From (2.78) and (2.80) the marginal likelihood for the first T observations is
                                            T /2     1/2  −1/2
                p(yo | X, A) = (2π)−T /2 h0           H H
                                                                      
                                · exp[−(h0 yo yo + β  Hβ − β Hβ)/2]                (2.90)

                                                    F = (y ,
and the marginal likelihood for all F observations yo    o
                                                             yo ) is

                                              F /2     1/2  −1/2
              p(yoF | X, 
                         X, A) = (2π)−F /2 h0           H H
                                                                          
                                                     
                                 · exp[−(h0 yo
                                             F yF + β Hβ − β Hβ)/2].
                                                o
                                                                                     (2.91)

                                        −1
In (2.91) H = H + h0 X 
                         X, and β = H (Hβ + h0 X yo + h0   X
                                                               yo ).
   Theorem 2.6.1 states that (2.89) is the ratio of (2.91) to (2.90). This follows
directly once we establish two facts:
                                                     −1 
                  h0 |H + h0 
                             X                   XH 
                                X|−1/2 /|H|−1/2 = |   X + h−1    −1/2
                   f/2
                                                            0 If |                   (2.92)

and
                 −1                                                         
   yo − 
  (           XH 
        Xβ) (    X + h−1    −1
                        0 If ) (yo − 
                                      Xβ) = h0
                                              yo
                                                 yo + β Hβ − β Hβ. (2.93)

Restate (2.92) as
                                   −1             
                                                          f
                    H + h0   X = H · 
                            X            XH 
                                              X + h−1 If  h ,  0         0


and exploit the fact that if
                                        
                                            A C
                                   E=
                                            B D

and A and D are nonsingular then
                                                         
                |E| = |A| · D − BA−1 C = |D| · A − CD−1 B                        (2.94)

[Rao (1965), Problem 1b.2.4]. Letting
                                               
                                    −H h0 
                                          1/2 
                                             X
                           E=                     ,
                                   h0 
                                    1/2
                                        X If
MODEL COMPARISON                                                                  69

from (2.94) we have

                                                               
             −H · If + h0  −1  
                              XH X  = −H − h0   X ⇒ H + h0 
                                                 X                 X
                                                                  X 
                                      
                                  −1           −1 
                                                              
                                                               f
               = H · If + h0 
                                XH X  = H · 
                                                 XH X + h−1
                                                         0 If  · h0 .


  Turning to (2.93), we obtain the equation

                               
        β Hβ = β Hβ − β   Xβ + 2β 
                        X V          yo + h0
                                   X V         yo − 
                                             yo    yo V
                                                          yo                   (2.95)

              −1 
where V = ( 
            XH X + h−1    −1
                     0 If ) . Note that

                      −1                                   −1     −1    −1
                   H       = (H + h0 
                                     X 
                                        X)−1 = H                −H X V
                                                                       XH .

Hence

                   −1
             β = H (Hβ + h0 
                            X
                              yo )
                    −1       −1    −1
               = (H        −H    XH )(Hβ + h0 
                               X V            X
                                                 yo )
                         −1  o  −1           −1    −1  o
               = β + h0 H Xy −H    Xβ − h0 H 
                                   X V             XH 
                                                 X V   Xy .                  (2.96)

Note also that
                                                   
                                                yo 
                                  β H = β H + h0   X.                         (2.97)

The left side of (2.95) is the product of (2.97) and (2.96). Expanding this product,
we have
                                       
                           β Hβ = β Hβ                                        (2.98a)
                                                
                                   + h0 β X 
                                            y        o                      (2.98b)
                                            
                                   −β 
                                      X V
                                          Xβ                                  (2.98c)
                                                           −1
                                   − h0 β    XH 
                                          X V  X
                                                   yo                         (2.98d)
                                                o 
                                   + h0
                                       y Xβ                                   (2.98e)
                                              −1  o
                                        yo 
                                   + h20   XH Xy                           (2.98f)
                                             −1 
                                       yo 
                                   − h0   XH X V
                                                  Xβ                          (2.98g)
                                              −1    −1  o
                                        yo 
                                   − h20   XH    XH 
                                                X V   Xy .                  (2.98h)
70                                                      ELEMENTS OF BAYESIAN INFERENCE


Expressions (2.98a) and (2.98c) are the first two terms on the right side of (2.95).
Expression (2.98b) is the same as (2.98e), and (2.98d) is the same as (2.98g). Twice
the sum of (2.98b) and (2.98d) is
               o          −1  o                   −1  o
       2(h0 β 
              Xy − h0 β   XH 
                         X V   Xy ) = 2h0 β         XH 
                                              X (If − V   X )
                                                              y
                                                    
                                            = 2h0 β 
                                                    X [If − V(V−1 − h−1     yo
                                                                     0 If )]
                                                 
                                            = 2β   yo .
                                                 X V

This is the third term on the right side of (2.95). Finally, the sum of (2.98f) and
(2.98h) is
                                 −1       −1        −1  o
                      h20     XH 
                         yo (    X −XH    X VXH   X )y .
                               −1    −1 
Employing the relationships V
                             XH    XH 
                                 X =   X V = If − h−1
                                                    0 V, this expres-
sion is
                     −1    −1                          −1 
           h20    XH 
              yo [      XH 
                       X −   X (If − h−1          yo 
                                            yo = h0
                                       0 V)]          XH    yo
                                                           X V
                                                           yo (If − h−1
                                                       = h0              yo
                                                                      0 V)

                                                       = h0  yo − 
                                                           yo    yo V
                                                                        yo .

These are the last two terms on the right side of (2.95).
                                                                             i.i.d.
Exercise 2.6.1 Comparison of Simple Normal Models          Suppose yt ∼ N (µ, 1).
The sample size is T = 10; y = −0.2 and 10      y
                                             t=1 t
                                                  2
                                                    /10 = 1. For each of the follow-
ing prior distributions, compute the numerical value of the log marginal likelihood.
Explain the ordering of the values that you obtain.

     (a) µ = 0.
     (b) µ ∼ N (0, 1). (This is a special case of Example 2.6.1.)
     (c) µ ∼ N (0, 1) truncated to µ > 0:

                           p(µ) = (π/2)−1/2 exp(−µ2 /2)I(0,∞) (µ).

         (This is a variant on Example 2.6.1.)

Exercise 2.6.2 Models for Positive Observables (This is a continuation of
Exercise 2.4.6.) The observables y1 , . . . , yT are i.i.d. and strictly positive. In
model A
                     p(yt | θ, A) = θ exp(−θyt )I(0,∞) (yt )

while in model B

                 p(yt | h, B) = (π /2)−1/2 h1/2 exp(−hyt2 /2)I(0,∞) (yt ).

Derive the Bayes factor in favor of model A.
MODEL COMPARISON                                                                71

Exercise 2.6.3 Model Combination Suppose that there are three models (A,
B, C) for the observable y. Each model completely specifies the distribution of
y—there are no unobservables in any of the models. The complete specification is


      Model        Model Prior Probability      y Density        ω Density

        A                   p(A)                 p(y | A)       p(ω | y, A)
        B                   p(B)                 p(y | B)       p(ω | y, B)
        C                   p(C)                 p(y | C)       p(ω | y, C)

  (a) Suppose that the investigator’s problem is to choose one of these models
      subject to the following loss function:


          Choice ↓ Truth−→             A             B              C

                   A                  0           L(A, B)       L(A, C)
                   B               L(B, A)           0          L(B, C)
                   C               L(C, A)        L(C, B)          0

      Formulate an explicit rule for model choice. Be as specific as you can.
  (b) Now suppose that the investigator’s problem is to estimate ω, subject to a
      quadratic loss function. What is her estimate? Be as specific as possible.
  (c) Finally, suppose that the investigator’s problem is to form an estimate   ω,
      using the loss function |ω − ω|. What is her estimate? Be as specific as
      possible.
CHAPTER 3




      Topics in Bayesian Inference


This chapter continues the development of principles of Bayesian inference. While
the topics treated here are not essential to the specific models taken up in
Chapters 5–7, they provide a greater depth of understanding that often yields divi-
dends in Bayesian investigation. Much of the chapter addresses the prior distribution
of unobservables. The development of hierarchical priors (Section 3.1) illustrates
how models can be enriched with large numbers of unobservables as long as prior
information provides sufficient structure. The treatment of improper prior distri-
butions (Section 3.2) emphasizes their interpretation as limits of proper priors.
Section 3.3 provides one approach to the common situation in which the investi-
gator does not know the client’s prior distribution or even the client. The chapter
treats two other topics, as well. Asymptotic analysis (Section 3.4) derives conditions
under which posterior distributions collapse to points as sample size increases, and
further conditions that imply that the posterior distribution approaches the normal
distribution. The chapter concludes with a discussion of the likelihood principle,
which states that data-based information is conveyed entirely through the likelihood
function. Bayesian inference is always consistent with the likelihood principle, and
Section 3.5 illustrates how violations of this principle can lead to unreasonable
decisions.


3.1 HIERARCHICAL PRIORS AND LATENT VARIABLES

The use of unobservable, or latent, variables has a history of more than a half-
century in econometrics and the social sciences; see Goldberger (1974) or Gril-
liches (1977) for a recounting of the origins of modeling with latent variables.
In Bayesian statistics, the concept of the hierarchical prior distribution was intro-
duced by Lindley and Smith (1972) and Smith (1973). In both cases the techniques
have substantially increased the flexibility and applicability of inference and are
widely used. While developed independently, the two principles are identical from
a Bayesian perspective. Moreover there is a natural congruence between these
Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.

                                                                                   73
74                                                            TOPICS IN BAYESIAN INFERENCE


methods and Markov chain Monte Carlo posterior simulation methods discussed
in Section 4.3. The following example illustrates the main ideas in a simple
setting.

Example 3.1.1 Prior Distributions in a Model for Many Means Outcomes yit
are observed for individuals i = 1, . . . , n and time periods (or trials) t = 1, . . . , T .
Suppose that a complete model A1 includes

                           yit = µi + εit , εit ∼ N (0, h−1 ),
                                                i.i.d.
                                                                                       (3.1)
                            µ | A1 ∼ N (µ, H−1 ),                                      (3.2)

where µ = (µ1 , . . . , µn ) , and an independent prior p(h | A1 ) that need not be
further specified for the purposes of this example. The prior distribution of µ
incorporates the idea that there is substantial uncertainty about the means µi , but
that relative to this uncertainty the means are likely to be similar, although not
identical. This idea could be expressed through E(µ | A) = µ = ιn µ, where ιn is an
n × 1 vector of ones, var(µi | A) = Hii = h−1 , and cov(µi , µj | A) = Hij = ρh−1 .
The investigator provides the numerical values of µ, h > 0, and ρ ∈ (0, 1). The
closer ρ is to one, the more similar are the means µi in the prior specification of
the model.
   An alternative, but equivalent, complete model A2 retains (3.1) but in place of
(3.2) introduces a hierarchical prior distribution. This distribution begins with a
new unobservable

                                 µ | A2 ∼ N (µ, ρh−1 ).                                (3.3)

Then the means µ1 , . . . , µn are conditionally independent, with

                           µi | (µ, A2 ) ∼ N [µ, (1 − ρ)h−1 ].                         (3.4)

Taken together, (3.3) and (3.4) are equivalent to (3.2).
  Yet a third complete model A3 substitutes

                                      yit = 
                                            zi + εit

for (3.1). The random variables  zi are latent—that is, they are never observed. If
A3 specifies the distribution of latent variables

                              zi | A3 ∼ N [µ, (1 − ρ)h−1 ]
                                      i.i.d.
                              

and the prior distribution µ | A3 ∼ N (µ, ρh−1 ), then A3 is equivalent to A2 ; in
fact, 
      zi = µi .
HIERARCHICAL PRIORS AND LATENT VARIABLES                                                   75

   More generally, a complete model A with a two-tier hierarchical prior distribu-
tion specifies a conditional observables density

                                     p(y | λA , ψ A , A).                            (3.5)

In the first tier, the prior distribution of λA is expressed conditional on a vector of
unobservable hyperparameters φ A :

                                       p(λA | φ A , A).                              (3.6)

The term “hyperparameter” denotes the fact that φ A is not a parameter of the observ-
ables density (3.5). Rather, it is a convenient construct for expressing uncertainty
about λA , by means of the prior density

                                      p(ψ A , φ A | A),                              (3.7)

which completes the model. The prior density of all the unobservables is

                 p(λA , ψ A , φ A | A) = p(λA | φ A , A)p(ψ A , φ A | A).            (3.8)

    A simple complete latent variable model B includes a vector of unobserved
(latent) variables 
                   z and a conditional observables density

                                      p(y | 
                                            z, ψ B , B),                             (3.9)

a model for the latent variables

                                         z | φ B , B),
                                       p(                                          (3.10)

and a prior density for the unobservables ψ B and φ B :

                                      p(ψ B , φ B | B).                             (3.11)

Then the prior density of the full vector of unobservables θ B = (
                                                                   z , ψ B , φ B ) is

                    z, ψ B , φ B | B) = p(
                  p(                     z | φ B , B)p(ψ B , φ B | B).             (3.12)

   Comparing (3.5)–(3.8) with (3.9)–(3.12), it is apparent that the complete model
with a two-tier hierarchical prior distribution and the simple latent variable model
with a conventional prior distribution are formally identical. Since
                               
      p(y | φ A , ψ A , A) =        p(λA | φ A , A)p(y | λA , ψ A , A) dν(λA ),
                               A
76                                                                TOPICS IN BAYESIAN INFERENCE


the unobservables vector λA is formally redundant. The reason for introducing λA is
that it facilitates expression of the prior distribution, makes analysis of the posterior
distribution easier, or both. Likewise the latent variable model implies
                                      
               p(y | φ B , ψ B , B) =   p(z | φ B , B)p(y |
                                                            z, ψ B , B) dν(
                                                                           z).
                                         Z

An advantage of the latent variable formulation in a Bayesian context is that it
obviates the need to evaluate the likelihood function
                                 
         p(yo | φ B , ψ B , B) =     z | φ B , B)p(yo |
                                   p(                 z, ψ B , B) dν(
                                                                      z)
                                     Z

analytically, a task that is impossible in some applications, for example, the multi-
nomial probit model [see Geweke et al. (1994) or McCulloch and Rossi (1994)].
   A further advantage of hierarchical prior distributions is that they are often the
natural vocabulary for generalizing a model, and they facilitate the expression of
conditional posterior distributions that are central in the Markov chain Monte Carlo
posterior simulators introduced in Section 4.3.

Example 3.1.2 Posterior Distributions in a Model for Many Means In the
complete model A2 of Example 3.1.1 consisting of (3.1), (3.3), and (3.4), the
conditional posterior distributions of the means µi are independent:
                                                           −1
                     µi | (µ, h, yo , A2 ) ∼ N (µi , hi ) (i = 1, . . . , n)                  (3.13)

with
                                                                                     
                                      −1                                 
                                                                         T
        hi = (1 − ρ)−1 h + T h, µi = hi               (1 − ρ)−1 hµ + h          yit .         (3.14)
                                                                          t=1

Note that µ does not appear in (3.14). The conditional posterior distribution of µ is

                                                                     −1
                         µ | (µ1 , . . . , µn , h, yo , A2 ) ∼ N (µ, h )                      (3.15)

with
                                                                                         
                                             −1                             
                                                                            n
             −1                −1                     −1              −1
       h=ρ        h + n(1 − ρ) h, µ = h           ρ        hµ + (1 − ρ) h             µi .    (3.16)
                                                                                i=1

Note that the data yo do not appear in the latter distribution. The conditional distri-
butions (3.13) and (3.15) are the basis for a Markov chain Monte Carlo posterior
simulator.
   In Example 3.1.1 the investigator specified numerical values for ρ and h in
the prior distribution. Suppose instead that the investigator regards ρ and h as
unobservables, and reflecting this fact replaces them with the symbols ρ ∗ and h∗ ,
HIERARCHICAL PRIORS AND LATENT VARIABLES                                                     77

assigning them the independent prior distributions s ∗2 h∗ | A2 ∼ χ 2 (ν ∗ ) and ρ ∗ |
A2 ∼ uniform(ρ ∗1 , ρ ∗2 ), where s ∗2 , ν ∗ , ρ ∗1 , and ρ ∗2 , represent positive real numbers
with ρ ∗1 < ρ ∗2 < 1. Note that the conditional distributions of the means µi and the
hyperparameter µ remain as they are in (3.13)–(3.16)—in particular, s ∗2 , ν ∗ , ρ ∗1 ,
and ρ ∗2 do not appear in these expressions. Moreover, the conditional posterior
distributions for ρ ∗ and h∗ do not depend on yo or h.

   This example indicates how a hierarchy of prior distributions may be extended.
The fact that the conditional posterior distribution of µ does not depend on the
data in (3.15) is the manifestation of a universal characteristic of the vector of
hyperparameters in a model with a two-tier hierarchical prior. From (3.5)–(3.7),
we obtain

   p(φ A | λA , ψ A , yo , A) ∝ p(ψ A , φ A | A)p(λA | ψ A , φ A , A)p(yo | λA , ψ A , A)
                              ∝ p(ψ A , φ A | A)p(λA | ψ A , φ A , A).

See Exercise 3.1.2 for an extension of this idea.

Exercise 3.1.1 Completing the Argument                  Derive (3.13)–(3.16).

Exercise 3.1.2 Multitier Prior Distributions Consider a model with an (n − 1)-
tier hierarchical prior distribution of the unobservables. The conditional pdf of the
observables is p(y | θ A1 , A), and the prior density is

                                                  
                                                  n−1
                     p(θ A | A) = p(θ An | A)           p(θ Ai | θ Ai+1 , A),
                                                  i=1

where θ A = (θ A1 , . . . , θ An ). Show that in the conditional posterior densities p[θ Aj |
θ Ai (i = j ), yo , A], the vectors θ Ai do not actually appear unless i = j − 1 or i =
j + 1, and the data vector yo does not appear unless j = 1.

Exercise 3.1.3 Hierarchical Prior Distributions In model A, the distribution of
y = (y1 , . . . , yT ) conditional on x = (x1−p , . . . , xT −1 ) is

                            
                            p
               yt = β 0 +         β s xt−s + εt , ε | (h, x, A)∼N (0, h−1 IT ),
                            s=1

where ε = (ε1 , . . . , εT ) . The investigator would like to complete the model with
the independent prior distributions

                     β =(β 0 , . . . , β p ) ∼N (β, H−1 ), s 2 h ∼ χ 2 (ν).

Her beliefs are well represented by β = 0. In choosing H she wishes to express the
idea that for s = 1, . . . , p the coefficients β s are likely to be smaller in absolute
value, the greater is s, but she is not sure how quickly they become small.
78                                                               TOPICS IN BAYESIAN INFERENCE


     (a) Set up a hierarchical prior distribution that could represent the investigator’s
         beliefs about β 1 , . . . , β p ; that is, set H = H(φ), and then choose a prior
         distribution p(φ | λ) in which the investigator will fix the value of λ.
     (b) Corresponding to the prior distribution you chose in (a), express:
           (i) p(β | y, x, h, β, s 2 , ν, φ, λ, A); besides β, this expression should
               involve only y, x, h, β, and φ.
          (ii) p(h | y, x, β, β, s 2 , ν, φ, λ, A); besides h, this expression should
               involve only y, x, β, s 2 , and ν.
         (iii) p(φ| y, x, h, β, β, s 2 , ν, λ, A); besides φ, this expression should
               involve only β, β, and λ.


3.2 IMPROPER PRIOR DISTRIBUTIONS

Bayesian investigators often report results using prior distributions that are widely
dispersed, so that their densities are nearly flat, at least over the range of the param-
eter space A in which the likelihood function is concentrated. As we shall see in
Section 8.4, there can be sound technical reasons for doing this. But this procedure
also looks appealing on the grounds that a nearly “flat” prior density seems to con-
vey very little information, and is therefore appropriate in communicating results
to a diverse group of people who may have very different priors. This rationale is
misleading, and this can be seen by considering the effects of reparameterization
of a model. Suppose that from the model A we create the model B by taking
θ B = f (θ A ), and f (·) is one-to-one. Then we can write θ A = h(θ B ) with h = f −1
and θ B ∈ B , with B the image of A under f (·). The new observables density is

                         p(y | θ B , B) = p[y | θ A = h(θ B ), A].                      (3.17)

The new prior density is
                                                                      
                   p(θ B | B) = p[θ A = h(θ B ) | A] [∂h(θ B )/∂θ B ] .              (3.18)

Note that because of the Jacobian term in (3.18), p(θ B | B) can be made nearly
“flat” when p(θ A | A) is not, by appropriate choice of f , and vice versa. For the
vector of interest ω, we have

                      p(ω | y, θ B , B) = p[ω | y, θ A = h(θ B ), A].                   (3.19)

For purposes of learning about ω it does not matter which model is used because
                       
        p(ω | y, B) ∝      p(ω | y, θ B , B)p(y | θ B , B)p(θ B | B) dν(θ B )
                                B
                            
                        =           p[ω | y, θ A = h(θ B ), A]p[y | θ A = h(θ B ), A]
                                B
                                                                   
                            ·p[θ A = h(θ B ) | A] [∂h(θ B )/∂θ B ] dν(θ B )
IMPROPER PRIOR DISTRIBUTIONS                                                        79
                          
                      =           p(ω | y, θ A , A)p(y | θ A , A)p(θ A | A)
                              A
                                            −1                 
                        · [∂f (θ A )/∂θ A ] [∂f (θ A )/∂θ A ] dν(θ A )
                        
                      =      p(ω | y, θ A , A)p(y | θ A , A)p(θ A | A) dν(θ A )
                              A

                      ∝ p(ω | y, A).

[The first equality simply substitutes from (3.19), (3.17) and (3.18). The second
equality is a conventional change of variable from θ B to θ A .] Evidence about ω
will be the same in models A and B, and yet the prior in B can be manipulated
to be nearly “flat” in the parameter space B . Thus the shape of the prior alone is
no indication of how much information it conveys.
   To develop prior distributions that may nonetheless prove useful in communi-
cating results, consider a sequence of models A = {Aj }∞      j =1 , each with the same
parameter vector θ A , data density p(y | θ A , A), and vector of interest ω, but with
different prior densities p(θ A | Aj ). Let k(θ A | Aj ) be a sequence of kernels cor-
responding to the sequence of prior densities, k(θ A | Aj ) ∝ p(θ A | Aj ). Then the
corresponding sequence of posterior densities for θ A is

                     p(θ A | yo , Aj ) ∝ p(yo | θ A , A)k(θ A | Aj ).

It may turn out that k(θ A | Aj ) has a pointwise limit k(θ A | A) that is not finitely
integrable—that is, it is not the kernel of any pdf. At the same time, it may be the
case that limj →∞ p(θ A | y, Aj ) ∝ k(θ A | A)p(y | θ A , A) is finitely integrable and
therefore is a well-defined posterior density kernel. For many purposes, analysis
may be carried out using k(θ A | A), ignoring the fact that it cannot be the kernel
of a prior density. The following definition, theorem, and three corollaries develop
these ideas more carefully.

   Definition 3.2.1 Let k(θ A | Aj ) be a sequence of prior density kernels for
which k(θ A | A) = limj →∞ k(θ A | Aj )∀θ A ∈ A exists but is not finitely inte-
grable. If limj →∞ p(θ A | yo , Aj ) ∝ k(θ A | A)p(yo | θ A , A) exists and is finitely
integrable, then k(θ A | A) is an improper prior density kernel for θ A in the model
A with data yo .

   An attraction of using an improper prior distribution is that it can reflect some
limiting properties of the sequence of distributions ω | (YoT , Aj ) and moments
E[h(ω)|(yo , Aj )]. It is important to establish the conditions under which this will
happen, and to see exactly which limiting properties are reflected in the posterior
distribution that employs the improper prior distribution.

  Theorem 3.2.1 Convergence of Posterior Densities Given a Sequence of Prior
Densities Let p(θ A | Aj ) be a sequence of prior densities with corresponding
80                                                           TOPICS IN BAYESIAN INFERENCE


kernels k(θ A | Aj ). Suppose that for all θ A ∈      A , k(θ A | Aj ) is monotone non-
decreasing with

                              lim k(θ A | Aj ) = k(θ A | A),
                             j →∞


where k(θ A |A) is an improper prior density kernel for θ A . Suppose further that
                          
                     cj =     p(yo | θ A , A)k(θ A | Aj ) dν(θ A )            (3.20)
                                A


                                           d
has finite limit c. Then θ A |(yo , Aj ) → θ A |(yo , A) and a kernel of the limiting
posterior distribution limj →∞ p(θ A | yo , Aj ) is p(yo | θ A , A)k(θ A | A).

     Proof: Clearly

       lim p(yo | θ A , Aj )k(θ A | Aj ) = p(yo | θ A , A)k(θ A | A)∀θ A ∈   A.
      j →∞


By the monotone convergence theorem (Royden 1968, Section 4.2)
                       
                   c=     p(yo | θ A , A)k(θ A | A) dν(θ A ).
                               A


Consequently

      lim p(yo | θ A , Aj )k(θ A | Aj )/cj = p(yo | θ A , A)k(θ A | A)/c ∀ θ A ∈   A,
     j →∞


which is equivalent to limj →∞ p(θ A | yo , Aj ) = p(θ A | yo , A)∀θ A ∈           A.   By
                                                                     d
Scheffe’s theorem (Rao 1965, Theorem 2c.4.xv), θ A |(yo , Aj ) → θ A |(yo , A).

   When the conditions of Theorem 3.2.1 are satisfied, reports of posterior densities
of parameters using the improper prior can be interpreted as limits of sequences of
posterior densities employing priors whose kernels converge to the improper prior
kernel. These conditions imply that there exist convergent sequences of credible sets,
as well—that is, P (θ A ∈ C | yo , A) = 1 − α ⇒ limj →∞ P (θ A ∈ C | yo , Aj ) =
1 − α. Under further weak conditions, the improper prior also provides limits of
moments of θ A and functions of θ A .

   Corollary 3.2.1 Convergence of Posterior Moments Given a Sequence of Prior
                                    d
Densities Suppose θ A |(yo , Aj ) → θ A |(yo , A) and g : A → R is continuous. If
limj →∞ E[g(θ A )| y , Aj ] = g , then g ∗ = E[g(θ A )| yo , A].
                    o          ∗


                                                         d
  Proof: The conditions imply g(θ A )|(yo , Aj ) → g(θ A )|(yo , A) (Rao 1965,
Theorem 2c.4.xii). The result follows from Rao (1965), Theorem 2c.4.viii.
IMPROPER PRIOR DISTRIBUTIONS                                                        81

                                                                       d
   More generally, it is usually the case that ω | (yo , Aj ) → ω | (yo , A), but some
conditions on p(ω | y o , θ A , Aj ) are needed.

   Corollary 3.2.2 Convergence of the Posterior Distribution of a Vector of Inter-
                                                                    d
est Given a Sequence of Prior Densities Suppose θ A |(yo , Aj ) → θ A |(yo , A), and
for all ω ∈ , g(θ A ; ω) = p(ω | yo , θ A , Aj ) is a continuous function of θ A . Then
              d
ω | (yo , Aj ) → ω | (yo , A).

   Proof: The conditions imply
                          
                 lim inf      g(θ A ; ω)p(θ A | yo , Aj ) dν(θ A )
                         j →∞          A
                              
                         ≥            g(θ A ; ω)p(θ A | yo , A) dν(θ A ),
                                  A


(Rao 1965, Theorem 2c.4.vii), which is equivalent to

                         lim inf p(ω | yo , Aj ) ≥ p(ω | yo , A).
                              j →∞

But
                                                
                  p(ω | y , Aj ) dν(ω) =
                          o
                                                     p(ω | yo , A) dν(ω) = 1 ∀j ,

and hence limj →∞ p(ω | yo , Aj ) = p(ω | yo , A) except possibly on a set of ν-
measure zero. Thus
                   
                                                    
               lim   p(ω | yo , Aj ) − p(ω | yo , A) dν(ω) = 0,
                  j →∞

and the result follows from Scheffe’s theorem.

   Finally, posterior moments E[h(ω) | yo , Aj ] converge if in addition h(·) is con-
tinuous.

   Corollary 3.2.3 Convergence of Posterior Moments of a Vector of Interest
                                                           d
Given a Sequence of Prior Densities Suppose ω | (yo , Aj ) → ω | (yo , A) and
                                               ∗        ∗
h : → R is continuous. If E[h(ω) | y , Aj ] → h , then h = E[h(ω) | yo , A].
                                    o


   Proof: Identical to that of Corollary 3.2.2.

Example 3.2.1 A Sequence of Diffuse Priors for β in the Normal Linear
Regression Model In the normal linear regression model (2.10) fix the precision
at h = h0 and consider the sequence of prior distributions

                         β | Aj ∼N [β, (a j H)−1 ](j = 1, 2, . . .).
82                                                                TOPICS IN BAYESIAN INFERENCE


The sequence {a j } is monotone decreasing with limj →∞ a j = 0. A corresponding
sequence of prior density kernels for β is

               k(β | Aj ) = exp[−a j (β − β) H(β − β)/2] ∝ p(β | Aj ).

The function k(β | Aj ) is monotone increasing to 1 except at β = β where k(β |
Aj ) = 1. Hence it satisfies the condition on kernels in Theorem 3.2.1 with k(β |
A) = 1∀β ∈ Rk . Proceeding as in (2.18a)–(2.21), the corresponding sequence of
posterior density kernels is

     p(yo | β, X, Aj )k(β | Aj ) = (2π)−T /2 h0
                                                  T /2


                                       · exp{−[(β − β j ) Hj (β − β j ) + Qj ]/2},    (3.21)

where
                                                     −1
                  Hj = a j H + h0 X X, β j = Hj (a j Hβ + h0 X Xb),

and
                                                              
                            Qj = h0 yo yo + a j β  H β − β j H β j .

Thus
 
                                                                  −1/2
    p(yo | β, X, Aj )k(β | Aj ) dβ = (2π)(k−T )/2 h0 exp(−Qj /2) Hj 
                                                   T /2
                                                                         < ∞,
  Rk

which converges to
                                                                    −1/2
                                  exp[−h0 (yo −Xb) (yo −Xb)/2] X X
                       (T −k)/2
         (2π )(k−T )/2 h0                                                  .

                                                                   d
Hence from (3.21) and Theorem 3.2.1 β | (yo , X, Aj ) → β | (yo , X, A), with the
kernel density of the latter distribution given by

         p(yo | β, X, Aj )k(β | A) ∝ exp[−h0 (β − b) X X(β − b)/2]

which shows that β | (yo , X, A) ∼ N [b, (h0 X X)−1 ]. From Corollary 3.2.1, we
have

          E[β | (yo , X, Aj )] → b, var[β | (yo , X, Aj )] → (h0 X X)−1 .

   Suppose that the function of interest is the r × 1 vector ω = y∗ = X∗ β + ε∗ ,
where ε ∗ ∼ N (0, h−1
                   0 Ir ) is independent of ε. (This is the conventional “prediction
problem” discussed in many basic econometrics texts.) Then

                 p(ω | β, X∗ , A) ∝ exp[−h0 (ω − X∗ β) (ω − X∗ β)/2],
IMPROPER PRIOR DISTRIBUTIONS                                                              83

which is continuous in β. From Corollary 3.2.2, we obtain
                           d
      ω | (yo , X, Aj ) → ω | (yo , X, A) ∼ N {X∗ b, h−1   
                                                      0 [(X X)
                                                               −1
                                                                  + Ir ]}.

Since the elements of ω and ωω are continuous functions of ω, it is also the case
(Corollary 3.2.3) that

                  E[ω | (yo , X, Aj )] → E[ω | (yo , X, A)] = X∗ b

and

      var[ω | (yo , X, Aj )] → var[ω | (yo , X, A)] = h−1   
                                                       0 [(X X)
                                                                −1
                                                                   + Ir ].

  An important limitation of improper priors is that they lead to models whose
marginal likelihood is zero.

   Theorem 3.2.2 Marginal Likelihood Given an Improper Prior                       The condi-
tions of Theorem 3.2.1 imply
                      
                 lim      p(θ A | Aj )p(yo | θ A , A) dν(θ A ) = 0.
                   j →∞
                                    A

                       
  Proof: Let dj =              A
                                   k(θ A | Aj ) dν(θ A ). Then
                   
                           p(θ A | Aj )p(yo | θ A , A) dν(θ A ) = cj /dj ,
                       A


where cj is as defined in (3.20). Since dj → ∞ and cj → c < ∞, the result
follows.

   As consequences, a model A with an improper prior distribution has no weight
in model averaging (2.73)–(2.74) and will never be selected in a model choice
decision problem. The latter result is widely known as “Lindley’s paradox,” after
Lindley (1957) and Bartlett (1957).

Example 3.2.2 Marginal Likelihood for a Sequence of Diffuse Priors for β
in the Normal Linear Regression Model Continuing with Example 3.2.1, from
(2.80) the marginal likelihood of the j th model in the sequence is
                               T /2        1/2            −1/2
              (2π )−T /2 h0              aj H aj H + h0 X X     exp(−Qj /2).       (3.22)

Since limj →∞ Qj = −h0 (yo −Xb) (yo −Xb), the limit of (3.22) is zero.

   Theorem 3.2.1, Corollaries 3.2.1–3.2.3, and Example 3.2.1 show that there are
reasonable conditions under which the use of an improper prior can be inter-
preted as a limiting case of the use of a sequence of prior distributions. This
84                                                          TOPICS IN BAYESIAN INFERENCE


sequence in turn may be interpreted as “increasingly less concentrated” in the
sense that limj →∞ p(θ A | Aj ) = 0∀θ A ∈ A . But the argument made at the start
of this section shows that interpreting this sequence as an approach to “uninforma-
tive” priors is treacherous because it need not be invariant under transformation.
In view of this difficulty, Jeffreys (1961) proposed a particular prior density that
is unique under transformation.

   Definition 3.2.2 If {yt } is i.i.d. with pdf p(yt | θ A , A), and p(yt | θ A , A) is
differentiable with respect to θ A ∀θ A ∈ A , then the Jeffreys invariant prior density
kernel is
                                                                              1/2
                        ∂ log p(yt | θ A , A) ∂ log p(yt | θ A , A)           
       k(θ A | A) ∝ E                         ·                   | θ A , A  (3.23)
                                                                               
                                  ∂θ A                   ∂θ A
                                                            1/2
                          ∂ 2 log p(yt | θ A , A)           
                     
                  = −E                            | θ A , A .                    (3.24)
                                          
                                  ∂θ A ∂θ A

Note that expectation is with respect to the random vector yt and not the con-
stant vector θ A in (3.23). The equality in (3.24) is a property of probability
densities widely used in non-Bayesian statistics; for example, see Poirier (1995),
Theorem 6.5.1.

   Theorem 3.2.3 Invariance of the Jeffreys Prior The Jeffreys invariant prior
density is invariant under one-to-one reparameterization.

  Proof: Construct the model B by taking θ B = f (θ A ), θ A = h(θ B ) and
p(yt | θ B , B) = p[yt | θ A = h(θ B ), A]. Applying (3.23), we obtain
                                                      
    k(θ B | B) = k[h(θ B ) | A] · [∂h(θ B )/∂θ B ]
                                                                                 
                       ∂ log p[yt | h(θ B ), A] ∂ log p[yt | h(θ B ), A] 1/2
                = E                                ·                            
                                  ∂h(θ B )                    ∂h(θ B )
                                             
                      ∂h(θ B )               
                  ×              | θ A , A
                          ∂θ B
                   
                         ∂h(θ B ) ∂ log p[yt | h(θ B ), A] ∂ log p[yt | h(θ B ), A]
                = E
                            ∂θ B               ∂h(θ B )                ∂h(θ B )
                                                
                        ∂h(θ B )               1/2
                                                
                    ×                  | θ   , A
                          ∂θ B
                                           A

                                                                                 1/2
                       ∂ log p[yt | θ B , B] ∂ log p[yt | θ B , B]               
                = E                                                  | θ B , B  .
                                                                                  
                                  ∂θ B                   ∂θ B

Example 3.2.3 Jeffreys Invariant Prior for the Bernoulli Distribution For
a sequence of i.i.d. Bernoulli trials with outcomes yt = 0 or yt = 1, p(yt |
θ ) = θ yt (1 − θ )(1−yt ) . Then log p(yt | θ) = yt log(θ ) + (1 − yt ) log(1 − θ ), and
IMPROPER PRIOR DISTRIBUTIONS                                                            85

d log p(yt | θ )/dθ = θ −1 yt + (1 − θ )−1 (yt − 1). Since

      E[d log p(yt | θ)/dθ ]2 = E[θ −1 yt + (1 − θ )−1 (yt − 1)]2
                                = θ (θ −1 )2 + (1 − θ )(1 − θ )−2 = θ −1 (1 − θ )−1 ,

the Jeffreys invariant prior density kernel is k(θ ) ∝ θ −1/2 (1 − θ)−1/2 .

Exercise 3.2.1 Improper Prior Distributions in the Normal Linear Regression
Model In Example 3.2.1 the precision h was fixed. Suppose instead that there is
a sequence of prior distributions for h, s 2j h | Aj ∼ χ 2 (ν j ).

  (a) Let s 2j = qν j where q > 0, and suppose limj →∞ ν j = 0. Find a correspond-
      ing sequence of kernels k(h | Aj ) satisfying the conditions of Theorem 3.2.1
      and for which limj →∞ k(h | Aj ) = k(h | A) = h−1 I(0,∞) (h).
  (b) Suppose that in the normal linear regression model of Example 2.1.2

                qν j h | Aj ∼ χ 2 (ν j )   and β | Aj ∼ N [β, (aj H)−1 ]

       are the independent prior distributions for h and β. Also suppose that
       rank(X) = k. For limj →∞ ν j = limj →∞ aj = 0, write the limiting posterior
       density kernel k(β, h| yo , X, A). Show that this is a density kernel of the
       distribution

                              s 2 h | (yo , X, A) ∼ χ 2 (T − k),
                              β|(h, yo , X, A) ∼ N [b, (hX X)−1 ],

       where b = (X X)−1 X yo and s 2 = (y − Xb) (y − Xb). Thus β and h have a
       normal-gamma posterior distribution. It follows (recall Example 2.3.3) that

                     β | (yo , X, A) ∼ t[b, (T − k)−1 s 2 (X X)−1 ; T − k].

   (c) Suppose that in the normal linear regression model with conjugate prior
       distribution of Example 2.3.3

               qν j h | Aj ∼ χ 2 (ν j ) and β | (h, Aj )∼N [β, (aj hH)−1 ].

       Also suppose that rank(X) = k. For limj →∞ ν j = limj →∞ aj = 0, write the
       limiting posterior density kernel k(β, h | yo , X, A). Show that this is a den-
       sity kernel of the distribution

                              s 2 h | (yo , X, A) ∼ χ 2 (T ),
                              β|(h, yo , X, A) ∼ N [b, h(X X)−1 ].

       It follows that β | (yo , X, A) ∼ t[b, s 2 (X X)−1 ; T ].
86                                                             TOPICS IN BAYESIAN INFERENCE


     (d) The conventional non-Bayesian treatment of the normal linear model is
         derived as follows:

                    hs 2 | (β, h, X, A) ∼ χ 2 (T − k),
                        b|(β, h, X, A) ∼ N [β, (hX X)−1 ],
                           b|(β, X, A) ∼ t[β, (T − k)−1 s 2 (X X)−1 ; T − k].

         It is common to give an informal Bayesian interpretation of these results
         in statements such as “The probability that β 2 is negative is. . . .” Using the
         results in parts (b) and (c), provide a formal Bayesian interpretation of such
         statements.

Exercise 3.2.2 An Invariant Prior Distribution Suppose that the observables
are independently and uniformly distributed on the interval (0, θ).

     (a) What is the Jeffreys invariant prior distribution for θ ? Is this prior conjugate?
     (b) Consistent with Theorem 3.2.1, can you find a sequence of proper prior
         densities p(θ | Aj ) with kernels k(θ | Aj ) ≥ k(θ | Aj −1 ), that has as its
         pointwise limit the prior distribution you found in (a)?

Exercise 3.2.3 Jeffreys Prior for the Exponential Distribution Sometimes the
pdf of the exponential distribution is written p(y | θ, A) = θ exp(−θy), and some-
times it is written p(y | λ, A) = λ−1 exp(−y/λ).

     (a) Derive the Jeffreys prior for θ and the Jeffreys prior for λ. Show that these
         priors are improper.
     (b) Derive the corresponding posterior densities for an i.i.d. sample yo and show
         that for any finite interval S of the real line, P (θ ∈ S | yo , A) = P (λ−1 ∈
         S | yo , A).
     (c) Suppose that instead of the Jeffreys prior for θ, we used the improper “flat”
         prior p(θ ) ∝ I(0,∞) (θ ). Given a sample of size T = 1 with single observation
         y1o = 1, compute the posterior probability that θ < 1.
     (d) Suppose now that we used the same improper “flat” prior for λ. Try to
         find the posterior probability that λ > 1, given the same single observation
         y1o = 1.

Exercise 3.2.4 Jeffreys Prior for the Poisson Distribution Find the Jeffreys
prior for the parameter θ of a Poisson distribution [see Exercise 2.3.1(d)], assuming
i.i.d. sampling. Is the prior conjugate?
                                                          i.i.d.
Exercise 3.2.5 Lindley’s Paradox Suppose yt ∼ N (µ, h−1 ) where h is
known. Here are four alternative prior distributions for µ:

     • µ=0
     • p(µ) ∝ I(0,c) (µ)
PRIOR ROBUSTNESS AND THE DENSITY RATIO CLASS                                       87

   • p(µ) ∝ I(0,∞) (µ)
   • p(µ) ∝ I(−∞,∞) (µ)

Given a sample of size T , there are six distinct Bayes factors for pairs of these
hypotheses that could be formed.

  (a) Which Bayes factors will be trivially zero or infinite, and why?
  (b) For the nontrivial pairs, express the Bayes factors using standard notation.

Exercise 3.2.6 Predictive Densities and Improper Priors Suppose that in the
normal linear model (Example 2.1.2) h is fixed at h = h0 . Partition X and y:
                                                  
                                X1               y1
                             T1 ×k          T1 ×1 
                        X=         , y =          .
                                X2               y2
                                    T2 ×k            T2 ×1


In model A, β ∼N (β,H−1 ). There is a sequence of models {Bj } that differ from
A and from each other only with respect to the prior distribution for β : β | Bj ∼
N (β,(j + 1)H−1 ). There are data yo1 for the observable y1 , but y2 has not been
observed. The covariate matrix X is known.

  (a) Find the limiting distribution limj →∞ β | (X1 , yo1 , Bj ).
  (b) Show that limj →∞ p(yo1 | X1 , Bj )/p(yo1 | X1 , A) = 0.
  (c) Find the distribution y2 | (X1 , X2 , yo1 , A) and the limiting distribution
      limj →∞ y2 | (X1 , X2 , yo1 , Bj ).
  (d) Now suppose that we obtain the data yo2 . Is it the case that

                                  p(yo2 | X1 , X2 , yo1 , Bj )
                              lim                              = 0?
                             j →∞ p(yo | X1 , X2 , yo , A)
                                       2               1



3.3 PRIOR ROBUSTNESS AND THE DENSITY RATIO CLASS

In many instances Bayesian investigators do not know their clients’ priors, or even
the identity of their clients. For example, the investigator may be an academic
economist and the clients, the readers of an article published by the economist.
A number of approaches can be taken in this situation. One is to report posterior
moments corresponding to alternative priors, but such an enumeration can become
tiresome long before reasonable possibilities for priors are exhausted. Another is to
provide clients with the ability to modify priors simply and directly and examine
the impact on posterior moments. Section 8.4 discusses this approach. Another
possibility is to report a range along with each posterior moment, corresponding
to all possible prior distributions within a specified class of distributions. Several
interesting classes of prior distributions have been proposed, reviewed in Berger
(1994) and Wasserman (1992).
88                                                            TOPICS IN BAYESIAN INFERENCE


    This section takes up the density ratio class of prior distributions. This class
consists of all prior distributions with a probability density kernel k(θ A | A) that
satisfies the inequalities a(θ A ) ≤ k(θ A | A) ≤ b(θ A ), where a(θ A ) and b(θ A ) are
kernels of prior densities that yield proper posterior densities. A case of particular
interest is b(θ A ) = r · a(θ A ). The density ratio class then permits ratios of prior
probabilities of subsets of A to vary by a factor of up to r from the correspond-
ing ratios implied by the prior density kernel k(θ A | A). If we interpret improper
prior
      density kernels as assigning relative probabilities to ∗A ⊆ A for which
   ∗ k(θ A | A) dθ A < ∞, then the density ratio class can be extended to improper
   A
prior distributions with the same interpretation.
    The development here was first presented in Geweke and Petrella (1998). It
builds on work in Wasserman and Kadane (1992) and Lavine (1991a, 1991b), and
is the basis for the routine and efficient computation of bounds of posterior moments
E(ω | y o , A) approximated byposterior simulators developed in Section 8.5.
    In this section, let g(θ A ) = h(ω)p(ω | yo , θ A , A) dν(ω). For any prior kernel
k(θ A | A), proper or improper, we obtain
                               
                                    k(θ A | A)p(yo | θ A , A)g(θ A ) dν(θ A )
       E[g(θ A ) | y , A] =
                    o              
                                   A
                                                                              .    (3.25)
                                       k(θ A | A)p(yo | θ A , A) dν(θ A )
                                       A



Let a(θ A ) and b(θ A ) be given functions for which 0 ≤ a(θ A ) ≤ k(θ A | A) ≤ b(θ A )
∀θ A ∈ A , and b(θ A )p(yo | θ A , A) is finitely integrable on A . The formal prob-
lem is to determine the range of values of (3.25) over the set S of all prior density
kernels k(θ A | A) satisfying 0 ≤ a(θ A ) ≤ k(θ A | A) ≤ b(θ A ), that is, to determine

                        E[g(θ A ) | yo , A] = inf E[g(θ A ) | yo , A]
                                               k∈S


and

                        E[g(θ A ) | yo , A] = sup E[g(θ A ) | yo , A].
                                              k∈S


   Because E[g(θ A ) | yo , A] = −E[−g(θ A ) | yo , A], only the maximization prob-
lem need be considered. The following result was shown in DeRobertis and Har-
tigan (1981), Proposition 4.1; Lavine (1991b), Claim 3; Wasserman and Kadane
(1992), Theorem 4(b); and Wasserman et al. (1993), p. 308. A proof is included
here because it parallels a similar result based on posterior simulators presented in
Section 8.5.

   Theorem 3.3.1 Bounding a Posterior Moment over the Density Ratio Class
of Priors Let b(θ A ) be a prior density kernel for which the posterior density
kernel b(θ A )p(yo | θ A , A) is finitely integrable on A , and let a(θ A ) ≤ b(θ A ) be a
second prior density kernel. Let S be the set of all prior density kernels k satisfying
PRIOR ROBUSTNESS AND THE DENSITY RATIO CLASS                                                           89

a(θ A ) ≤ k(θ A ) ≤ b(θ A )∀θ A ∈              A , and suppose that (3.25) is bounded above for
k ∈ S. Let

                                                   a(θ A )       if   g(θ A ) ≤ c
                               k(θ A ; c) =                                       .
                                                   b(θ A )       if   g(θ A ) > c

Then the unique solution of
                          
               f (c) =              [g(θ A ) − c]p(yo | θ A , A)k(θ A ; c) dν(θ A ) = 0            (3.26)
                                A



is 
   c = E[g(θ A ) | yo , A] = supk∈S E[g(θ A ) | yo , A].

  Proof: Since (3.25) is bounded above for k ∈ S, f (c) is finite for all real c.
Moreover f (c) is differentiable and
                                           
                          f  (c) ≤ −              p(yo | θ A , A)a(θ A ) dν(θ A )                 (3.27)
                                               A



for all c. Hence (3.26) has exactly one solution.
                                   c) if g(θ A ) − 
   For all k ∈ S, k(θ A ) ≤ k(θ A ;               c > 0 and k(θ A ) ≥ k(θ A ;
                                                                              c) if
g(θ A ) − 
          c < 0. Hence
                      
                              [g(θ A ) − c]p(yo | θ A , A)k(θ A ) dν(θ A ) ≤ 0,
                          A



and
                                                      
        k(θ A )p(yo | θ A )g(θ A ) dν(θ A )                    k(θ A ;
                                                                      c)p(yo | θ A )g(θ A ) dν(θ A )
      
      A
                                            ≤                
                                                             A
                                                                                                     = c.
           k(θ A )p(yo | θ A ) dν(θ A )                           k(θ A ;
                                                                         c)p(yo | θ A ) dν(θ A )
         A                                                        A




    Because Theorem 3.3.1 remains valid with the formal substitution p(yo |
θ A , A) = 1, it provides bounds on prior expectations in a density ratio class of
prior distributions as well.

Example 3.3.1 Density Ratio Bounds for the Normal Density Suppose that
there is a single unobservable θ A , p(yo | θ A , A)a(θ A ) is the kernel of the stan-
dard normal distribution, and b(θ A )/a(θ A ) = r > 1. For g(θ A ) = θ A , (3.26) then
becomes
              c                             ∞
                  (θ A − c)φ(θ A ) dθ A + r     (θ A − c)φ(θ A ) dθ A = 0,      (3.28)
                 −∞                                          c
90                                                                     TOPICS IN BAYESIAN INFERENCE


where φ(·) is the pdf of the standard normal distribution. Denoting
                                                             c     the cdf of the
standard normal distribution by (·) and using the relation −∞ zφ(z) dz = −φ(c)
[Johnson et al. (1994), (13.134)], it follows from (3.28) that

                                (r − 1)[φ(c) + c(c)] − rc = 0.

The unique solution of this equation, c = γ (r), is displayed in the solid line in
Figure 3.1.

   The function γ (r) provides some guidance in choosing r in this and similar
density ratio classes. For example, r = 10 permits the prior mean of any one
parameter to shift up or down by about 0.9 prior standard deviation. To allow a
shift of 1.5 prior standard deviations in a prior mean requires r = 52.3. Larger
shifts in the prior mean require very large values of r because the tails of the
normal distribution decline rapidly.

Example 3.3.2 Density Ratio Bounds for Student-t Densities In the same sit-
uation as Example 3.3.1 suppose instead that p(yo | θ A , A)a(θ A ) is the kernel of
the standard Student-t distribution with λ > 1 degrees of freedom. Then c is the



      3



     2.5



      2



     1.5



      1



     0.5                                                                             g(r)
                                                                                     g*(r;15)
                                                                                     g*(r;6)
                                                                                     g*(r;3)
      0
          0       5       10       15       20       25        30      35       40       45     50
                                            Density class ratio r

              Figure 3.1. Gamma functions for normal, t (15), t (6), and t (3) distributions.
ASYMPTOTIC ANALYSIS                                                                    91

root of
           c                                    ∞
                (θ A − c)t (θ A ; λ) dθ A + r         (θ A − c)t (θ A ; λ) dθ A = 0,
           −∞                                   c

where t (·; λ) is the pdf of the standard Student-t distribution with λ degrees of
freedom. The unique solution of this equation, c = γ ∗ (r; λ), is also shown in
Figure 3.1 for several values of λ. Note that, for small λ, a given value of r
permits a much larger shift for this set of prior distributions than does the normal
case. This is because the tails of the Student-t density with low degrees of freedom
are much thicker than those of the normal density.

Exercise 3.3.1 Completing the Argument                    Derive (3.27).

Exercise 3.3.2 Extending Examples 3.3.1 and 3.3.2 In this exercise, the random
variable x represents any unobservable, for example, x = g(θ A ). Its distribution
could be the posterior, the prior, or some other distribution.

  (a) Let a(x) be any density kernel of the N (µ, h−1 ) distribution, and b(x) =
      r · a(x), where r > 1. Show that if the random variable x has probability
      density kernel k(x) and a(x) ≤ k(x) ≤ b(x), then E(x) ≤ µ + h−1/2 γ (r).
  (b) In the same situation as (a), suppose instead that a(x) is any density kernel
      of the Student-t distribution with λ > 1 degrees of freedom. Show that
      E(x) ≤ µ + h−1/2 γ ∗ (r; λ).


3.4 ASYMPTOTIC ANALYSIS

Asymptotic analysis addresses properties of the limiting behavior of a posterior
density p(θ A | YoT , A) as sample size T → ∞. These properties depend on the
behavior of the sequence YoT = {yo1 , . . . , yoT }. We shall assume in this section only
that YoT is the observed value of a random vector YT with probability density p(YT |
D), where D is the data-generating process. The vectors θ A and YT are random,
with density p(YT | D)p(θ A | YT , A). We do not assume that there necessarily
exists any θ A ∈ A such that p(YT | θ A , A) = p(YT | D). In asymptotic analysis,
θ A and YT appear repeatedly in circumstances where one or the other can be either
a random vector or the argument of a function. For clarity we shall adopt the
convention, in this section only, of using a tilde to distinguish a random      vector
from the argument of a function. Thus, for example, P (       YT ∈ C | D) = C p(YT |
D) dν(YT ). Finally, we shall assume in this section only that the dimension of the
kA × 1 vector θ A is fixed and does not depend on sample size.
   The case in which θ A is discrete provides one of the most important conclusions
of asymptotic analysis without the technical conditions required in the case of
continuous θ A .

   Theorem 3.4.1 Asymptotic Concentration of the Posterior Distribution for a
Discrete Parameter Vector Suppose that
92                                                                TOPICS IN BAYESIAN INFERENCE



     1. The vector of unobservables     θ A has a discrete prior distribution over a finite
        set of n points θ Ai , and p(θ Ai | A) > 0 (i = 1, . . . , n).
     2. T −1 log p( 
                                    a.s.
                    YT | θ Ai , A) → (θ Ai ; A) (i = 1, . . . , n).
     3. For one j ∈ {1, . . . , n}, (θ Aj ; A) > (θ Ai ; A) for all i = 1, . . . , n, i = j .

     Then
                               lim P ( 
                                       θ A = θ Aj | 
                                                    YT , A) = 1.                         (3.29)
                              T →∞

     Proof: For all i = j

     T −1 log[p(θ Ai | 
                       YT , A)/p(θ Aj | 
                                        YT , A)] = T −1 log[p(θ Ai | A)/p(θ Aj | A)]

        +T −1 log[p( 
                     YT | θ Ai , A)/p( 
                                                           a.s.
                                       YT | θ Aj , A)] → (θ Ai ; A) − (θ Aj ; A).

This result does not require that  yt be i.i.d., either in p( 
                                                               YT | D) or in any of p( 
                                                                                       YT |
                                          
θ Ai , A) (i = 1, . . . , n). However, if YT is i.i.d. in both D and A, then condition 2
of Theorem 3.4.1 may be restated in terms of Kullback–Leibler information. [On
the wider significance of Kullback–Leibler information, see Mittelhammer et al.
(2000), Section 13.1.1.]

   Definition 3.4.1 Given two densities p(y | A) and p(y | B) for the same
observable y and defined with respect to the same measure ν, the Kullback–Leibler
information criterion (KLIC) distance from p(y | A) to p(y | B) is
                                  
        K[p(y | A), p(y | B)] =      log[p(y | A)/p(y | B)]p(y | A) dν(y)
                                         
                                     = E{log[p(      y|B)] | A}.
                                               y|A)/p(

Note that the KLIC distance is directed

                     K[p(y | A), p(y | B)] = K[p(y | B), p(y | A)],

and one can be finite while the other is infinite. Clearly K[p(y | A), p(y | A)] = 0,
and by Jensen’s inequality for a convex function

       K[p(y | A), p(y | B)] = −E{log[p(      y|A)] | A}
                                        y|B)/p(
                                 ≥ − log{E[p(      y|A)] | A} = − log(1) = 0.
                                             y|B)/p(

   Condition 3 of Theorem 3.4.1 may now be restated, for the case of i.i.d. distri-
butions, as

         y| θ Aj , A) | D] > E[log p(
 E[log p(                            y| θ Ai , A) | D]
                                                
    ⇔    log p(y | θ Aj , A)p(y | D) dν(y) >        log p(y | θ Ai , A)p(y | D) dν(y)
                                                      

      ⇔ K[p(y | D), p(y | θ Aj , A)] < K[p(y | D), p(y | θ Ai , A)]
ASYMPTOTIC ANALYSIS                                                                    93

for each i = j . More succinctly, as sample size increases, the posterior distribution
places all probability on the parameter vector θ Aj that provides the smallest KLIC
distance from the data-generating density p(y | D) to the model density p(y |
θ Ai , A) (i = 1, . . . , n). Conclusion (3.29) of Theorem 3.4.1 is often summarized
by saying that θ Aj is the pseudotrue value of    θ A.

Example 3.4.1 Asymptotic Concentration in the Bernoulli Model with Discrete
Parameter Suppose that in model A,       yt is an i.i.d. Bernoulli random variable
        yt = 1 | p, A) = p. The prior distribution places positive probability on
with P (
only the three points p = p1 = 14 , p = p2 = 12 , and p = p3 = 34 . Suppose that
in the data-generating process D,  yt is an i.i.d. Bernoulli random variable with
   yt = 1 | D) = p∗ , and p∗ ∈ (0, 1). Then
P (

                yt | pj , A) | D] = p∗ log pj + (1 − p∗ ) log(1 − pj ).
        E[log p(

One can show that P (p = 1/2 | 
                                       a.s.
                               YT , A) → 1 if and only if p∗ ∈ (0.36907,
0.63093).

    When the unobservables   θ A are continuously distributed, the posterior proba-
bility attached to any single point is always zero, for each θ A ∈ A and for all T ,
and consequently this is true for each θ A ∈ A in the limit as well. In this case it
is useful to frame asymptotic analysis in terms of limiting probabilities of a neigh-
borhood of a point θ ∗A with the distinguishing features indicated in the following
result.

  Theorem 3.4.2 Asymptotic Concentration of the Posterior Distribution for a
Continuous Parameter Vector Suppose that

   1. The prior distribution of θ Ais absolutely continuous and P ( 
                                                                      θ A ∈ C | A) > 0
      for all C ⊆ A for which C dθ A > 0.
   2. T −1 log p( 
                                a.s.
                  YT | θ A , A) → (θ A ; A) uniformly for all θ A ∈ A .
   3. (θ A ; A) is a continuous function of θ A with a unique global mode at θ A =
      θ ∗A , and there exist  and  for which M(θ ∗A ) = {θ A :  < (θ A ) < } is a
      bounded open neighborhood of θ ∗A .

   Then for any open neighborhood N (θ ∗A ) of θ ∗A ,

                           lim P [
                                  θ A ∈ N (θ ∗A ) | 
                                                    YT , A] = 1.                   (3.30)
                          T →∞


   Proof: Define G(θ ∗A ) = N (θ ∗A ) ∩ M(θ ∗A ). Let G(θ A∗ ) = A − G(θ ∗A ), 0 =
(θ ∗A ; A), and 1 = supG(θ ∗A ) (θ A ; A). By virtue of condition 3, 0 > 1 . Let 2 =
(0 + 1 )/2 and define

                        H (θ ∗A ) = G(θ ∗A ) ∩ {θ A : (θ A ) > 2 }.
94                                                                       TOPICS IN BAYESIAN INFERENCE


Then

     P [
        θ A ∈ N (θ ∗A ) | 
                          YT , A]   P [
                                       θ A ∈ G(θ ∗A ) | 
                                                        YT , A]
                                  <
                   ∗     
     P [θ A ∈ N (θ ) | YT , A]         
                                    P [θ A ∈ H (θ ) | 
                                                  ∗
                                                        YT , A]
                     A                                 A

                                           θ A ∈ G(θ ∗A ) | A] supθ A ∈G(θ ∗A ) p( 
                                        P [                                       YT | θ A , A)
                                    <                         ·                                  .
                                           θ A ∈ H (θ ) | A] infθ ∈H (θ ∗ ) p( 
                                        P [          ∗
                                                       A                     A   A
                                                                                  YT | θ A , A)
                                                                               (3.31)
From the continuity of  and condition 1 P [
                                            θ A ∈ H (θ ∗A ) | A] > 0. Then, from the
almost sure uniform convergence of T −1 log p( YT | θ A , A)
                                                                 
                     −1
                              supθ A ∈G(θ ∗A ) p( 
                                                  YT | θ A , A)       a.s.
                 T        log                                         → 1 − 2 < 0.
                              infθ ∈H (θ ∗ ) p( 
                                    A     A
                                                 YT | θ A , A)

Consequently the almost sure limit of (3.31) is 0.

   Condition (3.30) of this theorem is often summarized by saying that θ ∗A is the
pseudotrue value of θ A . If 
                             yt is i.i.d. in both D and A, then

                K[p(y | D), p(y | θ ∗A , A)] < K[p(y | D), p(y | θ A , A)]

for all θ A ∈ A except θ ∗A . Condition 2 is key in applying Theorem 3.4.2. This
condition is seldom satisfied for a natural parameter space A . Instead, the param-
eter space must be further restricted to a closed and bounded subset ∗A of A .
Then, showing that T −1 log p( 
                                               a.s.
                                 YT | θ A , A) → (θ A ; A) for all θ A ∈ ∗A is suffi-
cient for condition 2. (Condition 3 requires that θ ∗A be an interior point of ∗A .)
Non-Bayesian approaches to consistency of point estimates encounter a similar
technical complication; see, for example, Amemiya (1985) Theorems 4.2.1 and
4.2.2.

Example 3.4.2 Asymptotic Concentration in the Bernoulli Model with Con-
tinuous Parameter In the i.i.d. Bernoulli setting of Example 3.4.1, but with a
continuous prior distribution, we have

               T −1 log p( 
                                      a.s.
                           YT | p, A) → p∗ log(p) + (1 − p∗ ) log(1 − p),

where p∗ is the value of p in the i.i.d. Bernoulli data-generating process D. If
the prior distribution has support (p1 , p2 ) with 0 < p1 < p∗ < p2 < 1, then the
conditions of Theorem 3.4.2 are satisfied and P [p ∈ (p∗ − ε, p∗ + ε) | 
                                                                                a.s.
                                                                        YT , A] →
1 for all ε > 0.

Example 3.4.3 Asymptotic Concentration in the Normal Linear Regression
Model Suppose that, as in Example 2.1.2, the conditional distribution of observ-
                              y|(h, β, 
ables specified by model A is         X,A) ∼ N ( 
                                                  Xβ, h−1 IT ). Suppose that in the
ASYMPTOTIC ANALYSIS                                                                   95

data-generating process D
                                             
                              −1
                                    y y 
                                       y   X a.s. σ yy σ yx
                          T                     →            ,                    (3.32)
                                    
                                    X  X 
                                       y   X      σ xy xx

a positive definite matrix. D is otherwise left unspecified, and it is not necessarily
                                  y|( 
the case that the distribution of    X,D) is normal, or that the observables  yt are
independent conditional on  X. Then

  log p(y | β, h, X, A) = [−T log(2π) + T log h − h(y y−2y Xβ + β  X Xβ)]/2

and

           y | β, h, 
                          a.s.
T −1 log p(         X,A) → [− log(2π) + log h − h(σ yy − 2σ yx β + β  xx β)]/2.

   The unique global maximum of the latter function occurs at the point β ∗ =
 −1
xx σ xy , h∗ = (σ yy − σ yx xx
                              −1
                                 σ xy )−1 . Condition 1 of Theorem 3.4.2 is satisfied if
the prior distribution of β and h is absolutely continuous, condition 2 is satisfied
if the support of p(β, h | A) bounds h and β  β from above, and condition 3 is
satisfied if this support includes the point (β ∗ , h∗ ).

   Given further regularity conditions, the posterior distribution, appropriately
scaled, converges in distribution to a normal distribution as sample size T increases.
The regularity conditions in the following result, due to Chen (1985), are simi-
lar to typical conditions for the asymptotic sampling-theoretic distribution of the
maximum likelihood estimator; for example, see Amemiya (1985), Theorem 4.2.4.
In fact, these regularity conditions can be weakened, to include cases involving
nonstationary time series in which the limiting sampling theoretic distributions of
maximum likelihood estimators are not normal; see Sweeting and Adekola (1987)
for one such development and Sims and Uhlig (1991) for a significant application
in time series econometrics.

   Theorem 3.4.3 Asymptotic Posterior Distribution for a Continuous Param-
eter Vector Suppose that for all T , log p(θ A | YT , A) is twice differentiable
for all θ A ∈ A and YT ∈ T . Denote LT (θ A ) = log p(θ A |       YT , A), LT (θ A ) =
                                                  
∂LT (θ A )/∂θ A and LT (θ A ) = ∂ LT (θ A )/∂θ A ∂θ A . Suppose that with probability 1
                                  2

there exists finite T ∗ such that

   1. For all T > T ∗ , LT (θ A ) has a strict local maximum at θ AT = θ ∗AT , at which
      point L (θ ∗AT ) = 0 and LT (θ ∗AT ) is a negative definite matrix.
   2. For all T > T ∗ , the largest eigenvalue σ 2T of the positive definite matrix
      T = −[LT (θ ∗AT )]−1 satisfies the condition limT →∞ σ 2T = 0.
   3. Given any ε > 0 there exists T (ε) and δ(ε) > 0 such that for all T > T (ε)
      and θ A ∈ {θ A : (θ A − θ ∗AT ) (θ A − θ ∗AT ) < δ(ε)},

                       Ik − B(ε) ≤ LT (θ A )[LT (θ ∗A )]−1 ≤ Ik + B(ε)
96                                                          TOPICS IN BAYESIAN INFERENCE


        where B(ε) is a positive semidefinite matrix whose largest eigenvalue tends
        to zero as ε → 0.
     4. There exists a point θ ∗A ∈ A such that for any open neighborhood N (θ ∗A )
        of θ ∗A
                              lim P [
                                     θ A ∈ N (θ ∗A ) | 
                                                       YT , A] = 1.
                             T →∞

                             −1/2                                   −1/2    −1/2
    For all T > T ∗ , let T      be any kA × kA matrix such that (T ) T      =
T , let 
  −1
          θ AT be the random vector corresponding to the pdf p(θ A | YT , A), and
    zT =  T ( 
            −1/2                        d
let             θ AT − θ ∗A ). Then 
                                     zT → N (0, IkA ).

     Proof: See Chen (1985).

    Condition 4 of this theorem is the conclusion of Theorem 3.4.2. Conditions 1,
2, and 3 are more primitive and are often easier to verify; see Exercises 3.4.1(c)
and 3.4.2(c). Theorem 3.4.3 does not play as vital a role in Bayesian analysis as
do central limit theorems in non-Bayesian approaches. In non-Bayesian approaches
central limit theorems provide the basis for approximate inference when, as is nearly
always the case, the relevant exact sampling-theoretic distributions are unknown.
In Bayesian analysis, the exact posterior distribution is known, in principle, in any
complete model. Chapter 4 shows how posterior simulators can be used to reveal
the posterior distribution. Theorem 3.4.3 provides the conditions under which this
distribution will be approximately normal, and Theorem 3.4.2 provides an interpre-
tation of the unobservables  θ A on which the support of the posterior distribution
is concentrated.

Exercise 3.4.1 Asymptotic Analysis of the Exponential Observables Distribu-
tion In an investigator’s model A,         yt is i.i.d. and p(yt | θ, A) = θ exp(−θy)
I(0,∞) (y). In the data-generating process D,                       yt > 0 | D) = 1, and
                                                    yt is i.i.d., P (
E( yt | D) = µ < ∞. The investigator undertakes Bayesian inference using an
i.i.d sample  YT = {yt (t = 1, . . . , T )} drawn from a population with density
p(y | D).

     (a) Show that T −1 log p( 
                                            a.s.
                                 YT | θ , A) → (θ ; A), and θ ∗ = arg maxθ (θ; A) =
           −1
         µ .
     (b) Provide further conditions sufficient for θ ∗ to be the pseudotrue value of θ.
     (c) Show that given the conditions in (b), conditions 1, 2, and 3 of Theorem
         3.4.3 are also satisfied.

Exercise 3.4.2 Asymptotic Analysis of Omitted Covariates An investigator’s
model A for observables is the normal linear regression model

                           yt = β         εt ∼ N (0, h−1 ).
                                                   i.i.d.
                                  xt +
                                       εt , 
THE LIKELIHOOD PRINCIPLE                                                             97


                                           xt + δ 
                                                                    i.i.d.
In the data-generating process D, yt = γ        zt + ηt , ηt ∼ N (0, j −1 ) and
                                    
                           
                           X   
                               X X Z   a.s. XX XZ
                     T −1              →                    = Q∗
                              
                            ZX ZZ            ZX ZZ

where Q∗ is positive definite.

  (a) Show that

               T −1 log p( 
                           YT | β, h, 
                                           a.s.
                                      X,A) → (β, h; γ , δ, j, Q∗ , A).

      Find arg maxβ,h (β, h; γ , δ, j, Q∗ , A).
  (b) Provide further conditions sufficient for (β ∗ , h∗ ) to be the pseudotrue value
      of (β, h).
  (c) Show that given the conditions in (b), conditions 1, 2, and 3 of Theorem
      3.4.3 are also satisfied.


3.5 THE LIKELIHOOD PRINCIPLE

Suppose ω = g(θ A ). Then the posterior moment E[g(θ A ) | yo , A] can be expressed
                                            
      E[ω | yo , A] = E[g(θ A ) | yo , A] =   g(θ A )p(θ A | yo , A) dν(θ A )
                                                    A
                           
                                g(θ A )L(θ A ; y , A)p(θ A | A) dν(θ A )
                                               o
                      =        
                               A
                                                                         .
                                 A
                                   L(θ A ; yo , A)p(θ A | A) dν(θ A )

Consequently, in forming posterior moments, we never have recourse to the data
beyond L(θ A ; yo , A). All information in the data about g(θ A ) is conveyed through
the likelihood function. This result is a consequence of posterior conditioning. It can
also be obtained from a different set of first principles, developed by Barnard (1949)
and Fisher (1956) and fully exposited by Birnbaum (1962). Berger and Wolpert
(1988) provide a thorough exposition of the topic and Poirier (1988) provides an
introduction written specifically for economists.
   The likelihood principle, formally defined below, states that if two data-generat-
ing mechanisms lead to the same likelihood function, then they convey exactly the
same evidence about the unknown parameters. This is not a self-evident assertion,
especially in the context of non-Bayesian statistics. The following example, which
is generalized at the end of this section, illustrates this point.

Example 3.5.1 Stopping Rules from Bernoulli Trials. Consider two coin-flip-
ping experiments involving independent flips of a coin for which P (heads) = θ .
98                                                                     TOPICS IN BAYESIAN INFERENCE


Let yt = 1 if a head occurs in trial t and yt = 0 if a tail occurs. In experiment 1 the
coin is flipped T times. The number of heads, hT , is a sufficient statistic because

                                      
                                      T
          p(y1 , . . . , yT | θ) =          θ yt (1 − θ)(1−yt ) = θ hT (1 − θ)(T −hT ) .
                                      t=1


(The support of this distribution is all possible {yt }Tt=1 .) The distribution of hT itself
is binomial:
                                        
                                         T
                        p(hT | θ) =          θ hT (1 − θ)(T −hT ) .
                                         hT

In experiment 2 the coin is flipped until m heads have been observed. The total
number of flips, Tm , is a sufficient statistic because

                                      
                                      Tm
          p(y1 , . . . , yTm | θ) =         θ yt (1 − θ )(1−yt ) = θ m (1 − θ)(Tm −m) .
                                      t=1

                                                                                   s
(The support of this distribution is all possible {yt }st=1 for which                  t=1 yt = m and
ys = 1.) The distribution of Tm itself is negative binomial:
                                                    
                                               Tm − 1 m
                         p(Tm | θ) =                  θ (1 − θ )(Tm −m) .
                                                m−1

Suppose that the number of heads in the two experiments turns out to be the same
(hT = m) and the number of tails also turns out to be the same (T − hT = Tm − m).
The likelihood principle asserts that in this case the conclusions about θ must be
the same in the two experiments.

   The formal development here will assert two basic principles, the weak suffi-
ciency principle and the weak conditionality principle, and then show that the two
together are equivalent to the likelihood principle. We may accept or reject either
of the two basic principles, but if we accept them both, then we also accept the
likelihood principle. If we reject the likelihood principle, then we also reject the
weak sufficiency principle, the weak conditionality principle, or both. The formal
development begins with two definitions.

     Definition 3.5.1     An experiment is characterized by the triplet

                                  E = {y, θ A , p(y | θ A , A)}.

   Definition 3.5.2 The evidence about θ A arising from E and the realization
y = yo , denoted Ev(E, yo ), is any inference, conclusion, or report concerning θ A
based on E and y = yo .
THE LIKELIHOOD PRINCIPLE                                                               99

   Examples of evidence include point estimates, hypothesis tests, posterior distri-
butions, and general discussions at the ends of scientific papers using data.

    Definition 3.5.3 Weak Sufficiency Principle Suppose that s(y; A) is a suf-
ficient statistic in the experiment E = {y, θ A , p(y | θ A , A)}. Let two runs of the
experiment result in realizations yo1 and yo2 , respectively, and suppose s(yo1 ; A) =
s(yo2 ; A). Then Ev(E, yo1 ) = Ev(E, yo2 ).

   The reasonableness of the weak sufficiency principle is inherent in the ex post
formulation of sufficiency (2.29), which, we have seen, is logically equivalent to
the ex ante definition (2.28). The development of the weak conditionality principle
is based on the concept of a mixed experiment.

   Definition 3.5.4    Given two experiments

                       Ej = {yj , θ A , p(yj | θ A , Aj )}(j = 1, 2)

involving the same parameter vector θ A , a mixed experiment, based on E1 and
E2 , is E∗ = [y∗ , θ A , p(j, yj | θ A , A)] where the random vector y∗ = (j, yj ), A =
(A1 , A2 ), and p(j, yj | θ A , A) = .5p(yj | θ A , Aj ).

   Thus in a mixed experiment p(j | θ A , A) = .5. Which experiment is actually
conducted does not depend on θ A .

   Definition 3.5.5 Weak Conditionality Principle. Consider two experiments,
Ej = {yj , θ A , p(yj | θ A , Aj )}(j = 1, 2), as well as the mixed experiment E∗ =
[y∗ , θ A , p(j, yj | θ A , A)]. Then Ev[E∗ , (j, yj )] = Ev(Ej , yj ).

Example 3.5.2 Assessing the Quality of a Scientific Paper The editor of a
scientific journal wishes to learn about the quality, θ A , of a scientific paper. He
can send the paper to either referee A or referee B, each of whom has expertise in
different areas relevant to the paper. The editor may decide to send the paper to
A, to send it to B, or to flip a coin and send it to A if the coin is heads and to B
if it is tails. The weak conditionality principle asserts that once the report from the
known referee is in hand, the editor’s findings about the quality of the scientific
paper will be the same whether he chose the referee deliberately or flipped a coin.

    Definition 3.5.6 Likelihood Principle. Consider the two experiments Ej =
[yj , θ A , p(yj | θ A , Aj )](j = 1, 2). Suppose that for the particular realizations yo1
and yo2 , the respective likelihood functions satisfy

                           L(θ A ; yo1 , A1 ) ∝ L(θ A ; yo2 , A2 ).

Then Ev(E1 , yo1 ) = Ev(E2 , yo2 ).
100                                                             TOPICS IN BAYESIAN INFERENCE


   Theorem 3.5.1 Equivalence of the Likelihood Principle, and the Weak Suffi-
ciency and Weak Conditionality Principles The weak sufficiency principle and
the weak conditionality principle are together equivalent to the likelihood principle.

    Proof: Assume the likelihood principle. The antecedents of the weak sufficiency
principle are that s(y; A) is a sufficient statistic in the experiment E = [y, θ A , p(y |
θ A , A)] and that s(yo1 ; A) = s(yo2 ; A). By the factorization criterion

              L(θ A ; yoj , A) = p[s(yoj , A) | θ A , A]r(yoj ; A) (j = 1, 2).

Hence L(θ A ; yo1 , A) ∝ L(θ A ; yo2 , A), and by the likelihood principle Ev(E, yo1 ) =
Ev(E, yo2 ), thus establishing the weak sufficiency principle.
   The mixed experiment E∗ = [(j, yj ), θ A , p(j, yj | θ A , A)] has likelihood func-
tion
              L(θ A ; j o , yojo , A) ∝ p(j o , yojo | θ A , A)
                                 = .5p(yojo | θ A , Aj o ) ∝ L(θ A ; yojo , Aj o ).

Hence Ev[E∗ , (j, yj )] = Ev(Ej , yj ), thus establishing the weak conditionality
principle.
    Taking up the converse, suppose that for the particular realizations yo1 and
y2 , the likelihood functions from the two experiments satisfy L(θ A ; yo1 , A1 ) ∝
 o

L(θ A ; yo2 , A2 ). The proof proceeds by creating identical sufficient statistics based
on a mixed experiment employing the weak conditionality principle; the weak
sufficiency principle then gives the result:

   1. Define the mixed experiment E∗ as in the weak conditionality principle,
      from which we know Ev[E∗ , (j, yj )] = Ev[Ej , yj ]. Let yo1 and yo2 be the
      two realizations in the antecedent of the likelihood principle.
   2. For the mixed experiment E∗ with random outcomes (j, yj ), define the
      statistic
                                 
                                   (1, yo1 ) if j = 2 and y2 = yo2
                     Q(j, yj ) =                                     .
                                   (j, yj ) otherwise

      Thus the outcomes (1, yo1 ) and (2, yo2 ) result in the same values of Q. [The
      motivation in this construction is to deliberately blur the outcomes (1, yo1 )
      and (2, yo2 ) and then show that we lose nothing.]
   3. Note that Q is sufficient for θ A from the definition (2.28):

                                                1 if (j, yj ) = Q
               p[(j, yj ) | Q = (1, yo1 )] =                     ;
                                                0 otherwise
THE LIKELIHOOD PRINCIPLE                                                                   101

                                                    .5p(yo1 | θ A , A1 )       c
               p[(1, yo1 ) | Q = (1, yo1 )] =       2                      =     ;
                                                  .5 j =1 p(yj | θ A , Aj )
                                                              o               c+1
                                                              1
                           p[(2, yo2 ) | Q = (1, yo1 )] =        .
                                                             c+1

      (In the last two equations c = p(yo1 | θ A , A1 )/p(yo2 | θ A , A2 ). The ratio does
      not involve θ A , from the antecedent of the likelihood principle.)
   4. Since the sufficient statistic Q is the same regardless of whether the out-
      come is yo1 or yo2 , the weak sufficiency principle implies Ev(E1 , yo1 ) =
      Ev(E2 , y02 ).

   The likelihood principle extends the conclusion of Example 3.5.1, to sequential
experiments and stopping rules generally.

   Definition 3.5.7 A sequential experiment is an experiment in which the stop-
ping time T is random.

   Definition 3.5.8 A stopping rule in a sequential experiment is a sequence of
probabilities τ = {τ t }∞
                        t=0 in which τ 0 is constant and

     τ m = P (T = m | Ym , θ A , A) = P (T = m | Ym , A) = τ m (Ym ; A).

Note that the stopping probability may depend on the observables Ym , but not on
the unobservables θ A .

  Corollary 3.5.1 Stopping Rule Corollary of the Likelihood Principle In
a sequential experiment Ev[E, (T , YT )] depends on (T , YT ) only through
L(θ A ; YT , A). The likelihood principle implies that the stopping rule τ is irrelevant.

   Proof
                                     −1
                                    T
 p(T , YT | θ A , A) = (1 − τ 0 )         [1 − τ t (Yt ; A)]τ T (YT ; A)p(YT | θ A , A).
                                    t=1

Hence L(θ A ; T , YT , A) ∝ p(YT | θ A , A).

Exercise 3.5.1 The Likelihood Principle, Conditioning, and Non-Bayesian
Statistics (I) [From Berger and Wolpert (1988), Example 10, p 21.] Either of
two experiments, E1 or E2 , can be undertaken to learn about a parameter θ. In
each experiment a single random outcome y will be observed. The distribution of
y depends on θ in each experiment, as follows:
102                                                       TOPICS IN BAYESIAN INFERENCE




                                        Experiment A
                      P (y = 1 | θ )      P (y = 2 | θ)       P (y = 3 | θ )

          θ =0            .900                 .050               .050
          θ =1            .090                 .055               .855

                                        Experiment B
                      P (y = 1 | θ )      P (y = 2 | θ)       P (y = 3 | θ )

          θ =0            .260                 .730               .010
          θ =1            .026                 .803               .171

  (a) If you were able to choose which experiment to carry out, which one
      would you choose? Provide as much formal justification for your answer
      as you can.
  (b) Take the likelihood principle as given, and show that the outcome y =
      1 conveys the same evidence about θ regardless of which experiment is
      performed. The same is true for y = 2, and the same is true for y = 3.
  (c) Is there a logical conflict between your answers to (a) and (b)? Why or
      why not?
  (d) Consider a non-Bayesian (classical) test that accepts θ = 0 when y = 1 and
      decides θ = 1 otherwise. Show that this is a most powerful test, with error
      probabilities (of type I and type II, respectively) .10 and .09 in experiment
      A and .74 and .026 in experiment B. (Recall what “most powerful” means
      in this context; any other test has either a higher probability of type I error,
      or a higher probability of type II error, or both.)

Exercise 3.5.2 The Likelihood Principle, Conditioning, and Non-Bayesian
Statistics (II) [From Berger and Wolpert (1988), Example 1, p 5.] Suppose that
the random variables xt (t = 1, . . . , T ) are independent, and P (xt = θ − 1 | θ) =
P (xt = θ + 1 | θ ) = 12 .

  (a) Experiment 1 consists of collecting a sample of size T = 2. Show that a
      75% confidence interval of smallest size for θ is
                                    the point (x1 + x2 )/2 if x1 = x2
                    C(x1 , x2 ) =
                                    the point x1 − 1       if x1 = x2

      [Thus, if used repeatedly, C(x1 , x2 ) would contain θ with probability .75.]
      The evidence in experiment 1 is that C(x1 , x2 ) constitutes a 75% confidence
      interval for θ .
  (b) In the context of (a), suppose that you observe x1 = 2 and x2 = 4. Then the
      75% confidence interval in (a) is the point 3. Is this consistent with common
      sense about the reliability of the conclusion that θ = 3?
THE LIKELIHOOD PRINCIPLE                                                          103

  (c) In experiment 2 xt is drawn repeatedly, and the experiment concludes with
      the first occurrence of xt = x1 ; thus the size, T , of the collected sample is
      random. The evidence in experiment 2 is that θ = (x1 + xT )/2 is a 100%
      confidence interval for θ. Is the evidence from experiments 1 and 2 consistent
      with the likelihood principle? Provide a formal answer.
CHAPTER 4




      Posterior Simulation


Bayesian inference requires that we be able to access the posterior distribution
of the vector of interest ω in one or more models. In all except simple illus-
trative cases this cannot be done analytically. This chapter describes algorithms
for simulating a sequence {ω(m) } whose distribution is closely related to the dis-
tribution ω | (yo , A). The sequence {ω(1) , . . . , ω(M) } can be used to approximate
posterior moments of the form E[h(ω) | yo , A] and Bayes actions of the form

a = arg mina∈A E[L(a, ω) | yo , A] arbitrarily well: the larger is M, the better is the
approximation. Taken together, these algorithms are known generically as posterior
simulation methods. The simplest possible relation between {ω(m) } and p(ω | yo , A)
         i.i.d.
is ω(m) ∼ p(ω | yo , A). In this case it is possible to learn a great deal about the
posterior distribution of ω, as detailed in the next section. In most models it is not
known how to construct such a sequence. Fortunately there are more sophisticated
posterior simulators that typically can be used. One approach is to find a distribu-
tion that is similar to the posterior distribution, and from which i.i.d. drawings can
be made. It is possible to correct for the difference in the simulation and posterior
distributions, in such a way that posterior moments can be approximated arbitrarily
well. Section 4.2 makes clear the sense in which the simulation and posterior dis-
tributions must be similar, and details two kinds of corrections that can be made.
Section 4.4 takes up some variants on these methods that can greatly increase
the amount of information about the posterior distribution in a given number of
simulations.
    As the dimension of the space in which simulations are carried out becomes
large, it is often increasingly difficult to find a single distribution that is sufficiently
similar to the posterior distribution that this approach is practical. A different class
of simulation methods, known as Markov chain Monte Carlo (MCMC), constructs
sequences that are neither independent nor identically distributed, but converge in
distribution to the posterior distribution. These simulators are more sophisticated,
and they make the posterior distribution accessible in a very large set of economet-
ric and statistical models. Section 4.3 provides an informal introduction to these
Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.

                                                                                       105
106                                                              POSTERIOR SIMULATION


methods, with a treatment in greater depth in Section 4.5. Section 4.6 takes up
some combinations of these methods that widen the range of problems that can be
attacked successfully by MCMC methods. Section 4.7 discusses the evaluation of
the numerical accuracy of MCMC simulators.
   While our primary interest is in simulating the posterior distribution of a func-
tion of interest h(ω), the methods developed in this chapter can be used for any
distribution. For example, they can be used to explore the implications of a prior
distribution. To reflect this generality in the notation, this chapter takes the canon-
ical simulation problem to be that of learning about the distribution of ω, where
ω ∼ p(ω | θ , I ) and θ ∼ p(θ | I ), where I denotes the distribution of interest. In
this formulation θ ∈ , ω ∈ , p(θ | I ) is any density with respect to a measure
dν(θ), and p(ω | θ , I ) is any conditional density with respect to a measure dν(ω).


4.1 DIRECT SAMPLING

Suppose that from the probability density p(θ , ω | I ) it is possible to simulate
pairs of independent identically distributed (i.i.d.) drawings θ (m) ∼ p(θ | I ) and
ω(m) ∼ p(ω | θ (m) , I ). An example of such a density is the posterior density in
Example 2.3.3, the normal linear regression model with conjugate prior distribution.
In that example the corresponding posterior distribution is represented as
                                                                       −1
      s 2 h | (yo , X, A) ∼ χ 2 (ν),    β | (h, yo , X, A) ∼ N (β, h−1 H ).

The following result shows that it is possible to use the sequence {θ (m) } to approx-
imate several aspects of the distribution of ω, including moments.

   Theorem 4.1.1 Approximation of Distributions and Moments by Direct
Sampling Suppose that the sequence {θ (m) , ω(m) } is i.i.d., with θ (m) ∈ , ω(m) ∈
, θ (m) ∼ p(θ | I ), and ω(m) | θ (m) ∼ p(ω | θ (m) , I ). Let h :  → R1 and consider
several additional conditions:

   1. E[h(ω) | I ] = h.
   2. var[h(ω) | I ] = σ 2 .
   3. For given p ∈ (0, 1), there is a unique hp such that the statements

                     P [h(ω) ≤ hp | I ] ≥ p and P [h(ω) ≥ hp | I ] ≥ 1 − p

      are both true.
   4. The pdf p[h(ω)|I ] is continuous, and for the unique hp corresponding to p,
      p[h(ω) = hp | I ] > 0.

   Then
            i.i.d.
  (a) ω(m) ∼ p(ω | I ), regardless of whether any of conditions 1–4 are true.
DIRECT SAMPLING                                                                 107

                              (M)              M            (m) a.s.
  (b) Given condition 1, h          = M −1           m=1 h(ω    ) → h.
                                                    (M)       d
  (c) Given conditions 1 and 2, M 1/2 (h                − h) → N (0, σ ) and
                                                                       2


                                              
                                              M
                                                                (M) 2 a.s.
                         σ 2(M) = M −1
                                                 [h(ω(m) ) − h    ] → σ 2.
                                              m=1


       Let 
           h(M)
            p   be any real number such that

                                    
                                    M
                           M −1           I(−∞,h(M)
                                                 p ]
                                                     [h(ω(m) )] ≥ p and
                                    m=1

                                    
                                    M
                               −1
                           M              I[h(M)
                                              p ,∞)
                                                    [h(ω(m) )] ≥ 1 − p.
                                    m=1

      Then
  (d) Given condition 3, 
                              a.s.
                         h(M)
                          p   → hp .
  (e) Given conditions 3 and 4

                  M 1/2 (
                                          d
                         h(M)
                          p   − hp ) → N {0, p(1 − p)/p[h(ω) = hp | I ]2 }.

   Proof: Conclusion (a) is just a consequence of the definitions of conditional,
joint, and marginal probability. Conclusion (b) follows from the strong law of
large numbers [see Casella and Berger (2002), Theorem 5.5.9] and (c), from the
Lindeberg–Lévy central limit theorem (Casella and Berger 2002, Theorem 5.5.15).
Conclusion (d) is immediate from 6f.2(i) in Rao (1965) and (e), from 6f.2(ii) in
Rao (1965).

   In the approximation of any quantity, some assessment of the error is essential.
For the approximation of moments by direct sampling, the relevant assessment is
given by conclusion (c) in Theorem 4.1.1. Given conditions 1 and 2, the approxi-
         (M) ·
mation h     ∼ N (h, 
                     σ 2(M) /M) is valid for large M. In this case (
                                                                    σ 2(M) /M)1/2 is
                                                    (M)
known as the numerical standard error (NSE) of h .

Example 4.1.1 Direct Sampling in the Normal Linear Regression Model with
Conjugate Prior Distribution In the context of Example 2.3.3 suppose that the
vector of interest ω is the unobserved outcome y corresponding to a new experiment
in which x = x∗ ; thus ω | (x∗ , β, h, A) ∼ N (β  x∗ , h−1 ). If
                                               i.i.d.
                                     s 2 h(m) ∼ χ 2 (ν),
                           β (m) | h(m) ∼ N [β, (h(m) H)−1 ],
                      ω(m) | (β (m) , h(m) ) ∼ N (β (m) x∗ , h(m)−1 ),
108                                                                   POSTERIOR SIMULATION


           i.i.d.
then ω(m) ∼ p(ω | x∗ , yo , X, A), where β and H are as defined in (2.52) and s 2
and ν are as defined in (2.56).
   From the sample {ω(1) , . . . , ω(M) } we may approximate

             p = P (ω ≤ a | x∗ , yo , X, A) = E[I(−∞,a] (ω) | x∗ , yo , X, A]           (4.1)
                   
by p(M) = M −1 M      m=1 I(−∞,a] (ω
                                     (m)
                                         ). The approximate variance of this numerical
approximation to p is p(1 − p)/M, and this variance may in turn be approx-
imated by p(M) (1 − p(M) )/M. (For an improvement on this approximation, see
Exercise 4.4.1.)
   Suppose we were to estimate ω. If the loss function             is quadratic, then  ω=
E(ω | x∗ , yo , X, A) can be approximated by M −1 M       m=1 ω
                                                                   (m)
                                                                       . If the loss function
is L(ω, ω) = (1 − q)(  ω − ω)I(−∞,ω] (ω) + q(ω −   ω)I(ω,∞) (ω), then     ω is quantile
q of the ω | (x∗ , yo , X, A) distribution: P (ω ≤ ω | x∗ , yo , X, A) = q. The estimate

ω can be approximated by the corresponding quantile of {ω(m) }M         m=1 : the values ω
                                                                                           (m)
                                                            (m∗ )
will in general all be different, and we choose that ω            such that the fraction of
                                  ∗
ω(m) less than or equal to ω(m ) is at least q and the fraction of ω(m) greater than
                 ∗
or equal to ω(m ) is at least 1 − q.

   Theorem 4.1.1 can be used to solve Bayesian decision and estimation problems
for specific loss functions. If the loss function is quadratic (Definition 2.4.3) or
linear–exponential (Exercise 2.4.3), the Bayes action is a posterior moment and
conclusions (b) and (c) are relevant. If the loss function is linear–linear (Defini-
tion 2.4.4), then conclusions (d) and (e) are relevant. In general, however, Bayesian
decision problems need not reduce to posterior moments or quantiles. The follow-
ing result applies when the loss function L(a, ω) is a smooth function of the Bayes
action a.

    Theorem 4.1.2 Approximation of Bayes Actions by Direct Sampling Sup-
pose that the sequence {θ (m) , ω(m) } is i.i.d., with θ (m) ∼ p(θ | I ) and ω(m) |
(θ (m) , I ) ∼ p(ω | θ (m) , I ). Let L(a, ω) ≥ 0 be a loss function defined on A × ,
where A is an open subset of Rm . Suppose that the risk function
                                 
                    R(a) =            L(a, ω)p(θ | I )p(ω | θ , I ) dθ dω
                                 

has a strict global minimum at 
                               a ∈ A ⊆ Rm . Consider several additional conditions,
for a suitably defined open neighborhood of a, N (
                                                   a ):
            
   1. M −1 M   m=1 L(a, ω
                          (m)
                              ) converges uniformly to R(a) for all a ∈ N (
                                                                           a ), almost
      surely.
   2. ∂L(a, ω)/∂a exists and is a continuous function of a, for all ω ∈  and all
      a ∈ N ( a ).
   3. ∂ 2 L(a, ω)/∂a ∂a exists and is a continuous function of a, for all ω ∈  and
      all a ∈ N ( a).
DIRECT SAMPLING                                                                           109

   4. B = var[∂L(a, ω)/∂a|a=a | I ] exists and is finite.
   5. H = E[∂ 2 L(a, ω)/∂a ∂a |a=a | I ] exists and is finite and nonsingular.
   6. For any ε > 0, there exists Mε such that
                                                     
                     P [ sup ∂ 3 L(a, ω)/∂ai ∂aj ∂ak  < Mε | I ] ≥ 1 − ε
                        a∈N (
                             a)


      for all i, j, k = 1, . . . , m.
                                               M
Let AM be the set of all roots of M −1          m=1 ∂L(a, ω
                                                              (m)
                                                                    )/∂a = 0. Then

   (a) Given conditions 1 and 2, for any ε > 0

                                             a) (a − 
                            lim P [ inf (a −         a) > ε | I ] = 0.                  (4.2)
                           M→∞          a∈AM

                                                                                     p
  (b) Given conditions 1–6, if 
                               aM is any element of AM such that 
                                                                 aM → 
                                                                      a, then
                                  d
         (i) M 1/2 (    a ) → N (0, H−1 BH−1 ).
                    aM − 
                                                                         p
        (ii) M −1 M  m=1 ∂L(a, ω
                                 (m)
                                     )/∂a|a=aM · ∂L(a, ω(m) )/∂a |a=aM → B.
                                                     p
       (iii) M −1 M       2
                     m=1 ∂ L(a, ω
                                  (m)
                                      )/∂a ∂a |a=aM → H.

   Proof: Result (a) follows from Amemiya (1985), Theorem 4.1.2. Result
(b) follows from Amemiya (1985), Theorems 4.1.3 and 4.1.4.

   Theorem 4.1.2 is widely and readily applicable. The conditions can be verified
directly in most cases. Beyond the posterior simulator the computations require
coding of the loss function and its first two derivatives. Once this is accomplished,
conventional and widely available optimization software can be applied directly to
                                                                                   p
the function RM (a) = M −1 M     m=1 L(a, ω
                                            (m)
                                                ) of a. We can show that RM ( aM ) →
RM (a), and in fact [see Shao (1989)] RM (   aM ) − RM (a ) = O(M −1 log – log M).
The caveats generally applicable to numerical optimization are relevant here. Unless
L(a, ω) is known to be concave, a local minimum need not be a global one. The
result is the posterior simulation approximation  aM of the Bayes action 
                                                                          a. The usual
advice, to iterate to a minimum from alternative starting values, applies here, but
in posterior simulation we also have the alternative of solving the problem with a
larger sample size M. Result (b) provides numerical standard errors for assessing
the accuracy of the approximation that are valid for large M.

Exercise 4.1.1 The Inverse CDF Method This method applies, in principle, to
any random variable for which it is possible to compute the inverse of the cumu-
lative distribution. It is generally limited to univariate distributions. Its efficiency,
relative to other methods described in the next section, depends on the time required
to compute the inverse cdf.
110                                                                      POSTERIOR SIMULATION


  (a) Suppose that a random variable has cdf F (x) and F (x) = p if and only
      if x = F −1 (p). Show that if u is uniformly distributed on [0, 1], then
      x = F −1 (u) has cdf F (x).
  (b) How would you use the inverse cdf method to simulate an exponentially
      distributed random variable with mean µ?

Exercise 4.1.2 Simulation from the Bivariate Normal Distribution                    Suppose
that
                             
                               (x 2 + y 2 )1/2 if x 2 + y 2 < 1;
                  f (x, y) =
                               1 if x 2 + y 2 ≥ 1.

Furthermore, (x, y) ∼ N (µ, ); µ and              are known. In what follows
                             
                               µ1                      σ 11 σ 12
                        µ=         ,               =             ,
                               µ2                      σ 12 σ 22

and

                            ε(m)
                             j (j = 1, 2; m = 1, 2, . . .)

are mutually independent, standard normal random variables.

  (a) Show that E[f (x, y)] and var[f (x, y)] are finite.
  (b) Consider the simulation
                               1/2
              x (m) = µ1 + σ 11 ε(m)
                                 1 ,

              y (m) = µ2 + (σ 12 /σ 11 )(x (m) − µ1 ) + (σ 22 − σ 212 /σ 11 )1/2 ε(m)
                                                                                  2 .

       Show that
                                    
                                    M
                                                         a.s.
                               −1
                           M              f (x (m) , y (m) ) → E[f (x, y)].
                                    m=1

   (For continuation, see Exercise 4.5.1.)


4.2 ACCEPTANCE AND IMPORTANCE SAMPLING

Suppose that we cannot derive a method for drawing i.i.d. random vectors θ (m)
directly from the density p(θ | I ) but we can simulate i.i.d. drawings from a density
p(θ | S) that is similar to p(θ | I ). Then it may be possible to learn about many
aspects of the vector of interest ω, but the sense in which p(θ | S) is similar to
p(θ | I ) is critical. We consider two approaches here: acceptance sampling and
importance sampling. Section 4.3.2 discusses a closely related third approach, the
independence Metropolis chain.
ACCEPTANCE AND IMPORTANCE SAMPLING                                                         111

4.2.1 Acceptance Sampling
Acceptance sampling may be used to learn about any distribution of θ with generic
density p(θ | I ), given a source density p(θ | S) from which i.i.d. random variables
can be drawn. For the methods discussed in this section, it is necessary that we
be able to evaluate an arbitrary kernel k(θ | S) of p(θ | S), and an arbitrary kernel
k(θ | I ) of p(θ | I ).
    Figure 4.1 provides the intuition of acceptance sampling. The heavy solid curve
represents the density of interest p(θ | I ) and the lighter solid curve, the source
density p(θ | S). The ratio p(θ | I )/p(θ | S) is bounded above by a constant a. In
Figure 4.1, p(1.16 | I )/p(1.16 | S) = a = 1.86, and the dotted curve is a · p(θ | S).
The idea is to draw θ ∗ from p(θ | S), and accept the draw with probability p(θ ∗ |
I )/[a · p(θ ∗ | S)]. For example, if θ ∗ = 0, then the draw is accepted with probability
.269, whereas if θ ∗ = 1.16, then the draw is accepted with probability 1. The accepted
values in fact simulate i.i.d. drawings from the density of interest p(θ | I ).

    Theorem 4.2.1 Acceptance Sampling Let k(θ | I ) = cI · p(θ | I ) be a kernel
of the density of interest p(θ | I ), and let k(θ | S) = cS · p(θ | S) be a kernel of
the source density p(θ | S). Let r = supθ ∈ k(θ | I )/k(θ | S) < ∞. Suppose that
θ (m) is drawn as follows:

   1. Draw u uniform on [0, 1].
   2. Draw θ ∗ ∼ p(θ | S).

      0.5
                                                                          p(q | I)
     0.45                                                                 p(q | S)
                                                                          a*p(q | S)
      0.4

     0.35

      0.3

     0.25

      0.2

     0.15

      0.1

     0.05

        0
         −6          −4          −2           0            2          4                6
                                              q

                             Figure 4.1. Acceptance sampling.
112                                                                 POSTERIOR SIMULATION


   3. If u > k(θ ∗ | I )/[r · k(θ ∗ | S)], then return to step 1.
   4. Set θ (m) = θ ∗ .
   If the draws in steps 1 and 2 are independent, then θ (m) ∼ p(θ | I ).

  Proof: Let ∗ denote the support of p(θ | S); r < ∞ implies  ⊆ ∗ . The
unconditional probability of proceeding from step 3 to step 4 is
                
                   {k(θ | I )/[rk(θ | S)]}p(θ | S) dν(θ ) = cI /rcS . (4.3)
                  ∗

Let A be any subset of . The unconditional probability of proceeding from step
3 to step 4 with θ ∈ A is
                                                 
          {k(θ | I )/[rk(θ | S)]}p(θ | S) dν(θ) =   k(θ | I ) dν(θ)/rcS . (4.4)
        A                                             A

The probability that θ ∈ A, conditional on proceeding from step 3 to step 4, is the
ratio of (4.4) to (4.3), which is A k(θ | I ) dν(θ)/cI = A p(θ | I ) dν(θ) = P (θ ∈
A | I ).

    The proof of Theorem 4.2.1 provides the key to the efficiency of this algo-
rithm. Regardless of the choices of kernels, the unconditional probability in (4.3)
is cI /rcS = infθ∈ p(θ | S)/p(θ | I ) = a −1 . If we wish to generate M draws of θ
using acceptance sampling, the expected number of times we will have to draw u,
draw θ ∗ , and compute k(θ ∗ | I )/[r · k(θ ∗ | S)] is M · supθ ∈ p(θ | I )/p(θ | S) =
M · a. The computational efficiency of the algorithm is driven by those θ for which
p(θ | S) has the most severe undersampling relative to p(θ | I ). In most applica-
tions the time-consuming part of the algorithm is the evaluation of the kernels
k(θ | S) and k(θ | I ), especially the latter. [If p(θ | I ) is a posterior density, then
evaluation of k(θ | I ) entails computing the likelihood function.] In such cases
a = supθ ∈ k(θ | I )/k(θ | S) is indeed the relevant measure of inefficiency.
    The retained values of θ that constitute {θ (m) } are independent, and all are drawn
from the distribution with density p(θ | I ). If we also draw ω(m) ∼ p(ω | θ (m) , I ),
then Theorem 4.1.1 applies directly to the sequence {θ (m) , ω(m) }.

Example 4.2.1 Restricted Normal Linear Regression Model Suppose that the
coefficient vector β in the normal linear regression model is restricted to a set
S ⊆ Rk . For example, the signs of coefficients might be restricted, or functional
form restrictions might limit the range of β. To consider a simple case, suppose
that precision h is fixed and

                   p(β | A) ∝ exp[−(β − β) H(β − β)/2]IS (β).

Then

                p(β | yo , X, A) ∝ exp[−(β − β) H(β − β)/2]IS (β)
ACCEPTANCE AND IMPORTANCE SAMPLING                                                 113

with H as defined in (2.19) and β in (2.20). If the source distribution for acceptance
sampling is N (β, H), then a draw is accepted if β ∈ S and rejected if β ∈    / S. The
fraction accepted is the posterior probability that β ∈ S when the prior distribution
for β is N (β, H−1 ), and there are no restrictions. For more details and applications,
see Geweke (1986), which develops this method in the context of the improper prior
distribution of Exercise 3.2.1.
   The lower the acceptance probability, the lower is the computational efficiency
of the method. In fact, the acceptance probability can be so low that the algorithm
effectively halts computations. This is most likely to be a problem when k is large
and acceptance sampling is incorporated in the algorithms described in Section 4.3.
In general it is never wise simply to assume that inequality constraints can be
handled effectively by acceptance sampling. In specific cases superior alternatives
are available. Once such alternative is developed in Section 5.3, building on the
algorithm in the next example.


Example 4.2.2 Acceptance Sampling for the Truncated Univariate Normal
Distribution Tailoring the source density to the density of interest can be criti-
cal to the effectiveness of acceptance sampling. A problem that arises frequently
is that of sampling from a standard normal distribution truncated to the interval
(a, b). If the source density is normal, then the acceptance probability is (b) −
  (a), which can be quite small. The inverse cdf method [see Exercise 4.1.1(a)]
involves finding the root of a nonlinear equation that itself requires evaluation
of an integral. Moreover, for sufficiently large yet finite values of a, any numer-
ical integration routine returns −1 (a) = 1, thus making it impossible to draw
from the normal distribution truncated to (a, ∞). An efficient algorithm described
in Geweke (1991) applies acceptance sampling with the source distribution as
follows:

             Characteristics of the Truncation                    Source Distribution

a<0<b<∞                 a ≥ −t1 and b ≤ t1                           Uniform(a, b)
                         a < −t1 or b > t1                              N (0, 1)
0≤a<b<∞                   f (a)/f (b) ≤ t2                           Uniform(a, b)
                          f (a)/f (b) > t2          a ≤ t3             |N (0, 1)|
                                                    a > t3           a + exp(a −1 )
    b=∞                        a ≤ t4                                   N (0, 1)
                               a > t4                                a + exp(a −1 )

where f (x) = exp(−x 2 /2), and the constants tj are part of the design of the algo-
rithm. The cases −∞ < a < b < 0 and a = −∞ require only changes in sign.
Geweke (1991) suggests t1 = .375, t2 = 2.18, t3 = .725, and t4 = .45 and reports
that the method requires from one-sixth to one-half the time of the inverse cdf
method, depending on the configuration of a and b.
114                                                                        POSTERIOR SIMULATION


4.2.2 Importance Sampling
Rather than accept only a fraction of the draws from the source density, it is possible
to retain all of them, and consistently approximate E[h(ω) | I ] by appropriately
weighting the draws. The probability density function of the source distribution
is then called the importance sampling density, a term due to Hammersly and
Handscomb (1964), who were among the first to propose the method. It appears
to have been introduced to the econometrics literature by Kloek and van Dijk
(1978). As with acceptance sampling, denote the source density by p(θ | S) and an
arbitrary kernel of the source density by k(θ | S) = cS · p(θ | S) for any cS > 0.
Denote an arbitrary kernel of the density of interest by k(θ | I ) = cI · p(θ | I ) for
any cI > 0. The following result is similar to Geweke (1989a), Theorem 2.

    Theorem 4.2.2 Approximation of Moments by Importance Sampling Sup-
pose that the sequence {θ (m) , ω(m) } is independent and identically distributed, with
θ (m) ∼ p(θ | S) and ω(m) ∼ p(ω | θ (m) , I ). Define the weighting function w(θ) =
k(θ | I )/k(θ | S), let h :  → R1 , and consider several additional conditions:

   1. E[h(ω) | I ] = h exists.
   2. var[h(ω) | I ] = σ 2 exists.
   3. The support of p(θ | S) includes .
   4. w(θ) is bounded above on .

   Then

  (a) Given conditions 1 and 3
                                         M
                               (M)
                                                 w(θ (m) )h(ω(m) ) a.s.
                           h         =         m=1
                                                M                 → h.                   (4.5)
                                                    w(θ (m) )
                                                      m=1

  (b) Given conditions 1–4
                                                (M)         d
                                     M 1/2 (h         − h) → N (0, τ 2 )

       and
                                   M                           (M)
                               M               [h(ω(m) ) − h ]2 w(θ (m) )2 a.s.
                   
                   τ2(M)
                           =             m=1
                                               M              2          → τ 2.         (4.6)
                                                           (m)
                                                       w(θ )
                                                      m=1


   Proof: The sequence {ω(m) } is i.i.d., and from conditions 1 and 3,
                           
                                k(θ | I )                   cI
             E[w(θ) | S] =                 p(θ | S) dν(θ) =    = w.
                               k(θ | S)                    cS
ACCEPTANCE AND IMPORTANCE SAMPLING                                                                 115

By the strong law of large numbers, we obtain

                                                       
                                                       M
                                                                         a.s.
                             w(M) = M −1                      w(θ (m) ) → w.                      (4.7)
                                                       m=1


The sequence {w(θ (m) ), h(ω(m) )} is also i.i.d., and

                                              
     E[w(θ )h(ω) | S] =              w(θ)              h(ω)p(ω | θ , I ) dν(ω) p(θ | S) dν(θ)
                                                  
                                            
                         = (cI /cS )                    h(ω)p(ω | θ , I )p(θ | I ) dν(ω) dν(θ)
                                                  

                         = (cI /cS )E[h(ω) | I ] = w · h.

By the strong law of large numbers


                         (M)                
                                            M
                                                                                a.s.
                    wh         = M −1                  w(θ (m) )h(ω(m) ) → w · h.                 (4.8)
                                            m=1


Since the fraction in (4.5) is the ratio of the left side of (4.8) to the left side of
(4.7), (a) is established.
   Turning to (b), first note that
                                          
E[w(θ )2 h(ω)2 | S] =        w(θ)2              h(ω)2 p(ω | θ, I ) dν(ω) p(θ | S) dν(θ )
                                           
                                          
                                k(θ | I )
                    =     w(θ)               h(ω)2 p(ω | θ, I ) dν(ω) p(θ | S) dν(θ )
                               k(θ | S) 
                                         
                    = (cI /cS ) w(θ)         h(ω)2 p(ω | θ , I ) dν(ω) p(θ | I ) dν(θ ).
                                                         
                                                                                                  (4.9)
Condition 4 bounds (4.9) by

                               (cI /cS )E[h(ω)2 | I ] sup w(θ)                                   (4.10)
                                                                  θ ∈


and from condition 2 (4.10) is finite. Taking the specific case h(ω) = 1, it follows
that E[w(θ )2 | S] < ∞ as well. Hence
                                                   
                                                         w(θ)
                                 V = var                        |S
                                                       w(θ)h(ω)
116                                                                   POSTERIOR SIMULATION


is finite, and excepting the trivial case in which h(ω) is almost surely constant, V
is nonsingular. By the Lindeberg–Lévy central limit theorem
                                             
                                     w(M)      w   d
                       M 1/2            (M) −      → N (0, V).
                                     wh       wh

Utilizing the asymptotic (in M) expansion known as the delta method (Casella and
Berger 2002, Section 5.5.4; Greene 2003, Section D.2.7), since
          (M)                  (M)
        wh     wh wh − wh wh · (w(M) − w)
             =   +       −                + op (M −1/2 ),
        w(M)   w     w           w2

we have
                                           (M)
                                                   
                                         wh          d
                          M    1/2
                                           (M)
                                                − h → N (0, τ 2 ),
                                         w

where

          τ 2 = w−2 {var[w(θ )h(ω) | S] − 2hcov[w(θ )h(ω), w(θ) | S]
                   2
                + h var[w(θ ) | S]} = w−2 var{[w(θ )h(ω) − hw(θ )] | S}.

This is consistently approximated by
                         M                                (M)
                  M −1               [w(θ (m) )h(ω(m) ) − h w(θ (m) )]2
                               m=1
                                          M                2          ,
                                     M −1         w(θ (m) )
                                               m=1

which is equivalent to (4.6).

    An apparent attraction of importance sampling, relative to acceptance sampling,
is that it is formally easier to apply in approximating moments. It is necessary to
establish condition 1 of Theorem 4.2.2 regardless of the method of evaluation, and
whether condition 3 holds should be immediately apparent. By contrast, acceptance
sampling requires that the upper bound of the weight function w(θ) be determined
before a simulation consistent approximation to a moment can be constructed. The
analog of this condition in Theorem 4.2.2 is condition 4, but note that this condition
is needed only for the evaluation of numerical accuracy. Furthermore, if w(θ ) has a
known bound, then condition 4 holds, but for condition 4 to hold it is not necessary
to know the bound. As a practical matter, however, if condition 4 does not hold,
then convergence is typically quite slow, and the inability to evaluate numerical
accuracy renders numerical approximations unreliable. Thus a practical advantage
of importance sampling, as opposed to acceptance sampling, is that the former is
ACCEPTANCE AND IMPORTANCE SAMPLING                                                   117

practical if we establish the existence of an upper bound for w(θ), whereas in the
latter we must evaluate this bound.

Example 4.2.3 Reweighting to a Different Prior Distribution Suppose that we
have available an i.i.d. sample from a posterior density p(θ A | yo , A1 ), correspond-
ing to model A1 with prior density p(θ A | A1 ). Now suppose that we wish to
investigate a second model A2 with the same observables density but prior density
p(θ A | A2 ). If p(θ A | A2 )/p(θ A | A1 ) is bounded above on A , then p(θ A | yo , A1 )
is an importance sampling density for p(θ A | yo , A2 ) with conditions 3 and 4 of
Theorem 4.2.2 satisfied. The weight function is p(θ A | A2 )/p(θ A | A1 ). This pro-
cedure is sometimes called “reweighting of the posterior simulation sample.” See
Section 8.4 for further discussion.

Example 4.2.4 A Hybrid Acceptance and Importance Sampling Algorithm
Given density of interest p(θ | I ) and source density p(θ | S), suppose that it is
known that p(θ | I )/p(θ | S) is bounded on  but the bound is unknown. Define
the importance sampling density p(θ | a, S) with kernel
                             
                                p(θ | I ) if p(θ | I )/p(θ | S) ≤ a
               k(θ | a, S) =                                        .
                               p(θ | S) if p(θ | I )/p(θ | S) > a

Applying Theorem 4.2.1 to the density of interest kernel k(θ | a, S) and source den-
sity p(θ | S), we see that supθ ∈ [k(θ | a, S)/p(θ | S)] ≤ max(a, 1), and therefore
i.i.d. draws from p(θ | a, S) are possible. Importance sampling (Theorem 4.2.2)
applies to the density of interest p(θ | I ) and importance sampling density p(θ |
a, S). Conditions 1–4 of Theorem 4.2.2 apply to p(θ | a, S) to the extent that
they apply to p(θ | S). This strategy can be useful if generating the vector ω is
expensive relative to drawing θ from p(θ | S), and deciding to accept, reject, or
weight the draws. We reject many draws θ (without drawing ω), which would have
had small weights with the importance sampling density p(θ | S) (but nonetheless
would have required drawing ω).

    The ratio σ 2 /τ 2 of the variance of a moment estimate based on hypothetical
i.i.d. draws to the limiting variance of the estimate based on the importance sample
is known as the relative numerical efficiency (RNE) of the simulator. If we can
sample directly from the density p(θ | I )—equivalently, if k(θ | S) ∝ k(θ | I ), or
the weight function w(θ) is constant—then the RNE is 1.0. It is generally lower
for importance sampling. The RNE is inversely proportional to the number of
iterations of the posterior simulator required to achieve a given NSE. The NSE of
the approximation is roughly proportional to σ · (M · RNE)−1/2 .

   Theorem 4.2.3 Approximation of Bayes Actions by Importance Sampling
Suppose that the sequence {θ (m) , ω(m) } is independent and identically distributed,
with θ (m) ∼ p(θ | S) and ω(m) | θ (m) ∼ p(ω | θ (m) , I ). Suppose that the support
of p(θ | S) includes , and the weighting function w(θ ) = k(θ | I )/k(θ | S) is
118                                                                        POSTERIOR SIMULATION


bounded above. Let L(a, ω) ≥ 0 be a loss function defined on A × , where A is
an open subset of Rm . Suppose that the risk function
                          
                R(a) =        L(a, ω)p(θ | I )p(ω | θ , I ) dθ dω
                                      

has a strict global minimum at 
                               a ∈ A ⊆ Rm . Consider several additional conditions,
for a suitably defined open neighborhood of a, N (
                                                   a ):
            
   1. M −1 M   m=1 L(a, ω
                          (m)
                              ) converges uniformly to R(a) for all a ∈ N (
                                                                           a ), almost
      surely.
   2. ∂L(a, ω)/∂a exists and is a continuous function of a, for all ω ∈  and all
      a ∈ N ( a ).
   3. ∂ 2 L(a, ω)/∂a ∂a exists and is a continuous function of a, for all ω ∈  and
      all a ∈ N ( a).
   4. B = var[∂L(a, ω)/∂a|a=a w(θ )1/2 | S] exists and is finite.
   5. H = E[∂ 2 L(a, ω)/∂a ∂a |a=a | S] exists and is finite and nonsingular.
   6. For any ε > 0, there exists Mε such that
                                                    
                    P [ sup ∂ 3 L(a, ω)/∂ai ∂aj ∂ak  < Mε | S] ≥ 1 − ε
                       a∈N (
                            a)


      for all i, j, k = 1, . . . , m.
                                                  M
   Let AM be the set of all roots of M −1          m=1 [∂L(a, ω
                                                                  (m)
                                                                        )/∂a]w(θ (m) ) = 0. Then

  (a) Given conditions 1 and 2, for any ε > 0, we obtain

                                             a ) (a − 
                            lim P [ inf (a −          a ) > ε | S] = 0.
                           M→∞             a∈AM

                                                                                      p
                               aM is any element of AM such that 
  (b) Given conditions 1–6, if                                  aM → 
                                                                      a, then
                                   d
         (i) M 1/2 (    a ) → N (0, H−1 BH−1 ).
                    aM − 
               −1
                   M                                                             p
        (ii) M       m=1 w(θ    ) ∂L(a, ω(m) )/∂a|a=aM · ∂L(a, ω(m) )/∂a |a=aM → B.
                             (m) 2
                                                            p
       (iii) M −1 M  m=1 w(θ    )∂ L(a, ω(m) )/∂a ∂a |a=aM → H.
                             (m) 2



   Proof: Consider the auxiliary problem in which the pdf of θ and ω is p(θ |
S)p(ω | θ, I ) and the loss function is L(a, ω)w(θ ). Because the support of p(θ | S)
includes , the unique Bayes action in the auxiliary problem is also a. Then apply
Theorem 4.1.2 directly to the auxiliary problem.

    Note that if w(θ ) is bounded above on , which is condition 4 of
Theorem 4.2.2, then var[∂L(a, ω)/∂a|a=a w(θ )1/2 | S] will exist and be finite
if the same is true of var[∂L(a, ω)/∂a|a=a | I ]. The same optimization algo-
rithms may be applied to compute aM here as in the case of direct sampling,
MARKOV CHAIN MONTE CARLO                                                           119

                                ∗
                                              
except that they are used with RM (a) = M −1 M  m=1 L(a, ω
                                                           (m)
                                                               )w(θ (m) ) rather than
                                                 ∗
                                                                             (m) p
with M −1 m=1 L(a, ω(m) ). Note, however, that RM
             M
                                                    (aM )/M −1 M   m=1 w(θ      )→
R(a ). The results of Theorem 4.2.3 may be found in Shao (1989). Importance
sampling can be especially attractive when the distribution of ω depends on the
action a, a case we do not consider here; see Geyer (1996).

Exercise 4.2.1 Sampling from the Tail of the Normal Distribution Suppose
that the density of interest is the univariate standard normal, truncated to (a, ∞),
where a > 0. The source density is a translated exponential density with pdf p(x |
S) = θ −1 exp[−θ(x − a)]I(a,∞) (x). Show that the optimal choice of θ is θ = [a +
(4 + a 2 )1/2 ]/2. Note that as a → ∞, θ /a → 1. [Geweke (1991) reports that in the
context of the algorithm described in Example 4.2.2 the gain in efficiency from
using the optimal value of θ , relative to the simpler choice θ = a, is not worth the
time to compute the optimal value.]

Exercise 4.2.2 Tuning an Acceptance Algorithm The values of the constants tj
in Example 4.2.2 are good but not necessarily optimal. The best values are affected
by the software and hardware used to implement the algorithm. Using software and
hardware available to you, code the algorithm and see if detectable improvements
are possible.

Exercise 4.2.3 Efficiency of Importance Sampling Suppose that x ∼ N (0, 1)
and consider the two, alternative, source distributions for importance sampling:
                                               
                                   x ∼ N 0, 14                               (4.11)
                                    x ∼ N (0, 2).                               (4.12)

   Suppose that you were to use importance sampling to approximate E(x) for the
distribution of interest, x ∼ N (0, 1).

  (a) For one of the importance sampling distributions, (4.11) or (4.12), a cen-
      tral limit theorem can be used to assess the accuracy of the numerical
      approximation. Indicate which one, and calculate the relevant variance of
      the approximation.
  (b) For the importance sampling distribution you identified in (a), find the rel-
      ative numerical efficiency of the approximation.


4.3 MARKOV CHAIN MONTE CARLO

This section discusses a generalization of direct sampling known as Markov chain
Monte Carlo (MCMC). The idea is to construct a Markov chain {θ (m) } with state
space  ⊇  and unique invariant probability density p(θ | I ). Following an initial
transient or burn-in phase, the distribution of θ (m) is approximately that of the den-
sity p(θ | I ). The exact sense in which this approximation holds is important, and
120                                                                          POSTERIOR SIMULATION


is taken up in Section 4.5. We continue to assume that ω can be simulated directly
from p(ω | θ , I ), so that given {θ (m) } the corresponding ω(m) ∼ p(ω | θ (m) , I ) can
be drawn. We return to the use of {ω(m) } to approximate E[h(ω) | I ] in Section 4.5
as well. This section provides an introduction and heuristic motivation of MCMC.
    Markov chain methods have a history in mathematical physics dating back to
the algorithm of Metropolis et al. (1953). This method, which is described in Ham-
mersly and Handscomb (1964), Section 9.3, and Ripley (1987), Section 4.7, was
generalized by Hastings (1970), who focused on statistical problems, and was
further explored by Peskun (1973). A version particularly suited to image recon-
struction and problems in spatial statistics was introduced by Geman and Geman
(1984). This was subsequently shown to have great potential for Bayesian compu-
tation by Gelfand and Smith (1990). Their work, combined with data augmentation
methods (Tanner and Wong 1987), has proved very successful in the treatment of
latent variables in econometrics. Since 1990 application of Markov chain Monte
Carlo methods has grown rapidly; new refinements, extensions, and applications
appear almost continuously.
    This section concentrates on a heuristic development of two widely used MCMC
algorithms: the Gibbs sampler and the Metropolis–Hastings algorithm. The general
theory of convergence is discussed in Section 4.5. Section 4.6 details some specific
variants and combinations of these methods used extensively in the balance of this
volume. Section 4.7 turns to the assessment of numerical accuracy. While our main
interest is in applying these methods to the posterior density p(θ A | yo , A) they can
in principle be used with any density, and so we continue with the generic case of
p(θ | I ).

4.3.1 The Gibbs Sampler
The Gibbs sampler begins with a partition, or blocking, of θ , θ  = (θ (1) , . . . , θ (B) ).
Corresponding to any subvector θ (b) , let θ <(b) = (θ (1) , . . . , θ (b−1) ) (b = 2, . . . , B)
and θ <(1) = {∅}. Similarly θ >(b) = (θ (b+1) , . . . , θ (B) ) (b = 1, . . . , B − 1) and
θ >(B) = {∅}. Let θ −(b) = (θ <(b) , θ >(b) ). In application, we generally try to choose
the blocking so that it is possible to draw directly from each of the conditional
densities p(θ (b) | θ −(b) , I ). In this section we shall assume that it is possible. This
assumption will be weakened subsequently in Section 4.6.
   Suppose that there existed a single drawing θ (0) , θ (0) = (θ (0)                     (0)
                                                                            (1) , . . . , θ (B) ), from
the distribution with pdf p(θ | I ). Successively make the drawings
                                                           
                      θ (1)               (1)      (0)
                        (b) ∼ p θ (b) | θ <(b) , θ >(b) , I   (b = 1, . . . , B).              (4.13)
                                                                                          (1) 
 This defines a transition process from θ (0) to θ (1) , θ (1) = θ (1)   (1) , . . . , θ (B) . The
 Gibbs sampler is defined by the choice of blocking, and by the forms of the
conditional       densities induced by p(θ | I ) and the blocking. Since θ (0) ∼ p(θ | I ),
  θ <(b) , θ (b) , θ (0)
    (1)      (1)
                     >(b) ) ∼ p(θ | I at the bth step in (4.13). In particular, θ
                                                                                  (1)
                                                                                        ∼ p(θ | I ).
                                                                                    (m)          
     In general, block b of iterate m of the Gibbs sampler is drawn as θ (b) ∼ p θ (b) |
                       
 θ (m)      (m−1)
   <(b) , θ >(b) , I for b = 1, . . . , B and m = 1, 2, . . . . This produces a sequence
MARKOV CHAIN MONTE CARLO                                                              121

{θ (m) }, which is a realization of a Markov chain. The transition density for this
chain is

                                            
                                            B
                                                                          
                 p(θ (m) | θ (m−1) , G) =     p θ (m)     (m)      (m−1)
                                                  (b) | θ <(b) , θ >(b) , I .       (4.14)
                                            b=1


Any single iterate θ (m) retains the property that it is drawn from the density
p(θ | I ).
   In practice, the Gibbs sampler should use as many blocks as required in order
to make the drawings in (4.13) efficiently. On the other hand, it should use no
more blocks than necessary because additional blocks usually reduce efficiency;
see Exercise 4.5.1 for a simple motivating example. For many problems in econo-
metrics and statistics the blocking is natural and the conditional distributions are
familiar.

Example 4.3.1 A Gibbs Sampler in the Normal Linear Regression Model In
Example 2.1.2 the independent prior distributions β | A ∼ N (β, H−1 ) and s 2 h ∼
χ 2 (ν) led to the conditional posterior distributions
                                    −1
      β | (h, yo , X, A) ∼ N (β, H ) and s 2 h | (β, yo , X, A) ∼ χ 2 (ν),

                                  −1
with H = H + hX X, β = H (Hβ + hX yo ), s 2 = s 2 + (yo − Xβ) (yo − Xβ),
and ν = ν + T . Hence the blocking θ (1) = β, θ (2) = h is natural and convenient.

    Of course, if it were possible to make an initial draw from the density p(θ | I ),
then independent draws directly from p(θ | I ) would also be possible. The purpose
of that assumption here is to marshal an informal argument that the density p(θ | I )
is an invariant density of the Markov chain p(θ (m) | θ (m−1) , G): that is, if θ (m) ∼
p(θ | I ), then θ (m+s) ∼ p(θ | I ) for all s > 0. An important remaining task is to
elucidate conditions for the distribution of θ (m) to converge in distribution to that
of the pdf p(θ | I ) given any θ (0) ∈ .
    A more subtle complication is that even if θ (0) were drawn from p(θ | I ),
the argument just given establishes only that any single θ (m) is also drawn from
p(θ | I ). It does not establish that a single sequence {θ (m) } is representative
                                                                                        of
p(θ | I ). Consider the example shown in Figure 4.2a, in which  = 1 2 , and
the Gibbs sampling algorithm has blocks θ (1) = θ 1 and θ (2) = θ 2 . If θ (0) ∈ 1 , then
θ (m) ∈ 1 for m = 1, 2, . . . . Any single θ (m) is just as representative of p(θ | I ) as
is the single drawing θ (0) , but {θ (m) } would not be representative of the distribution
of interest. Indeed, it would be misleading. In the example shown in Figure 4.2b,
if θ (0) is the indicated point at the lower left vertex of the triangle closed support
of p(θ | I ), then θ (m) = θ (0) for m = 1, 2, . . . . Clearly neither situation arises in
Example 4.3.1, but evidently a careful development of conditions under which
{θ (m) } converges in distribution to p(θ | I ) is needed. We return to that development
in Section 4.5.
122                                                                       POSTERIOR SIMULATION


      6                                               4
                       Support subset Θ1                              Closed support set
                       Support subset Θ2                              Absorbing vertex

                                                      3
      4


                                                      2
      2


                                                      1
q2




                                                 q2
      0

                                                      0

     −2
                                                      −1


     −4
                                                      −2



     −6                                               −3
       −6   −4    −2     0      2     4      6         −3   −2   −1     0         1   2    3   4
                         q1                                                 q1
                         (a)                                                (b)

Figure 4.2. Two examples in which a Gibbs sampling Markov chain will be reducible: (a) disjoint
support; (b) vertex of closed set support.



4.3.2 The Metropolis–Hastings Algorithm
The Metropolis–Hastings algorithm is defined by an arbitrary transition probability
density function q(θ ∗ | θ, H ) indexed by θ ∈  and with density argument θ ∗ , and
by an arbitrary starting value θ (0) ∈ . The random vector θ ∗ generated from
q(θ ∗ | θ (m−1) , H ) is a candidate value for θ (m) . The algorithm sets θ (m) = θ ∗ with
probability
                                                                             
            ∗                          p(θ ∗ | I )/q(θ ∗ | θ (m−1) , H )
       α(θ | θ    (m−1)
                        , H ) = min                                         ,1 .    (4.15)
                                      p(θ (m−1) | I )/q(θ (m−1) | θ ∗ , H )

Otherwise, the algorithm sets θ (m) = θ (m−1) . It is common to say that the candidate
θ ∗ is accepted in the first instance and rejected in the second.
    Let

                       u(θ ∗ | θ , H ) = q(θ ∗ | θ, H )α(θ ∗ | θ , H ),                    (4.16)
MARKOV CHAIN MONTE CARLO                                                                      123

a density kernel for all accepted candidates. Denote the unconditional probability of
rejection of the candidate drawn when the current state of the Metropolis–Hastings
chain is θ by
                                       
                       r(θ | H ) = 1 −    u(θ ∗ | θ, H ) dν(θ ∗ ).            (4.17)
                                              

This is the probability of rejecting θ ∗ , given θ, but before θ ∗ is actually drawn.
The Metropolis–Hastings Markov chain is thus driven by an indexed transition
probability measure defined on ν-measurable sets A ⊆ :
                              
             P (A | θ , H ) =    u(θ ∗ | θ , H ) dν(θ ∗ ) + r(θ | H )IA (θ).
                                    A

   To write the corresponding transition probability density, let δ θ (θ ∗ ) denote the
Dirac delta function, a linear operator with the property
                       
                           δ θ (θ ∗ )f (θ ∗ ) dν(θ ∗ ) = f (θ )IA (θ ).          (4.18)
                            A

Then

   p(θ (m) | θ (m−1) , H ) = u(θ (m) | θ (m−1) , H ) + r(θ (m−1) | H )δ θ (m−1) (θ (m) ).   (4.19)

This defines a Markov chain indexed by θ (m−1) that places probability on . The
intuition behind this procedure is evident on the right side of (4.15), and is in many
respects similar to that in acceptance and importance sampling. If the transition
density makes a move from θ (m−1) to θ ∗ quite likely, relative to p(θ ∗ | I ), and
a move back from θ ∗ to θ (m−1) quite unlikely, relative to p(θ (m−1) | I ), then the
algorithm will place a low probability on actually making the transition and a high
probability on staying at θ (m−1) . In the same situation, a prospective move from
θ ∗ to θ (m−1) will always be made because draws of θ (m−1) are made infrequently
relative to the density of interest p(θ | I ).
    This is the most general form of the Metropolis–Hastings algorithm, which is
due to Hastings (1970). The Metropolis et al. (1953) form takes q(θ ∗ | θ, H ) =
q(θ | θ ∗ , H ), which leads to the simplification

                 α(θ ∗ | θ (m−1) , H ) = min[p(θ ∗ | I )/p(θ (m−1) | I ), 1].

A leading instance of that algorithm is the random-walk Metropolis chain in which
q(θ ∗ | θ, H ) = q(θ ∗ − θ | H ), the latter density being symmetric about 0; see
Example 4.3.2.
   Another special case is the Metropolis independence chain (Tierney 1994), in
which q(θ ∗ | θ , H ) = q(θ ∗ | H ). This leads to

                    α(θ ∗ | θ (m−1) , H ) = min[w(θ ∗ )/w(θ (m−1) ), 1],
124                                                                      POSTERIOR SIMULATION


where w(θ ) = p(θ | I )/q(θ | H ). The independence chain is closely related to
acceptance sampling and importance sampling. But rather than place a low prob-
ability of acceptance or a low weight on a draw that is unlikely relative to the
distribution of interest, the independence chain assigns a low probability of accept-
ing that candidate θ ∗ as the next draw θ (m) .
   There is a simple two-step argument that motivates the convergence of the
sequence {θ (m) }, generated by the Metropolis–Hastings algorithm, to the distri-
bution of interest. [This approach is due to Chib and Greenberg (1995).] First,
note that if a transition probability density function p(θ (m) | θ (m−1) , T ) satisfies the
reversibility condition

      p(θ (m−1) | I )p(θ (m) | θ (m−1) , T ) = p(θ (m) | I )p(θ (m−1) | θ (m) , T )

with respect to p(θ | I ), then
         
             p(θ (m−1) | I )p(θ (m) | θ (m−1) , T ) dν(θ (m−1) )
           
               
             =     p(θ (m) | I )p(θ (m−1) | θ (m) , T ) dν(θ (m−1) )                   (4.20)
                 
                            
             = p(θ (m) | I ) p(θ (m−1) | θ (m) , T ) dν(θ (m−1) ) = p(θ (m) | I ).
                               

Expression (4.20) indicates that if θ (m−1) ∼ p(θ | I ), then the same is true of θ (m) .
The density p(θ | I ) is an invariant density of the Markov chain with transition
density p(θ (m) | θ (m−1) , T ). This concept is developed more formally in Section 4.5.
   The second step in this argument is to consider the implications of the
requirement that the Metropolis–Hastings transition density p(θ (m) | θ (m−1) , H )
be reversible with respect to p(θ | I ):

      p(θ (m−1) | I )p(θ (m) | θ (m−1) , H ) = p(θ (m) | I )p(θ (m−1) | θ (m) , H ).

For θ (m−1) = θ (m) the requirement holds trivially. For θ (m−1) = θ (m) it implies that

                   p(θ (m−1) | I )q(θ ∗ | θ (m−1) , H )α(θ ∗ | θ (m−1) , H )
                       = p(θ ∗ | I )q(θ (m−1) | θ ∗ , H )α(θ (m−1) | θ ∗ , H ).        (4.21)

Suppose without loss of generality that

         p(θ (m−1) | I )q(θ ∗ | θ (m−1) , H ) > p(θ ∗ | I )q(θ (m−1) | θ ∗ , H ).

If α(θ (m−1) | θ ∗ , H ) = 1 and

                                             p(θ ∗ | I )q(θ (m−1) | θ ∗ , H )
                 α(θ ∗ | θ (m−1) , H ) =                                          ,
                                           p(θ (m−1) | I )q(θ ∗ | θ (m−1) , H )
then (4.21) is satisfied.
MARKOV CHAIN MONTE CARLO                                                                  125

Example 4.3.2 Restricted Normal Linear Regression Model—Another App-
roach Consider once again the situation of Example 4.2.1, a normal linear regres-
sion model with fixed precision h, and the prior β ∼ N (β, H−1 ) truncated to a set
S ⊆ Rk . In the acceptance sampling algorithm developed in that example, β is
                                            −1
drawn from the source distribution N (β, H ), accepted if β ∈ S, and rejected if
β∈ / S. The probability of acceptance is
                                     
                           1/2
                 (2π)−k/2 H              exp[−(β − β) H(β − β)/2] dβ,
                                       S

and the algorithm will be impractical if this is quite small.
    As an alternative, consider a Metropolis–Hastings algorithm in which the tran-
sition density q(β ∗ | β (m) , H ) corresponds to the distribution N (β (m) , V):

    q(β ∗ | β (m) , H ) = (2π)−k/2 |V|−1/2 exp[−(β ∗ − β (m) ) V−1 (β ∗ − β (m) )/2].

This is an example of a random-walk Metropolis chain. It shares the property
q(β ∗ | β (m) , H ) = q(β (m) | β ∗ , H ) of the algorithm developed in Metropolis et al.
(1953). The acceptance probability is

                                            exp[−(β ∗ − β) H(β ∗ − β)/2]
                α(β ∗ | β (m) , H ) =
                                           exp[−(β (m) − β) H(β (m) − β)/2]

if β ∗ ∈ S and 0 if β ∗ ∈
                        / S. This algorithm can succeed where the acceptance algo-
rithm is impractical if V is chosen carefully. If V is too large, most draws will
not be in S and will therefore be rejected. As a consequence, in order to generate
M distinct draws, many times more candidates will need to be drawn. If V is too
small, most draws will be accepted but the distance moved will be quite small and
a very large number of iterations will be required to cover S adequately. For the
algorithm to succeed, V must also be scaled appropriately in all dimensions.

Exercise 4.3.1 The Behrens–Fisher Problem                      Here are several Bayesian vari-
ants of this problem. In each variant

                     y1 = (y11 , . . . , yT1 ,1 ) , y2 = (y12 , . . . , yT2 ,2 )
                                                                
                    y1            ιT1 µ1             σ 21 IT1 0
                        ∼N                    ,
                    y2            ιT2 µ2                0 σ 22 IT2

where ιn denotes an n × 1 vector (1, . . . , 1) .

   (a) Suppose that the prior distribution is

                               s 21 /σ 21 ∼ χ 2 (ν 1 ), s 22 /σ 22 ∼ χ 2 (ν 2 ),
                                    µ1 = µ2 = µ ∼ N (µ, h−1 ).
126                                                                              POSTERIOR SIMULATION


      (The random variables σ 21 , σ 22 , and µ are mutually independent.) Construct
      a Gibbs sampling algorithm whose invariant distribution is the posterior
      distribution of (µ, σ 21 , σ 22 ). Be completely explicit about all conditional dis-
      tributions.
  (b) Suppose that the prior distribution is

                             s 21 /σ 21 ∼ χ 2 (ν 1 ), s 22 /σ 22 ∼ χ 2 (ν 2 ),
                                 µ = (µ1 , µ2 ) ∼ N (µ, H−1 ).

      (The random variables σ 21 , σ 22 , and µ are mutually independent.) Construct
      a Gibbs sampling algorithm whose invariant distribution is the posterior
      distribution of (µ, σ 21 , σ 22 ). Be completely explicit about all conditional dis-
      tributions.
  (c) Suppose that the prior distribution is

                             s 21 /σ 21 ∼ χ 2 (ν 1 ), s 22 /σ 22 ∼ χ 2 (ν 2 ),
                                                         −1
                                                    µ, 
                               µ = (µ1 + µ2 )/2 ∼ N (  h ),
                     µ1 − µ2 ∼ N (0, h−1 ) truncated to µ1 − µ2 ≥ 0.

       (The random variables σ 21 , σ 22 , 
                                           µ, and µ1 − µ2 are mutually independent.)
       Construct a Gibbs sampling algorithm whose invariant distribution is the
       posterior distribution of (µ1 , µ2 , σ 21 , σ 22 ). Be completely explicit about all
       conditional distributions.

Exercise 4.3.2 Gibbs Sampling in a Nonlinear Regression Model Consider the
second-order autoregressive model

 yt − µ = β 1 (yt−1 − µ) + β 2 (yt−2 − µ) + εt , εt ∼ N (0, h−1 ) (t = 1, . . . , T ).
                                                             i.i.d.



The values y0 and y−1 are fixed. (Equivalently, they are ancillary statistics for µ,
β = (β 1 , β 2 ) , and h.) The prior distribution is

                 µ ∼ N (µ, h−1 ), β ∼ N (β, Hβ−1 ), s 2 h ∼ χ 2 (ν).

(In the prior distribution, µ, β, and h are mutually independent.)

  (a) Write the likelihood function for µ, β, and h and the respective prior density
      kernels for µ, β, and h.
  (b) Design a Gibbs sampling algorithm to draw from the posterior distribution
      of µ, β, and h.
  (c) Now suppose that, in addition, we impose the constraint that the roots of
      the polynomial

                                       1 − β 1 z − β 2 z2 = 0
VARIANCE REDUCTION                                                                  127

       satisfy |z| > 1. (This is a technical condition guaranteeing that {yt } does not
       “blow up” as t → ∞; more precisely, it ensures that {yt } is asymptotically
       stationary.) Thus β ∈ S ⊆ R2 , and the prior density kernel for β found in
       (a) is now multiplied by IS (β). Modify the algorithm that you designed in
       (b) to simulate from the posterior distribution in this model.
       (For continuation, see Exercise 4.4.2.)

Exercise 4.3.3 Shape Constraints in Regression Hildreth (1954) had observ-
ables as follows:

               Fertilizer           Number of                   Output
               per Acre            Observations                per Acre

                   20                    T1                 (y11 , . . . , yT 1 )
                   40                    T2                 (y12 , . . . , yT 2 )
                   60                    T3                 (y13 , . . . , yT 3 )
                   80                    T4                 (y14 , . . . , yT 4 )
                  100                    T5                 (y15 , . . . , yT 5 )
                  120                    T6                 (y16 , . . . , yT 6 )

His model is ytj ∼ N (µj , σ 2 ) with all ytj mutually independent.

  (a) Given the prior distribution

                     µ = (µ1 , . . . , µ6 ) ∼ N (µ, H−1 ), s 2 /σ 2 ∼ χ 2 (ν),

      where µ and σ 2 are independent, how would you construct a Gibbs sam-
      pling algorithm whose invariant distribution is the posterior distribution of
      µ and σ 2 ?
  (b) Suppose that the prior distribution is the same as in (a), except that in
      addition you believe µ1 < · · · < µ6 . The restrictions could be handled by
      appending an acceptance step to the algorithm in (a), but this could be
      quite inefficient. Show how to construct a Gibbs sampler with B = 7 blocks
      whose invariant distribution is the posterior distribution of µ and σ 2 .
  (c) Suppose that the prior distribution is the same as in (b), except that in
      addition you believe that the expected output per acre (given fertilizer per
      acre) is a strictly concave function of fertilizer per acre. How would you
      construct a 7-block Gibbs sampling algorithm whose invariant distribution
      is the posterior distribution of µ and σ 2 ?


4.4 VARIANCE REDUCTION

All the Monte Carlo methods for evaluating E[h(ω) | I ] considered to this point
generate an artificial sample (θ (m)
                                 A ,ω
                                      (m)
                                          ) (m = 1, 2, . . .) and a sequence of weights
128                                                                      POSTERIOR SIMULATION



w(θ (m)
    A ) with the property that


                 (M)       
                           M
                                                    
                                                     M
                                                                  a.s.
             h         =         w(θ (m)
                                     A )h(ω
                                            (m)
                                                )         w(θ (m)
                                                              A ) → E[h(ω) | I ].
                           m=1                      m=1

Often it is possible to find a function h∗ (θ A , ω) with the properties

                                 E[h∗ (θ A , ω) | I ] = E[h(ω) | I ],                        (4.22)
                       var[h∗ (θ A , ω) | I ] < var[h(ω) | I ],                              (4.23)
                       M
                                          ∗ (m)
                ∗(M)
                              w(θ (m)
                                    A )h (θ A , ω
                                                   (m)
                                                       ) a.s.
               h     =   m=1
                             M                          → E[h(ω) | I ].                     (4.24)
                                       w(θ (m)
                                            A  )
                                          m=1

Typically (4.24) can be derived from (4.22). Then (4.23) suggests that it is likely
                                                    ∗(M)
that the numerical standard error associated with h       will be less than that associ-
             (M)
ated with h . The extent of the reduction in numerical standard error, or whether
any reduction at all will necessarily occur, can be difficult to establish as an analyt-
ical proposition in typical applications. What is more important is that the relative
accuracies of the two approximations can be evaluated as a practical matter using
the central limit theorem appropriate to the method: Theorem 4.1.1 for direct sam-
pling, Theorem 4.2.2 for importance sampling, or Theorems 4.7.1 and 4.7.3 for
MCMC sampling. Even more important is the fact that there are systematic meth-
ods of constructing h∗ that will supply the potentially superior alternative in the
first place. This section describes two such methods.

4.4.1 Concentrated Expectations
The essentials of the principle of concentrated expectations can be appreciated in
the generic problem of evaluating the integral     f (x, y)p(x, y) dx dy, in which
                                                                                    i.i.d.
p(x, y) is a density function. Direct
                               M sampling        would entail (x (m) , y (m) ) ∼ p(x, y)
                            −1            (m)    (m)
and the approximation M          m=1 f (x     , y ). Suppose that we can evaluate
E[f (x, y) | x] = f (x, y)p(x, y) dy/ p(x, y) dy analytically. By the law of
iterated expectations [see Casella and Berger (2002), Theorem 4.4.3]

                                 E{E[f (x, y) | x]} = E[f (x, y)],

and by the Rao–Blackwell theorem (Casella and Berger 2002, Theorem 7.3.17)

                             var{E[f (x, y) | x]} ≤ var[f (x, y)]

as long as the latter variance
                            exists and     is finite. Hence the numerical standard
error associated with M −1 M     E[f (x (m)
                                            , y) | x (m) ] is no greater, and is generally
                             m=1
                                     −1
                                        M            (m)
smaller, than that associated with M       m=1 f (x       , y (m) ). The gain comes from
VARIANCE REDUCTION                                                                 129

performing part of the integration analytically rather than entirely numerically. The
following result places this idea in context.

    Theorem 4.4.1 Concentrated Expectations in Posterior Simulation Suppose
that the sequence {θ (m) , ω(m)
                            1 } is independently and identically distributed with
θ (m) ∼ p(θ (m) | I ) and ω(m)1 ∼ p(ω | θ
                                          (m)
                                              , I ). Let θ  = (θ 1 , θ 2 ), ω(m)   =
                    (m)         (m)                       (M)          −1
                                                                             M 2 (m)
E(ω | θ , I ), ω3 = E(ω | θ 1 , I ), ω = E(ω | I ), and ωj = M
        (m)
                                                                               m=1 ωj
(j = 1, 2, 3). Then

                                             d
                     M 1/2 (ω(M)
                             j   − ω) → N (0, τ 2j ) (j = 1, 2, 3)              (4.25)

and

                                        τ 23 ≤ τ 22 ≤ τ 21 .                    (4.26)



    Proof: Because {θ (m) , ω(m)                      (m)
                              1 } is i.i.d., so are {ωj } (j = 1, 2, 3). By the law of
                            (m)
iterated expectations E(ωj | I ) = E(ω | I ) (j = 1, 2, 3; m = 1, . . . , M). By the
Rao–Blackwell theorem

                   var(ω(m)            (m)            (m)
                        3 | I ) ≤ var(ω2 | I ) ≤ var(ω1 | I ).


   The conditions in Theorem 4.4.1 are those of direct sampling, and hence the
immediate applicability of this result is rather limited. The treatment of conver-
gence of MCMC algorithms in Sections 4.5 and 4.7 applies directly to (4.25), and
consequently the methods there can be used to approximate τ 2j and thereby evalu-
ate the accuracy of the alternative approximations ω(M) j (j = 1, 2, 3). Similarly, the
method of concentrated expectations can be used in combination with importance
sampling, and the methods of Section 4.2.2 can be used to assess accuracy. All
of these methods provide an estimate    τ 2j , and this is generally lower when the
method of concentrated expectations is applied than when it is not. Whether or
not (4.26) applies for these algorithms in general is not known. Liu et al. (1994)
and McKeague and Wefelmeyer (2000) have shown that it does for certain MCMC
algorithms, given some regularity conditions beyond those discussed in Section 4.5.

Example 4.4.1 Concentrated Expectations and Prediction in the Normal Lin-
ear Regression Model In the context of the normal linear model and Gibbs
sampling algorithm of Example 4.3.1, suppose ω = yT +1 = β  xT +1 + εT +1 , where
the covariate vector xT +1 is known. Apply Theorem 4.4.1 using θ A1 = h to obtain
                                                               (m)
ω(m)
  1 ∼ N (β
             (m)
                  xT +1 , h(m)−1 ), ω(m)
                                     2 =β
                                          (m)
                                               xT +1 and ω(m)
                                                          3 =β      xT +1 , where

                         (m)
                     β         = (H + h(m) X X)−1 (Hβ + h(m) X yo ).
130                                                                  POSTERIOR SIMULATION


The numerical standard error of ωM                                      M
                                   3 will be much smaller than that of ω2   in
                                                                    M
typical applications; see Exercise 4.4.2 for an example. Moreover, ω3 requires
less computing than does either ωM       M
                                  2 or ω1 .


    This example illustrates the fact that virtually every Gibbs sampling algo-
rithm provides potential applications of the principle of concentrated expecta-
tions. Since p(θ (b) | θ −(b) , I ) is the density of a tractable distribution, in general
E(θ (b) | θ −(b) , I ) will be known analytically. Using E(θ (b) | θ (m)
                                                                       −(b) , I ) rather than
  (m)
θ (b) to approximate E(θ (b) | I ) will typically pay a dividend in the form of reduced
numerical standard error. As Example 4.4.1 illustrates, this property of Gibbs sam-
pling algorithms can be used to improve the simulation approximation of other
posterior moments, as well.

4.4.2 Antithetic Sampling
The principle of antithetic variates in Monte Carlo integration dates at least to Ham-
mersly and Morton (1956). In the original formulation, an i.i.d. sequence of random
vectors (ω(1,m) , ω(2,m) ) is generated from a sampling scheme R. The marginal dis-
tribution of {ωj,m } | R (j = 1, 2) is the same as that of an i.i.d. sequence drawn
from the distribution I , but cov(ω(1,m) , ω(2,m) | R) < 0. Then
           M                                       M                  
                                                      
       var     (ω  (1,m)
                         +ω   (2,m)
                                    )/2M | R < 2 var
                                                 1
                                                           ω (1,m)
                                                                   /M | I .
            m=1                                          m=1


This is the relevant comparison if the computation time for generating {ω(1,m) } and
{ω(2,m) } is double that for {ω(1,m) } alone. In the limiting case cov(ω(1,m) , ω(2,m) |
R) = −var(ω(1,m) | I ) the approximation becomes exact, but then also E(ω | I ) is
likely to be known. To approximate E[h(ω) | I ], we use

                             
                             M
                                 [h(ω(1,m) ) + h(ω(2,m) )]/2M                         (4.27)
                            m=1

            
in place of M  m=1 h(ω
                       (1,m)
                             )/M. It need not be the case that the alternative provides
a more efficient approximation. Loosely speaking, if h is roughly linear over most
of the support of ω and cov(ω(1,m) , ω(2,m) | R) < 0, there will be an improvement.
For example, if ω(1,m) ∼ N (µ, σ 2 ), with µ and σ 2 known, E[h(ω(1,m) ) | I ] cannot
be derived analytically, and h is roughly linear, then taking ω(2,m) = µ − (ω(1,m) −
µ) = 2µ − ω(1,m) may provide a substantially more efficient approximation. The
idea extends immediately to random vectors ω.
    This principle applies in the more sophisticated sampling methods taken up in
this chapter, as well. The only challenge is in finding a sequence ω(2,m) corre-
sponding to ω(1,m) that may yield improved approximations. Once this is done, the
application of the idea amounts to using (4.27) in direct sampling and MCMC algo-
rithms; some straightforward changes in weighting, developed in Exercise 4.4.3,
VARIANCE REDUCTION                                                                    131

may be required for importance sampling. In the case of Gibbs sampling algo-
rithms, the individual blocks often provide the basis for the alternative sequence
ω(2,m) , as illustrated in the following example.

Example 4.4.2 Antithetic Gibbs Sampling in a Nonlinear Regression Model
In the context of the nonlinear regression model and Gibbs sampling algorithm of
Exercise 4.3.2, parts (a) and (b), suppose that the function of interest is the ampli-
tude of the smallest root of 1 − β 1 z − β 2 z2 ; denote this root by ω = f (β), where
β =(β 1 , β 2 ) . In the posterior simulator of Exercise 4.3.2(b), β (1,m) is drawn from
                                         (m)                                        (m)
a normal distribution with mean β . Let ω(1,m) = f (β (1,m) ), β (2,m) = 2β −
β (1,m) , and ω(2,m) = f (β (2,m) ). In the approximation of E(ω | I ), use (ω(1,m) +
ω(2,m) )/2 in place of ω(1,m) . The methods developed in Section 4.7 for the evalua-
tion of numerical accuracy apply directly, so the efficiencies of the two alternative
approximations of E(ω | yo , A) will be apparent.

   As sample size T increases, the posterior distribution of T 1/2 (θ A − θ ∗A ) typically
becomes symmetric about zero for some θ ∗A ∈ Rk . For example, this will happen
if Theorem 3.4.3 applies. If the function of interest is smooth, then in the limit
the approximation problem becomes that of evaluating the mean of a linear func-
tion of symmetrically distributed random variables. Therefore gains to antithetic
sampling should increase with sample size, given suitable regularity conditions, a
phenomenon known as antithetic acceleration.
   These conditions were developed formally in Geweke (1988) for posterior
moments of the form g = E[g(θ A ) | YT , A]. For each T , by direct sampling

                             i.i.d.
                      θ (1,m)
                        AT    ∼ p(θ A | YoT , A)(m = 1, 2, . . .),

and the antithetic sample is

                          θ (2,m)
                            AT    = 2E[θ A | YoT , A] − θ (1,m)
                                                          AT .

                                                                  M
The direct approximation of E[g(θ A ) | YoT , A] is g (M)
                                                      T   =                  (1,m)
                                                                     m=1 g(θ AT )/M   and
the antithetic approximation is

                                  
                                  M
                                                      (2,m) 
                      g T∗(M) =         g(θ (1,m)
                                            AT ) + g(θ AT ) /2M.
                                  m=1


The regularity conditions in Geweke (1988) include continuous twice differentia-
bility of g in a neighborhood of θ ∗A , with α = g  (θ ∗A ) and B = (1/2)g  (θ ∗A ), as
well as

      lim T var(θ A | YT , A) =  and lim T 2 var(θ A Bθ A | YT , A) = δ > 0,
     T →∞                                  T →∞
132                                                                POSTERIOR SIMULATION


                                                                            d
conditions similar to those in Theorem 3.4.3. Then M 1/2 (g (M)
                                                            T   − g) → N (0, τ 2T ),
M 1/2 (g T∗(M) − g) → N (0, τ ∗2
                    d
                              T ), and


                               lim T τ ∗2          
                                       T /τ T = δ/α α.
                                            2
                              T →∞


   There are no parallel results for importance or MCMC sampling, but this is no
impediment to the use of antithetic sampling. The additional demands are usually
modest, as suggested by Example 4.4.2, and the accuracy of the approximation can
be evaluated using the method described in Section 4.7.

Exercise 4.4.1 Improving the Approximation of a Posterior Probability
Reconsider the problem of approximating (4.1) in Example 4.1.1.

  (a) Express P (ω ≤ a | x∗ , β, h, A) in terms of (·), the cdf of the standard
      normal distribution. (Most mathematical applications software can evaluate
         efficiently.)
  (b) Use the result in (a) to find a numerical approximation to (4.1) with variance
      less than that of p(M) , the approximation suggested in Example 4.1.1.

Exercise 4.4.2 Variance Reduction Methods and Forecasting Consider the
nonlinear regression model of Exercise 4.3.2 and the Gibbs sampling algorithm
developed there. This model can be used to forecast ω = (yT +1 , . . . , yT +F ) . If the
loss function is quadratic in ω, then the appropriate forecast is 
                                                                  y = E(ω | YTo , A).
This could be accomplished by drawing

        ω(m)
         1 ∼ N [µ
                 (m)
                     + β (m)
                         1 (yT − µ
                             o     (m)
                                       ) + β (m)
                                             2 (yT −1 − µ
                                                 o        (m)
                                                              ), h(m)−1 ],
        ω(m)
         2 ∼ N [µ
                 (m)
                     + β (m) (m)
                         1 (ω1 − µ
                                   (m)
                                       ) + β (m)
                                             2 (yT − µ
                                                 o     (m)
                                                           ), h(m)−1 ],
        ω(m)
         s   ∼ N [µ(m) + β (m) (m)
                           1 (ωs−1 − µ
                                       (m)
                                           ) + β (m) (m)
                                                 2 (ωs−2 − µ
                                                             (m)
                                                                 ), h(m)−1 ],
                                                                 
                                                        y is M −1 M
s = 3, . . . , F . Then the simulation approximation of           m=1 ω
                                                                         (m)
                                                                             . This
exercise utilizes variance reduction methods to improve on this procedure.

   (a) Use the law of iterated expectations to show that conditional on (YoT , β, µ, A)

                   E(yT +1 − µ) = β 1 (yTo − µ) + β 2 (yTo −1 − µ),
                   E(yT +2 − µ) = β 1 E(yT +1 − µ) + β 2 (yTo − µ),
                   E(yT +s − µ) = β 1 E(yT +s−1 − µ) + β 2 (yT +s−2 − µ)

       for s = 3, . . . , F . Use this result, the principle of concentrated expecta-
       tions, and the original simulation sample {µ(m) , β (m) , h(m) } to improve the
       approximation of     y.
SOME CONTINUOUS STATE SPACE MARKOV CHAIN THEORY                                      133

  (b) Apply the principle of concentrated expectations to E[β | YTo , µ, h, A] to
      further improve the approximation of     yT +1 . Does this idea extend to 
                                                                                 yT +2 ?
  (c) Show how antithetic samples of β | (YT , µ, h, A) could be used to improve
                                                 o

      the approximation of yT +s (s = 2, . . . , F ). Would you expect the improve-
                             yT +2 or for 
      ment to be greater for             yT +F ?

Exercise 4.4.3 Antithetic Importance Sampling In many importance sampling
algorithms the source density p(θ | S) is symmetric about µ = E(θ | S), and con-
sequently the construction of the antithetic sequence θ (2,m) = 2µ − θ (m) is trivial.
Corresponding to θ (m) , ω(m) ∼ p(ω | θ (m) , I ), and corresponding to θ (2,m) , ω(2,m) ∼
                                                         (M)
p(ω | θ (2,m) , I ) (m = 1, 2, . . .). Define h, w(θ ), h , and τ 2 as in Theorem 4.2.2.

   (a) Show that
                           M
                ∗(M)
                                  [w(θ (m) )h(ω(m) ) + w(θ (2,m) )h(ω(2,m) )] a.s.
            h          =    m=1
                                   M                                         → h.
                                            [w(θ (m) ) + w(θ (2,m) )]
                                        m=1

                                                     ∗(M)       ∗   d
  (b) State conditions under which M 1/2 (h                 − h ) → N (0, τ ∗2 ).
  (c) Show that τ ∗2 /τ 2 < 12 if and only if

           cov{[h(ω(m) ) − h]w(θ (m) ), [h(ω(2,m) ) − h]w(θ (2,m) ) | S} < 0.

       Under what conditions is this inequality likely to hold?



4.5 SOME CONTINUOUS STATE SPACE MARKOV CHAIN THEORY

The informal treatment of the Gibbs sampler and the Hastings–Metropolis algo-
rithm in Section 4.3 leaves unresolved important questions about the conditions
under which the simulation sample {θ (1) , . . . , θ (M) } will become representative of
p(θ | I ) as M → ∞. This section turns to that question. Much of the treatment
here draws heavily on the work of Tierney (1991, 1994), who first used the the-
ory of continuous state space Markov chains to demonstrate convergence, and
Roberts and Smith (1994), who elucidated sufficient conditions for convergence
that turn out to be applicable in a wide variety of problems in econometrics and
statistics.
    Let C denote a generic Markov chain {θ (m) } defined on  ×  by a transition
kernel u(θ ∗ | θ , C) with the property that
                                   
                r(θ | C) = 1 −          u(θ ∗ | θ, C) dν(θ ∗ ) ∈ [0, 1) ∀ θ ∈ .
                                    
134                                                                                  POSTERIOR SIMULATION


For any ν-measurable set A ⊆ ,
                                                          
                P (θ (m) ∈ A | θ (m−1) , C) =                     u(θ | θ (m−1) , C) dν(θ)
                                                              A

                                                           + r(θ (m−1) | C)IA (θ (m−1) ).

In the case of the Gibbs sampler discussed in the previous section the transition den-
sity function p(θ ∗ | θ , G) is defined in (4.14), and r(θ | C) = 0 ∀ θ ∈ . In the
case of the Hastings–Metropolis algorithm, u(θ ∗ | θ, C) = u(θ ∗ | θ , H ), defined
in (4.16), and r(θ | C) = r(θ | H ), defined in (4.17). The transition kernel u is
substochastic; it is proportional to the probability density of the accepted candi-
dates only. The corresponding substochastic kernel over m steps is then defined
iteratively:
                                      
           u(m) (θ (m) | θ (0) , C) =   u(m−1) (θ | θ (0) , C)u(θ (m) | θ , C) dν(θ)
                                                 

                                               + u(m−1) (θ (m) | θ (0) , C)r(θ (m) | C)
                                               + [r(θ (0) | C)]m−1 u(θ (m) | θ (0) , C).

This describes all m-step transitions that involve at least one accepted move.

   Definition 4.5.1 An invariant kernel for a Markov chain with transition kernel
u(θ ∗ | θ , C) is a nonnegative function k(θ | C) with support  that satisfies
                                   
                    k(θ | C)                u(θ ∗ | θ , C) dν(θ ∗ ) + r(θ | C)IA (θ ) dν(θ )
                                       A
                        
                    =           k(θ | C) dν(θ) = K(A | C)
                            A

for all ν-measurable A.

  Definition 4.5.2 The transition kernel u(θ ∗ | θ, C) is p-irreducible if for all
θ ∈ , K(A | C) > 0 implies that P (θ (m) ∈ A | θ (0) , C) > 0 for some m ≥ 1.
 (0)


    Situations like the one shown in Figure 4.2a, where the support is disconnected
and the Markov chain is the Gibbs sampler, cannot arise if u is p-irreducible.
Referring to Figure 4.2a, note that if θ (0) ∈ 1 , it is impossible that θ (m) ∈ 2 for
any m > 0. At best there are two invariant distributions, one for 1 reached if
θ (0) ∈ 1 , and one for 2 reached if θ (0) ∈ 2 .
                                            ∗
                              r−1kernel u(θ | θ, C) is aperiodic if(0)
   Definition 4.5.3 The transition                                   there exists
no ν-measurable partition  = s=0 s (r ≥ 2) such that for some θ ∈ 

                                 P (θ (m) ∈ m mod(r) | θ (0) , C) = 1 ∀ m.
SOME CONTINUOUS STATE SPACE MARKOV CHAIN THEORY                                        135

    Definition 4.5.4 The transition kernel u(θ ∗ | θ , C) is Harris recurrent if for
all ν-measurable A with A k(θ | C) dν(θ ) > 0, all θ (0) ∈ , and all L < ∞
                                  M                                
                                   
                        lim P               IA (θ   (m)
                                                          ) ≤ L | C = 0.             (4.28)
                       M→∞
                                      m=1

   It follows at once that if a transition kernel is Harris recurrent, then it is
p-irreducible.
   An invariant kernel k(θ | C) is defined only up to an arbitrary scaling constant.
Recall from Section 3.2 that if a kernel is finitely integrable, then it is proper. In
this case there is a unique probability density p(θ | C) corresponding to k(θ | C).

    Definition 4.5.5 If an aperiodic and Harris recurrent transition kernel u(θ ∗ |
θ , C) has a proper invariant kernel, then u is ergodic.

   Theorem 4.5.1 Convergence of Continuous State Markov Chains Suppose
that k(θ | C) is an invariant kernel of the transition kernel u(θ ∗ | θ , C).

  (a) If u is p-irreducible, then the invariant kernel is unique up to a scaling
      factor.
  (b) If u is p-irreducible and aperiodic and the invariant kernel is proper, then
      there exists a set                                                       
                          ⊆  with  p(θ | C) dν(θ ) = 1 such that if θ (0) ∈ ,
                                      
      then
                         
                             (m)                        
                     lim    u (θ | θ (0) , C) − p(θ | C) dν(θ ) = 0.      (4.29)
                        
                    m→∞ 


                                                                     = .
       If u is ergodic (i.e., if it is also Harris recurrent), then 
   (c) If u is ergodic, then for all θ ∈  and all functions g(θ) such that  |g(θ )|
                                       (0)

       p(θ | C) dν(θ ) < ∞, we obtain

                                
                                M                        
                           −1                     a.s.
                       M              g(θ   (m)
                                                  )→          g(θ )p(θ | C) dν(θ).   (4.30)
                                m=1                       


   Proof: Conclusions (a) and (b) follow immediately from Theorem 1 and con-
clusion (c) from Theorem 3, both in Tierney (1994).

   Observe that if the transition kernel u is ergodic, then the invariant distribution
is unique and (4.29) and (4.30) both obtain.
   In using simulation methods for Bayesian inference we are concerned with
vectors of interest ω, and functions h(ω), that are not deterministic functions of θ .
Theorem 4.5.1 can be extended immediately to include these cases.

  Theorem 4.5.2 Convergence of a Vector of Interest with Continuous State
Markov Chains Suppose that {θ (m) } is ergodic with invariant density p(θ | I )
136                                                                            POSTERIOR SIMULATION



and ω(m) ∼ p(ω | θ (m) , I ). Then {θ (m) , ω(m) } is ergodic with invariant density p(θ |
I )p(ω | θ, I ).

   Proof: Since {θ (m) } is aperiodic, {θ (m) , ω(m) } must be also. Let G be any sub-
set of  ×  such that G p(θ | I )p(ω | θ , I ) dν(ω) dν(θ ) > 0, and let N be any
positive integer. Let D = A × B ⊆ G, such that p(ω ∈ B | θ, I ) ≥ ε > 0 ∀ θ ∈ A.
Then

                       
                       M                            
                                                    M
                             IG (θ (m) , ω(m) ) ≥         ID (θ (m) , ω(m) )
                       m=1                          m=1

but
                                                                      
                                   M
                                              (m)     (m)
                                     ID (θ , ω )  ε    
                   lim P         m=1
                                  M              > | C  = 1.
                  M→∞                         (m)
                                         IA (θ )   2
                                       m=1


Since (4.28) is true for L = [2N/ε] + 1, {θ (m) , ω(m) } is Harris recurrent.

  An ergodic Markov chain can be used to compute simulation-consistent approx-
imations of Bayes actions, in exactly the same way as was the case for direct
sampling (Theorem 4.1.2).

   Theorem 4.5.3 Approximation of Bayes Actions by MCMC Sampling Sup-
pose that in the Markov chain C the sequence {θ (m) , ω(m) } is ergodic with invariant
density p(θ | I )p(ω | θ , I ). Let L(a, ω) ≥ 0 be a loss function defined on A × 
and suppose that the risk function
                                 
                    R(a) =           L(a, ω)p(θ )p(ω | θ ) dθ dω
                                      

has a strict global minimum at 
                               a ∈ A ⊆ Rm . Suppose further that for a suitably
defined open neighborhood of 
                             a, N (
                                   a ):
                       (m) p
   1. M −1 M m=1 L(a, ω    ) → R(a) uniformly on N ( a ).
   2. ∂L(a, ω)/∂a exists and is a continuous function of a, for all ω ∈  and all
      a ∈ N (
             a ).
                                           
   Let AM be the set of all roots of M −1 M  m=1 ∂L(a, ω
                                                          (m)
                                                              )/∂a = 0. Then for any
ε > 0, limM→∞ P [infa∈AM (a −  a) (a − 
                                         a) > ε | C] = 0.

   Proof: The result follows from Amemiya (1985), Theorem 4.1.2.

  Condition 1 can make this result somewhat more awkward to apply than
Theorems 4.1.2 or 4.2.3. Although it must be verified for the problem at hand,
SOME CONTINUOUS STATE SPACE MARKOV CHAIN THEORY                                     137

it can be expected to apply widely. For example, if in the invariant density
p(θ | I )p(ω | θ , I ) has moments at least of order n and L(a, ω) is a polynomial
of order n in ω, then condition 1 is satisfied.
    Section 4.3 demonstrated how to construct an MCMC algorithm for which spec-
ified p(θ | I ) is an invariant density. In order to use the realization from such an
algorithm to provide a simulation-consistent approximation of a moment under
p(θ | I ), it is necessary to show that the transition density of the algorithm is
ergodic. Direct application of Theorem 4.5.1 can be somewhat tedious. For the
Gibbs sampler and the Hastings–Metropolis algorithm there are respective suffi-
cient conditions for ergodicity that are easier to verify. These conditions are stronger
than those in Theorem 4.5.1, but they are often satisfied in practice.


4.5.1 Convergence of the Gibbs Sampler
Suppose that a Gibbs sampler is constructed from a specified probability density
p(θ | I ) as described in Section 4.3.1, producing the transition density p(θ (m) |
θ (m−1) , G) defined in (4.14). If θ (0) ∈ , then p(θ | I ) is an invariant density of
p(θ (m) | θ (m−1) , G) as shown in Section 4.3.1. It remains to establish that the den-
sity of interest p(θ | I ) is the unique invariant density of the Markov chain, and
the sense in which the chain converges. The following result is immediate and is
often easy to apply.

  Corollary 4.5.1 A First Sufficient Condition for Convergence of the Gibbs
Sampler Suppose that for every point θ ∈  and every ν-measurable A ⊆ 
                                           
                   p(θ | I ) dν(θ ) > 0 ⇒           p(θ ∗ | θ , G) dν(θ ∗ ) > 0.
               A                                A

Then the transition kernel of the Gibbs sampler G is ergodic.

Example 4.5.1 Convergence of the Gibbs Sampler in the Normal Linear
Regression Model Corollary 4.5.1 establishes the ergodicity of the Gibbs sam-
pler in Example 4.3.1. To turn to a common but more difficult variant, consider
the special case of the restricted normal linear regression model of Examples
4.2.1 and 4.3.2, in which S = {β : ai ≤ β i ≤ wi (i = 1, . . . , k)}, where −∞ ≤ ai <
wi ≤ ∞(i = 1, . . . , k). The Gibbs sampler can be used to draw from the posterior
distribution, with a full blocking on each β j as well as h. Corollary 4.5.1 estab-
lishes convergence (but Theorem 4.5.4, below, does not). Section 5.3 treats this
model, and some variants on it, in detail.

   An alternative to Corollary 4.5.1 is provided by Roberts and Smith (1994).

    Theorem 4.5.4 A Second Sufficient Condition for Convergence of the Gibbs
Sampler Suppose that θ | I is absolutely continuous and the following three con-
ditions are satisfied:
138                                                                                POSTERIOR SIMULATION


   1. The invariant density p(θ | I ) is lower semicontinuous; that is, for all θ with
      p(θ | I ) > 0, there exists an open neighborhood Nθ of θ and ε > 0 such that
      for all θ ∗ ∈ Nθ , p(θ ∗ | I ) ≥ 0.
   2. For every point θ ∗ ∈  and each block b of the Gibbs sampler, there exists
      an open neighborhood N (θ ∗(−b) ) of θ ∗(−b) and a bounded function c(θ (−b) )
      such that for all θ (−b) ∈ N (θ ∗(−b) )
                        
                                   p(θ ∗(<b) , θ (b) , θ ∗(>b) | I ) dθ (b) ≤ c(θ ∗(−b) ).
                            (b)

   3.  is connected.

   Then the transition kernel of the Gibbs sampler is ergodic.

   Proof: See Theorem 2 of Roberts and Smith (1994).

   Theorem 4.5.4 rules out situations like the one shown in Figure 4.2b, where the
support of the posterior density is a closed set. For any point θ on the boundary
there is no open neighborhood Nθ such that for all θ ∗ ∈ Nθ , p(θ ∗ | I ) is bounded
away from 0.

Example 4.5.2 Convergence of the Gibbs Sampler in a Normal Linear Regres-
sion Model with Weak Inequality Constraints Consider the normal linear re-
gression model

                yt ∼ N (β 1 + β 2 xt2 + β 3 xt3 , h−1 ) (t = 1, . . . , T ),
                   β  = (β 1 , β 2 , β 3 ) ∼ N (β, H−1 ), s 2 h ∼ χ 2 (ν),

subject to the constraint 0 < β 2 + β 3 < 1. If a Gibbs sampler with the four blocks
β 1 , β 2 , β 3 , h is used, then Theorem 4.5.4 establishes ergodicity but Corollary 4.5.1
does not. On the other hand, suppose that the model is recast as

            yt ∼ N [γ 1 + γ 2 xt2 + γ 3 (xt3 − xt2 ), h−1 ] (t = 1, . . . , T ),
            γ  = (γ 1 , γ 2 , γ 3 ) ∼ N (Aβ, AH−1 A ), s 2 h ∼ χ 2 (ν),

subject to the constraint 0 < γ 2 < 1, where
                                            
                                        1 0 0
                                  A = 0 1 1 .
                                        0 0 1

Then a Gibbs sampler with the three blocks (γ 1 , γ 3 ), γ 2 , and h can be used, and
either Corollary 4.5.1 or Theorem 4.5.4 establishes ergodicity. This is a particular
case of linear inequality constraints in the normal linear regression model taken up
in Section 5.3.
SOME CONTINUOUS STATE SPACE MARKOV CHAIN THEORY                                   139

   Tierney (1994) discusses weaker conditions for convergence of the Gibbs sam-
pler. However, the conditions stated here are satisfied for a wide range of problems
in econometrics and statistics and are substantially easier to verify.

4.5.2 Convergence of the Metropolis–Hastings Algorithm
Tierney (1994) and Roberts and Smith (1994) show that the convergence properties
of the Metropolis–Hastings algorithm are inherited from those of q(θ ∗ | θ , H ); if q
is aperiodic and p-irreducible, then so is the Metropolis–Hastings algorithm. This
feature leads to a sufficient condition for convergence analogous to Corollary 4.5.1.

   Theorem 4.5.5 A First Sufficient Condition for Convergence of the Metro-
polis–Hastings Algorithm Suppose that for every point θ ∈  and every A ⊆ 
with the property A p(θ | I ) dν(θ ) > 0, it is the case that
                          
                               q(θ ∗ | θ, H ) dν(θ ∗ ) > 0.
                             A

Then the transition kernel of the Metropolis–Hastings algorithm is ergodic.

   Proof: See Tierney (1994), Corollary 2.

   The condition in Theorem 4.5.5 may be restated as requiring that if θ is in
the support of p(θ | I ), then the support of q(θ ∗ | θ , H ) includes the support
of p(θ | I ). This condition is satisfied for many Metropolis–Hastings algorithms,
which are therefore ergodic.

Example 4.5.3 Some Generically Ergodic Metropolis–Hastings Algorithms
Example 4.3.2 introduced the specific case of a random-walk Metropolis–Hastings
chain in which q(θ ∗ | θ , H ) is the N (θ, V) density. Since the support of this den-
sity is Rk , this algorithm satisfies the condition in Theorem 4.5.5. Any Metropolis
independence chain q(θ ∗ | θ, H ) = q(θ ∗ | H ) in which the support of q includes
the support of p(θ | I ) is also ergodic. As should be clear from previous dis-
cussion—Example 4.3.2 in the former case and Section 4.2 in the latter—this
condition provides no assurance that the algorithm is sufficiently efficient to be
practical. Further analytical work, trial computations, or both are needed to provide
a form of the algorithm that is practical in each case.

   A complementary sufficient condition for convergence of Metropolis–Hastings
chains is provided by the following result, which is analogous to Theorem 4.5.4
for the Gibbs sampler.

    Theorem 4.5.6 A Second Sufficient Condition for Convergence of the Metro-
polis–Hastings Algorithm Suppose that for all pairs (θ, θ ∗ ) ∈  × , p(θ | I )
and q(θ ∗ | θ , H ) are positive and continuous. Then the Metropolis–Hastings tran-
sition kernel is ergodic.
140                                                                     POSTERIOR SIMULATION


   Proof: See Mengersen and Tweedie (1996), Lemmas 1.1 and 1.2.

Exercise 4.5.1 Simulation from the Bivariate Normal Distribution                   (This is a
                                                 i.i.d.
continuation of Exercise 4.1.2.) Suppose (x, y) ∼ N (µ,) with
                               
                                 µ1           σ σ
                         µ=          ,    = 11 12 .
                                 µ2           σ 12 σ 22

Let ε(m)
     j (j = 1, 2; m = 1, 2, . . .) denote mutually independent, standard normal
random variables. The function of interest is
                                
                                  (x 2 + y 2 )1/2 if x 2 + y 2 < 1
                   f (x, y) =                                      .
                                  1 if x 2 + y 2 ≥ 1a

   (a) Consider the simulation

             x (m) = µ1 + (σ 12 /σ 22 )(y (m−1) − µ2 ) + (σ 11 − σ 212 /σ 22 )1/2 ε(m)
                                                                                   1 ,

             y (m) = µ2 + (σ 12 /σ 11 )(x (m) − µ1 ) + (σ 22 − σ 212 /σ 11 )1/2 ε(m)
                                                                                 2 ,

       with y (0) ∼ N (µ2 , σ 22 ). Show that

                                   
                                   M
                                                        a.s.
                            M −1         f (x (m) , y (m) ) → E[f (x, y)].
                                   m=1

  (b) Derive the correlation coefficient between x (m) and x (m+1) in (a). [Recall
      that in the algorithm in Exercise 4.1.2, x (m) and x (m+1) are uncorrelated.]

Exercise 4.5.2 Convergence of MCMC with an Inequality-Constrained
Support Return to the algorithms you constructed in Exercise 4.3.3.

  (a) Show that the Markov chain is ergodic, where the posterior is the unique
      invariant distribution in each case.
  (b) Suppose that the inequality restrictions in parts (b) and (c) of Exercise 4.3.3
      were weak rather than strong. Modify the Markov chain appropriately, and
      show that it is ergodic.

Exercise 4.5.3 Identification, Proper Posteriors, and MCMC This problem
asks you to carry out some exercises with a simple normal model. The main
lesson to be drawn is in part (e): MCMC algorithms can be constructed in mod-
els where the posterior distribution does not even exist, if one is careless. Part
(b) illustrates how a model that is unidentified in the conventional sense that
p(y | θ A1 , A) = p(y | θ A2 , A) for θ A1 = θ A2 can still have a posterior distribution
for all parameters, given a proper prior. [For more on identification in a Bayesian
context, see Poirier (1998).] If you have had exposure to the ideas of integration
and cointegration in time series, then the sense in which an invariant distribution
does not exist in part (e) should be quite clear.
SOME CONTINUOUS STATE SPACE MARKOV CHAIN THEORY                                       141

                                       i.i.d.
  (a) Suppose yt | (µ, A) ∼ N (µ, 1) (t = 1, . . . , T ) and µ | A ∼ N (0, λ−1 ).
      Derive µ | (yo , A).
  (b) Now consider the model

               µ | B ∼ N (0, λ−1 I2 ), yt | (µ, B) ∼ N (µ1 + µ2 , 1).
                                                            i.i.d.



       Derive µ | (yo , B).
                                                  i.i.d.
  (c) Consider the model yt | (µ, C) ∼ N (µ1 + µ2 , 1) with an improper prior
      distribution p(µ | A) ∝ 1 ∀ µ ∈ R2 . Show that the posterior distribution is
      improper.
  (d) Derive the distributions µ1 | (yo , µ2 , C) and µ2 | (yo , µ1 , C). Note that each
      is proper.
  (e) Construct a Gibbs sampling algorithm based on your work in (d):

                                          µ(m)             (m−1)
                                           1 ∼ p(µ1 | y , µ2
                                                       o
                                                                 , C),
                                          µ(m)             (m)
                                           2 ∼ p(µ2 | y , µ1 , C).
                                                       o


       Show that
                                       i.i.d.
       (i) µ(m)  (m−1)
            2 = µ2     + ζ m where ζ m ∼ N (0, 2T −1 ).
                              i.i.d.
       (ii) µ(m)  (m)
             1 + µ2   ∼ N (y o , T −1 ).

Exercise 4.5.4 Economic Decisionmaking A stochastic production relation is
modeled as

            yt = β 1 + β 2 xt1 + β 3 xt2 + β 4 xt1
                                                2
                                                   + β 5 xt2
                                                          2
                                                             + β 6 xt1 xt2 + εt ,   (4.31)

                  εt ∼ N (0, h−1 ),
                     i.i.d.



where yt is output and xt1 and xt2 are the two inputs treated as ancillary statistics
in the model. The prior distribution has two independent components:

                      β = (β 1 , β 2 , β 3 , β 4 , β 5 , β 6 ) ∼ N (β, H−1 )       (4.32)
                    s 2 h ∼ χ 2 (ν).

The distribution in (4.32) is subject to the further restrictions that

              E(y | x) = β 1 + β 2 x1 + β 3 x2 + β 4 x12 + β 5 x22 + β 6 x1 x2

is a strictly concave function for all x = (x1 , x2 ) > 0, and that there exists x∗ > 0
such that E(y | x∗ ) ≥ E(y | x) for all x > 0.

  (a) Carefully express the posterior density kernel for this model.
142                                                                           POSTERIOR SIMULATION


  (b) We could use any one of several posterior simulators in this model. Describe
      two different posterior simulators. What considerations will be important in
      determining which is more efficient? (A good answer will have nontrivial
      differences in the two simulators, plus a substantial discussion of efficiency.)
  (c) Suppose that you have completed (a) and (b) and have posterior simulator
      output {β (m) , h(m) } (m = 1, . . . , M) using all the data for periods 1 through
      T . The manager of the firm using the production relation (4.31) knows
      output price pT +1 and input prices rT +1,1 and rT +1,2 for xT +1,1 and xT +1,2 ,
      respectively, in period T + 1. He must choose xT +1,1 and xT +1,2 before
      observing εT +1 . (Inputs cannot be negative.) The manager’s objective is to
      choose xT +1,1 and xT +1,2 so as to maximize

         E{U (π T +1 ) | [(yt , xt1 , xt2 ) (t = 1, . . . , T ), pT +1 , rT +1,1 , rT +1,2 ]},

       where π T +1 = pT +1 yT +1 − rT +1,1 xT +1,1 − rT +1,2 xT +1,2 and U (·) is a mono-
       tone increasing, strictly concave function with first and second derivatives
       that are easy to compute. Indicate how you would solve the manager’s
       problem using the output of the posterior simulator described in (b).


4.6 HYBRID MARKOV CHAIN MONTE CARLO METHODS

The utility of Monte Carlo methods in Bayesian inference stems in great part
from combinations of algorithms. Example 4.2.4 showed that a hybrid importance
and acceptance sampling algorithm could be more efficient than either algorithm
alone. The addition of MCMC algorithms widens the scope for combination. These
hybrid algorithms not only increase efficiency. More importantly, they can provide
elegant yet practical solutions of difficult problems in the construction of posterior
simulators. This section examines two such hybrid algorithms.

4.6.1 Transition Mixtures
In the context of the Metropolis–Hastings algorithm, suppose that there are J dif-
ferent transition probability densities q(θ ∗ | θ, Hj ) that might be used. A transition
mixture chooses randomly between the J densities q(θ ∗ | θ, Hj ) with respective
choice probabilities π j assigned to the densities. The probabilities π j are constant
and do not depend on θ :

                                               
                                               J
                           q(θ ∗ | θ , H ) =           π j q(θ ∗ | θ, Hj ).
                                                j =1

Once density j is selected, a candidate θ ∗ is drawn from q(θ ∗ | θ, Hj ), and is
accepted with probability
                                              p(θ ∗ | I )/q(θ ∗ | θ , Hj )
                 α(θ ∗ | θ, Hj ) = min                                     ,1 .                  (4.33)
                                              p(θ | I )/q(θ | θ ∗ , Hj )
HYBRID MARKOV CHAIN MONTE CARLO METHODS                                                              143

Note that only the chosen transition density enters (4.33): the other densities and
the choice probabilities π j are irrelevant to acceptance or rejection of the candidate
once the transition density has been selected.
   To see that p(θ | I ) is an invariant density of the transition mixture, note that
the reversibility condition is

                                 
                                 J
                     p(θ | I )          π j q(θ ∗ | θ , Hj )α(θ ∗ | θ, Hj )
                                 j =1

                                           
                                           J
                         = p(θ ∗ | I )            π j q(θ | θ ∗ , Hj )α(θ | θ ∗ , Hj ).
                                           j =1

This condition holds if

              p(θ | I )q(θ ∗ | θ , Hj )α(θ ∗ | θ , Hj )
                  = p(θ ∗ | I )q(θ | θ ∗ , Hj )α(θ | θ ∗ , Hj ) (j = 1, . . . , J ).            (4.34)

Condition (4.34) leads to (4.33), just as (4.21) led to (4.15).
    Transition mixtures can be powerful tools in building posterior simulators that
are ergodic and robust to ill-behaved posterior distributions. To see how ergodicity
arises, note that if the support of at least one q(θ ∗ | θ , Hj ) includes the support
of p(θ | I ), then the same is true of the transition mixture. Theorem 4.5.5 then
implies that the transition mixture kernel is ergodic. [Tierney (1994) shows that it
is sufficient that just one of the transition kernels be ergodic.]

4.6.2 Metropolis within Gibbs
Suppose that in attempting to implement a Gibbs sampling algorithm, a conditional
density p(θ (b) | θ −(b) , I ) is intractable. The density is not of any known form,
and efficient acceptance sampling algorithms are not at hand. This problem can
be addressed by applying the Metropolis–Hastings algorithm in block b of the
Gibbs sampler while treating the other blocks in the usual way. Specifically, let
q(θ ∗(b) | θ , Hb ) be the density (indexed by θ ) from which candidate θ ∗(b) is drawn. At
iteration m, block b, of the Gibbs sampler draw θ ∗(b) ∼ q(θ ∗(b) | θ (m)       (m−1)
                                                                      <(b) , θ >(b−1) , Hb ),
             (m)     ∗
and set θ (b) = θ (b) with probability
                                       
     α θ ∗(b) | θ (m)      (m−1)
                  <(b) , θ >(b−1) , Hb
                     (m) ∗                                                                  
                                            (m−1)
                       p θ <(b) , θ (b) , θ >(b)  | I /q θ ∗(b) | θ (m)       (m−1)
                                                                    <(b) , θ >(b−1) , Hb
        = min                                   (m−1) (m) ∗                               , 1
                     p θ (m)        (m−1)
                           <(b) , θ >(b−1) | I /q θ (b)
                                                                                  (m−1)
                                                             | θ <(b) , θ (b) , θ >(b)  , Hb

                         ∗
If θ (m)                              (m)     (m−1)
     (b) is not set to θ (b) , then θ (b) = θ (b)   . The procedure for θ (b) is exactly the
same as for a standard Metropolis step, except that θ (−b) also enters the density p
and transition density q. It is usually called a Metropolis within Gibbs step.
144                                                                                                POSTERIOR SIMULATION


   To see that p(θ | I ) is an invariant density of this Markov chain, consider the
simple case of two blocks with a Metropolis within Gibbs step in the second
block. Adapting the notation of (4.19), describe the Metropolis step for the second
block by

      p(θ ∗(2) | θ (1) , θ (2) , H2 ) = u(θ ∗(2) | θ (1) , θ (2) , H2 ) + r(θ (2) | θ (1) , H2 )δ θ (2) (θ ∗(2) )

where

      u(θ ∗(2) | θ (1) , θ (2) , H2 ) = α(θ ∗(2) | θ (1) , θ (2) , H2 )q(θ ∗(2) | θ (1) , θ (2) , H2 )

and
                                                          
                   r(θ (2) | θ (1) , H2 ) = 1 −                    u(θ ∗(2) | θ (1) , θ (2) , H2 ) dν(θ ∗(2) ).        (4.35)
                                                              2


The one-step transition density for the entire chain is

                        p(θ ∗ | θ , G) = p(θ ∗(1) | θ (2) , I )p(θ ∗(2) | θ (1) , θ (2) , H2 )

Then p(θ | I ) is an invariant density of p(θ ∗ | θ , G) if
                                
                                        p(θ | I )p(θ ∗ | θ , G) dν(θ) = p(θ ∗ | I ).                                   (4.36)
                                    

   To establish (4.36), begin by expanding the left side:
                                                                 
                            ∗
        p(θ | I )p(θ | θ , G) dν(θ) =                                    p(θ (1) , θ (2) | I ) dν(θ (1) )p(θ ∗(1) | θ (2) , I )
                                                             2    1

         · [u(θ ∗(2) | θ ∗(1) , θ (2) , H2 ) + r(θ (2) | θ ∗(1) , H2 )δ θ (2) (θ ∗(2) )] dν(θ (2) )
         
       =      p(θ (2) | I )p(θ ∗(1) | θ (2) | I )u(θ ∗(2) | θ ∗(1) , θ (2) , H2 ) dν(θ (2) )                           (4.37)
             2
              
          +            p(θ (2) | I )p(θ ∗(1) | θ (2) | I )r(θ (2) | θ ∗(1) , H2 )δ θ (2) (θ ∗(2) ) dν(θ (2) ). (4.38)
                  2


In (4.37) and (4.38) we have utilized the fact that
                                    
                    p(θ (2) | I ) =   p(θ (1) , θ (2) | I ) dν(θ (1) ).
                                                         1


Using Bayes rule (4.37) is the same as
                                
            p(θ ∗(1) | I )              p(θ (2) | θ ∗(1) , I )u(θ ∗(2) | θ ∗(1) , θ (2) , H2 ) dν(θ (2) ).             (4.39)
                                2
NUMERICAL ACCURACY AND CONVERGENCE IN MARKOV CHAIN MONTE CARLO                                                   145

Carrying out the integration in (4.38) yields

                           p(θ ∗(2) | I )p(θ ∗(1) | θ ∗(2) | I )r(θ ∗(2) | θ ∗(1) , H2 ).                     (4.40)

   Recalling the reversibility of the Metropolis step, we obtain

  p(θ (2) | θ ∗(1) , I )u(θ ∗(2) | θ ∗(1) , θ (2) , H2 ) = p(θ ∗(2) | θ ∗(1) , I )u(θ (2) | θ ∗(1) , θ ∗(2) , H2 ),

and so (4.39) becomes
                                                  
          p(θ ∗(1) | I )p(θ ∗(2) | θ ∗(1) , I )        u(θ (2) | θ ∗(1) , θ ∗(2) , H2 ) dν(θ (2) ).           (4.41)
                                                  2

We can express (4.40) as

                                   p(θ ∗(1) , θ ∗(2) | I )r(θ ∗(2) | θ ∗(1) , H2 ).                           (4.42)

Finally, recalling (4.35), the sum of (4.41) and (4.42) is p(θ ∗(1) , θ ∗(2) | I ), thus estab-
lishing (4.36).
    This demonstration of invariance applies to the Gibbs sampler with b blocks,
with a Metropolis within Gibbs step for one block, simply through the convention
that Metropolis within Gibbs is used in the last block of each iteration. Metropo-
lis within Gibbs steps can be used for several blocks, as well. The argument
for invariance proceeds by mathematical induction, and the details are the same.
Ergodicity can generally be established in the same way as for Gibbs samplers
generally; Corollary 4.5.1 often applies. Section 7.1 provides a specific example of
the Metropolis within Gibbs algorithm.


4.7 NUMERICAL ACCURACY AND CONVERGENCE IN MARKOV
CHAIN MONTE CARLO

In any practical application we are concerned with the discrepancy between a pos-
terior moment h and its numerical approximation from a posterior simulator with
                (M)
M iterations, h . If the sequence {h(ω(m) )} were i.i.d., this discrepancy could be
evaluated by means of a conventional central limit theorem and the resulting numer-
ical standard error (NSE, defined on p. 107) and the efficiency of the algorithm
could be assessed using the estimated relative numerical efficiency (RNE, defined
on p. 117). Serial correlation in {h(ω(m) )} is inherent in Markov chain Monte Carlo,
                                                                                    (M)
however, and so the need to evaluate numerical accuracy of the approximation h
must be evaluated afresh. The serial dependence in MCMC algorithms also raises
the prospect that if the initial value θ (0) is remote from the posterior distribution,
                 (M)
then, although h     → h, early values of h(ω(m) ) may be atypical and approxima-
tions would be improved by discarding these early values. The issue here is what
constitutes “early” and eliminating the possibility that M is still “early” in the
146                                                                                                   POSTERIOR SIMULATION


sequence. This issue is often referred to as “convergence.” There is a substantial
literature on the practical aspects of these issues. Key works include Gelman and
Rubin (1992), Geweke (1992), Geyer (1992), Cowles and Carlin (1996), Gelman
(1996), Brooks and Gelman (1998), and Brooks and Roberts (1998).
    To illustrate the issues, consider the Gibbs sampling algorithm for a normal
distribution of the random variables (x, y), one block for x and one for y. (See
Exercise 4.5.1.) Figure 4.3 illustrates the first 400 iterations from two distributions,
each with mean zero and unit variances for x and y. In the first distribution [panels
(a) and (b)] the correlation between x and y is ρ = 0.90 and in the second dis-
tribution [panels (c) and (d)] it is ρ = 0.99. Highest-density regions of size 0.2,
0.4, 0.6, 0.8, and 0.95 are indicated in panels (a) and (c). Panels (a) and (c) show
(x, y) values from every other iteration, with the first 100 iterations indicated by
a cross and the last 300 by a solid point. Panels (b) and (d) show the values of
x in each iteration. In each case the starting value is x = y = 8. Values this far
from the mean are improbable for either distribution, and this will often be the
case in research applications. The values chosen here represent that situation, and


        8                                                                     8


        6                                                                     6


        4
                                                                              4
y




                                                                     y




        2
                                                                              2

        0
                                                                              0

        −2
                                                                             −2
                 −4   −2         0      2       4    6     8                  −4      −2     0    2         4    6     8
                                         x                                                             x
                                          (a)                                                         (c)

        7                                                                    8
        6                                                                    7
        5                                                                    6
        4                                                                    5
        3                                                                    4
                                                                     x (m)
x (m)




        2                                                                    3
        1                                                                    2
        0                                                                    1
        −1                                                                   0
        −2                                                                   −1
        −3                                                                   −2
             0             100            200        300       400                0        100        200        300       400
                                     iteration (m)                                               iteration (m)
                                         (b)                                                           (d)

Figure 4.3. Output of a Gibbs sampler for a bivariate normal (x, y), blocked in x and y: ρ = 0.9,
every second of 400 iterations (a) and x values of all iterations (b); ρ = 0.99, every second of 400
iterations (c) and x values of all iterations (d).
NUMERICAL ACCURACY AND CONVERGENCE IN MARKOV CHAIN MONTE CARLO                      147

illustrate the implications for convergence. In the first case, ρ = 0.90, values of
x and y have become representative of the bivariate distribution well before the
100th iteration. In the second case, ρ = 0.99, all the first 100 iterates are in the
positive orthant, and in the next 300 draws there are more iterates in the positive
than the negative orthant. This comparison illustrates the point that convergence
questions arise from the serial dependence in the Markov chain: the greater the
serial dependence, the longer it will take for the chain to become representative of
the invariant distribution, other things the same.
    We will proceed by first developing some tools for computing NSE and RNE,
under the assumption that the sequence {θ (m) , ω(m) } is stationary. Since the initial
simulation θ (0) is not drawn from the posterior distribution and the sequence is seri-
ally dependent, this is not literally true. However, the analysis of the stationary case
leads to some analytical tools that are useful in addressing the convergence ques-
tion. The foundation for evaluating numerical accuracy is a central limit theorem
for continuous state space Markov chains.

    Definition 4.7.1 Suppose that a Markov chain C has n-step transition proba-
bility P n (A | θ , C) = P (θ (n) ∈ A | θ (0) = θ, C), defined on all ν-measurable sets
A, and unique invariant probability P (A | C). The Markov chain is uniformly
ergodic if
                       !                                 "
                                                      
                    sup sup P n (A | θ, C) − P (A | C) ≤ Lr n                  (4.43)
                    θ ∈   A


for some L > 0 and some positive r < 1.

   Tierney (1994, p. 1714) derives two results that are useful in establishing uni-
form ergodicity. First, an independence Metropolis chain with bounded weight
function w(θ ) = p(θ | I )/p(θ | H ) is uniformly ergodic. (Recalling the similarity
between the independence Metropolis kernel and importance sampling, and the
discussion about bounded weight functions following Theorem 4.2.2, this result
is not surprising.) Second, if one kernel in a transition mixture (Section 4.6.1) is
uniformly ergodic, then the mixture kernel itself is uniformly ergodic. Thus for any
Markov chain {θ (m) } we could in principle guarantee (4.43) by mixing the chain
with an independence Metropolis kernel with a bounded weight function, as long
as the posterior mean and variance were known to exist. If the likelihood function
is bounded, then the prior distribution itself will provide such an independence
transition kernel. The practical difficulty with this approach is that in most prob-
lems draws from the prior will rarely be accepted, and it is often difficult to find an
independence kernel that overcomes this difficulty. Thus attention typically focuses
directly on the unmixed MCMC algorithm.

  Theorem 4.7.1 A Central Limit Theorem for MCMC Approximation of
Moments Suppose that {θ (m) } is uniformly ergodic with unique invariant density
p(θ | I ). Let ω(m) ∼p(ω | θ (m) , I ), suppose that E[h(ω) | I ] = h and var[h(ω) | I ]
148                                                                            POSTERIOR SIMULATION


                                 (M)              M
exist and are finite, and let h         = M −1        m=1 h(ω
                                                                (m)
                                                                      ). Then there exists finite τ 2
such that
                                          (M)          d
                               M 1/2 (h         − h) → N (0, τ 2 ).                           (4.44)

   Proof: The same proof used for Theorem 4.5.2 shows that uniform ergodicity
of {θ (m) } implies uniform ergodicity of {θ (m) , ω(m) }. The result is then Theorem 5
of Tierney (1994).

    Theorem 4.7.2 A Central Limit Theorem for MCMC Approximation of Bayes
Actions In addition to the assumptions of Theorem 4.5.3, suppose further that
θ (m) is uniformly ergodic, and that for a suitably defined open neighborhood of 
                                                                                 a,
N (a ):

   1. ∂ 2 L(a, ω)/∂a ∂a exists and is a continuous function of a, for all ω ∈  and
      all a ∈ N (
                 a).
          −1/2
               M                          d
   2. M         m=1 ∂L(a, ω
                             (m)
                                 )/∂a|a=a → N (0, B), where B is a nonnegative def-
      inite matrix.
   3. H = E[∂ 2 L(a, ω)/∂a ∂a |a=a | I ] exists and is finite and nonsingular.
   4. For any ε > 0, there exists Mε such that
                                                  
                P     sup ∂ 3 L(a, ω)/∂ai ∂aj ∂ak  < Mε | I ≥ 1 − ε
                    a∈N (
                         a)


      for all i, j, k = 1, . . . , m.

                                                                 p
   Then if 
           aM is any element of AM such that 
                                             aM → 
                                                  a,

                                                  d
                           M 1/2 (    a ) → N (0, H−1 BH−1 ).
                                  aM −                                                       (4.45)

   Proof: The result is an application of Theorem 4.1.3 of Amemiya (1985).

   To apply (4.44) or (4.45) in assessing numerical accuracy it is necessary to find
                   a.s.
a statistic 
            τ 2(M) → τ 2 as was done for independence and importance sampling. An
analogous approximation for the matrix B in condition 2 of Theorem 4.7.2 is also
necessary. There are several approaches to this task. If we are willing to replicate the
MCMC computations beginning with a randomly chosen θ (0)     A each time, comparison
of the results provides a basis for approximation of τ 2 ; see Chan and Geyer (1994)
and Chauveau and Diebolt (2000). The same ends can be accomplished by initiating
several chains in the midst of the original chain, a process known as “splitting and
regeneration”; see Mykland et al. (1995) and Robert (1995). The approach we take
here uses a single chain, building on the following result, which is a staple of time
series econometrics.
NUMERICAL ACCURACY AND CONVERGENCE IN MARKOV CHAIN MONTE CARLO                              149

   Theorem 4.7.3 Numerical Standard Errors for MCMC Suppose that
{h(ω(m) )} in Theorem 4.7.1 is a stationary process with autocovariance function

                cj = cov[h(ω(m) ), h(ω(m−j ) )] (j = 0, ±1, ±2, . . .)
                                     
and spectral density function S(λ) = ∞ j =−∞ cj cos(λj ). If S(λ) is bounded uni-
formly
∞      both    above and away from zero  on [0, π], then in (4.44), τ 2 = S(0) =
   j =−∞ cj . If


                              
                              M
                                                    (M)                   (M)
              cj(M) = M −1
                                   [h(ω(m) ) − h         ][h(ω(m−j ) ) − h     ]
                             m=j +1


and L(M) is an integer-valued function for which limM→∞ L(M) = ∞ while
limM→∞ L(M)2 /M = 0, then

                                      
                                      L−1
        τ 2(M) = 
                                                                 a.s.
                       c0(M) + 2
                 S(0) =                    [(L − s)/L]
                                                       cs(M) → S(0) = τ 2 .               (4.46)
                                      s=1


   Proof: See Newey and West (1987).

   The condition on the spectral density function in Theorem 4.7.3 guarantees
cj = cov[h(ω(m) ), h(ω(m−j ) )] decays rapidly enough with increasing
                                                                        j that it is
possible to obtain a consistent approximation of τ 2 = S(0) = ∞     j =−∞ cj . Given
a modest strengthening of this condition, it is possible to investigate the question
of whether the mean of h(ω(m) ) is the same over different segments of the entire
simulation {h(ω(m) )}.

   Theorem 4.7.4 Separated Partial Means Test for MCMC                        In addition to the
assumptions of Theorems 4.7.1 and 4.7.3, suppose also that
                              
                             cj  < c0 ρ j (j = 1, 2, . . .)                             (4.47)

for some ρ ∈ [0, 1). Let p be a fixed positive integer. For each M such that
Mp = M/2p is an integer, define the p separated partial means:


                 (M)          
                              Mp
               hj,p = Mp−1         h(ω(m+M(2j −1)/2p) ) (j = 1, . . . , p).
                             m=1


                                                           (M)
    τ 2(M)
Let  j,p  be the estimate of τ 2 computed for hj,p described in Theorem 4.7.3
                                                      (M)                           (M)     (M)
(j = 1, . . . , p). Define the (p − 1) × 1 vector hp        with j th element hj +1,p − hj,p ,
150                                                                      POSTERIOR SIMULATION



and the (p − 1) × (p − 1) tridiagonal matrix   V(M)
                                                  p  in which (M)
                                                              vjj  = Mp−1 (
                                                                           τ 2(M)
                                                                             j,p +
  2(M)                               −1 2(M)

τ j +1,p ) and vj,j −1 = vj −1,j = −Mp 
                                       τ j,p . Then

                                  [
                           (M)         −1 (M) d
                          hp       V(M)
                                    p ] hp    → χ 2 (p − 1).                            (4.48)

                                                                                (M)
    Proof: Theorem 4.7.1 implies that any linear combination of hj,p has a lim-
iting normal distribution, and consequently [see Rao (1965), Theorem 2c.5(iv)]
  (M)
hp has a limiting multivariate normal distribution. It remains only to show that
                    (M)   (M)
limMp →∞ Mp cov[hj,p , hk,p ] = 0 ∀ j = k. By virtue of (4.47)

                          c0   2|j −k|Mp +n−m
                               Mp Mp
                                                    c0   2Mp +n−m
                                                       Mp Mp
           (M)    (M) 
   Mp cov[hj,p , hk,p ] <            ρ          ≤            ρ
                            Mp m=1 n=1              Mp m=1 n=1

                                  
                                  Mp
                                                             
                                                             Mp
                                                                              c0 ρ Mp
                          < c0          ρ 2Mp −m = c0 ρ Mp         ρ m−1 <            → 0.
                                  m=1                        m=1
                                                                             (1 − ρ)

    Application of the partial means test involves choosing p as well as M. The
theorem requires that p be fixed. Thus, for example, if we choose p = 4, then if
M = 1,000 the partial means are based on iterations 126–250, 376–500, 626–750,
and 876–1000, whereas if M = 40,000, the partial means are based on 5001–
10,000, 15,001–20,000, 25,001–30,000, and 35,001–40,000. The test will have
power in two situations of particular concern in the application of MCMC. In the
first h(ω(m) ) exhibits nonstationary or near-nonstationary behavior, such as that in
a random walk or random walk with drift. In this situation RNE computed from
the entire sequence {h(ω(m) )} will also be quite low. The problem may be that
serial correlation is still strong with a separation of M iterations, or, perhaps, that
a limiting distribution does not exist (see Exercise 4.5.3).
    The second situation in which the separated partial means test has power helps
to address the convergence question and identify a number of initial iterations B
to discard before computing a final approximation hM−B . In this case the separated
                                                                 (M)
partial means test may fail because the first partial mean h1,p reflects sensitivity
to initial conditions and is therefore atypical of the rest of the sequence. This may
be confirmed by examining a plot of the sequence {h(ω(m) )} or of a sequence of
separated partial means. We may also conduct an obvious variant of the separated
partial means test that compares a smaller number M1 of early iterations with a
larger number M2 of later iterations, taking care that the two groups are separated
by omitted iterations, typically at least M1 . The Bayesian analysis, computation, and
communication (BACC) software, introduced in Section 5.1, handles the choice of
L in Theorem 4.7.3 and makes these kinds of comparisons easy.
    The separated partial means test with p = 2, applied to the 400 iterations of
the Gibbs sampler illustrated in panels (a) and (b) of Figure 4.3, yields a value of
1.79; the corresponding p value from the χ 2 (1) distribution is .181. Since the test
compares the means for iterations 101–200 and 301–400, this is consistent with
NUMERICAL ACCURACY AND CONVERGENCE IN MARKOV CHAIN MONTE CARLO                               151

omitting the first 100 iterations and proceeding with the remainder as being negligi-
bly influenced by the starting value and representative of the invariant distribution.
When the same test is applied in the situation illustrated in panels (c) and (d) of
Figure 4.3, the outcome is 29.29; the corresponding p value is 6.24 × 10−8 . This
strong rejection is consistent with visual inspection of panels (c) and (d) and our
earlier conclusions about convergence problems when ρ = 0.99. In this same situ-
ation, using M = 10,000 iterations and a separated partial means test with p = 4,
the separated partial means test statistic is 1.66, near the median of the χ 2 (3) dis-
tribution. This result would support a decision to discard the first 1250 iterations,
and proceed with the remaining 8750 for further analysis.
    These procedures are all based on a single sequence, or run, of MCMC draws.
Assessment of accuracy and convergence from single runs is inherently limited.
Figure 4.2a illustrates an extreme case inwhich a single run would never detect the
fact that the chain is reducible. Practical problems can arise from near-reducibility
of the Markov chain. Consider the Gibbs sampler with blocks θ (1) = θ 1 and θ (2) =
θ 2 in the case of a multimodal bivariate posterior density like the one portrayed
in Figure 4.4. In that case there is substantial serial correlation and sensitivity to
the initial condition, since the probability that θ (m) will be near one of the two
major modes conditional on θ (m−j ) being near the other is quite small, even if j is
quite large. If it is possible to conduct multiple runs of MCMC draws with random
initial draws θ (0) , then such problems can be detected, but only if the draws θ (0)
are sufficiently dispersed that they have significant probability of being near each



            6



            4



            2



            0
      q2




           −2



           −4



           −6
             −6          −4          −2           0             2           4            6
                                                  q1

       Figure 4.4. A multimodal probability density function ill-suited to Gibbs sampling.
152                                                            POSTERIOR SIMULATION


of the two major modes in situations like the one illustrated in Figure 4.4. Theorem
4.7.4 may be applied to independent runs from initial conditions, using the means
of the different runs (perhaps after discarding some initial draws) in place of the
separated partial means. In this application the theorem exploits the fact that hM
together with its NSE provides a prediction of the approximation based on an
independent realization of the same Markov chain.
CHAPTER 5




      Linear Models


Chapter 2 developed the idea of a complete model, or a complete sequence of mod-
els, as an abstract and flexible framework for Bayesian inference. The specification
of a complete sequence of models A = {A1 , . . . , AJ } is

                                         p(Aj | A),                               (5.1)
                                        p(θ Aj | Aj ),                            (5.2)
                                      p(y | θ Aj , Aj ),                          (5.3)
                                     p(ω | y,θ Aj , Aj ),                         (5.4)

where j = 1, . . . , J . In (5.1)–(5.4) Aj denotes the model j , θ Aj the kAj × 1 vector
of unobservables in model j , y the vector of observables common to all J models,
and ω the common vector of interest. In many applications the investigator’s final
or intermediate objective is to determine p(ω | yo , A), where yo is the observed
value of y (the data). This and the next two chapters present some specifications
of functional forms (5.3) for the conditional distribution of observables.
   This chapter concentrates on practical issues surrounding the use of the linear
model and some important extensions of that model. It begins in Section 5.1 by
introducing mathematical applications software incorporating the posterior simula-
tors described in the previous chapter, and illustrates its use in the context of the
normal linear model first introduced in Example 2.1.2. This illustration also shows
how the output from a posterior simulator can be used in a decisionmaking context.
The chapter continues with the seemingly unrelated regressions model, which has
played a central role in econometrics and can be regarded as a multivariate gener-
alization of the normal linear model. Section 5.3 takes up the common and related
problems of choosing a subset of covariates from a large set of potential covariates,
and enforcing inequality constraints on the coefficients of a linear model. Finally,
Section 5.4 develops two ways in which the normal linear model can be extended


Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.

                                                                                    153
154                                                                    LINEAR MODELS


to specify regressions that are nonlinear in the covariates, while remaining a special
case of the model first introduced in Example 2.1.2.


5.1 BACC AND THE NORMAL LINEAR REGRESSION MODEL

The Bayesian analysis, computation, and communication (BACC) software pro-
vides convenient tools for using the models described in this chapter and many of
the posterior simulation methods described in Chapter 4. An important feature of
the BACC software is that it implements its tools as extensions of the mathemat-
ical applications Matlab, Gauss, Splus, and R, running under several variants of
Windows, Unix, and Linux operating systems. It provides a seamless integration
of special-purpose BACC commands with built-in general-purpose commands for
computation, graphics, and program flow control. The user has available a number
of models, which describe the joint distribution of observables and unobservables
(5.2)–(5.3). The user creates model instances by selecting one of the models and
supplying values for its known quantities—the data, and the fixed parameters of
the prior distribution. BACC incorporates most of the models discussed in this and
the next two chapters. It provides prior and posterior simulation using the methods
described in Chapter 4, as well as simulation facilities for model comparison, spec-
ification analysis, communication, and robustness analysis described in Chapter 8.
    The BACC software is available free of charge through the companion Website
described in the preface. This site also provides complete instructions for installa-
tion, documentation, and tutorials. The online help features of Matlab, Gauss, Splus,
and R include the BACC extensions once they are installed. The online appendix
provides code and output for all the examples in this book that use BACC software.
The code is heavily annotated to introduce the reader to the use of mathematical
applications software for Bayesian analysis generally, and to BACC in particular.
After installing BACC and running the test programs described in the companion
Website, it is instructive to execute the code for the examples in this section. By
editing the code for the examples, the reader can rapidly gain familiarity and con-
fidence with the software. Editing the code for the examples is also the easiest way
to approach many of the exercises that require computing.

Example 5.1.1 The Impact of Class Size on Test Scores (The online appendix
contains data, annotated code, and output for this example.) An important decision
made by school boards and school district superintendents is the ratio of students
to teachers. A lower ratio is thought to improve education, including test scores on
standardized examinations that are increasingly used to evaluate school districts.
A lower ratio certainly requires spending more money on teachers’ salaries and
supporting infrastructure such as classrooms. Some states have systematically col-
lected district data on test scores, student : teacher ratios, and other factors that
may affect educational outcomes including test scores.
BACC AND THE NORMAL LINEAR REGRESSION MODEL                                       155

    The Massachusetts Comprehensive Assessment System (MCAS) test is admin-
istered to all fourth-graders in Massachusetts public schools each spring. The test
score data used in this example is the average total score from the 1998 exam-
ination in each of the 220 Massachusetts elementary school districts. These data
were obtained from the Massachusetts Department of Education, as were data on
the student : teacher ratio (str), the percentage of students still learning English
(el), and the percentage of students receiving a subsidized lunch in each district
(lunch). In addition data on the average district per capita income were obtained
from the 1990 U.S. census and are coded as the logarithm of income in thousands
of dollars (income).
    This example illustrates the use of mathematical applications software and
BACC in creating a complete model to support decisionmaking regarding stu-
dent : teacher ratios. To get the most out of the example, the reader should follow
the code and execute the commands while reading. We begin by finding some
summary statistics to gain familiarity with the data, as follows:


                   Mean       Median          SDa           Minimum         Maximum

str                17.34       17.1            2.278          11.4             27.0
el                  1.13        0              2.90            0               24.49
lunch              15.32       10.55          15.06            0.40            76.20
income              2.89        2.84           0.27            2.27             3.85
score             709.83      711             15.13          658              740
a Standard deviation.




    The sample distributions of the percentage of students still learning English
and the percentage of students receiving a subsidized lunch are strongly positively
skewed. The student : teacher ratio is rounded to the nearest one-tenth in the
data, ranges from 11.4 to 27, and has a somewhat positively skewed distribution.
After transformation to logarithms average district income has a nearly symmetric
distribution. Average district income is almost 5 times higher in some districts than
in others. The distribution of test scores is close to normal with a mean of about
710 and standard deviation of about 15.
    This example uses a normal linear regression model with str, el, lunch, and
income as covariates, and score as the outcome. (Examples 5.4.1–5.4.4 examine
and elaborate on this specification.) The prior distribution about to be described
reflects the assumption that the model approximates a relationship between average
test score and the covariates that applies at the observed values of the covariates,
and at those points permits a substantial range of behavior. For each observed
combination of covariates xt , the scalar E(yt | xt , A) = β  xt is a random variable
a priori. The prior takes E(β  xt | A) = µ = E(yt | A) = 710, which implies that
the prior mean of the intercept β 1 is µ, while the prior mean of each covariate
156                                                                         LINEAR MODELS


coefficient is 0. The prior distribution of the linear combinations β  xt is multivariate
normal, with cov(β  xt , β  xs ) = 0 for all combinations t = s. If sample size T were
the same as the number of covariates k, then the variance associated with each
β  xt would be σ 2 = var(yt | A). In order to retain the same notional sample size
regardless of T , var(β  xt ) = T σ 2 /k. Thus in general the prior distribution of β is

                               β |(X, A) ∼ N (β, H−1 ),

with
              H = (k/T σ 2 )X X, β = (X X)−1 X ιT µ = (µ, 0, . . . , 0) .

(The idea of using the covariate matrix to construct a prior distribution for regres-
sion coefficients was introduced in econometrics by Zellner (1986b).) The prior
distribution of the precision h derives from choosing the hyperparameter σ 2 =
var(yt | A) = 152 , and considering the population multiple correlation coefficient
R 2 = 1 − (σ 2 h)−1 . If (3/σ 2 )h | A ∼ χ 2 (1), then 1 − [σ 2 E(h | A)]−1 is about two-
thirds, and the prior probability that R 2 exceeds .90 is approximately .25.
    Recall from Example 4.3.1 that the Gibbs sampling algorithm for the normal
linear model, which is used by BACC, has excellent convergence properties and
almost no serial correlation. Hence we use only 100 burn-in iterations, followed
by 100,000 draws from the posterior distribution. (This should all take only a few
seconds on a desktop or laptop computer.) BACC can provide detailed information
about the approximation of any function of interest, illustrated here for the coef-
ficient of str, which is central in subsequent analysis (mean, −0.6843; standard
deviation, 0.2636):


                                                  Accuracy of Approximation
                                              Numerical                 Relative
Method                                      Standard Error         Numerical Efficiency

Assuming no serial correlation              8.3364 × 10−4                  1.0000
Autocovariance function tapered             7.6772 × 10−4                  1.1791
  to 1.00%
Autocovariance function tapered             7.1833 × 10−4                  1.3468
  to 2.00%
Autocovariance function tapered             7.1066 × 10−4                  1.3760
  to 3.00%


There are four alternative approximations of the numerical standard error. The first
assumes that the function of interest (here, the coefficient of str) is serially uncor-
related. This is generally not the case in MCMC algorithms. The other three approx-
imations use the methods described in Section 4.7, specifically in Theorem 4.7.3,
BACC AND THE NORMAL LINEAR REGRESSION MODEL                                             157

with L = 0.01M, L = 0.02M, and L = 0.03M. All of these methods indicate that
relative numerical efficiency is close to 1. This reflects the fact that the Gibbs
sampling algorithm of Example 4.3.1 for the normal linear model displays very lit-
tle serial correlation. This is confirmed by the separated partial means test developed
in Theorem 4.7.4, applied here to the str coefficient.


    Method                                               Test Statistic p Value

    Assuming no serial correlation                                .896
    Autocovariance function tapered to 1.00%                      .896
    Autocovariance function tapered to 2.00%                      .894
    Autocovariance function tapered to 3.00%                      .895


We can then compare the prior and posterior moments of the unobservables, as
follows:

                                         Prior                           Posterior
Unobservable                    Mean             SD              Mean                  SD

intercept coefficient            710         120.23             682.61               10.551
str coefficient                    0           3.0163           −0.6843               0.2636
el coefficient                     0           3.1937           −0.4086               0.2788
lunch coefficient                  0           0.7746           −0.5173               0.0678
income coefficient                 0          33.818             16.418               2.964
h−1/2                             —             —                 8.716               0.422


Note that the ratio of prior to posterior standard deviation is the same for each
coefficient. This is due to fact that H ∝ X X, and the ratio is approximately [1 +
(hT σ 2 /k)]1/2 .
    The marginal likelihood of the normal linear model can be calculated in two
ways. A generic simulation method described in Section 8.2.4 provides the approx-
imation −805.8185 of the log marginal likelihood, with a numerical standard error
of .0030. An essentially exact calculation, using (2.80) and one-dimensional quadra-
ture, is −805.8189. This value will be important in comparing this model with some
variants introduced in Section 5.4.
    The sensitivity of the posterior distribution to the prior distribution can be studied
in a number of ways, as discussed in Section 3.3. One of the simplest is to vary the
hyperparameters of the prior distribution. In a “weak prior” variant of the model,
H is reduced by a factor of 5, and in a “strong prior” variant it is increased by a
factor of 5. The direction of the impact on the posterior means of the coefficients
is predictable because H ∝ X X.
158                                                                      LINEAR MODELS




                                         Posterior Means with Prior
                    Least                                                         Prior
Coefficient        Squares         “Weak”          Original        “Strong”       Mean

intercept         682.4316        682.4691        682.6081        683.4652         710
str               −0.6892         −0.6885         −0.6843         −0.6633            0
el                −0.4107         −0.4104         −0.4086         −0.3962            0
lunch             −0.5215         −0.5205         −0.5173         −0.5022            0
income             16.5294         16.5076         16.4178         15.9102           0


The effect on the marginal likelihood cannot be anticipated. It turns out that the log
marginal likelihood with the “weak” prior is −808.4703 and with the “strong” prior,
is −808.4148. The Bayes factor in favor of the original specification, relative to
either alternative, is about 13.9. Recall the discussion at the end of Section 3.2 that
as H → 0, marginal likelihood is driven to zero. At the other extreme a dogmatic
prior β = β would produce a very poor fit and consequently also a very small
marginal likelihood.

    Example 5.1.1 incorporates two of the three elements of a complete model—the
prior distribution and the observables distribution. These elements provide the pos-
terior distribution, and Example 5.1.1 shows how posterior simulation methods
and mathematical applications software can provide a useful representation of the
posterior. This representation is exactly what we need to address the decision-
making problems that motivate Bayesian analysis in the first place, as discussed in
Chapter 1. The next example carries the previous example forward to two variants
of a specific decision making problem.

Example 5.1.2 Deciding on Class Size (The online appendix contains data,
annotated code, and output for this example.) The determination of class size in pub-
lic schools is a political and fiscal decision whose details vary from state to state and
district to district. Regardless of the details, the decision ultimately made balances
the fact that, given the number of students in the district, a lower student : teacher
ratio is more costly, against the perception that a lower student : teacher ratio
also increases the quality of education. The results in Example 5.1.1 support this
perception, to the extent that we are willing to identify higher test scores with
increased quality of education. The effect is not large: E(β 2 | yo , X, A) = −0.6827
implies that the difference between the highest student : teacher ratio of 27 and
the lowest student : teacher ratio of 11.4 in the 220 Massachusetts elementary
school districts accounts for a difference in test scores of about 10.6, considerably
less than the sample standard deviation in test scores. Moreover, the distribution
β 2 | (yo , X, A) implies substantial uncertainty about this effect. In this example we
consider two loss functions that, together with the posterior distribution developed
in Example 5.1.1, enable us to derive the corresponding optimal student : teacher
ratio—the Bayes action.
BACC AND THE NORMAL LINEAR REGRESSION MODEL                                        159

    The first loss function assigns a dollar value to the test score of each student.
(This could represent either a social consensus manifest in local school boards, or
it could be an explicit subsidy provided from the state of Massachusetts to local
school districts.) Let T be the number of teachers in the school district and S the
number of students. Suppose that the cost of each teacher is c, including not only
the teacher’s salary and benefits but also the annual cost of the additional facilities
and support required for each teacher. Let d be the value placed by the school
district on each test point for each student in each year. Then the loss function is
cT − dS ω, where ω is the average test score in the district. (The notation reflects
the fact that average test score is the vector of interest.) Dividing by S, we obtain
the equivalent loss function
                                              c
                                 L(a, ω) =      − dω                              (5.5)
                                              a
where a is the student : teacher ratio (the Bayes action, in this decision prob-
lem). We shall refer to (5.5) as the “average score” loss function. In the model
of Example 5.1.1, ω = γ + βa + ε, where γ denotes the effect of all covariates
other than the student : teacher ratio, and is specific to each school district. The
expected loss is
                                              c
                        E[L(a, ω) | data] =     − d(γ + βa),
                                              a
where the overbars denote posterior means. Simple calculus shows that the Bayes
action is a = (−c/dβ)1/2 . For example, if c = $100,000, d = $250, and β = −1,
then a = 20. The Bayes action depends only on the relative values of c and d.
   This computation is simple, and it is easy to use alternative assumptions about
c/d and alternative prior distributions. Continuing where we left off in Example
5.1.1, we easily find the following Bayes actions.


                                    Bayes Action a for c/d =
                Prior             150            200           250

                “Weak”          14.7604        17.0438       19.0556
                Original        14.8056        17.0961       19.1140
                “Strong”        15.0379        17.3642       19.4138

Changing the prior precision by a factor of 5 has a small effect on the Bayes
action. On the other hand, changes in c and d are important. If the annual cost of a
teacher and supporting staff and facilities is $100,000, then the difference between
valuing each test score point per student at $500 as opposed to $400 accounts for
a decrease in the optimal student : teacher ratio from 19 to 17. (Recall that 17 is
the mean student : teacher ratio for all districts.) Similarly, if c = $100,000 and
d = $500, a 10% increase in teacher costs would result in almost one more student
per class, on average.
160                                                                        LINEAR MODELS


    An alternative approach to examining sensitivity to the prior distribution is to
vary the prior over the density ratio class, as discussed in Section 3.3. (Section 8.5
presents the corresponding computations.) For the stated prior density p(θ A | A),
BACC computes upper and lower bounds on posterior moments over all prior densi-
ties with a kernel k(θ A | A) satisfying r −1 · p(θ A | A) ≤ k(θ A | A) ≤ r · k(θ A | A),
for specified r > 1. In the case of the average score loss function (5.5) the Bayes
action a varies inversely with β 2 . Therefore bounds on a may be derived from
those on β 2 . For r = 2, 4, 8, we find


       Density Ratio Factor r             2             4              8

       Lower bound on a               14.0773        15.5338        16.6720
       Upper bound on a               15.6607        19.2508        23.0857

   In the alternative loss function the school district receives a cash transfer of d
dollars per student if the average test score in the district exceeds a target t. Then
                                          c
                              L(a, ω) =     + dI[0,t] (ω).                         (5.6)
                                          a
We shall refer to (5.6) as the “threshold average score” loss function. Conditional
on the unobservables β and h, we obtain
                        c
 E[L(a, ω) | γ , β, h] =  + dP(γ + βa + ε ≤ t)
                        a
                        c                      c
                       = + dP(ε ≤ t − γ − βa) = + d[h1/2 (t − γ − βa)],
                        a                      a
where (·) is the cdf of the standard normal distribution. Then the applicable risk
function is
                                
                          c
E[L(a, ω) | yo , X, A] = + d         [h1/2 (t − γ − βa)]p(γ , β, h | yo , X, A)dθ A ,
                         a        A


where θ A = (γ , β, h) . The first-order condition is
                  
         −c
             −d         φ[h1/2 (t − γ − βa)]h1/2 βp(γ , β, h | yo , X, A)dθ A
          a2        A

                 −c
             =      − dE{φ[h1/2 (t − γ − βa)]h1/2 β | yo , X, A} = 0.              (5.7)
                 a2
Note that covariates other than the student : teacher ratio affect the Bayes action,
given the threshold average score loss function, whereas they did not, given the
average score loss function.
BACC AND THE NORMAL LINEAR REGRESSION MODEL                                       161

   Given the output of the posterior simulator, an approximation of (5.7) is

           −c        M
                  −1
              − dM       φ[h(m)1/2 (t − γ (m) − β (m) a)]h(m)1/2 β (m) = 0.      (5.8)
           a2        m=1

The root of (5.8) can be found by evaluating the left side of the expression over a
suitable range of potential actions and then interpolating. (Theorems 4.5.3 and 4.7.2
provide the formal justification for this procedure.) From (5.8) the result depends
on the parameters of the loss function only through the ratio c/d. Suppose the
target test score is t = 710. Then Bayes actions for a hypothetical school district
with sample median values of el, lunch, and income, which enter through γ , are
as follows:

             c/d                      30             40            50

             Bayes action a        16.3734        17.9941       19.6036

Exercises 5.1.2 and 5.1.4 explore the sensitivity and interpretation of these results.

Exercise 5.1.1 Prior Sensitivity in Example 5.1.1 This exercise explores in
greater detail some of the findings about prior sensitivity in Example 5.1.1.

  (a) By experimenting with appropriate variations of the coefficient vector
      prior precision matrix H, demonstrate that marginal likelihood is mono-
      tone decreasing for values of H larger than that used in the “strong prior”
      as well as for values of H smaller than that used in the “weak prior.” (It is
      easiest to answer these questions by modifying the code for Example 5.1.1.)
  (b) Why does the Bayes action a for the average score loss function (5.5)
      increase as the prior precision of β increases? (Remember that β =
      (µ, 0, . . . , 0) in all of these prior distributions.)
  (c) In the examples given for the average score loss function (5.5), why did the
      variation of the prior distribution within the density ratio class have a much
      more substantial impact on the Bayes action than did the variation in H?

Exercise 5.1.2 Prior Sensitivity in Example 5.1.2 Explore the sensitivity to the
prior distribution of the Bayes action a for the loss function (5.6) to variations in
the prior distribution, in the same way as was done for the loss function (5.5) in
Example 5.1.2.

Exercise 5.1.3 Predictive Distributions Consider two hypothetical school dis-
tricts, one with str = 15 and the other with str = 20. The values of all other
covariates are the sample medians. Let ω denote the difference between the average
test score in the school district with str = 20 and the district with str = 15.
162                                                                   LINEAR MODELS


  (a) Find the predictive mean and standard deviation of ω.
  (b) Fix the values of the coefficients β at the least-squares estimates b and
      fix the value of σ 2 = h−1 at σ 2 = (yo − Xb) (yo − Xb)/(T − k). Find the
      corresponding mean and standard deviation of ω. This computation ignores
      the uncertainty about the unobservables in the model. Compare the results
      with those in part (a).
  (c) Find P (ω > 0 | yo , X, A).

Exercise 5.1.4 Interpreting Observed Student : Teacher Ratios in Example
5.1.2 There is substantial variation in the average student : teacher ratio across
school districts. This exercise investigates the extent to which these ratios can be
interpreted as Bayes actions in the context of Example 5.1.2.

  (a) In the case of the average score loss function (5.5), the Bayes action does
      not depend on the values of the covariates (el, lunch, income). If str is a
      Bayes action, then observed variation in str can be due only to the variation
      in c/d. Find the value of c/d corresponding to the student : teacher ratio
      in each district and display the result as a histogram.
  (b) In the case of the threshold average score loss function (5.6) the Bayes
      action depends on el,lunch, and income. Determine the Bayes action
      corresponding to c/d = 40 in each school district.
  (c) Are the Bayes actions in part (b) positively correlated with the observed
      student : teacher ratios across school districts?
  (d) Is there a value of c/d in each school district that fully accounts for the
      observed values of str in the case of the threshold average score loss
      function (5.6)? If so, is there more, or less, variation in this ratio than was
      the case in part (a) of this exercise?

Exercise 5.1.5 A Second Decision Problem in Example 5.1.2 The data spread-
sheet provided for Examples 5.1.1 and 5.1.2 also includes, in column 16, the
average teacher’s salary in each school district. In this example, assume that the
cost of each teacher is twice the teacher’s salary.

  (a) Assuming that str is the Bayes action, find the value of d in each school
      district, for the average score loss function (5.5).
  (b) Are the values of d found in (a) systematically related to the covariates el,
      lunch, and income?


5.2 SEEMINGLY UNRELATED REGRESSIONS MODELS

The seemingly unrelated regressions (SUR) model developed in Zellner (1962) is
perhaps the most widely used econometric model after linear regression. The reason
is that it provides a simple and useful representation of systems of demand equations
that arise in neoclassical static theories of producer and consumer behavior.
SEEMINGLY UNRELATED REGRESSIONS MODELS                                                 163

   Two widely applied models in the theory of production provide examples
of the SUR model. If the m × 1 vector w denotes factor prices facing a pro-
ducer of output y with cost function c(w, y), then from Shephard’s lemma
(Varian 1992, Section 5.4) the corresponding m × 1 vector of factor demands is
x(w, y) = ∂c(w, y)/∂w. Given a functional form for c(w, y), factor demands can
be derived explicitly.
   The generalized Leontieff (or Diewert) cost function (Varian 1992, Section
12.10) is

                                       
                                       m 
                                         m
                                                      1/2   1/2
                                                                      
                                                                      m
                     c(w, y) = y                  bij wi wj       +          wi εi
                                       i=1 j =1                        i=1


where bij = bji , and, defining ε = (ε1 , . . . , εm ) , ε |(w, y) ∼ N (0, ). Then

                                
                                m
                xi (w, y) = y          bij (wj /wi )1/2 + εi (i = 1, . . . , m).
                                j =1

Note that there are m equations, each of which individually satisfies the observables
specification in the normal linear regression model, but that most parameters appear
in two equations and the disturbance terms in the different equations are allowed
to be correlated.
   The translog cost function (Varian 1992, Section 8.4) is

                                  
                                  m
                                               1 
                                                            m      m
            log c(w, y) = a0 +     ai log wi +            bij log wi log wj
                               i=1
                                               2 i=1 j =1

                                           
                                           m
                            + log y +             log(wi )εi
                                            i=1
           m
in which     i=1 ai = 1, ε |(w, y) ∼ N (0, ), and for all i = 1, . . . , m:

                                                            
                                                            m
                        bij = bji (j = 1, . . . , m),              bij = 0.
                                                            j =1

Since ∂ log c(w, y)/∂ log wi = [∂c(w, y)/∂wi ] · (wi /c) (i = 1, . . . , m), the cost
share of the ith factor is

                wi xi (w, y)         m
                             = ai +      bij log wj + εi (i = 1, . . . , m).
                 c(w, y)            j =1

Once again there are m equations, each of which individually satisfies the observ-
ables specification of the normal linear regression model. Most parameters appear
in two equations, and the disturbance terms in the different equations are allowed
to be correlated.
164                                                                                       LINEAR MODELS


   In the seemingly unrelated regressions model, A, the relations of interest are

                                yj = Zj β + εj             (j = 1, . . . , m).
                               T ×1  T ×k


Let
                                                                                
                              y1                       Z1                        ε1
                                                                                
                     y    =  ...  ,            Z =  ...  ,         ε     =  ...  .
                 T m×1                      T m×k                    T m×1
                                  ym                       Zm                        εm

The disturbance vector ε is normally distributed. Components of ε are uncorrelated
across the observations t = 1, . . . , T , but may be correlated across the m equations;
thus, cov(εi , εj ) = σ ij IT and the m × m matrix  = [σ ij ] is positive definite. Then
ε |(β, , Z, A) ∼ N (0,  ⊗ IT ).
   A special case of the SUR model, sometimes the focus of textbook discussions
[see, e.g., Greene (2003), Section 14.2] is

                                yj = Xj β j + εj            (j = 1, . . . , m).                   (5.9)
                               T ×1  T ×kj


In this case
                                                                                      
                                                                       X1 · · · 0
                                                                                      
  Zj =           0
                j −1
             T × i=1 ki
                          Xj        0
                                  T× m               and     Z
                                                                    =  ... . . . ...  .
                                     i=j +1 ki           T m× m   k
                                                               i=1 i
                                                                         0 · · · Xm

To take another special case, for the Leontieff cost function with two inputs
                                                
                       y1 y1 (w21 /w11 )1/2 0
                      ..          ..         .. 
                      .            .          .           
                                                       b11
                      yT yT (w2T /w1T )1/2 0 
                 Z =                                 
                      0 y1 (w11 /w21 )1/2 y1  and β = b12 .
                                                             
               2T ×3                            
                      .                                 b
                      ..         ..         ..          22
                                   .          . 
                        0 yT (w1T /w2T )1/2 yT

In general the SUR model may be written

                                                 y = Zβ + ε,                                     (5.10)
                               ε |(β, H, Z, A) ∼ N (0, H−1 ⊗ IT ).                               (5.11)

The m × m matrix H =  −1 is the precision matrix of the disturbance vector
(ε1t , . . . , εmt ) . The formulation (5.10) permits linear cross-equation constraints on
the coefficients, whereas the more specific case (5.9) does not.
SEEMINGLY UNRELATED REGRESSIONS MODELS                                                165

   From (5.10)–(5.11) the pdf of the observables vector y is

  p(y | β, H, Z, A) = (2π )−T m/2 |H|T /2 exp[−(y − Zβ) (H ⊗ IT )(y − Zβ)/2].
                                                                           (5.12)
Define the residual cross-product terms sij = (yi − Zi β) (yj − Zj β) and m × m
matrix S = [sij ], and observe

                                    
                                    m 
                                      m
 (y − Zβ) (H ⊗ IT )(y − Zβ) =                 (yi − Zi β) (yj − Zj β)hij = tr SH. (5.13)
                                    i=1 j =1
An alternative expression for (5.12) is therefore

              p(y | β, H, Z, A) = (2π )−T m/2 |H|T /2 exp(−tr SH/2).               (5.14)

Define 
       β = [Z (H ⊗ IT )Z]−1 Z (H ⊗ IT )y and observe Z (H ⊗ IT )(y − Z
                                                                         β) = 0.
Hence (5.12) may also be expressed

   p(y | β, H, Z, A) = (2π)−T m/2 |H|T /2 exp[−(y − Z
                                                     β) (H ⊗ IT )(y − Z
                                                                        β)/2]
                        · exp[−(β−
                                  β) Z (H ⊗ IT )Z(β−
                                                      β)/2].                       (5.15)

   If yo replaces y in (5.14) or (5.15), then these expressions, interpreted as func-
tions of β and H, provide alternative representations of the likelihood function.
From (5.15) it then follows that the conditionally conjugate prior distribution for
β is β ∼ N(β, Hβ−1 ):
                                1/2
            p(β |A) = (2π)−k/2 Hβ  exp[−(β − β) Hβ (β − β)/2].                  (5.16)

   The conditionally conjugate prior density function for H has the functional form
(5.14). The kernel is that of the Wishart distribution [see Johnson and Kotz (1972),
Chapter 38 or Anderson (1984), Section 7.2] for m × m random positive definite
matrices A:
                                                  m                    −1
                                                    
                        −νm/2 −m(m−1)/4      −ν/2
         p(A | ) = 2         π          ||             [(ν + 1 − i)/2]
                                                       i=1

                     · |A|(ν−1−m)/2 exp(−tr −1 A/2).                              (5.17)

The corresponding specific distribution is the Wishart distribution with positive
definite matrix parameter  and degrees of freedom parameter ν ≥ m,     usually
denoted A ∼ W (, ν). It is the distribution of the random matrix A = νt=1 xt xt
                           i.i.d.
if ν is an integer and xt ∼ N (0, ), and thus the marginal distribution of aii
is σ −1
     ii aii ∼ χ (ν). This genesis of the Wishart distribution provides a simula-
               2

tion method if ν is an integer. The following algorithm, due to Anderson (1984),
Section 7.2, does not require ν to be an integer and is more efficient unless ν is a
small integer:
166                                                                      LINEAR MODELS


   1. Compute the lower triangular Choleski factorization P of ,  = PP .
   2. Simulate a lower triangular m × m matrix B with mutually independent ele-
      ments: bii2 ∼ χ 2 (ν − i + 1) (i = 1, . . . , m), and bij ∼ N (0, 1)(i > j ).
   3. Let C = BB ; then C ∼ W (Im , ν).
   4. Set A = PCP .

   The conditionally conjugate prior distribution can be expressed H |A ∼ W (S−1 ,
ν), and then
                                               m                −1
                                              
          p(H |A) = 2−νm/2 π −m(m−1)/4 S
                                           ν/2
                                                  [(ν + 1 − i)/2]                  (5.18)
                                                  i=1

                       · |H|(ν−1−m)/2 exp(−tr SH/2).                               (5.19)

The “notional data” interpretation of this prior distribution is the information
about precision from ν i.i.d. m-variate normal observations with sums of squares
and cross-products matrix S. The prior mean of H is νS−1 , and (s jj )−1 hjj | A ∼
χ 2 (ν) (j = 1, . . . , m). This prior distribution is therefore a generalization of the
prior distribution of h in the univariate normal linear model (2.12).
    From (5.15) and (5.16) the conditional posterior density kernel for β is

              p(β | H, yo , Z, A) ∝ exp{−[(β−
                                             β) Z (H ⊗ IT )Z(β−
                                                                 β)
                                     + (β − β) Hβ (β − β)]/2}.

                                                                              −1
Hence the conditional posterior distribution is β |(H, yo , Z, A) ∼ N (β, Hβ ), with

                             Hβ = Hβ + Z (H ⊗ IT )Z

and
           −1                            −1
      β = Hβ [Hβ β + Z (H ⊗ IT )yo ] = Hβ [Hβ β + Z (H ⊗ IT )Z
                                                                β].

From (5.14) and (5.19) the conditional posterior density kernel for H is

         p(H | β, yo , Z, A) ∝ |H|(ν+T −1−m)/2 exp{−tr [(S + S)H]/2},

whence

                      H |(β, yo , Z, A) ∼ W [(S + S)−1 , ν + T ].

    These conditional posterior distributions provide the Gibbs sampling algorithm,
first proposed by Percy (1992). BACC incorporates the seemingly unrelated regres-
sions model using the conjugate prior distribution and posterior simulation algo-
rithm described in this section.
SEEMINGLY UNRELATED REGRESSIONS MODELS                                                     167

Exercise 5.2.1 Missing Data             Suppose that

                       yt = (yt1 , yt2 ) ∼ N (µ, ) (t = 1, . . . , T ).
                                          i.i.d.



Some of the observations ytj are missing at random. (Recall the definition in
Example 2.2.3.)

   (a) Find p(yt1 | yt2 , µ, , A) and p(yt2 | yt1 , µ, , A). (Hint: You may find
       Theorem 5.3.1 useful.)
   (b) Develop a Gibbs sampling posterior simulator for this model, assuming
       conditionally conjugate prior distributions.
   (c) In the context of the model in (b), show that if both yt1 and yt2 are missing
       for given t, then nothing changes if this observation is simply excluded from
       the sample. Is the algorithm in (b) more efficient if observation t is included,
       or if it is excluded?

Exercise 5.2.2 Completing the Argument                   Derive (5.14) and (5.15) from (5.12).

Exercise 5.2.3 The Wishart and Gamma Distributions Show that the Wishart
distribution for 1 × 1 matrices is the gamma distribution. Specifically, if h ∼
W (1/s 2 , ν), then s 2 h ∼ χ 2 (ν).

Exercise 5.2.4 An Auction Application At a second price auction, bids are writ-
ten and sealed. The object is sold to the highest bidder. The sale price is that bid
by the second-highest bidder. Suppose you have data on T auctions, each of which
has the same n bidders. The number n is small (say, 4 or 5) while T is large (say,
100–200). For each auction, you know the identity of the winning bidder and the
price he offered. You also know the identity of the second-highest bidder, and the
price she offered (which in turn is that paid by the winner). You do not know the
bids of the other n − 2 bidders.
   Suppose that your model is

           yit = β i xit + εit (i = 1, . . . , n; t = 1, . . . , T );
           
           ε t = (ε1t , . . . , εnt ) ; εt | (H, A) ∼ N (0, H−1 ) (t = 1, . . . , T ).

   The k × 1 vector xit quantifies characteristics of bidder i and the object offered
at auction t. The n × 1 vector yt = (                  ynt ) contains the valuations of the n
                                           y1t , . . . , 
bidders for the object offered at auction t. A standard result in elementary auction
theory [see, e.g., Fudenberg and Tirole (1995), Example 1.2] is that each bidder
will bid his or her valuation of the object being sold.
   You observe all of the xit (i = 1, . . . , n; t = 1, . . . , T ). But you observe only
the two largest elements of ( y1t , . . . , 
                                             ynt ) as described above. The prior distribu-
tion has two independent components: β |A ∼ N (β, H−1 ) and H |A ∼ W (S−1 , ν).
Construct a posterior simulator that provides random β (m) and H(m) whose invari-
ant distribution is the posterior distribution. [For other auction applications using
168                                                                          LINEAR MODELS


similar tools, see Sareen (1999, 2003), Bajari and Lee (2003), and Albano and
Jouneau-Sion (2004).]

Exercise 5.2.5 Panel Data and Random Coefficients A random coefficients
model for panel data applies to each of n households (i = 1, . . . , n) observed in
each of T time periods (t = 1, . . . , T ). For household i in time period t, we have

                                     yit = β i xit + εit

in which xit is a vector of covariates that may be regarded as fixed or ancil-
lary; εit | (h, A) ∼ N (0, h−1 ); and β i | (β, H, A) ∼ N (β, H−1 ). The nT random
                   i.i.d.                               i.i.d.

unobservable disturbances and the n unobservable random vectors β i are mutually
independent. The observables are (xit , yit ) (i = 1, . . . , n; t = 1, . . . , T ).

  (a) Assume that β, H, and h are independent in the prior distribution. Write
       down a normal prior density for β, a Wishart prior density for H, and a
       gamma prior density for h, including the kernels of these densities.
  (b) Express the probability density function for β 1 , . . . , β n conditional on β
       and H.
  (c) Express the probability density function for yit (i = 1, . . . , n; t = 1, . . . T )
       conditional on β i (i = 1, . . . , n), xit (i = 1, . . . , n; t = 1, . . . T ), and h.
  (d) Using the expressions from (a), (b) and (c), write down the posterior density
       kernel for β, H, h, and β 1 , . . . , β n .
  (e) Formulate a Gibbs sampling algorithm for the posterior distribution. Clearly
       indicate each step.
   (f) Will the Gibbs sampling algorithm in (e) converge to the posterior distribu-
       tion? (Briefly justify your answer.)
  (g) Suppose that you have available x1,T +1 , the covariate vector for the first
       household in the data set in the next period, but not y1,T +1 . Assuming that
       the same model continues to apply to household 1 in period T + 1, show
       how you could use the output of the Gibbs sampler from part (e) to obtain
       draws from the predictive distribution for y1,T +1 .
  (h) Suppose that you have available xn+1,T +1 , the covariate vector in the next
       period, from a household not in the data set, but not yn+1,T +1 . Assuming
       that the same model applies to household n + 1 in period T + 1, as to the
       households and time periods in the data set, show how you could use the
       output of the Gibbs sampler from part (e) to obtain draws from the predictive
       distribution for yn+1,T +1 .

Exercise 5.2.6 Hierarchical Priors and Unbalanced Data in the SUR Model
Suppose that you are interested in a set of relationships

                                    yit = β i xit + εit .
LINEAR CONSTRAINTS IN THE LINEAR MODEL                                                  169

The subscript i denotes countries, the subscript t denotes time, and each covariate
vector xit is k × 1. There are n countries and T time periods, and n is small
relative to T . Here are some alternative specifications of the prior distribution, the
observables distribution, and the observables.

  (a) The prior distribution:
       (i) The coefficient vectors β i are all the same.
      (ii) The coefficient vectors are similar but not identical.
  (b) The observables distribution:
       (i) The disturbances εit are i.i.d. (across both i and t):

                                       εit | (h, A) ∼ N (0, h−1 ).

       (ii) The disturbance vectors εt = (ε1t , . . . , εnt ) are i.i.d.:

                             εt | (H, A) ∼ N (0, H−1 ) (t = 1, . . . , T ).

   (c) The observables:
        (i) {xit , yit } are observed for all i = 1, . . . , n and t = 1, . . . , T .
       (ii) {xit } are observed for all i = 1, . . . , n and t = 1, . . . , T . However, for
            each country i, {yit } is observed for the time periods ti1 , . . . , ti2 , where
            1 ≤ ti1 < ti2 ≤ T .

    The objective in this exercise is to carefully complete the model consisting of
(a.ii) and (b.ii) with a proper prior distribution, derive the posterior distribution
corresponding to this prior distribution and the observed data indicated in (c.ii),
and construct a simulator for this posterior distribution that provides simulation-
consistent approximations of posterior moments.
    If you can do this in one step, then do so. But you may find it easier to consider
simpler variants of the model first [say, (a.i) plus (b.ii) plus (c.i)], and then take
advantage of the “building block” character of many MCMC algorithms. (The
combination of conditions (a.i), (b.ii), and (c.i) is fully covered in this section.)


5.3 LINEAR CONSTRAINTS IN THE LINEAR MODEL

In the normal linear regression model introduced in Example 2.1.2 it is common
to impose, or at least entertain, restrictions on the coefficient vector β that go well
beyond the prior distributions for β considered to this point. This is evident in dis-
cussions of whether coefficient estimates “have the right sign” and in procedures
such as stepwise addition and deletion of covariates. If these restrictions are not
incorporated formally in the specification of the model, then it is impossible to pro-
vide appropriate statements of uncertainty, taking either a Bayesian or non-Bayesian
approach. A case of particular concern is that in which the investigator begins
170                                                                        LINEAR MODELS


with a long list of potential covariates, and then following some data manipulation
(e.g., stepwise deletion of variables) presents least-squares coefficient estimates and
accompanying standard errors. The latter do not have a classical, sampling-theoretic
interpretation, since there is no accounting for outcomes in which other covariates
would have been selected. Nor do they have a Bayesian interpretation even in
the context of Example 3.2.1, because they correspond to a prior distribution that
excludes the deleted covariates with certainty.
    Example 4.2.1 introduced the general problem, and discussed why acceptance
sampling algorithms like those first proposed to handle the problem in Geweke
(1986) are often impractical. Example 4.5.2 and Exercise 4.3.3 took up more spe-
cific algorithms in particular cases. This section generalizes the latter approaches.
While the generalization here includes many of the cases that arise, it is by no
means exhaustive, and approaches similar to the one described here can often be
applied in other instances. The analysis focuses on formulating the prior distri-
bution of β to incorporate the restrictions, and on the posterior distribution of β
conditional on all other parameters in the model as well as the data. Consequently,
application of the analysis here extends well beyond the linear model, to models
that are equivalent to the linear model given suitable conditioning. In particular,
the methods in this section can be used in conjunction with the Gibbs sampling
algorithms developed in Sections 5.2, 6.2, 6.1, 6.4, and 7.1.


5.3.1 Linear Inequality Constraints
As a motivating example, suppose that the observables are the k − 1 inputs
 ∗             ∗
xt2 , . . . , xtk and the output yt∗ from each of T firms. The model incorporates a
Cobb–Douglas production technology

                                                  
                                                  k
                           log yt∗ = log β t1 +          β j log xtj∗ .
                                                  j =2


The unobservable β t1 varies across firms due to different fixed factors for each firm.
For all T firms denote xt1 = 1, xtj = log xtj∗ (j = 2, . . . k), and yt = log(yt∗ ). Take
                                                                                       i.i.d.
X = [xtj ] and let y = (y1 , . . . , yT ) . If model A specifies log β t1 | (β 1 , h, A) ∼
N (β 1 , h−1 ) and the independent prior distributions β |A ∼ N (β, H−1 ) and s 2 h |
A ∼ χ 2 (ν), it is then a special case of the normal linear model of Example 2.1.2.
However, the investigator also believes that β j > 0 (j = 2, . . . , k).
   This example is an instance of a more general set of restrictions

                                       a<β<w                                        (5.20)

in the linear model, where it is understood that elements of a may include −∞, and
those of w may include +∞, as well as real numbers. In the motivating example
a1 = −∞, aj = 0 (j = 2, . . . , k) and wj = ∞ (j = 1, . . . , k). Thus (5.20) includes
the possibility of up to k nonredundant linear inequality restrictions, but no more.
LINEAR CONSTRAINTS IN THE LINEAR MODEL                                                171

Inequalities are taken as strict in (5.20) without loss of generality, since both prior
and posterior distributions of β are absolutely continuous. Inequality restrictions
of the form

                                     a < Dβ < w,                                    (5.21)

with D nonsingular, may be accommodated by appropriate reparametrization of β
and a corresponding transformation of the columns of X (see Exercise 5.3.1).
   The posterior density kernel is that in Example 2.1.2, truncated to the set
{β : a < β < w}. Consider a Gibbs sampling posterior simulation algorithm that is
fully blocked in h, β 1 , . . . , β k . The conditional posterior distribution of h remains
                                                                                       −1
the same, given by (2.25)–(2.26). Conditional on h, X, and y, β ∼ N (β, H ),
with H and β given by (2.19) and (2.20), subject to the restrictions (5.20). In con-
structing the posterior distribution of β j conditional on β i (i = j ), h, X, and yo ,
the following result for the multivariate normal distribution is useful.

  Theorem 5.3.1 Conditional Multivariate Normal Distribution Let
                                                             
      x                             µx                   xx  xy
 z=      ∼ N (µ, ) with µ =               and  =                  .
      y                             µy                   yx  yy
Denote the corresponding precision matrix
                                                
                                  −1     Hxx Hxy
                          H= =                    .
                                         Hyx Hyy
Then the distribution of y conditional on x is normal with variance

                           y·x =  yy −  yx  −1         −1
                                                xx  xy = Hyy                       (5.22)

and mean

              µy·x = µy +  yx  −1                   −1
                                 xx (x − µx ) = µy − Hyy Hyx (x − µx ).             (5.23)

   Proof: The first equalities in (5.22) and (5.23) are derived in many texts on
multivariate statistics; see Anderson (1984), Section 2.5.1 and Johnson and Kotz
(1972), Section 35.3, for examples. The second equalities are then a consequence
of a standard expression for the inverse of the partitioned matrix  (Anderson
1984, Section A.3.2; Greene 2003, Section A.5.3):
                                                                                   
            ( xx −  xy  −1
                            yy  yx )
                                      −1
                                             − −1                     −1
                                                xx  xy ( yy −  yx  xx  xy )
                                                                                 −1
                                                                                      .
       −( yy −  yx  −1         −1      −1
                         xx  xy )  yx  xx     ( yy −  yx  −1
                                                                xx  xy )
                                                                          −1



   Applying Theorem 5.3.1 to the conditional posterior distribution of β j , we obtain
                                                                             
                                                   −1                     −1
   β j | [β i (i = j ), h, yo , X, A] ∼ N β j − hjj   hji (β i − β i ), hjj 
                                                      i=j
172                                                                                LINEAR MODELS


subject to aj < β j < wj . Draws from these truncated univariate normal distribu-
tions may be made efficiently using the algorithm described in Example 4.2.2.
This provides the basis for a Gibbs sampling algorithm, first proposed in Geweke
(1996b).

5.3.2 Conjectured Linear Restrictions, Linear Inequality Constraints,
and Covariate Selection
In the motivating example of Section 5.3.1, suppose that the investigator thinks that
β t1 may be related to some other observable characteristics of the firm. If the firm is
a farm, for instance, these might include a measure of land quality, the educational
attainment of the farm manager, and an indicator of whether the manager is also
the owner. If the investigator assumes a linear relationship between log β t1 and
                                                                   k+p
observable characteristics xt,k+1 , . . . , xt,k+p , then log yt∗ = j =1 β j xtj + εt , where
εt reflects the unobservable determinants of log β t1 . The investigator is uncertain
whether each observable characteristic of the firm really influences log β t1 , given all
the other characteristics and the inputs, but is willing to assume that the influence is
nonnegative. A prior distribution in which β k+1 , . . . , β k+p are mutually independent
and independent of β 1 , . . . , β k might then take the form

                                P (β j = 0 | A) = pj ,

                             β j | (β j = 0, A) ∼ N (β j , hj−1 )

subject to β j > 0 for j = k + 1, . . . , p.
   To provide a general analytical treatment, assume the specification of the normal
linear model of Example 2.1.2, except that in the prior distribution the coeffi-
cients β j are mutually independent: P (β j = 0 | A) = pj , and if β j = 0, then β j ∼
N (β j , h−1
          j ) truncated to aj < β j < wj . As in Section 5.3.1, aj = −∞, wj = ∞,
or both, are possible. The properly normalized prior density of β j is then

  p(β j | A) = p j δ 0 (β j ) + (1 − pj )λj exp[−hj (β j − β j )2 /2]I(aj ,wj ) (β j ),

where δ denotes the Dirac delta function defined in (4.18), and

        λj = {[hj (wj − β j )] − [hj (aj − β j )]}−1 (2π )−1/2 hj ,
                    1/2                      1/2                             1/2



where  is the cdf of the standard normal distribution.
    Because it specifies that the elements of β j are independent a priori, this model
does not include the motivating example, nor does the model in Section 5.3.1 corre-
spond to the special case pj = 0(j = 1, . . . , k). The modifications of the treatment
below are fairly straightforward in each case, but the notation becomes more cum-
bersome. For treatments of more general cases, see George and McCulloch (1993,
1997), Geweke (1996a), Chipman et al. (1998), and Brown et al. (1999). Concen-
trating the prior point mass of β j on β j = 0 is innocuous. As formulated, this
LINEAR CONSTRAINTS IN THE LINEAR MODEL                                                                       173

specification includes the conventional selection of regressors problem, in which
the investigator is uncertain of which in a list of covariates really belongs in a
model, and may also wish to impose sign restrictions. This could be cast as a
model combination problem, but since there are 2k possible models, this approach
becomes unwieldy for more than (say) a half-dozen candidate covariates.
   The posterior distribution can be sampled using a Gibbs sampler fully blocked
in β 1 , . . . , β k , h. The conditional posterior distribution of h is the same as that in
Example 2.1.2. For each β j , we obtain

p[β j | β i (i = j ), h, yo , X, A] ∝ {p j δ 0 (β j )
                                                                                                             
                                                                                     
                                                                                     T
   + (1 − p j )λj exp[−hj (β j − β j ) /2]I(aj ,wj ) (β j )} exp −h
                                               2
                                                                                           (zt − β j xtj ) /2
                                                                                                         2

                                                                                     t=1
                                                                                   (5.24)
                                                                             −1
where zt = yt − i=j β i xti . From (5.24), if β j = 0, then β j ∼ N (β j , hj ) subject
to β j ∈ (aj , wj ), where
                                                                       
                        T
                                            −1               T
          hj = hj + h      xtj and β j = hj hj β j + h
                            2
                                                                  xtj zt .
                           t=1                                             T =1

Furthermore
                                                                                           
                                                                            
                                                                            T
         P [β j = 0 | β i (i = j ), h, y , X, A] ∝ pj exp −h
                                           o
                                                                                     zt2 /2
                                                                               t=1

and

      P [β j = 0 | β i (i = j ), h, yo , X, A] ∝ (1 − p j )λj
            wj                                                             
                                                       T
         ·      exp[−hj (β j − β j ) /2] exp −h
                                         2
                                                           (zt − β j xtj ) /2 dβ j .
                                                                          2
                                                                                                        (5.25)
            aj                                                   t=1

Completing the square in the last line yields the closed-form expression
                                 −1/2          1/2                         1/2
                 κ j = (2π )1/2 hj {[hj (wj − β j )] − [hj (aj − β j )]}
                                                          
                                             
                                             T
                                                         2
                          · exp − hj β j + h
                                     2 2
                                               zt − hj β j /2
                                                2
                                                                                                        (5.26)
                                                           t=1

for the integral (5.25). Thus

                     ρ j = P [β j = 0 | β i (i = j ), h, yo , X, A]                                    (5.27)
                                                   T            
                                    pj exp −h               zt2 /2
                                                        t=1
                         =             T                               .                             (5.28)
                           pj exp −h              zt /2 + (1 − pj )λj κ j
                                                   2
                                                     t=1
174                                                                            LINEAR MODELS


    In each iteration of the Gibbs sampling algorithm some of the coefficients in β j
are zero and some are not. A simulation-consistent approximation of P [β j = 0 |
                    
yo , X, A] is M −1 M          (m)                         (m)
                      m=1 δ(β j , 0). [The expression δ(β j , 0) is an instance of the
Kronecker delta function, defined δ(a, b) = 1 if a = b and δ(a, b) = 0 if a = b.]
An alternative approximation can be based on the evaluation ρ (m)  j   of (5.28) made
in each iteration. Since

       ρ (m)
         j   = E[δ β (m) ,0 | β (m)           (m−1)
                                i (i < j ), β i     (i > j ), h(m) , yo , X, A],
                     j

     
M −1 M        (m)
        m=1 ρ j     is also a simulation-consistent approximation. The principle of
concentrated expectations (Theorem 4.4.1) suggests that the variance of this
approximation will be smaller. This generally turns out to be the case. It can
be especially advantageous when M · P (β j = 0 | yo , X, A) << 1, in which case
     
M −1 M  m=1 δ β (m)  = 0 is a likely outcome and assessment of numerical standard
                j ,0
error of this approximation is impossible. The same is true when

                          M[1 − P (β j = 0 | yo , X, A)]         1.

Exercise 5.3.1 Transformation for Inequality Constraints In the motivating
example for linear inequality constraints in Section 5.3.1, suppose that the addi-
tional inequalities β j < 1(j = 2, . . . , k) and 0 < m
                                                      j =2 β j < 1 (the latter corre-
sponding to diminishing returns to scale) were imposed.

  (a) Show that these inequalities cannot be expressed in the form (5.21).
  (b) Adapt the methods of Section 5.3.2 to sample from the posterior distribution.

Exercise 5.3.2 Improving Efficiency Suppose that in the inequality-constrained
linear model β  = (β 1 , β 2 ), a1 < β 1 < w1 , where β 1 is k1 × 1, but β 2 is uncon-
strained. There is a Gibbs sampling algorithms for the posterior distribution that
uses k1 + 2 blocks and is generally more efficient than the one described in
Section 5.3.1. Describe the algorithm, indicating explicitly how the elements of
β 2 are drawn.

Exercise 5.3.3 Order-Restricted Inference Suppose that

                                    xt ∼ N (µ, H−1 ).
                                         i.i.d.
                                   n×1


The prior belief about the precision matrix H is H|A ∼ W (ν, S−1 ).

  (a) Suppose that the prior belief about µ is that µ1 > µ2 > · · · > µn and that,
                                              i.i.d
      subject to this restriction, µj − µj +1 ∼ N (0, h−1 ). Adapt the Gibbs sam-
      pling algorithm of Section 5.3.1 to this model.
  (b) Suppose instead that the prior belief about µ is that µj − µj +1 are indepen-
      dent and identically distributed. P (µj − µj +1 = 0) = 12 ; if µj − µj +1 = 0,
NONLINEAR REGRESSION                                                              175

      then µj − µj +1 ∼ N (0, h−1 ) subject to µj − µj +1 > 0. Adapt the Gibbs
      sampling algorithm of Section 5.3.2 to this model.
  (c) Consider an alternative model in which µ1 = · · · = µn . Express a condi-
      tionally conjugate prior distribution for this model. How would you find the
      Bayes factor in favor of this model, relative to the one in part (b)?
  (d) Now suppose the additional complication that some of the components xit
      are missing at random (recall Example 2.2.3). How would you modify the
      posterior simulation algorithms in parts (a) and (b) to accommodate this
      complication?

Exercise 5.3.4 Inequality Constraints and Model Probability In the normal
linear regression model y ∼ N (Xβ, h−1 IT ) the precision parameter h is known to
be h = 1, and X X = D, a k × k diagonal matrix D = diag(d1 , . . . , dk ). Moreover,
b = (X X)−1 X yo = 0. Consider three variants of this model, distinguished by the
prior distribution of β.

   • In model 1, β |A1 ∼ N (0, H). H is a diagonal matrix:


                                    H =diag(h1 , . . . , hk ).

   • In model 2, β |A2 = 0. There is no uncertainty about β in this model.
   • In model 3, the coefficients β i are independently distributed. With probability
     pi , β i = 0. With probability 1 − p i , β i has a half-normal distribution with
     precision hi :

            p(β i | β i = 0, A3 ) = (2hi /π)1/2 exp(−hi β 2i /2)I(0,∞) (β i ).

  (a) Find the marginal likelihood in models 1 and 2. [You may find (2.80) useful.]
  (b) Find the marginal likelihood in model 3.
  (c) Rank the models according to their marginal likelihood, and explain the
      ordering.
  (d) Find P (β = 0 | yo , X, A3 ). Is the result surprising, given the ordering in
      part (c)?

Exercise 5.3.5 Completing the Argument             Derive (5.26) from (5.25).


5.4 NONLINEAR REGRESSION

The normal linear model provides a convenient but restrictive representation of the
distribution of y conditional on X. This section weakens the assumption that the
regression function is linear in xt in favor of the specification that it is a smooth
function of xt , but maintains the normality stipulation. Section 6.4 will weaken
the normality assumption. As with all subjective conditions, “smoothness” can be
176                                                                                LINEAR MODELS


characterized in different ways. This section takes up two different approaches.
Somewhat surprisingly, each leads to a posterior kernel identical to that of the nor-
mal linear model of Example 2.1.2—but with a different matrix of covariates X,
and with a different interpretation of the coefficient vector β. That nonlinear regres-
sion is thus isomorphic to linear regression has two desirable consequences. On the
practical level, many Bayesian methods for the normal linear model can be applied
in normal nonlinear regression, including the BACC as described in Section 5.1.
On the conceptual level, many of the rich elaborations of the normal linear model
that have been applied in Bayesian analysis can be applied directly in nonlinear
regression. These include the extension to nonnormality in Section 6.4, and the
weakening of the assumption that yt − E(yt | xt ) is independently distributed is
discussed in Sections 7.1 and 7.3.

5.4.1 Nonlinear Regression with Smoothness Priors
The essentials of nonlinear regression with smoothness priors are captured in the
simple model

                             yt = f (xt ) + εt , εt ∼ N (0, h−1 ).
                                                     i.i.d.
                                                                                             (5.29)

The function f (τ ) is defined on a closed interval τ ∈ [τ 1 , τ 2 ]. In general, the
vector of interest ω will include elements f (τ ∗1 ), . . . , f (τ ∗q ), where {τ ∗1 , . . . , τ ∗q }
is a collection of distinct points in [τ 1 , τ 2 ]. The complete model A must therefore
specify p[f (τ ), τ ∈ [τ 1 , τ 2 ] | A]. The model must also incorporate the idea that f
is a smooth function, in the sense that it is differentiable and df (τ )/dτ changes
slowly with τ .
   A convenient and powerful analytic tool for expressing these beliefs is the
Wiener process W (τ ), defined on τ ∈ [0, ∞) with W (0) = 0. A standard repre-
                         τ
sentation is W (τ ) = 0 dW (u), where it is understood that the orthogonal incre-
ments dW (u) are normally distributed. [For further discussion, see Doob (1953),
Section 2.9 or Hamilton (1994), Section 17.2.] One important property of a Wiener
process is W (τ + s) − W (τ ) ∼ N (0, s), for all τ ≥ 0 and all s > 0; this limits the
rapidity with which W can move as a function of τ , and this feature can in turn be
controlled by appropriate scaling of W . Another important property is that any pair
of increments W (τ + s) − W (τ ) and W (τ  + s  ) − W (τ  ) has a bivariate normal
distribution. Each increment has mean zero. If [τ , τ + s] and [τ  , τ  + s  ] do not
overlap, then the increments are uncorrelated; if the intervals do overlap, then their
covariance is the length of the overlap. In general
                                                           ∞
  cov[W (τ + s) − W (τ ), W (τ  + s  ) − W (τ  )] =        I[τ ,τ +s] (u)I[τ  ,τ  +s  ] (u) du.
                                                               0

More heuristically, movements of W (τ ) over disjoint regions are uncorrelated.
   A Wiener process has the properties ascribed to the function f  (τ ) = df (τ )/dτ ,
and thus we pursue the idea that f (τ ) | A is the integral of such a process. The
approach is that of Shiller (1984). Thus, f (τ ) | A = h−1/2 0 W (u) du, where the
                                                              τ
NONLINEAR REGRESSION                                                                          177

hyperparameter h controls smoothness. For any two points τ and s
                                              τ                       τ u
                f (τ ) | A = h−1/2                    W (u) du =               dW (r) du,   (5.30)
                                              0                        0  0
                                              s                       s v
                                      −1/2
                 f (s) | A = h                        W (v) dv =               dW (p) dv    (5.31)
                                              0                        0   0


have a joint normal distribution, with E[f (τ ) | A] = E[f (s) | A] = 0. If s ≥ τ ,
then, from (5.30) and (5.31), we obtain
                                       τ s
  E[f (τ )f (s) | A] = h−1/2                          min(u, v) dv du
                                       0     0
                                       τ  u                   s        
                               −1/2
                          =h                           v dv +         u dv du
                                       0          0              u
                                       τ 2           
                               −1/2       u                  h−1/2 τ 2
                          =h                 + u(s − u) du =           (3s − τ ).           (5.32)
                                       0   2                    6

   Since var[f (τ )] = h−1/2 τ 3 /3, the prior variance ascribed to f (τ ) at a point
τ = s1 will depend strongly on the idea that τ = 0 is a special point at which it is
known a priori that f  (0) = 0. This is an artificial assumption. It arises not from
prior ideas about smoothness (the reason for introducing the Wiener process as a
model for the prior) but rather from the analytical necessity of an initial condition
for f  (τ ). There is a similar problem with the slope of the function f (τ ) between
two points s1 and s2 (s2 > s1 ), [f (s2 ) − f (s1 )]/(s2 − s1 ). From (5.32), we have

      var{[f (s2 ) − f (s1 )]/(s2 − s1 )} =
                                                                               
          1 −(s2 − s1 )−1                 2s13      s12 (3s2 − s1 )    −(s2 − s1 )−1
         6h (s2 − s1 )−1            s12 (3s2 − s1 )       2s23          (s2 − s1 )−1
         = [3s1 + (s2 − s1 )]/3h,                                                           (5.33)

which depends not only on the length of the interval s2 − s1 but also on the size
of s1 . However, for any three points s1 < s2 < s3 , we find that for the change in
the slope of f (τ )
                                                             
                          f (s3 ) − f (s2 ) f (s2 ) − f (s1 )     (s3 − s1 )
                var                        −                    =            ,              (5.34)
                              s3 − s2           s2 − s1              3h

which can be derived from (5.32) in the same way that (5.33) was derived. Thus
the distribution of any change in slopes does not depend on the artifice of an initial
condition for f  (τ ). This fact is not surprising, given that f  (τ ) | A is a Wiener
process, and changes in the level of a Wiener process over an interval depend only
178                                                                               LINEAR MODELS


on the length of the interval and not on the distance of the interval from the origin
τ = 0. Given s4 > s3 , we have
                   
                     f (s3 ) − f (s2 ) f (s2 ) − f (s1 )
               cov                     −                 ,
                          s3 − s2           s2 − s1
                                                          
                      f (s4 ) − f (s3 ) f (s3 ) − f (s2 )     (s3 − s2 )
                                       −                    =            .     (5.35)
                          s4 − s3           s3 − s2              6h
If s6 > s5 > s4 ≥ s3 > s2 > s1 , then
                                                                                  
           f (s3 ) − f (s2 ) f (s2 ) − f (s1 ) f (s6 ) − f (s5 ) f (s5 ) − f (s4 )
   cov                      −                  ,                −                    = 0.
               s3 − s2               s2 − s1        s6 − s5          s5 − s4
                                                                                      (5.36)
    Without loss of generality, suppose that there are m distinct values of x1 , . . . , xT .
Denote the ordered distinct values by si (i = 1, . . . , m), and define s = (s1 , . . . , sm )
and β = [f (s1 ), . . . , f (sm )] . Then the vector of unobservables in (5.29) is θ A =
(β  , h), and (5.29) may be written y = Xβ + ε with xti = 1 if xt = si and xti = 0
otherwise. The information in the smoothness prior of the form (5.34)–(5.36) may
be expressed
                                        Rβ ∼ N (0, G).                                   (5.37)

The matrix R is (m − 2) × m , with

            rii = (si+1 − si )−1 , ri,i+1 = −[(si+1 − si )−1 + (si+2 − si+1 )−1 ],
         ri,i+2 = (si+2 − si+1 )−1 (i = 1, . . . , m − 2)

and all other elements 0. The matrix G is (m − 2) × (m − 2) with
   gii = (si+2 − si )/3h, gi,i+1 = gi+1,i = (si+2 − si+1 )/6h (i = 1, . . . , m − 2)

and all other elements 0.
    The derivation of this smoothness prior from a continuous process has substan-
tial practical advantages in enforcing consistency when the prior is updated with
additional prior information or with data, and in expressing posterior distributions
for f (τ ) at points τ that do not correspond to any si . Suppose that we were to add
a point s ∗ between si and si+1 in the list s1 , . . . , sm , perhaps because f (s ∗ ) is an
element of the vector of interest ω but s ∗ = si for any i = 1, . . . , m. Incorporating
this point directly in the smoothness prior, f (si ) and f (si+1 ) are removed from β
and replaced with f (si ), f (s ∗ ) and f (si+1 ). Then the (i − 2)th and (i − 1)th linear
combinations in Rβ are removed from (5.37) and replaced with
              (si − si−1 )−1 f (si−1 ) − [(si − si−1 )−1 + (s ∗ − si )−1 ]f (si )
                  + (s ∗ − si )−1 f (s ∗ ) = ζ ∗i ,                                      (5.38)
              (s ∗ − si )−1 f (si ) − [(s ∗ − si )−1 + (si+1 − s ∗ )−1 ]−1 f (s ∗ )
                  + (si+1 − s ∗ )−1 f (si+1 ) = ζ ∗∗ ,                                   (5.39)
NONLINEAR REGRESSION                                                                       179

and

           (si+1 − s ∗ )−1 f (s ∗ ) − [(si+1 − s ∗ )−1 + (si+2 − si+1 )−1 ]f (si+1 )
               + (si+2 − si+1 )−1 f (si+2 ) = ζ ∗i+1 ,                                   (5.40)

where (ζ ∗i , ζ ∗∗ , ζ ∗i+1 ) is normal with mean 0 and
            ∗                                                                
                 ζi                   2(s ∗ − si−1 )   s ∗ − si        0
                               1                                             
     var  ζ ∗∗  =                  s ∗ − si       2(si+1 − si ) si+1 − s ∗  .        (5.41)
                                6h
               ζ ∗i+1                       0         si+1 − s ∗ 2(si+2 − s ∗ )

In the new prior, the marginal distribution of β is the same as in the original prior.
This can be seen by multiplying (5.39) by

                            [(s ∗ − si )−1 + (si+1 − s ∗ )−1 ](s ∗ − si )

and adding it to (5.38), and then multiplying (5.39) by

                           [(s ∗ − si )−1 + (si+1 − s ∗ )−1 ](si+1 − s ∗ )

and adding it to (5.40). The resulting two equations, after some algebra, are

            (si − si−1 )−1 f (si−1 ) − [(si − si−1 )−1 + (si+1 − si )−1 ]f (si )
               + (si+1 − si )−1 f (si+1 ) = ζ i
            (si+1 − si )−1 f (si ) − [(si+1 − si )−1 + (si+2 − si+1 )−1 ]f (si+1 )
               + (si+2 − si+1 )−1 f (si+2 ) = ζ i+1

where

              ζ i = ζ ∗i + [(s ∗ − si )−1 + (si+1 − s ∗ )−1 ]ζ ∗∗ /(s ∗ − si )−1 ,
            ζ i+1 = ζ ∗i+1 + [(s ∗ − si )−1 + (si+1 − s ∗ )−1 ]ζ ∗∗ /(si+1 − s ∗ )−1 ,

and from (5.41)
                                                                            
                            ζi            1       2(si+1 − si−1 ) si+1 − si
                 var                   =                                         .
                           ζ i+1         6h          si+1 − si   2(si+2 − si )

These are precisely the (i − 2)th and (i − 1)th linear combinations of Rβ that were
removed in the first place.
   This smoothness prior, taken alone, does not constitute a proper prior distribution
for β. Its contribution to the prior precision of β is R G−1 R, an m × m matrix of
rank m − 2. The balance of a proper normal prior distribution for β must provide
prior information about the level and slope of the function—the information from
the Wiener process that we discarded at the outset because it was artificial. If
180                                                                          LINEAR MODELS


the additional information is normal and independent of the information in the
smoothness prior, it can be represented

                                    Pβ ∼ N (p, F).                                  (5.42)

[If the information involves f (s ∗ ), and s ∗ is not an element of s, then s must be
redefined so as to incorporate the new point s ∗ , and the smoothness prior expressed
in the form (5.37). As demonstrated in (5.38)–(5.41), this has no impact on the
smoothness prior itself; the effect is simply to incorporate the fact that the smooth-
                                         ∗
ness prior applies to the new point  ! s .]  Taken
                                               "     together, this information provides a
proper prior distribution if rank R P = m∗ , where m∗ is the number of points
involved in the prior distribution. Then the full prior distribution is β ∼ N (β, H−1 ),
with H = R G−1 R + P F−1 P and β = H−1 P F−1 p. For a variant on this idea, see
Example 5.4.1.
    The vector of interest ω typically includes the function f (τ ) evaluated at points
τ not included in s. For example, if information about the posterior distribution
of f (τ ) on the interval [τ 1 , τ 2 ] is presented graphically, then good resolution
requires evaluation of f (τ ) at 100 or more equally spaced points. Thus the posterior
simulator must provide

      p(β, h, ω | yo , X, A) ∝ p(yo | β, h, ω, X, A)p(β, h | A)p(ω | β, h, A).

Since the distribution of y depends on β and h but not ω, p(yo | β, h, ω, X, A) =
p(yo | β, h, X, A). Because of the consistency of the smoothness prior with respect
to addition and deletion of points of evaluation, p(β, h | A) =  p(β, h, ω | A) dω
is the same regardless of the composition of ω. Hence

                 p(β, h| yo , X, A) ∝ p(yo | β, h, X, A)p(β, h | A),

so the posterior simulator excludes ω and takes no account of its subsequent spec-
ification. Then
                         
     p(ω | yo , X, A) =        p(ω | β, h, X, A)p(β, h| yo , X, A) dβ dh.
                         R+   Rm

The smoothness prior distribution expressed as R1 β + R2 ω ∼ N (0, G) provides
the form of p(ω | β, h, X, A) = p(ω | β, A). Since rank (R2 ) = dim(ω)

         ω |(β, A) ∼ N [−(R2 G−1 R2 )−1 R2 G−1 R1 β, (R2 G−1 R2 )−1 ].          (5.43)

Replacing β with β (m) ∼ p(β | yo , X, A) in this expression provides the simulation
algorithm for ω given the posterior simulator output.

Example 5.4.1 Nonlinearity in Simple Regression (The online appendix con-
tains data, annotated code, and output for this example.) Return to Example 5.1.1,
which examined the impact of class size on test scores using the Massachusetts
NONLINEAR REGRESSION                                                                 181

Comprehensive Assessment System (MCAS) test data and a normal linear regres-
sion model. In this example we remove the assumption that the regression of class
size on test scores is linear, and replace it with the assumption that the regression
is a smooth function of class size, using (5.29) and the methods described in this
section. The objectives are to learn about the posterior distribution of the regres-
sion function, and collect some evidence about the degree of nonlinearity in the
regression function as indicated by the prior hyperparameter h. Achieving these
objectives illustrates the construction of a proper prior distribution in a nonlin-
ear model, and techniques for inferring the posterior distribution of the regression
function evaluated at points that do not correspond to values in the data.
   To construct a prior distribution, amend (5.29) slightly, by writing

      yt = α 1 + α 2 xt + f (xt ) + εt , εt ∼ N (0, h−1 ) (t = 1, . . . , T ).
                                             i.i.d.
                                                                                   (5.44)

Let s1 < · · · < sm denote the m ordered distinct data points corresponding to
the m × 1 vector β = [f (s1 , ), . . . , f (sm )]. Then (5.44) has the form y = X1 α +
X2 β + ε, for the suitably arranged T × 2 matrix X1 and T × m matrix X2 . In the
data set from Example 5.1.1, the student : teacher ratio (str) is rounded to the
nearest one-tenth and ranges from 11.4 to 27.0. While T = 220, m = 83. The two
restrictions
                            
                            m
                                  f (si ) = 0, f (s1 ) = f (sm )                   (5.45)
                            i=1

identify α 1 , α 2 , and f in (5.44) without imposing any additional restrictions. [Recall
the discussion of identification in Exercise 4.5.3; see also Poirier (1998).] The
restrictions (5.45) are equivalent to Pβ = 0, with an obvious definition of P, and
are a limiting case of additional information of the form (5.42), in which F becomes
arbitrarily small.
              !        These exact restrictions
                                              " can be imposed by writing β = Qβ ∗ ,
with Q = ιm−2 (− 2 ) Im−2 ιm−2 (− 2 ) . The restrictions plus the prior informa-
                         1                 1

tion Rβ ∼ N (0, G) in y = X1 α + X2 β + ε are equivalent to β ∗ ∼ N (0, H2−1 ),
in y = X1 α + X∗2 β ∗ + ε, where X∗2 = X2 Q and H2 = Q R G−1 RQ. If α | A ∼
N (α, H−11 ), independent of β | A, then as h → ∞ in G, the marginal likelihood
of the model must approach that of the linear model yt = α 1 + α 2 xt + εt with
the same prior distribution for α and h. Proceeding as in Example 5.1.1, we take
α = (µ, 0) and H1 = (5/T σ 2 )X X using the values of µ and σ 2 in that example.
   The model thus formulated is a special case of the normal linear regression model
of Example 2.1.2, and therefore BACC may be applied. As noted in Example 4.3.1,
the Gibbs sampling algorithm for the normal linear model produces drawings from
the posterior distribution that are very nearly serially uncorrelated. There is little or
no need for burn-in iterations, and only a few iterations are needed to draw values
from the posterior distribution of the regression functions. Marginal likelihood can
be computed exactly as described in Example 5.1.1. It is only for computing the
posterior mean of the regression, displayed as a heavy line in Figure 5.1, that a
larger number of iterations is needed, and in this example we use 100.
182                                                                                                                                        LINEAR MODELS


                                    720                                                                          720




                                                                               District test score average
      District test score average


                                    710                                                                          710


                                    700                                                                          700


                                    690                                                                          690


                                    680                                                                          680
                                            15           20            25                                               15           20            25
                                             Student : teacher ratio                                                     Student : teacher ratio
                                                       (a)                                                                        (b)

                                    720                                                                          720


                                                                                   District test score average
      District test score average




                                    710                                                                          710


                                    700                                                                          700


                                    690                                                                          690


                                    680                                                                          680
                                            15           20            25                                               15           20            25
                                             Student : teacher ratio                                                     Student : teacher ratio
                                                       (c)                                                                        (d)

Figure 5.1. Posterior mean of regression of test score on student : teacher ratio (heavy line), and three
drawings from the posterior distribution (three light lines) for each of four smoothness hyperparameters
h−1/2 : smoothness parameters (a) 0.50; (b) 1.00; (c) 2.00; (d) 5.00.



   Recall from (5.34) that

                                          var{[f (x + 1) − f (x)] − [f (x) − f (x − 1)]} = 2/3h.

Alternative values of the smoothness parameter h−1/2 produce the following log
marginal likelihoods:


                                             h−1/2                          Log Marginal Likelihood

                                             0 (linear model)                                                     −913.6910
                                             0.5                                                                  −912.4573
                                             1                                                                    −911.5170
                                             2                                                                    −911.6266
                                             5                                                                    −913.5087
NONLINEAR REGRESSION                                                                        183

The model with h−1/2 = 1 has the highest marginal likelihood. However, differ-
ences in these models are not great; the Bayes factor in favor of this model, as
opposed to the linear model, is 8.15.
   The regression functions can be plotted using the 157 values in increments of
one-tenth over the data range in the student : teacher ratio. Since not all of these
values correspond to data points, values for the non–data points are drawn using
(5.43). Adding more points to the plot is straightforward and increases computation
time only negligibly.
   Increasing values of h−1/2 permit regression functions that are increasingly
rough, while as h−1/2 → 0, the function becomes linear. Note in Figure 5.1 that
the posterior mean of the regression function (solid line) appears smoother than the
drawings from the posterior distribution (lighter lines) in every case. That is because
visual smoothness is inversely related to the absolute value of second differences
of a function; Jensen’s inequality accounts for the difference. It is important to
keep in mind that while the visual appearances of these curves differ, the evidence
that discriminates between them is rather weak as indicated by the Bayes factors
implicit in the log marginal likelihoods.

   In Example 5.1.1 other covariates were found to be important in accounting
for the average test score in each district: the percentage of students still learning
English, the percentage of students receiving a subsidized lunch, and the log of
average district income. Example 5.4.1 omitted these covariates. Reintroducing
them in linear fashion poses no essential complications.

Example 5.4.2 Nonlinearity in Multiple Regression (The online appendix con-
tains data, annotated code, and output for this example.) Maintain all the assump-
tions of Example 5.1.1, except that now the student : teacher ratio enters the model
in nonlinear fashion. Then we may express the model as an extension of (5.44):

                                  
                                  n
                                         γ j zj t + εt , εt ∼ N (0, h−1 ) (t = 1, . . . , T ).
                                                          i.i.d.
  yt = α 1 + α 2 xt + f (xt ) +
                                  j =1
                                                                                      (5.46)
In this application n = 3 and j indexes the three other covariates. More gen-
erally, (5.46) is sometimes called a semiparametric model, since it mixes the
function f (xt ) (“nonparametric”) with the other linear components in the model.
The Bayesian approach developed in this section renders this distinction inessen-
tial, since we may select from among the continuum of unobservables any finite
number of functions of interest and carry out inference in a fashion that is logically
consistent over all possible choices of these functions of interest.
    We proceed in the same fashion as in the previous example. The prior distribution
of the vector (α 1 , α 2 , γ 1 , γ 2 , γ 3 ) is the same as the prior distribution of β in
Example 5.1.1, and the alternative values of the smoothing hyperparameter h are
184                                                                   LINEAR MODELS


the same as those in the previous example. The model comparison exercise produces
the following findings:

                   h−1/2                 Log Marginal Likelihood

                   0 (linear model)               −805.8189
                   0.5                            −806.2772
                   1                              −807.0044
                   2                              −808.2665
                   5                              −811.1137

The original linear model is the most favored of the five specifications, but the
evidence in favor of linearity is slightly weaker than the evidence in favor of non-
linearity in the previous example. The Bayes factor in favor of the linear model,
versus the nonlinear specification with h−1/2 = 1 is 3.27. On the other hand, the
evidence that the three additional covariates should be included is overwhelm-
ing, as indicated by comparison with the log marginal likelihoods in the previous
example.
    Figure 5.2 provides some aspects of the posterior distribution of the regression
function, evaluated at the student : teacher ratio values indicated on the horizontal
axes, and sample median values of all of the other covariates. Whereas a stu-
dent : teacher ratio of 25 as opposed to 15 accounted for a 20–30-point difference
in test scores in the absence of the other covariates, here it accounts for somewhat
less than 10 points, which in turn is roughly consistent with the posterior mean of
−0.68 for the student : teacher ratio coefficient in Example 5.1.1. The predomi-
nant characteristic of the nonlinearity of the regression function in Example 5.4.1
was a kink at a student : teacher ratio of ∼17, a feature that is exhibited weakly
in Figure 5.2. Moreover, the uncertainty about departures from nonlinearity clearly
overwhelm any such systematic tendency, as indicated by the lighter lines in the
figure. This is consistent with the Bayes factor in favor of the linear specification
as opposed to any one of the nonlinear specifications.
    The impact of the nonlinear specification in student : teacher ratio has a neg-
ligible impact on the posterior distribution of the other coefficients of the other
covariates. Comparison with the results in Example 5.1.1 shows the following:


Student : Teacher Ratio
                                         Linear                     Nonlinear
Functional Form
Coefficient Posterior                 Mean         SD          Mean             SD

Learning English                −0.4086           0.2788      −0.3990         0.2811
Subsidized lunch                −0.5173           0.0678      −0.5117         0.0673
Log income                      16.418            2.964        17.005         2.902
NONLINEAR REGRESSION                                                                                                                               185

                                 720                                                                         720
   District test score average




                                                                               District test score average
                                 710                                                                         710


                                 700                                                                         700


                                 690                                                                         690


                                 680                                                                         680
                                           15           20            25                                           15            20           25
                                            Student : teacher ratio                                                 Student : teacher ratio
                                                       (a)                                                                      (b)
                                 720                                                                         720
   District test score average




                                                                               District test score average
                                 710                                                                         710


                                 700                                                                         700


                                 690                                                                         690


                                 680                                                                         680
                                           15            20           25                                           15            20           25
                                           Student : teacher ratio                                                 Studen : teacher ratiot
                                                       (c)                                                                      (d)

Figure 5.2. Posterior mean of regression function for test score nonlinear in student : teacher ratio
(heavy line) and linear in other covariates, and three drawings from the posterior distribution (three
light lines) of the nonlinear student : teacher portion for each of four smoothness hyperparameters
h−1/2 : smoothness parameters (a) 0.50; (b) 1.00; (c) 2.00; (d) 5.00.



5.4.2 Nonlinear Regression with Basis Functions
A sequence of normal linear models Aj (j = 1, 2, . . .) captures the essentials of
nonlinear regression with basis functions. In model Aj , we obtain

                                                      
                                                      kj
                                                             β ji φ ji (xt ) + εt = β j φ j (xt ) + εt ; εt ∼ N (0, h−1 ).
                                                                                                                               i.i.d.
                   yt = fj (xt ) + εt =
                                                      i=1
                                                                             (5.47)
As j increases so does kj , and the function fj becomes, loosely speaking, more
flexible. For example, if xt is 2 × 1 and the basis functions are monomials, then a
sequence might be

                                  φ j 1 (x) = 1 for all j = 1, 2, . . .
                                  φ j 2 (x) = x1 , φ j 3 (x) = x2 for all j = 2, 3, . . .
186                                                                                       LINEAR MODELS



       φ j 4 (x) = x12 , φ j 5 (x) = x1 x2 , φ j 6 (x) = x22 , for all j = 3, 4, . . .           (5.48)
       φ j 7 (x) = x13 , φ j 8 (x) = x12 x2 , φ j 9 (x) = x1 x22 , φ j 10 (x) = x23 , . . .

for all j = 4, 5, . . . and so on. For this sequence kj = j (j + 1)/2. By the
Weirstrass theorem,
                                a sequence of such basis functions {φ j } such that
                       there exists
limj →∞ supx∈C f (x) − fj (x) = 0 for any compact set C ⊆ R2 . Other systems of
basis functions that have proved useful in econometric applications include Fourier
sequences (Gallant 1981) and Muntz–Szasz expansions (Barnett and Jonas 1983).
In all of these systems, the functions φ j are chosen so that f (x) is forced to be
smooth when j is small, and the smoothness assumption is weakened steadily as
j increases. Precisely what is meant by “smooth” and “weakened” depends on the
particular system of basis functions.
   The approaches to nonlinear regression in (5.29) and (5.47) are complementary.
Basis functions can be applied when the domain of f is multidimensional in much
the same way as when it is unidimensional, especially for monomial basis functions.
On the other hand, the ordering of the covariates xt exploited in developing the
approach in Section 5.4.1 cannot be extended to multidimensional xt . For any
given order of expansion j , basis functions force the function f to be smooth
no matter how strong the evidence to the contrary in the data, whereas for a
given smoothness prior hyperparameter h in Section 5.4.1, a sufficiently strong
departure from smoothness in the data can place substantial posterior probability
on regression functions that are not smooth. This latter contrast is mitigated, to
some extent, by the fact that each entails a portfolio of models, indexed by h in
the case of smoothness priors and by j in the case of basis functions. In each case
the models may be compared or averaged as described in Section 2.6.1. The less
smooth is the function f , the smaller will be the hyperparameter h favored by
Bayes factors in the former case and the larger will be the order of expansion j
favored in the latter.
   In formulating prior distributions of the coefficient vector β in nonlinear regres-
sion with basis functions, it is useful to think in terms of the function f . This is
especially important in comparing variants with different numbers of basis func-
tions, because it ensures comparable priors. For example, the prior distribution
                                      i.i.d.
consisting of the components f (ai ) ∼ N (µ, τ 2 ) (i = 1, . . . , n) implies the prior
distribution consisting of the components

                        β j φ j (ai ) | Aj ∼ N (µ, τ 2 )(i = 1, . . . , n)
                                            i.i.d.



when the order of expansion is j . If J is the highest order of expansion considered
and n ≥ kJ points are chosen appropriately, this approach will provide comparable
and proper prior distributions for the coefficients in all orders of expansion. This
approach is illustrated in the following example.

Example 5.4.3 Basis Functions for a Single Covariate (The online appendix
contains annotated code and output for this example.) In the nonlinear model (5.29),
NONLINEAR REGRESSION                                                                   187

nonlinearity in the function of one variable f (·) may be captured by using a
sequence of basis functions with a single argument. This example uses polynomials
of increasing order:

                      
                      j
                            β ji xti + εt , εt ∼ N (0, h−1 )
                                             iid
              yt =                                             (t = 1, . . . , T )   (5.49)
                      i=0


in conjunction with the sequence of conditionally conjugate prior distributions

            H = (kj /T σ 2 )X X, β = (X X)−1 X ιT µ = (µ, 0, . . . , 0) ,        (5.50)

and the same values of σ 2 and µ used in the previous examples. In (5.50) X is the
covariate matrix in (5.49) and has kj = j + 1 columns.
   This model may be applied using BACC, much as in Example 5.4.1. The
marginal likelihoods are


                  J                           Log Marginal Likelihood

                  1 (linear model)                    −913.6910
                  2                                   −911.0031
                  3                                   −912.6455
                  4                                   −914.1524
                  5                                   −915.3689

The results are similar to those in the nonlinear model of Example 5.4.1, in that
there is moderate evidence in favor of nonlinearity, with nonlinearity in this case
represented by low-order polynomials. Note that the marginal likelihood of the most
favored model, a polynomial of order 2, is very nearly the same as the most favored
model in Example 5.4.1, which has a smoothing hyperparameter of h−1/2 = 1. The
posterior distribution of the regression function reveals both further similarities and
important contrasts with the approach taken in that earlier example.
   In general the posterior means in Figures 5.1 and 5.3 show functions of simi-
lar global orientation and shape, and appear more irregular as more flexibility is
allowed. The polynomial basis functions exhibit stronger curvature with less flexi-
ble models, and the smoothness prior shows a kink near the student : teacher ratio
value of 17 with less flexible models. The most flexible models, in panel (d) of
each figure, exhibit posterior means of regression functions that are almost iden-
tical. The three drawings from the posterior distribution of regression functions
in each panel illustrate the fact that the functions themselves are quite different.
In the case of basis functions (Figure 5.3) the second derivative at a point is a
deterministic function of second derivatives globally, and therefore a function of
information in the data as well as the prior, whereas in the case of smoothness
priors (Figure 5.1) it is a function only of the prior distribution. This property of
188                                                                                                                           LINEAR MODELS


                               720                                                                   720
 District test score average




                                                                       District test score average
                               710                                                                   710


                               700                                                                   700


                               690                                                                   690


                               680                                                                   680
                                     15          20            25                                           15           20            25
                                     Student : teacher ratio                                                 Student : teacher ratio
                                               (a)                                                                     (b)

                               720                                                                   720
 District test score average




                                                                       District test score average

                               710                                                                   710


                               700                                                                   700


                               690                                                                   690


                               680                                                                   680
                                     15          20            25                                           15           20            25
                                     Student : teacher ratio                                                 Student : teacher ratio
                                               (c)                                                                     (d)

Figure 5.3. Posterior mean of regression of test score on student : teacher ratio (heavy line), and three
drawings from the posterior distribution (three light lines) for polynomials of different order: polynomial
orders (a) 2; (b) 3; (c) 4; (d) 5.


posterior distributions of regression functions with smoothness priors is obscured
in the posterior mean.
   Introducing the other covariates, as in Example 5.4.2, produces similar compar-
isons and contrasts. The marginal likelihoods are


                                          J                         Log Marginal Likelihood

                                          1 (linear model)                                           −805.8189
                                          2                                                          −807.7776
                                          3                                                          −809.8334
                                          4                                                          −810.9572
                                          5                                                          −812.7080

The linear model is, again, favored over any of the alternatives that permit a
nonlinear, but separable, effect of the student : teacher ratio on test scores; once
NONLINEAR REGRESSION                                                                                                                   189

                              720                                                                 720
District test score average




                                                                    District test score average
                              710                                                                 710


                              700                                                                 700


                              690                                                                 690


                              680                                                                 680
                                    15          20             25                                       15          20            25
                                     Student : teacher ratio                                            Student : teacher ratio
                                               (a)                                                               (b)

                              720                                                                 720
District test score average




                                                                    District test score average

                              710                                                                 710


                              700                                                                 700


                              690                                                                 690


                              680                                                                 680
                                    15           20            25                                       15          20            25
                                     Student : teacher ratio                                            Student : teacher ratio
                                               (c)                                                               (d)

Figure 5.4. Posterior mean of regression function for test score polynomial in student : teacher ratio
(heavy line) and linear in other covariates, and three drawings from the posterior distribution (three
light lines) of the nonlinear student : teacher portion for different orders of the polynomial: polynomial
orders (a) 2; (b) 3; (c) 4; (d) 5.


again, the evidence is not strong. The posterior means of the regression as a function
of the student : teacher ratio, using this polynomial expansion, bear a striking
resemblance to those using the smoothness priors, as may be seen by comparing
Figure 5.4 with Figure 5.2.

    An attraction of nonlinear regression with basis functions is that the nonlinear
component of the regression can be a vector, as well as a scalar, as indicated in the
illustration (5.48) for polynomial basis functions and a vector of dimension 2. For a
vector of dimension k and a polynomial expansion of order J , the number of terms
in the expansion is of the order k J . For a given sample size, the larger is k, the
lower is the order of expansion that will be reasonable, appraised (appropriately)
by marginal likelihoods for the different expansions. In the case of the smoothness
priors developed in Section 5.4.1, however, treatment of the vector case is impos-
sible. That is because the approach taken there relies critically on the ordering of
the covariates, and vectors of dimension greater than one cannot be ordered.
190                                                                      LINEAR MODELS


Example 5.4.4 Basis Functions for a Pair of Covariates (The online appendix
contains annotated code and output for this example.) In the context of the test
score example with all covariates, consider the polynomial expansion (5.48) using
the covariates student : teacher ratio (str) and log income (income). Continuing
to denote the full matrix of covariates by X, the prior distribution is (5.50). Con-
sider a few orders of expansion, presented in the following table along with the
corresponding marginal likelihood values:


      Terms Included:                                   Log Marginal Likelihood

      str, income                                               −805.8189
      Above plus str · income                                   −805.6166
      Above plus str2 , income2                                 −808.9928
      Above plus str3−i ·incomei (i = 0, 1, 2, 3)               −814.0507



Bayes factors favor the model with the single interaction term: the values are 1.22
against the linear model, and 29.26 against the model with quadratic terms.
   As always, it is important to examine the implications of alternative models,
including those with low posterior probabilities, if it is thought that the inclusion
of these models in the analysis may affect the decision at hand. Using BACC
and mathematical applications software, we can produce the representations of the
posterior mean of the regression function for the model with the single interaction
term, and the one that adds the two quadratic terms, shown in Figure 5.5. In
both cases, the relationship between the student : teacher ratio and the district
average test score depends strongly on average income in the district. The lower the
average income in a school district, the more rapidly the expected average test score
drops as student : teacher ratio increases. As incomes increase, this relationship is
attenuated, and for log per capita incomes above about 3.05 [exp(3.05) × $1000 =
$21,115, about one-quarter of the sample], it is in fact reversed, so that expected test
scores increase as the student : teacher ratio increases. In the context of decision
problems like the ones taken up in Example 5.1.2 and Exercise 5.1.5, this is a
serious complication. Exercise 5.4.5 pursues this issue.
   Figure 5.5 conveys the posterior expectation of the regression function, but no
other aspects of its distribution. Interactive displays can convey useful descriptions
of uncertainty about a function; code for some displays may be found in the online
appendix for this example. In some decision problems, like the one stemming from
the loss function (5.5) in Example 5.1.2, uncertainty doesn’t matter, but in others,
such as the one stemming from the loss function (5.6) in the same example, it does.
For the models studied in Figure 5.5 it is easy to find the posterior probability that
the regression function is monotone decreasing in student : teacher ratio, for all
values of log income and student teacher ratio included in the grid; it is .065 in
the case of the model with a single interaction term and .031 with the model that
adds the quadratic terms.
NONLINEAR REGRESSION                                                                                                         191

                              3.8                                                                                 740
Log average district income


                              3.6                                                               730

                              3.4                       720
                              3.2
                                3
                                                                            710
                              2.8
                                                                                                      700
                              2.6
                              2.4                                                                           690

                                    12          14     16        18           20           22         24                26
                                                               Student : teacher ratio
                                                                         (a)


                                                                                                740
                              3.8
Log average district income




                              3.6                                                                           730
                                          720
                              3.4
                              3.2
                                3                                                                           710

                              2.8
                              2.6
                              2.4                                                        700                             690

                                    12          14     16        18           20           22         24                26
                                                               Student : teacher ratio
                                                                         (b)

Figure 5.5. Contour plots of the posterior mean of the regression function, evaluated at combinations
of two covariates as indicated, and sample median values of all other covariates: (a) linear terms plus
str·logincome interaction; (b) linear terms plus polynomials to order 2.



Exercise 5.4.1 Completing the Argument Derive (5.34), (5.35), and (5.36). You
may find a symbolic processor, like Maple or Mathematica, helpful.

Exercise 5.4.2 Credible Sets In non-Bayesian nonparametric regression it is
common to find an approximate confidence interval for f (x) for each of many
closely spaced values of x over a given range. In the Bayesian nonlinear model of
Section 5.4.1 we can find an exact credible interval for f (x) for these same values.
In each case we may plot the intervals as a function of x, and the resulting picture
provides a representation of uncertainty about the function.

                              (a) Choose either Example 5.4.1 or 5.4.2, and plot 80% credible intervals over
                                  the range of student : teacher ratio in the data, 11.4–27.
                              (b) Find the posterior probability that f (x) is contained in the intervals found
                                  in (a), for all x in the range 11.4–27.
192                                                                    LINEAR MODELS


  (c) Find a constant c such that

               P {f (x) ∈ [f (x) − c, f (x) + c] ∀ x ∈ [11.4, 27]} = 0.8,

       where

                               f (x) = E[f (x) | (yo , X, A)].

       Plot the functions f (x) − c, f (x), and f (x) + c on the same graph with
       the credible intervals found in (a). Compare and discuss.

Exercise 5.4.3 Inference about Shape The posterior means of the regression
functions in Figures 5.1 through 5.4 are monotone decreasing and concave over
the range shown in many cases.

  (a) Show that the posterior probability that the regression function has this shape
      is zero in all cases, in Examples 5.4.1 and 5.4.2.
  (b) Find the posterior probability that the regression function has this shape
      for polynomials of order 2, 3, 4 and 5 in Examples 5.4.3 and 5.4.4 (For
      continuation, see Exercise 8.2.5.)

Exercise 5.4.4 Model Combination Figures 5.1 and 5.2, together with the
marginal likelihoods that accompany these models, indicate substantial uncertainty
over models, and perhaps about shape as well. Select the model corresponding to
one of the figures for this exercise.

  (a) Assign equal prior probability to the linear model and each of the four non-
      linear models. Conditional on this specification, find and plot the posterior
      expectation of the regression function as a heavy line, and draws from the
      posterior distribution as lighter lines, in the same way as done in the figures.
  (b) An alternative approach to uncertainty about the smoothing hyperparameter
      h is to embed it in a hierarchical prior. Construct such a prior, and then
      find the posterior distribution of the regression function as well as h−1/2 .
      Compare the result with those for the examples in Section 5.4.1.

Exercise 5.4.5 Decisionmaking in the Nonlinear Regression Model Example
5.1.2 introduced a decision problem about the student : teacher ratio using the
alternative loss functions (5.5) and (5.6). That example provided solutions of those
problems assuming a linear regression function.

  (a) Using the smoothing approach of Example 5.4.2, or the polynomial approach
      of Example 5.4.3 with the full set of covariates, solve the same decision
      problems, for the same combinations of c and d considered in Example 5.4.2.
      Compare your answers with those in that example.
NONLINEAR REGRESSION                                                           193

  (b) Now consider the same problem using the polynomial in student : teacher
      ratio and log income of Example 5.4.4. Recall the complication implied
      by the results in Figure 5.5 for school districts with per capita incomes in
      the top quartile of the sample, implying that these districts would choose
      very high student : teacher ratios. You might address this problem by model
      averaging, by imposing shape constraints, or in some other way. After doing
      so, find the optimal student : teacher ratio for the same combinations of c
      and d considered in Example 5.4.2, and some alternative, representative
      values of income.

Exercise 5.4.6 Specification of the Earnings Regression Function Example
6.4.1 introduces the regression of log earnings on age and education, emphasiz-
ing the nonnormality of the distribution of the regression residuals. That example
assumes that the regression function of log earnings on age and education is an
interactive polynomial of order 4 in age and 2 in education. In answering the fol-
lowing questions, assume that the distribution of the regression residual is i.i.d.
normal.

  (a) What is the evidence in the data on the adequacy of this choice? Do marginal
      likelihoods for different orders of polynomial expansion indicate a clear-
      cut choice, or do they suggest model averaging using several alternative
      specifications?
  (b) From the models investigated in (a), select the three with the three highest
      marginal likelihoods. Is there much difference among the corresponding
      functions E(y | a, e, yo , A) as indicated, for example, by representations
      like those in Figure 5.5?
CHAPTER 6




      Modeling with Latent Variables


Latent, or unobserved, variables are often important components in econometric
and statistical models. They occur in these models for a variety of reasons.

   1. The model may pertain to a substantial number of heterogeneous entities, each
      with its own set of parameters. It is natural to regard these parameters as latent
      variables having a distribution that, in turn, is characterized by unknown
      parameters. (See Example 3.1.1.) Section 3.1 showed that this formulation
      is equivalent to a hierarchical prior distribution for the parameters of the
      heterogeneous entities. The techniques described in this chapter have been
      applied with noted success in this context, particularly in marketing; see, for
      example, Ainslee and Rossi (1998), Allenby and Rossi (1999), and Kim et al.
      (2003), as well as Rossi and Allenby (2003) for an overview.
   2. If data are missing because of complications in data collection, it is natural to
      regard the missing data as latent. The original model must be supplemented
      with one for the process by which data are recorded or not. The latter model
      turns out to be simple if data are missing at random (Example 2.2.3). [For
      specific examples, see Exercises 5.2.1 and 5.3.3(d).]
   3. Outcomes may not be fully observed, because of the way data are recorded,
      or because observable behavior reveals only certain characteristics of the
      data. It is natural to regard the outcomes as latent variables. The complete
      model has two components: the first linking the incompletely observed out-
      comes to parameters or other unobservables in the usual way, and the second
      linking data to incompletely observed outcomes. Section 6.1 provides a gen-
      eral approach for this setting, and Section 6.2 applies it to the modeling of
      discrete outcomes.
   4. In a mixture model the distribution of a random variable depends on a latent
      state. The state can be either continuous or discrete, and in either case a
      supplementary model describes the distribution of the state. Mixture models


Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.

                                                                                    195
196                                                  MODELING WITH LATENT VARIABLES


      provide versatile tools for extending simple distributions, such as the nor-
      mal, to classes that are richer, more flexible, and more realistic. Section 6.4
      enriches the normal linear model in this way.

   A common characteristic of all these models is a hierarchy, or layering, in which
the distribution of latent variables is accounted for by a stated set of assumptions
and unobservables (parameters), and the distribution of observables is then driven
by the latent variables together with some combination of the same and additional
unobservables. (Exercise 3.1.2 developed the essence of this structure.) This hier-
archy leads to significant simplification in the posterior distribution that can be
exploited by the Gibbs sampler and related posterior simulators, as illustrated in
Exercises 5.2.1 and 5.3.3(d). This simplification plays a critical role in the models
described in this chapter as well.


6.1 CENSORED NORMAL LINEAR MODELS

An important source of earnings data in the United States is the records kept by the
Social Security Administration. These records track individuals’ annual earnings
subject to social security tax. The tax is applied to all labor earnings, up to a limit
that changes from year to year. Thus if t indexes an individual in a particular year,
a known upper limit yt∗ applies to social security earnings yt for observation t. If
we denote actual earnings by   yt , then
                                      
                                        
                                        yt if yt ≤ yt∗
                               yt =                     .
                                        yt∗ if 
                                               yt > yt∗

This is an example of censoring of a measurement. In this case values that exceed
a known threshold are replaced by the threshold, a process often called “right
censoring.” It is important that the threshold be known. Censored measurement of
the outcome variable in the normal linear model provides an important special case
of the censored normal linear model.
   As a second motivating example, suppose that T households indexed by t have
preferences over a specific good x and all other goods z given by the utility function

                         Ut (x, z) = log(at + x) + b log(z).

The unobservable at is specific to household t. Only nonnegative amounts of x
and z may be consumed. Clearly, each household t must consume some positive
amount zt of z. If at < 0, then household t must consume more than −at units of
x, whereas if at > 0, household t may choose not to consume x at all. Suppose
that in each household t the sum of expenditures on x and z is fixed, and that these
goods have prices pxt and pzt , respectively. If household t consumes a positive
amount xt of x, then (∂Ut /∂xt )/(∂Ut /∂pt ) = pxt /pzt , and in this case

                zt /b(at + xt ) = pxt /pzt ⇒ xt = zt pzt /bpxt − at .
CENSORED NORMAL LINEAR MODELS                                                        197

If at > zt pzt /bpxt , then household t does not consume x. If the unobservable at is
independently and identically distributed across households, at ∼ N (µ, σ 2 ), then
                                                        i.i.d.
   xt = max[−µ + b−1 (pzt zt )/pxt + εt , 0], εt ∼ N (0, σ 2 ) (t = 1, . . . , T ).

Models of this kind have been important in marketing and the success of methods
like the ones described in this section; see, for example, Kim et al. (2003).
    Note that the second example produces a left-censored outcome, whereas the
first produces a right-censored outcome. In the second example the censoring points
are all the same (zero), whereas in the first they vary (yt∗ ) but are known. In order to
handle both of these examples as special cases of a more general model, this section
develops a general version of the censored normal linear model. This treatment is
extended to nonnormal censored linear models in Section 6.4.3. BACC supports
censored linear models at the level described in this chapter.
    A censored normal linear model begins with

                         y = X β + ε, ε ∼ N (0, h−1 IT ),
                                                                                   (6.1)
                        T ×1   T ×k

in which 
         y = (             yT ) is a vector of latent variables. There is a known, set-
               y1 , . . . , 
valued function

                                        Ct = ct (
                                                 yt )                               (6.2)

mapping each possible outcome      yt into exactly one set Ct . The observable set
Ct contains the latent variable yt . It may be a (half) open or (half) closed inter-
val. Important special cases are intervals including −∞ or ∞ as endpoints, and
singletons. Denote the collection C = (C1 , . . . , CT ).
   In the first motivating example                             yt < yt∗ , then Ct is the
                                      yt is actual earnings. If 
                                ∗
singleton 
          yt ; otherwise Ct = [yt , ∞). In the second motivating example

                   yt = −µ + b−1 (pzt zt )/pxt + εt , εt ∼ N (0, τ ).
                   

If 
   yt > 0, then Ct =  yt ; otherwise Ct = (−∞, 0].
    In the conditionally conjugate prior distribution β and h are independently dis-
tributed:

                       β | A ∼ N (β, H−1 ), s 2 h | A ∼ χ 2 (ν).                    (6.3)

   Utilizing (6.1), (6.2), and (6.3), the joint distribution of observables and un-
observables in the censored linear model is

    p(β, h,                                y | β, h, X, A)p(C | 
           y, C | X, A) = p(β | A)p(h | A)p(                    y, A).

From (6.2)

                                      
                                      T                          
                                                                 T
                   p(C | 
                         y, A) =            p(Ct | 
                                                   yt , A) =           ICt (
                                                                            yt ).   (6.4)
                                      t=1                        t=1
198                                                           MODELING WITH LATENT VARIABLES


[Observe that p(Ct |  yt , A) in (6.4) is a probability function and not a probability
density function; it places all its mass on a single observable outcome set indexed
by 
   yt .] Hence p(β, h, y, C | X, A) ∝

                  exp[−(β − β) H(β − β)/2]h(ν−2)/2 exp(−s 2 h/2)                     (6.5a)
                                                 
                     · exp[−h(        y − Xβ)/2]
                              y − Xβ) (                                              (6.5b)
                         
                         T
                     ·         ICt (
                                    yt ).                                             (6.5c)
                         t=1


   The kernel of (6.5a)–(6.5c) in (β, h, y), with the observed outcome Co replac-
ing the observable C, is the kernel of the posterior distribution. The conditional
                                                           y, yo ) and p(h | β,
posterior distributions are simple. The kernels of p(β | h,                   y, yo )
are determined by (6.5a)–(6.5b) alone, from which

                                β | (h,
                                       y, yo , X,A) ∼ N (β, H),                        (6.6)

                                            −1
where H = H + hX X and β = H (Hβ + hX
                                       y), and

                                s 2 h | (β,
                                           y, yo , X, A) ∼ χ 2 (ν),                    (6.7)

                   y − Xβ) (
where s 2 = s 2 + (          y − Xβ) and ν = ν + T . These results reflect the fact,
also apparent in (6.1) and (6.3), that with 
                                            y in the conditioning set, thus treating it as
observable, this model is precisely the same as the normal linear model introduced
in Example 2.1.2. The distributions in (6.6) and (6.7) are the same as those in that
example, but with  y replacing yo .
   The kernel of p(y | β, h, Co , X, A) is determined by (6.5b)–(6.5c). Utilizing the
equivalent expression

                                   
                                   T
                                                yt − β  xt )2 /2]
                                         exp[−h(
                                   t=1


in lieu of (6.5b), it is apparent that 
                                       y1 , . . . , 
                                                    yT are conditionally independent, with

              p(                                 yt − β  xt )2 /2]ICto (
                yt | β, h, Cto , xt , A) ∝ exp[−h(                       yt ).

Thus

              yt | (β, h, Cto , xt , A) ∼ N (β  xt , h−1 ) subject to 
                                                                      yt ∈ Cto .      (6.8)

In the first motivating example, conditional on β and h,     yt = yto if yt < yt∗ and 
                                                                                       yt
             −1                   ∗          ∗
∼ N (β xt , h ) subject to  yt ≥ yt if yt = yt . In the second example, conditional
on β and h,  yt = yt if yt > 0 and yt ∼ N (β  xt , h−1 ) subject to 
                                                                       yt ≤ 0 if yt = 0.
CENSORED NORMAL LINEAR MODELS                                                         199

   This algorithm is the same as that developed in Example 4.3.1, but with the
additional step (6.8). It was first proposed by Chib (1992). The approach can
be applied to many kinds of censoring in more complex models as well. See
Section 6.4.3, and Cowles et al. (1996) for examples.

Exercise 6.1.1 Categorical Censoring Household income in marketing surveys
is often reported in brackets: for example, under $15,000, $15,000–$25,000, . . . ,
over $95,000.

  (a) Suppose that household income is the outcome variable in a normal linear
       model. Using clear and consistent notation, show that this model, in con-
       junction with the reporting of income in brackets, is a special case of the
       censored linear model.
  (b) Suppose that the logarithm of household income is the covariate xtk (the
       last column of X) in a normal linear model. Suppose further that the nor-
       mal linear model is a correct specification—in the notation of Section 3.4,
       p(y | X, D) = p(y | β, h, X, A) for appropriate values β = β ∗ and h = h∗ .
       Finally, suppose that household income is incorrectly assumed to be at the
       midpoint of the observed bracket, and $140,000 is assumed to be household
       income if the observed bracket is ($95,000, ∞). Show that the pseudotrue
       values of β and h in this situation are not β ∗ and h∗ , respectively.
  (c) Let X∗ denote columns 1 through k − 1 of X, and X∗ = [x∗1 , . . . , x∗T ].
       Formulate a complete model incorporating the assumption that household
       incomes xtk are conditionally independent given the x∗t , with log(xtk ) ∼
       N (γ  x∗t , j −1 ). Utilize a prior distribution for γ and j that is independent of
       the prior distribution for β and h.
  (d) Outline a Gibbs sampling algorithm to simulate the posterior distribution of
       the model in (c).
  (e) Given the assumptions made about p(y | X, D) in (b) and about xtk in (c),
       are the pseudotrue values of β and h in (c) equal to β ∗ and h∗ , respectively?
   (f) Suppose that in part (b) the level of household income rather than the log-
       arithm of household income were the covariate xtk . How would this affect
       the Gibbs sampling algorithm in part (d)?

Exercise 6.1.2 Inference for Censored Outcomes             For the normal linear regres-
sion model

    y | (β, h, X, A)∼N (Xβ, h−1 IT ), β | A ∼ N (β, H−1 ), s 2 h ∼ χ 2 (ν),

three independent samples have been collected.

  • Sample 1 has T = T1 observations, with observed covariate matrix X = X1
     and the observed outcome vector yo1 .
200                                                         MODELING WITH LATENT VARIABLES


   • Sample 2 has T = T2 observations. The covariate matrix X = X2 is observed,
     but the outcome vector y2 is not. However, for any two observations t and s,
     we know whether yt > ys or ys > yt . (In other words, we observe the rank
     ordering of the outcome variables.)
   • Sample 3 has T = T3 observations. The covariate matrix X = X3 is observed.
     The outcome vector yo3 was also observed, but through an error in data pro-
     cessing the correspondence to the covariate matrix is no longer known. (In
     other words, we observe the T3 outcomes but don’t know which observations
     they correspond to.)
     (a) Using samples 1 and 2, construct a simulator that draws from the posterior
         distribution for β, h, and y2 . Be as explicit as you possibly can about the
         distributions used in the simulator.
     (b) Could you use sample 2 by itself to construct a simulator that would draw
         from the posterior distribution for β, h, and y2 ? If so, state the algo-
         rithm for the simulator. If not, indicate the difficulty and what additional
         information would be required.
     (c) Using samples 1 and 3, construct a simulator that draws from the posterior
         distribution for β, h, and y3 . Be as explicit as you possibly can about the
         distributions used in the simulator.
     (d) Show that the simulator constructed in part (c) is ergodic.


6.2 PROBIT LINEAR MODELS

Suppose that T individuals, indexed by t, each allocate income yt between two
goods, x and z, with respective prices px and pz constant across individuals. Good
x is continuously divisible, but z can be only 0 or 1. (For example, z might represent
a decision to enlist in the military, or not.) Individual t’s utility function is

            Ut (x, z) = z(at − b/x) + (1 − z)(rt − s/x); b > 0, s > 0;

and he/she consumes out of income yt . If z = 0, then x = yt /px and Ut (x, z) =
rt − spx /yt . If z = 1, then x = (yt − pz )/px and Ut (x, z) = at − bpx /(yt − pz ).
Individual t chooses zt = 1 if −bpx /(yt − pz ) + spx /yt + at − rt > 0.
   The econometrician observes px , pz , and (y1 , z1 ), . . . , (yT , zT ). She does not
observe (a1 , r1 ), . . . , (aT , rT ), but suppose that she is willing to take

                                                          i.i.d.
                    (at − rt ) | (px , pz , y1 , . . . , yT ) ∼ N (µ, σ 2 )

as representative of the distribution of these unobservables across individuals, and
to regard income yt as ancillary. Define the unobservable

                                                                   i.i.d.
              
              zt = µ − bpx /(yt − pz ) + spx /yt + εt ; εt ∼ N (0, σ 2 )             (6.9)
PROBIT LINEAR MODELS                                                                       201

and note that zt = I(0,∞) (
                           zt ). From (6.9), we have

  P (zt = 1 | b, s, µ, σ 2 , px , py , yt , A) = {σ −1 [−bpx /(yt − pz ) + spx /yt + µ]}.
                                                                                     (6.10)
Because nothing is changed if b, s, µ, and σ are scaled by a common positive
factor, the normalization σ 2 = 1 is convenient.
     In a probit model, A, the observables are a T × k matrix of covariates X = [x1 ,
. . . , xT ] and a corresponding set of T binary outcomes with

                     P (first binary outcome | xt , A) = (β  xt ),                    (6.11)
                                                                    
                 P (second binary outcome | xt , A) = 1 − (β xt ).                     (6.12)

In the motivating example the three covariates are a constant term, −px /(yt − pz ),
and px /yt ; the first binary outcome is zt = 1 and the second binary outcome is
zt = 0.
   The substance of the probit model is (6.11)–(6.12), regardless of how the binary
                                                       yt = β  xt + εt , εt ∼ N (0, 1),
outcome is coded. If we introduce the latent variables 
then the first outcome corresponds to    yt ≤ 0 and the second to    yt > 0. In this
context the natural outcome coding is the set-valued function Ct = ct (      yt ), with
Ct = (−∞, 0] for the first outcome and Ct = (0, ∞) for the second. The condi-
tionally conjugate prior distribution is β ∼ N (β, H−1 ).
   The joint distribution of observables and unobservables in the probit model is

   p(β,                        y, β | X, A)p(C | 
       y, C | X, A) = p(β | A)p(                 y, A)
                                                                            
                                                                            T
       ∝ exp[−(β − β) H(β − β)/2] exp[−(
                                         y − Xβ) (
                                                   y − Xβ)/2]                     ICt (
                                                                                       yt ).
                                                                            t=1

This expression is identical to (6.5a)–(6.5c) for the censored linear model, except
that here h = 1. Proceeding as in the analysis of that model, we obtain
                                                        −1
                              β | (
                                   y, C, A) ∼ N (β, H )

                                    −1
where H = H + X X and β = H (Hβ + X      y). In the distribution of 
                                                                       y conditional
on (C, β, X, A) the elements 
                             yt , known as probits, are independent:

                p(                          yt − β  xt )2 /2]ICt (
                  yt | β, Ct , X, A) ∝ exp[−(                      yt ).

   These conditional posterior distributions are the basis of a very simple Gibbs
sampling algorithm, first proposed in Albert and Chib (1993b). BACC incorporates
the probit linear model using the conjugate prior distribution and posterior simula-
tion algorithm described in this section. This approach can be extended to situations
involving more complex choices. When one choice is made from several alterna-
tives, the logical extension is the multinomial probit model, for which Bayesian
Markov chain Monte Carlo methods have been developed by McCulloch and Rossi
202                                                     MODELING WITH LATENT VARIABLES


(1994), Geweke et al. (1994, 1997), and McCulloch et al. (2000). When there are
several related dichotomous choices, the natural extension is the multivariate probit
model; see Chib and Greenberg (1998).

Exercise 6.2.1 Normalization and Representation in the Probit Model Con-
sider the motivating example at the start of this section.

  (a) Show that if the same constant is added to at and rt , an individual’s con-
      sumption will not change. What does this say about the econometrician’s
      decision to assume only a distribution for at − rt , rather than assume a
      nondegenerate bivariate distribution for (at , rt )?
  (b) Show that if the parameters b, s, µ, and σ in (6.9) or (6.10) are scaled by
      a common positive constant, then there is no change in the distribution of
      the observables (y1 , z1 ), . . . , (yT , zT ).
  (c) Why is it preferable to resolve the indeterminacy in scaling by taking σ 2 = 1
      rather than b = 1 or d = 1?
  (d) Derive (6.10) from (6.9).

Exercise 6.2.2 Ordered Probit Model In this model,       y | (β, h, X, A) ∼ N (Xβ,
h−1 IT ). However, the variables 
                                 yt are unobservable. Instead, we observe the out-
come yt = −1 if   yt < 0, yt = 0 if yt ∈ [0, 1], and yt = 1 if yt > 1. (In actual
application this could be coding for the outcomes “negative,” “indeterminate,” and
“positive” in a medical test.)

  (a) Are the “cutoff” values of 0 and 1 for          yt arbitrary? For example, would
      it have been less restrictive to choose yt = −1 if          yt < c1 , yt = 0 if 
                                                                                       yt ∈
      [c1 , c2 ], and yt = 1 if 
                                yt > c2 , treating c1 and c2 as unobservable parameters?
  (b) Derive a Gibbs sampling algorithm whose blocks are β, h, and the un-
      observable    yt . Show that it is ergodic with the unique invariant distribution
      being the posterior distribution of β, h, and the unobservable         yt .
  (c) Could this idea be extended to n > 3 ordered outcomes?



6.3 THE INDEPENDENT FINITE STATE MODEL

Often economic agents or entities can be characterized as being in one of a small
number of possible states. For example, a sample of individuals from a population
at a specific point in time might be classified as registered to vote with one of a
few political party preferences, registered without preference, or unregistered; or
households might be classified by the number of individuals in the household. If the
probability that a particular individual (household) is in a particular state is inde-
pendent of other observables and of the states of all other individuals (households),
then the distribution of classifications is an independent finite state model.
THE INDEPENDENT FINITE STATE MODEL                                                                         203

    This model is extremely simple. While we are sometimes interested in it directly,
it is interesting primarily because it can arise as a constituent of a more compli-
cated model. The independent finite state model will appear again in models with
mixtures (Section 6.4) and the first-order Markov finite state model (Section 7.2).
    In the independent finite state model there are m possible states of the world
that are occupied by n agents over T time periods; m > 1, n > 0, T > 0. For
any agent k, let the integer skt indicate the state occupied at time t; 1 ≤ skt ≤ m.
The independent finite state model specifies that the NT random variables skt are
mutually independent, and

 P [skt = j | π 1 , . . . , π m , A] = π j (k = 1, . . . , n; t = 1, . . . , T ; j = 1, . . . , m);
            
of course, m   i=1 π j = 1. The observables can be collected in the n × T matrix
S = [skt ] and the unobservables arranged in the m × 1 vector π = (π 1 , . . . , π m ) .
   Turning to inference, define

                                              
                                              n 
                                                T
                                      nj =              δ(skt , j ),                                     (6.13)
                                              k=1 t=1


the number of times that skt = j occurs in the sample. [The expression δ(skt , j ) in
(6.13) is an instance of the Kronecker delta function, defined δ(a, b) = 1 if a = b
and δ(a, b) = 0 if a = b.] From (6.3), we obtain

                                                
                                                n 
                                                  T                 
                                                                    m
                                                                             n
                            P (S | π , A) =               π skt =          πjj .                         (6.14)
                                                k=1 t=1             j =1


The number of occurrences nj (j = 1, . . . , m) constitutes a vector of sufficient
statistics in this model. The likelihood function provides the kernel of the conjugate
prior distribution of π. It is that of the Dirichlet distribution (Kotz et al. 2000,
Section 49.1) for random variables x1 , . . . , xm jointly distributed on the (m − 1)-
dimensional unit simplex
                                                                                
                                                                
                                                                m
                          xi : xi ≥ 0 (i = 1, . . . , m);              xi = 1 ,
                                                                i=1


with m positive parameters a1 , . . . , am and density
                                                m
                                                                
                                                                 m                   
                                                                                     m
    p(x1 , . . . , xm | a1 , . . . , am ) =             ai                 (ai )           xi(ai −1) .   (6.15)
                                                  i=1             i=1                i=1


[Note that the beta(a1 , a2 ) distribution (Casella and Berger 2002, Section 3.3) is
the special case m = 2.] Thus the conjugate prior distribution of π is the Dirichlet
204                                                        MODELING WITH LATENT VARIABLES


distribution with density
                                                           
                               m                  
                                                   m               
                                                                   m
                                                                           (a −1)
                 p(π | a) =     aj                     (aj )          πj j      .   (6.16)
                                    j =1           j =1            j =1


Like all conjugate prior distributions, this one has anotional data interpretation;
the information in the prior is analogous to that in m   j =1 aj − m observations in
the context of the independent finite state model, with aj − 1 occurrences of state
j (j = 1, . . . , m).
   The product of (6.14) and (6.16) is the posterior density kernel in standard form:
                                                    
                                m          m           
                                                         m
                                                               (a +n −1)
                p(π | S) ∝        aj           (aj )    πj j j .           (6.17)
                                   j =1           j =1        j =1


Comparing (6.17) with (6.15), it follows that the posterior distribution of π is
Dirichlet with parameters aj + nj (j = 1, . . . m). The posterior density combines
prior and sample information in a direct and obvious way. This is a consequence of
the fact that the Dirichlet distribution is a member of the exponential family (Defi-
nition 2.3.3) and the general result (2.60) for posterior distributions with conjugate
priors in that family.
    The corresponding marginal likelihood is the integral of the right side of (6.17)
with respect to π . The value of the integral can be read from the normalizing
constant in (6.15), and thus
                                     m          m
                                              aj          (aj + nj )
                                         j =1       j =1
                   p(S | A) = m                       m           .         (6.18)
                                            (aj + nj )          (aj )
                                           j =1               j =1

    As a consequence of the simplicity of the independent finite state model, the
posterior density and marginal likelihood have closed-form analytical expressions.
In a direct application of the model, there may be no need for posterior simulation;
see Exercise 6.3.1. When the independent finite state model is a constituent of a
more complex model, however, it is useful to be able to draw from the Dirich-
let distribution whose general form is (6.15). This can be done using a technique
given in Devroye (1986), pp. 593–596—construct the independent             random vari-
ables di ∼ χ 2 (2ai ) (i = 1, . . . , m) and then take xi = di / m    d
                                                                  j =1 j (j = 1, . . . , m).
    BACC incorporates the independent finite state model using the conjugate prior
distribution and posterior simulation algorithm described in this section.

Exercise 6.3.1 Properties of the Posterior Distribution Suppose that S = So is
observed in the context of the independent finite state model A with observables
probability distribution (6.14) and prior pdf (6.16).
MODELING WITH MIXTURES OF NORMAL DISTRIBUTIONS                                       205
                                                           m                      
                                                                         k
   (a) Derive an analytical expression for the moment E                π jj | So , A .
                                                                j =1
  (b) From the result in (a) express the posterior mean and variance of π j .
  (c) What is the value of the posterior mode?
                                                             
  (d) Show that the marginal distribution of π i is beta(ai , j =i aj ). [Hint: Con-
      sider the construction of Devroye (1986) and the reproductive property of
      the chi square distribution.]
  (e) Determine the marginal posterior density of any pair of parameters (π i , π k )
      (i = k).

Exercise 6.3.2 Empty Cells in the Independent Finite State Model Suppose
that in a sample So , n1 = 0.

  (a) What is the maximum likelihood estimate of π 1 ? Can you state the asymp-
      totic standard error associated with this estimate?
  (b) What is the marginal posterior distribution of π 1 , and what are the mean
      and standard deviation of this distribution?


6.4 MODELING WITH MIXTURES OF NORMAL DISTRIBUTIONS

The models for continuously distributed observables treated up to this point have
repeatedly exploited the specifications

                                 β ∼ N (β, Hβ−1 ),                                 (6.19)

                                 ε ∼ N (0, h−1 IT ),                               (6.20)

in the relation

                                    y = Xβ + ε                                     (6.21)

between the observables X and y. As first noted in Section 1.1.2, the specifica-
tion (6.20) is quite poor in some applications. It has nonetheless been maintained,
to this point, because (1) the combination (6.19)–(6.20) leads to a normal condi-
tional posterior distribution for β in all these models, and (2) we can generalize
both (6.19) and (6.20), building on the tools developed in the process of treating
(6.19)–(6.20) in the context of (6.21). This section turns to the generalization of
(6.20), while that of (6.19) is taken up in Section 8.4. The keys to extending (6.20)
are using latent variables and successive conditioning to create mixtures of normal
distributions. In the process of posterior simulation the successive conditioning in
the Gibbs sampler and related MCMC procedures recovers the underlying normal
distributions.
206                                                          MODELING WITH LATENT VARIABLES


6.4.1 The Independent Student-t Linear Model
In many applications of the normal linear model there is substantial evidence that
the probability of an unusually large or small value of the outcome yt is substantially
greater than indicated by a normal distribution. This is a well-documented phe-
nomenon in the case of financial asset returns; Section 1.1.2 provides an example.
   An alternative to (6.20)–(6.21) that better accommodates this phenomenon is

                                     yt = β  xt + εt ,                                      (6.22)

                   εt | (h, λ, A) ∼ t (0, h−1 ; λ) (t = 1, . . . , T ).
                                   i.i.d.
                                                                                             (6.23)

That is, each disturbance εt has a Student-t distribution with location parameter 0,
scale parameter h−1 , and λ degrees of freedom. A standard representation for εt is

                                       εt = 
                                             −1/2
                                            ht ηt ,                                          (6.24)

with

                       ηt | (h, A) ∼ N (0, h−1 ) (t = 1, . . . , T ),
                                    i.i.d.
                                                                                             (6.25)

                    λ ·
                                    i.i.d.
                       ht | (λ, A) ∼ χ 2 (λ) (t = 1, . . . , T ).                            (6.26)

The 2T random variables η = (η1 , . . . , ηT ) and 
                                                    h = (
                                                         h1 , . . . , 
                                                                      hT ) are mutually
independent. A convenient prior distribution for λ, which may easily be generalized
using the methods of Section 8.4, is the exponential with mean λ:

                                    λ ∼ exp(λ),                                              (6.27)
                                             −1
                               p(λ) = λ           exp(−λ/λ).                                 (6.28)

Smaller values for λ reflect assumptions that the distribution is more leptokurtic.
  From (6.22), (6.24), and (6.25)
                                   T                  
                                                           
                                                            T
  p(y | X, β,                                                    
                                                                   ht (yt − β  xt )2 /2 ,
                                          1/2
              h, h, A) ∝ h  T /2
                                         ht       exp −h                                     (6.29)
                                   t=1                       t=1


and from (6.26), we have

  p( 
     ht | λ, A) = [2λ/2 (λ/2)]−1 λλ/2                 exp(−λ
                                             (λ−2)/2
                                     ht                      ht /2) (t = 1, . . . , T ). (6.30)

Completing the model with β | A ∼ N (β, Hβ−1 ) and s 2 h | A ∼ χ 2 (ν), we obtain

                     p(β | A) ∝ exp[−(β − β) Hβ (β − β)/2],                                 (6.31)
                     p(h | A) ∝ h(ν−2)/2 exp(−s 2 h/2).                                      (6.32)
MODELING WITH MIXTURES OF NORMAL DISTRIBUTIONS                                            207

In view of (6.29), it proves convenient to define the “reweighted” observables:

                       y∗t = 
                             ht yt , x∗t = xt ht (t = 1, . . . , T )
                              1/2              1/2


                       y∗ = (y1∗ , . . . , yT∗ ) , X∗ = [x∗1 , . . . , x∗T ] .

   Examining (6.31) and (6.29), it is apparent that the conditional distribution
p(β | 
      h, h, X, yo , A) has exactly the same form as in the normal linear model
of Example 2.1.2, but with X∗ and y∗o in place of X and yo :
                                                                −1
                     β | (λ, 
                             h, h, yo , A) ∼ N (β, Hβ ),
                                                          −1
                   Hβ = Hβ + hX∗ X∗ , β = Hβ (Hβ β + X∗ y∗o ).

Similarly, from (6.32) and (6.29), we obtain

                  s 2 h | (λ, β, 
                                 h, yo , A) ∼ χ 2 (ν),
                   s 2 = s 2 + (y∗o − X∗ β) (y∗o − X∗ β), ν = ν + T .

Note that the degrees of freedom parameter λ is not involved in either distribu-
tion. This is a consequence of the equivalent interpretation of        h as a vector of
parameters, and (6.26)–(6.27) as a hierarchical prior distribution for     h.
   The product of (6.29) and (6.30) provides the kernel of p(     h | λ, β, h, X, yo , A),
in which h1 , . . . , 
                       hT are conditionally independent, specifically

       ht | λ, β, h, yo , X, A) ∝ 
    p(                                    exp{−[λ + h(yt − β  xt )2 ]
                                   (λ−1)/2
                                  ht                                   ht /2},

implying

              [λ + h(yt − β  xt )2 ] 
                                      ht | (λ, β, h, yo , X, A) ∼ χ 2 (λ + 1).

   The conditional posterior density kernel of λ is proportional to the product of
(6.28) and (6.30):
                                                                     T
                                                                      
        p(λ | β, h, 
                    h, yo , A) ∝ [2λ/2 (λ/2)]−T λT λ/2                      (λ−2)/2
                                                                            ht         (6.33a)
                                                                      t=1
                                  
                                               1 
                                                    T
                          · exp − λ +                ht λ = k(λ)                       (6.33b)
                                               2 t=1

Clearly the kernel k(λ) does not correspond to any common distribution. The
second component (6.33b) is the kernel of an exponential distribution that could
be used as a candidate distribution in a Metropolis within Gibbs step. However
the first component (6.33a) is also relatively quite informative for λ, leading to
acceptance probabilities that in general are very low. Instead, take the candidate
208                                                            MODELING WITH LATENT VARIABLES


density q(λ) to be that of a univariate normal distribution, with mean at the mode

λ of k(λ) and precision equal to −d 2 log k(λ)/dλ2 |λ=λ . This method is used in
BACC, for models with Student-t distributions. Typically the degrees of freedom
parameter, λ, exhibits more serial correlation in the Gibbs sampling algorithm than
do other parameters in the model, but the separated partial means test indicates
satisfactory performance in simulations that can be computed in a few minutes; for
more detail, see Exercise 6.4.4.

6.4.2 Normal Mixture Linear Models
The normal mixture linear model begins with (6.22) and then introduces the latent
state vector 
             s = (           sT ) . Conditional on X, 
                  s1 , . . . ,                         s obeys the independent finite
state model of Section 6.3 with parameter vector π = (π 1 , . . . , π m )

                                              
                                              T               
                                                              m
                                                                      T
                               s | π, A) =
                             p(                     πst =          πjj                  (6.34)
                                               t=1            j =1

            
where Tj = Tt=1 δ(  st , j ) is the number of observations t for which   st = j .
   Corresponding to each of the m states j , there is a mean parameter α j and
a positive precision parameter hj ; let α = (α 1 , . . . , α m ) and h = (h1 , . . . , hm ) .
Conditional on st = j , εt ∼ N [α j , (h · hj )−1 ]. Thus

                                      st = j, A] = (2π)−1/2 (h · hj )1/2
                 p[yt | β, h, π, α, h,
                    · exp[−h · hj (yt − α j − β  xt )2 /2] (t = 1, . . . , T ).          (6.35)

The disturbances εt are i.i.d. and follow a discrete normal mixture distribution:

                                            
                                            m
 p(εt | h, π, α, h, A) = (2π)−1/2 h1/2
                                                       1/2
                                                   π j hj exp[−h · hj (εt − α j )2 /2].
                                            j =1


Clearly h and h are unidentified, in the sense described in Exercise 4.5.3, as is
α if X contains a column of units, and states are not identified with respect to
permutation of the state index. Identification issues will be taken up subsequently
in the context of prior distributions.
   The mixture of normals distribution is very flexible. Figure 6.1 provides several
examples. For the special case in which the means α j are all the same, the nor-
mal mixture distribution is known as the “scale mixture of normals distribution.”
That distribution is symmetric, is unimodal, and must be leptokurtic; that is, the
coefficient of kurtosis K = E[εt − E(εt )]4 /var(εt )2 > 3, its value if εt is normally
distributed (see Exercise 6.4.1). Panels (a) and (f) of Figure 6.1 provide examples
of scale mixture of normals distributions. If the means α j are not all the same,
then the normal mixture distribution can be skewed, as illustrated in panels (c) and
(d). It can also be platykurtic (K < 3 ), as is the case in panels (b) and (e). Of
course, these distributions can be multimodal [panel (e)]. With a sufficient number
MODELING WITH MIXTURES OF NORMAL DISTRIBUTIONS                                                      209

  0.4                                                 0.2

  0.3                                                0.15

  0.2                                                 0.1

  0.1                                                0.05

    0                                                   0
    −6      −4     −2      0      2       4      6     −10        −5          0          5         10
                           (a)                                                (b)

  0.5                                                  4

  0.4
                                                       3
  0.3
                                                       2
  0.2
                                                       1
  0.1

    0                                                  0
     −5                    0                     5      −1        −0.5        0         0.5        10
                           (c)                                                (d)

  0.5                                                 0.4

  0.4
                                                      0.3
  0.3
                                                      0.2
  0.2
                                                      0.1
  0.1

    0                                                  0
     −6     −4     −2      0      2       4      6     −10        −5          0          5         10
                           (e)                                                (f)


Figure 6.1. Several normal mixture probability density functions: (a) leptokurtic distribution, t(5)
moments; (b) platykurtic distribution; (c) mildly right-skewed distribution; (d) severely right-skewed
distribution; (e) bimodal distribution; (f) N(0, 1) plus 10% N (0, 52 ) outliers. In each panel the heavy
line indicates a normal mixture probability density function. The lighter lines indicate the component
normal density functions, each scaled by its probability.



of components, the normal mixture distribution can mimic distributions that are
quite different from the normal, like the uniform [panel (b)].
   The conditionally conjugate prior densities in the normal mixture linear model
are (6.31) for β and (6.32) for h. The other parameters in the model all pertain to
the normal mixture distribution of εt . The choice of the prior distribution of these
parameters is driven by three considerations:

   1. Priors should be conditionally conjugate and proper. Conditionally conjugate
      priors simplify simulation from the posterior, as first noted in Section 2.3,
      and these prior can be revised by the reweighting methods discussed in
      Section 8.4. As discussed in Section 3.2, improper priors lead to difficulties
      in model comparison. In the normal mixture model, improper priors can
      lead to the even more serious complication that the posterior distribution
      itself is improper; see West and Harrison (1989), Section 12.3.4, Roeder and
      Wasserman (1997), and Geweke and Keane (2001).
210                                                             MODELING WITH LATENT VARIABLES


   2. Since we have introduced no information to the effect that two states indexed
      by i and j should not be indexed by j and i instead, the states         st are
      symmetric a priori. Prior distributions must incorporate this symmetry. A
      consequence is that the posterior distribution will also be symmetric, since
      interchanging the states does not affect the likelihood function. The pos-
      terior distribution will have m! symmetric components. In applications in
      which the different states have a substantive interpretation, this creates seri-
      ous conceptual complications (Celeux et al. 2000) and requires some explicit
      modifications of the posterior simulator like those suggested by Fruhwirth-
      Schnatter (2001). If, however, the only function of the latent states is to
      permit flexibility in the functional form of the probability density function,
      as is the case here, these issues are moot.
   3. It is easier to specify a prior distribution with a smaller number of hyperpa-
      rameters than a larger number. On the other hand, the range of hyperparam-
      eters must not be so narrow as to unduly compromise the flexibility of the
      normal mixture distribution.

These considerations lead to a Dirichlet distribution with parameters a1 = · · · =
am = r for π
                                                              
                                                              m
                         p(π | A) = (mr) (r)−m                       π r−1
                                                                       j ,                   (6.36)
                                                              j =1

                                                                                    i.i.d.
independent gamma distributions for the components of h, ν · hj ∼ χ 2 (ν · ) (j =
1, . . . , m)
                                                  
                                                  m
                                                          (−ν · −2)/2
                     −mν/2
                             (ν · /2)−m ν · ·
                                          mν /2
       p(h | A) = 2                                      hj             exp(−ν · hj /2),     (6.37)
                                                  j =1

and α | (h, A) ∼ N [0, (hα · h)−1 Im ], so that

                 p(α | h, A) = (2π)−m/2 (hα h)m/2 exp(−hα hα  α/2).                         (6.38)

The specification E(α) = 0 resolves the identification issues with respect to α
and β given that (as is usually the case) X has a column of units. The prior
variance in β conveys uncertainty about the location of the distribution of y given
X. The prior distribution of α is scale dependent on h−1/2 ; that is, it states prior
beliefs about the shape of the distribution. Keeping in mind that E(h) = ιm , a
prior distribution with hα−1/2 = 5 implies a prior probability of multimodality that
                         −1/2
is near 1, whereas hα           = 15 makes this probability negligibly small. Keeping in
mind that E(α) = 0, choice of ν · governs the prior probability of tail thickness
in the mixture normal density relative to the normal. In the prior distribution the
ratio hj / hk ∼ F (ν · , ν · ) for all j = k. If ν · = 1, the prior probability of component
variance ratios at least as great as those shown in Figure 6.1f is significant, whereas
if ν · = 5, it is negligible.
MODELING WITH MIXTURES OF NORMAL DISTRIBUTIONS                                                       211

   Posterior inference in the normal mixture model utilizes five blocks: γ  =
(α , β  ), h, π, h, and 
    
                         s. It is useful to define
                                                                                         
                  s) = 
                 Z(    Z = [           zT ] = [δ(
                             z1 , . . . ,          st , j )],             
                                                                           W        = Z X ,
                  T ×m                                                   T ×(m+k)
                                                                    
                                     0                                   hα hIm 0
                  γ      =                ,     Hγ (h)      = Hγ =                     ,
               (m+k)×1
                                     β        (m+k)×(m+k)
                                                                            0   Hβ

                 Q(     = diag(hs1 , . . . , hsT ).
                  s) = Q
                  T ×T


With this notation, (6.35) is equivalent to

                                                            1/2
                p(y | γ , h, π, h,                         Q
                                  s, X) = (2π )−T /2 hT /2                                       (6.39)
                                                     · exp[−h(y − Wγ    − Wγ
                                                                   ) Q(y  )/2].                 (6.40)

   The kernel of the conditional posterior density of γ is the product of (6.31),
(6.38), and (6.40), from which the conditional posterior distribution is

        γ | (h, h,
                  s, yo , X, A) ∼ N (γ , Hγ );
                                                                      −1
                                  Hγ = Hγ + hW  W,
                                              Q  γ = H [H γ + +hW    o ].
                                                                     Qy                          (6.41)
                                                         γ  γ


  The conditional posterior density of h is the product of (6.32), (6.38), and (6.35).
This kernel corresponds to the conditional posterior distribution

                       
                       T
 s 2 + hα α  α+             hst (yt − αst − β  xt )2 h | (γ , h,
                                                                    s, yo , X, A) ∼ χ 2 (ν + m + T ).
                       t=1
                                                                                (6.42)
The
   m
        conditional posterior density kernel of π is the product of (6.34) and (6.36),
         r+T −1
       π j , and thus the conditional posterior distribution is Dirichlet with
   j =1 j
parameters r + Tj (j = 1, . . . , m).
   The conditional posterior density kernel of h is the product of (6.37) and (6.35),
which implies
                
                                 
                                 T
                    ν 2· + h             st , j )(yt − α j − β  xt )2 hj | (γ , h,
                                       δ(                                         s, yo , X, A)
                                 t=1

                      ∼ χ (ν · + Tj ) (j = 1, . . . , m).
                             2
                                                                                                   (6.43)

   The conditional posterior density kernel for the state assignments  s is the product
of (6.34) and (6.35) taken over t = 1, . . . , T . Thus the states 
                                                                   st are conditionally
212                                                     MODELING WITH LATENT VARIABLES


independent, with

          st = j ) | (γ , h, π, h, yo , X, A)
       P (
          ∝ π j hj exp[−h · hj (yt − α j − β  xt )2 /2] (j = 1, . . . , m).
                  1/2
                                                                                    (6.44)

Draws from these independent finite state distributions are straightforward.
   BACC incorporates the normal mixture linear model using the conditionally
conjugate prior distribution and posterior simulation algorithm described in this
section. The output of the posterior simulator will, in general, reflect some switching
between labels assigned to states. This poses no complications for problems in
which functions of interest depend on the parameters α, h, and π only through
the pdf of yt − β  xt , as is always the case when the mixture of normals model is
introduced solely to provide a flexible representation of this distribution. That is
the case in the following example.

Example 6.4.1 A Normal Mixture Linear Model for Earnings (The online
appendix contains data, annotated code, and output for this example.) There is a
long and well-established literature that studies the relationship between earnings
and the determinants of earnings suggested by lifecycle human capital models.
Going back at least to the work of Mincer (1958), the essence of these models
is that an individual’s productivity, or human capital, is an increasing function of
formal education and work experience. By far the most common measure of formal
education is years of schooling, and the most common measure of experience is
age. The panel study of income dynamics (PSID) is a household-based panel that
has collected information on earnings and other aspects of economic activity. This
example uses data collected in 1993 on the ages, levels of education, and earnings
of 2698 white men between the ages of 25 and 65 who had earnings of at least
$1000. It focuses on the distribution of earnings conditional on age and education.
    Economic theory provides little guidance on the functional form of this con-
ditional distribution. Consistent with much of the human capital literature, the
expectation of the logarithm of earnings (yt ) is assumed to be a polynomial func-
tion of age (at ) and education (et ), including
                                         all termsjup to order 4 in age and 2 in
education; thus, E(yt | at , et , A) = 4i=0 2j =0 β ij ati et . If the polynomial terms are
organized in a 15 × 1 vector xt and the coefficients are arranged correspondingly
in a 15 × 1 vector β, then we may write E(yt | xt , β, A) = β  xt , consistent with
the general notation adopted for the linear model in Example 2.1.2. Section 5.4
considers the question of specification of the order of the polynomial in the con-
text of nonlinear regression; see in particular Exercise 5.4.6. Examples 8.3.1 and
8.3.3 return to the issue of the adequacy of this formulation of the regression func-
tion. The prior distribution derives from the assumption β  xt | A ∼ N (µ, τ 2 )(t =
                                                                          i.i.d.

1, . . . , T ), where µ = 10.5, roughly the sample average of log earnings; τ 2 = T σ 2 ,
where T is sample size and σ = 0.7, roughly the sample standard deviation of log
earnings conditional on age and education. The prior distribution of the precision
parameter h is 83 h | A ∼ χ 2 (10). The mode of this prior distribution is h = 3,
MODELING WITH MIXTURES OF NORMAL DISTRIBUTIONS                                    213

and the standard deviation is ∼1.7. This completes the specification of a nor-
mal linear model, which is useful as a comparison benchmark with the mixture
models.
    The mixture models require the specification of the prior hyperparameters m,
hα , ν · , and r. We consider mixtures of two (m = 2) and three (m = 3) normal dis-
tributions, and in each case take hα = 0.4, ν · = 3, and r = 1. This allows enough
spread in the distributions to ensure a small but nonnegligible probability of mul-
timodality in the density, while placing substantial prior probability on large ratios
of component variances hi / hj . In this and other complex models, prior distribu-
tions can best be understood through their implications for the relevant functions
of interest. Example 8.3.1 pursues this method in detail for this application.
    The normal model and 2 mixture models have almost identical implications for
the posterior regression function E(y | a, e, A). Figure 6.2a provides one repre-
sentation, for the mixture of three normal distributions. At all levels of education,
expected log earnings is a concave function of age, with a peak at age 50 for
college graduates (e = 16) and the early 50s for those who did not graduate from
high school (e < 12). On the other hand, expected log earnings do not drop as
rapidly after their peak for college graduates as they do for high school graduates,
but rise more rapidly for young men. Returns to education, measured as the differ-
ence between expected log earnings for college and high school graduates, steadily
increase with age.
    The data strongly favor the mixture models as compared with a normal model.
The log marginal likelihood for the latter model is −3056.1, whereas it is −2762.0
for the mixture of two normals and −2757.2 for the mixture of three normals. The
remaining panels of Figure 6.2 provide more detail for the conditional distributions
and some insight into the marginal likelihood values. Panel (b) provides the poste-
rior expectation of the pdf of the residual term y − β  x in the normal model. The
darker line in panel (c) does the same for the mixture of two normals model and
in (d), for the mixture of three normals model. The corresponding lighter line in
each of these panels provides the posterior expectation of a normal density with
the same mean and variance as in the mixture of normals distribution. The striking
similarity of the normal densities in panels (b), (c), and (d) can be interpreted as
a consequence of Theorem 3.4.2 and Example 3.4.3; the pseudotrue normal model
will have the mean and variance of the assumed data generating process D. [For
a variant on this approach that uses all three models simultaneously in a single
MCMC algorithm, see Richardson and Green (1997).]
    The normal mixture distributions in panels (c) and (d) have mean zero. They
are strongly negatively skewed, as indicated by the thicker left tail and the positive
mode. They are strongly leptokurtic, as indicated by a modal value substantially
higher than that of the normal distribution, as well as the thicker tails. The mixture
of normals densities in panels (c) and (d) are strikingly similar. The model and
data do little to exploit the additional flexibility provided by a third component to
modify the two-component density. Nevertheless, the sample of 2698 observations
provides decisive evidence in favor of the mixture of three normals model over the
mixture of two normals model, with a Bayes factor of 121.5.
214                                                                                    MODELING WITH LATENT VARIABLES


             17
                                                                                0.8
             16
                                                                   10.6
                                                                                0.7
             15               10.4
                                                                                0.6
             14
                                                                                0.5
 Education




             13

                                                                  10.2    9.1   0.4
             12
                                                                          9.2   0.3
             11
                                    10
             10                                                           9.3   0.2

              9               9.8                                               0.1
                        9.6
                  9.4
             8                                                                   0
                          30              40             50         60            −2    −1          0       1     2
                                               Age                                            Disturbance
                                               (a)                                                (b)


        0.8                                                                     0.8

        0.7                                                                     0.7

        0.6                                                                     0.6

        0.5                                                                     0.5

        0.4                                                                     0.4

        0.3                                                                     0.3

        0.2                                                                     0.2

        0.1                                                                     0.1

             0                                                                   0
              −2                     −1          0            1            2      −2    −1          0       1     2
                                           Disturbance                                        Disturbance
                                               (c)                                                (d)

Figure 6.2. Some aspects of the posterior distribution of log earnings conditional on age and education:
(a) expected log earnings conditional on age and education; disturbance pdf assuming normal distribution
(b), mixture of two normals (c), mixture of three normals (d).



    Distributions can be summarized in many ways. The coefficients of skewness
and kurtosis are the most common representations of the third and fourth moments.
In any given application there may be more substantive summaries, as well. In this
example, the conditional distributions indicate the magnitude of inequality in earn-
ings, given age and education. A widely used measure of inequality is the Gini coef-
ficient, which derives from the Lorenz curve. The Lorenz curve L(p), defined on
the unit interval, is the fraction of total earnings accruing to individuals in earnings
quantile p or lower. If all individuals have the same earnings,
                                                          1        then L(p) = p and
in general L(p) ≤ p. The Gini coefficient is G = 2 0 [p − L(p)] dp; G ∈ [0, 1]
with G = 0 if and only if all individuals have the same earnings and G = 1 if
and only if all earnings accrue to one individual. We consider two other measures
of inequality: P , the fraction of men with earnings less than one-half of median
MODELING WITH MIXTURES OF NORMAL DISTRIBUTIONS                                     215

earnings; and R, the fraction of earnings accruing to men in the top decile of the
earnings distribution.
   The distribution of y − β  x in the mixture of three normals model is more
negatively skewed and more leptokurtic than in the mixture of two normals model,
but only slightly so. By contrast, the coefficient of skewness is 0 and the coefficient
of kurtosis is 3 in a normal model. The measures of inequality are nearly identical
in the two mixture models. These results reconfirm the fact that addition of a third
component to a mixture of two normals distribution changes essentially nothing
in this example. By contrast, all three measures of inequality are substantially
higher in the normal model. Panels (c) and (d) of Figure 6.2 indicate the reason
why. The assumed normal distribution, in capturing the mean and variance of
the mixture of normals distribution, shifts mass away from the mean, rather than
toward the mean, except in the extreme tails of the distribution. [See panels (c)
and (d) of Figure 6.2.] The former effect dominates the latter in all three measures
of inequality, whereas the converse is true in the coefficients of skewness and
kurtosis.

Measure                           Model           Median         Interquartile Range

Coefficient of skewness        Mixture (2)        −1.063        (−1.527, −0.868)
                               Mixture (3)        −1.340        (−1.599, −0.981)
Coefficient of kurtosis        Mixture (2)         6.263          (5.871, 6.722)
                               Mixture (3)         6.529          (6.177, 6.896)
Gini coefficient G             Normal              0.398          (0.393, 0.404)
                               Mixture (2)         0.345          (0.337, 0.353)
                               Mixture (3)         0.345          (0.337, 0.355)
Low earnings P                 Normal              0.174          (0.168, 0.179)
                               Mixture (2)         0.142          (0.137, 0.148)
                               Mixture (3)         0.150          (0.145, 0.156)
High earnings R                Normal              0.294          (0.290, 0.299)
                               Mixture (2)         0.264          (0.256, 0.272)
                               Mixture (3)         0.266          (0.256, 0.276)



6.4.3 Generalizing the Observable Outcomes
Recall that in the censored linear model (Section 6.1) the continuous outcome
variable 
         yt is latent (unobservable). The observable outcome is a set-valued func-
tion Ct = ct ( yt ), mapping each possible outcome into exactly one set (6.2) having
the property   yt ∈ Ct . The probit model (Section 6.2), the censored linear model,
and more general censoring of outcome variables (see Exercise 6.1.1) are spe-
cial cases. The fully observed linear model of Example 2.1.2 is the trivial special
case Ct =  yt .
   This same strategy may be used to extend both the Student-t and normal mixture
linear models. The distribution of  yt conditional on all parameters, latent variables
216                                                          MODELING WITH LATENT VARIABLES


and X, but not C = {C1 , . . . , CT }, is

                       yt | (β, h, 
                                  h, X, A) ∼ N [β  xt , (h · 
                                                               ht )−1 ]              (6.45)

in the extension of the Student-t linear model, and

                                   s, X, A) ∼ N [γ  wt , (h · hst )−1 ]
                     yt | (γ , h, h,                                                (6.46)

in the extension of the normal mixture linear model. The probability distribution
of observables is given by (6.4), repeated here for reference:

                                     
                                     T                      
                                                            T
                       p(C | 
                             y) =           p(Ct | 
                                                   yt ) =         ICt (
                                                                       yt ).         (6.47)
                                      t=1                   t=1


   In posterior simulation the generalization introduced in Section 6.1 requires only
one additional step, here, as it did there. In the case of the Student-t model, draw
from (6.45) subject to the constraint   yt ∈ Cto , and in the normal mixture model
draw from (6.46) subject to the same restriction.
   This generalization leads to a wide class of models, many on the frontier of
current econometric research; for further discussion, see Section 5 of Geweke and
Keane (2001), and for applications see Chib and Greenberg (1995) and Rossi et al.
(2001). All of the variants discussed in this section are incorporated in BACC.

Exercise 6.4.1 Properties of the Normal Mixture Linear Model Consider the
disturbance term, εt = yt − β  xt , in this model.

  (a) Show that if α 1 = · · · = α m = 0, then the distribution of the disturbance is
      symmetric, unimodal, and leptokurtic.
  (b) Show that if h1 = · · · = hm , then the distribution of the disturbance can be
      either leptokurtic or platykurtic.
  (c) Show that if X is any random variable, there exists a sequence of random
                                                                               d
      variables Xn , each with a normal mixture distribution, such that Xn → X.

Exercise 6.4.2 Ergodicity Consider the posterior simulation algorithm for the
normal mixture linear model presented in this section.

  (a) Show that the Markov chain is ergodic.
  (b) Is the Markov chain uniformly ergodic? If so, indicate why. If it is difficult to
      demonstrate uniform ergodicity, try to develop a modified algorithm that is
      uniformly ergodic using the methods described in Section 4.6.1. [Diebolt and
      Robert (1994) investigate ergodicity problems for this and similar algorithms
      in mixture models.]
MODELING WITH MIXTURES OF NORMAL DISTRIBUTIONS                                       217

Exercise 6.4.3 Interval Data A historian is using Army recruiting records from
the American Revolutionary War to learn about the distribution of height (y1t ) and
weight (y2t ) among young men in the late 1700s in colonial America. She has the
following information.

  (a) For n1 individuals who were accepted as Army recruits, she knows both
       height and weight.
  (b) For n2 individuals who were accepted as Army recruits, she knows height
       but not weight.
  (c) For n3 individuals who were accepted as Army recruits, she has weight but
       not height.
  (d) She knows that there were n4 individuals accepted as Army recruits, but for
       these individuals show knows neither height nor weight.
  (e) She knows that n5 individuals were rejected as recruits because they failed
       to meet height and weight standards.
   (f) She knows that the height standard was c11 ≤ y1t ≤ c12 and the weight
       standard was c21 ≤ y2t ≤ c22 ; she knows all four cij values.
       The historian is willing to make the following assumptions:
       1. The population from which recruits were either accepted or rejected is a
          random sample of young men in colonial America.
       2. The only reason for rejection was failure to meet height and weight
          standards.
       3. All missing data are missing completely at random (recall Example 2.2.3).
       4. For yt = (y1t , y2t ) , yt ∼ N (µ, H−1 ).
                                   i.i.d.

       5. The prior distributions of µ and H are independent, the prior for µ is
          normal, and the prior for H is Wishart.
       The historian’s immediate objective is to construct a posterior simulator
       for µ and H. Show how to do this, using a Markov chain Monte Carlo
       algorithm.

Exercise 6.4.4 Class Size and Test Scores Revisited Example 5.1.1 assumed
that the distribution of test scores conditional on covariates is normal. Consider
two alternatives: that this distribution is i.i.d. Student-t, and that it is i.i.d. normal
mixture with two components.

  (a) For each alternative, set up conditionally conjugate prior distributions that
      are comparable to those in Example 5.1.1. In each case, defend your choices
      of prior distributions for the additional parameters.
  (b) For each alternative distribution, compute the Bayes factor in favor of that
      alternative, versus the original specification.
  (c) Regardless of the Bayes factor in (b), work through the decision prob-
      lems of Example 5.1.2 under each alternative distribution. Are the results
      significantly affected? Why or why not?
218                                                      MODELING WITH LATENT VARIABLES


Exercise 6.4.5 Outliers The problem of “outliers” in regression is a conventional
topic in many regression courses. One approach to outliers is to assume that

                          yt | (β, h, h∗ , A) ∼ N (β  xt , h−1 )                  (6.48)

if yt is not an outlier and

                         yt | (β, h, h∗ , A) ∼ N (β  xt , h∗−1 )                  (6.49)

if yt is an outlier, together with the idea that h∗       h. Outliers typically constitute
only a small fraction of an entire sample.

  (a) Suppose that we knew which observations were outliers and which were
      not. State the conditional posterior distribution for β. Show that for given
      h, as h∗ → 0, the posterior distribution effectively ignores the outlier obser-
      vations.
  (b) For the rest of this problem, assume that we do not know which observations
      are outliers and which are not. Carefully state a complete mixture of normals
      linear model that incorporates all the features of outliers stated at the start
      of this problem. Be as specific as possible about parameters in the prior
      distribution that would best incorporate these features.
  (c) Briefly describe a Markov chain Monte Carlo algorithm for the posterior
      distribution in (b). Show how the algorithm yields, as a byproduct, the
      probability that each observation is an outlier.
  (d) Suppose that (6.48)–(6.49) is, indeed, the data-generating process. Suppose
      without loss of generality that h = 1. Sample size T is fixed. Show that as
      h∗ → 0, the algorithm in (c) will correctly classify each observation as an
      outlier or not.
      [For more on this approach to outliers, see Chaloner and Brant (1988) and
      Smith and Kohn (1996).]

Exercise 6.4.6 Specification of the Regression Function in Example 6.4.1
Repeat the analysis in Exercise 5.4.6, but assuming a normal mixture linear model.

Exercise 6.4.7 The Earnings Example Extended This exercise extends
Example 6.4.1.

  (a) The example focused on five properties of the conditional distribution:
      skewness and kurtosis, and the measures of inequality G, P , and R. The
      example also showed that earnings vary systematically with age and educa-
      tion. Assuming that the relevant distribution of age and education is given
      by the sample of 2698 men used in the example, find posterior medians and
      interquartile ranges for the unconditional distribution of log earnings.
  (b) What is the probability that a 40-year-old man with 16 years of education
      has higher earnings than a 40-year-old man with 12 years of education?
MODELING WITH MIXTURES OF NORMAL DISTRIBUTIONS                                   219

  (c) The example reported medians and interquartile ranges for skewness and
      kurtosis. Try to compute posterior means and variances for skewness and
      kurtosis, identify the problem that results, and attempt to rectify it. (Hint:
      The prior distribution guarantees the existence of some, but not all, posterior
      moments.)
CHAPTER 7




      Modeling for Time Series


In many decisionmaking problems the vector of interest is future (and therefore
unobserved) values of time series. Section 1.1.2 introduced one such problem,
assessing value at risk. The common structure of all of these problems is that the
distribution of the vector of interest ω = (yT +1 , . . . , yF ) is inherent in the model’s
specification of p(yt | Yt−1 , θ A , A) (t = 1, 2, . . .):

                                               
                                               F
                    p(ω | YT , θ A , A) =              p(yt | Yt−1 , θ A , A).         (7.1)
                                              t=T +1


Then, as always
                               
            p(ω | YoT , A) =          p(ω | YoT , θ A , A)p(θ A | YoT , A) dν(θ A ).   (7.2)
                                 A


The central technical problem is construction of the posterior simulator θ A(m) ∼
p(θ A | YoT , A). Given this, draws from p(ω | YoT , A) require only the forward sim-
ulation of the model evident in (7.1). Because of the consistent conditioning in
(7.1)–(7.2), uncertainty about parameters or other unobservables θ A and uncer-
tainty about the future conditional on θ A is integrated in seamless fashion. For
further development of this idea and comparison with other methods, see Geweke
and Whiteman (in press).
   As emphasized in Chapter 1, this conditioning is congruent with the circum-
stances of the decisionmaker, who must proceed on the basis of information YoT
and A that is available. This fact, combined with the development of posterior
simulators that make (7.2) practical, has led to vigorous growth in Bayesian mod-
eling for time series and the application of these models in forecasting, portfolio
allocation, and other decisionmaking contexts. Geweke and Whiteman (in press)
review this literature. This chapter provides technical detail for three time series
models, each illustrating a different significant set of the tools that have proved
Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.

                                                                                        221
222                                                                          MODELING FOR TIME SERIES


useful in this endeavor. Section 7.1 develops Bayesian methods for autoregressions
using the exact likelihood function for the stationary case. Section 7.2 turns to the
first-order Markov model, which is the most commonly applied model for discrete
time series. Section 7.3 uses this model in combination with latent variables and
normal distributions to construct a leading simple yet general model for conditional
dependence in time series.


7.1 LINEAR MODELS WITH SERIAL CORRELATION

Suppose that in the linear regression model introduced in Example 2.1.2 and used
throughout Chapter 2 the covariates and dependent variable are time series, each
measured at a point in time or as averages over successive intervals. If in continuous
time these variables move smoothly without jumps, then as the sampling interval
becomes shorter and shorter, the assumption that the disturbances εt = yt − β  xt
are mutually independent becomes untenable.
   This section takes up a modification of this model that weakens the assump-
tion of independence, replacing it with the assumption that εt obeys a stationary
autoregressive process of order p. This modification specifies

                               yt = β  xt + εt ,                                                   (7.3)
                                      
                                      p
                               εt =         φ s εt−s + ut ,                                         (7.4)
                                      s=1

                               ut | (εt−1 , εt−2 , . . .) ∼ N (0, h−1 ),
                                                         i.i.d.
                                                                                                    (7.5)

for all periods t = 1, . . . , T . Moreover, εt is stationary—that is, for any set of
s1 , . . . , sm , the distribution of the vector (εt , εt−s1 , . . . , εt−sm ) does not depend
on t. The assumption of stationarity is important in addressing the complication
introduced by the fact that the observables are (y1 , x1 ), . . . , (yT , xT ), and (7.4)
introduces ε−p+1 , . . . , ε0 in addition to β, h, and φ = (φ 1 , . . . , φ p ) . A necessary
condition for stationarity is φ ∈ Sp ⊆ Rp , where
                                                                        
                                        p         
                                                   
                         Sp = φ : 1 −       φ s zs  = 0 ∀ z : |z| ≤ 1
                                                   
                                               s=1

and z is complex.
   Motivated by (7.4), define

                   
                   p
                                                              
                                                              p
      yt∗ = yt −         φ s yt−s     and      x∗t = xt −           xt−s φ s (t = p + 1, . . . , T ),
                   s=1                                        s=1

                ∗
and take y∗ = (yp+1 , . . . , yT∗ ) , X∗ = [x∗p+1 , . . . , x∗T ] . Then

                           y∗ | (β, φ, h, X, A) ∼ N (X∗ β, h−1 IT −p ).
LINEAR MODELS WITH SERIAL CORRELATION                                                   223

Let yp denote the first p elements of y and Xp the first p rows of X. Then

                     yp | (β, φ, h, X, A) ∼ N [Xp β, h−1 Vp (φ)].                      (7.6)

The p × p matrix Vp (φ) will be derived shortly. From (7.5), y∗ and yp are indepen-
dent conditional on (β, φ, h, X), and the Jacobian of the one-to-one transformation
between y and (yp , y∗ ) is one. Hence
                                                       −1/2
         p(y | β, φ, h, X, A) = (2π )−T /2 hT /2 Vp (φ)
                                           
                                · exp −h (y∗ − X∗ β) (y∗ − X∗ β)
                                      + (yp − Xp β) Vp (φ)−1 (yp − Xp β) /2 .         (7.7)

An alternative expression for the observables density emphasizing the role of φ
begins with εt = yt − β  xt from (7.3). Define
                                                            
                          εp+1                   εp · · · ε1
                       εp+2                  εp+1 · · · ε2 
                                                            
                ε∗ =  .  and E =  .                      ..  .         (7.8)
                       ..                    ..           . 
                                εT                        εT −1 · · · εT −p

Then (7.7) becomes

    p(y | β, φ, h, X, A) = (2π )−T /2 hT /2 exp[−h(ε∗ − Eφ) (ε ∗ − Eφ)/2]            (7.9a)
                    −1/2
            · Vp (φ)     exp[−h(yp − Xp β) Vp (φ)−1 (yp − Xp β)/2].                (7.9b)

   Because εt is stationary, cov(εi , εj ) depends only on |i − j |, and so the (i, j )
entry of Vp (φ) may be expressed v|i−j | . From (7.4)

         h−1 vj = cov(εt , εt−j | φ, h, A)
                    
                    p
                =         φ s cov(εt−s , εt−j | φ, h, A) + cov(ut , εt−j | φ, h, A)
                    s=1

                          
                          p
                = h−1           φ s vj −s + δ(0, j )h−1                               (7.10)
                          s=1

for all j ≥ 0. Evaluating (7.10) for j = 1, . . . , p leads to the p Yule–Walker
equations
                                         φ   v 
                     v0    v1 . . . vp−1         1           1
                  v1                      φ 2   v2 
                          v0 · · · vp−2                   
                  ··· ··· ··· ···            . = .                   (7.11)
                                            ..   .. 
                    vp−1 vp−2 · · · v0        φp           vp
224                                                            MODELING FOR TIME SERIES


If φ ∈ Sp , then (7.11) determines v0 , v1 , . . . , vp−1 up to a scaling factor, and the
p × p matrix in (7.11) will be positive definite if v0 > 0 and negative definite if
v0 < 0. Evaluating (7.10) for j = 0 yields

                                         
                                         p
                                  v0 =         φ s vs + 1,                        (7.12)
                                         s=1


which determines the scale factor; φ ∈ Sp implies v0 > 0.
   The posterior simulator in this model is similar to that first proposed by Chib
(1993). [For an extension to autoregressive-moving average models, see Chib and
Greenberg (1994), and for extensions involving missing data, see Barnett et al.
(1996).] The kernel of (7.7) in β indicates that the conditionally conjugate prior
distribution of β is normal, β ∼ N (β, Hβ−1 ):
                              1/2
         p(β | A) = (2π)−k/2 Hβ  exp[−(β − β) Hβ (β − β)/2].                   (7.13)

That of h is a gamma distribution, s 2 h ∼ χ 2 (ν) :

              p(h | A) = 2−ν/2 (ν/2)−1 (s 2 )ν/2 h(ν−2)/2 exp(−s 2 h/2).         (7.14)

Examining (7.9a)–(7.9b), it is evident from the presence of Vp (φ) in (7.9b) that a
conditionally conjugate
                      prior distribution for φ would involve the awkward func-
tional forms Vp (φ) and Vp (φ)−1 . On the other hand, the kernel of (7.9a) in φ is
normal. This suggests a prior distribution φ ∼ N (φ, Hφ−1 ) truncated to the set Sp

                                                1/2
                 p(φ | A) = (2π)−p/2 D(φ, Hφ ) Hφ 
                              · exp[−(φ − φ) Hφ (φ − φ)/2]ISp (φ),               (7.15)

where
                                       
                           1/2
   D(φ, Hφ )−1 = (2π)−p/2 Hφ                exp[−(φ − φ) Hφ (φ − φ)/2] dφ.
                                         Sp


   A Gibbs sampling algorithm with a Metropolis step can simulate the unobserv-
ables in this complete model. The posterior density kernel is the product of the
prior densities (7.13), (7.14), (7.15), and the observables density expressed in either
of the forms (7.7) or (7.9a)–(7.9b). The conditional posterior density kernel of β,
from (7.7) and (7.13), is

        p(β | h, φ, yo , X, A) ∝ exp{−[(β − β) Hβ (β − β)
                                   + h(y∗o − X∗ β) (y∗o − X∗ β)
                                   + h(yop − Xp β) Vp (φ)−1 (yop − Xp β)]/2}.
LINEAR MODELS WITH SERIAL CORRELATION                                                 225

Hence
                                                            −1
                         β | (h, φ, yo , X, A) ∼ N (β, Hβ );
                  Hβ = Hβ + hX∗ X∗ + hXp Vp (φ)−1 Xp ,
                           −1
                    β = Hβ [Hβ β + hX∗ y∗o + hXp Vp (φ)−1 yop ].

Similarly, the posterior density kernel for h, from (7.7) and (7.14), shows

    s 2 h | (β, φ, yo , X, A) ∼ χ 2 (ν); ν = ν + T ,
      s 2 = s 2 + (y∗o − X∗ β) (y∗o − X∗ β) + (yop − Xp β) Vp (φ)−1 (yop − Xp β).

   From (7.9a)–(7.9b) and (7.15) the conditional posterior density kernel of φ is

          p(φ| β, h, yo , X, A) ∝ exp{−[(φ − φ) Hφ (φ − φ)
                                   + h(ε ∗o − Eo φ) (ε∗o − Eo φ)]/2}           (7.16a)
                                   · r(β, h, φ)ISp (φ),                         (7.16b)

where ε∗o and E∗o are defined by substituting εot = yto − β  xt for εt in (7.8)
(t = 1, . . . , T ) and r(β, h, φ) is expression (7.9b) after substituting yo for y. The
distribution corresponding to the kernel of (7.16a) in φ is
                                                            −1
                         φ | (β, h, yo , X, A) ∼ N (φ, Hφ ),                     (7.17)

where
                                                 −1
                 Hφ = Hφ + hEo Eo , φ = Hφ (Hφ φ + hEo ε ∗o ).

At iteration m a Metropolis within Gibbs step (see Section 4.6.2) for φ draws a
candidate φ ∗ from the distribution (7.17), using the current values β (m) of β and
h(m) of h. From (7.16b) the acceptance probability for the candidate is
                                                                 
                              r(β (m) , h(m) , φ ∗ )ISp (φ ∗ )
                       min                                     , 1 .
                                r(β (m) , h(m) , φ (m−1) )

   BACC incorporates the linear model with serial correlation using the conjugate
prior distribution and posterior simulation algorithm described in this section.

Exercise 7.1.1 A Linear Model with Serial Correlation and Missing Data
Suppose yt = β  xt + εt (t = 1, . . . , T ). The disturbance εt is stationary and obeys
the first-order autoregression

               εt = ρεt−1 + ut , ut | (εt−1 , εt−2 , . . .) ∼ N (0, h−1 ).
                                                          i.i.d.
226                                                          MODELING FOR TIME SERIES


Prior beliefs are given by the three independent distributions

               β ∼ N (β, H−1
                          β ), s h ∼ χ (ν), ρ ∼ uniform (−1, 1).
                                2     2



  (a) Design a Markov chain Monte Carlo algorithm for Bayesian inference in
      this model.
  (b) Now suppose that some of the observables yt are missing at random (recall
      Example 2.2.3). The covariates xt are always observed. Modify the Gibbs
      sampling algorithm designed in part (a) to accommodate this complication.

Exercise 7.1.2 Marginal Likelihood in the Linear Model with Serial Corre-
lation The prior pdf of φ is (7.15).

  (a) Explain how to approximate D(φ, Hφ ) by means of direct simulation.
  (b) Why is the value of D(φ, Hφ ) important in evaluating the marginal likeli-
      hood of this model?


7.2 THE FIRST-ORDER MARKOV FINITE STATE MODEL

Often economic agents or entities can be characterized as moving through states
over time, being in exactly one of m states in each time period. For example,
an individual might be employed, unemployed, or out of the labor force; or, an
individual might be married or not married. If the probability of an entity being in
a particular state in a period depends only on the state occupied by that entity in the
previous period, the model is a first-order Markov finite state model. These models
are of interest not only for their own sake but also because they frequently arise
as important constituents of more complicated models, for example, the Markov
mixture of normals model discussed in Section 7.3.
    There are two variants of this model. In the nonstationary first-order Markov
model the probability distribution of agents or entities over states is different from
one period to the next, but, given weak side conditions presented below, converges
to a limiting invariant distribution. In the stationary first-order Markov model the
unconditional probability distributions across states are the same in each period. In
both variants of this model individual agents move among states and the dynamics
of this movement are nontrivial and usually a focal point of study. The stationary
first-order Markov model corresponds more closely to assumptions about behavior
in many economic applications, and when the first-order Markov model is used as
a constituent of more complicated models, stationarity may be essential.
    In either variant, the first-order Markov model may be regarded as a generaliza-
tion of the independent finite state model. The observables are the same: skt , the
state occupied by entity k at time t, collected in the n × T matrix S. As in that
model, the state transitions between time periods t are mutually independent and
identically distributed across agents k.
THE FIRST-ORDER MARKOV FINITE STATE MODEL                                                       227

   In both the stationary and nonstationary models, for any agent k = 1, . . . , n,
state j = 1, . . . , m and time period t = 2, . . . , T , we have

                         P [skt = j | sk,t−1 = i, sku (u < t − 1), A]
                          = P (skt = j | sk,t−1 = i, A) = pij .                              (7.18)

Let
                                     pj = (pj 1 , . . . , pj m )                            (7.19)

and
                                  P = [pij ] = [p1 , . . . , pm ] .                         (7.20)

    In the nonstationary model, the initial period distribution for any agent k (k =
1, . . . , n) is

                                    P (sk1 = j | A) = π 1j .                                 (7.21)

(This section returns to the stationary model in more detail subsequently.)
   Expression (7.18) provides the probability distribution across states for an agent,
conditional on that agent’s history. Not conditioning on this history, denote

                                     P (skt = j | A) = π tj .                                (7.22)

                                                      
Then from (7.18), (7.21), and (7.22), π tj = m           i=1 pij π t−1,i (j = 1, . . . , m); equiv-
alently, π t = π t−1 P, where π t = (π t1 , . . . , π tm ) . For any s < t, π t = π t−s Ps , and
in particular

                                          π t = π 1 Pt−1 .                                 (7.23)

    The eigenvalues and eigenvectors of the transition matrix P are important for
the properties of the model. Denote the eigenvalues by λ1 , . . . , λm , ordered so
that |λ1 | ≥ · · · ≥ |λm |. We shall assume that P is diagonable; that is, it may be
represented P = C C−1 , where the columns of C are right eigenvectors of P and
the rows of C−1 are left eigenvectors of P. [If the prior distribution of P is absolutely
continuous—as is the case for the prior distribution employed subsequently in
this section—then P is diagonable with probability one. Necessary and sufficient
conditions for a nonsymmetric matrix to be diagonable can be found in many
linear algebra texts, for example, Schott (1997), Section 4.4.] The eigenvalues of
P
cannot     exceed 1 inmodulus,      because from (7.23) 0 ≤ tr(Pj ) ≤ m and tr(Pj ) =
   m    j                  m                                                              
   i=1 λi . But since      j =1 pij = 1 ∀ i = 1, . . . , m, Pιm = ιm ; ιm = (1, . . . , 1) is a
right eigenvector of P corresponding to an eigenvalue 1, and it is convenient to
take λ1 = 1.
228                                                                MODELING FOR TIME SERIES


    A probability distribution over the m states π is an invariant distribution if
π  = π  P. The vector π must be a left eigenvector corresponding to an eigenvalue
λ = 1. If |λ1 | > |λ2 |, then this invariant distribution is unique. Suppose instead
that |λ2 | = 1. If λ2 = 1, then the Markov chain is reducible, with invariant states
depending on the initial distribution. Examples are P = I2 and
                                                
                                  1 − p12 p12 0
                             P =  p21 1 − p21 0  .
                                     0     0   1

If λ2 = −1 or |λ2 | = 1 and λ2 is complex, then the chain is periodic. Examples
include
                                                     
                                              0 1 0
                             0 1
                      P=            and P =  0 0 1  .
                             1 0
                                                1 0 0

For the prior distribution employed subsequently in this section |λ2 | < 1 with prob-
ability 1. In this case the Markov chain is irreducible and aperiodic, and hence has
a unique invariant distribution. The eigenvalue λ2 then provides an upper bound on
the rate of convergence to the invariant distribution, as indicated in the following
result.

   Theorem 7.2.1 Convergence in the First-Order Markov Model Suppose that
the first-order Markov m-state transition matrix P is diagonable with eigenvalues λj
and |λ1 | ≥ · · · ≥ |λm |. Suppose also that |λ2 | < 1, and denote the unique invariant
distribution by π . Then for any r : |λ2 | < r < 1, limt→∞ r −t (π t − π) = 0.

   Proof: Let P have the diagonalization

                         P = C C−1 ,         = diag(λ1 , . . . , λm ).

Since π t = π t−1 P = π 1 Pt−1 and π  = π  P = π  Pt−1 , it follows that

                  π t − π  = (π 1 − π ) Pt−1 = (π 1 − π ) C     t−1
                                                                          C−1
                            = (π 1 − π ) Ct−1 C−1 = π 1 Ct−1 C−1                 (7.24)

where  = diag(0, λ2 , . . . , λm ). [The third equality in (7.24) follows because the
first column of C is proportional to ιm and the last follows because π  is proportional
to the first row of C−1 .] Then

         r −t (π t − π) = r −t π 1 Ct−1 C−1 = r −1 π 1 C(r −1 )t−1 C−1 .

Since limt→∞ (r −1 )t = 0, limt→∞ r −t (π t − π) = 0.
THE FIRST-ORDER MARKOV FINITE STATE MODEL                                                            229
                                 
  Note that if all λj for which λj  = |λ2 | are real and positive, then, from (7.24),
we obtain

             lim |λ2 |−t (π t − π) = |λ2 |−1 π 1 C[ lim (|λ2 |−1 )t−1 ]C−1
             t→∞                                                t→∞
                                                −1
                                    = |λ2 |           π 1 CDC−1 = v
                                             
where D = diag(d1 , . . . , dm ) and dj = δ(λj  , |λ2 |). For any positive integer h

             lim |λ2 |−t (π t+h − π ) = lim |λ2 |h−t (π t − π ) = |λ2 |h v .
            t→∞                               t→∞


If h = − log 2/ log |λ2 |, then |λ2 |h = 12 . This value of h is known as the half-life of
the first-order Markov model. (The definition still applies for second-largest roots
that are negative or complex, but in that case the limit does not exist as it has
been taken here, and the result is in terms of amplitudes of oscillations about the
invariant distribution.)
   While the entries pij of P completely characterize the first-order Markov finite
state model, they are not as directly related to the implied dynamics as some
functions of these parameters. The invariant distribution π and the convergence
bound |λ2 | are examples. There are also many measures of mobility between states,
including the expected length of stay in state i, (1 − pii )−1 , and the overall measure
of mobility [m − tr(P)]/(m − 1). For further discussion and properties of these
measures, see Geweke et al. (1986).

7.2.1 Inference in the Nonstationary Model
Recall that the observables are collected in S = [skt ], where skt is the state occupied
by entity k at time t. From (7.18) and (7.21), we obtain
                                                                                      
                                              
                                              n                   
                                                                  T
                    P (S | π 1 , P, A) =                π 1,sk1         psk,t−1 ,skt       .       (7.25)
                                              k=1                 t=2
           n
Let nj =     k=1 δ(sk1 , j ) denote the number of agents in state j at t = 1. Let nij =
n T
   k=1    t=2 δ(sk,t−1 , i)δ(skt , j ) denote the number of observable transitions from
state i in one period to state j in the next period. Then (7.25) may be expressed
                                                                 
                                              m        
                                                        m  m
                     p(S | π 1 , P, A) =  π 1jj            pijij  .
                                                   n            n
                                                                                  (7.26)
                                               j =1                 i=1 j =1


   Observe that (7.26) is the product of m + 1 components:

                                       
                                       m
                                                n
                                                        
                                                        m
                                                                n
                                                                                 
                                                                                 m
                                                                                               n
                 p(S | π 1 , P, A) =          π 1jj ·          p1j1j · · · · ·          pmjmj .    (7.27)
                                       j =1             j =1                     j =1
230                                                                             MODELING FOR TIME SERIES


Each of these terms has the same functional form as (6.14). Formally, there are
m + 1 independent finite state models in (7.25) and (7.27): one for the first period,
and one for each of the m states on which the transition probabilities are condi-
tioned. Just as in (6.14), the probabilities are nonnegative and must sum to one in
each model.
   Since the likelihood function in (7.27) has m + 1 factors, the conjugate prior
distribution will have m + 1 corresponding independent components. Moreover,
these conjugate prior distributions will all be Dirichlet, as shown in Section 6.3.
Thus the conjugate prior density is
                                        
                          m      
                                   m         
                                             m
                                                 (a −1)
         p(π 1 | A) =     aj     (aj )   π 1jj ,                                            (7.28)
                               j =1              j =1              j =1
                                            
                      m   
                           m       
                                    m 
                                      m          
                                                 m 
                                                   m
                                                      (a −1)
          p(P | A) =      aij       (aij )     pij ij ,                                     (7.29)
                         i=1          j =1              i=1 j =1                i=1 j =1



where ai > 0 (i = 1, . . . , m) and aij > 0 (i, j = 1, . . . , m). The support is the
Cartesian product of m + 1 (m − 1)-dimensional unit simplexes, one each for π 1
and the rows p1 , . . . , pm of P [recall (7.19)–(7.20)].
    It follows immediately from (7.28)–(7.29) and (7.27) that in the posterior dis-
tribution the m × 1 vectors π 1 , p1 , . . . and pm are mutually independent, each with
a Dirichlet distribution:

                                         
                                         m
                                                  (aj +noj −1)  
                                                               m m
                                                                           (aij +noij −1)
                p(π 1 , P | S, A) ∝             π 1j                      pij               .     (7.30)
                                         j =1                 i=1 j =1


The Dirichlet posterior distribution of π 1 has parameters aj + noj (j = 1, . . . , m)
and the posterior distribution of pi (i = 1, . . . , m) has parameters aij + noij
(j = 1, . . . , m). Derivation of a closed-form expression for the marginal likelihood
of the model is straightforward and is left to Exercise 7.2.4.


7.2.2 Inference in the Stationary Model
In the stationary model, π t = π for all time periods t, equivalent to the restriction
π 1 = π . If the transition matrix P is irreducible and aperiodic, then |λ2 | < 1 and
there is a 1 × m left eigenvector c1 , unique up to an arbitrary scale factor, with the
property c1 P = c1 . Computation of c1 given P is standard, and π  is c1 normalized
so that its elements sum to one. (The elements of c1 will all be nonnegative; see
Exercise 7.2.1. Exercise 7.2.2 provides an alternative method for finding π given
P.) Denote this mapping π(P) = [π 1 (P), . . . , π m (P)] . As long as the rows of P
have absolutely continuous distributions on the unit simplex—as is the case for
Dirichlet distribution—then, with probability one, |λ2 | < 1 and π may be computed
in this way.
THE FIRST-ORDER MARKOV FINITE STATE MODEL                                              231

   Given the stationarity restriction, the likelihood function is
                                                               
                                     
                                     m               m m     o
                  p(S | P, A) =  π j (P)nj               pijij  .
                                                o             n

                                      j =1              i=1 j =1


Retaining the prior density (7.29) for P, the posterior density kernel is
                                                                   
                                 m              m  m
                                                               +no
                                                                   −1
               p(P | So , A) ∝  π j (P)nj             pij ij  .
                                            o             a ij
                                                                                     (7.31)
                                    j =1             i=1 j =1


The kernel (7.31) does not correspond to any standard distribution function, but
its second component is the product of Dirichlet probability density functions for
p1 , . . . , pm , while its first component is bounded above. This suggests three closely
related methods of sampling from the posterior distribution.

   1. Importance Sampling. Draw pi from a Dirichlet distribution with parameters
         + noi1 , . . . , aim + noim (i = 1, . . . , m). The weight associated with the draw
      ai1
           m                o
      is         π j (P)nj .
            j =1
   2. Acceptance Sampling. Thelargest possible value of the first component on
                                     m       n                     
      the right side of (7.31) is          π j , where π 1j = noj / m    o
                                                                    i=1 ni . The source
                                     j =1 1j
      density is the 
                     same as the importance sampling density, and the acceptance
                        m                   o
      probability is        (π j (P)/π 1j )nj .
                         j =1
   3. An Independence Metropolis–Hastings Algorithm. The probability distribu-
      tion of the candidate P∗ density is the same set of independent Dirichlet
      distributions used for the draws in importance and acceptance sampling, and
      the acceptance probability is
                                                             
                                 m                          
                            min      [π j (P∗ )/π j (P)]nj , 1 ,
                                                             
                                     j =1


      where P is the value in the previous iteration.

    The efficiency of these algorithms will depend on how close the observed distri-
bution of entities across states at t = 1 is to the invariant distribution corresponding
to transition matrices P that are probable given the subsequent state-to-state tran-
sitions. Loosely speaking, the metric for measuring “close” is the probability ratio
of the t = 1 outcome under the nonstationary model specification to that under the
stationary model specification. For an algorithm that can be more efficient than
any of these, see Exercise 7.2.3.
    BACC incorporates both the stationary and nonstationary first-order Markov
finite state models using the conjugate prior distributions and posterior simulation
algorithms described in this section.
232                                                                     MODELING FOR TIME SERIES


Exercise 7.2.1 Properties of the Leading Left Eigenvector of P                     Suppose that
P = C C−1 is irreducible and aperiodic.

  (a) Show that limt→∞ Pt = c1 c1 , where c1 ∝ ιm is the first column of C (first
      right eigenvector of P) and c1 is the first row of C−1 (first left eigenvector
      of P).
  (b) Show that the elements of c1 must be nonnegative.

Exercise 7.2.2 Computation of the Invariant Distribution π This exercise
develops a method of obtaining π from P that avoids computation of the eigen-
vectors of P.

  (a) Show that when P is irreducible and aperiodic, π is the unique solution of
      the system of m + 1 linear equations in m unknowns Ax = b, where
                                                ' (
                                   I − P            0
                            A= m            , b=        .
                                     ιm              1

  (b) From (a), deduce π = (A A)−1 A b.
  (c) Show that π is the sum of the columns of (A A)−1 .

Exercise 7.2.3 An Alternative Posterior Simulator Consider the following
MCMC algorithm for the stationary first-order Markov finite state model. At each
step s, there are m substeps. Let p(s)
                                   j denote the j th row of P at the end of step s.
At substep j of step s, define

                   P(s,j ) = [p(s)          (s)     (s−1)
                               1 . . . . , pj −1 , pj     , . . . , p(s−1)
                                                                     m     ] .

At substep j of step s, draw a candidate p∗j from a Dirichlet distribution with
parameters aj 1 + noj1 , . . . , aj m + nojm , and define

                                                   ∗                    (s−1) 
                 P(s,j )∗ = [p(s)          (s)          (s−1)
                              1 . . . . , pj −1 , pj , pj +1 , . . . , pm    ].

          ∗
Set p(s)
     j = pj with probability
                                                                       
                           m                                          
                     min          [π j (P(s,j )∗ )/π j (P(s,j ) )]nj , 1 .
                                                                       
                               j =1


and otherwise set p(s)  (s−1)
                   j = pj     .

  (a) Show that the invariant distribution of this algorithm is the posterior distri-
      bution in the stationary first-order Markov finite state model.
  (b) Indicate why this algorithm might be more efficient than the independence
      Metropolis–Hastings algorithm described in this section.
MARKOV NORMAL MIXTURE LINEAR MODEL                                                      233

Exercise 7.2.4 Provide a closed-form expression for the marginal likelihood in
the nonstationary first-order Markov model with prior density (7.28)–(7.29), and
likelihood function given by (7.27), with the random nj and nij replaced by the
corresponding observed noi and noij . [Hint: Review the derivation of (6.18) from
(6.17).]



7.3 MARKOV NORMAL MIXTURE LINEAR MODEL

Section 6.4.2 introduced normal mixture linear models (6.34)–(6.35) to accommo-
date a nonnormal disturbance term in the linear model. In that model the latent
states st are i.i.d., and conditional on each state the disturbance is normally dis-
tributed. That model is attractive because it can approximate i.i.d. disturbances with
absolutely continuous distributions very well, by incorporating a sufficiently large
number of states, while at the same time the posterior distribution can always be
blocked into three components for Gibbs sampling using the elementary normal,
gamma, and independent finite state distributions.
    Example 6.4.1 applied the normal mixture linear model in a situation in which
the assumption of normality was easily overturned. In many time series applica-
tions, however, the specification that disturbances are i.i.d. is undesirable. This is
particularly so in the case of asset return modeling, introduced in Section 1.1.2.
Not only are the sample moments of financial returns strongly inconsistent with
a normal sampling distribution; these moments also appear to evolve slowly with
time. For example, if yt is the return on a financial asset then sample correlations of
           2
yt2 and yt−j   are typically positive for small values of j , whereas the corresponding
population correlations would be zero if {yt } were i.i.d.
    It is straightforward to generalize the normal mixture linear model to permit
this behavior, by substituting the stationary first-order Markov finite state model
of Section 7.2 with a single cross section (n = 1) for the independent finite state
model of the latent state vector   s = (             sT ) used in Section 6.4.2. This idea
                                           s1 , . . . ,
dates at least to Lindgren (1978); early Bayesian treatments include Albert and
Chib (1993a), McCulloch and Tsay (1994), and Chib (1996). In lieu of (6.34),
from (7.18) we then have

        st = j | 
     P [        st−1 = i,                       st = j | 
                          su (u < t − 1), A] = P (        st−1 = i, A) = pij .

The type of behavior  just described for financial asset returns would be exhibited if,
for example, pii         j =i pij for at least some states i, while the precisions h · hi
differ substantially across those same states. From the parameters [pij ] define the
Markov transition P as in (7.20). Conditional on        s, the Markov normal mixture
linear model is exactly the same as the normal mixture linear model. In particular,
(6.35) provides the conditional pdf of yt , and the conditionally conjugate prior den-
sities of β, h, h, and α continue to be (6.31), (6.32), (6.37), and (6.38), respectively.
From Section 7.2, the rows of the transition matrix P have independent Dirichlet
234                                                                                   MODELING FOR TIME SERIES


distributions in the conditionally conjugate prior:
                                                                              
                             p(pi1 , . . . , pii , . . . , pim | A) ∝ piir1           pijr2 .           (7.32)
                                                                              j =i


The distinction between r1 and r2 allows the prior to specify more and less plau-
sible degrees of persistence, while retaining the interchangeability of the m states.
These states remain interchangeable in the posterior distribution, as well, and the
remarks about this same feature in the normal mixture model in Section 6.4.2 apply
here also.
    The conditional posterior distributions of γ  = (α  , β  ), h, and h continue to
be (6.41), (6.42), and (6.43), respectively, exactly as in Section 6.4.2. In partic-
ular, because    s is present in all of these conditional distributions, π was absent
in Section 6.4.2 and P is absent here. In Section 6.4.2 the conditional posterior
distribution of p was Dirichlet. Here, the conditional posterior distribution of each
row of P is Dirichlet, (7.31), but with the terms noj and noij referring to the latent
states on which the    distribution
                              m iso conditioned. Since there is a single time series,
noj = δ(s1 , j ), and m  i=1    j =1 nij = T − 1. The principal new complication for
posterior simulation introduced is the conditional posterior distribution of the latent
states 
       s. In the normal mixture linear model the states were conditionally inde-
pendent, leading to the sequence of T independent finite state distributions with
probabilities (6.44). In the Markov normal mixture linear model the conditional
posterior kernel is

          s | γ , h, P, h, yo , X, A) ∝ πs1 hs1 exp[−h · hs1 (y1 − αs1 − β  x1 )2 /2]
                                                       1/2
        p(
                
                T
                      pst−1st · hst exp[−h · hst (yt − αst − β  xt )2 /2]
                                 1/2
            ·                                                                                           (7.33)
                t=2


and thus

                    st | 
                  p(    sj (j = t), γ , h, P, h, yo , X, A)
                        ∝ pst−1st pstst+1 · hst exp[−h · hst (yt − αst − β  xt )2 /2]
                                              1/2
                                                                                                        (7.34)

for t = 2, . . . , T − 1. (Expressions for t = 1 and t = T are slightly modified.)
Draws for       st could be made successively from (7.34), but that             algorithm induces
substantial serial correlation if, as is typically the case, pii                    j =i pij for at least
some states i.
    A more efficient algorithm due to Chib (1996) draws                     s directly from (7.34),
and yields several important functions of interest as byproducts. Consistent with
our definition of YT in Section 2.1, let             St = (            st ) , further define Yt =
                                                             s1 , . . . ,
(yt , . . . , yT ) and 
                  
                        S = (
                         t
                                          sT ) , and extend the convention Y0 = {∅} to 
                              st , . . . ,   
                                                                                                    S0 =
YT +1 =      ST +1 = {∅}. To render the notation more compact as well as to emphasize
MARKOV NORMAL MIXTURE LINEAR MODEL                                                               235

the fact that this algorithm applies to first-order Markov mixtures of distributions
generally, let θ A1 = (γ  , h, h ) and denote

                                          −1/2
    p(yt | Yt−1 ,
                 st = j, θ A1 , A) ∝ hj          exp[−h · hj (yt − α j − β  xt )2 /2].     (7.35)

We may write and decompose (7.34) in the form

                                              
                                              T
               p( 
                  ST | YoT , θ A1 , P, A) =           st | YoT , 
                                                    p(          St+1 , θ A1 , P, A).       (7.36)
                                              t=1


For each of the T terms on the right side of (7.36), we obtain

  st | YoT , 
p(                                  st , YoT , 
             St+1 , θ A1 , P, A) ∝ p(          St+1 | θ A1 , P, A)
                                    st , Yot , Yo,t+1 , 
                                = p(                   St+1 | θ A1 , P, A)
                                = p(Yo,t+1 , 
                                             St+1 |                         st , Yot | θ A1 , P, A)
                                                    st , Yot , θ A1 , P, A)p(
                                ∝ p(Yo,t+1 , 
                                             St+1 |                         st | Yot , θ A1 , P, A)
                                                    st , Yot , θ A1 , P, A)p(
                                = p(Yo,t+1 , 
                                             St+2 |    st+1 , Yot , θ A1 , P, A)
                                                    st ,
                                       st+1 | 
                                   · p(                               st | Yot , θ A1 , P, A)
                                              st , Yot , θ A1 , P, A)p(
                                = p(Yo,t+1 , 
                                             St+2 | 
                                                    st+1 , Yot , θ A1 , P, A)
                                       st+1 | 
                                   · p(                  st | Yot , θ A1 , P, A)
                                              st , P, A)p(
                                    st+1 | 
                                ∝ p(                  st | Yot , θ A1 , P, A).
                                           st , P, A)p(                                    (7.37)

    We exploit this decomposition to simulate  s. The first of the two terms in (7.37)
            st+1 = j | 
is simply p(           st = i, P, A) = pij . The second term may be evaluated in a
forward recursion beginning with

        p(                               s1 = j | P, A)p(y1o | 
          s1 = j | Yo1 , θ A1 , P, A) ∝ p(                     s1 = j, θ A1 , A).

              s1 = j | P, A) is the unconditional state j probability π j (P), defined
Recall that p(
in Section 7.2, and (7.35) provides p(yo1 | 
                                            s1 = j, θ A1 , P, A). Note also that

                                              
                                              m
                     p(y1o | θ A1 , P, A) =          π j (P)p(y1o | 
                                                                    s1 = j ).               (7.38)
                                              j =1


Step t of the recursion has two substeps. In the prediction step

                                          
                                          m
        st = j | Yot−1 , θ A1 , P, A) =
      p(                                        pij · p(
                                                         st−1 = i | Yot−1 , θ A , A).       (7.39)
                                           i=1
236                                                                   MODELING FOR TIME SERIES


The name derives from the fact that, as a byproduct, we can produce the one-step-
ahead predictive conditional density

                                              
                                              m
             p(yt | Yot−1 , θ A1 , P, A) =             st = j | Yot−1 , θ A1 , P, A)
                                                     p(
                                              j =1

                                              · p(yt | Yot−1 ,
                                                              st = j, θ A1 , A).        (7.40)

In the update step

               st = j | Yot , θ A1 , P, A) ∝ p(
             p(                               st = j | Yot−1 , θ A1 , P, A)
                                                · p(yto | Yot−1 ,
                                                                 st = j, θ A1 , A).     (7.41)

The name derives from the fact that this step updates the conditional time t state
probabilities produced at time t − 1 in (7.39), producing the filtered probabilities
in (7.41), so called because they are a function of past values of the observables.
Substituting the observed yto for yt in (7.40) provides the tth component of the
likelihood function

                                              
                                              m
             p(yto | Yot−1 , θ A1 , P, A) =            st = j | Yot−1 , θ A1 , P, A)
                                                     p(
                                              j =1

                                              ·p(yto | Yot−1 ,
                                                              st = j, θ A1 , A),        (7.42)

and at the end of the recursion p(yo | θ A1 , P, A) is provided by the product of
(7.38) and (7.42) evaluated for t = 2, . . . , T .
    Drawing from p(  ST | YoT , θ A1 , P, A) is now straightforward. The last update
step (7.41) provides p( sT = j | YoT , θ A1 , P, A), an m-state distribution. Then suc-
cessive evaluation of (7.37) for t = T − 1, . . . , 1 provides the finite state dis-
tributions for the other time periods. These distributions provide the smoothed
probabilities for the states, so-called because they take into account observations
made after the occurrence of each latent state as well as before.

Example 7.3.1 Filtering and Smoothing in the Markov Normal Mixture Lin-
ear Model (The online appendix contains annotated code and output for this
example.) To appreciate some of the properties of this model, consider a hypothet-
ical simple case in which there are m = 3 components, a single covariate xt = 1,
and known parameter values β = 0, h = 1:
                                                               
             0.95 0.03 0.02                  0                  1
      P =  0.10 0.54 0.36  ,      α =  2 ,         h =  0.25  .       (7.43)
             0.05 0.57 0.38               −3                 0.111

The invariant distribution corresponding to P is π = (0.6154, 0.2308, 0.1538) .
For these parameter values E(yt | 
                                  st = j, A) = 0 (j = 1, 2, 3), and consequently
MARKOV NORMAL MIXTURE LINEAR MODEL                                                   237

E(yt | A) = 0 and E(yt | Yt−1 , A) = 0. For all i, pi2 /pi3 = 1.5, and consequently
p(yt | st = 2, A) = p(yt | st = 3, A). State 1 characterizes periods of low volatil-
ity; states 2 and 3, periods of high volatility. In a period of high volatility, a return
to a period of low volatility is twice as likely in state 2 (when yt is usually positive)
as it is in state 3 (when yt is usually negative).
    Although parameter values are known, the states are unobserved. Hence at any
time T there is uncertainty about    st (t ≤ T ). Consider the situation portrayed in
Figure 7.1, in which T = 200. Panel (a) shows yto . The squares of these values,
in panel (b), indicate clearly that there are alternating periods of low and high
volatility. At time t, the r-step-ahead predictive density is

                               
                               m
         p(yt+j | Yot , A) =           st = i | Yot , A)
                                     p(                                          (7.44)
                               i=1

                                  st+r = j | 
                               ·p(          st = i, A)p(yt+r | 
                                                                st+r = j, A),     (7.45)

where p(yt+r |   st+r = j, A) is the normal density with mean α j and precision
           st+r = j | 
h · hj , p(           st = i, A) is the element in row i and column j of P r , and
p(st = i | Yt , A) is given by (7.41). The latter filtered probabilities are shown in
              o

panels (c), (e), and (g) of Figure 7.1. In some periods t the value of   st is nearly
certain. This is especially so when yto  is large, exceeding about 2. In several
periods, however, there is substantial uncertainty. This uncertainty is reflected in
predictive densities (7.45), especially for r = 1. [As r → ∞, p(       st+r = j | st =
i) → π j for all i.]
    As time passes, much of the uncertainty about        st is resolved by means of
                            o                     o
conditioning on future yt+j     as well as past yt−j    (j > 0). The smoothing filter
(7.37) provides the conditional probabilities, displayed in panels (d), (f), and (h) of
Figure 7.1. Whereas there are 118, out of 600, filtered probabilities between 0.10
and 0.90 in Figure 7.1, there are only 72 smoothed probabilities in this range. The
smoothed probabilities may matter for inference about the past in some applications,
but they are irrelevant for prediction.
    Panel (a) of Figure 7.2 shows the unconditional density

                                        
                                        m
                        p(yt | A) =            π j p(yt | 
                                                          st = j, A),
                                        j =1


which clearly reflects the negative skewness coefficient (−0.7166) and the excess
kurtosis (1.4533) of the unconditional distribution. The predictive distribution
p(yt+1 | Yot , A) varies considerably, depending on the filtered state probabilities
p( st = i | Yot , A), by means of (7.45). The remaining panels of Figure 7.2 provide
some examples. In period t = 15, the filtered probability of state 1 is nearly 1;
  o
y14  = −0.5056 and y15   o
                           = 0.0302. The predictive density is nearly identical with the
                                               o
first normal distribution in (7.43). Because y49 = −6.2801,P (  s49 = 3 | Yo49 , A) ≈ 1,
and because y50 = 3.1759, P (
                  o
                                 s50 = 2 | Y50 , A) ≈ 1. Since pi2 /pi3 = 1.5 for all i,
                                             o

the one-step-ahead predictive densities in panels (c) and (d) of Figure 7.2 are nearly
238                                                                         MODELING FOR TIME SERIES


 10                                                     80

  5                                                     60

  0                                                     40

 −5                                                     20

−10                                                      0
      0        50         100         150         200     0          50         100         150         200
                          (a)                                                    (b)

  1                                                      1



0.5                                                     0.5



  0                                                      0
      0        50         100         150         200     0          50         100         150         200
                          (c)                                                    (d)

  1                                                      1



0.5                                                     0.5



  0                                                      0
      0        50         100         150         200     0          50         100         150         200
                          (e)                                                    (f)

  1                                                      1



0.5                                                     0.5



  0                                                      0
      0        50         100         150         200     0          50         100         150         200
                          (g)                                                    (h)

Figure 7.1. A hypothetical time series obeying a known Markov mixture of normals model: (a) observed
values; (b) observed values squared; (c) state 1 filtered probabilities; (d) state 1 smoothed probabilities;
(e) state 2 filtered probabilities; (f) state 2 smoothed probabilities; (g) state 3 filtered probabilities;
(h) state 3 smoothed probabilities.



identical. In periods t = 68 and t = 69 the filtered probability of state 1 is not close
to either zero or one. The consequence is that p(yt+1 | Yot , A) is a weighted average
of p(yt+1 | st = 1, A) and p(yt+1 | st = 2 or 3, A).
   The conditional mean of yt is always zero, and the conditional skewness is
always negative. Conditional excess kurtosis can be positive (when the filtered
probability of state 1 is large) or negative (when it is small); unconditionally, it is
positive. These features are consequences of the specific parameter values in (7.43).

Example 7.3.2 The Markov Mixture Model and Value at Risk (The online
appendix contains data, annotated code, and output for this example.) Recall the
value at risk decision problem introduced in Section 1.1.2. The price of an asset or
MARKOV NORMAL MIXTURE LINEAR MODEL                                                             239

0.4                                                0.4

0.3                                                0.3

0.2                                                0.2

0.1                                                0.1

  0                                                  0
           −5            0            5                       −5             0            5
                        (a)                                                 (b)
0.4                                                0.4

0.3                                                0.3

0.2                                                0.2

0.1                                                0.1

  0                                                  0
           −5            0            5                       −5             0            5
                        (c)                                                 (d)

0.4                                                0.4

0.3                                                0.3

0.2                                                0.2

0.1                                                0.1

  0                                                  0
           −5            0            5                       −5             0            5
                        (e)                                                 (f)

Figure 7.2. Some conditional densities for the hypothetical Markov mixture of normals time
series: (a) unconditional predictive density; (b) t = 15, p = (0.975, 0.018, 0.008); (c) t = 49, p =
(0.000, 0.001, 0.999); (d) t = 50, p = (0.001, 0.939, 0.060); (e) t = 68, p = (0.357, 0.544, 0.099);
(f) t = 69, p = (0.716, 0.168, 0.117).




portfolio on day t is pt . For a date or dates t ∗ > t, the decisionmaker must state a
value at risk vt,t ∗ such that P (pt − pt ∗ ≥ vt,t ∗ ) = .05. The probability is, of course,
conditional on the information and data available. Letting rt,t ∗ = log(pt ∗ /pt ) denote
the return between day t and day t ∗ , an equivalent problem is to find a return at
risk wt,t ∗ such that P (rt,t ∗ ≤ −wt,t ∗ ) = .05.
   This example illustrates the process of finding return at risk, conditional on a
single series of returns and a Markov normal mixture linear model. The asset is
the Standard and Poors (S&P) 500 stock price index, for the period March 23,
1978 through December 7, 1984, sample size T = 1700. This is the 9th of 10
subsamples of a longer series of the S&P 500 index used by Ryden et al. (1998)
in an investigation of the ability of Markov mixture models to account for several
features of these data. The Markov mixture model has three states, a constant term
240                                                                               MODELING FOR TIME SERIES


as its only covariate, and employs the prior distributions (6.31), (6.32), (6.37),
(6.38), and (7.32) with

                                  β = 0, h = 106 , ν = 5, s 2 = 103 ,                                        (7.46)
                              hα = 1, ν · = 3, r1 = 10, and r2 = 1.                                          (7.47)

Example 8.3.2 interprets this prior distribution. For comparison purposes only, we
also consider a model in which returns are i.i.d. normal, utilizing the prior distri-
bution introduced in Example 2.1.2 with the settings given in (7.46).
   The posterior simulator for the Markov mixture model ran 22,000 iterations,
the first 2000 of which were discarded. The analysis that follows uses every
20th iteration, for a total of 1000 simulated values from the posterior distribution.
The alternative normal model posterior simulator ran 1100 iterations, with analysis
based on the last 1000. Panel (a) of Figure 7.3 shows the logarithm of the posterior


           4                                                      5.5

           2                                                       5

           0                                                      4.5
                                                      Kurtosis
log pdf




          −2                                                       4

          −4                                                      3.5

          −6                                                       3

          −8                                                      2.5
          −0.04   −0.02      0        0.02     0.04                  −6   −4       −2         0          2      4
                          Returns                                                   Skewness
                            (a)                                                        (b)

           4                                                       4

           2                                                       2

           0                                                       0
log pdf




                                                        log pdf




          −2                                                      −2

          −4                                                      −4

          −6                                                      −6

          −8                                                      −8
          −0.04   −0.02      0        0.02     0.04               −0.04   −0.02        0          0.02         0.04
                          Returns                                                   Returns
                            (c)                                                         (d)

Figure 7.3. Some aspects of the Markov mixture model applied to 1700 daily returns of the S&P 500
index return: (a) unconditional pdf; (b) posterior distribution of unconditional moments; log predictive
densities on (c) July 2, 1984 and (d) August 3, 1984.
MARKOV NORMAL MIXTURE LINEAR MODEL                                                        241

mean of the unconditional probability density function of returns in the Markov
mixture model (heavier curve), together with the log posterior mean of the pdf of
returns in the i.i.d. normal model (lighter curve). Panel (b), which displays 200
points from the posterior distribution of skewness and kurtosis, provides another
perspective on the shape of the unconditional distribution in the Markov mixture
model. It is mildly but decisively leptokurtic, displays little or no skewness, and is
centered at a very small positive return.
   Panels (c) and (d) in Figure 7.3 show the logarithm of the predictive density for
the next day’s returns, for two particular dates in the sample period. In the Markov
normal mixture linear model predictive densities (heavier curves) vary from one day
to the next, as emphasized in Example 7.3.1, whereas in the normal linear model
these densities (lighter curves) are always the same as the unconditional pdf. On
July 2 the Markov normal mixture model indicates substantially more uncertainty
about the next day’s return than does the normal model, and careful inspection of
the figure in panel (c) shows that the Markov normal mixture predictive distribution
is also slightly skewed to the left. On August 3 the distribution of the next day’s
return is more closely aligned in the two models. The predictive density in the
Markov normal mixture model is distinctly leptokurtic, and careful inspection of
the figure in panel (d) shows that the distribution is slightly skewed to the right.
   From the posterior simulation output, there is a state assignment     sT(m) for the last
date in the sample at iteration m. State assignments can be generated recursively
for future dates T + j , according to P ( sT(m)       sT(m)
                                              +j = i |   +j −1 , P
                                                                   (m)
                                                                       , A) = ps(m)
                                                                                  T +j −1 ,i
                                                                                             .A
random sample yT(m)        (m)
                    +1 , yT +2 , . . . can then be generated from these assignments and
the other simulated
                j parameters           γ (m) , h(m) , and h(m) . The simulated j -day-ahead
                         (m)
return is then i=1 yT +i . These returns can be simulated several times for each
parameter vector drawn from the posterior simulator. Sorting the simulated returns
over all iterations and simulations then provides the return at risk. Figure 7.4 was
constructed in this way from the 1000 drawings from the posterior distribution and
100 simulations for each drawing.
    This figure indicates return at risk using a probability .05 [panels (a) and (b)]
as well as .01 [panels (c) and (d)] for total returns up to 10 business days after
the dates indicated. The unconditional distribution of returns in the i.i.d. Gaussian
model implies that return at risk j days in the future is always the same, depending
only on j . Consequently the lighter curves in the left and right panels are identical.
In the Markov normal mixture linear model return at risk j days in the future is
always changing, but as j → ∞, the predictive density for yT +j approaches the
one shown in the panel (a) of Figure 7.3, for all days T on which predictions are
made. This is reflected in returns at risk, which must approach the same value
at long horizons regardless of the state probabilities at time T . This is evident in
Figure 7.3. The one-day-ahead return at risk is higher on July 2 than on August 3,
reflecting the predictive densities shown in the panels (c) and (d) of Figure 7.3, but
10-day-ahead is nearly the same for the 2 days. By implication, return at risk rises
more rapidly with lengthening horizon starting from August 3 than it does from
July 2.
242                                                                                       MODELING FOR TIME SERIES


                  0.1                                                       0.1

                 0.08                                                      0.08
Return at risk




                                                          Return at risk
                 0.06                                                      0.06

                 0.04                                                      0.04

                 0.02                                                      0.02

                   0                                                         0
                        0   2     4       6    8     10                           0   2      4       6    8    10
                                 Days ahead                                                 Days ahead
                                    (a)                                                        (b)

                  0.1                                                       0.1

                 0.08                                                      0.08
Return at risk




                                                          Return at risk




                 0.06                                                      0.06

                 0.04                                                      0.04

                 0.02                                                      0.02

                   0                                                         0
                        0   2     4       6    8     10                           0   2      4       6    8    10
                                 Days ahead                                                 Days ahead
                                    (c)                                                        (d)

Figure 7.4. Return at risk [(a) p = 5%, 7/2/84; (b) p = 5%, 8/3/84; (c) p = 1%, 7/2/84; (d) p = 1%,
8/3/84] in the Markov normal mixture model (heavier curve) and i.i.d. normal model (lighter curve).



Exercise 7.3.1 There are a number of important technical details that underlie
the work in Example 7.3.2 that can be appreciated only by using the code in the
online appendix.

                 (a) From the output of the posterior simulator, look for examples of “label
                     switching.” Label switching is indicated by the same, sudden permutation
                     of the parameter vectors α, h and of the rows and columns of the matrix P
                     between successive iterations. Note that this has no impact on any function
                     of interest that depends only on future values of the time series to which
                     the model is being applied.
                 (b) Using the methods of Section 4.7, illustrated in Example 5.1.1, test for con-
                     vergence of the posterior simulator.

Exercise 7.3.2 Real decisionmakers are likely to want to assess the sensitivity
of conclusions to assumptions in the model or models used.
MARKOV NORMAL MIXTURE LINEAR MODEL                                                  243

  (a) Repeat the analysis of Example 7.3.2 using different numbers of states (m).
      How sensitive are the findings about return at risk in Figure 7.4 to this
      specification?
  (b) How sensitive are these results to the specification of the hyperparameters
      of the prior distribution (7.46)–(7.47)? (Before answering this question, you
      may wish to consult Examples 8.3.2 and 8.3.4.)

Exercise 7.3.3 The online appendix contains a much longer set of returns from
the S&P 500 stock price index, and the code indicates how to reconstruct the
subsamples used in Ryden et al. (1998).

  (a) Repeat the analysis in Example 7.3.2 for some of the other nine subsamples
      used in Ryden et al. (1998). Are the findings similar for these other periods?
  (b) Repeat the analysis in Example 7.3.2 using the entire sequence of S&P 500
      returns but with a larger number of states. Interpret the results in the context
      of the results of part (a). To what extent is there a tendency for states to occur
      in one part of the sample (e.g., the 1930s or 1980s) and never reappear?
CHAPTER 8




      Bayesian Investigation


Multiple stakeholders have competing interests in the decisions that motivate
Bayesian inference. Investigators, sometimes working on behalf of stakeholder
clients, will carefully examine formal models used to inform these decisions. If a
model is taken seriously and is likely to bear on a decision, then its credibility,
often as indicated by its implications for observables, will receive close scrutiny.
So, too, will the sensitivity of these implications to changes in the specification of
the model. It is likely that new models or major variants on existing models will
be introduced to cope with specific features of the problem at hand, the decision
being addressed, and their interaction.
   This chapter presents tools at the disposal of the Bayesian investigator party
to this process. The simulation methods set forth in Chapter 4 are well suited to
examination of models of the type discussed in Chapters 5 through 7. A seasoned
Bayesian investigator can go well beyond the models in these chapters, using the
simulation methods of Chapter 4 and the underlying insights of Chapters 2 and
3, to construct the variants required for a specific decision problem. This process
often involves combinations and syntheses of simpler models, such as those taken
up in Chapters 5 through 7.
   The development of a new model, even if it is an apparently straightforward
variant on an existing and thoroughly understood model, consumes resources. Good
investigators must understand the implications of their complete models for observ-
ables, and must be able to reflect the beliefs of their clients in the specification
of these models. This chapter addresses this problem, in Section 8.3, by means
of forward simulation: that is, drawing unobservables from a candidate prior, fol-
lowed by observables drawn conditional on unobservables, followed by the vector
of interest drawn conditional on both. Section 8.3 also details how the investigator
can go some distance in ascertaining whether a model yields sensible implications
for observables and vectors of interest, before setting up a posterior simulator.
   If a complete model yields sensible prior implications for observables and vec-
tors of interest, the investigator may proceed to write a posterior simulator, a
Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.

                                                                                  245
246                                                            BAYESIAN INVESTIGATION


task often more time-consuming than writing a forward simulator. This entails
developing an algorithm like those taken up in Chapters 5–7, and executing the
algorithm with suitable computer code. Section 8.1 develops tests that should be
applied at the end of this process, before taking code to the data and problem at
hand. These tests have substantial power against logical errors that may arise any-
where following the specification of the model, including expression of densities
and conditional densities and their embodiment in computer code.
   Given posterior simulators for alternative models, the investigator may turn to
formal comparison of these models using Bayes factors and marginal likelihoods
as discussed in Section 2.6. Section 8.2 describes several ways in which posterior
simulators can be used to approximate marginal likelihoods or Bayes factors.
   The process of examining the sensitivity of the results that count—the “bottom
line” of uncertainty about the vector of interest—to the necessary but intermediate
steps of specifying prior and observables distributions is one that often involves
both the investigator and the client. Section 8.4 provides methods that enable a
Bayesian investigator, perhaps working with a complex model, a sophisticated
posterior simulator, and a very fast computer, to communicate results in a fashion
that permits clients with spreadsheet software and laptops to manipulate some of
the specifications of the model and examine the implications for vectors of interest.
A particular client of interest in this process is the remote client—for example,
an anonymous reader of the investigator’s published work. Section 8.5 shows how
the Bayesian investigator can facilitate this process.


8.1 IMPLEMENTING SIMULATION METHODS

A complete model A provides a prior density of unobservables p(θ A | A), a con-
ditional density of observables p(y | θ A , A), and a conditional density of a vector
of interest, p(ω | θ A , y, A). It is usually straightforward to simulate from each of
these distributions:

                               θ (m)
                                 A ∼ p(θ A | A),                                 (8.1)
                               y(m) ∼ p(y | θ A , A),                            (8.2)
                              ω   (m)
                                        ∼ p(ω | y, θ A , A).                     (8.3)

If θ A = θ (m)
           A in (8.2), then y
                              (m)
                                  ∼ p(y | A). If y = y(m) and θ A = θ (m)
                                                                      A in (8.3), then
ω(m) ∼ p(ω | A).
    As a matter of research strategy, the relative ease of constructing the simula-
tors (8.1), (8.2), and (8.3) suggests that this be done before undertaking the more
challenging task of constructing a posterior simulator θ (m)A ∼ p(θ A | y , A). The
                                                                           o

forward simulator can reveal interesting and relevant properties of the model—in
particular, its ability to account for salient features, ω, of observables. It can
indicate the suitability of the model for the purposes at hand, for example, its
IMPLEMENTING SIMULATION METHODS                                                      247

ability to replicate important features of the data, as discussed in greater detail in
Section 8.3.


8.1.1 Density Ratio Tests
It is also generally straightforward to express the densities that appear on the
right sides of (8.1)–(8.3), and to write code that evaluates these densities. This
is a requirement, in any event, in order to compute or approximate the marginal
likelihood of the model. There is an intimate relationship between the simulators
(8.1)–(8.3) and the evaluation of the corresponding densities, which is useful in
checking their derivation as well as their expression in computer code.

    Theorem 8.1.1 Density Ratio Test Suppose that {x(m) } is an ergodic process
with unique invariant density p(x | I ) with respect to a measure ν, having support
X ⊆ Rn . Let k(x | I ) be any kernel of this probability density, and cI = X k(x |
I ) dν(x). Let f be any probability density with respect to ν having support X∗ ⊆ X.
Then

                                
                                M
                                                              a.s.
                         M −1         f (x(m) )/k(x(m) | I ) → cI−1 .
                                m=1

   Proof: For g(x) = f (x)/k(x | I ), we have
                                                   
        E[g(x) | I ] =   g(x)p(x | I ) dν(x) = cI−1   g(x)k(x | I ) dν(x)
                          X                                     X
                               
                      = cI−1        f (x) dν(x) = cI−1 .
                                X

                                                       M         (m) a.s. −1
Since cI−1 is finite and {x (m) } is ergodic, M −1         m=1 g(x   ) → cI .

In the particular case k(x | I ) = p(x | I ), we obtain

                                   
                                   M
                                                               a.s.
                              −1
                          M              f (x(m) )/p(x(m) | I ) → 1.               (8.4)
                                   m=1

Theorem 8.1.1 provides a basis for testing simulators and density evaluations. If
both have been derived and coded correctly, then (8.4) must hold. It is, of course,
not the case that (8.4) must be violated if there are errors. However, in most settings
it is difficult to produce errors, even intentional ones, that leave (8.4) in tact. More-
over the derivation and coding of a simulator is typically independent of the deriva-
tion and coding of the evaluation of p(x); thus it is unlikely that the same error can
enter each in a way that preserves (8.4). Note that “error,” here, subsumes every-
thing from misconceptions to mistakes in derivations to “bugs” in computer code.
248                                                                         BAYESIAN INVESTIGATION


   The less variation in f (x)/p(x | I ), the better is the approximation in Theorem
8.1.1. If {x(m) } is uniformly ergodic and var[g(x) | I ] < ∞, then Theorem 4.7.1
may  be invoked to provide the numerical standard error of the approximation
M −1 M  m=1 g(x
                 (m)
                     ). The variance requirement amounts to
                            
                                [f 2 (x)/p(x | I )] dν(x) < ∞
                              X∗

and will be satisfied if f (x)/p(x | I ) is bounded above on X∗ . There is a large class
of cases in which such a density f (x) may be constructed from the simulations
x(1) , . . . , x(M) .

   Theorem 8.1.2 Constructing Density Ratio Tests Suppose that the n × 1 ran-
dom vector x has an absolutely continuous distribution with mean µ, variance ,
and probability density p that is bounded above as well as bounded away from zero
on all compact sets A ⊆ Rn . Suppose that {x(m) } is ergodic with invariant density
p(x | I ), and denote the sample mean and variance of x(m) (m = 1, . . . , M) by µ(M)
and  (M) . Denote the pdf of a multivariate normal distribution with mean µ(M) and
variance  (M) , truncated to its highest density region Xα(M) of size 100(1 − α)%, by
                                                −1/2
           fα(M) (x) = (1 − α)−1 (2π)−n/2  (M) 
                       · exp[−(x − µ(M) )( (M) )−1 (x − µ(M) )/2]IXα(M) (x).

Let k(x | I ) = cI · p(x), where cI > 0, be a kernel of p(x | I ). Then

                              
                              M
                                                                  a.s.
                       M −1         fα(M) (x(m) )/k(x(m) | I ) → cI−1                        (8.5)
                              m=1

and
                                                                           
                                         
                                         M
                                    −1
                limM→∞ var M                   fα(M) (x(m) )/k(x(m) | I )       < ∞.
                                         m=1




   Proof: Let

                      Xα = {x : (x − µ)  −1 (x − µ) ≤ χ 2α (n)}

and

   fα (x) = (1 − α)−1 (2π )−n/2 ||−1/2 exp[−(x − µ) −1 (x − µ)/2]IXα (x).

Given any ε > 0, let
                                                       
                        ε(M) = {x : fα(M) (x) − fα (x) > ε}.
                        X
IMPLEMENTING SIMULATION METHODS                                                      249

           a.s.             a.s.                       a.s.
Since µ(M) → µ and  (M) → , it follows that Xε(M) dx → 0. The results follow
from the conditions that fα and p are bounded above and bounded away from zero
on all compact sets.

    Since the density fα(M) is constructed from the simulator output {x(m) }, the den-
sity ratio test requires no further simulation. The conditions of Theorem 8.1.2 assure
var[fα(M) (x)/kI (x | I ) | I ] < ∞, and therefore Theorem 4.7.1 may be applied to
assess the accuracy of this approximation. When k(x | I ) = p(x | I ), then cI = 1
and we can formally test of the correctness of the simulator that produces {x(m) }
and the code that evaluates p(x | I ).
    The compact support of f in Theorem 8.1.2, achieved by truncating a mul-
tivariate normal density, is important because it bounds the ratio f/p. In many
applications f/p will become unbounded as α → 0, and it is always the case that
the accuracy of the approximation must deteriorate as α → 1. Thus it may be
prudent to conduct a density ratio test with several alternative values of α. Other
things the same, the greater the dimension of x, the greater the variation in f/p,
and for sufficiently high dimensions the procedure may become impractical. This
is generally not a problem in the density ratio test as applied in this section, where
the size of x can be controlled as illustrated in Examples 8.1.1 and 8.1.2. How-
ever, this consideration becomes important in Section 8.2.4 in the application of
Theorems 8.1.1 and 8.1.2 in approximating the marginal likelihood.

Example 8.1.1 Application of the Density Ratio Test to an Observables Density
Consider the mean zero, normal first-order autoregression model, with stationarity
imposed: ρ ∈ (−1, 1), h > 0 and

y1 | A ∼ N [0, h−1 (1 − ρ 2 )−1 ]; yt | (Yt−1 , A) ∼ N (ρyt−1 , h−1 ) (t = 2, . . . , T ).
                                                                                     (8.6)

(This is a very special case of the linear model with serial correlation discussed in
Section 7.1.) We can simulate observables from this model, given fixed values of
ρ and h, without even thinking about the observables density, which is

 p(y1 , . . . , yT | h, ρ, A) = (2π)−T /2 hT /2 (1 − ρ 2 )1/2
                                                                    
                                                             T
                                · exp −h y12 (1−ρ 2 )+ (yt −ρyt−1 )2          2 . (8.7)
                                                        t=2


To apply the density ratio test, construct fα(M) (·) as described in Theorem 8.1.2,
with α = 0.5 and M = 10,000 simulations.
     Errors may be made either in simulating y(m) or in the evaluation p(y |
h, ρ, A). As an alternative to correct simulation, suppose y1 ∼ N (0, h−1 ) in lieu
of N [0, h−1 (1 − ρ 2 )−1 ] in (8.6). As an alternative to the correct evaluation of
the probability density, consider omission of the term hT /2 (1 − ρ 2 )1/2 (error 1) or
y12 (1 − ρ 2 ) (error 2) in (8.7).
250                                                              BAYESIAN INVESTIGATION


   The outcomes of the density ratio tests are

                             M
                 Log M −1      m=1 f (y
                                       (m)
                                           )/p(y(m) | h, ρ, A)    Shown;
                             Standard Errors in Parentheses

Density evaluation error             None               Error 1             Error 2
Simulation error
None                             −.006 (.010)         .508 (.010)           .259 (.011)
Error                            −.342 (.011)         .194 (.011)          −.271 (.011)

    The tests easily detect the errors, and could have done so with M = 100 itera-
tions rather than M = 10,000. The tests also appropriately indicate no error when
both simulator and data density evaluation are correct. These tests were conducted
using the single setting of parameters ρ = 0.8, h = 1. We might, of course, carry
out tests for several alternative settings of parameters. The latter alternative extends
density ratio tests to the case in which the normalizing constant of the likelihood
function has been omitted, which often occurs in maximum likelihood estimation.
Then the limit in (8.4) is not 1.0, but should be the same for different settings of
the parameters. Testing this hypothesis is straightforward.
    In many instances the support of p(x | I ) is a subset of Rn . Theorem 8.1.2 may
still be applied, if the random vector x is transformed so that its support is Rn . The
density of the transformed vector involves the Jacobian of transformation, which
must also be derived and coded correctly.

Example 8.1.2 Application of the Density Ratio Test to a Prior Density Con-
sider the Wishart distribution of an m × m positive definite matrix A, with m × m
positive definite matrix parameter  and degrees of freedom parameter ν ≥ m,
denoted A ∼ W (, ν). Section 5.2 introduced the Wishart as a conditionally con-
jugate prior distribution in the seemingly unrelated regressions model, and provided
its pdf in (5.17) followed by an algorithm for i.i.d. simulations A(m) ∼ W (, ν).
    There are m(m + 1)/2 distinct elements of A. Since A is positive definite, the
support of A is not Rm(m+1)/2 , and the distribution of these elements is seldom
well approximated by a normal distribution unless ν is quite large. The density
ratio test is more efficient if applied to a transformation of A. Let A = CC be the
Choleski factorization of A, in which C is lower triangular with positive diagonal
elements, and use logarithms of the diagonal elements of C rather than the values
themselves. The Jacobian    of transformation for this new set of random variables,
                                     (m+2−i)
which we denote θ , is 2m m     i=1 cii      .
    To illustrate the application of the density ratio test to this distribution, take
m = 4, ν = 10, and
                                                       
                                         4 −1 2 0
                                      −1 3 −2 1 
                              =     2 −2 6 −1  .
                                                        

                                         0 1 −1 3
IMPLEMENTING SIMULATION METHODS                                                      251

In one case the simulation is carried out correctly, whereas in the other bii2 ∼
χ 2 (ν − i) in the second step of the Wishart simulation algorithm presented in
Section 5.2. Consider two errors in evaluating the density: (1) the exponent ν −
1 − m appearing in (5.17) is replaced by ν − m and (2) π −m(m−1)/4 in (5.17) is
omitted. The outcomes of the density ratio tests using M = 10,000 simulations
and α = 0.5 in (8.5) are

                             
                     Log M −1 M m=1 f (θ
                                         (m)
                                             )/p(θ (m) ) Shown;
                         Standard Errors in Parentheses

Density evaluation error                None                   Error 1         Error 2
Simulation error
None                                −.003 (.011)            6.314 (.014)    3.423 (.010)
Error                               −.240 (.014)            5.543 (.023)    3.185 (.013)

As in the previous example, the results are clear.

8.1.2 Joint Distribution Tests
If there are alternative ergodic simulators {x(m) } and {
                                                         x(m) } with the same invariant
distribution, then
                             
                             M                       
                                                     M
                                                                  a.s.
                      M −1         g(x(m) ) − M −1           x(m) ) → 0
                                                           g(
                             m=1                     m=1

as long as E[g(x) | I ] is well defined and finite. If var[g(x) | I ] is also well defined
and finite, and the two simulators are independent, then a central limit theorem may
be applied to test formally the proposition that the invariant distributions are in fact
the same.
    This test does not require evaluation of the density p(x | I ). This is an advan-
tage if we wish only to check the simulator, since it spares the effort of deriving
and coding p(x | I ), as well as transformation of x to ensure support in all of Rn
if that is necessary. However, as we shall see in Section 8.2, it is necessary to
evaluate the prior density p(θ A | A) and the data density p(yo | θ A , A) to approx-
imate marginal likelihoods. Eventually, therefore, it is necessary to derive, code,
and check the evaluation of the prior and data densities. Density ratio tests, but not
joint distribution tests, are applicable at that stage.
    An important use of joint distribution tests is in checking the posterior simulator.
The joint distribution of observables and unobservables is
                       p(θ A , y | A) = p(θ A | A)p(y | θ A , A).

We have already noted, below (8.3), that simulation from this joint distribution can
be achieved by means of a marginal–conditional simulator

            θ (m)     (m)
              A ∼ p(θ A | A), y
                               (m)
                                   ∼ p(y | θ (m)
                                             A , A) (m = 1, . . . , M).             (8.8)
252                                                                                  BAYESIAN INVESTIGATION


For any function g(θ A , y) whose expectation with respect to the joint distribution
of θ A and y is well defined and finite, we obtain

               
               M                                  
          −1                 (m) a.s.
      M              g(θ (m)
                         A ,y   )→                         g(θ A , y)p(θ A , y | A) dν(y) dν(θ A ).    (8.9)
               m=1                            A       Y


If var[g(θ A , y) | A] < ∞, then the Lindeberg–Lévy central    limit theorem can be
used to approximate the accuracy of the approximation M −1 M               (m)
                                                                   m=1 g(θ A , y
                                                                                (m)
                                                                                    ) in
                             (m)
(8.9), since the sequence {θ A , y } is i.i.d. If g is a function of θ A but not of y,
                                  (m)

only the prior simulator is required.
   A posterior simulator generates the sequence {
                                                      (m)
                                                    θ A,yo } from a Markov chain C:

                                  
                                  θ A,yo ∼ p(θ A | 
                                    (m)              (m−1)
                                                   θ A,yo , yo , C).

Consider the successive conditional simulator

                    (0)
                   θ A ∼ p(θ A | A);

                   y(m) ∼ p(y |               , A), 
                                                     θ A ∼ p(θ A | 
                                    (m−1)              (m)          (m−1)
                               θA                                 θA     , y(m) , C)                 (8.10)
                              (m = 1, . . . , M).

If we have at hand a demonstration of the (uniform) ergodicity of {
                                                                        (m)
                                                                      θ A,yo } for almost
all yo , then, showing that {
                               (m)
                             θ A ,y(m) } is (uniformly) ergodic with unique invariant
density p(θ A | A)p(y | θ A , A) typically involves little, if any, additional work. In
this case

             
             M                                    
                   g( 
                        (m)        a.s.
      M −1                 y(m) ) →
                      θ A ,                               g(θ A , y)p(θ A , y | A) dν(y) dν(θ A ).   (8.11)
             m=1                              A       Y


The standard error of approximation in (8.11) can be assessed using Theorems
4.7.1 and 4.7.3.
    The thought processes and coding in the simulations of {θ (m) , y(m) } and
{
   (m)
 θ ,  y(m) } are nearly independent. The former involves the prior and observables
simulators, and the latter involves the posterior and observables simulators. The
observables simulator is common to both, but an error in this simulator will have
different consequences for the invariant distributions in the two cases. Consequently
a formal comparison of the left sides of (8.9) and (8.11) has power against error in
the simulation of observables, as well as error in the simulation of unobservables
from the prior or posterior. The simulator {θ (m)
                                              A ,y
                                                    (m)
                                                        } is a logical first step in under-
standing the properties of a new model and in developing prior distributions in any
event, as detailed in Section 8.3.1. The marginal effort in producing {
                                                                                (m) (m)
                                                                              θ A ,y } is
IMPLEMENTING SIMULATION METHODS                                                                   253

the addition of a few lines to generate artificial data in posterior simulation code.
Thus the cost of making the comparison is relatively low. The gain is that subtle
errors producing reasonable but incorrect results will likely be detected.

Example 8.1.3 Joint Distribution Tests of a Posterior Simulator [This
example appears in Geweke (2004).] To demonstrate the kinds of errors that these
tests can detect in a research (as opposed to illustrative) problem, consider the
Student-t mixture model

                       yt ∼ t (µ1 , h−1
                                     1 ; λ)       with probability p,                          (8.12)
                       yt ∼ t (µ2 , h−1
                                     2 ; λ)       with probability 1 − p.                      (8.13)

In this problem λ is fixed at λ = 5, but the model could be extended to make λ an
unknown parameter as described in Section 6.4.1. This model, or one like it, can
be used to model outliers (see Exercise 6.4.5), and models similar to this one can
be used in financial applications similar to the financial decisionmaking problem
described in Section 1.1.2, as illustrated in Example 7.3.2.
    As discussed in Section 6.4.1, we can exploit the fact that the sequence λ                  ht ∼
χ (λ) followed by yt ∼ N [µ1 , (h1
  2
                                            ht )−1 ] is equivalent to (8.12). To recapitulate
briefly, the model is augmented with (             h1 , . . . , 
                                                                 hT ) and the latent state vector
(            sT ), with 
  s1 , . . . ,          st = 1 indicating (8.12) and       st = 2 indicating (8.13). Then nor-
mal priors for µ1 and µ2 , gamma priors for h1 and h2 , and a beta prior for p are
all conditionally conjugate, and the resulting conditional distributions in a Gibbs
sampling algorithm are also of these forms.
    This example uses two variants of the Gibbs sampler. In the first (MCMC1),                      st
and   ht are drawn jointly; in the second (MCMC2), they are drawn separately. In
the simulator {θ (m)   A ,y
                            (m)
                                } the five parameters are drawn from the prior, and then
T = 6 observations are generated. The simulator {
                                                                    (m)
                                                                  θ A ,y(m) } follows (8.10), again
using T = 6 observations. The joint distribution test is carried out using the 5 first
and 15 second moments of the parameter vector θ A = (µ1 , µ2 , h1 , h2 , p) . [Since
yt is not involved in the comparison, it is really not necessary to generate y (m) in
the marginal–conditional simulator.]
    To gather evidence on the power of the posterior simulator joint distribution
test, we introduce some errors. The first is an error in simulating from the prior: p
is drawn from a beta(1, 1) distribution in the prior, whereas the posterior employs
beta(2, 2) prior density. The second is an error in simulating the observables in the
successive conditional simulator; the simulator ignores the                  ht from the posterior
simulator, and uses instead fresh values to construct yt . The third error is in the
simulation of µ1 and µ2 in the Gibbs sampler; they are set equal to their conditional
means, with no allowance for their conditional variance. In the fourth error the
degrees of freedom in the draw of         ht is 5, rather than its correct value of 6 in the
conditional posterior distribution. The final error is in the generation of (             st , 
                                                                                                ht ) in
MCMC1. The correct algorithm generates               st (conditional on all unknowns except
254                                                            BAYESIAN INVESTIGATION



ht ) and then generates 
                       ht conditional on all unknowns including  st just drawn. In
the error, 
           ht is drawn several steps later in the Gibbs sampling algorithm rather
than immediately after st .
    For each of seven simulators, two correct and five incorrect, M = 250,000 val-
ues are drawn from p(θ A , y | A) using both the marginal conditional simulator (8.8)
and the successive conditional simulator (8.10). In each case, the 20 moments are
computed for each simulator, and a conventional equality of means test is applied,
taking care to account for serial correlation in the successive conditional simula-
tor (Theorems 4.7.1 and 4.7.3). Tests carried out at some alternative conventional
significance levels produce the following results:


                                                   Rejections (out of 20) at
Algorithm    Error                       p = .05     p = .01    p = .005       p = .001

MCMC1        0. None                         0           0          0             0
MCMC2        0. None                         0           0          0             0
MCMC1        1. Prior simulation of p        4           3          3             2
MCMC1        2. Simulation of y             10           9          9             9
MCMC1        3. 
                ht degrees of freedom        5           3          3             3
MCMC1        4. µ variance                  11          10         10             9
MCMC1            st , 
             5. (    ht ) draw              7           6          6             6


The correct algorithm clearly passes the joint distribution tests, whereas errors—in
the prior, observables, or posterior simulators—are all flagged.

Exercise 8.1.1 More Applications of Joint Distribution Tests In the course of
her work, an investigator has created a new prior density p(θ A | A) for a particular
scalar parameter θ A . She has developed an algorithm for direct sampling from this
distribution, and has written the corresponding software.

  (a) Suppose that the investigator also has developed and coded an algorithm
      that evaluates the cdf of this distribution. How might she conduct a joint
      distribution test of the correctness of both her cdf evaluation and her direct
      sampling algorithm? (Hint: She can also simulate directly from a uniform
      distribution.)
  (b) Suppose instead that the investigator also has developed and coded an algo-
      rithm that evaluates the inverse cdf of the distribution in question. How
      might she conduct a joint distribution test of the correctness of both her
      inverse cdf evaluation and her direct sampling algorithm?

Exercise 8.1.2 Density Ratio Test for Importance Sampling Theorem 8.1.1
assumes that the simulation algorithm is a Markov chain. Suppose, instead, that
FORMAL MODEL COMPARISON                                                               255

the algorithm uses importance sampling. State and prove a variant of Theorem
8.1.1 appropriate to this situation.


8.2 FORMAL MODEL COMPARISON

Model comparison can entail model averaging or hypothesis testing, as discussed in
Section 2.6.1. In either case, given a set of models A1 , . . . , AJ , the essential compu-
tational task is to approximate the marginal likelihoods p(yo | Aj )(j = 1, . . . , J ).
Analytical evaluations are possible only in very special cases, generally requiring
fully conjugate prior distributions; instances include the linear model (Examples
2.3.2 and 2.3.3) and the first-order Markov finite state model (Section 7.2).
    In most models, we must compute a good approximation to the marginal likeli-
hood. A key difficulty is that the marginal likelihood cannot be expressed directly
as a posterior moment, and consequently the problem cannot be treated directly as a
special case of the simulation-consistent approximation of posterior moments devel-
oped in Chapter 4. There are specific cases in which the approximation of a Bayes
factor is simply a special case of the approximation of a posterior moment. One of
these will be important subsequently in Bayesian communication (Section 8.4) and
robustness analysis (Section 8.5), and so we develop it here (Section 8.2.1). In the
more general case there are methods specifically tailored to the kind of simulator
used; here we examine the cases of importance sampling (Section 8.2.2) and Gibbs
sampling (Section 8.2.3).
    The computation or approximation of Bayes factors is an important current
research topic, and this section does not include all approaches to this prob-
lem. In particular, Tierney and Kadane (1986, 1989) developed an approximation
of the marginal likelihood based on Laplace expansions, and Green (1995) has
developed simulation methods that treat several models simultaneously, with the
number of drawings from each model proportional to its posterior probability.
These approaches have proved very effective in some applications, and less so in
others. The surveys of Carlin and Chib (1995) and Han and Carlin (2001) provide
accessible introductions to these and other approaches to formal model comparison
not discussed in detail here.

8.2.1 Bayes Factors for Modeling with Common Likelihoods
Suppose that the models A1 and A2 share the same conditional probability density
of observables, p(y | θ A , A), but have different prior densities, p(θ A | A1 ) and
p(θ A | A2 ). The Bayes factor in favor of A2 is
                      
                             p(θ A | A2 )p(yo | θ A , A) dν(θ A )
                        
                       A2                                        .           (8.14)
                             p(θ A | A1 )p(yo | θ A , A) dν(θ A )
                          A1
256                                                                    BAYESIAN INVESTIGATION


If A2 ⊆ A1 , then (8.14) may be expressed
         
               [p(θ A | A2 )/p(θ A | A1 )]p(θ A | A1 )p(yo | θ A , A) dν(θ A )
           A1
                       
                             p(θ A | A1 )p(yo | θ A , A) dν(θ A )
                            A1

                                      = E[g(θ A ) | yo , A1 ]                          (8.15)

with g(θ A ) = p(θ A | A2 )/p(θ A | A1 ).
   The posterior moment in (8.15) is well defined and finite. Given a posterior
simulator θ (m)
            A ∼ p(θ A | y , A1 ), it may be approximated consistently by
                            o


                                   
                                   M
                           M −1          p(θ (m)          (m)
                                             A | A2 )/p(θ A | A1 ).
                                   m=1

If the posterior variance of g(θ A ) is finite and the simulator is uniformly ergodic,
then Theorem 4.7.1 can be the basis for evaluating the numerical accuracy of the
approximation. A sufficient condition for finite variance of g(θ A ) is that the ratio
of prior densities p(θ A | A2 )/p(θ A | A1 ) be bounded on A2 .

Example 8.2.1 Changing the Prior in the Normal Linear Regression Model
Consider a normal linear regression model with independent priors β | A1 ∼ N
(β, H−1 ) and s 2 h | A1 ∼ χ 2 (ν). Denote the corresponding prior pdf by p(β, h |
A1 ). Suppose that the Gibbs sampler has been used as a posterior simulator as
described in Example 4.3.1 and the simulated values {β (m) , h(m) } are available for
the approximation of posterior moments. An investigator or client entertaining a
different prior density p(β, h | A2 ) can approximate the Bayes factor in favor of
their model by

                           
                           M
                      −1
                  M              p(β (m) , h(m) | A2 )/p(β (m) , h(m) | A1 ).          (8.16)
                           m=1

The approximation is simulation consistent. If p(β, h | A2 )/p(β, h | A1 ) is bounded
above then the numerical accuracy of the approximation can be evaluated using a
central limit theorem. For a specific example, see Exercise 8.2.2.


8.2.2 Marginal Likelihood Approximation Using Importance Sampling
Suppose that p(θ A | S), with support A , is the probability density function (not
just a kernel) of an importance sampling distribution for the posterior density
p(θ A | yo , A) ∝ p(θ A | A)p(yo | θ A , A). Denote the corresponding weight function
w(θ A ) = p(θ A | A)p(yo | θ A , A)/p(θ A | S), as in Section 4.2.2. Then
FORMAL MODEL COMPARISON                                                                       257

                            
                            M                     
                                           a.s.
           w(M) = M −1            w(θ (m)
                                      A )→                 w(θ A )p(θ A | S) dν(θ A )
                            m=1                       θA
                     
                 =         p(θ A | A)p(yo | θ A , A) dν(θ A ) = p(yo | A) = w,
                      θA

the marginal likelihood for model A. If w(θ A ) is bounded, then

                            d                          
                                                       M
                                                                                  a.s.
     M 1/2 (w(M) − w) → N (0, τ 2 ), M −1                    [w(θ (m) ) − w(M) ]2 → τ 2 .
                                                       m=1

The first published application of this idea appears to be Geweke (1989b); see also
Gelfand and Dey (1994) and Raftery (1996).
     With slight modification this method may be applied with acceptance sampling
or an independence Metropolis chain as well. In the former case, for all candidates
θ ∗A , keep a running sum of w(θ ∗A ) = p(θ ∗A | A)p(yo | θ ∗A , A)/p(θ ∗A | S), and take
w(M) to be this sum deflated by the total number of candidates drawn. For an
independence Metropolis chain the procedure is identical, except that q(θ ∗A | H )
replaces p(θ ∗A | S). At each iteration the running sum is incremented by w(θ ∗A ), θ ∗A
being the candidate.
     For all of these algorithms, the only incremental effort beyond what is otherwise
required is that p(θ A | S) must be normalized to a density (not just a kernel), and
the posterior density kernel must be expressed in standard form [recall (2.8)].


8.2.3 Marginal Likelihood Approximation Using Gibbs Sampling
In the case of the Gibbs sampler, an entirely different procedure due to Chib (1995)
can provide quite accurate evaluations of the marginal likelihood, at the cost of
additional simulations. Given the blocking θ A = (θ A(1) , . . . , θ A(B) ), suppose that
the conditional probability density functions p(θ A(b) | θ A−(b) , yo , A) can be evalu-
ated in closed form for all blocks b. [This latter requirement is generally satisfied for
a pure Gibbs sampler. For an extension of this method to the Metropolis–Hastings
algorithm, see Chib and Jeliazkov (2001).]
   From the identity p(θ A | A)p(yo | θ A , A) = p(yo | A)p(θ A | yo , A), we have

                 p(yo | A) = p(θ ∗A | A)p(yo | θ ∗A , A)/p(θ ∗A | yo , A)                   (8.17)

for any fixed θ ∗A ∈ A . Typically p(θ ∗A | A) and p(yo | θ ∗A , A) can be evaluated in
closed form but p(θ ∗A | yo , A) cannot. A marginal–conditional decomposition of
p(θ ∗A | yo , A) is

               p(θ ∗A | yo , A) = p(θ ∗A(1) | yo , A)p(θ ∗A(2) | θ ∗A(1) , yo , A)          (8.18)
                                    · · · · · p(θ ∗A(B) | θ ∗A<(B) , yo , A).
258                                                                          BAYESIAN INVESTIGATION


The first term in the product of B terms on the right side of (8.18) can be approx-
imated from the output of the posterior simulator because

                                
                                M
                                                          a.s.
                         M −1         p(θ ∗A(1) | θ (m)           ∗
                                                    A>(1) ) → p(θ A(1) | y , A).
                                                                          o

                                m=1

To approximate p(θ ∗A(b) | θ ∗A<(b) , yo , A), first execute the Gibbs sampler with the
parameters in the first b − 1 blocks fixed at θ ∗A(1) , . . . , θ ∗A(b−1) . This provides a
sequence {θ b(m)
            A>(b−1) } from the conditional posterior distribution. Then

               
               M
                                                          a.s.
      M   −1
                     p(θ ∗A(b) | θ ∗A<(b) , θ b(m)                ∗        ∗
                                              >(b) , y , A) → p(θ A(b) | θ A<(b) , y , A)
                                                      o                             o
                                                                                             (8.19)
               m=1

for blocks b = 2, . . . , B − 1. The last term on the right side of (8.18) can be
evaluated directly and requires no simulation. These approximations are then used
in (8.18) and (8.17) to obtain the approximation to p(yo | A).
   This procedure is generally more efficient the larger is p(θ ∗A | yo , A), so it helps
to choose θ ∗A to be near the mode of the posterior density. Of course, we should
get the same result, up to numerical standard error, for any choice of θ ∗A . This
property is also the basis of a test for accuracy and convergence of Gibbs sampling
algorithms proposed by Zellner and Min (1995).

Example 8.2.2 Marginal Likelihood Approximation in the Normal Linear
Regression Model In using the Gibbs sampler in the normal linear regression
model (Example 4.3.1) there are only two blocks. If we designate the draw for h to
be the first block of the Gibbs sampler and the draw for β to be the second block,
the additional computational burden is negligible. Since there are only two blocks,
no auxiliary simulations are needed.

Example 8.2.3 Marginal Likelihood Approximation in the Normal Mixture
Linear Model Recall that the posterior density function in the normal mixture
linear model (Section 6.4.2) is multimodal, a feature that makes it ill-suited to
importance sampling, and can present problems for the density ratio marginal likeli-
hood approximation method described in Section 8.2.4. Let θ denote the parameters
γ , h, π and h. Then
                                      p(θ ∗ | A)p(s∗ | θ ∗ , A)p(yo |s∗ , θ ∗ , A)
                     p(yo | A) =                 ∗              ∗   ∗
                                                                                     .       (8.20)
                                             p(s | y , A)p(θ |
                                                     o             s , yo )
Each of the three terms in the numerator of the right side of this expression can
be evaluated analytically. The evaluation of terms in the denominator requires the
output of the original posterior simulator and two conditional posterior simulators.
The first term in the denominator
                                    
                     s∗ | yo , A) =
                   p(                p(s∗ | θ , yo , A)p(θ | yo , A)
                                              
FORMAL MODEL COMPARISON                                                                 259

                               
can be approximated by M −1 M    m=1 p( s∗ | θ (m) , A); note that the terms in this sum
are available from the original posterior simulator. The last term in the denominator
of (8.20) can be expressed as the product of the following four terms:

                            p(π ∗ |
                                   s∗ , yo , A) = p(π ∗ |
                                                         s∗ , A),
                        p(γ ∗ | π ∗ ,
                                     s∗ , yo , A) = p(γ ∗ |
                                                           s∗ , yo , A),
                    p(h∗ | γ ∗ , π ∗ ,
                                      s∗ , yo , A) = p(h∗ | γ ∗ ,
                                                                 s∗ , yo , A),
               p(h∗ | h∗ , γ ∗ , π ∗ ,
                                      s∗ , yo , A) = p(h∗ | h∗ , γ ∗ ,
                                                                      s∗ , yo , A).

The first and last terms can be evaluated analytically. A second run of the pos-
terior simulator with 
                      s =s∗ and the block in π omitted produces the simulations
γ 1(m)
       , h , and h (m = 1, . . . , M), and the approximation
          1(m)     1(m)


                                 
                                 M
                          M −1         p(γ ∗ | h1(m) , h1(m) ,
                                                              s∗ , yo , A)
                                 m=1

of the second term above. A third run with   s∗ and
                                           s =    Mγ = γ ∗ produces the sim-
                                                −1          ∗   2(m) ∗ o
                                                     m=1 p(h | h
           2(m)      2(m)
ulations h      and h , and the approximation M                      s , y , A)
                                                                    ,
of the third term.

8.2.4 Density Ratio Marginal Likelihood Approximation
The marginal likelihood is the integrated posterior density kernel in standard
form (2.8)
                           
               p(y | A) =
                   o
                               p(θ A | A)p(yo | θ A , A) dν(θ A ).       (8.21)
                                       A


Given the output of a posterior simulator, θ (m)
                                             A ∼ p(θ A | y , A), and evaluations of
                                                           o
                      (m)                              (m)
the prior density p(θ A | A) and data density p(yo | θ A , A), we can use Theorem
8.1.1 to approximate (8.21):

              
              M
                                                                a.s.
       M −1         f (θ (m)     (m)           (m)                −1
                         A )/p(θ A | A)p(y | θ A , A) → [p(y | A)] .
                                          o                 o
                                                                                      (8.22)
              m=1

In (8.22) the probability density f (·) can be constructed from the posterior simu-
lator output as described in Theorem 8.1.2. The density ratio marginal likelihood
approximation was proposed by Gelfand and Dey (1994), and the implementation
with f (·) constructed from the posterior simulator output is due to Geweke (1999).
The advantage of the method is that it is generic. It applies to any posterior sim-
ulator, no matter what algorithm is used, and since it approximates the marginal
likelihood, it can be applied in approximating Bayes factors for any two models
that pertain to the same data yo . If the evaluation p(θ (m)              (m)
                                                           A | A)p(y | θ A , A) is
                                                                      o
                                          (m)
recorded in each iteration, along with θ A , the density ratio marginal likelihood
260                                                                 BAYESIAN INVESTIGATION


approximation can be computed after the posterior simulation has been completed.
Computation time is typically negligible. Its limitation is that approximations can
be poor when θ A is of very high dimension, as discussed following Theorem
8.1.2. This limitation applies to all the other known methods of approximating the
marginal likelihood as well.
   BACC uses the approximation (8.22) for many models, and permits the user to
specify the truncation parameter α of the density fα of Theorem 8.1.2, as well as
alternative values of L/M in the tapering function (4.46) for the computation of
numerical standard errors.
   It is often the case that part of the integration in (8.21) can be carried out
analytically, thereby greatly reducing the dimension of the space over which the
simulation approximation must be made. Let θ A = (θ A(1) , θ A(2) ), where θ A(2) is of
high dimension whereas the order of θ A(1) is small. Suppose that
                       
   p(y | θ A(1) , A) =     p(θ A(2) | θ A(1) , A)p(y | θ A(1) , θ A(2) , A) dν(θ A(2) )
                       A(2)

can be evaluated analytically. Then the whole marginal likelihood evaluation prob-
lem may be cast in terms of θ A(1) rather than θ A(2) .

Example 8.2.4 Evaluating the Marginal Likelihood in the Probit Model The
posterior simulator constructed in Section 6.2 has two blocks: β, the k × 1 vector of
covariate coefficients, and 
                            y, the T × 1 vector of latent probits. A direct application
of the density ratio method of marginal likelihood approximation would require
tailoring f (·) to approximate the distribution of the (k + T ) × 1 vector (β  , y ) .
For large T (applications with T > 1000 are common), this becomes impractical.
Instead, we may exploit the essentially closed-form representation
                                            
     p(yo | β, X, A)p(yo |              y=
                            y, β, X, A) d        p(yo | β, X, A)p(yo |  y, A) d
                                                                                 y
 RT                                              RT

                                                                         
                                                                         T
                                            = p(yo | β, X, A) =                p(yto | β, xt , A)
                                                                         t=1

                                                
                                                T
                                                      (−β  xt )(1−yt ) (β  xt )yt
                                                                     o               o
                                            =                                              (8.23)
                                                t=1

where yto = 0 for the first outcome and yto = 1 for the second. (The univariate
normal cdf cannot be expressed in closed form but can be computed to machine
accuracy very rapidly.) We record the product of (8.23) and p(β (m) | A), along
with β (m) , each iteration, and then apply the density ratio approximation method
over the k-dimensional space.

Exercise 8.2.1 Completing the Argument            Derive (8.19).
FORMAL MODEL COMPARISON                                                          261

Exercise 8.2.2 Bayes Factor with Common Likelihoods Example 5.1.1 em-
ployed a conditionally conjugate prior distribution in which β ∼ N (β, H−1 ).
Beyond the original specification of the prior, the example considered a “weak”
prior that reduced H by a factor of 5, and a “strong” prior that increased it by a
factor of 5.

  (a) Letting A1 denote the model with the original prior and A2 the model with
      the strong prior, use the method of Section 8.2.1 to approximate the loga-
      rithm of the Bayes factor in favor of the model with the strong prior. Find the
      numerical standard error of approximation, and verify that the approximation
      is consistent with the exact result reported in Example 5.1.1.
  (b) Repeat part (a), but reverse the roles of A1 and A2 . Use BACC to compute
      the numerical standard error of the logarithm of the Bayes factor. Then,
      increase the number of iterations used by a factor of 10, and again compute
      the numerical standard error. Discuss.

Exercise 8.2.3 Marginal Likelihood Approximation Using Importance Sam-
pling Consider the importance sampling algorithm for the stationary first-order
Markov
m          finite state model described in Section 7.2.2, and let w(P(m) ) =
              (m) noj
  j =1 π j (P    ) denote the weight at iteration m.
                                                  
  (a) Show that an almost sure limit w of M −1 M      m=1 w(P
                                                                 (m)
                                                                     ) exists.
  (b) Derive a closed-form expression for the marginal likelihood of the stationary
      first-order Markov finite state model, expressed in terms of w, the prior
      hyperparameters aij , and the sufficient statistics noij .

Exercise 8.2.4 Marginal Likelihood Approximation Using Gibbs Sampling
This exercise is an extension of Example 5.1.1. Use the method of Section 8.2.3
to approximate the log marginal likelihood of the model in Example 5.1.1, and
find the numerical standard error of this approximation. Verify that the result is
consistent with the exact value reported in Example 5.1.1, and that its numerical
standard error is smaller than the numerical standard error of .0030 for the density
ratio approximation of the log marginal likelihood reported in that example.

Exercise 8.2.5 Inference about Shape Exercise 5.4.3(b) found the posterior
probability that the shape constraints were valid over the range of the data (11.4
to 27), conditional on the regression function for the student : teacher ratio being
polynomials of order 2, 3, 4 or 5. Consider, instead, models that constrain the
function to have this shape by appropriate truncation of the prior distribution used
in Example 5.4.3 and Exercise 5.4.3(b). Find the posterior odds ratio in favor of
this model, versus the model of Example 5.4.3 and Exercise 5.4.3(b). Contrast the
result with the posterior probabilities found in Exercise 5.4.3(b). (Hint: Consider
simulating from the prior distribution of Example 5.4.3 in order to find the required
normalizing constant for the prior density in the new model.)
262                                                             BAYESIAN INVESTIGATION


8.3 MODEL SPECIFICATION

Creating a complete model entails specification of the prior density of unobserv-
ables

                                      p(θ A | A),                                (8.24)

the conditional density of observables

                                    p(y | θ A , A),                              (8.25)

and the composition of a vector of interest ω and its conditional density

                                   p(ω | θ A , y, A).                            (8.26)

To this point we have taken as given all of these distributions. Yet a sensible specifi-
cation of all three is essential to the investigator’s task of informing and improving
decisions. To a substantial extent, success in this endeavor arises from the inves-
tigator’s creativity, experience, skill, and understanding of the client’s situation.
These characteristics cannot be endowed analytically. However, the investigator
can employ certain systematic procedures that are very useful tasks in the process
of creating and improving models. These procedures are known collectively as
Bayesian specification analysis.
   It is useful to distinguish between two kinds of specification analysis. Prior pre-
dictive analysis takes place when the investigator is considering alternative variants
of (8.24)–(8.26). It requires only forward simulation. Posterior predictive analysis
takes place after the investigator has conditioned on the data yo and is consid-
ering possible changes in the complete model. It requires a posterior simulator.
We distinguish between prior and posterior specification analysis in part because
the former is less costly than the latter; if a prior predictive specification analysis
indicates serious problems, it may be prudent to consider alternatives to (8.24),
(8.25), and (8.26), before undertaking full implementation of the model as out-
lined in Section 8.1. There is a substantial literature on both of these approaches.
The seminal work of Box (1980), and the comments of discussants published with
that paper, still provide deep and useful perspectives on specification analysis.
For a similar more recent symposium, see Bayarri and Berger (1999) and their
discussants.

8.3.1 Prior Predictive Analysis
The objective of prior predictive analysis is to ascertain the prior distribution of
functions of the form h(y, ω) that are interesting and relevant to the problem. This
can be accomplished through the forward simulation

                                θ (m)
                                  A ∼ p(θ A | A),                                (8.27)
                                y(m) ∼ p(y | θ (m)
                                               A , A),                           (8.28)
MODEL SPECIFICATION                                                                    263


                              ω(m) ∼ p(ω | θ (m)
                                             A ,y
                                                 (m)
                                                     , A),                           (8.29)
                              h (m)
                                      = h(y
                                          (m)
                                                ,ω   (m)
                                                           ).                        (8.30)

   The forward simulation of h may reveal deficiencies in the model, in the sense
that the distribution of h(y, ω) coincides poorly with beliefs about this function. For
instance, in the value at risk example, the function h might be the sample correlation
coefficient between squared returns on successive days over a hypothetical sample
of (say) 100 days’ duration. If the prior distribution of h places probability .99 on
the interval (−.01, .01), most clients would regard the model as an unreliable basis
on which to assess value at risk, given the well-documented persistence in squared
returns on financial assets. They would hesitate to proceed with such a model,
because it does not reflect their prior beliefs. More generally, prior predictive
analysis interprets the model specification—both the distribution of observables
conditional on parameters, and the prior distribution of parameters—in terms of
observables and vectors of interest that are usually easier to understand than the
parameters themselves.
   If the prior predictive analysis reveals deficiencies, then the investigator may
revise (8.24), (8.25), or (8.26), or may decide to begin anew with a completely
different specification. An investigator with strong insights into the substance of
alternative models and the beliefs of clients may find that the prior distribution of
h provides useful clues in revising the model or constructing a new one.

Example 8.3.1 Prior Predictive Analysis in the Earnings Example Recall the
distribution of earnings conditional on age and education studied in Example 6.4.1
using the normal mixture linear model. In that model the disturbances εt = yt −
β  xt are independent and identically distributed. Conditional on a latent state  st = j ,
εt ∼ N [α j , (h · hj )−1 ] (j = 1, . . . , m). (Section 6.4.2 provides the complete speci-
fication of the model.) The prior distribution in Example 6.4.1 had five independent
components:

                  Xβ ∼ N [10.5ιT , (0.72 T )IT ],           (8/3)h ∼ χ 2 (10),
         α j ∼ N (0, 2.5), 3hj ∼ χ 2 (3), p ∼ Dirichlet (1, . . . , 1).              (8.31)

Example 6.4.1 considered the cases of mixtures of m = 2 and m = 3 normal distri-
butions. Since the Bayes factor favored the mixture of three normals, this example
pertains to that case.
   The prior distribution (8.31) can be understood through its implications for
observables y by means of various functions h(y). The observables we consider
here are the log earnings in a population of T men with the same ages and levels
of education as in the sample—that is, the T × 1 random vector y. Functions h(y)
can be chosen to summarize various aspects of y. Thus the forward simulation
(8.27)–(8.30) amounts to drawing a set of parameters from the prior distribution and
then, using the T × k covariate matrix X, simulating values of the corresponding
T × 1 log earnings vector y, and then finding the corresponding functions h(y).
264                                                            BAYESIAN INVESTIGATION


   These functions h(y) can be chosen to study the implications of the prior distri-
bution for the regression of log wages on age and education. One such function is
the difference between the average log earnings of college graduates (e = 16) and
high school graduates (e = 12) in a population of men defined by the covariates in
the sample; of course, these men do not all have the same age, and the distribution
of ages within each of the two groups tends to differ. Another is the difference
between the average log earnings of high school graduates and men with 8 years of
education. Turning to systematic differences by age, one function is the difference
between the average log earnings of men age 45 and those age 25, while another is
the difference between the average log earnings of men age 60 and those age 45.
   The prior distribution expresses the variety of conditional distributions of log
earnings, as well as conditional means, that are plausible. We cannot observe these
conditional distributions, but we can observe closely related sample counterparts.
A sample counterpart of the population conditional distribution coefficient of skew-
ness, for example, is the sample skewness coefficient of the least-squares residuals
(LSRs) in the population. Construction of this function hamounts to drawing param-
eters from the prior distribution, and then for each drawing simulating the log
earnings sample y, computing the least-squares residuals, and forming the sample
skewness coefficient of the residuals. Similar exercises can be conducted for the
coefficient of kurtosis and for the inequality measures G, P , and R defined in
Example 6.4.1.
   The results of this prior predictive analysis can be summarized in several ways.
One useful summary is the following table, which indicates the observed value
h(yo ), together with the fraction of 2000 draws from the prior distribution that
were less than h(yo ) for each function h. For each function h a centered 95%
prior credible interval includes the observed value h(yo ). In this sense, the prior
distribution accommodates the characteristics of the data well:

                                                      h(yo )          P −1 [h(yo ) | A]

Average(y | e = 12) − average(y | e = 8)              0.610                0.587
Average(y | e = 16) − average(y | e = 12)             0.491                0.645
Average(y | a = 45) − average(y | a = 30)             0.459                0.579
Average(y | a = 60) − average(y | a = 45)            −0.242                0.478
Variance of LSRs                                      0.539                0.289
Coefficient of skewness, LSRs                        −0.974                0.061
Coefficient of kurtosis, LSRs                         6.220                0.904
Gini coefficient, LSRs                                0.346                0.186
Proportion below half median, LSRs                    0.148                0.309
Earnings fraction to highest decile, LSRs             0.266                0.223

   The summary in the foregoing table proceeds one dimension at a time. We
can work two dimensions at a time, as illustrated in Figure 8.1. Panels (a) and (b)
indicate that the prior distribution of observed systematic differences in earnings by
MODEL SPECIFICATION                                                                                                                                                       265

                              6                                                                                              6


                              4                                                                                              4
   Education 16 vs. 12




                              2                                                                                              2




                                                                                                            Age 60 vs. 45
                              0                                                                                              0

                             −2                                                                                             −2

                             −4                                                                                             −4


                             −6                                                                                             −6
                               −6   −4        −2      0       2        4   6                                                  −6      −4     −2        0        2     4   6
                                              Education 12 vs. 8                                                                                  Age 45 vs. 30
                                                     (a)                                                                                                (b)


                             10                                                                                             0.5
                              9                                                                                    0.45
                              8                                                                                             0.4
                                                                               Fraction below half median
   Coefficient of kurtosis




                              7                                                                                    0.35

                              6                                                                                             0.3
                              5                                                                                    0.25
                              4                                                                                             0.2
                              3                                                                                    0.15
                              2                                                                                             0.1
                              1                                                                                    0.05
                              0                                                                                              0
                               −2        −1           0            1       2                                                      0    0.2        0.4         0.6   0.8   1
                                         Coefficient of skewness                                                                              Gini coefficient
                                                     (c)                                                                                                (d)

Figure 8.1. In each panel the scatterplots show values of two functions of 200 independent draws from
the prior—the observed value is the intersection of the horizontal and vertical lines: (a,b) differences
in sample average log earnings; (c) moments from least-squares residuals; (d) inequality measures from
least-squares residuals.


age and education is extremely diffuse. They show that the polynomial specification
is sufficiently flexible to simultaneously capture the observed difference in the
earnings of college and high school graduates and the observed difference in the
earnings of high school graduates and those completing eighth grade, in the sample,
for example. What is important, here, as well as more generally, is that (8.24) and
(8.25) do not appear to systematically exclude any plausible combinations.
   The prior distribution of the coefficients of skewness and kurtosis in the least-
squares residuals indicates that the model is flexible in some ways; for example,
it permits both platykurtic and leptokurtic distributions, including some that are
highly leptokurtic. However it provides much less support at the observed values
266                                                           BAYESIAN INVESTIGATION


than it does at values that are closer to the moments of a normal distribution. Panel
(d) of Figure 8.1 is based on the exponentiated least-squares regression of log
wages on the polynomial in age and education. As the Gini coefficient approaches
zero, the fraction of men with earnings below half the median must also approach
zero, but as the Gini coefficient increases, the prior allows substantial flexibility
in the distribution of earnings. The distribution is diffuse but appears to provide
greatest support to points near the observed values.

   The preceding example illustrates how an investigator makes sense of a complex
model, including the prior distribution (8.31). The components of the model have
meaning taken together, but not in isolation. The objective of prior predictive
analysis is to summarize the model by means of functions h(y, ω) to which the
client can assign prior probability directly. [There is a substantial literature about
prior elicitation that builds on this fact, e.g., Garthwaite and Dickey (1988), Kadane
(1994), and Kadane and Wolfson (1998).] The investigator’s task is to create models
(8.24) that reproduce the priors on h(y, ω) in as plausible a fashion as possible,
given the choices of (8.24), (8.25), and (8.26) that are feasible. The next example
applies this idea to the specification of the Markov normal mixture linear model in
Example 7.3.2.

Example 8.3.2 Prior Predictive Analysis in the S&P 500 Example Recall
Example 7.3.2. In their application of the Markov normal mixture linear model
to stock returns, Ryden et al. (1998) were motivated, in part, by the challenge of
reproducing some stylized facts about observed returns on financial assets identified
by Granger and Ding (1995a, 1995b). These characteristics include the following:

   1. Returns yt are not autocorrelated (except possibly at lag one).
   2. The autocorrelation functions of |yt | and yt2 decay slowly. The decay is much
      slower than the exponential ratio of an autoregressive model, like the one
      considered in Section 7.1.
   3. The correlation of |yt |θ and |yt−1 |θ is highest when θ = 1.
   4. Correlations between sign(yt ) and sign(yt−k ) are negligibly small.
   5. The correlation between |yt | and sign(yt ) is negligibly small.
   6. |yt | has the same mean and standard deviation.

   Note that these properties refer to observed returns, not their population coun-
terparts. They indicate features that would be desirable in complete models of
financial returns, and strongly suggest functions of observables that can be used
to interpret and evaluate any complete model of financial returns before it is
applied. The following table indicates the values of the sample statistics so = h(yo )
from the sample of Example 7.3.2 (T = 1700) and the corresponding point in the
prior cdf of s = h(y) using the model and prior distribution described in that
example. The evaluation of the prior cdf is based on 1000 draws from the prior
MODEL SPECIFICATION                                                                267

distribution, followed by a sample of size T = 1700 conditional on the parameters
drawn.

Property                Observable s = h(y)                    so      P (s ≤ s o | A)

   1        corr(yt , yt−1 )                                 0.1029         0.34
   1        corr(yt , yt−2 )                                 0.0338         0.17
   2        corr(|yt | , |yt−1 |)                            0.0531         0.20
   2        corr(|yt | , |yt−2 |)                            0.0104         0.07
   2        corr(|yt | , |yt−5 |)                            0.1107         0.95
   2        corr(|yt | , |yt−1 |)2 /corr(|yt | , |yt−2 |)    0.2716         0.69
   2        corr(|yt | , |yt−1 |)5 /corr(|yt | , |yt−5 |)   4 × 10−6        0.26
                        2
   3        corr(yt2 , yt−1 )                                0.0697         0.32
   3                     2
            corr(yt2 , yt−1 )/corr(|yt | , |yt−1 |)          1.3134         0.93
   4        corr[sign(yt ), sign(yt−1 )]                     0.0728         0.23
   4        corr[sign(yt ), sign(yt−2 )]                     0.0031         0.05
   5        corr[|yt | , sign(yt )]                          0.0114         0.55
                     
   6        |y|T = Tt=1 |yt | /T                             0.0068         0.40
                           
   6        SD(|yt |) = Tt=1 (|yt | − |y|T )2 /(T − 1)       0.0059         0.48
   6        |y|T /SD(|yt |)                                  1.1589         0.28
             T
                t=1 (yt − y T ) /(T − 1) /SD(|yt |)
                               3                    3
                                                            0.227           0.70
             T
                t=1 (yt − y T ) /(T − 1) /SD(|yt |)
                               4                    4
                                                             4.4595         0.70


   The complete model accounts well for each statistic, taken in isolation. These
results, by themselves, say nothing about the ability of the model to account simul-
taneously for two or more of these statistics, or of the stylized facts identified by
Granger and Ding (1995a, 1995b) and Ryden et al. (1998). That possibility can be
investigated using the graphical methods of the previous example.

8.3.2 Posterior Predictive Analysis
Consider the following conceptual experiment. We have an observed outcome yo
from an experiment that can be repeated. Our vector of interest ω is observable out-
comes in independent repetitions of the same experiment. The observed outcome
can be summarized in any one of several ways, typically a scalar function h(yo ),
and the outcomes of repetitions of the experiment can be summarized in the same
ways, typically h(ω). The predictive density for these outcomes in repetitions of
the experiment is p[h(ω) | yo , A]. The observed h(yo ), in the context of this dis-
tribution, tells us much about the model A. It may turn out that the observed h(yo )
is implausible, in the sense that h(yo ) is not an element of a 100(1 − α)% highest
268                                                            BAYESIAN INVESTIGATION


posterior density credible set for h(ω) with respect to p[h(ω) | yo , A]. If the pre-
dictive density of h(ω) is unimodal, this is equivalent to h(yo ) being in the extreme
tails of p[h(ω) | yo , A]. This idea goes back to the notion of “surprise” discussed
by Good (1956), and its essentials were further developed by Rubin (1984) in what
he termed “model monitoring by posterior predictive checks.” This idea builds on
that of the probability integral transform stressed by Dawid (1984) in prequential
forecasting, and formalized by Meng (1994); see also the comprehensive survey of
Gelman et al. (1996) and the more recent work of Bayarri and Berger (1999) and
the references cited therein.
    This conceptual experiment is the motivation for posterior predictive analysis,
whose mechanics are the same as those in (8.27)–(8.30), except that we replace
(8.27) with θ (m)
              A ∼ p(θ A | y , A). In many cases the posterior predictive analysis
                              o

may parallel the prior predictive analysis, and in this case the posterior predic-
tive analysis involves almost no additional effort given the output of the posterior
simulator.

Example 8.3.3 Posterior Predictive Analysis in the Earnings Example A pos-
terior predictive analysis of the earnings model of Example 6.4.1, using the same
functions h(·) as in the prior predictive analysis of Example 8.3.1, yields the results
shown below. The posterior cdf evaluated at the observed values is in the interval
(0.05, 0.95) in every case. The four functions based on conditional means of earn-
ings indicate observed values near the median of the posterior cdf in two cases,
and in the upper quartile in two others. The six functions based on the least squares
residuals, which indicate the ability of the model to capture the scale and shape of
the conditional distribution, all yield observed values in the interquartile range of
the posterior cdf.

                                                   h(yo )    P [h(ω) ≤ h(yo ) | yo , A]

Average(y | e = 12) − average(y | e = 8)          0.610                0.940
Average(y | e = 16) − average(y | e = 12)         0.491                0.474
Average(y | a = 45) − average(y | a = 30)         0.459                0.889
Average(y | a = 60) − average(y | a = 45)        −0.242                0.552
Variance of LSRs                                  0.539                0.442
Coefficient of skewness, LSRs                    −0.974                0.619
Coefficient of kurtosis, LSRs                     6.220                0.275
Gini coefficient, LSRs                            0.346                0.519
Proportion below half-median, LSRs                0.148                0.418
Earnings fraction to highest decile, LSRs         0.266                0.514

   These findings are reinforced in the pairwise posterior predictive analysis in
Figure 8.2, parallel to the pairwise prior predictive analysis in Figure 8.1. The
scatterplots in panels (c) and (d) of Figure 8.2 indicate that the mixture of three
normals model accounts well for non-normality, as reflected in the coefficients of
skewness and kurtosis and measures of inequality in the least squares residuals.
MODEL SPECIFICATION                                                                                                                                              269

                                                                                                             0.3
                                                                                                             0.2
                             0.6
                                                                                                             0.1
                                                                                                              0
  Education 16 vs. 12




                            0.55




                                                                               Age 60 vs. 45
                                                                                                            −0.1
                             0.5                                                                            −0.2
                                                                                                            −0.3
                            0.45
                                                                                                            −0.4
                                                                                                            −0.5
                             0.4
                                                                                                            −0.6

                            0.35
                                   0   0.2         0.4            0.6   0.8                                          −0.2      0       0.2       0.4       0.6
                                             Edication 12 vs. 8                                                                    Age 45 vs. 30
                                                    (a)                                                                                  (b)

                              9                                                                             0.18
                             8.5                                                                            0.17
                              8
                                                                               Fraction below half median




                                                                                                            0.16
  Coefficient of kurtosis




                             7.5
                                                                                                            0.15
                              7
                             6.5                                                                            0.14
                              6
                                                                                                            0.13
                             5.5
                                                                                                            0.12
                              5

                             4.5                                                                            0.11

                              0                                                                              0.1
                              −1.5                −1                    −0.5                                   0.3          0.32        0.34        0.36     0.38
                                        Coefficient of skewness                                                                    Gini coefficient
                                                    (c)                                                                                  (d)

Figure 8.2. In each panel the scatterplots show values of two functions of 200 draws from the pos-
terior—the observed value is the intersection of the horizontal and vertical line: (a, b) difference in
sample average log earnings; (c) moments from least-squares residuals; (d) inequality measures from
least-squares residuals.



This is consistent with the findings in the foregoing table. The scatterplot in panel
(a) reveals that the two returns to education functions are nearly uncorrelated in the
posterior distribution, and so this panel adds little to first two lines of the foregoing
table. The scatterplot in panel (b) shows that the two returns to age functions are
negatively correlated in the posterior distribution. As a consequence, the posterior
distribution captures the difference in the returns over these two age ranges, but it
is less successful in changes in log earnings between age 30 and age 60.

   This example illustrates how Bayesian specification analysis can be used to
capture the implications of models for observables. In general, the goal of posterior
specification analysis is to highlight inconsistencies between models and observed
270                                                                   BAYESIAN INVESTIGATION


data, thus increasing our understanding of models and sowing the seeds for the
development of better models and improved decisionmaking.

Example 8.3.4 Posterior Predictive Analysis in the S&P 500 Example Repeat-
ing the analysis of Example 8.3.2, using the posterior distribution in place of the
prior distribution, produces the following results. They are based on the 20,000
iterations of the posterior simulator described in Example 7.3.2.

Property               Observable s = h(y)                       so       P (s ≤ s o | yo , A)

   1       corr(yt , yt−1 )                                   0.1029            0.964
   1       corr(yt , yt−2 )                                   0.0338            0.618
   2       corr(|yt | , |yt−1 |)                              0.0531            0.141
   2       corr(|yt | , |yt−2 |)                              0.0104            0.014
   2       corr(|yt | , |yt−5 |)                              0.1107            0.898
   2       corr(|yt | , |yt−1 |)2 /corr(|yt | , |yt−2 |)      0.2716            0.939
   2       corr(|yt | , |yt−1 |)5 /corr(|yt | , |yt−5 |)      4×10−6            0.107
                       2
   3       corr(yt2 , yt−1 )                                  0.0697            0.223
   3                   2
           corr(yt2 , yt−1 )/corr(|yt | , |yt−1 |)            1.3134            0.779
   4       corr[sign(yt ), sign(yt−1 )]                       0.0728            0.985
   4       corr[sign(yt ), sign(yt−2 )]                       0.0031            0.392
   5       corr[|yt | , sign(yt )]                            0.0114            0.670
                    
   6       |y|T = Tt=1 |yt | /T                               0.0068            0.357
                          
   6       SD(|yt |) = Tt=1 (|yt | − |y|T )2 /(T − 1)         0.0059            0.627
   6       |y|T /SD(|yt |)                                    1.1589            0.071
            T
               t=1 (yt − y T ) /(T − 1) /SD(|yt |)
                              3                    3
                                                               0.227            0.781
            T
               t=1 (yt − y T ) /(T − 1)
                              4
                                              /SD(|yt |)4     4.4595            0.844


   The posterior distribution accounts reasonably well for the properties of interest
identified in Example 8.3.2, at least taken one at a time. The most difficult features
appear to be the autocorrelation functions of |yt | and sign(yt ). Exercise 8.3.3 takes
up these and some other possibilities for posterior predictive analysis.

Exercise 8.3.1 Predictive Analyses             Suppose that p[h(y) = h(yo ) | yo , A] = 0.

  (a) At what point in a prior predictive analysis would an investigator become
      aware of this fact?
  (b) At what point in a posterior predictive analysis would an investigator become
      aware of this fact?
BAYESIAN COMMUNICATION                                                         271

Exercise 8.3.2 Predictive Analyses of the Normal Linear Model for Earnings
Repeat the analysis of Examples 8.3.1 and 8.3.3, using a normal distribution in
place of the mixture of normals distribution. In how many of the functions h(y)
do you find evidence of serious misspecification?

Exercise 8.3.3 Further Predictive Analyses of the S&P 500 Returns Model
This exercise entails a more extensive specification analysis of the Markov normal
mixture model for the S&P 500 returns.

  (a) The analysis in Example 8.3.4 suggested potential difficulties in the dis-
      tribution of sample autocorrelations of the absolute returns and signs of
      returns. By modifying the code in the online appendix, use graphical meth-
      ods to undertake prior and posterior predictive analyses appropriate to each
      of these features of observed returns.
  (b) This model was motivated by the value at risk problem first introduced in
      Section 1.1.2. Extend the prior and posterior predictive analysis of Exam-
      ples 8.3.2 and 8.3.4, using a vector of interest ω suggested by this problem.

Exercise 8.3.4 Predictive Analyses in the Class Size Examples The original
work with the Massachusetts test score data (Example 5.1.1) assumed a normal
linear regression.

  (a) Examples 5.4.1–5.4.4 investigated alternative models in which the regres-
      sion function is nonlinear in the covariates. Before proceeding to this step,
      we might wish to perform a posterior predictive analysis, in the context of
      Example 5.1.1, that would be sensitive to nonlinearity. Carry out such an
      analysis, using functions h(y) that are sensitive to nonlinearity.
  (b) All of Examples 5.1.1 and 5.4.1–5.4.4 assumed that the distribution of the
      regression disturbances is normal. Design and execute a posterior predic-
      tive analysis that provides information on whether this aspect of the model
      specification appears to be reasonable.


8.4 BAYESIAN COMMUNICATION

An investigator cannot anticipate the uses to which her work will be put, or the
variants on her model that may interest a client. Different uses call for different
vectors of interest ω. Variants on her model will often revolve around changes in
the prior distribution. Yet any investigator who has publicly reported results has
confronted the constraint that only a few representative findings can be conveyed
in written work.
   Posterior simulators provide a clear answer to the question of what the investi-
gator should report, and in the process remove the constraint that only a few rep-
resentative findings can be communicated. The investigator can provide electronic
272                                                              BAYESIAN INVESTIGATION


access to the following M × (k + 3) simulator output matrix:
                                                    (1) 
                      w(θ (1)       (1)        (1)
                           A ) p(θ A ) p(y | θ A ) θ A
                                          o
                                                     .. 
                       ..        ..        ..            
                        .         .         .         . .
                        w(θ (M)     (M)         (M)   (M)
                            A ) p(θ A ) p(y | θ A ) θ A
                                           o



Even very large simulator output matrices can be stored at negligible cost and
communicated quickly over the Internet.
    Given the simulator output matrix, the client can immediately compute approx-
imations to posterior moments not reported or even considered by the investigator,
using spreadsheet arithmetic. For example, a client reading a research report might
be skeptical that the investigator’s model, prior, and data set provide much informa-
tion about the effects of an interesting change in a policy variable on the outcome
in question. In many cases the client may be able to answer such questions in less
time than required to read the paper.
    With a small amount of additional effort, the client can modify many of the
investigator’s assumptions. Suppose that the client wishes to evaluate E[h(ω) |
yo , A2 ] using the same likelihood function as the investigator, but using his own
prior density p(θ A | A2 ) in place of the investigator’s prior density p(θ A | A1 ).
Suppose further that the support of the investigator’s prior distribution includes
the support of the client’s prior. Then the investigator’s posterior distribution may
be regarded as an importance sampling distribution for the client’s posterior. The
client reweights the investigator’s posterior simulation, using the function

                                 p(θ A | yo , A2 )   p(θ A | A2 )
                     w(θ A ) =                     =              .              (8.32)
                                 p(θ A | y , A1 )
                                          o          p(θ A | A1 )

The client thus approximates the posterior moment E[h(ω) | YoT , A2 ] by
                              M
                       (M)
                                        w(θ (m)      (m)
                                            A )w∗ (θ A )h(ω
                                                            (m)
                                                                )
                     h A2 =       m=1
                                  M                                .            (8.33)
                                              w(θ (m)      (m)
                                                  A )w∗ (θ A )
                                        m=1


In (8.33) ω(m) is drawn from the conditional density p(ω | yo , θ (m)
                                                                  A , A2 ) indepen-
dently of any other draws, w∗ (θ A ) is any weighting that accompanies the posterior
simulation provided by the investigator, and w(·) is the function in (8.32). If the
investigator has employed an importance sampling algorithm, then Theorem 4.2.2
          (M) a.s.
implies hA2 → E[h(ω) | yo , A2 ] = hA2 . The same result holds for MCMC algo-
rithms, as formalized in the following result.

   Theorem 8.4.1 Simulation-Consistent Approximation of Posterior Moments
with a Reweighted Posterior Distribution Suppose that two models, A1 and A2 ,
share the same parameter vector θ A and observables density p(y | θ A ), but have
BAYESIAN COMMUNICATION                                                               273

respective prior densities p(θ A | A1 ) with θ A ∈ A1 and p(θ A | A2 ) with θ A ∈ A2 .
Suppose A2 ⊆ A1 and define

                            w(θ A ) = p(θ A | A2 )/p(θ A | A1 ).

Let {θ (m)
       A } be an ergodic Markov chain with invariant density p(θ A | y , A1 ). Sup-
                                                                            o

pose further that the distribution ω | (y , θ A , A) is the same in the two models, and
                                         o

that ω(m) is drawn independently from p(ω | yo , θ (m)A , A). If hA2 = E[h(ω | y , A2 )]
                                                                                o

exists, then

                      (M)   
                            M                       
                                                    M
                                                                     a.s.
                  h A2 =          w(θ (m)   (m)
                                      A )h(ωA )/          w(θ (m)
                                                              A ) → hA2 .
                            m=1                     m=1



   Proof: From Theorem 4.5.2 {θ (m)
                                A ,ω
                                     (m)
                                         } is ergodic with invariant density

                             p(θ A | yo , A1 )p(ω | yo , θ A , A).

Since, as shown in Section 8.2.1

                       E[w(θ A ) | yo , A1 ] = p(yo | A2 )/p(yo | A1 )

and, by the same argument

              E[w(θ A )h(ωA ) | yo , A1 ] = [p(yo | A2 )/p(yo | A1 )]hA2 ,         (8.34)

the result follows.

    Note that the prior densities in w(θ A ) = p(θ A | A2 )/p(θ A | A1 ) can be replaced
with arbitrary kernels in this result.
    In Theorem 4.7.1 uniform ergodicity was one of the sufficient conditions for a
central limit theorem. If the investigator’s algorithm produces uniformly ergodic
{θ (m)
   A }, and if the ratio of the client’s prior density to the investigator’s prior density
is bounded, then there is a central limit theorem under the client’s prior as well,
as long as the client’s function of interest has finite posterior variance using this
prior. This condition is strikingly similar to the sufficient condition discussed below
Theorem 4.2.2. This is not surprising; the client is using the investigator’s posterior
as his importance sampling distribution.

   Theorem 8.4.2 A Central Limit Theorem for Weighted MCMC Simulators
Given the notation and assumptions of Theorem 8.4.1, suppose also that {θ (m)      A } is
uniformly ergodic, that var[h(ω) | YoT , A2 ] exists and is finite, and w(θ A ) ≤ w < ∞
∀ θ A ∈ A2 . Then there exists τ 2 > 0 such that
                                     (M)           d
                             M 1/2 (hA2 − hA2 ) → N (0, τ 2 ).
274                                                                BAYESIAN INVESTIGATION


   Proof: Arguing exactly as in the proof of Theorem 4.5.2, uniform ergodic-
ity of {θ (m)
          A } implies uniform ergodicity of {θ A , ω
                                                     (m)   (m)
                                                               }. Let λ1 and λ2 be any
two real numbers, not both 0. Define qλ (θ A , ω) = λ1 w(θ A ) + λ2 w(θ A )h(ω), and
observe that E[qλ (θ A , ω) | yo , A1 ] = λ1 w + λ2 whA2 = q λ exists and is finite. From
Theorem 4.7.1, we obtain
                                                        
                               M
                                                            d
                            −1            (m)
                M  1/2
                         M          qλ (θ A , ω ) − q λ → N (0, τ 2λ ).
                                               (m)

                              m=1

Since this is true for all λ = 0, it follows [see Rao (1965), Theorem 2c.5(iv)] that
                   M                                  
           M −1             w(θ (m) )h(ω(m) )      wh      
    M 1/2                                     −
                                 A                     A       d
                                                              → N (0, V).
                                                         2
                         M
                         m=1
                  M  −1
                                w(θ ) (m)             w     
                            m=1       A


A standard application of the delta method, as in the proof of Theorem 4.2.2, yields
the result.
                                                   (M)
   Approximating the numerical accuracy of h       is especially important when the
reweighting method of Theorem 8.4.1 is used. An ill-behaved weighting function
w(θ A ) will lead to poor approximation of hA2 . If this is the case, it is important
that the client be aware of this fact. This problem can be approached in a fashion
similar to the methods employed in Theorems 4.7.1 and 4.7.3.

   Theorem 8.4.3 Variance of the Approximation Error in Weighted MCMC Sim-
ulators In addition to the assumptions of Theorem 8.4.2, suppose that

                          zm = [w(θ (m)      (m)
                                     A ), w(θ A ) · h(ω
                                                        (m)
                                                            )]

is a stationary process with autocovariance
                                            function Cj = cov(zm , zm+j ) and spec-
tral density function Sz (λ) = ∞  j =−∞ C j exp(−iλj  ), and that the eigenvalues of
Sz (λ) are bounded uniformly both above and away from zero. Then
                                                           2
                   τ 2 = r −2 [Sz22 (0) − 2hA2 Sz12 (0) + hA2 Sz11 (0)],

where r = p(yo | A2 )/p(yo | A1 ).

   Proof: Straightforward application of the delta method.

   Corollary 8.4.1 Numerical Standard Errors for Weighted MCMC Simulators
In addition to the assumptions of Theorem 8.4.3, suppose also that 
                                                                          a.s.
                                                                   Sz (0) → Sz (0).
Then

                          Sz22 (0) − 2hA2 
      τ 2(M) = (w(M) )−2 [                Sz12 (0) + hA2 
                                       (M)             2(M)           a.s.
                                                           Sz11 (0)] → τ 2 ,
                     M
where w(M) = M −1               (m)
                        m=1 w(θ A ).
BAYESIAN COMMUNICATION                                                               275

                                          (M)
                                                τ 2(M) /M)1/2 , whose computation
   The numerical standard error of hA2 is then (
is guided by the following result.

  Theorem 8.4.4 Simulation Consistency of Numerical Standard Errors for
     M MCMC Simulators Define {zm } as in Theorem 8.4.3. Let z       =
                                                                  (M)
Weighted
  −1
M      m=1 zm and

                        
                        M
        C(M)
         j   = M −1           (zm − z(M) )(zm−j − z(M) ) (j = 0, 1, . . .).
                      m=j +1

Let L(M) satisfy the same conditions as in Theorem 4.7.3. Then
                           
                           L−1
         
         Sz (0) = C(M) +         [(L − s)/L] · (C(M) + C(M)
                                                                a.s.
                                                             ) → Sz (0).
                   0                             s      s
                           s=1


   Proof: See Newey and West (1987).

   BACC permits arbitrary weighting in the computation of posterior moments.
Of course, this may also be accomplished with standard mathematical appli-
cations software or even spreadsheet arithmetic. However, BACC also utilizes
Theorems 8.4.2–8.4.4 to provide numerical standard errors, using either default
values of the tapering function L(M) of Theorem 8.4.4, or values of L/M specified
by the user.

Example 8.4.1 Bayesian Communication in the Class Size Example (The on-
line appendix contains data, annotated code, and output for this example.) To illus-
trate the process of Bayesian communication about priors and posterior moments
outlined in this section, return to the normal linear model of Example 5.1.1. Sup-
pose that the client’s prior is the original prior distribution set out in that example.
The investigator, however, has used a prior distribution of the coefficient vector β
with prior precision H that is 5 times larger than the precision in the client’s prior
distribution. Using the algorithm of Example 4.3.1 with M = 100,000 iterations,
the investigator, if asked, would report prior and posterior moments as follows:
Investigator’s Model: Prior and Posterior Moments, Numerical Accuracy

                                 Prior                          Posterior
Coefficient            Mean              SD       Mean           SD            NSE   RNE

intercept               710        268.84       682.42        10.52         .0329    1.02
str coefficient           0          6.7447     −0.6853        0.2644       .00085   1.07
el coefficient            0          7.1414     −0.4098        0.2800       .00079   1.25
lunch coefficient         0          1.7321     −0.5190        0.0678       .00020   1.12
income coefficient        0         75.620       16.517        2.955        .00091   1.04
276                                                           BAYESIAN INVESTIGATION


    In these results “NSE” is the numerical standard error computed according to
Theorem 4.7.3, with L/M = 0.02, and “RNE” is the relative numerical efficiency
of the approximation: the ratio of the posterior variance to the product of M and
the squared numerical standard error. If RNE is close to 1, then the efficiency
of the MCMC algorithm is close to that of a hypothetical simulator making i.i.d.
drawings from the posterior distribution itself. That is the case here because there
is very little serial correlation in the algorithm of Example 4.3.1.
    If the client were to execute the algorithm of Example 4.3.1 with his prior—that
is, to repeat the exercise reported in Example 5.1.1—then the client, if asked, would
report prior and posterior moments as follows:

Client’s Model: Prior and Posterior Moments, Numerical Accuracy

                              Prior                        Posterior
Coefficient            Mean           SD      Mean          SD         NSE       RNE

intercept               710     120.23       682.61       10.49        .0310      1.15
str coefficient           0       3.1063     −0.6757       0.2635      .00081     1.07
el coefficient            0       3.1937     −0.3992       0.2783      .00086     1.04
lunch coefficient         0       0.7746     −0.5098       0.0675      .00020     1.12
income coefficient        0      33.818       16.415       2.956       .00097     0.93


The posterior moments are not exactly the same as those in Example 5.1.1, because
the client has used a different seed for the random-number generator. Alternatively,
the client might choose to reweight the simulations of the investigator. Denoting the
investigator’s prior precision matrix by H1 and the client’s prior precision matrix
by H2 , the client will employ the weighting function

              w(θ A ) = w(β) = exp[−(β − β) (H2 − H1 )(β − β)/2].

Then the client, if asked, would report prior and posterior moments as follows:
Reweighted Model: Prior and Posterior Moments, Numerical Accuracy;
Comparison

                            Prior                    Posterior
                                                                                Test
Coefficient          Mean       SD         Mean      SD          NSE   RNE       p

intercept             710     120.23   682.57  10.50  .0382            0.76     0.383
str coefficient         0       3.1063 −0.6751 0.2638 .00092           0.96     0.663
el coefficient          0       3.1937 −0.4009 0.2795 .00090           0.96     0.192
lunch coefficient       0       0.7746 −0.5098 0.0677 .00022           0.94     0.958
income coefficient      0      33.818   16.429  2.949 .00106           0.78     0.328
DENSITY RATIO ROBUSTNESS BOUNDS                                                      277

The rightmost column reports the outcome of a formal test that the posterior mean
when the investigator’s simulations are reweighted is the same as the posterior mean
in the client’s simulation, for each of the five coefficients. We expect the p values
to be uniformly distributed in the unit interval, and these results are consistent
with that hypothesis. There is a loss in efficiency in reweighting the investigator’s
simulations, apparent in RNE values that are somewhat (but not much) lower than
those that result if the client carries out the simulation directly.

Exercise 8.4.1 Completing the Argument            Derive (8.34).

Exercise 8.4.2 An informal examination of the three sets of moments reported
in Example 8.4.1 might suggest that although the moments in the reweighted model
are quite similar to those in the client’s model, they are not that different from those
in the investigator’s model, either. Test this conjecture formally.

Exercise 8.4.3 Recall that both the “weak” and “strong” priors in Example 5.1.1
produced marginal likelihood values that were lower than that of the original prior.

  (a) If the investigator were to steadily decrease the precision of her prior, in
      Example 8.4.1, the corresponding marginal likelihood would also decrease.
      Pick an even lower precision than the investigator used in Example 8.4.1,
      and reweight the output of the investigator’s simulator to obtain posterior
      moments of the coefficients under the client’s posterior. Verify that the qual-
      ity of the approximation of the client’s posterior moments is essentially as
      effective as it was in Example 8.4.1.
  (b) Using the investigator’s posterior from Example 8.4.1, reweight to obtain
      posterior moments under the “strong” prior of Example 5.1.1. Examine the
      relative numerical efficiency of the approximation.
  (c) Repeat part (b), but substitute the original prior of Example 5.1.1 for the
      investigator’s prior. Examine the relative numerical efficiency, and explain
      why it is not much higher than that in part (b).


8.5 DENSITY RATIO ROBUSTNESS BOUNDS

An alternative to providing the posterior simulation matrix is to report a range
of posterior moments, corresponding to all possible prior distributions within a
specified class of distributions. One such class is the density ratio class, discussed
in Section 3.3. It consists of all prior density kernels k(θ A | A) bounded above and
below by kernels a(θ A ) and b(θ A ). Corresponding to each posterior moment of
interest, E[g(θ A ) | yo , A] , the investigator reports the smallest and largest possible
values over all prior density kernels satisfying 0 ≤ a(θ A ) ≤ k(θ A | A) ≤ b(θ A ) ∀
θ A ∈ A .
   It turns out that it is easy to approximate these bounds using the output of a
posterior simulator. The details of the simulation algorithm are unimportant; the
method is the same whether the simulator utilizes a variant of MCMC, importance
278                                                                                 BAYESIAN INVESTIGATION


sampling, or any other method that provides a weighted or unweighted sample from
the posterior distribution. This is a substantial practical attraction of the density
ratio class, because the same procedures and software can be used for all posterior
simulation methods. It is necessary only to know that E[g(θ A ) | yo , A] exists, and
that for simulator output {θ (m)
                             A }, function of interest g(θ A ) and known weighting
function w(θ A )

                  M
                               w(θ (m)        (m)       (m)       (m)
                                   A )p(y | θ A , A)k(θ A | A)g(θ A )
                                         o
                         m=1
                         M
                                     w(θ (m)        (m)       (m)
                                         A )p(y | θ A , A)k(θ A | A)
                                               o
                               m=1
                         
                              p(yo | θ A , A)k(θ A | A)g(θ A ) dθ A
                  a.s.
                  →
                          A
                                                                                                   (8.35)
                                p(yo | θ A , A)k(θ A | A) dθ A
                               A


for all prior density kernels k(θ A | A) in the density ratio class. As indicated in
Section 3.3, the problem of finding the lower bound E[g(θ A ) | yo , A] on the pos-
terior moment is the same as finding the upper bound E[g(θ A ) | yo , A], and so this
section concentrates on the latter question.
    To simplify the notation, let gm = g(θ (m)
                                           A ) (m = 1, . . . , M), and suppose that the
simulator output is ordered so that gm is monotone nondecreasing. Let ιM denote an
M × 1 vector of ones and consider approximating E[g(θ A ) | yo , A] by maximizing

                                                      
                                                      M                
                                                                       M
                          Q(r) = g r/ιM r =               gm rm              rm
                                                      m=1              m=1


subject to u ≤ r ≤ v, where um = w(θ (m)        (m)      (m)
                                         A )a(θ A )/k(θ A | S) and vm = w(θ A )
                                                                                  (m)
    (m)     (m)
b(θ A )/k(θ A | S) (m = 1, . . . , M) and where k(θ A | S) is the prior density kernel
used in the simulation. We first develop an efficient solution of this discrete maxi-
mization problem, and then show that the solution provides a simulation-consistent
approximation of E[g(θ A ) | yo , A].
   The solution of the discrete problem parallels the solution of the exact problem
given in Theorem 3.3.1.

   Theorem 8.5.1         All solutions QM of maxr Q(r) subject to u ≤ r ≤ v are of
the form

                               r = (u1 , . . . , us , vs+1 , . . . , vm ) ,                        (8.36)

where s has the property

                                          gs ≤ Qs ≤ gs+1                                            (8.37)
DENSITY RATIO ROBUSTNESS BOUNDS                                                    279

and
                                     s                 M
                              Ns              gm um +            gm vm
               QM = Qs =         =      m=1
                                       s
                                                         m=s+1
                                                        M               .      (8.38)
                              Ds                 um +            vm
                                           m=1           m=s+1


   Proof: Because the sign of
               M             M
       ∂Q             rj gm −           gj rj   gm − Q(r1 , . . . , rM )
                  m=1              j =1
           =                   2
                                              =    M
       ∂rm                 M
                                                             rj
                              rj                       j =1
                             m=1

does not involve rm , a necessary condition for maximization is rm = um if gm <
Q(r) and rm = vm if gm > Q(r). Hence all solutions QM are characterized by
(8.36)–(8.38).

   Some relations between {Qs } and {gs } are useful in computing maxr Q(r) and
                    a.s.
in showing that QM → E[g(θ A ) | yo , A].

   Theorem 8.5.2     For Q1 , . . . , QM defined in (8.38), and any s, we obtain

  (a) Qs < gs ⇔ Qs < Qs−1 ⇒ Qs+1 < Qs
  (b) Qs > gs+1 ⇔ Qs+1 > Qs ⇒ Qs > Qs−1
  (c) Qs = Qs+1 ⇔ gs ≤ Qs ≤ gs+1 ≤ Qs+1 ≤ gs+2

   Proof: Simple algebra shows

                  Qs+1 − Qs = (Qs − gs+1 )(vs+1 − us+1 )/Ds+1                   (8.39)
                               = (Qs+1 − gs+1 )(vs+1 − us+1 )/Ds .              (8.40)

Because a(θ A ) < b(θ A )∀θ A ∈ A , it follows that vs − us > 0 ∀ s = 1, . . . , M.

  (a) From (8.40), Qs < gs ⇐⇒ Qs < Qs−1 ; from (8.39), Qs < gs ≤ gs+1 ⇒
      Qs+1 < Qs .
  (b) From (8.39), Qs > gs+1 ⇔ Qs+1 > Qs ; from (8.40), Qs > gs+1 ≥ gs ⇒
      Qs > Qs−1 ;
  (c) From (8.39) and (8.40), Qs = Qs+1 ⇒ Qs = gs+1 = Qs+1 , and gs ≤
      gs+1 ≤ gs+2 ; from (8.40), gs+1 ≤ Qs+1 ⇒ Qs+1 ≥ Qs , and from (8.39),
      Qs ≤ gs+1 ⇒ Qs+1 < Qs .

   Theorem 8.5.2 shows that (8.38) and (8.37) are sufficient for Qs = QM . It also
provides a computationally efficient solution of the discrete problem.

   Corollary 8.5.1    QM = maxr Q(r) subject to u ≤ r ≤ v may be computed as
follows:
280                                                            BAYESIAN INVESTIGATION



   1. Sort g(θ (1)              (M)                  (m)
               A ), . . . , g(θ A ) so that gm = g(θ A ) is monotone nondecreasing
      in m.
   2. Using successive bisection (Press et al. 1992, Section 3.4), find an index s
      such that gs ≤ Qs ≤ gs+1 .
   3. Set QM = Qs .

   The sufficiency result in Theorem 8.5.2 means that no further search is required
once the condition in step 2 of Corollary 8.5.1 is satisfied. Computation time for
step 2 is of the order log2 (M), whereas computation time for step 1 is of the order
M log2 (M) (Press et al. 1992, Section 8.3). Step 1 is essential to any approach, so
as M → ∞, Corollary 8.5.1 provides the most efficient algorithm possible.

   Theorem 8.5.3 Suppose that the convergence condition (8.35) is true for all
prior density kernels in the density ratio class

             k(θ A | A) : 0 < a(θ A ) < k(θ A | A) < b(θ A ) ∀ θ A ∈ A ,

and define QM as in Corollary 8.5.1. Then
                                  a.s.
                             QM → E[g(θ A ) | yo , A].


   Proof: For any real c, define k(θ A ; c) as in Theorem 3.3.1 and let s = s(M) be
the integer s of Corollary 8.5.1. Let

                  s1 = s1 (M) = max{m : gm ≤ E[g(θ A ) | yo , A]}.

          a.s.
Then Qs1 → E[g(θ A ) | yo , A] by assumption.
   For any c < E[g(θ A ) | yo , A], let s2 = s2 (M) = max{m : gm ≤ c}. By assump-
tion and Theorem 3.3.1, we obtain
            
                p(yo | θ A , A)k(θ A ; c)g(θ A ) dν(θ A )
        a.s. A
     Qj →                                                < E[g(θ A ) | yo , A].
                  p(y | θ A , A)k(θ A ; c) dν(θ A )
                       o
                 A

Hence limM→∞ P [s1 (M) > s2 (M)] = 1. By the monotonicity properties of {Qj }
established in Theorem 8.5.2, limM→∞ P [s(M) > s2 (M)] = 1.
   A symmetric argument holds beginning with any c > E[g(θ A ) | yo , A].

   Theorem 8.5.3 applies to any posterior simulation from a model with observ-
ables density p(yo | θ A , A) and prior density kernel k(θ A | A). It does not require
a(θ A ) < k(θ A | A) < b(θ A ), but in general, bounds of this type will be of inter-
est to the client. BACC incorporates the yet more specific instance a(θ A ) = r −1 ·
k(θ A | A), b(θ A ) = r · k(θ A | A), illustrated in Example 5.1.2. The user specifies
DENSITY RATIO ROBUSTNESS BOUNDS                                                    281

the function of interest vector g(θ (m)                          (m)
                                     A ), the weight vector w(θ A ) (m = 1, . . . , M),
and one or more values of r > 1. BACC computes the lower and upper bounds
E[g(θ A ) | yo , A] and E[g(θ A ) | yo , A] corresponding to each value of r, using the
algorithm described in Corollary 8.5.1.

Exercise 8.5.1 Completing the Argument          Derive (8.39) and (8.40).
      Bibliography


Ainslie, A. and P. E. Rossi (1998), “Similarities in Choice Behavior across Product Cate-
    gories,” Marketing Science 17: 91–106.
Albano, G. L. and F. Jouneau-Sion (2004), “Bayesian Inference in Repeated English Auc-
    tions,” Test 13: 193–211.
Albert, J. and S. Chib, (1993a), “Bayes Inference via Gibbs Sampling of Autoregressive
    Time Series Subject to Markov Mean and Variance Shifts,” Journal of Business and
    Economic Statistics 11: 1–15.
Albert, J. and S. Chib (1993b), “Bayesian Analysis of Binary and Polychotomous Response
    Data,” Journal of the American Statistical Association 88: 669–679.
Allenby, G. M. and P. E. Rossi (1999), “Marketing Models of Consumer Heterogeneity,”
     Journal of Econometrics 89: 57–78.
Amemiya, T. (1985), Advanced Econometrics. Cambridge, MA: Harvard University Press.
Anderson, T. W. (1984), An Introduction to Multivariate Statistical Analysis, 2nd ed. New
    York: Wiley.
Bajari, P. and L. X. Lee (2003), “Deciding between Competition and Collusion,” Review of
    Economics and Statistics 85: 971–989.
Barnard, G. A. (1949), “Statistical Inference,” Journal of the Royal Statistical Society Series
    B 11: 115–149.
Barnett, G., R. Kohn, and S. Sheather (1996), “Bayesian Estimation of an Autoregressive
    Model Using Markov Chain Monte Carlo,” Journal of Econometrics 74: 237–254.
Barnett, W. A., and A. Jonas (1983), “The Muntz-Szatz Demand System: An Application
    of a Globally Well Balanced Series Expansion,” Economics Letters 11: 337–342.
Bartlett, M. S. (1957), “A Comment on D. V. Lindley’s Statistical Paradox,” Biometrika 44:
     533–534.
Bayarri, M. J. and J. O. Berger (1999), “Quantifying Surprise in the Data and Model Veri-
    fication,” in J. M. Bernardo et al., eds., Bayesian Statistics, Vol. 6, pp. 53–82. Oxford,
    UK: Oxford University Press.
Berger, J. O. (1985), Statistical Decision Theory and Bayesian Analysis, 2nd ed. New York:
    Springer-Verlag.
Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.

                                                                                          283
284                                                                          BIBLIOGRAPHY


Berger, J. O. (1994), “An Overview of Robust Bayesian Analysis” (with discussion), Test
     3: 5–124.
Berger, J. O. and R. L. Wolpert (1988), The Likelihood Principle, 2nd ed. Hayward, CA:
     Institute of Mathematical Statistics.
Bernardo, J. M. and A. F. M. Smith (1994), Bayesian Theory. New York: Wiley.
Birnbaum, A. (1962), “On the Foundations of Statistical Inference,” Journal of the American
     Statistical Association 57: 269–306.
Box, G. E. P. (1980), “Sampling and Bayes’ Inference in Scientific Modelling” (with dis-
     cussion and rejoinder), Journal of the Royal Statistical Society Series A 143: 383–430.
Brooks, S. P. and A. Gelman (1998), “General Methods for Monitoring Convergence of
     Iterative Simulations,” Journal of Computational and Graphical Statistics 7: 434–455.
Brooks, S. P. and G. O. Roberts (1998), “Convergence Assessment Techniques for Markov
     Chain Monte Carlo,” Statistics and Computing 8: 319–335.
Brown, P. J., T. Fearn, and M. Vannucci (1999), “The Choice of Variables in Multivariate
     Regression: A Non-conjugate Bayesian Decision Theory Approach,” Biometrika 86:
     635–648.
Campolieti, M. (2000), “Bayesian Estimation and Smoothing of the Baseline Hazard in
     Discrete Time Duration Models,” Review of Economics and Statistics 82: 685–694.
Campolieti, M. (2001), “Bayesian Semiparametric Estimation of Discrete Duration Mod-
     els: An Application of the Dirichlet Process Prior,” Journal of Applied Econometrics
     16: 1–22.
Carlin, B. P. and S. Chib (1995), “Bayesian Model Choice via Markov Chain Monte Carlo
     Methods,” Journal of the Royal Statistical Society Series B 57: 473–484.
Casella, G. and R. L. Berger (2002), Statistical Inference, 2nd ed. Pacific Grove, CA:
     Duxbury.
Celeux, G., M. Hurn, and C. P. Robert (2000), “Computational and Inferential Difficulties
     with Mixture Posterior Distributions,” Journal of the American Statistical Association
     95: 957–970.
Chaloner, K. and R. Brant (1988), “A Bayesian Approach to Outlier Detection and Residual
     Analysis,” Biometrika 75: 651–659.
Chan, K. S. and C. J. Geyer (1994), “Markov Chains for Exploring Posterior Distribu-
     tions—Discussion,” Annals of Statistics 22: 1747–1758.
Chatfield, C. (1995), “Model Uncertainty, Data Mining, and Statistical Inference,” Journal
     of the Royal Statistical Society Series A 158: 419–468.
Chauveau, D. and J. Diebolt (2000), “Estimation of the Asymptotic Variance in the CLT for
     Markov Chains,” Stochastic Models 19: 449–465.
Chen, C.-F. (1985), “On Asymptotic Normality of Limiting Density Functions with Bayesian
     Implications,” Journal of the Royal Statistical Society Series B 47: 540–546.
Chib, S. (1992), “Bayes Inference in the Tobit Censored Regression Model,” Journal of
     Econometrics 51: 79–99.
Chib, S. (1993), “Bayes Regression with Autoregressive Errors: A Gibbs Sampling
     Approach,” Journal of Econometrics 58: 275–294.
Chib, S. (1995), “Marginal Likelihood from the Gibbs Output,” Journal of the American
     Statistical Association 90: 1313–1321.
Chib, S. (1996), “Calculating Posterior Distributions and Modal Estimates in Markov Mix-
     ture Models,” Journal of Econometrics 95: 79–97.
BIBLIOGRAPHY                                                                          285

Chib, S. and E. Greenberg (1994), “Bayes Inference in Regression Models with ARMA(p,q)
     Errors,” Journal of Econometrics 64: 183–206.
Chib, S., and E. Greenberg (1995), “Understanding the Metropolis-Hastings Algorithm,”
     The American Statistician 49: 327–335.
Chib, S. and E. Greenberg (1998), “Analysis of Multivariate Probit Models,” Biometrika
     85: 347–361.
Chib, S. and I. Jeliazkov (2001), “Marginal Likelihood from the Metropolis-Hastings Out-
     put,” Journal of the American Statistical Association 96: 270–281.
Chipman, H. A., E. I. George, and R. E. McCulloch (1998), “Bayesian CART Model Search,”
Journal of the American Statistical Association 93: 935–948.
Cowles, M. K. and B. P. Carlin (1996), “Markov Chain Monte Carlo Convergence Diag-
     nostics: A Comparative Review,” Journal of the American Statistical Association 91:
     883–904.
Cowles, M. K., B. P. Carlin, and J. E. Connett (1996), “Bayesian Tobit Modeling of Longitu-
     dinal Ordinal Clinical Trial Compliance Data with Nonignorable Missingness,” Journal
     of the American Statistical Association 91: 86–98.
Dawid, A. P. (1984), “Statistical Theory: The Prequential Approach,” Journal of the Royal
     Statistical Society Series A 147: 278–292.
DeGroot, M. (1970), Optimal Statistical Decisions. New York: McGraw-Hill.
DeJong, D. N. (1993), “Bayesian Inference in Limited Dependent Variable Models: An
     Application to Measuring Strike Duration,” Journal of Applied Econometrics 8:
     115–128.
Dellaportas, P. and A. F. M. Smith (1993), “Bayesian Inference for Generalized Linear and
     Proportional Hazards Models via Gibbs Sampling,” Applied Statistics 42: 443–459.
DeRobertis, L. and J. A. Hartigan (1981), “Bayesian Inference Using Intervals of Measures,”
     The Annals of Statistics 9: 235–244.
Devroye, L. (1986), Non-uniform Random Variate Generation. New York: Springer-Verlag.
Diebolt, J. and C. P. Robert (1994), “Estimation of Finite Mixture Distributions through
     Bayesian Sampling,” Biometrika 56: 363–375.
Doob, J. L. (1953), Stochastic Processes. New York: Wiley.
Draper, D. (1995), “Assessment and Propagation of Model Uncertainty,” Journal of the
     Royal Statistical Society Series B 57: 45–97.
Fisher, R. A. (1956), Statistical Methods and Scientific Inference. Edinburgh: Oliver and
     Boyd.
Friedman, M. (1953), “The Methodology of Positive Economics,” in M. Friedman, ed.,
     Essays in Positive Economics. Chicago: University of Chicago Press.
Friedman, M. (1957), A Theory of the Consumption Function. Princeton: Princeton Univer-
     sity Press.
Friedman, M. and L. J. Savage (1948), “The Utility Analysis of Choices Involving Risk,”
     Journal of Political Economy 56: 279–304.
Friedman, M. and L. J. Savage (1952), “The Expected-Utility Hypothesis and the Measur-
     ability of Utility,” Journal of Political Economy 60: 463–474.
Fruhwirth-Schnatter, S. (2001), “Markov Chain Monte Carlo Estimation of Classical and
     Dynamic Switching and Mixture Models,” Journal of the American Statistical Associ-
     ation 96: 194–209.
286                                                                             BIBLIOGRAPHY


Fudenberg, D. and J. Tirole (1995), Game Theory. Cambridge, MA: MIT Press.
Gallant, A. R. (1981), “On the Bias in Flexible Functional Forms and an Essentially Unbiased
     Form: The Fourier Flexible Form,” Journal of Econometrics 15: 211–245.
Garthwaite, P. H. and J. M. Dickey (1988), “Quantifying Expert Opinion in Linear-
     Regression Problems,” Journal of the Royal Statistical Society Series B 50: 462–474.
Geisel, M. S. (1975), “Bayesian Comparison of Simple Macroeconomic Models,” in S. E.
     Fienberg and A. Zellner, eds., Studies in Bayesian Econometrics and Statistics: In Honor
     of Leonard J. Savage, pp. 227–256. Amsterdam: North-Holland.
Gelfand, A. E. and D. K. Dey (1994), “Bayesian Model Choice: Asymptotics and Exact
     Calculations,” Journal of the Royal Statistical Society Series B 56: 501–514.
Gelfand, A. E. and A. F. M. Smith (1990), “Sampling Based Approaches to Calculating
     Marginal Densities,” Journal of the American Statistical Association 85: 398–409.
Gelman, A. (1996), “Inference and Monitoring Convergence,” in W. R. Gilks, S. Richardson,
     and D. J. Spiegelhalter, eds., Markov Chain Monte Carlo in Practice. Chapman and
     Hall, London.
Gelman, A., J. B. Carlin, H. S. Stern, and D. B. Rubin (1995), Bayesian Data Analysis.
     London: Chapman and Hall.
Gelman, A., X. L. Meng, and H. S. Stern (1996), “Posterior Predictive Assessment of Model
     Fitness via Realized Discrepancies,” Statistica Sinica 6: 733–760.
Gelman, A. and D. B. Rubin (1992), “Inference from Iterative Simulation Using Multiple
     Sequences,” Statistical Science 7: 457–472.
Geman, S. and D. Geman (1984), “Stochastic Relaxation, Gibbs Distributions and the
     Bayesian Restoration of Images,” IEEE Transactions on Pattern Analysis and Machine
     Intelligence 6: 721–741.
George, E. I. and R. E. McCulloch (1993), “Variable Selection Via Gibbs Sampling,” Journal
     of the American Statistical Association 88: 881–889.
George, E. I. and R. E. McCulloch (1997), “Approaches for Bayesian Variable Selection,”
     Statistica Sinica 7: 339–373.
Geweke, J. (1986), “Exact Inference in the Inequality Constrained Normal Linear Regression
     Model,” Journal of Applied Econometrics 1: 127–142.
Geweke, J. (1988), “Antithetic Acceleration of Monte Carlo Integration in Bayesian Infer-
     ence,” Journal of Econometrics 38: 73–90.
Geweke, J. (1989a), “Bayesian Inference in Econometric Models Using Monte Carlo Inte-
     gration,” Econometrica 57: 1317–1340.
Geweke, J. (1989b), “Exact Predictive Densities in Linear Models with ARCH Distur-
     bances,” Journal of Econometrics 40: 63–86.
Geweke, J. (1991), “Efficient Simulation from the Multivariate Normal and Student-t Distri-
     butions Subject to Linear Constraints,” in E. M. Keramidas, ed., Computing Science and
     Statistics: Proceedings of the Twenty-Third Symposium on the Interface, pp. 571–578.
     Fairfax, VA: Interface Foundation of North America, Inc.
Geweke, J. (1992), “Evaluating the Accuracy of Sampling-Based Approaches to the Calcu-
     lation of Posterior Moments,” in J. M. Bernardo et al., eds., Bayesian Statistics, Vol. 4.
     Oxford, UK: Clarendon Press.
Geweke, J. (1996a), “Variable Selection and Model Comparison in Regression,” in J. O.
     Berger, J. M. Bernardo, A. P. Dawid, and A. F. M. Smith, eds., Bayesian Statistics,
     Vol. 5, pp. 609–620. Oxford, UK: Oxford University Press.
BIBLIOGRAPHY                                                                           287

Geweke, J. (1996b), “Bayesian Inference for Linear Models Subject to Linear Inequality
   Constraints,” in W. O. Johnson, J. C. Lee, and A. Zellner, eds., Modeling and Predic-
   tion: Honoring Seymour Geisser, pp. 248–263. New York: Springer-Verlag.
Geweke, J. (1999), “Using Simulation Methods for Bayesian Econometric Models: Infer-
   ence, Development and Communication” (with discussion and rejoinder), Econometric
   Reviews 18: 1–126.
Geweke, J. (2004), “Getting It Right: Joint Distribution Tests of Posterior Simulators,”
   Journal of the American Statistical Association 99: 799–804.
Geweke, J. and M. Keane (2001), “Computationally Intensive Methods for Integration in
   Econometrics,” in J. Heckman and E. E. Leamer, eds., Handbook of Econometrics,
   Vol. 5, pp. 3463–3568. Amsterdam: North-Holland.
Geweke, J., M. Keane, and D. Runkle (1994), “Alternative Computational Approaches to
   Inference in the Multinomial Probit Model,” Review of Economics and Statistics 76:
   609–632.
Geweke, J., M. Keane, and D. Runkle (1997), “Statistical Inference in the Multinomial
   Multiperiod Probit Model,” Journal of Econometrics 80: 125–166.
Geweke, J., R. Marshall, and G. Zarkin (1986), “Mobility Indices in Continuous Time
   Markov Chains,” Econometrica 54: 1407–1424.
Geweke, J. and L. Petrella (1998), “Prior Density-Ratio Class Robustness in Econometrics,”
   Journal of Business and Economic Statistics 16: 469–478.
Geweke, J. and C. Whiteman (in press), “Bayesian Forecasting,” in G. Elliott, C. Granger,
   and A. Timmermann, eds., Handbook of Economic Forecasting. Amsterdam: North-
   Holland.
Geyer, C. J. (1992), “Practical Markov Chain Monte Carlo,” Statistical Science 7: 473–481.
Geyer, C. J. (1996), “Estimation and Optimization of Functions,” in W. R. Gilks, S. Richard-
    son, and D. J. Spiegelhalter, eds., Markov Chain Monte Carlo in Practice. London:
    Chapman and Hall.
Goldberger, A. S. (1974), “Unobservable Variables in Econometrics,” in P. Zarembka, ed.,
    Frontiers in Econometrics. New York: Academic Press.
Good, I. J. (1956), “The Surprise Index for the Multivariate Normal Distribution,” Annals
    of Mathematical Statistics 27: 1130–1135.
Granger, C. W. J. and Z. Ding (1995a), “Some Properties of Absolute Returns and Alterna-
    tive Measure of Risk,”Annales d’Economie et de Statistique 40: 67–91.
Granger, C. W. J. and Z. Ding (1995b), “Stylized Facts on the Temporal and Distribu-
    tional Properties of Daily Data from Speculative Markets,” Department of Economics,
    University of California—San Diego, unpublished paper.
Green, P. J. (1995), “Reversible Jump Markov Chain Monte Carlo Computation and Bayesian
    Model Determination,” Biometrika 82: 711–732.
Greene, W. H. (2003), Econometric Analysis, 5th ed. Upper Saddle River, NJ: Prentice-Hall.
Grilliches, Z. (1977), “Errors in Variables and Other Unobservables,” in D. Aigner and
     A. S. Goldberger, eds., Latent Variables in Socio-economic Models. Amsterdam: North-
     Holland.
Hamilton, J. D. (1994), Time Series Analysis. Princeton: Princeton University Press.
Hammersly, J. M. and D. C. Handscomb (1964), Monte Carlo Methods. London: Methuen
   and Company.
288                                                                          BIBLIOGRAPHY


Hammersly, J. M. and K. H. Morton (1956), “A New Monte Carlo Technique: Antithetic
     Variates,” Proceedings of the Cambridge Philosophical Society 52: 449–474.
Han, C. and B. P. Carlin (2001), “Markov Chain Monte Carlo Methods for Computing Bayes
     Factors: A Comparative Review,” Journal of the American Statistical Association 96:
     1122–1132.
Hastings, W. K. (1970), “Monte Carlo Sampling Methods Using Markov Chains and Their
     Applications,” Biometrika 57: 97–109.
Hildreth, C. (1954), “Point Estimates of Concave Functions,” Journal of the American
     Statistical Association 49: 598–619.
Hildreth, C. (1963), “Bayesian Statisticians and Remote Clients,” Econometrica 31:
     422–438.
Hoeting, J. A., D. Madigan, A. E. Raftery, and C. T. Volinsky (1999), “Bayesian Model
     Averaging: A Tutorial,” Statistical Science 14: 382–401.
Jeffreys, H. (1939), Theory of Probability. Oxford, UK: Clarendon Press.
Jeffreys, H. (1961), Theory of Probability, 3rd ed. Oxford, UK: Clarendon Press.
Johnson, N. L., S. Kotz, and N. Balakrishnan (1994), Continuous Univariate Distributions,
     Vol. 1, 2nd ed. New York: Wiley.
Johnson, N. L. and S. Kotz (1972), Distributions in Statistics: Continuous Multivariate Dis-
     tributions. New York: Wiley.
Kadane, J. B. (1994), “An Application of Robust Bayesian Analysis to a Medical Experi-
     ment,” Journal of Statistical Planning and Inference 40: 221–228.
Kadane, J. B. and L. J. Wolfson (1998), “Experiences in Elicitation,” Journal of the Royal
     Statistical Society Series D 47: 3–19.
Kass, R. E. and A. E. Raftery (1995), “Bayes Factors,” Journal of the American Statistical
     Association 90: 773–795.
Kim, J., G. M. Allenby, and P. E. Rossi (2003), “Modeling Consumer Demand for Variety,”
     Marketing Science 21: 229–250.
Kloek, T. and H. K. van Dijk (1978), “Bayesian Estimates of Equation System Parameters:
     An Application of Integration by Monte Carlo,” Econometrica 46: 1–20.
Koop, G. (2003), Bayesian Econometrics. West Sussex, UK: Wiley.
Kotz, S., N. Balakrishnan, and N. L. Johnson (2000), Continuous Multivariate Distributions,
     Vol. 1. New York: Wiley.
Lancaster, T. (2004), An Introduction to Modern Bayesian Econometrics. Malden, MA:
     Blackwell.
Lavine, M. (1991a), “Sensitivity in Bayesian Statistics: The Prior and the Likelihood,”
     Journal of the American Statistical Association 86: 396–399.
Lavine, M. (1991b), “An Approach to Robust Bayesian Analysis for Multidimensional
     Parameter Spaces,” Journal of the American Statistical Association 86: 400–403.
Leamer, E. E. (1973), “Multicollinearity: A Bayesian Interpretation,” Review of Economics
     and Statistics 55: 371–380.
Leamer, E. E. (1978), Specification Searches. New York: Wiley.
Leamer, E. E. (1982), “Sets of Posterior Means with Bounded Variance Priors,” Economet-
     rica 50: 725–736.
Lindgren, G. (1978), “Markov Regime Models for Mixed Distributions and Switching
     Regressions,” Scandinavian Journal of Statistics 5: 81–91.
BIBLIOGRAPHY                                                                             289

Lindley, D. V. (1957), “A Statistical Paradox,” Biometrika 44: 187–192.
Lindley, D. and A. F. M. Smith (1972), “Bayes Estimates for the Linear Model,” Journal
      of the Royal Statistical Society Series B 34: 1–41.
Little, R. J. A. and D. B. Rubin (2002), Statistical Analysis with Missing Data, 2nd ed. New
      York: Wiley.
Liu, J. S., W. H. Wong, and A. Kong (1994), “Covariance Structure of the Gibbs Sam-
      pler with Applications to the Comparison of Estimators and Augmentation Schemes,”
      Journal of Statistical Planning and Inference 81: 27–40.
McCulloch, R. E. and P. E. Rossi (1994), “An Exact Likelihood Analysis of the Multinomial
      Probit Model,” Journal of Econometrics 64: 207–240.
McCulloch, R. E., N. G. Polson, and P. E. Rossi (2000), “A Bayesian Analysis of the
      Multinomial Probit Model with Fully Identified Parameters,” Journal of Econometrics
      99: 173–193.
McCulloch, R. and R. Tsay (1994), “Statistical Analysis of Macroeconomic Time Series via
      Markov Switching Models,” Journal of Time Series Analysis 15: 523–539.
McKeague, I. W. and W. Wefelmeyer (2000), “Markov Chain Monte Carlo and Rao-
      Blackwellization,” Journal of Statistical Planning and Inference 85: 171–182.
Meng, X. L. (1994), “Posterior Predictive p-values,” Annals of Statistics 22: 1142–1160.
Mengersen, K. L. and R. L. Tweedie (1996), “Rates of Convergence of the Hastings and
      Metropolis Algorithms,” Annals of Statistics 24: 101–121.
Metropolis, N., A. W. Rosenbluth, M. N. Rosenbluth, A. H. Teller, and E. Teller (1953),
      “Equation of State Calculations by Fast Computing Machines,” The Journal of Chemical
      Physics 21: 1087–1092.
Mincer, J. (1958), “Investment in Human Capital and Personal Income Distribution,” Journal
      of Political Economy 66: 281–302.
Mittelhammer, R. C., G. G. Judge, and D. J. Miller (2000), Econometric Foundations. Cam-
      bridge, UK: Cambridge University Press.
Mykland, P., L. Tierney, and B. Yu (1995), “Regeneration in Markov-chain Samplers,”
      Journal of the American Statistical Association 90: 233–241.
Newey, W. and K. West (1987), “A Simple Positive Semi-definite, Heteroskedasticity and
      Autocorrelation Consistent Covariance Matrix,” Econometrica 55: 703–708.
Percy, D. F. (1992), “Prediction for Seemingly Unrelated Regressions,” Journal of the Royal
      Statistical Society, Series B 54: 243–252.
Peskun, P. H. (1973), “Optimum Monte-Carlo Sampling using Markov Chains,” Biometrika
      60: 607–612.
Poirier, D. J. (1988), “Frequentist and Subjectivist Perspectives on the Problems of Model
      Building in Economics,” Journal of Economic Perspectives 2(1): 121–144.
Poirier, D. J. (1995), Intermediate Statistics and Econometrics: A Comparative Approach.
      Cambridge, MA: MIT Press.
Poirier, D. J. (1998), “Revising Beliefs in Nonidentified Models,” Econometric Theory 14:
      483–509.
Pratt, J. W., H. Raiffa, and R. Schlaifer (1995), Introduction to Statistical Decision Theory.
      Cambridge, MA: MIT Press.
Press, W. H., S. A. Teukolsky, W. T. Vetterling, and B. P. Flannery (1992), Numerical
      Recipes: The Art of Scientific Computing, 2nd ed. Cambridge, UK: Cambridge Univer-
      sity Press.
290                                                                          BIBLIOGRAPHY


Raftery, A. E. (1996), “Hypothesis Testing and Model Selection via Posterior Simulation,”
     in W. R. Gilks et al., eds., Markov Chain Monte Carlo in Practice. London: Chapman
     and Hall.
Raiffa, H. and R. Schlaiffer (1961), Applied Statistical Decision Theory. Cambridge, MA:
     Harvard Business School.
Rao, C. R. (1965), Linear Statistical Inference and Its Applications. New York: Wiley.
Richardson, S. and P. J. Green (1997), “On Bayesian Analysis of Mixtures with an Unknown
     Number of Components,” Journal of the Royal Statistical Society Series B 59: 731–758.
Ripley, R. D. (1987), Stochastic Simulation. New York: Wiley.
Robert, C. P. (1995), “Convergence Control Methods for Markov Chain Monte Carlo Algo-
     rithms,” Statistical Science 10: 231–253.
Roberts, H. V. (1965), “Probabilistic Prediction,” Journal of the American Statistical Asso-
     ciation 60: 50–62.
Roberts, G. O. and A. F. M. Smith (1994), “Simple Conditions for the Convergence of the
     Gibbs Sampler and Metropolis-Hastings Algorithms,” Stochastic Processes and Their
     Applications 49: 207–216.
Roeder, K. and L. Wasserman (1997), “Practical Bayesian Density Estimation Using Mix-
     tures of Normals,” Journal of the American Statistical Association 92: 894–902.
Rossi, P. E. and G. M. Allenby (2003), “Bayesian Statistics and Marketing,” Marketing
     Science 22: 304–328.
Rossi, P. E., Z. Gilula, and G. M. Allenby (2001), “Overcoming Scale Usage Heterogeneity:
     A Bayesian Hierarchical Approach,” Journal of the American Statistical Association 96:
     20–31.
Rossi, P. E., R. E. McCulloch, and G. M. Allenby (1996), “The Value of Purchase History
     Data in Target Marketing,” Marketing Science 15: 321–340.
Royden, H. L. (1968), Real Analysis, 2nd ed. New York: Macmillan.
Rubin, D. B. (1984), “Bayesianly Justifiable and Relevant Frequency Calculations for the
     Applied Statistician,” Annals of Statistics 12: 1151–1172.
Ryden, T., T. Terasvirta, and S. Asbrink (1998), “Stylized Facts of Daily Return Series and
     the Hidden Markov Model,” Journal of Applied Econometrics 13: 217–244.
Sareen, S. (1999), “Posterior Odds Comparison of a Symmetric Low-Price, Sealed-Bid Auc-
     tion within the Common-Value and the Independent-Private-Values Pardigms,” Journal
     of Applied Econometrics 14: 651–676.
Sareen, S. (2003), “Reference Bayesian Inference in Non-regular Models,” Journal of Econo-
     metrics 113: 265–288.
Savage, L. J. (1951), “The Theory of Statistical Decision,” Journal of the American Statis-
     tical Association 46: 55–67.
Schott, J. R. (1997), Matrix Analysis for Statistics. New York: Wiley.
Shao, J. (1989), “Monte Carlo Approximations in Bayesian Decision Theory,” Journal of
     the American Statistical Association 84: 727–732.
Shiller, R. J. (1984), “Smoothness Priors and Nonlinear Regression,” Journal of the Ameri-
     can Statistical Association 79: 609–615.
Simon, H. A. (1956), “Dynamic Programming under Uncertainty with a Quadratic Criterion
     Function,” Econometrica 24: 74–81.
Sims, C. A. and H. Uhlig (1991), “Understanding Unit Rooters: A Helicopter Tour,” Econo-
     metrica 59: 1591–1599.
BIBLIOGRAPHY                                                                           291

Smith, A. F. M. (1973), “A General Bayesian Linear Model,” Journal of the Royal Statistical
     Society Series B 35: 67–75.
Smith, M. and R. Kohn (1996), “Nonparametric Regression Using Bayesian Variable Selec-
     tion,” Journal of Econometrics 75: 317–343.
Sweeting, T. J. and A. O. Adekola (1987), “Asymptotic Posterior Normality for Stochastic
     Processes Revisited,” Journal of the Royal Statistical Soceity Series B 49: 215–222.
Tanner, M. A. and W. H. Wong (1987), “The Calculation of Posterior Distributions by Data
     Augmentation,” Journal of the American Statistical Association 82: 528–550.
Theil, H. and A. S. Goldberger (1961), “On Pure and Mixed Statistical Estimation in Eco-
     nomics,” International Economic Review 2: 65–78.
Tierney, L. (1991), “Exploring Posterior Distributions Using Markov Chains,” in E. M.
     Keramidas, ed., Computing Science and Statistics: Proceedings of the 23rd Symposium
     on the Interface, pp. 563–570. Fairfax, VA: Interface Foundation of North America,
     Inc.
Tierney, L. (1994), “Markov Chains for Exploring Posterior Distributions” (with discussion
     and rejoinder), Annals of Statistics 22: 1701–1762.
Tierney, L. and J. B. Kadane (1986), “Accurate Approximations for Posterior Moments and
     Marginal Densities,” Journal of the American Statistical Association 81: 82–86.
Tierney, L. and J. B. Kadane (1989), “Fully Exponential Laplace Approximations to Expec-
     tations and Variances of Nonpositive Functions,” Journal of the American Statistical
     Association 84: 710–716.
Varian, H. (1992), Microeconomic Analysis, 3rd ed. New York: Norton.
von Neumann, J. and O. Morgnestern (1944), Theory of Games and Economic Behavior.
     Princeton: Princeton University Press.
Wasserman, L. (1992), “Recent Methodological Advances in Robust Bayesian Inference,”
     in J. M. Bernardo et al., eds., Bayesian Statistics, Vol. 4, pp. 483–502. Oxford, UK:
     Oxford University Press.
Wasserman, L. and J. B. Kadane (1992), “Computing Bounds on Expectations,” Journal of
     the American Statistical Association 87: 516–522.
Wasserman, L., M. Lavine, and R. L. Wolpert (1993), “Linearization of Bayesian Robustness
     Problems,” Journal of Statistical Planning and Inference 37: 307–316.
West, M. and J. Harrison, (1989), Bayesian Forecasting and Dynamic Models. New York:
     Springer-Verlag.
Zellner, A. (1962), “An Efficient Method of Estimating Seemingly Unrelated Regressions
     and Tests for Aggregation Bias,” Journal of the American Statistical Association 57:
     348–368.
Zellner, A. (1971), An Introduction to Bayesian Inference in Econometrics. New York: Wiley.
Zellner, A. (1986a), “Bayesian Estimation and Prediction Using Asymmetric Loss Func-
     tions,” Journal of the American Statistical Association 81: 446–451.
Zellner, A. (1986b), “On Assessing Prior Distributions and Bayesian Regression Analysis
     with g-Prior Distributions,” in P. K. Goel and A. Zellner, eds., Bayesian Inference and
     Decision Techniques: Essays in Honour of Bruno de Finetti. Amsterdam: North-Holland.
Zellner, A. and C. K. Min (1995), “Gibbs Sampler Convergence Criteria,” Journal of the
American Statistical Association 90: 921–927.
       Author Index


Adekola, A.O., 95                                   Chipman, H.A., 172
Ainslie, A., 195                                    Cowles, M.K., 146, 199
Albano, G.L., 168
Albert, J., 201, 233                                Dawid, A.P., 256
Allenby, G.M., 195                                  DeGroot, M., 21
Amemiya, T., 94, 95, 109, 136, 148                  DeJong, D.N., 46
Anderson, T.W., 165, 171                            Dellaportas, P., 46
                                                    DeRobertis, L., 88
Bajari, P., 65, 168                                 Devroye, L., 204
Barnard, G.A., 97                                   Dey, D.K., 257, 259
Barnett, G., 224                                    Dickey, J.M., 266
Barnett, W.A., 186                                  Diebolt, J., 148, 216
Bartlett, M.S., 83                                  Ding, Z., 266, 267
Bayarri, M.J., 65, 262, 266                         Doob, J.L., 176
Berger, J. O., 21, 46, 47, 87, 97, 101, 102, 262,   Draper, D., 61
     266
Berger, R.L., 107, 116, 128, 203                    Fisher, R.A., 97
Bernardo, J.M., 21                                  Friedman, M., 8, 11, 46, 67
Birnbaum, A., 97                                    Fruhwirth–Schnatter, S., 210
Box, G.E.P., 262                                    Fudenberg, D., 167
Brant, R., 218
Brooks, S.P., 146                                   Gallant, A.R., 186
Brown, P.J., 172                                    Garthwaite, P.H., 266
                                                    Geisel, M.S., 66
Campolieti, M., 46                                  Gelfand, A.E., 14, 120, 257, 259
Carlin, B.P., 146, 255                              Gelman, A., 35, 146, 266
Casella, G., 107, 116, 128, 203                     Geman, D., 120
Celeux, G., 210                                     Geman, S., 120
Chaloner, K., 218                                   George, E.I., 172
Chan, K.S., 148                                     Geweke, J., 14, 76, 87, 88, 113, 114, 119, 131,
Chatfield, C., 61                                        146, 172, 202, 209, 216, 221, 229, 253, 259
Chauveau, D., 148                                   Geyer, C.J., 119, 146, 148
Chen, C.-F., 96                                     Goldberger, A.S., 39, 73
Chib, S., 124, 199, 201, 202, 216, 224, 233, 234,   Good, I.J., 268
     255, 257                                       Granger, C.W.J., 266, 267

Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.

                                                                                               293
294                                                                         AUTHOR INDEX


Green, P.J., 213, 255                     Petrella, L., 87, 88
Greenberg, E., 124, 202, 216, 224         Poirier, D.J., 21, 84, 97, 140, 181
Greene, W.H., 116, 164, 171               Pratt, J.W., 46
Grilliches, Z., 73                        Press, W.H., 180

Hamilton, J.D., 176                       Raftery, A.E., 61, 257
Hammersly, J.M., 14, 120, 129             Raiffa, H., 23
Han, C., 255                              Rao, C.R., 68, 80, 107, 150
Handscomb, D.C., 14, 120                  Richardson, S., 213
Harrison, J., 209                         Ripley, R.D., 120
Hartigan, J.A., 88                        Robert, C.P., 148, 216
Hastings, W.K., 120, 123                  Roberts, H.V., 61
Hildreth, C., 2, 127                      Roberts, G.O., 133, 137, 138, 139, 146
Hoeting, J.A., 61                         Roeder, K., 209
                                          Rossi, P.E., 50, 76, 195, 201, 216
Jeffreys, H., 61, 67, 84                  Royden, H.L., 80
Jeliazkov, I., 257                        Rubin, D.B., 35, 146, 268
Johnson, N.L., 26, 42, 90, 165, 171       Ryden, T., 6, 239, 243, 266, 267
Jonas, A., 186
Jouneau–Sion, F., 168                     Sareen, S., 168
                                          Savage, L.J., 11, 46
Kadane, J.B., 87, 88, 255, 266            Schlaiffer, R., 23
Kass, R.E., 61                            Schott, J.R., 227
Keane, M., 209, 216                       Shao, J., 119
Kim, J., 195, 197                         Shiller, R.J., 176
Kloek, T., 114                            Simon, H.A., 48
Kohn, R., 218                             Sims, C.A., 95
Koop, G., 21                              Smith, A.F.M., 14, 21, 46, 73, 120, 133, 137,
Kotz, S., 42, 165, 171                         138, 139
                                          Smith, M., 218
Lancaster, T., 21                         Sweeting, T.J., 95
Lavine, M., 87, 88
Leamer, E.E., 28, 61                      Tanner, M.A., 120
Lee, L.X., 65, 168                        Theil, H., 39
Lindgren, G., 233                         Tierney, L., 123, 135, 139, 143, 147, 148, 255
Lindley, D.V., 73, 83                     Tirole, J., 167
Little, R.J.A., 35                        Tsay, R., 289
Liu, J.S., 129                            Tweedie, R.L., 140

McCulloch, R.E., 76, 172, 201, 202, 233   Uhlig, H., 95
McKeague, I.W., 129
Meng, X.L., 266                           van Dijk, H.K., 114
Mengersen, K.L., 140                      Varian, H., 163
Metropolis, N., 120, 123, 125             von Neumann, J., 17
Min, C.K., 258
Mincer, J., 212                           Wasserman, L., 87, 88, 209
Mittelhammer, R.C., 92                    Wefelmeyer, W., 129
Morgnestern, O., 17                       West, K., 149
Morton, K.H., 129                         West, M., 209, 275
Mykland, P., 148                          Whiteman, C., 221
                                          Wolfson, L.J., 266
Newey, W., 149, 275                       Wolpert, R.L., 21, 97, 101, 102
                                          Wong, W.H., 120
Percy, D.F., 166
Peskun, P.H., 120                         Zellner, A., 21, 42, 54, 61, 156, 162, 258
      Subject Index


acceptance sampling, 111–113                       missing data in, 226
  examples, 112–113, 231                           prior distribution, 224
  importance sampling hybrid, 117
  marginal likelihood and, 256–257               BACC software, 154–162
  Metropolis independence chain and, 123–124       autoregressive model, 225
  tuning, 119                                      censored normal linear model, 197
action, 17, 46–47                                  censoring, 216
  example, 158–160                                 density-ratio class, 160, 280
  mean, 48                                         independent finite state model, 204
  mode, 50                                         marginal likelihood approximation, 260
  model choice, 65                                 Markov finite state model, first order, 231
  quantile, 49                                     nonlinear regression, 181
  simulation, 18                                   normal linear regression, 155
     direct sampling, 108–109                      normal mixture linear model, 212
     examples, 157, 161, 213                       probit linear model, 201
                                                   reweighting, 275
     importance sampling, 117–118
                                                   seemingly unrelated regressions, 166
     Markov chain Monte Carlo, 136
                                                   Student-t linear model, 208
ancillary statistic, 33–35
                                                 Bayes action, see action
  decisionmaking and, 141–142
                                                 Baysian analysis, computation and
  examples, 34–35, 37, 126–127
                                                      communication, see BACC software
  missing data and, 34–35
                                                 Bayesian client, see client
antithetic acceleration, 131
                                                 Bayesian communication, 271–277
antithetic sampling, see variance
                                                 Bayesian model averaging, see model averaging
     reduction
                                                 Bayesian updating, see updating
asymptotic concentration, 91–95                  Behrens-Fisher problem, 125–126
  examples, 94–96                                blocking, 120–121
asymptotic posterior distribution, 95–96           examples, 121, 127, 137, 138, 171, 211–212
  examples, 96–97                                burn-in, 119, 145–147
auction, 75, 174                                   examples, 146, 156, 181
autoregressive model, 222–226
  BACC, in, 225                                  censored normal linear model, 196–200
  conditional posteriors, 224–225                  BACC, in, 197
  examples, 126–127, 132–133, 249–250              conditionally conjugate prior, 197
  Gibbs sampler, 126–127, 131, 224–225             examples, 196–197, 199
  marginal likelihood, 231                         extensions, 215–216
Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.

                                                                                          295
296                                                                                   SUBJECT INDEX


censored normal linear model (Continued)               importance sampling, 254–255
   Gibbs sampler, 198                                  observables density, for, 249–250
censoring, categorical, 199                            prior density, for, 250–251
central limit theorem                               Dirac delta function, 123, 172
   asymptotic posterior analysis, 95–96             direct sampling, 106–110
   direct sampling                                     antithetic sampling and, 130–132
      actions, 108–109                                 central limit theorem
      moments, 106–107                                    actions, 108–109
      quantiles, 106–107                                  moments, 106–107
      importance sampling                                 quantiles, 106–107
      actions, 117–118                                 concentrated expectations and, 128–129
      moments, 114                                     convergence conditions
   Markov chain Monte Carlo                               actions, 108–109
      actions, 148                                        moments, 106–107
      moments, 147–148                                    quantiles, 106–107
      moments, weighted, 273–274                       density ratio test, 247–248
certainty equivalence principle, 48                    examples, 107–108, 110
client, 2                                              inverse c.d.f. method, 109
   examples, 4, 6, 87, 245                          distribution
complete model, 10, 25, 153                            beta, 203
   ancillarity and, 34–35                              chi square, 26
concentrated expectations, see variance reduction      Dirichlet, 203
confidence region (interval), 57                       discrete normal mixture, 208
consistent estimation, see asymptotic                  exponential, 36, 44, 55, 70, 86, 96
      concentration                                    exponential family, 42–43
convergence conditions                                 gamma, 26, 167
   direct sampling                                     half-normal, 36, 43, 70
      actions, 108–109                                 log-normal, 55
      moments, 106–107                                 normal
      quantiles, 106–107                                  bivariate, 110, 140, 146–147
   Gibbs sampler, 137–139                                 conditional multivariate, 171
   importance sampling                                    density kernel, 29–30
      actions, 117–118                                    multivariate, 26
      moments, 114                                        truncated univariate, 37, 61, 113, 119
   Markov chain Monte Carlo                               univariate, 89–90
      actions, 148                                     normal-gamma, 41
      moments, 135                                     Poisson, 43, 86
      vector of interest, 135–136                      Student-t
credible sets, 56–61                                      multivariate, 42
   confidence region and, 57                              univariate, 90–91
   examples, 60–61, 191–192                            uniform, 36, 43, 57, 60, 86
   highest probability density, 57–59                  Wishart, 165, 167
      examples, 59–60
      optimality, 58                                earnings conditional distribution, 212–215
   improper prior and, 80                              extensions, 193, 218–219
      invariance, 57, 60–61                            normal distribution inadequate for, 213
      posterior predictive analysis and, 267–268       posterior predictive analysis, 268–269
                                                       prior predictive analysis, 263–266
data, 8, 22                                         earnings data, 212
data-generating process, 91                         employment spells, 45–46, 226
decision theory, 17–18, 46–55                       estimation, 50–53
  Bayesian, 46–47                                         examples, 52–53, 55, 60, 61, 71
  non-Bayesian, 51                                  evidence, 98–99
density ratio tests, 247–251                        expected loss, 17–18
SUBJECT INDEX                                                                                  297

expected utility, 17                                  Metropolis independence chain and, 123–124
experiment, 98                                        prior reweighting of, 117
                                                   improper prior denisty, see prior denisty,
filtered probabilities, 236                              improper
forecasting, 132–133, 221                          independent finite state model, 202–205
                                                      BACC, in, 204
Gibbs sampler, 120–122, 137–139                       component of other models, 208, 226
  autogregessive model, in, 126–127, 132–133,            conjugate prior distribution, 203–204
     224–225                                             empty cells in, 205
  Behrens-fisher problem, in, 125–126                    marginal likelihood, 204
  bivariate normal distribution, in 140                  posterior distribution, 204
  censored normal linear model, in, 198            interval data, 45, 199, 215–216
  convergence conditions, 137–139                  investigator, 2–3
  covariate selection and, 173–174                    examples, 87, 245–246
  history, 120                                        modeling and, 15
  improper posterior and, 140–141                     parameters and, 51–52
  inequaltiy constraints and, 127, 140, 171–172       tools for, 245–246
  marginal likelihood approximation and,           iterated expectations, law of, 128, 129, 132–133
     257–258
  Markov normal mixture linear model, in, 234      joint distribution tests, 251–254
  missing data and, 167                               examples, 253–254
  nonlinear regression model, in, 126–127, 131
  normal mixture linear model, in, 211–212         kernel, 24
  normal linear regression model, in, 121, 156       invariant, 134
  panel data and, 168                                transition, 134
  probilt linear model, in, 201                         ergodic, 135
  random coefficients and, 168                          Harris recurrent, 135
  restricted linear regression model, in, 138,          p-irreducible, 134
     171, 173–174                                    aperiodic, 134
  seemingly unrelated regressions model, in, 166     uniformly ergodic, 147
  Student-t linear model, in, 206–208              Kronecker delta function, 203
                                                   Kullback-Leibler information, 92
hierarchical prior, see prior density
highest posterior density region, see credible     latent variables, 22, 73–76
     sets, highest probability density                examples, 73, 196–197, 200–201, 206, 208,
hyperparameters, 75                                      233
   example, 76–77                                  likelihood function, 22
                                                   likelihood principle, 97–103
identification, 140–141, 181, 208, 210             Lindley’s paradox, 83, 86–87
importance sampling, 114–119                       linear model with serial correlation, see
   acceptance sampling and, 116–117                      autoregressive model
   acceptance sampling hybrid, 117                 loss function, 17–18, 46–47, 50–52
   antithetic sampling and, 133                       examples, 159
   central limit theorem                              linear-exponential, 54
      actions, 117–118                                linear-linear, 48–49, 54
      moments, 114                                    model choice and, 65, 71
   convergence conditions                          quadratic, 47–48, 53
      actions, 117–118                                smooth, 108–109, 117–118, 148
      moments, 114                                    zero-one, 50, 55
   density ratio test, 254–255
   example, 231                                    marginal likelihood, 16, 23
   history, 114                                      approximation by simulation, 255–259
   marginal likelihood approximation and,              BACC, in, 260
      256–257                                          density ratio method, 259–260
298                                                                               SUBJECT INDEX


marginal likelihood (Continued)                     convergence conditions, 139–140
     examples, 157, 182–183, 187, 213               examples, 125, 231
     Gibbs sampler, using, 257–258                  history, 120
     importance sampling, using, 256–257          missing data, 34–35, 167, 225–226
  decomposition, 67                               mixed experiment, 99
  examples, 62–64, 70, 161, 175, 204, 226, 233    model averaging, 15–16, 62
  improper prior and, 83–84                         examples, 71
  model comparison and, 62–65                     model choice, 65, 71
  numerical approximation of, 157                 Monte Hall problem, see televised game show
  predictive liklihood and, 67
Markov chain Monte Carlo, 119–127, 133–152        nonlinear regression, 175–193
  central limit theorem                             basis functions, with, 185–190
     actions, 148                                      examples, 186–190
     moments, 147–148                                  prior specification, 187
     moments, weighted, 273–274                     smoothness priors, with, 176–184
  convergence assessment, 145–152                      examples, 180–184
  convergence conditions                               prior specification, 176–180
     actions, 148                                 normal linear regression model, 25–29
     moments, 135                                   ancillary statistic, 34
     vector of interest, 135–136                    asymptotic concentration, 94–95
  history, 120, 133                                 BACC, in, 154–161
  hypbrid methods, 142–147                          Bayes factor, 64–65
     Metropolis within Gibbs, 143–145               Bayesian communication, 275–277
     transition mixtures, 142–143, 147              covariate selection, 172–174
  numerical accuracy, 145–152                       generalized, 30
  numerical standard error, 149, 274–275            geometric interpretation, 28–29
  reweighting of, 272–275                           Gibbs sampler, 121
  separated partial means test for, 149–150            convergence, 137, 156
Markov finite state model, first order, 220–233        inequality constraints and, 170–172
  BACC, in, 231                                     hierarchical prior distribution, 77–78
  conjugate prior distribution, 230                 highest posterior density region, 59–60
  marginal likelihood, 233                          improper prior distribution, 81–84
  marginal likelihood approximation, 261            inequality constraints, 138, 140, 170–174
  nonstationary model, 229–230                      marginal likelihood, 62–64, 175
  posterior distributions, 230, 231                 marginal likelihood approximation, 157
  posterior simulator, 231                          nonlienar in coefficients, 126–127, 131
  properties, 226–229                               nonlinear in covariates, see nonlinear
  stationary model, 230–231                            regression
Markov normal mixture linear model, 233–243         nuisance parameters, 36
  applciations, 13, 238–241, 266–267, 270           omitted covariates, 96–97
  conditional posteriors, 234                       outliers, 218
  label switching, 242                              poserior predictive analysis, 271
  posterior predictive analysis, 270                prediction problem, 82–83, 107–108,
  posterior simulator, 234                             161–162
  prior predictive analysis, 266–267                predictive density, 67–70
merger, 1–2, 55–56                                  prior distribution, 26
Metropolis independence chain, 123–124                 conditionally conjugate, 40
  convergence, 139, 147                                conjugate, 39, 40–42, 107–108
  marginal likelihood and, 257                      prior preditive analysis, 271
Metropolis within Gibbs, 143–145                    retricted, 112–113, 125, 127, 169–175
  convergence, 144–145                              short rank, 30
  examples, 207–208, 224–225                        sufficient statistic, 33
Metropolis-Hastings algoirthm, 122–124,           normal mixture linear model, 208–215
     139–140                                        BACC, in, 155
SUBJECT INDEX                                                                             299

normal mixture linear model (Continued)    posterior odds ratio, 16, 64
  censored, 215–216                           Bayes critical value and, 65
  conditional posteriors, 211–212          posterior predictive analysis, see specification
  conditionally conjugate prior, 209–210         analysis
  examples, 212–215,                       posterior simulation, 13–15, 105–106
  Gibbs sampler, 209–210                      acceptance sampling, 111–113
  labeling, 210                               direct sampling, 106–110
  marginal likelihood approximation, 213      efficiency, 141–142
  outliers and, 218                           Gibbs sampler, 120–122, 137–139
  posterior predictive analysis, 268–269      importance sampling, 114–119
  prior predictive analysis, 263–266          joint distribution test for, 253–254
  properties, 208–209                         Markov chain Monte Carlo, 114–127,
  public school class size, 217                  133–152
notation                                      Metropolis-Hastings algorithm, 122–124,
  covariates X, 26                               139–140
  data yot , 22                            precision, 26
  Dirac delta function δ θ (·), 123        prediction step, 235–236
  distribution of interst I , 106          predictive Bayes factor, see Bayes factor,
  Gibbs transition G, 121                        predictive
  Hastings transition H , 122              predictive density, 66
  Kronecker delta function δ (·, ·), 203      examples, 67–70, 161–162, 236–238
  MCMC transition C, 133                      improper prior and, 85–86
  measure ν, 22                            predictive likelihood, 66
  model A, 22                                 example, 67–70
  models, alternative Aj , 61                 marginal likelihood and, 67
  observables yt , 21                      prior density (distribution), 10, 23
  order of unobservables kA , 22              conditionally conjugate, 39–42
  probability density p (·), 22                  examples, 40, 164–166, 197, 209–210
  sample size T , 22                          conjugate, 38–39
  sample space , 22                             exponential family, in, 43
  source distribution S, 111                  density-ratio class, 87–91
  subsample Yt , 22                              BACC, in, 160, 281
  unobservables θ A , 22                         bounds approximation, 277–281
  vector of interst ω, 24                        example, 160
nuisance parameters, 35–36                    hierarchical, 73–78
  example, 36                                    examples, 74, 76–77, 168–169, 192
numerical standard error (NSE), 107              multi-tier, 77
  BACC, in, 156–157                              two-tier, 74–75
  Markov chain Monte Carlo, 149               improper, 78–87
  reweighting and, 274–275                       credible set and, 80
                                                 limit of proper priors, 79–81
observables, 7, 21–22                            marginal likelihood and, 83
order-restricted inference, 174–175              normal linear regression model, 81–83
outliers, 218, 253                               predictive density and, 87
                                              Jeffreys, 84–85
panel data, 168–169                              examples, 86
panel study of income dynamics (PSID),        normal-gamma, 41
     212                                      reweighting, 117, 272
posterior density (distribution), 10, 24      robust, 87
  exponential family, of, 43                  sensitivity to, 157–158, 159, 242–243
  kernel instandard form, 24                  transformation of unobservables, 78–79
  multinomdal, 151–152                     prior odds ratio, 16, 64
  normalized, 24                           prior predictive analysis, see specification
  vector of interest, of, 25                     analysis
300                                                                              SUBJECT INDEX


probit linear model, 200–202                    posterior predictive analysis, 267–270
  BACC, in, 201                                    examples, 268–269, 271
  examples, 200–201                             prior predictive analysis, 262–267
  Gibbs sampler, 201                               examples, 263–267, 271
  marginal likelihood approximation, 260     Standard and Poors 500, 6, 239, 243
  ordered probit, 202                        stopping rule, 97–98, 101
public school class size, 154–161            Student-t linear model, 206–208
  Bayesian communication and, 275–277           BACC, in, 208
  decisions regarding, 4                        censored, 215–216
  loss functions, 159–160                       conditional posteriors, 207–208
  Massachusetts (MCAS) data, 155                example, 217
  nonlinear regression and, 180–190             mixture distribution, component in, 257
  normal linear regression model and,           prior distribution, 206
     154–158                                 student : teacher ratio, see public school class
  normal mixture linear model and, 217–218         size
  posterior predictive analysis, 271         substochastic, 134
  Student-t linear model and, 217            sufficient statistic, 31–33
                                                ex ante and ex post equivalence, 31
quantile                                        examples, 33, 36–38, 45–46, 98, 203
  direct simulation of posterior, 106–107       exponential family, in, 42–43
  linear-linear loss function, 49               factorization criterion, 32

random coefficients, 168                     televised game show, 12
random walk Metropolis chain, 123
   convergence, 139                          unit simplex, 203
   example, 125                              unobservables, 7, 22
Rao-Blackwell theorem, 128–129               update step, 241
Rao-Blackwellization, see concentrated       updating, 10–11
      expectations                             examples, 178–179
relative numerical efficiency (RNE), 117       predictive likelihood and, 66
   examples, 156, 275–277
   importance sampling, 119
reversibility condition, 124                 value at risk, 5–6
reweightting, 117, 272                         posterior inference for, 238–243
   central limit theorem for moments,          posterior predictive analysis, 270–271
      273–274                                  prior predictive analysis, 266–267, 271
   convergence conditions, 272–273             simulation and, 5–6
risk, 47                                       vector of interest, 24
                                             variance reduction, 127–133
                                               antithetic sampling, 130–132
seemingly unrelated regressions (SUR),
                                                  asymptotic properties, 131
     162–169
                                                  examples, 131, 132–133
  BACC, in, 166
                                                  forecasting and, 132–133
  conditional posteriors, 166
                                                  importance sampling and, 133
  conditionally conjugate prior, 165–166
                                               concentrated expectations, 128–130
  Gibbs sampler, 166
                                                  examples, 129–130, 174
  hierarchical prior, 168–169
                                                  forecasting and, 132–133
  inequaltiy constraints, 174–175
                                             vector of interest, 9, 15, 17, 24
sequential experiment, 101
                                               examples, 17, 24, 25, 47, 51, 176, 221
simulation consistency, see convergence
     conditions
simultaneous equations, 37                   warm-up, see burn-in
smoothed probabilities, 236                  weak conditionality principle, 99
source density, 111                          weak sufficiency principle, 99
specification analysis, 262–271              Wiener process, 176
Contemporary Bayesian Econometrics and Statistics, by John Geweke
Copyright  2005 John Wiley & Sons, Inc.
колхоз
   3:41 am, 10/22/05



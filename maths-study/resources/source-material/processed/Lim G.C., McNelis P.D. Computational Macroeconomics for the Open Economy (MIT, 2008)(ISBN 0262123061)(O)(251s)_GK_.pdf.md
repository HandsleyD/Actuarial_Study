---
normalized_id: shared-pdf-reference-lim-g-c-mcnelis-p-d-computational-macroeconomics-for-the-open-economy-mit-2008-isbn-0262123061-o-251s-gk
exam_code: SHARED
material_scope: lim g.c., mcnelis p.d. computational macroeconomics for the open economy (mit, 2008)(isbn 0262123061)(o)(251s)_gk_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Lim G.C., McNelis P.D. Computational Macroeconomics for the Open Economy (MIT, 2008)(ISBN 0262123061)(O)(251s)_GK_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-lim-g-c-mcnelis-p-d-computational-macroeconomics-for-the-open-economy-mit-2008-isbn-0262123061-o-251s-gk

ec o n o mics




                                                                                                                               Lim and M c Nelis
                                                                                                                                                                              G.C. Lim and Paul D. M c Nelis
Computational Macroeconomics for the Open Economy
G. C. Lim and Paul D. McNelis

Policy makers need quantitative as well as qualitative answers to pressing policy questions. Because of
advances in computational methods, quantitative estimates are now derived from coherent nonlinear dynamic




                                                                                                                          Computational macroeconomics for the open economy
macroeconomic models embodying measures of risk and calibrated to capture specific characteristics of real-
world situations. This text shows how such models can be made accessible and operational for confronting
policy issues.
    The book starts with a simple setting based on market-clearing price flexibility. It gradually incorporates
departures from the simple competitive framework in the form of price and wage stickiness, taxes, rigidities in
investment, financial frictions, and habit persistence in consumption.
    Most chapters end with computational exercises; the Matlab code for the base model can be found in the
appendix. As the models evolve, readers are encouraged to modify the codes from the first simple model to
more complex extensions.
    Computational Macroeconomics for the Open Economy can be used by graduate students in economics and
finance as well as by policy-oriented researchers.

G. C. Lim is Professorial Research Fellow at the Melbourne Institute of Applied Economic and Social Research,
University of Melbourne. She is the coauthor of Dynamic Economic Models in Discrete Time: Theory and



                                                                                                                                                                              Computational
Empirical Applications and An Introduction to Dynamic Economic Models (both with Brian Ferguson).
Paul D. McNelis is Robert Bendheim Chair of Economic and Financial Policy at Fordham University Graduate
School of Business Administration. He is the author of Neural Networks in Finance: Gaining Predictive Edge
in the Market.

“Dynamic equilibrium models are at the center of modern research in open macroeconomics. However, graduate
students and policy researchers often find it difficult to get started in this literature. Lim and McNelis’s book fills
this gap by providing an excellent introduction to the construction and solution of dynamic equilibrium models for
small open economics. The authors carefully analyze a prototype economy, which they enrich in each chapter with
                                                                                                                                                                              macroeconomics
                                                                                                                                                                              for the open
new aspects, thus allowing the reader to learn the field naturally as the book progresses. Extensive documentation
of the code used in the computations and numerous exercises complement the main discussion. Systematic yet
concise, this monograph will become a popular reference for both students and researchers in the field.”
— Jesús Fernández-Villaverde, Department of Economics, University of Pennsylvania




                                                                                                                                                                              economy
“Lim and McNelis provide a manual that allows the diligent reader interested in open economy macroeconomics
to move quickly to the frontier of research. This is not a book to gather dust on the bookshelf. It is a book to be
first pored over carefully and then put to use.”
— Timothy J. Kehoe, Department of Economics, University of Minnesota


978-0-262-12306-8                                The MIT Press
                                                 Massachusetts Institute of Technology
                                                 Cambridge, Massachusetts 02142
                                                 http://mitpress.mit.edu
Computational Macroeconomics for the Open Economy
Computational Macroeconomics for the Open Economy




G. C. Lim and Paul D. McNelis




The MIT Press
Cambridge, Massachusetts
London, England
( 2008 Massachusetts Institute of Technology

All rights reserved. No part of this book may be reproduced in any form by any elec-
tronic or mechanical means (including photocopying, recording, or information storage
and retrieval) without permission in writing from the publisher.

MIT Press books may be purchased at special quantity discounts for business or sales
promotional use. For information, please e-mail special_sales@mitpress.mit.edu or write
to Special Sales Department, The MIT Press, 55 Hayward Street, Cambridge, MA 02142.

This book was set in Palatino on 3B2 by Asco Typesetters, Hong Kong and was printed
and bound in the United States of America.

Library of Congress Cataloging-in-Publication Data

Lim, G. C. (Guay C.)
Computational macroeconomics for the open economy / G. C. Lim and Paul D. McNelis.
  p. cm.
Includes bibliographical references and index.
ISBN 978-0-262-12306-8 (hbk. : alk. paper) 1. Econometric models. 2. Macroeconomics—
Mathematical models. I. McNelis, Paul D. II. Title.
HB141.L54 2008
339.01 0 5195—dc22                                                         2008011200

10 9 8     7 6 5     4 3 2 1
Contents




    Preface xi
    Acknowledgments     xv

1   Introduction    1
    1.1   The Open Economy Setting 1
    1.2   Solution Methods 3
          1.2.1 Perturbation Method 5
          1.2.2 Projection Methods and Accuracy Tests   6
    1.3   Policy Goals, Welfare, and Scenarios 13
    1.4   Plan of the Book 15
          Computational Exercises 17

2   A Small Open Economy Model          19
    2.1   Introduction 19
    2.2   Flexible Price Model 20
          2.2.1 Closure Condition 20
          2.2.2 Consumption and Labor 21
          2.2.3 Production and Pricing 24
          2.2.4 Monetary and Fiscal Authorities   25
          2.2.5 Exports and Foreign Debt 27
          2.2.6 Calibration 27
    2.3   Solution: Projection Method 28
          2.3.1 Approximating Functions 28
          2.3.2 Euler Errors 29
          2.3.3 Accuracy Checks 29
    2.4   Stochastic Dynamic Simulations 32
          2.4.1 Impulse-Response Analysis 32
          2.4.2 Recurring Shocks 34
          2.4.3 Welfare Distributions 37
vi                                                                  Contents


     2.5   Effects of a Demand Shock 39
           2.5.1 Scenario: Export Shock 39
           2.5.2 Stochastic Dynamic Simulations 40
     2.6   Concluding Remarks 43
           Computational Exercise: Stochastic Processes   43

3    Sticky Domestic Prices      47
     3.1   Introduction 47
     3.2   Model with Calvo Pricing 49
           3.2.1 Households—Consumption and Labor 49
           3.2.2 Production and Calvo Pricing 50
           3.2.3 Government Sector 52
           3.2.4 Exports and Foreign Debt 53
     3.3   Computational Analysis 53
           3.3.1 Approximating Functions 53
           3.3.2 Euler Errors 54
           3.3.3 Accuracy Checks 54
     3.4   Stochastic Simulations 56
           3.4.1 Impulse-Response Analysis 56
           3.4.2 Macroeconomic Correlations 58
           3.4.3 Welfare Analysis 59
     3.5   Output Gaps and Sensitivity Analysis 62
           3.5.1 Output Gap Environment 62
           3.5.2 Taylor Rule with an Output Gap 64
     3.6   Concluding Remarks 65
           Computational Exercise: Output in the Taylor Rule   66

4    Income and Consumption Taxes           69
     4.1   Introduction 69
     4.2   Model with Taxes 71
           4.2.1 Household Euler Equations 71
           4.2.2 Firms—Production and Calvo Pricing       72
           4.2.3 Monetary Policy 72
           4.2.4 Taxes and Domestic Debt 73
           4.2.5 Exports and Foreign Debt 73
           4.2.6 Calibration 73
     4.3   Model Solution 74
           4.3.1 Decision Rules 74
           4.3.2 Euler Errors 75
           4.3.3 Accuracy Checks 75
Contents                                                                 vii


     4.4   Stochastic Simulations 75
           4.4.1 Impulse-Response Analysis 75
           4.4.2 Welfare Comparisons 78
     4.5   Scenario Analysis 79
           4.5.1 Alternative Fiscal Policy Regimes 79
           4.5.2 Impulse-Responses 80
     4.6   Concluding Remarks 82
           Computational Exercise: Model Validation with VARs      83

5    Current Account Dynamics         85
     5.1   Introduction 85
     5.2   Model with Endogenous Exports 86
           5.2.1 Households—Consumption and Labor 87
           5.2.2 Firms—One-Sector Production and Pricing 89
           5.2.3 Monetary and Fiscal Authorities 89
           5.2.4 Exports and Foreign Debt 90
     5.3   Computational Analysis 90
           5.3.1 Decision Rules and Euler Errors 90
           5.3.2 Accuracy Checks 91
     5.4   Productivity Shocks 91
           5.4.1 Impulse-Response Analysis 91
           5.4.2 Stochastic Simulations 93
     5.5   Scenario Analysis 94
           5.5.1 Low Export Elasticity 94
           5.5.2 Government Expenditure 96
     5.6   Concluding Remarks 98
           Computational Exercise: Real Exchange-Rate Volatility   100

6    Capital and Tobin’s Q      103
     6.1   Introduction 103
     6.2   Model with Capital Accumulation 105
           6.2.1 Householders and Entrepreneurs 105
           6.2.2 One-Sector Production 108
           6.2.3 Monetary and Fiscal Authorities 109
           6.2.4 Exports and Foreign Debt 109
     6.3   Solution Algorithm 109
           6.3.1 Approximating Equations 109
           6.3.2 Accuracy Tests 112
     6.4   Stochastic Dynamic Simulations 113
           6.4.1 Impulse-Response Functions 113
           6.4.2 Macroeconomic Correlations 114
viii                                                               Contents


       6.5   Scenario Analysis—Q Targeting 114
             6.5.1 Productivity Shocks 115
             6.5.2 Export Shocks 117
       6.6   Concluding Remarks 117
             Computational Exercise: Risk and Q growth   119

7      Economy with Natural Resources         121
       7.1   Introduction 121
       7.2   Two-Sector Model 122
             7.2.1 Householders and Entrepreneurs 122
             7.2.2 Two-Sector Production and Pricing 125
             7.2.3 Monetary and Fiscal Authorities 126
             7.2.4 Exports and Foreign Debt 127
       7.3   Solution Algorithm 127
             7.3.1 Euler Errors 128
             7.3.2 Accuracy Checks 128
       7.4   Simulation Analysis 128
             7.4.1 Impulse-Response Paths 128
             7.4.2 Stochastic Simulations 131
       7.5   Terms-of-Trade Shocks 132
       7.6   Concluding Remarks 134
             Computational Exercise: Real Exchange Cross-Correlations   135

8      Financial Frictions    139
       8.1   Introduction 139
       8.2   DSGE Model with Banking 140
             8.2.1 Household Sector: Consumption and Saving 140
             8.2.2 Firms—Production, Pricing, and Borrowing 143
             8.2.3 Monetary and Fiscal Authorities 144
             8.2.4 Exports and Foreign Debt 145
             8.2.5 Financial Sector 146
       8.3   Solution Algorithm 147
       8.4   Simulation Analysis 149
             8.4.1 Impulse-Response Paths 149
             8.4.2 Macroeconomic Correlations 150
       8.5   Scenario Analysis 152
       8.6   Concluding Remarks 152
             Computational Exercise: The ‘‘Great Moderation’’ 153
Contents                                                         ix



9    Wage Rigidities     157
     9.1   Introduction 157
     9.2   Model with Sticky Wages 158
           9.2.1 Household Sector 158
           9.2.2 Firms—Production, Pricing, and Loans 161
           9.2.3 Monetary Policy 162
           9.2.4 Taxes and Domestic Debt 163
           9.2.5 Exports and Foreign Debt 163
           9.2.6 Financial Sector 163
     9.3   Solution Algorithm 164
           9.3.1 Approximating Functions 164
           9.3.2 Accuracy Checks 165
     9.4   Simulation Analysis 165
           9.4.1 Impulse-Response Paths 165
           9.4.2 Macroeconomic Correlations 167
     9.5   Sensitivity Analysis 168
     9.6   Concluding Remarks 170
           Computational Exercise: Dunlop-Tarshis Puzzle 171

10   Habit Persistence    173
     10.1 A DSGE Model with Habit Persistence 174
          10.1.1 Household Sector 174
          10.1.2 Production Sector 177
          10.1.3 Government Sector 178
          10.1.4 External Sector 179
          10.1.5 Financial Sector 179
     10.2 Solution Algorithm 180
          10.2.1 Approximating Equations 180
          10.2.2 Euler Errors 181
          10.2.3 Accuracy Checks 181
     10.3 Stochastic Simulations 181
          10.3.1 Impulse-Responses to a Productivity Shock 181
          10.3.2 Macroeconomic Correlations 183
     10.4 Simulating Alternative Scenarios 185
          10.4.1 No-Inﬂation Targeting 185
          10.4.2 International Shocks 186
     10.5 Concluding Remarks 187
          Computational Exercise: Output and Interest Rate 188
x                                                               Contents



11   International Capital Flows and Adjustment        191
     11.1 Capital Reversals 192
          11.1.1 Sudden Stops and Contagion Effects 192
          11.1.2 Simulating a Reversal in Capital Flows 193
     11.2 Continuing Inﬂows 194
          11.2.1 Current Account Deﬁcits and Asset-Price Inﬂation   194
          11.2.2 Simulating Continuing Capital Inﬂows 195
     11.3 Future Research 196

     Appendixes

A    Deﬁnition of Symbols      201

B    Deﬁnition of Variables     203

C    The Computer Algorithm          205

     Notes 211
     Bibliography   215
     Index 225
Preface




This study comes from the conviction that policy makers need quanti-
tative, not simply qualitative, answers to pressing policy questions.
Policy makers have to make decisions in the real world, and it is often
useful, if not imperative, to augment qualitative advice with speciﬁc
numerical ranges for operational targets in the short and medium run.
For example, while it is useful for economic advisors to inform policy
makers about the need for a competitive real exchange rate, or a sus-
tainable trade deﬁcit, it would be even more useful for the advice to
include some benchmark numerical values of the competitive real ex-
change rate, or the sustainable trade balance (given the magnitudes of
the key characteristics of the economy and external conditions)
   Quantitative answers have often come from ad hoc back-of-envelope
calculations, or cursory eyeballing of charts and graphs, based on in-
complete partial equilibrium models with simple backward-looking
expectations. Today quantitative policy-useful recommendations can
come from a rigorous analysis of well-speciﬁed, internally coherent
macroeconomic models, calibrated to capture key characteristics of
particular real world situations. Good economic policy evaluation
today is thus about providing quantitative, not simply qualitative, an-
swers to pressing questions.
   The way toward more effective quantitative policy analysis is
through the use of computational stochastic nonlinear dynamic general
equilibrium models. This study shows how such models may be made
accessible and operational for confronting policy issues in highly open
economies.
   Wider use of computational experiments or simulation-based policy
evaluation, based on stochastic nonlinear dynamic general equilibrium
models, is now possible due to recent advances in computational
methods, as well as faster, less costly, and more widely available
xii                                                               Preface



computers. Newer algorithms permit the analysis of models which
are not only sufﬁciently complex so that interesting questions may be
explored, but also tractable enough so that one may be able to assess the
sensitivity of results to particular assumptions and initial conditions.
   Furthermore, it is no longer necessary to think linearly. For many
years it was necessary to linearize the nonlinear ﬁrst-order conditions
of such models around a long-run steady state in order to make these
models operational for estimation, computer simulation, and subse-
quent policy evaluation. Physicist Richard Feynman, for example, asks
the question, why are linear systems so important? There is only one
answer, and that answer, he states, is simply that we can solve them
(see Feynman, Leighton and Sands 1963).
   While such linearization makes estimation and simulation relatively
fast, it frequently throws out the baby with the bath water, since many
of the interesting questions in macroeconomic adjustment—such as
asymmetric response of asset prices to shocks, or the effects of risk on
economic welfare—necessitate explicit nonlinear approaches. For ex-
ample, why do currencies crash spectacularly fast but recover much
more slowly? Such phenomena do not take place in linear symmetric
environments.
   More to the point, many of the changes in external or internal envi-
ronments facing decision makers in small highly open economies
hardly represent small or local departures or movements around a
steady state. Similarly the movements of key ﬁnancial variables, such
as asset-market returns, have hardly been linear and symmetric. As
Franses and van Dijk (2000, p. 5) point out, such returns display erratic
behavior, in the sense that ‘‘large outlying observations occur with
rather high-frequency, large negative returns occur more often than
large positive ones, these large returns tend to occur in clusters, and
periods of high volatility are often preceded by large negative returns.’’
   Miranda and Fackler (2002, p. xv) point out that economists have
‘‘not embraced numerical methods as eagerly as other scientists’’ per-
haps ‘‘out of a belief that numerical solutions are less elegant or less
general than closed-form solutions.’’ However, the development of
parameterized expectations, collocation methods, neural network ap-
proximation, and genetic algorithms, as well as other methods, have
opened the way to use relatively complex nonlinear models for policy
analysis and evaluation. As Kenneth Judd reminds us in his book,
Numerical Methods in Economics, models, to give meaningful insight to
policy makers, must be simple, but the models should not, and need
Preface                                                               xiii



not be, too simple. This study shows how state-of-the-art tools may be
used to apply sufﬁciently complex models in computational experi-
ments to give meaningful insights, under realistic assumptions about
the underlying economic environments.
   This book is, in part, a stand-alone research treatise and a stand-
alone graduate textbook. It is like a research treatise in the sense that
it contributes to current research knowledge in the area, but in a more
extensive format than would be common in an academic journal
article. It is like a graduate textbook, in the sense that it aims to help
students and researchers get up to speed on computational methods
and to apply these techniques to interesting questions. Finally, it is a
policy-oriented book, intended to help researchers at central banks
build their own models for ongoing analysis and evaluation.
   Of course, all models are limited. As Martin Feldstein observes, in
his tribute to Otmar Issing (when he departed as a member of the
Board of the European Central Bank), our computational models are
‘‘only useful as heuristic devices to help clear our thinking’’ rather
than for specifying real time policies, and that we are ‘‘particularly
poor at open economy issues’’ (Feldstein 2006). We hope that this book
contributes to clear thinking about open economy issues, as well as the
design of better policies even in real time.
   While remaining a stand-alone book, this study may also be seen as
a distillation of several ideas coming from Numerical Methods in Eco-
nomics and Foundations of International Macroeconomics. Both of these
books are widely used sources for learning the literature in computa-
tional methods and open economy macroeconomics respectively.
   We stress at the outset that this book is concerned with monetary
and ﬁscal policy, for a prototype small open economy. We do not try
to capture the environment of any economy in particular, through
methods for ‘‘matching moments’’ of simulated and actual data, or
with Bayesian estimation. Rather, we intend to show the important
trade-offs in the conduct of policy under familiar and realistic scenarios
taking place in small open economies throughout the world.
   The organization of the material in the book is inﬂuenced by our
experience with graduate students and with policy researchers. As pro-
fessors, both of us recognize that students and researchers face signiﬁ-
cant learning setup costs (including psychological adjustment costs!)
when they contemplate the implementation of computational algo-
rithms. Common reactions among many of our current and former
students and colleagues include feelings that they are delving into a
xiv                                                                Preface



‘‘black box,’’ that they have to learn the ‘‘art and science’’ of program-
ming cumbersome code, that they have to wait long hours or even
days for computer programs to ‘‘converge,’’ and ﬁnally, that they
have to live with the lingering uncertainty about the ‘‘accuracy’’ and
‘‘uniqueness’’ of the numerical results, as well as their policy relevance,
once they have taken the time and trouble to do the computational
work. Small wonder, then, that many prefer to work with simpliﬁed,
linear, analytically tractable models, even if the assumptions are at
times highly artiﬁcial and abstract.
   We wish to show that the ‘‘black box’’ is not as dark as many think
when viewed through the lens of a ‘‘random search’’ solution algo-
rithm, that popular algorithmic methods can be understood rather
quickly and are well worth the investment in time and energy, that
‘‘convergence waiting time’’ is often not that much longer than the
‘‘programming cost’’ of setting up linear models with equally cumber-
some log-linear algebraic approximation, that ‘‘accuracy checks’’ for
models are easily implemented, and that these models yield important
new insights into dynamic macroeconomics for open economies.
Acknowledgments




McNelis is grateful to the Melbourne Institute of Applied Economic
and Social Research at the University of Melbourne for hospitality and
research support for several extended visits between 2004 and 2007, for
purposes of collaboration with Professor Lim on this project. He also
thanks the Research Visitors Program of the European Central Bank
and the Research Visitor Program of the National Bank of the Nether-
lands for support and hospitality during 2004–2005 academic year in
Frankfurt and Amsterdam, while he continued to work on projects
closely related to material appearing in this book.
   Lim thanks the Bendheim Scholar Program of the Department of Fi-
nance of Fordham University Graduate School of Business for research
support and hospitality in New York in January 2007. She also thanks
Georgetown University and Boston College for facilitating various vis-
its to the United States for the purpose of collaboration with Professor
McNelis.
   We wish to acknowledge that MathWorks Inc. has provided recent
versions of MATLAB1 for this project. In the appendix we list the pro-
gramming codes for the results appearing in chapter 2 of this book,
in order to get readers started in developing their own computer
algoritms.1
   Lim and McNelis are grateful to Elizabeth Murry, formerly of The
MIT Press, for her encouragement at the start of this project, and to
Jane McDonald of The MIT Press as this book came to its present form.
   McNelis dedicates this book to the newest member of the latest gen-
eration of his family, Samantha Nicole Snyder, born February 23, 2004.
Computational Macroeconomics for the Open Economy
1       Introduction




The focus of this book is on a computational approach to the analysis
of macroeconomic adjustments in an open or globalized economy.
Specifying, calibrating, solving, and simulating a model for evaluating
alternative policy rules can appear to be a cumbersome task. There are,
of course, many different types of models to choose from, alternative
views about likely parameter values, multiple approximation methods
to try, and different options about simulation.
   In this chapter we give a brief overview of the issues arising from
the agenda we set for this book and the rationale for the structure of
the book, the methodology adopted, and the economic experiments
considered. Since the same solution method will be used throughout
the book, to minimize repetitions, we provide more details here about
the solution method, the approximating functions and the optimiza-
tion algorithms used.

1.1   The Open Economy Setting

This book uses computational experiments to obtain insights about
macroeconomic adjustments in the open economy setting. These anal-
yses can then inform the design of policies such as the best inﬂation
targeting program or the best tax regime.
  Benigno and Woodford (2004) have pointed out, that too often mon-
etary and ﬁscal policy rules have been discussed in isolation from each
other, but they opt to work in a closed economy setting, within a linear
quadratic framework to yield analytical closed form solutions for mon-
etary and ﬁscal policy rules. In contrast, we adopt the open economy
setting for our discussion of monetary and ﬁscal policies and abandon
the quest for analytical results in favor of numerical approaches. In so
doing, we also extend our discussion of policy issues to encompass
2                                                              Chapter 1



inﬂation targeting and the problem of recurring deﬁcits or surpluses in
the ﬁscal and current-account deﬁcits.
   Incorporating the open economy setting, of course, raises issues
about international trade and ﬁnance, external borrowing conditions
and assumptions about ‘‘closing’’ the open economy. As Schmitt-Grohé
and Uribe (2003) have pointed out, there are many alternative ways
to do this, all of which involve further complications to the standard
models used for monetary and ﬁscal policy analysis.
   Discussions about monetary policy, by their very nature, involve
assumptions about price stickiness. In the closed economy setting such
stickiness can come about either in wage or price-setting behavior in
monopolistically competitive markets. Once we move to an open econ-
omy environment, we face stickiness in the pricing of imported goods,
and thus the case of incomplete pass-through of exchange-rate changes
to the prices of imported goods.
   The variety of shocks or exogenous forces affecting the economy also
expands when we move to the open economy setting. In addition to
the usual productivity changes driving a business cycle, there are terms
of trade shocks, foreign interest rate developments, and global demand
variables to consider. The open economy setting is much more exposed
to varying types of shocks.
   Discussions of optimal policy in the open economy, then, involve
much more complexity than corresponding discussions in the closed
economy setting. The models need to be closed, and there are different
ways to do this (including the use of a two-country model). Further-
more a reasonable case can be made for ‘‘stickiness’’ in the pricing of
imported goods, as well as in domestic price-setting behavior, which
in turn involves both forward and backward-looking behavior in the
imported-goods sector of the economy.
   The models we use in this book are in the class of so-called open
economy new neoclassical synthesis (NNS) models. Such models, as
Goodfriend (2002) reminds us, incorporate classical features such as the
real business cycle, as well as Keynesian features, such as monopo-
listically competitive ﬁrms and costly price adjustment. As Canzoneri,
Cumby, and Diba (2004) note, such models have been routinely used
to revisit the central issues of stabilization policy.
   Different general equilibrium models can generate different effects,
so it is essential to have a good strategy for developing a good dy-
namic stochastic general equilibrium (DSGE) model. As McCallum
(2001) points out, it is desirable for a model to be consistent with both
Introduction                                                             3



economic theory and empirical evidence, but this ‘‘dual requirement’’
is only a starting point for consideration of numerous issues. Mc-
Callum also points out that ‘‘depicting individuals as solving dynamic
optimization problems,’’ as is done in general equilibrium settings, is
‘‘useful in tending to reduce inconsistencies and forcing the modeler to
think about the economy in a disciplined way’’ (McCallum 2001, p. 15).
But adhering to dynamic general equilibrium models still leaves room
for enormous differences, as the reader will see as the chapters unfold.
   In this book we focus on variations of one prototype model of the
open economy; complexity is introduced, by adding extra economic
features, chapter by chapter. While there are many unresolved issues
about macroeconomic adjustments and the conduct of policy in the
open economy, the differing positions rest on speciﬁc assumptions in
the models. Rather than review a myriad of conﬂicting positions based
on differing models, we work with increasingly complex versions of
the prototype model. The same productivity shock is considered in
each case. However, to gain further insight, we also compare the dy-
namic responses of key variables to other shocks, such as exports and
the terms of trade. The progressive addition of complexity highlights
the contribution of each added economic feature and aids in the under-
standing of the economic results and the derived implications for pol-
icy rules in an open economy setting.
   The model is calibrated rather than estimated—the recent develop-
ment of estimation techniques for DSGE models deserves a separate
book. However, the parameters are based on estimates which are
widely accepted. Thus our model is not only completely based on un-
derlying optimization decisions of economic agents, at the household,
ﬁrm, and policy-making level, it is also meant to be reasonably realis-
tic. To put this point another way, following Canova (2007), what is
relevant for us is the extent to which our series of ‘‘false’’ models yield
coherent explanations of interesting aspects of data, while maintaining
highly stylized structures (Canova 2007, p. 251). Thus the models we
use are widely shared, if not consensus, benchmarks of how to model
an open economy for policy evaluation.

1.2   Solution Methods

DSGE models, no matter how simple, do not have closed form solu-
tions except under very restrictive circumstances (e.g., logarithmic
utility functions and full depreciation of capital). We have to use
4                                                              Chapter 1



computational methods if we are going to ﬁnd out how the models
behave for a given set of initial conditions and parameter values.
However, the results may differ, depending on the solution method.
Moreover there is no benchmark exact solution for this model, against
which we can compare the accuracy of alternative numerical methods.1
   There are, of course, a variety of solution methods. Every practicing
computational economist has a favorite solution method (or two). And
even with a given solution method there are many different options,
such as the functional form to use in any type of approximating func-
tion, or the way in which we measure the errors for ﬁnding accurate
decision rules for the model’s control variables. The selection of one
method or another is as much a matter of taste as well as convenience,
based on speed of convergence and the amount of time it takes to set
up a computer program.
   Brieﬂy, there are two broad classes of solution methods: pertur-
bation and projection methods. Both are widely used and have ad-
vantages and drawbacks. We can illustrate these differences with
reference to the well-known example of an agent choosing a stream of
consumption ct that maximizes her utility function U, which then
deﬁnes the capital k accumulation, given the production function f
and productivity process zt ,

         X
         y
max            b t Uðct Þ;                                          ð1:1Þ
    ct
         t¼1

ktþ1 ¼ f ðzt ; kt Þ  ct ;                                          ð1:2Þ

zt ¼ rzt1 þ et ;            et @ Nð0; s 2 Þ:                       ð1:3Þ

The ﬁrst-order condition for the problem is

U 0 ðct Þ ¼ bU 0 ðctþ1 Þ f 0 ðktþ1 Þ:                               ð1:4Þ

The system has one forward-looking variable for the evolution of ct ,
and one state variable kt that depends on the values of the forward-
looking variable, ct , and the previous period’s values kt1 . The key to
solving the model is to ﬁnd ways to represent functional forms (‘‘deci-
sion rules’’)2 for these controls, as these rules depend on the lagged
values of the state variables. Once we do this, the system becomes fully
recursive and the dynamic process is generated (given an initial value
for k).
Introduction                                                               5



1.2.1 Perturbation Method
The ﬁrst method—the perturbation method—involves a local approxi-
mation based on a Taylor expansion. For example, let hðxt Þ represent
the decision rule (or policy function) for ct based on the vector of state
variables xt ¼ ½zt ; kt  around the steady-state x0 :

                                       1
hðxt Þ ¼ hðx0 Þ þ h 0 ðxo Þðxt  x0 Þ þ h 00 ðx0 Þðxt  x0 Þ 2 þ    :
                                       2

Perturbation methods have been extensively analyzed by Schmidt-
Grohé and Uribe (2004). The ﬁrst-order perturbation approach (a ﬁrst-
order Taylor expansion around the steady state) is identical to the most
widely used solution method for dynamic general equilibrium models,
namely linearization or log linearization of the Euler equations around
a steady state (for examples, see Uribe 2003). The linear model is then
solved using the methods for forward-looking rational expectations
such as those put forward by Blanchard and Kahn (1980) and later dis-
cussed by Sims (2001).
   Part of the appeal of this approach lies with the fact that the solution
algorithm is fast. The linearized system is quickly and efﬁciently solved
by exploiting the fact that it can be expressed as a state-space system.
Vaughan’s method, popularized by Blanchard and Khan (1980), estab-
lished the conditions for the existence and uniqueness of a rational
expectations solution as well as providing the solution. Canova (2007)
summarizes this method as essentially an eigenvalue–eigenvector de-
composition on the matrix governing the dynamics of the system by
dividing the roots into explosive and stable ones.
   This ﬁrst-order approach can be extended to higher order Taylor
expansions. Moving from a ﬁrst to a second-order approximation sim-
ply involves adding second-order terms linearly in the speciﬁcation
of the decision rules. Since the Taylor expansion has both forward-
looking and backward-looking state variables, these methods also use
the same Blanchard-Kahn (1980) method as the ﬁrst-order approach.
Collard and Julliard (2001a, b) offer ﬁrst- and second-order perturba-
tion methods in their DYNARE software system.
   Log-linearization is an example of the ‘‘change of variable’’ method
for a ﬁrst-order perturbation method. Fernández-Villaverde and
Rubio-Ramı́rez (2005) take this idea one step further within the context
of the perturbation method. The essence of the Fernández-Villaverde
and Rubio-Ramı́rez approach is to use a ﬁrst or second-order perturba-
tion method but with transformation of the variables in the decision
6                                                               Chapter 1



rule from levels to power-functions. Just as a log-linear transformation
is easily applied to the linear or ﬁrst order perturbation representation,
these power transformations may be done in the same way. The pro-
cess simply involves iterating on a set of parameters for the power
functions, in transforming the state variables, for minimizing the Euler
equation errors. The ﬁnal step is to back out the level of the series from
the power transformations, once the best set of parameters is found.
They argue that this method preserves the fast linear method for efﬁ-
cient solution while capturing model nonlinearities that would other-
wise not be captured by the ﬁrst-order perturbation method.
   We note that the second-order method remains, like the ﬁrst-order
method, a local method. As such, as Fernandez-Villaverde (2006, p. 39)
observes, it approximates the solution around the deterministic steady
state and it is only valid within a speciﬁc radius of convergence. Over-
all, the perturbation method is especially useful when the dynamics of
the model consists of small deviations from the steady-state values of
the variables. It assumes that there are no asymmetries, no threshold
effects, no types of precautionary behavior, and no big transitional
changes in the economy. The perturbation methods are local approxi-
mations, in the sense that they assume that the shocks represent small
deviations from the steady state.
   While these methods are fast and easy to implement, they suffer
from one important drawback: the shocks must be small.3 First- and
second-order perturbation methods go beyond linearization by making
use of ﬁrst- and second-order Taylor expansions of the Euler equations
around the steady state. However, both linearization and perturbation
methods leave out any possibility of asymmetric behavior widely
observed in the adjustment of asset prices and other key macroeco-
nomic variables. While this is ﬁne for discussion of very small shocks,
it is limiting for large or recurring disturbances.

1.2.2 Projection Methods and Accuracy Tests
This book applies the projection method to solve the DSGE models.
The solution method seeks decision rules for ct that are ‘‘rational’’ in
that they satisfy the Euler equation (1.4) in a sufﬁciently robust way.
It may be viewed intuitively as a computer analogue of the method of
undetermined coefﬁcients. The steps in the algorithm are as follows:
  Specify decision rules for the forward looking variables; for example,
c^t ¼ f ðW; xt Þ, where W are parameters, xt are explanatory variables and
 f is an approximating function.
Introduction                                                               7


   Obtain the Euler error from the Euler equations

t ¼ U 0 ðc^t Þ  bU 0 ðc^tþ1 Þ f 0 ðktþ1 Þ:
 Estimate W using various optimizing algorithm so that the Euler
equation residuals, or the difference between the left- and right-hand
sides of the Euler equation, is close to zero.
   Perform accuracy tests to check on the robustness of the results.

Approximating Functions For the example discussed here, the ap-
proximating function for consumption ct , expressed as a function of
the state variable known at time t, is

c^t ¼ c c ðW c ; zt ; kt1 Þ:                                           ð1:5Þ

The function c c can be any approximating functions, and the decision
variables are typically observations on the shocks and the state vari-
able. In fact approximating functions are just ﬂexible functional forms
parameterized to minimize Euler equation errors that are well deﬁned
by a priori theoretical restrictions based on the optimizing behavior of
the agents in the underlying the model.
   Neural network (typically logistic) or the Chebychev orthogonal
polynomial speciﬁcations are the two most common approximating
functions used. The question facing the researcher here is one of
robustness. First, given a relatively simple model, should one use a
low-order Chebychev polynomial approximation or are there gains to
using slightly higher order expansion for obtaining the decision rules
for the forward-looking variable? Will the results change very much
if we use a more complex Chebychev polynomial or a neural network
alternative? Are there advantages to using a more complex approxi-
mating function, even if a less complex approximation does rather
well? In other words, is the functional form of the decision rule robust
with respect to the complexity of the model?
   The question of using slightly more complex approximating func-
tions, even when they may not be needed for simple models, illustrates
a trade-off noted by Wolkenhauer (2001, p. ii): more complex approxi-
mations are often not speciﬁc or precise enough for a particular prob-
lem while simple approximations may not be general enough for
more complex models. As a rule, the ‘‘discipline’’ of Occam’s razor still
applies: relatively simple and more transparent approximating func-
tions are to be preferred over more complex and less transparent
8                                                              Chapter 1



functions. Canova (2007) recommends starting with simple approxi-
mating functions such as a ﬁrst- or second-order polynomial, and
later checking the robustness of the solution with more complex
functions.
   In this book we use neural networks throughout. Sirakaya, Turnov-
sky, and Alemdar (2006) cite several reasons for using neural networks
as approximating functions. First, as noted by Hornik, Stinchcombe,
and White (1989), a sufﬁciently complex feedforward network can ap-
proximate any member of a class of functions to any degree of accu-
racy. Second, neural networks allow fewer parameters to be used to
achieve the same degree of accuracy as orthogonal polynomials, which
require an exponential increase in parameters. While the curse of
dimensionality is still there, its ‘‘sting’’—to borrow an expression from
St. Paul, and expanded by Kenneth Judd4 —is reduced. Third, neural
networks, with logsigmoid functions, easily deliver control bounds on
endogenous variables. Finally, such networks can be easily applied to
models that admit bang-bang solutions [Sirakaya, Turnovsky, and
Alemdar (2006): p. 3]. For all these reasons, neural networks can serve
as a useful and readily available alternative or robustness check to the
more commonly used Chebychev approximating functions.
   While the outcomes of different approximating functions will not
be identical since we cannot obtain closed form solutions for these
models, we would like the results to be sufﬁciently robust, in terms of
basic dynamic properties. In this book we also assess the performance
of the function using accuracy tests. Before discussing these tests, we
digress to present a brief overview of the neural network function.

Logistic Neural Networks Like orthogonal polynomial approxima-
tion methods, a logistic neural network relates a set of input variables
to a set of one or more output variables, but the difference is that the
neural network makes use of one or more hidden layers in which the
input variables are squashed or transformed by a special function,
known as a logistic or logsigmoid transformation. The following equa-
tions describe this form of approximation:

                  X
                  i
nj; t ¼ oj; 0 þ           oj; i xi; t ;                            ð1:6Þ
                  i¼1

             1
Nj; t ¼               ;                                             ð1:7Þ
          1 þ enj; t
Introduction                                                                 9


                 
              j
              X
yt ¼ g0 þ           gj Nj; t :                                          ð1:8Þ
               j¼1

Equation (1.6) describes a variable nj; t as a linear combination of a
constant term oj; 0 and input variables observed at time t, fxi; t g,
i ¼ 1; . . . ; i  , with coefﬁcient vector or set of ‘‘input weights’’ oj; i ,
i ¼ 1; . . . ; i  . Equation (1.8) shows how this variable is squashed by the
logistic function and becomes a neuron Nj; t at time or observation t.
The set of j  neurons are then combined in a linear way with the
coefﬁcient vector fgj g, j ¼ 1; . . . ; j  , and taken with a constant term g0
to form the forecast y^t at time t.
   This system is known as a feedforward network, and when coupled
with the logsigmoid activation functions, it is also known as the multi-
layer perception (MLP) network. It is the basic workhorse of the neural
network forecasting approach, in the sense that researchers usually
start with this network as the ﬁrst representative network alternative
to the linear forecasting model. An important difference between neu-
ral network and orthogonal polynomial approximation is that the
neural network approximation is not linear in parameters.

Optimizing Algorithm The parameters Wc are obtained by minimiz-
ing the squared residuals :5

tc ¼ U 0 ð^
           ct Þ  bU 0 ð^
                        ctþ1 Þ f 0 ð f ðzt ; kt Þ  c^t Þ:               ð1:9Þ

To obtain the parameters, we use an algorithm similar to the parame-
terized expectations approach developed by Marcet (1988, 1992), and
further developed in Den Haan and Marcet (1990, 1994) and in Marcet
and Lorenzoni (1999). We solve for the parameters as a ﬁxed-point
problem. We make an initial guess of the parameter vector ½W c , draw
a large sequence of shocks ðet Þ, and then generate time series for the
endogenous variables of the model ðct ; kt Þ. We next iterate on the pa-
rameter set ½W c  to minimize a loss function L based on the Euler
equation errors  for a sufﬁciently large T.6 We continue this process
until convergence.
   Note that the projection method does not require linearization, nor
does it need the Blanchard-Khan algorithm. Instead, once expressions
can be found for determining the forward-looking variables, the non-
linear model is solved for the other endogenous variables given the
exogenously determined variables. A variety of optimization methods
10                                                              Chapter 1



can be used to obtain the global optimum.7 Fortunately optimization
methods are becoming more effective for ﬁnding the global minima.
   There are, however, drawbacks of this approach, as Canova (2005,
p. 64) points out. One is that for more complex models, the iterations
may take quite a bit of time for convergence. Fernández-Villaverde
and Rubio-Ramı́rez (2006) also note that this is expensive in terms of
computing time. We have found that with the right set of initial values
the speed can be greatly reduced.
   There is also the ever-present curse of dimensionality. The larger the
number of state variables, the greater is the number of parameters
needed to solve for the decision rules. There is no guarantee the Euler
equation errors will diminish as the number of iterations grows when
we deal with a very large number of parameters. The method relies on
the sufﬁciency of the Euler equation errors. If the utility function is
not strictly concave, for example, then the method may not give appro-
priate solutions. As Canova (2005) suggested, minimization of Euler
equations may fail when there are large number of parameters or
when there is a high degree of complexity or nonlinearity.
   Heer and Maußner (2005) note another type of drawback of the
approach. They point out that the Monte Carlo simulation will more
likely generate data points near the steady-state values than far away
from the steady state in the repeated simulations for estimating the
parameter set ½Wc  (Heer and Maußner 2005, p. 163). Fernández-
Villaverde and Rubio-Ramı́rez (2006) have elaborated on this point.
We want to weight the Euler equation errors by the percentage of time
that the economy spends at those points. More to the point, we want to
put more weight on the Euler equation errors where most of the action
happens and less weight on the Euler equation errors that are not fre-
quently realized. The problem, of course, is that we do not know the
stationary distribution until we solve the model—that is, minimize
the Euler equation errors.
   That criticism is true, of course, if the innovations to the model rep-
resent small normally distributed disturbances around the steady-state
equilibrium. If we simulate out for large sample, we are just staying
close to the steady state. However, if we use, as Fernández-Villaverde
(2005) suggests, either distributions with fat tails or with time-varying
volatility, then the repeated simulations will be less likely to generate
realizations concentrated near to the steady state. Similarly, if the
process for the innovation distributions are realistic, based on well-
Introduction                                                            11



accepted empirical results, then we are more than likely to stay in
regions of the state space likely to be realized.
   We have used normally distributed errors for most of this book, in
order to show the effects of increasing model complexity and non-
linearity in the structural relations in the model. But we note that fat
tails and volatility clustering are pervasive features of observed macro-
economic data, so there is no reason not to use wider classes of dis-
tributions for solving and simulating dynamic stochastic models. As
Fernandez-Villaverde (2005) and Justiniano and Primiceri (2006) em-
phasize, there is no reason for a stochastic dynamic general equilib-
rium model not to have a richer structure than normal innovations.
However, for the ﬁrst-order perturbation approach, small normally
distributed innovations are necessary. That is not the case for projec-
tion methods.
   In summary, we work with one basic approach for solving models:
the projection method, which is closely related to the Wright and
Williams (1982, 1984, 1991) smoothing algorithm. We show that this
method may be viewed as a computerized analogue of the method of
undetermined coefﬁcients commonly used to solve rational expecta-
tions models. With this method, as noted by Canova (2007), the ap-
proximation is globally valid as opposed to being valid only around a
particular steady-state point as is the case for perturbation methods.
The method is computationally more time-consuming than the pertur-
bation method. But it has the advantage in that it is very useful for ana-
lyzing dynamics involving movements of key variables far away from
their steady-state variables. And, of course, it allows us to incorporate
asymmetries, threshold effects, and precautionary behavior. As Can-
ova notes, the advantage of using this method is that the researcher or
policy analyst can undertake experiments that are far away from the
steady state, or involve more dramatic regime changes in the policy
rule. Canova further notes two speciﬁc advantages of this approach:
ﬁrst, it can be used when inequality constraints are present, and sec-
ond, it has a built-in mechanism to check if a candidate solution sat-
isﬁes the optimality conditions of the model. These advantages are
important when we take up open economy issues, such as constraints
on foreign debt accumulation or the zero bound on nominal interest
rates.
   Another important reason for staying with the projection method is
that it is a natural starting point for introducing learning on the part of
12                                                                Chapter 1



the policy makers or on the part of the private decision makers in the
model. Learning can be straightforwardly introduced and contrasted
with the rational expectations when the setup comes from projection
methods. Such learning represents stickiness in information in contrast
to stickiness in price-setting behavior. As Orphanides and Williams
(2002) put it, learning adds an additional layer of dynamic interactions
between macroeconomic policies and economic outcomes.
   Finally, Oveido (2005) argues, for us, convincingly, that the projec-
tion method is the appropriate approach to use for open economy
models. The reason is that the net foreign asset position can deviate
quite a bit from its steady-state value, since access to nearly frictionless
world ﬁnancial markets effectively separates saving from investment
decisions. Since ﬁrst- and second-order perturbation methods assume
only small deviations of state variables from their steady-state vari-
ables, solutions based on these methods will overstate the volatility of
macroeconomic aggregates.

Accuracy Tests To test the accuracy of stochastic simulation results,
we have to work with the Euler equations. Since the model does not
have any exact closed form solution against which we can benchmark
numerical approximations, we have to use indirect measures of accu-
racy. Too often these accuracy checks are ignored when researchers
present simulation results based on stochastic dynamic models. This
is unfortunate, since the credibility of the results, even apart from
matching key characteristics of observable data, rests on acceptable
measures of computational accuracy as well as theoretical foundations.
The accuracy tests used throughout the book are those due to Judd and
Gaspar (1997) and to den Haan and Marcet (1994). They are based on
the Euler equation errors.

Judd-Gaspar Statistic A natural way to start is to check to see if the
Euler equations are satisﬁed, in the sense that the Euler equation errors
are close to zero. Judd and Gaspar (1997) suggest transforming the
Euler equation errors as follows:

         jtc j
JGtc ¼          ;                                                    ð1:10Þ
          Ct

that is they suggest checking the accuracy of the approximations by
examining the absolute Euler equation errors relative to their respec-
Introduction                                                               13



tive forward looking variable. If the mean absolute values of the Euler
equation errors, deﬂated by the forward-looking variable ct , is 102 ,
Judd and Gaspar note that the Euler equation is accurate to within a
penny per unit of consumption.

Den Haan-Marcet Statistic A drawback of the Judd and Gaspar cri-
terion is that it is not based on any statistical distribution. It is purely a
numerical method. At which point do the errors become statistically
signiﬁcant? For this reason we use another commonly used criterion,
due to den Haan and Marcet (1994). This test is denoted DMðmÞ and is
deﬁned as

DMðmÞ ¼ TQ 0 A1 Q @ w 2 ðmÞ;                                          ð1:11Þ

      1 0             1X
Q¼      ð xÞ;   A¼      xt xt0 t2 ;
      T               T

where the vector  represents the vector of Euler equation errors, x is
the instrument matrix with m columns. Under the null hypothesis of
an accurate solution, Eð 0 xÞ ¼ 0.
   The authors recommend the following procedure for implementing
this test: ﬁrst, draw a sample of size T of den Haan and Marcet test of
accuracy, with m degrees of freedom, repeatedly, say 500 times and
calculate the DM statistics; second, compute the percentage of the DM
statistics that is below the lower or above the upper 5 percent critical
values of the w 2 ðmÞ distribution. If these fractions are noticeably differ-
ent from the expected 5 percent, then we have evidence for an inac-
curate solution. They also recommend performing a ‘‘goodness-of-ﬁt’’
type of test and to compare the empirical and theoretical cumulative
density w 2 ðmÞ function.
   One of the goals of this book is to promote the reporting of accuracy
statistics in computationally based research publications. We are no
longer in the world of closed form solutions. However intuitively plau-
sible the results of any research endeavor may be, it is important to
know that they pass a minimum degree of computational accuracy.

1.3   Policy Goals, Welfare, and Scenarios

Whenever we discuss optimal policy, we have to specify the objectives
of policy makers. Central banks, of course, have low inﬂation goals,
14                                                             Chapter 1



and ﬁscal authorities may be concerned with ﬁscal sustainability.
However, when we evaluate the overall performance of particular
policy rules or stances of policy makers over the medium to long run,
the overarching criterion for the performance of policy should be the
welfare of households in the economy. By welfare, we mean an inter-
temporal index or measure of current and future consumption and lei-
sure available to households.
   Of course, policy is not made in a vacuum: the economy is subject to
a variety of change, from external and internal sources, such as pro-
ductivity, foreign interest rates, foreign demand, and terms of trade,
all well beyond the control of any policy maker. So the measures of
welfare, resulting from alternative rules for ﬁscal and monetary policy,
also depend on factors beyond the scope of policy decisions. How can
we evaluate the welfare consequences of speciﬁc policy rules when
changes beyond the scope of policy are also taking place?
   We make our case for computational approaches to policy evalua-
tion precisely on this issue. With computational methods we can
evaluate the distribution of welfare measures over a wide variety of
realizations of shocks or exogenous changes affecting the economy, for
different monetary and ﬁscal policy settings. We can specify a func-
tional form for household utility and develop an intertemporal index,
and compute this measure over a variety of policy settings. There is no
need to substitute these direct welfare measures with quadratic loss
functions or other ad hoc measures, since we are not linearizing the
welfare function.
   Moreover, whenever we discuss welfare, we present a histogram of
welfare distributions. Given that any welfare index is based on realiza-
tions of one set of random shocks based on a given seed to a random
number generator, it is important to know the dispersion of this wel-
fare index for a wide set of realizations based on different seeds. We
hope that this book will promote more widely the use of welfare distri-
butions for assessing the payoff of different policy rules.
   All chapters contain an alternative scenario or policy experiment, in-
tended to motivate our readers to engage in computational experi-
ments on their own. Many of the results come from one important
difference between the open and closed economy setting. In the open
economy consumers have access to international ﬁnancial markets to
smooth their consumption over time, when they face distortions in the
domestic economy in the form of price or wage stickiness.
Introduction                                                          15



1.4   Plan of the Book

This book has eleven chapters. The goal of the computational ex-
periments is to ﬁnd robust conclusions regarding policy response to
external and internal disturbances, under alternative assumptions
about the structure of the economy and how agents react to new devel-
opments and policy change. We start with a very simple setting
with no distortions or rigidities and gradually incorporate more dis-
tortions (e.g., in the form of price and wage stickiness, taxes, real ri-
gidities in investment, ﬁnancial frictions, and habit persistence in
consumption).
   Chapter 2 lays out the basic theoretical framework or model with
fully ﬂexible prices and with a simple Taylor rule for monetary policy.
The model is closed by allowing for a debt elastic interest rate. We dis-
cuss how we calibrate the model and solve for the steady-state initial
conditions of the model. Overall, we show that even this very simple
framework involves forward-looking behavior and requires carefully
constructed approximation methods for solution and simulation. Fol-
lowing the traditional literature, we show how the model can be
solved for a given productivity shock with the projection method. We
also present the results of the suggested accuracy checks. This chapter
includes discussion about impulse-responses in response to a once-
only shock as well as discussion of results from stochastic simulations
resulting from recurring changes in productivity.
   We believe that it is useful to consider simple ﬂexible models be-
cause they are the benchmarks to evaluate welfare gains and loses of
policy approaches under different types of rigidities and distortions.
Consequently from the simulations we obtain benchmark welfare dis-
tributions under fully ﬂexible prices for domestic and foreign goods,
but bearing in mind that in these benchmark scenarios the monetary
authority follows a simple Taylor rule aimed simply at inﬂation tar-
gets. The experiment conducted in this chapter is for the case of recur-
ring changes in foreign demand. The results are compared with those
obtained in response to changes in domestic productivity.
   Chapter 3 takes up stickiness in domestic price setting. We examine
how this form of stickiness reduces welfare, relative to the benchmark
welfare distribution under fully ﬂexible prices. We also explore more
extensive Taylor rules responding not only to inﬂation targets but also
to output gaps. The output gap is the difference between the actual
16                                                                 Chapter 1



level of output and the output which would occur in the ﬂexible
price economy. This chapter illustrates the effects of alternative policy
targets.
   The ﬁrst few chapters were only concerned with monetary policy. In
chapter 4 we analyze the welfare effects of alternative ﬁscal systems or
tax bases, when there are recurring productivity shocks, for a given
inﬂation-targeting monetary regime. We compare the case where the
income tax rate is greater than the consumption tax rate with the re-
verse case where the income tax rate is less than the consumption tax
rate.
   The issue of domestic debt leads naturally to a consideration of the
‘‘twin’’ deﬁcits in chapter 5. Here we let export demands react to the
real exchange rate, and we explore the sensitivity of the relationship
between the ﬁscal and current account deﬁcits as the export elasticity
of demand range from low to high for a productivity shock. Collec-
tively, chapters 4 and 5 illustrate the sensitivity of results to alternative
base case and alternative parameters.
   Chapter 6 introduces capital accumulation into the basic models and
considers the role of Tobin’s Q in policy analysis. While the earlier
chapters dealt with nominal stickiness associated with prices, this
chapter is concerned with real rigidities and other types of distortions.
   Chapter 7 expands the model to two sectors, which then allows us to
broaden our scenario analysis to a consideration of a terms-of-trade
shock. In particular, this chapter examines the case of productivity ver-
sus terms-of-trade shocks for an economy with a rich natural resource
sector.
   Chapter 8 introduces ﬁnancial frictions by allowing for banking and
ﬁnancial frictions. This type of model is also called a limited participa-
tion model, since households are now restricted on the types of assets
they can hold. In this chapter we compare the case of inﬂation target-
ing with a ﬂexible exchange rate with the case of no inﬂation targeting
with an effectively ﬁxed exchange rate (which is akin to imported
goods inﬂation targeting).
   Chapter 9 is concerned with wage rigidities as a source of stickiness.
Scenarios are simulated to explore how labor–leisure choices affect the
outcomes of the productivity shock.
   Chapter 10 introduces habit persistence into the consumption deci-
sion and considers the simulated results for two sets of comparisons:
inﬂation targeting and no-inﬂation targeting, and productivity and
terms-of-trade shocks.
Introduction                                                            17



   The ﬁnal chapter, chapter 11, makes use of the model with all of the
bells and whistles and simulates a sudden stop as well as a large con-
tinuing capital inﬂow (and increasing external deﬁcit) for an economy.
Sudden stops have plagued emerging market economies in the last
two decades, while the United States has experienced large and con-
tinuing external debt accumulation. This ﬁnal chapter brings into sharp
focus the advantages of using our nonlinear approximation algorithm
for solving and simulating open economy stochastic dynamic models
with sudden large shocks or increasing external debt levels. The aim
of this chapter is to highlight, once again, the insights that can be
obtained from simulating (nonlinear) DSGE models.
   Of course, the order in which we have progressed, with increasing
complexity—from the ﬂexible price model, to sticky prices, to distor-
tionary taxes, to capital accumulation, to sectoral production, to ﬁnan-
cial frictions, to sticky wages, to habit persistence—is a matter of taste.
We are not suggesting that there is any deep evolutionary pattern in
the ordering we have chosen, just that it follows roughly the develop-
ment of the literature in open economy business-cycle analysis. Also as
a ﬁnal comment, we note that while we cover a range of topics familiar
to students of open economy macroeconomics, this book is about
methods for policy evaluation and not about policy evaluation itself.

Computational Exercises

At the end of chapters 2 through 10, we have added computational
exercises. The MATLAB codes for the base ﬂexible price model dis-
cussed in chapter 2 appears in the appendix at the end of the book.8
This program estimates the decision rule coefﬁcients as well as gener-
ates the impulse-response paths and the stochastic simulations for the
model presented in chapter 2. As we move from chapter to chapter,
the reader is invited to modify the codes from the base ﬂexible price
model to more complex extensions. Quite apart from programming to
suit one’s personal style and taste, we believe that the act of program-
ming is an integral part of open economy macro research as it en-
hances the comprehension of the models and the simulated results.
2       A Small Open Economy Model




2.1   Introduction

This chapter contains the simplest version of the small open economy
model to illustrate the computational methods for solving and simu-
lating DSGE models. The basic framework contains equations that
describe the behavior of the private sector for consumption, labor,
production, the pricing decisions, the setting of monetary policy, and
the closure conditions of the open economy.
   The model is very simple: there are no rigidities in the form of price
or wage stickiness, nor any form of adjustment costs. It is a fully ﬂexi-
ble price model, but it is nevertheless a useful model because it can
serve as the benchmark for assessing the welfare effects of alternative
policy arrangements when there are sticky prices or other distortions
in the economy. The ﬂexible price model is a convenient starting point
and the dynamics are easier to understand. The model is presented in
section 2.2.
   However, the model, simple as it is, does not have a closed form so-
lution, and we have to use computational methods to ﬁnd out how this
model behaves for a given set of initial conditions and parameter
values. In section 2.3 we apply the projection method to solve this
model, for the case of a productivity shock. We also present the accu-
racy tests. Section 2.4 discusses the simulated results for the case of a
one-off shock and for the case of many stochastic simulations. The ﬁnal
section 2.5 presents simulations for an alternative scenario, the case of
a demand shock (coming from exports) as a contrast to the case of a
supply shock (coming from productivity).
20                                                              Chapter 2



2.2   Flexible Price Model

The economy has ﬁve main groups of economic agents. The ﬁrst group
are households who consume goods and supply labor services. They
also own the capital that is rented to ﬁrms. The second group are ﬁrms
that combine capital and labor to produce goods that are demanded
for domestic use and by foreigners. The ﬁrms also set prices, which, in
this chapter, are assumed to be fully ﬂexible. The third group are the
authorities, in effect a monetary authority that sets monetary policy
and a ﬁscal authority that sets ﬁscal policy. The fourth group are the
foreigners who supply imports and demand domestically produced
goods (the exports). Foreigners also lend to the home country. The ﬁfth
group are the ﬁnancial institutions, but in this chapter, there is no
explicit ﬁnancial sector. In other words, there is no ﬁnancial interme-
diation: households lend and borrow directly. We start with the sim-
plest intertemporal dynamic model and gradually relax many of the
simpliﬁcations.
   A major difference between working with a closed and a open econ-
omy model is the need to ‘‘close’’ the model. Since the closure condition
affects the optimizing behavior of all the agents, it is useful to discuss
the closure condition ﬁrst.

2.2.1 Closure Condition
The purpose of the closure is to induce stationarity in the debt process
of the economy. If the consumers of the economy can borrow risk-free
debt ad inﬁnitum, there is no reason for them to limit their consump-
tion. There are many ways to close an open economy model. Schmitt-
Grohé and Uribe (2003) examine alternatives such as endogenous
discounting for the utility function or adjustment costs for foreign debt
accumulation. Using a real business-cycle open economy model with-
out exchange rates or aggregate prices, they conclude that given the
same calibration, the quantitative predictions regarding key macro
variables, as measured by unconditional second moments and impulse
response functions, are ‘‘virtually identical’’ (Schmitt-Grohé and Uribe
2003, p. 183).
   In this book we adopt the debt–elastic risk premia approach to close
the economy; that is, we introduce a risk premium term Ft that has the
following symmetric functional form:
                              
           
Ft ¼ signðFt1 Þ  j½eðjFt1 jF Þ  1;                             ð2:1Þ
A Small Open Economy Model                                             21



where F  represents the steady-state value of the international asset
(denominated in foreign dollars). If the debt is greater (less) than the
steady state, we assume that foreign lenders exact an international risk
premium (discount).1 This will have the desired effect of increasing the
debt service of borrowing, and it will bring about the desired adjust-
                                   
ment in consumption. Note when Ft1    ¼ F  , then FðF  Þ ¼ 0.

2.2.2 Consumption and Labor
A representative household, at period 0, optimizes the intertemporal
welfare function

           X
           y
V ¼ E0             b t Ut ðCt ; Lt Þ;
           t¼0


           Ct1h  L 1þ$
Ut ð:Þ ¼          t    ;
           1h 1þ$

where b is the discount factor, Ct is an index of consumption goods, Lt
is labor services, h is the coefﬁcient of relative risk aversion, and $ is
the elasticity of marginal disutility with respect to labor supply. There
is no habit persistence in this simple model—this feature will be intro-
duced later.2 Utility is additively separable in consumption and labor.
The household’s utility depends positively on the level of consumption
and negatively on the hours of labor supplied.3
   In this simple example the household is assumed to consume only
domestic goods, which is a bundle of differentiated goods
       ð 1                           z=ðz1Þ
                          ðz1Þ=z
Ct ¼           ðCj; t Þ             dj         ;
           0

where j denotes the domestic goods and the elasticity of substitution
between differentiated goods is given by z > 1. The price index P is
given by
       ð 1                       1=ð1zÞ
                          1z
Pt ¼           ðPj; t Þ         dj         :
         0

   The household sector also include entrepreneurs who own the capi-
tal stock Kt and hold shares in all the ﬁrms in the economy. There is no
capital accumulation or depreciation in this simple case and all capital
goods are imported:
22                                                               Chapter 2



Kt ¼ It ;                                                             ð2:2Þ

where I is imported investment goods. The price of the imported inter-
                 f
mediate goods Pt is
  f
Pt ¼ Pt St ;                                                         ð2:3Þ

where Pt describes the price set by foreigners. The rental price of capi-
tal is Ptk .

Household Euler Equations The household intertemporal budget
constraint is of the form
                            "                      f
                                                                      #
     Wt Lt þ Pt þ Ptk Kt                P t C t þ P t It þ B t
                             ¼                             
                                                                       ;
  þ ð1 þ Rt1 ÞBt1 þ St Ft     þ ð1 þ Rt1  þ Ft1 ÞSt Ft1   þ Taxt

where W is the wage rate, P is distributed proﬁts, F is one-period for-
eign bonds, B is one-period domestic bonds, S is the nominal exchange
rate (deﬁned as the home currency per unit of foreign), R  is the for-
eign interest rate, and R is the domestic interest rate. Tax is lump-sum
tax and Ft is a risk premium term that is a function of debt. Note that
without an explicit ﬁnancial sector, we have assumed that households
lend directly to the government as well as borrow directly from for-
eigners. There is no ﬁnancial sector frictions or ‘‘limited participation’’
restrictions on households.
   In this simple example the household takes the wage as given, and
each household chooses consumption, labor, capital (investment),
bonds, and foreign debt to maximize utility subject to the budget
constraint. We assume that each household chooses nontrivial solu-
tions in that Ct > 0, Lt > 0, Kt > 0, Bt > 0, and Ft > 0. The Lagran-
gian problem, which is to maximize utility subject to the budget
constraint
                8                2                  f                 39
                >
                >                     Ptþi Ctþi þ Ptþi Ktþi þ Btþi     >
                                                                       >
                >
                >               6 þ ð1 þ R                           7>
                                                                       >
                >                                     t1þi tþi t1þi 7>
                                                                  
   Xy           <               6           t1þi þ F      ÞS   F      =
        i                       6                                     7
L¼     b UðCtþi ; Ltþi Þ  Ltþi 6        þ Taxtþi  Wtþi Ltþi         7  ;
          >
          >                     6                                     7>
                                                                       >
   i¼0    >
          >                     4                      k
                                            Ptþi  Ptþi Ktþi         5>
                                                                       >
          >
          :                                                            >
                                                                       ;
                                    ð1 þ Rt1þi ÞBt1þi  Stþi Ftþi

yields the ﬁrst-order conditions:
A Small Open Economy Model                                                  23



qL
    ¼ Ch
       t  Lt Pt ¼ 0;
qCt

qL
    ¼ Lt$ þ Lt Wt ¼ 0;
qLt

qL          f
    ¼ Lt Pt þ Lt Ptk ¼ 0;
qKt

qL
    ¼ Lt þ Ltþ1 bð1 þ Rt Þ ¼ 0;
qBt

qL
    ¼ Ltþ1 bð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 þ Lt St ¼ 0;
qFt
                   
Ft0 ¼ j½eðjFt1 jF Þ :

We assume all households face the same interest rate and wages—
so these conditions are identical across all households and hold in
aggregate:

Ch
 t ¼ Lt Pt ;                                                             ð2:4Þ

Lt$ ¼ Lt Wt ;                                                            ð2:5Þ

  f
Pt ¼ Ptk ;                                                               ð2:6Þ

Lt ¼ Ltþ1 bð1 þ Rt Þ;                                                    ð2:7Þ

Lt St ¼ Ltþ1 bð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 :                            ð2:8Þ

Note that in the Euler equation given by equation (6.6) we do not as-
sume Et ½Ltþ1 Stþ1  ¼ Et ½Ltþ1 ½Et Stþ1 , where Et is the expectation condi-
tional on information at time t, nor do we log-linearize this equation,
as is common in linear approximation methods. The standard interest
parity relationship can be derived by log-linearization and by impos-
ing the condition of statistical independence. Our nonlinear solution
algorithm acknowledges the joint distribution of the endogenous varia-
bles in the determination of the exchange rate.
   These equations are standard Euler results. Note that equation
(2.6) indicates that the full effect of exchange rate changes are passed
through to the domestic price of imported capital goods.
24                                                                              Chapter 2



2.2.3 Production and Pricing
We assume that each ﬁrm j produces differentiated goods using a con-
stant elasticity of substitution production function:

Yj; t ¼ Zt ½ð1  a1 ÞðLj; t Þ k1 þ a1 ðKj; t Þ k1  1=k1 :                          ð2:9Þ

The symbol Lj denotes the labor services hired by the ﬁrm and Kj rep-
resents capital; 0 < a1 < 1 is a share parameter and 0 < k1 < 1 de-
termines the degree of substitutability of the inputs. The elasticity
of substitution of capital and labor is given as 1=ð1  k1 Þ. Zt is the
aggregate productivity shock, which follows a stochastic log-linear
autoregressive process with the disturbance term t assumed to be
normally distributed with mean zero and variance sz2 :

lnðZt Þ ¼ r lnðZt1 Þ þ ð1  rÞ lnðZÞ þ et ;                 et @ Nð0; sz2 Þ:      ð2:10Þ

In all of our analyses, productivity Zt is assumed to be an exogenous
stochastic process.
  Aggregating over all ﬁrms yields:
       ð 1                            z=ðz1Þ
Yt ¼           ðYj; t Þðz1Þ=z dj                 ;
          0

       ð 1                           z=ðz1Þ
                        ðz1Þ=z
Lt ¼          ðLj; t Þ              dj         ;
          0

       ð 1                            z=ðz1Þ
Kt ¼           ðKj; t Þðz1Þ=z dj                 ;
          0

where Y is the aggregate domestic output comprising the composite
bundle of differentiated goods produced by monopolistically competi-
tive producers. The demand for good Yj; t is given by the following
expression:
                       !z
              Pj;d t
Yj; t ¼                      Yt ;
              Ptd

where z > 1 is the elasticity of substitution. These results are derived
by Chari, Kehoe, and McGrattan (2000) who assume the artiﬁce of a
bundler, who buys output Yj; t at price Pj; t , and sells the composite
A Small Open Economy Model                                               25



good Yt at price Pt , under the assumptions of cost minimization and
zero competitive proﬁts.
  Aggregate production Y of domestic goods is demanded by house-
holds (C), government (G), and by foreigners (exports X) so in aggre-
gate, the market-clearing equation is
Yt ¼ Ct þ Gt þ Xt                                                     ð2:11Þ

Pricing Behavior There are two input costs: the price of labor and the
price of capital. The wage rate is determined competitively. The ﬁrm
sells the goods at the price Pt and remits Pt to households:

Pt ¼ Pt Yt  Ptk Kt  Wt Lt :

Minimizing costs subject to the production relation

L ¼ Wt Lt þ Ptk Kt þ lðYt  Z½ð1  a1 ÞðLt Þ k þ a1 ðKt Þ k  1=k Þ

and taking into account the ﬁrm’s demands for labor and capital yields
the pricing equations
     8
         "                         #1=k 9
     >
     >    1     ð1  aÞðaWÞ k=ðk1Þ        >
                                           >
     >
     >                                     >
                                           >
     >
     >                                     >
                                           >
     < Z þ aðð1  aÞP k Þ k=ðk1Þ          =
At ¼         "                         # >;                     ð2:12Þ
     >
     >                    1=ðk1Þ          >
     >
     >              WðaWÞ                  >
                                           >
     >                                     >
     : 
     >
                   k         k 1=ðk1Þ
                                           >
                                           ;
               þ P ðð1  aÞP Þ

Pt ¼ At ;                                                             ð2:13Þ

where At is the marginal cost. As in the usual analysis when prices are
fully ﬂexible, the aggregate domestic price Pt is equal to the marginal
cost At .

2.2.4   Monetary and Fiscal Authorities

Monetary Policy and Taylor Rule Throughout the book we assume
that the central bank follows a very simple Taylor (1993) rule aimed
solely at inﬂation stabilization. Following Woodford (2003, p. 39), we
set the long-run interest rate equal to the foreign interest rate R  .
                      ~ t is related to the foreign rate and the difference
Desired interest rate R
between the actual and target rate of inﬂation:
26                                                                 Chapter 2


~ t ¼ R  þ f ðpt  p~Þ;
R                            f1 > 1:
             1

The restriction f1 > 1 is known as the ‘‘Taylor principle.’’ As Carl
Walsh (1998) points out, a greater than one-for-one response of the
interest rate ensures that the economy has a unique, stationary, and
rational expectations equilibrium (Walsh 1998, p. 547). Actual interest
rate follows a partial adjustment mechanism:

Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt  p~Þ;                         ð2:14Þ

where the inﬂation rate is deﬁned as
           
        Pt 4
pt ¼           1:
       Pt1

This formulation of the Taylor rule is similar to the rule estimated by
Judd and Rudebusch (1998), but in our speciﬁcation we leave out, for
the time being, any interest rate reaction to measures of an output gap.
The symbol f2 is called the ‘‘smoothing parameter,’’ and it allows
lagged interest rates to play a signiﬁcant role in the determination of
the current interest rate.4 The target rate of inﬂation, in the case of fully
ﬂexible prices, is simply zero. Hence p~ ¼ 0.5
   Such a Taylor rule is needed, as Woodford points out, in order to
avoid the Sargent and Wallace (1975) indeterminacy problem. Citing
McCallum (1981), Woodford notes that such indeterminacy only applies
if the interest rate rule is set as an exogenous process, but it does not
apply when the interest rate is a function of endogenous variables.
   For the simple ﬂexible price example discussed in this chapter, there
is no compelling case for a Taylor-type monetary policy. Indeed, given
the small open economy assumption, the activities of international
arbitrageurs would ensure global ﬁnancial integration. Hence the do-
mestic interest rate Rt follows the foreign rate R  , and we can imple-
ment this scenario by setting f1 ¼ f2 ¼ 0.
   However, although in theory, there is no role for monetary policy in
a ﬂexible price world, in practice, because central banks are not all-
knowing about the state of the economy, they may well implement
monetary policy. In fact there is a growing literature that recognizes
that agents in the economy as well as policy-makers ‘‘learn’’ about eco-
nomic behavior.6
   We have deliberately set up the Taylor rule framework based on cur-
rent inﬂation in this chapter for two reasons. The ﬁrst reason is that
A Small Open Economy Model                                            27



monetary policy has an important role to play when we start to intro-
duce distortions and rigidities in later chapters, and the Taylor rule is
the most common way to model monetary policy. The second reason
is that adopting a Taylor rule in the ﬂexible price case introduces a
type of informational rigidity, and comparing results from a model
with the rule to a model without the rule allows us to assess how this
type of behavior affects dynamic adjustments in the economy.

Taxes and Domestic Debt           Government spending G is assumed to be
ﬁxed in this chapter:

Gt ¼ G:                                                            ð2:15Þ

The Treasury receives lump-sum taxes Taxt and borrows Bt , where B is
a one-period domestic bond. The evolution of bonds is
Bt ¼ ð1 þ Rt1 ÞBt1 þ Pt Gt  Taxt :                              ð2:16Þ

For this chapter, G is set at zero and B is ﬁxed. The presence of a do-
mestic debt instrument is a necessary device to facilitate the conduct of
monetary policy operating on the domestic interest rate. Hence taxes
can be thought of intuitively as the amount necessary to support mon-
etary policy. The household sector holds government bonds and is
taxed in a lump-sum fashion to service the debt.

2.2.5 Exports and Foreign Debt
Exports Xt in this chapter are determined exogenously:
Xt ¼ X:                                                            ð2:17Þ

The current account in this model is rather simple. Exports are exoge-
nous while imports are simply intermediate goods for production of
domestic goods. In later chapters we will examine the effects of exoge-
nous stochastic export demand, as well endogenous exports, that are
dependent on the real exchange rate. For now, given the exogenously
determined exports Xt and the imports of intermediate goods Kt , the
change in foreign debt evolves as follows:

St Ft ¼ ð1 þ Rt1
                              
                   þ Ft1 ÞSt Ft1 þ ðSt Pt It  Pt Xt Þ:         ð2:18Þ

2.2.6 Calibration
The calibrated parameter values are shown in the appendix at the end
of the book. The values for s, b, $, and a are the values suggested by
28                                                                 Chapter 2



Smets and Wouters (2002). The Taylor rule parameters, the values for
y and fp , are set to allow for some inertia. There is nothing controver-
sial about these values.
   Solving for the steady-state values is relatively easy, given the coefﬁ-
cients of the model and our choice of normalizations. The foreign inter-
est rate R  is ﬁxed at the annual rate of 0.04, and the foreign price P  is
normalized at unity. Productivity Z and labor S are also normalized at
unity. At steady state, the inﬂation rate is zero, so domestic interest
rate R is equal to R  . In the stochastic simulations where we examine
the moments of key endogenous variables, the effect of initialization is
mitigated by discarding the ﬁrst 15 percent of the sample size.

2.3    Solution: Projection Method

The projection solution method used here may be seen as a computa-
tional extension of the method of undetermined coefﬁcients.

2.3.1 Approximating Functions
The ﬁrst task is to specify approximation functions (or decision rules
c c , c s ) for the forward-looking variables (consumption Ct and the
exchange rate St ) as functions of the state variables xt known at time t:

C^t ¼ c c ðW c ; xt Þ;

S^t ¼ c s ðW s ; xt Þ;

xt ¼ fðZt  ZÞ; ðFt1  FÞ; ðRt1  RÞg:

The state variables are typically observations on the shocks (in this
case, productivity Zt ), stock variables (in this case, foreign debt Ft1
predetermined at time t), and policy variables (in this case, the interest
rate Rt ).7 The functions c c and c s may be any approximating func-
tions. In this book we use a relatively simple neural network:

Dct ¼ W1c ðZt  ZÞ þ W2c ðFt1  FÞ þ W3c ðRt1  RÞ;
                               
                  1
C^t ¼ C                     0:5 ;
            1 þ expðDct Þ

Dts ¼ W1s ðZt  ZÞ þ W2s ðFt1  FÞ þ W3s ðRt1  RÞ;
A Small Open Economy Model                                            29


                             
                1
S^t ¼ S                   0:5 :
          1 þ expðDst Þ

We use a neural network speciﬁcation with one neuron for each of the
decision variables. After taking exponents, we multiplied the function
values by their steady-state values to ensure steady-state convergence.

2.3.2 Euler Errors
Optimization algorithms are used next, to ﬁnd the estimates of the
parameter set W c , W s that yields the minimum values for the sum of
squared Euler errors. The Euler errors are deﬁned as
                               " h #
     C^h   1                     C^tþ1
tc ¼ t              b                   ;
      Pt ð1 þ Rt Þ                 Ptþ1
              "                             #    "           #
     C^h                   S^t                    ^   C^h
                                                         tþ1
ts ¼ t                                        b Stþ1         :
      Pt          ð1 þ Rt þ Ft þ Ft0 Ft Þ            Ptþ1

As described in chapter 1, we solve for the parameters as a ﬁxed-point
problem. We make an initial guess of the parameter vector ½W c ; W s ,
draw a large sequence of shocks ðet Þ, and then generate time series for
all the endogenous variables of the model. We next iterate on the
parameter set to minimize a loss function L based on the Euler equa-
tion errors  for a sufﬁciently large T. We continue this process until
convergence.

2.3.3 Accuracy Checks
Once we have obtained the decision rules for consumption C and the
exchange rate S for our model, by the projection method, the next step is
to check that the approximations are robust. Figure 2.1 shows the distri-
bution of the Judd-Gaspar statistics for the consumption and exchange-
rate Euler equation errors, for 500 realizations of sample size 200. We
see that the average cost for both the consumption Euler errors and the
exchange-rate Euler errors are less than one cent per dollar. Table 2.1
shows the mean and standard deviation of the Judd-Gaspar statistics.
   Figure 2.2 and table 2.2 presents the results using the Den-Hann-
Marcet test statistics. In this application we stack the Euler equation
errors for consumption and the exchange rate from the simulated
model. As Heer and Maußner (2005) note, any deviation of these errors
from zero is simply a consequence of the shocks driving the model, so
30                                                 Chapter 2


Table 2.1
Judd-Gaspar statistic ð102 Þ

                                 jtc j   jts j
                                  Ct       St
Mean                             0.2541   0.6937
Standard deviation               0.0287   0.0400




Figure 2.1
Judd-Gaspar statistic
A Small Open Economy Model                                             31


Table 2.2
DenHann-Marcet test
                                   Lag order

                                   1           2       3           4
Lower region ð p < 0:05Þ           0.054       0.056   0.036       0.052
Upper region ð p > 0:95Þ           0.042       0.042   0.034       0.040




Figure 2.2
DenHann-Marcet test for accuracy


it should not be possible to predict these deviations from past informa-
tion on shocks. The results for various order of lags are shown in table
2.2. This set of results conveys good news. Theoretically we would
expect 5 percent of the p-values to be below 5 percent, and another 5
percent to be greater than 95 percent. The results in table 2.2 support
this. Figure 2.2 shows the cumulative distribution function of the em-
pirical analysis (one lag) against the theoretical cumulative density
function (CDF) for the chi-square distribution. As shown, the CDF’s
are very close.
32                                                               Chapter 2



   Overall, the projection errors are quite small, and the approxima-
tions appear accurate as evaluated by the Judd-Gaspar and the Den
Hann-Marcet statistics. We can be reasonably certain that dynamic
results for the case of productivity shocks based on these approxima-
tions are robust.

2.4   Stochastic Dynamic Simulations

2.4.1 Impulse-Response Analysis
We turn now to an examination of the dynamic properties of the
model. How do the key endogenous variables behave in response to a
one-off temporary change in the productivity index? Is the model sta-
ble, in the sense that the endogenous variables return to their steady-
state values after the one-off change? Do these variables return to the
steady state within a reasonable time frame?
   In this section we will ﬁrst use impulse-response analysis to examine
the properties of the model. Impulse-response analysis allows us to
see which variables display more complicated (or more interesting)
dynamics in their response to a one-period shock, such as under- and/
or overshooting the long-run steady state. For a given parameter con-
ﬁguration this type of simulation allows us to see which variables
display greater or lesser response and which variables have more vola-
tile or oscillatory dynamics. To be sure, the ‘‘real world’’ has many re-
curring changes, but these simple impulse-responses help us isolate
key dynamic properties of the model that we would not otherwise be
able to do.

Taylor Rule For the impulse-response analysis we work with the
equation governing the evolution of the logarithm of the productivity
index. The productivity shock follows a stochastic log-linear auto-
regressive process, with the disturbance term et normally distributed
with mean zero and variance sz2 . Starting from steady-state values, we
shock productivity by the value of one standard deviation, and then
set it to zero in succeeding periods:
     
        sz ; T ¼ 25;
et ¼
        0; T > 25:

To see the impulses more clearly in the ﬁgures, we let the length of the
simulation run to T ¼ 200 with the shock occurring at period T ¼ 25.
Of course, we can specify sz at arbitrarily large or small values to see if
A Small Open Economy Model                                                            33




Figure 2.3
Impulse responses following a productivity shock: with Taylor rule (solid line) and with-
out Taylor rule (dashed line)


there are different dynamic responses to the magnitude of the exoge-
nous change. Since the model as well as the decision rules are nonlin-
ear, there is no reason to expect proportionality in the response paths
of endogenous variables, relative to small or large impulses. In our
impulse-response analysis, we set sz ¼ 0:1.
   Figure 2.3 shows the impulse-response paths for selected key vari-
ables (solid lines). The exogenous productivity index appear in the top
left-hand panel. The ﬁgure shows that productivity has a positive effect
on output and a negative effect on price, which then encourages more
consumption. The improvement in productivity also results in a fall in
labor and an increase in the real wage. Foreign debt initially increases
with the fall in the trade balance (imports increase with the increase in
production but exports remain ﬁxed). In this case the interest rate falls
with the fall in price, and with the domestic rate less than the foreign
34                                                                  Chapter 2



interest rate (a fall in interest differential), the exchange rate ﬁrst depre-
ciates and then appreciates back to the steady-state value.

No Taylor Rule Figure 2.3 also shows the impulse responses for the
case where the monetary authority did not adopt a Taylor rule (dashed
lines). As shown since the domestic rate is now ﬁxed to the foreign
rate, the interest differential between these two rates is zero. However,
international ﬁnanciers in this model are sensitive to the size of the
domestic debt F  and the risk premium accordingly increase with the
increase in foreign debt. To induce capital inﬂows, the exchange rate
has to appreciate. Note too the magnitude and the speed of conver-
gence of price to its steady-state value. Relative to the case with inter-
est rate ‘‘stickiness,’’ the price without an active monetary policy falls
by more and reverts faster to its steady state.
   Figure 2.3 includes an important point about monetary neutrality.
Comparing the response of the real variables under the Taylor rule
with those under a ﬁxed interest rate rule, we see almost identical
paths for consumption, output, labor, and the real wage. In a ﬂexible
price world, the behavior of real variables is unaffected by the conduct
of monetary policy.

2.4.2 Recurring Shocks
Following the impulse-response analysis, we now conduct dynamic
simulations with recurring shocks. The aim here is to examine the
behavior of the variables for the case where the productivity index fol-
lows an autoregressive stochastic process. The time paths of these sim-
ulations may then be examined for static or dynamic cross-correlations
as well as overall variability. Obviously the choice of statistics we com-
pute and evaluate from these artiﬁcial data depends on the particular
reasons for doing the simulation in the ﬁrst place. As Anthony A.
Smith Jr. (2004) of Yale University reminds us in his tips for computa-
tional work in economics, the goal of computational research is insight
(see the Web page cited in the bibliography of this book).
   Figure 2.4 shows the evolution of the exogenous productivity index
as well as consumption, output, price, foreign debt, and the exchange
rate for one realization of the stochastic process in the Taylor rule
framework. Note that all variables are well behaved in that they dis-
play mean-reverting behavior. We also note that the price level, due to
the assumption of full ﬂexibility in price-setting behavior, is much
more volatile than the exchange rate. Clearly, this behavior does not
A Small Open Economy Model                                               35




Figure 2.4
Simulated time series


match the relatively sluggish real world behavior of goods prices rela-
tive to asset prices. The issue of sticky prices will be considered in
chapter 3.
   After this initial simulation, it is useful to perform additional simula-
tions, for different draws of the random shocks driving the model to
check for robustness. This would also allow us to generate distribu-
tions for key summary statistics of the model. For example, key prop-
erties of the model can be assessed by examining the autocorrelations
and correlations among key variables. We will ﬁrst examine the time-
series property for consumption, the exchange rate and price based on
500 simulations of productivity shocks and where each simulation con-
tains a run of 200 observations.
   Figure 2.5 shows the distributions of the autocorrelation coefﬁcients
with the raw ‘‘artiﬁcial’’ data.8 All the autocorrelation correlations are
high and close to unity indicating high persistence, which is a feature
of real world data.9
36                                                            Chapter 2




Figure 2.5
First-order autocorrelations


   Figure 2.6 shows some more properties of the model as revealed by
the distributions of key economic correlations among the variables.
The top panel shows that productivity Z and output Y are strongly
positively correlated, as expected, when there is a supply shock. The
results shows that productivity Z and employment L are negatively re-
lated, which is in line with Galı́ (2004) who found a decline in hours
worked following a technology shock. In contrast, Christiano, Eichen-
baum, and Vigfusson (2003) found that a positive technology shock
drives hours worked up, which is more in line with a central tenet of
the real business-cycle literature, namely the comovement of technol-
ogy shocks and output and labor. We note, however, that the model in
this chapter is different from the standard real business-cycle model
in that there is no capital accumulation and that it is moreover an open
economy model. We will see whether the positive correlations between
productivity and the exchange rate and the negative correlations be-
A Small Open Economy Model                                           37




Figure 2.6
Correlations among key economic variables


tween productivity and price hold as we add more frictions to this
basic model.

2.4.3 Welfare Distributions
Although the ﬂexible price model is clearly unrealistic for replicating
key features of real world data, it serves one important purpose for
economic policy evaluation. The welfare distributions (across 500 dif-
ferent realizations of the productivity shocks), obtained under the ﬂex-
ible price and full market-clearing conditions, represent the benchmark
or reference distributions for policy analysis. We use these distribu-
tions to assess the effectiveness of monetary policy under the distorted
conditions of sticky prices, conditional on the same distribution of un-
derlying productivity shocks. The rationale is that the best that the
economy can achieve, in terms of welfare, comes under fully ﬂexible
prices and perfect market-clearing conditions. Once we introduce price
38                                                              Chapter 2




Figure 2.7
Distribution of the welfare index


stickiness, we reduce welfare. The aim of optimal monetary policy, and
other forms of government intervention, then, is to bring the welfare
distributions of the economy operating under the distortions of price
stickiness as close as possible to the welfare distributions under perfect
price ﬂexibility.
   Figure 2.7 shows the welfare measure of the representative house-
hold over a given time horizon for a variety of possible outcomes or
realizations of the stochastic processes. To be sure, the numbers in the
ﬁgure do not have any particular meaning. By way of comparison,
the ﬁgure also includes the welfare distribution for the case with a Tay-
lor rule—the shocks are identical to the case without active mone-
tary policy. As can be seen, there are more outcomes on the lower
end of welfare. In later chapters we will examine how alternative
forms of price stickiness and other distortions cause further deviations
of welfare from the benchmark case.
A Small Open Economy Model                                             39



2.5   Effects of a Demand Shock

Until now we have only examined the dynamic effects of an exogenous
change in productivity. Since Kydland and Prescott (1982), productiv-
ity or technology changes have been extensively examined as the major
source of business cycles, at least in industrialized or developed coun-
tries. So it is natural to use productivity changes as the exogenous vari-
able for our ﬁrst series of computational experiments or simulation
studies with our model. But of course, countries are subject to (or
vulnerable to) a wide variety of exogenous factors. In this section we
examine the effects of one alternative factor—exogenous changes in
foreign demand for the export goods of the domestic country. We use
the same model, only this time, a demand factor, rather than a supply
factor, is the key variable forcing the dynamic response of the econ-
omy. This is a natural juxtaposition, since we can readily compare the
effects of demand with supply impulses, and check to see, in this sim-
ple framework, if they agree with widely shared intuition about how
the macroeconomic variables should respond to underlying changes in
demand as well as supply.
   Of course, in the real world both factors help to drive the evolution
of the economy. We do not enter into any discussion of the relative
importance of supply versus demand factors as determinants of ﬂuctu-
ations in real or ﬁnancial-sector variables. We just want to see how dif-
ferently the model responds, through the way the decision rules are
formed, when demand factors rather than supply factors drive the
economy.

2.5.1 Scenario: Export Shock
For the sake of simplicity, we assume that the foreign demand of
exports Xt is mean-reverting to its steady-state value X. Like pro-
ductivity, the stochastic process for Xt follows a stochastic log-linear
autoregressive process, with the disturbance term et assumed to be
normally distributed with mean zero and variance sx2 :

lnðXt Þ ¼ r lnðXt Þ þ ð1  rÞ lnðXÞ þ et ;   et @ Nð0; sx2 Þ:

  Similar to the evolution of the productivity index, we set r ¼ 0:9,
with standard deviation sx ¼ 0:01. During these experiments we sup-
press changes in the productivity index so that Zt ¼ 1 Et. Note that
40                                                                  Chapter 2



the demand variable affects production directly through the identity
Y ¼ C þ G þ X. It also affects the economy through the current ac-
count, the accumulation or decummulation of foreign assets and its
subsequent effects on the risk premium demanded by foreign investors.
  The approximation functions (or decision rules c c , c s ) for the
forward-looking variables (consumption Ct and the exchange rate St )
are as above, except for the state variables xt known at time t:

C^t ¼ c c ðW c ; xt Þ;

S^t ¼ c s ðW s ; xt Þ;

                  
xt ¼ fðXt  XÞ; ðFt1  F  Þ; ðRt1  RÞg:

The Judd-Gaspar Euler equation error statistics are quite small—about
a fraction of a penny per unit of expenditure. The accuracy of the func-
tion is also conﬁrmed by the CDF of the DM statistics for 500 realiza-
tions, with T ¼ 200, for the case with one lag for the instrument set.
The percentage rejections at the tails are all under the 5 percent levels
for lags of order one to four.

2.5.2    Stochastic Dynamic Simulations

Impulse-Response Analysis As in the case of a productivity shock,
we start from steady-state values and then shock the demand for ex-
port by one standard deviation for one period only. Of course, we can
specify sx at arbitrarily large or small values, to see if there are different
dynamic responses to the magnitude of the exogenous change. Since
we would like to compare supply and demand effects, we set sx to 0.1
for both scenarios.
  Figure 2.8 shows the effects of these two shocks on consumption.
Note that while a productivity (supply) shock causes an increase in
consumption, an export (demand) shock has negligible effect on con-
sumption. The effect on labor and real wage are also relatively small.
As expected, the demand shock causes an increase in price and the
interest rate rises to forestall the inﬂationary effects of the increase in
demand. The interest differential encourages capital inﬂows while the
positive export shock improves the trade balance. The overall adjust-
ment of the exchange rate is a real appreciation. As expected, the debt
A Small Open Economy Model                                                      41




Figure 2.8
Impulse response functions: comparing demand (solid line) and supply shocks (dashed
line)


response is negative, since the foreign demand shocks led to an in-
crease in foreign assets. These results contrast with the effects of the
productivity shock, which led to an increase in debt.

Macroeconomic Correlations The correlations between prices and
outputs and between the shocks and employment appear in Figure
2.9. We note that the correlations between output Y and price P when
the economy is subjected to productivity (supply) shocks is negative,
but it becomes positive when the economy is subjected to export (de-
mand) shocks. This result illustrates the fact that in a supply–demand
framework, shifts to the supply curve trace out the negative relation-
ship between price and quantity, whereas shifts to the demand curve
trace out the positive relationship between price and quantity. In our
42                                                            Chapter 2




Figure 2.9
Correlations


ﬂexible price version of the model, the computational results are deliv-
ering precisely what we should expect on theoretical grounds.
   As shown earlier, the correlations between productivity shocks and
employment are negative while the correlations between export shocks
and employment are positive. Interestingly, while the correlation be-
tween real wage and labor is negative for both supply and demand
shocks, the dispersion of correlations is wider under the demand sce-
nario. This result conforms intuitively with our understanding that
whereas an improvement in productivity has an immediate and direct
effect on output (and hence labor), an improvement in export demand
has an effect on output (and hence labor) via changes in price.
   In this section we examined the dynamic effects of an exogenous
change in foreign demand rather than in domestic productivity. Ob-
viously an economy is subject to a variety of ever-changing exoge-
nous factors, beyond domestic productivity and foreign demand. We
A Small Open Economy Model                                             43



studied the effects of each of these in isolation to show how the model
performs, based on computational criteria, as well as to see if our theo-
retical intuitions are conﬁrmed.

2.6   Concluding Remarks

In summary, this chapter shows how to check the accuracy of a
model as well as how to apply the model once we have obtained the
decision rules for C and S. Of course, the model used in this chapter is
extremely simple and is not meant to replicate key properties of any
economy, particularly with respect to persistence in pricing behavior.
However, the use of impulse-response analysis as well as stochastic
simulations enables us to validate our intuition about how ﬂexible-
price economies should behave in response to ongoing changes in
productivity. The simulations and scenario analysis also yield in-
sights about dynamic macroeconomics in a small open economy
setting.
   To replicate more interesting issues observed in actual economies,
we have to make the model more complex, which of course, means
more variables and parameters to estimate in order to obtain the deci-
sion rules. But the simplest model is not necessarily the least impor-
tant. As we discussed above, the welfare distribution generated by
this model (for the case with no Taylor rule) is, under special circum-
stances, a benchmark by which we can assess the optimality of pro-
posed policy rules.

Computational Exercise: Stochastic Processes

The results of this chapter were based on random normal shocks to
productivity or to export demand. As mentioned in the previous chap-
ter, Fernandez-Villaverde (2005) and Justiniano and Primiceri (2006)
have noted that there is no reason for a stochastic dynamic general
equilibrium model not to have a richer structure than normal innova-
tions. Speciﬁcally, they note that fat tails and volatility clustering are
pervasive features of observed macroeconomic data.
   Figure 2.10 shows the simulated paths of alternative shock pro-
cesses. As can be seen, compared to the standard normal case, more
extreme observations are generated under a t-distribution, and more
clustering of observations are generated under a ARCH/GARCH
schema. How would the time path of the productivity index Z be
44                            Chapter 2




Figure 2.10
Alternative shock processes
A Small Open Economy Model                                           45



affected if we change the innovation generating process for et from a
standard normal to a t-distribution to a ARCH/GARCH process?
   It is easy to incorporate these types of shocks into the model. An
obvious robustness check of the results of this chapter is to redo the
estimation of the decision rules, and evaluate the impulse-response
functions, the dynamic simulations, and the accuracy checks when the
fundamental shocks come from distributions with fat tails or with
ARCH/GARCH processes. It should be noted, that the productivity
index Z is the appropriate state variable, and it follows an autoregres-
sive process with a large persistence parameter. Hence the effects of
alternative types of innovations may be somewhat muted.
3       Sticky Domestic Prices




3.1   Introduction

This chapter extends the model of chapter 2 by introducing sticky price
setting in the domestic-goods producing sector. The model so far is un-
realistic, and it cannot serve as a tool for replicating key stylized facts,
such as the persistence in goods prices. However, we spent time with
the ﬂexible price model for one important reason: its welfare distribu-
tion represents a benchmark to compare, under certain conditions, the
welfare distributions generated by models with distortions due to dif-
ferent forms of stickiness.
   There are, of course, many ways to specify stickiness in price setting.
Prior to the rational expectations revolution of the 1970s, expectations
of future inﬂation (which in turn generated wage changes) were
backward-looking, usually following an error-correction process in
which the change in expected inﬂation was a fraction of the difference
between last period’s expected inﬂation and actual inﬂation. The frac-
tional error-correction factor was a pre-speciﬁed coefﬁcient, so that
expectations could be modelled as adjusting quickly or slowly to past
forecast errors.
   The backward-looking error-correction approach was challenged on
a number of grounds. First, it is a pure backward-looking approach, in
the sense that we only learn from past errors—we do not exploit infor-
mation available in the full structure of the model at the time we form
expectations. Second, because the fractional error-correction coefﬁcient
is a pre-speciﬁed constant, the designer of the model is given a ‘‘free
parameter.’’ A modeler can thus produce almost any type of desired
dynamics, depending on the speciﬁcation of the value of this coefﬁ-
cient, since there are no restrictions or a priori constraints on the value
of this parameter. The rational expectations critique to having such
48                                                               Chapter 3



free parameters in a model is that a model that is capable of ex-
plaining almost any type of dynamics really explains no type of
dynamics at all. More to the point, the mantra against such backward-
looking approaches soon became ‘‘beware of economists bearing free
parameters.’’
   A strong implication of the pure backward-looking models, of
course, is that there is a role for activism or discretion in stabilization
policy. In particular the presence of short-run nominal rigidities allow
changes in nominal monetary policy variables, such as the interest rate
or the money supply, to have temporary real effects. The rational
expectations revolution challenged this policy view. In the ensuing
rules versus discretion debate, the rational expectations revolution
called for a return to rules for monetary policy; that is, monetary pol-
icy, at best, should only target inﬂation, and overall, it eschewed policy
activism.
   The new neoclassical synthesis models, or new Keynesian open
economy models, represent a response to the rational expectations
revolution. In this latest paradigm, economic agents are modeled as
forward-looking, and information is gleaned from the structure of the
macroeconomy. However, this approach also contends that agents
can be backward-looking, meaning there is inertia in price setting
(and wage setting) due to institutional constraints such as overlapping
contracts. The new Keynesian macroeconomics thus synthesizes the
forward-looking role inherent in rational expectations models with
backward-looking inertia effects in price setting behavior. Not surpris-
ingly, this approach allows greater scope for monetary policy beyond
pure inﬂation targeting, and the focus of much of the research in this
framework is on the ‘‘optimal degree’’ of discretion for monetary
policy.
   Of course, there is empirical debate about the degree of backward-
looking behavior in actual price-setting behavior and about how well
this assumption helps us to replicate key stylized facts. For example,
Chari, Kehoe, and McGrattan (2000) contend that monetary shocks
interacting with sticky prices generate real exchange rate behavior that
is volatile and persistent, but not as persistent as in the data. However,
there is no question that staggered or sticky price setting is the default
model for discussions of both closed and open-economy monetary
policy (e.g., see Woodford 2003; Benigno and Woodford 2004; Galı́
and Monacelli 2005). Embedding sticky price-setting behavior in the
domestic-goods sector is the task of this chapter.
Sticky Domestic Prices                                                49



  In section 3.2, we lay out the modiﬁcations of the model and note
that associated with the sticky price mechanism is the price dispersion
index, which represents the resource costs of sticky prices. This section
extends the consideration of decision rules for consumption and the ex-
change rate to the consideration of decision rules for expected domestic
prices. In section 3.3, we examine the impulse response paths of key
variables under this form of price stickiness and compare these paths
with those generated under full price ﬂexibility. We also examine the
adjustment of key variables in full stochastic simulations and compare
the welfare distributions under price stickiness with the correspond-
ing distributions under ﬂexible prices. The scenario considered in this
chapter deals with the case where the Taylor rule includes a measure
of the output gap. Welfare distributions for the case of Taylor rules
with and without the output gap are compared.

3.2   Model with Calvo Pricing

In this section we add to the simple small open economy described in
chapter 2, as well as to the household and foreign sectors following
optimizing behavior and the monetary authority setting the interest
rate using a Taylor rule. We now allow the ﬁrms to adopt Calvo-style
price-setting behavior.

3.2.1 Households—Consumption and Labor
The Euler equations for this sector are, as in chapter 2,

Ch
 t ¼ Lt Pt ;                                                        ð3:1Þ

L$
 t ¼ L t Wt ;                                                       ð3:2Þ

  f
Pt ¼ Ptk ;                                                          ð3:3Þ

Lt ¼ Ltþ1 bð1 þ Rt Þ;                                               ð3:4Þ

Lt St ¼ Ltþ1 bð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 :                       ð3:5Þ

Note, again, that the interest on international asset Rt is augmented
with a risk premium term Ft , which has the symmetric functional form
                              
           
Ft ¼ signðFt1 Þ  j½eðjFt1 jF Þ  1;                            ð3:6Þ
50                                                                                 Chapter 3



where F  represents the steady-state value of the international asset.
All capital is imported as investment goods,
Kt ¼ It ;                                                                              ð3:7Þ
                                              f
and the price of the imports Pt is still
  f
Pt ¼ Pt St                                                                            ð3:8Þ

3.2.2 Production and Calvo Pricing
As in chapter 2, each ﬁrm j produces differentiated goods using a con-
stant elasticity of substitution production function, and the aggregate
product Y is demanded by households C, by the government sector G,
and by foreigners (exports) X. The aggregate equations are

Yt ¼ Zt ½ð1  a1 ÞðLt Þ k1 þ a1 ðKt Þ k1  1=k1                                        ð3:9Þ

lnðZt Þ ¼ r lnðZt1 Þ þ ð1  rÞ lnðZÞ þ t ;                    t @ Nð0; sz2 Þ;      ð3:10Þ

Yt ¼ Ct þ Gt þ Xt                                                                     ð3:11Þ

  However, unlike the ﬁrms in chapter 2, we now assume that ﬁrms
set prices according to the Calvo (1983) staggered pricing system. Each
ﬁrm chooses the optimal price Pj;a t by maximizing the expected dis-
counted proﬁts

      X
      y
Et          x i b i ðð1 þ 0ÞPj;a t Yj; tþi  Atþi Yj; t Þ ¼ 0
      i¼0

subject to the demand for its product, where A represents the marginal
cost that is identical across ﬁrms:
                       !z
              Pj;a t
Yj; t ¼                      Yt :
               Pt

Each ﬁrm is given a subsidy 0 whose value is determined to eliminate
the effect of a price markup1
               0                     !z               !z 1
   Xy                           a                 a
                              P j; t            P j; t
Et     x i b i @ð1 þ 0ÞPj;a t             Atþi            AYtþi :
   i¼0
                              Ptþi              Ptþi
Sticky Domestic Prices                                                   51



Taking derivatives yields the optimal price as
                            P                      z
                 z      1   Et y     i i
                                i¼0 x b ðAtþi ðPtþi Þ ÞYtþi
Pj;a t ¼                       Py i i                       ;
               z  1 ð1 þ 0Þ Et i¼0 x b ððPtþi Þ z ÞYtþi

                              P
 a      Yj; t ðPt Þ z Aj; t þ y      i i
                                i¼1 x b Yj; tþj Aj; tþj ðPtþi Þ
                                                                z
Pj; t ¼                       P                                   :
               Yj; t ðPt Þ z þ y      i i
                                 i¼1 x b Yj; tþi ðPtþi Þ
                                                         z


The optimal price is chosen before the realization of the shock at time t,
and only a fraction ð1  xÞ can set the prices optimally. Note that the
optimal markup factor c is equal to ½z=ðz  1Þ, the so-called markup
distortion created by monopolistic competition, and this leads ﬁrms to
produce too little. We assume the subsidy 0 is chosen to eliminate the
effect of the markup.2 For simplicity too, the likelihood that any price
will be changed in a given period is ð1  xÞ and it is independent of
the length of time since the price was set and the level of the current
price. As Woodford (2003) notes, while these assumptions are unrealis-
tic, they drastically simplify equilibrium inﬂation dynamics as well as
reduce the state space required to solve for the dynamics (Woodford
2003, p. 177).3
   The numerator and the denominator of the optimal price have cur-
rent and forward-looking variables. Rather than work with inﬁnite for-
ward sums, following Schmidt-Grohé and Uribe (2004), we retain the
nonlinear structure of the optimal pricing system by using a recursive
                                             p1       p2
framework with two auxiliary variables At and At , in the following
way:

  p1                             p1
At ¼ Yt ðPt Þ z At þ bxAtþ1 ;                                         ð3:12Þ

  p2                        p2
At ¼ Yt ðPt Þ z þ bxAtþ1 ;                                            ð3:13Þ

           p1
        At
Pta ¼      p2
                :                                                     ð3:14Þ
        At

This simpliﬁcation allows us to write the Calvo pricing equation in a
form similar to the Euler equations, which we then exploit in the
computational section. Note that when all ﬁrms set their prices opti-
mally ðx ¼ 0Þ, the optimal price collapses to the ﬂexible price noted in
52                                                                Chapter 3



chapter 2, namely that the price is then equal to marginal cost. The
term At is the marginal cost and is deﬁned below:
     (                                                     )
        1               k=ðk1Þ               k k=ðk1Þ 1=k
        Z  ½ð1  aÞðaWÞ         þ aðð1   aÞP   Þ          
At ¼                                                           : ð3:15Þ
              ½WðaWÞ 1=ðk1Þ þ P k ðð1  aÞP k Þ 1=ðk1Þ 
The aggregate price index is given by the following Dixit-Stiglitz
aggregator:

Pt ¼ ½xðPt1 Þ 1z þ ð1  xÞðPta Þ 1z  1=ð1zÞ :                   ð3:16Þ

  Overall, the major implication of price stickiness is that it creates dis-
tortion, and hence it generates real resource allocation costs leading to
a reduction in production (and hence demand for labor services).
Brieﬂy, the real resource cost of relative price dispersion—the greater
the dispersion of price in the economy, the lower is the level of con-
sumption for a given level of aggregate output and export demand.
Alternatively, to maintain consumption at a particular level (for a
given export demand), the greater the dispersion, the greater is the
demand for labor and intermediate goods, which in turn implies
increases in disutility (reduction in welfare) and increases in the cur-
rent account (and foreign debt).4

3.2.3       Government Sector

Monetary Policy As in chapter 2 we assume that the central bank
follows a very simple Taylor (1993) rule aimed solely at inﬂation
stabilization:

Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt  p~Þ;        f1 > 1;         ð3:17Þ

            
         Pt 4
pt ¼            1;
        Pt1

where f2 is the smoothing parameter and f1 measures the inﬂuence of
the inﬂation gap in monetary policy. In passing, we note a point made
by Laxton and Pesenti (2003) who remarked on how the impossible
trinity of ﬁxed exchange rates, full capital mobility, and independent
monetary policy has now yielded center stage to a new trinity, which
Taylor (2000) calls ﬂexible and desirable: the trinity of ﬂexible exchange
Sticky Domestic Prices                                                53



rates, inﬂation targeting, and a monetary policy rule. Our analysis is
set in the world of this new trinity.

Taxes and Domestic Debt           Government spending G is assumed to be
ﬁxed at zero:
Gt ¼ G:                                                           ð3:18Þ

The Treasury/central bank receives lump-sum taxes, and the evolution
of the bonds is
Bt ¼ ð1 þ Rt1 ÞBt1 þ Pt Gt  Taxt ;                             ð3:19Þ

where B is a one-period domestic bond. As in chapter 2, taxes adjust
each period to fully repay any government debt from the previous
period: Rt1 Bt1 ¼ Taxt . So debt remains constant.

3.2.4 Exports and Foreign Debt
Exports are exogenously determined in this chapter:

Xt ¼ X:                                                           ð3:20Þ

Given the exports Xt and the imports of intermediate goods Kt , the
evolution of the foreign debt is as follows:

St Ft ¼ ð1 þ Rt1
                              
                   þ Ft1 ÞSt Ft1 þ ðSt Pt It  Pt Xt Þ:        ð3:21Þ

3.3    Computational Analysis

3.3.1 Approximating Functions
We have four decision rules, one for consumption C, one for the ex-
change rate S, and two for the price (one for the numerator A p1 , and
one for the denominator A p2 ):

C^t ¼ c c ðW c ; xt Þ;

S^t ¼ c s ðW s ; xt Þ;

  p1
A^t ¼ c p1 ðW p1 ; xt Þ;

  p2
A^t ¼ c p2 ðW p2 ; xt Þ;

xt ¼ fðZt  ZÞ; ðFt1  FÞ; ðRt1  RÞg:
54                                                                 Chapter 3



The state variables are the productivity, foreign debt, and interest rate.
The approximating functions c c , c s , c p1 , and c p2 are again neural net-
work functions.

3.3.2 Euler Errors
Overall, we seek to determine decision rules for consumption Ct , the
exchange rate St , as well as for the numerator and denominator of
the forward-looking Calvo price Pt . The errors we minimize are the
three intertemporal Euler equation errors, given below:
                               " h #
     C^h    1                    C^tþ1
tc ¼ t               b                   ;
      P^t ð1 þ Rt Þ                P^tþ1
              "                             #    "           #
     C^h                   S^t                         ^h
                                                        C
ts ¼ t                                        b S^tþ1  tþ1
                                                               ;
      Pt          ð1 þ Rt þ Ft þ Ft0 Ft Þ             Ptþ1

           p1                       p1
        A^t     Yt ðPt Þ z At þ bxA^tþ1
tP ¼      p2
                                  p2
                                        :
        A^t      Yt ðPt Þ z þ bxA^   tþ1

   Under a Monte Carlo approach we make an initial guess of the
parameter vector of the parameter values, draw a large sequence of
shocks, and then generate time series for the endogenous variables of
the model. We then iterate on the parameter set to minimize a loss
function based on the sum (or weighted sum) of squared Euler equa-
tion errors. We continue to iterate until the Euler equation errors are
minimized and the results satisfy the accuracy tests.

3.3.3 Accuracy Checks
The accuracy test are based on a very large number of shocks, 500 runs
with sample run of T ¼ 200. Table 3.1 and ﬁgure 3.1 present the Judd-
Gaspar statistics, which are shown as distributions of the means of the
absolute values of the Euler equation errors, divided by the respective
forward-looking variables. These statistics represent the cost of the
Euler equation errors in terms of a unit of expenditure. We see that
the distribution of these errors are centered around mean values of
almost zero, or less than a penny per dollar of expenditure for the case
of consumption.
   The Den Haan-Marcet test results are presented in table 3.2 for various
order of lags and the plot of the CDF of the test is shown in ﬁgure 3.2.
Sticky Domestic Prices                                     55


Table 3.1
Judd-Gaspar statistic ð102 Þ
                                                     p
                                 jtc j   jts j   jt j
                                  Ct       St       Pt
Mean                             0.2344   0.7619   0.0168
Standard deviation               0.0133   0.0439   0.0027




Figure 3.1
Judd-Gaspar statistics
56                                                             Chapter 3


Table 3.2
DenHann-Marcet test
                                  Lag order

                                  1           2        3            4
Lower region ð p < 0:05Þ          0.042       0.048    0.058        0.054
Upper region ð p > 0:95Þ          0.046       0.038    0.050        0.054




Figure 3.2
DenHann-Marcet test of accuracy


Again, these tests indicate that we have little or no reason to doubt the
accuracy of our numerical approximations.

3.4   Stochastic Simulations

3.4.1 Impulse-Response Analysis
This section compares the impulse-responses for the sticky price case
against the benchmark ﬂexible price scenario for an economy subjected
Sticky Domestic Prices                                                              57




Figure 3.3
Impulse responses following a productivity shock: with (solid line) and without (dashed
line) sticky prices


to a one-off positive shock to productivity. For the ﬂexible price case,
we assumed that all ﬁrms price optimally and hence that x ¼ 0; for the
sticky price case, we set x ¼ 0:85. Note that we have eliminated the
steady-state effects of the markup by introducing subsidies.
   Figure 3.3 shows the impulse functions for the real variables (con-
sumption C, output Y, labor services L, and real wage W=P) and some
nominal variables (prices P, interest rate R, exchange rate S, and the
nominal wage W) for the two cases of ﬂexible and sticky prices. We
see small dynamic differences with the real variables: the adjustment
paths for consumption, output, labor and the real wage are slower rel-
ative to the ﬂexible price case. However, the behavior of the nominal
variables in a sticky price setting are very different from their behavior
under ﬂexible prices. Prices are hardly affected by the shock in the
sticky price case, which implies, according to the Taylor rule, hardly
58                                                                                Chapter 3




Figure 3.4
Simulated time series under sticky prices (solid line) and ﬂexible prices (dashed line)


any change to the nominal interest rate. Adjustments in the economy
work through income rather than price effects. Compared to the ﬂexible
price economy, the nominal wage rate increases by more to ensure that
households have sufﬁcient income to demand the increased output.
  The deterioration in the trade balance comes from the increase in the
value of imports associated with an exchange-rate depreciation. When
prices are sticky, the foreign debt worsens only slightly because the
value of exports is relatively stable.

3.4.2 Macroeconomic Correlations
Figure 3.4 shows the time series for key economic variables for the
same single simulated run of 200 observations of the productivity
index considered in chapter 2. The main point to note is that the vola-
tility of the exchange rate is greater under sticky prices.
   Figure 3.5 shows some macroeconomic correlations under sticky
prices. Compared to the ﬂexible price case, the high positive correla-
Sticky Domestic Prices                                                59




Figure 3.5
Macroeconomic correlations


tions between productivity and consumption are unchanged, while
the negative correlations between prices and outputs vary over a
smaller range. However, the correlations between changes in the ex-
change rate (depreciations) and changes in foreign debt are reversed.
When prices are ﬂexible, adjustments to clear the product market oper-
ate through prices; when prices are sticky, adjustments to clear the
product market mainly operate through adjustments in quantity
demanded. In this latter case the exchange rate has to depreciate signif-
icantly to induce a decrease in imports (recall exports are ﬁxed in this
scenario) to stabilize the current account. Hence with recurring shocks,
on balance, the foreign debt falls.

3.4.3 Welfare Analysis
Many studies analyzing the welfare costs of price stickiness use a
closed economy framework, and the results of such models come from
ﬁrst- or second-order Taylor approximations of the Euler equations,
60                                                              Chapter 3



around a steady state. In this chapter we use an open economy setting,
since households can offset the losses of sticky prices by acquiring for-
eign debt in more efﬁcient capital markets. Also, instead of relying on
ﬁrst- or second-order Taylor approximations, we have employed a
projection method based on nonlinear approximations for the decision
rules for consumers and price setters, and we use exact welfare calcula-
tions. We followed the usual custom of calculating the welfare costs of
sticky price behavior when the markups are re-adjusted by compensat-
ing subsidies and taxes. We thus set aside the long-term steady state
effects, and examine how sticky price behavior changes the laws of
motion of the key variables of interest for policy making. Figure 3.6
presents the welfare distributions for the case when prices are sticky
and when prices are ﬂexible.
   We ﬁnd that with only one form of stickiness, in domestic price-
setting behavior, there is only a slight welfare loss. The inefﬁciency of
the sticky price-setting behavior is mitigated by the fact that the repre-




Figure 3.6
Welfare comparisons: sticky and ﬂexible prices
Sticky Domestic Prices                                                  61



sentative household can offset a great deal of the welfare losses due to
sticky prices, through acquiring foreign assets in efﬁciently functioning
international capital markets. The household can thus afford to work
less, and take more leisure, in order to compensate for the welfare
losses in reduced consumption, coming from the distortions of the
sticky price system.5
   One well-known way to evaluate monetary policy is to compare the
welfare of the sticky price economy to the welfare of a fully ﬂexible
price and wage economy; that is, the loss function of monetary policy
is
                    ﬂex
        V0s  V0
ltw ¼         ﬂex
                          ;                                         ð3:22Þ
            V0

where V ﬂex is welfare under ﬂexible prices and V s is welfare under
sticky prices. This loss function, of course, is measured in terms of a
utility function. Following Schmitt-Grohé and Uribe (2004), the differ-
ences in the two welfare indexes may be re-expressed as the percentage
of consumption that the household in the sticky price economy should
be compensated in order to make the household indifferent between
the sticky and ﬂexible price economies. With our utility function we
calculate this consumption compensation percentage as
          2                          !1=ð1hÞ 3
                    s         ﬂex
                  V      V
l% ¼ 10041         0        0
                                  þ1          5;                 ð3:23Þ
                      C~ ﬂex

             1     X
                   y
                            ﬂex
C~ ﬂex ¼        E0   b t ðCt Þ 1h :                                ð3:24Þ
           1  h t¼0

  The term l is the welfare compensation, expressed in consumption
units, where a value of 0 indicates indifference between the two states.
For this study, the overall loss (due to price stickiness) is less than one
percentage point of consumption (0.0249 percent). Estimating the wel-
fare costs of business cycles was addressed by Lucas (1993), who con-
tends that such costs are relatively minor, about 0.05 percent or 0.0005,
with the implication that further macroeconomic ﬁne-tuning through
activist stabilization policies should have a low priority both for policy
makers and for academic researchers. Canzonieri, Cumby, and Diba
(2004) have taken issue with this ﬁnding, and argue that the costs of
business cycles, obtained from a new neoclassical synthesis (NNS)
62                                                             Chapter 3



model with price and wage stickiness, range between 1 and 3 percent
of consumption. They argue that stabilization based on output gap
targets as well as on inﬂation targets may reduce these welfare losses.
We take up this issue in the next section.

3.5   Output Gaps and Sensitivity Analysis

We have thus far only been concerned with backward-looking Taylor
rules and with strict inﬂation targeting. To be sure, many central banks
operate this way. For example, the Reserve Bank of New Zealand is
bound by law to deliver inﬂation below a given target. If the bank fails
to meet this target for a given time horizon, the governor is expected to
resign.
   However, there is a very rich literature that deals with rules that
include the output gap. This is because central bankers can have little
effect on short-term inﬂation as current prices and even prices for the
next quarter or two may be pre-set. Hence the central bank has to look
at indicators of demand pressure that will lead to future inﬂation over
an annual or two-year horizon. For this reason the output gap has
emerged as a useful target of monetary policy.
   More to the point, if actual output is greater than potential output,
the central bank should tighten monetary policy by raising interest
rates because there is excess demand or medium to longer term inﬂa-
tionary pressure in the economy. Alternatively, even when there is
some inﬂation, if the output gap is negative, the central bank should
ease ﬁnancial conditions by reducing interest rates because the econ-
omy is becoming slack and inﬂationary pressure is falling or negative.

3.5.1 Output Gap Environment
The output gap measure is an outgrowth of the earlier literature on the
Phillips curve where inﬂation was considered to be a function of un-
employment. Soon the relationship became one between inﬂation and
the difference between unemployment and the natural rate of unem-
ployment, after Milton Friedman’s famous presidential address at the
American Economic Association of 1967 (Friedman 1968). The natural
rate of unemployment was simply deﬁned as the rate of unemploy-
ment at which inﬂation did not accelerate. Policy makers turned to the
output gap, the difference between actual and potential output, when
they recognized the difﬁculties of measuring the right natural rate of
unemployment in countries undergoing demographic changes and
increasing participation by women in the workforce.
Sticky Domestic Prices                                                 63



   However, it is not obvious how we can readily measure potential
output any more easily than we can measure the natural rate of unem-
ployment. Many were caught off guard during the roaring 1990s in the
latter part of the Clinton administration, when output growth was
much higher than measures of potential output growth and when
unemployment was far below commonly accepted measures of the
natural rate of unemployment. Mis-reading either the output gap or
the difference between the actual and natural rate of unemployment
can have a serious downside. If potential output is perceived to be ris-
ing or the natural rate of unemployment perceived to be falling, there
is the danger that the central bank will overreact and reduce demand
when in fact there is no inﬂationary pressure. Much to his credit, Fed-
eral Reserve Chairman Alan Greenspan did not tighten monetary pol-
icy during the Clinton expansion.
   Swanson (2005) poses the issue as a ‘‘signal extraction’’ problem for a
policy maker. In the context of natural rate unemployment, rather than
potential output, Swanson takes up the relationship between ‘‘diffuse-
middle’’ priors and optimal policy. In his framework, policy makers
are uncertain about the natural rate within the interval [4–6] percent,
so they are unwilling to revise estimates of the true natural rate within
this interval. As observed unemployment moves further away from
their prior, they assign less weight to changes in the natural rate, and
more weight to cyclical components of unemployment. As a result,
Swanson argues, policy makers respond ‘‘very cautiously’’ for small
surprises in the realized unemployment rate, between 4 and 6 percent,
but respond ‘‘very aggressively at the margin as the surprise in unem-
ployment becomes larger’’ (Swanson 2005, pp. 6–7). The main feature
of this type of learning is ‘‘policy attenuation for small surprises fol-
lowed by increasingly aggressive responses at the margin’’ (Swanson
2005, p. 7).6
   The aim of this section is more modest. We simply show how to in-
troduce the output gap into our Taylor rule as well as how to apply
the projection method to a model with an output gap. We use a direct,
speciﬁc measure of potential output, namely the level of output that
prevails in the absence of sticky price distortions. Intuitively, the out-
put gap is deﬁned as the difference between the level of output in the
distorted sticky price environment relative to the level of output that
would prevail in a model of perfect wage and price ﬂexibility. Thus
the methodology incorporates the output series generated in chapter 2
(ﬂexible prices) into this model with sticky prices.
64                                                               Chapter 3



   Our analysis addresses a speciﬁc question. It is now well known
that interest rates that respond not only to deviations of actual inﬂa-
tion from target but also to the output gap unambiguously improve
welfare in closed economy settings with sticky price or wage-setting
behavior (see Erceg, Henderson, and Levin 2000). But Razin (2005) has
recently noted that as an economy becomes progressively more open
to trade in goods and more integrated with world capital markets, the
weight for the output gap term in the optimal interest rate rule gets
smaller. Does this mean that the gains to welfare for our small open
economy from adopting a Taylor rule with an output gap will be
small?

3.5.2 Taylor Rule with an Output Gap
The Taylor rule with an output gap is

                                                        ﬂex
Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt  p~Þ þ f3 ð yt  yt Þ;

     f1 > 1; f3 > 0;                                                ð3:25Þ
                                                ﬂex
where yt is the log of output logðYt Þ and yt is the log of output under
the ﬂexible price case discussed in chapter 2. The model is re-estimated
using this new Taylor rule with an output gap under exactly the same
                                              ﬂex
set of shocks as the model that yielded the yt series. We also checked
that the Judd-Gaspar statistics and the Den Haan-Marcet test support
the accuracy of our results.
  Figure 3.7 shows the impulse responses for the case where the Tay-
lor rule includes the output gap (solid line) and the case where it does
not include the gap (dashed line). The main result is that the interest
rate is more volatile because it has to adjust to another variable, the
output gap. Monetary policy has a bigger job to do, so it reacts more
often.
  Figure 3.8 shows the distribution of welfare under the Taylor rule
without an output gap (upper panel) and the distribution of welfare
with ouput gap (lower panel). Using the formula above, we compute
that there is a very small gain in consumption (0.0019 percent) when
the monetary authority changes from a Taylor rule without the output
gap to one with an output gap. Canzoneri, Cumby, and Diba (2004)
contend that the welfare gain, measured in terms of consumption com-
pensation needed to make the representative household indifferent be-
Sticky Domestic Prices                                                               65




Figure 3.7
Impulse responses: inﬂation and output gap targeting (solid line) and inﬂation-only tar-
geting (dashed line)


tween a sticky price and ﬂexible price environments, is between 1 and
3 percent for most closed economy calibrations. For our open economy
model, the welfare gain is even smaller.

3.6   Concluding Remarks

In summary, this chapter introduced price stickiness into the open
economy model and showed how to apply the projection method to
generate solution paths for the model. As well as exploring the effects
of the sticky price mechanism on the dynamics of adjustment of the
economy, we have asked the question: Should monetary policy target
anything else besides inﬂation? In particular, we examined whether a
Taylor rule that takes into account the deviation of actual inﬂation
from its target as well as the differential between actual output and the
66                                                                         Chapter 3




Figure 3.8
Welfare: Case of inﬂation and output gap targeting compared with case of only targeting
inﬂation


output available under fully ﬂexible prices is able to mitigate the dy-
namic losses due to the way sticky prices affect the adjustment of key
variables. The results of our analysis show that the welfare costs of
sticky prices in an open economy, relative to those of ﬂexible prices,
are rather small and that the gains from adopting a Taylor rule with
an output gap are even smaller.

Computational Exercise: Output in the Taylor Rule

We remind the reader that the measure of output gap applied above is
        ﬂex
ðyt  yt Þ, the difference between the logarithm of output in the sticky
price model ð yt Þ less the logarithm of output in the ﬂexible price model
  ﬂex
yt . In most operational environments we cannot determine the out-
put in the nondistorted world. Consequently the output gap is often
calculated with the help of the Hodrik-Prescott (1980) ﬁlter, known
more generally as the HP ﬁlter.
Sticky Domestic Prices                                                    67




Figure 3.9
Alternative measures of output gap for one simulation


                                                         hp
  The output gap is now deﬁned simply as ðyt  yt Þ, the difference
between the logarithm of the output series yt less the smoothed output
         hp
series yt . The following equation describes the ﬁlter:
    (                                                            )
      X T
                   hp
                              X
                              T
                                    hp     hp       hp   hp
Min        ð yt  yt Þ þ l hp   ½ð ytþ1  yt Þ  ð yt  yt1 Þ 2 : ð3:26Þ
  hp
 yt    t¼1                    t¼2

The parameter l hp is the controlling parameter for the smoothness of
the trend. It is usually set at 1,600 for quarterly data, at least for the
United States and most industrial countries. This smoothing method
is between detrending and ﬁrst differencing of data. The advantage is
that it is relatively easy to apply. The drawback is that it is a statistical
device that deﬁnes cycles by the choice of the smoothing parameter
l hp .7
   Based on one realization of the model used in this chapter, ﬁgure 3.9
                                             ﬂex
shows the output gap measured as ðyt  yt Þ and the HP-ﬁltered se-
              hp
ries ðyt  yt Þ. We see that the HP ﬁlter gap is much more volatile
than the gap measured with respect to the ﬂexible price model.
68                                                            Chapter 3



   More recently researchers have explored the role of output growth
(not output gap) in the Taylor rule. The reasoning is straightforward:
the output gap is a difﬁcult concept to measure and the HP-ﬁltered
output series could well be purely random variations. An interesting
exercise would be to consider a Taylor rule that includes output
growth rather than the output gap. What do you think would be the
effect of using this revised Taylor rule on the distribution of welfare?
4       Income and Consumption Taxes




4.1   Introduction

This chapter examines alternative ﬁscal policy regimes in open econo-
mies, given an inﬂation-targeting monetary policy. In the previous
chapters we assumed away ﬁscal deﬁcits and tax rates. In this chapter
we introduce ﬁscal imbalances, domestic government debt, and the
further distortions of tax rates on income or consumption. We then
examine the effect of alternative tax rules on welfare.
   We have ignored ﬁscal policy so far, not because we do not think it
is important for open economy macrodynamics. Nothing could be fur-
ther from the truth. As Frenkel, Razin, and Yeun (1996) have pointed
out, the globalization process has resulted in growing interest in ﬁscal
policies in the integrated world economy. They cite Black Wednesday
(standing for the European currency crisis of 1992), the problem of sus-
tainability of current account deﬁcits in the wake of the Mexican crisis
of 1994, and the ‘‘new map’’ of Central and Eastern Europe as striking
examples bringing ﬁscal policy to the center stage in macrodynamic
models.
   In this chapter the monetary rule is the same as in previous chapters:
interest rates react to lagged interest rates as well as inﬂation. How-
ever, the addition of ﬁscal distortions in the model implies that we can
no longer benchmark our welfare results with the case of the perfectly
ﬂexible price model since ﬂexible prices are no longer the ﬁrst-best so-
lution. Instead we are in the world of second best. The aim of this
chapter is to compare welfare under alternative income and consump-
tion tax regimes, given an inﬂation targeting regime. In the next chap-
ter we take up current account dynamics and its relation to ﬁscal
balances.
70                                                            Chapter 4



   Much of the recent work on monetary and ﬁscal policy interaction
has been in the closed economy framework. For example, Benigno and
Woodford (2004) take up targeting rules for the monetary authority
and ﬁscal authority whereby inﬂation and output gap targets are set
for the central bank while tax-smoothing targets are set for the ﬁscal
authority.
   Behnabib and Eusepi (2005) argue that in a world of distortionary
taxation, monetary policy should respond to output as well as inﬂation
in order to avoid multiple equilibria and costly equilibrium dynamics.
On the other hand, Kollmann (2004) argues for monetary rules that
just respond to inﬂation and for a tax rate on household income that
responds to public debt. He ﬁnds that this monetary/ﬁscal conﬁgura-
tion yields welfare results quite close to more elaborate rules.
   Schmidt-Grohé and Uribe (2004) ﬁnd that further emphasis on inﬂa-
tion by the monetary authority, beyond what is required for determi-
nacy, makes little difference for welfare, while a muted monetary
response to output, with passive ﬁscal rules, with constant tax rates,
are best for welfare. Schmidt-Grohé and Uribe (2004) fully incorporate
the distortionary steady-state effects of monopolistic competition in
their analysis of monetary and ﬁscal rules.
   Another study in the closed economy framework is by Hallet (2005)
who examined the interaction of ﬁscal and monetary coordination
with speciﬁc objectives for monetary and ﬁscal policy. He argued for
coordinated monetary and ﬁscal policies, with soft debt targets for
the ﬁscal authority and inﬂation targeting for the central bank. Under
this arrangement, compared to uncoordinated approaches, inﬂation
biases are lower and debt repayments higher, with no loss in output
volatility.
   As noted previously, Razin (2005) has argued that as economies be-
come more open in trade and capital ﬂows, the optimal monetary pol-
icy should put progressively more weight on inﬂation and less weight
(or no weight) on output-gap targets. However, Razin eliminated the
steady-state distortion of monopolistic competition by a system of
taxes and subsidies, and he did not incorporate distortionary taxes
and other forms of ﬁscal policy in his analysis. In this chapter we ﬁx
monetary policy, in order to let alternative ﬁscal regimes have center
stage.
   The next section extends the model to allow for alternative ﬁscal
regimes. Section 4.3 derives the Euler equations for this model, and
section 4.4 evaluates the impulse-response functions for alternative ﬁs-
Income and Consumption Taxes                                                 71



cal policy regimes. The ﬁnal section compares welfare for alternative
tax regimes. The application of the model to understand the interplay
of government expenditures and tax regimes is illustrated in the ﬁnal
section.

4.2   Model with Taxes

The main change to the model is the introduction of taxes and endoge-
nous government expenditure. We keep the tax system simple: taxes
are levied on wage income and/or on consumption.

4.2.1 Household Euler Equations
The household intertemporal budget constraint is now amended to in-
clude tax payments
"                              # "                             #
                                                      f
  ð1  t1 ÞWt Lt þ Pt þ Ptk Kt     ð1 þ t2 ÞPt Ct þ Pt It þ Bt
                                ¼            
                                                                 ;
   þ ð1 þ Rt1 ÞBt1 þ St Ft       þ ð1 þ Rt1   þ Ft ÞSt Ft1

where t1 is the income tax rate and t2 is the consumption tax rate.
The Lagrangian problem becomes
            8                     2                          f         39
            >
            >                         ð1 þ t2 ÞPtþi Ctþi þ Ptþi Ktþi     >
                                                                         >
            >
            >
            >                     6 þ B þ ð1 þ R  ÞS F                7>>
                                                                         >
     Xy     <                     6     tþi          t1þi  tþi  t1þi 7 =
          i                       6                                    7
L¼       b UðCtþi ; Ltþi Þ  Ltþi 6  ð1  t1 ÞWtþi Ltþi  Ptþi 7 :
            >                     6                                    7>
     i¼0    >
            >
            >                     4  P k Ktþi  ð1 þ Rt1þi ÞBt1þi 5>  >
                                                                         >
            >
            :                          tþi                               >
                                                                         ;
                                                Stþi Ftþi

The ﬁrst-order conditions are

Ch
 t ¼ Lt ð1 þ t2 ÞPt ;                                                   ð4:1Þ

L$
 t ¼ Lt ð1  t1 ÞWt ;                                                   ð4:2Þ

  f
Pt ¼ Ptk ;                                                              ð4:3Þ

Lt ¼ Ltþ1 bð1 þ Rt Þ;                                                   ð4:4Þ

Lt St ¼ Ltþ1 bð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 ;                            ð4:5Þ

where the risk premium is
72                                                                           Chapter 4



Ft ¼ signðFt1 Þ  j½eðjFt1 jFÞ  1:                                          ð4:6Þ

For completeness, the two equations describing the demand for
imports and its price are

Kt ¼ It ;                                                                        ð4:7Þ

  f
Pt ¼ Pt St :                                                                    ð4:8Þ

4.2.2 Firms—Production and Calvo Pricing
The equations describing the behavior of each ﬁrm are the same as in
chapter 3. The relevant aggregate equations are

Yt ¼ Zt ½ð1  a1 ÞðLt Þ k1 þ a1 ðKt Þ k1 1=k1 ;                                 ð4:9Þ

lnðZt Þ ¼ r lnðZt1 Þ þ ð1  rÞ lnðZÞ þ t ;            t @ Nð0; sz2 Þ;        ð4:10Þ

Yt ¼ Ct þ Gt þ Xt ;                                                             ð4:11Þ

  p1                             p1
At ¼ Yt ðPtd Þ z At þ bxAtþ1 ;                                                  ð4:12Þ

  p2                        p2
At ¼ Yt ðPtd Þ z þ bxAtþ1 ;                                                     ð4:13Þ

            p1
        At
Pta ¼       p2
                 ;                                                              ð4:14Þ
        At
        (                                                          )
             1
             Z ½ð1  aÞðaWÞ
                            k=ðk1Þ
                                    þ aðð1  aÞP k Þ k=ðk1Þ 1=k
At ¼                      1=ðk1Þ
                                                                         ;      ð4:15Þ
                                      k         k 1=ðk1Þ
                      ½WðaWÞ         þ P ðð1  aÞP Þ          

Pt ¼ ½xðPt1 Þ 1z þ ð1  xÞðPta Þ 1z 1=ð1zÞ :                               ð4:16Þ

4.2.3 Monetary Policy
As in earlier chapters we assume that the central bank follows a very
simple Taylor (1993) rule aimed solely at inﬂation stabilization:

Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt  p~Þ;           f1 > 1;                 ð4:17Þ
         
      Pt 4
pt ¼         1:
     Pt1
Income and Consumption Taxes                                             73



Note that we have simpliﬁed the analysis by not considering an output
gap in the rule. As mentioned above, since we are comparing mone-
tary and ﬁscal rules for different distorted economies, it is not clear
that the best measure of potential output is the output generated under
a fully ﬂexible pricing system.

4.2.4 Taxes and Domestic Debt
Government spending G is assumed to be sensitive to the size of the
public debt, B relative to its steady-state value B:
Gt ¼ G þ w1 ðBt1  BÞ                                               ð4:18Þ

In other words, government expenditure has an automatic stabilizing
property.1 The Treasury/central bank receives taxes. It borrows to ﬁ-
nance government expenditure, and the evolution of the bonds is

Bt ¼ ð1 þ Rt1 ÞBt1 þ Pt Gt  ðt1 Wt Lt þ t2 Pt Ct Þ;               ð4:19Þ

where B is a one-period domestic bond.

4.2.5 Exports and Foreign Debt
Exports is still exogenously determined in this chapter:

Xt ¼ X:                                                              ð4:20Þ

The foreign debt evolves as follows:

              
St Ft ¼ ð1 þ Rt1 þ Ft1 ÞSt Ft1 þ ðSt Pt It  Pt Xt Þ:            ð4:21Þ

4.2.6   Calibration

Steady-State Initial Values The calibrated values are the same as in
the previous chapter. The monetary policy parameters are f1 ¼ 1:5
and f2 ¼ 0:9, and the income and consumption tax rates are set re-
spectively as t1 ¼ 0:2 and t2 ¼ 0:1. Using the same normalization as
before (Z ¼ 1, S ¼ 1:0, P ¼ 1:0), and the same pre-set foreign variables
(P  ¼ 1:0, R  ¼ 0:04), we solve for the initial steady-state values of the
other variables so that the initial values of foreign and domestic debt
are zero (F ¼ B ¼ 0) and the Euler equations are satisﬁed. As before, in
the fully stochastic simulations, in which we examine welfare based on
consumption and labor, the effect of initialization is mitigated by dis-
carding the ﬁrst 15 percent of the sample size. We note too that this
74                                                                  Chapter 4



model is speciﬁed and calibrated for the case where the steady-state
inﬂation rate is assumed to be zero. The main point here is that the ini-
tial steady-state values will now be dependent on the tax regimes and
be different from the steady-state values in chapters 2 and 3.

4.3    Model Solution

4.3.1 Decision Rules
As in chapter 3 we have four decision rules: one for consumption C,
one for the exchange rate S, and two for the price (one for the numera-
tor A p1 and one for the denominator A p2 ). But now we have domestic
bonds as an additional state variable:

C^t ¼ c c ðW c ; xt Þ;

S^t ¼ c s ðW s ; xt Þ;

  p1
A^t ¼ c p1 ðW p1 ; xt Þ;

  p2
A^t ¼ c p2 ðW p2 ; xt Þ;

xt ¼ fðZt  ZÞ; ðFt1  FÞ; ðRt1  RÞ; ðBt1  BÞg:

The approximating functions c c , c s , c p1 , and c p2 are again neural net
speciﬁcations with the following form:

Dtc ¼ W1c ðZt  ZÞ þ W2c ðFt1  FÞ þ W3c ðRt1  RÞ þ W4c ðBt1  BÞ;
                                 
                    1
C^t ¼ C                       0:5 ;
              1 þ expðDtc Þ

Dts ¼ W1s ðZt  ZÞ þ W2s ðFt1  FÞ þ W3s ðRt1  RÞ þ W4s ðBt1  BÞ;
                               
                 1
S^t ¼ S                    0:5  ;
           1 þ expðDts Þ

  p1          p1            p1             p1                p1
Dt ¼ W1 ðZt  ZÞ þ W2 ðFt1  FÞ þ W3 ðRt1  RÞ þ W4 ðBt1  BÞ;
                              !
  p1             1
A^t ¼ A p1           p1
                          0:5 ;
           1 þ expðDt Þ
Income and Consumption Taxes                                          75


 p2           p2              p2            p2            p2
Dt ¼ W1 ðZt  ZÞ þ W2 ðFt1  FÞ þ W3 ðRt1  RÞ þ W4 ðBt1  BÞ;
                             !
^ p2   p2
                1
At ¼ A               p2
                         0:5 :
          1 þ expðDt Þ

4.3.2 Euler Errors
The Euler errors now include the effects of taxation:
                               "                #
 c      C^h
          t          1                 C^h
                                         tþ1
t ¼                          b                    ;
     ð1 þ t2 ÞP^t ð1 þ Rt Þ        ð1 þ t2 ÞP^tþ1
         "                         #    "           #
     ^h
     C             ^t
                   S                           ^h
                                               C
ts ¼ t                               b S^tþ1  tþ1
                                                      ;
      Pt ð1 þ Rt þ Ft þ Ft0 Ft Þ             Ptþ1

           p1                       p1
        A^t     Yt ðPt Þ z At þ bxA^tþ1
tP ¼      p2
                                  p2
                                        :
        A^t      Yt ðPt Þ z þ bxA^ tþ1


4.3.3 Accuracy Checks
Table 4.1 and ﬁgure 4.1 show the mean (standard error) of the Judd-
Gasper statistics and their corresponding histograms. Table 4.2 shows
the rejection probabilities for the Den-Hann Marcet test statistics, and
ﬁgure 4.2 shows the cumulative density function.

4.4     Stochastic Simulations

4.4.1 Impulse-Response Analysis
To ensure that the calibrated model is stable, and makes economic
sense, it is useful to do an impulse-response analysis. As in earlier
chapters we set the shock to the log of the productivity index at 0.1, at
period 25, and zero thereafter. Figure 4.3 shows the impulse-response
paths for the model, which now includes sticky prices, income and
consumption taxes, plus an endogenous government expenditure that
is sensitive to the deviation of domestic debt from its steady-state
value.
   Following a productivity shock, we see an increase in consump-
tion, but we note that the steady-state level with taxes is below the
steady-state level without taxes. The exchange rate depreciates, labor
services fall, and the real wage increases. The trade balance worsens
76                                                 Chapter 4


Table 4.1
Judd-Gaspar statistic ð102 Þ
                                                         p
                                 jtc j   jts j       jt j
                                  Ct       St           Pt
Mean                             0.2053   0.7921       0.0355
Standard deviation               0.0117   0.0449       0.0021




Figure 4.1
Judd-Gasper statistic
Income and Consumption Taxes                                        77


Table 4.2
DenHann-Marcet test
                                   Lag order

                                   1           2       3        4
Lower region ð p < 0:05Þ           0.046       0.048   0.048    0.050
Upper region ð p > 0:95Þ           0.058       0.030   0.044    0.048




Figure 4.2
DenHann-Marcet test for accuracy


(because nominal import payments rise with the exchange rate),
and the ﬁscal balance improves (because both labor income and
nominal consumption increase). Note, however, that price (and hence
interest rate) rises relative to the system without taxes. The price
rise occurs to equate the supply of output with the increased demand
from households (due to higher consumption) and the government
(whose expenditure increased in this model with the fall in domestic
debt).
78                                                                         Chapter 4




Figure 4.3
Impulse responses following a productivity shock: with (solid line) and without (dashed
line) taxes and endogenous government expenditure


4.4.2 Welfare Comparisons
Welfare under a tax regime will be unambiguously lower than wel-
fare in a no-tax regime. But what about the correlations? Figure
4.4 shows the correlations of productivity with price, exchange rate
and output in an economy with sticky prices, and without and with
taxes. The most signiﬁcant result is the change in correlation of produc-
tivity and price from being negative (without taxes) to positive (with
taxes).
Income and Consumption Taxes                                           79




Figure 4.4
Correlations


4.5   Scenario Analysis

4.5.1 Alternative Fiscal Policy Regimes
Taxes can be levied either on labor income or on consumption:

Taxt ¼ t0 þ t1 Wt Lt þ t2 Pt Ct ;                                  ð4:22Þ

where t0 is a lump-sum tax while t1 and t2 are the respective tax rates
on labor income (pay-as-you-earn system) and consumption. Income
taxes distorts the incentive to work while consumption taxes affect the
prices of goods purchased.
  In the section above we examined a system where households are
taxed more on their wage income than on the goods they buy, t1 > t2 .
In this scenario we examine the case where the income tax is less than
the consumption tax, t1 < t2 . Since the tax system affects the ﬁrst-order
80                                                                           Chapter 4




Figure 4.5
Impulse response functions: case where income tax is less than the consumption tax (solid
line) and case where income is greater than the consumption tax (dashed line)


conditions differently, the steady-state values of the key variables
appear in table 4.3 for the two tax regimes studied. Note how the
higher consumption tax encourages more production (which is sup-
ported by more labor), while the lower income tax is associated with
higher labor.

4.5.2 Impulse-Responses
Figure 4.5 shows the response paths across tax regimes under a com-
mon set of assumptions for monetary policy. Following a productivity
shock, we see an increase in consumption, a depreciation of the ex-
change rate, and increases in both the price and interest rate. The trade
Income and Consumption Taxes                                         81


Table 4.3
Steady-state values for different tax regimes
Variables             t1 ¼ 0:2, t2 ¼ 0:1        t1 ¼ 0:1, t2 ¼ 0:2

C                     0.3713                    0.3759
Y                     0.4777                    0.5015
K                     0.0268                    0.0282
L                     0.7357                    0.7725




Figure 4.6
Welfare differences


balance worsens (because imports increase) and the ﬁscal balance falls
(because taxes rises).
  But what about the welfare? The top panel in ﬁgure 4.6 shows the
welfare for the case when consumption taxes dominate, and the bot-
tom panel shows the differences between the two system (welfare con-
sumption minus welfare income). The negative numbers show that
welfare under a tax regime with higher consumption taxes dominates
welfare under a tax regime with higher income taxes.
82                                                           Chapter 4




Figure 4.7
Impulse response from VAR model with artiﬁcial data


4.6   Concluding Remarks

This chapter has compared alternative ﬁscal regimes when there are
recurring productivity shocks and the economy is subject to the distor-
tions of monopolistic competition. Our aim was to show that the meth-
odology can be applied to an economy with distortion from taxes.
Further distortions coming from pricing to market and incomplete
pass-through and sticky wage settings, as well as inertia in spending
due to habit persistence, will come to play as we move through the
chapters.
   From a welfare point of view, we see that consumption taxes yield
better outcomes than taxes on labor income. This is a well-known re-
sult in the ﬁeld of public ﬁnance. Labor income taxes, of course, are
more common. One reason is that it is politically more difﬁcult to
switch to consumption taxes once labor income taxes are in place. But
Income and Consumption Taxes                                         83



the more obvious reason is that labor income taxes are much easier to
collect (at payroll time), and more predictable, than consumption taxes.

Computational Exercise: Model Validation with VARs

The vector autoregressive (VAR) model is a popular macroeconometric
tool for studying the interactions between key economic variables.
Sims’s seminal paper, ‘‘Macroeconomics and Reality,’’ argued that
these methods can also be used to evaluate macroeconomic models.
Put simply, we can apply a VAR to actual observed data and a VAR
to the model-generated data, and compare their respective impulse-
response paths. If the impulse-response paths estimated from the
model-generated data falls within the conﬁdence bands of the impulse-
response paths based on observed data, then we have some evidence
to suggest that the DSGE model bears some semblance to the real
world.
   An interesting alternative exercise is to generate some ‘‘artiﬁcial’’
data from our nonlinear DSGE model, estimate a linear VAR, generate
impulse-response paths, and then see if they are similar to the impulse-
response paths from the underlying nonlinear model. In this exercise
we estimate a bivariate VAR for our model-generated data: productiv-
ity and price. Figure 4.7 shows that the VAR model with one lag yields
estimated impulse-response paths that are consistent with the ‘‘theoret-
ical’’ or model-simulated impulse response path in ﬁgure 4.3. In this
path the price level rises following a one standard deviation shock to
productivity. Compare this result with those generated from a VAR
model with two lags. What would you conclude about the behavior of
price to a productivity shock from this analysis?
   This exercise illustrates a point made by Chari, Kehoe, and McGrat-
ten (2005): there can be large differences between the VAR-generated
impulse-response and the theoretical impulse-response. Indeed one
should not be too surprised that multivariate linear VAR models can
produce divergent results from nonlinear model-generated impulse-
responses.
5       Current Account Dynamics




5.1   Introduction

This chapter takes up the relationship between current account and ﬁs-
cal balances in the context of an economy that imports capital and con-
sumption goods. In this framework we examine the behavior of ﬁscal
and current account balances under two scenarios: shocks to produc-
tivity and shocks to government expenditure.
   The motivation for the scenario analysis comes from comments by
Bradford De Long and former Undersecretary of the Treasury John
Taylor about the US experience of ‘‘twin’’ current account and ﬁscal
deﬁcits. In his Weblog De Long (2004) notes that ‘‘we have a large
trade deﬁcit now and did not back in 1997, because the federal budget
deﬁcit is much larger now than it was then.’’ In contrast, Taylor (2004)
argues that the US trade deﬁcit simply reﬂects the growth of US pro-
ductivity, leading to capital formation growing faster than US saving.
   Martin Feldstein and Charles Horioka (1980) have argued that for a
highly open economy, savings–investment correlations should be low
or insigniﬁcant when there is perfect capital mobility. In this context,
since a government deﬁcit represents negative government saving, the
ﬁscal deﬁcit would be mirrored by a current account deﬁcit, since it
lowers economywide saving relative to investment. For their part,
Feldstein and Horioka reported positive savings–investment correla-
tions, thereby challenging the assumption of perfect capital mobility,
at least for the United States.
   However, the Feldstein-Horioka thesis is not without controversy.
The strongly positive twin deﬁcit relationship assumes the absence of
Ricardian equivalence, that is, that taxpayers will not discount the
expected future tax liabilities of government dissaving and thus raise
86                                                            Chapter 5



personal savings to offset the ﬁscal deﬁcit effects on the current
account. Furthermore, as Mendoza (1991) has pointed out, theoretical
work has cast doubt on the inference of Feldstein and Horioka relating
positive savings–investment correlations to limited or imperfect capital
mobility.
   Obstfeld (1986) has shown that a dynamic general equilibrium
model subject to recurring productivity shocks can produce high
savings–investment correlations even with perfect capital mobility.
Similarly Finn (1990) has shown that a two-country general equilib-
rium model can generate any kind of savings–investment correlation
depending on the stochastic structure of the technological distur-
bances. The empirical literature also gives divergent estimates about
the effects of ﬁscal deﬁcits on trade deﬁcits (see in particular recent
econometric time-series studies of several European countries by Bus-
sière, Fratzscher, and Müller 2005).
   Section 5.2 follows Erceg, Guerrieri, and Gust (2004) in using a dy-
namic stochastic general equilibrium modeling approach to examine
the correlations of ﬁscal and trade balances under recurring productiv-
ity and government expenditure shocks. Like Erceg, Guerrieri, and
Gust, the model used here includes sticky prices and incorporates the
distortionary effects of monopolistic competition. However, our model
also includes features crucial to an analysis of current account and
budget deﬁcits. The model incorporates an export demand function
that responds to the real exchange rate, endogenous risk premia that
depend on the foreign debt, and a distortionary income and consump-
tion tax system.1 As usual, we pay special attention to the accuracy of
the approximations before we assess the economic implications from
stochastic simulations. This is contained in section 5.3. In section 5.4
we examine the impulse-response functions for alternative export de-
mand regimes, one with relatively high and one with relatively low
elasticity with respect to the real exchange rate.

5.2   Model with Endogenous Exports

The model in chapter 4 with Calvo pricing and taxes is now modiﬁed
to allow for more international interactions. Households now import
consumption goods as well as capital-type goods. Exports are also no
longer ﬁxed but are endogenously determined. They now respond to
changes in the real exchange rate.
Current Account Dynamics                                                            87



5.2.1 Households—Consumption and Labor
The ﬁve equations that characterize household consumption, labor,
and ﬁnancial decisions carry over from chapter 4:

Ch
 t ¼ Lt ð1 þ t2 ÞPt ;                                                             ð5:1Þ

L$
 t ¼ Lt ð1  t1 ÞWt ;                                                             ð5:2Þ

  f
Pt ¼ Ptk ;                                                                        ð5:3Þ

Lt ¼ Ltþ1 bð1 þ Rt Þ;                                                             ð5:4Þ

Lt St ¼ Ltþ1 bð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 ;                                     ð5:5Þ

                                        
           
Ft ¼ signðFt1 Þ  j½eðjFt1 jF Þ  1:                                          ð5:6Þ

  However, the household now demands domestic Ctd and imported
          f
goods Ct such that composite consumption Ct is given (using the
Dixit-Stiglitz aggregators) by the following expression:
                                                       f
Ct ¼ ½ð1  g1 Þ1=y1 ðCtd Þðy1 1Þ=y1 þ ðg1 Þ1=y1 ðCt Þðy1 1Þ=y1 y1 =ðy1 1Þ :

The parameter y1 > 0 is the intratemporal elasticity of substitution be-
tween domestically produced goods Ctd and internationally produced
         f
goods Ct ; the parameter g1 represents the share of foreign goods in
total consumption. Minimizing expenditures gives the demand for do-
mestic and imported goods as
                        d y1
                        Pt
Ctd ¼ ð1  g1 Þ                 Ct ;                                              ð5:7Þ
                        Pt
                      !y1
                  f
  f            Pt
Ct ¼ g 1                     Ct :                                                 ð5:8Þ
               Pt

Each composite good is a bundle of differentiated goods j using a
Dixit-Stiglitz aggregator
        ð 1                        z=ðz1Þ
Ctd ¼          ðCj;d t Þðz1Þ=z dj             ;
           0
88                                                           Chapter 5


        ð 1                           z=ðz1Þ
  f                 f
Ct ¼             ðCj; t Þðz1Þ=z dj                ;
             0

where j denotes the domestic goods and the elasticity of substitution
among differentiated goods is given by z > 1. Standard cost minimiza-
tion yields the demand for each differentiated goods as
                      !z
             Pj;d t
Cj;d t ¼                    Ctd ;
             Ptd

                  f !z
  f
             Pj; t              f
Cj; t ¼           f
                            Ct ;
             Pt
                            f
where Pj;d t , Pj; t are the prices of each differentiated domestic and
                                 f
imported good, and Ptd and Pt , are given by
        ð 1                        1=ð1zÞ
Ptd ¼            ðPj;d t Þ 1z dj              ;
             0

        ð 1                        1=ð1zÞ
  f                 f
Pt ¼             ðPj; t Þ 1z dj               :
             0

The consumer price index Pt is given by the following formula:
                                                   f
Pt ¼ ½ð1  g1 ÞðPtd Þ 1y1 þ g1 ðPt Þ 1y1 1=ð1y1 Þ :           ð5:9Þ

  Recall that the household sector also includes entrepreneurs who
own capital stock Kt and hold shares in all the ﬁrms in the economy.
Thus far we have assumed that there is no capital accumulation or de-
preciation and that all capital is imported:
Kt ¼ I t ;                                                       ð5:10Þ

where I is imported investment goods. The entrepreneurs now buy
               f
import goods Yt at the price St Pt and rebundle them for consumption
  f
Ct and investment It :
  f                   f
Yt ¼ It þ Ct ;                                                   ð5:11Þ

  f
Pt ¼ St Pt :                                                    ð5:12Þ
Current Account Dynamics                                                                 89



The importer sells these goods at a domestic currency price P f , which
is set to cover costs. Note that since all capital is imported ðK ¼ IÞ, the
rental price of capital Ptk is also equal to the price of the intermediate
          f
goods Pt .

5.2.2 Firms—One-Sector Production and Pricing
The equations describing the behavior of ﬁrms is the same as in chapter
3. The relevant aggregate equations are

Yt ¼ Zt ½ð1  a1 ÞðLt Þ k1 þ a1 ðKt Þ k1 1=k1 ;                                ð5:13Þ

lnðZt Þ ¼ r lnðZt1 Þ þ ð1  rÞ lnðZÞ þ t ;            t @ Nð0; sz2 Þ;        ð5:14Þ

Ytd ¼ Ctd þ Gt þ Xt ;

  p1                              p1
At ¼ Yt ðPtd Þ z At þ bxAtþ1 ;                                                  ð5:15Þ

  p2                         p2
At ¼ Yt ðPtd Þ z þ bxAtþ1 ;                                                     ð5:16Þ

            p1
        At
Pta ¼       p2
                 ;                                                              ð5:17Þ
        At
        8     "                    #   "                                      #9
        < 1  ð1  aÞðaWÞ k=ðk1Þ 1=k                  WðaWÞ 1=ðk1Þ         =
At ¼                                                                                 ;
        : Z          þ aðð1  aÞP k Þ k=ðk1Þ        þ P k ðð1  aÞP k Þ 1=ðk1Þ ;

Ptd ¼ ½xðPt1
          d
              Þ 1z þ ð1  xÞðPta Þ 1z 1=ð1zÞ :                              ð5:18Þ

5.2.3       Monetary and Fiscal Authorities

Monetary Policy The central bank is assumed to adopt a Taylor
rule, where the actual interest rate follows a partial adjustment mecha-
nism

Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt  p~Þ;           f1 > 1;                 ð5:19Þ

         
      Pt 4
pt ¼         1:
     Pt1
90                                                                 Chapter 5



Taxes and Domestic Debt As in chapter 4, government spending G
is assumed to be sensitive to the size of the public debt B relative to its
steady-state value B:
Gt ¼ G þ w1 ðBt1  BÞ:                                               ð5:20Þ

The one-period domestic bond evolves as
Bt ¼ ð1 þ Rt1 ÞBt1 þ Pt Gt  ðt1 Wt Lt þ t2 Pt Ct Þ:                ð5:21Þ

The ﬁscal balance is deﬁned as (þ is a surplus)

ðBt  Bt1 Þ ¼ ðt1 Wt Lt þ t2 Pt Ct Þ  Pt Gt  Rt1 Bt1 :

5.2.4 Exports and Foreign Debt
Exports depend on the lagged real exchange ðSt1 =Pt1 Þ relative to its
steady-state value ðS=PÞ:2
                                  
                        St1         S
lnðXt Þ ¼ lnðXÞ þ w2 ln         ln     :                        ð5:22Þ
                        Pt1         P

The foreign debt evolves as follows:

                                            f
St Ft ¼ ð1 þ Rt1 þ Ft1 ÞSt Ft1 þ St Pt Yt  Ptd Xt :              ð5:23Þ

The current account balance is given by the following expression:
                                    f
St ðFt  Ft1
            
                Þ ¼ Ptd Xt  St Pt Yt  ðRt1
                                                          
                                               þ Ft1 ÞSt Ft1 :

5.3    Computational Analysis

5.3.1 Decision Rules and Euler Errors
The four decision rules, one for consumption C, one for the exchange
rate S, and two for the price (one for the numerator A p1 and one for
the denominator A p2 ) are the same as those in chapter 4:

C^t ¼ c c ðW c ; xt Þ;

S^t ¼ c s ðW s ; xt Þ;

  p1
A^t ¼ c p1 ðW p1 ; xt Þ;

  p2
A^t ¼ c p2 ðW p2 ; xt Þ;
Current Account Dynamics                                               91



xt ¼ fðZt  ZÞ; ðFt1  FÞ; ðRt1  RÞ; ðBt1  BÞg:

The Euler errors are also the same as those in chapter 3:
                               "                #
 c      C^h
          t          1                 C^h
                                         tþ1
t ¼                          b                    ;
     ð1 þ t2 ÞP^t ð1 þ Rt Þ        ð1 þ t2 ÞP^tþ1
              "                             #    "           #
     C^h                   S^t                    ^   C^h
                                                         tþ1
ts ¼ t                                        b Stþ1         ;
      Pt          ð1 þ Rt þ Ft þ Ft0 Ft Þ            Ptþ1

           p1                       p1
        A^t     Yt ðPt Þ z At þ bxA^tþ1
tP ¼      p2
                                  p2
                                        :
        A^t      Yt ðPt Þ z þ bxA^   tþ1

The coefﬁcients of the decision rules are based on minimization of the
sum of squared Euler equation errors.

5.3.2 Accuracy Checks
Table 5.1 and ﬁgure 5.1 shows the results from an examination of the
Judd-Gaspar error measures. We see that the errors do not differ by
much and represent less than 1 percent of their respective decision-
rule variables.
   Table 5.2 and ﬁgure 5.2 shows the results from an examination of the
DenHann-Marcet test statistics. These results suggest that the approxi-
mations are robust.

5.4     Productivity Shocks

5.4.1 Impulse-Response Analysis
Figure 5.3 shows the impulse-responses following a productivity shock
for a model with sticky prices, taxes, and endogenous government ex-
penditure and now endogenous exports sensitive to the real exchange
rate. The results show that a temporary increase in the productivity
index leads to an increase in consumption, a fall in labor services, an
increase in real wages and a depreciation of the exchange rate. These
results are not qualitatively different from the case discussed in chapter
4. However, export demand now reacts to the depreciation and the for-
eign debt actually improves after an initial deterioration. The boost to
the economy yields a larger ﬁscal surplus. Note that the adjustment in
prices (and hence interest rate) are larger in this case to accommodate
the increased demand from exports.
92                                                 Chapter 5


Table 5.1
Judd-Gaspar statistic ð102 Þ
                                                         p
                                 jtc j   jts j       jt j
                                  Ct       St           Pt
Mean                             0.2918   0.6051       0.5910
Standard deviation               0.0174   0.0369       0.0355




Figure 5.1
Judd-Gasper statistic
Current Account Dynamics                                                 93


Table 5.2
DenHann-Marcet test
                                  Lag order

                                  1           2         3            4
Lower region ð p < 0:05Þ          0.040       0.042     0.036        0.058
Upper region ð p > 0:95Þ          0.036       0.038     0.036        0.044




Figure 5.2
DenHann-Marcet test of accuracy


5.4.2 Stochastic Simulations
Figure 5.4 presents selected correlations. We see that the positive price–
output correlations are stronger for the case where exports respond to
changes in the real exchange rate. However, given the lagged response
of exports to real exchange-rate depreciations, the correlations between
the per period deterioration in the trade balance and changes in the ex-
change rate are negative. Note, these correlations become positive as
the lag increases. This result is an example of the J-curve phenomenon
94                                                                         Chapter 5




Figure 5.3
Impulse responses following a productivity shock: with (solid line) and without (dashed
line) endogenous exports


where, following a depreciation of the exchange rate, the trade balance
initially worsens and then improves over time.

5.5   Scenario Analysis

5.5.1 Low Export Elasticity
In this scenario we examine the sensitivity of results to alternative pa-
rameter values. This is suggested by the study of Senhadji and Monte-
negro (1999) who found that export elasticities of countries vary quite a
bit, with Asian countries having the highest elasticities with respect to
prices and African countries the lowest. In this scenario we compare
the results derived thus far with a relatively high export price elasticity
Current Account Dynamics                                             95




Figure 5.4
Macroeconomic correlations


ðw ¼ 1:0Þ with the case of low elasticity ðw ¼ 0:1Þ. As before, we check
the accuracy of the estimation by examining the Judd-Gaspar error
measures and the Den-Hann Marcet statistics.
   Figure 5.5 shows the impulse-responses following a productivity
shock of 0.1, for both high and low elasticity of exports with respect
to the real exchange rate. The results show that a temporary increase
in productivity leads to an improvement in the ﬁscal balance, as
expected. Consumption rises in both cases of high and low export elas-
ticity. However, the current account worsens under low elasticity as
the increased demand for imports dominates the effect of favorable
export responses.
   How do the correlations between key macroeconomic variables
change with the value of the export price elasticity? Figure 5.6
shows that the correlations between productivity and consumption are
hardly affected, but the strong positive relationship between price
96                                                                              Chapter 5




Figure 5.5
Impulse responses: high (dashed line) and low (solid line) elasticity of export demand


and output (which allows for a strong export response) is lost when
the export elasticity is low. More interesting, the correlations between
the ﬁscal–current account balances change signs—they are weakly
negative under high elasticity and strongly positive under low export
elasticity. The effect of the lower export elasticity with respect to
the real exchange rate is to shift the histogram of the correlations to the
right, to such a degree that the correlations become unambiguously
positive.

5.5.2 Government Expenditure
The next scenario we consider is the effect of shocks to government
expenditure on the real exchange rate and on the current account. In
Current Account Dynamics                                                97




Figure 5.6
Correlations


particular, we would like to know whether there is a positive correla-
tion between the ﬁscal and current account deﬁcits.
   The equation describing the behavior of G is altered in two ways.
First, the response of G to the size of the debt is halved to allow the ﬁs-
cal authority to be less concerned (but not completely independently
of) the size of the domestic debt. Second, a shock term is added:

Gt ¼ G þ 0:5w1 ðBt1  BÞ þ t ;    t @ Nð0; sg2 Þ:

  Figure 5.7 compares the impulses from a shock to government ex-
penditure with the impulses from a shock to productivity. Output in-
creases by less and consumption falls. Domestic debt soars, as expected.
  Figure 5.8 shows selected correlations. Note the positive correlations
of productivity shocks and consumption and the negative correlations
98                                                                         Chapter 5




Figure 5.7
Impulse responses following a shock to government expenditure (solid line) and produc-
tivity (dashed line)


of government shocks and consumption. As shown in the middle panel,
the real exchange rate depreciates following productivity shocks and
appreciates following government shocks as expected. Note too the
strong positive correlation between the two deﬁcits.

5.6   Concluding Remarks

Why are some current account and budget deﬁcits positively and some
negatively related? The simulations in this chapter suggest that the
type of shock matters. Positive correlations result from productivity
shocks because both the ﬁscal and current account balances improve;
Current Account Dynamics                                              99




Figure 5.8
Correlations between key variables


positive correlations can also result from government expenditure
shocks because both the ﬁscal and current account balances deteriorate.
However, more interesting, the elasticity of exports can inﬂuence the
sign of the correlation. The simulations in this chapter show that in
the presence of continuing productivity shocks, the ﬁscal and trade
balances are ‘‘twins,’’ or positively correlated, under a relatively high
export elasticity and negatively correlated under a relatively low ex-
port elasticity.
   The model we used in this chapter incorporates many of the distor-
tions and stickiness popular in the new neoclassical synthesis or new
open economy macroeconomics, such as monopolistic competition,
sticky price-setting behavior for prices, and distortionary taxes. In the
next chapter we introduce capital and real frictions in the form of ad-
justment costs for investment.
100                                                             Chapter 5



Computational Exercise: Real Exchange-Rate Volatility

In this chapter we drew attention to the changing correlations of cur-
rent account and ﬁscal balances. A related issue in open economy
models characterized by sticky prices is the degree of real exchange
rate volatility.
   Chari, Kehoe, and McGrattan (2002) have argued that new Keynes-
ian sticky price models for open economies require a relatively high
coefﬁcient of relative risk aversion to match the observed volatility
of the real exchange rate found in the data for most industrialized
countries. They measure the real exchange-rate volatility as the ratio
of the standard deviation of the logarithm of the real exchange rate
to the standard deviation of the logarithm of real GDP.
   Figure 5.9 shows the real exchange rate and real output, in loga-
rithms, for one realization, of sample size 1,000, from our model. The
real exchange-rate volatility, measured relative to the volatility of real




Figure 5.9
Logarithms of real exchange rates and output: simulated data
Current Account Dynamics                                              101



output, is about 1. Chari, Kehoe, and McGrattan (2002) report mea-
sured real exchange volatility ratios of 7 or more.
   The reason why the standard deviation of the real exchange rate, rel-
ative to the standard deviation of GDP, is so small, of course, is that we
assume a value of 1.5 for the coefﬁcient of relative risk aversion, repre-
sented by the parameter h, in the model simulations of this chapter.
Chari, Kehoe, and McGratten (2002, p. 534), for their model, report
that setting h ¼ 5 reproduces real exchange-rate volatility (relative to
GDP volatility) that is found in the data. A useful exercise for readers
is to change the speciﬁcation of h to higher values and examine how
the volatility of the real exchange-rate changes.
6       Capital and Tobin’s Q




6.1   Introduction

Until now we have assumed full depreciation of the capital stock so
that investment goods simply mean intermediate goods in production.
We now relax this assumption and allow the capital stock to depreciate
slowly. We also assume that there are adjustment costs for investment.
The model has now become more complex to accommodate pro-
duction technology and more realistic investment dynamics. It also
throws light on the Q variable and its role in the dynamics of capital
accumulation.
   As in the earlier chapter, we will present results for the case of a
shock to productivity. However, the experiment we are particularly
interested in is the role of the Q variable, introduced by Tobin (1969),
as an extra target of monetary policy.
   The focus on Q is inﬂuenced by Brainard and Tobin (1977), who
argued that Q plays an important role in the transmission of monetary
policy both directly via the capital investment decision of enterprises
and indirectly via consumption decisions. Thus volatility of Q has
implications for inﬂation and growth. Large swings in Q can lead to
systematic overinvestment, and in the open economy context, overbor-
rowing and serious capital account deﬁcits.
   This chapter is concerned with the thought experiment: What hap-
pens to consumption, inﬂation, and welfare if the central bank also
monitors Q? In particular, we will generate the welfare implications of
adopting a stance of monetary policy that includes targeting consumer
price inﬂation as well as changes in Q.
   The idea of using Q is motivated by the observation that many
economies experience asset price volatility (e.g., in the form of
104                                                              Chapter 6



exchange-rate instability in Australia or share-market bubbles in the
United States). The practice of controlling changes in goods prices is
taken for granted by many central banks, but there is no consensus
about the management of asset-price inﬂation, except in the sense that
it is not desirable for asset prices to be too high or too volatile. At the
World Economic Forum in Davos in 2003, Lawrence Summers sug-
gested that policy makers should use other tools, such as margin lend-
ing requirements or public jawboning, to combat asset-price inﬂation.
He compared raising interest rates to combat asset-price inﬂation to
a preemptive attack, and stated ‘‘it takes enormous hubris to know
when the right moment has come to start a war’’ (Summers 2003,
p. 1).
   Recent research shows that central bankers should not target asset
prices (e.g., for a closed economy study, see Bernanke and Gertler
1999, 2001; Gilchrist and Leahy 2002). However, Cecchetti, Genberg,
and Wadhwani (2002) have argued that central banks should react
to asset price misalignments. In essence, they show that when distur-
bances are nominal, reacting to close misalignment gaps signiﬁcantly
improves macroeconomic performance. Smets (1997) has also stressed
that the proper response of monetary policy to asset-price inﬂation
depends on the source of the asset-price movements. If productivity
changes are the driving force, accommodation is called for, and real in-
terest rates should remain unchanged. However, if the source is due to
nonfundamental shocks in the equity market, in the form of bullish
predictions about productivity, then monetary policy should raise in-
terest rates.
   The model in this chapter does not include an explicit ﬁnancial sec-
tor and consequently we are not in a position to address the issue of
asset price inﬂation. However, we can begin to think about the issue
indirectly by understanding the behavior of Q. In particular, we will
consider the rate of growth of Tobin’s Q as a potential target variable
for monetary policy. Our reasoning is that Q growth would be small
when the growth in the market valuation of capital assets corresponds
roughly with the growth of replacement costs. Since asset prices (in the
market value) are a lot less sticky than good prices (in the replacement
cost), the presence of high Q growth would be indicative of misalign-
ment of market value and replacement cost, in other words, an indica-
tion of an ‘‘excessive’’ change in the share price. Thus monitoring and
targeting Q growth may be viewed as a proxy policy for monitor-
Capital and Tobin’s Q                                                  105



ing and targeting asset-price inﬂation, but with the advantage that
the asset price is evaluated relative to a benchmark (the replacement
cost).
   The chapter is organized as follows. The model is described in
section 6.2, and the solution algorithm is presented in section 6.3.
Section 6.4 contains the simulation results for the alternative policy
frameworks.

6.2   Model with Capital Accumulation

The main change to the model is to expand the behavior of the private
sector to allow for capital accumulation. The behavior patterns of the
other agents are unaffected.

6.2.1 Householders and Entrepreneurs
The household sector includes entrepreneurs who own the capital
stock and hold shares in all the ﬁrms in the economy. The accumula-
tion equation for capital is now

                          C ðIt  dKt1 Þ 2
Kt ¼ It þ ð1  dÞKt1                      ;                         ð6:1Þ
                          2      Kt1

where I is imported investment goods and d is depreciation. We also
assume that the creation of capital occurs with an adjustment cost. The
adjustment term CðIt  dKt1 Þ 2 =2Kt1 picks up the quadratic adjust-
ment costs, which rise with the level of investment or disinvestment
(in excess of that required to replace capital) relative to the size of the
capital stock. The parameter C is the adjustment cost weight. This
speciﬁcation of adjustment costs is the form described in Canzoneri,
Cumby, and Diba (2005). These costs are introduced to induce some
sluggishness in the dynamics of investment and capital accumulation.
See, for example, Smets and Wouter (2003) for other speciﬁcations of
adjustment costs.
   As in earlier chapters, without an explicit ﬁnancial sector, the house-
hold lends directly to the domestic government and accumulates
bonds B that pay the nominal interest rate R. They can also borrow in-
ternationally and accumulate international debt F  at the rate R  þ F,
where F is the currency premium.
106                                                                          Chapter 6



  The Lagrangian problem becomes

      X
      y
L¼          bi
      i¼0

        8                        2                           f                    39
        >
        >                            ð1 þ t2 ÞPtþi Ctþi þ Ptþi Itþi þ Btþi          >
                                                                                    >
        >
        >                        6                                                7 >
                                                                                    >
        >
        >
        >                        6    þ ð1 þ Rt1þi þ Ftþi ÞStþi Ft1þi 7 >
                                                                                  >
                                                                                    >
        < UðCtþi ; Ltþi Þ  Ltþi 6                                                7 =
                                4 þ ðt 1   1ÞW    L
                                                 tþi tþi   P  tþi    P  k
                                                                               K
                                                                         tþi tþi
                                                                                  5   ;
        >
        >                                                                          >
                                                                                    >
        >
        >                                ð1 þ Rt1þi ÞB t1þi    S tþi F  tþi     >
                                                                                    >
        >
        >             h                                                         i   >
                                                                                    >
        >
        :
                                                                              2     >
                                                                                    ;
              Qtþi Ktþi  Itþi  ð1  dÞKt1þi þ C2 ðItþi dK        t1þi Þ
                                                                 Kt1þi


where Ft has the following symmetric functional form:
                               
           
Ft ¼ signðFt1 Þ  j½eðjFt1 jF Þ  1;                                          ð6:2Þ

where F  represents the steady-state value of the international
asset. The variable L is the familiar Lagrangian multiplier represent-
ing the marginal utility of wealth. The terms Q known as Tobin’s
Q, represent the Lagrange multiplier for the evolution of capital—they
are the shadow prices for new capital.1 Maximizing the Lagran-
gian with respect to Ct , Lt , Bt , Ft , Kt , and It yields the ﬁrst-order condi-
tions

qL
    ¼ Ch
       t  Lt ð1 þ t2 ÞPt ¼ 0;
qCt

qL
    ¼ L$
        t  Lt ðt1  1ÞWt ¼ 0;
qLt

qL
    ¼ Lt þ Ltþ1 bð1 þ Rt Þ ¼ 0;
qBt

qL
     ¼ Ltþ1 bð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 þ Lt St ¼ 0;
qFt
                                                    2         3
                                             2ðItþ1  dKt Þd
qL                                       C66       Kt         7
                                                              7
    ¼ Lt Ptk  Qt þ bQtþ1 ð1  dÞ  bQtþ1 6                 2 7 ¼ 0;
qKt                                      2 4 ðItþ1  dKt Þ 5
                                             
                                                     Kt2
Capital and Tobin’s Q                                                               107



qL          f          C 2ðIt  dKt1 Þ
    ¼ Lt Pt þ Qt  Qt                  ¼ 0:
qIt                    2      Kt1

Again, these conditions are identical across all households, and they
hold in the aggregate:

Ch
 t ¼ Lt ð1 þ t2 ÞPt ;                                                              ð6:3Þ

L$
 t ¼ Lt ð1  t1 ÞWt ;                                                              ð6:4Þ

Lt ¼ Ltþ1 bð1 þ Rt Þ;                                                              ð6:5Þ

Lt St ¼ Ltþ1 bð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 ;                                      ð6:6Þ
                    "                                                     #
                                                                        2
                               CðI   tþ1    dKt Þd   CðI tþ1   dK t Þ
Qt ¼ Lt Ptk þ bQtþ1 ð1  dÞ þ                       þ                       ;      ð6:7Þ
                                        Kt                  2Kt2
     f                      ðIt  dKt1 Þ
Lt Pt ¼ Qt  Qt C                         :                                        ð6:8Þ
                                Kt1

   Compared to the earlier chapters, the model now includes two
extra equations which contain the forward looking variable Q. Equa-
tions (6.7) and (6.8) show that the solutions for Qt , which determine
investment and the evolution of capital, come from forward-looking
stochastic Euler equations. The shadow price of capital includes the
contribution from the discounted value of adjustment costs due to
new capital stock and the effect of depreciation.
   Again, for completeness, the other equations describing household
behavior are
                                                       f
Ct ¼ ½ð1  g1 Þ1=y1 ðCtd Þðy1 1Þ=y1 þ ðg1 Þ1=y1 ðCt Þðy1 1Þ=y1 y1 =ðy1 1Þ ;

                     d y1
                     Pt
Ctd ¼ ð1  g1 Þ              Ct ;                                                  ð6:9Þ
                     Pt

               f
                   !y1
  f         Pt
Ct ¼ g 1                  Ct :                                                    ð6:10Þ
            Pt

The consumer price index Pt is given by the following formula:
                                         f
Pt ¼ ½ð1  g1 ÞðPtd Þ 1y1 þ g1 ðPt Þ 1y1 1=ð1y1 Þ :                           ð6:11Þ
108                                                                              Chapter 6


                                                                             f
   As in chapter 5 the entrepreneurs buy import goods Yt at the price
                                            f
St Pt and rebundle them for consumption ðCt Þ and investment ðIt Þ:
  f      f
Yt ¼ Ct þ It ;                                                                      ð6:12Þ

  f
Pt ¼ Pt St ;                                                                       ð6:13Þ

where S is the exchange rate and P f  is the internationally determined
price, in foreign currency, of these imported goods. The importer sells
these goods at a domestic currency price P f that is set to cover costs.
                                                              f
Note that while the price of the imported investment is Pt , the rental
                     k
price of capital is Pt .

6.2.2 One-Sector Production
We are still in a one-good world. Hence, as in previous chapters, each
ﬁrm j produces differentiated goods using a constant elasticity of
substitution production function and the aggregate product Y is
demanded by households C d , by the government sector G, and by
foreigners (exports X). The aggregate equations are

Yt ¼ Zt ½ð1  a1 ÞðLt Þ k1 þ a1 ðKt Þ k1 1=k1                                      ð6:14Þ

lnðZt Þ ¼ r lnðZt1 Þ þ ð1  rÞ lnðZÞ þ t ;           t @ Nð0; sz2 Þ;             ð6:15Þ

Yt ¼ Ctd þ Gt þ Xt :                                                                ð6:16Þ

  We assume that ﬁrms set prices according to the Calvo (1983) stag-
gered price system, and the equations are
  p1                            p1
At ¼ Yt ðPtd Þ z At þ bxAtþ1 ;                                                      ð6:17Þ

  p2                       p2
At ¼ Yt ðPtd Þ z þ bxAtþ1 ;                                                         ð6:18Þ

         p1
        At
Pta ¼    p2
              ;                                                                     ð6:19Þ
        At
        (                                                          )
             1
             Z ½ð1  aÞðaWÞ
                            k=ðk1Þ
                                    þ aðð1  aÞP k Þ k=ðk1Þ 1=k
At ¼                      1=ðk1Þ
                                                                         ;          ð6:20Þ
                                      k         k 1=ðk1Þ
                   ½WðaWÞ           þ P ðð1  aÞP Þ          
Capital and Tobin’s Q                                                109



Ptd ¼ ½xðPt1
          d
              Þ 1z þ ð1  xÞðPta Þ 1z 1=ð1zÞ :                 ð6:21Þ

There are still only two input costs: the price of labor and the price of
capital. The dividends distributed to households are still

Pt ¼ Ptd Yt  Ptk Kt  Wt Lt :

6.2.3       Monetary and Fiscal Authorities

Monetary Policy In the base case the central bank is assumed to be
concerned with goods price inﬂation only. The central bank adopts a
Taylor rule with smoothing:

Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt  p~Þ;        f1 > 1        ð6:22Þ

             
          Pt 4
pt ¼             1:
         Pt1

Taxes and Domestic Debt The equations describing government
spending G and evolution of the bonds Bt are

Gt ¼ G þ w1 ðBt1  BÞ;                                            ð6:23Þ

Bt ¼ ð1 þ Rt1 ÞBt1 þ Pt Gt  ðt1 Wt Lt þ t2 Pt Ct Þ:             ð6:24Þ

6.2.4 Exports and Foreign Debt
The equations describing exports and the evolution of foreign debt
are
                                  
                        St1         S
lnðXt Þ ¼ lnðXÞ þ w2 ln         ln      ;                   ð6:25Þ
                        Pt1         P
                                                 f
St Ft ¼ ð1 þ Rt1
                              
                   þ Ft1 ÞSt Ft1 þ St Pt Yt  Ptd Xt :          ð6:26Þ

6.3     Solution Algorithm

6.3.1 Approximating Equations
The introduction of capital accumulation in this chapter adds an extra
decision rule, namely Qt , and an extra state variable Kt to the system
in chapter 5:
110                                                                Chapter 6



C^t ¼ c c ðW c ; xt Þ;

S^t ¼ c s ðW s ; xt Þ;

  p1
A^t ¼ c p1 ðW p1 ; xt Þ;

  p2
A^t ¼ c p2 ðW p2 ; xt Þ;

I^t ¼ c I ðW I ; xt Þ;

xt ¼ fðZt  ZÞ; ðFt1  FÞ; ðRt1  RÞ; ðBt1  BÞ; ðKt1  KÞg:

Note that to ensure nonnegativity of It , we have speciﬁed decision
rules for investment and we then solve for the implied value of Q as
follows:

                            ^           2
^t ¼ I^t þ ð1  dÞKt1  C ðIt  dKt1 Þ ;
K
                         2      Kt1

          C^h ^ p2
^t ¼        t At
L                   p1
                       ;
        ð1 þ t2 ÞA^      t
                  "                 #
^     ^               ðI^t  dK^t Þ
L t P t St ¼ Q t 1  C                :
                            K^t

   There are now four Euler errors:
                              "                #
 c      C^h
          t          1                C^h
                                        tþ1
t ¼                         b                    ;
     ð1 þ t2 ÞP^t ð1 þ Rt Þ       ð1 þ t2 ÞP^tþ1
         "                         #    "           #
     ^h
     C             ^t
                   S                           ^h
                                               C
ts ¼ t                               b S^tþ1  tþ1
                                                      ;
      Pt ð1 þ Rt þ Ft þ Ft0 Ft Þ             Ptþ1

           p1                       p1
        A^t     Yt ðPt Þ z At þ bxA^tþ1
tP ¼      p2
                                  p2
                                        ;
        A^t      Yt ðPt Þ z þ bxA^    tþ1


 q
                       ^  Lt P k Þ
                      ðQt      t                         ^ :
t ¼ h                                          2
                                                    i  bQ tþ1
         ð1  dÞ þ CðIt dK
                        Kt
                            t Þd       dKt Þ
                                 þ CðIt2K 2
                                            t
Capital and Tobin’s Q                                          111


Table 6.1
Judd-Gaspar statistic ð102 Þ
                                                     p        q
                                 jtc j   jts j   jt j    jt j
                                  Ct       St       Pt       Qt
Mean                             0.3757   0.4553   1.4495   0.3312
Standard deviation               0.0236   0.0852   0.0843   0.0191




Figure 6.1
Judd-Gasper statistic
112                                                            Chapter 6


Table 6.2
DenHann-Marcet test
                                  Lag order

                                  1           2        3            4
Lower region ð p < 0:05Þ          0.050       0.040    0.036        0.044
Upper region ð p > 0:95Þ          0.056       0.050    0.040        0.056




Figure 6.2
DenHann-Marcet test of accuracy


As is usual, the parameters of these decision rules are selected to mini-
mize the squared Euler equation errors.

6.3.2 Accuracy Tests
The Judd-Gaspar and DenHann Marcet test statistics are as shown in
table 6.1, table 6.2, ﬁgure 6.1, and ﬁgure 6.2. These results do not give
us cause for concern about the accuracy of the approximations.
Capital and Tobin’s Q                                                              113




Figure 6.3
Impulse responses following a productivity shock: with (solid line) and without (dashed
line) capital accumulation and real adjustment costs


6.4   Stochastic Dynamic Simulations

6.4.1 Impulse-Response Functions
The impulse-responses for a model with capital accumulation as well as
sticky prices, taxes, endogenous government expenditure, and exports
are shown in ﬁgure 6.3. Compared to the results in chapter 5, we see
that the steady-state levels of consumption are higher when there is
capital accumulation. The behavior of consumption, the exchange rate,
labor, and the real wage are as expected. The response of price and
the interest rate are further exacerbated with real rigidities. Positive
productivity worsens both domestic and foreign debt positions. The
114                                                        Chapter 6




Figure 6.4
Correlations


former worsens because the increase in price discourages the demand
by foreigners, and the later worsens with the fall in labor income.

6.4.2 Macroeconomic Correlations
The main implication of introducing capital accumulation into the
model as seen in ﬁgure 6.4 seems to be the weakening of correlations
among the key real variables. This should not be surprising since we
have now introduced another form of stickiness—that of real adjust-
ment costs.

6.5   Scenario Analysis—Q Targeting

The Taylor rule with annualized price inﬂation targeting ðpÞ and Q
growth targeting ðp; qÞ is
Capital and Tobin’s Q                                                               115




Figure 6.5
Simulated date under recurring productivity shocks: Taylor rule with inﬂation
and Q growth targeting (solid line) and Taylor rule with only inﬂation targeting (dashed
line)


Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt  p~Þ þ f3 ðqt  q~Þ;

where qt ¼ ððQt =Qt4 Þ  1Þ represent an annualized rate of Q growth
and q~ represents the target for this rate of growth that is set to zero. The
Taylor coefﬁcients are predetermined at f2 ¼ 0:9, f1 ¼ 1:5, and f3 ¼ 0:5.

6.5.1 Productivity Shocks
Figure 6.5 shows the simulated data for one realization of recurring
productivity shocks. The simulations show, not surprisingly, the fall in
the volatility of Q, when we change from an inﬂation only to an
inﬂation–Q growth regime. The implications of this is for a less volatile
capital accumulation and consumption. Prices now hardly vary and
given the nature of the rule, the interest rate and exchange rate are
also less variable.
116                                                                      Chapter 6




Figure 6.6
Impulse responses following a shock to productivity: inﬂation and Q growth targeting
(solid line) and inﬂation targeting only (dashed line)


  Figure 6.6 shows the impulse-responses for the two cases. The main
point to note is that consumption increases by less and labor falls
by more in an environment with Q growth targeting. On balance, the
welfare differences are negligible (see ﬁgure 6.7). As in chapter 3,
we compute the average consumption compensation necessary for a
household to be as well off in the reference regime (inﬂation targeting
only) compared to the alternative (inﬂation and Q growth targeting).
Positive values indicate what households can give up to be as well off
in the alternative regime compared to the reference regime; negative
values indicate the consumption compensation necessary for house-
holds to be as well off. The results here is 0.0007 percent, meaning
that the rule with Q growth is, on average, welfare-reducing albeit
negligible.
Capital and Tobin’s Q                                               117




Figure 6.7
Welfare under different policy regimes


6.5.2 Export Shocks
As in chapter 2 we will now examine the case of demand shocks, but
this time the export demands are highly volatile:

lnðXt Þ ¼ 0:1 lnðXt1 Þ þ 0:9 lnðXÞ þ t ;   t @ Nð0; sz2 Þ:

Figure 6.8 shows the results of one simulated run of recurring export
shocks. Compared to ﬁgure 6.5, the base runs for the variables in an
only inﬂation targeting regime are highly volatile. Again, the introduc-
tion of Q growth greatly reduced the volatility in the variables, but
again there is negligible effect on welfare.

6.6   Concluding Remarks

In summary, this chapter has introduced real rigidities in the form
of adjustment costs to capital formation and drawn attention to the
forward-looking Tobin’s Q.2 We have also examined the effect of
118                                                                      Chapter 6




Figure 6.8
Simulated data under recurring export shocks: Taylor rule with inﬂation and Q growth
targeting (solid line) and Taylor rule with only inﬂation targeting (dashed line)


incorporating the rate of growth of Tobin’s Q as an additional target to
inﬂation for monetary policy. Our simulation results show that adding
Q growth in addition to goods price inﬂation is, on average, welfare-
reducing, albeit negligible.3
   However, more important, the results of this chapter show how
changes in monetary policy affect the volatility of real and nominal
variables. Since volatility is a key measure of risk, we have thus illus-
trated a fundamental link between changes in the conduct of monetary
policy and risk. Speciﬁcally we have shown the reduction in volatility
when the Taylor rule includes a Q growth target.
   While issues about the ﬁnancing of investment are not explicit in this
model, we echo a comment of Cochrane (2006), namely, ‘‘What makes
the relationship between macroeconomics and ﬁnance so interesting
is that risk and related risk premia are not at all ‘second order’’’
(Cochrane 2006, p. 62).
Capital and Tobin’s Q                                                    119




Figure 6.9
Alternative speciﬁcations for the risk premium


Computational Exercise: Risk and Q Growth

There is an extensive literature on the behavior of asset prices and ex-
cess returns. Speciﬁcally, are intertemporal optimizing models able to
replicate key features of asset prices and excess returns observed in the
real world? One example is the well-known equity premium puzzle
ﬁrst noted by Mehra and Prescott (1985). They found an equity pre-
mium or excess return, at annualized rates, of about 6 percent. Despite
an extensive literature there is still no widely accepted explanation for
the premium except in the most general terms: higher returns are
needed to compensate for higher risk.
   Risk appears in three ways in this model: in the volatility in the
shock process ðsz Þ, in the coefﬁcient of relative risk aversion in the util-
ity function ðhÞ, and in the determination of the risk premia as a func-
tion of foreign debt ðFt Þ. In previous exercises we suggested changing
the stochastic process to allow for time-varying risk as well as chang-
ing the coefﬁcient of risk aversion to higher values. Here we suggest
changing the determination of the risk premium from the symmetric
form used in the book to an asymmetric form. Figure 6.9 shows the
changing nature of the risk for different values of the foreign debt. As
commented earlier, the projection method is capable of handling such
asymmetric behavior. What is the effect of this alternative asymmetric
form of risk on Q growth?
7       Economy with Natural Resources




7.1   Introduction

Many small open economies are endowed with rich natural resources
but the price of the goods is determined in international markets.
What then are the implications of a terms of trade boom for such an
economy? The resource boom is hypothesized, in the ﬁrst instance, to
cause a shift in production toward further exploitation of the natural
resources. However, theory suggests that an increase in revenue from
natural resources will de-industrialize a nation’s economy because the
ensuing appreciation of the exchange rate will cause the manufactur-
ing sector to be less competitive.
   This phenomenon has been studied by many economists and is often
called the Dutch disease. The term was coined in 1977 by The Economist
to describe the decline of the manufacturing sector in the Netherlands
after the discovery of natural gas in the 1960s. The classic economic
model describing Dutch disease was developed by the economists
W. Max Corden and J. Peter Neary in 1982.
   Another interesting hypothesis about sectoral differences is associ-
ated with the Harrod-Balassa-Samuelson effect. Harrod (1933), Balassa
(1964), and Samuelson (1964) drew attention to the phenomenon of
how rising productivity-led growth in the traded goods sector led to
rising nontraded goods inﬂation, and real exchange-rate appreciation.
   These sort of phenomena can be studied by simulating a multisector
DSGE model. The aim of this chapter is to do just that—expand our
one-sector model to a two-sector model and simulate the model to
compare and contrast the dynamic effects associated with productivity
shocks and with terms of trade shock. In reality, open economies are
subject to both types of shocks simultaneously and a challenge for
122                                                           Chapter 7



emerging market economies is to ensure that the gains associated with
the booming resource sectors (due to terms of trade effects) is also
translated to economywide improvements in productivity.
   The economy we now study has an export sector and an imported
manufactured goods sector. The terms of trade are driven by move-
ments in the commodity export price relative to the price of manufac-
tured goods. In this chapter we evaluate monetary policy in a small
open economy framework, and in particular, we are concerned with
investment in a resource-rich small open economy subjected to the
vagaries of international terms of trade shocks.

7.2   Two-Sector Model

The main change to the model studied thus far is the expansion of the
production sector to allow for two types of goods: a traded goods sec-
tor that ‘‘produces’’ a natural resource (superscript o) and a nontraded
sector that produces manufactured goods (superscript h). The natural
resource good is consumed domestically as well as exported, and the
price is set internationally. The nontraded good is consumed domesti-
cally, and the price is set according to the Calvo pricing system. The
monetary authority sets the interest rate using a simple linear Taylor
rule, and the ﬁscal authority sets the income tax rate. There is also a
range of differentiated products.

7.2.1 Householders and Entrepreneurs
The economy has two types of capital. For simplicity, we assume that
the capital stock for the natural resource sector is a ﬁxed endowment:

Kto ¼ K:                                                           ð7:1Þ

The other capital (manufacturing) is owned by the entrepreneurs who
hold shares in all the ﬁrms in the economy. The accumulation equation
for capital in the manufacturing sector is

                                      h
                           C ðIt  dKt1 Þ2
Kth ¼ It þ ð1  dÞKt1
                   h
                                   h
                                            ;                      ð7:2Þ
                           2      Kt1

where I is imported investment goods and d is depreciation. These cap-
ital equations will not change the ﬁrst-order conditions in chapter 6,
which are
Economy with Natural Resources                                                      123



Ch
 t ¼ Lt ð1 þ t2 ÞPt ;                                                              ð7:3Þ

L$
 t ¼ Lt ð1  t1 ÞWt ;                                                              ð7:4Þ

Lt ¼ Ltþ1 bð1 þ Rt Þ;                                                              ð7:5Þ

Lt St ¼ Ltþ1 bð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 ;                                      ð7:6Þ
                    "                                             #
          k                    CðItþ1  dKth Þd CðItþ1  dKth Þ 2
Qt ¼ Lt Pt þ bQtþ1 ð1  dÞ þ                   þ                    ;              ð7:7Þ
                                        Kth         2ðKth Þ 2
                                         h
     f                          ðIt  dKt1 Þ
Lt Pt ¼ Qt  Qt C                     h
                                              ;                                    ð7:8Þ
                                    Kt1

                                         
           
Ft ¼ signðFt1 Þ  j½eðjFt1 jF Þ  1:                                           ð7:9Þ

  However, the equations describing the allocation of consumption
between the different types of goods needs to be expanded. We start
                                                                    f
with the household demanding domestic Ctd and imported goods Ct
such that composite consumption Ct is given (using the Dixit-Stiglitz
aggregators) by the following expression:
                                                       f
Ct ¼ ½ð1  g1 Þ1=y1 ðCtd Þðy1 1Þ=y1 þ ðg1 Þ1=y1 ðCt Þðy1 1Þ=y1 y1 =ðy1 1Þ :

The parameter y1 > 0 is the intratemporal elasticity of substitution be-
tween domestically produced goods Ctd and internationally produced
          f
goods Ct , and the parameter g1 represents the share of foreign goods
in total consumption. Minimizing expenditures gives the demand for
domestic and imported goods as
                         d y1
                         Pt
Ctd ¼ ð1  g1 Þ                  Ct ;                                             ð7:10Þ
                         Pt
                       !y1
                   f
  f             Pt
Ct ¼ g 1                      Ct :                                                ð7:11Þ
                Pt

Each composite good is a bundle of differentiated goods j using a
Dixit-Stiglitz aggregator
         ð 1                        z=ðz1Þ
Ctd ¼           ðCj;d t Þðz1Þ=z dj             ;
           0
124                                                                                 Chapter 7


       ð 1                     z=ðz1Þ
  f               f
Ct ¼           ðCj; t Þðz1Þ=z dj          ;
           0

where j denotes the domestic goods and the elasticity of substitution
between differentiated goods is given by z > 1. The consumer price
index Pt is given by the following formula:
                                           f
Pt ¼ ½ð1  g1 ÞðPtd Þ 1y1 þ g1 ðPt Þ 1y1 1=ð1y1 Þ :                                ð7:12Þ

  The consumption of domestically-produced goods is, in turn, a
composite of nontraded home goods Cth and internationally exported
goods Cto :

Ctd ¼ ½ð1  g2 Þ1=y2 ðCth Þðy2 1Þ=y2 þ ðg2 Þ1=y2 ðCto Þðy2 1Þ=y2 y2 =ðy2 1Þ :

The parameter y2 is the intratemporal elasticity of substitution between
domestically produced nontraded home goods Cth and domestically
produced export goods Cto , and the parameter g2 represents the share
of export goods in the consumption of domestically produced goods.
Minimizing expenditures gives the demand for nontraded home goods
and traded export goods as
                       h y2
                       Pt
Cth ¼ ð1  g2 Þ                Ctd ;                                                   ð7:13Þ
                       Ptd

                  
               Pto y2 d
Cto ¼ g2              Ct :                                                             ð7:14Þ
               Ptd

The domestic goods price index Ptd is given by the following formula:

Ptd ¼ ½ð1  g2 ÞðPth Þ 1y2 þ g2 ðPto Þ 1y2 1=ð1y2 Þ :                              ð7:15Þ

  The entrepreneurs also act as importers. We assume that they pur-
                             f
chase imported goods Yt at price St Pto . The goods are then rebundled
                      f
for consumption Ct and investment It , and sold at a domestic currency
price P f , which is set to cover costs
  f               f
Yt ¼ It þ Ct ;                                                                         ð7:16Þ

  f
Pt ¼ St Pt :                                                                          ð7:17Þ
Economy with Natural Resources                                             125



Note that this implies that the effects of changes in the exchange rate
are fully passed-through to the domestic prices of imported goods. There
is no stickiness in the price-setting behavior.

7.2.2    Two-Sector Production and Pricing

Production Decisions There are two sectors: a nontraded (home)
goods sector (superscript h) and a traded goods (export) sector (super-
script o). Both sectors produce differentiated goods via the constant
elasticity of substitution production function. Using the artiﬁce of a
‘‘bundler’’ we obtain the following aggregate equations:

Yth ¼ Zt ½ð1  a1 ÞðLth Þ k1 þ a1 ðKth Þ k1 1=k1 ;                      ð7:18Þ

Yto ¼ Zt ½ð1  a2 ÞðLto Þ k2 þ a2 ðKto Þ k2 1=k2 :                      ð7:19Þ

The export sector is more capital intensive; hence a2 > a1 . For produc-
tivity, we assume that the economywide productivity index follows an
autoregressive process (in log terms):

lnðZt Þ ¼ r lnðZt1 Þ þ ð1  rÞ lnðZÞ þ t ;          t @ Nð0; sz2 Þ:   ð7:20Þ

The market-clearing conditions becomes

Yth ¼ Cth þ Gt ;                                                         ð7:21Þ

Yto ¼ Cto þ Xt :                                                         ð7:22Þ

Pricing Decisions The ﬁrm producing export goods Yto combines
labor Lto and capital Kto , and sells at a world price Pto that is deter-
mined overseas. The ﬁrm producing nontraded home goods Yth com-
bines labor ðLth Þ and capital Kth and sells at a domestic price Pth that is
determined according to the Calvo pricing system. We assume that the
same nominal wage rate Wt holds across both the export producing
and nontraded goods producing sectors. The total dividends from
ﬁrms passed on to households is the sum of the dividends from the
export and nontraded goods producing ﬁrms:

Pt ¼ Pto þ Pth ;
126                                                                          Chapter 7



Pto ¼ Pto Yto  Wt Lto ;

Pt ¼ Ptd Yt  Ptk Kth  Wt Lth :

Price of the Export We assume that the price of exports is determined
in the world markets; hence

Pto ¼ St Pto :                                                                 ð7:23Þ

Calvo Price Setting for Domestic Goods We assume that ﬁrms set
the price of the manufacturing good according to the Calvo (1983)
staggered price system. The equations are
  p1                             p1
At ¼ Yth ðPth Þ z At þ bxAtþ1 ;                                                 ð7:24Þ

  p2                        p2
At ¼ Yth ðPth Þ z þ bxAtþ1 ;                                                    ð7:25Þ

            p1
        At
Pta ¼       p2
                 ;                                                              ð7:26Þ
        At
        (                                                          )
             1
             Z ½ð1  aÞðaWÞ
                            k=ðk1Þ
                                    þ aðð1  aÞP k Þ k=ðk1Þ 1=k
At ¼                      1=ðk1Þ
                                                                         ;
                                      k         k 1=ðk1Þ
                      ½WðaWÞ         þ P ðð1  aÞP Þ        

Pth ¼ ½xðPt1
          h
              Þ 1z þ ð1  xÞðPta Þ 1z 1=ð1zÞ :                              ð7:27Þ

7.2.3       Monetary and Fiscal Authorities

Monetary Policy The domestic interest rate Rt is assumed to follow a
partial adjustment mechanism for inﬂation targeting:

Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt  p~Þ;           f1 > 1;                 ð7:28Þ

         
      Pt 4
pt ¼         1;
     Pt1

where R is the long-run steady-state interest rate, pt is the actual inﬂa-
tion rate, and p~ is the target inﬂation rate. The parameter f2 reﬂects the
fact that the monetary authority engages in interest-rate smoothing,
while the restriction f1 > 1 respects the Taylor principle.
Economy with Natural Resources                                          127



Taxes and Domestic Debt The income and consumption tax rates are
ﬁxed, but government spending Gt is assumed to be sensitive to the
size of the public debt Bt relative to the steady-state value B:
Gt ¼ G þ w1 ðBt1  BÞ:                                              ð7:29Þ

The Treasury receives taxes and borrows to ﬁnance government expen-
diture so that the evolution of the bonds becomes

Bt ¼ ð1 þ Rt1 ÞBt1 þ Pt Gt  ðt1 Wt Lt þ t2 Pt Ct Þ;               ð7:30Þ

where B is a one-period domestic bond.

7.2.4 Exports and Foreign Debt
Exports depend on the lagged real exchange rate ðSt1 =Pt1 Þ relative to
its steady-state value S=P:
                                   
                         St1         S
lnðXt Þ ¼ lnðXÞ þ w2 ln          ln      :                        ð7:31Þ
                         Pt1         P

The foreign debt evolves as follows:
                                              f
St Ft ¼ ð1 þ Rt1
                              
                   þ Ft1 ÞSt Ft1 þ St Pt Yt  Pto Xt :            ð7:32Þ

7.3    Solution Algorithm

Overall, we seek to determine decision rules for consumption Ct ,
the exchange rate St , the numerator and denominator of the forward-
                                                                p1   p1
looking Calvo prices for the nontraded domestic goods At , At , as
well as decision rule for investment It from which we back out Qt . The
decision rules are speciﬁed as nonlinear neural network functional forms
of state variables. The state variables used as arguments for these deci-
sion rules are the current shocks to productivity Zt , foreign debt Ft1 ,
                                                                        h
the interest rate Rt1 , government bonds, Bt1 and the capital stock Kt1 .

C^t ¼ c c ðW c ; xt Þ;

S^t ¼ c s ðW s ; xt Þ;

  p1
A^t ¼ c p1 ðW p1 ; xt Þ;

  p2
A^t ¼ c p2 ðW p2 ; xt Þ;
128                                                                   Chapter 7



I^t ¼ c I ðW I ; xt Þ;

                                                      h
xt ¼ fðZt  ZÞ; ðFt1  FÞ; ðRt1  RÞ; ðBt1  BÞ; ðKt1  K h Þg:

7.3.1 Euler Errors
The Euler errors are the same as those in chapter 6, except that it is P h
that is subjected to price stickiness and K h that is subjected to invest-
ment dynamics:
                              "                #
 c       C^h
           t         1                C^h
                                        tþ1
t ¼                         b                    ;
     ð1 þ t2 ÞP^t ð1 þ Rt Þ       ð1 þ t2 ÞP^tþ1
         "                         #    "          #
     ^h
     C             ^t
                   S                          ^h
                                              C
ts ¼ t                               b S^tþ1 tþ1 ;
      Pt ð1 þ Rt þ Ft þ Ft0 Ft Þ            Ptþ1

            p1                        p1
     h   A^t     Yt ðPth Þ z At þ bxA^tþ1
tP ¼       p2
                                    p2
                                          ;
         A^t      Yt ðP h Þ z þ bxA^
                             t             tþ1


 q
                          ^ t  Lt P k Þ
                         ðQ
t ¼                               t                 ^ :
                                                   bQ tþ1
                  CðI dK h Þd CðI dK h Þ 2
         ð1  dÞ þ t K h t þ t h 2t
                       t         2ðKt Þ


The coefﬁcients of the decision rules are obtained from stochastic simu-
lations based on minimization of the sum of squared Euler equation
errors.

7.3.2 Accuracy Checks
Descriptive statistics of the Judd-Gaspar statistics (the absolute Euler
equation errors relative to their respective forward-looking variable)
are shown in table 7.1. Figure 7.1 shows that the distribution of the
Judd-Gaspar statistics. They are all relatively small.
   The robustness of the approximations is corroborated by the
DenHann-Marcet test statistics shown in table 7.2 and ﬁgure 7.2.

7.4      Simulation Analysis

7.4.1 Impulse-Response Paths
To recap, we are working with a two-sector model: a resource-rich sec-
tor with ﬁxed capital and variable labor costs, and a manufacturing
Economy with Natural Resources                                 129


Table 7.1
Judd-Gaspar statistic ð102 Þ
                                                     p        q
                                 jtc j   jts j   jt j    jt j
                                  Ct       St       Pth      Qt
Mean                             0.3733   0.3852   1.3899   0.3094
Standard deviation               0.0236   0.0728   0.0800   0.0176




Figure 7.1
Judd-Gasper statistic
130                                                           Chapter 7


Table 7.2
DenHann-Marcet test
                                  Lag order

                                  1           2       3            4
Lower region ð p < 0:05Þ          0.046       0.036   0.034        0.048
Upper region ð p > 0:95Þ          0.056       0.052   0.034        0.056




Figure 7.2
DenHann-Marcet test of accuracy


sector with variable capital and labor costs. The productivity shock is
an economywide shock. Following a once-only shock in the productiv-
ity index, ﬁgure 7.3 shows that the impulse-response paths for aggre-
gate consumption, the exchange rate, the real wage and the interest
rate are similar to those we have already seen.
   In this scenario, while output in both sectors increases, the output
in the manufacturing sector is relatively higher than output in the nat-
ural resource (export) sector. Prices in the home goods manufacturing
Economy with Natural Resources                                                     131




Figure 7.3
Impulse responses following a productivity shock: with (solid line) and without (dashed
line) natural resources sector


sector fall by more, which in turn encourages more consumption of
home goods. The foreign debt worsens because imports for consump-
tion and investment exceed the exports of the traded (natural resource)
good (recall that the terms of trade, P o =P f , is ﬁxed in this scenario).

7.4.2 Stochastic Simulations
We have come a long way from the ﬂexible price no frictions model
discussed in chapter 2. It might be useful at this point to consider how
frictions affect the time-series behavior of the forward-looking vari-
ables: consumption, exchange rate, and price. Figure 7.4 shows the
distribution of the ﬁrst-order autocorrelations for the case with no
132                                                                     Chapter 7




Figure 7.4
First-order autocorrelations


frictions and the case with frictions. As expected, allowing for sticki-
ness in the setting of prices increases the levels of the ﬁrst-order
autocorrelations. However, frictions, in general, lower consumption,
which in turn lower the size of the autocorrelations. The exchange
rate becomes even more persistent in its behavior. Intuitively this is be-
cause more factors now react less fully to a shock—the past plays a
bigger role.

7.5   Terms-of-Trade Shocks

The two-sector model allows us to explore the macroeconomic implica-
tions of terms of trade shocks for an open economy with a natural re-
source sector and a home sector. Speciﬁcally,

lnðPtx Þ ¼ r lnðPt1
                  x
                      Þ þ ð1  rÞ lnðPtx Þ þ t ;   t @ Nð0; sz2 Þ:
Economy with Natural Resources                                                        133




Figure 7.5
Impulse responses: Terms-of-trade shock (solid line) and productivity shock (dashed line)


The evolution of the price mimics actual data generating processes,
with a normally distributed innovation with standard deviation set at
0.01. We assume that the price of the imports Ptm is constant (normal-
ized at one) so that the stochastic process describes a mean-reverting
terms-of-trade process. This is a simulation study about the design of
monetary policy for an economy subjected to relative price shocks.
   Figure 7.5 shows the impulse-responses—both shocks result in an
increase in consumption and a depreciation of the exchange rate. Both
shocks also result in a fall in labor and increase in the real wage. How-
ever, for a terms-of-trade shock there is a fall in the relative price of
home goods, which encourages consumers to shift to home goods. The
terms-of-trade shock discourages export. Domestic debt improves in
134                                                          Chapter 7




Figure 7.6
One realization of the terms-of-trade shocks


this environment, which then supports an increase in government
expenditure.
   To ensure that the results are robust, we conducted 500 simulations
(each containing a time series of 200 realizations of terms-of-trade
shocks). Figure 7.6 shows the simulated paths for one time series real-
ization of the exogenous terms of trade index.
   The correlations in ﬁgure 7.7 show the positive relationship between
ﬁscal and current account balances for a productivity shock, and the
negative relationship between ﬁscal and current account balances for a
terms-of-trade shock. The former traces the supply implications of the
shock while the latter traces out the demand implications.

7.6   Concluding Remarks

This chapter has expanded the production side to allow for a manu-
facturing sector with capital accumulation and a natural resource sec-
tor with ﬁxed endowments of capital. We compared the dynamic
effects of two types of shocks: an economywide technology shock
Economy with Natural Resources                                     135




Figure 7.7
Correlations


and a terms-of-trade shock for the price of export goods. Obviously
economies are subject to changes in productivity as well as to changes
in their terms of trade. In fact favorable terms-of-trade shocks are
opportunities for countries to enhance underlying economywide pro-
ductivity growth, and understanding the relationship among terms-
of-trade movements, productivity, and economic policy design is a
challenge for development macroeconomists. We have treated the
shocks independently in this chapter simply to highlight their individ-
ual effects.

Computational Exercise: Real Exchange Cross-Correlations

In this chapter we examined contemporaneous correlation coefﬁcients.
However, we also stressed that persistence of exchange rates increases
136                                                                            Chapter 7




Figure 7.8
Cross-correlations of S=P with Y o and Y h . Data are in logarithms and HP ﬁltered.


as we incorporate more frictions into the model. Further insights about
behavior can be gleaned by examining the correlations of variables
with different lags. For example, how does the production of exports
or home goods correlate with lagged as well as current real exchange
rates? Since the real exchange rate is an endogenous variable, we can
also ask how the real exchange rate correlates with lagged expansion
or contraction in home goods and export production?
   Figure 7.8 shows the cross-correlations for lags and leads of 20 <
t1 < 20 for the real exchange rate with Y h and Y o for the case of re-
curring terms of trade shocks. Values to the right of zero show the
correlations of the output variables with increasing lags of the real
exchange rate, while values to the left of zero represent correlations of
the real exchange rate with lags of the output variables.
   We see persistence in the cross-correlations. A depreciation of the
real exchange rate, not surprisingly, is correlated with a sustained in-
Economy with Natural Resources                                             137



crease in Y o and a fall in Y h . Similarly a rise in Y o is correlated with an
appreciation of the real exchange rate over many quarters.
  An obvious computational exercise is to repeat this exercise for the
same variables, for continuing economywide real productivity shocks.
Will we obtain the same pattern of cross-correlation coefﬁcients? Why
not?
8       Financial Frictions




8.1   Introduction

This chapter introduces a banking sector with limited participation by
households. Up to now, we have assumed that there are no ﬁnancial
constraints: the cost of borrowing is the same as the cost of lending,
and they are both in turn equal to the risk-free rate. What happens to
the dynamics of our economy if we now allow for ﬁnancial frictions?
   In this context we take up the issue of ﬂexible exchange rates for a
small open economy. Guillermo Calvo has argued that there are ‘‘com-
pelling reasons’’ for small emerging market countries to stay away
from exchange rate ﬂexibility. A hard peg such as dollarization may
put a country on a ‘‘fast track’’ toward monetary and ﬁnancial stability,
which otherwise may take years to achieve (Calvo 2005, p. 404). At the
same time, inﬂation targeting is gaining ground among policy makers
around the world. Calvo notes that inﬂation targeting, while having
a ﬂexbile exchange rate, differs from the classical pure ﬂexible sys-
tem originally described by Mundell (1961) and summarized by De
Grauwe (1994). The advantage of inﬂation targeting is that it prevents
deﬂation of the basket of goods, which, of course, include nontrade-
ables (Calvo 2005, p. 418).
   Faia (2005) has examined the choice of exchange rate regime in a
two-country framework. She ﬁnds that the stabilization property of a
ﬂexible exchange rate system is enhanced in the presence of ﬁnancial
frictions, whether or not the monetary or productivity shocks of the
two countries are correlated. Lahiri, Singh, and Végh (2005) have
examined the choice of exchange rate regimes in the context of ﬁnan-
cial frictions but without sticky prices. They found that ﬁxed rates
dominate ﬂexible rates under productivity shocks, whereas ﬂexible
140                                                             Chapter 8



rates dominate under monetary shocks. This result is in stark contrast
to the Mundell (1961) result, which, of course, assumes complete price
rigidity.
   In this chapter we examine the issue of inﬂation targeting versus
ﬁxed exchange rates in the context of a small open economy with lim-
ited participation, endogenous risk premia, investment dynamics in
traded and nontraded goods sectors, as well as sticky prices and
distortionary taxes. We only examine an economywide productivity
shock, in a one-country model, but with two sectors.

8.2   DSGE Model with Banking

In this chapter we allow for an explicit ﬁnancial sector. Households
now lend to the banks (in the form of deposits); ﬁrms borrow from the
banks to ﬁnance their production activity. The banks in turn accept
deposits from households and borrow from foreignors and lend to
ﬁrms and the government sector. They also comply with the reserve
ratio requirement.

8.2.1 Household Sector: Consumption and Saving
The main change is that householders now invest their savings as bank
deposits. The household budget equation can be written as
               m
Wt L t þ ð1 þ Rt1 ÞMt1 þ Pt þ Ptk K th

                                               f
      ¼ Pt Ct þ Mt þ t1 Wt L t þ t2 Pt Ct þ Pt It ;

where W is the wage rate, M is deposits with the banking sector, R m is
the interest rate on deposits, P is distributed proﬁts, t1 is the income
tax rate, and t2 is the consumption tax rate. The ﬁnancial asset is state-
contingent with one period maturity. The amount deposited in the
banking sector, Mt , can be obtained from the following law of motion:

Mt ¼ ½ð1  t1 ÞWt L t þ Pt þ Ptk K th  þ ð1 þ Rt1
                                                m
                                                    ÞMt1

                             f
        ð1 þ t2 ÞPt Ct  Pt It :                                    ð8:1Þ

  As in chapter 7, we assume that one of the capital stock is ﬁxed
(given endowment/resources) while the other type of capital evolves
as follows:
Financial Frictions                                                                        141



K to ¼ K;                                                                                 ð8:2Þ

                                           h
                               C ðIt  dK t1 Þ2
K th ¼ It þ ð1  dÞK t1
                     h
                                       h
                                                 :                                        ð8:3Þ
                               2      K t1

   The household takes the wage as given and chooses consumption,
labor, money holdings, capital, and investment to maximize utility
subject to the budget constraint. We assume that each household
chooses nontrivial solutions in that Ct > 0, L t > 0, Mt > 0, K th > 0, and
It > 0. The Lagrangean problem becomes
              8                           2                                                39
                                                                                   f
              >
              >                             ð1 þ t2 ÞPtþi Ctþi þ Mtþi þ Ptþi Itþi >
              >
              >                           6                                                7>
                                                                                            >
      Xy      >
              < UðC tþi ; L tþi Þ  L tþi 4     þ ðt 1    1ÞW tþi L tþi     P   tþi      5>
                                                                                            >
                                                                                            =
            i
L¼        b                                   ð1 þ  R m
                                                             ÞM t1þi       P k
                                                                                    K  h      ;
      i¼0
              >
              >                                       t1þi                   tþi tþi
                                                                                           >
                                                                                            >
              >
              >                                                                 h
                                                                      ðItþi dK t1þi Þ 2   >
                                                                                            >
              >
              :  Qtþi K tþi     h                       h
                                     Itþi  ð1  dÞK t1þi   þ C2                          >
                                                                                            ;
                                                                            Kh
                                                                            t1þi



and the ﬁrst order conditions are

qL
    ¼ Ch
       t  Lt ð1 þ t2 ÞPt ¼ 0;
qCt

qL
     ¼ L$
         t  Lt ðt1  1ÞWt ¼ 0;
qL t

qL
    ¼ Lt þ bLtþ1 ð1 þ Rtm Þ ¼ 0;
qMt
                                                         2                          3
                                                             2ðItþ1  dK th Þd
                                                6                                7
qL           k                                 C6
                                                6                   K th         7
                                                                                 7 ¼ 0;
      ¼ L  P    Q   þ bQ     ð1  dÞ  bQ
                                               26                            h 2 7
          t t      t      tþ1              tþ1
qK th                                           4              ðItþ1  dK t Þ 5
                                                             
                                                                   ðK th Þ 2

qL          f            ðIt  dK th Þ
    ¼ Lt Pt þ Qt  Qt C               ¼ 0:
qIt                          K th

The behavioral equations with savings as deposits now become

Ch
 t ¼ Lt ð1 þ t2 ÞPt ;                                                                     ð8:4Þ

L$
 t ¼ Lt ð1  t1 ÞWt ;                                                                     ð8:5Þ
142                                                                                     Chapter 8



Lt ¼ Ltþ1 bð1 þ Rtm Þ;                                                                        ð8:6Þ
                   "                                                                   #
                                                    CðItþ1  dK th Þd CðItþ1  dK th Þ 2
Qt ¼ Lt Ptk þ bQtþ1 ð1  dÞ þ                                        þ                   ;    ð8:7Þ
                                                          K th            2ðK th Þ 2

                                            h
          f                       ðIt  dK t1 Þ
Lt P t ¼ Qt  Qt C                      h
                                                 :                                            ð8:8Þ
                                      K t1

The other consumption equations are
                        d y1
                        Pt
Ctd ¼ ð1  g1 Þ                 Ct ;                                                          ð8:9Þ
                        Pt
                     !
                    f y1
  f               Pt
Ct ¼ g1                         Ct ;                                                         ð8:10Þ
                  Pt

                        h y2
                        Pt
Cth ¼ ð1  g2 Þ                 Ctd ;                                                        ð8:11Þ
                        Ptd

                     
                  Pto y2 d
Cto ¼ g2                 Ct ;                                                                ð8:12Þ
                  Ptd

                                                f
Pt ¼ ½ð1  g1 ÞðPtd Þ 1y1 þ g1 ðPt Þ 1y1  1=ð1y1 Þ ;                                     ð8:13Þ

Ptd ¼ ½ð1  g2 ÞðPth Þ 1y þ g2 ðPto Þ 1y2  1=ð1y2 Þ :                                    ð8:14Þ
                                                       f
  The importers buy goods Yt at the price St Pt and rebundle the
                        f
goods for consumption Ct and investment It :
  f           f
Yt ¼ Ct þ It :                                                                               ð8:15Þ

We now assume that they borrow a fraction m1 of the funds necessary
for their purchases from the banks. The importer sells these goods at a
domestic currency price P f , which is set to cover the costs of buying
                     f                                          f
the imports St Pt Yt plus the inputed costs of the loan Rt1
                                                          n
                                                              Nt :
      f                     f
Nt ¼ m1 ðSt Pt Yt Þ;                                                                        ð8:16Þ

  f       f             f                 f
Pt Yt ¼ St Pt Yt þ Rt1
                     n
                         Nt ;
Financial Frictions                                                           143


  f           n
Pt ¼ ð1 þ m1 Rt1 ÞðSt Pt Þ:                                               ð8:17Þ

This implies that the effect of changes in the exchange rate on the do-
                                   f
mestic price of imported goods Pt , have a time-varying pass-through
effect.

8.2.2 Firms—Production, Pricing, and Borrowing
The production and market-clearing equations carry over from chapter
7:

Yth ¼ Zt ½ð1  a1 ÞðL th Þ k1 þ a1 ðK th Þ k1  1=k1 ;                      ð8:18Þ

Yto ¼ Zt ½ð1  a2 ÞðL to Þ k2 þ a2 ðK to Þ k2  1=k2 ;                      ð8:19Þ

lnðZt Þ ¼ r lnðZt1 Þ þ ð1  rÞ lnðZÞ þ t ;             t @ Nð0; sz2 Þ;   ð8:20Þ

Yth ¼ Cth þ Gt ;                                                            ð8:21Þ

Yto ¼ Cto þ Xt :                                                            ð8:22Þ

The ﬁrm producing export goods Yto combines labor L to and capital K to
and sells at a price Pto , which is determined overseas. Thus the pass-
through effect for exports is unitary:

Pto ¼ St Pto                                                               ð8:23Þ

   The ﬁrm producing nontraded home goods Yth combines labor L th
and capital K th and sells at a price Pth , which is determined according
to the Calvo pricing system. There are two input costs: the price of
labor and the price of capital. The wage rate is determined competi-
tively, and we assume that the same nominal wage rate Wt holds
across both the export and nontraded goods producing sectors.
   We now assume that ﬁrms have an overdraft arrangement with the
banks. They borrow bank loans Nt at rate Rtn . The amount borrowed is
a certain fraction, m 2 , of their wage bill, Wt L th , for which they impute
                                              n
the interest cost at the prevailing rate Rt1    (there are no loans in the
export goods sector). In other words, the demand for loans Nth by
the manufacturing ﬁrms is given by the following equation:

Nth ¼ m 2 Wt L th                                                           ð8:24Þ
144                                                                  Chapter 8



Thus, overall, total dividends ﬁrms passed on to households is the sum
of the dividends from the export and nontraded goods producing
ﬁrms:

Pt ¼ Pto þ Pth ;

Pto ¼ Pto Yto  Wt L to ;

Pth ¼ Pth Yth  Ptk K th  ð1 þ m 2 Rt1
                                     n
                                         ÞWt L th :

Assuming then that ﬁrms set the price of each manufacturing good
according to the Calvo (1983) staggered price system yields the
equations
     8                                                         9
     >   "                                             #
                                                  k=ðk1Þ 1=k >
     >
     >    1     ð1   aÞðað1  þ  m  R n
                                          ÞW  t Þ              >
                                                               >
     >
     >
                                   2 t1                       >
                                                               >
     < Z                              k k=ðk1Þ                =
  h                   þ  aðð1   aÞP  t Þ
At ¼      "                                                   # ; ð8:25Þ
     >
     >
     >
     >
                      n
            ð1 þ m 2 Rt1                   n
                          ÞWt ðað1 þ m 2 Rt1    ÞWt Þ 1=ðk1Þ >
                                                               >
                                                               >
                                                               >
     :
     >                                                         >
                                                               ;
                      þ Ptk ðð1  aÞPtk Þ 1=ðk1Þ

  p1
At ¼ Yth ðPth Þ z Ath þ bxAtþ1
                           n
                               ;                                        ð8:26Þ

  p2
At ¼ Yth ðPth Þ z þ bxAtþ1
                       d
                           ;                                            ð8:27Þ

           p1
        At
Pta ¼      p2
                ;                                                       ð8:28Þ
        At

Pth ¼ ½xðPt1
          h
              Þ 1z þ ð1  xÞðPta Þ 1z  1=ð1zÞ :                     ð8:29Þ

8.2.3      Monetary and Fiscal Authorities

Monetary Policy             The central bank is assumed to adopt a Taylor rule
with smoothing:

Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt  p~Þ;         f1 > 1;           ð8:30Þ

            
         Pt 4
pt ¼            1:
        Pt1
Financial Frictions                                                   145



Taxes and Domestic Debt The income and consumption tax rates are
ﬁxed, but government spending Gt is assumed to be sensitive to the
size of the public debt Bt relative to the steady-state value B:
Gt ¼ G þ w1 ðBt1  BÞ:                                            ð8:31Þ

The central bank manages the ﬁnances of the Treasury. Hence it
receives taxes and borrows by issuing one period bonds B to ﬁnance
the government expenditure. Also, in a model with ﬁnancial frictions
(inputed interest costs and reserve requirements), the central bank has
to manage the amount of liquidity LQ in the system to support its
monetary policy (intuitively it has to ensure that the demand and sup-
ply of funds clears at the policy interest rate). We assume that liquidity
is managed via open market operations so that the evolution of bonds
becomes

Bt ¼ ð1 þ Rt1 ÞBt1 þ Pth Gt  ðt1 Wt L t þ t2 Pt Ct Þ þ LQt :    ð8:32Þ

The required liquidity to support this policy regime is
            n
LQt ¼ ð1 þ Rt1 Þ½ð1  c2 ÞNt1  Nt   c1 Mt ;                   ð8:33Þ

         f
Nt ¼ Nt þ Nth ;                                                    ð8:34Þ

where c1 is the reserve requirement ratio and c2 is the default loan
rate. As we can see from the equation, LQt bridges the gap caused by
imputed and actual interest costs as well as the cost of loan defaults
and the cost of maintaining reserves.

8.2.4 Exports and Foreign Debt
Exports depend on the lagged real exchange ðSt1 =Pt1 Þ relative to its
steady-state value ðS=PÞ:
                                  
                        St1         S
lnðXt Þ ¼ lnðXÞ þ w2 ln         ln      :                       ð8:35Þ
                        Pt1         P

As in earlier chapters, we introduce a risk premium term Ft :

Ft ¼ signðFt1 Þ  j½eðjFt1 jFÞ  1:                            ð8:36Þ

The foreign debt evolves as follows:
                                              f
St Ft ¼ ð1 þ Rt1
                              
                   þ Ft1 ÞSt Ft1 þ St Pt Yt  Pto Xt            ð8:37Þ
146                                                             Chapter 8



8.2.5 Financial Sector
Banks accept deposits from households ðMt Þ, pay a rate Rtm , and hold
reserves as a ﬁxed proportion of deposits, c1 given by the expres-
sion c1 Mt . They lend to ﬁrms ðNt Þ, but we assume that c2 of total
loans default. They also lend to the government (in the form of
bonds Bt Þ and receive a risk-free rate on government bonds given by
Rt . Finally, banks can borrow internationally ðFt Þ. But while the inter-
national return on foreign assets is given by Rt , we also assume an
asset-elastic foreign interest-rate risk premium. The Lagrangian prob-
lem is
              8                                                       9
                                               n
       Xy     >
              <   ð1 þ Rt1þi ÞBt1þi þ ð1 þ Rt1þi Þð1  c2 ÞNt1þi  >
                                                                      =
            i                                            m
L¼         b  ð1 þ Rt1þi þ Ft1þi ÞFt1þi Stþi  ð1 þ Rt1þi ÞMt1þi :
       i¼0
              >
              :                                                 
                                                                      >
                                                                      ;
                    1tþi ðBtþi þ Ntþi þ c1 Mtþi  Mtþi  Stþi Ftþi Þ

This expressions tells us that the cash ﬂow of the bank comes from its
gross returns from bonds and loans plus new deposits and foreign bor-
rowings, less gross interest on deposits and foreign loans as well as the
costs associated with loans and reserve deposits. The ﬁrst-order condi-
tions are

qL
    ¼ 1t þ bð1 þ Rt Þ;
qBt

qL
     ¼ 1t St  bð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 ;
qFt

qL
    ¼ 1t ð1  c1 Þ  bð1 þ Rtm Þ;
qMt

qL
    ¼ 1t þ bð1 þ Rtn Þð1  c2 Þ:
qNt

Substituting out 1t yields

ð1 þ Rt ÞSt ¼ ð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 ;                      ð8:38Þ

ð1 þ Rt Þð1  c1 Þ ¼ ð1 þ Rtm Þ;                                   ð8:39Þ

ð1 þ Rt Þ
          ¼ ð1 þ Rtn Þ:                                            ð8:40Þ
ð1  c2 Þ
Financial Frictions                                                           147



We see that the deposit rate is always below the risk-free government
bond rate while the lending rate is always above the risk-free rate.

8.3     Solution Algorithm

The decision variables are as in chapter 7, but we now have an extra
state variables, deposits Mt1 :

C^t ¼ c c ðW c ; x t Þ;

S^t ¼ c s ðW s ; x t Þ;

  p1
A^t ¼ c p1 ðW p1 ; x t Þ;

  p2
A^t ¼ c p2 ðW p2 ; x t Þ;

I^t ¼ c I ðW I ; x t Þ;
      (                                          )
            ðZt  ZÞ; ðFt1  FÞ; ðRt1  RÞ;
xt ¼                     h
                                                   :
          ðBt1  BÞ; ðK t1  K h Þ; ðMt1  MÞ

The Euler errors must also be adjusted to reﬂect the fact that we have
introduced different interest rates:
                                 "                #
              C^h     1                 ^h
                                         Ctþ1
tc ¼           t
                                b                    ;
      ð1 þ t2 ÞP^t ð1 þ Rtm Þ        ð1 þ t2 ÞP^tþ1
               "                             #    "           #
     C^h                    S^t                    ^   C^h
                                                          tþ1
ts ¼ t                                         b Stþ1         ;
      Pt           ð1 þ Rt þ Ft þ Ft0 Ft Þ            Ptþ1

           p1                         p1
        A^t     Yt ðPt Þ z Ath þ bxA^tþ1
tP ¼      p2
                                   p2
                                         ;
        A^t      Yt ðPt Þ z þ bxA^             tþ1


 q
                         ^  Lt P k Þ
                        ðQ
t ¼                     t      t                                    ^ :
                                                                   bQ tþ1
                          CðIt dK th Þd       CðIt dK th Þ 2
         ð1  dÞ þ             K th
                                           þ      2ðK th Þ 2


The Judd-Gaspar statistics in table 8.1 and ﬁgure 8.1 and the DenHann-
Marcet test are shown in table 8.2 and ﬁgure 8.2, conﬁrm the accuracy
of the approximations.
148                                                Chapter 8


Table 8.1
Judd-Gaspar statistic
                                            p            q
                        jtc j   jts j   jt j        jt j
                         Ct       St       Pt           Qt
Mean                    0.3966   0.3442   1.2742       0.2959
Standard deviation      0.0232   0.0408   0.0747       0.0175




Figure 8.1
Judd-Gasper statistic
Financial Frictions                                                 149


Table 8.2
DenHann-Marcet test
                                  Lag order

                                  1           2       3         4
Lower region ð p < 0:05Þ          0.050       0.042   0.042     0.050
Upper region ð p > 0:95Þ          0.038       0.048   0.050     0.042




Figure 8.2
DenHann-Marcet test of accuracy


8.4   Simulation Analysis

8.4.1 Impulse-Response Paths
Figure 8.3 shows the impulse-response paths of key macroeconomic
indicators for a small open economy following a once-only shock in
the productivity index. The model now includes sticky prices, taxes,
capital accumulation and ﬁnancial frictions. In this environment the
cost of ﬁnancial intermediation and the linking of loans to the wage
150                                                                        Chapter 8




Figure 8.3
Impulse responses following a productivity shock: with (solid line) and without (dashed
line) ﬁnancial frictions


bill have pushed up the cost of production. Hence the main insight
here is that compared to chapter 7, we see that introducing ﬁnancial
frictions affects the behavior of foreign and domestic debt. The deterio-
ration of the foreign debt is less because fewer imports are demanded.
The behavior of the domestic debt now reﬂects the need to engage
in open market operations to support the interest-rate policy (via the
liquidity variable).

8.4.2 Macroeconomic Correlations
Do ﬁnancial frictions matter? A priori, frictions can ‘‘tighten’’ or
‘‘loosen’’ relationships observed in a ﬂexible economy, in other words,
Financial Frictions                                                    151




Figure 8.4
Correlations


increase or decrease the correlations between variables. For example,
price stickiness implies that adjustments have to take place via other
mechanisms—this has the effect of loosening relationships. Figure 8.4
shows that relative to an economy without ﬁnancial frictions, the intro-
duction of yet another form of rigidity lowers the correlations between
output and price as well as between real wage and labor.
   Frictions can also ‘‘tighten’’ relationships and increase the co-
variation between variables. For example, the relationship between
exchange-rate depreciations and changes in foreign debt becomes
stronger. In this case, it is because the particular friction (i.e., the
‘‘wedge’’) between the price of imports at the docks and the price sold
                                      f
for consumption and investment, Pt ¼ ð1 þ m1 Rt1  n
                                                     ÞðSt Pt Þ, raises the
cost of production. Hence a change in the exchange rate is translated
152                                                               Chapter 8



into a larger change in the domestic currency price, which in turn
reduces the demand for imports and consequently reduces foreign
debt even further.

8.5   Scenario Analysis

In this scenario we assumed that the monetary authority abandons the
Taylor rule and allows the domestic interest rate to follow the overseas
rate. Effectively it is keeping the exchange-rate constant, so all the other
behavioral equations are unaffected:

Rt ¼ Rt þ Ft :

   Figure 8.5 shows the impulse-responses for the cases with and with-
out inﬂation targeting. The most notable result is that the dynamic pat-
terns of the key variables are more exaggerated for the case without
inﬂation targeting; the volatilities of the real variables, domestic and
foreign debt, have increased. Note that the domestic interest rate rises
by more in the pegging case than in the Taylor-rule inﬂation targeting
case, following the rise in the risk premium generated by the increase
in foreign debt.

8.6   Concluding Remarks

This chapter has embedded ﬁnancial frictions into an open economy
model with price stickiness (as well as investment adjustment costs)
and explored the differences for the cases with and without Taylor
rule inﬂation targeting. The differences between the two regimes are
quite substantial, in terms of volatility of real variables and domestic
and foreign debt. These results lend support to the current practice of
adopting Taylor-rule inﬂation targeting to moderate volatility. Is this
one cause of the ‘‘great moderation’’?
   In all of our analysis we did not take up the moral hazard issue fac-
ing the central bank as a lender of last resort to the banking sector. In
the event that the central bank provides large liquidity to the banking
sector to avert a ﬁnancial panic, the government faces a further credi-
bility question about its inﬂation-targeting program (in the case of ﬂex-
ible rates) or its sustainability of the exchange rate (in a ﬁxed rate
system). Banking sector fragility is frequently a source and propagator
of volatility in the transmission of international business cycles.
Financial Frictions                                                                  153




Figure 8.5
Impulse responses without inﬂation targeting (solid line) with inﬂation targeting (dashed
line)


  As Cochrane (2007) notes, for too long, monetary frictions have been
missing ingredients in ﬁnancial analysis of risk and risk premia. We
raise these frictions in the general equilibrium framework, but we real-
ize that this is only scratching the surface of an important research
agenda.

Computational Exercise: The ‘‘Great Moderation’’

Industrialized countries, particularly the United States, over the past
twenty years, have experienced a marked fall in business-cycle volatil-
ity. For the United States, this fall in real GDP volatility has been called
the ‘‘great moderation’’ by Ben Bernanke (2004). Fogli and Perri (2005)
154                                                                     Chapter 8




Figure 8.6
Simulated output: without inﬂation targeting (observations 1–500) and with inﬂation
targeting (observations 501–1,000)


document that the percentage standard deviation in the growth rate
of the US GDP has moved from a value of 1.08 in the 1960.1 to 1983.4
period to a value of 0.50 for the period 1984.1 to 2005.4.
   There are many explanations for the onset of the great moderation.
Summers (2005) offers three: better policy, better inventory manage-
ment, and simply good luck.
   The policy explanation runs as follows: Improvements in the con-
duct of monetary policy has resulted in low inﬂation, which has trans-
lated into low expected inﬂation. With lower expected inﬂation, there
is lower volatility in expected real interest rates and overall uncer-
tainty, which then translates into more stable investment and output.
   Regarding the structural change in inventory management—with
improved forecasting, ﬁrms accumulate less inventory, so production
and employment become more stable. In other words, keeping inven-
tory levels to a minimum avoids the need for cyclical layoffs when
inventories reach unacceptably high thresholds. With better informa-
tion technology there is also a more streamlined connection between
production, distribution, and ﬁnal sales within industries and across
industries.
Financial Frictions                                                  155



   According to the good luck hypothesis, the volatility of the exoge-
nous shocks affecting the United States simply decreased over the past
several decades. The United States simply did not have the large ad-
verse external or domestic shocks it experienced in past decades.
   Figure 8.6 shows the simulated path of output with a policy switch
to adopting a Taylor rule half way through the simulation period. As
shown, the volatility in the output dropped from a standard deviation
of 0.0203 (observations 1–500) to 0.0048 (observations 501–1000).
   An interesting exercise for the reader is to modify the fractions m1
and m 2 (proportion of costs borrowed) and see its effect on the volatil-
ity of output. Does it fall when entrepreneurs and ﬁrms lower their
need to borrow operational funds?
9       Wage Rigidities




9.1   Introduction

So far we have examined stickiness in price setting for home goods.
We assumed that wages were completely ﬂexible, which, of course, is
not a realistic assumption. If prices are sticky for domestically pro-
duced goods, wages setting surely would be sticky as well. After all,
wages are set in contracts that last at least a year. Such contracts are
usually staggered for the workforce, with a percentage of the work-
force at any time setting their wage for the coming year, while the
other workers remain locked in to the wages set in previous contracts.
John Taylor (1979) wrote one of the ﬁrst papers to incorporate stag-
gered wage contracts into a macroeconomic model with rational
expectations. Joanna Gray (1978) examined the role of indexation in
a model with staggered contracts. However, these models were not
DSGE models.
   Sticky price-setting behavior has been explored for the pricing of
imported goods. Smets and Wouters (2002), for example, allow Calvo-
type pricing for both the domestically produced goods and the local-
currency price of the imported goods. They conclude that having two
sticky prices makes it impossible for a Taylor rule to replicate the wel-
fare of a ﬂexible price economy, or remove the distortions due to stick-
iness in both domestic and imported goods prices. Smets and Wouters
conclude that exclusive focus on stabilizing the prices of domestically
produced goods is no longer optimal when we have both forms of
stickiness.
   In this chapter we incorporate wage as well as domestic-price sticki-
ness. As our model becomes more realistic and thus larger and more
complex, more questions arise. A natural question comes to center
stage. If wages and domestic prices are sticky, should the central bank
158                                                                                  Chapter 9



target wage inﬂation as well as domestic-price inﬂation? Or even use
wage inﬂation as an alternative to domestic-price inﬂation?
   Erceg, Henderson, and Levin (2000) developed a closed economy
model, without capital, with Calvo pricing for both domestic prices
and wages. They ﬁnd that sticky wage inﬂation targeting outperforms
sticky domestic price inﬂation targeting for every combination of struc-
tural parameters in their model. The better rule is a hybrid one that
incorporates output gaps as well as wage and price inﬂation.
   Canzoneri, Cumby, and Diba (2005) extend the model of Erceg, Hen-
derson, and Levin by including capital into their model. They ﬁnd that
it is important to include capital, and that a very tight form of wage
inﬂation targeting dominates the hybrid rules advocated by Erceg,
Henderson, and Levin.
   Finally, Schmitt-Grohe and Uribe (2006) compare two variations of
the Calvo model for wage stickiness: one where each household is the
monopolistic supplier of a differentiated type of labor input, and an-
other where each household supplies a homogeneous labor input that
is transformed by monopolistically competitive labor unions into a dif-
ferentiated labor input. They embed each model into a more extensive
medium-scale model with distortionary taxes and habit persistence.
They ﬁnd, in contrast to Erceg, Henderson, and Levin (2000) and Can-
zoneri, Cumby and Diba (2005), that an operational interest-rate rule
based on strict inﬂation targeting (with a large coefﬁcient on price in-
ﬂation and a mute response to wage inﬂation and output growth)
dominates the rules incorporating wage inﬂation. Note that Schmitt-
Grohe and Uribe make use of an ‘‘operational rule’’ for monetary pol-
icy, where operational means that the interest rate is set as a function
of a small number of easily observable macro variables, is a result of
a locally determinate competitive equilibrium and is above the zero
lower bound.

9.2    Model with Sticky Wages

9.2.1 Household Sector
The main change is to allow for Calvo-type wage setting. The equa-
tions describing the behavior of household consumption are the same
as in chapter 8:
                                                         f
Ct ¼ ½ð1  g1 Þ 1=y1 ðCtd Þðy1 1Þ=y1 þ ðg1 Þ 1=y1 ðCt Þðy1 1Þ=y1  y1 =ðy1 1Þ ;
Wage Rigidities                                                                          159


                     d y1
                     Pt
Ctd ¼ ð1  g1 Þ              Ct ;                                                       ð9:1Þ
                     Pt
                  !
                 f y1
  f            Pt
Ct ¼ g 1                  Ct ;                                                          ð9:2Þ
               Pt

Ctd ¼ ½ð1  g2 Þ 1=y2 ðCth Þðy2 1Þ=y2 þ ðg2 Þ 1=y2 ðCto Þðy2 1Þ=y2  y2 =ðy2 1Þ ;

                     h y2
                     Pt
Cth ¼ ð1  g2 Þ              Ctd ;                                                      ð9:3Þ
                     Ptd

                  
               Pto y2 d
Cto ¼ g2              Ct :                                                              ð9:4Þ
               Ptd

The consumer price index Pt and the aggregate domestic price index
are
                                         f
Pt ¼ ½ð1  g1 ÞðPtd Þ 1y1 þ g1 ðPt Þ 1y1  1=ð1y1 Þ ;                                ð9:5Þ

Ptd ¼ ½ð1  g2 ÞðPth Þ 1y2 þ g2 ðPto Þ 1y2  1=ð1y2 Þ :                              ð9:6Þ

As in chapter 8 there are two types of capital stock: one is a ﬁxed natu-
ral resource while the other is capital in the manufacturing sector:

K to ¼ K;                                                                               ð9:7Þ

                                             h
                                 C ðIt  dK t1 Þ2
K th ¼ It þ ð1  dÞK t1
                     h
                                         h
                                                   :                                    ð9:8Þ
                                 2      K t1

The entrepreneurs buy goods at the price St Pt and rebundle them for
               f
consumption Ct and investment It ; they borrow a fraction m1 of the
funds necessary for their purchases from the banks and sell these
goods at a domestic currency price P f that is set to cover costs:
  f        f
Y t ¼ C t þ It ;                                                                        ð9:9Þ

      f               f
Nt ¼ m1 ðSt Pt Yt Þ;                                                                  ð9:10Þ

  f           n
Pt ¼ ð1 þ m1 Rt1 ÞðSt Pt Þ:                                                          ð9:11Þ
160                                                                  Chapter 9



This implies that changes in the exchange rate are only partially passed-
through to the domestic prices of imported goods.

Staggered Wage Setting In this case we assume that wages are set as
staggered contracts. A fraction ð1  xÞ of households re-negotiates their
contracts each period. Each household chooses the optimal wage Wta
by maximizing the expected discounted utility subject to the demand
for its labor:
      a z
      Wt
Lt ¼         Lt :
      Wt

The household budget equation can be written as
2                         W a z    3
                a
                                                                   
4  ð1  t 1 ÞW t  ð1 þ 0Þ   t
                           Wt      Lt 5¼     Pt Ct þ Mt þ t2 Pt Ct
                                                          f          ;
            m                              þ t1 Wt Lt þ Pt It þ TAX
  þ ð1 þ Rt1 ÞMt1 þ Pt þ Ptk K th

where W is the wage rate, M is deposits with the banking sector, R m is
the interest rate on deposits, P is distributed proﬁts, t1 is the income
tax rate, and t2 is the consumption tax rate. The ﬁnancial asset is state
contingent, with one-period maturity, and 0 is a subsidy. We also as-
sume that there is a lump-sum TAX that acts to ensure that the budget
deﬁcit is revenue neutral (i.e., the cost of the subsidy is negated).
   Taking a derivative with respect to Wta yields the ﬁrst-order condi-
tion
       (                                                           )
   X                                    z           a z1
    y
                 x i b i ðL$
                            tþi ÞðWtþi Þ Ltþi ½zðWtþi Þ   
Et                                                                   ¼ 0;
                                                             a z
   i¼0   þ Ltþi ð1  t1 Þð1 þ 0ÞðWtþi Þ z Ltþi ½ðz þ 1ÞðWtþi  Þ 

which can be rearranged as
                                Py t t          zþz$ 1þ$
                   z       1     t¼0 x b ðWt Þ        ðLt Þ
ðWta Þ 1þz$ ¼                  P                                 :
                ðz  1Þ ð1 þ 0Þ y x t b t Lt ð1  t1 ÞðWt Þ z Lt
                                    t¼0

We adopt the standard assumption that there is a subsidy to eliminate
the markup effects. The wage equation can be rewritten using auxiliary
equations as

                Atw1   ðWt Þ zþz$ ðLt1þ$ Þ þ xbAtþ1
                                                w1
ðWta Þ 1þz$ ¼        ¼                               :                   ð9:12Þ
                Atw2 Lt ð1  t1 ÞðWt Þ z Lt þ xbAtþ1
                                                  w2
Wage Rigidities                                                                                161



Note that in the steady state (or when x ¼ 0Þ this collapses to the same
condition as the competitive case:

                ðWÞ z$ ðL$ Þ
ðWÞ 1þz$ ¼                   ;
                 Lð1  t1 Þ

           ðL$ Þ
W¼                  :
         Lð1  t1 Þ

The aggregate wage equation is

Wt ¼ ½xðWt1 Þ 1z þ ð1  xÞðWta Þ 1z  1=ð1zÞ :                                           ð9:13Þ

  In the case where wages are set by the households, each household
chooses consumption, money holdings, capital, and investment to
maximize its utility subject to a budget constraint. The main change to
the Euler conditions is to take account of the habit persistence:

ðCt  %Ct1 Þh ¼ Lt ð1 þ t2 ÞPt þ b%ðCtþ1  %Ct Þh ;                                       ð9:14Þ

Lt ¼ Ltþ1 bð1 þ Rtm Þ;                                                                       ð9:15Þ
                   "                                                                 #
                                        CðItþ1  dK th Þd       CðItþ1  dK th Þ 2
Qt ¼ Lt Ptk þ bQtþ1 ð1  dÞ þ                               þ                            ;   ð9:16Þ
                                                 K th               2ðK th Þ 2
                                   h
     f                   ðIt  dK t1 Þ
Lt Pt ¼ Qt  Qt C              h
                                        :                                                    ð9:17Þ
                             K t1

9.2.2 Firms—Production, Pricing, and Loans
The production and market-clearing equations carry over from chapter
7:

Yth ¼ Zt ½ð1  a1 ÞðLth Þ k1 þ a1 ðK th Þ k1  1=k1 ;                                        ð9:18Þ

Yto ¼ Zt ½ð1  a2 ÞðLto Þ k2 þ a2 ðK to Þ k2  1=k2 ;                                        ð9:19Þ

lnðZt Þ ¼ r lnðZt1 Þ þ ð1  rÞ lnðZÞ þ t ;                t @ Nð0; sz2 Þ;                 ð9:20Þ

Yth ¼ Cth þ Gt ;                                                                             ð9:21Þ

Yto ¼ Cto þ Xt :                                                                             ð9:22Þ
162                                                              Chapter 9



The total dividends ﬁrms pass on to households is the sum of the divi-
dends from the export and nontraded goods producing ﬁrms:

Pt ¼ Pto þ Pth ;

Pto ¼ Pto Yto  Wt Lto ;

Pth ¼ Pth Yth  Ptk K th  ½1 þ m 2 Rt1
                                     n
                                         Wt Lth :

The price of exports in the two sector is determined in the world
markets:

Pto ¼ St Pto ;                                                     ð9:23Þ

where P o describes the world price.
   As in chapter 8, the ﬁrms in the manufacturing sector borrow from
the central bank and set the price of the manufacturing good according
to the Calvo (1983) staggered pricing system. The equations are

Nth ¼ m 2 Wt Lth ;                                                  ð9:24Þ
     8                                                      9
     >  "                                           #
                                               k=ðk1Þ 1=k >
     >
     >   1    ð1   aÞðað1  þ m  R n
                                       ÞW  t Þ              >
                                                            >
     >
     >
                                2 t1                       >
                                                            >
     < Z                           k k=ðk1Þ                =
 h                  þ aðð1  aÞPt Þ
At ¼    "                                                  # ;      ð9:25Þ
     >
     >
     >
     >
                    n
          ð1 þ m 2 Rt1                  n
                        ÞWt ðað1 þ m 2 Rt1   ÞWt Þ 1=ðk1Þ >
                                                            >
                                                            >
                                                            >
     >
     :                                                     >
                                                            ;
                         k           k 1=ðk1Þ
                    þ Pt ðð1  aÞPt Þ

  p1                            p1
At ¼ Yth ðPth Þ z At þ bxAtþ1 ;                                     ð9:26Þ

  p2                       p2
At ¼ Yth ðPth Þ z þ bxAtþ1 ;                                        ð9:27Þ

         p1
        At
Pta ¼    p2
              ;                                                     ð9:28Þ
        At

Pth ¼ ½xðPt1
          h
              Þ 1z þ ð1  xÞðPta Þ 1z  1=ð1zÞ                   ð9:29Þ

9.2.3 Monetary Policy
The central bank is assumed to adopt a Taylor rule with smoothing:

Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt  p~Þ;        f1 > 1;        ð9:30Þ
Wage Rigidities                                                    163


               
            Pt 4
pt ¼               1:
           Pt1

9.2.4 Taxes and Domestic Debt
Government spending G is assumed to be sensitive to the size of the
public debt B relative to the steady-state value B:
Gt ¼ G þ w1 ðBt1  BÞ:                                          ð9:31Þ

The combined Treasury/central bank receives taxes and production
costs (levied on imports). It borrows to ﬁnance government expendi-
ture. The evolution of the bonds is

Bt ¼ ð1 þ Rt1 ÞBt1 þ Pth Gt þ ðt1 Wt Lt þ t2 Pt Ct Þ þ LQt ;   ð9:32Þ

            n
LQt ¼ ð1 þ Rt1 Þ½ð1  c2 ÞNt1  Nt   c1 Mt ;                 ð9:33Þ

            f
Nt ¼ Nt þ Nth :                                                  ð9:34Þ

The term LQt represents the amount of high-powered money injected
by the central bank to implement monetary policy.

9.2.5 Exports and Foreign Debt
As in chapter 8, the behavioral equations for exports and the evolution
of foreign debt are, respectively,
                                   
                         St1         S
lnðXt Þ ¼ lnðXÞ þ w2 ln          ln      ;                      ð9:35Þ
                         Pt1         P

                                               f
St Ft ¼ ð1 þ Rt1 þ Ft1 ÞSt Ft1 þ St Pt Yt  Pto Xt ;         ð9:36Þ

Ft ¼ signðFt1 Þ  j½eðjFt1 jFÞ  1:                          ð9:37Þ

9.2.6 Financial Sector
The equations linking the interest rates are

ð1 þ Rt ÞSt ¼ ð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 ;                    ð9:38Þ

ð1 þ Rt Þð1  c1 Þ ¼ ð1 þ Rtm Þ;                                 ð9:39Þ

ð1 þ Rt Þ
          ¼ ð1 þ Rtn Þ;                                          ð9:40Þ
ð1  c2 Þ
164                                                                Chapter 9


                         
Ft0 ¼ j½eðjFt1 jF Þ :

The calibration values for the parameters and the initial conditions for
the steady state appear in the appendix at the end of the book.

9.3     Solution Algorithm

9.3.1 Approximating Functions
There are now seven forward-looking variables: consumption Ct ,
the exchange rate St , the numerator and denominator of the forward-
                                                                 p1      p2
looking Calvo prices for the nontraded domestic goods At and At ,
the variable Qt that determines investment in the manufacturing sec-
tor, and the numerator and denominator of the forward-looking wage,
Atw1 and Atw2 . The decision rules are speciﬁed as nonlinear neural net-
work functional forms of state variables. The state variables used as
arguments for these decision rules are the current shocks to productiv-
ity Zt , foreign debt Ft1 , the interest rate Rt1 , government bonds Bt1 ,
                      h
the capital stock K t1 , and deposits Mt1 . Recalling that we parame-
trize investment and back out Q gives the set of approximations below:

C^t ¼ c c ðW c ; x t Þ;

S^t ¼ c s ðW s ; x t Þ;

  p1
A^t ¼ c p1 ðW p1 ; x t Þ;

  p2
A^t ¼ c p2 ðW p2 ; x t Þ;

I^t ¼ c I ðW I ; x t Þ;

A^tw1 ¼ c w1 ðW w1 ; x t Þ;

A^tw2 ¼ c w2 ðW w2 ; x t Þ;
      (                                           )
          ðZt  ZÞ; ðFt1  FÞ; ðRt1  RÞ;
xt ¼                        h
                                                    :
        ðBt1  BÞ; ðK t1     K h Þ; ðMt1  MÞ

It is worth remembering that we derive the wage as follows
          w1 1=ð1þz$Þ
          At
Wta ¼                   ;
          Atw2
Wage Rigidities                                                      165



Wt ¼ ½xðWt1 Þ 1z þ ð1  xÞðWta Þ 1z  1=ð1zÞ :

The set of Euler errors now include the forward-looking wage equation
                                   "                #
              C^h       1                 C^h
                                             tþ1
tc ¼           t
                                  b                    ;
        ð1 þ t2 ÞP^t ð1 þ Rtm Þ        ð1 þ t2 ÞP^tþ1
               "                             #    "           #
     C^h                    S^t                         ^h
                                                         C
ts ¼ t                                         b S^tþ1  tþ1
                                                                ;
      Pt           ð1 þ Rt þ Ft þ Ft0 Ft Þ             Ptþ1

           p1                       p1
        A^t     Yt ðPt Þ z At þ bxA^tþ1
tP ¼      p2
                                  p2
                                        ;
        A^t      Yt ðPt Þ z þ bxA^    tþ1


 q
                ^ t  Lt P k Þ
               ðQ
t ¼ h                        t                     ^ ;
                                               i  bQ
                                CðIt dK t Þ 2        tþ1
      ð1  dÞ þ CðIt dK
                     Kt
                         t Þd
                              þ    2K 2     t




        Atw1   ðWt Þ zþz$ ðLt1þ$ Þ þ xbAtþ1
                                        w1
tw ¼                                       :
        Atw2 Lt ð1  t1 ÞðWt Þ z Lt þ xbAtþ1
                                          w2


The coefﬁcients of the decision rules are obtained from stochastic simu-
lations based on minimization of the sum of squared Euler equation
errors.

9.3.2 Accuracy Checks
The Judd Gaspar statistics (table 9.1 and ﬁgure 9.1) and the Den Hann-
Marcet statistics (table 9.2 and ﬁgure 9.2) provide support for the accu-
racy of the approximations.

9.4     Simulation Analysis

9.4.1 Impulse-Response Paths
The impulse-response paths of key macroeconomic indicators for a
small open economy with sticky prices and wages, taxes, real and
ﬁnancial rigidities, following a once-only shock in the productivity
index is shown in ﬁgure 9.3. Note how sticky wages slow the speed
of adjustment of real wages. However, this has the effect of increasing
tax revenues, which contributes to the improvement in the domestic
debt.
166                                                            Chapter 9


Table 9.1
Judd-Gaspar statistic ð102 Þ
                                               p        q
                           jtc j   jts j   jt j    jt j        jtw j
                            Ct       St       Pt       Qt           Wt
Mean                       0.0506   0.2777   0.4372   0.1004       0.0062
Standard deviation         0.0041   0.0258   0.0250   0.0058       0.0013




Figure 9.1
Judd-Gasper statistic
Wage Rigidities                                                       167


Table 9.2
DenHann-Marcet test
                                  Lag order

                                  1           2       3           4
Lower region ð p < 0:05Þ          0.054       0.040   0.040       0.034
Upper region ð p > 0:95Þ          0.050       0.054   0.048       0.058




Figure 9.2
DenHann-Marcet test of accuracy


9.4.2 Macroeconomic Correlations
Figure 9.4 shows the distribution of contemporaneous correlations
among key macroeconomic variables. They show that an assumption
of sticky wages reverses the price–output correlations from positive to
negative. A positive productivity shock increases the marginal product
of labor, but sticky wages imply that real wages will not increase by
the full amount. Consequently output increases by more and prices
fall by less than the ﬂexible wage case.
168                                                                        Chapter 9




Figure 9.3
Impulse reponses following a productivity shock: with (solid line) and without (dashed
line) sticky wages


9.5   Sensitivity Analysis

Up to now we have explored the workings of the model in a number
of ways. We have added new features in each chapter, and we have
conducted a number of scenarios. In this section, given our focus on
the labor market, we explore the role of $ the elasticity of marginal
disutility with respect to labor supply. The simulation above has been
conducted with $ ¼ 0:25 in the utility function:

           Ct1h  L 1þ$
Ut ð:Þ ¼          t    :
           1h 1þ$
Wage Rigidities                                                     169




Figure 9.4
Correlations


Here we will set $ ¼ 0:05, implying that the household derives more
disutility from more work.1 A change in the disutility parameter
toward a greater preference for leisure may be an effect of an aging
population.
  The impulse-response paths for the case of $ ¼ 0:05 and for the base
case $ ¼ 0:25, appear in ﬁgure 9.5, with the solid lines representing
$ ¼ 0:05 and the dashed line representing $ ¼ 0:25. We see that
changing the value of $ toward greater disutility (or greater preference
for leisure) lowers steady-state consumption and labor. Prices fall to
encourage consumption, while the exchange rate appreciates, the trade
balance worsens, and domestic debt increases (due to falling wage
income).
  Figure 9.6 shows the correlations of key macro variables in the two
cases of $ ¼ 0:25 and $ ¼ 0:05. These results show lower correlations
170                                                                   Chapter 9




Figure 9.5
Impulse responses: $ ¼ 0:05 (solid line) and $ ¼ 0:25 (dashed line)


between productivity and consumption and price and output for lower
$. There is also a stronger positive correlation between the trade and
ﬁscal balances.

9.6   Concluding Remarks

This chapter explored the role of the wage-setting system in DSGE
analysis as well as the role of the marginal disutility of labor. A shift in
society’s preference for more leisure and less work, for example, will
lead to greater domestic and foreign debt for a given productivity
shock.
   We did not take up the case of using wage inﬂation in the Taylor
rule in this chapter. We leave it to the reader to verify the claim of
Wage Rigidities                                                       171




Figure 9.6
Correlations


Schmitt-Grohe and Uribe (2006) with respect to the dominance of pure
inﬂation targeting over wage inﬂation or other hybrid targeting rules
for Taylor rules.

Computational Exercise: Dunlop-Tarshis Puzzle

In his well-know macroeconomics text, Sargent (1987) drew attention
to the Dunlop (1938) and Tarshis (1939) puzzle, which shows that real
wages and employment are positively correlated. Based on one simula-
tion of the model with $ ¼ 0:25, and with recurring productivity
shocks, we ﬁnd a positive correlation between real wages and employ-
ment (0.79). This is in contrast to the result in chapter 8, which shows a
negative correlation between real wages and employment (0.61).
   Has the introduction of wage stickiness caused a signiﬁcant switch in
correlations? Clearly, we cannot base our conclusion on one simulation.
172                                                               Chapter 9




Figure 9.7
Distribution of real wage–employment correlations


In this book we have emphasized the use of many simulations and
presented results of key measures in a distributional form.
   We can obtain a distribution of the real wages and employment cor-
relations by performing repeated experiments, and we can then check
to see if actual real world correlation coefﬁcients falls within, say, a 95
percent interval. For the model described here, the interval is between
0.498 and 0.878 (see ﬁgure 9.7). Canova (2007) calls this a ‘‘size’’ test of
a given model (and its calibrated values). If a model is a poor approxi-
mation, then the actual correlation will be in the tails of the simulated
distribution.
   The reader might like to generate distributions of ﬁrst-order autocor-
relations of wages from the model and compare them with the AR(1)
coefﬁcient estimated from real world data. Can this model capture the
persistence in real world wages?
10         Habit Persistence




We have progressed from the ﬂexible price model in chapter 2. Along
the way we allowed for sticky prices (chapter 3) and sticky wages
(chapter 9). We introduced taxes (chapter 4) and examined different
stances of monetary policy—with output gap (chapter 3), with Q tar-
geting (chapter 6), and with no inﬂation targeting (chapter 8). The
production side now includes the dynamics of capital accumulation
(chapter 6) as well as different sectors (chapter 7).
   We also expanded the external sector to allow a role for international
ﬁnance via the risk premia and to allow a role for international trade to
respond to the real exchange rate (chapter 5). Throughout the book our
analysis has focused on the effects of a productivity shock, but we also
considered the effects of an export demand shock (chapter 2) and a
terms-of-trade shock (chapter 7). Our scenarios tested the sensitivity of
results to changes in the tax system (chapter 4), alternative export elas-
ticities (chapter 5), and alternative marginal disutility of labor (chapter
9). Our model was enriched with the introduction of ﬁnancial interme-
diaries (chapter 8).
   In this chapter we will introduce habit persistence into the behavior
of households. The major change is that the utility function includes
not only current consumption but also lagged consumption. The utility
of current consumption is now relative to recent past consumption.
This modiﬁcation to the utility function is needed to help account for
several stylized facts relating to asset pricing, saving behavior and real
exchange rate correlations with consumption.
   Habit formation has been invoked by Campbell and Cochrane
(1999), and by Boldrin, Christiano, and Fischer (1999) to help account
for the forecastability of excess returns. On the other hand, Carroll,
Overland, and Weil (2000) introduced habit formation into a closed
174                                                           Chapter 10



economy real business-cycle model in order to account for the positive
effects of productivity growth on saving.
   The lagged value of consumption appearing in the utility function
can be introduced in a number of ways. It can be introduced as an ex-
ternal variable, the average of past consumption that is beyond the con-
trol of the individual household. This type of habit formation is called
external habit formation. The lagged value of consumption can also be
introduced either in a ratio form, appearing as the denominator relative
to current consumption, or in a difference form, as a subtraction (lagged
consumption multiplied by a coefﬁcient of habit formation) from cur-
rent consumption. As noted by Schmidt-Grohé and Uribe (2005), exter-
nal habit formation simpliﬁes the intertemporal optimization problem
of the household. They also point out that the ratio speciﬁcation of cur-
rent consumption over lagged consumption (usually raised to a power
less than one) is more properly called relative habit persistence.
   If the lagged consumption is internalized by the household, the
intertemporal optimization becomes more complex. Schmidt-Grohé
and Uribe (2005) report that it matters little for the dynamics of the
model if the habits are of the internal or external type. However, the
distinction becomes important under certain conditions such as when
a regime change is expected. For example, consider the effect of an
expected abandonment of a currency peg system. Under internal habit
formation, consumption will drop before the peg is actually aban-
doned, but under external habit formation, consumption will stay close
to its past value.
   We begin with a description of the overall model. As in the preced-
ing chapters we consider the base case of productivity shocks and gen-
erate impulse responses and stochastic simulations to obtain insights
about the economy we have modeled.

10.1   A DSGE Model with Habit Persistence

The model consists of ﬁve sectors: household sector, production sector,
government sector, ﬁnancial sector, and overseas sector.

10.1.1 Household Sector
There is a continuum of inﬁnitely lived households. Each household
consumes domestically produced goods C d and imported (foreign-
produced) goods C f . There are two-types of consumption goods in
Habit Persistence                                                                        175



C d  C h (nontraded home goods) and C o (traded export goods). The
household sector provides labor services L at wage rate W. The house-
hold sector are net savers: they lend to banks in the form of deposits, M
and receive returns at the deposit rate R m . Households pay taxes on
wage income t1 WL and on consumption t2 PC. The household sector
also includes entrepreneurs who own the capital stock K. These entre-
preneurs import investment goods I to build up the capital stock, but
there is a real cost associated with this activity. The entrepreneurs rent
the capital to the ﬁrms at a rental price P k and receives proﬁts P.
   A representative household, at period 0, optimizes the intertemporal
welfare function

           X
           y
V ¼ E0           b t Ut ðCt ; Lt Þ;
           t¼0


           ðCt  %Ct1 Þ 1h Lt1þ$
Ut ð:Þ ¼                          ;
                1h           1þ$

where b is the discount factor, Ct is an index of consumption goods,
and % > 0 is the coefﬁcient of habit persistence. As before Lt is labor
services, h is the coefﬁcient of relative risk aversion, and $ is the elas-
ticity of marginal disutility with respect to labor supply. Utility is addi-
tively separable in consumption and labour The household’s utility
depends positively on the level of consumption and negatively on the
labor supplied.
   The equations describing the household demand for traded export
                                                             f
goods Cto , nontraded home goods Cth , imported goods Ct , and the ag-
gregate consumption of domestically produced goods Ctd and the
composite consumption Ct are as follows:
                                                          f
Ct ¼ ½ð1  g1 Þ 1=y1 ðCtd Þðy1 1Þ=y1 þ ðg1 Þ 1=y1 ðCt Þðy1 1Þ=y1  y1 =ðy1 1Þ ;

                       d y1
                       Pt
Ctd ¼ ð1  g1 Þ                Ct ;                                                    ð10:1Þ
                       Pt
                     !y1
                 f
  f          Pt
Ct ¼ g 1                    Ct ;                                                       ð10:2Þ
             Pt

Ctd ¼ ½ð1  g2 Þ 1=y2 ðCth Þðy2 1Þ=y2 þ ðg2 Þ 1=y2 ðCto Þðy2 1Þ=y2  y2 =ðy2 1Þ ;
176                                                           Chapter 10


                       h y2
                       Pt
Cth ¼ ð1  g2 Þ                Ctd ;                              ð10:3Þ
                       Ptd

                    y2
               Pto
Cto ¼ g2                    Ctd :                                 ð10:4Þ
               Ptd

The aggregate domestic price index Ptd and the consumer price index
Pt are given as
                                         f
Pt ¼ ½ð1  g1 ÞðPtd Þ 1y1 þ g1 ðPt Þ 1y1  1=ð1y1 Þ ;          ð10:5Þ

Ptd ¼ ½ð1  g2 ÞðPth Þ 1y2 þ g2 ðPto Þ 1y2  1=ð1y2 Þ :        ð10:6Þ

The households provide labor and determine their wages according to

                     Atw1   ðWt Þ zþz$ ðLt1þ$ Þ þ xbAtþ1
                                                     w1
ðWto Þ 1þz$ ¼             ¼                               ;       ð10:7Þ
                     Atw2 Lt ð1  t1 ÞðWt Þ z Lt þ xbAtþ1
                                                       w2



Wt ¼ ½xðWt1 Þ 1z þ ð1  xÞðWta Þ 1z  1=ð1zÞ :                ð10:8Þ

   The household sector also include entrepreneurs who own capital.
There are two types of capital stock. One is a ﬁxed natural resource,
while the other is capital in the manufacturing sector that is subjected
to the capital accumulation equation below:

Kto ¼ K;                                                          ð10:9Þ

                                               h
                                    C ðIt  dKt1 Þ2
Kth ¼ It þ ð1  dÞKt1
                   h
                                            h
                                                     :           ð10:10Þ
                                    2      Kt1

  The entrepreneurs also imports differentiated goods for which the
law of one price holds at the dockside. Each importer sets the domestic
currency price of imported goods ðP f Þ according to imperfect pass-
through behavior. The capital is imported, and the importers package
the imports for capital formation and for consumption according to
  f        f
Yt ¼ Ct þ It ;                                                   ð10:11Þ

   f                    f
Nt ¼ m1 ðSt Pt Yt Þ;                                            ð10:12Þ
Habit Persistence                                                              177



P f ¼ ð1 þ m1 Rt1
               n
                   ÞðSt Pt Þ;                                              ð10:13Þ

where m1 is the proportion of cost ﬁnanced through borrowing from
the ﬁnancial sector.
  Finally, optimizing utility with habit persistence subject to the bud-
get constraint yields the following Euler equations:

ðCt  %Ct1 Þh ¼ Lt ð1 þ t2 ÞPt þ b%ðCtþ1  %Ct Þh ;                      ð10:14Þ

Lt ¼ Ltþ1 bð1 þ Rtm Þ;                                                      ð10:15Þ
                         "                                            #
                                            h                     h 2
                              CðI tþ1   dK   Þd   CðI tþ1   dK    Þ
Qt ¼ Lt Ptk þ bQtþ1 ð1  dÞ þ              t
                                                 þ                t
                                                                        ;
                                     Kth                2ðKth Þ 2
                                                                            ð10:16Þ
                                 h
     f                  ðIt  dKt1 Þ
Lt Pt ¼ Qt  Qt C             h
                                      :                                     ð10:17Þ
                            Kt1

10.1.2 Production Sector
The economy contains a continuum of ﬁrms that operate under mo-
nopolistic competition and manufactures two types of goods: non-
traded home goods Y h and exportable goods Y o . The production
function is a constant elasticity of substitution function of labor ser-
vices L and capital K. The ﬁrms sets domestic nontraded prices P d
according to the Calvo pricing system, but the price of exportables P o
is determined overseas as per small open economy assumption. Firms
borrow from banks (in the form of loans N) and pay the loan rate R n .
   The production equations are

Yth ¼ Zt ½ð1  a1 ÞðLth Þ k1 þ a1 ðKth Þ k1  1=k1 ;                        ð10:18Þ

Yto ¼ Zt ½ð1  a2 ÞðLto Þ k2 þ a2 ðKto Þ k2  1=k2 ;                        ð10:19Þ

lnðZt Þ ¼ r lnðZt1 Þ þ ð1  rÞ lnðZÞ þ t ;           t @ Nð0; sz2 Þ:     ð10:20Þ

The market-clearing equations are

Yth ¼ Cth þ Gt ;                                                            ð10:21Þ

Yto ¼ Cto þ Xt :                                                            ð10:22Þ
178                                                               Chapter 10



For the export good sector the pricing and proﬁt equations are

Pto ¼ St Pto ;

Pto ¼ Pto ðCto þ Xt Þ  Wt Lto :

Since the capital for this good is endowed natural resources, we have
abstracted from complications associated with the pricing of natural
resources. Instead, we have adopted the approach of assuming that
output varies with the labor input given a ﬁxed quantity of capital.
   In contrast, the home good sector is a manufacturing sector, and the
ﬁrm has to pay for the capital it ‘‘rents’’ at the rental price P k . The ﬁrm
also borrows a proportion of the wage costs as part of its management
of the cost of operations. The proﬁt equation includes an imputed in-
terest cost of borrowing based on the prevailing beginning of period
                n
interest rate Rt1 :

Nt ¼ m2 Wt Lth ;

Pth ¼ Pth ðCth þ Gt Þ  ð1 þ m2 Rt1
                                 n
                                     ÞWt Lth  Ptk Kth :

The cost and pricing equations are
     8                                                    9
     >   "                                         #
                                            k=ðk1Þ 1=k >
     >
     >    1                        n
                ð1  aÞðað1 þ m2 Rt1 ÞWt Þ               >
                                                          >
     >
     >                                                    >
                                                          >
     < Z                           k  k=ðk1Þ             =
 h                   þ aðð1  aÞPt Þ
At ¼      "                                              # ;         ð10:23Þ
     >
     >
     >
     >
                     n
            ð1 þ m2 Rt1                 n
                         ÞWt ðað1 þ m2 Rt1 ÞWt Þ 1=ðk1Þ >
                                                          >
                                                          >
                                                          >
     :
     >
                          k          k 1=ðk1Þ
                                                          >
                                                          ;
                     þ Pt ðð1  aÞPt Þ

  p1
At ¼ Yth ðPth Þ z At þ bxAtþ1
                          n
                              ;                                      ð10:24Þ

  p2
At ¼ Yth ðPth Þ z þ bxAtþ1
                       d
                           ;                                         ð10:25Þ

         p1
        At
Pta ¼    p2
              ;                                                      ð10:26Þ
        At

Pth ¼ ½xðPt1
          h
              Þ 1z þ ð1  xÞðPta Þ 1z  1=ð1zÞ :                  ð10:27Þ

10.1.3 Government Sector
The monetary authority implements monetary policy by setting the in-
terest rate ðRÞ according to a Taylor rule:
Habit Persistence                                                        179



Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt  p~Þ;        f1 > 1;          ð10:28Þ
         
      Pt 4
pt ¼         1:
     Pt1

The ﬁscal authority determines government expenditure ðGÞ as

Gt ¼ G þ w1 ðBt1  BÞ

   The Treasury/central bank receives taxes, and borrows from the
banks (in the form of bonds B). The government sector determines the
level of high-powered money, sets the reserve requirement ratio c1 ,
and engages in open market activity to ensure that there is sufﬁcient
liquidity in the system to support its policy:

Bt ¼ ð1 þ Rt1 ÞBt1 þ Pth Gt  ðt1 Wt Lt þ t2 Pt Ct Þ þ LQt ;        ð10:29Þ

            n
LQt ¼ ð1 þ Rt1 Þ½ð1  c2 ÞNt1  Nt   c1 Mt ;                      ð10:30Þ

                                 f
Nt ¼ m2 ðWt Lth Þ þ m1 ðSt Pt Yt Þ:                                  ð10:31Þ

10.1.4 External Sector
The external sector consists of traders and ﬁnanciers. Foreigners buy
domestically produced goods (exports) X. They sell foreign produced
goods (imports) for consumption C f and for production I. Interna-
tional ﬁnanciers lends to banks F  :
                                   
                         St1         S
lnðXt Þ ¼ lnðXÞ þ w2 ln          ln     ;                     ð10:32Þ
                         Pt1         P

Ft ¼ signðFt1 Þ  j½eðjFt1 jFÞ  1;                               ð10:33Þ

                                                    f
St Ft ¼ St Ft1 ð1 þ Rt1 þ Ft1 Þ þ St Pt ðIt þ Ct Þ  ðPto Xt Þ:   ð10:34Þ

10.1.5 Financial Sector
The ﬁnancial sector consists of ﬁnancial intermediaries called banks.
They borrow from households (in the form of deposits, M) and pay
R m . They also borrow from foreigners ðSF  Þ and pay R  þ c f ðF  Þ,
where c f ðFÞ is the risk premium. The intermediaries lend to business
(in the form of loans N) at the loan rate R n but face a cost of default
180                                                         Chapter 10



c n ðNÞ. They lend to the government (in the form of bonds B) and earn
the rate R. Banks must comply with reserve requirements c m ðMÞ. Opti-
mizing proﬁts yields the equations

ð1 þ Rt ÞSt ¼ ð1 þ Rt þ Ft þ Ft0 Ft ÞStþ1 ;                   ð10:35Þ

ð1 þ Rt Þ
          ¼ ð1 þ Rtn Þ;                                        ð10:36Þ
ð1  c2 Þ

ð1 þ Rt Þð1  c1 Þ ¼ ð1 þ Rtm Þ;                               ð10:37Þ

Ft0 ¼ j½eðjFt1 jFÞ :

These equations show respectively the interest parity relationship and
the conditions Rtn > Rt and Rtm < Rt .

10.2     Solution Algorithm

10.2.1 Approximating Equations
There are still seven forward-looking variables: consumption Ct ; the
exchange rate St ; the numerator and denominator of the forward-
                                                              p1 p2
looking Calvo prices for the nontraded domestic goods At , At , the Q
variable Qt , which determines investment in the manufacturing sector;
and the numerator and denominator of the forward-looking wage,
Atw1 , Atw2 . The decision rules are as in the previous chapter:

C^t ¼ c c ðW c ; xt Þ;

S^t ¼ c s ðW s ; xt Þ;

  p1
A^t ¼ c p1 ðW p1 ; xt Þ;

  p2
A^t ¼ c p2 ðW p2 ; xt Þ;

I^t ¼ c I ðW I ; xt Þ;

A^tw1 ¼ c w1 ðW w1 ; xt Þ;

A^tw2 ¼ c w2 ðW w2 ; xt Þ;
Habit Persistence                                                                   181


        (                                             )
                ðZt  ZÞ; ðFt1  FÞ; ðRt1  RÞ;
xt ¼                      h
                                                          :
            ðBt1  BÞ; ðKt1  K h Þ; ðMt1  MÞ

10.2.2 Euler Errors
The set of Euler errors is also the same as in chapter 9, but recall that
the consumption equation needs to be modiﬁed to allow for habit
persistence:

tc ¼ Lt  Ltþ1 bð1 þ Rtm Þ;
      "                           #
                  S^t
  s
t ¼                                 b½S^tþ1 ;
        ð1 þ Rt þ Ft þ Ft0 Ft Þ

           p1                        p1
        A^t     Yt ðPth Þ z At þ bxA^tþ1
tP ¼      p2
                                   p2
                                         ;
        A^  t    Yt ðP h Þ z þ bxA^
                        t            tþ1
                                 "                                                  #
 q    ^  Lt P k Þ  b Q
                       ^                       CðItþ1  dKth Þd   CðItþ1  dKth Þ 2
t ¼ ðQt      t          tþ1         ð1  dÞ þ                  þ                     ;
                                                     Kth              2ðKth Þ 2

        Atw1   ðWt Þ zþz$ ðLt1þ$ Þ þ xbAtþ1
                                        w1
tw ¼                                       :
        Atw2 Lt ð1  t1 ÞðWt Þ z Lt þ xbAtþ1
                                          w2



10.2.3 Accuracy Checks
The Judd Gaspar statistics are reported in table 10.1 and ﬁgure 10.1
while the DenHann-Marcet statistics are reported in table 10.2 and
ﬁgure 10.2. These statistics show that we may consider the approxima-
tions to be accurate.

10.3     Stochastic Simulations

10.3.1 Impulse-Responses to a Productivity Shock
Figure 10.3 shows the impulse-response paths for selected vari-
ables. As in previous chapters the solid lines present the paths of the
model in this chapter, and the dashed line represent the paths of
the model without habit persistence, namely the results of the previous
chapter.
  The effect of yet another source of stickiness (in this case, the intro-
duction of habit persistence) on the steady state is clearly shown in
the higher steady-state level of consumption. As before, productivity
182                                                            Chapter 10


Table 10.1
Judd-Gaspar statistic ð102 Þ
                                               p        q
                           jtc j   jts j   jt j    jt j         jtw j
                            Ct       St       Pt       Qt            Wt
Mean                       0.0441   0.2067   0.2782   0.0847        0.6986
Standard deviation         0.0026   0.0116   0.0250   0.0052        0.0370




Figure 10.1
Judd-Gasper statistic
Habit Persistence                                                    183


Table 10.2
DenHann-Marcet test
                            Lag order

                            1           2           3            4
Lower region ð p < 0:05Þ    0.060       0.050       0.062        0.050
Upper region ð p > 0:95Þ    0.040       0.040       0.060        0.050




Figure 10.2
DenHann-Marcet statistics


improvements occur in both sectors, but sticky wages discourage pro-
duction in export-type goods. Thus relative output favors home goods,
and the home price has to fall by more to encourage a demand switch
away from export-type goods toward home-type goods.

10.3.2 Macroeconomic Correlations
Figure 10.4 shows the histograms of the cross-correlations for key
macroeconomic variables. The interesting result here is that the
184                                                                         Chapter 10




Figure 10.3
Impulse response functions: with habit persistence (solid line) and without habit persis-
tence (dashed line)


introduction of habit persistence has no signiﬁcant effects on the con-
temporaneous correlations of many of the key macroeconomic varia-
bles. This result is consistent with a ﬁnding by Chari, Kehoe, and
McGratten (2002). They found that incorporating habit persistence, in
the form we used in this chapter, did not prove to be very promising
for lowering the general positive correlations between consumption
and real exchange rates generated by these models. Actual data show
negative consumption–real exchange rate correlations for the United
States and Europe, and for other country pairs it ranges from small
and positive values to negative values. They call this inability of model
to replicate these empirical correlations the consumption–real ex-
change rate anomaly.
Habit Persistence                                                   185




Figure 10.4
Correlations


10.4   Simulating Alternative Scenarios

10.4.1 No-Inﬂation Targeting
The ﬁrst scenario we would like to explore is the case without inﬂation
targeting. The monetary authority now implements monetary policy
by setting the domestic interest rate R to be equal to the overseas rate
plus the risk premium:

Rt ¼ Rt þ Ft :

This policy has the effect of keeping the exchange rate relatively con-
stant. Monetary policy in this case is designed not to manage inﬂation,
but rather to keep the exchange rate stable by ensuring that the do-
mestic rate moves with the overseas rate. This policy is equivalent
to targeting inﬂation in imported goods. Figure 10.5 shows the time
186                                                            Chapter 10




Figure 10.5
Simulated data


paths of key variables for one simulation of productivity shocks. As
expected, the exchange rate is relatively constant.
   Figure 10.6 compares the impulse responses for the case of no-
inﬂation targeting (solid lines) and with inﬂation targeting (dashed
lines). They show that, following a productivity shock that labor falls
by more and consumption increases by less in the no-targeting envi-
ronment. The interesting result is the increase in domestic debt follow-
ing the fall in tax revenues. In this environment, since the exchange
rate is ‘‘not allowed’’ to depreciate (as in the inﬂation targeting case),
the potential to sell overseas is severely restricted.

10.4.2 International Shocks
Figure 10.7 compares the impulses following a export demand shock
with a export price shock. The solid lines represents the paths gener-
ated by an export demand shock and the dashed lines represent the
Habit Persistence                                                                    187




Figure 10.6
Impulse responses: no inﬂation targeting (solid line) and with inﬂation targeting (dashed
line)


paths generated by an export price shock, both under the case of inﬂa-
tion targeting. The higher price of exports discourages the demand for
the export goods, and the relative price of P h =P o falls to shift demand
toward domestic nontraded home goods. Contrast this with the export
demand shock that stimulates production of the export good.

10.5   Concluding Remarks

This chapter has examined the effects of including habit persistence in
a model with sticky prices and wages, ﬁnancial market frictions, in-
vestment dynamics in the production of home goods, and a resource
sector. Overall, this additional complexity has the effect of raising the
188                                                                    Chapter 10




Figure 10.7
Impulse responses following an international export demand shock (solid line) and a
export price shock (dashed line)


level of steady-state consumption and reduce the speed of dynamic
adjustments. However, the degree of habit persistence introduced in
this chapter is too low to inﬂuence the nature of the dynamic adjust-
ments or the correlations among key variables.

Computational Exercise: Output and Interest Rate

Boldrin, Christiano, and Fisher (2001) found that introducing habit per-
sistence (along with limitations on intersectoral mobility of factors of
production) for a closed economy helped to explain effects such as the
inverse leading indicator property of high interest rates on future out-
put. In other words, future output is a function of current interest rate.
We can test this effect using a Granger causality test.
Habit Persistence                                                     189


Table 10.3
Granger causality tests (4 lags)
Hypothesis                                      F statistics       p value

Output does not Granger cause interest rate     47.414            (0.000)
Interest rate does not Granger cause output      1.105            (0.353)




Figure 10.8
Simulated data: interest rate and output


   Figure 10.8 shows the time-series plots of the simulated data, and
table 10.3 presents the Granger causality tests for lags of order 4. The
results are robust across other lag orders. The test shows that lagged
outputs are signiﬁcant determinants of interest rates while lagged in-
terest rates are not signiﬁcant determinants of output. This is inconsis-
tent with the ﬁnding of Boldrin, Christiano, and Fisher.
   In this open economy model the degree of habit persistence is quite
low ð% ¼ 0:6Þ. A useful exercise would be to change the degree of habit
persistence. Can we obtain the leading indicator property of the rate of
interest by changing the degree of habit persistence?
11        International Capital Flows and Adjustment




Thus far we have compared the dynamic responses of key macroeco-
nomic variables either to a once-only shock or to recurring shocks.
We have put aside uncertainty about changes in parameters (e.g., in
the risk premium coefﬁcient), or to sudden changes in exogenous vari-
ables (e.g., ‘‘sudden stops’’ in capital inﬂows/outﬂows, or unexpected
changes to the collateral constraints on the amount of foreign borrow-
ings). We have kept the stochastic setting simple so that we could
check both the accuracy and intuitive plausibility of the results of the
model as we progressed from relatively simple to more complex exten-
sions. Obviously policy makers have to formulate their responses in
more complex global stochastic settings, facing multivariate shocks
that, at times, piggyback on one another (when it rains it pours!).
   In this ﬁnal chapter we use the model of chapter 10, with sticky
prices and wages, ﬁnancial frictions, adjustment costs, and habit per-
sistence, to simulate scenarios similar to sudden changes in capital
ﬂows. Our aim is to show how the models we have developed—after
they have been solved, checked for accuracy and analyzed for coher-
ence and convergence with stochastic simulations—may be put to
work to analyze the response of the macroeconomy to a wider variety
of shocks and exogenous developments.
   We will consider two scenarios. The ﬁrst asks the question: What
happens if there is a sudden exogenous rise in the currency risk pre-
mium that has little or nothing to do with a country’s fundamentals
and that then severely curtailed the country’s ability to borrow? The
second scenario asks the opposite question: What happens if there is
an unexpected exogenously determined fall in the currency risk pre-
mium caused by an unprecedented exogenous inﬂow of capital into
the country? To be sure, we do not intend to capture all of the features
of ‘‘sudden stop’’ or, for that matter, the issue of global imbalances. A
192                                                             Chapter 11



more complete approach to these issues, related to global imbalances
and continuing real exchange rate changes, require multicountry mod-
els (e.g., see Caballero, Farhi, and Gourinchas 2007).
   Our choice of scenarios is motivated by a general interest in interna-
tional capital ﬂows because they can have a variety of effects. They can
be beneﬁcial in facilitating growth in emerging countries; they can be
disastrous in speading contagious ﬁnancial crises, and they can gener-
ate intergenerational issues when they stimulate consumption rather
than investment.
   The scenarios also illustrate the appeal and practicality of solving
DSGE models with nonlinear projection methods. Arellano and Men-
doza (2002) point out that sudden stops are a property of equilibrium
that occurs in a region of the state space where negative shocks make
borrowing constraints bind. The resulting nonlinear effects, they em-
phasize, require nonlinear solution methods. However, they acknowl-
edge that research in this area is at an early stage and their survey, like
this book, aims to stimulate further work.

11.1   Capital Reversals

11.1.1 Sudden Stops and Contagion Effects
Calvo (2005) drew attention to the role of sudden stops, meaning
abrupt declines or stops in capital ﬂows, and the ensuing large drops
in outputs of recipient countries. What accounts for these sudden
stops? Calvo (2005) cites herding behavior, which is a consequence
of the extreme sensitivity of foreign investors to news and which may
or may not be related to changes in the fundamentals driving asset
returns or growth in a country. He points out that high risk assessment
costs make herding more likely and emerging markets are especially
vulnerable because, according to Calvo (2005, p. 139), these countries
have narrow production bases for tradable goods, short track records
in international capital markets, and political systems prone to
polarization.
  More important, the information costs associated with risk assess-
ments are high because entry costs are high, and because informational
value decays quickly. Thus information gathering is subject to large-
scale economies, and this is likely to lead to the formation of specialist
fund management clusters that encompass regions of emerging mar-
kets. Given the formation of such clusters, Calvo emphasizes that
emerging markets, far from being sources of shocks, can be victims of
International Capital Flows and Adjustment                           193



contagious effects either as innocent bystanders or as victims of
country-speciﬁc rumors.
   In his book Calvo discusses the issue of sudden stops more broadly,
but he observes that capital reversals signify a serious blow to an econ-
omy in that they cause falls in output. Chari, Kehoe, and McGrattan
(2005b) offer an insight into this observation. They show that sudden
stops, generated by an abrupt tightening of a country’s collateral con-
straint on foreign borrowing, do not lead to deceases in output in a
standard general equilibrium model. Instead, to generate an output
drop, the model must include frictions that generate negative effects
that swamp the positive effects of the sudden stop. The type of frictions
documented by these authors are similar to the ﬁnancial frictions we
discussed in preceding chapters. Without these frictions, the sudden
stop would actually trigger an increase in labor and an expansion of
output.
   Chari, Kehoe, and McGrattan (2005b) argue that the frictions that
generate output drops in the wake of sudden stops are subtle ones for
which there is little direct evidence. They conjecture that there may be
a reverse causation from that put forward by Calvo. In this alternative
hypothesis, foreign investors see events that lead them to predict a
future drop in output, and as a result they refuse to lend more to the
country. Thus it is the falls in expected output that cause the sudden
reversals of capital ﬂows, not the reverse (Chari, Kehoe, and McGrat-
tan 2005b, p. 387).

11.1.2 Simulating a Reversal in Capital Flows
We can check out the CKM (Chari, Kehoe, and McGrattan) and Calvo
hypotheses by simulating the model described in chapter 10. We
model the sudden stop by imposing an abrupt jump of the risk pre-
mium to an exogeneously predetermined value of 0.01 and by freezing
the evolution of foreign debt. We also stabilize the growth in produc-
tivity to highlight the effects of sudden stops.
   In ﬁgure 11.1 simulated paths are compared for the case where an
abrupt stop occurs to foreign lending at observation 100 (dashed line)
with the base case where no sudden capital reversals occur (solid
lines). A message here is that sudden stops do not cause falls in output
when the government is in a position to provide the necessary ﬁnance
to support the adjustment process (in this case, the necessary increase
in domestic prices and the fall in consumption). A quick run through of
the countries affected by the tequila crisis of Mexico in 1994, the Asian
194                                                                         Chapter 11




Figure 11.1
Simulated data: with sudden stop (dashed line) and base case (solid line)


ﬂu of Thailand, Indonesia, and South Korea in 1997, and the Russian
virus in 1998 would suggest that this is indeed the case.

11.2    Continuing Inﬂows

11.2.1 Current Account Deﬁcits and Asset-Price Inﬂation
In chapter 8 we drew attention to the great moderation in 1983 to 1984
that coincided, as Fogli and Perri (2005) note, with the start of a deterio-
ration in the US current account balances. In essence this is the reverse
or mirror image of the sudden stop effect that has plagued emerging
market countries. The United States had been experiencing large capi-
tal inﬂows, leading to mounting external debt–GDP ratios and to a
very large asset-price boom.1
   Mendoza, Quadrini, and Rı́os-Rull (2006) link the large US current
account deﬁcits (along with the global imbalances) to heterogeneity in
International Capital Flows and Adjustment                                    195




Figure 11.2
Simulated paths: with endogenously determined capital inﬂows (solid line) and with
exogenously determined capital inﬂows (dashed line)


ﬁnancial markets across countries rather than to any particular moder-
ation within the United States. Using a two-country model, they ﬁnd
global ﬁnancial integration to favor the more ﬁnancially developed
country. In other words, the ﬁnancial depth of the United States
attracted huge capital inﬂows from countries with surplus funds look-
ing for investment opportunities.

11.2.2 Simulating Continuing Capital Inﬂows
In this scenario we compare the case of a sudden abrupt drop in the
risk premium in conjuction with an exogenously determined increase
in capital inﬂows with the base case of no sudden changes. The simu-
lated paths are shown in ﬁgure 11.2. The solid lines represent the ad-
justment paths to the endogenously determined inﬂows (our standard
base case) and the dashed lines represent the case with exogenously
196                                                          Chapter 11



determined capital inﬂows. The sharp rise in the foreign debt is as
expected, and likewise the rise in the Q variable and in prices. Note,
however, the rise in domestic debt as well; this twin-deﬁcit phenome-
non is what is being currently observed in the United States.

11.3   Future Research

The questions we take up in this chapter center on the usefulness of the
model we have developed so far, for assessing macroeconomic adjust-
ment, under a wider set of stochastic shocks. Clearly, many interesting
questions can be asked. What happens if the Calvo mechanism for
wages and domestic prices becomes even more sticky so that prices
and wages do not rise very much? Alternatively, what happens if the
monetary authority targets asset-price inﬂation as well as domestic-
price inﬂation? What happens if the exogenous capital inﬂows stimu-
lated a growth in productivity? The message we wish to impart here is
that the subject matter of the book—computational methods for DSGE
modeling—is part of an active research agenda to design better macro-
economic models to enhance our understanding of the economy as
well as to provide better guidance for policy.
   There are many avenues for future research. For example, we did
not specify within any of our models expectational frictions or bounded
rationality, in which the agents, be they household, ﬁrm, or central
bank decision makers, have to learn the laws of motion for key macro-
economic variables, such as inﬂation or Tobin’s Q. We have also only
concentrated on the single-country model. When discussing ﬁnancial
openness, a more complete treatment would involve at least a two-
country model, in which residents of either country hold shares or
claims on capital as well as the bonds of the other country. We have
not explored this fuller type of ﬁnancial openness.
   Another avenue for research is to incorporate housing into the house-
hold consumption and asset portfolio decision. Piazzesi, Schneider, and
Turzel (2007) show that the introduction of housing in a general equi-
librium model induces a lower risk-free rate of return, while the share
of housing expenditures can be used to predict excess returns. Davis
and Heathcoate (2005) note that the percentage standard deviation of
residential investment is about twice that of nonresidential investment.
Both studies used closed economy models. The effects of adding hous-
ing consumption and investment in an open economy will have impli-
cations for real exchange-rate and current account dynamics.
International Capital Flows and Adjustment                          197



   This chapter and book concludes with an observation made by
Cochrane (2008), in his survey ‘‘Financial Markets and the Real Econ-
omy.’’ The dynamic stochastic general equilibrium approach, espe-
cially when applied to open economies, is still relatively unexplored
territory. Like explorers, missionaries, and adventurers, the task ahead
is to explore, expand, and enrich our existing knowledge of computa-
tional macroeconomics for the open economy.
Appendixes
A            Deﬁnitions of Symbols




               Calibrated
Symbol         value        Deﬁnition
a, a1          0.15         Share of capital in production of home or manufactured
                            goods
a2             0.3          Share of capital in production of export or resource
                            goods
b              0.99         Households’ discount factor
g1             0.3          Share of foreign goods in aggregate consumption
g2             0.15         Share of export goods in domestic consumption
d              0.025        Depreciation rate (quarterly)
z              6            Elasticity of substitution between differentiated goods
h              1.5          Coefﬁcient of relative risk aversion
y1             2.5          Elasticity of substitution between domestic and foreign
                            goods
y2             1.5          Elasticity of substitution between home and export goods
k, k1 , k2     0.1          Elasticity of substitution in production
C              0.025        Adjustment cost parameter for production
m1 , m 2       0.2          Proportion of wage bill supported by bank loans
x              0.85         Price and wage stickiness factor
r              0.90         Autoregresive coefﬁcient
s                           Standard deviation error of productivity shock
t1             0.2          Tax rate on labor income
t2             0.1          Tax rate on consumption
f1 , f2        1.5, 0.9     Taylor coefﬁcients on inﬂation, smoothing parameter
w1             0.1          Sensitivity of G to deviations of B
w2             1.0          Sensitivity of X to changes in the real exchange rate ðS=PÞ
j              0.01         Risk premium parameter associated with the exchange
                            rate
c1             0.005        Reserve deposit ratio associated with the deposits
c2             0.005        Default ratio associated with loans
o              0.25         Elasticity of marginal disutility with respect to labor
F                           Risk premium
B          Deﬁnitions of Variables




Variable      Deﬁnition
A             Auxiliary variables in the Calvo pricing formula
B             Government bonds
C             Consumption C, C d , C f , C h , C o
D, d          Index for domestically produced goods
F, f          Foreign debt, index for foreign goods
G             Government expenditures
H, h          Index for home nontraded manufactured goods
I             Imported capital/investment goods, I h
J, j          Index for differentiated goods
K             Capital K h , K o
L             Labor services L h , L o
M             Money—deposits of households in banks
N             Loans to ﬁrms
O, o          Index for traded-export goods
P             Prices P, P d , P f , P m P o , P o , P h , P a
Q             Tobin’s Q
R             Interest rate, R, R m , R n , R 
S             Exchange rate
T, t          Index of time
W             Wage rate
X             Exports
Y             Output, Y h , Y o
Z             Productivity index, Z h , Z o
C               The Computer Algorithm




   Generate the productivity shocks:

lnðZt Þ ¼ r lnðZt1 Þ þ ð1  rÞ lnðZÞ þ et ;     et @ Nð0; sz2 Þ
   Set up the approximating functions for the forward variables C, S:

Dct ¼ W1c ðZt  ZÞ þ W2c ðFt1  FÞ þ W3c ðRt1  RÞ
                              
                1
C^t ¼ C               c  0:5
          1 þ expðDt Þ

Dst ¼ W1s ðZt  ZÞ þ W2s ðFt1  FÞ þ W3s ðRt1  RÞ
                              
                1
S^t ¼ S              s  0:5
         1 þ expðDt Þ
Solve for the endogeous variables Y, L, K, P k , P, W, R, F:
Yt ¼ C^t þ G þ X

Lt1þ$k1 ¼ 0:5ð1  a1 ÞðZt Þ k1 ðYt Þ 1k1 Ch
                                            t

               k1                     
         1      Yt
Ktk1 ¼                ð1  a1 ÞðLt Þ k1
         a1     Zt

Ptk ¼ Pt St
                           1k1
                           Yt
ftl ¼ ð1  a1 ÞðZt Þ k1
                           Lt
                     1k1
                     Yt
ftk ¼ a1 ðZt Þ k1
                     Kt

       Wt Ptk
Pt ¼        þ k
       ft l  ft

             h
Wt ¼ L$t Pt Ct
         "          #
               Pt 4
pt ¼ 0:25           1
             Pt1
206                                                                    Appendixes


Rt ¼ f2 Rt1 þ ð1  f2 Þ½R  þ f1 ðpt Þ
                               
           
Ft ¼ signðFt1 Þ  j½eðjFt1 jF Þ  1

S^t Ft ¼ ð1 þ Rt1
                
                    þ Ft1 ÞS^t Ft1
                                 
                                     þ ðS^t Pt It  Pt Xt Þ
   Obtain the Euler errors:

                                              Ch
tc ¼ Lt bð1 þ Rt1 Þ  Lt1 ;         Lt ¼     t
                                               Pt
                             0    
ts ¼ Lt bð1 þ Rt1 þ Ft1 þ Ft1 Ft1 ÞSt  Lt1 St1

Sample MATLAB Program for Chapter 2:
% Chapter 2: Base Flexible Price Model
%
% Start with a clean workspace
%
  clear all;
%
% Deﬁne global variables and parameters
%
  global eta omega beta alpha1 kappa rho phi0 phi1 chis
  global Rstar PFstar PXstar
  global Blam_ss C_ss F_ss G_ss K_ss L_ss P_ss Pk_ss R_ss S_ss W_ss X_ss Y_ss Z_ss
  global nstart T1 T2 zshock nstatevar neuronx neuler
%
% Nominate the function that sets out the model
%
  fun ¼ ’chapter2_netfun’;
%
% Deﬁne the exogenous variables and the calibrated parameters
%
  Rstar ¼ 0.01;
  PFstar ¼ 1.0;
  PXstar ¼ 1.0;
  eta ¼ 1.5;
  omega ¼ 0.25;
  beta ¼ 1/1.01;
  alpha1 ¼ 0.15;
  kappa ¼ 0.1;
  chis ¼ 0.1;
  rho ¼ 0.9;
  phi0 ¼ 0.9;
  phi1 ¼ 1.5;
%
% Set out the initial steady-state values
%
  Blam_ss ¼ 3.22696890071349;
  C_ss ¼ 0.45793462256871;
  F_ss ¼ 0;
  G_ss ¼ 0;
  K_ss ¼ 0.02729049017873;
Appendixes                                                                        207


  L_ss ¼ 0.74732008502373;
  P_ss ¼ 0.99999998539410;
  Pk_ss ¼ 1.0000;
  R_ss ¼ 0.0100;
  S_ss ¼ 0.99999999315490;
  W_ss ¼ 0.28812562001981;
  X_ss ¼ 0.02729049020372;
  Y_ss ¼ 0.48522511277243;
  Z_ss ¼ 1;
%
% Determine the nature of the approximating function
%
  nstatevar ¼ 3; neuler ¼ 2; neuronx ¼ 1;
  neuronx1 ¼ neuronx þ 1;
  nparm ¼ nstatevar*neuler*neuronx;
%
% Create the shocks
%
  T1 ¼ 200; %length of simulated data
  T2 ¼ 50; %number of simulations
  randn(’state’, 888); %random seed
  se_shock ¼ 0.01; %std.of shock
  zshock ¼ randn(T1,T2)*se_shock;
  nstart ¼ 4;
%
% Call up an optimizing algorithm
%
  options ¼ optimset(’Display’, ’iter’, ’MaxFunEvals’, 100, ’MaxIter’, 100, ’TolFun’,
  0.0001);
  gammaf ¼ [2.8342 1.6406 0.0868 0.5264 0.0000 3.0591]; % starting values
gammaf ¼ fminsearch(fun, gammaf, options);
[ERROR, C, F, K, L, P, R, S, W, Pk, Y, Z, trade, ERR_C, ERR_S] = feval(fun,gammaf);
%
% Generate impulse-responses
%
  T1 ¼ 200;
  T2 ¼ 1;
zshock ¼ [zeros(24,1); 0.1; zeros(T1-25,1)];
  [ERROR, C, F, K, L, P, R, S, W, Pk, Y, Z, trade, ERR_C, ERR_S] ¼ feval(fun,gammaf);
  ﬁgure(1);
  subplot(5,2,1); plot(Z); title(’Z’)
  subplot(5,2,2); plot(C); title(’C’)
  subplot(5,2,3); plot(S); title(’S’)
  subplot(5,2,4); plot(Y); title(’Y’)
  subplot(5,2,5); plot(K); title(’K’)
  subplot(5,2,6); plot(L); title(’L’)
  subplot(5,2,7); plot(W./P); title(’W/P’)
  subplot(5,2,8); plot(P); title(’P’)
  subplot(5,2,9); plot(R); title(’R’)
  subplot(5,2,10); plot(F); title(’F’)
  saveas(1,’c:\eg1.eps’,’eps’);
208                                                                    Appendixes


% Chapter 2: Function
  function [ERROR, C, F, K, L, P, R, S, W, Pk, Y, Z, trade, ERR_C,
  ERR_S] ¼ chapter2_netfun(gamax);
  global eta omega beta alpha1 kappa rho phi0 phi1 chis
  global Rstar PFstar PXstar
  global Blam_ss C_ss F_ss G_ss K_ss L_ss P_ss Pk_ss R_ss S_ss W_ss X_ss Y_ss Z_ss
  global nstart T1 T2 zshock nstatevar neuronx neuler
%
% Create the vector space
%
  Blam ¼ Blam_ss*ones(T1,T2);
  C ¼ C_ss*ones(T1,T2);
  F ¼ F_ss*ones(T1,T2);
  K ¼ K_ss*ones(T1,T2);
  L ¼ L_ss*ones(T1,T2);
  P ¼ P_ss*ones(T1,T2);
  R ¼ R_ss*ones(T1,T2);
  S ¼ S_ss*ones(T1,T2);
  W ¼ W_ss*ones(T1,T2);
  Pk ¼ Pk_ss*ones(T1,T2);
  Y ¼ Y_ss*ones(T1,T2);
  Z ¼ Z_ss*ones(T1,T2);
  Zrisk ¼ zeros(T1,T2);
  ERR_C ¼ zeros(T1,T2);
  ERR_S ¼ zeros(T1,T2);
  jk ¼ nstatevar*neuler*neuronx;
  jj ¼ 1:nstatevar:jk;
  kk ¼ nstatevar:nstatevar:jk;
%
% The model simulated for length T1 and T2 times
%
  for j ¼ 1:T2;
  for i ¼ nstart þ 1:T1,
%
% Deﬁning the shock process
%
  Zz ¼ rho*log(Z(i  1,j)) þ (1  rho)*log(Z_ss) þ zshock(i,j);
  Z(i,j) ¼ exp(Zz);
%
% Demeaning the state variables
%
  ZZ(i,j) ¼ Z(i,j)  Z_ss;
  FF(i,j) ¼ F(i  1,j)  F_ss;
  RR(i,j) ¼ R(i  1,j)  R_ss;
  xstate ¼ [ZZ(i,j) FF(i,j) RR(i,j)];
%
% Setting the approximating functions
%
  for nn ¼ 1: neuler*neuronx;
  neuron(1,nn) ¼ 1./(1 þ exp(gamax(jj(nn):kk(nn))*xstate’))  0.5;
  end;
Appendixes                                                                   209


  pea_C ¼ [([neuron(1, 1: neuronx)])];
  pea_S ¼ [([neuron(1, neuronx þ 1:2*neuronx)])];
  C(i,j) ¼ exp(pea_C)*C_ss;
  S(i,j) ¼ exp(pea_S)*S_ss;
%
% Generating the endogeous variables
%
  Y(i,j) ¼ C(i,j) þ G_ss þ X_ss;
  LL ¼ 0.5*(1  alpha1)*(Z(i,j)^kappa)*(Y(i,j)^(1  kappa))*(C(i,j)^eta);
  L(i,j) ¼ LL^(1/(1  kappa þ omega));
  L(i,j) ¼ real(L(i,j));
  KK ¼ ((Y(i,j)/Z(i,j))^kappa)  (1  alpha1)*L(i,j)^kappa;
  K(i,j) ¼ (KK/alpha1)^(1/kappa);
  K(i,j) ¼ real(K(i,j));
  mpl ¼ (1  alpha1)*(Z(i,j)^kappa)*(Y(i,j)/L(i,j))^(1  kappa);
  mpk ¼ (alpha1)*(Z(i,j)^kappa)*(Y(i,j)/K(i,j))^(1  kappa);
  mpl ¼ real(mpl);
  mpk ¼ real(mpk);
  Pk(i,j) ¼ S(i,j)*PFstar;
  P(i,j) ¼ 2*Pk(i,j)/mpk;
  W(i,j) ¼ (L(i,j)^omega)*(C(i,j)^eta)*P(i,j);
  W(i,j) ¼ real(W(i,j));
  Zinf(i,j) ¼ 0.25*((P(i,j)/P(i  4,j))  1);
  R(i,j) ¼ phi0*R(i  1,j) þ (1  phi0)*(Rstar þ phi1*Zinf(i,j));
  trade(i,j) ¼ P(i,j)*X_ss  S(i,j)*PFstar*K(i,j);
  trade1 ¼ trade(i,j)/S(i,j);
  F(i,j) ¼ F(i  1,j)*(1 þ Rstar þ Zrisk(i  1,j))  trade1;
  Blam(i,j) ¼ (C(i,j)^eta)/P(i,j);
  Blam(i,j) ¼ real(Blam(i,j));
  Zrisk(i,j) ¼ sign(F(i  1,j))*chis*(exp(abs(F(i  1,j)))  1);
  Zder(i,j) ¼ chis*(exp(abs(F(i  1,j))));
%
% Obtaining the Euler errors
%
  MUC ¼ Blam(i,j)*(beta*(1 þ R(i  1,j)));
  MUCLAG ¼ Blam(i  1,j);
  ERR_C(i,j) ¼ (MUC/MUCLAG)  1;
  MUS ¼ S(i,j)*(1 þ Rstar þ Zrisk(i  1,j) þ Zder(i  1,j)*F(i  1,j));
  MUSLAG ¼ (1 þ R(i  1,j))*S(i  1,j);
  ERR_S(i,j) ¼ (MUS/MUSLAG)  1;
  end;
  end;
%
% Deﬁning the errors function to be minimized
%
  err1 ¼ reshape(ERR_C,T1*T2,1);
  err2 ¼ reshape(ERR_S,T1*T2,1);
  ERROR ¼ mean(err1.^2) þ mean(err2.^2) þ 2*mean(err1.*err2);
Notes




Acknowledgments

A quick introduction to MATLAB code by Winistörfer and Canova (2006) may be found
on the Web hhttp://crei.cat/people/canova/teaching%20pdf/intro%20to%20matlab
.pdfi.


Chapter 1

1. A special issue of the Journal of Business and Economic Statistics in 1991, edited by John
Taylor and Harold Ulig, found that even for a model with a fairly simply nonlinear struc-
ture, simulated series displayed different dynamic properties depending on the solution
methods used. Canova (2007) quite rightly advocates caution when assessing the results
from any one method.

2. The computational literature refers to these decision rules for variables that depend on
their own and other expected future variables as policy functions. The word ‘‘policy’’ in
this case is not to be confused with the interest rate policy function given by the Taylor
rule. The terms ‘‘policy function’’ or ‘‘decision rule’’ refer to functional equations (func-
tions of functions) that we use for the forward-looking control variables.

3. Similar limitations apply to linear quadratic approximations. Woodford (2003), for
example, conﬁnes his analysis to cases in which ‘‘steady-state growth’’ is perturbed by
‘‘small stochastic variations’’ in the exogenous variables (Woodford 2003, p. 77).
4. At the 2006 Meetings of the Society of Computational Economics and Finance in
Cyprus, the title of Kenneth Judd’s plenary session was ‘‘O Curse of Dimensionality,
Where Is Thy Sting?’’
5. When there are more than one error, we use a robust method for estimating the
parameters of the decision rules, where we weight the errors at each observation by the
inverse of the Euler error variance-covariance matrix (similar to GLS in econometrics).
The advantage of using this robust method is that it puts less weight on errors that have
higher volatility and more weight on errors with lower volatility.
6. Den Haan and Marcet (1994) recommend a sample size of T ¼ 30,000.
7. Good starting values help speed up the optimization process. For this reason we
sometimes use the genetic algorithm (GA) to obtain sensible initial values. As Sirakaya,
212                                                                 Notes to Pages 10–35


Turnovsky, and Alemdar (2006) note, the GA does not require continuity and the exis-
tence of derivatives. The GA is a global search algorithm that starts ‘‘completely blind’’
and learns gradually. Regardless of the initial parameter values, they converge to an ap-
proximate global optimum within the domain space and continue to improve through
genetic operators such as selection, breeding, and mutation. The drawback of the use of
the genetic algorithm for optimization, of course, is that it is much slower than gradient-
based methods. But despite this limitation, Sirakaya, Turnovsky, and Alemdar (2006)
stress that the GA can solve many problems that otherwise are both analytically and
computationally intractable (Sirakaya, Turnovsky, and Alemdar 2006, p. 187). A detailed
description of the genetic algorithm for nonlinear estimation appears in McNelis (2005,
pp. 72–75).
8. In addition to the basic Matlab package, users who wish to reproduce the results
found in this book (and, of course, extend them) will need the Optimization and Statistics
toolboxes.


Chapter 2

1. The functional form adopted in this book assumes that risk is symmetric. However, in
our nonlinear approach we can easily suppress this symmetry. For example, we can
allow the sensitivity of the risk premium to foreign debt and the sensitivity of the risk
discount to foreign assets to be different.
2. The utility function with habit persistence becomes: Ut ð:Þ ¼ ½ðCt  %Ct1 Þ 1h =ð1  hÞ 
½Lt1þ$ =ð1 þ $Þ, where % > 0 is the habit persistence parameter. We assume that % ¼ 0.
3. The utility function can be modiﬁed to impose an upper limit on labor services L at
unity (and a lower limit greater than zero):

           Ct1h ð1  Lt Þ 1þ$
Ut ð:Þ ¼        þ              ;   0 < L a 1:
           1h      1þ$
4. See Orphanides (2000) and Perez (2001), for studies on the Taylor rule using real-time
data, meaning data available at the time when the policy decisions were made.
5. We note at the outset that all models in the book are speciﬁed and calibrated for the
case where the steady-state inﬂation rate is assumed to be zero.
6. See Bullard and Mitra (2002) for a study with private sector learning, and see Evans
and Honkapohja (2003) for a study with central bank learning where the learning relates
to obtaining structural parameters needed in the policy rule. See also Lim and McNelis
(2004, 2007) for studies where the central bank generates forecasts of inﬂation using a
VAR model.
7. For the case, with no Taylor rule, since the policy variable is ﬁxed to the world rate,
Rt ¼ R  , we would not include the interest rate in the information set.
8. A commonly used procedure to study the time-series property of variables is to ﬁrst
ﬁlter the simulated artiﬁcial data using, for example, the Hodrick-Prescott (1980) method
to ﬁlter the data for trend and cyclical effects (see Cooley 1995, pp. 27–29). Since the data
are stationary in these simulations, we have not applied the ﬁlter here. We describe this
application in chapter 3 in the context of the output gap.
9. Note, however, that the persistence, for price, is in the levels and not the ﬁrst dif-
ferences. A more complicated model is needed to generate persistence in inﬂation.
Notes to Pages 50–86                                                                       213



Chapter 3

1. Goodfriend and King (1997) point out that monetary policy cannot eliminate the dis-
tortion caused by the markup, since it has a steady-state effect. Since we are evaluating
monetary policy rules and wish to compare the dynamics of the model under sticky
prices with the dynamics and welfare effects under ﬂexible prices, we follow the common
practice of eliminating this steady-state distortion by assuming an optimal tax or subsidy
scheme to offset the markup effect on pricing and production.
2. These results are further elaborated in Canzoneri, Cumby, and Diba (2004).
3. It should also be noted that the Calvo pricing mechanism is the foundation for
the more familiar new Keynesian Phillips curve, relating the current inﬂation rate to
marginal costs and the discounted future inﬂation rate: pt ¼ l  ht þ bEt ptþ1 , where
l ¼ ð1  xÞð1  xbÞ=x and ht represents the logarithmic transformation of marginal costs
relative to the steady-state value of zero inﬂation. However, Ascari (2003) notes that this
log-linearized version of the Calvo pricing model is misleading (Ascari 2003, p. 3).

4. For further discussion of the price dispersion index and resource costs, see Schmidt-
Grohe and Uribe (2004), Yun (1996), and Goodfriend and King (1997). Yun (2004)
rewrites the dispersion index, in terms of Calvo relative prices, as the following law of
motion: Dt ¼ ð1  xÞ½ pt z þ x½1 þ pt  z  Dt1 . In the steady state this also implies that
        j
Dt ¼ ½Pt =Pt z ¼ 1. This is the benchmark welfare model. Overall, the major implication
of price stickiness is that it creates distortion, and hence it generates resource allocation
costs.
5. As an aside, we note that in both cases, of fully ﬂexible prices as well as sticky prices,
the monetary policy followed an inﬂation targeting rule. The operating assumption is
that monetary policy is following a zero inﬂation target and that productivity shocks are
both positive and negative. The welfare costs of a positive steady-state inﬂation may be
much higher with the sticky price system.
6. Policy attentuation could be continued, however, when large positive changes in the
output gap, or deceases in unemployment, are accompanied by falling inﬂation. In this
case the policy makers could reasonably assume that that the natural rate of unemploy-
ment is falling, or potential output is increasing, since normally a large increase in the
output gap or a sharp fall in unemployment should be accompanied by accelerating
inﬂation. See Lim and McNelis (2007) for a study with state-contingent Taylor rules.
7. See Canova (2007, ch. 3) for a fuller discussion of the HP ﬁlter and related hybrid
decompositions for time-series analysis.


Chapter 4

1. Alternatively, we could let the tax rates, either on income or consumption, be state
contingent, rising and falling (slightly) with domestic debt levels (see Hughes Hallet
2005), or productivity (as suggested by Kim and Kim 2005).


Chapter 5

1. See also Kollmann (2004) for a study with a tax rate on household income that
responds to public debt.
214                                                                Notes to Pages 90–194


2. This formulation can be made more complicated by embedding foreign habit persis-
tence. We leave it to the reader to introduce this, but we will be taking up domestic habit
persistence in chapter 10.


Chapter 6

1. This shadow price of new capital is known as Tobin’s Q since it was introduced by
Tobin (1969) in his article ‘‘A General Equilibrium Approach to Monetary Theory’’ and
later developed by Brainard and Tobin (1977) in their analysis of assets markets and the
cost of capital.
2. We have abstracted from adjustment costs on labor, but we will introduce wage stick-
iness in chapter 9.
3. Of course, we recognize that it would not be straightforward to include the rate of
growth of Tobin’s Q as a target for monetary policy because most central banks do not
know the underlying true model driving investment and thus cannot measure the rate of
growth of this fundamental variable with accuracy, much less on a current quarter-to-
quarter basis. For this reason alone we are not likely to see this variable as a target for
monetary policy, at least in the simple Taylor-rule framework, which is the way we have
characterized the operating procedure for monetary policy in this chapter. Lim and
McNelis (2007) have drawn attention to the role of Q growth in a monetary rule in a
learning environment. Since Q growth is not known with accuracy, Lim and McNelis
have shown that replacing the Taylor rule with a nonlinear threshold rule, in which the
interest rate response to changes in Q growth only if it reaches critical positive or nega-
tive values, is welfare enhancing.


Chapter 9

1. Note that lowering $ affects the utility through the denominator as well as the expo-
nent. A fall in $ in this case increases the disutility of labor. For large initial values of $
the opposite effects take place.


Chapter 11

1. Anna Schwartz reports that from 1995 to 1999, the US stock markets had their biggest
boom ever, with the Dow Jones rising from 3484 at year-end 1994 to 11,145 at the end of
1999, while the Standard and Poor index went from 460 to 1327 and the NASDAQ from
752 to 4069 for the same period (Schwartz 2002).
Bibliography




Aiyagari, S. Rao, Albert Marcet, Thomas J. Sargent, and Juha Seppala. 2002. Optimal
taxation without state-contingent debt. Journal of Political Economy 110: 1220–54.
Arellano, Cristina, and Enrique G. Mendoza. 2002. Credit frictions and sudden stops in
small open economies: An equilibrium business cycle framework for emerging market
crises. Working paper 8880. National Bureau of Economic Research, Cambridge, MA.

Aruoba, S. Borağan, Jesús Fernández-Villaverde, and Juan F. Rubio-Ramı́rez. 2006.
Comparing solution methods for dynamic equilibrium economies. Journal of Economic
Dynamics and Control 30: 2477–2508.
Ascari, Guido. 2003. Staggered prices and trend inﬂation: Some nuisances. Bank of Fin-
land discussion paper 27/2003. Available at SSRN: http://ssrn.com/abstract=501743.
Backus, David K., Patrick J. Kehoe and Finn E. Kydland. 1992. International real business
cycles. Journal of Political Economy 100: 745–75.
Balassa, Bela. 1964. The purchasing power parity doctrine: A reappraisal. Journal of Politi-
cal Economy 72: 584–96.
Benhabib, Jess, and Stefano Eusepi. 2005. The design of monetary and ﬁscal policy: A
global perspective. Working paper, Department of Economics, New York University.
Available at http://www.econ.nyu.edu/user/benhabib/globalﬁnal32.pdf.

Benigno, Pierpaolo, and Michael Woodford. 2004. Optimal monetary and ﬁscal policy: A
linear-quadratic approach. Working paper series 345. European Central Bank. Available
at http://www.ecb.int/pub/pdf/scpwps/ecbwp345.pdf.
Bernanke, Ben S. 2004. The great moderation: Speech at Eastern Economic Association
meetings. Washington, DC: Board of Governors of the Federal Reserve System.
Betts, Caroline, and Michael B. Devereux. 2000. Exchange rate dynamics in a model of
pricing-to-market. Journal of International Economics 50: 215–44.
Blanchard, Olivier Jean, and Charles M. Kahn. 1980. The solution of linear difference
models under rational expectations. Econometrica 48: 1305–12.
Boldrin, M., L. Christiano, and J. Fisher. 2001. Habit persistence, asset returns, and the
business cycle. American Economic Review 91: 149–66.
Bollerslev, Timothy. 1986. Generalized autoregressive conditional heteroskedasticity.
Journal of Econometrics 31: 307–27.
216                                                                       Bibliography


Bollerslev, Timothy. 1987. A conditionally heteroskedastic time series model for specula-
tive prices and rates of return. Review of Economics and Statistics 69: 542–47.
Bullard, J. and Mitra, K. 2002. Learning about monetary policy rules. Journal of Monetary
Economics 49: 1105–29.
Caballero, Ricardo J. Emmanuel Farhi, and Pierre-Olivier Gourinchas. 2006. An equilib-
rium model of ‘‘global imbalances’’ and low interest rates. Working paper 11996. Depart-
ment of Economics, Massachusetts Institute of Technology.
Calvo, Guillermo A. 1983. Staggered prices in a utility-maximizing framework. Journal of
Monetary Economics 12: 383–98.
Calvo, Guillermo A. 2005. Emerging Capital Markets in Turmoil. Cambridge: MIT Press.
Campbell, John Y., and John H. Cochrane. 1999. By force of habit: A consumption-based
explanation of aggregate stock market behavior. Journal of Political Economy 107: 205–51.
Canova, Fabio. 2007. Methods for Applied Macroeconomic Research. Princeton, NJ: Princeton
University Press.
Canzoneri, Matthew B., Robert E. Cumby, and Bhezad T. Diba. 2004a. The cost of
nominal inertia in NNS models. Available at http://www.georgetown.edu/faculty/
canzonem/Costs_02_04_05.pdf.
Canzoneri, Matthew B., Robert E. Cumby, and Bhezad T. Diba. 2005. Price and wage in-
ﬂation targeting: Variations on a theme by Erceg, Henderson and Levin. In Jon Faust,
Athansious Orphanides, and David Reifschneider, eds., Models and Monetary Policy:
Research in the Tradition of Dale Henderson, Richard Porter and Peter Tinsley. Washington,
DC: Board of Governors of the Federal Reserve System.

Carroll, Christopher D., Jody Overland and David N. Weil. 2000. Saving and growth
with habit formation. American Economic Review 90: 341–55.
Chang, Roberto, and Andres Velasco. 2001. A model of ﬁnancial crises in emerging
markets. Quarterly Journal of Economics 116: 489–517.
Chari, V. V., and Patrick J. Kehoe. 1999. Optimal ﬁscal and monetary policy. In J. B.
Taylor and M. Woodford, eds., Handbook of Macroeconomics, vol. 1C. Amsterdam: North
Holland.
Chari, V. V., Patrick J. Kehoe, and Ellen R. McGrattan. 1992. Current real-business-
cycle theories and aggregate labor-market ﬂuctuations. American Economic Review 82:
430–50.

Chari, V. V., Patrick J. Kehoe, and Ellen R. McGrattan. 2000. Sticky price models of the
business cycle: Can the contract multiplier solve the persistence problem? Econometrica
68: 1151–79.
Chari, V. V., Patrick J. Kehoe, and Ellen R. McGrattan. 2002. Can sticky price models
generate volatile and persistent exchange rates? Review of Economic Studies 69: 533–63.
Chari, V. V., Patrick J. Kehoe, and Ellen R. McGrattan. 2005a. A critique of structural
VARs using business cycle theory. Working paper 631. Minneapolis: Federal Reserve
Bank of Minneapolis.
Chari, V. V., Patrick J. Kehoe, and Ellen R. McGrattan. 2005b. Sudden stops and output
drops. American Economic Review: Papers and Proceedings 95: 381–87.
Bibliography                                                                         217


Christiano, Lawrence J., and Jonas D. M. Fischer. 1999. Algorithms for solving dynamic
models with occasionally binding constraints. Available at http://www.faculty.econ
.northwestern.edu/faculty/christiano/research/PEA/ﬁnal99.pdf.
Christiano, Lawrence J., Martin Eichenbaum, and Robert Vigfusson. 2003. What happens
after a technology shock? Working paper 9819. National Bureau of Economic Research,
Cambridge, MA. Available at http://www.nber.org/papers/w9819.
Christiano, Lawrence J., Martin Eichenbaum, and Charles Evans. 1997. Sticky prices and
limited participation models of money. European Economic Review 41: 1201–49.
Clarida, Richard, Jordi Gali, and Mark Gertler. 2001. Optimal monetary policy in open
versus closed economies: An integrated approach. American Economic Review 91: 248–52.

Cochrane, John. 2008. Financial frictions and the real economy. In Raijnish Mehra, ed.,
The Handbook of the Equity Rich Premium. Amsterdam: Elsevier, pp. 239–330.
Cogley, Timothy, and Thomas J. Sargent. 2005. The conquest of U.S. inﬂation: Learning
and robustness to model uncertainty. Review of Economic Dynamics 8: 528–63.
Collard, Fabrice, and Michel Julliard. 2001a. Perturbation methods for rational expecta-
tions models. Manuscript. CEPREMAP, Paris.
Collard, Fabrice, and Michel Julliard. 2001b. Accuracy of stochastic perturbation
methods: The case of asset pricing models. Journal of Economic Dynamics and Control 25:
979–99.
Cooley, Thomas F. 1995. Frontiers of Business Cycle Research. Princeton, NJ: Princeton
University Press.
Davis, Morris, and Jonathan Heathcoate. 2006. The price and quantity of residential
land in the United States. Available at http://www9.georgetown.edu/faculty/jhh9/
land-ﬁnal.pdf.
De Long, B. 2004. John Taylor blasts off for the gamma quadrant. Brad De Long’s Semi-
Daily Journal: A Weblog.
Den Haan, Wouter J., and Albert Marcet. 1990. Solving the stochastic growth model by
parameterizing expectations. Journal of Business and Economic Statistics 8: 31–34.
Den Haan, Wouter J., and Albert Marcet. 1994. Accuracy in simulations. Review of Eco-
nomic Studies 61: 3–17.
Devereux, Michael B. 2001. Monetary policy, exchange rate ﬂexibility, and exchange rate
pass through. Working paper. Department of Economics, University of British Columbia.
Dixit, Avinash K., and Joseph E. Stiglitz. 1977. Monopolistic competition and optimum
product diversity. American Economic Review 67: 297–308.
Dunlop, John T. 1938. The movement of real and money wage rates. Economic Journal
48: 413–34.
Efron, B. 1979. Bootstrap methods: Another look at the jackknife. Annals of Statistics 7:
1–26.
Efron, B., and R. Tibshirani. 1993. An Introduction to the Bootstrap. New York: Chapman
and Hall.
218                                                                      Bibliography


Erceg, Christopher J., Dale W. Henderson, and Andrew T. Levin. 2000. Optimal mone-
tary policy with staggered wage and price contracts. Journal of Monetary Economics 46:
281–313.
Erceg, Christopher J., Luca Guerrieri, and Christopher Gust. 2005. Expansionary ﬁscal
shocks and the trade deﬁcit. International Finance Discussion Paper 825. Board of Gover-
nors of the Federal Reserve System. Available at http://www.federalreserve.gov/pubs/
ifdp/2005/825/ifdp825.pdf.

Evans, G. W., and Honkapohja, S. 2003. Adaptive learning and monetary policy design.
Journal of Money, Credit and Banking 35: 1045–72.
Evans, Martin D. D., and Viktoria Hnatkovska. 2005. International capital ﬂows, returns
and world ﬁnancial integration. Working paper. Department of Economics, Georgetown
University.
Faia, Ester. 2005. Financial frictions and the choice of exchange rate regimes. Working
paper. Universitat Pompeu Fabra, Barcelona.
Feldstein, Martin. 2006. Central banking: Is science replacing art? Comments at European
Central Bank Conference in Honor of Otmar Issing. Available at http://www.nber.org/
feldstein/issingcomments.html.

Fernandez-Villaverde, Jesus. 2006. Nonlinear and non-gaussian methods in DSGE mod-
els. Manuscript. Department of Economics, Duke University.
Fernandez-Villaverde, Jesus, and Juan Rubio. 2006. Solving DSGE models with perturba-
tion methods and a change of variables. Journal of Economic Dynamics and Control 30:
2509–31.
Feynman, R. R. Leighton, and M. Sands. 1963. The Feynman Lectures on Physics, vol. 1.
Reading, MA: Addison-Wesley.
Fogli, Allesandro, and Fabrizio Perri. 2006. The great moderation and the US external
imbalance. Working paper 2006-E-22. Institute for Monetary and Economic Studies,
Bank of Japan, Tokyo.

Franses, Philip Hans, and Dick van Dijk. 2000. Non-linear Time Series Models in Empirical
Finance. Cambridge: Cambridge University Press.

Frenkel, Jacob A., Assaf Razin, and Chi-Wa Yuen. 1996. Fiscal Policies and Growth in the
World Economy. Cambridge: MIT Press.
Friedman, Milton. 1968. The role of monetary policy. American Economic Review 58: 1–
17.
Galı́, Jordi. 1999. Technology, employment, and the business cycle: Do technology shocks
explain aggregate ﬂuctuations? American Economic Review 89: 249–71.
Galı́, Jordi. 2004. Trends in hours, balanced growth, and the role of technology in the
business cycle. Review of Federal Reserve Bank of St. Louis 87: 459–86.
Galı́, Jordi, and Tommaso Monacelli. 2005. Monetary policy and exchange rate volatility
in a small open economy. Review of Economic Studies 72: 707–34.
Goodfriend, Marvin. 2002. Monetary policy in the new neoclassical synthesis: A primer.
Available at http://www.blackwellpublishing.com/pdf/goodfriend.pdf.
Bibliography                                                                          219


Galı́, Jordi, and Robert G. King. 1997. The new neoclassical synthesis and the role of
monetary policy. NBER Macroeconomics Annual 12: 231–83.
Granger, Clive, and Y. Jeo. 2004. Thick modeling. Economic Modeling 21: 323–43.

Gray, Jo Anna. 1978. On indexation and contract length. Journal of Political Economy 86:
1–18.

Gregory, A., and G. Smith. 1993. Calibration in macroeconomics. In G. Maddala, ed.,
Handbook of Statistics, vol. 11. Amsterdam: Elsevier Science, pp. 703–19.
Hansen, Lars Peter, and Thomas J. Sargent. 2000. Wanting robustness in macroeconom-
ics. Working paper. Department of Economics, New York University. Available at
http://homepages.nyu.edu/~ts43/.
Harrod, R. F. 1933. International Economics. Cambridge: Cambridge University Press.
Heer, Burkhard, and Alfred Maußner. 2005. Dynamic General Equilibrium Modelling: Com-
putational Methods and Applications. Berlin: Springer-Verlag.
Hendry, Scott, Wai-Ming Ho, and Kevin Moran. 2003. Simple monetary policy rules in an
open-economy limited participation model. Working paper 2003-08. Bank of Canada.
Hodrick, Robert J., and Edward C. Prescott. 1980. Post-war U.S. business cycles: An
empirical investigation. Mimeo. Carnegie-Mellon University.
Hornik, Kurt, Maxwell Stinchcombe, and Halbert White. 1989. Multilayer feedforward
networks are universal approximators. Neural Networks 2: 359–66.
Hughes Hallet, Andrew. 2005. Fiscal policy coordination with independent monetary
policies: Is it possible? Working paper. Department of Economics, Vanderbilt University.
Jensen, J. L. W. V. 1906. Sur les fonctions convexes et les inégalités entre les valeurs
moyennes. Acta Mathematica 30: 175–93.

Judd, John P., and Glenn D. Rudebusch. 1998. Taylor’s rule and the Fed: 1970–1997.
Economic Review: Federal Reserve Bank of San Francisco 3: 3–16.

Judd, Kenneth L. 1992. Perturbation solution methods for economic growth models. In
Hal Varian, ed., Economic and Financial Modelling with Mathematica. New York: Springer-
Verlag, pp. 80–103.
Judd, Kenneth L. 1996. Approximation, perturbation, and projection solution methods in
economics. In Hans M. Amman et al., eds., Handbook of Computational Economics, vol. 1.
Amsterdam: Elsevier, pp. 509–86.
Judd, Kenneth L., and Jess Gaspar. 1997. Solving large-scale rational-expectations mod-
els. Macroeconomic Dynamics 1: 45–75.

Justiniano, Alejandro, and Giorgio Primiceri. 2006. The sources of macroeconomic stabil-
ity: Good luck or good policy? Available at http://www.nottingham.ac.uk/economics/
res/media2006/surico%20et%20al.pdf.
Kara, Amit, and Edward Nelson. 2002. The exchange rate and inﬂation in the UK
Bank of England, External MPC Unit. Discussion paper 11. Available at http://www
.bankofengland.co.uk/publications/other/externalmpcpapers/extmpcpaper0011.pdf.
Kim, Jinill, and Sunghyun Henry Kim. 2005. Welfare effects of tax policy in open econo-
mies: Stabilization and cooperation. Working paper. Department of Economics, Tufts
University. Available at http://www.tufts.edu/%7Eskim20/paper/kk2.pdf.
220                                                                       Bibliography


Kollmann, Robert. 2004. Welfare-maximizing operational monetary and tax policy rules.
Working paper 4782. Center for Economic Policy Research. Available at http://www
.robertkollmann.com/MonFisc_240705.pdf.
Kydland, Finn E., and Edward C. Prescott. 1982. Time to build and aggregate ﬂuctua-
tions. Econometrica 50: 1345–70.
Lahiri, Amartya, Rajesh Singh, and Carlos Végh. 2005. Segmented asset markets and
optimal exchange rate regimes. Journal of International Economics, forthcoming.
Laxton, Douglas, and Paolo Pesenti. 2003. Monetary rules for small, open, emerging
economies. Journal of Monetary Economics 50: 1109–46.
Lim, G. C., and Paul D. McNelis. 2004. Learning and the monetary policy strategy of the
European Central Bank. Journal of International Money and Finance 23: 997–1010.
Lim, G. C., and Paul D. McNelis. 2007. Inﬂation targeting, learning and Q volatility in
small open economies. Journal of Economic Dynamics and Control 31(11): 3699–3722.

Lubik, Thomas, and Frank Schorfheide. 2005. A Bayesian look at new open economy
macroeconomics. Working paper. Department of Economics, Johns Hopkins University,
Baltimore. Available at http://www.econ.jhu.edu/people/lubik/nber05.pdf.
Lucas, Robert E., Jr. 1976. Econometric policy evaluation: A critique. Carnegie-Rochester
Conference Series on Public Policy: The Phillips Curve and Labor Markets 1: 19–46.
Lucas, Robert E., Jr. 1993. On the welfare costs of inﬂation. Manuscript. Department of
Economics, University of Chicago.
Marcet, Albert, and Juan Pablo Nicolini. 2003. Recurrent hyperinﬂations and learning.
American Economic Review 93: 1476–98.
Marcet, Albert. 1988. Solving nonlinear models by parameterizing expectations. Working
paper. Graduate School of Industrial Administration, Carnegie Mellon University.
Marcet, Albert. 1993. Simulation analysis of dynamic stochastic models: Applications to
theory and estimation. Working paper. Department of Economics, Universitat Pompeu
Fabra, Barcelona.

Marcet, Albert, and G. Lorenzoni. 1998. The parameterized expectations approach: Some
practical issues. In R. Marimon and A. Scott, ed., Computational Methods for the Study of
Dynamic Economies. Oxford: Oxford University Press, pp. 143–71.
McCallum, Bennett T. 1981. Price level determinacy with an interest rate policy rule and
rational expectations. Journal of Monetary Economics 8: 319–29.
McCallum, Bennett T. 2001. Analysis of monetary transmission mechanisms: Method-
ological issues. In Deutsche Bundesbank, ed., The Monetary Transmission Process: Recent
Developments and Lessons for Europe. New York: Palgrave Macmillan, pp. 11–43.
Mehra, Rainjish, and Edward J. Prescott. 1985. The equity premium: A puzzle. Journal of
Monetary Economics 15: 145–61.

Mendoza, Enrique G., Vincenzo Quadrini and José-Victor Rı́os-Rull. 2006. Financial
integration, ﬁnancial deepness and global imbalances. Working paper. Department of
Economics, University of Maryland.
Miranda, Mario J., and Paul L. Fackler. 2002. Applied Computational Economics and Finance.
Cambridge: MIT Press.
Bibliography                                                                          221


Obstfeld, Maurice, and Kenneth Rogoff. 2002. Risk and exchange rates. In Elhanan Help-
man and Efraim Sadka, eds., Economic Policy in the International Economy: Essays in Honor
of Assaf Razin. Cambridge: Cambridge University Press, pp. 74–117.
Obstfeld, Maurice, and Kenneth Rogoff. 2006. The unsustainable current account position
of the United States revisited. Working paper. Deparment of Economics, University of
California, Berkeley.
Olivera, J. 1967. Money, prices and ﬁscal lags: A note on the dynamics of inﬂation. Banca
Nationale del Lavoro Quarterly Review 20: 258–67.
Orphanides, Athanasios, and John C. Williams. 2002a. Imperfect knowledge, inﬂation
expectations, and monetary policy. Working paper. Finance and Economics Discussion
Series, Board of Governors of the Federal Reserve System. Available at http://www
.federalreserve.gov/pubs/feds/2002/200227/200227pap.pdf.
Orphanides, Athanasios, and John C. Williams. 2002b. Robust monetary policy rules with
unknown natural rates. Brookings Papers on Economic Activity 2002: 63–118.
Oviedo, P. Marcelo. 2005. World interest rate, business cycles, and ﬁnancial interme-
diation in small open economies. Manuscript. Department of Economics, Iowa State
University.

Piazzesi, Monika, Martin Schneider, and Selale Tuzel. 2006. Housing, consumption, and
asset pricing. Journal of Financial Econometrics 83: 531–69.
Razin, Assaf. 2005. Globalization and disinﬂation: A note. Working paper 10954. Na-
tional Bureau of Economic Research. Available at http://papers.nber.org/papers/
w10954.pdf.
Samuelson, Paul A. 1964. Theoretical notes on trade problems. Review of Economics and
Statistics 46: 145–54.
Sargent, Thomas J. 1979. Macroeconomic Theory. 2nd ed. New York: Academic Press.
Sargent, Thomas. 1991. Two difﬁculties in interpreting vector autoregressions. In Rational
Expectations Econometrics. Underground Classics in Economics. Boulder, CO: Westview
Press.
Sargent, Thomas J., and Neil Wallace. 1975. ‘‘Rational’’ expectations, the optimal mone-
tary instrument, and the optimal money supply rule. Journal of Political Economy 83:
241–54.
Schmitt-Grohé, Stephanie, and Martı́n Uribe. 2003. Closing small open economy models.
Journal of International Economics 61: 163–85.
Schmitt-Grohé, Stephanie, and Martı́n Uribe. 2004a. Optimal simple and implementable
monetary and ﬁscal rules. Working paper 10253. National Bureau of Economics Re-
search, Cambridge, MA. Available at http://www.econ.duke.edu/~uribe/simple.pdf.
Schmitt-Grohé, Stephanie, and Martı́n Uribe. 2004b. Solving dynamic general equilib-
rium models using a second-order approximation to the policy function. Journal of Eco-
nomic Dynamics and Control 28: 755–75.

Schmitt-Grohé, Stephanie, and Martı́n Uribe. 2005. Habit persistence. In Steven Durlauf
and Lawrence Blume, eds., The New Palgrave Dictionary of Economics, forthcoming.
222                                                                         Bibliography


Schmitt-Grohé, Stephanie, and Martı́n Uribe. 2006. Comparing two variants of Calvo-
type wage stickiness. Working paper 12740. National Bureau of Economic Research,
Cambridge, MA.
Schwartz, Anna J. 2002. Asset price inﬂation and monetary policy. Working paper 9321.
National Bureau of Economic Research, Cambridge, MA.
Sims, Christopher A. 1980. Macroeconomics and reality. Econometrica 48: 1–48.
Sims, Christopher A. 2001. Solving linear rational expectations models. Computational
Economics 20: 1–20.
Sirakaya, Sibel, Stephen Turnovsky, and M. Nedim Alemdar. 2006. Feedback approxima-
tion of the stochastic growth model by genetic neural networks. Computational Economics
27: 185–206.
Smets, Frank, and Raf Wouters. 2002. Openness, imperfect exchange rate pass-through,
and monetary policy. Journal of Monetary Economics 49: 947–81.

Smets, Frank, and Raf Wouters. 2003. An estimated dynamic stochastic general equilib-
rium model of the euro area. Journal of the European Economic Association 1: 1123–75.

Smith, Anthony A., Jr. 2004. Computational methods in economics: General points. Class
materials. Available at www.econ.yale.edu/smith/econ561b/compute5.pdf.
Summers, Lawrence. 2003. Address on the bubble in asset prices, Davos World
Economic Forum, annual meeting 2003. Available at www.weforum.org/site/
knowledgenavigator.nsf/Content/_S7593?open.
Summers, Peter M. 2005. What caused the great moderation? Some cross-country evi-
dence. Economic Review, Federal Reserve Bank of Kansas, pp. 5–31.
Svensson, Lars E. O. 2000. Open-economy inﬂation targeting. Journal of International
Economics 50: 155–83.
Swanson, Eric T. 2006. Optimal nonlinear policy: Signal extraction with a non-normal
prior. Journal of Economic Dynamics and Control 30: 185–203.
Tanzi, V. 1978. Inﬂation, real tax revenues, and the case for inﬂationary ﬁnance: Theory
with an application to Argentina. IMF Staff Papers.
Tarshis, Lorie. 1939. Changes in real and money wages. Economic Journal 49: 150–54.
Taylor, John B. 1979. Staggered contracts in a macro model. American Economic Review 69:
108–13.
Taylor, John B. 1993. Discretion vs. policy rules in practice. Carnegie-Rochester Conference
Series on Public Policy 39: 195–214.

Taylor, John B. 2000. Using monetary policy rules in emerging economies. In Stabilization
and Monetary Policy: The International Experience. Mexico City: Bank of Mexico, pp. 441–
58.
Taylor, John B. 2004. The U.S. current account: Recent trends and policies. JS 2084, Ofﬁce
of Public Affairs, United States Department of the Treasury. Available at http://
www.treas.gov/press/releases/js2084.htm.
Uribe, Martı́n. 2003. Real exchange rate targeting and macroeconomic instability. Journal
of International Economics 59: 137–59.
Bibliography                                                                           223


Walsh, Carl E. 1998. Monetary Theory and Policy. Cambridge: MIT Press.
Winistörfer, Patrick, and Fabio Canova. 2006. Introduction to Matlab. Available at http://
crei.cat/people/canova/teaching%20pdf/intro%20to%20matlab.pdf.

Wolkenhauer, Olaf. 2001. Data Engineering: Fuzzy Mathematics in Systems Theory and Data
Analysis. New York: Wiley.

Woodford, Michael. 2003. Interest and Prices: Foundations of a Theory of Monetary Policy.
Princeton, NJ: Princeton University Press.
Wright, Brian D., and Jeffrey C. Williams. 1982. The economic role of commodity storage.
Economic Journal 92: 596–614.
Wright, Brian D., and Jeffrey C. Williams. 1984. The welfare effects of the introduction of
storage. Quarterly Journal of Economics 99: 169–92.
Wright, Brian D., and Jeffrey C. Williams. 1991. Storage and Commodity Markets. Cam-
bridge: Cambridge University Press.
Yun, Tack. 1996. Nominal price rigidity, money supply endogeneity, and business cycles.
Journal of Monetary Economics 37: 345–70.
Index




Accuracy tests or checks, 12–13. See also      in habit persistence model, 177
     Den Haan-Marcet statistic; Judd-          and Keynesian Phillips curve, 213n.3
     Gaspar statistic                          staggered, 162
  in capital accumulation model, 112–13        and sticky domestic price model, 49–53
  for current account–ﬁscal balance model,     and sticky price setting, 157
     91                                        with taxes, 72
  for habit persistence model, 181             in two-sector model, 122, 125, 126, 127
  in small open economy model, 29–32           in wage stickiness model, 164
  for sticky domestic price model, 54–56     Capital accumulation model, 105–109
  for tax regime model, 75                     accuracy tests for, 112–13
  in two-sector model, 128                     approximating equations in, 109–12
  in wage stickiness model, 165                impulse response functions for, 113–14
Adjustment costs, real, 114                    macroeconomic correlations for, 114
Approximating equations                        Q targeting in, 114–18
  in capital accumulation model, 109–12        risk and Q growth (computational
  for habit persistence model, 180–81             exercise), 119
Approximating functions, 7–8                 Capital reversals, 192–94
  in small open economy model, 28–29         Central bank, and asset-price volatility,
  for sticky domestic prices, 53                  103–104
‘‘Asian ﬂu,’’ 193–94                         ‘‘Change of variable’’ method, 5–6
Asset-price inﬂation, 103–104, 104–105       Chebychev approximating functions, 7, 8
                                             Closed economy framework, 70
Backward-looking error-correction            Closure condition, for small open
   approach, 47–48                                economy model, 20–21
Banking sector, 139. See also Financial      Computational algorithms, implemen-
   frictions model                                tation of, xiii–xiv
Bernanke, Ben, 153                           Computational analysis
Bounded rationality, 196                       for current account–ﬁscal balance model,
Business-cycle analysis, open economy,            90–91
   17                                          for sticky domestic prices, 53–56
Business cycles, welfare costs of, 61–62     Computational approaches to policy
                                                  evaluation, 14
Calibration, in small open economy           Computational stochastic nonlinear
    model, 27–28                                  dynamic general equilibrium models,
Calvo, Guillermo, 139, 192–93, 196                xi–xii. See also Dynamic stochastic
Calvo pricing                                     general equilibrium
 in capital accumulation model, 108          Computer algorithm, 205–209
 in ﬁnancial frictions model, 143–44         Consumption, 21–23, 174
226                                                                               Index


Consumption compensation percentage,         Entrepreneurs
    61                                        in capital accumulation model, 105–109
‘‘Control’’ variable, 4                       in small open economy, 21
Corden, W. Max, 121                           in two-sector model, 122–25
Current account–ﬁscal balance relation-      Equity premium puzzle, 119
    ship, 85–86, 98–99                       Euler equation errors, 10, 12–13
  computational analysis of, 90–91            in capital accumulation model, 110, 112
  as endogenous exports model, 86–90          in current account–ﬁscal balance model,
  and export elasticity, 94–96                   90–91
  and government expenditure, 96–98           in ﬁnancial frictions model, 147
  productivity shocks in, 91, 93–94           for habit persistence model, 181
  and risk exchange–rate volatility           Judd-Gaspar, 40
    (computational exercise), 100–101         in small open economy model, 29
                                              for sticky domestic prices, 54
Debt, domestic                                for tax-regime model, 75
 and Calvo pricing, 53                        in two-sector model, 128
 and government expenditure, 133              in wage stickiness model, 165
 in small open economy model, 27             Euler equations, 12
 and taxes, 73, 90, 109, 145, 163             for Calvo pricing, 49–50
Debt, foreign                                 in capital accumulation model, 107
 and Calvo pricing, 53                        in habit persistence model, 177–78
 and exports, 27, 73, 90, 109, 145, 163       household, 22–23, 71–72
 and risk, 119                                and projection method, 6
Deﬁnitions                                    in wage stickiness model, 161
 of symbols, 201                             Exchange rate, real
 of variables, 203                            computational exercise on volatility of,
De Long, Bradford, 85                            100–101
Demand (export) shocks                        and consumption, 184
 in capital accumulation model, 117           in current account–ﬁscal balance model,
 and small open economy model, 39–43             86, 90, 91, 93, 94, 95, 96, 98
Den Haan-Marcet statistic, 12, 13, 29, 32,    in two-sector model (computational
    54, 64, 75, 91, 95, 112, 147, 165, 181       exercise), 135–37
Dimensionality, curse of, 10                 Exchange-rate ﬂexibility, 139
Dunlop-Tarshis puzzle, 171–72                Export elasticity, and current account–
Dutch disease, 121                               ﬁscal balance relationship, 94–96
Dynamic stochastic general equilibrium       Exports
    (DSGE) model, 2–3, 17                     and Calvo pricing, 53
 with banking, 140–47 (see also Financial     endogenous, 86–90
    frictions model)                          and foreign debt, 73, 90, 109, 127, 145, 163
 computational methods for, 196               price of (two-sector model), 126
 and ﬁscal–trade balance correlation, 86      and small open economy model, 27
 with habit persistence, 174–81 (see also     in wage stickiness model, 162
    Habit persistence model)                 Export shocks
 multisector, 121                             in capital accumulation model, 117
 projection method in solving of, 6           and small open economy model, 39–43
  nonlinear, 192                             External sector, in habit persistence model,
 and small open economy model, 19 (see           179
    also Open economy model, small)
 and tax regime model, 83 (see also Tax      Feedforward network, 9
    regime model)                            Feldstein, Martin, xiii
 and wage stickiness model, 170 (see also    Feldstein-Horioka thesis, 85–86
    Wage stickiness model)                   Feynman, Richard, xii
Index                                                                                  227


Finance, and macroeconomics, 118                Habit persistence model, 173, 174–81, 187–
Financial frictions, 139, 150–52                    88
 from capital reversals, 193                     impulse-responses to productivity shock
 in two-sector model, 131–32, 135–36                in, 181, 183
Financial frictions model, 139–47, 152–53        and international shocks, 186–87
 and ‘‘great moderation’’ (computational         macroeconomic correlations for, 183–85
    exercise), 153–55                            no-inﬂation targeting in, 185–86
 impulse-response paths in, 149–50, 152          and relationship of interest rates and
 macroeconomic correlations in, 150–52              output (computational exercise), 188–
 scenario analysis for, 152                         89
 solution algorithm for, 147–49                 Harrod-Balassa-Samuelson effect, 121
Financial sector                                Herding behavior, 192
 in ﬁnancial friction model, 140, 146–47        Hodrik-Prescott ﬁlter (HP ﬁlter), 66–68
 in habit persistence model, 179–80             Household Euler equations
 in wage stickiness model, 163–64                in small open economy model, 22–23
Firms. See also Entrepreneurs                    with tax payments, 71–72
 in current account–ﬁscal balance model,        Household sector
    89                                           in capital accumulation model, 105–109
 in ﬁnancial frictions model, 143                in current account–ﬁscal balance model,
 in habit persistence model, 178                    87–89
 in wage stickiness model, 161–62                without explicit ﬁnancial sector, 105
Fiscal authorities, 25                           in ﬁnancial frictions model, 140–43
Fiscal balance and current account               in habit persistence model, 174–77
    balance. See Current account–ﬁscal           in sticky domestic price model, 49–50
    balance relationship                         in two-sector model, 122–25
Fiscal policy, 69                                in wage stickiness model, 158–61
Flexibility                                     Housing, in household consumption and
 and inﬂation, 26                                   asset portfolio decision, 196
 and monetary policy, 26, 34
 of open economy model, 15, 19, 20, 25,         Impulse-response analysis
    37, 41–42, 43 (see also Open economy         for capital accumulation model, 113–14,
    model, small)                                   116
 vs. sticky prices, 61                           for current account–ﬁscal balance model,
 and welfare distributions, 37, 38                  91, 95
Frictions, expectational, 196                    in ﬁnancial frictions model, 149–50, 152
Frictions, ﬁnancial. See at Financial            and habit persistence model, 181, 183, 186
    frictions                                    for small open economy model, 32–34,
Friedman, Milton, 62                                40–41, 43
                                                 for sticky domestic prices, 56–58
Globalization process, and ﬁscal policies, 69    for tax regime model, 75–78, 83
Government expenditure, and current               labor income vs. consumption tax, 80–
     account–ﬁscal balance model, 96–98             82
Government sector                                in two-sector model, 128–31, 133
  and Calvo pricing, 52–53                       in wage stickiness model, 165–67, 169–70
  in habit persistence model, 178–79            Inﬂation
Gray, Joanna, 157                                asset price, 103–104, 104–105
‘‘Great moderation’’ (computational              in great moderation, 154
     exercise), 153–55, 194                      in model with taxes, 72
                                                 and output gap, 62
Habit formation, 173–74                          in small open economy model, 26
Habit persistence, utility function with,        and Taylor rule, 25 (see also Taylor rule)
  212n.2                                         and Tobin’s Q, 103, 115, 118
228                                                                                 Index


Inﬂation (cont.)                                Monetary policy, 26–27
 and two-sector model, 121                       and Calvo pricing, 52–53
 and welfare, 70                                 in capital accumulation model, 109
Inﬂation targeting, 69, 70, 117, 126, 139,       and closed economy setting, 2, 70
    140, 152                                     in current account–ﬁscal balance model,
 and no-inﬂation targeting, 185–86                  89
 sticky wage vs. sticky domestic price,          and distortionary taxation, 70
    158                                          in ﬁnancial frictions model, 144
Interest rate, 25                                and ‘‘great moderation,’’ 154
 and future output (computational                for habit persistence model (no-inﬂation
    exercise), 188, 188–89                          targeting), 185
 for habit persistence model (no-inﬂation        and inﬂation, 70, 103, 104, 154
    targeting), 185                              and new Keynesian macroeconomics, 48
 and output gap, 62, 64                          ‘‘operational rule’’ for, 158
 in small open economy model, 26, 27, 28,        and output gap, 62, 65–66
    33–34                                        and rational expectations, 48
International capital ﬂows, 192                  and risk, 118
 capital reversals, 192–94                       and sticky price economy, 61
 continuing inﬂows, 194–96                       in tax regime model, 72–73
International shocks, and habit persistence      and Tobin’s Q, 103 (see also Tobin’s Q)
    model, 186–87                                in two-sector model, 126
Intertemporal welfare function, 21               in wage stickiness model, 162–63
                                                Monte Carlo simulation, 10
Judd, Kenneth, xii, 8                           Moral hazard, in central bank as lender of
Judd-Gaspar statistic, 12–13, 29, 32, 40, 54,       last resort, 152
   64, 75, 91, 95, 112, 128, 147, 165, 181      Multi-layer perception (MLP) network, 9

Keynesian macroeconomics, new, 48               Natural resources, trade boom from, 121
Keynesian Phillips curve, 213n.3                Neary, J. Peter, 121
Keynesian sticky price models, and risk         Neural networks, 7, 8
   aversion, 100                                 logistic, 8–9
                                                New Keynesian macroeconomics, 48
Labor, in small open economy model, 21–         New neoclassical synthesis, 48, 99
   23                                           New open economy macroeconomics, 99
Logistic neural networks, 8–9                   NNS (new neoclassical synthesis) models,
Log-linearization, 5–6                             2
                                                No-inﬂation targeting, in habit persistence
Macroeconomic correlations                         model, 185–86
  for capital accumulation model, 114           Nonlinear models, xii–xiii
  in ﬁnancial frictions model, 150–52           Numerical methods, and economists, xii
  for habit persistence model, 183–85           Numerical Methods in Economics (Judd),
  for small open economy model, 41–43              xii
  for sticky domestic prices, 58–59
  in wage stickiness model, 167–68              One-sector production, in capital
Macroeconomics, and ﬁnance, 118                    accumulation model, 108–109
‘‘Macroeconomics and Reality’’ (Sims),          Open economy business-cycle analysis,
     83                                            17
Marginal disutility of labor, 168–69, 170       Open economy model, small, 19–28, 43
Markup distortion, 51                            with Calvo pricing, 49–53, 54 (see also
Methods, solution. See Solution methods            Calvo pricing)
Monetary neutrality, 34                          impulse-response analysis for, 32–34
Index                                                                               229


 projection solution method in, 28–32          and habit persistence model, 181, 186
 and shocks, 34–37, 39–45                      for small open economy model, 24, 32, 36,
 with taxes, 71–83                                40, 41, 42
 two-sector, 122 (see also Two-sector          in two-sector model, 130, 134
   model)                                      in wage stickiness model, 170
 and Taylor rule, 25–27, 32–34                Projection methods, 4, 6–13
 welfare distributions in, 37–38, 43           with output gap, 63
Open economy model, small, expanded            and price stickiness, 65
   versions of. See Capital accumulation       in small open economy model, 28–29
   model; Current account–ﬁscal balance
   relationship; Financial frictions model;   Q. See Tobin’s Q
   Habit persistence model; International     Q growth, 119
   capital ﬂows; Sticky domestic price        Q targeting, 114–17, 118
   model; Tax regime model; Two-sector        Quantitative policy analysis, xi
   (resource and manufacturing) model;
   Wage stickiness model                      Rational expectations
Open economy new neoclassical synthesis        and backward-looking approach, 47–48
   (NNS) models, 2                             and monetary policy, 48
Open economy setting, 1–3                     Rationality, bounded, 196
 vs. closed, 14                               Relative price dispersion, real resource
 and projection method, 12                       cost of, 52
Optimal price, 51                             Resource boom, 121
Optimizing algorithm, 9–12, 211–12n.7         Risk, in capital accumulation model, 119
Output, and interest rate (computational      Risk premium, in closure of small open
   exercise), 188–89                             economy model, 20–21
Output gaps, 15–16
 computational exercise on, 66–68             Savings-investment correlations, 85, 86
 measure of, 66                               Sensitivity analysis, for wage stickiness
 and sticky domestic prices, 62–65                model, 168–70
                                              Shock processes, simulated paths of, 43–
Perturbation method, 4, 5–6, 11                   45
Phillips curve, Keynesian, 213n.3             Shocks (exogenous forces), 2, 3, 6, 14
Price, optimal, 51                             in small open economy model, 34–37,
Price stickiness. See Sticky prices               42–43, 45
Pricing behavior                              Shocks, demand (export)
 in small open economy model, 25               in capital accumulation model, 117
 in two-sector model, 125–26                   and small open economy model, 39–43
Production                                    Shocks, international, 186–87
 and Calvo pricing, 50–52, 72                 Shocks, productivity (supply)
 in small open economy model, 24–25            in capital accumulation model, 115–16
Production decisions, in two-sector model,     in current account–ﬁscal balance model,
    125                                           91, 93–94
Production sector, in habit persistence        and habit persistence model, 181, 186
    model, 177–78                              for small open economy model, 24, 32, 36,
Productivity                                      40, 41, 42
 and booming resource sectors, 122             in two-sector model, 130, 134
 and exogenous capital inﬂows, 196             in wage stickiness model, 170
Productivity shocks                           Shocks, technology, 36
 in capital accumulation model, 115–16        Shocks, terms-of-trade, in two-sector
 in current account–ﬁscal balance model,          model, 132–34, 134–35
    91, 93–94                                 Signal extraction, 63
230                                                                                 Index


Simulation analysis, 172. See also Stochastic     as computational exercise, 43–45
    simulations                                  for sticky domestic prices, 56–62
 of continuing capital inﬂows, 195–96            for tax regime model, 75–78
 in ﬁnancial frictions model, 149–52             in two-sector model, 131–32
 in habit persistence model, 185–86             Summers, Lawrence, 104
 for two-sector model, 128–32                   Supply shocks. See Productivity shocks
 in wage stickiness model, 165–68               Symbols, deﬁnitions of, 201
Small open economy model. See Open
    economy model, small                        Taxes
Smith, Anthony A. Jr., 34                        and Calvo pricing, 53
Smoothing parameter, 26, 52                      and domestic debt, 73, 90, 109, 127, 145,
Solution methods, 3–4                               163
 perturbation method, 5–6, 11                    and small open economy model, 27
 projection methods and accuracy tests, 6–      Tax regime model, 69, 71–75, 82
    13 (see also Accuracy tests; Projection      impulse-response analysis for, 75–78
    methods)                                     scenarios for labor income vs.
Stickiness                                          consumption tax, 79–82
 in information, 12                              validation of with VARs (computational
 of interest rates, 34                              exercise), 83
 in price setting, 2, 47                         welfare comparisons for, 78, 81, 82–83
 of real adjustment costs, 114                  Taylor, John, 85, 157
Sticky domestic price model, 47, 49–56,         Taylor expansion, 5
    157–58                                      Taylor principle, 26
 and backward-looking approach, 47–             Taylor rule, 25, 52, 62
    48                                           in capital accumulation model, 109
 and Calvo pricing, 49–53, 54                    computational exercise on output in, 66–
 impulse-response analysis for, 56–58               68
 macroeconomic correlations for, 58–59           in current account–ﬁscal balance model,
 and output gaps, 62–65                             89
 and output in Taylor rule (computational        with output gap, 64–65, 65–66
    exercise), 66–68                             output growth in, 68
 welfare analysis for, 59–62, 66                 parameters of, 27–28
Sticky price models, Keynesian, and risk         in policy switch, 155
    aversion, 100                                and Q targeting, 114, 118
Sticky prices (price stickiness), 37–38          and small open economy model, 25–27,
 and imported goods, 157                            32–34, 34, 38
 as loosening relationships, 151                 and sticky prices, 57–58, 157
 and monetary policy, 2                          in tax-regime model, 72
 and projection method, 65                       and two-sector model, 122
Sticky wages. See Wage stickiness model          and wage stickiness model, 170–71
Stochastic nonlinear dynamic general            Technology shock, in two-sector model, 134
    equilibrium models, xi–xii. See also        Tequila crisis, 193
    Dynamic stochastic general                  Terms-of-trade shocks, in two-sector
    equilibrium                                     model, 132–34, 134–35
Stochastic simulations. See also Simulation     Tobin’s Q, 103, 106, 110, 117–18, 214nn.1,3
    analysis                                    Twin deﬁcit relationship, 85–86. See also
 for capital accumulation model, 113–14             Current account–ﬁscal balance
 for current account–ﬁscal balance model,           relationship
    93–94                                       Two-country model, 196
 for habit persistence model, 181–85            Two-sector (resource and manufacturing)
 for small open economy model, 32–38,               model, 121, 122–28
    40–43                                        impulse-response paths in, 128–31
Index                                       231


 and real exchange cross-correlations
    (computational exercise), 135–37
 stochastic simulations in, 131–32
 terms-of-trade shocks in, 132–34, 134–35

Unemployment
 natural rate of, 62
 and output gap, 63
Utility function
 and habit persistence model, 173, 212n.2
 household, 21, 212nn.2,3

Variables, deﬁnitions of, 203
Vector autoregressive (VAR) model, 83
Volatility clustering, 11, 43

Wage stickiness model, 157–65, 170–71
and Dunlop-Tarshis puzzle
   (computational exercise), 171–72
impulse-response paths in, 165–67, 169–
   70
macroeconomic correlations for, 167–68
sensitivity analysis for, 168–70
Welfare
from consumption vs. income taxes, 82
and policy, 13–14
Welfare analysis, for sticky domestic
   prices, 59–62, 66
Welfare comparisons, tax regime vs. no-
   tax regime, 78, 81, 82–83
Welfare distributions, in small open
   economy model, 37–38, 43, 47
Welfare function, intertemporal, 175
Welfare measures, evaluation of, 14



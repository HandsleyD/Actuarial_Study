---
normalized_id: shared-pdf-reference-stochastic-methods-in-finance-m-morel-cachan
exam_code: SHARED
material_scope: stochastic methods in finance - m. morel, cachan.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Stochastic Methods In Finance - M. Morel, Cachan.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-stochastic-methods-in-finance-m-morel-cachan

Lecture Notes in Mathematics   1856
Editors:
J.--M. Morel, Cachan
F. Takens, Groningen
B. Teissier, Paris

Subseries:
Fondazione C.I.M.E., Firenze
Adviser: Pietro Zecca
K. Back   T.R. Bielecki C. Hipp
S. Peng   W. Schachermayer


Stochastic Methods
in Finance
Lectures given at the
C.I.M.E.-E.M.S. Summer School
held in Bressanone/Brixen, Italy,
July 6--12, 2003
Editors: M. Frittelli
         W. Runggaldier




123
Editors and Authors

Kerry Back                                                Shige Peng
Mays Business School                                      Institute of Mathematics
Department of Finance                                     Shandong University
310C Wehner Bldg.                                         250100 Jinan
College Station, TX 77879-4218, USA                       People’s Republic of China
e-mail: back@olin.wustl.edu                               e-mail: peng@sdu.edu.cn
Tomasz R. Bielecki                                        Wolfgang J. Runggaldier
Department of Applied Mathematics                         Dipartimento di Matematica Pura ed Applicata
Illinois Inst. of Technology                              Universutá degli Studi di Padova
10 West 32nd Street                                       via Belzoni 7
Chicago, IL 60616, USA                                    35100 Padova, Italy
e-mail: bielecki@iit.edu                                  e-mail: runggal@math.unipd.it
Marco Frittelli                                           Walter Schachermayer
Dipartimento di Matematica per le Decisioni               Financial and Actuarial Mathematics
Universitá degli Studi di Firenze                        Vienna University of Technology
via Cesare Lombroso 6/17                                  Wiedner Hauptstrasse 8/105-1
50134 Firenze, Italy                                      1040 Vienna, Austria
e-mail: marco.frittelli@dmd.unifi.it                      e-mail: wschach@fam.tuwien.ac.at
Christian Hipp
Institute for Finance, Banking and Insurance
University of Karlsruhe
Kronenstr. 34
76133 Karlsruhe, Germany
e-mail: christian.hipp@wiwi.uni-karlsruhe.de




Library of Congress Control Number: 2004114748


Mathematics Subject Classification (2000):
60G99, 60-06, 91-06, 91B06, 91B16, 91B24, 91B28, 91B30, 91B70, 93-06, 93E11, 93E20

ISSN 0075-8434
ISBN 3-540-22953-1 Springer-Verlag Berlin Heidelberg New York
DOI: 10.1007/b100122

This work is subject to copyright. All rights are reserved, whether the whole or part of the material is
concerned, specif ically the rights of translation, reprinting, reuse of illustrations, recitation, broadcasting,
reproduction on microf ilm or in any other way, and storage in data banks. Duplication of this publication
or parts thereof is permitted only under the provisions of the German Copyright Law of September 9, 1965,
in its current version, and permission for use must always be obtained from Springer. Violations are liable
for prosecution under the German Copyright Law.
Springer is a part of Springer Science + Business Media
springeronline.com
c Springer-Verlag Berlin Heidelberg 2004
Printed in Germany
The use of general descriptive names, registered names, trademarks, etc. in this publication does not imply,
even in the absence of a specif ic statement, that such names are exempt from the relevant protective laws
and regulations and therefore free for general use.
Typesetting: Camera-ready TEX output by the authors
41/3142/ du - 543210 - Printed on acid-free paper
Preface




A considerable part of the vast development in Mathematical Finance over
the last two decades was determined by the application of stochastic methods.
These were therefore chosen as the focus of the 2003 School on “Stochastic
Methods in Finance”. The growing interest of the mathematical community in
this ﬁeld was also reﬂected by the extraordinarily high number of applications
for the CIME-EMS School. It was attended by 115 scientists and researchers,
selected from among over 200 applicants. The attendees came from all conti-
nents: 85 were Europeans, among them 35 Italians.
    The aim of the School was to provide a broad and accurate knowledge of
some of the most up-to-date and relevant topics in Mathematical Finance.
Particular attention was devoted to the investigation of innovative methods
from stochastic analysis that play a fundamental role in mathematical mod-
eling in ﬁnance or insurance: the theory of stochastic processes, optimal and
stochastic control, stochastic diﬀerential equations, convex analysis and dual-
ity theory.
The outstanding and internationally renowned lecturers have themselves con-
tributed in an essential way to the development of the theory and techniques
that constituted the subjects of the lectures. The ﬁnancial origin and mo-
tivation of the mathematical analysis were presented in a rigorous manner
and this facilitated the understanding of the interface between mathematics
and ﬁnance. Great emphasis was also placed on the importance and eﬃciency
of mathematical instruments for the formalization and resolution of ﬁnancial
problems. Moreover, the direct ﬁnancial origin of the development of some
theories now of remarkable importance in mathematics emerged with clarity.
The selection of the ﬁve topics of the CIME Course was not an easy task be-
cause of the wide spectrum of recent developments in Mathematical Finance.
Although other topics could have been proposed, we are conﬁdent that the
choice made covers some of the areas of greatest current interest.
We now propose a brief guided tour through the topics chosen and through
the methodologies that modern ﬁnancial mathematics has elaborated to unveil
Risk beneath its diﬀerent masks.
VI     Preface

We begin the tour with expected utility maximization in continuous-time
stochastic markets: this classical problem, which can be traced back to the
seminal works by Merton, received a renewed impulse in the middle of the
1980’s, when the so-called duality approach to the problem was ﬁrst devel-
oped. Over the past twenty years, the theory constantly improved, until the
general case of semimartingale stochastic models was ﬁnally tackled with great
success. This prompted us to dedicate one series of lectures to this traditional
as well as very innovative topic:
“Utility Maximization in Incomplete Markets”, Prof. Walter Schachermayer,
Technical University of Vienna.
This course was mainly focused on the maximization of the expected utility
from terminal wealth in incomplete markets. A part of the course was dedi-
cated to the presentation of the stochastic model of the market, with particular
attention to the formulation of the condition of No Arbitrage. Some results of
convex analysis and duality theory were also introduced and explained, as they
are needed for the formulation of the dual problem with respect to the set
of equivalent martingale measures. Then some recent results of this classical
problem were presented in the general context of semi-martingale ﬁnancial
models.

The importance of the above-mentioned analysis of the utility maximization
problem is also revealed in the theory of asset pricing in incomplete markets,
where the agent’s preferences have again to be given serious consideration,
since Risk cannot be completely hedged. Diﬀerent notions of “utility-based”
prices have been introduced in the literature since the middle of the 1990’s.
These concepts determine pricing rules which are often non-linear outside
the set of marketed claims. Depending on the utility function selected, these
pricing kernels share many properties with non-linear valuations: this bordered
on the realm of risk measures and capital requirements. Coherent or convex
risk measures have been studied intensively in the last eight years but only
very recently have risk measures been considered in a dynamic context. The
theory of non-linear expectations is very appropriate for dealing with the
genuinely dynamic aspects of the measures of Risk. This leads to the next
topic:
“Nonlinear expectations, nonlinear evaluations and risk measures”, Prof.
Shige Peng, Shandong University.
In this course the theory of the so-called “ g-expectations” was developed, with
particular attention to the following topics: backward stochastic diﬀerential
equations, F-expectation, g-martingales and theorems of decomposition of E-
supermartingales. Applications to the theory of risk measures in a dynamic
context were suggested, with particular emphasis on the issues of time consis-
tency of the dynamic risk measures.

Among the many forms of Risk considered in ﬁnance, credit risk has received
major attention in recent years. This is due to its theoretical relevance but
                                                                  Preface    VII

certainly also to its practical implications among the multitude of investors.
Credit risk is the risk faced by one party as a result of the possible decline
in the creditworthiness of the counterpart or of a third party. An overview of
the current state of the art was given in the following series of lectures:
“Stochastic methods in credit risk modeling: valuation and hedging”, Prof.
Tomasz Bielecki, Illinois Institute of Technology.
A broad review of the recent methodologies for the management of credit risk
was presented in this course: structural models, intensity-based models, mod-
eling of dependent defaults and migrations, defaultable term structures, copula
based models. For each model the main mathematical tools have been described
in detail, with particular emphasis on the theory of martingales, stochastic
control, Markov chains. The written contribution to this volume involves, in
addition to the lecturer, two co-authors, they too are among the most promi-
nent current experts in the ﬁeld.

The notion of Risk is not limited to ﬁnance, but has a traditional and dom-
inating place also in insurance. For some time the two ﬁelds have evolved
independently of one another, but recently they are increasingly interacting
and this is reﬂected also in the ﬁnancial reality, where insurance companies
are entering the ﬁnancial market and viceversa. It was therefore natural to
have a series of lectures also on insurance risk and on the techniques to control
it.
“Financial control methods applied in insurance”, Prof. Christian Hipp, Uni-
versity of Karlsruhe.
The methodologies developed in modern mathematical ﬁnance have also met
with wide use in the applications to the control and the management of the
speciﬁc risk of insurance companies. In particular, the course showed how the
theory of stochastic control and stochastic optimization can be used eﬀectively
and how it can be integrated with the classical insurance and risk theory.

Last but not least we come to the topic of partial and asymmetric information
that doubtlessly is a possible source of Risk, but has considerable importance
in itself since evidently the information is neither complete nor equally shared
among the agents. Frequently debated also by economists, this topic was an-
alyzed in the lectures:
“Partial and asymmetric information”, Prof. Kerry Back, University of St.
Louis.
In the context of economic equilibrium, a survey of incomplete and asymmet-
ric information (or insider trading) models was presented. First, a review of
ﬁltering theory and stochastic control was introduced. In the second part of the
course some work on incomplete information models was analyzed, focusing
on Markov chain models. The last part was concerned with asymmetric in-
formation models, with particular emphasis on the Kyle model and extensions
thereof.
VIII   Preface

As editors of these Lecture Notes we would like to thank the many persons
and Institutions that contributed to the success of the school. It is our plea-
sure to thank the members of the CIME (Centro Internazionale Matematico
Estivo) Scientiﬁc Committee for their invitation to organize the School; the
Director, Prof. Pietro Zecca, and the Secretary, Prof. Elvira Mascolo, for their
eﬃcient support during the organization. We were particularly pleased by the
fact that the European Mathematical Society (EMS) chose to co-sponsor this
CIME-School as one of its two Summer Schools for 2003 and that it provided
additional ﬁnancial support through UNESCO-Roste.
Our special thanks go to the lecturers for their early preparation of the ma-
terial to be distributed to the participants, for their excellent performance in
teaching the courses and their stimulating scientiﬁc contributions. All the par-
ticipants contributed to the creation of an exceptionally friendly atmosphere
which also characterized the various social events organized in the beautiful
environment around the School. We would like to thank the Town Coun-
cil of Bressanone/Brixen for additional ﬁnancial and organizational support;
the Director and the staﬀ of the Cusanus Academy in Bressanone/Brixen for
their kind hospitality and eﬃciency as well as all those who helped us in the
realization of this event.
This volume collects the texts of the ﬁve series of lectures presented at the
Summer School. They are arranged in alphabetic order according to the name
of the lecturer.


Firenze and Padova, March 2004

Marco Frittelli and Wolfgang J. Runggaldier




CIME’s activity is supported by:

Istituto Nationale di Alta Matematica “F. Severi”:
Ministero dell’Istruzione, dell’Università e della Ricerca;
Ministero degli Aﬀari Esteri - Direzione Generale per la Promozione e la
Cooperazione - Uﬃcio V;
E. U. under the Training and Mobility of Researchers Programme and
UNESCO-ROSTE, Venice Oﬃce
Contents




Incomplete and Asymmetric Information in Asset Pricing
Theory
Kerry Back . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      1
1 Filtering Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .            1
  1.1 Kalman-Bucy Filter . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                    3
  1.2 Two-State Markov Chain . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                        4
2 Incomplete Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  5
  2.1 Seminal Work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .              5
  2.2 Markov Chain Models of Production Economies . . . . . . . . . . . . . . .                                           6
  2.3 Markov Chain Models of Pure Exchange Economies . . . . . . . . . . .                                                7
  2.4 Heterogeneous Beliefs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  11
3 Asymmetric Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                   12
  3.1 Anticipative Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                     12
  3.2 Rational Expectations Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                           13
  3.3 Kyle Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           16
  3.4 Continuous-Time Kyle Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                           18
  3.5 Multiple Informed Traders in the Kyle Model . . . . . . . . . . . . . . . . .                                      20
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   23
Modeling and Valuation of Credit Risk
Tomasz R. Bielecki, Monique Jeanblanc, Marek Rutkowski . . . . . . . . . . . .                                           27
1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       27
2 Structural Approach . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .              29
  2.1 Basic Assumptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  29
       Defaultable Claims . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                29
       Risk-Neutral Valuation Formula . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                          31
       Defaultable Zero-Coupon Bond . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                            32
  2.2 Classic Structural Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                      34
       Merton’s Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .              34
       Black and Cox Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                   37
  2.3 Stochastic Interest Rates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                    43
X         Contents

  2.4 Credit Spreads: A Case Study . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 45
  2.5 Comments on Structural Models . . . . . . . . . . . . . . . . . . . . . . . . . . . .                    46
3 Intensity-Based Approach . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         47
  3.1 Hazard Function . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      47
       Hazard Function of a Random Time . . . . . . . . . . . . . . . . . . . . . . . . .                      48
       Associated Martingales . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        49
       Change of a Probability Measure . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 50
       Martingale Hazard Function . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .              53
       Defaultable Bonds: Deterministic Intensity . . . . . . . . . . . . . . . . . . .                        53
  3.2 Hazard Processes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     55
       Hazard Process of a Random Time . . . . . . . . . . . . . . . . . . . . . . . . . .                     56
       Valuation of Defaultable Claims . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               57
       Alternative Recovery Rules . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .            59
       Defaultable Bonds: Stochastic Intensity . . . . . . . . . . . . . . . . . . . . . .                     63
       Martingale Hazard Process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             64
       Martingale Hypothesis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         65
       Canonical Construction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          67
       Kusuoka’s Counter-Example . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               69
       Change of a Probability . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         70
       Statistical Probability . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     72
       Change of a Numeraire . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           74
       Preprice of a Defaultable Claim . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               77
       Credit Default Swaption . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           79
       A Practical Example . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       82
  3.3 Martingale Approach . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          84
       Standing Assumptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          85
       Valuation of Defaultable Claims . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               85
       Martingale Approach under (H.1) . . . . . . . . . . . . . . . . . . . . . . . . . . .                   87
  3.4 Further Developments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           88
       Default-Adjusted Martingale Measure . . . . . . . . . . . . . . . . . . . . . . . .                     88
       Hybrid Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   89
       Uniﬁed Approach . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       90
  3.5 Comments on Intensity-Based Models . . . . . . . . . . . . . . . . . . . . . . . .                       90
4 Dependent Defaults and Credit Migrations . . . . . . . . . . . . . . . . . . . . . . .                       91
  4.1 Basket Credit Derivatives . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .            92
       The ith -to-Default Contingent Claims . . . . . . . . . . . . . . . . . . . . . . . .                   92
       Case of Two Entities . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      93
  4.2 Conditionally Independent Defaults . . . . . . . . . . . . . . . . . . . . . . . . . .                   94
       Canonical Construction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          94
       Independent Default Times . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             95
       Signed Intensities . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    96
       Valuation of FDC and LDC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                96
       General Valuation Formula . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             97
       Default Swap of Basket Type . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               98
                                                                                                 Contents              XI

  4.3 Copula-Based Approaches . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 99
       Direct Application . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100
       Indirect Application . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100
       Simpliﬁed Version . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102
  4.4 Jarrow and Yu Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103
       Construction and Properties of the Model . . . . . . . . . . . . . . . . . . . . 103
       Bond Valuation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105
  4.5 Extension of the Jarrow and Yu Model . . . . . . . . . . . . . . . . . . . . . . . 106
       Kusuoka’s Construction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
       Interpretation of Intensities . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108
       Bond Valuation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108
  4.6 Dependent Intensities of Credit Migrations . . . . . . . . . . . . . . . . . . . 109
       Extension of Kusuoka’s Construction . . . . . . . . . . . . . . . . . . . . . . . . 109
  4.7 Dynamics of Dependent Credit Ratings . . . . . . . . . . . . . . . . . . . . . . 112
  4.8 Defaultable Term Structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113
       Standing Assumptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113
       Credit Migration Process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 116
       Defaultable Term Structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117
       Premia for Interest Rate and Credit Event Risks . . . . . . . . . . . . . . 119
       Defaultable Coupon Bond . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120
       Examples of Credit Derivatives . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
  4.9 Concluding Remarks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
Stochastic Control with Application in Insurance
Christian Hipp . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
1 Preface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
2 Introduction Into Insurance Risk . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128
  2.1 The Lundberg Risk Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128
  2.2 Alternatives . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
  2.3 Ruin Probability . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
  2.4 Asymptotic Behavior For Ruin Probabilities . . . . . . . . . . . . . . . . . . 131
3 Possible Control Variables and Stochastic Control . . . . . . . . . . . . . . . . . 132
  3.1 Possible Control Variables . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132
        Investment, One Risky Asset . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132
        Investment, Two or More Risky Assets . . . . . . . . . . . . . . . . . . . . . . . 133
        Proportional Reinsurance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134
        Unlimited XL Reinsurance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134
        XL-Reinsurance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
        Premium Control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
        Control of New Business . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
  3.2 Stochastic Control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136
        Objective Functions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136
        Inﬁnitesimal Generators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137
        Hamilton-Jacobi-Bellman Equations . . . . . . . . . . . . . . . . . . . . . . . . . 139
XII        Contents

       Veriﬁcation Argument . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
       Steps for Solution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
4 Optimal Investment for Insurers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
  4.1 HJB and its Handy Form . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
  4.2 Existence of a Solution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145
  4.3 Exponential Claim Sizes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145
  4.4 Two or More Risky Assets . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 147
5 Optimal Reinsurance and Optimal New Business . . . . . . . . . . . . . . . . . . 148
  5.1 Optimal Proportional Reinsurance . . . . . . . . . . . . . . . . . . . . . . . . . . . 150
  5.2 Optimal Unlimited XL Reinsurance . . . . . . . . . . . . . . . . . . . . . . . . . . 151
  5.3 Optimal XL Reinsurance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152
  5.4 Optimal New Business . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
6 Asymptotic Behavior for Value Function and Strategies . . . . . . . . . . . . 154
  6.1 Optimal Investment: Exponential Claims . . . . . . . . . . . . . . . . . . . . . 154
  6.2 Optimal Investment: Small Claims . . . . . . . . . . . . . . . . . . . . . . . . . . . 154
  6.3 Optimal Investment: Large Claims . . . . . . . . . . . . . . . . . . . . . . . . . . 155
  6.4 Optimal Reinsurance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 156
7 A Control Problem with Constraint: Dividends and Ruin . . . . . . . . . . . 157
  7.1 A Simple Insurance Model with Dividend Payments . . . . . . . . . . . 157
  7.2 Modiﬁed HJB Equation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 158
  7.3 Numerical Example and Conjectures . . . . . . . . . . . . . . . . . . . . . . . . . 159
  7.4 Earlier and Further Work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 161
8 Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 162
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 163
Nonlinear Expectations, Nonlinear Evaluations and Risk
Measures
Shige Peng . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 165
1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 165
   1.1 Searching the Mechanism of Evaluations of Risky Assets . . . . . . . 165
   1.2 Axiomatic Assumptions for Evaluations of Derivatives . . . . . . . . . 166
       General Situations: FtX –Consistent Nonlinear Evaluations . . . . . 166
       FtX –Consistent Nonlinear Expectations . . . . . . . . . . . . . . . . . . . . . . 167
   1.3 Organization of the Lecture . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 168
2 Brownian Filtration Consistent Evaluations and Expectations . . . . . . 169
   2.1 Main Notations and Deﬁnitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 169
   2.2 Ft –Consistent Nonlinear Expectations . . . . . . . . . . . . . . . . . . . . . . . 171
   2.3 Ft -Consistent Nonlinear Evaluations . . . . . . . . . . . . . . . . . . . . . . . . . 173
3 Backward Stochastic Diﬀerential Equations: g–Evaluations and
   g–Expectations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 176
   3.1 BSDE: Existence, Uniqueness and Basic Estimates . . . . . . . . . . . . 176
   3.2 1–Dimensional BSDE . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 182
       Comparison Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 183
       Backward Stochastic Monotone Semigroups and g–Evaluations . 186
       Example: Black–Scholes Evaluations . . . . . . . . . . . . . . . . . . . . . . . . . 188
                                                                                                 Contents          XIII

       g–Expectations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 189
       Upcrossing Inequality of E g –Supermartingales and Optional
               Sampling Inequality . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 193
  3.3 A Monotonic Limit Theorem of BSDE . . . . . . . . . . . . . . . . . . . . . . . 199
  3.4 g–Martingales and (Nonlinear) g–Supermartingale
       Decomposition Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 201
4 Finding the Mechanism: Is an F –Expectation a g–Expectation? . . . . . 204
  4.1 E µ -Dominated F -Expectations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 204
  4.2 Ft -Consistent Martingales . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 207
  4.3 BSDE under Ft –Consistent Nonlinear Expectations . . . . . . . . . . . 210
  4.4 Decomposition Theorem for E-Supermartingales . . . . . . . . . . . . . . . 213
  4.5 Representation Theorem
       of an F –Expectation by a g–Expectation . . . . . . . . . . . . . . . . . . . . . 216
  4.6 How to Test and Find g? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 219
  4.7 A General Situation: Ft –Evaluation Representation Theorem . . . 220
5 Dynamic Risk Measures . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 221
6 Numerical Solution of BSDEs: Euler’s Approximation . . . . . . . . . . . . . . 222
7 Appendix . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 224
  7.1 Martingale Representation Theorem . . . . . . . . . . . . . . . . . . . . . . . . . 224
  7.2 A Monotonic Limit Theorem of Itô’s Processes . . . . . . . . . . . . . . . . 226
  7.3 Optional Stopping Theorem for E g –Supermartingale . . . . . . . . . . . 232
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 238
References on BSDE and Nonlinear Expectations . . . . . . . . . . . . . . . . . . . . 240
Utility Maximisation in Incomplete Markets
Walter Schachermayer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 255
1 Problem Setting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 255
2 Models on Finite Probability Spaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 259
  2.1 Utility Maximization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 266
       The complete Case (Arrow) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 266
       The Incomplete Case . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 272
3 The General Case . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 277
  3.1 The Reasonable Asymptotic Elasticity Condition . . . . . . . . . . . . . . 277
  3.2 Existence Theorems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 281
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 289
Incomplete and Asymmetric Information in
Asset Pricing Theory

Kerry Back

John M. Olin School of Business
Washington University in St. Louis
St. Louis, MO 63130
back@olin.wustl.edu

These notes could equally well be entitled “Applications of Filtering in Finan-
cial Theory.” They constitute a selective survey of incomplete and asymmetric
information models. The study of asymmetric information, which emphasizes
diﬀerences in information, means that we will be concerned with equilibrium
theory and how the less informed agents learn in equilibrium from the more
informed agents. The study of incomplete information is also most interesting
in the context of economic equilibrium.
    Excellent surveys of incomplete information models in ﬁnance [48] and of
asymmetric information models [10] have recently been published. In these
notes, I will not attempt to repeat these comprehensive surveys but instead
will give a more selective review.
    The ﬁrst part of this article provides a review of ﬁltering theory, in par-
ticular establishing the notation to be used in the later parts. The second
part reviews some work on incomplete information models, focusing on recent
work using simple Markov chain models to model the behavior of the market
portfolio. The last part reviews asymmetric information models, focusing on
the Kyle model and extensions thereof.


1 Filtering Theory
Let us start with a brief review of ﬁltering theory, as exposited in [33]. Note
ﬁrst that engineers and economists tend to use the term “signal” diﬀerently.
Engineers take the viewpoint of the transmitter, who sends a “signal,” which
is then to be estimated (or “ﬁltered”) from a noisy observation. Economists
tend to take the viewpoint of the receiver, who observes a “signal” and then
uses it to estimate some other variable. To avoid confusion, I will try to avoid
the term, but when I use it (in the last part of the chapter), it will be in the
sense of economists.



K. Back et al.: LNM 1856, M. Frittelli and W. Runggaldier (Eds.), pp. 1–25, 2004.

c Springer-Verlag Berlin Heidelberg 2004
2      Kerry Back

    We work on a ﬁnite time horizon [0, T ] and a complete probability space
(Ω, A, P ). The problem is to estimate a process X from the observations
of another process Y . In general, one considers estimating the conditional
expectation E[f (Xt )|FtY ], where {FtY } is the the ﬁltration generated by Y
augmented by the P –null sets in A, and f is a real-valued function satisfying
some minimal regularity conditions but otherwise arbitrary. By estimating
E[f (Xt )|FtY ] for arbitrary f , one can obtain the distribution of Xt conditional
on FtY .
    For any process θ, we will use the conventional notation θ̂t to denote
E[θt |FtY ]. More precisely, θ̂t denotes for each t a version of E[θt |FtY ] chosen
so that the resulting process (t, ω) → θ̂t (ω) is jointly measurable.
    Let W be an n–dimensional Wiener process on its own ﬁltration and deﬁne
Ft to be the σ–ﬁeld generated by (Xs , Ws ; s ≤ t) augmented by the P –null
sets in A. We assume for each t that Ft is independent of the σ–ﬁeld generated
by (Wv − Wu ; t ≤ u ≤ v ≤ T ), which simply means that the future changes
in the Wiener process cannot be foretold by X. Henceforth, we will assume
that all processes are {Ft }–adapted.
    The Wiener process W creates the noise that must be ﬁltered from the
observation process. Speciﬁcally, assume the observation process Y satisﬁes

                          dYt = ht dt + dWt ;    Y0 = 0                        (1)
                                                               T
where h is a jointly measurable n –valued process satisfying E 0 ht2 dt <
∞.
   Assume X takes values in some complete separable metric space, deﬁne
ft = f (Xt ),and assume
                             dft = gt dt + dMt ,                         (2)
for some jointly measurable process g and right-continuous martingale M
             T
such that E 0 |gt |2 dt < ∞. If X is given as the solution of a stochastic
diﬀerential equation and f is smooth, the processes g and M can of course be
computed from Itô’s formula. We assume further that E[ft2 ] < ∞ for each t
      T
and E 0 ft ht2 dt < ∞.
    The “innovation process” is deﬁned as

                            dZt = dYt − ĥt dt
                                = (ht − ĥt ) dt + dWt                         (3)

with Z0 = 0. The diﬀerential dZ is interpreted as the innovation or “surprise”
in the variable Y , which consists of two parts, one being the error in the
estimation of the drift ht and the other being the random change dW .
    The main results of ﬁltering theory, due to Fujisaka, Kallianpur, and Ku-
nita [22], are the following.
1) The innovation process Z is an {FtY }–Brownian Motion.
         Incomplete and Asymmetric Information in Asset Pricing Theory              3

2) For any separable L2 –bounded {FtY }–martingale H, there exists a jointly
                                                                 T
   measurable {FtY }–adapted n –valued process φ such that E 0  φt 2
   dt < ∞, and
                                     n
                              dHt =     φit dZti .
                                            i=1

3) There exist jointly measurable adapted processes αi such that d[M, W i ]t =
   αit dt, for i = 1, . . . , N .
4) fˆ evolves as
                                                             
                           dfˆt = ĝt dt + fh − fˆt ĥt + α̂t dZt ,
                                             t                             (4)

    where fht denotes E[ft ht |FtY ].
    Part (1) means in particular that Z is a martingale; thus the innovations
dZ are indeed “unpredictable.” Given that it is a martingale, the fact that it
is a Brownian motion follows from Levy’s theorem and the fact, which follows
immediately from (3), that the covariations are dZ i , Z j  = dt if i = j and 0
otherwise. Part (2) means that the process Z “spans” the {FtY }–martingales
(which would follow from {FtY } = {FtZ }, though this condition does not hold
in general). Part (3) means that the square-bracket processes are absolutely
continuous, though in our applications we will assume M and the W i are
independent, implying αi = 0 for all i.
    Part (4) is the ﬁltering formula. The estimate fˆ is updated because f is ex-
pected to change (which is obviously captured by the term ĝt dt) and because
new information from dZ is available to estimate f . The observation process
Y (or equivalently the innovation process Z) is useful for estimating f due to
two factors. One is the possibility of correlation between the martingales W
and M . This is reﬂected in the term α̂t dZt . The other factor is the correlation
between f and the drift ht of Y . This is reﬂected in the term (fht − fˆt ĥt ) dZt .
Note that fht − fˆt ĥt is the covariance of ft and ht , conditional on FtY . The
formula (4) generalizes the linear prediction formula

                                        cov(x, y)
                            x̂ = x̄ +             (y − ȳ),
                                         var(y)

which yields x̂ = E[x|y] when x and y are joint normal.
   We consider two applications.

1.1 Kalman-Bucy Filter

Assume X0 is distributed normally with variance σ 2 and

                               dXt = aXt dt + dBt ,
                               dYt = cXt dt + dWt ,
4       Kerry Back

where B and W are independent real-valued Brownian motions that are in-
dependent of X0 . In this case, the distribution of Xt conditional on FtY is
normal with deterministic variance Σt . Moreover,

                           dX̂t = aX̂t dt + cΣt dZt ,                       (5)

where the innovation process Z is given by

                             dZt = dYt − cX̂t dt.                           (6)

Furthermore,
                                      γαeλt − β
                               Σt =             ,                           (7)
                                       γeλt + 1
where α and −β are the two roots of the quadratic equation 1+2ax−c2 x2 = 0,
with both α and β positive, λ = c2 (α + β) and γ = (σ 2 + β)/(α − σ 2 ). One can
consult, e.g., [33] or [41] for the derivation of these results from the general
ﬁltering results cited above. In the multivariate case, an equation of the form
(5) also holds, where Σt is the covariance matrix of Xt conditional on FtY . In
this circumstance, the covariance matrix evolves deterministically and satisﬁes
an ordinary diﬀerential equation of the Riccati type, but there is in general
no closed-form solution of the diﬀerential equation.

1.2 Two-State Markov Chain

A very simple model that lies outside the Gaussian family is a two-state
Markov chain. There is no loss of generality in taking the states to be 0 and
1, and it is convenient to do so. Consider the Markov chain X satisfying

                      dXt = (1 − Xt− ) dNt0 − Xt− dNt1 ,                    (8)

where Xt− ≡ lims↑t Xs and the N i are independent Poisson processes with
parameters λi that are independent of X0 . This means that X stays in each
state an exponentially distributed amount of time, with the exponential dis-
tribution determining the transition from state i to state j having parameter
λi . This ﬁts in our earlier framework as

                              dXt = gt dt + dMt ,

where

                       gt = (1 − Xt− )λ0 − Xt− λ1 , and
                      dMt = (1 − Xt− ) dMt0 − Xt− dMt1 ,

with M i being the martingale Mti = Nti − λi t.
   Assume
                         dYt = h(Xt− ) dt + dWt ,                           (9)
          Incomplete and Asymmetric Information in Asset Pricing Theory         5

where W is an n–dimensional Brownian motion independent of the N i and
X0 . Thus, the drift vector of Y is h(0) or h(1) depending on the state Xt− .
In terms of our earlier notation, ht = h(Xt− ).
    Write πt for X̂t . This is the conditional probability that Xt = 1. The
general ﬁltering formula (4) implies1
                                                              
          dπt = (1 − πt )λ0 − πt λ1 dt + πt (1 − πt ) h(1) − h(0) dZt ,      (10)

where the innovation process Z is given by
                                                    
                  dZt = dYt − (1 − πt )h(0) + πt h(1) dt.                    (11)

This is a special case of the results on Markov chain ﬁltering due to Wonham
[47].
    Note the similarity of (10) with the Kalman-Bucy ﬁlter (5): h(1)−h(0) is
the vector c in the equation

                  dYt = h(Xt− ) dt + dWt
                                                 
                      = (1 − Xt− )h(0) + Xt− h(1) dt + dWt
                      = h(0) dt + cXt− dt + dWt ,

and πt (1 − πt ) is the variance of Xt conditional on FtY .


2 Incomplete Information
2.1 Seminal Work

Early work in portfolio choice and market equilibrium under incomplete in-
formation includes [16], [19], and [23]. These papers analyze models of the
following sort. The instantaneous rate of return on an asset is given by
                          dS
                          S    = µt dt + σ dW,   where
                          dµt = κ(θ − µt ) dt + φ dB

and W and B are Brownian motions with a constant correlation coeﬃcient
ρ, and where µ0 is normally distributed and independent of W and B. It is
assumed that investors observe S but not µ; i.e., their ﬁltration is the ﬁltration
generated by S (augmented by the P –null sets). The innovation process is

                                   µt − µ̂t
                            dZ =            dt + dW,
                                      σ
which is an {FtS }–Brownian motion. Moreover, we can write
1
                 implies π is continuous and then from bounded convergence we
    Note that (4)
    have πt = E Xt− |FtY , so ĝt = (1 − πt )λ0 − πt λ1 .
6      Kerry Back

                               dS
                                  = µ̂t dt + σ dZ.                          (12)
                                S
Because µ̂ is observable (adapted to {FtS }), this is equivalent to a standard
complete information model, and the portfolio choice theory of Merton applies
to (12). This is a particular application of the separation principle for optimal
control under incomplete information, and in fact the primary contribution of
these early papers was to highlight the role of the separation principle.
    These early models were interpreted as equilibrium models by assuming
the returns are the returns of physical investment technologies having con-
stant returns to scale, as in the Cox-Ingersoll-Ross model [12]. In other words,
the assets are in inﬁnitely elastic supply. We will call such an economy a “pro-
duction economy,” though obviously it is a very special type of production
economy. In this case, there are no market clearing conditions to be satisﬁed.
Equilibrium is determined by the optimal investments and consumption of
the agents. Given an equilibrium, prices of other zero net supply assets can
be determined—for example, term structure models can be developed. How-
ever, the set of such models that can be generated by assuming incomplete
information is the same as the set that can be generated with complete in-
formation, given the equivalence of (12) with complete information models.
In particular, the Kalman-Bucy ﬁltering equations imply particular dynamics
for µ̂, but one could equally well assume the same dynamics for µ and assume
µ is observable.

2.2 Markov Chain Models of Production Economies

In Gaussian models (with Gaussian priors) the conditional covariance ma-
trix of the unobserved variables is deterministic. This means that there is no
real linkage between Gaussian incomplete information models and the well-
documented phenomenon of stochastic volatility. Detemple observes in [17]
that, within a model that is otherwise Gaussian, stochastic volatility can be
generated by assuming non-Gaussian priors. However, more recent work has
focused on Markov chain models.
    David in [13] and [14] studies an economy in which the assets are in in-
ﬁnitely elastic supply, assuming a two-state Markov chain for which the tran-
sition time from each state is exponentially distributed as in Section 1.2. In
David’s model, there are two assets (i = 0, 1), with

                          dS i
                               = µi (Xt− ) dt + σ i dW i ,
                           Si
where W 0 and W 1 are independent Brownian motions, Xt ∈ {0, 1}, and
µ0 (x) = µ1 (1−x). Set µa = µ0 (0) and µb = µ0 (1). Then when Xt− = 0, the
growth rates of the assets are µa for asset 0 and µb for asset 1, and the growth
rates of the assets are reversed when Xt− = 1. With complete information in
this economy, the investment opportunity set is independent of Xt− . However,
         Incomplete and Asymmetric Information in Asset Pricing Theory        7

with incomplete information, investors do not know for certain which asset is
most productive. Suppose, for example, that µa > µb . Then asset 0 is most
productive in state 0 and asset 1 is most productive in state 1. The ﬁltering
equation for the model is (10), with observation process Y = (Y 0 , Y 1 ), where
                                    i
                       d log Sti    µ (Xt− ) σ i
                dYti =      i
                                 =          −       dt + dW i .
                          σ            σi       2

In terms of the innovation processes (the following equations actually deﬁne
the innovation processes), we have
                    dS 0
                                                  0  0
                    S 0 = (1 − πt )µa + πt µb dt + σ dZ ,
                    dS 1
                                                  1  1
                    S 1 = πt µa + (1 − πt )µb dt + σ dZ .

As in [16], [19] and [23], this is equivalent to a complete information model in
which the expected rates of return of the assets are stochastic with particular
dynamics given by the ﬁltering equations, but the volatilities of assets are
constant.
    David focuses on the volatility of the market portfolio, assuming a rep-
resentative investor with power utility. The weights of the two assets in the
market portfolio will depend on πt (e.g., asset 0 will be weighted more highly
when πt is small, because this means a greater belief that the expected return
of asset 0 is µa > µb ). Assume for example that σ 1 = σ 2 . Then, due to diver-
siﬁcation, the instantaneous volatility of the market portfolio will be smallest
when the assets are equally weighted, which will be the case when πt = 1/2,
and the volatility will be higher when πt is near 0 or 1. Therefore, the market
portfolio will have a stochastic volatility. Using simulation evidence, David
shows that the return on the market portfolio in the model can be consistent
with the following stylized facts regarding asset returns.
1) Excess kurtosis: the tails of asset return distributions are “too fat” to be
   consistent with normality.
2) Skewness: large negative returns occur more frequently than large positive
   returns.
3) Covariation between returns and changes in conditional variances: large
   negative returns are associated with a greater increase in the conditional
   variance than are large positive returns.

2.3 Markov Chain Models of Pure Exchange Economies

Arguably, a more interesting context in which to study incomplete information
is an economy of the type studied by Lucas in [40], in which the assets are
in ﬁxed supply. This is a “pure exchange” economy, in which the essential
economic problem is to allocate consumption of the asset dividends. In this
case, the prices and returns of the assets are determined in equilibrium by the
8        Kerry Back

market-clearing conditions and hence will be aﬀected fundamentally by the
nature of information.
    David and Veronesi (see [44], [45] and [15]) study models of this type
and discuss various issues regarding the volatility and expected return of the
market portfolio. Their models are variations on the following basic model.
Assume there is a single asset, with supply normalized to one, which pays
dividends at rate D. Assume
                           dDt
                               = αD (Xt− ) dt + σD dW 1 ,                      (13)
                            Dt
where X is a two-state Markov chain with switching between states occurring
at exponentially distributed times, as in Section 1.2. Here W 1 is a real-valued
Brownian motion independent of X0 . Investors observe the dividend rate D
but do not observe the state Xt− , which determines the growth rate of divi-
dends. We may also assume investors observe a process

                           dHt = αH (Xt− ) dt + σH dW 2 ,                      (14)

where W 2 is a real-valued Brownian motion independent of W 1 and X0 . The
process H summarizes any other information investors may have about the
state of the economy.
    The ﬁltering equations for this model are the same as those described
earlier, where we set
                                                 2
                   log D H                   αD − σD /2 αH
             Y =         ,       and µ =               ,      .
                     σD σH                      σD       σH

In terms of the innovation process Z = (Z 1 , Z 2 ), we have
                                                           1
                Dt = πt αD (1) + (1 − πt )αD (0) dt + σD dZ ,
                dDt
                                                                               (15)
                                                  
                dH = πt αH (1) + (1 − πt )αH (0) dt + σH dZ 2 ,                (16)

and the conditional probability πt evolves as
                            
    dπt = (1 − πt )λ0 − πt λ1 dt
                               αD (1) − αD (0) 1 αH (1) − αH (0)
              + πt (1 − πt )                  dZ +               dZ 2 . (17)
                                     σD                σH

    Note that (15) and (17) form a Markovian system in which the growth rate
of dividends is stochastic. From here, the analysis is entirely standard. It is
assumed that there is a representative investor2 who is inﬁnitely-lived and who
maximizes the expected discounted utility of consumption u(ct ), with discount
rate δ. The representative investor must consume the aggregate dividend in
2
    For the construction of a representative investor, see for example [20].
         Incomplete and Asymmetric Information in Asset Pricing Theory         9

equilibrium, and the price of the asset is determined by his marginal rate of
substitution. Speciﬁcally, the asset price at time t must be
                                ∞
                                    e−δ(s−t) u (Ds )
                 St = E                               Ds ds πt , Dt .       (18)
                            t           u (Dt )

    In the case of logarithmic utility, we obtain St = Dt /δ, so the asset return
is given by
                dSt                             
                    = πt αD (1) + (1 − πt )αD (0) dt + σD dZ 1 .
                 St
This is essentially the same as the early models on incomplete information,
because we have simply speciﬁed the expected return

                           πt αD (1) + (1 − πt )αD (0)

as a particular stochastic process.
    The case of power utility u(c) = cγ /γ is more interesting. Note that for
s ≥ t we have from (13) that
                              s            2             1
                                                             
                  Dsγ = Dtγ eγ t [αD (Xa− )−σD /2] da+σD dWa .

Using this, equation (18) yields
                  ∞
St = Dt1−γ E         e−δ(s−t) Dsγ ds πt , Dt
                t
                             ∞
       1−γ
   = Dt      (1 − πt )E         e−δ(s−t) Dsγ ds Xt− = 0, Dt
                            t
                    ∞                                
                        −δ(s−t) γ
       + πt E         e        Ds ds Xt− = 1, Dt
                  t
                       ∞            s                             
                                                    2              1
   =Dt (1−πt )E          e−δ(s−t) eγ t [αD (Xa− )−σD /2] da+σD dWa ds Xt−= 0
                      t
                    ∞              s                                   
                                                2              1
       + πt E         e−δ(s−t) eγ t [αD (Xa− )−σD /2] da+σD dWa ds Xt−= 1 .
                  t

Due to the time-homogeneity of the Markovian system (15) and (17), the
conditional expectations in the above are independent of the date t. Denoting
the ﬁrst expectation by C0 and the second by C1 , we have
                                                   
                       St = Dt (1 − πt )C 0 + πt C 1 .

This implies
10     Kerry Back

             dS  dD    (C 1 − C 0 ) dπ    (C 1 − C 0 ) dD, π
             S = D + (1 − π)C 0 + πC 1 + D[(1 − π)C 0 + πC 1 ]               (19)

               = something dt + σD dZ 1
                    (C 1 − C 0 )π(1 − π)
                 +
                     (1 − π)C 0 + πC 1
                      αD (1) − αD (0)         αS (1) − αS (0) 2
                   ×                   dZ 1 +                dZ .
                             σD                     σS

The factor
                              (C 1 − C 0 )π(1 − π)
                                                                             (20)
                               (1 − π)C 0 + πC 1
introduces stochastic volatility. Thus, stochastic volatility can arise in a model
in which the volatility of dividends is constant.
    There are obviously other ways than incomplete information to introduce
a stochastic growth rate of dividends in a Markovian model similar to (15)
and (17). However, this approach leads to a very sensible connection between
investors’ uncertainty about the state of the economy and the volatility of
assets. Note that the factor πt (1 − πt ) in the numerator of (20) is the con-
ditional variance of Xt —it is largest when πt is near 1/2, when investors are
most uncertain about the state of the economy, and smallest when πt is near
zero or one, which is when investors are most conﬁdent about the state of
the economy. Thus, the volatility of the asset is linked to investors’ conﬁdence
about future economic growth.
    Veronesi actually assumes in [44] that the level of dividends (rather than
the logarithm of dividends) follows an Ornstein-Uhlenbeck process as in (13)
and he assumes the representative investor has negative exponential utility
(i.e., he assumes constant absolute risk aversion rather than constant relative
risk aversion). David and Veronesi study in [15] the model described here but
assume the representative investor also has an endowment stream. They show
that the model can generate a time-varying correlation between the return
and volatility of the market portfolio (for example, sometimes the correlation
may be positive and sometimes it may be negative) and use the model to
generate an option pricing formula for options on the market portfolio. Time-
varying correlation has been noted to be necessary to reconcile stochastic
volatility models with market option prices. In the David-Veronesi model, it
arises quite naturally. When investors believe they are in the high growth state
(πt is high), a low dividend realization will lead to both a negative return on
the market and an increase in volatility, because it increases the uncertainty
about the actual state (i.e., it increases the conditional variance πt (1 − π)t ).
Thus, volatility and returns are negatively correlated in this circumstance. In
contrast, if investors believe they are in the low growth state (πt is low), a low
dividend realization will lead to a negative return and a decrease in volatility,
because it reaﬃrms the belief that the state is low, decreasing the conditional
         Incomplete and Asymmetric Information in Asset Pricing Theory        11

variance πt (1 − πt ). Thus, volatility and returns are positively correlated in
this circumstance.
    In [45], Veronesi studies the above model but assuming there are n states
of the world rather than just two. One way to express his model is to let the
state variable Xt take values in {1, . . . , n} with dynamics

                                   
                                   n
                           dXt =         (i − Xt− ) dNti ,
                                   i=1

where the N i are independent Poisson processes with parameters λi . This
means that X jumps to state i at each arrival date of the Poisson process N i ,
independent of the prior state (in
                                 particular, X stays in state i if Xt− = i and
∆Nti= 1). The process N ≡ ni=1 N i is a Poisson process with parameter
      n
λ ≡ i=1 λi . Conditional on ∆Nt = 1, there is probability λi /λ that ∆Nti = 1
and therefore probability λi /λ that
                                  Xt = i, independent of the prior state Xt− .
Deﬁne Xti = 1{Xt =i} . Then E Xti FtY , which we will denote by πti , is the
probability that Xt = i conditional on FtY . The distribution of Xt conditional
on FtY is clearly deﬁned by the πti . The process Xti is a two-state Markov
chain with dynamics

                      dXti = (1 − Xt−
                                   i
                                      ) dNti − Xt−
                                                i
                                                   dNt−i ,                  (21)
                                                                      
where N −i ≡ j=i Ntj is a Poisson process with parameter λ−i ≡ j=i λj ,
because, if X i is in state 0, it exits at an arrival time of N i , and, if it is
in state 1, it exits at an arrival time of N −i . Equation (21) is of the same
form as equation (8), and, therefore, the dynamics of π i are given by the
ﬁltering equation (10) for two-state Markov chains. The resulting formula for
the dynamics of the asset price S is a straightforward generalization of (19).

2.4 Heterogeneous Beliefs

Economists often assume that all agents have the same prior beliefs. A ratio-
nale for this assumption is given by Harsanyi in [29]. To some, this rationale
seems less than compelling, motivating the analysis of heterogeneous prior be-
liefs. A good example is the Detemple-Murthy model [18]. This model is of a
single-asset Lucas economy similar to the one described in the previous section
(but with the unobservable dividend growth rate being driven by a Brownian
motion instead of following a two-state Markov chain). Instead of assuming a
representative investor, Detemple and Murthy assume there are two classes of
investors with diﬀerent beliefs about the initial value of the dividend growth
rate. Finally, they assume each type of investor has logarithmic utility and
the investors all have the same discount rate. The focus of their paper is the
impact of margin requirements, which limit short sales of the asset and limit
borrowing to buy the asset. This is an example of an issue that cannot be ad-
dressed in a representative investor model, because margin requirements are
12      Kerry Back

never binding in equilibrium on a representative investor, given that he simply
holds the market portfolio in equilibrium. In a frictionless complete-markets
economy one can always construct a representative investor, but that is not
necessarily true in an economy with margin requirements or other frictions
or incompleteness of markets. In the absence of a representative investor, it
can be diﬃcult to compute or characterize an equilibrium, but this task is
considerably simpliﬁed by assuming logarithmic utility, because that implies
investors are “myopic”—they hold the tangency portfolio and do not have
hedging demands. However, if all investors have logarithmic utility, then het-
erogeneity must be introduced through some other mechanism than the utility
function. The assumption of incomplete information and heterogeneous priors
is a simple device for generating this heterogeneity among agents. Basak and
Croitoru study in [8] the eﬀect of introducing “arbitrageurs” (for example,
ﬁnancial intermediaries) in the model of Detemple and Murthy. Jouini and
Napp discuss in [36] the existence of representative investors in markets with
incomplete information and heterogeneous beliefs.
    Another way to introduce heterogeneity of posterior beliefs is to assume
investors have diﬀerent views regarding the dynamical laws of economic pro-
cesses. As an example, consider the economy with dividend process (13) and
observation process (14). We might assume some investors believe the Brow-
nian motions W 1 and W 2 are correlated while others believe they are inde-
pendent, or more generally we may assume investors have diﬀerent beliefs
regarding the correlation coeﬃcient. Scheinkman and Xiong study a similar
model in [42], though in their model there are two assets. To each asset there
corresponds a process D satisfying (13), though D(t) is interpreted as the
cumulative dividends paid between 0 and t instead of the rate of dividends at
time t. To each asset there also corresponds an observation process of the form
(14). There are two types of investors. One type thinks the observation pro-
cess associated with the ﬁrst asset has positive instantaneous correlation with
its cumulative dividend process while the other type thinks the two Brownian
motions are independent. The reverse is true for the second asset. Scheinkman
and Xiong intepret this as “overconﬁdence,” with each investor weighting the
innovation process for one of the assets too highly when updating his beliefs.
They link this form of overconﬁdence to speculative bubbles, the volume of
trading, and the “excess volatility” puzzle.


3 Asymmetric Information
3.1 Anticipative Information

Recently, a literature has developed using the theory of enlargement of ﬁltra-
tions to study the topic of “insider trading.” See [9], [25], [26], [31], [34], [38]
          Incomplete and Asymmetric Information in Asset Pricing Theory          13

and the references therein. One starts with asset prices of the usual form3
                               dSti
                                    = µit dt + σti dWti ,                      (22)
                               Sti
on the horizon [0, T ] where the W i are correlated Brownian motions on the
ﬁltered probability space (Ω, F , {Ft }, P ). Then one supposes there is an FT –
measurable random variable Y (with values in k or some more general space)
and an “insider” has access to the ﬁltration {Gt }, which is the usual augmen-
tation of the ﬁltration {Ft ∨ σ− (Y )}. By “access to the ﬁltration,” I mean
that the insider is allowed to choose trading strategies that are {Gt }–adapted.
    Some interesting questions are (1) does the model make mathematical
sense—i.e., are the price processes {Gt }–semimartingales? (2) is there an ar-
bitrage opportunity for the insider? (3) is the market complete for the insider?
(4) how much additional utility can the insider earn from his advance knowl-
edge of Y ? (5) how would the insider value derivatives? . . . . For the answer
to the ﬁrst question, the essential reference is [32]. In [9], Baudoin describes
the setup I have outlined here as the case of “strong information” and also
introduces a concept of “weak information.”
    The study of anticipative information can be useful as a ﬁrst step to de-
veloping an equilibrium model. Because the insider is assumed to take the
price process (22) as given (unaﬀected by his portfolio choice) the equilibrium
model would be of the “rational expectations” variety described in the next
section. If one does not solve for an equilibrium, the assumed price dynamics
could be quite arbitrary. Suppose for example that there is a constant riskless
rate r and the advance information Y is the vector of asset prices ST . Then
there is an arbitrage opportunity for the insider unless
                                 Sti = e−r(T −t) STi
for all i and t, which of course cannot be the case if the volatilities σ i are
nonzero. One might simply say that this is not an acceptable model and adopt
hypotheses that exclude it. However, the rationale for excluding it must be a
belief that exploitation of arbitrage opportunities tends to eliminate them. In
other words, buying and selling by the insider would be expected to change
market prices. This is true in general and not just in this speciﬁc example. The
idea that market prices reﬂect in some way and to some extent the information
of economic agents is a cornerstone of ﬁnance and of economics in general. In
the remainder of this article, we will discuss equilibrium models of asymmetric
information.

3.2 Rational Expectations Models
The term “rational expectations” means that agents understand the mapping
from the information of various agents to the equilibrium price; thus they make
3
    Assume either that there are no dividends or that the Si represent the prices of
    the portfolios in which dividends are reinvested in new shares.
14        Kerry Back

correct inferences from prices (see [27]). The original rational expectations
models were “competitive” models in the sense that agents were assumed to
be “price takers,” meaning that they assume their own actions have no eﬀect
on prices. Now the term is generally reserved for competitive models, and I
will use it in that sense. We will examine strategic models, in which agents
understand the impact of their actions on prices, in the next sections.
    An important rational expectations model is that of Wang [46]. Wang
studies a Lucas economy in which the dividend rate Dt of the asset has dy-
namics
                        dDt = (Πt − kDt ) dt + bD dW,                    (23)
where W is an 3 –valued Brownian motion. Moreover, it is assumed that

                          dΠt = aΠ (Π̄ − Πt ) dt + bΠ dW                      (24)

for a constant Π̄. It is also assumed that there is a Cox-Ingersoll-Ross-type
asset (i.e., one in inﬁnitely elastic supply) that pays the constant rate of
return r. There are two classes of investors, each having constant absolute
risk aversion.
    One class of investors (the “informed traders”) observes D and Π. The
other class (the “uninformed traders”) observes only D. As described thus
far, the model should admit a “fully revealing equilibrium,” in which the
uninformed traders could infer the value of Πt from the equilibrium price of
the asset. This equilibrium suﬀers from the “Grossman-Stiglitz paradox”—in
reality it presumably costs some eﬀort or money to become informed, but
if prices are fully revealing, then no one would pay the cost of becoming
informed; however, if no one is informed, prices cannot be fully revealing (and
it would presumably be worthwhile in that case for someone to pay the cost
of becoming informed). Wang avoids this outcome by the device introduced
by Grossman and Stiglitz in [28]: he assumes the asset is subject to supply
shocks that are unobserved by all traders. The noise introduced by the supply
shocks prevents uninformed traders from inverting the price to compute the
information Πt of informed traders.4 Speciﬁcally, Wang assumes the supply
of the asset is 1 + Θt , where

                             dΘt = −aΘ Θ dt + bΘ dW.                          (25)

   The general method used to solve rational expectations models is still that
described by Grossman in [27], even though Grossman did not assume there
were supply shocks and obtained a fully revealing equilibrium. The trick is to
consider an “artiﬁcial economy” in which traders are endowed with certain
additional information. One computes an equilibrium of the artiﬁcial economy
4
     In fact, this type of mechanism was ﬁrst introduced by Lucas [39], who assumes
     the money supply is unobservable in the short run, and hence real economic
     shocks cannot be distinguished from monetary shocks, leading to real eﬀects of
     monetary policy in the short run.
         Incomplete and Asymmetric Information in Asset Pricing Theory         15

and then shows that prices in this artiﬁcial economy reveal exactly the ad-
ditional information traders were assumed to possess. Thus, the equilibrium
of the artiﬁcial economy is an equilibrium of the actual economy in which
traders make correct inferences from prices.
    In Wang’s artiﬁcial economy, the informed traders observe Θ as well as D
and Π. The uninformed traders observe a linear combination of Θ and Π as
well as D. In the equilibrium of the artiﬁcial economy, the price reveals the
linear combination of Θ and Π, given knowledge of D. This implies that it
reveals Θ to the informed traders, given that they are endowed with knowl-
edge of Π and D. Therefore, the equilibrium of the artiﬁcial economy is an
equilibrium of the actual economy.
    Speciﬁcally, Wang conjectures that the equilibrium price St is a linear
combination of Dt , Πt , Θt and Π̂, where Π̂ denotes the expectation of Π
conditional on the information of the uninformed traders. For this to make
sense, one has to specify the ﬁltration of the uninformed traders, and in the ar-
tiﬁcial economy it is speciﬁed as the ﬁltration generated by D and a particular
linear combination of Π and Θ. Let this linear combination be

                                Ht = αΠt + βΘt                               (26)

Then the observation process of the uninformed traders in the artiﬁcial econ-
omy is Yt = (D, H) and the unobserved process they wish to estimate is Π.
For the equilibrium of the artiﬁcial economy to be an equilibrium of the actual
economy, we will need St to be a linear combination of Dt , Ht and Π̂t ; i.e.,

                          St = δ + γDt + κHt + λΠ̂t .                        (27)

     Conditional on FtY , Πt is normally distributed with mean Π̂t and a de-
terministic variance. Wang derives an equilbrium in which St is a linear com-
bination of Dt , Πt , Θt and Π̂t with time-invariant coeﬃcients by focusing on
the steady-state solution of the model. Speciﬁcally, he assumes the variance
of Π0 is the equilibrium point of the ordinary diﬀerential equation that the
variance satisﬁes.
     Given the speciﬁcation of the price process (26)–(27) and the ﬁltering
formula, it is straightforward to calculate the demands of the two classes of
traders. The market clearing equation is that the sum of the demands equals
Θt . This is a linear equation that must hold for all values of Dt , Πt , Θt and
Π̂t . Imposing this condition gives the equilibrium values of α, β, δ, γ, κ and λ.
     In addition to the usual issues regarding the expected return and volatility
of the market portfolio, Wang is able to describe the portfolio behavior of the
two classes of investors; in particular, uninformed traders tend to act as “trend
chasers,” buying the asset when its price increases, and informed traders act
as “contrarians,” selling the asset when its price increases.
16     Kerry Back

3.3 Kyle Model

The price-taking assumption in rational expectations models is often problem-
atic. In the extreme case, prices are fully revealing, and traders can form their
demands as functions of the fully revealing prices, ignoring the information
they possessed prior to observing prices. But, if traders all act independently
of their own information, how can prices reveal information? Moreover, as
mentioned earlier, full revelation of information by prices would eliminate the
incentive to collect information in the ﬁrst place.
    The price-taking assumption is particularly problematic when information
is possessed by only one or a few traders. Consider the case of a piece of
information that is held by only a single trader. In general, the equilibrium
price in a rational expectations model will reﬂect this information to some
extent. Moreover, traders are assumed to make correct inferences from prices,
so the trader is assumed to be aware that his information enters prices. But
how can he anticipate that the price will reﬂect his private information, when
he assumes that his actions do not aﬀect the price? In [30], Hellwig describes
this as “schizophrenia” on the part of traders.
    These issues do not arise in strategic models, in which agents are assumed
to recognize that their actions aﬀect prices and it is only through their actions
that private information becomes incorporated into prices. The most promi-
nent model of strategic trading with asymmetric information is due to Kyle
[35]. Kyle’s model has been applied on many occasions, beginning with [1], to
study various issues in market microstructure.
    The Kyle model focuses on a single risky asset traded over the time pe-
riod [0, T ]. It is assumed that there is also a riskless asset, with the risk-free
rate normalized to zero. Unlike models described previously in which the sin-
gle risky asset is interpreted as the market portfolio, with the dividend of
the asset equaling aggregate consumption, the Kyle model is not a model of
the market portfolio. In fact, the risk of the asset is best interpreted as id-
iosyncratic, because investors are assumed to be risk neutral. As in [28] it is
assumed that the supply of the asset is subject to random shocks, which we in-
terpret as resulting from the trade of “noise traders.” The noise traders trade
for reasons that are unmodeled. For example, they may experience liquidity
shocks (endowments of cash to be invested or desires for cash for consump-
tion) and for that reason are often called “liquidity traders.” In addition to
one or more strategic traders and the noise traders, it is assumed that there
are competitive risk-neutral “market makers,” who are somewhat analogous
to the uninformed traders in Wang’s model. The market makers observe the
net demands of the strategic traders and noise traders and compete to ﬁll
their demands. As a result of their competition (and their risk neutrality and
the fact that the risk-free rate is zero), the transaction price is always the
expectation of the asset value, conditional on the information of the market
makers, i.e., conditional on the information in the history of orders.
         Incomplete and Asymmetric Information in Asset Pricing Theory        17

      It is assumed that the information asymmetry is erased by a public an-
nouncement at date T . Since this eliminates the “lemons problem,” all posi-
tions can be liquidated at this announced value. Denote this value by v. From
now on, we will adopt the normalization that T = 1. In the remainder of this
section, we will describe the single-period model in [35], in which there is a
single informed trader.
      In this model, there is trading only at date 0, and consumption occurs at
date 1. The asset value v is normally distributed with mean v̄ and variance
σv2 . The informed trader observes v and submits an order x(v). Noise traders
submit an order z that is independent of v and normally distributed with
mean zero and variance σz2 . Market makers observe y ≡ x + z and set the
price equal to p = E[v|x(v) + z]. The informed trader wishes to maximize his
expected proﬁt, which is E[x(v − p)]. We search for a “linear equilibrium,” in
which the price is set as p = v̄ + λy and the insider’s trade is x = η(v − v̄),
for constants λ and η. An equilibrium is deﬁned by
1) Given x = η(v − v̄), pricing satisﬁes Bayes’ rule; i.e., v̄ + λy = E[v|y], and
2) Given p = v̄ + λy, the insider’s strategy is optimal; i.e.,η(v − v̄) =
   argmaxx E[x(v − v̄ − λ(x + z))].
Condition (1) implies
                              cov(v, y)     ησ 2
                         λ=             = 2 2 v 2,
                               var(y)    η σv + σz
and condition (2) implies
                                         1
                                   η=      .
                                        2λ
The solution of these two equations is
                            σz                      σv
                        η=         and         λ=       .
                            σv                      2σz
A slightly more general deﬁnition of a linear equilibrium would allow the
constants in the aﬃne pricing rule and trading strategy to be of general form,
but it is easily seen that the equilibrium obtained here is unique within that
class also.
    Kyle deﬁnes the reciprocal of λ as the “depth” of the market. It measures
the number of shares that can be traded causing only a unit change in the
price. Of interest is the fact that the depth of the market is proportional to
the amount of noise trading as measured by σv and inversely proportional
to the amount of private information as measured by σv . Thus, markets are
deeper in this model when uninformed trading is more prevalent and when
the degree of information asymmetry is smaller.
    Kyle analyzed a discrete-time multiperiod version of the model, assuming
the variance of noise trades in each period is σz2 ∆t, where ∆t is the length of
each period. He showed that the equilibria converge to the equilibrium of a
continuous-time model in which the noise trades arrive as a Brownian motion
with volatility σz .
18     Kerry Back

3.4 Continuous-Time Kyle Model

The continuous-time version of the model was formalized and generalized in
[2]. Subsequent generalizations appear in [3], [4], [5], [6], [7], [11], and [37].
In the continuous-time model, given that the risk-free rate is assumed to be
zero, the budget equation (self-ﬁnancing condition) for the informed trader is
dW = X dS, where W denotes his wealth, X is the number of shares he holds,
and S is the price. Let C = W − XS denote the amount of cash he holds.
Assuming X and S are continuous semimartingales (on the interval [0, 1) at
least) and applying Itô’s formula to W = XS + C, we obtain

                     dW = dC + X dS + S dX + dX, S,

so the budget equation implies

                              dC = −S dX − dX, S.

It is common in the ﬁnance literature to write the diﬀerential of the sharp
bracket process X, S as dS dX. Adopting this notation, we can write

                    dC = −S dX − dS dX = −(S + dS) dX.

Thus, we can interpret the change in the cash position as equaling the cost
of shares purchased, where the number of shares purchased is dX and the
price paid is S + dS, which can be interpreted as the price prevailing at
the end of the inﬁnitesimal period dt. This interpretation has nothing to do
with insider trading. We are simply interpreting the usual budget equation.
This intepretation is well understood and in fact is the motivation for the
continuous-time budget equation.
    However, this application of Itô’s formula (integration by parts) is useful
for analyzing the choice problem of the insider in the Kyle model. Speciﬁcally,
we are assuming the insider can sell his shares for the known value v at date
1. This will create a jump in his cash position at date 1 equal to vX1− (where,
as usual, Xt− denotes lims↑t Xs ). Normalizing both the number of shares he
owns at date 0 and his initial cash to be zero, his wealth at date 1 will equal
                                            1−                  1−
                   C1 = vX1− −                   St dXt −            dX, St
                                        0                   0
                              1−
                      =            (v − St ) dXt − X, S1− ,
                          0
                              1
                      =           (v − St ) dXt − X, S1− ,
                          0

the last equality being a result of the equality S1 = v.
    In addition to the advance information about the asset value v, the other
distinctive characteristic of the insider’s portfolio choice problem is that he
understands that market prices react to his trades. Speciﬁcally, we assume
         Incomplete and Asymmetric Information in Asset Pricing Theory           19

                             dSt = φt dt + λt dYt ,                             (28)
for some stochastic processes φ and λ > 0, where Y = X + Z and Z is the
Brownian motion of noise trades. This implies
                                 1−                        1−
               X, S1− =             λt dX, Xt +             λt dX, Zt .
                             0                         0

In [2], it is shown that it is strictly suboptimal to have
                                     1−
                                          λt dX, Xt > 0,
                                 0

which implies that optimal X must be ﬁnite variation processes. This is quite
diﬀerent from the Merton model. However, in the Merton model, there is no
                   1−
term of the form 0 λt dX, Xt , because Merton (and almost all subsequent
authors) studied a price-taking investor.
    Equilibrium requires that the insider’s strategy X be optimal, given the
pricing rule (28), and that the pricing rule satisfy St = E[v|FtY ]. It turns out
that in equilibrium the insider’s strategy is absolutely continuous, so dXt =
                                                                            1
θt dt for some stochastic process θ and the insider’s ﬁnal wealth is 0 (v −
St )θt dt. Moreover, in equilibrium, the observation process Y is an {FtY }–
Brownian motion, which means that, up to scaling by 1/σz , the observation
process equals the innovation process.
    Under the larger ﬁltration of the insider, Y is a Brownian bridge. This
is feasible because the insider controls Y via dY = θt dt + dZ. The Brow-
nian bridge terminates at a value dependent on v, and the Brownian mo-
tion/Brownian bridge distinction completely characterizes the information
asymmetry in equilibrium. The market makers understand that Y is a Brow-
nian bridge on the insider’s ﬁltration, but they do not know the value at
which it will terminate. Integrating over the distribution of possible terminal
values converts the Brownian bridge into a Brownian motion. Note the simi-
larity with a model of anticipative information when the private signal of the
insider is the vector WT of terminal values of the Brownian motions in (22).
    One point worth noting is that when the insider is risk-neutral, it is not
actually necessary to assume he knows the value at which the asset can be
liquidated at date 1. His expected proﬁt from trading is the same whether v is
the actual liquidation value or merely the conditional expectation of the liq-
uidation value given his information at date 0. Likewise, the ﬁltering problem
of the market makers is the same when v simply denotes the expected value
of the asset conditional on the insider’s information. This equivalence does
not hold when the insider is risk averse, because then the number of shares he
wishes to hold at date 1 is aﬀected by the remaining risk regarding the liqui-
dation value. The continuous-time Kyle model with a single informed trader
having negative exponential utility is analyzed in [7] and [11]. The equilibrium
                                                                t
price in that case is of the form St = H(t, Ut ) where Ut = 0 κ(s) dYs for a
deterministic function κ (in the risk-neutral case, κ = 1).
20     Kerry Back

3.5 Multiple Informed Traders in the Kyle Model

Here we will discuss the continuous-time Kyle model with multiple informed
traders developed in [6]. Their work builds on the analysis in [21] of a discrete-
time model with multiple traders. In the model of [6] – herafter BCW – there
are N risk-neutral traders who observe signals y i at date 0. The signals are
assumed to be joint normally distributed with the liquidation value, and the
joint distribution is assumed to be symmetric in the y i . As noted at the
end of the previous section, the interesting value is not really the liquidation
value but rather the conditional expectation of the liquidation value, in this
case conditional on all the signals of the traders. Denote this value by v.
Because of the joint normality, v is an aﬃne
                                          Nfunction   of the y i and, by aﬃnely
                   i                             i
transforming the y , we can assume v = i=1 y .
                                                              N
    BCW search for a linear equilibrium. Deﬁning Y = Z + i=1 X i , “linear-
ity” means that the price evolves as

                            dSt = φ(t) dt + λ(t) dYt ,                       (29)

for some deterministic functions φ and λ and trading strategies take the form
dXti = θti dt, where
                            θti = α(t)St + β(t)y i .                      (30)
for some deterministic functions α and β.
    Given trading strategies of this type, the observation process of market
makers is
                     dYt = N α(t)St dt + β(t)v dt + dZt
which is equivalent (because S by deﬁnition is {FtY }–adapted) to observing
a process with dynamics β(t)v dt + dZt , so estimation of v by the market
makers is a simple Gaussian ﬁltering problem as in Section 1.1. Let v̂ denote
the solution to this ﬁltering problem.
    Equilibrium requires S = v̂. Equating the coeﬃcients in the dynamics
of v̂ given by the Kalman-Bucy ﬁltering equation (5) to the proposed linear
dynamics (29) for S, it can easily be seen that we must have α = −β/N and
φ = 0. Thus, in any linear equilibrium,

                          dSt = λ(t) dYt , and                               (31)
                                           
                          dYt = β(t) v − v̂t dt + dZt .                      (32)

Equation (32) means that the observation process Y is (up to rescaling by
1/σz ) the innovation process for the market makers, and, as in the single-
trader model, Y is an {FtY }–Brownian motion. Moreover, the Kalman-Bucy
ﬁltering theory implies that λ is a speciﬁc functional of β.
    The novelty of this model, relative to Kyle’s model with a single informed
trader, is that each trader is trying to estimate the signals of others and each
knows that others are trying to estimate his signal, etc. Denote trader i’s
estimate of v at time t by v̂ti . This estimate is based on the signal y i and on
         Incomplete and Asymmetric Information in Asset Pricing Theory                  21

having observed the price up to date t. Due to the proposed linear dynamics
for the price, observing the price allows the trader to infer Y and 
                                                                    therefore,
because he also knows X i , he can infer Z + X −i , where X −i ≡            j
                                                                      j=i X .
Thus, trader i’s observation process is
            dZt + dXt−i = (N − 1)α(t)St dt + β(t)y −i dt + dZt ,           (33)
            
where y −i ≡ j=i y j , and observing this is equivalent to observing a process
with dynamics β(t)y −i dt + dZt . Hence calculating y
                                                     −i is again a simple Gaus-

sian ﬁltering problem, and trader i’s estimate of the value is then given by
v̂ti = y i + y
              −i . The innovation process for trader i (up to scaling by 1/σ ) is
                                                                            z
     i
W deﬁned by
                                                           
             dWti = β(t) y −i − y
                                 −i
                                 t    dt + dZt = β(t) v − v̂ti dt + dZt .   (34)

       It is worthwhile to point out that the simplicity of the ﬁltering problems
is due to the assumption that each trader plays a strategy of the form (30).
Given the results of the single-trader model, it might have been more natural
to guess a strategy of the form θti = η(t) v̂ti − St . However, to start with
such a guess would make the analysis of the ﬁltering impossible. To compute
v̂ti , we would need to know the dynamics of v̂tj for all j = i, because these
variables would appear in the observation process of trader i. However, to
know the dynamics of v̂tj , we would need to know the dynamics of v̂ti , because
this would appear in the observation process of trader j. This circularity
is known in economics (cf. [43]) as the “forecasting the forecasts of others”
problem. The circularity does not arise when trading strategies are speciﬁed
as functions of signals rather than as functions of estimates. However, the
existence of an equilibrium with strategies of the form (30) is something that
requires veriﬁcation. Foster and Viswanathan ﬁrst showed that this approach
works in the discrete-time version of the model they studied in [21], and BCW
extend this to continuous time.  Moreover,
                                              BCW show that in equilibrium it
is indeed true that θti = η(t) v̂ti − St for some function η, as I have suggested
one might conjecture.
       The control problems of the informed traders are not as simple as the
ﬁltering problems. Assuming absolutely continuous strategies, the objective
function of trader i is
                        1                                   1
              E             (v − St )θti dt y i = E             (v̂ti − St )θti dt .   (35)
                    0                                   0

The trader’s strategy does not inﬂuence his estimate v̂ti of the asset value. As
mentioned above, the state variable v̂ti evolves as
                                      dv̂ti = γ(t) dWti ,                              (36)
where γ is a function that is given to us by ﬁltering theory (as a functional
of β) and W i is the innovation process deﬁned in (34). However, the trader’s
22        Kerry Back

strategy does aﬀect the price St as speciﬁed in (31). Note that equation (32)
for dY must hold in equilibrium, but we cannot assume it here, because each
trader has the option to deviate from his equilibrium strategy, and we must
prove that such deviations are not optimal. We assume that all traders j = i
play strategies of the form (30). Thus, (31) implies
                                             
                                j
          dSt = λ(t) θti dt +    θt dt + dZt 
                                    j=i
                                                                      
                                                             
                 = λ(t) θti dt +          α(t)St dt + β(t)y j dt + dZt 
                                    j=i
                                                                     
                 = λ(t) θti dt + (N −1)α(t)S(t) dt + β(t)y −i dt + dZt .

Now substituting from (34) we have
                                                                   
     dSt = λ(t) θti dt + (N −1)α(t)S(t)t dt + β(t)y−i
                                                    t dt + dWt
                                                                  i

                                                                     
          = λ(t) θti dt + (N −1)α(t)S(t)t dt + β(t) v̂ti − y i dt + dWti (37)

The objective is to be maximized subject to the state dynamics (36) and (37)
over all processes θi adapted to the trader’s ﬁltration. Note that the objective
function (35) and state dynamics (36) and (37) deﬁne a Markovian control
problem involving a single Brownian motion W i .
     A key characteristic of the control problem, as in the single-trader model, is
that both the instantaneous reward (v̂ti −St )θti and the state variable dynamics
are linear in the control θti . This implies that the control problem has a certain
degeneracy. In order for the HJB equation to be satisﬁed, the coeﬃcient of
θti in the maximization problem must be zero and the remaining terms in
the problem must add to zero. Letting J(t, S, v̂ i ) denote the value function,
setting the coeﬃcient of θti to be zero yields

                                                   ∂J
                                    v̂ i − S + λ      = 0.                       (38)
                                                   ∂S
The condition that the remaining terms sum to zero is

     ∂J                                   ∂J
        + λ (N − 1)αS + β[v̂ i − y i ] dt
     ∂t                                    ∂S
                           σz2      2∂ J
                                        2
                                                    ∂2J          ∂2J
                        +        λ         2
                                             + 2λγ         + γ2             = 0. (39)
                             2         ∂S          ∂S∂v̂ i      ∂(v̂ i )2

Diﬀerentiating equation (26) in S yields a pde for ∂J/∂S. However, the deriva-
tives of ∂J/∂S can be calculated in terms of λ and its derivative from (8), and
substituting these expressions into the pde for ∂J/∂S eliminates the deriva-
tives of ∂J/∂S and reduces the pde to the following condition:
         Incomplete and Asymmetric Information in Asset Pricing Theory            23
                                         
                         d        1           2N − 1 i         2N − 2
           (S − v̂ i )                +             v̂ − y i −        S β = 0.   (40)
                         dt       λ             N                N
Here we have imposed for the strategies θj (j = i) that α = −β/N , as
was noted is necessary for equilibrium. Equation (40) is a linear restriction
on the state variables (S, v̂ i ). The usual veriﬁcation theorem shows indeed
that a strategy is optimal if and only if it controls the state variables to
satisfy this linear restriction at all times. Thus, because of the local linearity
of the problem, the usual ﬁrst-order condition from the HJB equation does not
determine the optimal control, but the optimal control is determined by the
HJB equation via this dimensionality reduction. The feasibility of controlling
the state variables to satisfy this linear restriction depends of course on the
fact that there is only a single Brownian motion driving both state variables.
    To obtain a symmetric equilibrium, we need the strategy (30) assumed
to be played by traders j = i to be optimal for trader i also. Thus, we need
this strategy to imply that equation (40) holds at all times. BCW show that
there is a unique function β (with φ = 0 in (29) and α = −β/N in (30)
and with λ the functional of β implied by the Kalman-Bucy ﬁltering theory)
for which this is true. Speciﬁcally, they show that the equilibrium conditional
variance of v given {FtY } is obtained from the inverse of the incomplete gamma
function, and the other components of the equilibrium are simple functions of
this conditional variance.
    An important characteristic of the equilibrium is that the depth of the
market reduces to zero at the terminal date, due to a relatively large degree
of asymmetric information remaining near the end of the trading period. This
contrasts with the single-trader Kyle model with a normal distribution, in
which the depth is constant over time and the asymmetric information disap-
pears linearly in time. BCW also show that there is no linear equilibrium if
the insiders’ signals are perfectly correlated.


References
    1. Admati, A., Pﬂeiderer, P.: A theory of intraday patterns: volume and price
       variability. Review of Financial Studies, 1, 3–40 (1988)
    2. Back, K.: Insider trading in continuous time. Review of Financial Studies,
       5, 387–409 (1992)
    3. Back, K.: Asymmetric information and options. Review of Financial Studies,
       6, 435–472 (1993)
    4. Back, K., Baruch, S. Information in securities markets: Kyle meets Glosten
       and Milgrom. Econometrica (forthcoming)
    5. Back, K., Pedersen, H.: Long-lived information and intraday patterns. Jour-
       nal of Financial Markets, 1, 385–402 (1998)
    6. Back, K., Cao, H., Willard, G.: Imperfect competition among informed
       traders. Journal of Finance, 55, 2117–2155 (2000)
    7. Baruch, S.: Insider trading and risk aversion. Journal of Financial Markets,
       5, 451–464 (2002)
24       Kerry Back

      8. Basak, S., Croitoru, B.: On the role of arbitrageurs in rational markets,
         preprint (2003)
      9. Baudoin, F.: The ﬁnancial value of weak information on a ﬁnancial market.
         In: Paris-Princeton Lectures on Mathematical Finance 2002, Springer (2003)
     10. Brunnermeier, M. K.: Asset Pricing under Asymmetric Information: Bub-
         bles, Crashes, Technical Analysis, and Herding. Oxford University Press
         (2001)
     11. Cho, K.-H.: Continuous auctions and insider trading: uniqueness and risk
         aversion. Finance and Stochastics 7, 47–71 (2003)
     12. Cox, J., Ingersoll, J., Ross, S.: An Intertemporal general equilibrium model
         of asset prices, Econometrica, 53, 363–384 (1985)
     13. David, A.: Business cycle risk and the equity premium, Ph.D. dissertation,
         University of California at Los Angeles (1993)
     14. David, A: Fluctuating conﬁdence in stock markets: implications for returns
         and volatility, Journal of Financial and Quantitative Analysis, 32, 427–462
         (1997)
     15. David, A., Veronesi, P: Option prices with uncertain fundamentals: theory
         and evidence on the dynamics of implied volatilities, preprint (2002)
     16. Detemple, J.: Asset pricing in a production economy with incomplete infor-
         mation, Journal of Finance, 41, 383–391 (1986)
     17. Detemple, J.: Further results on asset pricing with incomplete information,
         Journal of Economic dynamics and Control, 15, 425–454 (1991)
     18. Detemple, J., Murthy, S.: Equilibrium asset prices and no-arbitrage with
         portfolio constraints, Review of Financial Studies, 10, 1133–1174 (1997)
     19. Dothan, M. U., Feldman, D.: Equilibrium interest rates and multiperiod
         bonds in a partially observable economy, Journal of Finance, 41, 369–382
         (1986)
     20. Duﬃe, J. D.: Dynamic Asset Pricing Theory, Princeton University Press
         (2001)
     21. Foster, F. D., Viswanathan, S.: Strategic trading when agents forecast the
         forecasts of others, Journal of Finance, 51, 1437–1478 (1996)
     22. Fujisaki, M., Kallianpur, G., Kunita, H.: Stochastic diﬀerential equations
         for the non-linear ﬁltering problem, Osaka Journal of Mathematics, 9, 19–40
         (1972)
     23. Gennotte, G.: Optimal portfolio choice under incomplete information, Jour-
         nal of Finance, 41, 733–746 (1986)
     24. Glosten, L., Milgrom, P.: Bid, ask, and transaction prices in a specialist mar-
         ket with heterogeneously informed traders, Journal of Financial Economics,
         13, 71–100 (1985)
     25. Grorud, A., Pontier, M.: Insider trading in a continuous time market model,
         International Journal of Theoretical and Applied Finance, 1, 331–347 (1988)
     26. Grorud, A., Pontier, M.: Asymmetrical information and incomplete markets,
         International Journal of Theoretical and Applied Finance, 4, 285–302 (2001)
     27. Grossman, S.: An introduction to the theory of rational expectations under
         asymmetric information, Review of Economic Studies, 31, 573–585 (1981)
     28. Grossman, S., Stiglitz, J.: On the impossibility of informationally eﬃcient
         markets, American Economic Review, 70, 393–408 (1980)
     29. Harsanyi, J.: Games with incomplete information played by ‘Bayesian’ play-
         ers, part III: the basic probability distribution of the game, Management
         Science, 14, 486–502 (1968)
      Incomplete and Asymmetric Information in Asset Pricing Theory               25

30. Hellwig, M.: On the aggregation of information in competitive markets, Jour-
    nal of Economic Theory, 26, 279–312 (1980)
31. Imkeller, P.: Malliavin’s calculus in insider models: additional utility and free
    lunches, Mathematical Finance, 13, 153–169 (2003)
32. Jacod, J.: Groissement initial, hypothèse h’ et theórème de Girsanov, in
    Séminaire de Calcul Stochastique 1982-1983, Lecture Notes in Mathematics
    1118, 15–35, Springer (1985)
33. Kallianpur, G.: Stochastic Filtering Theory, Springer-Verlag (1980).
34. Karatzas, I., Pikovsky, I.: Anticipative portfolio optimization, Advances in
    Applied Probability, 28, 1095–1122 (1996)
35. Kyle, A. S.: Continuous auctions and insider trading, Econometrica, 53,
    1315–1335 (1985)
36. Jouni, E., Napp, C.: Consensus consumer and intertemporal asset pricing
    under heterogeneous beliefs, preprint (2003)
37. Lasserre, G.: Asymmetric information and imperfect competition in a
    continuous-time multivariate security model, Finance and Stochastics (forth-
    coming)
38. León, J., Navarro, R., Nualart D.: An anticipating calculus approach to
    the utility maximization of an insider, Mathematical Finance, 13, 171–185
    (2003)
39. Lucas, R.: Expectations and the neutrality of money, Journal of Economic
    Theory, 4, 103–124 (1972)
40. Lucas, R.: Asset prices in an exchange economy, Econometrica, 40, 1429–
    1444. (1978)
41. Rogers, L. C. G., Williams, D.: Diﬀusions, Markov Processes and Martin-
    gales, Vol. 2, Cambridge University Press (2000)
42. Scheinkman, J., Xiong, W.: Speculative bubbles and overconﬁdence, Journal
    of Political Economy (forthcoming)
43. Townsend, R.: Forecasting the forecasts of others, Journal of Political Econ-
    omy, 91, 546-588 (1983)
44. Veronesi, P.: Stock market overreaction to bad news in good times: a rational
    expectations model, Review of Financial Studies, 12, 975–1007 (1999)
45. Veronesi, P.: How does information quality aﬀect stock returns? Journal of
    Finance, 55, 807–837 (2000)
46. Wang, J.: A model of intertemporal asset prices under asymmetric informa-
    tion, Review of Economic Studies, 60, 249–282 (1993)
47. Wonham, W.: Some applications of stochastic diﬀerential equations to op-
    timal nonlinear ﬁltering, SIAM Journal of Control, Series A, 2, 347–369
    (1965)
48. Ziegler, A.: Incomplete Information and Heterogeneous Beliefs in
    Continuous-Time Finance, Springer (2003)
Modeling and Valuation of Credit Risk

Tomasz R. Bielecki1, , Monique Jeanblanc2 , and Marek Rutkowski3,
1
  Department of Applied Mathematics
  Illinois Institute of Technology
  Chicago, USA
  bielecki@iit.edu
2
  Equipe d’Analyse et Probabilités
  Université d’Évry-Val d’Essonne
  Évry, France
3
  Faculty of Mathematics and Information Science
  Warsaw University of Technology and
  Institute of Mathematics of the Polish Academy of Sciences
  Warszawa, Poland

1 Introduction
The goal of this work is to present a survey of recent developments in the
area of mathematical modeling of credit risk and credit derivatives. Credit
risk embedded in a ﬁnancial transaction is the risk that at least one of the
parties involved in the transaction will suﬀer a ﬁnancial loss due to decline
in the creditworthiness of the counter-party to the transaction, or perhaps of
some third party. For example:
•    A holder of a corporate bond bears a risk that the (market) value of the
     bond will decline due to decline in credit rating of the issuer.
•    A bank may suﬀer a loss if a bank’s debtor defaults on payment of the
     interest due and (or) the principal amount of the loan.
•    A party involved in a trade of a credit derivative, such as a credit default
     swap (CDS), may suﬀer a loss if a reference credit event occurs.
•    The market value of individual tranches constituting a collateralized debt
     obligation (CDO) may decline as a result of changes in the correlation
     between the default times of the underlying defaultable securities (i.e., of
     the collateral).
    The most extensively studied form of credit risk is the default risk – that
is, the risk that a counterparty in a ﬁnancial contract will not fulﬁl a con-
tractual commitment to meet her/his obligations stated in the contract. For

     The ﬁrst author was supported in part by NSF Grant 0202851.

     The third author was supported by KBN Grant PBZ-KBN-016/P03/1999.


K. Back et al.: LNM 1856, M. Frittelli and W. Runggaldier (Eds.), pp. 27–126, 2004.

c Springer-Verlag Berlin Heidelberg 2004
28     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

this reason, the main tool in the area of credit risk modeling is a judicious
speciﬁcation of the random time of default. A large part of the present text
will be devoted to this issue, examined from diﬀerent perspectives by various
authors.
    Our main goal is to present the most important mathematical tools that
are used for the arbitrage valuation of defaultable claims, which are also known
under the name of credit derivatives. We decided to examine the important
issue of hedging credit risk in a separate work (see the forthcoming paper by
Bielecki et al. (2004)).
    These lecture notes are organized as follows. First, in Chapter 1, we provide
a concise summary of the main developments within the so-called structural
approach to modeling and valuation of credit risk. This was historically the
ﬁrst approach used in this area, and it goes back to the fundamental papers
by Black and Scholes (1973) and Merton (1974). Since the main object to
be modeled in the structural approach is the process representing the total
value of the ﬁrm’s assets (for instance, the issuer of a corporate bond), this
methodology is frequently termed the value-of-the-ﬁrm approach in ﬁnancial
literature.
    Chapter 2 is devoted to the intensity-based approach, which is also known
as the reduced-form approach. This approach is purely probabilistic in nature
and, technically speaking, it has a lot in common with the reliability theory.
Since, typically, the value of the ﬁrm is not modeled, the speciﬁcation of the
default time is directly related to the likelihood of default event conditional
on an information ﬂow. More speciﬁcally, the default risk is reﬂected either by
a deterministic default intensity function, or, more generally, by a stochastic
intensity.
    The ﬁnal chapter provides an introduction to the area of modeling depen-
dent credit migrations and defaults. Arguably, this is the most important and
the most diﬃcult research area with regard to credit risk and credit deriva-
tives. We describe the case of conditionally independent default time, the
copula-based approach, as well as the Jarrow and Yu (2001) approach to the
modeling of dependent stochastic intensities. We conclude by summarizing one
of the approaches that were recently developed for the purpose of modeling
term structure of corporate interest rates.
Acknowledgments
Since this is a survey article, we do not provide here, with rare exceptions,
the proofs of mathematical results that are presented in the text. For the
demonstrations, the interested reader is referred to numerous original papers,
as well as recent monographs, which are collected in the (non-exhaustive) list
of references. Let us only mention, that the proofs of most results can be found
in Bielecki and Rutkowski (2002) and Jeanblanc and Rutkowski (2000, 2001).
    Finally, it should be acknowledged that some results (especially within
the intensity-based approach presented in Chapter 2) were obtained indepen-
dently by various authors, who worked under diﬀerent sets of assumptions
                                  Modeling and Valuation of Credit Risk      29

and within distinct setups, and thus we decided not to provide speciﬁc cre-
dentials in most cases. We hope that respective authors and the readers will
be understanding in this regard.


2 Structural Approach
In this chapter, we present the structural approach to modeling credit risk (as
already mentioned in the introduction, it is also known as the value-of-the-
ﬁrm approach). This methodology directly refers to economic fundamentals,
such as the capital structure of a company, in order to model credit events (a
default event, in particular). As we shall see in what follows, the two major
driving concepts in the structural modeling are: the total value of the ﬁrm’s
assets and the default triggering barrier.

2.1 Basic Assumptions
We ﬁx a ﬁnite horizon date T ∗ > 0, and we suppose that the under-
lying probability space (Ω, F , P), endowed with some (reference) ﬁltration
F = (Ft )0≤t≤T ∗ , is suﬃciently rich to support the following objects:
•   The short-term interest rate process r, and thus also a default-free term
    structure model.
•   The ﬁrm’s value process V, which is interpreted as a model for the total
    value of the ﬁrm’s assets.
•   The barrier process v, which will be used in the speciﬁcation of the default
    time τ .
•   The promised contingent claim X representing the ﬁrm’s liabilities to be
    redeemed at maturity date T ≤ T ∗ .
•   The process C, which models the promised dividends, i.e., the liabilities
    stream that is redeemed continuously or discretely over time to the holder
    of a defaultable claim.
•   The recovery claim X̃ representing the recovery payoﬀ received at time T,
    if default occurs prior to or at the claim’s maturity date T .
•   The recovery process Z, which speciﬁes the recovery payoﬀ at time of de-
    fault, if it occurs prior to or at the maturity date T.

Defaultable Claims
Technical Assumptions
We postulate that the processes V, Z, C and v are progressively measurable
with respect to the ﬁltration F, and that the random variables X and X̃
are FT -measurable. In addition, C is assumed to be a process of ﬁnite vari-
ation, with C0 = 0. We assume without mentioning that all random objects
introduced above satisfy suitable integrability conditions.
30     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Probabilities P and P∗

The probability P is assumed to represent the real-world (or statistical ) prob-
ability, as opposed to the martingale measure (also known as the risk-neutral
probability). The latter probability is denoted by P∗ in what follows.

Default Time

Let us denote by τ the random time of default. It is essential to emphasize
that the various approaches to valuing and hedging of defaultable securities
diﬀer between themselves with regard to the ways in which the default event
– and thus also the default time τ – are modeled. In the structural approach,
the default time τ will be typically deﬁned in terms of the value process V
and the barrier process v. We set

                     τ = inf { t > 0 : t ∈ T and Vt ≤ vt }

with the usual convention that the inﬁmum over the empty set equals +∞.
The set T is assumed to be a Borel measurable subset of the time interval
[0, T ] (or [0, ∞) in the case of perpetual claims). In particular, depending on
the model and the purpose we may have that T = {T } as in the classical
Merton model, or that T = {T1 , T2 , . . . , Tn } if default can only happen (or,
rather, can be declared) at some discrete time instants, such as the coupon
payment dates. In most cases we have either T = [0, T ] or T = [0, ∞). In
classic structural models, the default time τ is given by the formula:

                  τ = inf { t > 0 : t ∈ [0, T ] and Vt ≤ v̄(t)},

where v̄ : [0, T ] → R+ is some deterministic function, termed the barrier.

Predictability of Default Time

Typically, the random variable τ is deﬁned in such a way that it is an F-
stopping time. Since the underlying ﬁltration F in most structural models is
generated by a standard Brownian motion, τ will be an F-predictable stopping
time (as any stopping time with respect to a Brownian ﬁltration). The latter
property means that within the framework of the structural approach there
exists a sequence of increasing stopping times announcing the default time; in
this sense, the default time can be forecasted with some degree of certainty.
    In some structural models, the value process V is assumed to follow a
jump diﬀusion, in which case the default time is not predicable with respect
to the reference ﬁltration, in general. Some other structural models are con-
structed so that the barrier process is not adapted to the reference ﬁltration
F, neither it is adapted to some ‘enlarged’ ﬁltration, denoted by G in the next
chapter. Consequently, τ is not predictable with respect to G in these models.
Also, in general, this will be the case if the value process is a discontinuous
semimartingale.
                                   Modeling and Valuation of Credit Risk      31

Remarks. Later in this article, we shall discuss the so-called intensity-based
approach to modeling credit risk. In this alternative approach, the default time
will not be a predictable stopping time with respect to the ‘enlarged’ ﬁltration,
in general. In typical examples, the ﬁltration G will encompass some Brownian
ﬁltration F, but G will be strictly larger than F. At the intuitive level, in the
intensity-based approach the occurrence of the default event comes as a total
surprise. For any date t, the default intensity γt will specify the conditional
probability of the occurrence of default over an inﬁnitesimally small time
interval [t, t + dt].

Recovery Rules

If default does not occur before or at time T, the promised claim X is paid in
full at time T. Otherwise, depending on the market convention, either (1) the
amount X̃ is paid at the maturity date T, or (2) the amount Zτ is paid at time
τ. As a matter of fact, in reality, the recovery payment may also be distributed
over time. However, for the modeling purposes it suﬃces to consider recovery
payment only at default time or at maturity, as other possibilities can be
reduced to the above by means of forward or backward discounting. In the
case when default occurs at maturity, i.e., on the event {τ = T }, we postulate
that only the recovery payment X̃ is paid. In a general setting, we consider
simultaneously both kinds of recovery payoﬀ, and thus a generic defaultable
claim is formally deﬁned as a quintuple (X, C, X̃, Z, τ ).
Remarks. The above notation emphasizes the role of the default time τ in
the deﬁnition of a generic defaultable claim. Within the structural framework
it would be more appropriate to denote the defaultable claim as a sextuple
(X, C, X̃, Z, V, v), since τ is deﬁned in terms of V and v.

Risk-Neutral Valuation Formula

Suppose that our ﬁnancial market model is arbitrage-free, in the sense that
there exists a martingale measure (risk-neutral probability) P∗ , meaning that
price process of any tradeable security, which pays no coupons or dividends,
becomes an F-martingale under P∗ , when discounted by the savings account
B, given as
                                      t        
                           Bt = exp        ru du .
                                         0
We introduce the jump process Ht = 11{τ ≤t} , and we denote by D the process
that models all cash ﬂows received by the owner of a defaultable claim. Let
us denote
                      X d (T ) = X11{τ >T } + X̃11{τ ≤T } .

Definition 2.1. The dividend process D of a defaultable contingent claim
(X, C, X̃, Z, τ ), which settles at time T, equals
32       T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

             Dt = X d (T )11{t≥T } +                   (1 − Hu ) dCu +           Zu dHu .
                                               ]0,t]                     ]0,t]

     It is apparent that D is a process of ﬁnite variation, and

                 (1 − Hu ) dCu =              11{τ >u} dCu = Cτ − 11{τ ≤t} + Ct 11{τ >t} .
         ]0,t]                        ]0,t]

Note that if default occurs at some date t, the promised dividend Ct − Ct− ,
which is due to be paid at this date, is not received by the holder of a default-
able claim. Furthermore, if we set τ ∧ t = min {τ, t} then

                                 Zu dHu = Zτ ∧t 11{τ ≤t} = Zτ 11{τ ≤t} .
                         ]0,t]


Remarks. In principle, the promised payoﬀ X could be incorporated into
the promised dividends process C. However, this would be inconvenient, since
in practice the recovery rules concerning the promised dividends C and the
promised claim X are diﬀerent, in general. For instance, in the case of a
defaultable coupon bond, it is frequently postulated that in case of default
the future coupons are lost, but a strictly positive fraction of the face value is
usually received by the bondholder.
    We are in the position to deﬁne the ex-dividend price St of a defaultable
claim. At any time t, the random variable St represents the current value of
all future cash ﬂows associated with a given defaultable claim.

Definition 2.2. For any date t ∈ [0, T [, the ex-dividend price of the default-
able claim (X, C, X̃, Z, τ ) is given as
                                                                      
                           St = Bt EP∗                      Bu−1 dDu Ft .                    (1)
                                                   ]t,T ]


    In addition, we always set ST = X d (T ). In the next chapter, we shall
use the same deﬁnition of the price, but with the probability measure P∗
substituted with Q∗ , and the ﬁltration F replaced by G.
    It needs to be emphasized that we are not concerned here with the issue of
completeness of our market. In particular, we are not concerned in this article
whether the relevant pricing measures are unique or not. For the study of
pricing and hedging of credit risk in incomplete markets we refer to Bielecki
et al. (2004a) and (2004b).

Defaultable Zero-Coupon Bond

Assume that C ≡ 0, Z ≡ 0 and X = L for some positive constant L > 0. Then
the value process S represents the arbitrage price of a defaultable zero-coupon
                                   Modeling and Valuation of Credit Risk       33

bond (also known as the corporate discount bond) with the face value L and
recovery at maturity only. In general, the price D(t, T ) of such a bond equals
                                                                 
             D(t, T ) = Bt EP∗ BT−1 (L11{τ >T } + X̃11{τ ≤T } ) Ft .

It is convenient to rewrite the last formula as follows:
                                                                   
            D(t, T ) = LBt EP∗ BT−1 (11{τ >T } + δ(T )11{τ ≤T } ) Ft ,

where the random variable δ(T ) = X̃/L represents the so-called recovery rate
upon default. It is natural to assume that 0 ≤ X̃ ≤ L so that δ(T ) satisﬁes
0 ≤ δ(T ) ≤ 1. Alternatively, we may re-express the bond price as follows:
                                                              
           D(t, T ) = L B(t, T ) − Bt EP∗ BT−1 w(T )11{τ ≤T } Ft ,

where
                          B(t, T ) = Bt EP∗ (BT−1 | Ft )
is the price of a unit default-free zero-coupon bond, and w(T ) = 1−δ(T ) is the
writedown rate upon default. Generally speaking, the time-t value of a corpo-
rate bond depends on the joint probability distribution under P∗ of the three-
dimensional random variable (BT , δ(T ), τ ) or, equivalently, (BT , w(T ), τ ).

Example 2.1. Merton (1974) postulates that the recovery payoﬀ upon default
equals X̃ = VT , where the random variable VT is the ﬁrm’s value at maturity
date T of a corporate bond. Consequently, the random recovery rate upon
default equals δ(T ) = VT /L, and the writedown rate upon default equals
w(T ) = 1 − VT /L.

Expected Writedowns

For simplicity, we assume that the savings account B is non-random – that
is, the short-term rate r is deterministic. Then the price of a default-free
zero-coupon bond equals B(t, T ) = Bt BT−1 , and the price of a zero-coupon
corporate bond satisﬁes

                          D(t, T ) = Lt (1 − w∗ (t, T )),

where Lt = LB(t, T ) is the present value of future liabilities, and w∗ (t, T ) is
the conditional expected writedown rate under P∗ . It is given by the following
equality:                                                
                      w∗ (t, T ) = EP∗ w(T )11{τ ≤T } | Ft .
Notice that we may set w(T ) = 0 on the event {τ > T }.
   The conditional expected writedown rate upon default equals, under P∗ ,
                                              
                   ∗   EP∗ w(T )11{τ ≤T } | Ft     w∗ (t, T )
                 wt =        ∗                   =            ,
                           P {τ ≤ T | Ft }            p∗t
34      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

where p∗t = P∗ {τ ≤ T | Ft } is the conditional risk-neutral probability of default.
Finally, let δt∗ = 1 − wt∗ be the conditional expected recovery rate upon default
under P∗ . In terms of p∗t , δt∗ and p∗t , we obtain

                D(t, T ) = Lt (1 − p∗t ) + Lt p∗t δt∗ = Lt (1 − p∗t wt∗ ).

If the random variables w(T ) and τ are conditionally independent with respect
to the σ-ﬁeld Ft under P∗ , then we have wt∗ = EP∗ (w(T ) | Ft ).

Example 2.2. In practice, it is common to assume that the recovery rate is
non-random. Let the recovery rate δ(T ) be constant, speciﬁcally, δ(T ) = δ for
some real number δ. In this case, the writedown rate w(T ) = w = 1 − δ is
non-random as well. Then w∗ (t, T ) = wp∗t and wt∗ = w for every 0 ≤ t ≤ T.
Furthermore, the price of a defaultable bond has the following representation

                 D(t, T ) = Lt (1 − p∗t ) + δLt p∗t = Lt (1 − wp∗t ).

We shall return to various recovery schemes later in the text.

2.2 Classic Structural Models

Classic structural models are based on the assumption that the risk-neutral
dynamics of the value process of the assets of the ﬁrm V are given by the
SDE:                                          
                  dVt = Vt (r − κ) dt + σV dWt∗ , V0 > 0,
where κ is the constant payout (dividend) ratio, and the process W ∗ is a
standard Brownian motion under the martingale measure P∗ .

Merton’s Model

We present here the classic model due to Merton (1974).
Basic assumptions. A ﬁrm has a single liability with promised terminal
payoﬀ L, interpreted as the zero-coupon bond with maturity T and face value
L > 0. The ability of the ﬁrm to redeem its debt is determined by the total
value VT of ﬁrm’s assets at time T. Default may occur at time T only, and the
default event corresponds to the event {VT < L}. Hence, the stopping time τ
equals
                        τ = T 11{VT <L} + ∞11{VT ≥L} .
Moreover C = 0, Z = 0, and

                        X d (T ) = VT 11{VT <L} + L11{VT ≥L}

so that X̃ = VT . In other words, the payoﬀ at maturity equals

         DT = min (VT , L) = L − max (L − VT , 0) = L − (L − VT )+ .
                                    Modeling and Valuation of Credit Risk     35

The latter equality shows that the valuation of the corporate bond in Merton’s
setup is equivalent to the valuation of a European put option written on the
ﬁrm’s value with strike equal to the bond’s face value. Let D(t, T ) be the price
at time t < T of the corporate bond. It is clear that the value D(Vt ) of the
ﬁrm’s debt equals

                      D(Vt ) = D(t, T ) = L B(t, T ) − Pt ,

where Pt is the price of a put option with strike L and expiration date T. It
is apparent that the value E(Vt ) of the ﬁrm’s equity at time t equals

               E(Vt ) = Vt − D(Vt ) = Vt − LB(t, T ) + Pt = Ct ,

where Ct stands for the price at time t of a call option written on the ﬁrm’s
assets, with the strike price L and the exercise date T. To justify the last
equality above, we may also observe that at time T we have

           E(VT ) = VT − D(VT ) = VT − min (VT , L) = (VT − L)+ .

We conclude that the ﬁrm’s shareholders are in some sense the holders of a
call option on the ﬁrm’s assets.

Merton’s Formula

Using the option-like features of a corporate bond, Merton (1974) derived
a closed-form expression for its arbitrage price. Let N denote the standard
Gaussian cumulative distribution function:
                                     x
                            1               2
                   N (x) = √             e−u /2 du,   ∀ x ∈ R.
                            2π      −∞

Proposition 2.1. For every 0 ≤ t < T the value D(t, T ) of a corporate bond
equals
                                                                         
   D(t, T ) = Vt e−κ(T −t) N − d+ (Vt , T − t) + L B(t, T )N d− (Vt , T − t)

where                                                   
                               ln(Vt /L) + r − κ ± 12 σV2 (T − t)
             d± (Vt , T − t) =               √                    .
                                          σV T − t
The unique replicating strategy for a defaultable bond involves holding at any
time 0 ≤ t < T the φ1t Vt units of cash invested in the ﬁrm’s value and
φ2t B(t, T ) units of cash invested in default-free bonds, where
                                                           
                         φ1t = e−κ(T −t) N − d+ (Vt , T − t)

and
                         D(t, T ) − φ1t Vt                    
                 φ2t =                     = LN d− (Vt , T − t) .
                            B(t, T )
36     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Credit Spreads

For notational simplicity, we set κ = 0. Then Merton’s formula becomes:
                                          √                  
            D(t, T ) = LB(t, T ) N (d − σV T − t) + Γt N (−d) ,

where we denote Γt = Vt /LB(t, T ) and

                                      ln(Vt /L) + (r + σV2 /2)(T − t)
              d = d(Vt , T − t) =                  √                  .
                                                σV T − t
Since LB(t, T ) represents the current value of the face value of the ﬁrm’s debt,
the quantity Γt can be seen as a proxy of the asset-to-debt ratio Vt /D(t, T ).
It can be easily veriﬁed that the inequality D(t, T ) < LB(t, T ) is valid. This
property is equivalent to the positivity of the corresponding credit spread (see
below).
    Observe that in the present setup the continuously compounded yield
r(t, T ) at time t on the T -maturity Treasury zero-coupon bond is constant,
and equal to the short-term rate r. Indeed, we have

                    B(t, T ) = e−r(t,T )(T −t) B(t, T ) = e−r(T −t) .

Let us denote by rd (t, T ) the continuously compounded yield on the corporate
bond at time t < T , so that

                             D(t, T ) = Le−r (t,T )(T −t) .
                                                 d




From the last equality, it follows that
                                            ln D(t, T ) − ln L
                           rd (t, T ) = −                      .
                                                 T −t
For t < T the credit spread S(t, T ) is deﬁned as the excess return on a de-
faultable bond:
                                                        1     LB(t, T )
                 S(t, T ) = rd (t, T ) − r(t, T ) =        ln           .
                                                      T −t    D(t, T )
In Merton’s model, we have
                                    √                  
                         ln N (d − σV T − t) + Γt N (−d)
            S(t, T ) = −                                  > 0.
                                      T −t
This agrees with the well-known fact that risky bonds have an expected re-
turn in excess of the risk-free interest rate. In other words, the yields on
corporate bonds are higher than yields on Treasury bonds with matching
notional amounts. Notice, however, when t tends to T, the credit spread in
Merton’s model tends either to inﬁnity or to 0, depending on whether VT < L
or VT > L. Formally, if we deﬁne the forward short spread at time T as
                                   Modeling and Valuation of Credit Risk      37

                              F SST = lim S(t, T )
                                        t↑T

then                             
                                  0,           ifω ∈ {VT > L},
                     F SST (ω) =
                                  ∞,           ifω ∈ {VT < L}.

Black and Cox Model

By construction, Merton’s model does not allow for a premature default, in
the sense that the default may only occur at the maturity of the claim. Several
authors put forward structural-type models in which this restrictive and unre-
alistic feature is relaxed. In most of these models, the time of default is given
as the ﬁrst passage time of the value process V to either a deterministic or a
random barrier. In principle, the bond’s default may thus occur at any time
before or on the maturity date T. The challenge is to appropriately specify
the lower threshold v, the recovery process Z, and to explicitly evaluate the
conditional expectation that appears on the right-hand side of the risk-neutral
valuation formula
                                                       
                        St = Bt EP∗        Bu−1 dDu Ft ,
                                      ]t,T ]

which is valid for t ∈ [0, T [. As one might easily guess, this is a non-trivial
mathematical problem, in general. In addition, the practical problem of the
lack of direct observations of the value process V largely limits the applica-
bility of the ﬁrst-passage-time models based on the value of the ﬁrm process
V.

Corporate Zero-Coupon Bond

Black and Cox (1976) extend Merton’s (1974) research in several directions,
by taking into account such speciﬁc features of real-life debt contracts as:
safety covenants, debt subordination, and restrictions on the sale of assets.
Following Merton (1974), they assume that the ﬁrm’s stockholders receive
continuous dividend payments, which are proportional to the current value of
ﬁrm’s assets. Speciﬁcally, they postulate that
                                              
                  dVt = Vt (r − κ) dt + σV dWt∗ , V0 > 0,

where the constant κ ≥ 0 represents the payout ratio, and σV > 0 is the
constant volatility. The short-term interest rate r is assumed to be constant.
Safety covenants. Safety covenants provide the ﬁrm’s bondholders with the
right to force the ﬁrm to bankruptcy or reorganization if the ﬁrm is doing
poorly according to a set standard. The standard for a poor performance
is set by Black and Cox in terms of a time-dependent deterministic barrier
38      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

v̄(t) = Ke−γ(T −t), t ∈ [0, T [, for some constant K > 0. As soon as the value
of ﬁrm’s assets crosses this lower threshold, the bondholders take over the
ﬁrm. Otherwise, default takes place at debt’s maturity or not depending on
whether VT < L or not.
Default time. Let us set
                                 
                                     v̄(t), fort < T,
                          vt =
                                     L,               fort = T.

The default event occurs at the ﬁrst time t ∈ [0, T ] at which the ﬁrm’s value
Vt falls below the level vt , or the default event does not occur at all. The
default time equals ( inf ∅ = +∞)

                           τ = inf { t ∈ [0, T ] : Vt < vt }.

The recovery process Z and the recovery payoﬀ X̃ are proportional to the
value process: Z ≡ β2 V and X̃ = β1 VT for some constants β1 , β2 ∈ [0, 1]. The
case examined by Black and Cox (1976) corresponds to β1 = β2 = 1.
     To summarize, we consider the following model:

               X = L, C ≡ 0, Z ≡ β2 V, X̃ = β1 VT , τ = τ̄ ∧ τ̂ ,

where the early default time τ̄ equals

                          τ̄ = inf { t ∈ [0, T ) : Vt < v̄(t)}

and τ̂ stands for Merton’s default time: τ̂ = T 11{VT <L} + ∞11{VT ≥L} .

Bond Valuation

Similarly as in Merton’s model, it is assumed that the short term interest rate
is deterministic and equal to a positive constant r. We postulate, in addition,
that v̄(t) ≤ LB(t, T ) or, more explicitly,

                      Ke−γ(T −t) ≤ Le−r(T −t),        ∀ t ∈ [0, T ],

so that, in particular, K ≤ L. This condition ensures that the payoﬀ to
the bondholder at the default time τ never exceeds the face value of debt,
discounted at a risk-free rate.
PDE approach. Since the model for the value process V is given in terms of
a Markovian diﬀusion, a suitable partial diﬀerential equation can be used to
characterize the value process of the corporate bond. Let us write D(t, T ) =
u(Vt , t). Then the pricing function u = u(v, t) of a defaultable bond satisﬁes
the following PDE:

           ut (v, t) + (r − κ)vuv (v, t) + 12 σV2 v 2 uvv (v, t) − ru(v, t) = 0
                                     Modeling and Valuation of Credit Risk       39

on the domain

                {(v, t) ∈ R+ × R+ : 0 < t < T, v > Ke−γ(T −t) },

with the boundary condition

                         u(Ke−γ(T −t) , t) = β2 Ke−γ(T −t)

and the terminal condition u(v, T ) = min (β1 v, L).
Probabilistic approach. For any t < T the price D(t, T ) = u(Vt , t) of a
defaultable bond has the following probabilistic representation, on the set
{τ > t} = {τ̄ > t}
                                                         
           D(t, T ) = EP∗ Le−r(T −t) 11{τ̄ ≥T, VT ≥L} Ft
                                                                 
                      + EP∗ β1 VT e−r(T −t) 11{τ̄ ≥T, VT <L} Ft
                                                                    
                      + EP∗ Kβ2 e−γ(T −τ̄ ) e−r(τ̄−t) 11{t<τ̄ <T } Ft .

After default – that is, on the set {τ ≤ t} = {τ̄ ≤ t}, we clearly have

          D(t, T ) = β2 v̄(τ )B −1 (τ, T )B(t, T ) = Kβ2 e−γ(T −τ ) er(t−τ ).

To compute the expected values above, we observe that:
•   the ﬁrst two conditional expectations can be computed by using the for-
    mula for the conditional probability P∗ {Vs ≥ x, τ ≥ s | Ft },
•   to evaluate the third conditional expectation, it suﬃces employ the con-
    ditional probability law of the ﬁrst passage time of the process V to the
    barrier v̄(t).

Black and Cox Formula

Before we state the bond valuation result due to Black and Cox (1976), we
ﬁnd it convenient to introduce some notation. We denote

                          ν = r − κ − 12 σV2 ,
                          ν̂ = ν − γ = r − κ − γ − 12 σV2 ,

and â = ν̂σV−2 . For the sake of brevity, in the statement of Proposition 2.2 we
shall write σ instead of σV . As already mentioned, the probabilistic proof of
this result is based on the knowledge of the probability law of the ﬁrst pas-
sage time of the geometric (exponential) Brownian motion to an exponential
barrier.
Proposition 2.2. Assume that ν̂ 2 + 2σ 2 (r − γ) > 0. Prior to bond’s default,
that is: on the set {τ > t}, the price process D(t, T ) = u(Vt , t) of a defaultable
bond equals
40      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski
                                                                     
       D(t, T ) = LB(t, T ) N h1 (Vt , T − t) − Rt2â N h2 (Vt , T − t)
                                                                
         + β1 Vt e−κ(T −t) N h3 (Vt , T − t)) − N h4 (Vt , T − t)
                                                                      
         + β1 Vt e−κ(T −t) Rt2â+2 N h5 (Vt , T − t)) − N h6 (Vt , T − t)
                                                                 
         + β2 Vt Rtθ+ζ N h7 (Vt , T − t) + Rtθ−ζ N h8 (Vt , T − t) ,
                                           
where Rt = v̄(t)/Vt , θ = â + 1, ζ = σ −2 ν̂ 2 + 2σ 2 (r − γ) and

                               ln (Vt /L) + ν(T − t)
             h1 (Vt , T − t) =            √             ,
                                        σ T −t
                               ln v̄ 2 (t) − ln(LVt ) + ν(T − t)
             h2 (Vt , T − t) =                 √                   ,
                                             σ T −t
                               ln (L/Vt ) − (ν + σ 2 )(T − t)
             h3 (Vt , T − t) =                √                 ,
                                            σ T −t
                               ln (K/Vt ) − (ν + σ 2 )(T − t)
             h4 (Vt , T − t) =                √                  ,
                                            σ T −t
                               ln v̄ 2 (t) − ln(LVt ) + (ν + σ 2 )(T − t)
             h5 (Vt , T − t) =                    √                       ,
                                                 σ T −t
                               ln v̄ 2 (t) − ln(KVt ) + (ν + σ 2 )(T − t)
             h6 (Vt , T − t) =                    √                        ,
                                                 σ T −t
                               ln (v̄(t)/Vt ) + ζσ 2 (T − t)
             h7 (Vt , T − t) =              √                ,
                                           σ T −t
                               ln (v̄(t)/Vt ) − ζσ 2 (T − t)
             h8 (Vt , T − t) =              √                .
                                           σ T −t
Special Cases

Assume that β1 = β2 = 1 and the barrier function v̄ is such that K = L.
Then necessarily γ ≥ r. It can be checked that for K = L we have D(t, T ) =
D1 (t, T ) + D3 (t, T ) where:
                                                                       
         D1 (t, T ) = LB(t, T ) N h1 (Vt , T − t) − Rt2â N h2 (Vt , T − t)
                                                                     
        D3 (t, T ) = Vt Rtθ+ζ N h7 (Vt , T − t) + Rtθ−ζ N h8 (Vt , T − t) .
Case γ = r. If we also assume that γ = r then ζ = −σ −2 ν̂, and thus

           Vt Rtθ+ζ = LB(t, T ),      Vt Rtθ−ζ = Vt Rt2â+1 = LB(t, T )Rt2â .

It is also easy to see that in this case
                                 ln(Vt /L) + ν(T − t)
            h1 (Vt , T − t) =            √            = −h7 (Vt , T − t),
                                        σ T −t
while
                                      Modeling and Valuation of Credit Risk        41

                            ln v̄ 2 (t) − ln(LVt ) + ν(T − t)
        h2 (Vt , T − t) =                   √                 = h8 (Vt , T − t).
                                          σ T −t
We conclude that if v̄(t) = Le−r(T −t) = LB(t, T ) then D(t, T ) = LB(t, T ).
This result is quite intuitive. A corporate bond with a safety covenant repre-
sented by the barrier function, which equals the discounted value of the bond’s
face value, is equivalent to a default-free bond with the same face value and
maturity.
Case γ > r. For K = L and γ > r, it is natural to expect that D(t, T )
would be smaller than LB(t, T ). It is also possible to show that when γ tends
to inﬁnity (all other parameters being ﬁxed), then the Black and Cox price
converges to Merton’s price.
Further Developments
The Black and Cox ﬁrst-passage-time approach was later developed by, among
others: Brennan and Schwartz (1977, 1980) – an analysis of convertible bonds,
Kim et al. (1993) – a random barrier and random interest rates, Nielsen et al.
(1993) – a random barrier and random interest rates, Leland (1994), Leland
and Toft (1996) – a study of an optimal capital structure, bankruptcy costs
and tax beneﬁts, Longstaﬀ and Schwartz (1995) – a constant barrier and
random interest rates.
Optimal Capital Structure
We consider a ﬁrm that has an interest paying bonds outstanding. We assume
that it is a consol bond, which pays continuously coupon rate c. Assume that
r > 0 and the payout rate κ is equal to zero. This condition can be given
a ﬁnancial interpretation as the restriction on the sale of assets, as opposed
to issuing of new equity. Equivalently, we may think about a situation in
which the stockholders will make payments to the ﬁrm to cover the interest
payments. However, they have the right to stop making payments at any time
and either turn the ﬁrm over to the bondholders or pay them a lump payment
of c/r per unit of the bond’s notional amount.
     Recall that we denote by E(Vt ) (D(Vt ), resp.) the value at time t of the
ﬁrm equity (debt, resp.), hence the total value of the ﬁrm’s assets satisﬁes
Vt = E(Vt ) + D(Vt ).
     Black and Cox (1976) argue that there is a critical level of the value of
the ﬁrm, denoted as v ∗ , below which no more equity can be sold. The critical
value v ∗ will be chosen by stockholders, whose aim is to minimize the value of
the bonds (equivalently, to maximize the value of the equity). Let us observe
that v ∗ is nothing else than a constant default barrier in the problem under
consideration; the optimal default time τ ∗ thus equals τ ∗ = inf { t ≥ 0 : Vt ≤
v ∗ }.
     To ﬁnd the value of v ∗ , let us ﬁrst ﬁx the bankruptcy level v̄. The ODE
for the pricing function u∞ = u∞ (V ) of a consol bond takes the following
form (recall that σ = σV )
42      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

                      1 2 2 ∞          ∞          ∞
                      2 V σ uV V + rV uV + c − ru   = 0,
subject to the lower boundary condition u∞ (v̄) = min (v̄, c/r) and the upper
boundary condition
                              lim u∞
                                   V (V ) = 0.
                                 V →∞
For the last condition, observe that when the ﬁrm’s value grows to inﬁnity, the
possibility of default becomes meaningless, so that the value of the defaultable
consol bond tends to the value c/r of the default-free consol bond. The general
solution has the following form:
                                     c
                         u∞ (V ) = + K1 V + K2 V −α ,
                                     r
where α = 2r/σ 2 and K1 , K2 are some constants, to be determined from
boundary conditions. We ﬁnd that K1 = 0, and
                            
                              v̄ α+1 − (c/r)v̄ α , ifv̄ < c/r,
                       K2 =
                              0,                   ifv̄ ≥ c/r.
Hence, if v̄ < c/r then
                                     c  α+1 c α  −α
                      u∞ (Vt ) =       + v̄ − v̄ Vt
                                     r       r
or, equivalently,
                                              α                  α
                                 c         v̄                  v̄
                    u∞ (Vt ) =        1−            + v̄                .
                                 r         Vt                  Vt
It is in the interest of the stockholders to select the bankruptcy level in such
a way that the value of the debt, D(Vt ) = u∞ (Vt ), is minimized, and thus the
value of ﬁrm’s equity
                                                c
                   E(Vt ) = Vt − D(Vt ) = Vt − (1 − q̄t ) − v̄ q̄t
                                                r
is maximized. It is easy to check that the optimal level of the barrier does not
depend on the current value of the ﬁrm, and it equals
                                  c α            c
                            v∗ =          =             .
                                  rα+1       r + σ 2 /2
Given the optimal strategy of the stockholders, the price process of the ﬁrm’s
debt (i.e., of a consol bond) takes the form, on the set {τ ∗ > t},
                                                      α+1
                                c     1        c
                      D∗ (Vt ) = −
                                r αVtα r + σ 2 /2
or, equivalently,
                                   c
                         D∗ (Vt ) = (1 − qt∗ ) + v ∗ qt∗ ,
                                   r
where                       ∗ α                          α
                       ∗     v        1         c
                      qt =         = α                       .
                             Vt      Vt     r + σ 2 /2
                                     Modeling and Valuation of Credit Risk      43

Further Developments

We end this section by remarking that other important developments in the
area of optimal capital structure were presented in the papers by Leland
(1994), Leland and Toft (1996), Hilberink and Rogers (2002) and Christensen
et al. (2002). It is probably worth noting that Hilberink and Rogers (2002)
model the ﬁrm value process as a diﬀusion with jumps. The reason for this ex-
tension was to eliminate an undesirable feature of previously examined models,
in which short spreads tend to zero when a bond approaches maturity date.

2.3 Stochastic Interest Rates

In this section, we assume that the underlying probability space (Ω, F , P),
endowed with the ﬁltration F = (Ft )t≥0 , supports the short-term interest
rate process r and the value process V. The dynamics under the martingale
measure P∗ of the ﬁrm’s value and of the price of a default-free zero-coupon
bond B(t, T ) are
                                                        
                     dVt = Vt (rt − κ(t)) dt + σ(t) dWt∗

and                                                           
                    dB(t, T ) = B(t, T ) rt dt + b(t, T ) dWt∗
respectively, where W ∗ is a d-dimensional standard Brownian motion. Fur-
thermore, κ : [0, T ] → R, σ : [0, T ] → Rd and b(·, T ) : [0, T ] → Rd are assumed
to be bounded functions. The forward value FV (t, T ) = Vt /B(t, T ) of the
ﬁrm satisﬁes under the forward martingale measure PT (see eg. Musiela and
Rutkowski (1997), page 309, for deﬁnition of the forward martingale measure)
                                                                     
        dFV (t, T ) = −κ(t)FV (t, T ) dt + FV (t, T ) σ(t) − b(t, T ) dWtT
                                  t
where the process WtT = Wt∗ − 0 b(u, T ) du, t ∈ [0, T ], is a d-dimensional
SBM under PT . For any t ∈ [0, T ], we set
                                                  T
                        FVκ (t, T ) = FV (t, T )e− t κ(u) du .

Then                                                       
                  dFVκ (t, T ) = FVκ (t, T ) σ(t) − b(t, T ) dWtT .
Furthermore, it is apparent that FVκ (T, T ) = FV (T, T ) = VT . We consider the
following modiﬁcation of the Black and Cox approach:

        X = L, Zt = β2 Vt , X̃ = β1 VT , τ = inf { t ∈ [0, T ] : Vt < vt },

where β2 , β1 ∈ [0, 1] are constants, and the barrier v is given by the formula
                                      T
                             KB(t, T )e t κ(u) du fort < T,
                     vt =
                             L                    fort = T,
44      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

with the constant K satisfying 0 < K ≤ L. Let us denote, for any t ≤ T,
                             T                                   T
          κ(t, T ) =             κ(u) du,   σ 2 (t, T ) =            |σ(u) − b(u, T )|2 du
                         t                                   t

where | · | is the Euclidean norm in R . For brevity, we write Ft = FVκ (t, T ),
                                                  d

and we denote

        η+ (t, T ) = κ(t, T ) + 12 σ 2 (t, T ),       η− (t, T ) = κ(t, T ) − 12 σ 2 (t, T ).

The following result extends Black and Cox valuation formula for a corporate
bond to the case of random interest rates.
Proposition 2.3. For any t < T, the forward price of a defaultable bond
FD (t, T ) = D(t, T )/B(t, T ) equals on the set {τ > t}
                                                                     
              L N ĥ1 (Ft , t, T ) − (Ft /K)e−κ(t,T )N ĥ2 (Ft , t, T )
                                                                    
               + β1 Ft e−κ(t,T ) N ĥ3 (Ft , t, T ) − N ĥ4 (Ft , t, T )
                                                         
               + β1 K N ĥ5 (Ft , t, T ) − N ĥ6 (Ft , t, T )
                 + β2 KJ+ (Ft , t, T ) + β2 Ft e−κ(t,T ) J− (Ft , t, T ),

where
                                        ln (Ft /L) − η+ (t, T )
                     ĥ1 (Ft , t, T ) =                         ,
                                                σ(t, T )
                                        2 ln K − ln(LFt ) + η− (t, T )
                     ĥ2 (Ft , T, t) =                                 ,
                                                    σ(t, T )
                                        ln (L/Ft ) + η− (t, T )
                     ĥ3 (Ft , t, T ) =                         ,
                                                σ(t, T )
                                        ln (K/Ft ) + η− (t, T )
                     ĥ4 (Ft , t, T ) =                          ,
                                                σ(t, T )
                                        2 ln K − ln(LFt ) + η+ (t, T )
                     ĥ5 (Ft , t, T ) =                                ,
                                                    σ(t, T )
                                        ln(K/Ft ) + η+ (t, T )
                     ĥ6 (Ft , t, T ) =                         ,
                                                σ(t, T )
and for any ﬁxed 0 ≤ t < T and Ft > 0 we set
                                         
                          T
                              κ(u,T )      ln(K/Ft ) + κ(t, T ) ± 12 σ 2 (t, u)
      J± (Ft , t, T ) =     e         dN                                                     .
                        t                              σ(t, u)
In the special case when κ ≡ 0, the formula of Proposition 2.3 covers as a
special case the valuation result established by Briys and de Varenne (1997). In
some other recent studies of ﬁrst passage time models, in which the triggering
barrier is assumed to be either a constant or an unspeciﬁed stochastic process,
                                     Modeling and Valuation of Credit Risk    45

typically no closed-form solution for the value of a corporate debt is available,
and thus a numerical approach is required (see, for instance, Kim et al. (1993),
Longstaﬀ and Schwartz (1995), Nielsen et al. (1993), or Saá-Requejo and
Santa-Clara (1999)).

2.4 Credit Spreads: A Case Study

In the case of full information and Brownian ﬁltration, the stopping time
τ is predictable. This is no longer the case when we deal with incomplete
information (as in Duﬃe and Lando (2001)), or when an additional source of
randomness is present. We present here a formula for credit spreads arising
in a special case of a totally inaccessible time of default. For a more detailed
study we refer to Babbs and Bielecki (2003).
    We postulate that the value process V is a geometric Brownian motion
with a drift, that is, we set Vt = eΨt , where Ψt = µt + σWt∗ . Let v ∈ (0, 1)
denote a random default barrier. Speciﬁcally v is a random variable deﬁned
on (Ω, F , P∗ ) and independent of W ∗ . We deﬁne the default time as

               τ = inf {t ≥ 0 : Vt ≤ v} = inf {t ≥ 0 : Ψt ≤ ψ},

where ψ = ln v. It is clear that we also have τ = inf {t ≥ 0 : Ψt∗ ≤ ψ}, where
Ψ ∗ is the running minimum of the process Ψ : Ψt∗ = inf {Ψs : 0 ≤ s ≤ t}. It is
well known that (Ψ, Ψ ∗ ) is a strong Markov process.
    We choose
         ∗
                the Brownian ﬁltration as the reference ﬁltration, i.e., we set
F = FW . This means that we assume that the value process V (hence also
the process Ψ ) is perfectly observed. In addition, we suppose that the bond
investor can observe the occurrence of the default time. Thus, he can observe
the process Ht = 11{τ ≤t} = 11{Ψt∗≤ψ} . We denote by H the natural ﬁltration
of the process H. The information available to the investor is represented by
the (enlarged) ﬁltration G = F ∨ H.
    Let us denote by G(z) the cumulative distribution function under P∗ of
the barrier ψ. We assume that G(z) > 0 for z < 0 and that G admits the
density g with respect to the Lebesgue measure (note that g(z) = 0 for z >
0). In addition, we assume that the default time τ and interest rates are
independent under P∗ . Then, it is possible to establish the following result
(see Giesecke (2002) or Babbs and Bielecki (2003)). Note that the process Ψ ∗
is decreasing, so that the integral with respect to this process is a (pathwise)
Stieltjes integral.

Proposition 2.4. Under the assumptions stated above, and additionally as-
suming L = 1, Z ≡ 0 and X̃ = 0, we have that for every t < T

                                      1          T g(Ψu ) ∗
                                                        ∗       
                                                           dΨ
             S(t, T ) = −11{τ >t}        ln EP∗ e t G(Ψu∗ ) u Ft .
                                    T −t
46       T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

    In the next chapter, we shall introduce the notion of a hazard process of
a random time. For the default time τ deﬁned above, the F-hazard process Γ
exists and is given by the formula
                                           t
                                               g(Ψu∗ )
                             Γt = −                    dΨ ∗ .
                                       0       G(Ψu∗ ) u

This process is continuous, and thus the default time τ is a totally inaccessible
stopping time with respect to the ﬁltration G.

2.5 Comments on Structural Models

We end this chapter by commenting on merits and drawbacks of the structural
approach to credit risk.

Advantages
•    An approach based on the volatility of the total value of the ﬁrm. The
     credit risk is thus measured in a standard way. The random time of default
     is deﬁned in an intuitive way. The default event is linked to the notion of
     the ﬁrm’s insolvency.
•    Valuation and hedging of defaultable claims rely on similar techniques as
     the valuation and hedging of exotic options in the standard default-free
     Black-Scholes setup.
•    The concept of the distance to default, which measures the obligor’s lever-
     age relative to the volatility of its assets value, may serve to reﬂect credit
     ratings.
•    Dependent defaults are easy to handle through correlation of processes
     corresponding to diﬀerent names.

Disadvantages
•    A stringent assumption that the total value of the ﬁrm’s assets can be eas-
     ily observed. In practice, continuous-time observations of the value process
     V are not available. This issue was recently addressed by Crouhy et al.
     (1998) and Duﬃe and Lando (2001), who showed that a structural model
     with incomplete accounting data can be dealt with using the intensity-
     based methodology.
•    An unrealistic postulate that the total value of the ﬁrm’s assets is a trade-
     able security.
•    This approach is known to generate low credit spreads for corporate bonds
     close to maturity. It requires a judicious speciﬁcation of the default barrier
     in order to get a good ﬁt to the observed spread curves.
                                    Modeling and Valuation of Credit Risk       47

Other issues
•   A major problem with applying structural models is the diﬃculty with the
    estimation of the volatility of assets value. For the classical Merton’s model,
    there exists a simple formula that relates this volatility to the volatility of
    the ﬁrm’s equity, which in principle can be easily estimated. However, no
    such simple expression exists in case of ﬁrst-passage-time models. Certain
    market-oriented technologies, such as CreditGrades, attempt to produce
    such a formula.
•   Structural models discussed above were at most one-factor models, with
    the only factor being the short-term interest rate. Two- and three-factor
    structural models have also been developed and closed-form valuation for-
    mulae were derived in some special cases.


3 Intensity-Based Approach
A major motivation for the intensity-based approach (also known as the
reduced-form approach) was to model a credit event as an unpredictable event,
meaning that the date of its occurrence is a totally inaccessible stopping time
with respect to an underlying ﬁltration. The modeling of a default time is
essentially reduced to the speciﬁcation of the so-called hazard process with
respect to some reference ﬁltration. Under some circumstances, this is equiv-
alent to the modeling of a default time in terms of its intensity process. The
name reduced-form approach was probably well justiﬁed in the early stages
of development of this approach when, typically, only exogenously given in-
tensities were considered. However, it is possible to link a hazard process to
economic fundamentals of a ﬁrm, such as the total asset value process, so that
the hazard process can be speciﬁed endogenously.
    The intensity-based approach to modeling of credit risk, was studied by,
among others, Jarrow and Turnbull (1995), Jarrow et al. (1997), Duﬃe et al.
(1996), Duﬃe (1998a), Lando (1998a), Duﬃe and Singleton (1999), Elliott et
al. (2000), Schönbucher (2000a, 2000b), Bélanger et al. (2001), Jamshidian
(2002), Collin-Dufresne et al. (2002), Brigo and Alfonsi (2003) and Chen and
Filipović (2003a, 2003b).

3.1 Hazard Function

Before going deeper in the analysis of the reduced-form approach, we shall
ﬁrst examine a related technical question. Suppose we want to evaluate a
conditional expectation EP (11{τ >s} Y | Gt ), where τ is a stopping time on a
probability space (Ω, G, P), with respect to some ﬁltration G = (Gt )t≥0 and
Y is an integrable, Gs -measurable random variable for some s ≥ t.
    In ﬁnancial applications, it is quite natural and convenient to model the
ﬁltration G as G = F ∨ H, where H is the ﬁltration that carries full infor-
mation about default events (that is, events such as {τ ≤ t}), whereas the
48      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

reference ﬁltration F carries information about other relevant ﬁnancial and
economic processes, but, typically, it does not carry full information about
default event. The ﬁrst question we address is how to compute the expecta-
tion EP (11{τ >s} Y | Gt ) using the intensity of τ with respect to F.

Hazard Function of a Random Time
In this section, we study the case where the reference ﬁltration F is triv-
ial, so that it does not carry any information whatsoever. Consequently, we
have that G = H. Arguably, this is the simplest possible setup within the
intensity-based approach; nevertheless, it is sometimes used in practical ﬁ-
nancial applications, as it leads to relatively easy calibration of the model.
Most of the results obtained in this section can be considered as prototypes
for the results presented in the remaining sections of this chapter, where the
reference ﬁltration is no longer assumed to be trivial.
    We start by recalling the notion of a hazard function of a random time. Let
τ be a ﬁnite, non-negative random variable on a probability space (Ω, G, P),
referred to as the random time. We assume that P{τ = 0} = 0 and τ is
unbounded: P{τ > t} > 0 for every t ∈ R+ .
    The right-continuous cumulative distribution function F of τ satisﬁes
F (t) = P{τ ≤ t} < 1 for every t ∈ R+ . We also assume that P{τ < ∞} = 1,
so that τ is a Markov time.
    We introduce the right-continuous jump process Ht = 11{τ ≤t} and we
write H = (Ht )t≥0 to denote the (right-continuous and P-completed) ﬁltration
generated by the process H. Of course, τ is an H-stopping time.
    We shall assume throughout that all random variables and processes that
are used in what follows satisfy suitable integrability conditions. We begin
with the following simple and important result.
Lemma 3.1. For any G-measurable (integrable) random variable Y we have
                                                             EP (11{τ >t} Y )
             EP (Y | Ht ) = 11{τ ≤t}EP (Y | τ ) + 11{τ >t}                    .   (2)
                                                               P{τ > t}
For any Ht -measurable random variable Y we have
                                                       EP (11{τ >t} Y )
                 Y = 11{τ ≤t} EP (Y | τ ) + 11{τ >t}                    ,         (3)
                                                         P{τ > t}
that is, Y = h(τ ) for a Borel measurable h : R → R which is constant on the
interval ]t, ∞[.
     The hazard function is introduced through the following deﬁnition.
Definition 3.1. The increasing right-continuous function Γ : R+ → R+ given
by the formula
                    Γ (t) = − ln (1 − F (t)), ∀ t ∈ R+ ,
is called the hazard function of a random time τ.
                                       Modeling and Valuation of Credit Risk                  49

   If the distribution function F is an absolutely continuous function, i.e., if
we have
                                                t
                                  F (t) =           f (u) du
                                            0
for some function f : R+ → R+ , then we have
                                                                   t
                       F (t) = 1 − e−Γ (t) = 1 − e− 0 γ(u) du

where we set
                                              f (t)
                                  γ(t) =              .
                                            1 − F (t)

It∞is clear that γ : R+ → R is a non-negative function and it satisﬁes
  0 γ(u) du = ∞. The function γ is called the hazard rate or intensity of τ.
Sometimes, in order to emphasize relevance of the measure P the terminology
P-hazard rate and P-intensity is used.
     The next two results follow from Lemma 3.1 and Deﬁnition 3.1.

Corollary 3.1. For any G-measurable random variable Y we have

                 EP (11{τ >s} Y | Ht ) = 11{τ >t} eΓ (t) EP (11{τ >s} Y ).

Corollary 3.2. Let Y be H∞ -measurable, so that Y = h(τ ) for some function
h : R+ → R. If the hazard function Γ is continuous then
                                                               ∞
        EP (Y | Ht ) = 11{τ ≤t} h(τ ) + 11{τ >t}                   h(u)eΓ (t)−Γ (u) dΓ (u).
                                                           t

   If, in addition, the random time τ admits the hazard rate function γ then
we have
                                                           ∞                   u
       EP (Y | Ht ) = 11{τ ≤t} h(τ ) + 11{τ >t}                h(u)γ(u)e− t γ(v) dv du.
                                                       t

In particular, for any t ≤ s the last formula yields:
                                                                   s
                        P{τ > s | Ht } = 11{τ >t} e− t γ(v) dv

and                                                 s        
                 P{t < τ < s | Ht } = 11{τ >t} 1 − e− t γ(v) dv .


Associated Martingales

Two particular processes associated with a random time τ are martingales
with respect to the ﬁltration H. The ﬁrst result is general, that is, it holds for
an arbitrary (possibly discontinuous) hazard function Γ.
50     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Lemma 3.2. The process L given by the formula
                        1 − Ht
                Lt =             = 11{τ >t} eΓ (t) = (1 − Ht )eΓ (t)
                       1 − F (t)

is an H-martingale. Equivalently,

                                                    F (s) − F (t)
                   EP (Hs − Ht | Ht ) = 11{τ >t}                  .
                                                      1 − F (t)

   Notice that in the next result the hazard function Γ of τ is assumed to be
continuous.

Lemma 3.3. Assume that F (and thus also the hazard function Γ ) is a con-
tinuous function. Then the process

                                Mt = Ht − Γ (t ∧ τ )

is an H-martingale.

Change of a Probability Measure

Let P∗ be any probability measure on (Ω, H∞ ), which is equivalent to P.
Then there exists a Borel measurable function h : R+ → R+ such that the
Radon-Nikodým density of P∗ with respect to P equals

                                 dP∗
                         η∞ =        = h(τ ) > 0,      P-a.s.                    (4)
                                 dP
In particular, we have

                       EP (h(τ )) =           h(u) dF (u) = 1 .
                                      ]0,∞[

Obviously, we have P∗ {τ = 0} = 0 and P∗ {τ > t} > 0 for every t ∈ R+ . The
cumulative distribution function F ∗ of τ under P∗ is given by

          F ∗ (t) = P∗ {τ ≤ t} = EP (11{τ ≥t} h(τ )) =            h(u) dF (u).
                                                          ]0,t]

If the cumulative distribution function F (and thus F ∗ ) is continuous, then
from
                                         dF ∗ (t)
                             dΓ ∗ (t) =
                                        1 − F ∗ (t)
one deduces that
                       h(t)dF (t)        h(t) dF (t)     h(t)
         dΓ ∗ (t) =  ∞              =                 =      dΓ (t),
                     t
                        h(u) dF (u))   g(t)(1 − F (t))   g(t)
                                             Modeling and Valuation of Credit Risk       51

where we set
                                                                     ∞
             g(t) = eΓ (t) EP 11{τ >t} h(τ ) = eΓ (t)                      h(u) dF (u)
                                                                  t
                                     ∞
                  = eΓ (t)               h(u)e−Γ (u) dΓ (u).
                                 t

                             ∗
Proposition 3.1. Let P and P be two equivalent probability measures on
(Ω, H∞ ). Assume that the hazard function Γ of τ under P is continuous.
Then the hazard function Γ ∗ of τ under P∗ is also continuous and

                             dΓ ∗ (t) = (1 + κ(t)) dΓ (t),

where                      ∞
                  h(t)        h(u)e−Γ (u) dΓ (u) − h(t)e−Γ (t)
           κ(t) =      −1=− t   ∞                             .
                  g(t)                     −Γ (u) dΓ (u)
                                 t h(u)e
In particular, Γ ∗ is absolutely continuous if and only if Γ is, and the intensity
function of τ under P∗ equals γ ∗ (t) = (1 + κ(t))γ(t).

Radon-Nikodým Density Process

Let P and P∗ be equivalent probability measures on (Ω, H∞ ). We introduce
the non-negative P-martingale η by setting

                        dP∗
                 ηt =         = EP (η∞ | Ht ) = EP (h(τ ) | Ht ).
                        dP Ht
The process η is termed the Radon-Nikodým density process of P∗ with respect
to P (given the ﬁltration H). Notice that

               ηt = 11{τ ≤t} h(τ ) + 11{τ >t} eΓ (t)                   h(u) dF (u),
                                                               ]t,∞[

so that ηt = 11{τ ≤t} h(τ ) + 11{τ >t} g(t). It is not diﬃcult to check that

                        ηt = 1 +                    (h(u) − g(u)) dMu .                  (5)
                                            ]0,t]


Remarks. Representation (5) is a special case of a more general result.
Consider the martingale Mtχ = EP (χ(τ ) | Ht ) for some integrable function
χ : R+ → R, and denote
                                                      
                      g χ (t) = eΓ (t) EP 11{τ >t}χ(τ ) .

Then, setting χ̂ = χ − g χ and assuming that the cumulative distribution
function F is continuous, we have
52     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

                         Mtχ = M0χ +                 χ̂(u) dMu .                   (6)
                                             ]0,t]

   Taking care of the jump of the process η at time τ , one can also prove that
the process η solves the following SDE:

                         ηt = 1 +            ηu− κ(u) dMu .                        (7)
                                     ]0,t]

It is not diﬃcult to ﬁnd an explicit solution to this equation, speciﬁcally,
                                                          t∧τ              
              ηt = 1 + 11{τ ≤t} κ(τ )) exp −                      κ(u) dΓ (u) .    (8)
                                                        0

Note that equation (7) is a special case of equation (9) that appears in the
following version of a classical result.

Lemma 3.4. Let Y be a process of ﬁnite variation. Consider the linear SDE

                           Zt = 1 +               Zu− dYu .                        (9)
                                          ]0,t]

The unique solution Zt = Et (Y ), called the Doléans exponential of Y, equals
                                   
                    Et (Y ) = eYt       (1 + ∆Yu )e−∆Yu .
                                    0<u≤t

Equivalently, we have
                                      c      
                         Et (Y ) = eYt               (1 + ∆Yu )                   (10)
                                          0<u≤t

where Y c is the path-by-path continuous part of Y, that is,
                                       
                            Ytc = Yt −      ∆Yu .
                                             0<u≤t

    Since the process η satisﬁes (7), it is clear that it can be represented as
follows:                                           
                          ηt = Et         κ(u) dMu .
                                      ]0, · ]

Thus, expression (8) for the random variable ηt can also be obtained from
(10), upon setting dYu = κ(u) dMu . Notice also that equality (10) is merely
a special case of the general formula for the Doléans exponential. Proposition
3.1 is a very special case of Girsanov’s theorem (see, for instance, Elliott
(1982), Protter (2003), or Revuz and Yor (1999)). Equality (6) is in turn a
particular case of the predictable representation theorem (see Kusuoka (1999)
or Blanchet-Scalliet and Jeanblanc (2003)).
                                      Modeling and Valuation of Credit Risk    53

Martingale Hazard Function

In view of the martingale property established in Lemma 3.3, the following
deﬁnition is natural.
Definition 3.2. A function Λ : R+ → R is called a martingale hazard function
of a random time τ with respect to the ﬁltration H if and only if the process
Ht − Λ(t ∧ τ ) is an H-martingale.

Remarks. Since the bounded, increasing process4 H is constant after time
τ , its compensator is constant after τ as well. This explains why the function
Λ has to be evaluated at time t ∧ τ , rather than at time t.
It happens that the martingale hazard function can be found explicitly. In
fact, we have the following
Proposition 3.2. The unique martingale hazard function of τ with respect
to the ﬁltration H is the right-continuous increasing function Λ given by the
formula
                                 dF (u)              dP{τ ≤ u}
                Λ(t) =                    =                     .
                        ]0,t ] 1 − F (u−)   ]0,t ] 1 − P{τ < u}
    Observe that the martingale hazard function Λ is continuous if and only
if F is continuous. In this case, we have Λ(t) = − ln (1 − F (t)). We conclude
that the martingale hazard function Λ coincides with the hazard function Γ
if and only if F is a continuous function. In general, we have
                                        
                      e−Γ (t) = e−Λ (t)
                                   c
                                             (1 − ∆Λ(u)),
                                          0≤u≤t
                        
where Λc (t) = Λ(t) −       0≤u≤t ∆Λ(u) and ∆Λ(u) = Λ(u) − Λ(u−).


Defaultable Bonds: Deterministic Intensity

In order to value a defaultable claim, we need, of course, to specify the unit
in which we would like to express all prices. Formally, this is done through a
choice of a discount factor (a numeraire). For the sake of simplicity, we shall
take the savings account
                                 t
                          Bt = e 0 rv dv ,   ∀ t ∈ [0, T ∗ ],                 (11)

as the numeraire, where r is the short-term interest rate process. We also
postulate that some probability measure Q∗ is a martingale measure relative
to this numeraire. This assumption means, in particular, that the price of
any contingent claim Y which settles at time T is given as the conditional
expectation Bt EQ∗ (BT−1 Y | Gt ).
4
    The process H is thus a bounded H-submartingale.
54      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

    We shall now apply some results obtained earlier in this section, but using
a martingale measure Q∗ , rather than an unspeciﬁed probability measure P.
In accordance with our assumption that the reference ﬁltration is trivial, we
also assume that:
(i) the default time τ admits the Q∗ -intensity function γ(t),
(ii) the short-term interest rate r(t) is a deterministic function of time.
    In view of the latter assumption, the price at time t of a unit default-free
zero-coupon bond of maturity T equals
                                                    T
                                 B(t, T ) = e− t r(v) dv .

In the market practice, the interest rate (more precisely, the yield curve) can
be derived from the market price of the zero-coupon bond. In a similar way,
the hazard rate can be deduced from the prices of the corporate zero-coupon
bonds, or from market values of other actively traded credit derivatives.
    In view of our notation for defaultable claims adopted in Chapter 1, for
the corporate unit discount bond we have C ≡ 0 and X = L = 1. Recall that
(since the reference ﬁltration is assumed trivial) we have that G = H.
Zero Recovery. Consider ﬁrst a corporate zero-coupon bond with unit face
value, the maturity date T , and zero recovery at default (that is, X̃ = 0 and
Z ≡ 0). Formally, the bond can thus be identiﬁed with a claim of the form
11{τ >T } which settles at T . It is clear that a corporate bond with zero recovery
becomes worthless as soon as default occurs. Its time-t price is deﬁned as

                       D0 (t, T ) = Bt EQ∗ (BT−1 11{τ >T } |Ht ).

   Consequently, in view of the results of Section 3.1, the price D0 (t, T ) can
be represented as follows: D0 (t, T ) = 11{τ >t} D̃0 (t, T ), where D̃0 (t, T ) is the
bond’s pre-default value, and is given by the formula
                                 T                                 T
              D̃0 (t, T ) = e− t (r(v)+γ(v))dv = B(t, T )e− t γ(v)dv .

Fractional Recovery of Par Value (FRPV). According to this conven-
tion, we have X̃ = 0 and the recovery process Z satisfy Zt = δ for some
constant recovery rate δ ∈ [0, 1]. This means that under FRPV the bond-
holder receives at time of default a ﬁxed fraction of the bond’s par value.
    Using Corollary 3.2, it is easy to check that the pre-default value D̃δ (t, T )
of a unit corporate zero-coupon bond with FRPV equals
                                     T      u                     T
               D̃δ (t, T ) = δ           e− t r̃(v)dv γ(u) du + e− t r̃(v)dv ,
                                 t

where r̃ = r + γ is the default-risk-adjusted interest rate. Since the fraction
of the par value is received at the time of default, in the case of full recovery,
that is, for δ = 1, we do not obtain the equality D̃δ (t, T ) = B(t, T ), but rather
                                          Modeling and Valuation of Credit Risk   55

the inequality D̃δ (t, T ) > B(t, T ) (at least when the interest rate is strictly
positive, so that B(t, T ) < 1 for t < T ).
Fractional Recovery of Treasury Value (FRTV). Assume now that X̃ =
0 and that the recovery process equals Zt = δB(t, T ). This means that the
recovery payoﬀ at the time of default τ represent a fraction of the price of the
(equivalent) Treasury bond. The price of a corporate bond which is subject
to this recovery scheme equals
                                                                  
            St = B(t, T ) δ Q∗ {t < τ ≤ T | Ht } + Q∗ {τ > T | Ht } .

Let us denote by D̂δ (t, T ) the pre-default value of a unit corporate bond
subject to the FRTV scheme. Then
                               T              u                     T
           D̂δ (t, T ) =           δB(t, T )e− t γ(v)dv γ(u) du + e− t r̃(v)dv
                           t

or, equivalently,
                                         T           T       
            D̂δ (t, T ) = B(t, T ) δ 1 − e− t γ(v)dv + e− t γ(v)dv .

In the case of full recovery, that is, for δ = 1, we obtain D̂δ (t, T ) = B(t, T ),
as expected.
Remarks. Let us stress that similar representations can be derived also in the
case when the reference ﬁltration F is not trivial, and under the assumption
that market risk and credit risk are independent – that is:
(i) the default time admits the F-intensity process γ,
(ii) the interest rate process r is independent of the ﬁltration F.

3.2 Hazard Processes

In the previous section, it was assumed that the reference ﬁltration F carries
no information. However, for practical purposes it is important to study the
situation where the reference ﬁltration is not trivial. This section presents
some results to this eﬀect.
    We assume that a martingale measure Q∗ is given, and we shall examine
the valuation of defaultable contingent claims under this probability measure.
Note that the defaultable market is incomplete if there are no defaultable
assets traded in the market that are sensitive to the same default risk as the
defaultable contingent claim we wish to price. Thus, the martingale measure
may not be unique. Another important question is the relationship between
the actual probability and a martingale measure, that is, the speciﬁcation of
market prices for risk (see Duﬀee (1999) or Jarrow et al. (2002)). We shall
provide some discussion of the latter issue.
56      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Hazard Process of a Random Time
Let τ : Ω → R+ be a ﬁnite, non-negative random variable on a probability
space (Ω, G, P). Assume that Gt = Ft ∨ Ht for some reference ﬁltration F, so
that G = F ∨ H. We thus place ourselves here in a more general setting than
in Section 3.1.
    We start be extending some deﬁnitions and results to the present frame-
work. We denote Ft = P{τ ≤ t | Ft }, so that Gt = 1 − Ft = P{τ > t | Ft } is the
survival process with respect to F. It is easily seen that F is a bounded, non-
negative, F-submartingale. As a submartingale, this process admits a Doob-
Meyer decomposition as Ft = Zt + At where A is an F-predictable increasing
process. Assume, in addition, that Ft < 1 for every t ∈ R+ .
Definition 3.3. The F-hazard process Γ of a random time τ is deﬁned through
the equality 1 − Ft = e−Γt , that is, Γt = − ln Gt .
   Notice that the existence of Γ implies that τ is not an F-stopping time.
Indeed, if the event {τ > t} belongs to the σ-ﬁeld Ft for some t > 0 then
P{τ > t | Ft } = 11{τ >t} > 0 (P-almost surely), and thus τ = ∞.
                                                                   t
   If the hazard process is absolutely continuous, so that Γt = 0 γu du, for
some process γ, then γ is called the F-intensity of τ. Note that this is the case
only if the process Γ is increasing (and thus γ is always non-negative). Note
that if the reference ﬁltration F is trivial, then the hazard process Γ· is the
same as the hazard function Γ (·). In this case, if Γ is absolutely continuous,
then we have γt = γ(t).
Terminal Payoﬀ
The valuation of the terminal payoﬀ X d (T ) is based on the following gen-
eralization of Lemma 3.1, which ﬁrst appeared in Dellacherie (1972) (see
Page 122 therein). We return here to our original question: how to compute
EP (11{τ >s} Y | Gt ) for an Fs -measurable random variable Y ?
Lemma 3.5. For any G-measurable (integrable) random variable Y and arbi-
trary s ≥ t we have
                                                    EP (11{τ >s} Y | Ft )
                 EP (11{τ >s} Y | Gt ) = 11{τ >t}                         .
                                                      P{τ > t | Ft }
If, in addition, Y is Fs -measurable then
                  EP (11{τ >s} Y | Gt ) = 11{τ >t} EP (eΓt −Γs Y | Ft ).
Assume that Y is Gt -measurable. Then there exists an Ft -measurable random
variable Ỹ such that 11{τ >t} Y = 11{τ >t} Ỹ .
    The latter property can be extended to stochastic processes: for any G-
predictable process X there exists an F-predictable process X̃ such that the
equality 11{τ >t} Xt = 11{τ >t} X̃t is valid for every t ∈ R+ , that is, both processes
coincide on the random interval [0, τ [.
                                           Modeling and Valuation of Credit Risk         57

Recovery Process

The following extension of Corollary 3.2 appears to be useful in the valuation
of the recovery payoﬀ Zτ (recall that this payoﬀ occurs at time τ ).

Lemma 3.6. Assume that the hazard process Γ is a continuous, increasing
process, and let Z be a bounded, F-predictable process. Then for any t ≤ s we
have                                        s                    
           EP (Zτ 11 {t<τ ≤s} | Gt ) = 11{τ >t} EP           Zu eΓt −Γu dΓu Ft .
                                                         t

Promised Dividends

To value the promised dividends C that are paid prior to τ , it is convenient
to make use of the following result.

Lemma 3.7. Assume that the hazard process Γ is continuous. Let C be a
bounded, F-predictable process of ﬁnite variation. Then for every t ≤ s
                                                                                 
      EP               (1 − Hu ) dCu Gt = 11{τ >t} EP                 eΓt −Γu dCu Ft .
               ]t,s]                                          ]t,s]


Valuation of Defaultable Claims

From now on, we assume that τ is given on a ﬁltered probability space
(Ω, G, Q∗ ), where G = F ∨ H and Q∗ {τ > t | Ft } > 0 for every t ∈ R+ so
that the F-hazard process Γ of τ under Q∗ is well deﬁned. A default time τ
is thus a G-stopping time, but it is not an F-stopping time.
    The probability Q∗ is assumed to be a martingale measure relative to a
savings account process B, which is given by (11) for some F-progressively
measurable process r. In some sense, this probability, and thus also the F-
hazard process Γ of τ under Q∗ , are given by the market via calibration.
    The ex-dividend price St of a defaultable claim (X, C, X̃, Z, τ ) is given by
Deﬁnition 2.2, with P∗ substituted with Q∗ and F replaced by G. We postulate,
in particular, that the processes Z and C are F-predictable, and the random
variables X and X̃ are FT -measurable and GT -measurable, respectively.
    Using Lemmas 3.5–3.7 and the fact that the savings account process B is
F-adapted, it is easy to derive a convenient representation for the arbitrage
price of a defaultable claim in terms of the F-hazard process Γ .

Proposition 3.3. The value process of a defaultable claim (X, C, X̃, Z, τ ) ad-
mits the following representation for t < T
                                                                        
    St = 11{τ >t} G−1
                   t Bt EQ∗                    Bu−1 (Gu dCu − Zu dGu ) Ft +
                                      ]t,T ]
                                                                          
       + 11{τ >t} G−1
                   t Bt EQ∗        GT BT−1 X Ft + Bt EQ∗ BT−1 11{τ ≤T } X̃ Gt .
58      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

If the hazard process Γ is an increasing, continuous process, then
                                                                                   
     St = 11{τ >t} Bt EQ∗                     Bu−1 eΓt −Γu (dCu + Zu dΓu ) Ft
                                     ]t,T ]
                                                                      
        + 11{τ >t} Bt EQ∗ BT−1 eΓt −ΓT X Ft + Bt EQ∗ BT−1 11{τ ≤T } X̃ Gt .

Remarks. Note that we have both conditioning with respect to Ft and Gt
in the valuation formula. However, assuming that X̃ is FT -measurable, and
that any F-martingale is also a G-martingale (the ﬁnancial interpretation of
this condition is examined in some detail in Section 3.2), the value process of
(X, C, X̃, Z, τ ) can also be represented as follows, for t < T ,
                                                                                
     St = 11{τ >t} G−1
                    t Bt EQ∗                           Bu−1 (Gu dCu − Zu dGu ) Ft +
                                              ]t,T ]
                                                      −1     
        + 11{τ >t} G−1           −1
                    t Bt EQ∗ GT BT (X − X̃) Ft + Bt EQ∗ BT X̃ Ft .

Under the present assumptions, the hazard process Γ is always increasing (see
(H.3) in Section 3.2). If, in addition, Γ is continuous then we have
                                                                                   
      St = 11{τ >t} Bt EQ∗                    Bu−1 eΓt −Γu (dCu + Zu dΓu ) Ft
                                     ]t,T ]
                                                                   
         + 11{τ >t} Bt EQ BT−1 eΓt −ΓT (X − X̃) Ft + Bt EQ∗ BT−1 X̃ Ft .
                         ∗




     The second formula in Proposition 3.3 yields the following result.

Corollary 3.3. Assume that the F-hazard process Γ is a continuous, in-
creasing process. Then the value process of a defaultable contingent claim
(X, C, X̃, Z, τ ) coincides with the value process of a claim (X, Ĉ, X̃, 0, τ ),
                           t
where we set Ĉt = Ct + 0 Zu dΓu .

    Let us now consider the case when the default time admits a stochastic
intensity γ with respect to F. The valuation formula of Proposition 3.3 now
takes the following form (we set X̃ = 0 here)
                                                      u                               
          St = 11{τ >t} EQ∗                     e− t (rv +γv ) dv (dCu + γu Zu du) Ft
                                       ]t,T ]
                                        T                           
                                      −         (rv +γv ) dv
             + 11{τ >t} EQ∗ e             t                       X Ft .

To get a more concise representation for the last expression, we introduce the
default-risk-adjusted interest rate r̃ = r + γ and the associated default-risk-
adjusted savings account B̃, given by the formula
                                                           t         
                            B̃t = exp                           r̃u du = Bt eΓt .
                                                        0
                                                  Modeling and Valuation of Credit Risk             59

Although B̃t does not represent the price of a tradeable security, it has similar
features as the savings account B; in particular, B̃ is an F-adapted, continuous
process of ﬁnite variation. In terms of the default-risk-adjusted savings account
B̃, we obtain the following representation for the price S
                                                               T                              
    St = 11{τ >t} B̃t EQ∗                 B̃u−1 dCu +               B̃u−1 Zu γu du + B̃T−1 X Ft .
                                 ]t,T ]                     t

It is noteworthy that the default time τ does not appear explicitly in the
conditional expectation in the right-hand side of the last formula.

Alternative Recovery Rules

Now we will continue the study of a defaultable claim (X, C, X̃, Z, τ ). Similarly
as in the case of a corporate bond, the price of a generic defaultable claim
depends on the choice of a recovery scheme. Formally, each recovery scheme
corresponds to a speciﬁc choice of the recovery process Z.

Fractional Recovery of Par Value

We need to assume here that the par value (or the face value) of a defaultable
claim is well deﬁned. Denoting by L the constant representing the par value
of the claim, and by δ the recovery rate of the claim, we set Zt = δL. We
thus deal here with a defaultable claim of the form (X, C, X̃, δL, τ ). The ex-
dividend price of this claim equals (for X̃ = 0)
                                                                          
  St = Bt EQ∗                Bu−1 (1 − Hu ) dCu + δL dHu + BT−1 X11{τ >T } Gt .
                    ]t,T ]

Consequently, by virtue of Proposition 3.3, it can be represented as follows
                                                                                       
  St = 11{τ >t} G−1
                 t Bt EQ∗                         Bu−1 (Gu dCu − δL dGu ) + GT BT−1 X Ft ,
                                         ]t,T ]

where G is the survival process of τ with respect to the reference ﬁltration F.
In the case of a continuous and increasing F-hazard process Γ , the last formula
yields the following expression for the pre-default value D̃tδ
                                                                                     
       D̃tδ = 11{τ >t} B̃t EQ∗                      B̃u−1 (dCu + δL dΓu ) + B̃T−1 X Ft ,
                                           ]t,T ]


where B̃ is the default-risk-adjusted savings account. As already observed in
Corollary 3.3, if the F-hazard process Γ is a continuous, increasing process,
we may set Z ≡ 0 and substitute the promised dividends process C with the
process Ĉt = Ct + δLΓt . In the next result, the assumption that X̃ = 0 is not
needed.
60       T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Corollary 3.4. The claims (X, C, X̃, δL, τ ) and (X, C + δLΓ, X̃, 0, τ ) are es-
sentially equivalent if the F-hazard process Γ is a continuous, increasing pro-
cess.

   Assume now that the default time τ admits the F-intensity process γ. Then
we have
                                                                    T                           
     D̃tδ = 11{τ >t} B̃t EQ∗                B̃u−1 dCu + δL               B̃u−1 γu du + B̃T−1 X Ft .
                                   ]t,T ]                        t

If, in addition, the sample paths of the process C are absolutely continuous
                                   t
functions, so that we have Ct = 0 cu du, then
                                           T                                            
        D̃tδ = 11{τ >t} B̃t EQ∗                 B̃u−1 (cu + δLγu ) du + B̃T−1 X Ft
                                        t
                                           T                                         
             = 11{τ >t} B̃t EQ∗                 B̃u−1 (cu γu−1 + δL)γu du + B̃T−1 X Ft ,
                                        t

where the last equality holds, provided that γ > 0. We may choose here, with-
out loss of generality, F-predictable versions of processes c and γ. In view of
the considerations above, we are in a position to state the following corollary,
which furnishes still another equivalent representation of a defaultable claim
with fractional recovery of par value.
                                         t                   t
Corollary 3.5. Assume that Ct = 0 cu du and Γt = 0 γu du with γ > 0.
Then a defaultable claim (X, C, X̃, δL, τ ) is equivalent to a defaultable claim
(X, 0, X̃, Z̃, τ ) with the recovery process Z̃t = δL + ct γt−1 .

Fractional Recovery of No-Default Value

In case of a general defaultable claim, the counterpart of the fractional re-
covery of Treasury value scheme is more aptly termed the fractional recov-
ery of no-default value. In this scheme, it is assumed that the owner of a
defaultable claim receives at time of default a ﬁxed fraction of the market
value of an equivalent non-defaultable security. By deﬁnition, the no-default
value (also called the Treasury value by some authors) of a defaultable claim
(X, C, 0, Z, τ ) is equal to the expected discounted value of the promised divi-
dends C and the promised contingent claim X, speciﬁcally:
                                                                            
                     Ut = Bt EQ∗                         Bu−1 dCu + BT−1 X Gt .
                                                [t,T ]

Notice that U includes also the dividends paid at time t. When valuing a de-
faultable claim (X, C, 0, Z, τ ) with the fractional recovery of no-default value,
we set Zt = δUt . Put more explicitly, the ex-dividend price equals St = It1 +It2 ,
where
                                              Modeling and Valuation of Credit Risk       61
                                                                            
                   It1 = Bt EQ∗                      Bu−1 (1 − Hu ) dCu Gt
                                            ]t,T ]

and                                                                     
            It2 = Bt EQ∗                Bu−1 δUu dHu + BT−1 X11{τ >T } Gt .
                               ]t,T ]

The following result yields a convenient representation for S.
Proposition 3.4. For any t < T , the   ex-dividend price  of a defaultable claim
(X, C, 0, δU, τ ) equals St = 11{τ >t} (1 − δ)D̃t0 + δ Ũt , where the process D̃t0 ,
which equals
                                                                      
            D̃t0 = G−1
                     t  B t EQ ∗       B −1
                                         u  Gu dC  u + G  T BT
                                                              −1
                                                                 X F t   ,
                                        ]t,T ]

represents the pre-default value of a defaultable claim (X, C, 0, 0, τ ) with zero
recovery, and the process Ũt is given by the following expression:
                                                           
                 Ũt = Bt EQ∗         Bu−1 dCu + BT−1 X Ft .
                                            ]t,T ]

Fractional Recovery of Pre-Default Value
Under the fractional recovery of pre-default value (also known as the fractional
recovery of market value) scheme, the owner of a defaultable claim receives
at time of default a fraction of its pre-default (market) value. Formally, this
corresponds to an assumption that the recovery process satisﬁes Zt = δt St− ,
where δ is a given F-predictable process taking values in [0, 1], and St is the
value of a claim at time t. We shall consider claims of the form (X, 0, 0, Z, τ ),
where Zt = δt St− . Using the deﬁnition of the ex-dividend price, we obtain the
following equation for S
                                                                   
           St = Bt EQ∗ Bτ−1 δτ Sτ − 11{t<τ ≤T } + BT−1 X11{τ >T } Gt ,      (12)

which can be interpreted as a backward stochastic diﬀerential equation
(BSDE).
     Assume that the BSDE (12) admits a unique solution, so that the price
process S is well deﬁned. Since G = F ∨ H, it is clear that we have St =
11{τ >t} S̃t for some F-adapted process S̃. Obviously, we may thus substitute
St− with S̃t− in (12), and thus we also have
                                                T                                  
            St = 11{τ >t} B̃t EQ∗                    B̃u−1 δu S̃u γu du + B̃T−1 X Ft ,
                                             t

provided that τ has the F-intensity γ. We conclude that the pre-default value
process S̃ necessarily satisﬁes the following BSDE:
                                       T                                  
                S̃t = B̃t EQ∗               B̃u−1 δu S̃u γu du + B̃T−1 X Ft .            (13)
                                    t
62     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Proposition 3.5. Assume that equations (12)-(13) admit unique solutions S
and S̃. Then the process S̃ is given by the formula
                            S̃t = B̂t EQ∗ (B̂T−1 X | Ft )
with
                                         t                            
                      B̂t = exp               (ru + (1 − δu )γu ) du
                                      0
and the value of a defaultable claim, which is subject to the fractional recovery
of pre-default value with Zt = δt St− , is equal to St = 11{τ >t}S̃t .

Remarks. Existence and uniqueness of solutions to (12)-(13) may sometimes
be deduced from general results on BSDEs (for instance when F is the Brow-
nian ﬁltration and τ is obtained through the canonical construction presented
in Section 3.2). We do not go into details here.
General Recovery of Pre-Default Value
A more general recovery scheme is produced by postulating that the recovery
process Z is deﬁned through the equality Zt = p(t, St− ), where the recovery
function p(t, s) is jointly continuous with respect to the variables (t, s) ∈
[0, T ] × R, and Lipschitz continuous with respect to s. Moreover, it is natural
to postulate that p(t, 0) = 0 for every t ∈ [0, T ].
    Assume that S is the unique solution to the BSDE:
                                                                      
           St = Bt EQ∗ Bτ−1 p(τ, Sτ − )11{t<τ ≤T } + BT−1 X11{τ >T } Gt ,   (14)
or equivalently, to the equation
                      T                                       
           St = EQ∗        p(u, Su )hu − ru Su du + X11{τ >T } Gt .
                        t

Also, assume that S̃ is the unique solution to the BSDE
                            T                                     
             S̃t = B̃t EQ∗      B̃u−1 p(u, S̃u )γu du + B̃T−1 X Ft          (15)
                              t
or, equivalently, to the equation
                      T                                        
           S̃t = EQ∗        p(u, S̃u )γu − (ru + γu )S̃u du + X Ft .
                        t

The following result shows that the solution S̃ to the BSDE represents the
pre-default value of a defaultable claim, which is subject to a recovery at
default with the recovery process of the feedback form Zt = p(t, St− ).
Proposition 3.6. Let the default time τ have the F-intensity γ. Assume that
equations (14)-(15) admit unique solutions S and S̃. Then St = 11{τ >t} S̃t .
Remarks. We conclude this section by mentioning that Bélanger et al. (2001)
derive several interesting relationships between values of defaultable claims
that are subject to alternative recovery schemes.
                                       Modeling and Valuation of Credit Risk       63

Defaultable Bonds: Stochastic Intensity

Consider a defaultable zero-coupon bond with the par (face) value L and
maturity date T. First, we shall re-examine the following recovery schemes:
the fractional recovery of par value and the fractional recovery of Treasury
value (recall that these schemes were already studied in Section 3.1 in the case
of deterministic intensity). Subsequently, we shall deal with the fractional
recovery of pre-default value. In this section, we assume that τ has the F-
intensity γ.

Fractional Recovery of Par Value

Under this scheme, a ﬁxed fraction of the face value of the bond is paid
to the bondholders at the time of default. Formally, we deal here with a
defaultable claim (X, 0, 0, Z, τ ), which settles at time T , with the promised
payoﬀ X = L, where L stands for the bond’s face value, and with the recovery
process Z = δL, where δ ∈ [0, 1] is a constant. The value at time t < T of the
bond is given by the expression
                                                                
              St = LBt EQ∗ δBτ−1 11{t<τ ≤T } + BT−1 11{τ >T } Gt .

If τ admits the F-intensity γ, the pre-default value of the bond equals
                                                  T                         
              D̃δ (t, T ) = LB̃t EQ∗ δ                 B̃u−1 γu du + B̃T−1 Ft .   (16)
                                               t

Remarks. The above setup is a special case of the fractional recovery of par
value scheme with a general F-predictable recovery process Zt = δt , where the
process δt satisﬁes δt ∈ [0, 1] for every t ∈ [0, T ]. A general version of formula
(16) reads
                                              T                            
              D̃δ (t, T ) = LB̃t EQ∗               B̃u−1 δu γu du + B̃T−1 Ft .
                                           t

Fractional Recovery of Treasury Value

Here, in the case of default, the ﬁxed fraction of the face value is paid to bond-
holders at maturity date T . A corporate zero-coupon bond is now represented
by a defaultable claim (X, 0, 0, Z, τ ) with the promised payoﬀ X = L and the
recovery process Zt = δLB(t, T ). As usual, B(t, T ) stands for the price at
time t of a unit zero-coupon Treasury bond with maturity T. The corporate
bond is now equivalent to a single contingent claim Y, which settles at time
T and equals                                         
                          Y = L 11{τ >T } + δ11{τ ≤T } .
The price of this claim at time t < T equals
                                                             
                St = LBt EQ∗ BT−1 (δ11{τ ≤T } + 11{τ >T } ) Gt ,
64     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

or, equivalently,
                                                                   
          St = LBt EQ∗ δBτ−1 B(τ, T )11{t<τ ≤T } + BT−1 11{τ >T } Gt .

The pre-default value D̂δ (t, T ) of a defaultable bond with the fractional re-
covery of Treasury value equals
                                        T                                 
          D̂δ (t, T ) = LB̃t EQ∗ δ           B̃u−1 B(u, T )γu du + B̃T−1 Ft .
                                     t

Again, the last formula is a special case of the general situation where Zt = δt ,
with some predictable recovery ratio process δt ∈ [0, 1).

Fractional Recovery of Pre-Default Value

Assume that δt is some predictable recovery ratio process δt ∈ [0, 1) and let
us set X = L. By virtue of Proposition 3.5, we conclude that the pre-default
value of the bond equals
                                   T                       
                DMδ
                    (t, T ) = LEQ∗ e− t (ru +(1−δt )γu )du Ft .

Choice of a Recovery Scheme

A challenging practical problem is the calibration of statistical properties of
both the recovery process δ and the intensity process γ. According to a re-
cent study by Guha (2003), the empirical evidence strongly suggests that the
amount recovered at default is best modeled by the recovery of par value
scheme. However, Bakshi et al. (2001) conclude that recovery concept that
speciﬁes the amount recovered as a fraction of appropriately discounted par
value, that is, the fractional recovery of Treasury value, has broader empirical
support.

Martingale Hazard Process

We now brieﬂy discuss the relationship between the hazard process of a ran-
dom time, and the so-called F-martingale hazard process of a random time,
which is of interest in the martingale approach to credit risk modeling. The
next result is valid for any F-hazard process Γ.
Lemma 3.8.      The process

                    Lt = 11{τ >t}eΓt = (1 − Ht )eΓt ,      ∀ t ∈ R+ ,

is a G-martingale.
    If the F-hazard process Γ of τ is continuous and of ﬁnite variation (hence,
increasing), then it deﬁnes the compensator of the jump process H, as the
following result shows.
                                  Modeling and Valuation of Credit Risk    65

Proposition 3.7. Let the F-hazard process Γ of τ be a continuous, increasing
process. Then the process Mt = Ht − Γt∧τ , t ∈ R+ , is a G-martingale.

   The last result suggests the following deﬁnition.

Definition 3.4. An F-predictable, right-continuous and increasing process Λ
(with Λ0 = 0) is called an F-martingale hazard process of a random time τ if
and only if the process Ht − Λt∧τ is a G-martingale.

   In the martingale approach, the F-martingale hazard process Λ is used,
rather than the F-hazard process Γ . An important issue thus arises: provide
suﬃcient conditions for the equality Λ = Γ.

Properties of Λ

Condition (G). The process Ft = Q∗ {τ ≤ t | Ft } admits a modiﬁcation with
increasing sample paths (thus Γ is increasing as well).

Proposition 3.8. Assume that (G) holds. If the process Λ

                               dFu               dQ∗ {τ ≤ u | Fu }
               Λt =                  =               ∗
                      ]0,t ] 1 − Fu−     ]0,t ] 1 − Q {τ < u | Fu }

is F-predictable, then Λ is the F-martingale hazard process of the random time
τ. If we additionally assume that the ﬁltration F supports only continuous
martingales, and if the F-martingale hazard process Λ is continuous, then the
F-hazard process Γ is also continuous, and we have Γ = Λ.

   If (G) fails to hold, we have the following more general result.

Proposition 3.9. The F-martingale hazard process of τ equals

                                             dF̂u
                             Λt =
                                    ]0,t ] 1 − Fu−


where F̂ denotes the F-compensator of the F-submartingale F ; that is, the
unique F-predictable, increasing process, such that F − F̂ is an F-martingale.

   A counter-example given in Elliott et al. (2000) shows that if condition
(G) is not assumed, the continuity of processes Γ and Λ is not suﬃcient for
the equality Γ = Λ to hold.

Martingale Hypothesis

The valuation results for defaultable claims, established in Sections 3.2–3.2,
are valid when G = F ∨ H for some reference ﬁltration F. Note that the choice
of F is basically unrestricted. The only assumption which is always imposed
66     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

is that Gt = Q∗ {τ > t | Ft } > 0 for every t ∈ R+ . As already mentioned, this
condition implies that τ is not an F-stopping time.
Remarks. Note that if we consider only defaultable claims that settle prior
to or at some ﬁxed date T , it is enough to assume the strict positivity of
the survival process Gt for t ∈ [0, T ]. Under this assumption, τ is not an
F-stopping time, unless the inequality τ ≥ T holds Q∗ -almost surely.
    Typically, a reference ﬁltration F represents the information ﬂow in a
model of a ﬁnancial market without default. It is thus essential to ensure
that the Brownian motion (or, more generally, an F-martingale) with respect
to F remains a Brownian motion with respect to G (a G- martingale). We shall
now introduce suitable assumptions related to the conditional independence
of the two ﬁltrations F and H.
(H.1) For any t ∈ R+ , the σ-ﬁelds F∞ and Gt are conditionally independent
given Ft . Equivalently, for any t ∈ R+ and any bounded, F∞ -measurable
random variable ξ we have: EQ∗ (ξ Gt ) = EQ∗ (ξ Ft ).
(H.2) For any t ∈ R+ , the σ-ﬁelds F∞ and Ht are conditionally independent
given Ft .
(H.3) For any t ∈ R+ and any u ≤ t, we have

                      Q∗ {τ ≤ u | Ft } = Q∗ {τ ≤ u | F∞ }.

    It is known that condition (H.2) (as well as (H.3)) is equivalent to (H.1).
We shall thus refer to them collectively as hypotheses (H).
    The next deﬁnition describes a speciﬁc link between the two ﬁltrations, F
and G, under a given probability measure Q∗ . It should be stressed that the
martingale invariance property introduced in this deﬁnition is not preserved,
in general, under an equivalent change of a probability measure (for a counter-
example, see Section 3.2).

Definition 3.5. We say that a ﬁltration F has the martingale invariance prop-
erty with respect to a ﬁltration G if every F-martingale is also a G-martingale.

  Hypothesis (H.1) (or, equivalently, (H.2) or (H.3)) is equivalent to the
martingale invariance property of F with respect to G.

Lemma 3.9. A ﬁltration F has the martingale invariance property with re-
spect to a ﬁltration G if and only if condition (H.1) is satisﬁed.

Financial Interpretation

We stated above that the martingale invariance property is essential. We shall
argue that there are good reasons for this claim:
                                  Modeling and Valuation of Credit Risk      67

•   First, the martingale invariance property ensures the compatibility of
    default-free and defaultable market models. Let us call the ﬁnancial mar-
    ket that encompasses both default-free and defaultable securities – the full
    market. The relevant information for this market is carried by the full ﬁl-
    tration G. Suppose that for the default-free sub-market, the one that only
    admits non-defaultable securities, the relevant information is carried by
    the reference ﬁltration F. Thus, properly discounted prices of default-free
    securities should naturally be F-martingales. However, these prices should
    also be relevant for the full market, and so they should be G-martingales
    as well. Thus, from the arbitrage pricing point of view, the martingale
    invariance hypothesis is indeed a very natural requirement.
•   Second, there is an obvious computational advantage of models in which
    the hypotheses (H) hold. This comes from the fact that conditioning with
    respect to the larger σ-ﬁelds can be replaced with conditioning with respect
    to smaller σ-ﬁelds. Frequently, the (smaller) ﬁltration F is a Markovian
    ﬁltration (i.e., it is generated by some Markov process), which allows for
    utilizing Markovian properties.
Remarks. (i) In the next section, we shall present the so-called canonical con-
struction of a full market, for which the martingale hypothesis is satisﬁed. It
should be acknowledged that the construction presented is the next section is
only the most basic example of a construction of a default time. More sophisti-
cated variants and non-trivial extensions of this construction will be presented
later, speciﬁcally, in Section 4.2 (conditionally independent defaults), Section
4.3 (copula-based approach), Section 4.4 (dependent intensities), and Section
4.8 (conditionally Markov credit migrations). To conclude, in most existing
reduced-form models of credit risk a certain form of hypotheses (H) is satis-
ﬁed, at least for a judicious choice of a probability measure and a reference
ﬁltration.
(ii) It should be made clear that in some models the reference ﬁltration F
carries full information about credit events, including default events. These,
typically, are models where credit events are given in terms of some factor
processes. For example, a structural model with a constant default barrier
is such a model. In these models, we manifestly have that G = F in which
case the hypotheses (H) are trivially satisﬁed (but τ is typically an F-stopping
time, and thus the F-hazard process is not well deﬁned).

Canonical Construction

A random time obtained through the canonical construction has certain spe-
ciﬁc features that are not necessarily shared by all random times with a given
F-hazard process Γ.
    Assume that we are given an F-adapted, right-continuous, increasing pro-
cess Γ deﬁned on a probability space (Ω̃, F, P∗ ) such that Γ0 = 0 and
Γ∞ = +∞. To construct a random time τ such that Γ is the F-hazard process
68        T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

of τ, we enlarge the underlying probability space Ω̃. This means that Γ will
be the F-hazard process of τ under a certain extension Q∗ of P∗ .
    Let ξ be a random variable, deﬁned on some probability space (Ω̂, F̂ , Q̂),
and uniformly distributed on the interval [0, 1] under Q̂. We consider the
product space Ω = Ω̃ × Ω̂ with the σ-ﬁeld G = F∞ ⊗ F̂ and the probability
measure Q∗ = P∗ ⊗ Q̂. The latter equality means that for any events A ∈ F∞
and B ∈ F̂ we have Q∗ (A × B) = P∗ (A)Q̂(B).
    Deﬁne the random time τ : Ω → R+ by setting

     τ (ω̃, ω̂) = inf { t ∈ R+ : e−Γt (ω̃) ≤ ξ(ω̂) } = inf { t ∈ R+ : Γt (ω̃) ≥ θ(ω̂) },

where the random variable θ = − ln ξ has a unit exponential law under Q∗ .
Let us ﬁnd the conditional survival process

                                  Gt = Q∗ {τ > t | Ft }.

Since {τ > t} = {ξ < e−Γt } and Γt is F∞ -measurable, we obtain

         Q∗ {τ > t | F∞ } = Q∗ {ξ < e−Γt | F∞ } = Q̂{ξ < ex }x=Γt = e−Γt .

Consequently, we have
                                                           
             Gt = Q∗ {τ > t | Ft } = EQ∗ Q∗ {τ > t | F∞ } Ft = e−Γt ,

and thus G is an F-adapted, right-continuous, and decreasing process. Thus
Γ is the F-hazard process of τ under Q∗ . In addition, we obtain the following
property of the canonical construction:

                           Q∗ {τ ≤ t | F∞ } = Q∗ {τ ≤ t | Ft }.

Consequently, for any two dates 0 ≤ u ≤ t

           Q∗ {τ ≤ u | F∞ } = Q∗ {τ ≤ u | Ft } = Q∗ {τ ≤ u | Fu } = e−Γu .

The latter equality shows the conditional independence under Q∗ of the σ-
ﬁelds Ht and Ft , given F∞ . It is clear that (H.3), and thus also (H.1)-(H.2),
hold. This concludes our analysis of the canonical construction of τ.
    Let us observe that in fact working under (H.1) is essentially equivalent
to the canonical construction. Recall that (H.1) is equivalent to (H.3), which
reads: for any t ∈ R+ and any u ≤ t we have

                          Q∗ {τ ≤ u | Ft } = Q∗ {τ ≤ u | F∞ }.                        (17)

Suppose that we are given a ﬁltered probability space (Ω, G, Q∗ ), and τ is an
G-stopping time such that for a certain subﬁltration F ⊂ G we have

                         Q∗ {τ > t | F∞ } = e−Γt ,      ∀ t ∈ R+ ,                    (18)
                                      Modeling and Valuation of Credit Risk   69

for some F-adapted, continuous, strictly increasing process Γ . Then there
exists a random variable θ : Ω → R+ , with exponential law under Q∗ , which
is independent of the σ-ﬁeld F∞ and such that

                       τ (ω) = inf { t ∈ R+ : Γt (ω) ≥ θ(ω) }.

To establish this property, it is enough to set θ = Γτ . Indeed, we then have

                         {θ > t} = {Γτ > t} = {τ > At },

where A = Γ −1 is the inverse of Γ, so that ΓAt = t for every t ∈ R+ . In view
of (18) and the fact that At is F∞ -measurable, we obtain for every t ∈ R+

              Q∗ {θ > t | F∞ } = Q∗ {τ > At | F∞ } = e−ΓAt = e−t ,

as expected. Finally, it is clear that

              τ = inf { t ∈ R+ : Γt ≥ Γτ } = inf { t ∈ R+ : Γt ≥ θ }.

Remarks. It is worthwhile to observe that Q∗ {τ > t | F∞ } is deterministic if
and only if the default time is independent of F∞ . In this case, we have

                 Q∗ {τ > t | F∞ } = Q∗ {τ > t | Ft } = Q∗ {τ > t}.

Kusuoka’s Counter-Example

We shall now present a counter-example, due to Kusuoka (1999), which shows
that the martingale invariance property introduced in Deﬁnition 3.5 is not
necessarily preserved, in general, under an equivalent change of a probability
measure.
   First, we postulate that under the original probability measure Q the ran-
dom times τ1 , τ2 are independent random variables, with exponential laws with
parameters λ1 and λ2 , respectively. Next, for a ﬁxed T > 0, we introduce an
equivalent probability measure Q∗ on (Ω, G) by setting

                                   dQ∗
                                       = ηT        Q-a.s.
                                   dQ

where ηt , t ∈ [0, T ], satisﬁes
                                     2
                                     
                          ηt = 1 +                 ηu− κiu dMui ,
                                     i=1   ]0,t]


with
                                                  t∧τi
                              Mti = Hti −                λi du,
                                              0
70     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

where Hti = 11{τi ≤t} , and the auxiliary processes κ1 and κ2 satisfy
                              α                       α     
                                1                         2
              κ1t = 11{τ2 <t}     − 1 , κ2t = 11{τ1 <t}     −1 .
                               λ1                        λ2

Note that the process κ1 (κ2 , resp.) is H2 -predictable (H1 -predictable, resp.),
where Hi is the ﬁltration generated by H i . It is easily seen that
                                      t∧τi
                          Hti −              λi∗
                                              u du, i = 1, 2,
                                  0

are H1 ∨ H2 -martingales, where

             λ∗1           2         2
              t = λ1 (1 − Ht ) + α1 Ht = λ1 11{τ2 >t} + α1 11{τ2 ≤t} ,

and
             λ∗2           1         1
              t = λ2 (1 − Ht ) + α2 Ht = λ2 11{τ1 >t} + α2 11{τ1 ≤t} .

This means that the H2 -martingale intensity λ∗1 of default time τ1 under Q∗
jumps from λ1 to α1 after τ2 . The second default time has an analogous
property. It can be checked by straightforward calculations that we have
                                                            1∗   1∗
             Q∗ {τ1 > s | Ht1 ∨ Ht2 } = 11{τ1 >t} EQ∗ (eΛt −Λs | Ht2 ).

Let G = H1 ∨ H2 and let F = H2 play the role of the reference ﬁltration. The
martingale invariance property of F with respect to G under Q∗ is equivalent
                                                 2
to the following statement: for any bounded, H∞    -measurable random variable
                           1     2              2
ξ, the equality EQ (ξ | Ht ∨ Ht ) = EQ (ξ | Ht ) is satisﬁed for every t ∈ R+
                     ∗                   ∗

(see condition (H.1)).
    It is possible to check by direct calculations, that the last condition fails
to hold in Kusuoka’s example under Q∗ (although, obviously, this condition is
satisﬁed under Q in view of the assumed independence of τ1 and τ2 under Q).
This example is closely related to the valuation of basket credit derivatives,
e.g., the ﬁrst-to-default claims (see Chapter 4).

Change of a Probability

Until now, we have worked under a martingale measure Q∗ , which was associ-
ated with the choice of the savings account as a numeraire. We shall now relate
Q∗ to the statistical (or real-world) probability that will be denoted by Q in
what follows. Since at this stage we do not impose any speciﬁc restrictions on
the choice of Q, we adopt the following deﬁnition.

Definition 3.6. For a ﬁxed horizon date T ∗ > 0, the statistical probability Q
is an arbitrary probability measure on (Ω, GT ∗ ) equivalent to Q∗ .
                                        Modeling and Valuation of Credit Risk              71

   We denote by η̂ the Radon-Nikodým density process of Q with respect to
Q∗ and the ﬁltration G, so that
                          dQ
                  η̂t =          = EQ∗ (η̂T ∗ | Gt ),       ∀ t ∈ [0, T ∗ ].              (19)
                          dQ∗ Gt
Of course, the process η = 1/η̂ represents the density of Q∗ with respect to
Q, that is,
                            dQ∗          1
                      ηt =          = , ∀ t ∈ [0, T ∗ ].
                            dQ Gt       η̂t
    Let us ﬁrst consider the following general question: how does the hazard
process behave under an equivalent change of a probability measure?
    To examine this question, let us consider an arbitrary equivalent change
of a probability measure on (Ω, GT ∗ ). To be more speciﬁc, we postulate that
a probability measure Q̃ is given by
                          dQ̃
                  η̃t =          = EQ∗ (η̃T ∗ | Gt ),       ∀ t ∈ [0, T ∗ ].
                          dQ∗ Gt
Let us deﬁne
                G̃t = 1 − F̃t = 1 − Q̃{τ ≤ t | Ft } = Q̃{τ > t | Ft }
and let us set Γ̃t = − ln G̃t (provided, of course, that G̃t > 0). Notice that the
Bayes rule combined with the tower rule for conditional expectations yields
(we use the property Ft ⊂ Gt )
                                EQ∗ (η̃T ∗ 11{τ >t} | Ft )   EQ∗ (η̃t 11{τ >t} | Ft )
      G̃t = Q̃{τ > t | Ft } =                              =                          .
                                   EQ∗ (η̃T ∗ | Ft )           EQ∗ (η̃t | Ft )

Lemma 3.10. If the density process η̃ is F-adapted then we have Γ̃t = Γt . In
general, the density process η̃ is G-adapted and we have
                                      EQ∗ (η̃t 11{τ >t} | Ft )
                              G̃t =                            .                          (20)
                                        EQ∗ (η̃t | Ft )

The F-hazard process Γ̃ of τ under Q exists if and only if F-hazard process Γ
of τ under Q∗ is well deﬁned. In other words, G̃t > 0 for every t ∈ R+ if and
only if Gt > 0 for every t ∈ R+ .
      To check the last statement, observe that, by virtue of Lemma 3.5, we have
η̃t 11{τ >t} = ξ̃t 11{τ >t} for some Ft -measurable random variable ξ̃t . Since η̃t is
strictly positive, it is clear that ξ̃t has this property as well. Thus
                          EQ∗ (ξ˜t 11{τ >t} | Ft )      ξ̃t Gt
                  G̃t =                            =                > 0.
                            EQ (η̃t | Ft )
                                 ∗                   EQ (η̃t | Ft )
                                                       ∗



Although Lemma 3.10 is too general to yield a suﬃciently explicit expressions
for practical purposes, it will nevertheless prove useful in what follows.
72      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Statistical Probability

To get more explicit representations for the hazard process under a statisti-
cal probability (or, more generally, under an arbitrary equivalent probability
measure), which generalize some results of Section 3.1, we shall work from
now on under the following assumptions:
(M.1) Reference filtration. We have G = F ∨ H, where the reference ﬁl-
tration F is generated by some Brownian motion W ∗ .
(M.2) Martingale invariance. A Brownian motion W ∗ is also a martingale
(and thus a Brownian motion) with respect to G under Q∗ .
(M.3) Regularity of the hazard process. We assume that the hazard
process Γ of τ under Q∗ is a continuous, increasing process.
    The subsequent auxiliary result is an immediate consequence of a suitable
version of the predictable representation theorem (see, for instance, Corollary
5.2.4 in Bielecki and Rutkowski (2002)).
Proposition 3.10. Assume that (M.1)-(M.3) hold. Then the density process
η̂ of the statistical probability Q with respect to Q∗ admits the following integral
representation
                                                  t                      t
                            η̂t = 1 +                 ξu dWu∗ +              ζu dMu ,
                                              0                      0
where Mt = Ht − Γt∧τ is a (purely discontinuous) G-martingale under Q∗ .
   Since the density process η̂ deﬁned by (19) is strictly positive, its dynamics
can also be put in the form of a SDE:
                                      t                                  t
                   η̂t = 1 −              η̂u− βu dWu∗ +                     η̂u− κu dMu ,                      (21)
                                  0                                  0

where β and κ > −1 are some G-predictable processes. It is well known that
SDE (21) has a unique solution η̂, which is given by the explicit formula (cf.
Section 3.1)
                            ·                         
                η̂t = Et −     βu dWu∗ Et         κu dMu ,
                                          0                           ]0, · ]

where the ﬁrst term is the classic Doléans exponential
                     ·                                      t
                                                                                   1        t               
          Et −            βu dWu∗ = exp −                          βu dWu∗ −                    |βu |2 du
                  0                                        0                       2    0

and the second term is given by Lemma 3.4. We are in the position to state
a version of Girsanov’s theorem.
Proposition 3.11. Let the statistical probability Q be a probability measure
on (Ω, GT ∗ ) equivalent to Q∗ . Assume that the Radon-Nikodým density η̂ of
Q with respect to Q∗ satisﬁes SDE (21). Then the process
                                        Modeling and Valuation of Credit Risk     73
                                            t
                     Wt = Wt∗ +                 βu du,   ∀ t ∈ [0, T ∗ ],        (22)
                                        0

is a Brownian motion with respect to G under Q, and the process M̂ given by
the formula
                                  t∧τ
                M̂t = Ht −              (1 + κu ) dΓu ,       ∀ t ∈ [0, T ∗ ],   (23)
                              0

is a G-martingale under Q.

   We assume from now on that the two processes intervening in the Radon-
Nikodým density, β and κ, are F-predictable. Let us emphasize that this as-
sumption is essential for the next result to be valid.
                                    t
Corollary 3.6. The process Γ̂t = 0 (1 + κu ) dΓu is the F-hazard process of τ
under the statistical probability Q. In particular, if τ admits the F-intensity γ
under Q∗ then the F-intensity of τ under Q equals γ̂t = (1 + κt )γt .

    Assume, for instance, that the process β is F-predictable and κ = 0. Then,
of course, we have Γ̂ = Γ so that the hazard processes of τ under Q and under
Q∗ coincide. Under these assumptions, the solution to (21) is manifestly F-
adapted, and thus the equality Γ̂ = Γ is also an immediate consequence of
Lemma 3.10.

Financial Interpretation

The ﬁnancial interpretation of the processes β and κ is not straightforward.
Since the default intensity is frequently modeled as an Itô process with re-
spect to the ﬁltration F generated by some Brownian motion, the impact of
the equivalent change of the underlying probability measure on the intensity
process γ is twofold. First, γ can be modiﬁed through a multiplication by
some strictly positive process 1 + κ. Second, even for the special case when
κ = 0, we still observe an important eﬀect of changing the drift in dynamics
of γ. Indeed, if under Q∗ the intensity γ satisﬁes

                             dγt = µt dt + σt dWt∗

then under Q we have

                        dγt = (µt + βt σt ) dt + σt dWt .

Therefore, the choice of the process β does really matter not only for the
real-world dynamics of default-free securities, but also, in general, for the
real-world dynamics of the default intensity process γ. Put another way, for
κ = 0 the real-world probability of default depends on the risk-neutral default
intensity and on the choice of the process β. Indeed, the equality Γ̃ = Γ does
74     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

not mean that the default probabilities are the same under Q and Q∗ . We
only have for s ≥ t (see Lemma 3.5)

                    Q{τ > s | Gt } = 11{τ >t} EQ (eΓt −Γs | Ft )

and
                  Q∗ {τ > s | Gt } = 11{τ >t} EQ∗ (eΓt −Γs | Ft ).
It thus seems justiﬁed to adopt the following terminological convention:
• The process β is called the premium for the market risk.
• The process κ is called the premium for the event risk.
The term market risk encompasses, for instance, the interest rate risk of Trea-
sury bonds, as well as the part of default risk associated with the variations
of Treasury yields. The event risk represents that portion of the default risk,
which is associated with other factors than the overall market risk. A prac-
tically interesting and theoretically challenging issue is whether the equality
κ = 0 is compatible with the observed yields on corporate bonds (for econo-
metric studies, see Duﬀee (1999)), and whether it can be explained by pos-
tulating some form of diversiﬁcation of default risk (see Jarrow et al. (2002)
in this regard). In a recent work by Brigo and Alfonsi (2003), the authors an-
alyze the calibration procedure of a particular example of an intensity-based
model. Since we are not in the position to present these papers here, the in-
terested reader is referred to original works for further results and a thorough
discussion of the above-mentioned issues.

Change of a Numeraire

A judicious choice of a numeraire asset is well known to be a very eﬃcient
tool in arbitrage pricing of derivative securities of various kinds (see, for in-
stance, Geman et al. (1995)). Until now, we have invariably used the savings
account, with the price process B, as a numeraire. As one might guess, from
the practical viewpoint this choice is rarely the most convenient one, and thus
it is essential to examine the impact of the change of a numeraire on default
probabilities and valuation formulae. In the present setup, one may use either
a default-free or a defaultable security as a new numeraire. The only require-
ment for an asset to be eligible as a universal numeraire is to have a strictly
positive price process. We thus adopt the following deﬁnition, in which we
write α to denote the price process of a generic, either a default-free or a
defaultable, security, which pays no dividends.

Definition 3.7. A G-adapted process α is called a numeraire if it is strictly
positive and it represents the arbitrage price of some asset. A probability
measure Qα , equivalent to Q∗ on (Ω, GT ∗ ), is termed a martingale measure
associated with α if the relative price S/α of any (non-dividend paying) secu-
rity S is a Qα -martingale.
                                      Modeling and Valuation of Credit Risk       75

   For instance, let us choose as a numeraire the process At = Bt η̂t−1 , where
the density process η̂ is given by (19). Notice that

           Bt EQ∗ (BT−1∗ AT ∗ | Gt ) = Bt EQ∗ (η̂T−1∗ | Gt ) = Bt η̂t−1 = At ,

so that A represent the price process of some contingent claim, and A0 = 1.
    The statistical probability Q is a martingale measure associated with A,
and thus it becomes a pricing measure, in the sense that the price of any
contingent claim will be given by the formula
                                                     
                       St = At EQ        A−1
                                           u dD  u Gt  .                (24)
                                         ]t,T ]

If denote ξt = A−1   −1
                t = Bt η̂t , the last formula becomes
                                                  
                    St = ξt−1 EQ          ξu dDu Gt .                            (25)
                                           ]t,T ]

One recognizes here the classic idea of a state-price density (also known as a
deﬂator). Indeed, the price at time 0 of a contingentclaim which settles at
time T and equals 11E for some event E in GT , equals E ξT dQ. Let us notice
that formula (25) was adopted by Jamshidian (2002) as the deﬁnition of the
price. Of course, it is formally equivalent to ours.
    Let us now consider an arbitrary numeraire α. Since α pays no dividends,
the discounted price process α/B is a strictly positive Q∗ -martingale. Then
the associated martingale measure Qα , equivalent to Q∗ on (Ω, GT ∗ ), is given
by
                         dQα     B0 αT ∗
                             ∗ =         = ηTα∗ , Q∗ -a.s.                 (26)
                          dQ     α0 BT ∗
Consequently, the Radon-Nikodým density process of Qα with respect to Q∗
equals, for every t ∈ [0, T ∗ ],
                            dQα                         B0 αt
                    ηtα =          = EQ∗ (ηTα∗ | Gt ) =       .                  (27)
                            dQ∗ Gt                      α0 Bt
The fact that the probability Qα given by (26) is a martingale measure asso-
ciated with the numeraire α follows from the next lemma, which is a straight-
forward consequence of the Bayes formula.
Lemma 3.11. Let the process St /Bt , t ∈ [0, T ∗ ], be a Q∗ -martingale. Then
the process St /αt , t ∈ [0, T ∗ ], is a Qα -martingale, where the probability mea-
sure Qα is given by (26).
   More generally, if α and β are numeraires, then the corresponding martin-
gale measures Qα and Qβ satisfy on (Ω, GT ∗ )
                             dQα    β0 αT ∗
                                β
                                  =         ,       Qβ -a.s.
                             dQ     α0 βT ∗
76      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

More generally, we have, for every t ∈ [0, T ∗],

                              dQα                         β0 αt
                    ηtα,β =          = EQ∗ (ηTα,β
                                               ∗ | Gt ) =       .                          (28)
                              dQβ Gt                      α0 βt

Default-Free Numeraires

By convention, a numeraire α is termed a default-free numeraire if α is an
F-adapted process. Since the Radon-Nikodým density process η α , given by
formula (26), is manifestly F-adapted, by invoking Lemma 3.10, we conclude
that Γ α = Γ , where Γ α is the F-hazard process of τ under Qα . It is thus an
easy exercise to rewrite the valuation formulae of Sections 3.2–3.2 in terms of
α and Qα . Let us consider a particular example. A quite common choice of a
default-free numeraire is a T -maturity default-free zero-coupon bond, with the
strictly positive, F-adapted price αt = B(t, T ). The corresponding martingale
measure, denoted as QT , is known as the T -forward measure. The probability
QT is deﬁned on (Ω, FT ) (i.e., the maturity date T is now the horizon date),
and we have
                      dQT        B0 B(t, T )
                               =             , ∀ t ∈ [0, T ].
                       dQ∗ Gt    Bt B(0, T )
Again, it is rather straightforward to express the valuation formulae for de-
faultable claims in terms of the forward measure QT . For instance, the second
formula in Proposition 3.3 becomes
                                                                                      
     St = 11{τ >t} B(t, T )EQT                B −1 (u, T )eΓt −Γu (dCu + Zu dΓu ) Ft
                                     ]t,T ]
                                         
        + 11{τ >t} B(t, T )EQT XeΓt −ΓT Ft .

Although the F-hazard process under QT is the same as under Q∗ , the compu-
tations of expected values under Q∗ and under QT are not identical. If under
Q∗ we have
                            dγt = µt dt + σt dWt∗
then under QT the dynamics of γ are

                       dγt = (µt + b(t, T )σt ) dt + σt dWtT ,

where b(t, T ) is the volatility of the bond price, and the process W T is a
Brownian motion under QT .

Defaultable Numeraires

A numeraire α is called a defaultable numeraire if it is not F-adapted (of
course, α is a G-adapted process). As we know from Lemma 3.10, the F-
hazard process Γ α of τ under Qα is always well deﬁned, but it no longer
coincides with the F-hazard process Γ of τ under Q∗ .
                                    Modeling and Valuation of Credit Risk        77

   To examine this issue, let us observe that, using formula (20) of Lemma
3.10 and equality (28), we obtain the following expression for the conditional
                  t = Q {τ > t | Ft } of τ under Q
                         α                         α
survival process Gα

                                EQβ (αt βt−1 11{τ >t} | Ft )
                         Gα
                          t =                                  .
                                    EQβ (αt βt−1 | Ft )

It is convenient to introduce, following Jamshidian (2002), the notion of F-
coadapted numeraires. Numeraires α and β are said to be F-coadapted (with
respect to a reference ﬁltration F) if the process αβ −1 are F-adapted. Of
course, if α and β are F-coadapted numeraires then Gα = Gβ .
    An arbitrary numeraire α is not necessarily F-coadapted with the savings
account B, and thus Gα may diﬀer from G. Consequently, it may happen that
Γ α = Γ , in general.

Preprice of a Defaultable Claim

We shall now examine more closely an application of a change of numeraire
to the valuation of defaultable (or default-free) claims. Let α be an arbitrary
numeraire. We restrict our attention to a generic claim, which settles at time
T , and thus is represented by a GT -measurable random variable YT . First,
it should be checked that the price is invariant with respect to a choice of
numeraire. To this end, observe that the arbitrage price Yt at time t ≤ T
satisﬁes

            Yt := Bt EQ∗ (BT−1 YT | Gt ) = αt EQα (α−1
                                                    T YT | Gt ) =: Yt ,
                                                                     α


where the second equality is an easy consequence of (27) of the Bayes formula.
Thus, as expected, the price of YT is independent of the choice of a numeraire.
Speciﬁcally, for an arbitrary choice of a numeraire α we have Ytα = Yt for every
t ∈ [0, T ]. Following Jamshidian (2002), we introduce the concept of a preprice
of a claim YT relative to α and F.

Definition 3.8. For any date t ≤ T , the (F, α)-preprice Ŷtα of a claim YT is
deﬁned by the formula Ŷtα = αt EQα (α−1
                                      T YT | Ft ).

    Let us examine brieﬂy the properties of the preprice. It is easily seen that
the equality Ŷtα = Yt is satisﬁed for every t ≤ T if and only if the relative price
Y /α follows an F-adapted process, that is, processes Y and α are F-coadapted.
The deﬁnition of the preprice is fairly general, but the last property can be
given a nice ﬁnancial interpretation in the case of defaultable assets. Namely,
it says that if Y and α are two defaultable claims (with a common default
time) that exhibit the same pattern of behavior at default, then the valuation
of Y in terms of α requires only the knowledge of the reference ﬁltration F.
    More generally, if α and β are two F-coadapted numeraires then for any
contingent claim YT we have Ŷtα = Ŷtβ . This follows, for instance, from the
78      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

fact that the Radon-Nikodým density process η α,β is F-adapted (see 28), and
thus
                                               EQβ (α−1    −1
                                                     T αT βT YT | Ft )
                αt EQα (α−1
                         T YT | Ft ) = αt
                                                   EQβ (αT βT−1 | Ft )
                         EQβ (βT−1 YT | Ft )
                  = αt                         = βt EQβ (βT−1 YT | Ft ).
                               αt βt−1

The ﬁrst equality above yields easily the following general result.
                                                                     −1 β
Lemma 3.12. If α and β are numeraires then we have Ŷtα = αt α̂βt        Ŷt ,
        β           −1
where α̂t = βt EQ (βT αT | Ft ) is the (F, β)-preprice of the claim αT .
                 α



    It is also clear that the notion of the (F, α)-preprice is related to the concept
of the pre-default price, at least in the special case of the form YT = X11{τ >T } .
Any claim of this form will be called a survival claim in what follows.
    For any survival claim YT , by virtue of Lemma 3.5, we have
                                                     
                  Yt = 11{τ >t} Bt eΓt EQ∗ BT−1 YT Ft = 11{τ >t} Ỹt ,

where Ỹt is the pre-default price at time t of YT . By an application of Lemma
3.5, we also obtain

       Yt = Ytα = αt EQα (α−1                             EQα (α−1
                                                            α

                           T YT | Gt ) = 11{τ >t} αt e          T YT | Ft ).
                                                       Γt


We thus obtain the following result, due to Jamshidian (2002).

Proposition 3.12. Let YT = X11{τ >T } , where X is an FT -measurable ran-
dom variable, and let α be a numeraire. Then the price Yt of YT equals
                                         α
                         Yt = 11{τ >t}eΓt Ŷtα ,   ∀ t ∈ [0, T ],

where Ŷtα is the (F, α)-preprice of YT .

    In view of the last result, the pre-default price Ỹt of a survival claim YT
                  α
satisﬁes Ỹt = eΓt Ŷtα for every t ∈ [0, T ] and an arbitrary choice of a numeraire
α. Let us stress that the concept of a preprice corresponds to the general notion
of the cum-dividend price of a contingent claim, while the pre-default price is
associated with the idea of the ex-dividend price. The last two notions clearly
coincide in the case of a survival claim, but not in general. It seems likely that
the preprice will prove to be a more convenient tool than the pre-default price
if one wishes to analyze simultaneously several default-free and defaultable
claims (possibly with diﬀerent default times, maturity dates, etc.).
    Jamshidian (2002) correctly argues that the concept of the preprice can be
used in the analysis of an option to exchange two survival claims. Let AT and
BT be two survival claims that settle at T. Consider a claim CT = (AT −BT )+
                                       Modeling and Valuation of Credit Risk         79

(note that CT is also a survival claim). We wish to evaluate the price Ct for
t ≤ T using the process α as a numeraire. In view of Proposition 3.12, we
have
        Ct = 11{τ >t} eΓt Ĉtα = 11{τ >t} αt eΓt EQα (α−1          +
                         α                     α

                                                       T (AT − BT ) | Ft ).

Proposition 3.13. We shall show that last formula can also be represented
as follows
                                            α        +
             Ct = 11{τ >t} αt eΓt EQα (α−1
                                α
                                        T   ÂT − B̂Tα | Ft ).
Furthermore, we have
                                              α          
                                                        α +
                                                  T − B̂T
                             CT = 11{τ >T } eΓT Âα         .
    To establish the ﬁrst formula in Proposition 3.13, it suﬃces to apply Propo-
sition 3.12 for t = T to survival claims AT and BT . We obtain
                                                                                    
      EQα α−1T (AT − BT )
                            +
                               Ft = EQα α−1     T 11{τ >T } e
                                                              ΓTα
                                                                     T − B̂T )
                                                                  (Âα        α +
                                                                                    Ft
                          α                                                +      
       = EQα 11{τ >T } eΓT EQα (α−1  T   YT | F T ) − EQ α (α
                                                              −1
                                                              T   Y T | F T )    F t
                                                           +        
                        −1                       −1
       = EQα EQα (αT YT | FT ) − EQα (αT YT | FT )                  Ft
                                      
       = EQα α−1              α +
                 T (ÂT − B̂T )
                      α
                                    Ft .
Since α−1          α +
        T (ÂT − B̂T ) is FT -measurable, the second equality follows from the
             α

ﬁrst formula. Let us ﬁnally observe that
                                                                
              Ct = 11{τ >t} αt eΓt EQα α−1  −ΓTα
                                                 (ÃT − B̃T )+ Ft .
                                 α
                                        T e

We thus conclude that in the case of survival claims working with preprices is
equivalent to working with pre-default prices. For this reason, in our presenta-
tion of Jamshidian (2002) approach to survival swaptions, we shall make use
of pre-default prices, rather than preprices. It should be observed, however,
that the concept of the preprice is more general, and it is more suitable for
an analysis of general default-free and defaultable claims and numeraires.

Credit Default Swaption
As a non-trivial application of the hazard process approach to the valuation
of defaultable claims, we shall now brieﬂy describe a challenging issue of valu-
ation of a credit default swaption. By deﬁnition, the option expires worthless
if there was default of the reference entity prior to the start date, denoted by
T0 in the sequel. Essentially, we follow here Jamshidian (2002), although our
presentation is slightly diﬀerent and deﬁnitely less detailed than the original
one.
    In particular, we do not make an explicit use of the general concept of
the (F, α)-pre-default price if a contingent claim, but we instead refer directly
to the idea of the pre-default price of a defaultable claim. As we already
mentioned, both concepts are essentially equivalent in the case of survival
claims.
80      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Valuation of Survival Swaptions

Consider a generic contingent claim YT which settles at time T (that is, YT is a
GT -measurable random variable), and assume that YT is a survival claim. This
means that YT = 0 on the set {τ ≤ T } or, equivalently, that YT = 11{τ >T } YT .
By applying Lemma 3.5, we obtain
                                                                   EQ∗ (11{τ >T } YT | FT )
 YT = EQ∗ (YT | GT ) = EQ∗ (11{τ >T } YT | GT ) = 11{τ >T }                                 .
                                                                     Q∗ {τ > T | FT }
In view of the last equality, we may and do assume, without loss of generality,
that YT = 11{τ >T } ỸT , where ỸT is an FT -measurable random variable. We
thus deal here with a defaultable claim that is subject to zero recovery, of the
form (ỸT , 0, 0, 0, τ ).
Remarks. Recall that the property used here is quite general, namely, for
any Gt -measurable random variable Y , and for any t ∈ R+ there exists an
Ft -measurable random variable Ỹt such that 11{τ >t} Y = 11{τ >t}Ỹt .
     Assume, in addition, that the terminal payoﬀ YT can be represented as
follows: YT = (VT1 − κVT2 )+ for some GT -measurable random variables VT1 and
VT2 , and some constant κ > 0. Such a claim will be termed a survival swaption
in what follows. We have

          YT = 11{τ >T } (VT1 − κVT2 )+ = (11{τ >T } VT1 − κ11{τ >T } VT2 )+
              = (11{τ >T } ṼT1 − κ11{τ >T }ṼT2 )+ = 11{τ >T } (ṼT1 − κṼT2 )+ ,

where the random variables ṼTi , i = 1, 2 are FT -measurable, speciﬁcally,

                                     EQ∗ (11{τ >T } VTi | FT )
                            ṼTi =                             .
                                       Q∗ {τ > T | FT }
Lemma 3.13. The ex-dividend price of YT at time t < T equals
                                                           
             St = 11{τ >t} B̃t EQ∗ B̃T−1 (ṼT1 − κṼT2 )+ Ft ,

where B̃t = Bt eΓt .
   Suppose, in addition, that the random variable ṼT2 is strictly positive, so
that the process Ṽt2 representing the pre-default price of VT2 is also strictly
positive. Note that we have
                                                     
                          Ṽt2 = B̃t EQ∗ B̃T−1 ṼT2 Ft .

We deﬁne a probability measure Q̃, equivalent to Q∗ on (Ω, GT ), by setting
for every t ∈ [0, T ]

                               dQ̃     dQ̃     B̃0 Ṽt2
                       η̃t =       ∗ =     ∗ =          .
                               dQ Gt   dQ Ft   B̃t Ṽ02
                                             Modeling and Valuation of Credit Risk    81

Using the Bayes formula, it is easy to verify that
                                                      
                    St = 11{τ >t}Ṽt2 EQ̃ (κ̃T − κ)+ Ft ,                            (29)

where κ̃T = ṼT1 /ṼT2 . In addition, the process κ̃t = Ṽt1 /Ṽt2 , which represents
an abstract swap rate, is a martingale with respect to F under Q̃.
   Suppose now that the reference ﬁltration F is generated by some Q̃-
Brownian motion W̃ . Assuming, in addition, that the process κ̃ is strictly
positive, we conclude that the dynamics of this process under Q̃ are

                                     dκ̃(t) = κ̃(t)ν̃(t) dW̃t                        (30)

for some volatility process ν̃. The following result is a consequence of (29).

Proposition 3.14. Suppose that ν̃ is a deterministic function. The price St
of a survival option equals
                                                              
              St = 11{τ >t} Ṽt2 κ̃(t)N d+ (t, T ) − κN d− (t, T ) ,   (31)

where
                                             ln(κ̃(t)/κ) ± 12 ṽ 2 (t, T )
                             d± (t, Tj ) =
                                                      ṽ(t, T )
                     T
and ṽ 2 (t, T ) =    t
                          |ν̃(u)|2 du.

Jamshidian’s Model

Before proceeding to credit default swaptions, we shall describe brieﬂy the
lognormal model of co-terminal (non-defaultable) swap rates (see Jamshidian
(1997)). We consider here a family of forward swap rate associated with in-
terest rate swaps in which a ﬁxed rate is periodically exchanged for a ﬂoating
(LIBOR) rate. For a given collection of dates 0 < T0 < T1 < · · · < Tn , referred
to as the tenor structure, the corresponding swap rate processes are given by
the formula (we denote αj = Tj − Tj−1 )

                                                B(t, Tj ) − B(t, Tn )
               κ(t, Tj , n − j) =                                                .
                                         αj+1 B(t, Tj+1 ) + · · · + αn B(t, Tn )

According to Jamshidian’s model, these processes are lognormal martingales.
More precisely, for any j = 1, . . . , n we have
                                                                             T
                     dκ(t, Tj , n − j) = κ(t, Tj , n − j)ν(t, Tj ) dW̃t j+1 ,

where W̃ Tj+1 , t ∈ [0, Tj+1 ] is a d-dimensional standard Brownian motion un-
der the corresponding swap measure P̃Tj+1 .
   It follows that for j = 1, . . . , n the price of the j th swaption in Jamshidian’s
model is given by the Black formula for swaptions:
82      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

              
              n                                                             
     Stj =           αk B(t, Tk ) κ(t, Tj , n − j)N d+ (t, Tj ) − κN d− (t, Tj ) ,
             k=j+1

where
                                        ln(κ(t, Tj , n − j)/κ) ± 12 v 2 (t, Tj )
                     d± (t, Tj ) =
                                                       v(t, Tj )
                      Tj
and v 2 (t, Tj ) =    t     |ν(u, Tj )|2 du.

Credit Default Swaption

We assume that the tenor structure 0 < T0 < T1 < · · · < Tn is given.
Spread premium leg. By a survival annuity stream we mean the sequence
of cash ﬂows
                      n
                          κi 11{τ >Ti } 11{t=Ti } ,
                                     i=1

where κi is an FTi -measurable random variable. Each component represents a
payoﬀ κi , which is due to be paid at Ti , provided that default has not occurred
prior to or at this date. For instance, κi = κ may represent the credit spread
over LIBOR of a defaultable bond.
Default protection leg. A generic default protection stream is deﬁned as
the following sequence of cash ﬂows
                                  
                                  n
                                        Li 11{Ti−1 <τ ≤Ti } 11{t=Ti } ,
                                  i=1

where Li is an FTi−1 -measurable random variable. Each component represents
a protection payoﬀ Li , which is received at Ti if default has occurred between
Ti−1 and Ti . In practice, Li may equal, for instance, a constant rate plus
LIBOR L(Ti−1 ) times the daycount fraction αi .
Valuation. Observe that if default has occurred prior to or at Ti for i =
1, . . . , n, then clearly both legs of the contract become worthless. Note that
this remark also applies to the start date T0 . We may thus expect that Lemma
3.13 is applicable, at least in principle, to the valuation of a credit default
swaption with the expiration date T ≤ T0 . Using Proposition 3.14, combined
with a suitable approximation of the volatility process in (30), Jamshidian
(2002) derives an approximate valuation formula (31) for a credit default
swaption (a similar result was obtained in a diﬀerent setup by Schönbucher
(2000b)).

A Practical Example

Although, theoretically speaking, the features of general intensity-based ap-
proach are well understood, practical implementations of reduced - form
                                                  Modeling and Valuation of Credit Risk           83

methodology are usually done under several simplifying assumptions. We
present here a brief summary of the StepCredit model for pricing credit instru-
ments, developed by a major U.S. bank. The bank employs a reduced-form
methodology in order to manage risks associated with trading credit default
swaps. Basic modeling assumptions are:
• The default intensity and the interest rates are independent.
• The recovery scheme is consistent with the fractional recovery of par value,
   with the stochastic recovery rate δt .
• The recovery rate process δt is stationary, with EQ∗ (δt ) = δ.
• The recovery rate process is independent of both the interest rates and the
   default intensity.
The reference leg of a CDS: corporate coupon bond. This leg of the
credit default swap is modeled at present time t = 0 as (it is implicitly assumed
that the reference σ-ﬁeld is trivial at time 0)
                                       Mk      
                      ck B(0, Mk )EQ∗ e− 0 γu du
                  Mk >0

                                  T                      u      
                    +δ                c(u)B(0, u)EQ∗ γu e− 0 γv dv du,
                              0
where T is the maturity of the bond, the Mk s are coupon payment dates,
and the quantities ck and c(s) are related to coupon rates and amortized
outstanding principal.
The premium/protection payment leg. This represents the PV of the
CDS contract and is evaluated at time t = 0 as
                                    Tk      
                    Pk B(0, Tk )EQ∗ e− 0 γu du
                  Tk >0

                              T                         u      
                    −             P δ (u)B(0, u)EQ∗ γu e− 0 γv dv du,
                          0
where the Tk s are swap premium payment dates, and the quantities Pk and
P δ (u) are related to swap premia and the bond’s insurance payment, respec-
tively. StepCredit postulates that the stochastic intensity γ follows a suﬃ-
ciently regular process, so that for any future date t > 0 we have
                              t             t
                         EQ∗ e− 0 γu du = e− 0 s(u) du

for some right-continuous, piecewise constant function s. Thus, for example,
the present value of the CDS can be written as
                                  Tk                    T                       u
             Pk B(0, Tk )e− 0            s(u)du
                                                  −           P δ (u)B(0, u)s(u)e− 0 s(v)dv du.
     Tk >0                                            0
84       T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

The model is then calibrated at time 0 for the intensity function s, and thus
the stochastic intensity γ becomes spurious. To conclude, under the present
set of assumptions there is no real advantage of introducing the concept of a
stochastic intensity if we are only interested in the valuation of the CDS (or
other contingent claims of similar features) at time 0.
    Suppose, however, that we wish to ﬁnd the price at some future date t > 0
of the CDS within the present setup. By reasoning in a similar manner as
above, we see that it is now convenient to introduce a random ﬁeld s(t, u),
which is implicitly deﬁned through the following relationship
                          T                   T
                     EQ∗ e− t γu du Ft = e− t s(t,u)du .

Notice that s(u) = s(0, u) for every u ∈ R+ . The random ﬁeld s(t, u) appears
to be useful in the valuation of contingent claims at future dates. For instance,
the value of the CDS at time t > 0 can be represented in terms of this random
ﬁeld
                           Tk                      T                          u
             Pk B(t, Tk )e− t     s(t,u)du
                                             −           P δ (u)B(t, u)s(t, u)e− t s(t,v)dv du.
     Tk >t                                       t


Of course, the knowledge of the intensity function s(u) = s(0, u) is insuﬃcient
for the calculation of the price of the CDS at time t > 0.
Remarks. It is interesting to notice that the ﬁeld s(t, u) plays a role analogous
to the instantaneous forward rate in the representation of price process of a
discount bond. Under mild assumptions on default-free and defaultable term
structures, it can be shown that s(t, u) represents the so-called forward credit
spread, that is, the diﬀerence between the instantaneous forward rates implied
by prices of defaultable bonds with zero recovery and default-free bonds. To
be more speciﬁc, we have
                                                              t
                            D̃0 (t, T ) = B(t, T )e− 0 s(t,u) du .

For similar representations in a more general framework, see Section 4.8.

3.3 Martingale Approach

The term martingale approach refers to a speciﬁc version of the intensity-based
approach, in which we work directly with the martingale hazard process of a
default time. In the preceding section, we have assumed that the information
was made of two parts, the reference ﬁltration (corresponding to market risk)
and the ﬁltration of the default time (associated with default risk). It may
be diﬃcult to separate the two kinds of available information coming from
the market data. For this reason, it seems useful to develop an approach in
which we deal only with a ﬁltration G, such that τ is a G-stopping time.
However, as we shall see in that follows, the results obtained within this
                                      Modeling and Valuation of Credit Risk          85

setup are less explicit than results of Section 3.2. In addition, some crucial
assumptions appearing in valuation results are diﬃcult to verify.5 Therefore,
in our opinion this attempt to develop a more general methodology than the
standard approach based on the notion of an F-hazard process can not be
judged at present as fully successful. Nevertheless, we decided to present it
here for the sake of completeness.

Standing Assumptions

We work under the following standing assumptions (see Duﬃe et al. (1996)).
(A.1) Martingale measure. We are given a probability space (Ω, G, Q∗ ),
with Q∗ interpreted as a martingale measure. A G-adapted processr repre-
                                                              t
sents the short-term interest rate, and the process Bt = exp 0 ru du models
the savings account.
(A.2) Promised claim. A GT -measurable random variable X represents the
promised claim, that is, the amount of cash which the owner of a default-
able claim is entitled to receive at time T, provided that the default has not
occurred prior to T.
(A.3) Recovery process. A G-predictable process Z, called recovery process,
models the payoﬀ which is actually received by the owner of a defaultable claim
in case the default occurs prior to the maturity T.
(A.4) Default time. We assume that the default time τ is a G-stopping
                                    t∧τ there exists a G-predictable process λ,
time. In addition, we postulate that
such that the process Mt = Ht − 0 λu du is a G-martingale under Q∗ . The
                                                     ∗
      t λ is a G-martingale intensity of τ under Q . Consequently,
process                                                              the process
Λt = 0 λu du is a G-martingale hazard process of τ under Q∗ .
Remarks. In the context of (A.4), one needs to realize that when working
with G-adapted intensities, we face the situation where the intensity process
is not unique. In fact, if λt , t ≥ 0 is an intensity, then any process λ̂ such
that λ̂t 11{τ >t} = λt 11{τ >t} is an intensity (for example, the process λt 11{τ >t} +
a11{τ ≥t} is an intensity for any choice of the constant a). This suggests that
the concept of the G-martingale intensity is more ambiguous that the notion
of the F-intensity for some reference ﬁltration F.

Valuation of Defaultable Claims

According to (A.2)-(A.3), we have C ≡ 0 (the promised dividends are zero)
and X̃ = 0 (the recovery payoﬀ at T equals 0), so that a generic defaultable
claim is now represented by a triplet (X, Z, τ ). As in Section 2.1, we postulate
5
    Unless, for instance, we work within the classic framework of Cox processes. In
    this case, however, the martingale approach is not required at all, since the direct
    approach easily yields all desired results.
86      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

that the ex-dividend price St at time t < T of a defaultable claim (X, Z, τ )
equals
                                                   
                     St = Bt EQ∗        Bu−1 dDu Gt ,
                                                     ]t,T ]

where
                     Dt = X11{τ >T }11{t=T } + Zτ 11{τ ≤T } 11{t=τ }
is the dividend process. More explicitly, for any t ∈ [0, T [,
                                                                
             St = Bt EQ∗ Bτ−1 Zτ 11{t<τ ≤T } + BT−1 X11{τ >T } Gt .

In addition, we set ST = X d (T ) = X11{τ >T }. Notice that the ex-dividend
price always vanishes on the set {τ ≤ t}. Therefore, we have St = 11{τ >t}S̃t ,
where S̃ is termed the pre-default value of a claim.
    Our goal is to provide an alternative representation for the process S with
an explicit use of a G-martingale intensity λ. To this end, let us introduce an
auxiliary process ht = λt 11{t≤τ } . Since
                                                                  t
                                       M̂t = Ht −                     hu du
                                                              0
                                      t
is a G-martingale, the process At = 0 hu du = Λt∧τ is the compensator of
the bounded G-submartingale H. The following preliminary result provides
an alternative representation for the price S in terms of h.

Lemma 3.14. The value process S satisﬁes
                                      T                                             
             St = Bt EQ∗                   Bu−1 Zu hu du + BT−1 X11{T <τ } Gt
                                   t

or, equivalently,
                                 T                                  
             St = EQ∗                  Zu hu − ru Su du + X11{τ >T } Gt .
                              t

   The representation of S furnished by the last result can be further im-
proved. Note the formulae of Lemma 3.14 correspond to the assumption that
the intensity process λ vanishes after τ , but other choices are also possible. It
seems that the choice of λ = h is probably the worst possible choice from the
viewpoint of valuation of defaultable claims.
   In general, for any choice of the intensity λ, we introduce an auxiliary
process V by setting
                                              T                                 
                    Vt = B̃t EQ∗                   B̃u−1 Zu λu du + B̃T−1 X Gt           (32)
                                           t
                                            Modeling and Valuation of Credit Risk            87

where B̃ is the default-risk-adjusted savings account, which corresponds to the
increased interest rate r̃t = rt + λt . More explicitly, we deﬁne
                                           t                
                     B̃t = exp                  (ru + λu ) du = Bt eΛt .
                                        0

Thus (32) can also be rewritten as follows:
                              T                                                        
         Vt = Bt EQ∗               Bu−1 eΛt −Λu Zu dΛu + BT−1 XeΛt −ΛT Gt                   (33)
                           t

Note that the last formula mimics the second equality in Proposition 3.3.
However, the desired equality St = 11{τ >t} Vt does not always hold. In other
words, the auxiliary process V represents the pre-default value of a defaultable
claim (X, Z, τ ) only in some speciﬁc circumstances. In general, we have the
following weaker result.

Proposition 3.15. Assume that (A.1)-(A.4) hold. Then the value process S
satisﬁes                                                  
           St = 11{τ >t} Vt − Bt EQ∗ Bτ−1 11{t<τ ≤T } ∆Vτ Gt .

If                                                
                        EQ∗ Bτ−1 11{t<τ ≤T } ∆Vτ Gt = 0                                     (34)
then
                                                   T                              
             St = 11{τ >t} B̃t EQ∗                      B̃u−1 Zu λu du + B̃T−1 X Gt .
                                                t


Remarks. It is crucial to observe that condition (34) is diﬃcult to verify. In
general, it depends on the speciﬁcation of a defaultable claim, as well as on
the choice of the intensity. If condition (34) happens to hold, we get a formula
similar to the one derived in the previous section, up to the conditioning. In
the previous section, we have worked with a speciﬁc choice of the intensity:
the F-adapted one, and the conditioning was with respect to Ft . One can ask
whether the two kinds of conditioning happen to coincide in the present setup;
we shall examine this important issue in the next subsection.

Martingale Approach under (H.1)

In order to be able to apply condition (H.1) within the setup (A.1)-(A.4), we
assume that G = F∨H, where F is some reference ﬁltration. Also, we postulate
that the G-martingale intensity λ is adapted to the reference ﬁltration F (so
that λ is also the F-martingale intensity of τ under Q∗ ). In addition, we modify
(A.2)-(A.3), by assuming that the promised claim X is FT -measurable, and
the recovery process Z is F-predictable.
88     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

    Under the present assumptions, in view of (H.1), the conditioning with
respect to the σ-ﬁeld Gt in (32) can be replaced by conditioning with respect
to the σ-ﬁeld Ft . We thus obtain
                                     T                              
               Vt = B̃t EQ∗               B̃u−1 Zu λu du + B̃T−1 X Ft .           (35)
                                  t

The next result is valid under the set of assumptions introduced above. Note
that for F = G all assumptions of this section hold, and thus Proposition 3.15
is a direct extension of Proposition 3.16.

Proposition 3.16. Suppose that for the process V given by (35) condition
(34) is satisﬁed. Then
                                             T                              
            St = 11{τ >t} B̃t EQ∗                 B̃u−1 Zu λu du + B̃T−1 X Ft .   (36)
                                          t

   Note that when F is the Brownian ﬁltration, the continuity of the process
V is rather clear. In this case ∆Vτ = 0 and thus (34) holds.
   As already mentioned in Section 3.2, working under (H.1) is essentially
equivalent to working with a default time given by the canonical construction.
Thus, the martingale approach under an additional assumption (H.1) does not
appear to be more general than the standard approach.

3.4 Further Developments

In this section, we shall present some recent developments in the area of
intensity-based modeling of default risk.

Default-Adjusted Martingale Measure

In a recent paper by Collin-Dufresne et al. (2003), the authors furnish an
alternative representation for the value process S within the framework of the
martingale approach. Their main goal was to get rid of the no-jump condition
(34), and thus, to simplify considerably the pricing procedure, even in these
models in which this condition is known to be violated.
    To this end, they ﬁrst deﬁne a probability measure Q , absolutely contin-
uous with respect to Q∗ , by setting, for a ﬁxed T > 0 (a similar approach was
proposed by Schönbucher (2000b); his goal was diﬀerent, however)

                            dQ
                                   = 11{τ >T } eΛT .
                            dQ∗ GT
Using this new probability, which can be termed the default-adjusted martin-
gale measure, they arrive at the following result.
                                            Modeling and Valuation of Credit Risk   89

Proposition 3.17. For every t ≤ T we have St = 11{τ >t} Vt , where
                                       T                               
                Vt = B̃t EQ               B̃u−1 Zu λu du + B̃T−1 X Gt ,
                                    t

and where the ﬁltration G is the completion of G under Q .

    In view of the last result, it is clear that Q is a suitable tool for the
valuation of a particular survival claim with a given default time τ . However,
the fact that Q is merely absolutely continuous with respect to original pricing
measure Q∗ suggests that this probability is unlikely to be a universal tool
for the valuation of all defaultable and default-free claims present in a market
model.
Remarks. From the technical perspective, the above construction is in the
spirit of Kusuoka’s (1999) example, discussed earlier in this chapter. Also,
we believe that there is a strong link between the above result and some
important issues arising in the theory of initial enlargement of a ﬁltration.

Hybrid Models

Some authors attempt to partially reconcile the structural and reduced-form
approaches by postulating that the default intensity is directly linked to the
ﬁrm’s value. For instance, Madan and Unal (1998) consider the discounted eq-
uity value (including reinvested dividends) process Et∗ = Et /Bt as the unique
Markovian state variable in their intensity-based model. The dynamics of E ∗
under the martingale measure P∗ are:

                          dEt∗ = σEt∗ dWt∗ ,           E0∗ > 0,

for some constant volatility coeﬃcient σ. They postulate that the intensity of
default satisﬁes λt = λ(Et∗ ) for some function λ : R+ → R+ . The default time
τ is speciﬁed through the canonical construction, so that it is deﬁned on an
enlarged probability space (Ω, G, Q∗ ), where a martingale measure Q∗ is an
extension of P∗ . Madan and Unal (1998) propose to take the function λ(x) =
c (ln(x/v̄))−2 , where c and v̄ are strictly positive constants. It is interesting
to notice that the stochastic intensity λt = λ(Et∗ ) tends to inﬁnity, when the
discounted equity value Et∗ approaches, either from above or from below, the
critical level v̄. To avoid making a particular choice of a default-free term
structure model, they focus on the futures price of a corporate bond. It is
well known (see Duﬃe and Stanton (1992) or Section 15.2 in Musiela and
Rutkowski (1997)) that the futures price π f (X) of a contingent claim X,
for the settlement date T , is given by the conditional expectation under the
martingale measure πtf (X) = EQ∗ (X | Gt ). In particular, the futures price
Df (t, T ) of a defaultable bond with zero recovery is given by the formula
Df (t, T ) = Q∗ {τ > T | Gt }. More explicitly
90     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski
                                  T     ∗
                                                    
        Df (t, T ) = 11{τ >t} EP∗ e− t λ(Eu ,u)du Ft = 11{τ >t} v(Et∗ , t)

for some function v : R+ → R+ . By virtue of the Feynman-Kac theorem, the
function v satisﬁes, under mild technical assumptions, the following pricing
PDE
                vt (x, t) + 12 σ 2 (x, t)vxx (x, t) − λ(x, t)v(x, t) = 0
subject to the terminal condition v(x, T ) = 1. For the sake of notational
simplicity, we have assumed here that the process W ∗ is one-dimensional.
    Madan and Unal (1998) show that under these assumptions the futures
price of a corporate bond equals G(h(Et∗ , T − t)), where the function h is
explicitly known, and G satisﬁes a certain second-order ODE.

Unified Approach

Let us ﬁnally mention that Bélanger et al. (2001) make an attempt to unify the
structural and reduced-form approaches. They work under the standard as-
sumption that the reference ﬁltration F is the augmented Brownian ﬁltration.
They construct time τ by means of an extension of the canonical construction
(see Section 3.2)
                        τ = inf {t ∈ [0, T ∗ ] : Ψt ≥ θ},
where Ψ is a càdlàg process adapted to a reference ﬁltration F, and η > 0 is a
random variable independent of F (not necessarily exponentially distributed).
Since this is a slight generalization of the canonical construction, condition
(H.1) is manifestly satisﬁed in this setup. Since their framework is slightly
more general than the one presented above, process Λ may not be absolutely
continuous, and it takes the form (cf. Proposition 3.8)

                                             dFu
                              Λt =                 ,
                                     ]0,t] 1 − Fu−

where, as usual, Ft = Q∗ {τ ≤ t | Ft }. However, in view of their construction,
the process Λ is in fact the F-hazard process of τ , that is, Λ = Γ. Unfortu-
nately, in view of space limits, it is not possible to present the uniﬁed approach
in more detail here.

3.5 Comments on Intensity-Based Models

We end this chapter by giving few comments on the reduced-form (that is,
the intensity-based) approach to the modeling of credit risk. It should be
emphasized that the advantages and disadvantages listed below are mainly
relative to the alternative structural approach, which was presented in the
preceding chapter. Note that at least some of the disadvantages listed below
disappear in a hybrid approach to credit risk modeling.
                                     Modeling and Valuation of Credit Risk        91

Advantages
•   The speciﬁcations of the value-of-the-ﬁrm process and the default - trig-
    gering barrier are not needed.
•   The level of the credit risk is reﬂected in a single quantity: the risk - neutral
    default intensity.
•   The random time of default is an unpredictable stopping time, and thus
    the default event comes as an almost total surprise.
•   The valuation of defaultable claims is rather straightforward. It resembles
    the valuation of default-free contingent claims in term structure models,
    through well understood techniques.
•   Credit spreads are much easier to quantify and manipulate than in struc-
    tural models of credit risk. Consequently, the credit spreads are more re-
    alistic and risk premia are easier to handle.

Disadvantages
•   Typically, current data regarding the level of the ﬁrm’s assets and the
    ﬁrm’s leverage are not taken into account.
•   Speciﬁc features related to safety covenants and debt’s seniority are not
    easy to handle.
•   All (important) issues related to the capital structure of a ﬁrm are beyond
    the scope of this approach.
•   Most practical approaches to portfolio’s credit risk are linked to the value-
    of-the-ﬁrm approach.
    In the next chapter, we shall present more elaborated versions of the
reduced-form approach, which aim to cover the case of multi-name credit
derivatives (i.e., basket credit derivatives), as well as derivative products re-
lated to credit migrations (i.e., changes of credit ratings).


4 Dependent Defaults and Credit Migrations
Let us start by providing a tentative, and deﬁnitely non-exhaustive, classiﬁca-
tion of issues and techniques that arise in the context of modeling dependent
defaults and credit ratings.
Valuation of basket credit derivatives covers, in particular:
•   Default swaps of type F (Duﬃe 1998b, Kijima and Muromachi 2000) – a
    protection against the ﬁrst default in a basket of defaultable claims.
•   Default swaps of type D (Kijima and Muromachi 2000) – a protection
    against the ﬁrst two defaults in a basket of defaultable claims.
•   The ith -to-default claims (Bielecki and Rutkowski 2003) – a protection
    against the ﬁrst i defaults in a basket of defaultable claims.
92       T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Technical issues arising in the context of dependent defaults include:
•    Conditional independence of default times (Kijima and Muromachi 2000).
•    Simulation of correlated defaults (Duﬃe and Singleton 1998).
•    Modeling of infectious defaults (Davis and Lo 1999).
•    Asymmetric default intensities (Jarrow and Yu 2001).
•    Copulas (Schönbucher and Schubert 2001, Laurent and Gregory 2001).
•    Dependent credit ratings (Lando 1998b, Bielecki and Rutkowski 2003).
•    Simulation of dependent credit migrations (Kijima et al. 2002, Bielecki
     2002).

4.1 Basket Credit Derivatives

Basket credit derivatives are credit derivatives deriving their cash ﬂows val-
ues (and thus their values) from credit risks of several reference entities (or
prespeciﬁed credit events).
Standing assumptions. We assume that:
• We are given a collection of default times τ1 , . . . , τn deﬁned on a common
   probability space (Ω, G, Q∗ ).
• Q∗ {τi = 0} = 0 and Q∗ {τi > t} > 0 for every i and t.
• Q∗ {τi = τj } = 0 for arbitrary i = j (in a continuous time setup).
    We associate with the collection τ1 , . . . , τn of default times the ordered
sequence τ(1) < τ(2) < · · · < τ(n) , where τ(i) stands for the random time of the
ith default. Formally,
                             τ(1) = min {τ1 , τ2 , . . . , τn }
and for i = 2, . . . , n
                                                                 
                     τ(i) = min τk : k = 1, . . . , n, τk > τ(i−1) .

In particular,
                             τ(n) = max {τ1 , τ2 , . . . , τn }.

The ith -to-Default Contingent Claims

We set Hti = 11{τi ≤t} and we denote by Hi the ﬁltration generated by the
process H i , that is, by the observations of the default time τi . In addition,
we are given a reference ﬁltration F on the space (Ω, G, Q∗ ). The ﬁltration F
is related to some other market risks, for instance, to the interest rate risk.
Finally, we introduce the enlarged ﬁltration G by setting

                            G = F ∨ H1 ∨ H2 ∨ · · · ∨ Hn .

The σ-ﬁeld Gt models the information available at time t.
   A general ith -to-default contingent claim which matures at time T is spec-
iﬁed by the following covenants:
                                     Modeling and Valuation of Credit Risk        93

•   If τ(i) = τk ≤ T for some k = 1, . . . , n it pays at time τ(i) the amount Zτk(i)
    where Z k is an F-predictable recovery process.
•   If τ(i) > T it pays at time T an FT -measurable promised amount X.

Case of Two Entities

For the sake of notational simplicity, we shall frequently consider the case of
two reference credit risks.
Cash ﬂows of the ﬁrst-to-default contract (FDC):
• If τ(1) = min {τ1 , τ2 } = τi ≤ T for i = 1, 2, the claim pays at time τi the
   amount Zτii .
• If min {τ1 , τ2 } > T, it pays at time T the amount X.
Cash ﬂows of the last-to-default contract (LDC):
•   If τ(2) = max {τ1 , τ2 } = τi ≤ T for i = 1, 2, the claim pays at time τi the
    amount Zτii .
•   If max {τ1 , τ2 } > T, it pays at time T the amount X.
    We recall that throughout these lectures the savings account B equals
                                                  t        
                              Bt = exp                 ru du ,
                                               0

      ∗
and Q stands for the martingale measure for our model of the ﬁnancial market
(including defaultable securities, such as: corporate bonds and credit deriva-
tives). Consequently, the price B(t, T ) of a zero-coupon default-free bond
equals                                                    
               B(t, T ) = Bt EQ∗ BT−1 | Gt = Bt EQ∗ BT−1 | Ft .

Values of FDC and LDC

In general, the value at time t of a defaultable claim (X, Z, τ ) is given by the
risk-neutral valuation formula
                                                                
                        St = Bt EQ∗                Bu−1 dDu Gt
                                          ]t,T ]

where D is the dividend process, which describes all the cash ﬂows of the
claim. Consequently, the value at time t of the FDC equals:
                                                                    
                (1)
              St = Bt EQ∗ Bτ−1   1
                                    Z 1
                                      τ1 1
                                         1 {τ 1 <τ 2 , t<τ 1 ≤T } Gt
                                                                      
                                   −1    2
                      +Bt EQ∗ Bτ2 Zτ2 11{τ2 <τ1 , t<τ2 ≤T } Gt
                                                             
                      +Bt EQ∗ BT−1 X11{T <τ(1)} Gt .
94      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

The value at time t of the LDC equals:
                                                                  
                (2)
               St = Bt EQ∗ Bτ−1 1
                                  Z 1
                                    τ1 1
                                       1 {τ 2 <τ 1 , t<τ 1 ≤T } Gt
                                                                          !
                                 
                          +Bt EQ∗ Bτ−1
                                     2
                                       Zτ22 11{τ1 <τ2 , t<τ2 ≤T } Gt
                                                     
                          +Bt EQ∗ BT−1 X11{T <τ(2)} Gt .

Both expressions above are merely special cases of a general formula. The goal
is to derive more explicit representations under various assumptions about τ1
and τ2 , or to provide ways of eﬃcient calculation of involved expected values
by means of simulation (using perhaps another probability measure).

4.2 Conditionally Independent Defaults

Relatively simple representations for prices of basket credit derivatives can be
obtained under the assumption of conditional independence of default times.
Definition 4.1. The random times τi , i = 1, . . . , n are said to be conditionally
independent with respect to F under Q∗ if for any T > 0 and any t1 , . . . , tn ∈
[0, T ] we have:
                                                       
                                                       n
              Q∗ {τ1 > t1 , . . . , τn > tn | FT } =         Q∗ {τi > ti | FT }.
                                                       i=1

Let us comment brieﬂy on Deﬁnition 4.1.
• Conditional independence has the following intuitive interpretation: the
   reference credits (credit names) are subject to common risk factors that
   may trigger credit (default) events. In addition, each credit name is subject
   to idiosyncratic risks that are speciﬁc for this name.
• Conditional independence of default times means that once the common
   risk factors are ﬁxed then the idiosyncratic risk factors are independent of
   each other.
• The property of conditional independence is not invariant with respect to
   an equivalent change of a probability measure.
• Conditional independence ﬁts into static and dynamic theories of default
   times.

Canonical Construction

Let Γ i , i = 1, . . . , n be a given family of F-adapted, increasing, continuous
processes, deﬁned on a probability space (Ω̃, F, P∗ ). We assume that Γ0i = 0
and Γ∞ i
           = ∞. Let (Ω̂, F̂ , P̂) be an auxiliary probability space with a se-
quence ξi , i = 1, . . . , n of mutually independent random variables uniformly
distributed on [0, 1]. We set
                                       Modeling and Valuation of Credit Risk          95

                  τi (ω̃, ω̂) = inf { t ∈ R+ : Γti (ω̃) ≥ − ln ξi (ω̂) }

on the product probability space (Ω, G, Q∗ ) = (Ω̃ × Ω̂, F∞ ⊗ F̂ , P∗ ⊗ P̂). We
endow the space (Ω, G, Q∗ ) with the ﬁltration G = F ∨ H1 ∨ · · · ∨ Hn .
Proposition 4.1. The process Γ i is the F-hazard process of τi :
                                                    i i        
            Q∗ {τi > s | Ft ∨ Hti } = 11{τi >t} EQ∗ eΓt −Γs | Ft .

We have Q∗ {τi = τj } = 0 for every i = j. Moreover, default times τ1 , . . . , τn
are conditionally independent with respect to F under Q∗ .
                       t
   Recall that if Γti = 0 γui du then γ i is the F-intensity of τi . Intuitively

                   Q∗ {τi ∈ [t, t + dt] | Ft ∨ Hti } ≈ 11{τi >t} γti dt.

Independent Default Times

We shall ﬁrst examine the case of default times τ1 , . . . , τn that are mutually
independent under Q∗ . Suppose that for every k = 1, . . . , n we know the
cumulative distribution function Fk (t) = Q∗ {τk ≤ t} of the default time of
the k th reference entity. The cumulative distribution functions of τ(1) and τ(n)
are:
                                                  
                                                  n
                   F(1) (t) = Q∗ {τ(1) ≤ t} = 1 −   (1 − Fk (t))
                                                       k=1

and
                                                       
                                                       n
                        F(n) (t) = Q∗ {τ(n) ≤ t} =           Fk (t).
                                                       k=1

   More generally, for any i = 1, . . . , n we have
                                       
                                       n                        
          F(i) (t) = Q∗ {τ(i) ≤ t} =                    Fkj (t)    (1 − Fkl (t))
                                       m=i π∈Π m j∈π              l∈π

where Π m denote the family of all subsets of {1, . . . , n} consisting of m ele-
ments.
    Suppose, in addition, that the default times τ1 , . . . , τn admit intensity func-
tions γ1 (t), . . . , γn (t). It is easily seen that the default time τ(1) has the inten-
sity function
                                  γ(1) (t) = γ1 (t) + · · · + γn (t)
and for any t ∈ R+                                t
                           Q∗ {τ(1) > t} = e− 0 γ(1) (v) dv .
By direct calculations, it is also possible to ﬁnd the intensity function of the
ith default time. We do not necessarily need to assume that the reference
ﬁltration F is trivial, so that the case of random interest rates is also covered.
96      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Example 4.1. We shall consider a digital default put of basket type. To be
more speciﬁc, we postulate that a contract pays a ﬁxed amount (e.g., one unit
of cash) at the ith default time τ(i) provided that τ(i) ≤ T. Assume that the
interest rates are non-random. Then the value at time 0 of the contract equals
                                            
                 S0 = EQ∗ Bτ−1
                             (i)
                                 11{τ(i) ≤T } =                       Bu−1 dF(i) (u).
                                                             ]0,T ]

If τ1 , . . . , τn admit intensities then
                        T                           T                     u
            S0 =            Bu−1 dF(i) (u) =            Bu−1 γ(i) (u)e− 0 γ(i) (v)dv du.
                    0                           0


Signed Intensities

Some authors (e.g., Kijima and Muromachi (2000)) examine credit risk models
in which the negative values of intensities are not precluded. Negative values
of the intensity process clearly contradict the interpretation of the intensity
as the conditional probability of survival over an inﬁnitesimal time interval.
    Nevertheless, the canonical construction of conditionally independent ran-
dom times also works in this case. For a given collection Γ i , i = 1, . . . , n of
F-adapted continuous stochastic processes, with Γ0i = 0, deﬁned on (Ω̂, F, P̂).
We deﬁne τi , i = 1, . . . , n, on the enlarged probability space (Ω, G, Q∗ ):

                            τi = inf { t ∈ R+ : Γti (ω̂) ≥ − ln ξi (ω̂) }.

Let us denote Γ̂ti = max u≤t Γui . Observe that if the process Γ i is absolutely
continuous, than so it the process Γ̂ i ; in this case the intensity of τi is obtained
as the derivative of Γ̂ i with respect to the time variable.
    The following result examines the case of signed intensities.

Lemma 4.1. Random times τi , i = 1, . . . , n are conditionally independent
with respect to F under Q∗ . In particular, for every t1 , . . . , tn ≤ T,
                                                            
                                                            n            n
                                                              e−Γ̂ti = e− i=1 Γ̂ti .
                                                                  i             i
             Q∗ {τ1 > t1 , . . . , τn > tn | FT } =
                                                            i=1


Valuation of FDC and LDC

Valuation of the ﬁrst-to-default or last-to-default contingent claim is relatively
straightforward under the assumption of conditional independence of default
times. We have the following result in which, for notational simplicity, we
consider only the case of two entities. As usual, we do not state explicitly
integrability conditions that should be imposed on recovery processes Z j and
the terminal payoﬀ X.
                                                              Modeling and Valuation of Credit Risk   97

Proposition 4.2. Let the default times τj , j = 1, 2 be F-conditionally inde-
pendent with F-intensities γ j . Assume that Z j are F-predictable processes, and
that the terminal payoﬀ X is FT -measurable. Then the price at time t = 0 of
the ﬁrst-to-default claim equals
                     2
                                                T                                        
        (1)
                                                      Bu−1 Zuj e−Γu γuj e−Γu du + EQ∗ BT−1 XG ,
                                                                  i        j
       S0 =                     EQ∗
                  i,j=1, i=j                 0


where we denote
                                          1           2
                        G = e−(ΓT +ΓT ) = Q∗ {τ1 > T, τ2 > T | FT }.

The price at time t = 0 of the last-to-default claim equals
                 2
                                        T                  i
                                                                                       
    (2)
                                              Bu−1 Zuj 1 − e−Γu γuj e−Γu du + EQ∗ BT−1 XH ,
                                                                       j
  S0      =                 EQ∗
              i,j=1, i=j             0


where we denote
                     2          1 
      H = 1 − (1 − e−ΓT )(1 − e−ΓT ) = 1 − Q∗ {τ1 ≤ T, τ2 ≤ T | FT }.

General Valuation Formula

We shall examine the case of a generic ith -to-default contingent claims. Recall
that we have introduced the notation

                                              τ(1) < τ(2) < · · · < τ(n)

for the ordered sequence of default times.
Recall that according to our notational convention:
• If the ith default occurs before or at the maturity date and τ(i) = τk for
    some k ∈ {1, . . . , n}, then an immediate recovery cash ﬂow Zτk(i) = Zτkk is
    received at time of the ith default.
• The terminal promised payment occurs at the maturity date if the ith
    default does happen not prior to or at T.
We assume that τ1 , . . . , τn are F-conditionally independent with stochastic
intensities γ 1 , . . . , γ n . Then we have the following result (recall that, by con-
vention, B0 = 0).
Proposition 4.3. The price at time t = 0 of the ith -to-default claim equals
                                  
                                  n                          T                                 
                       (i)
                                                                  Bu−1 Zuj gij (u)γuj e−Γu du
                                                                                         j
                     S0 =               EQ∗
                                  j=1                     0

                                      
                                      n                                  ∞                     
                                              EQ∗ BT−1 X                      gij (u)γuj e−Γu du ,
                                                                                            j
                                  +
                                      j=1                                T
98     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

where for every u ∈ R+
                                           −
                                                         l             
                                                                 1 − e−Γu ,
                                                                        k
                                                    l∈π+ Γu
                gij (u) =               e
                            π∈Π (i,j)                         k∈π−


and where by Π i,j we denote the collection of speciﬁc partitions of the set
{1, . . . , n}. Speciﬁcally, if π ∈ Π (i,j) then π = {π− , {j}, π+ }, where

            π− = {k1 , k2 , . . . , ki−1 },          π+ = {ki+1 , ki+2 , . . . , kn },

and: j ∈ π− , j ∈ π+ , π− ∩ π+ = ∅ and

                            π− ∪ π+ ∪ {j} = {1, . . . , n}.

   Consider, for instance, n = 2 credit entities. For i = 1 (i.e., in the case of
the ﬁrst-to-default claim) and j = 1, 2 we have
                                                            
            Π (1,1) =    ∅, {1}, {2} , Π (1,2) =     ∅, {2}, {1} .

Likewise, in the case of the second-to-default claim, we have
                                                            
            Π (2,1) =    {2}, {1}, ∅ , Π (2,2) =      {1}, {2}, ∅ .

In this example, each set Π (i,j) contains only
                                              one partition;
                                                             for example, the
only element of Π (1,1) is the partition π = ∅, {1}, {2} .

Default Swap of Basket Type

Let us consider a portfolio of n corporate bonds. The k th bond has the face
value Lk and maturity Tk . Its price process is denoted by Dk (t, Tk ), k =
1, . . . , n. By τk we denote the default time of the k th bond, and, as usual,
τ(i) stands for the random time of the ith default. We shall examine a default
swap, which matures at some future date T < min {T1 , . . . , Tk } and whose
covenants are described as follows. If τ(i) ≤ T, the contract holder (i.e., the
protection buyer) receives at time τ(i) the recovery payment

                        
                        n
                                              
                           Lk − Dk (τ(i) , Tk ) 11{τ(i) =τk } .
                        k=1

This means that if the ith defaulting bond was issued by the k th reference
entity, the recovery payment is based on the value of the k th bond only. A
default swap premium in the amount κ is paid by the contract holder at each
of prespeciﬁed time instants tp ≤ T, p = 1, 2, . . . , m prior to the ith default
time or to the maturity T, whichever comes ﬁrst.
                                        Modeling and Valuation of Credit Risk                   99

Default Swap Premium

We assume that all corporate bonds are subject to the fractional recovery of
par value scheme. Speciﬁcally, δj is the constant recovery rate of j th bond.
We also assume that each default time τj , j = 1, . . . , n, admits the F-intensity
                         t
process γ j so that Γtj = 0 γuj du. Then, the following result gives the value κ
of the default swap premium,

Proposition 4.4. The default swap premium κ = J1 /J2 where

               
               n                            T                                        
                                                 Bu−1                           1 − e−Γu
                                                                                       k
        J1 =         EQ∗ Lj (1 − δj )
                                         0
               j=1                                          π∈Π (i,j)   k∈π−
                                            
                                    − l∈π Γul
                                                 γuj e−Γu du
                                                        j
                                × e      +




                
                m           n 
                                            T                           k
                                                                                
                          −1
         J2 =         EQ Btp
                           ∗                                           1 − e−Γu
                                         tp
                p=1              j=1                 π∈Π (i,j)     k∈π−
                                                         
                                    − l∈π Γul
                                                 γuj e−Γu du
                                                        j
                                × e      +


                     
                     m             n 
                                                ∞                         k
                                                                                  
                +          EQ∗ Bt−1
                                 p
                                                                         1 − e−Γu
                                                 T
                     p=1           j=1                  π∈Π (i,j)       k∈π−
                                                        
                                    − l∈π Γul
                                                 γuj e−Γu du .
                                                        j
                                × e      +




4.3 Copula-Based Approaches

The concept of a copula function allows to produce various multidimensional
probability distributions with prespeciﬁed univariate marginal laws.

Definition 4.2. A function C : [0, 1]n → [0, 1] is called a copula if the follow-
ing conditions are satisﬁed:
(i) C(1, . . . , 1, vi , 1, . . . , 1) = vi for any i and any vi ∈ [0, 1],
(ii) C is an n-dimensional cumulative distribution function (c.d.f.).

Let us give few examples of copulas:
• Product copula: Π(v1 , . . . , vn ) = Πi=1 n
                                               vi ,
• Gumbel copula: for θ ∈ [1, ∞) we set
                                             $                   %1/θ 
                                                   n
                  C(v1 , . . . , vn ) = exp −        (− ln vi )θ      ,
                                                            i=1
100       T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

•     Gaussian copula:
                                              −1                        
                                           n
                    C(v1 , . . . , vn ) = NΣ  N (v1 ), . . . , N −1 (vn ) ,
                n
      where NΣ    is the c.d.f for the n-variate central normal distribution with
      the linear correlation matrix Σ, and N −1 is the inverse of the c.d.f. for the
      univariate standard normal distribution.
•     t-copula:                                   −1                       
                                             n
                      C(v1 , . . . , vn ) = Θν,Σ  tν (v1 ), . . . , t−1
                                                                     ν (vn ) ,
               n
      where Θν,Σ    is the c.d.f for the n-variate t-distribution with ν degrees of
      freedom and with the linear correlation matrix Σ, and t−1    ν is the inverse
      of the c.d.f. for the univariate t-distribution with ν degrees of freedom.
The following theorem is the fundamental result underpinning the theory of
copulas.

Theorem 4.1. (Sklar) For any cumulative distribution function F on Rn
there exists a copula function C such that

                      F (x1 , . . . , xn ) = C(F1 (x1 ), . . . , Fn (xn ))

where Fi is the ith marginal cumulative distribution function. If, in addition,
F is continuous then C is unique.

Direct Application

In a direct application, we ﬁrst postulate a (univariate marginal) probabil-
ity distribution for each random variable τi . Let us denote it by Fi for i =
1, 2, . . . , n. Then, a suitable copula function C is chosen in order to introduce
an appropriate dependence structure of the random vector (τ1 , τ2 , . . . , τn ). Fi-
nally, the joint distribution of the random vector (τ1 , τ2 , . . . , τn ) is derived,
speciﬁcally,
                                                                                  
                  Q∗ {τi ≤ ti , i = 1, 2, . . . , n} = C F1 (t1 ), . . . , Fn (tn ) .

In the ﬁnance industry, the most commonly used are elliptical copulas (such as
the Gaussian copula and the t-copula). The direct approach has an apparent
drawback. It is essentially a static approach; it makes no account of changes
in credit ratings, and no conditioning on the ﬂow of information is present.
Let us mention, however, an interesting theoretical issue, namely, the study
of the eﬀect of a change of probability measures on the copula structure.

Indirect Application

A less straightforward application of copulas is based on an extension of the
canonical construction of conditionally independent default times. This can
                                          Modeling and Valuation of Credit Risk             101

be considered as the ﬁrst step towards a dynamic theory, since the techniques
of copulas is merged with the ﬂow of available information, in particular, the
information regarding the observations of defaults.
    Assume that the cumulative distribution function of (ξ1 , . . . , ξn ) in the
canonical construction (cf. Section 4.2) is given by an n-dimensional copula
C, and that the univariate marginal laws are uniform on [0, 1]. Similarly as in
Section 4.2, we postulate that (ξ1 , . . . , ξn ) are independent of F, and we set

                   τi (ω̃, ω̂) = inf { t ∈ R+ : Γti (ω̃) ≥ − ln ξi (ω̂) }.

Then:
• The case of default times conditionally independent with respect to F
   corresponds to the choice of the product copula Π. In this case, for
   t1 , . . . , tn ≤ T we have

                   Q∗ {τ1 > t1 , . . . , τn > tn | FT } = Π(Zt11 , . . . , Ztnn ),

    where we set Zti = e−Γt .
                                 i


•   In general, for t1 , . . . , tn ≤ T we obtain

                   Q∗ {τ1 > t1 , . . . , τn > tn | FT } = C(Zt11 , . . . , Ztnn ),

    where C is the copula used in the construction of τ1 , . . . , τn .

Survival Intensities

Schönbucher and Schubert (2001) show that for arbitrary s ≤ t on the set
{τ1 > s, . . . , τn > s} we have
                                       
                  ∗                      C(Zs1 , . . . , Zti , . . . , Zsn )
                Q {τi > t | Gs } = EQ∗                                       Fs .
                                            C(Zs1 , . . . , Zsn )
                                                                 dΓti
Consequently, assuming that the derivatives γti =                 dt    exist, the ith intensity
of survival equals, on the set {τ1 > t, . . . , τn > t},
                         ∂
                           C(Zt1 , . . . , Ztn )            ∂
          λit = γti Zti ∂vi 1                    = γti Zti     ln C(Zt1 , . . . , Ztn ),
                          C(Zt , . . . , Ztn )             ∂vi

where λit is understood as the limit:

             λit = lim h−1 Q∗ {t < τi ≤ t + h | Ft , τ1 > t, . . . , τn > t}.
                    h↓0

It appears that, in general, the ith intensity of survival jumps at time t, if the
j th entity defaults at time t for some j = i. In fact, it holds that
                                      ∂2
                                            C(Zt1 , . . . , Ztn )
                           i,j  i i ∂vi ∂vj
                          λt = γt Zt ∂        1             n
                                                                  ,
                                     ∂vj C(Zt , . . . , Zt )
102      T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

where
                      −1 ∗
           λi,j
            t = lim h   Q {t < τi ≤ t + h | Ft , τk > t, k = j, τj = t}.
                    h↓0

Schönbucher and Schubert (2001) also examine the intensities of survival
after the default times of some entities. Let us ﬁx s, and let ti ≤ s for
i = 1, 2, . . . , k < n, and Ti ≥ s for i = k + 1, k + 2, . . . , n. Then,
             
        Q∗ τi > Ti , i = k + 1, k + 2, . . . , n | Fs , τj = tj , j = 1, 2, . . . , k,
                                                                        
                              τi > s, i = k + 1, k + 2, . . . , n
                             k
                                                                                       
                    EQ∗ ∂v1∂...∂vk C(Zt11 , . . . , Ztkk , ZTk+1
                                                              k+1
                                                                  , . . . , Z n
                                                                              Tn
                                                                                 ) F s
                =            ∂k          1 , . . . , Z k , Z k+1 , . . . , Z n )
                                                                                         . (37)
                          ∂v1 ...∂vk C(Z t1            tk     s               s

Remarks. Jumps of intensities cannot be eﬃciently controlled, except for the
choice of C. In the approach described above, the dependence between the
default times is implicitly introduced through Γ i s, and explicitly introduced
by the choice of a copula C.

Simplified Version

Laurent and Gregory (2002) examine a simpliﬁed version of the framework of
Schönbu–cher and Schubert (2001). Namely, they assume that the reference
ﬁltration is trivial – that is, Ft = {Ω, ∅} for every t ∈ R+ . This implies, in
particular, that the default intensities γ i are deterministic functions, and
                                                            t
                          Q∗ {τi > t} = 1 − Fi (t) = e− 0 γu du .
                                                                 i




They obtain closed-form expressions for certain conditional intensities of de-
fault, by making speciﬁc assumptions regarding the choice of a copula C.

Example 4.2. This example describes the use of one-factor Gaussian copula
(Bank of International Settlements (BIS) standard). Let
                                      (
                          Xi = ρi V + 1 − ρ2i V̄i ,

where V, V̄i , i = 1, 2, . . . , n, are independent, standard Gaussian variables
under the probability measure Q∗ . Deﬁne the copula function C as

                C(v1 , . . . , vn ) = Q∗ {Xi < N −1 (vi ), i = 1, 2, . . . , n}.

Then, a special case of formula (37) takes the form (for i > 1)
                                                                 
                 Q∗ τi ≥ Ti | τ1 = s, τj ≥ s, j = 1, 2, . . . , n
                                      Modeling and Valuation of Credit Risk        103
                                     √
                     ∞ )n           ρj   1−ρ21 u+ρj ρ1 x1 −xj
                    −∞      j=2 N
                                              √                  n(u) du
                                                1−ρ2j
                =                    √
                     ∞ )n           ρj   1−ρ21 u+ρj ρ1 y1 −yj
                     −∞     j=2 N
                                              √                  n(u) du
                                                1−ρ2j

with xj = yj = N −1 (Fj (s)) for j = i and

                      xi = N −1 (Fi (Ti )),   yi = N −1 (Fi (s)),

where n is the univariate standard normal density function.

4.4 Jarrow and Yu Model

Jarrow and Yu (2001) approach can be considered as another step towards a
dynamic theory of dependence between default times. For a given ﬁnite family
of reference credit names, Jarrow and Yu (2001) propose to make a distinction
between the primary ﬁrms and the secondary ﬁrms.
At the intuitive level:
• The class of primary ﬁrms encompasses those entities whose probabilities
    of default are inﬂuenced by macroeconomic conditions, but not by the
    credit risk of counterparties. The pricing of bonds issued by primary ﬁrms
    can be done through the standard intensity-based methodology.
• It suﬃces to focus on securities issued by secondary ﬁrms, that is, ﬁrms for
    which the intensity of default depends on the status of some other ﬁrms.
   Formally, the construction is based on the assumption of asymmetric in-
formation. Unilateral dependence is not possible in the case of complete (i.e.,
symmetric) information.

Construction and Properties of the Model

Let {1, . . . , n} represent the set of all ﬁrms, and let F be the reference ﬁltration.
We postulate that:
• For any ﬁrm from the set {1, . . . , k} of primary ﬁrms, the ‘default intensity’
   depends only on F.
• The ‘default intensity’ of each ﬁrm belonging to the set {k + 1, . . . , n} of
   secondary ﬁrms may depend not only on the ﬁltration F, but also on the
   status (default or no-default) of the primary ﬁrms.

Construction of Default Times τ1 , . . . , τn

First step. We ﬁrst model default times of primary ﬁrms. To this end, we
assume that we are given a family of F-adapted ‘intensity processes’ λ1 , . . . , λk
and we produce a collection τ1 , . . . , τk of F-conditionally independent random
times through the canonical method:
104       T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

                                                  t                      
                        τi = inf t ∈ R+ :              λiu du ≥ − ln ξi
                                               0

where ξi , i = 1, . . . , k are mutually independent identically distributed ran-
dom variables with uniform law on [0, 1] under the martingale measure Q∗ .
Second step. We now construct default times of secondary ﬁrms. We assume
that:
•     The probability space (Ω, G, Q∗ ) is large enough to support a family ξi , i =
      k + 1, . . . , n of mutually independent random variables, with uniform law
      on [0, 1].
•     These random variables are independent not only of the ﬁltration F, but
      also of the default times τ1 , . . . , τk of primary ﬁrms already constructed in
      the ﬁrst step.
The default times τi , i = k+1, . . . , n are also deﬁned by means of the standard
formula:
                                             t                 
                   τi = inf t ∈ R+ :            λiu du ≥ − ln ξi .
                                            0

However, the ‘intensity processes’ λi for i = k + 1, . . . , n are now given by the
following expression:
                                      k
                          λit = µit +    νti,l 11{τl ≤t} ,
                                         l=1

where µ and ν are F-adapted stochastic processes. If the default of the j th
          i       i,l

primary ﬁrm does not aﬀect the default intensity of the ith secondary ﬁrm,
we set ν i,j ≡ 0.

Main Features

Let G = F ∨ H1 ∨ · · · ∨ Hn stand for the enlarged ﬁltration and let F̂ =
F ∨ Hk+1 ∨ · · · ∨ Hn be the ﬁltration generated by the reference ﬁltration F
and the observations of defaults of secondary ﬁrms. Then:
•     The default times τ1 , . . . , τk of primary ﬁrms are conditionally independent
      with respect to F.
•     The default times τ1 , . . . , τk of primary ﬁrms are no longer conditionally
      independent when we replace the ﬁltration F by F̂.
•     In general, the default intensity of a primary ﬁrm with respect to the
      ﬁltration F̂ diﬀers from the intensity λi with respect to F.
    We conclude that defaults of primary ﬁrms are also ‘dependent’ of defaults
of secondary ﬁrms.
                                     Modeling and Valuation of Credit Risk   105

Case of Two Firms

To illustrate the present model, we now consider only two ﬁrms, A and B say,
and we postulate that A is a primary ﬁrm, and B is a secondary ﬁrm. Let the
constant process λ1t ≡ λ1 represent the F-intensity of default for ﬁrm A, so
that
                                    t                        
                τ1 = inf t ∈ R+ :      λ1u du = λ1 t ≥ − ln ξ1 ,
                                        0
where ξ1 is a random variable independent of F, with the uniform law on [0, 1].
For the second ﬁrm, the ‘intensity’ of default is assumed to satisfy

                           λ2t = λ2 11{τ1 >t} + α2 11{τ1 ≤t}

for some positive constants λ2 and α2 , and thus
                                               t                      
                      τ2 = inf t ∈ R+ :             λ2u du ≥ − ln ξ2
                                            0

where ξ2 is a random variable with the uniform law, independent of F, and
such that ξ1 and ξ2 are mutually independent. Then the following properties
hold:
• λ1 is the intensity of τ1 with respect to F,
• λ2 is the intensity of τ2 with respect to F ∨ H1 ,
• λ1 is not the intensity of τ1 with respect to F ∨ H2 .

Bond Valuation

The following result was established in Jarrow and Yu (2001), who assumed
the fractional recovery of Treasury value scheme with the ﬁxed recovery rates
δ1 and δ2 . Let λ = λ1 + λ2 . For λ = α2 , we denote
                                   1  −α2 u                   
              cλ1 ,λ2 ,α2 (u) =        λ1 e    + (λ2 − α2 )e−λu .
                                λ − α2
For λ = α2 , we set                                
                          cλ1 ,λ2 ,α2 (u) = 1 + λ1 u e−λu .
Proposition 4.5. For the bond issued by the primary ﬁrm we have
                                                                   
           D1 (t, T ) = B(t, T ) δ1 + (1 − δ1 )e−λ1 (T −t) 11{τ1 >t} .

The value of a zero-coupon bond issued by the secondary ﬁrm equals, on the
set {τ1 > t}, that is, prior to default of the primary ﬁrm
                                                                          
           D2 (t, T ) = B(t, T ) δ2 + (1 − δ2 )cλ1 ,λ2 ,α2 (T − t)11{τ2 >t} .

On the set {τ1 ≤ t}, that is, after default of the primary ﬁrm, it equals
                                                                     
             D2 (t, T ) = B(t, T ) δ2 + (1 − δ2 )e−α2 (T −t) 11{τ2 >t} .
106    T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Special Case: Zero Recovery

Assume that λ1 + λ2 − α2 = 0 and the bond is subject to the zero recovery
scheme. For the sake of brevity, we set r = 0 so that B(t, T ) = 1 for t ≤ T.
Under the present assumptions:

                         D2 (t, T ) = Q∗ {τ2 > T | Ht1 ∨ Ht2 }

and the general formula yields
                                                Q∗ {τ2 > T | Ht1 }
                       D2 (t, T ) = 11{τ2 >t}                      .
                                                Q∗ {τ2 > t | Ht1 }
                  t
If we set Λ2t =      2
                  0 λu du then
                                                       2   2
                       D2 (t, T ) = 11{τ2 >t} EQ∗ (eΛt −ΛT | Ht1 ).

Finally, we have the following explicit result.
Corollary 4.1. If δ2 = 0 then D2 (t, T ) = 0 on {τ2 ≤ t}. On the set {τ2 > t}
we have

           D2 (t, T ) = 11{τ1 ≤t} e−α2 (T −t)
                           1  −α2 (T −t)                          
            +11{τ1 >t}            λ1 e        + (λ2 − α2 )e−λ(T −t) .
                        λ − α2

4.5 Extension of the Jarrow and Yu Model

We shall now argue that the assumption that some ﬁrms are primary while
other ﬁrms are secondary is not relevant. For simplicity of presentation, we
assume that:
• We have n = 2, that is, we consider two ﬁrms only.
• The interest rate r is zero, so that B(t, T ) = 1 for every t ≤ T .
• The reference ﬁltration F is trivial.
• Corporate bonds are subject to the zero recovery scheme.
   Since the situation is symmetric, it suﬃces to analyze a bond issued by
the ﬁrst ﬁrm. By deﬁnition, the price of this bond equals

                         D1 (t, T ) = Q∗ {τ1 > T | Ht1 ∨ Ht2 }.

For the sake of comparison, we shall also evaluate the following values, which
are based on partial observations,

                            D̃1 (t, T ) = Q∗ {τ1 > T | Ht2 }

and
                            D̂1 (t, T ) = Q∗ {τ1 > T | Ht1 }.
                                   Modeling and Valuation of Credit Risk   107

Kusuoka’s Construction

We follow here Kusuoka (1999). Under the original probability measure Q the
random times τi , i = 1, 2 are assumed to be mutually independent random
variables with exponential laws with parameters λ1 and λ2 , respectively.
Girsanov’s theorem. For a ﬁxed T > 0, we deﬁne a probability measure Q∗
equivalent to Q on (Ω, G) by setting

                              dQ∗
                                  = ηT ,              Q-a.s.
                              dQ

where the Radon-Nikodým density process ηt , t ∈ [0, T ], satisﬁes
                                   2
                                   
                        ηt = 1 +                      ηu− κiu dMui
                                   i=1        ]0,t]


where in turn
                                                     t∧τi
                            Mti = Hti −                     λi du
                                                 0

Here Hti = 11{τi ≤t} and the processes κ1 and κ2 are given by
                              α                       α    
                                1                         2
              κ1t = 11{τ2 <t}     − 1 , κ2t = 11{τ1 <t}     −1 .
                               λ1                        λ2

It can be checked that the martingale intensities of τ1 and τ2 under Q∗ are

                        λ1t = λ1 11{τ2 >t} + α1 11{τ2 ≤t} ,
                        λ2t = λ2 11{τ1 >t} + α2 11{τ1 ≤t} .

                                                         t
Main features. We focus on τ1 and we denote Λ1t = 0 λ1u du. Let us make
a few observations. First, the process λ1 is H2 -predictable, and the process
                                       t∧τ1
                   Mt1 = Ht1 −                λ1u du = Ht1 − Λ1t∧τ1
                                   0

is a G-martingale under Q∗ . Next, the process λ1 is not the intensity of the
default time τ1 with respect to H2 under Q∗ . Indeed, in general, we have
                                                      1 1         
             Q∗ {τ1 > s | Ht1 ∨ Ht2 } = 11{τ1 >t} EQ∗ eΛt −Λs | Ht2 .

Finally, the process λ1 represents the intensity of the default time τ1 with
respect to H2 under a probability measure Q1 equivalent to Q, where

                              dQ1
                                  = η̃T ,             Q-a.s.
                              dQ
108    T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

and the Radon-Nikodým density process η̃t , t ∈ [0, T ], satisﬁes

                              η̃t = 1 +             η̃u− κ2u dMu2 .
                                            ]0,t]

For s > t we have
                                                        1 1         
               Q1 {τ1 > s | Ht1 ∨ Ht2 } = 11{τ1 >t} EQ1 eΛt −Λs | Ft
but also
                 Q∗ {τ1 > s | Ht1 ∨ Ht2 } = Q1 {τ1 > s | Ht1 ∨ Ht2 }.

Interpretation of Intensities

Recall that the processes λ1 and λ2 have jumps if αi = λi . The following
result shows that the intensities λ1 and λ2 are ‘local intensities’ of default
with respect to the information available at time t. It shows also that the
model can in fact be reformulated as a two-dimensional Markov chain (see
Lando (1998b)).
Proposition 4.6. For i = 1, 2 and every t ∈ R+ we have
                 λi = lim h−1 Q∗ {t < τi ≤ t + h | τ1 > t, τ2 > t}.        (38)
                       h↓0

Moreover:
                α1 = lim h−1 Q∗ {t < τ1 ≤ t + h | τ1 > t, τ2 ≤ t}.
                       h↓0

and
                α2 = lim h−1 Q∗ {t < τ2 ≤ t + h | τ2 > t, τ1 ≤ t}.
                       h↓0


Bond Valuation

Proposition 4.7. The price D1 (t, T ) on {τ1 > t} equals
           D1 (t, T ) = 11{τ2 ≤t} e−α1 (T −t)
                           1  −α1 (T −t)                          
            +11{τ2 >t}             λ2 e       + (λ1 − α1 )e−λ(T −t) .
                        λ − α1
Furthermore
                                           (λ − α2 )λ2 e−α1 (T −τ2 )
              D̃1 (t, T ) = 11{τ2 ≤t}
                                        λ1 α2 e(λ−α2 )τ2 + λ(λ2 − α2 )
                             λ − α2 (λ1 − α1 )e−λ(T −t) + λ2 e−α1 (T −t)
               +11{τ2 >t}
                             λ − α1      λ1 e−(λ−α2 )t + λ2 − α2
and
                                           λ2 e−α1 T + (λ1 − α1 )e−λT
                 D̂1 (t, T ) = 11{τ1 >t}                              .
                                           λ2 e−α1 t + (λ1 − α1 )e−λt
                                       Modeling and Valuation of Credit Risk    109

Observe that:
• The formula for D1 (t, T ) coincides with the Jarrow and Yu formula for the
  bond issued by a secondary ﬁrm.
• The processes D1 (t, T ) and D̂1 (t, T ) represent ex-dividend values of the
  bond, and thus they vanish after default time τ1 .
• The latter remark does not apply to the process D̃1 (t, T ).

4.6 Dependent Intensities of Credit Migrations

We present here a contribution to the dynamic theory of dependence between
credit events. Speciﬁcally, we discuss here an approach towards modeling of
dependent credit migrations based on the theory of continuous-time condi-
tional Markov chains.6 The goal is to extend the previous analysis to the case
of multiple credit ratings. Assume that the current ﬁnancial standing of the
ith ﬁrm is reﬂected through the credit ranking process C i with values in a
ﬁnite set of credit grades Ki = {1, . . . , ki }. For simplicity, we assume that the
reference ﬁltration F is trivial, and we consider the case of two ﬁrms.
                  i
    Let Fi = FC , i = 1, 2, denote the ﬁltration generated by C i and let
G = F1 ∨ F2 . We examine the two following Markovian properties under the
martingale measure Q∗ . The Markov property of C = (C 1 , C 2 ):

         Q∗ {Cs1 = k, Cs2 = l | Gt } = Q∗ {Cs1 = k, Cs2 = l | Ct1 , Ct2 }.

The Fj -conditional Markov property of C i for i = j:

                   Q∗ {Cs1 = k | Gt ) = Q∗ {Cs1 = k | σ(Ct1 ) ∨ Ft2 },

                   Q∗ {Cs2 = l | Gt } = Q∗ {Cs2 = l | σ(Ct2 ) ∨ Ft1 }.

Extension of Kusuoka’s Construction

Assume that k1 = k2 = 3 (three rating grades). We consider the two inde-
pendent Markov chains C i , i = 1, 2 deﬁned on (Ω, G, Q) and taking values in
K = {1, 2, 3} with generators:
                           i                             
                            −λ12 − λi13     λi12     λi13
                     Λi =      λi21    −λi21 − λi23 λi23 
                                 0           0        0

The state k = 3 is the only absorbing state for each chain. We assume that
(C01 , C02 ) = (1, 1). In addition, we are given the following matrices:
6
    We refer to Bielecki and Rutkowski (2002) for information regarding conditional
    Markov chains.
110    T.R. Bielecki, M. Jeanblanc, and M. Rutkowski
                                                            
                               i|l     i|l       i|l     i|l
                             −λ12 − λ13       λ12       λ13
                                                    i|l i|l 
                    Λi|l =     λ21
                                   i|l
                                           −λ21 − λ23 λ23 
                                             i|l

                                   0             0       0

    for i = 1, 2 and l = 2, 3. It should be observed that formally Λi = Λi|1
                                                    i|l
for i = 1, 2. In general, the intensities λikm and λkm may follow F-predictable
stochastic processes.
Auxiliary Processes and Associated Martingales
We deﬁne a probability measure Q∗ equivalent to Q. To this end, we introduce
auxiliary processes κikm , by setting
                                   3
                                               ,          !
                                      j
                                                   i|l
                                                 λkm
                       i
                      κkm (t) =       Hkl (t−)         −1
                                                 λikm
                                  l=2

for i = 1, 2, j = i, k = 1, 2, m = 1, 2, 3, k = m, where for j = 1, 2 and
k = 1, 2, 3,
                           Hjkl (t) = Hlj (t)Hkj (t)
with Hkj (t) = 11{C j =k} . We also deﬁne, for i = 1, 2 and k = m, the transition
                   t
counting process                      
                             i
                           Hkm (t) =       Hki (u−)Hm i
                                                        (u).
                                    0<u≤t
                                     i
For i = 1, 2 and k = m, the process Mkm given by the expression
                                                  t
                     i
                    Mkm        i
                        (t) = Hkm (t) −               λikm Hki (u) du
                                              0

is known to follow an Fi -martingale under Q, and thus also a G-martingale
under Q where G = F1 ∨ F2 .
Equivalent Probability Measure
We deﬁne a strictly positive martingale under Q:
                       2
                                2
                                       3
                                        
            ηt = 1 +                                  ηu− κikm (u) dMkm
                                                                     i
                                                                        (u).
                       i=1   ]0,t] k=1 m=1,m=k

The process η plays the role of the Radon-Nikodým density process. For any
ﬁxed, but otherwise arbitrary, date T we deﬁne the probability measure Q∗
equivalent to Q by setting:
                                 dQ∗
                                     = ηT ,   Q-a.s.
                                 dQ
The following result describes the properties of migration processes C 1 and
C 2 under Q∗ . Recall that under the present convention: λikm = λkm .
                                                                 i|1
                                    Modeling and Valuation of Credit Risk        111

Proposition 4.8. For each i = j the migration process C i follows an Fj -
conditional Markov chain under Q∗ . For any k = m the Fj -conditional tran-
sition intensity of C i under Q∗ equals:
                                                            3
                                                            
           λ∗i                               j                            i|l
                           i       i     i
            km (t) = (1 + κkm (t))λkm = λkm H1 (t) +              Hlj (t)λkm .
                                                            l=2

Conditional Markov Property
The Fj -conditional Markov property of C i under the equivalent probability
measure Q∗ established in Proposition 4.8 is a consequence of:
• The fact that the Radon-Nikodým density process η depends only on C =
   (C 1 , C 2 ).
• The fact that the migration process C has the Markov property under the
   original probability Q.
   Let us summarize the properties of our model under Q∗ . First, for i = 1,
and j = i, the process λ∗i
                        km (t) is the corresponding F -martingale intensity. In
                                                     j
                               ∗i
other words, the processes Mkm deﬁned as
                                               t
                    ∗i
                   Mkm        i
                       (t) = Hkm (t) −             λ∗i     i
                                                    km (u)Hk (u) du
                                           0

for k = m are G-martingales under Q∗ . Second, as we shall see soon, the
intensities λ∗i
             km have the natural interpretation as the ‘local intensities’ of
credit migrations (in the special case of a trivial reference ﬁltration C is a
Markov chain under Q∗ ).
Interpretation of Intensities
Let us explain the intuitive meaning of intensity parameters. For original
intensities we have
                λ1kk = lim h−1 Q{Ct+h
                                   1
                                       = k  | Ct1 = k, Ct2 = 1},
                        h↓0

but also for l = 2, 3
                λ1kk = lim h−1 Q∗ {Ct+h
                                     1
                                         = k  | Ct1 = k, Ct2 = l},
                        h↓0

The modiﬁed intensities satisfy, for l = 2, 3,
                λ1;l
                 kk = lim h
                             −1 ∗  1
                               Q {Ct+h = k  | Ct1 = k, Ct2 = l}.
                        h↓0

Let us recall that model’s inputs are: the original generators Λ1 , Λ2 , and the
modiﬁed matrices:
                           i;l                          
                            −λ12 − λi;l
                                     13     λi;l
                                              12    λi;l
                                                      13
                     Λi;l     λi;l
                                21      −λi;l    i;l i;l 
                                           21 − λ23 λ23
                                0             0      0
for i = 1, 2 and l = 2, 3.
112     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

First-to-Change Swap

Let C = (C 1 , . . . , C n ). We assume that the payoﬀ occurs at the ﬁrst change
of the credit rating of the ﬁrm 1 or 2. The payoﬀ is digital, speciﬁcally, if we
set τ = τ1 ∧ τ2 then the payoﬀ at time τ equals

                       Zτ = K1 11{τ =τ1 ≤T } + K2 11{τ =τ2 ≤T } .

for some constant K1 , K2 . Let us summarize the basic steps of the valuation
procedure:
• Introduce an auxiliary probability measure Q1,2 equivalent to Q∗ .
• Verify that any martingale under Q1,2 with respect to G1,2 = F∨H3 ∨· · ·∨
    Hn is also a martingale under Q1,2 with respect to G = F ∨ H1 ∨ · · · ∨ Hn .
• Use the standard formula to ﬁnd the G1,2 -conditional laws of τ1 and τ2
    under Q∗ , through conditional expectations with respect to Q1,2 .
• Use the fact that τ1 and τ2 are G1,2 -conditionally independent under Q∗
    in order to value the swap.
We argue that in some cases a high-dimensional (unconditional) expectation
can be eﬃciently evaluated as a low-dimensional conditional expectation under
an equivalent probability measure.

4.7 Dynamics of Dependent Credit Ratings

Let us denote by Ct = (Ct1 , . . . , Ctn ) the vector of credit ratings at time t of all
relevant obligors (credit names). Some authors focus directly on speciﬁcation
of dynamics of the process C. Note that the assumption that the state space
for C is ﬁnite is not always imposed.

Continuous Time Setup

Indirect approach. Structural/factor models (KMV, CreditMetrics, etc.)
are based on the assumption that Ct = Ψ (ξt ), where ξ is a (multivariate) factor
process (representing, for instance, the values of the ﬁrms). Dynamics of ξ are
typically modeled as an Ito process. Note that ξ involves both idiosyncratic
risks and systemic risks.
Direct approach. Models proposed by Hull and White (2001), Douady and
Jeanblanc (2002) and Albanese et al. (2003) postulate that the credit ratings
process is a multi-dimensional diﬀusion, speciﬁcally,

                               dCt = µt dt + Σt dWt .

The dependence between rating migrations is introduced here through the
judicious choice of the diﬀusion matrix Σt .
                                  Modeling and Valuation of Credit Risk    113

Discrete Time Setup

Discrete-time Markov models of credit migrations were studied by Kijima et
al. (2002) and Bielecki (2002). Credit ratings are modeled as
                       n
                      Ct+1 = Θ(Ctn , Zt+1
                                      n      n
                                          , Bt+1 , Yt+1 ) =
                                       
                 θ Ctn + Zt+1
                          n      n
                              + Bt+1 Yt+1 , ifCtn ≤ K − 1,
                                                                          (39)
                 K,                         ifCtn = K,
where Ztn and Btn represent idiosyncratic risks, and Yt represents systemic
risks, and where θ(k) is a cut-oﬀ function.
    Main practical issues arising in the context of a model’s implementation
are: the estimation and calibration of the model, the structure of the pric-
ing measure, the eﬀect of change of measures on the dependence structure.
As soon as the model is estimated and calibrated, it can be easily used for
risk management purposes, as well as for pricing purposes (via Monte Carlo
simulation).

4.8 Defaultable Term Structure

It this section, we shall summarize the model of defaultable term structure of
interest rates developed by Bielecki and Rutkowski (2000) and Schönbucher
(2000a), and further generalized by Eberlein and Özkan (2003). Essentially,
the model extends the Heath-Jarrow-Morton (HJM) model of term structure
of default-free rates to the case of defaultable bonds. Although we do not
consider here dependence between term structures of several corporate bonds,
the approach presented here lends itself for such dependence analysis (see
Section 13.2.7 in Bielecki and Rutkowski (2002)).

Standing Assumptions

Standard intensity-based models (as, for instance, in Jarrow and Turnbull
(1995) or Jarrow et al. (1997)) rely on the following assumptions:
• Existence of the martingale measure Q∗ is postulated.
• Relationship between the statistical probability P and the risk-neutral
   probability Q∗ is derived via calibration.
• Credit migrations process is modeled as a Markov chain.
• Market and credit risks are separated (independent).
   The HJM-type model of defaultable term structure with multiple rat-
ings was proposed independently by Bielecki and Rutkowski (2000) and
Schönbucher (2000a). The main features of this approach are:
• The model formulates suﬃcient consistency conditions that tie together
   credit spreads and recovery rates in order to construct a risk-neutral prob-
   ability Q∗ and the corresponding risk-neutral intensities of credit events.
114       T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

•     Statistical probability P and the risk-neutral probability Q∗ are connected
      via the market price of interest rate risk and the market price of credit
      risk.
•     Market and credit risks are combined in a ﬂexible way.
Term Structure of Credit Spreads
Suppose that we are given a ﬁltered probability space (Ω, F, P) endowed with
a d-dimensional standard Brownian motion W. We assume that the reference
ﬁltration satisﬁes F = FW . For any ﬁxed maturity 0 < T ≤ T ∗ , the price of a
zero-coupon Treasury bond equals
                                         T            
                      B(t, T ) = exp −      f (t, u) du ,
                                                        t
where the default-free instantaneous forward rate f (t, T ) process is subject to
the standard (HJM) assumption.
(HJM) Dynamics of the instantaneous forward rate f (t, T ) are given by the
expression
                                              t                         t
               f (t, T ) = f (0, T ) +            α(u, T ) du +             σ(u, T ) dWu
                                          0                         0
                                         ∗
for some function f (0, ·) : [0, T ] → R , and some F-adapted processes α :
A × Ω → R, σ : A × Ω → Rd , where A = {(u, t) | 0 ≤ u ≤ t ≤ T ∗ }.
Credit Classes
Suppose there are K ≥ 2 credit rating classes, where the K th class corresponds
to the default-free bond. Essentially, credit rating classes are distinguished by
the yields on the corresponding bonds. In other words, for any ﬁxed maturity
0 < T ≤ T ∗ , the defaultable instantaneous forward rate gi (t, T ) corresponds
to the rating class i = 1, . . . , K − 1. We assume that:
(HJMi ) Dynamics of the instantaneous defaultable forward rates gi (t, T ) are
given by
                                             t                          t
             gi (t, T ) = gi (0, T ) +            αi (u, T ) du +           σi (u, T ) dWu
                                         0                          0
for some deterministic functions gi (0, ·) : [0, T ∗ ] → R , and some F-adapted
processes αi : A × Ω → R, σi : A × Ω → Rd .
Credit Spreads
It is natural (although not necessary for further developments) to assume that
                gK−1 (t, T ) > gK−2 (t, T ) > · · · > g1 (t, T ) > f (t, T )
for every t ≤ T.
Definition 4.3. For every i = 1, 2, . . . , K − 1, the ith forward credit spread
equals si (·, T ) = gi (·, T ) − f (·, T ).
                                              Modeling and Valuation of Credit Risk                   115

Martingale Measure P∗

It is known from the HJM theory that the following condition (M) is suﬃcient
to exclude arbitrage across default-free bonds for all maturities T ≤ T ∗ and
the savings account.
Condition (M) There exists an F-adapted Rd -valued process β such that
                                    T∗
                                                           1           T∗               
               EP       exp                βu dWu −                         |βu |2 du       =1
                                  0                        2       0

and, for any maturity T ≤ T ∗ , we have

                         α∗ (t, T ) = 12 |σ ∗ (t, T )|2 − σ ∗ (t, T )βt

where
                                                       T
                                  α∗ (t, T ) =             α(t, u) du
                                                   t
                                                      T
                                  σ ∗ (t, T ) =            σ(t, u) du.
                                                  t

  Let β be some process satisfying Condition (M). Then the probability
measure P∗ , given by the formula

            dP∗                      T∗
                                                    1              T∗                
                = exp                      βu dWu −                         |βu |2 du ,     P-a.s.,
            dP                    0                 2          0

is a martingale measure for the default-free term structure. We will see that for
any T the price B(t, T ) is a martingale under the measure P∗ , when discounted
with the savings account Bt .

Zero-Coupon Bonds

The price of the T -maturity default-free zero-coupon bond is given by the
equality
                                         T            
                     B(t, T ) = exp −       f (t, u) du .
                                                           t
Formally, such Treasury bond corresponds to credit class K. Similarly, the
‘conditional value’ of T -maturity defaultable zero-coupon bond belonging at
time t to the credit class i = 1, 2, . . . , K − 1, equals
                                                              T               
                         Di (t, T ) = exp −                        gi (t, u) du .
                                                           t

We consider discounted price processes

               Z(t, T ) = Bt−1 B(t, T ),              Zi (t, T ) = Bt−1 Di (t, T ),
116     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

where B is the savings account
                                                    t              
                             Bt = exp                    f (u, u) du .
                                                 0

Let us deﬁne a Brownian motion W ∗ under P∗ by setting
                                            t
                      Wt∗ = Wt −                βu du,        ∀ t ∈ [0, T ∗ ].
                                        0

Conditional Dynamics of the Bond Price

Lemma 4.2. Under the martingale measure P∗ , for any ﬁxed T ≤ T ∗ , the
discounted price processes Z(t, T ) and Zi (t, T ) satisfy

                          dZ(t, T ) = Z(t, T )b(t, T ) dWt∗,

where b(t, T ) = −σ ∗ (t, T ), and
                                                                      
                  dZi (t, T ) = Zi (t, T ) λi (t) dt + bi (t, T ) dWt∗

where
                       λi (t) = ai (t, T ) − f (t, t) + bi (t, T )βt
and
                   ai (t, T ) = gi (t, t) − α∗i (t, T ) + 12 |σi∗ (t, T )|2
                                 bi (t, T ) = −σi∗ (t, T ).
   Observe that usually the process Zi (t, T ) is not a martingale under the
martingale measure P∗ . This feature is related to the fact that it does not
represent the (discounted) price of a tradeable security.

Credit Migration Process

Recall that we assumed that the set of rating classes is K = {1, . . . , K}, where
the class K corresponds to default. The migration process C is constructed in
Bielecki and Rutkowski (2000a) as a (nonhomogeneous) conditionally Markov
process on K, with the state K as the unique absorbing state for this process.
The process C is constructed on some enlarged probability space (Ω ∗ , G, Q∗ ),
where the probability measure Q∗ is the extended martingale measure. The
reference ﬁltration F is contained in the extended ﬁltration G. For simplicity
of presentation, we summarize the results for the case K = 3.
    Given some non-negative and F-adapted processes λ1,2 (t), λ1,3 (t), λ2,1 (t)
and λ2,3 (t), a migration process C is constructed as a conditional Markov
process with the conditional intensity matrix (inﬁnitesimal generator)
                                                           
                                 λ1,1 (t) λ1,2 (t) λ1,3 (t)
                        Λ(t) = λ2,1 (t) λ2,2 (t) λ2,3 (t)
                                    0        0        0
                                       Modeling and Valuation of Credit Risk         117
                    
where λi,i (t) = − j=i λi,j (t) for i = 1, 2.
   The conditional Markov property (with respect to the reference ﬁltration
F) means that if we denote by FtC the σ-ﬁeld generated by C up to time t
then for arbitrary s ≥ t and i, j ∈ K we have
                                                            
          Q∗ Ct+s = i | Ft ∨ FtC = Q∗ Ct+s = i | Ft ∨ {Ct = j} .

The formula above provides the risk-neutral conditional probability that the
defaultable bond is in class i at time t + s, given that it was in the credit class
Ct at time t. For any date t, we denote by Ĉt the previous bond’s rating; we
shall need this notation later.
   Finally, the default time τ is introduced by setting

                             τ = inf {t ∈ R+ : Ct = 3 }.

   Let Hi (t) = 11{Ct =i} for i = 1, 2, and let Hi,j (t) represent the number of
transitions from i to j by C over the time interval (0, t]. It can be shown that
the process
                                           t
             Mi,j (t) = Hi,j (t) −             λi,j (s)Hi (s) ds,   ∀ t ∈ [0, T ],
                                       0
for i = 1, 2 and j = i, is a martingale on the enlarged probability space
(Ω ∗ , G, Q∗ ). Let us emphasize that due to the judicious construction of the
migration process C, appropriate version of the hypotheses (H.1)-(H.3) remain
valid here.

Defaultable Term Structure

We maintain the simpliﬁed framework with K = 3. We assume the fractional
recovery of Treasury value scheme. To be more speciﬁc, to each credit rating
i = 1, . . . , K − 1, we associate the recovery rate δi ∈ [0, 1), where δi is the
fraction of par paid at bond’s maturity, if a bond belonging to the ith class
defaults prior to its maturity. Thus, the cash ﬂow at maturity is

                             X = 11{τ >T } + δĈτ 11{τ ≤T } .

In order to provide the model with arbitrage free properties, Bielecki and
Rutkowski (2000) postulate that the risk-neutral intensities of credit migra-
tions λ1,2 (t), λ1,3 (t), λ2,1 (t) and λ2,3 (t) are speciﬁed by the no-arbitrage con-
dition (also termed the consistency condition):
                                                                            
             λ1,2 (t) Z2 (t, T −)Z1 (t, T ) + λ1,3 (t) δ1 Z(t, T ) − Z1 (t, T )
                              +λ1 (t)Z1 (t, T ) = 0,
                                                                           
            λ2,1 (t) Z1 (t, T −
                              )Ẑ2 (t, T ) + λ2,3 (t) δ2 Z(t, T ) − Z2 (t, T )
                             +λ2 (t)Z2 (t, T ) = 0.
118    T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

Martingale Dynamics of a Defaultable Bond

First, we introduce the process Ẑ(t, T ) as a solution to the following SDE
                                                   
                dẐ(t, T ) = Z2 (t, T ) − Z1 (t, T ) dM1,2 (t)
                                           
                  + Z1 (t, T ) − Z2 (t, T ) dM2,1 (t)
                                             
                  + δ1 Z(t, T ) − Z1 (t, T ) dM1,3 (t)
                                             
                  + δ2 Z(t, T ) − Z2 (t, T ) dM2,3 (t)
                  + H1 (t)Z1 (t, T )b1 (t, T ) dWt∗
                  + H2 (t)Z2 (t, T )b2 (t, T ) dWt∗
                                               
                  + δ1 H1,3 (t) + δ2 H2,3 (t) Z(t, T )b(t, T ) dWt∗ ,

with the initial condition Ẑ(0, T ) = H1 (0)Z1 (0, T ) + H2 (0)Z2 (0, T ).
    It appears that the process Ẑ(t, T ) follows a martingale on (Ω ∗ , G, Q∗ ),
so that it is justiﬁed to refer to Q∗ as the extended martingale measure. The
proof of the next result employs the no-arbitrage condition.

Lemma 4.3. For any maturity T ≤ T ∗ and for every t ∈ [0, T ] we have

              Ẑ(t, T ) = 11{Ct =3} ZCt (t, T ) + 11{Ct =3} δĈt Z(t, T )

   Next, we deﬁne the price process of a T -maturity defaultable zero-coupon
bond by setting
                           DC (t, T ) = Bt Ẑ(t, T )
for any t ∈ [0, T ]. In view of Lemma 4.3, we have that

             DC (t, T ) = 11{Ct =3} DCt (t, T ) + 11{Ct =3} δĈt B(t, T ).

The defaultable bond price DC (t, T ) satisﬁes the following properties:
• The process DC (t, T ) is a G-martingale under Q∗ , when discounted by the
   savings account.
• In contrast to the ‘conditional price’ Di (t, T ), the process DC (t, T ) ad-
   mits discontinuities. Jumps are directly associated with changes in credit
   quality (ratings migrations).
• The process DC (t, T ) represents the price of a tradeable security: the cor-
   porate zero-coupon bond of maturity T.

Risk-Neutral Representations

Recall that δi ∈ [0, 1) is the recovery rate for a bond which was in the ith
rating class just prior to default.

Proposition 4.9. The price process DC (t, T ) of a T -maturity defaultable
zero-coupon bond equals
                                            Modeling and Valuation of Credit Risk          119
                                                                  T                   
             DC (t, T ) = 11{Ct =3} B(t, T ) exp −                    sCt (t, u) du
                                                               t
                              + 11{Ct =3} δĈt B(t, T )

where si (t, u) = gi (t, u) − f (t, u) is the ith credit spread.

Proposition 4.10. The price process DC (t, T ) satisﬁes the risk-neutral val-
uation formula
                                                                      
          DC (t, T ) = Bt EQ∗ δĈT BT−1 11{τ ≤T } + BT−1 11{τ >T } | Gt .

It is also clear that
                                                                      
              DC (t, T ) = B(t, T ) EQT δĈT 11{τ ≤T } + 11{τ >T } | Gt ,

where QT stands for the T -forward measure associated with the extended
martingale measure Q∗ .
   Let us end this section by mentioning that Eberlein and Özkan (2003) have
generalized the model presented above to the case of term structures driven
by Lévy processes.

Premia for Interest Rate and Credit Event Risks

We shall now change, using a suitable version of Girsanov’s theorem, the
measure Q∗ to the equivalent probability measure Q. In the ﬁnancial inter-
pretation, the probability measure Q will play the role of the statistical prob-
ability (i.e., the real-world probability). It is thus natural to postulate that
the restriction of the probability measure Q to the original probability space
Ω necessarily coincides with the statistical probability P for the default-free
market. From now on, we shall assume that the following condition holds.
Condition (P) We postulate that

                                     dQ
                                         = η̂T ∗ ,    Q∗ -a.s.,
                                     dQ∗

where the positive Q∗ -martingale η̂ is given by the formula

                        dη̂t = −η̂t βt dWt∗ + η̂t− dMt ,           η0 = 1,

for some Rd -valued F-predictable process β, where the Q∗ -local martingale M
equals
                        
                 dMt =      κi,j (t) dMi,j (t)
                              i=j
                                                                          
                          =          κi,j (t) dHi,j (t) − λi,j (t)Hi (t) dt
                              i=j
120     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

for some F-predictable processes κi,j > −1.
    Assume that for any i = j
                         T∗            
                            κi,j (t) + 1 λi,j (t) dt < ∞,   Q∗ -a.s.
                     0

In addition, we postulate that EQ∗ (η̂T ∗ ) = 1, so that the probability measure
Q is indeed well deﬁned on (Ω ∗ , GT ∗ ). The ﬁnancial interpretation of processes
β and κ is similar as in Section 3.2, namely,
• The vector-valued process β corresponds to the premium for the interest
    rate risk.
• The matrix-valued process κ represents the premium for the credit event
    risk.

Statistical Default Intensities

We deﬁne processes λQ
                    i,j by setting, for i = j,
                                                                  Q
             λQ
              i,j (t) = (κi,j (t) + 1)λi,j (t),   λQ
                                                   i,i (t) = −    λi,j (t).
                                                                 j=i

Proposition 4.11. Under the equivalent probability Q given by condition (P ),
the process C is a conditionally Markov process. The matrix of conditional
intensities of C under Q equals
                                                         
                               λQ                  Q
                                1,1 (t) . . . λ1,K (t)
                                                         
                                 .       ...        .    
                     ΛQ  =                               
                       t
                           λQ K−1,1  (t) . . . λQ
                                                 K−1,K (t)
                                  0       ...        0

    If the market price for credit risk depends only on the current rating i
(and not on the rating j after jump), so that κi,j = κi,i for every j = i. Then
ΛQt = Φt Λt , where Φt = diag [φi (t)] with φi (t) = κi,i (t) + 1 is the diagonal
matrix (this case was examined, e.g., by Jarrow et al. (1997)).

Defaultable Coupon Bond

Consider a defaultable coupon bond with the face value L that matures at
time T and promises to pay coupons ci at times T1 < · · · < Tn < T. The
coupon payments are only made prior to default, and the recovery payment
is made at maturity T , and is proportional to the bond’s face value. Notice
that the migration process C introduced in Section 4.8 may depend on both
the maturity T and on recovery rates. Therefore, it is more appropriate to
write Ct = Ct (δ, T ), where δ = (δ1 , . . . , δK ). Similarly, we denote the price of
a defaultable zero-coupon bond DC(δ,T ) (t, T ), rather than DC (t, T ).
    A defaultable coupon bond can be treated as a portfolio consisting of:
                                         Modeling and Valuation of Credit Risk   121

•   Defaultable coupons – that is, defaultable zero-coupon bonds with matu-
    rities T1 , . . . , Tn , which are subject to zero recovery.
•   Defaultable face value – that is, a T -maturity defaultable zero-coupon
    bond with a constant recovery rate δ.
We conclude that the arbitrage price of a defaultable coupon bond equals
                              
                              n
               Dc (t, T ) =         ci DC(0,Ti ) (t, Ti ) + LDC(δ,T )(t, T ),
                              i=1

where, by convention, we set DC(0,Ti ) (t, Ti ) = 0 for t > Ti .

Examples of Credit Derivatives

Credit Default Swap

Consider ﬁrst a basic credit default swap, as described, e.g., in Section 1.3.1 of
Bielecki and Rutkowski (2002). In the present setup, the contingent payment
is triggered by the event {Ct = K}. The contract is settled at time τ =
inf {t < T : Ct = K }, and the payoﬀ equals
                                                  
                           Zτ = 1 − δĈT B(τ, T ) .

Notice the dependence of Zτ on the initial rating C0 through the default
time τ and the recovery rate δĈT . The following two market conventions are
common in practice:
• The buyer pays a lump sum at contract’s inception (default option).
• The buyer pays annuities up to default time (default swap).
In the ﬁrst case, the value at time 0 of a default option equals
                                                        
                  S0 = EQ∗ Bτ−1 1 − δĈT B(τ, T ) 11{τ ≤T } .

In the second case, the annuity κ can be found from the equation
                                          
                                           T                      
                         S0 = κ EQ∗               Bt−1
                                                    i
                                                       1
                                                       1 {ti <τ }   .
                                            i=1

Notice that both the price S0 and the annuity κ depend on the initial bond’s
rating C0 .

Total Rate of Return Swap

As a reference asset we take the coupon bond with the promised cash ﬂows
ci at times Ti . Suppose the contract maturity is T̂ ≤ T . In addition, suppose
that the reference rate payments (the annuity payments) are made by the
122       T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

investor at ﬁxed scheduled times ti ≤ T̂ , i = 1, 2, . . . , m. The owner of a total
rate of return swap is entitled not only to all coupon payments during the life
of the contract, but also to the change in the value of the underlying bond.
By convention, we assume that the default event occurs when Ct (δ, T ) = K.
According to this convention, the reference rate κ to be paid by the investor
satisﬁes
                
                 n                                                             
          EQ∗         ci BT−1
                            i
                              1
                              1 {Ti ≤T̂ }   + EQ ∗ B
                                                    τ
                                                     −1
                                                         D c (τ, T ) − D c (0, T )
                i=1

                                    
                                     m                            
                          = κ EQ∗           Bt−1
                                              i
                                                 1
                                                 1 {Cti (δ,T )=K} ,
                                      i=1

where τ = inf {t ≥ 0 : Ct (δ, T ) = K } ∧ T̂ .

4.9 Concluding Remarks

It should be acknowledged that we have not discussed in the present text any
results or techniques related to hedging of credit risk. Let us conclude, how-
ever, by listing the most important issues arising in practical and theoretical
approaches to this problem, and giving some references that may be consulted
by the interested reader.
Simplified approaches. In most practical implementations of credit risk
models (see, for instance, Greenﬁeld (2000)), it is common to impose at least
some of the following simplifying assumptions:
• Only a pure credit risk instrument (e.g., a basic credit default swap) is
   considered.
• One deals with a one-sided counterparty risk with a ﬁxed recovery rate
   (the same for a derivative product and for a corporate bond).
• The mark-to-market value of the contract is assumed to be non-negative
   to a non-defaultable counterparty (thus, for instance, defaultable loans
   and bonds or vulnerable options are covered, but defaultable swaps are
   excluded).
• Independence of market and credit risks is frequently postulated.
• Existence of a non-defaultable version of the contract and of a liquid mar-
   ket in corporate bonds and other related instruments of various maturities
   is assumed.
Theoretical results. More sophisticated mathematical techniques, which
have a potential to be useful in hedging credit risk, have been developed in
recent years, in particular:
•     Suitable versions of a predictable representation theorem with respect to
      discontinuous martingales associated with the default event, or with credit
      migrations, were established (see, for instance, Bélanger et al. (2001) or
                                   Modeling and Valuation of Credit Risk     123

    Blanchet-Scalliet and Jeanblanc (2003)). Unfortunately, the general formu-
    lae obtained through this technique seem to be very diﬃcult to implement.
    A more straightforward approach to the replication of credit derivatives
    was proposed by Vaillant (2001) (see also Jeanblanc and Rutkowski (2003)
    in this regard).
•   A utility-based approach to hedging of credit risk and valuation of credit
    derivatives was examined. In this approach, which is based on the idea
    of indiﬀerence pricing, hedging strategies are constructed as solutions to
    appropriate stochastic control problems (see, for instance, Collin-Dufresne
    and Hugonnier (2002) or Lukas (2001)).
•   An alternative approach to hedging of credit risk, in the spirit of Markowitz
    mean-variance methodology, was recently developed. It involves, in gen-
    eral, constructing of hedging strategies in terms of solutions of certain
    backward stochastic diﬀerential equations as well as in terms of certain
    orthogonal projections (see Bielecki et al. (2004)).


References
 1. C. Albanese, J. Campolieti, O. Chen and A. Zavidonov (2003) Credit barrier
    models. Risk Magazine 16(6).
 2. M. Ammann (1999) Pricing Derivative Credit Risk. Springer-Verlag, Berlin
    Heidelberg New York.
 3. A. Arvanitis and J. Gregory (2001) Credit: The Complete Guide to Pricing,
    Hedging and Risk Management. Risk Books, London.
 4. S. Babbs and T.R. Bielecki (2003) A note on short spreads. Working paper.
 5. G. Bakshi, D. Madan and F. Zhang (2001) Understanding the role of recov-
    ery in default risk models: Empirical comparisons and implied recovery rates.
    Working paper.
 6. A. Bélanger, S.E. Shreve and D. Wong (2001) A general framework for pricing
    credit risk. Forthcoming in Mathematical Finance.
 7. T.R. Bielecki (2002) A multivariate Markov model for simulating dependent
    migrations. Working paper.
 8. T.R. Bielecki, M. Jeanblanc and M. Rutkowski (2004a) Pricing and hedging
    of credit risk: Replication and mean-variance approaches. Forthcoming in Pro-
    ceedings of the AMS-IMS-SIAM Summer Conference on Mathematics of Fi-
    nance. Snowbird, UT, June 22-26, 2003.
 9. T.R. Bielecki, M. Jeanblanc and M. Rutkowski (2004b) On Hedging of Credit
    Risk and Credit Derivatives. Working paper.
10. T.R. Bielecki and M. Rutkowski (2000) Multiple ratings model of defaultable
    term structure. Mathematical Finance 10 125–139.
11. T.R. Bielecki and M. Rutkowski (2001) Credit risk modelling: Intensity based
    approach. In: Handbook in Mathematical Finance: Option Pricing, Interest
    Rates and Risk Management, eds. E. Jouini, J. Cvitanić, M. Musiela, Cam-
    bridge University Press.
12. T.R. Bielecki and M. Rutkowski (2002) Credit Risk: Modelling, Valuation and
    Hedging. Springer-Verlag, Berlin.
124     T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

 13. T.R. Bielecki and M. Rutkowski (2003) Dependent defaults and credit migra-
     tions. Applicationes Mathematicae 30, 121–145.
 14. T.R. Bielecki and M. Rutkowski (2004) Defaultable term structure: Condition-
     ally Markov approach. IEEE Transactions on Automatic Control, Special Issue
     on Stochastic Control Methods in Financial Engineering, in press.
 15. F. Black and M. Scholes (1973) The pricing of options and corporate liabilities.
     Journal of Political Economy 81, 637–654.
 16. F. Black and J.C. Cox (1976) Valuing corporate securities: Some eﬀects of bond
     indenture provisions. Journal of Finance 31, 351–367.
 17. C. Blanchet-Scalliet and M. Jeanblanc (2003) Hazard rate for credit risk and
     hedging defaultable contingent claims. Forthcoming in Finance & Stochastics.
 18. M.J. Brennan and E.S. Schwartz (1977) Convertible bonds: Valuation and
     optimal strategies for call and conversion. Journal of Finance 32, 1699–1715.
 19. M.J. Brennan and E.S. Schwartz (1980) Analyzing convertible bonds. Journal
     of Financial and Quantitative Analysis 15, 907–929.
 20. D. Brigo and A. Alfonsi (2003) A two-dimensional shifted square-root diﬀusion
     model for credit derivatives: calibration, pricing and the impact of correlation.
     Working paper.
 21. E. Briys and F. de Varenne (1997) Valuing risky ﬁxed rate debt: An extension.
     Journal of Financial and Quantitative Analysis 32, 239–248.
 22. L. Chen and D. Filipović (2003a) A simple model for credit migration and
     spread curves. Working paper.
 23. L. Chen and D. Filipović (2003b) Pricing credit default swaps with default
     correlation and counterparty risk. Working paper.
 24. P.O. Christensen, C.R. Flor, D. Lando and K.R. Miltersen (2002) Dynamic
     capital structure with callable debt and debt renegotiations. Working paper.
 25. P. Collin-Dufresne, R.S. Goldstein and J.-N. Hugonnier (2003) A general for-
     mula for valuing defaultable securities. Working paper.
 26. P. Collin-Dufresne and J.-N. Hugonnier (2002) On the pricing and hedging of
     contingent claims in the presence of extraneous risks. Working paper.
 27. D. Cossin and H. Pirotte (2000) Advanced Credit Risk Analysis. J. Wiley,
     Chichester.
 28. M. Crouhy, D. Galai and R. Mark (1998) Credit risk revisited. Risk – Credit
     Risk Supplement, March, 40–44.
 29. M. Davis and V. Lo (2001) Infectious defaults. Quantitative Finance 1, 382–
     386.
 30. C. Dellacherie (1972) Capacités et processus stochastiques. Springer-Verlag,
     Berlin Heidelberg New York.
 31. R. Douady and M. Jeanblanc (2002) A rating-based model for credit deriva-
     tives. European Investment Review 1, 17–29.
 32. G. Duﬀee (1999) Estimating the price of default. Review of Financial Studies
     12, 197–226.
 33. D. Duﬃe (1998a) Defaultable term structure models with fractional recovery
     of par. Working paper.
 34. D. Duﬃe (1998b) First-to-default valuation. Working paper.
 35. D. Duﬃe and D. Lando (2001) The term structure of credit spreads with
     incomplete accounting information. Econometrica 69, 633–664.
 36. D. Duﬃe, M. Schroder and C. Skiadas (1996) Recursive valuation of default-
     able securities and the timing of resolution of uncertainty. Annals of Applied
     Probability 6, 1075–1090.
                                   Modeling and Valuation of Credit Risk       125

37. D. Duﬃe and K. Singleton (1998) Simulating correlated defaults. Working
    paper.
38. D. Duﬃe and K. Singleton (1999) Modeling term structures of defaultable
    bonds. Review of Financial Studies 12, 687–720.
39. D. Duﬃe and K. Singleton (2003) Credit Risk: Pricing, Measurement and Man-
    agement. Princeton University Press, Princeton.
40. D. Duﬃe and R. Stanton (1992) Pricing continuously resettled contingent
    claims. Journal of Econom. Dynamics Control 16, 561–573.
41. E. Eberlein and F. Özkan (2003) The defaultable Lévy term structure: ratings
    and restructuring. Mathematical Finance 13, 277-300.
42. R.J. Elliott (1982) Stochastic Calculus and Applications. Springer-Verlag,
    Berlin.
43. R.J. Elliott, M. Jeanblanc and M. Yor (2000) On models of default risk. Math-
    ematical Finance 10, 179–195.
44. H. Geman, N. El Karoui and J.-C. Rochet (1995) Changes of numeraire,
    changes of probability measures and pricing of options. Journal of Applied
    Probability 32, 443–458.
45. K. Giesecke (2002) Default compensator, incomplete information, and the term
    structure of credit spreads. Working paper.
46. Y.M. Greenﬁeld (2000) Hedging of the credit risk embedded in derivative trans-
    actions. PhD dissertation.
47. R. Guha (2003) Recovery of face value at default: Theory and empirical evi-
    dence. Working paper.
48. B. Hilberink and L.C.G. Rogers (2002) Optimal capital structure and endoge-
    nous default. Finance and Stochastics 6, 237–263.
49. J. Hull and A. White (2001) Valuing credit default swaps II: Modeling default
    correlations. Journal of Derivatives 8, 12–22.
50. F. Jamshidian (1997) LIBOR and swap market models and measures. Finance
    and Stochastics 1, 293–330.
51. F. Jamshidian (2002) Valuation of credit default swaps and swaptions. Working
    paper.
52. R.A. Jarrow and S.M. Turnbull (1995) Pricing derivatives on ﬁnancial securities
    subject to credit risk. Journal of Finance 50, 53–85.
53. R.A. Jarrow, D. Lando and S.M. Turnbull (1997): A Markov model for the
    term structure of credit risk spreads. Review of Financial Studies 10, 481–523.
54. R.A. Jarrow, D. Lando and F. Yu (2002) Default risk and diversiﬁcation: The-
    ory and applications. Working paper.
55. R.A. Jarrow and F. Yu (2001) Counterparty risk and the pricing of defaultable
    securities. Journal of Finance 56, 1756–1799.
56. M. Jeanblanc and M. Rutkowski (2000) Modelling of default risk: An overview.
    In: Mathematical Finance: Theory and Practice, Beijing, pp. 171–269.
57. M. Jeanblanc and M. Rutkowski (2001) Default risk and hazard process. In:
    Mathematical Finance – Bachelier Congress 2000. H. Geman, D. Madan, S.R.
    Pliska and T. Vorst, eds., Springer-Verlag, Berlin, 2002, pp. 281–312.
58. M. Jeanblanc and M. Rutkowski (2003) Modelling and hedging of default risk.
    In: Credit Derivatives: The Deﬁnitive Guide. J. Gregory, ed., Risk Books, pp.
    385–416.
59. M. Kijima and K. Komoribayashi (1998) A Markov chain model for valuing
    credit risk derivatives. Journal of Derivatives 6, Fall, 97–108.
126    T.R. Bielecki, M. Jeanblanc, and M. Rutkowski

 60. M. Kijima, K. Komoribayashi and E. Suzuki (2002) A multivariate Markov
     model for simulating correlated defaults. Working paper.
 61. M. Kijima and Y. Muromachi (2000) Credit events and the valuation of credit
     derivatives of basket type. Rev. Derivatives Res. 4, 55 – 79.
 62. I.J. Kim, K. Ramaswamy and S. Sundaresan (1993) The valuation of corporate
     ﬁxed income securities. Working paper.
 63. S. Kusuoka (1999) A remark on default risk models. Advances in Mathematical
     Economics 1, 69–82.
 64. D. Lando (1998a) On Cox processes and credit-risky securities. Review of
     Derivatives Research 2, 99-120.
 65. D. Lando (1998b) On rating transition analysis and correlation. Risk Publica-
     tions.
 66. D. Lando (2000a) Some elements of rating-based credit risk modeling. In: Ad-
     vanced Fixed-Income Valuation Tools, J. Wiley, Chichester, pp. 193–215.
 67. D. Lando (2000b) On correlated defaults in a rating-based model: Common
     state variables versus simultaneous defaults. Working paper.
 68. J.-P. Laurent and J. Gregory (2002) Basket defaults swaps, CDOs and factor
     copulas. Working paper.
 69. H. Leland (1994) Corporate debt value, bond covenants, and optimal capital
     structure. Journal of Finance 49, 1213–1252.
 70. H. Leland and K. Toft (1996) Optimal capital structure, endogenous
     bankruptcy, and the term structure of credit spreads, Journal of Finance 51,
     987–1019.
 71. F.A. Longstaﬀ and E.S. Schwartz (1995) A simple approach to valuing risky
     ﬁxed and ﬂoating rate debt. Journal of Finance 50, 789–819.
 72. S. Lukas (2001) On pricing and hedging defaultable contingent claims. Thesis.
 73. D. Madan and H. Unal (1998) Pricing the risk of default. Review of Derivatives
     Research 2, 121–160.
 74. M. Musiela and M. Rutkowski (1997) Martingale Methods in Financial Mod-
     elling. Springer-Verlag, Berlin.
 75. T.N. Nielsen, J. Saá-Requejo and P. Santa-Clara (1993) Default risk and in-
     terest rate risk: The term structure of default spreads. Working paper.
 76. P. Protter (2003) Stochastic Integration and Diﬀerential Equations. 3rd edition,
     Springer-Verlag, Berlin.
 77. D. Revuz and M. Yor (1999) Continuous Martingales and Brownian Motion.
     3rd edition, Springer-Verlag, Berlin.
 78. J. Saá-Requejo and P. Santa-Clara (1999) Bond pricing with default risk. Work-
     ing paper.
 79. P.J. Schönbucher (2000a) Credit risk modelling and credit derivatives. PhD
     dissertation.
 80. P.J. Schönbucher (2000b) A Libor market model with default risk. Working
     paper.
 81. P.J. Schönbucher (2003) Credit Derivatives Pricing Models. J.Wiley, Chich-
     ester.
 82. P.J. Schönbucher and D. Schubert (2001) Copula-dependent default risk in
     intensity models. Working paper.
 83. N. Vaillant (2001) A beginner’s guide to credit derivatives. Working paper.
Stochastic Control with Application in
Insurance

Christian Hipp

Institute for Finance, Banking and Insurance, University of Karlsruhe,
Kronenstr. 34, 76133 Karlsruhe, Germany
christian.hipp@wiwi.uni-karlsruhe.de

1 Preface
In a talk given at the Royal Statistical Society of London, Karl Borch in 1967
made the following statement (see Taksar [44]):
    The theory of control processes seems to be tailor made for the prob-
    lems which actuaries have struggled to formulate for more than a
    century. It may be interesting and useful to meditate a little how the
    theory would have developed if actuaries and engineers had realized
    that they were studying the same problems and joined forces over 50
    years ago. A little reﬂection should teach us that a highly specialized
    problem may, when given the proper mathematical formulation, be
    identical to a series of other, seemingly unrelated problems.
    It took some more time until (in 1994 and 1995) the ﬁrst papers on stochas-
tic control in insurance appeared (e.g. Martin-Löf [32], Brockett and Xia [3],
or Browne [4]). Since then we can see a rapid development of this ﬁeld with
a series of papers written by Soren Asmussen, Michael Taksar, Bjarne Hoej-
gaard, Hanspeter Schmidli and others. It is the purpose of the following parts
to give an introduction into this ﬁeld and present a survey of recent results
and their possible applications. The ﬁve parts are
1) Introduction into insurance risk
2) Possible control variables and stochastic control
3) Optimal investment for insurers
4) Optimal reinsurance and new business
5) Asymptotic behavior for value functions and strategies
6) Control problems with constraints: dividends and ruin.
   Since we shall mostly consider optimization for a ﬁrst insurer we shall
concentrate on problems with inﬁnite planning horizon. The main objective



K. Back et al.: LNM 1856, M. Frittelli and W. Runggaldier (Eds.), pp. 127–164, 2004.

c Springer-Verlag Berlin Heidelberg 2004
128    Christian Hipp

function will be the inﬁnite time ruin (survival) probability, but most of the
techniques presented here also work for other objective functions.
    One major recent trend in risk management is replacement of (parts of)
risk capital by sophisticated risk control. Here one will use control of invest-
ment into risky assets (capital market), control of reinsurance, of underwriting,
of new business, and of setting premia. In this sense the mathematical ﬁeld
presented here is (or will be) part of asset liability management, of dynamic
ﬁnancial analysis, and of holistic risk management in insurance.
    Stochastic control is well established in the ﬁnance world since the seminal
papers of Merton ([33] and [34]). The books by Fleming and Rishel [8], by
Fleming and Soner [9], and by Karatzas and Shreve [30] cover most of today’s
problems and methods in this ﬁeld.


2 Introduction Into Insurance Risk
2.1 The Lundberg Risk Model

Here we consider the technical risk which is generated by the randomness of
claim sizes and claim occurrence times. A classical model is the Lundberg
model [31] for the risk process which uses a compound Poisson process for the
claims:

                            R(t) = s + ct − S(t),
                            S(t) = X1 + ... + XN (t) ,

with a homogeneous Poisson process N (t) having constant intensity λ and
independent claim sizes X1 , X2 , ... with distribution Q (the claim size distri-
bution) which are independent of N (t), t ≥ 0. The initial surplus is s, and c
is the constant premium intensity. This process is generated by independent
random variables X1 , X2 , ..., W1 , W2 , ... with Xi ∼ Q, Wi ∼ Exp(λ), where
Wi is the inter-arrival time between claim Xi−1 and Xi if i ≥ 2, and W1 is
the waiting time until the ﬁrst claim. Then N (t) can be written as

                     N (t) = max{k : W1 + ... + Wk ≤ t}.

Claim Xi occurs at time Ti = W1 + ... + Wi , i ≥ 1. The process R(t) has
independent stationary increments, in particular the process is Markov with
respect to the natural ﬁltration Ft generated by R(t), in the following sense:
for any set A in the sigma-ﬁeld generated by R(u), u ≥ t, the conditional
probability P {A | Ft } depends on R(t) alone,

                          P {A | Ft } = P {A | R(t)}.

    The Lundberg risk process is the standard model for nonlife insurance,
simple enough to calculate probabilities of interest, but too simple to be real-
istic. It does not include interest earned on the surplus, no long tail business
                            Stochastic Control with Application in Insurance           129

with claims which are settled a long time after occurrence of the claim, no
time dependence or even randomness of premium income and of the size of
the portfolio (which would lead to stochastic processes c(t) and λ(t), respec-
tively). But the Lundberg model is still attractive because it separates and
models the two major reasons for big losses: frequent claims and large claims.
Most of the techniques developed for the Lundberg model are useful for more
realistic and more general risk processes like the Sparre-Andersen model or
the Markov modulated risk process.

2.2 Alternatives

Other risk models discussed in the insurance context are the Sparre-Andersen
model and the Markov-modulated risk process. In both classes of models, the
claims Xi stay iid independent of the claims arrival process N (t), which in
the Sparre-Andersen model is a renewal process

                        N (t) = max{k : W1 + ... + Wk ≤ t}

with iid positive random variables Wi which are independent of the sequence
of claim sizes Xi . A Sparre-Andersen risk model has the parameters s, c, Q, R
where R is the distribution of the inter-arrival times Wi . In this model, the
process R(t) is no longer Markovian; to obtain a Markov process one has to
enlarge the state space. If T (t) is the time elapsed since the last claim, then
(R(t), T (t)) is a Markov process.
    In the Markov-modulated risk model one considers a continuous time ho-
mogeneous Markov process M (t) on the state space {1, ..., I}, and with ﬁxed
intensities 0 ≤ λ1 < λ2 < ... < λI one uses the process λ(t) = λM(t) as
stochastic intensity of an inhomogeneous Poisson process N (t). Here we have
the parameters s, c, Q, λ1 , ..., λI , bij , i, j = 1, ..., I, where bij are the transition
intensities of the Markov process M (t). Also in this model, R(t) is not Marko-
vian, while the process (R(t), λ(t)) is a Markov process. These risk models
can be found, e.g., in Rolski et al. ([39], chapters 6 and 12.3).
    A simple extension of the Lundberg risk process is the implementation of
constant interest, in which the reserve earns interest at a constant rate r. In
this process, the jumps are the same as in the Lundberg process, and between
claims the process evolves with the dynamics

                                  R (t) = c + rR(t);

see Paulsen [36] for the (non-trivial!) computation of ruin probabilities in this
model.

2.3 Ruin Probability

A classical risk measure is the inﬁnite time ruin probability
130     Christian Hipp

                      ψ(s) = P {R(t) < 0 for some t ≥ 0}

which equals one as long as c ≤ λE[X1 ] (no safety loading), and in the case
with safety loading
                                c > λE[X1 ]
(a condition which we tacitly assume throughout the paper) we have R(t) →
∞, and the ruin probability satisﬁes the following ﬁrst order integro-diﬀerential
equation
                  0 = λE[ψ(s − X) − ψ(s)] + cψ  (s), s ≥ 0                  (1)
where X ∼ Q is a generic claim size (for technicalities and more details, e.g.
for (non-)diﬀerentiability of ψ(s), see Grandell [16], or Gerber [14], or Rolski
et al. [39]). For exponential claim sizes with density

                            f (x) = θ exp(−θx), x > 0,

the ruin probability equals
                                            λµ
                               ψ(s) =          exp(−Rs),                                   (2)
                                             c
where µ = E[X1 ] = 1/θ is the mean claim size, and R = (c − λµ)/(cµ) is the
adjustment coeﬃcient of the problem which is the positive solution r of the
Lundberg equation
                          λ + rc = λE[exp(rX)].                         (3)
For the following parts it might help to recall how equation (2) can be derived
from (1). Consider the survival probability δ(s) = 1 − ψ(s), for which δ(s) = 0
for s < 0 and
                      0 = λ(g(s) − δ(s)) + cδ  (s), s ≥ 0,                 (4)
where
                                     s                             s
      g(s) = E[δ(s − X)] =               δ(s − x)θe−θx dx =            δ(x)θe−θ(s−x) dx.
                                 0                             0

It is easy to see that on the set {s ≥ 0}, g(s) satisﬁes the diﬀerential equation

                               g  (s) = θ(δ(s) − g(s)),

and hence on the set {s ≥ 0} the function δ(s) has a continuous second
derivative δ  (s) for which

                     0 = λ(g  (s) − δ  (s)) + cδ  (s)
                         = λθ(δ(s) − g(s)) − λδ  (s) + cδ  (s)
                         = cθδ  (s) − λδ  (s) + cδ  (s).

This linear diﬀerential equation with constant coeﬃcients has a general solu-
tion of the form
                         Stochastic Control with Application in Insurance             131

                           δ(s) = C1 + C2 exp(−Rs)
since z = 0 and z = −R are the solutions to the characteristic equation

                              0 = (cθ − λ)z + cz 2 .

Using δ(s) → 1 for s → ∞ we get C1 = 1. From (4) at the point s = 0 we
obtain λδ(0) = cδ  (0) or λ(1 + C2 ) = −cRC2 or ﬁnally

                                        λ      λµ
                             −C2 =           =    .
                                      cR + λ    c
    In the Markov modulated situation, the ruin probability ψ(s, i) depends
on the initial surplus s and the initial value of the process λ(t) : λ(0) = λi .
The functions ψ(s, i) satisfy the following interacting system of ﬁrst order
integro diﬀerential equations:

                                                 
                                                 I
0 = λi E[ψ(s − X, i) − ψ(s, i)] + cψs (s, i) +         bij ψ(s, j), s ≥ 0, i = 1, ..., I.
                                                 j=1

In the Sparre-Andersen model the ruin probability ψ(s) = ψ(s, 0) is derived
from a function ψ(s, t), where s is the initial surplus and t is the current time
since the last claim. If the waiting times Wi have a continuous density f (x),
then the function ψ(s, t) satisﬁes the following integro-diﬀerential equation:

         f (t)
  0=             E[ψ(s − X, t) − ψ(s, t)] + cψs (s, t) + ψt (s, t), s ≥ 0, t ≥ 0.
       1 − F (t)

In the Lundberg risk process with constant interest rate r, the ruin probability
ψ(s) satisﬁes the integro-diﬀerential equation

              0 = λE[ψ(s − X) − ψ(s)] + (c + rs)ψ  (s), s ≥ 0.

These integro-diﬀerential equations are derived with the inﬁnitesimal gener-
ators of the underlying risk processes (see below). In the remainder of this
section we shall restrict ourselves to Lundberg risk processes.

2.4 Asymptotic Behavior For Ruin Probabilities

Equation (2) shows the typical behavior of ruin probabilities for small claim
sizes for which the adjustment coeﬃcient (see equation (3)) exists,

                              ψ(s) ∼ C exp(−Rs)                                       (5)

with C > 0, and where a(s) ∼ b(s) means a(s)/b(s) → 1.This relation holds,
e.g., if
                  r0 = sup{r : E[exp(rX)] < ∞} > 0
132    Christian Hipp

and limr→r0 E[exp(rX)] = ∞. See Rolski et al. ([39], chapter 5.4).
For large claims with heavy tailed distributions (for which r0 = 0) the behavior
is totally diﬀerent: e.g., for Pareto claims with density f (x) = ax−(a+1) , x > 1,
a > 1, we have
                             ψ(s) ∼ Cs−(a−1) , s → ∞,                           (6)
with a positive constant C. Also this behavior is typical: For heavy tailed claim
size distributions Q (more precisely: for all subexponential distributions, see
Embrechts et al. ([7], chapter 1.3)) we have
                                           ∞
                           ψ(s) ∼ C            Q(x, ∞)dx,
                                       s

where Q(t, ∞) = P {X1 > t} is the tail probability of the claim size at the
point t ≥ 0.
    The diﬀerence between the two cases will become apparent when one tries
to increase the initial surplus s to a new surplus s1 in order to halve the ruin
probability. In the exponential claims case the new initial surplus s1 equals
s1 = s + ln(2)/R, while in the Pareto claims case

                                 s1 ∼ 21/(a−1) s.

A complete survey on inﬁnite time ruin probabilities for the Lundberg model
can be found in Rolski et al. [39].


3 Possible Control Variables and Stochastic Control
We consider an insurance company managing the risk in a portfolio with
claims modelled by a Lundberg risk process with parameters c, λ and Q. There
is a collection of possible actions well suited for risk management: reinsurance,
investment, volume control (via setting of premia), portfolio selection (via
combination of the given risk portfolio with other risks which can be written),
and the combination of all these actions. Here we deal with dynamic risk
management, the actions are selected and changed at each point in time -
according to the risk position of the company. We will treat actions involving
one control variable only, and try to ﬁnd the optimal (with respect to some
given objective) dynamic strategy for the selected control variable, i.e. for
each control variable we deﬁne a stochastic control problem which we try to
solve.

3.1 Possible Control Variables

Investment, One Risky Asset

Here we consider a risky asset in which the insurer can invest, and a riskless
asset, a bank account, which pays interest r. At each point in time t the
                          Stochastic Control with Application in Insurance            133

insurer with current wealth R(t) will invest an amount A(t) into the risky
asset, and what is left is on the bank account earning (costing) interest r
if R(t) − A(t) > 0 (if R(t) − A(t) < 0). For simplicity we take the classical
Samuelson model (logarithmic Brownian motion) for the dynamics of the asset
prices Z(t):
                 dZ(t) = aZ(t)dt + bZ(t)dW (t), Z(0) = z0 ,
where W (t) is a standard Wiener process. If θ(t) = A(t)/Z(t) is the number
of shares held at time t, then the total position of the insurer has the following
dynamics:
     dR(t) = rR(t)dt + cdt − dS(t) + θ(t)dZ(t) − rθ(t)Z(t)dt, R(0) = s,
or
     dR(t) = rR(t)dt + cdt − dS(t) + A(t)((a − r)dt + bdW (t)), R(0) = s.
To simplify the setup and the notation we shall restrict ourselves to the case
r = 0.
    We shall allow for all possible trading strategies θ(t) which - as stochastic
processes - are (Ft )−predictable, where (Ft ) is the ﬁltration generated by the
two processes Z(t) and S(t), t ≥ 0. So for the selection of θ(t) we may use the
knowledge of all stock prices and claims before time t, but not the knowledge
at time t which might be the size of a claim happening at time t. There is
no budget constraint such as θ(t)Z(t) ≤ R(t), one can borrow an arbitrary
amount of money and invest it into the risky asset. We shall also neglect
transaction costs and allow for shares of any (up to inﬁnitesimal) size.

Investment, Two or More Risky Assets
Assume that the insurer can invest his money into d risky assets Z1 (t), ...,Zd (t),
and the dynamics of these prices is given by the following system of stochastic
diﬀerential equations
                                           
                                           d
                dZi (t) = Zi (t)(ai dt +         σij dWj (t), i = 1, ..., d,          (7)
                                           j=1

where ai and σij are constants with nonsingular matrix
                                Σ = (σij )i,j=1,...,d ,
and where W1 (t), ..., Wd (t) are independent standard Wiener processes. If the
interest is zero, r = 0, and if Ai (t) is the amount invested into stock i at time
t, then the total position of the insurer has the following dynamics:

                                                       
                                                       d
        dR(t) = cdt − dS(t) + ai Ai (t) + Ai (t)             σij dWj (t), R(0) = s.
                                                       j=1

The stochastic process Z(t) = (Z1 (t), ..., Zd (t)) is called d-variate logarithmic
Brownian motion.
134    Christian Hipp

Proportional Reinsurance
In a proportional reinsurance contract each individual claim of size X is di-
vided between ﬁrst insurer and reinsurer according to a proportionality factor
a : the insurer pays aX, the reinsurer pays (1−a)X. For this the insurer pays a
reinsurance premium h(a) to the reinsurer. We allow a continuous adjustment
of the proportionality factor: a(t) is (Ft )−predictable. Under the strategy a(t)
the risk process of the ﬁrst insurer is given by
                                                           N (t)
                                         t                   
             R(t) = s + ct −                 h(a(v))dv −           a(Ti )Xi , t ≥ 0.
                                     0                       i=1

The usual premium rule h(a) is the expectation principle:
                                     h(a) = aρλE[X]
with ρ > 1. If c ≥ ρλE[X] and the ﬁrst insurer wants to minimize his risk then
he would choose a(t) = 0 and give all risk to the reinsurer. To exclude this
uninteresting situation we shall always assume that reinsurance is expensive:
c < ρλE[X].

Unlimited XL Reinsurance

In excess of loss (XL) reinsurance each claim of size X is divided between
the ﬁrst insurer and the reinsurer according to a priority 0 ≤ b ≤ ∞ : the
insurer pays min(X, b), and the reinsurer pays (X − b)+ = max{X − b, 0}. For
this the insurer pays a reinsurance premium h(b) to the reinsurer. We allow a
continuous adjustment of the proportionality factor: b(t) is (Ft )−predictable.
Under the strategy b(t) the risk process of the ﬁrst insurer is given by
                                                     N (t)
                                t                    
          R(t) = s + ct −           h(b(v))dv −              min{b(Ti ), Xi }, t ≥ 0.
                            0                        i=1

One possible rule h(b) is again the expectation principle:
                            h(b) = ρλE[(X − b)+ ]
with ρ > 1. Also here we shall assume that reinsurance is expensive: c <
ρλE[X]. Other premium principles would be the variance principle
                                                    2
                h(b) = λE[(X − b)+ ] + βλE[ (X − b)+ ],
which puts more weight to the tail of the distribution of the claim size, or the
standard deviation principle
                                          (
                                                            2
                h(b) = λE[(X − b)+ ] + β λE[((X − b)+ ) ].

In general, expensive reinsurance is the situation in which c < h(0).
                         Stochastic Control with Application in Insurance             135

XL-Reinsurance

In practical situations, XL-reinsurance contracts are limited by some constant
0≤ L ≤ ∞, which leads to the following division of a claim of size X :
the reinsurer pays min{(X − b)+ , L}, and the ﬁrst insurer pays what is left:
g(X, b, L) = min{X, b} + (X − b − L)+. For this the insurer pays a reinsurance
premium h(b, L). Under a dynamic XL-reinsurance contract with strategy
(b(t), L(t)) the insurer has the following risk process:
                                                         N (t)
                                 t                       
           R(t) = s + ct −           h(b(v), L(v))dv −           g(b(Ti ), L(Ti )).
                             0                           i=1

Reinsurance is expensive if c < h(0, ∞). Possible premium schemes are the
expectation principle

                      h(b, L) = ρλE[min{(X − b)+ , L}],

the variance principle

         h(b, L) = λE[min{(X − b)+ , L}] + βλE[min{(X − b)+ , L}2 ]

or the standard deviation principle.
    To minimize his risk, an insurer will choose L(t) = ∞ if he can aﬀord it.
So L(t) < ∞ will be a reasonable choice for him only if the tail of the claim
size distribution matters for the reinsurance premium, as is the case in the
variance or in the standard deviation principle.

Premium Control

An insurer can control the volume of his business by setting the premium
c. The higher the premium rate c, the smaller the number of contracts in
his portfolio, and this in turn will decrease the claims intensity λ. This will
be modelled by a non-increasing function λ(c) : if c(t) is the instantaneous
premium rate charged, then λ(c(t)) will be the instantaneous intensity of the
claims process. A realistic model has λ(∞) = 0, and in order to get a non
trivial risk minimization problem one has to change the framework a bit since
otherwise the insurer would reduce his risk to zero by the choice of an inﬁnite
premium rate. One possibility is the introduction of cost of capital, i.e. for the
initial surplus an interest rate ρ has to be paid continuously.

Control of New Business

This is a control problem for an insurer who controls the risk in one given
portfolio by writing an appropriate proportion of business in a second indepen-
dent portfolio. If R(t) and R1 (t) are the two independent insurance portfolios
136     Christian Hipp

which are both modelled as Lundberg risk processes with parameters λ, c, Q
and λ1 , c1 , Q1 , respectively, and if b(t) is the proportion written at time t
in portfolio R1 (t), then the total position of the insurer consists of premium
income up to time t equal to
                                               t
                                 ct +              λ1 b(u)du,
                                           0

and the claims paid up to time t are S(t) = X1 + ... + XN (t) for the ﬁrst
portfolio with distribution compound Poisson with parameters λt and Q, and
S1 (t) for the second portfolio with instantaneous claims intensity λ1 b(t) and
claim size distribution Q1 . For practical applications one has to assume that
b(t) ≥ 0 (no short selling of insurance business) and b(t) ≤ 1 (the maximum
possible volume written is R1 (t)).

3.2 Stochastic Control

One of the most investigated classical problems in ﬁnance is the Merton op-
timal investment and consumption problem. In its simplest form, it reads as
follows. An investor has initial wealth r0 , he can dynamically consume part
of his wealth and invest dynamically another part of it in a risky asset with
price process modelled as logarithmic Brownian motion:

                   dX(t) = X(t)(adt + bdW (t)), X(0) = x0 .

What is left is on a bank account earning interest at a constant rate r.If A(t)
is the amount invested and c(t) the rate of consumption at time t,then the
wealth R(t) has the dynamics

      dR(t) = A(t)(adt + bdW (t)) + (R(t) − A(t))rdt − c(t)dt, R(0) = r0 .

One is interested in the optimal strategy (A(t), c(t)) which maximizes expected
accumulated utility of consumption
                                       τ
                             E             e−ρt u(c(t))dt
                                   0

where τ = inf{t : R(t) < 0} is the ruin time for the investor, ρ > 0 is a
subjective interest rate (appreciation rate), and u(x) = xγ , γ < 1, is a special
utility function. This problem is speciﬁed by the dynamics of the risky asset,
by the two control variables A(t) and c(t), and by the objective function which
is maximized.

Objective Functions

In order to properly deﬁne an optimization problem one needs to specify the
planning horizon and the quantity which should be maximized. There is the
                              Stochastic Control with Application in Insurance     137

ﬁnite horizon case where optimization is done over a ﬁnite interval [0, T ], and
the inﬁnite horizon case. In the ﬁnite horizon case, a general objective function
can be written as the sum of two components: the running cost and the ﬁnal
cost. If σ(t) is the strategy with values in an action space Σ, then the general
objective function to be maximized reads
                    $                                          %
                         τ ∧T
                E                 u(R(t), σ(t), t)dt + U (R(T ), σ(T )) ,
                     0


where τ is some stopping time (such as ruin time or ﬁrst entry time into
a certain region). In the inﬁnite horizon case a general objective function
consists of running costs and terminal costs
                          τ
                 E            u(R(t), σ(t), t)dt + U (R(τ ), σ(τ ), τ ) ,
                      0

where τ is an unlimited stopping time and U (R(τ ), σ(τ ), τ) could be bank–
ruptcy cost when τ is time of ruin. For the above mentioned inﬁnite horizon
Merton problem, we have U = 0 and u(r, σ, t) = exp(−ρt)(c(t))γ , γ < 1. If
c(t) is a dividend rate, then the quantity
                                      τ
                      E                   exp(−ρt)c(t)γ dt + U (R(τ ))
                                  0

could be interpreted as the value of the company if c(t) is the dividend rate
and U (s) is the cost of default when the ﬁnal capital is s.
   We shall mainly be concerned with ruin (survival) probabilities, i.e. run-
ning cost is zero, and U = 1 if τ = ∞, U = 0 elsewhere.

Infinitesimal Generators

Inﬁnitesimal generators L are deﬁned for Markov processes R(t) and for (suf-
ﬁciently smooth) functions f (s) on the state space via
                                        1
              Lt f (s) = lim              E [f (R(t + h) − f (s) | R(t) = s] ,
                              h       0 h

where the function f (s) is restricted to the domain D of L for which this
limit exists. If the Markov process is time homogeneous, then the inﬁnitesimal
generator does not depend on t. Obviously, D is linear, and Lt is a linear
operator. In the following examples, all processes are stationary. The domains
of the generator will not be speciﬁed precisely, but it should be clear in each
case that it contains the set of all functions f (s) having bounded derivatives
of all orders.
1) R(t) = a + bt : Lf (s) = bf  (s);
2) dR(t) = a(R(t))dt + b(R(t))dW (t) : Lf (s) = a(s)f  (s) + 12 b2 (s)f  (s);
138     Christian Hipp

3) R(t) = s + ct − S(t), the Lundberg risk process: Lf (s) = λE[f (s − X) −
   f (s)] + cf  (s);
4) R(t) the Lundberg risk process with constant interest r : Lf (s) =
   λE[f (s − X) − f (s)] + (c + rs)f  (s);
5) (R(t), M (t)) from the Markov modulated risk process:

                                                                     
                                                                     I
          Lf (s, i) = λi E[f (s − X, i) − f (s, i)] + cfs (s, i) +         bij f (s, j);
                                                                     j=1

6) (R(t), T (t)) from the Sparre-Andersen model:
                         f (t)
         Lf (s, t) =             E[f (s − X, t) − f (s, t)] + cfs (s, t) + ft (s, t);
                       1 − F (t)
    In the following we shall also need the inﬁnitesimal generator for a con-
trolled risk process, where the control strategy is constant. So, e.g., for optimal
investment with a constant amount A invested into the risky asset, the total
position R(t) of the insurer has the dynamics

                    dR(t) = cdt − dS(t) + A(adt + bdW (t)),

and so the inﬁnitesimal generator for the process (R(t), X(t)) (which is
Markov) equals
                                                                    1
Lf (s, x) = λE[f (s − X, x) − f (s, x)] + cfs (s, x) + Aafs (s, x) + A2 b2 fss (s, x).
                                                                    2
One can see that the inﬁnitesimal generator is independent of x (for logarith-
mic Brownian motion, the initial value has no inﬂuence on the return of an
investment), and so we use the notation
                                                              1
       Lf (s) = λE[f (s − X) − f (s)] + cf  (s) + Aaf  (s) + A2 b2 f  (s).
                                                              2
For proportional reinsurance with constant proportion a the risk process of
the insurer reads
                                                N (t)
                                                
                     R(t) = s + (c − h(a))t − a       Xi ,
                                                        i=1

and the corresponding inﬁnitesimal generator is

               Lf (s) = λE[f (s − aX) − f (s)] + (c − h(a))f  (s).

For unlimited XL-reinsurance with constant priority b ∈ [0, ∞] the generator
equals
             Lf (s) = λE[f (s − X ∧ b) − f (s)] + (c − h(b))f  (s),
and for the general reinsurance contract g(X, a) with reinsurance premium
h(a) and ﬁxed decision vector a the generator is
                         Stochastic Control with Application in Insurance    139

            Lf (s) = λE[f (s − g(X, a)) − f (s)] + (c − h(a))f  (s).

   The integro-diﬀerential equations for the ruin probability ψ(s) are all of
the form
                             Lψ(s) = 0, s ≥ 0,
where L is the inﬁnitesimal generator of the underlying risk process. It is by no
means obvious that the function ψ(s) is in the domain of L, but this problem
can be dealt with using the so called veriﬁcation argument.

Hamilton-Jacobi-Bellman Equations

The computation of the maximized objective function and - if it exists - of
the corresponding optimal strategy is a non-trivial task: the space of possible
strategies is too large (the set of all Ft −predictable processes) for a complete
search. An indirect method will be used. The principle behind this method
(for the case of ﬁnite horizon) is based on two observations: a) the optimal
strategy depends only on the initial state (and the time to maturity), and b)
the optimal strategy is speciﬁed by its value at the initial time point for each
initial state (and each time to maturity). Since the concept is quite classical
now and part of each book on stochastic control, the HJB equation will just be
given without describing how it is derived heuristically from the optimization
problem.
    If A is a ﬁxed action from the action space, which is regarded as a constant
strategy a(t) ≡ A, then the controlled process Ra (t) should be a time homo-
geneous Markov process with inﬁnitesimal generator LA . The HJB equation
for an optimization problem considered in this survey, i.e.with value function
V (s) of the form
                        V (s) = max E[U (Ra (τ ), a(τ ), τ )]
                                 a(.)
                    a
where τ = inf{t : R (t) < 0} is the ruin time of the controlled process (other
stopping times are possible, too) equals

                           max LA V (s) = 0, s ≥ 0.                          (8)
                             A

The maximizer A = A(s) in this problem deﬁnes the optimal strategy: if the
controlled process is in state s, then the optimal action is A(s).
   Consider, as a ﬁrst example without optimization, a Wiener process with
positive drift a and diﬀusion constant b = 0,

                   dR(t) = adt + bdW (t), t ≥ 0, R(0) = s.

We want to determine the ruin probability

              ψ(s) = P {R(t) < 0 for some t | R(0) = s}, s > 0.

The process R(t) has the inﬁnitesimal generator
140    Christian Hipp

                                             1
                          Lf (s) = af  (s) + b2 f  (s).                     (9)
                                             2
For a short time interval from 0 to dt, there might be ruin in [0, dt] - which hap-
pens with probability o(dt) - or ruin occurs after dt with probability ψ(R(dt)).
Integrating over all possible values for R(dt), we obtain

                          ψ(s) = E[ψ(R(dt))] + o(dt).

Assuming that the function ψ(s) is in the domain D of L, we get the diﬀeren-
tial equation (which corresponds to our integro-diﬀerential equations for the
ruin probabilities in models with jumps)
                                       1
                         0 = aψ  (s) + b2 ψ  (s), s > 0.
                                       2
The general solution to this linear diﬀerential equation with constant coeﬃ-
cients reads
                       ψ(s) = C1 + C2 exp(−2as/b2).
For s → ∞ we should have ψ(s) → 0, so C1 = 0. At s = 0 we are ruined
immediately because of the ﬂuctuation of the Wiener process, so C2 = 1. As
a conclusion, ψ(s) = exp(−2a/b2 s). Of course this is not a rigorous proof for
the ruin formula since ψ(s) ∈ D was just assumed. For this we will use the
veriﬁcation argument below.
    Consider next the optimal investment problem of Browne [4]. For a given
investment strategy A(t) (A(t) is the amount invested at time t) the risk
process of an investor is given by

                dRA (t) = αdt + βdV (t) + A(t)(adt + bdW (t)),

where V (t), W (t) are two independent standard Wiener processes. The ﬁrst
part might model the return in an insurance portfolio modelled by a Brownian
motion with drift, and the second the investment return in a risky asset with
price process modelled by logarithmic Brownian motion. The problem is to
ﬁnd the optimal investment strategy A(t) which maximizes survival probabil-
ity
                  δ(s) = P {RA (t) ≥ 0 for all t | RA (0) = s}.
According to (8) the HJB-equation for this problem reads
                        1                          1
      0 = max{αV  (s) + β 2 V  (s) + AaV  (s) + A2 b2 V  (s)}, s > 0.
           A            2                          2
A maximizing A exists only if V  (s) ≤ 0, and in this case it is given by

                                         a V  (s)
                            A = A(s) = − 2  .
                                        b V (s)
Plugging in we obtain
                         Stochastic Control with Application in Insurance   141

                              1               1 a2 V  (s)2
                0 = αV  (s) + β 2 V  (s) +               , s > 0.
                              2               2 b2 V  (s)
After dividing by V  (s) and computing the negative solution −k of the equa-
tion
                                    1 1 1 a2
                             0 = α + β2 +         z
                                    2 z      2 b2
we obtain a solution of the form
                           a
                 A(s) = 2 k, V (s) = 1 − exp(−ks), s > 0.
                           b
This tells us that a constant amount ak/b2 is optimal, and the resulting ruin
probability exp(−ks) is smaller - as it should be - than the ruin probability
without investment exp(−2α/β 2 s) for s > 0. Notice that the optimal strategy
is not buy and hold but an anticyclic strategy: if prices go up then shares
are sold, and if prices go down then shares are bought. Again, the above
computations do not yet solve our maximization problem since we do not
know wether V (s) is the unique solution of the HJB equation and wether it is
the maximal possible survival probability δ(s). For this we use the veriﬁcation
argument below.

Verification Argument

The veriﬁcation argument closes the gap between a solution of an integro-
diﬀerential equation or a HJB equation and the given problem of computing
ruin probabilities or maximizing an objective function. For ease of exposition
we reconsider the ruin probability ψ(s) for the Brownian motion with positive
drift. We had found a solution V (s) = exp(−2a/b2 s) of the equation (9). Let
τ be the ruin time of the process R(t) = at + bW (t), and deﬁne the process
Y (t) = V (R(t ∧ τ )). From equation (9) one can read that Y (t) is a martingale
for which
                            E[Y (t)] = Y (0) = V (s).
For t → ∞ we have Y (t) → 1 on the set {τ < ∞}, and Y (t) → 0 on the set
{τ = ∞}. From bounded convergence we obtain that

                  V (s) = lim E[Y (t)] = P {τ < ∞} = ψ(s),
                           t→∞

which proves that V (s)is indeed the ruin probability for initial surplus s.
   As a second example we consider the optimization problem of Browne [4].
We have seen that the HJB (8) has a smooth bounded solution V (s) with the
property that for all possible actions A we have

                              LA V (s) ≥ 0, s > 0.                          (10)

Let A∗ (t) = ak/b2 be the strategy constructed with the optimizer A(s) of
the HJB equation (the constant amount invested), and A(t) any arbitrary
142    Christian Hipp

admissible strategy. Let R∗ (t) and R(t) be the corresponding risk processes
and τ ∗ and τ the corresponding ruin times, and deﬁne the processes Y ∗ (t) =
V (R∗ (t∧τ ∗ ) and Y (t) = V (R(t∧τ )). From the HJB equation we see that Y ∗ (t)
is a martingale, and according to (10) the process Y (t) is a supermartingale,
and both are starting at the value V (s). So for all t ≥ 0

                           V (s) = E[Y ∗ (t)] ≥ E[Y (t)].

For the further reasoning we need boundary values which are derived from
the optimization problem and which are satisﬁed by the solution V (s). In our
optimization problem we wanted to maximize the survival probability δ(s) of
the (controlled) risk process. The natural boundary conditions for the value
function δ(s) are δ(∞) = 0 (and δ(s) = 1 for s < 0). Our solution V (s) of
(8) satisﬁes the same boundary conditions (for the second condition, observe
that V (s) can be arbitrary for s ≤ 0). For t → ∞ we have

              Y (t) → 0 on {τ < ∞}, Y ∗ (t) → 0 on {τ ∗ < ∞},

and, since R∗ (t) is a Brownian motion with positive drift, Y ∗ (t) → 1 on {τ ∗ =
∞}. So, V (s) = limt→∞ E[Y ∗ (t)] = P {τ ∗ < ∞}. For the process Y (t) the
asymptotic behavior for t → ∞ is less clear. For ε > 0 we therefore introduce
the process R1 (t) with investment strategy A(t) + ε2 and initial surplus s + ε,
the corresponding ruin time τ1 and the process Y1 (t) = V (R1 (t ∧ τ1 )). We
have R1 (t) = ε + R(t) + ε2 (at + bW (t)) and hence R1 (t) → ∞ on the set
{τ1 = τ = ∞}. As above, we have V (s + ε) ≥ P {τ1 = τ = ∞}. Furthermore,

                P {τ1 < ∞ and τ = ∞}
                        ≤ P {ε + ε2 (at + bW (t)) < 0 for some t}
                        = exp(−2aε2 /(b2 ε4 ) ε),

and hence

             P {τ = ∞} ≤ P {τ1 = τ = ∞} + exp(−2aε2 /(b2 ε4 ) ε)
                  ≤ V (s + ε) + exp(−2aε2 /(b2 ε4 ) ε).

With ε → 0 we obtain P {τ = ∞} ≤ V (s). So, for arbitrary investment
strategy A(t) the corresponding survival probability δ(s) is bounded by V (s),

                                   δ(s) ≤ V (s),

and the maximum is attained by the strategy A∗ (t).
    In the following optimization problems, the veriﬁcation argument is similar
to the one in Browne’s problem, so we omit it and refer to the literature
whenever it does not follow the same pattern (as, e.g., in the case of optimal
reinsurance).
                         Stochastic Control with Application in Insurance      143

Steps for Solution

For the solution of a stochastic control problem via the HJB equation we will
go through the following steps: write down the controlled risk process for a
constant control A and its inﬁnitesimal generator, and from this write down
the HJB equation. Then show that this equation has a smooth solution satis-
fying the natural boundary conditions derived from the optimization problem.
Then use the veriﬁcation argument to show that the solution of the HJB equa-
tion is the value function of the optimization problem, and the maximizer in
the equation determines the optimal strategy in feedback form. The most
diﬃcult problem is step two: an explicit solution to a HJB equation in the
framework considered here is never possible; the best one can hope for is an
existence proof which renders a good numerical method for computations.


4 Optimal Investment for Insurers
4.1 HJB and its Handy Form

Here we consider investment strategies A(t) (the amount invested into the
risky asset) which are predictable processes with respect to the natural ﬁltra-
tion generated by the processes S(t) (the claims) and Z(t) (the stock price).
This means that for the strategy we may use all information available just be-
fore time t, so A(t) may not depend on the information that there is a claim
at time t or on the size of that claim. The HJB equation for the problem to
maximize survival probability by investment is
                                                1
   sup{λE[V (s − X) − V (s)] + (c + aA)V  (s) + b2 A2 V  (s)} = 0, s ≥ 0.
    A                                           2

Solving for A which is possible whenever V  (s) < 0 we obtain

                                         a V  (s)
                            A = A(s) = − 2  .
                                        b V (s)

If A(0) = 0 then the ﬂuctuations of the Wiener process would lead to immedi-
ate ruin, i.e. V (0) = 0, which cannot be optimal since without investment we
have δ(0) = 1 − λE[X]/c > 0 if λE[X] < c. Hence, A(0) = 0 or V  (0) = −∞.
If we plug in the optimal A(s) we obtain the integro-diﬀerential equation

                                                  1 a2 V  (s)2
             λE[V (s − X) − V (s)] + cV  (s) =                 , s ≥ 0.      (11)
                                                  2 b2 V  (s)

The natural boundary conditions are V (s) = 0 for s < 0, V (∞) = 1, and
V  (0) = −∞. This equation is of second order with a singularity at 0 (V  (0) =
−∞); it is of little use even for numerical solutions since for the integral term
g(s) = E[V (s − X)] the values of V (u) are needed for 0 ≤ u ≤ s, and for this
144     Christian Hipp

the singularity at zero is disturbing. We will replace the equation by a system
of interacting integro-diﬀerential equations which lead to a stable numerical
algorithm, to an elementary proof for the existence of a solution, and to an
almost explicit solution for the case of exponential claim sizes. To simplify the
notation we shall ﬁrst divide both sides of the equation by a2 /b2 and denote
the new claims intensity and the new premium intensity again by λ and c,
respectively. This leads to an equation with a = b = 1. Next we introduce the
function U (s) = A(s)2 and rewrite (11) as
                                             1       
               λ(g(s) − V (s)) + cV  (s) = − V  (s) U (s), s ≥ 0,               (12)
                                             2
        
where    U (s) denotes always the positive root of U (s). Assuming that
                         X has a continuous density h(x)
we see that the function g(s) has a continuous derivative for s ≥ 0, and so we
can diﬀerentiate once more and obtain
                                          1              1
      λ(g  (s) − V  (s)) + cV  (s) = − V  (s)A(s) − V  (s)A (s), s ≥ 0.
                                          2              2
Using V  (s)A(s) = −V  (s) and multiplying both sides of the equation by
A(s) we arrive at
            
                  1                            1
     U (x) (λ + )V  (x) − λg  (x) + cV  (x) = U  (x)V  (x), s ≥ 0. (13)
                   2                            4
The corresponding boundary conditions are V (s) = 0 for s < 0, U (0) = 0, and
V (∞) = 1. The two interaction diﬀerential equations (12) and (13) are equiv-
alent to equation (11) in the sense that (11) has a smooth concave solution
V (s) satisfying the natural boundary conditions iﬀ the system (12) and (13)
has a solution (V (s), U (s)) with V (s) concave, U (s) = (V  (s)/V  (s))2 , sat-
isfying the natural boundary conditions. The system of diﬀerential equations
can be used for numerical computation, and the following resulting algorithm
is stable. Start with U0 (s) = 0 and compute the function V0 (s) from (12) and
the natural boundary conditions (which yields the survival probability with-
out investment). With (V0 (s), U0 (s)) as starting points, deﬁne the sequence
of functions (Vn (s), Un (s)) recursively by gn (s) = E[Vn (s − X)],
              λ(Vn+1 (s) − gn (s))    
                                  = Vn+1 (s), s ≥ 0, Vn+1 (∞) = 1,               (14)
                c + 12 Un (s)
and
             1    g  (s)               1 
        λ+     − λ n      Un+1 (s) + c = Un+1 (s), s ≥ 0, Un+1 (0) = 0.
             2    Vn (s)                 4
The condition Vn+1 (∞) = 1 can be satisﬁes by homogeneity of the system:
if h(s) is a solution to (14), then αh(s) is a solution, too. Hence starting
                         Stochastic Control with Application in Insurance    145

with h(0) = 1 and norming we obtain with Vn+1 (s) = h(s)/h(∞) a solution
satisfying Vn+1 (∞) = 1. The sequence of functions (Vn (s), Un (s)) converges,
and the limit is a solution of the system (12) and (13) satisfying the natural
boundary conditions.

4.2 Existence of a Solution


There are two papers with an existence proof for the equation (11), one based
on more classical methods as in [48] (in [18]), the other with a monotonicity
proof (in [19]). For the proof in [18] one assumes a locally bounded density
h(x) of the claim size distribution, for the proof in [19] one needs a continuous
density h(x). The monotonicity proof does not only work for the optimal
investment problem in the Lundberg model but also for the multivariate setup
needed for Markov modulated risk processes.
    The monotonicity proof works as follows: ﬁrst one solves the problem for
a ﬁxed given function g(s) which is increasing, bounded and continuously dif-
ferentiable. The corresponding equation is the HJB equation for the following
optimization problem: for a given utility function g(s) maximize the expected
accumulated discounted wealth
                                   τ
                          E            exp(−λt)g(R(t))dt
                               0

by the choice of an optimal investment strategy A(t). One can show that the
HJB equation of this problem has a smooth solution Vg (s), the maximizer of
the HJB equation deﬁnes the optimal investment strategy, and Vg (s) is the
value function of the problem. The existence proof is based on a monotonicity
argument using an iteration scheme similar to the numerical algorithm above,
it makes use of diﬀerential inequalities studied in [47].
    Second, a monotone sequence of functions is deﬁned starting with V0 (s)
the survival probability without investment, and solving recursively for the
value function Vn+1 (s) of the above optimization problem with utility function
gn (s). The functions Vn (s) are the value function of the optimization problem
of optimal investment up to the n−th claim. If Vn+1 (s) ≥ Vn (s) then the same
is true for the corresponding functions g, and vice versa. So we can show that
we have a monotone sequence Vn (s) which converges, and the limit turns out
to be a solution of the original optimization problem.
    The veriﬁcation argument in the optimal investment problem follows ex-
actly the pattern described in section 3.2.

4.3 Exponential Claim Sizes

For exponential claim sizes with density h(x) = θ exp(−θx), x > 0, the sys-
tem of interacting diﬀerential equations separates, and one obtains a diﬀer-
146      Christian Hipp

ential equation for A(s) alone. This phenomenon is present not only for ex-
ponential distributions but for arbitrary phasetype distributions with a den-
sity satisfying a higher order linear diﬀerential equation with constant coeﬃ-
cients. These distributions have the nice property that the non-local operator
g(s) = E[V (s − X)] can be replaced by a local operator involving derivatives
of g(s) and V (s).
    To simplify the notation we assume that X has mean 1. If the density of
X is e−x , x > 0, then the function g(s) satisﬁes the diﬀerential equation

                           g  (s) = V (s) − g(s), s > 0.

From (12) we can see that g  (s) can be represented with the factor V  (s),
                                      
                                   1      1
          g (s) = V (s) − g(s) =       c+      U (s) V  (s), s ≥ 0,
                                    λ      2

and so we obtain a diﬀerential equation involving U (s) alone:
                                         
                       1        1               1
             U (x) λ + − c −         U (x) + c = U  (x), s ≥ 0.            (15)
                        2        2                4

This equation is closely related to the Lundberg equation below, with which
one can obtain the adjustment coeﬃcient for the exponential bound for the
ruin probability of the controlled risk process:
                                      1
                           λ + rc +     = λE[exp(rX)].
                                      2
This equation in the exponential case reads
                                          1    λ
                               λ + rc +     =
                                          2   1−r
or                               
                                     1     1
                          cr2 + r λ + − c − = 0.
                                     2     2
The equation has two solutions, R > 0 and −γ < 0. Since the coeﬃcients in
this equation and those in (15) coincide, we can write (15) as
                                          
                                 1             1
              A (s) = 2cA(s)        −R           + γ , s > 0,
                                A(s)         A(s)

and this diﬀerential equation has a solution with A(0) = 0 satisfying the
following transcendental equation
                             γ             R
                     1              1
                         −R             +γ       = exp(−(R + γ)s).          (16)
                    A(s)           A(s)
      A function u(s) with u(0) = 1 satisfying −u(s)/u (s) = A(s) is
                         Stochastic Control with Application in Insurance   147

                                        exp(−Rs)
                             u(s) =                .
                                      (1 + γA(s))R
The function u(s) is related to V  (s) and V (s) via
                                          λ
                              V  (s) =     V (0)u(s),
                                          c
and                                      ∞
                                       λ s u(y)dy
                         1 − V (s) =      ∞        .                       (17)
                                     c + λ 0 u(y)dy
                                           ∞
For an explicit expression of the constant 0 u(y)dy see [22].




            Fig. 1. Optimal Investment Strategies for Erlang Claims


    In Figure 1 the optimizer A(s) is shown for claim size distributions which
are exponential with mean 1, Exp(1) (lowest curve), Erlang(2) (convolution
of two Exp(1), middle curve) and Erlang(3) (convolution of three Exp(1), top
curve).

4.4 Two or More Risky Assets

If there are two or more risky assets in which investment is possible, then the
optimal investment problem is an optimal portfolio problem combined with
the problem of asset allocation (i.e. in equity on the one hand, and in the
money market on the other hand). If the price process of the risky assets is
148    Christian Hipp

modelled by the d−variate logarithmic Brownian motion (see (7), then these
two problems can be separated:
    The HJB of our control problem reads
                                                                      
  0 = sup λE[V (s − X) − V (s)] + (c + aT A)V  (s) + AT ΣΣ T AV  (s) , (18)
       A

where the maximum is taken over all d-vectors A = (A1 , ..., Ad ), and a =
(a1 , ..., ad ). The maximizer is
                                       V  (s)
                             A=−                (ΣΣ T )−1 a
                                       V  (s)
which is a scalar multiple of a vector which does not depend on s, only the
scalar is state dependent. The techniques developed in the univariate case
yield that the maximizer A(s) deﬁnes the optimal investment strategy in
feedback form, which is investment into a ﬁxed (state independent) portfolio
with portfolio weights given by (ΣΣ T )−1 a, only the total amount invested
into risky assets varies with the wealth s of the insurer. Hence the methods
in the univariate case, in particular the handy HJB, can be used also here for
the computation of the value function and the optimal strategy.


5 Optimal Reinsurance and Optimal New Business
For optimal reinsurance we introduce a general setup as in Vogt (2003). Let
A be the space of possible actions, and for a ∈ A let g(X, a) be the part of the
claim X paid by the insurer, and let X − g(X, a) be paid by the reinsurer. We
shall assume that 0 ≤ g(x, a) ≤ x and that x → g(x, a) is non-decreasing for
all a ∈ A. Furthermore, A should be a compact topological space for which
a → g(x, a) is continuous for all x. Finally, we assume that there is a0 ∈ A
for which g(x, a0 ) = x for all x. The reinsurance premium for active a equals
h(a), a continuous function on A. Then the risk process of the insurer under
a dynamic strategy a(t) evolves as
                                                   N (t)
                                 t                 
           R(t) = s + ct −           h(a(u))du −           g(Xi , a(Ti )), t ≥ 0.
                             0                     i=1

The problem is to ﬁnd the optimal admissible dynamic strategy a(t), t ≥ 0, for
which the survival probability of the insurer is maximal. Admissible strategies
are all predictable processes a(t) (with respect to the ﬁltration generated by
S(t)). The HJB equation for this problem is

           0 = sup {λE[V (s − g(X, a)) − V (s)] + (c − h(a))V  (s)},
               a∈A

and the natural boundary conditions are V (s) = 0 for s < 0 and V (∞) = 1.
There is no example for which this equation has an explicit solution, not
                          Stochastic Control with Application in Insurance       149

even the maximizer a(s) can be computed in closed form. The program in
this section is to prove existence of a smooth solution for this equation, and
to derive a numerical algorithm for its computation. In some cases, general
properties of the optimal solution can be given.
    The general approach starts with the observation that V  > 0 and hence
the sup is attained at some a for which c − h(a) > 0. Solving for V  (s) we
obtain                                                      
                                 λE[V (s) − V (s − g(X, a))]
                 V  (s) = inf                                 ,           (19)
                          a∈A0            c − h(a)
where A0 = {a ∈ A : h(a) < c}. This equation can be solved via the iteration
                                                        
                          λE[Vn (s) − Vn (s − g(X, a))]
          Vn+1 (s) = inf                                   , s ≥ 0,
                    a∈A0             c − h(a)
starting with V0 (s) the survival probability without reinsurance, i.e. with con-
tract speciﬁcation a0 . The sequence of functions Vn (s) is non-decreasing, so
it converges to a limiting function V (s) which turns out to be a solution of
equation (19). So the existence of a solution can be derived in a most general
framework. For numerical computation, the equation (19) yields a stable al-
gorithm. The boundary condition can again be achieved using homogeneity
of the equation.
    There are several possible pricing rules h(a) for the reinsurance contract.
One possible rule is the expectation principle
                              h(a) = λρE[X − g(X, a)]
with ρ > 1. Reinsurance is expensive under this rule if λρE[X] > c. Another
possible rule would be the variance principle
                h(a) = λE[X − g(X, a)] + ρλE[(X − g(X, a))2 ],
which is expensive if λE[X] + ρλE[X 2 ] > c. We shall, however, not allow
that the pricing rule for the reinsurer can change with time, which is a bit
unrealistic, it neglects liquidity cycles.
   For optimal new business we obtain a simpler HJB equation for which the
optimal strategy is bang-bang (since the HJB equation is linear in the control
variable): The HJB equation reads
0 = sup {λE[V (s − X) − V (s)]+cV  (s) + bλ1 E[V (s − Y )−V (s)]+bc1 V  (s)}
   0≤b≤1

which has an optimizer b = b(s) which is zero if λ1 E[V (s − Y ) − V (s)] +
c1 V  (s) ≤ 0 and is equal to one if λ1 E[V (s − Y ) − V (s)] + c1 V  (s) > 0. This
yields the following formula for the derivative V  (s) :
                          λE[V (s) − V (s − X)]
             V  (s) = min{                     ,                               (20)
                                     c
                   λE[V (s) − V (s − X)] + λ1 E[V (s) − V (s − X)]
                                                                   .
                                       c + c1
150    Christian Hipp

This equation can be solved via the iteration

                        λE[Vn (s) − Vn (s − X)]
         Vn+1 (s) = min{                         ,
                                     c
                  λE[Vn (s) − Vn (s − X)] + λ1 E[Vn (s) − Vn (s − Y )]
                                                                       }
                                       c + c1
which yields a non decreasing sequence of functions Vn (s) converging to a
function V (s) which is a solution to (20). For numerical computation, formula
(20) produces a stable algorithm.

5.1 Optimal Proportional Reinsurance

Here, A = [0, 1] and g(x, a) = ax. We consider the reinsurance premium rule
h(a) = λρ(1 − a)E[X] with λρE[X] > c The HJB equation in this case reads

                                   λE[V (s) − V (s − aX)]
                V  (s) = inf                             , s ≥ 0.         (21)
                         a∈[0,1]    (c − λρ(1 − a)E[X])

Not even in the exponential claim size case we can compute the value function
or the optimizer in explicit form. But for exponential [or phasetype] distribu-
tions we can replace the non local operator g(s, a) = E[V (s − aX)] by a local
one: for claims with density h(x) = exp(−x), x > 0, we have
                                   1
                     gs (s, a) =     (V (s) − g(s, a)), s > 0.
                                   a
Notice that the minimum in (21) is over a ∈ (a1 , 1] with a1 > 0 from λρ(1 −
a1 )E[X] = c.This implies that for the optimizer we have a(s) ≥ a1 . Hence in
the controlled risk process R∗ (t) under the optimizer strategy we have claims
bounded from below by some positive constant. Then one can easily show
that R∗ (t) → ∞ on the set of no ruin {τ ∗ = ∞}. This lower bound can not be
assumed for arbitrary strategies a(t), and hence for the veriﬁcation argument
one needs a diﬀerent reasoning. In the optimal investment problem we had
replaced the controlled process R(t) by a second one with slightly changed
control and initial surplus. Here one can replace the controlled process R(t)
by one in which the premium rate c of the ﬁrst insurer is slightly changed,
and then use continuity of the solution of (21) with respect to c. For details
see Schmidli [41] and Vogt [45].
    In Figure 2 we show the optimizer functions a(s) for the case of exponential
claims with diﬀerent means. Surprisingly, we see diﬀerent types of functions:
no reinsurance for all s (a(s) ≡ 1), continuous non-increasing, and ﬁnally with
jump and then increasing. In each case we see convergence of a(s) which is
investigated in more detail in section 6.4.
                                Stochastic Control with Application in Insurance     151




                         Fig. 2. Optimal Proportional Re Strategies


5.2 Optimal Unlimited XL Reinsurance

Here, A = [0, ∞] and g(x, a) = x ∧ a. We ﬁrst consider h(a) = λρE[(X − a)+ ],
the expectation principle. The HJB equation reads
                                             λE[V (s) − V (s − X ∧ a)]
                         V  (s) =     inf                             .            (22)
                                     0≤a≤∞           c − h(a)
The function to be minimized is discontinuous:

                                     g(s, a) = E[V (s − X ∧ a)]

has a jump at a = s.
    In Figure 3 we show the functions g(s, a) for exponential claim size. We
see that the maximizer is a = ∞ whenever the maximum is not in [0, s] (since
for a > s we have E[V (s − X ∧ a)] = E[V (s − X)] and since h(a) is non-
increasing). So the maximum will be at a = ∞, or at a = s, or in the interval
(a1 , s), where a1 is derived from h(a1 ) = c.
    For exponential claims the numerical computation of the value function
V (s) can be simpliﬁed: for h(x) = θe−x , x > 0, we have
                  a
  g(s, a) =           V (s − x)h(x)dx+V (s − a)e−θa
              0
                  s                                   s−a
         =            V (x)h(s − x)dx−e−θa              (x)h(s − a − x)dx+V (s − a)e−θa
              0                                   0
         = g(s) − e−θa g(s − a) + V (s − a)e−θa ,

where g(s) = E[V (s − X)]. In Figure 4 we show the maximizer a(s) for
exponential claim sizes; for small s we have a(s) = ∞, then a(s) = s which
152    Christian Hipp




                        Fig. 3. Integral Term with Jumps



means that under this reinsurance speciﬁcation the next claim will not cause
ruin, and then a(s) < s with converging a(s).
    For the veriﬁcation argument - which again uses variation of the premium
intensity - and for other technical details see [24] as well as [45].

5.3 Optimal XL Reinsurance

For XL-reinsurance with limit we have a control problem with two decision
variables: A = [0, ∞]× (0, ∞], where (b, L) ∈ A denotes the vector with prior-
ity b and limit L. No reinsurance will be identiﬁed by the pair (0, ∞). For this
case little more can be said about the value function and the optimal reinsur-
ance strategy besides existence and veriﬁcation statements, and asymptotic
properties in the small claims case. This is due to computational intractabil-
ity of the bivariate decision variable (which is not as bad as a bivariate state
variable, but nevertheless).
    One might conjecture that the insurer would always choose L = ∞ since
his survival will be caused by extremely large events, and so he will reinsure
the unlimited tail of the claim size distribution, as long as the reinsurance
premium does not give much weight to the tail. This would be the case, e.g.,
for Pareto claims and for the expectation principle. However, Vogt [45] showed
                        Stochastic Control with Application in Insurance   153




                       Fig. 4. Optimal XL-Re Strategy



that L = ∞ is never optimal under the expectation principle and for large
claim sizes with density f (x), and with hazard rate r(x) = f (x)/(1−F (x)) for
which r(x) → 0 when x → ∞ (which is true for Pareto claims). And for
exponential claims and the expectation principle, L = ∞ is always optimal.
This is against intuition, though true.

5.4 Optimal New Business

Here we have A = [0, 1], and the optimizer a(s) satisﬁes a(s) = 1 for s ≤ s0 ,
and a(s) = 0 for s > s0 , where s0 is the intersection point of the two curves
from the HJB equation

                              λE[V (s) − V (s − X)]
                         s→
                                        c
and
                 λE[V (s) − V (s − X)] + λ1 E[V (s) − V (s − Y )]
            s→                                                    .
                                    c + c1
154    Christian Hipp

At the point s = 0 the choice b = 1 is optimal whenever c/λ < c/λ1 , i.e. even
non-proﬁtable business (without a safety loading) would be written. Of course,
such strategies work only if there is a market on which (also non-proﬁtable)
insurance business can be sold (see [20]).


6 Asymptotic Behavior for Value Function and
Strategies
6.1 Optimal Investment: Exponential Claims

In the case of exponential claims the following equation characterizes A(s) :
                           γ             R
                   1              1
                       −R             +γ       = exp(−(R + γ)s),
                  A(s)           A(s)

where A(s) ≥ 0 (see 16). This implies A(s) → 1/R for s → ∞. Formula (17)
and the asymptotic relation u(s) ∼ exp(−Rs) together imply that the asymp-
totic behavior of the value function V (s) is given by 1 − V (s) ∼ C exp(−Rs),
s → ∞, where C is a positive constant. The same asymptotics can be ob-
tained by a constant strategy: A(s) ≡ 1/R yields a survival probability V1 (s)
satisfying 1 − V1 (s) ∼ C1 exp(−Rs), s → ∞.

6.2 Optimal Investment: Small Claims

The ruin probability in Lundberg’s risk model is exponentially bounded in
the case of small claims,

                          ψ 0 (s) ≤ exp(−R0 s), s ≥ 0,

where R0 - the adjustment coeﬃcient - is the solution of Lundberg’s equa-
tion (3). For this we need a safety loading and ﬁnite exponential moments
E[exp(rX)], r > 0, of the claims. Furthermore, this exponential bound is
sharp in the sense that

                        ψ 0 (s) ∼ C exp(−R0 s), s → ∞

(see (5)). With investment the same is true in the case of optimal investment in
which the adjustment coeﬃcient R > R0 is deﬁned via the modiﬁed Lundberg
equation
                                    a2
                         λ + cr + 2 = λE[exp(rX)].
                                   2b
For the inequality see [11], and for the asymptotics [17] and [22]. Furthermore,
the maximizer A(s) satisﬁes A(s) → 1/R, and the constant strategy based on
A(s) = 1/R has a ruin probability of the same exponential order exp(−Rs).
                          Stochastic Control with Application in Insurance   155

The asymptotics is derived in [22] under the assumption that E[exp(rX)] < ∞
for some r > R, that X has a continuous density, and the condition

                     sup E[exp(R(X − y)) | X > y] < ∞.
                      y

    The asymptotic behavior of the value function implies that optimal invest-
ment improves the situation because of R0 < R, but investment of a constant
amount does the same. This is disappointing: our optimal strategy is - at least
for large values of s - not much better than a very simple strategy. However,
the case of small claims is not the one important for applications.
    Notice that investment of a constant proportion into the risky asset cannot
be recommended in the small claims case. In Norberg and Kalashnikov [29] and
in Frolova et al. [10] it is shown that the ruin probability in this case behaves
as Cs−a for some C > 0, a > 0, which is as large as the ruin probability
without investment with Pareto claims (see (6)). So, investment can improve
the situation of the insurer, but investment of a constant proportion will not,
it will lead to a much more risky position. See also Paulsen and Gjessing [38].

6.3 Optimal Investment: Large Claims

For large claims (such as the family of subexponential distributions) a general
theory on the asymptotics of the value function in the optimal investment
problem is not available. One case has recently been considered and solved
by Karamata’s theory of regularly varying functions. It is the case in which
the claim size distribution has a tail which is regularly varying with exponent
ρ < −1, i.e.
                          P {X > t} = tρ L(t), t → ∞
with a slowly varying function L(t). In this case, the asymptotics of the ruin
probability without investment is given by

                          ψ 0 (s) ∼ C0 sρ+1 L0 (s), s → ∞,

with a diﬀerent slowly varying function L0 (s). Gaier and Grandits [12] could
prove that with optimal investment, the ruin probability ψ(s) = 1 − V (s)
satisﬁes
                         ψ(s) ∼ C1 sρ L1 (s), s → ∞,
and the optimizer A(s) is asymptotically linear,
                                         a
                           A(s) ∼              s, s → ∞.
                                    b2 (1 − ρ)

With the strategy derived from the linear function A(s) = (a/(b2 (1 − ρ))s one
can obtain almost the same asymptotic behavior of the corresponding ruin
probability ψ l (s) :
                        ψ l (s) ∼ C2 sρ L2 (s), s → ∞.
156         Christian Hipp

So also in this large claims case, insurance improves the situation of the in-
surer: sρ+1 is replaced by sρ , and this can be achieved - at least to the same
order, as one can show using the methods in [12] - by the investment of a
speciﬁc constant proportion of current wealth.

6.4 Optimal Reinsurance

For the general reinsurance problem there is an asymptotic behavior of the
value function and the optimal strategy in the small claims case: one can show
that for arrangements g(x, a), a ∈ A, satisfying the assumptions
•     A is a compact topological space,
•     x → g(x, a) is continuous for all x ∈ R,
•     x→ g(x, a) is monotone for all a ∈ A,
•     |g(x, a) − g(y, a)| ≤ |x − y| for all a ∈ A,
•     the adjustment coeﬃcient R = supa∈A R(a) exists, where R(a) is the pos-
      itive solution to the equation

                             λ + (c − h(a))r = λE[exp(rg(X, a))],

      and for claim size distributions satisfying
•     X has a continuous density h(x),
•     E[exp(rX)] < ∞ for some r > R,
•     sup{E[exp(R(X − y)) | X > y] < ∞
      the value function of the problem satisﬁes the asymptotic relation

                                 1 − V (s) ∼ C exp(−Rs),

and for the optimal strategy we have

                                    a(s) → a∗ , t → ∞,

where a∗ is the action for which R(a) attains its maximum (see Vogt [45]).
Also for the survival probability V1 (s) of the controlled process with constant
strategy a(t) ≡ a∗ we have 1 − V (s) ∼ C1 exp(−Rs).
    The computation of the adjustment coeﬃcient R = sup{R(a) : a ∈ A}
can be simpliﬁed: R is the positive parameter for which the function V (s) =
1 − e−Rs satisﬁes the HJB equation, i.e.

                   0 = sup {λE[1 − exp(Rg(X, a))] + R(c − h(a))},
                       a∈A

and a is the maximizer of this equation. To see this let R∗ be the solution of
        ∗

the above equation which we assume to be attained at some a∗ ∈ A. Observe
ﬁrst that for arbitrary a ∈ A we have

                       λE[exp(R∗ g(X, a)) − 1] ≥ R∗ (c − h(a)).
                         Stochastic Control with Application in Insurance     157

The adjustment coeﬃcients R(a) are deﬁned via

                 λE[exp(R(a)g(X, a)) − 1] = R(a)(c − h(a)),

and we have
                     λE[exp(rg(X, a)) − 1] ≥ r(c − h(a))
iﬀ r ≥ R(a). Applying this for r = R∗ we obtain R∗ ≥ R(a) for all a ∈ A.
Since R∗ = R(a∗ ) ≤ R we obtain the assertion R = R∗ .
    For further aspects of maximizing the adjustment coeﬃcient see [46].
    For large claims the situation is less transparent. For unlimited XL-reinsu-
rance the controlled process has an adjustment coeﬃcient R = supa∈A R(a),
and with this quantity the Lundberg inequality 1 − V (s) ≤ exp(−Rs) holds.
Numerical experiments support the conjecture that also in this case the strate-
gies converge to a∗ for which R = R(a∗ ) (see Vogt [45]). For (limited) XL-
reinsurance an adjustment coeﬃcient does not exist, but numerical experi-
ments still seem to indicate that the strategies converge (see [45]). In this
area, there are many interesting open questions which are also relevant for
practical applications.


7 A Control Problem with Constraint: Dividends and
Ruin
Since the problem of stochastic control with constraints is still open for inﬁnite
horizon cases and continuous time, we consider discrete time in this chapter.
The stochastic model presented is a toy model, but the method of solution
seems to be transferable to more complicated models, also to continuous time
models.

7.1 A Simple Insurance Model with Dividend Payments

Let X1 , X2 , ... be the total sum of claims per period modelled by iid nonneg-
ative integer valued random variables, let c be the total premium per period
which is a positive integer, and s the initial surplus which is a non negative
integer. The reserve R(t) of the company without dividend payment evolves
in discrete time as R(0) = s and

                      R(t + 1) = R(t) + c − Xt+1 , t ≥ 0.

We assume that P {Xt > c} > 0 and that c > E[Xt ]. Recall that the inﬁnite
time ruin probability

                     ψ 0 (s) = P {R(t) < 0 for some t ≥ 0}
158    Christian Hipp

satisﬁes the equation

                         ψ 0 (s) = E[ψ 0 (s + c − X)].

We consider dividends d(t) which are paid at the beginning of period t +
1, t ≥ 0. If F (t) is the σ−ﬁeld generated by R(h), h ≤ t, then d(t) is an
F (t)−measurable nonnegative random variable. As a measure of proﬁtability
we use expected accumulated discounted dividends:
                                       d            
                                       τ −1
                           ud (s) = E       v t d(t) ,
                                        t=0


where v is a discount factor. With dividend payment the reserve is Rd (t)
deﬁned by Rd (0) = s and

                 Rd (t + 1) = Rd (t) − d(t) + c − Xt+1 , t ≥ 0.           (23)

In the upper index of summation we use τ d as the ruin time in the risk process
Rd (t). The ruin probability of the reserve Rd (t) is denoted by

                            ψ d (s) = P {τ d < ∞}.

There is a tradeoﬀ between stability and proﬁtability: Minimizing ruin prob-
ability means no dividend payment, d(t) ≡ 0 or ud (s) = 0, and the reserve
process R(t) goes to +∞. Maximizing ud (s) leads to a dividend payment
scheme for which ruin is certain,

                           ψ d (s) = 1 for all s ≥ 0,

and the reserve process Rd (t) remains bounded (see Bühlmann ([5], chapter
6.4) and references given there, as well as Gerber (1979)).
    We consider the problem of optimal dividend payment under a ruin con-
straint, i.e. for 0 < α ≤ 1 and initial surplus ﬁxed we derive an optimal
dividend payment scheme d(t) for which

                                  ψ d (s) ≤ α                             (24)

and for which ud (s) is maximal in the class of all dividend payment schemes
satisfying the constraint (24). This is done using a modiﬁed Hamilton-Jacobi-
Bellman (HJB) equation and via the construction of the process of optimal
admissible ruin probabilities.

7.2 Modified HJB Equation

The HJB equation for the value function u(s) of the problem to maximize
proﬁtability without a ruin constraint is
                          Stochastic Control with Application in Insurance     159

                    u(s) = sup{δ + vE[u(s − δ + c − X)]},                      (25)
                                 δ

where the maximum is taken over all 0 ≤ δ ≤ s. The optimal strategy is then
deﬁned via (23) and
                            d(t) = δ(Rd (t)),
where δ = δ(s) is the maximizer in (25).The modiﬁed HJB for the value
function u(s, α) under the constraint (24) is

                u(s, α) = sup{δ + vE[u(s − δ + c − X, β(X))]},                 (26)
                           δ,β

where the maximum is taken over all 0 ≤ δ ≤ s and functions β(x) satisfying
E[β(X)] ≤ α and
                     ψ 0 (s − δ + c − x) ≤ β(x) ≤ 1.
If there is no admissible pair (δ, β), then the maximum is interpreted as zero.
Under the additional assumption vP {X < c} one can show (via a contrac-
tion argument) that equation (26) has a solution, and that the maximum is
attained at certain values δ = δ(s, α) and functions β(x) = β(s, α; x). With
these functions the process of optimal admissible ruin probabilities b(t), t ≥ 0,
is deﬁned as b(0) = α and

                      b(t + 1) = β(Rd (t), b(t); Xt+1 ), t ≥ 0,                (27)

and the optimal dividend payment strategy is deﬁned through

                           d(t) = δ(Rd (t), b(t)), t ≥ 0.                      (28)

It turns out that d(t) is an admissible strategy satisfying the constraint
(24), and that d(t) maximizes proﬁtability under this constraint. The pro-
cess b(t), t ≥ 0, is a martingale with mean α satisfying

         b(t) ≥ ψ 0 (Rd (t − 1) − d(t − 1) + c − Xt ) = ψ 0 (Rd (t)), t ≥ 0.

At time t the value b(t) is the ruin constraint which is active at t. Furthermore,

                         b(t) = P {τ d < ∞ | X1 , ..., Xt }.

The strategy d(t) is path dependent: for t ≥ 0 the value d(t) depends on Rd (t)
and b(t), i.e. on the current state of the reserve and the current active ruin
constraint. For details see [21].

7.3 Numerical Example and Conjectures

The numerical computation of the value function and the optimal strategy is
based on a recursive solution of equation (26):
160       Christian Hipp

               un+1 (s, α) = sup{δ + vE[un (s − δ + c − X, β(X))]}.
                              δ,β

Again, a contraction argument implies that the sequence of functions un (s, α)
converges. As an example we consider the special case of a skip free risk
process: c = 1, P {X1 = 0} = 1 − P {X1 = 2} = 0.7. Using the above it-
eration we computed the functions u(s, α), β1 (s, α) = β(s, α; 1) (the value
for β2 (s, α) = β(s, α; 2) can be derived from the martingale condition), and
δ(s, α). For α ≤ ψ 0 (s) we know that u(s, α) = 0, and we have set β(s, α; 1) = 1.
From the numerical results we derive the following conjectures:
               
 1) δ(s, α) = ∞  i=1 1(α>α(s)) , α(0) = ... = α(4) = 1, α(5) = 0.1055, α(6) =
    0.041, α(7) = 0.0185, α(8) = 0.009.
 2) β1 (s, α) = ψ 0 (s + 1) + (α − ψ 0 (s))(1 − ψ 0 (s + 1))/(1 − ψ 0 (s)), α ≥ ψ 0 (s).
 3) uα (s, α) = ∞ at the point inf{a : u(s, a) > 0} = ψ 0 (s).
      Conjecture 2. is obvious for s = 0 : it follows from β2 (0, α) = 1 and

                           pβ1 (0, α) + (1 − p)β2 (0, α) = α.

    The corresponding problem without ruin constraint has an optimal strat-
egy which pays dividends whenever the surplus s reaches the value 5, i.e.
δ(s, 1) = 0, s = 0, ..., 4, δ(5, 1) = 1. The value function u(s) can be computed
using the following system of linear equations:

                  u(0) = vpu(1)
                  u(i) = vpu(i + 1) + v(1 − p)u(i − 1), i = 1, ..., 4
                  u(5) = 1 + u(4);

we obtain

                 u(0) = 6.2752, u(1) = 9.2335, u(2) = 10.8971,
                 u(3) = 12.0771, u(4) = 13.1004, u(5) = 14.1004.

Our numerical results in the constrained case are in line with these values:
δ(s, α) = 0 for s = 0, ..., 4 and all α (see assertion (h) in the above Lemma,
and u(s, 1) = u(s).
    Figures 5 and 6 show the value function u(s, α) and the function β(s, α)
for s = 0, ..., 10, computed with a step size of ∆ = 1/2000 (i.e. u(s, α), β(s, α)
are approximated at the points k∆, k = 0, ..., 2000), and the range of s is
restricted to s ≤ 20. On the x−axis α runs from 0 to 1. For each value of s a
separate curve is shown.
                         Stochastic Control with Application in Insurance     161




                 Fig. 5. Value Function for Optimal Dividends




                          Fig. 6. Running Constraints


7.4 Earlier and Further Work

Earlier approaches to optimal dividend payment without constraints or with
diﬀerent constraints can be found in Bühlmann’s book [5], in Gerber ([14] and
[15]), and in Paulsen [36]. The Lagrange multiplier method used in Altman
[1] does not seem to work in the inﬁnite horizon situation considered above.
Hipp and Schmidli [23] compute optimal dividend strategies satisfying (24) of
the form                       
                                 0 if Rd (t) ≤ c(s, α)
                        d(t) =                                            (29)
                                 M if Rd (t) > c(s, α)
for compound risk processes R(t) in continuous time, and for exponentially
distributed claim sizes. These strategies are optimal only in the class of strate-
gies having form (29). They show that universal optimal strategies satisfying
162       Christian Hipp

(24) can be derived from a modiﬁed HJB, adjusted to the Lundberg model:

             0 = min[sup{λE[u(s + c − X, β(X)) − u(s, α)] − ρu(s, α)       (30)
                       β
               +cus (s, α) − λ(E[β(X)] − α)uα (s, α)}, 1 − us (s, α)].

Again, the maximum is taken over all functions β(x) satisfying the following
constraint:
                         1 ≥ β(x) ≥ ψ 0 (s − x).
Notice that here we do not have the restriction E[β(X)] = α.


8 Conclusions
The techniques and methods of risk management described in this survey pa-
per are presented from a theoretical viewpoint (existence of optimal strategies,
their properties, and the construction of numerical algorithms). Of course, the
implementation of these methods in real life needs a considerable amount of
additional work, such as
•     parameter estimation,
•     sensitivity investigations and
•     real markets modelling.
All these points are related, but the main and most diﬃcult implementation
problem would be the last one. To be more speciﬁc, we consider two aspects:
•     transaction costs for investment, and
•     illiquid reinsurance markets.
For the ﬁrst problem, one might look for strategies which are suboptimal
and have low transaction costs. The second problem is based on the fact
that reinsurance contracts are never adjusted in continuous time, and when
they are adjusted, the reinsurance premium is ﬁxed via a new bargaining
which takes the actual market situation into account. To come closer to op-
timal reinsurance one would look for suboptimal strategies which could be
implemented into a multi-year reinsurance contract. Stochastic control for
reinsurance would help to ﬁnd such suboptimal strategies (e.g. in unlimited
XL-reinsurance, with three levels ”no reinsurance”, ”priority equals surplus”,
and ”constant (asymptotic) priority”, which are active automatically when
the surplus is low, intermediate, or large, respectively). Today’s insurance
companies are not yet using these ideas of sophisticated risk management;
times of increasing costs of capital will, however, generate a demand for the
methods presented in this paper.
                          Stochastic Control with Application in Insurance       163

References
 1. Altman, E. (1999) Constrained Markov decision processes. Chapman&Hall, New
    York.
 2. Asmussen, S. and M. Taksar (1997) Controlled diﬀusion models for optimal
    dividend payout. Insurance: Mathematics and Economics 20, 1-15.
 3. Brockett, P., and Xia, X. (1995) Operations research in insurance: a review.
    Trans. Act. Soc.XLVII, 7-80.
 4. Browne, S. (1995) Optimal investment policies for a ﬁrm with a random risk
    process: exponential utility and minimizing the probability of ruin. Math. Op-
    erations Res. 20, 937-958.
 5. Bühlmann, H. (1996) Mathematical Methods of Risk Theory. Springer, Berlin.
 6. Dufresne, F. and Gerber, H.U. (1991). Risk theory for the compound Poisson
    process that is perturbed by diﬀusion. Insurance: Math. Econom. 10, 51–59.
 7. Embrechts, P, Klüppelberg, C., and Mikosch, T. (2001) Modelling extremal
    eventsfor insurance and ﬁnance. 3rd ed. Springer, Berlin.
 8. Fleming, W.H. and Rishel, R.W. (1975) Deterministic and stochastic optimal
    control. Springer, New York.
 9. Fleming, W.H. and Soner, M. (1993) Controlled Markov processes and viscosity
    solutions. Springer, New York.
10. Frolova, A., Kabanov, Y., Pergamenshchikov, S. (2002) In the insurance business
    risky investments are dangerous. Finance and Stochastics, 6, 227-235.
11. Gaier, J., Grandits, P. and Schachermeyer, W. (2003). Asymptotic ruin proba-
    bilities and optimal investment. To appear in: Annals of Applied Probability
12. Gaier, J. and Grandits, P. (2001) Ruin probabilities in the presence of regularly
    varying tails and optimal investment. Preprint, University of Vienna.
13. Gerber, H.U. (1969). Entscheidungskriterien für den zusammengesetzten
    Poisson-Prozess. Schweiz. Verein. Versicherungsmath. Mitt. 69, 185–228.
14. Gerber, H. U. (1979) An Introduction to Mathematical Risk Theory. S.S. Hueb-
    ner Foundation Monographs, University of Pennsilvania.
15. Gerber, H. U. (1981) On the probability of ruin in the presence of a linear
    dividend barrier. Scand. Act. J. 2, 105-115.
16. Grandell, J. (1991) Aspects of Risk Theory. Springer, New York.
17. Grandits, P. (2003) An analogue of the Cramer-Lundberg approximation in the
    optimal investment case. Preprint, Technical University Vienna.
18. Hipp, C. and Plum, M. (2000). Optimal investment for insurers. Insurance:
    Math. Econom. 27, 215–228.
19. Hipp, C. and Plum, M. (2003) Optimal investment for investors with state
    dependent income, and for insurers. Finance and Stochastics 7, 299-321.
20. Hipp, C., and Taksar, M. (2000) Stochastic Control for Optimal New Business.
    Insurance: Mathematics and Economics 26, 185-192
21. Hipp, C. (2003) Optimal dividend payment under a ruin constraint: discrete
    time and state space. To appear in: Blätter der DGVFM.
22. Hipp, C. and Schmidli, H. (2003) Asymptotics of the ruin probability for the
    controlled risk process: the small claims case. To appear in: Scandinavian Ac-
    tuarial J.
23. Hipp, C. and Schmidli, H. (2003) Dividend optimization under a ruin constraint:
    the Lundberg model. In preparation.
24. Hipp, C. and Vogt, M. (2003) Optimal dynamic XL reinsurance. To appear in
    ASTIN Bulletin.
164     Christian Hipp

25. Hoejgaard, B. and M. Taksar (1998) Optimal proportional reinsurance policies
    for diﬀusion models. Scand. Actuarial J. 166-180.
26. Højgaard, B. and Taksar, M. (1998). Optimal proportional reinsurance policies
    for diﬀusion models with transaction costs. Insurance Math. Econom. 22, 41–51.
27. Hoejgaard, B. and M. Taksar (1998) Controlling risk exposure and dividents
    payout schemes: Insurance company example. Mathematical Finance, to appear.
28. Højgaard, B. (2000). Optimal dynamic premium control in non-life insurance.
    Maximizing dividend pay-outs. Preprint, University of Aalborg.
29. Kalashnikov, V. and Norberg, R. (2002) Power tailed ruin probabilities in the
    presence of small claims and risky investments. Stoch. Proc. Appl. 98.
30. Karatzas, I., Shreve, S. (1997) Methods of mathematical ﬁnance. Springer, Hei-
    delberg.
31. Lundberg, P. (1903) Approximerad framställing av sannolikhetsfunktionen.
    Aterförsäkring av kollektivrisker. Akad. Afhandling. Almqvist & Wiksell, Up-
    salla.
32. Martin-Löf, A. (1994) Lectures on the use of control theory in insurance. Scand.
    Actuarial J. 1-25.
33. Merton, R.C. (1969) Lifetime portfolio selection under uncertainity: The
    continuos-time case. Review of Economics and Statistics, 51, 247-257.
34. Merton, R.C. (1971) Optimum consumption and portfolio rules in a continous-
    time model. Journal of Economic Theory, 3, 373-413.
35. Øksendal, B. (1998) Stochastic Diﬀerential Equations, an Introduction with
    Applications. 5th ed., Springer, Berlin.
36. Paulsen, J. (1998) Ruin theory with compounding assets - a survey. Insurance:
    Mathematics and Economics, 22, 3-16.
37. Paulsen, J. (2003) Optimal dividend payouts for diﬀusions with solvency con-
    straints. Preprint, University of Bergen.
38. Paulsen, J. and H.K. Gjessing (1997) Ruin theory with stochastic return on
    investments. Advances in Applied Probability, vol.29, 965-985.
39. Rolski, T. Schmidli, H. Schmidt, V. Teugels, J. (1998) Stochastic Processes for
    Insurance and Finance. Wiley Series in Probability and Statistics
40. Schmidli, H. (1995). Cramér-Lundberg approximations for ruin probabilities of
    risk processes perturbed by diﬀusion. Insurance: Math. Econom. 16, 135–149.
41. Schmidli, H. (2001). Optimal proportional reinsurance policies in a dynamic
    setting. Scand. Actuarial J., 55–68.
42. Schmidli, H. (2002). On minimising the ruin probability by investment and
    reinsurance. Ann. Appl. Probab., to appear.
43. Schmidli, H. (2002). Asymptotics of ruin probabilities for risk processes under
    optimal reinsurance policies. Preprint, Laboratory of Actuarial Mathematics,
    University of Copenhagen.
44. Taksar, M. (2000) Optimal Risk/Dividend Distribution Control Models: Appli-
    cations to Insurance. Mathematical Methods of Operations Research, 1, 1-42.
45. Vogt, M (2003) Optimale dynamische Rückversicherung - ein kontrolltheoretis-
    cher Ansatz. Thesis, University of Karlsruhe.
46. Waters, H. R. (1983) Some Mathematical Aspects of Reinsurance. Insurance,
    Mathematics and Economics 2, 17-26.
47. Walter, W. (1970) Diﬀerential and Integral Inequalities. Springer, New York.
48. Walter, W. (1998) Ordinary Diﬀerential Equations. Readings in Mathematics,
    Springer, New York.
Nonlinear Expectations, Nonlinear Evaluations
and Risk Measures

Shige Peng

Institute of Mathematics, Shandong University
250100, Jinan, China
peng@sdu.edu.cn

1 Introduction
1.1 Searching the Mechanism of Evaluations of Risky Assets

We are interested in the following problem: let (Xt )0≤t≤T be an Rd –valued
process, Y a random value depending on the trajectory of X. Assume that,
at each ﬁxed time t ≤ T , the information available to an agent (an individual,
a ﬁrm, or even a market) is the trajectory of X before t. Thus at time T ,
the random value Y (ω) will become known to this agent. The question is:
how this agent evaluates Y at the time t? If this Y is traded in a ﬁnancial
market, it is called a derivative, i.e. a contract whose outcome depends on the
evolution of the underlying process X. The output of this evaluation can be
the maximum value the agent can accept to buy it or the minimum value to
sell it. It may depend on his economic situation, his knowledge on the history
of X, his risk aversion and utility function. In many situation this individual
evaluation may be very diﬀerent from the actual market price.
    Examples of derivatives are futures and option contracts based on the
underlying asset X, such as a commodity, a stock index, the interest rate, an
exchange rate; or an individual stock; or a mortgage backed security. Here
the term derivative is in general sense, i.e., it may be a positive or a negative
number.

    The author would like to acknowledge the partial support from the Natural Sci-
    ence Foundation of China, grant No. 10131040. He would like to give his special
    thanks to the organizers as well as the audience of CIME–EMS school, in the
    beautiful town of Bressanone, for their warm hospitality and enthusiasm. This
    memorable Italian trip and lecture experience could never been realized with-
    out the persistence and the eﬀorts of the organizers to overcome the author’s
    ‘Shengen–Italy–visa–paradox’. He would like to thank Li Juan as well as Xu
    Mingyu for their careful examinations and suggestions to the manuscript.




K. Back et al.: LNM 1856, M. Frittelli and W. Runggaldier (Eds.), pp. 165–253, 2004.

c Springer-Verlag Berlin Heidelberg 2004
166    Shige Peng

     The well–known Black & Scholes option pricing theory (1973) has made the
most signiﬁcant contribution, over the last 30 years, in modeling the evaluation
of derivatives in ﬁnancial markets.
     One of the important limitations of Black–Scholes-Merton approach is that
it is heavily based on the assumption that the statistic behavior of the stochas-
tic process X is exogenously speciﬁed. The fact that the Black–Scholes pricing
of Y is independent of the preference of the involved individuals is also fre-
quently argued. On the other hand, in the situation where Y is not traded, the
main arguments of BS model, i.e. the replication of a claim in an arbitrage–
free market, are no longer viable, and the evaluation of Y is often preference–
dependent.
     In this lecture the evaluation of Y will be treated under a new viewpoint.
We will introduce an evaluation operator Et,T [Y ] to deﬁne the value of Y
evaluated by the agent at time t. This operator Et,T [·] assigns an (Xs )0≤s≤T –
dependent random variable Y to an (Xs )0≤s≤t –dependent Et,T [Y ]. Although
this value Et,T [Y ] is very complicated and is diﬀerent from one agent to anther,
we can still ﬁnd some axiomatic assumptions to describe the mathematical
properties of this operator. The evaluation of Y is treated as a ﬁltration consis-
tent nonlinear expectation or, more general, a ﬁltration consistent nonlinear
evaluation. We will prove that this expectation or evaluation is completely
determined by a simple function g.

1.2 Axiomatic Assumptions for Evaluations of Derivatives

General Situations: FtX –Consistent Nonlinear Evaluations

Let us give a more speciﬁc formulation to the above evaluation problem. Let
X = (Xt )t≥0 be a d–dimensional process, it may be the prices of stocks in a
ﬁnancial market, the rates of exchanges, the rates of local and global inﬂations
etc. We assume that at each time t ≥ 0, the information of an agent (a ﬁrm,
a group of people, a ﬁnancial market) is the history of X during the time
interval [0, t]. Namely, his actual ﬁltration is

                              FtX = σ{Xs ; s ≤ t}.

We denote the set of all real valued FtX –measurable random variables by
mFtX . Under this notation an X–underlying derivative Y , with maturity t ∈
[0, ∞), is an FtX –measurable random variable, i.e., Y ∈ mFtX . We will ﬁnd
the law of evaluation of Y at each time s ∈ [0, t]. We denote this evaluated
value by Es,t [Y ]. It is reasonable to assume that Es,t [Y ] is FsX –measurable.
We thus have the following system of evaluator: for each Y ∈ mFtX

                           Es,t [Y ] : mFtX −→ mFsX .

In particular
                             E0,t [Y ] : mFtX −→ R.
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures        167

We will make the following Axiomatic Assumptions for (Es,t [·])0≤s≤t<∞ :

(A1) Monotonicity: Es,t [Y ] ≥ Es,t [Y  ], if Y ≥ Y  .
(A2) Es,s [Y ] = Y, if Y ∈ mFsX , particularly E0,0 [c] = c.
(A3) Time consistency: Es,t [Et,T [Y ]] = Es,T [Y ], if s ≤ t ≤ T , Y ∈ mFTX .
(A4) “Zero–one law”: for each s ≤ t, Es,t [1A Y ] = 1A Es,t [Y ], ∀A ∈ FsX .

Remark 1.1. Conditions (A1) and (A2) are obvious. Condition (A3) means
that at the time t ≤ T , Et,T [Y ] can be also treated as a derivative with the
maturity t. At the time s ≤ t, the price Es,t [Et,T [Y ]] of this derivative is the
same as the price of the original derivative Y with maturity T , i.e., Es,T [Y ].

Remark 1.2. The meaning of condition (A4) is: at time s, the agent knows
whether X·∧s is in A. If it is in A, then the value Es,t [1A Y ] is the same
as Es,t [Y ] 1A Y = Y . Otherwise 1A Y is zero thus it costs nothing. A more
generalization of (A4) is
(A4’) For each s ≤ t,

                      1A Es,t [1A Y ] = 1A Es,t [Y ], ∀A ∈ FsX .

In this lecture we will not study this case (see Peng 2003 [Peng2003b]).

FtX –Consistent Nonlinear Expectations

In many situations we assume furthermore, instead of (A2) , that

(A2’) For each 0 ≤ s ≤ t, Y ∈ mFsX , Es,t [Y ] = Y .

Remark 1.3. The meaning of condition (A2’) is: the market has a zero–
interesting rate, i.e., rt ≡ 0. We observe that in many cases, even when rt ≡ 0,
we can still deﬁne the following discounted evaluation
                                                          T
                       Et,T
                        r
                            [Y ] := Et,T [Y exp(−             rs ds)].
                                                      t

This Et,T
      r
          [·] satisﬁes (A2’).

   Let us ﬁx a suﬃciently large T < ∞ and consider Es,t [Y ] for 0 ≤ s ≤ t ≤ T
and Y ∈ mFtX . By (A2’)

                        Es,t [Y ] = Es,t [Et,T [Y ]] = Es,T [Y ].

We then only need to treat E[Y |FsX ] := Es,T [Y ]:

                                E[Y |FsX ] : mFTX → mFsX ,
                       E[Y ] = E[Y |F0X ] : mFTX → R.
168       Shige Peng

      By the Axiomatic assumptions, we have, for each Y , Z ∈ mFTX and t ≤ T ,

(A1) Monotonicity: E[Y |FtX ] ≥ E[Z|FtX ], if Y ≥ Z;
(A2’) Constant–preserving: E[Y |FtX ] = Y, if Y ∈ mFtX ;
(A3) Time consistency: E[E[Y |FtX ]|FsX ] = E[Y |FsX ], if s ≤ t ≤ T ;
(A4) “Zero–one law”: E[1A Y |FtX ] = 1A E[Y |FtX ], ∀A ∈ FtX .

      In particular, the functional E[·] is a nonlinear expectation, i.e., it satisﬁes

(a1) Monotonicity: E[Y ] ≥ E[Z], if Y ≥ Z;
(a2) Constant–preserving: E[c] = c.

      From (A3) and (A4) we have, each 0 ≤ T < ∞ and Y ∈ mFTX ,

                        E[1A E[Y |FtX ]] = E[1A Y ], ∀A ∈ FtX .                   (1)

We recall that this is just the classical deﬁnition of the conditional expectation
given FtX . In the next section we will prove that in nonlinear situations we
can also derive all the Axiomatic assumptions (A1), (A2’), (A3) and (A4) by
this deﬁnition (1) provided E is strictly monotone. In this case we call E[·] an
FtX –consistent nonlinear expectation.

Remark 1.4. From the above reasoning it is clear that the Axiomatic assump-
tions (A1)–(A4) are also applied in many other situations to measuring a risky
value Y in a dynamical situation. In fact, an advantage is that they are also
workable in the situation where the risky value Y is not exchanged in mar-
kets. For example, a result of a decision is in general not exchangeable. For
example, it is applicable to an individual or a group’s evaluation of a deriva-
tive Y . In some situation an agent can not have all information FtX , but this
formulation can be also applied to the situation of partially observation, i.e.,
with a smaller ﬁltration Gt ⊂ Ft , t ≥ 0.

Remark 1.5. It is clear that for the formulation of an FtX –consistent evaluation
it is not needed to introduce an a priori probability space. But in this lecture
we will be within the framework of Brownian Motion ﬁltration (Ft )t≥0 . For
more general situation, see [Peng2002].

1.3 Organization of the Lecture

In the next section, we will give the formulations of ﬁltration consistent eval-
uations and expectations under the ﬁltration Ft generated by a Brownian
Motion. Then in Section 3, we present BSDE theory and introduce a large
sort of ﬁltration consistent nonlinear evaluations and expectations, i.e., g–
evaluations and g–expectations. This g–evaluation is entirely determined by
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures     169

a simple real function g. We also present a nonlinear decomposition theo-
rem of Doob–Meyer’s type, for the related g–supermartingale. This result
plays a central role in Section 4, in which we will prove that the notion of
g–expectations is large enough to represent all “regular” Ft –consistent non-
linear expectations. This result permit us to ﬁnd the simple mechanism, i.e.,
the function g, of the above apparently very abstract evaluations. We also
provide a simple method to test and then ﬁnd the function g. In Section 5, we
present some basic method to solve numerically BSDE such as g–expectations
and g–evaluations.
    The nonlinear martingale theorem in self–content in this lecture, including
the related upcrossing inequalities.


2 Brownian Filtration Consistent Evaluations and
Expectations
2.1 Main Notations and Definitions

In this lecture, we will study the above evaluation problem within the follow-
ing standard framework. Let (Ω, F , P ) be a probability space equipped with
a ﬁltration (Ft )t≥0, (Bt )t≥0 be a standard d-dimensional Brownian Motion
deﬁned on this space. We assume that (Ft ) is the natural ﬁltration of B:
                                                         -
                                                   0
                 Ft = σ{σ{Bs ; 0 ≤ s ≤ t} ∪ N }, F∞   :=   Ft .
                                                         t>0

where N is the collection of P –null sets in Ω. A vector valued stochastic
process Xt = X(ω, t), t ≥ 0, is said to be Ft -adapted (or more speciﬁcally
(Ft )0≤t<∞ -adapted), if for each t ∈ [0, ∞), (Xt (·)) is an Ft –measurable ran-
dom variable. Ft represents our information before time t. Thus the meaning
that X is Ft -adapted process is that at the current time t0 , we know all tra-
jectories of Xt for t ≤ t0 . All processes discussed in this lecture are assumed
to be Ft –adapted. We need the following notations. Let p ≥ 1 and τ ≤ T be
a given Ft –stopping time.
•   The scalar product and norm of the Euclid space Rn are respectively
    denoted by ·, · and | · |.
•   Lp (Fτ ; Rm ) :={the space of all real valued Fτ –measurable random vari-
    ables such that E[|ξ|p ] < ∞};
•   LpF (0, τ ; Rm ) :={Rm –valued and Ft –adapted and stochastic processes
                      τ
    such that E 0 |φt |p dt < ∞};
•   DF (0, τ ; R ) :={all RCLL processes in LpF (0, τ ; Rm ) such that
      p          m

    E[sup0≤t≤τ |φt |p ] < ∞};
     p                                               p
•   SF  (0, τ ; Rm ) :={all continuous processes in DF (0, τ ; Rm ) };
•   ST :={the collection of all Ft –stopping times bounded by τ ≤ T };
170      Shige Peng

•     ST0 :={τ ∈ ST and ∪ni=1 {τ = ti } = Ω, with some deterministic 0 ≤ t1 <
      · · · < tN }.
   In the case m = 1, we denote them by Lp (Fτ ), LpF (0, τ ), DF     p
                                                                        (0, τ ) and
 p                                           2
SF (0, τ ). We observe that all elements in DF (0, T ) are Ft –predictable. When
                    p
p = 2, the above L are separable Hilbert spaces.
   We observe the following fact: for each φ ∈ LpF (0, T ) there exists a pro-
gressively measurable process φ̄ which is stochastically equivalent to φ, i.e.,

                       P (ω : φt (ω) = φ̄t (ω)) = 1, ∀t ∈ [0, T ].

In this lecture, we will not distinguish the two processes.
    We now give a rigorous deﬁnition of Ft –consistent evaluations and expec-
tations:

Definition 2.1. The system of operators

                      Es,t [·] : L2 (Ft ) → L2 (Fs ), 0 ≤ s ≤ t ≤ T            (2)

is called an Ft –consistent nonlinear evaluation deﬁned on L2 (FT ) if for each
0 ≤ s ≤ t < T and for each Y and Y  ∈ L2 (Ft ), we have

(A1) Monotonicity: Et,T [Y ] ≥ Et,T [Y  ], a.s., if Y ≥ Y  , a.s.;
(A2) Et,t [Y ] = Y , if Y ∈ L2 (Ft ), a.s., particularly E0,0 [c] = c;
(A3) Time consistency: Er,s [Es,t [Y ]] = Er,t [Y ], a.s., if r ≤ s ≤ t ≤ T ;
(A4) “Zero–one law”: for each s ≤ t, Es,t [1A Y ] = 1A Es,t [Y ], a.s., ∀A ∈ Fs .

Remark 2.1. By (A4) it is easy to check that Es,t [0] = 0, a.s.. A condition
weaker than (A4) is

(A4’) For each s ≤ t, 1A Es,t [1A Y ] = 1A Es,t [Y ], a.s., ∀A ∈ Fs .

      As we discussed in the introduction, if (A2) is strengthen to

(A2’) Es,t [Y ] = Y, a.s., ∀Y ∈ L2 (Fs )

      then we have

Proposition 2.1. We assume (A1), (A2’), (A3) and (A4). Then, with the
deﬁnition
                 E[Y |Ft ] := Et,T [Y ], a.s., Y ∈ L2 (FT )       (3)
We have

(A1) Monotonicity: E[Y |Ft ] ≥ E[Z|Ft ], a.s., if Y ≥ Z, a.s.;
(A2’) Constant–preserving: E[Y |Ft ] = Y , a.s., if Y ∈ L2 (Ft );
(A3) Time consistency: E[E[Y |Ft ]|Fs ] = E[Y |Fs ], a.s., if s ≤ t ≤ T ;
(A4) “Zero–one law”: for each t, E[1A Y |Ft ] = 1A E[Y |Ft ], a.s., ∀A ∈ Ft .
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures         171

Definition 2.2. The system of operators
                    E[·|Ft ] : L2 (FT ) → L2 (Ft ), 0 ≤ t < T                   (4)
satisfying the above axiomatic assumptions (A1), (A2’), (A3) and (A4) is
called an Ft –consistent nonlinear expectation (or simply F –expectation) de-
ﬁned on L2 (FT ).

2.2 Ft –Consistent Nonlinear Expectations
The above Ft –consistent nonlinear expectations can be also introduced in a
classical way, beginning from the notion of nonlinear expectations:
Definition 2.3. A nonlinear expectation deﬁned on L2 (FT ) is a functional:
                                E[·] : L2 (FT ) −→ R
satisfying the following properties: (a1) Strict monotonicity:
                              if Y1 ≥ Y2 a.s., then          E[Y1 ] ≥ E[Y2 ];
         if   Y1 ≥ Y2     a.s., E[Y1 ] = E[Y2 ] ⇐⇒           Y1 = Y2 a.s.
   (a2) preserving of constants:
                          E[c] = c,    for each constant c.
Lemma 2.1. Let t ≤ T and η1 , η2 ∈ L2 (Ft ). If for each A ∈ Ft ,
                                 E[η1 1A ] = E[η2 1A ],
then we have
                                   η2 = η1 ,     a.s.                           (5)
Proof. We choose A = {η1 ≥ η2 } ∈ Ft . Since (η1 − η2 )1A ≥ 0 and E[η1 1A ] =
E[η2 1A ], it follows that η1 1A = η2 1A a.s.. Thus η2 ≥ η1 a.s. With the same
argument we can prove that η1 ≥ η2 a.s. It follows that (5) holds. The proof
is complete.                                                                 

Definition 2.4. A nonlinear expectation is called an F -expectation deﬁned on
L2 (FT ) if for each Y ∈ L2 (FT ) and t ∈ [0, T ], there exists a random variable
η ∈ L2 (Ft ), such that
                           E[Y 1A ] = E[η1A ],     ∀A ∈ Ft .                    (6)
    From Lemma 2.1, such an η is uniquely deﬁned. We also denote it by
η = E[Y |Ft ]. E[Y |Ft ] is called the conditional F -expectation of Y under Ft .
It is characterized by
                        E[Y 1A ] = E[E[Y |Ft ]1A ],     ∀A ∈ Ft .               (7)
    We will see that, in fact this deﬁnition of E[·|Ft ] coincides with Deﬁnition
2.2. Indeed, we have the following lemmas. The ﬁrst one checks (A3) and
(A2’):
172       Shige Peng

Lemma 2.2. We have, for each 0 ≤ s ≤ t ≤ T and Y ∈ FT ,

                           E[E[Y |Ft ]|Fs ] = E[Y |Fs ]     a.s. .             (8)

In particular,
                                  E[E[Y |Ft ]] = E[Y ].                        (9)
If Y ∈ L2 (Ft ), we also have

                                 E[Y |Ft ] = Y,    a. s..

Proof. Since A ∈ Fs ⊂ Ft , thus

                         E[E[E[Y |Ft ]|Fs ]1A ] = E[E[Y |Ft ]1A ]
                                               = E[Y 1A ]
                                               = E[E[Y |Fs ]1A ].

It follows from Lemma 2.1 that (8) holds. (9) follows easily from the fact that
F0 is the trivial σ-algebra (since B0 = 0). Finally, if Y ∈ L2 (Ft ), then the
only η ∈ L2 (Ft ) satisfying (6) is Y itself. Thus (A2’) holds.              
      The second lemma checks (A4):

Lemma 2.3. We have

                   E[Y 1A |Ft ] = E[Y |Ft ]1A ,    ∀A ∈ Ft ,         a.s. .   (10)

Proof. For each B ∈ Ft , we have

                        E[E[Y 1A |Ft ]1B ] = E[Y 1A 1B ]
                                           = E[E[Y |Ft ]1A∩B ]
                                           = E[[E[Y |Ft ]1A ]1B ].

Thus (10) holds.                                                                
      E[·|Ft ] has also the monotonicity property:

Lemma 2.4. For any X, Y ∈ L2 (FT ), if X ≤ Y a.s., then we have for each
t ∈ [0, T ] ,
                      E[X|Ft ] ≤ E[Y |Ft ] a.s.
In this case, if for some t ∈ [0, T ), one has E[X|Ft ] = E[Y |Ft ], a.s., then
X = Y , a.s..

Proof. Deﬁne Xt = E[X|Ft ] and Yt = E[Y |Ft ], and let A ∈ Ft . Because of
the monotonicity of E, we have

                       E[Xt 1A ] = E[X1A ] ≤ E[Y 1A ] = E[Yt 1A ].
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures          173

Now, take A = {Xt > Yt }. If P (A) > 0, the strict monotonicity of E implies
that
                            E[Xt 1A ] > E[Yt 1A ].
Comparing the two above inequalities, we conclude that P (A) = 0.
    Now if for some t ∈ [0, T ), one has E[X|Ft ] = E[Y |Ft ], then E[X] = E[Y ].
It follows from the strict monotonicity of E[·] that X = Y , a.s..            
   We then can conclude

Proposition 2.2. Let E[·] be deﬁned in Deﬁnition 2.3. If for each 0 ≤ t ≤
T < ∞ and Y ∈ L2 (FT ), there exists a E[Y |Ft ] ∈ L2 (Ω, Ft , P ) satisfying
relation (7), then (E[Y |Ft ])0≤t<T is an Ft –consistent nonlinear expectation
deﬁned on L2 (FT ).

Proof. We have already (A1), (A3) and (A4). (A2’) can be checked by a similar
argument.                                                                  

Lemma 2.5. For any Y , Y  ∈ L2 (FT ) and for each t ∈ [0, T ] and A ∈ Ft we
have
           E[Y 1A + Y  1AC |Ft ] = E[Y |Ft ]1A + E[Y  |Ft ]1AC        (11)

Proof. We have

 E[Y 1A + Y  1AC |Ft ] = E[Y 1A + Y  1AC |Ft ]1A + E[Y 1A + Y  1AC |Ft ]1AC
                        = E[(Y 1A + Y  1AC )1A |Ft ] + E[(Y 1A + Y  1AC )1AC |Ft ]
                       = E[Y 1A |Ft ] + E[Y  1AC |Ft ]
                       = E[Y |Ft ]1A + E[Y  |Ft ]1AC .

                                                                                   

Remark 2.2. (11) is equivalent to (A4’): 1A E[Y 1A |Ft ] = 1A E[Y |Ft ].

2.3 Ft -Consistent Nonlinear Evaluations

Just as in Subsection 2.2, we can also introduce Ft -consistent nonlinear eval-
uations in the following way:

Definition 2.5. An evaluation is a family of nonlinear functionals parame-
terized by t ∈ [0, T ]
                          E0,t [·] : L2 (Ft ) −→ R
which satisﬁes the following strict monotonicity properties: for each t ≥ 0 and
Y1 , Y2 ∈ L2 (Ft ), we have

                           if Y1 ≥ Y2 a.s., then E0,t [Y1 ] ≥ E0,t [Y2 ];
      if   Y1 ≥ Y2    a.s., then E0,t [Y1 ] = E0,t [Y2 ] iﬀ Y1 = Y2 a.s..
174      Shige Peng

Lemma 2.6. For each t ≤ T and η1 , η2 ∈ L2 (Ft ). If
                       E0,t [η1 1A ] ≤ E0,t [η2 1A ],      ∀A ∈ Ft ,
then
                                    η1 ≤ η2 ,      a.s.
If
                       E0,t [η1 1A ] = E0,t [η2 1A ],      ∀A ∈ Ft ,
then
                                    η2 = η1 ,      a.s.                      (12)
Proof. To prove the ﬁrst assertion, we set A = {η1 ≥ η2 } ∈ Ft . Since
(η1 − η2 )1A ≥ 0, thus the monotonicity yields E0,t [η1 1A ] ≥ E0,t [η2 1A ]. With
E0,t [η1 1A ] ≤ E0,t [η2 1A ], it then follows from the strict monotonicity that
η1 1A = η2 1A a.s.. i.e., η1 ≤ η2 a.s. The second assertion is a simple con-
sequence of the ﬁrst one.                                                       
      We can also deﬁne F – evaluation operators
Definition 2.6. A nonlinear evaluation (E0,t [·])t∈[0,T ] deﬁned on L2 (FT ) is
called F -evaluation if for each 0 ≤ s ≤ t ≤ T and Y ∈ L2 (Ft ) there exists a
random variable η ∈ L2 (Fs ), such that
                        E0,t [Y 1A ] = E0,s [η1A ],        ∀A ∈ Fs .

     From Lemma 2.6, such η is uniquely deﬁned. We denote it by η = Es,t [Y ].
Es,t [·] satisﬁes
                  E0,t [Y 1A ] = E0,s [Es,t [Y ]1A ], ∀A ∈ Fs .         (13)
We can prove that (Es,t [·])0≤s≤t≤T is the Ft –consistent nonlinear evaluation
deﬁned on L2 (FT ). We ﬁrst check (A3):
Lemma 2.7. For each 0 ≤ r ≤ s ≤ t ≤ T and Y ∈ L2 (Ft ), we have
                            Er,s [Es,t [Y ]] = Er,t [Y ]     a.s.            (14)
In particular,
                            E0,s [Es,t [Y ]] = E0,t [Y ]    a.s..            (15)
Proof. Since A ∈ Fr ⊂ Fs . Thus by (13),
                      E0,r [Er,s [Es,t [Y ]]1A ] = E0,s [Es,t [Y ]1A ]
                                                 = E0,t [Y 1A ]
                                                = E0,r [Er,t [Y ]1A ].
It follows from Lemma 2.6 that (14) holds.
    Let r = 0, (15) follows then easily from the fact that F0 is the trivial
σ-algebra (since B0 = 0).                                                 
      We then check (A4):
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures        175

Lemma 2.8. For each 0 ≤ s ≤ t, Y ∈ L2 (Ft ) and A ∈ Fs , we have

                           Es,t [Y 1A ] = Es,t [Y ]1A ,   a.s..               (16)

Proof. For each 0 ≤ s ≤ t and B ∈ Fs , we have, by (13),

                     E0,s [Es,t [Y 1A ]1B ] = E0,t [Y 1A 1B ]
                                            = E0,s [Es,t [Y ]1A∩B ]
                                           = E0,s [[Es,t [Y ]1A ]1B ].

It follows from Lemma 2.6 that (16) holds.                                       
   We also have (A2):

Lemma 2.9. For each 0 ≤ t < T , and η ∈ L2 (Ft ), we have

                                   Et,t [η] = η, a.s..

Proof. By (13) we have

                    E0,t [Et,t [η]1A ] = E0,t [η1A ], ∀A ∈ L2 (Ft ).

                                                                                 
   We then can conclude

Proposition 2.3. Let (E0,t [·])t∈[0,T ] be a nonlinear evaluation deﬁned on
L2 (FT ). If for each 0 ≤ s ≤ t ≤ T and Y ∈ L2 (Ft ), there exists an
Es,t [Y ] ∈ L2 (Fs ) satisfying relation (13), then (Es,t [Y ])0≤s≤t<T satisﬁes the
Axiomatic assumptions (A1)–(A4) listed in Deﬁnition 2.1.

Proof. The above three lemmas have proved (A2)–(A4). (A1) is a direct con-
sequence of the ﬁrst assertion of Lemma 2.6.                            
   Moreover, we can prove the following strict monotonicity Es,t [·].

Lemma 2.10. For each 0 ≤ s ≤ t ≤ T and X, Y ∈ L2 (Ft ) such that X ≤ Y
a.s., if Es,t [X] = Es,t [Y ], a.s, then X = Y a.s..

Proof. Since Es,t [X] = Es,t [Y ], thus

                      E0,t [X] = E0,s [Es,t [X]] = E0,s [Es,t [Y ]]
                               = E0,t [Y ].

   It follows from the strict monotonicity of E[·] that X = Y , a.s..
                                                                                 
   We also have the following properties
176       Shige Peng

Lemma 2.11. For each 0 ≤ s ≤ t ≤ T , X, Y ∈ L2 (Ft ) and A ∈ Fs , we have

                   Es,t [X1A + Y 1AC ] = Es,t [X]1A + Es,t [Y ]1AC .

Proof. According to Lemma 2.8,

      Es,t [X1A + Y 1AC ] = Es,t [X1A + Y 1AC ]1A + Es,t [X1A + Y 1AC ]1AC
                          = Es,t [(X1A + Y 1AC )1A ] + Es,t [(X1A + Y 1AC )1AC ]
                          = Es,t [X1A ] + Es,t [Y 1AC ]
                          = Es,t [X]1A + Es,t [Y ]1AC .

                                                                                                 



3 Backward Stochastic Diﬀerential Equations:
g–Evaluations and g–Expectations
3.1 BSDE: Existence, Uniqueness and Basic Estimates

BSDE Theory plays a central role in this lecture. A lot of Ft –consistent non-
linear expectations and evaluations are derived by BSDEs. We ﬁrst consider
the following form of BSDE:
                                       T                                        T
                       Yt = ξ +            g(s, Ys , Zs )ds −                       Zs dBs .   (17)
                                   t                                        t

The setting of our problem is somewhat unusual: to ﬁnd a pair of Ft -adapted
processes (Y, Z) ∈ L2F (0, T ; Rm × Rm×d ) satisfying BSDE (17).

Remark 3.1. The solution Y is an ordinary Itô’s process:
                                           t                                    t
                       Yt = Y0 −               g(s, Ys , Zs )ds +                   Zs dBs .
                                       0                                    0

    To prove the existence and uniqueness of BSDE (17) we ﬁrst consider a
very simple case: g is a real valued process that is independent of the variable
(y, z). We have

Lemma 3.1. For a ﬁxed ξ ∈ L2 (FT ) and g0 (·) satisfying
                                               T
                                  E(               |g0 (t)|dt)2 < ∞,
                                           0

there exists a unique pair of processes (y· , z· ) ∈ L2F (0, T ; R1+d), satisﬁes the
following BSDE
                                                   T                    T
                          yt = ξ +                     g0 (s)ds −           zs dBs .           (18)
                                               t                    t
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                          177

If g0 (·) ∈ L2F (0, T ), then (y· , z· ) ∈ SF
                                            2
                                              (0, T ) × L2F (0, T ; Rd). We have the
following basic estimate:
                                                    T
                                                         β
                             |yt |2 + EFt               [ |ys |2 + |zs |2 ]eβ(s−t) ds                            (19)
                                                t        2
                                                                            T
                                                2 Ft
                  ≤ EFt |ξ|2 eβ(T −t) +           E                             |g0 (s)|2 eβ(s−t) ds
                                                β                       t

In particular
                                                        T
                                                             β
                                   |y0 |2 + E               [ |ys |2 + |zs |2 ]eβs ds                            (20)
                                                    0        2
                                                                            T
                                                        2
                                 ≤ E|ξ|2 eβT +            E                     |g0 (s)|2 eβs ds,
                                                        β               0

where β is an arbitrary constant. We also have
                                                                                T
                   E[ sup |yt |2 ] ≤ c E[|ξ|2 +                                     |g0 (s)|2 ds],               (21)
                     0≤t≤T                                                  0

where the constant c depends only on T .
Proof. We deﬁne
                                                                T
                                 Mt = EFt [ξ +                      g0 (s)ds].
                                                            0
M is a square integrable (Ft )-martingale. By representation theorem of Brow-
nian martingale (see Lemma 7.1), there exists a unique adapted process
(zt ) ∈ L2F (0, T ; Rd) such that
                                                                t
                                   Mt = M0 +                        zs dBs .
                                                            0

Thus
                                                                T
                                  Mt = MT −                         zs dBs .
                                                            t
We denote
                             t                                          t                         T
            yt = M t −           g0 (s)ds = MT −                            g0 (s)ds −                zs dBs .
                         0                                          0                         t
                  T
Since MT = ξ + 0 g0 (s)ds, we have immediately (18).
   The uniqueness is a simple consequence of the estimate (20). We only need
to prove these two estimates. To prove (19), we ﬁrst consider the case where
ξ and g0 (·) are both bounded. Since
                                  $               %
                                                                T
                                 y t = EF t ξ +                     g0 (s)ds
                                                            t
178    Shige Peng

thus the process y is also bounded. We then apply Itô’s formula to |ys |2 eβs
for s ∈ [t, T ]:
                                         T
                  |yt |2 eβt +               [β|ys |2 + |zs |2 ]eβs ds
                                         t
                                         T                                                    T
                     2 βT
               = |ξ| e      +                2ys g0 (s)eβs ds −                                   eβs 2ys zs dBs .
                                     t                                                    t

We take conditional expectation under Ft on both sides of the above relation:
                                                                  T
                         |yt |2 eβt + EFt                             [β|ys |2 + |zs |2 ]eβs ds
                                                              t
                                                                          T
                     = EFt |ξ|2 eβT + EFt                                     2ys g0 (s)eβs ds.
                                                                      t

Thus
                                 T
              |yt |2 + EFt           [β|ys |2 + |zs |2 ]eβ(s−t) ds
                             t
                                                              T
           = EFt |ξ|2 eβ(T −t) + EFt                              2ys g0 (s)eβ(s−t) ds
                                                          t
                                                              T
                                                                   β        2
           ≤ EFt |ξ|2 eβ(T −t) + EFt                              [ |ys |2 + |g0 (s)|2 ]eβ(s−t) ds.
                                                          t        2        β
From this it follows (19) and (20).
    We now consider the case where ξ and g0 (·) are possibly unbounded. We
set
            ξ n := (ξ ∧ n) ∨ (−n),  g0n (s) := (g0 (s) ∧ n) ∨ (−n)
and
                                                      T                                   T
                      ytn := ξ n +                        g0n (s)ds −                         zsn dBs .              (22)
                                                  t                                   t

We observe that, for each positive integers n and k, ξ n , ξ k , g0n as well as g0k
are all bounded. We thus have
                                                                  T
                         |ytn |2 eβt + EFt                            [β|ysn |2 + |zsn |2 ]eβs ds                    (23)
                                                              t
                                                                          T
                    = EFt |ξ n |2 eβT + EFt                                   2ysn g0n (s)eβs ds
                                                                      t

and
                                                  T
                                                       β
                    |ytn |2 + EFt                     [ |ysn |2 + |zsn |2 ]eβ(s−t) ds                                (24)
                                              t        2
                                                                                  T
                                                           2 Ft
                ≤ EFt |ξ n |2 eβ(T −t) +                     E                        |g0n (s)|2 eβ(s−t) ds
                                                           β                  t
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                        179

as well as
                       T
                         β
                  E     [ |ysn − ysk |2 + |zsn − zsk |2 ]eβs ds
                      0  2
                                                         T
                                          2
               ≤ E|ξ n − ξ k |2 eβT +       E                   |g0n (s) − g0k (s)|2 eβs ds.
                                          β          0

The last inequality implies that both {y n } and {z n } are Cauchy sequences in
L2F (0, T ). Thus (19) is proved by letting n tends to ∞ in (24).
    It is clear that the solution y has continuous paths. (21) is a simple
consequence of (20) together with B-D-G inequality applied to (18). Thus
       2
y ∈ SF   (0, T ).                                                            

Remark 3.2. By passing to the limit in both sides of (22) as n → ∞, we also
have the relation
                                                T
                       |yt |2 eβt + EFt             [β|ys |2 + |zs |2 ]eβs ds                  (25)
                                            t
                                                                T
                      = EFt |ξ|2 eβT + EFt                          2ys g0 (s)eβs ds
                                                            t

and, in particular,
                                            T
                           |y0 |2 + E           [β|ys |2 + |zs |2 ]eβs ds                      (26)
                                        0
                                                        T
                        = E|ξ|2 eβT + E                     2ys g0 (s)eβs ds.
                                                    0

   With the above basic estimates we can consider the general case of BSDE
(17). We assume that
              g = g(ω, t, y, z) : Ω × [0, T ] × Rm × Rm×d → Rm
satisﬁes the following conditions: for each (y, z) ∈ Rm × Rm×d , g(·, y, z) is
an Rm –valued and Ft –adapted process satisfying the Lipschitz condition in
                                        
(y, z), i.e., for each y, y ∈ Rm and z, z ∈ Rm×d
                |g(t, y, z) − g(t, y  , z  )| ≤ C(|y − y  | + |z − z  |).                  (27)
We also assume
                                 g(·, 0, 0) ∈ L2F (0, T ).                                     (28)
The following is the basic result of BSDE: the existence and uniqueness the-
orem.
Theorem 3.1. Assume that g satisﬁes (28) and (27). Then for any given
terminal condition ξ ∈ L2 (FT ; Rm ), the BSDE (17) has a unique solution,
                                                                    2
i.e., there exists a unique pair of Ft -adapted processes (Y, Z) ∈ SF (0, T ; Rm)×
  2          m×d
LF (0, T ; R     ) satisfying (17).
180        Shige Peng

Proof. In the basic estimate (19) we ﬁx β = 8(1 + C 2 ), where C is the
Lipschitz constant of g in (y, z). To this β, we introduce a norm in the Hilbert
space L2F (0, T ; Rn):
                                                                  T
                                                                                              1
                                        v(·)β ≡ {E                  |vs |2 eβs ds} 2 .
                                                              0

Clearly this is equivalent to the original norm of L2F (0, T ; Rn ). But this norm
is more convenient to construct a contraction mapping in order to apply the
ﬁxed point theorem. We thus set
                                                    T                                     T
                                   Yt = ξ +             g(s, ys , zs )ds −                    Zs dBs
                                                t                                     t

We deﬁne a mapping

      I[(y., z.)] := (Y., Z.) : L2F (0, T ; Rm × Rm×d ) → L2F (0, T ; Rm × Rm×d ).

We need to prove that I is a contraction mapping under the norm  · β .
For any two elements (y, z) and (y  , z  ) in L2F (0, T ; Rm × Rm×d ) we set

                                 (Y, Z) = I[(y, z)],              (Y  , Z  ) = I[(y  , z  )],

and denote their diﬀerences by (ŷ, ẑ) = (y − y  , z − z  ), (Ŷ , Ẑ) = (Y − Y  , Z −
Z  ). By the basic estimate (20) we have
            T                                 T
              β                           2
       E     ( |Ŷs |2 + |Ẑs |2 )eβs ds ≤ E    |g(s, ys , zs ) − g(s, ys , zs )|2 eβs ds.
           0  2                           β 0
Since g satisﬁes Lipschitz condition, we have

                    βT
                                                 4C 2                                 T
             E     [ |Ŷs |2 + |Ẑs |2 ]eβs ds ≤      E                                   [|ŷs |2 + |ẑs |2 ]eβs ds.
                 0  2                             β                               0

Since β = 8(1 + C 2 ), thus
                             T                                                T
                                                                  1
                 E               [|Ŷs |2 + |Ẑs |2 ]eβs ds ≤       E             [|ŷs |2 + |ẑs |2 ]eβs ds,
                         0                                        2       0
or
                                                           1
                                           (Ŷ , Ẑ)β ≤ √ (ŷ, ẑ)β .
                                                            2
Thus I is a strict contraction mapping of L2F (0, T ; Rm × Rm×d ). It follows
by the ﬁxed point theorem that BSDE (17) has a unique solution. (Y, Z) ∈
L2F (0, T ; Rm × Rm×d ). It then follows from (28) and (27) that g(·, Y· , Z· ) ∈
L2F (0, T ). Thus by Lemma 3.1 Y ∈ SF  2
                                         (0, T ).                               
    The basic estimates (19) and (20) can also be applied to prove the con-
tinuous dependence theorem of BSDE (17) with respect to parameters. Let
(Y 1 , Z 1 ) and (Y 2 , Z 2 ) be respectively the solution of the following two BSDEs:
         Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                            181
                                   T                                                            T
               Yt1 = ξ 1 +             [g(s, Ys1 , Zs1 ) + ϕ1 s ]ds −                               Zs1 dBs .       (29)
                               t                                                            t

                                   T                                                            T
               Yt2 = ξ 2 +             [g(s, Ys2 , Zs2 ) + ϕ2 s ]ds −                               Zs2 dBs .       (30)
                               t                                                            t

Here the terminal condition ξ 1 and ξ 2 are given elements in L2 (FT ; Rm ) and
ϕ1 and ϕ2 are two given processes in L2F (0, T ; Rm). Let g be the same as in
Theorem3.1. Analogue to the previous method, using Itô’s formula applied to
|Ys1 − Ys2 |2 eβ(s−t) in the interval [t, T ], we can obtain the following estimate.

Theorem 3.2. The diﬀerence of the solutions of BSDE (29) and (30)satisﬁes
                                                  T
                              1
               |Yt1 − Yt2 |2 + EFt                    [|Ys1 − Ys2 |2 + |Zs1 − Zs2 |2 ]eβ(s−t) ds (31)
                              2               t
                                                          T
     ≤ EFt |ξ 1 − ξ 2 |2 eβ(T −t) + EFt                       |ϕ1s − ϕ2s |eβ(s−t) ds,
                                                      t

where β = 16(1 + C 2 ). We also have
                                                                                            T
         E[ sup     |Yt1 − Yt2 |2 ] ≤ cE[|ξ 1 − ξ 2 |2 ] + cE                                   |ϕ1s − ϕ2s |2 ds.   (32)
            0≤t≤T                                                                       0

In particular, when ϕ1s ≡ 0, (set ξ 2 = 0, ϕ2s = −g(s, 0, 0)),
                                                                                        T
                    E[ sup         |Yt1 |2 ] ≤ cE[|ξ 1 |2 ] + cE                            |g(s, 0, 0)|2 ds.       (33)
                       0≤t≤T                                                        0

where the constant c depends only on the Lipschitz constant of g and T .

Proof. We apply estimate (19) to (yt , zt ) = (Yt1 − Yt2 , Zt1 − Zt2 ):
                                                                  T
                                                                       β
                                   |yt |2 + EFt                       [ |ys |2 + |zs |2 ]eβ(s−t) ds
                                                              t        2
                                                                      T
                                    2
               ≤ EFt |ξ|2 eβ(T −t) + EFt                                  |ĝ(s)|2 eβ(s−t) ds,
                                    β                             t

where ĝ(s) := g(s, Ys1 , Zs1 )− g(s, Ys2 , Zs2 )+ ϕ1s − ϕ2s . This with |ĝ(s)| ≤ C(|yt |+
|zt |) + |ϕ1s − ϕ2s |, yields (32). This estimate with (21) yields (33).                  
    For a ﬁxed t0 ∈ [0, T ], we denote

               Ftt0 = σ{σ(Bs − Bt0 ; t0 ≤ s ≤ t) ∪ N },                                     t ∈ [t0 , T ].

    The following is a simple corollary of the uniqueness of BSDE (17).
182     Shige Peng

Proposition 3.1. We still assume that g satisﬁes Assumptions (28) and
(27). If moreover, for a ﬁxed t0 ∈ [0, T ] and for each (y, z) ∈ Rm ×
Rm×d , the process g(·, y, z) is (Ftt0 )-adapted on the interval [t0 , T ] and ξ ∈
L2 (Ω, FTt0 , P ; Rm ). Then the solution (Y., Z.) of BSDE (17) is also (Ftt0 )-
adapted on [t0 , T ]. In particular, Yt0 and Zt0 are deterministic.

Proof. Let (Y  , Z  ) be the solution of (Ftt0 )-adapted solution, on the interval
[t0 , T ] of the BSDE
                                        T                                  T
                     Yt = ξ +              g(s, Ys , Zs )ds −               Zs dBs0 ,
                                    t                                  t

where we denote Bt0 ≡ Bt − Bt0 . Observe that (Bt0 )t0 ≤s≤T is an (Ftt0 ) - Brow-
nian Motion on [t0 , T ]. On the other hand the same processes (Yt , Zt )t0 ≤t≤T
is also Ft –adapted and
                           T                       T
                               Zs dBs =               Zs dBs0 ,    t ∈ [t0 , T ].
                       t                       t

Thus from the uniqueness result of Theorem 3.1, The solution (Y, Z) of BSDE
(17) coincides with (Y  , Z  ) on [t0 , T ]. Thus (Y, Z) is (Ftt0 )-adapted. 

Remark 3.3. A special situation of BSDE (17) is when ξ is deterministic
and g(t, y, z) is a deterministic function of (t, y, z). In this case the solution
of BSDE (17) is simply (Y., Z.) ≡ (Y0 (·), 0), where Y0 (·) is the solution of the
following ordinary diﬀerential equation deﬁned on [0, T ]:

                       −Ẏ0 (t) = g(t, Y0 (t), 0),                  Y0 (T ) = ξ.

3.2 1–Dimensional BSDE

We will see that each standard 1–dimensional BSDE on [0, T ] induces an Ft –
consistent evaluation, called g–evaluation, where g = g(t, y, z) is the generator
of the corresponding BSDE which is a simple real valued function. If (and only
if) g satisﬁes g(t, y, 0) ≡ 0, then the corresponding Ft –consistent evaluation
becomes an Ft –consistent expectation. We also notice that the present state of
art of mathematical ﬁnance corresponds mostly to m = 1. It also covers many
linear or nonlinear parabolic and elliptic PDEs. In fact m > 1 corresponds to
systems of PDEs.
    The function g is deﬁned as follows

                     g(ω, t, y, z) : Ω × [0, T ] × R × Rd −→ R.

We assume, for each y, y  ∈ R, z, z  ∈ Rd , t ∈ [0, T ], g satisﬁes
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                          183
         
         
          (i)     g(·, y, z) ∈ L2F (0, T ), for each y ∈ R, z ∈ Rd ;
         
         
         
          (ii)    |g(t, y1 , z1 ) − g(t, y2 , z2 )| ≤ ν|y1 − y2 | + µ|z1 − z2 |;
         
                  and one of the following three conditions
                                                                                                 (34)
         
          (iii)      g(·, y, z)|y=0, z=0 ≡ 0;
         
         
         
          (iii’)     g(·, y, 0) ≡ 0;
         
           (iii”)      g is independent of y and g(·, z)|z=0 ≡ 0.
 where µ, ν are given non negative constants. It is clear that (iii”) ⇒ (iii’) ⇒
(iii).

Comparison Theorem
We ﬁrst present an important property: The Comparison Theorem of
BSDE. We will present this theorem in the case where the solution Y is
possibly a RCLL (right continuous with left limit) process i.e., P -almost all
of its paths of Y· (ω) are right continuous with left limit. An RCLL process
(At (ω))t∈[0,T ] is called an increasing process if P -almost all of its paths are
non-decreasing with A0 (ω) = 0.
We ﬁrst consider the following problem:
to ﬁnd a solution (Y, Z) ∈ L2F (0, T ; R1+d) of the following BSDE
                              T                                                  T
             Yt = ξ +             g(s, Ys , Zs )ds + (VT − Vt ) −                    Zs dBs ,    (35)
                          t                                                  t

The following is a simple corollary of Theorem 3.1.
Proposition 3.2. We assume (34)–(i), (ii). Then, for each ξ ∈ L2 (FT ) and
       2                                                   2
V ∈ DF   (0, T ), there exists a unique solution (Y, Z) ∈ DF (0, T )×L2F (0, T ; Rd)
                                             2
of the BSDE (35). Moreover Y + V ∈ SF (0, T ).
Proof. The case Vt ≡ 0 corresponds to Theorem 3.1. For the general situation
we let Ȳt := Yt + Vt . The existence and uniqueness of BSDE (35) is equivalent
                               2
to the solution (Ȳ , Z) ∈ DF    (0, T ) × L2F (0, T ; Rd) of the following standard
BSDE :
                                          T                                  T
              Ȳt = ξ + VT +                  g(s, Ȳs − Vs , Zs )ds −           Zs dBs .
                                      t                                  t
                                                                                                   
   For a given random variable
                                  ξˆ ∈ L2 (FT ), V̂ ∈ DF
                                                       2
                                                         (0, T )                                 (36)
let (Ŷ , Ẑ) ∈ L2F (0, T ; R1+d) be the solution of the following BSDE
                              T                                                  T
             Ŷt = ξ̂ +           g(s, Ŷs , Ẑs )ds + (V̂T − V̂t ) −                Ẑs dBs .   (37)
                          t                                                  t

It is easy to prove that the diﬀerence (Y − Ŷ , Z − Ẑ) satisﬁes exactly the same
estimate (31) given in Theorem 3.2. Using B–D–G inequality, we then derive
the following estimate.
184      Shige Peng

Proposition 3.3. We assume (34)–(i), (ii). Then the diﬀerence of the so-
lutions of BDSE (35) and (37) satisﬁes
                                                        T
E[ sup |Yt + Vt − (Ŷt + V̂t )|2 ] + E                      |Zs − Ẑs |2 ds ≤ cE|ξ + VT − (ξˆ + V̂T )|2 .
   0≤t≤T                                            0
                                                                        (38)
where the constant c depends only on T and the Lipschitz constant of g w.r.t.
(y, z).

      We now present

Theorem 3.3. (Comparison Theorem of BSDE) We make the same assump-
tion as in Proposition 3.2. Let (Y  , Z  ) be the solution of the following simple
BSDE
                                           T                                  T
                    Yt = ξ  +                ḡs ds + VT − Vt −               Zs dBs .         (39)
                                       t                                  t

where (ḡt ), (Vt ) ∈ L2F (0, T ; R) and ξ  ∈ L2 (FT ) are given such that

                        ξ ≥ ξ,            g(Yt , Zt , t) ≥ ḡt , a.s., a.e.,                     (40)

and such that V̂ = V − V  is an increasing process. We then have

                                       Yt ≥ Yt ,           a.e., a.s..                             (41)

We also have Strict Comparison Theorem: under the above conditions

           Y0 = Y0      ⇐⇒ ξ = ξ  ,              g(s, Ys , Zs ) ≡ ḡs         and Vs ≡ Vs .    (42)

Sketch of the Proof. We only consider the case d = 1 (i.e., B is a 1-
dimensional Brownian Motion) and prove the case t = 0. The general situation
is left to the reader as an exercise. We set ĝs = g(s, Ys , Zs ) − ḡs and

                       Ŷ = Y − Y  , Ẑ = Z − Z  , ξˆ = ξ − ξ  .

The pair (Ŷ , Ẑ) can be regarded as the solution of the following linear BSDE:
                
                    −dŶs = (as Ŷs + bs Ẑs + ĝs )ds + dV̂s − Ẑs dBs ,
                            ˆ
                      ŶT = ξ,

where                         
                                  g(s,Ys ,Zs )−g(s,Ys ,Zs )
                                           Ys −Ys           , if       Ys = Ys ,
                      as :=
                               0,                                   if Ys = Ys ,
                                  g(s,Ys ,Zs )−g(s,Ys ,Zs )
                                            Zs −Zs            , if     Zs = Zs ,
                      bs :=
                                  0,                                 if Zs = Zs .
Since g satisﬁes Lipschitz condition, thus |as | ≤ C and |bs | ≤ C. We set
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                           185
                                  t                               t                               t
                                                          1
                Qt := exp             bs dBs −                        |bs |2 ds +                     as ds .
                              0                           2   0                               0

We apply Itô’s formula to Qt Ŷt on the interval [0, T ] and then take expectation:
                                                     T                             T
                 Ŷ0 = E[ŶT QT +                        Qt ĝt dt +                   Qt dV̂t ] ≥ 0.
                                                 0                             0

From this we have Y0 ≥ Y0 . This method also applies to prove Yt ≥ Yt when
t > 0.
   By Girsanov Theorem,
                                             T                             T
                     E[ŶT QT +                  Qt ĝt dt +                   Qt dV̂t ] = 0
                                         0                             0

if and only the following non negative quantities are zero: Ŷt = 0, ĝt ≡ 0 and
V̂T = 0, a.s, a.e.. Thus we have the strict comparison.                        

Remark 3.4. In many situations the Comparison Theorem is applied to com-
pare the following type of two BSDEs:
                                  T                                                           T
                Yt1 = ξ 1 +           [g(s, Ys1 , Zs1 ) + c1s ]ds −                                   Zs1 dBs ,   (43)
                              t                                                           t

and
                                  T                                                           T
                Yt2 = ξ 2 +           [g(s, Ys2 , Zs2 ) + c2s ]ds −                                   Zs2 dBs ,   (44)
                              t                                                           t

where c1 (·), c2 (·) ∈ L2F (0, T ). In this case if we have

                         c1s ≥ c2s , a.s., a.e., ξ 1 ≥ ξ 2 , a.s..

Then it is easy to apply Theorem 3.3 to derive Yt1 ≥ Yt2 , a.s., a.e..

Example 3.1. We consider a special case of BSDE (43) with g(s, 0, 0) ≡ 0.In
this case if c2s ≡ 0 and ξ 2 = 0, then the unique solution of BSDE (44) is
(Ys2 , Zs2 ) ≡ 0. It then follows from Remark 3.4 that if ξ 1 and c1 (·) are both
non negative, then the solution Y 1 of (43) is also non negative. In this case
we have also, by strict comparison,

                         Y01 = 0 ⇐⇒ c1s ≡ 0 and ξ 1 = 0.

An interpretation in ﬁnance is: If an investor want to obtain an opportunity
of non negative return, i.e., ξ 1 ≥ 0, then he must invest at the present time
some nonnegative value, i.e., Y01 ≥ 0. If ξ ≥ 0, a.s. and E[ξ 1 ] > 0, then his
investment has to be positive: Y01 > 0.
186    Shige Peng

Example 3.2. We assume that g(s, 0, 0) ≡ 0 and ξ ≥ 0 with E[ξ] > 0.
Consider the following BSDE parameterized by λ ∈ (0, ∞):
                                               T                                  T
                 Ytλ = λξ +                        g(s, Ysλ , Zsλ )ds −               Zsλ dBs .
                                           t                                  t

We can prove that
                                                   lim Y0λ = +∞.
                                               λ↑∞

In fact we compare its solution with the one of the following BSDE
                                       T                                                  T
              Ȳtλ = λξ +                  C(−|Ȳsλ | − |Z̄sλ |)ds −                          Z̄sλ dBs ,
                                   t                                                  t

where C > 0 is the Lipschitz constant of g with respect to (y, z). By Compar-
ison Theorem, we have

   (i) Y0λ ≥ Ȳ0λ , for each λ > 0;
   (ii) Ȳ01 > 0, when λ = 1
   We also observe that for each λ ≥ 0, we have Ȳtλ ≡ λȲt1 and Z̄tλ ≡ λZ̄t1 .
From this and (i), (ii) it follows that

                                       Y0λ ≥ Ȳ0λ = λȲ01 ↑ ∞.

Exercise 3.1. Prove that Y0λ is also bounded by:

                                                    Y0λ ≤ λŶ0 ,

where Ŷ0 is a constant.

Backward Stochastic Monotone Semigroups and g–Evaluations

We now discuss the backward semigroup property of the solution Y of a
BSDE. We introduce the following deﬁnition: Given t ≤ T and Y ∈ L2 (Ft ).
We consider the following BSDE deﬁned on the interval [0, t]
                               t                                     t
              ys = Y +             g(r, yr , zr )dr −                    zr dBr ,             s ∈ [0, t].   (45)
                           s                                     s

Definition 3.1. We deﬁne, for each 0 ≤ s ≤ t < ∞ and Y ∈ L2 (Ft ),
                                                     g
                                                    Es,t [Y ]:=ys .                                         (46)
            g
The system Es,t [·] : L2 (Ft )→L2 (Fs ), 0 ≤ s ≤ t ≤ T is called g–evaluation.

Remark 3.5. s and t can be also two uniformly bounded Ft –stopping times.
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                     187

Theorem 3.4. Let the function g satisﬁes (i)–(iii) of (34). Then the g–
             g
evaluation Es,t [·] deﬁned in (46) satisﬁes the Axiomatic assumptions (A1)–
(A4) listed in Deﬁnition 2.1: it is an Ft –consistent nonlinear evaluation op-
erator. Furthermore, we have:
(A5) For each Y1 , Y2 ∈ L2 (Ft )
                −g                   g            g                  g
               Es,t µv [Y1 − Y2 ] ≤ Es,t [Y1 ] − Es,t [Y2 ] ≤ Es,tµv [Y1 − Y2 ].           (47)

In particular, If g is independent of y, i.e., (iii”) satisﬁes, then we have
                  −g                 g            g                  g
                Es,t µ [Y1 − Y2 ] ≤ Es,t [Y1 ] − Es,t [Y2 ] ≤ Es,tµ [Y1 − Y2 ].            (48)

   Here gµ,ν (y, z) := ν|y| + µ|z|, gµ (z) := µ|z|,ν and µ are the Lipschitz
constants of g w.r.t. y and z, respectively.

Proof. (A1) is directly from Comparison Theorem. (A2) is obvious. As for
(A4), we multiply the BSDE (45) by 1A , A ∈ Fs on the interval [s, t]. Since
g(r, 0, 0) ≡ 0, we have, for u ∈ [s, t],
                                     t                              t
              yu 1 A = Y 1 A +           1A g(r, yr , zr )dr −          1A zr dBr
                                   u                             u
                                    t                                    t
                       = Y 1A +          g(r, 1A yr , 1A zr )dr −            1A zr dBr .
                                   u                                     u

This implies that (1A yr , 1A zr )r∈[s,t] is the solution of the same backward equa-
tion with terminal condition Y 1A . Thus
                                      g           g
                                  1A Es,t [Y ] = Es,t [1A Y ].

Thus we have (A4). (A3) simply follows from the uniqueness of BSDE, i.e.,
for each s ≤ u ≤ t, we have
                             g                          g
                            Es,t       g
                                 [Y ]=Es,u        g
                                           [yu ]=Es,u [Eu,t [Y ]].                         (49)

(A5) is the direct consequence of the following proposition.                                  

Proposition 3.4. We assume that g1 and g2 satisfy (i)–(ii) of assumption
(34). If g1 is dominated by g2 in the following sense

 g1 (t, y, z) − g1 (t, y  , z  ) ≤ g2 (t, y − y  , z − z  ), ∀y, y  ∈ R, ∀z, z  ∈ Rd , (50)

then E g1 [·] is also dominated by E g2 [·] in the following sense: for each t > 0
and Y, Y  ∈ L2 (Ft ), we have
                            g1
                           Eu,t         g1
                                [Y ] − Eu,t [Y  ] ≤ Eu,t
                                                      g2
                                                          [Y − Y  ].                      (51)

If g is dominated by itself, then Eg [·] is also dominated by itself.
188      Shige Peng

Proof. We consider the following three BSDEs

                       −dyr = g1 (r, yr , zr )dr − zr dBr , yt = Y,
                       −dyr = g1 (r, yr , zr )dr − zr dBr , yt = Y 

and
                   −dYr = g2 (r, Yr , Zr )dr − Zr dBr , Yt = Y − Y  .
We denote (ŷr , ẑr ) = (yr − yr , zr − zr ) and ĝr = g1 (r, yr , zr ) − g1 (r, yr , zr )

                          −dŷr = ĝr dr − ẑr dBr , ŷt = Y − Y  .

Condition (50) implies g2 (r, ŷr , ẑr ) ≥ ĝr . It follows from Comparison Theorem
that
                            ŷu ≤ Yu , ∀u ∈ [0, t], a.s.
By the deﬁnition of E g [·] it follows that (51) holds.                                           


Example: Black–Scholes Evaluations

Consider a ﬁnancial market consisting of d + 1 assets: a bond and d stocks.
We denote by P0 (t) the price of the bond and by Pi (t) the price of i-th stock
at time t. We assume that P0 (·) is the solution of the ordinary diﬀerential
equation
                      dP0 (t) = r(t)P0 (t)dt, P0 (0) = 1,
{Pi (·)}di=1 is the solution of the following SDE
                                                      d
                      dPi (t) = Pi (t)[bi (t)dt +                  σij (t)dBtj ],
                                                             j=1
                       Pi (0) = pi ,     i = 1, · · · , d.

Here r is the interest rate of the bond; {bi }di=1 is the rate of the expected
return, {σij }di,j=1 the volatility of the stocks. We assume that r, b, σ and σ −1
are all Ft –adapted and uniformly bounded processes on [0, ∞). The problem
is how a market evaluates an European type of derivative ξ ∈ L2 (FT ) with
maturity T ? To solve this problem we consider an investor who has, at a time
t ≤ T , n0 (t) bonds and ni (t) i-stocks, i = 1, · · · , d, i.e., he invests n0 (t)P0 (t)
in bond and πi (t) = ni (t)Pi (t) in the i-th stock. π(t) = (π1 (t), · · · , πd (t)),
0 ≤ t ≤ T is an Rd valued, square-integrable and adapted process. We deﬁne
by y(t) the investor’s wealth invested in the market at time t:
                                                       d
                             y(t) = n0 (t)P0 (t) +                  πi (t).
                                                             i=1

We make the so called self–ﬁnancing assumption: in the period [0, T ], the
investor does not withdraw his money from, or put some other person’s money
into his account yt . Under this condition, his wealth y evolves according to
         Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                         189
                                                  d
                     dy(t) = n0 (t)dP0 (t) +                  ni (t)dPi (t).
                                                        i=1

or
                           d                                      d
     dy(t) = [r(t)y(t) +           (bi (t) − r(t))πi (t)]dt +                  σij (t)πi (t)dBtj .
                             i=1                                       i,j=1

We denote
                                          d
                                                                      −1
               g(t, y, z) = −r(t)y −                  (bi (t) − r(t))σji (t)zj .
                                              i,j=1
                                         
Then, by the change of variable zj (t) = di=1 σij (t)πi (t), the above equation
becomes
                   −dy(t) = g(t, y(t), z(t))dt − z(t)dBt .
We observe that the function g satisﬁes (i) and (ii) of (34). It follows from
the existence and uniqueness theorem of BSDE (Theorem 3.1) that for
each derivative ξ ∈ L2 (FT ), there exists a unique solution (y(·), z(·)) ∈
L2F (0, T ; R1+d) with the terminal condition yT = ξ. This meaning is sig-
niﬁcant: in order to replicate the derivative ξ, the investor needs and only
needs to invest y(t) at the present time t and then, during the time interval
                                                −1
[t, T ], to perform the strategy πi (s) = σij      (s)zj (s). Furthermore, by Compar-
ison Theorem of BSDE, if he wants to replicate a ξ  which is bigger than ξ,
(i.e., ξ  ≥ ξ, a.s., P (ξ  ≥ ξ) > 0), then he must pay more. This means that no
arbitrage–free strategy exists. This y(t) is called the Black–Scholes price, or
                                                                            g
Black–Scholes evaluation, of ξ at the time t. We deﬁne, as in (46) Et,T       [ξ] = yt .
We observe that the function g satisﬁes (i)–(iii) of condition (34). It follows
                               g
from Theorem 3.4 that Et,T        [·] satisﬁes (A1)–(A4) of Ft –consistent evaluation.

g–Expectations

In this subsection we will consider a particularly interesting situation of the
above stochastic semigroups: when g satisﬁes g(s, y, z)|z=0 ≡ 0, i.e., it satisfy
                                                 g
(i), (ii) and (iii’) in (34). In this situation Es,t [Y ] satisﬁes (A2’):
Proposition 3.5. For each 0 ≤ s ≤ t ≤ T , and Y ∈ L2 (Fs ), we have
                                         g
                                        Es,t [Y ] = Y.                                          (52)

Proof. We consider the solution (y, z) of (45) with the same terminal condition
Y , but deﬁned on [s, t]:
                             t                          t
               yu = Y +          g(r, yr , zr )dr −         zr dBr ,   u ∈ [s, t].              (53)
                            u                          u
                     g
We have yu = Eu,t      [Y ]. But by Assumption (34)–(iii’), it is easy to check
(yu , zu ) ≡ (Y, 0). We thus have (52).                                      
     Thus we can deﬁne Ft –consistent nonlinear expectation Eg [Y |Ft ]:
190     Shige Peng

Definition 3.2. We deﬁne
                         g
             Eg [Y ] := E0,T                       g
                             [Y ], Eg [Y |Ft ] := Et,T [Y ], Y ∈ L2 (FT ).          (54)

Eg [Y ] is called g–expectation of Y . In particular, if g = µ|z| then we denote
Eg [Y ] = E µ [Y ].

    g–expectations is nonlinear but it satisﬁes all other properties of a classical
linear expectation.

Proposition 3.6. We assume that g satisﬁes (i), (ii) and (iii’) in (34).
Then the g–expectation Eg [·] deﬁned in (54) is an Ft –consistent nonlinear
expectation deﬁned on L2 (FT ). That is, it satisﬁes (A1), (A2’), (A3) and
(A4) listed in Deﬁnition 2.2. Moreover, Eg [·] is dominated by E µ [·] and E gµv [·]
in the following sense:

             −E µ [−Y |Ft ] ≤ Eg [Y |Ft ] ≤ E µ [Y |Ft ], ∀Y ∈ L2 (FT ).            (55)

and
            −g                                                  g
           Et,T µ,ν [Y1 − Y2 ] ≤ Eg [Y1 |Ft ] − Eg [Y2 |Ft ] ≤ Et,T
                                                                  µ,ν
                                                                      [Y1 − Y2 ],
                              2                                                     (56)
                ∀Y1 , Y2 ∈ L (FT ).
                 g
Proof. Since Es,t  [·] satisﬁes (A1), (A2’), (A3) and (A4), by Proposition 2.1,
Eg [·|Ft ] deﬁned in (54) satisﬁes (A1), (A2’), (A3) and (A4) of Ft –expectations.
     (56) is directly by (47). (55) is proved from the comparison theorem of
BSDE since E µ [·] = Egµ [·], with gµ (z) = µ|z| ≥ g(t, y, z).                  

Definition 3.3. Let τ ≤ T be a stopping time. We also deﬁne
                                                g
                                 Eg [Y |Fτ ] = Eτ,T [Y ].

Definition 3.4. (g-martingales) A process (Yt )0≤t≤T with E[Yt2 ] < ∞ for
all t is called a g-martingale (resp. g-supermartingale, g-submartingale) if, for
each s ≤ t ≤ T , we have

                       Eg [Yt |Fs ] = Ys ,   (resp. ≤ Ys , ≥ Ys ).

    The importance of this special setting follows from the following econom-
ically meaningful property.

Lemma 3.2. Let the function g satisﬁes (i), (ii) and (iii”) of (34). Then

               Eg [Y + η|Ft ] = Eg [Y |Ft ] + η,      ∀η ∈ L2 (Ω, Ft , P ).         (57)

Proof. Consider the BSDE

                      −dys = g(s, zs )ds − zs dBs , t ≤ s ≤ T,
                        yT = Y.
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures              191

We have by the deﬁnition Eg [Y |Ft ] = yt . On the other hand, it is easy to
check that (ys , zs ) := (ys + η, zs ), s ∈ [t, T ] solve the above equation with the
terminal condition yT = Y + η. It then follows that

                   Eg [Y + η|Ft ] = yt = yt + η = Eg [Y |Ft ] + η.

                                                                                       

Remark 3.6. Economically, (57) means that the nonlinearity of Eg [Y + η] is
only due to the risky part of Y + η.
  We will always write in the sequel E µ [Y ] := Eg [Y ] for g = µ|z| and
 −µ
E [Y ] := Eg [Y ] for g ≡ −µ|z|. Note that

                          ∀c > 0,     E µ [cY |Ft ] = cE µ [Y |Ft ]                  (58)

and
                       ∀c < 0,      E µ [cY |Ft ] = −cE µ [−Y |Ft ].
An important feature of E µ [·] is
Proposition 3.7. Let g satisfy (i), (ii) and (iii’) of Assumption (34), then
Eg [·] is dominated by E µ [·] in the following sense, for each t ≥ 0,

            Eg [Y |Ft ] − Eg [Y  |Ft ] ≤ Et,T   [Y − Y  ], ∀Y, Y  ∈ L2 (FT ).
                                          g  µ,v
                                                                                     (59)

If g is independent of y, i.e., (iii”) satisﬁes, then we have

           Eg [Y |Ft ] − Eg [Y  |Ft ] ≤ E µ [Y − Y  |Ft ], ∀Y, Y  ∈ L2 (FT ).     (60)

In particular, E µ [·] is dominated by itself:

           E µ [Y |Ft ] − E µ [Y  |Ft ] ≤ E µ [Y − Y  |Ft ], ∀Y, Y  ∈ L2 (FT ).   (61)
                               g
Proof. We observe that Et,Tµ,0
                               [Y ] = E µ [Y |Ft ]. Thus (59) as well as (61) are
directly derived by (A5) of Theorem 3.4.                                       
    The self–domination property (61) of E µ [·] permit us to deﬁned a norm
Definition 3.5. We deﬁne

                           Y µ := E µ [|Y |], Y ∈ L2 (FT ).

Proposition 3.8. ·µ forms a norm in L2 (FT ).
Proof. The triangle inequality Y µ + Zµ ≤ Y + Zµ follows from (61)
with t = 0. By (58) we also have cY µ = c Y µ , c ≥ 0.            

Proposition 3.9. Under ·µ , Eg [·|Ft ] is a contraction mapping:

                      Eg [Y |Ft ] − Eg [Y  |Ft ]µ ≤ Y − Y  µ .
192      Shige Peng

Proof. It is an easy consequence of (59).                                                                                 

Proposition 3.10. For each µ > 0, and T > 0, there exist a constant cµ,T
such that
                  E[|Y |] ≤ E µ [|Y |] ≤ cµ,T (E[|Y |2 ])1/2 .      (62)
Proof. By deﬁnition,
                                                       T                         T
                  E µ [|Y ||Ft ] = |Y | +                  µ|Zs |ds −                Zs dBs                             (63)
                                                   t                         t
                                                       T                             T
                                   = |Y | +                bµ (s)Zs ds −
                                                            Zs dBs ,
                                        t                t
                  Zs
where bµ (s) = µ |Zs|
                      1{|Zs |>0} . Let Qµ· be the solution of SDE
                                 dQµt = bµ (t)Qµt dBt , Qµ0 = 1.
Using Itô’s formula to Qµt E µ [|Y ||Ft ], we have
        E µ [|Y |] = E µ [|Y ||F0 ] = E[QµT |Y |] ≤ {E[(QµT )2 ]}1/2 · {E[|Y |2 ]}1/2 .
But since |bµ | ≤ µ, there exists a constant cµ,T depending only on µ and T ,
such that E[(QµT )2 ]1/2 ≤ cµ,T . We thus have the second inequality of (62).
The ﬁrst inequality is derived by taking t = 0 on both sides of (63) and then
taking expectation.                                                         
      We then have
Corollary 3.1. Let T be ﬁxed. Then the extension Lµ (FT ) of L2 (FT ) under
the norm ·µ is a Banach space.
Lemma 3.3. We have for all µ > 0 and Y ∈ L2 (FT ),
                                                              2
                                E[E µ [Y |Ft ]2 ] ≤ eµ (T −t) E[Y 2 ].
Proof. By deﬁnition,
                                                       T                         T
                     E µ [Y |Ft ] = Y +                    µ|Zs |ds −                Zs dBs .
                                                   t                         t
Ito’s formula gives
                            T                                            T                                        T
E µ [Y |Ft ]2 = Y 2 +           2µE µ [Y |Fs ]|Zs |ds − 2                    E µ [Y |Fs ]Zs dBs −                     Zs2 ds.
                        t                                            t                                        t
Taking expectations, we deduce that
                                               T                                                    T
        E[E µ [Y |Ft ]2 ] = E[Y 2 ] +              E[2µE µ [Y |Fs ]|Zs |]ds −                           E[Zs2 ]ds
                                           t                                                    t
                                                       T
                        ≤ E[Y 2 ] + µ2                     E[E µ [Y |Fs ]2 ]ds
                                                   t

(because of 2ab ≤ a2 + b2 ). The claim follows then immediately from Gron-
wall’s inequality.                                                      
         Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                         193

Upcrossing Inequality of E g –Supermartingales and Optional
Sampling Inequality

We begin with an easy upcrossing inequality which reveals the main idea to
prove such kind of inequalities in nonlinear situation.

Proposition 3.11. Let g satisfy (i), (ii), (iii’) of (34) and let (Yt ) be a g -
supermartin–gale on [0, T ]. Let 0 = t0 < t1 < · · · < tn = T , and a < b be two
constants. Then there exists a constant c > 0 such that the number Uab [Y, n]
of upcrossings of [a, b] by {Ytj }0≤j≤n satisﬁes

                                                    E µ [(YT − a)− ]
                          E −µ [Uab [Y, n]] ≤                        .                           (64)
                                                          b−a

Sketch of Proof. We only prove the case d = 1. For j = 1, 2, · · · n, we
consider the following BSDE
                              tj                              tj
           ytj = Ytj +             g(s, ysj , zsj )ds −            zsj dBs , t ∈ [tj−1 , tj ].
                          t                               t

Then we deﬁne, for s ∈ [tj−1 , tj ],
                           j −1
                           (zs ) g(s, ysj , zsj ), if zsj = 0;
                   ajs :=
                           0,        otherwise.
                 n
and then as := j=1 ajs 1(tj−1 ,tj ] (s). Since g is Lipschitz in z and g(t, y, 0) ≡ 0,
it is clear that |as | ≤ µ. We also have, for each j,

                         g(s, ysj , zsj ) = as zsj , s ∈ (tj−1 , tj ].

We set
                                   T                                       T
                   dQ                         1
                         := exp{     as dBs −                                  |as |2 ds}.
                   dP FT         0            2                        0

By Girsanov Theorem, Q is a probability measure and

             EQ [Ytj |Ftj−1 ] = E g [Ytj |Ftj−1 ] ≤ Ytj−1 , j = 1, 2, · · · n,

for Y is a g - supermartingale. This implies that {Ytj }nj=1 is a (discrete) Q -
supermartingale. We then can apply the classical up crossing theorem ((see
e.g., [HWY1992], Theorem 2.14 and 2.42))

                                                    EQ [(YT − a)− ]
                          EQ [Uab [Y, n]] ≤                         .
                                                         b−a
This with |as | ≤ µ, we then can apply the comparison theorem to prove (64).

194      Shige Peng

     We now consider a more general situation. Let (Yt )t∈[0,T ] be an adapted
process. For a given time sequence t0 , t1 , t2 · · · in [0, T ] with 0 ≤ t0 < t1 <
t2 · · · , we denote τ−1 := t0 and

                                 τ0 : = inf{ti ≥ t0 ; Yti ≤ a}
                                 τ1 : = inf{ti ≥ τ1 ; Yti ≥ b}
                                      ······
                                τ2i : = inf{ti ≥ τ2i−1 ; Yti ≤ a}
                             τ2i+1 : = inf{ti ≥ τ2i+1 ; Yti ≥ b}
                                        ······

If τ2j−1 ≤ T , sequence (Yτ0 , · · · Yτ2i−1 ) upcrosses the interval [a, b] i times.
We denote by Uab (Y, k) the number of upcrossing [a, b] of the sequence
(Yt0 , · · · , Ytk ). It is clear that

                          {Uab (Y, k) = i} = {τ2i−1 ≤ tk < τ2i+1 }

      We now ﬁx an integer n. We have the following upcrossing inequality

Theorem 3.5. Let g satisfy (i) and (ii) of (34) and let (Yt )t∈[0,T ] be a g-
supermartingale. Then we have
                                                    tn
               1 2µ(tn −t0 ) µ
[Uab (Y, n)] ≤      e       {E [(Ytn − a)− + E µ [     eµs |gs0 |ds] + aµ(tn − t0 )}
              b−a                                  t0
                                                                               (65)
where gs0 := g(s, 0, 0).

Proof. We set τin := τi ∧ tn , for each i = 0, 1, · · · , and consider the following
BSDE:

                      −dyti = g(t, yti , zti )dt − zti dBt , t ∈ [0, τ2i+1
                                                                      n
                                                                           ],
                     yτi 2i+1
                         n    = Yτ2i+1
                                  n    .

As in the proof of Comparison Theorem, we can write

                 g(t, yti , zti ) = αit yti + βti · zti + g(t, 0, 0), t ∈ [0, τ2i+1
                                                                               n
                                                                                    ],

with |αis | ≤ µ, |βti | ≤ µ. For t ∈ [0, T ], we deﬁne

                                           
                                           n
                                 αt : =          1(τ2i  2i+1 )
                                                    n ,τ n     (t)αit ,
                                           i=0
                                           
                                           n
                                  βt : =         1(τ2i  2i+1 )
                                                    n ,τ n     (t)βti .
                                           i=0

We then introduce a new probability Q by
          Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                                   195
                                                              T                           T
                        dQ              1
                           |FT := exp[−                           |βs |2 ds +                 βs dBs ].
                        dP              2                 0                           0

Since Y is an E g –supermartingale, we have, for each i = 0, 1, · · · , by Lemma
7.8,
           g
      n ≥ E n
    Yτ2i                      [Yτ2i+1
                                 n    ]
           τ ,τ n2i    2i+1
                                              n                            n
                                             τ2i+1                        τ2i+1                s
          = EQ [Y        n
                        τ2i+1     exp(               αs ds) +                     exp(              αr dr)gs0 ds)|Fτ2i
                                                                                                                    n ](66)
                                            n
                                           τ2i                         n
                                                                      τ2i                      n
                                                                                              τ2i

                                                τn
We now estimate the term ui := EQ [exp( 0 2i+1 αs ds)1{τ2i+1 ≤tn } ]. Since
(Yτ2i+1
   n    − a) ≥ b − a on {τ2i+1 ≤ tn } and {τ2i < tn } = {τ2i+1 ≤ tn } + {τ2i <
tn < τ2i+1 }, we have
                                                                           n
                                                  τ2i+1
                       1
           ui ≤           EQ [(Yτ2i+1
                                 n    − a) exp(         αs ds)I{τ2i+1 ≤tn } ]
                      b−a                       0
                                                                           n
                                              τ2i+1
                   1
                ≤     EQ [(Yτ2i+1
                             n    − a) exp(           αs ds)I{τ2i <tn } ]
                  b−a                       0
                                                   tn
                      1
                   +      EQ [(Ytn − a)− exp(         αs ds)I{τ2i <tn <τ2i+1 } ]
                     b−a                         0

With {τ2i < tn } ∈ Fτ2i , we apply (66) to the ﬁrst term of the right side:
                                                                           n                                     n
                                                                          τ2i+1                                 τ2i
           1
   ui ≤               n − a)I
              EQ [{(Yτ2i     {τ2i <tn } +                                         eµs |gs0 |ds} exp(                  αs ds)]
          b−a                                                         n
                                                                     τ2i                                    0
                                                 n                                n
                               τ2i                 τ2i+1
               a
            +     EQ [| exp(       αs ds) − exp(         αs ds)|]
             b−a             0                   0
              1 µtn
           +     e EQ [(Ytn − a)− I{τ2i <tn <τ2i+1 } ]
             b−a
                     n − a) = I
Since I{τ2i <tn } (Yτ2i        {τ2i <tn } (Yτ2i − a) ≤ 0, and

                                   n                               n
                                  τ2i                             τ2i+1
                 | exp(                 αs ds) − exp(                     αs ds)|
                              0                               0
                        n
                       τ2i+1                     s
            =|                  αs exp(              αr dr)ds| ≤ µeµ(tn −t0 ) (τ2i+1
                                                                                n
                                                                                     − τ2i−1
                                                                                        n
                                                                                             ),
                       n                       n
                      τ2i                     τ2i

we thus have
                                           1    µ(tn −t0 )
                 ui ≤                     b−a e
                                                                   n
                                                           EQ [aµ(τ2i+1 − τ2i−1
                                                                           n
                                                                                )

                               τ2i+1
                                 n
                       +           n
                                  τ2i−1
                                           eµs |gs0 |ds + (Ytn − a)− I{τ2i <tn <τ2i+1 } ]
196       Shige Peng

     We observe that I{τ2i <tn <τ2i+1 } ≤ I{Uab (Y,n)=i} and, in the expression of
ui , {τ2i+1 ≤ tn } = {Uab (Y, n) > i}. Thus
                                         1 µ(tn −t0 )
e−µ(tn −t0 ) EQ [I{Uab (Y,n)>i} ] ≤         e         {EQ [(Ytn − a)− I{Uab (Y,n)=i} ]
                                        b−a
                                                  n
                                                 τ2i+1
                                        +EQ [            eµs |gs0 |ds] + aµEQ [τ2i+1
                                                                                n
                                                                                     − τ2i−1
                                                                                        n
                                                                                             ]}.
                                                 n
                                                τ2i−1

Summering both sides for all i yields
                                         1 µ(tn −t0 )
       e−µ(tn −t0 ) EQ [Uab (Y, n)] ≤       e         {EQ [(Ytn − a)− ]
                                        b−a
                                                       tn
                                            1
                                         +     EQ [       eµs |gs0 |ds] + aµ(tn − t0 )}.
                                           b−a        t0

This with E −µ [·] ≤ EQ [·] ≤ E µ [·] derives the upcrossing inequality.                      

Remark 3.7. Since, E −µ [·]µ=0 = E µ [·]µ=0 = E[·], thus in the case where µ = 0
and gs0 ≡ 0, the about upcrossing inequality becomes a classical one:
                          (b − a)E[Uab (Y, n)] ≤ E[(Ytn − a)− ].
    To extend the above upcrossing inequality to denumerable sets, following
(Peng, 1997 [Peng1997b]), we now extend the domain of E g [·] from L2 (FT ) to
a larger space . We consider
                     L02 (FT ) := {X + ∈ L0 (FT ), X − ∈ L2 (FT )}.
We need the following result:
Lemma 3.4. Let X ∈ L02 (FT ) and let {Xi }∞              ∞
                                             i=1 and {Xi }i=1 be two non de-
                       2                                
creasing sequences in L (FT ) such that Xi  X, a.s Xi  X a.s.. Then we
have
                          lim Eg [Xi ] = lim Eg [Xi ].
                                i→∞                i→∞

Proof. We only need to consider the case where Xi ≥ Xi , a.s., for all i =
1, 2, · · · . In this case
                           lim Eg [Xi ] ≥ lim Eg [Xi ].
                                i→∞                i→∞
On the other hand, for each ﬁxed integer i0 , we have Xi0 ∧ Xi  Xi0 in
L2 (FT ). It follows from the continuity of Eg [·] in L2 that limi→∞ Eg [Xi ] ≥
limi→∞ Eg [Xi0 ∧ Xi ] = Eg [Xi0 ]. Thus limi→∞ Eg [Xi ] ≥ limi→∞ Eg [Xi ].   

Definition 3.6. For each X ∈ L02 (FT ), we deﬁne
                                   Eg [X] = lim Eg [Xi ],
                                                i→∞

where {Xi }∞                                    2
           i=1 is a non decreasing sequence in L (FT ) such that Xi  X,
a.s.
         Nonlinear Expectations, Nonlinear Evaluations and Risk Measures            197

    From the above lemma, the functional Eg [·] : L02 (FT ) → R ∪ {+∞} is
clearly deﬁned. We are interested in the situation where g = g−µ (z) = −µ|z|.
Lemma 3.5. For each nonnegative X ∈ L02 (FT ), if E −µ [X] = Eg−µ [X] <
+∞, then X < +∞, dP –a.s.
Proof. We set A := {ω ∈ Ω : X(ω) = +∞}. It is clear that λ1A ≤ X, a.s, for
each λ ∈ [0, ∞). Thus, by comparison theorem,
                          E −µ [λ1A ] ≤ E −µ [X], ∀λ ∈ [0, ∞).
But we have E −µ [λ1A ] = λE −µ [1A ] and, by strict comparison theorem,
E −µ [1A ] > 0 ⇔ P (A) > 0. It follows that A must be a P –zero subset. The
proof is complete.                                                       
    Let Y = (Yt )t∈[0,T ] be an Ft –adapted process, u = {t1 , t2 , · · · , tn } ⊂
[0, T ] with t1 < · · · < tn . We denote by Uab (Y, u) the upcrossing number of
{Yt1 , · · · , Ytn }. For any subset D of [0, T ], deﬁne
              Uab (Y, D) := sup{Uab (Y, u): u is a ﬁnite subset of D}.
If D is a denumerable dense subset of [0, T ]. Let {un }∞
                                                        n=1 be a sequence of
ﬁnite subsets in D such that un ⊂ un+1 for each n with ∪n un = D. It is clear
that
                         Uab (Y, D) = lim Uab (Y, un ).
                                          n→∞

Theorem 3.6. We assume that g satisﬁes (i) and (ii) of (34). Let Y =
(Yt )t∈[0,T ] be a E g –supermartingale, D be a denumerable dense subset of [0, T ].
Then for each a, b ∈ R, r, s ∈ [0, T ] such that a < b and r < s, we have

                       e2µ(s−r) µ                       s
E −µ [Uab (Y, D ∩[r, s]) ≤     {E [(Ys −a)− ]+E µ [       eµt |gt0 |dt]+aµ(s−r)},
                         b−a                          r
                                                                             (67)
where µ is the Lipschitz constant of g and gs0 = g(s, 0, 0). In particular

                         e2µT µ                        T
   E −µ [Uab (Y, D)] ≤       {E [(YT − a)− ] + E µ [     eµt |gt0 |dt] + aµT }.    (68)
                         b−a                         0

Moreover, Uab (Y, D) < ∞, a.s.
Proof. Let un = {t0 , t1 , t2 , · · · , tn } be deﬁned as the above with t0 = r and
tn = s. Since {Uab (Y, un )}∞n=1 is an increasing and positive sequence such that
Uab (Y, un ) ∈ L2 (FT ) for each n, it follows that
                E −µ [Uab (Y, D ∩ [r, s])] = lim E −µ [Uab (Y, D ∩ un )].
                                            n→∞

The sequence {E −µ [Uab (Y, D ∩ un )]}∞ n=1 is increasing and uniformly bounded
by the left hand of (65). It follows that E −µ [Uab (Y, D∩[r, s])] and E −µ [Uab (Y, D)]
are well–deﬁned and bounded. By Lemma 3.5, Uab (Y, D) < ∞, a.s. .                     
198     Shige Peng

Remark 3.8. From the above upcrossing inequality we can deduce a down-
crossing inequality of a E g –submartingale Y . In fact, from the relation
               −a
Dab (Y, n) = U−b  (−Y, n), one can directly obtain the downcrossing inequal-
ity of Da (Y, n) of a E g –submartingale Y from the corresponding upcross-
          b
                    −a
ing inequality of U−b  (−Y, n) of E ḡ –supermartingale −Y , where ḡ(s, y, z) :=
−g(s, −y, −z).
   From the above result, and combine the condition E[supt∈[0,T ] |Yt |2 ] < ∞,
we have the following classical result.
Theorem 3.7. We assume that g satisﬁes (i) and (ii) of (34). Let Y =
(Yt )t∈[0,T ] be a E g –supermartingale, D be a denumerable dense subset of [0, T ].
Then for almost all ω and for any t ∈ [0, T ], lims∈D,s t Ys and lims∈D,st Ys
exist and are ﬁnite. Furthermore the process (Ȳt )t∈[0,T ] deﬁned by
                                 Ȳt :=     lim        Ys , t ∈ [0, T )
                                          s∈D,s    t

is an Ft –adapted process with E[sup0≤t≤T |Ȳt |2 ] < ∞. If g also satisﬁes (iii)
of (34), then Ȳ is an E g –supermartingale.
Proof. We only need to prove that Ȳ is an E g –supermartingale. The rest of
the proofs can be ﬁnd in, e.g., [HWY1992]. Let s < t, s, t ∈ [0, T ] and sn ∈ D,
sn < t, sn ↓↓ s, tn ∈ D, tn ↓↓ t and sn ≤ tn . Then, for m ≥ n,
                                       Esgm ,tn [Ytn ] ≤ Ysm .
                                                                   g
We ﬁx n and let m → ∞. We have Ysm → Ȳs and, by Es,t                n
                                                                       [Ytn ])s∈[0,tn ] ∈
 2                         g                g
SF (0, tn ), we also have Esm ,tn [Ytn ] → Es,tn [Ytn ], we derive
                                       g
                                      Es,tn
                                            [Ytn ] ≤ Ȳs , a.s.
Now let n → ∞. We have Ytn → Ȳt , in L2 (FT ). It follows that
        g              g               g              g                g              g
      |Es,tn
             [Ytn ] − Es,t [Ȳt ]| ≤ |Es,tn
                                            [Ytn ] − Es,tn
                                                           [Ȳt ]| + |Es,tn
                                                                            [Ȳt ] − Es,t [Ȳt ]|.
We then can apply a technique used in the estimate of (141) to prove that
  g              g
|Es,tn
       [Ytn ] − Es,t [Ȳt ]| → 0. Thus
                                            g
                                           Es,t [Ȳt ] ≤ Ȳs .
                                                                                                     

Remark 3.9. By this proposition we can prove that, in many typical cases a g
- supermartingale Y admits a RCLL modiﬁcation. More details on this topic
will be given in Lemma 4.8, for a more general situation. We will always take
its RCLL version.
Lemma 3.6. Let Y be an RCLL g–supermartingale on [0, T ] and let σ and τ
be two Ft –stopping times. Then we have
                                       Eg [Yτ |Fσ ] ≤ Yτ ∧σ .
Proof. See Theorem 7.4.
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                     199

3.3 A Monotonic Limit Theorem of BSDE

For a given stopping time τ ≤ T < ∞, we consider a process (yt ) the solution
of the following BSDE
                                    τ                                                 τ
               yt = ξ +                  g(ys , zs , s)ds + (Aτ − At∧τ ) −                 zs dBs          (69)
                                   t∧τ                                               t∧τ

where ξ ∈ L2 (Fτ ), A is a given RCLL increasing process with E[(Aτ )2 ] < ∞.
The following terms will be frequently used.

Definition 3.7. If (y, z) is a solution of BSDE (69) then we call (yt ) a g-
supersolution on [0, τ ]. If At ≡ 0 on [0, τ ], then we call y a g-solution on
[0, τ ].

    We recall that a g-solution y on [0, τ ] is uniquely determined if its terminal
condition yτ = ξ is given, a g-supersolution y on [0, τ ] is uniquely determined
if yτ and (At )0≤t≤τ are given. If y is a g-solution and y  is a g-supersolution
on [0, τ ] such that yτ ≤ yτ a.s., then for all stopping time σ ≤ τ we have also
yσ ≤ yσ .

Proposition 3.12. Let y be a g-supersolution deﬁned on an interval [0, τ ].
Then there is a unique z ∈ L2 (0, τ ; Rd ) and a unique increasing RCLL process
A on [0, τ ] with E[(Aτ )2 ] < ∞ such that the triple (yt , zt , At ) satisﬁes (69).

Proof. If both (y, z, A) and (y, z  , A ) satisfy (69), then we apply Itô’s formula
to (yt − yt )2 (≡ 0) on [0, τ ] and take expectation:
                              τ                          
                    E             |zs − zs |2 ds + E[       (∆(At − At ))2 ] = 0.
                          0                           t∈(0,τ ]

Thus zt ≡ zt . From this it follows that At ≡ At .                                                          
   Thus we can deﬁne

Definition 3.8. Let y be a g–supersolution on [0, τ ] and let (y, A, z) be the re-
lated unique triple in the sense of BSDE (69). Then we call (A, z) the (unique)
decomposition of (yt ).

    Let us now consider the following sequence of g-supersolution {y i }∞
                                                                        i=1 on
[0, T ], i.e.,
                    T                                                T
 yti = yTi +            g(ysi , zsi , s)ds + (AiT − Ait ) −              zsi dBs ,         i = 1, 2, · · · . (70)
                t                                                t

Here Ai are RCLL increasing processes with Ai0 = 0 and E[(AiT )2 ] < ∞.
   The following theorem shows that the limit of {y i }∞ i=1 is still a g–
supersolution.
200      Shige Peng

Theorem 3.8. We assume that g satisﬁes (i) and (ii) of Assumptions (34).
For each i = 1, 2, · · · , let Ai be a continuous and increasing processes with
Ai0 = 0 and E[(AiT )2 ] < ∞ and (y i , z i ) be the solution of BSDE (70).
If, as i → ∞, {y i }∞    i=1 converges monotonically up to a process y with
E[esssup0≤t≤T |yt |2 ] < ∞. Then this limit y is still a g-supersolution, i.e.,
there exists z ∈ L2F (0, T ; Rd) and an RCLL increasing process A with
E[(AT )2 ] < ∞ such that
                          T                                                             T
      yt = yT +               g(ys , zs , s)ds + (AT − At ) −                                   zs dBs ,      t ∈ [0, T ].            (71)
                      t                                                             t

   To prove this theorem, we need the following lemma. This lemma says that
both {z i } and {(AiT )2 } are uniformly bounded in L2 :
Lemma 3.7. Under the assumptions of Theorem 3.8, there exists a constant
C that is independent of i such that
                                  T
                            (i) E 0 |zsi |2 ds ≤ C,
                                                                    (72)
                            (ii) E[(AiT )2 ] ≤ C.


Proof. From BSDE (70), we have
                                       T                                      T
       AiT = y0i − yTi −                   g(ysi , zsi , s)ds +                   zsi dBs
                                   0                                      0
                                               T                                                                    T
           ≤ |y0i | + |yTi | +                     [ν|ysi | + µ|zsi | + |g(0, 0, s)|]ds + |                             zsi dBs |.
                                           0                                                                    0

We observe that |yti | is dominated by |yt1 | + |yt |. Thus there exists a constant,
independent of i, such that

                                                   E[ sup |yti |2 ] ≤ C.                                                              (73)
                                                      0≤t≤T

It follows that, there exists a constant C1 , independent of i, such that
                                                                                            T
                              E|AiT |2 ≤ C1 + 2(1 + µ2 T )E                                     |zsi |2 ds.                           (74)
                                                                                        0

On the other hand, we use Itô’s formula applied to |yti |2 :
                      T                                               T                                                     T
   |y0i |2 + E            |zsi |2 ds = E|yTi |2 + 2E                      ysi g(ysi , zsi , s)ds + 2E                           ysi dAis
                  0                                               0                                                     0

The last two terms are bounded by

                 2ysi g(ysi , zsi , s) ≤ 2|ysi |(ν|ysi | + µ|zsi | + |g(0, 0, s)|)
                                                                 1
                                       ≤ 2(ν + µ2 )|ysi |2 + |zsi |2 + |g(0, 0, s)|
                                                                 2
         Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                    201
         T
and 2E 0 |ysi |dAis ≤ 2[E sup0≤s≤T |ysi |2 ]1/2 [E|AiT |2 ]1/2 . Thus
             T
     E           |zsi |2 ds ≤ C + 4[E sup |ysi |2 ]1/2 [E|AiT |2 ]1/2
         0                            0≤s≤T
                                                                         1
                         ≤ C + 16(1 + µ2 T )E[ sup |ysi |2 ] +                   E|AiT |2
                                                   0≤s≤T            4(1 + µ2 T )
                                     1
                         = C1 +              E|AiT |2 ,
                                4(1 + µ2 T )

where, from (73), the constants C and C1 are all independent of i. This with
(74) it follows that (72)–(i) and then (72)–(ii) holds true. The proof is com-
plete.                                                                      
   Combining this Lemma with Theorem 7.2 in Appendix, we can easily prove
Theorem 3.8.
Proof of Theorem 3.8. In (70), we set gti := −g(yti , zti , t); Since {z i } is
bounded in L2F (0, T ; Rd), thanks to the monotonic limit theorem of Itô pro-
cesses (see Appendix: Theorem 7.2), there exists a z ∈ L2F (0, T ; Rd) such
that, for each p ∈ [0, 2), {z i }∞                               p          d
                                 i=1 strongly converges to z in LF (0, T ; R ).
                                                                    p
    As result, {g } = {−g(y , z , ·)} also strongly converges in LF (0, T ; Rd) to
                 i             i i
 0
g and
                        g 0 (s) = −g(ys , zs , s), a.s., a.e.
From this it follows immediately that (y, z) is the solution of the BSDE (71).
The proof is complete.                                                      


3.4 g–Martingales and (Nonlinear) g–Supermartingale
Decomposition Theorem

More general than the martingales under g–expectations, we now introduce
the notion of g–martingales under g–evaluations. Under this general frame-
work, we will prove a general g–supermartingale decomposition theorem of
Doob–Meyer’s type.

Definition 3.9. An Ft -progressively measurable real-valued process Y with

                              E[ess sup |Yt |2 ] < ∞, ∀T < ∞
                                     0≤t≤T

is called a g–martingale (resp. g–supermartingale, g–submartingale) on [0, T ]
if for each 0 ≤ s ≤ t ≤ T ,
                           g
                          Es,t [Yt ] = Ys , (resp. ≤ Ys , ≥ Ys ) a.s.

   In this subsection we will consider g–supermartingales. By Comparison
Theorem of BSDE, it is easy to prove the following result
202      Shige Peng

Proposition 3.13. We assume that g satisﬁes (i) and (ii) of (34). Let
(At )0≤t<∞ be an RCLL increasing (resp. decreasing) process with E[(AT )2 ] <
∞ for each T > 0. Let (y, z) be the solution of the following BSDE, for each
T > 0,
                      T                                                      T
      yt = yT +           g(ys , zs , s)ds + (AT − At ) −                        zs dBs ,       t ∈ [0, T ],    (75)
                  t                                                      t

Then (yt )0≤t≤T is a g–supermartingale (resp. g–submartingale).

   In this section we are concerned with the inverse problem: can we say
that a right-continuous E g -supermartingale is also a E g -supersolution? This
problem is more diﬃcult since it is in fact a nonlinear version of Doob-Meyer
Decomposition Theorem. We claim

Theorem 3.9. We assume that g satisﬁes (i) and (ii) of (34). Let (Yt ) be a
right-continuous g–supermartingale on [0, T ]. Then (Yt ) is an g-supersolution:
there exists a unique RCLL increasing process (At ) with E[(AT )2 ] < ∞, for
each T > 0, such that (Yt ) coincides with the unique solution (yt ) of the
BSDE. For each T > 0,
                      T                                                      T
      yt = YT +           g(ys , zs , s)ds + (AT − At ) −                        zs dBs ,       t ∈ [0, T ],    (76)
                  t                                                      t

   In order to prove this theorem, we consider the following family of BSDE
parameterized by i = 1, 2, · · · .
                                T                                T                              T
          yti = YT +                g(ysi , zsi , s)ds + i           (Ys − ysi )ds −                zsi dBs .   (77)
                            t                                t                              t

An important observation is that, for each i, yti is always bounded from above
by Yt . Thus y i is a g-supersolution on [0, T ]:

Lemma 3.8. We have, for each i = 1, 2, · · · ,

                                       Yt ≥ yti , ∀t ∈ [0, T ], a.s..

Proof. For a δ > 0 and a given integer i > 0, we deﬁne

                                    σ i,δ := inf{t; yti ≥ Yt + δ} ∧ T.

If P (σ i,δ < T ) = 0, for all i and δ, then the proof is done. If it is not the case,
then there exist δ > 0 and a positive integer i such that P (σ i,δ < T ) > 0. We
can then deﬁne the following stopping times

                                      τ := inf{t ≥ σ i,δ ; yti ≤ Yt }

It is clear that σ i,δ ≤ τ ≤ T . Since Y· − y·i is RCLL, we have
         Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                              203

                                                  yτi ≤ Yτ .

But since (Y (s) − y i (s)) ≤ 0 on [σ i,δ , τ ], by monotonicity of E g [·],

                                        yσi i,δ ≤ Eσgi,δ ,τ [yτi |Fσi,δ ]
                                               ≤ Eσgi,δ ,τ [Yτ |Fσi,δ ]
                                               ≤ Yσi,δ . a.s.
                                                                            i,δ
The last step is due to Theorem 7.3. But on the other hand, we  have P(σ <
T ) > 0 and, by the deﬁnition of σ i,δ , yσi i,δ ≥ Yσi,δ + δ on σ i,δ < T . This
induces a contradiction. The proof is complete.                                 

Remark 3.10. From the above result, the term i(Ys − ysi ) in (77) equals to
i(Ys − ysi )+ . By Comparison Theorem yti are pushed up to be above the su-
permartingale Yt . But in fact they can never surpass Yt . We will see that this
eﬀect will force y i to converge to the supermartingale Y itself. Thus, by Limit
Theorem 3.8 Y itself is also a form of (76). Speciﬁcally, we have:

Proof of Theorem 3.9. The uniqueness is due to the uniqueness of g-
supersolution i.e. Proposition 3.12. We now prove the existence. We rewrite
BSDE (77) as
                                    T                                                         T
              yti = YT +                g(ysi , zsi , s)ds + AiT − Ait −                          zsi dBs ,
                                t                                                         t

where we denote
                                                           t
                                        Ait := i               (Ys − ysi )ds.
                                                       0

From Lemma 3.8, Yt − yti = |Yt − yti |. It follows from the Comparison Theorem
that yti ≤ yti+1 . Thus {y i } is a sequence of continuous E g -supersolutions that
is monotonically converges up to a process (yt ). Moreover (yt ) is bounded
from above by Yt . It is then easy to check that all conditions in Theorem 3.8
are satisﬁed. (yt ) is a E g -supersolution on [0, T ] of the following form.
                        T                                                           T
      yt = YT +             g(ys , zs , s)ds + (AT − At ) −                             zs dBs ,       t ∈ [0, T ],
                    t                                                           t

where (At ) is a RCLL increasing process. It then remains to prove that y = Y .
From Lemma 3.7–(ii) we have
                                                   $                               %2
                                                               T
                        E[|AiT |2 ] = i2 E                         |Yt − yti |dt        ≤ C.
                                                           0


It then follows that Yt ≡ yt . The proof is complete                                                                  .
204      Shige Peng

4 Finding the Mechanism: Is an F–Expectation a
g–Expectation?
4.1 E µ -Dominated F -Expectations

Now we will study F -expectations dominated by E µ = E gµ , with gµ (z) := µ|z|,
for some large enough µ > 0, according to the following

Definition 4.1. (E µ -domination) Given µ > 0, we say that an F - expec-
tation E is dominated by E µ if

                  E[X + Y ] − E[X] ≤ E µ [Y ], ∀X, Y ∈ L2 (FT )                  (78)

   By Proposition 3.6, for any g satisfying (i), (ii) (iii”) of (34), the associated
g-expectation is dominated by E µ , where µ is the Lipschitz constant in (34).

Lemma 4.1. If E is dominated by E µ for some µ > 0, then

                        E −µ [Y ] ≤ E[X + Y ] − E[X] ≤ E µ [Y ].                 (79)

Proof. It is a simple consequence of

                             E −µ [Y |Ft ] = −E µ [−Y |Ft ].

                                                                                   

Lemma 4.2. If E is dominated by E µ for some µ > 0, then E[·] is a continuous
operator on L2 (FT ) in the following sense:

       ∃C > 0,    |E[ξ1 ] − E[ξ2 ]| ≤ C ξ1 − ξ2 L2 ,    ∀ξ1 , ξ2 ∈ L2 (FT ).   (80)

Proof. The claim follows easily from Lemma 4.1 above and Lemma 3.3.               

    From now on we will deal with F -expectations E[·] also satisfying the
following condition:

      E[X + Y |Ft ] = E[X|Ft ] + Y,     ∀X ∈ L2 (FT ) and Y ∈ L2 (Ft )           (81)

Recall that, when E[·] is a g-expectation, (81) means that g satisﬁes (34)–(iii”)
(see (57)). We observe that an expectation EQ [·] under a Girsanov transfor-
        dQ
mation       satisﬁes this assumption.
        dP
    We need to introduce a new notation: for a given ζ ∈ L2 (FT ), we consider
the mapping Eζ [·] deﬁned by

                      Eζ [X] := E[X + ζ] − E[ζ] : L2 (FT ) −→ R.                (82)
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures             205

Lemma 4.3. If E[·] is an F -expectation satisfying (78) and (81), then the
mapping Eζ [·] is also an F -expectation satisfying (78) and (81). Its conditional
expectation under Ft is
                        Eζ [X|Ft ] = E[X + ζ|Ft ] − E[ζ|Ft ].                   (83)
Proof. It is easily seen that Eζ [·] is a nonlinear expectation.
    We now prove that the notion Eζ [X|Ft ] deﬁned in (83) is actually the
conditional expectation induced by Eζ [·] under Ft .
    Indeed, put G(X, ζ, Ft ) = E[X + ζ|Ft ] − E[ζ|Ft ]. We want to show that,
for all A ∈ Ft , Eζ (G(X, ζ, Ft )1A ) = Eζ (X1A ). Computations give:


   Eζ [G(X, ζ, Ft )] = E[E[X + ζ|Ft ] − E[ζ|Ft ] + ζ] − E[ζ]       (by (9))
                     = E[E[X + ζ|Ft ] − E[ζ|Ft ] + E[ζ|Ft ]] − E[ζ]     (by (81))
                     = E[E[X + ζ|Ft ]] − E[ζ]
                     = E[X + ζ] − E[ζ].
Thus we have
                         Eζ [G(X, ζ, Ft )] = Eζ [X],    ∀X.                     (84)
Now for each A ∈ Ft , we have,
            G(X1A , ζ, Ft ) = E[X1A + ζ1A + ζ1AC |Ft ] − E[ζ|Ft ]
                            = E[(X + ζ)1A + ζ1AC |Ft ] − E[ζ|Ft ]
                            = E[X + ζ|Ft ]1A + E[ζ|Ft ]1AC − E[ζ|Ft ]
                            = (E[X + ζ|Ft ] − E[ζ|Ft ])1A
                            = G(X, ζ, Ft )1A .
From this with (84) it follows that Eζ [X|Ft ] satisﬁes (7):
        Eζ [G(X, ζ, Ft )1A ] = Eζ [G(X1A , ζ, Ft )] = Eζ [X1A ],    ∀A ∈ Ft .
Thus Eζ [·] is an F -expectation with Eζ [·|Ft ] given by (83).
   We now check that (78) is satisﬁed. For each X, Y ∈ L2 (FT ),
       Eζ [X + Y ] − Eζ [X] = (E[X + Y + ζ] − E[ζ]) − (E[X + ζ] − E[ζ])
                             = E[X + Y + ζ] − E[X + ζ].
Since E[·] satisﬁes (78), Eζ [·] satisﬁes
                           Eζ [X + Y ] − Eζ [X] ≤ E µ [Y ].
   Finally, let Y ∈ L2 (Ft ); since E[·] satisﬁes property (81), thus
                   Eζ [X + Y |Ft ] = E[X + ζ|Ft ] − E[ζ|Ft ] + Y
                                  = Eζ [X|Ft ] + Y.
Thus Eζ [·] also satisﬁes property (81). The proof is complete.                      
206    Shige Peng

Lemma 4.4. Let E[·] be an F -expectation satisfying (78) and (81). Then, for
each t ≤ T , we have a.s.
            E −µ [X|Ft ] ≤ Eζ [X|Ft ] ≤ E µ [X|Ft ], ∀X, ζ ∈ L2 (FT ).

   This lemma is a simple consequence of the following one, whose proof is
inspired by [BCHMP2000].
Lemma 4.5. Let E1 [·] and E2 [·] be two F -expectations satisfying (78) and
(81). If
                     E1 [X] ≤ E2 [X], ∀X ∈ L2 (FT ),
then a.s. and for all t,

                     E1 [X|Ft ] ≤ E2 [X|Ft ],     ∀X ∈ L2 (FT ).
Proof. Indeed, for all Y ∈ L2 (FT ), we have by (81)


                  E1 [Y − E1 [Y |Ft ]] = E1 [E1 [Y − E1 [Y |Ft ]|Ft ]]
                                       = E1 [E1 [Y |Ft ] − E1 [Y |Ft ]]
                                       = E1 [0] = 0.
On the other hand,

                 E1 [Y − E1 [Y |Ft ]] ≤ E2 [Y − E1 [Y |Ft ]]
                                      = E2 [E2 [Y − E1 [Y |Ft ]|Ft ]].

Thus
                 E2 [E2 [Y |Ft ] − E1 [Y |Ft ]] ≥ 0,   ∀Y ∈ L2 (FT ).
Now, for a ﬁxed X ∈ L2 (FT ), we set η = E2 [X|Ft ] − E1 [X|Ft ]. Since
                 η1{η<0} = 1{η<0} E2 [X|Ft ] − 1{η<0} E1 [X|Ft ]
                            = E2 [X1{η<0} |Ft ] − E1 [X1{η<0} |Ft ],
we have then
                                  E2 [η1{η<0} ] = 0.
But since η1{η<0} ≤ 0, it follows from the strict monotonicity of E2 [·] that
η1{η<0} = 0 a.s.. Thus

                           E2 [X|Ft ] − E1 [X|Ft ] ≥ 0    a.s.
The proof is complete.                                                     

Lemma 4.6. If E meets (78) and (81), there exists a positive constant C such
that, for all X and Y in L2 (FT ), and for all t ≥ 0,
                     E[E[X + Y |Ft ] − E[X|Ft ]] ≤ CY L2 .
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures            207

Proof. Indeed, Lemmas 4.3 and 4.4 above imply that


       E[E[X + Y |Ft ] − E[X|Ft ]] = E[EX [Y |Ft ]]
                                     ≤ E[E µ [Y |Ft ]]
                                     ≤ E µ [E µ [Y |Ft ]] = E µ [Y ] ≤ CY L2 .

   The last inequality is from Lemma 4.2.
                                                                                    


4.2 Ft -Consistent Martingales

In this subsection we assume that E is an F -expectation satisfying (78) for
some µ > 0, and (81) as well.

Definition 4.2. A process (Xt )t∈[0,T ] ∈ L2F (0, T ) is called an E-martingale
(resp. E-supermartingale, -submartingale) if for each 0 ≤ s ≤ t ≤ T

              Xs = E[Xt |Fs ], (resp. ≥ E[Xt |Fs ], ≤ E[Xt |Fs ]).

Lemma 4.7. An E µ -supermartingale (ξt ) is both an E - supermartingale and
E −µ - supermartingale. An E −µ - submartingale (ξt ) is both an E - and E µ
- submartingale. An E - martingale (ξt ) is an E −µ - supermartingale and an
E µ -submartingale.

Proof. It comes simply from the fact that, for each 0 ≤ s ≤ t ≤ T ,

                     E −µ [ξt |Fs ] ≤ E[ξt |Fs ] ≤ E µ [ξt |Fs ].

                                                                                    
   The next result is the ﬁrst step in a procedure that will eventually prove
that every E-martingale admits continuous paths.

Lemma 4.8. For each X ∈ L2 (FT ) the process E[X|Ft ], t ∈ [0, T ] admits a
unique modiﬁcation with a.s. RCLL paths.

Proof. We can deduce from Lemma 4.7 that the process E[X|Ft ], t ∈ [0, T ],
is an E −µ -supermartingale. Hence we can apply the downcrossing inequality
of Proposition 3.11.
    This downcrossing inequality tells us that E[X|Ft ], t ∈ [0, T ] has P -a.s.
ﬁnitely many downcrossings of every interval [a, b] with rational a < b. By
classical methods, this imply the almost sure existence of left and right limits
for the paths of E[X|F· ].
    We thus can deﬁne Yt = lim E[X|Fs ]. For each A ∈ Ft , we have that
                                 st
                               s∈Q∩[0,T ]
208      Shige Peng

                      Yt 1A =        lim        E[X|Fs ]1A , in L2 (FT ).
                                    st
                                  s∈Q∩[0,T ]


From Lemma 4.2, it follows that

                           E[Yt 1A ] =          lim     E[E[X|Fs ]1A ].
                                             st
                                           s∈Q∩[0,T ]


But
                               E[E[X|Fs ]1A ] = E[1A E[X|Ft ]].
It follows that a.s. Yt = E[X|Ft ].
    Now it’s again classical to prove, using the existence of left and right limits,
that the process Y deﬁned above is a RCLL modiﬁcation of E[X|Ft ], t ∈ [0, T ],
and the lemma is proved.                                                          

  Henceforth, and without needing to recall it, we will always consider the
RCLL modiﬁcations of the E-martingales we have to deal with.
      Lemma 4.8 has an immediate consequence as follows :
Lemma 4.9. Let E[·] be an F -expectation satisfying (78) and (81). Then for
                                                       T
each X ∈ L2 (FT ) and g ∈ L2F (0, T ) the process E[X + t gs ds|Ft ], t ∈ [0, T ]
is RCLL a.s.
Proof. Indeed, we can write
                           T                                  T                  t
              E[X +            gs ds|Ft ] = E[X +                 gs ds −            gs ds|Ft ]
                       t                                  0                  0
                                                              T                           t
                                           = E[X +                gs ds|Ft ] −                gs ds
                                                          0                           0

because of (81). The claim follows then easily from Lemma 4.8.                                          

Lemma 4.10. For each X ∈ L2 (FT ), let

                                        yt = E[X|Ft ].

Then there exists a pair (g(·), z(·)) ∈ L2F (0, T ; R × Rd ) with

                                           |gt | ≤ µ|zt |                                             (85)

such that
                                                T                 T
                           yt = X +                 gs ds −           zs dBs .                        (86)
                                            t                 t

Furthermore, take X  ∈ L2 (FT ), put yt = E[X  |Ft ], and let (g  (·), z  (·)) ∈
L2F (0, T ; R × Rd ) be the corresponding pair. Then we have

                                    |gt − gt | ≤ µ|zt − zt |                                        (87)
         Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                       209

Proof. Since
                              yt = E[X|Ft ],             0 ≤ t ≤ T,
is an E - martingale, and since it is RCLL, it is a right-continuous E µ -
submartingale (resp. E −µ - supermartingale). By the domination E −µ [X|Ft ] ≤
E[X|Ft ] ≤ E µ [X|Ft ], we also have E[supt∈[0,T ] |yt |2 ] < ∞. Thus, from the
g - supermartingale decomposition theorem (Theorem 3.9) that there exist
(z µ , Aµ ) and (z −µ , A−µ ) in L2F ([0, T ]; R × Rd ) with Aµ and A−µ RCLL and
increasing such that Aµ (0) = 0, A−µ (0) = 0 and such that
                                       T                                  T
                  yt = yT +                µ|zsµ |ds − AµT + Aµt −            zsµ dBs
                                   t                                  t

and
                              T                                               T
             yt = yT −            µ|zs−µ |ds + A−µ   −µ
                                                T − At  −                         zs−µ dBs .
                          t                                               t
Hence, the martingale parts and the bounded variation parts of the above two
processes must coincide:

                                    ztµ ≡ zt−µ ,
                       −µ|zt |dt + dAµt ≡ µ|ztµ |dt − dA−µ
                           µ
                                                        t ,

whence
                                  2µ|ztµ |dt ≡ dAµt + dA−µ
                                                        t .

It follows that Aµ and A−µ are both absolutely continuous and we can write:

                           dAµt = aµt dt,              dA−µ
                                                         t  = a−µ
                                                               t dt

with
                                           0 ≤ aµt ,   0 ≤ a−µ
                                                            t .

We also have
                                           aµt + a−µ
                                                  t  ≡ 2µ|ztµ |,
so, if we deﬁne

                                            zt = ztµ
                                            gt = µ|zt | − aµt ,

we get (86) and (85).
   Now, we prove (87). We have

                     yt − yt = E[X|Ft ] − E[X  |Ft ]
                              = E[X − X  + X  |Ft ] − E[X  |Ft ]
                                  = EX  [X − X  |Ft ]

Recall (Lemma 4.3) that EX  [·] is another F -expectation satisfying (78) and
(81). Thus there also exists a pair (g̃(·), z̃(·)) ∈ L2F (0, T ; R × Rd ) with
210     Shige Peng

                                       |g̃t | ≤ µ|z̃t |                                             (88)

such that the EX  -martingale yt − yt satisﬁes
                                                        T                    T
                   yt − yt = X − X  +                     g̃s ds −             z̃s dBs .
                                                    t                    t

On the other hand, we have
                                           T                                 T
             yt − yt = X − X  +              [gs − gs ]ds −                   [zs − zs ]dBs .
                                       t                                 t

It follows then that

                         g̃t ≡ gt − gt ,       and z̃t ≡ zt − zt .

This with (88) yields (87). The proof is complete.                                                    

Remark 4.1. From the above lemma, the result of Lemma 4.9 can be improved
                                                                T
to: for each X ∈ L2 (FT ) and g ∈ L2F (0, T ), the process E[X + t gs ds|Ft ],
t ∈ [0, T ] is continuous a.s..

4.3 BSDE under Ft –Consistent Nonlinear Expectations

Here again, E denotes an F -expectation satisfying (78) for some µ > 0, and
(81) as well. Let a function f be given

                         f (ω, t, y) : Ω × [0, T ] × R −→ R

satisfying, for some constant C1 > 0,
           
              (i) f (·, y) ∈ L2F (0, T ), for each y ∈ R;
                                                                                                    (89)
              (ii) |f (t, y1 ) − f (t, y2 )| ≤ C1 |y1 − y2 |, ∀y1 , y2 ∈ R.

For a given terminal data X ∈ L2 (FT ), we consider the following type of
equation:
                                                    T
                           Yt = E[X +                   f (s, Ys )ds|Ft ]                           (90)
                                                t

Theorem 4.1. We assume (89). Then there exists a unique process Y (·) so-
lution of (90). Moreover, Y (·) admits continuous paths.

Proof. Deﬁne a mapping Λ(y(·)) : L2F (0, T ) −→ L2F (0, T ) by
                                                            T
                       Λt (y(·)) := E[X +                       f (s, ys )ds|Ft ].
                                                        t

Using Lemma 78,
               Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                                   211
                                                              T
               Λt (y1 (·)) − Λt (y2 (·)) ≤ E µ [                  (f (s, y1 (s)) − f (s, y2 (s)))ds|Ft ].
                                                          t

Thus
                                                              T
           |Λt (y1 (·)) − Λt (y2 (·))| ≤ E µ [                    |f (s, y1 (s)) − f (s, y2 (s))|ds|Ft ]
                                                          t
                                                                      T
                                                  ≤ C1 E µ [              |y1 (s) − y2 (s)|ds|Ft ], by (89).
                                                                  t

Using Lemma 3.3, it follows that
                                                                                      T
           E[|Λt (y1 (·)) − Λt (y2 (·))|2 ] ≤ C12 E[E µ [                                  |y1 (s) − y2 (s)|ds|Ft ]2 ]
                                                                                  t
                                                                                                   T
                                                                      2
                                                       ≤ C12 eµ (T −t) E[                              |y1 (s) − y2 (s)|ds]2
                                                                                               t
                                                                              T
                                                       ≤ C2 E[                    |y1 (s) − y2 (s)|2 ds].
                                                                          t
                                  2
where C2 := T C12 eµ T .
   We observe that, for any ﬁnite number β, the following two norms are
equivalent in L2F (0, T )
                                              T                               T
                                      E           |φs |2 ds ∼ E                   |φs |2 eβs ds.
                                          0                               0

Thus we multiply e2C2 t on both sides of the above inequality and then inte-
grate them on [0, T ]. It follows that
           T                                                                  T                        T
 E             |Λt (y· ) − Λt (y· )|2 e2C2 t dt ≤ C2 E                           e2C2 t                   |ys − ys |2 dsdt
       0                                                                  0                        t
                                                                              T        s
                                                       = C2 E                              e2C2 t dt|ys − ys |2 ds
                                                                          0        0
                                                                                                   T
                                                       = (2C2 )−1 C2 E                                 (e2C2 s − 1)|ys − ys |2 ds.
                                                                                               0

We then have
                         T                                                                     T
                                                                              1
                 E           |Λt (y· ) − Λt (y· )|2 e2C2 t dt ≤                E                  |yt − yt |2 e2C2 t dt.
                     0                                                        2            0

Namely, Λ is a contraction mapping on L2F (0, T ). It follows that this mapping
has a unique ﬁxed point Y :
                                                                  T
                                      Yt = E[X +                      f (s, Ys )ds|Ft ].
                                                              t
212     Shige Peng

   Finally, Lemma 4.9 and Remark 4.1 proves that the solution of (90) admits
continuous paths, and the proof is complete.                              


Theorem 4.2. (Comparison Theorem). Let Y be the solution of (90) and
let Y  be the solution of
                                            T
                      Yt = E[X  +             [f (s, Ys ) + φs ]ds|Ft ]
                                        t

where X  ∈ L2 (FT ) and φ ∈ L2F (0, T ). If

                        X  ≥ X,      φt ≥ 0,              dP × dt-a.e.,                    (91)

then we have
                               Yt ≥ Yt ,           dP × dt-a.e.                            (92)
(92) becomes equality if and only if (91) become equalities.

Proof. We begin with the case φt ≡ 0. For each δ > 0, we deﬁne

                         τ1δ = inf{t ≥ 0; Yt ≤ Yt − δ} ∧ T.

It is clear that if, for all δ > 0, τ1δ = T a.s., then (92) holds. Now if for some
δ > 0 we have                                         
                       P (A) > 0, with A = τ1δ < T ∈ Fτ1δ
we then can deﬁne
                             τ2 = inf{t ≥ τ1δ ; Yt ≥ Yt }.
Since YT = X  ≥ X = YT , thus τ2 ≤ T and 1A Y  (τ2 ) = 1A Y (τ2 ) . It follows
that, for τ ∈ [τ1δ , τ2 ],
                                                    τ2
                  1A Yτ = E[1A Yτ2 +                     1A f (s, 1A Ys )ds|Fτ ],
                                                τ
                                                    τ2
                  1A Yτ = E[1A Yτ2 +                    1A f (s, 1A Ys )ds|Fτ ].
                                                τ

By the uniqueness result of Theorem 4.1, the solutions of the above two equa-
tions must coincide with each other. Thus Yτδ 1A = Yτ1δ 1A . This contradicts
                                                1
P (A) > 0.
    In order to prove the general case when φs ≥ 0, we deﬁne for n = 1, 2, 3, · · · ,
Y n (·) to be the solution of
                          $                                     %
                                        T                          T
                 Ytn = E [X  +             φs ds] +                   f (s, Ysn )ds|Ft ,
                                       iT
                                        n                      t

                                               iT
                for t ∈ [tni , tni+1 ), tni :=    , i = 0, 1, · · · , n − 1..
                                                n
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                         213

This equation can be written, piece by piece, as
                  $            n              n
                                                                                                       %
                                          ti+1                         ti+1
            Ytn = E [Ytnni+1 +                      φs ds] +                  f (s, Ysn )ds|Ft ,
                                         tn
                                          t                        t

               t ∈ [tni , tni+1 ), YTn = Ytnnn = X  .

                                                                                  ˙
From the ﬁrst part of the proof. We have, for i = n− 1, Ytn ≥ Yt , t ∈ [tnn−1 , T ).
In particular, Ytnn−1 ≥ Ytnn−1 . An obvious iteration of this algorithm gives
                 n


                    Ytn ≥ Yt , t ∈ [tni , tni+1 ), i = 0, · · · , n − 2.

Thus Ytn ≥ Yt , t ∈ [0, T ].
   In order to prove that Yt ≥ Yt , It suﬃces to show the convergence of the
sequence (Y n ) to Y  . A computation analogous to the proof of Theorem 4.1
shows that, for ﬁxed t ∈ [tni , tni+1 ) and an appropriate constant C,
                                                t                             T
          E[|Ytn − Yt |2 ] ≤ CE[(                  |φs |ds + C1                  |Ysn − Ys |ds)2 ]
                                               iT
                                                n                         t

Using Schwartz inequality, one has for all t ∈ [0, T ]
                                         T                                             T
                               T
    E[|Ytn − Yt |2 ] ≤ 2C       E            |φs |2 ds + 2CC12 T E                        |Ysn − Ys |2 ds.    (93)
                               n     0                                             t

Gronwall’s Lemma applied to the above inequality shows that

                                     E[|Ytn − Yt |2 ] → 0,

and ﬁnally Yt ≥ Yt .
   Finally, we investigate possible equality in (92). From Yt ≡ Yt , one has
                        T                                          T                               T
          E[X +             f (s, Ys )ds] = E[X  +                    f (s, Ys )ds +                  Φs ds]
                    0                                          0                               0
                    T
Since X  ≥ X and 0 Φs ds ≥ 0, it follows from the strict monotonicity of E
                       T
that X  = X a.s., and 0 Φs ds = 0, whence Φ = 0 dt × dP a.e. and the end
of the proof.                                                             



4.4 Decomposition Theorem for E-Supermartingales

Our next result generalizes the decomposition theorem for g-supermartingales
proved in Theorem. 3.9 to continuous E-supermartingales. The proof is very
similar. It also uses mainly arguments from Theorem 3.9.
214      Shige Peng

Theorem 4.3. (Decomposition theorem for E-supermartingales) Let
                                                                 2
E[·] be an F -expectation satisfying (78) and (81), and let Y ∈ SF (0, T ) be a
                                                   2
E-supermartingale. Then there exists an A(·) ∈ SF (0, T ) with A(0) = 0 such
that Y + A is an E-martingale.

Proof. For n ≥ 1, we deﬁne y n (·), solution of the following BSDE:
                                              T
                         ytn = E[YT +             n(Ys − ysn )ds|Ft ]
                                          t

      We have then the following

Lemma 4.11. We have, for each t and n ≥ 1,

                                    Yt ≥ ytn , a.s.

Proof. For a δ > 0 and a given integer n > 0, we deﬁne

                          σ n,δ := inf{t; ytn ≥ Yt + δ} ∧ T.

If P (σ n,δ < T ) = 0, for all n and δ, then the proof is done. If it is not the case,
then there exist δ > 0 and a positive integer n such that P (σ n,δ < T ) > 0.
We can then deﬁne the following stopping times

                            τ := inf{t ≥ σ n,δ ; ytn ≤ Yt }

It is clear that σ n,δ ≤ τ ≤ T . Because of Theorem 4.1, Yt − ytn is continuous.
Hence we have
                                    yτn ≤ Yτ                                (94)
But since (Ys − ysn ) ≤ 0 in [σ n,δ , τ ], by monotonicity of E[·],
                                          τ
                      yσnn,δ = E[yτn +            n(Ys − ysn )ds|Fσn,δ ]
                                         σn,δ
                           ≤ E[yτn |Fσn,δ ]
                           ≤ E[Yτ |Fσn,δ ]

Finally, since Y is an E-supermartingale, by (optional stopping theorem) The-
orem 7.4, we have
                                Yσn,δ ≥ yσnn,δ .
But on the other hand, we have P (σ n,δ < T ) > 0 and, by the deﬁnition of
                         n,δ
σ , yσn,δ ≥ Yσn,δ + δ on σ < T . This induces a contradiction. The proof
  n,δ n

is complete.                                                             

    Lemma 4.11 with Theorem 4.2 above imply that y n (·) monotonically con-
                                                           (n+1)
verges to some Y 0 (·) ≤ Y (·). Indeed, writing φt = Yt − yt     ≥ 0 shows that
  n
(y (·)) is an increasing sequence of functions.
         Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                       215
                                              t
   Observe then that ytn + 0 n(Ys − ysn )ds is an E-martingale. By Lemma
4.10, there exists (g n , z n ) ∈ L2F (0, T ; R × Rd ) with

                                   |gsn | ≤ µ|zsn |,              n = 1, 2, · · · ,                            (95)

such that

                            t                                                T
               ytn +            n(Ys − ysn )ds = yTn +                           n(Ys − ysn )ds
                        0                                                  0
                                                                           T                   T
                                                                  +            gsn ds −            zsn dBs ,
                                                                       t                   t

hence, as yTn = YT ,
                                              T                                            T
                 ytn = YT +                       [gsn + n(Ys − ysn )]ds −                     zsn dBs .       (96)
                                          t                                            t

(87) also tells us that

                       |gsn − gsm | ≤ µ|zsn − zsm |,                       n, m = 1, 2, · · ·                  (97)

     Let us denote, for each n = 1, 2, · · · ,
                                                             t
                                          Ant = n                (Ys − ysn )ds
                                                         0

A is a continuous increasing process such that An (0) = 0.
 n


   We are now going to identify the limit of y n (·). To this end, we shall use
the following lemma :

Lemma 4.12. There exists a constant C which is independent of n such that
                                      T
                 (i)        E             |zsn |2 ds ≤ C;             (ii)        E[(AnT )2 ] ≤ C.             (98)
                                  0



Proof. By yt1 ≤ ytn ≤ ytn+1 ≤ Yt , n = 1, 2, · · · with E[supt∈[0,T ] |Yt |2 ] < ∞, we
have |ytn | ≤ |yt1 | + |Yt |. Thus there exists a constant C, independent of n, such
that
                                    E[ sup |ytn |2 ] ≤ C.                         (99)
                                                    0≤t≤T

We then can apply (28) and (95) to prove (98) step by step as the proof of
Lemma 3.7.                                                              
    With the help of Lemma 4.12 we can now end the proof of the Decompo-
sition Theorem.
216      Shige Peng

      Note ﬁrst that (98)–(i) with (95) also implies
                                              T
                                 E                |gsn |2 ds ≤ µ2 C
                                          0

(98)–(ii) implies that
                                          y n (·)  Y (·).
From by the monotonic limit Theorem 7.2 (in Appendix), it follows that we
can write Y under the form
                                      T                                   T
                   Yt = YT +              gs ds + AT − At −                   zs dBs   (100)
                                  t                                   t

for some (g, z) ∈ L2F (0, T ; R × Rd ) and an increasing process A with A0 = 0
and E[A2T ] < ∞. Observe that Y (·) and then A(·) is continuous. It follows
from Theorem 7.2 that

                      z n (·) → z(·),             strongly in L2F (0, T ; Rd).
It follows from (97) that

                        g n (·) → g(·),             strongly in L2F (0, T ).

And ﬁnally, (28) gives

                         Ant −→ At ,               strongly in L2 (FT ).

Thanks to Lemma 4.6, we can pass to the L2 -limit in both sides of

                              ytn = E[YT + AnT − Ant |Ft ].

It follows that
                              Yt = E[YT + AT − At |Ft ].
Thus Yt + At = E[YT + AT |Ft ] is an E-martingale (because of (81)). Since A
is increasing, the Theorem is proved.                                      


4.5 Representation Theorem
of an F –Expectation by a g–Expectation

In this subsection, we will prove an important result: an Ft –consistent nonlin-
ear expectation can be identiﬁed as a g-expectation, provided that (78) and
(81) hold.
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                           217

Theorem 4.4. We assume that an F -expectation E[·] satisﬁes (78) and (81)
for some µ > 0. Then there exists a function g = g(t, z) : Ω × [0, T ] × Rd
satisfying (i), (ii) and (iii”) of (34) such that

                         E[X] = Eg [X],           ∀X ∈ L2 (FT ).

In particular, every E-martingale is continuous a.s.
   Moreover, we have |g(t, z)| ≤ µ|z| for all t ∈ [0, T ].

Proof. For each given z ∈ Rd , we consider the following forward equation
                         
                           dYtz = −µ|z|dt + zdBt ,
                           Y z (0) = 0.

We have E[supt∈[0,T ] |Ytz |2 ] < ∞. It is also clear that Y z is an E µ -martingale,
thus an E[·]-supermartingale. Indeed, we can write Ytz = E µ [YTz |Ft ]. From
Theorem 4.3, there exists an increasing process Az (·) with Az (0) = 0 and
    T ] < ∞ such that
E[Az2

                           Ytz = E[YTz + AzT − Azt |Ft ].

Or
                     Ytz + Azt = E[YTz + AzT |Ft ],                t ∈ [0, T ].
Then, from Lemma 4.10. there exists (g(z, ·), Z (·)) ∈ L2F (0, T ; R × Rd ) with
                                                               z

|g(z, t)| ≤ µ|Ztz | such that
                                                  T                              T
               Ytz + Azt = YTz + AzT +                g(z, s)ds −                    Zsz dBs .   (101)
                                              t                              t

We also have                                                             
                        |g(z, t) − g(z  , t)| ≤ µ|Ztz − Ztz |.                                  (102)
But on the other hand, since
                                          T                        T
                       Ytz = YTz +            µ|z|ds −                 zdBs ,
                                      t                        t

it follows that
                                                      t
                            Azt ≡ µ|z|t −                 g(z, s)ds,
                                                  0
                           Ztz ≡ z.

In particular, (102) becomes

                          |g(z, t) − g(z  , t)| ≤ µ|z − z  |.                                  (103)

Moreover,
218          Shige Peng
                                                                                 t                                 t
      Ytz + Azt = Y z (r) + Az (r) −                                                 g(z, s)ds +                       zdBs ,   0 ≤ r ≤ t ≤ T,
                                                                             r                                 r

and Ytz + Azt is an E-martingale. But with the assumption (81) one has, for
each z ∈ Rd and r ≤ t
                   t                            t
       E[−             g(z, s)ds +                      zdBs |Fr ] = E[Ytz + Azt − (Y z (r) + Az (r))|Fr ],
               r                            r

      i.e.
                                 t                                           t
                       E[−           g(z, s)ds +                                 zdBs |Fr ] = 0                        0≤r≤t≤T              (104)
                             r                                           r

Now let {Ai }N
             i=1 be a Fr -measurable partition of Ω (i.e., Ai are disjoint, Fr -
measurable and ∪Ai = Ω) and let zi ∈ Rd , i = 1, 2, · · · , N . From (11), it
follows that
                                            t     N                                                       t
                                                                                                            N
                             E[−                g(   zi 1Ai , s)ds +                                                   zi 1Ai dBs |Fr ]
                                        r               i=1                                        r i=1

                             N                                         t                                     t
                         = E[   1 Ai −                                       g(zi , s)ds +                         zi dBs |Fr ]
                                 i=1                                 r                                     r

                             
                             N                                   t                                     t
                         =           1Ai E[−                         g(zi , s)ds +                         zi dBs |Fr ]
                             i=1                             r                                     r

                         =0

(because of (104)). In other words, for each simple function η ∈ L2 (Ω, Fr , P ),
                                                        t                                    t
                                     E[−                    g(η, s)ds +                          ηdBs |Fr ] = 0.
                                                    r                                    r

From this, the continuity of E[·] in L2 given by (80) and the fact that g is
Lipschitz in z, it follows that the above equality holds for η(·) ∈ L2F (0, T ; Rd) :
                                                    t                                        t
                                     E[−                g(ηs , s)ds +                            ηs dBs |Fr ] = 0.                          (105)
                                                r                                        r

      We just have to prove now that

                                        Eg [X] = E[X],                                   ∀X ∈ L2 (FT ).

To this end we ﬁrst solve the following BSDE

                                                −dys = g(s, zs )ds − zs dBs ,
                                                        yT = X.

Since g is Lipschitz in z, there exists a unique solution (y(·), z(·)) ∈ L2F (0, T ; R×
Rd ). By the deﬁnition of g-expectation,
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                          219

                                                Eg [X] = y(0).
On the other hand, using (105), one ﬁnds
                                                        T                                T
                 E[X] = E[y(0) −                            g(zs , s)ds +                    zs dBs ]
                                                    0                                0
                                                                T                                T
                       = y(0) + E[−                                 g(zs , s)ds +                    zs dBs ]
                                                            0                                0
                       = y(0) = Eg [X].
It follows that this g-expectation Eg [·] coincides with E[·] and we are ﬁnished.



4.6 How to Test and Find g?

Let g(s, z) be the generator of the investigated agent. An very important
problem is how to ﬁnd this function g. We will treat this problem for the case
where g is a deterministic function: g(t, z) : [0, ∞) × Rd → R. We assume
that
              |g(t, z) − g(t, z  )| ≤ µ|z − z  |, ∀t ≥ 0, ∀z, z  ∈ Rd ,
                                                                           (106)
              g(t, 0) ≡ 0, ∀t ≥ 0, .
In this case we can ﬁnd such g by the following testing method.
Proposition 4.1. We assume (106). Let z̄ ∈ Rd be given, then
                               T
                                   g(s, z̄)ds = Eg [z̄BT |Ft ] − z̄Bt                                           (107)
                           t

In particular
                                           T
                                               g(s, z̄)ds = Eg [z̄BT ]                                          (108)
                                       0

Proof. We denote Yt := Eg [z̄BT |Ft ], it is the solution of the following BSDE
                                                    T                                T
                     Yt = z̄BT +                        g(s, Zs )ds −                        Zs dBs
                                                t                                t

Or
                                   T                                                     T
             Yt − z̄Bt =               g(s, Zs − z̄ + z̄)ds −                                (Zs − z̄)dBs .
                               t                                                     t
It follows that (Ȳt , Z̄t ) := (Yt − z̄Bt , Zt − z̄) solves the BSDE
                                       T                                         T
                      Ȳt =                g(s, Z̄s + z̄)ds −                        Z̄s dBs .
                                   t                                         t
                                                T
This BSDE has a unique solution (Ȳt , Z̄t ) ≡ ( t g(s, z̄)ds, 0). We thus have
(107).
220      Shige Peng

Remark 4.2. It is meaningful to test the generator g of an agent: at a time
t ≤ T , we let the agent evaluate z̄BT and result Eg [z̄BT |Ft ]. Then the deter-
               T
ministic data t g(s, z̄)ds is obtained by Ȳt = Eg [z̄BT |Ft ] − z̄Bt , where Bt is
a known value at the time t.

Example 4.1. If g is time–invariant: g = g(z), then we have

                         g(z̄)(T − t) = Eg [z̄BT |Ft ] − z̄Bt

and
                            g(z̄)T = Eg [z̄BT ], z̄ ∈ Rd .

Example 4.2. If we already know that g = g0 (θ, z), where g0 : [a, b]×Rd → R
is a given function but we have to ﬁnd the parameter θ ∈ [a, b], assume that
for some z̄ ∈ Rd , g0 (θ, z) is a strictly increasing function of θ in [a, b]. Then
we can only test the agent once at the time, say t = 0. Using the formula

                                g0 (θ, z̄)T = Eg [z̄BT ],

we can uniquely determine θ.

4.7 A General Situation: Ft –Evaluation Representation Theorem

Theorem 4.4 is only valid for a part of Ft –consistent nonlinear expectations.
For a general situation we have the following result [Peng2003b]. By the limi-
tation of the size of this lecture, we will only state the result without given the
proof. We are given an Ft –consistent nonlinear evaluation deﬁned on L2 (FT ) :

                   Es,t [·] : L2 (Ft ) → L2 (Fs ),   0 ≤ s ≤ t ≤ T.

It satisﬁes the axiomatic assumptions (A1)–(A4), with the following additional
E gµ,µ –dominated assumption (gµ,µ (y, z) := µ(|y| + |z|)), weaker than (A5):
(A5’) There a suﬃciently large number µ > 0 such that, for each 0 ≤ s ≤
t ≤ T,
          Es,t [X] − Es,t [X  ] ≤ Es,tµ,µ [X − X  ], ∀X, X  ∈ L2 (Ft ).
                                    g


      The g–evaluation representation theorem is as follows:

Theorem 4.5. Let Es,t [·] : L2 (Ft ) → L2 (Fs ), 0 ≤ s ≤ t ≤ T , satisfy (A1)–
(A4) and (A5’). Then there exists a function g(ω, t, y, z) satisfying (34)–(i),
(ii) and (iii), such that, for each 0 ≤ s ≤ t ≤ T ,
                                    g
                        Es,t [X] = Es,t [X], ∀X ∈ L2 (Ft ).

Remark 4.3. In this result we do not need the assumption (81). Thus g may
depend on (y, z).
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures         221

Remark 4.4. In [Peng2003b] we also consider the situation where (A4) is weak-
ened by (A4’): 1A Es,t [X] = 1A Es,t [1A X], for each A ∈ Fs . In this case the cor-
responding g satisﬁes only (34)–(i) and (ii) without the condition g(s, 0, 0) ≡ 0.

Remark 4.5. From the above g–evaluation reprentation theorems, we see that
the dominating term, such as E gµ,µ [·] , plays an important role. A general
formulation is:
                    Es,t [X] − Es,t [X  ] ≤ Es,t
                                              ∗
                                                  [X − X  ],
        ∗
where Es,t [X − X  ] is a given self–dominated nonlinear evaluation: i.e., it is a
concrete evaluation satisfying (A1)–(A4) and
              ∗          ∗
             Es,t [X] − Es,t [X  ] ≤ Es,t
                                       ∗
                                           [X − X  ], ∀X, X  ∈ L2 (Ft ).


5 Dynamic Risk Measures
Recently Rosazza Gianin [Roazza2003] considered a type of dynamic risk
measures induced from g–expectations. We consider a more general situa-
tion. Let Es,t [·] be an Ft –consistent nonlinear evaluation deﬁned on L2 (FT ).
It satisﬁes (A1)–(A4). We set, for each 0 ≤ s ≤ t ≤ T , and X ∈ L2 (Ft ),
ρs,t [X] := Es,t [−X]. {ρs,t [·]}0≤s≤t≤T is called a dynamic risk measure deﬁned
on L2 (FT ). We consider an F –consistent evaluation {Es,t [·]}0≤s≤tT satisfying
some of the following axiomatic conditions: for each 0 ≤ s ≤ t ≤ T and X,
Y ∈ L2 (Ft ), it satisﬁes

   (e1) subadditivity: Es,t [X + Y ] ≤ Es,t [X] + Es,t [Y ];
   (e2) positively homogeneity: Es,t [αX] = αEs,t [X];
   (e3) constant translability: Es,t [X + η] = Es,t [X] + η, ∀η ∈ L2 (Fs )
   (e4) convexity:

         Es,t [αX + (1 − α)Y ] ≤ αEs,t [X] + (1 − α)Es,t [Y ], ∀α ∈ [0, 1].


   Similar to [ADEH1999] and [FoSc2002] for static situations, we can deﬁne
the following type of dynamic risk measures.

Definition 5.1. A dynamic risk measure {ρs,t [·]}0≤s≤t≤T is said to be coher-
ent if the corresponding nonlinear evaluation {Es,t [·]}0≤s≤t≤T satisﬁes (e1)–
(e3). It is said to be convex and constant translable if Es,t [·] satisﬁes (e3) and
(e4).

    For the situation of E g –evaluation, we have the corresponding ρg –risk mea-
sure deﬁned by ρgs,t [X] := Es,t
                               g
                                 [−X]. A very interesting point is that the con-
crete function g perfectly reﬂexes the attitude of an investor towards risks. In
fact we have the following properties:
222      Shige Peng

Proposition 5.1. We assume that g satisﬁes (34)–(i), (ii). Then E g [·] is
subadditive (resp. superadditive) if g is subadditive (resp. superadditive) in
(y, z) ∈ R1+d . It is positively homogegeous if g is positively homogegeous in
(y, z) ∈ R1+d . It is convex (resp. concave) if g is convex (resp. concave) in
(y, z) ∈ R1+d . It has constant translability if g is independent of y. Moreover,
                                               2
if, for each (y, z) and P -a.s., g(·, y, z) ∈ DF (0, T ), then all the above “if ” can
be replaced by “if and only if ”.

For the proof of this proposition we refer to [EPQ1997], [BCHMP2000],
[Roazza2003] and [Peng2003c]


6 Numerical Solution of BSDEs: Euler’s Approximation
Let ( ni )i=1,2,··· ,n be a Bernouil sequence, i.e., an i.i.d. sequence such that with
                                                                   1
                           P { ni = 1} = P { ni = −1} =              .
                                                                   2
We set

                                √ k
                      Bkn : =        i , Fk := σ {Bk ; 1 ≤ k ≤ n}
                                     n    n        n
                                 n
                                    i=1
                                                   √ n
                 n
               ∆Bk+1      n
                     : = Bk+1 − Bkn =               n k,

Let ξ be Fkn –measurable. This implies that there exists a function: Φ :
{1, −1}k → R, such that

                                   ξ n = Φn ( n1 , · · · , nk ).

All processes are assumed to be Fkn –adapted. We make the following assump-
tion
    (H1) B n converges to B in S 2
    (H2) ξ n converges to ξ in L2 (P ).
    f and f n : [0, 1] × Ω × R × R −→ R such that for each (y, z) ∈ R × R,
    {f n (t, y, z)}0≤t≤1 (resp. {f (t, y, z)}0≤t≤1 ) are progressively measurable
with respect to Ftn (resp. to Ft ) such that
    (H3)–(i):

                |f n (t, y, z) − f n (t, y  , z  )| ≤ C(|y − y  | + |z − z  |)
                   |f (t, y, z) − f (t, y  , z  )| ≤ C(|y − y  | + |z − z  |)

    (ii) For each (y, z) paths {f n (t, y, z)}0≤t≤1 have RCLL paths and converges
to {f (t, y, z)}0≤t≤1 in S 2 (R) with

                             |Y |S 2 := {E[ sup |Yt |2 ]}1/2 .
                                               0≤t≤1
         Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                223

   We set
                                              k k+1
             f n (t, y, z) ≡ gkn (y, z), t ∈ [ ,    ), k = 0, 1, · · · , n.
                                              n  n
and
   ynn = ξ n : a given Fnn –measurable random variable. Then we solve back-
wardly
                                         1
         ykn = yk+1
                n
                    + gkn (ykn , zkn )     − zkn ∆Bk+1
                                                   n
                                                       , k = n − 1, · · · , 3, 2, 1.
                                         n
Or ytn ≡ ykn , ztn ≡ zkn , t ∈ [ nk , k+1             n n
                                       n ). We call (y , z ) the solution to (g, ξ).

                       dytn = f n (t, ytn , ztn )d B n t − ztn dBtn ,
                         yTn = ξ n .

Theorem 6.1. (Existence and Uniqueness and Comparison) Let

                 gkn (ω, y, z) : Ω × R × R → R, k = 1, · · · , n − 1

be Fkn –measurable and C–Lipschitz with respect to y with n > C. Then
there exists a unique Fkn –adapted pair (y·n , z·n ), solution to (g, ξ). Moreover,
if (y·n , z·n ) is the solution corresponding to (g  , ξ  ), and if

                         gkn (ω, y, z) ≥ gkn (ω, y, z), ξ n ≥ ξ n ,

then the corresponding solution (y n , z n ) satisﬁes

                                           ykn ≥ ykn .

Corollary. If A1 (·) and A2 (·) satisﬁes the above conditions with A1 (y) ≥
A2 (y), for all y ∈ R. Then A−1        −1
                             1 (x) ≤ A2 (x), for all x ∈ R.
                                        n
Proof of the theorem. Assume that yk+1      are solved, we then solve (ykn , zkn ).
                                              1
                       ykn = yk+1
                              n
                                                 − zkn ∆Bk+1
                                  + gkn (ykn , zkn )      n
                                                                                       (109)
                                             n
       n
Since yk+1                n
           has the form: yk+1 = Φk+1 ( 1 , · · · , k+1 ). We set
                               (+)
                              yk+1 : = Φk+1 ( 1 , · · · , 1),
                               (−)
                              yk+1 : = Φk+1 ( 1 , · · · , −1).
 +        −
yk+1 and yk+1 are Fkn –measurable. We set                 k+1 = ±1, in (109):


                              +                     1
                       ykn = yk+1 + gkn (ykn , zkn )  + −zkn n−1/2
                                                    n
                              −                     1
                       ykn = yk+1 + gkn (ykn , zkn ) + +zkn n−1/2
                                                    n
224     Shige Peng
                                                            (+)             (−)
                                                         yk+1 −yk+1
zkn can be uniquely solved by zkn =                           2     . The equation for ykn is
                                                                              (+)      (−)
                                                                1  y    + yk+1
                                     ykn − gkn (ykn , zkn )       = k+1                                            (110)
                                                                n       2
When n > C, the mapping A(y) := y − gkn (y, zkn ) n1 is strictly monotonic
function of y with A(y) → +∞ (resp.−∞) as y → +∞ (resp. −∞). Thus
the solution ykn of (3) exists and is unique. By the Corollary, the comparison
theorem also holds.                                                          
   We consider                         1
                   1
   (a) yt = ξ + t f (s, ys , zs )ds − t zs dBs
                     1                            1
   (b)n ytn = ξ n + t fn (s, ysn , zsn )d B n t − t zsn dBsn

Theorem 6.2. (Briand, Delyon & Memin, 2001) We assume (H1), (H2)
and (H3). Let (y n , z n ) be the solution of (b)n and (y, z) be the solution of (a).
Then, in S 2 × S 2 ,
                         ·                   ·
                   n
                 y ,        zs dBs → y,
                             n   n
                                                 zs dBs , as n → ∞
                                 0                                  0

and in S 2 × S 2
 ·                      ·                                     ·                          ·
   zsn d B n s ,           |zsn |2 d B n s →                zsn d B n s ,                |zsn |2 d B n s as n → ∞.
   0                 0                                      0                          0



7 Appendix
7.1 Martingale Representation Theorem

The existence theorem of BSDE requires the following result: any element
ξ ∈ L2 (FT ) can be represent by
                                                                        T
                                            ξ = E[ξ] +                      φs dBs .
                                                                    0

For notational simpliﬁcation, we assume that B is 1–dimensional, i.e., d = 1.
We need the following lemma.

Lemma 7.1. Let η ∈ L2 (FT ) be given such that
                                                T
                             E[η(1 +                φs dBs )] = 0, ∀φ ∈ L2F (0, T ).
                                            0

Then η = 0, a.s..
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                        225

Proof. For each deterministic µ(·) ∈ L∞ (0, T ; C), we denote by X µ , the solu-
tion of the following SDE

                          dXtµ = µ(t)Xtµ dBt , X0µ = 1.

It suﬃces to prove that if, for each µ(·) ∈ L∞ (0, T ; C) we have E[ηXTµ ] = 0,
then η = 0, a.s.
    For each N ∈ Z, x = (x1 , · · · , xN ) ∈ RN and 0 ≤ t1 < · · · < tN ≤ T , we
            
set µ(t) = i Nj=1 xj 1[0,tj ] (t). It is easy to check that
                               t                t
                   Xtµ = exp{i 0 µ(s)dBs − 12 0 |µ(s)|2 ds}
                           N                    t
                       = ei j=1 xj Btj∧t exp{− 21 0 |µ(s)|2 ds}

Thus the condition E[ηXTµ ] = 0 implies
                                                    N
                        Φµ (x) := E[ηei                    j=1 xj Btj   ] = 0.

Now for an arbitrary g ∈ C0∞ (RN ), let ĝ be its Fourier transform. We then
have

                         E[g(Bt1 , · · · , BtN )η]
                                                                        N
                = E[(2π)− 2
                               N
                                             ĝ(x1 , · · · , xN )ei       j=1 xj Btj   dxη]
                                   RN

                = (2π)− 2
                          N
                                     ĝ(x) Φµ (x)dx = 0.
                                RN

Since the subset

      {g(B(t1 ), · · · , B(tN )); 0 ≤ t1 , · · · , tN ≤ T, g ∈ C0∞ (RN ), N ∈ Z}

is dense in L2 (FT ), it follows that η = 0.
    We now can prove the representation theorem.

Theorem 7.1. ( Representation theorem of an element of L2 (FT ) by Itô’s
integral) For each ξ ∈ L2 (FT ) there exists a unique z ∈ L2F (0, T ) such that
                                                       T
                              ξ = E[ξ] +                   zs dBs , a.s.                      (111)
                                                   0

Proof. Let ξ ∈ L2 (FT ) be given. We deﬁne the following functional
                                         T
                   f (φ) := E[ξ              φs dBs ], φ ∈ L2F (0, T ; Rd).
                                     0
                                                    T
By Schwards inequality |f (φ)| ≤ E[|ξ|2 ]1/2 · E[ 0 |φs |2 ds]1/2 . Thus f is a
bounded linear functional deﬁned on L2F (0, T ). It follows from the well–known
226      Shige Peng

Riesz representation theorem (see for example [Yosida1980] p90) that, there
exists a unique process z ∈ L2F (0, T ), such that
                                                   T
                              f (φ) = E[                φs zs ds], ∀φ ∈ L2F (0, T ),
                                               0

or
                          T                             T
                E[            φs dBs (ξ −                   zs dBs )] = 0, ∀φ ∈ L2F (0, T ).
                      0                            0
Thus we have
                      T                                            T
         E[(1 +           φs dBs )(ξ − E[ξ] −                          zs dBs )] = 0, ∀φ ∈ L2F (0, T ).
                  0                                            0

But by Lemma 7.1, this implies (111).                                                                           


7.2 A Monotonic Limit Theorem of Itô’s Processes

We present a convergence result of a sequence of Itô processes, called “mono-
tonic limit theorem”. In this lecture we use this result to prove nonlinear
supermartingale decomposition theorems. We consider the following sequence
of Itô processes:
                                       t                                   t
                yti = y0i +                gsi ds − Ait +                      zsi dBs , i = 1, 2, · · · .   (112)
                                   0                                   0

for each i, the adapted process g i ∈ L2F (0, T ) are given, we also assume that,
for each i,
                                2
                          Ai ∈ SF (0, T ) is increasing with Ai0 = 0,                                        (113)
and
                                                       T
    (i) (gti ) and (zti ) are bounded in L2F (0, T ): E 0 [|gsi |2 + |zsi |2 ]ds ≤ C;
   (ii) (yti ) increasingly converges to (yt ) with E[ sup0≤t≤T |yt |2 ] < ∞,
                                                                                    (114)
where the constant C is independent of i. It is clear that

                                   (i) E[sup0≤t≤T |yti |2 ] ≤ C;
                                         T                                                                  (115)
                                   (ii) E 0 |yti − yt |2 dt → 0,

     where the constant C is independent of i.

Remark 7.1. It is not hard to check that the limit y has the following form
                                                    t                                    t
                              yt = y0 +                 gs0 ds − At +                        zs dBs ,        (116)
                                                0                                    0
         Nonlinear Expectations, Nonlinear Evaluations and Risk Measures             227

where g 0 and z are respectively the weak limit of {g i }∞                  i ∞
                                                              i=1 and {z }i=1 in
  2
LF (0, T ), (At )t∈[0,T ] is an increasing process. In general, we can not prove
                                        ∞
                                T
the strong convergence of 0 zsi dBs           . Our new observation is: for each p ∈
        i                             p
                                          i=1
[1, 2), z converges strongly in LF (0, T ; Rd). This observation is crucially
important, since we will treat nonlinear cases.
   The limit theorem is as follows.
Theorem 7.2. We assume (113) and (114). Then the limit yt of {y i }∞       i=1 has
a form (116), where g 0 ∈ L2F (0, T ) and z ∈ L2F (0, T ; Rd) are respectively the
weak limit of {g i }∞           i ∞        2               2
                     i=1 and {z }i=1 in LF (0, T ) and LF (0, T ; R ). For each
                                                                     d
                                      i ∞        2
t ∈ [0, T ], At is a weak limit of {At }i=1 in L (FT ). (At )t∈[0,T ] is an RCLL
square–integrable increasing process. Furthermore, for any p ∈ [0, 2), {z i }∞ i=1
strongly converges to z in LpF (0, T, Rd), i.e.,
                                    T
                       lim E            |zsi − zs |p ds = 0, p ∈ [0, 2).          (117)
                      i→∞       0

If moreover (y)t∈[0,T ] is continuous, then we have
                                              T
                             lim E                |zsi − zs |2 ds = 0.            (118)
                            i→∞           0

Remark 7.2. An interesting open problem is: does (118) hold without the ad-
ditional continuous assumption for y?
   In order to prove this theorem, we need the several Lemmas. The following
lemma will be applied to prove that the limit processes y is RCLL.
Lemma 7.2. Let {xi (·)}∞        i=1 be a sequence of (deterministic) RCLL processes
deﬁned on [0, T ] that increasingly converges to x(·) such that, for each t ∈
[0, T ], and i = 1, 2, · · · , xi (t) ≤ xi+1 (t), with x(t) = b(t)−a(t), where b(·) is an
RCLL process and a(·) is an increasing process with a(0) = 0 and a(T ) < ∞.
Then x(·) and a(·) are also RCLL processes.
Proof. Since b(·), a(·) and thus x(·) have left and right limits, thus we only
need to check that x(·) is right continuous. For each t ∈ [0, T ), since a(t+) ≥
a(t), thus
                         x(t+) = b(t) − a(t+) ≤ x(t).                       (119)
   On the other hand, for any δ > 0, there exists a positive integer j = j(δ, t)
such that x(t) ≤ xj (t) + δ. Since xj (·) is RCLL, thus there exists a positive
number 0 = 0 (j, t, δ) such that xj (t) ≤ xj (t+ )+ δ, ∀ ∈ (0, 0 ]. These imply
that, for any ∈ (0, 0 ],
            x(t) ≤ xj (t + ) + 2δ ≤ xi+j (t + ) + 2δ ↑↑ x(t + ) + 2δ.
Particularly, we have x(t) ≤ x(t+) + 2δ and thus x(t) ≤ x(t+). This with
(119) implies the right continuity of x(·).                           
   We need some estimates for the jumps of A. We ﬁrst have
228     Shige Peng

Lemma 7.3. Let A be an increasing RCLL process deﬁned on [0, T ] with A0 =
0 and E(AT )2 < ∞. Then, for any > 0, there exists a ﬁnite number of
stopping times σk , k = 0, 1, 2, · · · N + 1 with σ0 = 0 < σ1 ≤ · · · ≤ σN ≤ T =
σN +1 and with disjoint graphs on (0, T ) such that

                          
                          N             
                                E                   (∆At )2 ≤ .               (120)
                          k=0       t∈(σk ,σk+1 )

Proof. For each ν > 0, we denote
                                            
                        At (ν) := At −            ∆As 1{∆As >ν} .
                                            s≤t

 A· (ν) has jumps of A· smaller than ν. Thus there is a suﬃciently small ν > 0
such that                     
                           E[     (∆As (ν))2 ] ≤ .
                                                2
                                s≤T

Now let τk , k = 1, 2, · · · be the successive times of jumps of A with size bigger
than ν; they are stopping times, and there is N such that
                                                  
                                                2
                              E          (∆As )  ≤ .
                                                        2
                                s∈(τN ,T )

                                                                             +1
We then set σk := τk ∧ T for k ≤ N , and σN +1 = T . It is clear that {σk }N
                                                                           k=0
satisﬁes (120).                                                              
   For applying the formula of the integral by part to the limit process y
(with jumps), the above open intervals (σk , σk+1 ) is not so convenient. Thus
we will cut a suﬃciently small interval (σk , τk ) and only work on the remaining
subintervals (σk , τk ]. This is possible since our ﬁltration is continuous. In fact
we have:
Lemma 7.4. Let 0 < σ ≤ T be a stopping time. Then there exists a sequence
of Ft –stopping times {τ i } with 0 < τ i < σ, a.s. for each i = 1, 2, · · · , such
that τ i ↑ σ.
    For the continuous ﬁltration Ft , this lemma is quite classical. The proof
is omitted.
   The following lemma tells that, for any given RCLL increasing process, the
contribution of the jumps of A is mainly concentrated within a ﬁnite num-
ber of left–open right–closed intervals with “suﬃciently small total length”.
Speciﬁcally, we have
Lemma 7.5. Let A be an increasing RCLL process deﬁned on [0, T ] with A0 =
0 and EA2T < ∞. Then, for any δ, > 0, there exists a ﬁnite number of pairs
of stopping times {σk , τk }, k = 0, 1, 2, · · · N with 0 < σk ≤ τk ≤ T , such that
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                    229

                  (i)          (σj , τj ] ∩ (σk , τk ] = ∅ for each j = k;
                                         N
                 (ii)                 E k=0 (τk − σk ) ≥ T −
                                  N                           2
                 (iii)                k=0 E      σk <t≤τk (∆At ) ≤ δ

Proof. We ﬁrst apply Lemma 7.3 to construct a sequence of non-decreasing
                      +1
stopping times {σk }N
                    k=0 with σ0 = 0 and σN +1 = T such that, σk < σk+1
whenever σk < T and that

                                 
                                 N                     
                                        E                          (∆At )2 ≤ δ.
                                 k=0               t∈(σk ,σk+1 )

Then for each 0 ≤ k ≤ N , we apply Lemma 7.4 to construct a stopping time
0 < τk < σk+1 , such that

                                               
                                               N
                                        E             (σk+1 − τk ) ≤ .
                                               k=0

Finally we set

                     τ0 = τ0 , τ1 = σ1 ∨ τ1 ,                                       
                                                                   · · · , τN = σN ∨ τN .
                                     
It is clear that τk ∈ [σk , σk+1 )∩[τk+1  , σk+1 ]. We have also τk < σk+1 whenever
σk < T . Thus (σk , τk ] ∈ (σk , σk+1 ). It follows that

                                               
                                               N
                                        E             (σk+1 − τk ) ≤ ,
                                               k=0

or
                                           
                                           N
                                       E             (τk − σk ) ≥ T − ,
                                           k=0

and
              
              N                                          
                                                          N                   
                     E                 (∆At )2 ≤                E                   (∆At )2 ≤ δ.
              k=0        t∈(σk ,τk ]                      k=0       t∈(σk ,σk+1 )

Thus the above conditions (i)-(iii) are satisﬁed.                                                           
     We now give the
Proof of Theorem 7.2. Since (g i ) (resp. (z i )) is weakly compact in L2F (0, T )
(resp. L2F (0, T ; Rd)), there is a subsequence, still denoted by (g i ) (resp. (z i ))
which converges weakly to (gt0 ) (resp. (zt )).
    Thus, for each stopping time τ ≤ T , the following weak convergence holds
in L2 (Fτ ).
                     τ                         τ                          τ                  τ
                         zsi dBs !                 zs dBs ,                   gsi ds !           gs0 ds.
                 0                         0                          0                  0
230           Shige Peng

Since                                                              τ                         τ
                               Aiτ = −yτi + y0i +                      gsi ds +                  zsi dBs
                                                               0                         0
thus we also have the weak convergence
                                                                           τ                         τ
                           Aiτ ! Aτ := −yτ + y0 +                              gs0 ds +                  zs dBs .
                                                                       0                         0

Obviously, E[A2T ] < ∞. For any two stopping times σ ≤ τ ≤ T , we have
Aσ ≤ Aτ since Aiσ ≤ Aiτ . From this it follows that A is an increasing process.
Moreover, from Lemma 7.2, both A and y are RCLL. Thus y has a form of
(116). Since y is given, it is clear that z is uniquely determined. Thus not only
the subsequence of {z i }∞i=1 but also the sequence itself converges weakly to z.
Our key point is to show that {z i }∞   i=1 converges to z in the strong sense of
(117). In order to prove this we use Itô’s formula applied to (yti − yt )2 on a
given subinterval (σ, τ ]. Here 0 ≤ σ ≤ τ ≤ T are two stopping times. Observe
that ∆yt ≡ ∆At and the fact that y i and then Ai are continuous. We have
                                                     τ
                         E|yσi − yσ |2 + E                |zsi − zs |2 ds
                                                     σ
                                                                                        τ
               = E|yτi − yτ |2 − E                       (∆At )2 − 2E                        (ysi − ys )(gsi − gs0 )ds
                                             t∈(σ,τ ]                                σ


                         +2E              (ysi − ys )dAis − 2E                           (ysi − ys− )dAs
                                 (σ,τ ]                                         (σ,τ ]
                                                                                        τ
               = E|yτi − yτ |2 + E                       (∆At )2 − 2E                        (ysi − ys )(gsi − gs0 )ds
                                             t∈(σ,τ ]                                σ


                         +2E              (ysi − ys )dAis − 2E                           (ysi − ys− )dAs
                                 (σ,τ ]                                         (σ,τ ]
          
Since       (σ,τ ]
                     (ysi − ys )dAis ≤ 0, we then have

        τ                                                          
 E            |zsi − zs |2 ds ≤ E|yτi − yτ |2 + E                              (∆At )2                                           (121)
      σ                                                       t∈(σ,τ ]
                                                 τ
                                     +2E             |ysi − ys ||gsi − gs0 |ds + 2E                                   |ysi − ys |dAs .
                                                σ                                                            (σ,τ ]

The third term on the right side tends to zero since
                                                             $                                            % 12
                     T                                                      T
            E            |ysi − ys ||gsi − gs0 |ds ≤ C E                        |ysi − ys |2 ds                  → 0.            (122)
                 0                                                      0


For the last term, we have, P –almost surely,
          Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                                                   231

                              |ys1 − ys | ≥ |ysi − ys | → 0,                     ∀s ∈ [0, T ].

Since
                        T
                                                                                    1                   1
               E            |ys1 − ys |dAs ≤ (E[sup(|ys1 − ys |2 ]) 2 (E(AT )2 ) 2 < ∞.
                    0                                          s

It then follows from Lebesgue’s dominated convergence theorem that

                                            E                 |ysi − ys |dAs → 0.                                        (123)
                                                  (0,T ]

By convergence of (122) and (123), it is clear from the estimate (121) that,
once A is continuous (thus ∆At ≡ 0) on [0, T ], then z i tends to z strongly in
L2F (0, T ; Rd). Thus the second assertion of the theorem, i.e., (118) follows.
    But for the general case, the situation becomes complicated. Thanks to
Lemma 7.5, for any positive δ and , there exist a ﬁnite number of disjoint
intervals (σk , τk ], k = 0, 1, · · · , N , such that σk ≤ τk ≤ T are all stopping
times satisfying
                                N
                        (i) E k=0 [τk − σk ](ω) ≥ T − 2 ;
                            N                                              (124)
                        (ii) k=0 σk <t≤τk E(∆At )2 ≤ δ     3.

Now, for each σ = σk and τ = τk , we apply estimate (121) and then take the
sum. It follows that

N          τk                               
                                            N                              
                                                                           N               
      E         |zsi − zs |2 ds ≤                 E|yτi k − yτk |2 +              E                   (∆At )2
k=0       σk                                k=0                            k=0          t∈(σk ,τk ]
                                                          T
                                            +2E               |ysi − ys ||gsi − gs0 |ds + 2E                     |ysi − ys |dAs .
                                                      0                                                 (0,T ]

By using the convergence results (122) and (123) and taking in consideration
of (124)-(ii), it follows that

                            
                            N          τk                            
                                                                     N                                          δ
                   lim            E         |zsi − zs |2 ds ≤              E                (∆At )2 ≤
                i→∞                   σk                                                                         3
                            k=0                                      k=0       t∈(σk ,τk ]

Thus there exists an integer lδ > 0 such that, whenever i ≥ l δ , we have

                                            
                                            N             τk
                                                                                      δ
                                                  E            |zsi − zs |2 ds ≤
                                                      σk                              2
                                            k=0

Thus, in the product space ([0, T ] × Ω, B([0, T ]) × F, m × P ) (here m stands
for the Lebesgue measure on [0, T ]), we have
                                                                    2
                     -
                     N
                                                                2
     m × P (s, ω) ∈     (σk (ω), τk (ω)] × Ω; |zs (ω) − zs (ω)| ≥ δ ≤
                                                   i
                                                                          2
                                      k=0
232     Shige Peng

This with (124)-(i) implies
                                                                    
  m × P (s, ω) ∈ [0, T ] × Ω;                 |zsi (ω) − zs (ω)|2 ≥ δ ≤ ,                       ∀ i ≥ lδ .

From this it follows that, for any δ > 0,
                                                                                   
        lim m × P (s, ω) ∈ [0, T ] × Ω;                      |zsi (ω) − zs (ω)|2 ≥ δ = 0.
         i→∞

Thus, on [0, T ] × Ω, the sequence {z i }∞     i=1 converges in measure to z. Since
{z i }∞
      i=1 is also bounded  in L 2
                                F (0, T ; R d
                                              ), then for each p ∈ [1, 2), it converges
strongly in LpF (0, T ; Rd).                                                        


7.3 Optional Stopping Theorem for E g –Supermartingale

In this subsection the function g satisﬁes (i), (ii) of (34). We will discuss Eσ,τ
                                                                               g
                                                                                   [·]
for stopping times σ, τ ∈ ST . A BSDE with a given terminal condition X ∈ Fτ
at a given terminal time τ ∈ ST is formulated as
                                    τ                             τ
               Ys = X +                 g(r, Yr , Zr )dr −            Zr dBr , s ∈ [0, τ ],             (125)
                                s                             s

or equivalently, on s ∈ [0, T ],
                         T                                                τ
        Ys = X +             1[0,τ ] (r)g(r, Yr , Zr )dr −                    1[0,τ ] (r)Zr dBr .       (126)
                     s                                                s

We deﬁne
                                             Eσ,τ
                                              g
                                                  [X] := Yσ .                                           (127)
It is clear that, when σ = s and τ = t for deterministic time parameters s ≤ t,
                  g
then Eσ,τ
        g
           [·] = Es,t [·]. We have

Proposition 7.1. The system of operators

                  Eσ,τ
                   g
                       [·] : L2 (Fτ ) → L2 (Fσ ), σ ≤ τ, σ, τ ∈ ST ,

is an Ft –consistent nonlinear evaluation, i.e., it satisﬁes (A1)–(A5) in the
following sense: for each X, X  ∈ L2 (Fτ ),
(a1) Eσ,τ
       g
          [X] ≥ Eσ,τ
                   g
                      [X  ], a.s., if X ≥ X  , a.s.
(a2) Eτ,τ [X] = X;
       g

(a3) Eρ,σ
       g    g
          [Eσ,τ [X]] = Eρ,τ
                         g
                              [X], ∀0 ≤ ρ ≤ σ ≤ τ ;
(a4) 1A Eσ,τ [X] = 1A Eσ,τ
          g              g
                              [1A X], ∀A ∈ Fτ ;
(a5) for each 0 ≤ σ ≤ τ ≤ T ,

             Eσ,τ
              g
                  [X] − Eσ,τ
                         g
                             [X  ] ≤ Eσ,τ
                                       gµ
                                           [X − X  ], ∀X, X  ∈ L2 (Fτ ).                              (128)
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                               233

   The proof is similar as in the case where ρ, σ and τ are deterministic. We
omit it.
   Another easy property is that E·∧τ,τ [X] has continuous paths:
                                   g                  2
                                 (Et∧τ,τ [X])0≤t≤T ∈ SF (0, T ).                                     (129)

    By (32) and (33) with 1[σ,τ ] (s)g(s, y, z) in the place of g, we also have the
following estimates
                                                                        τ
                   g
               E[|Eσ,τ [X]|2 ] ≤ cE[|X|2 ] + cE                             |g(s, 0, 0)|2 )ds,       (130)
                                                                    σ

and
                                 g
                             E[|Eσ,τ [X − X  ]|2 ] ≤ cE[|X − X  |2 ].                              (131)
where the constant c depends only on T and the Lipschitz constant C of the
function g w.r.t. (y, z). As a consequence of
   We also have the following estimate:

Lemma 7.6. Let σ, τ ∈ ST , σ ≤ τ and X ∈ L2 (Fτ ). If X ∈ L2 (Fσ ), then we
have                                    τ
                        g
                    E[|Eσ,τ [X] − X|2 ] ≤ cE[                       |g(s, X, 0)|2 ds].
                                                            σ
where the constant c depends only on T and the Lipschitz constant C of g.

Proof. Observe that Eσ,τ
                     g
                         [X] = yσ , where (yt )t∈[0,T ] is the solution of the
BSDE
                                       T                                              T
               yt = X +                    1[σ,τ ](s)g(s, ys , zs )ds −                   zs dBs .
                                   t                                              t

We set ȳt ≡ yt − X, z̄t ≡ zt , on [σ, τ ]. This pair of adapted process is the
solution of the BSDE
                         T                                              T
            ȳt =            1[σ,τ ](s)ḡ(s, ȳs , z̄s )ds −                z̄s dBs , t ∈ [σ, τ ].
                     t                                              t

With ḡ(t, y, z) := g(t, y + X, z), we have Eσ,τ
                                             g
                                                 [X] − X = Eσ,τ
                                                            ḡ
                                                                [0]. From (130),
                        g
                    E[|Eσ,τ [X] − X|2 ] = E[|Eσ,τ
                                              ḡ
                                                  [0]|2 ]
                                                                τ
                                                  ≤ cE[             |ḡ(s, 0, 0)|2 ds]
                                                            σ
                                                             τ
                                                  = cE[             |g(s, X, 0)|2 ds].
                                                            σ

                                                                                                        

   We will prove the following optional stopping theorem:
234      Shige Peng

Theorem 7.3. We assume that the function g satisﬁes (i), (ii) of (34). Let
       2
Y ∈ DF   (0, T ) be an E–supermartingale (resp. E–submartingale). Then for
each σ, τ ∈ ST such that σ ≤ τ , we have
                              Eσ,τ
                               g
                                   [Yτ ] ≤ Yσ (resp. ≥ Yσ ), a.s. .                                           (132)
      To prove the above theorem, we need several lemmas.
Lemma 7.7. Let τ ∈ ST0 be valued in {t0 , · · · , tn } with 0 = t0 ≤ t1 < · · · <
tn ≤ tn+1 = T , and let
                  ti ≤ s < t ≤ ti+1 , for some i ∈ {1, 2, · · · , n}.                                         (133)
Then, for each X ∈ Ft∧τ ,
                    g
                (i) Et∧τ,t∧τ [X] = X;
                     g                                      g                                                 (134)
               (ii) Es∧τ,t∧τ [X] = 1{t∧τ ≤s} X + 1{t∧τ =t} Es,t [X].
Proof. (i) is easy. To prove (ii), we ﬁrst observe that
                                   {t ∧ τ ≤ s}C = {t ∧ τ = t}                                                 (135)
and {t ∧ τ ≤ s} = {t ∧ τ ≤ ti }. Thus 1{t∧τ ≤s} X ∈ Fti . We also have
                                        g
1{t∧τ =t} X ∈ Ft . We now solve Ys∧τ = Es∧τ,t∧τ [X] by, as in (126),
                          T                                                        T
      Ys∧τ = X +              1[0,t∧τ ](r)g(r, Yr , Zr )dr −                           1[0,t∧τ ](r)Zr dBr .   (136)
                      s                                                        s

Since 1[0,t∧τ ] = 1{t∧τ ≤ti } 1[0,ti ] + 1{t∧τ =t}1[0,t] . By respectively multiplying
1{t∧τ ≤ti } and 1{t∧τ =t} on both sides of (136), we have, on s ∈ [ti , t),
                                  Ys∧τ 1{t∧τ ≤ti } = X1{t∧τ ≤ti} ,                                            (137)
and
                                                                   T
         Ys∧τ 1{t∧τ =t} = 1{t∧τ =t} X +                                1[0,t] (r)1{t∧τ =t} g(r, Yr , Zr )dr
                                                            s
                                              T
                                  −               1[0,t] 1{t∧τ =t} (r)Zr dBr
                                          s
                                                               t
                              = 1{t∧τ =t} X +                      g(r, 1{t∧τ =t} Yr , 1{t∧τ =t}Zr )dr
                                                           s
                                      t
                              −           1[0,ti+1 ] Zr dBr .
                                  s

We observe that, the last relation implies that, on [ti , t],
                                       g                              g
           Ys∧τ 1{t∧τ =t} = 1{t∧τ =t} Es,t [1{t∧τ =t} X] = 1{t∧τ =t} Es,t [X].
This with (137) and (135), we then have (ii).                                                                    
      We now treat a simple situation of the above optional stopping theorem.
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures                    235

                          2
Lemma 7.8. Let Y ∈ DF        (0, T ) be an E g - martingale (respectively E g - su-
permartingale, E - submartingale). Then for each σ, τ ∈ ST0 such that σ ≤ τ ,
                g

we have
                  Eσ,τ
                    g
                       [Yτ ] = Yσ , (resp. ≤ Yσ , ≥ Yσ ) a.s.                 (138)

Proof. We only prove the case for E g –supermartingale. It is clear that, once
we have
                       g
                      Et∧τ,τ [Yτ ] ≤ Yt∧τ , ∀t ∈ [0, T ],                (139)
then, (138) hold for each σ ∈ ST0 valued in {s1 , · · · , sm } since

                         
                         m                                  
                                                            m
          Eσ,τ
           g
               [Yτ ] =         1{σ=si } Esgi ∧τ,τ [Yτ ] ≤         1{σ=si } Ysi ∧τ = Yσ .
                         i=1                                i=1

    We will prove (139) by deduction. Let τ ∈ ST0 be valued in {t0 , · · · , tn }
with 0 = t0 ≤ t1 < · · · < tn ≤ tn+1 = T . Firstly, when t ≥ tn , (139) holds
since Et∧τ,τ [Yτ ] = Eτ,τ [Yτ ] = Yτ . Now suppose that for a ﬁxed i ∈ {1, · · · , n},
(139) holds for t ≥ ti . We shall prove that it also holds for t ≥ ti−1 . We need
to check the case t ∈ [ti−1 , ti ).
    Since 1{ti ∧τ =ti } is Ft –measurable, by (a4) we have
                             g                               g
              1{ti ∧τ =ti } Et,ti
                                  [Yti ∧τ ] = 1{ti ∧τ =ti } Et,ti
                                                                  [1{ti ∧τ =ti } Yti ]
                                                            g
                                           = 1{ti ∧τ =ti } Et,t i
                                                                  [Yti ]
                                           ≤ 1{ti ∧τ =ti } Yt .

It follows from (134)–(ii)
             g                                                         g
            Et∧τ,ti ∧τ
                       [Yti ∧τ ] = 1{ti ∧τ ≤t} Yti ∧τ + 1{ti ∧τ =ti } Et,ti
                                                                            [Yti ∧τ ]
                                  ≤ 1{ti ∧τ ≤t} Yti ∧τ + 1{ti ∧τ =ti } Yt
                                  = Yt∧τ .

The last step is from {ti ∧ τ ≤ t} + {ti ∧ τ = ti } = Ω and then t ∧ τ =
ti ∧ τ 1{ti ∧τ ≤t} + t1{ti ∧τ =ti } . From this result we derive
                           g              g
                          Et∧τ,τ [Yτ ] = Et∧τ,ti ∧τ
                                                    [Etgi ∧τ,τ [Yτ ]]
                                            g
                                         ≤ Et∧τ,ti ∧τ
                                                      [Yti ∧τ ]
                                         ≤ Yt∧τ .

Thus (139) holds for t ≥ ti−1 . It follows by deduction that (139) holds for
t ∈ [0, T ]. The proof is complete.                                       
   We now give
Proof of Theorem 7.3. We only prove the supermartingale part. For each
n = 1, 2, · · · , we set
236      Shige Peng

                            2
                             n
                               −1
                σn : = T            2−n k1{2−n (k−1)≤σ<2−n k} + T 1{σ=T } ,
                            k=1
                            2
                             n
                               −1
                τn : = T            2−n k1{2−n (k−1)≤τ <2−n k} + T 1{τ =T }.
                            k=1

It is clear that σn  σ, τn  τ and σn ≤ τn . By the above lemma, for each
m ≥ n we have
                           Eσgm ,τn [Yτn ] ≤ Yσm , a.s.
                                   2
It follows from (129) and Y ∈ DF     (0, T ) that, for each ﬁxed n, Eσgm ,τn [Yτn ] →
                                2
Eσ,τ
  g
     n
       [Yτn ] and Yσm → Yσ in L   (F T ) as m → ∞. We then have

                                     Eσ,τ
                                      g
                                          n
                                            [Yτn ] ≤ Yσ , a.s.                              (140)

      Moreover, we have

 |Eσ,τ
   g
       n
         [Yτn ] − Eσ,τ
                   g
                       [Yτ ]| ≤ |Eσ,τ
                                  g
                                      n
                                        [Yτn ] − Eσ,τ
                                                  g
                                                      n
                                                        [Yτ ]| + |Eσ,τ
                                                                   g
                                                                       n
                                                                         [Yτ ] − Eσ,τ
                                                                                  g
                                                                                      [Yτ ]|. (141)

Since Yτn → Yτ , in L2 (FT ), the ﬁrst term on the right tends to zero in L2 (FT )
because of (131). For the second one,we still use (131):
                g
            E[|Eσ,τ n
                      [Yτ ] − Eσ,τ
                               g
                                   [Yτ ]|2 ] = E[|Eσ,τ
                                                   g     g
                                                       [Eτ,τ n
                                                               [Yτ ]] − Eσ,τ
                                                                         g
                                                                             [Yτ ]|2 ]
                                             ≤ cE[|Eτ,τn [Yτ ] − Yτ |].
                                                     g

                                                 τ
But by Lemma 7.6 this term is bounded by c2 E[ τ n |g(s, Yτ , 0)|2 ds]. It follows
that the term on the left side of (140) tends to Eσ,τ
                                                  g
                                                      [Yτ ] in L2 (FT ) as n → ∞.
The proof is complete.                                                          
      We will also prove the following optional stopping theorem:

Theorem 7.4. We assume that an F -expectation E[·] satisﬁes (78) and (81)
                               2
for some µ > 0. Let Y ∈ DF       (0, T ) be an E–supermartingale (resp. E–
submartingale). Then for each σ, τ ∈ ST we have

                       E[Yτ |Fσ ] ≤ Yτ ∧σ , (resp. ≥ Yt∧τ ), a.s. .                         (142)

Proof. We only consider the supermartingale case. We ﬁrst prove that

                      E[Yτ |Ft ] ≤ Yt∧τ (resp. ≥ Yt∧τ ), a.s. .             (143)
                                 n
Let τ be a ﬁnite valued: τ = i=1 1{τ =ti } ti , for some 0 ≤ t1 ≤ · · · ≤ tn ≤ T .
If tn ≤ t, then it is clear that

                                    E[Yτ |Ft ] = Yτ = Yt∧τ .

If t ∈ [tn−1 , tn ], then both {τ ≤ tn−1 } and {τ = tn } are Ft –measurable. By
(11) we have
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures             237



             E[Yτ |Ft ] = E[Ytn 1{τ =tn } + Yτ ∧tn−1 1{τ ≤tn−1 } |Ft ]
                       = 1{τ =tn } E[Ytn |Ft ] + 1{τ ≤tn−1} E[Yτ ∧tn−1 |Ft ]
                       ≤ 1{τ =tn } Yt + 1{τ ≤tn−1} Yτ ∧tn−1 = Yt∧τ .

If t ∈ [tn−2 , tn−1 ], then we have E[Yτ |Ft ] = E[E[Yτ |Ftn−1 ]|Ft ] ≤ E[Ytn−1 ∧τ |Ft ]
≤ Yt∧τ . We thus can prove an arbitrary case t ∈ [ti , ti+1 ] by reduction. Thus
(142) holds for all ﬁnite valued stopping times.
     Now for τ ∈ ST , we take τn as in the proof of Theorem 7.3. Since Y ∈
   2
DF   (0, T ), thus Yτn → Yτ in L2 (FT ). We have

         E −µ [Yτn − Yτ |Ft ] ≤ E[Yτn |Ft ] − E[Yτ |Ft ] ≤ E µ [Yτn − Yτ |Ft ].

By Lemma 3.3, the right side tends to zero in L2 (FT ). So does the right side
since
                 E −µ [Yτn − Yτ |Ft ] = −E µ [Yτ − Yτn |Ft ].
It follows that E[Yτn |Ft ] → E[Yτ |Ft ] in L2 (FT ). We then can pass two sides
of the inequality
                               Yτn ∧t ≥ E[Yτn |Ft ]
to the limit to get (143).
                                   2                                2
Since both (E[Yτ |Ft ])t∈[0,T ] ∈ SF (0, T ) and (Yt∧τ )t∈[0,T ] ∈ DF (0, T ) we can
easily derive from (143) that for each σ, τ ∈ ST , we have (142).                  

Notes
The expectation E[·] on the probability space (Ω, F , P ) with Ft ⊂ F, t ≥ 0 is
clearly Ft –consistent. Another example of linear Ft –consistent expectation is
EQ [·], the expectation under Girsanov transformation dQ/dP . But it seems
that the study of Ft –consistent nonlinear expectations is still a very new
subject. In 1997, [Peng1997b] (see also [Peng1997a]) introduced the notion of
g–expectations which is nonlinear and Ft –consistent. In the same year, the no-
tion of g–evaluation was introduced in [Peng1997a] under the name “stochas-
tic backward semigroup”. See also [30]. The term “Ft –consistent nonlinear
expectation” was named in [CHMP2002].
    Linear BSDE was ﬁrst introduced by Bismut in [Bis1973], [Bis1978]. Ben-
soussan developed this approach in [Ben1981] and [Ben1982]. The existence
and uniqueness theorem of a nonlinear BSDE, i.e., Theorem 3.1 was obtained
in Pardoux and Peng [PP1990]. The present version of the proof was based on
El Karoui, Peng and Quenez [EPQ1997]. [EPQ1997] is also a good survey of
BSDE and related ﬁelds. Comparison Theorem of BSDE i.e., Theorem 3.3 was
obtained in [Peng1992] for the case g is C 1 in (y, z). The present case where
g is Lipschitz in (y, z) was obtained in [EPQ1997]. [EPQ1997] also observed
and investigated a natural relation between BSDE theory and the problem of
pricing ﬁnancial derivatives. We also refer to Yong and Zhou [YZ1999] for a
238     Shige Peng

systematic presentation of BSDE theory. Due to the limitation of the size of
this lecture, we can not present many important subjects of BSDE theory.
     In 1998, Chen [Chen98] has proved the following interesting property: if
Eg1 [X] = Eg2 [X  ], for all X ∈ L2 (FT ), then the two generators g 1 and g 2 also
coincide: g 1 (s, y, z) ≡ g 2 (s, y, z). This result was generalized to an “inverse
comparison theorem” by [BCHMP2000] and then [CHMP2001]: if Eg1 [X] ≥
Eg2 [X  ], for all X ∈ L2 (FT ), then g 1 ≥ g 2 .
     The well - known Doob - Meyer decomposition theorem can be found
in most standard text books of stochastic analysis e.g., [DM1978-1982],
[HWY1992], [IW1981], [KShr1998] and [RW2000]. Decomposition theorem of
g - supermartingale of Doob - Meyer’s type, i.e., Theorem 3.9 was obtained
by Peng [Peng1999]. A new method, i.e., penalization method, was applied
to prove this nonlinear decomposition theorem. This method was ﬁrstly in-
troduced in BSDE theory by [EKPPQ1997]. The monotonic limit theorem
for Itô’s processes (Theorem 7.2) as well as for BSDEs (Theorem 3.8) are
also obtained in [Peng1999]. Using this penalization method, Chen and Peng
[CP1998] to the L1 case with the usual ﬁltration, which generalizes the Meyer’s
result to a nonlinear situation. These penalization method and limit theorem
were then applied to prove the nonlinear supermartingale decomposition theo-
rem for an abstract E–expectation, i.e., Theorem 4.3. Theorem 4.3 was proved
in [CHMP2002]. This type of decomposition theorem for a more general situ-
ation, i.e., the case for Ft –evaluation, was recently obtained in [Peng2003b].
     The representation theorem of an Ft –expectation by a g - expectation,
i.e., Theorem 4.4 was obtained in [CHMP2002]. The more general case, i.e.,
Theorem 4.5 was obtained in [Peng2003b].


References
[ADEH1999] Artzner, P., Delbaen, F., Eber, J.M. and Heath, D. Coherent measures
           of risk, Math. Finance, 9, 203–228, 1999.
[Bis1973]  Bismut, J.M. Conjugate Convex Functions in Optimal Stochastic Con-
           trol, J.Math. Anal. Apl. 44, pp.384-404, 1973.
[Bis1978]  Bismut, J.M. Contrôle des systemes linéaires quadratiques : applica-
           tions de l’integrale stochastique, Sémin. Proba. XII., Lect. Notes in
           Mathematics, 649, pp.180-264, 1978, Springer.
[Ben1981]  Bensoussan, A. Lecture on stochastic control, Lecture Notes in Math-
           ematics, Vol.972, Springer–Verlag, 1981.
[Ben1982]  Bensoussan, A., Stochastic Control by Functional Analysis Methods,
           North–Holland, 1982.
[BCHMP2000] P. Briand, F. Coquet, Y. Hu, J. Mémin and S. Peng, A converse com-
           parison theorem for BSDEs and related properties of g-expectations,
           Electron. Comm. Probab, 5 (2000).
[Chen98]   Z. Chen, A property of backward stochastic diﬀerential equations, C.R.
           Acad. Sci. Paris Sér. I Math. 326 (1998), no 4, 483–488.
[CE2002]   Z. Chen and L. Epstein (2002), Ambiguity, Risk and Asset Returns in
           Continuous Time, Econometrica, 70(4), 1403–1443.
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures          239

[CHMP2001] P. Briand, F. Coquet, Y. Hu, J. Mémin and S. Peng, (2001) A gen-
                eral converse comparison theorem for Backward stochastic diﬀerential
                equations, C.R.Acad. Sci. Paris, t. 333, Serie I, 577–581.
[CHMP2002] F. Coquet, Y. Hu J. Memin and S. Peng (2002), Filtration–consistent
                nonlinear expectations and related g–expectations, Probab. Theory Re-
                lat. Fields, 123, 1–27.
[CP1998]        Z. Chen and S. Peng (1998) A Nonlinear Doob-Meyer type Decompo-
                sition and its Application. SUT Journal of Mathematics (Japan), 34,
                No.2, 197–208, 1998.
[CP200]         Z. Chen and S. Peng (2000), A general downcrossing inequality for
                g-martingales, Statist. Probab. Lett. 46, no. 2, 169–175.
[CQZ2000]       J. Cvitanić, M.C. Quenez and F. Zapatero, (2000) Incomplete infor-
                mation with recursive preference, preprint.
[DF1992]        D. Duﬃe and L. Epstein (1992), Stochastic diﬀerential utility, Econo-
                metrica 60, no 2, 353–394.
[Duﬃe]          D. Duﬃe (2001) Dynamic Asset Pricing, Princeton University Press.
[EKPPQ1997] N. El Karoui, C. Kapoudjian, E. Pardoux, S. Peng and M.-C. Quenez
                (1997), Reﬂected Solutions of Backward SDE and Related Obstacle
                Problems for PDEs, Ann. Probab. 25, no 2, 702–737.
[EPQ1997] N. El Karoui, N., S. Peng and M.-C. Quenez, Backward stochastic
                diﬀerential equation in ﬁnance, Math. Finance 7 (1997), no 1, 1–71.
[EQ1995]        El Karoui, N., and M.C.Quenez (1995), Dynamic Programming and
                Pricing of Contingent Claims in Incomplete Marke, SIAM J.of Control
                and Optimization, 33, n.1.
[FS1992]        Fleming, W.H. and Soner H.M., Controlled Markov Processes and Vis-
                cosity Solutions, Springer–Verleg, New York, 1992.
[FoSc2002]      Föllmer H. and Alexander Schied, Convex measures of risk and trading
                constraints, preprint, version 2002.
[Frittelli2000] Frittelli, M. (2000) Representing sublinear risk measures and Pricing
                rules, Working paper no. 10, Universita di Milano Bicocca, Italy.
[FR-G2002] Frittelli, M. and Rosazza Gianin E. (2002) Putting oders in risk mea-
                sures, J. Banking and Finance, Vol. 26, no.26, 1473–1486.
[HWY1992] He, S.W., Wang, J.G. and Yan J.–A. (1992) Semimartingale Theory
                and Stochastic Calculus, CRC Press, Beijing.
[IW1981]        Ikeda, N. and Watanabe, S., Stochastic Diﬀerential Equations and
                Diﬀusion Processes, North–Holland, Amsterdam, 1981.
[KShr1998] Karatzas, I. and Shreve, S. E., Brownian Motion and Stochastic Cal-
                culus, Springer–Verleg, New York, 1988.
[DM1978-1982] Dellacherie, C. and Meyer, P.A., Probabilities and Potentiel A and
                B, Chap. North–Holland, 1978 and 1982.
[PP1990]        E. Pardoux and S. Peng (1990), Adapted solution of a backward
                stochastic diﬀerential equation, Systems and Control Letters 14, no
                1, 55-61.
[Peng1992] S. Peng (1992), A generalized dynamic programming principle and
                Hamilton-Jacobi-Bellman equation, Stochastic stoch. reports 38, no
                2, 119–134.
[Peng1997a] S. Peng, BSDE and Stochastic Optimizations, in Topics in Stochastic
                Analysis, J. Yan, S. Peng, S. Fang and L.M. Wu, Ch.2, (Chinese
                vers.), Science Publication 1997.
240    Shige Peng

[Peng1997b] S. Peng (1997), BSDE and related g-expectation, in Pitman Research
             Notes in Mathematics Series, no.364, “Backward Stochastic Diﬀeren-
             tial Equation”, Ed. by N. El Karoui & L. Mazliak,, 141–159.
[Peng1999] S.Peng (1999), Monotonic limit theorem of BSDE and nonlinear de-
             composition theorem of Doob-Meyer’s type, Prob. Theory Rel. Fields
             113, no 4, 473-499.
[Peng2002] S. Peng (2002), Nonlinear expectations and nonlinear Markov chains,
             in The proceedings of the 3rd Colloquium on ”Backward Stochastic
             Diﬀerential Equations and Applications”, Weihai, 2002.
[Peng2003a] S.Peng, (2003) The mechanism of evaluating risky values and nonlin-
             ear expectations, preprings.
[Peng2003b] S.Peng, (2003), Dynamical consistent nonlinear evaluations and ex-
             pectations, preprint.
[Peng2003c] Peng, S. (2003) Filtration consistent nonlinear expectations and eval-
             uations of contingent Claims, to appear in Acta Math. Appl. Sinica.
[PX2003]     Peng, S. and Xu, M. (2003) Numerical calculations to solve BSDE,
             preprint 2003.
[RW2000]     Rogers, L.C.G. & Williams, D., Diﬀusions, Markov processes and mar-
             tingales, Cambridge University Press, 2000.
[Roazza2003] Rosazza, E. G., (2003) Some examples of risk measures via g–
             expectations, preprint.
[Yan1985]    Yan J.–A. (1985) On the commutability of essential inﬁmum and con-
             ditional expectation operators, Chinese Science Bulletin, 30(8), 1013–
             1018.
[YZ1999]     Yong, J. and Zhou, X. Stochastic Controls: Hamiltonian Systems and
             HJB Equations, Springer, 1999.
[Yosida1980] K. Yosida (1980), Functional Analysis, Springer–Verlag,, 6th edition


References on BSDE and Nonlinear Expectations
  1. Fabio Antonelli, Backward-Forward stochastic diﬀerential equations, Ann.
     Appl. Prob. 1993, Vol.3, No.3 777–793
  2. Fabio Antonelli, Stability of backward stochastic diﬀerential equations STOCH
     PROC APPL 62 (1): 103-114 MAR 1996.
  3. Fabio Antonelli, Emilio Barucci, Mancino, Maria Elvira Asset pricing with a
     forward–backward stochastic diﬀerential utility. Econ. Lett. 72, No.2, 151-157
     (2001).
  4. Fabio Antonelli, E. Barucci, ME Mancino, A comparison result for FBSDE
     with applications to decisions theory, Math. Method Oper. Res. 54 (3): 407-
     423 FEB 2002
  5. Fabio Antonelli, Kohatsu-Higa A Filtration stability of backward SDE’s
     STOCH ANAL APPL 18 (1): 11-37 JAN 2000
  6. Fabio Antonelli, Jin Ma, Weaksolutions of forward-backward SDE’s Stoch.
     Anal. Appl. 21 (3): 493-514 MAY 2003
  7. Khaled Bahlali, Backward-Forward stochastic diﬀerential equations with lo-
     cally Lipschitz coeﬃcient, C.R.A.S. Paris, t.333, I, 481–486, 2001.
  8. Khaled Bahlail, Mezerdi Brahim, M.Hassani, Youssef Ouknine, Some generic
     properties in backward stochastic diﬀerential equations with continuous coef-
     ﬁcient. Monte Carlo Methods Appl. 7, No.1-2, 15-19 (2001).
       Nonlinear Expectations, Nonlinear Evaluations and Risk Measures           241

 9. Khaled Bahlail, E.H.Essaky, M.Hassani, E.Pardoux, Existence, uniqueness and
    stability of backward stochastic diﬀerential equations with locally monotone
    coeﬃcient. (English. Abridged French version) C. R., Math., Acad. Sci. Paris
    335, No.9, 757-762 (2002).
10. Khaled Bahlail, El Essaky, Youssef Ouknine, Reﬂected backward stochastic dif-
    ferential equation with jumps and locally Lipschitz coeﬃcient. Random Oper.
    Stoch. Equ. 10, No.4, 335-350 (2002).
11. Vlad Bally, Construction of asymptotically optimal controls for control and
    game problems, Proba. Theory Relat. Fields 111, 453–467 (1996)
12. Vlad Bally, A. Matoussi, Weak solutions for SPDE’s and backward doubly
    stochastic diﬀerential equations. J. Theor. Probab. 14, No.1, 125-164 (2001).
13. Vlad Bally, Pages G Error analysis of the optimal quantization algorithm for
    obstacle problems, Stoch. Proc. Appl. 106 (1): 1-40 JUL 2003
14. Philippe Briand, A Remark On Generalized Feynman-Kac Formula, CR Acad.
    Sci. I-Math 321 (10): 1315-1318 Nov 16 1995
15. Philippe Briand, Ying Hu, Stability of BSDEs with Random Terminal Time
    and homogenization of Semilinear Elliptic PDEs, J. of Functional Analysis 155,
    455–494, (1998)
16. Philippe Briand, B.Delyon, J. Memin, On the robustness of backward stochas-
    tic diﬀerential equations, Stoch. Proc. Appl. 97 (2): 229-253 FEB 2002
17. Philippe Briand, B. Delyon, Y. Hu, E. Pardoux L-p solutions of backward
    stochastic diﬀerential equations, Stoch. Proc. Appl. 108 (1): 109-129, 2003
18. Rainer Buckdahn, Backward stochastic diﬀerential equations. Option hedging
    under additional cost. Bolthausen, Erwin (ed.) et al., Seminar on stochastic
    analysis, random ﬁelds and applications. Proceedings of a seminar held at
    the Centro Stefano Franscini, Ascona, Switzerland, June 7-12, 1993. Basel:
    Birkhauser. Prog. Probab. 36, 307-318 (1995).
19. Rainer Buckdahn, Ying Hu, Pricing of American contingent claims with jump
    stock price and constrained portfolios, Math. Oper. Res. 23 (1): 177-203 Feb
    1998.
20. Rainer Buckdahn, Ying Hu, Hedging contingent claims for a large investor in
    an incomplete market, Adv. Appl. Probab. 30 (1): 239-255 MAR 1998.
21. Rainer Buckdahn, Ying Hu, Probabilistic approach to homogenizations of sys-
    tems of quasilinear parabolic PDEs with periodic structures, Nonlinear Anal-
    ysis, Theory and Methods.
22. Rainer Buckdahn, Jin Ma, Stochastic viscosity solutions for nonlinear stochas-
    tic partial diﬀerential equations. Part I, Stoch. Processes.
23. Rainer Buckdahn, Jin Ma, Stochastic viscosity solutions for nonlinear stochas-
    tic partial diﬀerential equations. Part II, Stoch. Processes.
24. Rainer Buckdahn, E.Pardoux, Backward stochastic diﬀerential equations and
    integral-partial diﬀerential equations. Stochastics Stochastics Rep. 60, No.1-2,
    57-83 (1997).
25. Rainer Buckdahn, Mare Quincampolx et Aurel Rascanu, Propriete de viabilite
    pour des equations diﬀenentielles stochastiques retrogrades et applications a
    des equations aux derivees partielles, C.R.A.S. Paris, t.325, I, 1159–1162, 1997.
26. Rainer Buckdahn, Shige Peng, Stationary backward stochastic diﬀerential
    equations and associated partial diﬀerential equations. Probab. Theory Relat.
    Fields 115, No.3, 383-399 (1999).
242    Shige Peng

 27. Rainer Buckdahn, M.Quincampoix, A.Rascanu, Viability property for a back-
     ward stochastic diﬀerential equation and applications to partial diﬀerential
     equations, Probab Theory Rel. Fields 116 (4): 485-504 APR 2000.
 28. A. Cadenillas, A stochastic maximum principle for systems with jumps, with
     applications to ﬁnance, Syst Control Lett 47 (5): 433-444 Dec 16 2002
 29. Zhigang Cao, Jia-An Yan, A Comparison Theorem for Solutions of Backward
     Stochastic Diﬀerential Equations, Advance in Mathematics, Vol. 28, NO. 4,
     1999. 304–308.
 30. Z. Chen and S. Peng (2001), Continuous Properties of g-martingales, Chin.
     Ann. of Math. 22B: 1, 115–128.
 31. Shuping Chen, XunJing Li, XunYu Zhou, Stochastic linear quadratic regulators
     with indeﬁnite control weight costs, SIAM J. Control Optim. Vol. 38, No. 5,
     1685–1702, September 1998.
 32. Shuping Chen, Jiongmin Yong, Stochastic linear quadratic optimal control
     problems with random coeﬃcients, Chin. Ann.of Math. 21B: 3(2000), 323–338.
 33. Shuping Chen, XunYu Zhou, Stochastic linear quadratic regulators with indef-
     inite control weight costs. II SIAM J Control Optim 39 (4): 1065-1081 Dec. 20
     2000
 34. Shuping Chen, Jiongmin Yong, Stochastic linear quadratic optimal control
     problems, Appl. Math. Opt. 43 (1): 21-45 Jan-Feb 2001
 35. Zengjing Chen, Existence and uniqueness for BSDE with stopping time, Chi-
     nese Sci Bull 43 (2): 96-99 Jan 1998
 36. Zengjing Chen, A proberty of backward stochastic diﬀerential equa-
     tions,C.R.A.S. Paris, t.326, I, 483–488, (1998)
 37. Zengjing Chen, A new proof of Doob-Meyer decomposition theorem, C.R.A.S.
     Paris, t.328, I, 919–924, 1999,’
 38. Zengjing Chen, Shige Peng, A general Downcrossing Inequality for g-
     Martingales, Statistics and Prob. Letters, 45, 1999.
 39. Zengjing Chen, Bo Wang, Inﬁnite time interval BSDES and the convergence
     of g-martingales, J Aust Math Soc A 69: 187-211 Part 2 Oct 2000
 40. Zengjing Chen, Xiangrong Wang, Comonotonicity of backward stochastic dif-
     ferential equations.
 41. Zengjing Chen, ShiGe Peng, Continuous properties of G-martingales, Chinese
     Ann Math B 22 (1): 115-128 JAN 2001
 42. Zengjing Chen, L. Epstein, Ambiguity,risk, and asset returns in continuous
     time, Econometrica 70 (4):1403-1443 Jul 2002
 43. D. Chevance, Discretization of Pardoux-Peng’s backward stochastic diﬀerential
     equations, Z Angew Math Mech 76: 323-326 Suppl. 3 1996
 44. D. Chevance, Numerical methods for backward stochastic diﬀerential equa-
     tions. Rogers, L. C. G. (ed.) et al., Numerical methods in ﬁnance. Session
     at the Isaac Newton Institute, Cambridge, GB, 1995. Cambridge: Cambridge
     Univ. Press. 232-244 (1997).
 45. Adam Cmiel, Gurgul, Henryk, Stochastic backward-lag-type Leontief model.
     Cent. Eur. J. Oper. Res. Econ. 5, No.1, 5-22 (1997).
 46. Constantin, Adrian A backward stochastic diﬀerential equation with non-
     Lipschitz coeﬃcients. C. R. Math. Acad. Sci., Soc. R. Can. 17, No.6, 280-282
     (1995).
       Nonlinear Expectations, Nonlinear Evaluations and Risk Measures          243

47. Francois Coquet, Resolution explicite d’une EDSR conduite par un proces-
    sus de Poisson avec reﬂexion a la frontiere. (Explicit solution of a stochastic
    backward diﬀerential equation driven by Poisson process with reﬂection at
    the boundary). (French) Fascicule de probabilite. Publications, 1996 – 1997.
    Rennes: Universite de Rennes I, Institut de Recherche Mathematiques de
    Rennes, Publ. Inst. Rech. Math. Rennes. 1996, 1-3 (1997).
48. Francois Coquet, Ying Hu, Jean Memin, Shige Peng, A general converse
    comparison theorem for backward stochastic diﬀerential equations. (English.
    Abridged French version) C. R. Acad. Sci., Paris, Serie. I, Math. 333, No.6,
    577-581 (2001).
49. F. Coquet, Y. Hu, J. Memin S. Peng, Filtrition Consistent Nonlinear Expec-
    tations and Related g-Expectations, Probab. Theory Relat. Fields 123, 1-27,
    2002.
50. Domenico Cuoco, Jaksa Cvitanic, Optimal consumption choices for a ’large’
    investor, J. of Economic Dynamics and Control 22(1998) 401–436.
51. Jaksa Cvitanic, Ioannis Karatzas, Hedging contingent claims with constrained
    portfolios, The Annals of Proba. 1993. Vol. 3, No. 4, 652–681.
52. Jaksa Cvitanic, Ioannis Karatzas, Backward Stochastic Diﬀerential Equations
    with Reﬂection and Dynkin games, The Annals of Prob. 1996, Vol. 24, No. 4
    2024–2056.
53. Jaksa Cvitanic, Karatzas, Ioannis, Soner, H.Mete Backward stochastic diﬀer-
    ential equations with constraints on the gains-process. Ann. Probab. 26, No.4,
    1522-1551 (1998).
54. R.W.R.Darling, Constructing gamma-martingales with prescribed limit, using
    backward sde, The Annals of Proba. 1995, Vol. 23, No.3, 1234–1261
55. F. Delarue On the existence and uniqueness of solutions to FBSDEs in a non-
    degenerate case STOCH PROC APPL 99 (2): 209-286 JUN 2002
56. A. Dermoune, S. Hamadene and Y. Ouknine, Backward Stochastic Diﬀerential
    Equation with Local time, Stochastic and Stochastic Rep. 66, No.1-2, 103-119
    (1999).
57. D. Ding A note on probabilistic interpretation for quasilinear mixed boundary
    problems, Appl Math Mech-Engl 18 (9): 857-864 SEP 1997
58. N. Doluchaev, Xunyu Zhou Stochastic controls with terminal contingent con-
    ditions, J Math Anal Appl 238 (1): 143-165 Oct 1 1999
59. Jim Douglas, Jin Ma, Protter, Philip Numerical methods for forward-backward
    stochastic diﬀerential equations. Ann. Appl. Probab. 6, No.3, 940-968 (1996).
60. Darrell Duﬃe and Larry G.Epstein Appendix C with Costis Skiadas, Stochastic
    Diﬀerential Utility, Econometrica, Vol.60, No.2 (March, 1992) 353–394.
61. Es-Saky EH, Ouknine Y Convergence of backward stochastic diﬀerential equa-
    tions and homogenization of semilinear variational inequalities in a convex set,
    B Sci Math 126 (5): 413-431 Jun 2002
62. El Karoui, Backward stochastic diﬀerential equations. A general introduction.
    El Karoui, Nicole (ed.) et al., Backward stochastic diﬀerential equations. Har-
    low: Longman. Pitman Res. Notes Math. Ser. 364, 7-26 (1997).
63. El-Karoui, S.Hamadene, BSDEs and risk-sensitive control, zero-sum and
    nonzero-sum game problems of stochastic functional diﬀerential equations,
    Stoch Proc Appl 107 (1): 145-169 Sep 2003.
64. El Karoui, S.J.Huang, A general result of existence and uniqueness of backward
    stochastic diﬀerential equations.
244     Shige Peng

 65. EL Karoui, M.C. Quenez, Dynamic programming and pricing of contin-
     gent claims in an incomplete market (c) SIAM J.Control and Optimization
     Vol.33.No.1.pp.29-66. 1995
 66. El Karoui, M. C. Quenez, Nonlinear pricing theory and backward stochastic dif-
     ferential equations. Biais, B. (ed.) et al., Financial mathematics. Lectures given
     at the 3rd session of the Centro Internazionale Matematico Estivo (CIME),
     held in Bressanone, Italy, July 8–13, 1996. Berlin: Springer. Lect. Notes Math.
     1656, 191-246 (1997)
 67. El-Karoui, M.C.Quenez, Imperfect markets and backward stochastic diﬀer-
     ential equations. Rogers, L. C. G. (ed.) et al., Numerical methods in ﬁnance.
     Session at the Isaac Newton Institute, Cambridge, GB, 1995. Cambridge: Cam-
     bridge Univ. Press. 181-214 (1997)
 68. El Karoui, C.Kapoudjian, E.Pardoux S. Peng, M.C. Quenez, Reﬂected solu-
     tions of backward SDE’s, and related obstacle problems for PDE’s, Ann Probab
     25 (2): 702-737 Apr 1997
 69. El Karoui, Shige Peng, M.C.Quenez, Backward stochastic diﬀerential equations
     in ﬁnance, Math Financ 7 (1): 1-71 Jan 1997
 70. El Karoui, Shige Peng, M.C.Quenez, A dynamic maximum principle for the
     optimization of recursive utilities under constraints Ann. Appl. Prob. 11 (3):
     664-693 AUG 2001.
 71. El Karoui, L.Pardoux and M.C.quenez, Reﬂected Backward SDEs and America
     Options
 72. K.D. Elworthy, Stochastic Diﬀerential Geometry, Bull. Sc. Math., 2c serie, 117.
     1993. 7–27
 73. M.Erraoui, Ouknine, Youssef, A.Sbi, Backward stochastic diﬀerential equations
     with distribution as terminal condition. Random Oper. Stoch. Equ. 5, No.4,
     349-356 (1997).
 74. M. Erraoui, Y. Ouknine, A. Sbi, Reﬂected solutions of backward stochastic
     diﬀerential equations with distribution as terminal condition. Random Oper.
     Stoch. Equ. 6, No.1, 1-16 (1998).
 75. Anne Estrade, Monique Pontier, Backward stochastic diﬀerential equations in
     a Lie group. Azema, Jacques (ed.) et al., Seminaire de Probabilite XXXV.
     Berlin: Springer. Lect. Notes Math. 1755, 241-259 (2001).
 76. Marco Fuhrman, Gianmario Tessitore, Nonlinear Kolmogorov equations in in-
     ﬁnite dimensional spaces: the backward stochastic diﬀerential equations ap-
     proach and applications to optimal control. Ann. Probab. 30, No.3, 1397-1465
     (2002).
 77. G. Gaudron, E.Pardoux, Backward stochastic diﬀerential equations (BSDE),
     weak convergence and homogenization of semilinear parabolic diﬀerential equa-
     tions (PDE), Ann I H Poincare-Pr 37 (1): 1-42 Jan-Feb 2001
 78. G. Gaudron, Convergence of BSDEs and homogenization of elliptic semilinear
     PDEs, Stoch Anal Appl 20 (4): 791-813 Jul 2002
 79. Gegout-Petit, E.Pardoux, Equations diﬃrentielles stochastiques retrogrades re-
     frichies dans un convexe. (Backward stochastic diﬀerential equations reﬂected
     in a convex domain). (French) Stochastics Stochastics Rep. 57, No.1-2, 111-128
     (1996).
 80. S. Hamadene, Nonzero sum Linear-quadratic Stochastic Diﬀerential Games
     and Backward-Forward Equations, Stochastic Analysis and Applications,
     17(1), 117–130 (1990).
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures            245

 81. S. Hamadene, Euations diﬀrentielles stochastiques retrogrades: Les cas locale-
     ment lipschitzien. (Backward stochastic diﬀerential equations: The locally Lip-
     schitz case). (French) Ann. Inst. Henri Poincare Probab. Stat. 32, No.5, 645-659
     (1997).
 82. S. Hamadene, Backward-forward SDEs and stochastic diﬀerential games,
     Stochastic process and their applications 77 (1998) 1–15.
 83. S. Hamadene, Nonzero sum linear-quadratic stochastic diﬀerential games and
     backward-forward equations. Stochastic Anal. Appl. 17, No.1, 117-130 (1999).
 84. S. Hamadene, Multidimensional backward stochastic diﬀerential equations
     with uniformly continuous coeﬃcients Bernoulli 9 (3): 517-534 Jun 2003.
 85. S. Hamadene, J.P. Lepeltier, Reﬂected BSDEs and mixed game problem,
     Stochastic Process and their Applications 85 (2000) 177–188
 86. S. Hamadene, J.P. Lepeltier, Zero-sum stochastic diﬀerential games and back-
     ward equations. Syst. Control Lett. 24, No.4, 259-263 (1995)
 87. S. Hamadene, J.P. Lepeltier, Backward equations, stochastic control and zero-
     sum stochastic diﬀerential games. Stochastics Stochastics Rep. 54, No.3-4, 221-
     231 (1995).
 88. S. Hamadene, J.P. Lepeltier and Zhen Wu, Inﬁnite a horizon Reﬂected Back-
     ward Stochastic Diﬀerential Equations and Applications in Mixed control and
     Game problems, Probability and Mathematical Statistics, Math. Stat. 19, No.2,
     211-234 (1999).
 89. S. Hamadene, Y. Ouknine, Reﬂected backward stochastic diﬀerential equation
     with jumps and random obstacle. Electron. J. Probab. 8, Paper No.2, 20 p.,
     electronic only (2003).
 90. M. Hassani, Y. Ouknine, On a general result for backward stochastic diﬀerential
     equations. Stochastics Stochastics Rep. 73, No.3-4, 219-240 (2002).
 91. M. Hassani, Y. Ouknine, Inﬁnite dimensional BSDE with jumps, Stoch Anal
     Appl 20 (3): 519-565 May 2002.
 92. Zhiyuan Huang, qingquan Lin, The Weak Solutions for Stochastic Diﬀerential
     Equations with Terminal Conditions, Mathematica Applicata 1997,10(4): 60-
     64
 93. Ying Hu, Shige Peng, Adapted solution of a backward semilinear stochastic
     evolution equation. Stochastic Anal. Appl. 9, No.4, 445-459 (1991).
 94. Ying Hu, Probabilistic interpretations of a system of quasilinear elliptic partial
     diﬀerential equations under Neumann boundary conditions, Stochastic Process
     and Their Applications 48 (1993) 107-121
 95. Ying Hu, Shige Peng, Solution Of Forward-Backward Stochastic Diﬀerential-
     Equations, Probab. Theory Rel. Fiel. 103 (2): 273-283 OCT 1995
 96. Ying Hu, Jiongmin Yong, Forward-backward stochastic diﬀerential equations
     with nonsmooth coeﬃcients, Stoch Proc Appl 87 (1): 93-106 May
 97. Ying Hu Shige Peng, Solution of forward-backward stochastic diﬀerential equa-
     tions. Probab. Theory Relat. Fields 103, No.2, 273-283 (1995).
 98. Ying Hu, Shige Peng, A stability theorem of backward stochastic diﬀerential
     equations and its application. (English. Abridged French version) C. R. Acad.
     Sci., Paris, Serie. I 324, No.9, 1059-1064 (1997).
 99. Ying Hu, On the existence of solution to one-dimensional forward-backward
     SDEs, Stoch Anal Appl 18 (1): 101-111 Jan 2000
100. Ying Hu Potential Kernels associated with a ﬁltration and Forward CBackward
     SDEs, Potential Analysis 10:103-118,1999
246     Shige Peng

101. Ying Hu, Jin Ma, Jiongmin Yong, On semi-linear degenerate backward stochas-
     tic partial diﬀerential equations. Probab. Theory Relat. Fields 123, No.3, 381-
     411 (2002).
102. Ying Hu, Xunyu Zhou, Indeﬁnite stochastic Riccati equations SIAM J CON-
     TROL OPTIM 42 (1): 123-137 2003
103. Ying Hu, On the solution of forward-backward SDEs with monotone and con-
     tinuous coeﬃcients, Nonlinear Analysis 42 1-12
104. Ying Hu, Jiongmin Yong, Forward-Backward stochastic diﬀerential equations
     with nonsmooth coeﬃcients
105. Wilfrid S. Kendall, Probability, convexity, and Harmonic Maps II. Smooth-
     ness via probabilistic gradient inequalities, J. of Functional Analysis 126.228-
     257(1994)
106. Magdalena Kobylanski, Existence and uniqueness results for backward stochas-
     tic diﬀerential equations when the generator has a quadratic growth, CR Acad
     Sci I-Math 324 (1): 81-86 Jan 1997
107. Magdalena Kobylanski, Backward stochastic diﬀerential equations and partial
     diﬀerential equations with quadratic growth. Ann. Probab. 28, No.2, 558-602
     (2000).
108. Michael Kohlmann, Reﬂected forward backward stochastic diﬀerential equa-
     tions and contingent claims. Chen, Shuping (ed.) et al., Control of distributed
     parameter and stochastic systems. Proceedings of the international conference
     (IFIP WG 7.2), Hangzhou, China, June 19-22, 1998. Boston, MA: Kluwer Aca-
     demic Publishers. 223-230 (1999)
109. Michael Kohlmann, Shanjian Tang, New developments in backward stochas-
     tic Riccati equations and their applications. Kohlmann, Michael (ed.) et al.,
     Mathematical ﬁnance. Workshop of the mathematical ﬁnance research project,
     Konstanz, Germany, October 5-7, 2000. Basel: Birkhauser. 194-214 (2001).
110. Michael Kohlmann, Shanjian Tang, Global adapted solution of one-dimensional
     backward stochastic Riccati equations, with application to the mean-variance
     hedging, Stoch Proc Appl 97 (2): 255-288 Feb 2002.
111. Michael Kohlmann, Shanjian Tang, Multidimensional backward stochastic Ric-
     cati equations and applications, SIAM J CONTROL OPTIM 41 (6): 1696-1721.
     2003
112. Michael Kohlmann, Shanjian Tang, Minimization of risk and linear quadratic
     optimal control theory, SIAM J Control Optim 42 (3): 1118-1142 2003.
113. Michael Kohlmann, Xunyu Zhou, Relationship between backward stochastic
     diﬀerential equations and stochastic controls: A linear-quadratic approach.
     SIAM J. Control Optimization 38, No.5, 1392-1407 (2000).
114. Zai Lanjri, A class of two-parameter backward stochastic diﬀerential equations
     driven by a Brownian sheet. Stochastic Anal. Appl. 20, No.4, 883-899 (2002).
115. A.Lazrak, M.C.Quenez MC, A generalized stochastic diﬀerential utility, Math
     Oper Res 28 (1): 154-180 Feb 2003
116. A. Lejay, BSDE driven by Dirichlet process and semi-linear parabolic PDE.
     Application to homogenization, Stoch Proc Appl 97 (1): 1-39 Jan 2002
117. J.P.Lepeltier, San Martin, Jaime, Backward stochastic diﬀerential equations
     with continuous coeﬃcient. Stat. Probab. Lett. 32, No.4, 425-430 (1997).
118. J.P.Lepeltier, San Martin, Jaime, On the existence or non-existence of solutions
     for certain backward stochastic diﬀerential equations BERNOULLI 8 (1): 123-
     137 FEB 2002
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures         247

119. J.P.Lepeltier, Jean-Pierre, San Martin, Jaime, On the existence or non-
     existence of solutions for certain backward stochastic diﬀerential equations.
     Bernoulli 8, No.1, 123-137 (2002).
120. Juan Li, Zhen Wu, Fully coupled forward-backward stochastic diﬀerential equa-
     tions with Brownian motion and Poisson processes under local Lipschitz con-
     dition. (Chinese. English summary) Math. Appl. 15, No.2, 40-47 (2002).
121. Xunjing Li, Shanjian Tang, General necessary conditions for partially observed
     optimal stochastic controls, J. Appl. Prob.32. 1118-1137(1995)
122. AEB Lim, Xunyu Zhou, Linear-quadratic control of backward stochastic dif-
     ferential equations. SIAM J. Control Optimization 40, No.2, 450-474 (2001).
123. AEB Lim, Xunyu Zhou, Optimal control of linear backward stochastic diﬀer-
     ential equations with a quadratic cost criterion LECT NOTES CONTR INF
     280: 301-317 2002
124. AEB Lim, Xunyu Zhou, Mean-variance portfolio selection with random pa-
     rameters in a complete market, Math Oper Res 27 (1): 101-120 Feb 2002
125. Jianzhong Lin, Adapted solution of a backward stochastic nonlinear Volterra
     integral equation. Stochastic Anal. Appl. 20, No.1, 165-183 (2002).
126. Qinquan Lin, Solution of backward stochastic diﬀerential equations with jumps
     and quasi-continuous generator. (Chinese. English summary) J. Shandong
     Univ., Nat. Sci. Ed. 35, No.2, 121-125 (2000).
127. Qinquan Lin, Shige Peng, Smallest g-supersolution for BSDE with continuous
     drift coeﬃcients CHINESE ANN MATH B 21 (3): 359-366 JUL 2000
128. Linear, degenerate backward stochastic partial diﬀerential equations, Lect
     Notes Math 1702: 103-136 1999
129. Jicheng Liu, Ren, Jiagang Comparison theorem for solutions of backward
     stochastic diﬀerential equations with continuous coeﬃcient. Stat. Probab. Lett.
     56, No.1, 93-100 (2002).
130. Yazeng Liu, Shige Peng, Inﬁnite horizon backward stochastic diﬀerential equa-
     tion and exponential convergence index assignment of stochastic control sys-
     tems. Automatica 38, No.8, 1417-1423 (2002).
131. Chenghu Ma, An existence theorem of intertemporal recursive utility in the
     presence of levy jumps, J. of Mathematical Economics 34 (2000) 509-526.
132. Jin Ma, Philip Protter, San Martin Jaime, Torres, Soledad Numerical method
     for backward stochastic diﬀerential equations.Ann. Appl. Probab. 12, No.1,
     302-316 (2002).
133. Jin Ma, Philip Protter and Jiongmin Yong, Solving forward –backward stochas-
     tic diﬀerential equations explicitly, a four step scheme, Probab.Theory Re-
     lat.Fields 98.339-359(1994)
134. Jin Ma, Jiongmin Yong, Solvability Of Forward-Backward Sdes And The Nodal
     Set Of Hamilton-Jacobi-Bellman Equations, Chinese Ann Math B 16 (3): 279-
     298 Jul 1995
135. Jin Ma, Jiongmin Yong,, Adapted solution of a degenerate backward spde,
     with applications, Stochastic Process and their Application 70 (1997) 59-84
136. Jin Ma, Jiongmin Yong, Forward-backward stochastic diﬀerential equations
     and their applications - Introduction, Lect Notes Math 1702: 1-24 1999
137. Jin Ma, Jiongmin Yong, On linear, degenerate backward stochastic partial
     diﬀerential equations. Probab. Theory Relat. Fields 113, No.2, 135-170 (1999)
138. Jin Ma, Jiongmin Yong, Approximate solvability of forward-backward stochas-
     tic diﬀerential equations. Appl. Math. Optimization 45, No.1, 1-22 (2002).
248     Shige Peng

139. Jin Ma, Zajic, Tim Rough asymptotics of forward-backward stochastic diﬀer-
     ential equations. Chen, Shuping (ed.) et al., Control of distributed parameter
     and stochastic systems. Proceedings of the international conference (IFIP WG
     7.2), Hangzhou, China, June 19-22, 1998. Boston, MA: Kluwer Academic Pub-
     lishers. 239-246 (1999).
140. Jin Ma, Jianfeng Zhang, Representation theorems for backward stochastic dif-
     ferential equations. Ann. Appl. Probab. 12, No.4, 1390-1418 (2002).
141. Jin Ma, Jianfeng Zhang, Path regularity for solutions of backward stochastic
     diﬀerential equations. Probab. Theory Relat. Fields 122, No.2, 163-190 (2002).
142. Anis Matoussi, A Reﬂected solutions of backward stochastic diﬀerential equa-
     tions with continuous coeﬃcient, Stat Probabil Lett 34 (4): 347-354 Jul 16
     1997
143. Anis Matoussi, Scheutzow, Michael Stochastic PDEs driven by nonlinear noise
     and backward doubly SDEs. J. Theor. Probab. 15, No.1, 1-39 (2002).
144. L. Mazliak, The maximum principle in stochastic control and backward equa-
     tions, El Karoui, Nicole (ed.) et al., Backward stochastic diﬀerential equations.
     Harlow: Longman. Pitman Res. Notes Math. Ser. 364, 101-113 (1997).
145. Yuliya S. Mishura, Ol’tsik, Yanina A, Optimal ﬁnancial strategy with wealth
     process governed by backward stochastic diﬀerential equation. Theory Stoch.
     Process. 4(20), No.1-2, 222-237 (1998).
146. Modeste N’Zi, Multivalued backward stochastic diﬀerential equations with lo-
     cal Lipschitz drift. Stochastics Stochastics Rep. 60, No.3-4, 205-218 (1997).
147. Modeste N’Zi, Multivalued backward stochastic diﬀerential equations with lo-
     cal Lipschitz drift. Random Oper. Stoch. Equ. 5, No.2, 163-172 (1997).
148. Modeste N’Zi, Ouknine, Youssef Multivalued backward stochastic diﬀerential
     equations with continuous coeﬃcients. Random Oper. Stoch. Equ. 5, No.1,
     59-68 (1997).
149. Modeste N’zi, Ouknine, Youssef Equations diﬀrentielles stochastiques retro-
     grades multivoques. (Multidimensional backward stochastic diﬀerential equa-
     tions). (French) Probab. Math. Stat. 17, No.2, 259-275 (1997).
150. Modeste N’zi, Ouknine, Y. Backward stochastic diﬀerential equations with
     jumps involving a subdiﬀerential operator. Random Oper. Stoch. Equ. 8, No.4,
     319-338 (2000).
151. Xuerong Mao, Adapted solutions of backward stochastic diﬀerential equa-
     tions with non-Lipschitz coeﬃcients, Stochastic Process and their Application
     58(1995) 281-292.
152. David Nualart, Schoutens, Wim Backward stochastic diﬀerential equations
     and Feynman-Kac formula for Levy processes, with applications in ﬁnance.
     Bernoulli 7, No.5, 761-776 (2001).
153. Y.Ouknine, Reﬂected backward stochastic diﬀerential equations with jumps.
     Stochastics Stochastics Rep. 65, No.1-2, 111-125 (1998).
154. E.Pardoux, Backward stochastic diﬀerential equations and applications. Chat-
     terji, S. D. (ed.), Proceedings of the international congress of mathematicians,
     ICM ’94, August 3-11, 1994, Zurich, Switzerland. Vol. II. Basel: Birkhauser.
     1502-1510 (1995).
155. E. Pardoux, Backward Stochastic Diﬀerential Equations and Viscosity Solu-
     tions, 79–128, in Stochastic Analysis and Related Topics, VI, Birkhauser, 1996.
156. E. Pardoux, Generalized discontinuous backward stochastic diﬀerential equa-
     tions. El Karoui, Nicole (ed.) et al., Backward stochastic diﬀerential equations.
     Harlow: Longman. Pitman Res. Notes Math. Ser. 364, 207-219 (1997).
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures          249

157. E. Pardoux, Homogenization of Linear and semilinear second order parabolic
     PDEs with periodic coeﬃcients: A probabilistic Approach, J. of Functional
     Analysis 167, 498–520 (1999)
158. E.Pardoux, Shige Peng, Adapted solution of a backward stochastic diﬀerential
     equation. Syst. Control Lett. 14, No.1, 55-61 (1990).
159. E.Pardoux, Shige Peng, Backward stochastic diﬀerential equations and quasi-
     linear parabolic partial diﬀerential equations. Stochastic partial diﬀerential
     equations and their applications, Proc. IFIP Int. Conf., Charlotte/NC (USA)
     1991, Lect. Notes Control Inf. Sci. 176, 200-217 (1992).
160. E.Pardoux, Shige Peng, Backward doubly stochastic diﬀerential equations and
     systems of quasilinear SPDEs. Probab. Theory Relat. Fields 98, No.2, 209-227
     (1994).
161. E. Pardoux, F.Pradeilles, Zusheng Rao, Probabilistic interpretation of a system
     of semi-linear parabolic partial diﬀerential equations Ann.inst.Henri Poincar,
     Vol.33, no 4,1997, p.467-490.
162. E. Pardoux, A.Rascanu, Backward stochastic diﬀerential equations with subd-
     iﬀerential operator and related variation inequalities Stochastic Processes and
     their Applications 76 (1998) 191-215.
163. E.Pardoux, Shanjian Tang, Forward-backward stochastic diﬀerential equations
     and quasilinear parabolic PDEs. Probab. Theory Relat. Fields 114, No.2, 123-
     150 (1999).
164. E.Pardoux, A.Yu. Veretennikov, Averaging of backward stochastic diﬀerential
     equations, with application to semilinear PDE’s. Stochastics Stochastics Rep.
     60, No.3-4, 255-270 (1997).
165. E.Pardoux, SG Zhang, Generalized BSDEs and nonlinear Neumann boundary
     value problems, Probab Theory Rel 110 (4): 535-558 Apr. 1998
166. E.Pardoux, Aurel Rascanu, Backward stochastic variational inequalities.
     Stochastics Stochastics Rep. 67, No.3-4, 159-167 (1999).
167. Shige Peng, On Hamilton-Jacobi-Bellman Equation with Stochastic Coeﬃ-
     cients, in Proceeding of the Annual Meeting on Control Theory and It’s Ap-
     plications, 1989.
168. Shige Peng, A General Stochastic Maximum Principle for Optimal Control
     Problems, SIAM J. Cont. 28: 4, 966-979, 1990.
169. Shige Peng, Maximum Principle for Stochastic Optimal Control with Noncon-
     vex Control Domain, in Analysis and Optimization of Systems, A. Bensoussan
     J. L. Lions eds. Lecture Notes in Control and Information Sciences, 144, (1990),
     724-732.
170. Shige Peng, Probabilistic Interpretation for Systems of Quasilinear Parabolic
     Partial Diﬀerential Equations, Stochastics, 37, 61–74, 1991.
171. Shige Peng, A Generalized Hamilton-Jacobi-Bellman Equation, Lect Notes
     Contr Inf 159: 126-134 1991.
172. Shige Peng, Stochastic Hamilton-Jacobi-Bellman Equations, SIAM Control
     30(2), 284-304, 1992.
173. Shige Peng, A Generalized Dynamic Programming Principle and Hamilton-
     Jacobi-Bellmen equation, Stochastics, 38, 119–134, 1992.
174. Shige Peng, A Nonlinear Feynman–Kac Formula and Applications, Proceed-
     ings of Symposium of System Sciences and Control theory, Chen Yong ed.
     173-184, World Scientiﬁc, Singapore, 1992.
250     Shige Peng

175. Shige Peng, New Development in Stochastic Maximum Principle and Related
     Backward Stochastic Diﬀerential Equations, in proceedings of 31st CDC Con-
     ference, Tucson 1992.
176. Shige Peng, Backward stochastic diﬀerential equations and applications to op-
     timal control. Appl. Math. Optimization 27, No.2, 125-144 (1993).
177. Shige Peng, BSDE and Exact Controllability of Stochastic Control Systems,
     Progress in Natural Science, 4 3, 274–284, 1994.
178. Shige Peng, The backward stochastic diﬀerential equations and its applications.
     (Chinese. English summary) Adv. Math., Beijing 26, No.2, 97-112 (1997).
179. Shige Peng, Backward Stochastic Diﬀerential Equation in Finance, Mathe-
     matical Finance, 1997, 7, 1–71,
180. Shige Peng, Topics in Stochastic Analysis, (with J. Yan, S. Fang and L.M. Wu),
     Ch.2: BSDE and Stochastic Optimizations (Chinese vers.), Science Publication,
     1997.
181. Shige Peng, Monotonic limit theorem of BSDE and nonlinear decomposition
     theorem of Doob-Meyer’s type, Probab. Theory Rel. Fiel. 113 (4): 473-499 Apr
     1999
182. Problem of Eigenvalues of Stochastic Hamiltonian Systems with Boundary
     Conditions, Stochastic Processes and Their Applications, 88, 259–290, 2000.
183. A Stochastic Laplace Transform for Adapted Processes and Related BSDEs, in
     Optimal Control and Partial Diﬀerential Equations, J.L. Menaldi et al. (Eds.)
     283–292, IOS Press, Amsterdam, 2001.
184. Shige Peng, Zhen Wu, Fully coupled forward-backward stochastic diﬀerential
     equations and applications to optimal control, Siam J Control Optim 37 (3):
     825-843 Apr 13 1999
185. Shige Peng, Open problems on backward stochastic diﬀerential equations.
     Shuping Chen (ed.) et al., Control of distributed parameter and stochastic sys-
     tems. Proceedings of the international conference (IFIP WG 7.2), Hangzhou,
     China, June 19-22, 1998. Boston, MA: Kluwer Academic Publishers. 265-273
     (1999).
186. Shige Peng, Problem of eigenvalues of stochastic Hamiltonian systems with
     boundary conditions, Stoch Proc Appl 88 (2): 259-290 Aug 2000
187. Peng, S., Shi, Yufeng Inﬁnite horizon forward-backward stochastic diﬀerential
     equations. Stochastic Processes Appl. 85, No.1, 75-92 (2000).
188. S. Peng, Yufeng Shi, A type of time-symmetric forward–backward stochastic
     diﬀerential equations. (English. Abridged French version) C. R., Math., Acad.
     Sci. Paris 336, No.9, 773-778 (2003).
189. S. Peng and Z. Wu, Fully Coupled Forward-Backward Stochastic Diﬀerential
     Equations and Applications to Optimal Control, SIAM Control, 1999.
190. Shige Peng, Yang F. Duplicating and pricing contingent claims with con-
     strained portfolios, Prog. Nat. Sci. 8 (6): 650-659 Dec 1998
191. M.Pontier, Solutions of forward-backward stochastic diﬀerential equations. El
     Karoui, Nicole (ed.) et al., Backward stochastic diﬀerential equations. Harlow:
     Longman. Pitman Res. Notes Math. Ser. 364, 39-46 (1997).
192. F.Pradeilles, Wavefront propagation for reaction-diﬀusion systems and back-
     ward SDES ANN PROBAB 26 (4): 1575-1613 OCT 1998
193. S.Ramasubramanian, Reﬂected backward stochastic diﬀerential equations in
     an orthant. Proc. Indian Acad. Sci., Math. Sci. 112, No.2, 347-360 (2002).
194. C. Rainer, Backward stochastic diﬀerential equations with Azema’s martingale,
     Stochastics Stochastics Rep. 73, No.1-2, 65-98 (2002).
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures           251

195. A. Rozkosz, Backward SDEs and Cauchy problem for semilinear equations in
     divergence form, Probab Theory Rel. Field. 125 (3): 393-407, 2003
196. Zhiqiang Shun, The pricing problem and the existence/uniqueness of solutions
     to a class of backward stochastic diﬀerential equations. (Chinese. English sum-
     mary) Chin. J. Appl. Probab. Stat. 14, No.4, 409-418 (1998).
197. Rong Situ, On solutions of Backward stochastic diﬀerential equations with
     jumps and applications, Stochastic Process and their Applications (1996)
198. Rong Situ, Yueping Wang,On solutions of backward stochastic diﬀerential
     equations with jumps, with unbounded stopping times as terminal and with
     non-Lipschitz coeﬃcients, and probabilistic interpretation of quasi-linear ellip-
     tic type integro-diﬀerential equations. Appl. Math. Mech., Engl. Ed. 21, No.6,
     659-672 (2000).
199. Rong Situ, Min Huang, On solutions of backward stochastic diﬀerential equa-
     tions with jumps in Hilbert spaces. II. (Chinese. English summary) Acta Sci.
     Nat. Univ. Sunyatseni 40, No.4, 20-23 (2001).
200. Rong Situ, Huanyao Xu, Adapted solutions of backward stochastic evolution
     equations with jumps on Hilbert space. II. (Chinese. English summary) Acta
     Sci. Nat. Univ. Sunyatseni 40, No.2, 1-5 (2001).
201. Rong Situ, On solutions of backward stochastic diﬀerential equations with
     jumps and with non-Lipschitzian coeﬃcients in Hilbert spaces and stochastic
     control. Stat. Probab. Lett. 60, No.3, 279-288 (2002).
202. Stoica IL A probabilistic interpretation of the divergence and BSDE’s, Stoch
     Proc Appl 103 (1): 31-55 Jan 2003
203. M. Sirbu, G.Tessitore, Null controllability of an inﬁnite dimensional SDE with
     state- and control-dependent noise Syst. Contro. Lett. 44 (5): 385-394 DEC 14
     2001
204. Shangjina Tang, The maximum principle for partially observed optimal control
     of stochastic diﬀerential equations, Siam J Control Optim 36 (5): 1596-1617
     Sep 1998
205. Shangjina Tang, Financial mean-variance problems and stochastic LQ prob-
     lems: Linear stochastic Hamilton systems and backward stochastic Riccati
     equations. Yong, Jiongmin (ed.), Recent developments in mathematical ﬁ-
     nance. Proceedings of the international conference on mathematical ﬁnance,
     Shanghai, China, May 10-13, 2001. Singapore: World Scientiﬁc. 190-203 (2002).
206. Shangjina Tang, SH Hou, Optimal control of point processes with noisy ob-
     servations: The maximum principle APPL MATH OPT 45 (2): 185-212 MAR-
     APR 2002
207. Shangjina Tang, General linear quadratic optimal stochastic control problems
     with random coeﬃcients: Linear stochastic Hamilton systems and backward
     stochastic Riccati equations SIAM J CONTROL OPTIM 42 (1): 53-75 2003.
208. Shanjian Tang, Xunjing Li, Necessary conditions for optimal control of stochas-
     tic systems with random jumps, SIAM J.Control and optimization, Vol. 32, No.
     5, 1447–1475.
209. A. Thalmaier, Martingales on Riemannian manifolds and the nonlinear heat
     equation Stochastic analysis and Applications, Singapore: World Scientiﬁc
     Press, 1996, 429–440
210. A. Thalmaier, Brownian Motion and the formation singularities in the heat
     ﬂow for harmonic maps 350–366
252     Shige Peng

211. Xiangjun Wang, On backward stochastic diﬀerential equations driven by a con-
     tinuous semi-martingale. (Chinese. English summary) J. Math., Wuhan Univ.
     19, No.1, 45-50 (1999).
212. Zhen Wu, Maximum principle for optimal control problem of fully coupled
     forward-backward stochastic systems. Syst. Sci. Math. Sci. 11, No.3, 249-259
     (1998).
213. Zhen Wu, Adapted solution of generalized forward-backward stochastic dif-
     ferential equations and its dependence on parameters. (Chinese) Chin. Ann.
     Math., Ser. A 19, No.1, 55-62 (1998).
214. Zhen Wu, Forward-Backward Stochastic Diﬀerential Equations with Brownian
     Motion and Poisson process, ACTA Mathematics Application Sinica Oct. 1999
     Vol.15 No.4 433–443.
215. Z. Wu The comparison theorem of FBSDE Stat. Prob. Lett. 44 (1): 1-6, 1,
     1999.
216. Zhen Wu, Fully coupled FBSDE with Brownian motion and Poisson process
     in stopping time duration, J Aust Math Soc 74: 249-266 Part 2 Apr 2003
217. Jianming Xia, Backward stochastic diﬀerential equation with random mea-
     sures. Acta Math. Appl. Sin., Engl. Ser. 16, No.3, 225-234 (2000).
218. Wensheng Xu, Stochastic maximum principle for optimal control problem of
     forward and backward system. J. Aust. Math. Soc., Ser. B 37, No.2, 172-185
     (1995).
219. Bo Yang, Necessary conditions for optimal controls of forward-backward
     stochastic systems with nonsmooth cost functionals. (Chinese. English sum-
     mary) J. Fudan Univ., Nat. Sci. 39, No.1, 61-67 (2000).
220. Jinchun Ye, Coupled forward-backward stochastic diﬀerential equations with
     random jumps. (Chinese. English summary) Chin. Ann. Math., Ser. A 23, No.6,
     737-750 (2002).
221. Jiongmin Yong, Finding adapted solutions of forward-backward stochastic dif-
     ferential equations method of continuation, Probability Theory and Related
     Fields 107. 537–572 (1997)
222. Jiongmin Yong, Stochastic controls and forward-backward SDES. Chen, Shup-
     ing (ed.) et al., Control of distributed parameter and stochastic systems. Pro-
     ceedings of the international conference (IFIP WG 7.2), Hangzhou, China,
     June 19-22, 1998. Boston, MA: Kluwer Academic Publishers. 307-314 (1999).
223. Jiongmin Yong, Xunyu Zhou, Stochastic control–Hamiltonian Systems and
     HJB Equations, Springer, Applications of Mathematics 43, 1999
224. Jiongmin Yong, Linear Forward-Backward stochastic diﬀerential equations,
     Appl. Math. Optim. 39:93–119 (1999)
225. Jiongmin Yong, European -type contingent claims in an incomplete market
     with constrained wealth and portfolio, Mathematical Finance, Vol. 9, No. 4
     (October 1999) 387–412
226. Jiongmin Yong, Optimal portfolios in an incomplete market, Annals of Eco-
     nomics and Finance 1, 359–381 (2000).
227. Jiongmin Yong, Replication of American contingent claims in incomplete mar-
     kets, International Journals of Theoretical and Applied Finance, Vol. 4, No. 3
     (2001) 439–466
228. Jiongmin Yong (ed.), Recent developments in mathematical ﬁnance. Proceed-
     ings of the international conference on mathematical ﬁnance, Shanghai, China,
     May 10-13, 2001. Singapore: World Scientiﬁc. 28-38 (2002).
        Nonlinear Expectations, Nonlinear Evaluations and Risk Measures         253

229. Jiongmin Yong, Forward-backward stochastic diﬀerential equation: A useful
     tool for mathematical ﬁnance and other related ﬁelds. Surv. Math. Ind. 10,
     No.3, 175-229 (2002).
230. Jiongmin Yong, A leader-follower stochastic linear quadratic diﬀerential game
     SIAM J CONTROL OPTIM 41 (4): 1015-1041 DEC 3 2002
231. Jiongmin Yong, Degenerate BSDEs and FESDEs with applications in mathe-
     matical ﬁnance, Insur Math Econ 32 (3): 483-483 Jul 21 2003
232. Zengting Yuan, Solution of generalized backward stochastic diﬀerential equa-
     tions with jumps. (Chinese. English summary) J. Math., Wuhan Univ. 20,
     No.2, 217-221 (2000).
233. Nl Zaidi, N.Lanjri, D.Nualart, Backward stochastic diﬀerential equations in
     the plane. Potential Anal. 16, No.4, 373-386 (2002).
234. NL Zaidi, A class of two-parameter backward stochastic diﬀerential equations
     driven by a Brownian sheet, Stoch Anal Appl 20 (4): 883-899 Jul 2002
235. Guichang Zhang, Random walk and a discrete backward stochastic diﬀerential
     equation. (Chinese. English summary) Math. Appl. 15, No.2, 76-79 (2002).
236. Yinnan Zhang, Weian Zheng, Discretizing a backward stochastic diﬀerential
     equation. Int. J. Math. Math. Sci. 32, No.2, 103-116 (2002).
237. Liuyi Zhong, Minghao Xu, Local existence and uniqueness of adapted solutions
     of backward stochastic evolution equations. (Chinese. English summary) J.
     Math., Wuhan Univ. 16, No.4, 417-422 (1996).
238. Liuyi Zhong, Minghao Xu, Global existence and uniqueness of adapted solution
     of a backward stochastic evolution equation in Hilbert space. (Chinese. English
     summary) J. Wuhan Univ., Nat. Sci. Ed. 43, No.5, 591-597 (1997).
239. Shaofu Zhou, Zhiyuan Huang, Zigang Zhang, Development of backward
     stochastic diﬀerential equation and its applications.
     (Chinese. English summary) Math. Appl. 15, No.2, 9-13 (2002).
Utility Maximisation
in Incomplete Markets

Walter Schachermayer

Financial and Actuarial Mathematics, Vienna University of Technology,
Wiedner Hauptstrasse 8/105-1, 1040 Vienna, Austria
wschach@fam.tuwien.ac.at

Preface

In these lectures we give a short introduction to the basic concepts of Math-
ematical Finance, focusing on the notion of “no arbitrage”, and subsequently
apply these notions to the problem of optimizing dynamically a portfolio in
an incomplete ﬁnancial market with respect to a given utility function U .
    In the ﬁrst part we mainly restrict ourselves to the situation where the un-
derlying probability space (Ω, F , P) is ﬁnite, in order to reduce the functional-
analytic diﬃculties to simple linear algebra. In my opinion, this allows — at
least as a ﬁrst step — for a clearer picture of the Mathematical Finance issues.
    We then treat the problem of utility maximisation and, in particluar, its
duality theory for a general semi-martingale models of ﬁnancial market. Here
we are rather informal and concentrate mainly on explaining the basic ideas,
e.g., the notion of the asymptotic elasticity of a utility function U .
    These notes are largely based on the surveys [S 03] and [S 01a] and, in
particular, on the notes taken by P. Guasoni during my Cattedra Galileiana
lectures at Scuola Normale Superiore in Pisa [S 04a]. We also refer to the
original papers [KS 99] and [S 01] for more detailed information on the topics
of the present lectures.




1 Problem Setting
We consider a model of a security market which consists of d + 1 assets.
We denote by S = ((Sti )1≤t≤T )0≤i≤d the price process of the d stocks and

    Support by the Austrian Science Foundation (FWF) under the Wittgenstein-
    Preis program Z36 and grant P15889 and by the Austrian National Bank under
    grant ’Jubiläumsfondprojekt Number 9486’ is gratefully acknowledged.


K. Back et al.: LNM 1856, M. Frittelli and W. Runggaldier (Eds.), pp. 255–293, 2004.

c Springer-Verlag Berlin Heidelberg 2004
256    Walter Schachermayer

suppose that the price of the asset S 0 , called the “bond” or “cash account”,
is constant, i.e.,St0 ≡ 1. The latter assumption does not restrict the generality
of the model as we always may choose the bond as numéraire, i.e., we may
express the values of the other assets in units of the “bond”. In other words,
((Sti )0≤t≤T )1≤i≤d , is an Rd -valued semi-martingale modeling the discounted
price process of d risky assets.
    The process S is assumed to be a semimartingale, based on and adapted
to a ﬁltered probability space (Ω, F , (Ft )0≤t≤T , P) satisfying the usual condi-
tions of saturatedness and right continuity. As usual in mathematical ﬁnance,
we consider a ﬁnite horizon T , but we remark that our results can also be
extended to the case of an inﬁnite horizon.
    In section 2 we shall consider the case of ﬁnite Ω, in which case the paths
of S are constant except for jumps at a ﬁnite number of times. We then can
write S as (St )Tt=0 = (S0 , S1 , . . . , ST ), for some T ∈ N.
    The assumption that the bond is constant is mainly chosen for notational
convenience as it allows for a compact description of self-ﬁnancing portfolios:
a self-ﬁnancing portfolio Π is deﬁned as a pair (x, H), where the constant x
is the initial value of the portfolio and H = (H i )1≤i≤d is a predictable S-
integrable process specifying the amount of each asset held in the portfolio.
The value process X = (Xt )0≤t≤T of such a portfolio Π at time t is given by
                                             t
                     Xt = X0 +                   Hu dSu ,     0 ≤ t ≤ T,       (1)
                                         0

where X0 = x and the integral refers to stochastic integration in Rd .
    In order to rule out doubling strategies and similar schemes generating
arbitrage-proﬁts (by going deeply into the red) we follow Harrison and Pliska
([HP 81], see also [DS 94]), calling a predictable, S-integrable process admis-
sible, if there is a constant C ∈ R + such that, almost surely, we have
                                   t
                 (H · S)t :=           Hu dSu ≥ −C,           for 0 ≤ t ≤ T.   (2)
                               0

    Let us illustrate these general concepts in the case of an Rd -valued process
S = (St )Tt=0 in ﬁnite, discrete time {0, 1, . . . , T } adapted to the ﬁltration
(Ft )Tt=0 . In this case each Rd -valued process (Ht )Tt=1 , which is predictable
(i.e. each Ht is Ft−1 -measurable), is S-integrable, and the stochastic integral
reduces to a ﬁnite sum
                                                 t
                        (H · S)t =                   Hu dSu                    (3)
                                           0
                                           
                                           t
                                       =             Hu ∆Su                    (4)
                                           u=1
                                           t
                                       =             Hu (Su − Su−1 ),          (5)
                                           u=1
                                 Utility Maximisation in Incomplete Markets        257

where Hu ∆Su denotes the inner product of the vectors Hu and ∆Su = Su −
Su−1 in Rd , i.e.

                                       
                                       d
                           Hu ∆Su =          Huj (Suj − Suj−1 ).                   (6)
                                       j=1

   Of course, each such trading strategy H is admissible if the underlying
probability space Ω is ﬁnite.
    Passing again to the general setting of an Rd -valued semi-martingale
S = (St )0≤t≤T we denote as in [KS 99] by Me (S) (resp. Ma (S)) the set
of probability measures Q equivalent to P (resp. absolutely continuous with
respect to P) such that for each admissible integrand H, the process H · S is
a local martingale under Q.
    We shall assume the following version of the no-arbitrage condition on S:

Assumption 1.1 The set Me (S) is not empty.2

   In these notes we shall mainly be interested in the case when Me (S) is
not reduced to a singleton, i.e., the case of an incomplete ﬁnancial market.
    After having speciﬁed the process S modeling the ﬁnancial market we now
deﬁne the function U (x) modeling the utility of an agent’s wealth x at the
terminal time T .
    We make the classical assumptions that U : R → R ∪ {−∞} is increasing
on R, continuous on {U > −∞}, diﬀerentiable and strictly concave on the
interior of {U > −∞}, and that marginal utility tends to zero when wealth
tends to inﬁnity, i.e.,
                          U  (∞) := lim U  (x) = 0.                    (7)
                                         x→∞

    These assumptions make good sense economically and it is clear that the
requirement (7) of marginal utility decreasing to zero, as x tends to inﬁn-
ity, is necessary, if one is aiming for a general existence theorem for optimal
investment.
2
    If follows from [DS 94] and [DS 98] that Assumption 1.1 is equivalent to the condi-
    tion of “no free lunch with vanishing risk”. This property can also be equivalently
    characterised in terms of the existence of a measure Q ∼ P such that the process
    S itself (rather than the integrals H · S for admissible integrands) is “something
    like a martingale”. The precise notion in the general semi-martingale setting is
    that S is a sigma-martingale under Q (see [DS 98]); in the case when S is locally
    bounded (resp. bounded) the term “sigma-martingale” may be replaced by the
    more familiar term “local martingale” (resp. “martingale”).
    Readers who are not too enthusiastic about the rather subtle distinctions be-
    tween martingales, local martingales and sigma-martingales may ﬁnd some relief
    by noting that, in the case of ﬁnite Ω, or, more generally, for bounded processes
    S, these three notions coincide.
258      Walter Schachermayer

   As regards the behavior of the (marginal) utility at the other end of the
wealth scale we shall distinguish two cases.
Case 1 (negative wealth not allowed): in this setting we assume that U
satiﬁes the conditions U (x) = −∞, for x < 0, while U (x) > −∞, for x > 0,
and the so-called Inada condition

                              U  (0) := lim U  (x) = ∞.                (8)
                                        x   0


Case 2 (negative wealth allowed): in this case we assume that U (x) >
−∞, for all x ∈ R, and that

                         U  (−∞) := lim U  (x) = ∞.                    (9)
                                        x   −∞


      Typical examples for case 1 are

                               U (x) = ln(x),    x > 0,                (10)

or
                         xα
                    U (x) = , α ∈ (−∞, 1) \ {0},             x > 0,    (11)
                          α
whereas a typical example for case 2 is

                     U (x) = −e−γx, γ > 0,                  x ∈ R.     (12)

   We again note that it is natural from economic considerations to require
that the marginal utility tends to inﬁnity when the wealth x tends to the
inﬁmum of its allowed values.
   For later reference we summarize our assumptions on the utility function:
Assumption 1.2 (Usual Regularity Conditions) A utility function U :
R → R ∪ {−∞} satisﬁes the usual regularity conditions if it is increasing
on R, continuous on {U > −∞}, diﬀerentiable and strictly concave on the
interior of {U > −∞}, and satisﬁes

                              U  (∞) := lim U  (x) = 0.              (13)
                                        x→∞

   Denoting by dom(U ) the interior of {U > −∞}, we assume that we have
one of the two following cases.
Case 1: dom(U ) =]0, ∞[ in which case U satisﬁes the condition

                              U  (0) := lim U  (x) = ∞.              (14)
                                        x   0


Case 2: dom(U ) = R in which case U satisﬁes

                         U  (−∞) := lim U  (x) = ∞.                  (15)
                                        x   −∞
                                     Utility Maximisation in Incomplete Markets      259

   We now can give a precise meaning to the problem of maximizing the
expected utility of terminal wealth. Deﬁne the value function

                u(x) := sup E [U (x + (H · S)T )] , x ∈ dom(U ),                    (16)
                          H∈H

where H ranges through the family H of admissible S-integrable trading
strategies. To exclude trivial cases we shall assume that the value function
u is not degenerate:

Assumption 1.3

                   u(x) < sup U (ξ),        for some    x ∈ dom(U ).                (17)
                             ξ

    Since u is clearly increasing, and U (y) ≤ U (x)+U  (x)(y −x) for any y > x,
this assumption implies that

                     u(x) < sup U (ξ),        for all x ∈ dom(U ).                  (18)
                                 ξ

    Under appropriate hypotheses (e.g., when Ω is ﬁnite) Assumptions 1.1 and
1.2 already imply Assumption 1.3.


2 Models on Finite Probability Spaces

In order to reduce the technical diﬃculties of the theory of utility maximiza-
tion to a minimum, we assume throughout this section that the probabil-
ity space Ω will be ﬁnite, say, Ω = {ω1 , ω2 , . . . , ωN }. This assumption im-
plies that all the diﬀerences among the spaces L∞ (Ω, F , P), L1 (Ω, F , P) and
L0 (Ω, F , P) disappear, as all these spaces are simply isomorphic to RN . Hence
all the functional analysis reduces to simple linear algebra in the setting of
the present section.
    Nevertheless we shall write L∞ (Ω, F , P), L1 (Ω, F , P) etc. below (knowing
very well that these spaces are isomorphic in the present setting) to indicate,
what we shall encounter in the setting of the general theory.

Definition 2.1. A model of a ﬁnite ﬁnancial market is an Rd+1 -valued
stochastic process S = (S)Tt=0 = (St0 , St1 , . . . , Std )Tt=0 , based on and adapted to
the ﬁltered stochastic base (Ω, F , (F )Tt=0 , P). Without loss of generality we as-
sume that F0 is trivial, that FT = F is the power set of Ω, and that P[ωn ] > 0,
for all 1 ≤ n ≤ N . We assume that the zero coordinate S 0 , which we call the
cash account, satisﬁes St0 ≡ 1, for t = 0, 1, . . . , T . The letter ∆St denotes the
increment St − St−1 .

Definition 2.2. H denotes the set of trading strategies for the ﬁnancial mar-
ket S.
260     Walter Schachermayer

An element H ∈ H is an Rd - valued process (Ht )Tt=1 = (Ht1 , Ht2 , . . . , Htd )Tt=1
which is predictable, i.e. each Ht is Ft−1 - measurable.
    We then deﬁne the stochastic integral (H ·S) as the R-valued process ((H ·
S)t )Tt=0 given by

                                 
                                 t
                    (H · S)t =         (Hk , ∆Sk ), t = 0, . . . , T,           (19)
                                 k=1

where ( . , . ) denotes the inner product in Rd .

Definition 2.3. We call the subspace K of L0 (Ω, F , P) deﬁned by

                             K = {(H · S)T : H ∈ H}                             (20)

the set of contingent claims attainable at price 0.

    The economic interpretation is the following: the random variables f =
(H ·S)T , for some H ∈ H, are precisely those contingent claims, i.e., the pay-
oﬀ functions at time T depending on ω ∈ Ω in an FT -measurable way, that an
economic agent may replicate with zero initial investment, by pursuing some
predictable trading strategy H.
    For a ∈ R, we call the set of contingent claims attainable at price a the
aﬃne space Ka obtained by shifting K by the constant function a1, in other
words the random variables of the form a + (H·S)T , for some trading strategy
H. Again the economic interpretation is that these are precisely the contingent
claims that an economic agent may replicate with an initial investment of a
by pursuing some predictable trading strategy H.

Definition 2.4. We call the convex cone C in L∞ (Ω, F , P) deﬁned by

              C = {g ∈ L∞ (Ω, F , P) s.t. there is f ∈ K, f ≥ g} .              (21)

the set of contingent claims super-replicable at price 0.

    Economically speaking, a contingent claim g ∈ L∞ (Ω, F , P) is super-
replicable at price 0, if we can achieve it with zero net investment, subsequently
pursuing some predictable trading strategy H — thus arriving at some con-
tingent claim f — and then, possibly, “throwing away money” to arrive at g.
This operation of “throwing away money” may seem awkward at this stage,
but we shall see later that the set C plays an important role in the develop-
ment of the theory. Observe that C is a convex cone containing the negative
orthant L∞ − (Ω, F , P). Again we may deﬁne Ca as the set of contingent claims
super-replicable at price a obtained by shifting C by the constant function a1.

Definition 2.5. A ﬁnancial market S satiﬁes the no-arbitrage condition
(NA) if
                        K ∩ L0+ (Ω, F , P) = {0}                  (22)
                               Utility Maximisation in Incomplete Markets    261

or, equivalently,
                             C ∩ L∞
                                  + (Ω, F , P) = {0}                        (23)
where 0 denotes the function identically equal to zero.

    In other words we now have formalized the concept of an arbitrage possi-
bility: it consists of the existence of a trading strategy H such that — starting
from an initial investment zero — the resulting contingent claim f = (H ·S)T
is non-negative and not identically equal to zero. If a ﬁnancial market does
not allow for arbitrage we say it satisﬁes the no-arbitrage condition (NA).

Definition 2.6. A probability measure Q on (Ω, F ) is called an equivalent
martingale measure for S, if Q ∼ P and S is a martingale under Q.

    We denote by Me (S) the set of equivalent martingale probability measures
and by Ma (S) the set of all (not necessarily equivalent) martingale proba-
bility measures. The letter a stands for “absolutely continuous with respect
to P” which in the present setting (ﬁnite Ω and P having full support) au-
tomatically holds true, but which will be of relevance for general probability
spaces (Ω, F , P) later. We shall often identify a measure Q on (Ω, F ) with
                                       1
its Radon-Nikodym derivative dQdP ∈ L (Ω, F , P).

Lemma 2.1. For a probability measure Q on (Ω, F ) the following are equiv-
alent:
  (i) Q ∈ Ma (S),
 (ii) EQ [f ] = 0, for all f ∈ K,
(iii) EQ [g] ≤ 0, for all g ∈ C.

Proof The equivalences are rather trivial, as (ii) is tantamount to the very
deﬁnition of S being a martingale under Q, and the equivalence of (ii) and
(iii) is straightforward.                                                 
   After having ﬁxed these formalities we may formulate and prove the central
result of the theory of pricing and hedging by no-arbitrage, sometimes called
the “fundamental theorem of asset pricing”, which in its present form (i.e.,
ﬁnite Ω) is due to Harrison and Pliska [HP 81].

Theorem 2.1 (Fundamental Theorem of Asset Pricing). For a ﬁnan-
cial market S modeled on a ﬁnite stochastic base (Ω, F , (Ft )Tt=0 , P) the fol-
lowing are equivalent:
 (i) S satisﬁes (NA).
(ii) Me (S) = ∅.
262    Walter Schachermayer

Proof (ii) ⇒ (i): This is the obvious implication. If there is some Q ∈ Me (S)
then by lemma 2.1 we have that

                           EQ [g] ≤ 0,      for g ∈ C.                    (24)

On the other hand, if there were g ∈ C∩L∞
                                        + , g = 0, then, using the assumption
that Q is equivalent to P, we would have

                                    EQ [g] > 0,                           (25)

a contradiction.
    (i) ⇒ (ii) This implication is the important message of the theorem which
will allow us to link the no-arbitrage arguments with martingale theory. We
give a functional analytic existence proof, which will be generalizable — in
spirit — to more general situations.
    By assumption the space K intersects L∞   + only at 0. We want to separate
the disjoint convex sets L∞ + \{0} and K by a hyperplane induced by a linear
functional Q ∈ L1 (Ω, F , P) which is strictly positive on L∞  + \{0}. Unfortu-
nately this is a situation, where the usual versions of the separation theorem
(i.e., the Hahn-Banach Theorem) do not apply (even in ﬁnite dimensions!).
Indeed, one usually assumes that one of the convex sets is compact in order
to obtain a strict separation.
    One way to overcome this diﬃculty (in ﬁnite dimension) is to consider the
                                                 ∞
                                         n=1 in L (Ω, F , P) i.e.
convex hull of the unit vectors (1{ωn } )N
                        N                                      2
                                                    
                                                     N
                 P :=          µn 1{ωn } : µn ≥ 0,         µn = 1 .       (26)
                         n=1                         n=1

   This is a convex, compact subset of Lı+ (Ω, F , P) and, by the (NA) as-
sumption, disjoint from K. Hence we may strictly separate the sets P and K
by a linear functional Q ∈ Lı (Ω, F , P)∗ = L1 (Ω, F , P), i.e., ﬁnd α < β such
that

                     EQ [f ] = Q, f  ≤ α        for f ∈ K,              (27)
                     EQ [h] = Q, h ≥ β          for h ∈ P.

    As K is a linear space, we have α ≥ 0 and may, in fact, replace α by
0. Hence β > 0. Therefore Q, 1 > 0, and we may normalize Q such that
Q, 1 = 1. As Q is strictly positive on each 1{ωn } , we therefore have found
a probability measure Q on (Ω, F ) equivalent to P such that condition (ii)
of lemma 2.1 holds true. In other words, we found an equivalent martingale
measure Q for the process S.                                                

Corollary 2.1. Let S satisfy (NA) and f ∈ L∞ (Ω, F , P) be an attainable
contingent claim so that
                               Utility Maximisation in Incomplete Markets      263

                                 f = a + (H · S)T ,                           (28)
for some a ∈ R and some trading strategy H.
    Then the constant a and the process (H · S) are uniquely determined by
(28) and satisfy, for every Q ∈ Me (S),

     a = EQ [f ],    and    a + (H · S)t = EQ [f |Ft ]   for   0 ≤ t ≤ T.     (29)

Proof As regards the uniqueness of the constant a ∈ R, suppose that there
are two representations f = a1 +(H 1 ·S)T and f = a2 +(H 2 ·S)T with a1 = a2 .
Assuming w.l.o.g. that a1 > a2 we ﬁnd an obvious arbitrage possibility: we
have a1 − a2 = ((H 1 − H 2 ) · S)T , i.e. the trading strategy H 1 − H 2 produces
a strictly positive result at time T, a contradiction to (NA).
    As regards the uniqueness or the process H·S we simply apply a conditional
version of the previous argument: assume that f = a + (H 1 · S)T and f =
a + (H 2 ·S)T such that the processes H 1 ·S amd H 2 ·S are not identical. Then
there is 0 < t < T such that (H 1 · S)t = (H 2 · S)t ; w.l.g. A := {(H 1 · S)t >
(H 2 · S)t } is a non-empty event, which clearly is in Ft . Hence, using the fact
that (H 1 ·S)T = (H 2 ·S)T , the trading strategy H := (H 2 − H 1 )χA ·χ]t,T ] is a
predictable process producing an arbitrage, as (H · S)T = 0 outside A, while
(H · S)T = (H 1 · S)t − (H 2 · S)t > 0 on A, which again contradicts (NA).
    Finally, the equations in (29) result from the fact that, for every predictable
process H and every Q ∈ Ma (S), the process H ·S is a Q-martingale. Noting
that, for a measure Q ∼ P, the conditional expectation EQ [f |Ft ] is P-a.s.
well-deﬁned we thus obtain (29) for each Q ∈ Me (S).                            
   Denote by cone(Me (S)) and cone(Ma (S)) the cones generated by the
convex sets Me (S) and Ma (S) respectively. The subsequent result clariﬁes
the polar relation between these cones and the cone C. Recall (see, e.g., [S 66])
that, for a pair (E, E  ) of vector spaces in separating duality via the scalar
product ., ., the polar C 0 of a set C in E is deﬁned as

                    C 0 = {g ∈ E  : f, g ≤ 1, for all f ∈ C} .             (30)

    In the case when C is closed under multiplication with positive scalars
(e.g., if C is a convex cone) the polar C 0 may equivalently be deﬁned by

                    C 0 = {g ∈ E  : f, g ≤ 0, for all f ∈ C} .             (31)

    The bipolar theorem (see, e.g., [S 66]) states that the bipolar C 00 := (C 0 )0
of a set C in E is the σ(E, E  )-closed convex hull of C.
    After these general considerations we pass to the concrete setting of the
cone C ⊆ L∞ (Ω, F , P) of contingent claims super-replicable at price 0. Note
that in our ﬁnite-dimensional setting this convex cone is closed as it is the
algebraic sum of the closed linear space K (a linear space in RN is always
closed) and the closed polyhedral cone L∞     − (Ω, F , P) (the veriﬁcation, that
the algebraic sum of a space and a polyhedral cone in RN is closed, is an
264     Walter Schachermayer

easy, but not completely trivial exercise). Hence we deduce from the bipolar
theorem, that C equals its bipolar C 00 .

Proposition 2.1. Suppose that S satisﬁes (NA). Then the polar of C is equal
to cone(Ma (S)) and Me (S) is dense in Ma (S). Hence the following asser-
tions are equivalent for an element g ∈ L∞ (Ω, F , P)
  (i) g ∈ C,
 (ii) EQ [g] ≤ 0, for all g ∈ Ma (S),
(iii) EQ [g] ≤ 0, for all g ∈ Me (S),

Proof The fact that the polar C 0 and cone(Ma (S)) coincide, follows
from lemma 2.1 and the observation that C ⊇ L∞                            0
                                                    − (Ω, F , P) implies C ⊆
  ∞
L+ (Ω, F , P). Hence the equivalence of (i) and (ii) follows from the bipolar
theorem.
    As regards the density of Me (S) in Ma (S) we ﬁrst deduce from theorem
2.1 that there is at least one Q∗ ∈ Me (S). For any Q ∈ Ma (S) and 0 < µ ≤ 1
we have that µQ∗ + (1 − µ)Q ∈ Me (S), which clearly implies the density of
Me (S) in Ma (S). The equivalence of (ii) and (iii) now is obvious.         
    The subsequent theorem tells us precisely what the principle of no arbi-
trage can tell us about the possible prices for a contingent claim f . It goes
back to the work of D. Kreps [K 81] and was subsequently extended by several
authors.
    For given f ∈ L∞ (Ω, F , P), we call a ∈ R an arbitrage-free price, if in
addition to the ﬁnancial market S, the introduction of the contingent claim,
which pays the random amount f at time t = T and can be bought or sold at
price a at time t = 0, does not create an arbitrage possibility. Mathematically
speaking, this can be formalized as follows. Let C f,a denote the cone spanned
by C and the linear space spanned by f − a; then a is an arbitrage-free price
for f if C f,a ∩ L∞
                  + (Ω, F , P) = {0}.

Theorem 2.2 (Pricing by No-Arbitrage). Assume that S satisﬁes (NA)
and let f ∈ L∞ (Ω, F , P). Deﬁne
                               
                    π(f ) = sup EQ [f ] : Q ∈ Me (S) ,         (32)
                               
                    π(f ) = inf EQ [f ] : Q ∈ Me (S) .         (33)

    Either π(f ) = π(f ), in which case f is attainable at price π(f ) := π(f ) =
π(f ), i.e. f = π(f ) + (H · S)T for some H ∈ H; therefore π(f ) is the unique
arbitrage-free price for f .
    Or π(f ) < π(f ), in which case {EQ [f ] : Q ∈ Me (S)} equals the open
interval ]π(f ), π(f )[, which in turn equals the set of arbitrage-free prices for
the contingent claim f .
                              Utility Maximisation in Incomplete Markets       265

Proof First observe that the set {EQ [f ] : Q ∈ Me (S)} forms a bounded
non-empty interval in R, which we denote by I.
    We claim that a number a is in I, iﬀ a is an arbitrage-free price for f .
Indeed, supposing that a ∈ I we may ﬁnd Q ∈ Me (S) s.t. EQ [f − a] = 0 and
therefore C f,a ∩ L∞
                   + (Ω, F , P) = {0}.
    Conversely suppose that C f,a ∩ L∞ + (Ω, F , P) = {0}. Note that C
                                                                       f,a
                                                                           is a
closed convex cone (it is the albegraic sum of the linear space span(K, f − a)
and the closed, polyhedral cone L∞ − (Ω, F , P)). Hence by the same argument
as in the proof of theorem 2.1 there exists a probability measure Q ∼ P such
that Q|C f,a ≤ 0. This implies that EQ [f − a] = 0, i.e., a ∈ I.
    Now we deal with the boundary case: suppose that a equals the right
boundary of I, i.e., a = π(f ) ∈ I, and consider the contingent claim f − π(f );
by deﬁnition we have EQ [f − π(f )] ≤ 0, for all Q ∈ Me (S), and therefore
by proposition 2.1, that f − π(f ) ∈ C. We may ﬁnd g ∈ K such that g ≥
f − π(f ). If the sup in (32) is attained, i.e., if there is Q∗ ∈ Me (S) such
that EQ∗ [f ] = π(f ), then we have 0 = EQ∗ [g] ≥ EQ∗ [f − π(f )] = 0 which in
view of Q∗ ∼ P implies that f − π(f ) ≡ g; in other words f is attainable at
price π(f ). This in turn implies that EQ [f ] = π(f ), for all Q ∈ Me (S), and
therefore I is reduced to the singleton {π(f )}.
    Hence, if π(f ) < π(f ), π(f ) connot belong to the interval I, which is there-
fore open on the right hand side. Passing from f to −f , we obtain the analo-
gous result for the left hand side of I, which therefore equals I =]π(f ), π(f )[.


Corollary 2.2 (complete financial markets). For a ﬁnancial market S
satisfying the no-arbitrage condition (NA) the following are equivalent:
 (i) Me (S) consists of a single element Q.
(ii) Each f ∈ L∞ (Ω, F , P) may be represented as

                f = a + (H · S)T ,     for some a ∈ R, and H ∈ H.             (34)

   In this case a = EQ [f ], the stochastic integral (H · S) is unique and we
have that
                EQ [f |Ft ] = EQ [f ] + (H · S)t , t = 0, . . . , T.      (35)

Proof The implication (i) ⇒ (ii) immediately follows from the preceding
theorem; for the implication (ii) ⇒ (i), note that, (34) implies that, for el-
ements Q1 , Q2 ∈ Ma (S), we have EQ1 [f ] = a = EQ2 [f ]; hence it suﬃces
to note that if Me (S) contains two diﬀerent elements Q1 , Q2 , we may ﬁnd
f ∈ L∞ (Ω, F , P) s.t. EQ1 [f ] = EQ2 [f ].                                
266    Walter Schachermayer

2.1 Utility Maximization

We are now ready to study utility maximization problems with the convex
duality approach.

The complete Case (Arrow)

As a ﬁrst case we analyze the situation of a complete ﬁnancial market (Corol-
lary 2.2 above), i.e., the set Me (S) of equivalent probability measures under
which S is a martingale is reduced to a singleton {Q}. In this setting consider
the Arrow assets 1{ωn } , which pay 1 unit of the numéraire at time T , when
ωn turns out to be the true state of the world, and 0 otherwise. In view of
our normalization of the numéraire St0 ≡ 1, we get for the price of the Arrow
assets at time t = 0 the relation
                                     
                            EQ 1{ωn } = Q[ωn ] = qn ,                      (36)

and by 2.2 each Arrow asset 1{ωn } may be represented as 1{ωn } = Q[ωn ] +
(H · S)T , for some predictable trading strategy H ∈ H.
   Hence, for ﬁxed initial endowment x ∈ dom(U ), the utility maximization
problem (16) above may simply be written as

                                        
                                        N
                     EP [U (XT )] =           pn U (ξn ) → max!           (37)
                                        n=1

                                        
                                        N
                         EQ [XT ] =           qn ξn   ≤ x.                (38)
                                        n=1

    To verify that (37) and (38) indeed are equivalent to the original problem
(16) above (in the present ﬁnite, complete case), note that by Theorem 2.2
a random variable (XT (ωn ))N        n=1 = (ξ  )N can be dominated by a random
                                           nT n=1                     N
variable of the form x+(H·S)T = x+ t=1 Ht ∆St iﬀ EQ [XT ] = n=1 qn ξn ≤
x. This basic relation has a particularly evident interpretation in the present
setting, as qn is simply the price of the Arrow asset 1{ωn } .
    We have written ξn for XT (ωn ) to stress that (37) simply is a concave
maximization problem in RN with one linear constraint. To solve it, we form
the Lagrangian
                                                         , N          !
                                       N                 
              L(ξ1 , . . . , ξN , y) =    pn U (ξn ) − y     qn ξn − x     (39)
                                  n=1                   n=1
                                  
                                  N                          
                              =         pn U (ξn ) − y pqnn ξn + yx.      (40)
                                  n=1
                                    Utility Maximisation in Incomplete Markets               267

   We have used the letter y ≥ 0 instead of the usual λ ≥ 0 for the Lagrange
multiplier; the reason is the dual relation between x and y which will become
apparent in a moment.
   Write
               Φ(ξ1 , . . . , ξN ) = inf L(ξ1 , . . . , ξN , y), ξn ∈ dom(U ),               (41)
                                     y>0

and
                        Ψ (y) =     sup L(ξ1 , . . . , ξN , y), y ≥ 0.                       (42)
                                  ξ1 ,...,ξN

Note that we have
                                                                  
                                                                  N
             sup Φ(ξ1 , . . . , ξN ) =               sup                pn U (ξn ) = u(x).   (43)
           ξ1 ,...,ξN                                             n=1
                                                   ξ1 ,...,ξN
                                               N
                                                   n=1 qn ξn ≤x

                                                                 N
Indeed, if (ξ1 , . . . , ξN ) is in the admissible region
                                              N                    n=1 qn ξn ≤ x then
Φ(ξ1 , . . . , ξN ) = L(ξ1 , . . . , ξN , 0) = n=1 pn U (ξn ). On the other hand, if
                           N
(ξ1 , . . . , ξN ) satisﬁes n=1 qn ξn > x, then by letting y → ∞ in (41) we note
that Φ(ξ1 , . . . , ξN ) = −∞.
     As regards the function Ψ (y) we make the following pleasant observation
which is the basic reason for the eﬃciency of the duality approach: using
the form (40) of the Lagrangian and ﬁxing y > 0, the optimization problem
appearing in (42) splits into N independent optimization problems over R
                          U (ξn ) − y pqnn ξn → max!,              ξn ∈ R.                   (44)
   In fact, these one-dimensional optimization problems are of a very conve-
nient form: recall (see, e.g., [R 70], [ET 76] or [KLSX 91]) that, for a concave
function U : R → R ∪ {−∞}, the conjugate function V (which is just the
Legendre-transform of x → −U (−x)) is deﬁned by
                           V (η) = sup [U (ξ) − ηξ] , η > 0.                                 (45)
                                       ξ∈R

Definition 2.7. We say that the function V : R+ → R, conjugate to the
function U , satisﬁes the usual regularity assumptions, if V is ﬁnitely valued,
diﬀerentiable, strictly convex on ]0, ı[, and satisﬁes
                               V  (0) := lim V  (y) = −ı.                                  (46)
                                               y    0

As regards the behavior of V at inﬁnity, we have to distinguish between case 1
and case 2 in Assumption 1.2 above:
              case 1:     lim V (y) = lim U (x)                 and      lim V  (y) = 0     (47)
                         y→ı               x→0                          y→ı

              case 2:     lim V (y) = ı                     and       lim V  (y) = ı        (48)
                         y→ı                                          y→ı
268      Walter Schachermayer

      We have the following wellknown fact (see [R 70] or [ET 76]).

Proposition 2.2. If U satisﬁes Assumption 1.2, then its conjugate function
V satisﬁes the the inversion formula

                       U (ξ) = inf [V (η) + ηξ] ,    ξ ∈ dom(U )               (49)
                                η

and satisﬁes the regularity assumptions in Deﬁnition 2.7. In addition, −V  (y)
is the inverse function of U  (x). Conversely, if V satisﬁes the regulatory as-
sumptions of Deﬁnition 2.7, then U deﬁned by (49) satisﬁes Assumption 1.2.
    Following [KLS 87] we denote −V  = I (for “inverse” function).

Proof It follows from Assumption 1.2 that V is ﬁnitely valued on ]0, ∞[.
Note that we have that

             U (x) ≤ a + yx ∀x ∈ dom(U )              ⇐⇒       V (y) ≤ a       (50)

which implies the inversion formula above. In turn, this formula shows that V
is the supremum of aﬃne functions, and therefore convex. Since U is strictly
concave and diﬀerentiable, the maximizer ξ3 = ξ(µ) in (45) solves the ﬁrst-
order condition U  (ξ(η)) = η. Also, we have that U  is a continuous bijection
between {U > −∞} and + . This observation and the inversion formula show
that V is both strictly convex, diﬀerentiable, and that −V  is the inverse of
U .                                                                          

Remark 2.1. Of course, U  has a good economic interpretation as the marginal
utility of an economic agent modeled by the utility function U .
      Here are some concrete examples of pairs of conjugate functions:

          U (x) = ln(x), x > 0,        V (y) = − ln(y) − 1,
                     −γx
          U (x) = − e γ ,   x ∈ R, V (y) = γy (ln(y) − 1), γ > 0
                                       V (y) = 1−α
                   α                                   α
          U (x) = xα , x > 0,                   α y
                                                    α−1 , α ∈ (−∞, 1) \ {0}.

    We now apply these general facts about the Legendre transformation to
calculate Ψ (y). Using deﬁnition (45) of the conjugate function V and (40),
formula (42) becomes

                                      
                                      N               
                            Ψ (y) =         pn V y pqnn + yx                   (51)
                                      n=1
                                              
                                    = EP V y dQ
                                             dP    + yx.                       (52)

Denoting by v(y) the dual value function
                                       Utility Maximisation in Incomplete Markets                    269

                                   N           
                  v(y) := EP V y dQ
                                 dP   =   pn V y pqnn , y > 0,                                      (53)
                                                        n=1

the function v has the same qualitative properties as the function V listed
in Deﬁnition 2.7, since it is a convex combination of V calculated on linearly
scaled arguments.
    Hence by (46), (47), and (48) we ﬁnd, for ﬁxed x ∈ dom(U ), a unique
y3 = y3(x) > 0 such that v  (3
                              y (x)) = −x, which therefore is the unique minimizer
to the dual problem
                                            
                      Ψ (y) = EP V y dQ    dP    + yx = min!                  (54)

    Fixing the critical value y3(x), the concave function
                             (ξ1 , . . . , ξN ) → L(ξ1 , . . . , ξN , y3(x))                       (55)

deﬁned in (40) assumes its unique maximum at the point (ξ31 , . . . , ξ3N ) satis-
fying                                                                 
           U  (ξ3n ) = y3(x) pqnn or, equivalently, ξ3n = I y3(x) pqnn ,    (56)
so that we have
                                inf Ψ (y) = inf (v(y) + xy)                                         (57)
                               y>0              y>0
                                            = v(3
                                                y (x)) + x3    y (x)                                (58)
                                                3            3
                                            = L(ξ1 , . . . , ξN , y3(x)).                           (59)

Note that ξ3n are in dom(U ), for 1 ≤ n ≤ N , so that L is continuously diﬀer-
entiable at (ξ31 , . . . , ξ3N , y3(x)), which implies that the gradient of L vanishes at
(ξ31 , . . . , ξ3N , y3(x)) and, in particular, that ∂y∂
                                                         L(ξ1 , . . . , ξN , y)|(ξ31 ,...,ξ3N ,3y(x)) = 0.
Hence we infer from (39) and the fact that y3(x) > 0 that the constraint (38)
is binding, i.e.,
                                           N
                                               qn ξ3n = x,                                            (60)
                                            n=1
and that
                             
                             N
                                   pn U (ξ3n ) = L(ξ31 , . . . , ξ3N , y3(x)).                      (61)
                             n=1
In particular, we obtain that
                                                  
                                                  N
                                       u(x) =           pn U (ξ3n ).                                (62)
                                                  n=1
                              N
Indeed, the inequality u(x) ≥ n=1 pn U (ξ3n ) follows from (60) and (43), while
the reverse inequality follows from (61) and the fact that for all ξ1 , . . . , ξN
verifying the constraint (38)
270      Walter Schachermayer

            
            N
                  pn U (ξn ) ≤ L(ξ1 , . . . , ξN , y3(x)) ≤ L(ξ31 , . . . , ξ3N , y3(x)).   (63)
            n=1

We shall write X                               3T (x)(ωn ) = ξ3n , n = 1, . . . , N .
               3T (x) ∈ C(x) for the optimizer X
   Combining (57), (61) and (62) we note that the value functions u and v
are conjugate:

            inf (v(y) + xy) = v(3         y (x) = u(x), x ∈ dom(U ),
                                y (x)) + x3                                                 (64)
            y>0

which, by Proposition 32 the remarks after equation (53), implies that u inher-
its the properties of U listed in Assumption 1.2. The relation v  (3
                                                                    y (x)) = −x
which was used to deﬁne y3(x), therefore translates into

                             u (x) = y3(x),      for x ∈ dom(U ).                          (65)

      Let us summarize what we have proved:

Theorem 2.3 (finite Ω, complete market). Let the ﬁnancial market S =
(St )Tt=0 be deﬁned over the ﬁnite ﬁltered probability space (Ω, F , (F )Tt=0 , P)
and satisfy Me (S) = {Q}, and let the utility function U satisfy Assumption
1.2.
    Denote by u(x) and v(y) the value functions

                    u(x) =        sup     E[U (XT )],          x ∈ dom(U ),                 (66)
                               XT ∈C(x)
                                         
                           v(y) = E V y dQ
                                        dP    , y > 0.                                      (67)

We then have:
 (i) The value functions u(x) and v(y) are conjugate and u inherits the qual-
     itative properties of U listed in Assumption 1.2.
(ii) The optimizer X  3T (x) in (66) exists, is unique and satisﬁes

           3T (x) = I(y dQ ),
           X                            or, equivalently,       y dQ     3
                        dP                                        dP = U (XT (x)),          (68)

      where x ∈ dom(U ) and y > 0 are related via u (x) = y or, equivalently,
      x = −v  (y).
(iii) The following formulae for u and v  hold true:
                                                                     
                    u (x) = EP [U  (X3T (x))], v  (y) = E V  y dQ          (69)
                                                            Q       dP
                                                                        
          xu (x) = EP X   3T (x)U  (X
                                      3T (x)) , yv  (y) = EP y dQ V  y dQ .(70)
                                                                 dP      dP


Proof Items (i) and (ii) have been shown in the preceding discussion, hence
we only have to show (iii). The formulae for v  (y) in (69) and (70) immediately
follow by diﬀerentiating the relation
                              Utility Maximisation in Incomplete Markets      271

                                  N           
                  v(y) = EP V y dQ
                                dP   =   pn V y pqnn .                       (71)
                                             n=1

    Of course, the formula for v  in (70) is an obvious reformulation of the one
in (69). But we write both of them to stress their symmetry with the formulae
for u (x).
    The formula for u in (69) translates via the relations exhibited in (ii) into
the identity                                   
                                y = EP y dQ  dP ,                             (72)

while the formula for u (x) in (70) translates into
                                                    
                       v  (y)y = EP V  y dQdP   y dQ
                                                    dP ,                     (73)

which we just have seen to hold true.                                          

Remark 2.2. Firstly, let us recall the economic interpretation of (68)
                                  
                  U X  3T (x)(ωn ) = y qn , n = 1, . . . , N.               (74)
                                         pn
This equality means that, in every possible state of the world ωn , the marginal
             3T (x)(ωn )) of the wealth of an optimally investing agent at time T
utility U  (X
is proportional to the ratio of the price qn of the corresponding Arrow security
1{ωn } and the probability of its success pn = P[ωn ]. This basic relation was
analyzed in the fundamental work of K. Arrow and allows for a convincing
economic interpretation: considering for a moment the situation where this
proportionality relation fails to hold true, one immediately deduces from a
marginal variation argument that the investment of the agent cannot be opti-
mal. Indeed, by investing a little more in the more favorable asset and a little
less in the less favorable the economic agent can strictly increase expected
utility under the same budget constraint. Hence for the optimal investment
the proportionality must hold true. The above result also identiﬁes the propor-
tionality factor as y = u (x), where x is the initial endowment of the investor.
This also allows for an economic interpretation.
    Theorem 2.3 indicates an easy way to solve the utility maximization at
hand: calculate v(y) by (67), which reduces to a simple one-dimensional com-
putation; once we know v(y), the theorem provides easy formulae to calculate
all the other quantities of interest, e.g., X3T (x), u(x), u (x) etc.
    Another message of the above theorem is that the value function x →
u(x) may be viewed as a utility function as well, sharing all the qualitative
features of the original utility function U . This makes sense economically, as
the “indirect utility” function u(x) denotes the expected utility at time T
of an agent with initial endowment x, after having optimally invested in the
ﬁnancial market S.
272    Walter Schachermayer

    Let us also give an economic interpretation of the formulae for u (x) in
item (iii) along these lines: suppose the initial endowment x is varied to x + h,
for some small real number h. The economic agent may use the additional
endowment h to ﬁnance, in addition to the optimal pay-oﬀ function X     3T (x), h
                                                                     3
units of the cash account, thus ending up with the pay-oﬀ function XT (x)+h at
time T . Comparing this investment strategy to the optimal one corresponding
to the initial endowment x + h, which is X   3T (x + h), we obtain

             u(x + h) − u(x)        E[U (X3T (x + h)) − U (X
                                                           3T (x))]
          lim                = lim                                          (75)
         h→0        h          h→0                 h
                                    E[U (X3T (x) + h) − U (X
                                                           3T (x))]
                             ≥ lim                                          (76)
                               h→0                 h
                                      3T (x))].
                             = E[U  (X                                     (77)

    Using the fact that u is diﬀerentiable, and that h may be positive as well
as negative, we must have equality in (76) and therefore have found another
proof of formula (69) for u (x); the economic interpretation of this proof is
that the economic agent, who is optimally investing, is indiﬀerent of ﬁrst order
towards a (small) additional investment into the cash account.
    Playing the same game as above, but using the additional endowment
h ∈ R to ﬁnance an additional investment into the optimal portfolio X     3T (x)
                                                                    x+h 3
(assuming, for simplicity, x = 0), we arrive at the pay-oﬀ function x XT (x).
Comparing this investment with X    3T (x + h), an analogous calculation as in
                                
(75) leads to the formula for u (x) displayed in (70). The interpretation now
is, that the optimally investing economic agent is indiﬀerent of ﬁrst order
towards a marginal variation of the investment into the optimal portfolio.
    It now becomes clear that formulae (69) and (70) for u (x) are just special
cases of a more general principle: for each f ∈ L∞ (Ω, F , P) we have

                                      3T (x) + hf ) − U (X
                               EP [U (X                  3T (x))]
            EQ [f ]u (x) = lim                                   .         (78)
                           h→0                 h
   The proof of this formula again is along the lines of (75) and the inter-
pretation is the following: by investing an additional endowment hEQ [f ] to
ﬁnance the contingent claim hf , the increase in expected utility is of ﬁrst
order equal to hEQ [f ]u (x); hence again the economic agent is of ﬁrst order
indiﬀerent towards an additional investment into the contingent claim f .

The Incomplete Case

We now drop the assumption that the set Me (S) of equivalent martingale
measures is reduced to a singleton (but we still remain in the framework of
a ﬁnite probability space Ω) and replace it by Assumption 1.1 requiring that
Me (S) = ∅.
                                      Utility Maximisation in Incomplete Markets            273

    In this setting it follows from Theorem 2.2 that a random variable
XT (ωn ) = ξn may be dominated by a random variable of the form x + (H·S)T
                N
iﬀ EQ [XT ] = n=1 qn ξn ≤ x, for each Q = (q1 . . . , qN ) ∈ Ma (S) (or equiva-
lently, for every Q ∈ Me (S)).
    In order to reduce the inﬁnitely many constraints, where Q runs through
Ma (S), to a ﬁnite number, make the easy observation that Ma (S) is a
bounded, closed, convex polytope in RN and therefore the convex hull of
its ﬁnitely many extreme points {Q1 , . . . , QM }. Indeed, Ma (S) is given by
ﬁnitely many linear constraints. For 1 ≤ m ≤ M , we identify Qm with the
probabilites (q1m , . . . , qN
                             m
                               ).
    Fixing the initial endowment x ∈ dom(U ), we therefore may write the util-
ity maximization problem (16) similarly as in (37) as a concave optimization
problem over RN with ﬁnitely many linear constraints:
                                    
                                    N
             EP [U (XT )] =              pn U (ξn ) → max!                                  (79)
                                   n=1
                                    
                                    N
                EQm [XT ] =              qnm ξn ≤ x,              for m = 1, . . . , M.     (80)
                                   n=1

   Writing again
           
   C(x) = XT ∈ L0 (Ω, F , P) : EQ [XT ] ≤ x, for all Q ∈ Ma (S)                             (81)

we deﬁne the value function, for x ∈ dom(U ),
             u(x) = sup E [U (x + (H · S)T )] =                       sup     E[U (XT )].   (82)
                        H∈H                                       XT ∈C(x)

   The Lagrangian now is given by
           L(ξ1 , . . . , ξN , η1 , . . . , ηM )                                            (83)
                                                   , N                  !
                
                N                     
                                      M             
            =         pn U (ξn ) −          ηm            qnm ξn − x                        (84)
                n=1                   m=1           n=1
                         ,                                    !
                
                N                        
                                         M
                                           ηm q m                     
                                                                      M
            =         pn U (ξn ) −                   n
                                                         ξn       +         ηm x,           (85)
                n=1                      m=1
                                                   pn                 m=1
                where (ξ1 , . . . , ξN ) ∈ dom(U )N , (η1 , . . . , ηM ) ∈ RM
                                                                            +.              (86)
Writing y = η1 + . . . + ηM , µm = ηym , µ = (µ1 , . . . , µM ) and

                                                   
                                                   M
                                       Qµ =              µm Qm ,                            (87)
                                                   m=1

note that, when (η1 , . . . , ηM ) runs trough RM                  µ
                                                + , the pairs (y, Q ) run through
R + × M (S). Hence we may write the Lagrangian as
         a
274     Walter Schachermayer

           L(ξ1 , . . . , ξN , y, Q) ==       EP [U (XT )] − y (EQ [XT − x])
                                              N     
                                                                yqn
                                            =     pn U (ξn ) −      ξn + yx,              (88)
                                              n=1
                                                                 pn

where ξn ∈ dom(U ), y > 0, Q = (q1 , . . . , qN ) ∈ Ma (S).
   This expression is entirely analogous to (40), the only diﬀerence now be-
ing that Q runs through the set Ma (S) instead of being a ﬁxed probability
measure. Deﬁning again
                Φ(ξ1 , . . . , ξn ) =            inf         L(ξ1 , . . . , ξN , y, Q),   (89)
                                        y>0,Q∈Ma (S)

and
                       Ψ (y, Q) =          sup L(ξ1 , . . . , ξN , y, Q),                 (90)
                                        ξ1 ,...,ξN

we obtain, just as in the complete case,
                     sup Φ(ξ1 , . . . , ξN ) = u(x), x ∈ dom(U ),                         (91)
                   ξ1 ,...,ξN

and
                         
                         N             
                                           yqn
           Ψ (y, Q) =           pn V                 + yx,       y > 0, Q ∈ Ma (S),       (92)
                         n=1
                                           pn
where (q1 , . . . , qN ) denotes the probabilities of Q ∈ Ma (S). The minimization
of Ψ will be done in two steps: ﬁrst we ﬁx y > 0 and minimize over Ma (S),
i.e.,
                            Ψ (y) :=   infa Ψ (y, Q), y > 0.                  (93)
                                        Q∈M (S)

     For ﬁxed y > 0, the continuous function Q → Ψ (y, Q) attains its minimum
on the compact set Ma (S), and the minimizer Q(y)        3      is unique by the strict
                          3
convexity of V . Writing Q(y)     q1 (y), . . . , q3N (y)) for the minimizer, it follows
                               = (3
from V  (0) = −∞ that q3n (y) > 0, for each n = 1, . . . , N ; Indeed, suppose that
q3n (y) = 0, for some 1 ≤ n ≤ N and ﬁx any equivalent martingale measure
Q ∈ Me (S). Letting Q = Q + (1 − )Q             3 we have that Q ∈ Me (S), for
                                3
0 < < 1, and Ψ (y, Q ) < Ψ (y, Q) for > 0 suﬃciently small, a contradiction.
                  3
In other words, Q(y)   is an equivalent martingale measure for S.
     Deﬁning the dual value function v(y) by
                                                      
                                                       N
                                                      qn
                          v(y) =    inf       pn V y                                      (94)
                                 Q∈Ma (S)
                                          n=1
                                                      p n

                                 N      
                                            q3n (y)
                               =     pn V y                                               (95)
                                 n=1
                                              pn

we ﬁnd ourselves in an analogous situation as in the complete case above:
deﬁning again y3(x) by v  (3
                            y (x)) = −x and
                                Utility Maximisation in Incomplete Markets        275
                                      
                                             q3n (y)
                               ξ3n = I y3(x)           ,                         (96)
                                               pn

similar arguments as above apply to show that (ξ31 , . . . , ξ3N , y3(x), Q(y))
                                                                          3     is the
unique saddle-point of the Lagrangian (88) and that the value functions u and
v are conjugate.
   Let us summarize what we have found in the incomplete case:

Theorem 2.4 (finite Ω, incomplete market). Let the ﬁnancial market
S = (St )Tt=0 deﬁned over the ﬁnite ﬁltered probability space (Ω, F , (F )Tt=0 , P)
and let Me (S) = ∅, and the utility function U satisﬁes Assumptions 1.2.
   Denote by u(x) and v(y) the value functions

               u(x) = supXT ∈C(x) E[U (XT )],              x ∈ dom(U ),          (97)
                                            
               v(y) = inf Q∈Ma (S) E V y dQ
                                         dP      ,         y > 0.                (98)

We then have:
 (i) The value functions u(x) and v(y) are conjugate and u shares the quali-
     tative properties of U listed in Assumption 1.2.
(ii) The optimizers X 3T (x) and Q(y)
                                  3                                        3
                                       in (97) and (98) exist, are unique, Q(y) ∈
     M (S), and satisfy
        e

                             ,          !
                                 d 3
                                  Q(y)           3
                                                dQ(y)
                 X3T (x) = I y            ,   y       = U  (X3T (x)),       (99)
                                   dP            dP

      where x ∈ dom(U ) and y > 0 are related via u (x) = y or, equivalently,
      x = −v  (y).
(iii) The following formulae for u and v  hold true:
                                                           3 
                            3T (x))],
          u (x) = EP [U  (X               v  (y) = EQ
                                                       3 V
                                                           
                                                             y dQ(y)          (100)
                                                                dP
                                                           3         3 
        xu (x) = EP [X3T (x)U  (X
                                  3T (x))], yv  (y) = EP y dQ(y) V  y dQ(y) (101)
                                                                                .
                                                             dP          dP

Remark 2.3. Let us again interpret the formulae (100), (101) for u (x) similarly
as in Remark 2.2 above. In fact, the interpretations of these formulae as well
as their derivations remain in the incomplete case exactly the same.
    But a new and interesting phenomenon arises when we pass to the variation
of the optimal pay-oﬀ function X 3T (x) by a small unit of an arbitrary pay-oﬀ
function f ∈ L∞ (Ω, F , P). Similarly as in (78) we have the formula
                                         3T (x) + hf ) − U (X
                                  EP [U (X                  3T (x))]
            EQ(y)
             3    [f ]u (x) = lim                                   ,          (102)
                              h→0                 h
                                                     3
the only diﬀerence being that Q has been replaced by Q(y) (recall that x and
y are related via u (x) = y).
276      Walter Schachermayer

    The remarkable feature of this formula is that it does not only pertain to
variations of the form f = x + (H · S)T , i.e, contingent claims attainable at
price x, but to arbitrary contingent claims f , for which — in general — we
cannot derive the price from no arbitrage considerations.
    The economic interpretation of formula (102) is the following: the pricing
rule f → EQ(y)
             3   [f ] yields precisely those prices, at which an economic agent
with initial endowment x, utility function U and investing optimally, is indif-
ferent of ﬁrst order towards adding a (small) unit of the contingent claim f
to her portfolio X3T (x).
    In fact, one may turn the view around, and this was done by M. Davis
[D 97] (compare also the work of L. Foldes [F 90]): one may deﬁne Q(y)       3    by
(102), verify that this indeed is an equivalent martingale measure for S, and
interpret this pricing rule as “pricing by marginal utility”, which is, of course,
a classical and basic paradigm in economics.
    Let us give a proof for (102) (under the hypotheses of Theorem 2.4). One
possible strategy of proof, which also has the advantage of a nice economic
interpretation, is the idea of introducing “ﬁctitious securities” as developed
in [KLSX 91]: ﬁx x ∈ dom(U ) and y = u (x) and let (f 1 , . . . , f k ) be ﬁnitely
many elements of L∞ (Ω, F , P) such that the space K = {(H · S)T : H ∈ H},
the constant function 1, and (f 1 , . . . , f k ) linearly span L∞ (Ω, F , P). Deﬁne
the k processes

                Std+j = EQ(y)
                         3    [f j |Ft ],     j = 1, . . . , k, t = 0, . . . , T.       (103)

     Now extend the Rd+1 -valued process S = (S 0 , S 1 , . . . , S d ) to the Rd+k+1 -
valued process S = (S 0 , S 1 , . . . , S d , S d+1 , . . . , S d+k ) by adding these new co-
ordinates. By (103) we still have that S is a martingale under Q(y),               3     which
now is the unique probability under which S is a martingale, by our choice of
(f 1 , . . . , f k ) and Corollary 2.2.
     Hence we ﬁnd ourselves in the situation of Theorem 2.3. By comparing
(68) and (99) we observe that the optimal pay-oﬀ function X                     3T (x) has not
changed. Economically speaking this means that in the “completed” market
S the optimal investment may still be achieved by trading only in the ﬁrst
d + 1 assets and without touching the “ﬁctitious” securities S d+1 , . . . , S d+k .
     In particular, we now may apply formula (78) to Q = Q(y)                  3     to obtain
(102).
     Finally we remark that the pricing rule induced by Q(y)             3    is precisely such
                                                                  3
that the interpretation of the optimal investment XT (x) deﬁned in (99) (given
in Remark 2.2 in terms of marginal utility and the ratio of Arrow prices q3n (y)
and probabilities pn ) carries over to the present incomplete setting. The above
completion of the market by introducing “ﬁctitious securities” allows for an
economic interpretation of this fact.
                             Utility Maximisation in Incomplete Markets    277

3 The General Case
In the previous section we have analyzed the duality theory of the utility
maximization problem in detail and with full proofs, for the case when the
underlying probability space is ﬁnite.
    We now pass to the question under which conditions the crucial features
of the above Theorem 2.4 carry over to the general setting. In particular one
is naturally led to ask: under which conditions
•   are the optimizers X           3
                        3T (x) and Q(y) of the value functions u(x) and v(y)
    attained?
•   does the basic duality formula
                                            3 y (x))
                          U X3T (x) = y3(x) dQ(3                         (104)
                                               dP
    or, equivalently                   ,                     !
                                                  3 y (x))
                                                 dQ(3
                          3T (x) = I
                          X                y3(x)                          (105)
                                                   dP
    hold true?
•   are the value functions u(x) and v(y) conjugate?
•   does the value function u(x) still inherit the qualitative properties of U
    listed in Assumption 1.2?
•   do the formulae for u (x) and v  (y) still hold true?
   We shall see that we get aﬃrmative answers to these questions under
two provisos: ﬁrstly, one has to make an appropriate choice of the sets in
which XT and Q are allowed to vary. This choice will be diﬀerent for case 1,
where dom(U ) = R + , and case 2, where dom(U ) = R. Secondly, the utility
function U has to satisfy — in addition to Assumption 1.2 — a mild regularity
condition, namely the property of “reasonable asymptotic elasticity”.

3.1 The Reasonable Asymptotic Elasticity Condition

The essential message of the theorems below is that, assuming that U has
“reasonable asymptotic elasticity”, the duality theory works just as well as in
the case of ﬁnite Ω. On the other hand, we shall see that we do not have
to impose any regularity conditions on the underlying stochastic process S,
except for its arbitrage-freeness in the sense made precise by Assumption
1.1. We shall also see that the assumption of reasonable asymptotic elasticity
on the utility function U cannot be relaxed, even if we impose very strong
assumptions on the process S (e.g., having continuous paths and deﬁning a
complete ﬁnancial market), as we shall see below.
    Before passing to the positive results we ﬁrst analyze the notion of “rea-
sonable asymptotic elasticity” and sketch the announced counterexample.
278      Walter Schachermayer

Definition 3.1. A utility function U satisfying Assumption 1.2 is said to have
“reasonable asymptotic elasticity” if
                                                 xU  (x)
                          AE+∞ (U ) = lim sup             < 1,               (106)
                                          x→∞     U (x)
and, in case 2 of Assumption 1.2, we also have
                                             xU  (x)
                           AE−∞ (U ) = lim inf        > 1.                   (107)
                                         x→−∞ U (x)


    We recall the following lemma from [KS99, Lemma 6.1], from which it
follows that, for any concave function U such that the right hand side makes
sense, we always have that AE+∞ (U ) ≤ 1. Note that, the asymptotic elasticity
assumption requires that the strict inequality holds.

Lemma 3.1. For a strictly concave, increasing, real-valued diﬀerentiable func-
tion U the asymptotic elasticity AE(U ) is well-deﬁned and, depending on
U (∞) = limx→∞ U (x), takes its values in the following sets:

              (i) For        U (∞) = ∞ we have AE(U ) ∈ [0, 1],
              (ii) For   0 < U (∞) < ∞ we have AE(U ) = 0,
             (iii) For −∞ < U (∞) ≤ 0 we have AE(U ) ∈ [−∞, 0].

Proof (i) Using the monotonicity and positivity of U  we may estimate

                        0 ≤ xU  (x) = (x − 1)U  (x) + U  (x)
                                    ≤ [U (x) − U (1)] + U  (1)

hence, in the case U (∞) = ∞,

                           xU  (x)           U (x) − U (1) + U  (1)
             0 ≤ lim sup            ≤ lim sup                         = 1.
                  x→∞       U (x)       x→∞           U (x)

(ii) For each x0 > 0 we have

                 lim sup xU  (x) = lim supx→∞ (x − x0 )U  (x)
                  x→∞
                                   ≤ lim supx→∞ (U (x) − U (x0 )).

If U (∞) < ∞ we may choose x0 such that the right hand side becomes
arbitrary small.
                                                                          
                                                                            (x)
    (iii) We infer from U (∞) ≤ 0 that U (x) < 0, for x ∈ R+ , so that xU
                                                                        U(x) < 0,
for all x ∈ R+ .                                                                
Example 3.1.
•     For U (x) = ln x, we have AE+∞ (U ) = 0.
                               Utility Maximisation in Incomplete Markets        279
                  α
•   For U (x) = xα , we have AE+∞ (U ) = α, for α ∈ (−∞, 1) \ {0}.
•   For U (x) = lnxx for x ≥ x0 , we have AE+∞ (U ) = 1.
    The asymptotic elasticity compares as follows with other conditions used
in the literature [KLSX 91]:

Lemma 3.2. Let U be a utility function, and consider the following condi-
tions:
i) There exists x0 > 0, α < 1, β > 1 such that U  (βx) < αU  (x) for all
     x ≥ x0 .
ii) AE+∞ (U ) < 1
iii) There exist k1 , k2 and γ < 1 such that U (x) ≤ k1 + k2 xγ for all x ≥ 0.
   Then we have that i) ⇒ ii) ⇒ iii). The reverse implications do not hold
true in general.

Proof (i) ⇒ (ii) Assume (i) and let a = αβ and b = α1 > 1 and estimate,
for x > ax0 :
                                        bx
                  U (bx) = U (βx0 ) + βx0 U  (t)dt
                                        x/a
                         = U (βx0 ) + β x0 U  (βt)dt
                                          x/a
                         ≤ U (βx0 ) + αβ x0 U  (t)dt
                             = U (βx0 ) + aU ( xa ) − aU (x0 ).

It follows that criterion (ii) of corollary 6.1 in [KS99] is satisﬁed, hence
AE(U ) < 1.
     (ii) ⇒ (iii) is immediate from assertion (i) of lemma 6.3 in [KS99].
     (ii)  (i): For n ∈ N, let xn = 22 and deﬁne the function U (x) by letting
                                         n


U (xn ) = 1 − n1 and to be linear on the intervals [xn−1 , xn ]; (for 0 < x ≤ x1
continue U (x) in an arbitrary way, so that U satisﬁes (2.4)).
     Clearly U (x) fails (i) as for any β > 1 there are arbitrary large x ∈ R with
U  (βx) = U  (x). On the other hand, we have U (∞) = 1 so that AE(U ) = 0 by
                                                                                
                                                                                  (x)
Lemma 3.1. Finally, note that in this counterexample the limit limx→∞ xU       U(x)
exists and equals zero.
     The attentive reader might object that U (x) is neither strictly concave nor
diﬀerentiable. But it is obvious that one can slightly change the function to
“smooth out” the kinks and to “strictly concavify” the straight lines so that
the above conclusion still holds true.
     (iii)  (ii): Let again xn = 22 and consider the utility function U
                                       n
                                                                            4 (x) =
  1/2                                      4
x . Deﬁne U (x) by letting U (xn ) = U(xn ), for n = 0, 1, 2... and to be linear
on the intervals [xn , xn+1 ]; (for 0 < x ≤ x1 again continue U (x) in an arbitrary
way, so that U satisﬁes (2.4)).
     Clearly U (x) satisﬁes condition (iii) as U is dominated by U  4 (x) = x1/2 .
280      Walter Schachermayer

    To show that AE(U ) = 1 let x ∈]xn−1 , xn [ and calculate the marginal
utility U  at x:

                                                  22  − 22
                                                   n−1         n−2
                             U (xn ) − U (xn−1 )
                 U  (x) =                       = 2n
                                 xn − xn−1         2 − 22n−1
                        22 (1 − 2−2 )
                              n−1        n−2

                                         = 2−2 (1 + o(1)).
                                              n−1
                       = 2n
                         2 (1 − 2−2n−1 )
      On the other hand we calculate the average utility at x = xn :

                                       22
                                         n−1
                              U (xn )
                                      = 2n = 2−2 .
                                                n−1

                                xn      2
Hence
                                               xU  (x)
                        AE+∞ (U ) = lim sup             = 1.
                                        x→∞     U (x)
   As regards the lack of smoothness and strict concavity of U a similar
remark applies as in (ii)  (i) above.                               
    Let us discuss the economic meaning of the notion of reasonable asymp-
                                                                        
                                                                          (x)
totic elasticity: as H.-U. Gerber ponted out to us, the quantity xU   U(x) is the
elasticity of the function U at x. We are interested in its asymptotic behaviour.
It easily follows from Assumption 1.2 that the limits in (106) and (107) are
less (resp. bigger) than or equal to one (compare Lemma 3.1). What does it
                
                  (x)
mean that xU  U(x) tends to one, for x → ∞? It means that the ratio between
the marginal utility U  (x) and the average utility U(x)x   tends to one. A typ-
                                                    x
ical example is a function U (x) which equals ln(x)    , for x large enough; note
however, that in this example Assumption 1.2 is not violated insofar as the
marginal utility still decreases to zero for x → ∞, i.e., limx→∞ U  (x) = 0.
    If the marginal utility U  (x) is approximately equal to the average utility
U(x)
  x for large x, this means that for an economic agent, modeled by the utility
function U , the increase in utility by varying wealth from x to x + 1, when
x is large, is approximately equal to the average of the increase of utility by
changing wealth from n to n + 1, where n runs through 1, 2, . . . , x − 1 (we
assume in this argument that x is a large natural number and, w.l.o.g., that
U (1) ≈ 0). We feel that the economic intuition behind decreasing marginal
utility suggests that, for large x, the marginal utility U  (x) should be sub-
stantially smaller than the average utility U(x)
                                               x . Therefore we have denoted a
utility function, where the ratio of U  (x) and U(x)
                                                    x   becomes arbitrarily close
to one if x tends either to +∞ or −∞, as being “unreasonable”.
    P. Guasoni observed, that there is a close connection between the asymp-
totic behaviour of the elasticity of U , and the asymptotic behaviour of the rel-
ative risk aversion associated to U . Recall (see, e.g., [HL88]) that the relative
risk aversion of an agent with endowment x, whose preferences are described
by the utility function U , equals
                                Utility Maximisation in Incomplete Markets         281

                                                xU  (x)
                             RRA(U )(x) = −               .                      (108)
                                                 U  (x)

   A formal application of de l’Hôpital’s rule yields
                                                        
          xU  (x)       U  (x) + xU  (x)                xU  (x)
      lim          = lim                     = 1 −  lim   −                      (109)
     x→∞ U (x)      x→∞        U  (x)             x→∞       U  (x)

which insinuates that the asymptotic elasticity of U is less than one iﬀ the
“asymptotic relative risk aversion” is strictly positive.
    Turning the above formal argument into a precise statement, one easily
                                                
                                                   (x)                         xU  (x)
proves the following result: if limx→∞ (− xU U  (x) ) exists, then limx→∞ U(x)
exists too, and the former is strictly positive iﬀ the latter is less than one (for
details see [S 04a]). Hence “essentially” these two concepts coincide.
    On the other hand, in general (i.e. without assuming that the above limit
                                                                           
                                                                             (x)
exists), there is no way to characterize the condition lim supx→∞ xU     U(x) < 1
                                                   
                                                (x)
in terms of the asymptotic behaviour of − xU
                                           U  (x) , as x → ∞.


3.2 Existence Theorems

Let us now move to the positive results in the spirit of Theorem 2.3 and
Theorem 2.4 above. We ﬁrst consider the case where U satisﬁes case 1 of
Assumption 1.2, which was studied in [KS 99].
Case 1: dom(U ) = R + .
    The heart of the argument in the proof of Theorem 2.4 (which we now want
to extend to the general case) is to ﬁnd a saddlepoint for the Lagrangian. In
more general situations we have to apply the minimax theorem, which is cru-
cial in the theory of Lagrange multipliers. We want to extend the applicability
of the minimax theorem to the present situation. The inﬁnite-dimensional ver-
sions of the minimax theorem available in the literature (see, e.g, [ET 76] or
[St 85]) are along the following lines: Let E, F  be a pair of locally convex
vector spaces in separating duality, C ⊆ E, D ⊆ F a pair of convex subsets,
and L(x, y) a function deﬁned on C × D, concave in the ﬁrst and convex in
the second variable, having some (semi-)continuity property compatible with
the topologies of E and F (which in turn should be compatible with the du-
ality between E and F ). If (at least) one of the sets C and D is compact and
the other is complete, then one may assert the existence of a saddle point
 3 η3) ∈ C × D such that
(ξ,

                     3 η3) = sup inf L(ξ, η) = inf sup L(ξ, η).
                   L(ξ,                                                          (110)
                              ξ∈C η∈D             η∈D ξ∈C


    We try to apply this theorem to the analogue of the Lagrangian encoun-
tered in the proof of Theorem 2.4 above. Fixing x > 0 and y > 0 let us
formally write the Lagrangian (88) in the inﬁnite-dimensional setting,
282    Walter Schachermayer

                Lx,y (XT , Q) = EP [U (XT )] − y(EQ [XT − x])            (111)
                                                     
                              = EP U (XT ) − y dQdP XT + yx,             (112)

where XT runs through “all” non-negative FT -measurable functions and Q
through the set Ma (S) of absolutely continuous local martingale measures.
   To restrict the set of “all” nonnegative functions to a more amenable one,
note that inf y>0,Q∈Ma (S) Lx,y (XT , Q) > −∞ iﬀ

                     EQ [XT ] ≤ x, for all Q ∈ Ma (S).                   (113)

    Using the basic result on the super-replicability of the contingent claim
XT (see [KQ 95], [J 92], [AS 94], [DS 94], and [DS 98]), we have — as encoun-
tered in Theorem 2.2 for the ﬁnite dimensional case — that a non-negative
FT -measurable random variable XT satisﬁes (113) iﬀ there is an admissible
trading strategy H such that

                              XT ≤ x + (H · S)T .                        (114)

Hence let
                  
            C(x) = XT ∈ L0+ (Ω, FT , P) :
                    XT ≤ x + (H · S)T , for some admissible H}           (115)
                  
                 = XT ∈ L0+ (Ω, FT , P) :
                      EQ [XT ] ≤ x, for all Q ∈ Ma (S)                   (116)

and simply write C for C(1) (observe that C(x) = xC).
    We thus have found a natural set C(x) in which XT should vary when
we are mini-maxing the Lagrangian Lx,y . Dually, the set Ma (S) seems to
be the natural domain where the measure Q is allowed to vary (in fact, we
shall see later, that this set still has to be slightly enlarged). But what are
the locally convex vector spaces E and F in separating duality into which C
and Ma (S) are naturally embedded? As regards Ma (S) the natural choice
seems to be L1 (P) (by identifying a measure Q ∈ Ma (S) with its Radon-
                                                                     1
Nikodym derivative dQ dP ); note that M (S) is a closed subset of L (P), which
                                          a

is good news. On the other hand, there is no reason for C to be contained
in L∞ (P), or even in Lp (P), for any p > 0; the natural space in which C
is embedded is just L0 (Ω, FT , P), the space of all real-valued FT -measurable
functions endowed with the topology of convergence in probability.
    The situation now seems hopeless (if we don’t want to impose artiﬁcial
                                                         0          1
P-integrability assumptions on XT and/or dQ    dP ), as L (P) and L (P) are not
                                        0
in any reasonable duality; in fact, L (P) is not even a locally convex space,
hence there seems to be no hope for a good duality theory, which could serve
as a basis for the application of the minimax theorem. But the good news is
that the sets C and Ma (S) are in the positive orthant of L0 (P) and L1 (P)
                              Utility Maximisation in Incomplete Markets      283

respectively; the crucial observation is, that for f ∈ L0+ (P) and g ∈ L1+ (P), it
is possible to well-deﬁne
                           f, g := EP [f g] ∈ [0, ∞].                     (117)
    The spirit here is similar as in the very foundation of Lebesgue integration
theory: For positive measurable functions the integral is always well-deﬁned,
but possibly +∞. This does not cause any logical inconsistency.
    Similarly the bracket  . , .  deﬁned in (117) shares many of the usual
properties of a scalar product. The diﬀerence is that f, g now may assume
the value +∞ and that the map (f, g) → f, g is not continuous on L0+ (P) ×
L1+ (P), but only lower semi-continuous (this immediately follows from Fatou’s
lemma).
    At this stage it becomes clear that the role of L1+ (P) is somewhat artiﬁcial,
and it is more natural to deﬁne (117) in the general setting where f and g are
both allowed to vary in L0+ (P). The pleasant feature of the space L0 (P) in the
context of Mathematical Finance is, that it is invariant under the passage to
an equivalent measure Q, a property only shared by L∞ (P), but by no other
Lp (P), for 0 < p < ∞.
   We now can turn to the polar relation between the sets C and Ma (S). By
(114) we have, for an element XT ∈ L0+ (Ω, F , P),

      XT ∈ C ⇐⇒ EQ [XT ] = EP [XT dQ
                                  dP ] ≤ 1, for Q ∈ M (S).
                                                     a
                                                                            (118)

    Denote by D the closed, convex, solid hull of Ma (S) in L0+ (P). It is easy
to show (using, e.g., Lemma 3.3 below), that D equals
               D = {YT ∈ L0+ (Ω, FT , P) : there is
                       (Qn )∞
                            n=1 ∈ M (S) s.t. YT ≤ lim dP },
                                   a                  dQn
                                                                            (119)
                                                          n→∞

where the limn→∞ dQ   n
                    dP is understood in the sense of almost sure convergence.
We have used the letter YT for the elements of D to stress the dual relation
to the elements XT in C. In further analogy we write, for y > 0, D(y) for
yD, so that D = D(1). By (119) and Fatou’s lemma we again ﬁnd that, for
XT ∈ L0+ (Ω, F , P)

                 XT ∈ C ⇐⇒ EP [XT YT ] ≤ 1, for YT ∈ D.                     (120)
    Why did we pass to this enlargement D of the set Ma (S)? The reason is
that we now obtain a more symmetric relation between C and D: for YT ∈
L0+ (Ω, F , P) we have
                  YT ∈ D ⇐⇒ EP [XT YT ] ≤ 1, for XT ∈ C.                    (121)
    The proof of (121) relies on an adaption of the “bipolar theorem” from
the theory of locally convex spaces (see, e.g., [S 66]) to the present duality
L0+ (P), L0+ (P), which was worked out in [BS 99].
284    Walter Schachermayer

   Why is it important to deﬁne the enlargement D of Ma (S) in such a
way that (121) holds true? After all, Ma (S) is a nice, convex, closed (w.r.t.
the norm of L1 (P)) set and one may prove that, for g ∈ L1 (P) such that
EP [g] = 1,
               g ∈ Ma (S) ⇐⇒ EP [XT g] ≤ 1, for XT ∈ C.                 (122)
    The reason is that, in general, the saddle point (X    3 of the Lagrangian
                                                      3T , Q)
                                                                         3
                      3 is a probability measure; it will only satisfy E dQ
will not be such that Q                                                      ≤
                                                                           dP
1, the inequality possibly being strict. But it will turn out that Q,3 which we
                3
                Q
identify with ddP  , is always in D. In fact, the passage from Ma (S) to D is
the crucial feature in order to make the duality work in the present setting:
even for nice utility functions U , such as the logarithm, and for nice processes,
such as a continuous process (St )0≤t≤T based on the ﬁltration of two Brownian
motions, the above described phenomenon can occur: the saddle point of the
Lagrangian leads out of Ma (S).
    The set D can be characterized in several equivalent manners. We have
deﬁned D above in the abstract way as the convex, closed, solid hull of Ma (S)
and mentioned the description (119). Equivalently, one may deﬁne D as the set
of random variables YT ∈ L0+ (Ω, F , P) such that there is a process (Yt )0≤t≤T
starting at Y0 = 1 with (Yt Xt )0≤t≤T a P-supermartingale, for every non-
negative process (Xt )0≤t≤T = (x + (H · S)t )0≤t≤T , where x > 0 and H is
predictable and S-integrable. This deﬁnition was used in [KS 99]. Another
equivalent characterization was used in [CSW 01]: Consider the convex, solid
hull of Ma (S), and embed this subset of L1 (P) into the bidual L1 (P)∗∗ =
L∞ (P)∗ ; denote by Ma (S) the weak-star closure of the convex solid hull
of Ma (S) in L∞ (P)∗ . Each element of Ma (S) may be decomposed into its
regular part µr ∈ L1 (P) and its purely singular part µs ∈ L∞ (P)∗ . It turns
out that D equals the set {µr ∈ L1 (P) : µ ∈ Ma (S)}, i.e. consists of the
regular parts of the elements of Ma (S). This description has the advantage
that we may associate to the elements µr ∈ D a singular part µs , and it is
this extra information which is crucial when extending the present results to
the case of random endowment as in [CSW 01]. Compare also [HK 02], where
the case of random endowment is analyzed in full generality without using the
space L∞ (P)∗ .
    Why are the sets C and D hopeful candidates for the minimax theorem to
work out properly for a function L deﬁned on C × D? Both are closed, convex
and bounded subsets of L0+ (P). But recall that we still need some compactness
property to be able to localize the mini-maximizers (resp. maxi-minimizers)
on C (resp. D). In general, neither C nor D is compact (w.r.t. the topology
of convergence in measure), i.e., for a sequence (fn )∞                     ∞
                                                       n=1 in C (resp. (gn )n=1
in D) we cannot pass to a subsequence converging in measure. But C and D
have a property which is close to compactness and in many applications turns
out to serve just as well.
                                  Utility Maximisation in Incomplete Markets     285

Lemma 3.3. Let A be a closed, convex, bounded subset of L0+ (Ω, F , P). Then
for each sequence (hn )∞  n=1 ∈ A there exists a sequence of convex combinations
kn ∈ conv(hn , hn+1 , . . .) which converges almost surely to a function k ∈ A.

    This easy lemma (see, e.g., [DS 94, Lemma A.1.1], for a proof) is in
the spirit of the celebrated theorem of Komlos [Kom 67], stating that for
a bounded sequence (hn )∞          1
                          n=1 in L (P) there is a subsequence converging in
Cesaro-mean almost surely. The methodology of ﬁnding pointwise limits by
using convex combinations has turned out to be extremely useful as a surro-
gate for compactness. For an extensive discussion of more reﬁned versions of
the above lemma and their applications to Mathematical Finance we refer to
[DS 99].
    The application of the above lemma is the following: by passing to convex
combinations of optimizing sequences (fn )∞                    ∞
                                          n=1 in C (resp. (gn )n=1 in D), we
can always ﬁnd limits f ∈ C (resp. g ∈ D) w.r.t. almost sure convergence.
Note that the passage to convex combinations does not cost more than passing
to a subsequence in the application to convex optimization.

    We have now given suﬃcient motivation to state the central result of
[KS 99], which is the generalization of Theorem 2.4 to the semi-martingale
setting under Assumption 1.2, case 1, and having reasonable asymptotic elas-
ticity.

Theorem 3.1 ([KS 99], Theorem 2.2).
   Let the semi-martingale S = (St )0≤t≤T and the utility function U satisfy
Assumptions 1.1, 1.2 case 1 and 1.3; suppose in addition that U has reasonable
asymptotic elasticity. Deﬁne

            u(x) =     sup      E[U (XT )],   v(y) =     inf      E[V (YT )].   (123)
                     XT ∈C(x)                          YT ∈D(y)


Then we have:
 (i) The value functions u(x) and v(y) are conjugate; they are continuously
     diﬀerentiable, strictly concave (resp. convex) on ]0, ∞[ and satisfy

                     u (0) = −v  (0) = ∞,     u (∞) = v  (∞) = 0.           (124)
                    3T (x) and Y3T (y) in (123) exist, are unique and satisfy
(ii) The optimizers X
                     3T (x) = I(Y3T (y)),
                     X                         Y3T (y) = U  (X
                                                              3T (x)),          (125)

      where x > 0, y > 0 are related via u (x) = y or equivalently x = −v  (y).
(iii) We have the following relations between u , v  and X3T , Y3T respectively:
                 3       3
                                                        3        3
                                                                         
       u (x) = E XT (x)Ux(XT (x)) , x > 0, v  (y) = E YT (y)V y(YT (y)) , y > 0.
                                                                               (126)
286       Walter Schachermayer

      For the full proof of the theorem we refer to [KS 99].
     How severe is the fact that the dual optimizer Y3T (1) may fail to be the den-
sity of a probability measure (or that E[Y3T (y)] < y, for y > 0, which amounts
to the same thing)? In fact, in many respects it does not bother us at all: we
still have the basic duality relation between the primal and the dual optimizer
displayed in Theorem 3.1 (ii). Even more is true: using the terminology from
[KS 99] the product (X  3t (x)Y3t (y))0≤t≤T , where x and y satisfy u (x) = y, is a
uniformly integrable martingale. This fact can be interpreted in the following
way: by taking the optimal portfolio (X   3t (x))0≤t≤T as numéraire instead of the
original cash account, the pricing rule obtained from the dual optimizer Y3T (y)
then is induced by an equivalent martingale measure. We refer to ([KS 99],
p. 912) for a thorough discussion of this argument.
     Finally we want to draw the attention of the reader to the fact that —
comparing item (iii) of Theorem 3.1 to the corresponding item of Theorem 2.4
— we only asserted one pair of formulas for u (x) and v  (y). The reason is that,
in general, the formulae (100) do not hold true any more, the reason again
being precisely that for the dual optimizer Y3T (y) we may have E[Y3T (y)] < y.
Indeed, the validity of u (x) = E[U  (X 3T (x))] is tantamount to the validity of
        3
y = E[YT (y)].
Case 2: dom(U ) = R
    We now pass to the case of a utility function U satisfying Assumption
1.2 case 2 which is deﬁned and ﬁnitely valued on all of R. The reader should
have in mind the exponential utility U (x) = −e−γx, for γ > 0, as the typical
example.
    We want to obtain a result analogous to Theorem 3.1 also in this setting.
Roughly speaking, we get the same theorem, but the sets C and D considered
above have to be chosen in a somewhat diﬀerent way, as the optimal portfolio
X3T now may assume negative values too.
    Firstly, we have to assume throughout the rest of this section that the semi-
martingale S is locally bounded. The case of non locally bounded processes is
not yet understood and waiting for future research.
    Next we turn to the question; what is the proper deﬁnition of the set C(x)
of terminal values XT dominated by a random variable x + (H ·S)T , where H
is an “allowed” trading strategy? On the one hand we cannot be too liberal
in the choice of “allowed” trading strategies as we have to exclude doubling
strategies and similar schemes. We therefore maintain the deﬁnition of the
value function u(x) unchanged
                    u(x) = sup E [U (x + (H · S)T )] , x ∈ R,                 (127)
                            H∈H

where we still conﬁne H to run through the set H of admissible trading strate-
gies, i.e., such that the process ((H ·S)t )0≤t≤T is uniformly bounded from be-
low. This notion makes good sense economically as it describes the strategies
possible for an agent having a ﬁnite credit line.
                              Utility Maximisation in Incomplete Markets    287

    On the other hand, in general, we have no chance to ﬁnd the minimizer
H3 in (127) within the set of admissible strategies: already in the classical
cases studied by Merton ([M 69] and [M 71] where, in particular, the case of
exponential utility is solved for the Black-Scholes model) the optimal solution
     3 T to (127) is not uniformly bounded from below; this random variable
x+(H·S)
typically assumes low values with very small probability, but its essential
inﬁmum typically is minus inﬁnity.
    In [S 01] the following approach was used to cope with this diﬃculty: ﬁx
the utility function U : R → R and ﬁrst deﬁne the set CUb (x) to consist of all
random variables GT dominated by x + (H ·S)T , for some admissible trading
strategy H and such that E[U (GT )] makes sense:
                    
          CUb (x) = GT ∈ L0 (Ω, FT , P) : there is H admissible s.t.      (128)
                      GT ≤ x + (H · S)T and E[|U (GT )|] < ∞} .            (129)

   Next we deﬁne CU (x) as the set of R ∪ {+∞}-valued random variables
XT such that U (XT ) can be approximated by U (GT ) in the norm of L1 (P),
when GT runs through CUb (x):
                 
         CU (x) = XT ∈ L0 (Ω, FT , P; R ∪ {+∞}) : U (XT ) is in     (130)
                       1
                                                              
                      L (P)-closure of {U (GT ) : GT ∈ CU (x)} .
                                                        b
                                                                    (131)

   The optimization problem (127) now reads

                     u(x) =      sup       E[U (XT )], x ∈ R.              (132)
                              XT ∈CU (x)

    The set CU (x) was chosen in such a way that the value functions u(x)
deﬁned in (127) and (132) coincide; but now we have much better chances to
ﬁnd the maximizer to (132) in the set CU (x).
    Two features of the deﬁnition of CU (x) merit some comment: ﬁrstly, we
have allowed XT ∈ CU (x) to attain the value +∞; indeed, in the case when
U (∞) < ∞ (e.g., the case of exponential utility), this is natural, as the set
{U (XT ) : XT ∈ CU (x)} should equal the L1 (P)-closure of the set {U (GT ) :
GT ∈ CUb (x)}. But we shall see that — under appropriate assumptions —
the optimizer X 3T , which we are going to ﬁnd in CU (x), will almost surely be
ﬁnite.
    Secondly, the elements XT of CU (x) are only random variables and, at
this stage, they are not related to a process of the form x + (H ·S). Of course,
we ﬁnally want to ﬁnd for each XT ∈ CU (x), or at least for the optimizer X 3T ,
a predictable, S-integrable process H having “allowable” properties (in order
to exclude doubling strategies) and such that XT ≤ x + (H · S)T . We shall
prove later that — under appropriate assumptions — this is possible and give
a precise meaning to the word “allowable”.
    After having speciﬁed the proper domain CU (x) for the primal optimiza-
tion problem (132), we now pass to the question of ﬁnding the proper domain
288     Walter Schachermayer

for the dual optimization problem. Here we ﬁnd a pleasant surprise: contrary
to case 1 above, where we had to pass from the set Ma (S) to its closed, solid
hull D, it turns out that, in the present case 2, the dual optimizer always lies
in Ma (S). This fact was ﬁrst proved by F. Bellini and M. Frittelli ([BF 02]).
    We now can state the main result of [S 01]:

Theorem 3.2. [S 01, Theorem 2.2] Let the locally bounded semi - martingale
S = (St )0≤t≤T and the utility function U satisfy Assumptions 1.1, 1.2 case 2
and 1.3; suppose in addition that U has reasonable asymptotic elasticity. De-
ﬁne
                                                             
    u(x) =     sup E[U (XT )],       v(y) =    infa E V y dQdP    .     (133)
              XT ∈CU (x)                       Q∈M (S)


Then we have:
 (i) The value functions u(x) and v(y) are conjugate; they are continuously
     diﬀerentiable, strictly concave (resp. convex) on R (resp. on ]0, ∞[) and
     satisfy
                  u (−∞) = −v  (0) = v  (∞) = ∞,    u (∞) = 0.       (134)
                    3T (x) and Q(y)
(ii) The optimizers X          3    in (133) exist, are unique and satisfy
                           ,        !
                               3             3
                3T (x) = I y dQ(y) ,
                X                         y
                                            dQ(y)         3T (x)),
                                                   = U  (X            (135)
                               dP            dP

      where x ∈ R and y > 0 are related via u (x) = y or equivalently x =
      −v  (y).
(iii) We have the following relations between u , v  and X,3 Q3 respectively:
                                                        3 
                         3T (x))],
       u (x) = EP [U  (X               v  (y) = EQ
                                                    3 V
                                                        
                                                          y dQ(y)             (136)
                                                              dP
                                                        3         3 
     xu (x) = EP [X3T (x)U  (X
                               3T (x))], yv  (y) = EP y dQ(y) V  y dQ(y) . (137)
                                                          dP          dP


        3
(iv) If Q(y) ∈ Me (S) and x = −v  (y), then X 3T (x) equals the terminal value
                              3t (x) = x + (H · S)t , where H is predictable and
     of a process of the form X
     S-integrable, and such that X3 is a uniformly integrable martingale under
     3
     Q(y).

    We refer to [S 01] for a proof of this theorem and further related results.
We cannot go into the technicalities here, but a few comments on the proof
of the above theorem are in order: the technique is to reduce case 2 to case 1
by approximating the utility function U : R → R by a sequence (U (n) )∞    n=1
of utility functions U (n) : R → R ∪ {−∞} such that U (n) coincides with U
on [−n, ∞[ and equals −∞ on ] − ∞, −(n + 1)]. For ﬁxed initial endowment
x ∈ R, we then apply Theorem 3.1 to ﬁnd for each U (n) the saddle-point
                               Utility Maximisation in Incomplete Markets          289

 3 (x), Y3 (3
(X
   (n)      (n)
               yn )) ∈ CUb (x) × D(3
                                   yn ); ﬁnally we show that this sequence con-
   T       T
                 3         3
verges to some (XT (x), y3QT ) ∈ CU (x) × y3Ma (S), which then is shown to be
the saddle-point for the present problem. The details of this construction are
rather technical and lengthy (see [S 01]).
    We have assumed in item (iv) that Q(y)3     is equivalent to P and left open
                3
the case when Q(y) is only absolutely continuous to P. F. Bellini and M. Frit-
telli have observed ([BF 02]) that, in the case U (∞) = ∞ (or, equivalently,
V (0) = ∞), it follows from (133) that Q(y) 3     is equivalent to P. But there
are also other important cases where we can assert that Q(y)   3    is equivalent
to P: for example, for the case of the exponential utility U (x) = −e−γx , in
which case the dual optimization becomes the problem of ﬁnding Q     3 ∈ Ma (S)
minimizing the relative entropy with respect P, it follows from the work of
Csiszar [C 75] (compare also [R 84], [F 00], [GR 01]) that the dual optimizer
 3
Q(y)   is equivalent to P, provided only that there is at least one Q ∈ Me (S)
with ﬁnite relative entropy.
                           3
    Under the condition Q(y)     ∈ Me (S), item (iv) tells us that the optimizer
X3T ∈ CU (x) is almost surely ﬁnite and equals the terminal value of a process
                                                              3
x+(H·S), which is a uniformly integrable martingale under Q(y);     this property
qualiﬁes H to be a “allowable”, as it certainly excludes doubling strategies and
related schemes. One may turn the point of view around and take this as the
deﬁnition of the “allowable” trading strategies; this was done in [DGRSSS 02]
for the case of exponential utility, where this approach is thoroughly studied
and some other deﬁnitions of “allowable” trading strategies, over which the
primal problem may be optimized, are also investigated. Further results on
these lines were obtained in [KS 02] for the case of exponential utility, and in
[S 03a] for general utility functions.


References
[AS 94]      J.P. Ansel, C. Stricker, (1994), Couverture des actifs contingents et
             prix maximum. Ann. Inst. Henri Poincaré, Vol. 30, pp. 303–315.
[A 97]       P. Artzner, (1997), On the numeraire portfolio. Mathematics of Deriva-
             tive Securities, M. Dempster and S. Pliska, eds., Cambridge University
             Press, pp. 53–60.
[B 01]       D. Becherer, (2001), The numeraire portfolio for unbounded semi-
             martingales. Finance and Stochastics, Vol. 5, No. 3, pp. 327–341.
[BF 02]      F. Bellini, M. Frittelli, (2002), On the existence of minimax martingale
             measures. Mathematical Finance, Vol. 12, No. 1, pp. 1–21.
[BS 99]      W. Brannath, W. Schachermayer, (1999), A Bipolar Theorem for Sub-
             sets of L0+ (Ω, F, P ). Séminaire de Probabilités, Vol. XXXIII, pp. 349–
             354.
[CH 00]      P. Collin-Dufresne, J.-N. Huggonnier, (2000), Utility-based pricing of
             contingent claims subject to counterparty credit risk. Working paper
             GSIA & Department of Mathematics, Carnegie Mellon University.
290       Walter Schachermayer

[CH 89]     J.C. Cox, C.F. Huang, (1989), Optimal consumption and portfolio poli-
            cies when asset prices follow a diﬀusion process. Journal of Economic
            Theory, Vol. 49, pp. 33–83.
[CH 91]     J.C. Cox, C.F. Huang, (1991), A variational problem arising in ﬁnan-
            cial economics. Jorunal of Mathematical Economics, Vol. 20, No. 5,
            pp. 465–487.
[C 75]      I. Csiszar, (1975), I-Divergence Geometry of Probability Distributions
            and Minimization Problems. Annals of Probability, Vol. 3, No. 1,
            pp. 146–158.
[C 00]     Jakša Cvitanić, (2000) Minimizing expected loss of hedging in incom-
            plete and constrained markets, SIAM Journal on Control and Opti-
            mization, Vol. 38, No. 4, pp. 1050–1066 (electronic).
[CK 96]     J. Cvitanic, I. Karatzas, (1996), Hedging and portfolio optimization un-
            der transaction costs: A martingale approach. Mathematical Finance,
            Vol. 6, No. 2, pp. 133–165.
[CSW 01]    J. Cvitanic, W. Schachermayer, H. Wang, (2001), Utility Maximiza-
            tion in Incomplete Markets with Random Endowment. Finance and
            Stochastics, Vol. 5, No. 2, pp. 259–272.
[CW 01]    J. Cvitanic, H. Wang, (2001), On optimal terminal wealth under trans-
            action costs. Jorunal of Mathematical Economics, Vol. 35, No. 2,
            pp. 223–231.
[DMW 90]    R.C. Dalang, A. Morton, W. Willinger, (1990), Equivalent martingale
            measures and no-arbitrage in stochastic. Stochastics and Stochastics
            Reports, Vol. 29, pp. 185–201.
[D 97]     M. Davis, (1997), Option pricing in incomplete markets. Mathemat-
            ics of Derivative Securities, eds. M.A.H. Dempster and S.R. Pliska,
            Cambridge University Press, pp. 216–226.
[D 00]      Mark Davis, (2000), Option valuation and hedging with basis risk, Sys-
            tem theory: modeling, analysis and control (Cambridge, MA, 1999),
            Kluwer Internat. Ser. Engrg. Comput. Sci., vol. 518, Kluwer Acad.
            Publ., Boston, MA, pp. 245–254.
[DPT 01]    G. Deelstra, H. Pham, N. Touzi, (2001), Dual formulation of the util-
            ity maximisation problem under transaction costs. Annals of Applied
            Probability, Vol. 11, No. 4, pp. 1353–1383.
[DGRSSS 02] F. Delbaen, P. Grandits, T. Rheinländer, D. Samperi, M. Schweizer,
            C. Stricker, (2002), Exponential hedging and entropic penalties. Math-
            ematical Finance, Vol. 12, No. 2, pp. 99–123.
[DS 94]     F. Delbaen, W. Schachermayer, (1994), A General Version of the Fun-
            damental Theorem of Asset Pricing. Math. Annalen, Vol. 300, pp. 463–
            520.
[DS 95]     F. Delbaen, W. Schachermayer, (1995), The No-Arbitrage Property un-
            der a change of numéraire. Stochastics and Stochastic Reports, Vol. 53,
           pp. 213–226.
[DS 98]     F. Delbaen, W. Schachermayer, (1998), The Fundamental Theorem
           of Asset Pricing for Unbounded Stochastic Processes. Mathematische
           Annalen, Vol. 312, pp. 215–250.
[DS 98a]    F. Delbaen, W. Schachermayer, (1998), A Simple Counter-example to
           Several Problems in the Theory of Asset Pricing, which arises in many
           incomplete markets. Mathematical Finance, Vol. 8, pp. 1–12.
                             Utility Maximisation in Incomplete Markets        291

[DS 99]    F. Delbaen, W. Schachermayer, (1999), A Compactness Principle for
           Bounded Sequences of Martingales with Applications. Proceedings of
           the Seminar of Stochastic Analysis, Random Fields and Applications,
           Progress in Probability, Vol. 45, pp. 137–173.
[ET 76]    I. Ekeland, R. Temam, (1976), Convex Analysis and Variational Prob-
           lems. North Holland.
[E 80]     M. Emery, (1980), Compensation de processus à variation ﬁnie non lo-
           calement intégrables. Séminaire de Probabilités XIV, Springer Lecture
           Notes in Mathematics, Vol. 784, pp. 152–160.
[F 90]     L.P. Foldes, (1990), Conditions for optimality in the inﬁnite-
           horizon portfolio-cum-savings problem with semimartingale invest-
           ments. Stochastics and Stochastics Report, Vol. 29, pp. 133–171.
[FL 00]    H. Föllmer, P. Leukert, (2000), Eﬃcient Hedging: Cost versus Shortfall
           Risk. Finance and Stochastics, Vol. 4, No. 2, pp. 117–146.
[FS 91]    H. Föllmer, M. Schweizer, (1991), Hedging of contingent claims un-
           der incomplete information. Applied Stochastic Analysis, Stochastic
           Monographs, M.H.A. Davis and R.J. Elliott, eds., Gordon and Breach,
           London New York, Vol. 5, pp. 389–414.
[F 00]     M. Frittelli, (2000), The minimal entropy martingale measure and
           the valuation problem in incomplete markets. Mathematical Finance,
           Vol. 10, No. 1, pp. 39–52.
[GK 00]    T. Goll, J. Kallsen, (2000), Optimal portfolios for logarithmic utility.
           Stochastic Processes and Their Applications, Vol. 89, pp. 31–48.
[GR 01]    T. Goll, L. Rüschendorf, (2001), Minimax and minimal distance mar-
           tingale measures and their relationship to portfolio optimization. Fi-
           nance and Stochastics, Vol. 5, No. 4, pp. 557–581.
[HP 81]    J.M. Harrison, S.R. Pliska, (1981), Martingales and stochastic integrals
           in the theory of continuous trading. Stochastic Processes and Applica-
           tions, Vol. 11, pp. 215–260.
[HP 91a]   H. He, N.D. Pearson, (1991), Consumption and Portfolio Policies
           with Incomplete Markets and Short-Sale Constraints: The Finite-
           Dimensional Case. Mathematical Finance, Vol. 1, pp. 1–10.
[HP 91b]   H. He, N.D. Pearson, (1991), Consumption and Portfolio Policies
           with Incomplete Markets and Short-Sale Constraints: The Inﬁnite-
           Dimensional Case. Journal of Economic Theory, Vol. 54, pp. 239–250.
[HN 89]    S.D. Hodges, A. Neuberger, (1989), Optimal replication of contingent
           claims under transaction costs. Review of Futures Markets, Vol. 8,
           pp. 222–239.
[HL88]     C.-F. Huang, R.H. Litzenberger, (1988), Foundations for Financial
           Economics. North-Holland Publishing Co. New York.
[HK 02]    J. Hugonnier, D. Kramkov, (2002), Optimal investment with random
           endowments in incomplete markets. To appear in The Annals of Ap-
           plied Probability.
[J 92]     S.D. Jacka, (1992), A martingale representation result and an appli-
           cation to incomplete ﬁnancial markets. Mathematical Finance, Vol. 2,
           pp. 239–250.
[KS 01]    Yu.M. Kabanov, Ch. Stricker, (2001), A teachers’ note on no-arbitrage
           criteria. Séminaire de Probabilités XXXV, Springer Lecture Notes in
           Mathematics, Vol. 1755, pp. 149–152.
292       Walter Schachermayer

[KS 02]        Yu.M. Kabanov, C. Stricker, (2002), On the optimal portfolio for
               the exponential utility maximization: remarks to the six-author paper.
               Mathematical Finance, Vol. 12, No. 2, pp. 125–134.
[K 00]         J. Kallsen, (2000), Optimal portfolios for exponential Lévy processes
               Mathematical Methods of Operation Research, Vol. 51, No. 3, pp. 357–
               374.
[KLS 87]       I. Karatzas, J.P. Lehoczky, S.E. Shreve, (1987), Optimal portfolio and
               consumption decisions for a “small investo” on a ﬁnite horizon. SIAM
               Journal of Control and Optimization, Vol. 25, pp. 1557–1586.
[KLSX 91]      I. Karatzas, J.P. Lehoczky, S.E. Shreve, G.L. Xu, (1991), Martingale
               and duality methods for utility maximization in an incomplete market.
               SIAM Journal of Control and Optimization, Vol. 29, pp. 702–730.
[KJ 98]        N. El Karoui, M. Jeanblanc, (1998), Optimization of consumptions
               with labor income. Finance and Stochastics, Vol. 4, pp. 409–440.
[KQ 95]        N. El Karoui, M.-C. Quenez, (1995), Dynamic programming and pric-
               ing of contingent claims in an incomplete market. SIAM Journal on
               Control and Optimization, Vol. 33, pp. 29–66.
[KR 00]        N. El Karoui, R. Rouge, (2000), Pricing via utility maximization and
               entropy. Mathematical Finance, Vol. 10, No. 2, pp. 259–276.
[Kom 67]       J. Komlos, (1967), A generalization of a problem of Steinhaus. Acta
               Math. Sci. Hung., Vol. 18, pp. 217–229.
[KS 99]        D. Kramkov, W. Schachermayer, (1999), The Asymptotic Elasticity
               of Utility Functions and Optimal Investment in Incomplete Markets.
               Annals of Applied Probability, Vol. 9, No. 3, pp. 904–950.
[K 81]         D.M. Kreps, (1981), Arbitrage and equilibrium in economies with in-
               ﬁnitely many commodities. Journal of Mathematical Economics, Vol. 8,
               pp. 15–35.
[L 00]         P. Lakner, (2000), Portfolio Optimization with an Insurance Con-
               straint. Preprint of the NYU, Dept. of Statistics and Operation Re-
               search.
[L 90]         J.B. Long, (1990), The numeraire portfolio. Journal of Financial Eco-
               nomics, Vol. 26, pp. 29–69.
[M 69]         R.C. Merton, (1969), Lifetime portfolio selection under uncertainty:
               the continuous-time model. Rev. Econom. Statist., Vol. 51, pp. 247–
               257.
[M 71]         R.C. Merton, (1971), Optimum consumption and portfolio rules in a
               continuous-time model. Journal of Economic Theory, Vol. 3, pp. 373–
               413.
[M 90]         R.C. Merton, (1990), Continuous-Time Finance. Basil Blackwell, Ox-
               ford.
[P 86]         S.R. Pliska, (1986), A stochastic calculus model of continuous trading:
               optimal portfolios. Math. Oper. Res., Vol. 11, pp. 371–382.
[R 70]         R.T. Rockafellar, (1970), Convex Analysis. Princeton University Press,
               Princeton, New Jersey.
[R 84]         L. Rüschendorf, (1984), On the minimum discrimination information
               theorem. Statistics & Decisions Supplement Issue, Vol. 1, pp. 263–283.
[S 69]         P.A. Samuelson, (1969), Lifetime portfolio selection by dynamic
               stochastic programming. Rev. Econom. Statist., Vol. 51, pp. 239–246.
                            Utility Maximisation in Incomplete Markets          293

[S 01]    W. Schachermayer, (2001), Optimal Investment in Incomplete Markets
          when Wealth may Become Negative. Annals of Applied Probability,
          Vol. 11, No. 3, pp. 694–734.
[S 01a]   W. Schachermayer, (2001), Optimal Investment in Incomplete Finan-
          cial Markets. Mathematical Finance: Bachelier Congress 2000 (H. Ge-
          man, D. Madan, St.R. Pliska, T. Vorst, editors), Springer, pp. 427–462.
[S 03]    W. Schachermayer, (2003), Introduction to the Mathematics of Finan-
          cial Markets. In: S. Albeverio, W. Schachermayer, M. Talagrand: Lec-
          ture Notes in Mathematics 1816 - Lectures on Probability Theory and
          Statistics, Saint-Flour summer school 2000 (Pierre Bernard, editor),
          Springer Verlag, Heidelberg, pp. 111–177.
[S 03a]   W. Schachermayer, (2003), A Super-Martingale Property of the Opti-
          mal Portfolio Process. Finance and Stochastics, Vol. 7, No. 4, pp. 433–
          456.
[S 04]    W. Schachermayer, (2004), The Fundamental Theorem of Asset Pric-
          ing under Proportional Transaction Costs in Finite Discrete Time.
          Mathematical Finance, Vol. 14, No. 1, pp. 19–48.
[S 04a]   W. Schachermayer, (2004), Portfolio Optimization in Incomplete Fi-
          nancial Markets, to appear as Lecture Notes of “Scuola Normale Su-
          periore di Pisa”.
[S 66]    H.H. Schäfer, (1966), Topological Vector Spaces. Graduate Texts in
          Mathematics.
[St 85]   H. Strasser, (1985), Mathematical theory of statistics: statistical exper-
          iments and asymptotic decision theory. De Gruyter studies in mathe-
          matics, Vol. 7.
List of Participants




 1   Astic Fabian
     CREST, Université Paris-Dauphine, France
     fabian.astic@ensae.fr
 2   Back Kerry (lecturer)
     Washington University, USA
     back@olin.wustl.edu
 3   Backhaus Jochen
     University of Leipzig/Math Institut, Germany
     jochen.backhaus@math.uni-leipzig.de
 4   Baran Michail
     Polish Academy of Science, Warsaw, Poland
     mb@impan.gov.pl
 5   Battauz Anna
     Bocconi University, Milano, Italy
     anna.battauz@uni-bocconi.it
 6   Bauer Wolfgang
     Univerisity Zürich, Switzerland
     wobauer@isb.unizh.ch
 7   Bavouzet Marie-Pierre
     INRIA, France
     marie-pierre.bavouzet@inria.fr
 8   Bernyk Violetta
     Ecole Polythecnique Federale de Lowsanne, Switzerland
     violetta.hamsag-bernyk@epﬂ.ch
 9   Bershadsky Andrew
     Moscow Institute of Physics and Tecnhology, Russia
     avb@cslab.ptci.ru
10   Beutner Eric
     RWTH Aachen, Germany
     beutner@stochastik.rwth-aachen.de
296    List of Participants

 11   Biagini Francesca
      University of Bologna, Dep.of Math., Italy
      biagini@dm.unibo.it
 12   Biagini Sara
      University of Perugia, Italy
      s.biagini@unipg.it
 13   Bielecki Tomasz (lecturer)
      Illinois Institute of Technology
      bielecki@iit.edu
 14   Borovkov Constantin
      University of Melbourne, Australia
      kostya@ms.unimeb.edu.au
 15   Bouhari Arouna
      Ecole Nationale des Ponts et Chaussees, France
      arouna@cermics.enpc.fr
 16   Buﬀett Emanuel
      Dublin City University, Ireland
      emanuel.buﬀet@dcu.ie
 17   Burd Oleg
      Karlruhe University, Germany
      burd@gmx.net
 18   Campi Luciano
      Université Paris, France and Univ.”G. Di Annunzio”, Chieti, Italy
      campi@ccr.jussieu.fr
 19   Carroll Tom
      National University of Ireland
      t.carroll@ucc.ie
 20   Catanese Elena
      Scuola normale superiore, Italy
      catanese@sns.it
 21   Cerqueti Roy
      University of Rome ”La Sapienza”, Italy
      roy.cerqueti@uniroma1.it
 22   Coculescu Delia
      University Paris IX. Dauphine, France
      delia coculescu@yahoo.fr
 23   Corcuera Jose Manuel
      University of Barcelona, Spain
      corcuera@mat.ub.es
 24   Corsi Marco
      University of Padova, Italy
      mcorsi@math.unipd.it
                                                List of Participants   297

25   Costa Vincenzo
     University of Naples ”Federico II ”, Italy
     vincenzo.costa@uniroma1.it
26   Cretarola Alessandra
     University of Bologna, Italy
     sagittale@yahoo.com
27   Cucicea Mihaela
     University of Padova, Dep.of Math., Italy
     cucicea@math.unipd.it
28   Dana Rose-Anne
     Universite Paris Dauphine, France
     dana@ceremade.dauphine.fr
29   De Donno Marzia
     University of Pisa, Italy
     mdedonno@dm.unipi.it
30   Deelstra Griselda
     ULB /Dept.of Mathematics, Belgium
     griselda.deelstra@ulb.ac.be
31   Di Graziano Giuseppe
     King’s College, London, U.K.
     pippoh@inwind.it
32   Fabbretti Annalisa
     University of Rome ”La Sapienza”, Italy
     annlaisa83@hotmail.com
33   Favero Gino
     University of Padova, Italy
     favero@math.unipd.it
34   Frittelli Marco (editor)
     University of Florence, Dep.of Math., Italy
     Marco.Frittelli@dmd.uniﬁ.it
35   Galeotti Marcello
     University of Firenze, DIMAD, Italy
     marcello.galeotti@dmd.uniﬁ.it
36   Galiani Stefano
     King’s College, London, U.K.
     stefano.galliani@kcl.ac.uk
37   Gasco Loretta
     PUCP, Lima, Peru
     lgasco@pucp.edu.pe
38   Gaygisiz Esma
     Middle East Technical University, Ankara, Turkey
     esma@metu.edu.tr
298    List of Participants

 39   Gianfreda Angelica
      University of Lecce/Fac.of Economics, Italy
      a.giangreda@economia.unile.it
 40   Gliklikh Andrei
      Voronezh State University, Russia
      yuri@yeg.vsu.ru
 41   Grasselli Martino
      University of Verona, Italy
      martino.graselli@univr.it
 42   Guerra Joao
      University of Barcelona, Spain
      jguerra@telepolis.cos
 43   Halaj Grzegorz
      Warsaw School of Economics, Poland
      grzegorz.halaj@n-s.pl
 44   Hallulli Vera
      University of Padova, Italy
      hallulli@math.unipd.it
 45   Hammarlid Ola
      Stockholm University, Sweden
      olah@math.su.se
 46   Hamza Kais
      Monash University, Australia
      kais.hamza@sci.monash.edu.au
 47   Hipp Christian (lecturer)
      University of Karlsruhe, Germany
      christian.hipp@wiwi.uni-karlsruhe.de
 48   Jonsson Henrik
      Mlardalen University, Sweden
      henrik.jonsson@mdh.se
 49   Klöppel Susanne
      Ludwig Maximilian Universität, München, Germany
      susanna.kloeppel@web.de
 50   Kordzakhia Nino
      Commonwealth Bank of Australia
      kordzani@cba.com.au
 51   Koval Nataliya
      University of Freiburg, Germany
      koval@stochastik.uni-freiburg.de
 52   Kovalchuk Anatoly
      St.Petersburg State University, Russia
      tolikov@front.ru
                                                   List of Participants   299

53   La Chioma Claudia
     IAC CNR, University of Rome, Italy
     c.lachioma@iac.cnr.it
54   Lasserre Guillaume
     Paris VII. and CREST, France
     lasserre@ensae.fr
55   Levit Dina Central Eu. Univ, Hungary
     dina-levit@yandex.ru
56   Liinev Jan
     Ghent University, Belgium
     jan.liinev@ugent.be
57   Longo Michele
     University of Florence, Italy
     michele.longo@dmd.uniﬁ.it
58   Lueteta Jean-Pierre
     Universite d’Anvers, Belgium
     lueteta@yahoo.fr
59   Macrina Andrea
     King’s College, London, U.K.
     andrea.macrina@kcl.ac.uk
60   Marinelli Carlo
     Columbia University, New York
     cm788@columbia.edu
61   Masetti Massimo
     Carnegie Mellon University,
     Pittsburgh and University of Bergamo, Italy
     mmasetti@andrew.cmu.edu
62   Massi Benedetti Saverio
     University of Perugia, Italy
     saverio.massi@stat.unipg.it
63   Meyer-Brands Thilo
     Dep.of Mathematics, Oslo, Norway
     meyerbr@math.uio.no
64   Moreni Nicola
     C.E.R.M.I.C.S., France
     moreni@cermics.enpc.fr
65   Mulinacci Sabrina
     Università Cattolica Milano, Italy
     sabrina.mulinacci@mi.unicatt.it
66   Novikov Alex
     UTS, Sidney, Australia
     alex.novikov@uts.edu.au
300    List of Participants

 67   Obukhovski Andrei
      Voronezh State University, Russia
      avo@mathd.vsu.ru
 68   Oertel Frank
      Zurich University of Applied Sciences, Switzerland
      frank.oertel@zhwin.ch
 69   Palczewski Jan
      Polish Academy of Science, Warsaw, Poland
      jp@impan.gov.pl
 70   Panchenko Valentyn
      UVA, Amsterdam, Netherland
      v.panchenko@uva.nl
 71   Papi Marco
      Instituto Per Le Applicazioni Del Calcolo, Roma, Italy
      papi@iac.rm.cnr.it
 72   Peng Shige (lecturer)
      School of Mathematics, Shandong, China
      peng@sdu.edu.cn
 73   Perrotta Annalisa
      University of Rome ”La Sapienza”,Italy
      anna-perrotta@yahoo.com
 74   Platania Alessandro
      University of Padova, Italy
      platania@stat.unipd.it
 75   Polte Ulrike
      Math Insitut, Universität Leipzig, Germany
      ulrike polte@web.de
 76   Popa Cristian
      Technical University of Vienna, Austria
      popa@fam.tuwien.ac.at
 77   Popovici Stefan
      University of Bonn, Germany
      popovici@wiener.iam.uni-bonn.de
 78   Porchia Paolo
      University of South Switzerland
      porchiap@lu.unisi.ch
 79   Pricop Mihaela
      University ”Petrol Gaze” Ploiesti, Romania
      pri mihaela@hotmail.com
 80   Provenzano Davide
      University of Palermo, Italy
      davidepro@yahoo.com
                                                    List of Participants   301

81   Rafaidilis Avraam
     King’s College, London, U.K.
     avraam@mth.kcl.ac.uk
82   Ravanelli Claudia
     Università della Svizzera Italiana, Switzerland
     claudia.ravanelli@lu.unisi.ch
83   Roose Frederik
     King’s College, London, U.K.
     fredr@mth.kcl.ac.uk
84   Rosazza Gianin Emanuela
     University of Milano Bicocca, Italy
     emanuela.rosazza@unimib.it
85   Runggaldier Wolfgang (editor)
     University of Padova, Dep.of Math., Italy
     runggal@math.unipd.it
86   Scandolo Giacomo
     University of Milano, Italy
     scandolo@email.it
87   Scarsini Marco
     University of Torino, Italy
     marco.scarsini@unito.it
88   Schachermayer Walter (lecturer)
     Vienna University of Technology, Austria
     wschach@fam.tuwien.ac.at
89   Scolozzi Donato
     University of Lecce, Italy
     scolozzi@economia.unile.it
90   Sgarra Carlo
     Politecnico Milano, Dep.of Mathematics
     sgarra@mate.polimi.it
91   Singh Surbjeet
     University of Cambridge, U.K.
     s.singh@staslab.cam.ac.uk
92   Sottinen Tommi
     University of Helsinki, Dep.of Math., Finland
     tommi.sottinene@helsinki.ﬁ
93   Stabile Gabriele
     University of Rome ”La Sapienza”, Italy
     gabriele.stabile@uniroma1.it
94   Stemberg Fredrik
     Mälardalen University, Sweden
     fredrik.stenberg@mdh.se
302    List of Participants

 95   Tebaldi Claudio
      University of Verona, Italy
      claudio.tebaldi@univr.it
 96   Timofeeva Galina
      Ural State University of the Railway Trasport, Russia
      gtimofeva@mail.ru
 97   Tolotti Marco
      Scuola normale superiore, Italy
      m.tolotti@sns.it
 98   Vanmaele Michele
      Ghent University, Belgium
      michele.vanmaele@UGent.be
 99   Vargiolu Tiziano
      University of Padova, Italy
      vargiolu@math.unipd.it
100   Voloshyna Olena
      Central Eu. Univ, Hungary
      c01voo01@ceu.hu
101   Volpe Valeria
      Università Svizzera Italiana, Lugano, Switzerland
      valeria.volpe@lu.unisi.ch
102   Vuorenmaa Tommi
      University of Helsinki, Dep.of Math., Finland
      tvuorenm@cc.helsinki.ﬁ
103   Williams John
      Oxford University, U.K.
      john.willaims@comlab.ox.ac.uk
104   Xu Mingyu
      Shandong University, China and Université du Maine, France
      mingyu.xu@univ-lemans.fr
LIST OF C.I.M.E. SEMINARS



1954    1. Analisi funzionale                                    C.I.M.E
        2. Quadratura delle superﬁcie e questioni connesse           "
        3. Equazioni diﬀerenziali non lineari                        "
1955    4. Teorema di Riemann-Roch e questioni connesse             "
        5. Teoria dei numeri                                        "
        6. Topologia                                                "
        7. Teorie non linearizzate in elasticità,                  "
           idrodinamica, aerodinamic
        8. Geometria proiettivo-diﬀerenziale                        "
1956    9. Equazioni alle derivate parziali a caratteristiche       "
           reali
       10. Propagazione delle onde elettromagnetiche                "
       11. Teoria della funzioni di più variabili complesse e      "
           delle funzioni automorfe
1957   12. Geometria aritmetica e algebrica (2 vol.)                "
       13. Integrali singolari e questioni connesse                 "
       14. Teoria della turbolenza (2 vol.)                         "
1958   15. Vedute e problemi attuali in relatività generale        "
       16. Problemi di geometria diﬀerenziale in grande             "
       17. Il principio di minimo e le sue applicazioni alle        "
           equazioni funzionali
1959   18. Induzione e statistica                                   "
       19. Teoria algebrica dei meccanismi automatici (2 vol.)      "
       20. Gruppi, anelli di Lie e teoria della coomologia          "
1960   21. Sistemi dinamici e teoremi ergodici                      "
       22. Forme diﬀerenziali e loro integrali                      "

1961   23. Geometria del calcolo delle variazioni (2 vol.)          "
       24. Teoria delle distribuzioni                               "
       25. Onde superﬁciali                                         "
1962   26. Topologia diﬀerenziale                                   "
       27. Autovalori e autosoluzioni                               "
       28. Magnetoﬂuidodinamica                                     "
1963   29. Equazioni diﬀerenziali astratte                          "
       30. Funzioni e varietà complesse                            "
       31. Proprietà di media e teoremi di confronto in            "
           Fisica Matematica
1964   32. Relatività generale                                     "
       33. Dinamica dei gas rarefatti                               "
       34. Alcune questioni di analisi numerica                     "
       35. Equazioni diﬀerenziali non lineari                       "
1965   36. Non-linear continuum theories                            "
       37. Some aspects of ring theory                              "
       38. Mathematical optimization in economics                   "
304    LIST OF C.I.M.E. SEMINARS

1966   39. Calculus of variations                                 Ed. Cremonese, Firenze
       40. Economia matematica                                              "
       41. Classi caratteristiche e questioni connesse                      "
       42. Some aspects of diﬀusion theory                                  "
1967   43. Modern questions of celestial mechanics                          "
       44. Numerical analysis of partial diﬀerential                        "
           equations
       45. Geometry of homogeneous bounded domains                          "
1968   46. Controllability and observability                                "
       47. Pseudo-diﬀerential operators                                     "
       48. Aspects of mathematical logic                                    "
1969   49. Potential theory                                                 "
       50. Non-linear continuum theories in mechanics and                   "
           physics and their applications
       51. Questions of algebraic varieties                                 "
1970   52. Relativistic ﬂuid dynamics                                       "
       53. Theory of group representations and Fourier                      "
           analysis
       54. Functional equations and inequalities                            "
       55. Problems in non-linear analysis                                  "
1971   56. Stereodynamics                                                   "
       57. Constructive aspects of functional analysis (2 vol.)             "
       58. Categories and commutative algebra                               "
1972   59. Non-linear mechanics                                             "
       60. Finite geometric structures and their applications               "
       61. Geometric measure theory and minimal surfaces                    "
1973   62. Complex analysis                                                 "
       63. New variational techniques in mathematical                       "
           physics
       64. Spectral analysis                                                "
1974   65. Stability problems                                               "
       66. Singularities of analytic spaces                                 "
       67. Eigenvalues of non linear problems                               "
1975   68. Theoretical computer sciences                                    "
       69. Model theory and applications                                    "
       70. Diﬀerential operators and manifolds                              "
1976   71. Statistical Mechanics                                   Ed. Liguori, Napoli
       72. Hyperbolicity                                                    "
       73. Diﬀerential topology                                             "
1977   74. Materials with memory                                            "
       75. Pseudodiﬀerential operators with applications                    "
       76. Algebraic surfaces                                               "
1978   77. Stochastic diﬀerential equations              Ed. Liguori, Napoli & Birkhäuser
       78. Dynamical systems                                             "
1979   79. Recursion theory and computational complexity                 "
       80. Mathematics of biology                                        "
1980   81. Wave propagation                                              "
       82. Harmonic analysis and group representations                   "
       83. Matroid theory and its applications                           "
                                              LIST OF C.I.M.E. SEMINARS            305


1981    84. Kinetic Theories and the Boltzmann Equation      (LNM 1048) Springer-Verlag
        85. Algebraic Threefolds                             (LNM 947)         "
        86. Nonlinear Filtering and Stochastic Control       (LNM 972)         "
1982    87. Invariant Theory                                 (LNM 996)         "
        88. Thermodynamics and Constitutive Equations        (LN Physics 228)  "
        89. Fluid Dynamics                                   (LNM 1047)        "
1983    90. Complete Intersections                           (LNM 1092)        "
        91. Bifurcation Theory and Applications              (LNM 1057)        "
        92. Numerical Methods in Fluid Dynamics              (LNM 1127)        "
1984    93. Harmonic Mappings and Minimal Immersions         (LNM 1161)        "
        94. Schrödinger Operators                           (LNM 1159)        "
        95. Buildings and the Geometry of Diagrams           (LNM 1181)        "
1985    96. Probability and Analysis                         (LNM 1206)        "
        97. Some Problems in Nonlinear Diﬀusion              (LNM 1224)        "
        98. Theory of Moduli                                 (LNM 1337)        "
1986    99. Inverse Problems                                 (LNM 1225)        "
       100. Mathematical Economics                           (LNM 1330)        "
       101. Combinatorial Optimization                       (LNM 1403)        "
1987   102. Relativistic Fluid Dynamics                      (LNM 1385)        "
       103. Topics in Calculus of Variations                 (LNM 1365)        "

1988   104. Logic and Computer Science                       (LNM 1429)        "
       105. Global Geometry and Mathematical Physics         (LNM 1451)        "

1989   106. Methods of nonconvex analysis                    (LNM 1446)        "
       107. Microlocal Analysis and Applications             (LNM 1495)        "

1990   108. Geometric Topology: Recent Developments          (LNM 1504)        "
       109. H∞ Control Theory                                (LNM 1496)        "
       110. Mathematical Modelling of Industrial Processes   (LNM 1521)        "
1991   111. Topological Methods for Ordinary Diﬀerential     (LNM 1537)        "
            Equations
       112. Arithmetic Algebraic Geometry                    (LNM 1553)        "
       113. Transition to Chaos in Classical and Quantum     (LNM 1589)        "
            Mechanics
1992   114. Dirichlet Forms                                  (LNM 1563)        "
       115. D-Modules, Representation Theory, and            (LNM 1565)        "
            Quantum Groups
       116. Nonequilibrium Problems in Many-Particle         (LNM 1551)        "
            Systems
1993   117. Integrable Systems and Quantum Groups            (LNM 1620)        "
       118. Algebraic Cycles and Hodge Theory                (LNM 1594)        "
       119. Phase Transitions and Hysteresis                 (LNM 1584)        "
1994   120. Recent Mathematical Methods in Nonlinear         (LNM 1640)        "
            Wave Propagation
       121. Dynamical Systems                                (LNM 1609)        "
       122. Transcendental Methods in Algebraic Geometry     (LNM 1646)        "
1995   123. Probabilistic Models for Nonlinear PDE’s         (LNM 1627)        "
       124. Viscosity Solutions and Applications             (LNM 1660)        "
       125. Vector Bundles on Curves. New Directions         (LNM 1649)        "
306     LIST OF C.I.M.E. SEMINARS

1996   126. Integral Geometry, Radon Transforms and          (LNM 1684) Springer-Verlag
            Complex Analysis
       127. Calculus of Variations and Geometric Evolution (LNM 1713)          "
            Problems
       128. Financial Mathematics                            (LNM 1656)        "
1997   129. Mathematics Inspired by Biology                  (LNM 1714)        "
       130. Advanced Numerical Approximation of Nonlinear (LNM 1697)           "
            Hyperbolic Equations
       131. Arithmetic Theory of Elliptic Curves             (LNM 1716)        "
       132. Quantum Cohomology                               (LNM 1776)        "
1998   133. Optimal Shape Design                             (LNM 1740)        "
       134. Dynamical Systems and Small Divisors             (LNM 1784)        "
       135. Mathematical Problems in Semiconductor           (LNM 1823)        "
            Physics
       136. Stochastic PDE’s and Kolmogorov Equations in (LNM 1715)            "
            Inﬁnite Dimension
       137. Filtration in Porous Media and Industrial        (LNM 1734)        "
            Applications
1999   138. Computational Mathematics driven by Industrial (LNM 1739)          "
            Applications
       139. Iwahori-Hecke Algebras and Representation        (LNM 1804)        "
            Theory
       140. Theory and Applications of Hamiltonian           to appear         "
            Dynamics
       141. Global Theory of Minimal Surfaces in Flat Spaces (LNM 1775)        "
       142. Direct and Inverse Methods in Solving Nonlinear (LNP 632)          "
            Evolution Equations
2000   143. Dynamical Systems                                (LNM 1822)        "
       144. Diophantine Approximation                        (LNM 1819)        "
       145. Mathematical Aspects of Evolving Interfaces      (LNM 1812)        "
       146. Mathematical Methods for Protein Structure       (LNCS 2666)       "
       147. Noncommutative Geometry                          (LNM 1831)        "
2001   148. Topological Fluid Mechanics                      to appear         "
       149. Spatial Stochastic Processes                     (LNM 1802)        "
       150. Optimal Transportation and Applications          (LNM 1813)        "
       151. Multiscale Problems and Methods in Numerical (LNM 1825)            "
            Simulations
2002   152. Real Methods in Complex and CR Geometry          (LNM 1848)        "
       153. Analytic Number Theory                           to appear         "
       154. Imaging                                          to appear         "
2003   155. Stochastic Methods in Finance                   (LNM 1856)         "
       156. Hyperbolic Systems of Balance Laws              to appear          "
       157. Symplectic 4-Manifolds and Algebraic Surfaces   to appear          "
       158. Mathematical Foundation of Turbulent Viscous    to appear          "
            Flows
2004   159. Representation Theory and Complex Analysis      announced          "
       160. Nonlinear and Optimal Control Theory            announced          "
       161. Stochastic Geometry                             announced          "
                          Fondazione C.I.M.E.
                Centro Internazionale Matematico Estivo
               International Mathematical Summer Center
                         http://www.cime.uniﬁ.it
                            cime@math.uniﬁ.it




                2005 COURSES LIST

Enumerative Invariants
in Algebraic Geometry and String Theory
June 6–11, Cetraro
   Course Directors:
   Prof. Kai Behrend (University of British Columbia, Vancouver, Canada)
   Prof. Barbara Mantechi (SISSA, Trieste, Italy)


Calculus of Variations
and Non-linear Partial Diﬀerential Equations
June 27–July 2, Cetraro
   Course Directors:
   Prof. Bernard Dacorogna (EPFL, Lousanne, Switzerland)
   Prof. Paolo Marcellini (Università di Firenze, Italy)


SPDE in Hydrodynamics:
Recent Progress and Prospects
August 29–September 3, Cetraro
   Course Directors:
   Prof. Giuseppe Da Prato (Scuola Normale Superiore, Pisa, Italy)
   Prof. Michael Rockner (Bielefeld University, Germany)



---
normalized_id: shared-pdf-reference-analysis-and-numerics-of-partial-dif
exam_code: SHARED
material_scope: analysis and numerics of partial dif.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Analysis and Numerics of Partial Dif.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-analysis-and-numerics-of-partial-dif

Springer INdAM Series

Volume 4



Editor-in-Chief
V. Ancona

Series Editors
P. Cannarsa
C. Canuto
G. Coletti
P. Marcellini
G. Patrizio
T. Ruggeri
E. Strickland
A. Verra




For further volumes:
www.springer.com/series/10283
Franco Brezzi r Piero Colli Franzone r
Ugo Gianazza r Gianni Gilardi
Editors




Analysis and
Numerics of
Partial Differential
Equations
Editors
Franco Brezzi                                             Ugo Gianazza
Istituto di Matematica Applicata e                        Dipartimento di Matematica “F. Casorati”
    Tecnologie Informatiche (IMATI)                       Università degli Studi di Pavia
CNR Pavia                                                 Pavia, Italy
Pavia, Italy

Piero Colli Franzone                                      Gianni Gilardi
Dipartimento di Matematica “F. Casorati”                  Dipartimento di Matematica “F. Casorati”
Università degli Studi di Pavia                           Università degli Studi di Pavia
Pavia, Italy                                              Pavia, Italy




ISSN 2281-518X                            ISSN 2281-5198 (electronic)
Springer INdAM Series
ISBN 978-88-470-2591-2                    ISBN 978-88-470-2592-9 (eBook)
DOI 10.1007/978-88-470-2592-9
Springer Milan Heidelberg New York Dordrecht London

Library of Congress Control Number: 2012951305

© Springer-Verlag Italia 2013
This work is subject to copyright. All rights are reserved by the Publisher, whether the whole or part of
the material is concerned, specifically the rights of translation, reprinting, reuse of illustrations, recitation,
broadcasting, reproduction on microfilms or in any other physical way, and transmission or information
storage and retrieval, electronic adaptation, computer software, or by similar or dissimilar methodology
now known or hereafter developed. Exempted from this legal reservation are brief excerpts in connection
with reviews or scholarly analysis or material supplied specifically for the purpose of being entered
and executed on a computer system, for exclusive use by the purchaser of the work. Duplication of
this publication or parts thereof is permitted only under the provisions of the Copyright Law of the
Publisher’s location, in its current version, and permission for use must always be obtained from Springer.
Permissions for use may be obtained through RightsLink at the Copyright Clearance Center. Violations
are liable to prosecution under the respective Copyright Law.
The use of general descriptive names, registered names, trademarks, service marks, etc. in this publication
does not imply, even in the absence of a specific statement, that such names are exempt from the relevant
protective laws and regulations and therefore free for general use.
While the advice and information in this book are believed to be true and accurate at the date of pub-
lication, neither the authors nor the editors nor the publisher can accept any legal responsibility for any
errors or omissions that may be made. The publisher makes no warranty, express or implied, with respect
to the material contained herein.

Printed on acid-free paper

Springer is part of Springer Science+Business Media (www.springer.com)
    In memory of Enrico Magenes




Enrico Magenes (courtesy of the family)
Preface




On November 2nd 2010 Enrico Magenes passed away.
    One year later, some of his friends, collaborators and former students organized
a three-day conference, in order to celebrate his memory and give a first assessment
of his deep influence on contemporary Mathematics. All the speakers were experts
in the analysis and numerics of partial differential equations, who had directly inter-
acted with Magenes, during his long career.
    The present volume is a direct offshoot of that meeting, and it collects the main
contributions offered in that occasion, properly revised and expanded. It consists
of two parts: the first one gives a wide historical perspective of Magenes’ work;
the second one contains original research or survey papers, and shows how ideas,
methods, and techniques introduced by Magenes and his collaborators still have an
impact on the current research in Mathematics. As agreed between Springer and
UMI (Unione Matematica Italiana), some of the papers appearing in the second part
will be fully published on Bollettino UMI as well.
    Although it is still too early to fully appreciate Magenes’ legacy, nonetheless
the volume is a first attempt to present a comprehensive survey of his activity in
Mathematics. At the same time, from Magenes’ peculiar point of view, it is a broad
perspective of the research in partial differential equations and their applications
developed in Italy in the period 1950–2000.
    The editors are grateful to Francesca Bonadei of Springer Italy for the unique
opportunity offered with the publication of this volume, and for her constant support
during its preparation.
Pavia, Italy                                                            Franco Brezzi
                                                                 Piero Colli Franzone
                                                                       Ugo Gianazza
                                                                       Gianni Gilardi




                                                                                    vii
Contents




Part I    A Historical Perspective
Personal Memories . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    3
    Franco Brezzi
Some Aspects of the Research of Enrico Magenes in Partial Differential
   Equations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     5
   Giuseppe Geymonat
Enrico Magenes and the Dam Problem . . . . . . . . . . . . . . . . . . .          13
    Claudio Baiocchi
Inverse Problems in Electrocardiology . . . . . . . . . . . . . . . . . . . .     19
    Piero Colli Franzone
Stefan Problems and Numerical Analysis . . . . . . . . . . . . . . . . . .        37
     Claudio Verdi
Enrico Magenes and the Teaching of Mathematics . . . . . . . . . . . . .          47
    Mario Ferrari
List of Mathematical Works Authored or Edited by Enrico Magenes . . .             53
     Ugo Gianazza

Part II   Recent Developments
Heat Flow and Calculus on Metric Measure Spaces with Ricci Curvature
    Bounded Below—The Compact Case . . . . . . . . . . . . . . . . . .            63
    Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré
Spaces of Finite Element Differential Forms . . . . . . . . . . . . . . . . . 117
    Douglas N. Arnold
A Priori Bounds for Solutions of a Nonlocal Evolution PDE . . . . . . . . 141
    Luis Caffarelli and Enrico Valdinoci

                                                                                  ix
x                                                                         Contents

On the Numerical Analysis of Adaptive Spectral/hp Methods for Elliptic
    Problems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 165
    Claudio Canuto and Marco Verani
A Theory and Challenges for Coarsening in Microstructure . . . . . . . . 193
    Katayun Barmak, Eva Eggeling, Maria Emelianenko,
    Yekaterina Epshteyn, David Kinderlehrer, Richard Sharp, and
    Shlomo Ta’asan
A Generalized Empirical Interpolation Method: Application of Reduced
    Basis Techniques to Data Assimilation . . . . . . . . . . . . . . . . . 221
    Yvon Maday and Olga Mula
Analysis and Numerics of Some Fractal Boundary Value Problems . . . . 237
    Umberto Mosco
AFEM for Geometric PDE: The Laplace-Beltrami Operator . . . . . . . 257
   Andrea Bonito, J. Manuel Cascón, Pedro Morin, and Ricardo H. Nochetto
Generalized Reduced Basis Methods and n-Width Estimates for the
   Approximation of the Solution Manifold of Parametric PDEs . . . . 307
   Toni Lassila, Andrea Manzoni, Alfio Quarteroni, and Gianluigi Rozza
Variational Formulation of Phase Transitions with Glass Formation . . . 331
    Augusto Visintin
List of Contributors




Luigi Ambrosio Scuola Normale Superiore, Pisa, Italy
Douglas N. Arnold School of Mathematics, University of Minnesota, Minneapolis,
MN, USA
Claudio Baiocchi Dipartimento di Matematica “F. Casorati”, Università di Pavia,
Pavia, Italy; Dipartimento di Matematica “G. Castelnuovo”, Università di Roma “La
Sapienza”, Rome, Italy
Katayun Barmak Department of Applied Physics and Applied Mathematics,
Columbia University, New York, NY, USA
Andrea Bonito Department of Mathematics, Texas A&M University, College Sta-
tion, TX, USA
Franco Brezzi Istituto di Matematica Applicata e Tecnologie Informatiche “E. Ma-
genes”, Consiglio Nazionale delle Ricerche, Pavia, Italy
Luis Caffarelli Department of Mathematics, University of Texas at Austin, Austin,
TX, USA
Claudio Canuto Dipartimento di Scienze Matematiche, Politecnico di Torino,
Turin, Italy
J. Manuel Cascón Departamento de Economía e Historia Económica, Universidad
de Salamanca, Salamanca, Spain
Piero Colli Franzone Dipartimento di Matematica “F. Casorati”, Università di
Pavia, Pavia, Italy
Eva Eggeling Visual Computing, Fraunhofer Austria Research GmbH, Graz, Aus-
tria
Maria Emelianenko Department of Mathematical Sciences, George Mason Uni-
versity, Fairfax, VA, USA

                                                                               xi
xii                                                                List of Contributors

Yekaterina Epshteyn Department of Mathematics, The University of Utah, Salt
Lake City, UT, USA
Mario Ferrari Dipartimento di Matematica “F. Casorati”, Università di Pavia,
Pavia, Italy
Giuseppe Geymonat LMS, Laboratoire de Mécanique des Solides UMR 7649,
École Polytechnique, Palaiseau Cedex, France
Ugo Gianazza Dipartimento di Matematica “F. Casorati”, Università di Pavia,
Pavia, Italy
Nicola Gigli Université de Nice, Mathématiques, Nice, France
David Kinderlehrer Department of Mathematical Sciences, Carnegie Mellon Uni-
versity, Pittsburgh, PA, USA
Toni Lassila MATHICSE-CMCS, Modelling and Scientific Computing, École
Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
Yvon Maday Laboratoire Jacques-Louis Lions, UMR 7598, UPMC Univ Paris 06,
Paris, France; Division of Applied Mathematics, Institut Universitaire de France and
Brown University, Providence, RI, USA
Andrea Manzoni SISSA Mathlab, SISSA—International School for Advanced
Studies, Trieste, Italy
Pedro Morin Instituto de Matemática Aplicada del Litoral (IMAL), Güemes 3450
and Departamento de Matemática, Facultad de Ingeniería Química, Universidad Na-
cional del Litoral, Santa Fe, Argentina
Umberto Mosco Department of Mathematical Sciences, Worcester Polytechnic In-
stitute, Worcester, MA, USA
Olga Mula Laboratoire Jacques-Louis Lions, UMR 7598, UPMC Univ Paris 06,
Paris, France; CEA Saclay—DEN/DANS/DM2S/SERMA/LLPR, Gif-Sur-Yvette
Cedex, France
Ricardo H. Nochetto Department of Mathematics and Institute for Physical Sci-
ence and Technology, University of Maryland, College Park, MD, USA
Alfio Quarteroni MATHICSE-CMCS, Modelling and Scientific Computing, École
Polytechnique Fédérale de Lausanne, Lausanne, Switzerland; MOX, Modeling and
Scientific Computing, Dipartimento di Matematica, Politecnico di Milano, Milan,
Italy
Gianluigi Rozza MATHICSE-CMCS, Modelling and Scientific Computing, École
Polytechnique Fédérale de Lausanne, Lausanne, Switzerland; SISSA Mathlab,
SISSA—International School for Advanced Studies, Trieste, Italy
Giuseppe Savaré Dipartimento di Matematica “F. Casorati”, Università di Pavia,
Pavia, Italy
List of Contributors                                                          xiii

Richard Sharp Microsoft Corporation, Redmond, WA, USA
Shlomo Ta’asan Department of Mathematical Sciences, Carnegie Mellon Univer-
sity, Pittsburgh, PA, USA
Enrico Valdinoci Dipartimento di Matematica “F. Enriques”, Università di Milano,
Milan, Italy; Istituto di Matematica Applicata e Tecnologie Informatiche “E. Ma-
genes”, Consiglio Nazionale delle Ricerche, Pavia, Italy
Marco Verani MOX-Dipartimento di Matematica, Politecnico di Milano, Milan,
Italy
Claudio Verdi Dipartimento di Matematica “F. Enriques”, Università di Milano,
Milan, Italy
Augusto Visintin Dipartimento di Matematica, Università di Trento, Trento, Italy
Personal Memories

Franco Brezzi




Abstract Few personal memories about Enrico Magenes as scientific mentor, chair-
man of the Institute of Numerical Analysis, President of the Italian Mathematical
Union.


Enrico Magenes taught me A LOT, both as a mathematician and as a man.
   This is not obviously the place to tell what I learned in Mathematics. It is a
fact, however, that I tried to learn, at least in part, many of his human gifts: his
commitment at work, his sincerity, his love for the talent, his warm-heartedness,
a lot of things. Maybe the most important thing that I tried to learn from him, was
“not to hate.” As a matter of fact, I saw him a lot of times losing patience, but I never
had the impression he hated anybody. There were things he disapproved of. There
were persons he did not think much of. However, he never hated anybody, not even
those, who had put him in a concentration camp.
   For me, this was particularly important, and I did my best, in order to learn it.
   Under a more general point of view, for us, his students, he was an example and
a stimulus. In my opinion, his best scientific talent was one of those gifts, which are
not frequently extolled. However, still in my opinion, it is perhaps the most impor-
tant talent in a mentor: the ability to recognize the important problems. He could
sense the scientific directions, that would generate a lot of important developments,
and those that would extinguish after a couple of papers. It is in this way, with ex-
treme far-sightedness, that he could open new ways, combining mathematical rigor
with interest for applications, and starting a lot of fruitful collaborations with en-
gineers, biologists and physicians. These are things, that at the time were almost
revolutionary.
   As a matter of fact, he never forced anybody to work on a specific topic. He just
limited himself to suggesting the problems he considered important enough to be
solved. All of us were obviously EXTREMELY careful in following his advices.


F. Brezzi (B)
Istituto di Matematica Applicata e Tecnologie Informatiche “E. Magenes”, Consiglio Nazionale
delle Ricerche, via Ferrata 1, 27100, Pavia, Italy
e-mail: brezzi@imati.cnr.it

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,              3
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_1,
© Springer-Verlag Italia 2013
4                                                                              F. Brezzi

    I was his (unworthy) successor in two positions, which I consider important: the
chairmanship of the Institute of Numerical Analysis of the Italian Research Council
(CNR) (later on merged in the current Institute of Applied Mathematics and In-
formation Technologies, still of the CNR) which I took in 1992, immediately after
he finished his term, and the Presidency of the Italian Mathematical Union, which
I took thirty years later (he finished his term in 1976, I started mine in 2006).
    In the first instance, notwithstanding my commitment, the comparison was mer-
ciless. I try and console myself, telling me that nobody could possibly rival his
enthusiasm, his rigor, his vision about Mathematics, and his humanity. Moreover,
I tell myself that few would have been able, so to speak, to lose by a narrow margin.
Anyway, the comparison was really hard, and I was lucky that he was there, always
at disposal for suggestions, advices, warnings. As a matter of fact, also through the
activities of the Institute (which originally was called Laboratory), Magenes could
give birth to a large part of the Italian Applied Mathematics (in particular, Numerical
Analysis), placing it among the highest ranking international positions: just preserv-
ing this ranking was very difficult.
    The Italian Mathematical Union (UMI) owes him a lot, not only for the work
done as a member of the Scientific Committee (from 1967 to 1979) and then as
President in difficult and stormy times (from 1973 to 1976). For UMI Magenes was
always a stimulus, a source of ideas and initiatives, and at the same time a balanced
and wise presence, witness of a clear and solid vision, of what was important, and
what not. Even when he did not hold any institutional office, at national level, all
the same he was a reference point, somebody who could encourage or warn, a sort
of Guardian Angel.
    With him a large piece of history passes away, an important piece, not only for
Mathematics. Good Bye Enrico!
Some Aspects of the Research of Enrico
Magenes in Partial Differential Equations

Giuseppe Geymonat




Abstract The author traces the initial stage of Enrico Magenes’s research, with a
particular emphasis on his work in Partial Differential Equations. The very fruitful
collaborations with G. Stampacchia and J.-L. Lions are clearly presented.


1 The Beginnings in Modena

The first researches of Enrico Magenes in Partial Differential Equations date to
1952, [14, 15] (and in the same year he became professor of Mathematical Analysis
at the University of Modena). Their argument is the application to the heat equation
of a method that in the Italian School is called “Picone’s Method”. The basic idea
of the method is to transform the boundary value problem into a system of integral
equations of Fischer-Riesz type. This idea was introduced by Picone around 1935
and then deeply applied by Amerio, Fichera, and many others to elliptic equations.
For simplicity, we present the method in the simplest case of a non-homogeneous
Dirichlet problem in a smooth, bounded domain Ω ⊂ RN :
                      A(u) = f       in Ω,        γ0 u = g     on Γ := ∂Ω              (1)
where A(u) is a second order linear elliptic operator with smooth coefficients and
γ0 u denotes the trace of u on Γ ; for simplicity one can also assume that uniqueness
                                                                         ∂
holds true for this problem. Let A be the formal adjoint of A and let ∂ν   denote the
so-called co-normal derivative (when A = , then A =  and ν = n, the outgoing
                                                       

normal to Γ ). The Green formula states
                                                               
                                                      ∂u        ∂w
                  A(u)wdx −        uA (w)dx =           w−u         dΓ.           (2)
                Ω                Ω                 Γ ∂ν         ∂ν
Hence, if one knows a sequence wn of smooth enough functions, such that A (wn )
and γ0 (wn ) both converge, then, thanks to (2), the determination of the vector


G. Geymonat (B)
LMS, Laboratoire de Mécanique des Solides UMR 7649, École Polytechnique, Route de Saclay,
91128 Palaiseau Cedex, France
e-mail: giuseppe.geymonat@lms.polytechnique.fr

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,           5
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_2,
© Springer-Verlag Italia 2013
6                                                                                   G. Geymonat

(u, ∂u
     ∂ν ) with u the solution of (1) is reduced to the solution of a system of linear
equations of Fischer-Riesz type.
    The difficulty was naturally to find such a sequence, to prove its completeness (in
a suitable functional space) and hence the space where the corresponding system is
solvable and so the problem (1).
    Following Amerio [1], let the coefficients of A be smoothly extended to a do-
main Ω   ⊃ Ω and for every fixed R ∈ Ω      let F (P , R), as a function of P , be the
fundamental solution of A (w) = 0 (moreover, such a fundamental function can be
chosen so that, as a function of R, it also satisfies A(u) = 0). Then from (1) and (2)
it follows that for every Q ∈ Ω\Ω
                                                        
                     ∂F (x, Q) ∂u(x)
      0=       u(x)            −          F (x, Q) dΓ −        f (x)F (x, Q)dx.      (3)
            Γ           ∂ν          ∂ν                       Ω

This equation gives a necessary compatibility condition between γ0 u and ∂u(x)∂ν .
Moreover, if ϕn is a sequence of “good” functions defined in Ω \ Ω, then one can
take wn (P ) = Ω\Ω
                     ϕ n (x)F (P , x)dx. Two problems remain:

 (i) the choice of the sequence ϕn , in order that the procedure can be applied;
(ii) the determination of the good classes of data f, g, Ω, and solutions u to which
     the procedure can be applied.
In this context it is also useful to recall that for every P ∈ Ω it holds
                                                                 
 2π N/2                       ∂F (x, P ) ∂u(x)
          u(P ) =        u(x)            −          F (x, P ) dΓ −      f (x)F (x, P )dx.
Γ (N/2)              Γ            ∂ν          ∂ν                      Ω
                                                                                      (4)
In order to study the previous problems, one has to study the fine properties of
the simple and double layer potentials, appearing in (3) and (4). See for instance
Fichera’s paper [3], where many properties are studied, and in particular results of
completeness are proved. (The modern potential theory studies the fine properties
of the representation (4) for general Lipschitz domains and in a Lp framework.)
   Magenes applied the method to the heat operator E(u) = u − ∂u    ∂t in Ω × (0, T ),
whose formal adjoint is E  (u) = u + ∂u ∂t ; the Green formula (2) becomes
                        T                       T
                                 E(u)wdxdt −               uE  (w)dxdt
                        0    Ω                     0   Ω
                               T             
                                    ∂u       ∂w
                            =          w−u        dΓ dt
                               0 Γ ∂n        ∂n
                                                
                              +   u(T )w(T )dx −    u(0)w(0)dx.                               (5)
                                  Ω                        Ω
Following the approach of Amerio and Fichera, Magenes used the fundamental so-
                                                                                 −x
lution of the heat equation, defined by F (x, t; x  , t  ) = t  1−t exp(− x               
                                                                             4(t  −t) ) for t > t
and F (x, t; x  , t  ) = 0 for t  ≤ t. He also defined a class of solutions of the heat
Research in PDE                                                                      7

equation E(u) = f , assuming the boundary value in a suitable way and represented
by potentials of simple and double layer.
   These researches were followed [17] by the study of the so-called mixed prob-
lem, where the boundary is splitted in two parts: in the first one the boundary condi-
tion is of Dirichlet type, and in the other one the datum is the co-normal derivative.
This problem was of particular difficulty for the presence of discontinuity in the
data, even in the stationary case: see [16] (where the results are stated for N = 2,
although they are valid for arbitrary N ) and has stimulated many researches using
potential theory not only of Magenes (see e.g. [18, 19]) but also of Fichera, Miranda,
Stampacchia, . . .


2 The Years in Genoa with G. Stampacchia
From the historical point of view, these researches show the change of perspective
that occurred in Italy at that time in the study of these problems with the use of
• some first type of trace theorems (e.g. inspired by the results of Cimmino [2]);
• the introduction of the concept of weak solution;
• the use of general theorems of functional analysis (see e.g. [4]).
Under this point of view, the following summary of a conference of Magenes gives
a typical account (see [20]). Breve esposizione e raffronto dei più recenti sviluppi
della teoria dei problemi al contorno misti per le equazioni alle derivate parziali
lineari ellittiche del secondo ordine, soprattutto dal punto di vista di impostazioni
“generalizzate” degli stessi (A short presentation and comparison of the most re-
cent developments in the theory of mixed boundary value problems for second order
elliptic linear partial differential equations, mainly from the point of view of “gen-
eralized” approaches to them).
    At the end of 1955 Magenes left the University of Modena for the University of
Genoa, where he had G. Stampacchia as colleague. Stampacchia was a very good
friend of Magenes from their years as students at Scuola Normale, since both where
antifascist. Moreover, Magenes and Stampacchia were well aware of the fundamen-
tal change induced by the distribution theory and the Sobolev spaces in the calculus
of variations and in the study of partial differential equations, particularly in the
study of boundary value problems for elliptic equations (see for instance the bibli-
ography of [20]).
    They studied the works of L. Schwartz and its school, and specially the results
on the mixed problem in the Hadamard sense. At the first Réunion des mathémati-
ciens d’expression latine, in September 1957, Magenes and Stampacchia met J.-L.
Lions. It was the beginning of a friendship, that would never stop. During the Spring
1958, J.-L. Lions gave at Genoa a series of talks on the mixed problems [5, 6], and
in June 1958 Magenes and Stampacchia completed a long paper [22], that would
have a fundamental influence on the Italian researches on elliptic partial differential
equations. Indeed, that paper gives a general presentation of the results obtained up
to that moment in France, United States, Sweden, Soviet Union by N. Aronszajn,
8                                                                          G. Geymonat

F.E. Browder, G. Fichera, K.O. Friedrichs, L. Gårding, O. Ladyzenskaja, J.-L. Li-
ons, S.G. Mikhlin, C.B. Morrey Jr., L. Nirenberg, M.I. Visik, . . . .
    It is worth giving the titles of the four chapters: I General notions, II Boundary
value problems for linear elliptic equations, methods with finite “Dirichlet integral,”
III Problems of regularization, IV Other approaches to boundary value problems.
Then, in the following few years Magenes tried to increase the audience of this
methodology in the Italian mathematical community, giving lectures in various uni-
versities (see e.g. [21]), for instance organizing with Stampacchia a CIME course
on distribution theory in 1961, . . .
    At the end of 1959 Magenes left Genoa and went to the University of Pavia.
During the year 1959, the collaboration with J.-L. Lions became more active and
they started a long series of joint works [7–10], whose results were summarized
and fully developed in a series of books [11–13] translated in Russian, English and
Chinese.



3 The Collaboration with J.-L. Lions in the Study of Boundary
  Value Problems
Following an idea of J. Hadamard, Courant and Hilbert (Methods of Mathematical
Physics, volume II, Interscience, 1962, p. 227) state that a mathematical problem,
which must correspond to a physical reality, should satisfy the following basic re-
quirements:
1. The solution must exist.
2. The solution should be uniquely determined.
3. The solution should depend continuously on the data (requirement of stability).
In order to satisfy these requirements, one has to identify the functional spaces
where the problems are well-posed. The distribution theory and the Sobolev spaces
give a natural framework and the instruments to study partial differential equations.
The results collected in the first three chapters of [22] allow to prove that the el-
liptic boundary value problems with homogeneous boundary data are well posed
in Sobolev spaces W m,2 (Ω) with m big enough. For non-homogeneous boundary
data, the situation was more difficult, since at first it was necessary to give a good
definition of the trace γ0 u of an element u ∈ W m,p (Ω) on Γ := ∂Ω. The good
definitions and the corresponding characterizations were given (under various con-
ditions on p ≥ 1, on m > 1 − p1 and on the regularity of the domain Ω, i.e. of
its boundary Γ ) by E. Gagliardo, J.-L. Lions, and P.I. Lizorkin, G. Prodi, . . . . In
particular it was proved that the trace operator cannot be continuously defined on
L2 (Ω).
    However, for many problems coming from the applications (e.g. mechanics, en-
gineering, . . .) the natural setting is in Sobolev spaces of low order and sometimes
of negative order. Therefore, it is necessary to define a weak or generalized solution
of a non-homogeneous boundary value problem and hence, to give a good definition
of trace in a weak sense.
Research in PDE                                                                      9

    Inspired by the theory of distributions, Lions and Magenes [7–10] tackled the
problem by duality. More precisely let us consider the map u → Au := {Au, Bγ0 u},
where A is a linear elliptic operator with smooth coefficients defined in a domain
Ω ⊂ RN with smooth boundary Γ , and Bγ0 is a linear differential operator with
smooth coefficients, defined on Γ , and compatible with A in a suitable sense.
    Such a general framework is a “natural” extension of the Dirichlet problem (1).
Thanks to known regularity results (described for instance in Chap. III of [22]), the
map A : E(Ω) → F (Ω) × G(Γ ) is an isomorphism (for simplicity, and in general a
finite index operator) between the Sobolev spaces E(Ω) and F (Ω) × G(Γ ), where
these spaces are of big enough positive order.
    In the case of (1), one can take for instance E(Ω) = H m+2 (Ω)(= W m+2,2 (Ω))
with m ≥ 0, and then F (Ω) = H m (Ω) and G(Γ ) = H m+3/2 (Γ ). By restriction to
the case of homogeneous boundary data and to the space F0 (Ω) (closure of D(Ω)
into F (Ω)), it is possible to define the isomorphism A : X(Ω) → F0 (Ω), where
X(Ω) is a subspace of E(Ω).
    By transposition, for every linear and continuous form L(v) on X(Ω), there
exists u ∈ (F0 (Ω)) such that
                                  
                           u, A (v) = L(v) for all v ∈ X(Ω).                      (6)
Let us point out that (F0 (Ω)) is a Sobolev space of negative order (in the case of
(1) F0 (Ω) = H0m (Ω) and (F0 (Ω)) = H −m (Ω)). In order to get the wanted result,
Lions and Magenes chose L = L1 + L2 in such a way that L1 gives rise to the
equation A u = f , where A is the linear elliptic operator formally adjoint to A,
and L2 corresponds to the non-homogeneous boundary conditions B  u = g in the
most natural way.
   Perhaps the most interesting contribution of Lions and Magenes was the optimal
choice of L2 . It was obtained thanks to a clever use of the Green formula, that allows
to naturally define the traces of every element u ∈ (F0 (Ω)) , such that A u belongs
to a suitable distribution space on Ω.
   For instance, in the case of (1) with A = A = , Bγ0 = ∂n     ∂
                                                                     := γ1 and m = 0,
one can define the trace γ0 u ∈ H   −1/2 (Γ ) for every u ∈ L (Ω), such that A u =
                                                               2

u ∈ L2 (Ω). The main steps of the proof are the following:
1. One proves the density of D(Ω) into the space Y (Ω) := {u ∈ L2 (Ω); u ∈
   L2 (Ω)}, equipped with the natural graph norm.
2. Let us define X(Ω) = {v ∈ H 2 (Ω); γ0 u = 0} and let us remark that the map
   v −→ γ1 v is a linear and continuous map of X(Ω) onto H 1/2 (Γ ), whose kernel
   is H02 (Ω).
3. For every (u, φ) ∈ Y (Ω) × H 1/2 (Γ ), one defines the bilinear and bi-continuous
   map L2 (u, φ) with
                                                  
                       L2 (u, φ) =    uvφ dx −        uvφ dx,
                                     Ω               Ω
   where vφ ∈ X(Ω) is such that γ1 vφ = φ (it is easy to verify that indeed
   L2 (u, φ) = 0 when vφ ∈ H02 (Ω) and hence, L2 (u, φ) does not depend on the
   particular choice of vφ ).
10                                                                                    G. Geymonat

4. One can do the identification
                                       L2 (u, φ) = T u, φ ,
   where •,• denotes the duality pairing between H −1/2 (Γ ) and H 1/2 (Γ ), and
   u −→ T u is linear and continuous from Y (Ω) to H −1/2 (Γ ).
5. When u ∈ D(Ω), then the Green formula (2) implies
                                            
                                L2 (u, φ) =   uφdΓ
                                                      Γ
     and hence, the map T can be identified with the trace map.
   The books [11] and [12] present the general theory, not only for elliptic operators,
but also for linear evolution equations of parabolic type, both in distributions spaces
and also [13] in ultra-distributions of Gevrey classes.



References
 1. Amerio, L.: Sul calcolo delle soluzioni dei problemi al contorno per le equazioni lineari
    del secondo ordine di tipo ellittico. Am. J. Math. 69, 447–489 (1947)
 2. Cimmino, G.: Sulle equazioni lineari alle derivate parziali di tipo ellittico. Rend. Semin. Mat.
    Fis. Milano 23, 1–23 (1952)
 3. Fichera, G.: Teoremi di completezza sulla frontiera di un dominio per taluni sistemi di fun-
    zioni. Ann. Mat. Pura Appl. (4) 27, 1–28 (1948)
 4. Fichera, G.: Methods of functional linear analysis in mathematical physics: “a priori” es-
    timates for the solutions of boundary value problems. In: Proceedings of the International
    Congress of Mathematicians, vol. III, Amsterdam, 1954, pp. 216–228. North-Holland, Ams-
    terdam (1956)
 5. Lions, J.-L.: Problemi misti nel senso di Hadamard classici e generalizzati. Rend. Semin. Mat.
    Fis. Milano 28, 149–188 (1958)
 6. Lions, J.-L.: Problemi misti nel senso di Hadamard classici e generalizzati. Rend. Semin. Mat.
    Fis. Milano 29, 235–239 (1959)
 7. Lions, J.-L., Magenes, E.: Problemi ai limiti non omogenei. I. Ann. Sc. Norm. Super. Pisa, Cl.
    Sci. (3) 14, 269–308 (1960)
 8. Lions, J.-L., Magenes, E.: Problèmes aux limites non homogènes. II. Ann. Inst. Fourier
    (Grenoble) 11, 137–178 (1961)
 9. Lions, J.-L., Magenes, E.: Problemi ai limiti non omogenei. III. Ann. Sc. Norm. Super. Pisa,
    Cl. Sci. (3) 15, 41–103 (1961)
10. Lions, J.-L., Magenes, E.: Problèmes aux limites non homogènes. VII. Ann. Mat. Pura Appl.
    (4) 63, 201–224 (1963)
11. Lions, J.-L., Magenes, E.: Problèmes aux limites non homogènes et applications, vol. 1.
    Dunod, Paris (1968)
12. Lions, J.-L., Magenes, E.: Problèmes aux limites non homogènes et applications, vol. 2.
    Dunod, Paris (1968)
13. Lions, J.-L., Magenes, E.: Problèmes aux limites non homogènes et applications, vol. 3.
    Dunod, Paris (1970)
14. Magenes, E.: Sull’equazione del calore: teoremi di unicità e teoremi di completezza connessi
    col metodo di integrazione di M. Picone, Nota I. Rend. Semin. Mat. Univ. Padova 21, 99–123
    (1952)
15. Magenes, E.: Sull’equazione del calore: teoremi di unicità e teoremi di completezza connessi
    col metodo di integrazione di M. Picone, Nota II. Rend. Semin. Mat. Univ. Padova 21, 136–
    170 (1952)
Research in PDE                                                                                    11

16. Magenes, E.: Sui problemi al contorno misti per le equazioni lineari del secondo ordine di tipo
    ellittico. Ann. Sc. Norm. Super. Pisa, Cl. Sci. (3) 8, 93–120 (1954)
17. Magenes, E.: Problemi al contorno misti per l’equazione del calore. Rend. Semin. Mat. Univ.
    Padova 24, 1–28 (1955)
18. Magenes, E.: Problema generalizzato di Dirichlet e teoria del potenziale. Rend. Semin. Mat.
    Univ. Padova 24, 220–229 (1955)
19. Magenes, E.: Sulla teoria del potenziale. Rend. Semin. Mat. Univ. Padova 24, 510–522 (1955)
20. Magenes, E.: Recenti sviluppi nella teoria dei problemi misti per le equazioni lineari ellittiche.
    Rend. Semin. Mat. Fis. Milano 27, 75–95 (1957)
21. Magenes, E.: Sui problemi al contorno per i sistemi di equazioni differenziali lineari ellittici
    di ordine qualunque. Univ. Politec. Torino. Rend. Semin. Mat. 17, 25–45 (1957/1958)
22. Magenes, E., Stampacchia, G.: I problemi al contorno per le equazioni differenziali di tipo
    ellittico. Ann. Sc. Norm. Super. Pisa, Cl. Sci. (3) 12, 247–358 (1958)
Enrico Magenes and the Dam Problem

Claudio Baiocchi




Abstract In a very vivid way, the author describes how Magenes was introduced to
the Dam Problem, and how the group around Magenes, made up by pure analysts,
numerical analysts, mathematical physicists, worked hard to provide a solution that
could be satisfactory both from a theoretical and practical point of view.


Enrico Magenes, Director of the Institute of Numerical Analysis of the Italian Re-
search Council (IAN), which he had founded, was always looking out for new prob-
lems, that might inspire the Institute research.
   In 1970 the School of Engineering of the University of Pavia hired Ugo Maione,
an engineer, as professor of Hydraulics. Maione had a very good reputation, and
Magenes immediately seized the opportunity: he contacted the new professor, and
suggested a meeting, in order to examine the possibility of starting a collaboration
between the two Institutes.
   Maione gladly accepted, and at the first meeting, that took place in Magenes’s
office, amongst others were present also Valeriano Comincioli, as numerical analyst,
and Luciano Guerri, as mathematical physicist; as for me, I was supposed to be the
pure mathematician: indeed, one of Magenes’s strongest conviction was always the
idea, that within the Institute research activities, the numerical treatment of every
single problem should come together and rely upon a deep theoretical analysis.
   Maione commenced saying that he had several irons in the fire, but at the mo-
ment, the topic he was most interested in was the numerical treatment of a Hy-
draulics problem, that can be summarized in this way: a pile of dirt separates two
water basins at different heights; due to the gravity force, water flows through the
pile and, by inserting a proper concrete bulkhead (omitted in Fig. 1), one wants to
reduce the dam flow.


C. Baiocchi (B)
Dipartimento di Matematica “F. Casorati”, Università di Pavia, via Ferrata 1, 27100 Pavia, Italy
e-mail: bici.nando@gmail.com

C. Baiocchi
Dipartimento di Matematica “G. Castelnuovo”, Università di Roma “La Sapienza”, Piazzale Aldo
Moro 5, 00185 Rome, Italy

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,              13
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_3,
© Springer-Verlag Italia 2013
14                                                                            C. Baiocchi

Fig. 1 A dam separates two
water basins at different
heights




    The real problem, which had to do with some dams in Sudan, if I remember cor-
rectly, was obviously much more complicated, but Maione was willing to postpone
the main difficulties for the moment: for example, assuming the dirt to be homoge-
neous, the dam vertical section to be constant and geometrically simple, that capil-
larity and viscosity are negligible, that after a short transient state, the evolution of
the phenomenon reaches a steady state, and therefore the Darcy Law can be applied
...
    Thus, we got to a two-dimensional problem, whose mathematical statement reads
in this way (see Fig. 2): the two basins and the rectangular dam, which separates
them, lie on a horizontal waterproof basis (the x axis); the curve ϕ (the so-called
free surface) bounds from above the wet section Ω of the dam; in such a set, one
looks for a function (the so-called piezometric height), which must satisfy both the
equations in Fig. 2 and further qualitative properties (for example u > 0 in Ω); as
a matter of fact, from a purely applicative point of view, it suffices to estimate the
function ϕ, as one can easily deduce all the other relevant quantities (pressure, flow,
etc.) from it.
    The only “complication” Maione was not willing to get rid of, was the presence
of the waterproof concrete bulkhead: indeed, he claimed that without it, the prob-
lem was largely studied (mainly in the Russian literature) by means of conformal
transforms, and there was no need to reinvent the wheel.
    Somehow we succeeded in convincing him, that starting with the problem with-
out the bulkhead was worth the effort: the numerical results obtained by means of
conformal transforms could be a test for a numerical treatment of a different kind,
which we could then hopefully adapt to the problem with the bulkhead . . .
    As a matter of fact, still during the first meeting, a possible numerical approach
was sketched by Comincioli and Guerri: on a domain bounded by a “first approx-
imation” y = ϕo (x) of the unknown boundary, one solves (obviously numerically)
the problem just with the Neumann condition on the portion ϕo of such a boundary;
the other condition, namely u(x, ϕo (x)) = ϕo (x), in general will not be satisfied,
but one can define the quantity ϕ1 (x) = u(x, ϕo (x)) as a new approximation of the
unknown function; one then iterates, and hopefully the numerical procedure con-
verges. Such a convergence should actually suggest the possibility that a fixed point
theorem provides both an existence result and a numerical justification of the nu-
merical treatment.
Enrico Magenes and the Dam Problem                                                                  15

Fig. 2 The two-dimensional,
simplified dam problem




   Few days later, while I was struggling with the papers that made use of the con-
formal transform, suddenly I remembered an episode that had taken place a couple
of years before: in 1968 Magenes had “invited” me (so to say), one of his young
students, to go to Rome with him, in order to take part to a Symposium organized
by the Institute of Higher Mathematics.
   It is still very fresh in my memory the lecture hall that hosted the symposium:
it was filled up with a number of sacred cows (not only Italian) of Mathematics;
amongst the names that I can remember, let me mention Felix Browder, Ennio De
Giorgi, Gaetano Fichera, Jacques Louis Lions, Enrico Magenes, Carlo Miranda,
Louis Nirenberg, Laurent Schwartz, Guido Stampacchia, . . .
   In particular, a communication presented by Carlo Miranda was about a problem
he had been suggested by a colleague of Hydraulics, Russo Spena, and he had dealt
with some time before in collaboration with Renato Caccioppoli.
   More or less, Miranda started in this way:
   In a domain whose boundary is given by four rectifiable arcs, we look for a harmonic
   function, which is constant on two noncontiguous arcs; on the remaining two, the normal
   derivative vanishes, and finally, on one of the two, a Dirichlet-type condition is given . . .

    At that point, from the first row, at the same time two voices called loud, and
stopped the presentation: Fichera turned towards his student De Vito, and asked him
to take detailed notes; Magenes cried out: “You cannot do that, you have already
imposed a different condition on that curve.” Miranda replied: “If you let me finish,
you will understand,” and explained that the said curve was not given, but it was one
of the unknowns of the problem . . .
    When this episode came back to my mind, I rushed to the library and I found
Miranda’s work printed in the proceedings of the symposium. At a first reading,
I realized it was exactly our problem, although without the bulkhead.
    In Miranda’s approach, the existence result relied on a fixed-point-type theorem,
exactly as we hoped we could do with the numerical treatment we had devised in our
first meeting; in the meantime, under the guidance of Comincioli and Guerri, this
problem had been assigned to a very smart student, Giampiero Volpi, as his thesis
dissertation. Let me say here that the student was indeed so smart, that later on IBM
stole him from us and hired him . . .
16                                                                          C. Baiocchi

    Magenes was very happy he had a theoretical basis, on which the numerical
treatment could rest, and Maione was immediately summoned, in order to give him
the good news, but . . . disaster: in Miranda’s approach, there was no room for the
suspended source! In other words, because of unavoidable physical reasons, the
unknown curve must end at a point that lies strictly above the lower basin, whereas
in Miranda’s work the curve ended exactly at the height of the lower basin.
    We were in a deadlock: Magenes was keen to agree with Miranda, not only for
the deep esteem he had for him, but also because it was a redrafting of an idea origi-
nally due to Caccioppoli; on the other hand, Maione invited us to visit his Hydraulics
laboratory; there, we saw an analogical device, where the Hydraulics physical phe-
nomenon was simulated by means of a capillarity phenomenon (Hele-Shaw effect),
and the suspended source was clearly visible!
    A couple of months later, an idea, that turned out to be very fruitful, allowed
me to give a weak formulation to the problem, and independently of the existence
or not of the suspended source, everything was recast as a variational inequality;
in turn, this provided an existence and uniqueness result for the solution. Then,
relying on ideas that were already present in the Russian literature, and by means
of a particular technique that Miranda himself had used, I succeeded in proving that
the weak solution was indeed a strong solution, and that the suspended source had
to exist . . .
    We were all excited, as the tool represented by variational inequalities lent it-
self to a numerical approach of the problem, which was at the same time extremely
simple under the point of view of programming (an aspect I will talk about in a
moment), and offered the possibility to provide a priori estimates for the error; Ma-
genes considered this particular possibility an essential condition in every single
numerical approach. However, we were left with a sort of “diplomatic” problem:
how could we tell Miranda that his paper contained a mistake? And where exactly
was this mistake?
    I have to confess that even nowadays I cannot answer the second question, as
some points of Miranda’s work were somehow confusing; as for the first question,
it was Magenes who, with special care, told Miranda what was going on. Miranda’s
reaction was extremely reasonable: probably Caccioppoli had kept those ideas in
the drawer, as some of the details still needed to be polished; Miranda’s decision
to publish these results, should not damage his Master’s reputation! On the other
hand, I had used some ideas from that paper, and I wanted to cite it. Promising
himself to get back to the problem later on, Miranda begged me to limit myself
to an unspecific citation, of the kind “for a similar problem, see . . .,” and I gladly
accepted this suggested solution.
    From Maione’s point of view, although still not completely satisfactory, as the
bulkhead was not there, the result was very much appreciated: even if he did not
have the necessary expertise to appreciate the correctness of the approximation, he
quickly realized that there was no more any need to discretize the differential equa-
tion on a sequence of domains, in each of whom the shape of the domain depended
on the solution of the previous problem: the solution on the whole rectangle of a sin-
gle variational inequality provided all the looked-for quantities, free-surface curve
included!
Enrico Magenes and the Dam Problem                                                   17

    Moreover, the comparison with the discretization on variable domains was ex-
tremely favorable under every point of view; besides largely improving the memory
management and the processing time, the new approach cut the programming com-
plexity down to the bone: even I could write down such a program!
    We were all euphoric for this achievement, and the argument looked very promis-
ing; it was therefore time to devote ourselves to the study of more sophisticated
problems (primarily the bulkhead). Magenes and Maione quickly agreed on a se-
ries of joint seminars: we would explain Sobolev spaces to engineers, and engineers
would present us the main points one needs to know in the study of the motion of
fluids. Unfortunately, in a short time, the number of engineers quickly shrank just
to Maione; on the contrary, probably because Magenes had been extremely clear in
inviting us to take part to the seminars, the mathematicians’ group remained com-
pact. Frankly speaking, I cannot say how many of the notions Maione explained
us really entered the participants’ heads (in my case I have some vague remem-
brances about Bernoulli’s law and the water hammer effect), but from the point of
view of scientific productivity, the results were noteworthy, and achieved in a very
short time: indeed, we had to scoop the competition, because Magenes, as he used
to do, had set up a real advertising campaign (organization of a CIME Summer
course, a set of seminars at SISSA, talks at meetings and conferences . . .), so that
in a short time this research topic was brought to the attention of the Italian mathe-
matical community; this was particularly easy, because variational inequalities and
their applications were at that time a peak topic.
    I cannot mention here all the names of the persons that gave a contribution to
this enterprise, and I strongly apologize for this with all the colleagues; I will limit
myself to say that the “Pavia School” quickly succeeded in getting rid of many
of the initial “simplifications”, providing in this way a solution to almost all the
problems, we had originally set apart: not only the insertion of a bulkhead, but also
the presence of capillarity, the lack of homogeneity of the building material, the
evolution phenomenon . . .
    Amongst the problem we solved, one, which was particularly valued by Maione,
was the extraction of fresh water from a stratum close to the coast (see Fig. 3):
the salty water seeps below the fresh water stratum (which is lighter); however, the
difference in density of the two fluids is so small, that a small perturbation runs the
risk to mix them together, making the precious good unusable.
    It is interesting to remark that the context where these results can be applied is
much larger: when I presented this problem in an American university, I heard the
audience noisily grumbling, till one of the presents raised her hand and asked me:
“Where is oil?”
    Amongst all the problems Maione has suggested us, only the case of a more
complicated geometry took more time to be solved: variational inequalities did not
suffice here, and we had to resort to “quasi-variational inequalities” a tool that the
French School headed by Jacques Louis Lions was introducing and developing right
at that time.
    I am going to conclude, mentioning two episodes, that I still remember with great
pleasure.
18                                                                                 C. Baiocchi

Fig. 3 A fresh water stratum
close to the coast




    At a Hydraulics meeting, Maione gave a talk, and presented our results: in order
to give a more thorough, mathematical description, he registered me too. Nobody
knew me there, and therefore, during Maione’s seminar, mixed among the partici-
pants, I could hear some nipping comments about the importance of mathematical
theorems, without which water could not flow . . . However, when Maione presented
all the details of the numerical simulations and the comparison with different meth-
ods, sarcasm disappeared, and also my seminar was listened to, with great attention.
    The second episode took place during a mathematical meeting, where I got the
following comment by Ennio De Giorgi:
     It is really true that Mathematics is changing; once upon a time 90 % of the speakers
     started drawing a potato-like object, and continued saying “Let us consider a domain D
     . . . ” Nowadays almost everybody starts, talking about a given domain D, but then she
     draws half a potato!
Inverse Problems in Electrocardiology

Piero Colli Franzone




Abstract The author outlines from an historical point of view the mathematical
problems, which were the main topics of his scientific collaboration with Enrico
Magenes. A full account of the joint work on mathematical models for electrocar-
diology is given. The paper ends commenting few original letters Magenes wrote to
the author: it gives a clear description of the work method, and also of the “gentle”
pressure to which Magenes’s collaborators were exposed.


1 Introduction

In this work, I will outline from an historical point of view the mathematical prob-
lems which were the main topics of my scientific collaboration with Enrico Ma-
genes. I must first recall and emphasize Enrico Magenes’ crucial role as promoter
and organizer of research activities in the fields that today are known as Scientific
Computing, Applied Mathematics, and in particular of Biomedical Applications. He
carried out this role in particular during his tenure as Director of the Laboratorio di
Analisi Numerica (LAN, Laboratory of Numerical Analysis), from 1970 to 1993.
   Peculiar qualities of Enrico Magenes, shared with Jacques-Louis Lions, were the
scientific open-mindedness and the curiosity toward interesting mathematical mod-
els formulated as systems of partial differential equations having a strong impact in
significant applications. After having productively collaborated on several impor-
tant research projects, both scientists reached beyond their own fields of expertise,
with the objective to set up and develop the numerical analysis of partial differential
equations (PDEs) in a modern functional framework.
   Starting from 1970 as the Director of LAN, Magenes encouraged the initiation
of research activities on:


P. Colli Franzone (B)
Dipartimento di Matematica “F. Casorati”, Università di Pavia, via Ferrata 1, 27100 Pavia, Italy
e-mail: colli@imati.cnr.it
P. Colli Franzone
e-mail: piero.collifranzone@unipv.it

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,              19
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_4,
© Springer-Verlag Italia 2013
20                                                                    P. Colli Franzone

• the analysis of Finite Element FE method for the approximation of second order
  elliptic boundary value problems and of control problems of distributed systems;
• the implementation of FE methods and the planning of numerical simulations
  on bi-dimensional test problems (with simple structured meshes on rectangular
  domains), in order to evaluate the optimality of the theoretical estimates related
  to the FE order of convergence.



2 Cardiac Body Surface Maps and Inverse Potential Problems

During the mid-seventies, the Italian Research National Council (CNR) launched
a set of feasibility studies focused on thematic research projects between C.N.R.
Laboratories, Universities and various Industries.
    In 1976, the first so-called Progetti Finalizzati del CNR (i.e. Goal-Oriented
Projects) were started and Magenes was appointed member of the Scientific Coun-
cil of the Progetto Finalizzato Tecnologie Biomediche 1976–1980, coordinated by
Prof. Luigi Donato, Director of the CNR Institute of Clinical Physiology in Pisa.
    Magenes encouraged Luciano Guerri, Carla Viganotti and myself to elaborate a
project concerning the relationship between electrocardiograms and the excitation
process of the heart. As a first step, we considered the so-called Inverse Problem
of Electrocardiography, consisting in computing the electric potential map on a
surface near and surrounding the heart volume from the electric potential measured
in various points distributed on the body surface.
    The main goal of the project submitted by the LAN research team, was to develop
numerical algorithms for solving the inverse problem and subsequently to apply
the inverse procedure to data measured in experiments on animals. The data were
collected by Prof. Bruno Taccardi in experiments on isolated dog hearts using an
advanced electrical and digital equipment conceived and designed by Prof. Emilio
Gatti of the Politecnico di Milano and assembled at the Centro C.I.S.E.. At that time,
the results of two experiments on animals were available, performed on two dogs
called Tristano and Isotta.
    The research proposal was accepted and included in the subproject Bio-
Immagini 2 concerning the analysis of Cardiac Body Surface Maps. The achieve-
ment of the LAN project goals entailed reaching new methodological and compu-
tational goals:
• the development of finite element numerical codes for solving second order ellip-
  tic problem on three-dimensional domains;
• the numerical solution of ill-posed minimum problems related to quadratic func-
  tional subjected to distributed constraints;
• the analysis and application of numerical FE codes to synthetic data associated
  to test problems, in order to estimate the accuracy of the results and subsequently
  the application to large experimental data sets.
Inverse Problems in Electrocardiology                                                21

Fig. 1 Epicardial electric
equipotential lines in
millivolts, drawn manually on
a projected anterior and
posterior heart surface in dog
experiments




   Facing these demanding and challenging tasks, at that time I expressed my per-
plexity to Magenes regarding the team effective capability to reach the project goals
but, as people acquainted with Magenes would have known, his expected answer
was: “Senta, Colli, non faccia la solita mammoletta (i.e. Listen, Colli, do not be-
have as the usual shrinking violet).”
   The data handling of the measured potential body and heart surface maps re-
quired, for its analysis and interpretation, the drawing of equipotential lines. At that
time, these level lines were drawn manually on the printed potential values in milli-
volt; an example is displayed in Fig. 1. Subsequently, the LAN laboratory acquired
a Tektronix 4010 graphical equipment for automatically tracing the equipotential
lines on the projected body and heart surfaces, see Fig. 2.
   At this point, I would like to insert a letter, which Prof. Bruno Taccardi sent me
few years ago, containing several memories about Enrico Magenes:
    “Dear Piero, it is my pleasure to acknowledge the important role played by
Professor Magenes and his school, in the 70’s and subsequent years, in promot-
ing advances in mathematics and computer science in the area of normal and
pathological cardiac electrophysiology. Our group of electrophysiologists, first at
the Free University of Brussels (1951–1959), then at the Simes Institute in Mi-
lano and at the Universities of Pavia and Parma (Taccardi, De Ambroggi, Mac-
chi, Musso et al.) had observed that the classical 12-lead electrocardiogram, uni-
versally used in clinical cardiology, contained only a fraction of the electrical in-
formation that is present on the surface of the human body. Meticulous investi-
gations in experimental animals had shown that it was possible to obtain maps
that depict the distribution of the electric potential generated by the heart in extra-
cardiac volume conductors (Brussels, 1951, 1958) and on the entire body sur-
face (1962, 1963, Circulation Research). These maps revealed heart abnormali-
ties even in patients with normal 12-lead electrocardiograms. Unfortunately, hun-
dreds of measurements were necessary to obtain the maps, involving a month of
manual work for every patient. The measurements were then automated, thanks to
the electronic instruments developed at the CISE Institute, under the direction of
Prof. Emilio Gatti. Furthermore, to convert the signals collected from 240 body
surface sites into images readable by a clinician, we needed advanced computing
and graphic methods that were not available in any electrophysiological labora-
22                                                                               P. Colli Franzone




Fig. 2 Epicardial electric equipotential lines in millivolts automatically drawn on a projected an-
terior and posterior heart surface in a dog experiments using a Tektronix 4010 graphical equipment




tory. Through the intervention of Prof. Casella (University of Pavia) we were intro-
duced to Prof. Magenes, who gave a decisive impulse to our research. Professor
Magenes understood that it was important to move from the body-surface infor-
mation to the knowledge of the intracardiac electrical events that trigger the me-
chanical heart beat. The theoretical feasibility of this transition, predicted by Prof.
Pilkington (Duke University, 1968), see [12], was confirmed by Prof. Magenes’s
group (Colli Franzone et al.) who published the first cardiac maps obtained with
the “inverse” procedure. The cooperation between our group of physiologists and
the bio-mathematicians in Pavia continued for about 40 years, and resulted in a
number of publications. Prof. Magenes’s group is still active and productive in the
field.”

    Let me now state the Forward or Direct Problem of Electrocardiography:
given the potential at the surface Γh bounding the heart and close to it, compute the
potential map on the body surface Γt .
    For simplicity, we assume that the body volume Ω outside the heart H is an
isotropic and homogeneous conductor, see Fig. 3. Since the current sources lie only
in the heart muscle and the body surface Γt in contact with air is insulated, then, at
any time instant t of the heart beat, the potential field U (x, t), under the quasi-static
Inverse Problems in Electrocardiology                                                23

Fig. 3 Sketch of the
geometrical domains




assumption, satisfies the following elliptic problem with mixed boundary condi-
tions:
                   ⎧
                   ⎨ −U (x, t) = 0     in Ω,
                                                  ⇒ z = U|Γt
                     U (x, t) = v(x, t) on Γh ,
                   ⎩ T
                     n ∇U (x, t) = 0 on Γt .
For any time instant t and v = U (x, t) on Γh , let z be the trace on the thorax surface
Γt of the solution of the previous mixed problem.
    We then have a Transfer Operator relating the heart to the body surface poten-
tials:
                                T : v = U|Γh → z = U|Γt .
The Inverse Potential Problem of Electrocardiography consists in finding the po-
tential distribution on a surface near and surrounding the heart surface, correspond-
ing to a given body surface potential map z on Σ ⊂ Γt , where Σ denotes the part
of the torso surface where the potential U (x, t) is measured. This inverse problem
consists in solving the following Cauchy problem for the elliptic operator:
                    ⎧
                    ⎨ −U (x, t) = 0, in Ω,
                                                    ⇒ v = U|Γh
                      U (x, t) = z(x, t) on Σ,
                    ⎩ T
                      n ∇U (x, t) = 0 on Γt .
For t fixed, we have a corresponding potential v = U (x, t) on a surface Γh encircling
the heart and very close to it, which I call epicardial potential. Since Γh is close to
the heart surface, the potential v = U|Γh for a sequence of time instants, yields more
detailed information on the bioelectric activity of the heart than z = U|Γt . Unfortu-
nately, the problem is known to be strongly ill-conditioned, i.e. for compatible data
the inverse operator of T is unbounded in the usual Sobolev spaces.
   The inverse problem can be solved by means of suitable regularization tech-
niques, but a first step of any stabilization technique consists in building an ap-
proximation of the transfer operator T . Two approaches are available:
• one based on the FE method for solving the 3D direct problem;
• another based on Boundary Element methods applied to a surface integral rep-
  resentation of the direct problem, usually adopted by the biomedical engineering
  community, see e.g. [12].
24                                                                          P. Colli Franzone

For a given time instant t, the vector z(t) = UT (t) represents the potential measured
on a set of M points lying on the thorax surface and v(t) = UH (t) represents the
corresponding potential on N points located on the heart surface Γh .
   The transfer matrix T : UH (t) → UT (t) approximating the operator T can be
built either:
• by solving the following N three-dimensional elliptic mixed problems
                                                                        assigning
  elementary potentials vi (x) on the cardiac surface UΓh (x, t) = N  U i (t)v (x):
                                                                   i=1 Γh     i

                                                 ∂Ti                              
          −Ti (x) = 0,     Ti = v i   on Γh ,       = 0 on Γt ,       T = Ti (xj ) ,
                                                 ∂n
  or
• by solving a surface potential formulation of the forward problem consisting of
  a system of two surface integral equations on the heart and body surfaces. For
  instance, using the double Green formula, the following integral representation
  of the solution of the Direct problem holds:
                            
                                         ∂s(x, ξ )
         U (x, t; ψ, φ) = −      v(ξ, t)           dσξ
                              Γh           ∂nξ
                                                       
                                                                    ∂s(x, ξ )
                          +       Ψ (ξ, t)s(x, ξ )dσξ −     φ(ξ, t)           dσξ ,
                               Γh                        Γt           ∂nξ

     with v := U|Γh , Φ := U|Γt , ψ := ∂U∂n |Γh and s(x, ξ ) = x−ξ  . Applying the limit
                                                                    1

     formulae for the traces on Γh and Γt , we obtain the following surface integral
     system:
                                           
                                                         ∂s(x, ξ )
                     Ψ (y, t)s(x, ξ )dσξ −       φ(ξ, t)           dσξ
                 ΓH                           ΓT           ∂nξ
                                 
                      v(x, t)                 ∂s(x, ξ )
                   =          +       v(ξ, t)           dσy , in H 1/2 (Γh ),
                         2         ΓH            ∂ny
                                                        
                φ(x, t)                 ∂s(x, ξ )
                        +       φ(ξ, t)           dσξ −       Ψ (ξ, t)s(x, ξ )dσξ
                   2         ΓT           ∂nξ             ΓH
                        
                                     ∂s(x, ξ )
                   =−        v(ξ, t)           dσξ , in H 1/2 (Γt ).
                          ΓH           ∂n ξ

     In the years 1976–1978, Nedelec and collaborators, see e.g. [13], developed vari-
     ational formulations of exterior and interior harmonic problems with Dirichlet or
     Neumann boundary conditions, in two- or three-dimensional domains based on
     integral representations of the solution, different from the classical simple or dou-
     ble layer potentials. Following this approach, Magenes and I considered various
     variational formulations of the direct problem with their boundary element ap-
     proximations and the results were reported in [1]. For instance for the previous in-
     tegral system in the unknowns (φ = ∂U                           −1/2 (Γ ) × H 1/2 (Γ ),
                                            ∂n |Γh , Ψ = U|Γt ) in H        h            t
     a-priori error estimates for boundary element approximations were established.
Inverse Problems in Electrocardiology                                               25

  The results of these integral approaches were collected in [1], in the thesis of Ste-
  fania Tentoni [16], and in a work presented at the Italy-France-Russia workshop
  in Moscow, published in Cyrillic (see [7]). The transfer matrix T, approximating
  the transfer operator T , was derived by block solving the linear system associ-
  ated with the discretization of the surface integral system.
      Both approaches 3D-FE and 2D-BE yielded transfer matrices exhibiting a ra-
  tio between the greatest and smallest non zero singular values of the order of 107 ,
  indicating a strong ill-conditioning of the inverse problem.
      A new Goal-oriented Project of the C.N.R., called Tecnologie Biomediche e
  Sanitarie, i.e. Biomedical and Health Technologies, lasted from 1982 until 1987,
  still coordinated by Prof. Luigi Donato, Director of the CNR Institute of Clini-
  cal Physiology in Pisa. Once more, Enrico Magenes was appointed member of
  the Scientific Board of this project. A new research unit of the Istituto di Analisi
  Numerica (IAN, Institute of Numerical Analysis), the new name for the LAN lab-
  oratory, composed by Luciano Guerri, Stefania Tentoni, Carla Viganotti and my-
  self, submitted a project included in the subproject on Elettromappe Cardiache,
  i.e. Cardiac Body Surface Maps. During this project, the inverse problem in term
  of epicardial potential was carried out by applying the inverse procedure to new
  experimental data on animals collected by Prof. Bruno Taccardi at the Univer-
  sity of Parma, see Fig. 4 and subsequently also to human body surface maps
  related both to normal subjects and to subjects with the Wolff-Parkinson-White
  syndrome, see Figs. 5–6. These figures display examples of the epicardial poten-
  tial distributions inversely computed from body surface maps. Equipotential lines
  are trace using a Tektronix 4010 graphical computer; later on, the IAN acquired
  the new 3D graphical workstation Tektronix 4330 released in 1988, see Fig. 7.



3 Cardiac Excitation Sources Models and Inverse Excitation
  Wavefront Problems

Another research topic in my collaborations with Magenes, was related to the
macroscopic representation of the cardiac electric sources during the excitation
phase of the ventricular myocardium. During this phase, a moving layer with thick-
ness less than 1 mm, sweeps all the ventricular wall. Disregarding the layer thick-
ness, we have an excitation wavefront surface separating the resting tissue from the
activated one. The classical model of the excitation sources is the uniform dipole
layer source distributed on the excitation wavefront. In 1976, experimental mea-
surements [6] disproved the classical model, showing the important role played
by anisotropic cardiac fibers of the ventricular wall in determining the features of
the potential patterns. Thus, we began to develop models of the anisotropic cardiac
sources. In [2], predictions of the oblique dipole layer model were compared with
experimental data and a first mathematical investigation of this anisotropic source
model was performed in [3].
26                                                                         P. Colli Franzone




Fig. 4 Inverse problem: comparison between measured and inversely computed epicardial poten-
tial maps related to a time instant of the QRS complex
Inverse Problems in Electrocardiology                                                  27




Fig. 5 Body and epicardial heart surface mesh. Measured body surface map and the inversely
computed epicardial potential map for a time instant in the QRS complex of a normal human
subject
28                                                                            P. Colli Franzone




Fig. 6 Body and epicardial heart surface mesh. Measured body surface map and the inversely
computed epicardial potential map for a time instant in the QRS complex of a human subject with
WPW syndrome
Inverse Problems in Electrocardiology                                                     29




Fig. 7 Inverse problem: comparison between measured and inversely computed epicardial poten-
tial maps displayed on a Tektronix 4330 3D graphical terminal



    Given the excitation wavefront S at the time instant t, assumed embedded in
an infinite homogeneous Ohmic conductor medium with conductivity σ , and given
the intracellular tensor Mi (x) related to the fiber structure of the cardiac tissue, the
cardiac electric field at point x can be derived from the following integral represen-
tation:
                 
             vJ                                                                   1
 U (x, t) =         nTξ Mi (ξ )∇ξ s(x, ξ )dξ, x ∈ R 3 − S, with s(x, ξ ) =              ,
            4πσ S                                                              x − ξ 
where n denotes the unit vector normal to S pointing toward the resting tissue, vJ is
the jump of the transmembrane potential from the excited tissue to the resting one,
and Mi is the intracellular conductivity tensor.
   The presence of the conductivity tensor Mi takes into account the anisotropic
structure of the ventricular tissue due to the fiber structure. Assuming axisymmetric
anisotropy, the intracellular tensor is given by Mi (x) = σti I + (σli − σti )al (x)al (x)T ,
where the unit vector al is parallel to the local fiber direction. This yields an
anisotropic cardiac sources model composed by oblique dipoles, i.e. directed as
Mi n and distributed on the excitation wavefront S.
30                                                                      P. Colli Franzone

   Let Ω be the body volume with boundary Γ = ∂Ω, which is insulated, since it is
in contact with the air. Assuming for simplicity that the body conductor is isotropic
and homogeneous, the potential field generated by the previous oblique dipole layer
sources is the solution of the following boundary value problem:

                                                ∂U
                    U = 0 in Ω − S,               =0       on Γ,
                                                ∂n
                                               ∂U
                         [[U ]]S = α,                    = divS β,                   (1)
                                               ∂n    S

                          with α = nT Mi n and β = Mi n − αn.

    In collaboration with Magenes, we established in [4] the following first result
for the well-posedness of the direct problem (1) in terms of the excitation cardiac
sources:
    For any open and regular surface S, there exits a unique solution U (x, t) of (1) in
  1
H 2 −ε , ∀ε > 0, up to an additive constant; moreover, any bounded solution admits
a surface integral representation.
    The uniqueness of the inverse problem in term of sources was also investigated
in [4] and under some technical geometrical assumptions the following result was
obtained:

   Given the intracellular tensor Mi related to the fiber structure and a body surface
potential map z on Σ ⊂ Γt generated by the excitation wavefront S, S is the unique
surface able to elicit the body surface potential map z.

    During last year Spring, I decided to repaint some rooms in my house, and I
substituted a bookcase, thus transferring a lot of paper sheets in some boxes. At the
end of July 2011, I examined the paper sheets before finally discarding them, and
I rediscovered three letters sent to me by Magenes in the summer of 1982. During
the 80s, I used to spend my holidays at the seashore in Liguria, in the last weeks of
July. Indeed, the dates of two letters are July 29 and 30, and the third is August 14.
All the letters are related to the initial phase of the work on the macroscopic models
of the cardiac electric sources.
    I begin from the last letter, written in the days before the mid-August holiday, in
which the direct and inverse problem in term of the cardiac sources are discussed:

• Cari Colli e Guerri,                                                Pavia 14-8-82
  spero siate tornati riposati e “pimpanti” dalle vacanze.
  Io ho preso un raffreddore molto forte appena arrivato e per una settimana sono
  rimasto istupidito e non ho certo riposato. Comunque in attesa di giorni migliori,
  nei pochi momenti di lucidità ho ripensato ai nostri problemi, arrivando a queste
  conclusioni per ora. (solite notazioni)
Inverse Problems in Electrocardiology                                              31

  Mi sembra utile introdurre una definizione dicendo che dato Ω (torace), una
  terna (H, M, F ) è ammissibile se (mi riferisco al modello semplice):
  (a) il problema differenziale (vedi (1)) ammette una ed una sola soluzione in un
  opportuno senso,
  (b) il problema inverso ammette unicità, cioè se u1 e u2 sono le soluzioni di (a)
  relative ad S1 e S2 ∈ F allora:

                         u1 (x) = u2 (x),   x∈Γ   →     S1 = S2 .

  Per quanto riguarda (a) non abbiamo più problemi nel senso che (a) vale in
  ipotesi molto larghe su (H, M, F ).
  Per quanto riguarda (b) sono arrivato a concludere così un Teorema possibile e
  ormai quasi dimostrato.
  Teorema: (H, M, F ) è ammissibile se . . . 7 dense pages follow.
• Dear Colli and Guerri,                                                Pavia 14-8-82
  I hope you came back from the holidays rested and jaunty.
  I caught a strong cold upon my arrival and for a week I remained dazed and cer-
  tainly I did not rest. However, waiting for better days, in the few lucid moments,
  I have looked back to our problems, reaching for the moment the following con-
  clusions (in the usual notations).
  I think it would be useful to introduce the following definition, stating that given
  Ω (the torax), a triple (H, M, F ) is admissible if (I refer here to the simple
  model):
  (a) the differential problem (see (1)) admits one and only one solution in a proper
  sense,
  (b) the inverse problem admits uniqueness, i.e. if u1 and u2 are solutions of (a)
  associated with the surfaces S1 and S2 ∈ F then:

                        U1 (x) = U2 (x),    x∈Γ    →     S1 = S 2 .

  Concerning (a), we no longer have problems, meaning that (a) holds under weak
  hypotheses on (H, M, F ).
  Concerning (b), I have reached a formulation of the following possible Theorem,
  by now almost proved.
  Theorem: (H, M, F ) is an admissible triple if . . . 7 dense pages follow.

The first letter begins with

• Caro Colli,                                                         Pavia 29-7-82
  prima di partire per la montagna ti invio quel poco che ho potuto fare, per lo più
  con il Guerri nel giorno in cui è passato da Pavia tra (beato lui che può!) il mare
  e la montagna.
  Anzitutto con Guerri abbiamo chiarito le ipotesi su M e sulla famiglia di super-
  ficie S ammissibili nel caso del modello semplificato . . .
32                                                                  P. Colli Franzone

A translation attempt is:
• Dear Colli,                                                        Pavia 29-7-82
  before leaving for the mountains, I send you the little material that I have pro-
  duced, mostly with Guerri during the day when he stopped by in Pavia, while
  traveling from the seaside to the mountains (lucky him, as he can do that!).
  First of all, with Guerri we clarified the hypotheses on M and on the family of
  admissible surfaces S for the simplified model . . .
and the following letter:
• Caro Colli,                                                         Pavia 30-7-82
  questa è proprio l’ultima volta. Stamattina ho avuto un pò di tempo per ripensare
  alla questione dell’orientazione delle superficie S di F e mi sarei deciso per
  evitare difficoltà ed equivoci a vedere le cose così, correggendo quanto finora
  detto a proposito di H (cuore).
  Io vedrei il cuore (semplificato) H come il trasformato attraverso un isomorfismo
  . . . di un cilindro circolare retto . . .
Inverse Problems in Electrocardiology                                          33

  Then Magenes goes on writing:
  Nel caso del modello completo direi che H dovrebbe essere il trasformato di un
  cilindro circolare retto con un buco circolare retto . . .
  il buco dovrebbe rappresentare le cavità intracardiache Ωo . Ovviamente allo
  schema tuo dovrà essere aggiunta una condizione di trasmissione sulle due basi
  di H̄ , cosa che non dà fastidio.
  Con la tua nomenclatura (H ↔ Ω1 ) si avrebbe una figura del tipo:
  che non mi sembra “surrealista”.




   A translation attempt is:

• Dear Colli,                                                        Pavia 30-7-82
  this is really the last time. This morning I had some time to think again about
  to the issue concerning the orientation of the surface S of the family F and, in
34                                                                      P. Colli Franzone

     order to avoid difficulties and misunderstandings, I decided to view things in the
     following way, correcting what we have introduced so far about H (heart).
     I would suggest to see the heart H (simplified) as the image through an isomor-
     phism . . . of a right circular cylinder . . .
     Then Magenes goes on writing:
     For the full model, I think that H should be a right circular cylinder with a right
     circular hole . . .
     the hole could represent the intracardiac cavities Ωo . Obviously, a transmission
     condition on the two basis of H̄ should be added to your scheme, which does not
     create any trouble.
     With your notation (H lef trightarrow Ω1 ), we would have a picture of the fol-
     lowing type:
     which does not seem “surrealist” to me.

The solution of the inverse problem was in part based on the study of regular oblique
derivative elliptic problems. This research topic had been tackled by Magenes in the
Fifties when he was a professor at the University of Modena and subsequently at the
University of Genoa in the papers [8–10].
   The uniqueness results for the inverse problem, developed in the first paper [3]
on the Oblique double layer Sources, were indeed based on uniqueness results con-
cerning regular oblique derivative elliptic problems.
   Moreover, a deeper analysis of the uniqueness of the inverse problem in two
dimensions was developed by Magenes in [11].
   A final excerpt from the end of the letter of August 14:

• . . . A me così, almeno adesso le cose tornano più chiare e probabilmente anche la
  congettura potrà essere formulata meglio. Devo dire che ho tirato ancora qualche
  moccolo al vostro lavoro. Non dite mai che ipotesi fate su H ! A pag. 6 orientate
  le fibre in funzione della superficie considerata e non viceversa come mi sembra
  si debba fare (ad es. come ora ho suggerito io).
  Stammi ancora bene e ancora tanti saluti.
  Queste lettere mi ricordano i bei tempi in cui lavoravo con Lions, ma allora non
  c’erano le fotocopiatrici e bisognava scrivere con la carta carbone!
                               Ciao Enrico Magenes
  P.S. Lascio ovviamente copia della lettera anche sul tavolo di Guerri, con tanti
  saluti anche a lui, che molto astutamente non mi ha dato il suo indirizzo, onde
  poter stare tranquillo!
Inverse Problems in Electrocardiology                                              35




   A translation attempt is:

• . . . From my point of view, now things are clearer and probably also the conjec-
  ture could be better formulated. I must say that I still swore your work. You do
  not state clearly the hypothesis on H ! On page 6, you assign the fiber orientation
  as a function of the chosen surface and not vice-versa, as I think it should be (for
  example as I have suggested).
  Take care and again best regards.
  These letters remind me of the good old times, when I worked with Lions, but
  back then we did not have xerox machines and we had to write duplicates with
  carbon copy!
                                 ciao Enrico Magenes
  P.S. I leave a copy of the letter also on Guerri’s desk, with many regards also for
  him (who, very cleverly, did not leave me his address so as not to be disturbed!).

   Dear Enrico, thanks for all.
36                                                                                  P. Colli Franzone

References
 1. Colli Franzone, P., Magenes, E.: On the inverse potential problem of electrocardiology. Cal-
    colo XVI(IV), 459–538 (1979)
 2. Colli Franzone, P., Guerri, L., Viganotti, C., Macchi, E., Baruffi, S., Spaggiari, S., Taccardi,
    B.: Potential fields generated by oblique dipole layers modeling excitation wavefronts in the
    anisotropic myocardium. Comparison with potential fields elicited by paced dog heart in a
    volume conductor. Circ. Res. 51, 330–346 (1982)
 3. Colli Franzone, P., Guerri, L., Viganotti, C.: Oblique dipole layer potentials applied to elec-
    trocardiology. J. Math. Biol. 17, 93–124 (1983)
 4. Colli Franzone, P., Guerri, L., Magenes, E.: Oblique dipole layer potential for the direct and
    inverse problems of electrocardiology. Math. Biosci. 68, 23–55 (1984)
 5. Colli Franzone, P., Guerri, L., Viganotti, C., Taccardi, B.: Finite element approximation of
    regularized solution of the inverse potential problem of electrocardiography and applications
    to experimental data. Calcolo XXII(I), 91–186 (1985)
 6. Corbin, L.V. II, Scher, A.M.: The canine heart as an electrocardiographic generator: depen-
    dence on cardiac cell orientation. Circ. Res. 41, 58–67 (1977)
 7. Guerri, L., Magenes, E.: On the inverse problem of electrocardiology. In: Alekseev, A.S. (ed.)
    Current Problems of Numerical and Applied Mathematics. Collection of Articles (Aktual’nye
    Problemy Vychislitel’noj i Prikladnoj Matematiki. Sbornik Statej), pp. 59–72. Izdatel’stvo
    “Nauka” Sibirskoe Otdelenie, Novosibirsk (1983) (in Russian). [B] Akademiya Nauk SSSR,
    Sibirskoe Otdelenie. Vychislitel’nyj Tsentr., 208 p. R. 2.00
 8. Magenes, E.: Sui problemi di derivata obliqua regolare per le equazioni lineari del secondo
    ordine di tipo ellittico. Ann. Mat. Pura Appl. (4) XL, 143–160 (1955)
 9. Magenes, E.: Su alcune recenti impostazioni dei problemi al contorno, in particolare misti,
    per le equazioni lineari ellittiche del secondo ordine. Ann. Sc. Norm. Super. Pisa, Cl. Sci. (3),
    X(I–II), 75–84 (1956)
10. Magenes, E.: Il problema della derivata obliqua regolare per le equazioni lineari ellittico-
    paraboliche del secondo ordine in m variabili. Rend. Mat. 16(3–4), 363–414 (1957)
11. Magenes, E.: Su un problema inverso di teoria dei potenziali logaritmici. Calcolo XXII(I),
    31–46 (1985)
12. Martin, R.O., Pilkington, T.C.: Statistically constrained inverse electrocardiology. IEEE Trans.
    Biomed. Eng. 22(6), 487–492 (1975)
13. Nedelec, C.: Curved finite element methods for the solution of singular integral equations on
    surfaces in R 3 . Comput. Methods Appl. Mech. Eng. 8, 61–80 (1976)
14. Rudy, Y., Oster, H.S.: The Electrocardiographic Inverse Problem. CRC Press, Boca Raton
    (1993)
15. Taccardi, B., Macchi, E., Lux, R.L., Ershler, P.R., Spaggiari, S., Baruffi, S., Vyhmeister, Y.: Ef-
    fect of myocardial fiber direction on epicardial potentials. Circulation 90, 3076–3090 (1994)
16. Tentoni, S.: Analisi numerica di problemi ai limiti ellittici, connessi con l’Elettrocardiologia,
    mediante potenziali di superficie. Master Thesis, Pavia (1980)
Stefan Problems and Numerical Analysis

Claudio Verdi




Abstract We outline the main contributions of Prof. Enrico Magenes to the analysis
and numerical approximation of mathematical models of phase transition processes.
Starting from the 1980’s, a semigroup approach to Stefan problems, optimal rates
of convergence for the nonlinear Chernoff formula, regularity properties of solu-
tions, theoretical and numerical aspects of Stefan models in a concentrated capacity,
were investigated by Enrico Magenes. His expertise was fundamental for develop-
ing numerical analysis of evolutionary free boundary problems and applications in
a modern framework.


1 Stefan Problems and Semigroups: Analysis and Numerical
  Approximation

Phase transitions occur in many relevant processes in natural sciences and industrial
applications. The basic Stefan model represents phase transitions in a rather sim-
plified way by coupling heat diffusion and exchange of latent heat between phases.
It has been extensively studied in the last 60 years: the existing literature includes
tenths of thousand of papers and a number of meetings has been devoted to this
model and its extensions. Following the International Seminar on Free Boundary
Problems held in Pavia in September–October 1979 [33], a regular series of Interna-
tional Symposium on Free Boundary Problems: Theory and Applications took place
in: Montecatini, 1981 [23]; Maubuisson, 1983 [5]; Irsee, 1987 [27]; Montreal, 1990
[11]; Toledo, 1993 [17]; Zakopane, 1995 [58]; Hiraklion, 1997 [1]; Chiba, 1999
[31]; Trento, 2002 [13]; Coimbra, 2005 [25]; etc. A series of conferences focusing
on numerical methods and applications started with the Workshop on Generalized
Stefan Problems: Analysis and Numerical Methods held in Pavia in 1995 and took
place in: Freiburg, 1995; Lamoura, 1996; Faro, 1996; Berlin, 1996; Ittingen, 1997;
Madeira, 1998; Braga, 1998; Hiraklion, 1999; etc.


C. Verdi (B)
Dipartimento di Matematica “F. Enriques”, Università di Milano, via Saldini 50, 20133 Milan,
Italy
e-mail: claudio.verdi@unimi.it

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,              37
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_5,
© Springer-Verlag Italia 2013
38                                                                           C. Verdi

   Existence, uniqueness, and regularity properties of the solution of Stefan prob-
lems were obtained by L. Rubinstein [79], S. Kamin [30], O. Oleinik [75], A. Fried-
man [26], D. Kinderlehrer and L. Niremberg [32], L.A. Caffarelli [8] and L.C. Evans
[10], E. Di Benedetto [16], A.M. Meirmanov [54], A. Damlamian [15], A. Visintin
[89], M. Niezgodka and I. Pawlow [57], A. Fasano and M. Primicerio [20–22], and
many others (we refer to the monographs [55, 80, 91–93]; a huge bibliography can
be found in [83]). Numerical analysis and applications were developed by G. Meyer
[56], J. Nitsche [59], J.F. Ciavaldini [12], J.W. Jerome and M.E. Rose [29], C.M.
Elliott [19], R.H. Nochetto [63] among others (see the survey [86]).
   The interest of Enrico Magenes for the Stefan model and its numerical approx-
imation received an impulse during the International Seminar on Free Boundary
Problems held in Pavia in 1979 and yielded a series of seminars that he delivered at
the V Seminario di Analisi Funzionale e Applicazioni held in Catania on September
17–24, 1981 (these lecture notes were published in [34], an interesting overview
of the state of the art for the multidimensional two-phase Stefan problem). Enrico
Magenes worked on this subject for twenty years, with many original contributions
but, more relevantly, by stimulating his students and collaborators with continuous
discussions and suggestions.
   The enthalpy formulation, a fixed domain formulation were the interface or free
boundary can be recovered a posteriori as level-set of temperature variable, reads in
weak or variational form as follows:
                        ⎧ ∂u
                        ⎪
                        ⎨      − β(u) = 0 in Ω × (0, T ),
                           ∂t                                                     (1)
                        ⎩ β(u) = 0
                        ⎪                     on ∂Ω × (0, T ),
                          u(·, 0) = u0 (·)    in Ω,
where Ω ⊂ Rd and β(s) = (s − 1)+ − s − is the constitutive relation between en-
thalpy u and temperature θ = β(u). Existence and uniqueness of the solution can
be proved in suitable functional spaces. The interest of Magenes was focused on
the possibility to formulate the Stefan problem (1) as an m-accretive semigroup of
contraction in L1 (Ω) in the sense of M.G. Crandall and T. Ligget [14], and Ph.
Bénilan [3], which allows to numerically approximate (1), either by backward finite
differences (here τ denotes the time-step)
                                                
                           U n − U n−1 − τ β U n = 0,                          (2)
or by the nonlinear Chernoff formula, as observed by A.E. Berger, H. Brézis, and
J.C.W. Rogers [4]
                                               
                          V n − τ V n = β U n−1 ,
                                                                            (3)
                          U n = U n−1 − β U n−1 + V n .
In many significant applications, the boundary condition β(u) = 0 on ∂Ω × (0, T )
could be replaced by nonlinear flux conditions (e.g. Stefan-Boltzmann law) [88]
                     ∂β(u)        
                           + g β(u) = 0       on ∂Ω × (0, T ).
                      ∂ν
Stefan Problems and Numerical Analysis                                              39

In [48], Magenes et al. extended the semigroup approach to the Stefan problem with
nonlinear flux conditions, by proving that the operator A : w → −β(w) with do-
main D(A) = {w ∈ L1 (Ω) : β(w) ∈ L1 (Ω), β(w) ∈ L1 (Ω), ∂β(w)       ∂ν + g(β(w)) =
                                1
0 on ∂Ω} is m-accretive in L (Ω), whence the solution exists and is unique in a
suitable weak sense. This results was a theoretical step for justifying the conver-
gence properties of the numerical algorithms studied in [49, 84].
    The backward Euler method (2) requires the solution of a nonlinear elliptic PDE
at each time-step. Combined with a finite element method for spatial approximation
and numerical quadrature, it leads to an effective numerical scheme. Stability and a
priori error estimates under minimal regularity properties on data have been proved
in [65, 85] (see [67, 68] for a posteriori error estimates and an adaptive implemen-
tation). On the other hand, the nonlinear Chernoff formula (3) requires the solution
of a linear elliptic PDE at each time step followed by an algebraic correction to re-
cover discrete enthalpy. It turns out that Chernoff is a stable linearization procedure
in the spirit of the Laplace-modified forward Galerkin method for non-degenerate
parabolic problems introduced by J. Douglas and T. Dupont [18]. Despite conver-
gence was guaranteed by the theory of nonlinear contraction semigroups in Banach
space [6], error estimates remained open until the paper by Magenes et al. [50]. The
key argument is a combination of the following three features:
• the use of a variational technique first applied by R.H. Nochetto [60, 61];
• the possibility of dealing with minimal regularity properties u0 ∈ L2 (Ω) as
  shown in [65];
• the relationship between the nonlinear Chernoff formula and the discrete-time
  scheme studied in [87] for the approximation of Stefan problems with phase re-
  laxation introduced by A. Visintin [90].
By denoting θ = β(u) the temperature and χ = u − θ the phase variable, the PDE
in (1) reads
                           ∂(θ + χ)
                                     − θ = 0, χ ∈ H (θ ),                      (4)
                              ∂t
where H stands for the Heaviside graph. Being ε > 0 a time-relaxation parame-
ter, the constitutive relation in (4) can be approximated with the phase relaxation
equation introduced by A. Visintin [90]
                                 ∂χ
                                 ε  + H −1 (χ)  θ.                              (5)
                                 ∂t
After coupling this equation (5) with the PDE in (4), and discretizing in time [87]
we get the following algorithm
                  ⎧                            
                  ⎨ Θ n − Θ n−1 + X n − X n−1 − τ Θ n = 0,
                     ε                                                       (6)
                  ⎩ X n − X n−1 + H −1 X n  Θ n−1 ,
                     τ
with stability constraint τ ≤ ε. Now it is not difficult to see that this scheme (6)
reduces to (3) by choosing ε = τ and setting U n = Θ n + X n . With the tools above,
Magenes et al. [50] completely answered the question of how accurate the nonlinear
40                                                                             C. Verdi

Chernoff formula is both for degenerate and non-degenerate parabolic problems.
Let Eτ = θ − Θ n L2 (Ω×(0,T )) be the error for temperature in energy norm, then
the following optimal a priori error estimates were proved for Stefan problems:
Eτ = O(τ 1/4 ) if u0 ∈ L2 (Ω) or Eτ = O(τ 1/2 ) if u0 ∈ D(A) ∩ L∞ (Ω).
    Combined with a finite element method for spatial approximation, the Chernoff
formula (3) leads to a very efficient numerical algorithm [64, 66] (see [69, 70] for
a posteriori error estimates and an adaptive implementation). See also [28] for a
refinement of the stabilization parameter in the Chernoff formula.
    In a series of papers [35–38] Magenes addressed various extensions of the previ-
ous results for the nonlinear Chernoff formula to more general operators and prob-
lems, in particular to evolutionary equations on the boundary of a domain. In [51]
Magenes et al. proved new regularity results in Nikolskiı̌ spaces for the multidimen-
sional two-phase Stefan problem with general source terms and, as a consequence,
error estimates for enthalpy in energy spaces for the implicit Euler algorithm.



2 Stefan Problems in a Concentrated Capacity
The Stefan problems in a concentrated capacity [24] arise in heat diffusion phenom-
ena involving phase changes in two adjoining bodies Ω and Γ , when assuming that
the thermal conductivity along the direction normal to the boundary of Ω is much
greater than in the others, whence Γ can be considered as the boundary of Ω. The
mathematical model describing phase change process in both bodies reads [42]:
                    
                      ∂u               ∂β(u)
                          − g β(u) =          on ∂Ω × (0, T ),
                      ∂t                ∂ν
                    ⎧ u(·, 0) = u0 (·)         on ∂Ω,
                    ⎪
                    ⎪ ∂v                                                         (7)
                    ⎨     − γ (v) = 0 in Ω × (0, T ),
                       ∂t
                    ⎪
                    ⎪ v(·, 0) = v0 (·)   in Ω,
                    ⎩
                      γ (v) = β(u)       on ∂Ω × (0, T ),
where g is the Laplace-Beltrami operator on ∂Ω with respect to the Riemannian
structure g inferred by the tangential conductivity, β and γ are the constitutive rela-
tions between enthalpies u and v and temperature θ = β(u) = γ (v). Existence and
uniqueness of the solution of (7) was proved in suitable functional spaces [42]. In
a series of papers [39–41, 43–46] Magenes addressed the theory of heat conduction
with phase change in a concentrated capacity for various operators; see also [82].
The relevance of these models in a number of physical applications motivates their
numerical analysis, which was developed in [47]. The implicit Euler scheme reads:
             ⎧  n         
             ⎪ β U = γ V n on ∂Ω,
             ⎪
             ⎪
             ⎪
             ⎨       n                           
                     U − U n−1 ϕ + τ dβ U n , dϕ g
                                                                                    (8)
             ⎪
             ⎪
                 ∂Ω
             ⎪
             ⎪                                       
             ⎩ +         V n − V n−1 η + τ      ∇γ V n · ∇ϕ = 0 ∀ϕ.
                      Ω                       Ω
Stefan Problems and Numerical Analysis                                             41

The linear scheme based on the nonlinear Chernoff formula reads:
             ⎧ n
             ⎪ Ξ = Θ n on ∂Ω,
             ⎪
             ⎪                         
             ⎪
             ⎪
             ⎪
             ⎪     Ξ n ϕ + τ dΞ n , dϕ g +      Θ nη + τ   ∇Θ n · ∇ϕ
             ⎪
             ⎪
             ⎨  ∂Ω                            Ω          Ω
                                                
                  =      β U n−1 ϕ +      γ V n−1 ϕ ∀ϕ,                           (9)
             ⎪
             ⎪
             ⎪
             ⎪       ∂Ω
                                  n−1  Ω n
             ⎪
             ⎪
             ⎪
             ⎪ U n
                   = U n−1
                            −  β  U      +Ξ     on ∂Ω,
             ⎪
             ⎩ n                  n−1 
               V =V    n−1
                            −γ V         +Θ n
                                                in Ω.
Both algorithms (8) and (9) are well posed. The latter is linear in the unknowns Ξ n
and Θ n , the nonlinearity reducing to pointwise corrections for U n and V n , whence
it is expected to be more efficient than (8) from a numerical viewpoint. Stability and
error estimates in the natural energy spaces were proved for both schemes in [47].



3 Approximation of Interfaces, Adaptivity and Applications
Optimality of error estimates for the proposed algorithms was one of the main as-
pects attracting Magenes’ interest; in this direction let me mention [74], where R.H.
Nochetto et al. proved optimal a posteriori error estimates for variable time-step
discretizations of nonlinear evolution equations; see also [81].
    Thanks to stimulating discussions with E. Magenes, C. Baiocchi, F. Brezzi, and
L.A. Caffarelli, [2, 7, 9] convergence and accuracy estimates for the approximation
of the free boundary of parabolic phase-change problems under suitable condition
of non-degeneracy at the interface were proved [62, 78].
    The intense interest of Enrico Magenes for the numerical approximation of
phase-change models and their applications involved the Istituto di Analisi Numer-
ica of the CNR in Pavia and his collaborators in various national and international
projects focused on phase transition problems; I will mention, e.g., the European
projects “Phase Transition Problems” (1986–1988), “Mathematical Treatment of
Free Boundary Problems” (1993–1996), “Phase Transition and Surface Tension”
(1995–1997), “Viscosity Solutions and their Applications” (1998–2000). Within the
framework of the national projects of the CNR “Software: Ricerche di Base e Ap-
plicazioni; Software Matematico” (1986–1987) and “Sistemi Informatici e Calcolo
Parallelo: Calcolo Scientifico per Grandi Sistemi” (1988–1993), a computational
code for solving general parabolic free boundary problems with the finite elements
algorithms studied above was implemented [77]; some interesting collaborations
took place with Himont (Ferrara), a leading factory in polymer production [52], and
Istituto Ortopedico Rizzoli (Bologna) [53].
    Numerical approximation of geometric motion of interfaces, a first step for the
approximation of more complex phase transitions problems including surface ten-
sion effects, was addressed by R.H. Nochetto et al. [71–73, 76], also thanks to help-
ful discussions and suggestions of E. De Giorgi, L.A. Caffarelli, A. Visintin, and
Magenes himself.
42                                                                                         C. Verdi

References

 1. Athanasopoulos, I., Makrakis, G., Rodrigues, J.-F. (eds.): Free Boundary Problems: Theory
    and Applications. Pitman Res. Notes Math., vol. 409. Chapman & Hall, Boca Raton (1999)
 2. Baiocchi, C.: Estimations d’erreur dans L∞ pour les inéquations à obstacle. In: Galligani,
    I., Magenes, E. (eds.) Mathematical Aspects of Finite Element Methods. Lect. Notes Math.,
    vol. 606, pp. 27–34. Springer, Berlin (1977)
 3. Bénilan, Ph.: Equation d’évolution dans un espace de Banach quelconque et applications.
    Pubbl. Math. Orsay 25 (1972)
 4. Berger, A.E., Brézis, H., Rogers, J.C.W.: A numerical method for solving the problem ut −
    f (u) = 0. RAIRO Modél. Math. Anal. Numér. 13, 297–312 (1979)
 5. Bossavit, A., Damlamian, A., Frémond, M. (eds.): Free Boundary Problems: Applications and
    Theory, III–IV. Res. Notes Math., vol. 120–121. Pitman, Boston (1985)
 6. Brézis, H., Pazy, A.: Convergence and approximation of semigroups of nonlinear operators in
    Banach spaces. J. Funct. Anal. 9, 63–74 (1972)
 7. Brezzi, F., Caffarelli, L.A.: Convergence of the discrete free boundaries for finite element
    approximations. RAIRO Modél. Math. Anal. Numér. 4, 385–395 (1983)
 8. Caffarelli, L.A.: The regularity of free boundaries in higher dimensions. Acta Math. 139, 155–
    184 (1977)
 9. Caffarelli, L.A.: A remark on the Hausdorff measure of a free boundary and the convergence
    of the coincidence sets. Boll. Unione Mat. Ital., C Anal. Funz. Appl. 18, 109–113 (1981)
10. Caffarelli, L.A., Evans, L.C.: Continuity of the temperature in the two-phase Stefan problem.
    Arch. Ration. Mech. Anal. 81, 199–220 (1983)
11. Chadam, J.M., Rasmussen, H. (eds.): Emerging Applications in Free Boundary Problems,
    Free Boundary Problems Involving Solids, Free Boundary Problems in Fluid Flow with Ap-
    plications. Pitman Res. Notes Math., vol. 280–282. Longman, Harlow (1993)
12. Ciavaldini, J.F.: Analyse numérique d’un problème de Stefan à deux phases par une méthode
    d’éléments finis. SIAM J. Numer. Anal. 12, 464–487 (1975)
13. Colli, P., Verdi, C., Visintin, A. (eds.): Free Boundary Problems: Theory and Applications. Int.
    Series Numer. Math., vol. 147. Birkhäuser, Basel (2004)
14. Crandall, M.G., Ligget, T.: Generation of semigroups of nonlinear transformations on general
    Banach spaces. Am. J. Math. 93, 265–298 (1971)
15. Damlamian, A.: Some results in the multiphase Stefan problem. Commun. Partial Differ. Equ.
    2, 1017–1044 (1977)
16. Di Benedetto, E.: Regularity properties of the solution of a n-dimensional two-phase Stefan
    problem. Boll. Unione Mat. Ital. Suppl. 1, 129–152 (1980)
17. Diaz, J.I., Herrero, M.A., Linan, A., Vasquez, J.L. (eds.): Free Boundary Problems: Theory
    and Applications. Pitman Res. Notes Math., vol. 323. Longman, Harlow (1995)
18. Douglas, J., Dupont, T.: Alternating-direction Galerkin methods on rectangles. In: Hubbard,
    B. (ed.) Numerical Solutions of Partial Differential Equations, II, pp. 133–214. Academic
    Press, New York (1971)
19. Elliott, C.M.: Error analysis of the enthalpy method for the Stefan problem. IMA J. Numer.
    Anal. 7, 61–71 (1987)
20. Fasano, A., Primicerio, M.: General free boundary problems for the heat equation, I. J. Math.
    Anal. Appl. 57, 694–723 (1977)
21. Fasano, A., Primicerio, M.: General free boundary problems for the heat equation, II. J. Math.
    Anal. Appl. 58, 202–231 (1977)
22. Fasano, A., Primicerio, M.: General free boundary problems for the heat equation, III. J. Math.
    Anal. Appl. 59, 1–14 (1977).
23. Fasano, A., Primicerio, M. (eds.): Free Boundary Problems: Theory and Applications, I–II.
    Res. Notes Math., vol. 78–79. Pitman, London (1983)
24. Fasano, A., Primicerio, M., Rubinstein, L.: A model problem for heat conduction with a free
    boundary in a concentrated capacity. J. Inst. Math. Appl. 26, 327–347 (1980)
Stefan Problems and Numerical Analysis                                                           43

25. Figueiredo, I.N., Rodrigues, J.F., Santos, L. (eds.): Free Boundary Problems: Theory and Ap-
    plications. Int. Series Numer. Math., vol. 154. Birkhäuser, Basel (2007)
26. Friedman, A.: The Stefan problem in several space variables. Trans. Am. Math. Soc. 133,
    51–87 (1968)
27. Hoffmann, K.-H., Sprekels, J. (eds.): Free Boundary Problems: Theory and Applications, I–II.
    Pitman Res. Notes Math., vol. 185–186. Longman, Harlow (1990)
28. Jäger, W., Kacur, J.: Solution of porous medium type systems by linear approximation
    schemes. Numer. Math. 60, 407–427 (1991)
29. Jerome, J.W., Rose, M.E.: Error estimates for the multidimensional two-phase Stefan problem.
    Math. Comput. 39, 377–414 (1982)
30. Kamenomostskaya, S.L.: On Stefan Problem. Nauch. Dokl. Vyss. Shkoly 1, 60–62 (1958)
31. Kenmochi, N. (ed.): Free Boundary Problems: Theory and Applications, I–II. Gakuto Int. Ser.
    Math. Sci. Appl., vol. 14. Gakkötosho, Tokyo (2000)
32. Kinderlehrer, D., Nirenberg, L.: Regularity in free boundary problems. Ann. Sc. Norm. Super.
    Pisa, Cl. Sci. (4) 4, 373–391 (1977)
33. Magenes, E. (ed.): Free Boundary Problems. Istituto Nazionale di Alta Matematica, Roma
    (1980)
34. Magenes, E.: Problemi di Stefan bifase in più variabili spaziali. Matematiche XXXVI, 65–108
    (1981)
35. Magenes, E.: Remarques sur l’approximation des problèmes paraboliques non linéaires. In:
    Analyse Mathématique et Applications. Contributions en l’honneur de Jacques-Louis Lions,
    pp. 297–318. Gauthier-Villars, Paris (1988)
36. Magenes, E.: A time-discretization scheme approximating the non-linear evolution equation
    ut + ABu = 0. In: Colombini, F., et al. (eds.) Partial Differential Equations and the Calculus
    of Variations. Essays in Honor of Ennio de Giorgi, II, pp. 743–765. Birkhäuser, Boston (1989)
37. Magenes, E.: Numerical approximation of non-linear evolution problems. In: Dautray, R. (ed.)
    Frontiers in Pure and Applied Mathemathics. A Collection of Papers Dedicated to Jacques-
    Louis Lions on the Occasion of His Sixties Birthday, pp. 193–207. North-Holland, Amsterdam
    (1991)
38. Magenes, E.: On the approximation of some non-linear evolution equations. Ric. Mat.
    40(Suppl.), 215–240 (1991)
39. Magenes, E.: On a Stefan problem in a concentrated capacity. In: Ambrosetti, A., Marino,
    A. (eds.) Nonlinear Analysis: A Tribute in Honour of Giovanni Prodi, pp. 217–229. Scuola
    Normale Superiore, Pisa (1991)
40. Magenes, E.: Some new results on a Stefan problem in a concentrated capacity. Atti Accad.
    Naz. Lincei, Rend. Cl. Sci. Fis. Mat. Nat. (9) 3, 23–34 (1992)
41. Magenes, E.: On a Stefan problem on the boundary of a domain. In: Miranda, M. (ed.) Partial
    Differential Equations and Relates Subjects. Pitman Res. Notes Math., vol. 269, pp. 209–226.
    Longman, Harlow (1992)
42. Magenes, E.: The Stefan problem in a concentrated capacity. In: Ricci, P.E. (ed.) Problemi
    attuali dell’analisi e della fisica matematica: Atti del Simposio internazionale dedicato a Gae-
    tano Fichera nel suo 70° compleanno, Roma, pp. 156–182 (1993)
43. Magenes, E.: Regularity and approximation properties for the solution of a Stefan problem in
    a concentrated capacity. In: Chicco, M., et al. (eds.) Variational Methods, Nonlinear Analysis
    and Differential Equations: Proceedings of the International Workshop on the Occasion of the
    75th Birthday of J.P. Cecconi, pp. 88–106. E.C.I.G., Genova (1994)
44. Magenes, E.: Stefan problems in a concentrated capacity. In: Alekseev, A.S., Bakhvalov, N.S.
    (eds.) Advanced Mathematics, Computations and Applications: Proceedings of the Interna-
    tional Conference AMCA-95, pp. 82–90. NCC Publisher, Novosibirsk (1995)
45. Magenes, E.: On a Stefan problem in a concentrated capacity. In: Marcellini, P., et al. (eds.)
    Partial Differential Equations and Applications: Collected Papers in Honor of Carlo Pucci,
    pp. 237–253. Dekker, New York (1996)
46. Magenes, E.: Stefan problems in a concentrated capacity. Boll. Unione Mat. Ital. Suppl. 8,
    71–81 (1998)
44                                                                                         C. Verdi

47. Magenes, E., Verdi, C.: Time discretization schemes for the Stefan problem in a concentrated
    capacity. Meccanica 28, 121–128 (1993)
48. Magenes, E., Verdi, C., Visintin, A.: Semigroup approach to the Stefan problem with non-
    linear flux. Atti Accad. Naz. Lincei, Rend. Cl. Sci. Fis. Mat. Nat. (8) 75, 24–33 (1983)
49. Magenes, E., Verdi, C.: The semigroup approach to the two-phase Stefan problem with non-
    linear flux conditions. In: Bossavit, A., et al. (eds.) Free Boundary Problems: Applications and
    Theory, III. Res. Notes Math., vol. 120, pp. 28–39. Pitman, Boston (1985)
50. Magenes, E., Nochetto, R.H., Verdi, C.: Energy error estimates for a linear scheme to approx-
    imate nonlinear parabolic problems. RAIRO Modél. Math. Anal. Numér. 21, 655–678 (1987)
51. Magenes, E., Verdi, C., Visintin, A.: Theoretical and numerical results on the two-phase Stefan
    problem. SIAM J. Numer. Anal. 26, 1425–1438 (1989)
52. Mazzullo, S., Paolini, M., Verdi, C.: Polymer crystallization and processing: free boundary
    problems and their numerical approximation. Math. Eng. Ind. 2, 219–232 (1989)
53. Mazzullo, S., Paolini, M., Verdi, C.: Numerical simulation of thermal bone necrosis during
    cementation of femoral prostheses. J. Math. Biol. 29, 475–494 (1991)
54. Meirmanov, A.M.: On the classical solution of the multidimensional Stefan problem for quasi-
    linear parabolic equations. Math. USSR Sb. 40, 157–178 (1981)
55. Meirmanov, A.M.: The Stefan Problem. de Gruyter, Berlin (1992)
56. Meyer, G.H.: Multidimensional Stefan problem. SIAM J. Numer. Anal. 10, 512–538 (1973)
57. Niezgodka, M., Pawlow, I.: A generalized Stefan problem in several space variables. Appl.
    Math. Optim. 9, 193–224 (1983)
58. Niezgodka, M., Strzelecki, P. (eds.): Free Boundary Problems: Theory and Applications. Pit-
    man Res. Notes Math., vol. 363. Longman, Harlow (1996)
59. Nitsche, J.A.: A finite element method for parabolic free boundary problems. In: Magenes, E.
    (ed.) Free Boundary Problems, I, pp. 277–318. Istituto Nazionale di Alta Matematica, Roma
    (1980)
60. Nochetto, R.H.: Error estimates for two-phase Stefan problems in several space variables, I:
    linear boundary conditions. Calcolo 22, 457–499 (1985)
61. Nochetto, R.H.: Error estimates for two-phase Stefan problems in several space variables, II:
    nonlinear flux conditions. Calcolo 22, 501–534 (1985)
62. Nochetto, R.H.: A note on the approximation of free boundaries by finite element methods.
    RAIRO Modél. Math. Anal. Numér. 20, 355–368 (1986)
63. Nochetto, R.H.: Error estimates for multidimensional parabolic problems. Jpn. J. Ind. Appl.
    Math. 4, 111–138 (1987)
64. Nochetto, R.H., Verdi, C.: The combined use of a nonlinear Chernoff formula with a regular-
    ization procedure for two-phase Stefan problems. Numer. Funct. Anal. Optim. 9, 1177–1192
    (1987–1988)
65. Nochetto, R.H., Verdi, C.: Approximation of degenerate parabolic problems using numerical
    integration. SIAM J. Numer. Anal. 25, 784–814 (1988)
66. Nochetto, R.H., Verdi, C.: An efficient linear scheme to approximate parabolic free boundary
    problems: error estimates and implementation. Math. Comput. 51, 27–53 (1988)
67. Nochetto, R.H., Paolini, M., Verdi, C.: An adaptive finite element method for two-phase Stefan
    problems in two space dimensions. Part I: stability and error estimates. Supplement. Math.
    Comp. 57, 73–108 (1991), S1–S11
68. Nochetto, R.H., Paolini, M., Verdi, C.: An adaptive finite element method for two-phase Stefan
    problems in two space dimensions. Part II: implementation and numerical experiments. SIAM
    J. Sci. Stat. Comput. 12, 1207–1244 (1991)
69. Nochetto, R.H., Paolini, M., Verdi, C.: A fully discrete adaptive nonlinear Chernoff formula.
    SIAM J. Numer. Anal. 30, 991–1014 (1993)
70. Nochetto, R.H., Paolini, M., Verdi, C.: Linearization and adaptivity for FBPs. In: Baiocchi,
    C., Lions, J.L. (eds.) Boundary Value Problems for Partial Differential Equations and Appli-
    cations: Dedicated to E. Magenes. Res. Notes Appl. Math., vol. 29, pp. 443–448. Masson,
    Paris (1993)
Stefan Problems and Numerical Analysis                                                           45

71. Nochetto, R.H., Paolini, M., Verdi, C.: Geometric motion of interfaces. In: Baiocchi, C., Li-
    ons, J.L. (eds.) Boundary Value Problems for Partial Differential Equations and Applications:
    Dedicated to E. Magenes. Res. Notes Appl. Math., vol. 29, pp. 403–408. Masson, Paris (1993)
72. Nochetto, R.H., Paolini, M., Verdi, C.: Optimal interface error estimates for the mean curva-
    ture flow. Ann. Sc. Norm. Super. Pisa, Cl. Sci. (4) 21, 193–212 (1994)
73. Nochetto, R.H., Paolini, M., Verdi, C.: A dynamic mesh method for curvature dependent
    evolving interfaces. J. Comput. Phys. 123, 296–310 (1996)
74. Nochetto, R.H., Savaré, G., Verdi, C.: A posteriori error estimates for variable time-step dis-
    cretizations of nonlinear evolution equations. Commun. Pure Appl. Math. 53, 525–589 (2000)
75. Oleinik, O.A.: A method of solution of the general Stefan problem. Sov. Math. Dokl. 1, 1350–
    1354 (1960)
76. Paolini, M., Verdi, C.: Asymptotic and numerical analyses of the mean curvature flow with a
    space-dependent relaxation parameter. Asymptot. Anal. 5, 553–574 (1992)
77. Paolini, M., Sacchi, G., Verdi, C.: Finite element approximations of singular parabolic prob-
    lems. Int. J. Numer. Methods Eng. 26, 1989–2007 (1988)
78. Pietra, P., Verdi, C.: Convergence of the approximate free boundary for the multidimensional
    one-phase Stefan problem. Comput. Mech. 1, 115–125 (1986)
79. Rubinstein, L.: On the determination of the position of the boundary which separates two
    phases in the one-dimensional problem of Stefan. Dokl. Acad. Nauk USSR 58, 217–220
    (1947)
80. Rubinstein, L.: The Stefan Problem. Translations of Mathematical Monographs, vol. 27. Am.
    Math. Soc., Providence (1971)
81. Rulla, J., Walkington, N.J.: Optimal rates of convergence for degenerate parabolic problems
    in two dimensions. SIAM J. Numer. Anal. 33, 56–67 (1996)
82. Savaré, G., Visintin, A.: Variational convergence of nonlinear diffusion equations: applications
    to concentrated capacity problems with change of phase. Atti Accad. Naz. Lincei, Rend. Cl.
    Sci. Fis. Mat. Nat. (9) 8, 49–89 (1997)
83. Tarzia, D.A.: A Bibliography on Moving-Free Boundary Problems for the Heat-Diffusion
    Equation. The Stefan and Related Problems. MAT. Serie A: Conferencias. Seminarios y Tra-
    bajos de Matemática, vol. 2, 1–297 (2000)
84. Verdi, C.: On the numerical approach to a two-phase Stefan problem with nonlinear flux.
    Calcolo 22, 351–381 (1985)
85. Verdi, C.: Optimal error estimates for an approximation of degenerate parabolic problems.
    Numer. Funct. Anal. Optim. 9, 657–670 (1987)
86. Verdi, C.: Numerical methods for phase transition problems. Boll. Unione Mat. Ital. Suppl. 8,
    83–108 (1998)
87. Verdi, C., Visintin, A.: Error estimates for a semi-explicit numerical scheme for Stefan-type
    problems. Numer. Math. 52, 165–185 (1988)
88. Visintin, A.: Sur le problème de Stefan avec flux non linéaire. Boll. Unione Mat. Ital., C Anal.
    Funz. Appl. 18, 63–86 (1981)
89. Visintin, A.: General free boundary evolutions problems in several space dimension. J. Math.
    Anal. Appl. 95, 117–143 (1983)
90. Visintin, A.: Stefan problem with phase relaxation. IMA J. Appl. Math. 34, 225–245 (1985)
91. Visintin, A.: Models of Phase Transitions. Birkhäuser, Boston (1996)
92. Visintin, A.: Introduction to the models of phase transitions. Boll. Unione Mat. Ital. Suppl. 8,
    1–47 (1998)
93. Visintin, A.: Introduction to Stefan-type problems. In: Dafermos, C.M., Pokorny, M. (eds.)
    Handbook of Differential Equations, Evolutionary Equations, vol. 4, pp. 377–484. North-
    Holland, Amsterdam (2008)
Enrico Magenes and the Teaching
of Mathematics

Mario Ferrari




Abstract It rarely happens that a mathematician of international value, as it was
the case for Enrico Magenes, devotes a large part of his time and his interest to
Mathematics Education. That is exactly what Enrico Magenes did, and not occa-
sionally, but systematically. First of all, his commitment was at university level with
the courses of Complementary Mathematics, specifically devoted to the education
of future teachers, assigning graduation thesis on educational topics, and with an
active participation in order to give birth to a Mathematics Education Seminar in
the School of Sciences. In second place, Magenes spent his time for the Teaching
of Mathematics in middle and high schools, working along three different direc-
tions: he put forth specific proposals about the teaching programs; during his term
as president of the Italian Mathematical Union, he founded the Research Units for
Mathematics Education, which initiated the research activity on this topic in Italy;
he committed himself directly in the Project “Mathematics as a Discovery,” writing
the Mathematical Analysis volume with the late Giovanni Prodi.


1 Introduction
Enrico Magenes is internationally known as a researcher in Mathematical Analy-
sis. His contributions were dealt with in the paper published in the December 2010
issue of the Notices of the Italian Mathematical Union, and are presented in the
other chapters of the first part of this volume. I would just like to remember, as it
seems to me that nobody else has already done it, that towards the end of the Fifties
of the last century, Magenes, Pucci, Stampacchia and others founded the CONARM
(Comitato Nazionale Ricercatori Matematici, National Committee of Researchers in
Mathematics), with the explicit aim of rejuvenating Italian Mathematics, and rein-
serting it in the framework of international Mathematics, after the twenty years of
Fascism. I mention this, because the CONARM took an interest in Mathematics
Education in a broad sense, organizing math contests for high school students in a
number of Italian cities.


M. Ferrari (B)
Dipartimento di Matematica “F. Casorati”, Università di Pavia, via Ferrata 1, 27100 Pavia, Italy
e-mail: mario.ferrari@unipv.it

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,              47
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_6,
© Springer-Verlag Italia 2013
48                                                                         M. Ferrari

  Here my task is to briefly discuss Magenes’s contribution to the research on the
Teaching of Mathematics.



2 Magenes and the Teaching of Mathematics: A Constant
  Commitment

From Genoa, where he was full professor of Mathematical Analysis, Magenes ar-
rived in Pavia in 1959, where he had been called as full professor of Complementary
Mathematics: in two years this discipline would become a characteristic subject of
the course of studies in Mathematics Education. Since he was a novice in the field,
in order to define the contents of the two courses he was going to teach, Com-
plementary Mathematics I and II, Magenes followed the examples of well-known
experts.
   For the course that had more specific geometric contents, he adopted the book
“Lessons of Complementary Mathematics: Geometry” by Francesco Cecioni, who
had taught the same subject in Pisa; it was a very rich text, largely based on the
Hilbert’s “Grundlagen der Geometrie,” (Foundations of Geometry). Before long,
Magenes added a new chapter, inspired by G. Choquet’s ideas, based on geometrical
transforms.
   For the course with arithmetic-algebraic contents, he used two manuals: “Devel-
opment of mathematical thesis for qualifying exams in middle and high schools”
by Rocco Serini from Pavia, and the second volume of “Elementary Mathematics”
by Modesto Dedò; moreover, he added a long chapter devoted to Galois theory, for
which he used a booklet by Postnikov.
   It was Magenes, who initiated in Pavia the course of studies in Mathematics
Education in the context of the Degree in Mathematics: he strongly believed in such
a program, and worked very hard for it, even after handing on to me the baton of
the Complementary Mathematics course in 1970. Here I limit myself to recall the
following:
• His full adhesion to the idea of assigning thesis in Mathematics Education. To be
  honest, at the beginning they were not of experimental kind, that is, with direct
  practice in schools, but rather based on the critical exam of manuals or of new
  types of approach to the Teaching of Mathematics in middle and high schools.
• His regular participation to the activities of the Pavia section of the Mathesis
  Society: these activities were aimed at the constant education of teachers.
• His involvement in the formulation of the so-called “Programs of Frascati,” in
  1967 for high schools. Even though at that time these programs were not officially
  accepted by the Italian Ministry of Education, nevertheless they were the starting
  point for future programs prepared by the same ministry later on. The group from
  Pavia was made up by Enrico Magenes and Agostino Savaré. De Finetti, who
  took part to the discussions and to the preparation of the final report with Prodi
  and others, wrote a long commentary on the journal Periodico di Matematiche.
Enrico Magenes and the Teaching of Mathematics                                          49

• His fundamental contribution, so that the School of Sciences started the “Seminar
  in Mathematics Education” in the framework of the same School, and his active
  participation to the Conference organized in 1975 in Salice Terme with the title
  “Sciences in Middle and High Schools and the role of University.”
• His attendance to the many conferences organized by CIIM (Commissione Ital-
  iana per l’Insegnamento della Matematica, Italian Committee for the Teaching of
  Mathematics), even when he did not have to be there as President of the Italian
  Mathematical Union, or as one of the keynote speakers.
• Finally, the fact of being from the mid seventies of the last century a member of
  the “Center for Research in Education Ugo Morin,” with a regular subscription
  to its journal “L’Insegnamento della Matematica e delle Scienze Integrate,” “The
  Teaching of Mathematics and of Integrated Sciences.”



3 Magenes and the Research in Mathematics Education
Strictly speaking, Magenes never carried out a specific research activity in Mathe-
matics Education, but I think it is right to say that he originated all, or almost all, the
Italian research in the Teaching of Mathematics. The reason for this is simple. These
scientific activities were carried out in Italy by the Units of Research in Education,
at least starting from 1975. Now, the interesting fact is that all these units were born
with a large financial endowment from the Italian Research Council, whose math-
ematical committee was at that time chaired by C. Pucci, during Magenes’s tenure
as President of the Italian Mathematical Union. The birth was not painless, as it can
be clearly seen from the minutes of the Special Assembly of the Italian Mathemat-
ical Union, which took place in Alghero on September 27th 1975, and as all the
participants to the Tenth Congress of the Union in Cagliari–Alghero probably still
remember.
    The birth of these units was the natural product of one of the two main guiding
lines, which characterized Magenes’s Presidency of the Union, that is, as he himself
underlined, “Initiatives for problems of schools” (the other one was “Initiatives for
the development and strengthening of research”) (see [2]).
    Answering the critics put forth by G. Stampacchia during the Alghero Assembly,
Magenes recalls the Union position, as it was defined during the Assembly that took
place on April 4th 1975: “The Assembly . . .
• Notices the strong connection between the issue of the teachers’ updating and
  the problem of rejuvenating the teaching of Mathematics both in contents and
  methodology;
• Recognizes the urgency that CIIM fosters the birth of groups where experts in
  Mathematics Education closely collaborate with teachers of middle and high
  schools on different programs; moreover, these groups should work out detailed
  plans and present reports, in such a way they can be positively used;
• Thinks that this first experience paves the way to a right statement of the problem
  of the training and updating of teachers.”
50                                                                            M. Ferrari

For some years the units, with their reports and regular updating of the ongoing ac-
tivities, were the protagonists of the yearly CIIM meetings. The one that took place
in 1976 had the very significative title “Experiments in Mathematics Education, with
regards to the ongoing discussion about the reform of High School, and the revision
of Middle School in Italy.”
    Later on some of these units started organizing “domestic meetings”, although
open to the contributions coming from other units. For example, the units in Pavia,
Pisa, Trieste, that were working on the G. Prodi’s Project “Mathematics as a Dis-
covery” organized about ten of these meetings.
    Then, so-called Inter-Units were born, in order to link the different school levels.
Nowadays there are few units, which still maintain this definition, as the research in
Education, even in Italy, has taken new roads, at the time unthinkable: it has opened
up to the comparison with the international research in Education, it has become an
independent discipline, with its own research subject and its own language, it has
deepened the study and the use of other disciplines, such as psychology, pedagogy,
linguistics. However, we can say that everything had its origin in Magenes’s brave
and far-sighted decision.



4 Magenes and the Research Unit in Pavia: The Project
  “Mathematics as a Discovery”
I just want to say few things, mainly in order to avoid any form of parochialism.
    The Pavia Unit was initiated by Magenes and was founded in 1975, one of the
first in Italy. Since its beginning, the unit worked together with the units of Pisa
and Trieste, in order to test the project “Mathematics as a Discovery,” worked out
by Giovanni Prodi. Pavia was the administrative base of the three units. I would
like to underline the constant and active participation by Magenes to the weekly
meetings of the unit. They were not of purely academic interest, but they were rather
working meetings, in which suggestions from the Pisa Unit were discussed (mainly
due to Prodi and Checcucci), problems and exercises to be inserted in the manual
were proposed, new arguments (at least for many members of the Pavia Unit) were
studied. Moreover, Magenes did not miss any single meeting, which the three units
organized in turns in Pavia, Pisa, Trieste. This is particularly remarkable, as he had
a lot of other things to do!
    The Project “Mathematics as a Discovery,” meant for Liceo Scientifico (an Italian
High School program with a specific scientific curriculum), is without any doubt the
most organic and well-known, among the ones developed by the Research Units. It
is mainly due to Giovanni Prodi, who entirely wrote the first two volumes. Magenes
contributed to the third one, G. Prodi and E. Magenes, Elementi di analisi matema-
tica per il triennio delle scuole secondarie superiori, G. D’Anna, 1982, (Elements
of Mathematical Analysis for the Second Level of High Schools), see [7].
    Even though it is the result of a joint work, the first six chapters are mainly due
to G. Prodi, whereas the seventh (Differential Calculus) and the eighth (Integral
Calculus) are mostly due to Magenes.
Enrico Magenes and the Teaching of Mathematics                                     51

    These three volumes are endowed with teachers’ guides. The guides to the first
(1977) and second (1978) volumes, joint work of the three research units, fit, as it
is written in the introduction, “amongst the initiatives of the Italian Mathematical
Union for the improvement of the teaching of Mathematics at various levels.” The
Italian Mathematical Union edited the volumes (see [3, 4]). The third guide, au-
thored by L. Bazzini, A. Pesci and M. Reggiani and published in 1985, is the fruit
of the Pavia Unit, with the precious collaboration of Prodi and Magenes (see [1]).
    In order to complete the description, I would like to add that part of the project
were also a “Workbook # 3,” devoted to solid Geometry and some complements of
plane Geometry, mainly due to V. Checcucci and M.A. Mariotti, and a “Workbook
Probability and Statistics,” written by L. Piccinato and N. Pintacuda.
    The Project “Mathematics as a Discovery” evolved and later became “Discover
Mathematics,” with a new publisher (Ghisetti & Corvi), a lot of new material, a num-
ber of nimble booklets, and even new authors. Magenes personally contributed
to this project too. In 2006 it was published the volume G. Prodi, E. Magenes,
M.R. Magenes, A. Pesci and M. Reggiani, Calcolo Differenziale e Integrale, Ghisetti
& Corvi, (Differential and Integral Calculus), see [8].
    The preface underlines that “the third part of the volume is devoted to com-
plements, which are somewhat unusual, but nonetheless equally stimulating,” such
as “Algorithms and Numerical Methods” and “Expansion in Fourier Series and
Wavelets.” In writing them, Magenes benefited from the contributions of V. Comin-
cioli and G. Savaré.




5 Two Talks as Keynote Speaker

I would like to recall, without going into details, two talks, which Magenes held in
two conferences devoted to topics in education. I reread them, and I found them still
topical, even though they are dated.
   The first one dates back to 1976, and it was delivered during the Conference
“Experiments in Mathematics Education and the Reform of High School” held in
Bologna and organized by the Italian Mathematical Union, of which at the time Ma-
genes was still President. The title of the talk was “Present Problems in the Teaching
of Mathematics” and it was intended both for mathematics teachers and for a larger
audience, namely the visitors of the “Book Fair.” The talk was published in the pro-
ceedings of the conference, edited by the Italian Mathematical Union (see [5]).
   The second one dates back to 1985, and it was delivered at the “Tenth Confer-
ence in Mathematics Education: High School,” held in Salsomaggiore. The topic
of the conference was “New Contents and New Methodologies for the Teaching
of Mathematics in High Schools.” Magenes talked about “Mathematical Bases for
Everybody,” with a detailed program proposal, which maintains its validity even
nowadays (see [6]).
52                                                                                    M. Ferrari

6 Conclusion

I am well aware that what I have written is a sheer description of facts. Relying on
them, every single reader can make up her own mind about Magenes’s commitment
for the development of the research in Mathematics Education. The research Unit in
Pavia, who had Magenes as its guardian angel, will never forget him.



References
1. Bazzini, L., Pesci, A., Reggiani, M.: Guida al Volume “G. Prodi, E. Magenes, Elementi di
   Analisi Matematica per il Triennio delle Scuole Secondarie Superiori”. G. D’Anna, Firenze,
   Messina (1985)
2. Italian Mathematical Union (ed.): Il X Congresso dell’UMI. Not. Unione Mat. Ital. 2(12), 1–12
   (1975)
3. Italian Mathematical Union (ed.): Guida al Progetto di Insegnamento della Matematica Nelle
   Scuole Superiori Proposto da G. Prodi. Volume Primo. G. D’Anna, Firenze, Messina (1977)
4. Italian Mathematical Union (ed.): Guida al Progetto di Insegnamento della Matematica Nelle
   Scuole Superiori Proposto da G. Prodi. Volume Secondo. G. D’Anna, Firenze, Messina (1978)
5. Magenes, E.: Problemi Attuali dell’Insegnamento della Matematica. Not. Unione Mat. Ital.
   6(Suppl.), 122–133 (1976)
6. Magenes, E.: Le Basi Matematiche per Tutti. Not. Unione Mat. Ital. 7(Suppl.), 7–33 (1986)
7. Prodi, G., Magenes, E.: Elementi di Analisi Matematica per il Triennio delle Scuole Secondarie
   Superiori. G. D’Anna, Firenze, Messina (1982)
8. Prodi, G., Magenes, E., Magenes, M.R., Pesci, A., Reggiani, M.: Calcolo Differenziale e Cal-
   colo Integrale. Ghisetti Corvi, Milano (2006)
List of Mathematical Works Authored or Edited
by Enrico Magenes

Ugo Gianazza




This is a list of mathematical works authored or edited by Enrico Magenes in his
long career; it has been compiled relying on a number of different sources, and it is
probably the first one ever prepared.



References
  1. Magenes, E.: Sui teoremi di Tonelli per la semicontinuità nei problemi di Mayer e di La-
     grange. Ann. Sc. Norm. Super. Pisa, Cl. Sci. (2) 15, 113–125 (1950). 1946
  2. Magenes, E.: Sopra un problema di T. Satô per l’equazione differenziale y  = f (x, y, y  ). I.
     Atti Accad. Naz. Lincei, Rend. Cl. Sci. Fis. Mat. Nat. (8) 2, 130–136 (1947)
  3. Magenes, E.: Sopra un problema di T. Satô per l’equazione differenziale y  = f (x, y, y  ).
     II. Atti Accad. Naz. Lincei, Rend. Cl. Sci. Fis. Mat. Nat. (8) 2, 258–261 (1947)
  4. Magenes, E.: Intorno agli integrali di Fubini-Tonelli. I. Condizioni sufficienti per la semi-
     continuità. Ann. Sc. Norm. Super. Pisa, Cl. Sci. (3) 2, 1–38 (1950). 1948
  5. Magenes, E.: Problemi di valori al contorno per l’equazione differenziale y (n) =
     λf (x, y, y  , . . . , y (n−1) ). Ann. Mat. Pura Appl. (4) 27, 39–74 (1948)
  6. Magenes, E.: Una questione di stabilità relativa ad un problema di moto centrale a massa
     variabile. Pont. Acad. Sci. Comment. 12, 229–259 (1948)
  7. Magenes, E.: Intorno agli integrali di Fubini-Tonelli. II. Teoremi di esistenza dell’estremo.
     Ann. Sc. Norm. Super. Pisa, Cl. Sci. (3) 3, 95–131 (1950). 1949
  8. Magenes, E.: Proprietà topologiche di certi insiemi di punti e teoremi di esistenza di punti
     uniti in trasformazioni plurivalenti di una r-cella in sè. G. Mat. Battaglini (4) 2(78), 168–181
     (1949)
  9. Magenes, E.: Un criterio di esistenza di punti uniti in trasformazioni topologiche piane. Rend.
     Semin. Mat. Univ. Padova 18, 68–114 (1949)
 10. Magenes, E.: Sul minimo relativo degli integrali di Fubini-Tonelli. G. Mat. Battaglini (4)
     3(79), 144–168 (1950)
 11. Magenes, E.: Sulle equazioni di Eulero relative ai problemi di calcolo delle variazioni degli
     integrali di Fubini-Tonelli. Rend. Semin. Mat. Univ. Padova 19, 62–102 (1950)


U. Gianazza (B)
Dipartimento di Matematica “F. Casorati”, Università di Pavia, via Ferrata 1, 27100 Pavia, Italy
e-mail: gianazza@imati.cnr.it

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,                  53
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_7,
© Springer-Verlag Italia 2013
54                                                                                     U. Gianazza

12. Magenes, E.: Un’osservazione sui teoremi di esistenza di punti uniti in trasformazioni pluri-
    valenti di una N -cella. Rend. Semin. Mat. Univ. Padova 19, 108–113 (1950)
13. Magenes, E.: Un’osservazione sulle condizioni necessarie per la semicontinuità degli inte-
    grali di Fubini-Tonelli. Rend. Semin. Mat. Univ. Padova 19, 44–53 (1950)
14. Magenes, E.: Condizioni sufficienti per il minimo relativo in certi problemi di Mayer. Rend.
    Semin. Mat. Univ. Padova 20, 78–98 (1951)
15. Magenes, E.: Intorno ad un nuovo tipo di funzionali del calcolo delle variazioni. In: Atti III.
    Congr. Unione Mat. Ital., Pisa, 23–26 Settembre 1948, pp. 102–104 (1951)
16. Magenes, E.: Sul minimo semi-forte degli integrali di Fubini-Tonelli. Rend. Semin. Mat.
    Univ. Padova 20, 401–424 (1951)
17. Magenes, E.: Sulle estremanti dei polinomiali nella sfera di Hilbert. Rend. Semin. Mat. Univ.
    Padova 20, 24–47 (1951)
18. Magenes, E.: Una questione di stabilità relativa ad un problema di moto centrale a massa
    variabile. In: Atti III. Congr. Unione Mat. Ital., Pisa, 23–26 Settembre 1948, pp. 105–106
    (1951)
19. Magenes, E.: Sul minimo relativo nei problemi di calcolo delle variazioni d’ordine n. Rend.
    Semin. Mat. Univ. Padova 21, 1–24 (1952)
20. Magenes, E.: Sull’equazione del calore: teoremi di unicità e teoremi di completezza connessi
    col metodo di integrazione di M. Picone. I. Rend. Semin. Mat. Univ. Padova 21, 99–123
    (1952)
21. Magenes, E.: Sull’equazione del calore: teoremi di unicità e teoremi di completezza connessi
    col metodo d’integrazione di M. Picone. II. Rend. Semin. Mat. Univ. Padova 21, 136–170
    (1952)
22. Magenes, E.: Sui problemi al contorno misti per le equazioni lineari del secondo ordine di
    tipo ellittico. Ann. Sc. Norm. Super. Pisa, Cl. Sci. (3) 8, 93–120 (1954)
23. Magenes, E.: Osservazioni su alcuni teoremi di completezza connessi con i problemi misti
    per le equazioni lineari ellittiche. Boll. Unione Mat. Ital. (3) 10, 452–459 (1955)
24. Magenes, E.: Problema generalizzato di Dirichlet e teoria del potenziale. Rend. Semin. Mat.
    Univ. Padova 24, 220–229 (1955)
25. Magenes, E.: Problemi al contorno misti per l’equazione del calore. Rend. Semin. Mat. Univ.
    Padova 24, 1–28 (1955)
26. Magenes, E.: Sui problemi di derivata obliqua regolare per le equazioni lineari del secondo
    ordine di tipo ellittico. Ann. Mat. Pura Appl. (4) 40, 143–160 (1955)
27. Magenes, E.: Sul teorema dell’alternativa nei problemi misti per le equazioni lineari ellittiche
    del secondo ordine. Ann. Sc. Norm. Super. Pisa (3) 9, 161–200 (1956). 1955
28. Magenes, E.: Sulla teoria del potenziale. Rend. Semin. Mat. Univ. Padova 24, 510–522
    (1955)
29. Magenes, E.: Su alcune recenti impostazioni dei problemi al contorno, in particolare misti,
    per le equazioni lineari ellittiche del secondo ordine. Ann. Sc. Norm. Super. Pisa (3) 10,
    75–84 (1956)
30. Magenes, E.: Il problema della derivata obliqua regolare per le equazioni lineari ellittico-
    paraboliche del secondo ordine in m variabili. Rend. Mat. Appl. (5) 16, 363–414 (1957)
31. Magenes, E.: Recenti sviluppi nella teoria dei problemi misti per le equazioni lineari ellit-
    tiche. Rend. Semin. Mat. Fis. Milano 27, 75–95 (1957)
32. Magenes, E.: Sui problemi al contorno per i sistemi di equazioni differenziali lineari ellittici
    di ordine qualunque. Univ. e Politec. Torino. Rend. Sem. Mat. 17, 25–45 (1957/1958)
33. Magenes, E., Stampacchia, G.: I problemi al contorno per le equazioni differenziali di tipo
    ellittico. Ann. Sc. Norm. Super. Pisa (3) 12, 247–358 (1958)
34. Lions, J.-L., Magenes, E.: Problemi ai limiti non omogenei. I. Ann. Sc. Norm. Super. Pisa
    (3) 14, 269–308 (1960)
35. Lions, J.-L., Magenes, E.: Remarque sur les problèmes aux limites pour opérateurs
    paraboliques. C. R. Acad. Sci. Paris 251, 2118–2120 (1960)
36. Lions, J.-L., Magenes, E.: Problèmes aux limites non homogènes. II. Ann. Inst. Fourier
    (Grenoble) 11, 137–178 (1961)
List of Mathematical Works Authored or Edited by Enrico Magenes                                 55

 37. Lions, J.-L., Magenes, E.: Problèmes aux limites non homogènes. IV. Ann. Sc. Norm. Super.
     Pisa (3) 15, 311–326 (1961)
 38. Lions, J.-L., Magenes, E.: Problemi ai limiti non omogenei. III. Ann. Sc. Norm. Super. Pisa
     (3) 15, 41–103 (1961)
 39. Lions, J.-L., Magenes, E.: Problemi ai limiti non omogenei. V. Ann. Sc. Norm. Super. Pisa
     (3) 16, 1–44 (1962)
 40. Lions, J.-L., Magenes, E.: Remarques sur les problèmes aux limites linéaires elliptiques. Atti
     Accad. Naz. Lincei, Rend. Cl. Sci. Fis. Mat. Nat. (8) 32, 873–883 (1962)
 41. Lions, J.-L., Magenes, E.: Problèmes aux limites non homogènes. VI. J. Anal. Math. 11,
     165–188 (1963)
 42. Lions, J.L., Magenes, E.: Problèmes aux limites non homogènes. VII. Ann. Mat. Pura Appl.
     (4) 63, 201–224 (1963)
 43. Magenes, E.: Sur les problèmes aux limites pour les équations linéaires elliptiques. In: Les
     Équations aux Dérivées Partielles, Paris, 1962, pp. 95–111. Éditions du Centre National de
     la Recherche Scientifique, Paris (1963)
 44. Lions, J.L., Magenes, E.: Sur certains aspects des problèmes aux limites non homogènes
     pour des opérateurs paraboliques. Ann. Sc. Norm. Super. Pisa (3) 18, 303–344 (1964)
 45. Magenes, E.: Problèmes de traces et problèmes aux limites pour équations linéaires ellip-
     tiques et paraboliques. In: Deuxième Colloq. l’Anal. Fonct. Centre Belge Recherches Math.,
     pp. 83–95. Librairie Universitaire, Louvain (1964)
 46. Lions, J.-L., Magenes, E.: Espaces de fonctions et distributions du type de Gevrey et prob-
     lèmes aux limites paraboliques. Ann. Mat. Pura Appl. (4) 68, 341–417 (1965)
 47. Magenes, E.: Spazi d’interpolazione ed equazioni a derivate parziali. In: Atti del Settimo
     Congresso dell’Unione Matematica Italiana, Genova, 1963, pp. 134–197. Edizioni Cre-
     monese, Rome (1965)
 48. Lions, J.-L., Magenes, E.: Espaces du type de Gevrey et problèmes aux limites pour diverses
     classes d’équations d’évolution. Ann. Mat. Pura Appl. (4) 72, 343–394 (1966)
 49. Lions, J.-L., Magenes, E.: Résultats de régularité et problèmes aux limites non homogènes
     pour opérateurs paraboliques. In: Atti del Convegno su le Equazioni alle Derivate Parziali,
     Nervi, 1965, pp. 75–80. Edizioni Cremonese, Rome (1966)
 50. Madženes, È.: Interpolational spaces and partial differential equations. Usp. Mat. Nauk
     21(2), 169–218 (1966)
 51. Magenes, E.: Espaces de fonctions et de distributions vectorielles du type de Gevrey et équa-
     tions différentielles. In: Séminaire sur les Équations aux Dérivées Partielles (1965–1966). I,
     pp. 1–34. Collège de France, Paris (1966)
 52. Lions, J.-L., Magenes, E.: Quelques remarques sur les problèmes aux limites linéaires ellip-
     tiques et paraboliques dans des classes d’ultra-distributions. I, II. Atti Accad. Naz. Lincei,
     Rend. Cl. Sci. Fis. Mat. Nat. (8) 43, 469–476 (1967)
 53. Geymonat, G., Magenes, E.: La teoria delle distribuzioni. In: Annuario della EST, vol. 68,
     pp. 413–419. Mondadori, Milan (1968)
 54. Lions, J.-L., Magenes, E.: Contrôle optimal et espaces du type de Gevrey. Atti Accad. Naz.
     Lincei, Rend. Cl. Sci. Fis. Mat. Nat. (8) 44, 34–39 (1968)
 55. Lions, J.-L., Magenes, E.: Contrôle optimal et espaces du type de Gevrey. II. Atti Accad.
     Naz. Lincei, Rend. Cl. Sci. Fis. Mat. Nat. (8) 44, 151–157 (1968)
 56. Magenes, E.: Alcuni aspetti della teoria delle ultradistribuzioni e delle equazioni a derivate
     parziali. In: Symposia Mathematica, vol. II, INDAM, Rome, 1968, pp. 235–254. Academic
     Press, London (1969)
 57. Gevrey, M.: Œuvres de Maurice Gevrey (With a Preface by E. Magenes and C. Pucci). Édi-
     tions du Centre National de la Recherche Scientifique, Paris (1970), pages xvi+573 (1 plate)
56                                                                                     U. Gianazza

 58. Magenes, E.: Sui problemi ai limiti per le equazioni di evoluzione, lineari alle derivate
     parziali, del secondo ordine nel tempo. In: Symposia Mathematica, vol. VII, Convegno
     sulle Problemi di Evoluzione, INDAM, Rome, 1970, pp. 165–184. Academic Press, Lon-
     don (1971)
 59. Magenes, E.: Su alcuni problemi ellittici di frontiera libera connessi con il comportamento
     dei fluidi nei mezzi porosi. In: Symposia Mathematica, vol. X, Convegno di Analisi Numer-
     ica, INDAM, Rome, 1972, pp. 265–279. Academic Press, London (1972)
 60. Baiocchi, C., Comincioli, V., Magenes, E., Pozzi, G.A.: Free boundary problems in the theory
     of fluid flow through porous media: existence and uniqueness theorems. Ann. Mat. Pura
     Appl. (4) 97, 1–82 (1973)
 61. Magenes, E.: Problèmes de frontière libre liés à certaines questions d’hydraulique. In: Pro-
     ceedings of Equadiff III (Third Czechoslovak Conf. Differential Equations and their Appli-
     cations, Brno, 1972). Folia Fac. Sci. Natur. Univ. Purkynianae Brunensis, Ser. Monograph.,
     vol. 1, pp. 51–58. Purkyně University, Brno (1973)
 62. Baı̆okki, K., Madženes, È.: Free boundary value problems connected with fluid flow through
     porous materials. Usp. Mat. Nauk 29(2(176)), 50–69 (1974). Translated from the Italian by
     T.D. Ventcel’, Collection of Articles Dedicated to the Memory of Ivan Georgievič Petrovskiı̆
     (1901–1973), I
 63. Magenes, E.: Problemi Attuali dell’Insegnamento della Matematica. Not. Unione Mat. Ital.,
     Suppl. 6, 122–133 (1976)
 64. Mathematical aspects of finite element methods (1977). Proceedings of the Conference held
     at the Consiglio Nazionale delle Ricerche (C.N.R.) in Rome, December 10–12, 1975
 65. Magenes, E.: Topics in parabolic equations: some typical free boundary problems. In: Bound-
     ary Value Problems for Linear Evolution: Partial Differential Equations, Proc. NATO Ad-
     vanced Study Inst., Liège, 1976. NATO Advanced Study Inst. Ser., Ser. C: Math. and Phys.
     Sci., vol. 29, pp. 239–312. Reidel, Dordrecht (1977)
 66. Magenes, E., Lions, J.-L.: Guido Stampacchia (1922–1978). Boll. Unione Mat. Ital., A (5)
     15(3), 715–756 (1978)
 67. Colli Franzone, P., Magenes, E.: On the inverse potential problem of electrocardiology. Cal-
     colo 16(4), 459–538 (1980). 1979
 68. Magenes, E.: Mauro Pagni (1922–1979). Boll. Unione Mat. Ital., A (5) 17(2), 357–363
     (1980)
 69. Magenes, E.: Two-phase Stefan problems in several space variables. Matematiche 36(1), 65–
     108 (1983). 1981
 70. Guerri, L., Mazhenes, E.: An inverse problem of electrocardiology. In: Current Problems in
     Numerical and Applied Mathematics, Novosibirsk, 1981, pp. 59–72. Nauka, Sibirsk. Otdel.,
     Novosibirsk (1983)
 71. Magenes, E.: Carlo Miranda. Ann. Mat. Pura Appl. (4) 135, i–iii (1984). 1983
 72. Magenes, E.: Mathematical problems in electrocardiologic potential theory. In: Methods of
     Functional Analysis and Theory of Elliptic Equations, Liguori, Naples, 1982, pp. 199–216.
     Liguori, Naples (1983)
 73. Magenes, E., Verdi, C., Visintin, A.: Semigroup approach to the Stefan problem with non-
     linear flux. Atti Accad. Naz. Lincei, Rend. Cl. Sci. Fis. Mat. Nat. (8) 75(1–2), 24–33 (1984).
     1983
 74. Numerical solutions of nonlinear problems (1984). Lectures presented at the 6th France-
     Italy-USSR joint symposium of applied mathematics held at the Institut National de
     Recherche en Informatique et en Automatique (INRIA), Rocquencourt, December 19–21,
     1983
 75. Colli Franzone, P., Guerri, L., Magenes, E.: Oblique double layer potentials for the direct and
     inverse problems of electrocardiology. Math. Biosci. 68(1), 23–55 (1984)
 76. Magenes, A., Verdi, C.: The semigroup approach to the two-phase Stefan problem with
     nonlinear flux conditions. In: Free Boundary Problems: Applications and Theory, vol. III,
     Maubuisson, 1984. Res. Notes Math., vol. 120, pp. 28–39. Pitman, Boston (1985)
List of Mathematical Works Authored or Edited by Enrico Magenes                                   57

 77. Magenes, E.: An inverse problem in the theory of logarithmic potentials. Calcolo 22(1), 31–
     46 (1985)
 78. Magenes, E.: Le Basi Matematiche per Tutti. Not. Unione Mat. Ital., Suppl. 7, 7–33 (1986)
 79. Magenes, E., Nochetto, R.H., Verdi, C.: Energy error estimates for a linear scheme to approx-
     imate nonlinear parabolic problems. Modél. Math. Anal. Numér. 21(4), 655–678 (1987)
 80. Magenes, E.: Remarques sur l’approximation des problèmes paraboliques non linéaires. In:
     Analyse Mathématique et Applications, pp. 297–318. Gauthier-Villars, Montrouge (1988)
 81. Mazhenes, È.: Linear schemes for the approximation of parabolic problems of Stefan type.
     In: Numerical Analysis and Mathematical Modeling, pp. 144–165. Akad. Nauk SSSR Otdel
     Vychisl. Mat., Moscow (1988) (in Russian)
 82. Magenes, E.: A time-discretization scheme approximating the nonlinear evolution equation
     ut + ABu = 0. In: Partial Differential Equations and the Calculus of Variations, vol. II. Progr.
     Nonlinear Differential Equations Appl., vol. 2, pp. 743–765. Birkhäuser Boston, Boston
     (1989)
 83. Magenes, E., Verdi, C., Visintin, A.: Theoretical and numerical results on the two-phase
     Stefan problem. SIAM J. Numer. Anal. 26(6), 1425–1438 (1989)
 84. Magenes, E.: On the regular oblique derivative problem for harmonic functions. Atti Accad.
     Naz. Lincei Cl. Sci. Fis. Mat. Natur. Rend. Lincei (9) Mat. Appl. 1(3), 195–202 (1990)
 85. Magenes, E.: Numerical approximation of nonlinear evolution problems. In: Frontiers in Pure
     and Applied Mathematics, pp. 193–207. North-Holland, Amsterdam (1991)
 86. Magenes, E.: On a Stefan problem in a concentrated capacity. In: Nonlinear Analysis. Sc.
     Norm. Super. di Pisa Quaderni, pp. 217–229. Scuola Norm. Sup., Pisa (1991)
 87. Magenes, E.: On the approximation of some non-linear evolution equations. Ric. Mat.
     40(Suppl.), 215–240 (1991). International Symposium in Honor of Renato Caccioppoli,
     Naples, 1989
 88. Magenes, E.: On a Stefan problem on the boundary of a domain. In: Partial Differential Equa-
     tions and Related Subjects, Trento, 1990. Pitman Res. Notes Math. Ser., vol. 269, pp. 209–
     226. Longman Sci. Tech., Harlow (1992)
 89. Magenes, E.: Some new results on a Stefan problem in a concentrated capacity. Atti Accad.
     Naz. Lincei Cl. Sci. Fis. Mat. Natur. Rend. Lincei (9) Mat. Appl. 3(1), 23–34 (1992)
 90. Magenes, E.: The Stefan problem in a concentrated capacity. In: Current Problems of Anal-
     ysis and Mathematical Physics, Taormina, 1992, pp. 155–182. Univ. Roma “La Sapienza”,
     Rome (1993) (in Italian)
 91. Magenes, E., Verdi, C.: Time discretization schemes for the Stefan problem in a concentrated
     capacity. Meccanica 28, 121–128 (1993)
 92. Magenes, E.: Maria Cibrario Cinquini. Atti Accad. Naz. Lincei Cl. Sci. Fis. Mat. Natur.
     Rend. Lincei (9) Suppl. 5, 35–47 (1995). 1994
 93. Magenes, E.: Stefan problems in a concentrated capacity. In: Advanced Mathematics: Com-
     putations and Applications, Novosibirsk, 1995, pp. 82–90. NCC Publ., Novosibirsk (1995)
 94. Magenes, E.: Giuseppe Scorza-Dragoni. Atti Accad. Naz. Lincei Cl. Sci. Fis. Mat. Natur.
     Rend. Lincei (9) Suppl. 7, 69–87 (1997). 1996
 95. Magenes, E.: On a Stefan problem in a concentrated capacity. In: Partial Differential Equa-
     tions and Applications. Lecture Notes in Pure and Appl. Math., vol. 177, pp. 237–253.
     Dekker, New York (1996)
 96. Magenes, E.: On the scientific work of Olga Oleinik. Rend. Mat. Appl. (7) 16(3), 347–373
     (1996)
 97. Magenes, E.: Giuseppe Scorza. Boll. Unione Mat. Ital., A (7) 11(1), 207–216 (1997)
 98. Magenes, E.: Giuseppe Scorza-Dragoni (1908–1996). Ann. Mat. Pura Appl. (4) 172, 1–3
     (1997)
 99. Magenes, E.: An account of the third congress of the UMI, Pisa, Sept. 23–26, 1948. Boll.
     Unione Mat. Ital. Sez. A Mat. Soc. Cult. (8) 1(1), 1–6 (1998)
100. Magenes, E.: Stefan problems with a concentrated capacity. Boll. Unione Mat. Ital. Sez. B
     Artic. Ric. Mat. (8) 1(1), 71–81 (1998)
58                                                                                  U. Gianazza

101. Magenes, E.: Sur l’opérateur du type Dirichlet-Neumann pour certaines équations
     paraboliques non linéaires. In: Équations aux dérivées partielles et applications, pp. 655–
     665. Gauthier-Villars, Éd. Sci. Méd. Elsevier, Paris (1998)
102. Magenes, E.: The UMI in the first post-war period (1945–1951). Boll. Unione Mat. Ital. Sez.
     A Mat. Soc. Cult. (8) 1(2), 145–152 (1999). 1998
103. Magenes, E.: In memory of Lamberto Cattabriga. Ann. Univ. Ferrara, Sez. 7 (N.S.)
     45(suppl.), 1–4 (2000). 1999. Workshop on Partial Differential Equations, Ferrara, 1999
104. Lax, P.D., Magenes, E., Temam, R.: Jacques-Louis Lions (1928–2001). Not. Am. Math. Soc.
     48(11), 1315–1321 (2001)
105. Magenes, E.: Remembering Jacques-Louis Lions. Boll. Unione Mat. Ital. Sez. A Mat. Soc.
     Cult. (8) 4(2), 185–198 (2001)
106. Magenes, E.: In memoriam Jacques-Louis Lions. Atti Accad. Naz. Lincei Cl. Sci. Fis. Mat.
     Natur. Rend. Lincei (9) Suppl. 13, 19–23 (2004). 2002
107. Magenes, E.: In memoriam Olga Oleinik. Atti Accad. Naz. Lincei Cl. Sci. Fis. Mat. Natur.
     Rend. Lincei (9) Suppl. 13, 25–27 (2004). 2002
108. Magenes, E.: Opening address of the international conference on nonlinear evolution prob-
     lems. Atti Accad. Naz. Lincei Cl. Sci. Fis. Mat. Natur. Rend. Lincei (9) Mat. Appl. 15(3–4),
     149–159 (2004). Held at L’Accademia Nazionale dei Lincei and L’Università di Roma “La
     Sapienza”, Rome, January 28–31, 2003
109. Magenes, E.: The collaboration between Guido Stampacchia and Jacques-Louis Lions on
     variational inequalities. In: Variational Analysis and Applications. Nonconvex Optim. Appl.,
     vol. 79, pp. 33–38. Springer, New York (2005)
110. Magenes, E.: Memories of Renato Caccioppoli. Ric. Mat. 54(2), 333–338 (2006). 2005
111. Magenes, E.: Regularity of the solution to a boundary value problem for a parabolic inte-
     grodifferential equation. Rend. Accad. Naz. Sci. XL Mem. Mat. Appl. (5) 29(1), 271–279
     (2005)
112. Integrali singolari e questioni connesse (2011). Lectures from the Centro Internazionale
     Matematico Estivo (C.I.M.E.) Summer School Held in Varenna, June 10–19, 1957. Reprint
     of the 1958 original
113. Teoria delle distribuzioni (2011). Lectures from the Centro Internazionale Matematico Es-
     tivo (C.I.M.E.) Summer School Held in Saltino, September 1–9, 1961. Reprint of the 1961
     original
114. De Giorgi, E., Magenes, E., Mosco, U. (eds.): Proceedings of the International Meeting on
     Recent Methods in Nonlinear Analysis. Pitagora Editrice, Bologna (1979)
115. Lions, J.-L., Magenes, E.: Neodnorodnye Granichnye Zadachi i Ikh Prilozheniya, tom 1
     [Nonhomogeneous Boundary Value Problems and Their Applications, vol. 1]. Izdat. “Mir”,
     Moscow (1971). Translated from the French by L.S. Frank. Edited by V.V. Grušin
116. Lions, J.-L., Magenes, E.: Non-homogeneous Boundary Value Problems and Applications,
     vol. I. Die Grundlehren der mathematischen Wissenschaften, vol. 181. Springer, New York
     (1972). Translated from the French by P. Kenneth
117. Lions, J.-L., Magenes, E.: Non-homogeneous Boundary Value Problems and Applications,
     vol. II. Die Grundlehren der mathematischen Wissenschaften, vol. 182. Springer, New York
     (1972). Translated from the French by P. Kenneth
118. Lions, J.-L., Magenes, E.: Non-homogeneous Boundary Value Problems and Applications,
     vol. III. Die Grundlehren der mathematischen Wissenschaften, vol. 183. Springer, New York
     (1973). Translated from the French by P. Kenneth
119. Lions, J.-L., Magenes, E.: Problèmes aux limites non homogènes et applications, vol. 1.
     Travaux et Recherches Mathématiques, vol. 17. Dunod, Paris (1968)
120. Lions, J.-L., Magenes, E.: Problèmes aux limites non homogènes et applications, vol. 2.
     Travaux et Recherches Mathématiques, vol. 18. Dunod, Paris (1968)
121. Lions, J.-L., Magenes, E.: Problèmes aux limites non homogènes et applications, vol. 3.
     Travaux et Recherches Mathématiques, vol. 20. Dunod, Paris (1970)
122. Magenes, E. (ed.): Free Boundary Problems, vol. I. Istituto Nazionale di Alta Matematica
     Francesco Severi, Rome (1980)
List of Mathematical Works Authored or Edited by Enrico Magenes                                 59

123. Magenes, E. (ed.): Free Boundary Problems, vol. II. Istituto Nazionale di Alta Matematica
     Francesco Severi, Rome (1980)
124. Magenes, E. (ed.): Seminari su la risoluzione numerica delle equazioni differenziali ordinarie
     di tipo “stiff”. Segreteria del Laboratorio di Analisi Numerical del C.N.R., Pavia (1972). Con
     una prefazione di Enrico Magenes, Laboratorio di Anal. Numer. Consiglio Naz. Ricerche
     Pubbl. No. 36 (1972)
125. Prodi, G., Magenes, E.: Elementi di Analisi Matematica per il Triennio delle Scuole Secon-
     darie Superiori. Casa Editrice G. D’Anna, Messina–Firenze (1982)
126. Prodi, G., Magenes, E., Magenes, M.R., Pesci, A., Reggiani, M.: Calcolo Differenziale e
     Calcolo Integrale. Ghisetti Corvi, Milano (2006)
Heat Flow and Calculus on Metric Measure
Spaces with Ricci Curvature Bounded
Below—The Compact Case

Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré




Abstract We provide a quick overview of various calculus tools and of the main
results concerning the heat flow on compact metric measure spaces, with applica-
tions to spaces with lower Ricci curvature bounds. Topics include the Hopf-Lax
semigroup and the Hamilton-Jacobi equation in metric spaces, a new approach to
differentiation and to the theory of Sobolev spaces over metric measure spaces, the
equivalence of the L2 -gradient flow of a suitably defined “Dirichlet energy” and
the Wasserstein gradient flow of the relative entropy functional, a metric version of
Brenier’s Theorem, and a new (stronger) definition of Ricci curvature bound from
below for metric measure spaces. This new notion is stable w.r.t. measured Gromov-
Hausdorff convergence and it is strictly connected with the linearity of the heat flow.


1 Introduction
Aim of these notes is to provide a quick overview of the main results contained in
[4] and [6] in the simplified case of compact metric spaces (X, d) endowed with
a reference probability measure m. The idea is to give the interested reader the
possibility to get as quickly as possible the key ideas behind the proofs of our recent
results, neglecting all the problems that appear in a more general framework (as a
matter of fact, no compactness assumption is made in [4, 6] and finiteness of m is
assumed only in [6]). Passing from compact spaces to complete and separable ones


To the memory of Enrico Magenes, whose exemplar life, research and teaching shaped
generations of mathematicians.
L. Ambrosio
Scuola Normale Superiore, Piazza dei Cavalieri 7, 56126 Pisa, Italy
e-mail: l.ambrosio@sns.it

N. Gigli
Université de Nice, Mathématiques, Parc Valrose, 06108 Nice, France
e-mail: nicola.gigli@unice.fr

G. Savaré (B)
Dipartimento di Matematica “F. Casorati”, Università di Pavia, via Ferrata 1, 27100 Pavia, Italy
e-mail: giuseppe.savare@unipv.it

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,              63
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_8,
© Springer-Verlag Italia 2013
64                                                                   L. Ambrosio et al.

(and even to a more general framework which includes the so-called Wiener space)
is not just a technical problem, meaning that several concepts need to be properly
adapted in order to achieve such generality. Hence, in particular, the discussion here
is by no means exhaustive, as both the key statements and the auxiliary lemmas are
stated in the simplified case of a probability measure in a compact space.
    Apart some very basic concepts about optimal transport, Wasserstein distance
and gradient flows, this paper pretends to be self-contained. All the concepts that
we need are recalled in the preliminary section, whose proofs can be found, for
instance, in the first three chapters of [1] (for an overview on the theory of gradi-
ent flows, see also [3], and for a much broader discussion on optimal transport, see
the monograph by Villani [32]). For completeness reasons, we included in our dis-
cussion some results coming from previous contributions which are potentially less
known, in particular: the (sketch of the) proof by Lisini [22] of the characterization
of absolutely continuous curves w.r.t. the Wasserstein distance (Proposition 4.13),
and the proof of uniqueness of the gradient flow of the relative entropy w.r.t. the
Wasserstein distance on spaces with Ricci curvature bounded below in the sense of
Lott-Sturm-Villani (CD(K, ∞) spaces in short) given by the second author in [12]
(Theorem 5.9).
    In summary, the main arguments and results that we present here are the follow-
ing.
(1) The Hopf-Lax formula produces subsolutions of the Hamilton-Jacobi equation,
    and solutions on geodesic spaces (Theorem 3.2 and Theorem 3.3).
(2) A new approach to the theory of Sobolev spaces over metric measure spaces,
    which leads in particular to the proof that Lipschitz functions are always dense
    in energy in W 1,2 (X, d, m) (Theorem 4.7).
(3) The uniqueness of the gradient flow w.r.t. the Wasserstein distance W2 of the
    relative entropy in CD(K, ∞) spaces (Theorem 5.9).
(4) The identification of the L2 -gradient flow of the natural “Dirichlet energy” and
    the W2 -gradient flow of the relative entropy in CD(K, ∞) spaces (see also [15]
    for the Alexandrov case, a paper to which our paper [4] owes a lot).
(5) A metric version of Brenier’s theorem valid in spaces having Ricci curvature
    bounded from below in a sense slightly stronger than the one proposed by Lott-
    Sturm-Villani. If this curvature assumption holds (Definition 7.11) and μ, ν are
    absolutely continuous w.r.t. m, then “the distance traveled is uniquely deter-
    mined by the starting point”, i.e. there exists a map D : X → R such that for
    any optimal plan γ it holds d(x, y) = D(x) for γ -a.e. (x, y). Moreover, the
    map D is nothing but the weak gradient (according to the theory illustrated in
    Sect. 4) of any Kantorovich potential. See Theorem 7.11.
(6) A key lemma (Lemma 8.7) concerning “horizontal” and “vertical” differenti-
    ation: it allows to compare the derivative of the squared Wasserstein distance
    along the heat flow with the derivative of the relative entropy along a geodesic.
(7) A new (stronger) definition of Ricci curvature bound from below for metric
    measure spaces which is stable w.r.t. measured Gromov-Hausdorff convergence
    and rules out Finsler geometries (Theorem 9.12 and the discussion thereafter).
Heat Flow and Calculus on Metric Measure Spaces                                         65

2 Preliminary Notions

As a general convention, we will always denote by (X, d) a compact metric space
and by m a Borel probability measure on X; we will always refer to the structure
(X, d, m) as a compact and normalized metric measure space. We will use the sym-
bol (Y, dY ) for metric spaces when the compactness is not implicitly assumed.



2.1 Absolutely Continuous Curves and Slopes

Let (Y, dY ) be a complete and separable metric space, J ⊂ R an interval with
nonempty interior and J  t → γt ∈ Y . We say that γt is absolutely continuous
if
                                     s
                    dY (γs , γt ) ≤     g(r)dr, ∀s, t ∈ J, t < s
                                     t

for some g ∈ L1 (J ). It turns out that, if γt is absolutely continuous, there is a mini-
mal function g with this property, called metric speed and given for a.e. t ∈ J by

                                                dY (γs , γt )
                                 |γ˙t | = lim                   .
                                          s→t     |s − t|

See [3, Theorem 1.1.2] for the simple proof. Notice that the absolute continuity
property of the integral ensures that absolutely continuous functions can be extended
by continuity to the closure of their domain.
   We will denote by C([0, 1], Y ) the space of continuous curves on [0, 1] with val-
ues in Y endowed with the sup norm. The set AC 2 ([0, 1], Y ) ⊂ C([0, 1], Y ) consists
                                                   1
of all absolutely continuous curves γ such that 0 |γ̇t |2 dt < ∞: it is easily seen to
                                                       1
be equal to the countable union of the closed sets {γ : 0 |γ̇t |2 dt ≤ n}, and thus it is a
Borel subset of C([0, 1], Y ). The evaluation maps et : C([0, 1], Y ) → Y are defined
by
                                         et (γ ) := γt ,
and are clearly 1-Lipschitz.
    We say that a subset D of Y is geodesic if for any x, y ∈ D there exists a curve
(γt ) ⊂ D on [0, 1] such that γ0 = x, γ1 = y and dY (γt , γs ) = |t − s|dY (x, y) for
all s, t ∈ [0, 1]. Such a curve is called constant speed geodesic, or simply geodesic.
The space of all geodesics in Y endowed with the sup distance will be denoted by
Geo(Y ).
    Given f : Y → R ∪ {±∞} we define the slope (also called local Lipschitz con-
stant) at points x where f (x) ∈ R by

                                                 |f (y) − f (x)|
                           |Df |(x) := lim                       .
                                           y→x      dY (y, x)
66                                                                       L. Ambrosio et al.

We shall also need the one-sided counterparts of the slope called respectively de-
scending slope and ascending slope:
      −                            −         +                              +
     D f (x) := lim [f (y) − f (x)] ,       D f (x) := lim [f (y) − f (x)] ,
                  y→x     dY (y, x)                         y→x      dY (y, x)
                                                                                   (1)
where [·]+ and [·]− denote respectively the positive and negative part. Notice the
change of notation w.r.t. previous works of the authors: the slopes and its one-sided
counterparts were denoted by |∇f |, |∇ ± f |. Yet, as remarked in [13], these notions,
being defined in duality with the distance, are naturally cotangent notions, rather
than tangent ones, whence the notation proposed here.
   It is not difficult to see that for f Lipschitz the slopes and the local Lipschitz
constant are upper gradients according to [18], namely
                                         
                                                  
                                      f  ≤ D ± f 
                                  
                                  ∂γ         γ

for any absolutely continuous curve γ : [0, 1] → Y ; here and in the following we
                                           1
write ∂γ f for f (γ1 ) − f (γ0 ) and γ g for 0 g(γs )|γ̇s |ds.
   Also, for f, g : Y → R Lipschitz it clearly holds
                              
                 D(αf + βg) ≤ |α||Df | + |β||Dg|, ∀α, β ∈ R;                (2a)
                              
                       D(fg) ≤ |f ||Dg| + |g||Df |.                         (2b)



2.2 The Space (P(X), W2 )

Let (X, d) be a compact metric space. The set P(X) consists of all Borel probability
measures on X. As usual, if μ ∈ P(X) and T : X → Y is a μ-measurable map with
values in the topological space Y , the push-forward measure T μ ∈ P(Y ) is defined
by T μ(B) := μ(T −1 (B)) for every set Borel set B ⊂ Y .
   Given μ, ν ∈ P(X), we define the Wasserstein distance W2 (μ, ν) between them
as
                                          
                       W2 (μ, ν) := min d2 (x, y)dγ (x, y),
                          2
                                                                                  (3)

where the minimum is taken among all Borel probability measures γ on X 2 such
that
           π1 γ = μ,    π2 γ = ν;    here π i : X 2 → X, π i (x1 , x2 ) := xi .
Such measures are called admissible plans or couplings for the couple (μ, ν); a plan
γ which realizes the minimum in (3) is called optimal, and we write γ ∈ O PT(μ, ν).
From the linearity of the admissibility condition we get that the squared Wasserstein
distance is convex, i.e.:
                                        
 W22 (1 − λ)μ1 + λμ2 , (1 − λ)ν1 + λν2 ≤ (1 − λ)W22 (μ1 , ν1 ) + λW22 (μ2 , ν2 ). (4)
Heat Flow and Calculus on Metric Measure Spaces                                     67

It is also well known (see e.g. Theorem 2.7 in [1]) that the Wasserstein distance
metrizes the weak convergence of measures in P(X), i.e. the weak convergence
with respect to the duality with C(X); in particular (P(X), W2 ) is a compact metric
space.
    An equivalent definition of W2 comes from the dual formulation of the transport
problem:
                                                     
                       1 2
                         W2 (μ, ν) = sup ψdμ +           ψ c dν,                 (5)
                       2              ψ X              X

the supremum being taken among all Lipschitz functions ψ, where the c-transform
in this formula is defined by

                                            d2 (x, y)
                           ψ c (y) := inf               − ψ(x).
                                      x∈X         2
A function ψ : X → R is said to be c-concave if ψ = φ c for some φ : X → R. It
is possible to prove that the supremum in (5) is always achieved by a c-concave
function, and we will call any such function ψ a Kantorovich potential. We shall
also use the fact that c-concave functions satisfy

                                       ψ cc = ψ.                                   (6)

   The (graph of the) c-superdifferential ∂ c ψ of a c-concave function ψ is the subset
of X 2 defined by
                                                           
                                                  d2 (x, y)
                   ∂ ψ := (x, y) : ψ(x) + ψ (y) =
                     c                     c
                                                             ,
                                                      2

and the c-superdifferential ∂ c ψ(x) at x is the set of y’s such that (x, y) ∈ ∂ c ψ.
A consequence of the compactness of X is that any c-concave function ψ is Lips-
chitz and that the set ∂ c ψ(x) is non empty for any x ∈ X.
   It is not difficult to see that if ψ is a Kantorovich potential for μ, ν ∈ P(X) and
γ is a coupling for (μ, ν) then γ is optimal if and only if supp(γ ) ⊂ ∂ c ψ .
   If (X, d) is geodesic, then so is (P(X), W2 ), and in this case a curve (μt )
is a constant speed geodesic from μ0 to μ1 if and only if there exists a mea-
sure π ∈ P(C([0, 1], X)) concentrated on Geo(X) such that (et ) π = μt for all
t ∈ [0, 1] and (e0 , e1 ) π ∈ O PT(μ0 , μ1 ). We will denote the set of such measures,
called optimal geodesic plans, by GeoOpt(μ0 , μ1 ).



2.3 Geodesically Convex Functionals and Their Gradient Flows

Given a geodesic space (Y, dY ) (in the following this will always be the Wasserstein
space built over a geodesic space (X, d)), a functional E : Y → R ∪ {+∞} is said
68                                                                       L. Ambrosio et al.

K-geodesically convex (or simply K-convex) if for any y0 , y1 ∈ Y there exists a
constant speed geodesic γ : [0, 1] → Y such that γ0 = y0 , γ1 = y1 and

                                           K
      E(γt ) ≤ (1 − t)E(y0 ) + tE(y1 ) −     t (1 − t)d2Y (y0 , y1 ),   ∀t ∈ [0, 1].
                                           2

We will denote by D(E) the domain of E i.e. D(E) := {y : E(y) < ∞}: if E is
K-geodesically convex, then D(E) is geodesic.
   An easy consequence of the K-convexity is the fact that the descending slope
defined in (1) can de computed as a sup, rather than as a limsup:
                                                            +
                                     E(y) − E(z) K
                 |D − E|(y) = sup               + dY (y, z) .                          (7)
                               z=y    dY (y, z)  2

    What we want to discuss here is the definition of gradient flow of a K-convex
functional. There are essentially two different ways of giving such a notion in a met-
ric setting. The first one, which we call Energy Dissipation Equality (EDE), ensures
existence for any K-convex and lower semicontinuous functional (under suitable
compactness assumptions), the second one, which we call Evolution Variation In-
equality (EVI), ensures uniqueness and K-contractivity of the flow. However, the
price we pay for these stronger properties is that existence results for EVI solutions
hold under much more restrictive assumptions.
    It is important to distinguish the two notions. The EDE one is the “correct one”
to be used in a general metric context, because it ensures existence for any initial
datum in the domain of the functional. However, typically gradient flows in the EDE
sense are not unique: this is the reason of the analysis made in Sect. 5, which ensures
that for the special case of the entropy functional uniqueness is indeed true.
    EVI gradient flows are in particular gradient flows in the EDE sense (see Propo-
sition 2.2), ensure uniqueness, K-contractivity and provide strong a priori regular-
izing effects. Heuristically speaking, existence of gradient flows in the EVI sense
depends also on properties of the distance, rather than on properties of the func-
tional only. A more or less correct way of thinking at this is: gradient flows in the
EVI sense exist if and only if the distance is Hilbertian on small scales. For instance,
if the underlying metric space is an Hilbert space, then the two notions coincide.
    Now recall that one of our goals here is to study the gradient flow of the relative
entropy in spaces with Ricci curvature bounded below (Definition 5.9), and recall
that Finsler geometries are included in this setting (see page 926 of [32]). Thus, in
general we must deal with the EDE notion of gradient flow. The EVI one will come
into play in Sect. 9, where we use it to identify those spaces with Ricci curvature
bounded below which are more ‘Riemannian like’.

Note: later on we will refer to gradient flows in the EDE sense simply as “gradient
flows”, keeping the distinguished notation EVI-gradient flows for those in the EVI
sense.
Heat Flow and Calculus on Metric Measure Spaces                                       69

Energy Dissipation Equality

An important property of K-geodesically convex and lower semicontinuous func-
tionals (see Corollary 2.4.10 of [3] or Proposition 3.19 of [1]) is that the de-
scending slope is an upper gradient, that is: for any absolutely continuous curve
yt : J ⊂ R → D(E) it holds
                                    s
                                                 
               E(yt ) − E(ys ) ≤     |ẏr |D − E (yr )dr, ∀t ≤ s.         (8)
                                       t

An application of Young inequality gives that
                                            
                          1 s               1 s − 2
        E(yt ) ≤ E(ys ) +      |ẏr |2 dr +     |D E| (yr )dr,         ∀t ≤ s.       (9)
                          2 t               2 t

This inequality motivates the following definition:

Definition 2.1 (Energy Dissipation Equality definition of gradient flow) Let E be
a K-convex and lower semicontinuous functional and let y0 ∈ D(E). We say that
a continuous curve [0, ∞)  t → yt is a gradient flow for E in the EDE sense (or
simply a gradient flow) if it is locally absolutely continuous in (0, ∞), it takes values
in the domain of E and it holds
                                                 
                              1 s                1 s − 2
         E(yt ) = E(ys ) +          |ẏr |2 dr +     |D E| (yr )dr, ∀t ≤ s.          (10)
                              2 t                2 t

   Notice that, due to (9), the equality (10) is equivalent to
                                               
                             1 s              1 s − 2
        E(y0 ) ≥ E(ys ) +         |ẏr | dr +
                                        2
                                                    |D E| (yr )dr,     ∀s > 0.      (11)
                             2 0              2 0

Indeed, if (11) holds, then (10) holds with t = 0, and then by the additivity of the
integral (10) holds in general.
    It is not hard to check that if E : Rd → R is a C 1 function, then a curve yt : J →
R is a gradient flow according to the previous definition if and only if it satisfies
  d


                               yt = −∇E(yt ),    ∀t ∈ J,

so that the metric definition reduces to the classical one when specialized to Eu-
clidean spaces.
   The following theorem has been proved in [3] (Corollary 2.4.11):

Theorem 2.1 (Existence of gradient flows in the EDE sense) Let (Y, dY ) be a com-
pact metric space and let E : Y → R ∪ {+∞} be a K-geodesically convex and lower
semicontinuous functional. Then every y0 ∈ D(E) is the starting point of a gradient
flow in the EDE sense of E.
70                                                                               L. Ambrosio et al.

   It is important to stress the fact that in general gradient flows in the EDE sense
are not unique. A simple example is Y := R2 endowed with the L∞ norm, and E
defined by E(x, y) := x. It is immediate to see that E is 0-convex and that for any
point (x0 , y0 ) there exist uncountably many gradient flows in the EDE sense starting
from it, for instance all curves (x0 − t, y(t)) with |y  (t)| ≤ 1 and y(0) = y0 .


Evolution Variational Inequality

To see where the EVI notion comes from, notice that for a K-convex and smooth
function f on Rd it holds yt = −∇f (y) for any t ≥ 0 if and only if

             d |yt − z|2 K
                        + |yt − z|2 + f (yt ) ≤ f (z),             ∀z ∈ Rd , ∀t ≥ 0.          (12)
             dt    2     2
This equivalence is true because K-convexity ensures that v = −∇f (y) if and only
                                   K
                   v, y − z +      |y − z|2 + f (y) ≤ f (z),       ∀z ∈ Rd .
                                   2
Inequality (12) can be written in a metric context in several ways, which we collect
in the following statement (we omit the easy proof).

Proposition 2.1 (Evolution Variational Inequality: equivalent statements) Let
(Y, dY ) be a complete and separable metric space, E : Y → (−∞, ∞] a lower
semicontinuous functional, and (yt ) a locally absolutely continuous curve in Y .
Then the following properties are equivalent:
 (i) For any z ∈ D(E) it holds

              d d2Y (yt , z) K 2
                            + dY (yt , z) + E(yt ) ≤ E(z),           for a.e. t ∈ (0, ∞).
              dt     2       2
(ii) For any z ∈ D(E) it holds ∀0 < t < s < ∞
                                                        s
       d2Y (ys , z) − d2Y (yt , z)   K s 2
                                   +     d (yr , z)dr +     E(yr )dr ≤ (s − t)E(z).
                   2h                2 t Y               t

(iii) There exists a set A ⊂ D(E) dense in energy (i.e., for any z ∈ D(E) there exists
      (zn ) ⊂ A converging to z such that E(zn ) → E(z)) such that for any z ∈ A it
      holds
             d2Y (yt+h , z) − d2Y (yt , z)       K 2
      lim                                    +    d (yt , z) + E(yt ) ≤ E(z),     ∀t ∈ (0, ∞).
       h↓0                2                      2 Y

Definition 2.2 (Evolution Variational Inequality definition of gradient flow) We say
that a curve (yt ) is a gradient flow of E in the EVI sense relative to K ∈ R (in short,
EVIK -gradient flow), if any of the above equivalent properties are true. We say that
yt starts from y0 if yt → y0 as t ↓ 0.
Heat Flow and Calculus on Metric Measure Spaces                                     71

   This definition of gradient flow is stronger than the one discussed in the previous
section, because of the following result proved by the third author in [29] (see also
Proposition 3.6 of [1]), which we state without proof.

Proposition 2.2 (EVI implies EDE) Let (Y, dY ) be a complete and separable
metric space, K ∈ R, E : Y → (−∞, ∞] a lower semicontinuous functional and
yt : (0, ∞) → D(E) a locally absolutely continuous curve. Assume that yt is an
EVIK -gradient flow for E. Then (10) holds for any 0 < t < s.

Remark 2.1 (Contractivity) It can be proved that if (yt ) and (zt ) are gradient flows
in the EVIK sense of the l.s.c. functional E, then

                       dY (yt , zt ) ≤ e−Kt dY (y0 , z0 ),    ∀t ≥ 0.

In particular, gradient flows in the EVI sense are unique. This contractivity property,
used in conjunction with (ii) of Proposition 2.1, guarantees that if existence of gra-
dient flows in the EVI sense is known for initial data lying in some subset S ⊂ Y ,
then it is also known for initial data in the closure S of S.

   We also point out the following geometric consequence of the EVI, proven in
[10].

Proposition 2.3 Let E : Y → (−∞, ∞] be a lower semicontinuous functional on
a complete space (Y, dY ). Assume that every y0 ∈ D(E) is the starting point of an
EVIK -gradient flow of E. Then E is K-convex along all geodesics contained in
D(E).

   As we already said, gradient flows in the EVI sense do not necessarily exist, and
their existence depends on the properties of the distance dY . For instance, it is not
hard to see that if we endow R2 with the L∞ norm and consider the functional
E(x, y) := x, then there re is no gradient flow in the EVIK -sense, regardless of the
constant K.



3 Hopf-Lax Formula and Hamilton-Jacobi Equation

Aim of this subsection is to study the properties of the Hopf-Lax formula in a metric
setting and its relations with the Hamilton-Jacobi equation. Here we assume that
(X, d) is a compact metric space. Notice that there is no reference measure m in the
discussion.
   Let f : X → R be a Lipschitz function. For t > 0 define

                                                      d2 (x, y)
                            F (t, x, y) := f (y) +                ,
                                                         2t
72                                                                              L. Ambrosio et al.

and the function Qt f : X → R by

                    Qt f (x) := inf F (t, x, y) = min F (t, x, y).
                                   y∈X                  y∈X

Also, we introduce the functions D + , D − : X × (0, ∞) → R as

                              D + (x, t) := max d(x, y),
                                                                                             (13)
                              D − (x, t) := min d(x, y),

where, in both cases, the y’s vary among all minima of F (t, x, ·). We also set
Q0 f = f and D ± (x, 0) = 0. Thanks to the continuity of F and the compactness
of X, it is easy to check that the map [0, ∞) × X  (t, x) → Qt f (x) is continuous.
Furthermore, the fact that f is Lipschitz easily yields

                         D − (x, t) ≤ D + (x, t) ≤ 2t Lip(f ),                               (14)

and from the fact that the functions {d2 (·, y)}y∈Y are uniformly Lipschitz (because
(X, d) is bounded) we get that Qt f is Lipschitz for any t > 0.

Proposition 3.4 (Monotonicity of D ± ) For all x ∈ X it holds

                         D + (x, t) ≤ D − (x, s),        0 ≤ t < s.                          (15)

As a consequence, D + (x, ·) and D − (x, ·) are both nondecreasing, and they coincide
with at most countably many exceptions in [0, ∞).

Proof Fix x ∈ X. For t = 0 there is nothing to prove. Now pick 0 < t < s and choose
xt and xs minimizers of F (t, x, ·) and F (s, x, ·) respectively, such that d(x, xt ) =
D + (x, t) and d(x, xs ) = D − (x, s). The minimality of xt , xs gives

                                  d2 (xt , x)                 d2 (xs , x)
                      f (xt ) +                 ≤ f (xs ) +                 ,
                                      2t                          2t
                                  d2 (xs , x)                 d2 (xt , x)
                      f (xs ) +                 ≤ f (xt ) +                 .
                                      2s                          2s
Adding up and using the fact that 1t ≥ 1s we deduce

                    D + (x, t) = d(xt , x) ≤ d(xs , x) = D − (x, s),

which is (15).
   Combining this with the inequality D − ≤ D + we immediately obtain that both
functions are nondecreasing. At a point of right continuity of D − (x, ·) we get

                       D + (x, t) ≤ inf D − (x, s) = D − (x, t).
                                       s>t

This implies that the two functions coincide out of a countable set.                           
Heat Flow and Calculus on Metric Measure Spaces                                                    73

   Next, we examine the semicontinuity properties of D ± . These properties im-
ply that points (x, t) where the equality D + (x, t) = D − (x, t) occurs are continuity
points for both D + and D − .

Proposition 3.5 (Semicontinuity of D ± ) The map D + is upper semicontinuous and
the map D − is lower semicontinuous in X × (0, ∞).

Proof We prove lower semicontinuity of D − , the proof of upper semicontinuity of
D + being similar. Let (xi , ti ) be any sequence converging to (x, t) and, for every i,
let (yi ) be a minimum of F (ti , xi , ·) for which d(yi , xi ) = D − (xi , ti ). For all i we
have
                                         d2 (yi , xi )
                             f (yi ) +                   = Qti f (xi ).
                                             2ti
Moreover, the continuity of (x, t) → Qt f (x) gives that limi Qti f (xi ) = Qt f (x),
thus
                                             d2 (yi , x)
                            lim f (yi ) +                   = Qt f (x).
                           i→∞                     2t
This means that (yi ) is a minimizing sequence for F (t, x, ·). Since (X, d) is com-
pact, possibly passing to a subsequence, not relabeled, we may assume that (yi )
converges to y as i → ∞. Therefore

                D − (x, t) ≤ d(x, y) = lim d(x, yi ) = lim D − (xi , ti ).                          
                                           i→∞                   i→∞

Proposition 3.6 (Time derivative of Qt f ) The map t → Qt f is Lipschitz from
[0, ∞) to C(X) and, for all x ∈ X, it satisfies

                               d               [D ± (x, t)]2
                                  Qt f (x) = −               ,                                    (16)
                               dt                  2t 2
for any t > 0 with at most countably many exceptions.

Proof Let t < s and xt , xs be minima of F (t, x, ·) and F (s, x, ·). We have

                                                                          d2 (x, xt ) t − s
          Qs f (x) − Qt f (x) ≤ F (s, x, xt ) − F (t, x, xt ) =                               ,
                                                                              2       ts
                                                                          d2 (x, xs ) t − s
          Qs f (x) − Qt f (x) ≥ F (s, x, xs ) − F (t, x, xs ) =                               ,
                                                                              2        ts
which gives that t → Qt f (x) is Lipschitz in (ε, +∞) for any ε > 0 and x ∈ X.
Also, dividing by (s − t) and taking Proposition 3.4 into account, we get (16). Now
notice that from (14) we get that | dtd Qt f (x)| ≤ 2 Lip2 (f ) for any x and a.e. t, which,
together with the pointwise convergence of Qt f to f as t ↓ 0, yields that t →
Qt f ∈ C(X) is Lipschitz in [0, ∞).                                                       
74                                                                               L. Ambrosio et al.

Proposition 3.7 (Bound on the local Lipschitz constant of Qt f ) For (x, t) ∈ X ×
(0, ∞) it holds:
                                                 D + (x, t)
                               |DQt f |(x) ≤                .                                 (17)
                                                     t

Proof Fix x ∈ X and t ∈ (0, ∞), pick a sequence (xi ) converging to x and a corre-
sponding sequence (yi ) of minimizers for F (t, xi , ·) and similarly a minimizer y of
F (t, x, ·). We start proving that

                           Qt f (x) − Qt f (xi ) D + (x, t)
                        lim                     ≤           .
                       i→∞       d(x, xi )           t

Since it holds

          Qt f (x) − Qt f (xi ) ≤ F (t, x, yi ) − F (t, xi , yi )
                                               d2 (x, yi )                 d2 (xi , yi )
                                 ≤ f (yi ) +                 − f (yi ) −
                                                   2t                           2t
                                     d(x, xi )                        
                                 ≤              d(x, yi ) + d(xi , yi )
                                     2t
                                   d(x, xi )                          
                                 ≤            d(x, xi ) + 2D + (xi , t) ,
                                     2t

dividing by d(x, xi ), letting i → ∞ and using the upper semicontinuity of D + we
get the claim. To conclude, we need to show that

                           Qt f (xi ) − Qt f (x) D + (x, t)
                        lim                     ≤           .
                       i→∞       d(x, xi )           t

This follows along similar lines starting from the inequality

                  Qt f (xi ) − Qt f (x) ≤ F (t, xi , y) − F (t, x, yi ).                        

Theorem 3.2 (Subsolution of HJ) For every x ∈ X it holds

                           d            1
                              Qt f (x) + |DQt f |2 (x) ≤ 0                                    (18)
                           dt           2
with at most countably many exceptions in (0, ∞).

Proof The claim is a direct consequence of Proposition 3.6 and Proposition 3.7. 

    We just proved that in an arbitrary metric space the Hopf-Lax formula produces
subsolutions of the Hamilton-Jacobi equation. Our aim now is to prove that if (X, d)
is a geodesic space, then the same formula provides also supersolutions.
Heat Flow and Calculus on Metric Measure Spaces                                                75

Theorem 3.3 (Supersolution of HJ) Assume that (X, d) is a geodesic space. Then
equality holds in (17). In particular, for all x ∈ X it holds

                           d            1
                              Qt f (x) + |DQt f |2 (x) = 0,
                           dt           2
with at most countably many exceptions in (0, ∞).

Proof Let y be a minimum of F (t, x, ·) such that d(x, y) = D + (x, t). Let γ :
[0, 1] → X be a constant speed geodesic connecting x to y. We have

                                          d2 (x, y)                d2 (γs , y)
       Qt f (x) − Qt f (γs ) ≥ f (y) +                − f (y) −
                                                2t                     2t
                                 d2 (x, y) − d2 (γs , y)       (D + (x, t))2 (2s − s 2 )
                             =                             =                               .
                                           2t                               2t
Therefore we obtain

              Qt f (x) − Qt f (γs )       Qt f (x) − Qt f (γs ) D + (x, t)
          lim                       = lim                      ≥           .
          s↓0       d(x, γs )         s↓0      sD + (x, t)          t

Since s → γs is a particular family converging to x we deduce

                               −            +
                              D Qt f (x) ≥ D (x, t) .
                                                t
Taking into account Proposition 3.6 and Proposition 3.7 we conclude.                           



4 Weak Definitions of Gradient

In this section we introduce two weak notions of ‘norm of the differential’, one
inspired by Cheeger’s seminal paper [9], that we call minimal relaxed slope and
denote by |Df |∗ , and one inspired by the papers of Koskela-MacManus [20] and
of Shanmugalingam [30], that we call minimal weak upper gradient and denote by
|Df |w . Notice that, as for the slopes, the objects that we are going to define are
naturally in duality with the distance, thus are cotangent notion: that’s why we use
the ‘D’ instead of the ‘∇’ in the notation. Still, we will continue speaking of upper
gradients and their weak counterparts to be aligned with the convention used in the
literature (see [13] for a broader discussion on this distinction between tangent and
cotangent objects and its effects on calculus).
    We compare our concepts with those of the original papers in Sect. 4.4, where
we show that all these approaches a posteriori coincide. As usual, we will adopt the
simplifying assumption that (X, d, m) is compact and normalized metric measure
space, i.e. (X, d) is compact and m ∈ P(X).
76                                                                   L. Ambrosio et al.

4.1 The “Vertical” Approach: Minimal Relaxed Slope

Definition 4.3 (Relaxed slopes) We say that G ∈ L2 (X, m) is a relaxed slope of
f ∈ L2 (X, m) if there exist G̃ ∈ L2 (X, m) and Lipschitz functions fn : X → R such
that:
(a) fn → f in L2 (X, m) and |Dfn | weakly converges to G̃ in L2 (X, m);
(b) G̃ ≤ G m-a.e. in X.
We say that G is the minimal relaxed slope of f if its L2 (X, m) norm is minimal
among relaxed slopes. We shall denote by |Df |∗ the minimal relaxed slope.

   Using Mazur’s lemma and (2a) (see Proposition 4.8) it is possible to show that
an equivalent characterization of relaxed slopes can be given by modifying (a) as
follows: G̃ is the strong limit in L2 (X, m) of Gn ≥ |Dfn |. The definition of relaxed
slope we gave is useful to show existence of relaxed slopes (as soon as an approxi-
mating sequence (fn ) with |Dfn | bounded in L2 (X, m) exists) while the equivalent
characterization is useful to perform diagonal arguments and to show that the class
of relaxed slopes is a convex closed set. Therefore the definition of |Df |∗ is well
posed.

Lemma 4.1 (Locality) Let G1 , G2 be relaxed slopes of f . Then min{G1 , G2 } is a
relaxed slope as well. In particular, for any relaxed slope G it holds

                             |Df |∗ ≤ G    m-a.e. in X.

Proof It is sufficient to prove that if B ⊂ X is a Borel set, then χB G1 + χX\B G2 is
a relaxed slope of f . By approximation, taking into account the closure of the class
of relaxed slopes, we can assume with no loss of generality that B is an open set. We
fix r > 0 and a Lipschitz function φr : X → [0, 1] equal to 0 on X \ Br and equal to
1 on B2r , where the open sets Bs ⊂ B are defined by

                      Bs := x ∈ X : dist(x, X \ B) > s ⊂ B.

Let now fn,i , i = 1, 2, be Lipschitz and L2 functions converging to f in L2 (X, m) as
n → ∞, with |Dfn,i | weakly convergent to Gi and set fn := φr fn,1 + (1 − φr )fn,2 .
Then, |Dfn | = |Dfn,1 | on B2r and |Dfn | = |Dfn,2 | on X \ Br ; in Br \ B2r , by
applying (2a) and (2b), we can estimate
                                                                           
         |Dfn | ≤ |Dfn,2 | + Lip(φr )|fn,1 − fn,2 | + φr |Dfn,1 | + |Dfn,2 | .

Since Br ⊂ B, by taking weak limits of a subsequence, it follows that

                     χB2r G1 + χX\Br G2 + χB\B2r (G1 + 2G2 )

is a relaxed slope of f . Letting r ↓ 0 gives that χB G1 + χX\B G2 is a relaxed slope
as well.
Heat Flow and Calculus on Metric Measure Spaces                                        77

   For the second part of the statement argue by contradiction: let G be a relaxed
slope of f and assume that B = {G < |Df |∗ } is such that m(B) > 0. Consider the
relaxed slope GχB + |Df |∗ χX\B : its L2 norm is strictly less than the L2 norm of
|Df |∗ , which is a contradiction.                                              

    A trivial consequence of the definition and of the locality principle we just proved
is that if f : X → R is Lipschitz it holds:

                                |Df |∗ ≤ |Df |    m-a.e. in X.                        (19)

   We also remark that it is possible to obtain the minimal relaxed slope as strong
limit in L2 of slopes of Lipschitz functions, and not only weak, as shown in the next
proposition.

Proposition 4.8 (Strong approximation) If f ∈ L2 (X, m) has a relaxed slope, there
exist Lipschitz functions fn convergent to f in L2 (X, m) with |Dfn | convergent to
|Df |∗ in L2 (X, m).

Proof If gi → f in L2 and |Dgi | weakly converges to |Df |∗ in L2 , by Mazur’s
lemma we can find a sequence convex combinations
              Nh+1                                      Nh+1
      Gh =             αh,i |Dgi |,   with αi,h ≥ 0,             αh,i = 1,   Nh → ∞
             i=Nh +1                                   i=Nh +1

of |Dgi | strongly convergent to |Df |∗ in L2 ; the corresponding convex combina-
tions of gi , that we shall denote by fh , still converge in L2 to f and |Dfh | is domi-
nated by Gh . It follows that
                                                          
                   lim    |Dfh | dm ≤ lim
                                2
                                                   Gh dm =
                                                    2
                                                               |Df |2∗ dm.
                h→∞ X                     h→∞ X                  X

This implies at once that |Dfh | weakly converges to |Df |∗ (because any limit point
in the weak topology is a relaxed slope with minimal norm) and that the convergence
is strong.                                                                        

Theorem 4.4 The Cheeger energy functional
                                     
                                   1
                         Ch(f ) :=      |Df |2∗ dm,                                   (20)
                                   2 X
set to +∞ if f has no relaxed slope, is convex and lower semicontinuous in
L2 (X, m).

Proof A simple byproduct of condition (2a) is that αF + βG is a relaxed slope of
αf + βg whenever α, β are nonnegative constants and F, G are relaxed slopes of
f, g respectively. Taking F = |Df |∗ and G = |Dg|∗ yields the convexity of Ch,
78                                                                        L. Ambrosio et al.

while lower semicontinuity follows by a simple diagonal argument based on the
strong approximation property stated in Proposition 4.8.                   

Proposition 4.9 (Chain rule) If f ∈ L2 (X, m) has a relaxed slope and φ : R → R
is Lipschitz and C 1 , then |Dφ(f )|∗ = |φ  (f )||Df |∗ m-a.e. in X.

Proof We trivially have |Dφ(f )| ≤ |φ  (f )||Df |. If we apply this inequality to
the “optimal” approximating sequence of Lipschitz functions given by Proposi-
tion 4.8 we get that |φ  (f )||Df |∗ is a relaxed slope of φ(f ), so that |Dφ(f )|∗ ≤
|φ  (f )||Df |∗ m-a.e. in X. Applying twice this inequality with φ(r) := −r we get
|Df |∗ ≤ |D(−f )|∗ ≤ |Df |∗ and thus |Df |∗ = |D(−f )|∗ m-a.e. in X.
     Up to a simple rescaling, we can assume |φ  | ≤ 1. Let ψ1 (z) := z − φ(z), notice
that ψ1 ≥ 0 and thus m-a.e. on f −1 ({φ  ≥ 0}) it holds
                                
     |Df |∗ ≤ D φ(f ) ∗ + D ψ1 (f ) ∗ ≤ φ  (f )|Df |∗ + ψ1 (f )|Df |∗ = |Df |∗ ,

hence all the inequalities must be equalities, which forces |D(φ(f ))|∗ = φ  (f )|Df |∗
m-a.e. on f −1 ({φ  ≥ 0}). Similarly, let ψ2 (z) = −z − φ(z) and notice that ψ2 ≤ 0,
so that m-a.e. on f −1 ({φ  ≤ 0}) it holds
                                                          
                 |Df |∗ = D(−f )∗ ≤ D φ(f ) ∗ + D ψ2 (f ) ∗
                          ≤ −φ  (f )|Df |∗ − ψ2 (f )|Df |∗ = |Df |∗ .

As before we can conclude that |D(φ(f ))|∗ = −φ  (f )|Df |∗ m-a.e. on
f −1 ({φ  ≤ 0}).                                                   

   Still by approximation, it is not difficult to show that φ(f ) has a relaxed slope if
φ is Lipschitz, and that |Dφ(f )|∗ = |φ  (f )||Df |∗ m-a.e. in X. In this case φ  (f ) is
undefined at points x such that φ is not differentiable at f (x), on the other hand the
formula still makes sense because |Df |∗ = 0 m-a.e. on f −1 (N ) for any Lebesgue
negligible set N ⊂ R. Particularly useful is the case when φ is a truncation function,
for instance φ(z) = min{z, M}. In this case
                                          
                                   
                     D min{f, M} = |Df |∗ if f (x) < M
                                     ∗      0        iff (x) ≥ M.

Analogous formulas hold for truncations from below.



Laplacian: Definition and Basic Properties

Since the domain of Ch is dense in L2 (X, m) (it includes Lipschitz functions),
the Hilbertian theory of gradient flows (see for instance [3, 8]) can be applied to
Heat Flow and Calculus on Metric Measure Spaces                                       79

Cheeger’s functional (20) to provide, for all f0 ∈ L2 (X, m), a locally Lipschitz con-
tinuous map t → ft from (0, ∞) to L2 (X, m), with ft → f0 as t ↓ 0, whose deriva-
tive satisfies
                            d
                              ft ∈ −∂ Ch(ft ) for a.e. t.                         (21)
                           dt
Here ∂ Ch(g) denotes the subdifferential of Ch at g ∈ D(Ch) in the sense of convex
analysis, i.e.
                                                                                 
  ∂ Ch(g) := ξ ∈ L (X, m) : Ch(f ) ≥ Ch(g) +
                   2
                                                     ξ(f − g)dm ∀f ∈ L (X, m) .
                                                                          2
                                                     X

Another important regularizing effect of gradient flows of convex l.s.c. functionals
lies in the fact that for every t > 0 (the opposite of) the right derivative − dtd+ ft =
limh↓0 h1 (ft − ft+h ) exists and it is actually the element with minimal L2 (X, m)
norm in ∂ Ch(ft ). This motivates the next definition:

Definition 4.4 (Laplacian) The Laplacian f of f ∈ L2 (X, m) is defined for those
f such that ∂ Ch(f ) = ∅. For those f , −f is the element of minimal L2 (X, m)
norm in ∂ Ch(f ). The domain of  is defined as D().

Remark 4.2 (Potential lack of linearity) It should be observed that in general the
Laplacian—as we just defined it—is not a linear operator: the potential lack of lin-
earity is strictly related to the fact that potentially the space W 1,2 (X, d, m) is not
Hilbert, because f → |Df |2∗ dm need not be quadratic. For instance if X = R2 , m
is the Lebesgue measure and d is the distance induced by the L∞ norm, then it is
easily seen that
                                               2
                                            ∂f   ∂f 
                                |Df |2∗ =   +   .
                                             ∂x      ∂y
Even though the Laplacian is not linear, the trivial implication

                   v ∈ ∂ Ch(f )    ⇒     λv ∈ ∂ Ch(λf ),      ∀λ ∈ R,

ensures that the Laplacian (and so the gradient flow of Ch) is 1-homogeneous.

   We can now write
                                       d
                                          ft = ft
                                       dt
for gradient flows ft of Ch, the derivative being understood in L2 (X, m), in accor-
dance with the classical case. The classical Hilbertian theory of gradient flows also
ensures that
                            d
  lim Ch(ft ) = 0 and          Ch(ft ) = −ft 2L2 (X,m) ,    for a.e. t ∈ (0, ∞). (22)
 t→∞                        dt
80                                                                                   L. Ambrosio et al.

Proposition 4.10 (Integration by parts) For all f ∈ D(), g ∈ D(Ch) it holds
                                
                                
                          gf dm ≤ |Dg|∗ |Df |∗ dm.                                             (23)
                                
                             X                      X

Also, let f ∈ D() and φ ∈ C 1 (R) with bounded derivative on an interval contain-
ing the image of f . Then
                                        
                          φ(f )f dm = − |Df |2∗ φ  (f )dm.                  (24)
                         X                              X

Proof Since −f ∈ ∂ Ch(f ) it holds
                  
         Ch(f ) −   εgf dm ≤ Ch(f + εg),                        ∀g ∈ L2 (X, m), ε ∈ R.
                     X

For ε > 0, |Df |∗ + ε|Dg|∗ is a relaxed slope of f + εg (possibly not minimal). Thus
it holds 2Ch(f + εg) ≤ X (|Df |∗ + ε|Dg|∗ )2 dm and therefore
                                     
                          1                                  2
              − εgf dm ≤                      |Df |∗ + ε|Dg|∗ − |Df |2∗ dm
               X          2               X
                                      
                                 =ε       |Df |∗ |Dg|∗ dm + o(ε).
                                      X

Dividing by ε, letting ε ↓ 0 and then repeating the argument with −g in place of g
we get (23).
   For the second part we recall that, by the chain rule, |D(f + εφ(f ))|∗ = (1 +
εφ  (f ))|Df |∗ for |ε| small enough. Hence
                                                
                                 1                                       2  
          Ch f + εφ(f ) − Ch(f ) =                      |Df |2∗ 1 + εφ  (f ) − 1 dm
                                   2                X
                                                
                                          =ε            |Df |2∗ φ  (f )dm + o(ε),
                                                    X
                                                                                2 
which implies that for any v ∈ ∂ Ch(f ) it holds              X vφ(f )dm = X |Df |∗ φ (f )dm,
and gives the thesis with v = −f .                                                                 

Proposition 4.11 (Some properties of the gradient flow of Ch) Let f0 ∈ L2 (X, m)
and let (ft ) be the gradient flow of Ch starting from f0 . Then the following proper-
ties hold.
                               
Mass preservation. ft dm = f0 dm for any t ≥ 0.
Maximum principle. If f0 ≤ C (resp. f0 ≥ c) m-a.e. in X, then ft ≤ C (resp ft ≥ c)
m-a.e. in X for any t ≥ 0.
Heat Flow and Calculus on Metric Measure Spaces                                      81
                                                                      
Entropy dissipation. Suppose 0 < c ≤ f0 ≤ C < ∞ m-a.e. Then t → ft log ft dm
is absolutely continuous in [0, ∞) and it holds
                                   
             d                         |Dft |2∗
                   ft log ft dm = −             dm, for a.e. t ∈ (0, ∞).
             dt X                    X    ft

Proof Mass preservation. Just notice that from (23) we get
                           
 d                          
       ft dm =  1 · ft dm ≤
                                     |D1|∗ |Dft |∗ dm = 0,      for a.e. t ∈ (0, ∞),
  dt
      X            X                X

where 1 is the function identically equal to 1, which has minimal relaxed gradient
equal to 0.
Maximum principle. Fix f ∈ L2 (X, m), τ > 0 and, according to the implicit Euler
scheme, let f τ be the unique minimizer of
                                           
                                        1
                         g → Ch(g) +          |g − f |2 dm.
                                       2τ X
Assume that f ≤ C. We claim that in this case f τ ≤ C as well. Indeed, if this is not
the case we can consider the competitor g := min{f τ , C} in the above minimization
problem. By Proposition 4.9 (with the choice φ(r) := min{r, C}) we get Ch(g) ≤
Ch(f τ ) and the L2 distance of f and g is strictly smaller than the one of f and f τ
as soon as m({f τ > C}) > 0, which is a contradiction.
   Starting from f0 , iterating this procedure, and using the fact that the implicit
Euler scheme converges as τ ↓ 0 (see [3, 8] for details) to the gradient flow we get
the conclusion.
   The same arguments applies to uniform bounds from below.
Entropy dissipation. The map z → z log z is Lipschitz on [c, C] which, together
with the maximum principle and the fact that t → ft ∈ L2 (X, m) is locally abso-
lutely continuous,
                   yields the claimed absolute continuity statement. Now notice that
we have dtd ft log ft dm = (log ft + 1)ft dm for a.e. t. Since by the maximum
principle ft ≥ c m-a.e., the function log z + 1 is Lipschitz and C 1 on the image of
ft for any t ≥ 0, thus from (24) we get the conclusion.                             



4.2 The “Horizontal” Approach: Weak Upper Gradients

In this subsection, following the approach of [4, 5], we introduce a different no-
tion of “weak norm of gradient” in a compact and normalized metric measure space
(X, d, m). This notion of gradient is Lagrangian in spirit, it does not require a re-
laxation procedure, it will provide a new estimate of entropy dissipation along the
gradient flow of Ch, and it will also be useful in the analysis of the derivative of the
entropy along Wasserstein geodesics.
   While the definition of minimal relaxed slope was taken from Cheeger’s work [9],
the notion we are going to introduce is inspired by the work of Koskela-MacManus
82                                                                        L. Ambrosio et al.

[20] and Shanmugalingam [30], the only difference being that we consider a differ-
ent notion of null set of curves.


Negligible Sets of Curves and Functions Sobolev Along a.e. Curve

Recall that the evaluation maps et : C([0, 1], X) → X are defined by et (γ ) := γt .
We also introduce the restriction maps restrst : C([0, 1], X) → C([0, 1], X), 0 ≤ t ≤
s ≤ 1, given by
                               restrst (γ )r := γ((1−r)t+rs) ,                         (25)
so that restrst restricts the curve γ to the interval [t, s] and then “stretches” it on the
whole of [0, 1].

Definition 4.5 (Test plans and negligible sets of curves) We say that a probability
measure π ∈ P(C([0, 1], X)) is a test plan if it is concentrated on AC 2 ([0, 1]; X),
 1
  0 |γ̇t | dtdπ < ∞, and there exists a constant C(π ) such that
          2


                        (et ) π ≤ C(π )m     for every t ∈ [0, 1].                    (26)

A Borel set A ⊂ AC 2 ([0, 1], X) is said negligible if for any test plan π there
exists a π -negligible set N such that A ⊂ N . A property which holds for every
γ ∈ AC 2 ([0, 1], X), except possibly a negligible set, is said to hold for almost every
curve.

Remark 4.3 An easy consequence of condition (26) is that if two m-measurable
functions f, g : X → R coincide up to a m-negligible set and T is an at most count-
able subset of [0, 1], then the functions f ◦ γ and g ◦ γ coincide in T for almost
every curve γ .
   Moreover, choosing an arbitrary test plan π and applying Fubini’s Theorem to the
product measure L 1 × π in (0, 1) × C([0, 1]; X) we also obtain that f ◦ γ = g ◦ γ
L 1 -a.e. in (0, 1) for π -a.e. curve γ ; since π is arbitrary, the same property holds
for almost every curve.

   Coupled with the definition of negligible set of curves, there are the definitions
of weak upper gradient and of functions which are Sobolev along a.e. curve.

Definition 4.6 (Weak upper gradients) A Borel function g : X → [0, ∞] is a weak
upper gradient of f : X → R if
                               
                               
                            f  ≤ g < ∞ for a.e. γ .                      (27)
                         
                             ∂γ         γ

Definition 4.7 (Sobolev functions along a.e. curve) A function f : X → R is
Sobolev along a.e. curve if for a.e. curve γ the function f ◦ γ coincides a.e. in
[0, 1] and in {0, 1} with an absolutely continuous map fγ : [0, 1] → R.
Heat Flow and Calculus on Metric Measure Spaces                                       83

   By Remark 4.3 applied to T := {0, 1}, (27) does not depend on the particular
representative of f in the class of m-measurable function coinciding with f up to a
m-negligible set. The same Remark also shows that the property of being Sobolev
along almost every curve γ is independent of the representative in the class of m-
measurable functions coinciding with f m-a.e. in X.
   In the following remarks we will make use of this basic calculus lemma:

Lemma 4.2 Let f : (0, 1) → R Lebesgue measurable, q ∈ [1, ∞], g ∈ Lq (0, 1)
nonnegative be satisfying
                                     
                          t         
           f (s) − f (t) ≤   g(r)dr  for L 2 -a.e. (s, t) ∈ (0, 1)2 .
                                      
                                  s

Then f ∈ W 1,q (0, 1) and |f  | ≤ g a.e. in (0, 1).

Proof We start by proving the Lemma in the case q = 1. It is immediate to check
that f ∈ L∞ (0, 1). Let N ⊂ (0, 1)2 be the L 2 -negligible subset where the above
inequality fails. By Fubini’s theorem, also the set {(t, h) ∈ (0, 1)2 : (t, t + h) ∈ N ∩
(0, 1)2 } is L 2 -negligible. In particular, by Fubini’s theorem, for a.e. h we have
(t, t + h) ∈/ N for a.e. t ∈ (0, 1). Let hi ↓ 0 with this property and use the identities
             1                               1
                      φ(t + h) − φ(t)            f (t − h) − f (t)
                f (t)                 dt = −                       φ(t)dt
              0              h                0         −h

with φ ∈ Cc1 (0, 1) and h = hi sufficiently small to get
                         1                 1
                                                       
                            f (t)φ (t)dt  ≤
                                   
                                                 g(t)φ(t)dt.
                        
                           0                      0

It follows that the distributional derivative of f is a signed measure η with finite
total variation which satisfies
      1           1             1        1
                                          
   −         
         f φ dt =     φdη,            φdη ≤    g|φ|dt for every φ ∈ Cc1 (0, 1);
                                 
      0             0                 0               0

therefore η is absolutely continuous with respect to the Lebesgue measure with
|η| ≤ gL 1 . This gives the W 1,1 (0, 1) regularity and, at the same time, the inequal-
ity |f  | ≤ g a.e. in (0, 1). The case q > 1 immediately follows by applying this
inequality when g ∈ Lq (0, 1).                                                       

   With the aid of this lemma, we can prove that the existence of a weak upper
gradient implies Sobolev regularity along a.e. curve.

Remark 4.4 (Restriction and equivalent formulation) Notice that if π is a test plan,
so is (restrst ) π . Hence if g is a weak upper gradient of f then for every t < s in
84                                                                               L. Ambrosio et al.

[0, 1] it holds
                                            s
                                    
                   f (γs ) − f (γt ) ≤         g(γr )|γ̇r |dr   for a.e. γ .
                                            t

Let π be a test plan: by Fubini’s theorem applied to the product measure L 2 × π in
(0, 1)2 × C([0, 1]; X), it follows that for π -a.e. γ the function f satisfies
                                                  
                            s                    
         f (γs ) − f (γt ) ≤                     
                                   g(γ r )|γ̇r |dr  for L 2 -a.e. (t, s) ∈ (0, 1)2 .
                                  t                 

An analogous argument shows that
                               s
           |f (γs ) − f (γ0 )| ≤ 0 g(γr )|γ̇r |dr
                                1                           for L 1 -a.e. s ∈ (0, 1).        (28)
          |f (γ1 ) − f (γs )| ≤ s g(γr )|γ̇r |dr

Since g ◦ γ |γ̇ | ∈ L1 (0, 1) for π -a.e. γ , by Lemma 4.2 it follows that f ◦ γ ∈
W 1,1 (0, 1) for π -a.e. γ , and
                              
                 d            
                  (f ◦ γ ) ≤ g ◦ γ |γ̇ | a.e. in (0, 1), for π-a.e. γ .      (29)
                  dt          

Since π is arbitrary, we conclude that f ◦ γ ∈ W 1,1 (0, 1) for a.e. γ , and therefore it
admits an absolutely continuous representative fγ ; moreover, by (28), it is immedi-
ate to check that f (γ (t)) = fγ (t) for t ∈ {0, 1} and a.e. γ .

Remark 4.5 (An approach with a non explicit use of negligible set of curves) The
previous remark could be used to introduce the notion of weak upper gradients with-
out speaking (explicitly) of Borel sets at all. One can simply say that g ∈ L2 (X, m)
is a weak upper gradient of f : X → R provided for every test plan π it holds
                                               1
                                   
                  f (γ1 ) − f (γ0 )dπ(γ ) ≤       g(γs )|γ̇s |dsdπ (γ )
                                                        0

(this has been the approach followed in [13]).

Proposition 4.12 (Locality) Let f : X → R be Sobolev along almost all absolutely
continuous curves, and let G1 , G2 be weak upper gradients of f . Then min{G1 , G2 }
is a weak upper gradient of f .

Proof It is a direct consequence of (29).                                                       

Definition 4.8 (Minimal weak upper gradient) Let f : X → R be Sobolev along
almost all curves. The minimal weak upper gradient |Df |w of f is the weak upper
gradient characterized, up to m-negligible sets, by the property

          |Df |w ≤ G    m-a.e. in X, for every weak upper gradient G of f.                    (30)
Heat Flow and Calculus on Metric Measure Spaces                                                                85

   Uniqueness of the minimal weak upper gradient is obvious. For existence, we
take |Df |w := infn Gn , where Gn are weak upper gradients which provide a mini-
mizing sequence in
                                                              
                          −1
              inf    tan Gdm : G is a weak upper gradient of f .
                       X

We immediately see, thanks to Proposition 4.12, that we can assume with no loss of
generality that Gn+1 ≤ Gn . Hence, by
                                     monotone convergence, the function |Df |w
is a weak upper gradient of f and X tan−1 Gdm is minimal at G = |Df |w . This
minimality, in conjunction with Proposition 4.12, gives (30).

Theorem 4.5 (Stability w.r.t. m-a.e. convergence) Assume that fn are m-measu-
rable, Sobolev along almost all curves and that Gn are weak upper gradients of fn .
Assume furthermore that fn (x) → f (x) ∈ R for m-a.e. x ∈ X and that (Gn ) weakly
converges to G in L2 (X, m). Then G is a weak upper gradient of f .

Proof Fix a test plan π . By Mazur’s theorem we can find convex combinations
                Nh+1                                                Nh+1
       Hh :=               αh,i Gi        with αh,i ≥ 0,                        αh,i = 1,            Nh → ∞
               i=Nh +1                                            i=Nh +1

converging strongly to G in L2 (X, m). Denoting by f˜h the corresponding con-
vex combinations of fh , Hh are weak upper gradients of f˜h and still f˜h → f m-
a.e. in X.
   Since for every nonnegative Borel function ϕ : X → [0, ∞] it holds (with C =
C(π ))
                         1
                 ϕ dπ =          ϕ(γt )|γ̇t |dt dπ
                γ                          0
                                          1                 1/2        1                1/2
                             ≤                  ϕ 2 (γt )dt                   |γ̇t |2 dt         dπ
                                           0                             0
                                      1                               1/2    1                     1/2
                             ≤                  ϕ 2 d(et ) πdt                       |γ̇t |2 dtdπ
                                      0                                           0
                                                       1/2    1                         1/2
                             ≤ C               ϕ 2 dm                    |γ̇t |2 dtdπ            ,            (31)
                                                                    0
                       √       1
we obtain, for C̄ :=        C( 0 |γ̇t |2 dtdπ)1/2 ,
                      
                            |Hh − G| + min |f˜h − f |, 1                       dπ
                       γ
                                                        
                    ≤ C̄ Hh − GL2 + min |f˜h − f |, 1 L2 → 0.
86                                                                       L. Ambrosio et al.
                                                                        
By a diagonal argument we can find a subsequence h(n) such that γ |Hh(n) − G| +
min{|f˜h(n) − f |, 1} → 0 as n → ∞ for π -a.e. γ . Since f˜h converge m-a.e. to f and
the marginals of π are absolutely continuous w.r.t. m we have also that for π -a.e. γ
it holds f˜h (γ0 ) → f (γ0 ) and f˜h (γ1 ) → f (γ1 ).
    If we fix a curve γ satisfying these convergence properties, since (f˜h(n) )γ are
equi-absolutely continuous (being their derivatives bounded by Hh(n) ◦ γ |γ̇ |) and
a further subsequence of f˜h(n) converges a.e. in [0, 1] and in {0, 1} to f (γs ), we
can pass to the limit to obtain an absolutely continuous function fγ equal to f (γs )
a.e. in [0, 1] and in {0, 1} with derivative bounded by G(γs )|γ̇s |. Since π is arbitrary
we conclude that f is Sobolev along almost all curves and that G is a weak upper
gradient of f .                                                                         

Remark 4.6 (|Df |w ≤ |Df |∗ ) An immediate consequence of the previous proposi-
tion is that any f ∈ D(Ch) is Sobolev along a.e. curve and satisfies |Df |w ≤ |Df |∗ .
Indeed, for such f just pick a sequence of Lipschitz functions converging to f in
L2 (X, m) such that |Dfn | → |Df |∗ in L2 (X, m) (as in Proposition 4.8) and recall
that for Lipschitz functions the local Lipschitz constant is an upper gradient.


A Bound from Below on Weak Gradients

In this short subsection we show how, using test plans and the very definition of
minimal weak gradients, it is possible to use |Df |w to bound from below the
increments of the relative entropy. We start with the following result, proved—
in a more general setting—by Lisini in [22]: it shows how to associate to a
curve μ ∈ AC 2 ([0, 1]; (P(X), W2 )) a plan π ∈ P(C([0, 1], X)) concentrated on
AC 2 ([0, 1]; X) representing the curve itself (see also Theorem 8.2.1 of [3] for the
Euclidean case). We will only sketch the proof.

 Proposition 4.13 (Superposition principle) Let (X, d) be a compact space
 and let μ ∈ AC 2 ([0, 1]; (P(X), W2 )). Then there exists π ∈ P(C([0, 1], X))
concentrated     on AC 2 ([0, 1]; X) such that (et ) π = μt for any t ∈ [0, 1] and
   |γ̇t |2 dπ(γ ) = |μ̇t |2 for a.e. t ∈ [0, 1].

Proof If π ∈ P(C([0, 1], X)) is any plan concentrated on AC 2 ([0, 1], X) such that
(et ) π = μt for any t ∈ [0, 1], since (et , es ) π ∈ A DM(μt , μs ), for any t < s it
holds
                                                      s           2
            W22 (μt , μs ) ≤ d2 (γt , γs )dπ (γ ) ≤         |γ̇r |dr dπ(γ )
                                                                 t
                                       s
                          ≤ (s − t)          |γ̇r |2 drdπ(γ ),
                                        t
                           
which shows that |μ̇t |2 ≤ |γ̇t |2 dπ(γ ) for a.e. t. Hence, to conclude it is sufficient
to find a plan π ∈ P(C([0, 1], X)), concentrated on AC 2 ([0, 1], X), with (et ) π =
                                            1
μt for any t ∈ [0, 1] such that |μ̇t |2 dt ≥ 0 |γ̇t |2 dtdπ(γ ).
Heat Flow and Calculus on Metric Measure Spaces                                                                     87

   To build such a π we make the simplifying assumption that (X, d) is geodesic
(the proof for the general case is similar, but rather than interpolating with piece-
wise geodesic curves one uses piecewise constant ones, this leads to some technical
complications that we want to avoid here—see [22] for the complete argument). Fix
n ∈ N and use a gluing argument to find γ n ∈ P(X n+1 ) such that (π i , π i+1 ) γ n ∈
O PT(μ i , μ i+1 ) for i = 0, . . . , n − 1. By standard measurable selection arguments,
         n       n
there exists a Borel map T n : X n+1 → C([0, 1], X) such that γ := T n (x0 , . . . , xn )
is a constant speed geodesic on each of the intervals [i/n, (i + 1)/n] and γi/n = xi ,
i = 0, . . . , n. Define π n := Tn γ n . It holds
   1                                          n−1                                    n−1
                          1                                                         1
       |γ̇t | dtdπ (γ ) =
             2           n
                                                        d2 (γ i , γ i+1 )dπ(γ ) =             W22 (μ i , μ i+1 )
     0                    n                                   n    n                n                n      n
                                                  i=0                                   i=0
                                           1
                                      ≤         |μ̇t |2 dt.                                                        (32)
                                           0
                                                                          1
Now notice that the map E : C([0, 1], X) → [0, ∞] given by E(γ ) := 0 |γ̇t |2 dt if
γ ∈ AC 2 ([0, 1], X) and +∞ otherwise, is lower semicontinuous and, via a simple
equicontinuity argument, with compact sublevels. Therefore by Prokorov’s theorem
we get that (π n ) ⊂ P(C([0, 1], X)) is a tight sequence, hence for any limit measure
π the uniform bound (32) gives the thesis.                                         

Proposition 4.14 Let [0, 1]  t → μt = ft m be a curve in AC 2 ([0, 1], (P(X),
W2 )). Assume that for some 0 < c < C < ∞ it holds c ≤ ft ≤ C m-a.e. for any
t ∈ [0, 1], and that f0 is Sobolev along a.e. curve with |Df0 |w ∈ L2 (X, m). Then
                                                                   
                                          1 t     |Df0 |2w           1 t
       f0 log f0 dm −      ft log ft dm ≤                  fs dsdm +       |μ̇s |2 ds,
     X                   X                2 0 X f02                  2 0
      ∀t > 0.

Proof Let π ∈ P(C([0, 1], X)) be a plan associated to the curve (μt ) as in Propo-
                                                                     1
sition 4.13. The assumption ft ≤ C m-a.e. and the fact that 0 |γ̇t |2 dtdπ(γ ) =

  |μ̇t |2 dt < ∞ guarantee that π is a test plan. Now notice that it holds |D log ft |w =
|Dft |w /ft (because z → log z is C 1 in [c, C]), thus we get
                                
                  f0 log f0 dm −     ft log ft dm
                     X                               X
                             
                         ≤           log f0 (f0 − ft )dm
                                 X
                             
                         =       (log f0 ◦ e0 − log f0 ◦ et )dπ
                              t
                                       |Df0 |w (γs )
                         ≤                           |γ̇s |dsdπ(γ )
                                     0   f0 (γs )
88                                                                                   L. Ambrosio et al.
                            t                           t
                       1    |Df0 |2w (γs )            1
                   ≤             2 (γ )
                                           dsdπ(γ ) +           |γ̇s |2 dsdπ(γ )
                       2 0     f 0 s
                                                      2     0
                        t                           t
                     1        |Df0 |w 2            1
                   =                2
                                        fs dsdm +        |μ̇s |2 ds.                                 
                     2 0 X f0                      2 0



4.3 The Two Notions of Gradient Coincide

Here we prove that the two notions of “norm of weak gradient” we introduced co-
incide. We already noticed in Remark 4.6 that |Df |w ≤ |Df |∗ , so that to conclude
we need to show that |Df |w ≥ |Df |∗ .
   The key argument to achieve this is the following lemma, which gives a sharp
bound on the W2 -speed of the L2 -gradient flow of Ch. This lemma has been intro-
duced in [15] to study the heat flow on Alexandrov spaces, see also Sect. 6.

Lemma 4.3 (Kuwada’s lemma) Let f0 ∈ L2 (X, m) and let (ft ) be the L2 -gradient
flow of Ch starting from f0 . Assume that for some 0 < c ≤ C < ∞ it holds c ≤ f0 ≤
C m-a.e. in X, and that X f0 dm = 1. Then the curve t → μt := ft m is absolutely
continuous w.r.t. W2 and it holds
                                   
                                         |Dft |2∗
                       |μ̇t |2 ≤                  dm,   for a.e. t ∈ (0, ∞).
                                       X   ft

Proof We start from the duality formula (5) with ϕ = −ψ : taking into account the
factor 2 and using the identity Q1 (−ψ) = ψ c we get
                                                     
                            W22 (μ, ν)
                                       = sup Q1 ϕdν −     ϕdμ                                     (33)
                                 2        ϕ  X          X

where the supremum runs among all Lipschitz functions ϕ.
   Fix such a ϕ and recall (Proposition 3.6) that the map t → Qt ϕ is Lipschitz with
values in L∞ (X, m), and a fortiori in L2 (X, m).
   Fix also 0 ≤ t < s, set  = (s − t) and recall that since (ft ) is the Gradient Flow
of Ch in L2 , the map [0, ]  τ → ft+τ is absolutely continuous with values in L2 .
Therefore the map [0, ]  τ → Q τ ϕft+τ is absolutely continuous with values in
L2 . The equality

     Q τ +h ϕft+τ +h − Q τ ϕft+τ                Q τ +h ϕ − Q τ ϕ                ft+τ +h − ft+τ
        
                                        = ft+τ      
                                                                     + Q τ +h ϕ                  ,
                  h                                     h                               h
together with the uniform continuity of (x, τ ) → Q τ ϕ(x) shows that the derivative
of τ → Q τ ϕft+τ can be computed via the Leibniz rule.
Heat Flow and Calculus on Metric Measure Spaces                                                                      89

     We have:
                                            
        Q1 ϕdμs −    ϕdμt =    Q1 ϕft+ dm −       ϕft dm
      X            X        X                X
                                    d
                          =           (Q τ ϕft+τ )dτ dm
                             X 0   dτ
                                   |DQ τ ϕ|2
                          ≤         −             ft+τ + Q τ ϕft+τ dτ dm, (34)
                             X 0           2

having used Theorem 3.2. Observe that by inequalities (23) and (19) we have
                                                 
      Q τ ϕft+τ dm ≤   |DQ τ ϕ|∗ |Dft+τ |∗ dm ≤    |DQ τ ϕ||Dft+τ |∗ dm
        X                            X                                              X
                                                                                   
                                     1                                                   |Dft+τ |2∗
                                 ≤            |DQ τ ϕ|2 ft+τ dm +                                   dm.           (35)
                                     2   X                                     2       X   ft+τ

Plugging this inequality in (34), we obtain
                                                                        
                                                                               |Dft+τ |2∗
                             Q1 ϕdμs −                 ϕdμt ≤                              dm.
                         X                         X                 2    0   X   ft+τ

This latter bound does not depend on ϕ, so from (33) we deduce
                                                             
                                                                        |Dft+τ |2∗
                                  W22 (μt , μs ) ≤                                dm.
                                                                0     X   ft+τ

Since fr ≥ c for any r ≥ 0 and r → Ch(fr ) is nonincreasing and finite for every
r > 0, we immediately
                        get that t → μt is locally Lipschitz in (0, ∞). At Lebesgue
points of t → X |Dft |2∗ /ft dm we obtain the stated pointwise bound on the metric
speed.                                                                             

Theorem 4.6 Let f ∈ L2 (X, m). Assume that f is Sobolev along a.e. curve and
that |Df |w ∈ L2 (X, m). Then f ∈ D(Ch) and |Df |∗ = |Df |w m-a.e. in X.

Proof Up to a truncation argument and addition of a constant, we can assume that
0 < c ≤ f ≤ C < ∞ m-a.e. in X for some c, C. Let (ft ) be the L2 -gradient flow of
Ch starting from f and recall that from Proposition 4.11 we have
                                                       t
                                                                      |Dfs |2∗
            f log f dm −          ft log ft dm =                               dsdm < ∞           for every t > 0.
     X                        X                             0       X   fs
On the other hand, from Proposition 4.14 and Lemma 4.3 we have
                                                      t                                      t
                                                   1              |Df |2w           1                    |Dfs |2∗
     f log f dm −            ft log ft dm ≤                           2
                                                                          fs dsdm +                               dsdm.
 X                       X                         2    0       X   f               2            0     X   fs
                                                                                                                    (36)
90                                                                       L. Ambrosio et al.

Hence we deduce
       t                                   
                        1 t  |Dfs |2∗        1 t  |Df |2w
          4Ch( fs )ds =               dsdm ≤              fs dsdm.
       0                2 0 X fs             2 0 X f2

Letting t ↓ 0, taking into account the L2 -lower semicontinuity
                                                   √      √ of Ch and the       fact—
easy to check
            √  from the maximum
                             t    principle—that
                                    √               f s →   f  as s ↓ 0 in L 2 (X, m),

we get Ch( f ) ≤ limt↓0 1t 0 Ch( fs )ds. On the other hand, the bound f ≥ c >
          |Df |2w
0 ensures   f2
                  ∈ L1 (X, m) and the maximum principle again together with the
convergence of fs to f in L2 (X, m) when s ↓ 0 grants that the convergence is also
                                |Df |2               t  |Df |2
weak∗ in L∞ (X, m), therefore X f w dm = limt↓0 1t 0 X f 2 w fs dmds.
     In summary, we proved
                                                    
                          1         |Df |2∗      1         |Df |2w
                                            dm ≤                   dm,
                          2       X   f          2       X   f

which, together with the inequality |Df |w ≤ |Df |∗ m-a.e. in X, gives the conclu-
sion.                                                                           

   We are now in the position of defining the Sobolev space W 1,2 (X, d, m). We start
with the following simple and general lemma.

Lemma 4.4 Let (B,  · ) be a Banach space and let E : B → [0, ∞] be a
1-homogeneous, convex and lower semicontinuous map. Then the vector space
{E < ∞} endowed with the norm
                                 
                         vE := v2 + E 2 (v),

is a Banach space.

Proof It is clear that (D(E),  · E ) is a normed space, so we only need to prove
completeness. Pick a sequence (vn ) ⊂ D(E) which is Cauchy w.r.t.  · E . Then,
since  ·  ≤  · E we also get that (vn ) is Cauchy w.r.t.  · , and hence there
exists v ∈ B such that vn − v → 0. The lower semicontinuity of E grants that
E(v) ≤ limn E(vn ) < ∞ and also that it holds

                       lim vn − vE ≤ lim vn − vm E = 0,
                       n→∞                  n,m→∞

which is the thesis.                                                                    

   Therefore, if we want to build the space W 1,2 (X, d, m) ⊂ L2 (X, m), the
only thing that we need is an L2 -lower semicontinuous functional playing the
role which on Rd is played by the L2 -norm of the distributional gradient of
Sobolev functions. We certainly have this functional, namely the map f →
Heat Flow and Calculus on Metric Measure Spaces                                        91

|Df |∗ L2 (X,m) = |Df |w L2 (X,m) . Hence the lemma above provides the Banach
space W 1,2 (X, d, m). Notice that in general W 1,2 (X, d, m) is not Hilbert: this is not
surprising, as already the Sobolev space W 1,2 built over (Rd ,  · , Ld ) is not Hilbert
if the underlying norm  ·  does not come from a scalar product.



4.4 Comparison with Previous Approaches

It is now time to underline that the one proposed here is certainly not the first def-
inition of Sobolev space over a metric measure space (we refer to [17] for a much
broader overview on the subject). Here we confine the discussion only to weak no-
tions of (modulus of) gradient, and in particular to [9] and [20, 30]. Also, we discuss
only the quadratic case, referring to [5] for general power functions p and the inde-
pendence (in a suitable sense) of p of minimal gradients.
    In [9] Cheeger proposed a relaxation procedure similar to the one used in
Sect. 4.1, but rather than relaxing the local Lipschitz constant of Lipschitz func-
tions, he relaxed upper gradients of arbitrary functions. More precisely, he defined

                           E(f ) := inf lim Gn L2 (X,m) ,
                                          n→∞

where the infimum is taken among all sequences (fn ) converging to f in L2 (X, m)
such that Gn is an upper gradient for fn . Then, with the same computations done in
Sect. 4.1 (actually and obviously, the story goes the other way around: we closely
followed his arguments) he showed that for f ∈ D(E) there is an underlying no-
tion of weak gradient |Df |C , called minimal generalized upper gradient, such that
E(f ) = |Df |C L2 (X,m) and

                              |Df |C ≤ G      m-a.e. in X,

for any G weak limit of a sequence (Gn ) as in the definition of E(f ).
   Notice that since the local Lipschitz constant is always an upper gradient for
Lipschitz functions, one certainly has

                 |Df |C ≤ |Df |∗       m-a.e. in X, for any f ∈ D(Ch).               (37)

Koskela and MacManus [20] introduced and Shanmugalingam [30] further studied
a procedure close to ours (again: actually we have been inspired by them) to produce
a notion of “norm of weak gradient” which does not require a relaxation procedure.
Recall that for Γ ⊂ AC([0, 1], X) the 2-Modulus Mod2 (Γ ) is defined by
                                                
                                                                                 
 Mod2 (Γ ) := inf ρ2L2 (X,m) : ρ ≥ 1 ∀γ ∈ Γ         for every Γ ⊂ AC [0, 1], X .
                                   γ
                                                                                     (38)
92                                                                   L. Ambrosio et al.

It is possible to show that the 2-Modulus is an outer measure on AC([0, 1], X).
Building on this notion, Koskela and MacManus [20] considered the class of func-
tions f which satisfy the upper gradient inequality not necessarily along all curves,
but only out of a Mod2 -negligible set of curves. In order to compare more prop-
erly this concept to Sobolev classes, Shanmugalingam said that G : X → [0, ∞] is
a weak upper gradient for f if there exists f˜ = f m-a.e. such that
                      
                                                    
 f˜(γ0 ) − f˜(γ1 ) ≤ G for every γ ∈ AC [0, 1], X \ N with Mod2 (N ) = 0.
                      γ


Then, she defined the energy Ẽ : L2 (X, m) → [0, ∞] by putting

                             Ẽ(f ) := inf G2L2 (X,m) ,

where the infimum is taken among all weak upper gradient G of f according to the
previous condition. Thanks to the properties of the 2-modulus (a stability property
of weak upper gradients analogous to ours), it is possible to show that Ẽ is indeed
L2 -lower semicontinuous, so that it leads to a good definition of the Sobolev space.
Also, using a key lemma due to Fuglede, Shanmugalingam proved that E = Ẽ on
L2 (X, m), so that they produce the same definition of Sobolev space W 1,2 (X, d, m)
and the underlying gradient |Df |S which gives a pointwise representation to Ẽ(f )
is the same |Df |C behind the energy E.
                                set Γ ⊂ AC ([0, 1], X) and a test plan π , inte-
    Observe now that for a Borel                 2

grating w.r.t. π the inequality γ ρ ≥ 1 ∀γ ∈ Γ and then minimizing over ρ, we
get
                                                1
                         2
                    π(Γ ) ≤ C(π ) Mod2 (Γ )         |γ̇ |2 dsdπ(γ ),
                                                  0

which shows that any Mod2 -negligible set of curves is also negligible according to
Definition 4.5. This fact easily yields that any f ∈ D(Ẽ) is Sobolev along a.e. curve
and satisfies
                          |Df |w ≤ |Df |C ,    m-a.e. in X.                       (39)
Given that we proved in Theorem 4.6 that |Df |∗ = |Df |w , inequalities (37) and
(39) also give that |Df |∗ = |Df |w = |Df |C = |Df |S (the smallest one among the
four notions coincides with the largest one).
    What we get by the new approach to Sobolev spaces on metric measure spaces
is the following result.

Theorem 4.7 (Density in energy of Lipschitz functions) Let (X, d, m) be a compact
normalized metric measure space. Then for any f ∈ L2 (X, m) with weak upper
gradient in L2 (X, m) there exists a sequence (fn ) of Lipschitz functions converging
to f in L2 (X, m) such that both |Dfn | and |Dfn |w converge to |Df |w in L2 (X, m)
as n → ∞.
Heat Flow and Calculus on Metric Measure Spaces                                      93

Proof Straightforward consequence of the identity of weak and relaxed gradients
and of Proposition 4.8.                                                      

   Let us point out a few aspects behind the strategy of the proof of Theorem 4.7,
which of course strongly relies on Lemma 4.3 and Proposition 4.14. First of all, let
us notice that the stated existence of a sequence of Lipschitz function fn converging
to f with |Dfn | → |Df |w in L2 (X, m) is equivalent to show that
                                              
                              lim Y1/n (f ) ≤   |Df |2w dm,                      (40)
                            n→∞                   X

where, for τ > 0, Yτ denotes the Yosida regularization
                                                               
                                1                  1
             Yτ (f ) := inf          |Dh| dm +
                                          2
                                                       |h − f | dm .
                                                               2
                       h∈Lip(X) 2 X               2τ X
In fact, the sequence fn can be chosen by a simple diagonal argument among the
approximate minimizers of Y1/n (f ). On the other hand, it is well known that the
relaxation procedure we used to define the Cheeger energy yields
                                                             
                                              n
                  Y1/n (f ) = min Ch(h) +          |h − f |2 dm ,            (41)
                             h∈D(Ch)          2 X
and therefore (40) could be achieved by trying to estimate the Cheeger energy of the
unique minimizer f˜n of (41) in terms of |Df |w .
    Instead of using the Yosida regularization Y1/n , in the proof of Theorem 4.6 we
obtained a better approximation of f by flowing it (for a small time step, say tn ↓ 0)
through the L2 -gradient flow ft of the Cheeger energy. This flow is strictly related
to Yτ , since it can be obtained as the limit of suitably rescaled iterated minimizers
of Yτ (the so called Minimizing Movement scheme, see e.g. [3]), but has the great
advantage to provide a continuous curve of probability densities ft , which can be
represented as the image of a test plan, through Lisini’s Theorem. Thanks to this
representation and Kuwada’s Lemma, we were allowed to use the weak upper gra-
dient |Df |w instead of |Df |∗ to estimate the Entropy dissipation along ft (see (36))
and to obtain the desired sharp bound of |Dfs |∗ at least for some time s ∈ (0, tn ). In
any case, a posteriori we recovered the validity of (40).
    This density result was previously known (via the use of maximal functions and
covering arguments) under the assumption that the space was doubling and sup-
ported a local Poincaré inequality for weak upper gradients, see [9, Theorem 4.14,
Theorem 4.24]. Actually, Cheeger proved more, namely that under these hypotheses
Lipschitz functions are dense in the W 1,2 norm, a result which is still unknown in
the general case. Also, notice that another byproduct of our density in energy result
is the equivalence of local Poincaré inequality stated for Lipschitz functions on the
left hand side and slope on the right hand side, and local Poincaré inequality stated
for general functions on the left hand side and upper gradients on the right hand side;
this result was previously known [19] under much more restrictive assumptions on
the metric measure structure.
94                                                                      L. Ambrosio et al.

5 The Relative Entropy and Its W2 -Gradient Flow

In this section we study the W2 -gradient flow of the relative entropy on spaces with
Ricci curvature bounded below (in short: CD(K, ∞) spaces). The content is essen-
tially extracted from [12]. As before the space (X, d, m) is compact and normalized
(i.e. m(X) = 1).
    Recall that the relative entropy functional Entm : P(X) → [0, ∞] is defined by
                                    
                                        f log f dm if μ = f m,
                       Entm (μ) := X
                                      +∞             otherwise.

Definition 5.9 (Weak bound from below on the Ricci curvature) We say that
(X, d, m) has Ricci curvature bounded from below by K for some K ∈ R if the
Relative Entropy functional Entm is K-convex along geodesics in (P(X), W2 ).
More precisely, if for any μ0 , μ1 ∈ D(Entm ) there exists a constant speed geodesic
μt : [0, 1] → P(X) between μ0 and μ1 satisfying

                                                   K
Entm (μt ) ≤ (1 − t) Entm (μ0 ) + t Entm (μ1 ) −     t (1 − t)W22 (μ0 , μ1 ) ∀t ∈ [0, 1].
                                                   2

   This definition was introduced in [23] and [31]. Its two basic features are: com-
patibility with the Riemannian case (i.e. a compact Riemannian manifold endowed
with the normalized volume measure has Ricci curvature bounded below by K
in the classical pointwise sense if and only if Entm is K-geodesically convex in
(P(X), W2 )) and stability w.r.t. measured Gromov-Hausdorff convergence.
   We also recall that Finsler geometries are included in the class of metric measure
spaces with Ricci curvature bounded below. This means that if we have a smooth
compact Finsler manifold (that is: a differentiable manifold endowed with a norm—
possibly not coming from an inner product—on each tangent space which varies
smoothly on the base point) endowed with an arbitrary positive C ∞ measure, then
this space has Ricci curvature bounded below by some K ∈ R (see the theorem
stated at page 926 of [32] for the flat case and [24] for the general one).
   The goal now is to study the W2 -gradient flow of Entm . Notice that the general
theory of gradient flows of K-convex functionals ensures the following existence
result (see the representation formula for the slope (7) and Theorem 2.1).

Theorem 5.8 (Consequences of the general theory of gradient flows) Let (X, d, m)
be a CD(K, ∞) space. Then the slope |D − Entm | is lower semicontinuous w.r.t.
weak convergence and for any μ ∈ D(Entm ) there exists a gradient flow (in the
EDE sense of Definition 2.1) of Entm starting from μ.

   Thus, existence is granted. The problem is then to show uniqueness of the gra-
dient flow. To this aim, we need to introduce the concept of push forward via a
plan.
Heat Flow and Calculus on Metric Measure Spaces                                            95

Definition 5.10 (Push forward via a plan) Let μ ∈ P(X) and let γ ∈ P(X 2 ) be
such that μ  π1 γ . The measures γ μ ∈ P(X 2 ) and γ  μ ∈ P(X) are defined as:

                                  dμ
                dγ μ (x, y) :=          (x)dγ (x, y),            γ  μ := π2 γ μ .
                                 dπ1 γ

   Observe that, since γ μ  γ , we have γ  μ  π2 γ . We will say that γ has
bounded deformation if there exist 0 < c ≤ C < ∞ such that cm ≤ πi γ ≤ Cm,
i = 1, 2. Writing μ = f π1 γ , the definition gives that
                                                                  
             γ  μ = ηπ2 γ      with η given by η(y) =               f (x)dγ y (x),      (42)

where {γ y }y∈X is the disintegration of γ w.r.t. its second marginal.
   The operation of push forward via a plan has interesting properties in connection
with the relative entropy functional.

Proposition 5.15 The following properties hold:
 (i) For any μ, ν ∈ P(X), γ ∈ P(X 2 ) such that μ, ν  π1 γ it holds

                                   Entγ  ν (γ  μ) ≤ Entν (μ).

 (ii) For μ ∈ D(Entm ) and γ ∈ P(X 2 ) with bounded deformation, it holds γ  μ ∈
      D(Entm ).
(iii) Given γ ∈ P(X 2 ) with bounded deformation, the map

                      D(Entm )  μ          →      Entm (μ) − Entm (γ  μ),

     is convex (w.r.t. linear interpolation of measures).

Proof (i). We can assume μ  ν, otherwise there is nothing to prove. Then it is
immediate to check from the definition that γ  μ  γ  ν. Let μ = f ν, ν = θ π1 γ ,
γ  μ = ηγ  ν, and u(z) := z log z. By disintegrating γ as in (42), we have that
                                                                           −1
             η(y) =       f (x)dγ̃ y (x),       γ̃ y =       θ (x)dγ y (x)        θγ y.

The convexity of u and Jensen’s inequality with the probability measures γ̃ y yield
                                            
                                                     
                              u η(y) ≤           u f (x) dγ̃ y (x).

Since {γ̃ y }y∈X is the disintegration of γ̃ = (θ ◦ π 1 )γ with respect to its second
marginal γ  ν and the first marginal of γ̃ is ν, by integration of both sides with
96                                                                                 L. Ambrosio et al.

respect to γ  ν we get
                                                          
                                                                      
        Entγ  ν (γ  μ) =       u η(y) dγ  ν(y) ≤               u f (x) dγ̃ y (x) dγ  ν(y)
                                                       
                                                                
                       ≤         u f (x) dγ̃ (x, y) =       u f (x) dν(x) = Entν (μ).

(ii). Taking into account the identity
                                                        
                                                                   dσ
                             Entν (μ) = Entσ (μ) +          log       dμ,                       (43)
                                                                   dν

valid for any μ, ν, σ ∈ P(X) with σ having bounded density w.r.t. ν, the fact that
γ  (π1 γ ) = π2 γ and the fact that cm ≤ π1 γ , π2 γ ≤ Cm, the conclusion follows
from

             Entm (γ  μ) ≤ Entπ 2 γ (γ  μ) + log C
                                      

                             ≤ Entπ 1 γ (μ) + log C ≤ Entm (μ) + log C − log c.
                                      


(iii). Let μ0 , μ1 ∈ D(Entm ) and define μt := (1 − t)μ0 + tμ1 and νt := γ  μt . A di-
rect computation shows that

 (1 − t) Entm (μ0 ) + t Entm (μ1 ) − Entm (μt ) = (1 − t) Entμt (μ0 ) + t Entμt (μ1 ),
     (1 − t) Entm (ν0 ) + t Entm (ν1 ) − Entm (νt ) = (1 − t) Entνt (ν0 ) + t Entνt (ν1 ),

and from (i) we have that

            Entμt (μi ) ≥ Entγ  μt (γ  μi ) = Entνt (νi ),       ∀t ∈ [0, 1], i = 0, 1,

which gives the conclusion.                                                                       

     In the next lemma and in the sequel we use the short notation
                                    
                          C(γ ) :=        d2 (x, y)dγ (x, y).
                                            X×X

Lemma 5.5 (Approximability in Entropy and distance) Let μ, ν ∈ D(Entm ).
Then there exists a sequence (γ n ) of plans with bounded deformation such that
Entm (γ n μ) → Entm (ν) and C(γ nμ ) → W22 (μ, ν) as n → ∞.

Proof Let f and g respectively be the densities of μ and ν w.r.t. m; pick γ ∈
O PT(μ, ν) and, for every n ∈ N, let An := {(x, y) : f (x) + g(y) ≤ n} and

                                                  1
                                 γ n := cn γ |An + (Id, Id) m ,
                                                  n
Heat Flow and Calculus on Metric Measure Spaces                                      97

where cn → 1 is the normalization constant. It is immediate to check that γ n is of
bounded deformation and that this sequence satisfies the thesis (see [12] for further
details).                                                                          

Proposition 5.16 (Convexity of the squared slope) Let (X, d, m) be a CD(K, ∞)
space. Then the map

                        D(Entm )  μ      →      |D − Entm |2 (μ)

is convex (w.r.t. linear interpolation of measures).

   Notice that the only assumption that we make is the K-convexity of the entropy
w.r.t. W2 , and from this we deduce the convexity w.r.t. the classical linear interpola-
tion of measures of the squared slope.

Proof Recall that from (7) we know that
                                                                 −
         −                          [Entm (μ) − Entm (ν) − K2 W22 (μ, ν)]+
        D Entm (μ) =         sup                                           .
                             ν∈P2 (X)               W2 (μ, ν)
                               ν =μ


We claim that it also holds
                                                                     −
           −               [Entm (μ) − Entm (γ  μ) − K2 C(γ μ )]+
          D Entm (μ) = sup                                        ,
                          γ                  C(γ μ )

where the supremum is taken among all plans with bounded deformation (where the
right hand side is taken 0 by definition if C(γ μ ) > 0).
   Indeed, Lemma 5.5 gives that the first expression is not larger than the second.
For the converse inequality we can assume C(γ μ ) > 0, ν = γ  μ = μ, and K < 0.
Then it is sufficient to apply the simple inequality

                                                   (a − b)+ (a − c)+
              a, b, c ∈ R,     0<b≤c        ⇒         √    ≥ √       ,
                                                       b        c
                                            −                            −
with a := Entm (μ) − Entm (γ  μ), b := K2 W22 (μ, γ  μ) and c := K2 C(γ μ ).
   Thus, to prove the thesis it is enough to show that for every γ with bounded
deformation the map
                                                                     −
                                  [(Entm (μ) − Entm (γ  μ) − K2 C(γ μ ))+ ]2
        D(Entm )  μ      →                                                    ,
                                                      C(γ μ )

is convex w.r.t. linear interpolation of measures.
98                                                                                  L. Ambrosio et al.

     Clearly the map
                                                            
           D(Entm )  μ        →        C(γ μ ) =               d2 (x, y)dγ x (y) dμ(x),


where {γ x } is the disintegration of γ w.r.t. its first marginal, is linear. Thus, from
(iii) of Proposition 5.15 we know that the map

                                                                      K−
                  μ       →       Entm (μ) − Entm (γ  μ) −             C(γ μ ),
                                                                       2
is convex w.r.t. linear interpolation of measures. Hence the same is true for its pos-
itive part. The conclusion follows from the fact that the function Ψ : [0, ∞)2 →
R ∪ {+∞} defined by
                                      ⎧ 2
                                      ⎪
                                      ⎨b
                                        a
                                              if b > 0,
                          Ψ (a, b) := +∞ if b = 0, a > 0
                                      ⎪
                                      ⎩
                                        0     if a = b = 0,

is convex and it is nondecreasing w.r.t. a.                                                        

   The convexity of the squared slope allows to prove uniqueness of the gradient
flow of the entropy:

Theorem 5.9 (Uniqueness of the gradient flow of Entm ) Let (X, d, m) be a
CD(K, ∞) space and let μ ∈ D(Entm ). Then there exists a unique gradient flow
of Entm starting from μ in (P(X), W2 ).

Proof We recall (inequality (4)) that the squared Wasserstein distance is convex
w.r.t. linear interpolation of measures. Therefore, given two absolutely continuous
                                                           μ1 +μ2
curves (μ1t ) and (μ2t ), the curve t → μt := t 2 t is absolutely continuous as well
and its metric speed can be bounded from above by

                                   |μ̇1t |2 + |μ̇2t |2
                       |μ̇t |2 ≤                       ,   for a.e. t ∈ (0, ∞).                  (44)
                                            2
Let (μ1t ) and (μ2t ) be gradient flows of Entm starting from μ ∈ D(Entm ). Then we
have
                                                  T
                        1 T  1 2                               
 Entm (μ) = Entm μ1T +               μ̇  dt + 1     |D − Entm |2 μ1t dt, ∀T ≥ 0,
                                        t
                              2 0               2 0
                                 T                T
                        1           2 2                        
 Entm (μ) = Entm μ2T +               μ̇  dt + 1     |D − Entm |2 μ2t dt, ∀T ≥ 0.
                                        t
                              2 0               2 0
Adding up these two equalities, using the convexity of the squared slope guaranteed
by Proposition 5.16, the convexity of the squared metric speed given by (44) and the
Heat Flow and Calculus on Metric Measure Spaces                                                      99

strict convexity of the relative entropy, we deduce that for the curve t → μt it holds
                                              T                         T
                                         1                          1          −     
        Entm (μ) > Entm (μT ) +                      |μ̇t |2 dt +             D Entm 2 (μt )dt,
                                         2       0                  2    0

for every T such that μ1T = μ2T . This contradicts inequality (9).                                    



6 The Heat Flow as Gradient Flow
It is well known that on Rd the heat flow can be seen both as gradient flow of the
Dirichlet energy in L2 and as gradient flow of the relative entropy in (P2 (Rd ), W2 ).
It is therefore natural to ask whether this identification between the two a priori
different gradient flows persists or not in a general compact and normalized metric
measure space (X, d, m).
    The strategy consists in considering a gradient flow (ft ) of Ch with nonnegative
initial data and in proving that the curve t → μt := ft m is a gradient flow of Entm (·)
in (P(X), W2 ): by the uniqueness result of Theorem 5.9 this will be sufficient to
conclude.
    We already built most of the ingredients needed for the proof to work, the only
thing that we should add is the following lemma, where the slope of Entm is bounded
from above in terms of the notions of “norm of weak gradient” that we discussed in
Chap. 4. Notice that the bound (47) for Lipschitz functions was already known to
Lott-Villani [23], so that our added value here is the use of the density in energy of
Lipschitz functions to get the correct, sharp inequality (45) (sharpness will be seen
in (48)).

Lemma 6.6 (Fisher bounds slope) Let (X, d, m) be a compact and normalized
CD(K, ∞) metric-measure space and let f be a probability density which is
Sobolev along a.e. curve. Then
                                                                
                   −                           |Df |2w
                  D Entm 2 (f m) ≤                     dm = 4 |D f |2w dm.                        (45)
                                               X   f            X

Proof Assume at first that f is Lipschitz with 0 < c ≤ f , and let (fn ) be a sequence
of probability densities such that W2 (fn m, f m) → 0 and where the slope of Entm
at f m is attained. Choose γ n ∈ O PT(f m, fn m) and notice that
                          
             f log f dm −     fn log fn dm
          X                        X
                  
              ≤           (f − fn ) log f dm
                      X
                  
                                           
              =        log f (x) − log f (y) dγ n (x, y)
100                                                                    L. Ambrosio et al.
                                                      
                   (log f (x) − log f (y))2
            ≤                               dγ n (x, y)     d2 (x, y)dγ n (x, y)
                           d2 (x, y)
                                                        1/2
            =          L2 (x, y)dγ n,x (y) f (x)dm(x)         W2 (f m, fn m),       (46)

where γ n,x is the disintegration of γ n with respect to f m, and L is the bounded
Borel function
                               | log f (x)−log f (y)|
                                                              if x = y,
                  L(x, y) :=             d(x,y)
                                                     |Df |(x)
                                |D log f |(x) = f (x)         ifx = y.

Notice
        that for every x ∈ X the map y → L(x, y) is upper-semicontinuous; since
   ( d2 (x, y)dγ n,x )f (x)dm → 0 as n → ∞, we can assume without loss of gener-
 ality that
                        
                   lim     d2 (x, y)dγ n,x (y) = 0 for f m-a.e. x ∈ X.
                 n→∞

Fatou’s Lemma then yields
                                                          
                                                                |Df |2
       lim   L (x, y)dγ n (x, y) ≤
              2
                                       L (x, x)f (x)dm(x) =
                                        2
                                                                       dm,
      n→∞                            X                        X   f
hence (46) gives
                                                               
   −                                           +
  D Entm (f m) = lim (Entm (f m) − Entm (fn m)) ≤                  |Df |2
                                                                            dm.     (47)
                  n→∞         W2 (f m, fn m)                       X   f

We now turn to the
                 √ general case. Let f be any probability density Sobolev along a.e.
curve such that f ∈ D(Ch) (otherwise is√nothing to prove). √       We use Theorem 4.7
to find a sequence
             √     of  Lipschitz
                          √       functions (  f n ) converging to  f in L2 (X, m) and
such that |D fn | → |D f |w in L (X, m) and m-a.e. Up to summing up positive
                                       2

and vanishing constants and multiplying
                                           for suitable normalization factors, we can
assume that 0 < cn ≤ fn and X fn dm = 1, for any n ∈ N. The conclusion follows
passing to the limit in (47) by taking into account the weak lower semicontinuity of
|D − Entm | (formula (7) and discussion thereafter).                                

Theorem 6.10 (The heat flow as gradient flow) Let f0 ∈ L2 (X, m) be such that
μ0 = f0 m ∈ P(X) and denote by (ft ) the gradient flow of Ch in L2 (X, m) starting
from f0 and by (μt ) the gradient flow of Entm in (P(X), W2 ) starting from μ0 .
Then μt = ft m for any t ≥ 0.

Proof Thanks to the uniqueness result of Theorem 5.9, it is sufficient to prove that
(ft m) satisfies the Energy Dissipation Equality for Entm in (P(X), W2 ). We as-
sume first that 0 < c ≤ f0 ≤ C < ∞ m-a.e. in X, so that the maximum principle
(Proposition 4.11) ensures 0 < c ≤ ft ≤ C < ∞ for any t > 0. By Proposition 4.11
Heat Flow and Calculus on Metric Measure Spaces                                                       101

we know that t → Entm (ft m) is absolutely continuous with derivative equal to
   |Df |2
− X ftt w dm. Lemma 4.3 ensures that t → ft m is absolutely continuous w.r.t.
                                          |Df |2
W2 with squared metric speed bounded by X ftt w dm, so that taking into account
Lemma 6.6 we get
                                             t                           t
                                        1                            1          −     
     Entm (f0 m) ≥ Entm (ft m) +                    |fs˙m|2 ds +               D Entm 2 (fs m)ds,
                                        2       0                    2    0

which, together with (9), ensures the thesis.
  For the general case we argue by approximation, considering

                           f0n := cn min n, max{f0 , 1/n} ,

cn being the normalizing constant, and the corresponding gradient flow (ftn ) of Ch.
The fact that f0n → f0 in L2 (X, m) and the convexity of Ch implies that ftn → ft
in L2 (X, m) for any t > 0. In particular, W2 (ftn m, ft m) → 0 as n → ∞ for every t
(because convergence w.r.t. W2 is equivalent to weak convergence of measures).
   Now notice that we know that
                                   t                           t
                 1                                              −       
Entm f0n m = Entm ftn +              f n˙ m2 ds + 1                D Entm 2 f n ds,         ∀t > 0.
                                       s                                                s
                        2          0                2            0

Furthermore, it is immediate to check that Entm (f0n m) → Entm (f0 m) as n → ∞.
The pointwise convergence of ftn m to ft m w.r.t. W2 easily yields that the terms
on the right hand side of the last equation are lower semicontinuous when n → ∞
(recall Theorem 5.8 for the slope). Thus it holds
                                   t                           t
                              1                            1          −     
 Entm (f0 m) ≥ Entm (ft ) +             |fs˙m|2 ds +                 D Entm 2 (fs )ds,       ∀t > 0,
                              2    0                       2    0

which, by (11), is the thesis.
   We know, by Theorem 5.9, that there is at most a gradient flow starting from μ0 .
We also know that a gradient flow ft of Ch starting from f0 exists, and part (i) gives
that μt := ft m is a gradient flow of Entm . The uniqueness of gradient flows gives
μt = μt for all t ≥ 0.                                                              

   As a consequence of the previous Theorem 6.10 it would not be difficult to prove
that the inequality (45) is in fact an identity: if (X, d, m) is a compact and normalized
CD(K, ∞) space, then |D − Entm |(f m) < ∞ if and only if the probability density
                                      √
f is Sobolev along a.e. curve and f ∈ D(Ch); in this case
                                                             
                −                           |Df |2w
               D Entm 2 (f m) =                     dm = 4 |D f |2w dm.                             (48)
                                            X   f            X
102                                                                    L. Ambrosio et al.

7 A Metric Brenier Theorem

In this section we state and prove the metric Brenier theorem in CD(K, ∞) spaces
we announced in the introduction. It was recently proven in [14] that under an addi-
tional non-branching assumption one can really recover an optimal transport map,
see also [7] for related results, obtained under stronger non-branching assumptions
and weaker convexity assumptions.

Definition 7.11 (Strict CD(K, ∞) spaces) We say that a compact normalized met-
ric measure space (X, d, m) is a strict CD(K, ∞) space if for any μ0 , μ1 ∈ D(Entm )
there exists π ∈ GeoOpt(μ0 , μ1 ) with the following
                                                       property. For any bounded
Borel function F : Geo(X) → [0, ∞) such that F dπ = 1, it holds

                                        K                       
      Entm μFt ≤ (1 − t) Entm μF0 + t Entm μF1 − t (1 − t)W22 μF0 , μF1 ,
                                                2

where μFt := (et ) (F π ), for any t ∈ [0, 1].

   Thus, the difference between strict CD(K, ∞) spaces and standard CD(K, ∞)
ones is the fact that geodesic convexity is required along all geodesics induced by
the weighted plans F π , rather than the one induced by π only. Notice that the nec-
essary and sufficient optimality conditions ensure that (e0 , e1 ) π is concentrated on
a c-monotone set, hence (e0 , e1 ) (F π ) has the same property and it is optimal, rel-
ative to its marginals. (We remark that recent results of Rajala [28] suggest that it is
not necessary to assume this stronger convexity to get the metric Brenier theorem—
and hence not even a treatable notion of spaces with Riemannian Ricci curvature
bounded from below—see [2] for progresses in this direction.)
   It is not clear to us whether the notion of being strict CD(K, ∞) is stable or not
w.r.t. measured Gromov-Hausdorff convergence and, as such, it should be handled
with care. The importance of strict CD(K, ∞) bounds relies on the fact that on
these spaces geodesic interpolation between bounded probability densities is made
of bounded densities as well, thus granting the existence of many test plans.
   Notice that non-branching CD(K, ∞) spaces are always strict CD(K, ∞)
spaces, indeed let μ0 , μ1 ∈ D(Entm ) and pick π ∈ GeoOpt(μ0 , μ1 ) such that Entm
is K-convex along ((et ) π). From the non-branching hypothesis it follows that for
F as in Definition 7.11 there exists a unique element in GeoOpt(μFt , μF1 ) (resp.
in GeoOpt(μFt , μF0 )). Also, since F is bounded, from μt ∈ D(Entm ) we deduce
μFt ∈ D(Entm ). Hence the map t → Entm (μFt ) is K-convex and bounded on [ε, 1]
and on [0, 1 − ε] for all ε ∈ (0, 1), and therefore it is K-convex on [0, 1].

Proposition 7.17 (Bound on geodesic interpolant) Let (X, d, m) be a strict
CD(K, ∞) space and let μ0 , μ1 ∈ P(X) be with bounded densities. Then there
exists a test plan π ∈ GeoOpt(μ0 , μ1 ) so that the induced geodesic μt = (et ) π
connecting μ0 to μ1 is made of measures with uniformly bounded densities.
Heat Flow and Calculus on Metric Measure Spaces                                        103

Proof Let M be an upper bound on the densities of μ0 , μ1 , π ∈ GeoOpt(μ0 , μ1 )
be a plan which satisfies the assumptions of Definition 7.11 and μt := (et ) π . We
claim that the measures μt have uniformly bounded densities. The fact that μt  m
is obvious by geodesic convexity, so let ft be the density of μt and assume by
contradiction that for some t0 ∈ [0, 1] it holds
                                             − 2
                             ft0 (x) > MeK D /8 ,         ∀x ∈ A,                     (49)

where m(A) > 0 and D is the diameter of X. Define π̃ := cπ|e−1 (A) , where c is the
                                                                        t0

normalizing constant (notice that π̃ is well defined, because π(e−1t0 (A)) = μt0 (A) >
0) and observe that the density of π̃ w.r.t. π is bounded. Let μ̃t := (et ) π̃ and f˜t its
density w.r.t. m. From (49) we get f˜t0 = cft0 on A and f˜t0 = 0 on X \ A, hence
                             
                                                                         K− 2
            Entm (μ̃t0 ) =       log(f˜t0 ◦ et0 )dπ > log c + log M +       D .       (50)
                                                                          8

On the other hand, we have f˜0 ≤ cf0 ≤ cM and f˜1 ≤ cf1 ≤ cM and thus
                         
            Entm (μ̃i ) = log(f˜i ◦ ei )dπ̃ ≤ log c + log M, i = 0, 1.                (51)

Finally, it certainly holds W22 (μ̃0 , μ̃1 ) ≤ D2 , so that (50) and (51) contradict the
K-convexity of Entm along (μ̃t ). Hence (49) is false and the ft ’s are uniformly
bounded.                                                                              

   An important consequence of this uniform bound is the following metric version
of Brenier’s theorem.

Theorem 7.11 (A metric Brenier theorem) Let (X, d, m) be a strict CD(K, ∞)
space, let f0 , f1 be probability densities and ϕ any Kantorovich potential for the
couple (f0 m, f1 m). Then for every π ∈ GeoOpt(f0 m, f1 m) it holds
                                                   
                 d(γ0 , γ1 ) = |Dϕ|w (γ0 ) = D + ϕ (γ0 ), for π -a.e. γ .    (52)

In particular,
                                                
                          W22 (f0 m, f1 m) =           |Dϕ|2∗ f0 dm.
                                                   X
If moreover f0 , f1 ∈ L∞ (X, m) and π is a test plan (such a plan exists thanks to
Proposition 7.17) then
                     ϕ(γ0 ) − ϕ(γt )  +                             
                 lim                = D ϕ (γ0 )           in L2 Geo(X), π .           (53)
                 t↓0   d(γ0 , γt )

Proof ϕ is Lipschitz, therefore |D + ϕ| is an upper gradient of ϕ, and hence |Dϕ|w ≤
|D + ϕ| m-a.e. Now fix x ∈ X and pick any y ∈ ∂ c ϕ(x). From the c-concavity of ϕ
104                                                                                               L. Ambrosio et al.

we get

                                              d2 (x, y)
                                 ϕ(x) =                       − ϕ c (y),
                                                    2
                                              d2 (z, y)
                                 ϕ(z) ≤                      − ϕ c (y)        ∀z ∈ X.
                                                    2

Therefore

                                    d2 (z, y)           d2 (x, y)                    d(z, y) + d(x, y)
                ϕ(z) − ϕ(x) ≤                     −                      ≤ d(z, x)                       .
                                          2                  2                                2

Dividing by d(x, z) and letting z → x, by the arbitrariness of y ∈ ∂ c ϕ(x) and the
fact that supp((e0 , e1 ) π) ⊂ ∂ c ϕ we get
                    + 
                   D ϕ (γ0 ) ≤          min       d(γ0 , y) ≤ d(γ0 , γ1 )            for π-a.e. γ .
                                     y∈∂ c ϕ(γ0 )


Since
                                                        
                                                               + 2
                                |Dϕ|2w f0 dm ≤                D ϕ  (γ0 )dπ            and
                            X
                           
                                d2 (γ0 , γ1 )dπ (γ ) = W22 (f0 m, f1 m),


to conclude it is sufficient to prove that
                                                                 
                                  W22 (f0 m, f1 m) ≤                     |Dϕ|2w f0 dm.                         (54)
                                                                     X


Now assume that f0 and f1 are bounded from above and let π̃ ∈ GeoOpt(f0 m, f1 m)
be a test plan (such π̃ exists thanks to Proposition 7.17). Since ϕ is a Kantorovich
potential and (e0 , e1 ) π̃ is optimal, it holds γ1 ∈ ∂ c ϕ(γ0 ) for any γ ∈ supp(π̃ ).
Hence arguing as before we get

                                     d2 (γ0 , γ1 )           d2 (γt , γ1 )                            
                ϕ(γ0 ) − ϕ(γt ) ≥                       −                    = d2 (γ0 , γ1 ) t − t 2 /2 .      (55)
                                              2                      2

Dividing by d(γ0 , γt ) = t d(γ0 , γ1 ), squaring and integrating w.r.t. π̃ we obtain

                                     2                 
                  ϕ(γ0 ) − ϕ(γt )
   lim                                    dπ̃(γ ) ≥          d2 (γ0 , γ1 )dπ̃(γ ) = W22 (f0 m, f1 m).          (56)
      t↓0           d(γ0 , γt )
Heat Flow and Calculus on Metric Measure Spaces                                                             105

Using Remark 4.4 and the fact that π̃ is a test plan we have
                                          2                   t                 2
                ϕ(γ0 ) − ϕ(γt )                            1
                                               dπ̃(γ ) ≤           |Dϕ| w (γ s )ds   dπ̃(γ )
                  d(γ0 , γt )                              t2 0
                                                           t
                                                        1
                                                      ≤        |Dϕ|2w (γs )dsdπ̃(γ )
                                                        t    0
                                                           t
                                                        1
                                                      =        |Dϕ|2w dsd(et ) π̃
                                                        t    0
                                                           t
                                                        1
                                                      =        |Dϕ|2w fs dsdm,                          (57)
                                                        t    0

where fs is the density of (es ) π̃ . Since (et ) π̃ weakly converges to (e0 ) π̃ as t ↓ 0
and Entm ((et ) π̃ ) is uniformly bounded (by the K-geodesic convexity), we con-
clude that ft → f0 weakly in L1 (X, m) and since |Dϕ|w ∈ L∞ (X, m) we have
                                     t                         
                                1
                        lim                |Dϕ|2w fs dsdm =               |Dϕ|2w f0 dm.                 (58)
                            t↓0 t     0                           X

Equations (56), (57) and (58) yield (54).
    In order to prove (54) in the general case of possibly unbounded densities,
let us fix a Kantorovich potential ϕ, π ∈ GeoOpt(f0 m, f1 m) and for n ∈ N de-
fine π n := cn π|{γ :f0 (γ0 )+f1 (γ1 )≤n} , cn → 1 being the normalization constant. Then
π n ∈ GeoOpt(f0n m, f1n m), where fin := (ei ) π n , ϕ is a Kantorovich potential for
(f0n m, f1n m) and f0n , f1n ∈ L∞ (X, m). Thus from what we just proved we know that
it holds
                                                     
                d(γ0 , γ1 ) = |Dϕ|w (γ0 ) = D + ϕ (γ0 ), for π n -a.e. γ .

Letting n → ∞ we conclude.
   Concerning (53), we can choose π̃ = π and obtain by (55) and (52)

    ϕ(γ0 ) − ϕ(γt )                                ϕ(γ0 ) − ϕ(γt )  + 
                    ≥ 0,               lim inf                    ≥ D ϕ (γ0 )             for π -a.e. γ .
      d(γ0 , γt )                          t↓0       d(γ0 , γt )

On the other hand (57) and (58) yield
                                                                     
                               ϕ(γ0 ) − ϕ(γt )        2                     + 2
              lim sup                                      dπ(γ ) ≤        D ϕ  (γ0 )dπ (γ ),
                t↓0              d(γ0 , γt )

so that, by expanding the square and applying Fatou’s Lemma, we obtain
                              
                                     ϕ(γ0 ) − ϕ(γt )  +     2
                 lim sup                            − D ϕ (γ0 ) dπ(γ ) ≤ 0.
                      t↓0              d(γ0 , γt )                                                           
106                                                                          L. Ambrosio et al.

8 More on Calculus on Compact CD(K, ∞) Spaces

8.1 On Horizontal and Vertical Derivatives Again

Aim of this subsection is to prove another deep relation between “horizontal” and
“vertical” derivation, which will allow to compare the derivative of the squared
Wasserstein distance along the heat flow with the derivative of the relative entropy
along a geodesic (see the next subsection). This will be key in order to understand
the properties of spaces with Riemannian Ricci curvature bounded from below, il-
lustrated in the last section.
   In order to understand the geometric point, consider the following simple exam-
ple.

Example 8.1 Let  ·  be a smooth, strictly convex norm on Rd and let  · ∗ be the
dual norm. Denoting by ·, · the canonical duality from (Rd )∗ × Rd into R, let L
be the duality map from (Rd ,  · ) to ((Rd )∗ ,  · ∗ ), characterized by
                                                  
              L(u), u = L(u)∗ u and L(u)∗ = u ∀u ∈ Rd ,

and let L∗ be its inverse, equally characterized by
                                                                       ∗
           v, L∗ (v) = v∗ L∗ (v) and L∗ (v) = v∗                ∀v ∈ Rd .

Using the fact that ε → uu + εu  − Lu, u + εu  attains its minimum at ε = 0
and the analogous relation for L∗ , one obtains the useful relations
                     1                          ∗  1               
             L(u), u = du  · 2 u ,             v , L (v) = dv  · 2∗ v  .           (59)
                       2                                      2

For a smooth map f : Rd → R its differential dx f at any point x is intrinsically
defined as cotangent vector, namely as an element of (Rd )∗ . To define the gradient
∇f (x) ∈ Rd (which is a tangent vector), the norm comes into play via the for-
mula ∇f (x) := L∗ (dx f ). Now, given two smooth functions f, g, the real number
dx f (∇g(x)) is well defined as the application of the cotangent vector dx f to the
tangent vector ∇g(x).
   What we want to point out, is that there are two very different ways of obtaining
dx f (∇g(x)) from a derivation. The first one, which is usually taken as the definition
of dx f (∇g(x)), is the “horizontal derivative”:
                                            f (x + t∇g(x)) − f (x)
                dx f, ∇g = dx f ∇g(x) = lim                        .                    (60)
                                          t→0           t
The second one is the “vertical derivative”:
                                      1
                                          dx (g + εf )2∗ − 12 dx g2∗ (x)
                  Df (∇g)(x) = lim 2                                         .            (61)
                                ε→0                     ε
Heat Flow and Calculus on Metric Measure Spaces                                        107

It is not difficult to check that (61) is consistent with (60): indeed (omitting the x
dependence), recalling the second identity of (59), we have
                                       
 dg + εdf 2∗ = dg2∗ + 2ε L∗ (dg), df + o(ε) = ∇g2 + 2ε∇g, df  + o(ε).

   The point is that the equality between the right hand sides of formulas (61) and
(60) extends to a genuine metric setting. In the following lemma (where the plan π
plays the role of −∇g) we prove one inequality, but we remark that “playing with
signs” it is possible to obtain an analogous inequality with ≤ in place of ≥.

Lemma 8.7 (Horizontal and vertical derivatives) Let f be a Sobolev function along
a.e. curve with |Df |w ∈ L2 (X, m), let g : X → R be Lipschitz and let π be a test
plan concentrated on Geo(X). Assume that

                    g(γ0 ) − g(γt )                                     
                lim                 = |Dg|w (γ0 )         in L2 Geo(X), π .            (62)
                t↓0   d(γ0 , γt )

Then
                   
                   f (γt ) − f (γ0 )
             lim                     dπ(γ )
             t↓0           t
                    
                  1    |Dg|2w (γ0 ) − |D(g + εf )|2w (γ0 )
                ≥                                          dπ(γ )            ∀ε > 0.   (63)
                  2                     ε

Proof Define the functions Ft , Gt : Geo(X) → R ∪ {±∞} by

                                            f (γ0 ) − f (γt )
                               Ft (γ ) :=                     ,
                                               d(γ0 , γt )
                                            g(γ0 ) − g(γt )
                               Gt (γ ) :=                   .
                                              d(γ0 , γt )

By (62) it holds
                                                          
                             |Dg|2w ◦ e0 dπ(γ ) = lim          G2t dπ.                 (64)
                                                     t↓0

Since the measures (et ) π → (e0 ) π weakly in duality with C(X) as t ↓ 0 and their
densities with respect to m are uniformly bounded, we obtain that the densities are
weakly∗ convergent in L∞ (X, m). Therefore, using the fact that |D(g + εf )|2w ∈
L1 (X, m) and taking into account Remark 4.4 we obtain
                                   
                                               
       D(g + εf )2 ◦ e0 dπ(γ ) = D(g + εf )2 d(e0 ) π
                     w                             w
                                               t
                                         1                         
                                   = lim                 D(g + εf )2 d(es ) π ds
                                     t↓0 t                               w
                                               0     X
108                                                                                      L. Ambrosio et al.
                                                   t
                                                1                    
                                          = lim         D(g + εf )2 (γs )dsdπ(γ )
                                            t↓0 t                       w
                                                     0
                                                                                  
                                                   (g + εf )(γ0 ) − (g + εf )(γt ) 2
                                          ≥ lim                                    dπ(γ )
                                                                                    
                                            t↓0               t d(γ0 , γ1 )
                                                
                                          ≥ lim G2t + 2εGt Ft dπ.
                                                t↓0


Subtracting this inequality from (64) and dividing by 2ε we get
                                                                           
      1       |Dg|2w (γ0 ) − |D(g + εf )|2w (γ0 )
                                                  dπ(γ ) ≤ lim −                Gt (γ )Ft (γ )dπ(γ ).
      2                       ε                            t↓0


We know that Gt → |Dg|w ◦ e0 in L2 (Geo(X), π) and that |Dg|w (γ0 ) = d(γ0 , γ1 )
for π -a.e. γ . Also, by Remark 4.4 and the fact that π is a test plan we easily get
supt∈[0,1] Ft L2 (π) < ∞. Thus it holds
                                                                 
               lim −       Gt (γ )Ft (γ )dπ(γ ) = lim −               d(γ0 , γ1 )Ft (γ )dπ(γ )
                t↓0                                     t↓0
                                                              
                                                                  f (γt ) − f (γ0 )
                                                      = lim                         dπ(γ ),
                                                        t↓0               t

which is the thesis.                                                                                    



8.2 Two Important Formulas

Proposition 8.18 (Derivative of 12 W22 along the heat flow) Let (ft ) ⊂ L2 (X, m) be
a heat flow made of probability densities. Then for every σ ∈ P(X), for a.e. t ∈
(0, ∞) it holds:
                           
 d 1 2
     W (ft m, σ ) =                ϕt ft dm,     for any Kantorovich potential ϕ from ft to σ.
 dt 2 2                        X
                                                                                                      (65)

Proof Since t → ft m is an absolutely continuous curve w.r.t. W2 (recall Theo-
rem 6.10), the derivative at the left hand side of (65) exists for a.e. t ∈ (0, ∞). Also,
for a.e. t ∈ (0, ∞) it holds limh→0 h1 (ft+h − ft ) = ft , the limit being understood
in L2 (X, m).
   Fix t0 such that the derivative of the Wasserstein distance exists and the above
limit holds and choose any Kantorovich potential ϕt0 for (ft0 m, σ ). We have
Heat Flow and Calculus on Metric Measure Spaces                                                        109



                                                                  
                       W22 (ft0 m, σ )
                                       =            ϕt0 ft0 dm +       ϕtc0 dσ
                             2                  X
                                                                      
                    W22 (ft0 +h m, σ )
                                       ≥            ϕt0 ft0 +h dm +        ϕtc0 dσ.
                             2                  X

Therefore, since ϕt0 ∈ L∞ (X, m) we get
                                                                                
 W22 (ft0 +h m, σ ) W22 (ft0 m, σ )
                   −                ≥           ϕt0 (ft0 +h − ft0 )dm = h                 ϕt0 ft0 + o(h).
          2               2                X                                          X

Dividing by h < 0 and h > 0 and letting h → 0 we get the thesis.                                        

Proposition 8.19 (Derivative of the Entropy along a geodesic) Let (X, d, m) be a
strict CD(K, ∞) space. Let μ0 , μ1 ∈ P(X), π ∈ GeoOpt(μ0 , μ1 ) and ϕ a Kan-
torovich potential for (μ0 , μ1 ). Assume that π is a test plan and that μ0 ≥ cm from
some c > 0 and denote by ht the density of μt := (et ) π . Then

                  Entm (μt ) − Entm (μ0 )       Ch(ϕ) − Ch(ϕ + εh0 )
              lim                         ≥ lim                      .                                (66)
              t↓0            t              ε↓0          ε

Proof The convexity of Ch ensures that the limit at the right hand side exists. From
the fact that ϕ is Lipschitz, it is not hard to see that h0 ∈
                                                            / D(Ch) implies Ch(ϕ +
εh0 ) = +∞ for any ε > 0 and in this case there is nothing to prove. Thus, we
assume that h0 ∈ D(Ch).
   The convexity of z → z log z gives
                                                   
Entm (μt ) − Entm (μ0 )               ht − h0          log(h0 ◦ et ) − log(h0 ◦ e0 )
                        ≥      log h0         dm =                                   dπ.
            t                X           t                           t
                                                                                    (67)
Using the trivial inequality given by Taylor’s formula

                                                b − a |b − a|2
                          log b − log a ≥            −         ,
                                                  a      2c2
valid for any a, b ∈ [c, ∞), we obtain
                                          
        log(h0 ◦ et ) − log(h0 ◦ e0 )        h0 ◦ et − h0 ◦ e0
                                      dπ ≥                     dπ
                      t                           th0 ◦ e0
                                                   
                                              1
                                           −         |h0 ◦ et − h0 ◦ e0 |2 dπ.                        (68)
                                             2tc2

Taking into account Remark 4.4 and the fact that |γ̇t | = d(γ0 , γ1 ) ≤ diam(X) for a.e.
t ∈ (0, 1) and π -a.e. γ , the last term in this expression can be bounded from above
110                                                                           L. Ambrosio et al.

by
             t                           2                        t
   1                                                    diam(X)2
                   diam(X)|Dh0 |w ◦ es         dsdπ ≤                     |Dh0 |2w ◦ es dsdπ,
  2tc2        0                                            2c2       0
                                                                                           (69)

which goes to 0 as t → 0.
   Now let S : Geo(X) → R be the Borel function defined by S(γ ) := h0 ◦ γ0 and
define π̃ := S1 π . It is easy to check that (e0 ) π̃ = m, so that in particular π̃ is a
probability measure. Also, the bound h0 ≥ c > 0 ensures that π̃ is a test plan. By
definition we have
                                             
                       h0 ◦ et − h0 ◦ e0         h0 ◦ et − h0 ◦ e0
                                         dπ =                      dπ̃.
                           th0 ◦ e0                       t
The latter equality and inequalities (67), (68) and (69) ensure that to conclude it is
sufficient to show that
                   
                     h0 ◦ et − h0 ◦ e0           Ch(ϕ) − Ch(ϕ + εh0 )
               lim                     dπ̃ ≥ lim                       .        (70)
               t↓0           t               ε↓0           ε

Here we apply the key Lemma 8.7. Observe that Theorem 7.11 ensures that
                                           ϕ(γ0 ) − ϕ(γt )
                       |Dϕ|w (γ0 ) = lim                   = d(γ0 , γ1 )
                                    t↓0           t

where the convergence is understood in L2 (π). Thus the same holds for L2 (π̃ ) and
the hypotheses of Lemma 8.7 are satisfied with π̃ as test plan, g := ϕ and f := h0 .
Equation (63) then gives
                                      
         h0 ◦ et − h0 ◦ e0           1   |Dϕ|2w (γ0 ) − |D(ϕ + εh0 )|2w (γ0 )
  lim                      dπ̃ ≥ lim                                          dπ̃(γ )
   t↓0           t               ε↓0 2                    ε
                                       
                                     1    |Dϕ|2w (x) − |D(ϕ + εh0 )|2w (x)
                               = lim                                       dm(x),
                                 ε↓0 2 X                  ε
which concludes the proof.                                                                   



9 Riemannian Ricci Bounds
We say that (X, d, m) has Riemannian Ricci curvature bounded below by K ∈ R (in
short, it is a RCD(K, ∞) space) if any of the 3 equivalent conditions stated in the
following theorem is true.

Theorem 9.12 Let (X, d, m) be a compact and normalized metric measure space
and K ∈ R. The following three properties are equivalent.
Heat Flow and Calculus on Metric Measure Spaces                                        111

 (i) (X, d, m) is a strict CD(K, ∞) space (Definition 7.11) and the L2 -gradient
     flow of Ch is linear.
(ii) (X, d, m) is a strict CD(K, ∞) space (Definition 7.11) and Cheeger’s energy
     is quadratic, i.e.
                          
        2 Ch(f ) + Ch(g) = Ch(f + g) + Ch(f − g), ∀f, g ∈ L2 (X, m). (71)

(iii) supp(m) is geodesic and for any μ ∈ D(Entm ) ⊂ P(X) there exists an EVIK -
      gradient flow for Entm starting from μ.

Proof (i) ⇒ (ii). Since the heat semigroup Pt in L2 (X, m) is linear we obtain that
 is a linear operator (i.e. its domain D() is a subspace of L2 (X, m) and  :
D() → L2 (X, m) is linear). Since t → Ch(Pt (f )) is locally Lipschitz, tends to 0
as t → ∞ and ∂t Ch(Pt (f )) = −Pt (f )2L2 for a.e. t > 0 (see (22)), we have
                                      ∞
                                                   
                          Ch(f ) =         Pt (f )2 2         dt.
                                                       L (X,m)
                                     0

Therefore Ch, being an integral of quadratic forms, is a quadratic form. Specifically,
for any f, g ∈ L2 (X, m) it holds

     Ch(f + g) + Ch(f − g)
             ∞
                                                      2
        =         Pt (f + g)2 2         + Pt (f − g)L2 (X,m) dt
                                 L (X,m)
            0
             ∞
                                                                     2
        =         Pt (f ) + Pt (g)2 2          + Pt (f ) − Pt (g)L2 (X,m) dt
                                         L (X,m)
            0
             ∞
                           2                  2
        =         2Pt (f )L2 (X,m) + 2Pt (g)L2 (X,m) dt
            0

        = 2Ch(f ) + 2Ch(g).

(ii) ⇒ (iii). By [31, Remark 4.6(iii)] (supp(m), d) is a length space and therefore it
is also geodesic, since X is compact.
    Thanks to Remark 2.1 it is sufficient to prove that a gradient flow in the EVIK
sense exists for an initial datum μ0  m with density bounded away from 0 and
infinity. Let f0 be this density, (ft ) the heat flow starting from it and recall that
from the maximum principle 4.11 we know that the ft ’s are far from 0 and infinity
as well for any t > 0. Fix a reference probability measure σ with density bounded
away from 0 and infinity as well. For any t ≥ 0 pick a test plan π t optimal for
(ft m, σ ). Define σts := (es ) πt .
    We claim that for a.e. t ∈ (0, ∞) it holds

                   d 1 2                     Entm (σts ) − Entm (σt0 )
                        W2 (ft m, σ m) ≤ lim                           .               (72)
                   dt 2                  s↓0             s
112                                                                           L. Ambrosio et al.

Let ϕt be a Kantorovich potential for ft m, σ m. By Proposition 8.18 we know that
for a.e. t ∈ (0, ∞) it holds
                                 
            d 1 2                                 Ch(ft − εϕt ) − Ch(ft )
                W2 (ft m, σ m) =    ϕft dm ≤ lim                         ,
           dt 2                   X           ε↓0           ε
while from Proposition 8.19 we have that for any t > 0 it holds

                  Entm (σts ) − Entm (σt0 )       Ch(ϕt ) − Ch(ϕt + εft )
              lim                           ≥ lim                         .
              s↓0             s               ε↓0            ε

Here we use the fact that Ch is quadratic. Indeed in this case simple algebraic ma-
nipulations show that
        Ch(ft − εϕt ) − Ch(ft )           Ch(ϕt ) − Ch(ϕt + εft )
                                      =                             + O(ε),    ∀t > 0,
                     ε                              ε
and therefore (72) is proved.
   Now notice that the K-convexity of the entropy yields

          Entm (σts ) − Entm (σt0 )                            K
      lim                           ≤ Entm (σ ) − Entm (ft m) − W22 (ft m, σ ),
      s↓0             s                                        2

and therefore we have
            d 1 2                            K
                W (ft m, σ m) + Entm (ft m) + W22 (ft m, σ ) ≤ Entm (σ ),
            dt 2 2                           2
              for a.e. t ∈ (0, ∞).

By Proposition 2.1 we conclude.
    (iii) ⇒ (i). Since (supp(m), d) is geodesic, so is (D(Entm ), W2 ), which together
with existence of EVIK -gradient flows for Entm yields, via Proposition 2.3, K-
geodesic convexity of Entm along all geodesics in D(Entm ). In particular, (X, d, m)
is a strict CD(K, ∞) space.
    We turn to the linearity. Let (μ0t ), (μ1t ) be two EVIK -gradient flows of the relative
entropy and, for λ ∈ (0, 1) fixed, define μλt := (1 − λ)μ0t + λμ1t .
    We claim that (μt ) is an EVIK -gradient flow of Entm . To prove this, fix ν ∈
P(X), t > 0 and an optimal plan γ ∈ O PT(μλt , ν). Since μit  μλt = π1 γ for i =
0, 1 we can define, as in Definition 5.10, the plans γ μi ∈ P(X 2 ) and the measures
                                                            t
ν i := γ  μit , i = 0, 1. Since supp(γμi ) ⊂ supp(γ ), we have that γμi ∈ O PT(μit , ν i ),
                                          t                               t
therefore from γ = (1 − λ)γ μ0 + λγ μ1 we deduce
                                  t           t
                                                                  
                    W22 μλt , ν = (1 − λ)W22 μ0t , ν 0 + λW22 μ1t , ν 1 .                  (73)

On the other hand, from the convexity of the squared Wasserstein distance we im-
mediately get that
                                                         
     W22 μλt+h , ν ≤ (1 − λ)W22 μ0t+h , ν 0 + λW22 μ1t+h , ν 1 , ∀h > 0.    (74)
Heat Flow and Calculus on Metric Measure Spaces                                     113

Furthermore, recalling (iii) of Proposition 5.15, we get
                                                            
           Entm μλt m − Entm (ν) ≤ (1 − λ) Entm μ0t − Entm ν 0
                                                                              (75)
                                         + λ Entm μ1t − Entm ν 1 .

The fact that (μ0t ) and (μ1t ) are EVIK -gradient flows for Entm (see in particular the
characterization (iii) given in Proposition 2.1) in conjunction with (73), (74) and
(75) yield

         W22 (μλt+h , ν) − W22 (μλt , ν)       K 2 λ            
   lim                                     +     W2 μt , ν + Entm μλt ≤ Entm (ν).   (76)
   h↓0                 2                       2

Since t > 0 and ν ∈ P(X) were arbitrary, we proved that (μλt ) is a EVIK -gradient
flow of Entm (see again (iii) of Proposition 2.1).
   Thus, recalling the identification of gradient flows, we proved that the L2 -heat
flow is additive in D(Entm ). Since the heat flow in L2 (X, m) commutes with
additive and multiplicative constants, it is easy to get from this linearity in the
class of bounded functions. By L2 contractivity, linearity extends to the whole of
L2 (X, m).                                                                        

    We conclude by discussing some basic properties of the spaces with Riemannian
Ricci curvature bounded from below.
    We start observing that Riemannian manifolds with Ricci curvature bounded be-
low by K are RCD(K, ∞) spaces, as they are non branching CD(K, ∞) spaces and
the heat flow is linear on them. Also, from the studies made in [25, 27, 33] and [16]
we also know that finite dimensional Alexandrov spaces with curvature bounded
from below are RCD(K, ∞) spaces as well. On the other side, Finsler manifolds
are ruled out, as it is known (see for instance [26]) that the heat flow is linear on a
Finsler manifold if and only if the manifold is Riemannian.
    The stability of the RCD(K, ∞) notion can be deduced by the stability of EVIK -
gradient flows w.r.t. Γ -convergence of functionals, which is an easy consequence of
the integral formulation in (ii) of Proposition 2.1.
    Hence RCD(K, ∞) spaces have the same basic properties of CD(K, ∞) spaces,
which gives to this notion the right of being called a synthetic (or weak) notion of
Ricci curvature bound.
    The point is then to understand the additional analytic/geometric properties of
these spaces, which come mainly by the addition of linearity condition. A first con-
sequence is that the heat flow contracts, up to an exponential factor, the distance W2 ,
i.e.
                           W2 (μt , νt ) ≤ e−Kt W2 (μ0 , ν0 ),   ∀t ≥ 0,
whenever (μt ), (νt ) ⊂ P2 (X) are gradient flows of the entropy.
   By a duality argument (see [6, 15, 21]), this property implies the Bakry-Emery
gradient estimate
                                             
             D ht (f )2 (x) ≤ e−2Kt ht |Df |2 (x), for m-a.e. x ∈ X,
                         w                    w
114                                                                             L. Ambrosio et al.

for all t > 0, where ht : L2 (X, m) → L2 (X, m) is the heat flow seen as gradient flow
of Ch. If (X, d, m) is doubling and supports a local Poincaré inequality, then also the
Lipschitz regularity of the heat kernel is deduced (following an argument described
in [15]).
    Also, since in RCD(K, ∞) spaces Ch is a quadratic form, if we define

         E(f, g) := Ch(f + g) − Ch(f ) − Ch(g),              ∀f, g ∈ W 1,2 (X, d, m),

we get a closed Dirichlet form on L2 (X, m) (closure follows from the L2 -lower
semicontinuity of Ch). Hence it is natural to compare the calculus on RCD(K, ∞)
spaces with the abstract one available for Dirichlet forms (see [11]). The picture
here is pretty clear and consistent. Recall that to any f ∈ D(E) one can associate
the energy measure [f ] defined by
                                                          
                        [f ](ϕ) := −E(f, f ϕ) + E f 2 /2, ϕ .

Then it is possible to show that the energy measure coincides with |Df |2∗ m. Also,
the distance d coincides with the intrinsic distance dE induced by the form, defined
by
                                         
           dE (x, y) := sup g(x) − g(y) : g ∈ D(E) ∩ C(X), [g] ≤ m .

Taking advantage of these identification and of the locality of E (which is a conse-
quence of the locality of the notion |Df |∗ ), one can also see that on RCD(K, ∞)
spaces a continuous Brownian motion with continuous sample paths associated to
ht exists and is unique.
   Finally, for RCD(K, ∞) spaces it is possible to prove tensorization and global-
ization properties which are in line with those available for CD(K, ∞) spaces.

Acknowledgements The authors acknowledge the support of the ERC ADG GeMeThNES and
the PRIN08-grant from MIUR for the project Optimal transport theory, geometric and functional
inequalities, and applications.
    The authors also thank A. Mondino for his careful reading of a preliminary version of this
manuscript.




References
 1. Ambrosio, L., Gigli, N.: User’s guide to optimal transport theory. In: Piccoli, B., Poupaud, F.
    (Eds.) The CIME Lecture Notes in Mathematics (2011, to appear)
 2. Ambrosio, L., Gigli, N., Mondino, A., Rajala, T.: Riemannian Ricci curvature lower bounds
    in metric measure spaces with σ -finite measure, 1–38. arXiv:1207.4924 (2012)
 3. Ambrosio, L., Gigli, N., Savaré, G.: Gradient Flows in Metric Spaces and in the Space of Prob-
    ability Measures. Lectures in Mathematics ETH Zürich, 2nd edn. Birkhäuser, Basel (2008)
 4. Ambrosio, L., Gigli, N., Savaré, G.: Calculus and heat flow in metric measure spaces and
    applications to spaces with Ricci bounds from below, 1–74. arXiv:1106.2090 (2011)
 5. Ambrosio, L., Gigli, N., Savaré, G.: Density of Lipschitz functions and equivalence of weak
    gradients in metric measure spaces, 1–28. arXiv:1111.3730 (2011)
Heat Flow and Calculus on Metric Measure Spaces                                               115

 6. Ambrosio, L., Gigli, N., Savaré, G.: Metric measure spaces with Riemannian Ricci curvature
    bounded from below, 1–60. arXiv:1109.0222 (2011)
 7. Ambrosio, L., Rajala, T.: Slopes of Kantorovich potentials and existence of optimal transport
    maps in metric measure spaces. Ann. Mat. Pura Appl. (2012, to appear)
 8. Brézis, H.: Opérateurs maximaux monotones et semi-groupes de contractions dans les espaces
    de Hilbert. North-Holland Mathematics Studies, vol. 5. North-Holland, Amsterdam (1973).
    Notas de Matemática, 50
 9. Cheeger, J.: Differentiability of Lipschitz functions on metric measure spaces. Geom. Funct.
    Anal. 9, 428–517 (1999)
10. Daneri, S., Savaré, G.: Eulerian calculus for the displacement convexity in the Wasserstein
    distance. SIAM J. Math. Anal. 40, 1104–1122 (2008)
11. Fukushima, M.: Dirichlet Forms and Markov Processes. North-Holland Mathematical Library,
    vol. 23. North-Holland, Amsterdam (1980)
12. Gigli, N.: On the heat flow on metric measure spaces: existence, uniqueness and stability.
    Calc. Var. Partial Differ. Equ. 39, 101–120 (2010)
13. Gigli, N.: On the differential structure of metric measure spaces and applications, 1–86.
    arXiv:1205.6622 (2012)
14. Gigli, N.: Optimal maps in non branching spaces with Ricci curvature bounded from below.
    Geom. Funct. Anal. 22(4), 990–999 (2012)
15. Gigli, N., Kuwada, K., Ohta, S.: Heat flow on Alexandrov spaces. Comm. Pure Appl. Math.
    (2012). doi:10.1002/cpa.21431
16. Gigli, N., Ohta, S.-I.: First variation formula in Wasserstein spaces over compact Alexandrov
    spaces. Can. Math. Bull. 55(4), 723–735 (2012)
17. Heinonen, J.: Nonsmooth calculus. Bull. Am. Math. Soc. (N.S.) 44, 163–232 (2007)
18. Heinonen, J., Koskela, P.: Quasiconformal maps in metric spaces with controlled geometry.
    Acta Math. 181, 1–61 (1998)
19. Heinonen, J., Koskela, P.: A note on Lipschitz functions, upper gradients, and the Poincaré
    inequality. N.Z. J. Math. 28, 37–42 (1999)
20. Koskela, P., MacManus, P.: Quasiconformal mappings and Sobolev spaces. Stud. Math. 131,
    1–17 (1998)
21. Kuwada, K.: Duality on gradient estimates and Wasserstein controls. J. Funct. Anal. 258,
    3758–3774 (2010)
22. Lisini, S.: Characterization of absolutely continuous curves in Wasserstein spaces. Calc. Var.
    Partial Differ. Equ. 28, 85–120 (2007)
23. Lott, J., Villani, C.: Ricci curvature for metric-measure spaces via optimal transport. Ann.
    Math. (2) 169, 903–991 (2009)
24. Ohta, S.-I.: Finsler interpolation inequalities. Calc. Var. Partial Differ. Equ. 36, 211–249
    (2009)
25. Ohta, S.-I.: Gradient flows on Wasserstein spaces over compact Alexandrov spaces. Am. J.
    Math. 131, 475–516 (2009)
26. Ohta, S.-I., Sturm, K.-T.: Heat flow on Finsler manifolds. Commun. Pure Appl. Math. 62,
    1386–1433 (2009)
27. Petrunin, A.: Alexandrov meets Lott–Villani–Sturm. arXiv:1003.5948v1 (2010)
28. Rajala, T.: Improved geodesics for the reduced curvature-dimension condition in branching
    metric spaces. Discrete Contin. Dyn. Syst. (2011, to appear)
29. Savaré, G.: Gradient flows and evolution variational inequalities in metric spaces (2010, in
    preparation)
30. Shanmugalingam, N.: Newtonian spaces: an extension of Sobolev spaces to metric measure
    spaces. Rev. Mat. Iberoam. 16, 243–279 (2000)
31. Sturm, K.-T.: On the geometry of metric measure spaces. I. Acta Math. 196, 65–131 (2006)
32. Villani, C.: Optimal Transport. Old and New. Grundlehren der Mathematischen Wis-
    senschaften, vol. 338. Springer, Berlin (2009)
33. Zhang, H.-C., Zhu, X.-P.: Ricci curvature on Alexandrov spaces and rigidity theorems. Com-
    mun. Anal. Geom. 18, 503–553 (2010)
Spaces of Finite Element Differential Forms

Douglas N. Arnold




Abstract We discuss the construction of finite element spaces of differential forms
which satisfy the crucial assumptions of the finite element exterior calculus, namely
that they can be assembled into subcomplexes of the de Rham complex which admit
commuting projections. We present two families of spaces in the case of simplicial
meshes, and two other families in the case of cubical meshes. We make use of the
exterior calculus and the Koszul complex to define and understand the spaces. These
tools allow us to treat a wide variety of situations, which are often treated separately,
in a unified fashion.


1 Introduction
The gradient, curl, and divergence are the most fundamental operators of vector cal-
culus, appearing throughout the differential equations of mathematical physics and
other applications. The finite element solution of such equations requires finite el-
ement subspaces of the natural Hilbert space domains of these operators, namely
H 1 , H (curl), and H (div). The construction of subspaces with desirable properties
has been an active research topic for half a century. Exterior calculus provides a
framework in which these fundamental operators and spaces are unified and gen-
eralized, and their properties and inter-relations clarified. Each of the operators is
viewed as a particular case of the exterior derivative operator d = d k taking differ-
ential k-forms on some domain Ω ⊂ Rn to differential (k + 1)-forms. We regard d k
as an unbounded operator between the Hilbert spaces L2 Λk and L2 Λk+1 consisting
of differential forms with L2 coefficients. The domain of d k is the Hilbert space
                                                            
                        H Λk = u ∈ L2 Λk | du ∈ L2 Λk+1 ,                        (1.1)


In memory of Enrico Magenes, in gratitude for his deep and elegant mathematics, which taught
us, and his profound humanity, which inspired us.
The work of the author was supported by NSF grant DMS-1115291.
D.N. Arnold (B)
School of Mathematics, University of Minnesota, Minneapolis, MN 55455, USA
e-mail: arnold@umn.edu
url: http://www.ima.umn.edu/~arnold

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,         117
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_9,
© Springer-Verlag Italia 2013
118                                                                                        D.N. Arnold

and all the d k and their domains combine to form the L2 de Rham complex
                                        d0       d1      d n−1
                      0 → H Λ0 −→ H Λ1 −→ · · · −−→ H Λn → 0.

Differential 0-forms and n-forms may be identified simply with functions on Ω and
differential 1-forms and (n − 1)-forms may be identified with vector fields. In three
dimensions, we may use these proxies to write the de Rham complex as
                                 grad             curl               div
                     0 → H 1 −−→ H (curl) −−→ H (div) −→ L2 → 0.

   The finite element exterior calculus (FEEC) is a theory developed in the last
decade [1, 5, 6] which enables the development and analysis of finite element spaces
of differential forms. One major part of FEEC is carried out in the framework of
Hilbert complexes, of which the L2 de Rham complex is the most canonical exam-
ple. One important outcome of FEEC is the realization that the finite dimensional
subspaces Λkh ⊂ H Λk used in Galerkin discretizations of a variety of differential
equations involving differential k-forms should satisfy two basic assumptions, be-
yond the obvious requirement that the spaces have good approximation properties.
The first assumption is that the subspaces form a subcomplex of the de Rham com-
plex, i.e., that dΛkh ⊂ Λk+1
                         h . The second is that there exist projection operators πh
                                                                                   k
            k     k
from H Λ to Λh which commute with d in the sense that the following diagram
commutes:

                       d                     d           d                 d
           H Λ0             H Λ1                 ···           H Λn−1           H Λn

         πh0               πh1                               πhn−1             πhn

                       d                     d           d                 d
               Λ0h               Λ1h             ···             Λn−1
                                                                  h                  Λnh

   The second major part of FEEC, into which the present exposition falls, is con-
cerned with the construction of specific finite element spaces Λkh of differential
forms. A special role is played by two families of finite element spaces Pr− Λk (Th )
and Pr Λk (Th ), defined for any dimension n, any simplicial mesh Th , any polyno-
mial degree r ≥ 1, and any form degree 0 ≤ k ≤ n. Both these spaces are subspaces
of H Λk (Ω). The Pr− Λk spaces with increasing k and constant r form a subcomplex
of L2 de Rham complex which admits commuting projections. The same is true of
the Pr Λk family, except in that case the polynomial degree r decreases as the form
degree k increases.
   We also discuss cubical meshes. In this case, there is a well-known family of
elements, denoted by Q−     k
                         r Λ in our notation, obtained by a tensor product construc-
tion. As for the Pr Λ family, the Q−
                   −   k                   k
                                       r Λ spaces with constant degree r combine
to form a de Rham subcomplex with commuting projections. We also discuss a re-
cently discovered second family on cubical meshes, the Sr Λk family of [3]. Like
the Pr Λk family, the de Rham subcomplexes for this family are obtained with de-
creasing degree. Moreover for large r, the dim Sr Λk (Th ) is much smaller dimension
Spaces of Finite Element Differential Forms                                          119

than dim Q−     k                                   1
            r Λ . The finite element subspaces of H , H (curl), and H (div) from this
family in three dimensions are new.
   The remainder of the paper is organized as follows. In the next section we cover
some preliminary material (which the more expert reader may wish to skip). We
recall the construction of finite element spaces from spaces of shape functions and
unisolvent degrees of freedom. To illustrate we discuss the Lagrange elements and
carry out the proof of unisolvence in a manner that will guide our treatment of
differential form spaces of higher degree. We also give a brief summary of those
aspects of exterior calculus most relevant to us. In Sect. 3 we discuss the two pri-
mary families of finite element spaces for differential forms on simplicial meshes
mentioned above. A key role is played by the Koszul complex, which is introduced
in this section. Then, in Theorem 3.5, we give a proof of unisolvence for the Pr−
family which we believe to be simpler than has appeared heretofore (a similar proof
could be given for the Pr family as well). In the final section we review the two
families mentioned for cubical meshes, including a description, without proofs, of
the recently discovered Sr family.



2 Preliminaries

2.1 The Assembly of Finite Element Spaces

Recalling the definition of a finite element space [11], we assume that the domain
Ω ⊂ Rn is triangulated by finite elements, i.e., its closure is the union of a finite set
Th of closed convex polyhedral elements with nonempty interiors such that the in-
tersection of any two elements is either empty or is a common face of each of some
dimension. We denote by d (T ) the set of faces of T of dimensions d, so, for ex-
ample, 0 (T ) is the set of vertices of T
                                          , and n (T ) is the singleton set whose only
element is T . We also define (T ) = 0≤d≤n d (T ), the set of all faces of T . In
this paper we consider the two cases of simplicial elements, in which each element
T of the triangulation is an n-simplex, and cubical elements, in which element is an
n-box (i.e., the Cartesian product of n intervals). To define a finite element space
Λkh ⊂ H Λk (Ω), we must supply, for each element T ∈ Th ,
(1) A finite dimensional space V (T ), called the space of shape functions, consisting
    of differential k-forms on T with polynomial coefficients. The finite element
    space will consist of functions u which belong to the shape function spaces
    piecewise in the sense that u|T ∈ V (T ) for all T ∈ Th (allowing the possibility
    that u is multiply-valued on faces of dimension < n).
(2) A set of functionals V (T ) → R, called the degrees of freedom, which are uni-
    solvent (i.e., which form a basis for the dual space V (T )∗ ) and such that each
    degree of freedom is associated to a specific face of f ∈ (T ).
It is assumed that when two distinct elements T1 and T2 intersect in a common
face f , the degrees of freedom of T1 and T2 which are associated to f are in a spe-
cific 1-to-1 correspondence. If u is a function which belongs to the shape function
120                                                                            D.N. Arnold

spaces piecewise, then we say that the degrees of freedom are single-valued on u
if whenever two elements T1 = T2 meet in a common face, then the corresponding
degrees of freedom associated to the face take the same value on u|T1 and u|T2 ,
respectively. With these ingredients, the finite element space Λkh associated to the
choice of triangulation Th , the shape function spaces V (T ), and the degrees of free-
dom, is defined as the set of all k-forms on Ω which belong to the shape function
spaces piecewise and for which all the degrees of freedom are single-valued.
   The choice of the degrees of freedom associated to faces of dimension d < n de-
termine the interelement continuity imposed on the finite element subspace. The use
of degrees of freedom to specify the continuity, rather than imposing the continuity
a priori in the definition of the finite element space, is of great practical significance
in that it assures that the finite element space can be implemented efficiently. The
dimension of the space is known (it is just the sum over the faces of the triangula-
tion of the number of degrees of freedom associated to the face) and it depends only
on the topology of the triangulation, not on the coordinates of the element vertices.
Moreover, the degrees of freedom lead to a computable basis for Λkh in which each
basis element is associated to one degree of freedom. Further, the basis is local, in
that the basis element for a degree of freedom associated to a face f is nonzero only
on the elements that contain f .
   The finite element space so defined does not depend on the specific choice of
degrees of freedom in V (T )∗ , but only on the span of the degrees of freedom asso-
ciated to each face f of T , and we shall generally specify only the span, rather than
a specific choice of basis for it.



2.2 The Lagrange Finite Element Family

To illustrate these definitions and motivate the constructions for differential forms,
we consider the simplest example, the Lagrange family of finite element subspaces
of H 1 = H Λ0 . The Lagrange space, which we denote Pr Λ0 (Th ) in anticipation of
its generalization below, is defined for any simplicial triangulation Th in Rn and any
polynomial degree r ≥ 1. The shape function space is V (T ) = Pr (T ), the space of
all polynomial functions on T of degree at most r. For a face f of T of dimension
d, the span of the associated degrees of freedom are the functionals
                             
               u ∈ Pr (T ) → (trf u)q, q ∈ Pr−d−1 (f ), f ∈ (T ).                (2.1)
                               f

In interpreting this, we understand the space Ps (f ) to be the space R of constants
if f is 0-dimensional (a single vertex) and s ≥ 0. Also the space Ps (f ) = 0 if s < 0
and f is arbitrary. The notation trf u denotes the trace of u on f , i.e., its restriction.
Thus there is one degree of freedom associated to each vertex v, namely the evalua-
tion functional u → u(v). For r ≥ 2 there are also degrees of freedom associated to
Spaces of Finite Element Differential Forms                                       121

Fig. 1 Degrees of freedom
for the Lagrange quartic
space P4 Λ0 in 3 dimensions




the edges e of T , namely the moments of u on the edge of degree at most r − 2:
                               
                          u → (tre u)q, q ∈ Pr−2 (e).
                                    e

For r ≥ 3 there are degrees of freedom associated to the 2-faces, namely moments
of degree at most r − 3, etc. This is often indicated in a degree of freedom diagram,
like that of Fig. 1, in which the number of symbols drawn in the interior of a face is
equal to the number of degrees of freedom associated to the face.
    A requirement of the definition of a finite element space is that the degrees of
freedom be unisolvent. We present the proof for Lagrange elements in detail, since
it will guide us when it comes to verifying unisolvence for more complicated spaces.

Theorem 2.1 (Unisolvence for the Lagrange elements) For any r ≥ 1 and any n-
simplex T , the degrees of freedom (2.1) are unisolvent on V (T ) = Pr (T ).

Proof It suffices to verify, first, that the number of degrees of freedom proposed for
T does not exceed dim V (T ), and, second, that if all the degrees of freedom vanish
when applied to some u ∈ V (T ), then u ≡ 0. For the first claim, we have by (2.1)
that the total number of degrees of freedom is at most

 
 n
                             n
                                  n+1             r −1   n+r
       #d (T ) dim Pr−d−1 Rd =                        =     = dim Pr (T ),
                                  d +1              d     n
 d=0                                    d=0

where the second equality is a binomial identity which comes from expanding in the
equation (1 + x)n+1 (1 + x)r−1 = (1 + x)n+r and comparing the coefficients of x n
on both sides.
    We prove the second claim by induction on the dimension n, the case n = 0
being trivial. Suppose that u ∈ Pr (T ) for some simplex T of dimension n and that
all the degrees of freedom in (2.1) vanish. We wish to show that u vanishes. Let
F ∈ n−1 (T ) be a facet of T , and consider trF u, which is a polynomial function of
at most degree r on the (n − 1)-dimensional simplex F , i.e., it belongs to Pr (F ).
Moreover, if we replace T by F and u by trF u in (2.1), the resulting functionals
vanish by assumption (using the obvious fact that trf trF u = trf u for f ⊂ F ⊂ T ).
By induction we conclude that trF u vanishes on all the facets F of T . Therefore,
u is divisible by the barycentric coordinate function λi which vanishes on F , and,
122                                                                                D.N. Arnold

since this holds for all facets, u = ( ni=0 λi )p for some p ∈ Pr−n−1 (T ). Taking
f = T and q = p in (2.1) we conclude that
                                     n
                                           
                                               λi p 2 = 0,
                                    T    i=0

which implies that p vanishes on T , and so u does as well.                                

    Let us note some features of the proof, which will be common to the unisolvence
proofs for all of the finite element spaces we discuss here. After a dimension count
to verify that the proposed degrees of freedom are correct in number, or at least
no more than required, the proof proceeded by induction on the number of space
dimensions. The inductive step relied on a trace property of the shape function space
V (T ) = Pr (T ) for the family, namely that trF V (T ) ⊂ V (F ). Moreover, it used a
similar trace property for the degrees of freedom: if ξF ∈ V (F )∗ is a degree of
freedom for V (F ), then the pullback ξF ◦ trF ∈ V (T )∗ is a degree of freedom for
V (T ). The induction reduced the unisolvence proof to verifying that if u ∈ V̊ (T ),
the space of functions in V (T ) whose trace vanishes on the entire boundary, and
if the interior degrees of freedom (those associated to T itself) of u vanish, then u
itself vanishes, which we showed by explicit construction.
    Finally, we note that the continuity implied by the degrees of freedom is exactly
what is required to insure that the Lagrange finite element space is contained in H 1 :
                                                                       
             Pr Λ0 (Th ) = u ∈ H 1 (Ω) | u belongs to Pr (T ) piecewise .        (2.2)

Indeed, a piecewise smooth function belongs to H 1 (Ω) if and only if its traces on
faces are single-valued. Thus if a function in H 1 (Ω) belongs piecewise to Pr (T ), its
traces are single-valued, so the degrees of freedom are single-valued, and the func-
tion belongs to Pr Λ0 (Th ). On the other hand, if the function belongs to Pr Λ0 (Th ),
its traces on faces are single-valued, since, as we saw in the course of the unisolvence
proof, they are determined by the degrees of freedom. Thus the function belongs to
H 1 (Ω).



2.3 Exterior Calculus

For the convenience of readers less familiar with differential forms and exterior cal-
culus we now briefly review key definitions and properties. We begin with the space
of algebraic k-forms on V : Altk V = {L : V k → R | k-linear, skew-symmetric},
where the multilinear form L is skew-symmetric, or alternating, if it changes sign
under the interchange of any two of its arguments. The skew-symmetry condition
is vacuous if k < 2, so Alt1 V = V ∗ and, by convention, Alt0 V = R. If ω is any
k-linear map V k → R, then skw ω ∈ Altk V where
                                             1
               (skw ω)(v1 , . . . , vk ) =        sign(σ )ω(vσ1 , . . . , vσk ),
                                             k! σ
Spaces of Finite Element Differential Forms                                                     123

with the sum taken over all the permutations of the integers 1 to k. The wedge
product Altk V × Altl V → Altk+l V is defined
                            k+l
               ω∧μ=             skw(ω ⊗ μ),             ω ∈ Altk V , μ ∈ Altl V .
                             k
Let v1 , . . . , vn form a basis for V . Denoting by
                                                                             
                   Σ(k, n) = (σ1 , . . . , σk ) ∈ Nk | 1 ≤ σ1 < · · · < σk ≤ n ,

an element of Altk V is completely determined by the values it assigns to the k-
tuples (vσ1 , . . . , vσk ), σ ∈ Σk . Moreover, these values can be assigned arbitrar-
ily. In fact, the k-form μσ1 ∧ · · · ∧ μσk , where μ1 , . . . , μn is the dual basis to
v1 , . . . , vn , takes the k-tuple
                                     (vσ1 , . . . , vσk ) to 1, and the other such k-tuples to 0.
Thus dim Altk V = nk , where n = dim V .
     We define differential forms on an arbitrary manifold, since we will be using
them both when the manifold is a domain in Rn and when it is the boundary of such
a domain. A differential k-form on a manifold Ω is a map ω which takes each point
x ∈ Ω to an element ωx ∈ Altk Tx Ω, where Tx Ω is the tangent space to Ω at x. In
other language, ω is a skew-symmetric covariant tensor field on Ω of order k. In
particular, a differential 0-form is just a real-valued function on Ω and a differential
1-form is a covector field. In the case Ω is a domain in Rn , then each tangent space
can be identified with Rn , and a differential k-form is simply a map Ω → Altk Rn .
In this context, it is common to denote the dual basis to the canonical basis for Rn by
dx 1 , . . . , dx n , so dx k applied to a vector v = (v 1 , . . . , v n ) ∈ Rn is its kth component
v k . With this notation, an arbitrary differential k-form can be written
                                       
                             u(x) =              aσ (x) dx σ1 ∧ · · · ∧ dx σk ,
                                  σ ∈Σ(k,n)

for some coefficients aσ : Ω → R.
   Three basic operations on differential forms are the exterior derivative, the form
integral, and the pullback. The exterior derivative dω of a k-form ω is a (k + 1)-
form. In the case of a domain in Rn , it is given by the intuitive formula

                                       n
                                            ∂aσ
             d aσ dx σ1 ∧ · · · ∧ dx σk =       dx j ∧ dx σ1 ∧ · · · ∧ dx σk .
                                            ∂xj
                                              j =1

It satisfies (in general) the identity d k+1 ◦ d k = 0 and the Leibniz rule d(ω ∧ μ) =
(dω) ∧ μ + (−1)k ω ∧ (dμ) if ω is a k-form.
    The definition of the form     integral requires that the manifold Ω be oriented. In
this case we can define Ω ω ∈ R for ω an n-form with n = dim Ω. The integral
changes sign if the orientation of the manifold is reversed.
    Finally, if F : Ω → Ω  is a differentiable map, then the pullback F ∗ takes a
k-form on Ω  to one on Ω by
    ∗ 
    F ω x (v1 , . . . , vk ) = ωF (x) (dFx v1 , . . . , dFx vk ), x ∈ Ω, v1 , . . . , vk ∈ Tx Ω.
124                                                                                       D.N. Arnold

The pullback respects the operations of wedge product, exterior derivative, and form
integral:
                                                                                         
                                                      
      F (ω ∧ μ) = F ∗ ω ∧ F ∗ μ ,
       ∗
                                           F (dω) = d F ∗ ω ,
                                             ∗                                      ∗
                                                                                   F ω=         ω,
                                                                               Ω           Ω

for ω and μ differential forms on Ω  . The last relation requires that F be a diffeo-
morphism of Ω with Ω  which preserves orientation.
   An important special case of pullback is when F is the inclusion of a submanifold
Ω into a larger manifold Ω  . In this case the pullback is the trace operator taking
a k-form on Ω  to a k-form on the submanifold Ω. All these operations combine
elegantly into Stokes’ theorem, which says that, under minimal hypothesis on the
smoothness of the differential (n − 1)-form ω and the n-manifold Ω,
                                                  
                                          tr ω =           dω.
                                     ∂Ω                Ω


    If V is an inner product space, then there is a natural inner product on Altk V .
Thus for a Riemannian manifold, such as any manifold embedded in Rn , the in-
ner product ωx , μx  ∈ R is defined for any k-forms ω, μ and any x ∈ Ω. An
oriented Riemannian manifold also has a unique volume form, vol, a differential
n-form which at each point assigns the value 1 to a positively oriented orthonormal
basis for the tangent space at that point. For a subdomain of Rn the volume form
is the constant n-form with the value dx 1 ∧ · · · ∧ dx n at each point. Combining
these notions, we see that on any oriented Riemannian manifold we may define the
L2 -inner product of k-forms:
                                                 
                         ω, μL2 Λk (Ω) =               ωx , μx  vol.
                                                     Ω


 space L Λ is of course kthe space of k-forms for which ωL2 Λk :=
The          2 k

 ω, ωL2 Λk < ∞, and then H Λ is defined as in (1.1).




3 Families of Finite Element Differential Forms on Simplicial
  Meshes

Our goal now is to create finite element subspaces of the spaces H Λk which fit to-
gether to yield a subcomplex with commuting projections. In this section the spaces
will be constructed for a simplicial triangulation Th of the domain Ω ⊂ Rn . Thus,
for a simplex T , we must specify a space V (T ) of polynomial differential forms and
a set of degrees of freedom for it.
Spaces of Finite Element Differential Forms                                                           125

3.1 The Polynomial Space Pr Λk

An obvious choice for V (T ) is the space
                                                                       
                                                              σ 
                      Pr Λ (T ) =
                            k
                                                      pσ dx  pσ ∈ Pr (T ) ,
                                          σ ∈Σ(k,n)

of a differential k-forms with polynomial coefficients of degree at most r. It is easy
to compute its dimension:

                                                              n     n+r   n+r
                                                                         r +k
   dim Pr Λk (T ) = #Σ(k, n) × dim Pr (T ) =                            =       .
                                                              k      n    n−k
                                                                            r
                                                                               (3.1)
Note that dPr Λk ⊂ Pr−1 Λk+1 , i.e., the exterior derivative lowers the polynomial
degree at the same time as it raises the form degree. Therefore, for each r we have
a subcomplex of the de Rham complex:
                                 d               d        d
                        Pr Λ0 −
                              → Pr−1 Λ1 −
                                        → ··· −
                                              → Pr−n Λn → 0.                                      (3.2)

This complex is exact (we have left off the initial 0 since the first map, d = grad act-
ing on Pr Λ0 has a 1-dimensional kernel, consisting of the constant functions). That
is, if ω ∈ Ps Λk and dω = 0 then ω = dμ for some μ ∈ Ps+1 Λk−1 . We prove this in
Corollary 3.2 below, using an elementary but powerful tool called the Koszul com-
plex. The same tool will also be used to define the degrees of freedom for Pr Λk (T ),
and to define an alternative space of shape functions.



3.2 The Koszul Complex

For a domain in Ω ⊂ Rn (but not a general manifold), the identity map may be
viewed as a vector field. It assigns to an arbitrary point x ∈ Ω ⊂ Rn the point itself
viewed as a vector in Rn and so an element of the tangent space Tx Ω. Contracting
a k-form ω with this identity vector field gives a (k − 1)-form κω:

     (κω)x (v1 , . . . , vk−1 ) = ωx (x, v1 , . . . , vk−1 ),       x ∈ Ω, v1 , . . . , vk−1 ∈ Rn .

Since ωx is skew-symmetric, κκω = 0, that is, κ is a differential. It satisfies a Leib-
niz rule:

                         κ(ω ∧ μ) = (κω) ∧ μ + (−1)k ω ∧ (κμ),

for a k-form ω and a second form μ. In particular κ(f ω) = f κω if f is a function.
126                                                                          D.N. Arnold

Also κdx i = x i . These properties fully determine κ. Thus
                          
             κ dx i ∧ dx j = x i dx j − x j dx i ,
                          
      κ dx i ∧ dx j ∧ dx k = x i dx j ∧ dx k − x j dx i ∧ dx k + x k dx i ∧ dx j ,

and so forth. If we identify 1-forms with vector fields, then κ corresponds to the dot
product of the vector field with x (or, more properly, with the identity vector field).
On 2-forms in 3-D, κ is the cross product with x, and on 3-forms it is the product
of a scalar field with x to get a vector field.
    The Koszul differential κ maps the space Pr Λk of differential k-forms with co-
efficients in Pr (Ω) to Pr+1 Λk−1 , exactly the reverse of d. Thus both κd and dκ
map Pr Λk to itself. The following theorem points to an intimate relation between
κ and d, called the homotopy formula. In it we write Hr Λk for the k-forms with
homogeneous polynomial coefficients of degree r.

Theorem 3.1 (Homotopy formula)

                       (κd + dκ)ω = (k + r)ω,        ω ∈ Hr Λk .

Remarks on the proof The case k = 0 is Euler’s identity x · grad p = r p for p
a homogeneous polynomial of degree r. Using it, we can verify the theorem by
direct computation. Alternatively, one may use Cartan’s homotopy formula from
differential geometry. For details on both proofs, see Theorem 3.1 of [5].   

Corollary 3.2 The polynomial de Rham complex (3.2) and the Koszul complex
                                   κ                 κ      κ
                   0 → Pr−n Λn −
                               → Pr−n+1 Λn−1 −
                                             → ··· −
                                                   → Pr Λ 0

are both exact.

Proof For the de Rham complex, it suffices to establish exactness of the homoge-
neous polynomial de Rham complex
                             d            d      d
                     Hr Λ 0 −
                            → Hr−1 Λ1 −
                                      → ··· −
                                            → Hr−n Λn → 0,

since then we can then just sum to get the result. We must show that if ω ∈ Hs Λk
and dω = 0 then ω is in the range of d. Indeed, by the homotopy formula

                    ω = (s + k)−1 (dκ + κd)ω = (s + k)−1 dκω.

A similar proof holds for the Koszul complex.                                          

   Another important consequence is a direct sum decomposition:

Corollary 3.3 For r ≥ 1, 0 ≤ k ≤ n,

                        Hr Λk = κHr−1 Λk+1 ⊕ dHr+1 Λk−1 .                            (3.3)
Spaces of Finite Element Differential Forms                                         127

Proof By the homotopy formula, any element of Hr Λk belongs to κHr−1 Λk+1 +
dHr+1 Λk−1 . Moreover the intersection of these two spaces is zero, since if ω be-
longs to the intersection, then dω = 0, κω = 0, so ω = 0 by the homotopy for-
mula.                                                                           



3.3 The Polynomial Space Pr− Λk

We now define a second space of polynomial differential forms which can be used
as shape functions. We have

        Pr Λk = Pr−1 Λk ⊕ Hr Λk = Pr−1 Λk ⊕ κHr−1 Λk+1 ⊕ dHr+1 Λk−1 .

If we drop the last summand, we get a space intermediate between Pr−1 Λk and
Pr Λk :
                           Pr− Λk := Pr−1 Λk + κHr−1 Λk+1 .                       (3.4)
Note that Pr− Λ0 = Pr Λ0 and Pr− Λn = Pr−1 Λn , but for 0 < k < n, Pr− Λk is con-
tained strictly between Pr−1 Λk and Pr Λk . We may compute the dimension of
κHr Λk , using the exactness of the Koszul complex and induction (see [5, Theo-
rem 3.3]). This then yields a formula for the dimension of Pr− Λk :

                                              n+r       r +k−1
                          dim Pr− Λk =                         .
                                              n−k          k
Comparing this with (3.1), we have
                                                r
                              dim Pr− Λk =         dim Pr Λk
                                              r +k
(showing again that the spaces coincide for 0-forms).
   Now
                     dPr− Λk ⊂ dPr Λk ⊂ Pr−1 Λk+1 ⊂ Pr− Λk+1 ,
so we obtain another subcomplex of the de Rham complex:

                        Pr− Λ0 −
                               → Pr− Λ1 −     → Pr− Λn → 0.
                                 d            d     d
                                        → ··· −                                   (3.5)

Note that, in contrast to (3.2), in this complex the degree r is held constant. However,
like (3.2), the complex (3.5) is exact. Indeed,
                                                         
                   dPr− Λk = d Pr− Λk + dPr+1 Λk−1 = dPr Λk
                                                                  
                             = N d|Pr−1 Λk+1 = N d|Pr− Λk+1 ,

where the penultimate equality follows from Corollary 3.2 and the last equality is a
consequence of the definition (3.4) and the homotopy formula Theorem 3.1.
128                                                                                        D.N. Arnold

3.4 The Pr− Λk (Th ) Family of Finite Element Differential Forms

Let r ≥ 1, 0 ≤ k ≤ n, and let Th be a simplicial mesh of Ω ⊂ Rn . We define a finite
element subspace Pr− Λk (Th ) of H Λk (Ω). As shape functions on a simplex T ∈ Th
we take V (T ) = Pr− Λk (T ). As degrees of freedom we take
                    
  u ∈ Pr− Λk (T ) → (trf u) ∧ q, q ∈ Pr+k−d−1 Λd−k (f ), f ∈ d (T ), d ≥ k.
                        f
                                                                                (3.6)
Note that, in the case k = 0, V (T ) = Pr (T ) and (3.6) coincides with (2.1), so the
space Pr− Λk (Th ) generalizes the Lagrange finite elements to differential forms of
arbitrary form degree. We shall prove unisolvence for arbitrary polynomial degree,
form degree, and space dimension at once. The proof will use the following lemma,
which is proved via a simple construction using barycentric coordinates.

Lemma 3.4 Let r ≥ 1, 0 ≤ k ≤ n, and let T be an n-simplex. If u ∈ P̊r−1 Λk (T )
and
                 
                     u ∧ q = 0, q ∈ Pr+k−n−1 Λn−k (T ),                  (3.7)
                            T
then u ≡ 0.

Proof Any element of Pr−1 Λk (T ) can be written in terms of barycentric coordi-
nates as
                   
             u=          uσ dλσ1 ∧ · · · ∧ dλσk , uσ ∈ Pr−1 (T ).
                       σ ∈Σ(k,n)

Now let 1 ≤ i ≤ n, and consider the trace of u on the face given by λi = 0. By the
assumption that u ∈ P̊r−1 Λk (T ), the trace vanishes. This implies that λi divides uσ
for any σ ∈ Σ(k, n) whose range does not contain i. Thus

               uσ = pσ λσ1∗ · · · λσn−k
                                    ∗            for some pσ ∈ Pr+k−n−1 (T ),

where σ ∗ ∈ Σ(n − k, n) is the increasing sequence complementary to σ . Thus
             
      u=          pσ λσ1∗ · · · λσn−k
                                  ∗ dλσ ∧ · · · ∧ dλσ ,
                                       1             k  pσ ∈ Pr+k−n−1 (T ).
           σ ∈Σ(k,n)

Choosing
                                                    ∗
                   q=                   (−1)sign(σ,σ ) pσ dλσ1∗ ∧ · · · ∧ dλσn−k
                                                                             ∗

                        σ ∈Σ(k,n)

in (3.7), we get
                                         
              0=       u∧q =                      pσ2 λσ1∗ · · · λσn−k
                                                                   ∗ dλ1 ∧ · · · ∧ dλn .
                   T                T σ ∈Σ(k,n)
Spaces of Finite Element Differential Forms                                       129

However, the λi are positive on the interior of T and the n-form dλ1 ∧ · · · ∧ dλn
is a nonzero multiple of the volume form. Thus each pσ must vanish, and so u
vanishes.                                                                       

Theorem 3.5 (Unisolvence for Pr− Λk (Th )) For any r ≥ 1, 0 ≤ k ≤ n, and n-
simplex T , the degrees of freedom (3.6) are unisolvent for V (T ) = Pr− Λk (T ).

Proof First we do the dimension count. The number of degrees of freedom is at
most
                                   n+1                     r +k−1   d
         #d (T ) dim Pr+k−d−1 Λk Rd =
                                       d +1                       d     k
   d≥k                                            d≥k
                                                          n+1    r +k−1    j +k
                                              =                                  .
                                                         j +k+1     j +k      j
                                                  j ≥0

Simplifying with the binomial identities,

               a    b   a         a−c                    a    c   a+c
                      =               ,                          =     ,
               b    c   c         a−b                    b+j   j   a−b
                                                  j ≥0

the right-hand side becomes

                          r +n       r +k−1
                                            = dim Pr− Λk (T ).
                          r +k          k

   It remains to show that if u ∈ Pr− Λk (T ) and the degrees of freedom in (3.6)
vanish, then u vanishes. Since trf Pr− Λk (T ) = Pr− Λk (f ), we may use induction
on dimension to conclude that trf u vanishes on each facet f , so u ∈ P̊r− Λk (T ).
Therefore du ∈ P̊r−1 Λk+1 (T ). Moreover,
                          
                du ∧ p = ± u ∧ dp = 0, p ∈ Pr+k−n Λn−k−1 (T ),
               T                 T

where the first equality comes from Stoke’s theorem and the Leibniz rule, and the
second from the hypothesis that the degrees of freedom for u vanish. We may now
apply the lemma (with k replaced by k + 1) to du to conclude that du vanishes.
But the homotopy formula implies that for u ∈ Pr− Λk with du = 0, u ∈ Pr−1 Λk .
Using the interior degrees of freedom from (3.6), we may apply the lemma to u, to
conclude that u vanishes.                                                      

    It is easy to check that the degrees of freedom imply single-valuedness of the
traces of elements of Pr− Λk (Th ), so that they indeed belong to H Λk . Moreover, it
is easy to see that the complex (3.5) involving the shape functions, leads to a finite
element subcomplex of the L2 de Rham complex on Ω:
130                                                                       D.N. Arnold


                Pr− Λ0 (Th ) −
                             → Pr− Λ1 −             → Pr− Λn (Th ).
                            d          d         d       d
                                      → (Th ) −
                                              → ··· −

Using the degrees of freedom to define projection operators πhk into Pr− Λk (Th ) (the
domain of πhk consists of all continuous k-forms in H Λk (Ω)), we obtain projections
that commute with d (this can be verified using Stokes’ theorem), which is crucial
to the analysis of the element via FEEC.



3.5 The Pr Λk (Th ) Family of Finite Element Differential Forms

We may also use the full polynomial space Pr Λk (T ) as shape functions for a finite
element space. The corresponding degrees of freedom are
                    
                                          −
   u ∈ Pr Λk (T ) → (trf u) ∧ q, q ∈ Pr+k−d     Λd−k (f ), f ∈ d (T ), d ≥ k.
                      f
                                                                               (3.8)
Note that in this case the degrees of freedom involve Pr− spaces, defined through
the Koszul complex. The analysis of these spaces is very parallel to that of the last
subsection, and we will not carry it out here. Again, we obtain unisolvence, and a
finite element subcomplex of the de Rham complex
                            d                d       d
                Pr Λ0 (Th ) −
                            → Pr−1 Λ1 (Th ) −
                                            → ··· −
                                                  → Pr−n Λn (Th ),

which admits a commuting projection defined via the degrees of freedom.



3.6 Historical Notes

In the case k = 0, the two shape function spaces Pr− Λk and Pr Λk coincide, as do the
                                  −
spaces Pr−d−1 Λd−k (f ) and Pr−d     Λd−k (f ), f ∈ d (T ), entering (3.6) and (3.8).
Thus the two finite element families coincide for 0-forms, and provide two distinct
generalizations of the Lagrange elements to differential forms of higher degree.
    In n dimensions, n-forms may be viewed as scalar functions and the space
H Λn (Ω) just corresponds to L2 (Ω). The finite element subspace Pr Λn (Th ) is sim-
ply the space of all piecewise polynomial functions of degree r, with no interelement
continuity required. The space Pr− Λn (Th ) coincides with Pr−1 Λn (Th ).
    In two dimensions, the remaining spaces Pr− Λ1 (Th ) and Pr Λ1 (Th ) can be iden-
tified, via vector proxies, with the Raviart–Thomas spaces [20] and the Brezzi–
Douglas–Marini spaces [10]. In three dimensions, the Pr− Λ1 (Th ) and Pr− Λ2 (Th )
spaces are the finite element subspaces of H (curl, Ω) and H (div, Ω), respec-
tively, called the Nédélec edge and face elements of the first kind [18]. The spaces
Pr Λ1 (Th ) and Pr Λ2 (Th ) are the Nédélec edge and face elements of the second kind
[19]. Diagrams for the two-dimensional and three-dimensional elements are shown
in Figs. 2 and 3.
Spaces of Finite Element Differential Forms                                      131




Fig. 2 The Pr− Λk (Th ) and Pr Λk (Th ) spaces in two dimensions


   The lowest order spaces P1− Λk (Th ) are very geometric, possessing precisely one
degree of freedom per face of dimension k, and no others (see the top rows of Figs. 2
and 3). In fact these spaces first appeared in the geometry literature in the work of
Whitney in 1957 [24] long before their first appearance as finite elements. In the
1970s, they were used by Dodziuk [13] and Dodziuk and Patodi [14] as a theoret-
132                                                                       D.N. Arnold




Fig. 3 The Pr− Λk (Th ) and Pr Λk (Th ) spaces in three dimensions


ical tool to approximate the eigenvalues of the Hodge Laplacian on a Riemannian
manifold. This then played an essential role in Müller’s proof of the Ray–Singer
conjecture [17]. The spaces Pr Λk (Th ) also appeared in the geometry literature, in-
troduced by Sullivan [22, 23]. In an early, largely overlooked paper bringing finite
element analysis techniques to bear on geometry Baker [7] named these Sullivan–
Whitney forms, and analyzed their convergence for the eigenvalue problem for the
Hodge Laplacian. In 1988 Bossavit made the connection between Whitney forms
and the mixed finite elements in use in electromagnetics [8], in part inspired by the
Spaces of Finite Element Differential Forms                                             133

thesis of Kotiuga [16]. The first unified treatment of the Pr− Λk spaces, which was
based on exterior calculus and included a unisolvence proof, was in a seminal pa-
per of Hiptmair [15] in 1999. In the 2006 paper of Arnold, Falk, and Winther [5],
in which the term finite element exterior calculus first appeared, the Koszul com-
plex was first applied to finite elements, simplifying many aspects and resulting in a
simultaneous treatment of both the Pr− Λk and Pr Λk spaces.



4 Families of Finite Element Differential Forms on Cubical
  Meshes

We now describe two families of spaces of finite element differential forms, which
we denote Q− r Λ (Th ) and Sr Λ (Th ), defined for cubical meshes Th , i.e., meshes in
                 k             k

which each element is the Cartesian product of intervals. In some sense, the Q−  r Λ
                                                                                     k
                                           −
family can be seen as an analogue of the Pr Λ family for simplicial meshes, and the
                                              k

Sr Λk family an analogue of the Pr Λk family. The Q−     k
                                                     r Λ family can be constructed
from the one-dimensional case by a tensor product construction, and is long known.
By contrast, the Sr Λk family first appeared in recent work of Arnold and Awanou
[3]. Even in two and three dimensions, the spaces in this family were for the most
part not known previously.



4.1 The Q−  k
         r Λ Family

We describe this family only very briefly. A more detailed description will be in-
cluded in a forthcoming study of the approximation properties of these spaces under
non-affine mappings [4]. Suppose we are given a subcomplex of the de Rham com-
plex on an element S ⊂ Rm and a second such subcomplex on an element T ⊂ Rn :

             d          d       d                       d          d      d
    V 0 (S) −
            → V 1 (S) −
                      → ··· −
                            → V m (S),          V 0 (T ) −
                                                         → V 1 (T ) −
                                                                    → ··· −
                                                                          → V n (T ).
We may then construct a subcomplex of the de Rham complex on S × T by a tensor
product construction which is known in the theory of differential forms; see, e.g.,
[21, p. 61]. The canonical projection πS : S × T → S determines a pullback of i-
forms on S to i-forms on S × T , so πS∗ V i (S) is a space of i-forms on S × T and,
similarly, πT∗ V j (T ) is a space of j -forms on S × T . Thus we may define a space of
k-forms on S × T by
                                         
                        V k (S × T ) =       πS∗ V i (S) ∧ πT∗ V j (T ).
                                       i+j =k

We take the space V k (S × T ) as the shape functions for k-forms on S × T . The
construction of degrees of freedom for V k (S × T ) is simple. If η ∈ V i (S)∗ is a
134                                                                       D.N. Arnold

degree of freedom associated to a face f of S, and ρ ∈ V j (T )∗ is associated to a
face g of T , we define
                                                  ∗
                 η ∧ ρ ∈ πS∗ V i (S) ∧ πT∗ V j (T ) ⊂ V k (S × T )∗ ,

by
                                             
                         (η ∧ ρ) πs∗ u ∧ πT∗ v = η(u)ρ(v),

and associate the degree of freedom η ∧ ρ to f × g, which is a face of S × T .
   The Q− r family is defined by applying this tensor product repeatedly, starting
with a finite element de Rham complex on an interval in one dimension. In one
dimension the Pr− and Pr de Rham subcomplexes coincide. On an interval I , the
shape functions for 0-forms are V 0 (I ) = Pr (I ) with degrees of freedom at each end
point, and moments of degree at most r − 1 in the interior. The shape function for 1-
forms are V 1 (I ) = Pr−1 (I ) with all degrees of freedom in the interior. Repeatedly
using the tensor product construction just outlined, we obtain polynomial spaces
and degrees of freedom on a box I1 × · · · × In ⊂ Rn . We denote the shape function
space so obtained by Q− r Λ (I1 × · · · × In ). In n = 2 dimensions, for example,
                             k


              Q−r Λ (I1 × I2 ) = Qr (I1 × I2 ) = Pr (I1 ) ⊗ Pr (I2 ),
                   0

                                                                     
         Q−
          r Λ (I1 × I2 ) = Pr−1 (I1 ) ⊗ Pr (I2 ) × Pr (I1 ) ⊗ Pr−1 (I2 ) ,
             1


                         Q−
                          r Λ (I1 × I2 ) = Qr−1 (I1 × I2 ).
                             2


Diagrams for these elements in two and three dimensions are shown in Fig. 4. The
space Q− r Λ (Th ) is the standard Qr finite element subspace of H (Ω) and the space
             0                                                    1

Qr Λ (Th ) is the discontinuous Qr−1 subspace of L (Ω). The space Q−
  −   n                                                  2                     1
                                                                           r Λ (Th )
                                                                      −
goes back to Raviart and Thomas [20] in two dimensions, and the Qr Λ (Th ) and
                                                                          1

Q−    2
  r Λ (Th ) were given by Nédélec in [18]. The spaces with r held fixed combine to
create a finite element de Rham subcomplex,

                 Q−         → Q−               → Q−
                              d               d      d
                  r Λ (Th ) −  r Λ (Th ) −
                                         → ··· −
                     0            1                  n
                                                  r Λ (Th ),


and the degrees of freedom determine commuting projections.
   Recently, Cockburn and Qiu [12] have published a different family of finite el-
ement spaces in two and three dimensions, that seems to be related to these. They
begin with the complex formed by the full spaces Qr Λk , which lie between Q− r Λ
                                                                                  k
       −
and Qr+1 Λ . That complex (which was discussed in [19]) does not admit commut-
            k

ing projections. Cockburn and Qiu define a small space of bubble functions that can
be added to each of the spaces so that the resulting spaces remain inside Q−r+1 Λ
                                                                                  k

but also form a de Rham subcomplex (with constant r) which admits commuting
projections.
Spaces of Finite Element Differential Forms                                 135




Fig. 4 The Q−
            r Λ (Th ) spaces in two and three dimensions
               k




4.2 A Second Family of Finite Element Differential Forms on
    Cubes

The Sr Λk family presented in this section was derived recently in [3]. It seems
to be complementary to the Q−
                            r Λ family much as the Pr Λ family complements
                                k                         k
136                                                                             D.N. Arnold

the Pr− Λk family. To describe the new family we require some notation. A k-form
monomial in n variables is the product of an ordinary monomial and a simple alter-
nator:
                           α       α
                     m = x 1 1 · · · x n n dx σ1 ∧ · · · ∧ dx σk ,
where α is a multi-index and σ ∈ Σ(k, n).   We define the degree of m to be the
polynomial degree of its coefficient: deg m = i αi . The linear degree of m is more
complicated:
                                                                 
                    ldeg m = # i | αi = 1, αi ∈
                                              / {σ1 , . . . , σk } ,
that is, the number of variables that enter the coefficient linearly, not counting the
variables that enter the alternator. For example, if m = x 1 x 2 (x 3 )5 dx 1 , then deg m =
7, ldeg m = 1.
    We now define the space of shape functions we shall use for k-forms on an n-
dimensional box, T . Viewing monomial forms as differential forms on T , we define
Hr,l Λk (T ) ⊂ Hr Λk (T ) to be the span of all monomial k-forms m such that deg m =
r and ldeg m ≥ l. Using this definition and the Koszul differential, we then define
                            
               Jr Λk (T ) =     κHr+l−1,l Λk+1 (T ) ⊂ Pr+n−k−1 Λk (T ).
                            l≥1

Finally, we define the shape functions on T by

                Sr Λk (T ) = Pr Λk (T ) + Jr Λk (T ) + dJr+1 Λk−1 (T ),

defined for all r ≥ 1, 0 ≤ k ≤ n.
   As the definition of the shape functions takes a while to absorb, we describe the
spaces in more elementary terms in the case of three dimensions.
• The space Sr Λ0 , the polynomial shape functions for the H 1 space, consists of
  all polynomials u with superlinear degree sdeg u ≤ r. The superlinear degree of
  a monomial is its degree ignoring any variable that enters to the first power, and
  the superlinear degree of a polynomial is the maximum over its monomials. The
  criterion sdeg u ≤ r was introduced in [2] to generalize the serendipity elements
  from 2 to n-dimensions.
• The space Sr Λ1 , the shape functions for the H (curl) space, consists of vector
  fields of the form
      1 2 3  2 3 2                                            
      v , v , v + x x w − w 3 , x 3 x 1 w 3 − w 1 , x 1 x 2 w 1 − w 2 + grad u,

  with polynomials v i , w i , and u for which deg v i ≤ r, deg w i ≤ r − 1, sdeg u ≤
  r + 1, and w i is independent of the variable x i .
• The H (div) space uses shape functions Sr Λ2 , which are of the form
        1 2 3                                                             
        v , v , v + curl x 2 x 3 w 2 − w 3 , x 3 x 1 w 3 − w 1 , x 1 x 2 w 1 − w 2 ,

  with deg v i ≤ r, deg w i ≤ r, and w i independent of the variable x i .
Spaces of Finite Element Differential Forms                                      137




Fig. 5 The Sr Λk (Th ) spaces in two and three dimensions



• Finally the L2 space Sr Λ3 simply coincides with Pr .
   In [3] we establish the following properties of these spaces (in any dimension):
• degree property: Pr Λk (I n ) ⊂ Sr Λk (I n ) ⊂ Pr+n−k Λk (I n );
• inclusion property: Sr Λk (I n ) ⊂ Sr+1 Λk (I n );
138                                                                                                          D.N. Arnold

Table 1 Dimension of Q−
                      r Λ (I ) and Sr Λ (I )
                         k n           k n

k     r                                                               r
      1       2       3           4            5        6             1       2        3        4        5         6

n=1
0         2       3       4           5             6         7           2        3        4        5         6         7
1         1       2       3           4             5         6           2        3        4        5         6         7
n=2
0         4       9    16             25           36        49           4        8       12       17       23         30
1         4   12      24              40           60       84            8       14    22          32       44         58
2         1       4       9           16           25       36            3       6     10          15       21         28
n=3
0         8   27      64           125          216         343           8       20    32          50       74     105
1     12      54      144         300          540          882       24          48    84      135       204       294
2         6   36      108         240          450          756       18          39    72      120       186       273
3         1       8    27             64        125         216           4       10       20       35        56        84
n=4
0     16      81      256          625         1296      2401         16          48    80      136       216       328
1     32      216     768         2000         4320      8232         64      144      272      472      768       1188
2     24      216     864         2400         5400     10 584        72      168      336      606      1014      1602
3         8   96      432         1280         3000      6048         32          84   180      340       588       952
4         1   16       81          256          625      1296             5       15    35          70       126       210



• trace property: for each face f of I n , trf Sr Λk (I n ) ⊂ Sr Λk (f );
• subcomplex property: dSr Λk (I n ) ⊂ Sr−1 Λk+1 (I n ).
     The degrees of freedom for Sr Λk (T ) are quite simple:
                     
    u ∈ Sr Λk (T ) → (trf u) ∧ q, q ∈ Pr−2(d−k) Λd−k (f ), f ∈ d (T ), d ≥ k.
                              f
                                                                               (4.1)
These are illustrated in Fig. 5. Notice that weighting function q is sought in a Ps
space, not a Qs space. Moreover, as the face dimension d increases by 1, the degree
s of the space used for q decreases by 2. A major result of [3] is a proof that the
degrees of freedom are unisolvent. Further, we show there that the resulting finite
element spaces combine into de Rham subcomplexes with commuting projections:
                                           d                      d           d
                      Sr Λ0 (Th ) −
                                  → Sr−1 Λ1 (Th ) −
                                                  → ··· −
                                                        → Sr−n Λn (Th ),

in which the degrees r decrease, as for the Pr ΛK (Th ) spaces on simplices.
    For n-forms, the space Sr Λn (Th ) is simply the discontinuous Pr space (but de-
fined on boxes, rather than simplices). In 2-dimensions, the 0-form space Sr Λ0 (Th )
is the well-known serendipity space, and the 1-form space is the rectangular BDM
Spaces of Finite Element Differential Forms                                                        139

space defined in [10]. Hence these spaces were all known in 2 dimensions. How-
ever, in 3 and more dimensions they were not. The 0-form space is the appropriate
generalization of the serendipity space to higher dimensions, a space first defined in
2011 [2]. The space Sr Λ2 in 3-D is, we believe, the correct analogue of the BDM
elements to cubical meshes. It has the same degrees of freedom as the space in [9]
but the shape functions have better symmetry properties. For 1-forms in 3-D, Sr Λ1
is a finite element discretization of H (curl). To the best of our knowledge, neither
the degrees of freedom nor the shape functions for this space had been proposed pre-
viously. Finally, we note that the dimension of Sr− Λk (T ) tends to be much smaller
than that of Q−    k
                r Λ (T ), especially for r large, as can be observed in Table 1.




References
 1. Arnold, D.N.: Differential complexes and numerical stability. In: Proceedings of the Inter-
    national Congress of Mathematicians, vol. I, Beijing, 2002, pp. 137–157. Higher Education
    Press, Beijing (2002). MR MR1989182 (2004h:65115)
 2. Arnold, D.N., Awanou, G.: The serendipity family of finite elements. Found. Comput. Math.
    11(3), 337–344 (2011). doi:10.1007/s10208-011-9087-3
 3. Arnold, D.N., Awanou, G.: Finite element differential forms on cubical meshes. Preprint
    (2012). URL: http://arxiv.org/pdf/1204.2595
 4. Arnold, D.N., Boffi, D., Bonizzoni, F.: Approximation by tensor product finite element differ-
    ential forms (2012, in preparation)
 5. Arnold, D.N., Falk, R.S., Winther, R.: Finite element exterior calculus, homological tech-
    niques, and applications. Acta Numer. 15, 1–155 (2006). MR MR2269741 (2007j:58002)
 6. Arnold, D.N., Falk, R.S., Winther, R.: Finite element exterior calculus: from Hodge theory to
    numerical stability. Bull. Am. Math. Soc. 42(2), 281–354 (2010)
 7. Baker, G.A.: Combinatorial Laplacians and Sullivan-Whitney forms. In: Differential Geome-
    try, College Park, MD, 1981/1982. Progr. Math., vol. 32, pp. 1–33. Birkhäuser, Boston (1983).
    MR MR702525 (84m:58005)
 8. Bossavit, A.: Whitney forms: a class of finite elements for three-dimensional computations in
    electromagnetism. IEEE Trans. Magn. 135(Part A), 493–500 (1988)
 9. Brezzi, F., Douglas, J. Jr., Durán, R., Fortin, M.: Mixed finite elements for second order elliptic
    problems in three variables. Numer. Math. 51, 237–250 (1987). MR MR890035 (88f:65190)
10. Brezzi, F., Douglas, J. Jr., Marini, L.D.: Two families of mixed finite elements for second order
    elliptic problems. Numer. Math. 47, 217–235 (1985). MR MR799685 (87g:65133)
11. Ciarlet, P.G.: The Finite Element Method for Elliptic Problems. North-Holland, Amsterdam
    (1978). MR MR0520174 (58 #25001)
12. Cockburn, B., Qiu, W.: Commuting diagrams for the TNT elements on cubes. Math. Comput.
    (2012, to appear)
13. Dodziuk, J.: Finite-difference approach to the Hodge theory of harmonic forms. Am. J. Math.
    98(1), 79–104 (1976). MR MR0407872 (53 #11642)
14. Dodziuk, J., Patodi, V.K.: Riemannian structures and triangulations of manifolds. J. Indian
    Math. Soc. (N.S.) 40(1–4), 1–52 (1976). MR MR0488179 (58 #7742)
15. Hiptmair, R.: Canonical construction of finite elements. Math. Comput. 68, 1325–1346
    (1999). MR MR1665954 (2000b:65214)
16. Kotiuga, P.R.: Hodge decompositions and computational electromagnetics. PhD in Electrical
    Engineering, McGill University (1984)
17. Müller, W.: Analytic torsion and R-torsion of Riemannian manifolds. Adv. Math. 28(3), 233–
    305 (1978). MR MR498252 (80j:58065b)
140                                                                                D.N. Arnold

18. Nédélec, J.-C.: Mixed finite elements in R3 . Numer. Math. 35, 315–341 (1980). MR
    MR592160 (81k:65125)
19. Nédélec, J.-C.: A new family of mixed finite elements in R3 . Numer. Math. 50, 57–81 (1986).
    MR MR864305 (88e:65145)
20. Raviart, P.-A., Thomas, J.-M.: A mixed finite element method for 2nd order elliptic prob-
    lems. In: Mathematical Aspects of Finite Element Methods, Proc. Conf., Consiglio Naz.
    delle Ricerche (C.N.R.), Rome, 1975, pp. 292–315. Lecture Notes in Mathematics, vol. 606.
    Springer, Berlin (1977). MR MR0483555 (58 #3547)
21. Robin, J.W., Salamon, D.A.: Introduction to differential topology (2011). Lecture notes
    for a course at ETH Zürich. URL: http://www.math.ethz.ch/~salamon/PREPRINTS/difftop.
    pdf
22. Sullivan, D.: Differential forms and the topology of manifolds. In: Manifolds—Tokyo 1973,
    Proc. Internat. Conf., Tokyo, 1973, pp. 37–49. Univ. Tokyo Press, Tokyo (1975). MR
    MR0370611 (51 #6838)
23. Sullivan, D.: Infinitesimal computations in topology. Publ. Math. IHÉS 1977(47), 269–331
    (1978). MR MR0646078 (58 #31119)
24. Whitney, H.: Geometric Integration Theory. Princeton University Press, Princeton (1957). MR
    MR0087148 (19,309c)
A Priori Bounds for Solutions of a Nonlocal
Evolution PDE

Luis Caffarelli and Enrico Valdinoci




Abstract We obtain L∞ bounds, independent of ε for the equation
                    (ε)                           
                   ut =  u(ε) + f u(ε) − εL u(ε) .

Here, f is supposed to be constant outside a bounded interval and L is a suitable
nonlocal operator, such as the fractional Laplacian.


1 Introduction
Given ε > 0, we consider the evolution PDE
                                             
                     (ε)
                    ut =  u(ε) + f u(ε) − εL u(ε) ,
                                   (ε)                                                         (1)
                    u(ε) (x, 0) = u0 (x).

Here above u = u(x, t), x ∈ Rn , t ∈ (0, +∞). As usual, ut = ∂t u is the derivative
with respect to the time variable t , and  is the Laplace operator in the space vari-
able x (that is, the sum of the pure second derivatives). We suppose that f ∈ C 2 (R)
and that L is an integral operator of the type that we now describe. Equation (1)
may be seen as a nonlocal variant of the classical Cahn-Hilliard phase coexistence
model. In the classical (i.e., local case) the model deals with a chemical mixture
that, while cooling down, separates into two different phases.


L. Caffarelli (B)
Department of Mathematics, University of Texas at Austin, 1 University Station C1200, Austin,
TX 78712-0257, USA
e-mail: caffarel@math.utexas.edu

E. Valdinoci
Dipartimento di Matematica “F. Enriques”, Università di Milano, via Saldini 50, 20133 Milan,
Italy
e-mail: enrico@math.utexas.edu

E. Valdinoci
Istituto di Matematica Applicata e Tecnologie Informatiche “E. Magenes”, Consiglio Nazionale
delle Ricerche, via Ferrata 1, 27100 Pavia, Italy

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,          141
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_10,
© Springer-Verlag Italia 2013
142                                                          L. Caffarelli and E. Valdinoci

   The modification in (1) takes into account a nonlocal operator that drives the
phase segregation (this may be due, for instance, to long-range particle interactions
or to boundary effects of the container).
   The recent literature has taken into consideration several types of nonlocal ver-
sions of the Cahn-Hilliard equation, also for concrete applications, such as the de-
noising, segmentation and reconstruction of signals in image processing, in order to
reduce the unpleasant effect of the white noises, see e.g. [5]. Other applications also
occur in fluid dynamics, see [2, 3] and references therein. In this paper we consider
quite a severe type of nonlocal feature of the equation, namely the one driven by
a fractional Laplacian type operator. When ε = 0, the equation in (1) may be ill-
posed, so the nonlocal operator plays also a stabilising effect (though oscillations
may increase as ε → 0+ ). Fixed
                                             
                                          1
                                    a∈      ,1 ,                                    (2)
                                          2

we consider a measurable, (n + 2a)-positive homogeneous kernel K : Rn \ {0} →
(0, +∞) that is bounded and bounded from zero on S n−1 : hence
                                               K(x)
                                     K(λx) =                                           (3)
                                               λn+2a
for any λ > 0 and any x ∈ Rn \ {0}, and

                                 c                   C
                                       ⩽ K(x) ⩽                                        (4)
                             |x|n+2a              |x|n+2a

for suitable C ⩾ c > 0. The study of this type of kernels is very popular in singular
integrals (see, e.g., [6]) and the fractional Laplacian is a particular case of interest
(in such a case, K(y) = |x|−n−2a , up to normalisation factors). In relation with the
PDE in (1), such kernels play an important role for long-range interaction systems
in statistical mechanics (see, e.g., [4]).
   We consider the spaces
                                                                  
                                    n        v(x)            n
                   D := v ∈ C R s.t.
                                 2
                                                        ∈L R1
                                            1 + |x|n+2a

and, for any  ∈ N,

      D := v : Rn → R s.t. D β v ∈ D for any β ∈ Nn with β1 + · · · + β ⩽  .

Notice that D0 = D . For any v ∈ D , we define

                                                           
              (Lv)(x) :=         v(x + y) + v(x − y) − 2v(x) K(y)dy.                   (5)
                           Rn

Notice that the definition in (5) is well-posed, thanks to (4). We also define
A Priori Bounds for Solutions of a Nonlocal Evolution PDE                                           143
                                        
                W := v ∈ C 0 Rn × [0, +∞) s.t.
                        x → v(x, t) ∈ D2 for any fixed t > 0 and
                                                  
                        t → v(x, t) ∈ C 1 (0, +∞) for any fixed x ∈ Rn .

   The main result we prove here is the following uniform bound, independent of ε,
for solutions1 of (1):

Theorem 1.1 Suppose that

                                        f  (r) = 0   if |r| ⩾ 1.                                   (6)

Let u(ε) ∈ W be a sequence of solutions of (1) with
                                  (ε)                      (ε)
                         sup u0 (x) + ε 1/(2a) ∇u0 (x) < +∞.                                        (7)
                         x∈Rn
                          ε>0

   Then, there exists C > 0 such that

                                            u(ε) (x, t) ⩽ C

for any x ∈ Rn and any t ∈ [0, +∞).

   Of course, the C in the statement of Theorem 1.1 is not universal, but it depends
on the quantity in (7) (as well as on n, a and the structural constants of K).
   We will obtain Theorem 1.1 from scaling: if we set
                                                                 
                          v (ε) (x, t) := u(ε) ε 1/(2a) x, ε1/a t

and v0(ε) (x) := v (ε) (x, 0), we deduce from (3) that
                                                   
             v (ε) (x, t) + f v (ε) (x, t) − L v (ε) (x, t)
                                                                        
                = ε 1/a u(ε) ε 1/(2a) x, ε1/a t + f u(ε) ε 1/(2a) x, ε 1/a t
                                              
                  − εL u(ε) ε 1/(2a) x, ε 1/a t
                          (ε)                
                = ε1/a ut ε 1/(2a) x, ε 1/a t
                   (ε)
                = vt (x, t).

That is, v (ε) solves the PDE in (1) with ε := 1. Also, by (7),
                                  (ε)       (ε)
                             sup v0 (x) + ∇v0 (x) < +∞.
                             x∈Rn
                              ε>0


1 For concreteness, in this paper, the solutions are taken in the classical sense (e.g. they are smooth,

according to the definition of W ).
144                                                         L. Caffarelli and E. Valdinoci

Consequently, Theorem 1.1 would easily follow by scaling the following result:

Theorem 1.2 Suppose that (6) holds and let u ∈ W be a solution of
                                      
                       ut =  u + f (u) − L(u),
                                                                                      (8)
                      u(x, 0) = u0 (x),

with u0 ∈ W 1,∞ (Rn ).
   Then, there exists C > 0 such that

                                    u(x, t) ⩽ C                                       (9)

for any x ∈ Rn and any t ∈ [0, +∞).

   The proof of Theorem 1.2 relies on some techniques developed in [1], with the
suitable modifications needed here to take into account the nonlocal operator L.
   Roughly speaking, the main idea borrowed from [1] is to split u into two terms,
one, say u1 , which is driven by the heat equation, and a remainder u2 . The kernel
representing u2 behaves like the heat kernel for large t, but the nonlocal operator
plays a role for small t. The contribution of the kernel are studied via Fourier anal-
ysis in order to obtain the desired bounds.
   The organisation of the paper is as follows. Sections 2 and 3 are devoted to the
Fourier analysis of the operator, which will be applied in Sect. 4 to obtain several
useful bounds on the kernel.
   The gradient of the solution will be estimated in Sect. 5 (in fact, the gradient
bound of Theorem 5.3 may be of interest in itself).
   The proof of Theorem 1.2 is contained in Sect. 6 and it is obtained by first con-
trolling the size of u2 , thanks to the kernel estimates, and then the one of u1 , ex-
ploiting the gradient bound of Sect. 5 and the standard maximum principle for the
heat equation (assumption (6) makes it possible to reduce to it).



2 Fourier Multipliers of K
As usual, the Schwartz space of rapidly decreasing functions will be denoted by S.
   Given φ ∈ S, its Fourier transform will be denoted by either φ or F φ, and the
anti-Fourier transform by either φ̌ or F −1 φ.
   Given v, w ∈ L2 (Rn , C), we define

                            v, w :=         v(x)w(x)dx.
                                        Rn

Given a tempered distribution T ∈ S , we also denote by T , φ its action on a test
function φ ∈ S: of course, no ambiguity should arise from the use of the notation ·,·
in the two settings.
A Priori Bounds for Solutions of a Nonlocal Evolution PDE                                   145

    As usual, if w ∈ L1loc (Rn ), its Fourier transform is meant in the distribution sense,
i.e.

                                       
                            w , φ := w, φ          for any φ ∈ S.

   Also, if f = f (x, y) : X × Y → R we write

                                               f (x, y)dydx
                                       X Y

to mean
                                                        
                                               f (x, y)dy dx.
                                   X       Y

With this notation, we can perform a Fourier analysis on the operator L. We start
by finding an explicit representation of the symbol of L in Fourier space and by
observing its natural scaling properties.

Lemma 2.1 For any v ∈ D ,
                                                   
                                        Lv ∈ L1loc Rn                                       (10)

and
                                              1                             
        F (Lv) = S
                  v with S(ξ ) :=                             cos(y · ξ ) − 1 K(y)dy ⩽ 0.   (11)
                                           2(2π)n    Rn

Also,
                                   1
                        −S(ξ ) ⩾     |ξ |2a       for any ξ ∈ Rn \ B1 ,                     (12)
                                   C
and, for any β ∈ Nn ,

                   D β S(ξ ) ⩽ C |ξ |2a−(β1 +···+βn )           for any ξ = 0,              (13)

for a suitable C ⩾ 1.

Proof We start by proving (10). For this, fix R > 0.
  We observe that if z ∈ Rn \ B2R and x ∈ BR , then
                                       |z| |z|         |z| 2R    |z|
            |z ± x| ⩾ |z| − |x| =         +    − |x| ⩾    +   −R= .
                                        2   2           2   2     2
Therefore, recalling (4), we see that, if z ∈ Rn \ B2R and x ∈ BR ,
                                                                     C0
                     K(z − x) + K(z + x) + 2K(z) ⩽                         ,
                                                                   |z|n+2a
for a suitable C0 > 0.
146                                                                            L. Caffarelli and E. Valdinoci

   Consequently,

                     v(x + y) + v(x − y) − 2v(x) K(y)dydx
  BR      Rn \B3R

      ⩽                    v(x + y) K(y)dydx +                                 v(x − y) K(y)dydx
           BR   Rn \B3R                                     BR       Rn \B3R

          +2                       v(y) K(y)dydx
                BR    Rn \B3R

      =                        v(z) K(z − x)dzdx +                                   v(z) K(z + x)dzdx
           BR   Rn \B3R (x)                                     BR    Rn \B3R (−x)

          +2                       v(z) K(z)dzdx
                BR    Rn \B3R
                                                          
      ⩽                    v(z) K(z − x) + K(z + x) + 2K(x) dzdx
           BR   Rn \B2R

                        C0 |v(z)|
      ⩽                           dzdx
                Rn \B2R |z|
                            n+2a
           BR

      ⩽ CR ,

for a suitable CR > 0, since v ∈ D .
   Accordingly, using (4) once more,

          Lv L1 (BR ) ⩽                       v(x + y) + v(x − y) − 2v(x) K(y)dydx
                              BR    B3R

                           +                       v(x + y) + v(x − y) − 2v(x) K(y)dydx
                                   BR    Rn \B3R

                       ⩽                      v C 2 (B4R ) |y|2 K(y)dydx + CR
                              BR    B3R
                                                               
                       ⩽ CR                  |y|2−(n+2a) + 1
                                        B3R
                                                     
                                    ωn−1 (3R)2(1−a)
                       ⩽ CR                        +1 ,
                                       2(1 − a)

for a suitable CR > 0, and this proves (10).
   Now, we prove (11). If v ∈ S, a direct computation (see, e.g., Sect. 2 of [7])
proves (11).
   Let us now check that (11) holds for any v ∈ D . For this, first notice that F (Lv)
is well-defined, in the distribution sense, thanks to (10).
   Given a function w, we define w  (x) := w(−x) and we observe that Lv    = L v.
A Priori Bounds for Solutions of a Nonlocal Evolution PDE                             147

                                                             , since we know
   Take any φ ∈ S and let ψ := φ̌. We remark that F (Lψ) = S ψ
that (11) holds in S, and so

                  S 
                     v , φ = v , Sφ =     
                                         v, S ψ
                                                    
                           =                                 
                               v , F (Lψ) = v, F 2 (Lψ) = v, Lψ
                            = 
                               v , Lψ = L          ψ
                                           v , ψ = Lv,
                                                            
                            = Lv, ψ = Lv, F 2 ψ = Lv, F 2 φ̌
                                                    
                            = Lv, F φ = F (Lv), φ .

This completes the proof of (11) when v ∈ D .
    Now we consider ξ = 0, we set ξ := ξ/|ξ |, we take a rotation R such that
ξ = Re1 , and we change variable w := R T (|ξ |y): since dw = |ξ |n dy, we obtain
in (11) that

                                                 
        −2(2π)n S(ξ ) =            1 − cos(y · ξ ) K(y)dy
                             Rn
                                                       
                        =          1 − cos y|ξ | · (Re1 ) K(y)dy
                             Rn
                                                                
                        = |ξ |−n           1 − cos(w1 ) K |ξ |−1 Rw dy
                                     Rn
                                                                         
                        = c |ξ |2a ,       with c :=          1 − cos(w1 ) K(Rw)dy.   (14)
                                                        Rn

Noticed that we have used (3) here, and that c ∈ (0, +∞) thanks to (4). Then, (12)
and (13) follow from (14).                                                      



3 Fourier Analysis

This is the most technical part of the paper, in which some techniques of [1] need
to be adapted to our case by taking into account the different natural scaling of the
operator. The estimates obtained will be uniform in time, and this requires a different
analysis for the short and long times asymptotics.

Lemma 3.2 Let S be as in (11). Let P : Rn → R be a polynomial. Given γ ∈ {0, a},
we define the interval Iγ as
                                       
                                           [1, +∞)     if γ = 0,
                              Iγ :=                                                   (15)
                                           (0, 1]      if γ = a.
148                                                                                        L. Caffarelli and E. Valdinoci

Then, there exists C > 0 such that
                                                γ /(γ +1) |η|2 (1−S(t −1/(2(γ +1)) η))
           sup                  P (η)e−t                                                 eiη·z dη dz ⩽ C .          (16)
          t∈Iγ      Rn     Rn

Proof Let
                                                                   1
                                                λ = λγ :=                .
                                                                2(γ + 1)
We observe that
                                                                                    
                       sup t 2(γ −a)λ ⩽ max                   sup      t −a , sup t 0 = 1.                          (17)
                       t∈Iγ                                t∈[1,+∞)           t∈(0,1]

Also, a direct computation shows that
                                                                          β
                t 2γ λ |η|2 (1−S(t −λ η))                               ∂              2γ λ |η|2 (1−S(t −λ η))
            e                               ·                                    e−t
                                                                       ∂η
                                                     β∈Nn
                                                β1 +···+βn ⩽2n

is bounded by an appropriate polynomial in the variables |η|, t 2γ λ and t (2γ −m)λ ×
|∂ β S(t −λ η)|, for m = β1 + · · · + βn ⩽ 2n.
    That is, recalling (13), it is bounded by a polynomial in the variables |η|, t 2γ λ
and t 2(γ −a)λ .
    Accordingly, due to (15) and (17), for any t ∈ Iγ , it is bounded by a polynomial
in the variable |η|, and so
                     β
                        ∂                   −λ                  2γ λ 2       −λ
                            e−t |η| (1−S(t η)) ⩽ C̄ 1 + |η|C̄ e−t |η| (1−S(t η)) ,
                                 2γ λ 2
 sup
t∈Iγ           n       ∂η
           β∈N
      β1 +···+βn ⩽2n

for a suitable C̄ > 0.
   Hence, if P is as in the statement of Lemma 3.2,
                                  β
                                    ∂                        −λ   
                                           P (η)e−t |η| (1−S(t η))
                                                   2γ λ 2
                sup
                t∈Iγ        n      ∂η
                                β∈N
                           β1 +···+βn ⩽2n
                                      
                             1 + |η|C e−t 2γ λ |η|2 (1−S(t −λ η)) ,
                           ⩽C                                                                                       (18)

for some C > 0.
   We now localise the integral in (16). For this, we fix a function φ ∈ C ∞ (R, [0, 1])
such that φ = 1 in [−1, 1] and φ = 0 outside [−2, 2]. We set ψ := 1 − φ and we
write
                                                   
                                                   n
                                                                    
                                            1=        ψ(zj ) + φ(zj ) .
                                                   j =1
A Priori Bounds for Solutions of a Nonlocal Evolution PDE                                                                    149

So the integrand in (16) becomes
          
          n
                                                                  γ /(γ +1) |η|2 (1−S(t −1/(2(γ +1)) η))
             ψ(zj ) + φ(zj )                             P (η)e−t                                            eiη·z dη dz.
     Rn   j =1                                      Rn


After expanding the sums in the product, we see (by possibly reordering the coordi-
nates) that the “typical” term has the form

         
         k                    
                              n
                                                                     γ /(γ +1) |η|2 (1−S(t −1/(2(γ +1)) η))
               ψ(zj )                  φ(z )             P (η)e−t                                            eiη·z dη dz,
    Rn j =1                =k+1                    Rn

                                                    q
for k = 0, . . . , n, with the obvious notation that j =m equals 1 whenever q < m.
   We integrate by parts 2k-times, concluding that the above quantity equals to
                                 γ /(γ +1) |η|2 (1−S(t −1/(2(γ +1)) η))
               P (η)e−t
   Rn     Rn

              
              k
                               
                                 n
          ×      ψ(zj )eiηj zj     φ(z )eiη z dη dz
              j =1                           =k+1

                                          γ /(γ +1) |η|2 (1−S(t −1/(2(γ +1)) η))
     =                    P (η)e−t
          Rn         Rn
              k 
                                     n
                      ψ(zj ) ∂ 2 iηj zj 
          ×                         e      φ(z )eiη z dη dz
                      (izj )2 ∂ηj
              j =1                                               =k+1
                                    2                  2
                               ∂                     ∂                     γ /(γ +1) |η|2 (1−S(t −1/(2(γ +1)) η))   
     =                                    ...                   P (η)e−t
          Rn         Rn       ∂η1                   ∂ηk
              k 
                                             
                                               n
                  ψ(zj )
          ×                   eiηj zj                         φ(z )eiη z dη dz
                      (izj )2
              j =1                                =k+1

                 
                 k
                   ψ(zj ) 
                          n
     =                                           φ(z )
          Rn j =1 |zj |
                                 2
                                     =k+1
                                 2                    2
                           ∂                      ∂                      γ /(γ +1) |η|2 (1−S(t −1/(2(γ +1)) η))    iη·z
          ×                            ...                    P (η)e−t                                             e dη dz.
                 Rn       ∂η1                    ∂ηk
This and (18) imply that, for any t ∈ Iγ , the integrand in (16) is bounded by

                          
                          k
                            ψ(zj ) 
                                   n
                                                                                    −λ
                                                         φ(z ) 1 + |η|C e−t |η| (1−S(t η)) dηdz,
                                                                            2γ λ 2
                                                                                                                            (19)
           Rn     Rn              |zj |2
                          j =1               =k+1

where the multiplicative constant has been neglected.
150                                                                              L. Caffarelli and E. Valdinoci

   Now, we claim that
                                                   1
                            t 2γ λ |η|2 1 − S t −λ η ⩾    |η|2(1+γ ) ,                                    (20)
                                                       C∗
for a suitable C∗ > 0.
   Indeed, if t −λ |η| ⩽ 1 we use (11) and we obtain
                                          
                    t 2γ λ |η|2 1 − S t −λ η ⩾ t 2γ λ |η|2 ⩾ |η|2(1+γ ) ,

proving (20) in this case. If, conversely, t −λ |η| > 1, we exploit (12) and we obtain
                                              t 2λ(γ −a) |η|2(1+a)
  t 2γ λ |η|2 1 − S t −λ η ⩾ −t 2γ λ |η|2 S t −λ η ⩾                     ⩾ |η|2(1+γ ) ,
                                                             C
which is (20) in this case.
   As a consequence of (19) and (20), for any t ∈ Iγ , we control the integrand in (16)
with
                          
                          k
                            ψ(zj ) 
                                   n
                                                             
                                                φ(z ) 1 + |η|C e−|η|
                                                                     2(1+γ ) /C
          C                                                                    ∗ dηdz,
                     Rn j =1 |zj | =k+1
                                  2
              Rn

for a suitable C > 0. This plainly yields the desired result, by exploiting the supports
of φ and ψ .                                                                          

   As an immediate consequence of (16), we have that:

Corollary 3.1 If P , Q : Rn → R are polynomials,
                                            a/(a+1) |η|2 (1−S(t −1/(2(a+1)) η))
            sup                  P (η)e−t                                         eiη·z dη dz
           t∈(0,1]   Rn     Rn

                                                                    −1/2 η))
                                           Q(η)e−|η| (1−S(t
                                                          2
              +      sup                                                       eiη·z dη dz < +∞.          (21)
                   t∈[1,+∞)      Rn   Rn

   Also, a useful variation of Lemma 3.2 is given by the following result:

Lemma 3.3 Let S be as in (11). Let P : Rn → R be a polynomial. Then, there
exists C0 > 0 such that, for any t ⩾ 1,
                                      2       −1/2                C0
                            P (η)e−|η| e|η| S(t η) − 1 eiη·z dη dz ⩽ a .
                                           2
                                                                                                          (22)
                Rn     Rn                                            t

Proof Though the proof is a simple variation of the one given in Lemma 3.2, we
give the technical details for the facility of the reader.
   For any (η, t) ∈ Rn × [1, +∞), let
                                                              −1/2 η)
                                   g(η, t) := e|η| S(t
                                                      2
                                                                        − 1.
A Priori Bounds for Solutions of a Nonlocal Evolution PDE                                                                   151

We observe that, from (11), S(t −1/2 η) ⩽ 0 and so, from (13),

                                                   −1/2 η)
                                                                      0                             0
          g(η, t) = 1 − e|η| S(t
                                             2
                                                             =                       es ds ⩽                          1ds
                                                                  |η|2 S(t −1/2 η)                 |η|2 S(t −1/2 η)

                                             |η|2(1+a)
                           = −|η|2 S t −1/2 η ⩽          .                                                                  (23)
                                                   ta

We take φ and ψ as in the proof of Lemma 3.2 and we follow the same arguments as
there to see that, after expanding the sums in the product, the “typical” term obtained
from the integral in (22) has the form

         
         k                  
                            n
                                                                      2       −1/2   
                                                            P (η)e−|η| e|η| S(t η) − 1 eiη·z dη dz
                                                                           2
                ψ(zj )                    φ(z )
    Rn   j =1              =k+1                       Rn
                                                          k                 n                
                                                                              
                                          −|η|2
      =                    P (η)e                 g(η, t)    ψ(zj )e iηj zj
                                                                                 φ(z )e iη z
                                                                                                  dη dz
            Rn       Rn                                       j =1                            =k+1
                                             k                       
                                              ψ(zj )  ∂ 2
                               −|η|2
      =                 P (η)e       g(η, t)                 e iηj zj
            Rn       Rn                         (izj )2 ∂ηj
                                                              j =1
                                                  
                     
                     n
          ×                    φ(z )eiη z dη dz
                    =k+1
                                     2          
                                ∂    ∂ 2                      
                                          P (η)e−|η| g(η, t)
                                                       2
      =                                     ...
           R n Rn              ∂η1  ∂ηk
             k                     n                  
               ψ(zj )                
          ×               e iηj zj
                                          φ(z )e iη z
                                                          dη dz,                                                            (24)
                  (izj )2
                    j =1                                =k+1


where 2k integrations by parts have been performed.
  Now, an explicit computation gives that

                                                                    β
                               |η|2                               ∂                           
                                                                            P (η)e−|η| g(η, t)
                                                                                      2
                           e                                                                                                (25)
                                                                 ∂η
                                           β∈Nn
                                      β1 +···+βn ⩽2n


is bounded by

                                                       
                                                       2n                                        β
                                            −1/2 η)                                            ∂                      
  P0 (η) g(η, t) + e|η| S(t                                                                             |η|2 S t −1/2 η ,
                                      2
                                                             Pq (η)
                                                                                              ∂η
                                                       q=1                    β∈Nn
                                                                          β1 +···+βn =q
152                                                                            L. Caffarelli and E. Valdinoci

for suitable polynomials P0 , P1 , . . . , P2n , and so, recalling (13), it is bounded by

                                                                (η)
                                                                P
                                       P0 (η) g(η, t) +              ,
                                                                 ta

for a suitable polynomial P  .
   That is, in the light of (23), the quantity in (25) is bounded by

                                              M(1 + |η|M )
                                                           ,
                                                  ta
for a suitably large M ∈ N.
   This and (24) imply that the integral in (22) is bounded by

              M               
                              k
                                ψ(zj ) 
                                       n
                                                                        
                                                          φ(z ) 1 + |η|M e−|η| dηdz.
                                                                               2

              ta   Rn    Rn   j =1
                                        zj2       =k+1

Using the supports of φ and ψ , we obtain the estimate claimed in (22).                                   



4 Kernel Estimates

Here, we perform useful estimates on the kernel of the homogeneous equation as-
sociated to (8).
   For this, we define
                                          1
                                                          e−t|ξ | (1−S(ξ )) eiξ ·x dξ,
                                                                2
                     N (x, t) :=
                                        (2π)n       Rn

where S is the one introduced in (11).
  We will also exploit the following standard notation, for 1 ⩽ p ⩽ ∞:

                                       · Lpx := · Lp (Rn )             and
                                       · Lp := · Lp ((0,+∞)) .
                                              t


Also, ∂j will be a short notation for the spatial derivative ∂x∂ j , for j = 1, . . . , n.
   We observe that N is the fundamental solution of the linearised equation:

              Nt = N − L(N)                     for t > 0,           lim N (x, t) = δ0 .
                                                                      t→0+

Scope of these pages is to point out the following integral bound on N :

                                1                                       +∞
      supN (·, t)L1 +               N L1x dt +           sup                ∂j N L1x dt < +∞.
                     x
      t>0                     0                          j ∈{1,...,n} 0
A Priori Bounds for Solutions of a Nonlocal Evolution PDE                                                    153

This will be achieved in the following Lemmata 4.4 and 4.5. From the estimate
above, we will obtain a gradient bound via convolution in the forthcoming Theo-
rem 5.3. This and a control on the long-time behaviour will finally provide the proof
of Theorem 1.2.

Lemma 4.4
                                                   
                                       sup N (·, t)L1 < +∞.
                                                               x
                                       t>0

Proof Let
                                          
                                              t 1/(2(a+1))         if t ∈ (0, 1),
                              ω(t) :=                                                                        (26)
                                              t 1/2                if t ∈ [1, +∞).

It is useful to observe that if P , Q : Rn → R are polynomials and
                                      
                                        P (η) if t ∈ (0, 1),
                         P(η, t) :=
                                        Q(η) if t ∈ [1, +∞),

then (21) says that

                                     P(η, t)e−t (|η|/|ω(t)|) (1−S(η/ω(t))) eiη·z dη dz
                                                                       2
             sup
          t∈(0,+∞)       Rn     Rn

                                                         a/(a+1) |η|2 (1−S(t −1/(2(a+1)) η))
              ⩽ sup                       P (η)e−t                                             eiη·z dη dz
                t∈(0,1)       Rn     Rn

                                                                           −1/2 η))
                                                   Q(η)e−|η| (1−S(t
                                                                   2
                +        sup                                                          eiη·z dη dz
                    t∈[1,+∞)         Rn       Rn

              < +∞.                                                                                          (27)

Now, we use the substitution
                                                                         
                                   η := ω(t)ξ,                z := x/ ω(t)                                   (28)

to conclude that
                               1
        N(·, t) 1 =                                    e−t|ξ | (1−S(ξ )) eiξ ·x dξ dx
                                                                2
                    Lx         (2π)n      Rn        Rn
                                 1
                                                         e−t (|η|/|ω(t)|) (1−S(η/ω(t))) eiη·z dη dz.
                                                                           2
                         =
                               (2π)n      Rn        Rn

This and (27) (applied here with P := 1) readily give the desired result.                                      

   A useful result, analogous to Lemma 4.4 is the following:
154                                                                                     L. Caffarelli and E. Valdinoci

Lemma 4.5
                                              1
                                                  N L1x dt < +∞                                                 (29)
                                          0

and
                                                  +∞
                                sup                        ∂j N L1x dt < +∞.                                    (30)
                             j ∈{1,...,n} 0


Proof The proof is an appropriate modification of the one of Lemma 4.4. Let us
first deal with (30). Fix j ∈ {1, . . . , n}. We have that

              
              n
                                                1
                                                                    ξj |ξ |2 e−t|ξ | (1−S(ξ )) eiξ ·x dξ .
                                                                                   2
                    ∂j kk N (x, t) =
                                              (2π)n            Rn
              k=1

Thus, we use once more the substitution introduced in (26) and (28) to obtain that
       n               
                      
                       
         ∂j kk N (·, t)
                        1
        k=1                    Lx

                    1
                                                   ηj |η|2 e−t (|η|/|ω(t)|) (1−S(η/ω(t))) eiη·z dη dz
                                                                                   2
          ⩽
              (ω(t))3 (2π)n          Rn       Rn
               C(j )
          ⩽           ,
              (ω(t))3

for a suitable C(j ) > 0, thanks to (27), applied here with

                                          P(η, t) := ηj |η|2 .

As a consequence,
                                 
             +∞  
                  n                                   +∞ C(j )dt
                                 
                         ∂j kk N  dt ⩽
         0                        1              0            (ω(t))3
                    k=1             Lx
                                                       1       C(j )dt                +∞ C(j )dt
                                              =                           +                            ),
                                                                                                    ⩽ C(j
                                                   0       t   3/(2(a+1))
                                                                                  1        t 3/2

                ) > 0. Notice that here we used the fact that 3/(2(a + 1)) < 1,
for a suitable C(j
thanks to (2). The above estimate implies (30).
    The proof of (29) is analogous and, in fact, much simpler: just consider in
this case only the integral in t ∈ (0, 1), drop ηj , and replace ω3 (t) with ω2 (t) =
t 1/(a+1) .                                                                         
A Priori Bounds for Solutions of a Nonlocal Evolution PDE                         155

5 Gradient Bounds

Now, we apply the previous estimates to deduce a uniform gradient bound:

Theorem 5.3 Let u ∈ W be a solution of
                      
                        ut = (u + g) − L(u),
                                                                                  (31)
                        u(x, 0) = u0 (x),

with g = g(x, t) ∈ L∞ (Rn × [0, +∞)), g(·, t) ∈ C 2 (Rn ) for any t > 0, and ∇u0 ∈
(L∞  n
  x ) .
   Then,
                                                                       
          sup ∇u(·, t)(L∞ )n ⩽ C ∇u0 (L∞     x )
                                                   n + g L∞ (Rn ×(0,+∞))
                                   x
        t∈(0,+∞)

for a suitable C > 0.

Proof Let h(x, t) := (g(x, t)) and h0 (x) := h(x, 0). We remark that, for fixed t >
0, all the terms of the PDE in (31) are in L1loc (Rn ), because of (10). Consequently,
by Fourier transforming (31),

                                           ut = −κ
                                                 u +
                                                     h,

with
                                                          
                                   κ(ξ ) := |ξ |2 1 − S(ξ ) ,

thanks to (11).
   So, by solving the ODE,
                                   t
                   
                   u(ξ, t) =           
                                       h(ξ, s)e−κ(ξ )(t−s) ds + 
                                                                u0 (ξ )e−κ(ξ )t
                               0

and then, by antitransforming,

                                       u = N ∗∗ h + N ∗ u0 ,

where ∗ denotes the convolution in x ∈ Rn and ∗∗ the convolution in x ∈ Rn and t
(up to a finite time).
   As a consequence,

                               ∂j u = ∂j N ∗∗ h + N ∗ ∂j u0 .                     (32)

Now, we recall Lemma 4.4, according to which N (·, t) L1x ⩽ C, for any t > 0, for
a suitable C > 0.
156                                                             L. Caffarelli and E. Valdinoci

   Therefore, for any x ∈ Rn and any t > 0,
                                       
          (N ∗ ∂j u0 )(x, t) ⩽ N (·, t)L1 ∂j u0 L∞
                                                   x
                                                     ⩽ C ∇u0 (L∞
                                                               x )
                                                                  n.                     (33)
                                                 x


   Moreover, possibly renaming C, by (30),
                                     +∞
                                           ∂j N L1x dt ⩽ C,
                                 0

and so, for any x ∈ Rn and any t > 0,

      (∂j N ∗∗ h)(x, t) = (∂j N ) ∗∗ g(x, t)
                            +∞                                       
                        ⩽             (∂j N)(y, s) g(x − y, t − s) dy ds
                             0             Rn
                                 +∞
                        ⩽                 ∂j N L1x g L∞ (Rn ×(0,+∞)) ds
                             0
                        ⩽ C g L∞ (Rn ×(0,+∞)) .                                          (34)

Then, the desired claim follows from (32), (33) and (34).                                  



6 Proof of Theorem 1.2

Let g(x, t) := f (u(x, t)) and h = h(x, t) := g. We observe that, for fixed t > 0,
all the terms of the PDE in (8) are in L1loc (Rn ), due to (10). Therefore, we may
Fourier transform (8) and solve the associated ODE (in analogy with what we did
in the beginning of the proof of Theorem 5.3), to obtain that

                                 u = N ∗∗ h + N ∗ u0 ,

where ∗ denotes the convolution in x ∈ Rn and ∗∗ the convolution in x ∈ Rn and t
(up to a finite time).
   Hence, if we define the heat kernel
                                                1
                                               √ n e−|x| /4t
                                                        2
                            H (x, t) :=
                                             (2 πt)

and

                                          G := N − H,

we obtain that

                                          u = u1 + u2 ,
A Priori Bounds for Solutions of a Nonlocal Evolution PDE                                    157

with

                                        u1 = H ∗∗ h + H ∗ u0                                 (35)

and

                                        u2 = G ∗∗ h + G ∗ u0 .

We remark that

                    1              2         −1/2        
                              e−|η| e|η| S(t η) − 1 eiη·x dη
                                          2

                  (2π)n Rn
                       √ n
                            t                2                
                                      e−t|ξ | et|ξ | S(ξ ) − 1 eiξ ·(t x) dξ
                                                    2                 1/2
                    =
                         2π       R n
                              1/2                       
                    =t  n/2
                              N t x, t − H t 1/2 x, t
                                       
                    = t n/2 G t 1/2 x, t ,

thanks to the substitution ξ := t −1/2 η and to the standard Fourier transform property
of H .
   Therefore, for any t ⩾ 1, by (22),

                                                  
       G(·, t) 1 =             t n/2 G t 1/2 z, t dz
                  L x
                             Rn
                              1                               2       −1/2   
                                                    |η|2 e−|η| e|η| S(t η) − 1 eiη·z dη dz
                                                                   2
                        =
                            (2π)n t       Rn   Rn
                            C0
                        ⩽           ,                                                        (36)
                            t 1+a

for a suitable C0 > 0.
   Now, we give a uniform bound for u2 . For this, first we use Lemma 4.4 (together
with a standard property of the heat kernel) to obtain that

       sup G ∗ u0 (x, t) ⩽ sup N ∗ u0 (x, t) +                   sup      H ∗ u0 (x, t)
       x∈Rn                         x∈Rn                         2
        t>0                          t>0                       x∈Rn t>0
                                                                  
                               ⩽ supN (·, t)L1 u0 L∞
                                                     x
                                                       + supH (·, t)L1 u0 L∞
                                                                             x
                                                      x                            x
                                    t>0                           t>0
                               ⩽ C1 u0 L∞
                                        x
                                          ,                                                  (37)

for a suitable C1 > 0.
158                                                                                   L. Caffarelli and E. Valdinoci

   On the other hand,

                    1                         1                     1       xk e−|x| /(4s)
                                                                                              2
                     ∂k H (·, s) 1 ds =                                                    dx ds
                                 Lx          2n+1 π n/2                         s (n/2)+1
                0                                                 0        Rn

                                                   |z|e−|z| /4        1                   2
                                                1
                                        ⩽              √       dzds ⩽ C2 ,
                                           0 2 π n/2
                                              n+1
                                                Rn       s
                                                     √
for some C2 > 0, where the change of variable z = x/ s was used.
   Accordingly, making use also of Theorem 5.3,

        sup         H ∗∗ h(x, t) = sup           H ∗∗ g(x, t)
       x∈Rn                            x∈Rn
      t∈(0,1]                         t∈(0,1]
                                                     t
                                  ⩽ sup                          H (y, s)g(x − y, t − s)dx ds
                                       x∈Rn      0       Rn
                                      t∈(0,1]
                                                     t
                                  ⩽ sup                          ∇H (y, s) · ∇g(x − y, t − s)dx ds
                                       x∈Rn      0       Rn
                                      t∈(0,1]

                                      
                                      n         1           
                                  ⩽              ∂k H (·, s) 1 ∂k g L∞ ds
                                                                          Lx          x
                                      k=1 0

                                      
                                      n
                                                
                                  ⩽         C2 f  L∞ ([−1,1]) sup |∇u|
                                      k=1                                      x∈Rn
                                                                                t>0
                                  ⩽ C3 ,

for a suitable C3 > 0, and so, recalling (29),

       sup G ∗∗ h(x, t) ⩽ C3 + sup N ∗∗ h(x, t)
       x∈Rn                                  x∈Rn
      t∈(0,1]                               t∈(0,1]
                                                             t
                                ⩽ C3 + sup                                N (y, s)g(x − y, t − s)dx ds
                                             x∈Rn        0        Rn
                                            t∈(0,1]
                                                             t
                                ⩽ C3 + sup                                N (y, s)g(x − y, t − s)dx ds
                                             x∈Rn        0        Rn
                                            t∈(0,1]
                                                 1         
                                ⩽ C3 +            N (·, s) 1 g L∞ (Rn ×(0,+∞)) ds
                                                                          Lx
                                             0
                                ⩽ C3 + C4 f L∞ ([−1,1])
                                ⩽ C5 ,                                                                         (38)
A Priori Bounds for Solutions of a Nonlocal Evolution PDE                                             159

for suitable C4 , C5 > 0.
   From (37) and (38), we conclude that

         sup u2 (x, t) ⩽ sup G ∗∗ h(x, t) + sup G ∗ u0 (x, t) ⩽ C6 ,                                  (39)
        x∈Rn                 x∈Rn                                  x∈Rn
       t∈(0,1]              t∈(0,1]                               t∈(0,1]

for a suitable C6 > 0, and our goal is now to bound u2 when t ⩾ 1.
   For this, we use again (38) to obtain the following estimate:
                                            t                                           
    sup G ∗∗ h(x, t) = sup                             G(y, s)h(x − y, t − s)dy ds
    x∈Rn                    x∈Rn        0         Rn
     t⩾1                     t⩾1
                                            1                                           
                         ⩽ sup                         G(y, s)h(x − y, t − s)dy ds
                            x∈Rn        0        Rn
                             t⩾1
                                       t                                            
                             +                    G(y, s)h(x − y, t − s)dy ds
                                   1         Rn
                                                      t                                          
                         ⩽ C5 + sup                             G(y, s)g(x − y, t − s)dy ds .
                                       x∈Rn       1        Rn
                                        t⩾1

As a consequence, recalling (36),
                                                                              t       
           sup G ∗∗ h(x, t) ⩽ C5 + f L∞ ([−1,1]) sup                          G(·, s) 1 ds
                                                                                             Lx
           x∈Rn                                                     t⩾1 1
            t⩾1
                                                                         +∞    C0
                               ⩽ C5 + f L∞ ([−1,1])                                 ds
                                                                     1        s 1+a
                               ⩽ C7 ,                                                                 (40)

for a suitably large C7 .
   This and (37) imply that

           sup u2 (x, t) ⩽ sup G ∗∗ h(x, t) + sup G ∗ u0 (x, t) ⩽ C8 ,
           x∈Rn              x∈Rn                                x∈Rn
            t⩾1               t⩾1                                 t⩾1

for some C8 > 0, and so, in the light of (39),

                                 sup u2 (x, t) ⩽ C6 + C8 .                                            (41)
                               x∈Rn
                                t>0

Having completed the uniform bound on u2 , our goal is now to bound u1 . Though
this will be obtained by following almost verbatim the argument on pages 141–143
160                                                                         L. Caffarelli and E. Valdinoci

of [1], we provide full details for the convenience of the reader. Exploiting (41), we
can define

                             m := 1 + sup u0 (x) + sup u2 (x, t) .
                                      x∈Rn             x∈Rn
                                                        t>0

We claim that

                                    sup u1 (x, t) ⩽ 2m + 1.                                          (42)
                                   x∈Rn
                                    t>0

The proof of (42) is by contradiction, hence we assume, say, that

                                    sup u1 (x, t) > 2m + 1.
                                    x∈Rn
                                     t>0

   Therefore, there exists T > 0 for which

                    S := (x, t) ∈ Rn × [0, T ) s.t. u1 (x, t) > 2m + 1

is not empty.
    Notice that

            inf |u| ⩾ inf |u1 | − sup |u2 | ⩾ (2m + 1) − m = m + 1 > 1.
             S               S         S

So, if (x, t) ∈ S, we have that h(x, t) = f (u(x, t)) = 0, thanks to (6), and there-
fore, by (35),

                                      u1 = H ∗ u0       in S.                                        (43)

That is, since H is the heat kernel,

                                      ∂t u1 = u1      in S.                                         (44)

Moreover, since u ∈ W , we have that the map t → u(0, t) belongs to C 0 ([0, +∞))
⊆ L∞ ([0, T ]), hence
                                                    ),
                                     sup u(0, t) ⩽ C(T
                                    t∈[0,T ]

                ), and therefore, exploiting (41) and Theorem 5.3,
for a suitable C(T

                   sup u1 (x, t) ⩽ sup u2 (x, t) + sup u(x, t)
                   x∈Rn                     x∈Rn                      x∈Rn
                  t∈[0,T ]                 t∈[0,T ]                  t∈[0,T ]
                                                                                    
                                     ⩽ C6 + C8 + sup                 u(0, t) + C9 |x|
                                                      t∈[0,T ]
                                                   
                                     ⩽ C(T ) 1 + |x| ,                                               (45)

for a suitable C(T ) > 0.
A Priori Bounds for Solutions of a Nonlocal Evolution PDE                       161

   For any δ ∈ (0, 1), we define
                                                                    
                                                           |x|2
                          uδ (x, t) := u1 (x, t) − δ            +t
                                                            2n

and

                 Sδ := (x, t) ∈ Rn × [0, T ) s.t. uδ (x, t) > 2m + 1 .

It is easily seen that

                                         Sδ ⊆ S,                               (46)

and so, from (44),

                                  ∂t uδ = uδ      in Sδ .                     (47)

Notice also that
                                               
                 uδ = 2m + 1 on ∂ Sδ ∩ {t = t0 } , for any t0 ⩽ T .            (48)

Furthermore,

                             Sδ ⊆ B(2+4nC(T ))/δ × [0, T ].                    (49)

To prove (49), just take (x, t) ∈ Sδ with |x| ⩾ 4nC(T )/δ, and use (45) to deduce
that
                                                        2      
                                                        |x|
                0 ⩽ 2m + 1 ⩽ uδ (x, t) ⩽ u1 (x, t) − δ       +t
                                                         2n
                                    δ|x|2           C(T )|x|
                     ⩽ C(T ) 1 + |x| −      ⩽ C(T ) −          ,
                                       2n                2
hence |x| ⩽ 2, which proves (49).
   In fact, (49) can be improved as follows:

                             Sδ ⊆ B(2+4nC(T ))/δ × [μ, T ],                    (50)

for a suitable μ > 0.
   To prove (50), we argue by contradiction, supposing that there exists a se-
quence (xj , tj ) ∈ Sδ , with tj → 0+ as j → +∞. By (49), we may suppose
that xj → x∞ as j → +∞. Since, recalling (43) and (46), we have that u1 (xj , tj ) =
H ∗ u0 (xj , tj ), we obtain that

                     2m + 1 ⩽ lim uδ (xj , tj ) ⩽ lim u1 (xj , tj )
                                j →+∞                  j →+∞

                             = H ∗ u0 (x∞ , 0) = u0 (x∞ ) ⩽ m.
162                                                                 L. Caffarelli and E. Valdinoci

This contradiction proves (50).
  Now, we show that

                           Sδ is empty,      for any δ ∈ (0, 1).                             (51)

Suppose the contrary, hence Sδ is nonempty for some fixed δ ∈ (0, 1). For any j ∈ N,
j ⩾ 10, let
                                                        t
                                uj (x, t) := uδ (x, t) − .
                                                        j

By (50), we can take (xj , tj ) ∈ Sδ such that

                                  uj (xj , tj ) = max uj .                                   (52)
                                                    Sδ

Up to subsequence, we may and do suppose that

                      (xj , tj ) lies in the interior of Sδ ∩ {t = tj },                     (53)

otherwise (48) would give that

  2m + 1 = lim uj (xj , tj ) ⩾ lim uj (x, t) = uδ (x, t)               for any (x, t) ∈ Sδ ,
              j →+∞                  j →+∞

which would say that Sδ is void.
   Analogously, up to subsequence, we may and do suppose that for any j there
exists τj > 0 such that

                        (xj , tj − s) ∈ Sδ     for any s ∈ [0, τj ],                         (54)

otherwise, for fixed j , we would have that (xj , tj − η ) ∈/ Sδ for a suitable infinites-
imal sequence η , and so, recalling (50), uδ (xj , tj − η ) ⩽ 2m + 1, hence

              2m + 1 ⩾ lim          lim uδ (xj , tj − η )
                          j →+∞ →+∞
                                                                           tj
                       = lim uδ (xj , tj ) = lim uj (xj , tj ) +
                          j →+∞                  j →+∞                     j
                       ⩾ lim uj (x, t) = uδ (x, t)           for any (x, t) ∈ Sδ ,
                          j →+∞

which, once more, would say that Sδ is void.
  As a consequence of (52) and (53), we have that

                                     uj (xj , tj ) ⩽ 0,

while the use of (54) gives that

                                     ∂t uj (xj , tj ) ⩾ 0.
A Priori Bounds for Solutions of a Nonlocal Evolution PDE                                       163

Therefore,
                                                                                    1
         0 ⩽ ∂t uj (xj , tj ) − uj (xj , tj ) = ∂t uδ (xj , tj ) − uδ (xj , tj ) − .
                                                                                    j
This is in contradiction with (47), and so (51) is proved.
  Since
                                         
                                    S=        Sδ ,
                                              δ∈(0,1)

we obtain that S has to be empty as well. This contradiction proves (42).
  Then, (41) and (42) imply (9) and the proof of Theorem 1.2 is thus completed.

Acknowledgements The first author is supported by NSF grants. The second author is supported
by ICES Oden Fellowship, FIRB A&B Analysis and Beyond and ERC ε Elliptic PDE’s and Sym-
metry of Interfaces and Layers for Odd Nonlinearities. Part of this work was performed while the
second author was visiting UT, the very warm hospitality of which has been greatly appreciated.




References
1. Caffarelli, L.A., Muler, N.E.: An L∞ bound for solutions of the Cahn-Hilliard equation. Arch.
   Ration. Mech. Anal. 133(2), 129–144 (1995)
2. Frigeri, S., Grasselli, M.: Global and trajectory attractors for a nonlocal Cahn-Hilliard-Navier-
   Stokes system (2012). Preprint. http://arxiv.org/abs/1107.5933
3. Gal, C.G., Grasselli, M.: Longtime behavior of nonlocal Cahn-Hilliard equations (2012).
   Preprint. http://arxiv.org/abs/1207.4018
4. Giacomin, G., Lebowitz, J.L.: Phase segregation dynamics in particle systems with long range
   interactions. I. Macroscopic limits. J. Stat. Phys. 87(1–2), 37–61 (1997)
5. Liu, G.: Existence of solution to initial-boundary value problems of the Cahn-Hilliard equation
   with nonlocal terms. J. Math. Res. 1(2), 179 (2009). http://ccsenet.org/journal/index.php/jmr/
   article/download/3787/3398
6. Stein, E.M.: Singular Integrals and Differentiability Properties of Functions. Princeton Mathe-
   matical Series, vol. 30, Princeton University Press, Princeton (1970), xiv+290 pp.
7. Valdinoci, E.: From the long jump random walk to the fractional Laplacian. Bol. Soc. Esp. Mat.
   Apl. 49, 33–44 (2009)
On the Numerical Analysis of Adaptive
Spectral/hp Methods for Elliptic Problems

Claudio Canuto and Marco Verani




                                         The transcendental is not infinite and unattainable tasks,
                                       but the neighbor who is within reach in any given situation.
                                                                                  (D. Bonhoeffer)



Abstract We provide an overview of the state of the art of adaptive strategies for
high-order hp discretizations of partial differential equations; at the same time, we
draw attention on some recent results of ours concerning the convergence and com-
plexity analysis of adaptive algorithm of spectral and spectral-element type. Com-
plexity is studied under the assumption that the solution belongs to a sparsity class
of exponential type, which means that its best N-term approximation error in the
chosen piecewise polynomial basis decays at an exponential rate with respect to N .


1 Introduction
The present authors are some generations apart, yet both of them have been deeply
influenced by the gigantic human and professional figure of Enrico Magenes; this
paper is a modest yet heartfelt tribute to his memory.
    On the scientific ground, professor Magenes not only gave outstanding contri-
butions to the mathematical theory of partial differential equations, but he was a
pioneer in fostering the development of a Computational Mathematics at the same
time soundly tied to functional analysis and strongly immersed in real-life appli-
cations. The “Laboratorio di Analisi Numerica”, that he founded in Pavia in the
Seventies and directed for several decades, had a paramount impact on the Italian


C. Canuto (B)
Dipartimento di Scienze Matematiche, Politecnico di Torino, Corso Duca degli Abruzzi 24,
10129 Turin, Italy
e-mail: claudio.canuto@polito.it

M. Verani
MOX-Dipartimento di Matematica, Politecnico di Milano, P.zza Leonardo da Vinci 32, 20133
Milan, Italy
e-mail: marco.verani@polimi.it

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,              165
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_11,
© Springer-Verlag Italia 2013
166                                                              C. Canuto and M. Verani

Applied Mathematics community, and soon become a recognized reference for the
whole international community.
    Enrico Magenes was able to create, and maintain over the years, a scientific en-
vironment extremely open and favorable to the development and exchange of new
ideas. Many young researchers have been attracted by that atmosphere; some of
them, such as the senior author (CC), had the chance to become members of that
institution, and bring everlasting gratitude for the opportunity they had of being ex-
posed day by day to the charismatic personality of the founder; some others, such
as the junior author (MV), have remained fascinated and deeply influenced by his
human and scientific legacy.
    Enrico Magenes was always very careful in granting freedom of research to the
members of his group, the only conditions to respect being the quality and the in-
terest of the undertaken investigations. Good projects pushed forward by younger
collaborators had the chance of being supported as more mature lines of research.
The onset of interest for spectral methods, which are the object of the present contri-
bution, at the “Laboratorio” in the early Eighties is precisely an example of this fa-
vorable environment. Influenced by a stimulating visit at the “Laboratoire d’Analyse
Numérique” (created in Paris by Magenes’ coworker and friend Jacques-Louis Li-
ons), Alfio Quarteroni initiated a fruitful and long-lasting collaboration with the
present senior author on the numerical analysis of spectral and high-order methods
for boundary-value problems; while in the early stage the scientific guidance was
provided by Franco Brezzi, the full and continuous strategic and logistic support
granted by professor Magenes was certainly a key ingredient for the success of that
research.
    Since then, high-order methods such as spectral(-element) methods or the hp-
version of finite element methods (the two categories being often hardly distinguish-
able from each other) have reached their maturity, both in the full understanding of
their theoretical properties and in the penetration into the scientific computing prac-
tices, in various applicative environments (see, e.g., [12, 13, 50]). Yet, some relevant
aspects of these methods are still far from being in a satisfactory shape, and deserve
further investigations. An example is given by the so-called hp-adaptivity; indeed,
even for steady problems, a full and rigorous understanding of the selection strate-
gies between h-refinement and p-enrichment, and their influence on the complexity
and optimality of the related algorithms, is still lacking.
    The purpose of the present paper is to provide a soft overview of the state of the
art of adaptive strategies for high-order discretizations of partial differential equa-
tions; at the same time, we aim at drawing attention on some recent results of ours
concerning the convergence and complexity analysis of adaptive algorithm of spec-
tral and spectral-element type.
    We begin by recalling various approximation results which show that a proper
choice of the mesh and the polynomial degree distribution over the mesh guarantees
an exponential decay of the error even if the solution of the equation exhibits singu-
larities inside the domain or at the boundary, provided their position is known. The
free parameter is the cardinality of the set of active degrees of freedom. An elemen-
tary derivation is detailed, in the case of algebraic singularity or piecewise analytic-
ity. Obviously, such results on optimal “a-priori adaptivity” constitute a benchmark
Adaptive Spectral/hp Methods for Elliptic Problems                                   167

for the “a-posteriori” adaptive strategies, which need to detect the singularities and
properly allocate the degrees of freedom around them. Thus, we are led to review
the main error estimators proposed in the literature for hp methods, and the various
adaptation strategies which exploit their information. While the number of different
strategies is fairly large, with different mathematical sources and different practical
performances, very few algorithms can be rigorously proven to be convergent, with
a precise estimate of their rate of convergence. The situation becomes even worse if
complexity or cost issues are to be taken into account.
    In this respect, we devote the second part of the paper to illustrate some recent
results we have obtained in collaboration with Ricardo H. Nochetto; we consider
adaptive spectral methods of Legendre type, and actually we extend them to cover
the case of spectral-element discretizations (or p-type finite elements). A represen-
tative algorithm (out of several possible variants) is described, and its convergence
properties are discussed. Furthermore, we investigate its complexity, by comparing
the output of the algorithm with the best possible approximation of the exact solu-
tion in the chosen piecewise polynomial basis, for the same accuracy—this point
of view being related to the so-called “best N -term approximation” of a function.
The novelty of the analysis, compared to the available results in the literature, is that
optimality is discussed with respect to an assumed exponential (or sub-exponential)
decay of the best N -approximation error; this assumption appears indeed to be co-
herent with the use of spectral-type methods in the discretization of the boundary-
value problem.

Notation Throughout the paper, by A  B we mean that the quantity A can be
bounded by a multiple of B, the multiplicator being independent of those parameters
A and B may depend on. Likewise A ≃ B means A  B and B  A, whereas A ∼ B
means A = B + o(B), with o(B) negligible with respect to B.



2 From Approximation Theory to a-Priori Adaptive hp Methods

We begin by recalling some classical results concerning the approximation of a
univariate function having Sobolev or analytical regularity, by means of algebraic
polynomials. These estimates will be useful in the subsequent analysis of piecewise
polynomial approximation.
   Let I denote the reference interval (−1, 1). If v belongs to the Sobolev space
H m (I ), m ≥ 0, then

                            inf      v − wL2 (I ) ≤ C(v, m)p−m ,                   (1)
                         w∈Pp (I )

where the positive constant C(v, m) can be bounded by the norm of v in H m (I ) (ac-
tually, the bound holds under weaker assumptions, see, e.g., [12, 50]). On the other
hand, if v can be extended to an analytic function on the closed ellipse E(−1, 1; σ )
168                                                                  C. Canuto and M. Verani

in the complex plane having foci at z = ±1 and semiaxes’ sum σ > 1, then setting
η = log σ one has

                           inf     v − wL2 (I ) ≤ C(v, η)p −1/2 e−ηp                  (2)
                       w∈Pp (I )

(see, e.g., [30, 50]). A different estimate involves the maximum modulus of v over
the ellipse E(−1, 1; σ ) and reads as follows:
                                                   1 −ηp               
                 inf       v − wL2 (I ) ≤ C          e    max v(z)                  (3)
               w∈Pp (I )                        sinh η   z∈E(−1,1;σ )

(see, e.g., [12]).
    The previous results can be easily combined to provide bounds of the approxi-
mation error for piecewise smooth functions on a finite partition of the domain by
piecewise polynomials; in such cases, the estimates involve not only the polynomial
degrees but also the sizes of the subdomains. Less trivial is the problem of express-
ing the error in terms of the total number, say N , of employed degrees of freedom,
and, even more, of optimizing the allocation of degrees of freedom for a given target
accuracy. This is precisely the crucial problem of hp adaptivity.
    The earliest attempts to study the adaptive approximation of a univariate function,
having a finite number of singularities and otherwise smooth, by means of piecewise
polynomials of variable degree dates back to the late Seventies, with the pioneering
works [20] and [24] (see also [21] and the references therein).
    In [20], the best N -term approximation of a univariate function in the maximum
norm by piecewise polynomials of variable degree is studied, and in particular it is
proven that for certain classes of analytic functions the best N -term approximation
is achieved by a single polynomial over the entire domain. On the other hand, [24]
deals with functions with singularities of the type x α near the origin, and proves
that a proper combination of graded mesh and linear increase of polynomial degrees
(see below) yields exponential
                            √     decay of the best N -term approximation error, with
exponent proportional to N .
    This result influenced Gui and Babuška [30] in their study of the convergence
rate of the hp approximation to a model elliptic problem in 1D. As usual, a Céa
Lemma argument reduces the problem to estimate the best N -term approximation
error in the energy norm. Let us give some detail.
    Let Ω = (0, 1). Suppose that the solution u of the underlying elliptic PDE is real
analytic in (0, 1] and behaves like u(x) = x α for some α > 1/2. Consider a partition
of Ω into contiguous intervals Kj (0 ≤ j ≤ J ) and a corresponding distribution of
polynomial degrees pj ≥ 1. Define the subspace
                                                                  
                    Vδ = v ∈ H 1 (Ω) : v|Kj ∈ Ppj (Kj ), 0 ≤ j ≤ J .                (4)

Let us assume that the mesh is geometrically graded towards 0, i.e., there exists
0 < ρ < 1 such that
                                                            
              Kj = ρ j +1 , ρ j   for 0 ≤ j < J,   KJ = 0, ρ J ,              (5)
Adaptive Spectral/hp Methods for Elliptic Problems                                   169

whereas the polynomial degrees grow linearly away from 0, i.e.,
                                                
                           pj = max 1, λ(J − j )                                     (6)

for some λ > 0. Under these assumptions, there exists λ such that one has for N =
dim Vδ
                                                           √
                             inf u − vδ H 1 (Ω) ≤ Ce−b N ,                         (7)
                            vδ ∈Vδ

where √the constants C > 0 and b > 0 are independent of N . In particular, the choice
ρ ∗ = ( 2 − 1)2 for the grading factor is optimal for any α.
    The result can be extended to more general functions; in particular, to those be-
longing to the class Bβ (Ω) for = 1, 2 and some β ∈ (0, 1); these are the functions
u ∈ H −1 (Ω) such that, setting Φγ (x) = |x|γ , the functions Φβ+k− D k u belong to
L2 (Ω) for any k ≥ , and there exist constants C > 0 and d ≥ 1 for which

                          Φβ+k− D k u L2 (Ω) ≤ Cd k−l (k − l)!.                      (8)

    Based on the previously described a-priori analysis, Gui and Babuška [31] pro-
posed what is probably the first hp adaptive algorithm (see also Sect. 3.2 below).
Given an elemental error estimator satisfying suitable assumptions, the elements of
the partition on which the error estimator is larger than a fixed fraction of the largest
estimator are marked for refinement/enrichment; by inspecting the ratio between
two error estimators on the marked interval with two consecutive polynomial de-
grees, it is decided whether to divide the interval into two parts carrying the same
polynomial degree as before, or to keep the interval unchanged but increase the
polynomial degree by one. The algorithm is proven to be convergent, with a pre-
dicted rate. However, the assumptions on the admissible error estimators appear to
be overly restrictive, essentially they are taylored on the x α -type singularity, for
which indeed the algorithm produces a nearly optimal discretization.
    In 2D, the counterpart of the previous a-priori analysis is as follows. Consider
a bounded polygon Ω, having the origin 0 as a vertex. Let u be the solution of an
elliptic problem in Ω, which is real analytic in Ω \ {0} and behaves like |x|α as
|x| → 0. Consider a conforming and regular partition of Ω by J layers of elements
around the origin; all the elements in the j -th layer have diameter of the order of ρ j
for some fixed 0 < ρ < 1. Assume that all elements in the j -th layer carry polyno-
mial degrees of the order of pj , with pj = max(1, [λ(J − j )]) for some λ > 0. Let
the subspace Vδ ⊂ H 1 (Ω) be defined in the standard way, and let again N = dim Vδ .
Then, the following error bound is proven in [32, 33]:
                                                           √
                                                           3
                             inf u − vδ H 1 (Ω) ≤ Ce−b     N
                                                                 ,                   (9)
                            vδ ∈Vδ

with C > 0 and b > 0 independent of N . The result extends to solutions in the class
Bβ2 (Ω), locally defined in a neighborhood of each vertex in a manner similar as
above. This is relevant, since the solution of elliptic problems in Ω with data having
170                                                                    C. Canuto and M. Verani

suitable piecewise-analytic regularity can be shown to belong to such a class, see
[5].
   The situation in 3D is more complex, since in polyhedra singularities occur not
only at vertices, but also along edges. Thus, an adapted mesh has a different struc-
ture in different regions of the domain, to accommodate for the local structure of
the solution: it is quasi-uniform away from the boundary, it is isotropically graded
towards a vertex, it is anisotropically graded towards the central part of an edge (be-
ing quasi-uniform in the tangential direction), and finally it has a transitional nature
near the portion of an edge that gets close to a vertex. Then, a proper distribution of
the polynomial degrees over such a mesh guarantees the following behavior of the
best-approximation error vs the dimension N of the corresponding subspace Vδ , for
the solution u of an elliptic problem in a polyhedron, with piecewise analytic data:
                                                             √
                                                             5
                           inf u − vδ H 1 (Ω) ≤ Ce−b         N
                                                                   ,                     (10)
                          vδ ∈Vδ

again with C > 0 and b > 0 independent of N . The result (that should be compared
to (7) in 1D and (9) in 2D) was first asserted by Guo and Babuška [6]; for the
proof, we refer to [48, 49], where both Continuous- and Discontinuous-Galerkin
hp discretizations are considered. The analysis relies on very accurate estimates of
suitable weighted norms of the solution, of the type (8); we refer to [34] and to the
more recent and comprehensive result [19].



2.1 An Elementary Analysis of hp Approximations over Dyadic
    Partitions

Herafter, we use elementary arguments based on the repeated application of the
error estimate (3) in order to establish the exponential convergence of suitable hp
approximations over dyadic partitions to singular functions or piecewise-analytic
functions in one space dimension.
    To this end, given real numbers r < s and σ > h := s − r, let E(r, s; σ ) denote
the closed ellipse in the complex plane having foci at z = r, s and semiaxes’ sum
σ ; let us set c = (r + s)/2 and f = h/2. Let v be a function defined on the interval
(r, s) of the real line, that can be extended to an analytic function on the closed
ellipse E(r, s; σ ). Then, if we apply the change of variable

                                      x−c              y
                               x̂ =       ,     ŷ =     ,
                                       f               f

it is easily seen that the function v̂ such that v̂(x̂) = v(x) = v(c + f x̂) is defined
on the reference interval I = (−1, 1) and can be extended to an analytic function
on the closed ellipse E(−1, 1; σ̂ ) with σ̂ = σ/f . Thus, we can apply the bound (3)
Adaptive Spectral/hp Methods for Elliptic Problems                                            171

with η = log σ̂ = log σ − log f , to obtain

              inf        v − wL2 ((r,s)) = h1/2            inf      v̂ − ŵL2 (I )
          w∈Pp ((r,s))                                   ŵ∈Pp (I )
                                                          1 −ηp                      
                                                ≤ Ch1/2       e        max v̂(z)
                                                       sinh η       z∈E(−1,1;σ̂ )
                                                    1/2 1
                                                                                   
                                                = Ch          e −ηp
                                                                      max v(z).             (11)
                                                       sinh η       z∈E(r,s;σ )



The Case of an Algebraic Singularity

Let Ω = (0, 1). Suppose again that the solution u is real analytic in (0, 1] and be-
haves like u(x) = x α for some α > 1/2. Let us consider the subspace of L2 (Ω)
defined similarly to (4), i.e.,
                                                               
                 Vδ = v ∈ L2 (Ω) : v|Kj ∈ Ppj (Kj ), 0 ≤ j ≤ J ,                (12)

where the Kj are defined in (5) with ρ = 12 and the pj are to be determined in the
sequel. If vδ denotes any function in Vδ , we split the approximation error as
                                                     J
                           u − vδ 2L2 (Ω) =              uj − vj 2L2 (K )
                                                                                  j
                                                    j =0

with uj = u|Kj and vj = vδ|Kj . For j = J , we take as vJ the linear interpolant of
uJ . This yields, with hJ = 2−J ,
                                         hJ           2
          uJ − vJ 2L2 (K ) ≃              s α − hα−1       2α+1
                                                   J s ds ≃ hJ    ≃ 2−(2α+1)J .
                             J
                                     0

Consider now any interval Kj with 0 ≤ j < J and set hj = 2−(j +1) . We can think
uj as a real analytic function in Kj which can be extended to an analytic function in
any closed ellipse E(ρ j +1 ρ j ; σ ) with σ < σj = 32 hj . Hence, setting σ̂j = σj /fj =
( 32 hj )/( 12 hj ) = 3 and ηj = log σ̂j = log 3, we can apply (11) in Kj and find vj ∈
Ppj (Kj ) such that
                                                                                        
               uj − vj 2L2 (K ) ≤ Chj e−2ηpj                     max            uj (z)2
                                 j                         z∈E(ρ j +1 ρ j ;σj )
                                                                                         ∗
                                     ≤ C(u)hj e−2ηpj = C(u)2−(j +1+η pj ) ,

with η∗ = 2(log2 e) η.
   Let λ, μ be fixed constants ≥ 0 such that λ + μ = 1. Then,
                                          J −1
                                                                       ∗
               u − vδ 2L2 (Ω) ≤ C              2−λj 2−(μj +1+η pj ) + 2−(2α+1)J .
                                          j =0
172                                                                C. Canuto and M. Verani

Let us enforce that
                               u − vδ 2L2 (Ω) ≤ C2−2M
for any given M. The bound on the error given above suggests to choose J ∼
2M/(2α + 1) as well as μj + η∗ pj ∼ 2M, i.e., pj ∼ (2M − μj )/η∗ . With such
choices, it is readily seen that the total number N of activated degrees of freedom
satisfies
                                             J
                                    N=           pj ≃ M 2 ,
                                         j =0
         √
i.e., M ≃ N . We conclude that the best approximation error satisfies
                                                              √
                            inf u − vδ L2 (Ω) ≤ Ce−b N                             (13)
                           vδ ∈Vδ

for some b > 0, i.e., a bound of the same type as (7). Note that the definition of pj
given above is of the same type as (6).
   The best approximation error in the H 1 (Ω)-norm can be estimated in a similar
manner.


The Case of a Piecewise-Analytic Function

Assume now that u is a piecewise analytic function in Ω. It is not restrictive to
assume the existence of just one singular point, say xs ∈ Ω. Thus, both ul := u|[0,xs ]
and ur := u|[xs ,1] can be extended to analytic functions in a neighborhood of their
intervals of definition in the complex plane.
    With the aim of mimiking an adaptive algorithm which detects the position of
the singularity by some error indicator, we consider the approximation procedure
that generates a dyadic partition of Ω by recursively halving the subinterval which
contains the singular point xs . Obviously, if xs itself is a dyadic point, the procedure
stops after a finite number of subdivisions, and we are just required to approximate
by polynomials a finite number of analytic functions over a partitions of Ω; then, it
is enough to apply (11) to each of them. If xs is not a dyadic point, then at iteration
J ≥ 0 of the recursive algorithm we have a partition of the domain into J + 1 subin-
tervals Kj , such that hj := |Kj | = 2−j for 0 ≤ j ≤ J , and such that KJ is the only
interval containing xs . Let us set uj := u|Kj .
    If uJ is of class C In the interval KJ , for some ≥ −1 ( = −1 meaning that
uJ has a jump at xs ), then we can find a polynomial vJ of degree + 1 such that

                       uJ − vJ 2L2 (K ) ≃ hJ2 +3 ≃ 2−(2 +3)J .
                                         J

On the other hand, in any interval Kj with 0 ≤ j < J , uj is a real analytic function
which can be extended to an analytic function in some closed ellipse E(rj , sj ; σj )
where Kj = [rj , sj ] and σj ≃ 1 depending on the size of the ellipse of analyticity of
Adaptive Spectral/hp Methods for Elliptic Problems                                          173

either ul or ur . In view of applying (11) in Kj we observe that fj = hj /2 = 2−(j +1) ,
so that ηj = log(σj /fj ) ≃ a + bj and sinh ηj ∼ 12 eηj ≃ 2j . Hence,
                                                                              
         uj − vj 2L2 (K ) ≤ Chj e−2ηj pj                max           uj (z)2
                            j                        z∈E(rj ,sj ;σj )
                                                                                    ∗   ∗
                                ≤ C(u)2−3j e−2(a+bj )pj = C(u)2−(3j +(a +b j )pj )

with a ∗ = a log2 e and b∗ = b log2 e. Summing-up, we obtain

                                          J −1
                                                                ∗       ∗
             u − vδ 2L2 (Ω) ≤ C                2−j 2−(2j +(a +b j )pj ) + 2−(2 +3)J .
                                          j =0

Let us enforce that
                                    u − vδ 2L2 (Ω) ≤ C2−2M

for any given M. The bound on the error given above suggests to choose J ∼
2M/(2 + 3) as well as 2j + (a ∗ + b∗ j )pj ∼ 2M, i.e., pj ∼ 2(M − j )/(a ∗ + b∗ j ).
With such choices, it is readily seen that the total number N of activated degrees of
freedom satisfies
                        J                J −1
                                                 M −j
                 N=             pj ≃                       ≃ M log J ≃ M log M,
                                                a ∗ + b∗ j
                       j =0              j =0

i.e., M ≃ φ(N), where x = φ(y) is the inverse function of y = x log x for x ≥ 1.
We conclude that the best approximation error satisfies

                                 inf u − vδ L2 (Ω) ≤ Ce−bφ(N )                            (14)
                                vδ ∈Vδ

for some b > 0. The result indicates that the behavior of the best approximation
error in the presence of piecewise analyticity is only marginally worse than the one
in the case of full analyticity, see (7).
    Again, the best approximation error in the H 1 (Ω)-norm can be estimated in a
similar manner.



3 hp Adaptivity

Over the last few decades, adaptive algorithms have become a standard technique
for solving partial differential equations via the finite element method. The general
form of an adaptive algorithm can be stated as follows:

      · · · → SOLVE → ESTIMATE → MARK → ENRICH → SOLVE → · · · .
174                                                             C. Canuto and M. Verani

Generally speaking, the algorithm starts computing the discrete solution (SOLVE)
employing a low-dimensional approximation space. Thereafter, in order to improve
the accuracy of the approximation, an error indicator is employed (ESTIMATE) to
obtain information about the error distribution. Based on this error distribution, a
set of elements are flagged (MARK) to be enriched and a suitable enrichment of the
approximation space is chosen (ENRICH). A new approximation of higher accuracy
is computed and a new adaptive iteration is performed in case the approximation is
not sufficiently accurate. In the adaptive h-FEM, the enrichment of the finite ele-
ment space is simply done by subdividing into smaller elements all those elements
with a large error indicator. However, in the hp-FEM one has the option to split an
element or to increase its approximation order. Thus, as already pointed out, a main
difficulty in hp-adaptivity is to decide whether to increase the approximation order
p or to split an element whose error is large. The importance of making the correct
decisions is highlighted by the a priori results mentioned in Sect. 2, from which it is
evident that for a large class of problems an exponential rate of convergence can be
achieved if the mesh and the polynomial degree distribution are chosen suitably.
    Although considerable progress has been made in the context of adaptive h-FEM
on both the a posteriori error analysis and the theoretical and computational assess-
ment of the convergence properties of the adaptive refinement strategies (see, e.g.,
[43] for a comprehensive introduction), in contrast the theory of adaptive hp-FEM
is far less advanced. Below we provide a brief review of existing a-posteriori hp
error estimates (Sect. 3.1) and hp adaptive methods (Sect. 3.2).



3.1 A-Posteriori hp Error Estimates

In the hp framework, similarly to the case of h-FEM, error indicators can be subdi-
vided into the following categories:
• Estimators based on the (approximate) solution of suitably defined local prob-
  lems. This includes [1–4, 44]. The estimators of [1–4] are based on solving lo-
  cal problems with Neumann type boundary conditions; a forerunner of this ap-
  proach is [44]. Additionally, [44] discusses in detail other techniques known from
  h-FEM that can be extended to the hp-context such as solving local Dirichlet
  problems on patches, employing duality theory from convex optimization to de-
  rive upper and lower bounds of the local errors and employing various interpola-
  tion/postprocessing techniques to obtain more accurate approximations.
      At this point, we also mention the equilibrated residual estimators introduced
  in [10]. Although the method of [10] uses equilibrated fluxes, it differs from esti-
  mators via local Neumann problems as the estimators are obtained by the hyper-
  circle method.
• Residual based a-posteriori error estimators. In the pioneering work [8], a pos-
  teriori error indicators of residual type have been considered. However, the two-
  dimensional analysis of [8] is restricted to meshes consisting of axiparallel rect-
  angles. In [40] the results of [8] are extended to meshes containing quadrilaterals
Adaptive Spectral/hp Methods for Elliptic Problems                                  175

  and triangles and a family ηα , α ∈ [0, 1], of error indicators given by weighted
  residuals on the elements and on the edges is introduced. It is shown that η0 is
  reliable. As in [8], the reason for considering a family of indicators is that simul-
  taneous reliability and efficiency cannot be proved for any fixed α ∈ [0, 1] due
  to the poor p-dependence of polynomial inverse estimates. For a related residual
  based a posteriori error estimate in one dimension, see also [47].
• Estimators based on more accurate approximate solutions of the global problem.
  This approach is based on the following steps: (1) a reference (finer) solution
  is computed by performing a global hp-refinement, i.e., breaking each element
  isotropically and enriching the polynomial order of approximation by one; (2) an
  error indicator is built by computing (and localizing) a suitable projection-based
  interpolation error of the reference solution. Roughly speaking, the indicator is
  computed by projecting the reference solution onto a finite element space em-
  ploying the original mesh, but with a local polynomial degree incremented by
  one, as well as on a sequence of finite element spaces corresponding to a local
  h-refinement of the element that results in the same increase in the number of
  degrees of freedom as the p-enrichment. This approach has been introduced in
  [23] and further developed in [38].
   Finally, we refer to [35] for goal-oriented hp-type error estimators.



3.2 Adaptive hp Methods

Classical h adaptive finite element methods simply subdivide elements where the
local error indicator is large, while keeping the polynomial degree fixed (at some
low value). In general, this may not be the most efficient strategy in terms of error
reduction per unit cost. For example, if the analytical solution to the underlying
partial differential equation is smooth, or at least locally smooth, an enrichment of
the polynomial degree (p-refinement) may be much more effective in reducing the
local error per unit cost than a simple element subdivision (h-refinement). Generally
speaking, a local p-refinement is expected to be more efficient on elements where
the solution is smooth, while local h-refinement is preferable for regions where the
solution is not smooth.
    In the following we will briefly review existing hp adaptive strategies. In particu-
lar, we will highlight the mechanism driving the choice between h or p refinement.
1. Optimization strategy based on reference solution. In this strategy a reference
   solution is computed on a finer finite element space, which is obtained by uni-
   formly refining all the elements and globally incrementing the polynomial degree
   by one. Then, on each element in the coarser finite element mesh, the projection-
   based interpolation error of the reference solution is computed (see in the previ-
   ous subsection the description of the estimators based on more accurate approxi-
   mate solutions of the global problem). The optimal refinement of each element is
   then chosen to be the one which leads to the smallest projection-based interpola-
   tion error; elements in the mesh are then refined based on those that will lead to
176                                                               C. Canuto and M. Verani

   the greatest decrease in the projection error per degree of freedom. This strategy
   was first introduced by [22, 44, 46]; see also [23] for more recent work.
2. Relative size of the error estimators. In this strategy (originally introduced in
   [31]) it is assumed the existence of a local error indicator ηK (uh,p , hK , pK )
   which depends on the element K, the approximate solution uh,p , the local mesh-
   size hK and the local polynomial degree pK . Then, the choice between h and
   p refinement is based on the ratio rK = ηK (uh,pK , hK , pK )/ηK (uh,pK −1 , hK ,
   pK − 1). In particular, if ck ≤ γ , 0 < γ < 1 then p-enrichment should be per-
   formed as the error decreases when the polynomial degree is raised. On the other
   hand, if cK > γ then the element K is subdivided.
3. Comparison of estimated and predicted error. This strategy has been proposed
   in [40] (see also [27]) where the decision whether to subdivide an element or
   to increase its polynomial degree depends on the refinement history of the ele-
                                                                              pred
   ment. In particular, it is introduced a predicted local error indicator ηK which
   can be viewed as a simple extrapolation of the error indicators computed during
   the previous refinement steps under the assumption that the solution is (locally)
   smooth. If the computed error indicator (which reflects the actual error) is larger
   than the predicted one, then an h-refinement is performed since the assumption
   of (local) smoothness, under which the computation of the predicted indicator is
   performed, is false. Conversely, if the indicated error is smaller than the predicted
   one, then p-refinement is performed.
4. Analyticity check by estimating the decay rate of expansion coefficients. In [21],
   the authors propose to determine whether the solution is locally smooth or non-
   smooth by calculating the decay rate of the Legendre expansion coefficients of
   the solution; this is performed by a least-squares best fit. More recently, a strategy
   has been developed in [37] for estimating the size of the Bernstein ellipse of the
   solution, thereby determining whether the solution is analytic. In the case when
   it is not analytic, a second strategy, based on the work developed in [36], seeks
   to directly compute the local Sobolev index of the solution.
5. Local regularity estimation. This strategy, first proposed in [4], relies on estimat-
   ing in each element K the local Sobolev regularity index mk , by using a local
   error indicator which is computed by solving a series of local problems with
   different polynomial degrees. The local Sobolev regularity is then employed to
   perform h or p refinement. In particular, if pK + 1 ≤ mK , where pK denotes
   the current local polynomial order, then p-refinement is performed in K, oth-
   erwise h-refinement is selected. This latter criterium relies on two ingredients:
   (i) the following hp a-priori error estimate on quasi-uniform mesh of size h and
   elements of uniform polynomial degree p:

                       u − uhp H 1 (Ω) ≤ Chμ p −(m−1) uH m (Ω)

   where μ = min(p, m − 1) and u ∈ H m (Ω), and (ii) the idea that if the regularity
   of the solution is such that the rate of convergence of the h-type finite element
   method with elements of fixed degree p turns out to be sub-optimal, then an
   h refinement is needed. Recently, related ideas have been exploited in [26, 47]
Adaptive Spectral/hp Methods for Elliptic Problems                                  177

   where the residual, instead of the error, has been employed to choose between
   p enrichment or h refinement. More recently, an approach based on the Sobolev
   embedding of H 1 into an appropriate Lp space has been proposed for the one-
   dimension case in [54].
6. “Texas Three step”. This strategy was first introduced [45] and is based on a
   three-step scheme where only three solutions of the problem are needed. First,
   the initial mesh details as well as intermediate and final error tolerances are spec-
   ified and the problem is solved. Then, the h-refinements take place in order to
   guarantee that the (intermediate) error (measured in some appropriate norm) is
   less than the intermediate tolerance. In the final third step, the mesh is kept fixed
   and the p-refinements are carried out to achieve the final error tolerance. For
   related work, we refer, e.g., to [53] and the references cited therein.
    At last, we mention that a thorough comparison among various hp adaptive
strategies has been recently accomplished in [41]. Algorithms have been tested
on different kinds of representative solutions (analytic solution, corner singularity,
peak, boundary layer, wavefront, and so on) and their performance has been evalu-
ated according to different measures of efficiency, such as the number of activated
degrees of freedom or the computational time. None of the considered strategies
has emerged as the best one in all situations, although some strategies perform bet-
ter than the others for specific kinds of solutions.



3.3 Convergence of Adaptive Spectral/hp Methods

The theory of h adaptive finite element (AFEM) schemes for elliptic problems is
quite satisfactory: it started with the convergence results of [25] and [42]; the first
optimality result was derived in [9] for d = 2 and extended by [51] to any d. The
most comprehensive results for AFEM are contained in [16] for any d and L2 data,
and [18] for d = 2 and H −1 data; we refer to the survey [43]. In contrast, very little
is known on convergence and optimality properties of adaptive hp methods. The first
pioneering result goes back to [31] where an adaptive hp algorithm (see Sect. 3.2
for the description) is proven to be convergent, with a predicted rate. However, due
to the assumptions on the admissible error estimators which appear to be overly
restrictive, the results in [31] cannot be considered completely satisfactory. Only
after two decades, in [26] a contraction result of the form

                       u − un+1 H 1 ≤ μu − un H 1 ,   μ < 1,

has been proven, where un and un+1 are the coarse and the enriched discrete so-
lutions built by an adaptive hp algorithm approximating a one dimensional elliptic
problem. More recently, the convergence result of [26] has been extended to higher
dimensions in [11]. In this respect, it is also worth mentioning the result in [47]
where an estimation (from above and below) of the error between the actual dis-
crete solution and its (h or p) enriched version is presented. However, to the best of
178                                                            C. Canuto and M. Verani

the authors’ knowledge, there are no optimality results for hp adaptive algorithms:
this is still a completely open issue.



4 Spectral Adaptive Algorithms with Optimality Properties

Inspired by the analysis performed in the wavelet framework by [17, 29, 52] and in
the finite element framework by [9, 16, 25, 42, 43, 51], the present authors in col-
laboration with Ricardo H. Nochetto have recently initiated the study of the conver-
gence and complexity properties of adaptive Fourier Galerkin methods in arbitrary
d-dimension [14], and of adaptive Legendre-Galerkin methods in one-dimension
[15]. Hereafter, we present a short account of the latter results, which incorporates
their extension to the case of discretizations by spectral elements.
   We consider the elliptic problem in Ω = (a, b)

                       Au = −D · (νDu) + σ u = f       in Ω,
                                                                                 (15)
                       u(a) = u(b) = 0,

where ν and σ are sufficiently smooth real coefficients satisfying 0 < ν∗ ≤ ν(x) ≤
ν ∗ < ∞ and 0 < σ∗ ≤ σ (x) ≤ σ ∗ < ∞ in Ω; let us set
                                                             
                    α∗ = min(ν∗ , σ∗ ) and α ∗ = max ν ∗ , σ ∗ .

We formulate this problem variationally as

               u ∈ V := H01 (Ω) :    a(u, v) = f, v ∀v ∈ H01 (Ω),               (16)
                                                                √
where a(u, v) = Ω νDuDv + Ω σ uv. We denote by |||v||| =         a(v, v) the energy
norm of any v ∈ H01 (Ω), which satisfies
                            √                  √
                             α∗ v ≤ |||v||| ≤ α ∗ v.                         (17)

   Our error estimators will be of residual type. Therefore, for any w belonging
to some finite dimensional subspace VΛ of H01 (Ω), we define the residual r(w) =
f − Aw ∈ H −1 (Ω). Then, by the continuity and coercivity of the bilinear form a,
one has
                        1                   1
                           r(w) ≤ u − w ≤    r(w) ,                            (18)
                        α∗                  α∗
or, equivalently,

                      1                          1
                     √     r(w) ≤ |||u − w||| ≤ √   r(w) .                       (19)
                       α ∗                       α∗
Adaptive Spectral/hp Methods for Elliptic Problems                                         179

4.1 Bases and Norm Representations

Form now on, we assume that the coefficients and data of the problem are piecewise
analytic on a finite partition T = {K} of Ω. Let us introduce the subspace of H01 (Ω)
of the piecewise linear functions on T, i.e.,
                                                               
                    VL (T) = v ∈ H01 (Ω)  v|K ∈ P1 (K) ∀K ∈ T ;

then,
                                                           
                              V := H01 (Ω) = VL (T) ⊕             H01 (K),
                                                           K∈T

where, for convenience, we assume that functions in H01 (K) are extended by 0 out-
side the interval K; indeed, for any v ∈ V , we have

                                         v = vL +         vK ,
                                                    K∈T

where vL ∈ VL (T) is the piecewise linear interpolant of v on T and vK = (v −
vL )|K ∈ H01 (K). Since

           (vL , vK )H 1 (Ω) =          vL (v − vL ) = vL|K
                                                          
                                                                      (v − vL ) = 0 and
                      0
                                    K                             K
           (vK , vK  )H 1 (Ω) = 0 if K = K  ,
                          0


we have
                      v2H 1 (Ω) = vL 2H 1 (Ω) +              vK 2H 1 (K) .
                                0               0                        0
                                                          K∈T

   Given any F ∈ V  = H −1 (Ω), let FL ∈ VL (T) denote the restriction of F to
VL (T); similarly, for each K ∈ T, let FK ∈ H −1 (K) denote the restriction of F to
H01 (K). Then,

                      F, v = FL , vL  +              FK , vK  ∀v ∈ V ,
                                                 K∈T

which easily implies

                    F 2H −1 (Ω) = FL 2VL (T) +              FK 2H −1 (K) .          (20)
                                                          K∈T

   Let us now introduce the Lagrangian basis functions ψq in VL (T) associated with
the internal nodes of the partition, say xq for 1 ≤ q ≤ Q, so that

                                VL (T) = span{ψq | 1 ≤ q ≤ Q}.
180                                                                               C. Canuto and M. Verani

On the other hand, on the reference element Iˆ = (−1, 1), we consider the Babuška-
Shen basis, made of polynomials of strictly increasing degree,
             
               2k − 1 1                    1                        
  φ̂k (x̂) =             Lk−1 (s) ds = √          Lk−2 (x̂) − Lk (x̂) k ≥ 2, (21)
                  2   x̂                 4k − 2
where Lk (x̂), k ≥ 0, stands for the k-th Legendre polynomial, which satisfies
deg Lk = k, Lk (1) = 1 and
                         1                                  2
                             Lk (x̂)Lm (x̂)d x̂ =               δkm ,     m ≥ 0.
                       −1                                2k + 1

It is easily seen that the basis functions satisfy
                                          1
              (φ̂k , φ̂m )H 1 (Iˆ) =          φ̂k (x̂)φ̂m
                                                         
                                                           (x̂)d x̂ = δkm ,     k, m ≥ 2,
                             0           −1

i.e., they form an orthonormal system with respect to the H01 (Iˆ)-inner product. Go-
ing back to our partition, for any element K ∈ T of size hK , we can map the refer-
ence element to the element K via an affine transformation x = hK x̂ + c, yielding
the functions
                                      
                                        hK
                          φK,k (x) =       φ̂k (x̂), k ≥ 2,                       (22)
                                         2
which form an orthonormal system with respect to the H01 (K)-inner product.
  At this point, we are ready to give a representation of the norms in H01 (Ω) and
H −1 (Ω). Precisely, any v ∈ H01 (Ω) is expanded as

                             Q                       ∞
                   v=            v̂q ψq +                v̂K,k φK,k =:         v̂λ ϕλ ,
                         q=1                  K∈T k=2                    λ∈L

so that
                                   Q                       ∞
                v2H 1 (Ω) =           |v̂q |2 +               |v̂K,k |2 =:         |v̂λ |2 ,      (23)
                     0
                                  q=1               K∈T k=2                    λ∈L

where the new notation on the right-most side has been introduced for subsequent
convenience. Similarly, for any F ∈ H −1 (Ω), we set

                        F̂q = F, ψq  and F̂K,k = F, φK,k ,

and we obtain
                                    Q                       ∞
              F 2H −1 (Ω) =            |F̂q |2 +              |F̂K,k |2 =:          |F̂λ |2 .     (24)
                                   q=1               K∈T k=2                   λ∈L
Adaptive Spectral/hp Methods for Elliptic Problems                                 181

    The formal analogy between (23) and (24) suggests us to use the notation .
to indicate both the H01 (Ω)-norm of a function v, or the H −1 (Ω)-norm of a linear
form F ; the specific meaning will be clear from the context.
    Moreover, given any finite index set Λ ⊂ L, we define the subspace of H01 (Ω)

                                VΛ := span{ϕλ | λ ∈ Λ};

we set |Λ| = card Λ, so that dim VΛ = |Λ|. If g admits an expansion g =

  λ∈L ĝλ ϕλ (converging in an appropriate norm), then we define its projection PΛ g
onto VΛ by setting
                                    PΛ g =           ĝλ ϕλ .
                                              λ∈Λ
Also note that if r = r(vΛ ) is a residual, then its norm is given by

                                     r2 =          |r̂λ |2 ,                    (25)
                                              λ∈L

with r̂λ = f, ϕλ  − a(vΛ , ϕλ ).


Algebraic Representation and Properties of the Stiffness Matrix

Let us introduce the semi-infinite, symmetric and positive-definite matrix

                       A = (aλ,μ )λ,μ∈L     with aλ,μ = a(ϕμ , ϕλ ).              (26)

Then, Problem (16) can be equivalently written as

                                          Au = f,                                 (27)
                                       ˆ
              u = (ûμ ) and f = (fλ ) collect, respectively, the coefficients of the
where the vectors
solution u = μ ûμ ϕμ of Problem (16), and of the right-hand side f .
   For any element K ∈ T, let us denote by AK the square block of A associated
with the basis functions {φK,n } in K, i.e.,
                                                                               
   AK = (aλ,μ )λ,μ∈L(K) where L(K) = λ ∈ L : λ = (K, k) for some k ≥ 2 .

For convenience, let us write k = k(λ).
    Let us assume that the restrictions to any K ∈ T of the coefficients ν and σ of the
differential operator in (16) are analytic functions, so that their (scaled) Legendre
coefficients in K decay at an exponential rate. Then, one can prove the existence of
strictly positive constants ηA and cA such that

                      |aλ,μ | ≤ cA e−ηA |k(λ)−k(μ)|        ∀λ, μ ∈ L(K).          (28)

We say that any AK belongs to the exponential class De (ηA , cA ). Note that it is not
restrictive to assume ηA and cA independent of K, since the partition T has been
fixed once and for all.
182                                                             C. Canuto and M. Verani

   The following properties hold (see [14, 15]).

Proposition 4.1 Assume that the constant cA satisfying (28) is such that for each
K ∈T
                              1        
                        cA < eηA − 1 min aλ,λ .                              (29)
                              2           λ∈L(K)

Then each AK is invertible and A−1
                                K ∈ De (η̄A , c̄A ) for some η̄A ∈ (0, ηA ] and
c̄A > 0.

Proposition 4.2 For any K ∈ T and any integer J ≥ 0, the truncated matrices
(AK )J such that

                                aλ,μ      if |k(λ) − k(μ)| ≤ J,
                     (AK )J λ,μ =                                                 (30)
                                  0         elsewhere,

satisfy the inequalities
                             AK − (AK )J ≤ CA e−ηA J
for some constant CA > 0. Furthermore, under the assumptions of Proposition 4.1,
there exists a constant C̄A > 0 such that
                                     −1 
                             A−1
                              K − AK J ≤ C̄A e
                                                 −η̄A J
                                                        .                  (31)



4.2 The Constitutive Elements of an Adaptive Algorithm

We are going to present an adaptive algorithm which implements the following re-
cursion: (i) compute a Galerkin approximation of the exact solution; (ii) compute
the corresponding residual, actually a feasible (finite-dimensional) version of it, so
that its norm can be taken as an error estimator; (iii) apply Dörfler’s marking, also
known as bulk-chasing, to the components of the residual in order to identify a set
of new basis functions to be activated for the next Galerkin solve; (iv) expand this
set using properties of the stiffness matrix of the problem; (v) compute the new
Galerkin solution on the enriched finite-dimensional subspace; (vi) get rid of the
negligible components of this solution by applying a coarsening procedure.
   We anticipate that step (iv) guarantees an arbitrarily large error reduction,
whereas step (vi) assures a quasi-optimal complexity count.
   We us now introduce the specific procedures, which will enter the definition of
our adaptive algorithm.
• uΛ := GAL(Λ)
     Given a finite subset Λ ⊂ L, the output uΛ ∈ VΛ is the solution of the Galerkin
  problem,
                    uΛ ∈ VΛ :    a(uΛ , vΛ ) = f, vΛ    ∀vΛ ∈ VΛ .               (32)
Adaptive Spectral/hp Methods for Elliptic Problems                                183

• r := RES(vΛ )
     Given a function vΛ ∈ VΛ for some finite index set Λ, the output r is, in an
  ideal algorithm, the residual r(vΛ ) = f − AvΛ . In a feasible version, the output,
  say r̃ is a function with a finite expansion along the chosen basis, obtained by
  suitably approximating the right-hand side f and the image AvΛ ; it satisfies the
  inequality
                                       r − r̃ ≤ γ r̃
  for some fixed constant γ ∈ (0, 1). In the following, we restrict ourselves to the
  ideal case where the residual is assumed to be computed exactly.
• Λ∗ := DÖRFLER(r, θ )
     Given θ ∈ (0, 1) and an element r ∈ H −1 (I ), the output Λ∗ ⊂ L is a finite set
  of minimal cardinality such that the inequality

                                      PΛ∗ r ≥ θ r ,                          (33)

  or equivalently
                                                 
                                r − PΛ∗ r ≤     1 − θ 2 r,                   (34)
  is satisfied. In terms of expansion coefficients, condition (33) can be equivalently
  stated as
                                     |r̂λ |2 ≥ θ 2   |r̂λ |2 .                    (35)
                                  λ∈Λ∗               λ∈L

  Thus, the output set Λ∗ of minimal cardinality can be immediately determined
  by a greedy algorithm, i.e., by rearranging the coefficients r̂λ in non-increasing
  order of modulus and retaining the largest ones until (35) is fulfilled.
• Λ∗ := ENRICH(Λ, J )
     Given an integer J ≥ 0 and a finite set Λ ⊂ L, the output is the set
                                                                            
   Λ∗ := μ = (K, k) ∈ L : there exists λ = K, k  ∈ Λ such that k − k   ≤ J .

  Note that Λ is enriched element-by-element with respect to the fixed partition
  T = {K} of Ω.
• Λ∗ := E-DÖRFLER(r, θ )
     The two previous procedures are combined as follows. Given θ ∈ (0, 1) and
  an element r ∈ H −1 (I ), the output Λ∗ ⊂ L is defined by the sequence
                                    :=DÖRFLER(r, θ )
                                   Λ
                                                                                 (36)
                                               Jθ ),
                                  Λ∗ :=ENRICH(Λ,
  where, based on Proposition 4.2, Jθ is chosen as the smallest integer which satis-
  fies
                                             
                                               1 − θ2
                               C̄A e−η̄A J ≤                                   (37)
                                                α∗ α ∗
  (see [15] for more details).
184                                                              C. Canuto and M. Verani

• Λ := COARSE(w, ε)
     Given a function w ∈ VΛ∗ for some finite index set Λ∗ , and an accuracy ε > 0
  which is known to satisfy u − w ≤ ε, the output Λ ⊆ Λ∗ is a set of minimal
  cardinality such that
                                   w − PΛ w ≤ 2ε,                                (38)
  which obviously implies u − PΛ w ≤ 3ε.



4.3 An Adaptive Algorithm with Convergence Rate

We are ready to present our adaptive algorithm. Each iteration can be viewed as a
prediction step, based on the inspection of the current residual and the application
of (enriched) Dörfler marking, followed by a correction step, based on coarsening.
For this reason, we call it PC-ADLEG—Predictor-Corrector ADaptive LEGendre
algorithm.
   Given two parameters θ ∈ (0, 1) and tol ∈ [0, 1), let us define
   Algorithm PC-ADLEG(θ, tol)
   Set r0 := f , Λ0 := ∅, n = −1
   do
      n←n+1
       n := E-DÖRFLER(rn , θ )
      ∂Λ
      n+1 := Λn ∪ ∂Λ
      Λ               n
     un+1 := GAL(Λ   n )
                                     √
      Λn+1 := COARSE(     un+1 , α2∗ 1 − θ 2 rn )
      un+1 := GAL(Λn+1 )
      rn+1 := RES(un+1 )
   while rn+1  > tol

    The following convergence result can be proven, by adapting the arguments given
in [15] for the single-element case.

Theorem 4.1 Let 0 < θ < 1 be chosen so that
                                           α∗ 
                          ρ = ρ(θ ) = 6         1 − θ 2 < 1.                       (39)
                                           α∗
If the assumptions of Proposition 4.1 are fulfilled, the sequence of errors u − un
generated for n ≥ 0 by the algorithm satisfies the inequality

                            |||u − un+1 ||| ≤ ρ|||u − un ||| .

Thus, for any tol > 0 the algorithm terminates in a finite number of iterations,
whereas for tol = 0 the sequence un converges to u in H 1 (I ) as n → ∞.
Adaptive Spectral/hp Methods for Elliptic Problems                                185

   Note that the rate of decay of the error can be brought as close to 0 as desired
by choosing θ close enough to 1. This is a feature stemming from the Enrichment
procedure, keeping into account the decay properties of the inverse of the stiffness
matrices AK , K ∈ T.


4.4 Nonlinear Approximation in Gevrey Spaces
In order to estimate the complexity of our algorithm, and evaluate its optimality, we
have to make assumptions on the structure of the solution u. Precisely, we have to
make assumptions on the minimal number of degrees of freedom (i.e., active basis
functions) needed to build an approximation of u within a given tolerance. This is
usually expressed as the condition that u belongs to a suitable sparsity class. Once
this is done, we can compare the number of degrees of freedom activated by our
algorithm at a certain iteration (actually, an estimate of this number) to the minimal
number of degrees of freedom needed to obtain the same accuracy; optimality usu-
ally means that the two numbers are within a constant independent of the solution
and the current iteration.
    Sparsity classes typically involved in finite-order approximations such as
wavelets or h-type finite elements describe an algebraic decay of the best approx-
imation error vs the number of activated degrees of freedom. Hereafter, we will
rather consider sparsity classes describing an exponential decay of that error; this
choice is coherent with the nature of our discretization approach, which uses an
infinite-order spectral-element method, or p-type finite element method, hence pro-
viding faster-than-algebraic decay of the error whenever the solution is piecewise
smooth on the partition T of the domain.
    The definition of sparsity class is based on the concept of best N -term approx-
imation error, that we now recall. Given any nonempty finite index set Λ ⊂ L and
the corresponding subspace VΛ ⊂ V of dimension |Λ| = card Λ, the best approx-
imation  of v in VΛ is the orthogonal projection of v upon VΛ , i.e. the function
PΛ v = λ∈Λ v̂λ ϕλ , which satisfies
                                                                   1/2
                             v − PΛ v =                 |v̂λ |2          .
                                                    λ∈Λ
                                                     /

For any integer N ≥ 1, we minimize this error over all possible choices of Λ with
cardinality N , thereby leading to the best N -term approximation error

                            EN (v) =         inf       v − PΛ v.
                                        Λ⊂L,|Λ|=N

A way to construct a best N -term approximation vN of v consists of rearranging the
coefficients of v in decreasing order of modulus

                           |v̂λ1 | ≥ · · · ≥ |v̂λn | ≥ |v̂λn+1 | ≥ · · ·

and setting vN = PΛN v with ΛN = {λn : 1 ≤ n ≤ N }.
186                                                                               C. Canuto and M. Verani

   We are ready to give the following fundamental definition.

Definition 4.1 Given two real numbers η > 0 and t ∈ (0, 1], we denote by
 η,t
AG (Ω, T) the set defined as
                                                                  t
                                                                        
       η,t
      AG (Ω, T) := v ∈ V = H01 (Ω) : vAη,t (Ω,T) := sup EN (v)eηN < +∞ .
                                                      G                N ≥0

                                η,t
   As shown in [14], the set AG (Ω, T) is not a vector space, since it may happen
that u, v belong to this set, whereas u + v does not; however, one can show that
u + v ∈ AG (Ω, T) with η̄ = 2−t η.
          η̄,t

   The quantity vAη,t (Ω,T) dictates the minimal number Nε of basis functions
                      G
needed to approximate v with accuracy ε. In fact, from the relations

                ENε (v) ≤ ε < ENε −1 (v) ≤ e−η(Nε −1) vAη,t (Ω,T) ,
                                                                   t
                                                                                                    (40)
                                                                              G


we obtain
                                              vAη,t (Ω,T) 1/t
                               1
                       Nε ≤              log          G
                                                                           + 1.                     (41)
                              η1/t                     ε
   In order to motivate our definition, let us first assume that T = {Ω}, i.e., let us
concentrate on a single element. Then, inspired by [7], one can introduce
                                                                             the fol-
lowing family of spaces of Gevrey type: given any v ∈ V , let v = k≥2 v̂k φk be its
expansion along the Babuška-Shen basis defined as in (22) relative to the interval Ω.
Then, we set
                                                                                   
 Aη,t (Ω) = v ∈ V : there exists a constant C > 0 such that |v̂k | ≤ Ce−ηk ∀k ≥ 2 .
                                                                           t




It is well-known that for t = 1 we get analytic functions in a neighborhood of Ω.
A slightly stronger family of spaces is represented by the Sobolev-Gevrey spaces
(see [28]; see also [39]) defined as
                                                ∞
                                                                    
                                                                       t
             Gη,t (Ω) = v ∈ V : v2Gη,t (Ω) :=                   e2ηk |v̂k |2 < +∞ .               (42)
                                                           k=2

We immediately observe that Gη,t (Ω) ⊂ Aη,t (Ω). Furthermore, given any v ∈
Gη,t (Ω) and approximating it by the linear projection
                                                  N
                                     PN v =            v̂k φk ,
                                                 k=2

we immediately get

                     EN (v) ≤ v − PN v ≤ e−ηN vGη,t (Ω) ,
                                                              t
Adaptive Spectral/hp Methods for Elliptic Problems                                                   187

                               η,t
which implies Gη,t (Ω) ⊂ AG (Ω, T). Thus, the latter space contains, in particular,
analytic functions and Gevrey functions.
   Let us now consider an arbitrary finite partition T of Ω. For any K ∈ T, let
v ∈ H01 (K); its best N -term approximation error in K is defined as

                     EK,N (v) :=           inf             v − PΛ vH 1 (K) .
                                     Λ⊂L(K),|Λ|=N                             0


                                                 η,t
Consequently, we can define the class AG (K) by setting
                                                           t
                                                                 
        η,t
      AG (K) := v ∈ H01 (K) : vAη,t (K) := sup EK,N (v)eηN < +∞ .
                                             G               N ≥0

Given any v ∈ H01 (Ω), denote by vL ∈ VL (T) its piecewise linear interpolant,
and set ṽ = v − vL , so that ṽ|K ∈ H01 (K) for all K ∈ T. Now, assume that
      η,t
v ∈ AG (Ω, T), and let w be a best N -term approximation of v, i.e., a linear com-
bination of at most N basis functions (we will write | supp w| ≤ N ) such that

                             v − w ≤ e−ηN vAη,t (Ω,T) .
                                                       t

                                                              G


Writing v − w = (v − vL ) − (w − wL ) + (vL − wL ) = ṽ − w̃ + zL and using the
orthogonality of the basis functions, we have

         v − w2 = ṽ − w̃ + zL 2 ≥ ṽ − w̃2 =                         ṽK − w̃K 2H 1 (K) ,
                                                                                           0
                                                                      K∈T

where the appended K denotes restriction of a function to K; thus,

                  ṽK − w̃K H 1 (K) ≤ e−ηN vAη,t (Ω,T)
                                                       t
                                                                              ∀K ∈ T
                                 0                            G

                                                                                  η,t
and since | supp wK | ≤ | supp w| ≤ N , we deduce that ṽK ∈ AG (K) for all K ∈ T.
                                                           η̃,t
   On the other hand, let v ∈ H01 (Ω) be such that ṽ|K ∈ AG (K) for all K ∈ T,
for some η̃ > 0 to be determined later on. Then, there exist a constant C > 0 and
functions w̃K ∈ H01 (K) with | supp w̃K | ≤ N such that

                        ṽK − w̃K H 1 (K) ≤ Ce−ηN
                                                              t
                                                                      ∀K ∈ T.
                                       0


Denoting by w̃ the function in Ω which coincides with w̃K in each K, and setting
w = vL + w̃, we have

                                           ṽK − w̃K 2H 1 (K) ≤ (Q + 1)C 2 e−2η̃N .
                                                                                                 t
       v − w2 = ṽ − w̃2 =
                                                                  0
                                     K∈T
                                         
Now, observe that |supp w| = |supp vI | + K∈T |supp w̃K | ≤ Q + (Q + 1)N ≤
(Q + 2)N . Choosing η̃ = (Q + 2)t η and letting N → ∞, we conclude that v ∈
 η,t
AG (Ω, T).
188                                                                  C. Canuto and M. Verani

4.5 Complexity Analysis of the Algorithm

We are now ready to investigate complexity issues for the sequence of approxima-
tions un = uΛn generated by PC-ADLEG, under the assumption that the solution u
                      η,t
belongs to a class AG (Ω, T) for some η > 0 and t ∈ (0, 1].
    At first we note that each set Λn+1 of the active degrees of freedom produced by
the algorithm is generated by the procedure COARSE with a suitable tolerance εn .
A general result about coarsening (see, e.g., [52]) allows us to estimate its cardinality
|Λn+1 | = Nεn according to (41). On the other hand, one can prove that u−un+1  
εn . Thus, we obtain the following optimal result.

                                     η,t
Theorem 4.2 Suppose that u ∈ AG , for some η > 0 and t ∈ (0, 1]. Then, there
exists a constant C > 1 such that the cardinality of the set Λn+1 of the active degrees
of freedom produced by PC-ADLEG satisfies the bound
                               uAη,t           1/t
                        1
            |Λn+1 | ≤ 1/t log        G
                                          + log C      + 1,            ∀n ≥ 0.
                     η        u − un+1 

    Next, we focus on the cardinality of the intermediate set Λ   n+1 , which depends
                                 n+1 ; in turns, this can be bounded by 2Jθ times the
on that of the incremental set ∂Λ
                                     n+1 generated by DÖRFLER with residual rn .
cardinality of the incremental set ∂Λ
Although under certain assumptions on θ it is possible to estimate such cardinality
in terms of the sparsity class of the solution (see [52]), in the most general situation
as the one we want to consider here, it is the sparsity class of the residual that
influences the growth of degrees of freedom. Indeed, we recall that the step

                                ∂Λ := DÖRFLER(r, θ )

selects
√       a set ∂Λ of minimal cardinality in L \ Λ for which r − P∂Λ r ≤
  1 − θ 2 r. In other words, it performs a best approximation of the residual for the
               √                                                             η̄,t¯
accuracy ε = 1 − θ 2 r. Thus, if r belongs to a certain sparsity class AG (Ω, T)
for some η̄ > 0 and t¯ > 0, we have by (41)

                                             rAη̄,t¯ 1/t¯
                                 1
                       |∂Λ| ≤           log √      G
                                                              + 1.                     (43)
                                η̄1/t¯        1 − θ r
                                                   2


Thus, it make sense to investigate the sparsity class of the residual. In a sparsity
class of algebraic type, this is the same as the class of the solution (see again [52]).
Unfortunately, in a sparsity class of exponential type such a property does not hold
[14], and we have to expect the generic residual to be less sparse than the exact
solution.
   The best result we can expect is as follows.
Adaptive Spectral/hp Methods for Elliptic Problems                                       189

                                   η,t
Proposition 4.3 Let v ∈ AG (Ω, T) for some η > 0 and t ∈ (0, 1]. Assume that
η < ηA , where ηA is the constant for which (28) holds. Let us set
                                                                      t
                                   η̄ = ζ (t)η,               t¯ =       ,
                                                                     1+t
where we define
                                                       t
                                                 1+t    1+t
                             ζ (t) :=                            ∀0 < t ≤ 1.             (44)
                                                  2
                         η̄,t¯
Then, one has Av ∈ AG (Ω, T), with

                                 AvAη̄,t¯(Ω,T)  vAη,t (Ω,T) .                       (45)
                                             G                       G


   Under the sparsity assumption on the solution u made in the previous theorem,
                             η̄,t¯
this implies that f = Au ∈ AG (Ω, T). On the other hand, it is possible to prove
that any Galerkin solution produced by PC-ADLEG satisfies un Aη,t (Ω,T) 
                                                                                  G
                                     η̄,t¯
uAη,t (Ω,T) , so that Aun ∈ AG (Ω, T). Keeping into account the remark after Def-
      G
inition 4.1, we obtain the following result.
                                   η,t
Proposition 4.4 Let u ∈ AG (Ω, T) for some η > 0 and t ∈ (0, 1]. There exists
                                         η̃,t¯
η̃ ≤ η such that rn = r(un ) ∈ AG (Ω, T) with

                                 rn Aη̃,t¯(Ω,T)  uAη,t (Ω,T) .
                                             G                       G


   Using (43), we arrive at the following final estimate.
                                                 η,t
Theorem 4.3 Suppose that u ∈ AG (Ω, T) for some η > 0 and t ∈ (0, 1] and that
the assumptions of Proposition 4.1 are satisfied. Then, there exist positive constants
                                                                        n+1 activated
η̃ ≤ η, t¯ ≤ t and C such that the cardinality of the intermediate sets Λ
in the predictor step of PC-ADLEG can be estimated as
                                          uAη,t           1/t¯
                            2Jθ
        n+1 | ≤ |Λn | +
       |Λ                            log        G
                                                     + log C       + 2Jθ ,     ∀n ≥ 0.
                            η̃1/t¯       u − un+1 

   Keeping into account the conditions on η̃ and t¯, we expect the cardinality of
 n+1 | to be asymptotically larger than the optimal one of |Λn+1 |, estimated in
|Λ
Theorem 4.2. Precisely for this reason, a coarsening step has been added at the end
of each adaptive iteration: coarsening brings complexity from the one dictated by the
sparsity class of the residual back to the one associated with the exact solution. On
the other hand, we consider such intermediate loss of optimality to be worth of being
accepted, since it should be compensated by the fast convergence of our algorithm,
guaranteed by the allowed aggressive policy of degree of freedom enrichment.
190                                                                       C. Canuto and M. Verani

   We mention that the sparsity class of the residual influences complexity even in
other instances of the algorithm, not discussed here. For instance, this is the case
when a feasible computation of the residual-based error estimator is considered: to
avoid degradation of the contraction property of the algorithm, approximate finite-
dimensional residuals should be sufficiently close to the exact ones, which can be
obtained with a complexity related to the sparseness of the residuals themselves. We
refer to [14] for more details.



References

 1. Ainsworth, M., Oden, J.T.: A procedure for a posteriori error estimation for h-p finite element
    methods. Comput. Methods Appl. Mech. Eng. 101(1–3), 73–96 (1992)
 2. Ainsworth, M., Oden, J.T.: A unified approach to a posteriori error estimation using element
    residual methods. Numer. Math. 65(1), 23–50 (1993)
 3. Ainsworth, M., Senior, B.: Aspects of an adaptive hp-finite element method: adaptive strategy,
    conforming approximation and efficient solvers. Comput. Methods Appl. Mech. Eng. 150(1–
    4), 65–87 (1997). Symposium on Advances in Computational Mechanics, vol. 2 (Austin, TX,
    1997)
 4. Ainsworth, M., Senior, B.: An adaptive refinement strategy for hp-finite element computa-
    tions. Appl. Numer. Math. 26(1–2), 165–178 (1998)
 5. Babuška, I., Guo, B.Q.: Regularity of the solutions of elliptic problems with piecewise analytic
    data. SIAM J. Numer. Anal. 20, 763–781 (1989)
 6. Babuška, I., Guo, B.Q.: Approximation properties of the h-p version of the finite element
    method. Comput. Methods Appl. Mech. Eng. 133(3–4), 319–346 (1996)
 7. Baouendi, M.S., Goulaouic, C.: Régularité analytique et itérés d’opérateurs elliptiques
    dégénérés; applications. J. Funct. Anal. 9, 208–248 (1972)
 8. Bernardi, C.: Indicateurs d’erreur en h-N version des éléments spectraux. Modél. Math. Anal.
    Numér. 30(1), 1–38 (1996)
 9. Binev, P., Dahmen, W., DeVore, R.: Adaptive finite element methods with convergence rates.
    Numer. Math. 97(2), 219–268 (2004)
10. Braess, D., Pillwein, V., Schöberl, J.: Equilibrated residual error estimates are p-robust. Com-
    put. Methods Appl. Mech. Eng. 198(13–14), 1189–1197 (2009)
11. Bürg, M., Dörfler, W.: Convergence of an adaptive hp finite element strategy in higher space-
    dimensions. Appl. Numer. Math. 61(11), 1132–1146 (2011)
12. Canuto, C., Hussaini, M.Y., Quarteroni, A., Zang, T.A.: Spectral Methods. Fundamentals in
    Single Domains. Scientific Computation. Springer, Berlin (2006)
13. Canuto, C., Hussaini, M.Y., Quarteroni, A., Zang, T.A.: Spectral Methods. Evolution to Com-
    plex Geometries. Scientific Computation. Springer, Berlin (2007)
14. Canuto, C., Nochetto, R.H., Verani, M.: Adaptive Fourier-Galerkin Methods, pp. 1–48 (2011,
    submitted). arXiv:1201.5648v1
15. Canuto, C., Nochetto, R.H., Verani, M.: Contraction and optimality properties of adap-
    tive Legendre-Galerkin methods: the 1-dimensional case, pp. 1–26 (2011, submitted).
    arXiv:1206.5524v1
16. Cascon, J.M., Kreuzer, C., Nochetto, R.H., Siebert, K.G.: Quasi-optimal convergence rate for
    an adaptive finite element method. SIAM J. Numer. Anal. 46(5), 2524–2550 (2008)
17. Cohen, A., Dahmen, W., DeVore, R.: Adaptive wavelet methods for elliptic operator
    equations—convergence rates. Math. Comput. 70, 27–75 (1998)
18. Cohen, A., DeVore, R., Nochetto, R.H.: Convergence rates for AFEM with H −1 data. Found.
    Comput. Math. 12(5), 671–718 (2012)
Adaptive Spectral/hp Methods for Elliptic Problems                                             191

19. Costabel, M., Dauge, M., Nicaise, S.: Analytic regularity for linear elliptic systems in poly-
    gons and polyhedra. Math. Models Methods Appl. Sci. 22(8), 1250015 (2012). doi:10.1142/
    S0218202512500157
20. Dahmen, W., Scherer, K.: Best approximation by piecewise polynomials with variable knots
    and degrees. J. Approx. Theory 26(1), 1–13 (1979)
21. Dahmen, W., Scherer, K.: On optimal global error bounds obtained by scaled local error esti-
    mates. Numer. Math. 36, 151–176 (1981)
22. Demkowicz, L., Oden, J.T., Rachowicz, W., Hardy, O.: Toward a universal h-p adaptive finite
    element strategy. I. Constrained approximation and data structure. Comput. Methods Appl.
    Mech. Eng. 77(1–2), 79–112 (1989)
23. Demkowicz, L., Rachowicz, W., Devloo, Ph.: A fully automatic hp-adaptivity. J. Sci. Comput.
    17(1–4), 127–155 (2002)
24. DeVore, R., Scherer, K.: Variable knot, variable degree spline approximation to x β . In: Quan-
    titative Approximation. Proc. Internat. Sympos., Bonn, 1979, pp. 121–131. Academic Press,
    New York (1980).
25. Dörfler, W.: A convergent adaptive algorithm for Poisson’s equation. SIAM J. Numer. Anal.
    33(3), 1106–1124 (1996)
26. Dörfler, W., Heuveline, V.: Convergence of an adaptive hp finite element strategy in one space
    dimension. Appl. Numer. Math. 57(10), 1108–1124 (2007)
27. Eibner, T., Melenk, J.M.: An adaptive strategy for hp-FEM based on testing for analyticity.
    Comput. Mech. 39(5), 575–595 (2007)
28. Foias, C., Temam, R.: Gevrey class regularity for the solutions of the Navier-Stokes equations.
    J. Funct. Anal. 87(2), 359–369 (1989)
29. Gantumur, T., Harbrecht, H., Stevenson, R.: An optimal adaptive wavelet method without
    coarsening of the iterands. Math. Comput. 76(258), 615–629 (2007)
30. Gui, W., Babuška, I.: The h, p and h-p versions of the finite element method in 1 dimension.
    II. The error analysis of the h- and h-p versions. Numer. Math. 49(6), 613–657 (1986)
31. Gui, W., Babuška, I.: The h, p and h-p versions of the finite element method in 1 dimension.
    III. The adaptive h-p version. Numer. Math. 49(6), 659–683 (1986)
32. Guo, B., Babuška, I.: The hp-version of the finite element method I: the basic approximation
    results. Comput. Mech. 1, 21–41 (1986)
33. Guo, B., Babuška, I.: The hp-version of the finite element method II: general results and
    applications. Comput. Mech. 1, 203–226 (1986)
34. Guo, B., Babuška, I.: Regularity of the solutions for elliptic problems on nonsmooth domains
    in R3 . II. Regularity in neighbourhoods of edges. Proc. R. Soc. Edinb., Sect. A 127(3), 517–
    545 (1997)
35. Heuveline, V., Rannacher, R.: Duality-based adaptivity in the hp-finite element method. J. Nu-
    mer. Math. 11(2), 95–113 (2003)
36. Houston, P., Senior, B., Süli, E.: hp-discontinuous Galerkin finite element methods for hyper-
    bolic problems: error analysis and adaptivity. Int. J. Numer. Methods Fluids 40(1–2), 153–169
    (2002). ICFD Conference on Numerical Methods for Fluid Dynamics (Oxford, 2001)
37. Houston, P., Süli, E.: A note on the design of hp-adaptive finite element methods for elliptic
    partial differential equations. Comput. Methods Appl. Mech. Eng. 194(2–5), 229–243 (2005)
38. Kurtz, J., Demkowicz, L.: A fully automatic hp-adaptivity for elliptic PDEs in three dimen-
    sions. Comput. Methods Appl. Mech. Eng. 196(37–40), 3534–3545 (2007)
39. Lions, J.-L., Magenes, E.: Problèmes aux Limites Non Homogènes et Applications, vol. III.
    Dunod, Paris (1970)
40. Melenk, J.M., Wohlmuth, B.I.: On residual-based a posteriori error estimation in hp-FEM.
    Adv. Comput. Math. 15(1–4), 311–331 (2002). 2001
41. Mitchell, W.F., McCain, M.: A comparison of hp-adaptive strategies for elliptic partial differ-
    ential equations. In: NIST Report, pp. 1–39 (2011, submitted)
42. Morin, P., Nochetto, R.H., Siebert, K.G.: Data oscillation and convergence of adaptive FEM.
    SIAM J. Numer. Anal. 38(2), 466–488 (2000) (electronic)
192                                                                     C. Canuto and M. Verani

43. Nochetto, R.H., Siebert, K.G., Veeser, A.: Theory of adaptive finite element methods: an in-
    troduction. In: Multiscale, Nonlinear and Adaptive Approximation, pp. 409–542. Springer,
    Berlin (2009)
44. Oden, J.T., Demkowicz, L., Rachowicz, W., Westermann, T.A.: Toward a universal h-p adap-
    tive finite element strategy. II. A posteriori error estimation. Comput. Methods Appl. Mech.
    Eng. 77(1–2), 113–180 (1989)
45. Oden, J.T., Patra, A., Feng, Y.: An hp adaptive strategy. In: Noor, A.K. (ed.) Adaptive Mul-
    tilevel and Hierarchical Computational Strategies. ASME Publication, vol. 157, pp. 23–46
    (1992)
46. Rachowicz, W., Oden, J.T., Demkowicz, L.: Toward a universal h-p adaptive finite element
    strategy. III. Design of h-p meshes. Comput. Methods Appl. Mech. Eng. 77(1–2), 181–212
    (1989)
47. Schmidt, A., Siebert, K.G.: A posteriori estimators for the h-p version of the finite element
    method in 1D. Appl. Numer. Math. 35(1), 43–66 (2000)
48. Schötzau, D., Schwab, C., Wihler, T.: hp-dGFEM for elliptic problems in polyhedra I: stability
    and quasi-optimality on geometric meshes. In: SAM Report ETHZ (2012)
49. Schötzau, D., Schwab, C., Wihler, T.: hp-dGFEM for elliptic problems in polyhedra II: expo-
    nential convergence. SAM Report ETHZ, (2012)
50. Schwab, C.: p- and hp-finite element methods. In: Theory and Applications in Solid and Fluid
    Mechanics. Numerical Mathematics and Scientific Computation. The Clarendon Press/Oxford
    University Press, New York (1998)
51. Stevenson, R.: Optimality of a standard adaptive finite element method. Found. Comput. Math.
    7(2), 245–269 (2007)
52. Stevenson, R.: Adaptive wavelet methods for solving operator equations: an overview. In:
    Multiscale, Nonlinear and Adaptive Approximation, pp. 543–597. Springer, Berlin (2009)
53. Valenciano, J., Owens, R.G.: A new adaptive modification strategy for numerical solutions to
    elliptic boundary value problems. Appl. Numer. Math. 32(3), 305–329 (2000)
54. Wihler, T.P.: An hp-adaptive strategy based on continuous Sobolev embeddings. J. Comput.
    Appl. Math. 235(8), 2731–2739 (2011)
A Theory and Challenges for Coarsening
in Microstructure

Katayun Barmak, Eva Eggeling, Maria Emelianenko, Yekaterina Epshteyn,
David Kinderlehrer, Richard Sharp, and Shlomo Ta’asan




Abstract Cellular networks are ubiquitous in nature. Most engineered materials are
polycrystalline microstructures composed of a myriad of small grains separated by
grain boundaries, thus comprising cellular networks. The grain boundary character
distribution (GBCD) is an empirical distribution of the relative length (in 2D) or
area (in 3D) of interface with a given lattice misorientation and normal. During
the coarsening, or growth, process, an initially random grain boundary arrangement


Dedicated to the memory of Enrico Magenes.
Research supported by NSF DMR0520425, DMS 0405343, DMS 0305794, DMS 0806703, DMS
0635983, DMS 0915013, DMS 1056821, DMS 1216433, OISE 0967140, DMS 1112984.
K. Barmak
Department of Applied Physics and Applied Mathematics, Columbia University, New York,
NY 10027, USA
e-mail: kb2612@columbia.edu

E. Eggeling
Visual Computing, Fraunhofer Austria Research GmbH, 8010 Graz, Austria
e-mail: eva.eggeling@fraunhofer.at

M. Emelianenko
Department of Mathematical Sciences, George Mason University, Fairfax, VA 22030, USA
e-mail: memelian@gmu.edu

Y. Epshteyn
Department of Mathematics, The University of Utah, Salt Lake City, UT 84112, USA
e-mail: epshteyn@math.utah.edu

D. Kinderlehrer (B) · S. Ta’asan
Department of Mathematical Sciences, Carnegie Mellon University, Pittsburgh, PA 15213, USA
e-mail: davidk@cmu.edu
S. Ta’asan
e-mail: shlomo@andrew.cmu.edu

R. Sharp
Microsoft Corporation, One Microsoft Way, Redmond, WA 98052, USA
e-mail: rsharp@gmail.com

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,       193
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_12,
© Springer-Verlag Italia 2013
194                                                                       K. Barmak et al.

reaches a steady state that is strongly correlated to the interfacial energy density. In
simulation, if the given energy density depends only on lattice misorientation, then
the steady state GBCD and the energy are related by a Boltzmann distribution. This
is among the simplest non-random distributions, corresponding to independent trials
with respect to the energy. Why does such simplicity emerge from such complexity?
    Here we an describe an entropy based theory which suggests that the evolution
of the GBCD satisfies a Fokker-Planck Equation, an equation whose stationary state
is a Boltzmann distribution. The properties of the evolving network that character-
ize the GBCD must be identified and appropriately upscaled or ‘coarse-grained’.
This entails identifying the evolution of the statistic in terms of the recently discov-
ered Monge-Kantorovich-Wasserstein implicit scheme. The undetermined diffusion
coefficient or temperature parameter is found by means of a convex optimization
problem reminiscent of large deviation theory.


1 Introduction
Cellular networks are ubiquitous in nature. They exhibit behavior on many differ-
ent length and time scales and are generally metastable. Most technologically use-
ful materials are polycrystalline microstructures composed of a myriad of small
monocrystalline grains separated by grain boundaries, and thus comprise cellular
networks. The energetics and connectivity of the grain boundary network plays a
crucial role in determining the properties of a material across a wide range of scales.
A central problem is to develop technologies capable of producing an arrangement
of grains that provides for a desired set of material properties. Traditionally the focus
has been on distributions of geometric features, like cell size, and a preferred distri-
bution of grain orientations, termed texture. Attaining these gives the configuration
order in a statistical sense. More recent mesoscale experiment and simulation permit
harvesting large amounts of information about both geometric features and crystal-
lography of the boundary network in material microstructures, [1, 2, 43, 58, 59].
This has led us to the notion of the Grain Boundary Character Distribution.
    The grain boundary character distribution (GBCD) is an empirical distribution of
the relative length (in 2D) or area (in 3D) of interface with a given lattice misorien-
tation and grain boundary normal.
    A first discovery is that during the growth process, an initially random grain
boundary arrangement reaches a steady state that is strongly correlated to the inter-
facial energy density. In simulation, a stationary GBCD is always found. Moreover
there is consistency between experimental GBCD’s and simulated GBCD’s. The
boundary network of a cellular structure is naturally ordered.
    A second discovery is that if the given interfacial energy depends only on lat-
tice misorientation, then the steady state GBCD and the density are related by a
Boltzmann distribution. This is among the simplest non-random distributions, cor-
responding to independent trials with respect to the density. Such straightforward
dependence between the character distribution and the interfacial energy offers evi-
dence that the GBCD is a material property. It is a leading candidate to characterize
A Theory and Challenges for Coarsening in Microstructure                           195

texture of the boundary network [43]. Why does such simplicity emerge from such
complexity?
    Here we describe our recent work developing an entropy based theory that sug-
gests that the evolving GBCD satisfies a Fokker-Planck Equation, [13, 14], cf. also
[12, 15], to which we refer for a more complete exposition. Coarsening in poly-
crystalline systems is a complicated process involving details of material structure,
chemistry, arrangement of grains in the configuration, and environment. In this con-
text, we consider just two competing global features, as articulated by C.S. Smith
[60]: cell growth according to a local evolution law and space filling constraints.
We shall impose curvature driven growth for the local evolution law, cf. Mullins
[54]. Space filling requirements are managed by critical events, rearrangements of
the network involving deletion of small contracting cells and facets. The proper-
ties of this system that characterize the GBCD must be identified and appropriately
upscaled or ‘coarse-grained’. For a perspective on these issues, we recommend the
article by R.V. Kohn [45].
    The general platform for this investigation is large scale computation. Numerical
simulations are well established as a major tool in the analysis of many physical
systems, see for example [22, 23, 25, 26, 29, 30, 46, 48–50, 52, 56, 61, 62, 64].
However, the idea of large scale computation as the essential method for the mod-
eling and comprehension of large complex systems is relatively new. Porous media
and groundwater flow is an important case of this, see for example [4–7, 33]. For
coarsening of cellular systems, it is a natural approach as well. The laboratory is the
venue to assess the validity of the local evolution law. Once this law is adopted, we
appeal to simulation, since we cannot control all the other elements present in the
experimental system, many of which are unknown. On the other hand, in silico we
may exercise, or at least we may attempt to exercise, precise control of the variables
appropriate to the evolution law and the constraint.
    There are many large scale metastable material systems, for example, magnetic
hysteresis, [19], and second phase coarsening, [51, 66]. In these, the theory is based
on mesoscopic or macroscopic variables simply abstracting the role of the smaller
scale elements of the system. There is no general ‘multiscale’ framework for upscal-
ing from the local behavior of individual cells to behavior of the network when they
interact and change their character. So we must attempt to tease the system level
information from the many coupled elements of which it consists. This information
will be available primarily from the dissipation relation (2.6) which is implied by the
balance of forces at triple junctions (2.3), due to Herring, [34, 35]. Lax resolution
of the Herring Condition gives rise to an unreliable GBCD.
    Our strategy is to introduce a simplified coarsening model that is driven by the
boundary conditions and reflects the dissipation relation of the grain growth system.
This will be more accessible to analysis. It resembles an ensemble of inertia-free
spring-mass-dashpots. For this simpler network, we learn how entropic or diffusive
behavior at the large scale emerges from a dissipation relation at the scale of local
evolution. The cornerstone is a novel implementation of the iterative scheme for
the Fokker-Planck Equation in terms of the system free energy and a Kantorovich-
Rubinstein-Wasserstein metric [39], cf. also [38], which will be summarized later in
the presentation.
196                                                                        K. Barmak et al.

Fig. 1 An arc Γ with normal
n, tangent b, and lattice
misorientation α, illustrating
lattice elements




    The network level nonequilibrium nature of the scheme leaves undetermined the
diffusion constant in the Fokker-Planck Equation, or equivalently the ‘temperature
parameter’ of the Boltzmann Distribution we are seeking. We employ the Kullback-
Leibler relative entropy, cf. (5.2), and find a convex duality problem for this parame-
ter. It has a statistical interpretation, or information theory interpretation, in terms of
an optimal prefix code, cf. e.g. [57], and moreover has evident connections to large
deviations. This suggests that had we simply asked to identify an optimal distribu-
tion via a known statistical method, we would have been led full circle to entropy
methods.



2 Reprise of Mesoscale Theory

Our point of departure is the common denominator theory for the mesoscale descrip-
tion of microstructure evolution. This is growth by curvature, the Mullins Equa-
tion (2.2) below, for the evolution of curves or arcs individually or in a network,
which we employ for our local law of evolution. Boundary conditions must be im-
posed where the arcs meet. This condition is the Herring Condition, (2.3), which is
the natural boundary condition at equilibrium for the Mullins Equation. Since their
introduction by Mullins, [54], and Herring, [34, 35], a large and distinguished body
of work has grown about these equations. Most relevant to here are [20, 32, 41, 55].
Curvature driven growth has old origins, dating at least to Burke and Turnbull [21].
Let α denote the misorientation between two grains separated by an arc Γ , as noted
in Fig. 1, with normal n = (cos θ, sin θ ), tangent direction b and curvature κ. Let
ψ = ψ(θ, α) denote the energy density on Γ . So

                           Γ : x = ξ(s, t),   0  s  L, t > 0,                      (2.1)

with
                 ∂ξ
              b=          (tangent) and n = Rb        (normal),
                 ∂s
                 ∂ξ
              v=          (velocity) and      vn = v · n (normal velocity),
                 ∂t
where R is a positive rotation of π/2. The Mullins Equation of evolution is

                                 vn = (ψθθ + ψ)κ     on Γ.                           (2.2)
A Theory and Challenges for Coarsening in Microstructure                              197

Fig. 2 Example of an instant
during the simulated
evolution of a cellular
network. This is from a small
simulation with constant
energy density and periodic
conditions at the border of the
configuration




We assume that only triple junctions are stable and that the Herring Condition holds
at triple junctions. This means that whenever three curves, {Γ (1) , Γ (2) , Γ (3) }, meet
at a point p the force balance, (2.3) below, holds:
                                                    
                                       ψθ n(i) + ψb(i) = 0.                         (2.3)
                                  i=1,...,3


It is easy to check that the instantaneous rate of change of energy of Γ is
                                             
                    d
                             ψ|b|ds = −            vn2 ds + v · (ψθ n + ψb)|∂Γ .    (2.4)
                    dt   Γ                    Γ

Consider a network of grains bounded by {Γi } subject to some condition at the
border of the region they occupy, like fixed end points or periodicity, cf. Fig. 2. The
important features of the algorithm used in the current simulation are given briefly
in the next Sect. 3. For the description of the previous algorithms the reader can
consult [42, 44]. The typical simulation consists in initializing a configuration of
cells and their boundary arcs, usually by a modified Voronoi tessellation, and then
solving the system (2.2), (2.3), eliminating facets when they have negligible length
and cells when they have negligible area, cf. Sect. 3. The total energy of the system
is given by
                                       
                               E(t) =          ψ|b|ds.                             (2.5)
                                                  {Γi } Γi
198                                                                        K. Barmak et al.

Owing exactly to the Herring Condition (2.3), the instantaneous rate of change of
the energy
               d                             
                  E(t) = −           vn2 ds +    v·   (ψθ n + ψb)
               dt
                            {Γi } Γi          TJ
                            
                       = −           vn2 ds
                                  {Γi } Γi

                          0,                                                        (2.6)
rendering the network dissipative for the energy in any instant absent of critical
events. Indeed, in an interval (t0 , t0 + τ ) where there are no critical events, we may
integrate (2.6) to obtain a local dissipation equation
                       t0 +τ 
                                      vn2 dsdt + E(t0 + τ ) = E(t0 )                (2.7)
                     {Γi } t0         Γi


which bears a strong resemblance to the simple dissipation relation for an ensemble
of inertia free springs with friction. In the simulation, the facet interchange and cell
deletion are arranged so that (2.6) is maintained.
   Suppose, for simplicity, that the energy density is independent of the normal
direction, so ψ = ψ(α). It is this situation that will concern us here. Then (2.2) and
(2.3) may be expressed

                                              vn = ψκ   on Γ,                        (2.8)
                                  
                                            ψb(i) = 0 at p,                          (2.9)
                                i=1,...,3

where p denotes a triple junction. Equation (2.9) is the same as the Young wetting
law.
   For this situation we define the grain boundary character distribution, GBCD,

         ρ(α, t) = relative length of arc of misorientation α at time t,
                              
         normalized so that      ρdα = 1.                                           (2.10)
                                  Ω




3 Discussion of the Simulation

Our simulation method involves a boundary tracking approach which is in contrast
to level set methods, for example recent work [24], and phase field methods, for
example [28, 40], used by other groups. We approximate only the network of grain
boundaries while other methods involve the interior of the grains as well. The loca-
tion of grain boundaries is implicit in these methods. The advantage of our method
A Theory and Challenges for Coarsening in Microstructure                              199

is the flexibility in applying a selected energy density on curves and the boundary
conditions at triple junctions. The evolution in our approach is based on a variational
approach for solving numerically the system (2.2), (2.3) for the network while man-
aging the critical events. It must be designed so it is robust and reliable statistics can
be harvested. Owing to the size and complexity of the network there are number of
challenges in the designing of the method. These include
• management of the data structure of cells, facets, and triple junctions, dynamic
  because of critical events;
• management of the computational domain;
• initialization of the computation;
• maintaining the triple junction boundary condition (2.3) while
• resolving Eqs. (2.2) with sufficient accuracy
We will address some of these issues below. We also need some diagnostics to un-
derstand the accuracy of the physical model and of the numerical scheme. Questions
of numerical accuracy can be addressed by mesh refinement and the convergence of
the approximate solutions. For physical accuracy of the model we look at certain
properties of the solutions. For example, it is known that the average area of cells
grows linearly even in very casual simulations of coarsening, although more careful
diagnostics show that the Herring Condition (2.3) in these efforts fails. As noted in
the introduction, this will lead to an unreliable determination of the GBCD.
   In view of the dissipation inequality (2.6) the evolution of the grain boundary
system may be viewed as a modified steepest descent for the energy. Therefore,
the cornerstone of our scheme which assures its stability is the discrete dissipation
inequality for the total grain boundary energy which holds when the discrete Herring
Condition is satisfied. In general, discrete dissipation principles ensure the stability
and convergence of numerical schemes to the continuous solution. The design of
our numerical scheme is based on a weak formulation, a variational principle which
avoids the additional complexity of higher order spaces. In particular, there is no
explicit use of curvature which is the case for direct discretization of Eqs. (2.2),
(2.3).
   The simulation of the grain network is done in three steps by evolving first the
grain boundaries, according to Mullin’s equation (2.2), and then updating the triple
points according to Herring’s boundary condition (2.3), imposed at the triple junc-
tions, and finally managing the rearrangement events. In our numerical simulations,
grain boundaries are defined by the set of nodal points and are approximated using
linear elements. In the algorithm, we define a global mesh size, h, and uniformly
discretized grain boundaries with local mesh size (distance between neighboring
nodal points) which depends on h. Due to the frequency of critical events, we have
used a first order method in time, namely the Forward Euler method. Increasing the
order of time discretization to 2 by using a predictor corrector method did not affect
the distribution functions, which is the focus of this study.

Resolution of the Herring Condition: To satisfy the Herring Condition (2.3) one has
to solve the nonlinear equation to determine the new position of the triple junction
200                                                                        K. Barmak et al.

[44]. We use the Newton method with line search [37] to approximate the new posi-
tion for the triple junction. As the initial guess for Newton’s method, we determine
the position of the triple point by defining the velocity of the triple junction to be
proportional to the total line stress at that point with coefficient of the proportionality
equal to the mobility. This is also dissipative for the network. The Newton algorithm
stops if it exceeds a certain tolerance on the number of the iterations. If the Newton
algorithm converges, the Herring Condition (2.3) is satisfied to machine precision
accuracy at the new position of the triple junction. If the Newton algorithm fails to
converge at some triple junctions (this happens when we work with very small cells)
we use our initial guess to update the triple junction position.

Critical events: As grain growth proceeds, critical events occur. When grain bound-
aries (GB) shrink below a certain size, they trigger one or more of the following
processes (i) short GB removal, (ii) splitting of unstable junctions (where more then
three GB meet), (iii) fixing double GB (GB that share two vertices).

Removal of short GB: A short GB whose length is decreasing is removed. If its
length is increasing, it is not removed.

Splitting unstable vertices: When a GB disappears, new vertices may appear where
more than three edges meet. These are unstable junctions which are split by intro-
ducing a new vertex and a new GB of short length. This step reduces the number of
edges meeting at the unstable junctions. This process continues until all vertices are
triple junctions. Details of each split are designed to maximally decrease the energy.



4 A Simplified Coarsening Model with Entropy and Dissipation
The coarsening process is irreversible because of its dissipative nature. Even in an
interlude when there are no rearrangement events, (2.7) shows that a configuration
cannot evolve to a former state from a later one. This could be a source of entropy for
the system. In our investigation, we view the principal source of entropy to be con-
figurational since we observe the evolution of an ‘upscaled’ ensemble represented
by a single statistic, the misorientation α, neglecting the remaining information. This
is also a source of irreversibility since we have forgotten information. We return to
this shortly.
    A significant difficulty in developing a theory for the GBCD, and understanding
texture development in general, lies in the lack of understanding of consequences
of rearrangement events or critical events, facet interchange and grain deletion, on
network level properties. For example, in Fig. 3, the average area of five-faceted
grains during a growth experiment on an Al thin film and the average area of five-
faceted cells in a typical simulation both increase with time. Now the von Neumann-
Mullins Rule is that the area An of a cell with n-facets satisfies

                                   An (t) = c(n − 6),                               (4.1)
A Theory and Challenges for Coarsening in Microstructure                          201

Fig. 3 The average area of
five-sided cell populations
during coarsening in two
different cellular systems
showing that the von
Neumann-Mullins n − 6-Rule
(4.1) does not hold at the
scale of the network. (Top) In
an experiment on Al thin
film, [8], and (bottom) a
typical simulation (arbitrary
units)




when ψ = const. and triple junctions meet at angles of 2π/3, [31, 53, 65]. This is
thought to hold approximately when anisotropy is small. The von Neumann-Mullins
Rule does not fail in the example above, of course, but cells observed at later times
had 6, 7, 8, . . . facets at earlier times. Thus in the network setting, changes which
rearrange the network play a major role.
   To address these issues, we will examine a much simpler 1D model which retains
kinetics and critical events but neglects curvature driven growth of the boundaries.
202                                                                           K. Barmak et al.

In our view, there are two important features of the coarsening system: the evo-
lution of the network by steepest descent of the surface energy and the irreversible
change/disappearance of the grain boundaries at certain discrete times, which is nec-
essary because the entire configuration is confined. Elaborating on the latter in the
two-dimensional setting of Fig. 2: at most times the evolution is smooth, but once in
a while a pair of neighboring triple points collides and the grain boundary that joins
them disappears forever.
    We have used this model to develop a statistical theory for critical events, [9–
11]. It has been found to have its own GBCD as well, [12–15], which we shall now
review.
    Our main idea in [12–15] is that the GBCD statistic for the simplified model
resembles the solution of a Fokker-Planck Equation via the mass transport implicit
scheme, [39]. In [12–15] the simplified model is formulated as a gradient flow which
results in a dissipation inequality analogous to the one found for the coarsening
grain network. Because of this simplicity, it will be possible to ‘upscale’ the net-
work level system description to a higher level GBCD description that accommo-
dates irreversibility. A more useful dissipation inequality is obtained by modifying
the viscous term to be a mass transport term, which now brings us to the realm
of the Kantorovich-Rubinstein-Wasserstein implicit scheme. As this changes the
ensemble, there is an entropic contribution, which we take to be proportional to
configurational entropy. This then suggests the Fokker-Planck paradigm.
    However, we do not know that the statistic solves the Fokker-Planck PDE but
we can ask if it shares important aspects of Fokker-Planck behavior. We give evi-
dence for this by asking for the unique ‘temperature-like’ parameter, the factor noted
above, the relative entropy achieves a minimum over long time. The empirical sta-
tionary distribution and Boltzmann distribution with the special value of ‘temper-
ature’ are in excellent agreement. This gives an explanation for the stationary dis-
tribution and the kinetics of evolution. At this point of our investigations, we do
not know that the two dimensional network has the detailed dissipative structure
of the simplified model, but we are able to produce evidence that the same argu-
ment employing the relative entropy does suggest the correct kinetics and stationary
distribution.



4.1 Formulation

The simplified coarsening model, driven by the boundary conditions, reflects the
dissipation relation of the grain growth system. It resembles an ensemble of inertia-
free spring-mass-dashpots. It is an abstraction of the role of triple junctions in the
presence of the rearrangement events.
   Let I ⊂ R be an interval of length L partitioned by points xi , i = 1, . . . , n, where
xi < xi+1 , i = 1, . . . , n − 1 and xn+1 identified with x1 . For each interval [xi , xi+1 ],
i = 1, . . . , n select a random misorientation number αi ∈ (−π/4, π/4]. The inter-
vals [xi , xi+1 ] correspond to grain boundaries (but not the 1D “grain”) with mis-
orientations αi and the points xi represent the triple junctions. Choose an energy
A Theory and Challenges for Coarsening in Microstructure                                 203

density ψ(α)  0 and introduce the energy
                                
                         E=          ψ(αi )(xi+1 − xi ).                                (4.2)
                                     i=1,...,n

To have consistency with the evolution of the 2D cellular network, we impose gra-
dient flow kinetics with respect to (4.2), which is just the system of ordinary differ-
ential equations

   dxi    ∂E
       =−     ,      i = 1, . . . , n, that is
   dt     ∂xi
                                                                                        (4.3)
   dxi                                                         dx1
       = ψ(αi ) − ψ(αi−1 ),          i = 2, . . . , n,   and       = ψ(α1 ) − ψ(αn ).
   dt                                                          dt
The velocity vi of the ith boundary is

                        dxi+1 dxi
                 vi =        −    = ψ(αi−1 ) − 2ψ(αi ) + ψ(αi+1 ).                      (4.4)
                         dt    dt
The grain boundary velocities are constant until one of the boundaries collapses.
That segment is removed from the list of current grain boundaries and the velocities
of its two neighbors are changed due to the emergence of a new junction. Each
such deletion event rearranges the network and, therefore, affects its subsequent
evolution just as in the two dimensional cellular network. Actually, since the interval
velocities are constant, this gradient flow is just a sorting problem. At any time, the
next deletion event occurs at smallest positive value of
                                              xi − xi+1
                                                        .
                                                  vi
The length li (t) of the ith interval is linear in t until it reaches 0 or until a collision
event, when it becomes linear with a different slope. In any event, it is continuous,
so E(t), t > 0, the sum of such functions multiplied by factors, is continuous.
   At any time t between deletion events,

                                  dE     dxi 2
                                     =−          0.                                    (4.5)
                                  dt      dt
Next consider for the 1D system (4.3), a time interval (t0 , t0 + τ ) with no critical
events for now. Then we obtain a grain growth analog of the spring-mass-dashpot-
like local dissipation inequality,

                            τ dx 2
                                          i
                                              dt + E(t0 + τ ) = E(t0 ).                 (4.6)
                                        dt
                         i=1...n 0

With an appropriate interpretation of the sum, (4.6) holds for all t0 and almost every
τ sufficiently small. The dissipation equality (4.6) can also be rewritten in terms of
204                                                                              K. Barmak et al.

grain boundary velocities as follows:
                                τ
                      1 
                                   vi2 dt + E(t0 + τ )  E(t0 ).                           (4.7)
                      4         0
                            i=1...n

The energy of the system at time t0 + τ is determined by its state at time t0 . Vice
versa, changing the sign on the right hand side of (4.3) allows us to begin with the
state at time t0 + τ and return to the state of time t0 : the system is reversible in an
interval of time absent of rearragement events. This is no longer the situation after
such an event. At the later time, we have no knowledge about which interval, now
no longer in the inventory, was deleted.
   As explained in [12–14], we can introduce now the idea of GBCD for the simpli-
fied 1D model. Let us consider a new ensemble based on the misorientation param-
eter α where we take Ω: − π4  α  π4 , for later ease of comparison with the two
dimensional network for which we are imposing “cubic” symmetry, i.e., “square”
symmetry in the plane. The GBCD or character distribution in this context is, as
expected, the histogram of lengths of intervals sorted by misorientation α scaled to
be a probability distribution on Ω. To be precise, we let

      li (α, t) = xi+1 (t) − xi (t)
              = length of the ith interval, where explicit note has been taken of
                 its misorientation parameter α.

Partition Ω into m subintervals of length h = π2 m1 and define
                                                    1
           ρ(α, t) :=                      li α  , t ·    ,   for (k − 1)h < α  kh.      (4.8)
                                                        Lh
                        α  ∈((k−1)h,kh]

For this definition of the statistic,
                                    
                                               ρ(α, t)dα = 1.
                                           Ω

One may express (4.7) in terms of the character distribution (4.8), which amounts to
      t0 +τ           2                                   
                ∂ρ      
                        
 μ0             (α, t) dαdt +        ψ(α)ρ(α, t0 + τ )dα        ψ(α)ρ(α, t0 )dα,
      t0      Ω ∂t                  Ω                           Ω
                                                                                (4.9)
where μ0 > 0 is some constant.
   The expression (4.9) is in terms of the new misorientation level ensemble, up-
scaled from the local level of the original system. We now introduce, as discussed
earlier, the modeling assumption, consistent with the lack of reversibility when re-
arrangement/or critical events occur and add an entropic contribution to (4.9). We
consider a standard configurational entropy,
                                    
                                  +     ρ log ρdα,                             (4.10)
                                                Ω
A Theory and Challenges for Coarsening in Microstructure                                        205

although this is not the only choice. Minimizing (4.10) favors the uniform state,
which would be the situation were ψ(α) = constant. A tantalizing clue to the de-
velopment of texture will be whether or not this entropy strays from its minimum
during the simulation.
    Given that (4.9) holds, we assume now that there is some λ > 0 such that for any
t0 and τ sufficiently small that
                     t0 +τ            2                                         
                                    ∂ρ                                               
               μ0                              dαdt +             (ψρ + λρ log ρ)dα 
                     t0         Ω   ∂t                        Ω                       t0 +τ
                                                
                                                 
                             (ψρ + λρ log ρ)dα  .                                          (4.11)
                          Ω                              t0

E(t) was analogous to an internal energy or the energy of a microcanonical ensem-
ble and now
                                                
                    F (ρ) = Fλ (ρ) = E(t) + λ      ρ log ρdα                (4.12)
                                                                       Ω
is a free energy. The value of the parameter λ is unknown and will be determined in
the Validation Sect. 5.



4.2 The Mass Transport Paradigm

The kinetics of the simplified problem will be understood by interpreting the dissi-
pation principle for the GBCD in terms of a mass transport implicit scheme. In fact,
(4.11) fails as a proper dissipation principle because the first term
                                          t0 +τ                2
                                                          ∂ρ
                                    μ0                                 dαdt                   (4.13)
                                          t0        Ω     ∂t

does not represent lost energy due to frictional or viscous forces. For a deformation
path f (α, t), 0  t  τ , of probability densities, this quantity is
                                           τ
                                                       v 2 f dαdt                             (4.14)
                                               0   Ω

where f , v are related by the continuity equation and initial and terminal conditions

                          ft + (vf )α = 0          in Ω × (0, τ ),            and
                                                                                              (4.15)
                          f (α, 0) = ρ(α, 0),                 f (α, τ ) = ρ(α, τ ),

by analogy with fluids [47], p. 53 et seq., and elementary mechanics. (We have set
t0 = 0 for convenience.)
206                                                                              K. Barmak et al.

    On the other hand, by a result of Benamou and Brenier [18], given two probabil-
ity densities f ∗ , f on Ω, the Wasserstein distance d(f, f ∗ ) between them is given
by
                          τ
      1        
               ∗ 2
        d f, f     = inf        v 2 f dξ dt
      τ                   0   Ω

      over deformation paths f (ξ, t) subject to                                          (4.16)
      ft + (vf )ξ = 0 (continuity equation),
      f (ξ, 0) = f ∗ (ξ ),        f (ξ, τ ) = f (ξ ) (initial and terminal conditions).

    Let us briefly review the notion of Kantorovich-Rubinstein-Wasserstein metric,
or simply Wasserstein metric. The reader can consult [3, 63] for more detailed ex-
position of the subject.
    Let D ⊂ R be an interval, perhaps infinite, and f ∗ , f a pair of probability densi-
ties on D (with finite variance). The quadratic Wasserstein metric or 2-Wasserstein
metric is defined to be
                                     
                            2
                     d f, f ∗ = inf        |x − y|2 dp(x, y),
                                   P D×D                                          (4.17)
                         P = joint distributions for f, f ∗ on D̄ × D̄,

i.e., the marginals of any p ∈ P are f, f ∗ . The metric induces the weak-∗ topology
on C(D̄) . If f, f ∗ are strictly positive, there is a transfer map which realizes p,
essentially the solution of the Monge-Kantorovich mass transfer problem for this
situation. This means that there is a strictly increasing

           φ : D → D such that
                             
                                     
               ζ (y)f (y)dy =   ζ φ(x) f ∗ (x)dx,             ζ ∈ C(D̄),     and
             D                        D                                                   (4.18)
                             
                  2                    
           d f, f ∗ =            x − φ(x)2 f ∗ dx.
                             D

In this one dimensional situation, as was known to Frechét, [27],
                                   
                  φ(x) = F ∗−1 F (x) , x ∈ D, where
                           x                        x
                   ∗
                                    
                                 ∗ 
                                                                                        (4.19)
                  F (x) =       f x dx and F (x) =      f x  dx 
                                 −∞                                −∞

are the distribution functions of f ∗ , f . In one dimension there is only one trans-
fer map. The conditions (4.16) are in ‘Eulerian’ form. Likewise there is the ‘La-
grangian’ form which follows by rewriting (4.16) using the transfer function formu-
A Theory and Challenges for Coarsening in Microstructure                           207

lation in (4.18),
                                       τ
                     1        2
                       d f, f ∗ = inf       φt2 f ∗ dx
                     τ                 0  D
                                                                                (4.20)
                     over transfer paths φ(x, t) from D to D with
                     φ(x, 0) = x     and φ(x, τ ) = φ(x).

Therefore, our goal is to replace (4.13) with (4.14). Since the associated metrics
induce different topologies, an estimate must involve additional terms. Assume that
our statistic ρ(α, t) satisfies

                             ρ(α, t)  δ > 0 in Ω, t > 0.                       (4.21)

This is a necessary assumption for our estimates below. In fact, to proceed with
the implicit scheme introduced later, it is sufficient to require (4.21) just for the
initial data ρ0 (α) since this property is inherited by the iterates. We now use the
representation (4.16) and we use the deformation path given by ρ itself to calculate
that for some cΩ > 0,
                       τ                          τ
       1        2                          cΩ           ∂ρ
         d ρ, ρ ∗            v 2 ρdxdt                      (x, t)2 dxdt,
       τ               0    Ω             min Ω  ρ  0   Ω  ∂t                  (4.22)
         ∗
       ρ (x) = ρ(x, 0) and ρ(x) = ρ(x, τ ),

where 0 represents an arbitrary starting time and τ a relaxation time.
  Thus there is a μ > 0 such that for any relaxation time τ > 0,
                         
                      μ τ                                 
                                v 2 ρdαdt + Fλ (ρ)  Fλ ρ ∗ .                   (4.23)
                      2 0 Ω
   We next replace (4.23) by a minimum principle, arguing that the path given by
ρ(α, t) is the one most likely to occur and the minimizing path has the highest
probability. For this step, let ρ ∗ = ρ(·, t0 ) and ρ = ρ(·, t + τ ). Observe that from
(4.16),
                        τ
    1        2
      d ρ, ρ ∗ = inf            v 2 f dαdt
    τ                    0   Ω

    over deformation paths f (α, t) subject to
    ft + (vf )α = 0 (continuity equation),
    f (ξ, 0) = ρ ∗ (α),      f (α, τ ) = ρ(α, τ )
                                              (initial and terminal conditions),
                                                                             (4.24)
where d is the Wasserstein metric. So we may express the minimum principle in the
form
               μ         2                μ          2
                  d ρ, ρ ∗ + Fλ (ρ) = inf      d η, ρ ∗ + Fλ (η) .           (4.25)
               2τ                      {η} 2τ
208                                                                       K. Barmak et al.

For each relaxation time τ > 0 we determine iteratively the sequence {ρ (k) } by
choosing ρ ∗ = ρ (k−1) and ρ (k) = ρ in (4.25) and set

                ρ (τ ) (α, t) = ρ (k) (α)   in Ω for kτ  t < (k + 1)τ.            (4.26)

We then anticipate recovering the GBCD ρ as

                                ρ(α, t) = lim ρ (τ ) (α, t),                       (4.27)
                                            τ →0

with the limit taken in a suitable sense. It is known that ρ obtained from (4.27) is
the solution of the Fokker-Planck Equation, [39],
                                             
                     ∂ρ     ∂      ∂ρ      
                   μ    =        λ    +ψ ρ        in Ω, 0 < t < ∞.            (4.28)
                     ∂t    ∂α      ∂α
We might point out here, as well, that a solution of (4.28) with periodic boundary
conditions and nonnegative initial data is positive for t > 0.



5 Validation of the Scheme
We now begin the validation step of our model. The procedure which leads to the
implicit scheme, based on the dissipation inequality (4.7), holds for the entire sys-
tem but does not identify individual intermediate ‘spring-mass-dashpots’. The con-
sequence is that we cannot set the temperature-like parameter σ , but in some way
must decide if one exists. Introduce the notation for the Boltzmann distribution with
parameter λ
                                                          
                      1 − 1 ψ(α)                                 1
            ρλ (α) =     e λ      , α ∈ Ω, with Zλ =          e− λ ψ(α) dα.     (5.1)
                     Zλ                                    Ω

   With validation we would gain qualitative properties of solutions of (4.28):
• ρ(α, t) → ρσ (α) as t → ∞, and
• this convergence is exponentially fast.
The Kullback-Leibler relative entropy for (4.28) is given by
                                        
                                                   η
                 Φλ (η) = Φ(ηρλ ) =        η log dα where
                                          Ω       ρλ
                                                                                   (5.2)
                 η  0 in Ω,              ηdα = 1,
                                            Ω

with ρλ from (5.1). By Jensen’s Inequality it is always nonnegative. In terms of the
free energy (4.12) and (5.1), (5.2) is given by
                                      1
                              Φλ (η) = Fλ (η) + log Zλ .                            (5.3)
                                      λ
A Theory and Challenges for Coarsening in Microstructure                             209

(Note: In our earlier work [13, 14], we defined relative entropy to be λ times (5.2).)
A solution ρ of (4.28) has the property that

                                Φλ (ρ) → 0 as t → ∞.                               (5.4)

Therefore, we seek to identify the particular λ = σ for which Φσ defined by the
GBCD statistic ρ tends monotonically to the minimum of all the {Φλ } as t becomes
large. We then ask if the terminal, or equilibrium, empirical distribution ρ is equal
to ρσ . Note that since

                        f (x, y) = x log x − x log y,          x, y > 0,

is convex, Φ(ηρλ ) is a convex function of (η, ρλ ). We assign a time t = T∞ and
seek to minimize (5.2) at T∞ . With
                                                ψ
                                   ψλ =           + log Zλ ,                       (5.5)
                                                λ
this minimization is a convex duality type of optimization problem, namely, to find
the σ for which
                                            
                  {ψσ ρ + ρ log ρ}dα = inf      {ψλ ρ + ρ log ρ}dα.           (5.6)
                  Ω                               {ψλ } Ω

Note that
                                       
                                               e−ψλ dα = 1
                                           Ω
which gives the minimization in (5.6) the form of finding an optimal prefix code,
e.g. [57]. Here the potential ψλ , the code, is minimized in a family rather than the
unknown density ρ itself, which is the given alphabet. For practical purposes, note
that
                                                 
                                                1
                 Φ(ρρλ ) =       ρ log ρdα +        ψρdα + log Zλ              (5.7)
                                Ω               λ Ω
is a strictly convex non-negative function of the ‘inverse temperature’ β = λ1 , β > 0,
and thus admits a unique minimum.
    The information theory interpretation is that we are minimizing the information
loss among trial encodings of the alphabet represented by the statistic ρ. In this
sense we see that asking for an optimal distribution ρσ to represent our statistic ρ,
necessarily introduces (relative) entropy in our considerations, returning us, as it
were, full circle.
    From a given simulation, we harvest the GBCD statistic. It is a trial. The convex-
ity of Φ(ρρλ ) suggests that we can average trials. For trials {ρ1 , . . . , ρN },
                                        
                        1                    1 
                    Φ              ρi ρλ               Φ(ρi ρλ ).                (5.8)
                        N                     N
                           i=1,...,N                   i=1,...,N
210                                                                     K. Barmak et al.

So we can seek the optimal λ = σ by optimizing with the averaged trial. We shall
illustrate this for the validation process for the two dimensional simulation.



5.1 An Example of the Simplified Problem

For the simplified coarsening model, we consider
                                                     
                                                  π π
                      ψ(α) = 1 + 2α in Ω = − ,
                                     2
                                                        ,                         (5.9)
                                                  4 4

and shall identify a unique such parameter, which we label σ , by seeking the mini-
mum of the relative entropy (5.2), namely by inspection of plots of (5.6) and (5.7),
and then comparing ρ with the found ρσ . This ψ the development to second order
of ψ(α) = 1 + 0.5 sin2 2α used in the 2D simulation. Moreover, since the potential
is quadratic, it represents a version of the Ornstein-Uhlenbeck process. We agree
that T∞ = T (80 %) = 6.73 represents time equals infinity. This is the time at which
80 % of the segments have been deleted and corresponds to the stationary config-
uration in the two-dimensional simulation. For the simplified critical event model
we are considering, it is clear that by computing for a sufficiently long time, all
cells will be gone. This time may be quite long. For comparison, T (90 %) = 30 and
T (95 %) = 103. There may be additional criteria for choosing a T in the neighbor-
hood of T (80 %) and we may wish to discuss this later. The results are reported in
Fig. 4.



6 The Entropy Method for the GBCD

6.1 Quadratic Interfacial Energy Density

We shall apply the method of Sect. 5 to the GBCD harvested from the 2D simulation.
We consider first a typical simulation with the energy density
                                                π      π
                ψ(α) = 1 + (sin 2α)2 ,     −      α  ,  = 1/2.                (6.1)
                                                4      4
Figure 5, initialized with 104 cells and normally distributed misorientation angles
and terminated when 2000 cells remain. At this stage, the simulation is essentially
stagnant. Five trials were executed and we consider the average of ρ of the empir-
ical GBCD’s. Possible ‘temperature’ parameters λ and ρλ in (5.1) for the density
(6.1) are constructed. This ρλ then defines a trial relative entropy via (5.2). We now
identify the parameter σ , which turns out to be σ ≈ 0.1, and the value of the relative
entropy Φσ (T∞ ) ≈ 0.01, which is about 10 % of its initial value, Fig. 6. From Fig. 7
(top), we see that this relative entropy Φσ has exponential decay until it reaches
A Theory and Challenges for Coarsening in Microstructure                       211

Fig. 4 Graphical results for
the simplified coarsening
model. (Top) Relative entropy
plots for selected values of λ
with Φσ noted in red. The
value of σ = 0.0296915.
(Bottom) Empirical
distribution at time
t = T = T∞ in red compared
with ρσ in black (Color figure
online)




time about t = 1.5, after which it remains constant. The averaged empirical GBCD
is compared with the Boltzmann distribution in Fig. 7 (bottom). The solution itself
then tends exponentially in L1 to its limit ρσ by the Kullback-Leibler Inequality.
212                                                                  K. Barmak et al.

Fig. 5 (Top) The energy
density ψ(α) = 1 +  sin2 2α,
|α| < π/4,  = 12 . (Bottom)
The entropy of ρ(α, t) as a
function of time t is
increasing, suggesting the
development of order in the
configuration




6.2 Quartic Interfacial Energy Density

Our second example is a quartic energy, Fig. 8,

                                                π      π
                  ψ(α) = 1 + (sin 2α)4 ,   −      α  ,  = 1/2.             (6.2)
                                                4      4
A Theory and Challenges for Coarsening in Microstructure                        213

Fig. 6 In these plots, the
GBCD ρ is averaged over 5
trials. (Top) The relative
entropy of the grain growth
simulation with energy
density (6.1) for a sequence
of Φλ vs. t with the optimal
choice σ ≈ 0.1 noted in red.
(Bottom) Relative entropy for
an indicated range of values
of temperature parameter λ at
the terminal time
t = T∞ = 2.3. The minimum
value of the relative entropy is
≈ 0.01 (Color figure online)




Again, a configuration of 104 cells is initialized with normally distributed misori-
entations and, this time, the computation proceeds until about 1000 cells remain.
The relative entropy and the equilibrium Boltzmann statistic stabilize when 2000
cells remain. Seven trials were executed and we consider the average of ρ of seven
empirical GBCD’s. Results are summarized in Fig. 9 and Fig. 10.
214                                                                K. Barmak et al.

Fig. 7 In these plots, the
GBCD is averaged over 5
trials. (Top) Plot of − log Φσ
vs. t with energy density
(6.1). It is approximately
linear until it becomes
constant showing that Φσ
decays exponentially.
(Bottom) GBCD ρ (red) and
Boltzmann distribution ρσ
(black) for the potential ψ of
(6.1) with parameter σ ≈ 0.1
as predicted by our theory
(Color figure online)




6.3 Remarks on a Theory for the Diffusion Coefficient σ or the
    Temperature-Like Parameter

The network level nonequilibrium nature of the iterative scheme introduced in our
theory Sects. 4–5, leaves free a temperature-like parameter σ . However, as we
A Theory and Challenges for Coarsening in Microstructure                            215

Fig. 8 The energy density
ψ(α) = 1 +  sin4 2α,
|α| < π/4,  = 12




showed in Sect. 5, we can uniquely identify σ . But can we a priori determine or con-
trol this temperature-like parameter? There are different approaches to this question,
none of which have been especially successful at this point. One possible approach
is to consider a different theory that is developed for the simplified model based on
the kinetic equations description in [11]. However, this particular description [11]
would have to be improved, since it does not produce a very good result for σ at
this point. However, this method would still have only an empirical flavor: the value
of σ will be obtained once the solution of kinetic equations is computed. Another
direction to consider here is based on the statistical analysis of the data obtained
from many trials and to understand the possible connection to branching processes.



7 Closing Comments
Engineering the microstructure of a material is a central task of materials science
and its study gives rise to a broad range of basic science issues, as has been long
recognized. Central to these issues is the coarsening of the cellular structure. Here
we have outlined an entropy based theory of the GBCD which is an upscaling of
cell growth according to the two most basic properties of a coarsening network:
a local evolution law and space filling contraints. The theory accommodates the
irreversibility conferred by the critical events or topological rearrangements which
arise during coarsening. It adds to the body of evidence that the evolution of the
boundary network is the primary origin of texture development. It accounts both for
the GBCD and its kinetics.
    There are many known environments where the kinetics of growth do not seem to
follow this sort of pattern. Let us briefly consider one, stagnation in the evolution of
216                                                                   K. Barmak et al.

Fig. 9 In these plots, the
GBCD ρ is averaged over 7
trials. (Top) The relative
entropy of the grain growth
simulation with energy
density (6.2) for a sequence
of Φλ vs. t with the optimal
choice σ ≈ 0.095 noted in
red. (Bottom) Relative
entropy for an indicated range
of values of temperature
parameter σ at the terminal
time t = T∞ = 3. The
minimum value of the relative
entropy is ≈ 0.007 (Color
figure online)




metallic (Cu and Al) thin films, important for the metallization of semiconductors,
[16, 17]. Stagnation means that the growth process appears to stop even though the
material remains in the furnace. Some progress is found in [36]. A striking feature
of these films is a nearly exact log-normal distribution of the relative grain diame-
ters based on a study of 27 samples consisting of 35,000 grains prepared in different
A Theory and Challenges for Coarsening in Microstructure                                      217

Fig. 10 Comparison of the
empirical distribution at time
t = T∞ = 3, when 80 % of
the cells have been deleted,
with ρσ , the Boltzmann
distribution of (5.1), with σ
extracted from Fig. 9. The
GBCD ρ is averaged over 7
trials




experiments in a wide variety of conditions. The grain diameter is, basically, the
square root of its area. This distribution is not found in any simulation of coarsening
known to us. One possible starting point for an investigation is the well known Kol-
mogorov “rock crushing” problem, which has a representation as a scaled branching
process.
   The stagnation isssue is, of course, just a hint of the variety of challenges we
encounter in this exciting field.

Acknowledgements Much of this research was done while E. Eggeling, Y. Epshteyn and
R. Sharp were postdoctoral associates at the Center for Nonlinear Analysis at Carnegie Mellon
University. We are grateful to our colleagues G. Rohrer, A.D. Rollett, R. Schwab, and R. Suter for
their collaboration.




References
 1. Adams, B.L., Kinderlehrer, D., Mullins, W.W., Rollett, A.D., Ta’asan, S.: Extracting the rela-
    tive grain boundary free energy and mobility functions from the geometry of microstructures.
    Scr. Mater. 38(4), 531–536 (Jan 13 1998)
 2. Adams, B.L., Kinderlehrer, D., Livshits, I., Mason, D., Mullins, W.W., Rohrer, G.S., Rollett,
    A.D., Saylor, D., Ta’asan, S., Wu, C.: Extracting grain boundary energy from triple junction
    measurement. Interface Sci. 7, 321–338 (1999)
 3. Ambrosio, L., Gigli, N., Savaré, G.: Gradient Flows in Metric Spaces and in the Space of Prob-
    ability Measures, 2nd edn. Lectures in Mathematics ETH Zürich. Birkhäuser, Basel (2008)
 4. Arbogast, T.: Implementation of a locally conservative numerical subgrid upscaling scheme
    for two-phase Darcy flow. Comput. Geosci. 6(3–4), 453–481 (2002). Locally conservative
    numerical methods for flow in porous media
218                                                                                K. Barmak et al.

 5. Arbogast, T., Lehr, H.L.: Homogenization of a Darcy-Stokes system modeling vuggy porous
    media. Comput. Geosci. 10(3), 291–302 (2006)
 6. Balhoff, M.T., Thomas, S.G., Wheeler, M.F.: Mortar coupling and upscaling of pore-scale
    models. Comput. Geosci. 12(1), 15–27 (2008)
 7. Balhoff, M., Mikelić, A., Wheeler, M.F.: Polynomial filtration laws for low Reynolds number
    flows through porous media. Transp. Porous Media 81(1), 35–60 (2010)
 8. Barmak, K.: unpublished
 9. Barmak, K., Emelianenko, M., Golovaty, D., Kinderlehrer, D., Ta’asan, S.: On a statistical
    theory of critical events in microstructural evolution. In Proceedings CMDS 11, pp. 185–194.
    ENSMP Press, Paris (2007)
10. Barmak, K., Emelianenko, M., Golovaty, D., Kinderlehrer, D., Ta’asan, S.: Towards a sta-
    tistical theory of texture evolution in polycrystals. SIAM J. Sci. Comput. 30(6), 3150–3169
    (2007)
11. Barmak, K., Emelianenko, M., Golovaty, D., Kinderlehrer, D., Ta’asan, S.: A new perspective
    on texture evolution. Int. J. Numer. Anal. Model. 5(Sp. Iss. SI), 93–108 (2008)
12. Barmak, K., Eggeling, E., Emelianenko, M., Epshteyn, Y., Kinderlehrer, D., Ta’asan, S.: Ge-
    ometric growth and character development in large metastable systems. Rend. Mat, Ser. VII
    29, 65–81 (2009)
13. Barmak, K., Eggeling, E., Emelianenko, M., Epshteyn, Y., Kinderlehrer, D., Sharp, R.,
    Ta’asan, S.: Critical events, entropy, and the grain boundary character distribution. Phys. Rev.
    B 83(13), 134117 (Apr 2011)
14. Barmak, K., Eggeling, E., Emelianenko, M., Epshteyn, Y., Kinderlehrer, D., Sharp, R.,
    Ta’asan, S.: An entropy based theory of the grain boundary character distribution. Discrete
    Contin. Dyn. Syst. 30(2), 427–454 (2011)
15. Barmak, K., Eggeling, E., Emelianenko, M., Epshteyn, Y., Kinderlehrer, D., Sharp, R.,
    Ta’asan, S.: Predictive theory for the grain boundary character distribution. In: Materials Sci-
    ence Forum, vols. 715–716, pp. 279–285. Trans Tech Publications, Durnten-Zurich (2012)
16. Barmak, K., Eggeling, E., Sharp, R., Roberts, S., Shyu, T., Sun, T., Yao, B., Ta’asan, S.,
    Kinderlehrer, D., Rollett, A., Coffey, K.: Grain growth and the puzzle of its stagnation in thin
    films: A detailed comparison of experiments and simulations. In: Materials Science Forum,
    vols. 715–716, pp. 473–479. Trans Tech Publications, Durnten-Zurich (2012)
17. Barmak, K., Eggeling, E., Sharp, R., Ta’asan, S., Kinderlehrer, D., Rollett, A., Coffey, K.:
    Grain growth and the puzzle of its stagnation in thin films: a detailed comparison of experi-
    ments and simulations (2012, submitted), cf. Center for Nonlinear Analysis, Carnegie Mellon
    University, preprint 10-CNA-012
18. Benamou, J.-D., Brenier, Y.: A computational fluid mechanics solution to the Monge-
    Kantorovich mass transfer problem. Numer. Math. 84(3), 375–393 (2000)
19. Bertotti, G.: Hysteresis in Magnetism. Academic Press, San Diego (1998)
20. Bronsard, L., Reitich, F.: On three-phase boundary motion and the singular limit of a vector-
    valued Ginzburg-Landau equation. Arch. Ration. Mech. Anal. 124(4), 355–379 (1993)
21. Burke, J.E., Turnbull, D.: Recrystallization and grain growth. Prog. Met. Phys. 3(C), 220–244
    (1952). IN11–IN12, 245–266, IN13–IN14, 267–274, IN15, 275–292
22. Ciarlet, P.G.: The Finite Element Method for Elliptic Problems. Studies in Mathematics and
    Its Applications, vol. 4. North-Holland, Amsterdam (1978)
23. DeSimone, A., Kohn, R.V., Müller, S., Otto, F., Schäfer, R.: Two-dimensional modelling of
    soft ferromagnetic films. R. Soc. Lond. Proc., Ser. A, Math. Phys. Eng. Sci. 457(2016), 2983–
    2991 (2001)
24. Elsey, M., Esedoḡlu, S., Smereka, P.: Diffusion generated motion for grain growth in two and
    three dimensions. J. Comput. Phys. 228(21), 8015–8033 (2009)
25. Epshteyn, Y., Rivière, B.: On the solution of incompressible two-phase flow by a p-version
    discontinuous Galerkin method. Commun. Numer. Methods Eng. 22, 741–751 (2006)
26. Epshteyn, Y., Rivière, B.: Fully implicit discontinuous finite element methods for two-phase
    flow. Appl. Numer. Math. 57, 383–401 (2007)
A Theory and Challenges for Coarsening in Microstructure                                        219

27. Fréchet, M.: Sur la distance de deux lois de probabilite. C. R. Acad. Sci., Sér. 1 Math. 244(6),
    689–692 (1957)
28. Garcke, H., Nestler, B., Stoth, B.: A multiphase field concept: numerical simulations of mov-
    ing phase boundaries and multiple junctions. SIAM J. Appl. Math. 60(1), 295–315 (2000)
    (electronic)
29. Godunov, S.K.: A difference method for numerical calculation of discontinuous solutions of
    the equations of hydrodynamics. Mat. Sb. (N.S.) 47(89), 271–306 (1959)
30. Godunov, S.K., Ryaben’kii, V.S.: Difference Schemes. Studies in Mathematics and Its Appli-
    cations, vol. 19. North-Holland, Amsterdam (1987). An introduction to the underlying theory,
    translated from the Russian by E.M. Gelbard
31. Gomer, R., Smith, C.S. (eds.): Structure and Properties of Solid Surfaces. The University of
    Chicago Press, Chicago (1952). Proceedings of a conference arranged by the National Re-
    search Council and held in September 1952, in Lake Geneva, Wisconsin, USA
32. Gurtin, M.: Thermomechanics of Evolving Phase Boundaries in the Plane. Clarendon, Oxford
    (1993)
33. Helmig, R.: Multiphase Flow and Transport Processes in the Subsurface. Springer, Berlin
    (1997)
34. Herring, C.: Surface tension as a motivation for sintering. In: Kingston, W.E. (ed.) The Physics
    of Powder Metallurgy, pp. 143–179. McGraw-Hill, New York (1951)
35. Herring, C.: The use of classical macroscopic concepts in surface energy problems. In: Gomer,
    R., Smith, C.S. (eds.) Proceedings of a Conference Arranged by the National Research Council
    and Held in September 1952, in Lake Geneva, Wisconsin, USA, pp. 5–81 (1952)
36. Holm, E.A., Foiles, S.M.: Grain growth stagnation caused by the grain boundary roughen-
    ing transition. In: Materials Science Forum, vols. 715–716, p. 415. Trans Tech Publications,
    Durnten-Zurich (2012)
37. Iserles, A.: A First Course in the Numerical Analysis of Differential Equations. Cambridge
    Texts in Applied Mathematics. Cambridge University Press, Cambridge (1996)
38. Jordan, R., Kinderlehrer, D., Otto, F.: Free energy and the Fokker-Planck equation. Physica D
    107(2–4), 265–271 (Sep 1, 1997)
39. Jordan, R., Kinderlehrer, D., Otto, F.: The variational formulation of the Fokker-Planck equa-
    tion. SIAM J. Math. Anal. 29(1), 1–17 (Jan 1998)
40. Kim, S.G., Kim, D.I., Kim, W.T., Park, Y.B.: Computer simulations of two-dimensional and
    three-dimensional ideal grain growth. Phys. Rev. E 74, 061605 (2006)
41. Kinderlehrer, D., Liu, C.: Evolution of grain boundaries. Math. Models Methods Appl. Sci.
    11(4), 713–729 (Jun 2001)
42. Kinderlehrer, D., Lee, J., Livshits, I., Rollett, A., Ta’asan, S.: Mesoscale simulation of grain
    growth. In: Recrystallization and Grain Growth, Pts 1 and 2, vol. 467–470, pp. 1057–1062
    (2004)
43. Kinderlehrer, D., Livshits, I., Rohrer, G.S., Ta’asan, S., Yu, P.: Mesoscale simulation of the
    evolution of the grain boundary character distribution. In: Recrystallization and Grain Growth,
    Pts 1 and 2, vols. 467–470, pp. 1063–1068 (2004)
44. Kinderlehrer, D., Livshits, I., Ta’asan, S.: A variational approach to modeling and simulation
    of grain growth. SIAM J. Sci. Comput. 28(5), 1694–1715 (2006)
45. Kohn, R.V.: Irreversibility and the statistics of grain boundaries. Physics 4, 33 (Apr 2011)
46. Kohn, R.V., Otto, F.: Upper bounds on coarsening rates. Commun. Math. Phys. 229(3), 375–
    395 (2002)
47. Landau, L.D., Lifshitz, E.M.: Fluid mechanics. In: Course of Theoretical Physics, vol. 6. Perg-
    amon Press, London (1959). Translated from the Russian by J.B. Sykes and W.H. Reid
48. Lax, P.D.: Weak solutions of nonlinear hyperbolic equations and their numerical computation.
    Commun. Pure Appl. Math. 7, 159–193 (1954)
49. Lax, P.D.: Hyperbolic Systems of Conservation Laws and the Mathematical Theory of Shock
    Waves. Conference Board of the Mathematical Sciences Regional Conference Series in Ap-
    plied Mathematics, No. 11. Society for Industrial and Applied Mathematics, Philadelphia
    (1973)
220                                                                                 K. Barmak et al.

50. Li, B., Lowengrub, J., Rätz, A., Voigt, A.: Geometric evolution laws for thin crystalline films:
    modeling and numerics. Commun. Comput. Phys. 6(3), 433–482 (2009)
51. Lifshitz, I.M., Slyozov, V.V.: The kinetics of precipitation from supersaturated solid solutions.
    J. Phys. Chem. Solids 19(1–2), 35–50 (1961)
52. Lowengrub, J.S., Rätz, A., Voigt, A.: Phase-field modeling of the dynamics of multicompo-
    nent vesicles: spinodal decomposition, coarsening, budding, and fission. Phys. Rev. E 79(3),
    031926 (2009), 13 pages
53. Mullins, W.W.: 2-Dimensional motion of idealized grain growth. J. Appl. Phys., 27(8), 900–
    904 (1956)
54. Mullins, W.W.: Solid Surface Morphologies Governed by Capillarity, pp. 17–66. American
    Society for Metals, Metals Park (1963)
55. Mullins, W.W.: On idealized 2-dimensional grain growth. Scr. Metall. 22(9), 1441–1444 (Sep
    1988)
56. Otto, F., Rump, T., Slepčev, D.: Coarsening rates for a droplet model: rigorous upper bounds.
    SIAM J. Math. Anal. 38(2), 503–529 (2006)
57. Rissanen, J.: Complexity and information in data. In: Entropy. Princeton Ser. Appl. Math.,
    pp. 299–312. Princeton University Press, Princeton (2003)
58. Rohrer, G.S.: Influence of interface anisotropy on grain growth and coarsening. Annu. Rev.
    Mater. Res. 35, 99–126 (2005)
59. Rollett, A.D., Lee, S.-B., Campman, R., Rohrer, G.S.: Three-dimensional characterization
    of microstructure by electron back-scatter diffraction. Annu. Rev. Mater. Res. 37, 627–658
    (2007)
60. Smith, C.S.: Grain shapes and other metallurgical applications of topology. In: Gomer, R.,
    Smith, C.S. (eds.) Proceedings of a Conference Arranged by the National Research Council
    and Held in September 1952, in Lake Geneva, Wisconsin, USA, pp. 65–108 (1952)
61. Stewart, H.B., Wendroff, B.: Two-phase flow: models and methods. J. Comput. Phys. 56(3),
    363–409 (1984)
62. Toselli, A., Widlund, O.: Domain Decomposition Methods—Algorithms and Theory. Springer
    Series in Computational Mathematics, vol. 34. Springer, Berlin (2005)
63. Villani, C.: Topics in Optimal Transportation. Graduate Studies in Mathematics, vol. 58.
    American Mathematical Society, Providence (2003)
64. Von Neumann, J., Richtmyer, R.D.: A method for the numerical calculation of hydrodynamic
    shocks. J. Appl. Phys. 21, 232–237 (1950)
65. Von Neumann, J., Discussion remark concerning paper of C.S. Smith “Grain shapes and other
    metallurgical applications of topology”. In: Gomer, R., Smith, C.S. (eds.) Proceedings of a
    Conference Arranged by the National Research Council and Held in September, 1952, in
    Lake Geneva, Wisconsin, USA, pp. 108–110 (1952)
66. Wagner, C.: Theorie der Alterung von Niederschlagen durch Umlosen (Ostwald-reifung). Z.
    Elektrochem. 65(7–8), 581–591 (1961)
A Generalized Empirical Interpolation Method:
Application of Reduced Basis Techniques
to Data Assimilation

Yvon Maday and Olga Mula




Abstract This paper, written as a tribute to Enrico Magenes, a giant that has kindly
and warmly supported generations of young researchers, introduces a generalization
of the empirical interpolation method (EIM) and the reduced basis method (RBM)
in order to allow their combination with data mining and data assimilation. The
purpose is to be able to derive sound information from data and reconstruct infor-
mation, possibly taking into account noise in the acquisition, that can serve as an
input to models expressed by partial differential equations. The approach combines
data acquisition (with noise) with domain decomposition techniques and reduced
basis approximations.


1 Introduction
The representation of some physical or mechanical quantities, representing a scalar
or vectorial function that depends on space, time or both, can be elaborated through
at least two—possibly—complementary approaches: the first one, called explicit
hereafter, is based on the measurement of some instances of the quantity of inter-
est that consists in getting its value at some points from which, by interpolation or
extrapolation, the quantity is approximated in other points than where the measure-
ments have been performed. The second approach, called implicit hereafter, is more
elaborated. It is based on a model, constructed by expertise, that implicitly charac-
terizes the quantity as a solution to some problem fed with input data. The model


In memory of Enrico Magenes.
Y. Maday (B) · O. Mula
Laboratoire Jacques-Louis Lions, UMR 7598, UPMC Univ Paris 06, 75005, Paris, France
e-mail: maday@ann.jussieu.fr

Y. Maday
Division of Applied Mathematics, Institut Universitaire de France and Brown University,
Providence, RI, USA

O. Mula
CEA Saclay—DEN/DANS/DM2S/SERMA/LLPR, 91191 Gif-Sur-Yvette Cedex, France
e-mail: olga.mulahernandez@cea.fr

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,         221
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_13,
© Springer-Verlag Italia 2013
222                                                              Y. Maday and O. Mula

can e.g. be a parameter dependent partial differential equation, the simulation of
which allows to get an approximation of the quantity of interest, and, actually, many
more outputs than the sole value of the quantity of interest. This second approach,
when available, is more attractive since it allows to have a better understanding of
the working behavior of the phenomenon that is under consideration. In turn, it fa-
cilitates optimization, control or decision making.
    Nevertheless for still a large number of problems, the numerical simulation of
this model is indeed possible—though far too expensive to be performed in a rea-
sonable enough time. The combined efforts of numerical analysts, specialists of
algorithms and computer scientists, together with the increase of the performances
of the computers allow to increase every days the domains of application where
numerical simulation can be used, to such an extent that it is possible now to rigor-
ously adapt the approximation, degrade the models, degrade the simulation, or both
in an intelligent way without sacrificing the quality of the approximation where it is
required.
    Among the various ways to reduce the problem’s complexity stand approaches
that use the smallness of the Kolmogorov n-width [5] of the manifold of all solu-
tions considered when the parameters varies continuously in some range. This idea,
combined with the Galerkin method is at the basis of the reduced basis method and
the Proper Orthogonal Decomposition (POD) methods to solve parameter depen-
dent partial differential equations. These approximation methods allow to build the
solution to the model associated to some parameter as a linear combination of some
precomputed solutions associated to some well chosen parameters. The precompu-
tations can be lengthy but are performed off-line, the online computation has a very
small complexity, based on the smallness of the Kolmogorov n-width. We refer to
[9, 10] for an introduction to these approaches.
    Another possibility, rooted on the same idea, is the empirical interpolation
method (EIM) that allows, from values of the quantity at some interpolating points,
to build a linear combination of again preliminary fully determined quantities as-
sociated to few well chosen instances of the parameter. The linear combination is
determined in such a way that it takes the same values at the interpolating points
as the quantity we want to represent. This concept generalizes the classical—e.g.
polynomial or radial basis—interpolation procedure and is recalled in the next sec-
tion. The main difference is that the interpolating function may even, a priori, not
be known but depend on the quantity we want to represent.
    In this paper we first aim at generalizing further this EIM concept by replacing
the pointwise evaluations of the quantity by more general measures, mathematically
defined as linear forms defined on a superspace of the manifold of appropriate func-
tions. We consider that this generalization, named Generalized Empirical Interpola-
tion Method (GEIM), represents already an improvement with respect to classical
interpolation reconstructions.
    Bouncing on this GEIM, we propose a coupled approach based on the do-
main decomposition of the computational domain into two parts: one small do-
main Ω1 where the Kolmogorov n-width of the manifold is not small and where
the parametrized PDE will be simulated and the other subdomain Ω2 , much larger
A Generalized Empirical Interpolation Method                                       223

but with a small Kolmogorov n-width because for instance the solution is driven
over Ω2 by the behavior of the solution over Ω1 . The idea is then to first construct
(an approximation of) the solution from the measurements using the GEIM. In turn
this reconstruction, up to the interface between Ω1 and Ω2 , provides the necessary
boundary conditions for solving the model over Ω1 .
    This is not the first attempt to use the small Kolmogorov n-width for another
aim than the POD or reduced basis technique which are both based on a Galerkin
approach. In [2] e.g. the smallness of the Kolmogorov width is used to post-process
a coarse finite element approximation and get an improved accuracy.
    The problems we want to address with this coupled approach, stem from, e.g.,
actual industrial process or operations that work on a day-to-day basis; they can be
observed with experimental sensors that provide sound data and are able to char-
acterize part of their working behavior. We think that the numerical simulation and
data mining approaches for analyzing real life systems are not enough merged in
order to (i) complement their strength and (ii) cope for their weaknesses. This paper
is a contribution in this direction.
    In the last section, we evoke the problem of uncertainty and noises in the acqui-
sition of the data, since indeed, the data are most often polluted by noises. Due to
this, statistical data acquisition methods are used to filter out the source signals so
that an improved knowledge is accessible. In many cases though, and this is more
and more the case now, the data are far too numerous to all be taken into account,
most of them are thus neglected because people do not know how to analyze them,
in particular when the measures that are recorded are not directly related to some
directly understandable quantity.



2 Generalized Empirical Interpolation Method

The rationale of all our approach relies on the possibility to approximately represent
a given set, portion of a regular manifold (here the set of solution to some PDE), as
a linear combination of very few computable elements. This is linked to the notion
of n-width following Kolmogorov [5]:

Definition 2.1 Let F be a subset of some Banach space X and Yn be a generic
n-dimensional subspace of X. The angle between F and Yn is

                           E(F ; Yn ) := sup inf x − yX .
                                          x∈F y∈Yn

The Kolmogorov n-width of F in X is given by
                                                                        
          dn (F, X) := inf E(F ; Yn ) : Yn a n-dimensional subspace of X
                     = inf sup inf x − yX .                                      (1)
                         Yn x∈F y∈Yn
224                                                                 Y. Maday and O. Mula

   The n-width of F thus measures to what extent the set F can be approximated
by an n-dimensional subspace of X.
   We assume from now on that F and X are composed of functions defined over a
domain Ω ⊂ Rd , where d = 1, 2, 3 and that F is a compact set of X.



2.1 Recall of the Empirical Interpolation Method

We begin by describing the construction of the empirical interpolation method
[1, 3, 6] that allows us to define simultaneously the set of generating functions re-
cursively chosen in F together with the associated interpolation points. It is based
on a greedy selection procedure as outlined in [7, 10, 12]. With M being some given
large number, we assume that the dimension of the vectorial space spanned by F :
span(F ) is of dimension ≥ M.
   The first generating function is ϕ1 = arg maxϕ∈F ϕ(·)L∞ (Ω) , the associated in-
terpolation point satisfies x1 = arg maxx∈Ω |ϕ1 (x)|, we then set q1 = ϕ1 (·)/ϕ1 (x1 )
and B11   1 = 1. We now construct, by induction, the nested sets of interpolation

points ΞM = {x1 , . . . , xM }, 1 ≤ M ≤ Mmax , and the nested sets of basis functions
{q1 , . . . , qM }, where Mmax ≤ M is some given upper bound fixed a priori. For
M = 2, . . . , Mmax , we first solve the interpolation problem: Find

                                    
                                   M−1
                         IM−1 ϕ(·) =    αM−1,j [ϕ]qj ,                               (2)
                                         j =1

such that
                           
                   IM−1 ϕ(·) (xi ) = ϕ(xi ),    i = 1, . . . , M − 1,                (3)
that allows to define the αM−1,j [ϕ], 1 ≤ j ≤ M, as it can be proven indeed that the
(M − 1) × (M − 1) matrix of running entry qj (xi ) is invertible, actually it is lower
triangular with unity diagonal.
    We then set
                                                        
                    ∀ϕ ∈ F, εM−1 (ϕ) = ϕ − IM−1 [ϕ]L∞ (Ω) ,                      (4)

and define
                              ϕM = arg max εM−1 (ϕ),                                 (5)
                                        ϕ∈F

and
                                                         
                      xM = arg max ϕM (x) − JM−1 [ϕM ](x),                         (6)
                                x∈Ω

we finally set rM (x) = ϕM (x) − JM−1 [ϕM (x)], qM = rM /rM (xM ) and BijM =
qj (xi ), 1 ≤ i, j ≤ M.
A Generalized Empirical Interpolation Method                                            225

  The Lagrangian functions—that can be used to build the interpolation operator
IM in XM = span{ϕi , 1 ≤ i ≤ M} = span{qi , 1 ≤ i ≤ M} over the set of points
ΞM = {xi , 1 ≤ i ≤ M}—verify for any given M, IM [u(·)] = M                    M
                                                                    i=1 u(xi )hi (·),
                 M            −1
where hi (·) = j =1 qj (·)[B ]j i (note indeed that hi (xj ) = δij ).
       M                    M                        M

  The error analysis of the interpolation procedure classically involves the
Lebesgue constant ΛM = supx∈Ω M    i=1 |hi (x)|.
                                          M


Lemma 2.2 For any ϕ ∈ F , the interpolation error satisfies
                    
          ϕ − IM [ϕ] ∞      ≤ (1 + ΛM ) inf ϕ − ψM L∞ (Ω) .                         (7)
                       L (Ω)                         ψM ∈XM

    The last term in the right hand side of the above inequality is known as the best
fit of ϕ by elements in XM .



2.2 The Generalization

Let us assume now that we do not have access to the values of ϕ ∈ F at points in
Ω easily, but, on the contrary, that we have a dictionary of linear forms σ ∈ Σ —
assumed to be continuous in some sense, e.g. in L2 (Ω) with norm 1—the applica-
tion of which over each ϕ ∈ F is easy. Our extension consists in defining ϕ̃1 , ϕ̃2 ,. . . ,
ϕ̃M and a family of associated linear forms σ1 , σ2 ,. . . , σM such that the following
generalized interpolation process (our GEIM) is well defined:

                 
                 M
      JM [ϕ] =          βj ϕ̃j ,   such that ∀i = 1, . . . , M,   σi JM [ϕ] = σi (ϕ).   (8)
                 j =1

   Note that the GEIM reduces to the EIM when the dictionary is composed of Dirac
masses, defined in the dual space of C0 (Ω).
   As explained in the introduction, our generalization is motivated by the fact that,
in practice, measurements provide outputs from function ϕ that are some averages—
or some moments—of ϕ over the actual size of the mechanical device that takes the
measurement.
   Among the questions raised by GEIM:
• is there an optimal selection for the linear forms σi within the dictionary Σ?
• is there a constructive optimal selection for the functions ϕ̃i ?
• given a set of linearly independent functions {ϕ̃i }i∈[1,M] and a set of continuous
  linear forms {σi }i∈[1,M] , does the interpolant (in the sense of (8)) exist?
• is the interpolant unique?
• how does the interpolation process compares with other approximations (in par-
  ticular orthogonal projections)?
• Under what hypothesis can we expect the GEIM approximation to converge
  rapidly to ϕ?
226                                                                          Y. Maday and O. Mula

    In what follows, we provide answers to these questions either with rigorous
proofs or with numerical evidences.
    The construction of the generalized interpolation functions and linear forms is
done recursively, following the same procedure as in the previous subsection, based
on a greedy approach, both for the construction of the interpolation linear forms
ϕ̃i and the associated forms selected in the dictionary Σ : The first interpolating
function is, e.g.:
                              ϕ̃1 = arg sup ϕL2 (Ω) ,
                                             ϕ∈F

the first interpolating linear form is:
                                                       
                                   σ1 = arg sup σ (ϕ1 ).
                                              σ ∈Σ

We then define the first basis function as: q̃1 = σ1ϕ̃(ϕ̃1 1 ) . The second interpolating
function is:
                                                    
                        ϕ̃2 = arg sup ϕ − σ1 (ϕ)q̃1  2 .      L (Ω)
                                      ϕ∈F

The second interpolating linear form is:
                                                          
                        σ2 = arg sup σ ϕ̃2 − σ1 (ϕ̃2 )q̃1 ,
                                      σ ∈Σ

and the second basis function is defined as:
                                     ϕ̃2 − σ1 (ϕ̃2 )q1
                             q̃2 =                         ,
                                   σ2 (ϕ̃2 − σ1 (ϕ̃2 )q1 )
and we proceed by induction: assuming that we have built the set of interpo-
lating functions {q̃1 , q̃2 , . . . , q̃M−1 } and the set of associated interpolating linear
forms {σ1 , σ2 , . . . , σM−1 }, for M > 2, we first solve the interpolation problem: find
 
{α M−1
       (ϕ)} such that
  j           j

                                                        
                                                        M−1
                                                               
                  ∀i = 1, . . . , M − 1,     σi (ϕ) =          α M−1
                                                                 j   (ϕ)σi (q̃j ),
                                                        j =1

and then compute:
                                              
                                              M−1
                                                     
                               JM−1 [ϕ] =            α M−1
                                                       j   (ϕ)q̃j .
                                              j =1

We then evaluate
                                                        
                       ∀ϕ ∈ F,     εM (ϕ) = ϕ − JM−1 [ϕ]L2 (Ω) ,

and define:
                                  ϕ̃M = arg sup εM−1 (ϕ)
                                               ϕ∈F
A Generalized Empirical Interpolation Method                                          227

and: σM = arg supσ ∈Σ |σ (ϕ̃M − JM−1 [ϕ̃M ])|. The next basis function is then

                                       ϕ̃M − JM−1 [ϕ̃M ]
                             q̃M =                          .
                                     σM (ϕ̃M − JM−1 [ϕ̃M ])

We finally define the matrix B M such that B̃ijM = σi (q̃j ), and set XM ≡ span{q̃j , j ∈
[1, M]} = span{ϕ̃j , j ∈ [1, M]}. It can be proven as in [7, 10, 12].

Lemma 2.3 For any M ≤ Mmax , the set {q̃j , j ∈ [1, M]} is linearly independent
and X̃M is of dimension M. The matrix B M is lower triangular with unity diagonal
(hence invertible) with other entries ∈ [−1, 1]. The generalized empirical interpo-
lation procedure is well-posed in L2 (Ω).

   In order to quantify the error of the interpolation procedure, like in the stan-
dard interpolation procedure, we introduce the Lebesgue constant in the L2 norm:
                JM [ϕ]L2 (Ω)
ΛM = supϕ∈F       ϕL2 (Ω)    i.e. the L2 -norm of JM . A similar result as in the previ-
ous subsection holds.

Lemma 2.4 ∀ϕ ∈ F , the interpolation error satisfies:
                      
          ϕ − JM [ϕ] 2       ≤ (1 + ΛM ) inf ϕ − ψM L2 (Ω) .
                         L (Ω)
                                                 ψM ∈X̃M

A (very pessimistic) upper-bound for ΛM is:

                             ΛM ≤ 2M−1 max qi L2 (Ω) .
                                           i∈[1,M]


Proof The first part is standard and relies on the fact that, for any ψ ∈ X̃N then
JM (ψM ) = ψM . It follows that

               ∀ψM ∈ X̃M ,
                                                         
               ϕ − JM [ϕ] 2    = [ϕ − ψM ] − JM [ϕ − ψM ]L2 (Ω)
                           L (Ω)
                                     ≤ (1 + ΛM )ϕ − ψM L2 (Ω) .

                                                                            M
Let us now consider a given ϕ ∈ F and its interpolant JM [ϕ] =                   M
                                                                            i=1 αi (ϕ)q̃i
in dimension M. The constants αiM (ϕ) come from the generalized interpolation
                                       j −1
problem: ∀j ∈ [1, M], σj (ϕ) = i=1 αiM (ϕ)σj (q̃i ) + αjM (ϕ)j (ψ). We infer the
recurrence relation for the constants:

                          ∀j ∈ [1, M],
                                               j −1
                                               
                          αjM (ϕ) = σj (ψ) −          αi (ψ)σj (qi ).
                                               i=1
228                                                               Y. Maday and O. Mula

Fig. 1 The domain Ω and its
mesh




Based on the properties of the entries in matrix B̃ M stated in Lemma 2.3,
we can obtain, by recurrence, an upper bound for each αjM (ϕ): ∀j ∈ [1, M],
|αjM (ϕ)| ≤ (2j −1 )ϕL2 (Ω) . Then, ∀ϕ ∈ F , ∀M ≤ Mmax : JM (ϕ)L2 (Ω) ≤
[ M        j −1 )q 
                   i L2 (Ω) ]ϕL2 (Ω) . Therefore: ΛM ≤ 2        i∈[1,M] qi L2 (Ω) .
                                                           M−1 max
    i=1 (2
Note that the norms of the rectified basis function qi verify qi L2 (Ω) ≥ 1 from
the hypothesis done on the norm of the σi .                                         



2.3 Numerical Results

The results that we present here to illustrate the GEIM are based on data acquired in
silico using the finite element code Freefem [4] on the domain represented in Fig. 1.
    We consider over the domain Ω ∈ R2 the Laplace problem:

                      − ϕ = f,      in Ω
                                                                                   (9)
                      f = 1 + α sin(x) + β cos(γ πy) χ1 (x, y)

complemented with homogeneous Dirichlet boundary conditions. Here α, β and γ
are 3 parameters freely chosen in given intervals in R that modulate the forcing
term on the right hand side. We assume that the forcing term only acts on a part of
Ω named Ω1 (Ω1 = support(χ1 )) and we denote as Ω2 the remaining part Ω2 =
Ω \ Ω 1.
    The easy observation is that the solution ϕ, depends on the parameters α, β, γ :
we plot in Fig. 2 one of the possible solutions.
    We also note that the restriction ϕ|Ω2 to Ω2 is indirectly dependent on these co-
efficients and thus is a candidate for building a set (when the parameters vary) of
small Kolmogorov width. This can be guessed if we look at the numerical simula-
tions obtained choices for α, β, γ (see Fig. 3).
    For the GEIM, we use moments computed from the restriction of the solution
ϕ(α, β, γ ) over Ω2 multiplied by localized functions with small compact support
A Generalized Empirical Interpolation Method                                        229

Fig. 2 One of the solutions,
we note that the effect of the
forcing is mainly visible on
domain Ω1 on the left hand
side




over Ω2 . The reconstructed solutions with the GEIM based on only 5 interpolating
functions is 1014 time better than the reconstructed function with 1 interpolating
function illustrating the high order of the reconstruction’s convergence.
   In the next example, we choose a similar problem but the shape of domain Ω2 a
further parameter (see Fig. 4).
   In order to get an idea of the Kolmogorov width of the set {ϕ|Ω2 (α, β, γ , Ω2 )}, we
perform two Singular Value Decompositions (one in L2 , the other in H 1 ) over 256
values (approximated again with Freefem) and plot the decay rate of the eigenvalues
ranked in decreasing order: the results are shown in Fig. 5.
   We note that after about 9 eigenvalues, the finite element error dominates the de-
cay rate of the true eigenvalues. The GEIM is built up again with captors represented
as local weighted averages over Ω2 . The interpolation error is presented on the next
figure (Fig. 6) and we note that the decay rate, measured both in L2 and H 1 is again
quite fast. In order to compare with the best fit represented by the projection, in L2
or in H 1 , we use the SVD eigenvectors associated with the first M eigenvalues and
compare it with JM , for various values of M. This is represented on Fig. 7.




Fig. 3 Three generic solutions restricted on the sub-domain Ω2
230                                                                       Y. Maday and O. Mula

Fig. 4 Two generic solutions
when shape of the
sub-domain Ω2 varies




Fig. 5 Two SVD (in L2 and
in H 1 ) of the set of solutions
over Ω2




   The very good comparison allow to expect that the Lebesgue constant is much
better than what is announced in Lemma 2.4. A computational estimation of ΛM
(represented in Fig. 8) has been carried out:

                                                   IM [ui ]L2 (Ω)
                                   ΛM = max                           .
                                       i∈[1,256]     ui L2 (Ω)
A Generalized Empirical Interpolation Method                                                 231




Fig. 6 The worse GEIM error with respect to M




Fig. 7 Evolution of the GEIM error versus the best fit error, both in L2 and in H 1 -norms




Fig. 8 Evolution of the Lebesgue constant, i.e. the norm of the GEIM operator, both in L2 and
in H 1


3 Coupling of Deterministic and Assimilation Methods

3.1 The Framework

Imagine that we want to supervise a process in real-time for which we have a pa-
rameter dependent PDE. Assume that the computation of the solution over the full
domain Ω is too expensive but we are in a situation where the domain Ω can be
decomposed, as before, into two non overlapping subdomains Ω1 and Ω2 and that
232                                                            Y. Maday and O. Mula

Fig. 9 Schematic
representation of the
reconstruction over Ω2




Fig. 10 Schematic
representation of the recovery
over Ω1 thanks to the
knowledge of the interface
condition




• Ω1 is small subdomain but the set of the restriction of the parameter dependent
  solutions has a large Kolmogorov width.
• Ω2 is a big subdomain but the set of the restriction of the parameter dependent
  solutions has a small Kolmogorov n-width.
   In addition assume that it is possible to get outputs from sensors based in Ω2 .
The GEIM allows to reconstruct accurately the current solution associated to some
parameters over Ω2 and thus is able to build the boundary condition necessary over
the interface between Ω1 and Ω2 that with the initially given boundary condition
over ∂Ω to be the necessary boundary condition over ∂Ω1 that complement the
original PDE set now over Ω1 and not Ω as illustrated in Figs. 9 and 10.



3.2 The Combined Approach—Numerical Results

We take over the numerical frame of the previous section and go further. We want to
apply the GEIM to have a knowledge of the solution ϕ|Ω2 and want to use the trace
A Generalized Empirical Interpolation Method                                       233




Fig. 11 Reconstructed analysis—error in H 1 -norm over Ω1 and Ω2


of the reconstruction on the interface to provide the boundary condition, over ∂Ω1
to the problem

                       − ϕ = f,       in Ω1
                       f = 1 + α sin(x) + β cos(γ πy) χ1 (x, y)

derived from (9).
   The results are presented in Fig. 11 where both the H 1 error on ϕ|Ω1 and ϕ|Ω2
are presented as a function of M being the number of interpolation data that are
used to reconstruct ϕ|Ω2 . This illustrates that the use of the small Kolmogorov width
of the set {ϕ|Ω2 } as the parameters vary (including the shape of Ω2 ) can help in
determining the value of the full ϕ all over Ω.



4 About Noisy Data
In practical applications, data are measured with an intrinsic noise due to physical
limitations of the sensors. In some sense, the noisy data acquired from the sensors
are exact acquisitions from a noisy function that we consider to be a Markovian ran-
dom field with spacial values locally dependent (on the support of the sensor) and
globally independent (from one sensor to the others). An extension of the previous
development needs therefore to be done in order to take this fact under considera-
tion.
   Let us assume that all the sensors are subject to the same noise, i.e. provide
averages—or some moments—computed, not from ϕ, but from a random process
ϕε ≃ N(ϕ, ε 2 ). The norm of the GEIM operator being equal to ΛM the GEIM-
reconstruction forms a random process JM [ϕε ] ≃ N(JM [ϕ], Λ2M ε 2 ) due to linearity.
   Even though the Lebesgue constant seems to be small in practice, we would like
to use all the data that are available in order to get a better knowledge of ϕ. For the
234                                                                        Y. Maday and O. Mula

definition of JM we indeed only use M data selected out of a large set of all data. For
this purpose, let us consider that, with some greedy approaches, we have determined
                                                (p)   (p)       (p)
P independent series of M different captors {σ1 , σ2 , . . . , σM }, ∀1 ≤ p ≤ P . For
each of these series, the GEIM applied to ϕ is noisy and each application provides
 p              p        p 2
JM [ϕε ] ≃ N(JM [ϕ], ΛM ε 2 ). We shall use these P reconstructions by averaging
them and expect to improve the variance of the reconstruction.
   Let λ−1 = P1 Pp=1 Λ1p . Since the P realizations: {JM [ϕε ]}p are independent,
                                                          p
                             N
                                                     p
                                                P  JM [ϕε ]
then the random variable JPM (ε) = Pλ           p=1 Λ(p) follows a Gaussian Markov ran-
                                                         N
                                          2 2
dom field of parameters N(JN (ϕ), ε Pλ ). A realization of this random process could
be chosen for an improved estimate of JM (ϕ). Indeed, the law of the error follows
       2 2
N(0, ε Pλ ) and its variance can be less than the size of the initial noise on the captors
                     (p)   √
(ε) provided that ΛN < P , ∀1 ≤ p ≤ P , which, from the numerical experiments,
seems to be the case.



5 Conclusions
We have presented a generalization of the Empirical Interpolation Method, based
on ad hoc interpolating functions and data acquired from sensors of the functions
to be represented as those that can arise from data assimilation. We think that the
GEIM is already interesting per se as it allows to select in a greedy way the most
informative sensors one after the other. It can also propose, in case this is feasible,
to build better sensors in order to complement a given family of existing ones and/or
detect in which sense some of them are useless because redundant. Finally we also
explain how noise on the data can be filtered out.
   The coupled use of GEIM with reduced domain simulation is also proposed
based on domain decomposition technique leading to a small portion where nu-
merical simulation is performed and a larger one based on data assimilation.
   We think that the frame presented here can be used as an alternative to classi-
cal Bayesian or frequentistic statistic where the knowledge developed on the side
for building mathematical models and their simulations can be fully used for data
mining (we refer also to [8] and [11] for recent contributions in this direction).

Acknowledgements This work was supported in part by the joint research program MANON
between CEA-Saclay and University Pierre et Marie Curie-Paris 6. We want to thank G. Biot from
LSTA and G. Pagès from LPMA for constructive discussions on the subject.




References
 1. Barrault, M., Nguyen, N.C., Maday, Y., Patera, A.T.: An “empirical interpolation” method:
    Application to efficient reduced-basis discretization of partial differential equations. C. R.
    Acad. Sci. Paris, Sér. I 339, 667–672 (2004)
A Generalized Empirical Interpolation Method                                                   235

 2. Chakir, R., Maday, Y.: A two-grid finite-element/reduced basis scheme for the approxi-
    mation of the solution of parametric dependent PDE. C. R. Math. 347, 435–440 (2009).
    doi:10.1016/j.crma.2009.02.019
 3. Grepl, M.A., Maday, Y., Nguyen, N.C., Patera, A.T.: Efficient reduced-basis treatment of non-
    affine and nonlinear partial differential equations. M2AN (Math. Model. Numer. Anal.) 41(3),
    575–605 (2007)
 4. http://www.freefem.org
 5. Kolmogoroff, A.: Über die beste Annäherung von Funktionen einer gegebenen Funktionen-
    klasse. Ann. Math. (2) 37, 107–110 (1936)
 6. Maday, Y., Nguyen, N.C., Patera, A.T., Pau, G.S.H.: A general multipurpose interpolation
    procedure: the magic points. Commun. Pure Appl. Anal. 8(1), 383–404 (2009)
 7. Nguyen, N.C., Veroy, K., Patera, A.T.: Certified real-time solution of parametrized partial
    differential equations. In: Yip, S. (ed.) Handbook of Materials Modeling, pp. 1523–1558.
    Springer, Berlin (2005)
 8. Patera, A.T., Rønquist, E.M.: Regression on parametric manifolds: estimation of spatial fields,
    functional outputs, and parameters from noisy data. C. R. Acad. Sci. Paris, Sér. I 350(9–10),
    543–547 (2012)
 9. Patera, A.T., Rozza, G.: Reduced basis approximation and a posteriori error estimation
    for parametrized partial differential equations, Version 1.0. Copyright MIT 2006 to appear
    in (tentative rubric). MIT Pappalardo Graduate Monographs in Mechanical Engineering.
    http://augustine.mit.edu/methodology/methodology_bookPartI.htm
10. Prud’homme, C., Rovas, D., Veroy, K., Maday, Y., Patera, A.T., Turinici, G.: Reliable real-time
    solution of parametrized partial differential equations: reduced-basis output bound methods.
    J. Fluids Eng. 124(1), 70–80 (March 2002)
11. Rozza, G., Manzoni, A., Negri, F.: Reduction strategies for PDE-constrained optimization
    problems in haemodynamics. MATHICSE Technical Report, Nr. 26.2012 (July 2012)
12. Veroy, K., Prud’homme, C., Rovas, D.V., Patera, A.T.: A posteriori error bounds for reduced-
    basis approximation of parametrized noncoercive and nonlinear elliptic partial differential
    equations. In: Proceedings of the 16th AIAA Computational Fluid Dynamics Conference
    (AIAA Paper 2003-3847) (June 2003)
Analysis and Numerics of Some Fractal
Boundary Value Problems

Umberto Mosco




Abstract We describe some recent results for boundary value problems with frac-
tal boundaries. Our aim is to show that the numerical approach to boundary value
problems, so much cherished and in many ways pioneering developed by Enrico
Magenes, takes on a special relevance in the theory of boundary value problems in
fractal domains and with fractal operators. In this theory, in fact, the discrete nu-
merical analysis of the problem precedes, and indeed give rise to, the asymptotic
continuous problem, reverting in a sense the process consisting in deriving discrete
approximations from the PDE itself by finite differences or finite elements. As an
illustration of this point, in this note we describe some recent results on: the approx-
imation of a fractal Laplacian by singular elliptic partial differential operators, by
Vivaldi and the author; the asymptotic of degenerate Laplace equations in domains
with a fractal boundary, by Capitanelli-Vivaldi; the fast heat conduction on a Koch
interface, by Lancia-Vernole and co-authors. We point out that this paper has an
illustrative purpose only and does not aim at providing a survey on the subject.


1 Introduction

Very simple fractals, as the Koch curve or the Sierpiński gasket, are non-differen-
tiable sets, therefore they do not allow the explicit writing of an intrinsic differential
operator. Moreover, if the fractal is the (compact) boundary of an open domain of the
plane, the boundary trace spaces may be difficult to characterize. Merging classical
boundary value problems—even of the simple kind as those related to the Laplace
equation or the heat equation—with the theory of fractal sets and fractal operators is
a challenging task. In fact, fractal sets and operators are the result of an asymptotic
process, the one induced by the infinite iterations of a family of contractive similar-
ities. Such an asymptotic feature of fractals introduces an additional approximation


In memory of Enrico Magenes.
U. Mosco (B)
Department of Mathematical Sciences, Worcester Polytechnic Institute, 100 Institute Road,
Worcester, MA 01609-2280, USA
e-mail: mosco@wpi.edu

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,           237
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_14,
© Springer-Verlag Italia 2013
238                                                                             U. Mosco

level to those already inherent in the numerical approximation of the classical PDE
at hand.
    The construction of fractal sets goes back to the early years of the twentieth cen-
tury. The construction of the Laplace and heat equations on a large class of fractals
was achieved in the late 1980’s, first by probabilistic methods, then analytically. We
refer to [25] for a brief description of this early work.
    A problem related to heat conduction in a planar domain relies on the idea that
the insertion in the domain of a highly conductive material path connecting two
points of the boundary can efficiently act as a preferential fast absorbing trail for
the heat stream. An early model of the kind, with an infinitely conductive layer, was
produced by Cannon and Meyer in 1971, [5], in connection with so called fractured
oil wells. A related singular homogenization problem was later considered by Pam
Huy-Sanchez Palencia in 1974, [31], see also [2, 24].
    In the simplest version of this model, the domain is a rectangle, the infinitely con-
ductive pattern is the segment connecting the middle points A and B of two opposite
sides of the rectangle, and the segment is approximated by thin highly conductive
rectangles of transversal size ε. In the two regions above and below this thin layer,
the two-dimensional heat equation, with a normalized conductivity coefficient and
with a prescribed source term, is assumed to govern the slow diffusion of heat. At
the same time, the fast diffusion of heat within the ε-layer is described by the two-
dimensional heat equation, this time with a conductivity coefficient of the order 1/ε.
The boundary condition for the temperature is zero on the boundary of the rectangle.
In the limit as ε → 0, the thin layer shrinks to the transversal segment. In this pro-
cess, the temperature converges to a limit temperature, given by the two-dimensional
heat equation in each one of the open domains separated by the segment and by the
one-dimensional heat equation along the segment itself. These two equations—both
of second order—are coupled by a transmission condition across the segment. This
condition stipulates that the jump of the external normal derivatives from each side
of the segment acts as a source term for the one-dimensional tangential heat equa-
tion within the segment; moreover, the tangential diffusion has boundary values zero
at the end points A and B.
    We note, incidentally, that the natural Sobolev space taking into account this
homogeneous boundary condition for the tangential equation is the so-called Lions-
                    1/2
Magenes space H0,0 . A fractal analogue of the Lions-Magenes space occurs in the
problems that we now describe.
    A big innovation into the transmission model was indeed carried out in 2002 by
M.R. Lancia, [16]. The segment connecting the points A and B of the boundary of
the domain was replaced by a fractal Koch curve, connecting again A with B. The
rationale for this new model is clear. By increasing the length of the preferential
pattern that conveys the heat stream towards the two selected points A and B, and
actually making the length of this path infinite in the limit, we expect that the cooling
effect of the layer will be increased.
    As mentioned previously, in Lancia’s fractal model the transmission problem
with the fractal Koch curve is obtained in the limit of a sequence of transmission
Analysis and Numerics of Some Fractal Boundary Value Problems                       239

problems for the approximating pre-fractal polygonal curves as the number of iter-
ation increases to infinity. This model opens two related orders of problems. One
is the rigorous analytic formulation of the second order transmission condition, in
suitable fractional Besov spaces. This study was first carried out by Lancia in [16]
and we refer to this paper and to [18] for the technical details. The second problem
is the analytical and numerical study of the approximating pre-fractal equations. We
report on this study in Sect. 3.
    We also report on some recent results of a joint research by Vivaldi and the author,
[29, 30], that is indeed related to the second order transmission problems discussed
so far. The object of this study is a sequence of second order elliptic operators
                                                         
                              Anεn u = − div aεnn (x, y)∇u                           (1)

in divergence form in a bounded domain Ω of R2 , with discontinuous coefficients
aεnn . The coefficients aεnn develop an increasing number of singularities on an array
of thin fibers Σεnn obtained by the iterated action of a given family of contractive
similarities. The geometry and the singularity of the conductivity coefficients are
initially prescribed on an array of thin hexagonal fibers connecting the essential
fixed points of the similarities. The parameter n = 1, 2, . . . indicates the level of
iteration of the similarities, the parameters εn refer to the transversal thickness of
the fiber at each nth-iteration. The detailed geometry of the fibers and the expression
of the singular coefficients aεnn are described in Sect. 1. One of the main objective
of this study is to prove the convergence of the spectral measures for the elliptic
operators to the spectral measure of a limit self-adjoint operator. The limit operator
is the intrinsic Laplace operator of the fractal set defined by the given family of
similarities. We outline our main results in Sect. 1.
    A related topic has been the object of a recent paper by Capitanelli and Vivaldi,
[7]. They consider the domain bounded by a square snowflake type domain, bounded
by four Koch curves, and the approximated domains obtained by replacing each side
of the pre-fractal Koch curves by a quadrilateral thin fiber of the kind mentioned
before. Differently than in the previous case, the conductivity of the fiber is now
assumed to vanish with the iterations. On such increasingly insulating boundary
layers, a homogeneous Dirichlet condition is imposed to the solution of a Laplace
equation. A characterization of the limit boundary value problem in the snowflake
domain is then given, that depends on the relative size of the thickness and the
conductivity of the boundary layer. These results are outlined in Sect. 2.
    There is no space in this note to report on some other aspects of the numerics of
fractals. However, we wish to mention a new kind of interesting problems that de-
serve further research. The objective of this study is to approximate the two dimen-
sional Laplace operator (and related PDEs) in an open domain of the plane, with
a sequence of curvilinear one-dimensional Laplacians (and related ODEs), taken
along a sequence of fractal curves homeomorphic to the segment [0, 1], that asymp-
totically fill the whole open domain. Such a dynamical dimensional blow up is of
theoretical interest in itself. It seems also interesting from the numerical point of
view and, in the applications, as a model for the study of invasive interfaces that
infiltrate the whole space.
240                                                                               U. Mosco

   In conclusion, we may observe that introducing fractal constructions into the
classic theory of PDEs opens a vast new field of study, both theoretically and nu-
merically. With the very simple examples object of this note, and with other recent
contributions—in particular, the works by Vacca [32], Bagnerini-Buffa-Vacca [3],
Wasyk [33], Evans [10], Liang [9, 23], and the work by Achdou-Sabot-Tchou, [1]
that explores different but related problems—this new field has been only scratched.
   Enough however to unveil promising new directions in applied analysis and
PDEs, and to point out how fundamental is to keep analysis and numerics in tight
contact one each other. A point of view this one to which the author was already
exposed in early years of his scientific life in Rome by his adviser Gaetano Fichera,
and that he is happy to take now also as one of the most illuminating aspects of the
scientific legacy of Enrico Magenes.



2 Elliptic Operators with Fractal Singularities

In this section we describe the recent work carried out by Vivaldi and the author
in [29, 30]. In these papers, a singular elliptic operator is submitted to the iterated
action of a family of similarities and the convergence of the spectrum is investigated.
   We begin by introducing the similarities. We consider a family Ψ = {ψ1 , . . . , ψN }
of N ≥ 2 contractive similarities in R2 , with distinct fixed-points, with a common
contractive factor α −1 , α > 1; a similarity, or similitude, in a Euclidean space is a
map obtained by composition of translations, orthogonal transformations, and ho-
motheties. The set of essential fixed-points of these maps will be denoted by Γ ;
a point br ∈ R2 is an essential fixed-point for the family Ψ if br = ψi (br ) = ψj (bs )
for some i ∈ {1, . . . , N}, j = i, j ∈ {1, . . . , N} and bs a fixed-point of a map of Ψ .
   Here, for simplicity, we assume that Ψ is the so-called Koch family of similarities,
that is, the family Ψ = {ψ1 , . . . , ψ4 } of the following N = 4 similitudes, each one
contractive with a factor α −1 , α = 3:
                                z                     z iπ/3 1
                        ψ1 (z) = ,         ψ2 (z) =     e   + ,
                                3                     3      3

                          z         1 i sin π/3                     z+2
                ψ3 (z) = e−iπ/3 + +                 ,      ψ4 (z) =       ,
                          3         2         3                        3
where z = x + iy ∈ C. The set of the essential fixed-points of this family is Γ =
{A, B}, where A = (0, 0) and B = (1, 0). The √    third vertex of the equilateral triangle
based on the side A, B is the point C = (1/2, 3/2).
    We now define a reference fiber in the Cartesian plane R2 . This fiber is a thin
hexagon which has the segment connecting the points A = (0, 0) and B = (1, 0) as
its longitudinal axis. The middle point of the segment AB is denoted by AB/2. The
fiber is symmetric with respect to the x-axis and the vertical line x = 1/2, therefore,
it suffices to describe the geometry of the fiber in the region y ≥ 0, x ≤ 1/2. We con-
sider the right triangle with vertices A, AB/2, Q0 which makes the angle π/12 at
Analysis and Numerics of Some Fractal Boundary Value Problems                                   241

A. Thus, Q0 = (1/2, ε0 ), where ε0 = h0 /2, h0 = tan(π/12). For every 0 < ε ≤ ε0 ,
we consider the two points Q1 (ε) = (ε/ h0 , ε) and Q0 (ε) = (1/2, ε) and the quadri-
lateral A, AB/2, Q0 (ε), Q1 (ε). We then define the set Σ0,2ε         0    to be the thin hexagon
obtained by reflection of this quadrilateral across the x-axis, followed by a sym-
metry across the vertical axis x = 1/2. The vertices of Σ0,2ε          0 , listed clockwise, are

the points A, Q1 (ε), Q2 (ε), B, Q3 (ε), Q4 (ε), where now Q2 (ε) = (1 − ε/ h0 , ε),
Q3 (ε) = (1 − ε/ h0 , −ε), Q4 (ε) = (ε/ h0 , −ε). The perimeter of the hexagon Σ0,2ε            0

gives the external profile of our fiber. Inside the hexagon Σ0,2ε             0 , we now insert
                            0
a smaller hexagon Σ0,ε . The construction of this hexagon is similar to that of
   0 , by replacing the triangle A, AB/2, Q with the smaller right triangle with
Σ0,2ε                                                     0
vertices A, AB/2, P0 , where P0 = (1/2, ε0 /2). The angle of this triangle at A is
arctan(h0 /2). The vertices of the hexagon Σ0,ε             0 , again listed clockwise, are now

the points A, P1 (ε), P2 (ε), B, P3 (ε), P4 (ε), where now P1 (ε) = (ε/ h0 , ε/2),
P2 (ε) = (1 − ε/ h0 , ε/2), P3 (ε) = (1 − ε/ h0 , −ε/2), P4 (ε/ h0 , −ε/2).
    With the notation set before, the reference fiber is given by the two co-axial thin
hexagons Σ0,ε 0 ⊆ Σ 0 , of largest transversal size ε and 2ε, respectively. The two
                       0,2ε
hexagons meet at the common vertices A and B, and Σ0,ε               0 \ {A, B} is contained in
                   0
the interior of Σ0,2ε .
    In the case at hand, the Koch family of similarities, the single reference fiber
   0
Σ0,2ε   of our construction connects the two essential fixed-points Γ = {A, B},
which, in this special case, are the only essential fixed points of the family Ψ (the
pair-wise connection of all essential fixed points of the family by means of a fiber is
a requirement of this theory).
    Our next step is to submit the fiber to the iterated action of the family Ψ . We
first set a useful notation. For each integer n ≥ 0, we consider arbitrary n-tuples of
indices i|n = (i1 , i2 , . . . , in ) ∈ {1, . . . , N}n and define ψi|n = ψi1 ◦ ψi2 ◦ · · · ◦ ψin if
n > 0, with ψi|n the identity map if n = 0; for every set O ⊆ R2 , we define Oi|n =
ψi|n (O). With this notation at hand, for every n ≥ 0, we construct the array of fibers
obtained by defining
                                            i|n    i|n       0
                             n
                            Σ2ε =          Σ2ε ,   Σ2ε = ψi|n Σ2ε ,                             (2)
                                     i|n

                                                             
            Σεn =          Σεi|n ,     Σεi|n = ψi|n Σε0 =                 Σεi|n (br , bs ),     (3)
                     i|n                                     br =bs ∈Γ

where Σε0 = Σ0,ε 0 , Σ0 = Σ0 .
                        2ε     0,2ε
    The space R2 —actually, a bounded open domain Ω ⊂ R2 , with Ω containing
   0                                n for every ε and every n and which will be spec-
Σ 0,2ε , that contains the fibers Σ2ε
ified later on—is now converted into a physical composite body. This is done by
defining a discontinuous conductivity matrix aεn (ξ, η)Id, (ξ, η) ∈ Ω, again by the it-
erated action of the similarity family. The whole iteration process is externally gov-
erned by two sequences of constants, ζn > 0 and γn > 0. The limit values assigned
242                                                                                          U. Mosco

to ζn and γn as n → +∞ affect the nature and the properties of the asymptotic
effective medium.
    In order to observe boundary effects, we choose Ω in a way that Γ belongs           √to the
boundary ∂Ω  √  of  Ω, namely  Ω  is
                                   √ now  the triangle with  vertices D    =  (1/2,   −  3/2),
E = (3/2, 3/2), F = (−1/2, 3/2). The domain Ω contains the interior of the
triangle of vertices A, B, C, and the vertices A, B, C belong to ∂Ω.
    The matrix aεn Id—for given 0 < ε ≤ ε0 and n ≥ 0—is defined at every (ξ, η) ∈ Ω
by
                        
                                  n (ξ, η) Id +1Σ n \Σ n (ξ, η) Id
                          ζn 1Ω\Σ2ε
         aε (ξ, η) Id =
          n                                            ε
                                                  2ε
                                                                                            (4)
                              + 1/2σn br =bs ∈Γ wεn (ξ, η)1Σεn (br ,bs ) (ξ, η) Id .

In this expression, Id is the 2-dimensional identity matrix and 1S the indicatrix func-
tion of a set S ⊂ R2 , that is, 1S (ξ, η) = 1 if (ξ, η) ∈ S, 1S (ξ, η) = 0 if (ξ, η) ∈
                                                                                     / S.
    The constants σn , which will be specified later on, are scaling factors associated
with Ψ . At each iteration n, ζn > 0 is a material constant that takes into account
how the conductivity of the surrounding medium evolves with n. Since in (4) the
conductivity of the coating region Σ2ε    n \ Σ n has been normalized to 1, the constant
                                                ε
ζn can be interpreted as a viscosity coefficient, that expresses the relative strength
of the conductivity of the space that surrounds the fiber Σ2ε       n with respect to the

conductivity of the fiber Σε itself. For every n ≥ 0 and i|n, the conductivity of the
                              n
         i|n
fiber Σε (br , bs ) is given by
                                                          −1
          wεn (ξ, η)1Σ i|n (b ,b ) (ξ, η) = γn α n wε0 ◦ ψi|n (ξ, η)1Σε0 (br ,bs ) (ξ, η).        (5)
                        ε   r   s


This expression is obtained from the conductivity wε0 (x, y) of the reference fiber
Σε0 (br , bs ) by applying the map (ξ, η) = ψi|n (x, y). The function wε0 (x, y) is de-
fined on the inner fiber Σ0,ε0 as follows:

                                     ⎧
                                     ⎨ 2+h0
                                             2

                                           −P ⊥| if (x, y) ∈ T
                         wε (x, y) =
                          0            4|P                                          (6)
                                     ⎩     1
                                                 if (x, y) ∈ R
                                           2|P −P ⊥ |

where R is the central rectangle in Σ0,ε0 with vertices P , P , P , P , and T is the
                                                            1     2   3   4
union of the two isosceles triangles A, P1 , P4 and P2 , B, P3 . For every (x, y) ∈ Σ0,ε
                                                                                     0 ,

we consider the point P ⊥ = (x, 0) on the longitudinal axis of Σ0,ε     0 and we define
                                                                     ⊥
P = (x, yP ) to be the intersection of the vertical line through P = (x, 0) with the
boundary ∂Σ0,ε 0 of Σ 0 in the half plane y ≥ 0. This boundary is the polygonal
                       0,ε
line connecting the vertices A, P1 (ε), P2 (ε), B. Then |P − P ⊥ | is the (Euclidean)
distance between P and P ⊥ in R2 .
   At this stage, we are confronted with two asymptotic limits. For fixed n, the limit
as ε → 0 gives vanishing thickness to the fibered neighborhood of the pre-fractal
polygonal curve. The limit as n → +∞ leads to the fractal set included in Ω. We
proceed diagonally, by suitably choosing for each n a value εn > 0, such that εn → 0
as n → +∞. Then, we take the single limit as n → +∞.
Analysis and Numerics of Some Fractal Boundary Value Problems                           243

   We consider the sequence of operators An = Aεn , where Aεn are the operators
given in (1). The operators An are defined as self-adjoint operators in the space
L2 (Ω) (with Neumann boundary condition on ∂Ω). Our main goal is to show the
convergence of the spectral measures Pn (dλ) of the operators An to the spectral
measure of a suitable self-adjoint asymptotic operator, as n → +∞. We rely on
variational and convergence tools from [24]. In particular, by a general result in
[24], we obtain the convergence of the spectral measures of the operators An to the
spectral measure of a limit operator A as a consequence of the M-convergence of
the (extended-valued) energy forms associated with these operators.
   For every n, and for the specified value of εn > 0, the energy form of the operator
Aεn in L2 (Ω) is the functional
                          
                             Ω aεn (x, y)|∇u| dxdy if u ∈ D[Fεn ]
                                n            2                     n
       Fn [u] = Fεn [u] =
                 n
                            +∞                         if u ∈ L2 (Ω) \ D[Fεnn ]

where aεnn Id is the coefficient matrix defined in (4) for ε = εn , and the domain
D[Fεnn ] ⊂ L2 (Ω) is the completion of C 1 (Ω) in the norm
                                                                                1
                                                                                2
                  uD[Fεnn ] =            |u|2 dxdy +        |∇u|2 aεnn dxdy       .   (7)
                                       Ω                  Ω

    As explained before, we let, simultaneously, the iteration parameter n go to +∞
and the transversal size ε of the fibers go to 0, by choosing ε = εn to be infinitesimal
as n → +∞. We must also choose the scaling constants σn . These scaling laws can
be expressed in terms of a single parameter δ > 0. The value of δ is given by the
ratio
                                              dH
                                        δ :=
                                              dS
of the Hausdorff dimension dH of G and the spectral dimension dS of G. Here G is
the invariant (self-similar) set defined by the family Φ. The constant δ is an effective
metric parameter that depends on the fractal G. For the Koch curve, N = 4, α = 3,
δ = ln 4/ ln 3. For the Sierpiński gasket, N = 3, α = 2, δ = ln 5/ ln 4. Note that in
both cases δ > 1. We then define
                                                   α 2δ
                                              ρ=
                                                   N
and take
                         n                                                   n
                      ρ                                                        ρ
           εn =                ωn ,   (with ωn → 0 as n → +∞),           σn =      .    (8)
                      N                                                        α
   We also assume that the material constants ζn , γn remain finite and non-vanishing
through the iteration process:

                  lim ζn = ζ ∗ ∈ (0, +∞),            lim γn = γ ∗ ∈ (0, +∞)             (9)
244                                                                                   U. Mosco

as n → +∞. In [30] the following result is obtained, which extends previous results
from [27] and [28]:

Theorem 2.1 With the value of δ > 0 specified before, under the assumptions (8)
and (9) the sequence of functionals Fn M-converges in L2 (Ω) to the functional
                 ∗
                 ζ Ω |∇u|2 dxdy + γ ∗ EG [u|G ]             if u ∈ H 1 (Ω), u|G ∈ D[EG ]
      F [u] =                                                                              (10)
                  +∞        if u ∈ L2 (Ω) \ {u : u ∈ H 1 (Ω), u|G ∈ D[EG ]}

where EG [u|G ] is the energy functional on the fractal G.

   In this statement, H 1 (Ω) ⊂ L2 (Ω) is the Sobolev space obtained as the comple-
tion of C 1 (Ω) in the norm
                                                                               1
                                                                               2
                     uH 1 (Ω) =          |u|2 dxdy +            |∇u|2 dxdy
                                       Ω                     Ω

and u|G is the trace of u ∈ H 1 (Ω) on G, defined, e.g., as in [13, 14]. For u in C(G)
the energy functional EG [u] is obtained as the increasing limit

                                     EG [u] = lim EnG [u]                                  (11)
                                                n→+∞

of the discrete energy forms

                            1 α 2nδ                           2
                EnG [u] =                u ψi|n (br ) − u ψi|n (bs ) ,                     (12)
                            2 Nn
                                   i|n br =bs ∈Γ

on the domain
                                                              
                       D[EG ] = u ∈ C(G)| sup EnG [u|V n ] < +∞ .
                                                    n≥0

Here for every n ≥ 0 the set V n is obtained by iteration as
                                              
                                      Vn =           ψi|n (Γ ).                            (13)
                                               i|n

                                                         
The fractal G is the closure in R2 of the set V ∞ = +∞          n
                                                           n=0 V . We note that the
functional (10) is non trivial, because it is finite on the domain D[F ] = {u : u ∈
H 1 (Ω), u|G ∈ D[E]} which is dense in L2 (Ω) (see, e.g., [13]). The functional
F defines a densely defined self-adjoint operator A = −ΔG in the Hilbert space
L2 (G, μG ), which takes the role of intrinsic Laplace operator in G with Neumann
condition on Γ . The measure μG is the (normalized) dH -dimensional Hausdorff
measure on G, see Hutchinson [12].
Analysis and Numerics of Some Fractal Boundary Value Problems                       245

  The case of Dirichlet conditions, on both ∂Ω and Γ , is covered by the next result.
The functional Fn [u] of the previous theorem is now replaced by the functional
                                 n            2
                               Ω aεn (x, y)|∇u| dxdy   if u ∈ D0 [Fεnn ]
      Fn [u] = Fεn [u] =                                                            (14)
                               +∞                      if u ∈ L2 (Ω) \ D0 [Fεnn ]

where the domain D0 [Fεnn ] ⊂ L2 (Ω) is now the completion of C01 (Ω) in the norm
uD[Fεnn ] given in (7). The limit functional is defined on L2 (Ω) by
                ∗
                ζ Ω |∇u|2 dxdy + γ ∗ E[u|G ] if u ∈ H01 (Ω), u|G ∈ D0 [EG ]
     F [u] =                                                                        (15)
                +∞ if u ∈ L2 (Ω) \ {u : u ∈ H01 (Ω), u|G ∈ D0 [EG ]}.

The functional (15) is finite on the domain D0 [F ] = {u : u ∈ H01 (Ω), u|G ∈
D0 [EG ]}, where D0 [EG ] is the subspace of all functions in D[EG ] that vanish on Γ .
Again, this functional is non trivial, because D0 [F ] is dense in L2 (Ω). The self-
adjoint operator A = −ΔG , defined now in the Hilbert space L2 (G, μG ) by the
functional F , is the Laplace operator −ΔG in the fractal G with Dirichlet bound-
ary condition on Γ .
   The result in [30] is

Theorem 2.2 Under the same scaling assumptions as in Theorem 2.1, the sequence
of functionals Fn defined in (14) M-converges in L2 (Ω) to the functional F defined
in (15) as n → +∞.

    The special scaling laws for the parameters imply in particular that the transversal
thickness of the fibers tends to zero while their conductivity diverges to +∞, the
product of them remaining bounded, as n → +∞. In the same paper some cases
where this condition is not satisfied are also studied.
    We point out that in both theorems the asymptotic energy has two interacting
components, the standard Dirichlet integral extended to the two dimensional do-
main Ω, and a lower-dimensional fractal energy term. Globally, the limit functional
F defines a self-adjoint operator A in the space L2 (Ω). Formally, such operator A is
given by the two dimensional Laplace operator Δ in the open set Ω \ G—with Neu-
mann or Dirichlet boundary condition on ∂Ω—together with the fractal-Laplacian
ΔG on G—with Neumann or Dirichlet condition on Γ = G ∩ ∂Ω. The two operators
are coupled by a second order transmission condition on G. The condition states that
the jump of the normal derivative of the function u from Ω across G, taken on G,
equals the Laplacian ΔG acting on the trace of u on G. In the case of Dirichlet con-
dition on Γ , a fractal analogue of the Lions-Magenes trace space, mentioned earlier,
comes into play. For a rigorous definition of the transmission problems when G is
the von Koch curve we refer to [16] and [18].
    As mentioned in the introduction, the convergence of the energy functionals im-
plies the convergence of the spectral measures and of the spectral subspaces.
246                                                                             U. Mosco

Theorem 2.3 In the same assumptions of Theorem 2.1 and Theorem 2.2, for every
λ < μ which are not in the point spectrum of the operator A in L2 (Ω), the projec-
tion operator P n ((λ, μ]) of the spectral resolution P n of the operator An in L2 (Ω)
converges strongly in L2 (Ω) to the projection operator P ((λ, μ]) of the spectral
resolution P of the operator A in L2 (Ω).

    This result follows from the convergence of the functionals, by applying Theo-
rem 2.4.1 and its Corollary 2.7.1 from [24].
    In the problems considered so far in this section the parameter ζ ∗ is positive. This
is the case when the medium in which the fibers are embedded keeps finite positive
viscosity up to the limit. Then, as seen before, the energy is only partially absorbed
into the lower dimensional fractal inclusion. The vanishing viscosity case, when

                                      lim ζn = ζ ∗ = 0

has been considered in [29]. In this case the limit functional is composed only by
the fractal energy term.
    Such a collapse of geometry and energy on a lower dimensional fractal set is an
interesting feature, both in fractal and PDEs theories. It shows, in particular, that
fractal Laplacians can be obtained as the (spectral) limit of singular second order
elliptic operators in divergence form.
    In the vanishing viscosity case, however, there is a loss of coercivity as n → +∞.
In fact, the uniform H 1 estimate that plays a basic role in the previous theorems, that
is
                                c∇u2L2 (Ω) ≤ Fεnn [u]

with c > 0 independent of n, now fails, due to the vanishing of the coefficient ζn as
n → +∞. The domains D[Fn ] of the functionals Fn and the domain D[F ] of the
limit functional F are no more contained in the single Hilbert space H = L2 (Ω),
which is the space where the convergence of the previous theorems takes place.
   This difficulty has been overcome in [29], by relying on a generalization of the
M-convergence of functionals to variable Hilbert spaces, developed by Kuwae-
Shioya in [15]. Generally speaking,
                                  the     convergence of the functionals takes now
place in a larger Hilbert space, ∞  0 H n.

   In [29], for every n ≥ 0 the following Hilbert space is considered:
                                                 
                                  H n = L2 Ω, μnεn ,

where the Borel measure μnεn in Ω is defined by

                  μn = ζn 1Ω\Σ2ε
                              n L + 1Σ n \Σ n L + τn w 1Σ n L.
                                      2ε   εn
                                                      n
                                                      εn εn
                                  n           n


   Here L is the 2-dimensional Lebesgue measure; 0 < ζn ≤ 1 are the viscosity pa-
rameters and τn are scaling constants, depending on the fractal, that will be specified
Analysis and Numerics of Some Fractal Boundary Value Problems                              247

later on. The functional Fn is now defined for each n in the spaces H n as follows:
                                      n            2
                                    Ω aεn (x, y)|∇u| dxdy    if u ∈ D[Fn ]
    Fn [u] = Fεnn [u] =
                                  +∞                         if u ∈ L2 (Ω, μn ) \ D[Fn ]

where aεnn Id is again the coefficient matrix defined in (4) for ε = εn and now
the domain D[Fn ]—D[Fn ] ⊂ L2 (Ω, μn ) = H n —is the space of all functions
u ∈ L2 (Ω, μn ) with distribution weak gradient in L2 (Ω, μn ). The functional Fn
defines a regular, closed Dirichlet form in H n . The generator of such a form is a
self-adjoint operator −An densely defined in the space H n . The operator An is the
positive-definite self-adjoint realization in the space L2 (Ω, μn ) of the second or-
der elliptic operator in divergence form (1), with natural Neumann conditions on
∂Ω. The spectrum of the operator An + IdHn is a point spectrum, with eigenvalues
λnk → +∞ as k → +∞.
    The measures μn are the so-called speed measures of the Markov processes gen-
erated by −An . They replace, in the choice of the Hilbert space, the two dimensional
Lebesgue measure of the non-vanishing viscosity case. The transmission condition
at the interface of G and Ω is affected by this change.
    We now summarize the assumptions in the present case. The coefficients aεnn are
defined as previously in (4), and they depend on the two sequences of constants ζn
and γn . The constants N , α, δ and ρ—that depend on the fractal—are the same as
specified before. As before, we also take
                       n                                                    n
                    ρ                                                         ρ
         εn =                ωn ,    (with ωn → 0 as n → +∞),           σn =      .        (16)
                    N                                                         α

In addition, for the Sierpiński case considered in [29], we assume that
                                                       n
                                                       ρ
                                             τn = 3
                                                       α

(for other fractals, the numerical coefficient 3 may be replaced by another numerical
constant depending on the cardinality of Γ ). With this choice of the constants τn ,
it is proved in [29] that the measures μn weak* converge to the measure μG as
n → +∞, that is

                                             φdμn →        φdμG
                                         Ω             Ω

as n → +∞, for every φ ∈ C(Ω̄).
   The result of [29] for the Sierpiński fractal is:

Theorem 2.4 With the scaling constants εn , σn and τn specified before, let the con-
stants 0 < ζn ≤ 1 and γn be such that lim ζn = 0 and lim γn = γ ∗ ∈ (0, +∞) as
n → ∞. Then the sequence of functionals Fn in H n M-converges (in the sense of
248                                                                           U. Mosco

Kuwae-Shioya) to the functional
                         ∗
                           γ EG [u]     if u ∈ D[F ]
                F [u] =                                                           (17)
                           +∞           if u ∈ L2 (G, μG ) \ D[F ]

with domain D[F ] = {u ∈ L2 (G, μG ) : u ∈ D[EG ]} where EG [u] is the energy func-
tional on the fractal G with domain D[EG ] ⊂ L2 (G, μG ).

   We note that, in the present context—that is, H n = L2 (Ω, μn ), H = L2 (G, μG )—
the M-convergence of the functionals Fn to the functional F , in the sense of Kuwae-
Shioya, is defined as the usual M-convergence of functionals, provided strong and
weak convergence of sequences of vectors are defined in the following way: a se-
quence of vectors un ∈ H n converges strongly to a vector u ∈ H if there exists a
sequence φm ∈ C(Ω̄), such that φm − uH → 0 as m → 0, and

             lim lim sup φm − un H n → 0,     as n → +∞ and n → 0.
              m     n

The sequence un ∈ H n converges weakly to u ∈ H , if the inner product (un , vn )H n
converge to the inner product (u, v)H for every vn converging strongly to v as n →
+∞.
   Similarly as before, from the convergence of the functionals we get the conver-
gence of the spectral measures, see Theorem 3.4 in [15]:

Theorem 2.5 In the same assumptions of Theorem 2.4, for every λ < μ not in the
point spectrum of the self-adjoint operator A = −ΔG in L2 (G, μG ), defined by F ,
the projection operator P n ((λ, μ]) of the spectral resolution P n of the self-adjoint
operators An in L2 (Ω, μn ), defined by Fn , converges strongly to the projection
operator P ((λ, μ]) of the spectral resolution P of the operator A, in the Kuwae-
Shioya sense.

   In this statement, the strong convergence of the spectral projectors has to be in-
tended according to the following general definition: a sequence of bounded op-
erators Bn in H n converges strongly to a bounded operator B in H if for every
un ∈ H n converging strongly to u ∈ H the sequence Bn un ∈ H n converges strongly
to Bu ∈ H , with the strong convergence of vectors defined as before.



3 Elliptic Operators with Fractal Degeneracy

In this section we report on the recent papers by Capitanelli and Vivaldi, [6, 7].
The problem studied in these papers is the boundary approximation with suitable
insulating fibers of Laplace equations in a domains bounded by four Koch curves.
   The domain Ω0 is now the square {(x, y) : 0 < x < 1, −1 < y < 0}, with vertices
A = (0, 0), B = (1, 0), C = (1, −1) and D = (0, −1). On each one of the four sides
Analysis and Numerics of Some Fractal Boundary Value Problems                          249

a Koch curve Kj , j = 1, . . . , 4, is constructed, moving outward from the square.
At the iteration n, the domain bounded by the four pre-fractal Koch curves Kjn is
denoted by Ω n . For each n, and for every 0 < ε ≤ ε0 < 1/2, the open set Ω n is
enlarged to become the open set

                                    Ωεn = Ω¯ n ∪ Σj,ε
                                                  n
                                                      ,

where for each j the set Σj,ε n is the open fibered neighborhood of K n constructed by
                                                                         j
similarity from the initial reference fiber Σ0,ε0 already described in Sect. 1. However,

since now the pre-fractal is on the boundary, we split the reference fiber in half, by
keeping only the (open) half fiber that lays above the x-axis. The fibered set ∪Σj,ε  n

lies then externally to the domain Ω n and is disjoint from Ω¯ n .
    The conductivity coefficients of the fibered set Σj,ε  n is defined, as in the previ-

ous section, in terms of the constants γn and σn and the functions wεn . However,
in the definition of wεn , a substantial change is performed: in the definition of the
conductivity of the reference fiber Σ0,ε , the factor |P − P ⊥ |−1 is replaced by the
factor |P − P ⊥ | (and the numerical coefficients are modified conveniently). With
this change, the fibers present vanishing conductivity as ε tends to 0. The conduc-
tivity aεn (x, y) of the enlarged domain Ωεn is then defined to be equal to wεn (x, y) if
(x, y) ∈ Σεn , and equal to 1 if (x, y) ∈ Ω¯ n .
    The spaces H 1 (Ωεn , wεn ) and H01 (Ωεn , wεn ) are defined to be the completion of
C (Ω̄εn ) and C01 (Ωεn ), respectively, in the norm
  1

                                                                               1
                                                                               2
             uH 1 (Ωεn ,wεn ) =         |u|2 dxdy +         |∇u|2 wεn dxdy       .
                                    Ωεn                 Ωεn

   By Ω ∗ we denote the unit disc with center at P0 = (1/2, 1/2). We then consider
the following functionals:
                            ⎧       n            2
                            ⎪
                            ⎨ Ωεnn aεn (x, y)|∇u| dxdy
        Fn [u] = Fεnn [u] =          if u ∈ L2 (Ω ∗ ) and u|Ωεn ∈ H01 (Ωεn , wεn )
                            ⎪
                            ⎩
                              +∞ if u ∈ L2 (Ω ∗ ) and u|Ωεn ∈   / H01 (Ωεn , wεn ).

   By μ∂Ω we denote the measure on ∂Ω such that the restriction of μ∂Ω to each
fractal component Kj of ∂Ω coincides with the Hausdorff measure μKj of Kj ,
j = 1, . . . , 4.
   Then the following result is given in [6]:

Theorem 3.1 Let us assume that γn > 0 γ ∗ > 0 and γn → γ ∗ as n → +∞. Let
εn be an arbitrary sequence such that εn → 0 as n → +∞. Then the functional Fn
M-converge to the functional
                            ∗                         ∗
           Ω |∇u| dxdy + γ     ∂Ω |u| dμ∂Ω if u ∈ L (Ω ) and u|Ω ∈ H (Ω)
                  2                   2              2                 1
F [u] =
          +∞ if u ∈ L2 (Ω ∗ ) and u|Ω ∈  / H 1 (Ω).
250                                                                            U. Mosco

    We point out that the boundary value problem for the Laplace operator in Ω
associated with the limit functional F implies, if γ ∗ > 0, a Robin type condition on
∂Ω.
    In [6], the case when γn → 0—leading to Neumann boundary condition on ∂Ω—
and the case γn → +∞ with an additional assumption on the rate of convergence of
εn → 0—leading to a Dirichlet condition on ∂Ω—are also studied, as well the gen-
eralization of the boundaries to the irregularly scaled Koch curves, or Koch mixtures,
in the sense of [4] and [26].



4 Interfacial Heat Transmission
Two-dimensional second order transmission problems across a highly conductive
layer of Koch type have been studied by Lancia, Vernole and co-authors in a series
of recent papers, [8, 17, 19–22].
   In reporting on this work in the context of this note, we confine ourselves mainly
to the papers [8, 19, 20]. In [19] the authors obtain their first results on the heat
transmission problem that we already mentioned in the Introduction. In particular,
they show the existence and uniqueness of the strict solution for both the fractal
and pre-fractal problems, moreover they study the regularity and the convergence
of the solutions of the pre-fractal problems as the pre-fractal layer converges to the
fractal set. In [8], the authors provide the finite element approximation for this kind
of problems.
   The pre-fractal transmission problems studied in [20] can be formally stated as
follows:
          ⎧
          ⎪
          ⎪
              dun (t,P )
                         − Δun (t, P ) = f (t, P )     in [0, T ] × Ωni , i = 1, 2   (i)
          ⎪
          ⎪       dt
          ⎪
          ⎪   du                        ∂u   (t,P )
          ⎨ dt − ΔKn un (t, P ) = [ ∂ν ] + f on [0, T ] × Kn ,
          ⎪      n                         n
                                                                                    (ii)
  (Pn )      u n (t, P  ) = 0                          on  [0, T ] × ∂Ω,           (iii)
          ⎪
          ⎪  u1n (t, P ) = u2n (t, P )                 on [0, T ] × Kn ,           (iv)
          ⎪
          ⎪
          ⎪
          ⎪  u   (t, P  ) = 0                          on  [0, T ] × ∂K             (v)
          ⎪
          ⎩
               n                                                         n
             un (0, P ) = 0                            on Ω                        (vi)

   In this problem Ω √ is a rectangular √domain, for example
                                                         √ the open rectangle √ with
vertices A = (0, − 3/2), B = (1, − 3/2), C = (1, 3/2) and D = (0, 3/2).
The source term f (t, P ) is a given function in C δ ([0, T ]; L2 (Ω, mn )) with δ ∈
(0, 1). For a fixed n, Kn is the pre-fractal Koch curve with endpoints are (0, 0) and
(1, 0). The curve Kn separates Ω into two open subsets, Ωn1 and Ωn2 . The restriction
of un to Ωni is denoted by uin , i = 1, 2. The piecewise-tangential Laplacian defined
on the polygonal curve Kn is denoted by ΔKn . The jump of the normal derivatives
across Kn is given by
                                      
                                   ∂un      ∂u1 ∂u2
                                         = n + n,
                                   ∂ν       ∂ν1    ∂ν2
where νi is the inward normal vector to the boundary of Ωni .
Analysis and Numerics of Some Fractal Boundary Value Problems                                251

   Let us introduce the Hilbert space L2 (Ω, mn ), where

                                     dmn = dxdy + ds,                                        (18)
                                                                                         1
with inner product (·,·)mn and norm u2,mn = ( Ωn |u|2 dxdy + Kn |u|2 ds) 2 and
the forms

                E (n) (un , un ) =           |∇un |2 dxdy +           |∇τ γ0 un |2 ds,       (19)
                                     Ω                           Kn
defined on the domain
                                                               
                   V (Ω, Kn ) = un ∈ H01 (Ω) : γ0 un ∈ H01 (Kn ) .                           (20)

In (20), H01 (Ω) denotes the usual Sobolev space in Ω, H01 (Kn ) the trace space on
Kn and γ0 un is the trace of un on Kn (denoted simply by un below). Moreover, the
second integral at the right-hand side of (19) is defined piece-wise by
                                                    
                            |∇τ γ0 un |2 ds =                  |∇τ γ0 un |2 ds,
                       Kn                          M∈F n   M

where the sum is taken over the segments M that compose Kn , ∇τ is the tangential
derivative along M. The measure ds is the one-dimensional arc length measure
on Kn . This integral expresses the energy EKn (·, ·) of the curve Kn . The space
V (Ω, Kn ) given by (20) is a Hilbert space under the norm
                                                            1/2
                            un V (Ω,Kn ) = E (n) (un , un )     .                          (21)

Moreover, for each n ∈ N, E (n) (·, ·), with domain V (Ω, Kn ), is a regular, strongly
local Dirichlet form in L2 (Ω) and in L2 (Ω, mn ), respectively.
   In [20], Problem (Pn ) is dealt with by semigroup methods. More precisely, for
every fixed n the following abstract Cauchy problem is studied
                              dun (t)
                  (Pn )         dt = An un (t) + f (t),                0≤t ≤T
                                                                                             (22)
                              un (0) = 0

where An : D(An ) ⊂ L2 (Ω, mn ) → L2 (Ω, mn ) is the generator associated to the
energy form E (n) ,

         E (n) (un , v) = −        An un v dmn ,        un ∈ D(An ), v ∈ V (Ω, Kn ).
                               Ω

   The following existence and uniqueness result is then obtained

Theorem 4.1 Let 0 < δ < 1, f ∈ C δ ([0, T ], L2 (Ω, mn )), and let
                                         t
               un (t) = Tt u0 +              Tn (t − s)f (s)ds    for every n ∈ N,           (23)
                                     0
252                                                                                              U. Mosco

where Tn (t) is the analytic semigroup generated by An . Then un is the unique
“strict” solution of (Pn ). Moreover,

      un C 1 ([0,T ],L2 (Ω,mn )) + un C 0 ([0,T ],D(An )) ≤ cf C δ ([0,T ],L2 (Ω,mn )) ,       (24)

where c is a constant independent of n.

   The solution of the abstract Cauchy problem (Pn ) is the “strong” solution of
Problem (P n ), as described by this result in [8]:

Theorem 4.2 Let un be the solution of Problem (Pn ). For every fixed t ∈ [0, T ] we
have
          ⎧
          ⎪
          ⎪
            dun (t,P )
                       − Δun (t, P ) = f (t, P ), for P ∈ Ωni , i = 1, 2,
          ⎪
          ⎪     dt
          ⎨ ∂uin
            ∂νi ∈ L (Kn ),                        i = 1, 2,
                       2
                                                                               (25)
          ⎪
          ⎪
            du n
                 −  Δ     u |   = [ ∂un
                                        ] + f,    in L2 (Kn ),
          ⎪
          ⎪  dt         Kn n Kn      ∂ν
          ⎩u (t, P ) = 0,                         for P ∈ ∂Ω.
             n

              ∂ui
Moreover, ∂νni ∈ C([0, T ], L2 (Kn )), i = 1, 2.

   In [19] and [20] the following regularity result is also obtained

Theorem 4.3 For any fixed t ∈ [0, T ], u1n ∈ H 2,α1 (Ωn1 ) with α1 > 25 ; u2n ∈
H 2,α2 (Ωn2 ) with α2 > 14 , and un ∈ C 0 (Ω), un |Kn ∈ H 2 (Kn ).

                                                                    i
    The definition of the weighted Sobolev spaces H 2,α (Ωni ) is rather delicate. If D
is a non-convex polygonal domain in R2 and α > 0, the space H 2,α (D) tis defined
to be the space
                                                                                    
 H 2,α (D) = v ∈ H 1 (D) : r α · D β v ∈ L2 (D), β = (β1 , β2 ) ∈ N × N s.t. |β| = 2 ,

equipped with the norm
                                                                                1/2
                 vH 2,α (D) := v2H 1 (D) +         r α · D β v 2 2                 .
                                                                          L (D)
                                                     |β|=2

The delicate point in this definition is the construction of the weight function r :
D → R+ , that we now describe. Let {Pj , 1 ≤ j ≤ N} be the set of vertices of D.
For j = 1, . . . , N, let θj be the interior angle of D at Pj . Let R be the set of the
indices {j = 1, . . . , N : θπj < 1} and let Q = {Pj }j ∈R be the subset of the vertices
with reentrant angles θj (these are the points where the solutions are singular). We
set η := { 14 · min |Pj − Pk |; j, k ∈ R, j = k} and arbitrarily choose 0 < ε < η. For j
in R, we define rj (P ) := |P −Pj | for all P in Bε (Pj ) = {P ∈ D : |P −Pj | < ε}. We
then define the function r : D → R+ by putting       r(P ) := rj (P ), for all P ∈ Bε (Pj )
and j in R, and r(P ) := 1 for all P ∈ D\ j ∈R B2ε (Pj ).
Analysis and Numerics of Some Fractal Boundary Value Problems                           253

    We conclude this section with some remarks on the numerical approximation of
these problems, reporting mainly on the papers [8] and [9].
    The pre-fractal curve Kn induces a natural triangulation Tn,h of the domain Ω, in
which the vertices of Kn belongs to the set of nodes of Tn,h . Starting with this trian-
gulation, a mesh refinement process is given, that generates a regular and conformal
family of finer triangulations {Tn,h }.
    The need for such refined triangulations comes from the presence of reentrant
angles in the boundaries of the domains Ωn1 and Ωn2 , which were previously de-
scribed. As already mentioned, the solution un is singular at these angles, indeed
un is not in the Sobolev space H 2 (Ωni ), as it is the case of a smoothly bounded do-
main. Instead, as seen with Theorem 4.3, uin ∈ H 2,αi (Ωni ), i = 1, 2, with α1 > 25 and
α2 > 14 . In view of these singularities, in order to get optimal rate of convergence
for the finite element approximations the triangulation of the domains Ωni must be
refined, according to the conditions introduced in this regard by Grisvard in [11].
    The authors are able to implement Grisvard’s conditions by satisfying at the same
time an additional important property for their refinements. The refined meshes are
constructed as a “nested” sequence of meshes, i.e., all the nodes of Tn,h belong also
to Tn+1,h . This property is of course of great help when the numerical approximation
is carried out at various levels of the fractal iteration. We refer to [8] and [9] for more
details. We also point out that in [9] more complicated boundaries, made by suitable
mixtures of Koch curves, are also considered.
    With the appropriate triangulations at hand, the numerical approximation of the
problem (Pn ) is carried out in two steps. In the first step the semi-discrete problem,
obtained by discretizing with a Galerkin method only the space variable, is con-
sidered. The following a priori error estimates of the order of convergence is then
obtained

Theorem 4.4 Let un (t) be the solution of (Pn ), uin (t) be the restriction to Ωni of
un (t), for i = 1, 2, and un,h (t) be the semi-discrete solution. Then for every t ∈
[0, T ] we have

                                                 t                  
              un (t) − un,h (t)2 +               un (τ ) − un,h (τ )2          dτ
                                  2,m  n                               V (Ω,Kn )
                                               0
                                t                  
                                        
                 ≤ ch2           f (τ )2      dτ
                                           2,mn
                             0

where c is a suitable constant independent of h.

    In the second step the fully discretized problem is considered. By applying a
finite difference scheme on the time variable, the so-called θ method, an error esti-
mate between the semi-discrete solution un,h (tl ) and the fully discrete solution uln,h
is obtained.
    From this estimate and from Theorem 4.4, they finally get
254                                                                                        U. Mosco

Theorem 4.5 Assume that f ∈ C δ ([0, T ]; L2 (Ω, mn )) and ∂f        ∂t ∈ L ([0, T ] ×
                                                                            2

Ω, dt × dmn ). Let n be fixed and let un (t) be the solution of problem (Pn ), uln,h
be the fully discretized solution, as given by the θ -method with 12 ≤ θ ≤ 1. Then,
                                                               
                                            T      
      un (tl ) − ul 2                        f (τ )2
                   n,h 2,m ≤ ch
                               2
                                                       2,m
                                                           dτ
                            n                              n
                                          0
                                                                               2         
                                                 2                      T  ∂f 
                                  + Cθ t · f (0)
                                         2
                                                           2,mn
                                                                  +         (τ )
                                                                            ∂τ          dτ .
                                                                      0            2,mn

    A final remark about future research. In all the problems discussed in this paper
an important question remains to be investigated, namely, to obtain some quanti-
tative estimate for the asymptotic fractal limit. Such estimates should reflect the
stability properties of the problem at hand in presence of the wild changes in the
geometry. The very nature of the estimates—whether they can be stated in suitable
function spaces or they are just of scalar energy kind—must be understood, in each
one of the special cases described before.

Acknowledgements This work was supported by the NSF grant No. 1109356.
    The author wishes to thank the authors of the papers presented in this note for their kindness in
providing him with the preprints of their work.
    The author wishes also to thank the Colleagues in Pavia who organized the Conference for their
invitation and hospitality and the Editors of the Volume of the conference for the opportunity given
to him of contributing this paper.




References
 1. Achdou, Y., Sabot, C., Tchou, N.: A multiscale numerical method for Poisson problems in
    some ramified domains with fractal boundary. Multiscale Model. Simul. 5(3), 828–860 (2006)
 2. Attouch, H.: Variational Convergence for Functions and Operators. Pitman, London (1984)
 3. Bagnerini, P., Buffa, A., Vacca, E.: Finite elements for a prefractal transmission problem. C.
    R. Math. 342(3), 211–214 (2006)
 4. Barlow, M.T., Hambly, B.M.: Transition density estimates for Brownian motion on scale ir-
    regular Sierpiński gaskets. Ann. Inst. Henri Poincaré 33(5), 531–557 (1997)
 5. Cannon, J.R., Meyer, G.H.: On a diffusion in a fractured medium. SIAM J. Appl. Math. 3,
    434–448 (1971)
 6. Capitanelli, R., Vivaldi, M.A.: Insulating layers and Robin problems on Koch mixtures. J. Dif-
    fer. Equ. 251(4–5), 1332–1353 (2011)
 7. Capitanelli, R., Vivaldi, M.A.: On the Laplacean transfer across a fractal mixture Asymptot.
    Anal. doi:10.3233/ASY-2012-1149
 8. Cefalo, M., Dell’Acqua, G., Lancia, M.R.: Numerical approximation of transmission problems
    across Koch-type highly conductive layers. Appl. Math. Comput. 218(9.1), 5453–5473 (2012)
 9. Cefalo, M., Lancia, M.R., Liang, H.: Heat flow problems across fractal mixtures: regularity
    results of the solutions and numerical approximation (to appear)
10. Evans, E.: Extension operators and finite elements for fractal boundary value problems. PhD
    thesis, Worcester Polytechnic Institute, USA (2011)
11. Grisvard, P.: Elliptic Problems in Nonsmooth Domains. Pitman, London (1985)
12. Hutchinson, J.E.: Fractals and self-similarity. Indiana Univ. Math. J. 30, 713–747 (1981)
Analysis and Numerics of Some Fractal Boundary Value Problems                                    255

13. Jonsson, A.: Dirichlet forms and Brownian motion penetrating fractals. Potential Anal. 13,
    69–80 (2000)
14. Jonsson, A., Wallin, H.: Function Spaces on Subsets of Rn , Part 1. Math. Reports, vol. 2.
    Harwood Academic, London (1984)
15. Kuwae, K., Shioya, T.: Convergence of spectral structures: a functional analytic theory and its
    applications to spectral geometry. Commun. Anal. Geom. 11(4), 599–673 (2003)
16. Lancia, M.R.: A transmission problem with a fractal interface. Z. Anal. Anwend. 21, 113–133
    (2002)
17. Lancia, M.R., Vacca, E.: Numerical approximation of heat flow problems across highly con-
    ductive layers. In: Silhavy, M. (ed.) Mathematical Modeling of Bodies with Complicated Bulk
    and Boundary Behaviour. Quaderni di Matematica, pp. 57–77. Dept. Me. Mo. Mat., U. Roma
    La Sapienza, Roma (2007)
18. Lancia, M.R., Vivaldi, M.A.: Asymptotic convergence for energy forms. Adv. Math. Sci. Appl.
    13, 315–341 (2003)
19. Lancia, M.R., Vernole, P.: Convergence results for parabolic transmission problems across
    highly conductive layers with small capacity. Adv. Math. Sci. Appl. 16, 411–445 (2006)
20. Lancia, M.R., Vernole, P.: Irregular heat flow problems. SIAM J. Math. Anal. 42(4), 1539–
    1567 (2010)
21. Lancia, M.R., Vernole, P.: Semilinear evolution transmission problems across fractal layers.
    Nonlinear Anal., Theory Methods Appl. 75, 4222–4240 (2012)
22. Lancia, M.R., Vernole, P.: Semilinear fractal problems: Approximation and regularity re-
    sults. Nonlinear Anal., Theory Methods Appl. Article first published online 2 Nov 2012.
    doi:10.1016/j.na2012.08.020
23. Liang, H.: On the construction of certain fractal mixtures. MS Thesis, Worcester Polytechnic
    Institute (2010)
24. Mosco, U.: Composite media and asymptotic Dirichlet forms. J. Funct. Anal. 123(2), 368–421
    (1994)
25. Mosco, U.: Variational fractals. Ann. Sc. Norm. Super. Pisa, Cl. Sci. (4) XXV, 683–712
    (1997)
26. Mosco, U.: Harnack inequalities on scale irregular Sierpiński gaskets. In: Birman, et al. (eds.)
    Nonlinear Problems in Mathematical Physics and Related Topics II, pp. 305–328. Kluwer
    Academic/Plenum, New York (2002)
27. Mosco, U., Vivaldi, M.A.: An example of fractal singular homogenization. Georgian Math. J.
    14(1), 169–194 (2007)
28. Mosco, U., Vivaldi, M.A.: Fractal reinforcement of elastic membranes. Arch. Ration. Mech.
    Anal. 194, 49–74 (2009)
29. Mosco, U., Vivaldi, M.A.: Vanishing viscosity for fractal sets. Discrete Contin. Dyn. Syst.
    28(3), 1207–1235 (2010)
30. Mosco, U., Vivaldi, M.A.: Thin fractal fibers. Math. Methods Appl. Sci. Article first published
    online 14 Jun 2012. doi:10.1002/mma.1621
31. Pham Huy, H., Sanchez Palencia, E.: Phénomènes des transmission à travers des couches
    minces de conductivité élevée. J. Math. Anal. Appl. 47, 284–309 (1974)
32. Vacca, E.: Galerkin approximation for highly conductive layers. PhD Thesis, Dept. Me. Mo.
    Mat., U. Roma La Sapienza (2005)
33. Wasyk, R.: Numerical solution of a transmission problem with pre fractal interface. PhD The-
    sis, Worcester Polytechnic Institute (2007)
AFEM for Geometric PDE:
The Laplace-Beltrami Operator

Andrea Bonito, J. Manuel Cascón, Pedro Morin, and Ricardo H. Nochetto




Abstract We present several applications governed by geometric PDE, and their
parametric finite element discretization, which might yield singular behavior. The
success of such discretization hinges on an adequate variational formulation of the
Laplace-Beltrami operator, which we describe in detail for polynomial degree 1.
We next present a complete a posteriori error analysis which accounts for the usual
PDE error as well as the geometric error induced by interpolation of the surface.
This leads to an adaptive finite element method (AFEM) and its convergence. We
discuss a contraction property of AFEM and show its quasi-optimal cardinality.


1 Introduction

Besides its intrinsic interest in differential geometry [30, 31, 56], the Laplace-
Beltrami operator (or surface Laplacian) has received a great deal of attention also


In memory of Enrico Magenes.
A. Bonito
Department of Mathematics, Texas A&M University, 3368 TAMU, College Station, TX
77843-3368, USA
e-mail: bonito@math.tamu.edu

J.M. Cascón
Departamento de Economía e Historia Económica, Universidad de Salamanca, Salamanca 37008,
Spain
e-mail: casbar@usal.es

P. Morin
Instituto de Matemática Aplicada del Litoral (IMAL), Güemes 3450 and Departamento de
Matemática, Facultad de Ingeniería Química, Universidad Nacional del Litoral, 3000 Santa Fe,
Argentina
e-mail: pmorin@santafe-conicet.gov.ar

R.H. Nochetto (B)
Department of Mathematics and Institute for Physical Science and Technology,
University of Maryland, College Park, MD 20742, USA
e-mail: rhn@math.umd.edu

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,          257
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_15,
© Springer-Verlag Italia 2013
258                                                                       A. Bonito et al.

in the applied and numerical communities. Basic geometric partial differential equa-
tions (PDE) such as the mean curvature flow and surface diffusion appear naturally
in materials science modeling [54], whereas Willmore flow is a building block in
the dynamics of membranes governed by bending energy [34]. This article is about
applications, formulation, Galerkin approximation, and adaptivity for a PDE on a
surface γ governed by the Laplace-Beltrami operator Δγ , such as

                                     −Δγ u = f.                                       (1)

One of the major goals of this paper is the design and analysis of parametric adaptive
finite element methods (AFEM) for (1) of polynomial degree 1. Our discussion is
based on [17].
    The first FEM for the Laplace-Beltrami operator on parametric surfaces is due
to G. Dziuk [35], who also developed an optimal a priori error analysis account-
ing for the approximation of the surface and PDE by piecewise linear polynomials.
This seminal work was followed by parametric FEM for time dependent problems
such as the mean curvature flow [36], capillary surfaces [2], surface diffusion [5, 7],
Willmore flow [7, 15, 37, 50], fluid biomembranes [16], and fluid membranes with
orientational order [9, 10]. The analysis of these methods is largely open, except for
graphs [4, 24–27]. We refer to the survey by K. Deckelnick, G. Dziuk, and Ch. El-
liott [26] for some of the early work, including level set and phase field approaches.
    A. Demlow and G. Dziuk gave the first a posteriori error analysis for piecewise
linear polynomials [29], and later A. Demlow extended it to higher polynomial de-
gree [28]. This extension is important in light of applications in fluid dynamics [2]
and biomembrane dynamics [15, 16]. O. Lakkis and R.H. Nochetto formulated an a
posteriori error analysis for the mean curvature flow of graphs in [44].
    Even though adaptivity theory for linear elliptic PDE on flat domains in any di-
mensions and the energy norm is now mature [21, 47, 48, 52], much less is known
for elliptic problems on manifolds; we refer to the survey [49] for the state of the art
of AFEM on flat domains. For the Laplace-Beltrami operator on graphs we mention
the convergence theory of K. Mekchay, P. Morin and R.H. Nochetto [46], whereas
for general parametric surfaces and polynomial degree we are only aware of [17].
We expose here results from [17] and restrict them to the particular case of polyno-
mial degree 1 for the sake of clarity.
    The purpose of this paper is threefold. We first discuss in Sect. 2 several appli-
cations of the Laplace-Beltrami operator we have recently developed. This serves
as a motivation for the rest of the paper as well as illustration of the significance of
adequate formulations and discretizations of rather complex problems which look
seemingly untractable. We next discuss parametric FEM for (1) on piecewise C 1
surfaces which are merely globally Lipschitz. This is inspired by singularities ob-
served in geometric flows, such as pinching [5–7, 15], point defects [9, 10], and line
tension [38]. This in turn makes it unfeasible to use the signed distance function as
in [28, 29, 35]. Our approach, developed in Sects. 3 and 4, allows for kinks aligned
with the initial mesh, and yields optimal convergence rates even for surfaces which
are not piecewise C 2 . Our third goal is to present a rather complete discussion of
adaptivity theory for AFEM on surfaces. The algorithm reads
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                259

AFEM: Given an initial surface-mesh pair (Γ0 , T0 ), and parameters ε0 > 0, 0 <
ρ < 1, and ω > 0, set k = 0 and iterate
                       + +
                       Tk , Γk = ADAPT_SURFACE(Tk , ωεk )
                                                         
                      [Tk+1 , Γk+1 ] = ADAPT_PDE Tk+ , εk
                      εk+1 = ρεk ;     k = k + 1.

AFEM consists of two main modules: ADAPT_PDE is the usual adaptive cy-
cle for flat domains driven by the a posteriori PDE error estimator, whereas
ADAPT_SURFACE is a new module that accounts for and controls surface interpo-
lation error. In Sect. 5 we discuss the a posteriori error analysis for (1) on parametric
surfaces, with emphasis on C 1 parametric representations X : Ω → Rd+1 of γ and
their piecewise linear interpolants FT : Ω → Rd+1 , which describes the polyhedral
counterpart Γ = FT (Ω) of γ ; hereafter Ω ⊂ Rd is the parametric domain. This
interpolation is governed by the geometric error estimator
                                          
                             λΓ := ∇ X − FT L∞ (Ω) .                               (2)

The module ADAPT_SURFACE guarantees that its output satisfies λT + ≤ ωεk , with
                                                                   k
ω a parameter small relative to 1. This is critical for ADAPT_PDE to contract, a
fundamental property of AFEM shown in Sect. 7. We embark on the study of car-
dinality of AFEM in Sect. 8: we first prove that AFEM delivers the best asymp-
totic convergence rate possible for the given regularity of data γ , f and solu-
tion u (Theorem 8.2), and secondly we construct a greedy algorithm that realizes
ADAPT_SURFACE (Proposition 8.1). The role of ω is crucial for the theory of
Sects. 7 and 8. We conclude in Sect. 9 with a computational investigation show-
ing that ω must be small indeed to achieve optimal performance of AFEM.



2 Motivation: Geometric PDE

The Laplace-Beltrami operator is ubiquitous in applications involving surfaces that
evolve and/or are the domain of an underlying PDE. In order to motivate the study
of this operator we mention a few applications where it appears naturally.



2.1 Biomembranes: Modeling and Simulations

Predicting the shape of a cell bounded by a lipid bilayer membrane has inspired a
significant body of research in the past forty years ranging from purely mechanical
descriptions to advanced mathematical analysis. We consider the Helfrich model for
260                                                                                   A. Bonito et al.




Fig. 1 Evolution of an initial axisymmetric ellipsoid of aspect ratio 5 × 5 × 1. For each frame the
picture on the bottom is a 3D view of the surface mesh and that on the top is a 2D cut through a
symmetry plane. The equilibrium is characterized by the formation of an extreme depression of the
center to the point of almost pinching (red blood cell). During the evolution the thickening of the
outer circular edge occurs faster than the motion on the center, producing a depressed circular ring
in between the outer edge and the center (first frame). This in turn is responsible for the appearance
of a center bump instead of a depression. Later the evolution continues to squeeze this bump to a
depression at the expense of more thickening and rounding of the outer circular edge


geometric biomembranes [41], which associates to a closed surface γ , describing
the biomembrane, the bending (or Willmore) energy
                                      
                                    1
                           J (γ ) =     (H − H0 )2 .                         (3)
                                    2 γ

Hereafter H stands for the mean curvature of γ and H0 is the spontaneous curvature
induced by the surrounding medium.


Fluid Membranes

We start with H0 = 0. The first variation (or shape derivative) of J (γ ), subject to
volume and area constraints, is given in strong form by [32, 51, 56]
                         
                                    1
              δγ J (γ ) = Δγ H + H 3 − 2κH ν + (λH ν + pν),                       (4)
                                    2

where κ is the Gaussian curvature of γ , and λ, p are the Lagrange multipliers for
the area and volume constraints, respectively. It is important to notice that δγ J (γ )
is a vector field perpendicular to γ because ν is the unit normal to γ . A (geometric)
gradient flow consists of deforming γ in the direction opposite to the shape gradient,
namely prescribing a vector velocity v to γ according to

                                          v = −δγ J (γ ).                                         (5)

   This flow decreases the energy J (γ ) while keeping area and volume constant,
and thus leads to equilibrium configurations such as that in Fig. 1, which mimics
a red blood cell. The simulations in Fig. 1 were performed with the finite element
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                           261




Fig. 2 Evolution of a fluid membrane with initial axisymmetric ellipsoidal shape of aspect ratio
5 × 5 × 1 and final shape similar to a red blood cell. Each frame shows the membrane mesh and a
symmetry cut along a big axis. The fluid flow is quite complex, creating first a bump in the middle
and next moving towards the circumference and producing a depression in the center with flat
pinching profile. The inertial effects are due to unrealistic physical parameters




Fig. 3 Comparison of final configuration of the geometric biomembrane of Fig. 1 and the fluid
biomembrane of Fig. 2 with unrealistic (left) and realistic (right) physical parameters. For the
latter the inertial effects are not significant and the purely geometric evolution is similar to the
fluid driven one. The pinching on the left occurs with a much flatter and thinner neck in the center
and thicker torus outside


method of A. Bonito, R.H. Nochetto, and M.S. Pauletti [15], which replaces H in
(4) by the vector curvature H = H ν (see also Sect. 2.2).
    We now consider the more physically realistic model that couples the membrane
with a fluid. In order to do this, we assume the simplest situation in which the fluid is
Newtonian, and thus is governed by the Navier-Stokes equation for incompressible
fluids in the deformable domain Ωt
                                                   
                        ρDt v − div −pI + μD(v) = 0 in Ωt ,
                                                                                     (6)
                                               div v = 0 in Ωt ,

where D(v) = 12 (∇v + ∇vT ) is the symmetric part of the gradient and Σ =
−pI + μD(v) is the Cauchy stress tensor. The membrane interacts with the fluid
only through the boundary condition, which represents a balance of forces at the
interface γ = γt = ∂Ωt :
                                        Σν = kδγ J (γ ),                                        (7)
where k is the membrane bending rigidity coefficient. In [16] A. Bonito, R.H. No-
chetto, and M.S. Pauletti couple the FEM of [15] with a Taylor-Hood discretization
of (6) in an ALE framework involving a semi-implicit Euler method in time. Fig-
ure 2 displays the complex behavior of the fluid membrane and quite noticeable
inertial effects, which lead to a more singular pinching than in Fig. 1. We give a
comparison in Fig. 3.
262                                                                        A. Bonito et al.

Director Fields on Flexible Surfaces

The orientation of the bilipids is about 32° relative to the unit normal to γ for living
cells. In order to describe this situation we consider the simple model introduced
by S. Bartels, G. Dolzmann, R.H. Nochetto, and A. Raisch [10], which is in turn
inspired on the model by M. Laradji and O.G. Mouritsen [45] for flat membranes.
The starting point is to modify the energy (3) to incorporate the effect of a director
field n so that
                                                                  
                    1                           λ                 1
        J (γ , n) =     | divγ ν − δ divγ n| +
                                            2
                                                      |∇γ n| +
                                                             2
                                                                       f (n · ν),    (8)
                    2 γ                         2 γ               2ε γ

with |n| = 1 everywhere in γ . Here divγ , ∇γ stand for the tangential divergence and
gradient to γ , H = − divγ ν, and δ, λ > 0. We thus see that H0 = −δ divγ n acts as
a spontaneous curvature term induced by the director field n. The function f (x) :=
(x 2 − ξ02 )2 in the last term of (8) penalizes the deviation of the angle between n
and ν from arccos ξ0 . It is worth stressing now that if this angle were constant
everywhere on γ , then the projection of n on γ would have a constant length, which
in turn would lead to the creation of defects (or singularities) of n. This is due to
the topological obstruction that there cannot be a smooth tangential vector field with
nonzero constant length defined on a closed surface. Therefore the study of defects
and their influence on membrane shape becomes an intriguing matter.
    This is precisely what has been accomplished in [10], via an L2 -gradient flow (or
relaxation dynamics) for J (γ , n):

                      v = −δγ J (γ , n),      ∂t n = −δn J (γ , n),                    (9)

where v is the velocity of γ . The expression of δγ J (γ , n), the first variation of J
with respect to γ (or shape derivative) is now much more involved than (4), whereas
δn J (γ , n) is rather simple; we refer to [10] for details. This dynamics involves again
the Laplace-Beltrami operator Δγ .
    We display in Fig. 4 the evolution of a sphere γ (first row) along with the director
field n on a plane cutting through north and south poles. The initial director field n0
has a couple of defects ±eiθ of degree +1, which persist through the evolution and
lead to the formation of cone-like singularities at the poles, one pointing inwards
(north pole) and the other outwards (south pole). This configuration shows some
analogies to echinocyte shapes observed in lab experiments [42]. We refer to [10]
for other examples and discussion, including defects of degree ±1.



2.2 The Laplace-Beltrami Operator and Curvature

The Laplace-Beltrami operator makes yet another fundamental appearance in the
definition and calculation of curvature. If x is the identity on γ , then the following
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                          263




Fig. 4 Biomembrane case with inward and outward pointing defects of positive degree one: Snap-
shots of the surface and the director field along a (deformed) geodesic through the north and south
pole after n = 50, 500, 1400 time steps. The surface develops inward and outward cones at the
poles while the director field remains nearly unchanged during the evolution


relation for the vector curvature H = H ν is well known in differential geometry
[30, 31]:
                                          H = −Δγ x.                                          (10)
This crucial formula was first used for computation by G. Dziuk [35] with piecewise
linear finite elements. In the context of geometric evolution of Sect. 2.1 we advance
in time from tn to tn+1 via a semi-implicit Euler method xn+1 = xn + τn vn+1 , which
keeps the geometry explicit,
                                                     
                 Hn+1 · Ψ − τn      ∇γn vn+1 : ∇γn Ψ =     ∇γn xn : ∇γn Ψ .      (11)
               γn                    γn                         γn

This equation for Hn+1 is coupled with the equation for velocity vn+1 , which comes
from the gradient flows (5) or (9), or the Navier-Stokes equations (6)–(7). Getting
separate equations for Hn+1 and vn+1 is effectively an operator splitting technique,
introduced by G. Dziuk [36], which has been used in a number of papers; see e.g.
[2–4, 6–9, 15, 16, 33, 37, 38, 50].
   The mean curvature flow of a surface γ is governed by V = −H , with V being
the scalar normal velocity of γ . On the basis of (10), this geometric PDE can be
reformulated as a heat equation for the position x on γ , following a seminal idea of
G. Dziuk [36]:
                                  ∂t x = V ν = −H = Δγ x.
This allows for a simple and efficient finite element discretization [36]. The analysis
of the resulting FEM is still open, except for the case of graphs [24–26].
264                                                                                 A. Bonito et al.




Fig. 5 Pinch-of in finite time. Evolution by surface diffusion of an 8 × 1 × 1 prism at various time
instants leading to a dumbbell and cusp formation


  Expression (10) is also a crucial building block in the approach of E. Bänsch to
Navier-Stokes equations with free capillary surfaces [2]. On the free surface γ , the
Cauchy stress tensor Σ satisfies the Young-Laplace equation

                                            νΣ = H,

which allows for the following simple and elegant weak formulation of the boundary
term
                                                   
                 νΣw = Hw = − Δγ xw = ∇γ x : ∇γ w,
                       T          T               T
                                                                              (12)
                  γ              γ                γ               γ

where w is a suitable test function. This leads again to a simple and efficient
FEM [2].



2.3 Surface Diffusion and Epitaxial Films

Surface diffusion is a 4th order geometric driven motion of a surface with normal
velocity proportional to the surface Laplacian of mean curvature:

                                           V = Δγ H.                                          (13)

This PDE corresponds to the H −1 gradient flow of the area functional J (γ ) = γ 1,
and has been studied by J. Cahn and J. Taylor [20] among others. E. Bänsch,
P. Morin, and R.H. Nochetto proposed a parametric FEM upon combining (11) and
(12) [5]. Other related schemes have been developed by J. Barrett, H. Garcke and
R. Nürnberg [6, 7]. The analysis of this problem is still open, except for the graph
case [4, 26].
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                        265




Fig. 6 Detailed view of the pinch-off produced by surface diffusion of the 8 × 1 × 1 prism. Adap-
tivity becomes essential when approaching the pinch-off configuration




Fig. 7 Domain dynamics governed by coupling surface diffusion with the Laplace operator in the
bulk. This leads to a mushroom-like free surface that gives rise to an inclusion in finite time



   Surface diffusion may lead to singularity formation in finite time, depending on
the initial configuration. This is depicted in Figs. 5–6 which display the evolution of
an initial 8 × 1 × 1 prism [5]. This simulation shows that adaptivity is essential to
approximate singular situations produced by the flow.
   Modeling the deformation of the free surface γ of stressed epitaxial films leads
to a variant of (13). The stress accounts for the misfit between the crystalline struc-
ture of the substrate and epitaxial film, and causes a plastic deformation of γ . This
morphological instability of the free surface may eventually lead to crack formation
and fracture, an issue of paramount importance in Materials Science. The dynamics
of γ is governed by

                                      V = Δγ (H + ε),

ε being the elastic energy density of the bulk enclosed by γ (see [4, 5, 33] and the
references therein). Applications to material science are given in [3, 8].
   Consider now a simplified situation where elasticity is replaced by the Laplace
operator in the bulk Ω enclosed between the free surface γ and the substrate Σ
(see Fig. 7). We let ε = |∇u|2 , where u solves the problem

                         −Δu = 0 in Ω,              ∂ν u = 0 on γ ,

and u = x on the bottom Σ and lateral boundary. This yields interesting configura-
tions including mushroom-like formations, thereby leading to defects in materials
such as inclusions [33].
266                                                                                A. Bonito et al.




Fig. 8 Refinement procedures on a uniform partition of the unit circle using piecewise linear
curves. The arrows on the piecewise linear curve represent the approximation of the curvature H,
all scaled down by the same multiplicative factor 0.3. We depict the starting approximation of
the curvature (first), that after one global bisection of the surface approximation using the naive
approach (second), and that with the GCAP method (third). In contrast with them GCAP algorithm,
the standard algorithm does not preserve the accuracy of the geometric approximations. The last
picture (fourth) depicts the new approximation of curvature over the surface parametrized by the
vector X∗ obtained in step (iii) of the GCAP algorithm



2.4 Geometrically Consistent Accuracy Preserving Algorithm

The chief geometric identity (10) turns out to play an important role when per-
forming mesh modifications (refinement/coarsening/smoothing) on manifolds with
incomplete information on their geometry, yet preserving position and curvature ac-
curacy. This is typically the case when the surface γ is unknown as in the examples
provided in Sects. 2.1 and 2.3: γ is known only through its approximation Γ and
the approximation of its vector curvature H, still labeled H.
    The naive approach when performing mesh modification consists of (i) apply the
mesh modification to Γ ; (ii) compute the corresponding curvature H according to
a discrete version of (10) ensuring geometric consistency (here X is the identity on
Γ ). It turns out that the last step yields loss of accuracy on the approximation of
the curvature regardless of polynomial degree, which is inherent to computing two
derivatives numerically—an unstable process.
    To circumvent this issue, A. Bonito, R.H. Nochetto, and S.M. Pauletti [14] pro-
pose a Geometrically Consistent Accuracy Preserving Algorithm (GCAP) which
reverses the above process: X is dissociated from Γ itself in that it is no longer the
identity on Γ . In essence, the GCAP algorithm proceeds as follows: (i) the mesh
modifications are performed on Γ to give the new surface Γ∗ ; (ii) the new approx-
imation H∗ of vector curvature is obtained projecting the existing one H on Γ∗ ;
(iii) the approximation X∗ of the identity vector on Γ∗ is obtained by solving the
Laplace-Beltrami equation (10) discretely with the curvature H∗ given in (ii). We
stress that the concatenation of projection and inversion of (10) is numerically sta-
ble.
    To compare the naive and GCAP algorithms, Fig. 8 depicts the effect of a global
refinement on a square approximation Γ of a circle γ ; here Γ∗ = Γ . We refer to [14]
for similar results for two dimensional surfaces, higher polynomial approximations,
and coarsening as well as mesh smoothing.
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                   267

3 Parametric Surfaces

In this section we discuss both how to represent and interpolate a parametric sur-
face. This is instrumental for the design, analysis, and implementation of AFEM on
parametric surfaces.



3.1 Representation of Parametric Surfaces

We assume that the surface γ is described as the deformation of a d dimensional
polyhedral surface Γ0 by a globally Lipschitz homeomorphism P0 : Γ0 → γ ⊂
Rd+1 . If Γ0 = Ii=1 Γ0i is made up of I (closed) faces Γ0i , i = 1, . . . , I , we denote
by P0i : Γ0i → Rd+1 the restriction of P0 to Γ0i . We refer to Γ0i as a macro-element
which induces the partition {γ i }Ii=1 of γ upon setting
                                                  
                                       γ i := P0i Γ0i .

In order to avoid technicalities, we assume that all the macro-elements are sim-
plices, i.e. there is a (closed) reference simplex Ω ⊂ Rd , from now on called the
parametric domain, and an affine map F0i : Rd → Rd+1 such that Γ0i = F0i (Ω);
Fig. 9 sketches the situation when d = 2. We thus let Xi := P0i ◦ F0i : Ω → γ i be
a local parametrization of γ which is globally bi-Lipschitz, namely there exists a
universal constant L ≥ 1 such that for all 1 ≤ i ≤ I

              L−1 |x̂ − ŷ| ≤ Xi (x̂) − Xi (ŷ) ≤ L|x̂ − ŷ|,       ∀x̂, ŷ ∈ Ω.       (14)

This minimal regularity of γ , to be soon strengthened out locally in each macro-
element, implies the more familiar condition, valid for a.e. x̂ ∈ Ω,

                       L−1 |w| ≤ ∇Xi (x̂)w ≤ L|w|          ∀w ∈ Rd ;                   (15)

hence L ≥ 1 is the Lipschitz constant of Xi and so of γ i . We further assume that
P0 (v) = v for all vertices v of Γ0 , so that F0i is the nodal interpolant of Xi into linear
polynomials.
   The structure of the map P0 depends on the application. For instance, if γ i is
described on Γ0i via the distance function dist(x) to γ , then

                  γi    x̃ = x − dist(x)∇ dist(x) = P0 (x)         ∀x ∈ Γ0i ,

provided dist(x) is sufficiently small so that the distance is uniquely defined. If,
instead, γ i is the zero level set φ(x) = 0 of a function φ, then

                                   ∇φ(x̃)
                Γ0i    x = x̃ +            |x − x̃| = P0−1 (x̃),     ∀x̃ ∈ γ i ,
                                  |∇φ(x̃)|
268                                                                                 A. Bonito et al.




Fig. 9 Representation of each component γ i when d = 2 as a parametrization from a flat triangle
Γ0i ⊂ R3 as well as from the master triangle Ω ⊂ R2 . The map F0i : Ω → Γ0i is affine



is the inverse map of P0 . In both cases, dist and φ must be C 2 for P0 to be C 1 (Γ0i ).
Yet another option is to view γ i as a graph on Γ0i , in which case P0i is a lift in the
normal direction to Γ0i and P0 is C 1 (Γ0i ) if and only if γ i is; we refer to [46]. Notice
that the inverse mapping theorem implies (P0i )−1 ∈ C 1 (γ i ).
    The regularity of γ is expressed in terms of the regularity of the maps Xi . If
s ≥ 0, 2 ≤ p ≤ ∞, we say that γ is piecewise Wps , and write γ ∈ Wps (Γ0 ), whenever
Xi ∈ [Wps (Ω)]d+1 , i = 1, . . . , I . We denote the associated semi-norm by

                                                I                 1/p
                                                        p
                            |γ |Wps (Γ0 ) :=          Xi W s (Ω)          .
                                                           p
                                                i=1

Note that this non-overlapping parametrization allows for piecewise smooth sur-
faces γ with possible kinks matched by the decomposition {γ i }Ii=1 . Similarly, we
say that γ ∈ C 1,α (Γ0 ), 0 ≤ α ≤ 1, whenever Xi ∈ [C 1,α (Ω)]d+1 , i = 1, . . . , I and
define

                            |γ |C 1,α (Γ0 ) := max Xi C 1,α (Ω) .
                                               i=1,...,I

     Finally, we note that a function v : γ i → R defines uniquely two functions
v̂ : Ω → R and v̄ : Γ0i → R via the maps Xi and P0 , namely
                                                                   
          v̂(x̂) := v Xi (x̂)    ∀x̂ ∈ Ω       and v̄(x̄) := v P0 (x̄)        ∀x̄ ∈ Γ0i ;     (16)

we set x̃ = Xi (x̂) for all x̂ ∈ Ω. Conversely, a function v̂ : Ω → R (respectively,
v̄ : Γ0i → R) defines uniquely the two functions v : γ i → R and v̄ : Γ0i → R (re-
spectively, v : γ i → R and v̂ : Ω → R). We will always denote by v the two lifts ṽ
or v̂ of v : γ i → R.
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                    269

3.2 Interpolation of Parametric Surfaces

The initial partition of Γ0 in macro-elements (or faces) induces a conforming trian-
gulation T0 of Γ0 . We only discuss the class of conforming meshes T(T0 ) created
by successive bisections of this initial mesh T0 . However, our results remain valid
for any refinement strategy satisfying Conditions 3, 4 and 6 in [12]. In particular,
successive bisections, quad-refinement and red-refinement all with hanging nodes
are admissible refinement strategies. For more details, we refer to [12, Sect. 6].
   Given T0 , we define a shape regular forest T(T0 ), and for each T ∈ T(T0 ), a
piecewise affine approximation Γ = Γ (T) of γ , and a finite element space V(T) on
Γ as follows. Note first that conforming graded bisections of each macro-element
Γ0i induce a family of shape regular partitions T i (Ω) of the parametric domain
Ω ⊂ Rd . Let V(T i (Ω)) be the finite element space of C 0 piecewise linear polyno-
mials on T i (Ω), and let IT i : C 0 (Ω) → V(T i (Ω)) be the corresponding Lagrange
interpolation operator. Let FT i = IT i Xi be the interpolant of Xi in V(T i (Ω)),
Γ i := FT i (Ω) and
                                                          
                          T i := T = FT i (T ) T ∈ T i (Ω) ;

the set Γ i is a piecewise affine interpolation of γ i . The global mesh T, piecewise
affine surface Γ , and parametrization FT of Γ are given by

                       
                       I                      
                                              I
                T :=         Ti ,      Γ :=         Γ i,           FT := {FT i }Ii=1 .
                       i=1                    i=1

We need a few properties before discussing shape regularity of T(T0 ) = {T}. We
define
             
                                                                  
      V(T) := V ∈ C 0 (Γ ) V |Γ i is the lift of some V ∈ V T i (Ω) via FT i ,
                                                                                 
                                    V = 0 on ∂Γ, or                V = 0 if ∂Γ = ∅ ,
                                                               Γ

and note that V(T) is not a subspace of V(T0 ), which is a lack of consistency we
must account for. Since most properties discussed below are valid independently of
the superscript i, we omit it from now on. Figure 10 depicts one bisection refinement
for d = 2.
   If T ∈ T(Ω) and T = FT (T ) ∈ T, we define the geometric element indicator
                                                  
                           λΓ (T ) := ∇(X − FT )L∞ (T ) ,                      (17)

and the corresponding geometric estimator

                                      λΓ := max λΓ (T ).                                 (18)
                                              T ∈T
270                                                                              A. Bonito et al.




Fig. 10 Effect of one bisection of the macro-element F0 (Ω) when d = 2 (left). The parametric
domain Ω is split into two triangles in R2 via the affine map F0−1 (bottom), whereas γ is inter-
polated by a new piecewise linear surface Γ = F(Ω) (right), with F = IT X the piecewise linear
interpolant of the parametrization X defined in Ω. The superscript i is omitted for simplicity


Note that two different meshes giving rise to the same surface Γ yield the same λΓ ,
which is thus of pure geometric nature; this explains the subscript Γ . Moreover,
λΓ (T ) is evaluated in T , which belongs to the parametric domain Ω instead of the
polyhedral surface Γ . The geometric estimator may not decrease upon each refine-
ment, especially in the pre-asymptotic regime, but the following quasi-monotonicity
property is valid instead: there exists a constant Λ0 ≥ 1, depending on T0 , and di-
mension d, such that
                                        λ Γ∗ ≤ Λ 0 λ Γ                                     (19)
for all conforming refinements T∗ of T [17, Lemma 3.1]. This result is also valid
elementwise.
    We recall that T(T0 ) is the forest of all conforming refinements T of T0 , denoted
T ≥ T0 , obtained by the aforementioned bisection procedure. We say that T(T0 )
is shape regular if there is a constant C0 only depending on T0 , such that for all
T ∈ T(Ω)

              C0−1 |x̂ − ŷ| ≤ FT (x̂) − FT (ŷ) ≤ C0 |x̂ − ŷ|      ∀x̂, ŷ ∈ T .         (20)

Since the forest induced by bisection on the flat parametric domain Ω is shape
regular [11, 49, 53], we observe that (20) states that the deformation of T ∈ T(Ω)
leading to T ∈ T does not degenerate. We also point out that (20) implies the usual
condition on the Jacobian ∇FT , valid for a.e. x̂ ∈ Ω

                      C0−1 |w| ≤ ∇FT (x̂)w ≤ C0 |w| ∀w ∈ Rd ,                              (21)

and that ∇FT happens to be constant on T for an affine map FT [22].
   We stress that a bi-Lipschitz parametrization satisfying (14) does not guarantee
that T(T0 ) is shape regular. This pathological situation is depicted in Fig. 11. This
issue has been tackled by A. Bonito and J. Pasciak [13] assuming that the surface γ
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                         271




Fig. 11 Smooth surface leading to a degenerate triangle. The point P0 (m) is (almost) aligned with
p and q. When the triangle T = pqr ∈ T is split into pqm and rpm, the new elements of T∗
are T1 = pqP0 (m), T2 = rpP0 (m). The triangle T1 is degenerate and λΓ∗ (T1 ) > (2Λ0 L)−1 , thus
violating (22). This forces ADAPT_SURFACE to refine further, which in turn opens up T1 leading
eventually to nondegenerate descendents of T1


is W∞2 and T is sufficiently fine. We now present a similar result, invoking piece-
              0
wise C 1 -regularity of γ , which hinges on (19): the forest T(T0 ) is shape-regular
with C0 = 2L provided
                                                   1
                                        λ Γ0 ≤         ,                                     (22)
                                                 2Λ0 L
where L > 1 is the constant in (14) [17, Lemma 3.2]. Figure 11 illustrates an in-
termediate degenerate situation in which a triangle T ∈ T is split into two triangles
T1 , T2 ∈ T∗ with λΓ∗ (T1 ) > (2Λ0 L)−1 and (22) being violated. This thereby leads
to refinement of T1 , which opens up and gives rise to nondegenerate descendents
eventually satisfying (22).



4 The Laplace-Beltrami Operator
4.1 Basic Differential Geometry

In this subsection we give a matrix formulation of some basic differential geometry
facts. We assume γ to be piecewise C 1 , namely γ i ∈ C 1 (Γ0i ) for all 1 ≤ i ≤ I , and
Γ to be piecewise affine.
   Our first task is to relate the gradient ∇ in the parametric domain Ω with the
tangential gradient ∇γ on γ . To this end, let T ∈ R(d+1)×d be the matrix

                                T := Tγ := [∂1 X, . . . , ∂d X],

whose ith column ∂i X ∈ Rd+1 is the vector of partial derivatives of X with respect
to the ith coordinate of Ω. Since X is a diffeomorphism, the set {∂i X}di=1 of tangent
vectors to γ is well defined, linearly independent, and expands the tangent hyper-
plane to each γ j at interior points for all 1 ≤ j ≤ I . The first fundamental form of
γ is the symmetric and positive definite matrix g ∈ Rd×d defined by
                                                    
                  g = (gγ ,ij )1≤i,j ≤d := ∂i XT ∂j X 1≤i,j ≤d = TT T.            (23)
272                                                                          A. Bonito et al.
                                                          d
Given v̂(x̂) = v(x̃), the tangent gradient ∇γ v(x̃) =       i=1 αi (x̂)∂i X(x̂) satisfies the
relation
                      ∂i v̂(x̂) = ∇γ v(x̃) ∂i X(x̂)    for 1 ≤ i ≤ d,
whence
                                       ∇ v̂ = ∇γ vT                                     (24)
and (αi )di=1 = g−1 (∂i v̂)di=1 . To get the reverse relation, we augment T to the matrix

T ∈ R(d+1)×(d+1) by adding the (outer) unit normal ν = (ν1 , . . . , νd+1 ) ∈ R(d+1) to
the tangent hyperplane span{∂Xi }di=1 to γ as the last column, namely
                                                              
                           
                           T := T, ν T = ∂1 X, . . . , ∂d X, ν T .

Since 
      T is invertible, we let 
                              D=
                                T−1 . We thus realize that

                         ∇γ v = ∇γ v
                                    T
                                     D = [∇ v̂, 0]
                                                  D = ∇ v̂D,                            (25)

where D ∈ Rd×(d+1) results from 
                                D by cutting off its last row. Moreover, writing
                                                                
                            −1     D                  DT Dν T
           I(d+1)×(d+1) = T T =           T ν = T
                                     v                    vT vν T

with v ∈ Rd+1 , we deduce DT = Id×d and vT = 0 whence v is parallel to ν and
v = ν because vν T = 1. Reverting the order of multiplication, we also infer that
                                                 
                                               D
                               −1
              I(d+1)×(d+1) = TT = T ν        T         = TD + ν T ν,
                                                  ν

and TD = I(d+1)×(d+1) − ν T ν. This shows that TD is symmetric and

                 TDDT TT = TDTD = TD = I(d+1)×(d+1) − ν T ν,                            (26)

as well as
                             DDT TT T = DTDT = Id×d .
Therefore, the first fundamental form g has inverse g−1 = DDT . We let
                                         
                                    q := det g                                          (27)

be the elementary area of γ and point out the change of variables formula for ω ⊂ Ω
                                          
                                    v̂q =        v.                             (28)
                                      ω         X(ω)

   The discussion above applies as well to the piecewise affine surface Γ . We denote
the corresponding matrices TΓ = ∇FT and DΓ associated with FT : Ω → Γ , and
get
                                     ∇Γ v = ∇ v̂DΓ .                                    (29)
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                  273

The first fundamental form GΓ of Γ and its elementary area QΓ are defined by
                                                
                       GΓ := TTΓ TΓ ,    QΓ := det GΓ .                    (30)

It is worth noticing that, since FT is affine, GΓ and QΓ are constant on each
T ∈ T(Ω) (T ∈ T).



4.2 Variational Formulation and Galerkin Method

We now introduce basic Lebesgue and Sobolev spaces on the surface γ . Let
                                                         
                 L# (γ ) := v ∈ L (γ )
                  2              2
                                         v = 0 if ∂γ = ∅
                                               γ

be the space of L2 functions, with vanishing meanvalue whenever the surface γ is
closed, and
                                         d+1
    H#1 (γ ) := v ∈ L2# (γ ) ∇γ v|γ i ∈ L2 γ i         ,
                                                                                 
                             v|γ i = v|γ j on γ i ∩ γ j 1 ≤ i, j ≤ I, v = 0 on ∂γ ,

where ∇γ and traces are well defined in each component γ i due to (25). We define
the weak form of the Laplace-Beltrami operator Δγ v for any function v ∈ H#1 (γ )
to be
                                I 
                −Δγ v, ϕ :=          ∇γ v∇γT ϕ ∀ϕ ∈ H#1 (γ ),              (31)
                                         i
                                   i=1 γ

where ·,· denotes the (H#1 (γ ))∗ –H#1 (γ ) duality product. In order to derive a strong
form of Δγ , we now assume that Xi is C 2 and v ∈ H 2 (γ i ) for each 1 ≤ i ≤ d. In
view of (25), integrating by parts in Ω we obtain
                                                                   
                                                1            
      ∇γ v∇γT ϕ =    ∇ v̂DDT ∇ ϕ̂ T q =      − div    q ∇ v̂g−1 ϕ̂q +      q ∇ v̂g−1 nT ϕ̂,
  γ i              Ω                      Ω     q                       ∂Ω

where n is the unit outer normal to Ω. We thus discover that inside γ i the following
expression for the Laplace-Beltrami operator holds
                                         1            
                                Δγ v =     div q ∇ v̂g−1 .                            (32)
                                         q

The boundary term instead leads to jumps across the boundary ∂γ i with other pieces
γ j of γ and can be equivalently written as
                                             
                            q ∇ v̂g−1 nT ϕ̂ =    ∇γ vnT ϕ,                     (33)
                           ∂Ω                      ∂γ i
274                                                                        A. Bonito et al.

where n in the unit outer normal to γ i in the tangent plane to γ i . Combining (32)
with (33) yields
                                                
                      ∇γ v∇γT ϕ =      −Δγ vϕ +        ∇γ vnT ϕ,                (34)
                     γi               γi              ∂γ i

which is the Gauss-Green formula for C 2 surfaces.
   Expression (33) is not obvious and, since it is quite important for the subsequent
discussion, we prove it now. Recall that Ω ⊂ Rd is the canonical unit simplex and
notice that a change of variables in Ω dictated by a rotation leaves the left-hand
side of (33) unchanged. We exploit this property to assume, for convenience, that an
arbitrary x̂ ∈ ∂Ω belongs to the (d − 1)-subsimplex S with outer normal given by
n = [−1, 0, . . . , 0]. We observe that the affine function φ(x̂) = x̂ nT vanishes on S
and ∇ φ = n = ∇γ φT, according to (24), whence

                   ∇γ φ ∂1 X = −1,         ∇γ φ ∂i X = 0 2 ≤ i ≤ d;

moreover, ∇γ φ = |∇γ φ|n. We now introduce the matrix S ∈ R(d+1)×(d−1)
                                                        
                   S = [∂2 X, . . . , ∂d X], r = det ST S ,

and point out that the quantity r is the elementary area associated with the subsim-
plex S at x̂. Since the (d − 1)-dimensional space span{∂i X}di=2 is tangent to the
curvilinear simplex S = X(S), we can decompose ∂1 X orthogonally as follows

                          ∂1 X = αn + Sb,    α ∈ R, b ∈ Rd−2 ,

where b is the least squares solution b = (ST S)−1 ST ∂1 XT and |∂1 X|2 = α 2 + |Sb|2 .
Hence,
                 −1 = ∇γ φ ∂1 X = α|∇γ φ|        ⇒   α = −|∇γ φ|−1 .
We compute q 2 = det g using the expression for block matrices
                                                  
                                   |∂ X|2 ∂1 XS
                            g = T1 T                 ,
                                  S ∂1 X      ST S

namely
                                                 −1      
                det g = det ST S |∂1 X|2 − ∂1 XS ST S ST ∂1 XT ,
to infer that
                                                 r                 r
                q 2 = r 2α2    =⇒     |∇γ φ| =       =⇒      n = nT .
                                                 q                 q

To finally derive (33), we recall that TD = I(d+1)×(d+1) − ν T ν and observe that
                                                                
               −1 T
        q ∇ v̂g n ϕ̂ = q ∇ v̂DD n ϕ̂ = r∇γ vD T n ϕ = ∇γ vnT ϕ.
                                     T T              T T T
      S                    S                     S                     
                                                                       S
AFEM for Geometric PDE: The Laplace-Beltrami Operator                             275

   We now build on (31) and write the weak formulation of −Δγ u = f as follows:
given f ∈ L2# (γ ), we seek u ∈ H#1 (γ ) satisfying

                    I 
                                              
                                ∇γ u∇γT ϕ =          f ϕ,        ∀ϕ ∈ H#1 (γ ).   (35)
                     i=1   γi                   γ


Existence and uniqueness of a solution u ∈ H#1 (γ ) is a consequence of the Lax-
Milgram theorem provided γ is Lipschitz. Combining (35) with (34) and (33) yields
for each component γ i ,
                                 −Δγ i u = f            1 ≤ i ≤ I,                (36)

together with vanishing jump conditions at the interfaces γ i ∩ γ j

                J(u)|γ i ∩γ j = ∇γ i uni + ∇γ j unj = 0 ∀1 ≤ i, j ≤ I,            (37)

because f ∈ L2# (γ ) cannot balance this singular term otherwise.
    We next formulate an approximation to the Laplace-Beltrami operator on a piece-
wise affine approximation Γ of γ supported by a mesh T ∈ T(T0 ). If FΓ ∈ L2# (Γ )
is a suitable approximation of f , then the finite element solution U : Γ → R solves
                                                
                U ∈ V(T) :       ∇Γ U ∇ΓT V =        FΓ V ∀V ∈ V(T).            (38)
                                  Γ                          Γ

To this end we choose FΓ to be
                                                      q
                                           FΓ := f      ,                         (39)
                                                     QΓ

because this specific choice of FΓ satisfies the compatibility property
                                          
                                   FΓ = f = 0,                                    (40)
                                       Γ            γ

whenever γ is closed, and allows us to handle separately the approximation of sur-
face γ and forcing f . In particular, (38) admits a unique solution U as a conse-
quence of the Lax-Milgram theorem. Since Γ is piecewise affine, the quantities
∇ U , GΓ , QΓ are piecewise constant, whence

                                     ΔΓ U |T = 0 ∀T ∈ T.                          (41)

We refer to [17] where we account for piecewise polynomial Γ and the fact that
ΔΓ U |T = 0. The formula (34) extends to every element T ∈ T:
                                         
              ∇Γ U ∇Γ V = −ΔΓ U V +
                     T
                                               ∇Γ U nTT V ∀V ∈ V(T).      (42)
            T                    T                      ∂T
276                                                                    A. Bonito et al.

5 A Posteriori Error Analysis

In order to study the discrepancy between u and U we need to agree on comparing
them in a common domain, say γ . Our goal is thus to obtain a posteriori error
estimates for the energy error ∇γ (u − U )L2 (γ ) . This requires developing an a
priori error analysis for the interpolation error committed in replacing γ by Γ in
(38), which is a sort of consistency error, and its impact on the PDE error. We are
concerned with these issues in this section and refer to [28, 29, 46].



5.1 Geometric Error and Estimator

We now quantify the error arising from approximating γ , the so-called geometric
error. To this end we resort to the matrix formulation of Sect. 4.1 to relate the
geometric error with the geometric estimator λΓ of (17).
   Given T ∈ T, we will deal with the regions T ∈ T(Ω) and T ∈ T(γ ) given by
                       −1                                   
                T := FT    (x)|x ∈ T    and T := X(x̂)|x̂ ∈ T .             (43)

On mapping back and forth to T , and using (28), we easily see that
                                      
                                            QΓ
                                    v= v         .                               (44)
                                  T      T  q

We are now able to quantify the consistency error alluded to at the beginning of this
section.

Lemma 5.1 (Consistency error) For all v, w ∈ H 1 (γ ) there holds
                                            
                 ∇Γ v∇Γ w − ∇γ v∇γ w = ∇γ vEΓ ∇γT w,
                        T               T
                  Γ                γ               γ

where EΓ ∈ R(d+1)×(d+1) stands for the following error matrix

                                 1               
                         EΓ :=     T QΓ G−1
                                         Γ − qg
                                                −1 T
                                                   T .                           (45)
                                 q

Proof We first note that combining (24) with (25), we get

                   ∇γ v = ∇Γ vTΓ D      and    ∇Γ v = ∇γ vTDΓ ,                  (46)

which together with (44) gives
                         
                                             QΓ
            ∇Γ v∇ΓT w = ∇γ vTDΓ DTΓ TT ∇γT w              ∀v, w ∈ H 1 (γ ).      (47)
          Γ                 γ                 q
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                  277

Since (26) allows us to write
                             
                ∇γ v∇γ w = ∇γ vTDDT TT ∇γT w
                       T
                                                            ∀v, w ∈ H 1 (γ ),         (48)
               γ                γ

which is a counterpart of (47), the assertion follows immediately from (23) and
(30).                                                                        

   Our next task is to estimate EΓ in (45), which entails dealing with g, GΓ and
q, QΓ .

Lemma 5.2 (Properties of GΓ and QΓ ) The matrices g and GΓ have eigenvalues
in the interval [L−2 , L2 ] and [ 12 L−2 , 32 L2 ], respectively, provided the initial mesh
T0 satisfies
                                                1
                                     λ Γ0 ≤          .                                (49)
                                              6Λ0 L3
Moreover, the forest T(T0 ) is shape regular, L−d  q, QΓ  Ld , and for all T ∈
T(T0 )
                      q − QΓ L∞ (γ ) + g − GΓ L∞ (γ )  λΓ .                      (50)

Proof Since L ≥ 1, (49) yields (22), which in turn gives shape regularity of the
forest T(T0 ) and (21) with constant C0 = 2L. Hence, using the definitions of g and
GΓ , we deduce g − GΓ L∞ (γ ) ≤ 3LλΓ . On the other hand, invoking (15) we see
that ξ T gξ = |∇Xξ |2 for all ξ ∈ Rd , whence

                              L−2 |ξ |2 ≤ ξ T gξ ≤ L2 |ξ |2 .

Since λΓ ≤ 6L1 3 , due to (49) and (19), then the previous estimates readily imply

    1 −2 2  −2                                          3
      L |ξ | ≤ L − 3LλΓ |ξ |2 ≤ ξ T GΓ ξ ≤ L2 + 3LλΓ |ξ |2 ≤ L2 |ξ |2 ,
    2                                                       2
as well as L−d  q, QΓ  Ld because q 2 = det g, Q2Γ = det GΓ are products of the
d eigenvalues of g, GΓ . Moreover, since

                                           det g − det GΓ
                              q − QΓ =                    ,
                                              q + QΓ
it only remains to obtain an estimate for the numerator. The definition of determinant
readily yields | det g − det G|  L2d−1 λΓ , and completes the proof.               

    We stress that if T0 does not satisfy (49) but ε0 ≤ (6Λ0 L3 ω)−1 , then the algo-
rithm AFEM of Sect. 1 will first refine T0 to make it comply with (49) without ever
solving the PDE. In this sense, (49) is not a serious restriction for AFEM, although
necessary for the subsequent theory.
278                                                                                     A. Bonito et al.

Corollary 5.1 (Estimate of EΓ ) If λΓ0 satisfies (49), then we have for all T ∈ T(T0 )
and corresponding Γ

                                 EΓ L∞ (T )  λΓ (T ) ∀T ∈ T,

where the hidden constant depends on T0 and the Lipschitz constant L of γ .

Proof According to (45), and TL∞ (γ ) = TT L∞ (γ ) ≤ L, we infer that
                                                      
                         EΓ L∞ (T )  QΓ G−1
                                             Γ − qg
                                                    −1 
                                                        L∞ (T )
                                                                .

The lower bounds on the eigenvalues of g and GΓ imply g−1 L∞ (T ) , G−1
                                                                        Γ L∞ (T )
 L , which together with the expression
    2


               QΓ G−1
                   Γ − qg
                          −1
                             = (QΓ − q)G−1    −1
                                        Γ + qGΓ (g − GΓ )g
                                                           −1


and (50) gives the asserted estimate.                                                                

   We now give a constructive expression for unit normals in Rd+1 , thereby gen-
eralizing the usual vector product in R3 , and next use it to derive an error estimate
for DΓ .

Lemma 5.3 (Unit normal) Let {ej }d+1j =1 be the canonical unit vectors of R
                                                                            d+1 . For
                                            d+1
each x ∈ Ω, and x = X(x) ∈ γ , let N(x) = j =1 Aj (x)ej , where Aj stands for the
determinant
                                                              
                    Aj (x) := det ej , ∂1 X(x), . . . , ∂d X(x) .
We then have |N(x)| = q(x) and the unit normal vector ν(x) to γ at x is given
by ν(x) = N(x)/|N(x)|. Moreover, a similar result holds true also for Γ , upon re-
placing X by FT , provided λΓ0 satisfies (49), i.e., |NΓ (x)| = QΓ (x) and ν Γ (x) =
NΓ (x)/|NΓ (x)|.

Proof We fix x ∈ Ω and drop it from the notation. Since T is full rank, some Aj
must be non-zero whence N = 0. Moreover, the vector N is orthogonal to the tangent
hyperplane to γ at x because

                       
                       d+1
         N · ∂i X =           Aj ej · ∂i X = det(∂i X, ∂1 X, . . . , ∂i X, . . . , ∂d X) = 0.
                       j =1

Hence, ν = N/|N| is well defined. To prove that |N| = q recall that T =
[∂1 X, . . . , ∂d X] to write

               
               d+1            
                              d+1
      |N|2 =          A2j =          Aj det(ej , ∂1 X, . . . , ∂d X) = det(N, ∂1 X, . . . , ∂d X)
               j =1           j =1
AFEM for Geometric PDE: The Laplace-Beltrami Operator                              279

                                       T        1/2
                            1/2       N N  0
           = det [N, T] [N, T]
                       T
                                    = det               = |N|q.
                                           0  TT T

This implies |N| = q because |N| = 0. The same argument applies to Γ .              

Lemma 5.4 (Error of ν and D) If (49) holds for the initial mesh T0 , then for all
T ∈ T(T0 )
                      ν − ν Γ L∞ (γ ) + D − DΓ L∞ (γ )  λΓ .                  (51)

Proof Lemmas 5.2 and 5.3 imply L−d  |N(x)|, |NΓ (x)|  Ld for all x ∈ Ω,
whence
                                              
                   N    NΓ      1                1      1
         ν − νΓ =    −      =     (N − NΓ ) +      −        NΓ
                  |N| |NΓ | |N|                 |N| |NΓ |
              ⇒     |ν − ν Γ |  Ld |N − NΓ |.
                         
To estimate N − NΓ = d+1    j =1 (Aj − AΓ,j )ej , we observe that each Aj (resp. AΓ,j )
is a sum of factors of the form ∂i X · em (resp. ∂i FT · em ), whence

               |Aj − AΓ,j |  Ld−1 λΓ      ⇒     |ν − ν Γ |  L2d−1 λΓ .

   For the remaining estimate for D − DΓ we recall the definition 
                                                                  T = [T, ν T ] to
infer that

           
            T−
              TΓ L∞ (γ ) ≤ T − TΓ L∞ (γ ) + ν − ν Γ L∞ (γ )  λΓ .

We now show that D=  T−1 is uniformly bounded. To see this, we write 
                                                                       Tw̃ =
Tw + wd+1 ν for w̃ = (w, wd+1 ) ∈ Rd+1 and recall (15) to get
           T


      L−2 |w̃|2 ≤ L−2 |w|2 + |wd+1 |2 ≤ |
                                         Tw̃|2 ≤ L2 |w|2 + |wd+1 |2 ≤ L2 |w̃|2 ,

as well as 
            T−1 L∞ (Ω) , 
                           T−1                            −1       −1
                            Γ L (Ω)  L . Since D − DΓ = T (TΓ − T)TΓ , the
                                ∞       2
                                                                  
desired estimate follows immediately from the previous one for T − TΓ .     

   We finally point out the equivalence of norms on γ and Γ provided (49) is valid
[17, Lemma 5.6]

              vL2 (T) ≈ vL2 (T ) ,   |v|L2 (T) ≈ |v|L2 (T )   ∀T ∈ T.        (52)



5.2 Upper and Lower Bounds for the Energy Error

We now derive an error representation formula leading to lower and upper bounds
for the energy error. Given T ∈ T(T0 ), we let the usual interior and jump residual
280                                                                                      A. Bonito et al.

for V ∈ V(T) be

                  RT (V ) := FΓ |T + ΔΓ V |T = FΓ |T                    ∀T ∈ T,
                  JS (V ) := ∇Γ V + |S · n+        −       −
                                          S + ∇ Γ V |S · n S                  ∀S ∈ S,

where n+         −
         S and nS are outward unit normals to S with respect to T
                                                                      + and T − , on

the supporting planes containing T + and T − respectively; T + and T − are elements
in T that share the side S ∈ S where S denotes the set of interior faces of T ∈ T.
We stress that, in contrast to flat domains, n+      −
                                              S = nS because the vector may have
different supporting hyperplanes. Similarly, ∇Γ V + |S = ∇V + DΓ |S and ∇Γ V − |S =
∇V − DΓ |S are tangential gradients of V on T + and T − restricted to S, respectively.
Note that, according to (36),
                                              −1 
                 ΔΓ V |T = Q−1    
                               Γ div QΓ ∇ V GΓ |T = 0 ∀T ∈ T,

provided V and Γ are piecewise linear. We refer to [17, 29] for the case ΔΓ V |T = 0.
   Subtracting the weak formulations (35) and (38), and employing (34) to integrate
by parts elementwise, we obtain for all v ∈ H 1 (γ ):
                       
                          ∇γ (u − U ) · ∇γ v = I1 + I2 + I3 ,                     (53)
                              γ

with
                                                     
            I1 :=                 FΓ (v − V ) −                 JS (U )(v − V ),
                    T ∈T T                             S∈S S
                                                                     
            I2 :=           ∇Γ U · ∇Γ v −              ∇γ U · ∇γ v =        ∇γ U EΓ ∇γT v,
                        Γ                          γ                    γ
                                  
            I3 :=           fv −           FΓ v.
                        γ              Γ

The choice FΓ = QqΓ f of (39) implies I3 = 0 so that only I1 and I2 need to be
estimated. Observe that I1 is the usual residual term, whereas I2 is the geometry
consistency term studied in Sect. 5.1 which accounts for the discrepancy between γ
and Γ .
   We focus now on I1 . The PDE error indicator is defined as follows for any
V ∈ V(T)
                                                       1            2
        ηT (V , T )2 := h2T FΓ 2L2 (T ) +                hT JS (V )L2 (S)        ∀T ∈ T,
                                                       2
                                                         S⊂∂T

                    1
where hT := |T0 | d and T0 is the preimage of T in the initial triangulation T0 , i.e.
           −1
T0 = F0 ◦ FT  (T ). This definition of hT guarantees the strict reduction property

                                              hT  ≤ 2−b/d hT                                      (54)
AFEM for Geometric PDE: The Laplace-Beltrami Operator                              281

for all T  obtained from T after b bisections. We also introduce the data oscillation

                   oscT (f, T ) := hT FΓ − F Γ L2 (T )       ∀T ∈ T,            (55)

where F Γ stands for the meanvalue of FΓ on T ∈ T. Finally, for any subset τ ⊂ T
we set
                                                           
      ηT (V , τ )2 :=   ηT (V , T )2 , and oscT (f, τ )2 :=   oscT (f, T )2 ,
                     T ∈τ                                         T ∈τ

and simply write ηT (V ) and oscT (f ) whenever τ = T.
   Standard arguments [1, 55] to derive upper and lower bounds for the energy error
on flat domains can be extended to this case; see [17, 29, 46]. We thus sketch the
proof.

Lemma 5.5 (A posteriori upper and lower bounds) Assume that λΓ0 satisfies (49).
Let u ∈ H 1 (γ ) be the solution of (35), (Γ, T) an approximating surface-mesh pair,
and U ∈ V(T) be the Galerkin solution of (38). Then there exist constants C1 , C2
and Λ1 depending only on T0 , the Lipschitz constant of γ , and f L2 (γ ) , such that
                           
               ∇γ (u − U )2 2 ≤ C1 ηT (U )2 + Λ1 λ2 ,                           (56)
                              L (γ )                    Γ
                                        
               C2 ηT (U )2 ≤ ∇γ (u − U )L2 (γ ) + oscT (f )2 + Λ1 λ2Γ .
                                           2
                                                                                  (57)

Proof Our departing point is (53) with v ∈ H#1 (γ ) arbitrary and V ∈ V(T) its Scott-
Zhang interpolant, built over the parametric domain Ω [19]. Using interpolation
estimates and (52) yields

                              |I1 |  ηT (U )∇γ vL2 (γ ) .

Since ∇Γ U L2 (γ )  f L2 (γ ) , invoking Corollary 5.1 gives

                                |I2 |  λΓ ∇γ vL2 (γ ) .

Since I3 = 0 we obtain the upper bound (56). To prove (57) we resort to a local
argument due to R. Verfürth [55]. Let T ∈ T and bT be corresponding cubic bubble.
If v = F Γ bT ∈ H01 (T ), then

                            ∇γ vL2 (T )  h−1
                                             T F Γ L2 (T ) .

Therefore, inserting v into (53) and taking V = 0 leads to
                     
                                                           
     F Γ 2L2 (T )  F Γ v  h−1    ∇γ (u − U ) 2 + λΓ (T ) F Γ  2 .
                                 T                 L (T )            L (T )
                      T

This combined with the triangle inequality gives part of (57). It remains to deal with
the jump, for which we select an arbitrary side S ∈ S with adjacent elements T ± . Let
282                                                                            A. Bonito et al.

bS be a piecewise quadratic bubble with value 1 at the midpoint of S and 0 at any
other quadratic node. Let v = JS (U )bS ∈ H01 (ωS ) where ωS = T + ∪ T − . Replacing
v into (53) and taking V = 0 yields
                   
        
 JS (U )2 2  JS (U )v
           L (S)
                   S
                                                                      
                ≤ ∇γ (u − U ) 2 L (ωS )
                                            + hS FΓ L2 (ωS ) + λΓ (ωS ) ∇γ vL2 (ωS ) .

                                                                        −1/2
To conclude the proof we invoke the property ∇γ vL2 (ωS )  hS               JS (U )L2 (S)
along with the previous estimate for hS FΓ L2 (ωS ) .                                     

   To prove optimality of AFEM we need a localized upper bound for the dis-
tance between two discrete solutions. This bound measures ∇γ (U∗ − U )L2 (γ )
in terms of the PDE estimator restricted to the refined set and geometric estimator
[17, Lemma 4.13].

Lemma 5.6 (Localized upper bound) Assume that λΓ0 satisfies (49). For (T, Γ ),
(T∗ , Γ∗ ) pairs of mesh-surface approximations with T ≤ T∗ , let R := RT→T ∗ ⊂ T
be the set of elements refined in T to obtain T ∗ . Let U ∈ V(T) and U ∈ V(T∗ ) be
the corresponding discrete solutions of (38) on Γ and Γ∗ , respectively. Then the
following localized upper bound is valid
                            
                ∇γ (U∗ − U )2 2        ≤ C1 ηT (U, R)2 + Λ1 λΓ (R)2 ,                  (58)
                                L (γ )

with constants C1 , Λ1 as in Lemma 5.5.

Proof We start from the error representation formula (53) by replacing γ by Γ∗ and
taking as a test function v = E∗ := U − U∗ ∈ H#1 (γ )
                                 
                       
         ∇γ (U∗ − U )2 2 ≃         ∇Γ∗ (U∗ − U ) · ∇Γ∗ E∗ = I1 + I2 + I3 .
                          L (γ )
                                    Γ∗

To estimate I1 , we proceed as in the flat case [21, 49, 52]. We first construct an
approximation V ∈ V(T) of E∗ ∈ V(T∗ ). Let ω be the union of elements of T which
are refined in T∗ , and denote by ωi one of the connected components of its interior.
Let Ti be the subset of T contained in ωi and let V(Ti ) be the restriction of V(T)
to ωi . We now can construct the Scott-Zhang operator on the corresponding flat
                   −1
domains ωi = FT       (ω) and then lift them to Γ via FT . We denote these lifts by
Pi : H (ωi ) → V(Ti ). Let V ∈ V(T) be the following approximation of the error
        1

E∗ ∈ V(T∗ ):
                  V := Pi E∗    in ωi ,        V := E∗     elsewhere.
By construction, V has conforming boundary values on ∂ωi , is continuous in Γ ,
i.e. V ∈ V(T) and is an H 1 -stable approximation to E∗ . Since V = E∗ in Γ \ω we
AFEM for Geometric PDE: The Laplace-Beltrami Operator                               283

obtain by standard argument

                          |I1 | ≤ C1 ηT (U, R)∇Γ E∗ L2 (Γ ) .

To estimate I2 , we first note that I2 |Γ \ω = 0 because Γ and Γ∗ coincide in the un-
                                                                                −1
refined region Γ \ω. Adding and subtracting       ω ∇γ U ∇γ E∗ , with 
                                                                       ω = X ◦ FT  (ω),
we obtain
                                                
                   I2 = ∇γ U EΓ ∇γT E∗ − ∇γ U EΓ∗ ∇γT E∗ .
                          
                          ω                      
                                                 ω
Combining Corollary 5.1 with (52) and (19), in its elementwise form, we obtain
                                                       
       |I2 |  λΓ (R) + λΓ ∗ (R) ∇Γ E∗ L2 (γ )  1 + Λ20 f L2 (γ ) λΓ (R).

We note that the choice (39) of discrete forcing terms FΓ∗ and FΓ implies I3 = 0.
Finally, collecting the estimates above we conclude (58).                      



5.3 Properties of the PDE Estimator and Data Oscillation

As indicated in (56)–(57), we have access to the energy error ∇γ (u − U )L2 (γ )
only through the PDE estimator ηT (U ), the geometric estimator λΓ , and data oscil-
lation oscT (f ). As is customary for flat domains, (55) guarantees that oscT (f ) is
dominated by ηT (U ) locally:

                         oscT (f, T ) ≤ ηT (U, T )    ∀T ∈ T.                      (59)

The main novelty in (56)–(58) with respect to flat domains, which is also the chief
challenge of the present analysis, is the presence of λΓ . In this respect, we show
now the equivalence of ηT (U ) and the total error
                                          2                   1
                  ET (U, f ) := ∇γ (u − U )L2 (γ ) + oscT (f )2 2                (60)

provided λΓ is small relative to ηT (U ). We refer to [21] for a similar result for flat
domains.

Lemma 5.7 (Equivalence of estimator and total error) Let C1 , C2 , Λ1 be given in
Lemma 5.5. If
                                          C2
                                 λ2Γ ≤       ηT (U )2 ,                            (61)
                                         2Λ1
then there exist explicit constants C3 ≥ C4 > 0, depending on C1 , C2 , such that

                         C4 ηT (U ) ≤ ET (U, f ) ≤ C3 ηT (U ).                     (62)
284                                                                         A. Bonito et al.

Proof Combining (56) with (61), we infer that
                                        
                             
                 ∇γ (u − U )2 2 ≤ C1 + C2 ηT (U )2 .                                (63)
                                L (γ )        2

This, together with (59), gives the upper bound in (62). We next resort to (57) and
(61) to obtain
                                     2                      C2
            C2 ηT (U )2 ≤ ∇γ (u − U )L2 (γ ) + oscT (f )2 +    ηT (U )2 ,
                                                              2
which implies the lower bound in (62) and concludes the proof.                           

    It turns out that the usual reduction property of ηT (U ) [21, Corollary 3.4], which
is instrumental to prove a contraction property of AFEM, is also polluted by the
presence of λΓ as stated below. The following result is proved in [46, Lemma 4.2]
for any polynomial degree.

Lemma 5.8 (Reduction of residual error estimator) Let λΓ0 satisfy (49). Given a
mesh-surface pair (T, Γ ), let M ⊂ T be a subset of elements bisected at least b ≥ 1
times in refining T to obtain T∗ ≥ T. If ξ := 1 − 2− d , then there exist constants Λ2
                                                     b


and Λ3 , solely depending on the shape regularity of T0 , the Lipschitz constant L of
γ , and f L2 (γ ) , such that for any δ > 0
                                                        
            ηT∗ (U∗ )2 ≤ (1 + δ) ηT (U )2 − ξ ηT (U, M)2
                                                   2                   
                          + 1 + δ −1 Λ3 ∇γ (U∗ − U ) 2   L (γ )
                                                                    + Λ2 λ2Γ .        (64)

Proof Let S ∈ S∗ be an interior side and T + , T − ∈ T ∗ be two elements sharing S.
The component of ∇Γ∗ U∗ tangential to S does not jump, because U∗ is continuous
across S, whence
                           JS (U∗ ) = ∇Γ∗ U∗+ − ∇Γ∗ U∗− ,
where U∗± = U∗ |T ± . Therefore
                                                         
         JS (U∗ ) − JS (U ) ≤ ∇Γ∗ U∗+ − U + + ∇Γ∗ U∗− − U −
                               + ∇Γ∗ U + − ∇Γ U + + ∇Γ∗ U − − ∇Γ U − .

Employing an inverse estimate together with (52), the first two terms can be bounded
as follows:
                2                       2                        2
hS ∇Γ∗ U∗± − U ± L2 (S)  ∇Γ∗ U∗± − U ± L2 (T ± ) ≈ ∇γ U∗± − U ± L2 (T± ) .

For the next two terms we use (29), in conjunction with (51) and (19), to write
                                                        
         hS ∇Γ∗ U ± − ∇Γ U ± L2 (S)  ∇ U ± (DΓ∗ − DΓ )L2 (T ± )  λΓ ,
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                    285

where the hidden constant depends on f L2 (γ ) .
   We now turn our attention to the interior residual. Let T∗ ∈ T∗ and T = FT ◦
 −1                −1
FT ∗
     (T∗ ), T = FT  ∗
                       (T∗ ) be the corresponding sets in Γ and Ω. Since FΓ = QqΓ f
we infer that
                                       
                                                |QΓ − QΓ∗ |
                 |FΓ∗ | − |FΓ | = |qf |2
                       2            2
                                                              λΓ f 2L2 (T) ,
              T∗             T            T        QΓ QΓ∗

because of (50) and the lower bounds for QΓ and QΓ∗ , as well as (19).
   Collecting the estimates above, we realize that we have derived the bound
                                                          2               
  ηT∗ (U∗ )2 ≤ (1 + δ)ηT (U, T∗ )2 + 1 + δ −1 Λ3 ∇γ (U∗ − U )L2 (γ ) + Λ2 λ2Γ .

It remains to deal with the set M, namely to prove

                         ηT (U, T∗ )2 ≤ ηT (U )2 − ξ ηT (U, M)2 .

This is exactly the same argument as for flat domains because of the definition of
meshsize hT and (54) [21, Corollary 3.4]. This concludes the proof.             

   Another difference with the theory of adaptivity for flat domains is the behavior
of data oscillation under refinement. The usual situation is that oscT (f ) does not
increase upon refinement from T to T∗ [47]. This is no longer true because oscT (f )
and oscT∗ (f ) are defined on different domains Γ and Γ∗ . Instead, we have the
following substitute.

Lemma 5.9 (Quasi-monotonicity of data oscillation) Let λΓ0 satisfy (49). Let
(T, Γ ), (T∗ , Γ∗ ) be mesh-surface pairs with T ≤ T∗ and discrete forcing functions
defined according to (39). Then, there exists a constant C5 ≥ 1, depending only on
T0 and the Lipschitz constant L of γ , such that

                                   oscT∗ (f ) ≤ C5 oscT (f ).                            (65)

Proof Let T∗ ∈ T∗ and so in Γ∗ , and let T = FΓ ◦ FΓ−1∗
                                                        (T∗ ) be the corresponding set
in Γ , but perhaps not in T. Using (39) and the fact that QΓ is piecewise constant,
we realize that
                                                              
                                        q        QΓ 2 QΓ∗                          QΓ
            |FΓ∗ − F Γ∗ |2 ≤       f        − FΓ          =         |FΓ − F Γ |2
       T∗                      T       Q Γ∗      QΓ∗ QΓ         T                  QΓ∗
                                   
                          ≤ C52        |FΓ − F Γ |2 ,
                                   T

where C52 is the maximum of the ratios QΓ /QΓ∗ |T∗ for all T∗ ∈ T∗ and is bounded
by L2d .                                                                       
286                                                                        A. Bonito et al.

6 AFEM: Design and Properties

Since λΓ and ηT (U ) account for quite different effects, the algorithm AFEM
is designed to handle them separately via the modules ADAPT_SURFACE and
ADAPT_PDE:

AFEM: Given Γ0 , T0 , and parameters ε0 > 0, 0 < ρ < 1, and ω > 0, set k = 0.
         1. [Tk+ , Γk+ ] = ADAPT_SURFACE(Tk , ωεk )
         2. [Tk+1 , Γk+1 ] = ADAPT_PDE(Tk+ , εk )
         3. εk+1 = ρεk ; k = k + 1
         4. Goto 1.
   We notice the presence of the factor ω, which is employed to make the geometric
error small relative to the current tolerance εk . This turns out to be essential for both
contraction and optimality of AFEM, and is further discussed in Sects. 7–9.



6.1 Module ADAPT_SURFACE

Given a tolerance τ > 0 and admissible subdivision T, the call [T + , Γ + ] =
ADAPT_SURFACE(T, Γ, τ ) improves the surface resolution until

                                        λΓ + ≤ τ                                     (66)

where λΓ is the geometric estimator introduced in (17). This module is based on a
greedy algorithm
      [T + , Γ + ] = ADAPT_SURFACE(T, Γ, τ )
          while M := {T ∈ T|λT (T ) > τ } = ∅
              T := REFINE(T, M)
              Γ := FT (Ω)
          end while
          return(T,Γ )
where REFINE(T, M) refines all elements in the marked set M and keeps con-
formity; more details are given in Sect. 6.2. To derive convergence rates for
AFEM, we require that ADAPT_SURFACE is t-optimal, i.e. there exists a con-
stant C such that the set M+ of all the elements marked for refinement in a call
to ADAPT_SURFACE(T, Γ, τ ) satisfies

                                    #M+ ≤ Cτ −1/t ,                                  (67)

whenever γ belongs to a suitable approximation class, Bt with 0 < t ≤ 1/d (see
Sect. 8.1). In Sect. 8.3 we show that this assumption is satisfied provided that
γ ∈ Wp1+td (Γ0 ) for some tp > 1.
AFEM for Geometric PDE: The Laplace-Beltrami Operator                              287

6.2 Module ADAPT_PDE

Given a tolerance ε > 0 and admissible subdivision T + , the call [T, U ] =
ADAPT_PDE(T + , ε) outputs a refinement T ≥ T + and the associated finite element
solution U ∈ V(T) such that
                                     ηT (U ) ≤ ε.                                 (68)
The module ADAPT_PDE is the standard adaptive sequence:
   [T, Γ ] = ADAPT_PDE(T, ε)
      U = SOLVE(T)
      {ηT (U, T )}T ∈T = ESTIMATE(T, U )
      while ηT (U ) > ε
           M := MARK(T, {ηT (U, T )}T ∈T )
           T := REFINE(T, M)
           Γ := FT (Ω)
           U = SOLVE(T)
           {ηT (U, T )}T ∈T = ESTIMATE(T, U )
      end while
      return(T,Γ )
   We describe below the modules SOLVE, ESTIMATE, MARK and REFINE sepa-
rately.


Procedure SOLVE

This procedure solves the SPD linear system resulting for (38). For simplicity we
assume that the linear system is solved exactly. In this context, the approximate
solution of the discrete problem can be handled as in [52]. We refer to [43] for a
hierarchical basis multigrid preconditioner and to [13] for standard variational and
non-variational multigrid algorithms.


Procedure ESTIMATE

Given the Galerkin solution U ∈ V(T) of (38) ESTIMATE computes the PDE error
indicators {ηT (U, T )}T ∈T . We emphasize that this procedure does not compute the
oscillation terms, which are only needed to carry out the analysis.
   The equivalence stated in Lemma 5.7 is critical to deduce that the ADAPT_PDE
strategy based on the reduction of the error indicators ηT (U ) is successful in reduc-
ing the total error ∇γ (u−U )L2 (γ ) +oscT (f ). To see this we impose the constraint
on the parameter ω
                                           
                                                 C2
                                ω ≤ ω1 :=              ,                           (69)
                                              2Λ20 Λ1
288                                                                    A. Bonito et al.

and observe that the input T + to ADAPT_PDE as well as all inner iterates satisfy, in
view of (19),
                                                   C2 2
                              λ2Γ ≤ Λ20 λ2Γ + ≤      ε .
                                                  2Λ1 k
Since ηT (U ) > εk , we deduce the validity of (61) whence that of (62) within
ADAPT_PDE.


Procedure MARK

We rely on an optimal Dörfler’s marking strategy for the selection of elements.
Given the set of indicators {ηT (U, T )}T ∈T and a marking parameter θ ∈ (0, 1],
MARK outputs a subset of marked elements M ⊂ T such that

                               ηT (U, M) ≥ θ ηT (U ).                            (70)

In contrast to [46], MARK only employs the error indicators and does not use the os-
cillation nor surface indicators. We will see that quasi-optimality of AFEM requires
that M be minimal and θ sufficiently small.


Procedure REFINE

Given a triangulation T and a subset M of marked elements, the call T∗ =
REFINE(T, M) bisects all elements in M at least b ≥ 1 times while maintaining
mesh conformity, to obtain a new mesh T∗ . The new surface Γ∗ is obtained by
piecewise linear interpolation of the parametrization X via FT∗ = IT∗ X, namely,
Γ∗ = FT∗ (Ω).
   To ensure conformity of T∗ some additional elements of T \ M need to be refined.
The complexity of the overall refinement algorithm is controlled in a cumulative
way, as was proved by P. Binev, W. Dahmen, and R. DeVore for d = 2 [11] and R.
Stevenson [53] for d > 2; see also the survey [49]. The precise statement of this
result is in the following lemma.

Lemma 6.10 (Complexity of REFINE) Assume that T0 is suitably labeled (condi-
tion (b) of Sect. 4 in [53]). Let {Tk }k≥0 be any sequence of meshes produced by
successive calls Tk+1 = REFINE(Tk , Mk ). Then, there exists a constant C6 solely
depending on T0 and the refinement depth b such that

                                         
                                         k−1
                       #Tk − #T0 ≤ C6           #Mj ,   ∀k ≥ 1.                  (71)
                                         j =0

    It is worth noticing that the user parameter b ≥ 1 only entails a minimal refine-
ment, which does not force an interior node property [47, 48] or an extra refinement
to improve the surface approximation [46].
AFEM for Geometric PDE: The Laplace-Beltrami Operator                             289

Remark 6.1 (Alternative subdivision strategies) For simplicity we only discuss the
refinement strategy based on simplex bisection. However, all the results obtained
can be extended to any strategy satisfying Conditions 3, 4 and 6 in [12], such as
quadrilaterals with hanging nodes.



7 Conditional Contraction Property
The procedure ADAPT_PDE is known to yield a contraction property in the “flat”
case. In the present context, however, the surface approximation is responsible for
lack of consistency in that the sequence of finite element spaces is no longer nested.
This in turn leads to failure of a key orthogonality property between discrete so-
lutions, the Pythagoras property. We have, instead, a perturbation result referred
to as quasi-orthogonality below. Its proof follows the steps of that for graphs [46,
Lemma 4.4]. In this section, we use the notation
                                                              
          ej := ∇γ u − U j L2 (γ ) ,     E j := ∇γ U j +1 − U j L2 (γ ) ,
                                                    
             ηj := ηT j U j , ηj Mj := ηT j U j , Mj , λj := λΓ j ,

where T j are meshes obtained after each inner iteration of ADAPT_PDE, starting
with T 0 = T + , and Γ j , U j are the corresponding discrete surfaces and Galerkin
solutions.

Lemma 7.11 (Quasi-orthogonality) Let Λ2 > 0 be the constant of Lemma 5.8,
which solely depends on the Lipschitz constant L of γ and f L2 (γ ) . Then, for
i = j, j + 1 with j ≥ 0, we have
     j 2 3  j 2      2      2  2 1  2   2
     e    − E       − Λ2 λi ≤ ej +1 ≤ ej − E j + Λ2 λi .                         (72)
           2                               2
Proof Since the symmetry of the Dirichlet form implies
                                     
         j 2  j +1 2  j 2                                
         e    = e       + E     + 2 ∇γ u − U j +1 ∇γT U j +1 − U j ,
                                         γ

we just have to examine the last term. Combining (35), (38), and (39) with
Lemma 5.1 yields
             
                                           
                ∇γ u − U j +1 ∇γT U j +1 − U j  f L2 (γ ) λj E j ,
                γ

which gives (72) after applying Young’s inequality.                                

Remark 7.2 (Validity of (72)) Relation (72) is also true for any pair of triangula-
tions (T, T∗ ), with T∗ ≥ T, discrete solution U∗ ∈ V(T∗ ) on the finer space, and any
discrete function V ∈ V(T).
290                                                                         A. Bonito et al.

Theorem 7.1 (Conditional Contraction Property) Let θ ∈ (0, 1] be the mark-
ing parameter of MARK and let {T j , Γ j , U j }Jj≥0 be a sequence of meshes,
piecewise affine surfaces and discrete solutions generated by the procedure
ADAPT_PDE(T 0 , ε) within AFEM with tolerance ε, i.e. λ0 ≤ ωε. Assume that the
AFEM parameter ω satisfies

                                                 ξθ2
                          ω ≤ ω2 :=        √                  ,                       (73)
                                      Λ0       32Λ2 (2Λ3 + 1)

where ξ = 1 − 2−b/d is defined in Lemma 5.8. There exist constants 0 < α < 1 and
β > 0 such that
             j +1 2         2     2   2 
             e        + β ηj +1 ≤ α 2 ej + β ηj                   ∀0 ≤ j < J.         (74)

Moreover, the number of inner iterates J of ADAPT_PDE is uniformly bounded.

Proof (1) Let β > 0 be a scaling parameter to be found later. We combine (72) and
(64) to write
         j +1 2          2
         e        + β ηj +1
                        
               2         1           2
           ≤ ej + − + β 1 + δ −1 Λ3 E j
                           2
                                2         2      2 
              + Λ2 1 + β 1 + δ −1 λj + β(1 + δ) ηj − ξ ηj Mj .

Here Mj is the set of elements in T j marked for refinement at the j th subiteration.
To remove the factor of E j we now choose β dependent on δ, to be

                                   1                             δ
                     β 1 + δ −1 Λ3 =       ⇒        β(1 + δ) =        ,               (75)
                                     2                            2Λ3

and thereby obtain
              j +1 2         2  2                 2
              e        + β ηj +1 ≤ ej + Λ2 1 + β 1 + δ −1 λj
                                              2      2 
                                   + β(1 + δ) ηj − ξ ηj Mj .

   (2) Invoking Dörfler marking (70), we deduce
                         j 2         2           2
                         η     − ξ η j Mj ≤ 1 − ξ θ 2 η j .

Since the initial mesh T 0 comes from ADAPT_SURFACE we know that λ0 ≤ ωε ≤
ωηj for all inner iterations 1 ≤ j ≤ J of ADAPT_PDE. Using (19) yields λj ≤
AFEM for Geometric PDE: The Laplace-Beltrami Operator                              291

Λ0 ωηj , whence
  j +1 2         2  2          ξ θ 2  j 2
  e        + β ηj +1 ≤ ej − β(1 + δ)        η
                                       2
                                                  
                                        ξθ2               1  Λ20 ω2  j 2
                       + β (1 + δ) 1 −          + Λ2 1 +             η .
                                          2              2Λ3   β
Applying the simpler upper bound (63), which is valid for the inner iterates of
ADAPT_PDE, and replacing β according to (75), we obtain
                   j +1 2         2        2          2
                   e        + β ηj +1 ≤ α1 (δ) ej + α2 (δ)β ηj

with
                                 ξθ2
               α1 (δ)2 := 1 − δ       ,
                               4Λ3 C3
                                                 
                                      ξθ2               1  Λ20 ω2
               α2 (δ)2 := (1 + δ) 1 −         + Λ2 1 +            .
                                        2              2Λ3   β

It remains to prove that δ can be chosen so that α2 (δ)2 < 1. We then fix the parameter
δ so that
                       
                              ξθ2          ξθ2                  ξθ2
                (1 + δ) 1 −         =1−            ⇒ δ=                  .
                               2             4                4 − 2ξ θ 2
                                          ξθ  2      ξθ  2
Now, according to (75), we obtain β = 2Λ (4−ξ θ 2)
                                                   ≥ 8Λ 3
                                                          and since ω ≤ ω2 we infer
                                        3
that
                 
                         1    Λ20 ω2 4Λ2 (2Λ3 + 1) 2 2 ξ θ 2
             Λ2 1 +                 ≤                  Λ0 ω ≤       .
                        2Λ3     β            ξθ2                  8
                    2
Hence α22 ≤ 1 − ξ 8θ < 1, and the choice α := max{α1 , α2 } < 1 yields the desired
estimate (74).
   (3) The contraction property (74) guarantees that ADAPT_PDE stops in a finite
number of iterations J . To show that J is independent of the iteration counter k of
AFEM, take k ≥ 1 and note that before the call ADAPT_PDE(Tk+ , εk ) we have
                                   εk                                 Λ0 ω
         ηk = ηTk (Uk ) ≤ εk−1 =      ,     λ k = λ Γk ≤ Λ 0 λΓ + ≤        εk .
                                   ρ                          k−1      ρ
We next combine (64), with δ = 1, and (72) to get
     2                             2                             2
ηT + Uk+  ηk2 + λ2k + ∇γ Uk+ − Uk L2 (γ )  ηk2 + λ2k + ∇γ (u − Uk )L2 (γ ) ,
   k

where the hidden constants depend on Λ2 , Λ3 . The bounds on ηk , λk , together with
(56), yield
                       0 2        2
                       η = ηT + Uk+  ηk2 + λ2k  εk2 .
                                    k
292                                                                    A. Bonito et al.

Since the stopping condition of ADAPT_PDE is ηJ ≤ εk , (74) implies that J is
bounded independently of k, as asserted.                                   

   That J is uniformly bounded dictates the complexity of ADAPT_PDE because
the most expensive module SOLVE is run just J times. However, this property is not
required for the study of cardinality of Sect. 8.



8 Optimal Cardinality
In this section we study the cardinality of AFEM, which is dictated by the regularity
of u, f and γ . We first discuss in Sect. 8.1 the best approximation error achievable
with piecewise linear polynomials for both surface and PDE solution. We show next
in Sect. 8.2 that AFEM delivers the best convergence rate provided the procedure
ADAPT_SURFACE is t-optimal, namely it satisfies (67). We conclude in Sect. 8.3
with a greedy algorithm for ADAPT_SURFACE that is t-optimal.



8.1 Approximation Classes

We define classes of functions and surfaces in terms of decay rate of the ap-
proximation error as a function of the number of degrees of freedom N . Let
TN ⊂ T := T(T0 ) be the set of all possible conforming triangulations, generated
on γ with at most N elements more than T0 by successive bisection of T0 :

                           TN := {T ∈ T | #T − #T0 ≤ N }.

Given v ∈ H#1 (γ ), f ∈ L2 (γ ), the notion of total error
                                              2
                    ET (V , f )2 = ∇γ (v − V )L2 (γ ) + oscT (f )2

is defined in (60). In view of Lemma 5.7 and the fact that AFEM is driven by ηT (U )
and λΓ , we assess the quality of the best approximation (v, f ) with N degrees of
freedom in terms of

                      σ (N ; v, f, γ ) := inf      inf ET (V , f ).
                                         T∈TN V ∈V(T)

This is consistent with the approach taken for flat domains in [21, 49]. For s > 0,
we define the nonlinear (algebraic) approximation class As (γ ) to be
                                                                    
           As (γ ) := (v, f ) |v, f |As := sup N s σ (N ; v, f, γ ) < ∞ .
                                            N ≥1

We emphasize that the approximability of the surface γ only appears implicitly by
measuring the errors on γ . In fact, the definition of data oscillation (55), and in
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                    293

particular the specific choice of FΓ , implies that osc2T (f ) entails the approximation
of f by piecewise constants on γ but does not include the approximation of γ by
Γ ; this is quite different for higher order approximations of γ , as is shown in [17].
On the other hand, the generic range of s is dictated by polynomial degree, namely
0 < s ≤ 1/d.
   An alternative and useful definition to (u, f ) ∈ As (γ ) is as follows: given ε > 0,
there exists a mesh Tε ∈ T(T0 ) with Tε ≥ T0 and a discrete function Vε ∈ V(Tε ) so
that
                                                                           1
    ∇γ (u − Vε )2 2       + oscTε (f )2 ≤ ε 2 ,
                                                                                   1
                                                       #Tε − #T0 ≤ |u, f |As s ε − s ;   (76)
                   L (γ )

Γε = FTε (Ω) might not be a good approximating of γ . In fact, approximations
of (u, f ) and γ are handled separately. The characterization of As (γ ) in terms of
Besov regularity is an open issue.
   Similarly, for surfaces and t > 0, we define the approximation class as follows:
                                                                
                 Bt := γ ∈ W∞   1
                                   |γ |Bt := sup N t inf λΓ < ∞ .
                                                N ≥1     T∈TN


This means that surfaces in Bt are parametrized by Lipschitz maps X : Ω → Rd+1
which can in turn be approximated with rate N −t in W∞  1 over Ω with N degrees of

freedom. In Sect. 8.3, we give a constructive greedy algorithm that realizes this rate
provided γ belong to a suitable Sobolev space in the nonlinear scale of W∞    1 . The

generic range of exponents t for linear elements, or equivalently polyhedral surfaces
Γ , is 0 < t ≤ 1/d.



8.2 Convergence Rates

We now prove that AFEM achieves the asymptotic decay rate min{s, t}, dictated by
the classes As (γ ) and Bt , but without ever using either s or t in its formulation.
We establish the link between the performance of AFEM and the best possible error
by adapting a clever idea of R. Stevenson [52] for the Laplace operator, further
extended by J.M. Cascón et al. [21] to general elliptic PDE, in flat domains; we
refer to the survey [49] for a thorough discussion. The insight is that

  any marking strategy that reduces the total error relative to its current value
  must contain a substantial portion of the error estimator, and so it can be (77)
  related to Dörfler Marking.

Exploiting next the minimality of Dörfler marking enables us to compare meshes
generated by AFEM with the best meshes within T. The approach of [21, 49, 52]
does not apply directly in the present context because of the consistency error due
to surface interpolation. We account for this discrepancy below upon making the
294                                                                     A. Bonito et al.

parameter ω of ADAPT_SURFACE sufficiently small. Let
                                                 
                      C4                     C4        θ2 1
            ω3 :=   √          ,     ω4 :=           1− 2                          (78)
                  Λ0 3Λ1 + 2Λ2              2Λ0        θ∗ Λ 2

be two thresholds for ω to be used next and θ∗ be a threshold for the Dörfler param-
eter θ
                                           C4
                                 θ∗ := √          ;                              (79)
                                         2 + 3C1
           √
since C4 = C2 /2 and C2 ≤ C1 , we see that θ∗ < 1.

Lemma 8.12 (Dörfler marking) Let λΓ0 satisfy (49), and the parameters θ and ω
satisfy
                       0 < θ < θ∗ ,   0 < ω ≤ min{ω1 , ω3 },                       (80)
                                                                               2
where θ∗ , ω3 are defined in (78), (79), and ω1 in (69). Let μ = 12 (1 − θθ 2 ) and
                                                                              ∗
(Γ, T, U ) be the approximate surface, mesh and discrete solution produced by an
inner iterate of ADAPT_PDE. If (Γ∗ , T∗ , U∗ ) is a surface-mesh-solution triple with
T∗ ≥ T, such that the total error satisfies

                            ET∗ (U∗ , f ) ≤ μET (U, f ),                           (81)

then the refined set R := RT→T∗ satisfies Dörfler property with parameter θ , namely

                               ηT (U, R) ≥ θ ηT (U ).                              (82)

Proof Using the notation e(U ) = ∇γ (u − U )L2 (γ ) , we proceed as in [21,
Lemma 5.9]. Since ω ≤ ω1 , we combine the lower bound of (62) with (81) to write
                                                         
        (1 − μ)C42 ηT (U )2 ≤ (1 − μ) e(U )2 + oscT (f )2
                             ≤ e(U )2 − e(U∗ )2 + oscT (f )2 − oscT∗ (f )2 .

We now estimate separately error and oscillation terms. According to (72) and (58),
we obtain
                                3             2
              e(U )2 − e(U∗ )2 ≤ ∇γ (U∗ − U )L2 (γ ) + Λ2 λ2T
                                2
                                                 
                                3                  3
                               ≤ C1 ηT (U, R) +
                                             2
                                                     Λ1 + Λ2 λ2Γ .
                                2                  2

On the other hand, the data oscillation terms verify

                oscT (f )2 − oscT∗ (f )2 ≤ oscT (f, R)2 ≤ ηT (U, R)2
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                 295

because they coincide over T\R and the estimator dominates the oscillation locally
(see (59)). Since (Γ, T) is produced within ADAPT_PDE, we have ηT (U ) > ε and
λΓ + ≤ ωε, whence
                        λΓ ≤ Λ0 λΓ + ≤ Λ0 ωε ≤ Λ0 ωηT (U ).
Collecting these three estimates, and using that ω ≤ ω3 , we infer that
                                                    
            3                                           3
        1 + C1 ηT (U, R)2 ≥ (1 − μ)C42 − Λ20 ω2 Λ1 + Λ2 ηT (U )2
            2                                           2
                                                 C42
                                  ≥ (1 − 2μ)         ηT (U )2 .
                                                 2
Finally, the asserted estimate (82) is a consequence of the definition of θ∗ , μ and
θ < θ∗ .                                                                          

Lemma 8.13 (Cardinality of M) Let λΓ0 satisfy (49) and the procedure MARK se-
lect a set M with minimal cardinality. Let the parameters θ and ω satisfy
                         0 < θ < θ∗ ,         0 < ω ≤ min{ω1 , ω4 }                  (83)
with θ∗ , ω4 , ω1 given in (79), (78), and (69), respectively. Let u be the solution of
(35), and let (Γ, T, U ) be produced within ADAPT_PDE. If (u, f ) ∈ As (γ ), then
                                                1                 1
                                 #M  |u, f |ss ET (U, f )− s .

Proof We set
                                                                
                     δ 2 = μ̂ET (U, f )2 = μ̂ e(U )2 + oscT (f )2 ,
                             2
for 0 < μ̂ < μ = 12 (1 − θθ 2 ) < 1 sufficiently small to be determined later. Since
                              ∗
(u, f ) ∈ As (γ ), there exists a pair (Γδ , Tδ ) with Tδ ≥ T0 and a Vδ ∈ V(Tδ ) such that
                                      1   1
              #Tδ − #T0  |u, f |ss δ − s ,         e(Vδ )2 + oscTδ (f )2 ≤ δ 2 .    (84)
Let T∗ = T ⊕ Tδ be the overlay of T and Tδ , which satisfies [21, Lemma 3.7], [49]
                                   #T∗ ≤ #T + #Tδ − #T0 .                            (85)
Let U∗ ∈ V(T∗ ) be the corresponding Galerkin solution. We observe that T∗ ≥ Tδ , T,
and invoke the upper bound of (72) in conjunction with (65) to write
              e(U∗ )2 + oscT∗ (f )2 ≤ e(Vδ )2 + Λ2 λ2Γ + C52 oscTδ (f )2 .
We recall that λΓ ≤ Λ0 λΓ + < Λ0 ωε, in view of (19) and (66), and ηT (U ) > ε
because of (68). Combining this with (62), we arrive at

                            Λ20 ω2                      Λ20 ω2 2
                    λ2Γ ≤           e(U )2
                                           + oscT (f )2
                                                         =       δ .
                             C42                           μ̂C42
296                                                                           A. Bonito et al.

                                                                 μ
Using the fact that C5 ≥ 1 and ω ≤ ω4 , we choose μ̂ =               to end up with
                                                                2C52
                                
                                      Λ2 Λ2 ω 2 2                       
         e(U∗ )2 + oscT∗ (f )2 ≤ C52 + 0 2      δ = μ e(U )2 + osc2T (f ) .
                                       μ̂C4

We thus deduce from Lemma 8.12 that the subset R := RT→T∗ ⊂ T satisfies Dörfler
property (82). Since the set M ⊂ T also satisfies this property, but with minimal
cardinality, we infer that
                                                                     1   1
                   #M ≤ #R ≤ #T∗ − #T ≤ #Tδ − #T0  |u, f |ss δ − s .

The asserted estimate finally follows upon using the definition of δ.                      

   The quasi-optimal cardinality of AFEM is a direct consequence of Lemma 8.13
and Theorem 7.1. We prove this next.

Theorem 8.2 (Convergence rate of AFEM) Let γ ∈ Bt and (u, f ) ∈ As (γ ) for some
0 < t, s ≤ n/d. Let ε0 ≤ (6ωΛ0 L3 )−1 be the initial tolerance, and the parameters
θ, ω satisfy

                  0 < θ ≤ θ∗ ,      0 < ω ≤ ω∗ := min{ω1 , ω2 , ω3 , ω4 },              (86)

where θ∗ , ω1 , . . . , ω4 are given in (79), (69), (73), and (78), respectively. Let
the procedure MARK select sets with minimal cardinality, and the procedure
ADAPT_SURFACE be t-optimal on the surface γ . Let u be the solution of (35) and
{Γk , Tk , Uk }k≥0 a sequence of approximate surfaces, meshes and discrete solution
generated by the outer loop of AFEM.
   Then there exists a constant C, depending on the Lipschitz constant L of γ ,
f L2 (γ ) , the refinement depth b, the initial triangulation T0 , and AFEM parame-
ters (θ, ω, ρ) such that
                                               r              r 
      e(Uk ) + oscTk (f ) + ω−1 λΓk ≤ C |u, f |As s + ω−r |γ |Bt t (#Tk − #T0 )−r ,     (87)

with r = min{s, t}.

Proof We start by noting that since
                                                1
                                      ωε0 ≤
                                              6Λ0 L3

the first output of ADAPT_SURFACE fulfills λΓ + ≤ 6Λ
                                                   1
                                                     0
                                                       which is (49) and implies
                                                       0
that T(T0+ ) is shape regular.
   There are two instances where elements are added, inside ADAPT_SURFACE and
ADAPT_PDE. For ADAPT_SURFACE we make the assumption (67) of t-optimality:
                                                   1
                                                           −1
                                  #M+
                                               1
                                         −t
                                    k ω    |γ |Bt t εk t .
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                                297

For ADAPT_PDE, Lemma 8.13 yields
                               1  
                   j                  j             − 1
                 #Mk  |u, f |As s e Uk + oscT j (f ) s                          0 ≤ j < J,
                                                              k


with j denoting the inner loop iteration counter. Since the inner iterates of
ADAPT_PDE satisfy Theorem 7.1 and
                           j                  j       j
                         e Uk + oscT j (f ) ≈ e Uk + ηT j Uk ,
                                            k                                k


we deduce that
      j             − 1  J −j −1                − 1  J −j −1 − 1
     e Uk + oscT j (f ) s  α s e UkJ −1 + ηT J −1 (f ) s ≤ α s εk s .
                    k                                                    k


This implies

                  −1
                 J                                J −1
                            j
                                        1
                                                −1           J −j −1              1
                                                                                       −1
                        #Mk  |u, f |As s εk s            α      s       |u, f |As s εk s .
                 j =0                              j =0

   To do a full counting argument, we resort to the crucial estimate (71), which
combined with the estimates above and the relation εk+1 = ρεk of step 3 of AFEM
gives
                                       −1
                                                      
                    
                    k−1                J
                                                               −1   1           1 
                                                                                    k−1
                                                                                         −1
                               #M+
                                                  j
  #Tk − #T0 ≤ C6                 i +            #Mi        C6 ω |γ |Bt + |u, f |As
                                                                 t   t           s
                                                                                        εi r ,
                     i=0               j =0                                                    i=0

                                                      − 1r     − 1r k−1 i    − 1r
where r = min{s, t}. Since ρ < 1, we obtain k−1  i=0 εi      = εk−1   i=0 ρ  εk ,
                                                                           r

whence
                                   1      1             1 
                                                              −1
                  #Tk − #T0  C6 ω− t |γ |Bt t + |u, f |As s εk r .

Moreover, the stopping criteria (66) and (68) guarantee that

                           e(Uk ) + oscTk (f ) + ω−1 λΓk ≤ Cεk ,

which implies the desired estimate (87).                                                              

   Besides the condition ω ≤ ω∗ in (86), the right-hand side of (87) suggests that ω
should not be too small to optimize this bound. An optimal choice of ω for the case
s = t, which unfortunately is not computable, appears to be
                                                             
                                ω = min ω∗ , |u, f |As |γ |−1
                                                           Bs .
298                                                                                  A. Bonito et al.

8.3 Greedy Algorithm

To conclude we show that ADAPT_SURFACE is t-optimal provided γ belongs to
Wp1+td , which is just above the nonlinear Sobolev scale of W∞
                                                             1 for polynomial de-

gree 1 in d dimensions:
           1     d                           d
       sob W∞  =1−   = 1 < sob Wp1+td = 1 + td −                                 ⇒   tp > 1.
                   ∞                             p

Proposition 8.1 (Greedy algorithm) Let γ be piecewise of class Wp1+td (Γ0 ),
with tp > 1, t ≤ 1/d, and globally of class W∞  1 . Then module [T + , Γ + ] =

ADAPT_SURFACE(T, Γ, τ ) terminates in a finite number of steps and the set M+
of marked elements satisfies

                              #M+ ≤ C|γ |                    τ −1/t ,
                                                1/t
                                                Wp1+td (Γ0 )

                                    p
where |γ |Wp1+td (Γ0 ) = ( Ii=1 |Xi | 1+tp          )1/p . Moreover, γ ∈ Bt and
                                     Wp       (Ω)

                                   |γ |Bt  |γ |W 1+td (Γ0 ) .
                                                        p



Proof We first observe that Wp1+td ⊂ W∞   1 ⊂ C 0 so that the Lagrange interpolation

operator IT is well defined. In addition, for an approximation pair (Γ, T) local in-
terpolation estimates give

                     λΓ (T )  hrT |X|W 1+td (T ) ,         ∀T ∈ T = T(Γ ),                    (88)
                                          p


for r = sob(Wp1+td ) − sob(W∞ 1 ) = td − d > 0. This shows that ADAPT_SURFACE
                                          p
terminates in finite number of steps, say m.
   To prove that ADAPT_SURFACE is t-optimal, namely to show (67), let M+ =
M0 ∪ · · · ∪ Mm−1 be the set of marked elements. We organize the elements in M+
by size in such a way that allows for a counting argument. Let Pj be the set of
elements T of M+ with size

               2−(j +1) ≤ |T | < 2−j          ⇒       2−(j +1)/d ≤ hT < 2−j/d .

We recall that |T | is the measure of T , the preimage of T in the initial triangulation
T0 . We proceed in several steps.
    (1) We first observe that all T ’s in Pj are disjoint. This is because if T1 , T2 ∈ Pj
and T̊1 ∩ T̊2 = ∅, then one of them is contained in the other, say T1 ⊂ T2 , due to
the bisection procedure. Thus |T1 | ≤ 12 |T2 |, contradicting the definition of Pj . This
implies
                     2−(j +1) #Pj ≤ |Γ0 |           ⇒       #Pj ≤ |Γ0 |2j +1 .                 (89)
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                                                 299

   (2) In light of (88), we have for T ∈ Pj

                                        τ ≤ λΓ (T )  2−(j/d)r |X|W 1+td (T ) .
                                                                             p

                                              
Therefore τ p #Pj  2−(j/d)rp                                                −(j/d)rp |γ |p
                                                             p
                                                    T ∈Pj |X|W 1+td (T ) ≤ 2              W 1+td (Γ )
                                                                                                      , whence
                                                                p                                   p          0


                                        #Pj  τ −p 2−(j/d)rp |γ |
                                                                         p
                                                                                      .                               (90)
                                                                         Wp1+td (Γ0 )

   (3) The two bounds for #Pj in (89) and (90) are complementary. The first is
good for j small whereas the second is suitable for j large (think of τ  1). The
crossover takes place for j0 such that
                                                                                                     1/t
                                                                                                  |γ |
            j0 +1               −p −j0 rp/d        p                                       −1/t      Wp1+td (Γ0 )
        2           |Γ0 | = τ       2           |X| 1+td              ⇒          2 ≈τ
                                                                                 j0
                                                                                                                  .
                                                   Wp (Ω)                                           |Γ0 |1/tp

   (4) We now compute
                                                                                              j
              #M+ =                                  2j |Γ0 | + τ −p |γ |                   2−rp/d .
                                                                           p
                                 #Pj 
                                                                           Wp1+t (Γ0 )
                            j                j ≤j0                                        j >j0

                      j ≈ 2j 0 ,
                                                   −rp/d )j  2−(rp/d)j0 = 2(1−tp)j0 we can write
Since        j ≤j0 2                     j >j0 (2

                                                  
                       #M+  τ −1/t + τ −p τ −1/t+p |Γ0 |1−1/tp |γ | 1+td
                                                                    1/t
                                                                                           Wp      (Γ0 )

                                ≈ τ −1/t |Γ0 |1−1/tp |γ |
                                                                1/t
                                                                             .
                                                                Wp1+td (Γ0 )


   (5) Upon termination, λΓ + ≤ τ and #M+  τ −1/t |γ |
                                                                                          1/t
                                                                                                       , which is valid
                                                                                          Wp1+td (Γ0 )
regardless of the input T of ADAPT_SURFACE. If we take T = T0 and invoke
Lemma 6.10 we deduce that
                                                                                  t
    #T + − #T0  τ −1/t |γ |                                        λΓ + #T + − #T0  |γ |W 1+td (Γ0 ) ,
                                           1/t
                                                           ⇒
                                           Wp1+td (Γ0 )                                                    p


and that γ ∈ Bt . This concludes the proof.                                                                             



9 Asymptotics: Role of ω

In order to analyze the role of ω in the convergence rate of AFEM and its perfor-
mance, we solve the problem

                                −Δγ u = 1,             in γ ,        u = 0,           on ∂γ ,
300                                                                                   A. Bonito et al.




Fig. 12 ηk + λk /ω (left) and ηk + λk (right) versus the number of elements in logarithmic scale
for ω = 0.1, 1, 10. We observe that ηk + λk /ω decays as N −0.5 right from the beginning, whereas
ηk + λk shows the same decay after the meshes have some refinement, depending on the value of
ω. Our theory predicts the decay of N −0.5 for both notions of total error if ω is sufficiently small,
but the best relation between the error ηk + λk and #DOFs is obtained for w = 1, which is not so
small


where γ is the graph of class C 1,α given by
                                                        1+α
                               z(x, y) = 0.75 − x 2 − y 2 + ,

over the flat domain Ω = (0, 1)2 , and consider two cases α = 3/5 and α = 2/5.
   It turns out that z ∈ Wp1+2t (Ω) for t < (α + p1 )/2. Moreover, to enforce the gap
sob(Wp1+2t ) − sob(W∞1 ) > 0 with sob(W 1+2t ) = 1 + 2t − 2 and sob(W 1 ) = 1 we
                                        p                 p            ∞
need tp > 1. These conditions can be achieved provided (see Sect. 8.3)

               α = 3/5 :      t = 1/2, p > 2,           ⇒     z ∈ B1
                                                                     2

               α = 2/5 :      t < 2/5, p > 5/2, ⇒             z ∈ Bt ,     ∀t < 2/5.

   On the other hand (u, f ) ∈ A 1 in both cases. This is a consequence of the fact
                                 2
                                                               
that Δγ u = f can be written in the parameter domain Ω as 1 div(qg   −1 ∇ T u) = f ,
                                                                           q
with coefficient matrix A = qg−1 ∈ C α (Ω̄) ∩ Wp1 (Ω) and 1 < p < 1−α  1
                                                                          ; see (47).
Extending u and qf by odd reflection and A by even reflection to the unit squares
around Ω, u is a solution to − div(A∇ T u) = qf on the ball B centered at (1/2, 1/2)
and radius 1, with coefficient A ∈ C α and right-hand side in L∞ . By Theorem 3.13
in [40] this implies ∇u ∈ C α (B̄), and thus

                            A : D 2 u = f + div A · ∇u ∈ Lp (B).

Applying Calderón-Zygmund theory we obtain u ∈ Wp2 (Ω) [39, Theorem 9.11],
whence (u, f ) ∈ A 1 [49, Sect. 5.4].
                   2
  In the following, we use the notation ηk := ηTk (Uk ), and λk := λΓk .
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                      301




Fig. 13 ηk , λk /ω and ηk + λk /ω for ω = 0.1 (left), ω = 1 (middle), and ω = 10 (right)


9.1 Case α = 3/5

We recall that in this case γ ∈ B1/2 . Since the pair (u, f ) ∈ A1/2 we expect a decay
                                  −1/2
of ηk + λk /ω proportional to Nk        , where Nk = #Tk − #T0 . In Fig. 12 we plot
ηk + λk /ω (left) and ηk + λk (right) versus the number of elements in logarithmic
scale for ω = 0.1, 1, 10, and observe that in the three cases both notions of error
decay (asymptotically) as N −1/2 .
   In Fig. 13 we show the behavior of the different indicators ηk , λk /ω and their
sum, for the three values of ω considered above. We observe the following:
ω = 0.1. At the beginning ηk  λk /ω, thus λk in ADAPT_SURFACE guides the re-
 finement initially, and ηk decreases very slowly because ADAPT_PDE exits without
 refining. The indicators ηk and λk /ω are of comparable size when the number of
 elements is around 2 · 105 , when the refinement starts to occur due to both λk and
 ηk and both quantities decrease as N −0.5 .
ω = 1. At the beginning ηk < λk /ω and the behavior is similar to the case ω = 0.1.
 When the meshes have about 103 elements the curves for ηk and λk /ω meet and
 they both start to decrease at the optimal rate N −0.5 .
ω = 10. At the beginning λk /ω < ηk , and the situation is opposite to the case of ω
 small. The refinement is initially guided by ηk in ADAPT_PDE, and λk decreases
 very slowly because ADAPT_SURFACE exits without refining. The two curves for
 ηk and λk /ω meet when the meshes have about 104 elements, and they both start
 to decrease at the optimal rate N −0.5 .
   In Fig. 14 we show three meshes after 10, 20 and 30 refinements have been
performed, with 192, 1216 and 5564 elements, respectively.



9.2 Case α = 2/5

We recall that in this case γ ∈ B0.4 , whereas the pair (u, f ) ∈ A1/2 . We thus expect
a decay of ηk + λk /ω proportional to N −0.4 . In Fig. 15 we plot ηk + λk /ω (left) and
ηk + λk (right) versus the number of elements in logarithmic scale for ω = 0.1, 1, 10,
302                                                                                   A. Bonito et al.




Fig. 14 Meshes after 10, 20 and 30 refinements have been performed, C 1.6 -surface, with ω = 1.
They are composed of 192, 1216 and 5564 elements, respectively




Fig. 15 ηk + λk /ω (left) and ηk + λk (right) versus the number of elements in logarithmic scale
for ω = 0.1, 1, 10. We observe that ηk + λk /ω decays as N −0.4 right from the beginning, whereas
ηk + λk shows the same decay after the meshes have some refinement, depending on the value of
ω. Our theory predicts the decay of N −0.4 for both notions of total error if ω is sufficiently small.
The best relation between the error ηk + λk seems to occur for ω = 1 and ω = 10


and observe that in the three cases both notions of error decay (asymptotically) as
N −0.4 .
   In Fig. 16 we show the behavior of ηk , λk /ω and their sum, for the same values
of ω. We observe the following:
ω = 0.1. At the beginning ηk  λk /ω, thus λk in ADAPT_SURFACE guides the re-
 finement initially, and ηk decreases very slowly because ADAPT_PDE exits with-
 out refining. The asymptotic regime starts when both indicators have a comparable
 magnitude, and both quantities decrease as N −0.4 . This instance is reached when
 the meshes have more than 106 elements, because λk /ω decreases more slowly
 than in the previous example, and takes longer to reach the initial value of ηk .
ω = 1. This case is similar to the previous one, with the change of behavior occur-
 ring when the meshes have 104 elements.
ω = 10. The situation now is opposite to the previous cases of ω small. At the be-
 ginning the refinement is initially guided by ηk in ADAPT_PDE, and λk decreases
 very slowly because ADAPT_SURFACE exits without refining. It is interesting to
 notice that ηk decreases as N −0.5 in this transient initial phase. When the meshes
 have about 103 elements both indicators are of comparable size, and the overall
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                      303




Fig. 16 ηk , λk /ω and ηk + λk /ω for ω = 0.1 (left), ω = 1 (middle), and ω = 10 (right)


 rate seems to be a little bit better than N −0.4 . This happens because λk is divided
 by 10 and its effect is not so visible in the picture. In the long run the decay cannot
 be better than N −0.4 .
    It is also interesting to notice that λk does not decrease monotonically, mainly
because the strongly curved part of γ is not aligned to the grid. This behavior is con-
sistent with (19) and, in fact, shows that we cannot expect monotonicity of λΓ (T)
upon refinement, thereby justifying (19).



10 Conclusions and Comments
We finish the paper with the following remarks about this and related work.
• Coupling PDE-Geometry: This is a new feature in adaptivity and leads to
  separate handling of geometry and PDE resolution with specific relative toler-
  ances. The current algorithm is different from that for graphs [46] studied by K.
  Mekchay, P. Morin, and R.H. Nochetto. The present paper studies polynomial de-
  gree 1, but the theory for parametric surfaces extends to higher polynomial degree
  [17].
• Convergence rates: We show optimal convergence rates in the energy norm
                                     
                          ∇(u − Uk ) 2  (#Tk − #T0 )−s
                                        L (γ )

  provided this is the rate of the best approximation of u in H 1 and that of γ in W∞
                                                                                    1 .

  This optimal result is consistent with that derived for flat domains by R. Stevenson
  [52] for the Poisson equation with data in H −1 and by J.M. Cascón et al. [21] for
  elliptic PDE with variable coefficients. None of them involve coarsening as the
  seminal paper [11] by P. Binev, W. Dahmen and R. DeVore. The present estimates
  extend those in [21] to the Laplace-Beltrami operator.
• Weaker conditions on f : We refer to A. Cohen, R. DeVore, and R.H. Nochetto
  [23] for convergence rates of elliptic PDE in flat domains with f ∈ H −1 and A
  piecewise constant:
                                         div(A∇u) = f.                                     (91)
304                                                                               A. Bonito et al.

  Paper [23] shows that approximability of u is sufficient for a complete theory.
  Whether this is true for the Laplace-Beltrami operator is still an open question.
• Weaker conditions on γ : We assume γ is Wp2 with p > d, which implies γ
  is C 1 . In the flat case, this corresponds to piecewise continuous A. We refer to
  A. Bonito, R. DeVore, and R.H. Nochetto [18] for optimal convergence rates of
  AFEM for (91) with weaker regularity assumptions on A. This could be espe-
  cially relevant to perform adaptivity on problems where the singularity location
  is not known beforehand, such as those in Sect. 2.

Acknowledgements The work of A. Bonito was partially supported by NSF Grant DMS-
0914977.
   The work of J.M. Cascón was partially supported by Secretaría de Estado de Investigación,
Desarrollo e Innovación through grant: CGL2011-29396-C03-02 (Spain), and by Conserjería de
Educación (Junta de Castilla y León), through grant: SA266A12-2.
   The work of P. Morin was partially supported by CONICET through grant PIP 112-200801-
02182, Universidad Nacional del Litoral through grants CAI+D 062-312, 062-309, and Agencia
Nacional de Promoción Científica y Tecnológica, through grant PICT-2008-0622 (Argentina).
   The work of R.H. Nochetto was partially supported by NSF Grant DMS-1109325, and the
General Research Board of the University of Maryland.




References
 1. Ainsworth, M., Oden, J.T.: A Posteriori Error Estimation in Finite Element Analysis. Pure and
    Applied Mathematics (New York). Wiley-Interscience, New York (2000), pp. xx+240
 2. Bänsch, E.: Finite element discretization of the Navier-Stokes equations with a free capillary
    surface. Numer. Math. 88(2), 203–235 (2001)
 3. Bänsch, E., Haußer, F., Lakkis, O., Li, B., Voigt, A.: Finite element method for epitaxial
    growth with attachment-detachment kinetics. J. Comput. Phys. 194(2), 409–434 (2004)
 4. Bänsch, E., Morin, P., Nochetto, R.H.: Surface diffusion of graphs: variational formulation,
    error analysis, and simulation. SIAM J. Numer. Anal. 42(2), 773–799 (2004)
 5. Bänsch, E., Morin, P., Nochetto, R.H.: A finite element method for surface diffusion: the
    parametric case. J. Comput. Phys. 203(1), 321–343 (2005)
 6. Barrett, J.W., Garcke, H., Nürnberg, R.: A parametric finite element method for fourth order
    geometric evolution equations. J. Comput. Phys. 222(1), 441–462 (2007)
 7. Barrett, J.W., Garcke, H., Nürnberg, R.: Parametric approximation of Willmore flow and re-
    lated geometric evolution equations. SIAM J. Sci. Comput. 31(1), 225–253 (2008)
 8. Barrett, J.W., Garcke, H., Nürnberg, R.: Finite-element approximation of coupled surface and
    grain boundary motion with applications to thermal grooving and sintering. Eur. J. Appl. Math.
    21(6), 519–556 (2010)
 9. Bartels, S., Dolzmann, G., Nochetto, R.H.: A finite element scheme for the evolution of ori-
    entation order in fluid membranes. Modél. Math. Anal. Numér. 44(1), 1–31 (2010)
10. Bartels, S., Dolzmann, G., Nochetto, R.H., Raisch, A.: Finite element methods for direc-
    tor fields on flexible surfaces. Interfaces Free Bound. 14(2), 231–272 (2012). doi:10.4171/
    IFB/281
11. Binev, P., Dahmen, W., DeVore, R.A.: Adaptive finite element methods with convergence
    rates. Numer. Math. 97(2), 219–268 (2004)
12. Bonito, A., Nochetto, R.H.: Quasi-optimal convergence rate of an adaptive discontinuous
    Galerkin method. SIAM J. Numer. Anal. 48(2), 734–771 (2010)
13. Bonito, A., Pasciak, J.E.: Convergence analysis of variational and non-variational multigrid
    algorithm for the Laplace-Beltrami operator. Math. Comput. 81, 1263–1288 (2012)
AFEM for Geometric PDE: The Laplace-Beltrami Operator                                          305

14. Bonito, A., Nochetto, R.H., Pauletti, M.S.: Geometrically consistent mesh modification. SIAM
    J. Numer. Anal. 48(5), 1877–1899 (2010)
15. Bonito, A., Nochetto, R.H., Pauletti, M.S.: Parametric FEM for geometric biomembranes.
    J. Comput. Phys. 229(9), 3171–3188 (2010)
16. Bonito, A., Nochetto, R.H., Pauletti, M.S.: Dynamics of biomembranes: effect of the bulk
    fluid. Math. Model. Nat. Phenom. 6(5), 25–43 (2011)
17. Bonito, A., Cascón, J.M., Mekchay, K., Morin, P., Nochetto, R.H.: AFEM for the Laplace-
    Beltrami operator on parametric surfaces: convergence rates (in preparation)
18. Bonito, A., DeVore, R.A., Nochetto, R.H.: Adaptive finite element methods for elliptic prob-
    lems with discontinuous coefficients (in preparation)
19. Brenner, S.C., Scott, L.R.: The Mathematical Theory of Finite Element Methods. Texts in
    Applied Mathematics, vol. 15, 2nd edn. Springer, New York (2002), pp. xvi+361
20. Cahn, J., Taylor, J.E.: Surface motion by surface diffusion. Acta Metall. Mater. 42, 1045–1063
    (1994)
21. Cascón, J.M., Kreuzer, C., Nochetto, R.H., Siebert, K.G.: Quasi-optimal convergence rate for
    an adaptive finite element method. SIAM J. Numer. Anal. 46(5), 2524–2550 (2008)
22. Ciarlet, P.G.: The Finite Element Method for Elliptic Problems. Studies in Mathematics and
    its Applications, vol. 4. North-Holland, Amsterdam (1978), pp. xix+530
23. Cohen, A., DeVore, R., Nochetto, R.H.: Convergence rates for AFEM with H −1 data. Found.
    Comput. Math. 12(5), 671–718 (2012). doi:10.1007/s10208-012-9120-1
24. Deckelnick, K., Dziuk, G.: Discrete anisotropic curvature flow of graphs. Modél. Math. Anal.
    Numér. 33(6), 1203–1222 (1999)
25. Deckelnick, K., Dziuk, G.: Error estimates for a semi-implicit fully discrete finite element
    scheme for the mean curvature flow of graphs. Interfaces Free Bound. 2(4), 341–359 (2000)
26. Deckelnick, K., Dziuk, G., Elliott, C.M.: Fully discrete finite element approximation for
    anisotropic surface diffusion of graphs. SIAM J. Numer. Anal. 43(3), 1112–1138 (2005)
27. Deckelnick, K., Dziuk, G.: Error analysis of a finite element method for the Willmore flow of
    graphs. Interfaces Free Bound. 8(1), 21–46 (2006)
28. Demlow, A.: Higher-order finite element methods and pointwise error estimates for elliptic
    problems on surfaces. SIAM J. Numer. Anal. 47(2), 805–827 (2009)
29. Demlow, A., Dziuk, G.: An adaptive finite element method for the Laplace-Beltrami operator
    on implicitly defined surfaces. SIAM J. Numer. Anal. 45(1), 421–442 (2007)
30. Dierkes, U., Hildebrandt, S., Küster, A., Wohlrab, O.: Minimal Surfaces. I. Grundlehren
    der Mathematischen Wissenschaften [Fundamental Principles of Mathematical Sciences],
    vol. 295. Springer, Berlin (1992), pp. xiv+508
31. do Carmo, M.P.: Differential Geometry of Curves and Surfaces. Prentice-Hall, Englewood
    Cliffs (1976), pp. viii+503
32. Doğan, G., Nochetto, R.H.: First variation of the general curvature-dependent surface energy.
    Modél. Math. Anal. Numér. 46(1), 59–79 (2012)
33. Doǧan, G., Morin, P., Nochetto, R.H., Verani, M.: Discrete gradient flows for shape optimiza-
    tion and applications. Comput. Methods Appl. Mech. Eng. 196(37–40), 3898–3914 (2007)
34. Du, Q., Liu, C., Wang, X.: Simulating the deformation of vesicle membranes under elastic
    bending energy in three dimensions. J. Comput. Phys. 212(2), 757–777 (2006)
35. Dziuk, G.: Finite elements for the Beltrami operator on arbitrary surfaces. In: Partial Differ-
    ential Equations and Calculus of Variations. Lecture Notes in Math., vol. 1357, pp. 142–155
    (1988)
36. Dziuk, G.: An algorithm for evolutionary surfaces. Numer. Math. 58(6), 603–611 (1991)
37. Dziuk, G.: Computational parametric Willmore flow. Numer. Math. 111(1), 55–80 (2008)
38. Elliott, C.M., Stinner, B.: Modeling and computation of two phase geometric biomembranes
    using surface finite elements. J. Comput. Phys. 229(18), 6585–6612 (2010)
39. Gilbarg, D., Trudinger, N.S.: Elliptic Partial Differential Equations of Second Order.
    Grundlehren der Mathematischen Wissenschaften [Fundamental Principles of Mathematical
    Sciences], vol. 224, 2nd edn. Springer, Berlin (1983), pp. xiii+513
306                                                                                 A. Bonito et al.

40. Han, Q., Lin, F.: Elliptic Partial Differential Equations. Courant Lecture Notes in Mathematics,
    vol. 1, 2nd edn. Courant Institute of Mathematical Sciences, New York (2011), pp. x+147
41. Helfrich, W.: Elastic properties of lipid bilayers—theory and possible experiments. Z.
    Nat.forsch., C J. Biosci. 28, 693 (1973)
42. Khairy, K., Foo, J., Howard, J.: Shapes of red blood cells: comparison of 3D confocal images
    with the bilayer-couple model. Cell. Mol. Bioeng. 1(2), 173–181 (2008)
43. Kornhuber, R., Yserentant, H.: Multigrid methods for discrete elliptic problems on triangular
    surfaces. Comput. Vis. Sci. 11(4–6), 251–257 (2008)
44. Lakkis, O., Nochetto, R.H.: A posteriori error analysis for the mean curvature flow of graphs.
    SIAM J. Numer. Anal. 42(5), 1875–1898 (2005)
45. Laradji, M., Mouritsen, O.G.: Elastic properties of surfactant monolayers at liquid-liquid in-
    terfaces: a molecular dynamics study. J. Chem. Phys. 112(19), 8621–8630 (2000)
46. Mekchay, K., Morin, P., Nochetto, R.H.: AFEM for the Laplace-Beltrami operator on graphs:
    design and conditional contraction property. Math. Comput. 80(274), 625–648 (2011)
47. Morin, P., Nochetto, R.H., Siebert, K.G.: Data oscillation and convergence of adaptive FEM.
    SIAM J. Numer. Anal. 38(2), 466–488 (2000)
48. Morin, P., Nochetto, R.H., Siebert, K.G.: Convergence of adaptive finite element methods.
    SIAM Rev. 44(4), 631–658 (2002)
49. Nochetto, R.H., Siebert, K.G., Veeser, A.: Theory of adaptive finite element methods: an in-
    troduction. In: Multiscale, Nonlinear and Adaptive Approximation, pp. 409–542. Springer,
    Berlin (2009)
50. Rusu, R.E.: An algorithm for the elastic flow of surfaces. Interfaces Free Bound. 7(3), 229–239
    (2005)
51. Sokołowski, J., Zolésio, J.-P.: Introduction to Shape Optimization. Springer Series in Compu-
    tational Mathematics, vol. 16. Springer, Berlin (1992)
52. Stevenson, R.: Optimality of a standard adaptive finite element method. Found. Comput. Math.
    7(2), 245–269 (2007)
53. Stevenson, R.: The completion of locally refined simplicial partitions created by bisection.
    Math. Comput. 77(261), 227–241 (2008)
54. Taylor, J.E.: Some mathematical challenges in materials science. Bull. Am. Math. Soc. (N.S.)
    40(1), 69–87 (2003)
55. Verfürth, R.: A Review of a Posteriori Error Estimation and Adaptive Mesh-Refinement Tech-
    nique. Wiley-Teubner, Chichester (1996)
56. Willmore, T.J.: Riemannian Geometry. Oxford Science Publications. The Clarendon
    Press/Oxford University Press, New York (1993), pp. xii+318
Generalized Reduced Basis Methods and
n-Width Estimates for the Approximation
of the Solution Manifold of Parametric PDEs

Toni Lassila, Andrea Manzoni, Alfio Quarteroni, and Gianluigi Rozza




Abstract The set of solutions of a parameter-dependent linear partial differential
equation with smooth coefficients typically forms a compact manifold in a Hilbert
space. In this paper we review the generalized reduced basis method as a fast com-
putational tool for the uniform approximation of the solution manifold.
   We focus on operators showing an affine parametric dependence, expressed as
a linear combination of parameter-independent operators through some smooth,
parameter-dependent scalar functions. In the case that the parameter-dependent op-
erator has a dominant term in its affine expansion, one can prove the existence of
exponentially convergent uniform approximation spaces for the entire solution man-
ifold. These spaces can be constructed without any assumptions on the paramet-
ric regularity of the manifold—only spatial regularity of the solutions is required.
The exponential convergence rate is then inherited by the generalized reduced basis
method. We provide a numerical example related to parametrized elliptic equations
confirming the predicted convergence rates.


T. Lassila · A. Quarteroni · G. Rozza (B)
MATHICSE-CMCS, Modelling and Scientific Computing, École Polytechnique Fédérale de
Lausanne, Lausanne, Switzerland
e-mail: gianluigi.rozza@epfl.ch
T. Lassila
e-mail: toni.lassila@epfl.ch
A. Quarteroni
e-mail: alfio.quarteroni@epfl.ch

A. Manzoni · G. Rozza
SISSA Mathlab, SISSA—International School for Advanced Studies, Trieste, Italy
A. Manzoni
e-mail: amanzoni@sissa.it
G. Rozza
e-mail: gianluigi.rozza@sissa.it

A. Quarteroni
MOX, Modeling and Scientific Computing, Dipartimento di Matematica, Politecnico di Milano,
Milan, Italy

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,       307
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_16,
© Springer-Verlag Italia 2013
308                                                                    T. Lassila et al.

1 Introduction

Reduced order models (ROMs) are a crucial ingredient of many applications of in-
creasing complexity in scientific computing related e.g. to parameter estimation,
sensitivity analysis, optimal control, and design or shape optimization. In this pa-
per we consider the reduced basis method for the numerical approximation of
parameter-dependent partial differential equations (μ-PDEs). The set of solutions
of such an equation depends on a finite-dimensional vector of parameters related
e.g. to physical coefficients, geometrical configuration, source terms, and boundary
conditions. Solving the μ-PDE for many different values of the parameters entails
the exploration of the manifold of solutions, and is not affordable if each μ-PDE
requires an expensive numerical approximation, such as the one built over the finite
element method. Suitable structural assumptions about the parametrization enable
one to decouple the computational effort into two stages. A (very expensive) pre-
processing step that is performed once (“offline”)—consisting in the construction of
a reduced basis for the representation of the manifold of solutions, followed by very
inexpensive calculations performed “online” for each new input-output evaluation
required. In the reduced basis method, numerical solutions for certain parameters
values are computed offline by a classical discretization technique. These solutions
give a basis for approximating online the PDE solution (for a large number of new
parameter values) as a linear combination of the basis elements. The rational of this
approach stands on the very fast (often exponential) convergence—with respect to
the number of basis—is exhibited by approximation spaces. We point out that in the
real-time or many-query contexts, where the goal is to achieve a very low marginal
cost per input-output evaluation, we can accept an increased “offline” cost—not
tolerable for a single or few evaluations—in exchange for greatly decreased “on-
line” cost for each new/additional input-output evaluation. In previous works (see
e.g. [18–20]) a priori exponential convergence with respect to the number of ba-
sis functions is proved in the case of elliptic PDEs depending on one-dimensional
parameters; several computational tests shown e.g. in [28] provide a numerical as-
sessment of this behavior, also for larger parameter space dimensions. Several new
results, such as the ones presented in [4], address an a priori convergence analysis
in the more general case where a greedy algorithm is employed to build the reduced
space in an automatic, adaptive way. A further improvement has been proposed in
[3], where an error estimate for the greedy algorithm has been developed in terms of
the Kolmogorov n-width. After recalling the basic features of a generalized version
of the reduced basis method, and the main convergence results in this field, the goal
of this paper is to provide both a convergence analysis for the greedy algorithm and
a numerical proof of this behavior, in order to extend the a priori convergence re-
sults presented in [19, 20]. To do this, we rely on the introduction of a fundamental
basis, a suitable error representation formula and an upper bound estimate for the
n-width of the solution set of an elliptic parametric PDE under suitable assumptions
on its parametric form.
    We proceed to describe the functional setting of our problems. Let Ω ⊂ Rd ,
d ∈ {1, 2, 3}, be a bounded domain and X = X(Ω) a Hilbert space of functions
RB Methods and n-Width Estimates for the Approximation of the Solution                          309
                                                                      √
defined on Ω with inner product (·,·)X and induced norm  · X = (·,·)X . We
consider the following problem: given a vector of parameters μ ∈ D from a compact
parameter set D ⊂ RP , find u(μ) ∈ X s.t.
                                 
                     a u(μ), v; μ = f (v; μ) for all v ∈ X,                   (1)

where the parameters can enter in the bilinear form a(·,·; μ) in several possible
ways: as variable coefficients, as coefficient entering in the parametrization of the
domain Ω ⊂ Rd of the problem, in the definition of the right-hand side f that
account for either forcing terms and/or boundary conditions. We denote the P -
manifold of solutions
                                                         
                          K := u(μ) ∈ X : μ ∈ D ⊂ RP

in the space X. In many applications K is a differentiable manifold. We also al-
low the case of a manifold that is not locally smooth at some isolated points,
e.g. the parametric Helmholtz equation ∇ · (a(·; μ)∇u) + u = 0, which has a
smooth solution manifold except at the eigenvalues of the parametric Laplacian,
−∇ · (a(·; μ)∇u) = λ(μ)u. We considered this problem in [17]. A typical objective
in applications is to provide a numerical approximation  u(μ) for u(μ) ∈ K that is
uniform1 over the entire manifold K. To fulfill this request, a necessary condition is
that, for any ε > 0, we find a linear subspace XN ⊂ X of dimension N s.t.
                                       
                        inf u(μ) −   uX < ε for all μ ∈ D,
                          
                          u∈XN

where the dimension N is as small as possible. The question is: how small can we
expect N to be?
   To address this question, we introduce e.g. the finite element (FE) approximation
of problem (1): given a vector of parameters μ ∈ D ⊂ RP , find uh,p (μ) ∈ Xh,p =
Xh,p (Ω) s.t.

                  a(uh,p , vh,p ; μ) = f (vh,p ; μ) for all vh,p ∈ Xh,p ,                       (2)

where Xh,p ⊂ X is a conforming FE subspace spanned by piecewise polynomial
shape functions of degree p defined on a quasi-uniform mesh of maximum ele-
ment size h. Due to classical a priori error estimates such an approximation will
eventually approximate well all the solutions on the manifold as the dimension
N := dim(Xh,p ) increases, but only for quite large N we can expect a uniformly
small error in the approximation. When X = H 1 (Ω) is the standard Sobolev space,
the classical a priori estimates for piecewise polynomial approximations are as fol-
lows [2]:

1 The other option is to consider local or sequential approximations of the manifold, such as track-

ing a path on the manifold starting from a certain point and proceeding via a continuation method.
In such cases we are usually not interested in the global behavior of the manifold.
310                                                                               T. Lassila et al.
                           
                                 − min{s−1,p}/d                with h-refinement,
       u(μ) − uh,p (μ) ≤ C(μ)N                                                               (3)
                         1   C(μ)N −(s−1−δ)/d                    with p-refinement,
where s > 1 denotes the number of weak derivatives of u(μ), and δ > 0 is arbitrarily
small. If the solution u is analytic (s = ∞), one obtains exponential convergence as
a result of p-refinement, i.e.
                                           
                     u(μ) − uh,spectral (μ) ≤ C(μ) exp(−γ N ),
                                              1

and this leads to the study of spectral methods. It should be cautioned that even
if a spectral approximation can obtain in theory exponential convergence across
the entire parameter range, the constants in front depend on both the dimension d
and the number of parameters P of the problem. The assumption of analyticity of
solutions is also often violated.
    An efficient method for the approximation of the parametric manifold K should
(i) provide exponential convergence in the dimension N of the approximation space;
(ii) have the same convergence rate irrespective of the number of parameters P ;
and (iii) entail a computational cost that scales only moderately in N . Exploiting
the structure of the manifold K is key to finding uniform approximations that sat-
isfy (i)–(iii). Our technique for proving exponentially convergent approximation es-
timates for the manifold of solutions relies on a series expansion of the solution
u(μ). Series expansion solutions, either by separation of variables or by power se-
ries expansion for PDEs with analytical coefficients, are classical tools for existence
proofs. Analytical power series expansions, such as the decomposition method of
Adomian [1], are not competitive against good numerical approximation schemes
in actually providing approximate solutions to PDEs, but they do provide an inter-
esting approach to constructing convergence estimates. The novel contribution of
this work is to consider the power series expansion method forparameter-dependent
PDEs by searching for solutions in a parametrically separable form
                                               ∞
                                 u(μ) =            Θk (μ)Ψk ,                                  (4)
                                           k=0

where the Ψk do not depend on μ and the scalar functions Θk (μ). The expansion (4)
together with standard estimates for convergent power series then provides a con-
struction of approximation spaces that are uniformly exponentially convergent over
the entire parameter range. In order to achieve separation w.r.t. to the parameters,
we must make suitable structural assumptions on the PDE. A typical assumption is
that of affine dependence on the parameter, i.e. problem (1) is assumed to be of the
form
               Qa                         Qf
                                                   f
                     Θqa (μ)aq (u, v) =            q (μ)fq (v)   for all v ∈ X,                (5)
               q=1                        q=1

where every aq : X × X → R and fq : X → R are parameter-independent bilinear
                                                          f
and linear forms respectively, whereas Θqa : D → R and Θq : D → R are scalar co-
efficient functions depending only on the parameter (but not necessary in a smooth
RB Methods and n-Width Estimates for the Approximation of the Solution            311

way). We shall next describe the generalized reduced basis method (GRBM) that,
given assumption (5), satisfies (i)–(iii). We then discuss some recent theoretical ap-
proximation results linking the best possible approximation space for K with the
convergence rate obtained by the GRBM, and exhibit a model problem where, at
least in the case we have Qa = 2 and some additional special structure on bilinear
forms aq , we indeed observe in practice the exponential convergence predicted by
theory.



2 Generalized Reduced Basis Method for Uniform
  Approximation of μ-PDEs
It is clear that the FE approximation uh,p (μ) of (1) can be made arbitrarily accurate
for all possible parameters μ ∈ D, but this usually require a considerable computa-
tional cost. In order to overcome this (sometimes unaffordable) difficulty, a possible
idea is to instead consider the manifold of discrete solutions uh,p (μ) given by
                                                         
                      Kh,p := uh,p (μ) ∈ Xh,p : μ ∈ D ⊂ RP ,

as a surrogate for K, and then to look for approximations of Kh,p that con-
verge exponentially fast (see Fig. 1 for a graphical sketch). Specifically, we con-
sider subspaces Xn ⊂ Xh,p (for n N ) that are constructed by using information
coming from the snapshot solutions uh,p (μi ) computed at well-chosen points μi ,
i = 1, . . . , n. More precisely, Xn is the span of the snapshot solutions uh,p (μi ),
i = 1, . . . , n. This leads to the Reduced Basis (RB) method [27, 28], which is, in
brief, a Galerkin projection on an n-dimensional approximation space relying on
the parametrically induced manifold Kh,p . Assuming that the solutions uh,p satisfy
the a priori convergence estimate (3) and that the approximation un (μ) converges
exponentially to uh,p (μ), we can write the total error of the reduced solution as
                                                                     
           u(μ) − un (μ) ≤ u(μ) − uh,p (μ) + uh,p (μ) − un (μ)
                              X                     X                       X

                              ≤ C(μ) N − min{s−1,p}/d + exp(−γ n) ,

and for N sufficiently large the exponential term in n dominates the error. The addi-
tional strength of this method is that in the best case we only need to solve n times
the FE problem for uh,p , and that the solution for un (μ) can be done with complex-
ity depending on n but not N after some initial preprocessing steps, so that indeed N
can be chosen fairly large in order to obtain highly accurate reduced order solutions.
    For notational simplicity we present here the case P = 1 and formulate the RB
method in a slightly more general form than usually given. It can be expressed in
three distinct steps:
 (i) Choice of the reduced subspace. The basic idea of every reduced basis
     method is to choose a finite training sample Ξtrain ⊂ D, |Ξtrain | = M, in the
312                                                                               T. Lassila et al.




Fig. 1 (a) Low-dimensional manifold Kh,p on which the field variable resides and (b) approxi-
mation of a new solution at μnew with the “snapshots” uh,p (μm ), 1 ≤ m ≤ n



      parameter space and to use the information contained in the corresponding so-
      lutions uh,p (μ) for each μ ∈ Ξtrain (called snapshots) to find a representative
      subspace for the approximation of the manifold Kh,p . The reduced subspace
      Xn of dimension n is found by solving [28]
                                                                             
                          Xn :=          arg inf             δ X ∗ , Kh,p ; X                  (6)
                                  X ∗ ⊂Xtrain ,dim(X ∗ )=n

      where Xtrain := span{uh,p (μ) : μ ∈ Ξtrain } is the space containing all the snap-
      shots, and the function X ∗ → δ(X ∗ , Kh,p ; X) ∈ R measures the distance be-
      tween any subspace X ∗ ⊂ X and the manifold Kh,p and is defined by

                          δ(Xn , Kh,p ; X) := sup             inf u − 
                                                                       u X .
                                                  u∈Kh,p 
                                                         u∈Xn


      Since the exact distance of the subspace to the manifold is usually unknown, we
      must resort to computable surrogates to solve (6). Nonetheless, we mention that
      the exact distance is used in the so-called strong greedy algorithm introduced in
      [3] for the theoretical analysis of convergence rates of reduced basis methods.
      Thus we replace (6) with
                                                             
                           Xn :=        arg inf       MKh,p X ∗ ,                   (7)
                                   ∗             ∗
                                  X ⊂Xtrain ,dim(X )=n

      where X ∗ → MK (X ∗ ) ∈ R is an approximate distance between any subspace
      X ∗ ⊂ X and the manifold Kh,p . The choice of the function MK to be used
      for the approximation of δ(·,·; ·) defines which algorithm we use to choose
      the subspace. This is by far the most common way of constructing reduced
      subspaces, and we call these approaches Lagrange ROMs. In the GRBM we
      consider also the parametric sensitivities up to a suitable order, say K − 1 (with
      K ≥ 1) as part of the snapshot set
                               k
                               ∂ uh,p
                Xtrain := span        (μ) : μ ∈ Ξtrain , k = 0, . . . , K − 1 ,
                                ∂μk
RB Methods and n-Width Estimates for the Approximation of the Solution                         313

     giving a total number of MK snapshots. They can be computed from the dis-
                                                            ∂ k uh,p
     crete sensitivity equation(s): find wk (μ) =             ∂μk
                                                                     (μ) ∈ Xh,p s.t.

                                                            k           
                            ∂kf                                 k         ∂ a               
          a wk (μ), vh,p ; μ =     (vh,p ; μ) −                                 wk−l (μ), vh,p
                               ∂μk                               k−         ∂μ
                                                            =1
             for all vh,p ∈ Xh,p ,                                                             (8)

     for all k = 1, . . . , K. Only the right-hand side of the system changes with k and
     thus any preconditioners or matrix decompositions used for the primal problem
     can be reused. The information contained in these snapshots is then used to
     build the reduced space Xn with dimension dim Xn = n MK in what can
     also be understood as a data compression problem. If K = 2 and M > 1 we
     have a Hermite ROM,2 and if K > 1 and M = 1 we have a Taylor ROM.3
        Two standard choices for MK are:
     1. the proper orthogonal decomposition (POD), where

                                      1
                                          M
                                                                         
                       MK (Xn ) =               uh,p (μi ) − ΠX uh,p (μi ) 2 ,               (9)
                                                                    n                  X
                                      M
                                          i=1

         and ΠXn : X → Xn is the orthogonal projection w.r.t. the inner product
         of X. In this case, we choose the basis by minimizing the 2 (Ξtrain ) er-
         ror in parameter space. It turns out that the optimal bases are hierarchical
         and are spanned by the leading n eigenvectors of the correlation matrix

                           1                                 
                   Cij =      uh,p (μj ) − ū, uh,p (μi ) − ū X ,           1 ≤ i, j ≤ M,
                           M

         where we have subtracted the mean of the snapshots

                                                     M
                                                 1
                                          ū =             uh,p (μ̄).
                                                 M
                                                     i=1



2 Ito and Ravindran [16] were perhaps the first ones to suggest using a Hermite ROM in a uniform

approximation context, rather than in a pure continuation method. The Lagrange and Hermite
ROMs were compared on a driven cavity problem, where the Hermite approach was somewhat
superior. No stability problems were reported and the Hermite basis with only two basis functions
was able to extrapolate solutions to much larger Reynolds numbers.
3 In one of the pioneering works on RBM, Noor [24] used a Taylor ROM to build a local reduced

space that was used to trace the post-buckling behavior of a nonlinear structure. The continuation
idea was used also by Peterson [25] to compute Navier-Stokes solutions with increasing Reynolds
number flow over a forward facing step. Again a Taylor ROM was constructed and used to extrap-
olate an initial guess for the Newton method at a slightly higher Reynolds number.
314                                                                                     T. Lassila et al.


                                   j =1 of C (with the eigenvalues ordered in the de-
         The eigenpairs (λj , ψ j )M
         creasing order) are the solutions of

                                Cψ j = λj ψ j ,        j = 1, . . . , |Ξtrain |.

         Then, the optimal basis for the n-th dimensional space Xn generated by
         minimizing (9) is given by
                                            M
                                                                        
                  χ0 = ū,           χj =         [ψ j ]i uh,p (μi ) − ū ,        1 ≤ j ≤ n,
                                            i=1

         being [ψ j ]i the i-th component of the j -th eigenvector. Extensions of the
         standard POD basis to incorporate parametric sensitivities (8) were pre-
         sented in [6, 12, 13] and are not discussed in detail here;4,5
      2. the greedy algorithm, where
                                                                     
                       MK (Xn ) = sup uh,p (μi ) − ΠXn uh,p (μi ) X             (10)
                                      μ∈Ξtrain

         i.e. minimization of the ∞ (Ξtrain ) error in parameter space. In practice
         no efficient algorithm exists to solve (6) for large-scale problems, so we
         approximate it by its relaxation
                                                            
                                 MK (Xn ) = sup Δn      u(μ)                   (11)
                                                     μ∈Ξtrain

         where Δn ( u(μ)) is a computationally inexpensive a posteriori error estima-
         tor for the quantity uh,p (μ) − 
                                          u(μ)X that should satisfy
                                                          
               C1 Δn  u(μ) ≤ u(μ) −   u(μ)X ≤ C2 Δn  u(μ) , ∀μ ∈ D            (12)

         for some constants C1 > 0, C2 ≥ 1. This corresponds to the approximate
         minimization of the ∞ (Ξtrain ) error in parameter space. In this case we
         have a weak greedy algorithm as defined in [3].

4 In the works of Hay et al. [12, 13] sensitivity information was introduced into the proper or-

thogonal decomposition framework. The parametric sensitivities of the POD modes were derived
and computed. The test problems were related with channel flow around a cylindrical obstacle,
either by using a simple parametrization as the Reynolds number, or a more involved geometric
parametrization of the obstacle. The use of a Hermite ROM considerably improved the validity of
the reduced solutions away from the parametric snapshots. However, in the more involved geomet-
rical parametrization case the Hermite ROM failed completely, as it did not converge to the exact
solution even when the number of POD modes was increased.
5 Carlberg and Farhat [6] proposed an approach they call “compact POD”, based on goal-oriented

Petrov-Galerkin projection to minimize the approximation error subject to a chosen output criteria,
and including sensitivity information with proper weighting coming from the Taylor-expansion and
including “mollification” of basis functions far away from the snapshot parameter. The application
was the optimization of an aeroelastic wing configuration by building local ROMs along the path
to the optimal wing configuration.
RB Methods and n-Width Estimates for the Approximation of the Solution                    315

     Note that while conceptually the POD and the greedy algorithms can be cast
     in a similar framework, their practical implementations are quite different. The
     training set Ξtrain ⊂ D needs to be reasonably dense in the parameter space for
     MKh,p (X ∗ ) to be a good approximation of the true distance δ(X ∗ , Kh,p ; X)
     for all subspaces X ∗ ⊂ X. In the POD one needs to compute the FE approxi-
     mations uh,p (μ) for all the points in Ξtrain , which amounts to a considerable
     computational undertaking. In contrast, the weak greedy algorithm only needs
     to compute the exact solutions (and their parametric derivatives) at the n snap-
     shots comprising the RB and only the computationally inexpensive a posteriori
     estimator Δn (un (μ)) needs to be evaluated over the entire training set. The dif-
     ference in the norms used ( ∞ for the greedy vs. 2 for the POD) also results in
     slightly different approximation behavior of the resulting bases. Typically the
     POD basis needed to reach a given tolerance is smaller in size but tends to be
     not as robust far away from the snapshots (see e.g. [28, 29]).
(ii) (Petrov-)Galerkin projection of the equations. In the second step we perform
     projection of the original problem onto the reduced trial subspace Xn using
     the reduced test subspace Yn to obtain the reduced basis approximation: find
     un (μ) ∈ Xn s.t.

                                      
                       a un (μ), vn ; μ = f (vn ; μ) for all vn ∈ Yn ,                   (13)

     where Xn = span{ϕj }nj=1 and Yn = span{ψj }nj=1 . If Yn = Xn this is a pure
     Galerkin method, otherwise it is a Petrov-Galerkin method. The Petrov-
     Galerkin approach is adopted if the underlying system is either nonsymmetric
     or noncoercive and can be interpreted as a form of stabilization of the ROM.
     Applying the assumption (5) to (13) leads to the discrete system

                              Qa                       Qf
                                                              f
                                    Θqa (μ)Anq U n =         Θq (μ)Fqn                   (14)
                              q=1                      q=1


     where the matrices and vectors

          Anq i,j := aq (ϕj , ψi ),     Fqn i := Fq (ψi ),        U n the reduced solution,
         n×n                                                      n×1
                                        n×1
                                                                                 (15)
     are dense but only of dimension n and more importantly can be assembled once
     and then stored. The system (14) is then assembled by evaluating the coefficient
                       f
     functions Θqa , Θq and summing together the weighted contributions from all
     the parts of the decomposition, and solving one small dense linear system.
     Assuming all the FE degrees of freedom are nodal, we can write the discrete
316                                                                          T. Lassila et al.

      projectors
                         [ Xn ]i,j := ϕj (xi ),     [ Yn ]i,j := ψj (xi )               (16)
                          N ×n                      N ×n

      where xi are the nodal points in the full space XN . The discrete matrices and
      vectors (15) can then be obtained as

                                Anq = Yn Aq XTn ,    Fqn = Yn Fq ,

      and the approximation of the solution uN (μ) is obtained as un (xi ) = [XTn Un ]i
      for i = 1, . . . , N . From here on we use mainly the discrete forms of the equa-
      tions.
(iii) Certification of the ROM with error bounds. A posteriori error bounds are
      used to both (i) certify the GRBM solution during the online stage, and (ii) con-
      struct the reduced space by means of the weak greedy algorithm. For the sake of
      simplicity we treat the case of linear, elliptic and coercive μ-PDEs—extensions
      to noncoercive and nonlinear problems can be found in [5, 8, 11, 21, 30]. Our
      error bounds rely on two basic ingredients: the dual norm of the residual and
      a lower bound of the stability factor (in this case, of the parameter-dependent
      coercivity constant). The residual r(v; μ) ∈ Xh,p    is defined as
                                                        
                      r(v; μ) ≡ f (v; μ) − a un (μ), v; μ ,      ∀v ∈ Xh,p              (17)

      so that exploiting (2) and the bilinearity of a(·, ·; μ) we have the error repre-
      sentation for e(μ) = uh,p (μ) − un (μ) ∈ Xh,p given by
                                      
                           a e(μ), v; μ = r(v; μ), ∀v ∈ Xh,p .                     (18)

      As a second ingredient, we need a positive lower bound αhLB (μ) for the (dis-
      crete) coercivity constant αh (μ):

                                                    a(w, w; μ)
                   0 ≤ αhLB (μ) ≤ αh (μ) := inf                ,      ∀μ ∈ D,           (19)
                                              w∈Xh,p w2
                                                         Xh,p

      whose efficient evaluation as a function of μ is made possible thanks to the
      so-called successive constraint method (see e.g. [14, 15, 17] for a general de-
      scription of this procedure). By combining (18) with 19 and using the Cauchy-
      Schwarz inequality, the following a posteriori error estimate in the energy
      norm holds (see [28] for a proof):
                              −1/2 r(u (μ); μ) 
                    γa (μ)              n          Xh,p                    
                                                       ≤ un (μ) − uh,p (μ)X
                   αhLB (μ)               αhLB (μ)
                                                           r(un (μ); μ)Xh,p
                                                                          
                                                       ≤                     ,         (20)
                                                                 αhLB (μ)
RB Methods and n-Width Estimates for the Approximation of the Solution                     317

     so that expression (12) is now made explicit, being
                       r(un (μ); μ)Xh,p
                                      
                                                                              −1/2
                                                                     γa (μ)
           Δn (μ) :=                     ,         C1 := inf                          ,
                             αhLB (μ)                      μ∈D      αhLB (μ)

               C2 := 1.



3 Approximation Theoretical Basis for the Generalized Reduced
  Basis Method
We now turn to the convergence analysis of approximations in the reduced sub-
spaces that are obtained by (7) and the choice (11) for MKh,p . We recall some recent
theoretical results and provide an extension through an exponential convergence re-
sult. To do this, we rely on the introduction of a fundamental basis and on an intu-
itive error representation formula, which will be exploited in the numerical example
discussed in the following section. We define the best approximation error of Kh,p
obtained by the greedy algorithm (6) as
                                                                  
                σn (Kh,p ; X) := sup       inf uh,p − ΠXn (uh,p )X .
                                  uh,p ∈Kh,p 
                                             u∈Xn


A priori convergence estimates for reduced basis approximations have been demon-
strated in simple cases, such as in [19], where it was found that for a specific problem
exponential convergence was achieved
                                               
                   σn (Kh,p ; X) ≤ C exp −nα , for some α > 0.

Recently much interest has been devoted to understanding why the weak greedy
method (11) is able to give an approximation space Xn that exhibits exponential
convergence in n. To express how well we are able to uniformly approximate a given
manifold of solutions Kh,p with a finite-dimensional subspace, we recall the notion
of n-width [22, 26] that is used to measure the degree in which we can uniformly
approximate a subset of the space X using finite-dimensional subspaces Xn . The
Kolmogorov n-width is defined as

                  dn (Kh,p ; X) := inf        sup     inf uh,p − 
                                                                  uX                      (21)
                                    Xn ⊂X uh,p ∈Kh,p 
                                                     u∈Xn


where the first supremum is taken over all linear subspaces Xn ⊂ X of dimension n.
We also define the discrepancy between the subspace Xn and the manifold Kh,p as

                    δ(Xn , Kh,p ; X) =     sup      inf uh,p − 
                                                                u X .
                                         uh,p ∈Kh,p 
                                                    u∈Xn


The subspace Xn is said to be optimal if δ(Xn , Kh,p ; X) = dn (Kh,p ; X). In general,
the optimal subspace w.r.t. the Kolmogorov n-width (21) is not spanned by elements
318                                                                       T. Lassila et al.

of the set Kh,p being approximated, so that possibly dn (Kh,p ; X)       σn (Kh,p ; X).
In the recent work [3] it was shown that

                                         2n+1
                         σn (Kh,p ; X) ≤ √ dn (Kh,p ; X),
                                           3
and that this estimate cannot in general be improved. However, it was also
shown that if the n-width converges at an exponential rate, say dn (Kh,p ; X) ≤
                                      c > 0, then
C exp(−cnβ ) for all n > 0 and some C,
                                                      
                                        exp −αnβ/(β+1) .
                       σn (Kh,p ; X) ≤ C                                    (22)

A tighter estimate was proved for the case of algebraic convergence: if
dn (Kh,p ; X) ≤ CMn−α for all n > 0 and some M, α > 0, then also

                              σn (Kh,p ; X) ≤ CMn−α .                                (23)

    The fast (exponential) convergence of numerical approximations is often linked
to spectral approximations. In this way, the reduced basis method can be understood
as a spectral method, where instead of using generic global polynomial basis func-
tions we use problem-dependent global smooth approximation basis. The analyticity
of the solutions of elliptic PDEs was exploited e.g. in a recent work [7] in the special
case where Kh,p is an analytic manifold. Using complex analysis techniques and a
Taylor expansion approximation of the solution uh,p and its parametric derivatives
wm,k for k = 1, 2, . . ., the authors obtained a convergence rate for a reduced basis
approximation as
                                         
                         uh,p (μ) − 
                                     u(μ)X ≤ C(μ)n−(1/p−1) ,

where 0 < p < 1 is the p -summability exponent of a sequence related only to the
diffusion coefficients of the problem. In particular, the convergence rate was inde-
pendent of the spatial dimension d and the number of parameters P . In general,
the reduced basis approximation of solutions of elliptic equations with regular co-
efficients has indeed been very successful. We would however like to convince the
reader that analytic regularity of the solution manifold Kh,p is not necessary in order
to successfully apply the reduced basis method.
    Unfortunately, very little seems to be known about the n-width of manifolds of
solutions of μ-PDEs. Very specific results concern special subspaces [10, 23]. For
instance, if Y ⊂ X is a dense, compactly embedded, and bounded subspace with
inner product (·,·)Y then the n-width of a ball BY ⊂ Y ⊂ X of finite radius is
                                                
                                 dn (BY ; X) = λn+1 ,

where λn are the eigenvalues of the problem
                            
                              λ ∈ R, u ∈ V , u = 0,
                              (u, v)Y = λ(u, v)X
RB Methods and n-Width Estimates for the Approximation of the Solution                     319

sorted in descending order (see [10], Theorem 4.5). We then obtain an algebraic
decay rate for the n-width of BY

                                 dn (BY ; X) = Cn−s/d ,

where s ≥ 1 similarly to (3). Provided that Kh,p ⊂ BY we obtain also an upper
bound for the n-width of Kh,p , since then dn (BY ; X) ≥ dn (Kh,p ; X), consequently
only algebraic convergence of the reduced basis method is predicted by (23). Such
results can be misleadingly pessimistic compared to practical experiences with re-
duced basis methods because they do not take into account the structure of the man-
ifold Kh,p nor the fact that approximation (4) inherits in some sense the structure of
the manifold Kh,p .



4 An Extended Result of Exponential Convergence

Let us now give an example of a μ-PDE where the explicit dependence of the so-
lution manifold on the parameters can be exhibited. Let us consider the parameter-
dependent problem after discretization:
                                                      Qf
                      a                                     f
                      Θ1 (μ)A1 + Θ2a (μ)A2 u =              Θq (μ)Fq .                     (24)
                                                      q=1

We assume that (i) the operator A1 is invertible; (ii) the problem satisfies a global
condition for the spectral radius ρ being
                                        
                         Θ2a (μ) −1
                     ρ           A A2 < 1 for all μ ∈ D,                         (25)
                         Θ1a (μ) 1

which we interpret as meaning that the term Θ1a (μ)A1 dominates the original differ-
ential operator. Such a problem can arise for example from a discretized advection-
diffusion or reaction-diffusion problem, where A1 contains the (dominant) diffusion
operator and A2 contains all the other terms. We proceed to write explicitly the so-
lution of this problem as
                                       −1                    Qf                  
                  Θ a (μ) −1                          −1               f
           u = I + 2a    A A2                 Θ1 (μ)A1                  Θq (μ)Fq       ,
                  Θ1 (μ) 1
                                                                  q=1

which by exploiting the global spectral condition (25) leads to the series expansion
for the solution
                       ∞ Qf                      f
                                (−1)k Θ2k (μ)Θq (μ)
                                                       A−1    −1   k
                 u=                                     1 A2 A1 Fq .
                      k=0 q=1
                                     Θ1k+1 (μ)
320                                                                               T. Lassila et al.

By defining the fundamental basis vectors Ψk,q := [A−1                    k −1
                                                                  1 A2 ] A1 Fq , for k =
0, 1, . . . and q = 1, . . . , Qf , we can write the solution as a series


                            ∞ Qf                            f
                                     (−1)k [Θ2a (μ)]k Θq (μ)
                      u=                                     Ψk,q .                          (26)
                                         [Θ1a (μ)]k+1
                           k=0 q=1



Several remarks can be made about formula (26):

1. In the special case A2 = 0 the parametric dependence enters only through the
   r.h.s. and as a consequence the series (26) truncates to a finite one

                                        Qf      f
                                              Θq (μ)
                                   u=                 Ψ0,q ,                                 (27)
                                              Θ1a (μ)
                                        q=1



   and so the greedy algorithm will always terminate after Qf steps.
2. If the decay of the series coefficients in (26) is rapid, the solutions u can be
   well approximated by only the first few fundamental basis functions Ψk,q , k =
   0, 1, . . . , K and q = 1, . . . , Qf . They can be computed according to an iterative
   procedure


          Ψ0,q = A−1
                  1 Fq ,        Ψk+1,q = A−1
                                          1 A2 Ψk,q             for all q = 1, . . . , Qf


   requiring at each step one matrix multiplication and one backward substitution
   after obtaining once and for all the LU-decomposition of A1 .
3. In general the Ψk,q are not linear combinations of solutions of (24) so that they
   do not constitute a reduced basis approximation. They are, however, useful for
   estimating the n-width of the solution set. Provided that there exist positive se-
   quences {γk,q }∞
                  k=1 s.t. Ψk,q X ≤ γk,q for each q = 1, . . . , Qf , we obtain an
   upper bound estimate for the n-width of the solution set U of (24)


                                         ∞ Qf                        
                                                  [Θ2a (μ)]k Θqf (μ) 
                    dm (U; X) ≤ sup                                                        (28)
                                                  [Θ a (μ)]k+1 γk,q
                                  μ∈D k=n q=1           1



   by using the definition of the n-width, estimating upwards, and using formula
   (26) as
RB Methods and n-Width Estimates for the Approximation of the Solution                      321



                                                                   
                                           uX ≤ sup inf uh,p (μ) − 
       dm (U; X) = inf sup inf uh,p (μ) −                          uX
                     Xm ⊂X μ∈D 
                               u∈Xm                            μ∈D 
                                                                   u∈Xm
                                                                      Ψ

                                                                       
                                   n−1 Qf                   f
                                           (−1)k [Θ2a (μ)]k Θq (μ)      
                                                                       
                  ≤ sup uh,p (μ) −                                Ψk,q 
                    μ∈D                       [Θ  a
                                                   1 (μ)]k+1            
                                        k=0 q=1                                     X
                         ∞ Qf                               
                                                f
                               (−1)k [Θ2a (μ)]k Θq (μ)       
                                                            
                  = sup                               Ψ k,q 
                    μ∈D    k=n q=1
                                   [Θ1a (μ)]k+1              
                                                                          X

                           ∞ Qf                        
                                    [Θ2a (μ)]k Θqf (μ) 
                  ≤ sup                                
                                    [Θ a (μ)]k+1 Ψk,q X ,
                     μ∈D k=n q=1            1


   where m := Qf · n and Xm    Ψ := span{Ψ
                                           k,q : k = 0, . . . , n − 1, q = 1, . . . , Qf }, i.e.
   the first m fundamental basis vectors. We have in fact decomposed the descrip-
   tion of the manifold of solutions U into two parts: the parametric regularity is
   carried by the coefficients Θ1 , Θ2 , Θq , which can be taken just in L∞ (D) with-
                                          f

   out affecting the n-width, and the spatial regularity, which is contained in the
   norm estimates γk,q for the fundamental basis functions.
4. If the solution of (24) is approximated by the projection-based ROM in (14), i.e.
                                                              Qf
                                                                      f
                  Yn Θ1a (μ)A1 + Θ2a (μ)A2 XTn Un =                 Θq (μ)Yn Fq ,
                                                             q=1

   where the projectors were defined in (16), we obtain a similar formula for the
   reduced solution
                                  ∞ Qf                          f
                                            (−1)k [Θ2a (μ)]k Θq (μ) n
                       un (μ) =                                    Ψk,q ,
                                                [Θ1a (μ)]k+1
                                  k=0 q=1

                                                         n defined as
   but now with the reduced fundamental basis functions Ψk,q
                          −1                                    −1
           n
          Ψ0,q = Yn A1 XTn     Y n Fq ,          n
                                                Ψk+1,q = Yn A1 XTn     Yn A2 XTn Ψk,q
                                                                                  n
                                                                                      .

   As a result, we obtain immediately the error representation formula

                                        ∞ Qf                         f
                                                   (−1)k [Θ2a (μ)]k Θq (μ)                 
   εn (μ) :=   uh,p − XTn un (μ) =                                          Ψk,q − XTn Ψk,q
                                                                                        n
                                                                                             .
                                                       [Θ1a (μ)]k+1
                                       k=0 q=1

   Thus the quality of the ROM can directly be measured by observing how well it
   approximates the fundamental basis vectors, i.e. by looking at Ψk,q −XTn Ψk,q
                                                                              n 
                                                                                  X
   for all k and q.
322                                                                          T. Lassila et al.

5. Even if the global spectral condition (25) does not hold, we can try to expand the
   solution locally around different μ∗ and obtain local approximation bases. This
   leads one to consider the hp-reduced basis method [9], where different reduced
   bases (analogous to p-refinement in the FEM) are constructed at different parts of
   the parameter domain (analogous to h-refinement in the FEM). Let D1 , . . . , DM
   be a nonoverlapping subdivision of the original parameter domain D into M
   subdomains. The local spectral condition requires that in each subdomain Dm

                       Θja(m) (μ)              
      ∃i(m) :      ρ    a (μ)       A−1
                                     i(m) j (m) < 1
                                         A            for all μ ∈ Dm , for j (m) = i(m),
                       Θi(m)

   that is to say in each parameter subdomain Dm one of the terms Aq dominates,
   but the dominant part of the operator can change from subdomain to subdomain.
   If such a local spectral condition holds, our results extend straightforwardly to
   show the existence of local exponentially convergent approximation spaces.
   With the n-width estimate (28) we can give an exponential convergence result
extending that of [19]:

Proposition 4.1 Assume that the series (26) converges, so that
                                  
                           Θ2 (μ)       1−ε
             ∃ε > 0 s.t.         ≤                for all μ ∈ D.                     (29)
                                   
                            Θ1 (μ)      A−1
                                           1 A2 X

Then the n-width of the solution set U of (24) converges exponentially, i.e.

                          dn (U; X) ≤ Ce−αn     for some C, α > 0.                      (30)

Proof The n-width upper bound (28) gives for m = n · Qf

                            ∞ Qf                         
                                      [Θ2a (μ)]k Θqf (μ)  −1 k −1 
      dm (U; X) ≤ sup                                               
                                      [Θ a (μ)]k+1  A1 A2 A1 Fq X
                       μ∈D k=n q=1        1
                               f                ∞             
                                Θq (μ)  −1        [Θ2a (μ)]k  −1 k
                   ≤ Qf · sup         A Fq  ·                    
                                                      [Θ a (μ)]k  A1 A2 X
                          μ,q    Θ1 (μ)  1     X
                                                         1
                                                         k=n
                               f                         ∞
                                Θq (μ)  −1 
                   = Qf · sup         A Fq  · (1 − ε)n   (1 − ε)k
                          μ,q    Θ (μ) 
                                      1
                                           1    X
                                                                   k=0
                              f                                 
                                Θq (μ)  −1 
                   =
                     Qf
                        · sup         A Fq  · exp log(1 − ε) m ,
                      ε μ,q Θ1 (μ)  1          X         Qf
                                                                                       Qf
so that the result holds with α = − log(1 − ε)/Qf                        and C =        ε    ·
           f
supμ,q {| Θ1 (μ) |A−1
          Θq (μ)
                    1 Fq X }.                                                              
RB Methods and n-Width Estimates for the Approximation of the Solution                             323

   Exponential convergence of the greedy reduced basis algorithm is then predicted
by [3] as in (22). It should be understood that tight n-width estimates for the rate
of exponential convergence cannot be obtained by such series expansions—indeed
the coefficient α will tend to 0 if we let ε → 0. The factor 1/Qf in the exponential
is also excessively pessimistic provided that not for all q the terms converge at
the same rate. In the next section we will demonstrate a problem where much faster
exponential convergence of the greedy algorithm is observed, even in the parametric
region when the fundamental series no longer converges rapidly.
   To close this section let us briefly consider the more general case Qa > 2:
                                 Q
                                                     Qf
                                             a
                                                                             f
                      Θ1a (μ)A1 +                Θra (μ)A2 u =             Θq (μ)Fq .              (31)
                                        r=2                          q=1

If the global spectral condition
                              Q                                 
                                         a
                                                 Θra (μ) −1
                                 ρ                      A Ar         < 1,                          (32)
                                                 Θ1a (μ) 1
                                       r=2

is satisfied, we can write the solution as
                    Qa
                                        −1                Qf         
                         Θra (μ) −1          a       −1       f
          u= I +                A Ar         Θ1 (μ)A1          Θq (μ)Fq ,
                         Θ1a (μ) 1
                      r=2                                                    q=1

and applying (32) leads to
            ∞                Q             k     Qf          
                                a
                    (−1)k                −1     −1        f
      u=                           a
                                  Θr (μ)A1 Ar A1         Θq (μ)Fq
                 [Θ1a (μ)]k+1
                k=0                     r=2                                      q=1

and finally
                                     ∞ Qf                    f
                                                  (−1)k Θq (μ)
                            u=                                  Ψk,q (μ),                          (33)
                                                   [Θ1a (μ)]k+1
                                     k=0 q=1

but now the fundamental basis vectors
         Ψ0,q = A−1
                 1 Fq ,
                    Q                                  
                             a
         Ψk+1,q (μ) =             Θra (μ)A−1
                                          1 Ar              Ψk,q (μ)   for all q = 1, . . . , Qf   (34)
                            r=2

depend explicitly on the parameter(s) μ. Let ρ (k) = (ρ1 , ρ2 , . . . , ρk ) be a multi-
index of dimension k and let ρ (0) = ∅. We define a set of parameter-free basis func-
tions ϕk,q,ρ according to the recursion

              ϕ0,q,ρ (0) = A−1
                            1 Fq ,               ϕk+1,q,ρ (k+1) = A−1
                                                                   1 Aρk+1 ϕk,q,ρ (1:k) .
324                                                                                   T. Lassila et al.

Using the parameter-free basis we can rewrite the recursion of the fundamental basis
(34) as
           ⎧
           ⎪
           ⎪    Ψ0,q = ϕ0,q,r (0) ,
           ⎪
           ⎪
           ⎪
           ⎪             Qa                         Qa
           ⎪
           ⎪                          −1
           ⎪
           ⎪ Ψ1,q (μ) =      Θr (μ)A1 Ar Ψ0,q =
                               a
                                                       Θra (μ)ϕ1,q,(r) ,
           ⎪
           ⎪
           ⎪
           ⎪            r=2                        r=2
           ⎪
           ⎪
           ⎪
           ⎪
                         Qa
           ⎪
           ⎪ Ψ2,q (μ) =      Θra (μ)A−1
           ⎪
           ⎪                          1 Ar  Ψ1,q
           ⎪
           ⎪             
           ⎨            r =2
                             Qa Qa
           ⎪
           ⎪         =              Θra (μ)Θra (μ)A−1   1 Ar  ϕ1,q,(r)
           ⎪
           ⎪
           ⎪
           ⎪           r  =2 r=2
           ⎪
           ⎪
           ⎪
           ⎪
                        Qa Qa
           ⎪
           ⎪         =              Θra (μ)Θra (μ)ϕ2,q,(r  ,r) ,
           ⎪
           ⎪
           ⎪
           ⎪           r  =2 r=2
           ⎪
           ⎪
           ⎪
           ⎪             Qa         Qa
           ⎪
           ⎪
           ⎪
           ⎪ Ψ   (μ) =        . . .      Θra1 (μ) . . . Θrak (μ)ϕk,q,(rk ,rk−1 ,...,r1 )
           ⎩ k,q
                            r1 =2     rk =2

and so the kth level expansion for Ψk,q will contain in general (Qa − 1)k terms, and
the size of the expansion blows up exponentially. Without some strong structural
assumptions the series expansion method is not suitable for deriving exponentially
decaying n-width estimates in the case Qa  1.



5 Numerical Example of a Parameter-Dependent Diffusion
  Problem

In this section we shall give numerical evidence of exponential convergence of
n-width upper bounds and consequently of the GRBM approximation. As a test
problem we consider a diffusion problem in a disk with four circular subregions
Ω1 , . . . , Ω4 as depicted in Fig. 2. The parametric problem can be formulated as
follows: given μ ∈ D ⊂ R8 , find u = u(μ) s.t.
                                                                   4
                          −(1 + μ1 Iω )u = μ4 IΩ\ω +                  μq+4 IΩq       in Ω,
                                                                 q=1
                                         ∂u                   ∂u
        u= 1      on Γ1 ∪ Γ4 ,              = μ2       on Γ2 ,   = μ3 on Γ3
                                         ∂n                   ∂n
                                                              
where the Γk denote the four sides of the square, and ω := 4q=1 Ωq is the union of
the disks. The function IΩ denotes the characteristic function of the subdomain Ω.
Thus the first parameter μ1 controls the difference between the isotropic diffusion
coefficient inside the disks versus the background conductivity, while the rest of the
parameters μ2 , . . . , μ8 enter into the boundary conditions and the source terms.
RB Methods and n-Width Estimates for the Approximation of the Solution            325

Fig. 2 Schematic description
of the domain and boundary
conditions of the model
problem




   This problem exhibits the same properties as the case discussed in the previous
Sect. 4 so that the solution can be written as the combination of the fundamental
basis vectors thanks to the formula (26). In this case the affine expansion (5) of the
problem is given by:
                 ⎧                                 
                 ⎪
                 ⎪    a
                            =                    =     ∇u · ∇vdΩ,
                 ⎪
                 ⎪  Θ   (μ)   1,      a 1 (u, v)
                 ⎪
                 ⎪
                      1
                                                   
                 ⎪
                 ⎪
                                                     Ω
                 ⎪
                 ⎪
                 ⎪
                 ⎪  Θ2a (μ) = μ1 ,    a2 (u, v) = ∇u · ∇vdΩ,
                 ⎪
                 ⎪                                ω
                 ⎪
                 ⎪
                 ⎪
                 ⎪    f
                            =                 =
                 ⎪
                 ⎪  Θ   (μ)    μ 2 ,  f 1 (v)        vdΩ,
                 ⎪
                 ⎪
                      1
                                                 Γ2
                 ⎪
                 ⎪
                 ⎪
                 ⎪    f
                    Θ2 (μ) = μ3 ,     f2 (v) =
                 ⎪
                 ⎪                                   vdΩ,
                 ⎪
                 ⎪                               Γ3
                 ⎨
                      f
                    Θ3 (μ) = μ4 ,     f3 (v) =         vdΩ,
                 ⎪
                 ⎪                               Ω\ω
                 ⎪
                 ⎪
                 ⎪
                 ⎪    f
                    Θ4 (μ) = μ5 ,     f4 (v) =
                 ⎪
                 ⎪                                   vdΩ,
                 ⎪
                 ⎪                               Ω1
                 ⎪
                 ⎪
                 ⎪
                 ⎪    f
                    Θ5 (μ) = μ6 ,     f5 (v) =
                 ⎪
                 ⎪                                   vdΩ,
                 ⎪
                 ⎪                               Ω2
                 ⎪
                 ⎪
                 ⎪
                 ⎪    f
                    Θ6 (μ) = μ7 ,     f6 (v) =
                 ⎪
                 ⎪                                   vdΩ,
                 ⎪
                 ⎪                               Ω3
                 ⎪
                 ⎪
                 ⎪
                 ⎪    f
                 ⎩ Θ7 (μ) = μ8 ,      f7 (v) =       vdΩ,
                                                    Ω4

so that Qa = 2, Qf = 7, and the problem satisfies the global spectral condition (25)
provided that μ1 ∈ [−(1 − ε), 1 − ε] for some ε > 0.
   In order to compare the n-width bounds with the observed convergence rates of
the weak greedy algorithm, we considered four different cases: ε = 0.1, ε = 0.5,
ε = 0.9, and ε = 0.95. Note that if ε = 1, the manifold of parametric solutions
326                                                                                T. Lassila et al.




Fig. 3 Convergence of the fundamental series (26) coefficients for different values of ε in (29)


dimension is limited to a Qf -dimensional subspace of X as indicated by (27), and
so the greedy terminates after exactly 7 iterations. In Fig. 3 we have plotted the
                                                              f
convergence of the fundamental series terms supμ (Θ2a (μ)Θq (μ)/Θ1a (μ))Ψk,q X
that dictate the convergence rate of the n-width upper bound (30). For the value
ε = 0.1 very weak convergence of the fundamental series is observed for some of
the terms, namely q = 2, 3, 4, 5.
   To obtain the GRBM approximation the weak greedy algorithm was driven by
the residual-based a posteriori error estimator (20). In both cases the greedy was
run until an absolute H 1 -error below 10−3 was reached. This required n = 25 basis
functions for the case ε = 0.1, n = 21 basis functions for the case ε = 0.5, n = 15
basis functions for the case ε = 0.9, and n = 14 basis functions for the case ε =
0.95. In Fig. 4 we have plotted the corresponding convergence rates of the greedy
algorithm compared to the n-width upper bound predictions given by (30). In each
case exponential convergence of the GRBM approximation is observed. The actual
exponential decay rate depends on ε, where for ε = 0.1 the n-width estimate is much
RB Methods and n-Width Estimates for the Approximation of the Solution                   327




Fig. 4 Comparison of the n-width upper bound estimate (30) and the greedy convergence rate


too pessimistic when compared to the true rate of convergence. This is likely due
to the weak convergence of some of the fundamental series terms (see Fig. 3(a)),
and the result could be improved by considering more carefully the cutoff point for
the different series terms for different q. However, as ε → 1 the n-width estimate
(30) becomes more and more indicative of the convergence rate observed during the
greedy algorithm. According to Fig. 3(c–d) at the limit all the fundamental series
coefficients converge at roughly the same rate, so that the bound (30) is expected to
sharpen considerably.



6 Conclusions

We have reviewed the generalized reduced basis method for the uniform approxi-
mation of manifolds of solutions of parametric partial differential equations. These
methods are typically driven by a greedy algorithm for selecting near-optimal re-
328                                                                                T. Lassila et al.

duced approximation subspaces. It has recently been shown that the convergence
rate of the generalized reduced basis approximations is linked to the Kolmogorov
n-width of the manifold of solutions. We have exhibited a model problem where the
exact parameter-dependent solution can be expanded as a Neumann series, leading
to a constructive proof that the n-width of the solution set in this case converges ex-
ponentially. Numerical experiments confirm that the reduced basis approximation
also converges exponentially, and with a rate that is comparable to the one predicted
by our n-width upper bound estimate. The predicted convergence rate is independent
of the parametric regularity of the solution manifold and the number of parameters,
but it does depend on the size of the affine expansion of the parametric problem.
Future work involves finding more cases of parameter-dependent problems, where
explicit solution formulas could be used to prove more general n-width estimates.

Acknowledgements This contribution is published in BUMI (Bollettino Unione Matematica
Italiana) as well by a special agreement between UMI (Unione Matematica Italiana) and Springer.
This work celebrates the memory of Prof. Enrico Magenes (1923–2010) after the conference held
in Pavia in November 2011.




References
 1. Adomian, G.: Solving Frontier Problems of Physics: The Decomposition Method. Kluwer
    Academic, Norwell (1994)
 2. Babuška, I., Szabo, B.A., Katz, I.N.: The p-version of the finite element method. SIAM J.
    Numer. Anal. 18(3), 515–545 (1981)
 3. Binev, P., Cohen, A., Dahmen, W., DeVore, R., Petrova, G., Wojtaszczyk, P.: Convergence
    rates for greedy algorithms in reduced basis methods. SIAM J. Math. Anal. 43, 1457–1472
    (2011)
 4. Buffa, A., Maday, Y., Patera, A.T., Prud’homme, C., Turinici, G.: A priori convergence of the
    greedy algorithm for the parametrized reduced basis method. ESAIM Math. Model. Numer.
    Anal. 46(3), 595–603 (2012)
 5. Canuto, C., Tonn, T., Urban, K.: A-posteriori error analysis of the reduced basis method for
    non-affine parameterized nonlinear PDEs. SIAM J. Numer. Anal. 47(3), 2001–2022 (2009)
 6. Carlberg, K., Farhat, C.: A low-cost, goal-oriented ‘compact proper orthogonal decomposi-
    tion’ basis for model reduction of static systems. Int. J. Numer. Methods Eng. 86(3), 381–402
    (2011)
 7. Cohen, A., DeVore, R., Schwab, C.: Analytic regularity and polynomial approximation of
    parametric and stochastic elliptic PDEs. Anal. Appl. 9(1), 11–47 (2011)
 8. Deparis, S.: Reduced basis error bound computation of parameter-dependent Navier-Stokes
    equations by the natural norm approach. SIAM J. Numer. Anal. 46(4), 2039–2067 (2008)
 9. Eftang, J.L., Knezevic, D.J., Patera, A.T.: An hp certified reduced basis method for
    parametrized parabolic partial differential equations. Math. Comput. Model. Dyn. Syst. 17(4),
    395–422 (2011)
10. Evans, J.A., Bazilevs, Y., Babuška, I., Hughes, T.J.R.: N -widths, sup-infs, and optimality ra-
    tios for the k-version of the isogeometric finite element method. Comput. Methods Appl.
    Mech. Eng. 198(21–26), 1726–1741 (2009)
11. Grepl, M.A., Maday, Y., Nguyen, N.C., Patera, A.T.: Efficient reduced-basis treatment of non-
    affine and nonlinear partial differential equations. ESAIM Math. Model. Numer. Anal. 41(3),
    575–605 (2007)
RB Methods and n-Width Estimates for the Approximation of the Solution                          329

12. Hay, A., Borggaard, J.T., Pelletier, D.: Local improvements to reduced-order models using
    sensitivity analysis of the proper orthogonal decomposition. J. Fluid Mech. 629, 41–72 (2009)
13. Hay, A., Borggaard, J., Akhtar, I., Pelletier, D.: Reduced-order models for parameter depen-
    dent geometries based on shape sensitivity analysis. J. Comput. Phys. 229(4), 1327–1352
    (2010)
14. Huynh, D.B.P., Rozza, G., Sen, S., Patera, A.T.: A successive constraint linear optimization
    method for lower bounds of parametric coercivity and inf-sup stability constants. C. R. Acad.
    Sci. Paris. Sér. I Math. 345, 473–478 (2007)
15. Huynh, D.B.P., Knezevic, D., Chen, Y., Hesthaven, J., Patera, A.T.: A natural-norm successive
    constraint method for inf-sup lower bounds. Comput. Methods Appl. Mech. Eng. 199(29–32),
    13 (2010)
16. Ito, K., Ravindran, S.S.: A reduced order method for simulation and control of fluid flows.
    J. Comput. Phys. 143(2), 403–425 (1998)
17. Lassila, T., Manzoni, A., Rozza, G.: On the approximation of stability factors for general
    parametrized partial differential equations with a two-level affine decomposition. ESAIM
    Math. Model. Numer. Anal. 46, 1555–1576 (2012)
18. Maday, Y.: Reduced basis method for the rapid and reliable solution of partial differential
    equations. In: Proceedings of the International Congress of Mathematicians, vol. III, pp. 1255–
    1270. Eur. Math. Soc., Zürich (2006)
19. Maday, Y., Patera, A.T., Turinici, G.: Global a priori convergence theory for reduced-basis
    approximation of single-parameter symmetric coercive elliptic partial differential equations.
    C. R. Acad. Sci. Paris. Sér. I Math. 335, 1–6 (2002)
20. Maday, Y., Patera, A.T., Turinici, G.: A priori convergence theory for reduced-basis approx-
    imations of single-parametric elliptic partial differential equations. J. Sci. Comput. 17(1–4),
    437–446 (2002)
21. Manzoni, A.: Reduced models for optimal control, shape optimization and inverse problems
    in haemodynamics. PhD thesis, N. 5402, École Polytechnique Fédérale de Lausanne (2012)
22. Melenk, J.M.: On n-widths for elliptic problems. J. Math. Anal. Appl. 247, 272–289 (2000)
23. Melkman, A.A., Micchelli, C.A.: Spline spaces are optimal for L2 n-width. Ill. J. Math. 22(4),
    541–564 (1978)
24. Noor, A.K.: Recent advances in reduction methods for nonlinear problems. Comput. Struct.
    13(1–3), 31–44 (1981)
25. Peterson, J.S.: The reduced basis method for incompressible viscous flow calculations. SIAM
    J. Sci. Stat. Comput. 10, 777–786 (1989)
26. Pinkus, A.: n-Widths in Approximation Theory. Ergebnisse der Mathematik und ihrer Gren-
    zgebiete (3). Springer, Berlin (1985)
27. Quarteroni, A., Rozza, G., Manzoni, A.: Certified reduced basis approximation for
    parametrized PDEs and applications. J. Math. Ind. 1, 3 (2011). doi:10.1186/2190-5983-1-3
28. Rozza, G., Huynh, D.B.P., Patera, A.T.: Reduced basis approximation and a posteriori er-
    ror estimation for affinely parametrized elliptic coercive partial differential equations. Arch.
    Comput. Methods Eng. 15, 229–275 (2008)
29. Tonn, T., Urban, K., Volkwein, S.: Comparison of the reduced-basis and POD a posteriori error
    estimators for an elliptic linear-quadratic optimal control problem. Math. Comput. Model.
    Dyn. Syst. 17(4), 355–369 (2011)
30. Veroy, K., Patera, A.T.: Certified real-time solution of the parametrized steady incompress-
    ible Navier-Stokes equations: rigorous reduced-basis a posteriori error bounds. Int. J. Numer.
    Methods Fluids 47(8–9), 773–788 (2005)
Variational Formulation of Phase Transitions
with Glass Formation

Augusto Visintin




Abstract In the framework of the theory of nonequilibrium thermodynamics, phase
transitions with glass formation in binary alloys are here modeled as a multi-
nonlinear system of PDEs. A weak formulation is provided for an initial- and
boundary-value problem, and existence of a solution is studied. This model is then
reformulated as a minimization problem, on the basis of a theory that was pioneered
by Fitzpatrick [MR 1009594]. This provides a tool for the analysis of compactness
and structural stability of the dependence of the solution(s) on data and operators,
via De Giorgi’s notion of Γ -convergence. This latter issue is here dealt with in some
simpler settings.


Foreword Enrico Magenes was an outstanding mathematician, and founded an
internationally renowned school. But to many persons he was much more than that,
and his charismatic personality influenced the Italian and the international math-
ematical world. He was a determined and efficient worker; had a great ability in
getting people motivated towards shared purposes, especially research; and was of
example in any aspect of his life.
    I first met Him in 1973 as a third-year student of mathematics at the University
of Pavia, after two years of teaching of analysis by Claudio Baiocchi; these two
encounters much contributed to orient me towards this branch of mathematics, and
still influence my activity as a researcher and as a teacher. When the moment of
choosing the thesis came, I asked some of my former teachers. I wished to write a
thesis in analysis, and wondered whether I might ask Baiocchi, or Gianni Gilardi,
or someone else. They told me that I had little choice: il Capo (the Boss, as He
was often named) intended to be my advisor. I followed that suggestion, and He
introduced me to boundary-value problems for P.D.E.s and to the Stefan problem.


To the memory of Enrico Magenes: an anti-fascist Resistance fighter, a charismatic leader, and
more than that.
A. Visintin (B)
Dipartimento di Matematica, Università di Trento, via Sommarive 14, Povo di Trento, 38050
Trento, Italy
e-mail: visintin@science.unitn.it

F. Brezzi et al. (eds.), Analysis and Numerics of Partial Differential Equations,            331
Springer INdAM Series 4, DOI 10.1007/978-88-470-2592-9_17,
© Springer-Verlag Italia 2013
332                                                                          A. Visintin

   That started a collaboration that left me a great freedom of research. I could then
investigate some physical aspects of phase transitions, and also address the modeling
of hysteresis phenomena. It is in the spirit of those times and of that freedom that
here I wish to revisit an extension of the Stefan model, with an eye for the model
and one for some recently-developed analytical issues.
   I would like to conclude this short souvenir mentioning that in the last years of
His life we met several times in the mountains near Trento, where He used to spend
a part of the Summer. In those talks I could learn about His past activity in the
anti-fascist Resistance and His experience as a Dachau deportee: this revealed to me
another aspect of His active and generous personality.



1 Introduction

This note is partially based on a talk that this author gave at a conference in mem-
ory of Professor Enrico Magenes, in Pavia in November 2011. That speech was
devoted to recent advances in Fitzpatrick’s theory on the variational representation
of maximal monotone operators, and on its use to prove the structural stability of
quasilinear PDEs. Those results are here reviewed, and are applied to some evolu-
tionary problems. In this note a variational formulation is also provided for a model
of phase transitions with glass formation in heterogeneous systems, that was pro-
posed in [67] and is here reviewed, too. The goal of proving the structural stability
of that problem is more demanding; here some features of that question are just
discussed.

Stefan-Type Problems Phase transitions occur in many relevant processes in
physics and engineering. In 1889 the physicist Josef Stefan [56–59] proposed a
one-dimensional model, that accounted for heat diffusion and exchange of latent
heat in the melting of the polar ice. The analytical formulation consisted in what is
now called a free boundary (or moving boundary) problem, for a parabolic equation.
This definition refers to the fact that the evolution of the surfaces that separate the
phases is not known a priori: the relevant PDE actually holds in a space-time set,
of which part of the boundary is free. On this unknown boundary a discontinuity
condition is then prescribed.
   That model was then extended in many ways, and an intense research started
into two directions: phase transitions and free boundary problems. This involved a
large number of physicists, engineers and mathematical analysts, giving rise to tens
of monographs and tens of thousands of papers in journals. Much of those models
extend the formulation introduced by Stefan, and are often labeled under the general
denomination of Stefan-type problems.
   One of the variants of the basic Stefan model concerns phase transitions in het-
erogeneous systems; in this case heat and mass diffusion are coupled. A first de-
scription simply consists in coupling the Fourier and Fick diffusion laws, and pre-
scribing appropriate conditions at the phase interfaces. This formulation however
Variational Formulation of Phase Transitions with Glass Formation                    333

exhibits substantial physical and analytical shortcomings, that are strictly related
to inconsistency with the second principle of thermodynamics. A more appropriate
model stems from a neat theory that is known as nonequilibrium (or irreversible)
thermodynamics, and is based on the second principle.

Glass Formation Here we are concerned with glass formation, namely the onset
of an amorphous phase that retains (either all or at least a large part of) its latent
heat of phase transition. This is an important physical phenomenon and has relevant
industrial applications: many manufactured products are the outcome of a process
of phase transition, and a part of them either consists in or includes a glassy phase.
Polymers are also examples of amorphous materials.
    A glassy phase may be formed by undercooling a liquid, because of an impres-
sive increase (up to 18 orders of magnitude) of viscosity associated to a sufficiently
deep undercooling. This requires the undercooling to be sufficiently rapid to pre-
vent crystallization: in this case the disordered atomic configuration that is typical
of the liquid phase is frozen into the solid state. The solid behavior of glasses is thus
not due to a crystal structure, but to extremely high viscosity. Amorphous phases
may persist for a long time (even millennia) in a state that is far from equilibrium.
Remarkable examples of this phenomenon are provided by the windows of ancient
cathedrals, which however in some cases exhibit traces of crystallization.
    By what we just pointed out, glass formation is related to the process rather than
just the state temperature. In order to account for this phenomenon, we represent
phase transitions via a first-order dynamics, named phase relaxation, and model
glass formation by prescribing a nonmonotone kinetic function (which represents
the relation between transition rate and undercooling). This entails that the solid-
liquid transition zone is not reduced to a surface, (in the jargon of the Stefan-milieu,
this is usually labeled as the onset of a mushy region) so that the resulting model is
not a free boundary problem.
    Most of the industrial applications of phase transitions involve composite mate-
rials. Here we then deal with glass formation in (noneutectic) binary alloys. In this
case the phase transition and glass formation temperatures and more generally the
kinetic law of phase relaxation depend on the concentration of the two components,
namely on the composition. The problem that here we consider is just a first step to-
wards a more detailed model; for instance, this should also account for mechanical
effects.

A Doubly Nonlinear Equation The model that we derive, see Problem 4.1, is an
initial- and boundary-value problem for a multi-nonlinear system of the form
           ⎧
           ⎪
           ⎨Θ ∈ ∂ϕ(U )
             J = −γ (Θ, ∇Θ)            in Q := Ω × ]0, T [ (Dt := ∂/∂t);     (1)
           ⎪
           ⎩
             Dt U + ∇ · J = f (Θ)

here Ω is a Euclidean domain and T is a positive constant. By ∂ϕ we denote the
subdifferential of a convex potential ϕ; γ is continuous with respect to its first ar-
gument and maximal monotone with respect to the second one. Denoting by ϕ ∗ the
334                                                                           A. Visintin

Fenchel conjugate function of ϕ, this system also reads as a single inclusion:

                    Dt ∂ϕ ∗ (Θ) − ∇ · γ (Θ, ∇Θ)  F (Θ)      in Q.                   (2)

(By ϕ ∗ we denote the Fenchel convex conjugate of ϕ.) Under suitable restrictions,
the operator H01 (Ω) → H −1 (Ω) : Θ → −∇ · γ (S, ∇Θ) is maximal monotone, for
any admissible S.
   Apart from the nonlinear second member, Eq. (2) may be compared with doubly
nonlinear equations of the form

             Dt β(Θ) + α(Θ)  0 with α and β maximal monotone.                       (3)

The case in which for instance β is linear is quite easier, and corresponds to a mono-
tone flow:
                   Dt Θ + α(Θ)  0      with α maximal monotone.                     (4)

Structural Stability A basic feature of modeling is that data (e.g., initial and/or
boundary conditions) and operators (e.g., ∂ϕ and γ in (1)) are known only with some
approximation. It is then of interest to devise topologies that provide the stability of
the problem in the following sense: whenever the data and the operators converge,
the corresponding solutions un weakly converge to a solution of the asymptotic
problem (up to a subsequence); this is close to the notions of G-convergence and
H -convergence.
   Results have been established for the problem (4). They rest upon three main
ingredients:
  (i) a variational formulation of maximal monotone operators (including evolution-
      ary ones, such as those representing diffusion or phase relaxation); this is based
      on a theory that was pioneered by Fitzpatrick in [30];
 (ii) the definition of a suitable nonlinear notion of convergence in function spaces,
      see [72];
(iii) the use of De Giorgi’s theory of Γ -convergence, see [20, 21].

Plan of Work This paper consists of two parts, that merge just in the final section,
and may thus be read independently.
    The first two sections deal with a model of phase transition with glass formation
in binary alloys that was first formulated in [67]. More specifically, in Sect. 2 we
review a model of phase relaxation with glass formation, and in Sect. 3 we couple
it with heat and mass diffusion in binary alloys, along the lines of the theory of
nonequilibrium thermodynamics. Next in Sect. 4 we formulate a nonlinear problem
in the framework of Sobolev spaces; this consists in an initial- and boundary-value
problem for two quasilinear PDEs, which are coupled with a nonlinear ordinary
differential equation. We review a result of [67] on the existence of a weak solu-
tion of that problem, that is based on so-called compactness by strict convexity. Via
a compactness argument that is based on an additional a priori estimate, we then
Variational Formulation of Phase Transitions with Glass Formation                  335

prove a novel existence theorem, that provides existence of a solution even if the
phenomenological laws have no potential.
   The second part concerns the variational formulation and the structural stability
of first-order flows. First in Sect. 5 we state the Fitzpatrick theorem, and illustrate
how De Giorgi’s theory of Γ -convergence may be used to study the compactness
and structural stability of a wide class of monotone PDEs, along the lines of [72]. In
Sect. 6 we then apply those techniques to Eq. (4): we provide a variational formula-
tion in term of what we name a null-minimization problem, and prove its structural
stability. In Sect. 7 we extend the variational formulation to the flow (2), partially
along the lines of [69], where the structural stability is also addressed. (The results
of [69] might however be refined on the basis of the present analysis: in particular
the compactness of the family of operators might be proved; this might be illustrated
in a work apart.) In Sect. 7 we provide a variational formulation of doubly nonlinear
flows of the form (3), and then of the above model of phase transitions with glass
formation.
   A large part of this paper revisits previous works, but it also includes some novel
results. These comprise a new result of existence of a weak solution for the glass
formation problem (Theorem 5.4), and the variational formulation of nonmonotone
flows (see Sects. 7 and 8). The discussion of the variational formulation of monotone
flows (see Sect. 6) also includes elements of novelty with respect to [72].

Literature Mathematical models of phase transitions have been studied in a large
number of works; see e.g. the monographs of Alexiades and Solomon [1], Brokate
and Sprekels [12], Elliott and Ockendon [29], Frémond [33], Gupta [36], V. [64],
and the survey V. [65]. Further references may be found in the comprehensive bibli-
ography of Tarzia [63]. Physical and engineering aspects of phase transitions, espe-
cially of solidification of metals, have been treated e.g. by Chalmers [16], Christian
[18], Flemings [31], Kurz and Fisher [39], Woodruff [73].
   The coherent picture of the theory of nonequilibrium thermodynamics was first
formulated by Eckart [27, 28] in 1940; see e.g. the accounts of Müller and Weiss
[47–49]. That work formed the basis of a comprehensive theory that was then de-
veloped by Meixner, Prigogine, Onsager, De Groot, Mazur and other physicists;
this is now also called thermodynamics of irreversible processes. See e.g. Callen
[15], De Groot [22], De Groot and Mazur [23], Kondepudi and Prigogine [38], Pri-
gogine [53]. Some papers also applied that approach to phase transitions in hetero-
geneous systems, see e.g. Donnelly [25], Luckhaus and V. [42], Alexiades, Wilson
and Solomon [2], Luckhaus [41], V. [64]; Chap. V and [65, 67]. Nonequilibrium
thermodynamics is also at the basis of a celebrated model of phase transitions in
homogeneous materials, that was proposed by Penrose and Fife in [51, 52].
   Doubly-nonlinear parabolic problems were dealt with in a number of works, see
e.g. DiBenedetto and Showalter [24] and Alt and Luckhaus [3]. Here we also use
techniques of [19] and [55]. Further references may be found e.g. in [69].
   The theorem on the variational representation of maximal monotone operators
was proposed by Fitzpatrick [30] in 1988, and was then rediscovered by Martinez-
Legaz and Théra [45] and (independently) by Burachik and Svaiter [13]. This started
336                                                                           A. Visintin

an intense research, see e.g. [14, 34, 43, 44, 46], Ghossoub’s monograph [35], and
several other contributions.
    The theory of Γ -convergence was pioneered by De Giorgi and Franzoni [21]
in 1975, and then extensively developed by the Pisa school and others; see e.g.
[5, 7, 8, 20]. A compactness result for a notion of nonlinear G-convergence of
quasilinear maximal monotone operators in divergence form was also proved in
[17]. This is based on a different approach from the present one, but a comparison
may be of some interest. More recently in [32] H -convergence was also applied to
the homogenization of nonlinear quasilinear elliptic operators; see also [4].
    The present work is part of an ongoing research on the variational representation
of (nonlinear) evolutionary P.D.E.s, and on the application of variational techniques
to the analysis of their structural stability, see e.g. [66, 69, 71, 72]. A somehow com-
parable program, based on the use of the Fitzpatrick theory, has been accomplished
for the homogenization of quasilinear flows, see e.g. [68] and references therein.



2 Phase Relaxation and Glass Formation

Phase Relaxation Let us first consider a homogeneous liquid-solid system, and
assume that the two phases are separated by a (smooth) sharp interface S, that moves
with speed v (∈ R3 ). Let us denote by n the unit normal field to S oriented from the
liquid to the solid. Neglecting curvature effects, at and near equilibrium the interface
is at the absolute temperature τ = τE ; that is, setting θ := τ − τE ,

                                     θ = 0 on S.                                     (5)

    At higher temperature rates one may instead assume a kinetic law of phase tran-
sition of the form
                                νv · n = 
                                         g (θ )    on S.                             (6)
Here by ν we denote a viscosity coefficient, and 
                                                 g is a prescribed continuous func-
tion R → R such that
                                
                                g (θ )θ ≥ 0   ∀θ ∈ R,                                (7)
see Fig. 1. In the framework of a weak formulation of phase transition, we drop
the assumption of sharp interface S, and allow for the occurrence of a so-called
mushy region, namely, a fine-scale solid-liquid mixture. Denoting by ρ the liquid
concentration (which is proportional to the content of latent heat of phase transition),
we define the phase function χ := 2ρ − 1. Thus −1 ≤ χ ≤ 1, and

                         χ = −1 in the solid,
                         χ =1     in the liquid,                                     (8)
                         −1<χ <1         in the mushy region.
Variational Formulation of Phase Transitions with Glass Formation                  337

Fig. 1 Monotone kinetic
function for a crystallizing
material in (a), for the kinetic
law νv · n = g(θ)




We then replace the interface dynamics (6) by a law of phase relaxation:

                              νDt χ + ∂I[−1,1] (χ)  
                                                     g (θ )      in Q;             (9)

here
                                                
                                                    0    if ξ ∈ [−1, 1],
                              I[−1,1] (ξ ) :=                                     (10)
                                                    +∞   otherwise,
and we denote by ∂ the subdifferential operator of convex analysis (see e.g. [26, 37,
54]).
   It should be noticed that in general (6) and (9) are far from being equivalent: (6)
represents phase transition by displacement of the solid-liquid front, whereas (9)
accounts for phase transition by formation and growth of a mushy region; see e.g.
[64]; Sect. V.1.

Glass Formation For most of substances a liquid tends to crystallize whenever
θ < 0, and symmetrically a solid tends to melt if θ > 0. The kinetic function        g
may accordingly be assumed to be nondecreasing. If close to the interfaces and in
the mushy region the temperature rate is sufficiently small, then g may also be lin-
earized in a neighborhood of θ = 0. This applies to systems close to thermodynamic
equilibrium.
   Glass formation is due to a strong increase of viscosity that impairs the mobil-
ity of particles in their migration towards the crystal sites, and thus prevents the
formation of the crystal lattice. This phenomenon is thus related to the temperature
dynamics, and requires the undercooling to be sufficiently fast as well as sufficiently
deep. In several cases the latter requirement may be expressed in the form

                   θ ≤ θ ∗,        for a material-dependent threshold θ ∗ < 0.    (11)

Next we provide a quantitative representation of these requirements.
338                                                                                    A. Visintin

Fig. 2 Nonmonotone
function for an amorphous
material in (b), for the kinetic
law νv · n = g(θ)




    As the temperature dependence of the viscosity is the main feature of the glass
behavior, in (6) and (9) we replace the constant ν by 
                                                      ν(θ ), for a prescribed function

ν : R → ]0, +∞[ such that

                                       
                                       ν(θ )    1,    ∀θ < θ ∗ .                             (12)

Next we divide both members of (9) by 
                                      ν(θ ); notice that, as 
                                                             ν(θ ) > 0,

                                   ν(θ )−1 I[−1,1] (χ) = I[−1,1] (χ).
                                   

Moreover, setting ḡ(θ ) :=       ν(θ ), by (12) we have |ḡ(θ )|
                            g (θ )/                                           1 for any θ < θ ∗ .
It is then natural to assume that

                       ḡ(θ )θ ≥ 0      ∀θ ∈ R,        ḡ(θ ) = 0 ∀θ < θ ∗ ,                 (13)

see Fig. 2.
   By (9) we then get the equivalent inclusion

                               Dt χ + ∂I[−1,1] (χ)  ḡ(θ )        in Q,                     (14)

which is in turn equivalent to the following variational inequality:
              
                χ ∈ [−1, 1]
                                                                  in Q.                      (15)
                Dt χ(χ − v) ≤ ḡ(θ )(χ − v) ∀v ∈ [−1, 1]

(Henceforth we shall drop the tilde and the bar, and write g in place of 
                                                                         g and ḡ.)
Thus Dt χ = 0 where either
  (i) θ = 0, or
 (ii) θ > 0 and χ = 1, or
(iii) θ ∗ < θ < 0 and χ = −1, or
(iv) θ ≤ θ ∗ .
Variational Formulation of Phase Transitions with Glass Formation                      339

That is, there is no phase transition at equilibrium (cases (i), (ii), (iii)) as well as in
the glassy phase (case (iv)).
   Dealing with heterogeneous substances this model must be amended, since the
two-phase equilibrium temperature also depends on the composition.



3 Nonequilibrium Thermodynamics
In this section we review some basic elements of the theory of nonequilibrium ther-
modynamics, and then formulate a model of glass formation.

Eckart’s Theory of Nonequilibrium Thermodynamics Next we deal with pro-
cesses of coupled heat and mass diffusion with phase transition in a binary alloy,
namely, a composite of two substances whose constituents are intermixed at the
atomic scale.
   A basic model consists in coupling the Fourier and Fick laws with appropriate
conditions at the phase interface, that respectively account for heat and mass con-
servation. This approach has been used by material scientists and engineers, but
exhibits some physical and mathematical shortcomings. Actually this model does
not account for cross-effects between heat and mass diffusion. In several cases the
omitted terms are not very significant quantitatively; this explains why the above ap-
proach may produce fairly acceptable numerical results. However, this model is not
consistent with the second principle of thermodynamics, and of course this is quite
regrettable from a theoretical viewpoint. This inconvenience also has a relevant an-
alytical counterpart: the diffusive part of this model is represented by a system that
does not have the structure of a gradient flow. As far as this author knows, in the
multivariate setting no solution is known to exist even for the weak formulation.
   These physical and mathematical drawbacks are overcome by a different model,
that is formulated in the framework of the theory of nonequilibrium thermodynam-
ics, that we now illustrate. This neat theory was first formulated by Eckart in 1940,
and then exploited by Meixner, Prigogine, Onsager, De Groot, Mazur and many
other physicists; see e.g. [47–49]. Here the constitutive relations are dictated by the
very exigency of fulfilling the second principle. More specifically, this method pro-
vides the entropy estimate, and with that a priori estimates that contribute to make
the analysis rather natural.
   Next we confine ourselves to a composite of two constituents: a binary alloy,
that is, a homogeneous mixture of two substances, that are soluble in each other
in all proportions in each phase, outside a critical range of temperatures. We label
this mixture as homogeneous since the constituents are intermixed on the atomic
length-scale to form a single phase, either solid or liquid. We regard one of the two
components, for instance that with the lower solid-liquid equilibrium temperature,
as the solute—the other one as the solvent. We confine ourselves to a nonreacting
and noneutectic binary system, although this analysis might be extended to include
chemical reactions in multi-component systems.
   The model that here we consider consists in two balance laws and appropriate
constitutive relations:
340                                                                            A. Visintin

  (i) the principle of mass conservation,
 (ii) the principle of energy conservation (i.e., the first principle of thermodynam-
      ics),
(iii) a constitutive relation that relates the entropy density, the temperature, the so-
      lute concentration, and the phase function (i.e., a Gibbs-type formula),
(iv) two constitutive relations for the energy and mass fluxes (the so-called phe-
      nomenological laws),
 (v) a relaxation dynamics for the phase function.
The prescriptions (iv) and (v) will account for a local formulation of the second
principle of thermodynamics. This will yield a parabolic doubly-nonlinear system
of PDEs.

Balance Laws and Gibbs-Type Formula              We shall use the following notation:
u:    density of internal energy,
s:    density of entropy,
τ:    absolute temperature,
c:    concentration of the solute (per unit volume), with 0 ≤ c ≤ 1,
μ:    difference between the chemical potentials of the two constituents,
λ:    difference between the density of internal energy of the two phases (at constant
      entropy and concentration),
j u : flux of energy (per unit surface), due to flux of heat and mass,
j c : flux of the solute (per unit surface),
h: intensity of a prescribed energy source or sink, due to injection or extraction of
      either heat or mass.
    It should be notices that λ does not coincide with the latent heat, namely the
difference between the density of internal energy of the two phases at constant tem-
perature and concentration.
    Let us assume that the system under consideration occupies a domain Ω ⊂ R3 for
a time interval ]0, T [. In the absence of chemical reactions and mechanical actions,
the principles of energy and mass conservation yield

                     Dt u = − ∇ · j u + h in Q := Ω × ]0, T [,                       (16)
                     Dt c = − ∇ · j c    in Q.                                       (17)

   We shall assume that the dependence of the internal energy density u on the
primal state variables s, c, χ is prescribed; that is, u = 
                                                           u(s, c, χ). By this “hat nota-
tion” we shall distinguish between the physical field, u = u(x, t), and the function
that represents how it depends on other variables, u =   u(s, c, χ).
   Along with a standard practice of the theory of convex analysis, we then extend

u with value +∞ for (c, χ) ∈  / [0, 1] × [−1, 1]. We may thus assume this function to
be differentiable for any (c, χ) ∈ ]0, 1[ × ]−1, 1[, but of course not on the boundary
Variational Formulation of Phase Transitions with Glass Formation                                     341

of this rectangle. The (multivalued) partial subdifferentials1 ∂c
                                                                 u and ∂χ 
                                                                          u, are then
reduced to the partial derivatives ∂         u/∂χ for any (c, χ) ∈ ]0, 1[ × ]−1, 1[.
                                    u/∂c and ∂
   Classical thermodynamics prescribes that

                   ∂
                    u                           ∂
                                                 u                          ∂
                                                                             u
             τ=       (s, c, χ),          μ=       (s, c, χ),         λ=       (s, c, χ),
                   ∂s                           ∂c                          ∂χ

provided that the function 
                           u is differentiable. Thus2

                     u =
                        u(s, c, χ),
                                                                                                     (18)
                     du = τ ds + μdc + λdχ              ∀(s, c, χ) ∈ Dom(
                                                                         u)0 ,

or more generally, without assuming the differentiability of the function 
                                                                          u,

              τ ∈ ∂s 
                     u(s, c, χ),          μ ∈ ∂c
                                                u(s, c, χ),            λ ∈ ∂χ 
                                                                              u(s, c, χ)
                                                                                                     (19)
              ∀(u, c, χ) ∈ Dom(
                               u).

   As τ > 0, the constitutive relation u = 
                                           u(s, c, χ) may also be made explicit with
respect to s. This yields the Gibbs-type formula

                    s =
                       s(u, c, χ),
                            1     μ    λ                                                             (20)
                    ds =      du − dc − dχ               ∀(u, c, χ) ∈ Dom(
                                                                          s)0 ,
                            τ     τ    τ
withs a concave function of u, for any fixed c, χ . More generally, without assuming
the differentiability of the function 
                                      s, we have

        1                                μ                               λ
          ∈ ∂u
              s(u, c, χ),            −     ∈ ∂c
                                               s(u, c, χ),           −     ∈ ∂χ
                                                                               s(u, c, χ)
        τ                                τ                               τ                           (21)
        ∀(u, c, χ) ∈ Dom(
                         s).

   The relations (19)–(21) are prescribed at equilibrium. A basic postulate of
nonequilibrium thermodynamics, assumes that (18) (and the equivalent (20)) also
apply to systems that are not too far from equilibrium. Out of lack of a better model,
here we extrapolate these relations even to the glassy phase. Actually, the limits of
validity of the whole theory strongly depend on those of the Gibbs-type formula
(20) and of the other constitutive relations that we introduce ahead.


1 By ∂f we denote the subdifferential (in the sense of convex analysis) of a function f of a single

variable. On the other hand, by ∂u f , ∂v f , . . . we denote the partial subdifferentials of a function f
of a two or more variables u, v, . . .
         u) we denote the domain of 
2 By Dom(                          u, namely the set where this function is finite. By A0 we
denote the interior of any set A.
342                                                                          A. Visintin

Entropy Balance and Clausius-Duhem Inequality             Let us set
        j u − μj c
  j s :=           : entropy flux (per unit surface),                    (22)
              τ
                1        μ λ
  π := j u · ∇ − j c · ∇ − Dt χ : entropy production rate (per unit volume).
                τ        τ    τ
                                                                         (23)

Denoting by q the heat flux we have j u = q + μj c , so that the two latter definitions
also read
                        q                1 j                λ
                  js = ,       π = q · ∇ − c · ∇μ − Dt χ.                          (24)
                        τ                τ     τ            τ
Multiplying (16) by 1/τ and (17) by −μ/τ , by (21)–(23) we get the entropy balance
equation
                  1          μ        λ
            Dt s =  D t u − D t c − Dt χ
                  τ          τ        τ
                    1           h μ             λ
                = − ∇ · j u + + ∇ · j c − Dt χ
                    τ           τ     τ         τ
                         j u − μj c           1         μ λ       h
                = −∇ ·               + j u · ∇ − j c · ∇ − Dt χ +
                              τ               τ         τ τ       τ
                                    h
                = −∇ · j s + π +        in Q.                                      (25)
                                    τ
The quantity h/τ is the rate at which entropy is either provided to the system or
extracted from it by an external source or sink of heat.
   According to the local formulation of the second principle of thermodynamics
(see e.g. [15, 22, 23, 38, 53]), the entropy production rate is pointwise nonnega-
tive, and vanishes only at equilibrium. This is tantamount to the Clausius-Duhem
inequality:
                        π ≥ 0 for any process, and
                                                                                   (26)
                        π =0     if and only if ∇τ = ∇μ = 0.
Moreover, π = 0 (π > 0, resp.) corresponds to a reversible (irreversible, resp.) pro-
cess.

Phenomenological Laws and Phase Relaxation The next step consists in for-
mulating constitutive laws consistent with (26). First we introduce some further
definitions:
                     1   μ λ
             z :=      ,− ,−       ∈ Dom(s ∗ ) :     dual state variables,         (27)
                     τ   τ   τ
                   1    μ λ
             G := ∇ , −∇ , −   :            generalized forces,                    (28)
                   τ    τ    τ
Variational Formulation of Phase Transitions with Glass Formation                   343

              J := (j u , j c , Dt χ) :    generalized fluxes.                     (29)

   Along the lines of the theory of nonequilibrium thermodynamics, we assume that
the generalized fluxes are functions of the dual state variables and of the generalized
forces, via constitutive relations of the form

                      J = F (z, G)        ∀z ∈ Dom s ∗ ⊂ R+ × R2 .                 (30)

These relations must be consistent with the second principle, cf. (26). The map-
ping F must thus be positive-definite with respect to G. Close to thermodynamic
equilibrium, namely, for small generalized forces, one may also assume that this
dependence is linear. Notice that the first two components of J and G are vectors,
and the third ones are scalars. The linearized relations then uncouple, because of the
Curie principle: “generalized forces cannot have more elements of symmetry than
the generalized fluxes that they produce”. Thus, denoting by I[−1,1] the indicator
function of the interval [−1, 1],

                            ju           ∇ τ1
                               = L(z) ·                    in Q,                   (31)
                            jc          −∇ μτ
                                                           λ
                          Dt χ + ∂I[−1,1] (χ)  −(z)          in Q.               (32)
                                                           τ
In (31) the dot denotes the rows-by-columns product of a tensor of (R3 )2×2 by a
vector of (R3 )2 . Notice that ∂I[−1,1] (−1) = ] − ∞, 0], ∂I[−1,1] (y) = {0} for any y ∈
] − 1, 1[, ∂I[−1,1] (1) = [0, +∞[. The linearized constitutive relations (31) are often
called phenomenological laws; (32) is a relaxation-type dynamics. Consistently with
(26), for any z the tensor L(z) is assumed to be positive-definite, and (z) > 0
(whereas of course λ may change sign). A fundamental result of nonequilibrium
thermodynamics due to Onsager states that the tensor L(z) is symmetric:
               ⎛           ⎞
                  L11 L12
           L=⎝             ⎠,      L12 (z) = L21 (z) ∈ R3 ∀z ∈ Dom s ∗ .            (33)
                  L21 L22

The tensor L12 (z) accounts for mass flow induced by a temperature gradient, (Soret
effect), whereas L21 (z) accounts for the dual phenomenon of heat flow induced by
a gradient of chemical potential (Dufour effect).

Potential Structure of the Phenomenological Laws                   Let us set

                                1     μ
                          g := ∇ , −∇   ,
                                τ     τ
                                        1                1                         (34)
                          Φ(z, ξ , r) := ξ ∗ · L(z) · ξ + (z)r 2
                                        2                2
                          ∀z ∈ Dom s ∗ , ∀ξ ∈ R3 , ∀r ∈ R
                                                       2
344                                                                                  A. Visintin

(here by ξ ∗ we denote the transposed of the vector ξ ). Because of the Onsager re-
lations (33), the (linearized) laws (31) and (32) may then be represented in gradient
form:
                            J ∈ ∂2 Φ(z, G)              ∀z ∈ Dom s ∗ ,                     (35)
where by ∂2 we denote the subdifferential with respect to the second argument, G.
   This representation may be extended to the nonlinear case. More specifically,
within a certain range of variation of the variables, one may thus assume that the
nonlinear constitutive relations (30) also have a potential structure of the form
            J ∈ ∂2 Φ(z, G)         with
                                                                                           (36)
                                                                    ∀z ∈ Dom s ∗ .
                                                    2           2
            Φ(z, ·) convex mapping R3                   → R3 ,
   Even further from equilibrium, one may deal with (30) dropping the assumption
of existence of a potential. As we saw, this is the case for glass formation.
   In conclusion, we have represented processes in two-phase composites by the
quasilinear parabolic system (16), (17), (21), coupled with phenomenological laws
either of the general form (30) or (assuming existence of a potential) of the form
(36).



4 Weak Formulation and Existence Theorems
In this section we formulate an initial- and boundary-value problem for phase relax-
ation in two-phase binary composites, and deal with existence of a weak solution.
    We assume that Ω is a bounded Lipschitz domain of R3 , denote its boundary
by Γ , fix two subsets ΓDi (i = 1, 2) of Γ having positive bidimensional Hausdorff
measure, and set Q := Ω × ]0, T [ as above. We define the weighted Hilbert spaces
                                                     
                 Vi := v ∈ H 1 (Ω) : γ0 v = 0 on ΓDi     (i = 1, 2),            (37)

and denote by ·, · the pairing between Vi and the dual space Vi for i = 1, 2. By
identifying the space L2 (Ω) with its dual and the latter with a subspace of Vi , we
get two Hilbert triplets:

   Vi ⊂ L2 (Ω) = L2 (Ω) ⊂ Vi ,             with dense and compact injections (i = 1, 2).
                                                                                        (38)
   We assume that
                    ϕ : R × [0, 1] × [−1, 1] → R ∪ {+∞}
                                                                                           (39)
                    is proper, convex and lower semicontinuous,
                                        2           2
                  γ : R2 × R3               → R3 ,
                                                                            2
                  γ (·,·, ξ 1 , ξ 2 )       is continuous ∀(ξ 1 , ξ 2 ) ∈ R3 ,             (40)

                  γ (θ, ω, ·,·)         is monotone ∀(θ, ω) ∈ R2 ,
Variational Formulation of Phase Transitions with Glass Formation                                345

                             ρ : R2 → R is Lipschitz continuous.                                (41)
We then fix any

           u0 , c0 , χ 0 ∈ L2 (Ω)      such that ϕ u0 , c0 , χ 0 < +∞ a.e. in Ω,
                                                                                                (42)
           fi ∈ L2 0, T ; Vi        (i = 1, 2),

and introduce a weak formulation.

Problem 4.1 Find u, c, χ, θ, ω, r, j u , j c with the regularity

            u ∈ L2 (Q) ∩ H 1 0, T ; V1 ,              c ∈ L2 (Q) ∩ H 1 0, T ; V2 ,
                                                                                                (43)
            χ ∈ H 1 0, T ; L2 (Ω) ,
 θ ∈ L2 (0, T ; V1 ),         ω ∈ L2 (0, T ; V2 ),            r ∈ L2 (Q),       j u , j c ∈ L2 (Q)3 ,
                                                                                                 (44)
that fulfill the constitutive relations

                        (θ, ω, r) ∈ ∂ϕ(u, c, χ)         a.e. in Q,                              (45)
                        (j u , j c ) = −γ (θ, ω, ∇θ, ∇ω)           a.e. in Q,                   (46)

as well as the equations

                        D t u + ∇ · j u = f1        in V1 , a.e. in ]0, T [,                   (47)
                        Dt c + ∇ · j c = f 2       in V2 , a.e. in ]0, T [,                    (48)
                        Dt χ + r = ρ(θ, ω) a.e. in Q,                                           (49)

and the initial conditions

  u(·, 0) = u0    in V1 ,       c(·, 0) = c0      in V2 ,        χ(·, 0) = χ 0   a.e. in Ω. (50)

   It is well known that by a suitable selection of the functionals f1 and f2 , (47)
and (48) respectively account for the energy balance (16) and for the mass diffusion
equation (17), each one coupled with the homogeneous Dirichlet condition on ΓDi
and with a Neumann condition on Γ \ ΓDi , for i = 1, 2.
   Equation (49) extends (14) to a heterogeneous system.

Theorem 4.1 (Existence of a Weak Solution—I) Assume that (39)–(42) are satis-
fied, and that

            ϕ ∗ : R2 × [−1, 1] → R ∪ {+∞} is of the form
            ϕ ∗ (θ, ω, χ) = ψ1 (θ, ω) + ψ2 (θ, ω, χ)              ∀(θ, ω, χ),
                                                                                                (51)
            where: ψ1 is strictly convex and lower semicontinuous,
            ψ2 (·,·, χ) is convex and lower semicontinuous ∀χ ∈ [−1, 1],
346                                                                                           A. Visintin

             ∃c1 , c2 > 0 :     ∀(u, c, χ) ∈ Dom(ϕ), ∀(θ, ω, r) ∈ ∂ϕ(u, c, χ),
                                                                                                    (52)
             |θ | ≤ c1 |u| + c2 ,

           ∃a1 , a2 > 0 :       ∀(u, c, χ) ∈ Dom(ϕ), ϕ(u, c, χ) ≥ a1 |u|2 − a2 ,                    (53)

                                                            2
                    γ = ∂Φ,         with Φ : R2 × R3            → R,
                                                                                  2
                    Φ(·,·, ξ 1 , ξ 2 )     is continuous ∀(ξ 1 , ξ 2 ) ∈ R3 ,                       (54)

                    Φ(θ, ω, ·,·)         is convex ∀(θ, ω) ∈ R2
(in ∂Φ the subdifferential operation is applied to the two latter arguments),
                                                                    2
       ∃a3 , . . . , a6 > 0 :    ∀(θ, ω, ξ 1 , ξ 2 ) ∈ R2 × R3 ,
                                                                                                    (55)
       a3 |ξ 1 |2 + |ξ 2 |2 − a4 ≤ Φ(θ, ω, ξ 1 , ξ 2 ) ≤ a5 |ξ 1 |2 + |ξ 2 |2 + a6 ,

                                                                
                 ∃a7 , a8 > 0 :          ∀(θ, ω) ∈ R2    ρ(θ, ω) ≤ a7 |θ | + a8 .                 (56)
Then Problem 4.1 has a solution such that moreover u, c ∈ L∞ (0, T ; L2 (Ω)).

    The assumptions of this theorem are consistent with the model that we illustrated
in the previous section. Next we state another existence result.

Theorem 4.2 (Existence of a Weak Solution—II, [67]) Assume that the assump-
tions (39)–(42) are satisfied, as well as the conditions (51), (52), (56) and

  ∃C > 0 :      ∀(ui , ci , χi ) ∈ Dom(ϕ),         ∀(θi , ωi , ri ) ∈ ∂ϕ(ui , ci , χi )   (i = 1, 2),
  (u1 − u2 )(θ1 − θ2 ) + (c1 − c2 )(ω1 − ω2 ) + (χ1 − χ2 )(r1 − r2 )
      ≥ C |θ1 − θ2 |2 + |ω1 − ω2 |2 ,
                                                                                                    (57)
                                                                        2
            ∃a9 > 0 : ∀(θ, ω) ∈ R2 , ∀(ξ 1i , ξ 2i ) ∈ R3                  (i = 1, 2),
                                                           
             γ (θ, ω, ξ 11 , ξ 21 ) − γ (θ, ω, ξ 12 , ξ 22 ) · (ξ 11 − ξ 12 , ξ 21 − ξ 22 )         (58)

                ≥ a9 |ξ 11 − ξ 12 |2 + |ξ 21 − ξ 22 |2 ,

                                                                             2
          ∃a10 , a11 > 0 : ∀(θ, ω) ∈ R2 , ∀(ξ 1i , ξ 2i ) ∈ R3                    (i = 1, 2),
                                                         
          γ (θ, ω, ξ 11 , ξ 21 ) − γ (θ, ω, ξ 12 , ξ 22 )                                         (59)

              ≤ a10 |ξ 11 − ξ 12 | + |ξ 21 − ξ 22 | + a11 .
Then Problem 4.1 has a solution such that moreover

      u, c ∈ L∞ 0, T ; L2 (Ω) ,               θ, ω ∈ H s 0, T ; L2 (Ω)           ∀s < 1/2.          (60)
Variational Formulation of Phase Transitions with Glass Formation                               347

  The assumptions of this theorem are also consistent with the previous model.
Here we just point out the main lines of the argument, which differs from that of
Theorem 4.1 (see [67]) for an additional a priori estimate.


(i) First a priori estimate. Next we display the basic entropy estimate, which is
also used in [67]. Let us first extend the fields u, c, χ to t < 0 by setting u(·, t) =
u0 , c(·, t) = c0 , χ(·, t) = χ 0 a.e. in Ω for any t < 0. For any m ∈ N, let us also
introduce the time step h = T /m, and define the time incremental operator δh by
setting δh v(t) := v(t + h) − v(t) for any function v of t. We may then consider the
approximation scheme

                       δh u + h∇ · j u = hf1         in V1 , a.e. in ]0, T [,                  (61)
                       δh c + h∇ · j c = hf2        in V2 , a.e. in ]0, T [,                   (62)
                       δh χ + hr = hρ(θ, ω)           a.e. in Q,                                (63)

and couple this system with the constitutive relations (45) and (46). It is not difficult
to check that this problem has a solution (that we label by the index h) with the
following regularity:

    uh , ch , χh , rh ∈ L2 (Q),
                                                                                                (64)
    θh ∈ L2 (0, T ; V1 ),         ωh ∈ L2 (0, T ; V2 ),         (j u )h , (j c )h ∈ L2 (Q)3 .

   Via a standard procedure, the following uniform estimates are derived by multi-
plying Eqs. (61)–(63) respectively by θh , ωh , rh , and then integrating over Ω × ]0, t[
for any t ∈ ]0, T ]:

         uh L∞ (0,T ;L2 (Ω))∩H 1 (0,T ;V  ) , ch L∞ (0,T ;L2 (Ω))∩H 1 (0,T ;V  ) ≤ C1 ,   (65)
                                            1                                      2

         θh L2 (0,T ;V1 ) , ωh L2 (0,T ;V2 ) , χh H 1 (0,T ;L2 (Ω)) ≤ C2 ,                (66)
                                  
         (j u )h  2 3 , (j c )h  2 3 ≤ C3 .                                                 (67)
                   L (Q)                L (Q)


(By C1 , C2 , . . . we denote constants independent of h.) See Sect. 7 of [67] for de-
tails.


(ii) Second a priori estimate. For any k ∈ ]0, T [, further a priori estimates may
be derived by multiplying the approximate equations (61)–(63) respectively by
δk θh , δk ωh , δk rh , and then integrating over Ω × ]k, T [. (The reader will notice that
we are not dividing these equations by k, and that two indices occur: h and k.) This
348                                                                                             A. Visintin

yields
           T        
                                                                                   
   k −1         dt            (δk uh )(δk θh ) + (δk ch )(δk ωh ) + (δk χh )(δk rh ) dx
           k             Ω
                 T          
                                                                                      
         ≤−           dt              (j u )h · ∇δk θh + (j c )h · ∇δk ωh + rh (δk rh ) dx
                 k             Ω
                 T          
                                                                             
           +          dt              f1h δk θh + f2h δk ωh + ρ(θh , ωh )δk rh dx     ∀t ∈ ]0, T ].   (68)
                 k               Ω

By (57), (59) and by the previous a priori estimates, it is easily checked that the
right-hand side of this inequality is uniformly bounded with respect to both h and k.
Hence by (57)
                           T 
                       −1
                     k        dt      |δk θh |2 + |δk ωh |2 dx ≤ C5 .            (69)
                                          k         Ω
By Lemma 4.1 below, we then conclude that

                         the sequences {θh } and {ωh }
                         are bounded in H s 0, T ; L2 (Ω) for any s < 1/2.                            (70)

(iii) Limit procedure. The estimates (65)–(67), (70) entail that there exist (u, c, χ),
(θ, ω, r) and (j u , j c ) as in (43) and (44) such that, up to extracting subsequences,3
                         ∗
                 uh  u in L∞ 0, T ; L2 (Ω) ∩ H 1 0, T ; V1 ,                                        (71)
                         ∗
                 ch  c              in L∞ 0, T ; L2 (Ω) ∩ H 1 0, T ; V2 ,                           (72)
                         ∗
                 χh  χ               in L∞ (Q) ∩ H 1 0, T ; L2 (Ω) ,                                 (73)
                 θh  θ               in L2 (0, T ; V1 ) ∩ H s 0, T ; L2 (Ω)     ∀s < 1/2,            (74)
                 ωh  ω                in L2 (0, T ; V2 ) ∩ H s 0, T ; L2 (Ω)     ∀s < 1/2,           (75)
                 rh  r              in L2 (Q),                                                       (76)
                 (j u )h  j u                in L2 (Q)3 ,                                            (77)
                 (j c )h  j c             in L2 (Q)3 .                                               (78)

   Equations (47)–(49) then follow by passing to the limit in (61)–(63). As by (74)
and (75),
                                        θh → θ,           ωh → ω    in L2 (Q),                        (79)

                                                                              ∗
3 We denote the strong, weak, and weak star convergence respectively by →, , .
Variational Formulation of Phase Transitions with Glass Formation                        349

the passage to the limit in the nonlinear terms may then be accomplished along the
lines of Sect. 7 of [67].

Lemma 4.1 Let {un } be a bounded sequence of functions of L2 (0, T ). If
    T
        |un (t) − un (t − k)|2
                               dt ≤ C6 : Constant independent of n, k,                   (80)
    k             k
then the sequence {un } is uniformly bounded in H s (0, T ) for any s < 1/2.

Proof For any s ∈ ]0, 1/2[ we have
                                      
                                               |un (t  ) − un (t  )|2  
    un 2H s (0,T ) = un 2L2 (Q) +                                   dt dt
                                       ]0,T [2     |t  − t  |1+2s
                                       T  t
                                                    |un (t) − un (t − k)|2
                   = un L2 (Q) + 2
                           2
                                           dt                                 dk
                                       0         0              k 1+2s
                                       T               T
                                                             |un (t) − un (t − k)|2
                   = un 2L2 (Q) + 2      k −2s dk                                 dt
                                       0                k               k
                                          T
                   = un 2L2 (Q) + 2C6        k −2s dk
                                            0
                   (80)
                    ≤ Constant(independent of n).                                        (81)
                                                                                           

Remark 4.1 Theorems 4.1 and 4.2 essentially differ in the derivation of (79). More
specifically, we just derived (79) by compactness, because of the a priori estimates
(70). On the other hand, in the argument of Theorem 4.1 (see [67]), (79) stems from
compactness by strict convexity (in the sense of Chap. X of [64]).


5 Fitzpatrick’s Theory and Γ -Convergence
The Fitzpatrick Theorem Let V be a real Banach space, and α : V → P(V  )
a proper (multivalued) operator. In 1988 Fitzpatrick defined the convex and lower
semicontinuous function
                                                         
  fα v, v ∗ := v ∗ , v + sup v ∗ − v0∗ , v0 − v : v0∗ ∈ α(v0 )
                                                                         (82)
             = sup v ∗ , v0 − v0∗ , v0 − v : v0∗ ∈ α(v0 ) ∀ v, v ∗ ∈ V × V  ,
and proved the following result.

Theorem 5.3 [30] If α : V → P(V  ) is maximal monotone, then
                                       
                    fα v, v ∗ ≥ v ∗ , v ∀ v, v ∗ ∈ V × V  ,                             (83)
                                       
                    fα v, v ∗ = v ∗ , v   ⇔ v ∗ ∈ α(v).                                  (84)
350                                                                                     A. Visintin

   Along these lines, nowadays one says that a function f : V × V  → R ∪ {+∞}
(variationally) represents the operator α whenever f is convex and lower semicon-
tinuous and fulfills the system (83), (84). We shall denote by F(V ) the class of
these representative functions. Representable operators are necessarily monotone,
but need not be maximal monotone; e.g., the nonmaximal monotone operator with
graph A = {(0, 0)} is represented by f1 = I{(0,0)} . On the other hand, not all mono-
tone operators are representable; e.g., the null mapping restricted to V \ {0} is not
representable.
   For any convex and lower semicontinuous function ϕ : V → R ∪ {+∞}, the
Fenchel function

                  F v, v ∗ := ϕ(v) + ϕ ∗ v ∗            ∀ v, v ∗ ∈ V × V                     (85)

fulfills the system (83) and (84), because of the classical Fenchel inequality of con-
vex analysis (see e.g. [26, 37, 54]). Thus F represents the operator ∂ϕ. Other exam-
ples may be found e.g. in [69–72].

Γ -Compactness and Stability of Representative Functions Henceforth we
shall assume that V  is separable, and introduce a nonlinear notion of convergence,
which seems to be appropriate in this framework. For any sequence {(vn , vn∗ )} in
V × V  , let us set
              vn , vn∗ → v, v ∗       in V × V        ⇔
                      π̃
                                                                                              (86)
                                        ∗                         ∗             
             vn  v    in V ,       vn∗  v ∗    in V  ,         vn , vn → v ∗ , v ,
and similarly define the convergence of   π -nets. (We use the term “
                                                                      π -convergence”
since we denote by π the duality pairing between V and V  , i.e., π(v, v ∗ ) :=
v ∗ , v.)
    Under the assumption of equi-coerciveness, the Γ -compactness with respect to
the product between the weak and weak star topologies of V and V  stems from the
classical theory, see e.g. [20]. The next statement provides the Γ -compactness with
respect to the 
               π -topology, which is especially relevant in the analysis of representa-
tive functions.

Theorem 5.4 [72] Let a sequence {ψn } in F(V ) be equi-coercive in the sense that
                                                              
  ∀C ∈ R, sup vV + v ∗ V  : v, v ∗ ∈ V × V  , ψn v, v ∗ ≤ C < +∞. (87)
            n∈N

Then, up to extracting a subsequence, ψn sequentially Γ -converges to some function
ψ with respect to the topology π . This entails that ψ ∈ F(V ).
   Moreover, denoting by αn (α, resp.) the operator V → P(V  ) that is represented
by ψn (ψ , resp.), for any sequence {(vn , vn∗ )} in V × V  ,

                   vn∗ ∈ αn (vn )     ∀n,       vn , vn∗ → v, v ∗
                                                            π̃
                                                                                              (88)
                                ∗
                      ⇒      v ∈ α(v),          ψn vn , vn∗ → ψ v, v ∗ .
Variational Formulation of Phase Transitions with Glass Formation                    351

Representation in Spaces of Time-Dependent Functions Let us fix any T > 0,
any p ∈ ]1, +∞[ and set V := Lp (0, T ; V ). Let us define the convergence      π in V ×
V as in (86), by replacing the space V by V and the associated duality pairing v ∗ , v
                 T
by v ∗ , v := 0 v ∗ (t), v(t)dt for any (v, v ∗ ) ∈ V × V . Theorem 5.4 takes over
to time-dependent operators and to their time-integrated representative functions,
simply by replacing the space V by V.
   It is promptly seen that, whenever a function ψ ∈ F(V ) is coercive in the sense
that
                                                                      
  ∀C ∈ R, sup vV + v ∗ V  : v, v ∗ ∈ V × V  , ψ v, v ∗ ≤ C < +∞, (89)

ψ represents an operator α : V → P(V  ) if and only if the functional
                                T
                Ψ v, v ∗ :=          ψ v(t), v ∗ (t) dt    ∀ v, v ∗ ∈ V × V        (90)
                                0

(which is an element of F(V)) represents the operator
                              
    α : V → P V ,
                         
                          α (v) (t) = α v(t) ∀v ∈ V, for a.e. t ∈ ]0, T [.          (91)

                   π -convergence in V × V  a.e. in ]0, T [ with the 
Next we relate the                                                   π -convergence
in V × V .

Proposition 5.1 [72] Let p ∈ ]1, +∞[, and {(vn , vn∗ )} be a bounded sequence in
                         
W ε,p (0, T ; V ) × W ε,p (0, T ; V  ) for some ε > 0. If

                      vn , vn∗ → v, v ∗       in V × V  , a.e. in ]0, T [,         (92)
                               π̃

then
                               vn , vn∗ → v, v ∗      in V × V .                   (93)
                                         π̃

   On the other hand, (93) does not entail (92), not even for a subsequence.

   For ε = 0 the implication (92) → (93) fails. A counterexample is provided in
[72].

Compactness and Structural Stability The representation of maximal mono-
tone operators allows one to apply variational techniques to a large class of mono-
tone problems; one may then prove their structural stability via De Giorgi’s notion
of Γ -convergence. Here we briefly illustrate what we mean by structural stability in
a general topological set-up. Let us assume that
D is a set of admissible data (e.g., an initial datum and/or a source term),
O is a set of operators (e.g., a maximal monotone operator),
S is a set of admissible solutions.
352                                                                          A. Visintin

   We also assume that each of these sets is equipped with a topology and that a
(possibly multivalued) solution operator R : D × O → S is defined. We shall say
that:
(i) the class of admissible operators O is (sequentially) compact if

                   any sequence {on } in O accumulates at some o ∈ O,              (94)

(ii) the problem is structurally stable if the operator R is (sequentially) closed,
     namely, for any sequence {(dn , on , sn )} in D × O × S,

       sn ∈ R(dn , on )   ∀n,     (dn , on , sn ) → (d, o, s)   ⇒   s ∈ R(d, o).   (95)

It would also be desirable that any element s ∈ R(D, O) may be retrieved as in (95),
so that the set of the limits of solutions would coincide with that of the solutions of
the asymptotic problem. In general this further property seems difficult to be proved;
however, it easily follows from (95) if the limit problem has only one solution.



6 Variational Formulation and Structural Stability of Monotone
  Flows
In this section we apply the Fitzpatrick theory to monotone flows of the form Dt u +
α(u)  h, along the lines of Sects. 7 and 8 of [72].

Maximal Monotone Flows          Let us assume that we are given a Gelfand triplet of
(real) Hilbert spaces

            V ⊂ H = H ⊂ V       with continuous and dense injections.            (96)

Let α : V → P(V  ) be a maximal monotone operator, h ∈ L2 (0, T ; V  ), and con-
sider the Cauchy problem
                                                                      
              u ∈ X := v ∈ L2 (0, T ; V ) ∩ H 1 (0, T ; V  ) : v(0) = 0 ,
                                                                              (97)
             Dt u + α(u)  h in V  , a.e. in ] 0, T [.

   Here we embed the homogeneous initial condition into the space, so that

                X → L2 0, T ; V  ⊂ X  : v → Dt v        is monotone.

The condition u(0) = 0 is not really restrictive, since it may be retrieved by shift-
ing the unknown function u. More specifically, if u0 ∈ V then the initial condition
u(0) = u0 may be dealt with by replacing u by u := u − u0 and α by  α := α(· + u0 ).
(The case of u ∈ H is more delicate.)
              0

   We shall assume that
                                                       
            ∃a, b > 0 : ∀ v, v ∗ ∈ graph(α), v ∗ , v ≥ av2V − b,               (98)
Variational Formulation of Phase Transitions with Glass Formation                         353
                                                              ∗
             ∃c, d > 0 :     ∀ v, v ∗ ∈ graph(α),            v   ≤ cvV + d.         (99)
                                                                  V

It is known that the problem (97) then has one and only one solution, see e.g. [6, 9,
74].

Variational Formulations Next we introduce several variational formulations
of the problem (97). Let us define the Hilbert spaces H := L2 (0, T ; H ) and V :=
L2 (0, T ; V ), so that we have the Gelfand triplet

              V ⊂ H = H  ⊂ V         with continuous and dense injections.            (100)

Let the operator α be represented by a function f ∈ F(V ), and set
                                  T
                   F v, v ∗ :=         f v, v ∗ dt    ∀ v, v ∗ ∈ V × V .               (101)
                                   0

                                                          α : V → P(V ), cf. (91).
Notice that F ∈ F(V); actually, F represents the operator 
  By (84), the inclusion (97)2 is equivalent to

                    f (u, h − Dt u) = h − Dt u, u            a.e. in ]0, T [.

For any v ∈ X the mapping t → v(t)2H is absolutely continuous and differentiable
a.e. in ]0, T [, and Dt v(t)2H = 2Dt v, v a.e. The latter equation then also reads

                                  1
                 f (u, h − Dt u) + Dt u2H = h, u              a.e. in ]0, T [.      (102)
                                  2
As f fulfills (83), this is also equivalent to the family of equations that is obtained
by time integration
       τ                                        τ
                                  1     2
           f (u, h − Dt u)dt + u(τ )H =           h, udt ∀τ ∈ ]0, T [,        (103)
        0                         2              0

and also to the single equation
                                                                       T
                                            1     2
               J (u, h) := F (u, h − Dt u) + u(T )H =                     h, udt.   (104)
                                            2                          0

(Notice that u(T ) ∈ H , as by a standard identification X ⊂ C 0 ([0, T ]; H ), see e.g.
Chap. I of [40].)
  Let us next define the Hilbert spaces
                                        T                    
 
 H := v : ]0, T [→ H measurable: v :=
                                    2
                                            (T − t)vH dt < +∞ , (105)
                                                      2
                                              H̃
                                                         0
                                        T                    
 
 V := v : ]0, T [→ V measurable: v :=
                                    2
                                            (T − t)vV dt < +∞ ,
                                                      2
                                                                                        (106)
                                             Ṽ
                                                     0
354                                                                           A. Visintin

and the corresponding Gelfand triplet
                 ⊂ 
               =H
            V⊂H       V            with continuous and dense injections.         (107)

Let us next set
                            T
              v, v ∗ :=
             F                   (T − t)f v, v ∗ dt   ∀ v, v ∗ ∈ 
                                                                 V×
                                                                   V ,           (108)
                            0

which represents the operator
                              
   α :
      V→P   V ,       α (v) (t) = α v(t)      ∀v ∈ 
                                                       V, for a.e. t ∈ ]0, T [.   (109)

Notice that the system (97) is also equivalent to the twice time-integrated equation
                                                        T
                                1 T  
                                              2
                                              
   J (u, h) := F (u, h − Dt u) +          u(t) H dt =       (T − t)h, udt.   (110)
                                  2 0                    0

Thus J represents the operator Dt + 
                                     α (in a space of time dependent functions that
here we do not specify). Because of (83), (110) is equivalent to
                                      T
                          
                          J (u, h) ≤     (T − t)h, udt,                    (111)
                                        0

and thus also to what we label as a null-minimization problem:
                                      T
                h) := J(u, h) −
               K(u,                                             = 0.
                                         (T − t)h, udt = inf K                  (112)
                                        0

(The vanishing of the infimum is crucial.) It is easily seen that each of the other
equivalent equations (102), (103), (104) may also be formulated as a null-minimi-
zation problem.

Conclusion as for the Variational Formulation of (97) We exhibited four equiv-
alent variational formulations of the problem (97), namely (102), (103), (104),
(110). Each of them is tantamount to a null-minimization problem.
   These formulations are only formally (i.e., nonrigorously) equivalent, since they
involve different function spaces. We shall refer to the equivalence between (97)
and (104) as the extended B.E.N. principle, since it generalizes an approach that
was pioneered by Brezis and Ekeland [10, 11] and by Nayroles [50] in 1976; see
[66]. More specifically, the original B.E.N. principle assumes that α is cyclically
monotone and selects f equal to the Fenchel function. This is here extended to any
maximal monotone operator α on the basis of Fitzpatrick’s Theorem 5.3.

Compactness of Representative Functions Let us now consider a V × V  -equi-
coercive sequence {fn } in F(V ), in the sense that
                                                             
 ∀C ∈ R, sup vV + v ∗ V  : v, v ∗ ∈ V × V  , fn v, v ∗ ≤ C < +∞, (113)
             n∈N
Variational Formulation of Phase Transitions with Glass Formation                    355

and assume that
                                      hn → h      in V .                          (114)
                                             n and Jn as above, with fn in place of f .
For any n let us define the functionals Fn , F
Next we are concerned with the Γ -compactness of these sequences in the respective
function spaces with respect to the corresponding    π -convergence.
   By (113) and the Γ -compactness Theorem 5.4, there exists f such that, up to
extracting a subsequence,

                                                            π of V × V  ;
                   Γ
               fn → f      sequentially w.r.t. the topology                       (115)

this entails that f ∈ F(V ). Thus f represents an operator α : V → P(V  ).
   By (113), the sequence {Fn } is V × V -equi-coercive; there exists then F ∈ F
such that, up to extracting a subsequence,

                                                             π of V × V ;
                    Γ
               Fn → F       sequentially w.r.t. the topology                      (116)

hence F ∈ F(V). Let us denote by   α : V → P(V ) the operator that is represented
by F .
                                     n } in F(
   The same applies to the sequence {F         V): by (113) this sequence is 
                                                                             V ×
                                                                                V -
                            
equi-coercive. There exists F then such that, up to extracting a subsequence,

               n →                                    π of 
                     sequentially w.r.t. the topology     V×
                                                              V ,
                  Γ
               F    F                                                              (117)
                       ∈ F(
and this entails that F                          α : V → P(
                            V). Let us denote by             V ) the operator that is
                 
represented by F .
    We emphasize that the convergences (115)–(117) do not infer that f , F and F     
                                                             
are related as in (101) and (108), and not even that F and F are integral function-
als. Thus (91) and (109) need not hold in the limit; actually, a priori [
                                                                         α (v)](t) and
[
 α (v)](t) might also depend on v(τ ) for 0 < τ < t, as we shall see ahead.
    Besides the asymptotic behavior of the operators {αε }, we must study that of the
corresponding solutions of the monotone flow (97).

Tartar’s Example The flow (97) may not be stable with respect to variations of
the operator αn , even within the class of linear maximal monotone operators that
fulfill (98) and (99). We show this by means of a simple but illuminating exam-
ple due to Tartar [60], who also investigated the onset of long memory in (linear)
homogenization in [61] and [62], pp. 249–264. Let us assume that

                     an : Ω → R is measurable,              ∀n,
                                                                                   (118)
                     ∃c1 , c2 > 0 :   ∀n,    c 1 ≤ a n ≤ c2       a.e. in Ω.

   The Cauchy problem
                 
                   Dt un + an (x)un = 0 a.e. in Ω, for t > 0,
                                                                                   (119)
                  u(x, 0) = u0 (x)      a.e. in Ω
356                                                                            A. Visintin

is associated with a linear and continuous semigroup in H = L2 (Ω):

             Sn (t) : L2 (Ω) → L2 (Ω) : u0 → un (x, t) = e−an (x)t u0 (x).         (120)

(Equation (97)2 might also be regarded as an O.D.E. parameterized by x, but this
would not be equivalent to the present approach.)
   If an  a but an → a in L1loc (Ω) (that is, an converges weakly but not strongly),
then it is easily seen that the exponential form of (120) is lost in the limit. Indeed,
for any u0 ∈ L2 (Ω),
                             ∗
 un (x, t) = e−an (x)t u0 (x)  u(x, t) = e−a(x)t u0 (x)    in BV 0, T ; L2 (Ω) . (121)

We may thus conclude that the asymptotic linear operator u0 → u defines no semi-
group: u does not solve any problem of the form (119), for any a(x). The same
conclusion may also be attained from a different viewpoint: as an  a and appar-
ently one cannot prove more than un (·, t)  u(·, t) in L2 (Ω) for a.e. t, there is no
way to pass to the limit in Eq. (119)1 .
   This phenomenon may be interpreted as the onset of long memory from a se-
quence of flows with short memory.

Asymptotic Short Memory Let us assume that a sequence {αn } of operators
V → P(V  ) fulfills (98) and (99) uniformly in n. For any n let un be the solution of
(97) that corresponds to fn and hn ; it is easily seen that this sequence is bounded
in the space X (which we defined in (97)). There exists then u ∈ X such that, up to
extracting a subsequence,

                       un  u     in L2 (0, T ; V ) ∩ H 1 0, T ; V  ;              (122)

hence u(0) = 0, thus u ∈ X. Let us now assume that

                           the injection V → H is compact,                          (123)

so that the function
                                      T
                                 1             
             q : X → R : v →              v(t)2 dt is weakly continuous.         (124)
                                 2               H
                                      0

The asymptotic mapping J then has the form (110).
   If one were able to show that (124) entails un (T )2H → u(T )2H , then the form
of (104) would also be preserved in the limit—but this convergence is not obvious:
a priori, (122) just entails un (T )  u(T ) in H . At this point this author is just able
to say that Eq. (110) defines a (monotone) representable relation between u and h.
This need not be representable via a short-memory monotone flow of the form (97),
since f and F need not fulfill (101), as we saw for Tartar’s example above.
   In order to identify F  (u, f − Dt u), some further compactness property is in
order, besides (123). Let us first notice that, under further assumptions on the data,
Variational Formulation of Phase Transitions with Glass Formation                    357

the sequence un is bounded in

                 X s := H s (0, T ; V ) + H 1+s 0, T ; V      (0 < s ≤ 1).        (125)

More specifically, for s = 1 this holds if the sequence {hn } is bounded in
H 1 (0, T ; V  ) and {hn } and {αn } are such that the sequence {Dt un (0)} = {hn (0) −
αn (0)} is bounded in V . This rests on a standard argument, that is based on multi-
plying the inclusion Dt un + αn (un )  hn by the time increment δk un for any k > 0,
see e.g. [72]. This may easily be extended to any s ∈ ]0, 1[.
   By Proposition 5.1, the boundedness of {un } in X s entails that
                                          T
                      F (u, h − Dt u) =      f (u, h − Dt u)dt
                                          0
                                          T                                       (126)
                    (u, h − Dt u) =
                    F                          (T − t)f (u, h − Dt u)dt,
                                          0

as in (101) and (108). The function u thus fulfills the asymptotic gradient flow.

Conclusions as for the Compactness and Structural Stability of (97) Under the
equi-coerciveness assumption (113), a subsequence of the representative functions
n Γ -converges in the sense of (117).
F
    Under the convergences (114) and (117) of the data and of the operator, the as-
sociated solutions un weakly converge in X. The asymptotic pair (u, h) fulfills a
monotone relation, that may exhibit long memory. However, if (123) holds and the
sequence {un } is bounded in X s for some s > 0, then the short-memory form (97)
is preserved in the limit.

Remark 6.1 (i) Onset of long memory in the limit is also excluded if, in alterna-
tive to assuming compactness, we replace the initial condition u(0) = 0 by time-
periodicity: u(0) = u(T ); see [72].
   (ii) In Tartar’s example above V = H = L2 (Ω). In this case the lack of compact-
ness in the injection V → H is at the basis of onset of long memory.
   (iii) In a work in progress, the structural stability of Eq. (102) is directly studied
without time integration, defining a notion of time-dependent Γ -convergence.



7 Variational Formulation of a Class of Nonmonotone Flows
In this section we discuss the extension of the above analysis to some classes of
nonmonotone flows, partially along the lines of [69].

Variational Formulations of a Doubly Nonlinear Flow Let us now assume that
  ⎧
  ⎪              
  ⎨α : V → P V       is maximal monotone,
    ψ : H → R ∪ {+∞} is proper, convex and lower semicontinuous,    (127)
  ⎪
  ⎩                
    h ∈ L 0, T ; V , w ∈ H,
         2               0
358                                                                            A. Visintin

and consider a problem with two nonlinearities:
            ⎧
            ⎪
            ⎪ u ∈ L2 (0, T ; V ), w ∈ L2 (0, T ; H ) ∩ H 1 0, T ; V  ,
            ⎪
            ⎨D w + α(u)  h in V  , a.e. in ]0, T [,
                t
                                                                                   (128)
            ⎪
            ⎪ u ∈ ∂ψ(w) in H, a.e. in ]0, T [,
            ⎪
            ⎩
              w(0) = w 0 .

Of course, if ψ(w) = 12 w2H we retrieve (97). (We might prescribe a vanishing
initial value, as we did in (97); however in this case this would not provide the
space-time monotonicity.)
    If (98) and (99) are fulfilled and ψ is coercive, i.e.,
                                                   
                    ∀C ∈ R,        v ∈ H : ψ(v) ≤ C      is bounded,        (129)

then it is known that the above problem has a solution, see e.g. [3, 24]. Let the
operators α and ∂ψ be respectively represented by f ∈ F(V ) and by the Fenchel
function g ∈ F(H ) (that is, g(v1 , v2 ) = ψ(v1 ) + ψ ∗ (v2 ) for any v1 , v2 ∈ H ). The
system (128) is then equivalent to
             ⎧
             ⎪
             ⎪u ∈ L2 (0, T ; V ), w ∈ L2 (0, T ; H ) ∩ H 1 0, T ; V  ,
             ⎪
             ⎨f (u, h − D w) = h − D w, u a.e. in ]0, T [,
                          t               t
                         ∗ (u) = (u, w)
                                                                                   (130)
             ⎪
             ⎪ψ(w)   + ψ                        a.e. in ]0, T [,
             ⎪
             ⎩
                                         H
              w(0) = w 0 .

Because of (128)3 , the mapping t → ψ(w(t)) is absolutely continuous and differ-
entiable a.e. in ]0, T [, and

                  Dt ψ(w) = Dt u, z     a.e. in ]0, T [, ∀z ∈ ∂ψ(w).

Equation (130)2 is then equivalent to

                  f (u, h − Dt w) + Dt ψ(w) = h, u      a.e. in ]0, T [.         (131)

As f fulfills (83), this equality is also equivalent to
   τ                                                 τ
      f (u, h − Dt w)dt + ψ w(τ ) − ψ w =      0
                                                         h, udt    ∀τ ∈ ]0, T [. (132)
      0                                               0

By the same token, the latter is equivalent to the single equation
           T                                                 T
               f (u, h − Dt w)dt + ψ w(T ) − ψ w 0 =             h, udt,         (133)
              0                                                  0

and also to the twice time-integrated equation
    T                                                 T
                                           
         (T − t)f (u, h − Dt w) + ψ w(t) dt − T ψ w =
                                                   0
                                                          h, udt.                (134)
          0                                                          0
Variational Formulation of Phase Transitions with Glass Formation                           359

Defining F and F  as in (101) and (108), the two latter equations also read
                                                             T
      J (u, h) := F (u, h − Dt w) + ψ w(T ) − ψ w 0 =           h, udt,                 (135)
                                                                    0

                                    T                                   T
 J(u, h) := F
             (u, h − Dt w) +            ψ w(t) dt − T ψ w 0 =                (T − t)h, udt.
                                    0                                    0
                                                                           (136)
Each one of these equations is equivalent to a null-minimization problem. For in-
stance, (136) is equivalent to
                                    T
                h) := J(u, h) −
               K(u,                                           = 0.
                                       (T − t)h, udt = inf K             (137)
                                          0

On the other hand (130)3 is equivalent to
                     T                     T
                                   ∗
                                         
                         ψ(w) + ψ (u) dt =     (u, w)H dt,                                (138)
                         0                             0

which is also equivalent to a null-minimization problem:
                   T                        T
                                     
     H(u, h) :=       ψ(w) + ψ ∗ (u) dt −                        = 0.
                                                (u, w)H dt = inf H                        (139)
                     0                             0

Finally, each of these systems either of two equations or of two null-minimization
problems is equivalent to a single null-minimization problem. For instance, the sys-
tem (137), (139) is equivalent to
                          h) + H
                         K(u,   (u, h) = inf(K
                                              +H
                                                ) = 0.                                   (140)

(Of course, these equivalences rest on the two conditions (83) and (84) of represen-
tation.)

Conclusions as for the Variational Formulation of (128) The system (128) is
equivalent to (130), and this is tantamount to a null-minimization problem.
   Each of Eqs. (131)–(134) coupled with (138) is formally equivalent to the system
of the two Eqs. (130)2 and (130)3 . Each of these systems may be formulated as a
null-minimization problem.
   The structural stability of the problem (128) may be proved by using tools anal-
ogous to those of Sect. 6; hopefully, this issue will be addressed in a work apart.

Remark 7.1 The present discussion may be extended to doubly-nonlinear problems
of the form
            ⎧
            ⎪
            ⎨u ∈ L (0, T ; V ) ∩ H (0, T ; H ), w ∈ L (0, T ; H ),
                  2               1                  2

             w + α(u)  h in V  , a.e. in ]0, T [,                      (141)
            ⎪
            ⎩
             w ∈ ∂ψ(Dt u) in H , a.e. in ]0, T [.
360                                                                          A. Visintin

A variational formulation may also be given for this problem, and structural stability
may be studied.



8 Variational Formulation of the Heat and Mass Diffusion
  Problem

In this section we address the variational formulation of the problem of Sect. 4.

Variational Formulation of the Single-Phase Problem Let us first consider the
problem of heat and mass diffusion without phase transition

                     D t u + ∇ · j u = f1    in V1 , a.e. in ]0, T [,           (142)
                     D t c + ∇ · j c = f2   in V2 , a.e. in ] 0, T [,           (143)
                     (θ, ω) ∈ ∂ϕ(u, c)      a.e. in Q,                           (144)
                     (j u , j c ) = −γ (θ, ω, ∇θ, ∇ω)         a.e. in Q.         (145)

   By setting

                U := (u, c),         Θ := (θ, ω),
                J := (j u , j c ),     ΛJ := ∇ · J = (∇ · j u , ∇ · j c ),       (146)
                                                               
                V := V1 × V2 ,         f := (f1 , f2 ) ∈ V ,

the system (142)–(145) also reads

                       Θ ∈ ∂ϕ(U )      a.e. in Q,                                (147)
                       J = −γ (Θ, ∇Θ)         a.e. in Q,                         (148)
                                                    
                       Dt U + ΛJ = f        in V , a.e. in ]0, T [.              (149)

   Denoting by F the Fenchel function ϕ + ϕ ∗ , the relation (147) is clearly equiva-
lent to
                             F (U, Θ) = U · Θ           a.e. in Q.               (150)
Next we shall formulate the relation (148) in V × V  a.e. in ]0, T [, rather than
pointwise in Q. Let us first denote by gΘ a representative function of the maximal
monotone mapping γ (Θ, ·) : (R3 )2 → P((R3 )2 ), so that (148) also reads

                        gΘ (∇Θ, −J ) = −J · ∇Θ              a.e. in Q            (151)

(here Θ ∈ (R3 )2 just plays the role of a parameter). Let us assume that
                                                                 
  ∀C ∈ R, sup SV + S ∗ V  : S, S ∗ ∈ V × V  , gΘ S, S ∗ ≤ C < +∞, (152)
Variational Formulation of Phase Transitions with Glass Formation                             361

uniformly with respect to Θ, and define the function
                                                                      
          ∗                                         3 2      ∗    
  GΘ S, S = inf         gΘ (∇S, Z)dx : Z ∈ L (Ω) , −∇ · Z = S in D (Ω)
                                               2                      2
                            Ω
              ∗
     ∀ S, S       ∈ V × V .                                                                (153)

By (152) this infimum is attained at some Ẑ ∈ (L2 (Ω)3 )2 . The function GΘ is
convex and lower semicontinuous, and
                                              
                                gΘ ∈F((R3 )2 )                                    
GΘ S, S ∗ =       gΘ (∇S, Ẑ)dx      ≥           Ẑ · ∇Sdx = −∇ · Ẑ, S = S ∗ , S ;
                       Ω                                 Ω
                                                                                 (154)
thus GΘ ∈ F(V ). Moreover, as gΘ (∇S, Ẑ) ≥ Ẑ · ∇S pointwise in Ω, equality holds
in (154) if and only if gΘ (∇S, Ẑ) = Ẑ · ∇S a.e. in Ω. As the function gΘ represents
γ (Θ, ·), this is equivalent to Ẑ = γ (Θ, ∇S) a.e. in Ω, whence

                       Ŝ ∗ = −∇ · Ẑ = −∇ · γ (Θ, ∇S)            in H −1 (Ω)3 .
                                                                                    2


   Denoting by ·,· the duality between V  and V , we may then replace (148) by
the equation
                           GΘ (Θ, ∇ · J ) = Λ · J, Θ           a.e. in ]0, T [.           (155)
By eliminating Eq. (149), we then infer that the system (147)–(149) is equivalent to

                  F (U, Θ) = U · Θ      a.e. in Q,                                          (156)
                  GΘ (Θ, f − Dt U ) + Dt U, Θ = f, Θ                 a.e. in ]0, T [.   (157)

By (147) (or equivalently (156)), we have Dt ϕ(U ) = Dt U, Θ. Assuming the ini-
tial condition U (0) = U 0 , Eq. (157) is then also equivalent to either of the following
equations

        GΘ (J, f − Dt U )dt + Dt ϕ(U ) = f, Θdt a.e. in ]0, T [,                          (158)
         T                                            T
            GΘ (J, f − Dt U )dt + ϕ U (T ) − ϕ U =
                                                 0
                                                           f, Θdt,                        (159)
          0                                                               0
         T                                       T
              (T − t)GΘ (J, f − Dt U )dt +               ϕ U (T ) dt − T ϕ U 0
          0                                          0
                   T
              =         (T − t)f, Θdt.                                                    (160)
                   0

Therefore the system (147)–(149) is equivalent to either of these equations coupled
with
                                         
                          F (U, Θ)dxdt =         U · Θdxdt.                   (161)
                                Q                            Q
362                                                                                  A. Visintin

Each of these equations is equivalent to a null-minimization problem; therefore the
whole system is equivalent to a single null-minimization, in analogy with (140).

Variational Formulation of the Glass-Formation Problem                       In Sect. 3 we de-
rived the model at the basis of Problem 4.1, i.e.,

                       (θ, ω, r) ∈ ∂ϕ(u, c, χ)     a.e. in Q,                            (162)
                       (j u , j c ) = −γ (θ, ω, ∇θ, ∇ω)      a.e. in Q,                  (163)
                       Dt u + ∇ · j u = f1    in V1 , a.e. in ]0, T [,                  (164)
                       Dt c + ∇ · j c = f 2   in V2 , a.e. in ]0, T [,                  (165)
                       Dt χ + r = ρ(θ, ω)      a.e. in Q.                                (166)

   Next we replace the definitions (146) by

        U := (u, c, χ),         Θ := (θ, ω, r),
        J := (j u , j c , r),    ΛJ := (∇ · j u , ∇ · j c , r),                          (167)
        V := V1 × V2 × L2 (Ω),            f (Θ) := f1 , f2 , ρ(θ, ω) ∈ V  .

The system (162)–(166) then also reads:

                       Θ ∈ ∂ϕ(U )     a.e. in Q,                                         (168)
                       J = −γ (Θ, ∇Θ)         a.e. in Q,                                 (169)
                       Dt U + ΛJ = f (Θ)         in V  , a.e. in ]0, T [.               (170)

   Defining F and GΘ as above, we may then repeat the analysis of (150)–(161),
with the proviso of replacing the prescribed source term f by f (Θ). However,
despite of the formal analogy, this problem differs from that of the first part of this
section: for instance, this problem also includes the ODE (166).

Conclusions as for the Variational Formulation of (162)–(166) This system
is equivalent to either of Eqs. (158)–(160) coupled with (161) (here with f (Θ) in
place of f ). Each of these formulations is tantamount to a single null-minimization
problem.
    The analysis of the structural stability of this problem is here left open.

Acknowledgement This research was partially supported by the P.R.I.N. project “Phase transi-
tions, hysteresis and multiscaling” of Italian M.I.U.R.




References
 1. Alexiades, V., Solomon, A.D.: Mathematical Modeling of Melting and Freezing Processes.
    Hemisphere, Washington (1993)
Variational Formulation of Phase Transitions with Glass Formation                                363

 2. Alexiades, V., Wilson, D.G., Solomon, A.D.: Macroscopic global modeling of binary alloy
    solidification processes. Q. Appl. Math. 43, 143–158 (1985)
 3. Alt, H.W., Luckhaus, S.: Quasilinear elliptic-parabolic differential equations. Math. Z. 183,
    311–341 (1983)
 4. Ansini, N., Dal Maso, G., Zeppieri, C.I.: New results on Gamma-limits of integral functionals.
    Preprint, SISSA, Trieste (2012)
 5. Attouch, H.: Variational Convergence for Functions and Operators. Pitman, Boston (1984)
 6. Barbu, V.: Nonlinear Differential Equations of Monotone Types in Banach Spaces. Springer,
    Berlin (2010)
 7. Braides, A.: Γ -Convergence for Beginners. Oxford University Press, Oxford (2002)
 8. Braides, A., Defranceschi, A.: Homogenization of Multiple Integrals. Oxford University Press,
    Oxford (1998)
 9. Brezis, H.: Opérateurs Maximaux Monotones et Semi-Groupes de Contractions dans les Es-
    paces de Hilbert. North-Holland, Amsterdam (1973)
10. Brezis, H., Ekeland, I.: Un principe variationnel associé à certaines équations paraboliques. I.
    Le cas indépendant du temps. C. R. Acad. Sci. Paris, Sér. A–B 282, 971–974 (1976)
11. Brezis, H., Ekeland, I.: Un principe variationnel associé à certaines équations paraboliques. II.
    Le cas dépendant du temps. C. R. Acad. Sci. Paris, Sér. A–B 282, 1197–1198 (1976)
12. Brokate, M., Sprekels, J.: Hysteresis and Phase Transitions. Springer, Heidelberg (1996)
13. Burachik, R.S., Svaiter, B.F.: Maximal monotone operators, convex functions, and a special
    family of enlargements. Set-Valued Anal. 10, 297–316 (2002)
14. Burachik, R.S., Svaiter, B.F.: Maximal monotonicity, conjugation and the duality product.
    Proc. Am. Math. Soc. 131, 2379–2383 (2003)
15. Callen, H.B.: Thermodynamics and an Introduction to Thermostatistics. Wiley, New York
    (1985)
16. Chalmers, B.: Principles of Solidification. Wiley, New York (1964)
17. Chiadò Piat, V., Dal Maso, G., Defranceschi, A.: G-convergence of monotone operators. Ann.
    Inst. Henri Poincaré, Anal. Non Linéaire 7, 123–160 (1990)
18. Christian, J.W.: The Theory of Transformations in Metals and Alloys. Part 1: Equilibrium and
    General Kinetic Theory. Pergamon Press, London (2002)
19. Colli, P.L., Visintin, A.: On a class of doubly nonlinear evolution problems. Commun. Partial
    Differ. Equ. 15, 737–756 (1990)
20. Dal Maso, G.: An Introduction to Γ -Convergence. Birkhäuser, Boston (1993)
21. De Giorgi, E., Franzoni, T.: Su un tipo di convergenza variazionale. Atti Accad. Naz. Lincei,
    Rend. Cl. Sci. Fis. Mat. Nat. (8) 58, 842–850 (1975)
22. De Groot, S.R.: Thermodynamics of Irreversible Processes. North-Holland, Amsterdam
    (1961)
23. De Groot, S.R., Mazur, P.: Non-equilibrium Thermodynamics. North-Holland, Amsterdam
    (1962)
24. DiBenedetto, E., Showalter, R.E.: Implicit degenerate evolution equations and applications.
    SIAM J. Math. Anal. 12, 731–751 (1981)
25. Donnelly, J.D.P.: A model for non-equilibrium thermodynamic processes involving phase
    changes. J. Inst. Math. Appl. 24, 425–438 (1979)
26. Ekeland, I., Temam, R.: Analyse Convexe et Problèmes Variationnelles. Dunod/Gauthier-
    Villars, Paris (1974)
27. Eckart, C.: The thermodynamics of irreversible processes I: The simple fluid, Phys. Rev. 58
    (1940)
28. Eckart, C.: The thermodynamics of irreversible processes II. Fluid mixtures, Phys. Rev. 58
    (1940)
29. Elliott, C.M., Ockendon, J.R.: Weak and Variational Methods for Moving Boundary Problems.
    Pitman, Boston (1982)
30. Fitzpatrick, S.: Representing monotone operators by convex functions. In: Workshop/Mini-
    conference on Functional Analysis and Optimization, Canberra, 1988. Proc. Centre Math.
    Anal. Austral. Nat. Univ., vol. 20, pp. 59–65. Austral. Nat. Univ., Canberra (1988)
364                                                                                   A. Visintin

31. Flemings, M.C.: Solidification Processing. McGraw-Hill, New York (1973)
32. Francfort, G., Murat, F., Tartar, L.: Homogenization of monotone operators in divergence form
    with x-dependent multivalued graphs. Ann. Mat. Pura Appl. (4) 118, 631–652 (2009)
33. Frémond, M.: Phase Change in Mechanics. Springer, Berlin (2012)
34. Ghoussoub, N.: A variational theory for monotone vector fields. J. Fixed Point Theory Appl.
    4, 107–135 (2008)
35. Ghoussoub, N.: Self-dual Partial Differential Systems and Their Variational Principles.
    Springer, Berlin (2009)
36. Gupta, S.C.: The classical Stefan problem. In: Basic Concepts, Modelling and Analysis.
    North-Holland Series. Elsevier, Amsterdam (2003)
37. Hiriart-Urruty, J.-B., Lemarechal, C.: Convex Analysis and Optimization Algorithms.
    Springer, Berlin (1993)
38. Kondepudi, D., Prigogine, I.: Modern Thermodynamics. Wiley, New York (1998)
39. Kurz, W., Fisher, D.J.: Fundamentals of Solidification. Trans Tech, Aedermannsdorf (1989)
40. Lions, J.L., Magenes, E.: Non-homogeneous Boundary Value Problems and Applications,
    vols. I, II. Springer, Berlin (1972). French edition: Dunod, Paris (1968)
41. Luckhaus, S.: Solidification of alloys and the Gibbs-Thomson law. Preprint (1994)
42. Luckhaus, S., Visintin, A.: Phase transition in a multicomponent system. Manuscr. Math. 43,
    261–288 (1983)
43. Martinez-Legaz, J.-E., Svaiter, B.F.: Monotone operators representable by l.s.c. convex func-
    tions. Set-Valued Anal. 13, 21–46 (2005)
44. Martinez-Legaz, J.-E., Svaiter, B.F.: Minimal convex functions bounded below by the duality
    product. Proc. Am. Math. Soc. 136, 873–878 (2008)
45. Martinez-Legaz, J.-E., Théra, M.: A convex representation of maximal monotone operators.
    J. Nonlinear Convex Anal. 2, 243–247 (2001)
46. Marques Alves, M., Svaiter, B.F.: Brøndsted-Rockafellar property and maximality of mono-
    tone operators representable by convex functions in non-reflexive Banach spaces. J. Convex
    Anal. 15, 693–706 (2008)
47. Müller, I.: A History of Thermodynamics. Springer, Berlin (2007)
48. Müller, I., Weiss, W.: Entropy and Energy. A Universal Competition. Springer, Berlin (2005)
49. Müller, I., Weiss, W.: A history of thermodynamics of irreversible processes (in preparation)
50. Nayroles, B.: Deux théorèmes de minimum pour certains systèmes dissipatifs. C. R. Acad.
    Sci. Paris, Sér. A–B 282, A1035–A1038 (1976)
51. Penrose, O., Fife, P.C.: Thermodynamically consistent models of phase-field type for the ki-
    netics of phase transitions. Physica D 43, 44–62 (1990)
52. Penrose, O., Fife, P.C.: On the relation between the standard phase-field model and a “ther-
    modynamically consistent” phase-field model. Physica D 69, 107–113 (1993)
53. Prigogine, I.: Thermodynamics of Irreversible Processes. Wiley-Interscience, New York
    (1967)
54. Rockafellar, R.T.: Convex Analysis. Princeton University Press, Princeton (1969)
55. Stefanelli, U.: The Brezis-Ekeland principle for doubly nonlinear equations. SIAM J. Control
    Optim. 8, 1615–1642 (2008)
56. Stefan, J.: Über einige Probleme der Theorie der Wärmeleitung. Sitzungber., Wien, Akad.
    Mat. Natur. 98, 473–484 (1889)
57. Stefan, J.: Über einige Probleme der Theorie der Wärmeleitung. Sitzungber., Wien, Akad.
    Mat. Natur. 98, 614–634 (1889)
58. Stefan, J.: Über einige Probleme der Theorie der Wärmeleitung. Sitzungber., Wien, Akad.
    Mat. Natur. 98, 965–983 (1889)
59. Stefan, J.: Über einige Probleme der Theorie der Wärmeleitung. Sitzungber., Wien, Akad.
    Mat. Natur. 98, 1418–1442 (1889)
60. Tartar, L.: Nonlocal effects induced by homogenization. In: Colombini, F., Marino, A., Mod-
    ica, L., Spagnolo, S. (Eds.) Partial Differential Equations and the Calculus of Variations,
    vol. II, pp. 925–938. Birkhäuser, Boston (1989)
Variational Formulation of Phase Transitions with Glass Formation                               365

61. Tartar, L.: Memory effects and homogenization. Arch. Ration. Mech. Anal. 111, 121–133
    (1990)
62. Tartar, L.: The General Theory of Homogenization. A Personalized Introduction.
    Springer/UMI, Berlin/Bologna (2009)
63. Tarzia, D.A.: A Bibliography on Moving-Free Boundary Problems for the Heat-Diffusion
    Equation. The Stefan and Related Problems. Universidad Austral, Departamento de Matemat-
    ica, Rosario (2000)
64. Visintin, A.: Models of Phase Transitions. Birkhäuser, Boston (1996)
65. Visintin, A.: Introduction to Stefan-type problems. In: Dafermos, C., Pokorny, M. (Eds.) Hand-
    book of Differential Equations: Evolutionary Differential Equations, vol. IV, pp. 377–484.
    North-Holland, Amsterdam (2008), Chap. 8
66. Visintin, A.: Extension of the Brezis-Ekeland-Nayroles principle to monotone operators. Adv.
    Math. Sci. Appl. 18, 633–650 (2008)
67. Visintin, A.: Phase transitions and glass formation. SIAM J. Math. Anal. 41, 1725–1756
    (2009)
68. Visintin, A.: Scale-transformations in the homogenization of nonlinear magnetic processes.
    Arch. Ration. Mech. Anal. 198, 569–611 (2010)
69. Visintin, A.: Structural stability of doubly nonlinear flows. Boll. Unione Mat. Ital. IV, 363–
    391 (2011)
70. Visintin, A.: On the structural stability of monotone flows. Boll. Unione Mat. Ital. IV, 471–479
    (2011)
71. Visintin, A.: Structural stability of rate-independent nonpotential flows. Discrete Contin. Dyn.
    Syst. (in press)
72. Visintin, A.: Variational formulation and structural stability of monotone equations. Calc. Var.
    Partial Differ. Equ. (in press)
73. Woodruff, D.P.: The Solid-Liquid Interface. Cambridge University Press, Cambridge (1973)
74. Zeidler, E.: Nonlinear Functional Analysis and Its Applications. II/B. Nonlinear Monotone
    Operators. Springer, New York (1990)



---
normalized_id: shared-pdf-reference-model-based-parameter-estimation-the
exam_code: SHARED
material_scope: model based parameter estimation the.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Model Based Parameter Estimation The.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-model-based-parameter-estimation-the

namdatviet E-books collection

Visit us at:
         http://tusachtonghop.com/forums/

Thank you, and happy learning!
Contributions in Mathematical
and Computational Sciences  Volume 4

Editors
Hans Georg Bock
Willi Jäger
Otmar Venjakob




For other titles published in this series, go to
http://www.springer.com/series/8861
•
Hans Georg Bock
Thomas Carraro
Willi Jäger
Stefan Körkel
Rolf Rannacher
Johannes P. Schlöder
Editors




Model Based Parameter
Estimation
Theory and Applications




                          123
Editors
Hans Georg Bock                                           Thomas Carraro
Willi Jäger                                              Rolf Rannacher
Stefan Körkel                                            Institute for Applied Mathematics
Johannes P. Schlöder                                     Heidelberg University
Interdisciplinary Center                                  Heidelberg, Germany
   for Scientific Computing (IWR)
Heidelberg University
Heidelberg, Germany




ISBN 978-3-642-30366-1          ISBN 978-3-642-30367-8 (eBook)
DOI 10.1007/978-3-642-30367-8
Springer Heidelberg New York Dordrecht London

Library of Congress Control Number: 2012954944

Math. Subj. Classification (2010): 34-XX, 35-XX, 49-XX, 62-XX, 65-XX, 68-XX, 90-XX, 92-XX

© Springer-Verlag Berlin Heidelberg 2013
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
While the advice and information in this book are believed to be true and accurate at the date of
publication, neither the authors nor the editors nor the publisher can accept any legal responsibility for
any errors or omissions that may be made. The publisher makes no warranty, express or implied, with
respect to the material contained herein.

Printed on acid-free paper

Springer is part of Springer Science+Business Media (www.springer.com)
Preface to the Series




Contributions to Mathematical and Computational Sciences

Mathematical theories and methods and effective computational algorithms are
crucial in coping with the challenges arising in the sciences and in many areas of
their application. New concepts and approaches are necessary in order to overcome
the complexity barriers particularly created by nonlinearity, high-dimensionality,
multiple scales and uncertainty. Combining advanced mathematical and computa-
tional methods and computer technology is an essential key to achieving progress,
often even in purely theoretical research.
    The term mathematical sciences refers to mathematics and its genuine sub-
fields, as well as to scientific disciplines that are based on mathematical concepts
and methods, including sub-fields of the natural and life sciences, the engineering
and social sciences and recently also of the humanities. It is a major aim of this
series to integrate the different sub-fields within mathematics and the computational
sciences, and to build bridges to all academic disciplines, to industry and other fields
of society, where mathematical and computational methods are necessary tools for
progress. Fundamental and application-oriented research will be covered in proper
balance.
    The series will further offer contributions on areas at the frontier of research,
providing both detailed information on topical research, as well as surveys of the
state-of-the-art in a manner not usually possible in standard journal publications. Its
volumes are intended to cover themes involving more than just a single “spectral
line” of the rich spectrum of mathematical and computational research.
    The Mathematics Center Heidelberg (MATCH) and the Interdisciplinary Center
for Scientific Computing (IWR) with its Heidelberg Graduate School of Mathemat-
ical and Computational Methods for the Sciences (HGS) are in charge of providing
and preparing the material for publication. A substantial part of the material will be
acquired in workshops and symposia organized by these institutions in topical areas
of research. The resulting volumes should be more than just proceedings collecting



                                                                                      v
vi                                                                 Preface to the Series


papers submitted in advance. The exchange of information and the discussions
during the meetings should also have a substantial influence on the contributions.
   This series is a venture posing challenges to all partners involved. A unique
style attracting a larger audience beyond the group of experts in the subject areas
of specific volumes will have to be developed.
   Springer Verlag deserves our special appreciation for its most efficient support in
structuring and initiating this series.

Heidelberg University                                              Hans Georg Bock
Germany                                                                  Willi Jäger
                                                                    Otmar Venjakob
Preface




The articles presented in this book are focused on mathematical and numerical
methods for parameter estimation on differential equations-based models. Applica-
tions are taken from chemistry, electro-chemistry, environmental physics, biology,
medicine, image processing and computer vision. This collection results from a
workshop held in summer 2009 at Heidelberg University, supported jointly by the
MAThematics Center Heidelberg (MATCH) and the Heidelberg Graduate School
of Mathematical and Computational Methods for the Sciences (HGS MathComp).
This activity is part of a larger educational and research program promoted by the
German “Excellence Initiative.” These two institutions are central in providing an
interdisciplinary environment for students, researchers and external cooperators,
including industrial partners. Special emphasis is given to the creation of research
links between different areas of mathematics, computer science and several applied
disciplines. In particular, HGS MathComp is located at the Interdisciplinary Center
for Scientific Computing (IWR), where different scientific disciplines are intercon-
nected with a special focus on the application of mathematical methods. Within
this program the aim of the workshop “Model Based Parameter Estimation: Theory
and Applications” was to create a platform for doctoral students and researchers
from different disciplines to start interdisciplinary collaborations within institutes in
Heidelberg and with external collaboration partners. The main topic of the workshop
was the application of mathematical models and numerical methods for the solution
of parameter estimation problems in various scientific areas. Well-founded methods
of applied mathematics and computer-based modeling are essential to improving
the quality of interdisciplinary research. As a result, scientific computing for the
simulation of complex phenomena has become a standard in physics, chemistry, the
life sciences and engineering, in research and industrial applications. Nevertheless,
the use of optimization techniques in several research areas, though continuously
increasing over the last years, still needs to be improved with the most advanced
methods within interdisciplinary projects. To this end the workshop was mainly
conceived for the use of model-based optimization for parameter estimation. The



                                                                                      vii
viii                                                                          Preface


invited articles in this volume give an overview of related advanced computational
methods and of problems occurring in prototypical applications. It is our hope that
this book can serve as starting point for even more challenging interdisciplinary
projects.
   The contributions are ordered in two main groups according to the following
organization:
• The first part of the book introduces state-of-the-art mathematical and numerical
  methods for solving parameter estimation problems. More concretely, mathemat-
  ical and numerical methods for parameter estimation and optimum experimental
  design in the framework of differential equations are presented. Adaptive
  methods for the finite element solution of parameter estimation problems with
  models based on partial differential equations are shown, and robust methods for
  the parameter identification for data with outliers are introduced. Furthermore, a
  fast numerical method for the optimal sensor activation is presented.
• The second part of the book is focused on applications of parameter esti-
  mation in the following fields: the life sciences, which comprise systems
  biology and applications to biomedical sciences, chemistry, physics, image pro-
  cessing and computer vision. More specifically, the integration of experimental
  data and mathematical models is presented on quantitative analysis of signaling
  pathways, fluorescence recovery after photo-bleaching (FRAP), gene expression
  profiling, treatment of infectious diseases and stem cell transplantation. In addi-
  tion, applications in combustion chemistry, catalytic reactors, heat transport in
  tubular reactors and solid oxide fuel cells (SOFC) are shown. Application of
  robust parameter estimation techniques in environmental physics is presented.
  Examples of parameter estimation in image processing and computer vision
  complete the second part of the book.
  The editors would like to thank all the participants of the workshop and the
contributors to this volume. Finally, the support by MATCH and the HGS Math-
Comp is gratefully acknowledged.
Contents




Parameter Estimation and Optimum Experimental Design for
Differential Equation Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                            1
Hans Georg Bock, Stefan Körkel, and Johannes P. Schlöder
Adaptive Finite Element Methods for Parameter Identification
Problems . . . .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .   31
Boris Vexler
Gauss–Newton Methods for Robust Parameter Estimation .. . . . . . . . . . . . . . . .                                                                        55
Tanja Binder and Ekaterina Kostina
An Optimal Scanning Sensor Activation Policy for Parameter
Estimation of Distributed Systems . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . .                                   89
Dariusz Uciński
Interaction Between Experiment, Modeling and Simulation of
Spatial Aspects in the JAK2/STAT5 Signaling Pathway . . . . . . . . . . . . . . . . . . . . 125
Elfriede Friedmann, Andrea C. Pfeifer, Rebecca Neumann,
Ursula Klingmüller, and Rolf Rannacher
The Importance and Challenges of Bayesian Parameter
Learning in Systems Biology .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 145
Johanna Mazur and Lars Kaderali
Experiment Setups and Parameter Estimation in Fluorescence
Recovery After Photobleaching Experiments: A Review of
Current Practice . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 157
J. Beaudouin, Mario S. Mommer, Hans Georg Bock,
and Roland Eils
Drug Resistance in Infectious Diseases: Modeling, Parameter
Estimation and Numerical Simulation . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 171
Le Thi Thanh An and Willi Jäger


                                                                                                                                                             ix
x                                                                                                                                          Contents


Mathematical Models of Hematopoietic Reconstitution After
Stem Cell Transplantation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 191
Anna Marciniak-Czochra and Thomas Stiehl
Combustion Chemistry and Parameter Estimation . . . . . .. . . . . . . . . . . . . . . . . . . . 207
Marc Fischer and Uwe Riedel
Numerical Simulation of Catalytic Reactors by Molecular-
Based Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 227
Olaf Deutschmann and Steffen Tischer
Model-Based Design of Experiments for Estimating
Heat-Transport Parameters in Tubular Reactors . . . . . . . .. . . . . . . . . . . . . . . . . . . . 251
Alexander Badinski and Daniel Corbett
Parameter Estimation for a Reconstructed SOFC
Mixed-Conducting LSCF-Cathode . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 267
Thomas Carraro and Jochen Joos
An Application of Robust Parameter Estimation in
Environmental Physics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . 287
Alexandra G. Herzog and Felix R. Vogel
Parameter Estimation in Image Processing and Computer Vision . . . . . . . . . 311
Christoph S. Garbe and Björn Ommer
Parameter Estimation and Optimum
Experimental Design for Differential
Equation Models

Hans Georg Bock, Stefan Körkel, and Johannes P. Schlöder




Abstract This article reviews state-of-the-art methods for parameter estimation and
optimum experimental design in optimization based modeling. For the calibration
of differential equation models for nonlinear processes, constrained parameter
estimation problems are considered. For their solution, numerical methods based
on the boundary value problem method optimization approach consisting of mul-
tiple shooting and a generalized Gauß–Newton method are discussed. To suggest
experiments that deliver data to minimize the statistical uncertainty of parameter
estimates, optimum experimental design problems are formulated, an intricate class
of non-standard optimal control problems, and derivative-based methods for their
solution are presented.

Keywords Gauß–Newton method • Multiple shooting • Nonlinear differential-
algebraic equations • Optimum experimental design • Parameter estimation •
Variance–covariance matrix


1 Introduction

Dynamic processes in science, engineering or medicine often can be described by
differential equation models. Solutions of the model equations, usually obtained
by numerical methods, give simulations of the process behavior under various
conditions.
   To obtain realistic model output results, the model has to be validated. An
important task for this is the calibration of the model, i.e. to explain experimental
data by appropriate simulation results. In order to fit the model to the data, unknown


H.G. Bock  S. Körkel ()  J.P. Schlöder
Interdisciplinary Center for Scientific Computing, Heidelberg University,
Im Neuenheimer Feld 368, 69120 Heidelberg, Germany
e-mail: stefan.koerkel@iwr.uni-heidelberg.de

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions            1
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 1,
© Springer-Verlag Berlin Heidelberg 2013
2                                                                         H.G. Bock et al.


quantities in the model, called parameters, have to be estimated by minimizing a
norm of the residuals between data and model response.
   A fit of given data yet does not mean a validated model. Due to the randomness
of experimental errors, the parameter estimate is also a random variable. Only if
the statistical uncertainty of the parameters is small, simulations can also predict
the outcome of future experiments and explain the behavior of the real process in a
qualitatively and quantitatively correct way.
   The statistical uncertainty of a parameter estimate depends on layout, setup,
control and sampling of the experiments. Experimental design optimization prob-
lems minimize a function of the variance–covariance matrix of the parameter
estimation problem. Optimal experiments can reduce the experimental effort for
model validation drastically.
   In this article we review the formulation of parameter estimation and optimum
experimental design problems and discuss methods for their numerical solution.
   The article is structured as follows. After this introduction, Sect. 2 introduces the
class of differential equation models we consider in this article. In Sect. 3, parameter
estimation problems are formulated. Section 4 deals with parameterization of the
model equations by multiple shooting and Sect. 5 with the evaluation of derivatives.
In Sect. 6, the generalized Gauß–Newton method is reviewed, and in Sect. 7, the
local convergence behavior of this method is analyzed. Section 8 treats optimum
experimental design, the problem formulation, variants and a sketch of numerical
solution approaches.


2 Differential Equation Models

In this article we consider models of dynamic processes described by differential
algebraic equations (DAE):

                              P D f .t; y.t/; z.t/; p/
                              y.t/                                                    (1)
                                 0 D g.t; y.t/; z.t/; p/                              (2)

                                      Ê
with t 2 I WD Œt0 I tf . y W I ! ny are the differential states, z W I ! nz ,      Ê
                                                                      Ê
the algebraic states. We subsume all states x WD .y; z/ W I ! nx D ny Cnz .     Ê
                                                 Ê
Further the model depends on variables p 2 np the values of which are known
only imprecisely. We call these variables parameters.
                        Ê Ê Ê Ê                  Ê            Ê Ê Ê Ê
   We assume that f W  ny  nz  np ! ny and g W  ny  nz  np !
Ê nz
     are sufficiently piecewise smooth for the solution of DAE initial value problems
by numerical integration schemes.
   In applications from, e.g., chemical reaction kinetics, chemical engineering,
systems biology or epidemiology, the DAE systems are usually highly nonlinear in
states and parameters and often stiff. For spatially distributed systems described by
partial differential equations we apply a semi-discretization by a method of lines end
obtain high-dimensional and sparse systems where the Courant–Friedrichs–Lewy
condition also causes stiffness.
Parameter Estimation and Optimum Experimental Design                                                 3


   Further we assume that the DAE is of index 1, i.e.
                                            @g
                                    rank       D nz :                                               (3)
                                            @z
Then the existence and uniqueness of solutions can be established based on theory
of ordinary differential equations.
   We consider initial value problems with initial conditions

                                    y.t0 / D y0 .p/:                                                (4)

Initial values are required only for differential states, initial algebraic states are
determined by the consistency of the algebraic equations

                              g.t0 ; y.t0 /; z.t0 /; p/ D 0:                                        (5)

For the solution by numerical methods it is required that the initial values for y and z
are consistent. Then the numerical solutions stay consistent on the whole integration
interval. To meet this requirement without always solving (5), we use modifications
of the DAE which are automatically consistent, so-called relaxed formulations:

           P D f .t; y.t/; z.t/; p/
           y.t/                                                                                     (6)
                                                            
                                                    t  t0
               0 D g.t; y.t/; z.t/; p/  ˇ                        g.t0 ; y.t0 /; z.t0 /; p/        (7)
                                                   tf  t0
          y.t0 / D y0 .p/                                                                           (8)
           z.t0 / D s0z                                                                             (9)

with non-increasing ˇ W Œ0I 1 ! Œ0I 1, ˇ.0/ D 1. The modified DAE is consistent
for every choice of s0z and can be solved by numerical integration. In optimization
problems with DAE constraints, we then treat the consistency conditions (5) as
additional constraints of the optimization problem, and s0z as additional variables.
   Further, multiple-point boundary conditions may be given

                             r.x.t0 /; : : : ; x.tN /; p/ D 0                                      (10)

respectively in a separable formulation

                                 X
                                 N
                                        ri .x.ti /; p/ D 0
                                 i D1

with the time points t0  t1  : : :  tN  tf and the functions r W Ên  : : :               x

Ên  Ên ! Ên respectively ri W Ên  Ên ! Ên sufficiently smooth. In
   x       p          r                        x         p              r

the following we assume that the initial conditions (4) are part of the boundary
conditions (10).
4                                                                              H.G. Bock et al.


3 Parameter Estimation Problems

                                                                           Ê
Let experimental data be given with measurement values i 2 , i D 1; : : : ; M ,
measured at times t0  t1  : : :  tM  tf (not necessarily the same as the times
in the boundary conditions above but for the sake of simplicity not distinguished in
the notation here). We assume that the data values correspond to model responses
    N i /; p/
hi .x.t                                                    Ê
           N for the true values xN and pN with hi W nx  np !         Ê       Ê
                                                                         sufficiently
smooth, i D 1; : : : ; M . Experimental data is always afflicted with measurement
errors originating from various sources in the measurement process. Modeling these
errors may be an intricate issue. In this article, we make the assumption that the
measurement errors are additive, independent and normally distributed

                          i WD i  hi .x.t
                                         N i /; p/
                                                N  N .0; i2 /

with known variances i2 , i D 1; : : : ; M and cov.i ; j / D 0, i ¤ j .
   For the estimation of the model parameters, we minimize the sum of squares of
the residuals i  hi .x.ti /; p/ weighted by the inverse of the variances i2 . This
least squares estimator can be interpreted as a maximum likelihood estimator for
the parameters, see e.g. [26].
   Writing the model equations and boundary conditions as constraints, we obtain
a constrained parameter estimation problem.

                                   M                 
                               1 X i  hi .x.ti /; p/ 2
                          min                                                             (11)
                           p;x 2           i
                                 i D1

                                 P D f .t; y.t/; z.t/; p/
                            s.t. y.t/
                                    0 D g.t; y.t/; z.t/; p/
                                    0 D r.x.t0 /; : : : ; x.tN /; p/                      (12)

   With the vectors h.x; p/ WD .h1 .x.t1 /; p/; : : : ; hM .x.tM /; p//T and  WD
.1 ; : : : ; M /T and the matrix ˙ D diag.1 ; : : : ; M /, the error model can be written
shortly as
                                    h.x; p/  N .0; ˙ 2 /                             (13)
and the objective (11) as

                           1
                        min .  h.x; p//T ˙ 2 .  h.x; p//:                            (14)
                           2

In a more general setting, a non-diagonal positive-definite matrix ˙ 2 2 M M can  Ê
also be considered for correlated measurement errors. Different error distributions
require different estimators, see [26], e.g. the l1 estimation, see [7, 10]. For
an overview article on models, criteria and algorithms for nonlinear parameter
estimation problems see [25] a comparison of derivative-free methods for nonlinear
differential-algebraic models can be found in [21].
Parameter Estimation and Optimum Experimental Design                                       5


4 Parameterization of the DAE by Multiple Shooting

To solve the parameter estimation problem (11)–(12), we transform it into a finite-
dimensional problem.
   A simple and obvious approach is single shooting also known as the black box
approach. It consists in solving the full model equations, i.e. integrating the DAE
on the full interval Œt0 ; tf . In order to apply a numerical integrator, the relaxed
formulation (6)–(9) has to be used and the consistency conditions (5) have to be
added as additional constraints to the problem with additional variables s0z . With
the solution obtained from this single shooting integration, the least squares terms
and the boundary conditions can be evaluated. Then we    obtain
                                                              a finite dimensional
nonlinear least squares problem in the variables v WD p; s0z :

                                         1
                                      min kF1 .v/k22                                     (15)
                                       v 2

                                       s.t. F2 .v/ D 0                                   (16)

where

                  F1 .v/ D ˙ 1 .  h.x.s0z ; p/; p//
                                                                          
                            r.x.t0 I s0z ; p/; : : : ; x.tN I s0z ; p/; p/
                  F2 .v/ D                                                   :
                                      g.t0 ; y0 .p/; s0z ; p/

x.tI s0z ; p/ is the DAE solution x DW x.s0z ; p/ evaluated at t. Problem (15)–(16)
can be solved by a generalized Gauß–Newton method, see Section 6. To this end,
derivatives J1 WD ddFv1 and J2 WD ddFv2 are needed, methods for their evaluation are
discussed in Sect. 5.
   The single shooting approach is easy to implement, but it is difficult to get good
initial guesses for the variables v and hence difficult to start close enough to the
solution in order to achieve convergence of the generalized Gauß–Newton method.
This holds because of the high nonlinearity which arises due to the propagation of
perturbations of the model as described by the following Lemma.
Lemma 1. Let f 2 C 0 .D/ and Lipschitz continuous on DN D Œa; b  fky  y0 k 
Kg  D with Lipschitz constant L < 1. The solutions y; w of

         P D f .t; y.t//;
         y.t/                                                              y.t0 / D y0
         P
         w.t/ D f .t; w.t// C ıf .t; w.t//;                w.t0 / D w0 D y0 C ıy0

                                     N Under the two assumptions kıy0 k  "1 and
both exist on Œt0 ; tf   Œa; b in D.
kıf .t; w.t//k  "2 for all .t; w.t//, the deviation ıy.t/ WD w.t/  y.t/ satisfies

            kıy.t/k  "1 exp.L  .t  t0 // C "2 exp.L  .t  t0 //.t  t0 /

The proof uses Gronwall’s Lemma.
6                                                                                         H.G. Bock et al.


   In other words, perturbations of initial values and the right-hand-side function,
in particular by uncertain parameter values, may propagate exponentially in time.
   As remedy we suggest to use the boundary value problem method optimization
approach with a multiple shooting parameterization of the differential equation. We
define a time grid with multiple shooting nodes

                           t0 D 0 < 1 < : : : < K < KC1 D tf
                                                    y                                             y
and multiple shooting variables sk WD .sk ; skz /, k D 0; : : : ; K where s0 satisfies
 y
s0 D y0 .p/. For k D 0; : : : ; K, we solve initial value problems on the multiple
shooting intervals, i.e. for t 2 Œk I kC1 Œ we solve

             P D f .t; y.t/; z.t/; p/
             y.t/
                                                                    
                                                           t  k                  y
                0 D g.t; y.t/; z.t/; p/  ˇ                               g.k ; sk ; skz ; p/
                                                         kC1  k
                       y
           y.k / D sk
            z.k / D skz :

Here we apply the relaxed formulation of the DAE to start consistent in k and stay
consistent in Œk I kC1 Œ. The solutions x.t/ DW x.tI k ; sk ; p/ for t 2 Œk I kC1 Œ form
a piecewise solution x.tI s; p/ for t 2 Œ0 I f .
   We need to satisfy constraints, namely the boundary conditions

                             0 D r.x.t0 I s; p/; : : : ; x.tN I s; p/; p/;

including the initial conditions for the differential states
                                               y
                                            s0 D y0 .p/;

and additionally, at the multiple shooting nodes, continuity conditions for the
differential states
                                                   y
                 0 D y.kC1 I k ; sk ; p/  skC1 ;          k D 0; : : : ; K  1;

and consistency conditions for the algebraic states
                                           y
                             0 D g.k ; sk ; skz ; p/;     k D 0; : : : ; K

to eventually ensure continuity and consistency of the solution.
   Substituting x D x.s; p/ in the parameter estimation problem (11)–(12), we
obtain a finite-dimensional constrained nonlinear least squares problem in the
variables v D .s0 ; s1 ; s2 ; : : : ; sK ; p/ D .s; p/:
Parameter Estimation and Optimum Experimental Design                                       7


                                            1
                                         min kF1 .v/k22                                  (17)
                                          v 2

                                         s.t. F2 .v/ D 0                                 (18)

where

                    F1 .v/ D ˙ 1 .  h.x.s; p/; p//
                             0                                            1
                                 r.x.t0 I s; p/; : : : ; x.tN I s; p/; p/
                             B                            y             C
                    F2 .v/ D @ y.kC1 I k ; sk ; p/  skC1 kD0;:::;K1 A
                                             y z          
                                      g.k ; sk ; sk ; p/ kD0;:::;K

To solve problem (17)–(18) by a generalized Gauß–Newton method, see Sect. 6, we
need the Jacobian which consists of the blocks
                                     0                        1
                        D01 D11    D21   :::    DK1
                                                       Dp1
                      B D2 D2      D22   :::    DK2
                                                       Dp2 C
                      B 0     1                               C
                      B                                       C
                      BGy .I 0/                       Gy 0 C
                                                           p
                      B 0                                     C
                      B                                    p  C
                      B     Gy 1 .I 0/                Gy 1 C
                      B                                       C
             0 dF 1 B B            ::    ::              :: C
                1   B               :     :             : C C
        J1   B      C B                                       C
   J D     D @ dv A D B
                      B                 Gy K1 .I 0/ Gy K1 C
                                                       p
                                                              C;
        J2     dF2    B                                       C
                      B H0                             H0 C
                                                            p
                dv    B                                       C
                      B                                     p C
                      B     H1                         H1 C
                      B                                       C
                      B                                H2 C
                                                            p
                      B            H2                         C
                      B                                       C
                      B                  ::               :: C
                      @                     :              : A
                                                                                   p
                                                                       HK       HK

where

                  dF1                                                           d F1
         Dj1 D         ;   k D 0; : : : ; K;                            Dp1 D        ;
                  d sk                                                          dp
                  dr                                                            dr
         Dj2 D         ;   k D 0; : : : ; K;                            Dp2 D      ;
                  d sk                                                          dp
                  @y
        Gy k D        .kC1 I k ; sk ; p/;    k D 0; : : : ; K  1;
                  @sk
                  @y
        Gyp k D      .kC1 I k ; sk ; p/;     k D 0; : : : ; K  1;
                  @p
8                                                                       H.G. Bock et al.


               @g         y
        Hk D       .k ; sk ; skz ; p/;   k D 0; : : : ; K;
               @sj
          p    @g        y
       Hk D       .k ; sk ; skz ; p/;    k D 0; : : : ; K:
               @p

  Most of the variables can easily be eliminated from the structured equality
constraints:
1. skz from the Hk -row, because of the index-1-assumption for the DAE (3), each
   matrix Hk is regular for k D 0; : : : ; K.
     y
2. sk , from the Gk -row, j D 1; : : : ; K.
This elimination is called condensing, see [8, 9]. Thereafter a system with the
                        y
remaining variables s0 and p has to be solved, the size of which is essentially the
same as the size of the linear system in the single shooting approach.
   An advantage of multiple shooting over single shooting is that perturbations of
the problem caused by uncertain parameter values are propagated only over the
multiple shooting intervals instead of the whole integration interval. This reduces
the nonlinearity of the constrained least squares problem significantly and leads
to better local convergence of the Gauß–Newton method. Moreover, the additional
multiple shooting variables may be initialized by the experimental data, giving a
starting point for the v-variables close to the solution, whereas in single shooting an
uncertain starting p may be far away from the solution. The integration of the DAE
on the intervals is decoupled and may be computed in parallel. Further algorithmic
strategies to improve efficiency are described in [11].



5 Derivative Evaluation

For the computation of the Jacobians, derivatives of the states x w.r.t. initial values
sk
                               @x     @.y; z/
                         GD       D           D .Gy ; Gz /
                               @s       @s
and w.r.t. parameters p

                                     @x   @.y; z/
                           Gp D         D         D .Gyp ; Gzp /
                                     @p     @p

have to be evaluated at the multiple shooting nodes k . They are solutions of the
variational differential equations w.r.t. initial values
Parameter Estimation and Optimum Experimental Design                                9


                                      @f
                            GPy .t/ D    .t; y.t/; z.t/; p/ G.t/
                                      @x
                                      @g
                                  0D     .t; y.t/; z.t/; p/ G.t/
                                      @x
                            Gy .tk / D I

and w.r.t. parameters

                       @f                              @f
             GPy .t/ D
               p
                          .t; y.t/; z.t/; p/ G p .t/ C    .t; y.t/; z.t/; p/
                       @x                              @p
                        @g                              @g
                   0D      .t; y.t/; z.t/; p/ G p .t/ C    .t; y.t/; z.t/; p/
                        @x                              @p
            Gyp .k / D 0

which have to be solved as a system together with the nominal DAE (1)–(2). For
inconsistent initial values of the algebraic variational states, a relaxed formulation
has to be applied here as well.
    For numerical solution, we suggest the approach of Internal Numerical Differen-
tiation, i.e. of incorporating the derivative computation into the integrator scheme,
see e.g. [1, 5]. The required derivatives of the model functions are evaluated by
automated Algorithmic Differentiation [15].



6 Generalized Gauß–Newton Method

To solve nonlinear constrained least squares problems like (17)–(18), we apply the
generalized Gauß–Newton method. In this section we formulate the algorithm. In
the next section, we review its local convergence properties and discuss, why Gauß–
Newton methods should be used instead of Newton/SQP methods for the solution
of nonlinear least squares problems.
   The general outline of the algorithm is as follows:
Algorithm 1 (Generalized Gauß–Newton Method)
0. Set j WD 0. Choose an initial guess v0 .
1. Solve the linear constrained least squares problem

                                    1
                                min kF1 .vj / C J1 .vj /vj k22
                                vj 2

                                s.t. F2 .vj / C J2 .vj /vj D 0:

2. Determine a step-length ˛ j 2 .0I 1 by a globalization method.
10                                                                    H.G. Bock et al.


3. Compute the new iterate

                                  vj C1 WD vj C ˛ j vj :

4. If kvj k2  TOL, TOL prescribed tolerance, terminate, otherwise
5. Set j WD j C 1. Go to 1.
                                                                            
   We assume regularity of the problem: Let J1 2      Ê  M n
                                                       , J2 2    Ê N2 n
                                                                     ,J D
                                                                            J1
                                                                            J2
with M C N2  n  N2 . In all points v where J has to be evaluated, we assume
• Constraint Qualification (CQ)

                                    rank J2 .v/ D N2 :                           (19)

• Positive Definiteness (PD)
                                      rank J.v/ D n                              (20)
     which is equivalent to

                 vT J1 .v/T J1 .v/v > 0 for all v ¤ 0 with J2 v D 0:

Lemma 2. Let (CQ) and (PD) hold. The solution of the constrained linear least
squares problem

                                     1
                                  min kF1 C J1 vk22                             (21)
                                     2
                                  s.t. F2 C J2 v D 0                            (22)

can be represented as
                                                 
                             J1T J1 J2T 1 J1T 0   F1
                    v D  I 0
                                  J2 0        0 I    F2

and the Lagrange multiplier is
                                                 
                       
                              J1T J1 J2T 1 J1T 0
                                                    F1
                       D 0I                            :
                                 J2 0         0 I    F2
                                      T        
                                      J1 J1 J2T
Proof. Because of (CQ) and (PD),                  is regular. The Lagrangian of the
                                        J2 0
constrained linear least squares problem is

                      1 T                1
        L .v; / D    F F1 C F1T J1 v C vT J1T J1 v  T .F2 C J2 v/:
                      2 1                2
Parameter Estimation and Optimum Experimental Design                            11


Setting the gradient of the Lagrangian to zero
                                          T                          
                                          J1 F1 C J1T J1 v  J2T 
              0 D r L .v ;  / D                                     ;
                                                 F2 C J2 v

which here is necessary and sufficient for optimality, results in
                                     T        1  T   
                     v               J1 J1 J2T      J1 0  F1
                                D                             :
                                     J2 0           0 I  F2

   We define the generalized inverse of J by
                                                        
                            C
                                     J1T J1 J2T 1 J1T 0
                        J       D I 0                                         (23)
                                         J2 0         0 I

and obtain the representation
                                       v D J C F
for the solution of the linear constrained least squares problem (21)–(22).
   J C satisfies the Moore–Penrose property J C JJ C D J C , but only in the
unconstrained case it is a Moore–Penrose pseudo inverse satisfying all four Moore–
Penrose properties.
   A stable numerical realization of the solution of the linearized problems is
described in [11], based on the approach of Stoer [27].



7 Local Convergence of Newton Type Methods

In this section we write x instead of v for the variables of the finite dimensional
problem. We consider constrained nonlinear least squares problems

                                          1
                                       min kF1 .x/k22                         (24)
                                          2
                                       s.t. F2 .x/ D 0                        (25)

as discussed above, unconstrained nonlinear least squares problems

                                          1
                                       min kF .x/k22                          (26)
                                          2
and nonlinear equations systems

                                         F .x/ D 0:                           (27)
12                                                                     H.G. Bock et al.


Newton type methods solve these problems iteratively, starting from x0 and
computing iterates xkC1 D xk C ˛ k xk where xk is the solution of some in
xk linearized problem and can be written as xk D M.xk /F .xk /.
   First we formulate the local contraction theorem proved in [8] to state the local
convergence behavior of Newton type methods.
Theorem 3 (Local Contraction Theorem). Let F W m         Ê  D ! n, F 2     Ê
 1
        Ê
C .D; /, J WD d x . For all x; y 2 D, 2 Œ0; 1 with y  x D M.x/F .x/:
       n        dF


1. There exists ! < 1, such that

            kM.y/ .J.x C .y  x//  J.x// .y  x/k  !   ky  xk2 :

2. There exists .x/       < 1, such that

                               kM.y/R.x/k  .x/ ky  xk

     for the residual R.x/ WD F .x/  J.x/M.x/F .x/.
Let x0 2 D be given with

                xk WD M.xk /F .xk /
                           !                       !
                  ı0 WD    C kx0 k < 1; ık WD C kxk k ;
                           2                       2
                                             
                                       kx0 k
                 D0 WD x W kx  x0 k           D:
                                       1  ı0

Then:
1. The iteration xkC1 D xk C xk is well defined and stays in D0 .
2. There exists an x 2 D0 , such that xk ! x converges for k ! 1.
3. The following a priori estimate holds:

                                              j
                                               ık
                            xkCj  x            kxk k :
                                             1  ık

4. The following a posteriori estimate holds:
                                                         !
                   kxkC1 k  ık kxk k D kxk k C         kxk k2 :
                                                         2
   From this Theorem one can directly conclude that Newton’s method for nonlinear
equation systems (27) with M.x/ D J.x/1 converges locally quadratically
because R.x/ D 0 and therefore         D 0. Applied to Gauß–Newton methods
for constrained nonlinear least squares problems, we can draw the following
conclusions:
Parameter Estimation and Optimum Experimental Design                                   13

                                                                  
Remark 4 (Local convergence of Gauß–Newton methods). Let F D
                                                                  F1
                                                                  F2
                                                                     W            Êm
      Ê                     Ê
D ! n , F 2 C 1 .D; n /, J WD dd Fx . Let (CQ) and (PD) hold and

                                                            
                          J1 .x/T J1 .x/ J2 .x/T 1 J1 .x/T 0
                            
               M.x/ D I 0
                               J2 .x/         0          0 I

be the solution operator of the linearized constrained least squares problem

                                minkF1 .x/ C J1 .x/xk22
                                x

                                s.t. F2 .x/ C J2 .x/x D 0:

Let in a neighborhood of the solution x of the nonlinear problem, M.y/ be
bounded, kM.y/k  ˇ, and let J satisfy the following Lipschitz condition,
k.J.x C .y  x//  J.x// .y  x/k    ky  xk2 . M is continuously differ-
entiable, thus kM.y/  M.x/k  Lky  xk. Let kR.x/k  . Then the following
holds:
1. ! D ˇ     is large if
   • kJ 0 k respectively kF 
                            00
                               k is large, i.e. the problem is very nonlinear.
                               JTJ JT
   • kM.y/k is large, i.e. 1 1 2 is almost singular.
                                 J2 0
2. Due to the transformation M.x/R.x/ D M.x/.F .x/  J.x/M.x/F .x// D
   .M.x/  M.x/J.x/M.x//F .x/ D 0 holds

               kM.y/R.x/k D k.M.y/  M.x//R.x/k  Lky  xk:

   Hence     D L < 1 if
   • the residual R is small,
   • M satisfies a Lipschitz condition respectively the first derivative of M is
     small.
3. If the starting value is close to the solution, where “close” is determined by
                                           !
                                       C     kx0 k < 1;
                                           2
   then the Gauß–Newton method converges, and the convergence is linear with
   convergence rate < 1.
14                                                                        H.G. Bock et al.


7.1 Small and Large Residual Problems

In this subsection we want to discuss what happens if we treat parameter estimation
problems by an SQP method which is essentially Newton’s method for the first order
optimality conditions. For simplicity of notation, in this subsection we consider the
unconstrained case: minimize a nonlinear least squares functional

                        1           1
                     min kF .x/k22 D F .x/T F .x/ DW .x/:                            (28)
                        2           2
Gradient and Hessian of the functional are

        g WD r .x/ D J.x/T F .x/;
                                        X
                                        m
                                                         @Ji .x/
       H WD r 2 .x/ D J.x/T J.x/ C              Fi .x/           DW B.x/ C E.x/:
                                         i D1
                                                           @x

The Hessian H has a random part E depending on F which depends on the random
measurement data, and a deterministic part B where the dependency on the random
data vanishes due to differentiation. We assume regularity (PD), i.e. rank J D n,
then B D J T J is a regular matrix.



7.1.1 Gauß–Newton and SQP Method

For the solution of (28), we apply a Newton-type method started from x0 and the
iterates are computed by xkC1 D xk C ˛k xk . For simplicity of notation we now
omit xk : F WD F .xk /, J WD J.xk /, WD .xk /.
    In a Gauß–Newton method xk solves

               1             1                 1
            min kF C Jxk22 D F T F C F T Jx C x T J T Jx
               2             2                 2
respectively
                            J T Jx k C J T Fxk D 0
and hence
                             xk D .J T J /1 J T F:
   In an SQP method which is equivalent to Newton’s method for r .x/ D 0, xk
solves
                                         1
                        min r T x C x T r 2 x
                                         2
respectively
                              r C r 2 xk D 0
Parameter Estimation and Optimum Experimental Design                                  15


and hence
                       xk D .r 2 /1 r D .r 2 /1 J T F:
Generically, the method can be described by xk D A1 g D MF . Applying
the Gauß–Newton method results in A D J T J and M D J  D .J T J /1 J T and
the local convergence is linear with rate if < 1. For Newton’s method, A D r 2 ,
M D .r 2 /1 J T and the local convergence is quadratic.


7.1.2 Small and Large Residuals

Remember that the condition < 1 is equivalent to the fact that M satisfies a
Lipschitz condition and R is small. We address such problems as small residual
problems.
Theorem 5 (Small residual problems). Equivalent to                  < 1 is the following
condition: the spectral radius

                               %.B.x /1 E.x // < 1

in any stationary point x of the Gauß–Newton method.
Proof. M D J  D .J T J /1 J T , R D F  JJ  F .
                                             ˇ        !
                                   @J  .y/ ˇˇ
  J .y/R.x/ D J .x/R.x/ C
                  
                                               .y  x/ R.x/ C O.ky  xk2 /
              „ ƒ‚ …                 @y ˇyDx
                       D0
                                               ˇ                !
                                     @J T .y/ ˇˇ
              D .J T .x/J.x//1                          .y  x/ R.x/
                                       @y ˇ        yDx
                                 ˇ            !
                   @J T .y/J.y/ ˇˇ
              C                  ˇ     .y  x/ J T .x/R.x/ CO.ky  xk2 /
                         @y        yDx
                                                „ ƒ‚ …
                                                           D0
                                        ˇ         !
                             @J T .y/ ˇˇ
              D B.x/1                     .y  x/ F .x/
                                @y ˇyDx
                                      ˇ          !
                            @J T .y/ ˇˇ
               B.x/1                    .y  x/ J.x/ J  .x/F .x/ CO.ky  xk2 /
                              @y ˇyDx                  „ ƒ‚ …
                                                                D.yx/

              D B.x/1 E.x/.y  x/ C O.ky  xk2 /:



• Assume .B.x /1 E.x // DW 1 < 1. Choose a neighborhood of x and a norm
  such that kB.x/1 E.x/k  2 < 1 for all x in this neighborhood. Reduce the
16                                                                                     H.G. Bock et al.


     neighborhood, such that also O.ky  xk2 /  12 2 ky  xk for all x; y in this
     neighborhood. Then

               kJ.y/ R.x/k  kB.x/1 E.x/kky  xk C O.ky  xk2 /
                                                    1 2
                                   2 ky  xk C          ky  xk
                                                     2
                                    1C 2
                             D           ky  xk DW           3 ky  xk;          3 < 1:
                                     2
• Assume vice versa that the condition for the local contraction theorem is satisfied
  for a norm k:k and all x in a neighborhood of x :

     kJ  .y/R.x/k D kB.x/1 E.x/.y  x/ C O.ky  xk2 /k  ky  xk;                              < 1:

     Then
                  kB.x/1 E.x/.y  x/k  O.ky  xk2 /  ky  xk:
     Make the neighborhood so small that O.ky  xk2 /  12 ky  xk. Then

                                         1C
            kB.x/1 E.x/.y  x/k           ky  xk DW              1 ky  xk;          1 < 1:
                                          2

     Hence kB.x/1 E.x/k      1 < 1 and          .B.x/1 E.x// < 1.
   In other words: for small residual problems, the random part E of the Hessian is
relatively bounded by 1 w.r.t. the deterministic part B, i.e. B dominates E.
Theorem 6. If x is a stationary point of the Gauß–Newton method and

                                 %.B.x /1 E.x // < 1

then H.x / is positive definite.
Proof. J.x / has full rank, hence J.x /T J.x / D B.x /                 0 is positive definite,
             1
hence B.x / 2 0 exists. Then
                                          1                     1                      1          1
     H.x / D B.x / C E.x / D B.x / 2 I C B.x / 2 E.x /B.x / 2 B.x / 2

and
                                                      1                  1
                H.x /    0 ” I C B.x / 2 E.x /B.x / 2                       0:              (29)
                               1              1                     1         1
B.x /1 E.x / D B.x / 2 B.x / 2 E.x /B.x / 2 B.x / 2 is a similarity
                                     1                    1
transformation, hence B.x / 2 E.x /B.x / 2 has the same eigenvalues as
                               1               1
B.x /1 E.x /. Thus .B.x / 2 E.x /B.x / 2 / < 1 and all the eigenvalues of
Parameter Estimation and Optimum Experimental Design                                17

                                            1                1
                              I C B.x / 2 E.x /B.x / 2

are within 0I 2Œ. Consequently, H.x / is positive definite.
Corollary 7. In Theorem 6, x is not only a stationary point, but also a local
minimizer and stable against perturbations.
   For large residual problems, i.e. if > 1 respectively %.B.x /1 /E.x // > 1,
the Gauß–Newton method does not converge. Now we will discuss what happens if
we apply Newton’s method and compute a minimizer x of a large residual problem.

7.1.3 Statistical Perturbation of the Problem

                                                                            Ê
Let us consider a parameter estimation problem with random data  2 m , model
        Ê                                    Ê
h.x/ 2 m , true parameter values xN 2 n and   h.x/  N  N .0; I /. Let F .x/ WD
             Ê
  h.x/ 2 m . Let x be the minimizer of a large residual problem. Then

                     F .x / D   h.x /;        D h.x / C F .x /:

Create perturbed data O by reflecting the errors at the estimated model trajectory,
see Fig. 1:
                  O WD h.x /  F .x /; F .x / D h.x /  :O
   Then kO  h.x /k D kF .x /k D k  h.x /k. We now construct a homotopy of
perturbed problems

                          FQ .x; / WD F .x/ C .  1/F .x /:

For  D 1, FQ .x; / D F .x/ D   h.x/, we have the original problem with data .
For  D 1, FQ .x; / D O  h.x/, we have the problem with the reflected data .
                                                                               O
Theorem 8. Let x be a minimizer with Q WD %.B.x /1 /E.x // > 1. Then
1. for all , x is a stationary point of min 12 kFQ .x; /k22 ,
2. the Hessian in x is HQ .x ; / D B.x / C E.x /,
3. HQ .x ; / is not positive definite for all  <  1Q  1.
Proof. x is a minimizer, hence J.x /T F .x / D 0. Because of JQ .x; / D J.x/,

       JQ .x ; /T FQ .x ; / D J.x /T .F .x / C .  1/F .x // D 0;
                                                               @JQ
                   HQ .x; / D JQ .x; /T JQ .x; / C FQ .x; / .x; /
                                                               @x
                                                                   @J
                              D B.x/ C .F .x/ C .  1/F .x //       .x/;
                                                                   @x
                                                    @J
                  HQ .x ; / D B.x / C F .x / .x / D B.x / C E.x /:
                                                    @x
18                                                                                 H.G. Bock et al.




                                                           estimated model trajectory

                                                           original data points

                                                           reflected data points


Fig. 1 Create perturbed data by reflecting the errors at the estimated model trajectory



Hence HQ .x ; /      0 if and only if
                                 1                   1
                                                          O /
                  I C B.x / 2 E.x /B.x / 2 DW I C  E.x                 0;

cf. (29).
                                            1
                                                           O  // D Q > 1;
       .B.x /1 E.x // D .B.x / 2 E.x /B.x / 2 / D .E.x
                                                              1




hence E.xO  / has an eigenvalue Q > 1. By assumption, HQ .x ; 0/ D B.x / C
E.x /               O  / has an eigenvalue 1 C  Q which becomes negative for
           0. I C  E.x
 <  Q  1. Then HQ .x ; / is not positive definite for all  <  1Q  1.
       1


Corollary 9.
1. For large residual problem, the minimizer of min 12 kFQ .x; /k22 is not stable
   against perturbations. It jumps away from x which may become a saddle point
   or maximizer.
2. Large residual minimizers are not statistically stable.
3. They are minimizers but not estimators.
4. The Gauß–Newton method does not converge to them.



8 Optimum Experimental Design

So far we have discussed how to fit a model to experimental data and to estimate the
parameters. Now we want to analyze the reliability of the parameter estimate w.r.t.
the randomness of the data due to measurement errors.
Parameter Estimation and Optimum Experimental Design                                19


    We now assume that we know the true model and the true parameters and want
to design optimal experiments to verify the parameters with minimal statistical
uncertainty. For the discrimination between rivaling model variants, methods
for experimental design for model discrimination have been developed, see e.g.
[3, 12, 13].
    An introduction to nonlinear experimental design can be found in the textbooks
by Atkinson and Donev [2] and Pukelsheim [22]. Methods for experimental design
for differential equation models are developed and applied by several groups, for
recent publications see, e.g., Uciński [29, 30], Banga and Balsa-Canto [4] or Telen
et al. [28]. A survey article with many applications in chemical engineering has been
published by Franceschini and Macchietto [14].
    In this article, we describe the statistical uncertainty by the variance–covariance
matrix of the parameter estimation. The task of optimum experimental design
consists in finding experiments the data of which yields maximal reliability of the
parameter estimate.
    To achieve this, we can optimize the layout, setup and processing of experiments.
As an experiment we define a run of the process under certain conditions described
by control variables and time-dependent control functions entering the model
equations and additionally by the choice of sampling points and corresponding
measurement methods. Usually data is not only acquired from one experiment, but
from series of multiple experiments.



8.1 Multiple Experiment Parameter Estimation Problem

We now consider series of Nex multiple experiments. We allow that the processes
in different experiments are described by different models

                      yPj .t/ D f j .t; y j .t/; zj .t/; p; q j ; uj .t//
                            0 D g j .t; y j .t/; zj .t/; p; q j .t//
                                             j                j
                            0 D r j .x j .t0 /; : : : ; x j .tN j /; p; q j /

with states x j D .y j ; zj /, j D 1; : : : ; Nex . We additionally introduce control
               Ê  j                                  j j          j
                                                                          Ê
variables q j 2 nq and control functions uj .t/ W Œt0 I tf  ! nu which describe the
layout, setup and processing of the j th experiment. We assume that the parameters
p are common in all models.
                        Ê    j
   For the data j 2 M measured in experiment j we again assume normal
distribution                                                      !
                                                               j2
                    j     j     j  j j                        i
                  i D i  hi .x .ti /; p; q /  N 0; j ;
                                                j
                                                                                (30)
                                                              wi
20                                                                                          H.G. Bock et al.


i D 1; : : : ; M j , j D 1; : : : ; Nex , and independence
                                    j       j
                            cov.i11 ; i22 / D 0;          .j1 ; i1 / ¤ .j2 ; i2 /;

of the measurement errors.
                                                                               j
   Notice that we have modified the variances, namely divided by weights wi . If
                                                                        j
data is available for already processed experiments, the corresponding wi are 1. For
                                                              j
new experiments which are being designed, the variables wi 2 f0; 1g describe if
the i th measurement in experiment j shall be actually carried out or not. Usually
constraints on the number of measurements are given.
   The modified multiple experiment parameter estimation problem can then be
written as
                                                                           !2
                    1X  ex X
                       N    Mj                  j   j           j
                                 j          i  hi .x j .ti /; p; q j /
                min             wi                          j
                p;x 2                                   i
                      j D1 i D1

                s.t. yPj .t/ D f j .t; y j .t/; zj .t/; p; q j ; uj .t//
                    0 D gj .t; y j .t/; zj .t/; p; q j .t//
                                        j               j
                    0 D r j .x j .t0 /; : : : ; x j .tN j /; p; q j /;      j D 1; : : : ; Nex

   As described above, we apply a specific experiment-wise parameterization of the
state variables. For the numerical solution, an experiment-wise multiple-shooting
with exploitation of matrix structures in the solution of the linear systems within a
Gauß–Newton method provides an efficient numerical approach, see [23, 24].
   For the following uncertainty discussion, the parameterization of the states may
be chosen in a way that the additional variables s describe quantities the uncertainty
of which is desired to be reduced, so called key-performance-indicators. For a case
study, see [18].
   After parameterization, we obtain a finite-dimensional multiple experiment
constrained nonlinear least squares problem with variables v D .p; s 1 ; : : : ; s Nex /:

                                   1X j
                                        N ex
                            min          kF .p; s j /k22
                               v   2 j D1 1
                                     j
                             s.t. F2 .p; s j / D 0;             j D 1; : : : ; Nex

with
                               q       j   j
                                                                                       !
                                               j j
                                    j   hi .x .ti ; s ; p; q /; p; q /
                                                       j      j       j
           j
          F1 .p; s j / D           wi i                j
                                                    i                                 i D1;:::;M j
            j
          F2 .p; s j / D d j .s j ; p/
Parameter Estimation and Optimum Experimental Design                                                               21


where d j comprises all the constraints belonging to the j th experiment after
parameterization of the states by the variables s j . Define
                          j                                                      j
        F1 .v/ WD F1 .p; s j /                             ;    F2 .v/ D F2 .p; s j /                          :
                                            j D1;:::;Nex                                        j D1;:::;Nex

   For numerical solution and statistical analysis, the Jacobians of least squares
terms and constraints are needed. They have experiment-wise block structure
                               0                1
                                                                     1
                                     1;p
                                   J1      J11;s 0      0
                        dF1    B :                                   C
                 J1 D        DB@ ::
                                                  ::
                                                     :               C;
                                                                     A
                         dv                                     N ex
                                    N ;p
                                  J1 ex      0    0 J1Nex ;s
                               0                1
                                                                     1
                                     1;p
                                   J2      J21;s 0      0
                        dF2    B :                                   C
                 J2 D        DB@     ::           ::
                                                     :               C
                                                                     A
                         dv                                     N ex
                                    Nex ;p               Nex ;s
                                  J2         0    0 J2

with
                                       0 q                                              1
                             j                     j         j                     j
                                                                                       !
                j;p       @F1      B             wi        @hi @x j              @hi    C
             J1       D          D @            j
                                                                       .ti / C          A
                          @p                    i             @x @p             @p
                                                                                            i D1;:::;M j
                                       0 q                                  1
                      j                               j      j
                                                                         !
             j;s j @F              B             wi        @hi @x j        C
            J1 D 1j              D @             j
                                                                    .ti / A
                          @s                    i         @x @s j
                                                                                 i D1;:::;M j

and
                                                      j
                                      j;p       @F2   @d j @x j   @d j
                                 J2         D       D    j
                                                                C
                                                 @p   @x @p        @p
                                                      j
                                  j;s j         @F2    @d j @x j  @d j
                                 J2         D      j
                                                     D    j   j
                                                                 C j :
                                                @s     @x @s      @s
                                  j         j
The derivatives G j D . @x ; @x / are solutions of variational differential equations,
                         @p @s j
see Sect. 5:

    Pj      @f j                                           @f j
   Gy .t/ D      .t; y j .t/; zj .t/; p; q j / G j .t/ C            .t; y j .t/; zj .t/; p; q j /
             @x                                          @.p; s j /
                @gj                                           @g j
        0D          .t; y j .t/; zj .t/; p; q j / G j .t/ C            .t; y j .t/; zj .t/; p; q j /
                @x                                          @.p; s j /
                      j
                  @y0
  Gyj .t0 / D
                @.p; s j /
22                                                                                       H.G. Bock et al.

         j               j
where @f
      @s j
           D 0 and @g
                   @s j
                        D 0. We write
                                                                      !
                        p                     j
                                            @hi j          @hi
                                                                 j
               j                    j 1
              J1 D          W j˙              G .ti / C                                 ;
                                            @x           @.p; s j /
                                                                          i D1;:::;M j

                                                  j
                         j          j          @h
where W j WD diag.w1 ; : : : ; wM j / and @s ji D 0, and

                                    j      @d j j     @d j
                                J2 D          j
                                                G C            :
                                           @x       @.p; s j /



8.2 Statistical Uncertainty of the Parameter Estimate

We want to describe the propagation of the uncertainty of the experimental data
given by the random distribution of the measurement errors to the uncertainty of the
parameter estimate.
   Let vO be the solution of the nonlinear constrained parameter estimation problem.
We apply a local analysis and therefore linearize the problem in vO as is done in a
generalized Gauß–Newton method obtaining

                                   1
                                min kF1 .Ov/ C J1 .Ov/vk22
                                   2
                                 s.t. F2 .Ov/ C J2 .Ov/v D 0;

We again assume regularity (CQ)     and(PD), see (19) and (20), and can write
                                     F .Ov/
the solution as v D J C .Ov/ 1             where J C is the generalized inverse of
                                     F2 .Ov/
         
  J1 .Ov/
           , see (23). The expected value
  J2 .Ov/
                                                         
                             F .Ov/                    F1 .Ov/
         E.v/ D E J C .Ov/ 1          D J C .Ov/E              D0
                             F2 .Ov/                   F2 .Ov/

of the increment is zero in the solution point vO . The uncertainty is expressed by the
variance–covariance matrix
                                                           T           !
                                          F  .O
                                              v /     F  .O
                                                          v /
    C.Ov/ WD E.vvT / D E J C .Ov/        1           1
                                                                 J C .Ov/T
                                          F2 .Ov/     F2 .Ov/
                                                              
                       E.F1 .Ov/F1 .Ov/T / E.F1 .Ov/F2 .Ov/T /
         D J C .Ov/                                              J C .Ov/T
                       E.F2 .Ov/F1 .Ov/T / E.F2 .Ov/F2 .Ov/T /
Parameter Estimation and Optimum Experimental Design                                  23

                                       T        1  
            J1T J1 J2T 1 J1T 0   I 0 J1 0   J1 J1 J2T      I
         D I 0
                 J2 0        0 I    00  0 I     J2 0          0
                                   T        1  
            J1T J1 J2T 1 J1T J1 0   J1 J1 J2T      I
         D I 0                                                                      (31)
                 J2 0         0 0       J2 0          0
                         
            J1T J1 J2T 1 I
         D I 0                :                                                     (32)
                 J2 0       0

   Here E.F1 .Ov/F2 .Ov/T /, E.F2 .Ov/F1 .Ov/T / and E.F2 .Ov/F2 .Ov/T / are zero because
F2 is not random and E.F1 .Ov/F2 .Ov/T / D I because of the construction of the
weighted least squares functional. The identity from (31) to (32) can be concluded
from the following Lemma [10].
Lemma 10. Let
                                 T        1
                        X YT       J1 J1 J2T
                               WD                DW M 1 :
                         Y Z        J2 0
Then the variance–covariance matrix C is equal to X and satisfies

                                 I D J1T J1 C C J2T Y
                                 0 D J2 C:

Proof. Multiplying M by M 1

              I D J1T J1 X C J2T Y                 0 D J1T J1 Y T C J2T Z
              0 D J2 X                            I D J2 Y T

and substituting terms in the representation (31)
                     T                             
                   J J 0         I         J1T J1 0  X
        C D I 0 M 1 1 1     M 1     D X YT
                      0 0          0             0 0     Y
           D XJ1T J1 X D X.I  J2T Y / D X  .J2 X /T Y D X

yields the desired result.
   For multiple experiments, the variance–covariance matrix is
24                                                                                          H.G. Bock et al.

            0                                                                                           11
           X
           Nex
                   j;p T j;p     1;p T 1;s 1               N ;p T N ;s Nex      1;p T           N ;p T
        B        J1        J1  J1       J1           J1 ex J1 ex           J2          J2 ex      C
        B                                                                                               C
        B j D1                                                                                          C
        B                                                                                               C
        B      1;s 1
                     T 1;p
                                1;s 1
                                      T
                                            1;s 1                              1;s 1
                                                                                     T
                                                                                                        C
        B J1             J1    J1       J1                                    J2                        C
        B                                                                                               C     !
        B            ::                           ::                                   ::               C
        B             :                               :                                    :            C   I
        B
C D I 0 B                                                                                               C
                         T                                        T                                    TC
        BJ Nex ;s Nex J Nex ;p                           N ;s Nex
                                                        J1 ex
                                                                     N ;s Nex
                                                                    J1 ex
                                                                                              N ;s Nex C
                                                                                             J2 ex
                                                                                                            0
        B 1                 1                                                                           C
        B                                 1                                                             C
        B         J2
                     1;p
                                   J2 1;s                                                               C
        B                                                                                               C
        B             :                           :                                                     C
        B             ::                            ::                                                  C
        @                                                                                               A
                      N     ;p                                  N   ;s Nex
                    J2 ex                                   J2 ex

   The variance–covariance matrix can be used to describe confidence regions of
the parameters. For details, see [8].



8.3 The Experimental Design Optimization Problem

For nonlinear regression models the variance–covariance matrix depends on the
values of the parameters. Moreover, it depends on the controls q and u.t/ describing
experimental layout, setup and processing and on the weights for the choice
of sample points. The variance–covariance matrix depends on J and hence on
derivatives @x
             @v of the states x w.r.t. to the variables v. But it does not depend on the
experimental data , hence it can be computed before the experiments are actually
carried out.
   For now, we keep v fixed and want to find experiments which allow to estimate
v with minimal statistical uncertainty. This task of optimum experimental design
means the calculation of experimental design variables  D .q; u.t/; w/ which
minimize a suitable objective functional .C / on the variance–covariance matrix
C , e.g. the A-criterion trace.C /, the D-criterion det.C /, the E-criterion kC k2 or the
M-criterion max Ci i .
   Usually, experiment-wise (vector-valued) constraints to controls and states are
given:
                                       j                        j
                                     L1 c j .q j /  U1
                                       j                                     j
                                     L2 b j .x j .t/; uj .t//  U2 ;

j D 1; : : : ; Nex . Constraints to the choice of measurements can be expressed by

                                            j
                                                   X        j          j
                                           LIk            wi  UIk
                                                   i 2Ik

                                                                                                             j
for some subsets Ik              f1; : : : ; M j g, k D 1; : : : ; K j j D 1; : : : ; Nex where the wi
are 0–1-variables
Parameter Estimation and Optimum Experimental Design                                                   25

                                        j
                                       wi 2 f0; 1g; i D 1; : : : ; M j :
   Furthermore, the model equations including boundary conditions and the vari-
ational model equations, see Sect. 5, for the derivatives of the states w.r.t. v have
to be satisfied. Altogether, the experimental design optimization problem reads as
follows.

     min .C /
     q;u;w
                           
              J1T J1 J2T 1 I
    s.t. C D I 0
                   J2 0       0
    for j D 1; : : : ; Nex W
                                                                   !
                  p                         j
                                         @hi j          @hi
                                                               j
        j                       j 1
       J1 D            W j˙                G .ti / C                                 ;
                                         @x           @.p; s j /
                                                                       i D1;:::;M j

         j      @d j j     @d j
       J2 D          G C
                @x j     @.p; s j /

    yPj .t/ D f j .t; y j .t/; zj .t/; p; q j ; uj .t//
         0 D g j .t; y j .t/; zj .t/; p; q j .t//
                            j                   j
         0 D r j .x j .t0 /; : : : ; x j .tN j /; p; q j /

    Pj      @f j                                           @f j
   Gy .t/ D      .t; y j .t/; zj .t/; p; q j / G j .t/ C            .t; y j .t/; zj .t/; p; q j /
             @x                                          @.p; s j /
                @gj                                           @g j
         0D         .t; y j .t/; zj .t/; p; q j / G j .t/ C            .t; y j .t/; zj .t/; p; q j /
                @x                                          @.p; s j /
                        j
                  @y0
  Gyj .t0 / D
                @.p; s j /
         j                        j
       L1  c j .q j /  U1
         j                                          j
      L2  b j .x j .t/; uj .t//  U2
       j
            X j            j
      LIk      wi  UIk ; Ik f1; : : : ; M j g; k D 1; : : : K j
                i 2Ik
        j
       wi 2 f0; 1g; i D 1; : : : ; M j :
26                                                                                    H.G. Bock et al.


8.4 Modifications and Enhancements

8.4.1 Experimental Design for Maximal Information Gain

To take a priori information from previous experiments into account, the Jacobians
of already processed (“old”) experiments may be included in the computation of
the variance–covariance matrix. It then describes the uncertainty of the parameter
estimation from a multiple experiment consisting of the old experiments and some
“new” experiments which are being designed. In the optimization problem, then
only the controls and sampling weights for the new experiments are optimization
variables whereas the settings for the old experiments are constants. Experimental
designs computed from this modified problem maximize the information gain by
the new experiments under consideration of the old experiments.


8.4.2 Modification for Robust Experimental Design w.r.t. Parameter
      Uncertainty

For regression models which are nonlinear in the parameters, the variance-covari-
ance matrix depends on the values of the parameters. We now use the short notation
C D C.; p/. We assume that the parameter values are only known roughly and
that we can describe this by a multi-normal distribution

                                            p  N .p0 ; C0 /:

For experimental design we consider a worst-case approach [20]

                                    min        max          .C.; p//
                                         kpp0 k2;C 1 
                                                    0


where we minimize the experimental design over the worst caseq
                                                             within a confidence
region of the parameters. The norm is defined by kpk2;C 1 WD p T C01 p and is
                                                          0
a confidence quantile. To treat this semi-infinite optimization problem, we apply a
Taylor expansion w.r.t. p around p0 :
                                                             d
            min          max              .C.; p0 // C        .C.; p0 //.p  p0 /
                   kpp0 k2;C 1                          dp
                                0


and can state the solution of the inner problem explicitly:

                                                           d
                       max               .C.; p0 // C         .C.; p0 //.p  p0 /
                  kpp0 k2;C 1                          dp
                            0
                                                                  
                                   d                              
                  D .C.; p0 // C 
                                  dp                   .C.; p0 //
                                                                      ;
                                                                   2;C0
Parameter Estimation and Optimum Experimental Design                            27


see [20]. The formulation
                                                     
                                       d             
                                      
                    min .C.; p0 // C     .C.; p0 //
                                       dp            
                                                       2;C0

hence yields a robustification of the experimental design optimization problem.
Notice that we end up with a multi-objective optimization problem where the two
goals, the minimization of the variance–covariance matrix and the minimization of
the sensitivity w.r.t. the parameters, are weighted by the confidence quantile .
   The robustified objective depends on the derivative of w.r.t. p and thus on
second derivatives of the system states w.r.t. the parameters.


8.4.3 Sequential Strategy

Because experimental design problems depend on the current parameter values and
parameter estimation problems depend on the data evaluated so far in previously
designed experiments, we propose to solve both problems in a sequential way, [19]:


Algorithm 2 (Sequential experimental design and parameter estimation)
0. k WD 0. Start with an in initial guess p0 for the parameter values.
1. With p D pk , design Nk new optimal experiments maximizing the information
   gain taking all previous experiments into account.
2. Process the new experiments to obtain experimental data.
3. Compute a parameter estimate pkC1 using the data from all previous and the Nk
   new experiments.
4. Compute the variance–covariance matrix CkC1 of the new parameter estimate
   pkC1 . If the confidence region is sufficiently small or the experimental budget
   has been spent, STOP.
5. Set k WD k C 1 and go to 1.
   The experimental design optimization problems in step 2 may be robustified
using the current variance–covariance matrix Ck of the current parameter estimate
pk . This sequential approach may be applied offline by designing one single or
multiple parallel experiments in every loop cycle. Or it may be applied online by
computing new controls for the continuation of experiments after each or some new
data has been measured. For a case study of the online approach, see [17].



8.5 Methods for the Numerical Solution

We want to give a short overview of our methods for the solution of experimental
design optimization problems. These are nonlinear optimal control problems.
28                                                                            H.G. Bock et al.


Specific difficulties are the non-standard objective and the dependence of the
variance–covariance matrix on derivatives of the state variables.
   We apply the direct approach for optimal control, i.e. we parameterize the control
functions u by finite-dimensional variables. Commonly, piecewise polynomials are
chosen, but any other finite-dimensional parameterization is also applicable. The
state constraints are evaluated on a finite grid. The DAE system is evaluated by
single shooting or, in a tailored reformulation of the problem, by multiple shooting.
                                        j
   We relax the 0–1-conditions by wi 2 Œ0; 1, i D 1; : : : ; M j . In the end, non-
integer solutions are rounded by appropriate heuristics [16].
   After these transformations we obtain a finite dimensional constrained nonlinear
optimization problem which we solve by an structured SQP method. Within this
algorithm, we need to evaluate derivatives of objective and constraints. The Hessian
of the Lagrangian is approximated by low-rank update-formulas. Rather intricate
is the numerical computation of the gradient of the objective, i.e. the gradient
of a functional of the variance–covariance matrix depending on derivatives @x   @p of
the states w.r.t. the parameters. For the evaluation we apply matrix differentiation
                                                                                  @2 x
calculus [31], Internal Numerical Differentiation for mixed second derivatives @q@p
of the states w.r.t. parameters and controls [5, 6], and Automatic Differentiation to
evaluate the required first and second derivatives of the model functions. For the
robustified problem, one more order of derivatives has to be provided. Structures in
the Jacobians from the multiple experiment formulation are exploited by a tailored
derivative evaluation and linear algebra.
   These methods are implemented in our software package VPLAN, see [16] for
the fundamental design.



9 Summary

In this paper we have reviewed parameter estimation problems and optimum
experimental design problem, two important steps in optimization based modeling.
We apply the boundary problem method optimization approach for the solution of
parameter estimation problems with multiple shooting and the generalized Gauß–
Newton method. We have discussed convergence properties of this approach and
shown that parameter estimation problems should be solved by Gauß–Newton rather
than SQP methods. To not only fit models to data, but also validate the parameters,
we suggest to minimize the statistical uncertainty of parameter estimates by optimal
model based design of experiments. For this intricate optimal control problem, we
provide numerical solution methods.

Acknowledgements The authors want to thank DFG for providing excellent research conditions
within the Heidelberg Graduate School of Mathematical and Computational Methods for the
Sciences. S. Körkel wants to thank BASF SE for funding his position and parts of his research
group. Additional funding is granted by the German Federal Ministry for Education and Research
within the initiative Mathematik für Innovationen in Industrie und Dienstleistungen.
Parameter Estimation and Optimum Experimental Design                                               29


References

 1. Albersmeyer, J., Bock, H.: Sensitivity Generation in an Adaptive BDF-Method. In: H.G.
    Bock, E. Kostina, X. Phu, R. Rannacher (eds.) Modeling, Simulation and Optimization
    of Complex Processes: Proceedings of the International Conference on High Performance
    Scientific Computing, March 6–10, 2006, Hanoi, Vietnam, pp. 15–24. Springer Verlag Berlin
    Heidelberg New York (2008)
 2. Atkinson, A.C., Donev, A.N.: Optimum Experimental Designs. Oxford University Press (1992)
 3. Atkinson, A.C., Fedorov, V.V.: Optimal design: Experiments for discriminating between
    several models. Biometrika 62(2), 289 (1975)
 4. Banga, J., Balsa-Canto, E.: Parameter estimation and optimal experimental design. Essays
    Biochem. 45, 195–209 (2008)
 5. Bauer, I.: Numerische Verfahren zur Lösung von Anfangswertaufgaben und zur Generierung
    von ersten und zweiten Ableitungen mit Anwendungen bei Optimierungsaufgaben in Chemie
    und Verfahrenstechnik. Ph.D. thesis, Universität Heidelberg (1999). URL http://www.ub.uni-
    heidelberg.de/archiv/1513
 6. Bauer, I., Bock, H.G., Körkel, S., Schlöder, J.P.: Numerical methods for initial value problems
    and derivative generation for DAE models with application to optimum experimental design of
    chemical processes. In: F. Keil, W. Mackens, H. Voss, J. Werther (eds.) Scientific Computing
    in Chemical Engineering II, vol. 2, pp. 282–289. Springer-Verlag, Berlin Heidelberg (1999)
 7. Binder, T., Kostina, E.: Robust parameter estimation in differential equations. In: H.G. Bock,
    T. Carraro, W. Jäger, S. Körkel, R. Rannacher, J.P. Schlöder (eds.) Model Based Parameter
    Estimation: Theory and Applications, Contributions in Mathematical and Computational
    Sciences. Springer (2012)
 8. Bock, H.: Randwertproblemmethoden zur Parameteridentifizierung in Systemen nichtlinearer
    Differentialgleichungen, Bonner Mathematische Schriften, vol. 183. Universität Bonn, Bonn
    (1987). URL http://www.iwr.uni-heidelberg.de/groups/agbock/FILES/Bock1987.pdf
 9. Bock, H.G., Eich, E., Schlöder, J.P.: Numerical Solution of Constrained Least Squares
    Boundary Value Problems in Differential-Algebraic Equations. In: K. Strehmel (ed.)
    Differential-Algebraic Equations. Numerical Treatment of Differential Equations. BG Teubner
    (1988)
10. Bock, H.G., Körkel, S., Kostina, E., Schlöder, J.P.: Robustness aspects in parameter estimation,
    optimal design of experiments and optimal control. In: W. Jäger, R. Rannacher, J. Warnatz
    (eds.) Reactive Flows, Diffusion and Transport, pp. 117–146. Springer-Verlag, Berlin Heidel-
    berg (2007)
11. Bock, H.G., Kostina, E.A., Schlöder, J.P.: Numerical methods for parameter estimation in
    nonlinear differential algebraic equations. GAMM-Mitteilungen 30(2), 352–375 (2007)
12. Chen, B.H., Asprey, S.P.: On the design of optimally informative dynamic experiments for
    model discrimination in multiresponse nonlinear situations. Ind. Eng. Chem. Res. 42(7),
    13791390 (2003)
13. Dieses, A.: Numerische Verfahren zur Diskriminierung nichtlinearer Modelle für dynamische
    chemische Prozesse. Diplomarbeit, Interdisziplinäres Zentrum für Wissenschaftliches Rechnen
    der Universität Heidelberg (1997)
14. Franceschini, G., Macchietto, S.: Model-based design of experiments for parameter precision:
    State of the art. Chemical Engineering Science 63, 4846–4872 (2008)
15. Griewank, A., Walther, A.: Evaluating Derivatives: Principles and Techniques of Algorithmic
    Differentiation, 2nd edn. No. 105 in Other Titles in Applied Mathematics. SIAM, Philadelphia,
    PA (2008). URL http://www.ec-securehost.com/SIAM/OT105.html
16. Körkel, S.: Numerische Methoden für optimale Versuchsplanungsprobleme bei nichtlinearen
    DAE-Modellen. Ph.D. thesis, Universität Heidelberg, Heidelberg (2002). URL http://www.
    koerkel.de
30                                                                                H.G. Bock et al.


17. Körkel, S., Arellano-Garcia, H.: Online experimental design for model validation. In: R.M.
    de Brito Alves, C.A.O. do Nascimento, E.C.B. Jr. (eds.) Proceedings of 10th International
    Symposium on Process Systems Engineering — PSE2009 (2009)
18. Körkel, S., Arellano-Garcia, H., Schöneberger, J., Wozny, G.: Optimum experimental design
    for key performance indicators. In: B. Braunschweig, X. Joulia (eds.) Proceedings of 18th
    European Symposium on Computer Aided Process Engineering - ESCAPE 18 (2008)
19. Körkel, S., Bauer, I., Bock, H., Schlöder, J.: A sequential approach for nonlinear optimum
    experimental design in dae systems. In: Scientific Computing in Chemical Engineering II, pp.
    338–345. Springer (1999)
20. Körkel, S., Kostina, E., Bock, H., Schlöder, J.: Numerical methods for optimal control prob-
    lems in design of robust optimal experiments for nonlinear dynamic processes. Optimization
    Methods and Software 19, 327–338 (2004)
21. Moles, C.G., Mendes, P., Banga, J.R.: Parameter estimation in biochemical pathways: A
    comparison of global optimization methods. Genome Res. 13(11), 2467–2474 (2003)
22. Pukelsheim, F.: Optimal Design of Experiments. Wiley (1993)
23. Schlöder, J.: Numerische Methoden zur Behandlung hochdimensionaler Aufgaben der Param-
    eteridentifizierung, Bonner Mathematische Schriften, vol. 187. Universität Bonn, Bonn (1988)
24. Schlöder, J.P., Bock, H.G.: Identification of rate constants in bistable chemical reaction
    systems. In: P. Deuflhard, E. Hairer (eds.) Inverse Problems, Progress in Scientific Computing,
    vol. 2, pp. 27–47. Birkhäuser Boston (1983)
25. Schwetlick, H.: Nonlinear parameter estimation: Models, criteria and algorithms. In: D.F.
    Griffiths, G.A. Watson (eds.) Numerical Analysis 1991, Proceedings of the 14th Dundee
    Conference on Numerical Analysis, Pitman Research Notes in Mathematics Series, vol. 260,
    pp. 164–193. Longman Scientific & Technical (1992)
26. Seber, G.A.F., Wild, C.J.: Nonlinear Regression. Wiley (1989)
27. Stoer, J.: On the numerical solution of constrained least-squares problems. SIAM J. Numer.
    Anal. 8(2), 382–411 (1971)
28. Telen, D., Logist, F., Derlinden, E.V., Tack, I., Impe, J.V.: Optimal experiment design for
    dynamic bioprocesses: a multi-objective approach. Chemical Engineering Science 78, 82–97
    (2012)
29. Uciński, D.: Optimal Measurement Methods for Distributed Parameter System Identification.
    CRC Press (2005)
30. Uciński, D.: An optimal scanning sensor activation policy for parameter estimation of
    distributed systems. In: H.G. Bock, T. Carraro, W. Jäger, S. Körkel, R. Rannacher, J.P.
    Schlöder (eds.) Model Based Parameter Estimation: Theory and Applications, Contributions
    in Mathematical and Computational Sciences. Springer (2012)
31. Walter, S.: Structured higher-order algorithmic differentiation in the forward and reverse mode
    with application in optimum experimental design. Ph.D. thesis, Humboldt-Universität zu
    Berlin (2011)
Adaptive Finite Element Methods for Parameter
Identification Problems

Boris Vexler




Abstract This chapter provides an overview on the use of adaptive finite element
methods for parameter identification problems governed by partial differential equa-
tions. We discuss a posteriori error estimates for the finite element discretization
error with respect to a given quantity of interest for both stationary (elliptic)
and nonstationary (parabolic) problems. These error estimates guide adaptive
algorithms for mesh refinement, which are tailored to the parameter identification
problem. The capability of the presented methods is demonstrated on two model
examples of (stationary and nonstationary) combustion problems. Moreover we
present a recently developed technique for efficient computation of the Tikhonov
regularization parameter in the context of distributed parameter estimation using
adaptive finite element methods.


1 Introduction

Many application problems coming from physics, chemistry, biology, or engineer-
ing sciences are described by mathematical models involving partial differential
equations (PDEs). All these models involve parameters, which are often either
unknown or only imprecisely known. In the majority of cases the unknown
parameters can not be measured in a direct way. This fact gives the motivation for
systematic comparison between experiments and numerical simulations leading to
parameter identification problems. As described in other chapters of this volume,
parameter identification problems are usually reformulated as optimization prob-
lems, where the mathematical model plays the role of the constraint. This leads to
optimization problems with partial differential equations.


B. Vexler ()
Lehrstuhl für Mathematische Optimierung, Technische Universität München, Fakultät für
Mathematik, Boltzmannstraße 3, 85748 Garching b. München, Germany
e-mail: vexler@ma.tum.de

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions                     31
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 2,
© Springer-Verlag Berlin Heidelberg 2013
32                                                                              B. Vexler


    For numerical solution the resulting optimization problems have to be dis-
cretized. This leads inevitably to discretization errors between the solution of the
continuous (infinite dimensional) and the discretized (finite dimensional) problems.
For the discretization of problems involving partial differential equations we employ
finite element methods which are constructed using triangulations (meshes) of the
computational domain. For efficient solution of parameter identification problems
the computational meshes have to be chosen such that on the one hand the numerical
effort to solve the discretized problem is as small as possible, and on the other
hand the discretization error is under a given tolerance. These considerations lead to
construction of adaptive algorithms for mesh refinement.
    The use of adaptive techniques based on a posteriori error estimation is well
accepted in the context of finite element discretization of partial differential
equations, see, e.g., [5, 13, 31].
    In the last years application of these techniques to optimization problems with
PDEs is actively investigated. In the articles [17, 18, 22, 24], the authors provide a
posteriori error estimates for elliptic optimal control problems with distributed or
Neumann control subject to box constraints on the control variable. These estimates
assess the error in the control, state, and adjoint variables with respect to the natural
norms of the corresponding spaces.
    However, in many applications, the error in global norms does not provide a
useful error bound for the error in the quantity of physical interest. In [3,5] a general
concept for a posteriori estimation of the discretization error with respect to the cost
functional in the context of optimal control problems is presented. In the papers
[6, 7, 32], this approach is extended to the estimation of the discretization error with
respect to an arbitrary functional depending on both the control (parameter) and the
state variable, i.e., with respect to a quantity of interest. This allows, among other
things, an efficient treatment of parameter identification problems. This approach is
summarized in Sect. 3.
    The extension of these techniques to optimal control and parameter identification
problems governed by parabolic equations was done in recent publications [4,25,26]
and is summarized in Sect. 4.
    In several situations, the unknown parameter variable is infinite dimensional, the
parameter identification problem is ill-posed, and one has to employ regularization
methods, see, e. g., [12, 19]. In Sect. 5 we present the techniques developed in [16]
for efficient computation of Tikhonov regularization parameter using adaptive finite
element methods.



2 Basic Concept

In this section we present our basic concept for a posteriori error estimation and
adaptivity. We consider a (system of) partial differential equations in the abstract
setting
                                  A.q; u/ D 0;                                   (1)
Adaptive Finite Element Methods for Parameter Identification Problems                    33


where u denotes the state variable in a state space V and may describe such
physical quantities like temperature, velocity, pressure, concentration, etc. The
variable q in the space Q describes the (set of) unknown parameters. The goal of
the parameter identification problem is to estimate the parameter variable q from
measurements CO in some measurement space Z corresponding to the observation
operator C W V ! Z. As described in other chapters of this volume, this problem is
usually reformulated as an optimization problem using the least squares approach:

                                1         O 2Z C ˛ kq  qk
        minimize J.q; u/ D        kC.u/  Ck            O 2Q            subject to (1)   (2)
                                2                2

Here, qO 2 Q denotes the reference parameter and ˛  0 is the Tikhonov regulariza-
tion parameter. For a finite dimensional parameter space Q D Rl the regularization
parameter is often chosen as ˛ D 0. In the case of an ill posed parameter identifica-
tion problem the choice of ˛ is a delicate issue. In Sect. 5 we discuss a strategy for
choosing ˛ using adaptive finite elements.
   For their numerical solution the infinite-dimensional optimization problem (2)
has to be discretized. Usually one uses finite dimensional spaces Qh  Q and
Vh  V for the discretization of the parameter and the state variable respectively.
The differential operator A is approximated by its discrete analogue Ah resulting in
the following discretized optimization problem:

                             minimize J.qh ; uh /     subject to
                             qh 2 Qh ; uh 2 Vh ;                                         (3)
                               Ah .qh ; uh / D 0:

In several publications the asymptotic behavior of the error between the solution
.q; u/ of the continuous problem (2) and the solution .qh ; uh / of the discrete
problem (3) is studied and a priori error estimates are derived, see, e. g., [20, 27]
for the a priori error analysis in the context of parameter identification problems.
However, a priori error estimates do not provide information how to construct an
efficient discretization which allows to bring the discretization error below a given
tolerance with minimum of numerical effort.
    For assessing the quality of a discrete model we develop a posteriori error
estimates for the error between the solution of the continuous optimization problem
and the solution of the discrete one. A crucial ingredient of the error analysis is
the choice of a quantity, which describes the goal of the computation. We call this
quantity the quantity of interest I W Q  V ! R and derive an a posteriori error
estimate ˜h for the error with respect to it, i.e.

                                I.q; u/  I.qh ; uh /  ˜h :

It is the task of an adaptive algorithm to automatically construct an appropriate
discretization. One starts with a coarse mesh which is successively enriched
34                                                                           B. Vexler


(refined) using information from the error estimator ˜h computed on the present
mesh. Thereby, the aim is to generate economical meshes in the sense that the
number of unknowns Nh D dim Vh is as small as possible for achieving a given
tolerance.
   In the following, we sketch a typical mesh refinement algorithm.
 Algorithm: Basic Adaptive Mesh Refinement
 1. Choose starting discretization .Qh0 ; Vh0 / and set l D 0
 2. Compute uhl 2 Vhl ; qhl 2 Qhl solving discrete optimization problem
 3. Compute error estimator hl D .uhl ; qhl /
 4. If ˜hl  TOL stop
 5. Refine: .Qhl ; Vhl / ! .QhlC1 ; VhlC1 / using information from ˜hl
 6. Increment l and goto 2.

In this algorithm, the a posteriori error estimator is used for two goals: first, in
step (4) ˜hl is used as a stopping criterion for a given tolerance TOL. Second,
in step (5) the error estimator should provide information for construction of new
discretizations. In the context of finite element methods, this step is based on cell-
wise (or node-wise) representation of the error estimator h , e.g.
                                           X
                                     h D     h;K
                                          K

with cell contributions h;K . The value of h;K is used to decide how the whole error
can be reduced, if the cell K is refined. The common feature of different strategies
is, that the local mesh refinement should be done for those K with “large” h;K .
Different marking strategies are described, e. g., in [5].


3 Adaptivity for Parameter Estimation in Stationary
  Problems

In this section we describe our approach for parameter identification problems
governed by stationary partial differential equations. We start with an abstract
formulation of the problem (2) in a weak form and discuss necessary optimality
conditions for it. In Sect. 3.1 we describe the finite element discretization for the
problem under consideration. A posteriori error estimates are presented in Sect. 3.2.
Thereafter, we illustrate the efficiency of our method for estimation of Arrhenius
parameters in a simple stationary combustion model.
   Throughout this section we assume the state equation (1) to be formulated in a
weak form:
                          a.q; u/.v/ D f .v/ for all v 2 V:                       (4)
Here, aW Q  V  V denotes a semi-linear form which is linear in the third argument
and f in the dual space V  represents given data. The optimization problem is then
formulated as follows:
Adaptive Finite Element Methods for Parameter Identification Problems                 35


                              minimize J.q; u/      subject to                        (5)

                                  q 2 Q; u 2 V and (4);                               (6)
where the cost functional J.q; u/ is given as in (2).
Remark 1. Often additional inequality constraints, for instance box constraints
qa  q  qb , are included in the above optimization problem. For extension of
adaptive techniques presented in this chapter to problems with inequality constrains
we refer to [9, 33].
   For the discussion of existence of solutions for different classes of optimization
problems governed by PDEs we refer, e. g., to [15, 23, 30]. Throughout we assume
that the optimization problem (4)–(6) possesses a solution.
   The majority of optimization algorithms for the solution of (4)–(6) are based
on necessary optimality conditions derived with the Lagrange approach. For
problem (4)–(6) the Lagrange functional is introduced by

                       L.q; u; z/ D J.q; u/ C f .z/  a.q; u/.z/:                     (7)

In several situations one can prove, see, e. g., [30], that for a local minimum .q; u/
of (4)–(6) there exists an adjoint solution z 2 V such that the triple x D .q; u; z/ 2
X D Q  V  V is a stationary point of L, i. e.

                               L0 .x/.ıx/ D 0 8ıx 2 X :

This condition results in the optimality system consisting of three equations:

        a.q; u/.v/ D f .v/                for all v 2 V    (state equation);
     au0 .q; u/.v; z/ D Ju0 .q; u/.v/     for all v 2 V    (adjoint equation);        (8)
    aq0 .q; u/.p; z/ D Jq0 .q; u/.p/      for all p 2 Q     (optimality condition):

In the presence of additional inequality constraints on the parameter variable q, the
optimality condition becomes a variational inequality, see, e. g, [30].



3.1 Finite Element Discretization

We consider conforming finite element discretizations. Starting from a non-overlap-
ping partition T h of the computational domain ˝ into cells K (quadrilaterals
or triangles in two space dimensions, hexahedra or tetrahedra in three space
dimensions), we construct the finite-dimensional spaces

                                  Vh  V;        Qh  Q;                              (9)
36                                                                                       B. Vexler

Fig. 1 Quadrilateral mesh in
two dimensions with two
hanging nodes




see, e. g., [10, 11]. Here, h denotes a generic discretization parameter, describing
essentially the local fineness
                       ˇ        of the mesh. It is defined as a cell-wise constant
function by setting hˇK D hK with the diameter hK of the cell K. Due to the
fact that we allow local mesh refinement, we do not assume that the cells are of
comparable size.
Remark 2. In order to ease mesh refinement, we allow for cells to have nodes which
lie on midpoints of faces of the neighboring cells. But at most one such hanging
node (see Fig. 1) is permitted for each face of a cell. There are no degrees of freedom
corresponding to these irregular nodes and the value of a finite element function is
determined by pointwise interpolation.
   The optimization problem on the discrete level is given through the discretization
of the state equation (4):

                            Minimize J.qh ; uh /;               subject to                   (10)

                                       qh 2 Qh ; uh 2 Vh ;                                   (11)
                         a.qh ; uh /.vh / D f .vh /       for all vh 2 Vh :                  (12)
Due to the Galerkin-type discretization, the necessary optimality conditions for
the discrete optimization problem (10)–(12) can be directly translated from the
continuous level. The triple xh D .qh ; uh ; zh / 2 X h D Qh  Vh  Vh is a stationary
point for the Lagrangian L on the discrete space Qh  Vh  Vh , i. e.

                           L0 .xh /.ıxh / D 0        for all ıxh 2 Xh :

This results in the discrete optimality system:

                    a.qh ; uh /.vh / D f .vh /                       for all vh 2 Vh ;
               au0 .qh ; uh /.vh ; zh / D Ju0 .qh ; uh /.vh /        for all vh 2 Vh ;       (13)
              aq0 .qh ; uh /.ph ; zh / D Jq0 .qh ; uh /.ph /         for all ph 2 Qh :
Adaptive Finite Element Methods for Parameter Identification Problems                37


3.2 A Posteriori Error Estimators

The aim of this section is to present an error estimator h for the error between
the solution .q; u/ of the continuous optimization problem (4)–(6) and the solution
.qh ; uh / of the discrete analog (10)–(12) with respect to a given quantity of interest
I W Q  V ! R, i. e.
                                I.q; u/  I.qh ; uh /  h :
For parameter identification problems the quantity of interest is often chosen as a
component of a finite dimensional parameter I.q; u/ D qi (one can consider several
quantities of interest) or as some weighted mean value in the case of a distributed
parameter q.
   We start with a special case, where the quantity of interest coincide with the cost
functional, i. e. I.q; u/ D J.q; u/. This case is in general not of importance for
parameter identification problems, but the error estimates for a general quantity of
interest are derived based on this special case. The following error representation is
shown in [5]:
Proposition 1. Let x D .q; u; z/ 2 X fulfill the optimality system (8) and let xh D
.qh ; uh ; zh / 2 X h fulfill the discrete counterpart (13). Then there holds:

                                                 1 0
                     J.q; u/  J.qh ; uh / D       L .xh /.x  xQ h / C R ;
                                                 2
where xQ h 2 X h is arbitrary and R is a third order remainder term given by
                           Z 1
                      1
                  R D            L000 .x C sex /.ex ; ex ; ex /  s  .s  1/ ds
                      2     0

with ex D x  xh .
In order to turn the above error representation into a computable error estimator,
we proceed as follows. First we choose xQ h D ih x with a suitable interpolation
operator ih W X ! X h , then the interpolation error is approximated using an operator
W X h ! e   X h , with e
                        X h ¤ X h , such that x  xh has a better local asymptotical
behavior as x  ih x. Then we approximate:

                                                      1 0
                  J.q; u/  J.qh ; uh /  J D          L .xh /.h xh  xh /:
                                                      2
Such an operator can be constructed for example by the interpolation of the
computed bilinear finite element solution in the space of biquadratic finite elements
on patches of cells. For this operator the improved approximation property relies
on local smoothness of the solution and super-convergence properties of the
approximation xh . The use of such “local higher-order approximations” is observed
38                                                                                   B. Vexler


to work very successfully in the context of a posteriori error estimation, see,
e.g., [5, 6].
   For extension of this result to the case of a general quantity of interest we proceed
as in [6, 7] and introduce an auxiliary Lagrange functional

               M W X  X ! R;             M.x; x1 / D I.q; u/ C L0 .x/.x1 /:

We abbreviate y D .x; x1 / and x1 D .q1 ; u1 ; z1 /. Then similarly to Proposition 1
an error representation for the error in I can be formulated using continuous and
discrete stationary points of M , cf. [6, 7]:
Proposition 2. Let y D .x; x1 / 2 X  X be a stationary point of M , i.e.,

                            My0 .y/.ıy/ D 0 8ıy 2 X  X ;

and let yh D .xh ; x1;h / 2 X h  X h be a discrete stationary point, i.e,

                       My0 .yh /.ıyh / D 0 8ıyh 2 X h  X h ;

then there holds
                                                1 0
                   I.q; u/  I.qh ; uh / D        M .yh /.y  yQh / C R 1 ;
                                                2
where yQh 2 X h  X h is arbitrary and the remainder term is given as
                            Z 1
                        1
                R1 D              M 000 .y C sey /.ey ; ey ; ey /  s  .s  1/ ds
                        2    0

with ey D y  yh .
Again, in order to turn this error identity into a computable error estimator, we
neglect the remainder term R 1 and approximate the interpolation error using a
suitable approximation of the interpolation error leading to

                                                     1 0
                 I.q; u/  I.qh ; uh /  I D         M .yh /.h yh  yh /:
                                                     2 y
For a concrete form of this error estimator consisting of some residuals we refer
to [6, 7].
   A crucial question is of course how to compute the discrete stationary point yh
of M required for this error estimator. At the first glance it seems that the solution
of the stationarity equation for M leads to coupled system of double size compared
with the optimality system (8). However, solving this stationarity equation can be
easily done using the already computed stationary point xh D .qh ; uh ; zh / of L and
exploiting existing structures. The following proposition shows that the computation
Adaptive Finite Element Methods for Parameter Identification Problems                        39


of auxiliary variables x1;h D .q1;h ; u1;h ; z1;h / is equivalent to one step of an SQP
method, which is often applied for solving (8). The corresponding equation can be
also solved by a Schur complement technique reducing the problem to the control
space, cf., e.g., [26].
Proposition 3. Let x D .q; u; z/ and xh D .qh ; uh ; zh / be continuous and discrete
stationary points of L. Then y D .x; x1 / is a stationary point of M if and only if

     L00 .x/.ıx; x1 / D Iq0 .q; u/.ıq/  Iu0 .q; u/.ıu/      8ıx D .ıq; ıu; ız/ 2 X :

Moreover, yh D .xh ; x1;h / is a discrete stationary point of M if and only if

L00 .xh /.ıxh ; x1;h / D Iq0 .qh ; uh /.ıqh /Iu0 .uh /.ıuh / 8ıxh D .ıqh ; ıuh ; ızh / 2 X h :



3.3 Estimation of Arrhenius Parameters for a Stationary
    Combustion Model

In this section we demonstrate the behavior of the presented adaptive strategy for
the problem of estimating Arrhenius parameters in a simple combustion model.
The results are taken from [1, 32]. For the application to parameter estimation in
multidimensional reactive flows we refer to [1, 2].
    The state equation is given by scalar stationary convection-diffusion-reaction
equation for the variable u in a domain ˝  R2 with a divergence-free vector
field ˇ and a diffusion coefficient D:

                           ˇ  ru  div.Dru/ C s.u; q/ D f;                                (14)

provided with Dirichlet boundary conditions u D b
                                                u at the inflow boundary in 
@˝ and Neumann conditions @n u D 0 on @˝nin . As usual in combustion problems,
the reaction term is of Arrhenius type

                        s.u; q/ WD A expfE=.d  u/gu.c  u/:                              (15)

The variable u stands for the mole fraction of a fuel, while the mole fraction of
the oxidizer is 0:2  u. Since the Arrhenius law is a heuristic law and can not be
derived by physical laws, the involved parameters are a priori unknown and have to
be calibrated. This parameter fitting is usually done by comparison of experimental
data and simulation results. We assume the parameters d; c to be fixed and the
parameters A, E are considered as unknown and form the vector-valued parameter
q D .ln.A/; E/ 2 Q D R2 .
   We consider the following configuration: Fuel .F / and oxidizer .Ox/ are
injected in different pipes and diffuse in a reaction chamber with overall length
35 mm and high 7 mm, see Fig. 2. At the center tube, the Dirichlet condition for the
40                                                                                 B. Vexler

Fig. 2 Configuration of the
reaction chamber for                           Ox
estimating Arrhenius
coefficients. Dashed vertical                   F
lines show the lines where the
measurements are modeled                       Ox

Fig. 3 Mole fraction of the
fuel .u0 / for the initial
parameters q 0 . Blue: u D 0,
red: u D 0:2



Fig. 4 Mole fraction of the
fuel .u/ for the optimal
parameters q




fuel is u D ui n WD 0:2, and at the upper and lower tube, u D 0. On all other parts of
the boundary, homogeneous Neumann conditions are opposed.
   The fixed parameters in the Arrhenius law (15) are c D ui n and d D 0:24. The
convection direction ˇ.x; y/ is a velocity field obtained by solving the incompress-
ible Navier–Stokes equations with parabolic inflow profile at the tubes with peak
flow ˇmax D 0:2 m/s. The diffusion coefficient D is chosen D D 2:e  6.
   The measurements C.u/ 2 Z D Rnm are modeled by mean values along
nm D 10 straight lines i at different positions in the reaction chamber, see dashed
lines in Fig. 2:                   Z
                            Ci .v/ D        v dx ;   i D 1; : : : ; nm :
                                       i

  For the measurement data CO 2 Z we use artificial measurements obtained by
choosing optimal parameters q D .6:9; 0:07/ and solving the state equation on a very
fine mesh. The initial parameters are set to q 0 D .log.A0 /; E 0 / D .4; 0:15/, leading
to low reaction rates and a diffusion dominated solution. In Fig. 3 the corresponding
state variable (fuel) u0 is shown. For the optimal q, in contrast to the initial guess q 0 ,
a sharp reaction front occurs, see Fig. 4. Obviously, the difference in the parameters
has a substantial impact on the state variable u.
    The state equation is discretized by finite elements using local projection
stabilization for the convection term. This symmetric stabilization allows for a
natural formulation of the discrete adjoint equation, see [8] for details.
    For the quantity of interest we choose I.q/ D q2 to control the discretization
error in the second parameter. Comparing the error in the parameters with a more
conventional strategy on globally refined meshes, our proposed algorithm is much
more efficient. In Fig. 5, the relative error in the second parameter is plotted in
Adaptive Finite Element Methods for Parameter Identification Problems                          41


             0.1                                                     global
                                                                      local




            0.01




                                           10000                              100000

Fig. 5 Relative error in the second Arrhenius parameter in dependence of the number of mesh
points. Solid line: globally refined meshes, dashed line: locally refined meshes on the basis of a
posteriori error estimation




Fig. 6 Obtained meshes for estimating Arrhenius parameters with 2,825, 6,704, 13,676, and
21,752 nodes (from upper left to lower right)


dependence of the number of mesh points. The dashed line results from our method
on locally refined meshes. The solid line stands for parameter estimation with the
same optimization loop but on uniformly refined meshes. For a relative error of less
than 1%, only 6,704 nodes are necessary with a locally refined mesh, whereas more
than 100,000 nodes are necessary on a uniformly refined mesh.
   In Fig. 6, a sequence of locally refined meshes produced by the refinement
algorithm is shown. The highest amount of mesh points is located near the flame
front and close to the measurement lines.
42                                                                               B. Vexler


4 Adaptivity for Parameter Estimation in Nonstationary
  Problems

In this section we discuss an extension of our techniques to parameter identification
problems with state equations described by parabolic partial differential equations
following [4, 25, 26]. In what follows we partially use the same notation for the
semilinear form a, the Lagrange functional L, etc. as in Sect. 3 with slightly different
meaning due to the time dependency of involved equations.
   Throughout this section we assume the state equation (1) to be formulated in a
weak form as follows:

                       .@t u; / C a.q; u/./ D .f; /    8 2 X;
                                                                                     (16)
                                         u.0/ D u0 .q/:

    Here, we use the following notation: Q is again the parameter (control) space,
the Hilbert spaces V , H and the dual V  build a Gelfand triple, I D .0; T / is the
time interval, .  ;  / denotes the inner product in L2 .0; T I L2 .˝//, and the space X
is given as
                     ˚ ˇ                                                    
      X D W .0; T / D v ˇ v 2 L2 ..0; T /; V / and @t v 2 L2 ..0; T /; V  / :       (17)

The semilinear form aW Q  X  X ! R as well as the initial condition u0 may
depend on unknown parameters q. The form a results from a stationary semilinear
     N Q  V  V ! R by
form aW
                                         Z T
                         a.q; u/./ WD         N u.t//..t// dt:
                                               a.q;
                                          0

     The optimization problem is then formulated as follows:

                             minimize J.q; u/      subject to                        (18)

                                q 2 Q; u 2 X and (16);                               (19)
where the cost functional J.q; u/ is given as in (2).
  As for stationary problems, the optimality conditions can be formulated using a
Lagrange functional LW Q  X  X ! R defined as

     L.q; u; z/ D J.q; u/ C .f  @t u; z/  a.q; u/.z/  .u.0/  u0 .q/; z.0//H :    (20)

The necessary optimality condition for x D .q; u; z/ 2 X D Q  X  X

                               L0 .x/.ıx/ D 0     8ıx 2 X
Adaptive Finite Element Methods for Parameter Identification Problems                    43


results in the state equation (16), the adjoint equation, which is formulated back-
wards in time and the gradient equation, see, e. g., [23] or [30]. For details of the
optimality system in the above notation we refer to [26].



4.1 Space-Time Finite Element Discretization

For discretization of the state equation (16) we employ Galerkin finite element
methods in space and time. This allows for natural computable representation of
the discrete gradient and Hessian due to the fact that optimization (building up the
optimality system) and discretization commute in this case, see [4, 26] for details.
Moreover, our systematic approach to a posteriori error estimation relies on using
the Galerkin-type discretizations.
   For temporal discretization we employ discontinuous Galerkin (dG) methods,
see, e. g., [14] or [29] and the discretization in space is done with usual conforming
finite elements.


4.1.1 Temporal Discretization

To define a semi-discretization in time, let us partition the time interval Œ0; T  as

                           Œ0; T  D f0g [ I1 [ I2 [    [ IM

with subintervals Im D .tm1 ; tm  of size km and time points

                         0 D t0 < t1 <    < tM 1 < tM D T:

Weˇ define the discretization parameter k as a piecewise constant function by setting
k ˇIm D km for m D 1; : : : ; M. By means of the subintervals Im , we define for r 2 N0
the semi-discrete space Xe r by
                             k
               n                       ˇ ˇ                                   o
         e rk D vk 2 L2 ..0; T /; V / ˇˇ vk ˇ 2 P r .Im ; V / and vk .0/ 2 H
         X                                   Im


Here, P r .Im ; V / denotes the space of polynomials up to order r defined on Im with
values in V . Thus, the functions in Xe r may have discontinuities at the ends of the
                                         k
subintervals Im . This space will be used in the sequel as trial and test space in the
discontinuous Galerkin method.
   To define the dG(r) discretization we employ the following definition for
functions vk 2 X er :
                    k


vC                                                                     C      
 k;m WD lim vk .tm C t/; vk;m WD lim vk .tm  t/ D vk .tm /; Œvk m WD vk;m  vk;m :
         t !0C                        t !0C
44                                                                                          B. Vexler


   Then, the dG(r) semi-discretization of the state equation (16) reads: Find for
                                    e r such that
given parameter qk 2 Q a state uk 2 X k

     M Z
     X                                              X
                                                    M 1
            .@t uk ; /H dt C a.qk ; uk /./ C                        C
                                                           .Œuk m ; m                   e rk ;
                                                                        /H D .f; /; 8 2 X
  mD1 Im                                             mD0

                                                                       u
                                                                        k;0 D u0 .qk /:
                                                                            (21)
The semi-discrete optimization problem for the dG(r) time discretization has the
form:
                                                                               e rk : (22)
     Minimize J.qk ; uk / subject to the state equation (21); .qk ; uk / 2 Q  X

The corresponding Lagrangian e      er  X
                             LW Q  X k
                                         e r ! R is defined by
                                           k

                                                    M Z
                                                    X
     e
     L.qk ; uk ; zk / D J.qk ; uk / C .f; zk /                .@t uk ; zk /H dt
                                                    mD1 Im

                                             X
                                             M 1
                       a.qk ; uk /.zk /           .Œuk m ; zC                          
                                                               k;m /H  .uk;0  u0 .qk /; zk;0 /H
                                             mD0

                                                                             er  X
and the optimality condition for the triple xk D .qk ; uk ; zk / 2 X k D Q  X    er
                                                                               k    k
on this semidiscrete level is given as

                              e
                              L.xk /.ıxk / D 0         8ıxk 2 X k :


4.1.2 Spatial Discretization

The discontinuous Galerkin discretization in time naturally allows for spatial finite
element meshes, which are different in time. The use of such dynamic meshes leads
to very efficient numerical schemes, see [28] for details. For each time interval Im
we construct (conforming) finite element spaces Vhs;m (of order s) in a usual way.
The corresponding state space Xe r;s  X
                                       e r is defined by
                                 k;h     k
             n                       ˇ     ˇ                                        o
      e r;s D vkh 2 L2 ..0:T /; H / ˇˇ vkh ˇ 2 P r .Im ; V s;m / and vkh .0/ 2 V s;0 :
      X k;h                                  Im           h                     h


Then, the space-time finite element discretization of the state equation reads: Find
for given parameter qkh 2 Q a state ukh 2 Xe r;s such that
                                             k;h

     M Z
     X                                                  X
                                                        M 1
                                                                           C
              .@t ukh ; /H dt C a.qkh ;ukh /./ C             .Œukh m ; m /H C .u       
                                                                                    kh;0 ; 0 /H
     mD1 Im                                             mD0

                                         D .f; / C .u0 .qkh /; 0 /H                  e r;s : (23)
                                                                                   8 2 X k;h
Adaptive Finite Element Methods for Parameter Identification Problems                 45


   Thus, the optimization problem with fully discretized state is given by

           Minimize J.qkh ; ukh / subject to (23);                         e r;s :
                                                        .qkh ; ukh / 2 Q  X         (24)
                                                                             k;h

                                                                              e r;s 
The optimality condition for the triple xkh D .qkh ; ukh ; zkh / 2 X kh D Q  X k;h
e r;s on this discrete level is given as
X k;h

                           e
                           L.xkh /.ıxkh / D 0     8ıxkh 2 X kh :


4.1.3 Full Discretization

As in the stationary case (cf. Sect. 3) we choose a finite dimensional subspace
Qd  Q for the discretization of the parameter (control) space. In many situations
the control space Q is finite dimensional and we set Qd D Q. If the parameter q
is given as a function (in space and/or in time) the subspace Qd  Q is typically
constructed in a similar way as the discrete spaces for the state variable.
   Then, the formulation of the state equation, the optimization problems and the
Lagrangian defined on the fully discretized state space can directly be transferred
to the level with fully discretized control and state spaces by replacing Q by
Qd . The fully discrete solutions is indicated by the subscript  which collects the
discretization indices k, h, and d .
   The corresponding optimality condition for the triple x D .q ; u ; z / 2 X  D
Qd  X e r;s  X
               e r;s reads
         k;h     k;h

                             e
                             L.x /.ıx / D 0     8ıx 2 X  :



4.2 A Posteriori Error Estimators

In the case of parameter estimation problems governed by parabolic equation, the
construction of efficient adaptive algorithms requires separation of different error
sources. Our aim is to estimates the discretization error due to temporal discretiza-
tion, due to spatial discretization and due to control discretization separately. This
allows to balance the influence of different parts of the discretization, see the
discussion of such error balancing strategies in [26, 28]. Therefore, we split

                  J.q; u/  J.q ; u / D J.q; u/  J.qk ; uk /
                                            C J.qk ; uk /  J.qkh ; ukh /
                                            C J.qkh ; ukh /  J.q ; u /;

where .qk ; uk / 2 Q  X  e r is the solution of the time discretized problem (22) and
                             k
                   e r;s
.qkh ; ukh / 2 Q  X k;h is the solution of the time and space discretized problem (24)
46                                                                         B. Vexler


with still undiscretized control space Q. Each term in this sum is then represented
in a similar way as described in Sect. 3 using the residual of the equation in the
optimality system. For the technical issues concerning evaluation of the resulting
estimate we again refer to [26, 28].
   As already discussed in Sect. 3 one is usually interested not in the error with
respect to the cost functional but with respect to a quantity of interest, which can
for example be a component of the parameter vector. To this end one consider the
splitting

                 I.q; u/  I.q ; u / D I.q; u/  I.qk ; uk /
                                         CI.qk ; uk /  I.qkh ; ukh /
                                         CI.qkh ; ukh /  I.q ; u /;

and estimate each term in this sum using an additional Lagrangian M as in the
stationary case, cf. Sect. 3.2 and see [26] for details.



4.3 Estimation of Model Parameters for Propagation
    of Laminar Flames

In this section we illustrate our method on parameter estimation for a model of
propagation of laminar flames.
   The governing equation for the considered problem is taken from an example
given in [21]. It describes the major part of gaseous combustion under the low Mach
number hypothesis. Introducing the dimensionless temperature , denoting by Y
the species concentration, and assuming constant diffusion coefficients yields the
system of equations

                       @t      D !.Y; /          in ˝  I;
                            1
                   @t Y       Y D !.Y; /          in ˝  I;
                            Le                                                 (25)
                                 D 0               on ˝  f 0 g ;
                                Y D Y0               on ˝  f 0 g ;

where the Lewis number Le is the ratio of diffusivity of heat and diffusivity of
mass. We use a simple one-species reaction mechanism governed by an Arrhenius
law given by
                                        ˇ2       ˇ. 1/
                           !.Y; / D        Y e 1C˛. 1/ ;                 (26)
                                       2Le
in which an approximation for large activation energy has been employed.
Adaptive Finite Element Methods for Parameter Identification Problems             47

Fig. 7 Computational                        ΓN                               ΓN
domain ˝ and measurement                                ΓR
points pi                                    p1                         p3
                                   ΓD                                        Ω    ΓN
                                             p2                         p4
                                                        ΓR
                                            ΓN                               ΓN



   Here, we consider a freely propagating laminar flame described by (25) and its
response to a heat absorbing obstacle, a set of cooled parallel rods with rectangular
cross section (cf. Fig. 7). The computational domain has width H D 16 and length
L D 60. The obstacle covers half of the width and has length L=4. The boundary
conditions are chosen as
                 D1         on D  I;           dn  D 0       on N  I;
                Y D0         on D  I;           dn Y D 0       on N  I;

                               dn  D           on R  I;
                               dn Y D 0           on R  I;

where the heat absorption is modeled by boundary conditions of Robin type on R .
   The initial condition is the analytical solution of a one-dimensional right-
traveling flame in the limit ˇ ! 1 located left of the obstacle:
                                (
                                  1            for x1  xQ 1
                       0 .x/ D                              ;
                                    xQ1 x1
                                  e            for x1 > xQ 1
                                (
                                  0                    for x1  xQ 1
                       Y0 .x/ D                                      :
                                          Le.xQ1 x1 /
                                  1e                  for x1 > xQ 1

   For the computations, the occurring parameters are set as in [21] to

                   Le D 1;        ˇ D 10;           D 0:1;       xQ 1 D 9;

whereas the temperature ratio ˛, which determines the gas expansion in non-
constant density flows, is the objective of the parameter estimation. The state
variable u is given here as u D .; Y / and the parameter variable is q D ˛ 2 Q D R.
   The unknown parameter ˛ is estimated here using information from pointwise
measurements of  and Y at four points pi 2 ˝, i D 1; 2; 3; 4, at final time
T D 60. This parameter identification problem can be formulated by means of a
cost functional of least-squares type, that is

                         1 X                   2 1 X
                             4                         4
                                                                            2
             J.q; u/ D          .pi ; T /  Oi C          Y .pi ; T /  YOi :
                         2 i D1                    2 i D1
48                                                                                    B. Vexler


Table 1 Local refinement on a fixed mesh with equilibration
N       M         Ih             Ik             Ih C Ik          eI                 Ieff
                              02           03
   269    512         4:3  10     8:4  10         3:551  1002   2:889  1002     0:81
                              03           03
   635    512         5:5  10     9:1  10       3:533  1003    4:851  1002      13:72
                              02           03
 1,847    722      1:5  10       3:6  10       1:889  1002    3:024  1002        1:60
 5,549 1,048       6:5  1003    2:5  1003    9:074  1003    1:097  1002        1:20
14,419 1,088       2:4  1003    2:5  1003    5:064  1003    5:571  1003        1:10
                              04           03
43,343 1,102       8:5  10       2:5  10       3:453  1003    3:693  1003        1:06

Table 2 Local refinement on dynamic meshes with equilibration
Ntot       Nmax M       Ih          Ik          Ih C Ik        eI             Ieff
                                 02          03              02
   137,997    269 512 4:3  10       8:4  10       3:551  10    2:889  1002 0:81
   238,187    663 512 3:5  1003 8:6  1003 5:192  1003 5:109  1002         9:84
   633,941 1,677 724 1:6  1002 3:5  1003 2:015  1002 3:227  1002         1:60
 1,741,185 2,909 1,048 7:3  1003 2:5  1003 9:869  1003 1:214  1002       1:23
 3,875,029 4,785 1,098 2:2  1003 2:5  1003 4:792  1003 5:432  1003       1:13
 9,382,027 10,587 1,140 7:9  1004 2:5  1003 3:301  1003 3:588  1003      1:08
23,702,227 25,571 1,160 2:8  1004 2:4  1003 2:756  1003 2:944  1003      1:06



The values of the artificial measurements Oi and YOi , i D 1; 2; 3; 4, are obtained from
a reference solution computed on fine space and time discretizations. The quantity
of interest is given here as
                                    I.q; u/ D q:
since the control space in this application is given by Q D R, it is not necessary to
discretize Q. Thus, there is no discretization error due to the control discretization
and the a posteriori error estimator I consists of the error estimator for the temporal
error Ik and the error estimator for the spatial error Ih .
   For our numerical test we use piecewise constant polynomials in time and cell-
wise bilinear polynomials in space, cf. Sect. 4.1. We apply our adaptive algorithm
with simultaneous refinement of the space and time discretizations. The temporal
and spatial discretization errors are equilibrated as described above, see [25, 26] for
details.
   Tables 1 and 2 demonstrate the effectivity of the error estimator Ih CIk on locally
refined discretizations using fixed and dynamically changing spatial triangulations.
Here, e I D I.q; u/  I.q ; u / denotes the discretization error and the effectivity
index Ieff is as usual defined by
                                                  eI
                                      Ieff D            :
                                               h C Ik
                                                I


   In Fig. 8, we compare uniform refinement of the space and time discretiza-
tions with local refinement of both discretizations on a fixed spatial mesh and
on dynamically changing triangulations. We gain a remarkable reduction of the
required degrees of freedom for reaching a given tolerance. To meet for instance
an error of je I j  102 , the uniform refinement requires in total 15,056,225 degrees
Adaptive Finite Element Methods for Parameter Identification Problems                 49


                                                                 uniform
                                                                    local
                                                                 dynamic




                10−2




                    10 5                       10 6                    10 7
                                                           0,1
                                                      dimX k,h

Fig. 8 Comparison of the error je I j for different refinement strategies


              60 · 2−9


             60 · 2−10


             60 · 2−11


             60 · 2−12
                         0      10        20             30      40         50   60
                                                       Time t

Fig. 9 Visualization of the adaptively determined time step size k


of freedom, the local refinement needs 5,820,901 degrees of freedom, and the
dynamical refinement necessitates only 1,741,185 degrees of freedom. Thus, we
gain a reduction by a factor of about 1:8.6.
   Figure 9 depicts the distribution of the temporal step size k resulting from a fully
adaptive computation on dynamic meshes. We observe a strong refinement of the
time steps at the beginning of the time interval, whereas the time steps at the end are
determined by the adaptation to be eight times larger.
   Before presenting a sequence of dynamically changing meshes, we show in
Fig. 10 a typical locally refined mesh obtained by computations on a fixed spatial
mesh. We note, that the refinement is especially concentrated at the four reentrant
corners and the two measurement points behind the obstacle. The interior of the
region with restricted cross section is also strongly refined.
   Finally, Fig. 11 shows the spatial triangulation and the reaction rate ! for certain
selected time points. Thereby, ! is computed from the numerical solution by means
of formula (26). We observe, that the refinement traces the front of the reaction
rate ! until t  56 (cf. Fig. 11d). Afterwards, the mesh around the front becomes
coarser and the refinement is concentrated at the four measurement points pi .
Compared to the usage of one fixed triangulation, the usage of dynamically changing
50                                                                                  B. Vexler




Fig. 10 Locally refined fixed mesh


meshes enables us here to reduce the discretization error in terms of the quantity of
interest with lower number of degrees of freedom, cf. Fig. 8. Although computing on
dynamically changing meshes requires some additional effort, see [28] for details,
this technique pays off also in terms of CPU-time.


5 Adaptivity for Optimal Choice of Regularization
  Parameters

In this section we discuss an adaptive multilevel inexact Newton method for deter-
mining an optimal regularization parameter in Tikhonov regularization, see [16] for
more details.
   We again consider the state equation

                              a.q; u/.v/ D f .v/    8v 2 V;                             (27)

where the parameter q is now an infinite dimensional object, e. g., a function in an
infinite dimensional Hilbert space Q. The measurement data usually posses noise
and is denoted by CO ı with
                                 kCO  CO ı kZ  ı
and ideal measurements CO . In a variety of situations the problem of estimating the
parameter q from CO ı is ill-posed. Therefore, regularization methods are necessary
for a stable numerical solution of the parameter identification problem. One
of the well-known regularization techniques is Tikhonov regularization leading
to the following optimal control problem which depends on the regularization
parameter ˇ:

                               1                     1
     minimize J.ˇ; q; u/ D       kC.u/  CO ı k2G C    kqk2Q ;   subject to (27):       (28)
                               2                    2ˇ

Note, that for technical reasons we replaced the regularization parameter ˛, see (2),
by 1=ˇ. The regularization parameter ˇ should be chosen in such a way, that
the solution of this optimal control problem denoted by .q ˇ ; uˇ / is close to the
ideal solution .q ; u / for the problem without noise, see, e.g., [12] for precise
definitions. A well-established strategy for choosing the Tikhonov parameter ˇ is
Adaptive Finite Element Methods for Parameter Identification Problems              51




                                             (a) t = 1




                                            (b) t = 20




                                            (c) t = 40




                                            (d) t = 56




                                            (e) t = 60

Fig. 11 Locally refined meshes and reaction rate ! for t 2 f 1; 20; 40; 56; 60 g
52                                                                                    B. Vexler


the discrepancy principle: The parameter ˇ  should be chosen as the solution of the
following one-dimensional equation

                                       i.ˇ  / D     2 2
                                                     ı                                    (29)

with some       1 and the function i W RC ! RC given as

                                 i.ˇ/ D kC.uˇ /  CO ı k2G :

In [12] Newton’s method for solving (29) is analyzed. The corresponding algorithm
would require evaluation of the function i.ˇ/ and its derivative i 0 .ˇ/ in each
step. However, i.ˇ/ is not available since it depends on the exact solution of the
infinite dimensional optimal control problem (28). Therefore, one should replace
the function i.ˇ/ by its discrete analog ih .ˇ/ defined as

                                ih .ˇ/ D kC.uh /  CO ı k2G ;
                                                 ˇ


           ˇ   ˇ
where .qh ; uh / 2 Qh  Vh is the solution of the discretized version of the optimal
control problem (28). In [16] we described and analyzed an inexact multilevel
Newton’s method for solution of (29), where i.ˇ/ is replaced by ih .ˇ/ in each
Newton step and the choice of the discrete finite element spaces Qh and Vh
is adaptively controlled using appropriate a posteriori error estimates. The finite
element spaces Qh and Vh should be chosen on the one hand as coarse as possible
to save numerical effort and on the other hand fine enough to preserve quadratic
convergence of the method to the solution ˇ  of (29). This algorithm is sketched
below:


     1. Choose initial guess ˇ 0 > 0, initial discretization Qh0 ; Vh0 , set k D 0
                                                                      ˇk   ˇk
     2. Solve discrete optimal control problem, compute .qh ; uh /
     3. Evaluate ih .ˇk /, ih0 .ˇk /
     4. Evaluate error estimators

                   ji.ˇk /  ihk .ˇk /j  I ;       ji 0 .ˇk /  ih0 k .ˇk /j  K

     5. If the accuracy requirements for I ; K are fulfilled, set

                                                 ihk .ˇ k /  2 ı 2
                                ˇ kC1 D ˇk 
                                                      ih0 k .ˇ k /

     6. else: refine discretization hk ! hkC1 using local information from I ; K
     7. if stopping criterion is fulfilled: break
     8. else: Set k D k C 1 and go to 2.
Adaptive Finite Element Methods for Parameter Identification Problems                              53


   In [16] error estimators are presented to be used in the step (4) of the
algorithm, an efficient strategy for evaluation of ih0 .ˇ/ is discussed, and accuracy
requirements for the step (5) are provided allowing for quadratic convergence of the
method. Moreover, we discussed the stopping criterion for the step (7) and proved
                               ˇ
convergence of the solution qh with computed ˇ D ˇk  to the ideal solution q as
ı tends to 0.



References

 1. Becker, R., Braack, M., Vexler, B.: Numerical parameter estimation in multidimensional
    reactive flows. Combustion Theory and Modelling 8(4), 661 – 682 (2004)
 2. Becker, R., Braack, M., Vexler, B.: Parameter identification for chemical models in combustion
    problems. Applied Numerical Mathematics 54(3–4), 519–536 (2005)
 3. Becker, R., Kapp, H., Rannacher, R.: Adaptive finite element methods for optimal control of
    partial differential equations: Basic concepts. SIAM J. Control Optim. 39(1), 113–132 (2000)
 4. Becker, R., Meidner, D., Vexler, B.: Efficient numerical solution of parabolic optimization
    problems by finite element methods. Optim. Methods Softw. 22(5), 813–833 (2007)
 5. Becker, R., Rannacher, R.: An optimal control approach to a-posteriori error estimation. In:
    A. Iserles (ed.) Acta Numerica 2001, pp. 1–102. Cambridge University Press (2001)
 6. Becker, R., Vexler, B.: A posteriori error estimation for finite element discretizations of
    parameter identification problems. Numer. Math. 96(3), 435–459 (2004)
 7. Becker, R., Vexler, B.: Mesh refinement and numerical sensitivity analysis for parameter
    calibration of partial differential equations. J. Comp. Physics 206(1), 95–110 (2005)
 8. Becker, R., Vexler, B.: Optimal control of the convection-diffusion equation using stabilized
    finite element methods. Numer. Math. 106(3), 349–367 (2007)
 9. Benedix, O., Vexler, B.: A posteriori error estimation and adaptivity for elliptic optimal control
    problems with state constraints. Comput. Optim. Appl. 44(1), 3–25 (2009)
10. Braess, D.: Finite Elements: Theory, Fast Solvers and Applications in Solid Mechanics.
    Cambridge University Press, Cambridge (2007)
11. Brenner, S., Scott, R.: The mathematical theory of finite element methods. Springer Verlag,
    Berlin Heidelberg New York (2002)
12. Engl, H., Hanke, M., Neubauer, A.: Regularization of Inverse Problems. Kluwer, Dordrecht
    (1996)
13. Eriksson, K., Estep, D., Hansbo, P., Johnson, C.: Introduction to adaptive methods for
    differential equations. In: A. Iserles (ed.) Acta Numerica 1995, pp. 105–158. Cambridge
    University Press (1995)
14. Eriksson, K., Estep, D., Hansbo, P., Johnson, C.: Computational differential equations.
    Cambridge University Press, Cambridge (1996)
15. Fursikov, A.V.: Optimal Control of Distributed Systems: Theory and Applications, Transl.
    Math. Monogr., vol. 187. AMS, Providence (1999)
16. Griesbaum, A., Kaltenbacher, B., Vexler, B.: Efficient computation of the Tikhonov regular-
    ization parameter by goal oriented adaptive discretization. Inverse Problems 24(2) (2008)
17. Hintermüller, M., Hoppe, R., Iliash, Y., Kieweg, M.: An a posteriori error analysis of adaptive
    finite element methods for distributed elliptic control problems with control constraints.
    ESIAM Control Optim. Calc. Var. 14(3), 540–560 (2008)
18. Hoppe, R., Iliash, Y., Iyyunni, C., Sweilam, N.: A posteriori error estimates for adaptive finite
    element discretizations of boundary control problems. J. Numer. Math. 14(1), 57–82 (2006)
19. Kaltenbacher, B., Neubauer, A., Scherzer, O.: Iterative Regularization Methods for Nonlinear
    Ill-Posed Problems. de Gruyter, Berlin, New York (2008)
54                                                                                            B. Vexler


20. Kröner, A., Vexler, B.: A priori error estimates for elliptic optimal control problems with
    bilinear state equation. J. Comput. Appl. Math. 230(2), 251–284 (2009)
21. Lang, J.: Adaptive Multilevel Solution of Nonlinear Parabolic PDE Systems. Theory,
    Algorithm, and Applications, Lecture Notes in Earth Sci., vol. 16. Springer-Verlag, Berlin
    (1999)
22. Li, R., Liu, W., Ma, H., Tang, T.: Adaptive finite element approximation for distributed elliptic
    optimal control problems. SIAM J. Control Optim. 41(5), 1321–1349 (2002)
23. Lions, J.L.: Optimal Control of Systems Governed by Partial Differential Equations,
    Grundlehren Math. Wiss., vol. 170. Springer-Verlag, Berlin (1971)
24. Liu, W., Yan, N.: A posteriori error estimates for distributed convex optimal control problems.
    Adv. Comput. Math 15(1–4), 285–309 (2001)
25. Meidner, D.: Adaptive space-time finite element methods for optimization problems governed
    by nonlinear parabolic systems. PhD Thesis, Ruprecht-Karls-Universität Heidelberg (2008)
26. Meidner, D., Vexler, B.: Adaptive space-time finite element methods for parabolic optimization
    problems. SIAM J. Control Optim. 46(1), 116–142 (2007)
27. Rannacher, R., Vexler, B.: A priori error estimates for the finite element discretization of elliptic
    parameter identification problems with pointwise measurements. SIAM J. Control Optim.
    44(5), 1844–1863 (2005)
28. Schmich, M., Vexler, B.: Adaptivity with dynamic meshes for space-time finite element
    discretizations of parabolic equations. SIAM J. Sci. Comput. 30(1), 369–393 (2008)
29. Thomée, V.: Galerkin finite element methods for parabolic problems. Springer, Berlin (2006)
30. Tröltzsch, F.: Optimale Steuerung partieller Differentialgleichungen: Theorie, Verfahren und
    Anwendungen. Friedr. Vieweg & Sohn Verlag, Wiesbaden (2010)
31. Verfürth, R.: A Review of A Posteriori Error Estimation and Adaptive Mesh-Refinement
    Techniques. Wiley/Teubner, New York-Stuttgart (1996)
32. Vexler, B.: Adaptive finite elements for parameter identification problems. PhD Thesis, Institut
    für Angewandte Mathematik, Universität Heidelberg (2004)
33. Vexler, B., Wollner, W.: Adaptive finite elements for elliptic optimization problems with control
    constraints. SIAM J. Control Optim. 47(1), 509–534 (2008)
Gauss–Newton Methods for Robust Parameter
Estimation

Tanja Binder and Ekaterina Kostina




Abstract In this paper we treat robust parameter estimation procedures for prob-
lems constrained by differential equations. Our focus is on the l1 norm estimator
and Huber’s M -estimator. Both of the estimators are briefly characterized and
the corresponding optimality conditions are given. We describe the solution of
the resulting minimization problems using the Gauss–Newton method and present
local convergence results for both nonlinear constrained l1 norm and Huber
optimization. An approach for the efficient solution of the linearized problems of
the Gauss–Newton iterations is also sketched as well as globalization strategies
using line search methods. Two numerical examples are exercised to demonstrate
the superiority of the two presented robust estimators over standard least squares
estimation in case of outliers in the measurement data.


1 Introduction

All parameter estimation procedures are based on assumptions on the statistical
distribution of the underlying data. For instance, least squares (LS) estimation was
developed by Gauss [21] for normally distributed measurements. This procedure
has been widely used since then, although it has been known from the end of the
nineteenth century that even samples that consist of “good” measurements only
are only approximately normal but tend to be rather longer-tailed (e.g. Hampel
[23]). Already in 1852 and 1863, Peirce [39] and Chauvenet [16], respectively,
independently developed rejection procedures for outlying measurements. Today
it is commonly agreed that a correction of the data in advance of the parameter



T. Binder  E. Kostina ()
Department of Mathematics and Computer Science, University of Marburg,
Hans-Meerwein-Strasse, 35032 Marburg, Germany
e-mail: binder@mathematik.uni-marburg.de; kostina@mathematik.uni-marburg.de

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions         55
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 3,
© Springer-Verlag Berlin Heidelberg 2013
56                                                                         T. Binder and E. Kostina


estimation is not the way to proceed. Huber and Ronchetti [27] state two major
difficulties (amongst others) with this approach: (a) outliers have to be determined
correctly or the situation will even get worse (usually there will be both false
rejections and false retentions), and (b) outliers may obscure each other so that they
cannot be detected.
   But nevertheless outliers in the data need to be treated efficiently. In any
modeling process the implicit assumption is made that small errors of the model
will cause only minor errors in the conclusions. Furthermore, all models make
basic assumptions on the underlying situation, like randomness and independence
of measurement errors and their statistical distribution. Neither of these assumptions
need to be justified which poses a major problem as many common procedures are
very sensitive to seemingly marginal deviations from the assumptions. A remedy
for this problem are so-called “robust” methods. We use robust here in the
sense of Huber and Ronchetti [27], meaning insensitivity to small deviations from
the assumptions. Particularly we will be concerned with so-called distributional
robustness, i.e. deviations from the assumed underlying distribution.
   Data with some outliers generally follow a distribution which is longer-tailed
than the normal distribution, i.e. there are more errors with a large absolute value
than should be expected. Sensitivity to this longtailedness is typical for classical
statistical methods, including least squares parameter estimation. One single outlier
can completely spoil a least squares analysis if it is only located sufficiently far away
from the rest of the data. Thus robust procedures have to be designed to formally
spot these outliers and reduce their influence.




2 Robust Parameter Estimation Problem

The parameter estimation problem can be described as follows. Assume that we
have a mathematical model of some real world process which is described by
a system of differential equations and depends on a finite number of unknown
parameters. Assume further that at times tj ; j D 1; : : : ; N , we have given
measurements SNij ; i D 1; : : : ; K; j D 1; : : : ; N , of observation functions Sij
depending on states u of the system and parameters q which are to be estimated and
that these measurements are subject to measurement errors "ij ,

           SNij D Sij .tj ; q true ; utrue / C "ij ; i D 1; : : : ; K; j D 1; : : : ; N;

where true denotes the “true” values of the states and parameters.
   The determination of the unknown parameters is commonly approached by
solving an optimization problem in which a special functional is minimized under
constraints that describe the specifics of the model. The known data are output sig-
nals from some output device and for the optimization functional a suitable norm of
the deviation of the model response from these data is used. The choice which norm
Gauss–Newton Methods for Robust Parameter Estimation                                   57


is appropriate for a given problem should be based on the statistical properties of
the measurement errors. A formal description of an abstract (simplified) parameter
estimation problem may look as follows:

               min J.q; u/ WD .S.q; u.ti ; zi //  SNi ; i D 1; : : : ; M /;         (1)
                                               
                                  @u @u @2 u
                s.t. F t; z; q; u; ; ; 2 D 0; t 2 T; z 2 ZI
                                  @t @z @z
                     some initial and boundary conditions,

where t 2 T  R is time, z 2 Z  Rd are coordinate variables of a d -dimensional
space, T and Z bounded, the state variables u D u.t; z/ are determined in an
appropriate space V , q are unknown parameters in an appropriate space Q, F is
a vector function, S.q; u/ is an observation operator that maps the state variable u
to the appropriate space of measurements, SNi , i D 1; : : : ; M; is a given set of output
measurements. How to choose an appropriate functional .  / is discussed later.
    There are several well-established numerical methods for the solution of param-
eter estimation problems governed by systems of differential-algebraic equations.
Their common basis is the so-called “all-at-once” approach, see e.g. Ascher [2],
Bock [9,10], Cervantes and Biegler [15], and Schulz [42]. This approach follows the
principle of discretizing the dynamic model including possible boundary conditions
as a boundary value problem and incorporating the resulting discretized model as a
nonlinear constraint in the optimization problem. Possible discretization strategies
are finite differences, collocation, see e.g. Ascher [2], Schulz [42], and Biegler [15],
or multiple shooting methods, see e.g. Bock [9] and Bulirsch [14].
    The discretization of the dynamic model in (1) yields a finite dimensional,
large-scale, nonlinear constrained approximation problem which can be formally
written as

                            min .F1 .x//; s.t. F2 .x/ D 0:                           (2)
                           x2Rnx


Note that the equality conditions F2 .x/ D 0 include the discretized dynamic model.
We assume that the functions Fi W D  Rnx ! Rmi ; i D 1; 2; are twice continuously
differentiable. The vector x 2 Rnx combines the parameters and all variables
resulting from discretization of the model dynamics.
   The standard
          Pm choice       of the function .  / is the least squares functional: .s/ D
ksk22 D      i D1 si ; s 2 R . In contrast to standard least squares optimization
                   2           m

problems, we consider robust objective functions which allow to get parameter
estimates that are less sensitive to outliers in the measurement data. In this paper,
we restrict our further considerations to the cases where the objective function is the
l1 norm,
                                                  X
                                                  m
                                .s/ D ksk1 D            jsi j;                       (3)
                                                  i D1
58                                                                               T. Binder and E. Kostina


or Huber’s function,
                                                          (
                     X
                     m                                        1 2
                                                                                  jsj  ;
            .s/ D           .si /    with    .s/ D       2s ;                                   (4)
                     i D1                                      jsj  12  2 ;    jsj > ;

for a prescribed threshold  . For other objective functions that also yield robust
parameter estimates, i.e. they are insensitive to outliers in the data and other
deviations from the normal distribution, we refer to Andrews et al. [1], Beaton and
Tukey [7], Hinich and Talwar [24], Dennis and Welsch [17], and Fair [19]. All these
estimators share the common property that they can be computed using iteratively
reweighted least squares (IRLS). Holland and Welsch [25] give a comparison of
their features and performance.



2.1 The Least Absolute Deviations Estimator

Least absolute deviations (LAD) or minimum l1 norm estimation, which we will
use synonymously, is also known under a variety of other names including least
absolute residuals, least lines, or minimum sum of absolute errors, as it minimizes
the l1 norm of the residual vector. Historically, this estimator dates back to 1755
when Boscovich investigated the figure of the earth from geodatic measurements in
joint work with Maire (see Scales and Gersztenkorn [41]). Laplace [35] also used
the methods developed by Boscovich and advanced the ideas on a more rigorous
statistical basis. Thus LAD estimation dates back even longer than least squares
estimation which was first used by Gauss [21] and Legendre [36] in the first decade
of the nineteenth century. A brief review of the properties of the estimator as well
as a bibliography with relevant literature until 1977 is given by Gentle [22].
    A very simple example as given by Scales and Gersztenkorn [41] might serve to
demonstrate the effect of robustness. Assume that we have m observations i ; i D
1; : : : ; m, associated with a single parameter p. Then the least squares estimate is
computed as the root of the first derivative with respect to p of the sum of the
squared residuals,
                                    d X
                                        m
                                           jp  i j2 D 0:
                                   dp i D1
                                            P
The solution of this equation is p D m1 m      i D1 i and thus the mean of the observa-
tions. The minimum l1 norm estimate, on the other hand, is given as the solution
of
                                   Xm
                                       sgn.p  i / D 0;
                                       i D1

where sgn.s/ is some value between 1 and 1 for s D 0. This equation is solved
by the median of the observations. While the first suffers from outliers in the data
as the large deviations are averaged in the solution, the latter simply ignores such
Gauss–Newton Methods for Robust Parameter Estimation                                          59


“wild points” and only takes into account the “side” on which it lies from the bulk
of the data.
   If the residual components F1i .x/; i D 1; : : : ; m1 , follow a Laplace distribution
with zero mean and variances 2i2 , i.e. if their probability density is given by
                                                             
                                        1           jF1i .x/j
                       f .F1i .x// D        exp                ;
                                      2i              i
this estimator yields a maximum likelihood estimate of the unknown parameters
(see Rice and White [40]).
    Now let us have a closer look at the nonlinear l1 optimization problem. The
objective function in this problem is not smoothly differentiable. As this is a
necessary requirement for most standard optimization procedures for nonlinear
problems, we cannot apply them directly. Fortunately, the problem can be rewritten
in form of a nonlinear optimization problem with a linear objective function. In order
to eliminate the non-differentiability from the objective function, we introduce two
new variables w; u 2 Rm1 such that F1 .x/ D uw and u; w  0. The l1 optimization
problem (2), (3) can then be rewritten equivalently as

                   min           e T .u C w/;
              x2Rnx ;u;w2Rm1
                    s.t.       F1 .x/ D u  w;        u  0; w  0;                          (5)
                                 F2 .x/ D 0;        e D .1; : : : ; 1/ 2 Rm1 :
                                                      T


   For linear functions F1 .  / and F2 .  / the reformulation is a linear programming
problem and there were several algorithms developed for the linear case, e.g. by
Barrodale and Roberts [3, 4].
   The optimality conditions characterizing optimal solutions of the l1 -estimator
may be proved as a consequence of the Fritz-John optimality conditions of nonlinear
programming, see Ben-Tal [8]. First we define the set of “active” measurements at
x as IA .x/ WD fi D 1; : : : ; m1 W F1i .x/ D 0g; and say that x satisfies a constraint
qualification if the Jacobian of constraints and active measurements at x has full
row rank,
                                                           
                                                   rF1A .x/
               rank rFA .x/ D mA C m2 ; rFA .x/ D             ;                              (6)
                                                    rF2 .x/
                    rF1A .x/ WD ŒrF1 .x/i 2IA .x/ ; mA WD jIA .x/j:

Theorem 1. (Necessary conditions) Let x  be a regular solution of prob-
lem (2), (3). Then there exists a vector of Lagrange multipliers  D Œk kD1;2 ;
k 2 Rmk , k D 1; 2; such that the following conditions (the first-order necessary
optimality conditions) are true for the pair .x  ;  ):

  rF1T .x  /1 C rF2T .x  /2 D 0;                                                       (7)
  j1i j  1; i D 1; : : : ; m1 ; 1i D sgnF1i .x  /   if F1i .x  / ¤ 0; i D 1; : : : ; m1 :
60                                                                  T. Binder and E. Kostina


Further, the pair .x  ;  ) satisfies the second-order necessary optimality
conditions:
                                                                    !
                              X
                              m1                   X
                                                   m2
                                    2                 2        
         d Hd  0; H WD
            T
                                  1i r F1i .x / C    2i r F2i .x / ;   (8)
                                 i D1                      i D1


for all critical directions d defined by

      D1 .x  ;  / D fd 2 Rnx j rF1i .x  /d D 0; if j1i j < 1;
                                  1i rF1i .x  /d  0; if j1i j D 1; i 2 IA .x  /;
                                  rF2 .x  /d D 0g:

Proof of Theorem 1 is given in the appendix. The next theorem is a consequence of
Theorem 4 from Fiacco and McCormick [20].
Theorem 2. (Sufficient optimality conditions) Let .x  ;  ) satisfy the first-order
necessary optimality conditions (7) and the matrix H be positive definite for all
directions d 2 D1 .x  ;  /, d ¤ 0, that is

                      d T Hd > 0 8d 2 D1 .x  ;  /; d ¤ 0:

Then x  is a strict local minimizer of (2), (3).
Corollary 1. Let .x  ;  / satisfy the first-order necessary conditions (7) and strict
complementarity at x D x  and 1 D 1 ,

                               j1i j < 1 if i 2 IA .x/;                                 (9)

and let the Hessian H be positive definite for all d 2 Z.x  /;

           Z.x/ WD fd ¤ 0 j rF1i .x/d D 0; i 2 IA .x/; rF2 .x/d D 0g:

Then x  is a strict local minimizer of (2), (3).



2.2 Huber’s M -Estimator

Huber’s M -estimator was first proposed by Huber [26] in 1964. For getting an idea
of the intention behind it, consider an "-perturbed normal distribution,

                               F D .1  "/˚ C "H;
                                          1 Rt
where " 2 Œ0; 1/ is fixed, ˚.t/ D .2/ 2 1 exp. 12 s 2 / ds denotes the standard
normal cumulative and H is a contaminating but symmetric distribution. Let further
F denote the set of all such distributions. Huber’s M -estimator was designed as a
Gauss–Newton Methods for Robust Parameter Estimation                                                         61


maximum likelihood estimator corresponding to a least favorable distribution F0 2
F . This distribution has the density
                                                                        1
                                    f0 .t/ D .1  "/.2/ 2 exp..t//;
where .t/ D  .t/ is the Huber function as given in (4), and minimizes the Fisher
information,                         Z
                                           I.F / D               .f 0 =f /2 f dt;

among all F 2 F (see Huber [26]). The error ratio " and the tuning constant  are
related by                       Z                           
                                    .1  "/1 D                  '.t/ dt C 2'. /=;
                                                        
                                                                                1
where ' is the standard normal density '.t/ D .2/ 2 exp. 12 t 2 /.
   From the definition of Huber’s function (4) it is obvious that it behaves like the
least squares objective function at the center of the distribution, i.e. all observations
are given equal weight, while at the extremes it behaves like the l1 objective function
giving less weight to observations that are farther out on the tails. The switch from
being quadratic to being linear is located exactly at jsj D  where the least squares
part and the l1 part are linked together smoothly. Thus the Huber objective function
is once continuously differentiable if F1 .x/ is so. In this way, it compromises
between the efficiency of the least squares estimator and the resistance of the least
absolute deviations estimator which are also the extreme cases of this estimator for
 D 1 and  D 0, respectively. The hybrid nature of Huber’s M -estimator can be
seen clearly due to the following reformulation of the problem (2), (4),

                             min 12 kvk22 C  kF1 .x/  vk1 ; s.t. F2 .x/ D 0:                          (10)
                              x;v

The problems (2), (4) and (10) are equivalent in the following sense.
Theorem 3. x  is optimal in (2), (4) if and only if .x  ; v / with

                      vi D F1i .x  / if jF1i .x  /j  ;
                      vi D  sgn F1i .x  / if jF1i .x  /j > ; i D 1; : : : ; m1 ;

is optimal in (10).
Proof follows from the following equality,
   1  2
     kv k2 C  kF1 .x  /  v k1 D
   2
        X                         X                                                                    
   1                                                                 1 2
                F1i .x  /2 C                                                                       
                                                                        C  jF1i .x /   sgn F1i .x /j D
   2                               
                                                                     2
       i WjF1i .x /j                     i WjF1i .x /j>

            X                                  X                                       
   1                                                             1 2
                           F1i .x  /2 C                            C F1i .x  /   2 C
   2                                                             2
       i WjF1i .x  /j                   i WF1i .x  />
62                                                                                         T. Binder and E. Kostina

           X                                     
                             1 2          
                                 F1i .x /   D
                                                2
                             2
     i WF1i .x  /<

              X                                X                                
     1                             2                                       1 2
                             F1i .x / C                         jF1i .x /j   :
     2                                                                       2
         i WjF1i .x  /j                i WjF1i .x  /j>


   The hybrid nature of Huber’s M -estimator for the unconstrained linear case was
studied, e.g., by Mangasarian and Musicant [37]. In particular, it is shown there
that there exists a value   such that Huber’s M -estimator becomes a least squares
estimator for all values     . For a sequence f i g converging to zero, they showed
on the other hand that a subsequence fxij ; vij g that solves

                                            1
                                        min kvk22 C  kAx  b  vk1 ;
                                        x;v 2

where A is a real matrix and b a vector of corresponding dimensions, for  D  ij
depends linearly on f ij g, i.e. there exist numbers p; q such that xij D p C q ij
for f ij g ! 0, which implies that for decreasing  Huber’s M -estimator converges
linearly to a minimum l1 norm solution.
   Similarly to LAD parameter estimation using the equivalent reformulation
of (2), (4), one can derive the optimality conditions for the problem using the
optimality conditions of nonlinear programming (e.g. Ben-Tal [8]). First we say
that x satisfies a constraint qualification if the Jacobian of constraints at x has full
row rank,

                                            rank rF2 .x/ D m2 :                                                   (11)

Theorem 4. (Necessary conditions) Let x  be a regular solution of problem
(2), (4), that is it satisfies constraint qualification (11). Then there exists a vector
of Lagrange multipliers  D Œk kD1;2 ; k 2 Rmk , k D 1; 2; such that the
following conditions (the first-order necessary optimality conditions) are true for
the pair .x  ;  ):

                              rF1 .x  /T 1 C rF2 .x  /T 2 D 0;
                              (
                          F1i .x  /;         jF1i .x  /j  ;                                                   (12)
                   1i D                                        i D 1; : : : ; m1 :
                           sgn .F1i .x  //; jF1i .x  /j > ;

Further, the pair .x  ;  ) satisfies the second-order necessary optimality
conditions:
                               X
         d T Hd  0; H WD               r T F1i .x  /rF1i .x  / C
                                           i WjF1i .x  /j
                                                                                                          !
                                              X
                                              m1                             X
                                                                             m2
                                                     1i r 2 F1i .x  / C          2i r 2 F2i .x  /       ;
                                              i D1                           i D1
Gauss–Newton Methods for Robust Parameter Estimation                                          63


for all critical directions d defined by

                        DH .x  / D fd 2 Rnx j rF2 .x  /d D 0g:

Again the proof can be found in the appendix.
Theorem 5. (Sufficient optimality conditions) Let .x  ;  ) satisfy the first-order
necessary optimality conditions (12) and the matrix H be positive definite for all
directions d 2 DH .x  /, d ¤ 0, that is

                       d T Hd > 0           8d 2 DH .x  ;  /; d ¤ 0:

Then x  is a strict local minimizer of (2), (4).



3 The Gauss–Newton Method

The method of choice for solving parameter estimation problems is a constrained
Gauss–Newton method, see e.g. Bock et al. [11]. Starting from a given initial guess
x0 2 Rnx , we proceed iteratively by computing

                                        xkC1 D xk C Œtk  xk ;                             (13)

where    xk solves the linearized problem at x D xk ,

                              min .F1 .x/ C rF1 .x/ x/;
                                    x                                                      (14)
                               s.t. F2 .x/ C rF2 .x/ x D 0:

The scalar tk is an optional stepsize for globalization of the method. We will briefly
mention possible stepsize selection strategies in Sect. 4.



3.1 Local Convergence of Gauss–Newton for Nonlinear
    Constrained l1 Norm Optimization

Application of the necessary and sufficient optimality conditions according to
Theorems 1, 2 to problem (14) linearized at x D xk with the l1 norm in the objective
function yields that x is a solution of this problem if there are vectors 1 ; 2 such
that

  rF1 .x/T 1 C rF2 .x/T 2 D 0;
  j 1i j  1; i D 1; : : : ; m1 ;                                                          (15)
    1i D sgn.F1i .x/ C rF1i .x/             x/ if F1i .x/ C rF1i .x/ x ¤ 0; i D 1; : : : ; m1 :
64                                                                        T. Binder and E. Kostina


Hence obviously, .x  ; 1 ; 2 / is a KKT point of the nonlinear l1 norm optimization
problem if and only if .0; 1 ; 2 / is a KKT point of the corresponding linearized
problem (see Kostina [32] and Bock et al. [11]), i.e. x  is a fixed point of the Gauss–
Newton iteration, under assumptions that guarantee the existence and uniqueness of
solutions of both the nonlinear and the linearized problems.
   With the notations

            IA;li n . x/ D fi D 1; : : : ; m1 W F1i .x/ C rF1i .x/ x D 0g;
            IN;li n . x/ D fi D 1; : : : ; m1 gnIA;li n . x/;
            F1A;li n .x/ D ŒF1i .x/i 2IA;li n . x/ ;
            rF 1A;li n .x/ D ŒrF 1i .x/i 2IA;li n . x/ ;
              1A D Œ 1i .x/i 2IA;li n . x/ ;

the KKT conditions (15) can be rewritten in the form
                 0                                          10 1
                           0       rF 1A;li n .x/T rF2 .x/T      x
                 @rF 1A;li n .x/            0         0     A @ 1A
                                                                   AD
                    rF2 .x/                 0         0          2
                  0 P                             1
                                    1i rF1i .x/
                                                T
                  Bi 2IN;li n . x/                C
                 B
                  @            F1A;li n .x/
                                                  C:
                                                  A
                                 F2 .x/

   In order to guarantee existence and uniqueness of the increment x we require
the condition
                                                                    
                                                      rF 1A;li n .x/
              rankrFA;li n .x/ D nx ; rFA;li n .x/ D                   :   (16)
                                                       rF 2 .x/

On the other hand, the constraint qualification

               rankrFA;li n .x/ D mA;li n C m2 ;            mA;li n D jIA;li n j;            (17)

and strict complementarity,

                               j 1i j < 1 if i 2 IA;li n . x/;                               (18)

in the linearized problem are sufficient for existence and uniqueness of the
multipliers 1A and 2 : Combining (16) and (17) we get that the increment xk
and the multipliers 1A and 2 are unique if the matrix rFA;li n .x/ is quadratic and
invertible and (18) holds true.
Gauss–Newton Methods for Robust Parameter Estimation                                 65

                                                               
                                                         F1 .x/
   Denote the system of problem functions by F .x/ D              and the cor-
                                                         F2 .x/
                                               
                                        rF1 .x/
responding full Jacobian by rF .x/ D             . Then under the assumptions
                                        rF2 .x/
(16)–(18) the increment x at the point x can be computed by means of a (local)
generalized inverse,
                             x D rF C .x/F .x/;
where a generalized inverse rF C .x/ of the Jacobian rF .x/, that is

                       rF C .x/rF .x/rF C .x/ D rF C .x/;

is a permutation of the matrix .0; rFA;li n .x/1 / as shown by Bock et al. [11].
    A further analysis of the optimality conditions shows that a solution x  of
the nonlinear l1 norm minimization problem is associated with and identified
by an optimal “active set” containing information about zero components of the
objective function. It can be shown that, in the neighbourhood of a solution x  that
satisfies (6),

                                rankrFA .x/ D nx ;                                 (19)

and (9) at x D x  , the Gauss–Newton method eventually identifies this optimal
“active set” of the nonlinear l1 problem. Thus, the iterates of the generalized Gauss–
Newton method (13), (14), (3) are attracted by a local minimum that satisfies the
regularity assumptions and, in approaching such a minimizer x  , neither the active
sets of the problems linearized at xk will change nor the non-zero components of the
objective function will change their signs. Furthermore, these sets are the same as
the corresponding optimal sets at x  . So the full-step method (t k  1) is essentially
the standard Newton method for the system of nonlinear equations
                                                                     
                                               F1i .x/; i 2 IA .x  /
                 FA; .x/ D 0; FA; .x/ WD                              ;
                                                      F2 .x/

and as a result it has a quadratic rate of local convergence, see also Bock et al. [11]
and Kostina [32].



3.2 Local Convergence of Gauss–Newton for Nonlinear
    Constrained Huber Optimization

Application of the necessary and sufficient optimality conditions according to
Theorems 4, 5 to problem (14) linearized at x with (4) shows that the solution x
and the vectors 1 ; 2 satisfy
66                                                                              T. Binder and E. Kostina


       rF1 .x/T 1 C rF2 .x/T 2 D 0;                                                                (20)
             (
               F1i .x/ C rF1i .x/ x                        if jF1i .x/ C rF1i .x/ xj  ;
        1i D
                sgn .F1i .x/ C rF1i .x/ x/                if jF1i .x/ C rF1i .x/ xj > ;
       i D 1; : : : ; m1 :

Similarly to the l1 case, .x  ; 1 ; 2 / is a KKT point of the nonlinear Huber
optimization problem if and only if .0; 1 ; 2 / is a KKT point of the corresponding
linearized problem, i.e. also for Huber optimization x  is a fixed point of the Gauss–
Newton iteration (under assumptions that guarantee the existence and uniqueness of
solutions of both the nonlinear and the linearized problem).
   With the partitioning

     IA;li n . x/ D fi D 1; : : : ; m1 W jF1i .x/ C rF1i .x/ xj   g;
     IN;li n . x/ D fi D 1; : : : ; m1 W jF1i .x/ C rF1i .x/ xj >  g;                             (21)
     IA;li n . x/ [ IN;li n . x/ D fi D 1; : : : ; m1 g; IA;li n . x/ \ IN;li n . x/ D ;;

and the notations
                                                                 (
                                                                     1; if i 2 IA;li n . x/;
            Dli n D Dli n . x/ D diag.di i /;           di i D
                                                                     0; if i 2 IN;li n . x/;
                                          
                              F1A;li n .x/
            F1;li n .x/ D                    ;
                              F1N;li n .x/
            F1A;li n .x/ D ŒF1i i 2IA;li n . x/ ; F1N;li n .x/ D Œ 1i i 2IN;li n . x/ ;

the KKT system (20) can be rewritten as
                                                                   
          rF1 .x/T Dli n rF1 .x/ rF2 .x/T    x     rF1 .x/T F1;li n .x/
                                               D                         : (22)
                rF2 .x/             0        2          F2 .x/

   Analogously to the l1 case, we need regularity assumptions that guarantee the
existence and uniqueness of the solution
                                       of the linearized problem. Obviously,
                                    x
system (22) has a unique solution       if the assumptions (11) and
                                                 2
                                                                      
                                                         Dli n rF1 .x/
                rankrFA;li n .x/ D nx ; rFA;li n .x/ WD                  ;                         (23)
                                                          rF2 .x/
hold true. In order to guarantee the uniqueness of 1 we need the uniqueness of
the partitioning (21) which implies the strict complementarity condition in the
linearized problem:

                       jF1i .x/ C rF1i .x/ xj ¤ ; i D 1; : : : ; m1 :                             (24)
Gauss–Newton Methods for Robust Parameter Estimation                                       67


Under the assumptions (11), (23), and (24) the solution of the linearized problem
can again be computed by means of a linear operator rF C .x/,

                                 x D rF C .x/FA;li n .x/;

where rF C .x/ is explicitly given by
                                                      1            
           C           rF1 .x/T Dli n rF1 .x/ rF2 .x/T      rF1 .x/T 0
      rF .x/ D .I; 0/                                                    ;
                             rF2 .x/             0             0     I

and is a generalized inverse of rFA;li n .x/: rF C .x/rFA;li n .x/rF C .x/ D
rF C .x/:
   One can show that the Gauss–Newton method eventually identifies the “optimal
partitioning” of the residuals F1i .x/ in the neighbourhood of a solution x  that
satisfies certain assumptions:
Theorem 6. Suppose that x  with corresponding  is a solution of the problem
(2), (4) that satisfies (11),
                                                                       
                                                            D.x/rF1 .x/
                   rankrFA .x/ D nx ; rFA .x/ WD                          ;              (25)
                                                              rF2 .x/
                                                     (
                                                         1; if i 2 IA .x/;
                   D.x/ D diag.di i /;      di i D
                                                         0; if i 2 IN .x/;

and strict complementarity

                              jF1i .x/j ¤ ; i D 1; : : : ; m1 ;                         (26)

with x D x  . Then there exists a neighbourhood D of .x  ;  / such that for all
.xk ; k / 2 D the linearized Huber problem has a unique solution . xk ; k / whose
partitioning IA;li n . xk /; IN;li n . xk / is the same as the partitioning IA .xk /; IN .xk /
of the nonlinear problem (2), (4) at x D xk , which is in its turn the same as the
partitioning IA .x  /; IN .x  / of the nonlinear problem (2), (4) at x D x  :
Here the partitioning at x is defined as

               IA .x/ D fi D 1; : : : ; m1 W jF1i .x/j   g;
               IN .x/ D fi D 1; : : : ; m1 W jF1i .x/j >  g;                            (27)
               IA .x/ [ IN .x/ D fi D 1; : : : ; m1 g; IA .x/ \ IN .x/ D ;:

   In summary, the iterates of the generalized Gauss–Newton method (13), (14), (4)
are attracted by a local minimum that satisfies the regularity assumptions mentioned
above and, in approaching such a minimizer x  , the partitioning of the problems
68                                                                                    T. Binder and E. Kostina


linearized at xk will not change. Furthermore, this partitioning is the same as the
corresponding partitioning at x  . So the full-step method (t k  1) is essentially the
Gauss–Newton method for a modified least squares problem

           1      X                           X
     min                      F1i .x/2 C                   sgn.F1i .x  //F1i .x/;   s.t. F2 .x/ D 0;
           2
               i 2IA .x  /                i 2IN .x  /


and as a result it has a linear rate of local convergence.
Theorem 7 (Local Contraction Theorem for Huber Optimization). Let D be
the neighbourhood defined in Theorem 6. Assume further that the following two
Lipschitz conditions for rF and rF C hold for all x; y 2 D and all t 2 Œ0; 1,

      krF C .y/ .rFA .x C t.y  x//  rFA .x// .y  x/k
                                                         !.x/  ! < 1;
                         tky  xk2
                           
      k rF C .y/  rF C .x/ RA .x/k
                                      .x/  < 1;
                 ky  xk

where RA .x/ denotes the residuals in the linearized problem:
                                          
               R1 .x/                R1A .x/
     RA .x/ D           ; R1 .x/ D             ;
               R2 .x/               R1N .x/
     R1A .x/ D ŒF1i .x/ C rF1i .x/ xi 2IA .x/ ; R1N .x/ D Œ sgn .F1i .x//i 2IN .x/ ;
     R2 .x/ D F2 .x/ C rF2 .x/ x:

Assume further that an initial guess x0 2 D satisfies
                                                                                   
                     !jj x0 jj                                      N      jj x0 jj
                ı0 D           C               < 1;           D 0 D B x0 ;             D:
                        2                                                   1  ı0

Then the sequence of iterates fxk g of the Gauss–Newton method (13), (14), (4) is
well-defined, remains in D ; and converges to a point x  with rF C .x  /FA .x  / D 0.
Furthermore the increments satisfy the following inequality:
                                                    !
                                  k xkC1 k                   k xk k C     k xk k;
                                                          2
implying the linear convergence of the Gauss–Newton method with rate .
The proof of Theorem 7 is given in the appendix.
   As in the Gauss–Newton method for l2 constrained optimization (see Bock
[10]), the quantity ! is a measure for the nonlinearity of the problem functions
excluding the functions corresponding to “large” measurement errors. Its inverse
! 1 characterizes the region of validity of the linearized model.
Gauss–Newton Methods for Robust Parameter Estimation                               69


    The quantity is an incompatibility constant that describes the compatibility
of the problem functions and the measurement data for parameter estimation in
case that “large” measurement errors are replaced by ˙: The condition < 1
is necessary for the unknowns to be identifiable from the data. A stationary point
x  ; that is a point satisfying the necessary first-order optimality conditions, is
statistically stable if < 1 (see Bock [10]). It is interesting to note that

  k rF C .xkC1 /  rF C .xk / RA .xk /k  k rF C .xkC1 /  rF C .xk / k m1 ;

and thus in case of Huber optimization the incompatibility constant can be reduced
by reducing the parameter  .



4 Globalization of the Gauss–Newton Method

Of course we are not satisfied with an only locally convergent method. It cannot be
expected that there is always a good initial guess at hand for the unknowns. In this
section we discuss methods for stepsize selection which make the method globally
convergent from an arbitrary starting point.



4.1 Line Search Strategies

One possibility to compute the relaxation parameter tk for the iteration xkC1 D
xk C tk xk is a line search procedure. This approach chooses the stepsize tk such
that the new iterate xkC1 is in some sense “better” than the current iterate xk by
means of a merit function, i.e. T .xkC1 / < T .xk /. A common choice for a merit
function is the exact penalty function,
                                               X
                                               m2
                        T1 .x/ D .F1 .x// C           i jF2i .x/j;              (28)
                                               i D1

where the weights i have to be chosen sufficiently large.
   Under the regularity assumptions for both the original and the linearized
problems, (6), (19), and the strict complementarity (9) and (17), (16), and strict
complementarity (18) (for l1 ) or (11), (23), and (24) and (25), (26) (for Huber),
respectively, it can be shown that the increment x solving the linearized prob-
lem (14) leads to a descent direction of the nonlinear problem, i.e. the compatibility
condition
                              T1 .xk C " x/  T1 .xk /
                         lim                            < 0;
                         "!0               "
is satisfied for the exact penalty function (28). Thus the method is globally
convergent with stepsize strategies based on T1 .x/.
70                                                                      T. Binder and E. Kostina


   A drawback of this approach is that already for only mildly ill-conditioned
problems it can lead to very small stepsizes even in the region of full-step
convergence and may thus be very inefficient.
   An alternative approach is a stepsize selection based on natural level functions
as first introduced by Deuflhard [18]. Bock [10] and Bock et al. [12] introduced the
so-called “restrictive monotonicity test.” The line search based on the natural level
function
                  Tk .xk C t xk / D krF C .xk /FA .xk C t xk /k22
is conducted by means of the restrictive monotonicity test: we choose the maximal
stepsize t  1 such that
                                             
                                 tk xk k 
                                            !.t/
for a given  < 2, where !.t/ is an asymptotically correct estimate of the “curvature”
of the problem, i.e. a measure for its nonlinearity,

                      2krF C .xk / .FA .xk C t xk /  .1  t/FA .xk // k
            !.t/ D                                                       :
                                          t 2 k xk k2



4.2 Numerical Solution of the Linearized Problem

One of the decisive steps of the method which largely affects its performance is the
solution of the linearized problems (14). Since the equality constraints F2 .x/ D 0
contain the discretized boundary value problem, efficient solution methods must
take into account the structure of the constraints induced by discretization methods.
Efficient condensing procedures which exploit the block structure of the Jacobian
rF2 are described, e.g., by Bock [10] and Bock et al. [11] for multiple shooting, or
by Schulz [42] and Cervantes and Biegler [15] for collocation. After this procedure
the dimensions of variables and constraints in the linearized problems to be solved
at each iteration are significantly reduced.
   The “condensed” problem can be formally written in the form

                          min  .A1 s C c1 /; s.t. A2 s C c2 D 0;                         (29)
                           s

                                s 2 Rrs ; Ai 2 Rri rs ; i D 1; 2:

In case of the l1 cost functional, problem (29) is a linear programming problem, in
case of the Huber cost functional, this problem is a quadratic programming problem,
with a very special structure in both cases. This can be clearly seen when considering
the dual to problem (29) (case  D 0 corresponds to l1 cost functional):
                                T
                 min            y y1  c1T y1  c2T y2 ;                                   (30)
            y1 2Rr1 ;y2 2Rr2   2 1
                   s.t.        AT1 y1 C AT2 y2 D 0; jy1i j  1; i D 1; : : : ; r1 :
Gauss–Newton Methods for Robust Parameter Estimation                              71


This problem can be efficiently solved using a linear or quadratic programming
method tailored to the special structure of problem (30) using so-called “long
step” as in Kostina [31] and Kostina and Kostyukova [33] or “flipping bounds”
in Koberstein [28] methods. It is interesting to note, that, in the case of the Huber
estimator, the optimization problem (29), which can be reformulated as

                      1
               min      jjvjj22 C  jjA1 s C c1  vjj1 ; s.t. A2 s C c2 D 0;
                v;s   2

is related to problems appearing in sparse modeling of signals and images or LASSO
problems (see Osborne et al. [38]), thus one can also modify the methods developed
for these problems (see an overview article by Bruckstein et al. [13] and references
therein) to solve (29).
    A violation of the assumed regularity assumption that rank.rFA .xk // should be
equal to the number of unknowns means that the measurements judged to be “good”
do not provide enough information about the parameters. The parameters are not
identifiable from the given data. Hence, a regularization by e.g. a rank reduction is
necessary, see Bock et al. [11], or by trust region methods. Alternatively, methods
for optimum experimental design can be applied to design optimal experiments that
maximize the information gain about the parameters, see Bauer et al. [5, 6], Körkel
and Kostina [30], and Körkel [29].



5 Numerical Results

5.1 Parameter Estimation for a Chemical Reaction

As a first numerical example we consider the chemical process of the denitrogeniza-
tion of pyridine, taken from Bock [10].
   The reaction coefficients p1 ; : : : ; p11 are the unknowns of the reaction which
are to be estimated from given measurements of concentrations of the species
participating in the reaction. The process can be described mathematically by a
system of seven ordinary differential equations,

       AP D p1 A C p9 B;
       BP D p1 A  p2 B  p3 BC C p7 D  p9 B C p10 DF;
       CP D p2 B  p3 BC  2p4 C C  p6 C C p8 E C p10 DF C 2p11 EF;
       DP D p3 BC  p5 D  p7 D  p10 DF;
       EP D p4 C C C p5 D  p8 E  p11 EF;
       FP D p3 BC C p4 C C C p6 C  p10 DF  p11 EF;
       GP D p6 C C p7 D C p8 E :
72                                                                                                                                                T. Binder and E. Kostina

                                                  cyt. I-κBα                                                                                  cyt. I-κBα
                            0.4                                                                                       0.4
                           0.35                                                                                      0.35




                                                                                              concentrations [μM]
     concentrations [μM]


                            0.3                                                                                       0.3
                           0.25                                                                                      0.25
                            0.2                                                                                       0.2
                           0.15                                                                                      0.15
                            0.1                                                                                       0.1
                           0.05                                                                                      0.05
                              0                                                                                           0
                                  0       1       2                               3   4   5                                   0       1       2         3      4    5
                                                  time [min]                                                                                  time [min]
                                                      cyt. I-κBα                                                                              cyt. I-κBα
                            0.04                                                                                     0.35
                           0.038
                                                                                                                      0.3
     concentrations [μM]




                                                                                              concentrations [μM]
                           0.036
                                                                                                                     0.25
                           0.034
                           0.032                                                                                      0.2
                            0.03
                                                                                                                     0.15
                           0.028
                                                                                                                      0.1
                           0.026
                           0.024                                                                                     0.05
                                   0      1       2                               3   4   5                                   0       1       2         3      4    5
                                                      time [min]                                                                              time [min]
                                                      cyt. I-κBα                                                                              cyt. I-κBα
                           0.0045                                                                                    0.8
                            0.004                                                                                    0.7
                                                                                               concentrations [μM]
     concentrations [μM]




                           0.0035                                                                                    0.6
                            0.003                                                                                    0.5
                           0.0025                                                                                    0.4
                            0.002                                                                                    0.3
                           0.0015                                                                                    0.2
                            0.001                                                                                    0.1
                           0.0005                                                                                      0
                                      0       1   2                               3   4   5                                0          1       2         3      4    5
                                                         time [min]                                                                               time [min]
                                                                                          cyt. I-κBα
                                                                            0.6

                                                                            0.5
                                                      concentrations [μM]




                                                                            0.4

                                                                            0.3

                                                                            0.2

                                                                            0.1

                                                                             0
                                                                                  0   1   2                           3           4       5
                                                                                          time [min]


Fig. 1 Measurement data for the chemical reaction

   The initial state is .1:0; 0:0; 0:0; 0:0; 0:0; 0:0; 0:0/T . Measurements were taken in
the time interval Œ0:0; 5:5 at points ti D 0:5i; i D 0; : : : ; 11.
   As measurement data in numerical experiments we chose simulations using
“true” parameter values which were corrupted by four outliers. Figure 1 shows the
measurements points with the outliers indicated by filled dots.
Gauss–Newton Methods for Robust Parameter Estimation                                        73


Table 1 Estimates of the parameters for a chemical reaction and number of iterations
       p1    p2       p3      p4     p5      p6      p7      p8    p9        p10     p11   Iter
“true” 1.810 0.894 29.400 9.210 0.058 2.430 0.0644 5.550 0.0201 0.577 2.150
l2     1.812 0.850 29.597 4.467 0.059 2.503 0.112 1.990 0.0203 0.497 8.468                 15
l1     1.810 0.894 29.399 9.209 0.058 2.429 0.0644 5.550 0.0201 0.577 2.149                18
Huber 1.810 0.894 29.393 9.172 0.058 2.430 0.0647 5.551 0.0201 0.576 2.184                 13



   The results of the parameter estimation using l2 , l1 , and Huber estimators are
given in Table 1 and Fig. 2.
   Obviously, l1 and Huber estimation do not differ much while the least squares
approximation yields quite different results.



5.2 Parameter Estimation for the NF-B Pathway

In this subsection we consider the NF- B pathway, which is a benchmark problem
from systems biology, cf. Waldherr [43]. We take the equations of the reduced model
from Waldherr’s thesis, where the involved species are cytosolic I- B˛ (x1 ), I- B˛
mRNA (x2 ), total nuclear I- B˛ (x3 ), and total nuclear NF- B (x4 ),
                                  ˛.Nt ot  x4 /x1               kI;out KN x3
               xP 1 D kt l x2                      kI;i n x1 C              ;
                                    KI C x1                       KN C x4
               xP 2 D kt x42  m x2 ;
                                    kI;out KN x3 kNI;out x3 x4
               xP 3 D kI;i n x1                              ;
                                     KN C x4      kN C x4
                        kN;i n KI .Nt ot  x4 / KNI;out x3 x4
               xP 4 D                                        ;
                               KI C x1           KN C x4
                                       0:03Ck
where KI D 0:03C˛ 30    and KN D         30
                                           NI;out
                                                  . Waldherr [43] claims that the behavior
of this model is essentially similar to that of the original model by Krishna et al. [34].
We also take Waldherr’s parameter values that lead to damped oscillations in the
concentrations of the four species as the “true” values for our simulations. The initial
state is .0:0; 0:0; 0:0; 1:0/. Measurements were taken in the time interval Œ0:0; 300:0
at points ti D 10:0i; i D 0; 30. As measurement data in numerical experiments
we chose simulations using “true” parameter values without artificial measurement
errors but only corrupted by few outliers introduced to the measurements of total
nuclear NF- B. Figure 3 shows the measurements points with the outliers indicated
by filled dots.
    The results of the parameter estimation are presented in Table 2 and Fig. 4.
    Again, l1 and Huber estimators have shown to be more reliable compared to the l2
estimator in case of data with outliers, although the results of Huber’s M -estimator
might be still improved by choosing a smaller tuning constant.
74                                                                                                       T. Binder and E. Kostina

        1                                                            0.45
      0.9                                            data                                                           data
                                                        l1               0.4                                           l1
      0.8                                               l2           0.35                                              l2
                                                    Huber                                                          Huber
      0.7
                                                                         0.3
      0.6
                                                                     0.25
      0.5
                                                                         0.2
      0.4
                                                                     0.15
      0.3
      0.2                                                                0.1
      0.1                                                            0.05
        0                                                                  0
            0       1       2       3           4       5        6             0         1       2       3     4       5    6

      0.04                                                           0.35
     0.035                                                               0.3
      0.03
                                                                     0.25
     0.025
                                                                         0.2
      0.02
                                                                     0.15
     0.015
                                                     data                0.1                                        data
      0.01
                                                        l1                                                             l1
                                                        l2           0.05                                              l2
     0.005
                                                    Huber                                                          Huber
         0                                                                 0
                0   1       2       3           4       5        6             0         1       2       3     4       5    6

     0.0045                                                              0.8
                                                     data
      0.004                                             l1               0.7
                                                        l2
     0.0035                                         Huber                                                           data
                                                                         0.6                                           l1
      0.003                                                                                                            l2
                                                                         0.5                                       Huber
     0.0025
                                                                         0.4
      0.002
                                                                         0.3
     0.0015
      0.001                                                              0.2

     0.0005                                                              0.1
            0                                                             0
                0       1       2   3           4       5        6             0        1        2       3     4       5    6

                                    0.7

                                    0.6

                                    0.5

                                    0.4

                                    0.3

                                    0.2
                                                                                        data
                                                                                           l1
                                    0.1                                                    l2
                                                                                       Huber
                                        0
                                            0       1        2       3             4         5       6


Fig. 2 Trajectories corresponding to the estimated parameters for the chemical reaction
Gauss–Newton Methods for Robust Parameter Estimation                                                                                                                  75


                                                   cyt. I-κBα                                                                 I-κBα mRNA
                               3                                                                             1.6

                             2.5                                                                             1.4
       concentrations [μM]




                                                                                       concentrations [μM]
                                                                                                             1.2
                               2
                                                                                                               1
                             1.5                                                                             0.8

                               1                                                                             0.6
                                                                                                             0.4
                             0.5
                                                                                                             0.2
                               00                                                                              0
                                        50   100      150       200      250    300                                0   50   100      150       200      250    300
                                                   time [min]                                                                     time [min]

                                               tot. nuc. I-κBα                                                                      nuc. NF-κB
                             0.07                                                                             1
                             0.06
       concentrations [μM]




                                                                                                             0.8


                                                                                       concentrations [μM]
                             0.05
                             0.04                                                                            0.6

                             0.03
                                                                                                             0.4
                             0.02
                                                                                                             0.2
                             0.01
                                                                                                               0
                                00      50   100      150       200       250   300                             0      50   100     150        200      250    300
                                                   time [min]                                                                     time [min]


Fig. 3 Measurement data for the NK- B pathway


                                                   cyt. I-κBα                                                                     cyt. I-κBα
                             3.5                                                                             1.8
                               3                                                                             1.6
       concentrations [μM]




                                                                                      concentrations [μM]




                                                                                                             1.4
                             2.5
                                                                                                             1.2
                               2                                                                              1
                             1.5                                                                             0.8
                                                                       data                                  0.6                                       data
                               1                                          l1                                                                              l1
                                                                          l2                                 0.4                                          l2
                             0.5                                                                             0.2
                                                                      Huber                                                                           Huber
                               0                                                                              0
                                    0   50   100      150       200       250   300                                0   50   100      150        200      250    300
                                                   time [min]                                                                     time [min]
                                                   cyt. I-κBα                                                                     cyt. I-κBα
                             0.07                                                                            1.2
                                                                       data                                                                            data
                             0.06                                         l1                                  1                                           l1
  concentrations [μM]




                                                                                      concentrations [μM]




                                                                          l2                                                                              l2
                             0.05                                                                            0.8
                                                                      Huber                                                                           Huber
                             0.04
                                                                                                             0.6
                             0.03
                                                                                                             0.4
                             0.02
                                                                                                             0.2
                             0.01

                               0                                                                              0
                                    0   50   100      150       200      250    300                                0   50   100      150       200       250    300
                                                   time [min]                                                                     time [min]


Fig. 4 Trajectories corresponding to the estimated parameters for the NK- B pathway
76                                                                         T. Binder and E. Kostina


Table 2 Estimates of the parameters for KF- B pathway and number of iterations (three outliers
in x4 )
        kN;i n  kI;i n    kI;out     kNI;out kt      ktl     ˛         m        Ntot     Iter
“true” 5.400 0.018          0.012 0.830      0.100 0.200 0.525 0.017 1.000
l1      5.400 0.018         0.013 0.830      0.100 0.200 0.525 0.017 1.000 6
l2      6.248 0.020 0:525 0.981             0.090 0.201 0.446 0.013 1.039 11
Huber 5.406 0.018           0.007 0.831      0.100 0.200 0.524 0.017 1.000 9



6 Conclusion

We showed that the l1 norm optimization problem and the Huber optimization
problem for robust parameter estimation share a common structure. Based on
this joint problem formulation, we derived a constrained Gauss–Newton method
for the solution of these problems under the assumption that exact derivatives of
the problem functions are available. Convergence properties of these methods are
analyzed. Further we summarized two possibilities for globalization strategies.

Acknowledgements This research was supported by the German Federal Ministry for Education
and Research (BMBF) through the Programme “Mathematics for Innovations in Industry and
Public Services”, as well as by the LOEWE Center for Synthetic Microbiology (SYNMIKRO).




Appendix

Proof of Theorem 1

We will show that the optimality conditions (7) and (8) result from the optimality
conditions derived by Ben-Tal [8] for the nonlinear optimization problem in the form

     min '0 .x/;                                                                             (A.1)
       x

           'i .x/  0; i 2 I D f1; : : : ; n I g;        i .x/ D 0; i 2 E D f1; : : : ; n E g;


which read
• Necessary (second-order) conditions for local minimum: For every d 2 D.x  /,
  there exist nonnegative y 2 RnI C1 ; 2 RnE ; .y; / ¤ 0; such that

                                  rL.x  ; y; / D 0;                                         (A.2)
                                                    
                                  d r L.x ; y; /d  0;
                                    T   2
                                                                                             (A.3)
                                            
                                  yi 'i .x / D 0; i 2 I ;                                    (A.4)
                                                
                                  yi r'i .x         /d D 0; i 2 I 0 :                       (A.5)
Gauss–Newton Methods for Robust Parameter Estimation                                                     77


The following functions and sets are used in the formulations:
(i) The Lagrangian function
                                                    X                    X
                     L.x; y; / D y0 '0 .x/ C               yi 'i .x/ C           i   i .x/
                                                    i2 I                 i2 E


(ii) The set of critical directions at x

           D.x/ D fd 2 Rnx W r'i .x/d  0; i 2 I 0 I r                   i .x/d D 0; i 2 E g (A.6)


     where

                     I 0 D f0g [ I  ; I  D I  .x/ D fi 2 I W 'i .x/ D 0g

Let us note that the optimality conditions of Ben-Tal are formulated without
constraint qualification, but the multipliers depend on critical directions.
   In what follows we apply the conditions of Ben-Tal to problem (5). The Lagrange
function for problem (5) takes the form

                                 L.x; u; w; y0 ; y1 ; y2 ;    1;   2/ D                               (A.7)
            y0 e T .u C w/  y1T u  y2T w C         1 .F1 .x/  u C w/ C
                                                     T                                T
                                                                                      2 F2 .x/


with Lagrange multipliers y0 2 R, y1 , y2 2 Rm1 , 1 2 Rm1 ,                          2 2 R
                                                                                             m2
                                                                                                  . With the
Lagrangian (A.7) the stationarity conditions (A.2) become

  rx L.x  ; u ; w ; y0 ; y1 ; y2 ;   
                                           1;
                                                        T              T       
                                                2 / D . 1 / rF1 .x / C . 2 / rF2 .x / D 0

  ru L.x  ; u ; w ; y0 ; y1 ; y2 ;   
                                           1;
                                                       T      T      T
                                                2 / D y0 e  .y1 /  . 1 / D 0

                                                     ) y1 D y0 e             
                                                                                1 0

  rw L.x  ; u ; w ; y0 ; y1 ; y2 ;   
                                           1;
                                                       T      T      T
                                                2 / D y0 e  .y2 / C . 1 / D 0

                                                     ) y2 D y0 e C            
                                                                                1  0:


From the last two relations we get y0 e  1  y0 e. Furthermore, from
stationarity it follows that if y0 D 0 then 1 D 0; y1 D 0; y2 D 0 and
. 2 /T rF2 .x  / D 0: Hence, under regularity assumption (6) 2 D 0; which
contradicts the assertion that the Lagrange multipliers are not all identical zero.
Consequently, y0 ¤ 0 and we may set y0 D 1:
   Now, let us have a look at the complementarity conditions (A.4), which result in
the following relations for the problem (5):
(a) If ui > 0 (in this case F1i .x  / > 0; wi D 0) then y1i
                                                            
                                                               D 0; and the stationarity
                                   
    conditions imply 1i D 1; y2i D 2:
78                                                                   T. Binder and E. Kostina


(b) If wi > 0 (in this case F1i .x  / < 0; ui D 0) then y2i
                                                            
                                                               D 0; and the stationarity
                                     
    conditions imply 1i D 1; y1i D 2:
Taking into account the structure of constraint in (5), it is easy to verify that the
stationarity and complementarity conditions for the problem (5) can be re-written
as follows:

                 . 1 /T rF1 .x  / C . 2 /T rF2 .x  / D 0;
                          
                 1      1i  1; i D 1; : : : ; m1 ;                                  (A.8)
                                                 
                  1i D   sgn .F1i .x //; F1i .x / ¤ 0; i D 1; : : : ; m1 ;

and conditions (7) follow immediately if we set 1 D 1 , 2 D 2 . Under (6)
the multipliers 1 , 2 that satisfy (A.8) are unique and hence are the same for all
critical directions.
   Now, let us analyze the conditions (A.5) and the set of critical directions (A.6).
The set of critical directions (A.6) for problem (5) can be expressed as

      D.x; w; u/ D f x 2 Rn ; u 2 Rm1 ; w 2 Rm1 ; W
                      eT . u C      w/  0;
                        wi  0; if wi D 0I ui  0; if ui D 0; i D 1; : : : ; m1 ;
                     rF1 .x/ x           uC    w D 0; rF2 .x/ x D 0g

and the conditions (A.5) take the form

                   eT . u C      w/ D 0;
                             wi y2i D 0; if wi D 0;
                              ui y1i D 0; if ui D 0; i D 1; : : : ; m1 :

Consider d 2 D1 .x  ;  / with 1 D 1 , 2 D 2 , set x D d and make
a case-by-case analysis in order to describe the rules for choice of ui , wi ,
i D 1; : : : ; m1 :
 (1) F1i .x  / > 0: In this case we have ui D F1i .x  /, wi D 0;               
                                                                           1i D 1; y1i D 0;
      
     y2i  D 2. Set

                                 ui D rF1i .x  /d;     wi D 0:

 (2) F1i .x  / < 0: In this case we have ui D 0; wi D F1i .x  /,            
                                                                                 1i   D 1;
                
     y1i D 2; y2i  D 0. Set

                                ui D 0;     wi D rF1i .x  /d:
Gauss–Newton Methods for Robust Parameter Estimation                               79


 (3) F1i .x  / D 0: In this case we have ui D 0; wi D 0. Consider subcases
(3a) 1i D 1: In this case y1i        
                                 D 0; y2i D 2, rF1i .x  /d  0. Set

                             ui D rF1i .x  /d  0;           wi D 0:

                                                   
(3b)   1i D 1: In this case y1i D 2; y2i D 0, rF1i .x /d  0. Set


                            ui D 0;     wi D rF1i .x  /d  0:

(3c) j 1i j < 1: In this case y1i
                                        
                                   > 0; y2i > 0, rF1i .x  /d D 0. Set

                                      ui D 0;     wi D 0:

Obviously, for this choice of    x,   u;    w we get
                               
                wi y2i D    ui y1i D 0; i D 1; : : : ; m1 ;
                wi  0; if wi D 0I ui  0; if ui D 0; i D 1; : : : ; m1 ;
              rF1 .x  / x      uC     w D 0; rF2 .x  / x D 0:

Moreover,

                                eT . u C        w/ D 0:

Indeed, multiplying the stationarity conditions by . x T ; uT ; wT /T we get:

                  . 1 /T rF1 .x  / x C . 2 /T rF2 .x  / x D 0;
                             e T u  .y1 /T u  . 1 /T u D 0;
                            e T w  .y2 /T w C . 1 /T w D 0:

Since rF2 .x  / x D 0; we get . 1 /T rF1 .x  / x D . 1 /T . u            w/ D 0:
Hence,

       0 D e T u  .y1 /T u  . 1 /T u C e T w  .y2 /T w C . 1 /T w
        D eT . u C      w/  .y1 /T u  .y2 /T w D e T . u C          w/:

Thus, the constructed direction . x T ; uT ; wT /T is a critical direction in the
sense of Ben-Tal, satisfying (A.5), and (8) is a consequence of (A.3). This finishes
the proof.
80                                                                            T. Binder and E. Kostina


Proof of Theorem 4

Similarly to the proof of Theorem 1, we will show that the optimality conditions (12)
result from the optimality conditions of Ben-Tal [8].
   The Lagrange function for problem (10) takes the form

                         L.x; v; u; w; y0 ; y1 ; y2 ; 1 ; 2 / D                                   (A.9)
      1                  
       2 kvk2 C e .u C w/  y1 u  y2 w C 1 .F1 .x/  v  u C w/ C
            2     T             T       T           T                                          T
 y0                                                                                            2 F2 .x/


with Lagrange multipliers y0 2 R, y1 , y2 2 Rm1 , 1 2 Rm1 ,                      2 2 R
                                                                                         m2
                                                                                              . With the
Lagrangian (A.9) the stationarity conditions (A.2) become

rx L.x  ; v ; u ; w ; y0 ; y1 ; y2 ;   
                                              1;
                                                           T              T       
                                                   2 / D . 1 / rF1 .x / C . 2 / rF2 .x / D 0

rv L.x  ; v ; u ; w ; y0 ; y1 ; y2 ;   
                                              1;
                                                           T       T
                                                   2 / D y0 .v /  . 1 / D 0
                                                                    
                                                           )   1 D y0 v

ru L.x  ; v ; u ; w ; y0 ; y1 ; y2 ;   
                                              1;
                                                                  T      T
                                                   2 / D y0 e  .y1 /  . 1 / D 0
                                                              T


                                                           ) y1 D y0 e      
                                                                                1  0

rw L.x  ; v ; u ; w ; y0 ; y1 ; y2 ;   
                                              1;
                                                                  T      T
                                                   2 / D y0 e  .y2 / C . 1 / D 0
                                                              T


                                                           ) y2 D y0 e C     
                                                                                1 0


From the last two relations we get y0 e  1  y0 e. Furthermore, from
stationarity it follows that if y0 D 0 then 1 D 0; y1 D 0; y2 D 0 and
. 2 /T rF2 .x  / D 0: Hence, under the regularity assumption (11) 2 D 0; which
contradicts the assertion that the Lagrange multipliers are not all identical zero.
Thus, as in the l1 case y0 ¤ 0 and we may set y0 D 1:
   The complementarity conditions (A.4) for problem (10) take the form:
(a) If ui > 0 (in this case F1i .x  /  vi > 0; wi D 0) then y1i
                                                                  
                                                                     D 0; and the
                                                     
    stationarity conditions imply 1i D ; y2i D 2; vi D :
(b) If wi > 0 (in this case F1i .x  /  vi < 0; ui D 0) then y2i
                                                                  
                                                                     D 0; and the
                                                       
    stationarity conditions imply 1i D ; y1i D 2; vi D :
Taking into account the structure of constraints in (10), it is easy to verify that the
stationarity and complementarity conditions for the problem (10) can be re-written
as follows:

                . 1 /T rF1 .x  / C . 2 /T rF2 .x  / D 0;
                             
                          1i  ; i D 1; : : : ; m1 ;                                         (A.10)
                         (
                            F1i .x  /;            jF1i .x  /j  ;
                  1i D                                                  i D 1; : : : ; m1 ;
                              sgn .F1i .x  //; jF1i .x  /j > ;
Gauss–Newton Methods for Robust Parameter Estimation                                 81


and conditions (12) follow immediately if we set 1 D 1 , 2 D 2 . Let us note
that 1 D 1 is defined uniquely. Furthermore, the constraint qualification (11)
guarantees that the multipliers 2 that satisfy (A.10) are also unique and hence 1 ,
2 do not depend on critical directions.
    Now, let us analyze the conditions (A.5) and the set of critical directions (A.6).
The set of critical directions (A.6) for the problem (10) can be expressed as

     D.x; v; w; u/ D f x 2 Rn ; v 2 Rm1 ; u 2 Rm1 ; w 2 Rm1 ; W
                       .v /T v C e T . u C        w/  0;
                        wi  0; if wi D 0I ui  0; if ui D 0; i D 1; : : : ; m1 ;
                      rF1 .x/ x         v     uC     w D 0; rF2 .x/ x D 0g

and the conditions (A.5) take the form

            .v /T v C e T . u C        w/ D 0;
                                          
                                      wi y2i D 0; if wi D 0;
                                          
                                      ui y1i D 0; if ui D 0; i D 1; : : : ; m1 :

Consider d 2 DH .x  ;  / with 1 D 1 , 2 D 2 , set x D d and make a
case-by-case analysis in order to describe the rules for choice of vi , ui , wi ,
i D 1; : : : ; m1 :
 (1) F1i .x  / > : In this case we have ui D F1i .x  /  ; wi D 0; vi D ;
                        
      1i D ; y1i D 0; y2i D 2 > 0. Set


                           vi D 0;     ui D rF1i .x  /d;     wi D 0:

 (2) F1i .x  / < : In this case we have ui D 0; wi D   F1i .x  /, vi D ;
                                
      1i D ; y1i D 2 > 0; y2i D 0. Set


                           vi D 0;    ui D 0;     wi D rF1i .x  /d:

 (3) jF1i .x  /j  : In this case we have ui D 0; wi D 0, vi D F1i .x  /: Consider
     subcases:
(3a) jF1i .x  /j < : In this case we have j 1i j < ; y1i
                                                                  
                                                             > 0; y2i > 0: Set

                           vi D rF1i .x  /d;      ui D 0;    wi D 0:

(3b) F1i .x  / D : In this case we have                     
                                              1i D ; y1i D 0; y2i D 2 > 0: Set


                 vi D rF1i .x  /d;     ui D 0;     wi D 0; if rF1i .x  /d  0I
                 vi D 0;     ui D rF1i .x  /d;     wi D 0; if rF1i .x  /d > 0I
82                                                                            T. Binder and E. Kostina


(3c) F1i .x  / D : In this case we have                                 
                                                     1i D ; y1i D 2 > 0; y2i D 0: Set


               vi D rF1i .x  /d;          ui D 0;       wi D 0; if rF1i .x  /d  0I
               vi D 0;        ui D 0;      wi D rF1i .x  /d; if rF1i .x  /d < 0I

Obviously, for this choice of       x,    v;    u;    w we get
                                 
               wi y2i D       ui y1i D 0; i D 1; : : : ; m1 ;
               wi  0; if wi D 0I ui  0; if ui D 0; i D 1; : : : ; m1 ;
             rF1 .x  / x          v      uC       w D 0; rF2 .x  / x D 0:

Moreover,

                            .v /T v C e T . u C            w/ D 0:

Indeed, multiplying the stationarity conditions by . x T ; vT ; uT ; wT /T we get:

                 . 1 /T rF1 .x  / x C . 2 /T rF2 .x  / x D 0;
                                            .v /T v  . 1 /T v D 0;
                              e T u  .y1 /T u  . 1 /T u D 0;
                             e T w  .y2 /T w C . 1 /T w D 0:

Since rF2 .x  / x D 0; we get . 1 /T rF1 .x  / x D . 1 /T . v C u  w/ D 0:
Hence,

         0 D .v /T v  . 1 /T v C e T u  .y1 /T u  . 1 /T u C
              e T w  .y2 /T w C . 1 /T w
            D .v /T v C e T . u C            w/  .y1 /T u  .y2 /T w
            D .v /T v C e T . u C            w/:

Thus, the constructed direction D . x T ; vT ; uT ; wT /T is a critical direction
in the sense of Ben-Tal, moreover it satisfies (A.5). Now let us compute
                                                                      
                 T
                     r.x;v;u;v/
                      2
                                2 L.x ; v ; u ; w ; y0 ; y1 ; y2 ;       1;   2/   D

                 x T rxx
                      2
                         L.x  ; v ; u ; w ; y0 ; y1 ; y2 ;   
                                                                    1;
                                                                         
                                                                         2/   xC
                 vT rvv
                     2
                        L.x  ; v ; u ; w ; y0 ; y1 ; y2 ;    
                                                                    1;
                                                                         
                                                                         2/   v
Gauss–Newton Methods for Robust Parameter Estimation                                        83


                       X
                       m1                             X
                                                      m2
               dT             1i r 2 F1i .x  / C          2i r 2 F2i .x  / C
                       i D1                           i D1
                                                             !
                    X
                                   rF1iT .x  /rF1i .x  /      d:
               i WjF1i .x  /j




Proof of Theorem 7

Proof is based on the following representation of                    xkC1 at xkC1 2 D 0 W
                                                                       1   0
                                                           F1A .xkC1 /
      xkC1 D rF C .xkC1 /FA .xkC1 / D rF C .xkC1 / @F1N .xkC1 /A
                                                            F2 .xkC1 /
                            20              1 0                            1
                                F1A .xkC1 /      F1A .xk / C rF1A .xk / xk
           D rF C .xkC1 / 4@F1N .xkC1 /A  @               F1N .xk /      A
                                F2 .xkC1 /         F2 .xk / C rF2 .xk / xk
               0                             13
                 F1A .xk / C rF1A .xk / xk
             C@            F1N .xk /         A5
                  F2 .xk / C rF2 .xk / xk
                            0                                          1
                             F1A .xkC1 /  F1A .xk /  rF1A .xk / xk
           D rF C .xkC1 / @                    0                      A
                               F2 .xkC1 /  F2 .xk /  rF2 .xkC1 / xk
                             0                           1
                               F1A .xk / C rF1A .xk / xk
               CrF C .xkC1 / @           F1N .xk /       A
                                F2 .xk / C rF2 .xk / xk
                           0                           1
                            F1A .xk / C rF1A .xk / xk
               rF C .xk / @          F1N .xk /        A:
                             F2 .xk / C rF2 .xk / xk

Hence,
                              0                                        1
                               F1A .xkC1 /  F1A .xk /  rF1A .xk / xk
         xkC1 D rF C .xkC1 / @                   0                    A (A.11)
                                F2 .xkC1 /  F2 .xk /  rF2 .xk / xk
                     rF C .xkC1 /  rF C .xk / RA .xk /:
84                                                                     T. Binder and E. Kostina


Here we have used the equality
                         0                         1
                         F1A .xk / C rF1A .xk / xk
            rF C .xk / @           F1N .xk /       A
                          F2 .xk / C rF2 .xk / xk
                                 0            1
                                   rF1A .xk /
          D  xk C rF C .xk / @         0     A xk
                                    rF2 .xk /
          D  xk C rF C .xk /D.xk /rFA .xk / xk D  xk C                    xk D 0;

and the assumption that the partitioning (27) does not change for x 2 D .
Using (A.11) and the assumptions of the theorem, we get
                                 0                                      1
                                F1A .xkC1 /  F1A .xk /  rF1A .xk / xk
     k xkC1 k  krF C .xkC1 / @                    0                    Ak
                                 F2 .xkC1 /  F2 .xk /  rF2 .xk / xk
                Ck rF C .xkC1 /  rF C .xk / RA .xk /k
                              0                                         1
                                R1
                              B .rF1A .xk C t xk /  rF1A .xk // xk dt C
                              B0                                        C
                              B                                         C
               krF C .xkC1 / B                    0                    Ck
                              B 1                                       C
                              @ R                                       A
                                   .rF2 .xk C t xk /  rF2 .xk // xk dt
                                     0

                  C k xk k
                                     0                                   1
                  Z1                  rF1A .xk C t xk /  rF1A .xk / xk
                      krF C .xkC1 / @                 0                 A kdt
                  0                    .rF2 .xk C t xk /  rF2 .xk // xk
                  C k xk k
                  Z1                                !
                      t!k xk k2 dt C k xk k D              k xk k C     k xk k:
                                                        2
                  0

Thus, we have shown that
                                      !
                         k xkC1 k           k xk k C       k xk k:                    (A.12)
                                         2
   With estimate (A.12) all statements of the Theorem can be proven similarly to
theorem (3.1.44) in Bock [10].
Gauss–Newton Methods for Robust Parameter Estimation                                            85


• The sequences fık g, ık WD !2 k xk k C ; and fk xk kg are monotonously
  decreasing. Indeed, since ı0 < 1; then

                      k x1 k  ı0 k x0 k < k x0 k;
                               !               !
                         ı1 D k x1 k C < k x0 k C                        D ı0 ;
                                2              2
  and hence ıkC1 < ık < : : : < ı1 < ı0 < 1:
• The sequence fxk g remains in D0 . Indeed, since x0 and x1 2 D0 we get by
  induction for xkC1 2 D0

            kxkC2  x0 k D kxkC2  xkC1 C xkC1  xk C : : : C x1  x0 k
                                                                         X
                                                                         kC1
                             D k xkC1 C         xk C : : : C    x0 k           k xj k
                                                                         j D0
                                                                          1
                             < ı0kC1 C ı0k C : : : C 1 k x0 k                  k x0 k
                                                                         1  ı0
  implying xkC2 2 D0 .
• The sequence fxk g is a Cauchy sequence since

                                         X
                                         k                   X
                                                             k
                                                                p
                   kxi CkC1  xi k D           k xi Cp k <     ıi k xi k
                                         pD0                 pD0

                                           1               ı0i
                                               k xi k         k x0 k; 8k:
                                         1  ıi          1  ı0
   Hence the sequence fxk g converges: xk ! x? ; for k ! 1: The point
   x  2 D0 is a fixed point of the Gauss–Newton iteration: xk ! 0 D x? WD
   rF C .x  /FA .x  / (k ! 1/:



References

 1. D.A. Andrews, F. Bickel, F. Hampel, P. Huber, W. Rogers, and J. Tukey, Robust Estimates of
    Location: Survey and Advanves, Princeton University Press, 1972.
 2. U. Ascher, Collocation for two-point boundary value problems revisited, SIAM Journal on
    Numerical Analysis, 23(3), pp. 596–609, 1986.
 3. I. Barrodale and F.D.K. Roberts, An improved algorithm for discrete l1 linear approximation,
    SIAM Journal on Numerical Analysis 10, pp. 839–848, 1973.
 4. I. Barrodale and F.D.K. Roberts, Algorithm 478: Solution of an overdetermined system of
    linear equations in the l1 norm, Communications of the ACM 17, pp. 319–320, 1974.
 5. I. Bauer, H. G. Bock, S. Körkel, and J. P. Schlöder, Numerical methods for initial value
    problems and derivative generation for DAE models with application to optimum experimental
    design of chemical processes, in F. Keil, W. Mackens, H. Voss, and J. Werther, eds., Scientific
    Computing in Chemical Engineering II, 2, pp. 282–289, Springer, Berlin-Heidelberg, 1999.
86                                                                      T. Binder and E. Kostina


 6. I. Bauer, H. G. Bock, S. Körkel, and J. P. Schlöder, Numerical methods for optimum
    experimental design in DAE systems, Journal of Computational and Applied Mathematics
    120, pp. 1–25, 2000.
 7. A.E. Beaton and J.W. Tukey, The Fitting of Power Series, Meaning Polynomials, Illustrated on
    Band-Spectroscopic Data, Technometrics 16, pp. 147–185, 1974.
 8. A. Ben-Tal, Second-Order and Related Extremality Conditions in Nonlinear Programming,
    Journal of Optimization Theory and Applications 31(2), pp. 143–165, 1980.
 9. H.G. Bock, Numerical treatment of inverse problems in chemical reaction kinetics, in
    K.-H. Ebert, P. Deuflhard, and W. Jäger, eds., Modelling of Chemical Reaction Systems,
    volume 18 of Springer Series in Chemical Physics, Springer Verlag, pp. 102–125, 1981.
10. H.G. Bock, Randwertproblemmethoden zur Parameteridentifizierung in Systemen nichtlinearer
    Differentialgleichungen, Bonner Mathematische Schriften, Nr. 183, Bonn, 1987.
11. H.G. Bock, E.A. Kostina, and J.P. Schlöder, Numerical Methods for Parameter Estimation in
    Nonlinear Differential Algebraic Equations, GAMM Mitteilungen 30(2), pp. 376–408, 2007.
12. H.G. Bock, E. Kostina, and J.P. Schlöder, On the Role of Natural Level Functions to Achieve
    Global Convergence for Damped Newton Methods, in M.J.D. Powell and S. Scholtes, eds.,
    System Modelling and Optimization. Methods, Theory and Applications, Kluwer, Boston,
    pp. 51–74, 2000.
13. A.M. Bruckstein, D.L. Donoho, and M. Elad, From Sparse Solutions of Systems of Equations
    to Sparse Modeling of Signals and Images, SIAM Review 51(1), pp. 34–81, 2009.
14. R. Bulirsch, Die Mehrzielmethode zur numerischen Lösung von nichtlinearen Randwertproble-
    men und Aufgaben der optimalen Steuerung, Technical report, Carl-Cranz-Gesellschaft, 1971.
15. A. Cervantes and L.T. Biegler, Large-scale DAE optimization using a simultaneous NLP
    formulation, AIChE Journal 44(5), pp. 1038–1050, 2004.
16. W. Chauvenet, A Manual of Spherical and Practical Astronomy Vol. II - Theory and Use of
    Astronomical Instruments, J.B. Lippincott & Co., 1868.
17. J.E. Dennis and R.E. Welsch, Techniques for nonlinear least squares and robust regression,
    Communications in Statistics - Simulation and Computation 7, pp. 345–359, 1978.
18. P. Deuflhard, A Modified Newton Method for the Solution of Ill-Conditioned Systems of
    Nonlinear Equations with Application to Multiple Shooting, Numerical Mathematics 22,
    pp. 289–315, 1974.
19. R.C. Fair, On the robust estimation of econometric models, Annals of Economic and Social
    Measurement 3, pp. 667–677, 1974.
20. A.V. Fiacco and G.P. McCormick, Nonlinear Programming, Sequential Unconstrained Mini-
    mization Techniques, SIAM, 1990.
21. C.F. Gauss, Theoria Motus Corporum Coelestium in Sectionibus Conicis Solem Ambientium,
    F. Perthes & J.H. Besser, 1809.
22. J.E. Gentle, Least absolute value estimation: an introduction, Communications in Statistics -
    Simulation and Computation 6, pp. 313–328, 1977.
23. F.R. Hampel, Robust Estimation: A Condensed Partial Survey, Zeitschrift für Wahrschein-
    lichkeitstheorie und verwandte Gebiete 27, pp. 87–104, 1973.
24. M.J. Hinich and P.P. Talwar, A Simple Method for Robust Regression, Journal of the American
    Statistical Association 70, pp. 113–119, 1975.
25. P.E. Holland and R.E. Welsch, Robust regression using iteratively reweighted least-squares,
    Communications in Statistics - Theory and Methods 6, pp. 813–827, 1977.
26. P.J. Huber, Robust Estimation of a Location Parameter, The Annals of Mathematical Statistics
    35, pp. 73–101, 1964.
27. P.J. Huber and E.M. Ronchetti, Robust Statistics - Second Edition, John Wiley & Sons, 2009.
28. A. Koberstein, The Dual Simplex method, Techniques for a Fast and Stable Implementation,
    PhD Thesis, U Paderborn, 2005.
29. S. Körkel and E. A. Kostina, Numerical Methods for Nonlinear Experimental Design, in
    H. G. Bock, E. A. Kostina, H. X. Phu, and R. Rannacher, eds., Modeling, Simulation and
    Optimization of Complex Processes, Proceedings of the International Conference on High
    Performance Scientific Computing, 2003, Hanoi, Vietnam. Springer, 2004.
Gauss–Newton Methods for Robust Parameter Estimation                                          87


30. S. Körkel, Numerische Methoden für Optimale Versuchsplanungsprobleme bei nichtlinearen
    DAE-Modellen, PhD thesis, U Heidelberg, 2002.
31. E. Kostina, The Long Step Rule in the Bounded-Variable Dual Simplex Method: Numerical
    Experiments, Mathematical Methods of Operations Research 3(55), pp. 413–429, 2002.
32. E. Kostina, Robust Parameter Estimation in Dynamic Systems, Optimization and Engineering
    5(4), pp. 461–484, 2004.
33. E. Kostina and O. I. Kostyukova, A Primal-Dual Active-Set Method for Convex Quadratic
    Programming, Technical Report, IWR, U Heidelberg, 2003.
34. S. Krishna, M.H. Jensen, and K. Sneppen, Minimal model of spiky oscillations in NF- B
    signaling, Proceedings of the National Academy of Sciences of the United States of America
    103(29), pp. 10840–10845, 2006.
35. P.S. Laplace, Théorie Analytique des Probabilités, V. Courcier, 1814.
36. A .M. Legendre, Nouvelles méthodes pour la détermination des orbites des comètes, Firmin
    Didot, 1805.
37. O.L. Mangasarian and D.R. Musicant, Robust Linear and Vector Support Regression, IEEE
    Transactions on Pattern Analysis and Machine Intelligence 22(9), pp. 1–6, 2000.
38. M.R. Osborne, B. Presnell, and B.A. Turlach, On the LASSO and Its Dual, Journal of
    Computational and Graphical Statistics 9(2), pp. 319–337, 2000.
39. B. Peirce, Criterion for the rejection of doubtful observations, The Astronomical Journal 45,
    pp. 161–163, 1852.
40. J.R. Rice and J.S. White, Norms for Smoothing and Estimation, SIAM Review 6, pp. 243–256,
    1964.
41. J.A. Scales and A. Gersztenkorn, Robust methods in inverse theory, Inverse Problems 4,
    pp. 1071–1091, 1988.
42. V.H. Schulz, Ein effizientes Kollokationsverfahren zur numerischen Behandlung von
    Mehrpunktrandwertaufgaben in der Parameteridentifizierung und Optimalen Steuerung,
    Diploma thesis, U Augsburg, 1990.
43. S. Waldherr, Uncertainty and robustness analysis of biochemical reaction networks via convex
    optimisation and robust control theory, PhD thesis, University of Stuttgart, 2009.
An Optimal Scanning Sensor Activation Policy
for Parameter Estimation of Distributed Systems

Dariusz Uciński




Abstract A technique is proposed to solve an optimal node activation problem in
sensor networks whose measurements are supposed to be used to estimate unknown
parameters of the underlying process model in the form of a partial differential
equation. Given a partition of the observation horizon into a finite number of
consecutive intervals, the problem is set up to select nodes which will be active over
each interval while the others will remain dormant such that the log-determinant of
the resulting Fisher information matrix associated with the estimated parameters is
maximized. The search for the optimal solution is performed using the branch-and-
bound method in which an extremely simple and efficient technique is employed
to produce an upper bound to the maximum objective function. Its idea consists
in solving a relaxed problem through the application of a simplicial decomposition
algorithm in which the restricted master problem is solved using a multiplicative
algorithm for D-optimal design. The performance evaluation of the technique is
additionally presented by means of simulations.


1 Introduction

1.1 Distributed Sensor Networks and Sensor Management

Distributed sensor networks have recently become an important research area
regarding spatio-temporal phenomena [10, 11, 15, 35, 72, 99]. This is because
dramatic progress in hardware, sensor and wireless networking technologies
enables large-scale deployment of superior data acquisition systems with adjusting


D. Uciński ()
Institute of Control and Computation Engineering, University of Zielona Góra,
ul. Podgórna 50, 65–246 Zielona Góra, Poland
e-mail: d.ucinski@issi.uz.zgora.pl

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions           89
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 4,
© Springer-Verlag Berlin Heidelberg 2013
90                                                                          D. Uciński


resolutions. A sensor network may comprise thousands of inexpensive, miniature
and low-power sensor nodes that can be deployed throughout a physical space and
connect through a multi-hop wireless network, providing dense sensing close to
physical phenomena. The nodes process and locally communicate the collected
information, as well as coordinate actions with each other.
    Sensor networks have recently come into prominence because they hold the
potential to revolutionalize a wide spectrum of both civilian and military applica-
tions, including monitoring microclimates and wildlife habitats, tracking chemical
plumes, traffic surveillance, industrial and manufacturing automation, building
and structures monitoring, and many others. What makes sensor networks so
attractive is their miniaturization, low cost, low power radio and autonomous ad
hoc connectivity, which basically eliminates the need for any human intervention.
    The design, implementation and operation for a sensor network requires the con-
fluence of many disciplines, including signal processing, networking and protocols,
embedded systems, information management and distributed algorithms. There are,
however, a number of other problems that make the design of applications for
sensor networks a difficult task. In this context, power limitation is a central issue
when nodes are powered by batteries. To reduce power consumption, nodes are
provided with a “sleep” mode in which they consume only a fraction of the power
when awake. What is more, an additional reason for not using all the available
sensors could be the reduction of the observation system complexity and the cost
of operation and maintenance [97]. Management of sleeping and awake modes is
thus of utmost importance as certainly the selection of active and dormant sensor
may have a dramatic effect on the performance possibilities. This becomes even
more critical when the observed process has a high dynamics in space and time and
then it is desirable to have a sensor management policy so as to activate at a given
time moment only sensors which provide the most valuable information about the
observed process. Such a scanning strategy of taking measurements can be also
interpreted in terms of a group of sensors which are mobile in the sense that after
performing measurements at fixed spatial positions (i.e., exactly in the same way
as stationary sensors) on a time interval of nonzero length, they can change their
locations to continue the measurements at more informative points, and the time
necessary for this change may be neglected. In this way, we deal with a kind of
mobility in sensor networks.
    Scanning drastically expands the spectrum of the network’s capabilities. More-
over, assuming that each node possesses a certain amount of decision making
autonomy gives rise to a dynamic system with a considerable amount of flexibility,
depending on the extent to which the nodes can cooperate in order to perform a
mission. This flexibility, for example, allows us to handle a large number of dynamic
events with a much smaller number of nodes [10, 11, 15, 55, 72]. Naturally, mobility
implies an additional layer of complexity. For example, if communication connec-
tivity is to be maintained, we must ensure that each node remains within the range of
at least some other nodes. We must also take into account that mobility consumes a
considerable amount of energy, which amplifies the need for various forms of power
control. However, the complexity of the resulting sensor management problem is
An Optimal Scanning Sensor Activation Policy                                       91


compensated by a number of benefits. Specifically, observations are not assigned to
fixed spatial positions, but the network is capable of tracking points which provide
at a given time moment best information about the spatio-temporal process.


1.2 PDE Models in Configuring Sensor Networks

In a typical sensor network application, sensors are supposed to be deployed
so as to monitor a region and collect the most valuable information from the
observed system. The quality of sensor deployment can be quantified by the
appropriate performance indices and optimum sensor node configurations can thus
be sought. The resulting observation strategies concern optimally scheduling active
and dormant nodes. Up to now, approaches aiming at guaranteeing a dense region
coverage or satisfactory network connectivity have dominated this line of research
and abstracted away from the mathematical description of the physical processes
underlying the observed phenomena. In this way, much information is lost which
could potentially be used to make the operation of the sensor network more efficient
and yield substantial gains in the functionality of the whole observation system.
    The observed processes in question are often termed distributed parameter
systems (DPSs) as their states depend not only on time, but also on spatial
coordinates. Appropriate mathematical modeling of DPSs most often yields partial
differential equations (PDEs). It goes without saying that such models involve using
rather sophisticated mathematical methods. This explains why so few attempts have
been made at exploiting them in the context of sensor networks. But in recompense
for this effort, we would be in a position to describe the process more accurately and
to implement more effective control strategies.
    For the last 40 years, DPSs have occupied an important place in control and
system theories. They are now an established area of research with a long list of
journal articles, conference proceedings and numerous textbooks [6, 16, 44, 56]. It
is intriguing that for a long time, due to the inherent impossibility of observing
the system states over the entire spatial domain, one of the topics of importance
for specialists in control theory has been the problem of selecting the number and
location of sensors and actuators for the control and state/parameter estimation in
such systems. A number of sensor location methods were invented and supported
by a sound theory, but they are not directly fit to the emerging technology of
sensor networks. The present paper is intended as a step towards bridging this gap
and meeting the needs created in the context of PDE model calibration based on
observations from a sensor network with scanning nodes.


1.3 Sensor Location for Parameter Estimation in DPSs

The importance of sensor planning has been recognized in many application
domains prior to the invention of sensor networks, e.g., regarding air quality
92                                                                         D. Uciński


monitoring systems, groundwater-resources management, recovery of valuable
minerals and hydrocarbon, model calibration in meteorology and oceanography,
chemical engineering, hazardous environments and smart materials [5, 12, 17,
36, 37, 51, 52, 62, 74, 81]. The operation and control of such systems usually
requires precise information on the parameters which condition the accuracy of the
underlying mathematical model, but that information is only available through a
limited number of possibly expensive sensors. Over the past years, this limitation
has stimulated laborious research on the development of strategies for efficient
sensor placement (for reviews, see papers [41, 97] and comprehensive monographs
[79, 81]). Nevertheless, although the need for systematic methods was widely
recognized, most techniques communicated by various authors usually rely on
exhaustive search over a predefined set of candidates and the combinatorial nature of
the design problem is taken into account very occasionally [97]. Needless to say that
this approach, which is feasible for a relatively small number of possible locations,
soon becomes useless as the number of possible location candidates increases.
It goes without saying that these problems are compounded by the passage to
scanning observations. The number of competing solutions grows exponentially
with the numbers of sensors and switching instants. Complicated general search
algorithms of discrete optimization can readily consume appreciable computer time
and space, too.



1.4 Related Approaches

Instead of the wasteful and tedious exhaustive search of the solution space, which
constitutes quite a naive approach, approaches originating in statistical optimum
experimental design [3, 24, 60, 64, 83, 84, 98] and its extensions to models for
dynamic systems, especially in the context of the optimal choice of sampling
instants and input signals [27, 28, 31, 47, 75] turn out extremely useful. In this
vein, various computational schemes have been developed to attack directly the
original problem or its convenient approximation. The adopted optimization criteria
are essentially the same, i.e., various scalar measures of performance based on the
Fisher information matrix (FIM) associated with the parameters to be identified are
maximized. The underlying idea is to express the goodness of parameter estimates
in terms of the covariance matrix of the estimates. For sensor-location purposes,
one assumes that an unbiased and efficient (or minimum-variance) estimator is
employed. This leads to a great simplification since the Cramér–Rao lower bound
for the aforementioned covariance matrix is merely the inverse of the FIM, which
can be computed with relative ease, even though the exact covariance matrix of a
particular estimator is very difficult to obtain.
   As regards dynamic DPSs, the first treatment of this type for the sensor-
location problem was proposed by Uspenskii and Fedorov [93] who maximized
the D-optimality criterion, being the determinant of the FIM associated with the
estimated parameters characterizing the source term in a simple one-dimensional
An Optimal Scanning Sensor Activation Policy                                      93


linear diffusion equation. The authors observed that the linear dependence of
the observed outputs on these parameters makes it possible to directly apply
the machinery of optimum experimental design theory. The delineated approach
was extended by Rafajłowicz [66] to cover a class of DPSs described by linear
hyperbolic equations with known eigenfunctions and unknown eigenvalues. The aim
was to find conditions for the optimality of the measurement design and the spectral
density of the stochastic input. It was indicated that common numerical procedures
from classical experimental design for linear regression models could be adopted
to find optimal sensor location. Moreover, the demonstrated optimality conditions
imply that the optimal input comprises a finite number of sinusoidal signals and that
optimal sensor positions are not difficult to find in some cases. A similar problem
was studied in [67] in a more general framework of DPSs which can be described
in terms of Green’s functions.
    Over the past two decades, this methodology has been substantially refined to
extend its applicability. A comprehensive treatment of both theoretical and algorith-
mic aspects of the resulting sensor location strategies is contained in the monograph
[81]. The potential of the approach for generalizations was exploited, e.g., by Patan
and Patan [58] who developed a fault detection scheme for DPSs based on the
maximization of the power of a parametric hypothesis test regarding the nominal
state of a given DPS. The approach based on maximization of the determinant of
the appropriate FIM is by no means restricted to theoretical considerations and
there are examples which do confirm its effectiveness in practical applications.
Thus, in [50] a given number of stationary sensors were optimally located using
nonlinear programming techniques for a biotechnological system consisting of
a bubble column loop fermenter. On the other hand, Sun [74] advocates using
optimum experimental design techniques to solve inverse problems in groundwater
modelling. How to monitor the water quality around a landfill place is an example
of such a network design. Nonlinear programming techniques are also used there to
find numerical approximations to the respective exact solutions.
    A similar approach was used in [38,39] for on-orbit modal identification of large
space structures. Although the respective models are not PDEs, but their discretized
versions obtained through the finite-element method, the proposed solutions can
still be of interest owing to the striking similitude of both the formulations.
A fast and efficient approach was delineated for reducing a relatively large initial
candidate sensor-location set to a much smaller optimum set which retains the linear
independence of the target modes and does not lead to a substantial deterioration in
the accuracy of modal-response estimates, which is quantified by the determinant of
the FIM. Some improvements on this approach by incorporating basic elements of
tabu search were proposed by Kincaid and Padula [40].
    A related optimality criterion was given by Point et al. [61] who investigated
maximization of the Gram determinant being a measure of the independence of
the sensitivity functions evaluated at sensor locations. The authors argue that such
a procedure guarantees that the parameters are identifiable and the correlation
between the sensor outputs is minimized. The form of the criterion itself resembles
the D-optimality criterion, but the counterpart of the FIM takes on much larger
94                                                                             D. Uciński


dimensions, which suggests that the approach may involve more cumbersome
calculations. Nevertheless, the delineated technique was successfully applied to a
laboratory-scale, catalytic fixed-bed reactor [94].
   At this juncture, it should be noted that spatial design methods related to the
design of monitoring networks are also of great interest to statisticians and a vast
amount of literature on the subject already exists [49, 53, 54] contributing to the
research field of spatial statistics [14] motivated by practical problems in agriculture,
geology, meteorology, environmental sciences and economics. However, the models
considered in the statistical literature are quite different from the dynamic models
described by PDEs discussed here. Spatiotemporal data are not considered in
this context and the main purpose is to model the spatial process by a spatial
random field, incorporate prior knowledge and select the best subset of points
of a desired cardinality to best represent the field in question. The motivation is
a need to interpolate the observed behaviour of a process at unobserved spatial
locations, as well as to design a network of optimal observation locations which
allows an accurate representation of the process. The field itself is modelled by
some multivariate distribution, usually Gaussian [2]. Designs for spatial trend and
variogram estimation can be considered. The basic theory of optimal design for
spatial random fields is outlined in the excellent monograph by Müller [49] which
bridges the gap between spatial statistics and classical optimum experimental design
theory. The optimal design problem can also be formulated in terms of information-
based criteria whose application amounts to maximizing the amount of information
(of the Kullback–Leibler type) to be gained from an experiment [45]. However, the
applicability of all those fine statistical results in the engineering context discussed
here is not clear for now and more detailed research into this direction should be
pursued in the near future (specifically, generalizations regarding time dynamics are
not obvious, although in [45] some promising attempts have been made).
   Sensors can be mounted on various platforms and, as an appealing alternative
to stationary sensors, these platforms can be highly dynamic in motion. Recent
technological advances in communication systems and the growing ease in making
small, low power and inexpensive mobile systems now make it feasible to deploy a
group of networked vehicles in a number of environments [10, 11, 15, 55, 72]. The
complexity of the resulting design problem is compensated by a number of benefits.
Specifically, sensors are not assigned to fixed positions which are optimal only on
the average, but are capable of tracking points which provide at a given time instant
best information about the parameters to be identified. Consequently, by actively
reconfiguring a sensor system we can expect the minimal value of an adopted
design criterion to be lower than the one for the stationary case. In the seminal
article [68], the D-optimality criterion is considered and an optimal time-dependent
measure is sought, rather than the trajectories themselves. On the other hand,
Uciński [80, 81, 90], apart from generalizations of Rafajłowicz’s results, develops
some computational algorithms based on the FIM. He reduces the problem to a state-
constrained optimal-control one for which solutions are obtained via the methods of
successive linearizations which is capable of handling various constraints imposed
on sensor motions. In turn, the work [86] was intended as an attempt to properly
An Optimal Scanning Sensor Activation Policy                                        95


formulate and solve the time-optimal problem for moving sensors which observe
the state of a DPS so as to estimate some of its parameters. In the paper by [87],
a similar technique was presented so as to make the Hessian of the parameter
estimation cost well conditioned subject an additional constraint imposed on the
achievable D-efficiency of the solutions. This line of research was extended in the
monograph by [73] towards applications involving sensor networks. We should also
pass a reference to works by [18, 19, 21, 22, 22, 34, 89], and [20] focused on on-
line optimal guidance of actuator/sensor network nodes for control and/or state
estimation, which demonstrate that inclusion of a DPS model into the optimization
setting can substantially improve the quality of the network performance.
    Communications on selecting scanning sensor positions, which is the closest to
the main topic of this paper, are rather limited. The problem was first exposed in
[88, 91] and then more thoroughly examined in Chap. 4 of the monograph [81]. The
key idea of that approach which originates in the seminal work [23] (see also [13],
Chap. 4 of [24] and [85]) is to operate on the density of sensors per unit area instead
of the positions of individual sensors. Such conditions permits to relax the discrete
optimization problem in context and to replace it by its continuous approximation.
This transformation is warranted in the case of a relatively large number of
measurement sensors and a predefined set of switching times. Mathematically, the
relevant procedure involves looking for a family of “optimal” probability measures
defined on subsets of the set of feasible measurement points. In spite of its somewhat
abstract assumptions, the resulting algorithms of the exchange type to solve the
scanning sensor guidance problem are very easy to implement and extremely
efficient. In turn, the scanning measurement problem with free switching times was
attacked in [57] by treating it as an optimal discrete-valued control problem which is
then transformed into an equivalent continuous-valued optimal-control formulation.
In principle, the latter method is only applicable to situations when the number
of scanning sensors to be scheduled is rather moderate, as it does not prevent the
drawback of the “curse of dimensionality” inherent to the original combinatorial
problem (enormous amounts of memory storage and time are still involved when the
number of sensors is high). It offers, however, a possibility of selecting switching
moments in continuous time based on the application of commonplace nonlinear
programming algorithms.



1.5 Results in This Contribution

The purpose of the investigations undertaken here, for which preliminary results
(without proofs) were reported in [82], was to establish a practical approach to
selection of activated sensors over consecutive time stages which, while being
independent of a particular model of the dynamic DPS in question, would be
versatile enough to cope with practical sensor networks consisting of a large
number of nodes. Specifically, given I sensor network nodes, we partition the entire
observation horizon into fixed consecutive subintervals and allow only n of them
96                                                                            D. Uciński


(typically, n is much smaller than I ) to be activated over each time subinterval.
Consequently, the problem at each stage is to divide the I available nodes between
n activated sites and the remaining I  n dormant sites so as to maximize the
determinant of the FIM associated with the parameters to be estimated. As was
already mentioned, selecting the best subset of nodes to be activated constitutes
an inherently discrete large-scale resource allocation problem whose solution may
be prohibitively time-consuming. That is why an efficient guided search algorithm
based on the branch-and-bound method is developed, which implicitly enumerates
all the feasible sensor configurations, using relaxed optimization problems that
involve no integer constraints.
    It should be emphasized here that this idea is not novel, since branch-and-
bound constitutes one of the most frequent approaches to solve discrete optimization
problems and it has indeed been used in the context of network design, cf., e.g., [8].
What is more, it was already studied in [92] in quite a similar vein, but for stationary
sensors (i.e., the positions of the active sensors were fixed over the whole observa-
tion horizon). Extensions to the scanning sensor setting are not that straightforward,
however, especially due to the requirement that the number of active sensors over
each time stage be always the same. Moreover, the size of the search space grows
exponentially with the number of time partitions. The main contribution of this
paper consists in the development of a simple, yet powerful, computational scheme
to obtain upper bounds to the optimal values of the D-optimality criterion for the
restricted problems. These bounds are obtained by relaxing the 0–1 constraints
on the design variables, thereby allowing them to take any value in the interval
Œ0; 1 and resulting in a concave problem of determinant maximization over the
set of all linear combinations of a finite number of nonnegative definite matrices,
subject to additional linear constraints on the coefficients of those combinations. In
order to solve it numerically, optimality conditions are first derived and discussed,
because they take a surprisingly simple form involving an interesting separability
principle for the set of locations at which the weights achieve their upper bounds
and the ones at which the weights are zero. Then an algorithm is proposed which
can be interpreted as a simplicial decomposition one with the restricted master
problem solved by an uncomplicated multiplicative weight optimization algorithm.
The resulting procedure is guaranteed to produce iterates converging to the solution
of the relaxed restricted problem. To illustrate the use of our algorithm, we report
some numerical experience on a sensor network design problem regarding a two-
dimensional diffusion process.



1.6 Notation

Given a set H , jH j and HN signify its cardinality and closure, respectively. We
use R to denote the set of real numbers and RC to denote the set of nonnegative
real numbers. The n-dimensional Euclidean vector space is denoted by Rn , and
the Euclidean matrix space of real matrices with n rows and k columns is denoted
An Optimal Scanning Sensor Activation Policy                                                97


by Rmk . We will write Sn for the subspace of Rnn consisting of all symmetric
matrices. In Sn two sets are of special importance: the cone of nonnegative definite
matrices and the cone of positive definite matrices, denoted by SnC and SnCC ,
respectively. The curly inequality symbol  and its strict form  are used to denote
the Löwner partial ordering of symmetric matrices: For A; B 2 Sn , we have

                                  A  B ” A  B 2 SnC ;
                                  A  B ” A  B 2 SnCC :

    We call a point of the form ˛1 u1 C  C˛` u` , where ˛1 C  C˛` D 1 and ˛i  0,
i D 1; : : : ; `, a convex combination of the points u1 ; : : : ; u` (it can be thought of
as a mixture or a weighted average of the points, with ˛i the fraction of ui in the
mixture). Given a set of points U , co.U / stands for its convex hull, i.e., the set of
all convex combinations of elements of U ,
           (                                                                                 )
               X̀           ˇ                                   X̀
                            ˇ
co.U / D              ˛i ui ˇ ui 2 U; ˛i  0; i D 1; : : : ; `I    ˛i D 1; ` D 1; 2; 3; : : : :
               i D1                                           i D1

   The probability (or canonical) simplex in Rn is defined as
                                                  (                )
                             ˚                        ˇXn
                                                       n ˇ
                      Pn D co e 1 ; : : : ; e n D p 2 RC ˇ   pi D 1 ;
                                                               i D1

where e j is the usual unit basis vector along the j -th coordinate of Rn .
   Finally, recall that for any A 2 Rnn which may depend on a parameter ˇ, there
holds                                                      
                             @                          @A
                               ln det.A/ D trace A1
                            @ˇ                           @ˇ
whenever A is nonsingular.



2 D-Optimal Sensor Activation Problem

Let ˝  Rd be a bounded spatial domain with sufficiently smooth boundary  ,
and let T D .0; tf  be a bounded time interval. Consider a distributed parameter
system (DPS) whose scalar state at a spatial point x 2 ˝N  Rd and time instant
t 2 TN is denoted by y.x; t/. Mathematically, the system state is governed by the
partial differential equation (PDE)

                                 @y              
                                    D F x; t; y; ™ in ˝  T ;                              (1)
                                 @t
98                                                                                  D. Uciński


where F is a well-posed, possibly nonlinear, differential operator which involves
first- and second-order spatial derivatives and may include terms accounting for
forcing inputs specified a priori. The PDE (1) is accompanied by the appropriate
boundary and initial conditions

                        B .x; t; y; ™/ D 0            on   T;                            (2)
                                         y D y0       in ˝  ft D 0g;                      (3)

respectively, B being an operator acting on the boundary  and y0 D y0 .x/ a
given function. Conditions (2) and (3) complement (1) such that the existence
of a sufficiently smooth and unique solution is guaranteed. We assume that the
forms of F and B are given explicitly up to an m-dimensional vector of unknown
constant parameters ™ which must be estimated using observations of the system.
The implicit dependence of the state y on the parameter vector ™ will be reflected
by the notation y.x; tI ™/.
   Let us form an arbitrary partition of the time interval T by choosing points
t0 < t1 <    < tK D tf defining subintervals Tk D .tk1 ; tk , k D 1; : : : ; K
called scanning stages. We then consider that the state y is constantly observed
by n sensors which will possibly be changing their locations at the beginning of
every time subinterval, but will be remaining stationary for the duration of each of
the subintervals. Thus the observations proceed in K stages and the instantaneous
sensor configuration  can be viewed as follows:

                .t/ D .x 1k ; : : : ; x nk /   for t 2 Tk ;    k D 1; : : : ; K;          (4)

        j
where x k 2 X  Rd stands for the location of the j -th sensor on the subinterval
Tk , X being the part of the spatial domain ˝N where the measurements can be
taken. Accordingly, the discrete-continuous observations provided by n scanning
pointwise sensors are defined by the scalar output
                                     j                j
                  zkj .t/ D y.x k ; tI ™/ C ".xk ; t/;         j D 1; : : : ; n            (5)

                                                 j
for t 2 Tk , k D 1; : : : ; K, where ".x k ; t/ denotes the measurement noise. This
relatively simple conceptual framework involves no loss of generality since it can
be easily generalized to incorporate, e.g., multiresponse systems or inaccessibility
of state measurements, cf. [81, p. 95].
   It is customary to assume that the measurement noise is zero-mean, Gaussian,
spatial uncorrelated and white [1, 56, 65], i.e.,
                      ˚ j           j0         
                     e ".xk ; t/".x k 0 ; t 0 / D  2 ıkk 0 ıjj 0 ı.t  t 0 /;             (6)

where  2 defines the intensity of the noise, ıij and ı.  / standing for the Kronecker
and Dirac delta functions, respectively. Although white noise is a physically
impossible process, it constitutes a reasonable approximation to a disturbance whose
An Optimal Scanning Sensor Activation Policy                                         99


adjacent samples are uncorrelated at all time instants for which the time increment
exceeds some value which is small compared with the time constants of the DPS.
   The most widely used formulation of the parameter estimation problem is as
follows: Given the model (1)–(3) and the outcomes of the measurements zkj .  /,
k D 1; : : : ; K and j D 1; : : : ; n, estimate ™ by b
                                                     ™, a global minimizer of the output
least-squares error criterion

                             X n Z n
                             K X                            o2
                                                  j
                    J .# / D        zkj .t/  y.x k ; tI # / dt                     (7)
                             kD1 j D1 Tk


where y.  ;  I #/ denotes the solution to (1)–(3) for a given value of the parameter
vector #. In practice, a regularized version of the above problem is often considered
by adding to J .#/ a term imposing stability or a-priori information or both [4, 96].
   Inevitably, the covariance matrix cov.b   ™/ of the above least-squares estimator
                                   j
depends on the sensor locations x k . This fact suggests that we may attempt to select
them so as to yield best estimates of the system parameters. To form a basis for the
comparison of different locations, a quantitative measure  of the “goodness” of
particular sensor configurations is required. Such a measure is customarily based
on the concept of the Fisher Information Matrix (FIM) which is widely used in
optimum experimental design theory for lumped systems [3, 24, 60, 64, 98]. In our
setting, the FIM is given by [65]

                                   X n Z
                                   K X
                                                     j         j
                      M ./ D                    g.x k ; t/g.x k ; t/T dt;          (8)
                                   kD1 j D1 Tk


where
                                                            
                             @y.x; tI # /        @y.x; tI # / T
                   g.x; t/ D              ; :::;                                    (9)
                                @#1                 @#m        #D™0

stands for the so-called sensitivity vector, ™0 being a prior estimate to the unknown
parameter vector ™ [66, 67, 74, 81]. The rationale behind this choice is the fact
that, up to a constant scalar multiplier, the inverse of the FIM constitutes a good
approximation of cov.b  ™/ provided that the time horizon is large, the nonlinearity
of the model with respect to its parameters is mild, and the measurement errors are
independently distributed and have small magnitudes [24, 98].
   As for a specific form of  , various options exist [3,24,98], but the most popular
criterion, called the D-optimality criterion, is the log-determinant of the FIM:

                                    .M / D log det.M /:                           (10)

The resulting D-optimum sensor configuration leads to the minimum volume of the
uncertainty ellipsoid for the estimates.
100                                                                               D. Uciński


    The introduction of an optimality criterion renders it possible to formulate the
sensor location problem as maximization of the performance measure R ./ WD
 M ./ with respect to all feasible . This apparently simple formulation may
lead to the conclusion that the only question remaining is that of selecting an
appropriate solver from a library of numerical optimization routines. Unfortunately,
an in-depth analysis reveals complications which accompany this way of thinking.
    A key difficulty in developing successful numerical techniques for sensor
location is that the number of sensors to be placed in a given region may be
quite large (this is a common situation as far as sensor networks are considered).
When trying to treat the task as a constrained nonlinear programming problem, the
actual number of variables is even doubled or tripled, since the position of each
sensor is determined by its two or three spatial coordinates, so that the resulting
problem is rather of large scale. What is more, a desired global extremum is usually
hidden among many poorer local extrema. Consequently, to directly find a numerical
solution may be extremely difficult. Additionally, a technical complication might
also be the sensor clusterization which constitutes a price to pay for the simplifying
assumption that the measurement noise is spatially uncorrelated. This means that in
an optimal solution different sensors often tend to take measurements at one point,
and this is acceptable in applications rather occasionally.
    In the literature, a common remedy for the last predicament is to guess a priori
a set of I possible candidate locations, where I > n, and then to seek for each time
interval Tk the best subset of n locations from among the I possible, so that the
problem thus reduces to a combinatorial one. In other words, the problem is to
divide at each scanning stage the I available sites between n gauged sites and the
remaining I  n ungauged sites so as to maximize the determinant of the FIM
associated with the parameters to be estimated. Equivalently, this setting can be
perfectly seen as the selection of n activated sensors within the framework of an
I -node sensor network mentioned in the Introduction. This formulation will be also
adopted in what follows.
    Specifically, let x i , i D 1; : : : ; I denote given spatial positions of sensor network
nodes. Now that our design criterion has been established, the problem is to find
optimal allocations of n active sensors to x i , i D 1; : : : ; I during K stages so as
to maximize the value of the design criterion incurred by the allocation. In order
to formulate this mathematically, introduce for each location x i variables vki , k D
1; : : : ; K which take the value 1 or 0 depending on whether a sensor located at x i is
active over the time interval Tk , respectively. The FIM in (8) can then be rewritten as

                                             X
                                             K X
                                               I
                                M .v/ D                 vki M ki ;                      (11)
                                             kD1 i D1

where

                           v D .v1 ; : : : ; vK /;                                      (12)
                         vk D .vk1 ; : : : ; vkI /;     k D 1; : : : ; K                (13)
An Optimal Scanning Sensor Activation Policy                                              101


and
                                        Z
                             M ki D              g.x i ; t/g.x i ; t/T dt:               (14)
                                            Tk

It is straightforward to verify that the m  m matrices M ki are nonnegative definite
and, therefore, so is M .v/.
    Then our design problem is rephrased as follows:


   Problem P: Find a sequence v D .v11 ; : : : ; v1I ; : : : ; vK1 ; : : : ; vKI / 2 RKI to
   maximize                                            
                            P .v/ D log det M .v/                                      (15)
   subject to the constraints

                  X
                  I
                         vki D n;           k D 1; : : : ; K;                          (16)
                  i D1
                              ˚ 
                         vki 2 0; 1 ;        i D 1; : : : ; I;     k D 1; : : : ; K:   (17)



   This constitutes a 0–1 integer programming problem which necessitates an
ingenious solution. In what follows, we propose to solve it using the branch-
and-bound method which is a standard technique to solve integer-programming
problems.



3 Branch-and-Bound Search

3.1 Key Idea

The branch-and-bound (BB) constitutes a general algorithmic technique for finding
optimal solutions of various optimization problems, especially discrete or combina-
torial [7, 25]. If applied carefully, it can lead to algorithms that run reasonably fast
on average.
   Principally, the BB method is a tree-search algorithm combined with a rule for
pruning subtrees. Suppose we wish to maximize an objective function P .v/ over a
finite set V of admissible values of the argument v called the feasible region. The BB
then progresses by iteratively applying two procedures: branching and bounding.
Branching starts with smartly covering the feasible region by two or more smaller
feasible subregions (ideally, partitioning into disjoint subregions). It is then repeated
recursively to each of the subregions until no more division is possible, which
leads to a progressively finer partition of V . The consecutively produced subregions
102                                                                                 D. Uciński


naturally generate a tree structure called the BB tree. Its nodes correspond to the
constructed   ˚ subregions, with the feasible set V as the root node and the singleton
solutions v , v 2 V as terminal nodes. In turn, the core of bounding is a fast
method of finding upper and lower bounds to the maximum value of the objective
function over a feasible subdomain. The idea is to use these bounds to economize
computation by eliminating nodes of the BB tree that have no chance of containing
an optimal solution. If the upper bound for a subregion VA from the search tree
is lower than the lower bound for any other (previously examined) subregion VB ,
then VA and all its descendant nodes may be safely discarded from the search. This
step, termed pruning, is usually implemented by maintaining a global variable that
records the maximum lower bound encountered among all subregions examined so
far. Any node whose upper bound is lower than this value need not be considered
further and thereby can be eliminated. It may happen that the lower bound for a node
matches its upper bound. That value is then the maximum of the function within the
corresponding subregion and the node is said to be solved. The search proceeds
until all nodes have been solved or pruned, or until some specified threshold is met
between the best solution found and the upper bounds on all unsolved˚problems.
˚ In what     follows, we will use the symbol E to denote the set 1; : : : ; K 
 1; : : : ; I of all possible pairs .k; i / of the indices identifying a scanning stage and
a sensor location. Our implementation of BB for Problem P involves the partition of
the feasible set
            (
                                                            ˇ
                                                            ˇ
   V D v D .v11 ; : : : ; v1I ; : : : ; vK1 ; : : : ; vKI / ˇ

                                                                              )
              X
              I
                     vki D n; k D 1; : : : ; K;      vki D 0 or 1; 8.k; i / 2 E ;         (18)
              i D1

into subsets. It is customary to select subsets of the form [7]:
                    ˚                                                       
      V .E0 ; E1 / D v 2 V j vki D 0; 8.k; i / 2 E0 ; vki D 1; 8.k; i / 2 E1 ;            (19)

where E0 and E1 are disjoint subsets of E. Consequently, V .E0 ; E1 / is the subset of
V such that sensors are active at the stages and locations with indices in E1 , sensors
are dormant at the stages and locations with indices in E0 , and sensors may be active
or dormant at the remaining stages and locations.
   Each subset V .E0 ; E1 / is identified with a node in the BB tree. The key
assumption in the BB method is that for every nonterminal node V .E0 ; E1 /, i.e.,
the node for which E0 [ E1 ¤ E, there is an algorithm that determines an upper
bound PN .E0 ; E1 / to the maximum design criterion over V .E0 ; E1 /, i.e.,

                                 PN .E0 ; E1 /       max          P .v/;                 (20)
                                                   v2V .E0 ;E1 /
An Optimal Scanning Sensor Activation Policy                                            103


and a feasible solution v 2 V for which P .v/ can serve as a lower bound to the
maximum design criterion over V . We may compute PN .E0 ; E1 / by solving the
following relaxed problem:


   Problem R.E0 ; E1 /: Find a sequence vN to maximize (15) subject to the
   constraints

                        X
                        I
                               vki D n;            k D 1; : : : ; K;               (21)
                        i D1

                               vki D 0;        .k; i / 2 E0 ;                      (22)
                               vki D 1;        .k; i / 2 E1 ;                      (23)
                        0      vki    1;       .k; i / 2 E n .E0 [ E1 /:           (24)



   In Problem R.E0 ; E1 / all 0–1 constraints on the variables vki are relaxed by
allowing them to take any value in the interval Œ0; 1, except that the variables vki ,
.k; i / 2 E0 [ E1 are fixed at either 0 or 1. A simple and efficient method for its
solution is given in Sect. 4. As a result of its application, we set PN .E0 ; E1 / D P .Nv/.
   As for v, we can specify it as the best feasible solution (i.e., an element of V )
found so far. If no solution has been found yet, we can either set the lower bound to
1, or use an initial guess about the optimal solution (experience provides evidence
that the latter choice leads to much more rapid convergence).


3.2 Branching Rule and BB Algorithm

The result of solving Problem R.E0 ; E1 / can serve as a basis to construct a
branching rule for the binary BB tree. We adopt here the approach in which the
tree node/subset V .E0 ; E1 / is expanded (i.e., partitioned) by first picking out all
fractional values from among the values of the relaxed variables, and then rounding
to 0 and 1 a value which is the most distant from both 0 and 1. Specifically, we apply
the following steps:
1. Determine
                            .k? ; i? / D arg         min            jvki  0:5j:       (25)
                                               .k;i /2En.E0 [E1 /

   (In case there are several minimizers,
                                       ˚ randomly pick one of them.) ˚             
2. Partition V .E0 ; E1 / into V .E0 [ .k? ; i? / ; E1 / and V .E0 ; E1 [ .k? ; i? / /
   whereby two descendants of the node in question are defined.
  A recursive application of the branching rule starts from the root of the BB tree,
which corresponds to the trivial subset V .;; ;/ D V and the fully relaxed problem.
104                                                                                    D. Uciński


Each node of the BB tree corresponds to a continuous relaxed problem, R.E0 ; E1 /,
while each edge corresponds to fixing one relaxed variable at 0 or 1.
   The above scheme has to be complemented with a search strategy to incre-
mentally explore all the nodes of the BB tree. Here we use a common depth-first
technique [69,70] which always expands the deepest node in the current fringe of the
search tree. The reason behind this decision is that the search proceeds immediately
to the deepest level of the search tree, where the nodes have no successors [26]. In
this way, lower bounds on the optimal solution can be found or improved as fast as
possible.
   A recursive version of the resulting depth-first branch-and-bound is implemented
in Algorithm 1. The operators involved in this implementation are as follows:
• SINGULARITY-TEST(E0 ; E1 ) returns true only if expansion of the current node
  will result in a singular FIM, see Sect. 4.2 for details.
• RELAXED-SOLUTION(E0 ; E1 ) returns a solution to Problem R.E0 ; E1 /.
• DET-FIM(v) returns the log-determinant of the FIM corresponding to v.
• INTEGRAL-TEST(v) returns true only if the current solution v is integral.
• INDEX-BRANCH(v) returns the pair of indices defined by (25).


Algorithm 1 A recursive version of the depth-first branch-and-bound method. It
uses two global variables, LOWER and v best, which are respectively the maximal
value of the FIM determinant over feasible solutions found so far and the solution
at which it is attained
 1: procedure RECURSIVE-DFBB(E0; E1 )
 2:    if E0 [ E1 D E then                        F Deepest level of the BB tree has been attained
 3:        det v      DET-FIM.v.E0 ; E1 / /
 4:        if det v > LOWER then
 5:             v best     v.E0 ; E1 /
 6:             LOWER        det v
 7:        end if
 8:        return
 9:    end if
10:    if SINGULARITY-TEST(E0; E1 ) then
11:        return                                      F Only zero determinants can be expected
12:    end if
13:    v relaxed       RELAXED -SOLUTION.E0 ; E1 /
14:    det relaxed       DET-FIM.v relaxed /
15:    if det relaxed  LOWER then
16:        return                                                                       F Pruning
17:    else if INTEGRAL-TEST(v relaxed ) then
18:        v best      v relaxed
19:        LOWER         det relaxed
20:        return                                                   F Relaxed solution is integral
21:    else
22:        .k? ; i? /   INDEX -BRANCH  ˚ .v relaxed
                                                 /              F Partition into two descendants
23:        RECURSIVE-DFBB(E0 [ .k?˚; i? / ; E1 )
24:        RECURSIVE-DFBB(E0; E1 [ .k? ; i? / )
25:    end if
26: end procedure
An Optimal Scanning Sensor Activation Policy                                             105


4 Simplicial Decomposition for Solving the Relaxed Problem

4.1 Optimality Conditions

The non-leaf nodes of the BB tree are processed by relaxing the original combina-
torial problem, which directly leads to Problem R.E0 ; E1 /. This section provides
a detailed exposition of a simplicial decomposition method which is particularly
suited for its solution.
   For notational convenience, for each k D 1; : : : ; K we define the sets
                          n ˇ                            o
                             ˇ
                 I 1 .k/ D i ˇ 1 i I and .k; i / 2 E1 ;                       (26)
                          n  ˇ                           o
                             ˇ
                 I 0 .k/ D i ˇ 1 i I and .k; i / 2 E0 ;                       (27)
                          n ˇ                                        o
                              ˇ
                      K D k ˇ 1 k K and j I 1 .k/ [ I 0 .k/j < I :            (28)

Thus, at Stage k, sets I 1 .k/ and I 0 .k/ consist of the indices of sites for which
the associated variables vki are fixed at 1 and 0, respectively, and hence cannot be
qualified as relaxed, while K contains the indices of the stages at which there are
relaxed variables.
   Consider any bijection − from f1; : : : ; Lg to K , where L D j K j. For each
l D 1; : : : ; L, setting

                             rl D n  j I 1 .−.l//j;                                    (29)
                             ql D I  j I 1 .−.l// [ I 0 .−.l//j;                       (30)

we can then construct a bijection %l from f1; : : : ; ql g to I n . I 1 .−.l// [ I 0 .−.l///.
Thus, ql stands for the number of relaxed variables at Stage −.l/ and rl signifies the
number of sensors which still remain to be activated at the same stage.
   Accordingly, we can replace the relaxed variables vki , .k; i / 2 E n .E0 [ E1 / by
wlj such that wlj D v−.l/;%l .j /, j D 1; : : : ; ql and l D 1; : : : ; L. This leads to the
following formulation:


   Problem R0 .E0 ; E1 /: Find a sequence

                   w D .w1;1 ; : : : ; w1;q1 ; : : : ; wL;1 ; : : : ; wL;qL / 2 Rf   (31)
                 PL
   where f D       lD1 ql , to maximize
                                                        
                                   Q .w/ D log det G .w/                             (32)
106                                                                                               D. Uciński



        subject to the constraints

                    X
                    ql
                           wlj D rl ;    l D 1; : : : ; L;                                           (33)
                    j D1

                    0      wlj    1;    j D 1; : : : ; ql ;         l D 1; : : : ; L;                (34)

   where

                                 X
                                 L X
                                   ql
                                                                       X
                                                                       K X
               G .w/ D A C                   wlj S lj ;         AD                       M ki ;      (35)
                                 lD1 j D1                              kD1 i 2 I 1 .k/

                   S lj D M −.l/;%l .j / ;      j D 1; : : : ; ql ;       l D 1; : : : ;             (36)



   (Note that at Stage −.l/ we have that j I 1 .−.l//j sensors have already been
activated at locations x i , i 2 I 1 .−.l//, and thus a decision about the activation
of rl remaining sensors has to be made.)
   In the sequel, W will stand for the set of all vectors w of the form (31) satisfy-
ing (33) and (34). Note that it forms a polygon in Rf . Recall that the log-determinant
is concave and strictly concave over the cones Sm       C and SCC , respectively, cf.
                                                                 m

[9, 64]. Thus the objective function (32) is concave as the composition of the
log-determinant with an affine mapping, see [9, p. 79]. We wish to maximize
it over the polyhedral set W . If the FIM corresponding to an optimal solution
w? is nonsingular, then an intriguing form of the optimality conditions can be
derived.
Proposition 1. Suppose that the matrix G .w? / is nonsingular for some w? 2 W .
The vector w? constitutes a global solution to Problem R0 .E0 ; E1 / if, and only if,
there exist numbers ?l , l D 1; : : : ; L such that
                                         8
                                         ˆ
                                         < l
                                         ˆ                 if w?lj D 1;
                                             ?

                            '.l; j; w? / D ?l             if 0 < w?lj < 1;                             (37)
                                        ˆ
                                        :̂ ?              if w?lj D 0,
                                                   l


where

          '.l; j; w/ D trace G 1 .w/S lj ;               j D 1; : : : ; ql ;    l D 1; : : : ; L:      (38)

   Proposition 1 reveals one characteristic feature of the optimal solutions, namely
that, when identifying them, the function ' turns out to be crucial and optimality
means separability of the components of w? in terms of the values of this
An Optimal Scanning Sensor Activation Policy                                             107


function. Specifically, for each l D 1; : : : ; L the values of '.l;  ; w? / for the indices
corresponding to the fractional components of w?lj , j D 1; : : : ; ql must be equal to
some constant ?l , whereas for the components taking the value 0 or the value 1 the
values of '.l;  ; w? / must be no larger and no smaller than ?l , respectively.



4.2 Handling Singular Information Matrices

Note that the assumption that G .w/ is nonsingular can be dropped, since there is a
very simple method to check whether or not the current relaxed problem will lead
to a FIM which is nonsingular.
Proposition 2. The FIM corresponding to the solution to Problem R0 .E0 ; E1 / is
singular if and only if so is G .w/,
                                 N where

                   wN D .r1 =q1 ; : : : ; r1 =q1 ; : : : ; rL =qL ; : : : ; rL =qL /:   (39)
                         „        ƒ‚           …           „        ƒ‚           …
                                  q1 times                        qL times

                                                             P               Pql
                                                 N DAC L
   Consequently, a test of the singularity of G .w/            lD1 .rl =ql /  j D1 S lj
can be built into the BB procedure in order to drop the corresponding node from
further considerations and forego the examination of its descendants. Otherwise,
the vector (39) may serve as a good starting point for the simplicial decomposition
algorithm outlined in what follows.
Remark 1. A solution to Problem R0 .E0 ; E1 / is not necessarily unique. Note,
however, that for nonsingular cases (after all, pruning discards such cases from
further consideration), the resulting FIM is unique. Indeed, Problem R0 .E0 ; E1 / can
equivalently be viewed as maximization  ˚       of P
                                                   the log-determinant over the convex and
                                                     ql
compact set of matrices M D G .w/ j                  j D1 wlj D rl ; 0      wlj      1; j D
                                    
1; : : : ; ql ; and l D 1; : : : ; L . But the log-determinant is strictly concave over the
cone of positive-definite matrices, Sm     CC , which constitutes the interior of SC relative
                                                                                   m

to Sm , and this fact implies the unicity of the optimal FIM.



4.3 Simplicial Decomposition

Simplicial Decomposition (SD) constitutes an important class of methods for
solving large-scale continuous problems in mathematical programming with convex
feasible sets [7, 32, 59]. In the original framework, where a concave objective
function is to be maximized over a bounded polyhedron, it iterates by alternately
solving a linear programming subproblem (the so-called column generation prob-
lem) which generates an extreme point of the polyhedron, and a nonlinear restricted
master problem (RMP) which finds the maximum of the objective function over the
108                                                                                                 D. Uciński


convex hull (a simplex) of previously defined extreme points. This basic strategy
of simplicial decomposition has appeared in numerous references [29, 30, 95],
where possible improvements and extensions have also been discussed. A principal
characteristic of an SD method is that the sequence of successive solutions to the
master problem tends to a solution to the original problem in such a way that the
objective function strictly monotonically approaches its optimal value.
   Problem R0 .E0 ; E1 / is perfectly suited for the application of the SD scheme. In
this case, it boils down to Algorithm 2. Here r Q .w/ signifies the gradient of Q at
w, and it is easy to check that

                                       @ Q .w/
                                               D trace.G 1 .w/S lj /                                     (40)
                                        @wlj

   Since we deal with maximization of a concave function Q over a bounded
polyhedral set W , the convergence of Algorithm 2 in a finite number of RMP steps is
automatically guaranteed [7,32, p. 221]. Observe that Step 3 implements the column
dropping rule [59], according to which any extreme point with zero weight in the
expression of w. / as a convex combination of elements in Z . / is removed. This
rule makes the number of elements in successive sets Z . / reasonably low.


Algorithm 2 Algorithm model for simplicial decomposition
Step 0.          (Initialization)
Set
                             w.0/ D .r1 =q1 ; : : : ; r1 =q1 ; : : : ; rL =qL ; : : : ; rL =qL /:
                                     „        ƒ‚           …           „        ƒ‚           …
                                               q1 times                        qL times
               ˚    
and Z   .0/
              D w.0/ . Select 0 <   1, a parameter used in the stopping rule, and set  D 0.
Step 1.   (Solution of the column generation subproblem)
Determine
                             z D arg max r Q .w./ /T .w  w./ /:                                        (41)
                                                 w2W

Step 2.       (Termination check)                                                               ˚
If r Q .w./ /T .z  w./ /  , then STOP and w./ is optimal. Otherwise, set Z .C1/ D Z ./ [ z .
Step 3.          (Solution of the restricted master problem)
Find
                                         w.C1/ D arg            max          Q .w/                       (42)
                                                            w2co.Z . C1/ /

and purge Z .C1/ of all extreme points with zero weight in the expression of w.C1/ as a convex
combination of elements in Z .C1/ . Increment  by one and go back to Step 1.



   The SD algorithm may be viewed as a form of modular nonlinear programming,
provided that one has an effective computer code for solving the restricted master
problem, as well as access to a code which can take advantage of the linearity of the
column generation subproblem [30]. The former issue will be addressed in the next
subsection, where an extremely simple and efficient multiplicative algorithm for
An Optimal Scanning Sensor Activation Policy                                                                    109


weight optimization will be discussed. In turn, the latter issue can be easily settled,
as in the linear programming problem
                                  P      of Step 1 the feasible region W is defined by
L equality constraints (33) and L       q
                                    lD1 l bound constraints (34). Note, however, that
the positive definiteness of the matrix G 1 .w. / / and the nonnegative definiteness
of S lj taken in conjunction with (40) imply that @ Q .w. / /=@wlj  0. Hence it is
easily seen that the column generation subproblem has an explicit solution where
for each l D 1; : : : ; L the relaxed weights wlj corresponding to rl largest values
selected from among @ Q .w. / /=@wlj , j D 1; : : : ; ql are set to unity, the others being
zero. Consequently, no specialized linear programming code is needed. This greatly
simplifies the implementation and constitutes a clear advantage of the presented
approach.


4.4 Solution of the Restricted Master Problem

Suppose that in the . C 1/-th iteration of Algorithm 2, we have
                                                    ˚               
                                          Z . C1/ D z1 ; : : : ; zs ;                                         (43)

possibly with s <  C 1 owing to the built-in deletion mechanism of points in Z .i / ,
1     i     , which did not contribute to the convex combinations yielding the
corresponding iterates w.`/ . Step 3 of Algorithm 2 involves maximization of the
design criterion (32) over
                                (                                                  )
                                    X
                                    s          ˇ                           X
                                                                           s
                  . C1/                        `ˇ
           co.Z            /D             ˛` z ˇ ˛`  0; ` D 1; : : : ; s;   ˛` D 1 :                          (44)
                                    `D1                                             `D1


   From the representation of any w 2 co.Z . C1/ / as

                                                      X
                                                      s
                                                wD          ˛` z` ;                                            (45)
                                                      `D1

or, in component-wise form,

                            X
                            s
                  wlj D             ˛` z`lj ;    j D 1; : : : ; ql ;      l D 1; : : : ; L;                    (46)
                            `D1

it follows that
                                                        0                                 1
                  X
                  L X
                    ql
                                                X
                                                s                     X
                                                                      L X
                                                                        ql
                                                                                                 X
                                                                                                 s
 G .w/ D A C                    wlj S lj D            ˛` @A C                    z`lj S lj A D         ˛` G .z` /:
                   lD1 j D1                     `D1                   lD1 j D1                   `D1
                                                                                                               (47)
110                                                                                D. Uciński


From this, we see that the RMP can equivalently be formulated as the following
problem:


   Problem PRMP : Find the sequence of weights ˛ D .˛1 ; : : : ; ˛s / to maximize
                                                       
                                  T .˛/ D log det H .˛/                              (48)

   subject to the constraints

                               X
                               s
                                      ˛` D 1;                                        (49)
                                `D1

                                      ˛`  0;         ` D 1; : : : ; s;              (50)

   where
                                      X
                                      s
                        H .˛/ D             ˛` Q` ;         Q` D G .z` /:            (51)
                                      `D1




    Basically, since the constraints (49) and (50) define the probability simplex Ps
in Rs , i.e., a very nice convex feasible domain, it is intuitively appealing to deter-
mine optimal weights using a numerical algorithm specialized for solving convex
optimization problems. But another, much simpler technique can be employed to
suitably guide weight calculation. It fully exploits the specific form of the objective
function (48) by giving Problem PRMP an equivalent probabilistic formulation.
Specifically, the nonnegativeness of the weights z`lj and the nonnegative definiteness
of the matrices A and S lj for j D 1; : : : ; ql and l D 1; : : : ; L, imply that Q`  0,
` D˚ 1; : : : ; s. Defining X as a discrete random variable which may take values in the
set 1; : : : ; s and treating the weights ˛` , ` D 1; : : : ; s as the probabilities attached
to its possible numerical values, i.e.,

                      p X .`/ D P. X D `/ D ˛` ;               ` D 1; : : : ; s;         (52)

we can interpret p X as the probability mass function (pmf) of X and H .˛/ D
P  s
   `D1 ˛` Q` in (48) as the P-weighted mean of the function Q W ` 7! Q` .
Therefore, Problem P RMP can be thought of as that of finding a probability mass
function maximizing the log-determinant of the mean of Q . This formulation has
captured close attention in optimum experimental design theory, where various
characterizations of optimal solutions and efficient computational schemes have
been proposed [3, 24, 98]. In particular, in the case of the D-optimality criterion
studied here, we can prove the following conditions for global optimality [81, 92]:
An Optimal Scanning Sensor Activation Policy                                                    111


Proposition 3. Suppose that the matrix H .˛? / is nonsingular for some ˛? 2 Ps .
The vector ˛? constitutes a global solution to Problem PRMP if and only if
                                             (
                                                 Dm   if ˛?` > 0;
                                   .`; ˛ /
                                         ?
                                                                                               (53)
                                                  m   if ˛?` D 0

for each ` D 1; : : : ; s, where

                        .`; ˛/ D trace H 1 .˛/Q` ;           ` D 1; : : : ; s:                (54)

   A very simple and numerically effective sequential procedure was devised and
analysed in [60, 71, 76–78] for the case of rank-one matrices Q` , which was then
extended to the general case in [81, p. 62]. Its version adapted to the RMP proceeds
as summarized in Algorithm 3. Clear advantages here are ease of implementation
and negligible additional memory requirements.


Algorithm 3 Algorithm model for the restricted master problem
Step 0: (Initialization)
                    .0/
   Select weights ˛` > 0, ` D 1; : : : ; s which determine the initial pmf p X .0/ for which we must
                                   .0/
   have T .˛.0/ / > 1, e.g., set ˛` D 1=s, ` D 1; : : : ; s. Choose 0 <  1, a parameter used
   in the stopping rule. Set D 0.
Step 1: (Termination check)
   If
                                  .`; ˛. / /
                                               < 1 C ; ` D 1; : : : ; s;                        (55)
                                    m
   then STOP.
Step 2: (Multiplicative update)
   Evaluate
                              . C1/        . /   .`; ˛. / /
                             ˛`      D ˛`                   ; ` D 1; : : : ; s:                 (56)
                                                   m
   Increment by one and go to Step 1.



   The idea is reminiscent of the EM algorithm used for maximum likelihood
estimation [43]. The properties of this computational scheme are considered in some
detail in [81]. Suffice it to say here that Algorithm 3 is globally convergent regardless
of the choice of initial weights (they must only be all nonzero and correspond to a
nonsingular FIM). Indeed, we have the following result [81, p. 65]:
                                  ˚     
Proposition 4. Assume that ˛. / is a sequence of iterates constructed by Algo-
                                ˚         
rithm 3. Then the sequence T .˛. / / is monotone increasing and

                                   lim T .˛. / / D max T .˛/:                                  (57)
                                   !1                 ˛2Ps
112                                                                                           D. Uciński


   The basic scheme of Algorithm 3 can be refined to incorporate various improve-
ments which make convergence much faster. For example, produced solutions often
happen to contain many insignificant weights ˛` , which results from a limited
accuracy of computations and the interruption of Algorithm 3 after a finite number
of steps. In practice, these weights may well be disregarded since setting them as
zeros and distributing the sum of their values among the remaining weights (so as
not to violate (49)) involves a negligible change in the value of the performance
measure T .˛. / /. The sum of the weights removed can be distributed among the
other weights for which .`; ˛. / / > m, and additionally, in a manner proportional
to .`; ˛. / /  m.
   Another improvement is due to [63] where a simple method was proposed to
identify elements of Z . C1/ which do not contribute to the sought optimal convex
combination in co.Z . C1/ /. It can be generalized to the general case considered
here and used during the search to discard such useless points “on the fly,” thereby
substantially reducing the problem dimensionality.



5 Numerical Example

Consider the following numerical example serving as a test for the solution
techniques proposed in this paper. The point of departure is the two-dimensional
diffusion equation
                                                                                  
      @y.x; t/    @                 @y.x; t/            @                 @y.x; t/
               D           .xI ™/                  C             .xI ™/                  C u.x; t/;
        @t       @x1                  @x1              @x2                  @x2
       x 2 ˝ D .0; 1/  .0; 1/;        t 2 .0; 1/                                                     (58)

subject to the conditions

                            y.x; 0/ D 0; x 2 ˝;
                            y.x; t/ D 0; .x; t/ 2 @˝  T:

The diffusion coefficient to be identified has the form

                               .xI ™/ D ™1 C ™2 x1 C ™3 x2 :                                          (59)

As regards the forcing term in our model, it has the form
                                                         
                            u.x; t/ D 20 exp 50.x1  t/2                                             (60)

which mimics the action of a line source whose support is constantly oriented along
the x2 -axis and moves with constant speed from the left to the right boundary of
˝. Our purpose is to estimate (i.e., the parameters ™1 , ™2 and ™3 ) as accurately
An Optimal Scanning Sensor Activation Policy                                                           113


      1                                                         1


     0.8                                                       0.8


     0.6                                                       0.6




                                                          x2
x2




     0.4                                                       0.4


     0.2                                                       0.2


      0                                                         0
           0    0.2    0.4        0.6    0.8          1              0   0.2    0.4        0.6   0.8     1
                             x1                                                       x1

                       (a) n = 10                                              (b) n = 100

Fig. 1 D-optimal configurations of active sensors without scanning (K D 1, I D 900)


as possible based on the measurements made by n scanning sensors. In the case
considered, the D-optimum design criterion was chosen as the measure of the
estimation accuracy. A uniform mesh of I D 30  30 D 900 points was thus assumed
as the set of sites where sensor network nodes are placed (they are marked with
dots in Figs. 1–3). Our task consists in selecting the best from them which will be
activated.
   The determination of the information matrix requires the knowledge of the
sensitivity coefficients (9) with components
                                          ˇ                                           ˇ
                             @y.x; tI #/ ˇˇ                              @y.x; tI #/ ˇˇ
               g1 .x; t/ D                ˇ       ;       g2 .x; t/ D                 ˇ      ;
                                @#1         # D™0                           @#2         #D™0
                                                              ˇ
                                                 @y.x; tI #/ ˇˇ
                                   g3 .x; t/ D                ˇ      ;
                                                    @#3         #D™0


computed at the assumed nominal values ™10 D 0:1, ™20 D 0:05 and ™30 D 0:2. They
can be obtained by solving the following system of PDEs:
                              8
                              ˆ   @y
                              ˆ
                              ˆ      D r  . ry/ C u;
                              ˆ
                              ˆ   @t
                              ˆ
                              ˆ
                              ˆ
                              ˆ  @g1
                              ˆ
                              ˆ      D r  ry      C r  . rg1 /;
                              <
                                  @t
                                                                                                       (61)
                              ˆ
                              ˆ  @g2
                              ˆ
                              ˆ      D r  .x1 ry/ C r  . rg2 /;
                              ˆ
                              ˆ
                              ˆ
                              ˆ
                                  @t
                              ˆ
                              ˆ @g3
                              :̂     D r  .x2 ry/ C r  . rg3 /:
                                  @t
114                                                                                    D. Uciński

       1                                              1


      0.8                                         0.8


      0.6                                         0.6
  x2




                                                 x2
      0.4                                         0.4


      0.2                                         0.2


       0                                              0
            0   0.2   0.4        0.6   0.8   1            0   0.2   0.4        0.6   0.8     1
                            x1                                            x1
                      (a) k = 1                                     (b) k = 2
       1                                              1


      0.8                                         0.8


      0.6                                         0.6
  x2




                                                 x2




      0.4                                         0.4


      0.2                                         0.2


       0                                              0
            0   0.2   0.4        0.6   0.8   1            0   0.2   0.4        0.6   0.8     1
                            x1                                            x1
                      (c) k = 3                                     (d) k = 4
       1                                              1


      0.8                                         0.8


      0.6                                         0.6
  x2




                                                 x2




      0.4                                         0.4


      0.2                                         0.2


       0                                              0
            0   0.2   0.4        0.6   0.8   1         0      0.2   0.4        0.6   0.8     1
                            x1                                            x1
                      (e) k = 5                                     (f ) k = 6

Fig. 2 D-optimal configurations of active sensors at consecutive stages (K D 6, I D 900,
n D 10)
An Optimal Scanning Sensor Activation Policy                                              115


        1                                           1


      0.8                                          0.8


      0.6                                          0.6
   x2




                                               x2
      0.4                                          0.4


      0.2                                          0.2


        0                                           0
            0   0.2   0.4        0.6   0.8     1         0   0.2   0.4        0.6   0.8   1
                            x1                                           x1
                       (a) k = 1                                   (b) k = 2
        1                                           1


      0.8                                          0.8


      0.6                                          0.6
   x2




                                               x2




      0.4                                          0.4


      0.2                                          0.2


        0                                           0
            0   0.2   0.4        0.6   0.8     1     0       0.2   0.4        0.6   0.8   1
                            x1                                           x1
                       (c) k = 3                                   (d) k = 4
        1                                           1


      0.8                                          0.8


      0.6                                          0.6
   x2




                                               x2




      0.4                                          0.4


      0.2                                          0.2


        0                                           0
            0   0.2   0.4        0.6   0.8     1         0   0.2   0.4        0.6   0.8   1
                            x1                                           x1
                       (e) k = 5                                   (f ) k = 6

Fig. 3 D-optimal configurations of active sensors at consecutive stages (K D 6, I D 900,
n D 100)
116                                                                             D. Uciński


The first equation constitutes the original state equation (58) and the second, third
and fourth equations result from its differentiation with respect to ™1 , ™2 and ™3 ,
respectively. The initial and Dirichlet boundary conditions for all the four equations
are homogeneous (i.e., they are zero).
    The solution to (61) is found numerically using the MATLAB PDE toolbox.
Although it is impossible to employ its handy graphical user interface (it is tailored
to single PDEs, and not to systems of PDEs), we can still solve (61) using command-
line functions.
    First, based on the technique outlined in [92], D-optimal positions of active
sensors were determined for the case of n D 10 and n D 100 sensors to be activated,
cf. Fig. 1 (open circles denote the bestpoints for locating measurement sensors). The
                                              900
numbers of feasible solutions are 900 10  and                           22
                                                100 , which exceed 910 and 910
                                                                                      134
                                                                                          ,
respectively. Then, using the approach described in this paper, the observation
horizon was decomposed into K D 6 stages of equal length. This expanded the sizes
                             6                          6
of the solutions spaces to 90010    > 5  10137 and 900   100  > 6  10809 , respectively.
In spite of that, it was still possible to obtain the optimal solutions displayed in
Figs. 2 and 3 in no more than twenty seconds on a low-cost laptop (Pentium IV,
2.40 GHz, 496 MB RAM) running Windows XP Professional and MATLAB 7.1.
The parameters required by Algorithms 2 and 3 were set as  D 0:01 and D 0:01,
respectively. This surprisingly fine performance was possible owing to a good initial
lower bound on the optimal solution which permitted to economize computation
by eliminating nodes of the BB tree that have no chance of containing an optimal
solution. It was obtained by solving a fully relaxed problem and activating sensors
which corresponded to the largest weights. Otherwise, the solutions obtained by
literally following Algorithm 1 consumed about 15 min of the CPU time, which is
not bad, either.
    Observe that the values of the diffusion coefficient .x/ in the upper left of ˝ are
greater than those in the lower right. This means that the state changes during the
system evolution are quicker when we move up and to the left (on the other hand,
the system would have reached the steady state there earlier). This fact explains the
form of the configurations obtained—the sensors switch to new positions so as to
follow the moving source while measuring the state in the regions where the DPS is
the most sensitive with respect to the unknown parameter , finally terminating the
movement in the lower right part of the domain ˝.
    Finally, remark that, as was expected, the scanning observations substantially
influence the attainable values of the D-optimality criterion since the ratios of these
values for scanning and stationary cases are 10.075 and 5.438 for n D 10 and
n D 100, respectively.


6 Conclusions

The problem of finding optimal activation policies for sensor network nodes
deployed throughout a spatial domain in view of accurate parameter estimation
for parameter distributed systems was examined on the assumption that the modes
An Optimal Scanning Sensor Activation Policy                                       117


of the node operation can be changed at given time moments, which corresponds
to the so-called scanning observations. Ordinarily, the task is reduced to seeking
best subsets of locations from among all the possible ones. Numerical algorithms
for the construction of optimum sensor configurations by searching over a list
of candidate locations customarily involve an iterative improvement of the initial
sensor configuration. The combinatorial nature of the problem so formulated implies
that with a long list of candidate points, complicated search algorithms can readily
consume appreciable computer time and space. In contrast to this approach, a guided
search using a branch-and-bound technique was proposed here. This constitutes
quite a natural option, but the main problem when trying to implement it has been
the lack of a low-cost procedure to obtain upper bounds to the optimal values
of the D-optimality criterion. The main contribution of this paper consists in the
development of an efficient computational scheme to produce such bounds. This
was possible by adapting a specialized multiplicative algorithm for determinant
maximization, which is in common use by statisticians concerned with optimum
experimental design. The link to plug this algorithm into the proposed scheme
was a simplicial decomposition being perfectly suited for large-scale problems
which can be encountered here. The idea of its application in the context of D-
optimally activating sensor nodes is an extension of the approach set forth in
[92]. Consequently, the proposed method can be implemented with great ease and
experience provides evidence that, with this tool, even large-scale design problems
can be solved using an off-the-shelf PC.
    In addition to the algorithmic part of the paper, a characterization of the optimal
solutions to specific subproblems discussed in Proposition 1 was obtained. The
corresponding proof proceeds here based on the Karush–Kuhn–Tucker conditions.
    Let us remark that an alternative approach to select a best n-element subset
active sensors from among a given I -element set of all candidate sensors could
be to employ an exchange algorithm. Typically, algorithms of this type begin with
an n-point starting sensor configuration which then sequentially evolves through
addition of new elements selected from among vacant sites and deletion of sites at
which sensors have provisionally been planned to reside, in an effort to improve
the value of the adopted design criterion [48]. Accordingly, a one-point exchange
procedure was used in [91] and further developed in [81, p. 105] in a scanning sensor
setting, based on the concept of replication-free designs set forth in [23]. Note,
however, that this approach is warranted only when the number of activated sensors
is comparatively high. Perhaps an efficient extension of this idea could be to adapt
the fast algorithm based on multiple simultaneous exchanges, which was developed
in [42]. A step in this direction was made in [46] who refined it and applied the
resulting “sort-and-cut” technique to solve an E-optimum sensor selection problem.
It is beyond doubt that all these approaches outperform the BB technique proposed
here as far as the running time is concerned. On should note, however, that exchange
algorithms are only capable of finding globally competitive solutions (i.e., nearly
optimal ones), with an explicit trade of global optimality for speed. The approach
presented here is superior in the sense that it always produces global maxima and,
what is more, does it within tolerable time.
118                                                                                                   D. Uciński


Acknowledgements This work was supported by the Polish Ministry of Science and Higher
Education under grant No. N N519 2971 33.




Appendix 1: Proof of Proposition 1

Problem R0 .E0 ; E1 / can be rewritten as follows: Find w? 2 Rf to minimize
                                                            
                                     e
                                     Q .w/ D  log det G .w/                                                (62)

subject to the constraints

                 X
                 ql
                        wlj  rl D 0;           l D 1; : : : ; L;                                           (63)
                 j D1

                          wlj             0;   j D 1; : : : ; ql ;   l D 1; : : : ; L                      (64)
                        wlj  1            0;   j D 1; : : : ; ql ;   l D 1; : : : ; L:                     (65)

Associating the dual variables

       l 2 R;     lj 2 RC ;             lj 2 RC ;      j D 1; : : : ; ql ;      l D 1; : : : ; L           (66)

with constraints (63)–(65), respectively, we define the Lagrangian of (62)–(65) as

L .w; ; ; / D  log det .G .w//
                         0              1
                  XL        X
                            ql
                                           X
                                           L X
                                             ql
                                                                                     X
                                                                                     L X
                                                                                       ql
                                                                                                            
                C     l @     wlj  rl A                            lj wlj C                  lj    wlj  1 :
                    lD1             j D1                  lD1 j D1                   lD1 j D1
                                                                                                            (67)

An easy computation shows that

                          @L
                               D '.l; j; w/ C l                    lj C    lj :                          (68)
                          @wlj

   Let us examine the first-order Karush–Kuhn–Tucker (KKT) conditions for our
problem [7]:

      '.l; j; w/ C l           lj C     lj D 0;        j D 1; : : : ; ql ; l D 1; : : : ; L;             (69)
                                     j wlj D 0;           j D 1; : : : ; ql ; l D 1; : : : ; L;             (70)
                                          
                         lj       wlj  1 D 0;            j D 1; : : : ; ql ; l D 1; : : : ; L;             (71)
An Optimal Scanning Sensor Activation Policy                                                      119


                                          lj  0;         j D 1; : : : ; ql ; l D 1; : : : ; L;   (72)
                                          lj  0;         j D 1; : : : ; ql ; l D 1; : : : ; L;   (73)
                                 0      wlj       1;      j D 1; : : : ; ql ; l D 1; : : : ; L;   (74)
                                 X
                                 ql
                                        wlj D rl ;         l D 1; : : : ; L:                      (75)
                                 j D1


For problems with constraints which are both linear and linearly independent, as
is the case here, the KKT conditions are necessary for optimality. Additionally, the
convexity of the objective function (62) implies that they also become sufficient.
Consequently, the optimality of w? amounts to the existence of some values of l ,
  lj and lj , j D 1; : : : ; ql and l D 1; : : : ; L, denoted by l , lj and lj , j D
                                                                        ?   ?        ?

1; : : : ; ql and l D 1; : : : ; L, respectively, such that (69)–(75) are satisfied.
    Suppose that w?lj D 1 for some pair of indices .l; j /. Then from (70) it follows
that ?lj D 0 and, therefore, (69) reduces to

                                     '.l; j; w? / D ?l C      lj  l ;
                                                               ?     ?
                                                                                                  (76)

the last inequality owing to (73). In turn, on account of (71), the assumption w?lj D 0
yields lj? D 0, and then (69) simplifies to

                                     '.l; j; w? / D ?l       ?
                                                               lj    ?l ;                        (77)

which is owing to (72). Finally, by (70) and (71), the assumption 0 < w?lj < 1
clearly forces ?lj D lj? D 0, for which (69) gives

                                              '.l; j; w? / D ?l ;                                (78)

   Conversely, having found w? 2 Rf and ?l 2 R, l D 1; : : : ; L for which (37) is
fulfilled, we can define

          lj D max.l  '.l; j; w /; 0/;                   lj D max.'.l; j; w /  l ; 0/;
          ?         ?            ?                         ?                 ?     ?


           j D 1; : : : ; ql ;        l D 1; : : : ; L;                                           (79)

which guarantees the satisfaction of (69)–(75). This means that w? is a KKT point
and this is equivalent to its global optimality.


Appendix 2: Proof of Proposition 2
                  ˚                    
Setting c D max q1 =r1 ; : : : ; qL =rL , observe that the following Löwner ordering
                        f
holds true for any w 2 RC :
120                                                                                      D. Uciński

                                                  0                          1
                         X
                         L X
                           ql
                                                          X
                                                          L X
                                                            ql
  0     G .w/ D A C                 wlj S lj   c @A C                 wN lj S lj A D c G.w/:
                                                                                         N     (80)
                         lD1 j D1                          lD1 j D1


A fundamental property of the determinant is that it preserves this monotonicity [33,
Corr. 7.7.4], which gives
                                                                 
                             0      det G .w/         c m det G .w/
                                                                 N :                           (81)

This makes our claim obvious.



References

 1. Amouroux, M., Babary, J.P.: Sensor and control location problems. In: M.G. Singh (ed.)
    Systems & Control Encyclopedia. Theory, Technology, Applications, vol. 6, pp. 4238–4245.
    Pergamon Press, Oxford (1988)
 2. Armstrong, M.: Basic Linear Geostatistics. Springer-Verlag, Berlin (1998)
 3. Atkinson, A.C., Donev, A.N., Tobias, R.D.: Optimum Experimental Designs, with SAS.
    Oxford University Press, Oxford (2007)
 4. Banks, H.T., Kunisch, K.: Estimation Techniques for Distributed Parameter Systems. Systems
    & Control: Foundations & Applications. Birkhäuser, Boston (1989)
 5. Banks, H.T., Smith, R.C., Wang, Y.: Smart Material Structures: Modeling, Estimation and
    Control. Research in Applied Mathematics. Masson, Paris (1996)
 6. Bensoussan, A., Da Prato, G., Delfour, M.C., Mitter, S.K.: Representation and Control of
    Infinite Dimensional Systems, 2nd edn. Birkhäuser, Boston (2007)
 7. Bertsekas, D.P.: Nonlinear Programming, 2nd edn. Optimization and Computation Series.
    Athena Scientific, Belmont, MA (1999)
 8. Boer, E.P.J., Hendrix, E.M.T., Rasch, D.A.M.K.: Optimization of monitoring networks for
    estimation of the semivariance function. In: A.C. Atkinson, P. Hackl, W. Müller (eds.) mODa
    6, Proc. 6th Int. Workshop on Model-Oriented Data Analysis, Puchberg/Schneeberg, Austria,
    2001, pp. 21–28. Physica-Verlag, Heidelberg (2001)
 9. Boyd, S., Vandenberghe, L.: Convex Optimization. Cambridge University Press, Cambridge
    (2004)
10. Cassandras, C.G., Li, W.: Sensor networks and cooperative control. European Journal of
    Control 11(4–5), 436–463 (2005)
11. Chong, C.Y., Kumar, S.P.: Sensor networks: Evolution, opportunities, and challenges. Proceed-
    ings of the IEEE 91(8), 1247–1256 (2003)
12. Christofides, P.D.: Nonlinear and Robust Control of PDE Systems: Methods and Applications
    to Transport-Reaction Processes. Systems & Control: Foundations & Applications. Birkhäuser,
    Boston (2001)
13. Cook, D., Fedorov, V.: Constrained optimization of experimental design. Statistics 26, 129–178
    (1995)
14. Cressie, N.A.C.: Statistics for Spatial Data, revised edn. John Wiley & Sons, New York (1993)
15. Culler, D., Estrin, D., Srivastava, M.: Overview of sensor networks. IEEE Computer 37(8),
    41–49 (2004)
16. Curtain, R.F., Zwart, H.: An Introduction to Infinite-Dimensional Linear Systems Theory. Texts
    in Applied Mathematics. Springer-Verlag, New York (1995)
17. Daescu, D.N., Navon, I.M.: Adaptive observations in the context of 4D-Var data assimilation.
    Meteorology and Atmospheric Physics 85, 205–226 (2004)
An Optimal Scanning Sensor Activation Policy                                                    121


18. Demetriou, M.A.: Detection and containment policy of moving source in 2D diffusion
    processes using sensor/actuator network. In: Proceedings of the European Control Conference
    2007, Kos, Greece, July 2–5 (2006). Published on CD-ROM
19. Demetriou, M.A.: Power management of sensor networks for detection of a moving source in
    2-D spatial domains. In: Proceedings of the 2006 American Control Conference, Minneapolis,
    MN, June 14–16 (2006). Published on CD-ROM
20. Demetriou, M.A.: Process estimation and moving source detection in 2-D diffusion processes
    by scheduling of sensor networks. In: Proceedings of the 2007 American Control Conference,
    New York City, USA, July 11–13 (2007). Published on CD-ROM
21. Demetriou, M.A.: Natural consensus filters for second order infinite dimensional systems.
    Systems & Control Letters 58(12), 826–833 (2009)
22. Demetriou, M.A., Hussein, I.I.: Estimation of spatially distributed processes using mobile
    spatially distributed sensor network. SIAM Journal on Control and Optimization 48(1), 266–
    291 (2009). DOI 10.1137/060677884
23. Fedorov, V.V.: Optimal design with bounded density: Optimization algorithms of the exchange
    type. Journal of Statistical Planning and Inference 22, 1–13 (1989)
24. Fedorov, V.V., Hackl, P.: Model-Oriented Design of Experiments. Lecture Notes in Statistics.
    Springer-Verlag, New York (1997)
25. Floudas, C.A.: Mixed integer nonlinear programming, MINLP. In: C.A. Floudas, P.M. Pardalos
    (eds.) Encyclopedia of Optimization, vol. 3, pp. 401–414. Kluwer Academic Publishers,
    Dordrecht, The Netherlands (2001)
26. Gerdts, M.: Solving mixed-integer optimal control problems by branch&bound: A case study
    from automobile test-driving with gear shift. Journal of Optimization Theory and Applications
    26, 1–18 (2005)
27. Gevers, M.: Identification for control: From the early achievements to the revival of experiment
    design. European Journal of Control 11(4–5), 335–352 (2005)
28. Goodwin, G.C., Payne, R.L.: Dynamic System Identification. Experiment Design and Data
    Analysis. Mathematics in Science and Engineering. Academic Press, New York (1977)
29. Hearn, D.W., Lawphongpanich, S., Ventura, J.A.: Finiteness in restricted simplicial decompo-
    sition. Operations Research Letters 4(3), 125–130 (1985)
30. Hearn, D.W., Lawphongpanich, S., Ventura, J.A.: Restricted simplicial decomposition: Com-
    putation and extensions. Mathematical Programming Study 31, 99–118 (1987)
31. Hjalmarsson, H.: From experiment design to closed-loop control. Automatica 41, 393–438
    (2005)
32. von Hohenbalken, B.: Simplicial decomposition in nonlinear programming algorithms. Math-
    ematical Programming 13, 49–68 (1977)
33. Horn, R.A., Johnson, C.R.: Matrix Analysis. Cambridge University Press, Cambridge, UK
    (1986)
34. Hussein, I.I., Demetriou, M.A.: Estimation of distributed processes using mobile spatially
    distributed sensors. In: Proceedings of the 2007 American Control Conference, New York,
    USA, July 11–13 (2007). Published on CD-ROM
35. Jain, N., Agrawal, D.P.: Current trends in wireless sensor network design. International Journal
    of Distributed Sensor Networks 1, 101–122 (2005)
36. Jeremić, A., Nehorai, A.: Design of chemical sensor arrays for monitoring disposal sites on the
    ocean floor. IEEE Transactions on Oceanic Engineering 23(4), 334–343 (1998)
37. Jeremić, A., Nehorai, A.: Landmine detection and localization using chemical sensor array
    processing. IEEE Transactions on Signal Processing 48(5), 1295–1305 (2000)
38. Kammer, D.C.: Sensor placement for on-orbit modal identification and correlation of large
    space structures. In: Proc. American Control Conf., San Diego, California, 23–25 May 1990,
    vol. 3, pp. 2984–2990 (1990)
39. Kammer, D.C.: Effects of noise on sensor placement for on-orbit modal identification of large
    space structures. Transactions of the ASME 114, 436–443 (1992)
40. Kincaid, R.K., Padula, S.L.: D-optimal designs for sensor and actuator locations. Computers &
    Operations Research 29, 701–713 (2002)
122                                                                                     D. Uciński


41. Kubrusly, C.S., Malebranche, H.: Sensors and controllers location in distributed systems — A
    survey. Automatica 21(2), 117–128 (1985)
42. Lam, R.L.H., Welch, W.J., Young, S.S.: Uniform coverage designs for molecule selection.
    Technometrics 44(2), 99–109 (2002)
43. Lange, K.: Numerical Analysis for Statisticians. Springer-Verlag, New York (1999)
44. Lasiecka, I., Triggiani, R.: Control Theory for Partial Differential Equations: Continuous and
    Approximation Theories, Encyclopedia of Mathematics and Its Applications, vol. I and II.
    Cambridge University Press, Cambridge (2000)
45. Le, N.D., Zidek, J.V.: Statistical Analysis of Environmental Space-Time Processes. Springer-
    Verlag, New York (2006)
46. Liu, C.Q., Ding, Y., Chen, Y.: Optimal coordinate sensor placements for estimating mean and
    variance components of variation sources. IEE Transactions 37, 877–889 (2005)
47. Ljung, L.: System Identification: Theory for the User, 2nd edn. Prentice Hall, Upper Saddle
    River, NJ (1999)
48. Meyer, R.K., Nachtsheim, C.J.: The coordinate-exchange algorithm for constructing exact
    optimal experimental designs. Technometrics 37(1), 60–69 (1995)
49. Müller, W.G.: Collecting Spatial Data. Optimum Design of Experiments for Random Fields,
    2nd revised edn. Contributions to Statistics. Physica-Verlag, Heidelberg (2001)
50. Munack, A.: Optimal sensor allocation for identification of unknown parameters in a bubble-
    column loop bioreactor. In: A.V. Balakrishnan, M. Thoma (eds.) Analysis and Optimization of
    Systems, Part 2, Lecture Notes in Control and Information Sciences, volume 63, pp. 415–433.
    Springer-Verlag, Berlin (1984)
51. Navon, I.M.: Practical and theoretical aspects of adjoint parameter estimation and identifiabil-
    ity in meteorology and oceanography. Dynamics of Atmospheres and Oceans 27, 55–79 (1997)
52. Nehorai, A., Porat, B., Paldi, E.: Detection and localization of vapor-emitting sources. IEEE
    Transactions on Signal Processing 43(1), 243–253 (1995)
53. Nychka, D., Piegorsch, W.W., Cox, L.H. (eds.): Case Studies in Environmental Statistics.
    Lecture Notes in Statistics, volume 132. Springer-Verlag, New York (1998)
54. Nychka, D., Saltzman, N.: Design of air-quality monitoring networks. In: D. Nychka, W.W.
    Piegorsch, L.H. Cox (eds.) Case Studies in Environmental Statistics, Lecture Notes in
    Statistics, volume 132, pp. 51–76. Springer-Verlag, New York (1998)
55. Ögren, P., Fiorelli, E., Leonard, N.E.: Cooperative control of mobile sensor networks: Adaptive
    gradient climbing in a distributed environment. IEEE Transactions on Automatic Control 49(8),
    1292–1302 (2004)
56. Omatu, S., Seinfeld, J.H.: Distributed Parameter Systems: Theory and Applications. Oxford
    Mathematical Monographs. Oxford University Press, New York (1989)
57. Patan, M.: Optimal activation policies for continous scanning observations in parameter
    estimation of distributed systems. International Journal of Systems Science 37(11), 763–775
    (2006)
58. Patan, M., Patan, K.: Optimal observation strategies for model-based fault detection in
    distributed systems. International Journal of Control 78(18), 1497–1510 (2005)
59. Patriksson, M.: Simplicial decomposition algorithms. In: C.A. Floudas, P.M. Pardalos (eds.)
    Encyclopedia of Optimization, vol. 5, pp. 205–212. Kluwer Academic Publishers, Dordrecht,
    The Netherlands (2001)
60. Pázman, A.: Foundations of Optimum Experimental Design. Mathematics and Its Applications.
    D. Reidel Publishing Company, Dordrecht, The Netherlands (1986)
61. Point, N., Vande Wouwer, A., Remy, M.: Practical issues in distributed parameter estimation:
    Gradient computation and optimal experiment design. Control Engineering Practice 4(11),
    1553–1562 (1996)
62. Porat, B., Nehorai, A.: Localizing vapor-emitting sources by moving sensors. IEEE Transac-
    tions on Signal Processing 44(4), 1018–1021 (1996)
63. Pronzato, L.: Removing non-optimal support points in D-optimum design algorithms. Statistics
    & Probability Letters 63, 223–228 (2003)
An Optimal Scanning Sensor Activation Policy                                                       123


64. Pukelsheim, F.: Optimal Design of Experiments. Probability and Mathematical Statistics. John
    Wiley & Sons, New York (1993)
65. Quereshi, Z.H., Ng, T.S., Goodwin, G.C.: Optimum experimental design for identification of
    distributed parameter systems. International Journal of Control 31(1), 21–29 (1980)
66. Rafajłowicz, E.: Design of experiments for eigenvalue identification in distributed-parameter
    systems. International Journal of Control 34(6), 1079–1094 (1981)
67. Rafajłowicz, E.: Optimal experiment design for identification of linear distributed-parameter
    systems: Frequency domain approach. IEEE Transactions on Automatic Control 28(7), 806–
    808 (1983)
68. Rafajłowicz, E.: Optimum choice of moving sensor trajectories for distributed parameter
    system identification. International Journal of Control 43(5), 1441–1451 (1986)
69. Reinefeld, A.: Heuristic search. In: C.A. Floudas, P.M. Pardalos (eds.) Encyclopedia of
    Optimization, vol. 2, pp. 409–411. Kluwer Academic Publishers, Dordrecht, The Netherlands
    (2001)
70. Russell, S.J., Norvig, P.: Artificial Intelligence: A Modern Approach, 2nd edn. Pearson
    Education International, Upper Saddle River, NJ (2003)
71. Silvey, S.D., Titterington, D.M., Torsney, B.: An algorithm for optimal designs on a finite
    design space. Communications in Statistics — Theory and Methods 14, 1379–1389 (1978)
72. Sinopoli, B., Sharp, C., Schenato, L., Schaffert, S., Sastry, S.S.: Distributed control applications
    within sensor networks. Proceedings of the IEEE 91(8), 1235–1246 (2003)
73. Song, Z., Chen, Y., Sastry, C.R., Tas, N.C.: Optimal Observation for Cyber-physical Systems:
    A Fisher-information-matrix-based Approach. Springer-Verlag, London (2009)
74. Sun, N.Z.: Inverse Problems in Groundwater Modeling. Theory and Applications of Transport
    in Porous Media. Kluwer Academic Publishers, Dordrecht, The Netherlands (1994)
75. Titterington, D.M.: Aspects of optimal design in dynamic systems. Technometrics 22(3), 287–
    299 (1980)
76. Torsney, B.: Computing optimising distributions with applications in design, estimation and
    image processing. In: Y. Dodge, V.V. Fedorov, H.P. Wynn (eds.) Optimal Design and Analysis
    of Experiments, pp. 316–370. Elsevier, Amsterdam (1988)
77. Torsney, B., Mandal, S.: Construction of constrained optimal designs. In: A. Atkinson,
    B. Bogacka, A. Zhigljavsky (eds.) Optimum Design 2000, chap. 14, pp. 141–152. Kluwer
    Academic Publishers, Dordrecht, The Netherlands (2001)
78. Torsney, B., Mandal, S.: Multiplicative algorithms for constructing optimizing distributions:
    Further developments. In: A. Di Bucchianico, H. Läuter, H.P. Wynn (eds.) mODa 7, Proc. 7th
    Int. Workshop on Model-Oriented Data Analysis, Heeze, The Netherlands, 2004, pp. 163–171.
    Physica-Verlag, Heidelberg (2004)
79. Uciński, D.: Measurement Optimization for Parameter Estimation in Distributed Systems.
    Technical University Press, Zielona Góra (1999)
80. Uciński, D.: Optimal sensor location for parameter estimation of distributed processes.
    International Journal of Control 73(13), 1235–1248 (2000)
81. Uciński, D.: Optimal Measurement Methods for Distributed-Parameter System Identification.
    CRC Press, Boca Raton, FL (2005)
82. Uciński, D.: D-optimum sensor activity scheduling for distributed parameter systems. In:
    Preprints of the 15th IFAC Symposium on System Identification, Saint-Malo, France, July 6–8,
    (2009). Published on CD-ROM
83. Uciński, D., Atkinson, A.C.: Experimental design for time-dependent models with correlated
    observations. Studies in Nonlinear Dynamics & Econometrics 8(2) (2004). Article No. 13
84. Uciński, D., Bogacka, B.: T-optimum designs for discrimination between two multivariate
    dynamic models. Journal of the Royal Statistical Society: Series B (Statistical Methodology)
    67, 3–18 (2005)
85. Uciński, D., Bogacka, B.: A constrained optimum experimental design problem for model
    discrimination with a continuously varying factor. Journal of Statistical Planning and Inference
    137(12), 4048–4065 (2007)
124                                                                                     D. Uciński


86. Uciński, D., Chen, Y.: Time-optimal path planning of moving sensors for parameter estimation
    of distributed systems. In: Proc. 44th IEEE Conference on Decision and Control, and the
    European Control Conference 2005, Seville, Spain (2005). Published on CD-ROM
87. Uciński, D., Chen, Y.: Sensor motion planning in distributed parameter systems using Turing’s
    measure of conditioning. In: Proc. 45th IEEE Conference on Decision and Control, San Diego,
    CA (2006). Published on CD-ROM
88. Uciński, D., Demetriou, M.A.: An approach to the optimal scanning measurement problem
    using optimum experimental design. In: Proc. American Control Conference, Boston, MA
    (2004). Published on CD-ROM
89. Uciński, D., Demetriou, M.A.: Resource-constrained sensor routing for optimal observation
    of distributed parameter systems. In: Proc. 18th International Symposium on Mathematical
    Theory of Networks and Systems, Blacksburg, VA, July 28–August 1 (2008). Published on
    CD-ROM
90. Uciński, D., Korbicz, J.: Optimal sensor allocation for parameter estimation in distributed
    systems. Journal of Inverse and Ill-Posed Problems 9(3), 301–317 (2001)
91. Uciński, D., Patan, M.: Optimal location of discrete scanning sensors for parameter estimation
    of distributed systems. In: Proc. 15th IFAC World Congress, Barcelona, Spain, 22–26 July
    2002 (2002). Published on CD-ROM
92. Uciński, D., Patan, M.: D-optimal design of a monitoring network for parameter estimation of
    distributed systems. Journal of Global Optimization 39, 291–322 (2007)
93. Uspenskii, A.B., Fedorov, V.V.: Computational Aspects of the Least-Squares Method in the
    Analysis and Design of Regression Experiments. Moscow University Press, Moscow (1975).
    (In Russian)
94. Vande Wouwer, A., Point, N., Porteman, S., Remy, M.: On a practical criterion for optimal
    sensor configuration — Application to a fixed-bed reactor. In: Proc. 14th IFAC World Congress,
    Beijing, China, 5–9 July, 1999, vol. I: Modeling, Identification, Signal Processing II, Adaptive
    Control, pp. 37–42 (1999)
95. Ventura, J.A., Hearn, D.W.: Restricted simplicial decomposition for convex constrained
    problems. Mathematical Programming 59, 71–85 (1993)
96. Vogel, C.R.: Computational Methods for Inverse Problems. Frontiers in Applied Mathematics.
    Society for Industrial and Applied Mathematics, Philadelphia (2002)
97. van de Wal, M., de Jager, B.: A review of methods for input/output selection. Automatica 37,
    487–510 (2001)
98. Walter, É., Pronzato, L.: Identification of Parametric Models from Experimental Data. Com-
    munications and Control Engineering. Springer-Verlag, Berlin (1997)
99. Zhao, F., Guibas, L.J.: Wireless Sensor Networks: An Information Processing Approach.
    Morgan Kaufmann Publishers, Amsterdam (2004)
Interaction Between Experiment, Modeling
and Simulation of Spatial Aspects
in the JAK2/STAT5 Signaling Pathway

Elfriede Friedmann, Andrea C. Pfeifer, Rebecca Neumann,
Ursula Klingmüller, and Rolf Rannacher




Abstract In this article, we describe how two different approaches, mathematical
modeling and quantitative measurements, can be combined to gain new insights on
one of the most extensively studied signal transduction pathways, the Janus kinase
(JAK)/signal transducer and activator of transcription (STAT) pathway. We present
two data-based models, which describe the intracellular signaling in a single cell
where the signal is transduced from the extracellular domain to the nucleus where
STATs regulate gene expression. The two models, one without and one with spatial
aspects, have been developed to perform modeling based simulations to find out the
way of transport of the STATs in the cytoplasm, and whether cell shape plays a role
in this pathway. In this paper we will focus on the parameters of the models, which
can be measured with specific techniques in different cell lines, how the unknown
parameters are estimated, what the limits of these techniques and how accurate the
determinations are.

Keywords JAK2/STAT5 signaling pathway • Parameter estimation • Reaction
diffusion equations




E. Friedmann ()  R. Neumann  R. Rannacher
Department of Applied Mathematics, University Heidelberg, Im Neuenheimer Feld 293,
69120 Heidelberg, Germany
e-mail: friedmann@iwr.uni-heidelberg.de; rebecca.neumann@iwr.uni-heidelberg.de;
rannacher@iwr.uni-heidelberg.de
A.C. Pfeifer  U. Klingmüller
Division Systems Biology of Signal Transduction, DKFZ-ZMBH Alliance, German Cancer
Research Center, Im Neuenheimer Feld 280, 69120 Heidelberg, Germany
e-mail: U.Klingmueller@dkfz-heidelberg.de

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions             125
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 5,
© Springer-Verlag Berlin Heidelberg 2013
126                                                                  E. Friedmann et al.


1 Biological Question

Fundamental progress in systems biology can only be achieved if experimentalists
and theoreticians closely collaborate. Mathematical models cannot be formulated
precisely without detailed knowledge of the experiments while complex biological
systems can often not be understood fully without mathematical interpretation of
the dynamic processes involved.
   In multicellular organisms communication between cells is frequently mediated
by signal molecules secreted to the extracellular space, which bind to cell surface
receptors. The signal has to be transmitted from the extracellular domain of the cell
surface receptors to the nucleus and thereby regulates gene expression.
   One of the most extensively studied signal transduction pathways is the
JAK/STAT pathway [3]. Several members of the signal transducer and activator
of transcription (STAT) protein family have been implicated in various cancers.
Briefly, after binding of ligand to the receptor two receptor associated Janus kinases
(JAK) transphosphorylate each other and subsequently tyrosine phosphorylate
the cytoplasmic domain of the receptor. STAT proteins can then bind to the
phospho-tyrosine residues via their SH2 domains and are phosphorylated by JAK.
Phosphorylated STATs dissociate from the receptor, dimerize, move to the nucleus
and regulate transcription of target genes.
   How transport from the site of STAT phosphorylation at the plasma membrane
to the site of action in the nucleus is mediated is still unclear. Whether STATs
freely diffuse through the cytoplasm to reach the nuclear envelope or are actively
transported along the cytoskeleton remains a subject of debate. Moreover, it is not
known if STATs can in addition be phosphorylated by membrane-bound kinases on
endosomes present in the cytosol, which would reduce the distance between the site
of phosphorylation and nuclear envelope.
   To address these questions, we investigate the erythropoietin (Epo)-regulated
JAK2/STAT5 pathway dynamics in two geometrically different cell types. The
fibroblast cell line NIH3T3 grows attached to surfaces, forming several tens of
microns long and often branched stretches of cytoplasm surrounding an elliptical
nucleus of approximately 10 m in diameter, resulting in potentially large distances
between plasma membrane and nuclear envelope. On the other hand, CFU-E
(colony-forming unit erythroid stage) cells are primary cells isolated from mouse
embryonic livers. They are precursors of red blood cells, growing in suspension
not attached to surfaces, and showing a spherical shape with a diameter of roughly
10 m for the whole cell and 8 m for the nucleus, resulting in a fairly small
cytoplasmic volume and only a short distance from plasma membrane to the nuclear
envelope (Fig. 1).
Interaction Between Experiment, Modeling and Simulation of Spatial Aspects                      127




Fig. 1 Two different cell types used for this study. (a) CFU-E cells and (b) NIH3T3-EpoR
cell expressing STAT5-GFP imaged on a confocal microscope. Scale bar, 10 m. Schematic
representations of the cells also indicate localization of EpoR (brace like structure) on the plasma
membrane with Epo (black) bound as well as STAT5 (small rings) in the cytoplasm in monomeric
and dimeric form as well as bound to the receptor. Nuclear STAT5 is also shown bound to
chromatin (dark grey line). JAK2 is omitted for simplification. Cells are drawn approximately
to scale, proteins are overrepresented



2 Biological Data

A major limitation in systems biology remains the lack of sufficient high-quality,
quantitative data for different variables of systems under investigation. To overcome
this constraint, we have based our mathematical modeling on experimental data
acquired by different experimental techniques, all generating quantitative data of
high quality. Nevertheless, the restrictions of each method have to be assessed
carefully to avoid misinterpretations of data. In addition, it is advisable to establish
standard procedures for cell culture, sample preparation and experimental setup to
guarantee comparable results [7].


2.1 Quantitative Immunoblotting Data

To measure dynamic changes in total protein concentrations as well as transient pro-
tein modifications such as tyrosine phosphorylation immunoblotting is commonly
used. Proteins in cell extracts are separated by gel electrophoresis. Subsequently,
they are electrophoretically transferred to a membrane on which they can be
128                                                                  E. Friedmann et al.


detected with antibodies specific for the protein or protein modification. Under cer-
tain circumstances it is necessary to purify the protein of interest from the remaining
cell extract prior to immunoblotting by immunoprecipitation. This is especially
useful, if proteins are only present in the cell at low concentrations or less specific
antibodies are used for immunoblotting. For EpoR, JAK2 and STAT5 a combination
of immunoprecipitation and immunoblotting is used (Fig. 2a). To reduce the error
of the procedure recombinant proteins are used as calibrators [5], [6].This allows us
to determine a rough estimate of the number of protein molecules per cell.
   When necessary, a crude separation of cytoplasm and nucleoplasm can be
achieved by taking advantage of the different detergent sensitivities of the outer cell
membrane and the nuclear envelope. However, this biochemical separation is never
complete and leads to losses of certain fractions of the compartments that are dif-
ficult to determine. Furthermore, large numbers of cells are required if quantitative
immunoblotting and immunoprecipitation are combined (on average one million
cells per data point). If additionally a separation of cellular compartments, e.g. the
cytoplasm and the nucleus, is required the cell number has to be further increased to
obtain data of sufficient quality. In the case of established cell lines this usually
only poses a handling problem, but if primary cells like CFU-E cells are used,
experimentalists are strongly limited by the number of animals that can and should
be sacrificed for an experiment. Furthermore, these biochemical methods only yield
average data from large cell population. Asynchronous dynamics of single cells can
be lost through averaging.



2.2 Live Cell Imaging

For the presented study it was necessary to determine the cell size and shape of
CFU-E and NIH3T3 cells in addition to the biochemically measured dynamic
changes of protein concentrations and protein modifications. Cellular features such
as cell size and shape or more detailed information on protein localization can only
be assessed by microscopy, which offers a high spatial resolution at the single cell
level.
   We have determined the size of CFU-E cells and the CFU-E cell nucleus by
transmitted light microscopy, measuring the diameter of the cell and the nucleus
and assuming the cell shape to be a perfect sphere. For NIH3T3 cells, cells have
been enzymatically detached from their growth surfaces and assumed to adopt
spherical shape in suspension and also measured by transmitted light microscopy.
Alternatively, NIH3T3 cells expressing fluorescently labeled protein have been
imaged by confocal microscopy. For volume measurements by confocal microscopy
a series of images have been acquired, moving the sample in z-direction. This image
stack covering the whole cell in x, y and z has been analyzed and the volume
calculated from the number of voxels. Thus, by expressing fluorescently labeled
proteins with specific localizations the sizes of different cellular compartments can
be determined.
Interaction Between Experiment, Modeling and Simulation of Spatial Aspects         129


    To measure the changes of STAT5 localization over time after addition of Epo,
STAT5 labeled with green fluorescent protein (STAT5-GFP) has been followed in
single cells by timelapse microscopy (Fig. 2b). This allows one to quantify the ratio
of nuclear to cytosolic protein, detect potential concentration inhomogeneities as
well as absolute protein concentrations if properly calibrated. The sampling rate
that can be achieved is more than one image per minute if necessary. Sampling rate
as well as duration of the experiment have to be adjusted depending on the goal of
the experiment. In general, again depending on the strength of the signal, 200–500
images can be acquired of a sample, with a sampling rate between less than a second
up to hours.
    However, a few restrictions have to be taken into account. Live cell imaging
requires the expression of fluorescently labeled proteins. This is usually achieved by
genetically tagging the protein of interest with a fluorescent protein and expressing
it in addition to the unlabeled protein already present in the cells. This can lead
to severe alterations in the pathway dynamics and has to be tested carefully. For
microscopy, cells have to be immobilized on thin optical glass surfaces. This
is easily done with adherent cells like the NIH3T3 cells by growing them in
culturing dishes with a glass bottom and directly placing the culturing dish on
the microscope, usually equipped with an incubation chamber to maintain the
appropriate environment for the cells. In the case of cells growing in suspension
such as the CFU-Es imaging of living cells over time is rather challenging and has
not been done for this study. In the future, this might be possible as commercial
solutions for imaging suspension cells are being developed.



2.3 Measurement of Diffusion and Transport Kinetics

2.3.1 Fluorescence Correlation Spectroscopy

The protein localization in cells in steady state conveys a very static picture. How-
ever, many proteins are constantly in rapid movement. Fluorescence Correlation
Spectroscopy (FCS) [8] is a widely applied method to measure movement of
proteins caused by diffusion or reaction–diffusion systems (Fig. 2d). Fluctuations of
fluorescently-labeled proteins within the focal volume of a confocal or two-photon
microscope are recorded and analyzed by temporal autocorrelation.
   To achieve a high level of fluctuations, the concentration of the observed
protein should be kept low. This is often not the case for standard mammalian
expression systems but can be accomplished by using an inducible expression
system. Alternatively, a large fraction of the fluorescence can be photobleached
before the FCS measurement. However, this can cause artefacts due to photodamage
caused by the bleaching process. Furthermore, spatial inhomogeneities of the cell as
well as photophysical characteristics of the fluorophore can cause difficulties during
data acquisition and analysis. This can lead to a fairly high variability of parameters
determined from FCS data.
130                                                                 E. Friedmann et al.


   The diffusion coefficient of STAT5-GFP in the cytoplasm of fibroblasts was
measured by FCS and determined to be approximately 15 m2 /s. No significant
difference for the diffusion coefficient of STAT5-GFP in starved cells and cells
stimulated by Epo could be detected. For CFU-E cells a similar diffusion coefficient
was assumed.


2.3.2 Fluorescence Recovery After Photobleaching

In the case of FCS usually only faster processes such as diffusion or binding
kinetics can be studied. In addition, proteins can also be transported from one
cellular compartment to another. These protein dynamics in addition to more rapid
molecule movements—can be assessed by fluorescence recovery after photobleach-
ing (FRAP). In a typical FRAP experiment, the steady state fluorescence distribution
is perturbed by photobleaching part of the fluorescence with a strong laser pulse and
the exchange of bleached and unbleached proteins is monitored over time.
    Here, we have measured nuclear import and export rates of unphosphorylated
STAT5 in NIH3T3 cells ([3] and Fig. 2c). As standard FRAP analysis is only
applicable to steady state situations at least on the time scale of the experiment
and recovery exchange between nucleus and cytoplasm is on a similar time scale as
protein phosphorylation after Epo stimulation only nucleocytoplasmic shuttling of
unphosphorylated STAT5 in serum starved cells was measured. FRAP has not been
performed in CFU-E cells as this would require stable maintenance of non-adherent
cells on the microscope to allow for analysis of the measurement as discussed above.



3 Modeling

In this section we will consider two models describing the same biological pro-
cesses, one without spatial resolution described by a system of ordinary differential
equations (ODE), and the other with partially considered spatial resolution, which is
described by a mixed system containing ordinary and partial differential equations
(ODE and PDE). Parameter estimation was performed for the ODE model and the
same parameter values are used in the combined ODE/PDE model.



3.1 Ordinary Differential Equations Model

In our models, we focus only on a part of the JAK2/STAT5 signaling pathway:
after binding of the hormone erythropoietin (Epo) to its receptor (EpoR), STAT5 is
phosphorylated at the EpoR by JAK2 with rate ract , dimerizes and diffuses through
the cytoplasm to the nucleus. STAT5 is imported into the nucleus with rate rimp and
Interaction Between Experiment, Modeling and Simulation of Spatial Aspects                    131




Fig. 2 Overview of experimental methods. Several quantitative techniques were combined to
generate data for mathematical modeling. An overview of the JAK-STAT signaling pathway is
shown in the top left panel. Colored frames and arrows represent the protein species and reactions
monitored by the individual techniques. Bold letter in boxes refer to the respective techniques.
(a) Cytoplasmic extracts of NIH3T3-EpoR cells were subjected to immunoprecipitation with
antibodies against EpoR and JAK2, or STAT5, and analyzed by quantitative immunoblotting.
Samples are randomized to reduce correlated errors. Processed data points (blue points) and fits
of an ODE model to the data (red curve) are shown below. (b) Nuclear accumulation of STAT5-
GFP in NIH3T3-EpoR cells after addition of Epo is investigated by timelapse microscopy on a
confocal microscope. (c) Fluorescence recovery after photobleaching (FRAP) is used to analyze
nucleocytoplasmic shuttling of STAT5-GFP. Nuclear STAT5-GFP in NIH3T3-EpoR cells was
photobleached (green circle) and recovery of nuclear fluorescence was observed. Scale bar, 10 m.
Two representative processed data sets are shown for unphosphorylated STAT5-GFP. (d) Mobility
of STAT5-GFP in the cytoplasm was measured by fluorescence correlation spectroscopy (FCS).
Intensity fluctuations in the focal volume (represented in green) were analyzed by temporal
autocorrelation. Diffusion coefficients were estimated by fitting a one-component model to the
data
132                                                                                E. Friedmann et al.


pSTAT5 with rate rimp2 . The processes in the nucleus are described by four linear
delay equations including the dephosphorylation of phosphorylated STAT5, which
then is exported back to the cytoplasm with rate rexp .
   We denote by u0 the concentration of unphosphorylated STAT5 in the cytoplasm,
by u1 the concentration of the phosphorylated STAT5 in the cytoplasm, by u2
the concentration of the unphosphorylated STAT5 in the nucleus, and by u3 the
concentration of the phosphorylated STAT5 in the nucleus. The variables u4 ; : : : ; u7
are introduced as fictitious concentrations to describe the processes in the nucleus
by linear delay equations. Our model consists of following equations:

                        ract                           rimp                 rexp
            u00 .t/ D         pJAK.t/  u0 .t/              u0 .t/ C          u2 .t/         (1)
                        vcyt                           vcyt                 vcyt
                      ract                        rimp2
            u01 .t/ D      pJAK.t/  u0 .t/               u1 .t/                                (2)
                      vcyt                         vcyt
                      rdelay            rexp                 rimp
            u02 .t/ D         u7 .t/         u2 .t/ C             u0 .t/                      (3)
                       vnuc             vnuc                 vnuc
                      rimp2             rdelay
            u03 .t/ D         u1 .t/           u3 .t/                                          (4)
                      vnuc               vnuc
                      rdelay
            u04 .t/ D        .u3 .t/  u4 .t//                                                    (5)
                       vnuc
                      rdelay
            u05 .t/ D        .u4 .t/  u5 .t//                                                    (6)
                       vnuc
                      rdelay
            u06 .t/ D        .u5 .t/  u6 .t//                                                    (7)
                       vnuc
                      rdelay
            u07 .t/ D        .u6 .t/  u7 .t//:                                                   (8)
                       vnuc

This model is considered for two different cell types: a spherical shaped CFU-E and
a NIH3T3 fibroblast cell. Therefore we obtain two sets of parameters, one for each
cell type where the initial values are chosen as:

                 u1 .0/ D u3 .0/ D u4 .0/ D u5 .0/ D u6 .0/ D u7 .0/ D 0                          (9)
              CFU-E:        u0 .0/ D 50 aO  mol=m3                                             (10)
                            u2 .0/ D 18 aO  mol=m3                                             (11)
             NIH3T3:        u0 .0/ D 16 aO  mol=m3                                             (12)
                            u2 .0/ D 20 aO  mol=m3                                             (13)

The number of molecules per compartment is determined using a combination of
immunoprecipitation and immunoblotting as described in Sect. 2.1 Here, aO is the
Avogadro constant, so that the unit aO  mol is the number of molecules.
Interaction Between Experiment, Modeling and Simulation of Spatial Aspects          133


   The parameters vcyt and vnuc , which represent the average volume of the
cytoplasm and nucleus, are measured by transmitted light microscopy (Sect. 2.2).
We use the values vcyt D 429 m3 , vnuc D 268 m3 for the CFU-E cell and
vcyt D 1; 758 m3 , vnuc D 366 m3 for the NIH3T3 cell. The nuclear import and
export rates can be measured only for the unphosphorylated STAT5 in NIH3T3
cells by FRAP experiments (Sect. 2.3.2): rimp  0; 1 s1 and rexp  0; 09598 s1 .
The import rate of the unphosphorylated STAT5 in the CFU-E cells is assumed to
be approximately the same as in the NIH3T3 cells, so that the same value for rimp
( 0; 1 s1 is used for both cell types in our model.
   Another input function in this model is the phosphorylation function pJAK.t/,
the evolution in time of the activated cytoplasmic domain of the receptor. In the
experiments the STAT5 molecules are phosphorylated through a controlled input of
Epo that activates the receptor-associated kinase JAK2, which then phosphorylates
STAT5. The biological processes at the receptor can be modeled as an additional
receptor module, which makes our systems of equations and the parameter set
much larger. Since the concentration of phosphorylated JAK2 molecules can be
measured, we simplify our model and use the data points for pJAK2 interpolated
with a smooth spline as input (Fig. 3). For our model, we assume that the number of
JAK2 molecules at the plasma membrane is equal to the number of EpoR molecules
on the plasma membrane.
   Our system of equations (1)–(13) is a homogenous linear system for the unknown
u D .u0 ; ::; u7 /, which can be formulated in a general form as follows:

                                    u0 .t/ D f .t; u.t//
                                                                                   (14)
                                    u.0/ D b:

Theorem 1. For the given set of data the system (14) is well-posed.
   The proof of this theorem is based on standard techniques. The right hand side
f .t; u.t// is Lipschitz, so that we can apply Picard–Lindelöf’s theorem and get local
existence, uniqueness and Lipschitz continuity with respect to data. This local result
can then be extended to a global one due to the linearity of f .t; u.t//. The function
f .t; u.t// can be written as f .t; u.t// D A.t/u.t/, where A.t/ is negative definite
for the considered parameters, which gives global (even exponential) stability. In a
fothcoming paper we will show the non-negativity, boundedness and stability of the
solution.



3.2 Parameter Estimation

Parameters that can not be experimentally measured for our model for the CFU-E
cell are the phosphorylation rate of STAT5 ract , its export rate rexp , the import rate
of phosphorylated STAT5 rimp2 , and the time delay for the processes in the nucleus
rdelay . For the model in a NIH3T3 cell we have only three unknown parameters:
134                                                                           E. Friedmann et al.


Table 1 Deviation rates of
the parameters used in the                              CFU-E          CFU-E min   CFU-E max
model for the CFU-E cell          ract (min1 )          11              9           15
                                  rimp2 (min1 )         58             47           71
                                  rexp (min1 )         225            194          260
                                  rdelay (min1 )       265            263          266


Table 2 Deviation rates of
the parameters used in the                              NIH3T3     NIH3T3 min      NIH3T3 max
model for the NIH3T3 cell        ract (min1 )           187       171              204
                                 rimp2 (min1 )         1010       886             1151
                                 rdelay (min1 )         194       162              232



ract ; rimp2 and rdelay . Due to the FRAP experiments described in Sect. 2.3.2 the
export rate of Stat5 rexp has been measured. To determine the unknown parameters,
parameter estimation has been performed using the software PottersWheel [1],
developed to perform data-based modeling of partially observed and noisy systems
like signal transduction pathways.
    For each cell type two series of experiments are performed. For the CFU-E cells
the observables in both experiments are: the phosphorylation function pJAK.t/,
the phosphorylated STAT5 u1 .t/, the total STAT5 u0 .t/ C u1 .t/ in the cytoplasm,
and in the nucleus u2 .t/ C u3 .t/. In the experiments with the NIH3T3 cells either
the phosphorylation function pJAK.t/, the phosphorylated STAT5 in the cytoplasm
u1 .t/, the phosphorylated STAT5 in the nucleus u3 .t/ and the total STAT5 in the
nucleus u2 .t/Cu3 .t/ are observed, or the phosphorylation function pJAK.t/, the un-
and phosphorylated STAT5 separately in the cytoplasm u0 .t/, u1 .t/ and in the
nucleus u2 .t/, u3 .t/. The data for the parameter estimation have been generated
by quantitative immunoblotting where the specific components have been identified
via antibodies. For an interpretation of the errors of biochemical data see [5], [6].
    The parameter estimation process belongs to the class of non-linear least square
problems. The merit function 2 , which is optimized in PottersWheel to fit the
model y D y.tI p/, is given by
                                               y  y.t I p/ 2
                                                    i          i
                             2 .p/ D ˙iND1                        :                        (15)
                                                          i

Here yi are data point i with standard deviation i and y.ti I p/ being the model
value at time point i for parameter values p. As the measurement errors are normally
distributed, the minimization of the weighted least-square error corresponds to
applying a Maximum Likelihood estimator for the unknown parameters [1]. For the
fitting one can choose between powerful deterministic and stochastic optimization
algorithms. Our data have been fitted 500 times in a fit sequence using the same
dataset where the initial value in the consequent fit is chosen as the best fit in the
previous sequence with randomly disturbed parameters. Only the best 30% have
been analyzed further. The results are listed in Tables 1 and 2 (first column).
Interaction Between Experiment, Modeling and Simulation of Spatial Aspects                    135




Fig. 3 Data-based ODE modeling of STAT5 phosphorylation in NIH3T3-EpoR cells. NIH3T3-
EpoR cells were serum-starved for 5 h and stimulated with Epo. Cells were fractionated in nuclear
and cytoplasmic extracts. Extracts were subjected to immunoprecipitation with antibodies against
EpoR and JAK2 (cytoplasm only), or STAT5 (cytoplasm and nucleus), and analyzed by quantitative
immunoblotting. Processed data points (blue points) and fits of the mathematical model to the data
(red curves) are shown above. A spline through the data points for phosphorylated JAK2 (upper
left panel) was used as input



    For the interpretation of the simulation results it is important to determine
the relative deviation of the parameters: For the NIH3T3 fibroblast cell the
relative deviation for the parameter describing the phosphorylation of STAT5
ract is less than 10% and up to 20% for the delay time rdelay in the delay
reactions considered. For the parameter set of the CFU-E cell the smallest relative
deviation (0.61%) is obtained for the export rate of unphosphorylated STAT5
rexp and the largest relative deviation (27%) is obtained for the phosphorylation
rate ract . The relative deviation of the time delay remains approximately the
same for both models. How these fits could be further improved is discussed in
Sect. 5.
    The graph in Fig. 3 represents an exemplary dataset from NIH3T3 cells. Multi-
experiment fitting was performed with PottersWheel.
136                                                                          E. Friedmann et al.




Fig. 4 Constructed grid for the CFU-E cell, NIH3T3 cell and a section through the nucleus of the
NIH3T3 cell



3.3 Reaction Diffusion Model

To address the biological question described above, about the way of transport of
the STAT5 molecules in the cytoplasm, we add diffusion for unphosphorylated
and phosphorylated STAT5 in the cytoplasm. Different transport processes can
be modeled by diffusion equations involving different diffusion coefficients. At
first, we model free diffusion using a constant diffusion coefficient based on
measurements by fluorescence correlation spectroscopy (FCS, Sect. 2.3.1). The
diffusion coefficient D D 15 m2 =s D 900 m2 =min is used in the simulations.
The additional transport of the molecules along the microtubules is modeled for the
NIH3T3 cell through an anisotropic diffusion coefficient whereas the mainstream
direction of STAT5 movement is set in the y-direction of the cell.
    To model the reaction diffusion equations, we consider two different geometries,
spherical for a CFU-E cell and a long tube with an ellipsoidal body for a
NIH3T3 cell (Fig. 4). To answer the biological question only the cytoplasm has
to be dissolved spatially. The processes in the nucleus such as DNA binding and
dephosphorylation of STAT5 do not have to be known in detail. For their description
it is sufficient to use time delays as black box elements. As already described in
the previous section, phosphorylation as well as nuclear import and export of
STAT5 only occurs on the boundary of our considered computational domain,
the cytoplasm. For this specific question, we therefore obtain a mixed system of
differential equations: two diffusion equations with Robin boundary conditions and
six ODE, two of them are coupled to the PDEs through the import terms and the
other four describe the processes in the nucleus by linear delay equations:

Cytoplasm: ˝cyt

   @t u0 .t; x/ D Du0 .t; x/                                                              (16)
   @t u1 .t; x/ D Du1 .t; x/                                                              (17)
Interaction Between Experiment, Modeling and Simulation of Spatial Aspects                         137


Nucleus: ˝nuc

                                                                               Z
                    rdelay            rexp            rimp    1
        u02 .t/ D           u7 .t/        u2 .t/ C                             u0 .t; s/ ds   (18)
                     vnuc             vnuc            vnuc j@˝nuc j
                                                                            @˝nuc
                                           Z
                    rimp2   1                                    rdelay
        u03 .t/ D                             u1 .t; s/ ds            u3 .t/                   (19)
                    vnuc j@˝nuc j                                 vnuc
                                       @˝nuc
                  rdelay
        u04 .t/ D        .u3 .t/  u4 .t//                                                         (20)
                   vnuc
                  rdelay
        u05 .t/ D        .u4 .t/  u5 .t//                                                         (21)
                   vnuc
                  rdelay
        u06 .t/ D        .u5 .t/  u6 .t//                                                         (22)
                   vnuc
                  rdelay
        u07 .t/ D        .u6 .t/  u7 .t//:                                                        (23)
                   vnuc

   The initial conditions are the same as used in the previous section. We only have
to pay attention that the concentrations of unphosphorylated and phosphorylated
STAT molecules in the cytoplasm are now space dependent (u0 .t; x/ and u1 .t; x/).
The phosphorylation, import and export of molecules enter through the Robin
boundary conditions:
                                        ract
               D@n u0 .t; @˝cyt / D             pJAK.t; x/  u0 .t; x/                           (24)
                                     j@˝cyt j
                                       rimp                      rexp
              D@n u0 .t; @˝nuc / D               u0 .t; x/ C           u2 .t/                   (25)
                                     j@˝nuc j                  j@˝nuc j
                                     ract
              D@n u1 .t; @˝cyt / D            pJAK.t; x/  u0 .t; x/                              (26)
                                   j@˝cyt j
                                       rimp2
              D@n u1 .t; @˝nuc / D               u1 .t; x/;                                      (27)
                                     j@˝nuc j

where @˝cyt represents the outer boundary of the cell, i.e. the membrane and @˝nuc
the boundary of the nucleus.
   At this point it is important to note that the diffusion coefficient is related to
the measured parameters. The input curve for the phosphorylation of the STAT5
molecules (pJAK(t)) must be recalculated in a form of concentration using the
number of receptors of the specific cell type. For the CFU-E cell, we have:
                                   (
                                       1:244  pJAK.t/           for x 2 @˝cyt
                    pJAK.t; x/ D
                                       0       elsewhere
138                                                                           E. Friedmann et al.


and for the NIH3T3 cell:
                                    (
                                        5:65  pJAK.t/        for x 2 @˝cyt
                   pJAK.t; x/ D
                                        0   elsewhere.

In this input the number of receptor molecules on the cell surface is hidden. For
CFU-E cells the maximum number of ligand binding sites, i.e. available receptor
dimers at the cell surface, has been reported to be approximately 1,000 [9] yielding
2,000 receptor molecules at the surface of a CFU-E cell. In NIH3T3 cells we
overexpress the receptor, presumably generating a higher density of receptor at
the cell surface. As the number of cell surface receptors is difficult to measure we
have assumed that the receptor density is similar to that in another cell line with
overexpressed receptor (BaF3-EpoR, V. Becker, personal communication) and have
assumed 28,000 receptor molecules at the surface of a NIH3T3 cell for our model.
   For the reaction diffusion system (16)–(27), we have to introduce the correspond-
ing functional spaces, which will assure the solvability:
Definition 1. Let X denote a real Banach space with Norm jj jj. ˝ is an open and
bounded subset in IRn . The space Lp ..0; T /; X / consists of all strongly measurable
functions u W Œ0; T  ! X with
                                                  Z T
                                                                    1
                       jjujjLp ..0;T /;X / WD .         jju.t/jjp dt/ p < 1
                                                   0

for 1  p < 1, and

                        jjujjL1 ..0;T /;X / WD ess supjju.t/jj < 1:

For our system X D H01 .˝/, H 1 is the dual space of X, and we have

                              H01 .˝/  L2 .˝/  H 1 .˝/:

The well-posedness is shown by following theorem:
Theorem 2. For the given set of data the initial-boundary value problem (16)–(27)
is well-posed. There is a unique global solution u D .u0 ; :::; u7 /, with u0 ; u1 2
L2 ..0; T /I H 1 .˝//, @t u0 ; @t u1 2 L2 ..0; T /I H 1 .˝//, and u2 ; :::; u7 2 C 1 Œ0; T  on
any time interval Œ0:T .
    The proof of this theorem can be done in a standard way by decoupling the
equations for ui , i D 0; 1; 3; : : : ; 7 and applying the Banach fixpoint theorem to
u2 . It can be found in [2] and will be addressed in a forthcoming paper together with
some additional properties of the solutions for generalized nonlinear mixed systems
resulting from signaling.
Interaction Between Experiment, Modeling and Simulation of Spatial Aspects                                                      139

                   50                                                                 14
                                                 u0,h (t)                                                            u1,h (t)
                   45                             u0 (t)                              12                              u1 (t)
                   40
molecules / µ m3




                                                                  molecules / µ m3
                                                                                      10
                   35
                                                                                       8
                   30
                                                                                       6
                   25
                   20                                                                  4

                   15                                                                  2
                   10                                                                  0
                        0   20 40 60 80 100 120 140 160 180 200                            0    20 40 60 80 100 120 140 160 180 200
                                         min                                                                 min

Fig. 5 The solutionRu0 .t / (unphosphorylated STAT5) of system (1)–(13) in comparison to the
solution u0;h .t / D ˝cyt u0 .t; x/dx of system (16)–(27) (left) and the solution u1 .t / (phospho-
                                                                                R
rylated STAT5) of system (1)–(13) in comparison to the solution u1;h .t / D ˝cyt u1 .t; x/dx of
system (16)–(27) (right) in a CFU-E cell

                   16                                                                 3.5
                                                 u0,h (t)                                                            u1,h (t)
                                                  u0 (t)                               3                              u1 (t)
                   14
                                                                   molecules / µ m3
molecules / µ m3




                                                                                      2.5
                   12
                                                                                       2
                   10
                                                                                      1.5
                    8
                                                                                       1
                    6                                                                 0.5
                    4                                                                  0
                        0   20 40 60 80 100 120 140 160 180 200                             0   20 40 60 80 100 120 140 160 180 200
                                         min                                                                  min

Fig. 6 The solutionRu0 .t / (unphosphorylated STAT5) of system (1)–(13) in comparison to the
solution u0;h .t / D ˝cyt u0 .t; x/dx of system (16)–(27) (left) and the solution u1 .t / (phospho-
                                                                                R
rylated STAT5) of system (1)–(13) in comparison to the solution u1;h .t / D ˝cyt u1 .t; x/dx of
system (16)–(27) (right) in a NIH3T3-cell




   The numerical simulations use the in house Finite Element software Gascoigne
[10], which provides tools for grid generation, discretization by bilinear Finite
Elements (Q1 ), timestepping by the Crank–Nicolson, and solution of linear systems
by a multigrid algorithm.



4 Results

The results of the simulations of system (1)–(13), dotted line, and system (16)–(27),
solid line, are plotted for CFU-E and NIH3T3 in Figs. 5 and 6, respectively. There,
we visualized the differences between the time distribution of the concentration
of unphosphorylated STAT5 and phosphorylated STAT5 from the system without
140                                                                   E. Friedmann et al.

                             R
diffusion with ui;h .t/ D ˝cyt ui .t; x/dx, i D 0; 1, where u0 .t; x/; u1 .t; x/ are
solutions of the system with diffusion. In CFU-E cells no effect of diffusion is
observed on the time distribution of phosphorylated STAT5 concentration. There,
the distance from the cell membrane to the nucleus is very short (Fig. 1). Therefore,
addition of diffusion of cytoplasmatic STAT5 does not alter the results. The
model (1)–(13) describes the considered pathway in the CFU-E cells very well
(Fig. 5). In NIH3T3 cells adding diffusion of cytoplasmatic STAT5 cause a higher
time distribution of the concentration of phosphorylated STAT5 in the cytoplasm
(u1 .t/) as well as a different steady state (Fig. 6). This is due to the long distance,
which the molecules have to travel, to get from the membrane to the nucleus. The
higher concentration of phosphorylated STAT5 in the cytoplasm is compensated by
a lower concentration of phosphorylated STAT5 in the nucleus, which indicates that
the addition of diffusion does not change the amount of phosphorylated STAT5 in
the whole cell.
    For NIH3T3 cells the discrepancy between the model with diffusion and
without diffusion is small (smaller than 1 molecule=m3, Fig. 6). To answer the
biological question, we simulated various transport processes considering the same
parameters in each model (data not shown). Each transport process shows a distinct
concentration development during time but the same dynamics due to the linearity of
the system. Only because of fast diffusion the differences are very small. Also, the
cell geometry influences the temporal development of the phosphorylated STAT5
molecules concentration in time. Here, the differences are more visible, even with
fast diffusion (Fig. 6).



5 Perspectives

A meaningful interpretation of the simulation results can be obtained only after
analyzing the reliability of the parameters. Sensitivity analysis is used to determine
how sensitive a mathematical model is with respect to changes in its parameters
and structure. We perform a series of tests, in which we choose different parameter
values from our fit, to see how changes in parameters cause changes in the
dynamical behavior of the model. The model responds to changes in the parameters
is shown in Fig. 7. There, the absolute deviations are presented of the concentrations
of STAT5 from those of pSTAT5 calculated with the specific parameters. The
calculation of the relative deviation of the concentrations lets us conclude that their
effect on the concentration parameters is of the same order or even larger than the
effect of the diffusion. The level of accuracy of our parameters is not sufficient. Thus
the question, which transport process is used by the STAT5 molecules to shuttle to
the nucleus, remains open.
    Additionally, the limitations of the experimental techniques make the
interpretation of the results difficult. Simulation results and experimental results
are not always directly comparable as illustrated by the biochemical experiments.
Interaction Between Experiment, Modeling and Simulation of Spatial Aspects                                                       141


                                                                                      0.6
                    1
                                                                                      0.4
molecules / µm3




                                                                     molecules/ µm3
                  0.5
                                                                                      0.2
                    0                                                                   0

                  -0.5                                                                -0.2

                                                                                      -0.4
                   -1
                         0     10 20 30 40 50 60 70 80 90 100                                0   10 20 30 40 50 60 70 80 90 100
                                           min                                                                min
                             (a) absolute deviation for STAT5 (u0)                           (b) absolute deviation for pSTAT5 (u1)

Fig. 7 Sensitivity analysis as a series of tests in which we set different parameter values to see how
a change in the parameter causes a change in the dynamic behavior of our model. In this figure we
see the absolute deviation between the concentrations of the un- and phosphorylated STAT5 in the
cytoplasm of a NIH3T3 cell with rates from Table 2


From the simulation results, we obtain the concentrations of the involved pathway
components in a single cell whereas the biochemical data is generated from a
large cell population and is affected by losses of cellular components due to the
biochemical purification. This yields only averaged, relative concentrations that are
difficult to convert to absolute numbers. A direct comparison of the observables
from experiments with the ones from simulations is therefore not possible here.
   The detailed study of the two models give us some indications under which
conditions an answer of the biological question might be possible. For similar linear
models in signal transduction, we can conclude for which geometry and diffusion
coefficient diffusion may play an important role in the dynamics of the observed
pathway. First steps towards such experimental design have been done here: For
the considered pathway, we have to reduce the relative deviation of the model
parameters # in order to better answer the biological question. One possibility is
to add the observable y.t; #/,

                                                               u2 .t; #/ C u3 .t; #/
                                                  y.t; #/ D                          ;
                                                               u0 .t; #/ C u1 .t; #/

from live cell imaging experiments (Fig. 8) to the estimation of the parameters. In
microscopy, a better time resolution can be easily achieved, which should have
a positive effect on the relative deviation of the parameters. Recently, spatially
resolved diffusion times have been measured for fluorescently labeled molecules
in cells by diffusion imaging microscopy [4]. Similar measurements could be
performed to investigate possible anisotropic diffusion of STAT5. Experimental
design could be further optimized to determine which measurements should be done
in order to obtain better results. Furthermore, new biological questions could arise
from the observed model behavior, e.g., is STAT5 phosphorylated on the appendices
of fibroblasts and are there active Epo receptors at all?
142                                                                       E. Friedmann et al.




Fig. 8 Live cell imaging of STAT5-GFP nuclear accumulation after Epo stimulation. NIH3T3-
EpoR cells expressing STAT5-GFP were serum-starved for 5 h and transferred to the microscope.
After addition of Epo, cells were imaged on a confocal microscope for a minimum of 4 h at
37ı C. The maximum of nuclear accumulation of STAT5 was observed around 23 min. Scale bar,
20 m. The graph shows the ratio of total nuclear STAT5-GFP to total cytoplasmic STAT-GFP
after stimulation with Epo. Different symbols and grey scales represent individual cells



    In this paper our aim is to emphasize the importance of interdisciplinary research
on the example of the JAK2/STAT5 signaling pathway. High-quality quantitative
measurements (Fig. 2) together with mathematical modeling, computational simu-
lations, parameter estimation and experimental design helps to decide whether and
which scientific question can be answered based on existing laboratory constraints.

Acknowledgements This work was supported by the Helmholtz Alliance on Systems Biology
(SBCancer, Submodule V.7). ACP was supported by the German Federal Ministry of Education and
Research (BMBF) grant FORSYS-ViroQuant (#0313923). We thank Julie Bachmann for providing
biochemical data for the CFU-E cells and V. Becker for personal communication.
Interaction Between Experiment, Modeling and Simulation of Spatial Aspects                    143


References

 1. Maiwald, T. and Timmer, J., Dynamical modeling and multi-experiment fitting with Potters-
    Wheel, Bioinformatics 24(18):2037–43, 2008.
 2. Neumann, R., Räumliche Aspekte in der Signaltransduktion, Diplomarbeit Ruprecht-Karls-
    Universität Heidelberg, 2009.
 3. Pfeifer A.C., Kaschek D., Bachmann J., Klingmüller U. and Timmer J., Model-based extension
    of high-throughput to high-content data, BMC Syst Biol., 4:106 2010.
 4. Roth C. M., Heinlein P. I., Heilemann M., and Herten D.-P., Imaging Diffusion in Living Cells
    Using Time-Correlated Single-Photon Counting, Anal. Chem., 79 (19), pp 7340–7345, 2007.
 5. Schilling M., Maiwald T., Bohl S., Kollmann M., Kreutz C., Timmer J. and Klingmüller U.,
    Computational processing and error reduction strategies for standardized quantitative data in
    biological networks, FEBS J. 272(24):6400–11, 2005.
 6. Schilling M., Maiwald T., Bohl S., Kollmann M., Kreutz C., Timmer J. and Klingmüller U.,
    Quantitative data generation for systems biology: the impact of randomisation, calibrators and
    normalisers, Syst Biol 2005, 152(4):193–200, 2005.
 7. Schilling M., Pfeifer A.C., Bohl S. and Klingmüller U., Standardizing experimental protocols,
    Curr Opin Biotechnol. 2008.
 8. Schwille P. and Haustein E., Fluorescence Correlation Spectroscopy. An Introduction to its
    Concepts and Applications, Annu Rev Biophys Biomol Struct. 36:151–69, 2007.
 9. Youssoufian H., Longmore G., Neumann D., Yoshimura A. and Lodish H.F., Structure,
    function, and activation of the erythropoietin receptor, Blood. May 1;81(9):2223–36, 1993.
10. High Perfomance Adaptive Finite Element Toolkit Gascoigne, http://gascoigne.uni-hd.de.
The Importance and Challenges of Bayesian
Parameter Learning in Systems Biology

Johanna Mazur and Lars Kaderali




Abstract In the last decade a new research field has emerged: Systems Biology.
Based on experimental data and using mathematical and computational methods,
systems biology attempts to describe biological behavior in a quantitative dynamic
way. Biological data contains a lot of noise and there is only a limited amount
available due to high experimental effort and cost. Thus, for parameter estimation
from this kind of data, their stochasticity and the problem of non-identifiability
of model parameters has to be taken into account. One way to do this is using
a Bayesian framework, where one obtains distributions over possible parameter
values, and these are then further analyzed. In this article we describe the potential
impact of Bayesian parameter learning on systems biology, and discuss challenges
arising from a Bayesian approach.


1 Modeling and Parameter Estimation in Systems Biology

Systems biology deals with the description of biological aspects by mathematical
and computational approaches to obtain a systems point of view. Traditionally, a lot
of qualitative data and knowledge was collected for single molecules of a cell or
an organism. Systems biology now deals with the task to describe, in quantitative
terms, the dynamic system’s behavior resulting from the interplay between these
single parts. The paradigm of systems biology approaches is that new properties
emerge as the system is considered as a whole, which are not apparent at the level
of individual components.




J. Mazur ()  L. Kaderali
Viroquant Research Group Modeling, University of Heidelberg, Bioquant BQ26, INF 267,
69120 Heidelberg, Germany
e-mail: johanna.mazur@bioquant.uni-heidelberg.de; lars.kaderali@bioquant.uni-heidelberg.de

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions                 145
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 6,
© Springer-Verlag Berlin Heidelberg 2013
146                                                             J. Mazur and L. Kaderali

Fig. 1 Schematic view of
gene expression in a
eukaryotic cell. First, in the                                                DNA
nucleus the DNA is
transcribed into messenger                                          transcription
RNA (mRNA). In the next
step, mRNA is exported into                                                   mRNA
the cytoplasm. There it is read                                     nucleus
and translated into a protein                                                       cytoplasm

                                                           translation        protein




                                                                         mRNA




    For example, let us consider the case of gene expression. In Fig. 1, a scheme is
provided for the basic mechanisms occurring in gene expression in a eukaryotic cell.
First, a gene encoded on the DNA is read and a complementary copy, messenger
RNA (mRNA), is produced. This process is called transcription. This mRNA is then
exported into the cytoplasm, where it is read and a protein is formed. This process
is called translation. The obtained protein is further used for one or several special
cellular functions. One might now ask, which gene is responsible for which cellular
function, but biology is not that easy, e.g., a special cellular function may only be
maintained if several proteins are present at the same time, or a protein may be used
to start an increase or decrease of the transcription of another gene. Thus, in systems
biology, we look at gene regulatory networks (GRNs), which are used to analyze the
mechanisms occurring in a cell from a systems point of view. GRNs represent a col-
lection of gene products, e.g., mRNAs or proteins, and their interactions. They have
been modeled in several ways. Basically, there are four classes of models [12,13]:
1. Logical models discretize gene expression data to describe GRNs qualitatively.
2. Correlation based models connect similarly expressed genes to describe GRNs
   qualitatively.
3. Continuous models are deterministic models based on ordinary differential
   equations (ODEs) which describe GRNs quantitatively.
4. Single-molecule models are stochastic models, i.e., starting with an initial point,
   the underlying model will produce different trajectories according to a provided
   probability, describing GRNs quantitatively.
All of these models contain parameters, which have to be specified either by
searching the literature, e.g., for reaction and/or degradation rates of molecules, or
by fitting the model to data, e.g., for abstract parameters not directly corresponding
to biology or for reaction rates not yet known.
   In the next section we will describe the importance of Bayesian parameter learn-
ing in systems biology, motivated by the example of modeling GRNs. Furthermore,
we give the challenges that arise when using a Bayesian framework. In Sect. 3, we
The Importance and Challenges of Bayesian Parameter Learning in Systems Biology             147


motivate Bayesian experimental design and give a promising approach of how it can
be performed efficiently.


2 Bayesian Parameter Estimation in Biological Systems

In the last years, Bayesian learning has become more and more important in the life
sciences. Here we only want to name a few recently published methods and software
tools available for systems biological purposes. As a first example, Wilkinson
recently reviewed Bayesian methods for heterogeneous biological systems [26].
Further, he summarized his work on stochastic kinetic models by using Bayesian
learning [25]. Girolami gave an introduction to Bayesian methodology applied to
models based on ODEs [7]. Furthermore, he and his colleague offer a software
tool called BioBayes, where one can import SBML descriptions of biochemical
models together with experimental data to perform Bayesian parameter learning
and compare models by calculating Bayes factors [23, 24]. For reverse engineering
of GRNs, we recently embedded a system of non-linear ODEs into a Bayesian
framework [16].
   In Bayesian parameter estimation, one starts with data D D fd1 ; : : : ; dn g and
a model M.!/ with parameters ! D .!1 ; : : : ; !k /. The idea is now to obtain a
posterior distribution of the model parameters ! given the data D. This is obtained
by using Bayes’ theorem:
                                              p.D j !/p.!/
                               p.! j D/ D                  ;                                 (1)
                                                 p.D/
where p.D j !/ is the likelihood function giving a probability density of the
data given model parameters !, i.e., a density relating the model M.!/ with its
parameters to the given data. Further, p.!/ denotes a prior distribution on the model
parameters and p.D/ is a normalizing factor independent of the model parameters.
Thus, the posterior distribution according to (1) gives a trade-off between the
available prior knowledge and the knowledge about the model parameters being
inherent in the data. In other words:
   The posterior distribution updates the knowledge of the model parameters ! according to
   the measured data D.

   For deterministic models, we can give a likelihood, which coincides with the
least squares approach usually used for parameter estimation problems. This is done
by assuming that every data point di , i 2 f1; : : : ; ng, is corrupted by mean zero
Gaussian noise "i with variance i2 , i.e., "i  N .0; i2 /. Let us further denote by  2
the vector containing all noise parameters i2 , i.e.,  2 D f12 ; : : : ; n2 g. With this we
obtain a likelihood:
                                                               2
                                                   12 di M.!/
                                           Y n
                                                e  2i
                       p.D j !;  2 / D              q             ;                         (2)
                                           i D1         2i2
148                                                              J. Mazur and L. Kaderali


which is the probability density of the data given some parameters ! and  2 . By
using a maximum likelihood approach one can now obtain the parameters which are
most likely to describe the data. This corresponds to the parameters obtained with a
least squares approach, as can be seen when taking the logarithm of p.D j !;  2 /
and neglecting terms independent of !. However, a likelihood can also be created
for other noise models and can have, in general, any desired form which relates the
model parameters to the data.



2.1 Importance

This subsection deals with the question, why Bayesian parameter learning is
important in systems biology. Let us again look at the case of gene expression. The
rough sketch described in Sect. 1 only tells half of the story. The processes described
there correspond to biochemical reactions which, of course, can only occur if the
desired molecules are present at the same time and at the same place. Since this
cannot be guaranteed, reaction events are not predictable. We refer to this as intrinsic
noise in biological systems. In the gene expression case, intrinsic noise may arise,
for example because of the stochasticity of mRNA transcription or degradation, i.e.,
mRNA is decomposed into smaller chemical substances.
   Another important noise type for parameter estimation is the measurement noise,
here called extrinsic noise. To measure gene expression, there are two common
methods: microarray and qPCR. The first one is a high-throughput method able to
give DNA abundance for the whole genome of a species. But it also provides a lot
of extrinsic noise. qPCR on the other hand, produces data with lower experimental
noise but is expensive to perform. Thus, the data available is either limited, or
contains a lot of (extrinsic and intrinsic) noise or, as in most cases, both.
   To obtain now the desired quantitative models of a biological system, one
has to take into account the different kinds of noise present in the data. Single-
molecule models, as presented in the previous section, are suitable to capture the
intrinsic noise for the case where only a small number of cells are considered.
Although parameter estimation given stochastic models is difficult to perform and
an ongoing research topic far from being solved, Boys et al. [3] showed that a
Bayesian parameter estimation framework is capable of accomplishing this task.
Bear in mind, that for stochastic models, one cannot define a distance function
to use in optimization in an obvious way, as in the deterministic case described
above. Regarding a larger number of cells, the importance of the intrinsic noise
decreases, since the experimental data can be considered as the mean value over the
gene expression values for all the cells. In that case, deterministic models provide a
suitable approach.
   Parameter estimation problems in systems biology have to deal with limited
data which contain a lot of noise. Thus, these parameter estimation problems pose
challenging tasks and are usually non-identifiable, i.e., different parameter sets may
The Importance and Challenges of Bayesian Parameter Learning in Systems Biology      149


describe the given data in a similar way. The non-identifiability problem is of
special importance for gene regulatory networks, where different network structures
represent the same data. In that case, one wants to know all underlying networks to
investigate them further. Another difficulty arising in parameter estimation problems
in systems biology is sloppiness, which was recently argued to be present in systems
biological models [9]. Sloppiness means that the eigenvalues of the covariance
matrix around a point estimate span many decades and their eigenvectors are
skewed from their underlying parameter axes. Thus, even if we have only one mode
in the posterior distribution, a wide range of parameter values may describe the
experimental data in a similar way.
    So we have seen that we have to deal with a lot of problems in parameter learning
for systems biological models. Bayesian parameter estimation is able to deal with
these difficulties and desires. In (2) we saw how noise inherent in the experimental
data is taken into account to obtain a probability density of the experimental
data, given the parameters of the underlying model. By using Bayes’ theorem, we
incorporate prior knowledge into the parameter estimation task to bound the search
space for the parameters which helps with the non-identifiability problem. Such
prior knowledge can be extracted from one of the numerous databases that exist for
qualitative descriptions of biological behavior. In cases where no prior knowledge
is available, one can use the uniform distribution over model parameters. The
most important advantage of Bayesian parameter learning is its ability to provide a
complete distribution over model parameters. Thus, one is able to look into, first, if
there are different parameter sets consistent with the data and, second, if so, look into
more detail at every one of them and rework the model, or measure additional data
if necessary. The distributions obtained in Bayesian approaches are highly useful to
design such additional experiments.



2.2 Challenges

Although we have seen, that Bayesian parameter learning is highly desirable and
important, we also have to deal with some problems in the efficient treatment
of Bayesian parameter learning algorithms, which has to be kept in mind when
using them.
   First, one has to consider that since the posterior distribution (1) is analytically
tractable only in simple cases, e.g., for linear models, one has to approximate it.
Methods which can find out of a family of given distributions the one which can best
approximate the posterior distribution are: Laplace approximation (fits a Gaussian
distribution) or variational Bayesian methods (fit all kinds of distributions). Since
one usually does not know in advance, which distribution, or even if a standard
distribution will fit the desired posterior distribution, we will focus on Markov chain
Monte Carlo (MCMC) algorithms to obtain a set of samples from the posterior.
In MCMC algorithms one starts with a starting value for the parameters in the
model, and then creates a Markov chain which reaches the desired distribution, also
150                                                             J. Mazur and L. Kaderali


called the stationary distribution, after a burn-in phase independent of the starting
value. Such a Markov chain is also called ergodic. Thus, in theory we will obtain
with infinitely many samples an excellent approximation of the desired distribution.
Since in practice we have to deal with finite samples, we need an efficient algorithm
which:
1. Converges fast to the stationary distribution.
2. Has a good mixing rate, i.e., the algorithm samples from the whole distribution
   in an efficient way and does not get stuck in modes.
The Metropolis–Hastings (MH) algorithm [10, 17], one of the simpler MCMC
schemes, samples from the desired distribution .  /. It requires a proposal dis-
tribution q.x;  /, also called transition kernel, to propose a new sample y which is
accepted with the probability
                                                     
                                          .y/q.y; x/
                         ˛.x; y/ D min 1;               :                           (3)
                                          .x/q.x; y/

Otherwise the chain stays at state x and a new sample is proposed. The MH
algorithm has the drawback that it samples only locally, and thus requires a large
number of steps to sample the full support of a distribution. Furthermore, it shows a
random walk behavior, such that the mixing rate is poor. This random walk behavior
can be circumvented by performing the steps in a more global way. To give one
example, the hybrid Monte Carlo algorithm [6] introduces momentum variables
 with associated energy K./, and then iteratively samples  from K./ and
follows the Hamiltonian dynamics of the system H.  ; / WD  ln .  / C K./
to explore the whole state space. This algorithm is based on the physical fact that
a state is completely described by its position and its velocity, and the energy of
an unperturbed system is always constant and is the sum of the energy of the
position and the energy of the velocity. The Bayesian inference problem for model
parameters is then represented by an imaginary physical system in which the state
corresponds to the set of unknown parameters !. The energy of the positions, the
potential energy, is described by the distribution .  / we are interested in. The
energy of the momentum variables K./, the kinetic energy, which describes the
velocity of the system, follows a multivariate Gaussian distribution, and thus is
easily sampled. A detailed analysis of the hybrid Monte Carlo algorithm can be
found in [18]. As a last remark, one has to mention that this algorithm is only usable,
provided derivatives of .  / according to the parameters can be calculated.
   Another approach is by using adaptive MCMC [1], where a combination of
parameterized proposal distributions qk; are used and the parameters  are updated
during the sampling procedure to obtain an “optimal” (often a criteria expressed
by expectations of the stationary distributions reached with the considered Markov
chains) transition kernel which converges fast to the stationary distribution and
has a good mixing rate. The problem with adaptive MCMC is, that the ergodicity
constraint may be violated. This can be bypassed by stopping adaptation after one
The Importance and Challenges of Bayesian Parameter Learning in Systems Biology                   151


is sure to have reached an optimal value of . However, then one is going in circles
like Andrieu and Thoms [1] state:
   . . . most criteria of interest [on the parameters  ] depend explicitly on features of , which
   can only be evaluated with. . . MCMC algorithms.

   A further approach are population-based MCMC algorithms [11]. The idea is
to start several Markov chains with different densities n , n 2 f1; : : : ; N g, and to
construct a valid MCMC algorithm which has

                                                   Y
                                                   N
                                            WD         n
                                                   nD1

as its invariant distribution where at least for one n, we have n D . The sequence
of distributions n can be selected in such a way that they are easier to simulate
than . Jasra et al. [11] suggest to use a combination of tempered and stratified
densities for   . The first one introduces temperature variables n 2 .0; 1 and
uses n / Œn . The idea is that for high temperatures, i.e., n close to zero, the
distributions are easily sampled and help to enlarge the mixing rate of the algorithm.
The objective of the second one is to take a partition of the parameter space and
provide an optimal kernel on each subpart. The chains in population-based MCMC
algorithms are started with different starting points, chosen from a distribution
which is over-dispersed compared to the desired distribution. On the chains then
one of the following three “genetic operators” is applied: mutation, crossover or
exchange. The mutation operator deals with the local exploration of the state space.
The crossover and the exchange operator deal with the global exploration of the
state space to exchange information between chains. To ensure that the ergodicity
constraint is fulfilled, the genetic operators are accepted according to (3).
    Which of these MCMC algorithms is suitable for a special problem, cannot be
answered in general. This is a problem specific question. However, since models
in systems biology are usually nonlinear, as they should be able to describe com-
plex biological behavior, like oscillations or switch-like behavior, the underlying
posterior distribution may contain a lot of ridges and is multimodal. This is nicely
illustrated in [7] for a simple model of a Circadian Oscillator. In our opinion,
population-based MCMC algorithms are a good choice for complex biological
models.
    Another problem often seen is that the posterior is flat in a particular coordinate
direction, indicating a model which is not identifiable. Recently, Gustafson [8]
and Xie and Carlin [27] gave some proposals as to how the informativeness of
data on Bayesian parameter estimates can be measured in non-identified models.
This may be even more relevant in the case where only limited amounts of and
vague biological prior knowledge is known. To obtain more informative data, an
experimental design framework for the Bayesian context is described in the next
section.
152                                                                       J. Mazur and L. Kaderali


3 Bayesian Experimental Design in Systems Biology

As described in the previous section, we usually have only a few data points to
use to reverse engineer the parameters of the model, which leads to identifiability
problems of the parameters. The incorporation of prior knowledge helps with this
shortcoming, but still the search space is typically very large and several regions in
the parameter space may describe the data and the biological system equally well.
   In Fig. 2, a typical framework for the development of a mathematical model is
shown. First, from biological knowledge, a mathematical model is designed, which
is used to predict some biological behavior. If this prediction does not adequately
describe the biological behavior, experimental design has to be performed to
determine new wetlab experiments which will improve the mathematical model
and/or the parameter estimates of this model the most. If now the prediction of
this newly obtained model describes biology accurately, we have found a model of
interest. Since the uniqueness of such a model cannot be guaranteed, we can end up
with several indistinguishable models. To stick to one model at the end, Occam’s
razor can be used to find the “simplest” model which describes the biological
behavior of interest. However, since biological experiments take a lot of effort and
are very expensive, the experimental design step is a crucial one.
   For a review of experimental design methods used in systems biology see [15].
Most often one “minimizes” the inverse of the Fisher information matrix F , which is
defined as the covariance matrix of the estimated parameters. Common scalar values
for the “minimization” of F 1 are the minimization of the determinant (D-optimal
design) or the minimization of the sum of eigenvalues (A-optimal design). These
classical alphabetic experimental designs were introduced by Kiefer in 1959 [14].
An application of an alphabetic optimal experimental design for the parameter
estimation of a cell signaling model is given in [2].
   The whole motivation for Bayesian parameter estimation deals with the fact
that different parameter values may describe the given data in a similar way. Thus
classical alphabetical experimental designs are not appropriate, since they assume
that the estimated parameters are near to the true parameters, and therefore only
the covariance matrix around this point is considered. To deal with several possible
parameter values, one can use Bayesian experimental design (BED). For a detailed
introduction into BED, see [5].
   Already in 1978, O’Hagan [19] stated concerning BED:
   . . . I cannot see how one can realistically approach optimal design in any other way.

Now, we want to give the main idea of BED. As a first ingredient we need
the predictive distribution for future data d for experiments e of interest, e.g.,
concentrations of mRNA at different time points. With a model M.!/ at hand
and prior knowledge on the model’s parameter values !, we obtain as predictive
distribution
                                    Z
                      p.d j M / D p.d j !; M /p.!/ d!:                        (4)
The Importance and Challenges of Bayesian Parameter Learning in Systems Biology              153




Fig. 2 General cycle of creating mathematical models in systems biology. Starting with a
mathematical model, some biological behavior is predicted. If this does not describe the biology,
experimental design is performed to determine optimal new wetlab experiments, which are then
used to improve the mathematical model. Once we obtained a model which predicts biological
behavior accurately, we are done


The next step now is to use Bayesian decision theory to decide which experiment to
perform next. For this purpose one needs a utility function U.d; e/ which depends
on the experiments we can perform and on the data these experiments will give us.
Since we do not know how the data will look like before the experiment is made,
the experiment of interest is where the expected utility
                                        Z
                            EU.e/ D         U.d; e/p.d j M / dd                              (5)

is maximal. Most often, the information of the new posterior distribution is
used as the utility function for BED. For a continuous random variable X , with
corresponding density function f , the information I.X / is defined as
                                 Z
                                                  
                       I.X / D       f .x/ ln f .x/ dx D  Ent.X /;                          (6)

where Ent.X / denotes the entropy of X . The entropy of a random variable gives a
measure of the uncertainty of this random variable, i.e., high entropy contained in
X means low information contained in X , and vice versa. Lately, Busetto et al. [4]
showed that BED outperforms alphabetic experimental designs for models for the
TOR pathway of Saccharomyces cerevisiæ.
   However, although there is a rich theory concerning BED, analytical solutions
are only available for linear models and assuming Gaussian distributions. Recently,
Steinke et al. [21] used Bayesian experimental design to identify gene regulatory
networks out of a linearized ODEs model together with perturbations of the steady
states. In the case of realistic biological models, i.e., non-linear models, BED
154                                                            J. Mazur and L. Kaderali


has to be solved with sampling methods, i.e., with MCMC algorithms. This is
computationally intractable without further considerations, since triple integrals
over prior model parameters, data and posterior model parameters have to be
solved (for illustration simply set (4) and (6) into (5)). Shewry and Wynn [20]
introduced in 1987 Maximum Entropy Sampling (MES) for Bayesian experimental
design purposes. Recently, MES was applied by van den Berg et al. [22] on seismic
amplitude versus offset experiments. Thus far, to our knowledge, MES was not
applied in the field of systems biology.
   The idea of MES in BED is to reformulate the computationally intractable
problem of finding the experiment, such that the new posterior distribution over
model parameters has maximal information. This is accomplished by finding the
experiment such that the distribution of the data generated with this experiment has
maximal entropy. In other words:
   Perform the experiment where you know the least!

This strategy is numerically much simpler since we only need the predictive
distribution of the data generated from some specific experiment. Thus, we just have
to simulate data of the underlying model according to the distribution of the model
parameters obtained in a first run of Bayesian parameter estimation. Hence, we only
have to solve one integral over prior model parameters (see (4)).



4 Summary and Outlook

In this article we argue that, since there is only a small amount of biological data
available, which additionally contains a lot of noise, Bayesian parameter estimation
is important in the field of systems biology. This is due to the fact that Bayesian
parameter estimation procedures give probability distributions over models and
model parameters, and such provide the possibility to account for different possible
explanations for the underlying data. Additionally, prior biological knowledge can
be used to reduce the search space.
    We also discussed the challenges concerning Bayesian parameter learning. Since
the desired posterior distributions are usually not of a simple form and contain a
lot of ridges and modes, we need an efficient MCMC algorithm to get the desired
samples. Several possibilities exist, such as the hybrid Monte Carlo algorithm,
adaptive MCMC algorithms or, as a very promising approach for complex biological
models, population-based MCMC algorithms.
    In our opinion, a very important focus for future research will be the development
and implementation of efficient algorithms for Bayesian experimental design. Max-
imum entropy sampling offers a potent possibility to make this task computationally
feasible.

Acknowledgements We are grateful for funding to the German Ministry of Education and
Research (BMBF), grant number 0313923 (FORSYS/Viroquant).
The Importance and Challenges of Bayesian Parameter Learning in Systems Biology                155


References

 1. C. Andrieu and J. Thoms. A tutorial on adaptive MCMC. Stat. Comput., 18:343–373, 2008.
 2. S. Bandara, J. P. Schlöder, R. Eils, H. G. Bock, and T. Meyer. Optimal experimental design for
    parameter estimation of a cell signaling model. PLoS Comput. Biol., 5(11):e1000558, 2009.
 3. R. J. Boys, D. J. Wilkinson, and T. B. L. Kirkwood. Bayesian inference for a discretely
    observed stochastic kinetic model. Stat. Comput., 18(2):125–135, 2008.
 4. A. G. Busetto, C. S. Ong, and J. M. Buhmann. Optimized expected information gain for
    nonlinear dynamical systems. In A. P. Danyluk, L. Bottou, and M. L. Littman, editors, ICML,
    volume 382 of ACM International Conference Proceeding Series, page 13. ACM, 2009.
 5. K. Chaloner and I. Verdinelli. Bayesian experimental design: A review. Statist. Sci.,
    10(3):273–304, 1995.
 6. D. Duane, A. D. Kennedy, B. J. Pendleton, and D. Roweth. Hybrid Monte Carlo. Phys. Lett. B,
    195:216–222, 1987.
 7. M. Girolami. Bayesian inference for differential equations. Theor. Comp. Sci., 408:4–16, 2008.
 8. P. Gustafson. What are the limits of posterior distributions arising from nonidentified models,
    and why should we care? J. Am. Stat. Assoc., 104(488):1682–1695, 2009.
 9. R. N. Gutenkunst, J. J. Waterfall, F. P. Casey, K. S. Brown, C. R. Myers, and J. P. Sethna.
    Universally sloppy parameter sensitivities in systems biology models. PLoS Comput. Biol.,
    3(10):e189, 2007.
10. W. K. Hastings. Monte Carlo sampling methods using Markov chains and their applications.
    Biometrika, 57(1):97–109, 1970.
11. A. Jasra, D. A. Stephens, and C. C. Holmes. On population-based simulation for static
    inference. Stat. Comput., 17:263–279, 2007.
12. L. Kaderali and N. Radde. Inferring gene regulatory networks from expression data. In
    A. Kelemen, A. Abraham, and Y. Chen, editors, Computational Intelligence in Bioinformatics,
    volume 94 of Studies in Computational Intelligence, pages 33–74. Springer, Berlin, 2008.
13. G. Karlebach and R. Shamir. Modelling and analysis of gene regulatory networks. Nat. Rev.
    Mol. Cell Biol., 9:770–780, 2008.
14. J. Kiefer. Optimum experimental designs. J. R. Stat. Soc. Series B Methodol., 21(2):272–319,
    1959.
15. C. Kreutz and J. Timmer. Systems biology: experimental design. FEBS J., 276:923–942, 2009.
16. J. Mazur, D. Ritter, G. Reinelt, and L. Kaderali. Reconstructing nonlinear dynamic models of
    gene regulation using stochastic sampling. BMC Bioinformatics, 10:448, 2009.
17. N. Metropolis, A. W. Rosenbluth, M. N. Rosenbluth, and A. H. Teller. Equations of state
    calculations by fast computing machines. J. Chem. Phys., 21(6):1087–1092, 1953.
18. R. M. Neal. Probabilistic inference using Markov chain Monte Carlo methods. Technical
    report, Department of Computer Science, University of Toronto, 1993.
19. A. O’Hagan and J. F. C. Kingman. Curve fitting and optimal design for prediction. J. R. Stat.
    Soc. Series B Methodol., 40(1):1–42, 1978.
20. M. C. Shewry and H. P. Wynn. Maximum entropy sampling. J. Appl. Stat., 14(2):165–170,
    1987.
21. F. Steinke, M. Seeger, and K. Tsuda. Experimental design for efficient identification of gene
    regulatory networks using sparse Bayesian models. BMC Syst. Biol., 1:51, 2007.
22. J. van den Berg, A. Curtis, and J. Trampert. Optimal nonlinear Bayesian experimental design:
    an application to amplitude versus offset experiments. Geophys. J. Int., 155(2):411–421, 2003.
23. V. Vyshemirsky and M. Girolami. Bayesian ranking of biochemical system models. Bioinfor-
    matics, 24(6):833–839, 2008.
24. V. Vyshemirsky and M. Girolami. BioBayes: A software package for Bayesian inference in
    systems biology. Bioinformatics, 24(17):1933–1934, 2008.
25. D. J. Wilkinson. Stochastic Modelling for Systems Biology. Chapman & Hall/CRC, Boca
    Raton, FL, USA, 2006.
156                                                                      J. Mazur and L. Kaderali


26. D. J. Wilkinson. Stochastic modelling for quantitative description of heterogeneous biological
    systems. Nat. Rev. Genet., 10:122–133, 2009.
27. Y. Xie and B. P. Carlin. Measures of Bayesian learning and identifiability in hierarchical
    models. J. Stat. Plan. Inference, 136:3458–3477, 2006.
Experiment Setups and Parameter Estimation
in Fluorescence Recovery After Photobleaching
Experiments: A Review of Current Practice

J. Beaudouin, Mario S. Mommer, Hans Georg Bock, and Roland Eils




Abstract Fluorescence Recovery After Photobleaching (FRAP) is a popular and
versatile family of methods used to estimate mobility and reaction parameters
in cellular systems. Part of an area containing a fluorescently labeled species is
bleached using a laser, and the effect of the perturbation of the spatial concentration
profile of the fluorescent species is monitored. Subsequently, the collected data is
reconciled with a model of the dynamics, thus yielding estimates for the parameters
of interest. While originally devised to elucidate transport parameters, it was soon
extended to the estimation of reaction rates, and is also used nowadays to answer a
variety of questions on the organization of cellular systems.
In this chapter, we review a variety of different approaches, classifying them
according to the sources of uncertainty that are addressed or ignored, and the type of
parameter that they attempt to estimate. We would like to highlight the importance
of the general methodology as a tool that can be widely applied to a large number
of situations.




J. Beaudouin ()
Division of Theoretical Bioinformatics, German Cancer Research Center (DKFZ),
Im Neuenheimer Feld 280, 69120 Heidelberg, Germany
e-mail: j.beaudouin@dkfz.de
M.S. Mommer ()  H.G. Bock
Interdisciplinary Center for Scientific Computing, Im Neuenheimer Feld 368,
69123 Heidelberg, Germany
e-mail: mario.mommer@iwr.uni-heidelberg.de; bock@iwr.uni-heidelberg.de
R. Eils
Division of Theoretical Bioinformatics, German Cancer Research Center (DKFZ),
Im Neuenheimer Feld 280, 69120 Heidelberg, Germany
Department for Bioinformatics and Functional Genomics, Institute for Pharmacy and
Molecular Biotechnology (IPMB), and Bioquant, Heidelberg University, Heidelberg, Germany
e-mail: r.eils@dkfz.de

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions               157
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 7,
© Springer-Verlag Berlin Heidelberg 2013
158                                                                    J. Beaudouin et al.


1 Introduction

Fluorescence recovery after photobleaching (FRAP) has become a method of choice
to investigate protein mobility in different media including living cells. The method
relies on the introduction of a fluorescent dye on a molecule of interest, on the
local perturbation of fluorescence distribution of the molecule population and on the
monitoring of fluorescence redistribution over time. The quantitative interpretation
of the kinetics of fluorescence redistribution can eventually lead to the identification
of the main processes that drive molecule mobility, and of their kinetic parameters,
and thus ultimately to a better understanding of intracellular processes.
    The mathematical description of the general FRAP methodology can be stated as
follows. We start by considering a domain ˝, usually representing the spatial extent
of a cell or an organelle.
    Within this domain ˝, we consider a fluid which includes the fluorescently
labelled species of interest. Transport within this fluid obeys, in the general case,
a reaction–diffusion–convection law (Anomalous diffusion can also be modelled
using reaction diffusion equations, see [15]). This law is parameterized by the quan-
tities of interest (reaction, diffusion, or convection coefficients) whose estimation is
the immediate objective of the FRAP experiment.
    To achieve this objective, the experimenter perturbs the concentration profile
of the fluorescent component, and records the response of the system to that
perturbation. Finally, a model of the process is used to obtain the parameters, using
either optimization methods, or closed form expressions that have been derived for
some cases.
    Essentially, we have the following setting. The transport of the set of species of
interest is given by a law of the general form
            @u
               D D.p/4u C a.p/  ru C f .u; p; v/                    on ˝             (1)
            @t

together with boundary conditions

                         
                       @u
              0 D F u;                                              on @˝             (2)
                       @n
where p captures the relevant parameters, and v is a time-dependent control
representing the bleaching process. The domain ˝ is in R3 , but is often considered
for modelling purposes to be in R2 , as discussed later.
   To obtain measurement values y D Jq .u/ for the estimation of parameters,
there is an a measurement function Jq involved, that has its own parameters q,
which may or may not have to be estimated separately or together with the
quantities of interest, depending on the situation. Such additional parameters may
be physiological properties of the cell, as well as performance characteristics of the
microscope. In a FRAP experiment, the measurement function is always defined in
terms of spatial distribution of the fluorescence of the sample.
A Review of FRAP Experiments                                                          159


    It is important to note that the setting of (1) is not in general a feasible model for
parameter estimation, and we have to regard it as an idealized setting from where
to derive more practical models. The actual, physical domain ˝ in a cell under
study has a very complex geometry whose details remain hidden to the experimenter
under normal conditions. Additionally, including this complex geometry for the
analysis may not be trivial (see e.g. [19]). Likewise, (1) has a very complex form, if
considered in full, that includes many different types of interactions and additional
species.
    Thus, to obtain the parameters of interest, the investigator must use a simplified
model for the estimation of the parameters. In it, a simplified geometry for ˝ is
chosen, and some of the terms in (1) are simplified using additional information
on what is relevant for the system. The FRAP family of techniques is notable
from a parameter estimation and experiment design perspective due to the richness
of possibilities in the choices of the experimental setup, measurement, modelling,
simulation, and parameter estimation techniques involved. The choices are driven
by the uncertainty present in the data, the particularities of the subject of study, as
well as by the limitations and capabilities of the wide range of instruments that can
be used.
    In the following pages we will give an overview on how this setting occurs
in actual applications. Different quantitative analysis approaches proposed in the
literature over the last three decades will be presented, with a main focus on the
analysis of protein mobility in living cells. We will also discuss the assumptions and
the limitations of the methods, related to potential experimental artefacts, complex
geometries and parameter identifiability. We will observe that the freedom of choice
of ingredients mentioned in the previous paragraph is indeed an important practical
aspect of the methodology, and not simply a theoretical possibility. We will also be
able to appreciate the importance of the technique by noticing that many instances
of the methodology are developed and published alongside a study of a relevant
biological problem.



2 The FRAP Experiment

To perform a FRAP experiment in living cells, one must first fluorescently label
molecules, most of the time proteins, of interest. In the context of protein, this
step has been greatly facilitated by the introduction of fluorescent proteins as a
standard tool of molecular biology in the 1990s [10]. Many different variants of
fluorescent proteins have been developed, covering the whole range of visible light.
These fluorescent proteins can easily be fused to proteins of interest using standard
molecular biology approaches to clone genes that encode for such protein fusions
and transfection to bring these genes in living cells where they are eventually
expressed.
   The experiment itself is performed by perturbing the fluorescence distribution of
the tagged proteins [14]. The standard experiment consists of using photobleaching.
160                                                                               J. Beaudouin et al.




Fig. 1 FRAP experiment simulation. A population of green molecules (Prebleach) diffusing with
a diffusion coefficient of 6 m2 /s was locally bleached within the white circle for 1 s. Fluorescence
redistribution was simulated over time (Postbleach), and fluorescence recovery inside the bleached
region was measured and normalized with the total intensity of the molecule population. Scale
bar: 5 mm



Briefly, when a fluorescent molecule is brought from its ground to its first electronic
state by a photon of the right energy, it can emit a photon with a lower energy, a
process called fluorescence. Once in the excited state, there is also a probability that
the fluorescence molecule switches to states where it is not fluorescent anymore,
a process that we summarize as photobleaching. While this process occurs when
fluorescent molecules are observed, it can be enhanced by applying a strong exciting
light to pump as many molecules as possible in the excited states and to bring them
in the photobleached state.
    To achieve the local perturbation of fluorescence distribution required for FRAP,
one needs to photobleach a pool of the fluorescent protein population. This is
typically achieved by using a laser at a wavelength that can excite the fluores-
cent protein. Such an experimental technique is now available in any laboratory
equipped with a confocal laser scanning microscope (CLSM). Such an instrument
is producing images of fluorescent samples by scanning them pixel-per-pixel and
measuring the fluorescence intensity of each pixel. The instrument is typically
equipped with an acousto-optical tunable filter that permits an almost instantaneous
switch from 0 to 100% of laser intensity from one pixel to the other during the
scanning process. This allows to perform the photobleaching in any desired region
within the fluorescent sample. Other microscopes used in biological laboratories
like wide-field or spinning disc microscopes may also be equipped for FRAP.
    The typical setup of a FRAP experiment using a CLSM is as follows. Images
are acquired at a specific set of time points, not necessarily evenly spaced. During
the acquisition of one of those images, a local pool of fluorescent molecules is
bleached through an increase of intensity of the scanning laser. Images acquired
after this point are used to monitor the redistribution of fluorescence (see Fig. 1).
Photobleaching is typically kept as short as possible but easily requires hundreds of
milliseconds to achieve a good contrast between bleached and non-bleached regions.
The resulting perturbed concentration of fluorescently labeled proteins, also known
as the bleach profile, is used as an initial condition in the simulations needed for
parameter estimation.
A Review of FRAP Experiments                                                       161


   Due to the time constrains imposed by the fluorescent recovery, and technical
constraints of the equipment, in many cases images are acquired in two dimensions,
even if the sample is three-dimensional. For all the methods, we assume that the
chemical properties of molecules are not changed by bleaching and that the FRAP
is performed on population of molecules that remains in steady state over the
whole experiment.



3 Quantitative FRAP Analysis

The quantitative analysis of a FRAP experiment can be seen as a two-dimensional
process: it depends not only of the design of the experiment, but also on the type
of process that is being investigated. In the biological context, these processes are
limited to diffusion, chemical interactions and flow. In this section, we will mostly
focus on the type of analysis depending on the design of the experiment and cover
two processes that have raised interest in cell biology in the past years: diffusion
and interactions.



3.1 Spot Bleaching

The historically first FRAP approach to be used and quantitatively analyzed was the
so-called spot bleaching. It consists of bleaching a small 2D-isotropic area of the
fluorescent sample and monitoring the fluorescence recovery within this region.
The data that is used for estimating the parameters consists in the percentage
of prebleaching fluorescence intensity observed in the bleached area over time,
and is called the recovery curve. Most analysis proposed in the literature assume
instantaneous bleaching, or that molecules do not significantly move during the
time interval when the laser is bleaching. Axelrod et al. [1] proposed the first closed
solutions for the fluorescence recovery in the context of diffusion combined with
flow. The analysis covered two types of bleaching profile: Gaussian and circular.
Diffusion is mathematically modelled by the following differential equation,

                               @C
                                  .r; t/ D D4C.r; t/;
                               @t
where C denotes the concentration of the species of interest and D is a number
representing the diffusion coefficient. In this case, for the Gaussian bleach profile,
the closed form solution for the recovery curve is

                         Fk .t/ D Fk K   ./P .2Kj2/;

where Fk is the intensity before bleaching,  is .1 C 8Dt=! 2 /,  ./ is the
gamma function and P .2Kj2/ the 2 -probability distribution. The number ! is
162                                                                                J. Beaudouin et al.


the half-width of the Gaussian at e 2 height, and K corresponds to the amount of
bleaching and can be determined from the intensity ratio of intensities before, Fk ,
and just after bleaching, Fk .0/:

                                  Fk .0/   1  e K
                                         D          :
                                   Fk         K

The recovery solution has been extended to the case when only a fraction ˛ of the
fluorescent molecules is mobile [27],

                 Fk .t/                                   Fk .0/
                        D ˛K   ./P .2Kj2/ C .1  ˛/        :
                  Fk                                       Fk

   For the circular bleaching profile, Soumpasis [23] gave the following closed
solution that is independent of K,

                     fk .t/ D e 2D =t ŒI0 .2D =t/ C I1 .2D =t/ ;

where fk .t/ is the fractional recovery curve .Fk .t/Fk .0//=.Fk Fk .0// and where
I0 and I1 are modified Bessel functions of the first kind.
   The spot bleaching analysis with a circular profile has been extended to the case
of reaction-diffusion models. Sprague et al. [25] analyzed the case of a diffusing
fluorescent molecule interacting with fixed binding sites homogeneously distributed.
A closed solution was given in the form of a Laplace transform,
                                  1 Feq
                    f rap.p/ D         .1  2K1 .qw/I1 .qw//
                                  p   p
                                                                                               (3)
                                           kon         Ceq
                                   1C                       ;
                                        p C koff     p C koff
where I1 and K1 are modified Bessel functions of the first and second kind, p is the
                            
Laplace variable, koff and kon are the off-rate and apparent on-rate of the interaction.
Also,
                            koff                             k
                 Feq D                   and      Ceq D  on        :
                         kon C koff                       kon C koff
Equation (3) is inverted numerically to yield the average intensity on the bleach spot
as a function of time. This curve can then be fitted to data.
    It is also possible to obtain fastly converging series expansions of the fluores-
cence in a bleach spot in terms of Fourier series. In Kumar et al. [13] this approach
is implemented for estimating the mobility of proteins in E. coli bacteria, yielding a
series expansion of the recovery of fluorescence over time,

                                   1
                                                      (                2    )
                                   X                               j
                   R.tI D; L/ D           hm  0
                                           j uj exp       t                 D :
                                   j D0
                                                                   L
A Review of FRAP Experiments                                                      163


This form includes the Fourier coefficients of the characteristic function of the
measurement spot and idealized initial conditions, fhm   j g and fuj g, as well as the
                                                                    0

length L of the cell. In this approach, only a few terms in the series are needed to
compute R to machine precision.
   An interesting alternative to spot FRAP is the continuous bleaching approach first
proposed by Peters [16]. Instead of bleaching a spot and monitoring the recovery of
fluorescence, one can continuously bleach the spot and analyze the fluorescence
decay kinetics. The decay given by fixed fluorescent molecules corresponds to
their bleaching kinetics, but mobile molecules moving inside the volume induce a
slower decay that can be quantitatively interpreted. Wachsmuth et al. [28] proposed
solutions for reaction–diffusion systems with fixed binding sites, which followed
the following differential equation, which is a specialization of (1),
                  @cdiff .r; t/
                                D D4cdiff .r; t/ C Q.r/cdiff .r; t/
                      @t
                                kon cB .r/cdiff .r; t/ C koff cimmo .r; t/

where cdiff and cimmo correspond to diffusing and bound protein concentrations, cB
is the binding site distribution. Q.r/ is the bleaching profile, assumed to induce a
first-order fluorescence decay, and D, kon and koff are the diffusion coefficient, and
the on- and off-rates of the interactions.



3.2 Analysis on Raw Image Data

The spot bleaching approach has been extensively developed for different models
and bleaching profiles. While the approach did match the experimental setup when
the method was developed (e.g. [1]), which meant that image analysis could not be
performed reliably, most experiments are nowadays performed on laser scanning
microscopes, which provide not only temporal but also spatial information. Spot
bleaching analysis average this spatial information over the bleach region, while
it can actually be combined with the temporal information to fit models. The
approaches in this subsection use spatially resolved information directly to estimate
the parameters of interest.
   FRAP experiments performed by bleaching a spot can be interpreted by measur-
ing the profile of fluorescence across the spot over time. If the fluorescence profile
is Gaussian and the system can be considered as infinite in size and if molecules
diffuse, then the profile remains Gaussian over time and the variance increases as
2Dt, D being the diffusion coefficient, independently of the initial conditions [7],

            C.x; y; t/ D C0 .t/ C ŒCU  C0 .t/
                                                                     
                                      fŒx  x0 .t/2 C Œy  y0 .t/2 g
                          1  exp 
                                              R02 .0/ C 8Dt
164                                                                  J. Beaudouin et al.


where x0 .t/ and y0 .t/ are the locations of the center of the Gaussian, R0 .0/ is
the Gaussian width at time 0, C0 .t/ and CU are the intensity at position 0 and
infinitely far from the center. This profile analysis can be extended to other bleach
profiles [12].
   For fluorescent samples that are large enough, another approach to analyze
diffusion consists of bleaching a periodic pattern [22]. As high frequencies decay
faster than low ones, the decay of the amplitude of the bleached pattern rapidly tends
towards a single exponential with a characteristic time of P 2 =.4D 2 /, D being the
diffusion coefficient and P the period of the pattern.
   Extending this method, one can also easily analyze post-bleach images in the
Fourier space, as each spatial frequency q gives an exponential decay over time
with a characteristic time of 1=.4D 2 q 2 / [3, 26].
   Finally computers are now powerful enough to allow direct simulations of
fluorescence distribution over time and space. This was performed in Beaudouin
et al. to study nuclear protein dynamics in mammalian cells [2]. In this case, a
reaction–diffusion system was simulated using a finite difference approach taking
into account the real geometry of the nucleus.



4 Limitations Introduced by the Assumptions

4.1 Bleaching Duration and Initial Conditions

Original studies on spot bleaching approaches assumed instantaneous bleaching,
meaning that molecules do not significantly move during the bleaching. In practice
this means that bleach duration has to be much shorter than the characteristic time
of fluorescence recovery. The commonly used CLSM has the disadvantage of being
slow compared to a system like in Axelrod [1] where the laser is continuously
illuminating the same spot. This can lead to a first postbleach image spot that
is larger than expected due to movement of fluorescent molecules inside the
spot and photobleached molecules outside the spot during the bleach. Applying
the spot bleaching fitting functions can lead to a significant underestimation of
diffusion coefficients [5, 29]. This would notably happen for soluble proteins with
diffusion coefficients in the range of 10–100 m2 /s [11]. In this context, analysis
approaches that do not require information about the bleaching itself are more
appropriate.
    The problem of molecule mobility during the bleaching is more complex in the
context of reaction–diffusion systems. If the fluorescent molecule interacts with
another molecule, the observed intensity corresponds to two populations: the free
and the bound molecules. As their mobility is different, their distribution on the
first postbleach image is also different. So far analysis methods, including the ones
independent of bleaching parameters, have neglected this effect and may lead to
wrong parameter estimates.
A Review of FRAP Experiments                                                    165


4.2 Sample Geometry

Most analysis methods assume a cell of infinite spatial extent, which is reasonable
when the size of the bleach spot is much smaller than the cell under study. As a
consequence, when this assumption is necessary, the bleach region is typically kept
as small as possible in comparison to the size of the sample, which can limit the
signal-to-noise ratio and thus degrade the accuracy of the parameter estimates.
    This can also lead to overestimation of immobile fraction when the normalization
is not performed accurately: bleaching leads to the depletion of a fluorescent
pool, therefore the recovery intensity cannot reach the initial intensity. One way
to compensate for this is to normalize with the total fluorescence intensity of the
sample over time (e.g. [2, 17]).
    Models can also be designed to take into account the finite size of the sample.
This has been performed in the context of bacteria, where the elongated geometry
of the cell can be modelled as a one-dimensional interval [8, 13]. In both studies,
methods were based on the analysis of the Fourier transform of the images. This
was also applied for mammalian cell nucleus, where the system was assumed to
be a disk and where parameters were estimated numerically using a Gaussian spot
bleaching approach [6]. Numerical simulations of the partial differential equations
derived from reaction–diffusion models used in [2] take the real closed geometry of
the system into account, discretized in the finite difference grid.
    While performing FRAP with CLSM is almost always limited to two dimen-
sions, living cells are three-dimensional samples. Nevertheless live cell imaging
experiments are often performed with adherent cells, so that samples are typically
thin. Therefore one strategy to circumvent the third dimension problem is to
use objectives of low numerical aperture that generate quasi cylindrical vertical
illumination at the scale of the sample [2], and consider the two dimensional
images as projections of the three-dimensional fluorescence distribution. One
can also consider some aspects of the third dimension, notably the point-spread
function (PSF) and the confocality of the CLSM, to build recovery models. This
was performed for the case of diffusion and circular bleaching by Braeckmans
et al. [4]. Finally, as images are the convolution product of the original object
with the PSF of the instrument, the easiest approach for this problem may be to
use the Fourier space: the Fourier transform of the fluorescence recovery images
are simply the product of the PSF Fourier transform and the one of the spatial
fluorescence distribution. Therefore the exponential decays described above remain
valid [3].
    These approaches require samples that have constant or infinite depth. This
assumption was tested in the case of mammalian cell nucleus by simulating
FRAP with the real 3D geometry of the nucleus and simulating CLSM imaging
from this simulation [2]. In this case the quality of the fits was not affected,
but a parameter deviation of around 10% was observed between 3D and CLSM
simulations.
166                                                                    J. Beaudouin et al.


4.3 Reversibility of Photobleaching

The use of fluorescent proteins considerably facilitates FRAP experiments in
living cells. One assumption of all the analysis methods is that photobleaching is
irreversible. This is nevertheless only an approximation as there is a probability that
fluorescent proteins in the excited states transiently switch to a dark state, on top of
the irreversible bleached state, before coming back to the ground state. As this is
a probabilistic process, the dark state is enriched during bleaching and is depleted
again during the postbleach acquisition when excitation is low. For the GFP mutant
S65T, the residency time in the dark state is 1.6s and the depletion of the dark
state during the first postbleach images can therefore interfere with fluorescence
recovery due to protein mobility [9]. This reversibility was also observed for other
fluorescent proteins [21]. This effect would affect all the analysis methods; its
correction is non-trivial and has not been performed so far. It would require a good
knowledge of the reversible process and its incorporation in the spatio-temporal
model of bleaching and recovery. Therefore it may be easier to implement it in
methods that already incorporate bleach duration and amplitude. An experimental
alternative would consist in using techniques that generate fluorescence, by pho-
toactivation/conversion/switching, instead of photobleaching it. Even if the process
is reversible or not instantaneous, one can easily normalize it by dividing local
intensities with the total one [2]. Such an approach can be improved nowadays
thanks to the development of such fluorescent proteins [20].



4.4 Model Choice and Parameter Identifiability

One of the difficulties in the field has been the generation of models to fit to the
data. Diffusion models have often been used even in cases where diffusion was not
the only process driving or limiting molecule mobility. On the other hand, other
studies have used interaction models neglecting diffusion while this assumption
was not justified (see [24]). Such studies were notably performed in the nucleus
of mammalian cells and the argument to justify this assumption was that the time of
fluorescence redistribution was long compared to the expected one if the protein of
interest was not interacting. The mistake in that case was that binding sites fill the
whole sample and can therefore generate fluorescence recoveries that are slow but
still limited by diffusion.
    Inaccurate estimation of parameters may not only come from a wrong choice
of model but also from limited parameter identifiability. This is a typical problem
in reaction–diffusion systems. In the ideal case, one can estimate the diffusion
coefficient of the different species, an off-rate and an apparent on-rate of the
interaction. But often the system may reach the limit when the diffusion or the
interaction kinetics do not show any contribution [2, 6, 25]. In the first case where
diffusion is not contributing, one can use simple interaction models that lead to
A Review of FRAP Experiments                                                                 167


exponential fluorescence recovery [18]. In the second case where the reaction is
on faster timescales than diffusion, the system follows a diffusive model where the
diffusion coefficient is a linear combination of the one of the free molecule and
the one of the molecule complexed with its interacting partner. The coefficients of
the linear combination correspond to the percentage of free and bound molecules.
Determining which model is correct is not a trivial task, as a direct comparison of fits
of different models is not enough. A complex model typically gives better fits than
a simpler one containing less parameters, even if a simpler one is also correct. To
discriminate between the complete reaction-diffusion model and the simpler cases,
one can compare their capacity to fit the data using statistical tests that takes into
account the different amount of parameters of the different models.



5 Discussion and Conclusions

We believe that with this article we have made a case for considering FRAP as an
important and interesting experimental technique where many open fundamental
questions remain. We have seen that while the basic idea is simple, it presents a
great range of opportunities to make creative use of the physical and mathematical
characteristics of the underlying processes.
    Thus, the choice of bleach profile is motivated by the properties of the laser, the
microscope used, and the mathematical description of the properties of diffusion–
convection–reaction phenomena. It can be of different shapes, and have different
temporal profiles, and thus lead to a variety of different parameter estimation
problems.
    We have also demonstrated that the flexibility of the method is not just a
theoretical possibility, but a fundamental property of the methodology. It is this
adaptability that makes it such a great asset in practice. We also believe that there
is still a lot of potential in the methodology, as few studies have really looked at the
methodology as a whole and analyzed the popular choices from the point of view of
parameter estimation and experimental design as established disciplines. We hope
that by raising awareness on this issue, and through future work, we will be able
to contribute to change this state of affairs, and bring the FRAP approach closer to
realizing its full potential.



References

 1. D. Axelrod, D. E. Koppel, J. Schlessinger, E. Elson, and W. W. Webb. Mobility measurement
    by analysis of fluorescence photobleaching recovery kinetics. Biophys J, 16(9):1055–69, 1976.
 2. J. Beaudouin, F. Mora-Bermudez, T. Klee, N. Daigle, and J. Ellenberg. Dissecting the
    contribution of diffusion and interactions to the mobility of nuclear proteins. Biophys J,
    90(6):1878–94, 2006.
168                                                                              J. Beaudouin et al.


 3. D. A. Berk, F. Yuan, M. Leunig, and R. K. Jain. Fluorescence photobleaching with spatial
    fourier analysis: measurement of diffusion in light-scattering media. Biophys J, 65(6):2428–
    36, 1993.
 4. K. Braeckmans, L. Peeters, N. N. Sanders, S. C. De Smedt, and J. Demeester. Three-
    dimensional fluorescence recovery after photobleaching with the confocal scanning laser
    microscope. Biophys J, 85(4):2240–52, 2003.
 5. J. Braga, J. M. Desterro, and M. Carmo-Fonseca. Intracellular macromolecular mobility mea-
    sured by fluorescence recovery after photobleaching with confocal laser scanning microscopes.
    Mol Biol Cell, 15(10):4749–60, 2004.
 6. J. Braga, J. G. McNally, and M. Carmo-Fonseca. A reaction-diffusion model to study rna
    motion by quantitative fluorescence recovery after photobleaching. Biophys J, 92(8):2694–703,
    2007.
 7. S. R. Chary and R. K. Jain. Direct measurement of interstitial convection and diffusion of
    albumin in normal and neoplastic tissues by fluorescence photobleaching. Proc Natl Acad Sci
    U S A, 86(14):5385–9, 1989.
 8. M. B. Elowitz, M. G. Surette, P. E. Wolf, J. B. Stock, and S. Leibler. Protein mobility in the
    cytoplasm of escherichia coli. J Bacteriol, 181(1):197–203, 1999.
 9. M. F. Garcia-Parajo, G. M. Segers-Nolten, J. A. Veerman, J. Greve, and N. F. van Hulst. Real-
    time light-driven dynamics of the fluorescence emission in single green fluorescent protein
    molecules. Proc Natl Acad Sci U S A, 97(13):7237–42, 2000.
10. B. N. Giepmans, S. R. Adams, M. H. Ellisman, and R. Y. Tsien. The fluorescent toolbox for
    assessing protein location and function. Science, 312(5771):217–24, 2006.
11. N. Klonis, M. Rug, I. Harper, M. Wickham, A. Cowman, and L. Tilley. Fluorescence
    photobleaching analysis for the study of cellular dynamics. Eur Biophys J, 31(1):36–51, 2002.
12. U. Kubitscheck, P. Wedekind, and R. Peters. Lateral diffusion measurement at high spatial
    resolution by scanning microphotolysis in a confocal microscope. Biophys J, 67(3):948–56,
    1994.
13. M. Kumar, M. S. Mommer, and V. Sourjik. Mobility of cytoplasmic, membrane, and
    dna-binding proteins in escherichia coli. Biophys J, 98(4):552–9, 2010.
14. J. Lippincott-Schwartz, E. Snapp, and A. Kenworthy. Studying protein dynamics in living cells.
    Nat Rev Mol Cell Biol, 2(6):444–56, 2001.
15. M. S. Mommer and D. Lebiedz. Modelling subdiffusion using reaction diffusion systems.
    SIAM J. on Appl. Math., 70(1):112–132, 2009.
16. R. Peters, A. Brunger, and K. Schulten. Continuous fluorescence microphotolysis: A sensitive
    method for study of diffusion processes in single cells. Proc Natl Acad Sci U S A, 78(2):962–
    966, 1981.
17. R. D. Phair and T. Misteli. High mobility of proteins in the mammalian cell nucleus. Nature,
    404(6778):604–9, 2000.
18. G. Rabut, V. Doye, and J. Ellenberg. Mapping the dynamic organization of the nuclear pore
    complex inside single living cells. Nat Cell Biol, 6(11):1114–21, 2004.
19. I. F. Sbalzarini, A. Mezzacasa, A. Helenius, and P. Koumoutsakos. Effects of organelle shape
    on fluorescence recovery after photobleaching. Biophys J, 89(3):1482–92, 2005.
20. N. C. Shaner, G. H. Patterson, and M. W. Davidson. Advances in fluorescent protein
    technology. J Cell Sci, 120(Pt 24):4247–60, 2007.
21. D. Sinnecker, P. Voigt, N. Hellwig, and M. Schaefer. Reversible photobleaching of enhanced
    green fluorescent proteins. Biochemistry, 44(18):7085–94, 2005.
22. B. A. Smith and H. M. McConnell. Determination of molecular motion in membranes using
    periodic pattern photobleaching. Proc Natl Acad Sci U S A, 75(6):2759–63, 1978.
23. D. M. Soumpasis. Theoretical analysis of fluorescence photobleaching recovery experiments.
    Biophys J, 41(1):95–7, 1983.
24. B. L. Sprague and J. G. McNally. Frap analysis of binding: proper and fitting. Trends Cell Biol,
    15(2):84–91, 2005.
25. B. L. Sprague, R. L. Pego, D. A. Stavreva, and J. G. McNally. Analysis of binding reactions by
    fluorescence recovery after photobleaching. Biophys J, 86(6):3473–95, 2004.
A Review of FRAP Experiments                                                                 169


26. T. T. Tsay and K. A. Jacobson. Spatial fourier analysis of video photobleaching measurements.
    principles and optimization. Biophys J, 60(2):360–8, 1991.
27. A. Tsuji and S. Ohnishi. Restriction of the lateral motion of band 3 in the erythrocyte
    membrane by the cytoskeletal network: dependence on spectrin association state. Biochemistry,
    25(20):6133–9, 1986.
28. M. Wachsmuth, T. Weidemann, G. Muller, U. W. Hoffmann-Rohrer, T. A. Knoch, W. Waldeck,
    and J. Langowski. Analyzing intracellular binding and diffusion with continuous fluorescence
    photobleaching. Biophys J, 84(5):3353–63, 2003.
29. M. Weiss. Challenges and artifacts in quantitative photobleaching experiments. Traffic,
    5(9):662–71, 2004.
Drug Resistance in Infectious Diseases:
Modeling, Parameter Estimation
and Numerical Simulation

Le Thi Thanh An and Willi Jäger




Abstract Infectious diseases are drawing our attention again. In recent years,
we have been confronted with SARS, bird-flu, swine-flu and many other severe
diseases. In addition, pathogens are getting resistant to drugs controlling them. In
this paper we establish a new population dynamical system of infectious diseases
including drug treatment. We take into account both sensitive and resistant parasites.
The unknown model parameters are fitted based on a set of data for malaria from
Cisse, Burkina Faso. The fitted model is used to investigate the influence of drug
treatment on drug resistance. Based on these investigations, treatment strategies to
reduce drug resistance can be elaborated.

Keywords Differential equation models • Drug resistance • Infectious diseases •
Vector-borne diseases


1 Introduction

This paper is organized as follows. In the first section we give a short overview on
the drug resistance models existing so far. In Section 2, we present a new model
describing the dynamics of pathogen, transmitter and human populations including
drug treatment. Section 3 is devoted to doing parameter estimation and simulation.
Estimation results and simulations with controllable factors are performed here. The
last section is reserved for discussion of the simulation results and conclusions.
    As we know, infectious diseases were and are still being a big burden to every
country. For a long time a lot of scientists have been studying them intensively
[1, 8, 12]. Although being considered as classical field of mathematical modeling,



L.T.T. An ()  W. Jäger
Interdisciplinary Center for Scientific Computing (IWR), Heidelberg, Germany
e-mail: an.lethithanh@iwr.uni-heidelberg.de; jaeger@iwr.uni-heidelberg.de

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions          171
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 8,
© Springer-Verlag Berlin Heidelberg 2013
172                                                                L.T.T. An and W. Jäger


it is now attracting a lot of attention again. Pathogens are getting more resistant
to drugs, infectious diseases can spread very fast and become a danger for the
populations. Including this effect in the model equations is an important condition
to meet reality in epidemics.
    We are going to set up a mathematical model under general aspects, but we select
malaria as the central case, where we have a chance to obtain data to calibrate and
validate our model.
    For the rest of this section, we mainly discuss modeling of drug resistance with
central focus on malaria. Historically, there has been a lot of research on this disease,
see [5, 7, 13] and references therein. However, up to now it is very difficult to obtain
satisfactory malaria models. In general, before modeling authors have their own
questions. They would then call a new model to be “good enough” if it is able to
answer their questions. One of the challenges with malaria is that it comes together
with Anopheles mosquitoes and parasites—Plasmodium falciparum, Plasmodium
vivax, Plasmodium ovale and Plasmodium malariae. Their organisms are much
more complex compared to other pathogens with single-cell or even simpler- such
as bacteria, archaea, viruses, etc. This can also partly explain why there are only few
mathematical models concerning drug treatment in malaria.
    What may influence drug resistance?
– In most diseases, it takes long time to find out which factors may characterize
  and reduce drug efficiency. Usually, there are many individuals of the pathogen
  population which already have “resistant” mechanisms. They are naturally not
  eliminated by drugs. When infected people take medicine, it reduces sensitive
  parasites and makes good environment for resistance growth.
– In malaria, parasite organisms are very complex, they would either mutate or
  adapt variously. They have a better chance to survive after natural selection and
  maintain their best genetic system. Hence, their new generations are more “fit”
  in a drug environment.
– Another important reason for drug resistance is that malaria is more widespread
  in tropical countries, like in Africa, where it is difficult to have a global policy to
  treat all patients in a proper way.
    For the rest of this paper, we are more interested in mathematical malaria
modeling. In history, there were many valuable contributions by Ross, MacDonald,
May, Dietz, see [1, 5] and references therein. However, resistance was not well
investigated. Mathematicians have only recently started to pay attention to this
field. Two recent malaria models concerning drug resistance came from Aneke [2]
and Esteva et al. [6]. Here the authors described a model of hosts and vectors
dealing with both resistant and sensitive strains. In these papers and also some other
cases, authors focus on analyzing the models to establish positive equilibrium and
studying their stability under certain assumptions. Although in [6] the authors tried
numerical simulation, they said that the model needed to be validated using realistic
epidemiological data. So far there was very few data available to calibrate malaria
and other vector-borne disease models.
Drug Resistance in Infectious Diseases                                             173


    In this paper, we derive a model which consists of differential equations including
all host and pathogen populations. Such models are complex to perform analysis,
and thus we are going to study them numerically. Since from experiments not all
parameters are known directly, we have to use parameter estimation techniques to
determine their values. After this, the model is used for computer experiments. We
obtain results on treatment strategies, some of which have been recently confirmed
by experimentalists after a lot of works in hospitals and laboratories [7, 13].



2 Modeling of Population Dynamics Including
  Drug Treatment

We divide this part into two sub-sections: the first one introduces all model
compartments and their network, the second one presents model formulation.



2.1 The Network of Compartments

There are two main groups of infectious diseases: the first group (such as
HIV/AIDS, tuberculosis) can be transmitted directly from one person to another
and the second group (such as malaria, dengue hemorrhagic fever) is transmitted
only via an intermediate host. From the perspective of infectious diseases, vectors
are the transmitters of disease-causing organisms that carry the pathogens from one
host to another [14]. That’s why a disease belonging to the second group is called a
vector-borne disease.
   As we discussed before, we would like to model dynamics of pathogen, vector
and human populations. We consider two hosts: number of humans denoted by H1
and vectors denoted by H2 . The pathogens within human hosts are denoted by P .
Like in the classical case, there are three compartments for human hosts which
we call susceptible H1s , infected H1i , recovered H1r . We have two compartments
for vector hosts H2s , H2i —susceptible and infected. Since drugs are employed,
there are two compartments for pathogens, non-resistant and resistant Pn , Pr ,
respectively. All transmissions among the seven groups are described in Fig. 1.



2.2 Model Formulation

Now we give an overview of the modeled processes, as schematically indicated in
Fig. 1. Since our focus is drug treatment for humans, so the model may not include
some interference applying on vectors directly. We include the influence of drugs
on the host population and the subsequent effects on pathogen population.
174                                                               L.T.T. An and W. Jäger

Fig. 1 Network for the
population dynamics with
drug treatment




Remark. During the course of our study, we discover that some parts of the
extracted data are not precise enough and can have some effect on parameter
estimation and simulation. We revise them and exclude the imprecise values. The
model is improved in parallel with this process. Despite the fact that the usable data
is less, we can obtain better fit compared to the first estimation, see Fig. 3.


2.2.1 Susceptible Human Population H1s

In vector-borne diseases, human hosts become infected only after coming in contact
with vectors, so there is often no vertical transmission, e.g. from parents to children.
Every new offspring goes to the susceptible class. Like other epidemic models,
we use common denotations for the natural birth rates of susceptible, infected,
recovered human classes b1s ; b1i ; b1r . Also as convention, mortality rate of H1s
is denoted by m1s , infection rate by i1 and re-susceptibility rate by r (individuals
from recovered class H1r after a certain time come back to susceptible class H1s ).
Values of m1s ; i1 are given in the next section and r is an unknown parameter which
can be found after fitting the data. The dynamic equation of the susceptible human
population is the following:

  dH1s                                       H2i
       D b1s H1s C b1i H1i C b1r H1r  i1           H1s C rH1r  m1s H1s : (1)
   dt                                     H2i C H2s

                                                 H2i
Notice that the infection term depends on                , which implies that there are
                                            H2i C H2s
too many vectors so that they have to compete with each other to get successful
contact to humans (e.g., obtain a blood meal in case of malaria). This is a quite
usual situation in Africa, where the tropical climate is suitable for vector (mosquito)
development. Although mainly infected female Anopheles mosquitoes can transmit
Drug Resistance in Infectious Diseases                                              175


malaria, they still have to compete with other un-infected mosquitoes to get
blood meals. On the other hand, the size of the mosquito population induces a
corresponding protection force from human side.
   Concerning additional details for parameter r, we are aware that different drugs
have different half-lives. They partly remain inside human bodies after treatment
and provide the same protection as immunity. Medically, we consider five times of
drug half-life equal to wash-out time. When drug is washed out and immunity is no
longer active, the person returns to the susceptible class. This process is modeled by
formula r D kr r0 , where r0 D Œmax.T; d /1 , T is natural immune duration, d is
drug wash-out duration; kr is a scalar factor subject to estimation. After fitting, we
use this formula for control simulation, with the controllable parameter d .



2.2.2 Infected Human Population H1i

After susceptible individuals get infected with rate i1 , they go to the infected class.
Here are two possibilities how they can move out of this class: either they recover
after treatment or they can not recover and die. The natural and disease-induced
mortality rate is denoted by m1i with value based on literature [11], and the recovery
rate  is unknown parameter.

                     dH1i         H2i
                          D i1           H1s  H1i  m1i H1i :                     (2)
                      dt       H2i C H2s

Moreover, we foresee that the recovery rate  depends on the individual immunity,
the employed medical treatment and the way how the drug is administrated. We
are going to take the data from Cisse in Burkina Faso, a small and poor village.
We should notice that most of the local population does not have access to any
treatment easily. With support from a project between Heidelberg researchers and
local people, classical Chloroquine regimen was given to all patients and showed
good effect. That is why in simulation we can assume that drugs start with a good
efficacy. When one patient takes the full dose as recommended, all his/her sensitive
pathogens are killed at rate e. The proportion of people that follows proper treatment
is expressed by ˛.
    In general, most of the patients carry both sensitive and resistant parasites. Drug
treatment strengthens the immunity and shortens the recovery process. In other
words, it helps to increase the recovery rate. We combine immune and treatment
effects in formula
                                  D kˇ eˇ˛ C ˇ.1  ˛/;

where ˇ is the rate of parasites which are eliminated by natural host immunity
without treatment, kˇ e is the factor which expresses how drugs strengthen the
immunity in treated patients. The value of kˇ is subject to estimation.
176                                                                  L.T.T. An and W. Jäger


2.2.3 Recovered Human Population H1r

All recovered individuals from H1i go to the recovered class H1r . For a certain while
they have protection due to the retained drug and natural immunity. Depending on
different diseases they can or can not be reinfected again. With malaria, especially
in highly endemic areas, all recovered individuals eventually lose their immunity
and return to susceptible class. The process can be fast or slow depending on drug
wash-out duration and individual health. We have already explained the meaning of
r in the Sect. 2.2.1 above. We also call m1r mortality rate of recovered class H1r ,
the value of m1r is given in Table 1.

                          dH1r
                               D H1i  rH1r  m1r H1r :                                (3)
                           dt


2.2.4 Susceptible Vector Population H2 s

This compartment is similar to the susceptible human compartment. However, since
parasites do not influence vectors in the same way as they influence humans, there
is no recovery or re-susceptibility effect.
    Let b2s ; b2i be the unknown birth-rates of susceptible and infected vectors. In
addition, eggs from vectors (mosquitoes) are supposed to be able to hibernate over
unfavorable time spans and hatch to become new vectors when the season provides
better conditions. This process has an effect close to immigration and emigration,
modeled by parameter b2 . Vectors become infected on contacting infected humans
in class H1i , this is modeled by rate i2 . All of these four parameters are subject to
estimation. Mortality rate of vectors m2s is taken as in [11].

                                                               
   dH2s                                             H1i
        D b2s H2s C b2i H2i C b2  i2                               H2s  m2s H2s :     (4)
    dt                                        H1s C H1i C H1r




2.2.5 Infected Vector Population H2 i

Expectedly, the infected vector population and the infected human population have
similar dynamics. All infected individuals from susceptible class H2s go to H2i .
Since the life-cycle of vectors is not so long, in most cases parasites stay in vectors’
abdomen until they die. The mortality rate of vectors is denoted by m2i , its value is
given in Table 1.

                                             
                  dH2i              H1i
                       D i2                     H2s  m2i H2i :                         (5)
                   dt         H1s C H1i C H1r
Drug Resistance in Infectious Diseases                                            177


2.2.6 Non-resistant Parasite Population Pn

Now we pay attention to parasite population in humans. They are supposed to
be inside the infected human class H1i , so naturally depend on H1i . Since this
dependence is likely reduced when the number of infected human becomes large, we
                                                H1i
use Michaelis–Menten relation, involving               . We also assume that parasite
                                            C C H1i
population growth follows the logistic rule governed by rate bpn ; bpr and a maximal
capacity K.
   Unlike the hosts, parasites usually clone themselves, so in some sense there is no
“death.” It practically applies for malaria parasites in humans, they only multiply
asexually inside human red blood cells. On the other hand, all parasites inside
infected hosts also die out due to the mortality of the infected hosts.
   For a given treatment, there is the proportion ˛ of the infected human population
H1i , who received full doses. Immunity and drug can eliminate pathogens with rate
. C ˛e/, e presents the rate at which (sensitive) parasites are eliminated by drug.
   Also due to drug presence, some sensitive pathogens need to change themselves
to be able to increase their chances of survival, such as by mutation or adaptation.
This makes a certain ratio of sensitive pathogens become resistant, the process is
occurring with rate
                                           ˛min.d; d0 /
                              s D s0 C kd                :
                                                 e
The rate s0 describes the mutation and the part kd ˛ min.d; d0 /=e describes the
adaption rate. We assume that the adaption rate is directly increased in the same
time with the proportion ˛ of treatment and drug wash-out duration d , but inversely
proportional to the efficacy e of the given treatment. There is also a parameter d0 ,
an upper threshold of drug wash out duration d , which implies that above a certain
limit parasite adaptation rate would not increase considerably but rather stay the
same. Factor kd is an unknown subject to estimation.
                                       
   dPn         H1i              Pn C Pr
       D bpn                 1           Pn  m1i Pn  . C ˛e/Pn  sPn :        (6)
    dt       C C H1i               K


2.2.7 Resistant Parasite Population Pr

As we mentioned before, the resistant parasite population Pr grows with the rate
bpr . It decreases due to H1i -death rate m1i or is eliminated by host immunity .
Since resistant parasite population is fitter in drug presence, it gains some new ones
from sensitive population sPn .
                                             
          dPr         H1i             Pn C Pr
              D bpr                1           Pr  m1i Pr  Pr C sPn :         (7)
           dt       C C H1i              K
178                                                                          L.T.T. An and W. Jäger


   Now we put together all the equations (1)–(7). We obtain one system which is
related to our network in Fig. 1. This shows clearly what is included in the dynamical
system:

   dH1s                                       H2i
        D b1s H1s C b1i H1i C b1r H1r  i1           H1s C rH1r  m1s H1s ;
    dt                                     H2i C H2s

   dH1i         H2i
        D i1           H1s  H1i  m1i H1i ;
    dt       H2i C H2s

   dH1r
        D H1i  rH1r  m1r H1r ;
    dt

   dH2s                                     H1i
        D b2s H2s C b2i H2i C b2  i2                 H2s  m2s H2s ;                             (8)
    dt                                H1s C H1i C H1r

   dH2i             H1i
         D i2                 H2s  m2i H2i ;
    dt        H1s C H1i C H1r
                                   
   dPn          H1i        Pn C Pr
        D bpn           1            Pn  m1i Pn  . C ˛e/Pn  sPn ;
    dt        C C H1i          K
                                        
   dPr         H1i               Pn C Pr
       D bpr                  1           Pr  m1i Pr  Pr C sPn
    dt       C C H1i                K

where
                                 r D kr r0 D kr max1 .T; d /;
                                    D kˇ eˇ˛ C ˇ.1  ˛/;
                                s D s0 C kd ˛e 1 min.d; d0 /:

All initial conditions are given:

 .H1s ; H1i ; H1r ; H2s ; H2i ; Pn ; Pr /.t 0 / D .H1s0 ; H1i0 ; H1r
                                                                  0     0
                                                                     ; H2s ; H2i0 ; Pn0 ; Pr0 /  0;

                     especially the susceptible classes H1s0 ; H2s
                                                                0
                                                                   > 0:
   This is a non-linear differential equation system. The system is designed for
vector-borne diseases. Compared to the already established models concerning drug
resistance of vector-borne diseases, such as in [2,6], we add two new compartments
of parasites. They are either sensitive or resistant to the given drug. Drug treatment
can take effect on infected human hosts H1i , sensitive parasites Pn and partly on
resistant parasites Pr inside the infected humans.
Drug Resistance in Infectious Diseases                                             179


3 Parameter Estimation and Numerical Simulation

For numerical study, we often use finite interval. For short time periods, parameters
related to human hosts do not change very much in general. That is why we are
going to specify some factors, in order to reduce the complexity of the problem.
   This section contains data extraction, all known and unknown parameters,
establish a parameter estimation problem and a simulation problem. Using the
software package VPLAN [9], we can solve the two problems. All the results are
presented in detail.



3.1 Data Extraction

Concerning observation data, they are mainly extracted from [11], a project which
have been done in Burkina Faso. We make the following assumptions:
– The study focused on children and all observations were generalized for the
  whole town.
– In the period of study, most of the clinical malaria cases were treated so most of
  the infected people recovered after treatment. Whole population was only slightly
  decreased due to malaria.
– Given a certain drug, all parasites are either sensitive or resistant.
   In addition, we assume that the observation errors are normally distributed and
can be approximated by 20% of the peak values of each variable measurement.



3.2 Parameter Values

Before simulation in the case of malaria in Burkina Faso, we have to specify all
parameters to meet the specific situation. We present all parameters in two tables:
the first one for known parameters and the second for unknown parameters. Our
time unit is 5 days.
   After several discussions with experts in epidemiology, also based on the data
from literature, we take some factors as constants over the year of study (2004):
birth rate and mortality rate of human classes, mortality rate of vectors (mosquitoes),
etc. We also take into account the properties of the drugs that were given (mainly
Chloroquine) and its efficacy. We then obtain a list of the known parameters as given
in Table 1. Infection rate i1 is a piecewise linear function as in Fig. 2.
   In Table 2 we present all unknown parameters. We plan to estimate them by
piecewise functions, each interval corresponds to 1 month. We state also some
constraints needed to analyze estimation results.
180                                                                     L.T.T. An and W. Jäger


Table 1 All known parameters
Parameter    Meaning                              Value (unit)                  References
b1s          Birth rate of susceptible humans     0.00063 (time1 )             [11]
b1i          Birth rate of infected humans        0.0005 (time1 )              [11]
b1r          Birth rate of recovered humans       0.00063 (time1 )             [11]
T            Natural immune duration in           12 (time)                     [15]
               humans
d            Drug wash-out duration               40 (time)                     [4]
m1s          Mortality rate of susceptible        0.000285 (time1 )            [16]
               humans
˛            Proportion of full treatments        0.9 (dimensionless)           [11]
ˇ            Rate of parasites eliminated by      0.025 (time1 )               [10]
               immunity
e            Elimination rate of sensitive        0:7 (time1 )                 Assumed, [11]
               parasites by drug
m1i          Mortality rate of infected humans    0.000613 (time1 )            [11, 16]
m1r          Mortality rate of recovered humans   0.000285 (time1 )            [16]
m2s          Mortality rate of susceptible        0.75 (time1 )                [11]
               vectors
m2i          Mortality rate of infected vectors   0.75 (time1 )                [11]
C            Constant in Michaelis–Menten         5 (dimensionless)             Assumed,
               formula
K            Parasite-holding capacity of         25  106 (dimensionless)      [11], scaled
               human hosts
s0           Parasite mutation rate (become       7  107 (time1 )            [7]
               resistant)
d0           Effective threshold of               73 (time)                     [4]
               drug-wash-out durations


Fig. 2 Approximated
function of human infection
rate i1 , based on [11] and
information about the
proportion of infected human
class




3.3 Setup of Parameter Estimation Problem and Simulation
    Problem

In this part, we recall a classical problem concerning parameter estimation in
differential equations and specify our problems to be solved later. Interested readers
are referred to [3] and references therein for related information.
Drug Resistance in Infectious Diseases                                                     181


Table 2 All unknown parameters for estimation
Parameter    Meaning                                                    Unit            Remark
kr           Unknown factor, needed in re-susceptibility rate           dimensionless   kr  0
                in humans
kˇ           Unknown factor describing treatment effect                 time            kˇ  0
b2s          Birth rate of susceptible vectors                          time1          b2s  0
b2i          Birth rate of infected vectors                             time1          b2i  0
b2           Hibernated eggs contributing to susceptible vectors        dimensionless   b2  0
i2           Infection rate of susceptible vectors                      time1          i2  0
bpn          Relative birth rate of sensitive parasites                 time1          bpn  0
bpr          Relative birth rate of resistant parasites                 time1          bpr  0
kd           Unknown factor, needed in selection force                  time3          kd  0



   For the rest of this section, without further notice, all variables are elements of
Rn . After the modeling section, we have established a population dynamics in form
of a differential equation system (8). Generalizing the system, we denote time by t,
state variable by x.t/, unknown parameters by p, control parameters by q, control
functions by u.t/, the right hand side of system (8) by f , the constraints by g. We
have a problem:

                     P
                     x.t/ D f .t; x.t/; p; q; u.t//;       t 2 Œt 0 ; t f ;
                                                                                            (9)
                        0 D g.x.t 0 /; p; q/:

   For all parameter estimation problems, we need data. It is assumed that experi-
ments i; i D 1; : : : ; N have been carried out at the given times t j ; j D 1; : : : ; M ,
yielding measurements ij . On the other hand, measurement errors are "ij and the
“true” model response corresponding to these measurements are bij :

                               ij D bij .t j; x.t j /; p/ C "ij :

   Parameter p is found by minimizing the deviation between data and model
response. Due to statistical reasons, some weights ij1 can be introduced, see
details in [3]. In addition, if we know in advance certain information about some
approximate value p0 of parameter p then we can add a regularization term
ı.p  p0 /2 to the objective function. Vector ı has the same dimension as vector
p and all components ı l are nonnegative.
   Summing up, a general parameter estimation problem can be formulated as:
                    2                                                       3
                     X  ij  bij .t j; x.t j /; p/ 2 X
           min.x;p/ 4                                  C  ı l .p l  p0l /2 5;
                                     ij                                                  (10)
                      i;j                                        l
         s.t. .x; p/ solves equation (9):
182                                                                 L.T.T. An and W. Jäger


   In our case, we have one experiment (i D 1) with all observation data j about
the state variables x.tj / and the weights j . The unknown parameters are given in
Table 2
                      p D .kr ; kˇ ; b2s ; b2i ; b2 ; i2 ; bpn ; bpr ; kd /:
The initial values for the state variables, which are implied by g, are given at
t D t 0 . In the parameter estimation problem, all the control factors are given, we
are interested in finding p.
   After parameter estimation, values for the parameters are determined. Now we
can consider simulations. Unlike before, the control parameters (q) play the key
roles. They are the proportion of full treatment (˛), the drug wash-out duration (d )
and the treatment efficacy e. To each simulation, there is a fixed set of values. With
different values of control parameters, we need to solve the differential equation (8)
to compute the simulation.
   For parameter estimation and simulations, we use software package VPLAN,
see [9] and references therein. VPLAN is a software package developed at the
Interdisciplinary Center for Scientific Computing (IWR), University of Heidelberg.



3.4 Result of Parameter Estimation

In this part we are going to present the estimation results. As mentioned before,
to minimize the residual, we take into account all parameters in form of piecewise
constant functions. We divide the domain into an appropriate number of intervals
and find parameter values in each interval. To be more specific, we solve problem
(10) in the first interval, then pass the last state variable values as the initial values
of the next intervals. This assures the continuity of the solutions. The results of p in
all intervals form piecewise constant functions, see Fig. 4.
    In addition, we use multiple shooting [3] and maximize the usage of data
information to deliver a good fit, see Fig. 3. Since parasite populations are very
large compared to the host populations, we scale them by 1=1010.
    As we can see in the Fig. 3, all the predicted populations (the dashed curves) are
in good agreement with data (the points) from Cisse, Burkina Faso. The different
scales between hosts and parasites were taken into account by using a weighted
least squares function. Due to technical reasons, in some place we use small
regularization factors (see the problem setup 3.3). When summing up, the overall
residual is very low.
    For clear visibility, we show only half of the data points. The study was carried
out from the end of 2003 to the end of 2004. Since data at the beginning and closing
periods were not very good, so we only take the part from middle of January to
November 2004, around 300 days or 60 units of time. There are the peaks in
mosquitoes and parasites around August since the season becomes more suitable
for vector development. Notice that the eggs can survive through dry season and
hatch in rainy season to become larvae, pupae and then mosquitoes.
Drug Resistance in Infectious Diseases                                                     183


                 Pn: non-resistant parasites                Pr: resistant parasites
      10000                                      3000
       8000     Data                             2500    Data
                 Pn                              2000      Pr
       6000
                                                 1500
       4000
                                                 1000
       2000                                       500
          0                                         0
      -2000                                      -500

                  H2s: susceptible vectors                   H2i: infected vectors
         250                                      120
         200    Data                              100    Data
                 H2s                               80     H2i
         150
                                                   60
         100
                                                   40
          50                                       20
           0                                        0
         -50                                      -20

                  H1s: susceptible humans                    H1i: infected humans
        1400
        1200                                      200    Data
        1000                                              H1i
                                                  150
         800
         600                                      100
         400                                       50
         200    Data
           0     H1s                                0
        -200

                  H1r: recovered humans
         120
         100            Data
          80             H1r
          60
          40
          20
           0
         -20

Fig. 3 The observed (points) and predicted (dashed curves) populations. Data from middle of
January to November 2004, [11]. All together we use 427 measurement data. These data points are
plotted together with their error bars (20% of each peak measurements). Time unit is 5 days


   All the parameters are presented in Fig. 4. It shows that most of the parameters
are not constant during the year, they vary a lot due to seasonal conditions, host
environments, interactions among different populations.
   As expected, the rainy season creates the peaks of mosquito growth rates. There
are many more susceptible mosquitoes available compared to dry season. Through
the contact with infected humans, they also become infected by parasites. Due to
the weather condition, mosquitoes are much more active than in dry months. With
Human Land Capture method, volunteers caught many more mosquitoes in rainy
months while just a few in the other months [11].
184                                                                      L.T.T. An and W. Jäger




Fig. 4 The fitted parameters at the study time (2004). The horizontal axes are time axes, unit 5
days


   In the same time, the value of kr has a big drop, indicating that there are almost
no recovered people that come back to susceptible class. In malaria, no recovery or
complete clearance is expected in a short period of time. We should also mention
that patients with low parasite densities sometime are not detected and can be
considered healthy. In fact, the parasite density develops slowly and symptoms
appear in patients after few weeks or much later than the exposure to mosquitoes.
This explains why the peak of selection force of resistance also comes later than the
intensive treatment period, this is expressed in the last parameter kd in Fig. 4.



3.5 Result of Simulation with Controllable Parameters

In this section, we simulate the model (8) using the set of fitted parameters. Here we
can control the proportion of full treatment ˛, the drug regimen corresponding to
drug wash-out duration d and the treatment efficacy e. Values of .˛; d; e/ are varied
within certain ranges. We also use VPLAN for solving the differential equation
system under different controls.
Drug Resistance in Infectious Diseases                                                      185

Fig. 5 Simulations of                                      Pn: non-resistant parasites
sensitive parasite populations           1e+08
for different proportions of
treatments. Increasing ˛ leads           1e+07
to rapid decrease in sensitive           1e+06
parasite population to both
treatments. Time unit is 5               100000
days                                      10000
                                           1000
                                           100
                                                                          α =0.3, CQ
                                            10                            α =0.5, CQ
                                                                          α =0.8, CQ
                                             1
                                                  0   10       20     30     40        50   60
                                                                    t (time)




3.5.1 Proportion of Infected Human Class with Full Treatment

In this part ˛ is our control parameter. This is the proportion of infected
human class with full treatment. In this case, two drugs are chosen with treatment
efficacy e D 0:7.time1 /, Chloroquine (CQ) with wash-out duration d D 40:0 and
Sulfadoxine-pyrimethamine (SP) with d D 6:0. Their results turn out to be quite
similar. As result of the treatment, the sensitive parasite population is changed much
faster than the resistant one.
    Simulation in Fig. 5 shows that the proportion of infected humans receiving
full medical treatment is very essential in disease control. In addition, the figure
indicates that at least a certain proportion of the population needs to be treated
properly in order to avoid deadly clinical malaria in the case of very high density
of parasites. Recall that we have shown parasite populations with scale 1=1010 and
Cisse is only a small town with less than one thousand habitants. We can calculate
the average density of parasites in each patient accordingly.
    Beside that, different levels of treatment strongly influence the fitness between
sensitive and resistant parasite populations. As we see in Fig. 6, full treatments give
resistant parasites a chance to better compete with sensitive parasites to invade the
environment.


3.5.2 Drug Regimens with Different Half-Lives

Using drug regimens with different half-life time would effect the picture of
sensitive and resistant parasite populations. This effects the initial ratios of sensitive
and resistant populations and also the number of parasites which become adapted
to the drug environment. In Cisse–Burkina Faso we do not have any data about
different drug usages and how parasites would resist to certain treatment. It is
necessary to run virtual simulations with different possible values of parameters d.
186                                                                         L.T.T. An and W. Jäger


                                           Pr: resistant parasite
                      1e+07

                      1e+06

                     100000

                      10000

                        1000

                         100

                          10                          α=0.01, CQ
                                                       α=0.6, CQ
                            1
                                0     10    20      30     40        50    60
                                                  t (time)

Fig. 6 Simulations of resistant parasite population for different proportions of treatment. High
proportion of full treatment makes resistant parasite population increase faster than low proportion
of treatment in the later period. The dashed line represents 60% full treatment with Chloroquine
while the solid line represents only 1% Chloroquine full treatment. Time unit is 5 days


                                           Pr: resistant parasites
                      1e+07
                                     CQ
                      1e+06          QN
                                    ASU
                     100000
                      10000
                       1000
                         100
                          10
                           1
                         0.1
                                0     10    20      30     40        50    60
                                                  t (time)

Fig. 7 Simulations of resistant parasites for different drug half-lives. Switching between different
therapies leads to noticeable changes in the number of resistant parasites. Simulations are done
for Artesunate (ASU), Quinine (QN), Chloroquine (CQ) with approximated wash-out durations
dASU D 0:04, dQN D 0:5, dCQ D 40:0, based on their average half-lives given in [4]


For clear comparison, we use the same initial values for the seven populations and
keep the same treatment efficacy in all simulations. Assuming that all drug regimens
have the same efficacy e D 0:7.time1 /, 80% of infected human receiving full
treatment ˛ D 0:8, different therapies lead to noticeable changes in the resistant
parasite population, see Fig. 7.
   According to our simulation, for long treatment periods using drugs with shorter
half-life gives better performance. However, in the first period of treatment, the
Drug Resistance in Infectious Diseases                                                   187

Fig. 8 Simulations of                                     H1i: infected humans
resistant parasites and
infected humans with                       1000             α=0.1, CQ
different drug treatment                                    α=0.5, SP
policies. Time unit is 5 days                              α=0.9, ASU
                                            800

                                            600

                                            400

                                            200

                                               0
                                                0    10   20      30       40       50   60
                                                                t (time)

                                                          Pr: resistant parasites
                                          1e+07
                                          1e+06
                                         100000
                                          10000
                                            1000           α =0.1, CQ
                                             100           α =0.5, SP
                                              10          α =0.9, ASU
                                                1
                                              0.1
                                            0.01
                                           0.001
                                                 0   10   20      30     40         50   60
                                                                t (time)



different is not much due to the fact that a large proportion of parasites is sensitive
to drugs. That is why in this period it does not matter which type of antimalarial
drugs are used. The effect shows later, indicated by the fast increase starting from
t D 30 in Fig. 7.
   We also simulate the case when first Chloroquine is used and afterward switched
to Artesunate in the last 3 months of study. As expected, the resistant population
was reduced considerably fast, this opens a good chance for alternative treatments.


3.5.3 Different Treatment Policies: Combined Control of ˛ and d

With the setting similar to Burkina Faso, we begin with high efficacies for most
of the antimalarial drugs. We simulate here the case when we combine the two
mentioned controls, the proportion of full treatment ˛ and the drug type expressed
by d . Shortly speaking, we have combined advantages. We can keep both the
sensitive and resistant parasite populations under control. The resistant parasite
population is relatively small, as we see with Artesunate treatment in the lower
panel of Fig. 8. On the upper panel, combined control leads to noticeable change in
the infected human population.
188                                                                          L.T.T. An and W. Jäger


                                            Pr: resistant parasites
                       1e+08
                       1e+07
                       1e+06
                      100000
                       10000
                        1000
                         100
                           10                                      CQ
                            1                                      SP
                                                                   MQ
                          0.1                                     ASU
                         0.01
                                0    10      20       30     40       50     60
                                                    t (time)

Fig. 9 Simulations of resistant parasites for different treatment efficacies. Simulations are done for
Chloroquine (CQ), Sunfadioxine-pyrimethamine (SP), Mefloquine (MQ), Artesunate (ASU) with
the values of e are 0:2; 0:4; 0:6; 0:6 respectively. The wash-out duration d of all drugs is based
on [4]: dASU D 0:04, dQN D 0:5, dMQ D 16:0, dCQ D 40:0. The time unit is 5 days



3.5.4 Extended Setting: Different Efficacies of Drug Treatments

In this part we consider the case in which all the infected people can afford
their necessary medication or the health care systems are good enough to cover
all the cost. So all patients can be treated and ˛ D 1:0. The treatment efficacy
e and drug d are our control parameters. Simulations are done for Chloroquine
(CQ), Sunfadioxine-pyrimethamine (SP), Mefloquine (MQ), Artesunate (ASU).
The treatment efficacies are close to the values of antimalarial drugs taken from
Asia, especially Vietnam. They are based on a report by WHO in [17]. Note that in
the Burkina Faso setting, most of the antimalarial medication would begin with high
efficacy—since most of the people living in the rural regions have had no access to
them before.
    Figure 9 using logarithmic scale, lets us easily see that there are big differences
between Chloroquine, Sunfadioxine-pyrimethamine, Mefloquine and Artesunate.
In the first three drugs, parasite resistance levels in the last period are very high.
In contrast, with Artesunate or the similar Artemisinin Combination Therapy, the
regimens are still effective, they keep parasite resistance low.



4 Conclusions

We discuss the simulation results and summarize the works in this paper.
Drug Resistance in Infectious Diseases                                            189


4.1 Interpretation of the Simulation Results

The simulations which have been done with the fitted model lead to the following
interpretations:
– From our result, the use of medication do speed up the resistant parasite
  populations. However, we need them avoid the high (sensitive) parasite density in
  infected humans, e.g. to keep the average parasite density in human blood below
  a specific level. Here our model can serve as the potential basis for the control
  problems, providing an optimal strategy of treatment. We can optimize the
  proportion (or number) of infected human population which need to be treated
  with full doses.
– In case of malaria, our model simulations suggest that parasite mutation and
  drug adaptation both play big roles in resistance. In quantitative sense, the
  simulation shows that: when drug with long half-life is employed, drug adaption
  is dominant. This is not the case with short half-life drugs. So the shorter the
  drug half-life is, the fewer resistant parasites are newly created.
– For the first time of treatment, our simulations show that the outcome of different
  drug treatments are quite similar. It is explained by the fact that in Burkina Faso,
  not many people have access to treatment. Most of the drugs are too expensive
  for the region, especially in a village like Cisse, where our data come from.
     That is why in Burkina Faso or similar regions in Africa, treatment can start
  with any drug and later switch to a new therapy when the resistant pathogens to
  the old drugs become dominant. This shows clearly efficacy since most of the
  parasites which resist to the old drug are sensitive to the new one.
– We also consider different regions with different drug usage. In Asia, antimalarial
  drugs are sold openly and any person can buy them without prescription from
  doctors. For most patients, treatment is not their first time. We observe in our
  simulations that the drug therapies and their efficacies strongly influence the
  overall treatment results.
   By using a quantitative model, we can simulate a lot of scenarios in advance.
Depending on preferred criteria, such as keeping the total parasite density below
certain threshold or reducing the resistant parasite population, clinicians should be
able to choose the suitable therapies. In general, the model results are valid not
only for malaria but also for other infectious diseases whose biology are similar to
malaria. Based on these conclusions, treatment strategies to reduce drug resistance
can be elaborated.



4.2 Summary

To sum up, in this paper we have built a model describing the population dynamics
as they appear in vector-borne diseases. In comparison to most of the mathematical
190                                                                        L.T.T. An and W. Jäger


models before, our model has two new compartments for parasite populations and
includes parameters describing drug treatment.
   With numerical study, we have solved parameter estimation and simulation
problems. We have obtained fitted parameters and a good agreement with the data in
Burkina Faso. We have also simulated the fitted model with controllable parameters.
Using the VPLAN package, we were able to solve the systems and to see the
influence of drug treatment not only on parasites but also on the host populations.

Acknowledgements We would like to thank professor Klaus Dietz, Dr. Yazoumé Yé,
Dr. Johannes Schlöder and the anonymous referee for a lot of valuable comments, discussions and
corrections; Dr. Stefan Körkel and Cetin Sert for their great helps in computation. Many thanks to
Dr. Maria Neuss-Radu, who encouraged me (LTTA) a lot to complete the final manuscript.
    This work was financially supported by the Vietnamese Government, the DFG (International
Graduiertenkolleg 710 and Heidelberg Graduate School MathComp) and ABB company.



References

 1. Anderson R.M., May R.M.: Infectious Diseases of Humans: Dynamics and Control. Oxford
    University Press, (1991).
 2. Aneke S.J.: Mathematical modeling of drug resistant malaria parasites and vector populations.
    Math. Meth. Appl. Sci. 25, 335–346, (2002).
 3. Bock H.G., Kostina E., Schlöder J.P.: Numerical Methods for Parameter Estimation in Non-
    linear Differential Algebraic Equations. GAMM-Mitt. 30, no. 2, 376–408, (2007).
 4. Bloland P.B.: Drug resistance in malaria, World Health Organization, (2001).
 5. Dietz K.: Mathematical models for transmissions and control of malaria. In: Malaria: Principles
    and Practice of Malariology. W. Wernsdorfer, I. McGregor (Eds.), Churchill Livingstone,
    Edinburgh, 1091–1133, (1988).
 6. Esteva L., Gumel A.B., de León C.V.: Qualitative study of transmission dynamics of drug-
    resistant malaria. Mathematical and Computer Modelling 50 (3–4), 611–630, (2009).
 7. Hastings I.M., D’Alessandro U.: Modelling a Predictable Disaster: The Rise and Spread of
    Drug-resistant Malaria. Parasitology Today, 16, no. 8, 340–347, (2000).
 8. Keeling M.J., Rohani P.: Modeling Infectious Diseases in Humans and Animals. Princeton
    University Press, (2008).
 9. Körkel S.: Numerische Methoden für Optimale Versuchsplanungsprobleme bei nichtlinearen
    DAE-Modellen, doctoral thesis, University of Heidelberg, (2002).
10. Molineaux L., Diebner H. H., Eichner M., Collins W. E., Jeffery G. M., Dietz K.: Plasmodium
    falciparum parasitaemia described by a new mathematical model. Parasitology, 122, 379–391,
    (2001).
11. Yé Y.: Incorporating environmental factors in modelling malaria transmission in under five
    children in rural Burkina Faso, doctoral thesis, University of Heidelberg, (2005).
12. Vynnycky E., White R.G.: An introduction to Infectious Disease Modelling, Oxford University
    Press, (2010).
13. White N.J.: The role of anti-malarial drugs in eliminating malaria (review), Malaria Journal,
    7(Suppl 1):S8. doi:10.1186/1475-2875-7-S1-S8, (2008).
14. http://www.enotes.com/public-health-encyclopedia/vector-borne-diseases.
15. Bulletin of the World Health Organization, 79 (10), (2001). http://www.scielosp.org/pdf/bwho/
    v79n10/79n10a21.pdf.
16. Mortality country fact sheet 2006, Burkina Faso. http://www.who.int/whosis/mort/profiles/
    mort afro bfa burkinafaso.pdf.
17. Malaria drug resistance, World Health Organization, “http://www.wpro.who.int/sites/mvp/
    Malaria+drug+resistance.htm.”
Mathematical Models of Hematopoietic
Reconstitution After Stem Cell Transplantation

Anna Marciniak-Czochra and Thomas Stiehl




Abstract Transplantation of bone marrow stem cells is a widely used option to
treat leukemias and other diseases. Nevertheless this intervention is linked to life-
threatening complications. Numerous clinical trials have been performed to evaluate
various treatment options. Since there exist strong interindividual variations in
patients’ responses, results of clinical trials are hardly applicable to individual
patients. In this paper a mathematical model of hematopoiesis introduced by us
in (Marciniak-Czochra et al.: Stem Cells Dev. 18:377–85, 2009) is calibrated based
on clinical data and applied to study several aspects of short term reconstitution
after bone marrow transplantation. Parameter estimation is performed based on the
data of time evolution of leukocyte counts after chemotherapy and bone marrow
transplantation obtained for individual patients. The model allows to simulate
various treatment options for large groups of individual patients, to compare the
effects of the treatments on individual patients and to evaluate how the properties of
the transplant and cytokine treatment affect the time of reconstitution.

Keywords Differential equations • Hematopoiesis • Mathematical model • Stem
cell transplantation


1 Introduction

Stem cell research is an important field of life sciences with promising clinical
impacts. During last years an enormous amount of information on specific factors,
genes and cellular interactions involved in tissue homeostasis, cell differentiation



A. Marciniak-Czochra ()  T. Stiehl
Interdisciplinary Center for Scientific Computing, Im Neuenheimer Feld 368,
69120 Heidelberg, Germany
e-mail: anna.marciniak@iwr.uni-heidelberg.de; Thomas.Stiehl@iwr.uni-heidelberg.de

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions            191
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 9,
© Springer-Verlag Berlin Heidelberg 2013
192                                                    A. Marciniak-Czochra and T. Stiehl


and stem cell function has been collected. However, the precise mechanisms
regulating stem cell self-renewal, maintenance and differentiation in clinically
important scenarios are still poorly understood.
    Mathematical modelling has evolved as an important tool in describing and
understanding of bio-medical processes. Such processes are characterised by a high
level of complexity. In most cases important sub-processes are poorly defined or not
known. This fact and the mathematical or computational complexity of resulting
models make it impossible and useless to include all involved processes into a
mathematical model. Nevertheless mathematical modelling is a powerful tool in
addressing specific biological questions or in comparing different well defined
hypotheses.
    In higher organisms, a steady supply of somatic cells is accomplished by
proliferation of corresponding stem cells, which retain the capability for almost
indefinite self-renewal. Driven by hormonal signals from the organism, some stem
cells commit to differentiation and maturation into specialised lineages. Organs and
tissues of complex organisms, such as blood, consist of a large number of different
specialised (differentiated) cell types. Unspecialised cells that are able to give rise
to cells with different biological properties are called stem cells. Most tissues
contain small populations of specific tissue stem cells (adult stem cells) accounting
for homeostasis and tissue repair. The hematopoietic system is maintained by a
population of hematopoietic stem cells (HSC) that is able to give rise to blood cells
of all lineages (erythrocytes, leukocytes, platelets).
    Understanding of the mechanisms governing hematopoiesis is of central interest
for stem cell biology, especially because of its clinical impact [1]. High regenerative
properties of hematopoietic stem cells are used to reconstitute blood structure of
patients after treatment with high-dose chemotherapy, which results in a rapid
decline of blood cell counts. Several diseases of blood and bone marrow, e.g.,
leukemias and other cancers, can be treated and sometimes cured using stem
cell transplantation, formerly known as bone marrow transplantation. Intravenous
administration of growth factors allows to mobilize HSC and early progenitor cells
into blood stream. From blood stream cells can be collected due to expression of
surface markers.
    A transplantation is called autologous if donor and recipient are the same person,
otherwise it is called allogeneic. Stem cell transplantations allow application of
aggressive chemo-therapies with high marrow toxicity. After chemotherapy infusion
of the cryopreserved stem/progenitor cell graft allows repopulation of bone marrow
and recovery of blood cell counts. Until occurrence of blood cell recovery patients
are susceptible to infections due to impairment of immune function. For this
reason it is an important clinical goal to keep the period of aplasia as short as
possible.
    A major advantage of autologous transplantation is the absence of mismatch
reactions. The major disadvantage of this approach is possible contamination of
the transplant by malignant cells. In case of allogeneic transplantations, malignant
cells are attacked and eliminated by graft cells. The major problems of allogeneic
Mathematical Models of Hematopoiesis                                              193


transplantation are the search of an adequate donator and control of possible acute
or chronic graft versus host reaction.
    Because of relative facility in sampling blood or bone marrow, the hematopoietic
system is well suited for modelling and validation. Hematopoiesis involves complex
processes that can be examined at the level of genes, signal transduction proteins,
or the populations of diverse cell types. By viewing hematopoiesis as a dynamical
system and stress and disease as a perturbation of the system, the system biology
approach may contribute to a better understanding of physiological and pathological
states of hematopoiesis.
    Depending on the specific scientific questions, different mathematical models
were developed to study hematopoiesis. One established method of modelling of
hierarchical cell systems is to use a discrete collection of ordinary differential
equations, each of which describes dynamics of cells at a single maturation stage.
In such framework, a range of mathematical results have been obtained, such as
stability and oscillation criteria, some of which are applicable to modelling of the
underlying biological systems, e.g., [2]. Another group of models addresses the
effects of stochasticity in the cell fate decisions [3] or in the regulation of cell
quiescence [4]. These models were designed to simulate the time dynamics of
blood reconstitution [5], spread of cancer stem cells [6] or the perturbations in the
blood dynamics in diseases such as e.g., myleoid leukemia [2, 6]. They provided
explanations of many observations and the model of erythroid production of Lasota
and Wazewska (as cited in [7]) was successfully validated in patients already in the
early 1980s.
    In the following we describe a new approach to mathematical modelling of
the hematopoietic (blood-forming) system and possible applications to clinical
scenarios of stem cell transplantation. The starting point of our study are the
models of stem cell differentiation, which we have recently developed in a series
of papers [8–11]. The aim is to provide insights how different cellular properties
influence hematopoietic recovery after stem cell transplantation. In particular, the
role of the asymmetry of cell division is being investigated motivated by the recent
experimental observations [12].
    In this paper we focus on the application of proposed models to clinical data.
The equations are calibrated based on the data obtained from patients with mul-
tiple myeloma after high-dose chemotherapy and stem cells transplantation. As a
practical application, the models are used to investigate the dependence of the recon-
stitution time on the size of transplant and its properties. With our approach it is
possible to compare the effect of various medical treatments on individual patients.
    The paper is organised as follows. In Sect. 2 we recall the assumptions and
formulation of the basic model and present a specific choice of nonlinearities. In
Sect. 3 a link to a continuous maturation model is presented. Section 4 is devoted
to the clinical application of the proposed model. It includes model calibration,
application to large patient groups to enable comparison to clinical trials performed
on such groups, and application to some treatment scenarios. We conclude in Sect. 5
with some final comments and suggestions for further investigation.
194                                                             A. Marciniak-Czochra and T. Stiehl




Fig. 1 Schematic illustration of the model assumptions concerning the increasing rate of prolif-
eration and decreasing fraction of self-renewal versus differentiation along the differentiation tree




2 Model of Hematopoiesis with Discrete Maturation

2.1 Assumptions

Our model is based on the traditional assumption that in each lineage of blood cell
precursors, there exists a discrete chain of maturation stages, which are sequentially
traversed [13]. Cell behaviour is characterised by the proliferative activity, the
probability to differentiate and the probability to die. We assume that the cell
properties change during the maturation process. For simplicity we restrict our
model to one cell lineage. This restriction is also motivated from a clinical point
of view. Most complications occurring shortly after stem cell transplantation are
caused by impaired immune function due to a lack of mature leukocytes [14].
For this reason, in a clinical applications of the model it is sufficient to consider
leukocytes.
   We assume that cell behaviour is regulated by feedback signalling. This assump-
tion is based on experimental data, see, e.g., [15]. As an approximation of reality and
motivated by clinical data, we assume that feedback signalling depends only on the
level of mature cells [16]. For simplicity we focus on one kind of feedback signal,
e.g., G-CSF, which is the major regulator of granulopoiesis [15]. Model assumptions
and general stem cell properties are summarised in Fig. 1.
   Equations for the cell numbers follow from an accepted model of cell cycle
that is treated as a well-mixed tank, from which cells may either enter division or
death and the length of cell cycle is equally distributed among individuals. Since
the hematopoietic system consists of large numbers of cells (of the order of 109
leukocytes per litre blood) differential equations are a suitable tool to describe the
processes of interest.
Mathematical Models of Hematopoiesis                                                    195


2.2 Equations

Denote by ci .t/ the population density of cell type i at time t. The density of the
stem cell population at time t is denoted as c1 .t/ and the concentration of signalling
molecules as s.t/. Time evolution of cell system is described by the following
system of ordinary differential equations,

                   dc1 .t/
                             D f1 .s.t/; c1 .t//;
                     dt
                   dc2 .t/
                             D f2 .s.t/; c2 .t// C g1 .s.t/; c1 .t//;
                     dt
                          :: :: ::
                           : : :
                   dcn .t/
                             D fn .s.t/; cn .t// C gn1 .s.t/; cn1 .t//:               (1)
                    dt

gi .s.t/; ci .t// denotes a flux of cells from the maturation stage i to the maturation
stage i C 1 due to differentiation. Since we neglect any de-differentiation events we
assume that gi .s.t/; ci .t// is nonnegative. The term fi .s.t/; ci .t// denotes a change
of ci .t/ that is caused by processes taking place at the i th stage of maturation. If the
gain of cells caused by proliferation and self-renewal is stronger than the loss caused
by differentiation or death, then fi .s.t/; ci .t// is positive. Otherwise fi .s.t/; ci .t//
is negative. Since mature cells are postmitotic, i.e., they cannot proliferate, the term
fn .s.t/; cn .t// accounts only for cell death and is, therefore, negative. The whole
process is regulated by a single feedback mechanism based on the assumption that
there exist signalling molecules (cytokines) which regulate the differentiation or
proliferation process. The intensity of the signal is denoted by s.t/. Following [8]
we assume that it depends on the level of mature cells, s.t/ D s.cn .t//. A specific
choice of the function s is presented in the next section. A mathematical analysis of
this model and biological implications on the definitions of stem cells are described
in [9].



2.3 A Special Case

For understanding of clinical processes it is helpful to replace the general terms
fi and gi in the above model by explicit functions depending on quantitative cell
properties that are, at least in principle, accessible to experiments.
   To model the differentiation process quantitatively we introduce the fraction of
self-renewal that describes which fraction of the progeny cells is identical to the
mother cells (i.e. does not differentiate). This parameter can be interpreted as the
probability that a daughter does not differentiate after cell division. The fraction of
self-renewal is a property defined on the scale of a whole population.
196                                                     A. Marciniak-Czochra and T. Stiehl


    Denote the proliferation rate of the subpopulation of type i at time t by pi .t/,
the fraction of self-renewal by ai .t/ and the death rate by di .t/. Then, the flux to
mitosis at time t is given by pi .t/ci .t/. The fraction ai .t/ of daughter cells stays
undifferentiated. Therefore, the influx to cell population i after cell division is given
by 2ai .t/pi .t/ci .t/ and the flux to the next cell compartment is given by 2.1 
ai .t//pi .t/ci .t/. The flux to death at time t is given by di .t/ci .t/. Choice of


             fi .t/ D .2ai .t/1/pi .t/ci .t/  di .t/ci .t/; for i < n;
             gi .t/ D 2.1ai 1.t//pi 1 .t/ci 1 .t/; for 1 < i < n;
             fn .t/ D dn .t/cn .t/:


leads to the model described in [8].


2.3.1 Signal Feedback

In this section we present a derivation of a specific form of the signalling feedback,
motivated by the observation that dynamics of signalling molecules takes place on
a faster time scale than the process of cell proliferation and differentiation [17, 18].
    We assume that ai .t/ and pi .t/ depend solely on the feedback signal at time t,
i.e., ai .t/  ai .s.t// and pi .t/  pi .s.t//.
    Assuming that signal molecules are secreted by specialised cells at a constant rate
˛ and degraded proportional to the level of mature cells cn and at a constant rate ,
we obtain the following differential equation for the dynamics of the concentration
of signalling molecules, denoted by S.t/:

                        d
                           S.t/ D ˛  S.T /  ˇS.t/cn .t/:
                        dt
   As discussed above a secretion of cytokines is very fast in comparison to cell
proliferation and differentiation and the level of cytokines approaches a quasi-steady
state. Applying a quasi-steady state approximation and substitution of s.t/ WD

˛
  S.t/ and k WD ˇ enables us to calculate signal intensity s as

                                                   1
                            s WD s.cn .t// D               ;
                                               1 C kcn .t/

which is between 0 and 1. Considering different plausible regulatory feedback
mechanisms leads to different types of nonlinearities in the model equations. In
particular, in [8] two hypotheses were tested. The Hypothesis 1 assumes that
differentiation is governed by enhancing the rate of proliferation only, while in the
Hypothesis 2 it is the ratio of the rate of self-renewal to the rate of differentiation
Mathematical Models of Hematopoiesis                                              197


that is regulated by external signals. Consequently, two different regulatory modes
were proposed:
                                 a
(M1) constant pi and ai .s/ D 1Ckc
                               i;max
                                   n
                                     ,
                pi
(M2) pi .s/ D 1Ckc n
                     and constant ai .
    Different approaches to model signal feedback are also possible. We checked
numerically that, for example, an exponential dependence of signal intensity on
mature cell counts, s.t/ D e const  cn .t / , similar to that of the Lasota–Wazewska
model, leads to similar qualitative results.
    Numerical simulations and analysis of the model solutions under both hypotheses
(each leading to a different mathematical model) demonstrate that the regulation
of self-renewal fractions is more efficient and can be achieved in the clinically
relevant time scale [8]. Regulation of the rates of proliferation (parameters pi ) is
not sufficient for that purpose.
    Therefore, in the reminder of this paper we assume the proliferation rates to be
constant in time and self-renewal fractions to be controlled by the signal feedback,
ai .t/  ai .s.cn .t/// D ai;max  s.cn .t//; where ai;max is the maximal fraction of
self-renewal. Furthermore, death rates are assumed to be constant in time. This
results in the following set of equations,

            dc1
                D .2a1;max s 1/p1 c1  d1 c1 ;
             dt
            
            dci
                D .2ai;max s 1/pi ci C 2.1ai 1;max s/pi 1 ci 1  di ci ;     (2)
             dt
            
            dcn
                D 2.1  an1;max s/pn1 cn1  dn cn ;
             dt
                    1
            sD
                .1 C kcn /

The following, biologically relevant, assumptions are made for the model parame-
ters and initial data:

                          t      2 Œ0; 1/;
                          ci .0/  0; for i D 1 : : : n;
                          di      0; for i D 1 : : : n1;
                          dn     > 0;
                          pi     > 0; for i D 1 : : : n1;
                          ai;max 2 Œ0; 1/ for i D 1 : : : n1;
                          k      > 0:
198                                                     A. Marciniak-Czochra and T. Stiehl


3 Continuous Model of Hematopoiesis

One of the fundamental biological questions is whether cell differentiation is a
discrete or a continuous process and what is the measure of cell maturation?
Is the pace of maturation (commitment) dictated by successive divisions, or is
maturation a continuous process decoupled from proliferation that may take place
also between cell divisions? Consequently we approach the question how to choose
an appropriate model. To address these questions and to investigate the impact of
possible continuous transformations on the differentiation process, a new model
based on partial differential equations of transport type was introduced [11]. The
model consists of three differential equations of the following form,

                                 dc1 .t/
                                         D f1 .s.t/; c1 .t//;
                                  dt
        @t c.x; t/ C @x Œg.x; s/c.x; t/ D f .s.t/; c.x; t//;
                         g.0; s/c.0; t/ D g1 .s.t/; c1 .t//; t > 0;
                                dc2 .t/
                                        D f2 .s.t/; c2 .t// C g.s.t/; c.x  ; t//:    (3)
                                 dt

Here c1 .t/ denotes the number of stem cells, c2 .t/—the number of mature cells
and c.x; t/—the distribution Rdensity of progenitor cells structured with respect to
                                 x
the maturity level x, so that x12 c.x; t/dx is equal to the number of progenitors
with maturity between x1 and x2 . This includes maturity stages between stem cells
and differentiated cells. We assume that x D x  denotes the last maturity level of
immature cells. Moreover, functions f1 , f , f2 , g1 and g are analogous to those in the
system (3). The specific form of this model corresponding to our choice of kinetic
functions was studied analytically and numerically in [11]. Among others, it was
shown that the discrete and continuous differentiation models are not equivalent.
However, it was also demonstrated that the models can exhibit exactly the same
dynamics for a suitable scaling of the maturation rate function g.x; s/ and under
assumptions on parameters which provide asymptotic convergence of solutions
to a unique positive stationary solution. The latest result indicates that having a
calibration of the discrete differentiation model based on the clinical data we can
easily fit the continuous model. Therefore, in the reminder of this paper we focus on
the discrete maturation model (2).



4 Simulation of Stem Cell Transplantation

In this paragraph we compare model simulations to clinical data obtained from
patients with multiple myeloma after high-dose chemotherapy and stem cell
transplantation, and discuss possible applications.
Mathematical Models of Hematopoiesis                                              199


4.1 Comparison of Simulations to Clinical Data

For simulations we choose 8 compartments, corresponding to the following maturity
stages of hematopoiesis: HSC, LTC-IC, CFU-GM, CFU-G, Myeloblast, Promyelo-
cyte, Myelocyte, Neutrophil Granulocyte [13]. We focused on neutrophils, since
they are the major part of leukocytes (about 50–75%)[13]. Parameter values of
proliferation rates and death rates as well as initial conditions have been assumed
based on the literature. Self-renewal fractions and the coefficient k, which cannot be
measured, were estimated in such way that steady state cell counts are in accordance
with literature. We assumed that self-renewal decreases from primitive to more
specialised cell types and that stem cells divide about two orders of magnitude
slower than most mature progenitors. In two parameter sets proliferation increases
strictly monotonous with maturity. These assumptions are in agreement with the
classical understanding of stem cell systems. The choice of three parameter sets
were done manually based on the patients data.
    We simulate the model with three different parameter sets to investigate the
influence of interindividual differences on reconstitution kinetics. Steady state
population sizes increase from stem cells to most mature progenitors: stem cells of
order 102 per kg to 103 per kg, LTC-IC of order 105 per kg, CFU-GM of order 106
per kg, CFU-G of order 107 per kg, Myeloblasts, Promyelocytes and Myelocytes
of order 108 per kg. For initial conditions we assume that 0.1% of transplanted
cells are stem cells. The ratio of HSC:LTC-IC is assumed to be 1:10, the ratios
LTC-IC:CFU-GM and CFU-GM:CFU:G are assumed to be 1:3. Furthermore it is
assumed that the transplant does not contain any myeloblasts, promyelocytes nor
myelocytes.
    Figure 2 compares evolution of leukocyte counts to clinical data. Figure 3 shows
post-transplant time evolution of all cell populations. Clinical data concerning
hematopoietic reconstitution on HSC transplantation are collected from a clinical
trial performed by Klaus and collegues [19] on patients with advanced multiple
myeloma. Median age is 44 (37–66 years). Treatment was performed at the
Department of Medicine V, University of Heidelberg using a myeloablative high-
dose chemotherapy (Melphalan 100 mg/m2 body surface) at days 3 and 2
followed by autografting of a unmanipulated HSC transplant (median of 3.6 (2.0–
10:3/  106 CD34+ cells/kg body weight) at day 0. The transplant has been harvested
in advance by leukapheresis from granulocyte colony-stimulating factor mobilised
peripheral blood.
    Simulations show that our model is able to cover the observed range of
reconstitution patterns by slight variation of the model parameters. Since simulated
blood leukocyte counts are in reasonable agreement with reality we use the
model to investigate the dependence of time needed for recovery on transplant
size.
200                                                                               A. Marciniak-Czochra and T. Stiehl


                                              1
                                                                                           Parameter Set 1
                                             0.9                                           Parameter Set 2
                                                                                           Parameter Set 3
       mature leucocytes [10 cells per kg]

                                             0.8

                                             0.7

                                             0.6
      9




                                             0.5

                                             0.4

                                             0.3

                                             0.2

                                             0.1

                                              0
                                                   10   15    20     25     30     35      40      45        50
                                                             time [days post−transplant]

Fig. 2 Clinical data of blood reconstitution following a bone marrow transplant, and simulated
solutions of the mathematical model for three different parameter sets. To calculate cells per kg
body weight, it was assumed that body weight is 70 kg and blood volume 5 l. The following
parameter values were used. Parameter Set 1: p1 D 0:0060, p2 D 0:0300, p3 D 0:1500,
p4 D 0:6000, p5 D 0:6500, p6 D 1:000, p7 D 1:5000, a1;max D 0:7350, a2;max D 0:7298,
a3;max D 0:7245, a4;max D 0:7140, a5;max D 0:5775, a6;max D 0:4725, a7;max D 0:3675,
d1 D    D d7 D 0, d8 D 2:7700, k D 1:2800  109. Parameter Set 2: p1 D 0:0060,
p2 D 0:0300, p3 D 0:1500, p4 D 0:6000, p5 D 0:6500, p6 D 1:000, p7 D 1:5000,
a1;max D 0:7700, a2;max D 0:7645, a3;max D 0:7590, a4;max D 0:7590, a5;max D 0:5500,
a6;max D 0:4400, a7;max D 0:3300, d1 D    D d7 D 0, d8 D 2:7700, k D 1:2800  109.
Parameter Set 3: p1 D 0:0057, p2 D 0:0297, p3 D 0:03, p4 D 0:4200, p5 D 0:4800, p6 D
1:0500, p7 D 1:5000, a1;max D 0:7000, a2;max D 0:6990, a3;max D 0:6690, a4;max D 0:6980,
a5;max D 0:5000, a6;max D 0:5000, a7;max D 0:5500, d1 D    D d7 D 0 , d8 D 2:7700,
k D 1:2800  109




4.2 Application to Large Patient Groups

The proposed model can be applied to large patient groups. To account for
interindividual variability we choose the fractions of self-renewal ai randomly
between 0 and 1 with the additional assumptions a1 > 0:5 and a1 > ai for
all i > 1. The last conditions are necessary for existence of a positive steady
state, for details see [9]. To exclude unrealistic parameter sets only choices with
steady state leukocyte values greater or equal 2  109 = l are taken into account. In
Fig. 6 simulation results are compared to clinical data collected by Lowenthal and
colleagues [28]. Lowenthal defined hematopoietic recovery as exceedance of 5  108
Mathematical Models of Hematopoiesis                                                                                                                                                                                        201


                                                                                                                                                               x 104
                                       3160                                                                                                              4.8
                                       3140
                                                                                                                                                         4.6




                                                                                                                       c2 [cells per kg body weight]
   c1[cells per kg body weight]



                                       3120
                                       3100                                                                                                              4.4
                                       3080
                                                                                                                                                         4.2
                                       3060
                                       3040                                                                                                               4
                                       3020
                                                                                                                                                         3.8
                                       3000
                                       2980                                                                                                              3.6
                                                          0      5   10     15   20   25   30   35      40   45   50                                           0      5   10     15   20   25   30   35      40   45   50
                                                                          time [days post−transplant]                                                                          time [days post−transplant]
                                                                 5                                                                                                 7
                                                          x 10                                                                                                 x 10
                                                     6                                                                                                   12
                                                    5.5
                                                                                                                                                         10


                                                                                                                          c4[cells per kg body weight]
                    c3 [cells per kg body weight]




                                                     5
                                                    4.5                                                                                                   8
                                                     4
                                                                                                                                                          6
                                                    3.5
                                                     3                                                                                                    4
                                                    2.5
                                                                                                                                                          2
                                                     2
                                                    1.5                                                                                                   0
                                                          0      5   10     15   20   25   30   35      40   45   50                                           0      5   10     15   20   25   30   35      40   45   50
                                                                          time [days post−transplant]                                                                          time [days post−transplant]
                                                          x 108                                                                                                x 108
                                                     3                                                                                                    5
                                                                                                                                                         4.5
                                                    2.5
                                                                                                                       c6 [cells per kg body weight]
                    c5 [cells per kg body weight]




                                                                                                                                                          4
                                                                                                                                                         3.5
                                                     2
                                                                                                                                                          3
                                                    1.5                                                                                                  2.5
                                                                                                                                                          2
                                                     1
                                                                                                                                                         1.5
                                                                                                                                                          1
                                                    0.5
                                                                                                                                                         0.5
                                                     0                                                                                                    0
                                                          0      5   10     15   20   25   30   35      40   45   50                                           0      5   10     15   20   25   30   35      40   45   50
                                                                          time [days post−transplant]                                                                          time [days post−transplant]
                                                          x 108                                                                                                x 108
                                                     8                                                                                                    7

                                                     7                                                                                                    6
                    c7[cells per kg body weight]




                                                                                                                          c8[cells per kg body weight]




                                                     6
                                                                                                                                                          5
                                                     5
                                                                                                                                                          4
                                                     4
                                                                                                                                                          3
                                                     3
                                                                                                                                                          2
                                                     2

                                                     1                                                                                                    1

                                                     0                                                                                                    0
                                                          0      5   10     15   20   25   30   35      40   45   50                                           0      5   10     15   20   25   30   35      40   45   50
                                                                          time [days post−transplant]                                                                          time [days post−transplant]


Fig. 3 Repopulation dynamics of compartments 1–8. Simulations based on parameter set 2
202                                                                             A. Marciniak-Czochra and T. Stiehl


                                               1.0



              Fraction of engrafted patients   0.8



                                               0.6



                                               0.4



                                               0.2



                                               0.0

                                                     0   20   40       60       80     100      120
                                                                   time[days]

Fig. 4 Simulation of blood cell recovery of a large population. The plot shows the percentage of
patients reaching 5  108 granulocytes (corresponding to 109 leukocytes) per litre blood at different
time points. Model results calculated in cells per kg body weight are compared to the clinical data
assuming using average body weight of 70 kg and blood volume of 5 l. Experimental data is taken
from [28]



neutrophil granulocytes per liter blood. Since neutrophil granulocytes account for
about 50% of peripheral leukocytes, we take a threshold of 109 leukocytes per
litre blood as the criterion for recovery. For simplicity all parameters besides ai are
chosen as in Parameter Set 2. Perturbing randomly other parameter values leads to
similar results. For the presented simulation we assume a transplant size of 9:5  106
CD34 positive cells per kg body weight, which corresponds to the median transplant
reported by Lowenthal [28]. Simulations are run for 200 parameter sets obtained by
a random choice of self-renewal fractions as described above. Simulation results
are in good agreement with clinical data. This demonstrates that our model is, in
principle, able to describe behaviour of large patient groups as they are assessed in
clinical trials (Fig. 4).




4.3 Application to Clinical Scenarios

Stem cell transplantation is an important clinical treatment option for hematologic
and non hematologic diseases. The clinical scenario of autologous transplantation
is summarised in Fig. 5. Reduction of the period of immune impairment is an
Mathematical Models of Hematopoiesis                                                        203




Fig. 5 Autologous stem cell transplantation: collection, conservation and reinfusion of stem and
progenitor cells allows application of marrow toxic therapies


important clinical goal and has been addressed by different studies, e.g., [19].
Clinical results indicate that augmented transplant sizes lead to faster recovery.
Nevertheless, the qualitative shape of relationship between transplant size and time
needed for recovery has not yet been described. Due to occurring infections and
other complications it is difficult to establish such relationship based on clinical
data alone.
    On the other hand it has been reported that cells with leukemia associated
mutations can be found in the marrow of healthy subjects [20,21] and it is speculated
that the host’s marrow can be supportive to proliferation of such cells after
transplantation [22]. To a certain extent bone marrow seems to serve as a threshold
of adult stem cells of various types that migrate to appropriate sites when there is
need [23–26]. A similar mechanism for cancer stem cells has not yet been evaluated
and cannot be excluded. If cancer stem cells behaved similar to their benign
counterparts, bone marrow could be a storage of cancer cells of different types.
If this was the case, excessive mobilisation of bone marrow derived cells could be
linked to a higher risk of donor derived diseases. For this reason it is necessary to
understand better the dependence of transplant size on reconstitution time.
    We use the model to investigate qualitatively the dependence of time needed for
recovery on transplant size. We defined hematopoietic recovery as blood leukocyte
counts exceeding 109 /l. Figure 6 shows the dependence of recovery time on the
number of transplanted cells for three different parameter sets. Simulation results
show that the benefit of additionally transplanted cells decreases with increasing
transplant size. For this reason it cannot be recommended to excessively increase
transplant sizes in case of autologous transplantations.
    Since our model covers behaviour of large patient groups these results might be
considered as representative for qualitative dependencies in larger populations.



5 Discussion

In this paper we showed that the models of stem cell differentiation with cell self-
renewal regulated by a nonlinear signalling feedback can be applied to describe
the reconstitution pattern of patients after autologous stem cell transplantation.
We calibrated the model using proliferation rates and death rates reported in the
literature. The unknown parameters were estimated manually based on patients data
204                                                                A. Marciniak-Czochra and T. Stiehl


                                24
                                                                leucocyte recovery to 1x109/l (Set 1)
                                                                                          9
                                                                leucocyte recovery to 1x10 / l (Set 2)
                                                                                           9
                                22                              leucocyte recovery to 1x10 / l (Set 3)




                                20
      time of recovery [days]




                                18


                                16


                                14


                                12


                                10
                                     0         5                    10                               15
                                                                                                x 106
                                         transplant−size [CD34 pos cells/kg]

Fig. 6 Reconstitution time depending on transplant size for three representative parameter sets.
The values of the parameters are given in Fig. 2


on the time dynamics of leukocyte counts, steady state values and the transplant
data. Model calibration using inverse numerical methods could help to obtain better
insight into dependence of model outcome on the specific parameters and accelerate
the modelling process. Numerical parameter estimation can be applied to identify
the parameters influencing the process of blood reconstitution critically.
   Among others, the models were applied to get insights into the qualitative depen-
dence of recovery process after stem cell transplantation on transplant size. Our
models show that interindividual differences in cell properties (model parameters)
may account for interindividual differences observed in clinical practice.
   The proposed models contain different simplifications, such as restriction to one
cell lineage, exclusive dependence of feedback on mature cells and incorporation
of only one feedback signal. These simplifications were adjusted based on clinical
data. The main problem of clinical applications is the lack of knowledge of in vivo
model parameters and of exact regulatory modes. The crosstalk between different
cytokines seems to be very complex and is not yet well understood from a biological
point of view [27]. Furthermore our model does not include immune reactions after
allogeneic transplantations for which underlying processes are not well defined.
Our approach focuses on modelling the impact of cellular properties on clinical
measurable results. The models are able to provide insights which parameters are
important to obtain fast clinical recovery. It may, therefore, be helpful for further
optimisation of transplantation strategies in areas where clinical experiments cannot
Mathematical Models of Hematopoiesis                                                             205


be performed due to ethical reasons. Furthermore, since our model covers the
behaviour of large patient groups, it allows to perform clinical trials in silico and
enables to better compare simulation results with clinical data.

Acknowledgements The authors were supported by the WIN Kolleg of Heidelberg Academy of
Sciences and Humanities “A man is so old as his stem cells?” and Collaborative Research Center,
SFB 873, “Maintenance and Differentiation of Stem Cells in Development and Disease.” AM-C
was supported by ERC Starting Grant “Biostruct” and Emmy Noether Programme of German
Research Council (DFG).




References

 1. Giebel B., Zhang T., Beckmann J., Spanholtz J., Wernet P., Ho AD, Punzel M.: Primitive
    human hematopoietic cells give rise to differentially specified daughter cells upon their initial
    cell division. Blood. 107, 2146–2152 (2006)
 2. Colijn C, Mackey M.C.: A mathematical model of hematopoiesis–I. Periodic chronic myel-
    ogenous leukemia. J. Theor Biol.237, 117–132 (2005)
 3. Till J.E., Siminovitch L., McCulloch E.A.: Stochastic Model of Stem Cell Proliferation Based
    on Growth of Spleen Colony-Forming Cells. PNAS 51, 29–49 (1964)
 4. Roeder I., Loeffler M.: A novel dynamic model of hematopoietic stem cell organization based
    on the concept of within-tissue plasticity. Exp Hematol. 30, 853–861 (2002)
 5. Ostby I., Kvalheim G., Rusten L.S., Grottum P.: Mathematical modeling of granulocyte
    reconstitution after high-dose chemotherapy with stem cell support: effect of post-transplant
    G-CSF treatment. J Theor Biol. 231, 69–83 (2004)
 6. Michor F., Hughes T.P., Iwasa Y., Branford S., Shah N.P., Sawyers C.L., Nowak M.A.:
    Dynamics of chronic myeloid leukaemia. Nature 435, 1267–1270 (2005)
 7. Wazewska-Czyzewska M.: Erythrokinetics radioisotopic methods of investigation and mathe-
    matical approach. Foreign Scientific Publications Dept. of the National Center for Scientific,
    Technical, and Economic Information, Springfield (1984)
 8. Marciniak-Czochra A., Stiehl T., Ho A.D., Jäger W., Wagner W.: Modeling of asymmetric
    cell division in hematopoietic stem cells–regulation of self-renewal is essential for efficient
    repopulation. Stem Cells Dev. 18, 377–85 (2009)
 9. Stiehl, T., Marciniak-Czochra A.: Characterization of stem cells using mathematical
    models of multistage cell lineages, Mathematical and Computer Modelling (2010),
    doi:10.1016/j.mcm.2010.03.057.
10. Marciniak-Czochra A., Stiehl T., Wagner W.: Modeling of replicative senescence in hematopoi-
    etic development. Aging (Albany NY) 1, 723–732 (2009)
11. Doumic, M., Marciniak-Czochra, A., Perthame, B., Zubelli, J.: Structured population
    model of stem cell differentiation. Preprint available at http://hal.archives-ouvertes.fr/inria-
    00541860/fr/.
12. Ho A.D., Wagner W.:The beauty of asymmetry: asymmetric divisions and self-renewal in the
    haematopoietic system. Curr Opin Hematol. 14,330–336 (2007)
13. Jandl J.H.: Blood cell formation. In: Jandl J.H., ed. Textbook of Hematology. Little, Brown and
    Company, Boston, MA, 1–69 (1996)
14. Fauci A.S., Braunwald M.D., Kasper D.I., Hauser S.I., Longo D.L., Jameson J.L., Loscalzo
    J.: Harrison’s Principles of Internal Medecine, 17th Edition, Mc GrawHill, New York (2008)
15. Metcalf D.: Hematopoietic cytokines. Blood 111, 485–91 (2008)
16. Shinjo K., Takeshita A., Ohnishi K., Ohno R.: Granulocyte colony-stimulating factor receptor
    at various stages of normal and leukemic hematopoietic cells. Leuk Lymphoma. 25,37–46
    (1997)
206                                                             A. Marciniak-Czochra and T. Stiehl


17. Bogner V., Keil L., Kanz K.G., Kirchhoff C., Leidel B.A., Mutschler, W., Biberthaler P.: Very
    early posttraumatic serum alterations are signifficantly associated to initial massive rbc
    substitution, injury severity, multiple organ failure and adverse clinical outcome in multiple
    injured patients. Eur J Med Res. 14, 284– 291 (2009)
18. Morgan D., Desai A., Edgar B., Glotzer M., Heald R., Karsenti E., Nasmyth K., Pines J., Sherr,
    C.: The Cell Cycle. In: Alberts B., Johnson A., Lewis J., Raff M., Roberts K., Walter R. (Eds):
    Molecular Biology of the Cell, 5th Edition. Garland Science, New York (2007)
19. Klaus J., Herrmann D., Breitkreutz I., Hegenbart U., Mazitschek U., Egerer G., Cremer F.W.,
    Lowenthal R.M., Huesing J., Fruehauf S., Moehler T., Ho A.D. and Goldschmidt H.: Effect
    of CD34 cell dose on hematopoietic reconstitution and outcome in 508 patients with multiple
    myeloma undergoing autologous peripheral blood stem cell transplantation. Eur J Haematol.
    78, 21–28 (2007)
20. Janz S., Potter M., Rabkin C.C.: Lymphoma- and leukemia-associated chromosomal translo-
    cations in healthy individuals. Genes Chromosomes Cancer 36, 211–223 (2003)
21. Schueler F.,Hirt C., Doelken G.: Chromosomal translocation t(14;18) in healthy individuals.
    Semin Cancer Biol. 13 203–209 (2003)
22. Reichard K.K., Zhang Q.Y., Sanchez L., Hozier J., Viswanat D., Foucar K.: Acute myeloid
    leukemia of donor origin after allogeneic bone marrow transplantation for precursor t-cell acute
    lymphoblastic leukemia: case report and review of the literature. Am J Hematol. 81 178–185
    (2006)
23. Ratajczak M.Z., Kucia M., Majka M., Reca R., Ratajczak J.: Heterogeneous populations of
    bone marrow stem cells-are we spotting on the same cells from the different angles? Folia
    Histochem Cytobiol. 42 139–146 (2004)
24. Ratajczak M.Z., Kucia M., Reca R., Majka M., Janowska-Wieczorek A., Ratajczak J.: Stem
    cell plasticity revisited: Cxcr4-positive cells expressing mrna for early muscle, liver and neural
    cells ’hide out’ in the bone marrow. Leukemia 18, 29–40 (2004)
25. Kucia M., Ratajczak J., Ratajczak M.Z.: Bone marrow as a source of circulating cxcr4+ tissue-
    committed stem cells. Biol Cell. 97, 133–146 (2005)
26. Kucia M., Ratajczak J., Reca R., Janowska-Wieczorek A., Ratajczak M.Z.: Tissuespecific
    muscle, neural and liver stem/progenitor cells reside in the bone marrow, respond to an sdf-
    1 gradient and are mobilized into peripheral blood during stress and tissue injury. Blood Cells
    Mol Dis. 32, 52–57 (2004)
27. Roeder I., de Haan G., Engel C., Nijhof W., Dontje B., Loeffler M.: Interactions of erythro-
    poietin, granulocyte colony-stimulating factor, stem cell factor and interleukin-11 on murine
    hematopoiesis during simultaneous administration. Blood, 91, 3222–3229 (1998)
28. Lowenthal R.M., Faberes C., Marit G., Boiron J.M., Cony-Makhoul P., Pigneux A., Agape P.,
    Vezon G., Bouzgarou R., Dazey B., Fizet D., Bernard P., Lacombe F., Reiffers J.: Factors
    influencing haemopoietic recovery following chemotherapy-mobilised autologous peripheral
    blood progenitor cell transplantation for haematological malignancies: A retrospective analysis
    of a 10-year single institution experience. Bone Marrow Transplant. 1998 22, 763–770 (1998)
Combustion Chemistry and Parameter
Estimation

Marc Fischer and Uwe Riedel




Abstract Combustion processes in practical systems are marked by an huge
complexity stemming from their multi-dimensional character, from the interaction
of physical processes (including diffusion, flow dynamics, thermodynamics and
heat transfer), and from the extremely complex chemistry potentially involving up
to hundreds of species and thousands of elementary reactions. The determination
of accurate parameters accounting for the chemical kinetics is an essential step
for predicting the behavior of practical combustion systems. This is usually done
by carrying out specific experiments in simplified systems whereby many of the
physical phenomenons mentioned above can be neglected. The present paper
aims at giving an overview over the approaches currently followed to estimate
kinetic parameters based on experimental data originating from these simplified
systems. The nature and mathematical description of such problems are presented
for homogeneous systems where all variables depend on time only. The techniques
for the identification of the most significant reactions (and hence parameters) are
shown along with methods for mechanism reduction considerably alleviating the
computational burden. As an application example, Mechacut, a CCC procedure
written by the authors is employed for the reduction of a detailed reaction mecha-
nism aiming at describing the combustion of methane CH4 . In the following section,
the estimation of kinetic parameters is formulated as an optimization problem and
different approaches found in the current literature are examined.




M. Fischer ()
Interdisciplinary Center for Scientific Computing (IWR), University of Heidelberg, Germany
e-mail: marc.fischer emd@yahoo.fr
U. Riedel
Institute of Combustion Technology, German Aerospace Center (DLR), Stuttgart, Germany
e-mail: uwe.riedel@dlr.de

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions                     207
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 10,
© Springer-Verlag Berlin Heidelberg 2013
208                                                             M. Fischer and U. Riedel


1 Introduction

Realistic simulations of combustion processes in the twenty-first century have
become primordial in view of the numerous challenges and problems that have
emerged during the past decades: global warming which requires more efficient
ways to convert energy while limiting the emissions of gas fostering the green house
effect, health concerns with regard to harmful pollutants (including nitric oxides
(NOx), photochemical pollutants inducing the formation of smog and particulate
matters having hazardous health effects) coupled with the growing influence of
emerging countries like China which increasingly exploits its fossil coal resources.
The intense research activities aiming at producing sustainable renewable fuels
show also that the importance of combustion is not going to be diminished by the
disappearance of traditional fossil fuels like oil. For all these reasons, an important
research effort has to be done in order to reach an accurate estimation of parameters
accounting for the reaction kinetics of combustion problems.
   In the next part of this article, the simplified systems used for kinetic studies
are described. In the third part, the mathematical description and handling of the
associated problems are given and the methods used for solving them are evoked.
The fourth part is consecrated to the identification of the most important parameters
and to methods used in practice for reducing reaction mechanisms.
   In the fifth part as an example, Mechacut, a C++ procedure developed recently,
is employed for the reduction of the GRI-mechanism aiming at describing the
oxidation of methane CH4 . We then go into the practical problem of parameter
estimation in the sixth part by formulating it as an optimization problem and
examining the different approaches followed in the literature.



2 Description of Simplified Combustion Systems

Practical combustion systems hinge on a very large number of overlapping phe-
nomenons, which not only make realistic predictions hard to attain, but also
hinders researchers from deducing the values of parameters out of a class of
similar experiments. In effect, the behavior of these systems is extremely over-
determined in that many (if not an endless number of) combinations of physical
and chemical parameters can lead to the same simulation results (see [34] for an
example concerning chemical kinetics alone). To reduce the sources of uncertainty
and keeping focused on the chemistry, it is thus necessary to decouple the different
processes occurring by devising experiments where only a small part of them is
active. Homogeneous systems have turned out to be extremely useful for kinetic
studies of combustion problems.
   Homogeneous systems are constrained in such a way that all variables (including
concentrations, temperature, pressure, and sometimes volume) are only time-
dependent. This means that the physical phenomenons may either be neglected or
Combustion Chemistry and Parameter Estimation                                     209


happen so fast that the evolution of the system is only driven by its chemistry. In
this case, a system of ordinary differential equations (see next section) has to be
solved and the simulations can be carried out with less resources than for other,
more complex types of systems.
   Shock tubes have been shown to be appropriate for the investigation of high
temperature chemistry (usually for temperatures greater than 1,200 K) [9, 18]. They
consist of tubes made up of two sections: a driver section at high pressures and
a driven section (containing the experimental mixture) at low pressure separated
by a membrane. At the beginning of an experiment, the aluminum membrane is
burst provoking a strong shock wave which after having been reflected will heat
up the mixture very quickly (in less than 1 s). Close to the end flanks of the
tube, the temperature and pressure remain constant for several milliseconds, during
which the experimental measurements are made. The concentration values are
estimated through several techniques based on the emission/absorption properties of
molecules like mass spectrometry, gas chromatography and laser absorption [31].
   Rapid compression machines are currently employed by many researchers all
over the world for the study of combustion reactions at lower temperatures (500–
950 K) [6, 9]. The gaseous mixture containing the reactants and possibly the inert
gas is compressed homogeneously and rapidly so as to reach predetermined reaction
conditions (pressure and temperature). Afterwards, the temporal evolution of the
system is followed with the same diagnostic techniques as those utilized for shock
tube studies.
   A third kind of systems consists of plug flow reactors [9,27] for the investigation
of intermediate temperature regimes (900–1,300 K). According to given tempera-
ture and possibly pressure profiles the reacting flow is steadily going through the
system which is assumed to be homogeneous in the plane perpendicular to the flow
direction. In such a way, the variables only depend on the distance from the inlet
point, which can be easily converted into the reaction time. The analysis of the
mixture can be done at several points of the flow using the methods evoked above.
   Ignition delay times are often measured during experiments carried out in
either shock tubes or rapid compression machines. They are defined as the period
between the beginning of the reactions in the system and the sharp increase in the
concentration of free radicals resulting from the onset of chain reactions [10].
   In every of the three cases described above, for so-called homogeneous systems
output profiles only hinge on initial conditions, kinetic parameters and thermody-
namic data.



3 Mathematical Modeling of Homogeneous Combustion
  System

As mentioned earlier, homogeneous systems are characterized by a relatively
simple ensemble of mathematic equations when compared to spatially resolved
simulations. The chemistry is accounted for by ns species and n reactions and is
210                                                              M. Fischer and U. Riedel


Table 1 Reaction from the    Reactions               A               n           Ea
H2 –O2 system (see (2))
                             O2 CHDOHCO              2.065EC14       0.097      62.853
                             H2 CODOHCH              3.818EC12         0.000     33.256
                             H2 COHDH2 OCH           2.168EC08         1.520     14.466
                             OHCOHDH2 OCO            3.348EC04         2.420     8.064



well illustrated by a part of the H2 –O2 system [10], see Table 1. The following
species are involved: H2 , O2 , H, O, OH, and H2 O.
   Let us consider a given reaction R
                                    NR
                                 ˙kD1spe vk Sk D 0                                   (1)

where Sk is a participating species (either reactant or product), vk is the corre-
sponding stoichiometric coefficients being negative for a reactant and positive for a
product whereas NRspe D NRrea C NRpro is the total number of participating species,
that is the sum of the reactant and the product number.
   Since detailed kinetic modeling aims at describing what really happens on the
molecular level, the number of products and reactants is usually not greater than
two except for pressure dependent reactions where collisions with other molecules
are described as a reaction with a third body M, bringing up the number of reactants
and products to three [10].
   The rate constant of a reaction is given by
                                               Ea
                                  kR D AT n e RT                                     (2)

where A, n and Ea are respectively the pre-exponential factor, the temperature
factor and the activation energy. The rate constant of the backward reaction kR;1 is
given by
                                              kR
                                   kR;1 D                                           (3)
                                              Kc

with Kc being the equilibrium constant. For gaseous reactions, the dependency of
Kc (in concentration units) is expressed by the following formula:

                                          p0 ˙ NRspe vk
                              Kc D Kp .      / kD1                                   (4)
                                          RT
where Kp is the equilibrium constant in pressure units, p0 the standard pressure
which is equal to 1.013 bar, R the ideal gas constant and T the temperature. The
equilibrium constant Kp itself is calculated from the free enthalpies of all species
participating in the reaction as follows:
                                            G0
                                   Kp D e RT                                         (5)
Combustion Chemistry and Parameter Estimation                                        211


where G0 is the free enthalpy of the reaction, obtained by adding the free
enthalpies of all products and subtracting those of all reactants.
   If the system is considered to be homogeneous, all variables only depend on the
reaction time t and chemistry is the only origin of the concentration changes.
Their derivatives are therefore given by the formula:

                          dci                 j DN
                              D ˙RD1
                                 n
                                     vi;R kR ˘j D1 Rrea cj                           (6)
                          dt
that is the sum of all stoichiometric coefficients multiplied by the reaction rates,
obtained by multiplying the rate constants with the concentrations of all reactants.
In this formula, n designates the number of reactions whereas NRrea is the number
of reactants which take part in the R-th reaction. A more detailed explanation can
be found in [32]. All these reactions form a set of coupled ordinary differential
equations which can be written as:

       dci
           D fi .t; C; k/ and C.t D 0/ D C0 ; t 2 Œ0 te ; i D 1; 2; ::Nspe          (7)
       dt
or
                  dC
                      D f .t; C; k/ and C.t D 0/ D C0 ; t 2 Œ0 te                    (8)
                  dt
where k represents the rate constants of all reactions and C is the vector of species
concentrations.
    For solving the system, it is necessary to introduce initial conditions for each
species, for the temperature and for the pressure.
    One equation characterizing the evolution of the temperature T alongside another
one concerning the volume and/or pressure must also be added to uniquely
characterize the system.
    For solving the system, it is necessary to introduce initial conditions for each
species, for the temperature and for the pressure.
    The temperature T may either be constant (for isothermal systems) or, in the
case of adiabatic systems, evolve according to the heat released by the reactions
taking place. The heat itself can be calculated from the thermodynamic data about
the species involved in the reactions [32].
    In every case, one obtains a system of differential equations which is typically
stiff due to many different chemical time scales inherent to the reaction system. This
kind of systems implies the use of implicit methods of numerical integrations like
DASAC [14] or the Cash–Karp Runge–Kutta and Bader–Deuflhard integrators [11]
to deal with it.
    After having solved the system of differential equations for a fixed set of k values,
one gets more or less a good approximation of the temporal evolution of the species,
provided of course that the rate constants are correct from the very beginning. As
we will see in the Chap. 6, this is often not the case, so that the values of parameters
have to be adapted to the experimental measurements by some fitting procedure.
212                                                             M. Fischer and U. Riedel


4 Sensitivity Analysis and Mechanism Reduction

The ultimate goal of detailed reaction kinetics is to give an accurate and complete
description of all what can take place on the molecular level. To describe the
pyrolysis and rich oxidation of simple fuels such as methane (CH4 ), acetylene
(C2 H2 ) or ethylene (C2 H4 ) or the lean oxidation of greater alcanes like iso-octane
(i-C8 H18 ) under all possible pressure, temperature and concentration conditions,
several hundreds of species and thousands of reactions are necessary. However,
in almost every case, only a smaller number of them will play an important role
for the species concentrations or variables (like temperature or ignition delay time)
one is interested in. Thus, taking into account all species and reactions from the
mechanism for each simulation or iteration of a fitting algorithm requires a large
amount of unnecessary computational time since many of them have no significant
influence on the variables of interest. It is furthermore highly desirable to identify
the most important reactions since they are the ones underlying the whole chemical
behavior of the system under given conditions.
    Sensitivity analysis are a common way to measure the strength of the influences
of parameters on a particular variable which could be either a concentration,
the temperature or possibly the ignition delay time. In most cases, sensitivity
coefficients of first order are computed according to an OAT (One-At-a-Time)
framework whereby the influence of one parameter on the output is evaluated while
all other parameters are fixed (see for example [10, 20, 33] ). The definition of the
sensitivity coefficients si is then straightforward and is based upon the derivative of
the interesting variable [A] with respect to the parameters pi :

                                            ıŒA
                                     si D        :                                  (9)
                                            ıpi

Usually, relative sensitivities are considered in chemistry. These are defined as
follows:
                                    pi ıŒA   ılnŒA
                              si D          D        :                       (10)
                                    ŒAıpi    ılnpi
Sensitivity coefficients for concentrations cical as a function of time can generally
be computed simultaneously along the solution of the differential equation system
with some additional computational cost [32] according to the formula:

                  ı ıcical     ı ıcical     ı
                    .      /D    .      /D     .fi .C cal ; kj //                  (11)
                  ıt ıkj      ıkj ıt       ıkj

and if one further develops :

                     ı ıcical     X ıfi ıc cal
                                 sDNspe
                                                     ıfi
                       .      /D              . s /C
                                           cal ık
                                                         ;                         (12)
                     ıt ıkj       sD1
                                        ıcs      j   ıkj
Combustion Chemistry and Parameter Estimation                                         213


where f is the right hand-side function characterizing the system of differential
equations described in the previous section. ıcıfcali form the Jacobian, defined as
                                                       s
                                                                             ıc cal
the matrix of partial derivatives of f with respect to the concentrations. ıks j is the
sensitivity coefficient of the concentration cscal at time t with respect to the j-th
                           ıfi
kinetic coefficient and ık   j
                               is the derivative of the right hand-side term with respect
to the j-th coefficient. It is noteworthy that the differential equation system obtained
in such a way is always linear, regardless of the non-linearities characterizing the
concentrations.
    The reliance upon first derivatives is however criticizable in that the correlated
effects of parameter variations is not at all considered although such non-linear
effects can often occur for complex reaction mechanisms such as those encountered
in combustion systems. To overcome this limitation, methods considering the
correlations between the parameters can be employed. Among them, the FAST
(Fourier Amplitude Sensitivity Test) [24] has shown promising successes.
    In any case, sensitivity analysis allow for a particular situation to make a
distinction between the parameters which must be determined accurately (because
having a tremendous impact on the simulated variables due to high sensitivities) and
those whose knowledge may be less precise. It is nonetheless not sufficient to trust
sensitivity analysis alone for the identification of unimportant reactions because it
can often occur that fast reactions with low sensitivity coefficients play a critical
role. To see how this can happen, one has just to consider the simple (imaginary)
chain C2 H6 !C2 H5 CH and C2 H5 !C2 H4 CH with rate coefficients k1 and k2 , if
k1 is much greater than k2 , then the second reaction will be the limiting one whereas
the first one will be nearly infinitely fast from this perspective. Thus, to modify the
pre-exponential factor of the first reaction slightly (say 0.9 k1;0 or 1.1 k1;0 instead
of k1;0 ) would have very limited impact on the formation of the product so that the
sensitivity would be rather small. To exclude it from the reaction mechanism on the
ground of this criterion alone would however lead to the rather undesired result that
no more C2 H4 would be produced at all! This thus shows the importance of also
considering the flow followed by the element C and H between C2 H6 and C2 H4 .
    Generally, for the atom sort a and the reactants i and j, the two following normed
flow parameters [29] are introduced: fija , the flow of the atom a during the formation
of species i from species j relative to the global formation of i, whereas cija is the
flow of the atom a during the consumption of species i for forming species j relative
to the global consumption of i:
                                       PkDn      0    00 na
                                         kD1 rk vj k vi k nak
                                                           i

                              fija D     PkDn 00                                      (13)
                                          kD1 vi k rk

                                       PkDn     0    00 na
                                                          i
                                        kD1 rk vj k vi k nak
                             cija D      PkDn 0                  :                    (14)
                                          kD1 vi k rk
214                                                               M. Fischer and U. Riedel


n is the set of uni-directional reactions over which it is summed, rk is the reaction
                                                                                   00
rate of the k-th reaction, nai is the number of atom a in the species i whereas vi k and
  0
vj k are the stoichiometric coefficients of the species i and j in the k-th reaction.
    The number of atoms nai are normalized to the total number of atoms transported
                                   PlDNRspe 0 a
in the k-th reaction: nak D         lD1     vlk nl . Both normed flows take on values
between 0 and 1 which correspond to the flux part from, respectively, towards
species i with respect to species j.
    In such a way, flow diagrams showing the relative importance of all forma-
tion/consumption pathways for an ensemble of species can be generated. They can
be defined either for particular points in time or the flows may be integrated over a
defined time interval. If a reaction has small sensitivities according to all variables of
interest and if its role in the reaction flow is negligible, then there are good grounds
for believing it can be excluded from the mechanism without consequences. The
thresholds for fija and cija to be respected depend however on the particular context.
    Several methods have been developed for the practical reduction of kinetic
differential equation systems for a particular set of conditions. They may be divided
in two categories: those which preserve the structural integrity of the mechanism
and those which do not. According to Androulakis definition [2], we will say that a
reduced mechanism maintains the structural integrity of a detailed mechanism if all
species and reactions of the reduced mechanism were already present in the initial
one. This implies that the chemical description of the system in terms of reaction
flux remains the same over the whole reduction process, only those chemical species
and reactions which play no significant role for the desired output are removed.
    An intuitive method [25] belonging to this class consists of the successive appli-
cation of a reaction flow analysis to distinguish between slow and fast reactions,
followed by a sensitivity analysis carried out only for the slow reactions to identify
those which are crucial for the variables of interest. The rapid reactions and the slow
reactions with high sensitivity values are then kept within the reduced mechanism.
Other methods imply the stepwise removals of a group of reactions followed by the
evaluation of the discrepancies introduced with respect to the original model.
    For example, Petzold and Zhu [21] reformulated the mechanism reduction as
a non-linear integer-programming problem which was itself transformed into a
continuous optimization problem solved with a sequential quadratic programming
method. Androulakis [13] also formulated the mechanism reduction as a non-linear
integer-programming problem which he solved with the help of a branch and bound
algorithm.
    The methods belonging to the second group modify the structure of the problem
either by lumping reactions and species or by resorting to algebraic simplification
of the differential equation system underlying the detailed kinetic scheme.
    The most traditional approaches consist of applying the assumption of steady
state to very reactive radicals (which means that the temporal derivatives of
their concentrations have to remain close to zero over the whole interval) which
leads to algebraic relations allowing the simplification of the underlying system
of differential equations and the lumping of groups of species and reactions.
Combustion Chemistry and Parameter Estimation                                      215


This approach usually involve skillful kineticists and intuitions [21], although
Montgomery et al. [19] have proposed an automated procedure for doing this.
The system of differential equations can also be simplified by considering very
fast bidirectional reactions to be in equilibrium. These methods, which consist
in fact of a differentiation between slow and rapid modes of the differential
equation system, can be replaced by more general frameworks like the ILDM
(Intrinsic Low Dimensional Manifolds) [15] or the CSP (Computational Singular
Perturbation) [12] methods.
   However, such methods can not be employed for parameter estimation since
they do not conserve the mathematical structure upon which the detailed chemistry
is based. Thus, only the first class of approaches is of interest for the parameter
estimation problem at hand. In the following section, an easily implementable
method maintaining the structural integrity of the reaction mechanism developed
recently will be presented and demonstrated as one concrete example concerning
the oxidation of methane CH4 .



5 Mechacut, a Practical Tool for Simplifying Reaction
  Mechanisms

For quickly obtaining a simplified mechanism accurately reproducing the variables
of interest resulting from the detailed mechanism, the tool Mechacut has been
developed by the authors. It relies on the software Homrea for the simulation of
homogeneous kinetic systems [10].
   As input, it requires the following information:
– The conditions of all experiments considered.
– The reaction mechanism.
– The thermodynamic data.
– The target variables (concentrations or temperature) whose profiles must be
  reproduced.
– The tolerance in terms of relative differences e (say e D 2%).
   Like several methods cited above, it is based upon the fact that typically reactions
containing species with small concentrations tend to play a minor role for the whole
system.
   In a first step, for each species k, k 2 Œ1; nS , the greatest molar fraction
value over all experiments and time points Ck;max is determined. The use of
molar fractions instead of concentration units allows the simultaneous consideration
of experiments with different orders of magnitude of initial reactant and diluent
concentrations.
   Then, for a given reaction R : ˙i vi Ri D ˙j vj Pj , the greatest molar fractions
Ck;max of all participating species are compared, and the species having the lowest
(in comparison with the other species of the reaction) value of the greatest molar
fractions is identified and the corresponding value is assigned to the reaction.
216                                                              M. Fischer and U. Riedel


    The reactions are then sorted according to this characteristic value in a decreasing
order. Therefore, the reactions situated towards the end of the mechanism will typ-
ically contain some species having very low concentrations, whereas the reactions
located at the beginning will only have species with greater concentrations.
    There may be however situations where small concentrations of some participat-
ing species does not necessarily entail the unimportance of the reaction, especially
in the case where the reactants or products include free radicals which usually have
low concentrations but do play a crucial role for the whole reaction system.
    To discriminate important and unimportant reactions, it is therefore necessary to
proceed in a stepwise fashion, removing by way of trial a group of reactions and
accepting the change if the variations of the target variables are less than a pre-
defined threshold e.
    To introduce flexibility, random numbers are employed to choose the first line
of the group to be suppressed n 2 Œ1; nreac  and the number of reactions m to
be deleted which is included in the interval Œ0; mmax . m, the current number of
deletable lines, is generated according to an uniform distribution function, whereas
n follows a probability law strongly biased towards the end of the interval Œ1; nreac ,
so as to target most of the time the reactions with minor species.
    The current maximum number of lines mmax is multiplied by a pre-defined factor
a ( a > 1 ) if the deletion could be accepted, otherwise (the deletion led to some
discrepancies greater than the tolerance) it is multiplied by an other pre-defined
factor b (0 < b < 1). The maximum number of lines mmax is however never allowed
to exceed the threshold mmax max . A species is suppressed from the input file if it no
longer appears in the reaction mechanism either as reactant, product or third body.
    In this manner, large numbers of reactions may be by way of trial deleted at the
beginning of the process, as long as unimportant reactions are considered. From
a certain point, the deletion of more influential reactions is tried out and rejected
what reduces the length of the interval. If the number of failures exceeds a given
threshold, the algorithm leaves the probabilistic mode and tries to delete each
reaction one by one.
    In what follows, an application example is given to illustrate the algorithm and
its efficiency.
    As will be presented in detail in the next chapter, the estimation or optimization of
kinetic parameters out of experimental data requires solving the differential equa-
tions systems underlying the simulated variables for many possible combinations
of parameters (several thousands of times for a dozen of adjustable parameters).
If several experiments are considered simultaneously for extracting the best set
of parameters matching the measurements, each simulation for fixed values of the
parameters may cost several minutes if the whole reaction mechanism is employed.
This situation is clearly not satisfying for practitioners who often have to consider
different combinations of adjustable parameters before finding the one which will
lead to acceptable discrepancies with the experiment: the optimization process will
then last more than 1 day before either the optimal solution will be found or it may
be concluded that the current mechanism is inconsistent with the data.
    Reaction mechanism simplification techniques offer here an interesting option to
considerably reduce the time of each iteration (corresponding to the simulation of
Combustion Chemistry and Parameter Estimation                                           217


Table 2 Experimental
conditions considered          Experiment   [CH4 ] (%)   [O2 ] (%)   p      T       t
                               1            0.4          20          1.48   1,711   6.0e04
                               2            0.5          10          1.53   1,752   6.0e04
                               3            0.5          10          1.62   1,843   6.0e04
                               4            0.4           5          1.57   1,821   6.0e04


all measured variables), thereby leading to significantly shorter CPU time usage for
parameter optimization.
    The GRI-mechanism 3.0 [28] is a compilation of elementary reactions along with
reaction rate values and thermodynamic parameters which aims at describing the
oxidation of methane (CH4 ). Without the chemistry involving nitrogen N, it contains
38 species and 422 (uni-directional) reactions and is valid over a wide range of
conditions for fuel lean to stoichiometric flames. This reaction mechanism has been
reduced using Mechacut for a set of experiments concerning the oxidation of CH4
whereby the temporal profiles of carbon monoxide CO and hydroxyl radicals OH
have been measured. These compounds have been considered as target species, that
is the reduced mechanism must reproduce the profiles from the detailed mechanism
within a given tolerance e. The conditions of the four chosen experiments are given
by Table 2. ŒCH4  and ŒO2  denote the molar fractions of methane and oxygen, T
the temperature in Kelvin, p the pressure in bar and t corresponds to the duration of
the experiment in seconds.
    In what follows, the reaction mechanism has been reduced to reproduce the
concentration profiles of CO and OH within a tolerance of 2%. The parameters
had the following values: a D 2, b D 0:6 and mmax  max D 150.
    After the end of the procedure, the reduced reaction mechanism contained 172
reactions and 31 species which amounts to a reduction of 59.24% and 18.42%
respectively. To illustrate the accuracy of the reduced model, two characteristic pro-
files were considered and a comparison between detailed and reduced mechanism
used in the simulation is given in Figs. 1 and 2.
    The differences between the two profiles are extremely small and the results are
similar for the six remaining profiles.
    A considerable reduction in terms of reactions could thus be reached, showing
that many reactions of the GRI-mechanism 3.0 play a negligible role for the
evolution of the species CO and OH during the combustion of methane under the
conditions considered here.



6 Parameter Estimation for Combustion Chemistry
  as an Optimization Problem

After having identified the most important parameters and deleting as much
irrelevant reactions as possible, the parameter estimation problem for the given set of
experimental data can be formulated as an optimization problem whereby the goal is
218                                                                                 M. Fischer and U. Riedel


                                 4.5e-08
                                                                          "CO_detailed"
                                   4e-08                                  "CO_reduced"
                                 3.5e-08
       Concentration (mol/cm3)



                                   3e-08

                                 2.5e-08

                                   2e-08

                                 1.5e-08

                                   1e-08

                                   5e-09

                                       0

                                  -5e-09
                                           0   0.0001 0.0002 0.0003 0.0004 0.0005 0.0006 0.0007
                                                                Time (s)

Fig. 1 Comparison between the detailed and reduced mechanisms for the CO profile of the second
experiment

                                  2e-08
                                                                          "OH_detailed"
                                 1.8e-08                                  "OH_reduced"

                                 1.6e-08
      Concentration (mol/cm3)




                                 1.4e-08

                                 1.2e-08

                                  1e-08

                                  8e-09

                                  6e-09

                                  4e-09

                                  2e-09

                                      0
                                           0   0.0001 0.0002 0.0003 0.0004 0.0005 0.0006 0.0007
                                                               Time (s)

Fig. 2 Comparison between the detailed and reduced mechanisms for the OH profile of the second
experiment



to minimize the discrepancies between the results from experiments and those from
the model. Let us consider a set of n experiments, the i-th one having ni measured
variables with i 2 Œ1; n. The standard estimators of the differences are the least
squares norm and the least absolute values norm which are respectively defined as
Combustion Chemistry and Parameter Estimation                                    219


                                    X
                                    n X
                                      ni
                              dD         .ci;j  ei;j /2                        (15)
                                    i D1 j D1


and
                                    X
                                    n X
                                      ni
                               dD                jci;j  ei;j j                 (16)
                                     i D1 j D1

where ei;j and ci;j are the variables from the experiments and the model.
    The last norm has been proven to be much more insensitive with respect to
outliers, that is experimental data lying outside of the expected range due to e.g.
measurement errors [1]. While being frequently used in combustion problems for
fitting parameters to one unique variable (like the concentration of a species), both
norms rapidly show their limits when confronted with variables having different
orders of magnitude. It is easy to envisage that by considering the simple case
where the temperature T (being more than 1,000 K) and the concentration of one
species (being around 1e6) were measured at the same time: the discrepancies
between the simulated and experimental temperatures would completely dominate
the discrepancies of the concentration by several orders of magnitude so that
the minimization of each of the norm would only adapt the parameters to the
temperature profile and ignore the information contained in the concentration
profile.
    This is the reason why weights must be assigned to all terms so that they may
receive the same importance in the evaluation of the total discrepancies. Usually,
this is done by minimizing the so-called Chi-squared function, which is defined as:
                                         Dni
                                   i Dn jX
                                   X         .ci;j  ei;j /2
                             dD                        2
                                                                                (17)
                                   i D1 j D1
                                                      i;j

whereby i;j designate the standard deviations of the experimental variable ei;j .
In the vast majority of cases, these quantities are unfortunately not determined
experimentally, forcing the kineticist to find approximations.
   To avoid this problem, the relative least squares and absolute values norms can
be considered. They are defined like the norms above except that the terms within
the sum are divided by the experimental values of the variable:

                                         Dni
                                   i Dn jX
                                   X         .ci;j  ei;j /2
                             dD                        2
                                                                                (18)
                                   i D1 j D1
                                                      ei;j

and
                                         Dni
                                   i Dn jX
                                   X         jci;j  ei;j j
                             d D                                  :             (19)
                                   i D1 j D1
                                                     ei;j
220                                                                      M. Fischer and U. Riedel


   With these norms, the percentage errors are taken into account in such a way that
the relative discrepancies of variables as different as concentrations and temperature
have the same weight. Their use is akin to assuming that all standard deviations are
proportional to the experimental values. These norms are also particularly useful if
concentrations with different orders of magnitude have been measured.
   Whatever norm d was chosen, the problem at hand now consists of minimizing
the value originating from it, determining in this manner the optimal coefficients.
The minimization problem may be generally formulated as :

                                 mi n F .P / D d.E; C; P /                                   (20)
under the conditions

               dC
                    D f .t; C; P; Q/ and C.t D 0/ D C0 ; t 2 Œ0 te               (21)
                dt
where E is the set of experimental measurements, C the set of modeled values, C0
the initial values of the concentrations, P the active set of all adjustable parameters
and Q the ensemble of fixed parameters. Constraints on the parameter values have
almost always to be taken into account, frequently via bound constraints:

                                           l i  pi  u i                                    (22)

Often in chemical kinetics, global methods like simulated annealing or genetic
algorithms are employed for minimizing the function and they are extremely popular
due to their abilities to bypass local minima, which are sub-optimal minima of the
function surrounded by points of greater values.
   Genetic algorithms were for instance employed by Masoori et al. [17] to
determine reaction parameters for the Fischer–Topsch synthesis, Polifke et al. [22]
used them for finding optimal values of coefficients for simplified mechanisms
whereas Elliott et al. [7] apply them to various chemical kinetic problems including
combustion.
   Simulated annealing was recently employed by Mani et al. [16] for the determi-
nation of activation energies pertaining to the non-isothermal pyrolysis of lignin.
   Nevertheless, as Tang et al. [30] pointed out, both global methods can be
extremely inefficient in that they ignore problem specific knowledge and rely on
randomness for finding better solutions. These authors proposed then a Physically
Bounded Gauss–Newton (PGN) method for solving optimization problems in
chemical kinetics. The derivatives required by the method are obtained through the
sensitivity coefficients, themselves gotten from an additional differential equation
solved along the system of differential equations (see Sects. 3 and 4). For a
perturbation ˚ of the n-parameter set P which is sufficiently small, the new value of
the model variable ci;j can be expressed according to a first-order approximation:

                                           ıci;j         ıci;j                 ıci;j
      ci;j .t; P C ˚/ D ci;j .t; P / C .         /1 C .       /2 C : : : C .       /n :   (23)
                                           ıp1           ıp2                   ıpn
Combustion Chemistry and Parameter Estimation                                              221


The set of all concentrations resulting from the model can then be written as:

                           C.t; P C ˚/ D C.t; P / C S.t/˚                                 (24)

where S is the matrix of sensitivity coefficients. In case of a least square norm, a
local Gauss–Newton step can then be taken by solving the following constrained
linear least squares problem:
   Minimize with respect to the perturbation ˚,

                                F .˚/ D d.E; C; P C ˚/                                    (25)

with li  pi Ci  ui . Unfortunately, as the same authors recognize, the successive
minimizations according to Gauss-Newton steps can only lead to the next local
minimum, which may not be sufficient for the problem at hand. In effect, contrarily
to global optimization methods, derivative based local optimization methods like
the PGN exploit efficiently the structure of the optimization problem, but the initial
values have to be located in a pretty narrow domain to guarantee convergence
towards the global minimum of interest.
   Aware of this hurdle, Bock proposed a method reaching a compromise between
the mathematical efficiency of local methods and the robustness of global methods
by applying a multiple shooting method to the optimization problem [4]. Following
this approach, the initial value problem

               dC
                  D f .t; C; P; Q/ and C.t D 0/ D C0 ; t 2 Œ0 te                         (26)
               dt

is divided into n initial value problems :

              dCj
                  D f .t; Cj ; P; Q/ and Cj .tj / D j ; t 2 Œtj tj C1                   (27)
               dt

with t1 D 0 , tnC1 D te . The set of optimizable parameters contains not only the
adjustable kinetic coefficients P but also the values of the concentrations at the n
nodes 1 , 2 , 3 ,. . . ,n . The continuity constraints Cj .tj C1 / D Cj C1 .tj C1 / D j C1
have to be fulfilled by the final solution, ensuring thus its internal continuity.
An in-depth review and presentation of the technique may be found in [5].
Bock [4] demonstrated the advantages of the method on a kinetic parameter
estimation problem pertaining to the denitrogenation of pyridine: by considering
concentrations as variables, a close agreement with the experimental values may
be observed from early on and many local minima may be avoided. The method
requires however a good initial guess of the concentration values at all nodes for all
species, whereas only a small portion of them is measured for combustion problems,
thereby making the first estimation very hard. As a consequence, further work needs
to be done before this technique may be applied to combustion problems involving
large numbers of species and reactions.
222                                                              M. Fischer and U. Riedel


   Until now, we have focused our attention on parameter fitting based on a given set
of experiments without yet considering the purpose of the overall process, namely
the construction of a reaction mechanism which has to be consistent with all known
data and not just a part of them. According to Frenklach [8, 23] one of the major
stumbling block of combustion kinetic lies in the fact that the adjustment of a
reaction mechanism to a new experimental set often involves the disappearance
of good agreements with previous experiments. This is the case because the
dependencies of species profiles measured under different experimental conditions
on the reaction parameters is very complex. The traditional cumulative approach
in combustion kinetic consists of first considering the simplest possible chemical
system (H2 –O2 ), determining appropriate coefficients from the experimental data,
then fixing all the reactions and parameters, and considering the next complex
system (CO–O2 ) and the corresponding experimental data, only the parameters of
the newly introduced reactions involving C-species are allowed to change. In this
manner, the good agreement reached for (H2 –O2 ) will not be destroyed since the
then determined parameters could not be changed and the new reactions of C species
have no influence on experiments including the system (H2 –O2 ) alone. While this
logic remains sound for this particular trivial example, things become much more
unwarranted when the same method is applied to the hierarchical construction of
large reaction mechanism for species such as CH4 , C2 H2 , C2 H4 , C2 H6 . C3 H6 , C3 H8
and so on. This stems at least from three reasons:
– For obtaining good agreements with experiments pertaining to a certain com-
  pound, it may often occur that changes of the parameters describing the lower
  chemistry are necessary due to their own imprecision.
– The numbers of experiments concerning one single compound (for instance
  CH4 ) can be extremely large so that it is practically impossible (because of
  the limitations of current computers) to solve all associated differential equation
  systems for the optimal determination of kinetic parameters. In reality, only a
  small subset of the experiments can be used, not considering at all the huge
  amount of information contained within the other ones.
– The roles of the chemistry of lower and higher compounds may be deeply
  intertwined and cannot then be seen as a bottom-up dependency only. For
  instance, reactions involving acetylene C2 H2 may play an huge role for many
  pyrolysis or rich oxidation experiments involving methane CH4 as reactant.
  This means that after having adjusted methane reactions to fit profiles measured
  during CH4 experiments, all the efforts may be spoiled by later modifying C2 H2
  reactions in order to better reproduce experiments involving acetylene.
   To overcome these problems, Frenklach focused on the concept of feasible set of
parameters [8, 23] which he defined as the interrelated set of all possible parameter
values, given theoretical knowledge and information gained from all experiments:
the model has to agree with all experimental measurements within the limit of their
uncertainties. To allow the reproduction of experimental profiles without having
to solve each time a differential equation system, Frenklach et al. employ an
HDMR (High Dimensional Model Representation) technique (also called solution
Combustion Chemistry and Parameter Estimation                                        223


mapping) [26] which consists of expressing the modeled species profiles as an
algebraic function of the significant parameters. In this way, there is no longer a limit
to the quantity of experimental information which may be used to determine kinetic
parameters along their uncertainties. As the number of experimental data becomes
larger and larger, the unknown parameters have to satisfy an increasing number
of constraints (which are implicitly given by the fact that the simulated variables
have to reproduce the experimental ones within an interval corresponding to the
measurement uncertainties). In this manner, the uncertainties on the parameters
become smaller and smaller as new experimental data are taken into account because
the intervals of possible values are shrunk.
    This approach seems promising since it is potentially able to exploit all kinetic
information stemming from simplified combustion systems and not just parts of it.
However, it faces considerable problems when applied to the optimization of large
reaction mechanisms. If such a model contains, say, 3,000 kinetic parameters, it
would be practically impossible to express all variables at every time point as a
polynomial function of the 3,000 coefficients. Instead, sensitivity analysis have to
be carried out so as to only retain the parameters having an influence on some of the
data points (e.g. species concentrations at given time points). As an illustration, let
us consider a kinetic model with n parameters p. Let us further suppose that a given
variable m.p/ can be well approximated by a polynomial function of one part of
the parameters pact whereas the sensitivities of the other parameters pi nac are low
which leads to their exclusion from the function.
    The problem now is that modifications of the values of the active parameters pact
often lead to changes of the sensitivities of the unconsidered parameters pi nac which
are then no longer negligible. Indeed, the authors of the present article found this
was the case for reduced version of the GRI-mechanism (mentioned above) whereby
modifications of the coefficients of certain reactions considerably modified the
sensitivities of other for concentration profiles. The results of an optimization using
a simplified model (which may be a simplified mechanism or a polynomial function)
can therefore be misleading in that significant differences between complete and
reduced models may exist for many sets of parameter values. As a consequence, the
optimal solution for the reduced model may considerably differ from the optimal
solution for the complete model. Caution is therefore mandatory when using the
HDMR method or mechanism reduction methods for the optimization of complex
reaction mechanisms: the optimizable parameters must be varied within narrow
ranges in order that the reduction remains valid.
    It is finally worth noting that all parameter estimation approaches aiming at
reducing the size of the confidence region of the parameters may take advantage
from the method of experimental design developed by Bock et al. [3]. Relying on the
exact mathematical description of the chemical kinetic through differential equation
systems, experimental settings such as temperature, pressure, initial concentrations
and measurement times are optimized in such a way that the uncertainty surrounding
targeted kinetics coefficients is reduced as much as possible through the information
brought up by these experiments.
224                                                                    M. Fischer and U. Riedel


7 Conclusion

In this article, an overview has been given on the problem of parameter estimation
for combustion chemical kinetic. Homogeneous systems (where variables only
depend on the reaction time) are extremely useful to focus on the chemistry and
three common techniques, shock tubes, rapid compression machines and plug
flow reactors have been described. These systems are governed by a system of
differential equations typically exhibiting a huge stiffness which requires implicit
numerical methods to tackle it. For the identification of important reactions,
sensitivity analysis allow to find the kinetic parameters whose slight variations have
important consequences on the variables of interest, whereas reaction flow analysis
reveal the most significant pathways in terms of participating molecules. For large
reaction mechanisms, reduction of the size of the differential equation system
has been traditionally achieved by postulating steady states for free radicals and
equilibrium for fast reactions. Recently, methods directly reducing the number of
reactions and species have been developed. The program Mechacut presented here
is one such approach which has been applied to a problem pertaining to methane
oxidation. Afterwards, diverse optimization approaches found in the literature have
been presented and the challenges of global optimization and building of reaction
mechanisms consistent with all experimental data have been highlighted.



References

 1. S. Allende, C. Bouza, and I. Romero. Fitting a linear regression model by combining least
    squares and least absolute value estimation. QESTIIO, 19(1,2,3):107–121, 1985.
 2. I.P. Androulakis. Kinetic mechanism reduction based on an integer programming approach.
    AIChE Journal, 46(2):361–371, 2000.
 3. I. Bauer, H. G. Bock, S. Körkel, and J. P. Schlöder. Numerical methods for optimum
    experimental design in DAE systems. Journal of Computational and Applied Mathematics,
    120:1–25, 2000.
 4. H.G. Bock. Modelling of chemical reaction systems. Proceedings of an International
    Workshop, 18:102–125, 1980.
 5. H.G. Bock, E. Kostina, and Schloeder J. P. Numerical methods for parameter estimation in
    non-linear differential algebraic equations. GAMM-Mitt., 30(2):376–408, 2007.
 6. M. Carlier, C. Corre, R. Minetti, J-F. Pauwels, M. Ribaucour, and L-R. Sochet. Autoignition
    of butane: a burner and a rapid compression machine study. Twenty-Third symposium
    (International) on combustion / The combustion Institute, (4):1753–1758, 1990.
 7. L. Elliott, D. B. Ingham, A. G. Kyne, N. S. Mera, M. Poukashanian, and C. W. Wilson. Genetic
    algorithms for optimisation of chemical kinetics reaction mechanisms. Progress in Energy and
    Combustion Science, 30:297–328, 2004.
 8. Michael Frenklach. Process informatics for combustion chemistry. 31-th International
    Symposium on Combustion, Heidelberg, 2006.
 9. R. Q. Gonzales. Evaluation of a Detailed Reaction Mechanism for Partial and Total Oxidation
    of C1-C4 Alkanes. PhD thesis, University of Heidelberg, 2007.
10. C. Heghes. C1-C4 Hydrocarbon Oxidation Mechanism. PhD thesis, University of Heidelberg,
    2006.
Combustion Chemistry and Parameter Estimation                                                  225


11. J. C. Ianni. A comparison of the bader-deuflhard and the cash-karp runge-kutta integrators for
    the gri-mech 3.0 model based on the chemical kinetics code kintecus. Second MIT Conference
    on Computational Fluid and Solid Mechanics, pages 1368–1372, 2003.
12. S.H. Lam. Using csp to understand complex chemical kinetics. Combustion, Science and
    Technology, 89:375, 1993.
13. L. Liang, J.G. Stevens, J.T. Farell, P.T. Huynh, I.P. Androulakis, and M. Ierapetritou. An
    adaptive approach for coupling detailed chemical kinetics and multidimensional cfd. 5th US
    Combustion Meeting- Paper C09, pages 1–15, 2007.
14. A.E. Lutz, R.J. Kee, and J.A. Miller. Senkin: A fortran program for predicting homogeneous
    gas phase chemical kinetics with sensitivity analysis. SAND87-8248, Sandia National
    Laboratories, pages 4–30, 1988.
15. U. Maas and S.B. Pope. Simplifying chemical kinetics: Intrinsic low-dimensional manifolds
    in composition space. Combustion and Flame, 88:239, 1992.
16. T. Mani, P. Murugan, and N. Mahinpey. Determination of distributed activation energy model
    kinetic parameters using simulated annealing optimization method for nonisothermal pyrolysis
    of lignin. Ind. Eng. Chem. Res., 48:1464–1467, 2009.
17. M. Masoori, B. Boozarjomehry, B. Ramin, S.J. Maryam, and N. Reshadi. Application
    of genetic algorithm in kinetic modeling of fischer-topsch synthesis. Proceedings of an
    International Workshop, 27(1):25–32, 2008.
18. J. V. Michael and K. P. Lim. Shock tube techniques in chemical kinetics. Annu. Rev. Phys.
    Chem., 44:429–458, 1993.
19. C. J. Montgomery, M.A. Cremer, J.-Y. Chen, C.K. Westbrook, and L.Q. Maurice. Reduced
    chemical kinetic mechanisms for hydrocarbon fuels. Journal of Propulsion and Power, 18(01),
    2002.
20. I. I. Naydenova. Soot Formation Modeling during Hydrocarbon Pyrolysis and Oxidation
    behind Shock Waves. PhD thesis, University of Heidelberg, 2007.
21. L. Petzold and W. Zhu. Model reduction for chemical kinetics: An optimization approach.
    AIChE Journal, 45(4):869–886, 1999.
22. W. Polifke, W. Geng, and K. Doebbeling. Optimisation of reaction rate coefficients for
    simplified reaction mechanisms with genetic algorithms. Combustion and Flame, 113:119–
    135, 1998.
23. T. Russi, A. Packard, R. Feeley, and M. Frenklach. Sensitivity analysis of uncertainty in model
    prediction. J. Phys. Chem. A., 112(12):2579–2588, 2008.
24. A. Saltelli, M. Ratto, S. Tarantola, and F. Campolongo. Sensitivity analysis for chemical
    models. Chemical Review C, American Chemical Society, Published on Web:A–P, 2004.
25. A. Saylam, M. Ribaucour, M. Carlier, and R. Minetti. Reduction of detailed kinetic
    mechanisms using analyses of rate and sensitivity of reactions: Application to iso-octane and
    n-heptane. Proceedings of the European Combustion Meeting 2005, pages 1–5, 2005.
26. N. Shenvi, J. M. Geremia, and H. Rabitz. Nonlinear kinetic parameter identification through
    map inversion. J. Phys. Chem. A, 106:12315–12323, 2002.
27. M. S. Skjoeth-Rasmussen, P. Glarborg, M. Oestberg, J. T. Johannessen, H. Livbjerg,
    A. D. Jensen, and T.S. Christensen. Detailed modeling of pah and soot formation in a laminar
    premixed benzene/oxygen/argon low-pressure flame. Combustion and Flame, 136:91–128,
    2004.
28. G.P. Smith et.al. www.me.berkeley.edu/gri-mech.
29. H.S. Soyhan, F. Mauss, and C. Sorusbay. Chemical kinetic modeling of combustion in
    internal combustion engines using reduced chemistry. Combustion Science and Technology,
    174(11,12):73–91, 2002.
30. Weiyong Tang, Libin Zhang, Andreas.A. Linninger, Robert S. Tranter, and Brezinsky. Solving
    kinetic inversion problems via a physically bounded gauss-mewton (pgn) method. Industrial
    and Engineering Chemistry Research, 44(10):3626–3637, 2005.
31. V. Vasudevan, D. F. Davidson, and R. K. Hanson. Shock tube measurements of toluene ignition
    times and oh concentrations time histories. Proceedings of the Combustion Institute, 30:1155–
    1163, 2005.
226                                                                       M. Fischer and U. Riedel


32. J. Warnatz, U. Maas, and R.W. Dibble. Combustion: Physical and Chemical Fundamentals,
    Modeling and Simulation, Experiments, Pollutant Formation. Springer-Editions, Berlin, third
    edition, 2001.
33. T. Zeuch. Reaktionskinetik von Verbrennungsprozessen in der Gasphase: Spektroskopische
    Untersuchungen der Geschwindigkeit, Reaktionsprodukte und Mechanismen von Elementar-
    reaktionen und die Modellierung der Oxidation von Kohlenwasserstoffen mit detaillierten
    Reaktionsmechanismen. PhD thesis, University of Goettingen, 2003.
34. I. GY. Zsely, J. Zador, and T. Turanyi. On the similarity of the sensitivity functions of methane
    combustion models. Combustion Theory and Modelling, 9(4):721–738, 2005.
Numerical Simulation of Catalytic Reactors
by Molecular-Based Models

Olaf Deutschmann and Steffen Tischer




Abstract Investigations in the field of high-temperature catalysis often reveal com-
plex interactions of heterogeneous, homogeneous, and radical chemistry coupled
with mass and heat transfer. The fundamental aspects as well as several applications
of high-temperature catalysis are covered in the light of these interactions. Benefits
of molecular-based numerical simulations are discussed. Furthermore, this chapter
looks at challenges associated with parameter estimation.


1 Background

Understanding and optimization of heterogeneously catalyzed reactive systems
require the knowledge of the physical and chemical processes on a molecular level.
In particular, at short contact times and high temperatures, at which reactions occur
on the catalyst and in the gas-phase, the interactions of transport and chemistry
become important.
   High-temperature catalysis is not a new concept; the Oswald process for the
NO production by oxidation of ammonia over noble metal gauzes at temperatures
above 1,000ıC and residence times of less than a micro second has been technically
applied for decades; total oxidation of hydrogen and methane (catalytic combustion)
over platinum catalysts were even used before Berzelius proposed the term “catal-
ysis.” Recently, however, high-temperature catalysis has been extensively discussed
again, in particular in the light of the synthesis of basic chemicals and hydrogen,
and high-temperature fuel cells.




O. Deutschmann  S. Tischer ()
Institute for Chemical Technology and Polymer Chemistry, Karlsruhe Institute of Technology,
Engesserstr. 20, 76128 Karlsruhe, Germany
e-mail: deutschmann@kit.edu; Steffen.Tischer@kit.edu

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions                      227
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 11,
© Springer-Verlag Berlin Heidelberg 2013
228                                                         O. Deutschmann and S. Tischer


    Catalytic partial oxidation (CPOX) of natural gas over noble metal catalysts
at short contact times offers a promising route for the production of synthesis
gas [1, 2], olefins [3, 4], and hydrogen. For instance, synthesis gas, also catalytically
produced by steam and autothermal reforming, is needed in (gas-to-liquids) plants
for synthetic fuels, which are currently under development. CPOX of gasoline,
diesel, or alcohols to synthesis gas or hydrogen may soon play a significant role in
mobile applications for reduction of pollutant emissions and auxiliary power units.
    For any fuel other than hydrogen, catalytic reactions are likely to occur in the
anode of a solid oxide fuel cell (SOFC) leading to a complex chemical composition
at the anode–electrolyte interface [5]. Primarily the products of the electrochemical
reactions, H2 O and CO2 , drive the catalytic chemistry in the anode. For the applica-
tion of hydrocarbon and alcohol containing fuels, the understanding of the catalytic
kinetics is vital for the precise prediction of fuel utilization and performance [6].
Coupling of the thermo catalytic reactions with the electrochemical processes and
mass and heat transport in the cell will exemplarily be discussed for an anode-
supported SOFC operated with methane containing fuels and a Ni/YSZ anode
structure.



2 Fundamentals

Catalytic reactors are generally characterized by the complex interaction of various
physical and chemical processes. Monolithic reactors can serve as example, in
which partial oxidation and reforming of hydrocarbons, combustion of natural gas,
and the reduction of pollutant emissions from automobiles are frequently carried
out. Figure 1 illustrates the physics and chemistry in a catalytic combustion monolith
that glows at a temperature of about 1,300 K due to the exothermic oxidation
reactions. In each channel of the monolith, the transport of momentum, energy,
and chemical species occurs not only in flow (axial) direction, but also in radial
direction. The reactants diffuse to the inner channel wall, which is coated with
the catalytic material, where the gaseous species adsorb and react on the surface.
The products and intermediates desorb and diffuse back into the bulk flow. Due to
the high temperatures, the chemical species may also react homogeneously in the
gas phase. In catalytic reactors, the catalyst material is often dispersed in porous
structures like washcoats or pellets. Mass transport in the fluid phase and chemical
reactions are then superimposed by diffusion of the species to the active catalytic
centers in the pores.
   The temperature distribution depends on the interaction of heat convection and
conduction in the fluid, heat release due to chemical reactions, heat transport in the
solid material, and thermal radiation. If the feed conditions vary in time and space
and/or heat transfer occurs between the reactor and the ambience, a non-uniform
temperature distribution over the entire monolith will result, and the behavior will
differ from channel to channel [7].
Numerical Simulation of Catalytic Reactors by Molecular-Based Models                      229




Fig. 1 Catalytic combustion monolith and physical and chemical process occurring in the single
monolith channel


   Today, the challenge in catalysis is not only the development of new catalysts
to synthesize a desired product, but also the understanding of the interaction of the
catalyst with the surrounding reactive flow field. Sometimes, the exploitation of
these interactions can lead to the desired product selectivity and yield. A detailed
introductions into fluid dynamics and transport phenomena can be found in [8–12],
and into the coupling with heterogeneous reactions in [12, 13].



2.1 Heterogeneous Reaction Mechanisms

The development of a reliable surface reaction mechanism is a complex process.
A tentative reaction mechanism can be proposed based on experimental surface
science studies, on analogy to gas-phase kinetics and organo-metallic compounds,
and on theoretical studies, increasingly including DFT calculations. This mecha-
nism should include all possible paths for the formation of the chemical species
under consideration in order to be “elementary-like” and thus applicable over
a wide range of conditions. The mechanism idea then needs to be evaluated
by numerous experimentally derived data, which are compared with theoretical
predictions based on the mechanism. Here, the simulations of the laboratory reactors
require appropriate models for all significant processes in order to evaluate the
intrinsic kinetics. Sensitivity analysis leads to the crucial steps in the mechanism,
for which refined kinetic experiments and data may be needed.
   Since the early 1990, many groups have developed surface reaction mechanisms
for high-temperature catalysis, following this concept, which has been adapted
from modeling homogeneous gas-phase reactions in particular in the fields of
230                                                                      O. Deutschmann and S. Tischer


combustion [10] and pyrolysis [14] of hydrocarbons. Consequently, this concept
becomes handy when high-temperature processes in catalysis are considered,
in particular the radical interactions between the solid phase (catalyst) and the
surrounding gas-phase (fluid flow).
   In this concept, the surface reaction rate is related to the size of the computational
cell in the flow field simulation assuming that the local state of the active surface
can be represented by mean values for this cell. Hence, this model assumes
randomly distributed adsorbates. The state of the catalytic surface is described by
the temperature T and a set of surface coverages i . The surface temperature and
the coverages depend on time and the macroscopic position in the reactor, but are
averaged over microscopic local fluctuations. Under those assumptions the molar
net production rate sPi of a chemical species on the catalyst is given as

                                                     Ng CNs CNb
                                   X
                                   Ks                   Y           0
                           sPi D         i k kf k                cj j k :                        (1)
                                   kD1                  j D1


   Here, Ks is the number of surface reactions, ci are the species concentrations,
which are given, e.g., in mol m2 for the Ns adsorbed species and in, e.g., mol m3
for the Ng and Nb gaseous and bulk species. According to the relation

                                     i D ci i  1 :                                            (2)


   where  is surface site density with a coordination number i describing the
number of surface sites which are covered by the adsorbed species, the variations of
surface coverages follow
                                         @i   sPi i
                                             D        :                                           (3)
                                          @t     
   Since the reactor temperature and concentrations of gaseous species depend on
the local position in the reactor, the set of surface coverages also varies with position.
However, no lateral interaction of the surface species between different locations on
the catalytic surface is modeled. This assumption is justified by the fact that the
computational cells in reactor simulations are usually much larger than the range of
lateral interactions of the surface processes.
   Since the binding states of adsorption of all species vary with the surface
coverage, the expression for the rate coefficient kf k is commonly extended by two
additional parameters, i k and "i k [12, 15]:

                                               Ns                     
                                          Ea k Y               "i k i
                kf k D Ak T ˇk exp                  i i k exp             :                      (4)
                                           RT i D1                RT
Numerical Simulation of Catalytic Reactors by Molecular-Based Models                231


    A crucial issue with many of the surface mechanisms published is thermody-
namic consistency [13]. Lately, optimization procedures enforcing overall thermo-
dynamic consistency have been applied to overcome this problem [16].
    In particular oxidation reactions, in which radical interactions play a very
significant role, have been modeled extensively using this approach such as
oxidation of hydrogen [17–23], CO [24–26], and methane [27–32] and ethane
[4, 33–35] over Pt, formation of synthesis gas over Rh [32, 36]. Lately, mechanisms
have been established for more complex reaction systems, for instance, three-way
catalysts [37] or Chemical Vapor Deposition (CVD) reactors for the formation
of diamond [38, 39], silica [40], and nanotubes [41]. In most of these reactions,
adsorption and desorption of radicals is included and these steps are significant not
only for the heterogeneous reaction but also for homogeneous conversion in the
surrounding fluid. In most cases, the catalyst acts as sink for radicals produced in the
gas-phase, and hence radical adsorption inhibits gas-phase reactions as exemplarily
discussed below for oxy-dehydrogenation of alkanes by high-temperature catalysis.



2.2 Homogeneous Reactions

In many catalytic reactors, the reactions do not exclusively occur on the catalyst
surface but also in the fluid flow. In some reactors even the desired products are
mainly produced in the gas phase, for instance in the oxidative dehydrogenation of
paraffins to olefins over noble metals at short contact times and high temperature as
discussed below [4,35,42–47]. Such cases are dominated by the interaction between
gas-phase and surface kinetics and transport. Therefore, any reactor simulation
needs to include an appropriate model for the homogeneous kinetics along with the
flow models. With i0k , i00k being the stoichiometric coefficients and an Arrhenius-
like rate expression, the chemical source term of homogeneous reactions can be
expressed by

                        X                                          Ng   
                                                               Eak Y Yj  aj k
                        Kg
          Rihom D Mi          .i00k  i0k /Ak T ˇk exp                        :   (5)
                                                                RT j D1 Mj
                        kD1


   Here, Ak is the pre-exponential factor, ˇk is the temperature exponent, Eak is
the activation energy, and aj k is the order of reaction k related to the concentration
of species j , which itself is expressed in terms of mass fractions Yj , density 
and molar mass Mj . Various reliable sets of elementary reactions are available
for modeling homogeneous gas phase reactions, for instance for total [10] and
partial oxidation, and pyrolysis of hydrocarbons. The advantage of the application
of elementary reactions is that the reaction orders aj k in (5) equal the stoichiometric
coefficients i0k .
232                                                         O. Deutschmann and S. Tischer


2.3 Coupling of Chemistry and Mass and Heat Transport

The chemical processes at the surface can be coupled with the surrounding flow
field by boundary conditions for the species-continuity equations at the gas–surface
interface [12, 15]:

                             n.ji C vStef Yi / D Rihet :                            (6)

   Here n is the outward-pointing unit vector normal to the surface, ji is the
diffusion mass flux of species i and Rihet is the heterogeneous surface reaction
rate, which is given per unit geometric surface area, corresponding to the reactor
geometry, in kg m2 s1 . The Stefan velocity vStef occurs at the surface if there is
a net mass flux between the surface and the gas phase [27, 48]. The calculation of
Rihet requires the knowledge of the amount of catalytically active surface area in
relation to the geometric surface area, here denoted by Fcat=geo , at the gas–surface
interface:

                               Rihet D Fcat=geo Mi sPi :                            (7)

    Here, sPi is the molar net production rate of gas phase species i , given in
mol m2 s1 ; the area now refers to the actual catalytically active surface area.
Fcat=geo can be determined experimentally, e.g. by chemisorption measurements.
The effect of internal mass transfer resistance for catalyst dispersed in a porous
media is included by the effectiveness factor  [11, 49]. For more detailed models
for transport in porous media it is referred to literature [50, 51].
    Modeling the flow field in laminar and turbulent flows is discussed in many
textbooks [8, 10] and review articles we refer to. Even though the implementation
of (5)–(7) in those fluid flow models is straight forward, an additional highly
nonlinear coupling is introduced into the governing equations describing the flow
field (leading to considerable computational efforts. The nonlinearity, the large
number of chemical species, and the fact that chemical reactions exhibit a large
range of time scales, in particular when radicals are involved, make the solution of
those equation systems challenging. In particular for turbulent flows, but sometimes
even for laminar flows, the solution of the system is too CPU time-consuming with
current numerical algorithms and computer capacities. This calls for the application
of reduction algorithms for large reaction mechanisms, for instance by the extraction
of the intrinsic low dimensional manifolds of trajectories in chemical space [52],
which can be applied for heterogeneous reactions [53]. Another approach is to use
“as little chemistry as necessary.” In these so-called adaptive chemistry methods,
the construction of the reaction mechanism includes only steps relevant for the
application studied [54].
Numerical Simulation of Catalytic Reactors by Molecular-Based Models            233




Fig. 2 Structure of the code DETCHEMMONOLITH [57]




2.4 Monolithic Catalysts

As an example of a modeling a high-temperature catalyst, catalytically coated
monolithic structures as given in Fig. 1 are discussed. An efficient approach,
which still includes all fundamental aspects, is often used for modeling catalytic
monoliths, which is based on the combination of simulations of a representative
number of channels with the simulation of the temperature profiles of the solid
structure treating the latter one as continuum [55, 56]. This approach is the basis
for the computer code DETCHEMMONOLITH [57], which has been applied to
model the transient behavior of catalytic monoliths. The code combines a transient
three-dimensional simulation of a catalytic monolith with a 2D model of the single-
channel flow field based on the boundary layer approximation. It uses detailed
models for homogeneous gas-phase chemistry, heterogeneous surface chemistry,
and contains a model for the description of pore diffusion in washcoats.
   The numerical procedure as sketched in Fig. 2 is based on the following ideas:
The residence time of the reactive gas in the monolith channels is much smaller
than the unsteadiness of the inlet conditions and the thermal response of the solid
monolith structure. Under these assumptions, the time scales of the channel flow are
decoupled from the temporal temperature variations of the solid, and the following
procedure can be applied: A transient multi-dimensional heat balance is solved for
the monolithic structure including the thermal insulation and reactor walls, which
are treated as porous continuum. This simulation of the heat balance provides the
temperature profiles along the channel walls. At each time step the reactive flow
234                                                        O. Deutschmann and S. Tischer


through a representative number of single channels is simulated including detailed
transport and chemistry models. These single-channel simulations also calculate the
heat flux from the fluid flow to the channel wall due to convective and conductive
heat transport in the gaseous flow and heat released by chemical reactions. Thus, at
each time step, the single-channel simulations provide the source terms for the heat
balance of the monolith structure while the simulation of the heat balance provides
the boundary condition (wall temperature) for the single-channel simulations. At
each time step, the inlet conditions may vary. This very efficient iterative procedure
enables a transient simulation of the entire monolith without sacrificing the details
of the transport and chemistry models, as long as the prerequisites for the time scales
remain valid. Furthermore, reactors with alternating channel properties such as flow
directions, catalyst materials, and loadings can be treated.




2.5 Experimental Evaluation of Models Describing Radical
    Interactions

The coupling of several complex models introduces a large number of parameters
into the simulations. Hence, agreement between predicted and experimentally
observed overall conversion and selectivity alone is not sufficient to evaluate
individual sub models. Time and locally resolved profiles provide a more stringent
test for model evaluation. Useful data arise from the experimental resolution of local
velocity profiles by laser Doppler anemometry/velocimetry (LDA, LDV) [58, 59]
and of spatial and temporal species profiles by in situ, non-invasive methods such
as Raman and laser induced fluorescence (LIF) spectroscopy. For instance, an
optically accessible catalytic channel reactor can be used to evaluate models for
heterogeneous and homogeneous chemistry as well as transport by the simultaneous
detection of stable species by Raman measurements and OH radicals by Planar
laser-induced fluorescence (PLIF) [60, 61].



2.6 Mathematical Optimization of Reactor Conditions
    and Catalyst Loading

In a chemical reactor, the initial and boundary conditions can be used to optimize the
performance of the reactor, i.e., maximize the conversion, the selectivity or the yield
of certain product species. In particular, at the inlet of the catalytic monolith, the
mass or molar fractions of the species, the initial velocity, or the initial temperature
can be controlled to optimize one product composition. Furthermore, it may be
possible to control the temperature profile Twall .z/ at the channel wall, and vary
the loading with catalyst along the channel, i.e., Fcat=geo .z/. Moreover, the length
Numerical Simulation of Catalytic Reactors by Molecular-Based Models              235


of the catalytic monolith zmax can be optimized. Recently, algorithms have been
established to not only optimize those control parameters but also to be applied
to achieve a better understanding of the interactions between heterogeneous and
homogeneous chemical reactions in catalytic reactors [62–64]. Radical interaction
may play a decisive role as shown in the example given below.




3 Applications

3.1 Synthesis Gas from Natural Gas by High-Temperature
    Catalysis

A class of tube-like reactors is the monolith or honeycomb structure, which consists
of numerous passageways with diameters reaching from a tenth of a millimeter to
few millimeters. The flow field in the thin channels of this reactor type is usually
laminar. The catalytic material is mostly dispersed in a washcoat on the inner
channel wall. Monolith channels are manufactured with various cross-sectional
shapes, e.g., circular, hexagonal, square or sinusoidal. In the next sections, the
configuration of catalytic monolithic reactors will be used to discuss the interaction
of gas-phase and surface chemistry in high-temperature catalysis.
   The high-temperature catalytic partial oxidation (CPO) of methane over Rh
based catalysts in short contact time (milliseconds) reactors has been intensively
studied, because it offers a promising route to convert natural gas into synthesis gas
(syngas, H2 and CO), which can subsequently be converted to higher alkanes or
methanol or be used in fuel cells [1, 65, 66]. The indirect route for syngas formation
has meanwhile been accepted; at the catalyst entrance total oxidation occurs to
form steam as long as oxygen is available at the surface, then methane is steam-
reformed to hydrogen. Basically no dry reforming occurs and the surface acts as
sink for radicals inhibiting significant gas-phase reactions at pressures below 10 bar
[67]. Also the transient behavior during light-off of the reaction has been revealed.
Exemplarily, Fig. 3 shows the time-resolved temperature and species profiles in
a single channel of a catalytic monolith for partial oxidation of methane for the
production of synthesis gas and the temperature distribution of the solid structure
during light-off [36].
   Since natural gas contains higher alkanes and other minor components besides
methane, conversion and selectivity can be influenced by those other components.
Consequently, conversion of methane in steam reforming of pure methane and in
steam reforming of natural gas (North Sea H) differ as shown in Fig. 4. Here,
fuel/steam mixtures, molar steam to carbon ratio of 2.5 and 4, diluted by 75%
Ar, 10,000 h1 space velocity, were fed into a furnace containing a Rh coated
honeycomb catalyst [68].
236                                                              O. Deutschmann and S. Tischer




Fig. 3 Simulation of light-off of a monolithic reactor coated with Rh for partial oxidation
of methane to synthesis gas [36]. Temperature of the solid structure (top) and gas-phase
temperature and species mole fractions in a single channel in the center of the monolith (below),
red = maximum, blue = minimum



3.2 Olefin Production by High-Temperature Oxidative
    Dehydrogenation of Alkanes

While gas-phase reactions are not significant in CPOX of methane at atmospheric
pressure, CPOX of ethane to ethylene over platinum coated catalysts at short contact
times [69, 70] is characterized by complex interactions of homogeneous gas-phase
and heterogeneous surface reactions [4,44,71]. The principal picture of the reaction
process is shown in Fig. 5. At the catalyst entrance oxygen is completely consumed
at the surface within 1 mm primarily producing CO2 and H2 O. This total combustion
of ethane leads to a rapid temperature increase from RT to 1,000ıC. The high
temperature drives the pyrolysis of ethane in the gas-phase. After a decade of
discussions on the reaction pathways, most studies today conclude that most of the
ethylene (desired product) is actually homogeneously produced in the gas-phase.
Further downstream, additionally, reforming and shift reactions occur.
Numerical Simulation of Catalytic Reactors by Molecular-Based Models                           237


                              2.5
                                           methane S/C 2.2
                                           methane S/C 4
                               2           propane S/C 2.5
                                           propane S/C 4
             hydrogen yield

                                           natural gas S/C 4
                              1.5


                               1


                              0.5


                               0
                               200   300        400      500        600       700
                                                 temperature [°C]

Fig. 4 Comparison of experimentally determined hydrogen yields in steam-reforming of methane
with S/C 2.5 (open diamond) and S/C 4 (filled diamond), steam reforming of natural gas with S/C 4
(open circle), steam reforming of propane with S/C 2.5 (open triangle) and S/C 4 (filled triangle);
Rh catalyst, taken from [68]




Fig. 5 General picture of oxy-dehydrogenation of ethane over Pt at millisecond contact times
and temperatures of 900ı C; inlet ethane/oxygen ratio 2. The upper and lower panel show
gas-phase and surface processes, respectively, adapted from Zerkle et al. [4]


   Based on the molecular understanding of interaction of gas-phase and surface
chemistry in oxy-dehydrogenation of ethane over Pt [4], Minh et al. [62] used a
recently developed optimization code to find the optimal Pt catalyst loading on
along the flow direction in a Pt/Al2 O3 coated honeycomb catalyst. The gas-phase
mechanism used consists of 25 reactive species (mainly C1 and C2 species) involved
in 131 reversible reactions and one irreversible reaction, and the surface reaction
mechanism consists of another 82 elementary-step like reactions involving another
19 surface species [4]. This mechanism was later also used to study on-line catalyst
addition effects [71]. The Pt coated monolith had a diameter of 18 mm and a
length of 10 mm. Each channel has a diameter of 0.5 mm. The monolith is fed with
ethane/oxygen/nitrogen mixture of varying C/O ratio at 5 standard liters per minute
leading to a residence time of few milliseconds.
238                                                         O. Deutschmann and S. Tischer


3.2.1 Formulation of an Optimal Control Problem

The initial and boundary conditions can be used to optimize the performance of
the reactor, i.e., maximize the conversion, the selectivity or the yield of certain
product species. In particular, at the inlet of the catalytic monolith, the mass or
molar fractions of the species, the initial velocity, or the initial temperature can be
controlled to optimize one product composition. Furthermore, it may be possible to
control the temperature profile Twall .z/ along the channel wall, and vary the loading
with catalyst along the channel, i.e., Fcat=geo .z/. Moreover, the length of the catalytic
monolith zmax can be optimized. Here, the objective function to be maximized is the
mass fraction of ethylene at the outlet of the channel. The control considered here
is the catalyst loading, expressed, which is a function of the axial coordinate z. For
practical reasons, there are often equality and inequality constraints on the control
and state variables, such as an upper and lower bounds for the catalyst loading and
the (trivial) fact that the sum of all mass fractions must be one.
    In the case considered, the inlet gas temperature is Tgas D 600 K, and the
wall temperature Twall .z/ is kept fixed at 1,000 K. As constraint the Fcat=geo .z/
is required to be between 0, i.e., no catalyst, and 100, i.e., highly loaded. The
optimization was started with a constant Fcat=geo .z/ profile of 20.0 leading to an
objective value of 0.06. In the optimal solution the objective value is 0.19. Figure 6
shows the standard and optimal profiles of Fcat=geo .z/ and average mass fraction
profiles of ethylene. Figure 7 reveals the mass fraction profiles of ethane and
ethylene with the optimal profile of Fcat=geo .z/. Platinum is a very efficient catalyst
for the oxidation of ethane. In the first two mm of the catalyst, oxygen is almost
completely consumed by surface reactions (catalytic oxidation of ethane) leading
to the total oxidation products CO2 and H2 O, ethylene, and some CO. Ethylene
however is substantially produced in the gas-phase as well. However, the conversion
in the gas-phase only occurs if a sufficiently large radical pool is build up, which
takes a certain time/distance (so-called ignition delay time). Furthermore, some of
the ethylene formed by surface reactions adsorb on the surface as well, where in
the region around 2 mm mainly reforming reactions occur but the total reaction
rate is much smaller than in the first mm of the catalyst where oxygen was still
available. Since the production of ethylene by gas-phase reactions really takes-off
further downstream (most of the ethylene is produced in the gas-phase) due to the
radicals available there and due to the fact that the surface is relatively inactive
in the region around 2 mm, a plateau appears in that region around 2 mm (Fig. 6)
due to the competition between ethylene production in the gas-phase and (partial)
oxidation on the surface, both at relatively low rates. The optimization of the catalyst
loading proposes a very low loading in this region, because here the catalyst does
not only oxidize ethylene but also adsorbs radicals from the gas-phase, which are
needed to initiate ethylene formation in the gas-phase. The optimization proposes
relatively low catalyst loading in the very active initial catalyst section, which
can be understood as follows: Within the first mm of the catalyst, where oxygen
is available, the process is limited by mass-transfer of ethane and even more of
oxygen to the surface. Here, primarily, oxidation of ethane occurs at a very high
Numerical Simulation of Catalytic Reactors by Molecular-Based Models                                                                     239


                          4                                                                                0.2
                                                                                  C2H4 (optimal)




                                                                                                                    C2H4 mass fraction
                          3
    Fcat /geo (control)

                                                                                                           0.15
                                                                                 Fcat/geo (optimal)

                          2                                                                                0.1

                                                                                   C2H4 (initial)
                          1                                                                                0.05


                          0                                                                                 0
                                0                  2         4            6               8               10
                                                           axial position [mm]

Fig. 6 Catalyst loading expressed by Fcat=geo .z/ and the radial averaged mass fraction of ethylene
at the initial and at optimal solutions in oxy-dehydrogenation of ethane over Pt coated honeycomb
monoliths, taken from Minh et al. [62]



                                    0.4

                                               C2H6
                                    0.3                                                                         C
                    mass fraction




                                    0.2       O2


                                    0.1
                                                                  CO          H2
                                     0
                                          0            2             4                6               8
                                                                  axial position [mm]

Fig. 7 Average mass fractions of major species at the optimal solution in optimization of catalyst
loading in oxy-dehydrogenation of ethane over Pt coated honeycomb monoliths, taken from Minh
et al. [62]


rate, the catalyst is very active. Consequently, catalyst is needed here but not at a
high loading; this effect has also been observed in several experiments.
    The hydrocarbon/oxygen (C/O) ratio can easily be used to tune the product
selectivity in CPOX of alkanes. The group of L.D. Schmidt has studied a variety of
fuels and basically found the same trend as shown in Fig. 8 for CPOX of n-decane
at millisecond contact times over Rh catalysts [46]. At low C/O ratio, synthesis gas
is the primary product; actually its maximum is reached close to the point where
the reaction switches to total combustion, a flame is often formed in that transition
region. With increasing C/O ratio, more and more olefins are formed, primarily
240                                                              O. Deutschmann and S. Tischer


                                           H2
                              80




                              60
            Selectivity [%]




                              40
                                                     CO


                                                                     Olefins
                              20         H2O

                                                       CO2

                               0
                                   0.7          1     1.3      1.6        1.9
                                                    C/O Feed

Fig. 8 Effect of the n-decane/oxygen feed ratio on the product selectivity in CPOX of n-decane
at millisecond contact times over Rh catalysts [46]




˛-olefins, but at higher C/O ratio a larger variety of other olefins as well, and
eventually acetylene, benzene, and PAH are formed at very low oxygen content.
Coking of the catalyst and formation of soot in the gas-phase quickly becomes a
technical problem. Those studies over noble metal based catalysts and at millisecond
contact times were recently extended to CPOX of biodiesel [72]. Also, autothermal
reforming of ethanol was realized at short contact times and high temperatures in a
two-stage reactor [73, 74]. A Rh—ceria catalyst on alumina foams/spheres served
as first stage for reforming with some oxygen addition. The second reactor stage
consists of Pt—ceria on alumina spheres to accelerate the water–gas shift reaction
for maximizing the hydrogen yield.



3.3 Hydrogen Production from Logistic Fuels
    by High-Temperature Catalysis

The production of hydrogen and synthesis gas (syngas, H2 and CO) from logistic
fuels such as gasoline, diesel, and kerosene by catalytic partial oxidation (CPOX)
and steam reforming (SR) is currently in the focus of both academic and industrial
research. In contrast to the complex and costly supply of compressed and stored
hydrogen for mobile fuel cell application, CPOX of liquid fuels allows production
Numerical Simulation of Catalytic Reactors by Molecular-Based Models                         241


                                 1
                                                      i-C8H18
                                                  1.93 % @ C/O=2                   CH4

            Concentration [%]   0.8



                                0.6
                                                                            i-Butylene


                                0.4
                                                                            Propylene


                                0.2
                                                                         Acetaldehyde


                                                                         C2H6     C2H4
                                 0
                                      0.8   1   1.2       1.4      1.6      1.8          2
                                                         C/O

Fig. 9 Experimentally determined concentrations of the side products and the fuel remaining in
the outlet stream of CPOX of i-octane over a Rh/alumina coated monolith as a function of C/O
ratio, taken from [75]




and utilization of hydrogen through existing routes, which, in particular, is of inter-
est for on-board applications. At operating temperatures around 1,000 K and higher,
conversion of the fuel may not only occur on the solid catalyst but also in the gas-
phase. Heterogeneous and homogeneous reactions in CPOX of hydrocarbons are
coupled not only by adsorption and desorption of fuel and oxygen molecules and the
products, respectively, but also by adsorption and desorption of intermediates and
radicals. Therefore, mass transport of radicals and intermediates from/to the gaseous
bulk phase and the catalytically active channel wall, mainly by radial diffusion in the
small channels of the monolith being on the order of a quarter to one millimeter, is
crucial for the interaction of heterogeneous and homogeneous reactions in CPOX
reactors. Hartmann et al., for instance, studied the catalytic partial oxidation of
iso-octane over rhodium/alumina coated honeycomb monolith serving as gasoline
surrogate [75]. Very high hydrogen and carbon monoxide selectivity were found at
stoichiometric conditions (C/O = 1), while at lean conditions more total oxidation
occurs. At rich conditions (C/O > 1), homogeneous chemical conversion in the gas-
phase is responsible for the formation of by-products such as olefins shown in Fig. 9
that also have the potential for coke formation, which was observed experimentally
and numerically. This study also revealed that the chemical models applied—even
though the most detailed ones available (857 gas-phase and 17 adsorbed species in
over 7,000 elementary reactions) were used—need further improvement.
242                                                             O. Deutschmann and S. Tischer




Fig. 10 Numerically predicted profiles of molar fractions of reactants and major products in
the entrance region of the catalyst at C/O = 1.2 in CPOX of iso-octane over a Rh/alumina coated
monolith, taken from Hartmann et al. [75]. Flow direction is from left to right




Fig. 11 Numerically predicted profiles of molar fractions of minor products and radicals along
the entire catalyst at C/O = 1.2 in CPOX of iso-octane over a Rh/alumina coated monolith, taken
from Hartmann et al. [75]. Flow direction is from left to right


   Nevertheless, this combined modeling and experimental study revealed the role
of surface, gas-phase, and radical chemistry in high-temperature oxidative catalytic
conversion of larger hydrocarbons. From Fig. 10, it can clearly be concluded that the
major products (syngas) are produced in the entrance region of the catalyst on the
catalytic surface; radial concentration profiles are caused by a mass-transfer limited
process. As soon as the oxygen is consumed on the catalytic surface—similar to
CPOX of natural gas—hydrogen formation increases due to steam reforming, the
major products are formed within few millimeters. At rich conditions (C/O > 1.0)
a second process, now in the gas-phase, begins in the downstream part as shown
in Fig. 11. The number of radicals in the gas-phase is sufficiently large to initiate
gas-phase pyrolysis of the remaining fuel and formation of coke-precursors such as
ethylene and propylene. In the experiment, the downstream part of the catalyst is
coked-up, here the Rh surface cannot act as sink for radical.
Numerical Simulation of Catalytic Reactors by Molecular-Based Models                   243




Fig. 12 Survey of the methodology of the development of a surface reaction mechanism




4 Model Parameters

One of the major questions for detailed reaction mechanisms is the source and
the reliability of the kinetic parameters. Typically for molecular based models
there are several 10s–100s of gas-phase and surface species involved. The number
of reactions among them is even one order of magnitude higher. Thus it is
virtually impossible to determine the kinetic parameters of each elementary step
by direct experimental observation. The development of a reliable surface reaction
mechanism follows an iterative scheme given Fig. 12.
   A tentative reaction mechanism can be proposed based on experimental surface
science studies, on analogy to gas-phase kinetics and organo-metallic compounds,
and on theoretical studies, such as first principle calculations using density func-
tional theory [76, 77]. This mechanism should include all possible paths for the
formation of the chemical species under consideration in order to be elementary-like
and thus be applicable over a wide range of conditions. The mechanism idea then
needs to be evaluated by numerous experimentally derived data, which are compared
with theoretical predictions based on the mechanism. Here, numerical simulations
of the laboratory reactors require appropriate models for all significant processes
in order to evaluate the intrinsic kinetics. Sensitivity analysis leads to information
about crucial steps in the mechanism, for which refined kinetic experiment and
data may be necessary. At the end of the iteration, an elementary-step reaction
mechanism must be applicable to simulations of different kinds of experimental
set-ups.
244                                                          O. Deutschmann and S. Tischer


   All experimental measurements and first principle calculations result in kinetic
parameters with a comparatively small but significant error. Therefore, parameter
fine tuning will nonetheless be necessary in order to improve agreement between
experimental results and numerical simulation. The best way to do so is to solve
the optimal control problem with respect to the kinetic parameters, with the same
methods as described in Sect. 3.2 for reactor parameters. However, due to the large
variety of different reactor set-ups, computer program development for each type
of problem is very time consuming as long as there is no easy-to-use toolbox to
formulate optimal control problems in computational fluid dynamics. Thus, the
authors have chosen an approach where the numerical simulation is treated as a
black-box process.
   The kinetic parameters form a high-dimensional vector x in parameter space.
Each component of this vector may be varied only within a limited range. The
simulations of one or more reactor set-ups map vector x onto a result vector y sim . We
only assume continuity of this mapping. The experimental results shall be denoted
by y exp . Thus the objective function subject to be minimized can be written as

                                      X  y sim  y exp 2
                            F .x/ D          i        i
                                                                                      (8)
                                       i
                                                 di

where di denote user-defined values for normalization of the different results yi ,
e.g. reference values or tolerances.
    The steps taken into account during parameter fine-tuning are illustrated in
Fig. 13. The first generation of parameters is generated randomly from the whole
given parameter space (Fig. 13a). The point with lowest value of the objective
function F will be memorized. With increasing number of generations, the search
becomes more and more a random walk by searching preferably the vicinity of the
optimal solution. The deviation of each parameter from the best solution follows a
normal distribution with cut-off limits, where the variance decreases with increasing
number of generations (Fig. 13b). Finally, the optimization procedure searches for
improvements along the numerically computed gradient of F (Fig. 13c).
    An example of achievements by this parameter fine-tuning is shown in Fig. 14.
Here, an elementary-step like reaction mechanism over platinum, that describes the
removal of pollutants from gasoline engines by three-way catalysis, was applied
to test-bench experiments with exhaust gas recycling. The original mechanism was
proposed by Chatterjee et al. [37]. The reaction mechanism consists of 30 reversible
and one irreversible surface reactions. Fifty-two kinetic parameters were varied for
fine-tuning. The remaining kinetic parameters have to be adjusted accordingly in
order to ensure thermodynamic consistency of the resulting mechanism. A total of
153 target data points (3 gas mixtures at 17 temperatures, 3 components analyzed)
have been selected for comparison of experiment and simulation. Thus, 51 different
experiments had to be simulated numerically in each iteration step. After more
than 10,000 iterations, agreement between experiment and simulation was improved
significantly (Fig. 14).
Numerical Simulation of Catalytic Reactors by Molecular-Based Models                                                                                                                                                 245


                                       X                     X                                                                                    X

                             X                 X                          X


                                                             X
                   X
                                                                                                                                 X
                                               X                           X                                                                          X

                                   X                X            X                                                       X                    X           X
                                                                              X                                                           X
                             X                                                                                                           X        X           X                                             XX
                                           X                         X                                                       X                X       X                                                       XX
                                                                                                                                                                                                                XX
x2                                                                                       x2                                                                                      x2
                                                                                                                                         X        X
                                                                              X                                X
                                       X                 X                                                                                    X           X
                                                                                                                                     X



                         x1                                                                                   x1                                                                             x1


Fig. 13 Two-dimensional illustration of the parameter fine-tuning procedure to look for minimum
of objective function; from left to right: (a) random seeds, (b) search preferably in the vicinity of
best solution, (c) gradient search


                 100                                                                                 100                                                                             100
                                 lean mix.
Conversion [%]




                                                                                                                                                                    Conversion [%]
                                                                                    Conversion [%]




                 80                                                                                   80                                                                              80
                                 stoic. mix.
                 60                                                                                   60                                                                              60
                                 rich mix.
                 40                                                                                   40                                                                              40

                 20                                                                                   20                                                                              20

                   0                                                                                   0                                                                              0
                       100         200             300                   400      500                   100        200   300                  400                 500                  100    200   300    400       500
                                   Temperature [°C]                                                                Temperature[°C]                                                            Temperature[°C]
                                                   CO                                                              Hydrocarbons                                                                     NOx

Fig. 14 Comparison of test-bench experiments using a three-way catalyst with exhaust gas
recycling (symbols) with simulation results using original [37] (dashed lines) and improved
mechanism (solid lines)




    The random-walk approach seems to be feasible only for relatively small
systems. The number iterations required to explore significant parts of the parameter
space increases with number of parameters. Of course, one could limit the search
to those parameters that exceed a given threshold in sensitivity analysis. Therefore,
even in a 52-dimensional parameter space, a sufficient number of parameter varia-
tions in the most sensitive 3 or 4 parameters should occur during a few thousands
of iterations. The crucial aspect of this kind of simulations is the computational
time needed for a simulation of a single experiment. Molecular-based models in
computational fluid dynamics usually result in time consuming simulations. Thus
it would be desirable to have algorithms to solve the simulation problem and
the optimal control problem at the same time without drastically increasing the
simulation time. The aim of detailed reaction mechanisms is to describe a large
variety of reactors with a large variety of operating conditions. Thus, the open
question remains how a numerical tool box should look like that allows solving
the optimal control problem to find the kinetic parameters given a large variety of
experimental data (Fig. 15).
246                                                               O. Deutschmann and S. Tischer




Fig. 15 A desired scheme for estimation of large sets of chemical parameters applicable to many
experiments.


Acknowledgements The authors would like to thank J. Warnatz in memoriam (University of
Heidelberg), L.D. Schmidt (University of Minnesota), and R.J. Kee (Colorado School of Mines)
for fruitful collaborations and stimulating discussions.




References

 1. D. A. Hickman and Lanny D. Schmidt. Synthesis gas formation by direct oxidation of methane
    over monoliths. Journal of Catalysis, 138(1):267–282, 1992.
 2. O. Deutschmann and L. D. Schmidt. Modeling the partial oxidation of methane in a short-
    contact-time reactor. American Institute of Chemical Engineering Journal, 44(11):2465–2477,
    1998.
 3. Marylin C. Huff and Lanny D. Schmidt. Production of olefins by oxidative dehydrogenation of
    propane and butane over monoliths at short contact times. Journal of Catalysis, 149:127–141,
    1993.
 4. D. K. Zerkle, M. D. Allendorf, M. Wolf, and O. Deutschmann. Understanding homogeneous
    and heterogeneous contributions to the platinum-catalyzed partial oxidation of ethane in a
    short-contact-time reactor. Journal of Catalysis, 196(1):18–39, 2000.
 5. H. Y. Zhu, R. J. Kee, V. M. Janardhanan, O. Deutschmann, and D. G. Goodwin. Modeling
    elementary heterogeneous chemistry and electrochemistry in solid-oxide fuel cells. Journal of
    the Electrochemical Society, 152(12):A2427–A2440, 2005.
 6. E. S. Hecht, G. K. Gupta, H. Y. Zhu, A. M. Dean, R. J. Kee, L. Maier, and O. Deutschmann.
    Methane reforming kinetics within a Ni-YSZ SOFC anode support. Applied Catalysis
    a-General, 295(1):40–51, 2005.
 7. J. Windmann, J. Braun, P. Zacke, S. Tischer, O. Deutschmann, and J. Warnatz. Impact of the
    inlet flow distribution on the light-off behavior of a 3-way catalytic converter. SAE Technical
    Paper, 2003-01-0937, 2003.
Numerical Simulation of Catalytic Reactors by Molecular-Based Models                          247


 8. R. B. Bird, W. E. Stewart, and E. N. Lightfoot. Transport Phenomena. John Wiley & Sons,
    Inc., New York, 2nd edition, 2001.
 9. S.V. Patankar. Numerical Heat Transfer and Fluid Flow. McGraw-Hill, New York, 1980.
10. Jürgen Warnatz, R. W. Dibble, and Ulrich Maas. Combustion, Physical and Chemical
    Fundamentals, Modeling and Simulation, Experiments, Pollutant Formation. Springer-Verlag,
    New York, 1996.
11. R. E. Hayes and Stan T. Kolaczkowski. Introduction to Catalytic Combustion. Gordon and
    Breach Science Publ., Amsterdam, 1997.
12. R.J. Kee, M.E. Coltrin, and P. Glarborg. Chemically Reacting Flow. Wiley-Interscience, 2003.
13. O. Deutschmann. Computational fluid dynamics simulation of catalytic reactors: Chapter 6.6.
    In G. Ertl, H. Knözinger, F. Schüth, and J. Weitkamp, editors, Handbook of Heterogeneous
    Catalysis, 2nd Ed. Wiley-VCH, 2007.
14. Eliseo Ranzi, A. Sogaro, P. Gaffuri, G. Pennati, C. K. Westbrook, and W. J. Pitz. A new
    comprehensive reaction mechanism for combustion of hydrocarbon fuels. Combustion and
    Flame, 99:201–211, 1994.
15. Michael E. Coltrin, Robert J. Kee, and F. M. Rupley. SURFACE CHEMKIN (Version 4.0):
    A Fortran Package for Analyzing Heterogeneous Chemical Kinetics at a Solid-Surface - Gas-
    Phase Interface, SAND91-8003B. Sandia National Laboratories, 1991.
16. A. B. Mhadeshwar, H. Wang, and D. G. Vlachos. Thermodynamic consistency in microki-
    netic development of surface reaction mechanisms. Journal of Physical Chemistry B,
    107(46):12721–12733, 2003.
17. W. R. Williams, C. M. Marks, and L. D. Schmidt. Steps in the reaction H2 + O2 • H2 O on
    Pt - OH desorption at high-temperatures. Journal of Physical Chemistry, 96(14):5922–5931,
    1992.
18. B. Hellsing, B. Kasemo, and V. P. Zhdanov. Kinetics of the hydrogen-oxygen reaction on
    platinum. Journal of Catalysis, 132:210–228, 1991.
19. Jürgen Warnatz. Resolution of gas phase and surface combustion chemistry into elementary
    reactions (invited lecture). Proceedings of the Combustion Institute, 24:553–579, 1992.
20. M. Rinnemo, O. Deutschmann, F. Behrendt, and B. Kasemo. Experimental and numerical
    investigation of the catalytic ignition of mixtures of hydrogen and oxygen on platinum.
    Combustion and Flame, 111(4):312–326, 1997.
21. Götz Veser. Experimental and theoretical investigation of h2 oxidation in a high-temperature
    catalytic microreactor. Chemical Engineering Science, 56:1265–1273, 2001.
22. P.-A. Bui, D. G. Vlachos, and P. R. Westmoreland. Modeling ignition of catalytic reactors with
    detailed surface kinetics and transport: Oxidation of h2/air mixtures over platinum surfaces.
    Industrial & Engineering Chemistry Research, 36(7):2558–2567, 1997.
23. Johan C. G. Andrae and Pehr H. Björnbom. Wall effects of laminar hydrogen flames over
    platinum and inert surfaces. American Institute of Chemical Engineering Journal, 46(7):1454–
    1460, 2000.
24. J. Mai, W. von Niessen, and A. Blumen. The CO+O2 reaction on metal surfaces. simulation
    and mean-field theory: The influence of diffusion. Journal of Chemical Physics, 93:3685–3692,
    1990.
25. V. P. Zhdanov and B. Kasemo. Steady-state kinetics of co oxidation on pt: extrapolation from
    10-10 to 1 bar. Applied Surface Science, 74(2):147–164, 1994.
26. P. Aghalayam, Y. K. Park, and D. G. Vlachos. A detailed surface reaction mechanism for CO
    oxidation on Pt. Proceedings of the Combustion Institute, 28:1331–1339, 2000.
27. Olaf Deutschmann, R. Schmidt, Frank Behrendt, and Jürgen Warnatz. Numerical modeling of
    catalytic ignition. Proceedings of the Combustion Institute, 26:1747–1754, 1996.
28. G. Veser, J. Frauhammer, Lanny D. Schmidt, and G. Eigenberger. Catalytic ignition during
    methane oxidation on platinum: Experiments and modeling. In Studies in Surface Science and
    Catalysis 109, pages 273–284. 1997.
29. P.-A. Bui, D. G. Vlachos, and P. R. Westmoreland. Catalytic ignition of methane/oxygen
    mixtures over platinum surfaces: comparison of detailed simulations and experiments. Surface
    Science, 386(2–3):L1029–L1034, 1997.
248                                                               O. Deutschmann and S. Tischer


30. U. Dogwiler, P. Benz, and J. Mantzaras. Two-dimensional modelling for catalytically stabilized
    combustion of a lean methane-air mixture with elementary homogeneous and heterogeneous
    chemical reactions. Combustion and Flame, 116(1):243, 1999.
31. Preeti Aghalayam, Young K. Park, N. Fernandes, V. Papavassiliou, A. B. Mhadeshwar, and
    Dionisios G. Vlachos. A C1 mechanism for methane oxidation on platinum. Journal of
    Catalysis, 213(1):23–38, 2003.
32. D. A. Hickman and Lanny D. Schmidt. Steps in CH4 oxidation on Pt and Rh surfaces:
    High-temperature reactor simulations. American Institute of Chemical Engineering Journal,
    39:1164–1176, 1993.
33. M. Huff and L. D. Schmidt. Ethylene formation by oxidative dehydrogenation of ethane over
    monoliths at very short-contact times. Journal of Physical Chemistry, 97(45):11815–11822,
    1993.
34. Marylin C. Huff, I. P. Androulakis, J. H. Sinfelt, and S. C. Reyes. The contribution of gas-
    phase reactions in the Pt-catalyzed conversion of ethane-oxygen mixtures. Journal of Catalysis,
    191:46–45, 2000.
35. F. Donsi, K. A. Williams, and L. D. Schmidt. A multistep surface mechanism for ethane
    oxidative dehydrogenation on Pt- and Pt/Sn-coated monoliths. Industrial & Engineering
    Chemistry Research, 44(10):3453–3470, 2005.
36. R. Schwiedernoch, S. Tischer, C. Correa, and O. Deutschmann. Experimental and numerical
    study on the transient behavior of partial oxidation of methane in a catalytic, monolith.
    Chemical Engineering Science, 58(3–6):633–642, 2003.
37. D. Chatterjee, O. Deutschmann, and J. Warnatz. Detailed surface reaction mechanism in a
    three-way catalyst. Faraday Discussions, 119:371–384, 2001.
38. B. Ruf, F. Behrendt, O. Deutschmann, and J. Warnatz. Simulation of homoepitaxial growth on
    the diamond (100) surface using detailed reaction mechanisms. Surface Science, 352:602–606,
    1996.
39. S. J. Harris and D. G. Goodwin. Growth on the reconstructed diamond (100) surface. Journal
    of Physical Chemistry, 97(1):23–28, 1993.
40. S. Romet, M. F. Couturier, and T. K. Whidden. Modeling of silicon dioxide chemical
    vapor deposition from tetraethoxysilane and ozone. Journal of the Electrochemical Society,
    148(2):G82–G90, 2001.
41. C. D. Scott, A. Povitsky, C. Dateo, T. Gokcen, P. A. Willis, and R. E. Smalley. Iron
    catalyst chemistry in modeling a high-pressure carbon monoxide nanotube reactor. Journal
    of Nanoscience and Nanotechnology, 3(1–2):63–73, 2003.
42. Alessandra Beretta, Pio Forzatti, and Eliseo Ranzi. Production of olefins via oxidative
    dehydrogenation of propane in autothermal conditions. Journal of Catalysis, 184(2):469–478,
    1999.
43. A. Beretta and P. Forzatti. High-temperature and short-contact-time oxidative dehydrogenation
    of ethane in the presence of Pt/Al2 O3 and BaMnAl11 O19 catalysts. Journal of Catalysis,
    200(1):45–58, 2001.
44. A. Beretta, E. Ranzi, and P. Forzatti. Oxidative dehydrogenation of light paraffins in novel
    short contact time reactors. experimental and theoretical investigation. Chemical Engineering
    Science, 56(3):779–787, 2001.
45. R. Subramanian and L. D. Schmidt. Renewable olefins from biodiesel by autothermal
    reforming. Angewandte Chemie-International Edition, 44(2):302–305, 2005.
46. J. J. Krummenacher and L. D. Schmidt. High yields of olefins and hydrogen from decane in
    short contact time reactors: rhodium versus platinum. Journal of Catalysis, 222(2):429–438,
    2004.
47. Lanny D. Schmidt, J. Siddall, and M. Bearden. New ways to make old chemicals. American
    Institute of Chemical Engineering Journal, 46:1492–1495, 2000.
48. L. L. Raja, Robert J. Kee, and L. R. Petzold. Simulation of the transient, compressible, gas-
    dynamic, behavior of catalytic-combustion ignition in stagnation flows. Proceedings of the
    Combustion Institute, 27:2249–2257, 1998.
Numerical Simulation of Catalytic Reactors by Molecular-Based Models                           249


49. D. Papadias, L. Edsberg, and Pehr H. Björnbom. Simplified method of effectiveness factor
    calculations for irregular geometries of washcoats. a general case in a 3d concentration field.
    Catalysis Today, 60(1–2):11–20, 2000.
50. F. Keil. Diffusion und Chemische Reaktionen in der Gas-Feststoff-Katalyse. Springer-Verlag,
    Berlin, 1999.
51. F. J. Keil. Diffusion and reaction in porous networks. Catalysis Today, 53:245–258, 2000.
52. Ulrich Maas and S. Pope. Simplifying chemical kinetics: Intrinsic low-dimensional manifolds
    in composition space. Combustion and Flame, 88:239–264, 1992.
53. X. Yan and U. Maas. Intrinsic low-dimensional manifolds of heterogeneous combustion
    processes. Proceedings of the Combustion Institute, 28:1615–1621, 2000.
54. R. G. Susnow, A. M. Dean, W. H. Green, P. Peczak, and L. Broadbelt. Rate - based construction
    of kinetic models for complex systems. Journal of Physical Chemistry A, 101:3731–3740,
    1997.
55. S. Tischer, C. Correa, and O. Deutschmann. Transient three-dimensional simulations of a
    catalytic combustion monolith using detailed models for heterogeneous and homogeneous
    reactions and transport phenomena. Catalysis Today, 69(1–4):57–62, 2001.
56. S. Tischer and O. Deutschmann. Recent advances in numerical modeling of catalytic monolith
    reactors. Catalysis Today, 105(3–4):407–413, 2005.
57. O. Deutschmann, S. Tischer, S. Kleditzsch, V.M. Janardhanan, C. Correa, D. Chatterjee,
    N. Mladenov, and H. D. Minh. DETCHEM software package. www.detchem.com, Karlsruhe,
    2.2 edition, 2009.
58. C. Appel, J. Mantzaras, R. Schaeren, R. Bombach, and A. Inauen. Turbulent catalytically
    stabilized combustion of hydrogen/air mixtures in entry channel flows. Combustion and Flame,
    140(1-2):70–92, 2005.
59. H. P. A. Calis, J. Nijenhuis, B. C. Paikert, F. M. Dautzenberg, and C. M. van den Bleek. CFD
    modelling and experimental validation of pressure drop and flow profile in a novel structured
    catalytic reactor packing. Chemical Engineering Science, 56(4):1713–1720, 2001.
60. C. Appel, J. Mantzaras, R. Schaeren, R. Bombach, B. Kaeppeli, and A. Inauen. An
    experimental and numerical investigation of turbulent catalytically stabilized channel flow
    combustion of hydrogen/air mixtures over platinum. Proceedings of the Combustion Institute,
    29:1031–1038, 2002.
61. C. Appel, J. Mantzaras, R. Schaeren, R. Bombach, A. Inauen, B. Kaeppeli, B. Hemmerling,
    and A. Stampanoni. An experimental and numerical investigation of homogeneous ignition in
    catalytically stabilized combustion of hydrogen/air mixtures over platinum. Combustion and
    Flame, 128(4):340–368, 2002.
62. H. D. Minh, H. G. Bock, S. Tischer, and O. Deutschmann. Optimization of two-dimensional
    flows with homogeneous and heterogeneously catalyzed gas-phase reactions. Aiche Journal,
    54(9):2432–2440, 2008.
63. H. D. Minh, H. G. Bock, S. Tischer, and O. Deutschmann. Fast solution for large-scale 2-d
    convection-diffusion, reacting flows. Computational Science and Its Applications - Iccsa 2008,
    Pt 1, Proceedings, 5072:1121–1130 1266, 2008.
64. M. von Schwerin, O. Deutschmann, and V. Schulz. Process optimization of reactives systems
    by partially reduced sqp methods. Computers & Chemical Engineering, 24(1):89–97, 2000.
65. L. D. Schmidt, O. Deutschmann, and C. T. Goralski. Modeling the partial oxidation of methane
    to syngas at millisecond contact times. In Natural Gas Conversion V, volume 119 of Studies
    in Surface Science and Catalysis, pages 685–692. 1998.
66. R. Horn, K. A. Williams, N. J. Degenstein, and L. D. Schmidt. Syngas by catalytic
    partial oxidation of methane on rhodium: Mechanistic conclusions from spatially resolved
    measurements and numerical simulations. Journal of Catalysis, 242(1):92–102, 2006.
67. R. Quiceno, J. Perez-Ramirez, J. Warnatz, and O. Deutschmann. Modeling the high-
    temperature catalytic partial oxidation of methane over platinum gauze: Detailed gas-phase
    and surface chemistries coupled with 3d flow field simulations. Applied Catalysis a-General,
    303(2):166–176, 2006.
250                                                             O. Deutschmann and S. Tischer


68. B. T. Schädel, M. Duisberg, and O. Deutschmann.             Steam reforming of methane,
    ethane, propane, butane, and natural gas over a rhodium-based catalyst. Catalysis Today,
    142(1–2):42–51, 2009.
69. Marylin C. Huff and Lanny D. Schmidt. Ethylene formation by oxidative dehydrogenation of
    ethane over monoliths at very short contact times. Journal of Physical Chemistry, 97:11815–
    11822, 1993.
70. A. S. Bodke, D. A. Olschki, L. D. Schmidt, and E. Ranzi. High selectivities to ethylene by
    partial oxidation of ethane. Science, 285(5428):712–715, 1999.
71. D. K. Zerkle, M. D. Allendorf, M. Wolf, and O. Deutschmann. Modeling of on-line catalyst
    addition effects in a short contact time reactor. Proceedings of the Combustion Institute,
    28:1365–1372, 2000.
72. J. J. Krummenacher, K. N. West, and L. D. Schmidt. Catalytic partial oxidation of higher
    hydrocarbons at millisecond contact times: decane, hexadecane, and diesel fuel. Journal of
    Catalysis, 215(2):332–343, 2003.
73. E. C. Wanat, K. Venkataraman, and L. D. Schmidt. Steam reforming and water–gas shift of
    ethanol on Rh and Rh-Ce catalysts in a catalytic wall reactor. Applied Catalysis a-General,
    276(1–2):155–162, 2004.
74. G. A. Deluga, J. R. Salge, L. D. Schmidt, and X. E. Verykios. Renewable hydrogen from
    ethanol by autothermal reforming. Science, 303(5660):993–997, 2004.
75. M. Hartmann, L. Maier, and O. Deutschmann. Catalytic partial oxidation of iso-octane over
    rhodium catalysts: An experimental, modeling, and simulation study. Combustion and Flame,
    157:1771–1782, 2010.
76. O. R. Inderwildi, D. Lebiedz, O. Deutschmann, and J. Warnatz. Coverage dependence of
    oxygen decomposition and surface diffusion on rhodium (111): A DFT study. Journal of
    Chemical Physics, 122(3), 2005.
77. A. Heyden, B. Peters, A. T. Bell, and F. J. Keil. Comprehensive DFT study of nitrous oxide
    decomposition over Fe-ZSM-5(vol 109, pg 1866, 2005). Journal of Physical Chemistry B,
    109(10):4801–4804, 2005.
Model-Based Design of Experiments
for Estimating Heat-Transport Parameters
in Tubular Reactors

Alexander Badinski and Daniel Corbett




Abstract Heat-transport parameters in a two-dimensional heat-transport model are
estimated from temperature data of a tubular reactor with a fixed catalyst bed.
The reactor design is taken from Adler (Chem. Ing. Tech. 72:555–564, 2000).
Using model-based design of experiment (DoE), two experimental control variables,
the reactor wall temperature and the gas flow density, are optimized to yield
minimal parameter uncertainties. Previously in the literature (Bauer, Theoretis-
che und experimentelle Untersuchung zum Wärmetransport in gasdurchströmten
Festbettreaktoren, Dissertation, Martin-Luther-Universität, Halle-Wittenberg, 2001;
Grah, Entwicklung und Anwendung modularer Software zur Simulation und Param-
eterschätzung in gaskatalytischen Festbettreaktoren, Dissertation, Martin-Luther-
Universität, Halle-Wittenberg, 2004), it was suggested that transient heating of the
reactor wall (from Ï30 to Ï300°C) yields characteristics in the temperature data
that are relevant for estimating heat-transport parameters. It is shown in this work
that temperature data from stationary heating at maximum temperature gives much
lower parameter uncertainties as when compared to transient heating. This insight
allows a significant reduction in the experimental effort. Three to four experiments
were previously performed to gather information used to estimate the set of heat-
transport parameters for a specific catalyst bed. The number can be reduced down
to one experiment when the gas flow density is allowed to change over time. Also,
the time for a single experiment can further be reduced when the transient heating
period is omitted.




A. Badinski ()
BASF SE, GVM/S Scientific Computing, 67056 Ludwigshafen, Germany
e-mail: alexander.badinski@basf.com
D. Corbett
Liquid Crystal Technology Group, Department of Engineering, Parks Road, Oxford OX1 3PJ, UK

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions              251
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 12,
© Springer-Verlag Berlin Heidelberg 2013
252                                                           A. Badinski and D. Corbett


1 Introduction

Heat transport plays an important role in the development process for the chemical
industry. Tubes that are randomly filled with catalyst particles (e.g. pellets, rings),
forming a fixed catalyst bed inside the tube, are often used as chemical reactors. In
these reactors, the activity of catalytic reactions is strongly temperature dependent
and hot-spots arising from exothermic reactions may lead to catalyst degradation
and loss of the catalyst performance. Therefore, a quantitative understanding of the
heat transport mechanisms is the basis for a rational design of such tubular reactors.
    Different mathematical models may be used to model such tubular reactors
varying in computational effort. The simplest is the “quasi-homogeneous” model
where the gas and solid catalyst phases are considered in one continuously mixed
phase [12]. The “heterogeneous” model describes the gas and catalyst as separate
continuous phases [2]. The coupling between the two phases is done via some
volume averaged interface where properties of the catalyst particles, like surface and
shape, may effectively be considered. More elaborate models may be constructed
and solved in the context of fluid dynamics simulations. There, a fixed bed of
catalyst particles may generated virtually and interaction equations between the
different phases are calculated locally.
    Both the quasi-homogeneous and heterogeneous models use the symmetry of
a tubular reactor which reduces the complexity to a two-dimensional problem.
The attraction of the quasi-homogeneous model is the simplicity stemming from
the fewest possible number of balance equations. The improvement of the hetero-
geneous model over the quasi-homogeneous model is evident when the dynamic
behavior of the two phases is different, characterized by the different heat capacity
of the phases. For example, this can be observed when the temperature of the gas
and particle phase differ substantially. In the heterogeneous model, the simulated
temperature profiles of the gas and catalyst phases correspond to the measured
temperature profiles. This correspondence does not hold in the quasi-homogeneous
model, where the simulated temperature profile is an effective temperature of the
mixed gas and catalyst phase. Therefore, the localization and quantification of
hot spots is limited with the quasi-homogeneous model. Another advantage of the
heterogeneous model is that the heat and material transport properties are fundamen-
tally founded. For the homogeneous model, these transport properties are effective
and can only be determined from fitting the model to experimental data. Both of
these models lack accuracy when the inhomogeneity of the fixed bed dominates
the processes. In this case, a three dimensional complex fluid dynamic model may
be used to directly describe the inhomogeneity of the fixed bed. However, the
combination of complex fluid dynamic simulations and state-of-the-art optimization
techniques is still held back by tremendous amount of required computer resources.
    Since the scope of this work is to perform model-based DoE calculations
where the numerical effort scales quadratically with the number of time-dependent
state variables, we use the simplest quasi-homogeneous model and then carefully
investigate the validity of the model.
Model-Based Design of Experiments for Estimating Heat-Transport Parameters            253


   The structure of this paper is as follows. The mathematical model of the tubular
reactor and its approximations are outlined in Sect. 2. The experimental setup
is briefly stated in Sect. 3. Computational details are presented in Sect. 4 and a
discussion of the results is found in Sect. 5. This paper closes with a summary and
future possible directions in Sect. 6.



2 Mathematical Model

2.1 Continuity Equations

The tubular reactor is fully described by the four state variables temperature T , gas
density g , velocity v and pressure p. These four state variables can be specified by
the energy, mass and momentum balance equation as well as an equation of state.
Since the quasi-homogeneous model is used in this work, the rotational symmetry of
the reactor model allows for a reduction of the three-dimensional problem to a two-
dimensional one. All states are therefore functions of the two-dimensional reactor
space spanned with the reactor radius r and the reactor axis z. vr and vz are then the
gas velocities in the radial and axial directions, respectively, with the velocity vector
v D .vr ; vz /. It should be noted that throughout this work, T will correspond to an
effective temperature of the mixed phase as discussed in Sect. 1.
   At the center of the quasi-homogeneous model is the definition of an effective
heat capacity,
                                D g c g " C p c p .1  "/;                         (1)
where " is the void volume fraction which is a measure of the porosity inside the
tubular reactor and varies between 0 and 1 (0 corresponds to 0% and 1 to 100% gas
volume in the reactor). " is assumed to be constant over the reactor space. p is the
catalyst particle density, and c g and c p are the specific heat capacities of the gas and
the catalyst particles, respectively, at constant pressure.
   For the mixed phase, the heat-balance equation is [12]
                                                               
         @T   1 @          @T     @       @T             @T      @T
           D          rr      C      z       " c vz
                                                   g g
                                                            C vr      ;               (2)
         @t   r @r         @r     @z      @z             @z      @r

where r and z (W m1 K1 ) are the effective radial and axial heat conduction
coefficients, respectively. The radial heat conduction term in (2) includes (a) heat
conduction by molecular interaction of the gas molecules, (b) heat conduction
through the catalyst particles, and (c) heat conduction via gas-flow that is driven
by the cross-mixing of the gas flow perpendicular to the propagation direction along
the z axis. For the axial heat conduction term in (2), a similar interpretation holds.
The last term in (2) is the convective heat transport. Radiation can be neglected in
the heat balance since the temperature is below 350°C.
254                                                            A. Badinski and D. Corbett


   The mass-balance equation is [11]
                                            g             
          @g   @      @g     1 @       @g    @ vr   @g vz
              D     Dz       C       rDr             C          ;                   (3)
           @t   @z      @z     r @r       @r     @r      @z

where Dr and Dz (m2 s1 ) are the radial and axial mass diffusion coefficients,
respectively.
   The momentum-balance equation is [11]

                           @v                              F
                      g      D g vr  v  rp C g gz  f ;                        (4)
                           @t

where f F comprises all dissipative forces in the reactor and gz is the gravitational
constant. It is convenient to introduce the mass current density defined as G D g v
(kg m1 s1 ).



2.2 Approximations to the Continuity Equations

In tubular reactors, the velocity of the gas is often considered only along the main
axis (i.e. vr D 0), where vz remains a function of r and z. This approximation is
justified as the axial velocity is generally much larger then the radial velocity of
the gas. This approximation can be used to simplify both convective terms in (2)
and (3).
    The effective radial heat conduction r in (2) can be parametrized in different
forms. In general, the heat conduction may change along the radius of the reactor.
Close to the reactor wall, the porosity increases as a result of the more spaced
packing of the catalyst particles. This reduces the gas-flow driven cross-mixing
perpendicular to the gas-flow propagation close to the wall and thereby reduces the
radial heat conduction of the gas. The simplest model is to assume that r is constant
over the radius. More detailed models have been suggested for r by specifying an
analytic expression for r that changes over the radius in some empirical form.
Using literature studies as the basis [6], it is not straight forward to decide which of
the empirical forms is most suited for the considered tubular reactors. The simplest
model was therefore chosen in this work which assumes that r is constant over r.
This choice can also be justified by an analysis of the heat transport parameters, as
further discussed in Sect. 5.3.
    The mass-balance (3) can in principle be computed without approximations. In
tubular reactors, however, the propagation velocity of the density vz (or momentum
density) is generally much faster than the propagation velocity of the temperature
vT . This can be assessed by estimating vT for the considered reactor. To obtain an
expression for vT , the heat-balance (2) is divided by  and vT is defined as
Model-Based Design of Experiments for Estimating Heat-Transport Parameters          255


                                             "g c g vz
                             vT D                             :                     (5)
                                    g c g " C p c p .1  "/

With some representative values " D 0:4, g D 1 kg m3 , c g D 1 kJ kg1 K ,
p D 2; 000 kg m3 and c p D 1 kJ kg1 K1 , we find that vT  103 vz . This
justifies well the assumption that the density (obtained from the mass balance) is
in quasi steady-state when compared to the temperature (obtained from the energy
balance). A further approximation to the mass balance is possible when the mass
convection is much larger than the mass diffusion term. In this case, the mass
diffusion can be neglected. Since the ratio of the convection to the diffusion term (the
Peclet number vDz Lz ) is between 102 and 104 for the considered reactor, neglecting the
mass diffusion term is well justified. With these approximations, the mass-balance
(3) simplifies to
                                       @ g
                                           vz D 0;                                  (6)
                                       @z
which implies that the mass current density Gz D g vz is constant in the axial
direction. When Gz is specified, e.g. at the entrance of the reactor, then the product
of g and vz is known throughout the reactor. It is worth noting that considering (6)
goes beyond the standard plug-flow approximation where the velocity is assumed to
be constant over r. In (6), however, the velocity vz may still vary over r.
   The momentum-balance (4) can be solved when the dissipative forces are
specified for the reactor. This leads to the extended Brinkman equation [6] where
semi-empirical functions for the dissipative forces are specified. However, when the
pressure drop is neglected across the reactor, one can avoid solving the momentum-
balance equation altogether as the three remaining state variables can be determined
by the energy and mass balance equations as well as an equation of state.



2.3 Boundary Conditions

For the solution of the energy balance (2), the following initial and boundary
conditions are specified,

                     T .r; z; t D 0/ D T0 .r; z/;                                   (7)

                     T .r; z D 0; t/ D c1 .t/ C c2 .t/r 2 C c3 .t/r 3 ;             (8)
                                ˇ
                            @T ˇˇ
                                     D 0;                                           (9)
                            @z ˇzDL
                                ˇ
                            @T ˇˇ
                                     D 0:                                          (10)
                            @r ˇrD0
256                                                                      A. Badinski and D. Corbett




Fig. 1 Schematic of the temperature profile over the radius inside the reactor tube. Left figure: the
temperature profile is plotted from the center of the reactor to the reactor wall. Center figure: when
Tw , r and ˛w are specified, (11) defines an “auxiliary wall” at the radial position R  r =˛w as
discussed in the text. Right figure: the temperature at the auxiliary wall Tw;aux is used as the new
boundary value temperature in the simulation



T0 in (7) is the initial temperature specified in Sect. 4.3. At the reactor entrance
(z D 0), T in (8) is approximated as a cubic function with zero slope at r D 0
and time-dependent coefficients ci , specified in Sect. 4.3. At the exit of the reactor
(z D L), no heat conduction along the z axis is assumed due to the ending reactor
bed, resulting in (9). At the reactor axis (r D 0), T is specified by the reactor
symmetry, which prohibits the heat transfer across the axis, leading to (10).
Following [12], at the reactor wall (r D R) T is described by the heat-transport
equation across the wall,
                                    ˇ
                                @T ˇˇ
                             r         D ˛w .T  Tw /jrDR :                                   (11)
                                @r ˇrDR

˛w (W m2 K1 ) is the wall heat-transfer coefficient, and Tw (°C) is the wall
temperature. The left hand side of (11) is the energy flux into/out of the reactor
volume, and the right hand side of that equation is the energy flux through the wall
which is proportional to the difference of the temperature of the gas in contact with
the reactor wall and Tw . This equation has a geometric interpretation illustrated
in Fig. 1. When Tw , r and ˛w are specified, this equation defines a new wall
temperature Tw;aux at a distance r =˛w away from the reactor wall, as indicated
in Fig. 1. Following up an idea from [7], at this distance an “auxiliary wall” is
considered that reduces the reactor volume in the simulation and thereby cuts out
the volume of the reactor close to the wall. This leaves out the region where r
is likely not to be constant. When the auxiliary wall is small as compared to the
remaining reactor volume (r =˛w  R), the use of (11) is justified and the heat-
transfer coefficient has a well founded interpretation. In this work, (11) is used as a
boundary condition for the energy-balance equation at the reactor wall, where Tw is
specified in Sect. 4.3.
Model-Based Design of Experiments for Estimating Heat-Transport Parameters           257


2.4 Parameter Representation

Following [2], page 87–92, the transport parameters are written as linear functions
of the mass current density,

                                   r D L1 C L2 Gz ;                                (12)
                                   z D L3 C L4 Gz ;                                (13)
                                   ˛w D A1 C A2 Gz ;                                (14)

where Li and Ai are parameters. Bauer [2, 3] further suggested empirical functions
for Li and Ai with 11 parameters and varying porosity " and ratio R=d , where R
is radius of the reactor and d some characteristic length of the catalyst particle.
We have not followed this route in this work as neither R=d nor " are varied
in the experiment prohibiting a parameter estimation of all parameters. It is also
known that these empirical functions are inaccurate for small R=d ratios [2, 6]. The
parameters L1 and L3 can be interpreted as the radial and axial heat conduction at no
gas flow dominated by particle-particle interaction in the gas and catalyst phase. L2
and L4 characterize the intensities of the gas-flow driven cross mixing perpendicular
to the propagation of the gas. A similar interpretation holds for parameters A1 and
A2 . All parameters have an associated uncertainty, which will later on be estimated,
as well as minimized using DoE.


3 Experimental Setup

The reactor design used in this work was proposed by Adler [1]. A tube is randomly
filled with catalyst particles forming a fixed catalyst bed. A mass current density
enters this tubular reactor from above, travels through the catalyst bed of the reactor,
and leaves the reactor at the bottom. The temperature of the reactor wall can be
controlled with heated oil. The mass current density and the wall temperature are
both controlled by the experimentalist. Experiments have been performed for three
different designs of the catalyst particle shape. The different particle shapes are later
on referred to as A, B and C.
    In total 24 thermoelements are used to measure the temperatures in the reactor:
at the reactor entrance five thermoelements are distributed along the radius, at the
reactor wall five thermoelements are distributed along the z axis, and inside the
reactor 14 thermoelements are distributed at three different levels on the z axis
at varying radial positions. At installation of these thermoelements, all axial and
radial positions are carefully measured. The novel idea of this reactor design is
that the temperature is measured not only inside the fixed reactor bed, but also at
the reactor entrance and at the reactor wall. This allows one to specify Dirichlet
boundary conditions when solving the mathematical model for the temperature,
further discussed in Sect. 2.3.
258                                                                 A. Badinski and D. Corbett


4 Computational Details

4.1 Numerical Methods

All calculations are done with the program package VPLAN [8]. The parameter
estimation is based on the weighted least-square method using the generalized
Gauss–Newton type method as implemented in PARFIT [4]. The weighted sum of
squares                                   X
                               WSS D min      ri2                        (15)
                                               pj
                                                     i

with
                                              hi  mi
                                       ri D                                               (16)
                                                 i
is minimized over all parameters pj such that the balance equations of Sect. 2 are
satisfied. The sum in (15) is over all measured and simulated temperatures mi and
hi , respectively, and i is the one-sigma standard error of the measured temperature.
    The linearized parameter covariance matrix from the Gauß–Newton method is
also used for the sensitivity analysis of this work,

                             Cp D cov.pi ; pj / D .J T J /1 ;                            (17)

where J is the Jacobian of the least squares term with elements Jij D @ri =@pj .
   The model-based DoE calculations minimize a measure of the parameter covari-
ance matrix with respect to all experimental control variables such that the balance
equations of Sect. 2 are satisfied. In this work, four different measures of Cp are
considered [10],

                              1
                         A D   traceCp                                                   (18)
                              n
                         D D det Cp                                                      (19)
                        E D maxfi ; i is eigenvalue of Cp g                            (20)
                                 p
                        M D maxf Cp;i i ; i D 1; : : : ; ng:                             (21)

To minimize the measure of Cp , the sequential programming method is used as
implemented in the program package SNOPT [5].
   The heat-transport equation is solved using the standard method of lines based
on finite differences transforming the partial differential equation into ordinary
differential equations. To do so, the integration domain is discretized in the
radial (i D 1; : : : ; NR ) and axial (j D 1; : : : ; NL ) direction. The first derivatives are
written as one sided differences (upwind scheme [9]), and the second derivatives
are written as central differences. The resulting ordinary differential equations are
then solved as initial value problems using a backward differentiation formula
method [8].
Model-Based Design of Experiments for Estimating Heat-Transport Parameters          259


   We find that using more than 1818 grid points does not change the parameter
values by more than 0.2%. Since this is much less than the statistical errors of the
parameter values, we use this number of grid point for the results presented here.
   To allow for a placement of the thermoelements inside the reactor independent of
the discretization grid, the temperature observable hi is calculated by interpolating
the temperature at that position with a two dimensional plane passing through three
of four adjacent temperature points.


4.2 Statistical Errors

Three main sources of statistical errors in the measured temperature profile are
identified: an error from the temperature measurement device, an error from the
uncertainty of the thermoelement position in the reactor, and an error from the
spatial anisotropy of the fixed bed around the rotational axis of the reactor. The rota-
tional anisotropy of the fixed bed causes the measured temperature profile to deviate
from the rotational symmetry. This deviation is estimated in this work by measuring
the temperature at eight different angles, all at a fixed axial and radial position in
the reactor. We find experimentally that these eight measured temperatures fluctuate
by about 5°C. This value holds approximately true for different temperature ranges
as well as different mass flow densities. In our calculations, the fluctuation of the
temperature around the rotational axis is assumed to be Gaussianly distributed with
a two-sigma value of 5°C. As the anisotropy effect dominates the statistical errors
of the measured temperature in the reactor, other statistical errors are neglected.


4.3 Initial and Boundary Values

The initial and boundary values for the temperature are stated in Sect. 2.3 and are
determined as follows. The polynomial coefficients from (8)are obtained from a fit
to five temperatures measured at the reactor entrance. Since the temperature changes
over time, also the ci change over time.When a polynomial of fourth order is used,
no significant influence is seen on the estimated parameters.
    The wall temperature Tw varies along the z axis and is obtained by a linear
interpolation of five temperatures measured along the wall. As the five temperatures
change over time, also the linear interpolation changes. In Fig. 2, these boundary
values can be seen in a schematic plot of the simulated temperature profile at three
different time snapshots.
    The initial temperature T0 at t0 D 0 in (7) is obtained with a homotopy method.
Before the simulation starts to model the experimental setup at t0 D 0, an extra
period of time is simulated where (2) is integrated using an initial temperature of
T0 D 20°C. During this extra period, the boundary conditions (8)–(10) are chosen
from the experimental setup at t D 0. The length of that extra period is chosen such
that (2) reaches a steady-state at t0 D 0.
260                                                                          A. Badinski and D. Corbett


a                                  b                                     c




Fig. 2 The temperature profile plotted over the radius and z axis of the reactor for experimental
setup C. The left graph is at t D 1;000 s, the middle graph at t D 3;000 s and the right graph at
t D 5;000 s. The bottom left is the reactor entrance, the bottom right is the reactor wall, the top
right is the reactor exit, and the top left is the reactor axis. In this plot, the gas flow enters from the
bottom left and goes to the top right. The reactor wall is heated up over time



4.4 Influence of the Axial Heat Conduction

The heat-balance (2) describes the heat conduction in the axial and radial directions.
When all available experimental data for an experimental setup are considered, it is
found in each parameter estimation that the parameter covariance matrix is linearly
dependent. It is therefore not possible to simultaneously estimate the axial and
radial heat conduction parameters r and z from the given data. This problem was
observed previously [2]. One remedy is to only consider the radial heat transport at
a fixed axial position [2, 6]. This approach is problematic because the influence of
the temperature profile at the entrance of the reactor onto the temperature profile
at any axial position inside the reactor is neglected. In this work, the solution
proposed in [2] is used where z is eliminated by z D 0:1r . In our simulations,
other relationships like z D 0 or z D 0:5r have been investigated and do
not change the estimated parameters by more than 0.5% which is less than their
statistical errors. The advantage of including a non-zero axial heat conduction is the
well known observation that convection dominated solutions are stabilized by an
additional diffusion term [9].


5 Results

5.1 Intuitive Versus Optimal Design of Experiments

For the three experimental setups, Table 1 compares the intuitive with the optimal
experimental design. The two experimental control variables are considered: the
mass current density Gi and the wall temperature Tw . The intuitive design (ID) was
Model-Based Design of Experiments for Estimating Heat-Transport Parameters                       261


Table 1 Experimental control variables used previously (intuitive design, ID) and obtained from
the optimal design of experiment calculations (calculated optimal design, COD)
               G1             G2                G3             G4             Tw .t0 / Tw .tend /
     Design (kgs1 m2 ) (kgs1 1m2 ) (kgs1 m2 ) (kgs1 m2 ) °C                    °C
A   ID         0.000           0.917             1.833           3.667            23–47    334–346
    COD        0.394           0.954             4               4                350      350
B   ID         0               0.917             1.833           3.667            22–69    344–347
    COD        0.442           1.012             4               4                350      350
C   ID         0.917           1.833             3.667           –                20–36    324–342
    COD        1.325           4                 4               –                350      350
Gi is the mass current density for different experiments. Tw is the wall temperature at the beginning
of the experiment (at t0 ) and at the end of the experiment (at tend ). In the experimental setup,
Tw changes approximately linearly in time between Tw .t0 / and Tw .tend /. In the simulation, the
measured values for Tw are used, which may deviate slightly from being linear in time


Table 2 Measures of the parameter covariance matrix evaluated for three catalysts
          Design            A                D                  E                        M
A         ID                0.00207           0.00034             0.00649                   0.07059
          COD               0.00072           0.00009             0.00240                   0.04253
B            ID                0.00149             0.00024             0.005406             0.06163
             COD               0.00048             0.00007             0.00180              0.03598
C            ID                0.00157             0.00028             0.00545              0.05362
             COD               0.00031             0.00005             0.00036              0.01620
             ROD               0.00114             0.00018             0.00405              0.04630
The second column specifies the type of experimental design: intuitive design (ID), calculated
optimal design (COD), and realized optimal design (ROD). The measures are defined in (18)–(21)


previously chosen by the experimentalists in such a way that Tw changes transiently
and approximately linear from Tw .t0 /  20°C to Tw .tend /  350°C. The calculated
optimal design (COD) shows that Tw should be kept at the maximal possible wall
temperature during the whole experimentation time. The rationale of this finding
is that it is optimal for the parameter estimation to have huge variations in the
temperature profile across the reactor. These huge variations are realized when Tw
is maximal and when the temperature of the inflowing gas has room temperature.
   From the optimal choice of the mass current densities Gi , as stated in Table 1,
three observations are made. First, it is optimal to choose Gi to be always larger
than zero. Secondly, at least one experiment should be done at a maximum rate of
Gi (in this work, the maximum rate is Gmax D 4 kgm2 s1 is chosen). Thirdly, the
spacing between different Gi is not uniform.
   Since the stationary heating is found optimal in this work, we propose that the
experiments done at different values for Gi can be put into a single experiment
where G varies over time. This allows to reduce the number of experiments from
about three to four down to one. This significantly reduces the experimentation time.
   Table 2 summarizes the four different evaluated measures of the parameter
covariance matrix defined in (18)–(21). It can be seen that the computed optimal
262                                                             A. Badinski and D. Corbett


design (COD) reduces the different measures by a factor of 3–5 (A ), 3–6 (D ), 3–
14 (E ) and 2–5 (M ) when compared to the intuitive design. All presented design
of experiment results are done by minimizing the A measure. When one of the
other measures is minimized, both Tables 1 and 2 look very similar.
    Due to time constraints in the project, only the third catalyst setup is experimen-
tally repeated with the proposed optimized design (one experiment with different Gi
rates). In Table 2, these results are denoted as realized optimal design (ROD). We
see that the measures of the parameter covariance matrix are substantially reduced
when comparing the realized with the intuitive design (ROD vs. ID in Table 2).
However, when comparing the ROD and COD, we find that the realized measures
are a bit higher then the previously computed measures. This deviation is due to the
fact that the inflowing gas is (accidentally) preheated by the inlet tube attached to the
reactor entrance. This results in a lowering of the temperature variation in the ROD
of the reactor. This preheating is not considered in the COD where the inflowing
gas is assumed to have room temperature resulting in larger temperature variations
in the reactor. In future reactor designs, a heat blocker between the gas inlet tube
and the reactor entrance should therefore be considered.



5.2 Heat-Transport Parameters

Table 3 gives the estimated heat-transport parameters and their statistical errors for
the three different catalysts. The statistical errors (two-sigma confidence intervals)
are less than 8% of the parameter value. For a better comparison between the differ-
ent catalysts, the total heat-transport coefficient  is considered which combines the
heat diffusion inside the reactor and the heat transport across the reactor wall [7],

                          1    1   R
                            D    C                                                   (22)
                             ˛w   r
                                     1            R
                             D              C            ;                           (23)
                                 A1 C A2 Gz   L1 C L2 Gz

where R is the radius of the tubular reactor. The results are stated in Table 4 for the
different catalyst, at a fixed mass current density of G D 1:83 kgm2 s1 . We find
that  ranges by more than 20% between the different catalysts. As the statistical
uncertainties of the different  are less than 6%, we can conclude that catalyst A has
a significantly improved total heat transport when compared to the catalyst B and C.



5.3 Validation of the Model

To check the validity of the mathematical model, 2 tests are performed to
investigate whether the residuals (hi  mi in (15)) are Gaussian. With a confidence
Table 3 Estimated parameters for the different catalysts. The parameter uncertainties are denoted as 56.2/ D 56˙2, where ˙2 is the two-sigma confidence
interval
                          A1                A2                        L1                    L2                    Av. WSS         # of data       2
                               1                 2  1    1              1 1                    1   1
Shape       Design        (WK )             (Wm sK kg )               (WK m )               (WmsK kg )            –               points          –
A           ID            56(2)             77(1)                     0.49(4)               1.36(5)               0.782           2,268           1.047
B           ID            72(3)             70(1)                     0.62(4)               0.93(3)               0.891           2,268           1.047
C           ID            119(5)            55(2)                     0.32(5)               0.80(3)               0.887           1,666           1.055
            ROD           131(4)            55(2)                     0.32(5)               0.79(3)               1.221           1,680           1.055
The first column specifies the different types of catalysts. The second column specifies the type of experimental design: intuitive design (ID) and realized
optimal design (ROD). The seventh column gives the average WSS which is obtained from the total WSS divided by the number of data points stated in the
eighth column. The last column gives the normalized 2 value for a confidence level of 5% and the respective degrees of freedom
                                                                                                                                                               Model-Based Design of Experiments for Estimating Heat-Transport Parameters
                                                                                                                                                               263
264                                                                                          A. Badinski and D. Corbett


                                            Table 4 The heat-transport parameters ˛w and
                                            r evaluated for G D 1:83 kg/m2 s and the
                                            derived total heat-transfer coefficient 
                                                      ˛w               r             
                                                       W             W             W 
                                                         m2 K            mK               m2 K
                                            A           198(3)          2.98(12)         108(4)
                                            B           200(3)          2.32(9)           96(4)
                                            C           220(6)          1.78(8)           86(5)



                                                         Residual Histogram (All Exp.)
                                                              (model: vplan.ini )



                           0.8                                                                                 0.8
      relative frequency




                           0.6                                                                                 0.6


                           0.4                                                                                 0.4


                           0.2                                                                                 0.2


                           0.0                                                                                 0.0
                                       −2          −1            0        1        2         3         4
                                 All Exp.
                                 normal distribution N(0,1)
                                                                     residuals

Fig. 3 Histogram plot of the normalized residuals for experiment A as defined in (16), using the
parameter values stated in Table 3. The blue line is a Gaussian distribution with a normalized width
of  D 1


level of 0.05, the 2 tests are accepted for the different experimental setups, with
the exception of the ROD of the experimental setup C. However, there the violation
of the 2 test is not very strong. This can be seen in Table 3, when comparing the
average WSS and the 2 value.
   For the experimental setup C, as an example, Fig. 3 gives a histogram plot of
the 1,666 residuals (each residual corresponds to one data point) which are in
close agreement with a Gaussian shape. For the same setup, Fig. 4 compares the
temperature profile at two different axial positions.
   Furthermore, z tests are performed to assess that the mean value of the residuals
is not significantly different from zero. Both, the 2 and the z test indicate that the
quasi-homogeneous model (together with the model for the statistical error) give a
good description of the experimental data.
Model-Based Design of Experiments for Estimating Heat-Transport Parameters                                  265


    a                                                   b
    temperature [in C]   300                                                 300




                                                        temperature [in C]
                         250                                                 250


                         200                                                 200


                         150                                                 150


                         100                                                 100
                               0   0.005         0.01                              0   0.005         0.01
                                   radius [in m]                                       radius [in m]

Fig. 4 Comparison between experimental and simulated temperature profiles at two different z
levels in the reactor for setup C. The used parameter values are those from Table 3. The left graph
is at t D 2;000 s and the right graph is at t D 4;000 s




5.4 Justification of ˛w Model

It was shown in Sect. 2.3, that the heat transport parameters ˛w and r in the
considered mathematical model are fundamentally founded when r =˛w  R.
From Table 4, we see that this relationship is not strictly obeyed in our simulations
as r =˛w ranges between 0.008 and 0.015 m which is in the range of the reactor
radius. As a result of that, we need to be careful in giving the physical interpretation
of the heat transport parameters too much weight. However, in Sect. 5.3 it was
shown that the mathematical model describes well the experimental data and that
the parameters are well specified. Therefore, the parameters can still be used in
comparing the different catalysts.



6 Summary and Outlook

Model-based optimal experimental design calculations were performed for the
reactor proposed and designed by Adler to accurately determine heat-transport
parameters in catalyst beds. The main outcome of the optimized design is the
stationary heating of the reactor which allows to combine experiments at different
mass current densities. This insight allowed a reduction in the experimentation time
by a factor of about 3–4. In particular, the experimentation time which previously
lasted about 2–3 days could therefore be reduced to about 1 day. At the same
time, it was shown that the parameters can be determined even more accurately.
In this work, no reactions were assumed inside the reactor. However, the results of
this work can be transferred to systems where reactions takes place at the catalyst
surface.
266                                                                    A. Badinski and D. Corbett


    In this work, statistical uncertainties of the measured temperatures and hence
of the heat-transport parameters were fully taken into account. This allowed a
quantitative comparison of the heat-transport properties between different catalyst
particles. Although the simplest possible mathematical model was chosen, it was
shown that the model describes well the experimental data. At the same time, the
parameters have a statistical error which is less than 8%.
    In future studies it may be interesting to refine the mathematical model. The
approximations made to the balance equations in Sect. 2.2 may be revisited, in
particular when evaluating the mass balance, or Navier–Stokes equations. Although
it was not found to be relevant for this work, it may still be appropriate to investigate
whether different parametrizations of the radial heat conduction coefficient can
be considered. Finally, the heat-transport parameters can be made dependent on
material data (e.g. the heat capacity of the gas) which would allow for a better
transferability of the obtained results, e.g. to different gases.

Acknowledgements Several people have contributed to that work. I like to thank Dr. H. Schultze
for initializing that project at BASF and for fruitful discussions. Also, many thanks to
Dr. A. Schimpf for providing the experimental data and the engineering background to this
work. My gratitude also goes to Dr. S. Körkel for providing the software, and to Dr. A. Schreieck,
and to Dr. C.-A. Winkler for valuable suggestions during writing of that work.




References

 1. R. Adler, Stand der Simulation von heterogen-gaskatalytischen Reaktionsabläufen in Festbet-
    trohrreaktoren - Teil 1, Chem.-Ing.-Tech. Vol. 72 p. 555–564 (2000)
 2. M. Bauer, Theoretische und experimentelle Untersuchung zum Wärmetransport in gasdurch-
    strömten Festbettreaktoren, Dissertation, Martin-Luther-Universität, Halle-Wittenberg (2001)
 3. M. Bauer, R. Adler Novel Method for investigation and evaluation of heat transfer in fixed bed
    tubular reactors with gas flow, Heat and Mass Transfer 39, 421–427 (2003)
 4. Bock, Kostina, Schlöder, GAMM-Mitt., Vol. 30, No. 2, 376–408 (2007)
 5. P. E. Gill, W. Murray, and M. A. Saunders. SNOPT: An SQP algorithm for large-scale
    constrained optimization. Report NA 97-2, Dept. of Mathematics, University of California,
    San Diego (1997)
 6. A. Grah Entwicklung und Anwendung modularer Software zur Simulation und Parame-
    terschätzung in gaskatalytischen Festbettreaktoren, Dissertation, Martin-Luther-Universität,
    Halle-Wittenberg (2004)
 7. U. Grigull, H. Sandner, Wärmeleitung, Springer-Verlag (1979)
 8. S. Körkel, Numerische Methoden für Optimale Versuchsplanungsprobleme bei nichtlinearen
    DAE-Modellen, Dissertation, Universität Heidelberg, Heidelberg (2002)
 9. W. H. Press, S. A. Teukolsky, W. T. Vetterling, B. P. Flannery, Numerical Recipes, Cambridge
    Universtiy Press (2007)
10. F. Pukelsheim Optimal Design of Experiments, John Wiley & Sons, Inc. New York (1993)
11. R. B. Bird, W. E. Stewart, E. N. Lightfoot, Transport Phenomena, Wiley, 2 edition (2001)
12. VDI- Wärmeatlas, Herausgeber: Verein Deutscher Ingenieure, 10. Auflage, Springer-Verlag
    Berlin Heidelberg (2006)
Parameter Estimation for a Reconstructed
SOFC Mixed-Conducting LSCF-Cathode

Thomas Carraro and Jochen Joos




Abstract The performance of a solid oxide fuel cell (SOFC) is strongly affected
by electrode polarization losses, which are related to the composition and the
microstructure of the porous materials. A model that can decouple the effects asso-
ciated with the geometrical arrangement, shape, and size of the particles together
with material distribution on one side and the material properties on the other can
give a relevant improvement in the understanding of the underlying processes. A
porous mixed ionic-electronic conducting (MIEC) cathode was reconstructed by
focused ion beam tomography. The detailed geometry of the microstructure is used
for 3D calculations of the electrochemical processes in the electrode and to calibrate
a well-established reduced model obtained by averaging. We perform a model-
based estimation of the parameters describing the main processes and estimate their
confidence regions using the calibrated reduced model.

Keywords SOFC • Sensitivity • Parameter Estimation • 3D FEM model • 3D
Reconstruction


1 Introduction

The electrochemical performance of solid oxide fuel cells (SOFCs) mostly depends
on material composition and microstructure of the porous electrodes, which are
the determinant causes of polarization losses. In this work a three-dimensional

T. Carraro ()
Institut für Angewandte Mathematik (IAM), Ruprecht-Karls-Universität Heidelberg,
62120 Heidelberg, Germany
e-mail: thomas.carraro@iwr.uni-heidelberg.de
J. Joos
Institut für Werkstoffe der Elektrotechnik (IWE), Karlsruher Institut für Technologie (KIT),
Adenauerring 20b, 76131 Karlsruhe, Germany
e-mail: jochen.joos@kit.edu

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions                         267
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 13,
© Springer-Verlag Berlin Heidelberg 2013
268                                                                T. Carraro and J. Joos


reconstruction of a mixed conducting La0:58 Sr0:4 Co0:2 Fe0:8 O3ı (LSCF)-cathode,
that provides a detailed microstructure approximation, is considered. Mixed conduc-
tors have both electronic and ionic conducting properties, thus allowing the active
zone of the electrodes to extend from the three phase boundary towards the inner
volume of the electrode. The mechanisms that allow such an extension are related to
oxygen ion diffusion within the MIEC and oxygen surface exchange at the interface
between MIEC and gas phase. In this work the exchange of oxygen with the gas
phase is described by the surface exchange coefficient k ı and the transport of oxygen
ions by the chemical diffusion coefficient D ı as shown in [4, 18, 19].
   In the last few years several groups have developed different methods for
the reconstruction of a porous electrode [7, 9, 11, 22, 26, 27] in order to study
the influence of the microstructure on the performance of the electrode. Two
tomography techniques are considered for the reconstruction of SOFC electrodes:
X-ray and focused ion beam (FIB). The latter is considered to be most suitable in
our case (particle size between 300 and 600 nm), as it allows a finer resolution.
   So far the reconstruction was mainly used to calculate different microstructural
parameters: volume-specific surface area, volume/porosity fraction and tortuosity.
These characteristic parameters are used to calculate effective parameters for
homogenized models, which under some conditions [8] are adequate approxima-
tions of complex microstructures in case the quantity of interest has a macroscopic
character, as e.g. the area specific resistance ASRcat .
   Simplified models are useful for homogeneous microstructures, but they are lim-
ited for microstructure optimization and are inadequate in case of inhomogeneous
microstructures or in case the microstructure scale is too large in comparison with
the scale of the electrode. In order to overcome these limitations, the development
of detailed 3D models for the simulation of the electrochemical processes in an
electrode is under investigation. Furthermore, the microstructure parameters used in
homogenized models need to be determined by complex geometry models.
   Some groups have started to develop micro-scale models to compute the perfor-
mance of more general microstructures. For the anode side the lattice Boltzmann
(LB) method has been used in [14, 23] and the finite volume method (FVM)
in [21], while for the cathode side we have used the finite element method (FEM)
for 3D calculations based on a real microstructure [11, 12]. In [4, 11] we have
applied this model for electrochemical performance evaluation to a MIEC cathode
reconstructed by means of focused ion beam coupled with scanning electronic
microscope (FIB/SEM). In [5] we have done a sensitivity analysis with respect to
the most important parameters.
   A relevant prerogative of the sensitivity analysis is the characterization of the
impact of different processes (gas diffusion, bulk diffusion, surface reaction) with
respect to a performance index, e.g. ASRcat . It is possible hence to distinguish based
on a quantitative approach which process is most important and which region of the
microstructure is relevant for the given process.
   To perform a sensitivity analysis of a quantity of interest, the derivatives of
this quantity with respect to the model parameters are calculated. The sensitivities
are here used to estimate the confidence regions of the parameters as explained in
Sect. 4.
Parameter Estimation for a Reconstructed SOFC Mixed-Conducting LSCF-Cathode       269


   Since in [5] we have shown that the sensitivities of the reduced model are a good
approximation of the sensitivities calculated with the 3D model, we study here the
parameter estimation problem using the calibrated reduced model.
   The aim of this work is to study the possibility of estimating the parameters,
which describe the diffusion and the reaction processes, simultaneously from a
series of measurements of ASRcat at different working conditions in the stationary
case. An empirical functional dependence on temperature and oxygen partial
pressure of the two parameters k ı and D ı leads to the estimation of five parameters
as shown in Sect. 4. To study the feasibility of the parameter estimation problem,
the essential approximation of the confidence region of the parameters is derived.
   All the simulations are done by ParCell3D, a research finite element software
based on the deal.II library [2], developed to simulate electrochemical processes in
microstructures [4].



2 Model

We describe in this section the model and its parameters. The following processes
are considered determining:
•   Gas diffusion of oxygen in the porous structure (including a Knudsen term).
•   Surface exchange (oxygen reduction) at the interface MIEC/pores.
•   Bulk diffusion of oxygen ions in the lattice.
•   Charge transfer at the interface cathode/electrolyte.
•   Ionic conduction in the electrolyte.
Few approximations are made for the case under study. Due to high electronic
conductivity of the cathode (e.g. at 800ıC the conductivity of LSCF is 8; 899 S/m),
a constant electrical potential is assumed. We also consider constant temperature
condition. Three material parameters, which describe a mixed ionic-electronic
conducting cathode as LSCF, are used in the model: (a) the surface exchange
coefficient k ı , (b) the chemical diffusion coefficient D ı and (c) the oxygen ion
equilibrium concentration in the perovskite lattice. The oxygen ion equilibrium
concentration has been evaluated as a function of oxygen partial pressure for each
temperature from measured data [24] as shown in [17].
   The cells used in experiments have a base area of 1 cm2 and a thickness of
30 m. For the computations we take a representative volume element (RVE) of
the microstructure, as explained in [10, 11]. The RVE is divided in subregions
corresponding to different materials: ˝G is the corresponding region of the gas
phase, ˝M is the region of the bulk phase, while ˝E is the electrolyte. Between
these subregions we define the interfaces: GM is the surface between MIEC and
gas, ME is the interface between MIEC and electrolyte and GE is the interface
between electrolyte and gas. Furthermore we use the notation C C for the upper
face of the current collector, EL for the bottom face of the electrolyte and 0 for
the side faces as shown in Fig. 1.
270                                                                    T. Carraro and J. Joos

Fig. 1 Definition of the
                                 ΓCC
boundary surfaces for the
application of the boundary
conditions (10), (2d) and (7d)

                                            Current collector (CC)




                                                                                          Γ0
                                 Γ0
                                                   Cathode

                                                 (MIEC/PORE)




                                                Electrolyte (EL)
                                                                                         ΓEL



2.1 Boundary Conditions

Four boundary conditions determine the working conditions of the cathode:
•   Oxygen partial pressure on the cathode side pC G .
•   Oxygen partial pressure on counter electrode side pCE .
•   Potential of the cathode ˚MIEC .
•   Potential of the counter electrode ˚CE .
Due to the high electronic conductivity of the porous LSCF-cathode analyzed in this
study a constant electrical potential ˚MIEC can be assumed. Its value is determined
by the following expression:

                       ˚MIEC D UNernst .pCC ; pCE / C ˚CE  Model ;                     (1)

where UNernst .pCC ; pCE / is the difference of potentials between cathode and counter
electrode at equilibrium and Model is the total voltage loss of the model, which is
given, while the current I is calculated by the model. The area specific resistance of
the model is calculated as ASRModel D Model =I . Subtracting the specific resistance
of the electrolyte ASRE D LE =E , where LE is the length of the electrolyte and
E is the ionic conductivity coefficient of the electrolyte, we get the area specific
resistance of the cathode: ASRcat D ASRModel  ASRE .
   In the next sections we describe the processes considered in the model.
Parameter Estimation for a Reconstructed SOFC Mixed-Conducting LSCF-Cathode            271


2.2 Gas Diffusion

In the pores (gas phase) we have diffusion and coupling between gas and MIEC
(GM)

                   r  .DG ruG / D 0 in ˝GAS ;                                       (2a)
                                @uG    kı
                          DG        D  .f .uG /  uM / on GM ;                      (2b)
                                @nG    2
                                @uG
                                    D 0 on 0 [ GE ;                                 (2c)
                                @nG
                                 uG D uN G on CC ;                                   (2d)

where uG and uM are respectively the oxygen and oxygen ions concentrations, DG
is the gas diffusion coefficient, k ı is the surface reaction coefficient and f .uG / is an
equilibrium value. Equation (2b) shows, hence, that the exchange between gas phase
and MIEC phase depends on the difference between the actual value of oxygen ions
in MIEC uM and its equilibrium value f .uG /, which depends on the concentration
of oxygen molecules in the gas phase.
    The gas phase is considered as a binary mixture of oxygen and nitrogen. The
diffusion coefficient, which contains a binary diffusion term and a Knudsen term, is
                          "              p                        #1
                   p          1  .1     MO2 =MN2 /uG     1
              DG D                                     C k            ;                (3)
                   RT                    DO2 N2         DO2 .dp /

where uG is the oxygen concentration in the gas phase (pores), MO2 and MN2 are
respectively the atomic masses of the oxygen and nitrogen molecules, DO2 N2 is the
binary diffusion coefficient and DOk 2 .dp / the Knudsen diffusion coefficient, dp is
the average diameter of the pores, p and T are pressure and temperature and R is
the ideal gas constant.


2.3 Bulk Diffusion

Since the electrical potential is assumed to be constant, we consider only diffusion
of ions in the MIEC:

                   r  .DM ruM / D 0 in ˝M ;                                         (4a)
                                 @uM
                           DM        D k ı .f .uG /  uM / on GM ;                   (4b)
                                 @nM
272                                                               T. Carraro and J. Joos


                       @uM      1
                  DM       D       .g.uM / C uE / on ME ;                        (4c)
                       @nM    ASRCT
                       @uM
                           D 0 on 0 ;                                             (4d)
                       @nM

where uE is the electrical potential, DM is the bulk diffusion coefficient in the
MIEC, ASRCT is the area specific resistance of the interface and g.uM / is the
difference between the Nernst potential and the ionic potential of MIEC material.


2.4 Surface Exchange

Oxygen is exchanged through the boundary faces between gas phase and MIEC
material. This process is described empirically by fluxes calculated from a variation
of the concentration with respect to an equilibrium condition. This is described by
the boundary conditions (2b) and (4b), where f .uM / is the reference value for the
concentration of oxygen ions, which is detected experimentally [24]. The coefficient
k ı is the surface reaction coefficient, that limits the oxygen reduction.


2.5 Charge Transfer

Oxygen ions are incorporated at the interface MIEC/electrolyte (ME). The local
charge transfer voltage depends on the local difference (ct ) between the equilibrium
reduction potential (UNernst;ME ) and the interfacial discontinuity between the
electronic potential of the electrolyte and ionic potential of the MIEC:

                         ct D UNernst;ME  .˚M  uE;ME / ;                         (5)

where
                                                  r
                                         RT           pM;ME
                          UNernst;ME D      log             ;
                                         2F            pCE

˚M is the potential in the MIEC, ˚E;ME is the potential in the electrolyte at the
interface ME, pM;ME is the local equilibrium partial pressure of oxygen ions in
MIEC at the interface ME and pCE is the oxygen partial pressure in the counter
electrode.
   As both UNernst;ME and ˚M are functions of uM , we write relation (5) as

                                ct D g.uM / C uE ;                                 (6)

which is used in the boundary conditions (4c) and (7b) to describe the flux of oxygen
ions at the interface ME. These fluxes depend on the interface parameter ASRCT .
Parameter Estimation for a Reconstructed SOFC Mixed-Conducting LSCF-Cathode        273


As we consider a LSCF/CGO interface, the effect of ASRCT is assumed negligible,
but for numerical purposes we need to impose a small value. We use the value
ASRCT D 104 cm2 . In [5] we have shown, as expected, that the choice of a small
ASRCT value makes this parameter negligible for the model sensitivities.


2.6 Ionic Current

A constant chemical potential determined by pCE (the oxygen partial pressure at
the counter electrode) is assumed in the electrolyte, since an ideal reversible counter
electrode is considered. The diffusion of oxygen ions in the electrolyte is induced
by a gradient of the electrical potential (Ohm’s law):

              r  .E ruE / D 0 in ˝EL ;                                         (7a)

                          @uE     1   1
                     E       D          .g.uM / C uE / on ME ;                 (7b)
                          @nE    2F ASRCT
                          @uE
                              D 0 on 0 [ GE ;                                   (7c)
                          @nE

                           uE D 0 on EL ;                                        (7d)

where F is the Faraday constant.


2.7 Counter Electrode

An ideal reversible counter electrode (CE) with a constant potential is considered:

                                 ˚CE D 0 in ˝CE ;                                  (8)

and the following boundary conditions at the interface CE are taken:

                              ˚E;CE D ˚CE      on E;CE ;

                              pE;CE D pCE     on E;CE :                           (9)



2.8 Other Boundary Conditions

On the lateral boundaries of the RVE to close the problem we impose a no flux
condition (insulation):
274                                                                          T. Carraro and J. Joos


                                      @uG
                                          D0            on 0 ;
                                      @nG
                                      @uM
                                          D0            on 0 ;
                                      @nM
                                      @uE
                                          D0            on 0 ;                               (10)
                                      @nE

where 0 are the four lateral boundaries as depicted in Fig. 1.


3 Numerical Method

3.1 Weak Formulation

To solve the model defined in the previous section we consider the discretization by
the finite element method (FEM). The natural setting of the problem is thus the weak
formulation of the systems of equations (2), (4) and (7). To this aim we introduce
the following spaces

 Y D H 1 .˝G /  H 1 .˝M /  H 1 .˝E /;
Y0 D H 1 .˝G /  H 1 .˝M /  H 1 .˝E / \ f.'G ; 'M ; 'E / W 'Gj                D 'E jEL D 0g;
                                                                           CC

Yg D H 1 .˝G /  H 1 .˝M /  H 1 .˝E /\
      \ f.uG ; uM ; uE / W uGj       D uN G and uEj          D 0g;
                                 CC                      EL


and define .uG ; uM ; uE / 2 Yg as the solution of the weak formulation
             Z                                     Z
                                             kı
                      DG .uG /ruG r'G C                      .f .uG /  uM / 'G D 0         (11a)
                 ˝G                          2         GM
                 Z                            Z
                          DM ruM r'M  k ı              .f .uG /  uM / 'M C
                     ˝M                           ME
                                                   Z
                                            1
                                      C                      .g.uM / C uE / 'M D 0          (11b)
                                          ASRCT        ME
                  Z                          1     Z
                                           ASRCT
                           E ruE r'E C                      .g.uM / C uE / 'E D 0          (11c)
                      ˝E                    2F         ME


8.'G ; 'M ; 'E / 2 Y0 . The weak formulation is discretized by the finite element
method and the resulting discretized nonlinear problem is solved as explained in the
next section.
Parameter Estimation for a Reconstructed SOFC Mixed-Conducting LSCF-Cathode        275


3.2 Solver and Grid

The system of PDE that describes the complete coupled problem is discretized by
the method of finite elements and solved numerically by a CCC program, called
ParCell3D, which has been developed specifically to solve this problem [4]. The
program relies for the finite element discretization on the library deal.II [2].
   The model considered here is described by a stiff nonlinear system of equations,
in which the stiffness intrinsically derives by the multiphysics nature of the problem.
   The bad conditioning of the problems is due to the stiff coupling between the gas
phase and the MIEC independently of the method used to discretize the problem.
The high condition number of the matrix and the peculiar clustering of the eigen-
values demand hence for an iterative solver with an efficient preconditioner. At the
present state of the development we use the GMRES solver [20] preconditioned by
a domain decomposition method [15]. In the implemented domain decomposition
method the RVE is divided in subregions. Each piece of RVE is solved in parallel
using again a GMRES solver with a ILU [20] preconditioner.
   The grid is created by segmentation of the 3D image obtained by the FIB/SEM
technique described in [11]. The reconstructed volume of the microstructure used
for the calculations is 5:25  5:25  30 m3 . This corresponds to 18 million voxels
and 23 million degrees of freedom using trilinear finite elements. As can be seen
in Figs. 3 and 4 the microstructure is active only in a region close to the three
phase boundary. We have shown in [11] that the calculated quantity of interest
(ASRcat ) does not change cutting the microstructure above the active region to obtain
a smaller but still precise model. To save computational time we use almost half of
the total height (14 m). The model used here has almost 12 million degrees of
freedom (Fig. 2).



3.3 Approximation of the RVE

At the lateral sides of the RVE (on 0 ) we impose a no flux condition. If the
dimension of the RVE is large enough, the ASRcat value (our quantity of interest)
is not affected by the boundary condition on the sides. A preliminary study of the
dimension of the RVE has been done [17] for an artificial structure. A more accurate
study with a larger reconstruction is planned, which is needed for such a study.
   To save computational time we consider a model reduction by cutting the height
of the cathode. In [10] (using three different real microstructures) the influence on
ASRcat of the variation of the model height from 0:35 to 30 m was studied. The
ASRcat value for the studied microstructures does not vary significantly for a height
larger than 3:5 m. We have decided nevertheless to calculate a model of height
14 m to be sure that we can neglect the influence of the cut.
276                                                           T. Carraro and J. Joos

Fig. 2 Schematic
representation of the five
slices shown in Figs. 3 and 4.
The RVE is a volume of
dimensions
5:25  5:25  14 m3




4 Parameter Estimation

4.1 Calibration of the Reduced Model

We have shown in [4] a comparison between our 3D model and a well established
simplified model from Adler, Lane and Steele [1], known as ALS model. For the
comparison we have calibrated the ALS model with the microstructure parameters
(porosity, volume-specific surface area and tortuosity) calculated with our 3D
model. For the calibration we need the values of the volume-specific surface area
and porosity, which are calculated as postprocessing of the reconstruction. The
Parameter Estimation for a Reconstructed SOFC Mixed-Conducting LSCF-Cathode                   277




             0 μm           1.31 μm         2.62 μm          3.94 μm         5.25 μm

                               -3.9e+11                 3.02e+10

Fig. 3 Sensitivity of the solution ( mol s=m5 ) with respect to the parameter D ı at T D 800ı C




             0 μm           1.31 μm         2.62 μm          3.94 μm         5.25 μm

                               -3.45e+4                  2.02e+7

Fig. 4 Sensitivity of the solution ( mol s=m4 ) with respect to the parameter D ı at T D 800ı C


tortuosity on the contrary is not obtained by a simple postprocessing, it is calculated
in our work using the same 3D microstructure model through a FEM simulation as
explained in [11]. The results show that in case of homogeneous microstructures,
as the one considered in this work, the ALS model can be used for predictive
calculations of ASRcat . Furthermore, in Part 2 of that work [5] we have shown that
the derivatives of ASRcat with respect to the parameters D ı and k ı differs 3–5%
compared to our 3D model.
   Thus we consider in this work the calibrated reduced ALS model as accurate
enough to estimate the confidence regions of the fitted parameters. The use of this
model will accelerate the uncertainty analysis and can be used as a preliminary study
for a future optimal experimental design.
278                                                               T. Carraro and J. Joos


   From the work of Adler and coauthors we consider the results of their asymptotic
analysis, which gives a formula for the approximation of the total cell resistance
Rchem
                                       s
                                RT                 2
                        Rchem D                              ;                     (12)
                                2F 2       .1  "/acmc
                                                     2 Dı kı


where R is the ideal gas constant, T the temperature, F the Faraday constant, 
the thermodynamic factor, cmc the concentration of oxygen sites in the MIEC and
the microstructure parameters are the tortuosity , the porosity " and the volume-
specific surface area a.
   The ASRcat value can than be derived by (12), subtracting the contribution of
the electrolyte and dividing by two, since we consider only one electrode of the
symmetric cell
                                                
                                              LE
                                      Rchem 
                                              E
                            ASRcat D               ;                               (13)
                                           2
where LE is the length of the electrolyte and E is the ionic conductivity of the
electrolyte.


4.2 Least-Squares Problem

We have shown in [4] that the sensitivities of ASRcat with respect to D ı and k ı have
the same dependence on the temperature as ASRcat itself. This means that it is not
possible to estimate both D ı and k ı from measurements of ASRcat taken by varying
only the temperature.
   It is known [3, 16, 24] nevertheless that k ı and D ı depend both on T , while
only k ı depends on pO2 in the range of pressure considered in our experiment
(1  21 kPa). An empirical dependence of the parameters k ı and D ı on T and pO2
can be found in [24]. We use the following parametrization
                                             
                                         Ea;k
                          k ı D k0 exp         C pO
                                                   ˛
                                                     2
                                                       ;                           (14)
                                         RT
                                              
                                         Ea;D
                          D D D0 exp 
                            ı
                                                 ;                                 (15)
                                          RT

where Ea;k and Ea;D are the activation energies of k ı and D ı respectively, R is the
gas constant, k0 and D0 are prefactors of the Arrhenius type of dependence on the
temperature and ˛ is an exponent for the dependence on pO2 of k ı .
   The five parameters to be estimated are thus D0 ; Ea;D ; k0 ; Ea;k ; ˛. We consider
hence the possibility to measure ASRcat at different temperatures T and different
Parameter Estimation for a Reconstructed SOFC Mixed-Conducting LSCF-Cathode        279


oxygen partial pressure pO2 . The cell is operated at constant voltage model . From
current measurements we obtain values of ASRcat , which are used to make the fit of
the model.
   We have planned ASRcat measurements for the cell under study using a symmetric
cell, but we use in this work preliminarily only a virtual experiment to test the
method. The virtual experiment consists of virtual measurements done by pertur-
bation of “true” ASRcat values with a random error ". The “true” values are obtained
by the model using reference values for the model parameters, as explained in [4].
We consider an error which is proportional to the measured value of the resistance:

                            ASRcat;meas D ASRcat;true .1 C "/;                    (16)

where " is a random error with zero mean and a given variance meas .
   ASRcat is a function of k ı , D ı and several other material and microstructure
parameters, see (13) and (12). The conductivity of the electrolyte E is assumed
to be known, as it can be measured with precision. The parameters ",  and a are
calculated, specifically for the microstructure here considered, using our 3D FEM
model. This is the most costly part of the procedure, but it is essential to permit the
use of a reduced model. The material parameters Cmc and  are calculated as in [4].
   A least squares functional to be minimized by the Gauss–Newton method is
defined
                      X                                                    2
           J.q; / D         f
                            C D
                                1=2
                                       ASRcat .q; i;j /  ASRcat;meas . i;j / ;   (17)
                       ij


where q WD fk0 ; Ea;k ; ˛; D0 ; Ea;D g are the model parameters to be estimated and
 i;j WD fTi ; pO2 ;j g are design parameters to define the setup of the experiment.
We have used C  f D D CD Z to approximate the covariance of the data, which
                                2

is a proper approximation in case of relative errors as shown in [28]. CD is the
covariance of the multiplicative error " and Z is the diagonal matrix with the model
               O i;j / on the diagonal. The asymptotic properties of this estimator
values ASRcat .q;
can be found in [29].
    The goal of this work is to study the feasibility of the parameter estimation
defined above. For this reason we estimate the confidence regions of the parameters.


4.3 Confidence Regions

The estimation of the confidence regions of the parameters reveals quantitatively
their correlation and the goodness of the fit.
   For this purpose we estimate the linearized confidence region. This is an ellipsoid
centered at the estimated parameter qO and defined by the symmetric positive definite
linearized covariance matrix [6]:
                                              1
                                         f
                               COV D G T C  1
                                           D G     ;                              (18)
280                                                                           T. Carraro and J. Joos


where G is the Jacobian of ASRcat with respect to q. In the estimation of the
covariance matrix we need in G and Z the estimated value of the parameter qO
because the problem is nonlinear. A better approximation of the confidence regions
can be obtained by a sequential optimal experimental design as shown in [6].
We do not address this point here, since it goes beyond the scope of this work.
Considering uncorrelated measurements, CD is a diagonal matrix with diagonal
elements CD .i; i / D meas
                       2
                            . To calculate the Jacobian G we need the sensitivities of
ASRcat with respect to the parameters.
   The linearized confidence region is defined as
                            n                                         o
                      R L WD qO C ıq W ıq T COV 1 ıq        2
                                                              .˛; /       ;                    (19)

where the confidence level is given by the 2 value with degrees of freedom
and ˛ significance level. The definition of the confidence level is motivated by the
following observation. In the least squares case, with a linear observation operator
and Gaussian random data, the fitted value is distributed as a 2 function with
  D NQ degrees of freedom [25], where NQ is the number of parameters.


4.4 Experiments

We consider virtual experiments with 20 measurements, each defined by a pair
.T; pO2 / combining the temperature values 600, 650, 700, 750, 800ı C and the
oxygen partial pressure values 1; 2; 10; 21 kPa.
   We assume that the measurements have a relative error of 0.1% with zero mean
and Gaussian distribution, so we use formula (16) with meas D 0:001.
   We compare our results with a Monte Carlo simulation with 10,000 sampling
points. Each point of the Monte Carlo simulation is the result of a parameter
estimation using the functional (17) and fitting 20 measurements of ASRcat . The
measurement error is taken from the Gaussian distribution defined above. Since the
errors are considered independent and identically distributed, we take 20 Gaussian
distributions, one for each measurement, sampled with 10,000 points each.



5 Numerical Results

Figures 3 and 4 show the sensitivity of uM with respect to the two parameters D ı and
k ı . It can be noted that the microstructure is active only partially. The penetration
depth (i.e. the length of the active region) depends on the critical ratio D ı =k ı , which
controls the performance of the cell. It is thus crucial to estimate the coefficients
which define these two important processes.
     We use in this work a reduced model to calculate the confidence regions of the
parameters. We have thus calibrated the ALS model [1] with the microstructure
Parameter Estimation for a Reconstructed SOFC Mixed-Conducting LSCF-Cathode                              281


a     1.08                                                 b 1.08
      1.06                                                     1.06

      1.04                                                     1.04

      1.02                                                     1.02
Eak




                                                           α
        1                                                        1

      0.98                                                     0.98

      0.96                                                     0.96

      0.94                                                     0.94

      0.92                                                     0.92
         0.92 0.94 0.96 0.98 1 1.02 1.04 1.06 1.08                0.92 0.94 0.96 0.98   1 1.02 1.04 1.06 1.08
                             k0                                                         k0

c 1.08                                                     d 1.01
      1.06

      1.04                                                  1.005

      1.02

         1
                                                           α




                                                                  1
α




      0.98

      0.96                                                  0.995

      0.94

      0.92                                                     0.99
         0.92 0.94 0.96 0.98    1    1.02 1.04 1.06 1.08          0.99     0.995         1     1.005    1.01
                               Eak                                                      Eak


Fig. 5 Confidence region in the parameter space projected onto the planes (a) k0 Ea;k , (b) k0 ˛,
(c) Ea;k  ˛. The plot (d) shows a closeup of (c)


parameters (volume-specific surface area, porosity and tortuosity) calculated with
our 3D detailed FEM model. Since the sensitivities of the ALS model and the 3D
model are comparable [4], the use of the ALS model for a study of the parameters’
confidence regions is legitimate.
     As can be seen in formula (12), we expect a strong correlation between k ı and
   ı
D in the fitting of measured values of ASRcat , thus a bad conditioning of the fitting
problem. We first show that, in the case the fitting process is well behaving, the
linearized covariance matrix gives an appropriate approximation of the confidence
region. For this reason we consider a virtual experiment in which we estimate only
the three parameters that define k ı , i.e. k0 , Ea;k and ˛ from 20 measurements at
different T and pO2 as explained in Sect. 4.2. The value for the parameter D ı has to
be taken from literature or determined from an another experiment.
    In Fig. 5 we report the 95% confidence regions of all pairs of parameters.
These are sections of the ellipsoidal three dimensional confidence region. As the
parameters have been normalized, the reference value for all the parameters is one.
282                                                                                      T. Carraro and J. Joos


a                                                     b
      2.5                                                   2.5



       2                                                      2



      1.5                                                   1.5




                                                      EaD
D0




       1                                                      1



      0.5                                                   0.5


            0.5      1        1.5       2       2.5                  0.5          1        1.5      2      2.5
                               k0                                                        Eak
                          c
                              1.06


                              1.04


                              1.02
                         EaD




                                    1


                              0.98


                              0.96


                              0.94
                                 0.94   0.96   0.98       1       1.02     1.04   1.06
                                                       Eak

Fig. 6 Confidence region in the parameter space projected onto the planes: (a) k0 D0 , (b) Ea;k 
Ea;D . The plot (c) shows a closeup of the plot (b)


The linearized confidence regions are compared with values obtained by a Monte
Carlo simulation using 10,000 experiments as explained in Sect. 4.4. Furthermore,
we observe that the variance in the estimation of k0 is much larger than the variance
of the other two parameters Ea;k and ˛. An error in the data space is than amplified
50 times in the parameter space. We can also note that the linearized confidence
region gives a good approximation of the confidence region sampled by the Monte
Carlo method, which takes into account the nonlinearities.
    If we consider the estimation of all five parameters, which define k ı and D ı , the
covariance matrix has a condition number which is two orders of magnitude larger
than the case of fitting only k ı . The fitting is bad conditioned, so we can not expect to
be able to approximate the confidence region using the linearized covariance matrix.
    Figure 6 shows the correlations between k0 and D0 and between Ea;k and Ea;D .
It can be observed from the Monte Carlo sampling that the error of the parameters
Parameter Estimation for a Reconstructed SOFC Mixed-Conducting LSCF-Cathode                   283


k0 and D0 is in the range between 50% and +200%, while Ea;k and Ea;D are
within 5%. The linearized confidence regions do not approximate the tail of the
distribution, which is clearly not Gaussian. This result was expected as the two
parameters k ı and D ı appear in the formula (12) as a product. We want to show
nevertheless that the estimation of the covariance matrix (18) gives a quantitative
information on the well posedness of the parameter estimation problem and in
case of well behaving of the system it can give a very good approximation of the
uncertainty of the estimation, as shown in Fig. 5.



6 Conclusion

In previous works [4, 11] we have used a precise 3D reconstruction of a MIEC
cathode to calculate its performance. It has been shown in that work that for
homogeneous microstructures a simplified model as the ALS model can be used
instead of the 3D model to estimate a macroscopic quantity as the ASRcat . This is
possible if the simplified model is calibrated using data obtained by the detailed
3D model. For this calibration we need the values of the volume-specific surface
area, porosity and tortuosity as explained in Sect. 4. Furthermore we have shown in
another work [5] that the sensitivities of ASRcat calculated with the ALS model are
very close to the results of the 3D model. It is hence possible to use the calibrated
ALS model for the estimation of the parameters’ confidence regions.
   In this work we have studied the possibility to estimate the parameters that define
the two most important processes, which are the bulk diffusion and the surface
reaction. These two processes have been parametrized with five parameters. We have
calculated an approximation of the confidence regions of the parameters, which have
shown that the strong correlation of the two processes leads to a bad conditioning
of the fitting procedure. The use of measurements of ASRcat at different temperature
and oxygen partial pressure in a range of T D 600–800ıC and pO2 D 1–21 kPa is
not enough to estimate both parameters k ı and D ı , while if D ı is given, it is possible
to estimate k ı within an error of 5% if the measurements have an error of 0.1%.
   The estimation of both parameters is possible using a technique revealing the
time constants of the system, e.g. impedance measurements, as shown in [13].
   The work done here will be extended with a study of optimal experimental design
following [6], both in the stationary and the time dependent case.

Acknowledgements We thank Prof. Francesco Ciucci for the continuous and invaluable discus-
sions and Dr. Bernd Rüger for helpful comments and discussions.
    We are grateful to Dr. Holger Obermaier for his contribution on software optimization; Hartmut
Häfner for the parallel computer support; the Steinbuch Centre for Computing (SCC) at the
Karlsruhe Institute of Technology for providing the computing facility.
    This work was funded by the Deutsche Forschungsgemeinschaft (DFG) through project
“Modellierung, Simulation und Optimierung der Mikrostruktur mischleitender SOFC-Kathoden”
(IV 14/16-1, RA 306/17-1) and by the Friedrich-und-Elisabeth-Boysen-Stiftung.
284                                                                             T. Carraro and J. Joos


References

 1. Adler, S.B., Lane, J.A., Steele, B.C.H.: Electrode kinetics of porous mixed-conducting oxygen
    electrodes. Journal of The Electrochemical Society 143(11), 3554–3564 (1996)
 2. Bangerth, W., Hartmann, R., Kanschat, G.: deal.II – a general purpose object oriented finite
    element library. ACM Trans. Math. Softw. 33(4), 24/1–24/27 (2007)
 3. Bouwmeester, H.J.M., den, M.W.O., Boukamp, B.A.: Oxygen transport in La 0.6Sr 0.4Co
    1- yFe yO 3-d. Journal of Solid State Electrochemistry 8(9), 599–605 (2004)
 4. Carraro, T., Joos, J., Rüger, B., Weber, A., Ivers-Tiffée, E.: 3D FEM model for the reconstruc-
    tion of a porous SOFC cathode: I. Performance quantification. Electrochimica Acta 77(0), 315
    – 323 (2012)
 5. Carraro, T., Joos, J., Rüger, B., Weber, A., Ivers-Tiffée, E.: 3D FEM model for the reconstruc-
    tion of a porous SOFC cathode: II. Parameter sensitivity analysis. Electrochimica Acta 77(0),
    309 – 314 (2012)
 6. Ciucci, F., Carraro, T., Chueh, W.C., Lai, W.: Reducing error and measurement time in
    impedance spectroscopy using model based optimal experimental design. Electrochimica Acta
    56(15), 5416 – 5434 (2011)
 7. Gostovic, D., Smith, J.R., Kundinger, D., Jones, K., Wachsman, E.: Three-dimensional
    reconstruction of porous LSCF cathodes. Electrochemical and Solid-State Letters 10(12),
    B214–B217 (2007)
 8. Hornung, U. (ed.): Homogenization and porous media. Springer-Verlag New York, Inc., New
    York, NY, USA (1997)
 9. Iwai, H., Shikazono, N., Matsui, T., Teshima, H., Kishimoto, M., Kishida, R., Hayashi, D.,
    Matsuzaki, K., Kanno, D., Saito M., M.H., K., E., N., K., Yoshida, H.: Quantification of
    Ni-YSZ anode microstructure based on dual beam FIB-SEM technique. ECS Transactions 25(2
    PART 3), 1819–1828 (2009)
10. Joos, J., Carraro, T., Ender, M., Rüger, B., Weber, A., Ivers-Tiffée, E.: Detailed Microstructure
    Analysis and 3D Simulations of Porous Electrodes. ECS Transactions 35, 2357–2368 (2011)
11. Joos, J., Carraro, T., Weber, A., Ivers-Tiffée, E.: Reconstruction of porous electrodes by
    FIB/SEM for detailed microstructure modeling. Journal of Power Sources 196(17), 7302–7307
    (2011)
12. Joos, J., Rüger, B., Carraro, T., Weber, A., Ivers-Tiffée, E.: Electrode Reconstruction by
    FIB/SEM and Microstructure Modeling. ECS Transactions 28(11), 81–91 (2010)
13. Leonide, A.: Modelling and parameter identification by means of impedance spectroscopy.
    Ph.D. thesis, Karlsruher Institut für Technologie (KIT) (2010)
14. Matsuzaki, K., Kanno, D., Teshima, H., Shikazono, N., Kasagi, N.: Three-dimensional
    numerical simulation of Ni-YSZ anode polarization using reconstructed microstructure from
    FIB-SEM images. ECS Transactions 25(2), 1829–1836 (2009)
15. Quarteroni, A., Valli, A.: Domain Decomposition Methods for Partial Differential Equations.
    Oxford University Press, Oxford, UK (1999)
16. Ried, P., Bucher, E., Preis, W., Sitte, W., Holtappels, P.: Characterisation of
    La0.6Sr0.4Co0.2Fe0.8O3-d and Ba0.5Sr0.5Co0.8Fe0.2O3-d as Cathode Materials for
    the Application in Intermediate Temperature Fuel Cells. ECS Transactions 7(1), 1217–1224
    (2007)
17. Rüger, B.: Mikrostrukturmodellierung von elektroden für die festelektrolytbrennstoffzelle.
    Ph.D. thesis, Karlsruher Institut für Technologie (KIT) (2009)
18. Rüger, B., Joos, J., Weber, A., Carraro, T., Ivers-Tiffée, E.: 3D electrode microstructure
    reconstruction and modelling. ECS Transactions 25(2), 1211–1220 (2009)
19. Rüger, B., Weber, A., Ivers-Tiffée, E.: 3D-modelling and performance evaluation of mixed
    conducting (MIEC) cathodes. ECS Transactions 7(1), 2065–2074 (2007)
20. Saad, Y.: Iterative Methods for Sparse Linear Systems, 2nd edn. Society for Industrial and
    Applied Mathematics, Philadelphia, PA, USA (2003)
Parameter Estimation for a Reconstructed SOFC Mixed-Conducting LSCF-Cathode                      285


21. Shearing, P.R., Cai, Q., Golbert, J.I., Yufit, V., Adjiman, C.S., Brandon, N.P.: Microstructural
    analysis of a solid oxide fuel cell anode using focused ion beam techniques coupled with
    electrochemical simulation. Journal of Power Sources 195(15), 4804 – 4810 (2010)
22. Shearing, P.R., Golbert, J., Chater, R.J., Brandon, N.P.: 3D reconstruction of SOFC anodes
    using a focused ion beam lift-out technique. Chemical Engineering Science 64(17), 3928–3933
    (2009)
23. Shikazono, N., Kanno, D., Matsuzaki, K., Teshima, H., Sumino, S., Kasagi, N.: Numerical
    assessment of SOFC anode polarization based on three-dimensional model microstructure
    reconstructed from FIB-SEM images. Journal of The Electrochemical Society 157(5), B665–
    B672 (2010)
24. Søgaard, M., Hendriksen, P., Jacobsen, T., Mogensen, M.: Modelling of the polarization
    resistance from surface exchange and diffusion coefficient data. In: Proc. 7th European SOFC
    Forum, pp. 1–17. European Fuel Cell Forum, Lucerne, Switzerland (2006)
25. Tarantola, A.: Inverse problem theory and methods for model parameter estimation. SIAM,
    Philadelphia (2005)
26. Wilson, J.R., Gameiro, M., Mischaikow, K., Kalies, W., Voorhees, P.W., Barnett, S.A.: Three-
    dimensional analysis of solid oxide fuel cell Ni-YSZ anode interconnectivity. Microscopy and
    Microanalysis 15(1), 71–77 (2009)
27. Wilson, J.R., Kobsiriphat, W., Mendoza, R., Chen, H.Y., Hiller, J.M., Miller, D.J., Thornton, K.,
    Voorhees, P.W., Adler, S.B., Barnett, S.A.: Three-dimensional reconstruction of a solid-oxide
    fuel-cell anode. Nature Material 5(7), 541–544 (2006)
28. Banks, H. T., Davidian, M., Samuels Jr, J.R.: An inverse problem statistical methodology
    summary. CRSC-TR07-14 (2007)
29. Davidian, M., Giltinan D. M.: Nonlinear Models for Repeated Measurement Data. Monographs
    on Statistics & Applied Probability, Chapman & Hall/CRC (1995)
An Application of Robust Parameter Estimation
in Environmental Physics

Alexandra G. Herzog and Felix R. Vogel




Abstract This article presents a current research application of robust parameter
estimation for inverse problems in air–sea gas exchange. The first part illustrates the
interaction of measurements, analysis, and parameter estimation in the concept of
the modeling cycle: Typical measurement techniques are classified and discussed
with respect to application areas and reproducibility. Statistical analysis of the
assumed error distributions is presented as the link to parameter estimation via
choosing a suitable parameter estimator. In the case that the error distribution
cannot be determined definitely and appears to be highly non-Gaussian the use of
robust estimators is advised instead of the standard least-squares approach. Huber’s
M -estimator is used here as robust method. Reliable parameter reconstruction by the
chosen estimator closes the modeling cycle by validating model against experiment.
   In the second part all previously presented theoretical aspects are applied to the
spectral reconstruction approach (SPERA), a special measurement technique for
determining water-sided gas concentration fields via Laser-induced fluorescence.
In this application the use of a robust estimator allows the reconstruction of local
gas concentration as the model parameters of an inverse problem, for which least-
squares methods failed. The article finishes with a brief outlook of applying optimal
experimental design techniques to measurements in environmental physics.


1 Introduction

Environmental physics aims at improving our understanding of the strongly cou-
pled non-linear system earth regarding intra- and inter-transport of the individual
subsystems, in recent time with special emphasis on influence of human-induced



A.G. Herzog ()  F.R. Vogel
Institute for Environmental Physics, Im Neuenheimer Feld 229, 69120 Heidelberg, Germany
e-mail: aherzog@iup.uni-heidelberg.de; fvogel@iup.uni-heidelberg.de

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions                  287
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 14,
© Springer-Verlag Berlin Heidelberg 2013
288                                              Alexandra G. Herzog and Felix R. Vogel


changes like increasing concentration of greenhouse gases in the atmosphere. The
key challenges can be subdivided roughly in two categories:
(a) On the one hand, new measurement techniques based on (mainly) well under-
    stood processes are developed, that rely on measurements of easily accessible
    quantities. Together with a reliable model description they allow the reconstruc-
    tion of quantities of interest from estimated model parameters, for example
    greenhouse gas concentration from DOAS measurements [44], soil water
    content from radar backscatter [7], or paleotemperatures from concentrations
    of dissolved noble gases in groundwater [1].
(b) On the other hand, typical research topics in environmental physics are
    acquiring representative data sets that cover the range of the encountered multi-
    scale processes, e.g. in turbulent transport phenomena, therefore demanding
    profound screening of processes from smallest, intermediate up to global scale.
    The immense amount of data necessary for a complete covering of encoun-
    tered phenomena emphasizes the need for model descriptions of processes
    at least on small to intermediate scales to reduce the required data density
    to an acceptable level. These tasks typically combine a wide range of both
    direct measurement methods (e.g. temperature, humidity) and indirect methods
    described in (a) with modeling approaches. Moreover, several subdisciplines of
    environmental physics may be involved in the same study. An example may be
    the determination of global sea-air carbon dioxide flux [52]. Both categories
    often lead to inverse problems, which form a significant part of experimental
    analysis in environmental physics. Inverse problems explicitly consist of a
    theoretical process model and a set of usually experimental data. On the basis
    of these elements the model parameters are to be determined that show the
    least deviation between model prediction and experimental realization under
    the given conditions.
    In this article, the application of techniques from model based parameter
estimation is discussed, especially with a view to inverse problems under non-
Gaussian error distributions of experimental data. Special emphasis is given to an
illustrative example from current research in environmental physics. The example
was chosen to represent a typical and often encountered type of problem that
may be easily adapted to other situations ranging from physics over biosciences
to economics.
    The article is structured as following: The so-called “modeling cycle” is intro-
duced to illustrate the interaction of experimental data acquisition, modeling, and
model validation in combination with parameter estimation. The experimental
techniques used in environmental physics are presented, followed by a rough sketch
of theoretical aspects of inverse problems as far as necessary for the example
application from air–sea interaction, the Spectral Reconstruction Approach.
An Application of Robust Parameter Estimation in Environmental Physics                      289


                                              Experiment




                                               n
                                            io
                 Validation                                            Exp. Verification


                               III                             I

                                          at
                                  er tion
                                       tim




                                                           An
                                    Es




                                                              a
                              m ula




                                                               ly
                                                               si
                                 m




                                                                  s
                               et
                               Si
                               ra
                              Pa

                                                   II
                      Numerical
                       Model                                          Model
                                              Implementation
                                               in Software



                                          Math. Verification

Fig. 1 The basic modeling cycle: experiment as initial step, after analysis of the process model
candidates can be developed, these again are directly implemented in software or if necessary
implemented as an approximated model in software, here called “numerical model,” that allows
simulation of the real experimental conditions. Iterative review and revision of these steps by
physical and mathematical validation and verification finally leads to the desired model. Based
on a graphical idea by Oberkampf et al. [43]



2 The Modeling Cycle

Hardly understood processes are common in young research areas such as environ-
mental physics, chemical engineering, and biosciences.
   Especially model development, comparison of model candidates, and evaluation
of single models need to be repeatedly discussed, see for example the assessment
of atmosphere-ocean general circulation models (AOGCM), by the IPCC expert
meeting, see [51]. The search for a suitable model for a certain (experimental)
problem is an iterative process of adapting, validating, and refining promising model
candidates. The main goal is to reproduce the experimental data of the regarded
(physical) processes satisfactorily and statistically significantly with respect to the
process uncertainties and—if possible—with a model that can be theoretically
deduced. This procedure can be illustrated in the so-called modeling cycle sketched
here in a reduced form in Fig. 1. Models are developed by analyzing discrepancies
of model predicted states and experimental measurements and by adapting the
respective model candidate for improvement.
   The basic modeling cycle presented here is a formalization of this process
by implicitly including methods from parameter estimation for model validation.
Essential for using these methods is that the model is implemented in software.
Implemented models allow simulation of process states that can be compared to
measured experimental data by estimating the corresponding model parameters and
evaluating the residual in the solution. If a suitable model candidate is identified,
parameter estimation techniques allow to determine the model parameters for a
given set of data.
   In the course of this article a specific problem from environmental physics is
treated as an example problem in the framework of the modeling cycle in Sect. 5. As
290                                               Alexandra G. Herzog and Felix R. Vogel


a start, the next sections present physical background as well as the used techniques
as motivation and problem classification.


3 Experimental Challenges and Methods
  in Environmental Physics

Modeling of a given problem and later estimation of the characteristic model param-
eters relies on a sound background in the specific area of research. Experiments from
environmental physics form the background of the studied application problem:
Environmental physics deals with the planet Earth, one of the most complex directly
explorable systems. Humankind as integral part of the system Earth affects the
system and is affected by the system itself [32]. Despite these mutual interactions,
knowledge of the system and the corresponding processes within is still very poor.
The system Earth is subdivided into the compartments atmosphere, biosphere,
lithosphere, cryosphere, and ocean. The arising dynamics are usually described by
highly non-linear partial differential equation systems both for processes within
the individual subsystems as well as for interactions of two or more subsystems.
Typically, it is intended to describe subsystems by models as simple as possible.
Herein, the identification of suitable model candidates and the dominating system
parameters are the most challenging tasks.
    Usually, the (sub)systems are too large for classical experimental studies in
laboratories, for example the carbon cycle, especially the interaction and trends in
the uptake of CO2 in the terrestrial and marine biosphere [42] are extremely difficult
to be designed in the necessary complexity. However, there are some exceptions for
which the basic processes are still under investigation. An example here may be the
transport of gaseous tracers over a gaseous–liquid interface, that forms the basis for
understanding the transport of atmospheric gases across the air–sea interface under
turbulent conditions, especially in combination with waves. Up to now, a reliable
generalized transfer model has not been found [59].
    Therefore, physical investigation in environmental physics has to adapt old
and invent new methods to deal with these complex situations. The methods for
investigation can be classified in the following four groups: (a) classic laboratory
studies, (b) measurements that combine field studies for local information with
lab analysis, and (c) remote sensing. The most recent group in this context is
(d) virtual experiments, that are actually detailed simulations in cases where the
elementary physics are already well understood and modeled, but for example the
effects causing macroscopic intermittency are still unknown.


3.1 Classic Laboratory Measurements

The oldest classical investigation is the laboratory study. Classical laboratory
experiments can be regarded as a physical simulation, with a simplified system and
An Application of Robust Parameter Estimation in Environmental Physics           291


simplified boundary conditions. Under controlled and reproducible (environmental)
conditions (e.g. temperature, pressure, salinity) data of the process under investi-
gation are systematically collected to gain information about parameter dependent
quantities like temperature or pressure for model development. Examples from
current research at Heidelberg are soil column investigation [45], or determination
of vertical gas concentration profiles. The latter is used as an example for robust
parameter estimation in Sect. 5.



3.2 Field Studies with Discrete Sampling Points

Field studies aim at investigating a certain quantity, e.g. concentration or veloc-
ity fields, in large areas, volumes or timescales. Usually measurements of the
observed quantity are taken in discrete sample points. Sample point data is typically
interpolated to generate continuous approximations of the quantities of interest,
for example emission maps for anthropogenic CO2 emissions. These emission
estimates are part of the input for complex computer simulations. Yet, current
computer models are not able to fully reconstruct the typical variations of the CO2
concentration over Europe gained in point measurements, but the recent progress
is evident, see for example [24] and [2]. Besides, sampling points are typically
assumed to be representatives for specific conditions. Furthermore, these sampling
points may serve as references for alignment of data gained by remote sensing.
    The obtained data are analyzed both in-situ and in detailed lab studies, that
may take several months up to years. Examples of large scale field studies are
measurements and analysis of ice cores [47], and sea sediments [39], as well as
oceanic observation cruises, see the cruises supported by SOPRAN, the German
sub-project of the International SOLAS project (www.solas-int.org) for studies of
e.g. local oceanic aerosol composition [4]. An additional category of field studies
is the investigation of spatially strongly localized phenomena e.g. cave drip water
[37], or measurements of trace gases in volcanic plumes [13].
    Field measurement campaigns are usually very expensive due to the amount of
scientific equipment that has to be transported to the desired locations. A severe
problem in field studies are the given environmental conditions: Usually they cannot
be controlled and must be monitored in all possible detail.



3.3 Remote Sensing Techniques

In recent years remote sensing systems, e.g. satellite observation, have gained more
and more importance in the analysis of global processes, as they can usually cover
large areas with fine local discretization, though in some cases, they do not achieve
the precision of in-situ sample point measurements.
292                                                Alexandra G. Herzog and Felix R. Vogel


    Remote sensing comprises a huge variety of completely different methods.
Examples are the DOAS technique used for trace gas detection like HCHO with
GOME [40], or remote sensing of oceanic wind fields [15], and wave slope via
radar backscatter [58]. Another method is active microwave sensing that allows soil
water measurements in the topmost soil layer, see e.g. [7]. Moreover, remote sensing
is closely linked to image processing as data from remote sensing usually consists
of images, see e.g. [50]. In the last 20 years especially digital image processing has
evolved extremely rapidly, for a review on applications see for example the books
[16] and [34], for classification and statistical methods in image processing see e.g.
[20] and [12]. Also in laboratory studies such image-based techniques are used.
Examples are the determination of bubble distributions in ice cores [55], in air–
sea interaction, IR-imaging for measuring turbulent heat transfer [27, 28], as well
as Laser-induced fluorescence (LIF) or particle image velocimetry (PIV) studies in
fluid dynamics, see [29], and [10] in biomedical research.
    Again it has to be noted, that remote sensing techniques like field studies are also
subject to the environmental conditions during observation and therefore need to
log these conditions as well. The most recent family of experiments is a product of
theoretical model descriptions and computing power: the virtual experiments.



3.4 Virtual Experiments: Direct Numerical Simulation
    in Fluid Dynamics

Virtual experiments mark the current frontier of interaction of physical investigation
and computer science. Here, nature is simulated completely, both the process to
investigate and the measurement equipment are implemented in algorithms.
    One representative of virtual experiments currently used in environmental
physics and in fluid dynamics is the so-called “Direct Numerical Simulation”
(DNS). The differential equation system for transport is used to determine the
dynamical behavior of the system in question using an initial guess and boundary
conditions. Such virtual experiments deliver full information on the flow fields
and scalar transport quantities where direct measurements are extremely difficult
if not impossible in this detail. In DNS, the transport equations are solved directly
without any specific model assumptions on a computational mesh as fine resolved
as necessary to cover all ranges of turbulence that are theoretically expected, see
for example [54] for channel, or [22] for pipe flow. With full information on the
turbulent scalar fields of transported quantities and vector flow fields, simplified
parametric models can be tested or newly developed for certain conditions. Up
to now, classical laboratory experiments have failed to deliver the necessary
detailed information for reliable parameter estimation. This gap is closed by virtual
experiments.
An Application of Robust Parameter Estimation in Environmental Physics              293


3.5 Statistical Analysis: A Link from Measurements
    to Parameter Estimation

Experimental studies and especially field studies have gained much from improved
storing devices and processing of data in modern computers. Furthermore, imple-
mentation of mathematical analysis techniques for time-series, e.g. periodograms,
FT- and wavelet analysis measurement [14], support research in environmental
physics. The same is true for statistical analysis techniques: ANOVA, or significance
tests like t- or F-test have facilitated determining estimates of the error distribu-
tion E of data sets. An identified error distribution sets the statistical framework
for parameter estimation, especially the choice of a suitable norm for evaluating
deviations of model prediction and measurements [51]. In more detail, this allows to
identify the best-suited parameter estimator and allows stochastically-representative
simulations. Even in the case of a linear model this is necessary, see for example
the textbook [41]. A suitable parameter estimator can be linked to the maximum
likelihood approach that determines the best matching norm for a given error
distribution, for example the popular least squares approach with l2 -norm is the
maximum likelihood estimator for a Gaussian distribution, the absolute norm l1 for
a Laplacian error distribution, for details on maximum likelihood see the articles
[23] and [3].
   A special problem are outliers in the data: If the error distribution differs from
the Gaussian assumption, especially if it is a heavy-tailed distribution, the number
of outliers from the Gaussian prediction increases. In the case of influential outliers,
they can prevent the solver from finding an adequate estimate of the desired
parameters. Possible solutions are presented in the following section. After this
detailed presentation of data sources and a short introduction to the influence of
error distributions the next section gives a short overview on parameter estimation
techniques necessary for the application in Sect. 5.
   The topic modeling of processes is not discussed here, as it comprises theoretical
considerations and methods of vast range. Here, we refer the reader to discussions
and publications in the respective communities, some examples in environmental
physics are large scale modeling of global transport models in [51], and applications
on intermediate to small scales in soil physics, see for example [56] and [48].
   It is important to note again, that inverse modeling requires a suitable process
model in advance, that allows a quantitative parametrization of the measured data
sets. In the following we assume that such a model exists.



4 Parameter Estimation from Experimental Data

Inverse modeling is used to determine an optimal parameter set of a theoretical
model with respect to given experimental observations. The model parameters
usually represent single physical system characteristics or comprise several physical
quantities.
294                                                Alexandra G. Herzog and Felix R. Vogel


   Analysis of tomographic data is a typical field of application for inverse
modeling. Current examples in environmental physics may be the tomographic
DOAS method, e.g. [35], the reconstruction of paleotemperature from the isotopic
composition of stalagmites [57], or the determination of soil parameters from
measurements of its electromagnetic properties [60].
   In the current section we give a very brief summary on inverse problems as far
as necessary for Sect. 5. The term “inverse problem” is used here as a synonym
for ill-posed parameter estimation problems. Generally, a function or a vector of a
certain realization of the measurable quantities of interest, the so called states y, is
parametrized by a functional relation G, with parameters p and control variables q,

                                    y D G.p; q/:                                     (1)

Herein, the number of parameters is assumed to be finite. The control variables
q represent the environmental conditions such as temperature that influence the
states y, but can be controlled by the experimenter either directly (e.g. temperature
stabilization in lab studies) or indirectly (e.g. measuring only at certain conditions
in field studies). G as the model of the measurement process may implicitly contain
a system of ordinary (ODE) or partial differential equations (PDE), or a system
of differential algebraic equations (DAE). This is the so-called forward problem,
usually with a (locally) unique solution. The solution of the forward problem is
called “simulation”: G is determined for given p and q.
    In an inverse problem, the parameters p of a given model are to be determined
from a vector of indirect observations, the measured states y meas , by minimizing
the deviation of model and measurements by a suitable choice of parameters, e.g.
see the textbook [36]. The measured values y meas are assumed to be an additive
composition of the model response y true and a random error , that may depend on
the y true ,

                          y meas D G.ptrue ; q/ C .y true /:                        (2)

For a Gaussian distribution the relation is simplified to

                                 yGmeas D y true C ;                                (3)
          p
with  D  as the standard deviation of a distribution with zero mean and
variance .
   The deviation of model prediction and measurements, is called residual r,

                            ri .p/ WD yimeas  Gi .p; q/:                            (4)

The parameters of a local solution should decrease the residuals. In the best case,
the vector of residuals in a solution would correspond to the vector of measurement
errors. A local solution is gained by minimizing the sum of a criterion function .r/,
An Application of Robust Parameter Estimation in Environmental Physics            295


e.g. the best suited lp -norm of the residuals r, with w as positive scale parameters
or weights

                                     X n            
                                              ri .p/
                                 min                  ;                          (5)
                                  pi
                                     i D1
                                                wi

in the sense of a maximum likelihood-type estimation or M -estimation, a general-
ization of maximum likelihood estimators. In the least-squares approach the sum of
the squared residuals is minimized. The criterion function for this case is

                                                    r.p/2
                                  LS .r.p// WD           :                       (6)
                                                     2w
Here, the weights w correspond to the variance  or the squared standard deviation
of the Gaussian distribution. Typically the estimated measurement errors are used
as weighting factors. In that way the measurements with lowest error receive the
highest weight.
   In the case that the error distribution shows deviations from the assumed one,
so-called robust estimators can be used. Robust estimators can be classified by the
definition of a breakdown point. The general idea of the breakdown point is the
smallest fraction of model-inconsistent observations to consistent ones, for which
the estimator can be expected to give correct results [6]. The fraction ranges from
0.0 to 0.5. The maximum possible breakdown point of 0.5 can be achieved by
the median. For details on breakdown point definition and outlier detection see for
example [17] and the textbook [46].
   An example of a robust estimator is Huber’s M -estimator introduced in the
beginning of 1970s [31]. This estimator belongs to the class of iteratively reweighted
least squares (IRLS) methods that can exclude large outliers from minimization by
special criterion functions . The criterion function for Huber’s M -estimator is
                                    (
                                        r.p/2 =2;             if jrj   ;
                    H .r.p// WD                                                  (7)
                                         jr.p/j   =2; if jrj >  .
                                                     2


with  a constant. If  ! 1 Huber’s limit function is the least squares approach.
    For an introduction to maximum likelihood estimators and an introduction to
robust estimators see for example the corresponding chapters in the textbook [41]
or in this collection the article of Kostina et al. [11].
    In contrast to the forward problem of a simulation, in which the system response
to a given input parameter set is calculated, the inverse problem tries to determine
the parameters from a (measured) system response. Inverse problems are usually
“ill-conditioned” in a Hadamard sense, meaning that the solution needs neither to be
unique nor to exist [26]. Regularization strategies, like the Tikhonov regularization,
may be used to deal with ill-posed inverse problems by introducing restrictions on
the solution. The regularization may be achieved by adding a penalty term, e.g. for
296                                               Alexandra G. Herzog and Felix R. Vogel


smoothness, or by multiplying with a non-singular regularization matrix W . For
details on regularization strategies see for example the introductory chapters in the
textbooks [36] and [25]. An introduction to inverse problems for natural scientists
including regularization strategies is given for example in the textbook [53].
    In the next section an example application is shown where the previously
discussed strategies are used. In that problem, Huber’s M -estimator allowed
determining the parameters of an inverse problem, while the least squares estimator
failed, implied by a strong non-Gaussian error distribution.



5 Application: The Spectral Reconstruction Approach

In this section the application of the modeling cycle framework is demonstrated
in an example from small scale air–sea interaction: The reconstruction of water-
sided depth-dependent gas concentrations from spectral measurements via inverse
modeling. This novel technique called SPERA (Spectral Reconstruction Approach)
has been developed at the Institute of Environmental Physics in the group of
Prof. B. Jähne at the University of Heidelberg. The image processing software has
been contributed by the Heidelberg Collaboratory for Imaging (HCI), while the
parameter estimation part has been provided by the Numerical Optimization group
of Prof. E. Kostina, University of Marburg.
   In the combination of an experimental technique, image processing, and param-
eter estimation the resolution could be remarkably refined by a factor of five, giving
concentrations in five individual depth layers instead of only one from a purely
experimentally evaluated technique. First results have been presented in [30]. Small
Scale Air–Sea Interaction as a sub-discipline of environmental physics tries to find
simplified transport equations of heat, momentum, and mass, i.e. gas, especially
near the air–water interface, in and next to the boundary layers, where the main
resistance of transport is located. Important in this context is the determination of
the transport velocities of gases like oxygen and carbon dioxide. Good estimates of
these mass fluxes (commonly given as piston or transport velocities) under various
conditions are of high interest for climate modeling with respect to greenhouse
gases as they allow to predict quantitative gas transport from the atmosphere into
the oceans and vice versa. In that way for example, the ocean acts as the largest sink
of the greenhouse gas carbon dioxide, CO2 . Up to 30–40% of man-made CO2 is
estimated to be transferred into the oceans [19].



5.1 Setup and Basic Concept

The Spectral Reconstruction Approach (SPERA) is a technique that tries to capture
2D turbulent concentration fields in a fluid by analyzing the spectral composition of
the integral fluorescence spectrum detected from above the investigated volume.
An Application of Robust Parameter Estimation in Environmental Physics                            297



a                                            b   c
         prism                  CCD−camera


    integral
    fluorescence
                                  laser


                   lasersheet                         1 cm




Fig. 2 (a) Sketch of the spectral setup in side view for spanwise spectra. Flow direction from right
to left. (b) Integral spectrum taken in a setup sketched in (a). (c) Classical dynamic depth-dependent
concentration 2D-profile parallel to main flow direction at a mean wind speed of 3 ms1 gained
by laser-induced fluorescence. Intensity marks local dissolved gas concentration. Image taken with
a camera system in side-view not in spectral view. For details see text. Wind direction from right
to left


    The setup is shown in Fig. 2a. The water volume of interest is dyed with a combi-
nation of a fluorophore and an absorber dye. Fluorophore concentration is assumed
to be proportional to local gas concentration. Fluorescence is induced by laser
excitation that is coupled in via a dichroitic mirror. The detector system is located at
the top of the water surface. In a classical setup no absorber dye would be present. In
this standard side-setup concentration profiles are gained by a camera in side view,
where the pixel position in the image is correlated to water depth. There intensity
would correspond to local gas concentration. An image gained by this technique is
shown in Fig. 2c. In the presence of an absorber dye this is no longer possible.
    In SPERA concentration gradients of dissolved gases in the aqueous mass
boundary layer are detected above the water surface by spectrally analyzing the
emitted integral fluorescence. The depth information is lost in the recorded image
as the spectrometer only sees a fluorescing line at the water surface, see Fig. 2b.
    The lost depth information has to be extracted from the emitted spectrum by
means of an inverse parameter estimation. The depth-dependent concentrations
appear as the parameters of the inverse problem.
    The technique does not give enough information in its basic setup to solve the
PDE system of transport in three dimensions, but allows to measure two dimensional
concentration fields. SPERA is based on a solely experimental technique developed
in [9] that allows to capture the concentration in the topmost fluid layer the thickness
of which is determined by the concentration of the added absorber dye.
    In combination with robust parameter estimation techniques this experimental
method can decompose the boundary layer in finer sublayers to achieve a concentra-
tion resolution with depth in one single measurement. The method used is actually
a tomographic method with one significant alteration: the position of the detector
is fixed and is not varied over a whole range of radial positions. Here, the integral
298                                               Alexandra G. Herzog and Felix R. Vogel


fluorescent spectrum is detected only at one position above the water surface with a
spectrometer. The integral spectrum is the overlay of spectra emitted at every depth
layer in the water sample below.
   From that integral spectrum the individual spectra coming from different depth
layers can be reconstructed: In the structure of each spectrum the local concentration
at the corresponding depth z and the depth information z itself is coded like a
fingerprint, so each depth and each concentration has its own uniquely formed
fluorescence spectrum. This depth and concentration coding is achieved by the
combined usage of a fluorophore and a second dye that absorbs in the emission
band of the fluorophore. So the depth information can be regained by extracting
the individual depth spectra from the integral spectrum like a vector function is
expanded in its different vector components.



5.2 Measuring

Turbulent processes are unpredictable and have to be captured stochastically.
Therefore, one problem in environmental physics is to store the vast number of
data sets capturing smallest to largest timescales or spatial scales to identify the
dominating frequencies in the fluctuations and the dominating length scales so to
identify the quantities of importance. Especially for quantities that are transported
by a fluid like mass a suitable measurement technique has to be developed that
does not affect the flow field. Typical measurement techniques that have been used
are the so-called Laser-induced fluorescence (LIF) for measuring concentration
and temperature fields, and the Particle Image Velocimetry or PIV to obtain in-
situ velocity fields. These two techniques are commonly used in fluid mechanics
and even allow 3D measurements of the desired quantities without disturbing the
measured quantity. In SPERA, the integral fluorescence of a LIF measurement
plane is recorded with a spectrometer setup sketched in Fig. 2. The resolution of
the wavelength is about 1 nm, which is quite coarse, but the sensitivity of the
camera setup with a CMOS camera allows detection of lowest signal intensities
[33]. Usually the signal is so low that the Poisson statistic of the fluorescence is
dominating the signal fluctuations without additional averaging. In Fig. 3 depth-
dependent fluorescence spectra are plotted.



5.3 Modeling

In SPERA, the model function state represents a theoretical description of the
integral fluorescence intensity L measurable above the water surface. This con-
tinuous spectrum is discretized according to the discrete wavelength resolution of
the detecting spectrometer setup. The emission model of the dye-system gives the
An Application of Robust Parameter Estimation in Environmental Physics                          299


            a
                                                   1
                                                  0.9
            Norm. Fluorescence Intensity [a.u.]   0.8
                                                  0.7
                                                  0.6
                                                  0.5
                                                  0.4
                                                  0.3
                                                  0.2
                                                  0.1
                                                   0
                                                   450    500   550        600      650   700
                                                                Wavelength [nm]
            b
                                                   1
                                                                                   1 mm
                                                                                   4 mm
            Norm. Fluorescence Intensity [a.u.]




                                                                                  16 mm
                                                  0.8


                                                  0.6


                                                  0.4


                                                  0.2


                                                   0
                                                    450   500   550        600      650   700
                                                                Wavelength [nm]

Fig. 3 Depth-dependent fluorescence spectra of a fluorophore combined with an absorber dye
measured by illumination with a single laser beam. Spectra normalized by intensity at the water
surface: (a) measured at the water surface, (b) spectra at water depth of 1 mm, 4 mm, and 16 mm.
Measurement device Ocean Optics Spectrometer 2000



following approximation of the fluorescence spectrum @L.z;/
                                                           @z z in a single depth
layer of thickness z normalized to one degree of spatial angle:
                                                      Z z              
     @Lem .z; /    1                                         0     0 2
                 D    ˚q f ./".L /c.z/EL C O .".L /     c.z / d z / :                        (8)
        @z         4                                   0

The factor 1=4 is the normalization constant of the spatial angle, ˚q is the
quantum yield of the fluorophore, f ./ represents the normalized fluorescence
300                                                        Alexandra G. Herzog and Felix R. Vogel


spectrum, ".L / is the extinction coefficient of the fluorophore at laser wavelength
L , c.z/ is the concentration of the fluorophore, EL the emittance of the laser. This
approximation is valid if the rest term in the last approximation can be neglected
                                           Z z
                                  ".L /         c.z0 / d z0  1:                            (9)
                                            0

This can be achieved by reducing the concentration of the fluorophore accordingly.
A dye concentration satisfying this inequality guarantees a linear relation between
fluorescence intensity and absorption. In fluorescence spectroscopy this case can be
expected for most dyes up to an absorption of 0.05.
   An additionally added absorber dye with extinction coefficient "A ./ modi-
fies this relation in every layer by an exponential factor exp."A ./cA z0 /. The
fluorescence-absorption spectrum that can be measured at the water surface is
calculated as the integral of the fluorescence-absorption spectra of the individual
layers,
                             Z zD1
              L .zI / D
                int
                                           Labsem .z0 I /dz0                               (10)
                                  0
                             Z zD1
                                           @Lem .z0 I /
                         D                               exp."A ./cA z0 /dz0 :            (11)
                                  0           @z0

For the integral fluorescence spectrum this eventually leads to the discretized form
of an infinite sum,
                                           Z zD1
                          :
              Lint .z; / D C f ./                 c.z0 / exp."A ./cA z0 /dz0           (12)
                                             0

                                     X      1
                         :
                         D C f ./    c.zi / exp."A ./cA zi /zi ;                       (13)
                                           i D0


with C WD 41
              ˚q ".L / EL as summarizing constant; the maximum water depth is
assumed to be infinity. This infinite sum can be split up into summands,
                            Z zO                         Z 1
                                      @L                            @L
               Lint ./ D                .I z/ d z C                  .I z/ dz;           (14)
                             0        @z                   Oz       @z

                             O{                                 1
                        : X L                  X L
                        D         .I zi / z C      .I zi / z:                           (15)
                          i D0
                               z                 z
                                                                i DO{


now the question remains from which discretized depth zi with i D {O the rest term
can be neglected, or in other words, which depth no longer significantly contributes
to the integral spectrum. This is equivalent to the fact that the corresponding depth
An Application of Robust Parameter Estimation in Environmental Physics            301


layer can no longer be resolved. The usual limit for influence on the result is a
proportion of the term of approximately p D1%, with respect to the value of the
total sum.
   An estimation of the error term is shown here for an equal discretization
of the depth layers with zi D z D constant and zi D i  z. Furthermore, a
homogeneous distribution of the concentration c of the fluorescent dye is assumed
for estimation: c D constant. As concentration changes are assumed to be small,
this approximation is acceptable for a rough estimation of the error term. All
constant terms are collected in the expression K WD c C f ./z. For calculation
of the error term the discretized infinite sum is rearranged. Herein, the expression
x./ WD exp."A ./cA z/ is used,
                                   1
                               : X
                   Lint .zI / D   c C f ./ exp."A ./cA zi /zi                (16)
                                  i D0

                                    X    1
                               :
                               D K   exp."A ./cA z/i                          (17)
                                         i D0

                                     X    1
                               :
                               D K    x./i :                                    (18)
                                         i D0

This is the geometric series. For jx./j < 1 8  this infinite series is convergent.
Therefore, there exists a certain depth L after which the rest terms can be neglected,

                                                  ln.p/
                                       L                :                        (19)
                                                ln.x.//

Since the absolute value of both p and x./ is smaller than one and both are positive
values, the logarithm is negative and therefore L always positive. Together with the
above made assumptions on the concentration of both fluorophore and absorber dye
this sum can be further approximated to,
                                          ˇ                                  ˇ
                                          ˇ                                  ˇ
                           X            ˇ                                  ˇ
                      :                   ˇ f luo                            ˇ
           Lj j D K 
             int
                                   c.zi / ˇf      .j / exp. "A .j /cA zi /ˇ; (20)
           „ ƒ‚ …                 „ƒ‚…    ˇ „  ƒ‚    …        „   ƒ‚   …     ˇ
              DWLj
                               i    DWci ˇ    DWfj               DW˛j
                                                                             ˇ
                                          „               ƒ‚                …
                                                             DW B.zi ;j /


This can be rewritten as a linear equation system,
   0               1          0                                      10       1
        Lint
          0 .0 /                B.z0 ; 0 /    B.zN 1 ; 0 /        c0
   B         ::    C          B       ::                  ::         C B :: C
   @          :    ADK @              :                   :         A@ : A:      (21)
       int
      LL1 .L1 /              B.z0 ; L1 /    B.zN 1 ; L1 /    cN 1

This formulation forms the basic model for the simulation and the formulation of
the inverse problem.
302                                                        Alexandra G. Herzog and Felix R. Vogel




Fig. 4 Variance–mean plot for the measured data sets plotted as diamonds; theoretical distribu-
tions: dashed: Poisson distribution, dotted: Gaussian distribution; Measurement device: Varian
Eclipse Carrier, AG Herten, BioQuant, Heidelberg



5.4 Statistical Analysis of Experimental Error

As previously discussed, the actual distribution of errors is unknown a priori. This
is also the case in SPERA: The noise distribution of the measured data is expected
to show a strong Poisson-like characteristic due to fluorescence being subject to
Poisson distribution. Yet, due to detector influence this Poisson distribution is altered
by the intrinsic detector statistics. For more details on statistics in LIF measurements
see [18]. They showed that the actual distribution in LIF-signals is an overlay of the
statistics of all involved processes. If the compound error distribution is unknown,
a maximum likelihood estimator can not be determined. In Fig. 4, the variance–
mean plots of one of the tested spectrometers is shown. There the measured values
do support neither the Gaussian nor the Poisson assumptions, and do not seem to
fit a known probability distribution. Given such a case, using a robust estimator
seems appropriate, that can deal with a variety of long-tailed error distributions and
guarantees sufficient robustness against outliers.


5.5 Formulating the Parameter Estimation Problem

After the estimator, here Huber’s-M -estimator, has been chosen, the parameter
estimation problem can be set up,

                      X
                      L1
                                                                              
                                                  model .i ; ci /  Lmeas .i / :
                                                 Lint                 int
               min           Œ1=si Huber                                                   (22)
                 ci
                      i D0
An Application of Robust Parameter Estimation in Environmental Physics                             303


Table 1 Comparison of estimators for simulated data with errors from gamma distribution
Profile    Estimator         c0                      c1                     c2
(I)        True values       1:0  105              5:0  106             1:0  107
                                         5                        6
           Huber             1:00001  10            4:99972  10           1:00105  107
                                           5                     6
           LS                88:2453  10           2515:35  10           17176:6  107
(II)          True values        1:0  107               5:0  106                1:0  105
              Huber              1:00046  107           5:00003  106            0:99998  105
              LS                 7716:61  107           1994:89  106           128:287  105


Table 2 Comparison of estimators for simulated data with errors from log-normal distribution
Profile       Estimator           c0                       c1                     c2
(I)           True values         1:0  105               5:0  106             1:0  107
              Huber               0:999999  105          5:00036  106         0:990427  107
              LS                  0:998000  105          6:12988  106         0:185964  107
(II)          True values         1:0  107               5:0  106             1:0  105
              Huber               0:99402  107           5:00182  106         0:99987  105
              LS                  1:01200  107           5:01480  106         0:99806  105



The si represent estimates of the variance of the measurement errors and act as
scaling or weighting factors. Additional constraints on the solution are not used. For
implementation in software the linear parameter estimation problem is written in
matrix form:
       2   0 1             1 00                                       10      1 0               113
             0
                     0          B.z0 ; 0 /    B.zL1 ; 0 /        c0       Lmeas
                                                                                    0     .0 /
      6    B :          : C    BB       :                  :          CB : C B          :       CC7
  min 6    B
      4K  @ ::         : C  BB       :                  :          CB : C  B        :       CC7 :
                        : A @@          :                  :          A@ : A @          :       AA5
              0    L1
                        1
                                  B.z0 ; L1 /    B.zL1 ; L1 /    cL1      meas
                                                                                  LL1 .L1 /




5.6 Results of the Parameter Estimation

The previously formulated parameter estimation problem has been solved with
both least squares estimator and Huber’s M -estimator. The results are shown in
Tables 1 and 2 for a three layer concentration reconstruction of simulated data sets
with known solution. Profiles I and II represent two typical cases, invasion and
evasion of a gaseous tracer. Gamma and log-normal distribution were used as error
distributions in simulations.
   Least squares estimation failed three out of four data sets, presented here, while
Huber’s M -estimator succeeded in parameter reconstruction for all test cases.
   This result is not a surprising one having the previous sections in mind. Even for
this relatively simple application the error distribution and therefore the appropriate
choice of an estimator has a remarkable effect on reconstructing the solution
successfully, in spite of correct model assumptions. Summarizing, robust estimators
304                                               Alexandra G. Herzog and Felix R. Vogel


that respect heavy-tailed noise distributions are far better suited than the least
squares approach under such conditions.
   For more details on results of the SPERA problem see [30].



5.7 Optimal Experimental Design as Extension
    of the Modeling Cycle

Besides statistical analysis and parameter estimation, also “optimal experimental
design” or “optimal control” are techniques that may be used with SPERA. These
techniques are described in detail for example in [38] and are just mentioned here
briefly for completion of the modeling cycle.
   Optimal experimental design focuses on maximizing the significance of param-
eters estimated from experimental data. This is accomplished by minimizing the
confidence ellipsoid of a parameter of interest, hence the error estimate of this
parameter. The confidence ellipsoid can be minimized by minimizing a criterion
function on the covariance matrix of the model-constraint system, for example
the largest eigenvalue of the covariance matrix. In that way optimal experimental
design corresponds to a non-linear optimization problem. The parameters to be
determined are the control parameters and functions q (measurement parameters
like temperature, pressure, humidity, etc.), the weights w, as well as the number
and spatial/temporal positioning of the measurements. The optimal solution of an
experimental design problem determines the best suited run of the controllable
parameters. This run is typically extremely difficult to find by experimental trial
and error. The potential of optimal experimental design has been demonstrated in
various applications in science and industry, see e.g. the articles [5, 8], or [49]. In
that respect, optimal experimental design can be regarded as an extension of the
modeling cycle as presented in Fig. 1, Sect. 2. It is a technique that uses simulated
virtual experiments on the basis of an available process model to predict optimal
experiments for determining the model parameters, e.g. with lowest errors. These
predicted experiments can now be validated by conducting real experiments accord-
ingly and analyzing deviations from prediction and actual realization. Therefore it
can be included as a part IV in the modeling cycle, see Fig. 5.
   In laboratory studies optimized experiments can be realized relatively easy as
controllable environmental conditions are common. In field studies the situation is
more difficult: environmental conditions are almost impossible to control or repro-
duce. Nonetheless, there are approaches to choose at least conditions (e.g. times
when to take samples) under which measuring would be most preferable. Under
such terms, the application of optimal experimental design seems possible to a
certain degree. This has already been discussed for field studies, e.g. in [21]
20 years ago. Optimal experimental design for SPERA is also limited, yet possible:
In wind-wave tunnel experiments with their dynamics usually far away from
stationarity, controlling steering functions like temperature or pressure is difficult.
An Application of Robust Parameter Estimation in Environmental Physics                                305


                                                Experiment




                                        ta l
                                         n
                Validation                                                    Exp. Verification




                                      me
                              De peri




                                                              An
                                                                 aly
                                    n
                                 Ex
                                sig




                                                                    sis
                            al
                                               IV            I
                         tim
                         Op
                      Virtual                                                 Model
          and       Experiment
                         Pa




                                             III             II



                                                                        ion
                         ram


                                   Sim




                                                                     tat
                             ete




                                                                   en
                                     ula




                                                                    m
                              rE


                                        tio




                                                                 ple
          Optimization
                               sti




                                                                                 Math. Verification
                                         n




                                                              Im
                                   ma
                                   tio
                                    n




                                                 Numerical
                                                  Model

Fig. 5 The iteration cycle of model development as basic concept extended with optimal
experimental design as part IV. For this extension a suitable model formulation is absolutely
required


However, for measurements in convection tanks in which pressure and temperature
can be controlled much more readily this problem is avoided. So for this special
configuration SPERA may be optimized to gain maximum information out of the
data sets.
   Summarizing, whenever an experimental setup allows steering of control param-
eters or functions optimal experimental design can be applied.



6 Summary

The specific error distribution of a measurement technique can differ from the
standard assumption of a Gaussian distribution. This will affect the choice of an
appropriate estimator if these data sets are intended to determine model parameters
in an inverse problem. In the case of heavily tailed non-Gaussian error distribution
the use of robust estimators is indicated. Huber’s M -estimator is one example of
a robust iteratively reweighted least squares method, that may be applied to such a
problem.
   In an example from current research in environmental physics, the spectral recon-
struction approach (SPERA), Huber’s M -estimator improved parameter reconstruc-
tion significantly: Previous tests with a least squares estimator failed. Simulated
data sets with known model parameters were used for a detailed illustration of this
problem for SPERA, see Table 2. Here, the basic combination of an experimental
method from air–sea interaction research and robust parameter estimation allowed
the successful reconstruction of the desired vertical concentration profiles.
306                                                      Alexandra G. Herzog and Felix R. Vogel


    This article tried to present the basics concepts of robust parameter estimation
for practical applications especially in environmental physics including the effects
of error distributions on the choice of the estimator. Furthermore, an example
application from current research was provided using a robust estimator that is
widely available, e.g. in standard software packages like Matlab, so that the transfer
to the reader’s research problems is facilitated.

Acknowledgements We gratefully acknowledge financial support by the DFG Research Training
Group 1114 ’Optical Techniques for Measurement of Interfacial Transport Phenomena’ and the
Heidelberg Graduate School of Mathematical and Computational Methods for the Sciences, as
well as Synmikro, Marburg. Moreover, we want to thank our colleagues for their support, especially
Tanja Binder (Marburg), Pascal Bohleber, Evelyn Böhm, Samuel Hammer, Barbara May, Gabriele
Schenk, and Martin Wieser (all Institute of Environmental Physics, Heidelberg). Furthermore,
special thanks go to Felix Friedl for performing the measurements shown in Fig. 3 and the group
of PD D.P. Herten, BioQuant, Heidelberg, for giving us the opportunity to use their fluorescence
spectrometer.



References

 1. W. Aeschbach-Hertig, F. Peeters, U. Beyerle, and R. Kipfer. Interpretation of dissolved
    atmospheric noble gases in natural waters. Water Res. Research, 35, 1999.
 2. R. Ahmadov, C. Gerbig, R. Kretschmer, S. Körner, C. Rödenbeck, P. Bousquet, and
    M. Ramonet. Comparing high resolution WRF-VPRM simulations and two global CO2
    transport models with coastal tower measurements of CO2 . Biogeosciences, 6:807–817, May
    2009.
 3. J. Aldrich. R. A. Fisher and the making of maximum likelihood 1912-1922. Stat. Sci., 12:162–
    176, 1997.
 4. J. D. Allan, D. O. Topping, N. Good, M. Irwin, M. Flynn, P. I. Williams, H. Coe, A. R. Baker,
    M. Martino, N. Niedermeier, A. Wiedensohler, S. Lehmann, K. Mller, H. Herrmann, , and
    G. McFiggans. Composition and properties of atmospheric particles in the eastern atlantic and
    impacts on gas phase uptake rates. Atmos. Chem. Phys., 9:9299–9314., 2009.
 5. A. E. Altmann-Dieses, J. P. Schlöder, H. G. Bock, and O. Richter. Optimal experimental design
    for parameter estimation in column outflow experiments. Water Resour. Res., 38:1186–1197,
    2002.
 6. R. Andersen. Modern Methods for Robust Regression. Sage Publications, 2008.
 7. K. Anderson and H. Croft. Remote sensing of soil surface properties. Prog. Phys. Geog.,
    33(4):457 – 473, 2009.
 8. H. Arellano-Garcia, J. Schöneberger, and S. Körkel. Optimale Versuchsplanung in der
    chemischen Verfahrenstechnik. Chem. Ing. Tech., 79:1625–1638, 2007.
 9. W. E. Asher and J. F. Pankow. Direct observation of concentration fluctuations close to a
    gas-liquid interface. Chem. Eng. Sci., 44:1451–1455, 1989.
10. A. Berthe, D. Kondermann, C. Christensen, l. Goubergrits, C. S. Garbe, K. Affeld, and
    U. Kertzscher. Three-dimensional, three-component wall-PIV. Exp. Fluids, 48:983–997, 2010.
11. T. Binder and E. Kostina. Gauss-Newton methods for robust parameter estimation. In
    H. G. Bock et al., editor, Model Based Parameter Estimation, Contributions in Mathematical
    and Computational Sciences 4, pages 53–85. Springer, 2012.
12. C. M. Bishop. Pattern Recognition and Machine Learning, volume 1. Springer, 2007.
13. N. Bobrowski, G. Hünninger, F. Lohberger, and U. Platt. Idoas: A new monitoring technique to
    study the 2D distribution of volcanic gas emissions. J. Volcanol. Geotherm. Res., 4:329–338,
    2006.
An Application of Robust Parameter Estimation in Environmental Physics                             307


14. G. E. P. Box, G. M. Jenkins, and G. C. Reinsel. Time Series Analysis: Forecasting and Control.
    Wiley, 4 edition, 2008.
15. D. B. Chelton, M. G. Schlax, M. H. Freilich, and R. F. Milliff. Satellite measurements reveal
    persistent small-scale features in ocean winds. Science, 303:978–983, 2004.
16. E. R. Davies. Maschine Vision. Theory, Algorithms, Practicalities, volume 3. Academic Press,
    2005.
17. P. L. Davies and U. Gather. Unmasking multivariate outliers and leverage points. Stat. Journ.,
    5(1):1–17, 2007.
18. N. Dimarcq, V. Giordano, and P. Cerez. Statistical properties of laser-induced fluorescence
    signals. Appl. Phys. B Lasers O., 59:135–145, 1994.
19. M. A. Donelan and R. Wanninkhof. Gas transfer at water surfaces - conepts and issues. In
    M. A. Donelan, W. M. Drennan, E. S. Saltzman, and R. Wanninkhof, editors, Gas Transfer at
    Water Surfaces. American Geophysical Union, 2002.
20. R. O. Duda, P. E. Hart, and D. G. Stork. Pattern Classification, volume 2. John Wiley and
    Sons, 2000.
21. L. L. Eberhardt and J. M. Thomas. Designing environmental field studies. Ecol. Mono., 61:53–
    73, 1991.
22. B. Eckhardt, A. Schmiegel, H. Faisst, and T. Schneider. Dynamical systems and the transition
    to turbulence in shear flows. Phil. Trans. R. Soc. A, 366(1868):1297–1315, 2008.
23. R. A. Fisher. An absolute criterion for fitting frequency curves. Mess. Math., 41:155–160,
    1912.
24. C. Geels, M. Gloor, P. Ciais, P. Bousquet, P. Peylin, A. T. Vermeulen, R. Dargaville, T. Aalto,
    J. Brandt, J. H. Christensen, L. M. Frohn, L. Haszpra, U. Karstens, C. Rödenbeck, M. Ramonet,
    G. Carboni, and R. Santaguida. Comparing atmospheric transport models for future regional
    inversions over Europe. Part 1: Mapping the CO2 atmospheric signals. Atmos. Chem. Phys.
    Discuss., 6:3709–3756, May 2006.
25. P. E. Gill, W. Murray, and M.H. Wright. Practical Optimization. Academic Press, INC, 1981.
26. J. Hadamard. Sur les problèmes aux dérivées partielles et leur signification physique. Princeton
    University Bulletin, 13:49–52, 1902.
27. T. Hara, E. VanInwegen, J. Wendelbo, C. S. Garbe, U. Schimpf, B. Jähne, and N. Frew.
    Estimation of air-sea gas and heat fluxes from infrared imagery based on near surface
    turbulence models. In C. S. Garbe, R. A. Handler, and B. Jähne, editors, Transport at the
    Air Sea Interface - Measurements, Models and Parametrizations. Springer-Verlag, 2007.
28. H. Haußecker, U. Schimpf, C. S. Garbe, and B. Jähne. Physics from IR image sequences:
    Quantitative analysis of transport models and parameters of air-sea gas transfer. In E. Saltzman,
    M. Donelan, W. Drennan, and R. Wanninkhof, editors, Gas Transfer at Water Surfaces, volume
    127 of Geophysical Monograph. American Geophysical Union, 2002.
29. I. Herlina and G. H. Jirka. Experiments on gas transfer at the air–water interface induced by
    oscillating grid turbulence. J. Fluid. Mech., 594:183–208, 2008.
30. A. G. Herzog, T. Binder, B. Jähne, and E. A. Kostina. Estimating water-sided vertical gas
    concentration profiles by inverse modeling. In 2. International Conference on Engineering
    Optimization, Lisbon, September 2010.
31. P. J. Huber. Robust statistics: A review. Annals of Mathematical Statistics, 43:1041–1067,
    1972.
32. IPCC. Climate change 2007: The physical science basis. Contribution of working group I to
    the fourth assessment report of the intergovernmental panel on climate change, 2007.
33. B. Jähne. Digitale Bildverarbeitung, 6. Auflage. Springer, 2005.
34. B. Jähne, H. Haußecker, and P. Geißler, editors. Handbook of Computer Vision and
    Applications. Academic Press, 1999.
35. M. Johansson, B. Galle, C. Rivera, and Y. Zhang. Tomographic reconstruction of gas plumes
    using scanning DOAS. B. Volcanol., 71:1169–1178, 2009.
36. J. Kaipio and E. Somersalo. Statistical and Computational Inverse Problems. Applied
    Mathematical Sciences. Springer, 1 edition, 2004.
308                                                        Alexandra G. Herzog and Felix R. Vogel


37. T. Kluge, D. F. C. Riechelmann, M. Wieser, C. Spötl, J. Sültenfuß, A. Schröder-Ritzrau,
    S. Niggemann, and W. Aeschbach-Hertig. Dating cave drip water by tritium. J. Hydrol.,
    394:396–406, 2010.
38. S. Körkel. Numerische Methoden für Optimale Versuchsplanungsprobleme bei nichtlinearen
    DAE-Modellen. PhD thesis, Univ. Heidelberg, 2002.
39. J. Lippold, J. Grützner, D. Winter, Y. Lahaye, A. Mangini, and M. Christl. Does sedimentary
    231
        Pa=230 Th from the bermuda rise monitor past atlantic meridional overturning circulation?
    Geophys. Res. Lett., 36:L12601, 2009.
40. T. Marbach, S. Beirle, U. Platt, P. Hoorand F. Wittrock, A. Richter, M. Vrekoussis, M. Grze-
    gorski, J. P. Burrowsand, and T. Wagner. Satellite measurements of formaldehyde from
    shipping emissions. Atmos. Chem. Phys., 9, 2009.
41. D.C. Montgomery, E. A. Peck, and G. G. Vinning. Introduction to Linear Regression Analysis.
    Wiley InterScience, 4 edition, 2006.
42. R. R. Nemani, C. D. Keeling, H. Hashimoto, W. M. Jolly, S. C. Piper, C. J. Tucker, R. B.
    Myneni, and S. W. Running. Climate-driven increases in global terrestrial net primary
    production from 1982 to 1999. Science, 300:1560–1563, June 2003.
43. W. L. Oberkampf, T. G. Trucano, and C. Hirsch. Verification, validation, and predictive
    capability in computational engineering and physics. Appl. Mech. Rev., 57(5):345–385, 2004.
44. U. Platt and J. Stutz. Differential Optical Absorption Spectroscopy, Principles and Applica-
    tions. Physics of Earth and Space Environments. Springer-Verlag, Berlin, Heidelberg, New
    York, 2000.
45. F. Rezanezhad, H. J.Vogel, and K.Roth. Experimental study of fingered flow through initially
    dry sand. Hydr. Earth Syst. Sci. Disc., 3:2595– 2620, 2006.
46. P. J. Rousseeuw and A. M. Leroy. Robust Regression and Outlier Detection. John Wiley &
    Sons, 1987.
47. U. Ruth, D. Wagenbach, R. Mulvaney, H. Oerter, W. Graf, H. Pulz, and G. Littot. Compre-
    hensive 1000 year climatic history from an intermediate depth ice core from the south dome
    berkner island, antarctica: methodics, dating, and first results. Ann. Glaciol., 39:146–154, 2004.
48. K. Schneider-Zapp, O. Ippisch, and K. Roth. Numerical study of the evaporation process and
    parameter estimation analysis of an evaporation experiment. Hydrol. Earth Syst. Sci., 14:765–
    781, 2010.
49. Schöneberger, J. C., H. Arellano-Garcia, G. Wozny, S. Körkel, and H.Thielert. Model-based
    experimental analysis of a fixed-bed reactor for catalytic SO2 oxidation. Ind. & Eng. Chem.
    Res., 48(11):5165–5176, 2009.
50. R. A. Schowengerdt. Remote Sensing: Models and Methods for Image Processing, volume 3.
    Academic Press, 2006.
51. T. Stocker, Q. Dahe, G.-K. Plattner, M. Tignor, and P. Midgley. IPCC expert meeting on
    assessing and combining multi model climate projections. Boulder, Colorado, USA, 25-27
    January 2010.
52. T. Takahashi, S. C. Sutherland, C. Sweeney, A. Poisson, N. Metzl, B. Tilbrook, N. Bates,
    R. Wanninkhof, R. A. Feely, C. Sabine, J. Olafsson, and Y. Nojiri. Global sea-air CO2 flux
    based on climatological surface ocean pCO2 , and seasonal biological and temperature effects.
    Deep Sea Res. Pt II, 49(9-10):1601 – 1622, 2002.
53. A. Tarantola. Inverse Problem Theory and Methods for Model Parameter Estimation. SIAM,
    2005.
54. W. Tsai and L. P. Hung. Three-dimensional modeling of small-scale processes in the upper
    boundary layer bounded by a dynamic ocean surface. J. Geophys. Res., 112:C02019, 2007.
55. K. J. Ueltzhöffer, V. Bendel, J. Freitag, S. Kipfstuhl, D. Wagenbach, S. H. Faria, and C. S.
    Garbe. Distribution of air bubbles in the EDML and EDC (antarctica) ice cores, using a new
    method of automatic image analysis. J. Glaciol., 56(196):339–348, 2010.
56. J. Šimůnek and S.A. Bradford. Vadose zone modeling: Introduction and importance. Vadose
    Zone J., 7:581–586, 2008.
57. A. Wackerbarth, D. Scholz, J. Fohlmeister, and A. Mangini. Modelling the ı 18 o value of cave
    drip water and speleothem calcite. Earth Planet. Sci. Lett., 299:387–397, 2010.
An Application of Robust Parameter Estimation in Environmental Physics                      309


58. E. J. Walsh, C. W. Wright, M. L. Banner, D. C. Vandemark, B. Chapron, J. Jensen, and
    S. Lee. The southern ocean waves experiment.Part III: Sea surface slope statistics and near-
    nadir remote sensing. J. Phys. Oceanogr., 38:670–685, 2008.
59. R. Wanninkhof, W. E. Asher, D. T. Ho, C. Sweeny, and W. R. McGillis. Advances in
    Quantifying Air-Sea Gas Exchange and Environmental Forcing. Ann. Rev. Mar. Sci., 1:213–
    244, 2009.
60. U. Wollschläger, T. Pfaff, and K. Roth. Field-scale apparent hydraulic parameterisation
    obtained from tdr time series and inverse modeling. Hydrol. Earth Syst. Sci., 13:1953–1966,
    2009.
Parameter Estimation in Image Processing
and Computer Vision

Christoph S. Garbe and Björn Ommer




Abstract Parameter estimation plays a dominant role in a wide number of image
processing and computer vision tasks. In these settings, parameterizations can be
as diverse as the application areas. Examples of such parameters are the entries of
filter kernels optimized for a certain criterion, image features such as the velocity
field, or part descriptors or compositions thereof. Subsequently, approaches for
estimating these parameters encompass a wide range of techniques, often tuned to
the application, the underlying data and viable assumptions. Here, an overview of
parameter estimation in image processing and computer vision will be given. Due to
the wide and diverse areas in which parameter estimation is applicable, this review
does not claim completeness. Based on selected key topics in image processing and
computer vision we will discuss parameter estimation, its relevance, and give an
overview over the techniques involved.


1 Introduction

In most image processing and computer vision tasks, one starts off with visual data
such as an image or a sequence thereof. Of course, more general modalities are
also becoming increasingly more common. These include spectral image sequences
for example in satellite remote sensing or volumetric or even spectral volumetric
time series, for example in state-of-the-art medical imaging devices. Cheap con-
sumer devices are also transitioning beyond simple 2D capturing apparatuses. The
Microsoft Kinect device, which captures intensity images and the scene depth at the
same time, is an example of this. Also, first consumer grade cameras that capture
light fields are on the horizon. All of these devices require adapted image processing


C.S. Garbe ()  B. Ommer
Interdisciplinary Center for Scientific Computing (IWR), University of Heidelberg,
Speyerer Str. 6, 69115 Heidelberg, Germany
fChristoph.Garbe,Bjoern.Ommerg@iwr.uni-heidelberg.de

H.G. Bock et al. (eds.), Model Based Parameter Estimation, Contributions             311
in Mathematical and Computational Sciences 4, DOI 10.1007/978-3-642-30367-8 15,
© Springer-Verlag Berlin Heidelberg 2013
312                                                           C.S. Garbe and B. Ommer


and computer vision algorithms. Common to all of them is the classical inverse
problem they lead to: n-dimensional data is acquired and some model parameters
need to be estimated to best describe the data. Of course, the model will strongly
depend on the application, as will the metric in which ”best” is described by some
sort of optimality condition. In this contribution, some common problems in image
processing and computer vision will be described. Common methodologies for
solving the resulting parameter estimation problem are presented.
    This article is organized into two main parts, the first focusing on parameter
estimation in low-level image processing, the second on high-level computer
vision. In Sect. 2.1, parameter optimization for filter kernels will be introduced.
The estimation of image motion or optical flow is outlined in Sect. 2.2. The
reconstruction of images and optical flow fields is discussed in Sects. 2.4 and 2.5
respectively. The estimation of confidence and situation measures for optical flows is
presented in Sect. 2.3. The segmentation of images based on their underlying motion
is touched upon in Sect. 2.6. A combination of such approaches in a single functional
is presented in Sect. 2.7 which is concerned with joint estimation of optical flow,
segmentation and denoising of image sequences.
    Parameter estimation in high level computer vision is presented in Sect. 3.
Central to the analysis are key modeling decisions which are explained in Sect. 3.1.
In Sect. 3.2 a compositional approach to object categorization is presented. The
problem of object detection in cluttered scenes is discussed in Sect. 3.3.



2 Low-Level Image Processing

2.1 Optimization of Filter Kernels

A fundamental operation in image processing represents the filtering of intensity
images. Such filtering is used for computing derivative filters of first order for
motion estimating and for edge detection, and second or higher order for feature
extraction of curvature information. Filter design is a well-established area in time-
series signal processing and subject of standard textbooks [103, 107, 113]. The
extension from 1-D signal processing to image processing is not trivial, however.
This is largely due to uncertainty of design criteria for higher-dimensional signals
and much more involved mathematical problems.
    For edge detection and motion estimation, the computation of precise gradients
of image intensities is vital. It can be show that the highly accurate computation
of both, orientation and magnitude of gradients, are not feasible. Therefore, design
choices have to be made. Very often, subspace problems, which are orthogonal to
the gradient directions have to solved. Hence the precise direction of the gradients
is more important that their magnitude. Making such a design choice leads to the
formulation of a optimization problem, yielding the appropriate filter kernels. These
filters are discretized by finite differences using convolution kernels optimized with
respect to the model assumptions, scales and/or noise present in the data.
Parameter Estimation in Image Processing and Computer Vision                       313


2.2 Optical Flow Estimation

For the estimation of motion from digital image sequences, a number of differ-
ent techniques has been proposed. Generally, they can be categorized into four
groups:
1. The class of gradient based techniques relies on computing spatio-temporal
   derivatives of image intensity, which can either be of first order [46,65] or second
   order [93, 115].
2. Region-based matching may be employed when under certain circumstances
   (aliasing, small number of frames, etc.) it is inappropriate to compute derivatives
   of grey-values. In this approach the velocity is defined as a shift giving the best
   fit between image regions at different times [7, 55, 80].
3. The energy-based methods rely on the output energy of velocity-tuned filters.
   These methods are often referred to as frequency-based methods owing to their
   design in the Fourier domain [1, 50, 62].
4. Another class of methods is called phase-based, because velocity is defined in
   terms of phase behavior of band-pass filter output and phase information is used
   to estimate the optical flow [51, 122].
    Overviews of these estimators including error analysis can be found in [11,
12, 60]. One widely used technique to estimate the local optical flow v.t; x/
corresponding to an image sequence u W Œ0; 1  ˝ ! R on an image domain
˝  Rn (n D 2; 3) is the first order gradient based approach [46,65]. Together with
phase based techniques [51], this approach offers the best performance with respect
to accuracy [11,53]. Here, constancy of gray values u.t; x.t// along trajectories x.t/
is assumed, leading to the constraint equation

                      d
                 0D      u.t; x.t// D ru.t; x.t//  v.1; x.t// C @t u.t; x/ :      (1)
                      dt
This constraint equation is generally known as the brightness change constraint
equation (BCCE). The BCCE gives us one constraint for two unknowns for image
sequences or three unknowns for volume sequences. Thus it is an ill posed problem,
which is also known as the aperture problem and only the component of the velocity
orthogonal to gray-value structures can be computed from (1). Let us assume that v
is at least locally constant. One approach to solve the aperture problem for locally
constant v was presented by Guichard [59]. The aperture problem can also be
solved locally with the Lucas–Kanade approach [82,83] or with the structure tensor
approach [21] which minimizes the local energy functional
           Z 1Z
                      w.x  y; t  s/ .ru.s; y/  v.s; y/ C @t u.s; y//2 dy ds :   (2)
             0    ˝

Here w.  ;  / is a window function, indicating the local spatio-temporal neighbor-
hood. These local approaches offer relatively high robustness with respect to noise
314                                                                  C.S. Garbe and B. Ommer




Fig. 1 On a traffic scene plotted motion vectors indicate regions, where a local flow estimater
achieves reliable results. For significantly large regions the velocity can not be computed


and allow for a computation of confidence and type measures, which characterize
the quality of estimates. Generally, they do not lead to dense flow fields (cf. Fig. 1).
However, global variational estimators as discussed below lead by design to fully
dense flow fields but are known to be more sensitive to noise.


2.2.1 Global, Variational Methods for Optical Flow Estimation

The study of variational methods in optical flow estimation started with the classical
work of Horn and Schunk in 1984 [65]. They considered minimizers of the energy
functional                  Z
                     EŒv D    Œ.@t u; ru/  .1; v/2 C ˛jrvj2 ıx                  (3)
                                 ˝

acting on image intensities u W Œ0; 1  ˝ ! R at decoupled time steps t 2 Œ0; 1.
Thereby they implicitly assume the optical flow field v W Œ0; 1  ˝ ! Rn to be
spatially smooth. Here, the scalar ˛ denotes the constant weighting parameter of
the regularizer. Nagel and Enkelmann [94] replaced the second, regularizing term
˛jrvj2 by a quadratic form
                                     Z
                                             rv  J  Œurvıx                              (4)
                                         ˝

which involves the local structure tensor J  Œu of the image ( indicates the involved
filter width) and allows for a significant change in v across image edges indicated
by steep image gradients. Alternatively,
                              R           one can replace the quadratic regularization
by a BV type regularization ˝ jrujıx as presented by Cohen [36] or other convex
regularizers as considered by Weickert and Schnörr [123]. Connections to shape
optimization have been exploited by Schnörr [108]. Weickert et al. [26] proposed a
Parameter Estimation in Image Processing and Computer Vision                       315


combination of local flow estimation and global variational techniques to combine
the benefits of robustness and dense field representation, respectively. A broader
comparison of different regularization techniques involving quasi-convex function-
als has been given by Hinterberger et al. [63]. In particular they consider W 1;p -
approximation or BV type functionals. Applying multi-grid methods in the solution
of the Euler Lagrange equations for the above combined global-local method was
presented by Bruhn et al. [25]. In all these approaches the choice of the regulariza-
tion terms basically determines the class of admissible flow fields. A rigorous anal-
ysis of assumptions on the flow field under which global minimizers of the non reg-
ularized variational problem can be found was given by Lefébure and Cohen [76].
   In general, numerical algorithms for the minimization tend to get stuck in local
minima. Alvarez et al. [84] proposed to consider a scale space approach to solve
this problem. Starting to correlate coarse representations of subsequent images in
an image sequence via an optical flow field or a deformation, one proceeds on suc-
cessively finer representation until the actual fine scale images are properly matched.



2.3 Confidence and Situation Measures for Optical Flows

In order to detect artifacts and erroneous flow vectors in optical flow fields, one
can analyze confidence and situation measures. Confidence measures are used to
estimate the correctness of flow fields, based on information derived from the image
sequence and/or the displacement field. Based on proposed techniques, two kinds
of confidence measures can be distinguish: situation and confidence measures.
Situation measures are used to detect locations, where the optical flow cannot be
estimated unambiguously. This is contrasted by confidence measures, which are
suited for evaluating the degree of accuracy of the flow field based. Situation mea-
sures can be applied e.g., in image reconstruction [87], to derive dense reliable flow
fields [110] or to choose the strength of the smoothness parameter in global methods
(e.g., indirectly mentioned in [72]). Confidence measures are important for quanti-
fying the accuracy of the estimated optical flow fields. A successful way to obtain
robustness to noise in situation and confidence measures is also discussed in [70].
    Confidence measures employed are generally chosen as innate to the flow
estimation technique. By combining flow methods with non-inherent confidence
measures [70] were able to show considerable improvements for confidence and
situation measures. Altogether the results of the known measures are only partially
satisfactory as many errors remain undetected and a large number of false positive
error detections have been observed. Based on a derived optimal confidence map
they obtain the results in Fig. 2 for Lynn Quam’s Yosemite sequence [61], and the
Street [90] test sequences.
    For variational methods, the inverse of the energy after optimization has been
proposed as a general confidence measure in [27]. For methods not relying on
global smoothness assumptions, e.g., local methods, a new confidence measure
based on linear subspace projections was proposed in [69]. The idea is to derive a
316                                                                  C.S. Garbe and B. Ommer




Fig. 2 Comparison of optimal confidence measure (left) to best known confidence measure (right)
for Yosemite and Street sequences


spatio-temporal model of typical flow field patches using e.g., principal component
analysis (PCA). Using temporal information the resulting eigenflows represent
complex temporal phenomena such as a direction change, a moving motion
discontinuity or a moving divergence. Then the reconstruction error of the flow
vector is used to define a confidence measure.



2.4 Image Restoration

An active field of research is the restoration of damaged paintings or, in case
of digital images, the reconstruction of blank image regions based on image
information outside this area. It was first proposed by Masnou and Morel [87] and
named “disocclusion.” The term “inpainting” was introduced by Bertalmio et al.
[17], Ballester et al. [9] proposed a variational approach based on the continuation
of contours of equal luminance in the image, also called isophote lines. A variational
approach based on level set perimeter and mean curvature was presented by
Ambrosio and Masnou in [3]. Other approaches have been proposed for image
inpainting, e.g., TV-inpainting and curvature-driven diffusion inpainting suggested
by Chan and Shen [34, 35].
   In general the problem of inpainting is stated as follows: Given an image u0 W
˝ ! R and an inpainting domain D  ˝, one asks for a restored image intensity
u W ˝ ! R, such that uj˝nD D u0 and ujD is a suitable and regular extension of
the image intensity u0 outside D. The simplest inpainting model is based on the
construction of a harmonic function u on D with boundary data u D u0 on @D.
  R model2 is equivalent to the minimization of the Dirichlet functions Eharmon Œu D
This
2 D kruk ıx for given boundary data, as can be derived from Dirichlet’s principle.
1

Due to standard elliptic regularity the resulting intensity function u is smooth
inside D. This means that edge information present on the boundary will not be
restored in the inpainted area. An overview on first order variational functionals
related to this problem has been given by Chan and Shen [31, 32]. To resolve this
shortcoming, TV-type inpainting models R     have been proposed [29, 30]. They are
based on the functional ETV Œu D 12 D krukıx, which allows for steep transitions
on some edge contour. The resulting image intensity is a Bounded Variation (BV)
Parameter Estimation in Image Processing and Computer Vision                       317


function and thus characterized by jumps along rectifiable edge contours. In a weak
sense, it solves the geometric PDE h D 0 with Neumann boundary conditions,
where h D div .kruk1 ru/ is the mean curvature on level sets or edge contours.
Thus the resulting edges will be straight lines.
   This issue of straight lines has been overcome in later work by [30,33]. Here, the
functional of the energy is based on the curvature of the intensity level curves. This
enforces a smooth transition between the level curves. The equations obtained from
such models are highly nonlinear and of higher (fourth) order. Recently, Bredies
et al. [24] proposed an approach for higher order TV which significantly improves
on stair-casing effects often found in TV regularization. Such an approach has been
applied to denoising depth images of Time-of-Flight (ToF) imagers [78].
   In many applications the assumption of a sharp boundary @D of the corrupted
region turns out to be a significant restriction. In fact the reliability of the given
image intensity gradually deteriorates from the outside to the inside of the inpainted
region. This can be reflected by a relaxed formulation of the variational problem.
One considers the functional
                            Z
                   e Œu D     ju  u0 j H C .1  H /krukp ıx ;                 (5)
                              ˝

where  > 0, p D 1 or 2, and H is a convoluted characteristic function D and
 > 0 indicates the width of the convolution kernel.
   Frequently, one aims for a better continuation of image structures from outside
the destroyed region. Mumford [92] phrased this problem in terms of a minimization
of elastic energy of curves or surfaces M treated as elastic rods or shells and C 1
continuity conditions on @D. Morel and Masnou [86, 88] have further exploited the
relation to a minimization of the Willmore functional
                                           Z
                                        1
                               EŒ M  D        h2 da;                           (6)
                                        2 M

where h is the mean curvature of the manifold M . They explicitly construct
continuations of level lines in an occluded image region D as parameterized
minimizers of the Willmore energy. Ambrosio and Masnou [4] revisited this
problem in the context of geometric measure theory and derived minimizers of an
implicit formulation of the Willmore energy
                                    Z                    2
                                                    ru
                           EŒu D        div                   jrujıx:             (7)
                                     D             jruj

General properties of such variational problems have been discussed by Bellettini
et al. in [13]. Chen et al. [35] presented a finite difference relaxation algorithm for
this Willmore functional and applied it to image inpainting. Esedoglu and Shen
[44] proposed a phase field approximation of the Willmore energy and used a
parabolic relaxation in their concrete minimization algorithm. Bertalmio et al. [16]
and Ballester et al. [9] relaxed the Willmore functional and studied the simultaneous
318                                                                C.S. Garbe and B. Ommer

                                           ru
extension of the image’s normal field  D jruj and the intensity u. This resulted to
the minimization of the energy
                     Z
         EŒ; u D           .jr.t;x/ uj    ru/ C .div /p .a C bjrG  uj/ıx ;      (8)
                         D

where G is a Gaussian smoothing kernel. For  they impose the constraint jj  1.
Obviously, the first energy integrant is zero if  coincides with the image normal.
Thus, for p D 2 the second term approximates the Willmore energy on the ensemble
of level sets on D. Dirichlet boundary conditions for u and  are assumed.
   A different approach has been considered by Bertalmio, Bertozzi and Sapiro
[18] connecting fluid dynamics and image inpainting. A vorticity formulation of
the stationary Navier–Stokes equations with zero viscosity can be written in terms
of the stream function 
                                 r ?  r  D 0 ;                               (9)
where r ? denotes the orthogonal gradient and v D r ?  the velocity field of the
flow. The connection to image processing is drawn by replacing  by the image
intensity u. One tries to find a solutions of the above equation under boundary
conditions for the intensity u and the direction of level lines r ? u. In terms of
physics, this can be thought of as the solution to the transport of the outside
image into the hole D which solves the stationary Navier–Stokes equations. The
corresponding algorithm is based on a third order, parabolic relaxation

                                    @t u  r ? u  r u D 0 :                         (10)

   Recently, texture inpainting has attracted attention. Bertalmio et al. [19] proposed
a technique to first decomposed the image into texture and structure and then prop-
agated into the inpainting domain both these classes in different ways. This idea to
decompose texture and structure is also applied in [58]. Some statistical approaches
have been presented in [40] to perform a texture synthesis and structure propagation.



2.5 Optical Flow Reconstruction

In Sect. 2.2 a number of different approaches for estimating optical flow have been
presented. Even the most advanced techniques cannot accurately estimate correct
flow fields under all conditions. A powerful tool for detecting and removing incor-
rect flow vectors from the flow field are confidence measures [27, 70]. Discarting
erroneous flow vectors results in accurate but sparse motion fields. However, many
applications require dense flow fields. This reconstruction of missing vectors in
optical flow fields is based on information from the surrounding areas is addressed
in this section. The tasks is similar to that addresses in the previous section for image
reconstruction, where it was called “inpainting.”
Parameter Estimation in Image Processing and Computer Vision                         319


   The reconstruction of motion fields has lately been proposed in the field of video
completion. In case of large holes with complicated texture previously used methods
are often not suitable to obtain good results. Instead of reconstructing the frame itself
by means of inpainting, the reconstruction of the underlying motion field allows for
the subsequent restoration of the corrupted region even in difficult cases.
   Hence, the reconstruction of motion fields called “motion inpainting” was first
introduced for video stabilization by Matsushita et al. in [89]. The idea is to continue
the central motion field to the edges of the image sequence where the field is lost
due to camera shaking. This is done by a basic interpolation scheme between four
neighboring vectors and a fast marching method. An extension of inpainting to
higher dimensional surfaces has also been presented [10].
   The reconstruction of optical flow fields can be accomplished by a simple
extension of these inpainting functionals for images, e.g., TV-inpainting on two
dimensional vector fields. However, these methods sometimes fail in situations
where the course of the motion boundary is unclear, e.g., if round motion boundaries
or junctions occur. Since image edges often correspond to motion edges the
information drawn from the image sequence can be important for the reconstruction,
especially in such cases where the damaged vector field does not contain enough
information to uniquely determine the optical flow of motion boundaries.
   Hence, in the special case of optical flow, the image sequence provides a source
of information in addition to the corrupted vector field, which can be used to guide
the reconstruction process in ambiguous cases. Optical flow fields have been used
for the reconstruction of images in [15]. The resulting functional is nonlinear and
can be minimized by means of the finite elements method. This techniques compares
favorably to diffusion based and TV inpainting methods, see Fig. 3.



2.6 Motion Segmentation

A common task in image processing is the segmentation of images. Image segmen-
tation in its typical form is the process of assigning a label to every image pixel
in a way that pixels with the same label share certain visual characteristics. Image
segmentation is closely related to the task of classification. For classification, one
tries to assign to each pixel in the image a label or object class, where the classes are
agreed in advance. These labels can also be probabilities of the pixel to belonging
to certain objects. Depending on the cues that distinguish the object of interest from
the background, segmentation can be based on features such as edge information,
intensity, color, texture or motion. Well known approaches are:
• Variational Approach (Mumford and Shah functional [91], Geodesic active
  contours [68], Segmentation from motion[37–39]).
• Multi-resolution techniques (Pyramid linking [104], Wavelet coefficient analysis
  [73, 79, 116]).
The segmentation from motion can be achieved by iterative algorithms based on
interleafed motion estimation steps and segmentation steps [111]. Well known
320                                                                   C.S. Garbe and B. Ommer




Fig. 3 Comparison of the proposed inpainting algorithm to diffusion and TV inpainting; the
numbers indicate the average angular error within the corrupted regions after reconstruction;
(a) Original corrupted Marble sequence, (b) Reconstruction result of diffusion based motion
inpainting, (c) Reconstruction result of TV based motion inpainting, (d) Reconstruction result of
image based motion inpainting. Taken from [15]

techniques are furthermore a layered representation of image sequences [119–
121], variational approaches, for instance motion competition [38], and other
techniques such as tensor voting [95,96] or algebraic methods for multi-body motion
models [117]. The iterative algorithm introduced by [111] describes a probabilistic
relaxation framework for robust multiple motion estimation and segmentation.
Parameter Estimation in Image Processing and Computer Vision                         321


[119–121] present a set of techniques for segmenting images into coherently moving
regions in a layered representation. Cremers and Soatto [38, 39] gave an extension
of the Mumford and Shah functional from intensity segmentation to motion based
segmentation in terms of a probabilistic framework implemented by level sets. The
geometric prior favors motion boundaries of minimal length and the likelihood
term takes into account the orthogonality between the spatio-temporal gradient and
the velocity vector. The classical pyramid linking segmentation, as discussed in
[28, 105], is based on the Gaussian pyramid of the image. Several improvements
were introduced by [104]. Instead of using a Gaussian pyramid, they propose a
continuous scale-space. The segmentation by clustering in the feature space has
been described by [116]. The feature extraction is based on local variance estimates
of the wavelet coefficients of the image.



2.7 Joint Estimation of Optical Flow, Segmentation
    and Denoising

Rather than denoising images, computing optical flow and performing a segmen-
tation step, all separately, all these components can be combined and computed
concurrently [106, 114]. This approach is based on an extension of the well known
Mumford–Shah functional which originally was proposed for the joint denoising
and segmentation of still images. Given a noisy initial image sequence u0 W D ! R
on the space-time domain D D Œ0; T   ˝ the following energy is considered
                     Z                        Z
                         u                        w             2
 EMSopt Œu; w; S  D        .u  u0 /2 d L C           w  r.t;x/ u d L
                       D 2                     DnS 2
                      Z                         Z
                              u                        w
                    C           kr.t;x/ uk d L C
                                          2
                                                         kPı Œ r.t;x/ wk2 d L C H d .S /
                        DnS 2                     DnS 2

for a piecewise smooth de-noised image sequence u W D ! R, and a piecewise
smooth motion field w D .1; v/ and a set S  D of discontinuities of u and w. u
and w are the weighting factors for the fidelity terms of u and w, while u and w
are those for the smoothness terms respectively. The first term models the fidelity
of the denoised image-sequence u, the second term represents the fidelity of the
flow field w in terms of the optical flow equation (1). The smoothness of u and w
is required on DnS and finally, the last term is the Hausdorff measure of the set S .
A suitable choice of the projection Pı Œ  leads to an anisotropic smoothing of the
flow field along the edges indicated by [106].
    The model is implemented in [106,114] using a phase-field approximation in the
spirit of Ambrosio and Tortorelli’s approach [5]. Thereby the edge set S is replaced
by a phase-field function W D ! R such that D 0 on S and  1 far from
S . As in the original Ambrosio–Tortorelli model, a scale parameter  controls the
thickness of the region with small phase field values. The Euler–Lagrange equations
of the corresponding parameters yield a system of three partial differential equations
for the image-sequence u, the optical flow field v and the phase field :
322                                                                    C.S. Garbe and B. Ommer




Fig. 4 Noisy test sequence: From top to bottom frames 9 and 10 are shown. (a) original image
sequence, (b) smoothed images, (c) phase field, (d) estimated motion (color coded). Taken from
[114]




Fig. 5 Pedestrian video: frames from original sequence (left); phase field (middle); optical flow,
color coded (right) [114]


                                                               
                            u 2                w
               div .t;x/    . Ck /r.t;x/ u C w.r.t;x/ uw/ Cu D u0
                          u                    u
                                                                  
                                             1       u                    1
                               .t;x/ C         C     kr.t;x/ uk2
                                                                       D                     (11)
                                             4    2                     4
                          w                   
                      div .t;x/ Pı Œ r.t;x/ v C .r.t;x/ u  v/r.x/ u D 0
                        w

Neumann boundary conditions are considered in this application. For details on this
approximation and its discretization, we refer to [106].
   In Fig. 4 we show results from this model on a noisy test-sequence where one
frame is completely missing. But this does not hamper the restoration of the correct
optical flow field shown in the fourth column, because of the anisotropic smoothing
of information from the surrounding frames into the destroyed frame.
   Furthermore, in Fig. 5 we consider a complex, higher resolution video sequence
showing a group of walking pedestrians. The human silhouettes are well extracted
Parameter Estimation in Image Processing and Computer Vision                       323


and captured by the phase field. The color–coded optical flow plot shows how the
method is able to extract the moving limbs of the pedestrians.



3 High-Level Computer Vision

Object recognition in images and videos poses one of the long standing key
challenges of computer vision. The problem itself is twofold since recognition
involves localizing instances of an object class in novel, cluttered scenes (detection)
and classifying these instances as belonging to one of several potential classes (cate-
gorization). Developing appropriate object models, which represent the appearance
and geometry of each object class and thereby help to distinguish objects from
another, constitutes the central problem of recognition. It is common practice to
automatically learn these models from unsegmented training images [47, 56, 99],
from bounding box segmentations [85, 100], from segmented training images [77],
or from manually annotated training images [45]. Since the complexity of object
models has to scale with the complexity of object classes, object detection and
categorization become particularly challenging when object categories are featuring
large intra-class variability. Additionally, the complexity of this problem depends on
several other factors, such as the level of supervision during training, the between-
class similarity, and the constraints that can be imposed on scenes (e.g., constraints
on variation in scale or viewpoint).



3.1 Key Modeling Decisions

Visual recognition can be pursued on different levels of semantic granularity.
One extreme strategy is exemplar detection (e.g., [81]), where exactly the same
query object is sought in scenes with different environmental conditions such as
background, lighting, occlusion, viewpoint etc. The other extreme is category-
level object recognition where all instances of a category are to be recognized.
Therefore, the granularity of the set of categories controls the complexity of the
recognition task as it defines the within-class variability. Influential papers such
as [6, 47] have focused research in the field of category-level object recognition
on principled probabilistic object models with semi-local feature descriptors. The
general goal is to represent objects by learning local appearance features and their
spatial configuration and comprising both in a common model. Within this coarse
fundamental modeling framework, the current approaches to object categorization
can be characterized by the core modeling decisions they make.
1. Local Descriptors: A classical way to capture image region information are
   appearance patches, i.e., subsampled image patches that are vector quantized
   into a large codebook (e.g.,[2, 47, 77]). Complex edge histogram features such as
   SIFT features [81] are another popular choice. In [98] we have proposed a low
324                                                            C.S. Garbe and B. Ommer


   dimensional representation of image patches that is based on compact local edge
   and color histograms of subpatches. Another popular descriptor is geometric
   blur [14]. This feature weights edge orientations around a feature point using
   a spatially varying kernel. Moreover, edge contour based methods have been
   proposed in [48, 102]. Opelt et al. [102] extract curve fragments from training
   images and they apply Adaboost to learn strong object detectors.
2. Spatial Model: A second choice concerns the model that combines all local
   features with their spatial distribution to represent object shape. It should be
   emphasized that this notion of shape is not based on the object boundary but on
   the geometry of object parts that are distributed all over the object. Object models
   have to deal with two problems, simultaneously. On the one hand individual
   local appearance descriptors in a test image are to be matched against those
   from a learned model. On the other hand the co-occurrence and the spatial
   relations between individual features have to be taken into account to represent
   the global object geometry. The simplest approach is, therefore, to histogram
   over all local descriptors found in an image (e.g., [41]) and to categorize the
   image directly based on the overall feature frequencies. On the one hand such
   bag of features methods offer robustness with respect to alteration of individual
   parts of an object (e.g., due to occlusion) at low computational costs. On the other
   hand they fail to capture any spatial relations between local image patches and
   they often adapt to background features. By making the restricting assumption
   that the spatial structure of objects is limited in its variation with respect to
   the image, Lazebnik et al. [75] can improve the performance of the bag of
   features approach using a spatially fixed grid of feature bags. At the other end
   of the modeling spectrum we find constellation models: Originally, Fischler
   and Elschlager [49] have proposed a spring model for coupling local features.
   Inspired by the Dynamic Link Architecture for cognitive processes, Lades et al.
   [71] followed the same fundamental idea when proposing their face recognizer.
   Lately increasingly complex models for capturing part constellations have been
   proposed [47]. However the complexity of such a joint model of all parts causes
   only small numbers of parts to be feasible. To incorporate larger numbers of
   parts, [2, 77] use a simpler object model and a comparably large codebook
   of distinctive parts. Leibe and Schiele [77] use a probabilistic Hough voting
   strategy to distinguish one category from the background. In [99] we advance
   the idea of large numbers of parts by grouping parts prior to spatially coupling
   the resulting compositions in a graphical model. Conflicting categorization
   hypotheses proposed by compositions and the spatial model are then reconciled
   using probabilistic inference in the underlying Bayesian network. The processing
   pipeline for this automatic scene analysis is presented in Fig. 6. Finally, Berg
   et al. [14] describe and regularize the spatial distortion resulting from matching
   an image to a training sample using thin plate splines.
3. Hierarchies: For a long time, research on object recognition has aimed at
   building hierarchical models [52]. Despite this effort, many popular current
   methods such as [41, 47, 77] are single layered. Recently, probabilistic latent
   semantic analysis (pLSA) [64] has become popular (e.g.,[109]), where a hidden
Parameter Estimation in Image Processing and Computer Vision                                  325




Fig. 6 Processing pipeline for automatic scene analysis. Key steps: Feature extraction, perceptual
grouping to form compositions, selection of relevant compositions, object localization and
recognition, and top-down grouping to form compositions of compositions which then yield an
update of object hypotheses


   representation layer of abstract concepts is introduced. Other examples for
   hierarchical approaches are the feature hierarchies of [43], the hierarchical parts
   and structure model of [23] or the deep compositional hierarchies of [101].
4. Learning Paradigm: Another modeling decision is related to the learning
   paradigm, i.e.,pursuing a generative versus a discriminative approach. Generative
   models have been very popular in the vision community, e.g., [2,14,22,47,77,98,
   112]. They naturally establish correspondences between model components and
   image features. Discriminative approaches are for instance [41] and [118]. To
   recognize faces in real-time Viola and Jones [118] use boosting to learn simple
   features which are based on local intensity differences.
5. Degree of Supervision: Similar to the influential paper by Fergus et al. [47]
   several other approaches (e.g.,[2, 41, 99]) have been proposed that only need
   training images (showing objects and even background clutter) and the overall
   category label of an image. The restriction of user assistance is desirable for
   scaling methods up to large numbers of categories with large training sets. A
   system that can be trained in an unsupervised manner is for instance that of [56],
   whereas Felzenszwalb and Huttenlocher have taken a supervised approach to
   object detection in [45]. Furthermore, Jin and Geman [67] present a composi-
   tional architecture with manually built structure for license plate reading. In their
   conclusion they emphasize the complexity of the future challenge of learning
   such a compositional model. In [97] we have addressed exactly this problem in
   the even less constraint case of large numbers of natural object classes.
326                                                            C.S. Garbe and B. Ommer


3.2 A Compositional Approach to Object Categorization

Despite the complexity of the recognition challenge, learning of object representa-
tions from a small number of samples is possible due to the compositional nature
of our (visual) world. As Attneave [8] points out, the visual stimulus is highly
redundant in the sense that there exist significant spatial interdependencies in visual
scenes. Compositionality (cf. Geman’s work [54]) serves as a fundamental principle
in cognition and especially in human vision [20] that exploits these dependencies. It
refers to the prominent ability of perception to represent complex entities by means
of comparably few, simple, and widely usable parts. Additional information that is
missing in the individual parts is added by incorporating relations between them.
The compositional approach presented in [97] automatically learns characteristic
compositions of atomic parts. A visualization of relevant compositions by clustering
is shown in Fig. 7. Perceptual grouping is applied to obtain candidate compositions.
The statistics of relevant compositions that are both reliable and discriminative are
then learned from the training data. To avoid overfitting to spurious compositions,
cross-validation is performed.



3.3 Object Detection in Cluttered Scenes

Object detection in cluttered natural scenes requires matching object models to the
observations in the scene. Since the objective function for matching is a highly non-
convex function over scale space, the task of finding good matches is an extremely
challenging optimization problem. The two leading approaches to this problem are
sliding windows, e.g.,[42, 118], and voting methods, which are based on the Hough
transform [66]. Sliding windows scan over possible locations and scales, evaluate
a binary classifier, and use post-processing such as non-max suppression to detect
objects. The computational burden of this procedure is daunting although various
techniques have been proposed to deal with the complexity issue, e.g.,cascaded
evaluation [118], interest point filtering, or branch-and-bound [74]. In contrast to
this, Hough voting [66] parametrizes the object hypothesis (e.g.,the location of the
object center) and lets each local part vote for a point in hypothesis space.
   In [100] we have shown that object scale is an inherently global property, which
makes local scale estimates unreliable and, thus, leads to a scale-location-ambiguity.
An illustration of this approach is presented in Fig. 8. When the Hough transform
is extended to provide hypotheses for location and scale, each local feature casts
votes that form lines through scale space rather than just a single point as in current
voting methods [48, 77, 102]. Since all points on a voting line are statistically
dependent, they should agree on a single object hypothesis rather than being treated
as independent votes. Ideally, all points on an object would yield lines that intersect
in a single point. Due to intra-category variation, and background clutter, the points
of intersection are, however, degraded into scattered clouds. Finding these clusters
Parameter Estimation in Image Processing and Computer Vision                                   327




Fig. 7 Visualization of relevant compositions by clustering. For each category, the two prototyp-
ical compositions with highest relevance are illustrated by visualizing the closest compositions to
that prototype. (a) airplanes, (b) bass, (c) crayfish, (d) dragonfly, (e) faces, and (f) hawksbill

becomes difficult since their number is unknown (it is the number of objects in the
scene) and because the assignment of votes to objects is not provided (segmentation
problem). To address these issues we frame the search for globally consistent
object hypotheses as a weighted, pairwise clustering of local votes without scale
328                                                                        C.S. Garbe and B. Ommer


         a                          b                       c



                                          d




Fig. 8 Voting in scale space with scale-location-ambiguity. The circle indicates the spatial support
of a local feature. Based on the descriptor, the difference of object scale between (a) and (b) is not
detectable. Thus, a local feature casts votes for the object center on all scales, (c). These votes lie
on a line through scale space, since the position of the center relative to a feature varies with object
scale. Without noise, all voting lines from an object intersect in a single point in scale space, (d).
For all other scales this point is blurred as indicated by the dotted outline


estimates. Clustering avoids a local search through hypothesis space [77] and the
pairwise setting circumvents having to specify the number of objects ahead of time.
Moreover, clustering voting lines deals with the large number of false positives
[57] which point votes produce and that hamper the commonly used local search
heuristics such as binning [77].



4 Conclusion

In this contribution, we have given a brief overview of some areas of image
processing and computer vision in which parameter estimation plays a central role.
We have not attempted to give a complete and exhaustive overview. However, we
have outlined some of the approaches and techniques commonly used in the area and
demonstrated them on typical applications. From our overview it becomes apparent
that most parameter estimation problems in image processing and computer vision
are highly non-linear. Inherent are often large amounts of image data and the
requirement of fast computation times. Therefore, the presented applications would
profit from algorithmic and conceptual advances.



References

  1. Adelson EH, Bergen JR (1985) Spatiotemporal energy models for the perception of motion.
     Journal of the Optical Society of America A 2(2):284–299
  2. Agarwal S, Awan A, Roth D (2004) Learning to detect objects in images via a sparse,
     part-based representation. IEEE Transactions on Pattern Analysis and Machine Intelligence
     26(11):1475–1490
  3. Ambrosio L, Masnou S (2003a) A direct variational approach to a problem arising in image
     reconstruction. Interfaces and Free Boundaries 5:63–81
Parameter Estimation in Image Processing and Computer Vision                                329


  4. Ambrosio L, Masnou S (2003b) A direct variational approach to a problem arising in image
     reconstruction. Interfaces Free Bound 5(1):63–81
  5. Ambrosio L, Tortorelli VM (1992) On the approximation of free discontinuity problems. Boll
     Un Mat Ital B 6(7):105–123
  6. Amit Y, Geman D (1998) A computational model for visual selection. Neural Computation
     11(7):1691–1715
  7. Anandan P (1989) A computational framework and an algorithm for the measurement of
     visual motion. International Journal of Computer Vision 2:283–319
  8. Attneave F (1954) Some informational aspects of visual perception. Psychological Review
     61(3):183–193
  9. Ballester C, Bertalmio M, Caselles V, Sapiro G, Verdera J (2001a) Filling-in by joint
     interpolation of vector fields and gray levels. IEEE Transactions on Image Processing
     10(8):1200–1211
 10. Ballester C, Caselles V, Verdera J (2003b) Disocclusion by Joint Interpolation of Vec-
     tor Fields and Gray Levels. Multiscale Modeling & Simulation 2(1):80, DOI 10.1137/
     S1540345903422458
 11. Barron JL, Fleet DJ, Beauchemin S (1994) Performance of optical flow techniques. Interna-
     tional Journal of Computer Vision 12(1):43–77
 12. Beauchemin SS, Barron JL (1995) The computation of optical flow. ACM Computing Surveys
     27(3):433–467
 13. Bellettini G, Dal Maso G, Paolini M (1993) Semicontinuity and relaxation properties of a
     curvature depending functional in 2d. Ann Scuola Norm Sup Pisa Cl Sci 20:247–297
 14. Berg AC, Berg TL, Malik J (2005) Shape matching and object recognition using low distortion
     correspondence. In: Proceedings of the IEEE Conference on Computer Vision and Pattern
     Recognition, pp 26–33
 15. Berkels B, Kondermann C, Garbe C, Rumpf M (2009) Reconstructing optical flow fields by
     motion inpainting. In: Energy Minimization Methods in Computer Vision and Pattern Recog-
     nition, Springer Verlag, vol LNCS 5681, pp 388–400, DOI 10.1007/978-3-642-03641-5n 29
 16. Bertalmio M, Sapiro G, Caselles V, Ballester C (2000a) Image inpainting. In: Computer
     Graphics (SIGGRAPH ’00 Proceedings), pp 417–424
 17. Bertalmio M, Sapiro G, Randall G (2000b) Morphing active contours. PAMI 22(7):733–743
 18. Bertalmio M, Bertozzi A, Sapiro G (2001) Navier-Stokes, fluid dynamics, and image and
     video inpainting. Proceedings of the International Conference on Computer Vision and
     Pattern Recognition, IEEE I:355–362
 19. Bertalmio M, Vese L, Sapiro G, Osher S (2003) Simultaneous structure and texture image
     inpainting. IEEE Transactions on Image Processing 12(8):882–889, DOI 10.1109/TIP.2003.
     815261
 20. Biederman I (1987) Recognition-by-components: A theory of human image understanding.
     Psychological Review 94(2):115–147
 21. Bigün J (1988) Local symmetry features in image processing. PhD thesis, Linköping
     University, Linköping, Sweden
 22. Borenstein E, Sharon E, Ullman S (2004) Combining top-down and bottom-up segmentation.
     In: Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition,
     Workshop Percept Org in Comp Vision
 23. Bouchard G, Triggs B (2005) Hierarchical part-based visual object categorization. In: Pro-
     ceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp 710–715
 24. Bredies K, Kunisch K, Pock T (2010) Total generalized variation. Siam Journal On Imaging
     Sciences 3(3):492, DOI 10.1137/090769521
 25. Bruhn A, Weickert J, Feddern C, Kohlberger T, Schnörr C (2003) Real-time optic flow
     computation with variational methods. In: Petkov N, Westenberg M (eds) Computer Anal-
     ysis of Images and Patterns, Lecture Notes in Computer Science, vol 2756, Springer
     Berlin/Heidelberg, pp 222–229
 26. Bruhn A, Weickert J, Schnörr C (2005) LucasKanade meets HornSchunck: Combining local
     and global optic flow methods. Int J Computer Vision 61(3):211–231
330                                                                   C.S. Garbe and B. Ommer


27. Bruhn A, Weickert J, Kohlberger T, Schnörr C (2006) A multigrid platform for real-time
    motion computation with discontinuity-preserving variational methods. International Journal
    of Computer Vision 70(3):257–277
28. Burt PJ, Adelson EH (1983) The laplacian pyramid as a compact image code. IEEE
    TransCOMM 31:532–540
29. Caselles V, Morel JM, Sbert C (1998) An axiomatic approach to image interpolation. Image
    Processing, IEEE Transactions on 7(3):376–386, DOI 10.1109/83.661188
30. Chan T, Shen J (2001a) Mathematical models for local nontexture inpaintings. SIAM Journal
    on Applied Mathematics 62(3):1019–1043, DOI 10.1137/S0036139900368844
31. Chan T, Shen J (2001b) Non-texture inpainting by curvature-driven diffusions (ccd). J Visual
    Comm Image Rep 12:436–449
32. Chan T, Shen J (2002) Mathematical models for local non-texture inpaintings. SIAM J Appl
    Math 62:1019–1043
33. Chan TF, Tai XC (2003) Level set and total variation regularization for elliptic inverse
    problems with discontinuous coefficients. Journal of Computational Physics 193(1):40–66,
    DOI 10.1016/j.jcp.2003.08.003
34. Chan TF, Osher S, Shen J (2001) The digital tv filter and nonlinear denoising. IEEE
    Transactions on Image Processing 10(2):231–241
35. Chan TF, Kang SH, Shen J (2002) Euler’s elastica and curvature-based inpainting. SIAM
    Appl Math 63(2):564–592
36. Cohen I (93) Nonlinear variational method for optical flow computation. In: Proc. of the
    Eighth Scandinavian Conference on Image Analysis, vol 1, pp 523–530
37. Cremers D, Schnörr C (2002) Motion competition: Variational integration of motion segmen-
    tation and shape regularization. In: Van Gool L (ed) Pattern Recognition - Proc. of the DAGM,
    Lecture Notes in Computer Science, vol 2449, pp 472–480
38. Cremers D, Schnörr C (2003) Statistical shape knowledge in variational motion segmentation.
    Image and Vision Computing 21:77–86
39. Cremers D, Soatto S (2005) Motion competition: A variational approach to piecewise
    parametric motion segmentation. International Journal of Computer Vision 62:249–265
40. Criminisi A, Pérez P, Toyama K (2004) Region filling and object removal by exemplar-based
    image inpainting. IEEE Transactions on Image Processing 13(9):1200–1212, DOI 10.1109/
    TIP.2004.833105
41. Csurka G, Dance CR, Fan L, Willamowski J, Bray C (2004) Visual categorization with bags
    of keypoints. In: ECCV, Workshop on Stat Learn in CV’04
42. Dalal N, Triggs B (2005) Histograms of oriented gradients for human detection. In: CVPR,
    pp 886–893
43. Epshtein B, Ullman S (2005) Feature hierarchies for object classification. In: ICCV,
    pp 220–227
44. Esedoglu S, Jianhong S (2002) Digital inpainting based on the Mumford-Shah-Euler image
    model. Euro Jnl Appl Math 13:353–370
45. Felzenszwalb PF, Huttenlocher DP (2005) Pictorial structures for object recognition. IJCV
    61(1):55–79
46. Fennema C, Thompson W (1979) Velocity determination in scenes containing several moving
    objects. Computer Graphics and Image Processing 9:301–315
47. Fergus R, Perona P, Zisserman A (2003) Object class recognition by unsupervised scale-
    invariant learning. In: CVPR, pp 264–271
48. Ferrari V, Fevrier L, Jurie F, Schmid C (2008) Groups of adjacent contour segments for
    object detection. IEEE Transactions on Pattern Analysis and Machine Intelligence 30(1):
    36–51
49. Fischler MA, Elschlager RA (1973) The representation and matching of pictorial structures.
    IEEE Transactions on Computers c-22(1):67–92
50. Fleet DJ (1992) Measurement of Image Velocity. Kluwer Academic Publishers, Dordrecht,
    The Netherlands
Parameter Estimation in Image Processing and Computer Vision                                   331


 51. Fleet DJ, Jepson AD (1990) Computation of component image velocity from local phase
     information. International Journal of Computer Vision 5:77–104
 52. Fukushima K (1980) Neocognitron: A self-organizing neural network model for a mechanism
     of pattern recognition unaffected by shift in position. Biological Cybernetics 36(4):193–202
 53. Galvin B, McCane B, Novins K, Mason D, Mills S (1998) Recovering motion fields: an
     evaluation of eight optical flow algorithms. In: BMVC 98. Proceedings of the Ninth British
     Machine Vision Conference, vol 1, pp 195–204
 54. Geman S, Potter DF, Chi Z (2002) Composition Systems. Quarterly of Applied Mathematics
     60:707–736
 55. Glazer F, Reynolds G, Anandan P (1983) Scene matching through hierarchical correlation.
     In: Proc. Conference on Computer Vision and Pattern Recognition, Washington, pp 432–441
 56. Grauman K, Darrell T (2006) Pyramid match kernels: Discriminative classification with sets
     of image features. Tech. Rep. MIT-2006-020, MIT
 57. Grimson W, Huttenlocher D (1990) On the sensitivity of the hough transform for object
     recognition. Pattern Analysis and Machine Intelligence, IEEE Transactions on 12(3):255 –
     274, DOI 10.1109/34.49052
 58. Grossauer H (2004) A combined pde and texture synthesis approach to inpainting. In: Pajdla
     T, Matas J (eds) Computer Vision - ECCV 2004, Lecture Notes in Computer Science, vol
     3022, Springer-Verlag, pp 214–224, DOI 10.1007/978-3-540-24671-8n 17
 59. Guichard F (1998) A morphological, affine, and galilean invariant scale–space for movies.
     IEEE Transactions on Image Processing 7(3):444–456
 60. Haußecker H, Spies H (1999) Motion. In: Jähne B, Haußecker H, Geißler P (eds) Handbook
     of Computer Vision and Applications, vol 2, Academic Press, chap 13
 61. Heeger D (1987) Model for the extraction of image flow. Journal of the Optical Society of
     America 4(8):1455–1471
 62. Heeger DJ (1988) Optical flow using spatiotemporal filters. International Journal of Computer
     Vision 1:279–302
 63. Hinterberger W, Scherzer O, Schnörr C, Weickert J (2001) Analysis of optical flow models
     in the framework of calculus of variations. Tech. rep., Numerical Functional Analysis and
     Optimization, Revised version of Technical Report No. 8/2001, Computer Science Series,
     University of Mannheim, Germany
 64. Hofmann T (2001) Unsupervised learning by probabilistic latent semantic analysis. Machine
     Learning 42(1):177–196
 65. Horn B, Schunk B (1981) Determining optical flow. Artificial Intelligence 17:185–204
 66. Hough P (1962) Method and means for recognizing complex patterns. U.S. Patent 3069654
 67. Jin Y, Geman S (2006) Context and hierarchy in a probabilistic image model. In: Proceedings
     of the IEEE Conference on Computer Vision and Pattern Recognition, pp 2145–2152
 68. Kass M, Witkin A, Terzopoulos D (1987) Snakes: Active contour models. In: ICCV87,
     pp 259–268
 69. Kondermann C, Kondermann D, Jähne B, CS Garbe (2007a) An adaptive confidence measure
     for optical flows based on linear subspace projections. In: Hamprecht F, Schnörr C, Jähne B
     (eds) Pattern Recognition, Springer Verlag, vol LNCS 4713, pp 132–141, DOI 10.1007/
     978-3-540-74936-3n 14
 70. Kondermann C, Mester R, Garbe C (2008) A statistical confidence measure for optical flows.
     In: Forsyth D, Torr P, Zisserman A (eds) Computer Vision - ECCV 2008, Springer Verlag, vol
     LNCS 5304, pp 290–301, DOI 10.1007/978-3-540-88690-7n 22
 71. Lades M, Vorbrüggen JC, Buhmann JM, Lange J, von der Malsburg C, Würtz RP, Konen
     W (1993) Distortion invariant object recognition in the dynamic link architecture. IEEE
     Transactions on Computers 42:300–311
 72. Lai S, Vemuri B (1995) Robust and efficient algorithms for optical flow computation. In: Proc.
     of Int. Symp. Comp. Vis., pp 455–460
 73. Laine A, Fan J (1996) Frame representations for texture segmentation. IEEE Transactions on
     Image Processing 5(5):771–780, URL citeseer.ist.psu.edu/article/laine96frame.html
332                                                                   C.S. Garbe and B. Ommer


74. Lampert CH, Blaschko MB, Hofmann T (2008) Beyond sliding windows: Object localization
    by efficient subwindow search. In: Proceedings of the IEEE Conference on Computer Vision
    and Pattern Recognition
75. Lazebnik S, Schmid C, Ponce J (2006) Beyond bags of features: Spatial pyramid matching for
    recognizing natural scene categories. In: Proceedings of the IEEE Conference on Computer
    Vision and Pattern Recognition
76. Lefébure M, Cohen LD (2001) Image registration, optical flow and local rigidity. Journal of
    Mathematical Imaging and Vision 14:131–147
77. Leibe B, Leonardis A, Schiele B (2004) Combined object categorization and segmentation
    with an implicit shape model. In: ECCV, Workshop Stat Learn’04
78. Lenzen F, Schäfer H, CS Garbe (2011) Denoising Time-of-Flight data with adaptive total
    variation. In: Bebis G, Boyle R, Koracin D, Parvin B (eds) Advances in Visual Computing,
    ISVC 2011, vol LNCS 6938, pp 337–346, DOI 10.1007/978-3-642-24028-7n 31
79. Liapis, S S, Tziritas, G (2004) Colour and texture segmentation using wavelet frame analysis,
    deterministic relaxation, and fast marching algorithms. Journal of Visual Communication and
    Image Representation 15:1–26
80. Little JJ, Verri A (1989) Analysis of differential and matching methods for optical flow. In:
    IEEE Workshop on Visual Motion, Irvine, CA, pp 173–180
81. Lowe DG (2004) Distinctive image features from scale-invariant keypoints. International
    Journal of Computer Vision 60(2):91–110
82. Lucas B, Kanade T (1981) An iterative image registration technique with an application to
    stereo vision. In: DARPA Image Understanding Workshop, pp 121–130
83. Lucas BD (1984) Generalized image matching by the method of differences. PhD thesis,
    Carnegie-Mellon University, Pittsburgh, PA
84. Luis Alvarez JS Joachim Weickert (1999) A scale-space approach to nonlocal optical flow
    calculations. Proceedings of the Second International Conference on Scale-Space Theories in
    Computer Vision pp 235–246
85. Maji S, Malik J (2009) Object detection using a max-margin hough transform. In: CVPR
86. Masnou S (2002) Disocclusion: A variational approach using level lines. IEEE Transactions
    on Image Processing 11(2):68–76
87. Masnou S, Morel J (1998a) Level lines based disocclusion. In: Proc. of ICIP, vol 3,
    pp 259–263
88. Masnou S, Morel JM (1998b) Level lines based disocclusion. In: 5th IEEE International
    Conference on Image Processing (ICIP), Chicago, vol 3, pp 259–263
89. Matsushita Y, Ofek E, Ge W, Tang X, Shum HY (2006) Full-frame video stabilization
    with motion inpainting. Pattern Analysis and Machine Intelligence, IEEE Transactions on
    28(7):1150–1163, DOI 10.1109/TPAMI.2006.141
90. McCane B, Novins K, Crannitch D, Galvin B (2001) On benchmarking optical flow.
    Computer Vision and Image Understanding 84(1):126–143
91. Mumford D, Shah J (1989) Optimal approximation by piecewise smooth functions and asso-
    ciated variational problems. Communications on Pure and Applied Mathematics 42:577–685
92. Müller-Urbaniak S (1994) Eine Analyse des Zweischritt-[Theta]-Verfahrens zur Lösung der
    instationären Navier-Stokes-Gleichungen. Tech. rep.
93. Nagel HH (1983) Displacement vectors derived from second-order intensity variations in
    image sequences. Computer Graphics and Image Processing 21:85–117
94. Nagel HH, Enkelmann W (1986) An investigation of smoothness constraints for the estima-
    tion of displacement vector fields from image sequences. IEEE Trans Pattern Anal Mach Intell
    8(5):565–593
95. Nicolescu,M, Medioni,G (2002) 4d voting for matching, densification and segmentation into
    motion layers. In: Proceedings of the International Conference on Pattern Recognition, vol 3
96. Nicolescu,M, Medioni,G (2003) Layered 4d representation and voting for grouping from
    motion. Pattern Analysis and Machine Intelligence 25(4):492–501
97. Ommer B, Buhmann J (2010) Learning the compositional nature of visual object categories
    for recognition. PAMI 32(3):501–516
Parameter Estimation in Image Processing and Computer Vision                                 333


 98. Ommer B, Buhmann JM (2005) Object categorization by compositional graphical models.
     In: Energy Minimization Methods in Computer Vision and Pattern Recognition, LNCS 3757,
     pp 235–250
 99. Ommer B, Buhmann JM (2006) Learning compositional categorization models. In: ECCV,
     pp 316–329
100. Ommer B, Malik J (2009) Multi-scale object detection by clustering lines. In: Computer
     Vision, 2009 IEEE 12th International Conference on, pp 484 –491, DOI 10.1109/ICCV.2009.
     5459200
101. Ommer B, Sauter M, Buhmann JM (2006) Learning top-down grouping of compositional
     hierarchies for recognition. In: CVPR, Workshop POCV
102. Opelt A, Pinz A, Zisserman A (2006) Incremental learning of object detectors using a visual
     shape alphabet. In: CVPR, pp 3–10
103. Oppenheim AV, Schafer RW (2009) Discrete-Time Signal Processing, 3rd edn. Prentice Hall
104. Petrovic,A E, Vanderheynst,P (2004) Multiresolution segmentation of natural images: From
     linear to nonlinear scale-space representation. IEEE Transactions on Image Processing
     13(8):1104–1114
105. Pietikäinen M, Rosenfeld A (1981) Image segmentation by texture using pyramid node
     linking. Systems, Man and Cybernetics, IEEE Transactions on 11(12):822–825, DOI 10.1109/
     TSMC.1981.4308623
106. Preußer, Droske M, Garbe CS, Telea A, Rumpf M (2007) A phase field method for
     joint denoising, edge detection and motion estimation. SIAM Appl Math, 68(3): 599–618,
     DOI 10.1137/060677409
107. Proakis JG, Manolakis DK (2006) Digital Signal Processing, 4th edn. Prentice Hall
108. Schnörr C (1992) Computation of discontinuous optical flow by domain decomposition and
     shape optimization. International Journal Computer Vision 8(2):153–165
109. Sivic J, Russell BC, Efros AA, Zisserman A, Freeman WT (2005) Discovering objects and
     their localization in images. In: ICCV
110. Spies H, Garbe CS (2002) Dense parameter fields from total least squares. In: Van Gool L
     (ed) Pattern Recognition, Springer-Verlag, Zurich, CH, Lecture Notes in Computer Science,
     vol LNCS 2449, pp 379–386
111. Strehl,A, Aggarwal,JK (2000) A new Bayesian relaxation framework for the estimation and
     segmentation of multiple motions. In: Proceedings of the 4th IEEE Southwest Symposium on
     Image Analysis and Interpretation (SSIAI 2000), 2–4 April 2000, Austin, Texas, USA, IEEE,
     pp 21–25, URL citeseer.ist.psu.edu/strehl00new.html
112. Sudderth EB, Torralba AB, Freeman WT, Willsky AS (2005) Learning hierarchical models
     of scenes, objects, and parts. In: ICCV
113. Tan L (2007) Digital Signal Processing: Fundamentals and Applications. Academic Press
114. Telea A, Preusser T, Garbe C, Droske M, Rumpf M (2006) A variational approach to joint
     denoising, edge detection and motion estimation. In: Proc. DAGM 2006, pp 525–353
115. Tretiak O, Pastor L (1984) Velocity estimation from image sequences with second order dif-
     ferential operators. In: Proc. 7th International Conference on Pattern Recognition, pp 20–22
116. Unser M (1995) Texture classification and segmentation using wavelet frames. IEEE Trans-
     action on Image Processing 11:1549–1560
117. Vidal R, Ma Y (2004) A unified algebraic approach to 2-d and 3-d motion segmentation. In:
     ECCV (1), pp 1–15
118. Viola PA, Jones MJ (2001) Rapid object detection using a boosted cascade of simple features.
     In: CVPR, pp 511–518
119. Wang JYA, Adelson EH (1993) Layered representation for motion analysis. In: Wang JYA,
     Adelson EH (eds) Proceedings CVPR’93, New York City, NY, Washington, DC, pp 361–366
120. Wang JYA, Adelson EH (1994) Representating moving images with layers. IEEE Transaction
     on Image Processing 3(5):625–638
121. Wang,JYA,Adelson,EH (1994) Representing moving images with layers. The IEEE Transac-
     tions on Image Processing Special Issue: Image Sequence Compression 3(5):625–638
334                                                                  C.S. Garbe and B. Ommer


122. Waxman AM, Wu J, Bergholm F (1988) Convected activation profiles and receptive fields
     for real time measurement of short range visual motion. In: Proc. Conf. Comput. Vis. Patt.
     Recog, Ann Arbor, pp 771–723
123. Weickert J, Schnörr C (2001) A theoretical framework for convex regularizers in PDE–based
     computation of image motion. Int J Computer Vision 45(3):245–264



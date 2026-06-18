---
normalized_id: shared-pdf-reference-james-lesage-robert-kelley-pace-introduction-to-spatial-econometrics-statistics-a-series-of-textbooks-and-monographs-chapman-and-hall-crc-2009
exam_code: SHARED
material_scope: james lesage, robert kelley pace-introduction to spatial econometrics (statistics_  a series of textbooks and monographs)-chapman and hall_crc (2009).pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/James LeSage, Robert Kelley Pace-Introduction to Spatial Econometrics (Statistics_  A Series of Textbooks and Monographs)-Chapman and Hall_CRC (2009).pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-james-lesage-robert-kelley-pace-introduction-to-spatial-econometrics-statistics-a-series-of-textbooks-and-monographs-chapman-and-hall-crc-2009

                  Introduction to
                  Spatial Econometrics




© 2009 by Taylor & Francis Group, LLC
                STATISTICS: Textbooks and Monographs
                             D. B. Owen
                      Founding Editor, 1972–1991




                                              Editors

          N. Balakrishnan                                   William R. Schucany
         McMaster University                            Southern Methodist University




                                          Editorial Board

      Thomas B. Barker                                      Nicholas Jewell
Rochester Institute of Technology                  University of California, Berkeley

          Paul R. Garvey                                     Sastry G. Pantula
      The MITRE Corporation                                 North Carolina State
                                                                 University
           Subir Ghosh
University of California, Riverside                            Daryl S. Paulson
                                                        Biosciences Laboratories, Inc.
          David E. A. Giles
         University of Victoria                                Aman Ullah
                                                          University of California,
            Arjun K. Gupta                                       Riverside
          Bowling Green State
              University                                      Brian E. White
                                                          The MITRE Corporation




  © 2009 by Taylor & Francis Group, LLC
                  STATISTICS: Textbooks and Monographs

                                            Recent Titles
Visualizing Statistical Models and Concepts, R. W. Farebrother and Michaël Schyns
Financial and Actuarial Statistics: An Introduction, Dale S. Borowiak
Nonparametric Statistical Inference, Fourth Edition, Revised and Expanded, Jean Dickinson Gibbons and
Subhabrata Chakraborti
Computer-Aided Econometrics, edited by David E.A. Giles
The EM Algorithm and Related Statistical Models, edited by Michiko Watanabe and
Kazunori Yamaguchi
Multivariate Statistical Analysis, Second Edition, Revised and Expanded, Narayan C. Giri
Computational Methods in Statistics and Econometrics, Hisashi Tanizaki
Applied Sequential Methodologies: Real-World Examples with Data Analysis, edited by
Nitis Mukhopadhyay, Sujay Datta, and Saibal Chattopadhyay
Handbook of Beta Distribution and Its Applications, edited by Arjun K. Gupta and
Saralees Nadarajah
Item Response Theory: Parameter Estimation Techniques, Second Edition, edited by Frank B. Baker
and Seock-Ho Kim
Statistical Methods in Computer Security, edited by William W. S. Chen
Elementary Statistical Quality Control, Second Edition, John T. Burr
Data Analysis of Asymmetric Structures, Takayuki Saito and Hiroshi Yadohisa
Mathematical Statistics with Applications, Asha Seth Kapadia, Wenyaw Chan, and Lemuel Moyé
Advances on Models, Characterizations and Applications, N. Balakrishnan, I. G. Bairamov, and
O. L. Gebizlioglu
Survey Sampling: Theory and Methods, Second Edition, Arijit Chaudhuri and Horst Stenger
Statistical Design of Experiments with Engineering Applications, Kamel Rekab and
Muzaffar Shaikh
Quality by Experimental Design, Third Edition, Thomas B. Barker
Handbook of Parallel Computing and Statistics, Erricos John Kontoghiorghes
Statistical Inference Based on Divergence Measures, Leandro Pardo
A Kalman Filter Primer, Randy Eubank
Introductory Statistical Inference, Nitis Mukhopadhyay
Handbook of Statistical Distributions with Applications, K. Krishnamoorthy
A Course on Queueing Models, Joti Lal Jain, Sri Gopal Mohanty, and Walter Böhm
Univariate and Multivariate General Linear Models: Theory and Applications with SAS,
Second Edition, Kevin Kim and Neil Timm
Randomization Tests, Fourth Edition, Eugene S. Edgington and Patrick Onghena
Design and Analysis of Experiments: Classical and Regression Approaches with SAS,
Leonard C. Onyiah
Analytical Methods for Risk Management: A Systems Engineering Perspective,
Paul R. Garvey
Confidence Intervals in Generalized Regression Models, Esa Uusipaikka
Introduction to Spatial Econometrics, James LeSage and R. Kelley Pace
    © 2009 by Taylor & Francis Group, LLC
Introduction to
Spatial Econometrics

James LeSage
Texas State University-San Marcos
San Marcos, Texas, U.S.A.


R. Kelley Pace
Louisiana State University
Baton Rouge, Louisiana, U.S.A.




   © 2009 by Taylor & Francis Group, LLC
Chapman & Hall/CRC
Taylor & Francis Group
6000 Broken Sound Parkway NW, Suite 300
Boca Raton, FL 33487‑2742
© 2009 by Taylor & Francis Group, LLC
Chapman & Hall/CRC is an imprint of Taylor & Francis Group, an Informa business

No claim to original U.S. Government works
Printed in the United States of America on acid‑free paper
10 9 8 7 6 5 4 3 2 1

International Standard Book Number‑13: 978‑1‑4200‑6424‑7 (Hardcover)

This book contains information obtained from authentic and highly regarded sources. Reasonable
efforts have been made to publish reliable data and information, but the author and publisher can‑
not assume responsibility for the validity of all materials or the consequences of their use. The
authors and publishers have attempted to trace the copyright holders of all material reproduced
in this publication and apologize to copyright holders if permission to publish in this form has not
been obtained. If any copyright material has not been acknowledged please write and let us know so
we may rectify in any future reprint.

Except as permitted under U.S. Copyright Law, no part of this book may be reprinted, reproduced,
transmitted, or utilized in any form by any electronic, mechanical, or other means, now known or
hereafter invented, including photocopying, microfilming, and recording, or in any information
storage or retrieval system, without written permission from the publishers.

For permission to photocopy or use material electronically from this work, please access www.copy‑
right.com (http://www.copyright.com/) or contact the Copyright Clearance Center, Inc. (CCC), 222
Rosewood Drive, Danvers, MA 01923, 978‑750‑8400. CCC is a not‑for‑profit organization that pro‑
vides licenses and registration for a variety of users. For organizations that have been granted a
photocopy license by the CCC, a separate system of payment has been arranged.

Trademark Notice: Product or corporate names may be trademarks or registered trademarks, and
are used only for identification and explanation without intent to infringe.

                           Library of Congress Cataloging‑in‑Publication Data

          LeSage, James P.
            Introduction to spatial econometrics / James LeSage, Robert Kelley Pace.
                p. cm. ‑‑ (Statistics : a series of textbooks and monographs ; 196)
            Includes bibliographical references and index.
            ISBN‑13: 978‑1‑4200‑6424‑7 (alk. paper)
            ISBN‑10: 1‑4200‑6424‑X (alk. paper)
            1. Space in economics‑‑Econometric models. 2. Space in
          economics‑‑Mathematical models. I. Pace, Robert Kelley. II. Title. III. Series.

          HT388.L47 2009
          330.01’5195‑‑dc22                                                      2008038890


Visit the Taylor & Francis Web site at
http://www.taylorandfrancis.com
and the CRC Press Web site at
http://www.crcpress.com



© 2009 by Taylor & Francis Group, LLC
Contents


1 Introduction                                                               1
  1.1 Spatial dependence . . . . . . . . . . . . . . . . . . . . . . .       1
  1.2 The spatial autoregressive process . . . . . . . . . . . . . . .       8
       1.2.1 Spatial autoregressive data generating process . . . . .       12
  1.3 An illustration of spatial spillovers . . . . . . . . . . . . . . .   16
  1.4 The role of spatial econometric models . . . . . . . . . . . .        20
  1.5 The plan of the text . . . . . . . . . . . . . . . . . . . . . . .    22

2 Motivating and Interpreting Spatial Econometric Models                    25
  2.1 A time-dependence motivation . . . . . . . . . . . . . . . . .        25
  2.2 An omitted variables motivation . . . . . . . . . . . . . . . .       27
  2.3 A spatial heterogeneity motivation . . . . . . . . . . . . . . .      29
  2.4 An externalities-based motivation . . . . . . . . . . . . . . .       30
  2.5 A model uncertainty motivation . . . . . . . . . . . . . . . .        30
  2.6 Spatial autoregressive regression models . . . . . . . . . . . .      32
  2.7 Interpreting parameter estimates . . . . . . . . . . . . . . . .      33
      2.7.1 Direct and indirect impacts in theory . . . . . . . . .         34
      2.7.2 Calculating summary measures of impacts . . . . . . .           39
      2.7.3 Measures of dispersion for the impact estimates . . . .         39
      2.7.4 Partitioning the impacts by order of neighbors . . . .          40
      2.7.5 Simpliﬁed alternatives to the impact calculations . . .         41
  2.8 Chapter summary . . . . . . . . . . . . . . . . . . . . . . . .       42

3 Maximum Likelihood Estimation                                             45
  3.1 Model estimation . . . . . . . . . . . . . . . . . . . . . . . .      46
      3.1.1 SAR and SDM model estimation . . . . . . . . . . . .            46
      3.1.2 SEM model estimation . . . . . . . . . . . . . . . . . .        50
      3.1.3 Estimates for models with two weight matrices . . . .           52
  3.2 Estimates of dispersion for the parameters . . . . . . . . . .        54
      3.2.1 A mixed analytical-numerical Hessian calculation . . .          56
      3.2.2 A comparison of Hessian calculations . . . . . . . . . .        59
  3.3 Omitted variables with spatial dependence . . . . . . . . . .         60
      3.3.1 A Hausman test for OLS and SEM estimates . . . . .              61
      3.3.2 Omitted variables bias of least-squares . . . . . . . . .       63
      3.3.3 Omitted variables bias for spatial regressions . . . . .        67
  3.4 An applied example . . . . . . . . . . . . . . . . . . . . . . .      68
      3.4.1 Coeﬃcient estimates . . . . . . . . . . . . . . . . . . .       69


                                                                             i
© 2009 by Taylor & Francis Group, LLC
ii

              3.4.2 Cumulative eﬀects estimates . . . . . . . . . . . . . .      70
              3.4.3 Spatial partitioning of the impact estimates . . . . . .     72
              3.4.4 A comparison of impacts from diﬀerent models . . . .         73
     3.5      Chapter summary . . . . . . . . . . . . . . . . . . . . . . . .    75

4 Log-determinants and Spatial Weights                                           77
  4.1 Determinants and transformations . . . . . . . . . . . . . . .             77
  4.2 Basic determinant computation . . . . . . . . . . . . . . . .              81
  4.3 Determinants of spatial systems . . . . . . . . . . . . . . . .            84
       4.3.1 Scalings and similarity transformations . . . . . . . .             87
       4.3.2 Determinant domain . . . . . . . . . . . . . . . . . . .            88
       4.3.3 Special cases . . . . . . . . . . . . . . . . . . . . . . .         89
  4.4 Monte Carlo approximation of the log-determinant . . . . . .               96
       4.4.1 Sensitivity of ρ estimates to approximation . . . . . .            100
  4.5 Chebyshev approximation . . . . . . . . . . . . . . . . . . . .           105
  4.6 Extrapolation . . . . . . . . . . . . . . . . . . . . . . . . . .         108
  4.7 Determinant bounds . . . . . . . . . . . . . . . . . . . . . . .          108
  4.8 Inverses and other functions . . . . . . . . . . . . . . . . . .          110
  4.9 Expressions for interpretation of spatial models . . . . . . . .          114
  4.10 Closed-form solutions for single parameter spatial models . .            116
  4.11 Forming spatial weights . . . . . . . . . . . . . . . . . . . . .        118
  4.12 Chapter summary . . . . . . . . . . . . . . . . . . . . . . . .          120

5 Bayesian Spatial Econometric Models                                           123
  5.1 Bayesian methodology . . . . . . . . . . . . . . . . . . . . . .          124
  5.2 Conventional Bayesian treatment of the SAR model . . . . .                127
      5.2.1 Analytical approaches to the Bayesian method . . . .                127
      5.2.2 Analytical solution of the Bayesian spatial model . . .             130
  5.3 MCMC estimation of Bayesian spatial models . . . . . . . .                133
      5.3.1 Sampling conditional distributions . . . . . . . . . . .            133
      5.3.2 Sampling for the parameter ρ . . . . . . . . . . . . . .            136
  5.4 The MCMC algorithm . . . . . . . . . . . . . . . . . . . . .              139
  5.5 An applied illustration . . . . . . . . . . . . . . . . . . . . .         142
  5.6 Uses for Bayesian spatial models . . . . . . . . . . . . . . . .          145
      5.6.1 Robust heteroscedastic spatial regression . . . . . . .             146
      5.6.2 Spatial eﬀects estimates . . . . . . . . . . . . . . . . .          149
      5.6.3 Models with multiple weight matrices . . . . . . . . .              150
  5.7 Chapter summary . . . . . . . . . . . . . . . . . . . . . . . .           152

6 Model Comparison                                                              155
  6.1 Comparison of spatial and non-spatial models . . . . . . . .              155
  6.2 An applied example of model comparison . . . . . . . . . . .              159
      6.2.1 The data sample used . . . . . . . . . . . . . . . . . .            161
      6.2.2 Comparing models with diﬀerent weight matrices . . .                161
      6.2.3 A test for dependence in technical knowledge . . . . .              163



© 2009 by Taylor & Francis Group, LLC
                                                                                 iii

             6.2.4 A test of the common factor restriction . . . . . . . .      164
             6.2.5 Spatial eﬀects estimates . . . . . . . . . . . . . . . . .   165
     6.3     Bayesian model comparison . . . . . . . . . . . . . . . . . . .    168
             6.3.1 Comparing models based on diﬀerent weights . . . . .         169
             6.3.2 Comparing models based on diﬀerent variables . . . .         173
             6.3.3 An applied illustration of model comparison . . . . . .      175
             6.3.4 An illustration of M C 3 and model averaging . . . . .       178
     6.4     Chapter summary . . . . . . . . . . . . . . . . . . . . . . . .    184
     6.5     Chapter appendix . . . . . . . . . . . . . . . . . . . . . . . .   185

7 Spatiotemporal and Spatial Models                                             189
  7.1 Spatiotemporal partial adjustment model . . . . . . . . . . .             190
  7.2 Relation between spatiotemporal and SAR models . . . . . .                191
  7.3 Relation between spatiotemporal and SEM models . . . . . .                196
  7.4 Covariance matrices . . . . . . . . . . . . . . . . . . . . . . .         197
      7.4.1 Monte Carlo experiment . . . . . . . . . . . . . . . . .            200
  7.5 Spatial econometric and statistical models . . . . . . . . . .            201
  7.6 Patterns of temporal and spatial dependence . . . . . . . . .             203
  7.7 Chapter summary . . . . . . . . . . . . . . . . . . . . . . . .           207

8 Spatial Econometric Interaction Models                                        211
  8.1 Interregional ﬂows in a spatial regression context . . . . . . .          212
  8.2 Maximum likelihood and Bayesian estimation . . . . . . . .                218
  8.3 Application of the spatial econometric interaction model . .              223
  8.4 Extending the spatial econometric interaction model . . . . .             228
      8.4.1 Adjusting spatial weights using prior knowledge . . . .             229
      8.4.2 Adjustments to address the zero ﬂow problem . . . . .               230
      8.4.3 Spatially structured multilateral resistance eﬀects . . .           232
      8.4.4 Flows as a rare event . . . . . . . . . . . . . . . . . . .         234
  8.5 Chapter summary . . . . . . . . . . . . . . . . . . . . . . . .           236

9 Matrix Exponential Spatial Models                                             237
  9.1 The MESS model . . . . . . . . . . . . . . . . . . . . . . . .            237
      9.1.1 The matrix exponential . . . . . . . . . . . . . . . . .            238
      9.1.2 Maximum likelihood estimation . . . . . . . . . . . . .             239
      9.1.3 A closed form solution for the parameters . . . . . . .             240
      9.1.4 An applied illustration . . . . . . . . . . . . . . . . . .         241
  9.2 Spatial error models using MESS . . . . . . . . . . . . . . .             243
      9.2.1 Spatial model Monte Carlo experiments . . . . . . . .               246
      9.2.2 An applied illustration . . . . . . . . . . . . . . . . . .         247
  9.3 A Bayesian version of the model . . . . . . . . . . . . . . . .           250
      9.3.1 The posterior for α . . . . . . . . . . . . . . . . . . . .         250
      9.3.2 The posterior for β . . . . . . . . . . . . . . . . . . . .         252
      9.3.3 Applied illustrations . . . . . . . . . . . . . . . . . . .         253
  9.4 Extensions of the model . . . . . . . . . . . . . . . . . . . . .         255



© 2009 by Taylor & Francis Group, LLC
iv

              9.4.1 More ﬂexible weights . . . . . . . . . . . . . . . . . . .     255
              9.4.2 MCMC estimation . . . . . . . . . . . . . . . . . . . .        256
              9.4.3 MCMC estimation of the model . . . . . . . . . . . .           257
              9.4.4 The conditional distributions for β, σ and V . . . . . .       258
              9.4.5 Computational considerations . . . . . . . . . . . . . .       259
              9.4.6 An illustration of the extended model . . . . . . . . .        260
     9.5      Fractional diﬀerencing . . . . . . . . . . . . . . . . . . . . . .   265
              9.5.1 Empirical illustrations . . . . . . . . . . . . . . . . . .    270
              9.5.2 Computational considerations . . . . . . . . . . . . . .       275
     9.6      Chapter summary . . . . . . . . . . . . . . . . . . . . . . . .      277

10 Limited Dependent Variable Spatial Models                                       279
   10.1 Bayesian latent variable treatment . . . . . . . . . . . . . . .           281
        10.1.1 The SAR probit model . . . . . . . . . . . . . . . . . .            283
        10.1.2 An MCMC sampler for the SAR probit model . . . .                    284
        10.1.3 Gibbs sampling the conditional distribution for y ∗ . .             285
        10.1.4 Some observations regarding implementation . . . . .                287
        10.1.5 Applied illustrations of the spatial probit model . . . .           289
        10.1.6 Marginal eﬀects for the spatial probit model . . . . . .            293
   10.2 The ordered spatial probit model . . . . . . . . . . . . . . .             297
   10.3 Spatial Tobit models . . . . . . . . . . . . . . . . . . . . . .           299
        10.3.1 An example of the spatial Tobit model . . . . . . . . .             302
   10.4 The multinomial spatial probit model . . . . . . . . . . . . .             306
        10.4.1 The MCMC sampler for the SAR MNP model . . . .                      307
        10.4.2 Sampling for β and ρ . . . . . . . . . . . . . . . . . . .          308
        10.4.3 Sampling for Σ . . . . . . . . . . . . . . . . . . . . . .          308
        10.4.4 Sampling for ỹ ∗ . . . . . . . . . . . . . . . . . . . . . .       310
   10.5 An applied illustration of spatial MNP . . . . . . . . . . . .             312
        10.5.1 Eﬀects estimates for the spatial MNP model . . . . .                314
   10.6 Spatially structured eﬀects probit models . . . . . . . . . . .            316
   10.7 Chapter summary . . . . . . . . . . . . . . . . . . . . . . . .            320

References                                                                         323




© 2009 by Taylor & Francis Group, LLC
List of Figures


     1.1      Regions around a CBD . . . . . . . . . . . . . . . . . . . . . .        3
     1.2      Solow residuals . . . . . . . . . . . . . . . . . . . . . . . . . .     6
     1.3      Solow residuals map legend . . . . . . . . . . . . . . . . . . .        6
     1.4      Moran scatter plot of factor productivity . . . . . . . . . . . .      12
     1.5      Moran plot map of factor productivity . . . . . . . . . . . . .        13

     4.1     Bivariate (y1 , y2 ) transformation . . . . . . . . . . . . . . . .     79
     4.2     Normal point clouds . . . . . . . . . . . . . . . . . . . . . . .       80
     4.3     Six nearest neighbors . . . . . . . . . . . . . . . . . . . . . . .     86
     4.4     Plot of non-zeros of In − 0.8W . . . . . . . . . . . . . . . . .        90
     4.5     Plot of pivots of In − 0.8W . . . . . . . . . . . . . . . . . . .       91
     4.6     Exact and ﬁfth order Chebyshev log-determinants . . . . . .            107
     4.7     Log-determinants for increasing domain ordering . . . . . . .          109
     4.8     Voronoi diagram . . . . . . . . . . . . . . . . . . . . . . . . .      119

     5.1     Metropolis-Hastings acceptance rates . . . . . . . . . . . . . .       138
     5.2     Draw by inversion . . . . . . . . . . . . . . . . . . . . . . . .      140
     5.3     The B(d, d) prior distribution for rho . . . . . . . . . . . . . .     143
     5.4     Kernel density estimates of the posterior . . . . . . . . . . . .      144

     8.1      Origin-Destination region contiguity relationships . . . . . . .      230
     8.2      Regions on and oﬀ of Austria’s major road/rail network . . .          231

     9.1      Posterior distribution of α parameter . . . . . . . . . . . . . .     263
     9.2      Posterior vi estimates . . . . . . . . . . . . . . . . . . . . . .    266




                                                                                     v
© 2009 by Taylor & Francis Group, LLC
List of Tables


     1.1      Spatial spillovers from population density . . . . . . . . . . .      18
     1.2      Non-spatial predications for changes in population density . .        20

     2.1      Spatial partitioning of impacts . . . . . . . . . . . . . . . . .     41

     3.1      A comparison of t-statistics . . . . . . . . . . . . . . . . . . .    60
     3.2      Omitted variables bias with spatial dependence . . . . . . . .        66
     3.3      SEM and SDM model estimates . . . . . . . . . . . . . . . . .         70
     3.4      Cumulative eﬀects . . . . . . . . . . . . . . . . . . . . . . . .     71
     3.5      Marginal impacts . . . . . . . . . . . . . . . . . . . . . . . . .    72
     3.6      SAR and SAC model estimates . . . . . . . . . . . . . . . . .         73
     3.7      Cumulative impacts comparison . . . . . . . . . . . . . . . . .       74

     4.1     Times in seconds for diﬀerent orderings . . . . . . . . . . . .        87
     4.2     Estimates of ρ based on MC log-determinant estimates . . . .          101
     4.3     Individual MC trace estimates . . . . . . . . . . . . . . . . .       102

     5.1     Comparison of SAR model estimates . . . . . . . . . . . . . .         145

     6.1 Spatial weights model comparison . . . . . . . . . . . . . . .            162
     6.2 Estimates comparison for varying weights . . . . . . . . . . .            163
     6.3 Test for technical knowledge dependence . . . . . . . . . . . .           163
     6.4 Bayesian test for common factor restriction . . . . . . . . . .           165
     6.5 Cumulative knowledge stocks eﬀects . . . . . . . . . . . . . .            167
     6.6 Posterior probabilities for varying weights . . . . . . . . . . .         176
     6.7 Posterior probabilities for m and φ . . . . . . . . . . . . . . .         177
     6.8 SLX vs. SDM model estimates . . . . . . . . . . . . . . . . .             179
     6.9 SLX BMA information . . . . . . . . . . . . . . . . . . . . . .           179
     6.10 SDM BMA information . . . . . . . . . . . . . . . . . . . . .            179
     6.11 Model averaged estimates . . . . . . . . . . . . . . . . . . . .         181
     6.12 Model averaged impact estimates . . . . . . . . . . . . . . . .          182
     6.13 Single model eﬀects estimates . . . . . . . . . . . . . . . . . .        183

     7.1      Experimental estimates . . . . . . . . . . . . . . . . . . . . .     201
     7.2      Matrix exponential Monte Carlo results . . . . . . . . . . . .       206

     8.1      OD ﬂow matrix . . . . . . . . . . . . . . . . . . . . . . . . . .    212
     8.2      Origin- and destination-centric ﬂows . . . . . . . . . . . . . .     213


                                                                                   vii
© 2009 by Taylor & Francis Group, LLC
viii

       8.3   Interaction model estimates . . . . . . . . . . . . . . . . . . .    224
       8.4   Interaction model log-likelihoods . . . . . . . . . . . . . . . .    225
       8.5   Interaction model eﬀects estimates . . . . . . . . . . . . . . .     227

       9.1 Correspondence between SAR and MESS estimates . . . . . .              242
       9.2 Dependence parameter estimates across various DGPs . . . .             247
       9.3 Mean and dispersion of estimates across various DGPs . . . .           248
       9.4 Correlations among β estimates . . . . . . . . . . . . . . . . .       249
       9.5 Correlations among signed root deviances . . . . . . . . . . .         249
       9.6 Opposite signs for coeﬃcients . . . . . . . . . . . . . . . . . .      249
       9.7 Bayesian estimation results for three applied examples . . . .         254
       9.8 A comparison of models from experiment 1 . . . . . . . . . .           262
       9.9 Speciﬁcation search example . . . . . . . . . . . . . . . . . . .      264
       9.10 Homogeneity test results for two data sets . . . . . . . . . . .      265
       9.11 ML estimates for election data using Wc . . . . . . . . . . . .       273
       9.12 ML estimates for election data using Wnn . . . . . . . . . . .        274
       9.13 ML estimates for housing data using Wc . . . . . . . . . . . .        274
       9.14 ML estimates for housing data using Wnn . . . . . . . . . . .         275
       9.15 Weights by order of neighbors . . . . . . . . . . . . . . . . . .     276

       10.1 SAR probit model estimates . . . . . . . . . . . . . . . . . . .      291
       10.2 The impact of changing m on the estimates . . . . . . . . . .         291
       10.3 SAR probit model estimates . . . . . . . . . . . . . . . . . . .      292
       10.4 Marginal eﬀects estimates . . . . . . . . . . . . . . . . . . . .     296
       10.5 Spatial Tobit estimates . . . . . . . . . . . . . . . . . . . . . .   303
       10.6 OD Tobit estimates . . . . . . . . . . . . . . . . . . . . . . . .    305
       10.7 Spatial MNP estimates . . . . . . . . . . . . . . . . . . . . . .     313




© 2009 by Taylor & Francis Group, LLC
Preface


This text provides an introduction to spatial econometric modeling along with
numerous applied illustrations of the methods. It is intended as a text for
students and researchers with a basic background in regression methods in-
terested in learning about spatial regression models. There has been a surge
of interest in these modeling methods in recent years, yet there exists no
comprehensive up-to-date text that discusses the variety of approaches avail-
able in a consistent manner. This text would be appropriate for an advanced
undergraduate or graduate level course in the subject.
   When producing a text, there are always trade-oﬀs between breadth and
depth of coverage and we have attempted to cover a wide range of alterna-
tive topics including: maximum likelihood and Bayesian estimation, diﬀerent
types of spatial regression speciﬁcations such as the spatial autoregressive
and matrix exponential, applied modeling situations involving diﬀerent cir-
cumstances including origin-destination ﬂows, limited dependent variables,
and space-time data samples. This breadth of coverage comes at the expense
of detailed derivations in some parts of the text. In these cases, we provide a
host of references to the growing body of spatial econometric literature.
   Readers interested in implementing the methods discussed here should ﬁnd
useful MATLAB code that is publicly available at: spatial-econometrics.com
and spatial-statistics.com. Toolboxes are the name given by the MathWorks
Inc. to related sets of MATLAB functions aimed at solving a particular class of
problems. The two web sites are the home of the Spatial Econometrics Toolbox
and Spatial Statistics Toolbox, which contain a number of functions useful for
spatial econometric estimation. All of the applied examples presented in the
text were constructed using these toolbox functions. We have chosen not to
discuss details regarding MATLAB computer codes for the methods presented
in the text, but have modiﬁed the documentation for the toolbox code to
reference various sections in this text.
   One of our goals in writing the text was to provide a number of diﬀerent
motivations for the phenomena known as simultaneous spatial dependence.
This is a central concept that justiﬁes use of spatial autoregressive processes
that have become a mainstay of spatial econometrics. Luc Anselin in his
inﬂuential 1988 text on spatial econometrics provides a strong argument for
use of models capable of addressing simultaneous spatial dependence that
arises in spatial data samples. However, this concept has made the ﬁeld
somewhat mysterious, and we believe the alternative motivations provided
here for use of spatial regression models involving spatial lags of the dependent


                                                                              ix
© 2009 by Taylor & Francis Group, LLC
x

variable will help demystify the concept.
   Another goal of the text was to aid practitioners with interpretation of
spatial regression models, especially those that include spatial lags of the
dependent variable. The applied literature contains a number of studies that
misinterpret regression results from these models. We provide new methods
that produce useful summary measures of the direct and indirect or spatial
spillover impacts that arise in these models in response to changes in the
explanatory variables. A number of applied illustrations are provided that
should help practitioners with this task.
   Another important issue is the relationship between spatiotemporal pro-
cesses and long-run equilibrium states that are characterized by simultaneous
spatial dependence. We devote a chapter of the text to motivating how spa-
tiotemporal processes are related to a host of spatial models characterized
by simultaneous and conditional spatial dependence. Using spatiotemporal
processes of the type explored here would ensure that space-time panel model
speciﬁcations could be justiﬁed as arising from underlying space-time inter-
actions. This may help improve current space-time panel data speciﬁcations.
   The views expressed regarding spatial econometric modeling represent a
consensus that has arisen from almost daily phone conversations between the
authors over the ten year period of our collaborative research. Due to the
rapidly evolving nature of the ﬁeld, much of the material reﬂects recent ideas
that have not appeared elsewhere. For example, the chapter on limited depen-
dent variable modeling provides a comprehensive development of new ideas
that diﬀer from some past work, and extensions to the case of multinomial spa-
tial autoregressive probit models. The chapter on matrix exponential spatial
speciﬁcations elaborates in a number of ways on our Journal of Econometrics
article on this topic. Our scalar summary measures of spatial impact estimates
have been the subject of conference presentations but have not appeared in
print. The same is true of the numerous motivations for spatial regression
models that include spatial lags of the dependent variable.




© 2009 by Taylor & Francis Group, LLC
Acknowledgements


Many years ago, Luc Anselin encouraged Jim LeSage to produce a text de-
scribing Bayesian spatial econometric methods, and has been a source of en-
couragement along the way.
   Interaction at conferences and work on joint projects with a number of
colleagues over the years has provided a welcome opportunity to discuss and
debate spatial econometric issues. Some of the ideas in this text have been
stimulated by joint research with colleagues: Corrine Autant-Bernard, Ron
Barry, Eric Blankmeyer, Cem Ertur, Manfred Fischer, Wilfried Koch, Carlos
Llano, Julie LeGallo, Olivier Parent, Wolfgang Polasek, Tony Smith, and
Christine Thomas-Agnan. Other ideas arose from conference sessions and
discussions involving: Sudipto Banerjee, Badi Baltagi, Roger Bivand, David
Brasington, J. Paul Elhorst, Bernard Fingleton, Alan Gelfand, Art Getis,
Daniel Griﬃth, Carter Hill, Garth Holloway, James Kau, Harry Kelejian, Kara
Kockelman, Donald Lacombe, Ingmar Prucha, Dek Terrell, C. F. Sirmans,
Carlos Slawson, and Michael Tiefelsdorf.
   During preparation of the manuscript, we received a great deal of proof-
reading assistance from: Shuang Zhu, Mihaela Craioveanu, Olivier Parent,
Garth Holloway, and Donald Lacombe.
   We would like to thank David Grubbs and Taylor & Francis for proposing
the idea of a text on spatial econometrics, and Jessica Vakili for editorial
assistance.
   The authors would like to thank the McCoy family and Jerry D. and Linda
Gregg Fields for their generous support of the McCoy College of Business
Administration at Texas State University-San Marcos, and the Louisiana
Real Estate Commission for support of the E.J. Ourso College of Business
at Louisiana State University and the Real Estate Research Institute.
   Finally, the authors would like to thank the Louisiana and Texas Sea Grant
programs and especially the National Science Foundation for their support
of our research on spatial econometric methods through the following grants
BSC-0136193, BSC-0136229, BCS-0554937, SES-0729259, and SES-0729264.




                                                                           xi
© 2009 by Taylor & Francis Group, LLC
                                                                              xiii

Symbol Description

             represents Hadamard or                  a vector
              element-by-element multi-      π()      denotes prior distributions
              plication                      N (a, b) represents a normal distri-
⊗             represents a Kronecker                  bution with mean a and
              product                                 variance b
ιn            denotes an n × 1 vector of     IG(a, b) represents     an    inverse
              ones                                    gamma distribution with
iid           stands for independent and              parameters a, b
              identically distributed        N IG     represents a combination of
∂             denotes a partial derivative            normal and inverse gamma
|A|           is the determinant of the               distributions
              matrix A                       T M N V represents a truncated mul-
(a, b)        open interval that excludes             tivariate normal distribu-
              the endpoints a and b                   tion
[a, b]        closed interval that in-
                                             χ2 (r)   represents a chi-squared
              cludes the endpoints a and
                                                      distribution with parame-
              b
                                                      ter r
diag          extracts the main diagonal
                                             B(a, b) represents a beta distribu-
              from a matrix
                                                      tion with parameters a, b
tr            trace operator for matrices
                                             D        represents the set of model
abs           absolute value operator
                                                      data {y, X, W }
plim          probability limit operator
δ()           is an indicator function,      P()      represents the Poisson dis-
              δ(A) = 1 for outcomes                   tribution
              where A occurs, δ(A) = 0       κ        denotes a real constant
              otherwise.                     Γ(a)     represents the Gamma
                                                                  ∞
∝             proportionality symbol                  function, 0 ta−1 e−t dt
vec           an operator that stacks        Beta() represents the Beta func-
                                                            1
              columns of a matrix to form             tion, 0 ta−1 (1 − t)b−1 dt




© 2009 by Taylor & Francis Group, LLC
Chapter 1
Introduction


Section 1.1 of this chapter introduces the concept of spatial dependence that
often arises in cross-sectional spatial data samples. Spatial data samples rep-
resent observations that are associated with points or regions, for example
homes, counties, states, or census tracts. Two motivational examples are pro-
vided for spatial dependence, one based on spatial spillovers stemming from
congestion eﬀects and a second that relies on omitted explanatory variables.
Section 1.2 sets forth spatial autoregressive data generating processes for spa-
tially dependent sample data along with spatial weight matrices that play an
important role in describing the structure of these processes. We provide more
detailed discussion of spatial data generating processes and associated spatial
econometric models in Chapter 2, and spatial weight matrices in Chapter 4.
Our goal here is to provide an introduction to spatial autoregressive processes
and spatial regression models that rely on this type of process. Section 1.3
provides a simple example of how congestion eﬀects lead to spatial spillovers
that impact neighboring regions using travel times to the central business
district (CBD) region of a metropolitan area. Section 1.4 describes various
scenarios in which spatial econometric models can be used to analyze spatial
spillover eﬀects. The ﬁnal section of the chapter lays out the plan of this text.
A brief enumeration of the topics covered in each chapter is provided.




1.1        Spatial dependence
   Consider a cross-sectional variable vector representing observations col-
lected with reference to points or regions in space. Point observations could
include selling prices of homes, employment at various establishments, or en-
rollment at individual schools. Geographic information systems typically sup-
port geocoding or address matching which allow addresses to be automatically
converted into locational coordinates. The ability to geocode has led to vast
amounts of spatially-referenced data. Observations could include a variable
like population or average commuting time for residents in regions such as
census tracts, counties, or metropolitan statistical areas (MSAs). In contrast
to point observations, for a region we rely on the coordinates of an interior
point representing the center (the centroid ). An important point is that in


                                                                               1
© 2009 by Taylor & Francis Group, LLC
2                                Introduction to Spatial Econometrics

spatial regression models each observation corresponds to a location or region.
   The data generating process (DGP) for a conventional cross-sectional non-
spatial sample of n independent observations yi , i = 1, . . . , n that are linearly
related to explanatory variables in a matrix X takes the form in (1.1), where
we have suppressed the intercept term, which could be included in the matrix
X.


                                        yi = Xi β + εi                           (1.1)
                                                     2
                                        εi ∼ N (0, σ )        i = 1, . . . , n   (1.2)

In (1.2), we use N (a, b) to denote a univariate normal distribution with mean
a and variance b. In (1.1), Xi represents a 1 × k vector of covariates or
explanatory variables, with associated parameters β contained in a k × 1
vector. This type of data generating process is typically assumed for linear
regression models. Each observation has an underlying mean of Xi β and
a random component εi . An implication of this for situations where the
observations i represent regions or points in space is that observed values
at one location (or region) are independent of observations made at other
locations (or regions). Independent or statistically independent observations
imply that E(εi εj ) = E(εi )E(εj ) = 0. The assumption of independence
greatly simpliﬁes models, but in spatial contexts this simpliﬁcation seems
strained.
   In contrast, spatial dependence reﬂects a situation where values observed at
one location or region, say observation i, depend on the values of neighboring
observations at nearby locations. Suppose we let observations i = 1 and j = 2
represent neighbors (perhaps regions with borders that touch), then a data
generating process might take the form shown in (1.3).


                                           yi = αi yj + Xi β + εi                (1.3)
                                           yj = αj yi + Xj β + εj
                                           εi ∼ N (0, σ 2 )  i=1
                                           εj ∼ N (0, σ 2 )       j=2

This situation suggests a simultaneous data generating process, where the
value taken by yi depends on that of yj and vice versa. As a concrete example,
consider the set of seven regions shown in Figure 1.1, which represent three
regions to the west and three to the east of a central business district (CBD).
   For the purpose of this example, we will consider these seven regions to con-
stitute a single metropolitan area, with region R4 being the central business
district. Since the entire region contains only a single roadway, all commuters
share this route to and from the CBD.
   We might observe the following set of sample data for these regions that
relates travel times to the CBD (in minutes) contained in the dependent vari-



© 2009 by Taylor & Francis Group, LLC
                                             Introduction                           3




                    R1           R2     R3        R4        R5   R6   R7

                                                  CBD


        West                                      Highway                  East

                    R1           R2     R3        R4        R5   R6   R7

                                                  CBD




FIGURE 1.1: Regions east and west of the Central Business District


able vector y to distance (in miles) and population density (population per
square block) of the regions in the two columns of the matrix X.

          ⎛         ⎞                         ⎛               ⎞
       Travel times                          Density Distance
     ⎜     42       ⎟                      ⎜ 10         30    ⎟ ex-urban areas R1
     ⎜              ⎟                      ⎜                  ⎟
     ⎜     37       ⎟                      ⎜ 20         20    ⎟ far suburbs    R2
     ⎜              ⎟                      ⎜                  ⎟
     ⎜     30       ⎟                      ⎜ 30         10    ⎟ near suburbs R3
   y=⎜
     ⎜
                    ⎟
                    ⎟                   X =⎜
                                           ⎜ 50
                                                              ⎟
                                                              ⎟ CBD
     ⎜     26       ⎟                      ⎜             0    ⎟                R4
     ⎜     30       ⎟                      ⎜ 30         10    ⎟ near suburbs R5
     ⎜              ⎟                      ⎜                  ⎟
     ⎝     37       ⎠                      ⎝ 20         20    ⎠ far suburbs    R6
           42                                  10       30      ex-urban areas R7

   The pattern of longer travel times for more distant regions R1 and R7 versus
nearer regions R3 and R5 found in the vector y seems to clearly violate inde-
pendence, since travel times appear similar for neighboring regions. However,
we might suppose that this pattern is explained by the model variables Dis-
tance and Density associated with each region, since these also appear similar
for neighboring regions. Even for individuals in the CBD, it takes time to go
somewhere else in the CBD. Therefore, the travel time for intra-CBD travel
is 26 minutes despite having a distance of 0 miles.
   Now, consider that our set of observed travel times represent measurements
taken on a particular day, so we have travel times to the CBD averaged over a
24 hour period. In this case, some of the observed pattern might be explained



© 2009 by Taylor & Francis Group, LLC
4                                Introduction to Spatial Econometrics

by congestion eﬀects that arise from the shared highway. It seems plausible
that longer travel times in one region should lead to longer travel times in
neighboring regions on any given day. This is because commuters pass from
one region to another as they travel along the highway to the CBD. Slower
times in R3 on a particular day should produce slower times for this day in
regions R2 and R1. Congestion eﬀects represent one type of spatial spillover,
which do not occur simultaneously, but require some time for the traﬃc delay
to arise. From a modeling viewpoint, congestion eﬀects such as these will not
be explained by the model variables Distance and Density. These are dynamic
feedback eﬀects from travel time on a particular day that impact travel times
of neighboring regions in the short time interval required for the traﬃc delay to
occur. Since the explanatory variable distance would not change from day to
day, and population density would change very slowly on a daily time scale,
these variables would not be capable of explaining daily delay phenomena.
Observed daily variation in travel times would be better explained by relying
on travel times from neighboring regions on that day. This is the situation
depicted in (1.3), where we rely on travel time from a neighboring observation
yj as an explanatory variable for travel time in region i, yi . Similarly we use
yi to explain region j travel time, yj .
   Since our observations were measured using average times for one day, the
measurement time scale is not ﬁne enough to capture the short-interval time
dynamic aspect of traﬃc delay. This would result in observed daily travel
times in the vector y that appear to be simultaneously determined. This is an
example of why measured spatial dependence may vary with the time-scale of
data collection.
   Another example where observed spatial dependence may arise from omit-
ted variables would be the case of a hedonic pricing model with sales prices
of homes as the vector y and characteristics of the homes as explanatory vari-
ables in the matrix X. If we have a cross-sectional sample of sales prices in
a neighborhood collected over a period of one year, variation in the charac-
teristics of the homes should explain part of the variation in observed sales
prices. Consider a situation where a single home sells for a much higher price
than would be expected based solely on its characteristics. Assume this sale
took place at the mid-point of our 12 month observation period, shortly after
a positive school quality report was released for a nearby school. Since school
quality was not a variable included in the set of explanatory variables rep-
resenting home characteristics, the higher than expected selling price might
reﬂect a new premium for school quality. This might signal other sellers of
homes served by the same school to ask for higher prices, or to accept of-
fers that are much closer to their asking prices during the last six months
of our observation period. This would lead to a situation where use of sell-
ing prices from neighboring homes produce improved explanatory power for
homes served by the high quality school during the last six months of our sam-
ple. Other omitted variables could be accessibility to transportation, nearby
amenities such as shopping or parks, and so on. If these were omitted from



© 2009 by Taylor & Francis Group, LLC
                                        Introduction                           5

the set of explanatory variables consisting solely of home characteristics, we
would ﬁnd that selling prices from neighboring homes are useful for prediction.
   An illustration that non-spatial regression models will ignore spatial de-
pendence in the dependent variable is provided by a map of the ordinary
least-squares residuals from a production function regression: ln(Q) = αιn +
β ln(K) + γ ln(L) + ε, estimated using the 48 contiguous US states plus the
District of Columbia. Gross state product for the year 2001 was used as Q,
with labor L being 2001 total non-farm employment in each state. Capital
estimates K for the states are from Garofalo and Yamarik (2002). These resid-
uals are often referred to as the Solow residual if constant returns to scale are
imposed so that β = φ, γ = (1 − φ). In the context of a Solow growth model,
they are interpreted as reﬂecting economic growth above the rate of capital
growth, or that not explained by growth in factors of production. In the case
of our production function model, these would be interpreted as total factor
productivity, so they reﬂect output attributable to regional variation in the
technological eﬃciency with which these factors are used.
   Figure 1.2 shows a choropleth map of total factor productivity (the resid-
uals from our production function regression). A choropleth map relies on
shaded or patterned areas to reﬂect the measured values of the variable being
displayed on the map. It provides a visual depiction of how values of a vari-
able diﬀer over space. Figure 1.3 displays an associated legend for the map
taking the form of a histogram showing the frequency distribution of states
according to the magnitude of their residuals. We see negative residuals for
12 states, including the cluster of 7 neighboring states, Texas, Oklahoma,
Louisiana, Mississippi, Tennessee Arkansas and Alabama. A negative resid-
ual would indicate that observed output Q was lower than output predicted
by the regression based on labor and capital available to these states. From
the legend in Figure 1.3 we see that blue, green and purple states represent
positive residuals. Of the 11 green states we see a cluster of these states in
the northeast, indicating that observed output for these states was above that
predicted by our regression model, reﬂecting higher than expected total factor
productivity.
   If the residuals were randomly distributed with regard to location, we would
not see clusters of red and green states that are indicative of negative and
positive residuals associated with neighboring states. This type of clustering
represents a visual depiction of spatial dependence in the residuals or factor
productivity from the non-spatial regression model.
   A question arises — what leads to the observed spatial dependence in total
factor productivity? There is a role for spatial econometric modeling methods
to play in answering this question. As we will see, diﬀerent model speciﬁca-
tions suggest diﬀerent theoretical justiﬁcations, and vice versa. In traditional
econometrics there are three uses of empirical models: 1) estimation and in-
ference regarding parameters, 2) prediction or out-of-sample forecasting and
3) model comparison of alternative speciﬁcations.
   We can use spatial econometric models in the same three ways to answer the



© 2009 by Taylor & Francis Group, LLC
6                                        Introduction to Spatial Econometrics




FIGURE 1.2: Solow residuals, 2001 US states (see color ﬁgure on the insert
following page 24)


                                         20

                                         18

                                         16

                                         14

                                         12
                             Frequency




                                         10

                                          8

                                          6

                                          4

                                          2

                                          0
                                         -0.2   -0.1   0     0.1   0.2      0.3   0.4   0.5
                                                           Solow Residual



FIGURE 1.3: Solow residuals map legend (see color insert)


question regarding observed spatial dependence in dependent variables from
our models as well as residuals. For example, there has been some theoretical
work on extending neoclassical growth models to provide a justiﬁcation for a
spatially lagged dependent variable (Lopez-Bazo et al., 2004; Ertur and Koch,
2007) in our production function model. A spatial lag of the dependent vari-
able is an explanatory variable vector constructed using an average of values



© 2009 by Taylor & Francis Group, LLC
                                        Introduction                          7

from neighboring regions. These theoretical models posit physical and human
capital externalities as well as technological interdependence between regions,
which leads to a reduced form regression that includes a spatial lag of the
dependent variable.



  Spatial econometric model comparison methods could be used to test these
theories by comparing models that include a spatial lag of the dependent
variable to other model speciﬁcations that do not. Predictions or out-of-
sample forecasts from models including a spatially lagged dependent variable
could be compared to models that do not include these terms to provide
evidence in favor of these theories. Finally, estimates and inferences regarding
the signiﬁcance of the parameter associated with the spatially lagged variable
could be used to show consistency of these theories with the sample data.



   There are other possible explanations for the observed pattern of spatial
dependence. Since we are mapping residuals that reﬂect total factor produc-
tivity, these are conditional on capital and labor inputs. There is a great deal
of literature that examines regional production from the standpoint of the
new economic geography (Duranton and Puga, 2001; Autant-Bernard, 2001;
Autant-Bernard, Mairesse and Massard, 2007; Parent and LeSage, 2008).
These studies point to spatial spillovers that arise from technological inno-
vation, measured using regional patents as a proxy for the stock of knowledge
available to a region. In Chapter 3 we will provide an applied illustration of
this total factor productivity relationship that is used to quantify the magni-
tude of spatial spillovers arising from regional diﬀerences in technical innova-
tion.



   In time series, lagged dependent variables can be justiﬁed by theoretical
models that include costly adjustment or other behavioral frictions which
give rise quite naturally to time lags of the dependent variable. As we saw
with the travel time to the CBD example, a similar motivation can be used for
spatial lags. Another justiﬁcation often used in the case of time series is that
the lagged dependent variable accounts for variation in the dependent variable
that arises from unobserved or latent inﬂuences. As we have seen in the case
of our hedonic home sales price example, a similar justiﬁcation can be used for
a spatial lag of the dependent variable. Latent unobservable inﬂuences related
to culture, infrastructure, or recreational amenities can aﬀect the dependent
variable, but may not appear as explanatory variables in the model. Use of a
spatial regression model that includes a spatial lag of the dependent variable
vector can capture some of these inﬂuences.



© 2009 by Taylor & Francis Group, LLC
8                                Introduction to Spatial Econometrics



1.2        The spatial autoregressive process
  We could continue in the fashion of (1.3) to generate a larger set of obser-
vations as shown in (1.4).


                                    yi = αi,j yj + αi,k yk + Xi β + εi           (1.4)
                                    yj = αj,i yi + αj,k yk + Xj β + εj
                                    yk = αk,i yi + αk,j yj + Xk β + εk
                                    εi ∼ N (0, σ 2 )        i=1
                                    εj ∼ N (0, σ 2 )        j=2
                                    εk ∼ N (0, σ 2 )        k=3

It is easy to see that this would be of little practical usefulness, since it would
result in a system with many more parameters than observations.
   Intuitively, once we allow for dependence relations between a set of n ob-
servations/locations, there are potentially n2 − n relations that could arise.
We subtract n from the potential n2 dependence relations because we rule out
dependence of an observation on itself.
   The solution to the over-parameterization problem that arises when we al-
low each dependence relation to have relation-speciﬁc parameters is to impose
structure on the spatial dependence relations. Ord (1975) proposed a parsi-
monious parameterization for the dependence relations (which built on early
work by Whittle (1954)). This structure gives rise to a data generating pro-
cess known as a spatial autoregressive process. Applied to the dependence
relations between the observations on variable y, we have expression (1.5).

                                                 n
                                        yi = ρ         Wij yj + εi               (1.5)
                                                 j=1

                                        εi ∼ N (0, σ 2 )      i = 1, . . . , n

Where we eliminate an intercept term by assuming that the vector of ob-
servations on the variable y is in deviations from means form. The term:
   n
   j=1 Wij yj is called a spatial lag, since it represents a linear combination of
values of the variable y constructed from observations/regions that neighbor
observation i. This is accomplished by placing elements Wij in the n × n spa-
                                      n
tial weight matrix W , such that j=1 Wij yj results in a scalar that represents
a linear combination of values taken by neighboring observations.
   As an example, consider the seven regions shown in Figure 1.1. The single
ﬁrst-order neighbor to region R1 is region R2, since this is the only region
that has borders that touch region R1. Similarly, region R2 has 2 ﬁrst-order



© 2009 by Taylor & Francis Group, LLC
                                        Introduction                           9

neighbors, regions R1 and R3. We can deﬁne second-order neighbors as re-
gions that are neighbors to the ﬁrst-order neighbors. Second-order neighbors
to region R1 would consist of all regions having borders that touch the ﬁrst-
order neighbor (region R2), which are: regions R1 and R3. It is important
to note that region R1 is a second-order neighbor to itself. This is because
region R1 is a neighbor to its neighbor, which is the deﬁnition of a second-
order neighboring relation. If the neighboring relations are symmetric, each
region will always be a second order neighbor to itself. By nature, contiguity
relations are symmetric, but we will discuss other deﬁnitions of neighboring
relations in Chapter 4 that may not result in symmetry.
   We can write a matrix version of the spatial autoregressive process as in
(1.6), where we use N (0, σ 2 In ) to denote a zero mean disturbance process that
exhibits constant variance σ 2 , and zero covariance between observations. This
results in the diagonal variance-covariance matrix σ 2 In , where In represents
an n-dimensional identity matrix. Expression (1.6) makes it clear that we are
describing a relation between the vector y and the vector W y representing a
linear combination of neighboring values to each observation.


                                        y = ρW y + ε                       (1.6)
                                        ε ∼ N (0, σ 2 In )

  To illustrate this, we form a 7 × 7 spatial weight matrix W using the ﬁrst-
order contiguity relations for the seven regions shown in Figure 1.1. This
involves associating rows of the matrix with the observation index i, and
columns with the index j representing neighboring observations/regions to
region i. We begin by forming a ﬁrst-order contiguity matrix C shown in
(1.7). For row 1 we place a value of 1 in column 2, reﬂecting the fact that
region R2 is ﬁrst-order contiguous to region R1. All other elements of row
1 receive values of zero. Similarly, for each row we place a 1 in columns
associated with ﬁrst-order contiguous neighbors, resulting in the matrix C
shown in (1.7).
                          ⎛                             ⎞
                               R1 R2 R3 R4 R5 R6 R7
                          ⎜ R1 0 1 0 0 0 0 0 ⎟
                          ⎜                             ⎟
                          ⎜ R2 1 0 1 0 0 0 0 ⎟
                          ⎜                             ⎟
                          ⎜ R3 0 1 0 1 0 0 0 ⎟
                     C=⎜  ⎜ R3 0 0 1 0 1 0 0 ⎟
                                                        ⎟               (1.7)
                          ⎜                             ⎟
                          ⎜ R5 0 0 0 1 0 1 0 ⎟
                          ⎜                             ⎟
                          ⎝ R6 0 0 0 0 1 0 1 ⎠
                            R7 0 0 0 0 0 1 0
  We note that the diagonal elements of the matrix C are zero, so regions
are not considered neighbors to themselves. For the purpose of forming a
spatial lag or linear combination of values from neighboring observations, we
can normalize the matrix C to have row sums of unity. This row-stochastic



© 2009 by Taylor & Francis Group, LLC
10                                Introduction to Spatial Econometrics

matrix which we label W is shown in (1.8), where the term row-stochastic
refers to a non-negative matrix having row sums normalized so they equal
one.
                        ⎛                           ⎞
                           0 1 0 0 0 0 0
                        ⎜ 1/2 0 1/2 0 0 0 0 ⎟
                        ⎜                           ⎟
                        ⎜ 0 1/2 0 1/2 0 0 0 ⎟
                        ⎜                           ⎟
                   W =⎜ ⎜ 0 0 1/2 0 1/2 0 0 ⎟
                                                    ⎟               (1.8)
                        ⎜ 0 0 0 1/2 0 1/2 0 ⎟
                        ⎜                           ⎟
                        ⎝ 0 0 0 0 1/2 0 1/2 ⎠
                           0 0 0 0 0 1 0
    The 7 × 7 matrix W can be multiplied with a 7 × 1 vector y of values taken
by each region to produce a spatial lag vector of the dependent variable vec-
tor taking the form W y. The matrix product W y works to produce a 7 × 1
vector representing the value of the spatial lag vector for each observation
i, i = 1, . . . , 7. We will provide details on various approaches to formulating
spatial weight matrices in Chapter 4, which involve alternative ways to deﬁn-
ing and weighting neighboring observations. For now, we note that use of
the matrix W which weights each neighboring observation equally will result
in the spatial lag vector being a simple average of values from neighboring
(ﬁrst-order contiguous) observations to each region. The matrix multiplica-
tion process is shown in (1.9), along with the resulting spatial lag vector W y.

                                  ⎛             ⎞⎛ ⎞
                               0 1 0 0 0 0 0        y1
                            ⎜ 1/2 0 1/2 0 0 0 0 ⎟ ⎜ y2 ⎟
                            ⎜                   ⎟⎜ ⎟
                            ⎜ 0 1/2 0 1/2 0 0 0 ⎟ ⎜ y3 ⎟
                            ⎜                   ⎟⎜ ⎟
                       Wy = ⎜                   ⎟⎜ ⎟
                            ⎜ 0 0 1/2 0 1/2 0 0 ⎟ ⎜ y4 ⎟
                            ⎜ 0 0 0 1/2 0 1/2 0 ⎟ ⎜ y5 ⎟
                            ⎜                   ⎟⎜ ⎟
                            ⎝ 0 0 0 0 1/2 0 1/2 ⎠ ⎝ y6 ⎠
                               0 0 0 0 0 1 0        y7
                            ⎛              ⎞
                                   y2
                            ⎜ (y1 + y3 )/2 ⎟
                            ⎜              ⎟
                            ⎜ (y2 + y4 )/2 ⎟
                            ⎜              ⎟
                          =⎜               ⎟
                            ⎜ (y3 + y5 )/2 ⎟                                (1.9)
                            ⎜ (y4 + y6 )/2 ⎟
                            ⎜              ⎟
                            ⎝ (y5 + y7 )/2 ⎠
                                   y6

   The scalar parameter ρ in (1.6) describes the strength of spatial dependence
in the sample of observations. Use of a single parameter to reﬂect an average
level of dependence over all dependence relations arising from observations
i = 1, . . . , n, is one way in which parsimony is achieved by the spatial autore-
gressive structure. This is in stark contrast to our starting point in (1.3) and
(1.4), where we allowed each dependency to have its own parameter.



© 2009 by Taylor & Francis Group, LLC
                                        Introduction                          11

   We can graphically examine a scatter plot of the relation between the ob-
servations in the vector y (in deviation from means form) and the average
values of neighboring observations in the vector W y using a Moran scatter
plot. An example is shown in Figure 1.4, where we plot total factor produc-
tivity of the states, constructed using the residuals from our 2001 production
function regression on the horizontal axis, and the spatial lag values on the
vertical axis. By virtue of the transformation to deviation from means, we
have four Cartesian quadrants in the scatter plot centered on zero values for
the horizontal and vertical axes. These four quadrants reﬂect:

         Quadrant I (red points) states that have factor productivity (residu-
         als) above the mean, where the average of neighboring states’ factor
         productivity is also greater than the mean,

         Quadrant II (green points) states that exhibit factor productivity below
         the mean, but the average of neighboring states’ factor productivity is
         above the mean,

         Quadrant III (blue points) states with factor productivity below the
         mean, and the average of neighboring states’ factor productivity is also
         below the mean,

         Quadrant IV (purple points) states that have factor productivity above
         the mean, and the average of neighboring states’ productivity is below
         the mean.

   From the scatter plot, we see a positive association between factor produc-
tivity observations y on the horizontal axis and the spatially lagged observa-
tions from W y shown on the vertical axis, suggesting the scalar parameter ρ
is greater than zero. Another way to consider the strength of positive associ-
ation is to note that there are very few green and purple points in the scatter
plot. Green points represent states where factor productivity is below aver-
age and that of neighboring states W y is above average. The converse is true
of the purple points, where above average factor productivity coincides with
below average factor productivity W y from neighboring states. In contrast, a
large number of points in quadrants II and IV with few points in quadrants I
and III would suggest negative spatial dependence so that ρ < 0.
   Points in the scatter plot can be placed on a map using the same color cod-
ing scheme, as in Figure 1.5. Red states represent regions with higher than
average (positive) factor productivity where the average of neighboring states’
factor productivity is also above the mean. The map makes the clustering of
northeast and western states with above average factor productivity levels
where neighboring states also have above average factor productivity quite
clear. Similarly, clustering of states with lower than average factor productiv-
ity levels and surrounding states that are also below the mean is evident in
the central and southern part of the US.



© 2009 by Taylor & Francis Group, LLC
12                                           Introduction to Spatial Econometrics


                                      0.15    II                  I

                                       0.1
                W x Solow Residual




                                      0.05


                                         0


                                     -0.05


                                      -0.1
                                               III               IV

                                     -0.15
                                              -0.1      0       0.1     0.2   0.3
                                                         Solow Residual


FIGURE 1.4: Moran scatter plot of 2001 US states factor productivity (see
color insert)




   It is tempting to interpret the scalar parameter ρ in the spatial autoregres-
sive process as a conventional correlation coeﬃcient between the vector y and
the spatial lag vector W y. This temptation should be avoided, as it is not
entirely accurate. We will discuss this point in more detail in Chapter 2, but
note that the range for correlation coeﬃcients is [−1, 1], whereas ρ cannot
equal one.



1.2.1         Spatial autoregressive data generating process

  The spatial autoregressive process is shown in (1.10) using matrix notation,
and the implied data generating process for this type of process is in (1.11).
We introduce a constant term vector of ones ιn , and associated parameter α
to accommodate situations where the vector y does not have a mean value of
zero.



© 2009 by Taylor & Francis Group, LLC
                                              Introduction                          13




FIGURE 1.5: Moran plot map of US states 2001 factor productivity (see
color insert)




                                 y = αιn + ρW y + ε                              (1.10)
                       (In − ρW )y = αιn + ε
                                        y = (In − ρW )−1 ιn α + (In − ρW )−1 ε   (1.11)
                                        ε ∼ N (0, σ 2 In )
The n×1 vector y contains our dependent variable and ρ is a scalar parameter,
with W representing the n × n spatial weight matrix. We assume that ε
follows a multivariate normal distribution, with zero mean and a constant
scalar diagonal variance-covariance matrix σ 2 In .
   The model statement in (1.10) can be interpreted as indicating that the
expected value of each observation yi will depend on the mean value α plus



© 2009 by Taylor & Francis Group, LLC
14                                Introduction to Spatial Econometrics

a linear combination of values taken by neighboring observations scaled by
the dependence parameter ρ. The data generating process statement in (1.11)
expresses the simultaneous nature of the spatial autoregressive process. To
further explore the nature of this, we can use the following inﬁnite series to
express the inverse:

                       (In − ρW )−1 = In + ρW + ρ2 W 2 + ρ3 W 3 + . . .             (1.12)

where we assume for the moment that abs(ρ) < 1. This leads to a spatial
autoregressive data generating process for a variable vector y:


                               y = (In − ρW )−1 ιn α + (In − ρW )−1 ε
                               y = αιn + ρW ιn α + ρ2 W 2 ιn α + . . .
                                  + ε + ρW ε + ρ2 W 2 ε + ρ3 W 3 ε + . . .          (1.13)

   Expression (1.13) can be simpliﬁed since the inﬁnite series: ιn α + ρW ιn α +
ρ2 W 2 ιn α + . . . converges to (1 − ρ)−1 ιn α since α is a scalar, the parameter
abs(ρ) < 1, and W is row-stochastic. By deﬁnition, W ιn = ιn and therefore
W (W ιn ) also equals W ιn = ιn . Consequently, W q ιn = ιn for q ≥ 0 (recall
that W 0 = In ). This allows us to write:

                               1
                    y=              ιn α + ε + ρW ε + ρ2 W 2 ε + ρ3 W 3 ε + . . .   (1.14)
                            (1 − ρ)

   To further explore the nature of this data generating process, we consider
powers of the row-stochastic spatial weight matrices W 2 , W 3 , . . . that appear
in (1.14). Let us assume that rows of the weight matrix W are constructed
to represent ﬁrst-order contiguous neighbors. The matrix W 2 will reﬂect
second-order contiguous neighbors, those that are neighbors to the ﬁrst-order
neighbors. Since the neighbor of the neighbor (second-order neighbor) to an
observation i includes observation i itself, W 2 has positive elements on the
diagonal when each observation has at least one neighbor. That is, higher-
order spatial lags can lead to a connectivity relation for an observation i
such that W 2 ε will extract observations from the vector ε that point back to
the observation i itself. This is in stark contrast with our initial independence
relation in (1.1), where the Gauss-Markov assumptions rule out dependence of
εi on other observations j, by assuming zero covariance between observations
i and j in the data generating process.
   To illustrate this point, we show W 2 based on the 7×7 ﬁrst-order contiguity
matrix W from (1.8) in (1.15), where positive elements appear on the diagonal.
We see that for region R1 for example, the second-order neighbors are regions
R1 and R3. That is, region R1 is a second-order neighbor to itself as well as
to region R3, which is a neighbor to the neighboring region R2.



© 2009 by Taylor & Francis Group, LLC
                                            Introduction                                  15

                                        ⎛                  ⎞
                                 0.50 0 0.50 0  0   0  0
                               ⎜ 0 0.75 0 0.25 0    0  0 ⎟
                               ⎜                           ⎟
                               ⎜ 0.25 0 0.50 0 0.25 0  0 ⎟
                               ⎜                           ⎟
                          W2 = ⎜
                               ⎜ 0 0.25 0 0.50 0 0.25 0 ⎟
                                                           ⎟                         (1.15)
                               ⎜ 0    0 0.25 0 0.50 0 0.25 ⎟
                               ⎜                           ⎟
                               ⎝ 0    0  0 0.25 0 0.75 0 ⎠
                                  0   0  0   0 0.50 0 0.50
   Given that abs(ρ) < 1, the data generating process assigns less inﬂuence to
disturbance terms associated with higher-order neighbors, with a geometric
decay of inﬂuence as the order rises. Stronger spatial dependence reﬂected in
larger values of ρ leads to a larger role for the higher order neighbors.
   The dependence of each observation yi on disturbances associated with
neighboring observations as well as higher-order neighbors suggests a mean
and variance-covariance structure for the observations in the vector y that de-
pend in a complicated way on other observations. It is instructive to consider
the mean of the variable y that arises from the spatial autoregressive data
generating process in (1.13). Note that we assume the spatial weight matrix
is exogenous, or ﬁxed in repeated sampling, so that:

                              1
                E(y) =             αιn + E(ε) + ρW E(ε) + ρ2 W 2 E(ε) + . . .
                           (1 − ρ)
                              1
                         =         αιn                                               (1.16)
                           (1 − ρ)
   It is interesting to note that in social networking (Katz, 1953; Bonacich,
1987) interpret the vector b = (In − ρP )−1 ιn as a measure of centrality of
individuals in a social network, where the matrix P is a binary peer matrix,
so the vector b reﬂects row sums of the matrix inverse.1 The vector b (referred
to as Katz-Bonacich Centrality in social networking) measures the number of
direct and indirect connections that an individual in a social network has.
For example, if the matrix P identiﬁes friends, then P 2 points to friends of
friends, P 3 to friends of friends of friends, and so on. In social networking,
individuals are viewed as located at nodes in a network, and the parameter
ρ reﬂects a discount factor that creates decay of inﬂuence for friends/peers
that are located at more distant nodes. These observations merely point out
that the spatial autoregressive process has played an important role in other
disciplines beside spatial statistics, and will likely continue to grow in use and
importance.
   Simultaneous feedback is useful in modeling spatial dependence relations
where we wish to accommodate spatial feedback eﬀects from neighboring re-
gions to an origin location i where an initial impact occurred. In fact, these

1 The binary peer matrix is deﬁned like our contiguity matrix C, having values of 1 for peers

and 0 for non-peers.




© 2009 by Taylor & Francis Group, LLC
16                                Introduction to Spatial Econometrics

models allow us to treat all observations as potential origins of an impact
without loss of generality. One might suppose that feedback eﬀects would
take time, but there is no explicit role for passage of time in a cross-sectional
relation. Instead, we can view the cross-sectional sample data observations
as reﬂecting an equilibrium outcome or steady state of the spatial process we
are modeling. We develop this idea further in Chapter 2 and Chapter 7. This
is an interpretation often used in cross-sectional modeling and Sen and Smith
(1995) provide examples of this type of situation for conventional spatial in-
teraction models used in regional analysis. The goal in spatial interaction
models is to analyze variation in ﬂows between regions that occur over time
using a cross-section of observed ﬂows between origin and destination regions
that have taken place over a ﬁnite period of time, but measured at a single
point in time. We discuss spatial econometric models for origin-destination
ﬂows in Chapter 8.
   This simultaneous dependence situation does not occur in time series anal-
ysis, making spatial autoregressive processes distinct from time series autore-
gressive processes. In time series, the time lag operator L is strictly triangular
and contains zeros on the diagonal. Powers of L are also strictly triangular
with zeros on the diagonal, so that L2 speciﬁes a two-period time lag whereas
L creates a single period time lag. It is never the case that L2 produces
observations that point back to include the present time period.




1.3        An illustration of spatial spillovers
   The spatial autoregressive structure can be combined with a conventional
regression model to produce a spatial extension of the standard regression
model shown in (1.17), with the implied data generating process in (1.18). We
will refer to this as simply the spatial autoregressive model (SAR) throughout
the text. We note that Anselin (1988) labeled this model a “mixed-regressive,
spatial-autoregressive” model, where the motivation for this awkward nomen-
clature should be clear.


                               y = ρW y + Xβ + ε                           (1.17)
                               y = (In − ρW )−1 Xβ + (In − ρW )−1 ε        (1.18)
                               ε ∼ N (0, σ 2 In )

  In this model, the parameters to be estimated are the usual regression
parameters β, σ and the additional parameter ρ. It is noteworthy that if the
scalar parameter ρ takes a value of zero so there is no spatial dependence
in the vector of cross-sectional observations y, this yields the least-squares
regression model as a special case of the SAR model.



© 2009 by Taylor & Francis Group, LLC
                                            Introduction                       17

   To provide an illustration of how the spatial regression model can be used
to quantify spatial spillovers, we reuse the earlier example of travel times to
the CBD from the seven regions shown in Figure 1.1. We consider the impact
of a change in population density for a single region on travel times to the
CBD for all seven regions. Speciﬁcally, we double the population density in
region R2 and make a prediction of the impact on travel times to the CBD
for all seven regions.
   We use parameter estimates: β̂  = 0.135 0.561 and ρ̂ = 0.642 for this
example. The estimated value of ρ indicates positive spatial dependence in
commuting times. Predictions from the model based on the explanatory vari-
ables matrix X would take the form:


                                        ŷ (1) = (In − ρ̂W )−1 X β̂

where ρ̂, β̂ are maximum likelihood estimates.
   A comparison of predictions ŷ (1) from the model with explanatory variables
from X and ŷ (2) from the model based on X̃ shown in (1.19) is used to illus-
trate how the model generates spatial spillovers when the population density
of a single region changes. The matrix X̃ reﬂects a doubling of the population
density of region R2.

                                                  ⎛      ⎞
                                                   10 30
                                                 ⎜ 20 40 ⎟
                                                 ⎜       ⎟
                                                 ⎜ 30 10 ⎟
                                                 ⎜       ⎟
                                            X̃ = ⎜
                                                 ⎜ 50 0 ⎟
                                                         ⎟                 (1.19)
                                                 ⎜ 30 10 ⎟
                                                 ⎜       ⎟
                                                 ⎝ 20 20 ⎠
                                                   10 30

   The two sets of predictions ŷ (1) , ŷ (2) are shown in Table 1.1, where we
see that the change in region R2 population density has a direct eﬀect that
increases the commuting times for residents of region R2 by 4 minutes. It also
has an indirect or spillover eﬀect that produces an increase in commuting times
for the other six regions. The increase in commuting times for neighboring
regions to the east and west (regions R1 and R3) are the greatest and these
spillovers decline as we move to regions in the sample that are located farther
away from region R2 where the change in population density occurred.
   It is also of interest that the cumulative indirect impacts (spillovers) can be
found by adding up the increased commuting times across all other regions
(excluding the own-region change in commuting time). This equals 2.57 +
1.45 + 0.53 + 0.20 + 0.07 + 0.05 = 4.87 minutes, which is larger than the
direct (own-region) impact of 4 minutes. The total impact on all residents of
the seven region metropolitan area from the change in population density of



© 2009 by Taylor & Francis Group, LLC
18                                Introduction to Spatial Econometrics
                             TABLE 1.1:      Spatial spillovers from changes
                             in Region R2 population density
                                Regions / Scenario              ŷ (1)    ŷ (2)   ŷ (2) − ŷ (1)
                                R1 :                           42.01     44.58     2.57
                                R2 :                           37.06     41.06     4.00
                                R3 :                           29.94     31.39     1.45
                                R4 : CBD                       26.00     26.54     0.53
                                R5 :                           29.94     30.14     0.20
                                R6 :                           37.06     37.14     0.07
                                R7 :                           42.01     42.06     0.05



region R2 is the sum of the direct and indirect eﬀects, or 8.87 minutes increase
in travel times to the CBD.2
   The model literally suggests that the change in population density of region
R2 would immediately lead to increases in the observed daily commuting times
for all regions. A more palatable interpretation would be that the change in
population density would lead over time to a new equilibrium steady state
in the relation between daily commuting times and the distance and density
variables. The predictions of the direct impacts arising from the change in
density reﬂect ∂yi /∂Xi2 , where Xi2 refers to the ith observation of the second
explanatory variable in the model. The cross-partial derivatives ∂yj /∂Xi2
represent indirect eﬀects associated with this change.
   To elaborate on this, we note that the DGP for the SAR model can be
written as in (1.20), where the subscript r denotes explanatory variable r,

                                              k
                                        y=         Sr (W )Xr + (In − ρW )−1 ε                        (1.20)
                                             r=1
                                              k
                               E(y) =              Sr (W )Xr                                         (1.21)
                                             r=1

where Sr (W ) = (In − ρW )−1 βr acts as a “multiplier” matrix that applies
higher-order neighboring relations to Xr . Models that contain spatial lags of
the dependent variable exhibit a complicated derivative of yi with respect to
Xjr , where i, j denote two distinct observations. It follows from (1.21) that:

                                              ∂E(yi )
                                                      = Sr (W )ij                                    (1.22)
                                               ∂Xjr
where Sr (W )ij represents the ijth element of the matrix Sr (W ).

2 Throughout the text we will use the terms impacts and eﬀects interchangeably when

referring to direct and indirect eﬀects or impacts.




© 2009 by Taylor & Francis Group, LLC
                                           Introduction                          19

   As expression (1.22) indicates, the standard regression interpretation of
coeﬃcient estimates as partial derivatives: β̂r = ∂y/∂Xr , no longer holds.
Because of the transformation of Xr by the n × n matrix Sr (W ), any change
to an explanatory variable in a given region (observation) can aﬀect the de-
pendent variable in all regions (observations) through the matrix inverse.
   Since the impact of changes in an explanatory variable diﬀer over all obser-
vations, it seems desirable to ﬁnd a summary measure for the own derivative
∂yi /∂Xir in (1.22) that shows the impact arising from a change in the ith
observation of variable r. It would also be of interest to summarize the cross
derivative ∂yi /∂Xjr (i = j) in (1.22) that measures the impact on yi from
changes in observation j of variable r. We pursue this topic in detail in Chap-
ter 2, where we provide summary measures and interpretations for the impacts
that arise from changes represented by the own- and cross-partial derivatives.
   Despite the simplicity of this example, it provides an illustration of how
spatial regression models allow for spillovers from changes in the explanatory
variables of a single region in the sample. This is a valuable aspect of spatial
econometric models that sets them apart from most spatial statistical models,
an issue we discuss in the next section.
   An ordinary regression model would make the prediction that the change in
population density in region R2 aﬀects only the commuting time of residents
in region R2, with no allowance for spatial spillover impacts. To see this, we
can set the parameter ρ = 0 in our model, which produces the non-spatial
regression model. In this case ŷ (1) = X β̂o and ŷ (2) = X̃ β̂o , so the diﬀerence
would be X̃ β̂o − X β̂o = (X̃ − X)β̂o , where the estimated parameters β̂o would
be those from a least-squares regression.
   If the DGP for our observed daily travel times is that of the SAR model,
least-squares estimates will be biased and inconsistent, since they ignore the
spatial lag of the dependent variable. To see this, note that the estimates for
β̂ from the SAR model take the form: β̂ = (X  X)−1 X  (In − ρ̂W )y, a subject
we pursue in more detail in Chapter 2. For our simple illustration where all
values of y and X are positive, and the spatial dependence parameter is also
positive, this suggests an upward bias in the least-squares estimates. This can
be seen by noting that:


                                β̂ = (X  X)−1 X  y − ρ̂(X  X)−1 X  W y
                                β̂ = β̂o − ρ̂(X  X)−1 X  W y
                               β̂o = β̂ + ρ̂(X  X)−1 X  W y
   Since all values of y are positive, the spatial lag vector W y will contain
averages of the neighboring values which will also be positive. This in con-
junction with only positive elements in the matrix X as well as positive ρ̂
lead us to conclude that the least-squares estimates β̂o will be biased upward
relative to the unbiased estimates β̂. For our seven region example, the least-
squares estimates were: β̂o = 0.55 1.25 , which show upward bias relative to



© 2009 by Taylor & Francis Group, LLC
20                                Introduction to Spatial Econometrics

the spatial autoregressive model estimates: β̂  = 0.135 0.561 . Intuitively,
the ordinary least-squares model attempts to explain variation in travel times
that arises from spillover congestion eﬀects using the distance and population
density variables. This results in an overstatement of the true inﬂuence of
these variables on travel times.
   Least-squares predictions based on the matrices X and X̃ are presented
in Table 1.2. We see that no spatial spillovers arise from this model, since
only the travel time to the CBD for region R2 is aﬀected by the change in
population density of region R2. We also see the impact of the upward bias
in the least-squares estimates, which produce an inﬂated prediction of travel
time change that would arise from the change in population density.


                             TABLE 1.2:       Non-spatial predictions for
                             changes in Region R2 population density
                                Regions / Scenario    ŷ (1)    ŷ (2) ŷ (2) − ŷ (1)
                                R1 :                 42.98     42.98 0.00
                                R2 :                 36.00     47.03 11.02
                                R3 :                 29.02     29.02 0.00
                                R4 : CBD             27.56     27.56 0.00
                                R5 :                 29.02     29.02 0.00
                                R6 :                 36.00     36.00 0.00
                                R7 :                 42.98     42.98 0.00




1.4        The role of spatial econometric models
   A long-running theme in economics is how pursuit of self interest results in
beneﬁts or costs that fall on others. These beneﬁts or costs are labeled exter-
nalities. In situations where spillovers are spatial in nature, spatial economet-
ric models can quantify the magnitude of these, as illustrated by the travel
time to the CBD example.
   There are a host of other examples. Technological innovation that arises as
a result of spatial knowledge spillovers from nearby regions is an example of
a positive externality or spillover. It is argued that a large part of knowledge
is tacit because ideas leading to technical innovation are embodied in persons
and linked to the experience of the inventor. This stock of knowledge increases
in a region as local inventors discover new ideas and diﬀuses mostly via face-
to-face interactions. We can think of knowledge as a local public good that
beneﬁts researchers within a region as well as nearby neighboring regions.



© 2009 by Taylor & Francis Group, LLC
                                        Introduction                          21

This motivates a spatial speciﬁcation for unobserved knowledge that would
not be included as a model explanatory variable. It is generally believed that
tacit knowledge linked to the experience of inventors and researchers does not
“travel well,” so knowledge spillovers are thought to be local in nature falling
only on nearby regions. We can use spatial regression models to quantify
the spatial extent of spillovers by examining indirect eﬀects using the series
expansion In +ρW +ρ2 W 2 +. . . that arises in the partial derivative expression
for these eﬀects. Chapter 3 will explore this issue in an applied illustration
that relates regional total factor productivity to knowledge spillovers.
   Pollution provides another example since these negative externalities or
spillovers are likely to be spatial in nature. The ability to quantify direct and
indirect eﬀects from pollution sources should be useful in empirical analysis
of the classic Pigovian tax and subsidy solutions for market failure.
   Regional governments are often thought to take into account actions of
neighboring governments when setting tax rates (Wilson, 1986) and deciding
on provision of local government services (Tiebout, 1956). Spatial economet-
ric models can be used to empirically examine the magnitude and statistical
signiﬁcance of local government interaction. Use of the partial derivative mea-
sures of direct and indirect eﬀects that arise from changes in the explanatory
variables should be particularly useful from a public policy perspective. In a
model of county government decisions, direct eﬀects estimates pertain to im-
pacts that would be of primary concern to that county’s government oﬃcials,
whereas spillover and total eﬀects reﬂect the broader perspective of society
at large. Much of the public choice literature focuses on situations where
private and public, or local and national government interests diverge. In the
case of local and national governments, the divergence can be viewed in terms
of spatial spillover eﬀects. Again, the ability of spatial regression models to
quantify the relative magnitude of the divergence should be useful to those
studying public choice issues.
   There is a fundamental diﬀerence between models containing spatial lags of
the dependent variable and those modeling spatial dependence in the distur-
bances. We explore this using the general error model in (1.23), where F (W )
in (1.24) represents a non-singular matrix function involving a spatial weight
matrix W .


                                         y = Xβ +                        (1.23)
                                          = F (W )ε                      (1.24)

   The expectation of y for these error models appears in (1.25).

                                         E(y) = Xβ                        (1.25)
This means that all of the various types of error models have the same expecta-
tion as the non-spatial model. Suﬃciently large sample sizes using consistent



© 2009 by Taylor & Francis Group, LLC
22                                Introduction to Spatial Econometrics

estimators on the various models should yield identical estimates of the pa-
rameters β. For small samples the estimates could vary, and using models
that diﬀer from the DGP could lead to inconsistent estimates of dispersion
for the model parameters. Interpretation of the parameters β from this type
of model is the same as for a non-spatial linear regression model.
   Anselin (1988) provides a persuasive argument that the focus of spatial
econometrics should be on measuring the eﬀects of spillovers. We pay limited
attention to error models in this text because these models eliminate spillovers
by construction. These could be added by making X more spatially complex,
but there are more appealing alternatives that we will explore here.




1.5        The plan of the text
   This introductory chapter focused on a brief introduction to spatial depen-
dence and spatial autoregressive processes, as well as spatial weight matrices
used in these processes. These processes can be used to produce a host of spa-
tial econometric models that accommodate spatial dependence taking various
forms.
   Chapter 2 provides more detailed motivations for spatial dependence and
the use of spatial regression models. We elaborate on the idea that omitted or
excluded variables in our models that exhibit spatial dependence can lead to
spatial regression models that contain spatial lags of the dependent variable.
Cross-sectional simultaneous spatial regression models are also motivated as
a long-run steady-state outcome of non-simultaneous dependence situations.
We consider situations where economic agents can observe past actions of
neighboring agents, for example county government oﬃcials should be aware
of neighboring government tax rates or levels of government services provision
in the previous period. This type of non-simultaneous space-time dynamic
relationship is consistent with a cross-sectional simultaneous spatial regression
relationship that represents the long-run steady state outcome of the space-
time dynamic relationship. We also provide details regarding interpretation
of estimates from these models. An elaboration is provided regarding direct
and indirect eﬀects associated with changes in explanatory variables that was
introduced in the travel time example of this chapter.
   Chapter 3 will focus on a family of spatial regression models popularized by
Anselin (1988) in his inﬂuential text on spatial econometrics. The implications
for estimates and inferences based on least-squares estimates from non-spatial
regression in the presence of spatial dependence are discussed. This chapter
also provides details regarding computational aspects of maximum likelihood
estimation for the family of spatial regression models. Computational meth-
ods have advanced considerably since 1988, the year of Anselin’s text.



© 2009 by Taylor & Francis Group, LLC
                                        Introduction                        23

   Chapter 4 addresses various computational and theoretical aspects of spa-
tial econometric models. Topics include computation of spatial weight ma-
trices, log-determinants (including numerous special cases such as the matrix
exponential, equation systems, multiple weight matrices, and ﬂow matrices),
derivatives of log-determinants, diagonals of the variance-covariance matrix,
and closed-form solutions for a number of single-parameter spatial models.
   Conventional Bayesian methods for analyzing spatial econometric models
(Anselin, 1988; Hepple, 1995a,b) as well as more recent Bayesian Markov
Chain Monte Carlo (MCMC) methods (LeSage, 1997) for estimating spatial
regression models are the subject of Chapter 5. The approach set forth in
LeSage (1997) allows formal treatment of spatial heterogeneity that is mo-
tivated in Chapter 2. We show that many of the computational advances
described for maximum likelihood estimation in Chapter 3 also work to sim-
plify Bayesian estimation of these models.
   Model speciﬁcation and comparison is the topic of Chapter 6. Speciﬁcation
issues considered include the form of the weight matrix, the usual concern
about appropriate explanatory variables, and questions regarding which of
the alternative members of the family of spatial regression models introduced
in Chapter 3 should be employed. We show how formal Bayesian model
comparison methods proposed by LeSage and Parent (2007) can be used to
answer questions regarding appropriate explanatory variables for the family of
models from Chapter 3. Bayesian model comparison methods can also be used
to discriminate between models based on alternative spatial weight matrices
as noted by LeSage and Pace (2004a) and diﬀerent speciﬁcations arising from
the family of spatial regression models from Chapter 3 (Hepple, 2004).
   Chapter 7 is unlike other chapters in the text since it is more theoreti-
cal, focusing on spatiotemporal foundations for observed cross-sectional spa-
tial dependence. Starting with the assumption that regions are inﬂuenced
only by own and other regions past period values we develop a spatiotem-
poral motivation for simultaneous spatial dependence implied by the spatial
autoregressive process. We elaborate on the discussion in Chapter 2 show-
ing how time dependence on past decisions of neighboring economic agents
will lead to simultaneous spatial regression speciﬁcations. We show that a
strict spatiotemporal framework consistent with a spatial partial adjustment
mechanism can result in a long-run equilibrium characterized by simultaneous
spatial dependence.
   Spatial econometric extensions of conventional least-squares gravity or spa-
tial interaction models described in Sen and Smith (1995) are the topic of
Chapter 8. We present spatial regression models similar to those from Chap-
ter 3 introduced by LeSage and Pace (2008) that can be applied to models
that attempt to explain variation in ﬂows between origins and destinations.
Allowing for spatial dependence at origins, destinations, and between origins
and destinations leads to a situation where changes at either the origin or
destination will give rise to forces that set in motion a series of events. We
explore the notion advanced by Behrens, Ertur and Koch (2007) that spatial



© 2009 by Taylor & Francis Group, LLC
24                                Introduction to Spatial Econometrics

dependence suggests a multilateral world where indirect interactions link all
regions. This contrasts with conventional emphasis on bilateral ﬂows from
origin to destination regions.
   Chapter 9 sets forth an alternative approach for spatial econometric model-
ing that replaces the spatial autoregressive process with a matrix exponential
approach to specifying spatial dependence structures (LeSage and Pace, 2007,
2004b). This has both computational as well as theoretical advantages over
the more conventional spatial autoregressive process. We discuss both maxi-
mum likelihood and Bayesian approaches to estimating models based on this
new spatial process speciﬁcation.
   Chapter 10 takes up the topic of spatial regressions involving binary, count
or truncated dependent variables. This draws on work regarding binary de-
pendent variables in the context of the family of models from Chapter 3
described in LeSage (2000) and surveyed by Flemming (2004). Use of spatial
autoregressive processes as a Bayesian prior for spatially structured eﬀects
introduced in Smith and LeSage (2004) for the case of probit models and
in LeSage, Fischer and Scherngell (2007) for Poisson count data models are
also discussed. This approach to structuring individual eﬀects parameters can
be used to overcome problems that typically arise when estimating individ-
ual eﬀects (Christensen, Roberts and Sköld, 2006; Gelfand, Sahu and Carlin,
1995).




© 2009 by Taylor & Francis Group, LLC
Chapter 2
Motivating and Interpreting Spatial
Econometric Models


In the ﬁrst ﬁve sections of this chapter, we provide separate motivations for
regression models that include spatial autoregressive processes. These moti-
vations are explored in more detail in later chapters of the text, with the pre-
sentation here being less formal. Section 2.1 shows how cross-sectional model
relations involving spatial lags of the dependent variable (the SAR model)
come from economic agents considering past period behavior of neighboring
agents. Section 2.2 provides a second situation where omitted variables that
exhibit spatial dependence lead to a model that includes spatial lags of both
the dependent as well as independent variables. Sections 2.3 to 2.5 provide ad-
ditional motivations based on spatial heterogeneity, externalities, and model
uncertainty. Taken together, the motivations in Sections 2.1 to 2.5 show how
a host of alternative spatial regression structures arise when dependence en-
ters into a combination of the explanatory variables, dependent variables, or
disturbances.
   Section 2.6 brieﬂy introduces a family of conventional spatial regression
models that have appeared in the empirical literature. Section 2.7 is devoted
to a discussion of interpreting the parameter estimates from spatial regression
models. This issue has been particularly misunderstood in applied studies
that have relied on spatial regression models. We introduce some relatively
straightforward procedures that simplify analysis of impacts that result from
changes in the explanatory variables of these models.




2.1        A time-dependence motivation
  Economic agents often make current period decisions that are inﬂuenced
by the behavior of other agents in previous periods. For example, local gov-
ernments might set tax rates after observing rates set by neighboring regions
in previous time periods. Although the tax rates were set over time by the
cross-section of regions representing our sample, the observed cross-sectional
tax rates would exhibit a pattern of spatial dependence.
  To illustrate this, consider a relation where the dependent variable vector at


                                                                             25
© 2009 by Taylor & Francis Group, LLC
26                                Introduction to Spatial Econometrics

time t, denoted yt , is determined using a spatial autoregressive scheme that de-
pends on space-time lagged values of the dependent variable from neighboring
observations. This would lead to a time lag of the average neighboring values
of the dependent variable observed during the previous period, W yt−1 . We
can also include current period own-region characteristics Xt in our model.
In the event that the characteristics of regions remain relatively ﬁxed over
time, we can write Xt = X and ignore the time subscript for this matrix
of regional characteristics. As a concrete example of this type of situation,
consider a model involving home selling prices as the dependent variable yt ,
which depend on past period selling prices of neighboring homes, W yt−1 .
Characteristics of homes such as the number of bedrooms or baths change
very slowly over time. This suggests the following relation as a representation
for the space-time lagged autoregressive process:

                                          yt = ρW yt−1 + Xβ + εt            (2.1)
Note that we can replace yt−1 on the right-hand side above with: yt−1 =
ρW yt−2 + Xβ + εt−1 producing:


                        yt = Xβ + ρW (Xβ + ρW yt−2 + εt−1 ) + εt            (2.2)
                        yt = Xβ + ρW Xβ + ρ2 W 2 yt−2 + εt + ρW εt−1        (2.3)

Recursive substitution for past values of the vector yt−r on the right-hand
side of (2.3) over q periods leads to (2.4) and (2.5).

                                                      
          yt = In + ρW + ρ2 W 2 +, . . . , +ρq−1 W q−1 Xβ + ρq W q yt−q + u (2.4)
           u = εt + ρW εt−1 + ρ2 W 2 εt−2 +, . . . , +ρq−1 W q−1 εt−(q−1)   (2.5)

These expressions can be simpliﬁed by noting that E(εt−r ) = 0, r = 0, . . . , q −
1, implies that E(u) = 0. In addition, the magnitude of ρq W q yt−q becomes
small for large q, under the usual assumption that |ρ| < 1 and assuming
that W is row-stochastic, so the matrix W has a principal eigenvalue of 1.
Consequently, we can interpret the observed cross-sectional relation as the
outcome or expectation of a long-run equilibrium or steady state shown in
(2.6).


                                        lim E(yt ) = (In − ρW )−1 Xβ        (2.6)
                                        q→∞

   Note that this provides a dynamic motivation for the data generating pro-
cess of the cross-sectional SAR model that serves as a workhorse of spatial
regression modeling. That is, a cross-sectional SAR model relation can arise
from time-dependence of decisions by economic agents located at various
points in space when decisions depend on those of neighbors.



© 2009 by Taylor & Francis Group, LLC
              Motivating and Interpreting Spatial Econometric Models          27



2.2        An omitted variables motivation
  Omitted variables may easily arise in spatial modeling because unobserv-
able factors such as location amenities, highway accessibility, or neighborhood
prestige may exert an inﬂuence on the dependent variable. It is unlikely that
explanatory variables are readily available to capture these types of latent
inﬂuences. We explore this situation using a very simple scenario involving
a dependent variable y that is completely explained by two explanatory vari-
ables x and z with associated scalar parameters β and θ. For simplicity, we
assume the n × 1 vectors x and z are distributed N (0, In ), and we assume x
and z are independent.

                                           y = xβ + zθ                      (2.7)
Given both x and z, solution of the linear system would yield an exact β and
θ. The absence of a disturbance term simpliﬁes discovery of the parameters.
   Consider the case where the vector z is not observed. Since the unobserved
variable z is not correlated with the observed vector x, we can still uncover
β. In this case, the vector zθ acts as the disturbance term, which we label ε
in the relation shown in (2.8).

                                           y = xβ + ε                       (2.8)
Expression (2.8) represents a normal linear model with independent and iden-
tically distributed (iid ) disturbances, where the ordinary least-squares esti-
mator β̂ = (x x)−1 x y is known to be the best linear unbiased estimator.
   As an alternative scenario, consider a situation where the explanatory vari-
able vector z exhibits zero covariance with the vector x, but follows the spatial
autoregressive process shown in (2.9).


                                        z = ρW z + r                       (2.9)
                                        z = (In − ρW )−1 r                (2.10)

In (2.9), ρ is a real scalar parameter, r is a n × 1 vector of disturbances
distributed N (0, σr2 In ), and W is an n × n spatial weight matrix with Wij > 0
when observation j is a neighbor to observation i, and Wij = 0 otherwise.
We also set Wii = 0, and assume that W has row-sums of unity and that
(In − ρW )−1 exists. From our discussion of spatial autoregressive processes,
each element of W z would represent a linear combination of elements from the
vector z associated with neighboring locations. When working with spatial
data samples, it seems intuitively plausible that unobserved latent factors such
as location amenities, highway accessibility, or neighborhood prestige would
exhibit spatial dependence of the type assigned to the vector z.



© 2009 by Taylor & Francis Group, LLC
28                                Introduction to Spatial Econometrics

   Substituting (2.10) into (2.7) yields (2.11), which reﬂects the generalized
normal linear model containing non-spherical disturbances. The eﬀect of θ is
to increase the variance of r and in (2.12) we deﬁne u = θr. As is well-known,
least-squares estimates for the parameter β in (2.11) are still unbiased, but
not eﬃcient.


                                           y = xβ + (In − ρW )−1 (θr)         (2.11)
                                           y = xβ + (In − ρW )−1 u            (2.12)
                                        E(y) = xβ                             (2.13)

   Given the prevalence of omitted variables in spatial econometric practice,
it seems unlikely that x and u are uncorrelated. A simple approach to rep-
resenting this correlation is to specify that u depends linearly on x, plus a
disturbance term v that is independent of x as in (2.14), where the scalar
parameter γ and the variance of the disturbance term v (σv2 ) determine the
strength of the relation between x and z = (In − ρW )−1 u.


                                              u = xγ + v                      (2.14)
                                              v ∼ N (0, σv2 In )

In this scenario, the more complicated DGP is shown in (2.16).


                           y = xβ + (In − ρW )−1 (xγ + v)                     (2.15)
                           y = xβ + (In − ρW )−1 xγ + (In − ρW )−1 v          (2.16)

It is no longer the case that the least-squares estimate β̂ is unbiased. If we
transform expression (2.16) to have iid errors, we see that this situation gives
rise to a model shown in (2.18) that Anselin (1988) labeled the spatial Durbin
model (SDM). This model includes a spatial lag of the dependent variable
W y, as well as the explanatory variable vector x, and a spatial lag of the
explanatory variable W x.


                        (In − ρW )y = (In − ρW )xβ + xγ + v                   (2.17)
                                         y = ρW y + x(β + γ) + W x(−ρβ) + v   (2.18)

  In Chapter 3 we will pursue the relation between omitted variables that
exhibit spatial dependence and the implied spatial regression models that
result. The magnitude of bias that arises in these cases will also be explored
more fully.



© 2009 by Taylor & Francis Group, LLC
              Motivating and Interpreting Spatial Econometric Models        29




2.3        A spatial heterogeneity motivation
   Specifying models to have an individual eﬀect, usually modeled as a sepa-
rate intercept for each individual or unit, has become more popular with the
prevalence of large panel data sets. To give this some form, let the n×1 vector
a in (2.19) represent individual intercepts.


                                             y = a + Xβ                 (2.19)

   Typically, panel data sets include multiple observations for each unit, so
estimating a vector of parameters such as a is feasible. In a spatial context
where we have only a single observation for each region we can treat the vector
a as a spatially structured random eﬀect vector. Making an assumption that
observational units in close proximity should exhibit eﬀects levels that are
similar to those from neighboring units provides one way of modeling spatial
heterogeneity. This can be implemented by assigning the spatial autoregres-
sive process shown in (2.20) and (2.21) to govern the vector of intercepts a.
For the moment, we assume a is independent of X.


                                          a = ρW a + ε                  (2.20)
                                                         −1
                                          a = (In − ρW )      ε         (2.21)

Since we have introduced the scalar parameter ρ and a scalar noise variance
parameter σε2 in conjunction with the exogenous sample connectivity infor-
mation contained in the matrix W , we can feasibly estimate the n × 1 vector
of parameters a. Combining (2.19) and (2.21) yields the DGP of the spatial
error model (SEM).


                                        y = Xβ + (In − ρW )−1 ε         (2.22)

Consequently, spatial heterogeneity provides another way of motivating spa-
tial dependence. In this case, the dependence can be viewed as error depen-
dence.
   What if a is not independent of X? Suppose that ε in (2.21) is replaced by
Xγ +  to model the disturbances, where there is a portion that is correlated
with the explanatory variables and a portion that is independent noise. In
this case, a has the form in (2.23) which leads to the reduced forms for a
and y in (2.24) and (2.25) and the empirical model with iid disturbances  in
(2.26).



© 2009 by Taylor & Francis Group, LLC
30                                Introduction to Spatial Econometrics



                              a = ρW a + Xγ +                           (2.23)
                              a = (In − ρW )−1 Xγ + (In − ρW )−1        (2.24)
                              y = Xβ + (In − ρW )−1 (Xγ + )             (2.25)
                              y = ρW y + X(β + γ) + W X(−ρβ) +          (2.26)

   The model in (2.26) takes the form of the SDM. Models involving spatially
structured eﬀects parameters are discussed in Chapter 8 in the context of
origin-destination ﬂows and Chapter 10 for the case of limited dependent
variable models.




2.4        An externalities-based motivation
   In a spatial context, externalities (both positive and negative) arising from
neighborhood characteristics often have direct sensory impacts. For example,
lots with trash provide habitat for rats and snakes that may visit contiguous
yards and reduce their property values. On the other hand, homes surrounded
by those with beautifully landscaped yards containing fragrant plants would
have a positive eﬀect on the house values. In terms of modeling, the spatial
average of neighboring home characteristics (W X) could play a direct role in
determining house prices contained in the vector y, as shown in (2.27).


                                        y = αιn + Xβ1 + W Xβ2 + ε        (2.27)

We refer to this as the spatial lag of X model or SLX, since the model con-
tains spatial lags (W X) of neighboring home characteristics as explanatory
variables.




2.5        A model uncertainty motivation
   In applied practice we are often faced with uncertainty regarding the type
of model to employ as well as conventional parameter uncertainty and uncer-
tainty regarding speciﬁcation of the appropriate explanatory variables. As an
example, suppose there exists uncertainty regarding use of the autoregressive
(SAR) model speciﬁcation y = ρW y + Xβ + ε. In particular, we introduce
a competing model speciﬁcation that involves spatial dependence in the dis-
turbances of the model, y = Xβ + u, u = ρW u + ε, which we refer to as the



© 2009 by Taylor & Francis Group, LLC
              Motivating and Interpreting Spatial Econometric Models              31

spatial error model (SEM). The respective DGPs for these two models are
shown in (2.28) and (2.29). These are DGPs not estimation models, so we
could have identical parameter vectors β and equal values for ρ in each DGP.



                              ya = (In − ρW )−1 Xβ + (In − ρW )−1 ε            (2.28)
                                                   −1
                               yb = Xβ + (In − ρW )     ε                      (2.29)


We will discuss Bayesian model comparison methods in Chapter 6 that can
be used to produce posterior model probabilities. Let πa , πb represent the
weights or probabilities associated with the autoregressive and error models,
and further assume that these two models represent the only models con-
sidered so that: πa + πb = 1. A Bayesian solution to model uncertainty is
to rely on model averaging which involves drawing inferences from a linear
combination of models. Posterior model probabilities are used as weights to
produce estimates and inferences based on the combined or averaged model
parameters.
   It is interesting to consider the DGP associated with a linear combination
of the SAR and SEM models, shown in (2.30). As the manipulations show,
this leads to the SDM model in (2.31).



                           yc = πa ya + πb yb                                  (2.30)
                                        −1                            −1
                           yc = R X(πa β) + X(πb β) + (πa + πb )R          ε
                           yc = R−1 X(πa β) + X(πb β) + R−1 ε
                        Ryc = X(πa β) + RX(πb β) + ε
                        Ryc = Xβ + W X(−ρπb β) + ε
                        Ryc = Xβ1 + W Xβ2 + ε
                         yc = ρW yc + Xβ1 + W Xβ2 + ε                          (2.31)
                           R = In − ρW


Combinations of other models that we introduce in the next section can be
used to produce more elaborate versions of the SDM model that contain
higher-order spatial lags involving terms such as W 2 X.
  This suggests that uncertainty regarding the speciﬁc character of spatial
dependence in the underlying DGP provides another motivation for models
involving spatial lags of dependent and explanatory variables. In this exam-
ple, we have uncertainty regarding the presence of spatial dependence in the
dependent variable versus the disturbances. We will address Bayesian model
averaging as a solution to model uncertainty in more detail in Chapter 6.



© 2009 by Taylor & Francis Group, LLC
32                                Introduction to Spatial Econometrics



2.6        Spatial autoregressive regression models
   As noted in Chapter 1, the spatial autoregressive structure can be combined
with a conventional regression model to produce a spatial extension of the
linear regression model that we have labeled the SAR model. This model is
shown in (2.32), with the implied data generating process in (2.33).


                        y = ρW y + αιn + Xβ + ε                                   (2.32)
                                           −1                            −1
                        y = (In − ρW )           (αιn + Xβ) + (In − ρW )      ε   (2.33)
                        ε ∼ N (0, σ 2 In )
   In this model, the parameters to be estimated are the usual regression pa-
rameters α, β, σ and the additional parameter ρ. Spatial lags are a hallmark
of spatial regression models, and these can be used to provide extended ver-
sions of the SAR model. We have already seen one such extension, the spatial
Durbin Model (SDM) which arose from our omitted variables motivation.
This model includes spatial lags of the explanatory variables as well as the
dependent variable. This model is shown in (2.34) along with its associated
data generating process in (2.35).


                            y = ρW y + αιn + Xβ + W Xγ + ε                        (2.34)
                                             −1
                            y = (In − ρW )        (αιn + Xβ + W Xγ + ε)           (2.35)
                            ε ∼ N (0, σ 2 In )
  We can also use spatial lags to reﬂect dependence in the disturbance process,
which leads to the spatial error model (SEM), shown in (2.36).


                                          y = αιn + Xβ + u                        (2.36)
                                          u = ρW u + ε
                                          ε ∼ N (0, σ 2 In )
  Another member of the family of spatial regression models is one we label
SAC, taking the form in (2.37), where the matrix W1 may be set equal to W2 .
This model contains spatial dependence in both the dependent variable and
the disturbances.


             y = αιn + ρW1 y + Xβ + u                                             (2.37)
            u = θW2 u + ε
            ε ∼ N (0, σ 2 In )
             y = (In − ρW1 )−1 (Xβ + αιn ) + (In − ρW1 )−1 (In − θW2 )−1 ε (2.38)



© 2009 by Taylor & Francis Group, LLC
              Motivating and Interpreting Spatial Econometric Models           33

  We note that spatial regression models have been proposed that use a mov-
ing average process in place of the spatial autoregressive process. For exam-
ple, u = (In − θW )ε could be used to model the disturbances. This type of
process provides a method for capturing local eﬀects arising from immediate
neighbors, as opposed to the autoregressive process that models global eﬀects
(Anselin, 2003).
  The (local) spatial moving average can be combined with a (global) spatial
autoregressive process to produce a model that Anselin and Bera (1998) label
a spatial autoregressive moving average model, SARMA. This takes the form
in (2.39), with the DGP shown in (2.40), where as in the case of the SAC
model, the matrix W1 might be set equal to W2 .


              y = αιn + ρW1 y + Xβ + u
              u = (In − θW2 )ε                                              (2.39)
                                2
               ε ∼ N (0, σ In )
               y = (In − ρW1 )−1 (Xβ + αιn ) + (In − ρW1 )−1 (In − θW2 )ε   (2.40)
   The distinction between the SAC and the SARMA model lies in the diﬀer-
ences between the disturbances in their respective DGPs (2.38) and (2.40).
The SAC uses (In −ρW1 )−1 (In −θW2 )−1 ε while SARMA uses (In −ρW1 )−1 (In −
θW2 )ε. Given the series representation of the inverse in terms of matrix
powers, it should be clear that the SAC will place more weight on higher
powers of W than SARMA. However, both of these models have: E(y) =
(In − ρW1 )−1 (Xβ + αιn ), which is the same as E(y) for the SAR model.
Therefore, these models concentrate on a more elaborate model for the dis-
turbances, whereas the SDM elaborates on the model for spillovers.
   In addition, many other models exist such as the matrix exponential, frac-
tional diﬀerencing, and other variants of the ARMA speciﬁcations. We will
deal with some of these in Chapter 9.




2.7        Interpreting parameter estimates
   Spatial regression models exploit the complicated dependence structure be-
tween observations which represent countries, regions, counties, etc. Because
of this, the parameter estimates contain a wealth of information on relation-
ships among the observations or regions. A change in a single observation
(region) associated with any given explanatory variable will aﬀect the region
itself (a direct impact) and potentially aﬀect all other regions indirectly (an
indirect impact). In fact, the ability of spatial regression models to capture
these interactions represents an important aspect of spatial econometric mod-
els noted in Behrens and Thisse (2007).



© 2009 by Taylor & Francis Group, LLC
34                                Introduction to Spatial Econometrics

   A virtue of spatial econometrics is the ability to accommodate extended
modeling strategies that describe multi-regional interactions. However, this
rich set of information also increases the diﬃculty of interpreting the resulting
estimates. In Section 2.7.1 we describe the theory behind analysis of the
impact of changing explanatory variables on the dependent variable in the
model. Computational approaches to calculating summary measures of these
impacts are the subject of Section 2.7.2, with measures of dispersion for these
summary statistics discussed in Section 2.7.3. A partitioning of the summary
measures of impact that allows an examination of the rate of decay of impact
over space is set forth in Section 2.7.4 and Section 2.7.5 discusses an error
model that contains both X and W X which we label (SDEM) as a simpliﬁed
means of estimating direct and indirect impacts.

2.7.1         Direct and indirect impacts in theory
   Linear regression parameters have a straightforward interpretation as the
partial derivative of the dependent variable with respect to the explanatory
variable. This arises from linearity and the assumed independence of obser-
                                k
vations in the model: y = r=1 xr βr + ε. The partial derivatives of yi with
respect to xir have a simple form: ∂yi /∂xir = βr for all i, r; and ∂yi /∂xjr = 0,
for j = i and all variables r.
   One way to think about this is that the information set for an observation i
in regression consists only of exogenous or predetermined variables associated
                                                                         k
with observation i. Thus, a linear regression speciﬁes: E(yi ) = r=1 xir βr ,
and takes a restricted view of the information set by virtue of the independence
assumption.
   In models containing spatial lags of the explanatory or dependent variables,
interpretation of the parameters becomes richer and more complicated. A
number of researchers have noted that models containing spatial lags of the
dependent variable require special interpretation of the parameters (Anselin
and LeGallo, 2006; Kelejian, Tavlas and Hondronyiannis, 2006; Kim, Phipps,
and Anselin, 2003; LeGallo, Ertur, and Baumont, 2003).
   In essence, spatial regression models expand the information set to include
information from neighboring regions/observations. To see the eﬀect of this,
consider the SDM model which we have re-written in (2.41).


           (In − ρW )y = Xβ + W Xθ + ιn α + ε
                                        k
                            y=              Sr (W )xr + V (W )ιn α + V (W )ε    (2.41)
                                    r=1
                    Sr (W ) = V (W )(In βr + W θr )
                    V (W ) = (In − ρW )−1 = In + ρW + ρ2 W 2 + ρ3 W 3 + . . .

     To illustrate the role of Sr (W ), consider the expansion of the data gener-



© 2009 by Taylor & Francis Group, LLC
              Motivating and Interpreting Spatial Econometric Models                          35

ating process in (2.41) as shown in (2.42) (Kim, Phipps, and Anselin, 2003,
c.f. equation(4)).

              ⎛    ⎞                 ⎛                                  ⎞⎛      ⎞
                y1                  Sr (W )11 Sr (W )12 . . . Sr (W )1n     x1r
              ⎜ y2 ⎟            k ⎜ S (W )
                                           21 Sr (W )22                 ⎟ ⎜ x2r ⎟
              ⎜ ⎟                 ⎜ r                                   ⎟⎜      ⎟
              ⎜ .. ⎟ =            ⎜     ..        ..    ..              ⎟ ⎜ .. ⎟           (2.42)
              ⎝ . ⎠            r=1
                                  ⎝      .         .        .           ⎠⎝ . ⎠
                  yn                     Sr (W )n1 Sr (W )n2 . . . Sr (W )nn      xnr

                          + V (W )ιn α + V (W )ε

The case of a single dependent variable observation in (2.43) makes the role
of the matrix Sr (W ) more transparent. We use Sr (W )ij in this equation to
denote the i, jth element of the matrix Sr (W ), and V (W )i to indicate the ith
row of V (W ).

                          k
                yi =          [Sr (W )i1 x1r + Sr (W )i2 x2r +, . . . , +Sr (W )in xnr ]
                        r=1
                    + V (W )i ιn α + V (W )i ε                                             (2.43)

   It follows from (2.43) that unlike the case of the independent data model,
the derivative of yi with respect to xjr is potentially non-zero, taking a value
determined by the i, jth element of the matrix Sr (W ). It is also the case
that the derivative of yi with respect to xir usually does not equal βr as in
least-squares.

                                              ∂yi
                                                   = Sr (W )ij                             (2.44)
                                              ∂xjr
   An implication of this is that a change in the explanatory variable for a
single region (observation) can potentially aﬀect the dependent variable in
all other observations (regions). This is of course a logical consequence of
our SDM model, since the model takes into account other regions dependent
and explanatory variables through the introduction of W y and W X. For a
model where the dependent variable vector y reﬂects say levels of regional
per capita income, and the explanatory variables are regional characteristics
(e.g., human and physical capital, industrial structure, population density,
etc.), regional variation in income levels is modeled to depend on income
levels from neighboring regions captured by the spatial lag vector W y, as well
as characteristics of neighboring regions represented by W X.
   The own derivative for the ith region shown in (2.45) results in an expression
Sr (W )ii that measures the impact on the dependent variable observation i
from a change in xir . This impact includes the eﬀect of feedback loops where
observation i aﬀects observation j and observation j also aﬀects observation i



© 2009 by Taylor & Francis Group, LLC
36                                Introduction to Spatial Econometrics

as well as longer paths which might go from observation i to j to k and back
to i.

                                           ∂yi
                                                = Sr (W )ii              (2.45)
                                           ∂xir
   Consider the scalar term Sr (W )ii in light of the matrix, Sr (W ) = (In −
ρW )−1 (In βr + W θr ). Focusing on the inverse term and the series expansion
of this inverse from Chapter 1 expression (1.12), neighboring region inﬂuences
arise as a result of impacts passing through neighboring regions and back to
the region itself. To see this, observe that the matrix W 2 from Chapter 1 ex-
pression (1.15) reﬂects second order neighbors and contains non-zero elements
on the diagonal. These arise because region i is considered a neighbor to its
neighbor, so that impacts passing through neighboring regions will exert a
feedback inﬂuence on region i itself. The magnitude of this type of feedback
will depend upon: (1) the position of the regions in space, (2) the degree
of connectivity among regions which is governed by the weight matrix W in
the model, (3) the parameter ρ measuring the strength of spatial dependence,
and (4) the parameters β and θ. The diagonal elements of the n × n ma-
trix Sr (W ) contain the direct impacts, and oﬀ-diagonal elements represent
indirect impacts.
   There are some situations where practitioners are interested in impacts aris-
ing from changes in a single region or the impact of changes on a single region,
which would be reﬂected in one column or row of the matrix Sr (W ) as we will
motivate shortly. For example, Kelejian, Tavlas and Hondronyiannis (2006)
examine the impact of ﬁnancial contagion arising from a single country on
other countries in the model, Anselin and LeGallo (2006) examine diﬀusion
of point source air pollution, and LeGallo, Ertur, and Baumont (2003) and
Dall’erba and LeGallo (2007) examine impacts of changing explanatory vari-
ables (such as European Union structural funds) in strategic regions on overall
economic growth.
   In general however, since the impact of changes in an explanatory variable
diﬀers over all regions/observations, Pace and LeSage (2006) suggest a desir-
able summary measure of these varying impacts. A natural scalar summary
would be based on summing the total impacts over the rows (or columns) of
the matrix Sr (W ), and then taking an average over all regions. They label
the average of row sums from this matrix as the Average Total Impact to an
Observation, and refer to the average of column sums as Average Total Impact
from an Observation. An average of the diagonal of matrix Sr (W ) provides
a summary measure of the Average Direct Impact. Finally, a scalar summary
of the Average Indirect Impact is by deﬁnition the diﬀerence between the Av-
erage Total Impact and Average Direct Impact. Formally, the deﬁnitions of
these summary measures of impact are:

     1. Average Direct Impact. The impact of changes in the ith observation of
        xr , which we denote xir , on yi could be summarized by measuring the



© 2009 by Taylor & Francis Group, LLC
              Motivating and Interpreting Spatial Econometric Models             37

         average Sr (W )ii , which equals n−1 tr(Sr (W )). Note that averaging over
         the direct impact associated with all observations i is similar in spirit
         to typical regression coeﬃcient interpretations that represent average
         response of the dependent to independent variables over the sample of
         observations.

    2. Average Total Impact to an Observation. The sum across the ith row
       of Sr (W ) would represent the total impact on individual observation
       yi resulting from changing the rth explanatory variable by the same
       amount across all n observations (e.g., xr + διn where δ is the scalar
       change). There are n of these sums given by the column vector cr =
       Sr (W )ιn , so an average of these total impacts is n−1 ιn cr .

    3. Average Total Impact from an Observation. The sum down the jth
       column of Sr (W ) would yield the total impact over all yi from changing
       the rth explanatory variable by an amount in the jth observation (e.g.,
       xjr + δ). There are n of these sums given by the row vector rr =
       ιn Sr (W ), so an average of these total impacts is n−1 rr ιn .

    It is easy to see that the numerical values of the summary measures for the
two forms of average total impacts set forth in 2) and 3) above are equal, since
ιn cr = ιn Sr (W )ιn , as does rr ιn = ιn Sr (W )ιn . However, these two measures
allow for diﬀerent interpretative viewpoints, despite their numerical equality.
    The from an observation view expressed in 3) above relates how changes in
a single observation j inﬂuences all observations. In contrast, the to an obser-
vation view expressed in 2) above considers how changes in all observations
inﬂuence a single observation i. Averaging over all n of the total impacts,
whether taking the from an observation or to an observation approaches,
leads to the same numerical result. Therefore, the average total impact is the
average of all derivatives of yi with respect to xjr for any i, j. The average
direct impact is the average of all own derivatives. Consequently, the aver-
age of all derivatives (average total impact) less the average own derivative
(average direct impact) equals the average cross derivative (average indirect
impact).
    The application of Kelejian, Tavlas and Hondronyiannis (2006) examines
the impact of ﬁnancial contagion arising from a single country on other coun-
tries in the model, taking the from an observation viewpoint expressed in 3)
above. On the other hand, Dall’erba and LeGallo (2007) examine impacts
of changing explanatory variables (such as European Union structural funds)
which apply to all regions on own-region as well as overall economic growth,
an example more consistent with the to an observation view. We will provide
additional examples in our applied illustrations throughout the text.
    We need to keep in mind that the scalar summary measures of impact reﬂect
how these changes would work through the simultaneous dependence system
over time to culminate in a new steady state equilibrium.



© 2009 by Taylor & Francis Group, LLC
38                                Introduction to Spatial Econometrics

   We note that our measures of impact for the SAR model can be derived
from (2.46).


           (In − ρW )y = Xβ + ιn α + ε
                                        k
                            y=              Sr (W )xr + V (W )ιn α + V (W )ε    (2.46)
                                    r=1
                    Sr (W ) = V (W )In βr
                    V (W ) = (In − ρW )−1 = In + ρW + ρ2 W 2 + ρ3 W 3 + . . .

  The summary measure of total impacts, n−1 ιn Sr (W )ιn , for this model take
the simple form in (2.47) for row-stochastic W .


                            n−1 ιn Sr (W )ιn = n−1 ιn (In − ρW )−1 βr ιn
                                              = (1 − ρ)−1 βr                    (2.47)

   In contrast to our approach and nomenclature, Abreu, de Groot, and Florax
(2004) consider the (simpler) SAR model and the expression in (2.48). They
refer to βr as a direct eﬀect, W ρβr as an indirect eﬀect, and the term in
brackets is labeled induced eﬀects.
                      ∂y
                           = In βr + W ρβr + [W 2 ρ2 βr + W 3 ρ3 βr + . . .]    (2.48)
                      ∂xr
Under their labeling, as they correctly point out, the direct eﬀects do not
correspond to the partial derivative of yi with respect to xir , and the indirect
eﬀects do not correspond to the partial derivative of yi with respect to xjr
for i = j. In contrast, our deﬁnitions of direct eﬀect and indirect eﬀects do
correspond to the own- and cross-partial derivatives respectively. An addi-
tional beneﬁt of our approach is that we reduce the number of labels from
three (direct, indirect, and induced) to only two (direct and indirect).
   Relative to the SAR model, the SDM model total impacts arising from
changes in Xr exhibit a great deal of heterogeneity arising from the presence
of the additional matrix W θr in the total eﬀects. In particular, this allows
the spillovers from a change in each explanatory variable to diﬀer as opposed
to the SAR case which has a common, global multiplier for each variable.
   For the case of the SAC model, the total impacts take the same form as in
the SAR model, since the spatial autoregressive model for the disturbances
in this model do not come into play when considering the partial derivative
of y with respect to changes in the explanatory variables X. Of course, in
applied practice, impact estimates for the SAR model would be based on SAR
model estimates for the coeﬃcients ρ, β, whereas those for the SAC would be
based on SAC model estimates for these parameters, which would likely be
diﬀerent. It is also the case that the SARMA model introduced in Section 2.6



© 2009 by Taylor & Francis Group, LLC
              Motivating and Interpreting Spatial Econometric Models            39

would have the same total impacts as the SAR and SAC models, again with
the caveat that estimates based on the SARMA model for ρ, β would be used
in calculating these impacts. Consequently, for larger data sets SAR, SAC,
and SARMA should yield very similar estimated impacts (in the absence of
misspeciﬁcation aﬀecting variables other than the disturbance terms).

2.7.2         Calculating summary measures of impacts
  We formally deﬁne in (2.49) through (2.51), M̄ (r)total , M̄ (r)direct , and
M̄ (r)indirect , representing the average total impacts, the average direct im-
pacts, and the average indirect impacts from changes in the model variable
Xr .


                                  M̄ (r)direct = n−1 tr(Sr (W ))             (2.49)
                                  M̄ (r)total = n−1 ιn Sr (W )ιn            (2.50)
                               M̄ (r)indirect = M̄ (r)total − M̄ (r)direct   (2.51)

  It is computationally ineﬃcient to calculate the summary impact estimates
using the deﬁnitions above, since this would require inversion of the n × n
matrix (In − ρW ) in Sr (W ). We propose an approximation to the inﬁnite
expansion of Sr (W ) based on traces of the powers of W . This of course re-
quires that the highest power considered in the approximation is large enough
to ensure approximate convergence. Chapter 4 discusses a linear in n approx-
imation of this type that aids in calculating the scalar summary measures for
the direct, indirect and total impacts.

2.7.3         Measures of dispersion for the impact estimates
   In order to draw inferences regarding the statistical signiﬁcance of the im-
pacts associated with changing the explanatory variables, we require the dis-
tribution of our scalar summary measures for the various types of impact.
Computationally eﬃcient simulation approaches can be used to produce an
empirical distribution of the parameters α, β, θ, ρ, σ that are needed to calcu-
late the scalar summary measures. This distribution can be constructed using
a large number of simulated parameters drawn from the multivariate normal
distribution of the parameters implied by the maximum likelihood estimates.
   Alternatively, Bayesian Markov Chain Monte Carlo (MCMC) estimation
methods set forth in LeSage (1997), discussed in Chapter 5 can be used to
produce estimates of dispersion for the scalar impacts. Since MCMC esti-
mation yields samples (draws) from the posterior distribution of the model
parameters, these can be used in (2.49) and (2.50) to produce a posterior dis-
tribution for the scalar summary measures of impact. As shown by Gelfand
et al. (1990), MCMC can yield valid inference on non-linear functions of the
parameters such as the direct and indirect impacts in (2.49) and (2.50). All



© 2009 by Taylor & Francis Group, LLC
40                                Introduction to Spatial Econometrics

that is required is evaluation and storage of the draws reﬂecting the non-linear
combinations of the parameters. Posterior estimates of dispersion are based
on simple variance calculations applied to these stored draws, a topic taken
up in Chapter 5.


2.7.4         Partitioning the impacts by order of neighbors
   It should be clear that impacts arising from a change in the explanatory
variables will inﬂuence low-order neighbors more than higher-order neighbors.
We would expect a proﬁle of decline in magnitude for the impacts as we move
from lower- to higher-order neighbors. In some applications the particular
pattern of decay of inﬂuence on various order neighbors may be of interest.
We provide an example of this in Chapter 3.
   Since the impacts are a function of Sr (W ), these can be expanded as a
linear combination of powers of the weight matrix W using the inﬁnite series
expansion of (In − ρW )−1 . Applying this to (2.49) and (2.50) where we use
the deﬁnition of Sr (W ) for the SAR model allows us to observe the impact
associated with each power of W . These powers correspond to the observa-
tions themselves (zero-order), immediate neighbors (ﬁrst-order), neighbors of
neighbors (second-order), and so on.


                  Sr (W ) ≈ (In + ρW + ρ2 W 2 + ρ3 W 3 +, . . . , +ρq W q )βr   (2.52)

   As an example, Table 2.1 shows both the cumulative and marginal or spa-
tially partitioned direct, indirect and total impacts associated with orders 0
to 9 for the case of a SAR model where βr = 0.5 and ρ = 0.7. From the
table we see a cumulative direct eﬀect equal to 0.586, which given the coeﬃ-
cient of 0.5 indicates that there is feedback equal to 0.086 arising from each
region impacting neighbors that in turn impacts neighbors to neighbors and
so on. In this case these feedback eﬀects account for the diﬀerence between
the coeﬃcient value of βr = 0.5 and the cumulative direct eﬀect of 0.586.
   The cumulative indirect eﬀects equal to 1.0841 are nearly twice the mag-
nitude of the cumulative direct eﬀects of 0.5860. Based on the t-statistics
calculated from a set of 5,000 simulated parameter values, all three eﬀects are
signiﬁcantly diﬀerent from zero.
   The spatial partitioning of the direct eﬀect shows that by the time we reach
9th-order neighbors we have accounted for 0.5834 of the 0.5860 cumulative
direct eﬀect. Of note is the fact that for W 0 there is no indirect eﬀect, only
direct eﬀect, and for W 1 there is no direct eﬀect, only indirect. To see this,
consider that when q = 0, W 0 = In , and we have: Sr (W ) = In βr = 0.5In .
When q = 1 we have only an indirect eﬀect, since there are zero elements on
the diagonal of the matrix W . Also, the row-stochastic nature of W leads to
an average of the sum of the rows that takes the form: ρβr = 0.7 × 0.5 = 0.35,
when q = 1.



© 2009 by Taylor & Francis Group, LLC
              Motivating and Interpreting Spatial Econometric Models            41
                         TABLE 2.1:         Spatial partitioning of direct,
                         indirect and total impacts
                                                     Cumulative Eﬀects
                                               Mean Std. dev t−statistic
                            Direct eﬀect Xr     0.5860 0.0148      39.6106
                            Indirect eﬀect Xr   1.0841 0.0587      18.4745
                            Total eﬀect Xr      1.6700 0.0735      22.7302
                                                Spatially Partitioned Eﬀects
                            W-order             Total    Direct      Indirect
                            W0                  0.5000   0.5000     0
                            W1                  0.3500   0          0.3500
                            W2                  0.2452   0.0407     0.2045
                            W3                  0.1718   0.0144     0.1574
                            W4                  0.1204   0.0114     0.1090
                            W5                  0.0844   0.0066     0.0778
                            W6                  0.0591   0.0044     0.0547
                            W7                  0.0415   0.0028     0.0386
                            W8                  0.0291   0.0019     0.0272
                            W9                  0.0204   0.0012     0.0191
                                9     q
                                q=0 W           1.6220 0.5834       1.0386




   While cumulative indirect eﬀects having larger magnitudes than the direct
eﬀects might seem counterintuitive, the marginal or partitioned impacts make
it clear that individual indirect eﬀects falling on ﬁrst-order, second-order and
higher-order neighboring regions are smaller than the average direct eﬀect of
0.5 falling on the “own-region.” Cumulating these eﬀects however leads to
a larger indirect eﬀect which represents smaller impacts spread over many
regions.
   We see the direct eﬀects die down quickly as we move to higher-order neigh-
bors, whereas the indirect or spatial spillover eﬀects decay more slowly as we
move to higher-order neighbors.


2.7.5         Simpliﬁed alternatives to the impact calculations
   Spatial regression models such as the SEM that do not involve spatial lags
of the dependent variable produce estimates for the parameters β that can be
interpreted in the usual regression sense as partial derivatives: ∂yi /∂xir = βr
for all i, r; and ∂yi /∂xjr = 0, for j = i and all variables r. Of course, these
models do not allow indirect impacts to arise from changes in the explanatory
variables, similar to the least-squares situation where the dependent variable
observations are treated as independent.
   An alternative to the SEM model that we label the spatial Durbin error



© 2009 by Taylor & Francis Group, LLC
42                                Introduction to Spatial Econometrics

model (SDEM) includes a spatial lag of the explanatory variables W X, as
well as spatially dependent disturbances. This model, which augments the
SEM model with a spatial lag of the explanatory variables is shown in (2.53),
with the model DGP in (2.54).


                                        y = Xβ + W Xγ + ιn α + u         (2.53)
                                             −1
                                        u=R ε
                                        y = Xβ + W Xγ + ιn α + R−1 ε     (2.54)
                                        R = In − ρW
                                             k
                                   E(y) =         Sr (W )xr + ιn α       (2.55)
                                            r=1
                                Sr (W ) = (In βr + W γr )

   The SDEM model does not allow for a separate lagged dependent variable
eﬀect, but does allow for spatially dependent errors and spatial lags of the
explanatory variables. Relative to the more general SDM, it simpliﬁes in-
terpretation of the impacts, since the direct impacts are represented by the
model parameters β and indirect impacts correspond to γ. This also allows
us to use measures of dispersion such as the standard deviation or t-statistic
for these regression parameters as a basis for inference regarding signiﬁcance
of the direct and indirect impacts.
   The version of the SDEM in (2.53) uses the same spatial weight matrix
for the errors and the spatially lagged explanatory variables, but this could
be generalized to allow for diﬀerent weights and not aﬀect the simplicity of
interpreting the direct and indirect impacts as corresponding to the model
parameters.
   The SDEM replaces the global multiplier found in the SDM with local
multipliers that simplify interpretation of the model estimates. However, we
note that the SDEM could result in underestimation of higher-order (global)
indirect impacts. The SDEM does not nest the SDM and vice versa. However,
one can devise an extended SDM that nests the SDEM.




2.8        Chapter summary
  We provided numerous motivations for why spatial regression relationships
might arise that include spatial lags of the dependent variable vector. Models
containing spatially lagged dependent variables have been used most often
in situations where there is an intuitive or theoretical motivation that y will
depend on neighboring values of y. For example, the hedonic housing price



© 2009 by Taylor & Francis Group, LLC
              Motivating and Interpreting Spatial Econometric Models       43

literature where it is generally thought that home prices depend on prices of
recently sold neighboring homes. This is because appraisers/real estate agents
presumably use information on recently sold homes to determine the asking
price. Another example is competition between local governments, where it
seems intuitive that local governments can react to actions taken by nearby
local governments.
   There may be a wider role for these models than previously thought since
we were able to provide three motivations based on: omitted variables, space-
time dependence and model uncertainty that resulted in models involving
spatial lags of the dependent variable.
   This type of development has wide-ranging implications for the interface
of economic theory and spatial econometrics. It suggests that spatial econo-
metric models may be applicable in many situations where they have not
previously been employed.




© 2009 by Taylor & Francis Group, LLC
Chapter 3
Maximum Likelihood Estimation



As shown in Chapter 2, estimation of spatial models via least squares can lead
to inconsistent estimates of the regression parameters for models with spatially
lagged dependent variables, inconsistent estimation of the spatial parameters,
and inconsistent estimation of standard errors. In contrast, maximum likeli-
hood is consistent for these models (Lee, 2004). Consequently, this chapter
focuses on maximum likelihood estimation of spatial regression models. His-
torically, much of the spatial econometrics literature has focused on ways
to avoid maximum likelihood estimation because of perceived computational
diﬃculties. There have been a great many improvements in computational
methods for maximum likelihood estimation of spatial regression models since
the time of Anselin’s 1988 text. These improvements allow models involving
samples containing more than 60,000 US Census tract observations to be es-
timated in only a few seconds on desktop and laptop computers.

   Section 3.1 addresses maximum likelihood estimation for the SAR, SDM,
SEM, and other models. Section 3.1 provides a number of techniques that
greatly reduce previous computational diﬃculties that arose in estimation of
these models. Section 3.2 turns attention to maximum likelihood estimation of
variance-covariance estimates of dispersion for the model parameters required
for inference. We provide a new approach that can be used to reduce the
computational tasks needed to construct maximum likelihood estimates of
dispersion needed for inference.

  As already motivated, omitted variables are a likely problem in applied work
with regional economic data, and Section 3.3 further explores the empirical
impact of spatial dependence on omitted variables bias in spatial regression
models. We present theoretical expressions for the bias along with statisti-
cal tests and model speciﬁcations that mitigate problems posed by omitted
variables that are correlated with included explanatory variables.

  The chapter concludes with an application in Section 3.4 that illustrates
many of the issues discussed in the chapter. We rely on a simple model
containing a single explanatory variable used to explain factor productivity
diﬀerences among European Union regions.


                                                                             45
© 2009 by Taylor & Francis Group, LLC
46                                Introduction to Spatial Econometrics



3.1        Model estimation
   We address maximum likelihood estimation for the family of spatial regres-
sion models including SAR, SDM, SEM and SAC, which were introduced in
Section 2.6. The spatial Durbin model (SDM) provides a general starting
point for discussion of spatial regression model estimation since this model
subsumes the spatial error model (SEM) and the spatial autoregressive model
(SAR).
   In Section 3.1.1 we discuss maximum likelihood estimation of the SAR and
SDM models whose likelihood functions coincide. In Section 3.1.2 we turn
attention to the SEM model likelihood function and estimation procedure,
and models involving multiple weight matrices are discussed in Section 3.1.3.

3.1.1         SAR and SDM model estimation
  The SDM model is shown in (3.1) along with its associated data generating
process in (3.2),


                            y = ρW y + αιn + Xβ + W Xθ + ε                   (3.1)
                            y = (In − ρW )−1 (αιn + Xβ + W Xθ + ε)           (3.2)
                            ε ∼ N (0, σ 2 In )

where 0 represents an n × 1 vector of zeros and ιn represents an n × 1 vector
of ones associated with the constant term parameter α. This model can be
                                                                            
written as a SAR model by deﬁning: Z = ιn X W X and δ = α β θ ,
leading to (3.3). This means that the likelihood function for SAR and SDM
models can be written in the same form where: Z = ιn X for the SAR
model and Z = ιn X W X for the SDM model.


                                y = ρW y + Zδ + ε                            (3.3)
                                y = (In − ρW )−1 Zδ + (In − ρW )−1 ε         (3.4)
                                ε ∼ N (0, σ 2 In )

   From the model statement (3.3), if the true value of the parameter ρ was
known to be say ρ∗ , we could rearrange the model statement in (3.3) as shown
in (3.5).

                                          y − ρ∗ W y = Zδ + ε                (3.5)
                                                               −1      ∗
This suggests an estimate for δ of δ̂ = (Z Z) Z (In − ρ W )y. In this
case we could also ﬁnd an estimate for the noise variance parameter σ̂ 2 =
n−1 e(ρ∗ ) e(ρ∗ ), where e(ρ∗ ) = y − ρ∗ W y − Z δ̂.



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                 47

   These ideas motivate that we can concentrate the full (log) likelihood with
respect to the parameters β, σ 2 and reduce maximum likelihood to a univariate
optimization problem in the parameter ρ.
   Maximizing the full log-likelihood for the case of the SAR model would
involve setting the ﬁrst derivatives with respect to the parameters β, σ 2 and
ρ equal to zero and simultaneously solving these ﬁrst-order conditions for all
parameters.
   In contrast, equivalent maximum likelihood estimates could be found using
the log-likelihood function concentrated with respect to the parameters β and
σ 2 . This involves substituting closed-form solutions from the ﬁrst order con-
ditions for the parameters β and σ 2 to yield a log-likelihood that is said to
be concentrated with respect to these parameters. We label these expressions
β̂(ρ), σ̂ 2 (ρ), and note that they depend on sample data plus the unknown pa-
rameter ρ. In the case of the SAR model, this leaves us with a concentrated
log-likelihood that depends only on the single scalar parameter ρ. Optimizing
the concentrated log-likelihood function with respect to ρ, to ﬁnd the maxi-
mum likelihood estimate ρ̂ allows us to use this estimate in the closed-form
expressions for β̂(ρ̂) and σ̂ 2 (ρ̂) to produce maximum likelihood estimates for
these parameters.
   Working with the concentrated log-likelihood yields exactly the same max-
imum likelihood estimates β̂, σ̂, and ρ̂ as would arise from maximizing the
full log-likelihood (Davidson and MacKinnon, 1993, p. 267-269). The mo-
tivation for optimizing the concentrated log-likelihood is that this simpliﬁes
the optimization problem by reducing a multivariate optimization problem
to a univariate problem. Another advantage of using the concentrated log-
likelihood is that simple adjustments to output from the optimization problem
(that we describe later) can be used to produce a computationally eﬃcient
variance-covariance matrix that we use for inference regarding the parameters.
These inferences are identical to those that would be obtained from solving
the more cumbersome optimization problem involving the full log-likelihood.
   The log-likelihood function for the SDM (and SAR) models takes the form
in (3.6) (Anselin, 1988, p. 63), where ω is the n × 1 vector of eigenvalues of
the matrix W .


                                                                      e e
                          ln L = −(n/2) ln(πσ 2 ) + ln |In − ρW | −          (3.6)
                                                                      2σ 2
                              e = y − ρW y − Zδ
                              ρ ∈ (min(ω)−1 , max(ω)−1 )

If ω contains only real eigenvalues, a positive deﬁnite variance-covariance ma-
trix is ensured by the condition: ρ ∈ (min(ω)−1 , max(ω)−1 ), as shown in Ord
(1975). The matrix W can always be constructed to have a maximum eigen-
value of 1. For example, scaling the weight matrix by its maximum eigenvalue
as noted by Barry and Pace (1999); Kelejian and Prucha (2007). In this case,



© 2009 by Taylor & Francis Group, LLC
48                                Introduction to Spatial Econometrics

the interval for ρ becomes (min(ω)−1 , 1) and a subset of this widely employed
in practice is ρ ∈ [0, 1). We provide more details regarding the admissible
values for ρ in Chapter 4. The admissible values can become more compli-
cated for non-symmetric weight matrices W since these may have complex
eigenvalues.
   As noted, the log-likelihood can be concentrated with respect to the coef-
ﬁcient vector δ and the noise variance parameter σ 2 . Pace and Barry (1997)
suggested a convenient approach to concentrating out the parameters δ and
σ 2 , shown in (3.7). The term κ is a constant that does not depend on the
parameter ρ, and |In − ρW | is the determinant of this n × n matrix. We
use the notation e(ρ) to indicate that this vector depends on values taken by
the parameter ρ, as does the scalar concentrated log-likelihood function value
ln L(ρ).


                          ln L(ρ) = κ + ln |In − ρW | − (n/2) ln(S(ρ))                (3.7)
                             S(ρ) = e(ρ) e(ρ) = eo eo − 2ρeo ed + ρ2 ed ed
                              e(ρ) = eo − ρed
                                 eo = y − Zδo
                                 ed = W y − Zδd
                                 δo = (Z  Z)−1 Z  y
                                 δd = (Z  Z)−1 Z  W y
   To simplify optimization of the log-likelihood with respect to the scalar
parameter ρ, Pace and Barry (1997) proposed evaluating the log-likelihood
using a q × 1 vector of values for ρ in the interval [ρmin , ρmax ], labeled as
ρ1 , . . . , ρq in (3.8).

             ⎛           ⎞     ⎛                 ⎞         ⎛            ⎞
               ln L(ρ1 )         ln |In − ρ1 W |             ln(S(ρ1 ))
             ⎜ ln L(ρ2 ) ⎟     ⎜ ln |In − ρ2 W | ⎟         ⎜ ln(S(ρ2 )) ⎟
             ⎜           ⎟     ⎜                 ⎟         ⎜            ⎟
             ⎜     ..    ⎟ = κ+⎜        ..       ⎟ − (n/2) ⎜     ..     ⎟             (3.8)
             ⎝      .    ⎠     ⎝         .       ⎠         ⎝      .     ⎠
                 ln L(ρq )                 ln |In − ρq W |               ln(S(ρq ))
In Chapter 4 we discuss a number of approaches to eﬃciently calculating the
term ln |In −ρi W | over a vector of values for the parameter ρ. In our discussion
here, we simply assume that these values are available during optimization
of the log-likelihood. Given a suﬃciently ﬁne grid of q values for the log-
likelihood, interpolation can supply intervening points to any desired accuracy
(which follows from the smoothness of the log-likelihood function). Note, the
scalar moments eo eo , ed eo , and ed ed and the k × 1 vectors δo , δd are computed
prior to optimization, and so given a value for ρ, calculating S(ρ) simply
requires weighting three numbers. Given the optimum value of ρ, this becomes
the maximum likelihood estimate of ρ denoted as ρ̂. Therefore, it requires very
little computation to arrive at the vector of concentrated log-likelihood values.



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                     49

  Given the maximum likelihood estimate ρ̂, (3.9), (3.10), and (3.11) show
the maximum likelihood estimates for the coeﬃcients δ̂, the noise variance
parameter σ̂ 2 , and associated variance-covariance matrix for the disturbances.


                                    δ̂ = δo − ρ̂δd                               (3.9)
                                  σ̂ 2 = n−1 S(ρ̂)                              (3.10)
                                                                           −1
                                    Ω̂ = σ̂ 2 [(In − ρ̂W ) (In − ρ̂W )]        (3.11)
Although the vectorized approach works well, Chapter 4 discusses an alterna-
tive closed-form solution technique for ρ. However, we prefer to discuss the
vectorized approach here due to its simplicity.
   The likelihood function combines a transformed sum-of-squared errors term
with the log determinant term acting as a penalty function that prevents the
maximum likelihood estimate of ρ from being equal to an estimate based solely
on the minimized (transformed) sum of squared errors, S(ρ). The vectorized
approach provides the additional advantage of ensuring a global as opposed
to a local optimum.
   Maximum likelihood estimation could proceed using a variety of univariate
optimization techniques. These could include the vectorized approach just
discussed based on a ﬁne grid of values of ρ (large q), non-derivative search
methods such as the Nelder-Mead simplex or bisection search scheme, or by
applying a derivative-based optimization technique (Press et al., 1996). Some
form of Newton’s method with numerical derivatives has the advantage of
providing the optimum as well as the second derivative of the concentrated log
likelihood at the optimum ρ̂. This numerical estimate of the second derivative
in conjunction with other information can be useful in producing a numerical
estimate of the variance-covariance matrix for the parameters. We discuss
this topic in more detail in Section 3.2.
   As shown above, an apparent barrier to implementing these models for large
n is the n × n matrix W . If W contains all non-zero elements, it would require
enormous amounts of memory to store this matrix for problems involving large
samples such as the US Census tracts where n > 60, 000. Fortunately, W is
usually sparse, meaning it contains a large proportion of zeros. For example,
if one relies on contiguous regions or some number m of nearest neighboring
regions to form W , the spatial weight matrix will only contain mn non-zeros
as opposed to n2 non-zeros for a dense matrix. The proportion of non-zeros
becomes m/n which falls with n. Contiguity weight matrices have an average
of six neighbors per row (for spatially random sets of points on a plane). As
an example, using the 3,111 US counties representing the lower 48 states plus
the district of Columbia, there are 9,678,321 elements in the 3, 111 × 3, 111
matrix W , but only 3, 111 × 6 = 18, 666 would be non-zero, or 0.1929 percent
of the entries. In addition, calculating matrix-vector products such as W y and
W X take much less time for sparse matrices. In both cases, sparse matrices
require linear in n operations ( O(n)) while a dense W would require quadratic



© 2009 by Taylor & Francis Group, LLC
50                                Introduction to Spatial Econometrics

in n operations (O(n2 )). As shown in Chapter 4, sparse matrix techniques
greatly accelerate computation of the log-determinant and other quantities of
interest.
   To summarize, a number of techniques facilitate calculation of maximum
likelihood estimates for the SDM and SAR models. These techniques include
concentrating the log-likelihood, pre-computing a table of log-determinants
as well as moments such as eo ed , and using sparse W . Taken together, these
techniques greatly reduce the operation counts as well as computer memory
required to solve problems involving large data samples. Chapter 4 provides
more detail about these and other techniques that can aid in calculation of
maximum likelihood estimates.

3.1.2         SEM model estimation
  The model statement for a model containing spatial dependence in the
disturbances that we label SEM is shown in (3.12), with the DGP for this
model in (3.13), where we deﬁne X to be the n × k explanatory variables
matrix that may or may not include a constant term, and β the associated
k × 1 vector of parameters.


                                        y = Xβ + u                           (3.12)
                                        u = λW u + ε
                                        y = Xβ + (In − λW )−1 ε              (3.13)
                                        ε ∼ N (0, σ 2 In )

The full log-likelihood has the form in (3.14).

                                                                      e e
                          ln L = −(n/2) ln(πσ 2 ) + ln |In − λW | −          (3.14)
                                                                      2σ 2
                              e = (In − λW )(y − Xβ)

For a given λ, optimization of the log-likelihood function shows (Ord, 1975;
Anselin, 1988) that β(λ) = (X(λ) X(λ))−1 X(λ) y(λ), where X(λ) = (X −
λW X), y(λ) = (y − λW y), and σ 2 (λ) = e(λ) e(λ)/n where e(λ) = y(λ) −
X(λ)β(λ). Therefore, we can concentrate the log-likelihood with respect to β
and σ 2 to yield the concentrated log-likelihood as a function of λ in (3.15).


                          ln L(λ) = κ + ln |In − λW | − (n/2) ln (S(λ))      (3.15)
                             S(λ) = e(λ) e(λ)                               (3.16)

Unlike the SAR or SDM case, S(λ) is not a simple quadratic in the spatial
parameter. As currently stated in (3.16), evaluating the concentrated log-
likelihood for any given value of λ requires manipulation of n × 1 and n ×



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                             51

k matrices for each choice of λ. This becomes tedious for large data sets,
optimization techniques that require many trial values of λ, and in simulations.
However, variables that require O(n) computations can be pre-computed so
that calculating S(λ) during optimization only requires working with moment
matrices of dimension k by k or smaller. These moment matrices involve the
independent and dependent variables as a function of λ.1


                 AXX (λ) = X  X − λX  W X − λX  W  X + λ2 X  W  W X
                 AXy (λ) = X  y − λX  W y − λX  W  y + λ2 X  W  W y
                   Ayy (λ) = y  y − λy  W y − λy  W  y + λ2 y  W  W y
                       β(λ) = AXX (λ)−1 AXy (λ)
                       S(λ) = Ayy (λ) − β(λ) AXX (λ)β(λ)

With these moments and a pre-computed grid of log-determinants (coupled
with an interpolation routine) updating the concentrated log-likelihood in
(3.15) for a new value of λ is almost instantaneous. Applying a univariate
optimization technique such as Newton’s method to (3.15) to ﬁnd λ̂ and sub-
stituting this into σ 2 (λ), β(λ) and Ω(λ) leads to the maximum likelihood
estimates (3.17) to (3.19).


                                   β̂ = β(λ̂)                                         (3.17)
                                    2     −1
                                 σ̂ = n      S(λ̂)                                    (3.18)
                                                                    −1
                                   Ω̂ = σ̂ 2 (In − λ̂W ) (In − λ̂W )                 (3.19)

   As noted in Section 3.1.1, applying Newton’s method with numerical deriva-
tives to ﬁnd the optimum produces a numerical estimate of the second deriva-
tive of the concentrated log-likelihood at the optimum λ̂. This numerical
estimate of the second derivative can be used in conjunction with other infor-
mation to produce a variance-covariance matrix estimate.
   Note, the SDM model nests the SEM model as a special case. To see this,
consider the alternative statement of the SEM model in (3.20). To avoid
collinearity problems for row-stochastic W , we assume the matrix X does not
contain a constant term and specify this separately. This is necessary to avoid
creating a column vector W ιn = ιn in W X that would duplicate the intercept
term.

1 Use of moment matrices requires that we avoid sets of explanatory variables that are poorly

scaled or ill-conditioned. In practice, this may not act as a tremendous constraint since even
numerically robust computational techniques can be strained by ill-conditioned data sets.
In addition, poorly scaled sets of explanatory variables often lead to diﬃcult-to-interpret
parameter estimates.




© 2009 by Taylor & Francis Group, LLC
52                                Introduction to Spatial Econometrics



                      y = αιn + Xβ + (In − λW )−1 ε
            (In − λW )y = α(In − λW )ιn + (In − λW )Xβ + ε
                              y = λW y + α(In − λW )ιn + Xβ + W X(−βλ) + ε (3.20)

  The model in (3.20) represents an SDM model where the parameter on the
spatial lag of the explanatory variables (W X) has been restricted to equal
−βλ. Estimating the more general SDM model ( y = λW y + Xβ + W Xθ + ε)
and testing the restriction θ = −βλ could lead to rejection of the SEM relative
to the SDM.

3.1.3         Estimates for models with two weight matrices
   The spatial literature contains a number of models involving two or more
weight matrices. Using multiple weight matrices provides a straightforward
generalization of the SAR, SDM, and SEM models. For example, Lacombe
(2004) uses a two weight matrix SAR model similar to the SDM model shown
in (3.21).


                      y = ρ1 W1 y + ρ2 W2 y + Xβ + W1 Xγ + W2 Xθ + ε       (3.21)
                                        2
                      ε ∼ N (0, σ In )

The weight matrix W1 was used to capture the eﬀect of neighboring counties
within the state, and W2 captures the eﬀect of neighboring counties in the
bordering state. Lacombe (2004) analyzed policies that varied across states,
making this model attractive. For a sample of counties that lie on state bor-
ders, spatial dependence extends to both counties within the state as well
as those across the border in the neighboring state. This SDM variant of
Lacombe’s model allows for separate inﬂuences of the explanatory variables
matrix X arising from neighbors within the state versus those in the neigh-
boring state.
   The only departure from our discussion of maximum likelihood estimation
for this variant of the SDM model involves a bivariate optimization problem
over the range of feasible values for ρ1 , ρ2 . Maximizing the (concentrated for
β, γ, θ, σ 2 ) log-likelihood for this variant of the SDM model requires calcu-
lating the log-determinant term: ln |In − ρ1 W1 − ρ2 W2 | over a bivariate grid
of values for both ρ1 , ρ2 in the feasible range. These scalar values associated
with the bivariate grid would be stored in a matrix rather than a vector.
Optimization of the concentrated log-likelihood function over the parameters
ρ1 , ρ2 could repeatedly access this matrix at a very small computational cost.
   As another example of speciﬁcations involving two weight matrices, the
SAC model contains spatial dependence in both the dependent variable and
disturbances as shown in (3.22) along with its associated data generating



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                              53

process in (3.23). Unlike the Lacombe model, it is possible to implement this
model using the same matrix W = W1 = W2 , but we will have more to say
about this later.


                   y = ρW1 y + Xβ + u
                   u = λW2 u + ε                                                         (3.22)
                                          −1                  −1                −1
                   y = (In − ρW1 )             Xβ + (In − ρW1 )    (In − λW2 )       ε   (3.23)
                   ε ∼ N (0, σ 2 In )

The matrices W1 , W2 can be the same or distinct. Obviously, if the parameter
ρ = 0, this model collapses to the SEM model, and λ = 0 yields the SAR
model. Normally, the SAC does not contain a separate W X term, so the
SAC does not usually nest the SDM. However, one can write an extended
SDM that nests the SAC, speciﬁcally:


                                        y = ρW y + Xβ + W Xθ + u
                                        u = λW u + ε
   The log-likelihood for the SAC model is shown in (3.24) along with deﬁni-
tions.

                                                                         e e
                         ln L = −(n/2) ln(πσ 2 ) + ln |A| + ln |B| −                     (3.24)
                                                                         2σ 2
                            e = B(Ay − Xβ)
                            A = In − ρW1
                            B = In − λW2
  The log-likelihood in (3.24) for the SAC model can also be concentrated
with respect to the parameters β, σ 2 . Maximizing this likelihood requires
computing two log-determinants for the case where W1 = W2 , and solving a
bivariate optimization problem in the two parameters ρ and λ.
  Anselin (1988) raised questions about identiﬁcation of the SAC model in
the case of identical matrices W , but Kelejian and Prucha (2007) provide
an argument that the model is identiﬁed for this case. Their argument for
identiﬁcation requires that Xβ in the DGP makes a material contribution
towards explaining variation in the dependent variable y (β = 0). To see the
importance of this, consider (3.25), and note that in the case where β = 0, a
label switching problem exists since AB = BA when A and B are functions
of the same weight matrix W . Therefore, the parameters ρ and λ are not
identiﬁed.


                     y = (In − ρW )−1 Xβ + (In − ρW )−1 (In − λW )−1 ε                   (3.25)



© 2009 by Taylor & Francis Group, LLC
54                                Introduction to Spatial Econometrics

Although, β = 0 will in principle identify the model, as the noise variance
of the disturbances rises, the relative importance of β diminishes. This is
shown in (3.26) where the variables are all scaled by σ. This suggests that
in low signal-to-noise problems (low variation in the predicted values relative
to the noise variance), estimates may show symptoms of this near lack of
identiﬁcation.


                                σ −1 y = A−1 X(σ −1 β) + A−1 B −1 σ −1 ε   (3.26)

 There is also the SARMA model shown in (3.27), with the corresponding
DGP in (3.28).


                     y = ρW1 y + Xβ + u
                     u = (In − θW2 )ε                                      (3.27)
                     y = (In − ρW1 )−1 Xβ + (In − ρW1 )−1 (In − θW2 )ε     (3.28)

 Minor changes would be required to the log-likelihood function for this
model as shown in (3.29), where we have replaced the deﬁnition B = (In −
λW2 ) from the SAC model with B = (In − θW2 )−1 .

                                                                   e e
                                    ln L = κ + ln |A| + ln |B| −           (3.29)
                                                                   2σ 2
                                        e = B(Ay − Xβ)
                                        A = In − ρW1
                                        B = (In − θW2 )−1

   Finally, many other models involving multiple weight matrices or combina-
tions of powers of weight matrices have been proposed in the literature such as
higher-order spatial AR, MA, and ARMA models (Huang and Anh, 1992). In
Chapter 4 we discuss approaches for calculating the determinants that arise
in such models.




3.2        Estimates of dispersion for the parameters
   So far, the estimation procedures set forth can be used to produce estimates
for the spatial dependence parameters ρ and λ using univariate or bivariate
maximization of the log-likelihood function concentrated with respect to β
and σ 2 . Maximum likelihood estimates for the parameters β and σ 2 can be
recovered using the maximum likelihood estimates for the dependence param-
eters ρ̂ and λ̂.



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                             55

   For many purposes, a need exists to conduct inference. Maximum likeli-
hood inference often proceeds using likelihood ratio (LR), Lagrange multiplier
(LM), or Wald (W) tests. Asymptotically, these should all yield similar re-
sults, although these can diﬀer for ﬁnite samples. Often, the choice of one
method over the other comes down to computational convenience and other
preferences.
   Due to the ability to rapidly compute likelihoods, Pace and Barry (1997)
propose likelihood ratio tests for hypotheses such as the deletion of a single
explanatory variable. To put these likelihood ratio tests in a form similar to t-
tests, Pace and LeSage (2003a) discuss use of signed root deviance statistics.2
The signed root deviance applies the sign of the coeﬃcient estimates β to
the square root of the deviance statistic (Chen and Jennrich, 1996). These
statistics behave similar to t -ratios when the sample is large, and can be used
in lieu of t -statistics for hypothesis testing.
   Wald inference uses the Hessian (numerical or analytic) or the related in-
formation matrix to provide a variance-covariance matrix for the estimated
parameters, and thus the familiar t-test. In this case, the Hessian is just
the matrix of second-derivatives of the log-likelihood with respect to the pa-
rameters. Approaches using either the Hessian (Anselin, 1988, p. 76) or the
information matrix (Ord, 1975; Smirnov, 2005) have appeared in the spatial
econometrics literature.
   An implementation issue is constructing the Hessian or information matrix.
We will use the SAR model: y = ρW y+Xβ+ε for simplicity in our discussion.
Straightforward evaluation of the analytical Hessian or information matrix
involves computing a trace term which contains the dense n×n matrix inverse
(In − ρW )−1 . Chapter 4 provides means of rapidly approximating elements
that arise in the Hessian or information matrix. In the following discussion
we focus on the Hessian.
   Given the ability to rapidly evaluate the log-likelihood function, a purely
numerical approach might seem feasible for calculating an estimate of the
Hessian. There are some drawbacks to implementing this approach in soft-
ware for general use. First, practitioners often work with poorly scaled sample
data, which makes numerical perturbations used to approximate the deriva-
tives comprising the Hessian diﬃcult. A second point is that univariate op-
timization takes place using the likelihood concentrated with respect to the
parameters β and σ 2 , so a numerical approximation to the full Hessian does
not arise naturally, as in typical maximum likelihood estimation procedures.
This means that computational time must be spent after estimation of the
parameters to produce a separate numerical estimate of the full Hessian.
   In Section 3.2.1 we discuss ways of marrying the analytic Hessian and nu-
merical Hessian results to take advantage of the strengths of each approach.

2 Deviance is minus twice the log of the likelihood ratio for models ﬁtted by maximum

likelihood. The ratio used in these calculations is one involving the likelihood for the model
excluding each variable versus that for the model containing all variables.




© 2009 by Taylor & Francis Group, LLC
56                                Introduction to Spatial Econometrics

Namely, most of the analytic Hessian elements do not require much time to
compute and have less sensitivity to scaling issues. A numerical approach,
however, takes less time and performs well for the single diﬃcult element in
the analytic Hessian.
   In Chapter 5 Bayesian Markov Chain Monte Carlo (MCMC) estimation
methods for spatial regression models are explained, and these can be used
to produce estimates of dispersion based on the sample of draws carried out
by this sampling-based approach to estimation. Following standard Bayesian
regression theory, use of a non-informative prior in these models should result
in posterior estimates and inferences that are identical to those from maximum
likelihood. Therefore, these estimates of parameter dispersion also provide a
valid, but unorthodox, means of conducting maximum likelihood inference.
   Also, for large n it often becomes feasible to provide bounded inference. For
example, Pace and LeSage (2003a) introduce a lower bound on the likelihood
ratio test that allows conservative maximum likelihood inference while avoid-
ing the computationally demanding task of even computing exact maximum
likelihood point estimates. They show that this form of likelihood dominance
inference (Pollack and Wales, 1991) performed almost as well as exact likeli-
hood inference on parameters from a SAR model involving 890,091 observa-
tions, where the procedure took less than a minute to compute.
   An entirely diﬀerent approach to the problem of inference in spatial regres-
sion models is to rely on an estimation method that is not likelihood based.
Examples include the instrumental variable approach of Anselin (1988, p. 81-
90), the instrumental variables/generalized moments estimator from Kelejian
and Prucha (1998, 1999) or the maximum entropy of Marsh and Mittelham-
mer (2004). Much of the motivation for using these methods comes from the
perceived diﬃculties of computing estimates from likelihood-based methods,
a problem that has been largely resolved. A feature of likelihood-based meth-
ods is that the determinant term ensures that resulting dependence parameter
estimates are in the interval deﬁned by maximum and minimum eigenvalues
of the weight matrix. Some of the alternative estimation methods that avoid
using the log-determinant can fail to yield dependence parameter estimates in
this interval. In addition, these methods can be sensitive in non-obvious ways
to various implementation issues such as the interaction between the choice
of instruments and the speciﬁcation of the model. For these reasons, we focus
on likelihood-based techniques.


3.2.1         A mixed analytical-numerical Hessian calculation

  For the case of the SAR model, the Hessian we will work with is organized
as in (3.30), which we label H. For the case of the SEM model, we would
replace the parameter ρ with λ. Of course, some of the derivative expressions
change as well.



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                          57

                                        ⎡                          ⎤
                                         ∂2L     ∂2L       ∂2L
                                      ⎢ ∂ρ2     ∂ρ∂β  ∂ρ∂σ 2 ⎥
                                      ⎢                            ⎥
                                      ⎢                            ⎥
                                      ⎢ 2                          ⎥
                                      ⎢ ∂ L        2
                                                 ∂ L       ∂ L ⎥
                                                            2
                                   H =⎢
                                      ⎢ ∂β∂ρ ∂β∂β  ∂β∂σ 2 ⎥
                                                                   ⎥                 (3.30)
                                      ⎢                            ⎥
                                      ⎢                            ⎥
                                      ⎢ 2                          ⎥
                                      ⎣ ∂ L        2
                                                 ∂ L       ∂ L ⎦
                                                            2

                                        ∂σ 2 ∂ρ ∂σ 2 ∂β  ∂(σ 2 )2

  The analytical Hessian which we label H (a) appears in (3.31), where we
employ the deﬁnitions: A = (In − ρW )−1 , B = y  (W + W  ) y, C = y  W  W y.

                ⎡                                                                ⎤
                           C                     yW X     2C − B + 2y  W  Xβ
           ⎢− tr(W AW A) − σ 2                 −
                                                   σ2              2σ 4          ⎥
           ⎢                                                                     ⎥
           ⎢                                                                     ⎥
           ⎢                                        X X                         ⎥
   H (a) = ⎢
           ⎢        ·                           −                   0
                                                                                 ⎥
                                                                                 ⎥   (3.31)
           ⎢                                         σ2                          ⎥
           ⎢                                                                     ⎥
           ⎣                                                         n           ⎦
                    ·                                ·            − 4
                                                                    2σ

   For models involving a large number of observations n, the computationally
diﬃcult part of evaluating the analytical Hessian in (3.31) involves the term:
− tr(W AW A) = − tr(W (In − ρW )−1 W (In − ρW )−1 ). Done in a computa-
tionally straightforward way, this would require calculating the n × n matrix
inverse, A = (In − ρW )−1 , as well as matrix multiplications involving the n-
dimensional spatial weight matrix W . Such an approach would require O(n3 )
operations since A is dense for spatially connected problems. The remaining
terms involve matrix-vector products, and we note that the spatial weight ma-
trix is often a sparse matrix containing a relatively small number of non-zero
elements. As already noted, this allows use of sparse matrix routines that can
eﬃciently carry out the matrix-vector products.
   At least three ways exist for handling the term tr(W (In − ρW )−1 W (In −
ρW )−1 ). First, one can compute it exactly as in Smirnov (2005). Second,
estimating this trace takes little time, and we will examine this in Chapter 4.
Third, this term is subsumed in the second derivative of the concentrated
log-likelihood with respect to ρ, a quantity that emerges as a byproduct of
optimizing the concentrated log-likelihood using Newton’s method. We term
this latter strategy the mixed analytical-numerical Hessian. In this section,
we show how this works, and provide an applied illustration demonstrating
that this approach is computationally easy to implement and accurate.
   To begin, since we rely on univariate optimization of the concentrated log
likelihood, this will not produce a full numerical Hessian, but rather a numer-
ical Hessian pertaining only to the parameter ρ (or λ) that arises from the
concentrated likelihood labeled Lp in (3.32).



© 2009 by Taylor & Francis Group, LLC
58                                Introduction to Spatial Econometrics



                                                ∂ 2 Lp
                                                                                     (3.32)
                                                 ∂ρ2

As noted by Davidson and MacKinnon (2004), we can work with the concen-
trated likelihood Lp to produce correct values for the parameter ρ (or λ), but
we need the full likelihood (L) Hessian H, which can be expressed in terms
of the scalar spatial dependence parameter
                                           ρ and a vector θ containing the
remaining parameters, θ = β  σ 2 .

                                            ⎡                    ⎤
                                             ∂2L            ∂2L
                                           ⎢ ∂ρ2           ∂ρ∂θ ⎥
                                           ⎢                     ⎥
                                        H =⎢
                                           ⎢ 2
                                                                 ⎥
                                                                 ⎥                   (3.33)
                                           ⎣∂ L             ∂ L ⎦
                                                             2

                                             ∂θ∂ρ          ∂θ∂θ


  It is possible to adjust the empirical concentrated likelihood Hessian so it
produces the appropriate element for the full Hessian as illustrated in (3.34).

                                                                  −1
                               ∂2L    ∂ 2 Lp    ∂2L         ∂ 2L         ∂2L
                                  2
                                    =      2
                                             +                                       (3.34)
                               ∂ρ      ∂ρ      ∂ρ∂θ       ∂θ∂θ         ∂θ∂ρ

This easily computed expression (3.34) (details to follow) can be substituted
into the full Hessian in (3.35).

                           ⎡        2 −1 2                                     ⎤
                        ∂ 2 Lp ∂2L    ∂ L ∂ L                               ∂2L
                      ⎢ ∂ρ2 + ∂ρ∂θ ∂θ∂θ                                  ∂ρ∂θ ⎥
                      ⎢                   ∂θ∂ρ                                   ⎥
                   H =⎢
                      ⎢
                                                                                 ⎥
                                                                                 ⎥   (3.35)
                      ⎣            ∂2L                                      ∂ L ⎦
                                                                             2

                                             ∂θ∂ρ                          ∂θ∂θ

                                                                                        (a)
   Using this approach we can replace the diﬃcult calculation involving H11
with the adjusted empirical concentrated likelihood Hessian from (3.34). A
key point is that maximum likelihood estimation as set forth in Section 3.1
already yields a vector of the concentrated log-likelihood values as a function of
the parameter ρ. Given this vector of concentrated log likelihoods, ∂ 2 Lp /∂ρ2
costs almost nothing to compute.
   For the case of the SAR model, this results in the mixed analytical numerical
Hessian labelled H (m) in (3.36).



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                              59


                             ⎡                                                       ⎤
                        ∂ 2 Lp                 yW X           2C − B + 2y  W  Xβ
                      ⎢ ∂ρ2 + Q            −                                         ⎥
                      ⎢                          σ2                    2σ 4          ⎥
                      ⎢                                                              ⎥
                      ⎢                                                              ⎥
               H (m)
                     =⎢                          X X                                ⎥   (3.36)
                      ⎢       ·             −                           0            ⎥
                      ⎢                           σ2                                 ⎥
                      ⎢                                                              ⎥
                      ⎣                                                              ⎦
                                                                         n
                              ·                   ·                   − 4
                                                                        2σ
                            ⎡                         ⎤−1
                              X X
                             − 2             0
                            ⎢ σ                       ⎥
                     Q = v ⎢
                            ⎣
                                                      ⎥
                                                      ⎦     v                            (3.37)
                                            n
                              0           − 4
                                           2σ
                                                                   
                           yW X           2C − B + 2y  W  Xβ
                      v= −                                                               (3.38)
                            σ2                   2σ 4

We note that ∂ 2 Lp /∂ρ2 represents the estimate of the second derivative of
the concentrated log likelihood with respect to ρ that arises as a byproduct of
optimization. We add this term to the easily calculated quadratic form in Q
shown in (3.37) and (3.38). This results in a simple mixed analytical numerical
Hessian that can be used for inference regarding the model parameters.
  As is well-known, the variance-covariance matrix pertinent to the parameter
estimates equals −H −1 . Given H (m) , one could easily simulate the parameter
estimates using multivariate normal deviates. This ability to quickly simulate
the parameter estimate facilitates ﬁnding the distribution of the direct and
indirect impacts that we discussed in Chapter 2.

3.2.2         A comparison of Hessian calculations
   To compare the various approaches to calculating t-statistics associated
with the spatial regression parameters, we used a sample data set from Pace
and Barry (1997) containing information for 3,107 US counties on voter par-
ticipation in the 1980 presidential election. The dependent variable represents
voter turnout, those voting as a (logged) proportion of those eligible to vote.
Explanatory variables included (logged) population over age 18 Voting Pop,
(logged) population with college degrees Education, (logged) population own-
ing homes Home Owners, and (logged) median household income Income.
   The data was ﬁtted using the SDM model, which includes spatial lags of
the explanatory variables, labeled Lag Voting Pop, Lag Education, and so
on. Table 3.1 presents the resulting t-statistics calculated using: signed root
deviances (SRD), the analytical Hessian (Analytic), Bayesian Markov Chain
Monte Carlo (MCMC), the mixture of the empirical and theoretical Hessian
(Mixed), and a purely numerical Hessian calculation (Numerical). The results



© 2009 by Taylor & Francis Group, LLC
60                                Introduction to Spatial Econometrics
TABLE 3.1:                   A comparison of t-statistics calculated using alternative
approaches
  Variables                             SRD   Analytic   MCMC      Mixed    Numerical
     Votes/Pop       −29.401 −31.689                     −31.486 −31.689 −38.643
     Education         7.718   7.752                       7.752   7.752   7.922
     Home Owners      27.346  29.191                      28.977  29.191  29.837
     Income            1.896   1.897                       1.930   1.897   2.633
     Lag Votes/Pop    12.549  12.904                      12.961  12.907  13.190
     Lag Education     1.570   1.560                       1.621   1.560   1.510
     Lag Home Owners −12.114 −12.381                     −12.375 −12.382 −12.671
     Lag Income       −4.662 −4.661                       −4.713 −4.661 −5.038
     Intercept        11.603  11.449                      11.529  11.453  11.597
     ρ                33.709  41.374                      41.430  41.427  47.254




in the table demonstrate very similar t-statistics from the Analytic, MCMC,
and Mixed techniques. The numerical Hessian estimates diﬀer materially from
the other Hessian results for some variables such as income, despite the fact
that the sample data was well-scaled in this example. The SRD results, which
use likelihood ratio inference, match those from the Analytic and Mixed Hes-
sians for the regression parameters, although the SRD regression parameter
t-statistics appear slightly conservative and the t-statistic on ρ is substantially
more conservative.
   The computational time required was around 0.6 seconds to calculate the
analytic terms in the Hessian along with the adjustments from (3.34).




3.3        Omitted variables with spatial dependence
   The existence of spatially dependent omitted variables seems a likely oc-
currence in applied practice. As an example, consider the spatial growth
regression literature that analyzes cross-sectional regional income growth as
a function of initial period income levels and other explanatory variables de-
scribing regional characteristics thought to inﬂuence economic growth (Abreu,
de Groot, and Florax, 2004; Ertur and Koch, 2007; Ertur, LeGallo and LeSage,
2007; Fingleton, 2001; Fischer and Stirbock, 2006). While regional informa-
tion on explanatory variables such as human capital may exist, it is likely that
sample data information reﬂecting physical capital and other important deter-
minants of regional economic growth are not readily available. Since physical
capital is likely correlated with human capital, and also likely to exhibit spa-
tial dependence, the omitted variables circumstances described in Section 2.2
seem plausible.



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation              61

   In Section 3.3.1, we set forth a statistical test comparing ordinary least-
squares (OLS) and SEM estimates that can be used to diagnose misspec-
iﬁcation in general, and the potential existence of omitted variables. The
motivation for this type of comparison is that theory indicates OLS and SEM
estimates should be the same if the true DGP is either OLS, SEM, or any
other error model.
   A number of authors (Brasington and Hite, 2005; Dubin, 1988; Cressie,
1993, p. 25) have suggested that omitted variables aﬀect spatial regression
methods less than least-squares. In Section 3.3.2 we explore this issue by
deriving an expression for OLS omitted variable bias in a univariate version
of the model. We show that spatial dependence in the explanatory variable
exacerbates the usual omitted variables bias produced when incorrectly using
OLS to estimate an SEM model in the presence of a spatially dependent
omitted variable.
   In Section 3.3.3 we explore the conjecture that spatial regression methods
suﬀer less from omitted variables bias. It is shown that the DGP associated
with spatially dependent omitted variables matches the SDM DGP. Use of
this model in the presence of omitted variables shrinks the bias relative to
OLS estimates, which provides a strong econometric motivation for use of the
SDM model in applied work. Good theoretical motivations exist for the SDM
model as well (Ertur and Koch, 2007).

3.3.1         A Hausman test for OLS and SEM estimates
   As already noted in Section 2.2, OLS estimates for the parameters β will be
unbiased if the underlying DGP represents the SEM model, but t-statistics
from least-squares are biased. As shown in Section 2.2, speciﬁcation error
arising from the presence of omitted variables correlated with the explana-
tory variable and spatial dependence in the disturbances will lead to a DGP
reﬂecting the SDM model. As shown in Section 3.1.2, the SDM model nests
the SEM model as a special case, providing the intuition for this result.
   We explore a formal statistical test for equality of the coeﬃcient estimates
from OLS and SEM, since passing this test would be a good indication that
speciﬁcation problems (such as omitted variables correlated with the explana-
tory variables) were not present in the SEM model.
   As motivation for the test, we note that if the true DGP is any error model,
in a repeated sampling context the average of the error model parameter
estimates for β should be equal. This is true even with omitted variables,
provided that these are independent of X. To see this, consider the error
model DGP in (3.39) where F is some unknown, arbitrary, ﬁxed matrix, and z
is an omitted variable that is independent of X. Consider the generalized least
squares (GLS) estimator in (3.40) based on some arbitrary, ﬁxed variance-
covariance matrix G which may bear no relation to a function of F . For
any choice of F and G, even in the presence of z, the expected value of the
estimates equals β as shown in (3.41).



© 2009 by Taylor & Francis Group, LLC
62                                Introduction to Spatial Econometrics




                  y = Xβ + z + F ε                                                                  (3.39)
                                −1      −1        −1
               β̂G = (X G               X)    XG         y                                          (3.40)
                                −1      −1        −1             −1    −1      −1
               β̂G = (X G               X)    XG         Xβ + (X G       X)    XG       (z + F ε)
         E(β̂G ) = β                                                                                (3.41)

Intuitively, disturbances with a zero expectation whether arising from omitted
variables or misspeciﬁcation (as long as these are orthogonal to the included
explanatory variables) do not aﬀect estimates for parameters associated with
the explanatory variables.
   These theoretical results suggest that a spatial error DGP should result in
OLS and SEM parameter estimates that are (on average) equal for the param-
eters β, despite the presence of some types of model mis-speciﬁcation. How-
ever, the literature contains a number of examples where researchers present
estimates from both OLS and SEM that do not seem close in magnitude.
   A Hausman test (Hausman, 1978) can be used whenever there are two esti-
mators, one of which is ineﬃcient but consistent (OLS in this case under the
maintained hypothesis of the SEM DGP), while the other is eﬃcient (SEM in
this case). We set forth a Hausman test for statistically signiﬁcant diﬀerences
between OLS and SEM estimates. We argue that this test can be useful in
diagnosing the presence of omitted variables that are correlated with variables
included in the model. Since this scenario leads to a model speciﬁcation that
should include a spatial lag of the dependent variable, we would expect to see
OLS and SEM estimates that are signiﬁcantly diﬀerent.
   If we let γ = β̂OLS − β̂SEM represent the diﬀerence between OLS and SEM
estimates, the Hausman test statistic T (under the maintained hypothesis
of the SEM DGP) has the simple form in (3.42), where Ω̂O represents a
consistent estimate of the variance-covariance matrix associated with β̂OLS
(given a spatial error model DGP). The null hypothesis is that the SEM and
OLS estimates are not signiﬁcantly diﬀerent. The alternative hypothesis is a
signiﬁcant diﬀerence between the two sets of estimates.


                                             T = γ  (Ω̂O − Ω̂S )−1 γ                               (3.42)

    Expression (3.43) implies (3.44), and the expectation of the outer product
of (3.44) is shown in (3.45). Although the usual OLS estimated variance-
covariance matrix σo2 (X  X)−1 is inconsistent for the SEM DGP, Cordy and
Griﬃth (1993) show that (3.45) is a consistent estimator. Under the main-
tained hypothesis of the SEM DGP, maximum likelihood SEM estimates of
σ̂ 2 and λ̂ provide consistent estimates that can be used to replace σ 2 and λ
in (3.45) resulting in (3.46).



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                                63



                                        β̂O = β + H(In − λW )−1 ε                          (3.43)
                                                         −1
                      β̂O − E(β̂O ) = H(In − λW )             ε                            (3.44)
                                H = (X  X)−1 X 
                                    ΩO = σ 2 H(In − λW )−1 (In − λW  )−1 H               (3.45)
                                              2               −1             −1       
                                    Ω̂O = σ̂ H(In − λ̂W )          (In − λ̂W )     H       (3.46)

  In (3.42), Ω̂S represents a consistent estimate for the variance-covariance
associated with β̂SEM , again under the maintained hypothesis of the spatial
error process, where Ω̂S is shown in (3.47).

                              Ω̂S = σ̂ 2 (X  (In − λ̂W ) (In − λ̂W )X)−1                 (3.47)
   We note that although SEM estimates for β are unbiased, those for the
variance-covariance matrix are only consistent due to the dependence on the
estimated parameter λ. See Lee (2004) on consistency of spatial regression
estimates and Davidson and MacKinnon (2004, p. 341-342) for an excellent
discussion of Hausman tests.
   The statistic T follows a chi-squared distribution with degrees-of-freedom
equal to the number of regression parameters tested. By way of summary,
the maximum likelihood estimates for β̂SEM , λ̂, σ̂ 2 along with β̂OLS can be
used in conjunction with consistent estimates for Ω̂O from (3.46) and Ω̂S in
(3.47) to calculate the test statistic T . This allows us to test for signiﬁcant
diﬀerences between the SEM and OLS coeﬃcient estimates.
   If we cannot reject the null hypothesis of equality, this would be an indi-
cation that omitted variables do not represent a serious problem or are not
correlated with the explanatory variables. If the SEM has a signiﬁcantly
higher likelihood than OLS, but the Hausman test does not ﬁnd a signiﬁcant
diﬀerence between the OLS and SEM estimates, this indicates that the spatial
error term in the SEM is capturing the eﬀect of omitted variables, but these
are not correlated with the included variables.
   The performance of this spatial Hausman test was examined in Pace and
LeSage (2008) under controlled conditions using a simulated SEM DGP based
on 3, 000 observations and varying levels of spatial dependence assigned to
the parameter λ. They show that the estimated sizes for this test conformed
closely to theoretical sizes.


3.3.2         Omitted variables bias of least-squares
  Often explanatory variables used in spatial regression models exhibit depen-
dence, since these reﬂect regional characteristics. For example, in a housing
hedonic pricing model variables such as levels of income, educational attain-
ment, and commuting times to work often exhibit similarity over space, or



© 2009 by Taylor & Francis Group, LLC
64                                Introduction to Spatial Econometrics

spatial dependence. Also, housing prices are aﬀected by latent unobserv-
able inﬂuences such as architectural quality, attention to landscaping in a
neighborhood, convenient access to popular restaurants, walkability, noise, as
well as other factors. These latent variables may also exhibit similarity over
space. Due to data limitations, these latent variables are likely to be omitted
from models. We discuss an expression for the omitted variable bias that
arises when OLS estimates are used in circumstances where the included and
omitted explanatory variables exhibit spatial dependence and the disturbance
process is spatially dependent as in the SEM model. The expression shows
that spatial dependence in a single included explanatory variable exacerbates
the usual bias that occurs when using OLS to estimate an SEM model in the
presence of a spatially dependent omitted variable that is correlated with the
included explanatory variable.
   We derive an expression for the bias that would arise from using OLS es-
timates in the presence of spatial dependence in the disturbances, included,
and omitted explanatory variables. We work with a vector x representing a
single (non-constant) explanatory variable with a mean of zero and following
an iid normal distribution and let y be the dependent variable. We add an
omitted variable to the SEM model and allow for a spatial dependence process
to govern this variable as well as the included explanatory variable, leading
to the model in (3.48) to (3.51). The vectors ε, and ν represent n × 1 distur-
bance vectors, and we assume that ε is distributed N (0, σε2 In ), ν is distributed
N (0, σν2 In ), and ε is independent of ν.



                                            y = xβ + u                      (3.48)
                                            u = λW u + η                    (3.49)
                                            η = xγ + ε                      (3.50)
                                            x = φW x + ν                    (3.51)


The scalar parameters of the model are: β, λ, φ, and γ, and W is an n × n
non-negative symmetric spatial weight matrix with zeros on the diagonal.
   Expressions (3.48) and (3.49) are the usual SEM model statements and
(3.50) adds an omitted variable, where the strength of dependence (correla-
tion) between the included variable vector x and the omitted variable vector η
is controlled by the parameter γ. Finally, (3.51) speciﬁes a spatial autoregres-
sive process to govern the explanatory variable x. We focus on non-negative
spatial dependence, by assuming λ, φ ∈ [0, 1).
  Pace and LeSage (2009b) derive theoretical expressions for the bias associ-
ated with use of OLS estimates in these circumstances as shown in (3.52) to
(3.54).



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                 65



                   plimn→∞ β̂o = β + Tγ (φ, λ)γ                             (3.52)
                                   tr[H(φ)2 G(λ)]
                       Tγ (φ, λ) =                                          (3.53)
                                      tr[H(φ)2 ]
                                G(λ) = (In − λW )−1 , H(φ) = (In − φW )−1   (3.54)

As the factor Tγ (φ, λ) takes on values greater than unity, this increases the
bias in OLS estimates for this model. The magnitude of bias depends on the
parameter φ representing the strength of spatial dependence in the explana-
tory variable, the parameter λ reﬂecting error dependence, and the parameter
γ which governs the correlation between the included and omitted variable.
   Pace and LeSage (2009b) show that Tγ (φ, λ) > 1 for λ > 0 and spatial
dependence in the regressor, φ > 0, ampliﬁes these factors. This model en-
compasses the SEM model as a special case. The asymptotic biases that arise
from using least-squares estimates in alternative circumstances such as the
presence/absence of omitted variables, and the presence/absence of spatial
dependence in the independent variables and disturbances are enumerated
below.

    1. Spatial dependence in the disturbances and regressor : (γ = 0, λ, φ > 0),
       leads to plimn→∞ β̂o = β, and there is no asymptotic bias.
    2. Spatial dependence in the regressor in the presence of an omitted vari-
       able: (λ = 0), while (γ = 0), results in plimn→∞ β̂o = β + γ, represent-
       ing the standard omitted variable bias.
    3. An omitted variable exists in the presence of spatial dependence in the
       regressors and disturbances: (γ = 0, φ, λ > 0) then plimn→∞ β̂o =
       β + Tγ (φ, λ)γ, and OLS has omitted variables bias ampliﬁed by the
       spatial dependence in the disturbances and in the regressor.

   The ﬁrst result is well-known, and the second is a minor extension of the
conventional omitted variables case for least-squares. The third result shows
that spatial dependence in the disturbances (and/or in the regressor) in the
presence of omitted variables leads to a magniﬁcation of the conventional
omitted variables bias. This third result diﬀers from the usual ﬁnding that
spatial dependence in the disturbances does not lead to bias.
   To provide some feel for the magnitude of these biases, we present results
from a small Monte Carlo experiment in Table 3.2. We simulated a spatially
random set of 1, 000 locations and used these to construct a contiguity-based
matrix W . The resulting 1, 000 × 1, 000 symmetric spatial weight matrix W
was standardized to be doubly stochastic (have both row and columns sums
of unity). The independent variable x was set to an iid unit normal vector
with zero mean. We set β = 0.75 and γ = 0.25 for all trials. Given W and a
value for λ and φ, we used the DGP to simulate 1, 000 samples of y, and for



© 2009 by Taylor & Francis Group, LLC
66                                Introduction to Spatial Econometrics

each sample we calculated the OLS estimate and recorded the average of the
estimates (labeled mean β̂o in Table 3.2). A set of nine combinations of λ and
φ were used, and the theoretical expectation (labeled E(β̂o ) in Table 3.2) was
calculated for each of these using expression (3.52).




                                  TABLE 3.2:         Omitted variables bias as
                                  a function of spatial dependence
                                        Experiment   φ     λ     mean β̂o   E(β̂o )
                                        1            0.0   0.0   0.9990     1.0000
                                        2            0.5   0.0   1.0015     1.0000
                                        3            0.9   0.0   1.0003     1.0000
                                        4            0.0   0.5   1.0173     1.0159
                                        5            0.5   0.5   1.0615     1.0624
                                        6            0.9   0.5   1.1641     1.1639
                                        7            0.0   0.9   1.1088     1.1093
                                        8            0.5   0.9   1.3099     1.3152
                                        9            0.9   0.9   1.9956     2.0035




   The table shows the empirical average of the estimates and the expected
values for the nine combinations of λ and φ. The theoretical and empiri-
cal results show close agreement, and the table documents that serious bias
can occur when omitted variables combine with spatial dependence in the
disturbance process, especially in the presence of spatial dependence in the
regressor. For example, OLS estimates yield an empirical average of 1.9956
(which comes close to the theoretical value of 2.0035) when λ and φ equal
0.9, even though β = 0.75 and γ = 0.25. In this case, Tγ (φ, λ) approximately
equals 5. If β = −1 and γ = 0.2, a Tγ (φ, λ) of 5 would mean that an OLS
regression would produce an estimate close to 0. Therefore, inﬂation of the
usual omitted variable bias could result in no perceived relation between y
and x. A fortiori, the OLS parameter estimate would equal 1 when the true
parameter equalled −1, when γ = 0.4. Therefore, the inﬂation of omitted
variable bias in the presence of spatial dependence can have serious inferen-
tial consequences when using OLS.

  In addition, Pace and LeSage (2009b) study a more general model that
includes spatial dependence in y as well as the disturbances and explanatory
variables. Naturally, spatial dependence in y further increases the bias of
OLS.



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                     67

3.3.3         Omitted variables bias for spatial regressions
   We consider the conjecture made by a number of authors (Brasington and
Hite, 2005; Dubin, 1988; Cressie, 1993, p. 25) that omitted variables aﬀect
spatial regression methods less than ordinary least-squares.
   We begin by examining the implied DGP for the case of spatial dependence
in the omitted variables and disturbances for a given x. This is the DGP as-
sociated with the assumptions (3.48) to (3.50). Manipulating these equations
yields an equation shown in (3.55) in terms of spatial lags of the dependent
and independent variables.


                               y = λW y + x(β + γ) + W x(−λβ) + ε              (3.55)
                               y = λW y + xβ + W xψ + ε                        (3.56)

   We can use the SDM model in (3.56) to produce consistent estimates for
the parameters λ and ψ, since this model matches the DGP in the omitted
variables circumstances set forth. These consistent estimates would equal the
underlying structural parameters of the model in large samples.3 In other
words, for suﬃciently large n estimating (3.56) would yield E(β̂) = β + γ,
E(ψ̂) = −λβ, and E(λ̂) = λ. There is no asymptotic bias in the estimate of
λ for the SDM model in (3.56) despite the presence of omitted variables.
   There is however asymptotic omitted variable bias in this model’s estimates
for β, since E(β̂) − β = γ. Unlike the results for OLS presented in (3.52),
this bias does not depend on x, eliminating the inﬂuence of the parameter
φ that reﬂects the strength of spatial dependence in the included variable x.
Further, the bias does not depend on spatial dependence in the disturbances
speciﬁed by the parameter λ. Instead, the omitted variable bias is constant
and depends only on the strength of relation between the included and omitted
explanatory variable reﬂected by the parameter γ. This is similar to the
conventional regression model omitted variable bias result.
   These results agree with the earlier observation that omitted variables aﬀect
spatial regression methods less than ordinary least-squares. This protection
against omitted variables bias is subject to some caveats, since we must pro-
duce estimates using a model that matches the implied DGP of the model
after taking into account the presence of omitted variables (and the presence
of spatial dependence in these and the explanatory variables as well as distur-
bances). As shown, use of the SEM regression will not contain the spatial lag
of the dependent and explanatory variables implied by the presence of omit-
ted variables. Recall from basic regression theory, inclusion of explanatory
variables not in the DGP does not lead to bias in the estimates. However,


3 See Kelejian and Prucha (1998), Lee (2004), and Mardia and Marshall (1984) regarding

consistency of estimates from spatial regression models.




© 2009 by Taylor & Francis Group, LLC
68                                Introduction to Spatial Econometrics

omitted variables bias arises when variables involved in the DGP are excluded
from the model.
   On the other hand, the SDM model does match the implied DGP that arises
from the presence of omitted variables and spatially dependent explanatory
variables. Consider the converse case where we apply the SDM model to
produce estimates when the true DGP is that of the SEM and there are no
omitted variables. The SDM estimates should still be consistent, but not
eﬃcient.
   As a somewhat more general approach, Pace and LeSage (2009b) use the
SAC DGP and examine the eﬀects of an omitted variable that is correlated
with the included variable, x. The presence of an omitted variable also leads
to an extended SDM model that includes a spatial lag of the explanatory
variables, W x, and that subsumes the SAC. Consider the case of no omitted
variables, where the true DGP is the SAC model. Using the extended SDM
model to produce estimates in these circumstances (where the true DGP is
the SAC model) results in ineﬃcient, but consistent extended SDM model es-
timates for the explanatory variable. Note, eﬃciency of the estimates is often
not the main concern for large spatial samples. Now consider the converse
case where the true DGP is the extended SDM model, but we estimate the
SAC model. The estimates for the explanatory variable coeﬃcients will be bi-
ased due to an incorrect exclusion of the spatially lagged explanatory variables
(W X) from the model. In other words, when the true DGP is associated with
the extended SDM model where explanatory variables from neighboring re-
gions are important, use of the SAC model will produce biased estimates that
suﬀer from the omitted variables problems of the type we have considered.
   By way of conclusion, we examined the impact of omitted variables on least-
squares and various spatial regression model estimates when the DGP reﬂects
spatial dependence in: the dependent variable, the independent variable and
the disturbances. We ﬁnd that the conventional omitted variables bias is am-
pliﬁed when OLS estimation procedures are used for these models. Use of
certain spatial regression models such as the SDM in conjunction with consis-
tent estimators will produce estimates that do not suﬀer from the ampliﬁed
bias. These results provide a strong motivation for use of the SDM model
speciﬁcation in applied work where omitted variable problems seem likely.




3.4        An applied example
   To provide a simple illustration, we rely on a relationship between regional
total factor productivity (tfp) as the dependent variable y and regional knowl-
edge stocks as the single explanatory variable. As illustrated in Chapter 1, the
tfp dependent variable can be constructed using the residuals from a log-linear



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation              69

Cobb-Douglas production function regression with constant returns to scale
imposed. The dependent variable used here was constructed using an empir-
ical estimate of the relative shares of labor and the assumption of constant
returns to scale.
   The dependent variable (total factor productivity) represents what is some-
times referred to as the Solow residual, as motivated in Chapter 1. Taking
this view, we can plausibly rely on a single explanatory variable vector A
representing the regional stock of knowledge, resulting in the model in (3.57),
where we use a in (3.58) to represent lnA.


                                         y = αιn + βlnA + ε             (3.57)
                                         y = αιn + βa + ε               (3.58)
  The variable A was constructed using the stock of regional patents appro-
priately discounted as a proxy for the regional stock of knowledge. LeSage,
Fischer and Scherngell (2007) provide a detailed description of the sample data
which covers 198 European Union regions from the 15 pre-2004 EU member
states. The model relates regional knowledge stocks to regional total factor
productivity to explore whether knowledge stocks impact the eﬃciency with
which regions use their physical factors of production.
  Although we use the regional stock of patents as an empirical proxy for
technology, these are unlikely to capture the true technology available to re-
gions. This is because knowledge produced by innovative ﬁrms is only partly
appropriated due to the public good nature of knowledge which spills over
to other ﬁrms within the region and in nearby regions. We might posit the
existence of unmeasured knowledge a∗ that is excluded from the model but
correlated with the included variable a. It is well-known that regional patents
exhibit spatial dependence (Parent and LeSage, 2008; Autant-Bernard, 2001),
so as already motivated this would lead to an SDM model:

                                 y = α0 ιn + ρW y + α1 a + α2 W a + ε   (3.59)
  The SDM model in (3.59) subsumes the spatial error model SEM as a
special case when the parameter restriction: α2 = −ρα1 . The SEM model
would arise if there were no correlation between measured and unmeasured
knowledge stocks, a and a∗ , and when the restriction α2 = −ρα1 is true.4
In Chapter 6 we apply a simple likelihood-ratio test of the SEM versus SDM
model to test the restriction α2 = −ρα1 for this model and sample data.

3.4.1         Coeﬃcient estimates
  Recall that we showed how spatially dependent omitted variables will lead
to the presence of spatial lags of the explanatory variables in Section 2.2.

4 Anselin (1988) labels this the “common factor restriction.”




© 2009 by Taylor & Francis Group, LLC
70                                Introduction to Spatial Econometrics

Estimates from the SEM and SDM along with t−statistics are presented in
Table 3.3.
  It is frequently the case that applied studies compare estimates such as
those from an SEM model to those from models containing a spatial lag of
the dependent variable such as SAR or SDM. This is not a valid comparison as
the SEM does not provide for spillovers. The SDM summary impact estimates
based on partial derivatives are reported in Table 3.4, and will be discussed
shortly.


              TABLE 3.3:      SEM and SDM model estimates
                 Parameters SEM model estimates SDM model estimates
                            Coeﬃcient t-statistic Coeﬃcient t-statistic
                 α0                     2.5068   17.28        0.5684      3.10
                 α1                     0.1238    6.02        0.1112      5.33
                 α2                                          −0.0160     −0.48
                 ρ                      0.6450    8.97        0.6469      9.11




  Many studies misinterpret the coeﬃcient α2 on the spatial lag of the knowl-
edge capital variable (W · a) as a test for the existence of spatial spillovers.
Since this coeﬃcient is not signiﬁcantly diﬀerent from zero, they would erro-
neously conclude that there are no spatial spillovers associated with knowledge
capital.

3.4.2         Cumulative eﬀects estimates
  Inference regarding the SDM model direct and indirect (spillover) impacts
would be based on the summary measures of direct and indirect impacts for
the SDM model. The matrix expression reﬂecting the own- and cross-partial
derivatives for this model takes the form:


                Sr (W ) = V (W )(In α1 + W α2 )
                V (W ) = (In − ρW )−1 = In + ρW + ρ2 W 2 + ρ3 W 3 + . . .

   Table 3.4 reports eﬀects estimates that were produced by simulating param-
eters using the maximum likelihood multivariate normal parameter distribu-
tion and the mixed analytical Hessian described in Section 3.2.1. A series of
2,000 simulated draws were used. The reported means, standard deviations
and t-statistics were constructed from the simulation output.
   If we consider the direct impacts, we see that these are close to the SDM
model coeﬃcient estimates associated with the variable a reported in Ta-
ble 3.3. The diﬀerence between the coeﬃcient estimate of 0.1112 and the



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                       71
                   TABLE 3.4:            Cumulative eﬀects scalar summary
                   estimates
                                         Mean eﬀects   Std deviation   t-statistic
                      direct eﬀect       0.1201        0.0243          4.95
                      indirect eﬀect     0.1718        0.0806          2.13
                      total eﬀect        0.2919        0.1117          2.61




direct eﬀect estimate of 0.1201 equal to 0.0089 represents feedback eﬀects
that arise as a result of impacts passing through neighboring regions and
back to the region itself. The discrepancy is positive since the impact esti-
mate exceeds the coeﬃcient estimate, reﬂecting some positive feedback. Since
the diﬀerence between the SDM coeﬃcient and the direct impact estimate is
very small, we would conclude that feedback eﬀects are small and not likely
of economic signiﬁcance.
   In contrast to the similarity of the direct impact estimates and the SDM
coeﬃcient α1 , there are large discrepancies between the spatial lag coeﬃcient
α2 from the SDM model and the indirect impact estimates. For example,
the indirect impact is 0.1718, and signiﬁcantly diﬀerent from zero using the t-
statistic. The SDM coeﬃcient estimate associated with the spatial lag variable
W · a reported in Table 3.3 is -0.0160, and not signiﬁcant based on the t-
statistic. If we incorrectly view the SDM coeﬃcient α2 on the spatial lag of
knowledge stocks (W · a) as reﬂecting the indirect impact, this would lead to
an inference that the knowledge capital variable W · a exerts a negative and
insigniﬁcant indirect impact on total factor productivity. However, the true
impact estimate points to a positive and signiﬁcant indirect impact (spillover)
arising from changes in the variable a.
   It is also the case that treating the sum of the SDM coeﬃcient estimates
from the variables a and W ·a as total impact estimates would lead to erroneous
results. The total impact of knowledge stocks on total factor productivity is
a positive 0.2919 that is signiﬁcant, whereas the total impact suggested by
summing up the SDM coeﬃcients would equal less than half this magnitude.
These diﬀerences will depend on the size of indirect impacts which cannot
be correctly inferred from the SDM coeﬃcients. In cases where the indirect
impacts were zero, and the direct impact estimates are close to the SDM
estimates on the non-spatially lagged variables, the total impact could be
correctly inferred. Of course, one would not know if the indirect impacts were
small or insigniﬁcant without calculating the scalar summary impact measures
presented in Table 3.4.
   We can interpret the total impact estimates as elasticities since the model is
speciﬁed using logged levels of total factor productivity and knowledge stocks.
Based on the positive 0.2919 estimate for the total impact of knowledge stocks,
we would conclude that a 10 percent increase in regional knowledge would
result in a 2.9 percent increase in total factor productivity. Around 2/5 of



© 2009 by Taylor & Francis Group, LLC
72                                Introduction to Spatial Econometrics

this impact comes from the direct eﬀect magnitude of 0.1201, and 3/5 from
the indirect or spatial spillover impact based on its scalar impact estimate of
0.1718.


3.4.3         Spatial partitioning of the impact estimates

  We can spatially partition these impacts to illustrate the nature of their
inﬂuence as we move from immediate to higher-order neighbors. This might
be of interest in applications where the spatial extent of the spillovers is an
object of inference.
   These are presented for the SDM model in Table 3.5, which shows the
mean, standard deviation and a t-statistic for the marginal eﬀects associated
with matrices W of orders 0 to 9. Direct eﬀects for W 1 will equal zero and
the indirect eﬀects for W 0 equal zero as discussed in Chapter 2. Of course,
if we cumulated the marginal eﬀects in the table over all orders of W until
empirical convergence of the inﬁnite series, these would equal the cumulative
eﬀects reported in Table 3.4.


                     TABLE 3.5:             Marginal spatial partitioning of
                     impacts
                                   Direct eﬀects    Standard deviation   t-statistic
                        W0        0.1113            0.0205               5.4191
                        W1        0.0000            0.0000                —
                        W2        0.0046            0.0013               3.5185
                        W3        0.0016            0.0007               2.3739
                        W4        0.0010            0.0005               2.0147
                        W5        0.0006            0.0003               1.6643
                        W6        0.0004            0.0002               1.4208
                        W7        0.0002            0.0002               1.2285
                        W8        0.0001            0.0001               1.0761
                        W9        0.0001            0.0001               0.9516
                                  Indirect eﬀects   Standard deviation   t-statistic
                        W0        0.0000            0.0000                —
                        W1        0.0622            0.0188               3.3085
                        W2        0.0353            0.0131               2.6985
                        W3        0.0243            0.0105               2.3098
                        W4        0.0160            0.0083               1.9220
                        W5        0.0107            0.0066               1.6283
                        W6        0.0072            0.0052               1.3978
                        W7        0.0049            0.0040               1.2151
                        W8        0.0033            0.0031               1.0672
                        W9        0.0023            0.0024               0.9455




© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation                         73

   From the table we see that direct and indirect eﬀects exhibit the expected
decay with higher order W matrices. If we use a t-statistic value of 2 as a
measure of when the eﬀects are no longer statistically diﬀerent from zero, we
see that the spatial extent of the spillovers from regional knowledge stocks
is around W 4 . For our matrix W based on 7 nearest neighbors, the matrix
W 2 contains 18 non-zero elements representing second-order neighbors (for
the average region in our sample). The matrix W 3 contains (an average) 30.8
third-order neighbors and W 4 has 45 fourth-order neighbors. This suggests
that spatial spillover eﬀects emanating from a single region exert an impact
on a large proportion of the 198 regions in our sample. However, we note that
the size of the spillover eﬀects is not likely to be economically meaningful for
higher-order neighboring regions.
  Using our elasticity interpretation, we can infer that a relatively large in-
crease of 10 percent in knowledge stocks would have indirect or spatial spillover
eﬀects corresponding to a 0.6 percent increase in ﬁrst-order neighboring re-
gion factor productivity, 0.35 percent increase in second-order neighbors factor
productivity, 0.24 for third-order neighbors, and so on.
   The other notable feature of Table 3.5 is the small amount of feedback eﬀect
shown in the marginal direct eﬀects, and the relatively quick decay with orders
of W .


3.4.4         A comparison of impacts from diﬀerent models
   It is interesting to compare the SDM model estimates and scalar summary
of eﬀects with those from the SAR and SAC models. The coeﬃcient estimates
are presented in Table 3.6. Given the lack of signiﬁcance of the spatial lag
variable W · a in the SDM model, we would expect to see estimates from the
SAR and SDM models that are quite similar, as shown in Table 3.6. The
SAC model resulted in an insigniﬁcant estimate for the spatial dependence
parameter λ associated with the disturbances. This also produces estimates
similar to those from the SAR and SDM models.


          TABLE 3.6:                    SAR and SAC model estimates
             Parameters                  SAR model estimates SAC model estimates
                                         Coeﬃcient t-statistic Coeﬃcient t-statistic
             α0               0.5649                 3.10         0.5625    2.11
             α1               0.1057                 5.93         0.1144    5.09
             α2
             ρ                0.6279                10.12        0.6289     6.27
             λ                                                  −0.0051    −0.02
             σ2               0.1479                             0.1509
             Log-Likelihood −29.30                             −30.65




© 2009 by Taylor & Francis Group, LLC
74                                Introduction to Spatial Econometrics

   Eﬀects estimates for the SAR and SAC model have the same analytical
form since they are based on the matrix expressions from Section 2.7.


                Sr (W ) = V (W )In βr
                V (W ) = (In − ρW )−1 = In + ρW + ρ2 W 2 + ρ3 W 3 + . . .

   The diﬀerence between impacts from these two models and those for the
SDM model is the additional term W θ that appears in the case of the SDM
model. Since the distribution of θ is centered near zero according to the point
estimate and associated t-statistic, we would expect similar impact estimates
from the SAR, SDM and SAC models in this particular illustration.


                   TABLE 3.7:       A comparison of cumulative impacts
                   from SAR, SAC and SDM
                                    SAR eﬀects Std deviation t-statistic
                     direct eﬀect   0.1145      0.0207          5.53
                     indirect eﬀect 0.1746      0.0620          2.81
                     total eﬀect    0.2891      0.0827          3.49
                                          SDM eﬀects    Std deviation    t-statistic
                      direct eﬀect        0.1201        0.0243           4.95
                      indirect eﬀect      0.1718        0.0806           2.13
                      total eﬀect         0.2919        0.1117           2.61
                                          SAC eﬀects    Std deviation    t-statistic
                      direct eﬀect        0.1199        0.0241           4.98
                      indirect eﬀect      0.1206        0.0741           1.62
                      total eﬀect         0.2405        0.0982           2.44




   We note that invalid comparisons of point estimates from diﬀerent spatial
regression model speciﬁcations has lead practitioners to conclude that chang-
ing the model speciﬁcations will lead to very diﬀerent inferences. This may
also have lead to excessive focus in the spatial econometrics literature on pro-
cedures for comparative testing of alternative model speciﬁcations, a subject
we take up in Chapter 6. However, using the correct partial derivative inter-
pretation of the parameters from various models results in less divergence in
the inferences from diﬀerent model speciﬁcations. This result is related to the
partial derivative interpretation of the impact from changes to the variables
from diﬀerent model speciﬁcations which represents a valid basis for these
comparisons.
   This is not meant to imply that model speciﬁcation is not important. For
example, use of an SEM model would lead to omission of the important spatial
spillover (indirect eﬀects) found here. In addition, the SAC eﬀects estimates



© 2009 by Taylor & Francis Group, LLC
                                 Maximum Likelihood Estimation               75

lead to an inference that the indirect spillover impacts are not signiﬁcantly
diﬀerent from zero based on the t-statistic reported in Table 3.7.




3.5        Chapter summary
   In Section 3.1 we set forth computationally eﬃcient approaches to maxi-
mum likelihood estimation of the basic family of spatial regression models.
The most challenging part of maximum likelihood estimation is computing
the log determinant term that appears in the log-likelihood function, and
Chapter 4 will provide details regarding this. In addition to point estimates
there is also a need to provide a variance-covariance matrix estimate that
can be used for inference. Section 3.2 discussed various strategies and set
forth a mixed approach that uses numerical Hessian results to modify a single
computationally challenging term from the analytical Hessian.
   The public domain Spatial Econometrics Toolbox (LeSage, 2007) and Spatial
Statistics Toolbox (Pace, 2007) provide code examples written in the MAT-
LAB language that implement most of the methods discussed in this text.
This should allow the interested reader to examine detailed examples that
implement the ideas presented here.
   Modeling spatial relationships often results in omitted latent inﬂuences that
are spatial in nature. For example, hedonic home price regressions usually
rely on individual house characteristics that may exclude important neigh-
borhood variables that reﬂect accessibility, school quality, amenities, etc. In
Section 3.3, we examined the nature of bias that will arise from omitted vari-
ables in both least-squares and spatial regression estimates. An interesting
feature of omitted variables in spatial regression models is that they will lead
to data generating processes that include spatial lags of the explanatory vari-
ables, providing a powerful motivation for use of the spatial Durbin model.
   An applied illustration was provided in Section 3.4 to reinforce the ideas
set forth in this chapter. A comparison of maximum likelihood estimates
from a family of spatial regression models along with an interpretation of
the parameters was provided. The simple one-variable model was based on
regional variation in factor productivity for a sample of 198 European Union
regions. The focus of this applied illustration was on the role of regional
knowledge stocks in explaining variation in regional total factor productivity.




© 2009 by Taylor & Francis Group, LLC
Chapter 4
Log-determinants and Spatial
Weights


Many spatial applications involve large data sets. For example, the US Census
provides data on blocks (n = 8, 205, 582), block groups (n = 208, 790), census
tracts (n = 65, 443), and other geographies. In the case of the Census data,
each of these observations represents a region. If spatial dependence is mate-
rial and each region aﬀects every other region, this leads to n × n dependence
relations. Since some applications involve elaborate models, computational
aspects of spatial econometrics have been an active area of research for some
time (Ord, 1975; Martin, 1993; Pace and Barry, 1997; Griﬃth, 2000; Smirnov
and Anselin, 2001; LeSage and Pace, 2007).
   This chapter addresses theoretical and numerical issues that arise when
ﬁtting models to spatial data using likelihood-based techniques. Likelihood-
based techniques involve the determinant of the variance-covariance matrix
which measures the degree of dependence among observations. This chapter
addresses both exact and approximate calculation of the log-determinant and
bounds for the dependence parameter.
   In addition, the chapter deals with calculation of other quantities used
in spatial estimation and inference such as the diagonal of the variance-
covariance matrix and the derivative of the log-determinant.
   The chapter addresses eﬃcient computation of the estimated spatial eﬀects
and shows a general approach to obtaining closed-form solutions to many
single parameter spatial models. Finally, the chapter discusses aspects of
quickly constructing spatial weight matrices.




4.1        Determinants and transformations
   Statistical applications often involve transformations of the dependent vari-
able. Unless these transformations are handled properly, statistical procedures
have the potential to produce pathological behavior. We use a simple example
to illustrate the type of problem that can arise. Suppose the interest is in a
least-squares ﬁt of the relationship in (4.1) involving transformation of the
dependent variable by the scalar T .


                                                                             77
© 2009 by Taylor & Francis Group, LLC
78                                Introduction to Spatial Econometrics



                                           T y = Xβ + ε                    (4.1)

A least-squares ﬁt that allowed a setting for T = 0 would yield a vector of zeros
on the left hand side (LHS) resulting in a perfect ﬁt when β = 0. Therefore,
selecting T to minimize errors in (4.1) leads to a pathological solution.
                                                                      
   As a slightly more complex example, suppose that y = u v w and that
X = ι3 . Let T be a 3 × 3 matrix shown in (4.2).

                                               ⎡     ⎤
                                               1 c c
                                          T = ⎣c 1 c ⎦                     (4.2)
                                               c c 1
                                                                     
When c = 1, T y = u + v + w u + v + w u + v + w and least squares
could set β = u + v + w to perfectly explain y. One can devise similar
pathological examples in cases involving more observations.
   Something about the transformation T acts to reduce variability of T y
which can be exploited by a statistical procedure attempting to maximize
goodness-of-ﬁt. One common characteristic of both of these pathological ex-
amples is that the determinant of T equals zero (T is singular).
   Determinants and the role they play in transformations can be considered
at a more basic level outside the context of statistical applications. To demon-
strate this, we examine some basic geometry. The unit square shown as the
solid line segments in Figure 4.1 has positive coordinates as in S of (4.3).
The area bounded by the solid line segments is 1. Suppose we transform the
coordinates of the unit square S in (4.3), multiplying by the transformation
matrix T in (4.4) as shown in (4.5).

                                                    
                                                 0101
                                            S=                             (4.3)
                                                 0011
                                                 
                                                 1c
                                            T =                            (4.4)
                                                 c1
                                           ST = T S                        (4.5)

If c = 0.0, the coordinates remain the same leaving us with a unit square after
transformation. If c = 0.9, the new coordinates appear in (4.6).

                                                       
                                             0 1 0.9 1.9
                                        ST =                               (4.6)
                                             0 0.9 1 1.9

  Figure 4.1 shows the original unit square (c = 0) as well as two transformed
unit squares based on c = 0.5 and c = 0.9. These transformations stretch the
coordinates of the unit square to produce parallelograms.



© 2009 by Taylor & Francis Group, LLC
                            Log-determinants and Spatial Weights                      79


              2

            1.8

            1.6

            1.4

            1.2
        2




              1
      y




                                                                              c=0
            0.8                                                               c=0.5
                                                                              c=0.9
            0.6

            0.4

            0.2

              0
                  0                     0.5       1                1.5                2
                                                  y1


FIGURE 4.1: Bivariate (y1 , y2 ) transformation


   These parallelograms seem to have less area than the original unit square
which had an area of 1. In fact, the absolute value of the determinant of the
transformation matrix T equals the area of the resulting parallelograms. For
the case of the 2 × 2 matrix T , the determinant of this matrix, |T |, equals
T11 T22 − T12 T21 . For this particular T , |T | = 1 − c2 , so values of c = 0, 0.5, 0.9
lead to determinants of T that equal 1, 0.75, 0.19. This implies that the area of
the parallelograms decreases under these transformations where c is positive.
If c = 1.1, the determinant would equal −0.21, but the absolute value of
0.21 would be the area of the resulting parallelogram. More importantly, if
c = 1, the determinant equals 0 and thus the transformation collapses the
unit square.
   In this two-dimensional case, the absolute value of the determinant of T
measures the area of the parallelogram (transformed unit square). In three
dimensions, a 3 × 3 transformation matrix T can transform the unit cube
into a parallelepiped. In this case, the absolute value of the determinant of
T would measure the volume of the parallelepiped formed by transforming
the unit cube. In n dimensions, the n × n matrix T can transform the unit
hypercube to yield an n-parallelotope. As before, the absolute value of the



© 2009 by Taylor & Francis Group, LLC
80                                Introduction to Spatial Econometrics

determinant of T would measure the n-dimensional volume.


  Returning to statistical issues, examine the point clouds in Figure 4.2 from
a transformed normal bivariate distribution based on varying the level of
correlation between y1 and y2 , which we denote ρ = 0, 0.33, 0.66, 0.99. The
bivariate distribution before the transformation was proper (the volume under
the bivariate density equals 1). These point clouds show a pattern similar to
that of the parallelograms with higher correlations corresponding to more
severe transformations.



                                    ρ=0                                ρ=0.33
                4                                          4

                2                                          2
      y2




                                                      y2




                0                                          0

            2                                              2

            4                                              4
                5                       0         5            4   2     0      2   4
                                        y                                y
                                        1                                 1
                                  ρ=0.66                               ρ=0.99
                4                                          4

                2                                          2
                                                           0
      y2




                                                      y2




                0
                                                           2
                2                                          4
                4                                          6
                    4      2            0   2     4            5         0          5
                                        y                                y
                                        1                                 1



FIGURE 4.2: Bivariate (y1 , y2 ) normal point clouds by correlation (ρ)


   It is visually evident that the point clouds associated with the transforma-
tions exhibit shrinkage relative to the original point cloud. To counteract the
shrinkage aspect of transformations, distributions must include an adjustment
to preserve the volume of unity under the joint probability density. As a re-
sult, continuous multivariate densities such as the multivariate normal in (4.7)
include the determinant of the variance-covariance matrix as the adjustment.



© 2009 by Taylor & Francis Group, LLC
                            Log-determinants and Spatial Weights                     81


                                                                             
                                                        1
                   N (u) = (2π)−n/2 |Ω|−1/2 exp           (u − μ) Ω−1 (u − μ)     (4.7)
                                                        2

  The multivariate t distribution (shown below), Wishart, and other distri-
butions also contain a determinant term.

                                                                        − n+p
                    n+p         n −1       p      1     (u − μ) Ω−1 (u − μ)     2
  t(u) = Γ                    Γ      (nπ)− 2 |Ω|− 2 1 +
                     2          2                                 n




4.2        Basic determinant computation
   The product of the diagonal elements of a triangular or a diagonal ma-
trix yields the determinant. Most algorithms for calculating the determinant
exploit this by reducing the matrix under consideration to a diagonal or a
triangular matrix. There are various approaches that can be used to create di-
agonal or triangular matrices. For example, one can compute the determinant
of a matrix using eigenvalues which reduce the matrix under consideration to
a diagonal matrix. Alternatively, various forms of Gaussian elimination such
as the LU or Cholesky decompositions reduce the matrix under consideration
to a triangular matrix. These matrix decomposition techniques also use the
multiplicative property of determinants, |CD| = |C||D| to reduce the general
problem to a product involving simpler problems.
   The matrix decomposition approach to calculating determinants can be
illustrated with simple examples. We begin with the Gaussian elimination
approach which relies on elementary operations such as adding a multiple of
one row to another to achieve a triangular form. These row operations do
not change the determinant, and therefore the ﬁnal triangular matrix has the
same determinant as the initial matrix of interest. We begin with A in (4.8)
and add the ﬁrst row of A times a to the second row of A, which zeros out
the element below the diagonal yielding A1 in (4.9). The diagonal elements
of the resulting triangular matrix A1 are known as pivots, and the product of
the pivots equals the determinant as shown in (4.10) (Strang, 1976).

                                                   
                                               1 −a
                                         A=                                        (4.8)
                                              −a 1
                                                      
                                         1    1 −a
                                        A =                                        (4.9)
                                              0 1 − a2
                                        |A| = |A1 | = 1 − a2                      (4.10)



© 2009 by Taylor & Francis Group, LLC
82                                Introduction to Spatial Econometrics

A zero pivot would yield a zero determinant and a singular matrix. Therefore,
non-singular matrices yield non-zero pivots and positive deﬁnite matrices yield
strictly positive pivots. Obviously, A is non-singular when abs(a) = 1 and A
is positive deﬁnite when abs(a) < 1.

   Note, the determinant of the ﬁrst sub-matrix of A or A11 equals 1. Not
coincidentally, this is the ﬁrst pivot of A1 . In fact, the pivots from the trian-
gular matrix produced by row operations yield the sequence of determinants
for sub-matrices of increasing size. This is a valuable feature that is useful
in examining spatial systems composed of subsets of the observations such as
used in local spatial autoregressions (Pace and LeSage, 2003a).

   Most computer routines actually yield a unit lower triangular matrix L con-
taining ones on the diagonal, an upper triangular matrix U and a permutation
matrix P so that P A = LU . The result of P A is to reorder the rows of A.
This can be used to produce |A| = |L||U |/|P |, which represents an LU de-
composition with permutations or reordering of rows for numerical accuracy.
Fortunately, when A = In − ρW where W is row-stochastic and abs(ρ) < 1, A
is strictly diagonally dominant. This means that the diagonal element (which
equals 1) strictly exceeds the sum of the other elements in the row (which
equals ρ since W is row-stochastic). Strictly diagonally dominant matrices
are invertible (non-singular). Moreover, strictly diagonally dominant matri-
ces do not require reordering rows of A, allowing us to set P = In (Golub and
Van Loan, 1996, Theorem 3.4.3). For the case where P = In , L is unit lower
triangular having a determinant of 1, so |A| = |U | (Strang, 1976, p. 21).

  For symmetric positive deﬁnite matrices, an algorithmic variant yields the
Cholesky decomposition so that A = R R where R is triangular. Therefore
|A| = |R||R | = |R|2 , since the determinant of a matrix and its transpose
are identical. The Cholesky decomposition is almost twice as fast as the LU
decomposition since it takes account of symmetry. In addition, symmetric
positive deﬁnite matrices do not require reordering or permutations for nu-
merical accuracy which reduces the computational cost.

   For non-symmetric A interest often lies in B = A A. In this case, a non-
singular A implies a symmetric positive deﬁnite B. Therefore, it sometimes
pays to ﬁnd the determinant of the symmetric B rather than work directly
with A. In this case, non-singular A can have negative (but not zero) ele-
ments on the diagonal of U . The determinant of A equals the product of
the pivots (some of which may be positive and others negative) and thus can
be positive or negative. This creates a problem when calculating the log of
the determinant for B. However, this problem can be resolved by taking the
absolute value of the determinant which implies ﬁnding the absolute value of
the pivots before using logs as shown in (4.11) to (4.13).



© 2009 by Taylor & Francis Group, LLC
                            Log-determinants and Spatial Weights                         83



                                |B| = |A ||A| = abs(|A|)2                            (4.11)
                                      n
                           abs(|A|) =      abs(Uii )                                  (4.12)
                                            i=1
                                                                 n
                               ln |B| = 2 ln abs(|A|) = 2             ln(abs(Uii ))   (4.13)
                                                               i=1

   For symmetric real matrices (or those that can be transformed to exhibit
symmetry), one can obtain the spectral decomposition B = V ΛB V  . This
decomposition was applied to our 2 × 2 example to produce the results shown
in (4.17) and (4.18). The diagonal matrix ΛB contains the n real eigenvalues,
and V in (4.17) is a matrix comprised of n orthogonal eigenvectors (each
with n elements). By construction, V V  = In and this sets up (4.19). Since
|V | = |V  |, it follows that |V | = |V  | = 1 and this allows us to ﬁnd the
determinant using the product of the diagonal elements of I2 − aΛB as shown
in (4.21). This is equal to the usual 2 × 2 determinant expression which can
be seen from (4.22).


                                         A = I2 − aB                                  (4.14)
                                              
                                              01
                                         B=                                           (4.15)
                                              10
                                         B = V ΛB V                                  (4.16)
                                                              
                                               −0.7071 −0.7071
                                         V =                                          (4.17)
                                               −0.7071 0.7071
                                                   
                                               −1 0
                                        ΛB =                                          (4.18)
                                                01
                                         A = V (I2 − aΛB )V                          (4.19)
                                        |A| = |V ||I2 − aΛB ||V  |                   (4.20)
                                        |A| = (1 − aΛ11 )(1 − aΛ22 )                  (4.21)
                                        |A| = (1 + a)(1 − a) = 1 − a2                 (4.22)

An advantage of the eigenvalue approach is that the eigenvalues of B only
need to be computed once. Subsequent updating of the determinant of A for
diﬀering values of a requires very little additional computation. However, the
eigenvalue approach does not scale well to larger problems.
   In terms of computation, all of these techniques require order of n cubed
(O(n3 )) calculations for general matrices. However, the Cholesky requires
n3 /3, the LU requires 2n3 /3. There are many methods for calculating eigen-
values which require a multiple of the LU and Cholesky counts since the
methods have some iterative component.



© 2009 by Taylor & Francis Group, LLC
84                                Introduction to Spatial Econometrics

   In practice, it becomes numerically challenging to compute the actual de-
terminant using the product of all pivots, since small pivots can lead to a very
small numerically inaccurate determinant. Instead of calculating the deter-
minant per se, we can ﬁnd the log-determinant using the sum of the logged
pivots which will produce a more accurate numerical solution. This naturally
requires positive pivots such as those from a positive deﬁnite matrix.
   Some rules pertaining to determinants and related quantities of interest in
spatial econometrics are enumerated below. We will discuss their application
in circumstances speciﬁc to various spatial econometric modeling situations
in Section 4.3.


                                        |CD| = |C||D|                                   (4.23)
                                         |C  | = |C|                                   (4.24)
                                                  n
                                          |G| =       Gii    diagonal or triangular G   (4.25)
                                                 i=1
                                                    ∞
                                                          ρi tr(W i )
                          ln |In − ρW | = −                                             (4.26)
                                                      i=1
                                                               i
                                         |eC | = etr(C)                                 (4.27)
                                    |C | = |C|
                                           a          a
                                                                                        (4.28)
                                 |C ⊗ D| = |C|dim(D) |D|dim(C)                          (4.29)
                             tr(C ⊗ D) = tr(C) tr(D)                                    (4.30)
                             (C ⊗ D)m = C m ⊗ Dm                                        (4.31)
                   (A ⊗ B)(C ⊗ D) = (AC ⊗ BD)                                           (4.32)
                                                  n
                                   tr(Aj ) =           λji                              (4.33)
                                                 i=1
                              diag(AB) = (A  B  )ιn                                   (4.34)
                                tr(AB) = ιn (A  B  )ιn = ιn (A  B)ιn              (4.35)

In the above rules ⊗ represents the Kronecker product and  represents ele-
mentwise or Hadamard multiplication.




4.3        Determinants of spatial systems
  Spatial models using weight matrices have additional structure and features
which greatly aid computation of determinants, equation solutions, and other
quantities of interest for spatial modeling.



© 2009 by Taylor & Francis Group, LLC
                            Log-determinants and Spatial Weights                        85

   If each observation depends on some, but not all other n − 1 observations,
the weight matrix will have a number of zeros and is therefore a sparse matrix.
In particular, the common contiguity weight matrix will have an average of
approximately six neighbors for each observation for spatially random data
on a plane. An implication is that a contiguity-based weight matrix will have
approximately 6n non-zeros and n2 − 6n zeros. In terms of the proportion
of non-zero elements this equals 6/n, so this matrix becomes increasingly
sparse with increasing n. One can generalize this to the m nearest neighbor
problem which would have a proportion of non-zeros equal to m/n. Sparsity
also extends to other dependence structures such as those used in geostatistics
(Barry and Pace, 1997).
   Sparsity provides tremendous storage and computational advantages. In
the 2000 US Census there were 65, 443 tracts, 208, 790 block groups, and
8, 205, 582 blocks. A dense weight matrix would require 31.90, 324.80, and
501, 659.33 gigabytes of storage respectively for these sample sizes. In con-
trast, a sparse contiguity matrix would require less than 0.01, 0.03, and 1.10
gigabytes of storage for these data samples. In terms of computation, some
sparse matrix techniques require only linear in n calculations, whereas dense
matrix techniques often require calculations that are cubic in n.
   In addition, weight matrices have known properties, which can often be
used to simplify required calculations (Bavaud, 1998; Martellosio, 2006). One
example of this is the row-stochastic matrix W , which results in ρ ∈ [0, 1) as
a suﬃcient condition for non-singular Z = In − ρW . An example where zeros
on the main diagonal of W were used can be found in LeSage and Pace (2007).
They show that zeros on the diagonal of W lead to a zero log-determinant for
the matrix exponential spatial speciﬁcation which we discuss in Chapter 9.
This arises since ln |eαW | = 0, where eαW plays the role of the transformation
matrix T in (4.1) in the case of the matrix exponential spatial speciﬁcation.
   To illustrate how known properties of spatial systems can be exploited to
computational advantage, we use a sample of 3, 107 counties in the continen-
tal United States. For our illustrations we use a matrix W based on 6 nearest
neighbors constructed using Euclidean distance between points of the pro-
jected coordinates.1 Figure 4.3 shows the graph (as in graph theory) where
edges (line segments) between nodes (points) indicate nodes that are neigh-
bors. If only one edge is needed, the nodes are ﬁrst-order neighbors. If t edges
are needed to transverse between nodes, the nodes are t-order neighbors.
   Orderings of rows and columns greatly aﬀect decomposition times for sparse
spatial weight matrices. Ordering rows and columns corresponds to the op-
eration WP = P W P  where P is an n × n permutation matrix. Permuta-

1 The earth is a three dimensional sphere, but maps are two dimensional. Accordingly, maps

can only approximate the surface of a sphere with error. Map projections attempt to make
useful two dimensional approximations of the sphere (Snyder and Voxland, 1989). We used
a transverse Mercator projection of the latitude and longitude coordinates to arrive at new
locational coordinates such as shown in Figure 4.3.




© 2009 by Taylor & Francis Group, LLC
86                                Introduction to Spatial Econometrics




FIGURE 4.3: Graph of W based on six nearest neighbors for US Counties


tion matrices have a number of convenient properties such as P −1 = P  and
|P | = 1. Using these, we can show that reordering elements of W will not
aﬀect the log-determinant calculation. This follows from: |P (In − ρW )P  | =
|P ||In − ρW ||P  |, which equals |In − ρW | (as well as |In − ρP W P  |).
   The simplest ordering is geographic. For example, we ordered the rows and
the columns of the matrix W so that the most northern tract is in the row
and column 1 position, and the most southern tract is in row and column
n. This simple ordering often concentrates non-zero elements closer to the
diagonal than in the original ordering. Intuitively, this makes the permuted
system more like a band matrix which has non-zeros concentrated in ﬁxed
bands around the diagonal. The reverse Cuthill-McKee ordering provides a
more systematic way of reducing the bandwidth of matrices (max(abs(i − j))
for non-zero elements) .
   Other sophisticated ordering algorithms such as minimum degree and nested
dissection can provide computational beneﬁts (Golub and Van Loan, 1996).
The approximate minimum degree ordering is designed to aid Gaussian elim-
ination. Although its workings are not as straightforward as the bandwidth
reducing orderings, it often results in the lowest ﬁll-in that arises from addi-



© 2009 by Taylor & Francis Group, LLC
                            Log-determinants and Spatial Weights              87

tional non-zero elements introduced in L and U . The ﬁll-in occurs in Gaussian
elimination as non-zero elements are introduced during elementary row op-
erations to eliminate elements in the earlier rows that have to be eliminated
later. A good ordering results in low ﬁll-in.
   We use a sample of 62, 226 US Census tracts from the year 2000 to illustrate
how alternative orderings impact computational time required for operations
such as the Cholesky and LU matrix decompositions. Table 4.1 shows the
time in seconds required to calculate permutations as well as Cholesky and
LU matrix decompositions for In − ρW . The approximate minimum degree
ordering resulted in the lowest ﬁll-in based on the percentage of non-zeros,
and the fastest computational time. In Chapter 3, we discussed computing
the log-determinant over a grid of values for the parameter ρ. From the
table, we can infer the time necessary to calculate 100 determinants for a
grid of ρ values and interpolating these to produce a ﬁner grid. This would
require less than one minute for the approximate minimum degree ordering.
In contrast, it was not feasible to calculate even a single (log) determinant for
our 62, 226 × 62, 226 matrix when the sample exhibited a random ordering,
since the calculation required more that 12 gigabytes of computer memory.


       TABLE 4.1:        Times in seconds for diﬀerent orderings
          Operation         Geographic Cuthill-McKee           Minimum
                              ordering        ordering      Degree ordering
          Permutation Time 0.058           0.058            0.061
          Cholesky Time     1.586          1.147            0.115
          LU Time           6.856          8.429            0.316
          % non-zeros in U  0.201          0.209            0.022




  By way of conclusion, software capable of producing these orderings of the
sample data is a requirement when computing log-determinants via LU or
Cholesky decompositions.


4.3.1         Scalings and similarity transformations
   The permutation transformation ZP = P (In − ρW )P  represents one type
of similarity transformation. Given a matrix A, the matrix A1 = CAC −1 is
similar to A, which means it will have the same eigenvalues, and therefore the
same determinant. Given a spatial transformation ZB = In − ρRB where B
is a symmetric binary weight or adjacency matrix and R is a diagonal matrix
containing the inverse of the row sums of B, RB is a non-symmetric, row-
stochastic weight matrix. In general, non-symmetric matrices have complex
eigenvalues. However, in this case RB has real eigenvalues that are the same



© 2009 by Taylor & Francis Group, LLC
88                                Introduction to Spatial Econometrics
                                                                         1     1
as the symmetric (but not row-stochastic) matrix R 2 BR 2 . Consider the
                               1      1
similarity transformation R− 2 ZB R 2 which produces the symmetric matrix
         1    1
In − ρR 2 BR 2 . From a statistical perspective, using the row-stochastic RB
may yield better results. However, from a numerical analysis perspective
                                              1    1
using the similar, but symmetric matrix R 2 BR 2 will usually perform better
(Ord, 1975). Therefore, the best strategy in many cases is to use the row-
stochastic W for calculations related to the statistical portion of the estimation
problem, but work with a similar symmetric matrix when calculating the log-
determinant. Given a table of determinants or the eigenvalues, similarity
transformations represent low-cost computational operations.
   Computation is often simpler when W has a maximum eigenvalue of 1,
which is the case for row-stochastic matrices or matrices that are similar to
row-stochastic matrices. Consider a candidate weight matrix of interest Wa
that does not have a maximum eigenvalue max(λa ) equal to 1. This can be
transformed using Wb = Wa max(λa )−1 to have a maximum eigenvalue of 1.
An implication is that any weight matrix W can be scaled to have a maximum
eigenvalue of 1. We note that this facilitates interpretation of the powers of
W , since these would also have a maximum eigenvalue of 1.
   Symmetric doubly stochastic weight matrices are those that have rows and
columns that sum to 1 and exhibit symmetry. This means the maximum
eigenvalue equals 1 and all eigenvalues are real. Transforming a matrix Wt to
doubly stochastic form involves an iterative process: 1) calculating the diago-
nal matrix of row sums Rt for the symmetric weight matrix Wt , 2) calculating
                −1          −1
Wt+1 = Rt 2 Wt Rt 2 , and, 3) repeating steps 1) and 2) until convergence. The
resulting doubly stochastic weight matrix is not similar to the initial weight
matrix Wt .

4.3.2         Determinant domain
  Which values of ρ lead to non-singular Z = In − ρW ? For symmetric matri-
ces, the compact open interval for ρ ∈ (λ−1      −1
                                          min , λmax ) will lead to a symmetric
positive deﬁnite Z. In the case of symmetric matrices similar to row-stochastic
matrices where λmax = 1, the interval for ρ becomes (λ−1  min , 1).
  The situation becomes more diﬃcult when W has complex eigenvalues.
Assume that W is scaled to be row-stochastic so that W ιn = ιn . If W is
not similar to a symmetric matrix, it may have complex eigenvalues. If a
real matrix has complex eigenvalues, these come in complex conjugate pairs
(Bernstein, 2005, p. 131). Let λ represent the n by 1 vector of eigenvalues of
W . The determinant of (In − ρW ) equals,

                                                  n            
                            
                            n                     
       |In − ρW | =               (1 − ρλi ) =         (1 − ρλi ) (1 − ρλ1 )(1 − ρλ2 )   (4.36)
                            i=1                  i=3

where, without loss of generality, one of the complex conjugate pairs of eigen-



© 2009 by Taylor & Francis Group, LLC
                            Log-determinants and Spatial Weights               89

values appears in λ1 and the other in λ2 . If the product (1 − ρλ1 )(1 − ρλ2 )
equals 0, this would lead to a zero determinant which would imply singular
(In − ρW ) and a singular variance-covariance matrix.
  What value of ρ could lead to a singular (In −ρW )? To focus on the complex
conjugate nature of λ1 and λ2 , we express these as λ1 = r +jc and λ2 = r −jc,
where r is the real part of λ1 , λ2 , jc is the complex part of λ1 , λ2 , and j is
the square root of −1, so that j 2 = −1. We assume c = 0, since a value of 0
would lead to a real number representation. Equations (4.37)–(4.40) form the
complex quadratic equation given complex conjugate pairs of the eigenvalues
and set the complex quadratic equation to 0 to ﬁnd values of ρ associated
with a singularity.


                                   0 = (1 − ρλ1 )(1 − ρλ2 )                (4.37)
                                   0 = (1 − ρr − ρjc)(1 − ρr + ρjc)        (4.38)
                                   0 = 1 − 2ρr + ρ2 r2 − j 2 ρ2 c2         (4.39)
                                   0 = 1 − 2ρr + ρ2 (r2 + c2 )             (4.40)
Rewriting (4.40) using the discriminant d = b2 − 4ac from the quadratic
formula ax2 + bx + c = 0 we ﬁnd that d < 0.


                                         d = 4 r 2 − r 2 − c2              (4.41)
                                                   2
                                         d = −4c                           (4.42)
Since c2 is always positive (we ruled out c = 0 by assumption), the discrim-
inant d is negative so the quadratic equation will yield two complex roots.
This means that a real ρ can never result in a product of the function of two
complex conjugate eigenvalues equaling 0. In other words, complex conju-
gate eigenvalues do not aﬀect whether In − ρW is singular. Only purely real
eigenvalues can aﬀect the singularity of In − ρW .
   Consequently, for W with complex eigenvalues, the interval of ρ which guar-
antees non-singular In − ρW is (rs−1 , 1) where rs equals the most negative
purely real eigenvalue of W . Fortunately, sparse eigenvalue routines such as
“eigs” in Matlab can be used to rapidly ﬁnd the eigenvalue with the smallest
real part.


4.3.3         Special cases
  In the following sections, we discuss issues related to calculating log deter-
minants for special cases that arise in applied practice.

4.3.3.1         Naturally triangular systems
  In some cases, such as with temporal or spatiotemporal data where a uni-
directional order such as time implies that no observation depends upon a



© 2009 by Taylor & Francis Group, LLC
90                                 Introduction to Spatial Econometrics

future observation, we can arrange observations so W is triangular with zeros
on the main diagonal. In this case, In − ρW has a determinant of 1 and a
log-determinant of 0. For example, Pace et al. (2000) exploit this type of
situation to estimate a spatiotemporal model involving real estate data.

4.3.3.2         Regular locational grid

  Data from remote sensing appears either locally or globally on a regular
locational grid. For example, a satellite may record the value of a variable
every three square meters, collecting this information over a wide area. Use of
regular locational grids is also popular in theoretical and Monte Carlo work.
Typically, the plot of non-zeros of In − ρW in this case has a band structure
as shown in Figure 4.4, where interior points in the grid depend on 20 other
observations.



                           0

                           5

                          10

                          15

                          20
                   rows




                          25

                          30

                          35

                          40

                          45

                          50
                               0        10       20             30   40   50
                                                      columns


FIGURE 4.4: Plot of non-zeros of In − 0.8W based on a regular locational
grid


     Given the large number of observations produced by remote sensing, calcu-



© 2009 by Taylor & Francis Group, LLC
                                 Log-determinants and Spatial Weights              91

lating the log-determinant would seem diﬃcult, but regular locational grids
prove advantageous in Gaussian elimination. Figure 4.5 shows the ﬁrst 100
pivots from Gaussian elimination applied to a regular locational grid of 25, 000
observations, where each interior observation has 20 neighbors. The ﬁgure
shows pivots that reach an asymptotic value after about 30 observations, tak-
ing the same value for all remaining observations. This allows us to compute
pivots for the ﬁrst 100 observations and extrapolate these for remaining ob-
servations, leading to the same answer that would be obtained by calculating
all the pivots. Despite the large number of observations, regular locational
systems usually require only simple calculations to ﬁnd the log-determinant.




                   1
               0.995
                0.99
               0.985
                0.98
      Pivoti




               0.975
                0.97
               0.965
                0.96
               0.955
                0.95
                       0    10       20    30    40    50    60    70   80   90   100
                                                        i



FIGURE 4.5: Plot of pivots of In − 0.8W based on a regular locational
grid



4.3.3.3                Closest neighbors
   Pace and Zou (2000) examined the case of spatial dependence based on
only a single closest neighbor. Let B represent the spatial weight matrix
where Bij = 1 when observation j is the closest neighbor to observation i.
These relations are not necessarily symmetric. For example, if i is on the edge
of town while j is located in a subdivision, j may be the closest neighbor to
i, but i may not be the closest neighbor to j. Given irregular point data only
some observations will be closest neighbors to each other. In fact, for spatially
random data on a square, 3π(8π + 331/2 )−1 proportion of the data (roughly
31 percent) are closest neighbors (Epstein et al., 1997, p. 6).
   Pace and Zou (2000) show that the log-determinant, ln |In − ρB| equals
ns ln(1 − ρ2 ), where ns equals the number of symmetric pairs of elements in



© 2009 by Taylor & Francis Group, LLC
92                                Introduction to Spatial Econometrics

the binary weight matrix B. The number of symmetric pairs equals 0.5 tr(B 2 ),
and for random data distributed on a square, E(ns ) = 3nπ(8π + 331/2 )−1 .

4.3.3.4         Matrix exponential
   LeSage and Pace (2007) explored the matrix exponential speciﬁcation Z =
eαW . Conveniently, ln |eαW | = ln(eα tr(W ) ), and since tr(W ) = 0 for typical
matrices W that have zeros on the diagonal, the determinant for this model
is quite simple. The matrix exponential spatial speciﬁcation often produces
empirical estimates and inferences that are similar to models based on Z =
In − ρW , but has computational advantages due to the simple determinant.
Chapter 9 discusses the beneﬁts of matrix exponential models in detail.

4.3.3.5         Fractional transformations
   The log-determinant of (In − ρW )δ is δ ln |In − ρW | and this is real provided
|In −ρW | > 0. Chapter 9 discusses this idea in the context of spatial fractional
diﬀerencing models.

4.3.3.6         Polynomial
  Often a desire exists to work with AR(p) or MA(q) processes that use
matrices R(ρ), A(φ). The vectors ρ and φ are p × 1 and q × 1 real parameter
vectors with the integers p, q > 1.

                                    R(ρ) = In − ρ1 W − · · · − ρp W p      (4.43)
                                    A(φ) = In + φ1 W + · · · + φq W   q
                                                                           (4.44)
If we attempt to ﬁnd ln |R(ρ)| or ln |A(φ)| directly using expressions (4.43)
or (4.44), this may become diﬃcult. This occurs because W j in (4.43) and
(4.44) becomes progressively less sparse as j rises.
   One can factor polynomials such as R(ρ) and A(φ) that have real coeﬃcients
into a product of linear and quadratic polynomials with real coeﬃcients. The
quadratic polynomials can be factored into two linear polynomials with two
roots. The two roots must both be real or a complex conjugate pair. That is,
a polynomial can be factored into a product of linear polynomials with real
roots, or complex conjugate roots. The roots for R(ρ) appear as the p × 1
vector λ(ρ) and the roots for A(φ) appear as the q × 1 vector λ(φ). Some of
these roots may have identical values.

                            R(ρ) = (In + λ(ρ)1 W ) · · · (In + λ(ρ)p W )   (4.45)
                            A(φ) = (In + λ(φ)1 W ) · · · (In + λ(φ)q W )   (4.46)
Computationally, the factoring process has nothing to do with W . The same
process works for a scalar variable such as x. Speciﬁcally, given the coeﬃ-
cients of (4.43) or (4.44), one can form equivalent equations (have the same



© 2009 by Taylor & Francis Group, LLC
                            Log-determinants and Spatial Weights                    93

factorization terms of the powers of x (use x in place of W in (4.43) or (4.44)).
The equivalent equations are polynomials and the roots of the polynomials
yield λ(ρ)i or λ(φ)j where i = 1, . . . , p, j = 1, . . . , q.
  Given λ(ρ)i or λ(φ)j , the overall log-determinants are the sum of the com-
ponent log-determinants.


                   ln |R(ρ)| = ln |In + λ(ρ)1 W | + · · · + ln |In + λ(ρ)p W |   (4.47)
                   ln |A(φ)| = ln |In + λ(φ)1 W | + · · · + ln |In + λ(φ)q W |   (4.48)

  As a simple example, consider the spatial error components (Kelejian and
Robinson, 1995) speciﬁcation with symmetric W ,


                                        Ω(θ) = In + θW 2                         (4.49)

where θ is a scalar parameter. One can factor the spatial error component
speciﬁcation and ﬁnd the log-determinants of each part.


                         Ω(θ) = (In + (−θ)0.5 W )(In − (−θ)0.5 W )               (4.50)
                     ln |Ω(θ)| = ln |In + (−θ)0.5 W | + ln |In − (−θ)0.5 W |     (4.51)

If θ > 0, (−θ)0.5 is complex. However, logarithms and determinants are de-
ﬁned for complex arguments and this poses no problem. Consider the example
in (4.52)–(4.59) where the sum of the individual log-determinants of the com-
plex factors equal the log-determinant of Ω = ln |I3 + 0.5W 2|. In the example,
G1 and G2 are the result of applying Gaussian elimination to A1 and A2 . As
demonstrated below, Gaussian elimination works for complex numbers.

                              ⎡     ⎤
                           0 0.5 0.5
                     W = ⎣0.5 0 0.5⎦                                             (4.52)
                          0.5 0.5 0
                     Ω = I3 + 0.5W 2                                             (4.53)
                     Ω = A1 A2 = (I3 − (0.707i)W )(I3 + (0.707i)W )              (4.54)
                         ⎡                                   ⎤
                           1.0000 0 − 0.3536i 0 − 0.3536i
                    G1 = ⎣ 0        1.1250 0.1250 − 0.3536i⎦                     (4.55)
                              0        0     1.2222 + 0.0786i
                         ⎡                                   ⎤
                           1.0000 0 + 0.3536i 0 + 0.3536i
                    G2 = ⎣ 0        1.1250 0.1250 + 0.3536i⎦                     (4.56)
                              0        0     1.2222 − 0.0786i
              ln |G1 | = 0 + 0.1178 + 0.2027 + 0.0642i = 0.3205 + 0.0642i        (4.57)
              ln |G2 | = 0 + 0.1178 + 0.2027 − 0.0642i = 0.3205 − 0.0642i        (4.58)
                ln |Ω| = ln |G1 | + ln |G2 | = 0.6410                            (4.59)



© 2009 by Taylor & Francis Group, LLC
94                                Introduction to Spatial Econometrics

   To summarize, the coeﬃcients of the AR or MA in (4.43) or (4.44) can
be factored into products of simple linear factors as in (4.45) or (4.46). The
factorization process works with the simpler scalar polynomial and requires
almost no time to compute. These factors take the form In + λW where λ
may be real or complex.
   One can still form a table of log-determinants and interpolate over this to
accelerate calculations. However, now the table relating log-determinants to
arguments is three-dimensional. Speciﬁcally, the table contains a real part
argument, complex part argument, and the log-determinant. Using this tech-
nique we can rely on a single table to store all log-determinants for diﬀerent
factors in the polynomial. Consequently, the log-determinant of polynomial
functions of weight matrices has almost the same computational cost as the
log-determinant of the linear function In − ρW .
   We discussed SARMA models in Chapter 3 and we will discuss ﬁtting mul-
tiple weight matrices in Chapter 5. The determinant table approach presented
above could allow higher-order SARMA models to be ﬁtted with large data
sets. This approach could be used in conjunction with MCMC to deal with
potential local optima that can arise in these models.

4.3.3.7         Kronecker products
  Spatial simultaneous equations, spatial vector autoregressions, and origin-
destination ﬂow data may require ﬁnding ln |Inm −Anm | where Anm = (Λ⊗W )
and Λ is a m × m matrix. Fortunately, the structure of Kronecker products
greatly facilitates calculation of the log-determinant. Using the Taylor series
expansion of the log-determinant produces (4.60) and (4.61).

                                                     ∞
                                                         tr(Ainm )
                               ln |Inm − Anm | = −                          (4.60)
                                                     i=1
                                                             i
                                                     ∞
                                                         tr(Λi ) tr(W i )
                               ln |Inm − Anm | = −                          (4.61)
                                                     i=1
                                                                 i

  The use of a trace estimator discussed in Section 4.4.1.2 enables eﬃcient
calculation of traces for the powers of W . In the typical case where m is
substantially less than n, exact computation of tr(Λi ) requires little time.
Therefore, what appears to be an nm × nm problem reduces to separate n × n
and m × m problems.
  A related point is that eigenvalues of Anm equal the nm cross-products
between the eigenvalues of W and Λ, which facilitate calculating the log-
determinant. The computational demands of calculating eigenvalues limits
this technique to problems involving small or moderate n.
  Models used for origin-destination ﬂow data discussed in Chapter 8 provide
another example where the log-determinant involves Kronecker products of



© 2009 by Taylor & Francis Group, LLC
                            Log-determinants and Spatial Weights             95

matrices. LeSage and Pace (2008) consider a model involving spatial depen-
dence among N = n2 ﬂows, resulting in the log-determinant expression in
(4.62).


                    B = IN − ρ1 (In ⊗ W ) − ρ2 (W ⊗ In ) − ρ3 (W ⊗ W )   (4.62)
                    B = IN − A                                           (4.63)

   They proceed by ﬁnding tr(Aj ) where A appears in (4.63). While ﬁnding
the trace of a n2 × n2 matrix seems diﬃcult, in reality the log-determinant
of B simply involves weighted traces of the powers of W . To see this, con-
sider that any power of A greater than 1 will result in products and cross-
products involving the components of A. The cross-product (In ⊗ W ) and
(W ⊗ W ) can be expressed as (W ⊗ W 2 ) using the Kronecker mixed product
rule. This expression has a trace of tr(W ) tr(W 2 ) = 0, since tr(W ) = 0, and
this is a scalar. Because each product and cross-product has a form involving
traces of powers of W , a pre-computed table of these traces facilitates re-
weighting these to arrive at an approximation of the overall log-determinant.
For any combination of ρ1 , ρ2 , and ρ3 , the products and cross-products are
also scalars, and these represent coeﬃcients associated with the traces. Multi-
plying the pre-computed traces by these coeﬃcients yields an estimate of the
log-determinant. Chapter 8 discusses spatial modeling of ﬂow data in detail.

4.3.3.8         Multiple and parameterized W
   We have already discussed models where Z = In −ρ1 W1 −ρ2 W2 , and W1 and
W2 are not functionally related (Lacombe, 2004). More complicated models
can be constructed that rely on functions of functionally unrelated multiple
weight matrices. If both W1 and W2 are row-stochastic matrices, ρ1 + ρ2 < 1,
and ρ1 , ρ2 ≥ 0, Z is strictly diagonally dominant and thus non-singular. The
log-determinant as a function of these parameters is smooth when ρ1 + ρ2 < 1
and ρ1 , ρ2 ≥ 0, since the ﬁrst and second derivatives are continuous. This
allows tabulation and interpolation of the log-determinants to produce a ﬁner
grid over values of ρ1 , ρ2 . However, in this case of two log-determinants, the
table now has two arguments (ρ1 and ρ2 ) which will require more time to
compute as well as more storage space. A natural extension of this applies
to three or more weight matrices. However, the logistical, computational and
storage diﬃculties increase with additional weight matrices and parameters.
   In many cases, the individual weight matrices exhibit some natural order
or smoothness conditions. For example, consider Z = In − ρ1 W1 − ρ2 W2 −
ρ3 W3 , where W1 , W2 , W3 represent ﬁrst-, second- and third-nearest neighbor
matrices. In this case, one might impose a monotonic restriction on ρ1 , ρ2 ,
and ρ3 , using the restriction: ρi = ργ i (γ + γ 2 + γ 3 )−1 . This converts a
multiple parameter problem to a simpler two parameter problem involving
only ρ and γ, which can easily be tabulated. Possible functions that could



© 2009 by Taylor & Francis Group, LLC
96                                Introduction to Spatial Econometrics

serve as smoothing restrictions include polynomials (in the spirit of Almon
distributed lags), geometric decay, exponential decay, and so on.

4.3.3.9         Local W

   Suppose we wish to examine a more local system. For example, given a clus-
ter of homes at the city center we begin adding observations on progressively
more distant homes. How do these new observations aﬀect the dependence
as measured by the log-determinant? Suppose Z = I3 − 0.8W where W is
the same as in (4.52). In numerical terms, Z appears in (4.65) and Gaussian
elimination of Z, labeled G, appears in (4.66).



                                  Z = I3 − 0.8W                          (4.64)
                                      ⎡                           ⎤
                                          1.0000 −0.4000 −0.4000
                                  Z = ⎣−0.4000 1.0000 −0.4000⎦           (4.65)
                                        −0.4000 −0.4000 1.0000
                                      ⎡                         ⎤
                                        1.0000 −0.4000 −0.4000
                                  G=⎣ 0          0.8400 −0.5600⎦         (4.66)
                                           0       0     0.4667


   The determinant of Z11 is 1 and this matches the ﬁrst pivot of G. The
determinant of the ﬁrst two rows and columns of Z is 1 − (−0.4)2 = 0.84,
and this matches the product of the ﬁrst and second pivots of G. Finally,
using the formula for the determinant of Z yields a value of 0.3920, and this
matches the product of all three pivots of G. Consequently, a bonus arising
from Gaussian elimination is the sequence of log-determinants that result from
adding additional observations to the system. Pace and LeSage (2003a) use
this feature of log-determinants to estimate a sequence of SDM local estimates
around each observation in the sample.




4.4        Monte Carlo approximation of the log-determinant
   The log-determinant equals the trace of the matrix logarithm as shown in
(4.67). In turn the matrix logarithm has a simple inﬁnite series expansion in
terms of the powers of W as shown in (4.68). Since the trace operation is
linear (tr(A + B) = tr(A) + tr(B)), the log-determinant is a weighted series
of traces of the powers of W as shown in (4.69).



© 2009 by Taylor & Francis Group, LLC
                            Log-determinants and Spatial Weights                         97




                                    ln |In − ρW | = tr (ln(In − ρW ))                 (4.67)
                                                            ∞    i   i
                                                                ρW
                                    ln(In − ρW ) = −                                  (4.68)
                                                            i=1
                                                                 i
                                                            ∞
                                                                ρi tr(W i )
                                    ln |In − ρW | = −                                 (4.69)
                                                            i=1
                                                                     i


Since the logarithm is deﬁned over the complex plane (except for ln(0)), (4.69)
still holds for non-symmetric W that may have complex eigenvalues or for
complex ρ.
  One can partition the inﬁnite series into a ﬁnite, lower order series and a
remainder denoted by R composed of higher-order inﬁnite expressions such as
(4.70) and (4.71). Martin (1993) initially proposed this approach to dealing
with the log-determinant.


                                                 o                       ∞
                                                    ρi tr(W i )         ρi tr(W i )
                      ln |In − ρW | = −                         −                     (4.70)
                                                i=1
                                                         i        i=o+1
                                                                             i
                                                 o
                                                    ρi tr(W i )
                      ln |In − ρW | = −                         −R                    (4.71)
                                                i=1
                                                         i


  If R is small, one can approximate the log-determinant through a ﬁnite,
lower-order series as in (4.72).


                                                             o
                                                                ρi tr(W i )
                                        ln |In − ρW | ≈ −                             (4.72)
                                                            i=1
                                                                     i


   From a computational perspective, forming W j and then taking the trace
is costly and ineﬃcient having an operational count of up to O(n3 ) when W j
is dense.
   Fortunately, other methods exist for estimating traces. For example, let u
represent a 2 × 1 vector of independent unit normals and A a 2 × 2 matrix as
in (4.73) and (4.74). The expectation of the quadratic form u Au equals tr(A)
since u2i follows a χ2 distribution with one degree of freedom. Of course, this
has an expectation equal to 1, whereas E(ui uj ) = 0 for i = j as in (4.75) to
(4.78).



© 2009 by Taylor & Francis Group, LLC
98                                 Introduction to Spatial Econometrics


                                                  
                                            ab      u
                                   A=          , u= 1                                      (4.73)
                                            cd      u2
                              u Au = u21 a + u22 d + u1 u2 (b + c)                        (4.74)
                        E(u Au) = E(u21 )a + E(u22 )d + E(u1 u2 )(b + c)
                               
                                                                                           (4.75)
                          E(u2i ) = 1                                                      (4.76)
                        E(ui uj ) = 0 i = j                                               (4.77)
                        E(u Au) = a + d = tr(A)                                           (4.78)
            (i)
  Let T(j) represent the estimate of tr(W i ) using the jth n by 1 random unit
normal vector u(j) as shown in (4.79). For convenience, we will term u(j) the
jth seed, and Girard (1989) proposed normal seeds in estimating traces.2

                                                (i)
                                              T(j) = u(j) W i u(j)                        (4.79)
                                                                           (i)
  Given the estimated tr(W i ) which equals T(j) , one could use this to form
an estimate of the log-determinant based on the estimated trace.3

                                                                                     (i)
                                                                      o     ρi T(j)
                                        ln |In − ρW |(j) ≈ −                               (4.80)
                                                                     i=1
                                                                                 i

   Calculating ln |In − ρW |(j) across m independent u(j) and averaging the
results can improve the accuracy of the log-determinant estimate. Each of
the ln |In − ρW |(j) are independent, so the variance of the averaged estimate
is 1/m times the variance of a single estimate ln |In − ρW |(j) .

                                                              m
                                                          1
                             ln |In − ρW | ≈                         ln |In − ρW |(j)      (4.81)
                                                          m    j=1

  Also, calculating m log-determinant estimates ln |In − ρW |(j) allows esti-
mating the variance of the log-determinant, and therefore conﬁdence intervals
associated with the averaged log-determinant estimate.
  From a computational perspective, the algorithm begins by picking the seed
u(j) , initializing the loop by setting z(1) to u(j) , and by calculating a matrix-
                                                                          (i)
vector product z(t + 1) = W z(t) as well as T(j) = z(1) z(t + 1) over a loop

2 Barry and Pace (1999) rediscovered the normal seed without the beneﬁt of the work of

Girard (1989) and gave diﬀerent proofs of the performance of normal seeds in estimating
the trace.
                                      !(j) = [n(u u(j) )−1 ]T(j) . This has slightly lower
3 Barry and Pace (1999) actually used T
                                                 (j)
variability than T(j) , but T(j) has the advantage of simplicity.




© 2009 by Taylor & Francis Group, LLC
                            Log-determinants and Spatial Weights                99

from t = 1, . . . , o. This can be repeated m times to improve the precision of
the trace estimates and thus the log-determinant estimates by averaging over
  (i)                                                               (i)
T(j) for j = 1, . . . , m to yield T (i) . In addition, having the T(j) allows easy
calculation of conﬁdence intervals for the estimated log-determinant. The
algorithm has computational complexity O(nmo) and therefore is linear in n.
   Given the estimated T (i) , an outstanding advantage of the algorithm is that
computation of ln |In −ρW | for any ρ requires almost no time. Let a represent
                                                                            
an o × 1 vector so that ai = −T (i) /i and let b = ρ, ρ2 , . . . , ρo . The
                                                           
log-determinant estimate for a particular ρ is just a b, a simple dot product
between two vectors of length o where o might be 100. Therefore, updating
the estimate of the log-determinant for a new value of ρ is virtually costless.
   A few reﬁnements boost the computational speed and accuracy. First, one
can employ symmetry to reduce the work by half. For symmetric W , let
v = W i u and therefore v  v = u W 2i u which estimates the trace of (W 2i ).
Second, the lower-order exact moments are either known or easily computed,
and using these can materially reduce the approximation error. For example,
tr(W ) = 0 by construction whereas tr(W p+q ) = ιn ((W p ) W q )ιn . Therefore,
tr(W 2 ) for a symmetric matrix is the sum of squares of all the elements in
W . It does not take long to compute these exact traces. For example, using
a contiguity-based W where n = 1, 024, 000, it takes 0.43 seconds to compute
W 2 and 6.3 seconds to ﬁnd tr(W 4 ). The computational requirements of the
exact traces in general rise at a faster than linear rate, but computing the
lower order exact traces is quite feasible for sparse W . Third, one can improve
the choice of seeds u(j) by rejecting “bad” seeds where “bad” in this context
means that the estimated moments diﬀer signiﬁcantly from the known lower
order exact moments (Zhang et al., 2008).
   This raises the issue of seed choice. Alternatives to the normal seed pro-
posed by Girard (1989) include using n independent draws of −1 and 1 with
equal probability as a seed (Hutchinson, 1990). Also, a seed where the kth
element of u(j) equals 1 and the other elements equal 0 will yield the diagonal
               i
element of Wkk     . Selecting k randomly over [1, n] for m samples and averaging
these samples yields an estimate of n−1 tr(W i ). For all of these approaches,
the use of m independent realizations naturally facilitates parallel processing.
All seed choices work well for moderate m, but we have found that the normal
seed performs better for very small m (including m = 1).
   Ideally, approximations should provide a means to assess accuracy which
might be measured in terms of the impact on variables of interest in applied
problems. One approach to this is to consider how independent estimates
of the log-determinant aﬀect the estimated parameter ρ in the autoregres-
sive model. We take this approach in Section 4.4.1. Since one can rapidly
solve for the spatial dependence parameter estimate given the log-determinant
function, we could use m independent estimates of the log-determinant. This
would lead to m estimates for ρ, and variation in these estimates would serve
as a guide to the approximation accuracy. If the variation is small relative to



© 2009 by Taylor & Francis Group, LLC
100                                Introduction to Spatial Econometrics

the standard error of the parameter estimate, this indicates that the approx-
imation error does not materially degrade parameter estimation.


4.4.1         Sensitivity of ρ estimates to approximation
   Useful approximations contain errors that do not materially aﬀect the re-
sults. In Section 4.4.1.1, we explore the dispersion in the estimated value
of ρ that arises from a log-determinant approximation using a Monte Carlo
experiment. We show that the approximation is very accurate in that it does
not materially aﬀect the estimate or inference regarding the parameter ρ.
Section 4.4.1.2 and Section 4.4.1.3 provide detailed Monte Carlo experiments
that explore the nature of the approximation error that leads to accuracy of
the Monte Carlo log-determinant approximation of Barry and Pace (1999) in
applied practice.

4.4.1.1         Error in ρ̃ using individual MC log-determinant estimates
   To assess the accuracy of the Monte Carlo log-determinant estimator, we
conducted an experiment with sample sizes n ranging from 1, 000 to 1, 024, 000.
For each sample size we generated a random set of points, calculated a con-
tiguity weight matrix Wn , and simulated the dependent variable using yn =
(In − 0.75Wn )−1 (Xβ + ε). The matrix X contained an intercept as well as
a vector of standard normal random deviates, and β was set to ι2 . An iid
normal vector was used for ε with a standard deviation of 0.25. For each yn
we calculated 100 separate estimated log-determinants using the Barry and
Pace (1999) Monte Carlo approximation.
   These estimated log-determinants did not involve averaging across multiple
estimated log-determinants as is typically done in application of the Barry
and Pace (1999) approach. The reported results were based on a single nor-
mal vector (normal seed) used in the Monte Carlo log-determinant estimator.
Using a single vector to estimate the log-determinant is seemingly quite ex-
treme, since Barry and Pace (1999) recommend use of 30 to 50 such vectors
in their statistical approximation. To gauge performance of the individual
log-determinant estimates, we also averaged over all 100 log-determinant es-
timates to produce a more accurate estimate.
   Table 4.2 shows the results from using an average of all log-determinant es-
timates versus 100 separate estimates of the log-determinant where each esti-
mate corresponds to a diﬀerent normal seed. The estimated log-determinants
used four exact lowest-order moments and 100 total moments.
   Rather surprisingly, the estimated ρ̃ was not sensitive to numerical approx-
imation error present in the individual MC log-determinant estimates. Across
100 trials of the individual MC log-determinant estimates, the estimated de-
pendence parameter varied over a very small range that declined with n. The
average estimated dependence parameter was very close to the actual value
of 0.75. For example, when n = 1, 024, 000, the average estimated ρ across



© 2009 by Taylor & Francis Group, LLC
                           Log-determinants and Spatial Weights               101

the 100 separate log-determinants was 0.749404, and the range between the
largest and smallest estimate was only 0.000052. Using an average of the 100
log-determinants produces the same estimate for ρ to six decimal places. It
took only 23.7 seconds, on average, to estimate the log-determinant of the
1, 024, 000 × 1, 024, 000 matrix.


    TABLE 4.2:         Estimates of ρ based on aggregate vs. individual MC
    log-determinant estimates
              n    ρ̃ln|z|   mean ρ̃ln|z|i range ρ̃ln|z|i Seconds per ln-det
                                        i

            1, 000         0.762549         0.762550   0.002119    0.005281
            2, 000         0.752098         0.752099   0.001359    0.007593
            4, 000         0.751474         0.751475   0.000873    0.013504
            8, 000         0.752152         0.752152   0.000748    0.032123
           16, 000         0.747034         0.747034   0.000485    0.070086
           32, 000         0.748673         0.748673   0.000339    0.197200
           64, 000         0.750238         0.750238   0.000224    0.453033
          128, 000         0.750622         0.750622   0.000147    1.153523
          256, 000         0.749766         0.749766   0.000122    3.917425
          512, 000         0.750144         0.750144   0.000068   10.498189
       1, 024, 000         0.749404         0.749404   0.000052   23.710256




4.4.1.2         Trace estimation accuracy

   The accuracy of the Monte Carlo estimates for the log-determinant raise
the question of why it works so well. Either the procedure estimates traces ex-
tremely well, the shape of the log-likelihood is not sensitive to small variations
in the log-determinant, or some combination of both factors is at work. In
this section, we investigate the accuracy of the trace estimates with an exper-
iment. We estimate n−1 tr(W 2 ) which we denote t̃r using a contiguity weight
matrix and compare these estimates to the exact trace tr = n−1 tr(W 2 ). Ta-
ble 4.3 shows the results from this experiment for varying n. As expected, the
Monte Carlo estimate of the trace appears more or less unbiased having small
average errors that vary in sign across n. In addition, the standard deviation
and ranges of the estimated traces are small. For sample sizes of 16, 000 and
above, we see a diﬀerence of less than 0.01 between the largest and smallest
estimated traces across the 100 trials. Again, these results are for single tri-
als or iterations. Aggregating the diﬀerent trials or iterations would further
improve the performance.
   These results conform to the theoretical investigations of Girard (1989, p.
                                                           (i)
5) as well as Barry and Pace (1999, p. 52) where σ 2 (T(j) ) = κn−1 and κ is a
constant.



© 2009 by Taylor & Francis Group, LLC
102                                Introduction to Spatial Econometrics

            TABLE 4.3:                   Individual MC trace estimates of n−1 tr(W 2 )
            across n
                                 n         tr        average t̃r − tr      s.d. t̃r    range t̃r
                        1, 000          0.166809     −0.000017           0.009841      0.046782
                        2, 000          0.165991      0.000311           0.006742      0.034160
                        4, 000          0.165782     −0.000296           0.004303      0.023378
                        8, 000          0.165640     −0.000213           0.003138      0.018299
                       16, 000          0.165505      0.000078           0.001957      0.009831
                       32, 000          0.165420      0.000278           0.001690      0.009949
                       64, 000          0.165391      0.000083           0.001050      0.005029
                      128, 000          0.165395      0.000093           0.000799      0.003943
                      256, 000          0.165377      0.000011           0.000634      0.003241
                      512, 000          0.165359     −0.000023           0.000393      0.001820
                   1, 024, 000          0.165353     −0.000032           0.000277      0.001319




4.4.1.3         Theoretical analysis of sensitivity of ρ̃ to log-determinant
                error
   The autoregressive model: y = Xβ + ρW y + ε has a concentrated or proﬁle
likelihood (Lp (ρ)) which involves a scalar spatial dependence parameter ρ, as
shown in (4.82).

                                                                 n
                           Lp (ρ) = C + ln |In − ρW | −            ln(e(ρ) e(ρ))              (4.82)
                                                                 2
Recall the Taylor series expansion of the log-determinant shown in (4.83).

                                                          ∞
                                     ln |In − ρW | = −         ρj tr(W j )/j                   (4.83)
                                                         j=1


Substituting (4.83) into (4.82) leads to (4.84) which emphasizes the role of
tr(W j ) in the proﬁle likelihood.

                                            ∞
                                                                    n
                        Lp (ρ) = C −              ρj tr(W j )/j −     ln(e(ρ) e(ρ))           (4.84)
                                            j=1
                                                                    2

    To examine the sensitivity of the system to an approximation error, we
introduce a scalar parameter δj to model proportional error in estimation of
tr(W j ), the jth moment. This proportional error could be positive or neg-
ative. Consider a new approximate proﬁle likelihood Lp (ρ|δj ) for a given
δj . Substitution of (4.84) in the ﬁrst equation, along with the notation
G(ρ) = −ρj tr(W j )/j allows rewriting Lp (ρ|δj ) in (4.86) as the original proﬁle
likelihood plus an approximation error.



© 2009 by Taylor & Francis Group, LLC
                           Log-determinants and Spatial Weights                                   103


                                                        ∞
                                                                               n
         Lp (ρ|δj ) = C − δj ρj tr(W j )/j −                 ρj tr(W j )/j −     ln(e(ρ) e(ρ))
                                                       j=1
                                                                               2
         Lp (ρ|δj ) = −δj ρ tr(W )/j + Lp (ρ)
                                   j       j
                                                                                              (4.85)
         Lp (ρ|δj ) = δj G(ρ) + Lp (ρ)                                                        (4.86)

We form the score function, Sp (ρ|δj ) for a given δj .

                                           dLp (ρ|δj )      dG(ρ) dLp (ρ)
                           Sp (ρ|δj ) =                = δj      +                            (4.87)
                                              dρ             dρ     dρ
The score function set to 0 is the ﬁrst-order condition for an optimum and
this forms an implicit function F .

                                               F = Sp (ρ|δj ) = 0                             (4.88)
Given unimodality of the proﬁle likelihood for this problem, a unique value
of ρ solves the implicit equation F = 0, but the solution depends upon the
error δj . We can examine the sensitivity of the dependence parameter ρ with
respect to the error δj using the implicit function theorem for two variables
(which allows for total instead of partial derivatives) as shown in (4.89).
                                               dρ     dF dF
                                                   =−    /                                    (4.89)
                                               dδj    dδj dρ
Taking the derivative of F with respect to δj yields (4.90).
                                dF    dG(ρ)
                                    =                                                         (4.90)
                                dδj     dρ
The derivative of F with respect to ρ yields (4.91).

                                        dF      d2 G(ρ) d2 Lp (ρ)
                                           = δj        +                                      (4.91)
                                        dρ        dρ2      dρ2
Using (4.89), (4.90), and (4.91) yields (4.92).
                                     2                  −1
                             dρ         d G(ρ) d2 Lp (ρ)     dG(ρ)
                                 = − δj       +                                               (4.92)
                             dδj          dρ2     dρ2         dρ
   We now consider simplifying this expression, noting that the second deriva-
tive of Lp (ρ) with respect to ρ is the Hessian H(ρ) (Davidson and MacKinnon,
1993, p. 267-269).

                                        d2 Lp (ρ)   dSp (ρ)
                                                  =         = H(ρ)                            (4.93)
                                           dρ2        dρ
Given an estimated ρ̃, the estimated variance of ρ̃ is σ̃ 2 (ρ̃). Equation (4.94)
expresses the well-known relation between the Hessian and the variance of



© 2009 by Taylor & Francis Group, LLC
104                                Introduction to Spatial Econometrics

a parameter estimate for a univariate function such as our concentrated log
likelihood.

                                             σ̃ 2 (ρ̃) = −H(ρ̃)−1            (4.94)
Using (4.94) provides an additional simpliﬁcation.

                                        d2 Lp (ρ̃)
                                                   = H(ρ̃) = −σ̃ −2 (ρ̃)     (4.95)
                                           dρ̃2
Taking (4.95) and (4.92) in conjunction with dG(ρ)/dρ = −ρj−1 tr(W j ), eval-
uated around the point of δj = 0, leads to (4.96).
                            "
                       dρ̃ ""
                            "    = −σ̃ 2 (ρ̃)ρj−1 tr(W j )            (4.96)
                      dδj "
                                          (δj =0)

The fact that dρ̃/dδj < 0 for positive ρ makes intuitive sense. Positive δj
results in a more severe log-determinant penalty, and this should depress ρ̃.
Turning to the relative magnitudes of these variables, the estimated variance
(σ̃ 2 (ρ̃)) of ρ̃ decreases with n, while tr(W j ) rises with n. This suggests the
product of these two variables should not greatly vary with n.
    Putting this in diﬀerential form in (4.97), we note that from the starting
point of δj = 0, dδj equals the proportional error in the jth moment, which
                                                                 (1)      (0)
could be negative or positive. In other words, going to δj from δj = 0
                                                                       (1)
means that dδj , the change in the variable, equals δj .

                                                            dρ̃
                                                    dρ̃ =       δj           (4.97)
                                                            dδj
   However, as was demonstrated, δj , the proportional error in the jth moment
tends to decrease with n, so the overall numerical error associated with ρ̃ tends
to decrease with n.
   To examine the relative magnitudes of these terms in applied practice, we
performed a simple Monte Carlo experiment. A set of 2, 500 random points
were generated and a contiguity weight matrix W was used to simulate: y =
(In −0.75W )−1 (Xβ+ε), where X contains an intercept column plus a standard
normal vector. The parameter β was set equal to ι2 , and an iid normal ε
having a standard deviation of 0.25 was used. Exact traces for orders 1 to
100 were calculated using a set of 1, 000 instances of y, with the exception of
tr(W 6 ). For this single exception, we added a proportional error equal to 0.01,
and calculated the theoretical as well as empirical change in ρ̃ in response to
a one percent error in tr(W 6 ).
   On average, the empirical change was −0.629453 · 10−5 while the predicted
change was −0.630461·10−5. The diﬀerence between empirical and theoretical
errors was not statistically signiﬁcant. Given that δj = 0.01, dρ̃/dδj approx-
imately equals −0.00063 for this case. Consequently, ρ̃ is not very sensitive



© 2009 by Taylor & Francis Group, LLC
                           Log-determinants and Spatial Weights                       105

to proportional error in one of the traces. A similar experiment using other
values of n demonstrated that this derivative does not vary materially with
n.
   To summarize, the sensitivity of ρ̃ to approximation errors for the log-
determinant in a single trace depends on: the variance associated with the
estimate of ρ, true value of the trace, true value of ρ, and the proportional
error in estimating the trace. The combination of the ﬁrst three factors should
have a value which does not vary greatly with n. This is because the trace
rises linearly with n (all else equal) and the variance declines linearly with
n. However, the proportional error in estimating the trace declines with n.
                   (i)
Speciﬁcally, σ 2 (T(j) ) = κn−1 where κ is a constant (Barry and Pace, 1999,
p. 52). Consequently, the sensitivity of ρ̃ to log-determinant error decreases
with sample size.




4.5        Chebyshev approximation
   Taylor series approximations provide good results around the point of ex-
pansion (ρ = 0 in the previous section). In contrast, Chebyshev approxi-
mations minimize errors over a range, attempting to minimize the maximum
error over the entire interval. Pace and LeSage (2004) applied the Chebyshev
approximation technique to the log-determinant problem.
   The basic idea is to approximate the matrix function ln(In − ρW ) using the
Chebyshev polynomials as well as Chebyshev coeﬃcients, and use the trace
of these to produce an estimate of the log-determinant. Following Press et
al. (1996), let cj represent the Chebyshev coeﬃcients (4.98) associated with
the function ln(1 − ρx), where x is real and lies on [−1, 1]. We furthermore
assume W is symmetric with a maximum eigenvalue of 1 and we restrict ρ to
(−1, 1). The coeﬃcients in (4.98) depend on the evaluation points x in (4.99)
as well as the speciﬁc scalar function f (x) under consideration. In this case,
the function of interest is ln(1 − ρx) as shown in (4.100), and we note that
the desired matrix function inherits the same coeﬃcients.

                                                       #                      $
                                                           π (j − 1) k − 12
                                        q+1
                                 2
                      cj (ρ) =           f (xk ) cos                                (4.98)
                               q+1                               q+1
                                     k=1
                                   #          $
                                     π k − 12
                          xk = cos                                                  (4.99)
                                       q+1
                       f (x) = ln(1 − ρx)                                          (4.100)

Given the Chebyshev polynomials in (4.102)–(4.107) and the coeﬃcients in



© 2009 by Taylor & Francis Group, LLC
106                                Introduction to Spatial Econometrics

(4.98), the approximation of the matrix logarithm appears in (4.101).4 Even
though this is a matrix function, it uses the coeﬃcients from the scalar func-
tion f (x) = ln(1 − ρx) and, in fact, this is part of the deﬁnition of matrix
functions.


                                           q+1
                                                               1
                         ln(1 − ρW ) ≈           ck Tk−1 (W ) − c1 In                     (4.101)
                                                               2
                                           k=1
                                 T0 (W ) = In                                             (4.102)
                                 T1 (W ) = W                                              (4.103)
                                 T2 (W ) = 2W 2 − In                                      (4.104)
                                 T3 (W ) = 4W 3 − 3W                                      (4.105)
                               T4 (W ) = 8W 4 − 8W 2 + In                                 (4.106)
                             Tn+1 (W ) = 2W Tn (W ) − Tn−1 (W )            n≥1            (4.107)

Taking the trace of the matrix logarithm yields the log-determinant (4.108)
and this leads to (4.109).


                             ln |In − ρW | = tr(ln(1 − ρW ))                              (4.108)
                                                q+1
                                                                           n
                                            ≈         cj tr(Tj−1 (W )) −     c1           (4.109)
                                                j=1
                                                                           2

  As Figure 4.6 illustrates, a low-order (quintic in this case) Chebyshev ap-
proximation to the log-determinant can closely tract the exact log-determinant.
The ﬁgure was constructed using a 1, 024, 000 by 1, 024, 000 contiguity-based
W.
  To provide an idea about the accuracy of the Chebyshev log-determinant
approximation, we conducted an experiment where we set n equal to 10, 000,
generated a random set of points, calculated a contiguity weight matrix W ,
and simulated the dependent variable using y = (In −0.75W )−1(Xβ +ε). The
matrix X contains an intercept column of ones and a random unit normal vec-
tor, with β set to ι2 , and ε is iid normal with a standard deviation of 0.25.
We generated 1, 000 trials of y, estimated the model via maximum likelihood
using the exact log-determinant as well as the Chebyshev log-determinant ap-
proximation. The diﬀerence in ρ̃ between the two estimates exhibited a mean
absolute error of 0.0008630 for the quadratic approximation and 0.000002 for
the quintic approximation.


4 Equation (3) in Pace and LeSage (2004) left out I
                                                            n from the last term in (4.101). Thanks
to Janet Walde for pointing this out.




© 2009 by Taylor & Francis Group, LLC
                                            Log-determinants and Spatial Weights                     107

                                        4
                                 x 10
                             0
                                                                                         Exact
                         2                                                               Chebyshev


                         4
      Log determinant




                         6

                         8

                        10

                        12

                        14

                        16

                        18
                                 0              0.2         0.4         0.6        0.8               1
                                                                   ρ


FIGURE 4.6: Exact and ﬁfth order Chebyshev log-determinants



  For the problem involving a 1, 024, 000 × 1, 024, 000 matrix, it took less than
0.5 second to compute tr(W 2 ) via ιn (W  W )ιn used in the quadratic approx-
imation compared to 7.62 minutes for the exact log-determinant. It required
23.3 seconds to calculate all traces needed for the quintic approximation.
   The approximation has a great advantage in more complicated circum-
stances such as those involving multiple weight matrices (Pace and LeSage,
2002). Consider the case of a linear combination of component weight ma-
trices so that W = α1 W1 + α2 W2 and for simplicity, W1 , W2 are symmetric
and doubly stochastic. If α1 + α2 = 1, α1 and α2 ≥ 0, then W is symmet-
ric and doubly stochastic and has real eigenvalues with a maximum eigen-
value equal to 1. The overall tr(W 2 ) is a quadratic form of the individual
traces of the cross-products formed by W1 and W2 . Using the relation that
tr(Wi Wj ) = ιn (Wi  Wj )ιn accelerates computation of the traces. Given that
traces of the cross-products have been pre-computed prior to estimation, up-
dating an approximation to the log-determinant requires a multiplication of a
1 × 2 vector times a 2 × 2 matrix followed by multiplication of a 2 × 1 vector
which is almost instantaneous.



© 2009 by Taylor & Francis Group, LLC
108                                Introduction to Spatial Econometrics



                                        W = α1 W1 + α2 W2                 (4.110)
                                                   
                                     α = α1 α2                            (4.111)
                                     1 = α ι2 , α1 , α2 ≥ 0              (4.112)
                                                                   
                                                 tr(W12 ) tr(W1 W2 )
                               tr(W 2 ) = α                          α   (4.113)
                                               tr(W1 W2 ) tr(W22 )

  Therefore, the quadratic Chebyshev approximation can greatly aid in work-
ing with systems like those in (4.110) through (4.113). Note, tr(W ) = 0 for
any combination of W1 and W2 . See Pace and LeSage (2002) for an example
involving an additive system containing a large number of weight matrices.




4.6        Extrapolation
   Figure 4.7 shows a sequence of log-determinants of In − ρWn as n goes from
1 to 10, 000. Speciﬁcally, we took 10, 000 randomly located points, formed
W , and ordered the rows and columns of W from North to South. That
is the ﬁrst row and column would correspond to the most northern location
and I1 − ρW1 is just 1. The ﬁrst two rows and columns would refer to the
spatial system comprised of the two most northerly observations, and so on.
Obviously, the initial observations have a paucity of spatial relations with
other observations, but this quickly changes as n becomes larger. This is an
example of an increasing domain ordering and the initial observations exhibit
more of an edge eﬀect since neighboring observations reﬂect points lying near
the edge of the map (Cressie, 1993).
   The approximate linearity of Figure 4.7 suggest the potential of taking a
sequence of log-determinants and extrapolating these. Measuring the slope
of the log-determinant curve at locations suﬃciently far apart can serve as
approximately independent samples, and these can be used to conduct in-
ference regarding unobserved future slopes. Pace and LeSage (2009a) follow
this approach to ﬁnd the log-determinant of a 3, 954, 400 by 3, 954, 400 weight
matrix associated with Census block locations.




4.7        Determinant bounds
  Sometimes a bound on the log-determinant can greatly reduce mathemati-
cal complexity of a problem, allow assessing the quality of an approximation,



© 2009 by Taylor & Francis Group, LLC
                                                             Log-determinants and Spatial Weights                                109


                                                         0

                                                   100
                 Log-determinant for different n




                                                   200

                                                   300

                                                   400

                                                   500

                                                   600

                                                   700

                                                   800
                                                         0      1000   2000   3000   4000   5000   6000    7000   8000   9000   10000
                                                                                             n



FIGURE 4.7: Log-determinants for diﬀerent n associated with increasing
domain ordering



or bound possible parameter estimates (Pace and LeSage, 2002, 2003a, 2004).
Pace and LeSage (2002) provided a simple quadratic bound shown in (4.114)
for symmetric W with maximum eigenvalue equal to 1. They derived this us-
ing the deﬁnition of the Taylor series for the log-determinant in conjunction
with the fact that the maximum trace is tr(W 2 ) and higher-order traces must
be positive.




                                                                                                          ρ2
                                   (ρ + ln(1 − ρ)) tr(W 2 ) < ln |In − ρW | < −                              tr(W 2 )       (4.114)
                                                                                                          2


  Another set of bounds can be constructed using the fact that triangular
block systems have log-determinants that can be calculated using the sum
of log-determinants from each of the main blocks. This suggests that for a
general In − ρW in (4.115), it would simplify the problem if U contained
more zeros. This would allow partitioning the problem into two smaller, more
tractable problems.



© 2009 by Taylor & Francis Group, LLC
110                                Introduction to Spatial Econometrics



                                        In − ρW = In − ρS − ρU             (4.115)
                                                        
                                                    AB
                                              S=                           (4.116)
                                                    0 D
                                                       
                                                    0 0
                                              U =                          (4.117)
                                                    C0

The basic idea is that reducing the number of non-zero elements in U would
lead to a positive bound on the log-determinant. In addition, subtracting ρ
times the elements in U from the main diagonal produces a lower bound on
the log-determinant. Let r = U ιn and Rii = ri for i = 1, . . . , n. In this case,
one can bound the log-determinant as in (4.118).

                      ln |In − ρS| ≥ ln |In − ρW | ≥ ln |(In − ρR) − ρS|   (4.118)
   Skillful reordering of the observations can reduce the number and magnitude
of the elements of U . Pace and LeSage (2009c) use this approach to bound the
log-determinant of a 3, 954, 400×3, 954, 400 matrix. Since almost the same es-
timate of dependence was obtained using the lower and upper log-determinant
bounds, these proved as informative as the actual log-determinant. An ad-
vantage of partitioning is the possibility of using parallel processing as well as
reduced memory requirements.
   Bounds may not yield a precise answer, but may yield a range of answers.
Pace and LeSage (2003a) invoked likelihood dominance ideas to demonstrate
that bounds could permit qualitative inferences concerning parameter esti-
mates.
   Various types of bounds can be combined with approximations such as the
Monte Carlo log-determinant estimator or the Chebyshev approximation to
provide bounds on the approximations. For example, Barry and Pace (1999)
bound the remainder term in the Taylor series approximation. For W with
real eigenvalues and a maximum eigenvalue of 1, tr(W 2j+1 ) < tr(W 2j ) and
tr(W 2(j+1) ) < tr(W 2j ). Consequently, the last even order estimated trace sets
an upper bound on the remaining omitted traces. Using this sets up lower
and upper bounds on the omitted terms.




4.8        Inverses and other functions
  Although the focus of this chapter has been on computing log-determinants,
other functions involving the spatial weight matrix W deserve attention. First,
(In − ρW )−1 often appears in various contexts. In the vast majority of those
contexts, it appears in conjunction with a matrix or vector. For example,



© 2009 by Taylor & Francis Group, LLC
                           Log-determinants and Spatial Weights                      111

v = (In − ρW )−1 ε where ε is a n × 1 vector. In this case, it would be poor
computational practice in terms of speed, memory requirements, and accuracy
to compute (In − ρW )−1 and then multiply it by the vector ε. It would be
better to solve the equation (In − ρW )v = ε for v.
   One can do this using iterative techniques such as conjugate gradients or
with the LU or Cholesky decompositions. For example, suppose In − ρW =
LU . In this case, LU v = ε which is identical to Lz = ε where z = U v. Solving
the triangular system Lz = ε for z, and then solving a second triangular
system U v = z for v yields the desired solution for v. Although it seems like
more work, it actually performs much better than the brute force approach,
especially for sparse matrices. This is because (In − ρW )−1 is dense for a
spatially connected system requiring n2 storage locations. In contrast, the
sparse matrix has a much smaller storage footprint. The brute force approach
is guaranteed to take O(n3 ) operations while solving the equation could take
as few as O(n) operations.
   As an example, for n = 10, 000, forming (In − 0.75W )−1 and multiplying it
by a 10, 000 × 1 vector ε takes 86.0 seconds, while solving the equation takes
0.071 seconds. It may seem that having the inverse available would save time
when dealing with a new vector ε. Given the inverse, it takes 0.69 seconds
to multiply the inverse and vector, and this is slower than solving the system
again. However, for a given L and U , solving the system again with a new
ε takes 0.0056 seconds. From a memory perspective, it requires around 1.6
gigabytes of memory to hold the 10, 000 × 10, 000 matrix whereas it takes
4.62 megabytes for L and U . In addition, for symmetric W the Cholesky
decomposition would take around half the memory and time required by the
LU decomposition.
   Chebyshev and Taylor series approximations can also aid in solving equa-
tions. The function to be approximated is f (x) = 1/(1 − ρx). Given the
coeﬃcients c0 , . . . , cq of the series associated with the powers of W , the prob-
lem in (4.119) reduces to (4.121) in which ε is multiplied by a power of W .
Forming powers of W times the vector ε in the eﬃcient manner described in
(4.122) allows us to form u(1) = W ε, then W u(1) = W 2 ε. Therefore, calcu-
lation of the q powers of the matrix times a vector just involves a set of q
matrix-vector operations.


                               v = (In − ρW )−1 ε                                 (4.119)
                                                        2
                               v ≈ c0 In + c1 W + c2 W +, . . . , +cq W   q
                                                                              ε   (4.120)
                               v ≈ c0 ε + c1 W ε+, . . . , +cq W q ε              (4.121)
                         W j ε = W (W j−1 ε)                                      (4.122)

To provide an indication of the performance of this approach, we simulated
a spatial system with n = 10, 000, ρ = 0.75, and a vector of iid unit normals
for ε. The correlation between the sixth-degree Chebyshev approximation of



© 2009 by Taylor & Francis Group, LLC
112                                Introduction to Spatial Econometrics

v versus the exact version of v was equal to 0.999986. The time and storage
requirements of this approximation approach were de minimus.
  Another problem which often arises is ﬁnding the diagonal of the inverse,
diag((In − ρW )−1 ), as shown in (4.123). In practice, computing (In − ρW )−1
and ﬁnding the diagonal breaks down due to memory problems for data sets
such as the US Census tracts.


                     d = diag((In − ρW )−1 )                                          (4.123)
                     d ≈ c0 diag(In ) + c1 diag(W )+, . . . , +cq diag(W q )
                     d ≈ c0 ιn + c1 0n + c2 diag(W 2 )+, . . . , +cq diag(W q )

The exact diagonals of the powers of W can be eﬃciently computed via (4.124)


                                        diag(Wi Wj ) = (Wi  Wj )ιn                  (4.124)

   The diagonal of a matrix A can also be estimated via Monte Carlo as shown
in (4.125)–(4.130).

                                                          
                                                  ab        u
                                         A=            , u= 1                         (4.125)
                                                  cd        u2
                                                                              
                                        Au = u1 a + u2 b        u1 c + u2 d           (4.126)
                                                                                  
                                u  Au =      u21 a + u1 u2 b     u2 u1 c + u22 d     (4.127)
                                  E(u2i ) = 1                                         (4.128)
                               E(ui uj ) = 0           i = j                         (4.129)
                                                        
                          E(u  Au) = a d = diag(A)                                   (4.130)

  To do this eﬃciently, let v be an n × m matrix of iid unit normal deviates,
where m is the number of vectors used in the approximation procedure. We
begin by setting the initial values v(0) = v. Monte Carlo estimates of the
diagonals can be eﬃciently computed via (4.131)–(4.132).


                                                  v(j) = W v(j−1)                     (4.131)
                                                                ιm
                                         diag(W ) ≈ (v  v(j) )
                                                   j
                                                                                      (4.132)
                                                                m
The term v  v(j) is an n × m matrix where each column is an independent
estimate of the diagonal. Post multiplying this by ιm sums across the m in-
dependent estimates and dividing by m converts this into an average of the
m estimates. Relative to estimating the trace, m needs to be much larger for
an accurate estimate the diagonal. Selection of m depends on the size of the
diagonal elements and their variation. If memory is a problem, estimation



© 2009 by Taylor & Francis Group, LLC
                           Log-determinants and Spatial Weights                        113

could proceed by setting m to a smaller value and then repeating the calcula-
tion. An average over all estimates would provide the approximate diagonal.
As with the trace estimator, using exact diagonals for the lower order powers
of W can boost accuracy at a low computational cost.

   To demonstrate the performance of approaches based on using diagonals of
W j , we used the same scenario as in the equation solution problem where n =
10, 000, ρ = 0.75, and ε was a vector of iid unit normals. For this problem, the
correlation between the sixth-degree Chebyshev approximation of the diagonal
for (In − 0.75W )−1 versus the exact version of (4.123) was equal to 0.99958.
This correlation rises to 0.9999994 for a tenth-degree approximation.

  Another matrix function often encountered is tr(W (In − ρW )−1 ), which is
the derivative of the log-determinant with respect to ρ shown in (4.133). The
scalar function to be approximated is f (x) = x/(1 − ρx).




                  h = tr(W (In − ρW )−1 )                                           (4.133)
                  h ≈ c0 tr(In ) + c1 tr(W ) + c2 tr(W 2 )+, . . . , +cq tr(W q )   (4.134)



   We used the same scenario as above to demonstrate the performance of
the matrix function in (4.133). For this problem, the exact trace of W (In −
0.75W )−1 was 2282.04 and the quintic Chebyshev approximation in (4.134)
was equal to 2281.67, a diﬀerence of 0.37. However, the exact trace of
W (In −0.749W )−1 is 2274.82 which is a diﬀerence of 7.23 from the exact trace
associated with ρ = 0.75. Similarly, the exact trace for W (In − 0.751W )−1
is 2289.31, which diﬀers by 7.26 relative to the trace for ρ = 0.75. These
diﬀerences in the exact traces that arise from a very small change of 0.001 in
ρ are many times the small approximation error equal to 0.37, suggesting the
estimate is close to the exact trace.

   Similar approaches could be employed for other matrix functions of interest,
and to obtain selected elements other than the diagonal. A major advantage
of these approximations over exact computation (besides the storage require-
ments and time) is the ability to pre-compute quantities such as tr(W j ) or
diag(W j ) which can be updated to produce new approximations at very little
cost. In addition, some of these quantities appear in multiple functions. For
example, pre-computing diag(W j ) allows computation of diag((In − ρW )−1 )
and because the trace is the sum of the diagonal, having the diagonal facil-
itates approximation of the derivative of the log-determinant as well as the
log-determinant. As already noted, given these diagonals or traces, reweight-
ing these to approximate a function is almost costless.



© 2009 by Taylor & Francis Group, LLC
114                                Introduction to Spatial Econometrics



4.9        Expressions for interpretation of spatial models
  In Chapter 2, we showed that the impact on the expected value of the
dependent variable arising from changes in the rth non-constant explanatory
variable was a function of the multiplier matrix Sr (W ) in (4.135), where we
use α∗ to represent the intercept coeﬃcient.
                                                  p
                                        E(y) =         Sr (W )xr + α∗ ιn          (4.135)
                                                 r=1

The matrix Sr (W ) for the SAR, SDM, and extended SDM models are shown
in (4.136), (4.138), and (4.140). By extended SDM model we mean: y =
ρW y +Xβ +W Xθ +W 2Xγ +α∗ ιn +. . . where X is an n×p matrix containing
n observations on p non-constant explanatory variables. The overall number
of independent variables in these models equals k, and k = op + 1 where o is
1 in the case of SAR, 2 in the case of SDM, and 3 for the extended version of
the SDM.


                     Sr (W ) = (In − ρW )−1 βr                                    (4.136)
                             = In βr + ρW βr + ρ2 W 2 βr + . . .                  (4.137)
                     Sr (W ) = (In − ρW )−1 (In βr + W θr )                       (4.138)
                             = [In βr + W θr ] + ρ[W βr + W 2 θr ] + . . .        (4.139)
                     Sr (W ) = (In − ρW )−1 (In βr + W θr + W 2 γr + . . .)       (4.140)

We proposed summary measures of these impacts which involve Sr (W ).


                                  M̄ (r)direct = n−1 tr(Sr (W ))                  (4.141)
                                  M̄ (r)total = n−1 ιn Sr (W )ιn                 (4.142)
                               M̄ (r)indirect = M̄ (r)total − M̄ (r)direct        (4.143)

   As noted in Chapter 2, it is computationally ineﬃcient to directly calculate
summary measures of these impacts using the deﬁnition of Sr (W ), since this
would involve n × n dense matrices. The main challenge in this case is calcu-
lating tr(Sr (W )). As discussed in this chapter, forming estimates of the trace
does not require much computational eﬀort.
   Let T represent an o × (q + 1) matrix containing the average diagonal
elements of the powers of W . We show the case of o = 2 in (4.144).

                                                                             
                 1      0       n−1 tr(W 2 ) n−1 tr(W 3 ) . . . n−1 tr(W q )
      T =                                                                         (4.144)
                 0 n−1 tr(W 2 ) n−1 tr(W 3 ) n−1 tr(W 4 ) . . . n−1 tr(W q+1 )



© 2009 by Taylor & Francis Group, LLC
                           Log-determinants and Spatial Weights               115

  Let G represent a diagonal (q + 1) × (q + 1) matrix as shown in (4.146) that
contains powers of ρ, and a p × o matrix P populated with parameters as in
(4.147).



                                           g = 1 ρ ρ2 . . . ρq            (4.145)
                                         Gii = gi i = 1, . . . , q + 1    (4.146)
                                               ⎡        ⎤
                                                 β1 θ 1
                                               ⎢ β2 θ 2 ⎥
                                               ⎢        ⎥
                                          P =⎢ . .⎥= βθ                   (4.147)
                                               ⎣ .. .. ⎦
                                                 βp θ p


We can produce p-vectors containing the cumulative scalar summary impact
measures for each of the r = 1, . . . , p non-constant explanatory variables as in
(4.148) to (4.150) using a = ιq+1 .



                                         M̄direct = P T Ga                (4.148)
                                           M̄total = (β + θ)ga            (4.149)
                                        M̄indirect = M̄total − M̄direct   (4.150)


   There may also be interest in calculating spatially partitioned impact esti-
mates that show how the eﬀects decay as we move to higher order neighboring
regions. We note that the vector a = ιq+1 acts to cumulate the eﬀects over all
orders 0 to q, using the global multiplier matrix (In − ρW )−1 . If we replace
this (q + 1) × 1 vector with a vector containing a 1 in the ﬁrst element and ze-
ros for the remaining elements, the eﬀects would take the form: M̄direct = β,
M̄total = β + θ, and M̄indirect = θ. These impact estimates represent only im-
pacts aggregated over the zero-order neighbors, represented by the ﬁrst term
from the global multiplier, ρ0 W 0 = In . This produces a spatially partitioned
eﬀect that represents only the ﬁrst bracketed term in (4.139). If we set the
ﬁrst two elements of the vector a to values of 1 with zeros for the remain-
ing elements, this would result in eﬀects estimates cumulated over the ﬁrst
two bracketed terms in (4.139), reﬂecting the zero-order neighbors plus the
ﬁrst-order neighbors. Therefore, setting the ﬁrst t elements in a to values of
one with the remaining elements set to zero allows us to produce spatially
partitioned versions of the direct, indirect, and total impact estimates. These
would represent a cumulation of the eﬀects out to the (t−1)th order neighbors
based on the ﬁrst t terms in the expansion (4.139).



© 2009 by Taylor & Francis Group, LLC
116                                Introduction to Spatial Econometrics



4.10         Closed-form solutions for single parameter spatial
             models
   We discuss closed-form solutions that can be applied to some spatial models
that involve only a single dependence parameter. The basic idea is that the
ﬁrst-order conditions for maximizing the concentrated log likelihood lead to
a polynomial involving the single dependence parameter. This problem has
a closed-form solution in the same sense that limited information maximum
likelihood (LIML) has a closed-form solution. By this we mean that one
can express the optimizing value for the parameter of interest in terms of
eigenvalues of a small matrix.
   We begin with the SAR or SDM model where we set up a quadratic form
(quadratic polynomial) for the sum-of-squared error term in (4.151) to (4.157).


                                          Y = y Wy                                   (4.151)
                                                                  −1        
                                    M (X) = In − X(X X)                  X           (4.152)
                                                           
                                        u(ρ) = 1 −ρ                                  (4.153)
                                        e(ρ) = M (X)Y G1 u(ρ)                        (4.154)
                                         G1 = I2                                     (4.155)
                                          Q = G1 Y  M (X)Y G1                       (4.156)
                                        S(ρ) = e(ρ) e(ρ) = u(ρ) Qu(ρ)              (4.157)
  For this speciﬁcation, G1 = I2 , so it does not play a role. However, for
other speciﬁcations G1 could become something other than an identity matrix.
Equations (4.158) to (4.162) lay out the polynomial approximation of the log-
determinant.

                                                                                 
                                           τ = tr(W ) tr(W 2 ) . . . tr(W p )        (4.158)
                                               ⎡                      ⎤
                                                −1 0 . . . 0
                                               ⎢ 0 −1/2 . . . 0 ⎥
                                               ⎢                      ⎥
                                          G2 = ⎢         ..           ⎥              (4.159)
                                               ⎣0    0      . 0 ⎦
                                                 0   0 . . . −1/p
                                            c = G2 τ                                 (4.160)
                                                       2   3       p 
                                        v(ρ) = ρ ρ ρ . . . ρ                         (4.161)
                           ln |In − ρW | ≈ c v(ρ)                                   (4.162)
We restate the concentrated log likelihood in (4.163).

                                                           n
                                  Lp (ρ) = c v(ρ) −         ln(u(ρ) Qu(ρ))         (4.163)
                                                           2



© 2009 by Taylor & Francis Group, LLC
                           Log-determinants and Spatial Weights                       117

Given the simple log-likelihood in (4.163), the gradient in (4.164) is equally
simple.

                            dLp (ρ)   d ln |In − ρW | n       dS(ρ)
                                    =                − S(ρ)−1                     (4.164)
                              dρ             dρ       2        dρ

Setting this to zero, and simplifying yields the ﬁrst order condition in (4.165).

                                   d ln |In − ρW |        n dS(ρ)
                                                   S(ρ) −         =0              (4.165)
                                          dρ              2 dρ

   Multiplying (4.165) by n−1 results in the mathematically equivalent condi-
tion in (4.166), that has better numerical properties for large n.

                                 1 d ln |In − ρW |        1 dS(ρ)
                                                   S(ρ) −         =0              (4.166)
                                 n        dρ              2 dρ

The positive deﬁnite quadratic form S(ρ) is a polynomial of degree 2 in ρ
whose coeﬃcients are the sum along the antidiagonals of Q. The derivative of
the log-determinant is a polynomial of order p − 1 which is multiplied by the
quadratic polynomial S(ρ) yielding a polynomial of degree p + 1. Of course,
the derivative of S(ρ) wrt ρ is a polynomial of degree 1 (linear). Consequently,
the expression in (4.165) is a polynomial of degree p+1, and has p+1 solutions
or zeros.
   These p + 1 solutions can be found by calculating eigenvalues of the p + 1
by p + 1 companion matrix (Horn and Johnson, 1993, p. 146-147). So this
problem has a closed-form in the same sense as limited information maximum
likelihood (LIML), expressing the answer in terms of the eigenvalues of a
small matrix.5 We note that calculating the eigenvalues in this case requires
O((p + 1)3 ) operations and does not depend upon n, making this approach
suitable for large spatial applications. Another advantage is that one can
test possible solutions to make sure the proposed solution represents a global
optimum. In addition, the second derivative of the concentrated log likelihood
with respect to the dependence parameter is available and this facilitates
calculating the Hessian as discussed in Chapter 3.
   One can express other speciﬁcations in this format as well. LeSage and
Pace (2007) provide more information on this approach in the context of a
similar closed-form solution for the matrix exponential spatial speciﬁcation
that we discuss in Chapter 9.



5 See Anderson, T.W. and H. Rubin (1949) for more on LIML. Other methods also exist for

ﬁnding the roots of polynomials. See Press et al. (1996, p. 362-372) for a review of these.




© 2009 by Taylor & Francis Group, LLC
118                                Introduction to Spatial Econometrics




4.11         Forming spatial weights
   Forming a matrix W based on contiguity or nearest neighbors in terms of
a Euclidean distance function or other distance metric seems intuitive. How-
ever, straightforward calculation usually involves O(n2 ) operations requiring
substantial time. Fortunately, there are more elegant ways to form W which
usually require O(n ln(n)) operations for locations on a plane.
   Computational geometry provides tools for many of the tasks relevant for
specifying weight matrices (Goodman and O’Rourke, 1997). For example,
points or sites in the Voronoi diagram shown in Figure 4.8 represent the loca-
tion of observations, with edges around each site represented by the Voronoi
polygon for that site. The edges of the Voronoi polygons provide boundaries
for regions surrounding the respective sites. These regions have the property
that the interior points are closer to their site than to any other site. This
type of approach has been used in the context of developing retail trade areas
(Dong, 2008), site selection, facilities planning, and so on. Voronoi polygons
represent a generalization for irregular location data of the traditional regular
polygons from central place theory.
   Segments connecting sites between contiguous Voronoi polygons form the
legs of Delaunay triangles. A number of computationally elegant means exist
to compute Voronoi diagrams and Delaunay triangles in O(n ln(n)) operations
for planar data. Since the legs of the Delaunay triangles connect the sites,
these form a way of specifying contiguity. Therefore, given the Delaunay
triangles associated with a set of sites, one uses this information to specify
W . On average, there are six neighbors to each site and so there will be close
to 6n triangles (deﬁned as 3 points). Given the triangles, it requires O(n)
operations to form a sparse weight matrix W .
   The matrix W derived using Delaunay triangles can be used to ﬁnd the m
nearest neighbors for each site. Since W represents the neighbors, W 2 repre-
sents neighbors to neighbors, and so on. Neighboring relations from various
orders form a good candidate set for the nearest neighbors. For example, let
Z = W + W 2 + W 3 + W 4 . The non-zero elements of Zi represent neighbors
up to the fourth order for each observation i. Having identiﬁed the candidate
observations, we can use their locational coordinates to calculate the distance
(for some chosen metric) from observation i to the candidate neighbors. Sort-
ing this short set of candidate neighbor distances for the m nearest neighbors
takes little time and the size of the candidate neighbor set is not related to
n for moderate to large values of n. Doing this n times yields a set of n × m
matrices containing observation indices to the m nearest neighbors for each
observation. Given the n × m matrix of observation indices, it takes O(n)
calculations to populate the m nearest neighbor W matrix.
   It is sometimes useful to employ the n × m matrix of observation indices to
deﬁne a ﬁrst nearest neighbor matrix W(1) , a second nearest neighbor matrix



© 2009 by Taylor & Francis Group, LLC
                           Log-determinants and Spatial Weights           119


              1

            0.9

            0.8

            0.7

            0.6

            0.5
       NS




            0.4

            0.3

            0.2

            0.1

              0
                  0                0.2     0.4         0.6        0.8      1
                                                 EW


FIGURE 4.8: Voronoi diagram of 100 spatially random points


W(2) , and so forth. One can use these various individual neighbor matrices
to form spatial weight matrices consisting of a weighted set of m nearest
neighbors. Possible weighting schemes include geometric decline with order,
exponential decline with order, or smooth polynomial weights in a fashion
similar to Almon distributed lags.
   The Monte Carlo log-determinant estimator and many other matrix func-
tions of interest rely heavily on sparse matrix-vector multiplication. Usually
these operations require specialized routines for general matrix-vector prod-
ucts. However, sparse matrix-vector products can be easily implemented in
almost any programming language. We illustrate this using m nearest neigh-
bor weight matrices, where we let D represent an n × m matrix of indices
to the m neighbors for each of the n observations. Let Dj , the jth column
of D, represent the n × 1 vector of indices associated with the jth neigh-
bor. The ﬁrst element of D2 would contain the index of the ﬁrst observa-
tion’s second nearest neighbor. The tenth element of D5 would contain the
tenth observation’s ﬁfth nearest neighbor, and so on. For an n × q matrix
V , Wj V = V (Dj ). If the nearest neighbors had weights wj , the overall
W V = w1 V (D1 ) + w2 V (D2 ) + · + wm V (Dm ).



© 2009 by Taylor & Francis Group, LLC
120                                Introduction to Spatial Econometrics

   A very interesting feature is that for many programming languages the
time required to index a matrix is the same as for a vector, since indexing
only requires altering a row label that pertains to all columns. To illustrate
this, we indexed a 1, 000, 000 by 50 matrix and a 1, 000, 000 by 1 vector. In
Matlab it took 0.051 seconds to index the matrix and 0.043 seconds to index
the vector.
   We note that sparse matrix-vector products needed to compute the log-
determinant estimator and other matrix functions require only indexing and
addition, two of the fastest operations possible on digital computers. This
means that nearest neighbor calculations can be implemented in a variety of
computing languages such as FORTRAN or C, and various statistical software
environments.
   For multivariate and spatiotemporal weight matrices, it may be necessary
to compute the n2 possible distances and sort these to ﬁnd the m nearest
neighbors. Fortunately, partial sorting algorithms exist (see fortran2000.com
for some examples) that require some function of m operations for each sort
rather than a function of n. This greatly accelerates formation of multivariate
and spatiotemporal weight matrices. Often there exist ways to reduce the
nearest neighbor candidate list for each observation. For example, in the case
of a spatiotemporal weight matrix one could require neighbors to be no more
than four years old, which would materially reduce the time required to form
spatiotemporal weight matrices spanning a 20 year period.




4.12         Chapter summary
   Determinants and other functions of the n × n spatial weight matrix of-
ten arise in spatial econometrics. Brute force approaches to dealing with
determinants and matrix functions limit the possible sample size or the abil-
ity to perform more involved estimation or testing. This chapter dealt with
these computational issues. Section 4.1 introduced the need for determinants
when working with dependent variable transformations of the type that arise
in spatial regression models. Section 4.2 described basic approaches to cal-
culating determinants. Special features of spatial systems such as sparsity
were discussed in Section 4.3 along with ways to take advantage of sparsity
by ordering rows and columns of W when using direct calculations for the
log-determinant.
   Section 4.4 introduced a Monte Carlo approximation to the log-determinant
that takes little time and memory and showed that this approach leads to small
errors in estimation of the dependence parameter, ρ. Similarly, Section 4.5
introduced a Chebyshev approximation that also performed well. Section 4.6
discussed another approximation approach that treats the sample as arising



© 2009 by Taylor & Francis Group, LLC
                           Log-determinants and Spatial Weights           121

from an increasing domain process and extrapolates the log-determinant. Sec-
tion 4.7 described a few approaches to bounding log-determinants that may
be of both theoretical and practical interest.
   Section 4.8 extended the log-determinant approximation techniques to other
commonly encountered tasks that arise in spatial modeling. These included
solving systems of equations, ﬁnding the diagonal of the variance-covariance
matrix (without computing the entire variance-covariance matrix), and cal-
culating the derivative of the log-determinant. Section 4.9 applied some of
these techniques to computing the summary measures of impacts (partial
derivatives) that are needed for interpretation of spatial econometric models.
Section 4.10 showed a method that can be used to produce closed-form solu-
tions for a number of spatial models involving a single dependence parameter.
Finally, eﬃcient approaches to forming spatial weight matrices were discussed
in Section 4.11.




© 2009 by Taylor & Francis Group, LLC
Chapter 5
Bayesian Spatial Econometric
Models


This chapter describes application of Bayesian methodology to spatial econo-
metric modeling and estimation. Bayesian methodology has existed for a long
time, but recent approaches to estimation of these models have led to a re-
vival of interest in these methods. The estimation approach known as Markov
Chain Monte Carlo (MCMC) decomposes complicated estimation problems
into simpler problems that rely on the conditional distributions for each pa-
rameter in the model (Gelfand and Smith, 1990). This innovation makes
application of the Bayesian methodology far easier than past approaches that
relied on analytical solution of the posterior distribution. A result of this is
that an extensible toolkit for solving spatial econometric estimation problems
can be developed at both a theoretical and applied level.
   We begin by introducing Bayesian econometric methodology in Section 5.1.
This is followed in Section 5.2 by a conventional Bayesian approach to esti-
mating the SAR model, which is shown to require numerical integration over
the spatial dependence parameter ρ. The historical need to carry out nu-
merical integration of the posterior distribution with respect to parameters in
Bayesian models made conventional Bayesian methodology relatively diﬃcult
for models with a large number of parameters.
   Section 5.3 introduces Markov Chain Monte Carlo (MCMC) estimation ap-
proaches for the family of spatial econometric models discussed in Chapter 2.
Bayesian methodology focuses on distributions involving data and parame-
ters, which has the eﬀect of structuring estimation problems in such a way as
to produce a posterior distribution that can be decomposed into a sequence of
conditional distributions. These “conditionals” characterize the distribution
of a single parameter given all other parameters in the model, and they are
extremely useful from both a theoretical and applied perspective. From an
applied perspective, conditional distributions are required for Markov Chain
Monte Carlo (MCMC) estimation. This method of estimation became pop-
ular when Gelfand and Smith (1990) demonstrated that MCMC sampling
from the sequence of complete conditional distributions for all parameters in
a model produces a set of estimates that converge in the limit to the true
(joint) posterior distribution of the parameters. Therefore, if we can decom-
pose the posterior distribution into a set of conditional distributions for each
parameter in the model, drawing samples from these will provide us with valid


                                                                            123
© 2009 by Taylor & Francis Group, LLC
124                                Introduction to Spatial Econometrics

Bayesian parameter estimates. This approach to estimation is the subject of
Sections 5.3 and 5.4 with an applied illustration provided in Section 5.5.
   One beneﬁt of Bayesian methodology used in conjunction with MCMC
estimation is that an extensible toolkit can be devised for dealing with a
wide array of spatial econometric problems. As a concrete example of this,
Section 5.6 extends the conventional spatial regression models from Chapter 2
to allow for a heteroscedastic disturbance structure in place of the conventional
assumption of homoscedastic disturbances. Other uses for the MCMC method
are also provided in this section.
   Additional material on the MCMC approach to modeling and estimation is
provided in a number of the remaining chapters.




5.1        Bayesian methodology
   An important aspect of Bayesian methodology is the focus on distributions
for the data as well as parameters. Bayes’ rule involves combining the data
distribution embodied in the likelihood function with prior distributions for
the parameters assigned by the practitioner, to produce a posterior distribu-
tion for the parameters. The posterior distribution forms the basis for all
inference, since it contains all relevant information regarding the estimation
problem. Relevant information includes both sample data information coming
from the likelihood, as well as prior or subjective information embodied in the
distributions assigned to the parameters.
   As noted in Chapter 1, econometric models focus on: 1) estimation and
inference about parameters, 2) model speciﬁcation and model comparisons,
and 3) model prediction or out-of-sample forecasting. The Bayesian approach
to estimation arises from some basic axioms of probability.1 For two random
variables A and B we have that the joint probability p(A, B) can be expressed
in terms of conditional probability P (A|B) or P (B|A) and the marginal prob-
ability P (B) (or P (A)) as shown in (5.1) and (5.2).


                                        p(A, B) = p(A|B)p(B)                       (5.1)
                                        p(A, B) = p(B|A)p(A)                       (5.2)

Setting these two expressions equal and rearranging gives rise to Bayes’ Rule:

                                                   p(A|B)p(B)
                                        p(B|A) =                                   (5.3)
                                                      p(A)

1 See Koop (2003) for a more complete introduction to Bayesian econometrics. Much of this

introductory material mirrors that presented in the introduction of Koop (2003).




© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models                125

  For our purposes, we let D = {y, X, W } represent model data and θ = B
denote model parameters so that:

                                         p(D|θ)p(θ)
                                        p(θ|D) =                              (5.4)
                                             p(D)
   A point to note is that Bayesian modeling assumes the parameters θ have a
prior distribution p(θ) that reﬂects previous knowledge as well as uncertainty
we have prior to observing the data. This distribution is used to provide a
formalized probabilistic statement that overtly speciﬁes both prior informa-
tion and uncertainty. If we know very little from prior experience, then this
distribution should represent a vague probabilistic statement, whereas a great
deal of previous experience would lead to a very narrow distribution centered
on parameter values gained from previous experience.
   The left-hand side of (5.4) represents the post-data inference for θ and is
called the posterior distribution of θ. This represents an update of the prior
distribution for the parameter θ after conditioning on the sample data. The
right-hand side of (5.4) indicates that Bayesian parameter inference represents
a compromise between prior information embodied in p(θ) and new informa-
tion provided by the sample data and model represented by the likelihood
p(D|θ). The Bayesian approach relies on conditional probability to provide a
formal structure of rules that allows us to learn (update our prior knowledge)
about some unknown quantity such as θ using the model and data.
   The nature of the compromise between prior and sample data takes the fol-
lowing form. If a spatial sample of data exhibits wide variation across regions
and we are only able to collect a small sample of regions, then the posterior
distribution would place more emphasis on prior experience (the distribution
p(θ)) than the distribution implied by the small sample of observable data and
model contained in the likelihood, p(D|θ). Conversely, if our prior experience
(information) was very limited and a great deal of sample data resulted in
a likelihood that indicated values of θ distributed tightly around a particu-
lar value, then the posterior distribution would place more emphasis on the
model and sample data information, embodied in the likelihood. There is no
explicit process such as this in classical statistics that allows for a tradeoﬀ be-
tween prior information and sample data information, since inference is based
entirely on the model and sample data, represented by the likelihood function.
   This distinction becomes unimportant for inference based on maximum like-
lihood and Bayesian estimation procedures when we have large data samples
and very little prior information. In this situation, both methods rely almost
entirely on the sample data information to provide inferences regarding the
parameter θ.
   Econometric modeling issue 1) is estimation and inference about parame-
ters. We note that all Bayesian inference (sometimes called learning) about
θ|D is based on the posterior density p(θ|D) for the parameters θ given the
data D. We can simplify (5.4) by ignoring the data distribution p(D), since
this distribution doesn’t involve the parameters θ.



© 2009 by Taylor & Francis Group, LLC
126                                Introduction to Spatial Econometrics


                                          p(θ|D) ∝ p(D|θ)p(θ)                 (5.5)

  Expression (5.5) indicates that the posterior distribution of the parame-
ter vector θ is a (proportional) product of the term p(D|θ) representing the
model likelihood and the term p(θ) representing the prior distribution for the
parameters θ. Since non-Bayesians do not subscribe to the notion that param-
eters have prior distributions, they cannot express prior beliefs or uncertainty
about the parameters using prior distributions.
  Econometric modeling issue 2) is model speciﬁcation and comparison. Given
a set i = 1, . . . , m of Bayesian models, each would be represented by a likeli-
hood function and prior distribution as in (5.6).

                                                    p(D|θi , Mi )p(θi |Mi )
                                  p(θi |D, Mi ) =                             (5.6)
                                                         p(D|Mi )
   Treating the posterior distributions in this case as conditional on the model
speciﬁcation Mi , we can apply Bayes’ rule to expand terms like p(D|Mi ) in a
fashion similar to (5.3). This leads to a set of unconditional posterior model
probabilities:

                                                     p(D|Mi )p(Mi )
                                        p(Mi |D) =                            (5.7)
                                                         p(D)
These serve as the basis for inference about diﬀerent models, given the sample
data. The term p(D|Mi ) that appears on the right-hand-side of expression
(5.7) is called the marginal likelihood, and we can solve for this key quantity
needed for model comparison ﬁnding:
                                             %
                                p(D|Mi ) =       p(D|θi , Mi )p(θi |Mi )dθi   (5.8)

   An important point is the unconditional nature of the model probabilities,
which do not depend on the posterior mean parameter values alone, but the
entire posterior distribution over which we integrate. Maximum likelihood ap-
proaches to model comparison rely on the likelihoods of two models evaluated
at the mean values of the parameter estimates. This means that model com-
parison inferences depend on scalar values of the parameter estimates used
to evaluate the likelihood. In contrast, Bayesian model comparison uses the
entire posterior distribution of values for the parameters.
   Expression (5.8) makes it clear that the theory behind Bayesian model
comparison is quite simple and follows directly from formal probability ax-
ioms of statistics. However, implementation may be hindered by the need to
integrate over the parameter vector θ. We will discuss several approaches to
dealing with the integration problem in Chapter 6 which is devoted to model
comparison.



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models                            127

   The Bayesian theory for econometric issue 3) requires prediction of an out-
of-sample set of observations that we denote y ∗ based on sample data ob-
servations in D. Here again, we rely on rules of probability to arrive at the
posterior distribution of the prediction sample given the sample data D, and
model parameters θ. This also involves expressing a joint distribution in terms
of a conditional and marginal.
                                        %                      %
                     p(y ∗ |D) =            p(y ∗ , θ|D)dθ =       p(y ∗ |D, θ)p(θ|D)dθ   (5.9)




5.2        Conventional Bayesian treatment of the SAR model
   As noted in the previous section, Bayesian methods require analysis of the
posterior distribution of the model parameters. This can be carried out using
analytical or numerical methods. In Section 5.2.1 we show that analytical
approaches are possible in spatial econometric modeling. However, numer-
ical methods for univariate or bivariate integration are required to produce
posterior inferences in the family of spatial econometric models discussed in
Chapter 2, which places limits on both theoretical and applied work. Con-
ditioning provides a way to avoid these problems, and is ideally suited to
match theoretical and MCMC estimation approaches to spatial econometric
modeling.


5.2.1         Analytical approaches to the Bayesian method
   As already indicated, one aspect of the Bayesian method is the introduction
of prior information in the modeling process. Investigators specify their prior
beliefs using distributions, which are combined with the data distribution to
produce the posterior distribution used for inference. The requirement that
prior beliefs be revealed as part of solving the estimation problem is viewed
by some to be a disadvantage of the Bayesian method. We show that in a
spatial econometric setting where data samples are typically large, prior in-
formation will tend to play a minor role in determining the character of the
posterior distribution. The fundamental Bayesian identity works to create a
matrix-weighted average of sample and prior information in the posterior, but
the weights are strongly inﬂuenced by the quantity of sample data informa-
tion available relative to prior information. When large samples are available
they provide a simpliﬁcation that can facilitate analytical evaluation of the
posterior distribution.
   Using the spatial autoregressive model (SAR) from the family of models in
Chapter 2, we can demonstrate the combination of prior and sample informa-
tion. The likelihood for the SAR model: y = ρW y + Xβ + ε, can be written



© 2009 by Taylor & Francis Group, LLC
128                                Introduction to Spatial Econometrics

as in (5.10), where we rely on A = (In − ρW ) for notational convenience and
|A| denotes the determinant of this matrix.

                                                               
                              n           1
     p(D|β, σ, ρ) = (2πσ 2 )− 2 |A| exp − 2 (Ay − Xβ) (Ay − Xβ)                (5.10)
                                         2σ

   As noted, we are required to specify prior distributions for the parameters
in the model, which will be combined with the likelihood to produce the poste-
rior distribution. We might rely on what is known as a normal-inverse gamma
prior (NIG) distribution for the parameters β and σ 2 . This form of prior
makes the normal prior distribution for β conditional on an inverse gamma
distribution for the parameter σ 2 . Since the parameter ρ plays such an impor-
tant role in this model, and is often a subject of inference, we might specify
a uniform prior over the feasible range for this parameter, (1/λmin , 1/λmax ),
where λmin , λmax represent the minimum and maximum eigenvalues of the
spatial weight matrix. As noted in Chapters 2 and 4, row-stochastic spatial
weight matrices W typically used in applications of these models lead to ρ in
the interval (λ−1min , 1).
   A formal statement of the Bayesian SAR model is shown in (5.11), where
we assume an n×k explanatory variables matrix X. We have added a normal-
inverse gamma (NIG) prior for β and σ, with the prior distributions indicated
using π. This prior speciﬁes that β given σ is distributed multivariate normal
N (c, σ 2 T ), and the marginal distribution for σ takes the form of an inverse
gamma density denoted IG(a, b) in (5.12).


                                y = ρW y + Xβ + ε                               (5.11)
                                ε ∼ N (0, σ 2 In )
                     π(β, σ 2 ) ∼ N IG(c, T, a, b)
                                = π(β|σ 2 )π(σ 2 )
                                   = N (c, σ 2 T )IG(a, b)                      (5.12)
                                               ba
                                   =                       (σ 2 )−(a+(k/2)+1)
                                     (2π)k/2 |T |1/2 Γ(a)
                                 × exp[−{(β − c) T −1 (β − c) + 2b}/(2σ 2 )]
                                    ba
                         π(σ 2 ) =      (σ 2 )−(a+1) exp(−b/σ 2 )               (5.13)
                                   Γ(a)
                              σ 2 > 0, a, b > 0
                           π(ρ) ∼ U (λ−1     −1
                                      min , λmax )

Note that we have parameterized the inverse-gamma distribution
                                                             ∞ in (5.13),
where Γ(·) represents the standard gamma function, Γ(a) = 0 ta−1 e−t dt.
The parameters used to specify our prior beliefs are those from the NIG



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models                           129

prior, c, T, a, b, and might also include prior parameters for ρ if we relied on
a diﬀerent type of informative prior for this model parameter.
   In cases where we have a great deal of prior uncertainty regarding the
parameters β, we can set c = 0, and assign a very large prior variance for
β with zero covariance between parameters in the vector β. This might be
accomplished by setting T = Ik · 1010 , or some other large magnitude. This is
known as a diﬀuse or uninformative prior. An uninformative prior can be set
for the parameter σ 2 by assigning values of a = b = 0. We will argue shortly
that this approach is intuitively reasonable when dealing with large spatial
data sets. For ρ, we assign a prior that indicates all outcomes within the
feasible range (λ−1        −1
                    min , λmax ) are equally probable. An additional point to note
is that we assume independence between the prior assigned to β and σ 2 and
that for ρ. Prior independence does not imply independence in the posterior
distributions of the model parameters, it simply reﬂects prior beliefs which
can be inconsistent with posterior outcomes.
   From Bayes’ Theorem we know that the posterior distribution for the model
parameters takes the form:

                                                 p(D|β, σ 2 , ρ)π(β, σ 2 )π(ρ)
                             p(β, σ 2 , ρ|D) =                                          (5.14)
                                                             p(D)
  By multiplying the expression for the likelihood and prior we can determine
the form of the posterior up to a constant term, p(D), that does not involve
the model parameters. An identity in (5.15) that has been labeled completing
the square is useful in arriving at the result shown in (5.16).


                 (Ay − Xβ) (Ay − Xβ) + (β − c) T −1 (β − c) + 2b
                                      ≡ (β − c∗ ) (T ∗ )−1 (β − c∗ ) + 2b∗             (5.15)


                                           ∗
               p(β, σ 2 , ρ|D) ∝ (σ 2 )a +(k/2)+1 |A|
                                          1
                                × exp{− 2 [2b∗ + (β − c∗ ) (T ∗ )−1 (β − c∗ )]}        (5.16)
                                         2σ
                            c∗ = (X  X + T −1 )−1 (X  Ay + T −1 c)
                            T ∗ = (X  X + T −1 )−1
                               a∗ = a + n/2
                                                                                  
                               b∗ = b + c T −1 c + y  A Ay − (c∗ ) (T ∗ )−1 c∗ /2
                                A = In − ρW

  One thing to note concerning this result is that the usual case for non-
spatial regression models where the NIG prior serves as a conjugate prior
distribution does not hold here (Zellner, 1971). A general deﬁnition of con-
jugate prior distributions are those that result in computationally tractable



© 2009 by Taylor & Francis Group, LLC
130                                Introduction to Spatial Econometrics

posterior distributions, and this term is often used to refer to situations where
the posterior distribution takes the same form as the prior distribution except
that model parameters are updated. In the case of a non-spatial regression
model an N IG(c, T, a, b) prior placed on the parameters β and σ would result
in an N IG(c∗ , T ∗ , a∗ , b∗ ) posterior distribution for these parameters, where
we use the star superscript to denote parameter updating. This would be the
result if ρ = 0, so that A = In in expression (5.16).
   Because of the informative prior distributions used in this model, matters
become complicated in two ways. First, there is the need to specify or assign
values for the parameters of the NIG prior distribution. Second, the posterior
distribution in (5.16) is diﬃcult to analyze because it requires integration of
σ 2 as well as ρ to arrive at a posterior expression for β. Similarly, it requires
that we integrate with respect to β and ρ to ﬁnd the posterior for σ 2 . We
should ask the question — is the prior information likely to exert an impact
on our inferences regarding β? If not, we can greatly simplify the posterior in
(5.16), by relying on uninformative priors.
   We note that the term: y  A Ay − (c∗ ) (T ∗ )−1 c∗ would equal the sum of
squared residuals from the SAR model if we knew the posterior means for the
parameters ρ and c∗ . This implies that the ratio b∗ /a∗ would be approximately
equal to the residual sum of squares for the case where a, b → 0 and T −1 →
0. These NIG prior parameter settings would result in uninformative prior
distributions assigned to the parameters β and σ 2 .


5.2.2         Analytical solution of the Bayesian spatial model
    It is worthwhile to pursue solution of the Bayesian SAR model in the con-
text of simpliﬁcations oﬀered by a non-informative prior (Hepple, 1995a,b).
We replace the NIG prior from the previous section with an uninformative
prior based on a, b = 0 and T −1 = 0, and assume independence between
the prior assigned to ρ and that for β and σ, i.e., π(β, σ, ρ) = π(β, σ)π(ρ).
Using this type of prior and applying Bayes’ Theorem that combines the
likelihood and prior leads to the simpliﬁed posterior distribution shown in
(5.17). This result is consistent with our earlier observation relating the term:
y  A Ay − (c∗ ) (T ∗ )−1 c∗ and the residual sum of squares.



        p(β, σ, ρ|D) ∝ p(D|β, σ, ρ) · π(β, σ) · π(ρ)               (5.17)
                                                             
                                             1
                     ∝ σ −n−1 |A| exp − 2 (Ay − Xβ) (Ay − Xβ) π(ρ)
                                            2σ

   With this simpler posterior, we can treat σ as a nuisance parameter and
analytically integrate this out of the expression in (5.17). This can be accom-
plished using properties of the inverse gamma distribution, leading to:



© 2009 by Taylor & Francis Group, LLC
                             Bayesian Spatial Econometric Models                              131



             p(β, ρ|D) ∝ |A| {(Ay − Xβ) (Ay − Xβ)}n/2 π(ρ)                                 (5.18)
                                                  2           ∗         ∗   −n/2
                          = |A| {(n − k)s + (β − c ) X X(β − c )}                    π(ρ)
                        c = (X  X)−1 X  Ay
                         ∗

                        s2 = (Ay − Xc∗ ) (Ay − Xc∗ )/(n − k)

  Conditional on ρ, the expression in (5.18) represents a multivariate Student-
t distribution that we can integrate with respect to β, leaving us with the
marginal posterior distribution for ρ, shown in (5.19).

                                        p(ρ|D) ∝ |A| (s2 )−(n−k)/2 π(ρ)                     (5.19)
There is no analytical solution for the posterior expectation or variance of ρ,
which we would be interested in for purposes of inference. However, simple
univariate numerical integration methods would allow us to ﬁnd this expec-
tation as well as the posterior variance of ρ. The integrals required are shown
in (5.20).

                                                          
                                                      ∗ ρ · p(ρ|D)dρ
                                    E(ρ|D) = ρ = 
                                                          p(ρ|D)dρ
                                                     ∗ 2
                                                [ρ − ρ ] · p(ρ|D)dρ
                                   var(ρ|D) =                                              (5.20)
                                                      p(ρ|D)dρ

   Referring to expression (5.19), we see that the integration in (5.20) would
involve evaluating the n × n determinant: |A| = |In − ρW |, over the domain
of support values for ρ. This can be accomplished eﬃciently using either
the direct sparse matrix approach of Pace and Barry (1997) or the Monte
Carlo estimator for the log determinant of Barry and Pace (1999) discussed
in Chapter 4.
   There is still the problem of determining the feasible range for ρ. We can
take alternative approaches here depending on prior information available. In
the case where no prior information is available, we could rely on an interval
based on the minimum and maximum eigenvalues of the n × n matrix W ,
which determine the theoretical feasible range for ρ. In problems involving
large spatial samples, the matrix W is sparse, containing a large number
of zero elements. For frequently used row-stochastic matrices W , λmax =
1, so we need only compute λmin , which can be found using sparse matrix
algorithms.2 A second approach would be to use a prior to impose a restriction
to the interval (−1, 1). This imposition reﬂects prior knowledge that most
applications of spatial regression models report estimates for the parameter ρ
within this range of values. It may also express the prior sentiment that values

2 See LeSage (1999) for a discussion of how to accomplish this using MATLAB software.




© 2009 by Taylor & Francis Group, LLC
132                                Introduction to Spatial Econometrics

of the parameter ρ less than −1 would likely be indicative of problems with
the weight matrix or model speciﬁcation and of little interest. This approach
has the advantage of eliminating the need to compute the minimum eigenvalue
of the potentially large n × n matrix W . LeSage and Parent (2007) introduce
a beta prior distribution for ρ, which we denote B(α, α). This alternative to
the uniform prior distribution is deﬁned on the interval (−1, 1) and centered
on zero. We will discuss and demonstrate use of this prior in Section 5.4. A
third approach would be to argue that negative spatial dependence is of little
interest in a particular problem, so the prior on ρ could be used to restrict
values of ρ to the interval [0, 1).
   In all of these cases, we can work with the log of the expression in (5.19),
and construct a vector associated with a grid of q values for ρ in the relevant
interval that takes the form in (5.21). Here, we assume the prior for ρ from
(5.19) is uniform over the range (1/λmin , 1/λmax ). Therefore, ln(π(ρ)) does
not vary with ρ and is constant. The constant κ contains this and other
constant terms.

   ⎛             ⎞   ⎛                 ⎞           ⎛              ⎞
     ln p(ρ1 |y)       ln |In − ρ1 W |               ln(s2 (ρ1 ))
   ⎜ ln p(ρ2 |y) ⎟   ⎜ ln |In − ρ2 W | ⎟  n − k  ⎜ ln(s2 (ρ2 )) ⎟
   ⎜             ⎟   ⎜                 ⎟           ⎜              ⎟
   ⎜      ..     ⎟=κ+⎜        ..       ⎟−          ⎜      ..      ⎟ (5.21)
   ⎝       .     ⎠   ⎝         .       ⎠     2     ⎝       .      ⎠
       ln p(ρq |y)                      ln |In − ρq W |                          ln(s2 (ρq ))

We draw on the vectorization scheme for the grid of q values for ρ from Pace
and Barry (1997) described in Chapter 3, to produce the following:


                                   s2 (ρi ) = eo eo − 2ρi ed eo + ρ2i ed ed
                                         e = eo − ρed
                                        eo = y − Xco
                                        ed = W y − Xcd
                                        co = (X  X)−1 X  y
                                        cd = (X  X)−1 X  W y                                  (5.22)

   This vector allows univariate numerical integration using a simple method
such as Simpson’s rule. Note the way in which computational advances that
improve maximum likelihood estimation can also be used in Bayesian ap-
proaches to estimation. This is an excellent example of cross-fertilization
that arises from computational advances in maximum likelihood and Bayesian
methods. We will see that this same approach can be used in the context of
MCMC estimation to even greater advantage.
   Despite this simplicity, there is still the point that we need to carry out the
integration twice to obtain the mean and variance for the parameter ρ. In the
case of the SAR model, the posterior mean for β takes a form: E(β|y, X, W ) =



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models            133

c∗ = (X  X)−1 X  (In − ρ∗ W )y, which does not involve numerical integration.
However, we note this is not true of other members of the family of spatial
econometric models introduced in Chapter 2. It is also the case that univariate
integration would be needed to obtain posterior variances for β, and the same
would be true for the parameter σ 2 in this model.




5.3        MCMC estimation of Bayesian spatial models
   As already motivated the posterior distribution for the SAR model requires
univariate numerical integration to obtain the posterior mean and variance
for the parameter ρ, as well as other parameters in the model. This section is
devoted to an alternative methodology known as Markov Chain Monte Carlo
(MCMC), which has become very popular in econometrics and mathemati-
cal statistics. Section 5.3.1 provides basic background for this approach to
estimation, and introduces the method in the context of our basic family of
spatial econometric models. The power and generality of this approach is
demonstrated with extensions of the basic spatial autoregressive model to the
case of heteroscedastic disturbances in Section 5.6.1.
   Additional illustrations of the ﬂexibility and power of this approach to es-
timation are provided in Chapter 10, where the topic of spatial dependence
for models involving censored and binary dependent variables (spatial Tobit
and probit) are discussed. We also introduce Bayesian MCMC estimation of
origin-destination ﬂow models in Chapter 8, and for the matrix exponential
spatial speciﬁcation in Chapter 9. Due to the extensible nature of Bayesian
methods in conjunction with MCMC, estimation of these models that deal
with a wide range of spatial econometric application areas can be viewed as
minor extensions of the basic approach we introduce here.


5.3.1         Sampling conditional distributions
  An alternative to the analytical/numerical integration approach described
in the previous section is to rely on a methodology known as Markov Chain
Monte Carlo (MCMC) to estimate the parameters. MCMC is based on the
idea that rather than work with the posterior density of our parameters, the
same goal could be achieved by examining a large random sample from the
posterior distribution. Let p(θ|D) represent the posterior, where θ denotes
the parameters and D the sample data. If the sample from p(θ|D) were large
enough, one could approximate the form of the probability density using kernel
density estimators or histograms, eliminating the need to ﬁnd the precise
analytical form of the density.
  The most widely used approach to MCMC is due to Hastings (1970) which



© 2009 by Taylor & Francis Group, LLC
134                                Introduction to Spatial Econometrics

generalizes the method of Metropolis et al. (1953), and is labeled Metropolis-
Hastings sampling. Hastings (1970) suggests that given an initial value θ0 ,
we can construct a chain by recognizing that any Markov chain that has
found its way to a state θt can be completely characterized by the probability
distribution for time t + 1. His algorithm relies on a proposal or candidate
distribution, f (θ|θt ) for time t + 1, given that we have θt . A candidate point
θ∗ is sampled from the proposal distribution and:

    1. This point is accepted as θt+1 = θ∗ with probability:
                                                                  
                                               p(θ∗ |D)f (θt |θ∗ )
                        ψH (θt , θ∗ ) = min 1,                                  (5.23)
                                               p(θt |D)f (θ∗ |θt )

    2. otherwise, θt+1 = θt , that is, we stay with the current value of θ.

   We can view the Hastings algorithm as indicating that we should toss a
Bernoulli coin with probability ψH of “heads” and make a move to θt+1 = θ∗ if
we see a “head” coin toss, otherwise set θt+1 = θt . Hastings demonstrated that
this approach to sampling represents a Markov chain with the correct equi-
librium distribution, capable of producing samples from the posterior p(θ|D).
   An implication of this is that one can rely on Metropolis-Hastings (M-H)
to sample from conditional distributions where the distributional form is un-
known. This happens to be the circumstance with the conditional distribution
for the spatial dependence parameters ρ, λ in our family of spatial econometric
models from Chapter 2.
   In other cases, the conditional distributions may take standard forms such
as a multivariate normal, with a mean and variance that can be easily cal-
culated using standard linear algebra required for ordinary linear regression.
This is often true of the conditional distributions for the parameters β and
σ in our family of spatial regression models. When the form of the condi-
tional distributions are known, we can take an approach referred to as Gibbs
sampling or alternating conditional sampling.
   To illustrate MCMC sampling we consider the conditional distributions for
the SAR model based on the NIG prior for the parameters β and σ 2 and a uni-
form prior for ρ. Beginning with the joint posterior for the model parameters
p(β, σ 2 , ρ|D) from (5.16), we can ﬁnd the conditional distributions for each
of the parameters by considering expression (5.16) while treating the other
parameters as known. For example, when considering the form taken by the
conditional distribution for the parameters β, we treat the remaining param-
eters σ 2 and ρ as if they were known. We note that for the case where ρ is
known, the conjugate NIG prior for β and σ 2 leads to a joint NIG (conditional
on ρ) distribution for β and σ 2 . Of course, the joint N IG(c∗ , T ∗ , a∗ , b∗ ) leads
to a conditional distribution for β that is a k-dimensional normal distribution,
N (c∗ , T ∗ ), and an IG(a∗ , b∗ ) conditional distribution for σ 2 .
   The remaining conditional distribution we require is that for the parameter
ρ. For now, we will ignore the parameter ρ in this discussion, assuming



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models                      135

it is ﬁxed and known. We will discuss the conditional distribution for this
parameter later.
   This leaves us with only two sets of parameters β, σ to estimate. Let our
parameter vector θ = (β(0) , σ(0) ), where the subscript zero indicates arbitrary
initial values for the two sets of parameters. Given the initial value for σ(0)
(and knowledge of ρ) we can calculate the mean, c∗ and variance-covariance,
T ∗ , for the multivariate normal conditional distribution of β using the expres-
                                                     2
sions in (5.24). Note that we employ the value σ(0)    , for the parameter σ 2 in
expression (5.24).

                                 2
                         p(β|ρ, σ(0) ) ∼ N (c∗ , σ(0)
                                                  2
                                                      T ∗)                         (5.24)
                                        c∗ = (X  X + T −1 )−1 (X  Ay + T −1 c)
                                        T ∗ = (X  X + T −1 )−1
                                         A = In − ρW

  Given an algorithm that produces a vector of multivariate normal random
deviates with the mean and variance-covariance shown in (5.24), we can re-
place the initial β(0) with the sampled values that we label β(1) .
  Alternating to the inverse gamma conditional distribution for σ 2 shown in
(5.25), we use an algorithm to produce a random deviate from the IG(a∗ , b∗ )
                                        2                2
distribution to update the parameter σ(0)  and label it σ(1) .


                      p(σ 2 |β(1) , ρ) ∼ IG(a∗ , b∗ )                              (5.25)
                                        a∗ = a + n/2
                                        b∗ = b + (Ay − Xβ(1) ) (Ay − Xβ(1) )/2
                                        A = In − ρW

   Note that we used the “updated” value β(1) when producing the sample
draw from the conditional distribution for σ 2 with which we update our pa-
           2       2
rameter σ(0)  to σ(1) .
   At this point, we return to the conditional distribution for β and produce an
                                            2
update β(2) , based on using the updated σ(1)  draw. This process of alternating
sampling from the the two conditional distributions is continued until a large
sample of “draws” for the parameters β and σ have been collected. This is
not an ad hoc procedure as formal mathematical demonstrations have been
provided by Geman and Geman (1984) and Gelfand and Smith (1990) that
the stochastic process θt , representing our parameters is a Markov chain with
the correct equilibrium distribution. Gibbs sampling is in fact a special case
of the Hastings and Metropolis methods introduced earlier. An implication
of this is that the drawn samples of parameters taken from the alternating
sequential sampling of the complete sequence of conditional distributions for
all parameters in the model represent samples from the joint posterior of



© 2009 by Taylor & Francis Group, LLC
136                                Introduction to Spatial Econometrics

the model parameters. Recall, this is the basis for all inference in Bayesian
analysis.
  Having a large sample of parameters from the posterior distribution allows
us to proceed with inference regarding the model parameters β and σ, which
would be based on statistics such as the mean and standard deviation com-
puted from these sampled parameter draws. In fact, given a large enough
sample of parameters, we could use kernel density estimation procedures to
construct the entire posterior distribution of the parameters, not simply the
mean and standard deviation point estimates.


5.3.2         Sampling for the parameter ρ
  To this point, we have assumed unrealistically that the parameter ρ from our
model is known. To complete our scheme for MCMC estimation of the SAR
model we need to sample the parameter ρ from its conditional distribution.
This takes the form:


                                   p(ρ, β, σ|D)
               p(ρ|β, σ) ∝
                                    p(β, σ|D)
                                                                    
                                                1          
                              ∝ |In − ρW |exp − 2 (Ay − Xβ) (Ay − Xβ)     (5.26)
                                               2σ

   This conditional distribution does not take a known form as in the case
of the conditionals for the parameters β and σ where we had normal and
inverse gamma distributions. Sampling for the parameter ρ must proceed us-
ing an alternative approach, such as Metropolis-Hastings. We will combine
Metropolis-Hastings (M-H) sampling for the parameter ρ in our model and
Gibbs sampling from the normal and inverse gamma distributions for the pa-
rameters β and σ to produce MCMC estimates for the SAR model (LeSage,
1997). This type of procedure is often labeled Metropolis within Gibbs sam-
pling.
   For (M-H) sampling we require a proposal distribution from which we gener-
ate a candidate value for the parameter ρ, which we label ρ∗ . This candidate
value as well as the current value that we label ρc are evaluated in expression
(5.26) to calculate an acceptance probability using (5.27).
                                                                     
                                         c   ∗          p(ρ∗ |β, σ)
                                   ψH (ρ , ρ ) = min 1,                   (5.27)
                                                        p(ρc |β, σ)
  We use a normal distribution as the proposal distribution along with a
tuned random-walk procedure suggested by Holloway, Shankara, and Rahman
(2002) to produce the candidate values for ρ. The procedure involves use
of the current value ρc , a random deviate drawn from a standard normal
distribution, and a tuning parameter c as shown in (5.28).



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models              137


                                        ρ∗ = ρc + c · N (0, 1)            (5.28)

Expression (5.28) should make it clear why this type of proposal generating
procedure is labeled a random-walk procedure. The goal of tuning the propos-
als coming from the normal proposal distribution is to ensure that the M-H
sampling procedure moves over the entire conditional distribution. We would
like the proposal to produce draws from the dense part of this distribution
and avoid a situation where the sampler is stuck in a very low density part of
the conditional distribution where the density or support is low.
   To achieve this goal, the tuning parameter c in (5.28) is adjusted based on
monitoring the acceptance rates from the M-H procedure during the MCMC
drawing procedure. Speciﬁcally, if the acceptance rate falls below 40%, we
adjust c = c/1.1, which decreases the variance of the normal random deviates
produced by the proposal distribution, so that new proposals are more closely
related to the current value ρc . This should lead to an increased acceptance
rate. If the acceptance rate rises above 60%, we adjust c = (1.1)c, which
increases the variance of the normal random deviates so that new proposals
range more widely over the domain of the parameter ρ. This should result in
a lower acceptance rate. The goal is to achieve a situation where the tuning
parameter settles to a ﬁxed value resulting in an acceptance rate between 40
and 60 percent. At this point, no further adjustments to the tuning parameter
take place and we continue to sample from the normal proposal distribution
using the resulting tuned value of c.
   There is a need to resort to tuning the proposal distribution because small
sample sizes result in the parameter ρ having a conditional distribution that
exhibits a wide dispersion, whereas large sample sizes usually produce a small
dispersion since this parameter is estimated quite precisely in these circum-
stances. This means that a single setting for the tuning parameter will not
work well in all circumstances, whereas this adaptive feedback tuning pro-
cedure will accommodate diﬀerent samples arising from varying estimation
problems. Figure 5.1 shows a plot of the acceptance rates along with the M-
H draws for the parameter ρ associated with the ﬁrst 250 draws to illustrate
these issues. From the top half of the ﬁgure showing the monitored acceptance
rates, we see that numerous adjustments to the tuning parameter take place
during the ﬁrst 50 passes through the MCMC sampling procedure. These
adjustments stop after the ﬁrst 100 draws and the M-H sampling procedure
produces a relatively steady acceptance rate just under 50 percent.
   The movement of the M-H sampler for the parameter ρ can be seen in
the bottom half of the ﬁgure. We see sequences of draws for which the M-H
procedure continues to reject candidate values in favor of keeping the current
value. Both the acceptance rate as well as the sequence of draws can be
examined as a way of detecting problems with the MCMC sampler. For
example, a long sequence of rejections (a ﬂat line in the plot of draws) would
be indicative of the sampler getting stuck. In a wide range of applied situations



© 2009 by Taylor & Francis Group, LLC
138                                Introduction to Spatial Econometrics


                        0.8
      Acceptance rate




                        0.6

                        0.4

                        0.2

                         0
                              0     50         100         150            200   250
                                                MCMC Iterations

                         1

                        0.9
      ρ Draws




                        0.8

                        0.7


                              0     50         100         150            200   250
                                                MCMC Iterations



FIGURE 5.1: Metropolis-Hastings acceptance rates and draws for ρ


involving samples ranging from 50 to over 100,000 observations this tuning
procedure has never encountered problems for the standard family of spatial
regression models from Chapter 2.
   One consequence of the acceptance rate between 40 and 60 percent from
M-H sampling with this tuning scheme is that we only collect draws for the
parameter ρ half of the time. This may require that we carry out more passes
through the MCMC sampler to collect a large enough sample of information
from which to construct an accurate posterior distribution for the parameters
in the model.
   A more eﬃcient alternative to the Metropolis-Hastings approach to obtain-
ing samples for the parameter ρ is to rely on univariate numerical integration
to obtain a normalizing constant and then construct a cumulative density
function (CDF) for the conditional posterior distribution for the parameter ρ.
Given this CDF, we can produce a draw from the conditional posterior distri-
bution using inversion. This approach was introduced by Smith and LeSage
(2004).
   In our discussion of numerical integration over the parameter ρ, we noted
the ability to express the posterior distribution p(ρ|D) that resulted after



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models             139

analytical integration of the parameters β and σ as a vector using a grid of
q values of ρ. We can exploit a similar expression that arises for the case
of informative priors in a simple trapezoid rule integration scheme to rapidly
calculate the normalizing constant and the associated CDF needed to generate
draws using the inversion approach of Smith and LeSage (2004).
   To illustrate this approach, we use Figure 5.2, that shows a cumulative
conditional distribution function created using univariate numerical integra-
tion. For improved scaling of the ﬁgure, the domain of the spatial dependence
parameter ρ was restricted to (0, 1), and the univariate numerical integration
procedure described in section 5.2.2 was based on a grid of q = 2000 values
for ρ and the vectorization scheme from Pace and Barry (1997). The process
of drawing by inversion involves a uniform random deviate drawn from the
domain of support for ρ, which was restricted to (0, 1) for this illustration.
This random value is then evaluated using the numerically constructed con-
ditional distribution function to produce a draw for ρ. The ﬁgure shows one
such draw based on a single uniform deviate, which was collected on one pass
through the MCMC sampling loop.
   Despite the fact that this may seem complicated and time-consuming, it is
not. For example, a sample of 2,500 draws for all three sets of parameters
β, σ and ρ for the SAR model can be produced in 6.5 seconds on a laptop
computer for a model containing 3,107 US county-level observations and ﬁve
explanatory variables. This is faster than M-H sampling to produce the same
number of draws. An advantage of this approach over Metropolis-Hastings
sampling for the parameter ρ is that every pass through the MCMC sampling
loop produces an eﬀective draw for the parameter ρ. In the case of Metropolis-
Hastings, given a rejection rate tuned to between 40 and 60 percent we would
require around twice as many MCMC draws to produce the same eﬀective
sample of draws for the parameter ρ.




5.4        The MCMC algorithm
   As noted in Chapter 2, we can use the approaches of either Pace and Barry
(1997) or Barry and Pace (1999) to calculate a vector based on a grid of q
values for ρ in the interval (−1, 1) representing the log-determinant expression
(ln |In − ρW |) over this grid. Since this term arises in both the (log) con-
ditional distribution for ρ needed for M-H sampling as well as the expression
required for integration and draws via inversion, these computational innova-
tions designed to assist in maximum likelihood estimation help here as well.
We use a grid of 2,000 values and calculate this vector only once prior to
beginning the MCMC sampling loop.
   Another point to note is that we can impose the restriction that −1 < ρ < 1,



© 2009 by Taylor & Francis Group, LLC
140                                Introduction to Spatial Econometrics


                   1.4


                   1.2


                    1
      Draw for ρ




                   0.8


                   0.6    Cumulative distribution from integration ------ >


                   0.4


                   0.2


                    0
                     0   0.1      0.2   0.3     0.4     0.5    0.6    0.7      0.8   0.9      1
                                Random deviate in the domain of support for   ρ



FIGURE 5.2: Draw by inversion using numerical integration to produce
an empirical CDF


or any other desired interval using rejection sampling for the case of M-H
sampling of the parameter ρ. This involves simply rejecting values of ρ outside
the desired interval drawn from the proposal distribution and drawing another
proposal. A formal measure of the posterior probability that the parameter ρ
lies in the interval can be derived using a count of the proportion of candidate
values that are rejected (Gelfand et al., 1990).
   By way of summary, we formally present the MCMC sampler for the SAR
model, with N IG(c, T, a, b) priors for β and σ 2 . Beginning with arbitrary
                                   2
values for the parameters β(0) , σ(0) , ρ(0) , we sample sequentially from the fol-
lowing three conditional distributions.
                    2
    1. Sample p(β|σ(0) , ρ(0) ) using the N (c∗ , σ(0) T ∗ ) distribution. with a mean
       and variance calculated from:


                            c∗ = (X  X + T −1 )−1 (X  (In − ρ(0) W )y + T −1 c)
                           T ∗ = (X  X + T −1 )−1                                         (5.29)



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models                      141

         Label the sampled parameter vector β(1) and use this to replace the
         parameter vector β(0) .

    2. Sample p(σ 2 |β(1) , ρ(0) ), using an inverse gamma distribution IG(a∗ , b∗ ).



                          p(σ 2 |β (1) , ρ) ∼ IG(a∗ , b∗ )                         (5.30)
                                        a∗ = a + n/2
                                        b∗ = b + (Ay − Xβ(1) ) ((Ay − Xβ(1) )/2
                                        A = In − ρ(0) W


                          2
    3. Sample p(ρ|β(1) , σ(1) ), using either the M-H algorithm or integration
       and draw by inversion approach set forth in Section 5.3.2. Label this
       updated value ρ(1) and return to step 1.


   One sequence of steps 1 to 3 constitute a single pass through the sampler.
We carry out a large number of passes and after some initial burn-in period we
collect the draws for the parameters from each pass. For example, we might
carry out 7,500 draws excluding the ﬁrst 2,500 and use the resulting sample
to produce posterior estimates and inferences.
   The ﬁrst 2,500 are excluded to account for start-up, or burn-in of the sam-
pler. We need to be conﬁdent that the MCMC sampling procedure has reached
the steady state or equilibrium distribution motivated by Hastings (1970). In
practice, one can produce samples from a short run of 2,500 draws with the
ﬁrst 500 excluded for burn-in and compare the means and standard deviations
of the parameters from this run to those obtained from a longer run based on
diﬀerent starting values for the parameters. If the estimates and inferences are
equivalent, then there are no likely problems with convergence of the MCMC
sampler to a steady state. Once the sampler achieves a steady-state, we in-
terpret the draws as coming from the posterior distribution. LeSage (1999)
discusses a number of alternative statistical tests that can be applied to the
sampled draws as a diagnostic check for convergence.
   In the Bayesian MCMC literature, a great deal of attention is devoted to
issues regarding convergence of samplers. However, the simple spatial regres-
sion models considered here do not encounter problems in this regard. This
is not to say that attention should not be paid to issues of scaling trans-
formations applied to variables and possible collinearity problems between
explanatory variables in the model. However, these problems would likely
exert an adverse impact on maximum likelihood estimates as well, especially
on inferences based on variances calculated using a numerical estimate of the
Hessian.



© 2009 by Taylor & Francis Group, LLC
142                                Introduction to Spatial Econometrics




5.5        An applied illustration
   We provide an illustration of Bayesian estimation and inference using a data
sample from Pace and Barry (1997) containing voter turnout rates in 3,107 US
counties during the 1980 presidential election. We use the (logged) proportion
of voting age population that voted in the election as the dependent variable
y, and measures of education, home ownership and income as explanatory
variables, along with a constant term. The education and home ownership
variables were expressed as (logged) population of voting age with high school
degrees and (logged) population owning homes, and the median household
income variable was also logged. Since all variables are logged, the coeﬃcient
estimates have an elasticity interpretation.
   We wish to demonstrate that the Bayesian MCMC sampling procedures
will produce nearly identical estimates and inferences as maximum likelihood
methods when uninformative priors are assigned to the parameters β and σ.
In this application we rely on a Beta prior distribution for ρ that we label
B(d, d) introduced by LeSage and Parent (2007). This distribution is shown
in (5.31) where Beta(d, d), d > 0 represents the Beta function, Beta(d, d) =
 1 d−1
 0 t    (1 − t)d−1 dt. This prior distribution takes the form of a relatively
uniform distribution centered on a mean value of zero for the parameter ρ.
This represents an alternative to the uniform prior on the interval (−1, 1).

                                            1      (1 + ρ)d−1 (1 − ρ)d−1
                              π(ρ) ∼                                       (5.31)
                                        Beta(d, d)         22d−1
   Figure 5.3 depicts prior distributions associated with prior values d =
1.01, 1.1 and 2, for the B(d, d) prior. From the ﬁgure, we see that values
of d near unity produce a relatively uninformative prior that places zero prior
weight on end points of the interval for ρ, consistent with theoretical restric-
tions. In the ﬁgure, we use the interval (−1, 1) for the parameter ρ which
should incorporate the eﬀective domain of support for the posterior distribu-
tion in most applied work, so this works well as a prior.
   The prior mean of the multivariate normal distribution assigned to the pa-
rameters β was zero and a diagonal prior variance-covariance structure based
on a scalar variance of 1e + 12 was used. This creates an uninformative prior
distribution that is centered on zero, but whose variance is extremely large
resulting in a nearly uniform prior. Finally, the prior distribution assigned for
the parameter σ 2 was based on an inverse gamma distribution, IG(a, b), with
the parameters a = b = 0, which results in a diﬀuse or non-informative prior
for this parameter.
   In addition to demonstrating equivalent estimates and inferences from max-
imum likelihood and Bayesian procedures when using relatively uninformative
priors, we would also like to illustrate that equivalent posterior distributions



© 2009 by Taylor & Francis Group, LLC
                                    Bayesian Spatial Econometric Models                  143


                              0.8
                                                                                d=2
                              0.7                                               d=1.1
                                                                                d=1.01
                              0.6

                              0.5
              Prior density




                              0.4

                              0.3

                              0.2

                              0.1

                               0
                               -1            -0.5            0            0.5             1
                                                          ρ values


FIGURE 5.3: The Beta(d, d) prior distribution for d = 1.01, 1.1, 2.0


for the parameter ρ will arise from the Metropolis-Hastings or draw by inver-
sion schemes for sampling the parameter ρ.
   Two posterior densities for the parameter ρ were constructed using a ker-
nel density estimation routine applied to a sample of 5,000 draws that were
retained from a run of 7,500 MCMC sampling draws, with the ﬁrst 2,500
discarded for burn-in.
   The kernel density estimates of the posterior distributions for the parameter
ρ based on the two sampling procedures are presented in Figure 5.4. We see
close agreement in the two resulting distributions.
   Maximum likelihood estimates for this model and sample data are presented
in Table 5.1 alongside Bayesian estimates based on both sampling schemes for
the parameter ρ. To improve the accuracy of the t-statistics associated with
the maximum likelihood estimates, these were based on variances calculated
from the analytical information matrix rather than a numerical Hessian pro-
cedure. Contrary to Bayesian convention, we present calculated t-statistics
using the posterior mean and standard deviation of the sampled MCMC draws
for the parameters. This provides an easier comparison of the Bayesian esti-
mation results with those from maximum likelihood estimation.
   We note that conventional MCMC practice is to report 0.95 credible inter-



© 2009 by Taylor & Francis Group, LLC
144                                Introduction to Spatial Econometrics



                                                                           ρ from MH
                                                                           ρ by inversion
        Posterior density




                            0.45   0.5         0.55         0.6           0.65              0.7
                                               Domain for ρ


FIGURE 5.4: Kernel density estimates of the posterior distribution for ρ


vals constructed using the sample of draws from the MCMC sampler along
with posterior means and standard deviations calculated from the sample of
draws. This simply involves sorting the sampled draws from low to high and
ﬁnding lower and upper 0.95 points. For example, given a vector of 10,000
sorted draws, we would use the 5,000-(9,500/2) and 5,000+(9,500/2) elements
of this vector as the lower and upper 0.95 credible intervals. Inferences based
on these should correspond to a 95% level of conﬁdence from maximum like-
lihood.
   From the table, we see that all estimates are nearly identical as are the ratios
of the mean to standard deviation, suggesting they would produce similar
inferences.
   Summarizing our developments to this point, we have established that
MCMC estimation can reproduce maximum likelihood estimates when we
rely on uninformative priors. It was also noted that for large samples, it is
unlikely that use of an informative prior will exert much impact on the poste-
rior estimates and inferences, a conventional result concerning Bayesian versus
maximum likelihood methods. The time required to produce the maximum
likelihood and Bayesian estimates in our applied illustration were: 1/2 sec-



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models              145
  TABLE 5.1:                 Comparison of SAR model estimates
                             Max Likelihood Bayesian Inversion Bayesian M-H
     Variable                     β̂ t-stat† mean β̂   t-stat‡ mean β̂ t-stat‡
     constant    0.6265                 15.59  0.6266     15.17  0.6243   14.91
     education   0.2206                 16.71  0.2202     14.18  0.2190   13.87
     homeowners  0.4818                 33.47  0.4816     33.28  0.4816   33.07
     income     −0.0992                 −6.35 −0.0993     −6.07 −0.0982   −5.94
     ρ̂          0.5869                 41.92  0.5878     41.57  0.5892   40.87
     σ̂          0.0138                        0.0138            0.0138
     † interpreted as an asymptotic t-statistic
     ‡ based on mean(draws) / std deviation(draws)




ond for maximum likelihood, 6.5 seconds for MCMC using draws by inversion
and 12 seconds for M-H sampling. This suggests that the slower Bayesian
estimation approach is not computationally competitive with maximum like-
lihood if our desire were to produce the same estimates and inferences. In
the next section we provide illustrations of simple extensions of the Bayesian
spatial regression models that hold advantages over conventional maximum
likelihood methods that justify the increased computational time required to
produce these estimates.




5.6        Uses for Bayesian spatial models
   In this section we provide three uses for Bayesian MCMC estimation that
can produce elegant and formal solutions to problems that arise in spatial
regression modeling. One of these problems is that of heteroscedasticity and
outliers that frequently arise in spatial data samples. In Section 5.6.1, we draw
on work by Geweke (1993) to produce a heteroscedastic/robust variant of the
spatial regression. This model subsumes the conventional spatial regression
models that assume homoscedastic disturbances as a special case, and it is
fast and simple to implement using MCMC methods. Section 5.6.2 shows
how MCMC methods can be used to produce valid estimates and inferences
regarding the total, direct and indirect impacts that are used to interpret the
eﬀect of changes in the explanatory variables on the dependent variable. A
ﬁnal example for use of MCMC methods is discussed in Section 5.6.3, where
spatial regression models involving more than a single spatial weight matrix
are discussed. These models require constrained multivariate optimization
routines in a likelihood setting to produce estimates and inferences regarding
the multiple spatial dependence parameters. In contrast, MCMC reliance on



© 2009 by Taylor & Francis Group, LLC
146                                Introduction to Spatial Econometrics

conditional distributions considerably simpliﬁes estimation of these models.

5.6.1         Robust heteroscedastic spatial regression
   One concrete illustration of the extensible nature of the MCMC estimation
method is to extend our simple SAR model to include variance scalars that
can accommodate heteroscedastic disturbances and/or outliers.
   This type of prior information was introduced by Albert and Chib (1993)
for the ordinary probit model and Geweke (1993) for a least-squares model.
The prior pertains to assumed homoscedastic versus heteroscedastic distur-
bances. A set of variance scalars (v1 , v2 , . . . , vn ), is introduced that repre-
sent unknown parameters that need to be estimated. This allows us to as-
sume ε ∼ N (0, σ 2 V ), where V is a diagonal matrix containing parameters
(v1 , v2 , . . . , vn ). The prior distribution for the vi terms takes the form of a set
of n iid χ2 (r)/r distributions, where r represents the single parameter of the
χ2 distribution. This allows us to estimate the additional n variance scaling
parameters vi by adding only a single parameter r, to our model. Use of a ﬂex-
ible family of distributions that is controlled by a single parameter such as r to
specify a prior distribution is a common Bayesian approach. The parameter
r that controls this family of prior distributions is labeled a hyperparameter.
The notion here is that changes in this single parameter can potentially exert
a great deal of inﬂuence on the nature of the prior distribution assigned to
the model parameters it controls.
   The speciﬁcs regarding the prior assigned to the vi variance scaling param-
eters can be motivated by noting that a prior mean of unity will be assigned
and a prior variance equal to 2/r. This implies that as the hyperparameter r is
assigned very large values, the prior variance becomes very small leading the
variance scaling parameters vi to approach their prior mean values of unity.
This results in a prior speciﬁcation that: V = In , the traditional assumption
of constant variance across our observations or regions/points located in space.
On the other hand, a small value assigned to the hyperparameter r will lead
to a skewed prior distribution assigned to the variance scalar parameters vi .
The large prior variance leads to skew in the χ2 prior distributions assigned
to each variance scalar which will allow the estimates and posterior means for
these parameters to deviate greatly from their prior mean values of unity.
   Large values for the variance scalars vi are associated with outliers or obser-
vations containing large variances. These observations will be down-weighted
as in the case of generalized least-squares where large variances result in less
weight assigned to an observation. In the context of spatial modeling, outliers
or aberrant observations can arise due to enclave eﬀects, where a particu-
lar area exhibits divergent behavior from nearby areas. As an example, we
might see diﬀerent crime rates in a “gated community” than in surrounding
neighborhoods. Geweke (1993) shows that this approach to modeling the dis-
turbances is equivalent to a model that assumes a Student-t prior distribution
for the errors. We note that this type of distribution has frequently been used



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models                       147

to deal with sample data containing outliers (Lange, Little and Taylor, 1989).
   A formal statement of the Bayesian heteroscedastic SAR model is shown in
(5.32), where we have added an independent normal and inverse-gamma prior
for β and σ 2 , and a uniform prior for ρ. This represents a departure from our
previous use of the NIG prior for the parameters β and σ 2 . This type of prior
is generally considered more ﬂexible, but does not have the advantage of being
conjugate. Since we are relying on MCMC estimation, use of a conjugate prior
is no longer important. These priors are in addition to the chi-squared prior
for variance scalars, but as noted they are unlikely to exert much impact on
the resulting estimates and inferences in large samples. As before, the prior
distributions are indicated using π().


                                        y = ρW y + Xβ + ε
                                        ε ∼ N (0, σ 2 V )
                                   Vii = vi , i = 1, . . . , n, Vij = 0, i = j
                                 π(β) ∼ N (c, T )
                             π(r/vi ) ∼ iid χ2 (r), i = 1, . . . , n
                              π(σ 2 ) ∼ IG(a, b)
                                  π(ρ) ∼ U (1/λmin , 1/λmax )                      (5.32)

   We need the conditional posterior distributions for the parameters β, σ, and
ρ as well as the variance scalars vi , i = 1, . . . , n in this model to implement
our MCMC sampling scheme. The conditional distribution for β takes the
form of a multivariate normal shown in (5.33), which is a simple GLS variant
of our previous expression, where the variance is known. This arises because
we can condition on all other parameters in the model, including the diagonal
matrix of variance scalars V .


       p(β|ρ, σ, V ) ∝ N (c∗ , T ∗ )                                                (5.33)
                  c∗ = (X  V −1 X + σ 2 T −1 )−1 (X  V −1 (In − ρW )y + σ 2 T −1 c)
                     T ∗ = σ 2 (X  V −1 X + σ 2 T −1 )−1

  This illustrates an attractive feature of the MCMC method. Working with
conditional posterior distributions greatly simpliﬁes the calculations required
to extend a basic model. If we have already developed computational code to
implement a simpler homoscedastic model where V = In , the modiﬁcations
required to implement this model are minor.
  The expression needed to produce a draw from the conditional posterior
distribution of σ 2 takes the form in (5.34). Using the relationship noted
earlier involving the residuals, we see that we have a type of GLS expression,
where the non-constant variance reﬂected by the diagonal matrix V can be
assumed known.



© 2009 by Taylor & Francis Group, LLC
148                                Introduction to Spatial Econometrics



                                    p(σ 2 |β, ρ, V ) ∝ IG(a∗ , b∗ )                 (5.34)
                                                 a∗ = a + n/2
                                                b∗ = (2b + e V −1 e)/2
                                                 e = Ay − Xβ
                                                A = In − ρW

  The expression needed to produce draws for the parameter ρ takes the
unknown distributional form shown in (5.35) (LeSage, 1997). This means
we can still rely on either our numerical integration followed by a draw via
inversion or the M-H approach.
                                                           
                                                1
                   p(ρ|β, σ 2 , V ) ∝ |A| exp − 2 e V −1 e            (5.35)
                                               2σ
   Geweke (1993) shows that the conditional distribution of V given the other
parameters is proportional to a chi-square density with r + 1 degrees of free-
dom. Speciﬁcally, we can express the conditional posterior of each vi as in
(5.36), where v−i = (v1 , . . . , vi−1 , vi+1 , . . . , vn ) for each i. That is, we sample
each variance scalar conditional on all others. The term ei represents the ith
element of the vector e = Ay − Xβ.

                                    e2 + r
                                  p( i     |β, ρ, σ 2 , v−i ) ∝ χ2 (r + 1)          (5.36)
                                       vi
   We summarize by noting that estimation of this extended model requires
adding a single conditional distribution for the new variance scalar parameters
vi introduced in the model to our MCMC sampling scheme. In addition,
we made minor adjustments to the conditional posterior distributions for the
other parameters in the model to reﬂect the presence of these new parameters.
These adjustments would require only minor changes to any computational
code already developed for the simpler model from Section 5.4.
   A point to note is that introducing heteroscedastic disturbances in the con-
text of a model estimated using maximum likelihood was proposed by Anselin
(1988). However, that approach requires the modeler to specify a functional
form as well as variables thought to model the non-constant variance over
space. The approach introduced here does not require this additional model
for the non-constant variance. In addition to automatically detecting and ad-
justing for non-constant variances, the MCMC method will also detect and
automatically down-weight outliers or aberrant observations.
   From a practitioner’s viewpoint, it would seem prudent to use this method
with a prior hyperparameter setting of r = 4. This prior is consistent with a
prior belief in heteroscedasticity, or non-constant variance as well as outliers.
If the sample data does not contain these problems, the resulting posterior
estimates for the variance scalar parameters vi will take values near unity. A



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models                149

plot of the posterior mean of the variance scalar parameters can serve as a
diagnostic for outliers or heteroscedasticity. A map of the posterior mean vi
values can be used to locate regions/observations with high and low variance
as well as outliers.
  It makes little sense to use this model with a large prior value assigned
to the hyperparameter r. This reﬂects a prior belief in homoscedasticity. If
a practitioner is conﬁdent regarding homoscedastic disturbances, then maxi-
mum likelihood estimates are much faster and easier to produce.


5.6.2         Spatial eﬀects estimates

   Gelfand et al. (1990) point out that the draws from MCMC sampling can
be used to produce posterior distributions for functions of the parameters that
are of interest. This makes testing complicated parameter relationships quite
simple. For example, suppose we are interested in the hypothesis: γ = α · β <
1, where α, β are parameters in a model estimated with MCMC sampling. We
can simply multiply the m draws for α(j) and β(j) , j = 1, . . . , m, to produce
γ(j) , j = 1, . . . , m. The posterior distribution of γ = α · β can be used to ﬁnd
the posterior probability that γ < 1. This would be equal to the proportion
of all draws in the vector γ that take values less than unity. If we ﬁnd that
9,750 draws from a sample of 10,000 are less than unity, then the probability
is 97.5%. Of course means, modes and standard deviations could also be
constructed using the draws for γ.
   If we are interested in conducting inference regarding the summary mea-
sures of the cumulative total, direct and indirect impacts associated with
changes in the explanatory variables described in Chapter 2, we can con-
struct these during the MCMC sampling process. On each pass through the
sampler, we can use the current set of draws to produce a total and direct
impact, as well as the indirect impact by subtracting the direct from the to-
tal eﬀect. Saving these draws allows us to use these to construct the entire
posterior distribution for the three types of impacts that arise from changing
the explanatory variables X in the model.
  In Chapter 2 we established the notion that each explanatory variable r has
                                                             p
a multiplier impact on y that could be expressed as: y = r=1 Sr (W )xr + . . .,
where the multiplier term Sr (W ) takes diﬀerent forms for the various members
of the family of spatial models. For example, for the SDM model: y =
ρW y + Xβ + W Xθ + ε, we have Sr (W ) = (In − ρW )−1 (In βr + W θr ).
   It should be easy to see that the sampled parameters β, θ, ρ could be directly
entered into Sr (W ) on each pass through the MCMC sampling loop. This
could be used to produce MCMC samples of the summary measures of the
(average) cumulative direct impacts shown in (5.37), cumulative total impacts
in (5.38) and cumulative indirect impacts in (5.39).



© 2009 by Taylor & Francis Group, LLC
150                                Introduction to Spatial Econometrics



                                   direct: M̄r (D) = n−1 tr(Sr (W ))          (5.37)
                                        total: M̄r (T ) = n−1 ιn Sr (W )ιn   (5.38)
                                 indirect: M̄r (I) = M̄r (T ) − M̄r (D)       (5.39)
  However, a more computationally astute approach would be to use the
eﬃcient trace computations set forth in Chapter 4 in conjunction with the
MCMC draws. Use of the MCMC draws for problems involving small samples
might produce a more accurate posterior parameter distribution than would
arise from using maximum likelihood estimates to simulate from a multivariate
normal distribution. This could occur because in small samples parameters
may exhibit asymmetry or heavy tailed distributions that deviate slightly from
normality.

5.6.3         Models with multiple weight matrices
   We discuss how MCMC sampling can be used to estimate models such as the
SAC from Chapter 2, that include more than a single spatial weight matrix.
For models that contain numerous weight matrices and associated spatial
dependence parameters, MCMC sampling from the conditional distributions
leads to an important simpliﬁcation.
   The SAC model takes the form in (5.40) with the associated likelihood
concentrated for the parameters β, σ 2 shown in (5.41).


                           y = ρW y + Xβ + u
                           u = λM u + ε                                       (5.40)
                                             2
                      ε ∼ N (0, σ In )
                                                              
                                        1          
        p(y|β, σ, ρ, λ) ∝ |A||B|exp − 2 (BAy − BXβ) (BAy − BXβ) (5.41)
                                       2σ
                     A = In − ρW
                          B = In − λM
  Maximizing the log of the likelihood function in (5.41) requires that we
calculate two log-determinants |A| and |B|, and the optimization problem
involves solving a two-dimensional constrained optimization problem. The
constraints are imposed to bound the spatial dependence parameters to their
respective ranges based on the minimum and maximum eigenvalues of the
spatial weight matrices W and M . This is not an extremely diﬃcult opti-
mization problem given current computational hardware and software, along
with the eﬃcient methods for computing log-determinants of sparse matrices
described in Chapter 4.
  The advantage of MCMC sampling the model from (5.40) is that the con-
ditional distributions for ρ and λ take the forms shown in (5.42) and (5.43).



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models           151



                              p(ρ, λ, β, σ|y)
       p(ρ|β, σ, λ) ∝                                                  (5.42)
                               p(λ, β, σ|y)
                                                                     
                                         1
                    ∝ |A||B(λc )|exp − 2 (B̃Ay − B̃Xβ) (B̃Ay − B̃Xβ)
                                        2σ
                      p(ρ, λ, β, σ|y)
       p(λ|β, σ, ρ) ∝                                                  (5.43)
                       p(ρ, β, σ|y)
                                                                    
                                         1
                    ∝ |A(ρc )||B|exp − 2 (B Ãy − BXβ) (B Ãy − BXβ)
                                        2σ
We note that when sampling for the parameter ρ, we rely on the current
value/draw for λ in |B|, which we denote |B(λc )|, and B(λc ) = B̃. Similarly,
when sampling for the parameter λ we use the current value of ρ in |A| and A,
with similar notation. An implication of this is that we could still carry out
our univariate numerical integration scheme to ﬁnd a normalizing constant
and produce a CDF from which to draw by inversion. Similarly, carrying
out Metropolis-Hastings sampling for the parameter ρ is no more complicated
than in the case of a model where the additional spatial dependence parameter
λ does not exist. We can produce candidate values for the parameter ρ from a
normal random-walk proposal density using the same procedure as described
in section 5.3.2.
   One can envision richer models that increase the number of spatial weight
matrices. For example, a model similar to the model in (5.44) can be found
in Lacombe (2004), where a sample of counties on borders of states was used
to carry out an analysis of the state-level impact of public policy diﬀerences
between states. The spatial weight matrix W was used to extract neighboring
counties across the border in another state, whereas the weight matrix V was
used to include dependence on neighboring counties within the same state.


                                        y = ρW y + γV y + Xβ + u
                                        u = λM u + ε                    (5.44)
                                        ε ∼ N (0, σ 2 In )

   The likelihood for this model shown in (5.45) involves the log-determinant
terms: |A| = |In − ρW − γV | and |In − λM |. Maximum likelihood estimation
involves three-dimensional optimization of the concentrated likelihood with
respect to the parameters β and σ 2 to produce estimates for the parameters
ρ, γ and λ. This requires computing the log-determinant term: |In − ρW −
γV |, over a two-dimensional grid of values for the parameters ρ and γ (see
Chapter 4). There is also the log-determinant term |B| = |In − λM | deﬁned
in (5.45) that arises from the spatial autoregressive disturbance process, as
well as the stability constraint ρ + γ < 1, which must be applied when solving
the optimization problem.



© 2009 by Taylor & Francis Group, LLC
152                                Introduction to Spatial Econometrics


                                                             
                               2 −n  1            
p(y|β, σ, ρ) = (2πσ )  |A| |B| exp − 2 (BAy − BXβ) (BAy − BXβ)
                                  2
                                    2σ
          A = |In − ρW − γV |
               B = |In − λM |                                             (5.45)

   MCMC estimation of this model allows us to ﬁx the log-determinant A
based on the current values of the parameters ρ and γ when sampling for
the parameter λ from its conditional distribution. Similarly, we can ﬁx the
log-determinant B when sampling for the parameters ρ and γ. The stabil-
ity restriction can be imposed using rejection sampling. This simply involves
rejecting Metropolis-Hastings candidate values that violate the stability re-
striction. A count of the number of times these rejections occur during the
sampling draws provides a posterior probability measure for consistency of
the sample data with the stability restriction.




5.7        Chapter summary
   Application of traditional Bayesian methods to estimation of spatial au-
toregressive models requires simple univariate numerical integration of the
posterior distribution with respect to the parameter ρ over a closed inter-
val. In contrast, recent advances in the area of Markov Chain Monte Carlo
(MCMC) estimation allow Bayesian estimation of spatial autoregressive mod-
els as well as a host of useful variants on these models without the need to
resort to numerical integration. We demonstrated that Bayesian methods in
conjunction with MCMC estimation allow the basic family of spatial autore-
gressive models to be implemented in the usual case where disturbances are
normally distributed with constant variances.
   The greatest value of Bayesian MCMC methods lies in their ability to ex-
tend the basic spatial regression models to accommodate situations where the
sample data exhibit outliers or heteroscedasticity. These methods are also
useful for generating spatial impact estimates which take the form of func-
tions of the model parameters. These functions can be used to determine the
impact of changes in the explanatory variables of the model on the dependent
variable. Use of MCMC draws in the functions allows a simple approach to
inference regarding the dispersion of the impacts. Finally, MCMC methods al-
low estimation of models involving more than a single weight matrix, without
resort to multivariate constrained optimization routines that are required for
maximum likelihood estimation of these models. We will see other examples
of places where MCMC methods can be applied to spatial regression models
in other chapters.



© 2009 by Taylor & Francis Group, LLC
                            Bayesian Spatial Econometric Models             153

   A ﬁnal point regarding the Bayesian methodology is that inference pro-
ceeds identically for all Bayesian models implemented with MCMC methods.
The entire posterior distribution is available for all parameters in the model
allowing means, medians, or modes to be used as point estimates, and mea-
sures of dispersion are easily constructed. This is in contrast to cases where
alternatives to maximum likelihood estimation such as generalized method of
moments are adopted to solve diﬃcult spatial econometric problems. Here,
inference may require adopting an alternative paradigm, or reliance on asymp-
totic approximations whose statistical operational characteristics are not well-
understood.




© 2009 by Taylor & Francis Group, LLC
Chapter 6
Model Comparison


This chapter describes model comparison procedures that allow practition-
ers to draw inferences regarding various aspects of spatial econometric model
speciﬁcations. We focus on comparison of: 1) spatial versus non-spatial mod-
els, 2) models based on alternative spatial weight structures, and 3) models
constructed using diﬀerent sets of candidate explanatory variables.
   A variety of strategies and statistical methods for comparing alternative
model speciﬁcations are introduced in Section 6.1, with an applied illustration
of these ideas provided in Section 6.2. Section 6.3 turns attention to Bayesian
approaches to model comparison which provide a uniﬁed approach to the
various types of model comparison issues that confront practitioners. A series
of applied illustrations for these methods are provided in each section.




6.1        Comparison of spatial and non-spatial models
   When maximum likelihood estimation is used for spatial regression models,
inference on the spatial dependence parameter ρ can be based on a Wald test
constructed using an asymptotic t-test from the estimated variance-covariance
matrix, or a likelihood ratio test. These tests for spatial dependence versus
the null hypothesis of no dependence require maximum likelihood estimation
of the spatial model representing the alternative to the null hypothesis of no
spatial dependence.
   Since maximum likelihood estimation was cumbersome in the past, there
is a great deal of literature on Lagrange Multiplier test statistics that require
only estimation of the non-spatial model associated with the null hypothesis.
For example, Burridge (1980) proposed an LM test for least-squares against
the alternative SEM model taking the form shown in (6.1), where only least-
squares residuals denoted by e, and a spatial weight matrix W are needed.
The LM statistic in (6.1) follows an asymptotic χ2 (1) distribution.

                              LM = [e W e/(e e/n)]2 /tr(W 2 + W  W )    (6.1)
  This statistic is related to an I-statistic proposed by Moran (1948), which
has received a great deal of attention in the literature. This statistic also


                                                                             155
© 2009 by Taylor & Francis Group, LLC
156                                Introduction to Spatial Econometrics

involves only use of the residuals from least-squares. Anselin (1988b) proposed
LM tests for least-squares versus the SAR model, where again the appeal of
these tests was that they did not require maximum likelihood estimation of
the spatial model.
   Given the current availability of software that makes estimation of the fam-
ily of spatial regression models relatively simple and computationally fast, it is
easy to test for spatial dependence using inference on the spatial dependence
parameter ρ. This can be based on a t-test (constructed using the estimated
variance-covariance matrix) for the null hypothesis that ρ = 0, or based on a
likelihood ratio test that compares the spatial and non-spatial models.
   An example of this would be comparison of a non-spatial regression model,
which is nested within the spatial SAR model. Comparison of the non-spatial
and spatial SAR model likelihoods, or use of a t-statistic on the spatial depen-
dence parameter would allow one to draw an inference regarding the signiﬁ-
cance of spatial dependence in the dependent variable. A complication arises
because this test ignores possible spatial dependence in the disturbances, since
it conditions on a model speciﬁcation involving spatial dependence in the de-
pendent variable. It is also the case that a comparison of an ordinary non-
spatial regression versus SEM models would ignore spatial dependence in the
dependent variable, focusing only on dependence in the disturbances of the
model. Joint tests that have power against the other alternative have been
proposed by Anselin (1988b), as well as tests that are reported to be robust
to misspeciﬁcation involving the alternative form of dependence by Anselin,
Bera, Florax and Yoon (1996).
   This same issue arises when attempting to ascertain the appropriate model
speciﬁcation based on a comparison of likelihood function values, since SAR
models ignore error dependence and SEM models do not account for spatial
dependence in the dependent variable. The non-nested nature of these models
greatly complicates formal testing for both spatial dependence, as well as an
appropriate model speciﬁcation.
   However, as indicated in Chapter 2, the SDM model nests models involving
dependence in both the disturbances as well as the dependent variable. There
is too much emphasis in the spatial econometrics literature on use of statistical
testing procedures to infer the appropriate model speciﬁcation, and much of
this literature ignores the SDM model. We make a number of observations
regarding the beneﬁts and costs associated with alternative spatial regression
model speciﬁcations.
   The cost of ignoring spatial dependence in the dependent variable is rel-
atively high since biased estimates will result if this type of dependence is
ignored. In addition, ignoring this type of dependence will also lead to an
inappropriate interpretation of the explanatory variable coeﬃcients as rep-
resenting partial derivative impacts arising from changes in the explanatory
variables. In contrast, ignoring spatial dependence in the disturbances will
lead to a loss of eﬃciency in the estimates. As samples become large, eﬃ-
ciency becomes less of a problem relative to bias. Spatial data availability



© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                             157

has increased dramatically for a number of reasons, including: increasing
awareness of the need to consider variation in socio-economic relationships
over space; improvements in geographical information system software and
accompanying computational advances in geo-referencing sample data using
postal addresses; improved software for working with Census data sets; and
US government requirements that agencies make data available on the Inter-
net. Because of this, eﬃciency of estimates may be of less concern as we begin
analyzing larger spatial data samples. There is still the problem that ignor-
ing spatial dependence in the disturbances will lead to bias in the inferences
regarding dispersion of the estimates.
   This line of reasoning suggests an asymmetric loss function for practition-
ers interested in unbiased estimates, since the costs of ignoring spatial depen-
dence in the dependent variable is more likely to produce biased estimates
than ignoring dependence in the disturbances. Alternatively, the beneﬁts
from accounting for dependence in the disturbances are increased eﬃciency
of the estimates, whereas those arising from proper modeling of dependence
in the dependent variable are reductions in bias of the explanatory variable
coeﬃcients, as well as improved eﬃciency.
   In Chapter 2 we demonstrated that the presence of omitted variables in the
SEM model will lead to the true data generating process being that associated
with the SDM model. That is, use of the SDM model will help protect against
omitted variables bias. It was also shown that the SDM model nests both
spatial lag and spatial error models.
   Finally, we note that inclusion of variables such as W X in the SDM model
when the true DGP is the SAR model that does not include these variables
will not lead to biased estimates for the explanatory variable parameters. In
situations where omitted variables lead to the presence of W X in the model
relationship, use of the SAR model that excludes these variables leads to
omitted variables bias in the coeﬃcient estimates.
   Putting these ideas together allows us to consider reciprocal misspeciﬁcation
bias that can arise in the coeﬃcient estimates from a costs versus beneﬁts
perspective. We enumerate the implications for biased coeﬃcient estimates
in the SEM, SAR, SDM and SAC models from a reciprocal misspeciﬁcation
viewpoint below.1

    1. For cases where the true DGP is the SEM model, involving only spa-
       tial dependence in the disturbances, the SAR, SAC and SDM models
       will still produce unbiased but ineﬃcient coeﬃcient estimates. Inference
       regarding dispersion of the explanatory variables based on the asymp-
       totic variance-covariance matrix for the SAR model will be mislead-

1 We focus on the unbiasedness property of the coeﬃcient estimates in our reciprocal mis-

speciﬁcation considerations. In the presence of biased coeﬃcient estimates, we are less
concerned about correct inferences regarding the dispersion of the biased coeﬃcient esti-
mates.




© 2009 by Taylor & Francis Group, LLC
158                                Introduction to Spatial Econometrics

         ing, since error dependence is ignored when constructing the variance-
         covariance matrix. Error dependence is taken into account in the asymp-
         totic variance-covariance matrix of the SDM and SAC models.

    2. When the true DGP is the SAR model that includes spatial lag depen-
       dence, the SEM model would produce biased coeﬃcient estimates, the
       SAR, SDM and SAC models would produce unbiased estimates, with
       measures of coeﬃcient dispersion for the SDM and SAC models being
       correct. Recall that including variables such as W X in the model when
       their coeﬃcients are zero does not produce bias in the explanatory vari-
       ables estimates. Similarly, incorporating a model for spatial dependence
       in the disturbances where the dependence parameter is truly zero will
       not have an adverse impact on the SAC estimates for suﬃciently large
       samples.

    3. When the true DGP is the SDM model that includes both spatial lag de-
       pendence as well as spatial lags of the explanatory variables, the SEM,
       SAR and SAC coeﬃcient estimates will suﬀer from omitted variables
       bias, since these models do not include the spatially lagged explanatory
       variables W X. The SEM model will suﬀer additional bias due to ex-
       clusion of the spatial lag of the dependent variable. The correctness of
       inference regarding the biased coeﬃcient estimates for the SEM, SAR
       and SAC models becomes a moot issue here.

    4. When the true DGP is the SAC model that includes both spatial lag
       and spatial error dependence, the SAR and SDM models will produce
       unbiased coeﬃcient estimates, while the SEM model coeﬃcients will
       be biased because this model ignores the spatial lag of the dependent
       variable. Incorrect inferences regarding dispersion of the estimates are
       likely to arise for the SAR model from ignoring spatial dependence in
       the disturbances. The SDM model does not ignore spatial dependence
       in the disturbances, but implies a diﬀerent type of speciﬁcation for error
       dependence from that in the true SAC DGP. The impact on inference
       regarding dispersion of the unbiased SDM coeﬃcients in this type of
       situation is an issue that needs further exploration.

   The conclusion we draw is that the SDM is the only model that will pro-
duce unbiased coeﬃcient estimates under all four possible data generating
processes. Inference about the dispersion of the unbiased SDM coeﬃcient es-
timates in cases 1, 2 and 3 above will be correct, whereas case 4 is an issue
that requires exploration.
   We also reiterate our point from Chapter 2 that beginning with a DGP
based on simple error dependence, the presence of omitted variables will lead
to a model speciﬁcation that conforms to the SDM. Since omitted variables
are likely when dealing with regional data samples, this is another motivation
for use of the SDM model.



© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                      159



6.2        An applied example of model comparison
  There is a great deal of literature that examines regional production from
the standpoint of the new economic geography (Duranton and Puga, 2001;
Autant-Bernard, 2001; Autant-Bernard, Mairesse and Massard, 2007; Parent
and LeSage, 2008). A question of interest is the role of regional diﬀerences in
technology on production, Q. This is often explored using a constant returns
regional production function shown in (6.2), where A represents technology,
K capital and L labor inputs, and the shares parameter ψ is such that we
have constant returns to scale.

                                          Q = AK (1−ψ) Lψ                    (6.2)
  A total factor productivity relationship can be derived from the Cobb-
Douglas production function as shown in (6.3).


                                             lnQ = ψlnL + (1 − ψ)lnK + lnA
                  lnQ − ψlnL − (1 − ψ)lnK = lnA
                                              tfp = lnA                      (6.3)

  Our interest centers on whether the regional stock of patents can play the
role of the technology variable A in (6.3). Intuitively, the stock of corporate
patents in each region should reﬂect a proxy for technology used in regional
production.
  Patent stocks which we label A act as an empirical proxy for technology,
but these are unlikely to capture the true technology available to regions.
We posit the existence of unmeasured technology, which we label A∗ that is
excluded from the (log) linear relationship in (6.3). It has become a stylized
fact that empirical measures of regional technical knowledge A such as patent
applications, educational attainment, expenditures or employment in research
and development etc., exhibit spatial dependence (Autant-Bernard, Mairesse
and Massard, 2007; Parent and LeSage, 2008). If both the measured variable
A included in the empirical relationship (6.3) and the unmeasured excluded
variable A∗ exhibit spatial dependence, then our development in Chapter 2
indicates that a spatial regression relationship will result.
  Speciﬁcally, let the spatial autoregressive processes in (6.4) and (6.5) govern
spatial formation of technical knowledge stocks a = lnA and a∗ = lnA∗ . The
n × 1 vector a reﬂects (logged) cross-sectional observations on regional tech-
nology in a sample of n regions, and we have introduced zero mean, constant
variance disturbance terms u, v, ε, along with an n × n spatial weight matrix
W reﬂecting the connectivity structure of the regions. The scalar parameters
φ and ρ reﬂect the strength of spatial dependence in a and a∗ .



© 2009 by Taylor & Francis Group, LLC
160                                Introduction to Spatial Econometrics



                                            a = φW a + u                               (6.4)
                                           a∗ = ρW a∗ + v                              (6.5)
                                            v = uγ + ε                                 (6.6)
                                            u ∼ N (0, σu2 In )
                                            v ∼ N (0, σv2 In )
                                            ε ∼ N (0, σε2 In )

   The relationship in (6.6) reﬂects simple (Pearson) correlation between shocks
(u, v) to technology stocks a and a∗ when the scalar parameter γ = 0. The
particular type of spatial regression that results will depend on whether there
is correlation between the shocks (γ = 0), or no correlation (γ = 0).
   If we begin with the relationship in (6.7), where we use y to denote tfp
which is logged, and use the deﬁnitions in (6.4) to (6.6), we arrive at (6.8).2


                           y = βa + a∗                                                 (6.7)
                           y = ρW y + a(β + γ) + W a(−ρβ − φγ) + ε                     (6.8)
                           y = ρW y + η1 a + η2 W a + ε

   The expression in (6.8) represents a spatial Durbin model (SDM). This
model subsumes the spatial error model SEM: (In − ρW )y = (In − ρW )aβ + ε,
as a special case when the parameter γ = 0 indicating no correlation in shocks
to measured and unmeasured technical knowledge, and when the restriction
η2 = −ρη1 is true. A simple likelihood-ratio test of the SEM versus SDM
model can be used to test the restriction η2 = −ρη1 .
   Another way to view the condition γ = 0 is that the included variable a and
excluded variable a∗ are not correlated, since correlation between the shocks,
u, v implies correlation between a and a∗ . In the trivial case of no correlation,
the omitted variable a∗ does not exert bias on our model estimates, which
can be seen from β + γ = β, when γ = 0. Conventional omitted variables
treatment considers the non-trivial case where correlation exists between the
included and excluded variables so that γ = 0. A related point is that γ = 0
will lead to a rejection of the common factor restriction since the coeﬃcient
η1 = (β + γ) will not be equal to −ρη2 when γ = 0, since η2 = (−ρβ − φγ).
Intuitively, the only way an SEM model can be justiﬁed is if: 1) there are no
omitted variables in the model or 2) if the included and excluded variables, a
and a∗ do not exhibit correlation. An omitted variable that is correlated with
the stock of technical knowledge variable included in the model will lead to

2 Without loss of generality we could include an intercept term in the model, but ignore this

term in our discussion for simplicity.




© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                   161

a spatial regression model that must contain a spatial lag of the dependent
variable.
   In addition to testing the SDM versus SEM models, we can also test for
spatial dependence in measured knowledge stocks. For dependence in mea-
sured knowledge stocks we can produce maximum likelihood estimates for
the spatial autoregressive model: a = φW a + u, and rely on an asymptotic
t-statistic to test whether the scalar parameter φ is diﬀerent from zero.
   This development provides a formal motivation for inclusion of what is
known as a “spatial lag” of the explanatory variable W a in regression rela-
tionships that seek to explore knowledge spillover eﬀects in a spatial context.
Our development arrives at a spatial regression speciﬁcation as an econometric
means of addressing omitted variables, unlike the theoretical models of Er-
tur and Koch (2007) which directly include spatial dependence structures in
theoretical economic relationships to arrive at the same result. Our starting
point is a non-spatial theoretical relationship where included and excluded
explanatory variables exhibit spatial dependence, and the included and ex-
cluded variables are correlated by virtue of common (correlated) shocks to
the spatial autoregressive processes governing these variables. In the event
that the shocks are uncorrelated, we have an SEM model whereas correlation
of the shocks leads to an SDM model as the spatial data generating process.

6.2.1         The data sample used
   Following the same approach as in the application from Chapter 3, the
dependent variable tfp in the relationship (6.3) was calculated using 2002
real gross value added data (deﬂated by 1995 Euro prices) as the measure of
output Q, for a sample of 198 NUTS-2 European Union regions. The regions
represent the 15 pre-2004 EU member states. See Fisher, Scherngell and
Reisman (2008) for a complete description of the sample data.
   Calculated regional shares of labor for each region during 2002 were used
along with the assumption of constant returns to calculate regional tfp: lnQ −
s  lnL − (1 − s)  lnK, where  represents the Haddamard (element-by-
element) product of the n × 1 vector of regional shares and the n × 1 vectors
of regional labor L and capital K.

6.2.2         Comparing models with diﬀerent weight matrices
  To implement our model we require a spatial weight matrix W , which can
be constructed in a number of diﬀerent ways. We could rely on a ﬁrst-order
contiguity weight matrix or a nearest-neighbor weight matrix based on m
nearest-neighboring regions. Of course, we would row-normalize the weight
matrices for reasons set forth in Chapter 4.
  There is the question of which weight matrix is most appropriate for our
model and sample data, and if we rely on a nearest-neighbor matrix W , the
number m of neighbors to use must be speciﬁed. One approach to take would



© 2009 by Taylor & Francis Group, LLC
162                                Introduction to Spatial Econometrics

be to estimate models based on diﬀerent spatial weight matrices and examine
the log-likelihood function values. A Bayesian approach would rely on the
log-marginal likelihood and associated model probabilities. Details regarding
Bayesian model comparison are set forth in Section 6.3, but we note that
given a set of models based on alternative spatial weight matrices posterior
model probabilities for each model can be calculated. The model exhibiting
the highest posterior model probability is that which best ﬁts both the data
and any prior distributions assigned for the parameters.

  Table 6.1 shows the log-likelihood function values and posterior model prob-
abilities associated with models based on nearest-neighbor weight matrices
with m = 3, 4, . . . , 9 and a spatial contiguity weight matrix. Both sets of
results point to a seven nearest neighbor spatial weight matrix. In smaller
spatial samples such as the 198 observation sample used here, there may be
some uncertainty regarding the appropriate number of nearest neighbors to
employ. The Bayesian posterior model probabilities point to this uncertainty
regarding m = 6, 7, 8. We note that it is not in general possible to use formal
tests for signiﬁcant diﬀerences between the log-likelihood function values for
models based on diﬀerent weight matrices, since a model based on m = 7
does not generally nest one based on m = 6. This is one advantage of using
Bayesian posterior model probabilities which do not require nested models to
carry out these comparisons.


                        TABLE 6.1:        Spatial weights model comparison
                           Spatial Weights Log-likelihood Bayesian model
                                           function values probabilities
                           m=3                  −44.0759         0.0000
                           m=4                  −36.6702         0.0004
                           m=5                  −35.7321         0.0009
                           m=6                  −30.8378         0.1202
                           m=7                  −29.1900         0.6185
                           m=8                  −30.5063         0.1718
                           m=9                  −31.2139         0.0882
                           Contiguity           −51.0740         0.0000




   One approach to dealing with the uncertainty regarding models based on
alternative weight matrices is to test for similar estimates and inferences from
models based on weight matrices reﬂecting m = 6, 7, 8, which we illustrate
here. Table 6.2 presents maximum likelihood model estimates for the three
diﬀerent spatial weight structures, illustrating that the coeﬃcients do not vary
greatly for these three alternative spatial weight speciﬁcations. We will discuss
a more formal approach based on Bayesian model averaging in Section 6.3.



© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                      163
                        TABLE 6.2:    Estimates comparison for varying
                        weights
                         Parameters Coeﬃcient t-statistic z-probability
                                                        m=6
                           constant         0.6396     3.47   0.0005
                           a                0.1076     5.13   0.0000
                           W ·a            −0.0111    −0.34   0.7286
                           ρ                0.6219     8.86   0.0000
                           σ2               0.1490      NA     NA
                                                        m=7
                           constant         0.5684     3.10   0.0019
                           a                0.1109     5.33   0.0000
                           W ·a            −0.0160    −0.48   0.6267
                           ρ                0.6469     9.11   0.0000
                           σ2               0.1470      NA     NA
                                                        m=8
                           constant         0.5600     2.93   0.0033
                           a                0.1136     5.43   0.0000
                           W ·a            −0.0255    −0.76   0.4458
                           ρ                0.6629     9.07   0.0000
                           σ2               0.1496      NA     NA




6.2.3         A test for dependence in technical knowledge
   As indicated, we can test for dependence in measured knowledge stocks
a using maximum likelihood estimates for the spatial autoregressive model:
a = β0 ιn + φW a + u, and rely on a t-statistic to test whether the scalar
parameter φ is diﬀerent from zero. Results from this spatial autoregression
using a spatial weight matrix based on m = 7 nearest neighbors are shown in
Table 6.3. From the table we see that φ = 0.7089 with an associated t-statistic
of 11.44 leading us to conclude that regional knowledge stocks exhibit spatial
dependence, consistent with our assumption.


                        TABLE 6.3:       Tests for spatial dependence in
                        technical knowledge
                            Measurable knowledge: a = β0 ιn + φW a + u
                           Parameters Coeﬃcient t-statistic   z-probability
                           β0         1.7187     4.54         0.0000
                           φ          0.7089    11.44         0.0000




© 2009 by Taylor & Francis Group, LLC
164                                Introduction to Spatial Econometrics

6.2.4         A test of the common factor restriction
   The other test of interest is a comparison of the log-likelihood function
values from SDM versus SEM models. A likelihood ratio test provides a test
of the common factor restriction: η2 = −ρη1 . Given the results in Table 6.3
showing spatial dependence in observed knowledge stocks, we would expect a
rejection of the SEM model in favor of the SDM model. The log-likelihood
was −29.19 for the SDM model and −32.15 for the SEM model both based
on a seven nearest neighbor spatial weight matrix. This leads to a diﬀerence
of 2.96, and twice this diﬀerence in magnitude (5.92) represents a rejection of
the SEM model in favor of the SDM model using the 95% critical value for
χ2 (1) which equals 3.84, but not at the 99% level where the critical value is
6.635. The single degree of freedom reﬂects the single parameter restriction.
   We can also test whether the more parsimonious SAR model that excludes
the spatial lag of knowledge stocks is more consistent with the sample data
than the SDM model using a likelihood ratio test. The log-likelihood for the
SAR model was −34.42, leading to a diﬀerence with the SDM model of 5.23.
Twice this diﬀerence (10.46) exceeds the 99% critical value of 6.635, allowing
us to reject the SAR model in favor of the SDM model. Another way to test
this restriction is to consider the distribution for the non-linear parameter
combination −ρ · η1 versus that for η2 based on the SDM model estimates.
This can be accomplished using MCMC model estimation in conjunction with
non-informative prior distributions for the model parameters. This will lead
to posterior estimates for these parameters that should exhibit the same dis-
tribution as those from maximum likelihood estimation. Posterior means and
95% and 99% upper and lower credible intervals were constructed using 5,000
draws from MCMC estimation of the model, with the results shown in Ta-
ble 6.4.
   From the table we see that the posterior mean for the distribution of −ρη1 =
−0.0687 is near the lower 0.95 credible interval for the parameter η2 , consistent
with the likelihood ratio test results. As in the case of the likelihood ratio
test, the lower 0.99 credible interval for the parameter η2 (−0.0830) spans
the posterior mean value for −ρη1 (−0.0687), precluding a 99% probability
inference against the common factor restriction.
   An important empirical implication is that if the included measures of
knowledge stocks are not correlated with excluded knowledge available to re-
gions, then no spatial lag of the dependent variable is implied in the resulting
model. In the case found here, there is strong but not overwhelming evidence
that included and excluded variables measuring regional knowledge stocks are
correlated. This implies that a spatial lag of the dependent variable should
be used in the model, as well as a spatial lag of the explanatory variable W a.
Since omitting either of these from the empirical model will lead to biased
and inconsistent estimates for the parameters, it seems prudent to proceed
using the SDM model to examine the impact of knowledge stocks on y = tfp,
the focus of this example.



© 2009 by Taylor & Francis Group, LLC
                                         Model Comparison                               165
           TABLE 6.4:                 Bayesian test for common factor restriction
              Parameters              0.99     0.95       Mean     0.95        0.99
                                     Lower    Lower               Upper       Upper
              −ρη1                  −0.1046 −0.0937 −0.0687 −0.0452 −0.0366
              η2                    −0.0830 −0.0634 −0.0093        0.0431      0.0668



6.2.5         Spatial eﬀects estimates
   A second empirical implication is that calculation of the response of y = tfp
to changes in regional knowledge stocks, e.g., ∂y/∂a will diﬀer depending on
which model is appropriate. For the case of the SEM model, the coeﬃcient
estimates have the usual least-squares regression interpretation, so the log-log
form of the relationship leads directly to elasticity estimates for the response
of y to variation in the levels of knowledge stocks across the regional sample.
For this case, there are no spatial spillover impacts and the response of y to
changes in knowledge a is the same as that which would be inferred from a
simple least-squares regression model.
   In our case where the sample data was judged to be consistent with the
SDM model, ∂y/∂a takes a more complicated form and allows for spatial
spillover impacts from changing ai in one region i on yj in other regions j = i.
Speciﬁcally, (6.9) shows the partial derivative which takes the form of an n×n
matrix (see Chapter 2 for a detailed derivation).


                                ∂y/∂a = (In − ρW )−1 (In η1 + W η2 )               (6.9)
                                    η1 = (β + γ)
                                        η2 = (−ρβ − φγ)

   This important aspect of assessing the impact of spatial spillovers appears
to have been overlooked in much of the spatial econometrics literature. Past
empirical studies proxy knowledge available in other regions using either a
spatial lag of innovation output from neighboring regions measured through
their patents (Anselin, Varga and Acs, 1997), or by explanatory variables re-
ﬂecting research eﬀort in neighboring regions. They then proceed to assess the
magnitude and signiﬁcance of spatial spillovers using the parameters associ-
ated with these spatially lagged explanatory variables. It should be clear from
the partial derivative in (6.9) that the coeﬃcient η2 used in past studies is an
incorrect representation of the impact of changes in the variable a on y. In
fact, the parameter η2 in our model is negative and statistically insigniﬁcant,
but we will see that positive and statistically signiﬁcant spatial spillovers exist
based on a correct measure.
   As motivated in Chapter 2, we can calculate scalar summary measures
for the n × n matrix of partial derivatives that represent direct and indirect



© 2009 by Taylor & Francis Group, LLC
166                                Introduction to Spatial Econometrics

(spatial spillover) impacts on the dependent variable (total factor productiv-
ity) that arise from changing the explanatory variable a. The main diagonal
of the matrix: (In − ρW )−1 (In η1 + W η2 ) represents own partial derivatives
(direct impacts), while the oﬀ-diagonal elements correspond to cross-partial
derivatives (indirect impacts). These are averaged to produce scalar summary
measures using the average of the main diagonal elements from the matrix and
the row- or column-sums of the matrix elements excluding the diagonal. In
addition to these scalar measures of the mean direct and indirect impacts,
we also construct measures of dispersion that can be used to draw inferences
regarding the statistical signiﬁcance of the direct and indirect eﬀects. These
are based on simulating parameters from the normally distributed parameters
η1 , η2 and ρ, using the maximum likelihood estimates and associated variance-
covariance matrix. The simulated draws are then used in the computationally
eﬃcient formulas from Chapter 4 to calculate the implied distribution of the
scalar summary measures.
   An alternative to simulating draws based on maximum likelihood estimates
of the parameters and variance-covariance matrix is to rely on MCMC draws
from Bayesian estimation of the model using a diﬀuse prior for all model
parameters. This will produce results that are centered on the maximum like-
lihood estimates which were reported in the applied illustration of Chapter 3.
Table 6.5 presents these estimates based on 5,000 MCMC draws from Bayesian
estimation of the model. The 5,000 draws were used to construct empirical
estimates of the lower and upper 0.95 and 0.99 credible intervals, reported in
the table. The scalar summaries shown in the table reﬂect cumulative impacts
aggregated over space, since: (In − ρW )−1 = In + ρW + ρ2 W 2 + . . ., we are
examining eﬀects that fall on ﬁrst-order neighbors (W ), second-order neigh-
bors (W 2 ), and so on, cumulatively. The table reports impact estimates based
on alternative spatial weight matrices constructed using m = 6, 7, 8 nearest
neighbors.
   From the table, we see that the cumulative impact estimates are not very
sensitive to the particular spatial weight matrix used, producing similar esti-
mates and identical inferences regarding the signiﬁcance of the impacts. The
direct eﬀects from changing knowledge stocks on regional total factor produc-
tivity are positive and signiﬁcantly diﬀerent from zero using the 0.99 lower
and upper bounds. The indirect eﬀects estimates are positive and diﬀerent
from zero using the 0.95 bounds, but the 0.99 lower bound spans zero, sug-
gesting we cannot be 99% conﬁdent that positive spatial spillovers exist. The
mean indirect estimates for the case of m = 7 are around 1.5 times the size
of the direct eﬀects, suggesting a possible role for spatial spillovers arising
from regional patent stocks. As noted in Chapter 2, we interpret the eﬀects
parameters in relation to movements from one steady-state equilibrium to
another. Given the log-transformations applied to both the dependent vari-
able total factor productivity and the explanatory variable patent stocks, we
can interpret the eﬀects magnitudes as elasticities. This implies that a 10%
increase in the average stock of regional (corporate) patents would lead to a



© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                          167
                TABLE 6.5:              Cumulative knowledge stocks eﬀects
                estimates
                  Eﬀects                  0.99    0.95     Mean    0.95    0.99
                                         Lower   Lower            Upper   Upper
                                       m = 6 Neighbors weight matrix
                   direct eﬀect    0.0655 0.0804 0.1156 0.1508 0.1667
                   indirect eﬀect −0.0158 0.0244 0.1479 0.3003 0.3853
                   total eﬀect     0.0903 0.1358 0.2635 0.4242 0.5215
                                       m = 7 Neighbors weight matrix
                   direct eﬀect    0.0682 0.0837 0.1184 0.1537 0.1681
                   indirect eﬀect −0.0176 0.0290 0.1613 0.3314 0.4361
                   total eﬀect     0.0998 0.1396 0.2798 0.4553 0.5677
                                       m = 8 Neighbors weight matrix
                   direct eﬀect    0.0717 0.0848 0.1207 0.1565 0.1727
                   indirect eﬀect −0.0356 0.0090 0.1496 0.3244 0.4519
                   total eﬀect     0.0783 0.1247 0.2703 0.4561 0.5855




2.8% increase in total factor productivity (based on the m = 7 model). This is
the cumulative eﬀect after enough time has elapsed to move the relationship
to a new steady state equilibrium. Of the 2.8% increase in factor produc-
tivity, around 1.2 percent would result from direct impacts and 1.6 percent
from indirect impacts (spatial spillovers). These results indicate that factor
productivity is inelastically related to regional knowledge stocks, with a 0.28
implied elasticity coeﬃcient.
   This example shows that likelihood-based model comparison tests can be
useful in providing guidance to practitioners, and there is a large spatial econo-
metrics literature devoted to these. However, we wish to caution against some
testing practices. Most tests are developed against speciﬁc alternatives and
performing multiple tests that have not been designed to work together co-
herently may not yield desirable outcomes. This is a particular problem with
tests applied to non-nested models and when decisions are made on the basis
of sequential tests since results may vary with the sequence used. In addition,
exclusive reliance on statistical tests to determine (1) which model speciﬁca-
tion is appropriate, (2) which explanatory variables exert a signiﬁcant impact
and (3) what type of spatial weight matrix to use is likely to constitute overuse
of the sample data.
   Speciﬁcally, we would like to caution against the common practice of test-
ing to choose between the SAR and SEM. In the early days of the spatial
literature where sample sizes were very small, possible eﬃciency gains may
have justiﬁed this practice. However, current spatial data sets contain suﬃ-
cient observations to examine more general alternatives such as the SDM. For
larger data sets issues such bias and interpretation may be more important



© 2009 by Taylor & Francis Group, LLC
168                                Introduction to Spatial Econometrics

than the variance of the estimates. We have argued that there are strong
econometric motivations for the SDM model, which subsumes the SAR and
SEM models as a special case. Further, this model arises quite naturally in
the presence of omitted variables that are correlated with included variables.
  In the next section we discuss Bayesian approaches to model comparison,
which hold some advantages over likelihood-based methods. One advantage is
the ability to compare non-nested models that create diﬃculties for likelihood-
ratio tests. A second advantage is that likelihood-based tests depend on
the quality of the point estimates used to evaluate the likelihood function.
Bayesian model comparison methods integrate over the model parameters to
produce inferences regarding alternative models that are unconditional on
speciﬁc values taken by the model parameters.




6.3        Bayesian model comparison
   Zellner (1971) sets forth the basic Bayesian theory behind model comparison
for non-spatial regression models where a discrete set of m alternative models
are under consideration. The approach involves specifying prior probabilities
for each model3 as well as prior distributions for the regression parameters.
Posterior model probabilities are then calculated and used for inferences re-
garding the consistency of alternative regression models with the sample data
and prior.
   When we compare models based on alternative spatial weight structures,
we typically have a small number m of alternative models, and the models
diﬀer only in terms of the type of spatial weight matrix used. A Bayesian
approach for comparing spatial regression models based on diﬀering spatial
weights is set forth in Section 6.3.1.
   An alternative scenario arises when comparing models based on diﬀerent
sets of explanatory variables. In these situations a small set of 15 candi-
date explanatory variables will lead to 215 = 32, 768 possible models, and
a larger set of 50 candidate variables results in 250 = 1.1259e + 015 mod-
els. This makes it infeasible to calculate posterior model probabilities for the
large number of possible models. A Markov Chain Monte Carlo model com-
position methodology known as M C 3 proposed by Madigan and York (1995)
has gained popularity in the non-spatial regression literature (e.g. Dennison,
Holmes, Mallick and Smith (2002); Fernández, Ley, and Steel (2001)). Since
the question of which explanatory variables are most important often arises
in applied regression modeling, the M C 3 methods have gained popularity in


3 The alternative models are often taken as equally likely, so each model is assigned the

same prior probability equal to 1/m, where m is the number of models under consideration.




© 2009 by Taylor & Francis Group, LLC
                                         Model Comparison                      169

the regression literature. In Section 6.3.2 we describe an extension to the case
of spatial regression models proposed in LeSage and Parent (2007).


6.3.1         Comparing models based on diﬀerent weights
   We assume that a small set of m alternative spatial regression models
M = M1 , M2 , . . . , Mm are under consideration, each based on a diﬀerent
spatial weight matrix. Other model speciﬁcation aspects such as the explana-
tory variables and type of model, (e.g., SAR, SDM) are held constant. Prior
probabilities are speciﬁed for each model, which we label π(Mi ), i = 1, . . . , m,
as well as prior distributions for the parameters π(η), η = (ρ, α, β, σ2 ), where
α represents the intercept term, β the k parameters associated with the ex-
planatory variables, ρ the spatial dependence parameter and σ 2 the constant,
scalar noise variance parameter.
   If the sample data are to determine the posterior model probabilities, the
prior probabilities should be set equal to 1/m, making each model equally
likely a priori. These are combined with the likelihood for y conditional on
η as well as the set of models M , which we denote p(D|η, M ). The joint
probability for the set of models, parameters and data takes the form in
(6.10), where D represents the sample data.

                                p(M, η, D) = π(M )π(η|M )p(D|η, M )         (6.10)

  Application of Bayes’ rule produces the joint posterior for both models and
parameters as shown in (6.11).

                                               π(M )π(η|M )p(D|η, M )
                                p(M, η|D) =                                 (6.11)
                                                       p(D)

   The posterior model probabilities take the form in (6.12), which requires
integration over the parameter vector η. Numerical integration over the (k +
3) × 1 parameter vector could be diﬃcult in cases where k is even moderately
large. We use k to represent the number of explanatory variables, and we
have three additional parameters for the intercept, spatial dependence and
noise variance.
                                                    %
                                        p(M |D) =       p(M, η|D)dη,        (6.12)

   As a speciﬁc example, consider the SAR model, where the likelihood func-
tion for the parameters η = (α, β, σ 2 , ρ), based on the data D = {y, x, W }
takes the form shown in (6.13), where we include the spatial weight matrix W
to indicate that the likelihood is conditional on the particular weight matrix
employed in the model. That is, the weight matrix is taken as given and
treated in the same manner as the sample data information in y, X.



© 2009 by Taylor & Francis Group, LLC
170                                Introduction to Spatial Econometrics



                                                                             1 
                           L(η|D) ∝ (σ 2 )−n/2 |In − ρW |exp{−                   e e}   (6.13)
                                                                            2σ 2
                                    e = (In − ρW )y − αιn − Xβ

   An essential part of any Bayesian analysis is assigning prior distributions
for the parameters in η. This can be accomplished using diﬀerent approaches.
We use the NIG prior for β and σ 2 , but rely on Zellner’s g-prior for the normal
distribution parameters assigned for β in the model. An uninformative prior
is assigned to the intercept parameter α, and the B(d, d) prior introduced in
Chapter 5 is assigned to the parameter ρ.
   LeSage and Parent (2007) point out that a great deal of computational sim-
plicity arises if we employ Zellner’s g-prior (Zellner, 1986) for the parameters
β in the NIG prior for the SAR model. This normal prior distribution takes
the form shown in (6.14), and we assign the same prior for the parameters
β in all models. We can simply assign zero values for the prior mean vector
β0 , but must pay attention to scale model variables so this prior is relatively
consistent with zero values for the model parameters. For example, we would
not want to use this type of prior if coeﬃcient estimates took on very large
magnitudes that were far from zero.
   The parameter g controls the dispersion of the prior which reﬂects our
uncertainty regarding the prior mean setting for β0 . A smaller value of g
leads to greater dispersion in the prior, so an automatic setting of 1/n, where
n is the sample size works to create a relatively uninformative prior, and
1/n2 is even more uninformative.4 For the case we consider here involving
comparison of alternative spatial weight matrices, one can rely on a completely
uninformative prior, but we will reuse the g-prior in our discussion of the M C 3
method in the next section.

                                        πb (β|σ 2 ) ∼ N [β0 , σ 2 (gX  X)−1 ]          (6.14)

   Using the NIG prior for β and σ 2 with a normal prior, N (β0 , σ 2 (gX  X)−1 ),
for the parameters β, and inverse gamma prior, IG(a, b), for σ 2 shown in
(6.15) allows us to draw on the conjugate nature of these two prior distribu-
tions. We note that the parameterization for the inverse gamma prior takes
a slightly diﬀerent form than that used in Chapter 5, which proves helpful
in this development. The case of a non-informative prior on σ 2 arises when
a = b = 0.

                                             (ab/2)a/2 2 −( a+2 )       ab
                            πs (σ 2 ) ∼               (σ )   2    exp(− 2 )             (6.15)
                                              Γ(a/2)                   2σ


4 Setting g = 1/(1e + 15) would in eﬀect produce a totally uninformative prior.




© 2009 by Taylor & Francis Group, LLC
                                           Model Comparison                             171

  As noted, we rely on the B(1.01, 1.01) prior from Chapter 5 with these prior
parameter settings which produce a relatively uninformative prior that places
very little prior weight on end points of the (−1, 1) interval for ρ.
                                                          
  Using Bayes’ theorem, the log marginal likelihood p(M, η|D)dη where
η = (α, β, σ 2 , ρ) for the SAR model can be written as the integral in (6.16),
and associated deﬁnitions in (6.17) (LeSage and Parent, 2007).

                         %
                          πb (β|σ 2 )πs (σ 2 )πr (ρ)p(D|α, β, ρ, σ 2 ) dβ dσ 2 dρ     (6.16)
                                                  %
                               −(n+k)/2       1/2                      1
                     = κ1 (2π)            |C|        |In − ρW | n+a+k+2
                                                                σ
                                1
                     × exp{− 2 [ab + S(ρ) + β  Cβ
                               2σ
                     + (β − β̂(ρ)) (X  X)(β − β̂(ρ))]}πr (ρ) dβ dσ 2 dρ,

with,


                                                  a −1  ab a/2
                                        κ1 = Γ                                        (6.17)
                                           2                2
                                 S(ρ) = e(ρ) e(ρ)
                                  e(ρ) = (In − ρW )y − X β̂(ρ) − α̂ιn
                                    C = gX  X
                                  β̂(ρ) = (X  X)−1 X  (In − ρW )y
                                      α̂ = ȳ − ρW y
                                   W y = (1/n)            (W y)i
                                                      i
                                        X̄ = 0

  Using the properties of the multivariate normal pdf and the inverted gamma
pdf to analytically integrate with respect to β and σ 2 , we can arrive at an
expression for the log marginal that will be required for model comparison
purposes. We note that since the intercept term is common to all models,
this leads to n − 1 as the degrees of freedom in the posterior (6.18).


                                                  g k/2
                          p(ρ|D) = κ2 (              )                                (6.18)
                                                 1+g
                                                                     n+a−1
                                        × |A|[ab + S(ρ) + Q(ρ)]−       2     πr (ρ)

Where the terms used in the posterior expression are deﬁned below.



© 2009 by Taylor & Francis Group, LLC
172                                Introduction to Spatial Econometrics



                     A = In − ρW
                                    
                          Γ n+a−1          a     n−1
                     κ2 =       2
                                a     (ab) 2 π − 2
                            Γ 2
                            1
            S(ρ) + Q(ρ) =       [Ay − X β̂(ρ) − α̂ιn ] [Ay − X β̂(ρ) − α̂ιn ]
                          g+1
                              g
                          +       [Ay − α̂ιn ] [Ay − α̂ιn ].
                            g+1
   An important point regarding expression (6.18) is that we must rely on
univariate numerical integration over the parameter ρ to convert this to the
scalar expression necessary to calculate p(M |y) needed for model comparison
purposes, where we use y to represent the data. This is a contrast with con-
ventional regression models where analytical integration over the parameters
β and σ leads to a scalar expression that can be used to compare models
(Fernández, Ley, and Steel, 2001). However, we provide details regarding a
computationally simple approach to carrying out the univariate numerical in-
tegration in the chapter appendix following LeSage and Parent (2007).5 The
case of the SDM model is identical to the SAR model presented here with      the
explanatory variables matrix X replaced by the matrix X̃ = X W X .
   We draw upon the Bayesian theory of model comparison to consider com-
parison of a set of models based on m alternative weight matrices W(i) , i =
1, . . . , m. Each of these is considered a diﬀerent model denoted by a likelihood
function and prior for the parameters θ = (ρ, β, σ2 ).

                                                  p(y|θ(i) , W(i) )p(θ(i) |W(i) )
                            p(θ(i) |y, W(i) ) =                                     (6.19)
                                                            p(y|W(i) )
  Use of Bayes’ rule set forth in Chapter 5 to explode terms like p(y|W(i) )
produces posterior model probabilities, the basis for inference about diﬀerent
models/spatial weight matrices, given the sample data.

                                                       p(y|W(i) )p(W(i) )
                                        p(W(i) |y) =                                (6.20)
                                                            p(y)
p(y|W(i) ) is the marginal likelihood for this model comparison situation. As
we have seen, the key quantity needed for model comparison is the marginal
likelihood:
                              %
                  p(y|W(i) ) = p(y|θ(i) , W(i) )p(θ(i) |W(i) )dθ(i)     (6.21)

  Bayesians often avoid dealing with p(y), by relying on the posterior odds
ratio for model i versus model j:

5 Analogous expressions for the SEM model are presented in LeSage and Parent (2007).




© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                    173


                                        p(W(i) |y)   p(y|W(i) )p(W(i) )
                              P Oij =              =                      (6.22)
                                        p(W(j) |y)   p(y|W(j) )p(W(j) )
   A virtue of this approach is that posterior model probabilities or Bayes’
factors can be used to compare non-nested models. This allows the method
to be used for comparing models based on: 1) diﬀerent spatial weight matrices;
2) diﬀerent model speciﬁcations (including those that may not be members of
the family of models set forth in Chapter 2; and 3) models based on diﬀerent
sets of explanatory variables contained in the matrix X.
   An issue that arises with this approach is the need to avoid a paradox
pointed out by Lindley (1957). He noted that when comparing models with
diﬀerent numbers of parameters that rely on diﬀuse priors, the simpler model
is always favored over a more complex one, irrespective of the sample data
information. An implication is that two models with an equal number of
parameters can be compared using diﬀuse priors, but for model comparisons
that involve changes in the number of parameters, strategic priors must be
developed and used.
   A strategic prior would recognize that ﬂat priors can in fact be highly
informative because assigning a diﬀuse prior over a parameter value assigns
a large amount of prior weight to values of the parameter that are very large
in absolute value terms. An implication is that there is no natural way to
encode complete prior ignorance about parameters. A strategic prior in the
context of model comparison involving alternative spatial weight matrices
would be one that explicitly recognizes the role that parameters and priors
play in controlling model complexity. Given this, we could explore how prior
settings impact posterior model selection regarding the alternative spatial
weight matrices.
   For the case of homoscedastic disturbances in the SAR and SEM spatial
regression models from Chapter 2, we have seen that we can analytically inte-
grate out the parameters β and σ to arrive at an expression for the marginal
likelihood that depends only on the parameter ρ. This is the only prior distri-
bution we need be concerned with, since our comparison of models based on
diﬀerent weight matrices does not depend on the parameters β and σ, because
these have been integrated out. Hepple (1995b) provides expressions for the
log-marginal likelihood when non-informative priors are used for a number of
spatial regression models including the SAR and SEM.


6.3.2         Comparing models based on diﬀerent variables
  A large literature on Bayesian model averaging over alternative linear re-
gression models containing diﬀering explanatory variables exists (Fernández,
Ley, and Steel, 2001). The Markov Chain Monte Carlo model composition
(M C 3 ) approach introduced in Madigan and York (1995) is set forth here for
the case of spatial regression models. For a regression model with k possible



© 2009 by Taylor & Francis Group, LLC
174                                Introduction to Spatial Econometrics

explanatory variables, there are 2k possible ways to select regressors to be
included or excluded from the model. For k = 15, we have 32,768 possible
models, ruling out computation of the log-marginal for all possible models as
impractical.
   The motivation for this literature is the classic trade-oﬀ between attempt-
ing to include a suﬃcient number of explanatory variables in our models to
overcome potential omitted variables bias and inclusion of redundant vari-
ables that decrease precision of the estimates. It is precisely this trade-oﬀ
that model averaging seeks to address.
   The M C 3 method of Madigan and York (1995) devises a strategic stochastic
Markov chain process that can move through the potentially large model space
and sample regions of high posterior support. This eliminates the need to
consider all models by constructing a sampler that explores relevant parts of
the very large model space. If we let M denote the current model state of
the chain, models are proposed using a neighborhood, nbd(M ) which consists
of the model M itself along with models containing either one more variable
(labeled a ‘birth step’), or one less variable (a ‘death step’) than M . A
transition matrix, q, is deﬁned by setting q(M → M  ) = 0 for all M  ∈
nbd(M ) and q(M → M  ) constant for all M  ∈ nbd(M ). The proposed
model M  is compared to the current model state M using the acceptance
probability shown in (6.23).
                                                
                                       p(M  |y)
                               min 1,                                    (6.23)
                                        p(M |y)
   Use of univariate numerical integration methods described in the chapter
appendix allows us to construct a Metropolis-Hastings sampling scheme that
implements the M C 3 method. A vector of the log-marginal values for the
current model M is stored during sampling along with a vector for the pro-
posed model M  . These are then scaled and integrated to produce the ratio
p(M  |y)/p(M |y) in (6.23) that determines acceptance or rejection of the pro-
posed model. In contrast to conventional regression models, there is a need
to store log-marginal density vectors for each unique model found during the
MCMC sampling to calculate posterior model probabilities over the set of all
unique models visited by the sampler.
   Although the use of birth and death processes in the context of Metropolis-
Hastings sampling will theoretically produce samples from the correct pos-
terior, Richardson and Green (1997) among others advocate incorporating a
“move step” in addition to the birth and death steps into the algorithm. We
rely on this approach as there is evidence that combining these move steps
improves convergence of the sampling process (Dennison, Holmes, Mallick
and Smith, 2002; Richardson and Green, 1997). The move step takes the
form of replacing a randomly chosen single variable in the current explana-
tory variables matrix with a randomly chosen variable not currently in the
model. Speciﬁcally, we might propose a model with one less explanatory vari-
able (death step) and then add an explanatory variable to this new model



© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                    175

proposal (birth step). This leaves the resulting model proposal with the same
dimension as the original one with a single component altered. This type
of sampling process is often labeled reversible jump MCMC. The model pro-
posals that result from birth, death and move steps are all subjected to the
Metropolis-Hastings accept/reject decision shown in (6.23), which is valid so
long as the probabilities of birth, death and move steps have equal probability
of 1/3.
   The Bayesian solution to incorporating uncertainty regarding speciﬁcation
of the appropriate explanatory variables into the estimates and inferences is
to average over alternative model speciﬁcations. This is in contrast with much
applied work that relies on a single model speciﬁcation identiﬁed using vari-
ous model comparison criterion that lead to a “most preferred model.” The
averaging involves weighting alternative model speciﬁcations by their poste-
rior model probabilities. We note that the M C 3 procedure identiﬁes models
associated with particular explanatory variables and assigns a posterior model
probability to each of these models. Like all probabilities, the posterior model
probabilities sum to unity, so they can be used as weights to form a linear
combination of estimates from models based on diﬀering explanatory vari-
ables. This weighted combination of sampling draws from the posterior are
used as the basis for posterior inference regarding the mean and dispersion of
the individual parameter estimates.
   Typically tests are performed with the aim of selecting a single best model
that excludes irrelevant variables. This approach ignores model uncertainty
which arises in our spatial regression model from two sources. One aspect
of model uncertainty is the appropriate spatial weight matrix describing con-
nectivity between regions used to specify the structure of spatial dependence.
The second aspect of model uncertainty arises from variable selection, which
sequential testing procedures ignore (Koop, 2003). As is typical in all regres-
sion models, we are also faced with parameter uncertainty. Fernández, Ley,
and Steel (2001) point to M C 3 in conjunction with Bayesian model averag-
ing as a way to accommodate both model and parameter uncertainty in a
straightforward and formal way.

6.3.3         An applied illustration of model comparison
   An important point to note about all spatial model comparison methods
is that their performance will depend on the strength of spatial dependence
in the sample data. We illustrate this point using the latitude-longitude co-
ordinates from a sample of 258 European Union regions to produce a data-
generated spatial sample. The location coordinates were used to construct
a spatial weight matrix based on the ﬁve nearest neighboring regions. This
weight matrix was used to generate a y-vector based on the spatial autore-
gressive model: y = ρW y + Xβ + ε. The explanatory variables matrix X
was generated as a three column matrix of standard normal random deviates,
and the three β parameters were all set to unity. The scalar noise variance



© 2009 by Taylor & Francis Group, LLC
176                                Introduction to Spatial Econometrics
              TABLE 6.6:       Posterior probabilities for models with
              diﬀering ρ and weight matrices
                m/ρ -0.5     -0.2     -0.1    0.0        0.1     0.2   0.5
                1     0.00 0.0000 0.0001 0.1091 0.0000 0.0000 0.00
                2     0.00 0.0000 0.0007 0.0936 0.0003 0.0000 0.00
                3     0.00 0.0000 0.0011 0.0956 0.0364 0.0000 0.00
                4     0.00 0.0001 0.0559 0.1168 0.0907 0.0008 0.00
                5∗    1.00 0.9998 0.8694 0.1369 0.4273 0.9872 1.00
                6     0.00 0.0001 0.0612 0.1402 0.2374 0.0116 0.00
                7     0.00 0.0000 0.0086 0.1484 0.1479 0.0003 0.00
                8     0.00 0.0000 0.0029 0.1594 0.0599 0.0000 0.00




parameter σ 2 was also set to one. The operational characteristics of any spec-
iﬁcation test to detect the true model structure will usually depend on the
signal/noise ratio in the data generating process, determined by the variance
of the matrix X relative to the noise variance, which we hold constant in this
data-generated illustration.
   A proper uniform prior was placed on the parameter ρ. For this example, all
models contain the same matrix X, diﬀering only with respect to the spatial
weight matrix.
   A series of seven models were generated based on varying ρ values ranging
from −0.5 to 0.5, with the parameters described above held constant. It
took around 4 seconds to produce posterior probabilities for a set of 8 models
based on spatial weight matrices constructed using 1 to 8 nearest neighbors
for this sample of 258 observations. Most of the time (3.3 seconds) was spent
computing the log-determinant term for the 8 diﬀerent weight matrices, using
the method of Pace and Barry (1997).
   The posterior model probabilities are presented in Table 6.6, for models
associated with m = 1, . . . , 8 neighbors and values of ρ ranging from −0.5 to
0.5. From the table, we see that positive or negative values of 0.2 or above
for ρ lead to high posterior probabilities associated with the correct model,
that based on m = 5 nearest neighbors. Absolute values of 0.1 or less for ρ
lead to less accurate estimates of the true data generating model, with the
posterior probabilities taking on a fairly uniform character for the case of
ρ = 0. Intuitively, when ρ is small or zero, it will be diﬃcult to assess the
proper spatial weight matrix speciﬁcation, since the spatial lag term, W y, in
the model is associated with a zero coeﬃcient.
   Another example is taken from the public choice literature (Turnbull and
Geon, 2006), where the dependent variable representing county government
services provision takes a form involving a Box-Cox type transformation.
Speciﬁcally, let g = GP φ denote the median voter’s public good consump-
tion, where G is government expenditures and P represents county popula-
tion. The scalar 0 < φ < 1 is a consumption congestion parameter. This



© 2009 by Taylor & Francis Group, LLC
                                           Model Comparison                                177

parameter reﬂects the degree of publicness with 0 representing a purely pub-
lic good and 1 a private good. If we model g = ρW g + Xβ + ε, we would
be interested in comparing models based on varying numbers of neighbors as
well as the parameter φ. A sample of government expenditures for 950 US
counties located in metropolitan areas, and 1,741 counties located outside of
metropolitan areas was used to form a SAR model with g as the dependent
variable and various explanatory variables (such as taxes, intergovernmental
aid and population in- and out-migration over the previous ﬁve years).
   Table 6.7 shows posterior model probabilities from a limited range of values
for φ, the congestion parameter and m, the number of neighbors that were
used in the model comparison. The range shown in the table is where pos-
terior probability mass was non-zero. These calculations required bivariate
evaluation of models over both parameters, but are still reasonably simple to
carry out.


                   TABLE 6.7:                 Posterior probabilities for varying values
                   of m and φ
                                                  Metropolitan county sample
                      M/φ               φ = 0.4   φ = 0.5 φ = 0.6 φ = 0.7 φ = 0.8
                      m=5               0.0000    0.0000 0.0000 0.0000 0.0000
                      m=6               0.0000    0.0038 0.0039 0.0000 0.0000
                      m=7               0.0000    0.1424 0.0980 0.0000 0.0000
                      m=8               0.0000    0.0763 0.0936 0.0001 0.0000
                      m=9               0.0000    0.1295 0.4380 0.0001 0.0000
                      m = 10            0.0000    0.0031 0.0055 0.0000 0.0000
                      m = 11            0.0000    0.0007 0.0027 0.0000 0.0000
                      m = 12            0.0000    0.0002 0.0012 0.0000 0.0000
                      m = 13            0.0000    0.0001 0.0005 0.0000 0.0000
                      m = 14            0.0000    0.0000 0.0000 0.0000 0.0000
                                              Non-metropolitan county sample
                      M/φ               φ = 0.3 φ = 0.4 φ = 0.5 φ = 0.6 φ = 0.7
                      m=6               0.0000 0.0000 0.0000 0.0000 0.0000
                      m=7               0.0000 0.0000 0.0004 0.0000 0.0000
                      m=8               0.0000 0.0024 0.8078 0.0008 0.0000
                      m=9               0.0000 0.0006 0.1064 0.0007 0.0000
                      m = 10            0.0000 0.0001 0.0803 0.0006 0.0000
                      m = 11            0.0000 0.0000 0.0001 0.0000 0.0000
                      m = 12            0.0000 0.0000 0.0000 0.0000 0.0000




  The results point to a model based on m = 9 and φ = 0.6 for the metropoli-
tan sample and m = 8, φ = 0.5 for the non-metropolitan sample. The high
posterior model probabilites for the parameter φ near the midpoint of the 0
to 1 range indicate that county government services are viewed as midway be-



© 2009 by Taylor & Francis Group, LLC
178                                Introduction to Spatial Econometrics

tween the extremes of pure public and private goods. For the US counties, the
average number of ﬁrst-order contiguous neighbors (those with borders that
touch each county) is around 6, so the number of neighbors chosen from the
model comparison exercise represents slightly more than just the contiguous
counties.


6.3.4         An illustration of M C 3 and model averaging
   We use a 49 neighborhood data set for Columbus, Ohio from Anselin
(1988) that contains observations on the median housing values (hvalue) for
each neighborhood and household income (income) as explanatory variables.
Neighborhood crime is the dependent variable in the model that we use to
illustrate M C 3 and model averaging.
   As already noted, if the data generating process is the SAR model, then
β̂SAR = (X  X)−1 X  (In − ρW )y, and least-squares estimates for β are biased
and inconsistent. In these cases, we would expect that regression-based M C 3
procedures would not produce accurate estimates and inferences regarding
which variables are important.
   To illustrate diﬀerences between non-spatial and spatial M C 3 and model
averaging results, we estimate an SDM model as well as the SLX model using
standard methods. The SDM model is shown in (6.24). Intuitively, housing
values and household income levels in nearby neighborhoods might contribute
to explaining variation in neighborhood crime rates, y.


                             y = αιn + ρW y + β1 hvalue + β2 income
                               + β3 W · hvalue + β4 W · income + ε        (6.24)
                             y = ρW y + Xβ + W Xθ + ε

   The contiguity-based weight matrix from Anselin (1988) was used to pro-
duce standard estimates in Table 6.8. The greatest disagreement in the two
sets of estimates is with respect to the two spatially lagged explanatory vari-
ables, which could be a focus of model comparison and inference. For example,
it might be of interest whether housing values and household income levels
in nearby neighborhoods contribute to explaining variation in neighborhood
crime rates. For later reference, we note that the sign of the spatially lagged
house value variable is diﬀerent in the SLX (least-squares) and SDM regres-
sions, and the signiﬁcance of the spatial lag of household income is diﬀerent.
   For our M C 3 procedure, the intercept term and spatial lag of the dependent
variable are included in all models. This leads to four candidate variables and
24 = 16 possible models. This makes it simple to validate our M C 3 algorithms
by comparison with exact results based on posterior model probabilities for
the set of 16 models. The explanatory variables were put in deviation from the
means form and scaled by their standard deviations, and the Zellner g-prior
was used in the M C 3 procedure.



© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                              179
        TABLE 6.8:                 SLX and SDM model estimates
                                     SLX estimates           SDM estimates
           Variable             Estimate t − stat Prob Estimate t−stat Prob
           Constant             75.028    11.3     0.00  43.52     3.4    0.00
           income               −1.109    −2.9     0.00 −0.91     −2.7    0.00
           hvalue               −0.289    −2.8     0.00 −0.29     −3.2    0.00
           W · income           −1.370    −2.4     0.01 −0.53     −0.9    0.34
           W · hvalue            0.191     0.9     0.34 −0.24     −1.3    0.17
           W ·y                                           0.41     2.6    0.00


                    TABLE 6.9:        SLX BMA model selection information
                       Variables/models M1     M2    M3      M4      M5
                       income           1     1     1       1       1
                       hvalue           0     0     1       1       1
                       W · income       0     1     1       0       1
                       W · hvalue       0     0     1       0       0
                       Model Probs      0.056 0.088 0.091 0.209 0.402


                    TABLE 6.10:             SDM BMA model selection
                    information
                      Variables/models         M1      M2      M3      M4      M5
                      income                  1       1       1       1       1
                      hvalue                  1       0       1       1       1
                      W · income              1       0       1       0       0
                      W · hvalue              1       0       0       1       0
                      Model Probs             0.033   0.071   0.098   0.128   0.486



   Since the number of possible models here is 24 = 16, it would have been
possible to simply calculate the log-marginal posterior for these 16 models to
ﬁnd posterior model probabilities. Instead, we applied our M C 3 algorithm to
the SLX and SDM models. A run of 10,000 draws was suﬃcient to uncover
all 16 unique models, requiring 15 and 27 seconds respectively for the SLX
(least-squares) and SAR M C 3 procedures.6 Information regarding the top ﬁve
models is provided in Table 6.9 for the SLX M C 3 procedure and Table 6.10
for the SDM M C 3 procedure, with the posterior model probabilities shown
in the last row of the two tables. These tables use ‘1’ and ‘0’ indicators for
the presence or absence of variables in each of the models presented.
   From the tables we see that the disagreement regarding the spatial lag of


6 MATLAB version 7 software was used in conjunction with a Pentium III M laptop com-

puter.




© 2009 by Taylor & Francis Group, LLC
180                                Introduction to Spatial Econometrics

household income between the two models appears in the M C 3 results as
it did in the basic model estimates. The model with the highest posterior
model probability from the SLX M C 3 procedure includes household income
from neighboring regions, whereas this variable appears in a model having the
third highest posterior probability in the SDM results.
   It is instructive to see how Bayesian model averaging can help to resolve
the issue regarding the signiﬁcance of the spatial lag of household income.
Model averaged estimates based on a posterior model probability weighted
combination of MCMC draws from estimation of all 16 models are shown in
Table 6.11. The results from the SLX model averaging procedure were con-
structed using Bayesian MCMC sampling for the SLX model with a diﬀuse
prior. A similar MCMC procedure with a diﬀuse prior was used to construct
draws for the SDM model. Having draws from MCMC is convenient because
these can be weighted by the posterior model probabilities to form a posterior
distribution that reﬂects the model uncertainty that model averaging proce-
dures attempt to capture. The table reports means as well as 0.95 credible
intervals constructed using the simulation draws.
   The SLX model resolved the question of importance for the spatial lag of
income in favor of this variable being included in the model, whereas the spa-
tial lag of neighboring house values (hvalue) does not appear important in this
model. It is interesting to note that the averaged coeﬃcients for both income
and W · income are smaller in value than those from standard least-squares
estimation. This reduction in magnitude arises from taking into account our
uncertainty regarding the appropriate model speciﬁcation. The reduction in
coeﬃcient magnitude due to model uncertainty also makes it clearer that the
spatial lag of hvalue is not an important variable when one takes into account
alternative model speciﬁcations. However, we will have more to say about
this later.
   We see a similar reduction in magnitude for the averaged coeﬃcients versus
those from standard estimation of the SDM model that ignores model uncer-
tainty. The reduction in magnitudes here points to a lack of importance for
the spatial lags of income and hvalue. However, we need to calculate direct
and indirect eﬀects estimates to draw conclusions about the magnitude of
impact on neighborhood crime associated with changes in these variables. In
fact, in the SLX model we have direct and indirect eﬀects that result in a
total eﬀect as well. This can be seen by considering the partial derivative of y
for this model with respect to the explanatory variables X. This would take
a form involving both the coeﬃcients on income and hvalue as well as the
spatial lags of these variables. Speciﬁcally, the matrix Sr (W ) = In βr + W θr
arises from the partial derivative calculation. In a way, these eﬀects do not
require calculation, since the mean direct eﬀects are the coeﬃcients on the
non-spatial variables and the mean indirect eﬀects are those associated with
the spatial lags of the explanatory variables. The mean total eﬀects are simply
the sum of these two coeﬃcients. However, if we wish to construct conﬁdence
intervals on these impacts we can use the MCMC draws to do this.



© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                    181
TABLE 6.11:                 SLX and SDM model averaged estimates
                              SLX estimates              SDM estimates
   Variable              Mean      0.95      0.95  Mean       0.95     0.95
                                  Lower     Upper            Lower    Upper
   income               −0.9879 −1.0832 −0.8829 −1.0697 −1.4305 −0.7192
   hvalue               −0.1499 −0.1821 −0.1162 −0.2454 −0.3399 −0.1543
   W · income           −0.9583 −1.1197 −0.7984 −0.0645 −0.1688        0.0359
   W · hvalue           −0.0547 −0.1341     0.0184  0.0338 −0.0078     0.0742
   W ·y                                             0.4046    0.2648   0.5294



   Since the SDM model eﬀects estimates are a non-linear function of the co-
eﬃcients, there is some question about how to construct our eﬀects estimates
in a model averaging setting. We follow Dennison, Holmes, Mallick and Smith
(2002, p. 234-235) who relate models that have diﬀerent nonlinear basis sets
that describe the relationship between the response and covariates. In our
model the response is y, the covariates are X, W X, and the matrix inverse
(In − ρW )−1 that relates the response to changes in X could be viewed as a
non-linear basis set.
   Dennison, Holmes, Mallick and Smith (2002) discuss analysis of situations
involving a non-linear smooth of the data, e.g., E(y|data, parameters) = Sy
where S is an n × n smoothing or hat matrix that transforms responses to
ﬁtted values. Speciﬁcally, their model takes the form in (6.25), where D
represents the sample data and Σ, φ are variance-covariance and parameters
from a seemingly unrelated VAR model that contains time-lag interactions
between the elements in the matrix Y .


                             E(Y |D, Σ, φ) = B β̃                        (6.25)
                                           = B(B  φB + Σ−1 )−1 B  φY
                                            = SY                         (6.26)

   In an illustration they calculate the smoothing matrix S for each sampled
basis set B from the MCMC simulation and argue that averaging over these
draws produces E(S|D), an expected smoothing matrix. Predictions are then
made using an average over two data sets Y1 , Y2 contained in the matrix Y .
   This suggests we should proceed by calculating a posterior probability
weighted average of our smoothing matrix (In − ρW )−1 (In βr + W θr ), us-
ing MCMC draws for ρ, β, θ arising from each set of 16 models. The main
diagonal elements of this matrix would reﬂect direct impacts, and oﬀ-diagonal
elements would reﬂect indirect impacts that could be transformed to the scalar
summary measures described in Chapter 2.
   We note that for linear model relationships, model averaging relies on a lin-
ear combination of the parameter draws from MCMC simulation constructed



© 2009 by Taylor & Francis Group, LLC
182                                Introduction to Spatial Econometrics

using the posterior model probabilities. In the linear model case, this con-
stitutes the posterior distribution for the parameters ρ, β, θ, which should
provide the basis for all Bayesian inference. Taking this approach with our
non-linear spatial model relationship would produce diﬀerent estimates and
inferences regarding the impact estimates. This is because an average of non-
linear terms is not the same as the non-linear terms averaged. To illustrate
the diﬀerence in outcomes, we compare these two approaches. Speciﬁcally,
this second approach applied the posterior model probabilities to the 16 sets
of parameter draws, then used the single linear combination of draws to con-
struct the eﬀects estimates matrix, (In − ρW )−1 (In βr + W θr ). The main
diagonal elements of this single matrix were treated as direct impacts and
oﬀ-diagonal elements as indirect impacts that were transformed to the scalar
summary measures.


             TABLE 6.12:                 SLX and SDM model averaged impact
             estimates
               Variable                  0.99 Lower    Mean     0.99 Upper    Std.
                                                       SLX impacts
                direct income            −1.1237      −0.9879 −0.8435        0.0601
                direct hvalue            −0.1981      −0.1499 −0.1013        0.0205
                indirect income          −1.1885      −0.9583 −0.7286        0.0957
                indirect hvalue          −0.1691      −0.0547  0.0585        0.0489
                total income             −2.1755      −1.9463 −1.6959        0.0983
                total hvalue             −0.3292      −0.2046 −0.0924        0.0505
                                               SDM Linear matrix impacts
                direct income            −1.6586   −1.1299 −0.5839       0.2268
                direct hvalue            −0.3932   −0.2533 −0.1218       0.0589
                indirect income          −1.6744   −0.8081 −0.2756       0.2973
                indirect hvalue          −0.2976   −0.1063    0.0285     0.0686
                total income             −3.2186   −1.9380 −0.9749       0.4630
                total hvalue             −0.6651   −0.3597 −0.1158       0.1126
                                              SDM Non-linear matrix impacts
                direct income            −1.1816   −0.6525 −0.1714        0.2157
                direct hvalue            −0.2961   −0.1641 −0.0316        0.0566
                indirect income          −1.5945   −0.4435 −0.0318        0.3040
                indirect hvalue          −0.4045   −0.1111 −0.0061        0.0779
                total income             −2.5626   −1.0960 −0.2472        0.4653
                total hvalue             −0.6504   −0.2752 −0.0447        0.1199




  For the case of the SLX model, the non-linearity issue does not arise since
the eﬀects matrix takes the form: (In βr + W θr ). Table 6.12 shows the impact
estimates calculated both ways, as well as impact estimates calculated for the




© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                    183

SLX model. The SLX eﬀects were re-calculated using 0.99 credible intervals
for consistency with the SDM impacts reported in the table. As noted, the
total impacts for the SLX model are simply the sum of the draws for the
parameters β associated with the matrix X and θ associated with W X.

  In the table, we label the impacts calculated based on the non-linear ex-
pected smoothing matrix as Non-linear matrix impacts and those based on
the (linear) posterior probability combination of draws for the parameters as
Linear matrix impacts. From the table, we see much greater dispersion in
the SDM model eﬀects estimates calculated using both the non-linear matrix
and linear matrix than for the SLX model eﬀects, as can be seen from the
standard deviations reported.

   There are also diﬀerences between the SLX and SDM impact estimates that
are likely to be statistically diﬀerent, as well as diﬀerences between the im-
pacts reported using the two diﬀerent model averaging calculation approaches.
For example, the direct eﬀect for hvalue from the SLX model is around two
standard deviations away from that from the SDM linear matrix eﬀects, using
the larger standard deviation from the SDM eﬀect estimate. The same is true
of the indirect eﬀect for this variable. The direct eﬀects of income from the
linear matrix versus non-linear matrix approach are around three standard
deviations apart. It is interesting that the standard deviations from the two
approaches to calculating model averaged impact estimates are very similar,
but the means diverge. This is what we might expect since an average of
non-linear terms is not the same as the non-linear terms averaged.


             TABLE 6.13:        SLX and SDM single model eﬀects estimates
                                        SLX single model eﬀects
                Variable        0.99 Lower  Mean     0.99 Upper Std.
                direct income   −2.0406    −1.1338 −0.2320        0.3893
                direct hvalue   −0.5415    −0.2837 −0.0226        0.1070
                indirect income −2.7249    −1.3744 −0.0166        0.5721
                indirect hvalue −0.2966     0.1881     0.6654     0.2061
                total income    −3.6954    −2.5082 −1.2688        0.5066
                total hvalue    −0.5935    −0.0955     0.4015     0.2078
                                        SDM single model eﬀects
                Variable        0.99 Lower  Mean    0.99 Upper     Std.
                direct income   −2.0129    −1.0624 −0.1784        0.3879
                direct hvalue   −0.5230    −0.2831 −0.0527        0.1007
                indirect income −6.0508    −1.6823    0.7551      1.4323
                indirect hvalue −0.7393     0.1846    0.9578      0.3332
                total income    −7.5905    −2.7447 −0.0894        1.5900
                total hvalue    −1.0907    −0.0986    0.8142      0.3685




© 2009 by Taylor & Francis Group, LLC
184                                Introduction to Spatial Econometrics

   Finally, it is of interest to compare the impact estimates from a single model
versus those based on the model averaging procedure. These are shown in Ta-
ble 6.13, for a saturated version of both the SLX and SDM models, where all
variables were included during estimation. Focusing on the SLX eﬀects es-
timates, we see the same pattern of shrinkage towards zero for the model
averaged estimates relative to those from the saturated model, reﬂecting the
role of model uncertainty. We also see that the saturated model produced
much larger standard deviations, or dispersion in the eﬀects estimates, pre-
sumably due to the inclusion of all variables in the saturated model. This
reﬂects the classic trade-oﬀ between attempting to include a suﬃcient num-
ber of variables to overcome potential omitted variables bias and inclusion of
redundant variables that decrease precision of the estimates. It is precisely
this trade-oﬀ that model averaging seeks to address. A comparison of the two
sets of SLX eﬀects estimates suggests that model averaging was successful in
this regard. It is also of interest that the model averaged eﬀects lead us to
infer that the total impacts from both variables are negative and signiﬁcant.
In contrast, the single saturated model estimates suggest that the total eﬀect
of hvalue is not signiﬁcant.
   We compare the non-linear matrix model averaged SDM impact estimates
to those from the single saturated model in Table 6.13. Again, the mean
impact estimates are relatively smaller for the model averaged estimates than
the saturated single model. Again, this suggests that model averaging is
capturing our uncertainty about the model speciﬁcation. With regard to
the dispersion of the single model estimates and that of the model averaged
estimates we also see the same pattern as with the SLX eﬀects estimates.
The model averaged estimates exhibit less dispersion, which can be seen by
comparing the standard deviations reported in both tables. This implies that
the saturated model is suﬀering from the classic over-inclusion of redundant
variables, and model averaged eﬀects estimates improve on this situation.
As in the case of the single model SLX eﬀects estimates, the SDM model
eﬀects from the single saturated model would lead to the conclusion that the
total eﬀect of hvalue is not signiﬁcant, whereas both sets of model averaged
estimates show a negative and signiﬁcant total eﬀect for this variable.




6.4        Chapter summary
  A number of issues arise in applied modeling regarding model speciﬁcation.
In the case of spatial regression models these include questions regarding the
type of spatial weight matrix to use as well as the usual uncertainty about
explanatory variables.
  A desirable extension of the M C 3 methodology and model averaging would



© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                   185

be to determine both the spatial weight matrix and explanatory variables. We
note that explanatory variables determined using the M C 3 methodology pre-
sented here were conditional on the speciﬁc spatial weight matrix employed.
LeSage and Fischer (2008) extend the M C 3 approach of LeSage and Parent
(2007) presented here to accomplish this. The extension introduces a “birth
step” and “death step” that can be used to increase or decrease the number
of nearest neighbors in the spatial weight matrix.

   There are other approaches to Bayesian model comparison that represent
approximations to the log-marginal likelihood needed to calculate posterior
model probabilities. These methods are useful where it is diﬃcult or impos-
sible to carry out integration of the parameters that arise in the log-marginal
likelihood expression. For example, Parent and LeSage (2008) use a method
proposed by Chib (1995), and Chib and Jeliazkov (2001) to compare a host
of alternative non-nested spatial model speciﬁcations based on varying types
of spatial, technological and transport connectivity of European regions. This
method approximates the log-marginal likelihood using MCMC draws of the
parameters to “integrate” these out of the expression for the log-marginal
likelihood.

  A simple procedure proposed by Newton and Raftery (1994) is to evaluate
the log-likelihood function on each pass through the MCMC sampler and
calculate a harmonic mean of these values as an approximation to the log-
marginal likelihood. This approach is illustrated in LeSage and Polasek (2008)
to compare models of the type discussed in Chapter 8 based on two diﬀerent
spatial weight matrices.




6.5        Chapter appendix

  In this appendix, we describe a computationally eﬃcient approach to eval-
uating four separate terms involved in the univariate integration problem over
the range of support for the parameter ρ in the SAR model. In the context of
the M C 3 described in Section 6.3 there is a need for a computationally fast
scheme for the univariate integration. This must be carried out on every pass
through the MCMC sampler which occurs thousands of times.

  The four terms in (6.18) for the SAR model that vary with ρ are shown in
(6.27) as T1 , T2 , T3 and T4 .



© 2009 by Taylor & Francis Group, LLC
186                                Introduction to Spatial Econometrics



        T1 (ρ) = |In − ρW |                                                          (6.27)
                                                              
        T2 (ρ) = [(In − ρW )y − X β̂(ρ) − α̂ιn ] [(In − ρW )y − X β̂(ρ) − α̂ιn ]
                     g
        T3 (ρ) = (       )β̂(ρ) X  X β̂(ρ)
                   1+g
                       1      (1 + ρ)d−1 (1 − ρ)d−1
        T4 (ρ) =
                 Beta(d, d)              22d−1

   A log transformation can be applied to all terms T1 , . . . , T4 , allowing us to
rely on computationally fast methods presented in Pace and Barry (1997) and
Barry and Pace (1999) to compute the log-determinant in T1 (see Chapter 4).
   Pace and Barry (1997) also suggest a vectorization of the terms in T1 and
T2 that we used in Chapter 3 for maximum likelihood estimation of the SAR
model. This involves constructing log-determinant values over a grid of q
values of ρ, which is central to our task of integration for the terms T1 (ρ)
and T2 (ρ). In applied work involving the SAR model, we typically rely on a
restriction of ρ to the (−1, 1) or [0, 1) interval to avoid the need to compute
eigenvalues.
   Turning attention to the term T2 (ρ), we follow Chapter 3 and write the
term, [(In − ρW )y − X β̂(ρ) − α̂ιn ] [(In − ρW )y − X β̂(ρ) − α̂ιn ] as a vector in
q values of ρ. For our problem we have the expression shown in (6.28).

                                 T2 (ρi ) = e(ρi ) e(ρi ),       i = 1, . . . , q   (6.28)
With:

                                        e(ρi ) = eo − ρi ed
                                          eo = y − Xβo − αo ιn
                                          ed = W y − Xβd − αd ιn
                                          βo = (X  X)−1 X  y
                                          βd = (X  X)−1 X  W y
                                          αo = ȳ
                                          αd = W y                                   (6.29)

  The term T3 can be vectorized using a loop over ρi values along with the
expression β̂(ρ) = βo − ρi βd . Finally, the term T4 (ρ) representing the prior
on the parameter ρ is simple to compute over a grid of q values for ρ, and
transform to logs.
  One important point to note is that we do not need to estimate the model
parameters η = (α, β, σ, ρ) to carry out numerical integration leading to pos-
terior model probabilities. Intuitively, we have analytically integrated the
parameters α, β and σ out of the problem, leaving only a univariate integral
in ρ. Given any sample data y, X along with a spatial weight matrix W , we



© 2009 by Taylor & Francis Group, LLC
                                        Model Comparison                      187

can rely on the Pace and Barry (1997) vectorization scheme applied to our
task. This involves evaluating the log-marginal density terms T1 , . . . , T4 over
a ﬁne grid of q values for ρ ranging over the interval (−1, 1). Given a matrix
of vectorized log-marginal posteriors, integration can be accomplished using
Simpson’s rule.
   Further computational savings can be achieved by noting that the grid
can be rough, say based on 0.01 increments in ρ, which speeds the direct
sparse matrix approach of Pace and Barry (1997) or Barry and Pace (1999)
computations. Spline interpolation can then be used to produce a much ﬁner
grid very quickly, as the log-determinant is typically quite well-behaved for
reasonably large spatial samples in excess of 250 observations.
   Another important point concerns scaling which is necessary to carry out
numerical integration for the anti-log of the log-marginal posterior density.
Our approach allows one to evaluate log-marginal posteriors for each model
under consideration and store these as vectors ranging over the grid of ρ
values. Scaling then involves ﬁnding the maximum of these vectors placed as
columns in a matrix, (e.g. the maximum from all columns in the matrix).
This maximum is then subtracted from all elements in the matrix of log-
marginals, producing a value of zero as the largest element, so the anti-log is
unity. This approach to scaling provides an elegant solution that requires no
user-intervention and works for all problems.




© 2009 by Taylor & Francis Group, LLC
Chapter 7
Spatiotemporal and Spatial Models


Unlike the previous chapters, this chapter is more theoretical and concentrates
on the spatiotemporal foundations of spatial models. To achieve this goal, we
assume that regions are only inﬂuenced by their own and other regions’ past
variables (no simultaneous inﬂuence). We show that this strict spatiotemporal
framework results in a long-run equilibrium characterized by simultaneous
spatial dependence. Note, we speciﬁcally avoid assuming spatial simultaneity
in the spatiotemporal process as this would be assuming what we are trying
to show. To keep the exposition as simple as possible and to expose relations
among some of the common models we employ a number of assumptions such
as symmetric W , constant or deterministically growing X, and no structural
change over time.
   Strictly temporal models provide our starting point, and econometrics pro-
vides a rich set of non-spatial temporal models grounded in economic theory.
Partial adjustment models provide a classic example of this type of model.
Partial adjustment models as well as other motivations give rise to speciﬁ-
cations that employ temporal lags of both the dependent and explanatory
variables.
   In the context of regional data, conventional temporal models allow the
dependent variable yt for each region to be temporally dependent on past
period values yt−j , j = 1, . . . , j − 1 of the own region. These conventional
temporal models can be reasonably modiﬁed to allow for spatial dependence
on other regions through time using spatial lags of the time lags (space-time
lags) W yt−1 and W Xt−1 . These can be incorporated into the model in ad-
dition to conventional temporal lags, yt−1 and Xt−1 , leading to a form of
spatiotemporal model.
   We have already noted that cross-sectional spatial lag models such as the
SAR exhibit simultaneous dependence which may seem counterintuitive in
some applied settings. However, cross-sectional spatial dependence can arise
from a diﬀusion process working over time rather than occurring simultane-
ously. In this chapter we explore how spatiotemporal processes working over
time can lead to equilibrium outcomes that exhibit spatial dependence. Our
focus is on the spatiotemporal underpinnings of the cross-sectional spatial
dependence that we often observe in regional data samples. We show how
spatiotemporal data generating processes are related to many of the cross-
sectional models popular in spatial econometrics and statistics. In addition,


                                                                           189
© 2009 by Taylor & Francis Group, LLC
190                                Introduction to Spatial Econometrics

this analysis suggests more complicated spatial models for further exploration.




7.1        Spatiotemporal partial adjustment model
  We provide a simple generalization of the well-known partial adjustment
model to illustrate how temporal models can be adapted to a spatiotemporal
setting. The temporal partial adjustment development in Greene (1997, p.
698-799) serves as a starting point, but we extend this to a spatiotemporal
setting. The basic equations for our spatial partial adjustment model are in
(7.1)–(7.3).


                                        yt∗ = Ut ψ + W Ut γ + αιn            (7.1)
                                        yt = (1 − φ)yt∗ + φG1 yt−1 + εt      (7.2)
                                    G1 = θIn + πW                            (7.3)

   Let yt∗ denote the equilibrium value of the dependent variable, yt . The
n × p matrix Ut contains non-constant exogenous explanatory variables, and
the n × 1 vector of disturbances εt are distributed N (0, σ 2 In ). The parameter
φ governs the degree of partial adjustment between previous values of the
dependent variable, yt−1 and the equilibrium values yt∗ . The parameters ψ
capture the eﬀect of own-region explanatory variables, γ captures the eﬀects
of explanatory variables at nearby locations, and α is an intercept parame-
ter. The scalar parameters θ, π measure the extent of temporal and spatial
dependence captured by the n × n matrix G1 .
   The equilibrium level of the dependent variable, yt∗ , depends upon the ex-
planatory variables of the own observations (Ut ), nearby observations reﬂected
in the spatial lag (W Ut ), and an intercept (ιn ). The parameters associated
with these explanatory variables are ψ, γ, and α. This type of model spec-
iﬁes observed yt as a linear combination (governed by φ) of the equilibrium
levels yt∗ and past values of the dependent variable (yt−1 ) as well as nearby
dependent variables reﬂected by the spatiotemporal lag vector (W yt−1 ).
   Manipulating (7.1)–(7.3) yields (7.4) indicating that yt depends on: tem-
poral and space-time lags of the dependent variable (Gyt−1 ), spatial lags of
the explanatory variables (W Ut ), in addition to the conventional relationship
involving the explanatory variables Ut .


            yt = Ut (1 − φ)ψ + W Ut (1 − φ)γ + ιn (1 − φ)α + φG1 yt−1 + εt   (7.4)

  As a concrete example, consider the situation faced by retailers. The sales
performance of retail stores is often modeled as a function of the store’s size



© 2009 by Taylor & Francis Group, LLC
                              Spatiotemporal and Spatial Models                          191

and the sizes of competitor stores. For retail activities involving commodi-
ties such as groceries, hardware, and clothing, stores that are located nearby
represent the competition.
   For this retailing example, suppose the variable Ut represents store size and
the spatial lag variable W Ut the average size of nearby stores (competitors).
If yt measures store sales, these should be positively related to own store size
and inversely to competitor store sizes. The desired level yt∗ is the expected
store sales given the size of the store and that of competitor stores. Previous
store sales and previous sales of competitors also inﬂuence current store sales.
Lee and Pace (2005) ﬁtted a spatiotemporal model (with simultaneous spatial
components) to store sales in Houston and found strong spatial dependence.
Store size was found to be important and store sales exhibited strong temporal
as well as spatial dependence.
   We can simplify (7.4) using the symbols deﬁned in (7.6) to represent the
underlying structural parameter combinations and combining the explanatory
variables into a single matrix Xt . This results in a classic spatiotemporal
model in (7.5).


           yt = Xt β + Gyt−1 + εt                                                       (7.5)
                                                                                    
           G = τ In + ρW,               τ = φθ,   ρ = φπ,   β = (1 − φ) ψ   γ   α       (7.6)
          Xt = Ut W Ut ιn

   To summarize, a minor change in some of the models used to motivate tem-
poral lags of the explanatory and dependent variables in non-spatial econo-
metrics can lead to a spatiotemporal speciﬁcation such as (7.5). Section 7.2
discusses the relation between spatiotemporal models and cross-sectional spa-
tial models.




7.2        Relation between spatiotemporal and SAR models
   As brieﬂy discussed in Chapter 1, we can relate cross-sectional spatial mod-
els to long-run equilibria associated with spatiotemporal models. In this sec-
tion, we generalize the simple motivational example from Chapter 1 to ex-
plore the relation between spatiotemporal and spatial models. We will use
the relationship derived here to show how a spatiotemporal mechanism (per-
haps arising from the partial adjustment mechanism discussed in the previous
section) can yield many of the cross-sectional models discussed in the spatial
statistics and spatial econometrics literature. We note that the partial adjust-
ment motivation from the previous section is not the only way to motivate a
spatiotemporal generating process. Our developments apply more generally



© 2009 by Taylor & Francis Group, LLC
192                                Introduction to Spatial Econometrics

to the relation between spatiotemporal processes and cross-sectional spatial
models, and we use these relationships to motivate new spatial speciﬁcations.
   We begin with the model in (7.7), where yt is an n × 1 dependent variable
vector at time t (t ≥ 0), and the n × k matrix Xt represents explanatory
variables. As illustrated in the previous section, Xt could contain spatial lags
of the explanatory variables. This is a generalization of the spatial temporal
autoregressive model (STAR) (Pfeifer and Deutsch, 1980; Cressie, 1993; Pace
et al., 2000) that relies on past period dependent variables and contains no
simultaneous spatial interaction. We will show that this dynamic relationship
implies a cross-sectional steady state that can be viewed as a simultaneous
spatial interaction.
   Note, we speciﬁcally avoid assuming any form of simultaneous spatial de-
pendence in the spatiotemporal process itself as this would be assuming what
we are trying to demonstrate (how simultaneous spatial dependence arises).


                                        yt = Gyt−1 + Xt β + vt                  (7.7)
                                                t
                                        Xt = ϕ X0                               (7.8)
                                        G = τ In + ρW                           (7.9)
                                        dt = Xt γ                              (7.10)
                                        vt = r + dt + εt                       (7.11)

The scalar parameter τ governs dependence between each region at time t and
t − 1, while the scalar parameter ρ reﬂects spatial dependence between each
region at time t and neighboring regions at time t− 1. The scalar parameter ϕ
allows the explanatory variables to grow at a constant rate (ϕ) per period (as
opposed to holding explanatory variables constant over time as in Chapter 1).
A value of ϕ = 1 represents no growth in X0 over time and values ϕ > 1 allow
for growth in the explanatory variables. We assume ϕ > τ .
   As before, the spatial weight matrix W is an n × n exogenous non-negative
matrix. We assume W is symmetric and scaled to have a maximum eigenvalue
of 1 with a minimum eigenvalue that is greater than or equal to −1. Scaling
any symmetric weight matrix by its maximum eigenvalue provides one way of
obtaining a symmetric W with a maximum eigenvalue of 1. Alternatively, a
symmetric doubly stochastic W has a maximum eigenvalue of 1.
   Given that G is composed of the identity matrix and a symmetric weight
matrix W , it is symmetric as well. Since G is real and symmetric, it has n real
eigenvalues and a full rank set of n orthogonal real eigenvectors. The largest
magnitude eigenvalue of G equals τ + ρ. We assume the following stability
restrictions in (7.12)

                                (τ + ρ)t < κ,       ρ ∈ [0, 1),   τ ∈ [0, 1)   (7.12)
where κ is a small positive constant. This will ensure that for suﬃciently
large values of t, we can assume that Gt takes on the small values required



© 2009 by Taylor & Francis Group, LLC
                              Spatiotemporal and Spatial Models                 193

for our analysis. Although we could examine negative τ and ρ, we choose to
look only at positive ρ and τ to simplify the exposition and because negative
ρ and τ are of minor interest.
   In Chapter 2 we considered the role of omitted variables which we general-
ize here. The generalization involves assuming the overall n × 1 disturbance
vector vt can be partitioned into three components. These components repre-
sent omitted variables independent of the explanatory variables (r), omitted
variables correlated with the explanatory variables (dt ), and a random noise
term (εt ). The ﬁrst component is an n×1 vector r that captures omitted vari-
ables uncorrelated with Xt that remain constant over time. These might be
amenities, region speciﬁc attributes such as land or water area, border lengths
of the regions or diﬃcult-to-specify locational discounts and premia. For sim-
plicity, we assume that r is distributed N (0, σr2 In ). The second component
is an n × 1 vector dt = Xt γ representing the eﬀect of omitted variables that
are correlated with Xt , where γ = 0 reﬂects the strength of correlation. This
component can grow or decrease over time since Xt = ϕt X0 . The third com-
ponent is a random n × 1 vector εt that we assume is distributed N (0, σε2 In )
and independent of εt−i for i ∈ (0, t]. We further assume that εt−i for i ∈ [0, t]
is independent of r and Xt .
   The STAR model uses only past dependent variables and current inde-
pendent variables to explain variation in the current dependent variable vec-
tor. Following Elhorst (2001) we use the recursive relation: yt−1 = Gyt−2 +
Xt−1 β + r + dt−1 + εt−1 implied by the model in (7.7) to consider the state
of this dynamic system after passage of t time periods, which is shown in
(7.13)–(7.17).


                    yt = (In ϕt + Gϕt−1 +, . . . , +Gt−1 ϕ)X0 β + Gt y0 + z   (7.13)
                     z = z1 + z2 + z3                                         (7.14)
                    z1 = (In + G+, . . . , +Gt−1 )r                           (7.15)
                    z2 = (In ϕt + Gϕt−1 +, . . . , +Gt−1 ϕ)X0 γ               (7.16)
                    z3 = εt + Gεt−1 + G2 εt−2 +, . . . , +Gt−1 ε1             (7.17)

Taking the expectation of the dependent variable in (7.13) for suﬃciently
large t yields the long-run equilibrium as shown in (7.18)–(7.21). Note, the
terms involving r and ε vanish from the expectation of yt since these both
have expectations of zero and multiplication of a matrix function by these
zero vectors yields zero vectors. We assume t is large enough for convergence
as this is the result of a long-run process. This ensures the vector Gt y0 from
(7.13) will approximately vanish, and therefore the long-run equilibrium will
not depend upon the initial values of y0 .
   In addition, we require that Gt ϕ−t also vanishes in order to proceed from the
ﬁnite series in (7.19) to the simpler expression in (7.20) (using the geometric
series deﬁnition (1 − a)−1 = 1 + a + a2 +, . . . for abs(a) < 1). If ϕ = 1, this



© 2009 by Taylor & Francis Group, LLC
194                                Introduction to Spatial Econometrics

is the same convergence criteria as needed to ensure that the vector Gt y0
from (7.13) will approximately vanish. In the case of a growing explanatory
variable (ϕ > 1), this aids convergence of Gt ϕ−t .

                                                         
                E(yt ) ≈ In ϕt + Gϕt−1 +, . . . , +Gt−1 ϕ X0 (β + γ)        (7.18)
                                                          
                       ≈ In + Gϕ−1 +, . . . , +Gt−1 ϕ−(t−1) ϕt X0 (β + γ)   (7.19)
                                          −1    −1
                          ≈ (In − ϕ            G)
                                        Xt (β + γ)                          (7.20)
                                                  
                                   ρ    −1     ϕ
                          ≈ (In −     W)             Xt (β + γ)             (7.21)
                                  ϕ−τ         ϕ−τ

   There is a relation between the expression in (7.21) and a cross-sectional
spatial regression based on a set of time t cross-sectional observations shown in
(7.22) (where ξt are the disturbances), with the associated expectation shown
in (7.23).


                                           yt = ρ∗ W yt + Xt β ∗ + ξt       (7.22)
                                        E(yt ) = (In − ρ∗ W )−1 Xt β ∗      (7.23)

The relation between (7.21) and (7.23) is such that, for a suﬃciently large
sample n, a consistent estimator applied to the spatiotemporal model in (7.7)
and the cross-sectional model in (7.22) would produce estimates that exhibit
the relations (7.24) and (7.25).

                                                       ρ
                                                ρ∗ =                        (7.24)
                                                     ϕ−τ
                                                     ϕ(β + γ)
                                                β∗ =                        (7.25)
                                                      ϕ−τ
Standard non-spatial models with omitted variables that are correlated with
the included explanatory variables yield parameters β + γ, part of the nu-
merator of β ∗ . However, the long-run temporal multiplier, mt = ϕ(ϕ − τ )−1
ampliﬁes β + γ resulting in β ∗ . Furthermore, mt involves the temporal au-
toregressive parameter τ as well as the parameter ϕ that governs the growth
trend in X. If ϕ = 1 (no growth in the explanatory variables), this yields the
classic temporal multiplier (1 − τ )−1 .
   The long-run spatial multiplier in (7.23) resembles the traditional spatial
multiplier of (In −ρW )−1 , but the spatial dependence parameter ρ is ampliﬁed
by (ϕ − τ )−1 . Consequently, values of ϕ > 1 associated with growth in X
reduce the spatial dependence of the system as measured by ρ∗ , all else equal.
This arises because this process gives more weight to the present, whereas
spatial inﬂuences in this model require time to develop. Conversely, values of
ϕ < 1 give more weight to past values allowing more time for spatial inﬂuences



© 2009 by Taylor & Francis Group, LLC
                              Spatiotemporal and Spatial Models              195

to develop. The temporal dependence parameter also aﬀects the overall spatial
dependence, since greater levels of temporal dependence increase the role of
the past, and the role of space via diﬀusion.
   An interesting implication of this development is that cross-sectional spa-
tial regressions and spatiotemporal regressions could produce very diﬀerent
estimates of dependence even when both types of models are correctly speci-
ﬁed. For example, a cross-sectional spatial regression could result in estimates
pointing to high spatial dependence while a spatiotemporal regression would
produce estimates indicating relatively high temporal dependence and low
spatial dependence. Despite the fact that the estimates from these two types
of models are seemingly quite diﬀerent, both regressions could be correct since
they are based on diﬀerent information sets. Use of a cross-sectional sample
taken at a point in time reﬂects a diﬀerent information set that will focus the
estimates and inferences on a long-run equilibrium result arising from evolu-
tion of the spatiotemporal process. In contrast, use of a space-time panel data
set will lead to estimates and inferences that place more emphasis on the time
dynamics embodied in time dependence parameters.
   In applied practice, use of a space-time panel data set might produce pa-
rameter estimates indicating low spatial dependence and high temporal de-
pendence. This could lead to an erroneous inference that a pure temporal
regression without any spatial component is appropriate. Care must be taken
because these two regression model speciﬁcations have very diﬀerent impli-
cations. A process with low spatial dependence and high positive temporal
dependence implies a long-run equilibrium with high levels of spatial depen-
dence. In contrast, use of a purely temporal regression speciﬁcation implies
a long-run equilibrium that is non-spatial. An implication is that spatial de-
pendence estimates that are small in magnitude could dramatically change
inferences about the underlying spatiotemporal process at work and interpre-
tation of model estimation results.
   This same cautionary note applies to parameters for the explanatory vari-
ables β ∗ arising from a single cross-section. These parameter values are in-
ﬂated by the long-run multiplier when ϕ(ϕ − τ )−1 > 1 relative to β from the
spatiotemporal model. This is a well-known result from time-series analysis
for the case of long-run multiplier impacts in autoregressive models. As pre-
viously mentioned, β ∗ also picks up omitted variable eﬀects represented by
the parameter γ that reﬂects the strength of correlation between included and
omitted variables.
   The relation in (7.24) underlies the interpretation of cross-sectional spatial
autoregressive models. Since these models provide no explicit role for passage
of time, they need to be interpreted as reﬂecting an equilibrium or steady
state outcome. This also has implications for the impact from changes in the
explanatory variables of these models. The model in (7.22) and (7.23) literally
states that yi and yj (i = j) simultaneously aﬀect each other. However,
viewing changes in X as setting in motion a series of changes that will lead
to a new steady-state equilibrium at some unknown future time seems more



© 2009 by Taylor & Francis Group, LLC
196                                Introduction to Spatial Econometrics

intuitive in many situations.




7.3        Relation between spatiotemporal and SEM models
  In Section 7.2 we discussed the relation between spatiotemporal and spatial
autoregressive models. In this section, we extend that analysis to error models.
We begin with the set of equations (7.26)–(7.30).


                                  yt = G(yt−1 − Xt−1 β) + Xt β + vt            (7.26)
                                  Xt = ϕt X0                                   (7.27)
                                   G = τ In + ρW                               (7.28)
                                   dt = Xt γ                                   (7.29)
                                   vt = r + dt + εt                            (7.30)

   We now use the recursive relation: yt−1 = G(yt−2 − Xt−2 β) + Xt−1 β +
r + dt−1 + εt−1 implied by the model in (7.26) to consider the state of this
dynamic system after passage of t time periods from some initial time period
0, as shown in (7.31)–(7.35).


                            yt = ϕt X0 β + Gt (y0 − X0 β) + z                  (7.31)
                             z = z1 + z2 + z3                                  (7.32)
                            z1 = (In + G+, . . . , +Gt−1 )r                    (7.33)
                            z2 = (In ϕt + Gϕt−1 +, . . . , +Gt−1 ϕ)X0 γ        (7.34)
                                                      2             t−1
                            z3 = εt + Gεt−1 + G εt−2 +, . . . , +G        ε1   (7.35)

Considering the expectation of the dependent variable in (7.31) when t be-
comes large yields the long-run equilibrium shown in (7.36).

                                                       ρ              γϕ
                          E(yt ) ≈ Xt β + (In −           W )−1 Xt (     )     (7.36)
                                                      ϕ−τ            ϕ−τ

The long-run equilibrium of the spatiotemporal system shown in (7.36) is
non-spatial when γ = 0 so that no omitted variables that are correlated with
the explanatory variables are present. In the presence of an omitted variable
correlated with included variables (γ = 0), the form becomes more compli-
cated. We note that terms involving r and εt−i (i ∈ [0, t]) vanish from the
expectation of yt , since these both have zero expectations and multiplication
of a matrix function by these zero vectors yields zero vectors.



© 2009 by Taylor & Francis Group, LLC
                              Spatiotemporal and Spatial Models               197

   Summarizing these developments, there are important relationships be-
tween spatiotemporal models and cross-sectional spatial models. These rela-
tionships should further our understanding and interpretation of both cross-
sectional and spatiotemporal models. These relationships have been ignored
by much of the literature on spatial panel data models. This literature has
largely focused on augmenting error covariance structures from conventional
panel data models to account for spatial dependence.




7.4        Covariance matrices
   In Section 7.3 we presented a spatiotemporal model with various distur-
bance components that were governed by a set of parameters related to as-
sumptions about the model and disturbances. We derived an expression for
E(yt ) as a function of the explanatory variables, but did not examine the
covariance matrix implied by the various assumptions regarding the model
and disturbances. We now address this, and show that various values of the
model parameters result in common spatial covariance models proposed in the
literature. In particular, we show that the simultaneously speciﬁed Gaussian
(SSG) and conditionally speciﬁed Gaussian (CSG) models arise from diﬀerent
circumstances that can be related to the model parameters.
   The general spatiotemporal model in (7.7)–(7.11) results in a steady state in
(7.13)–(7.17) with three error components: a location-speciﬁc time-persistent
component which we view as a locational omitted variable (z1 ), a compo-
nent associated with an omitted variable that is correlated with explanatory
variables (z2 ), and a time-independent component (z3 ).
   We use z to represent the overall covariance. The assumed independence
of εt−i and r, the zero expectation of these terms (E(εt−i ) = E(r) = 0), and
the deterministic nature of Xt leads to a covariance for z that is the sum of
the two expressions in (7.38).


                                        Ωz = E(zz  ) − E(z)E(z  )        (7.37)
                                           = E(z1 z1 ) + E(z3 z3 )       (7.38)

If σε2 = 0, Ωz = E(z1 z1 ), and if σr2 = 0, we have Ωz = E(z3 z3 ). For simplic-
ity, we examine individual error components ﬁrst, and then look at them in
combination.
   We begin by ﬁnding the variance-covariance structure that arises from a
model containing only the locational omitted variable component z1 . Assum-
ing approximate convergence, (7.39) can be expressed in terms of G as shown
in (7.40). We use the assumed symmetry of G to square the term in brackets
in (7.40) rather than use the more cumbersome outer product. The assump-



© 2009 by Taylor & Francis Group, LLC
198                                Introduction to Spatial Econometrics

tion of symmetry also results in simpler forms for τ and ρ in (7.41), and ρ1 in
(7.42).


                             E(z1 z1 ) = [In + G + G2 + . . .]2 σr2               (7.39)
                                        ≈ (In − G)−2 σr2                           (7.40)
                                                              ρ
                                        ≈ (1 − τ )−2 (In −        W )−2 σr2        (7.41)
                                                           1−τ
                                        ≈ (1 − τ )−2 (In − ρ1 W )−2 σr2            (7.42)
                                             ρ
                                   ρ1 =                                            (7.43)
                                          1−τ
From this development we conclude that an error component associated with
the locational omitted variable component z1 leads to a covariance structure
that matches that of the SSG model. The SSG model covariance takes the
form: σ 2 (In − As )−2 , where σ 2 = σr2 (1 − τ )−2 and As = ρ1 W .
   We now examine the variance-covariance structure that arises from a model
containing an error component that represents disturbances that are indepen-
dent over time. Using equation (7.17) representing the z3 component we can
form the outer product which in conjunction with symmetry of G leads to
(7.44).

                                                   t−1 t−1
                                        z3 z3 =             Gi εt−i εt−j Gj      (7.44)
                                                   i=0 j=0

Since E(εt−i εt−j ) = 0n when i = j and σε2 In when i = j, the expectation
of z3 z3 has the form in (7.45) where symmetry allows use of terms such as
G2 rather than GG . Using the approximate convergence of G2(t−1) allows
simplifying (7.45), and this leads to expressions involving G as shown in (7.46)
and (7.47). In terms of τ and ρ this has the form (7.48), and ﬁnally in terms
of ρ2 and ρ3 this has the form (7.49).


                    E(z3 z3 ) = [In + G2 + G4 + . . .]σε2                         (7.45)
                               ≈ (In − G2 )−1 σε2                                  (7.46)
                                                                 −1
                                ≈ ((In − G)(In + G)) σε2                           (7.47)
                                                      ρ
                                ≈ (1 − τ )−1 (In −        W )−1 ·
                                                    1−τ
                                                      ρ
                                  (1 + τ )−1 (In +        W )−1 σε2                (7.48)
                                                    1+τ
                                ≈ (1 − τ 2 )−1 (In − ρ2 W )−1 (In − ρ3 W )−1 σε2   (7.49)
                                     ρ
                             ρ2 =                                                  (7.50)
                                  1−τ
                                                          
                                       ρ             1−τ
                             ρ3 = −         = −ρ2                                  (7.51)
                                    1+τ              1+τ



© 2009 by Taylor & Francis Group, LLC
                              Spatiotemporal and Spatial Models                        199

  These expressions can be simpliﬁed by considering special cases. For ex-
ample, consider the case where the time dependence parameter τ = τo where
τo equals a large value such as 0.95. To meet the stability restrictions ρ <
1 − τo or less than 0.05. For concreteness, we let ρ = ρo = 0.04. Using
(7.50) shows that ρ2 = 0.04/(1 − 0.95) = 0.8 and using (7.51) shows that
ρ3 = −0.04/(1 + 0.95) = −0.0205. The term involving ρ3 is small relative to
the term involving ρ2 , and therefore it does not materially aﬀect the approx-
imation in (7.52).

                              E(z3 z3 ) ≈ ((1 − τo2 )−1 σε2 )(In − ρ2 W )−1         (7.52)
                                                    2           −1
The CSG model of covariance equals σ (In −Ac ) . Therefore for large values
such as τo , the covariance associated with the time independent disturbances
approaches the CSG model, where σ 2 = (1 − τo2 )−1 σε2 and Ac = ρ2 W .
  We now examine the overall variance-covariance matrix, Ωz that arises from
a model containing all disturbance components.
                                                                          −1
                        Ωz ≈ (In − G)−2 σr2 + ((In − G)(In + G))               σε2   (7.53)
To give this more structure, we examine the scenario when τ is large (τo ).
Combining the individual covariance expressions for this case results in (7.54).

                                   σr2               −2     σε2
                      Ωz ≈                 (In − As )   +         (In − Ac )−1       (7.54)
                                (1 − τo )2                1 − τo2
For ﬁxed positive levels of σr2 , σε2 and ﬁxed non-singular matrices As , Ac ,
increasing τo will inﬂate the SSG component faster than the CSG component.
Consequently, SSG will dominate for large τo . For concreteness, using τo =
0.95 results in (7.55), where the SSG component has a far greater weight than
the CSG component (assuming the disturbance variances do not materially
oﬀset the relative contributions).

                       Ωz ≈ 400σr2 (In − As )−2 + 10.2564σε2(In − Ac )−1             (7.55)
   We conclude that the general covariance expression in (7.53) leads to a
potentially complicated covariance speciﬁcation. However, simpler models
emerge when we consider special cases. For example, if σr2 = 0 and τ is
large, the CSG covariance speciﬁcation emerges. When σr2 > 0, σε2 > 0, and
τ is large, the SSG covariance speciﬁcation emerges. If σε2 = 0, the SSG
speciﬁcation emerges.
   A practical implication of these results is that models with excellent ex-
planatory variables that address spatial eﬀects might be able to greatly reduce
the magnitude of impact that can potentially arise from omitted locational
premia and discounts (σr2 = 0). This type of applied modeling situation would
tend to favor a CSG speciﬁcation.
   Conversely, parsimonious models or those lacking important spatial ex-
planatory variables so that σr2 > 0 might lead to the SSG speciﬁcation. This



© 2009 by Taylor & Francis Group, LLC
200                                Introduction to Spatial Econometrics

would be especially true when the dependent variable exhibits high temporal
dependence.


7.4.1         Monte Carlo experiment
  An interesting feature of the development of the covariance matrix for the
general spatiotemporal model is the relation between SSG and CSG speci-
ﬁcations and how these arise. In addition, the possibility of recovering the
temporal dependence parameter, τ , from a single cross-sectional sample has
many ramiﬁcations. To examine these issues, we carry out an experiment
using the spatiotemporal model without the presence of latent eﬀects. Our
experiment will focus on dependence captured by E(z3 z3 ).
  A simple Monte Carlo experiment generated data using the spatiotemporal
model in (7.56) setting t = 1, . . . , 250, and n = 50, 000 observations in each
time period.


                                            yt = Gyt−1 + Xβ + εt          (7.56)
                                        
The parameters β = 0 1 , and X included a constant vector ιn as well as a
standard normal vector (mean zero and variance of unity). The matrix X was
constant for all time periods, and thus ϕ = 1. A standard normal vector was
used for εt , and the last period’s observations were used as the cross-sectional
sample. That is, the n cross-sectional observations from the last time period
(t = 250) from the spatiotemporal process became the dependent variable y
for the spatial regression.
   We considered three cases when composing the matrix G used to generate
the experimental data. The ﬁrst case had larger temporal and smaller spatial
dependence (τ = 0.75, ρ = 0.15), while the second case reversed this situation
using (τ = 0.15, ρ = 0.75). The third case used settings (τ = 0.4, ρ = 0.4)
reﬂecting moderate levels of spatial and temporal dependence. The values of
τ and ρ in the spatiotemporal model imply various parameters in the cross-
sectional spatial model. From the relations in the preceding section, ρ∗ =
ρ/(ϕ−τ ), ρ2 = ρ/(1−τ ), ρ3 = −ρ/(1+τ ), and β ∗ = ϕβ/(ϕ−τ ). Since X was
held constant over time, ϕ = 1 for this experiment, and there were no omitted
variables so γ = 0. For each of the three cases, we simulated and estimated 25
trials. Each trial took under 2.4 minutes to compute. The mean and standard
deviation of the model parameters calculated on the basis of the 25 trials are
shown in Table 7.1. The table also shows the theoretical parameter values
based on values used in the spatiotemporal generating process in the rows
labeled true.
   Table 7.1 shows estimates for the parameters that were on average correct
with varying levels of dispersion across the set of 25 outcomes for the three
cases considered. In particular, the underlying parameters ρ∗ , ρ2 , and β2∗
were estimated very accurately. However, estimates of ρ3 displayed higher



© 2009 by Taylor & Francis Group, LLC
                              Spatiotemporal and Spatial Models              201
             TABLE 7.1:                 Experimental estimates
                Cases               τ       ρ      ρ∗       ρ2    ρ3   β2∗
                1 true 0.7500 0.1500 0.6000 0.6000 −0.0857 4.0000
                1 mean 0.7632 0.1447 0.6000 0.5992 −0.0846 3.9989
                1 s.d. 0.1060 0.0694 0.0000 0.0283  0.0442 0.0071

                2 true 0.1500 0.7500 0.8824 0.8824 −0.6522 1.1765
                2 mean 0.1518 0.7465 0.8800 0.8800 −0.6484 1.1853
                2 s.d. 0.0153 0.0171 0.0000 0.0071  0.0232 0.0045

                3 true 0.4000 0.4000 0.6667 0.6667 −0.2857 1.6667
                3 mean 0.4131 0.3889 0.6668 0.6608 −0.2768 1.6670
                3 s.d. 0.0528 0.0476 0.0048 0.0222  0.0443 0.0075



variability and this degraded the estimation accuracy of τ and ρ, especially
for the higher values of τ . Although ρ∗ and ρ2 had very similar values in
the table, this results from assuming that X is constant over time. These
parameters would diﬀer when X changes over time.
   The results from this experiment should be viewed as a demonstration that
it is reasonable to rely on cross-sectional spatial regression models to analyze
sample data generated by spatiotemporal processes. In particular, estimates
of the regression parameters, β ∗ , were very accurate and diﬀered only by
a factor of proportionality relative to estimates of β from a spatiotemporal
model.
   The experiment validates our Chapter 2 spatiotemporal motivation for ob-
served spatial dependence in cross-sections involving regional data samples.
It is important that we understand how spatial dependence arises in cross-
sectional regional data samples, and the next section pursues this topic fur-
ther.




7.5        Spatial econometric and statistical models
  The most common models in spatial econometrics are the autoregressive
model (SAR), the spatial Durbin model (SDM), and the SSG error model
(SEM). In spatial statistics, the CSG error model or CAR is also common.
This section discusses how particular values for parameters in the general
spatiotemporal model lead to many of these popular cross-sectional models.
  Taking the DGP implied by (7.21), (7.42), and (7.43) yields a SAR DGP.
This model speciﬁcation arises when: 1) X remains constant over time and
2) the disturbances are time-persistent location-speciﬁc disturbances taking



© 2009 by Taylor & Francis Group, LLC
202                                Introduction to Spatial Econometrics

the form we have labeled r, and 3) there are no omitted variables correlated
with the explanatory variables. These restrictions yield (7.57) and the simpler
form shown in (7.58).

                                         ρ
                            y = (In −       W )−1 (1 − τ )−1 Xβ +
                                      1−τ
                                         ρ
                                (In −       W )−1 (1 − τ )−1 r              (7.57)
                                      1−τ
                            y = (In − ρ∗ W )−1 Xβ ∗ + (In − ρ∗ W )−1 r∗     (7.58)
   In the context of a SAR model where y represents variation in home prices,
r could capture amenities. These might include water views, tree shade, bike
paths, landscaping, and sidewalks. We might also have externalities reﬂect-
ing proximity to sewerage treatment plants, hazardous waste sites, nearby
houses with garish, discordant colors, or noise from roads. Other environ-
mental factors could include microclimates such as frost pockets, locations
on the south or north side of a hill as well as the direction and strength of
wind. Also, Catholic school districts, Catholic parishes, mosquito abatement
districts, special assessment areas, and parade routes are ignored in most ap-
plied modeling situations. Any or all of these serve as examples of potentially
omitted variables that have a spatial character. In fact, almost every loca-
tion is inﬂuenced by variables that change slowly over time and the relevant
variables diﬀer across locations.
   The SEM or error model DGP in (7.59) arises when the only error compo-
nent is r and no omitted variables exist.

                                                ρ
                              y = Xβ + (In −       W )−1 (1 − τ )−1 r       (7.59)
                                             1−τ
                              y = Xβ + (In − ρ∗ W )−1 r∗                    (7.60)
Therefore, the standard SSG error model emerges from a spatiotemporal error
process with time-persistent, location-speciﬁc disturbances r and no omitted
variables that are correlated with X (i.e., γ = 0). Unlike the autoregres-
sive case, X does not need to be constant over time to arrive at this model
speciﬁcation.
   However, if omitted variables that are correlated with X are present (i.e.,
γ = 0) and no growth in X occurs, this results in a more complicated expres-
sion in (7.61).

                                               ρ
                         y = Xβ + (In −           W )−1 X(γ(1 − τ )−1 ) +
                                              1−τ
                                         ρ
                                (In −       W )−1 (1 − τ )−1 r              (7.61)
                                        1−τ
To estimate (7.61) we can transform y by (In − 1−τ
                                                ρ
                                                   W ) to yield (7.63) that
has iid disturbances.



© 2009 by Taylor & Francis Group, LLC
                              Spatiotemporal and Spatial Models                       203



                                    ρ                ρ
                         (In −         W )y = (In −      W )Xβ +
                                   1−τ              1−τ
                                              Xγ(1 − τ )−1 + (1 − τ )−1 r           (7.62)
                                        ∗                          ∗
                              (In − ρ W )y = Xβ1 + W Xβ2 + r                        (7.63)

The new equation (7.63) is the SDM. This speciﬁcation arises when: 1) omit-
ted variables that are correlated with X are present (i.e., γ = 0) and 2) no
growth in X occurs over time.
   Suppose interest centers on an error model with iid disturbances over time
with no omitted variables (γ = 0). Using an earlier expression (7.49) for the
covariance Ωz3 shows that the error model DGP in (7.64) and (7.65) arises
for large τ (τo ).


                  y = Xβ +                                                         (7.64)
                                                                     ρ
                   ∼ N (0, Ωz3 ) ≈ N (0, (1 − τo2 )−1 σε2 (In −          W )−1 )   (7.65)
                                                                   1 − τo

Therefore, the standard CSG error model emerges from a spatiotemporal error
process with iid disturbances ε, when no omitted variables are present that
are correlated with X (i.e., γ = 0), and τ is large. Unlike the autoregressive
case, X does not need to be constant over time to arrive at this form.
   In conclusion, the general spatiotemporal autoregressive and error models
presented in Sections 7.2 and 7.3 subsume many of the well-known mod-
els from spatial econometrics and spatial statistics. Assumptions regarding
speciﬁc parameters of the more general model lead to spatial autoregressive
models (SAR), the spatial Durbin model (SDM), the SSG error model (SEM),
and the CSG error model (CAR).




7.6        Patterns of temporal and spatial dependence
   Although autoregressive dependence is the most commonly used form of
temporal dependence, other forms exist such as moving average and expo-
nential. We provide a brief development that shows how alternative types of
temporal dependence in the context of spatiotemporal processes relate to al-
ternative spatial models. In particular, this development suggests that spatial
models can often inherit the form of the underlying spatiotemporal process.
   We begin with a speciﬁcation in (7.66) that assumes the model variables
are in long-run equilibrium. In the last time period t, the dependent variable
yt depends on space-time lags as well as on Xβ and disturbances ut .



© 2009 by Taylor & Francis Group, LLC
204                                Introduction to Spatial Econometrics


           ⎡                               ⎤⎡      ⎤ ⎡   ⎤ ⎡     ⎤
             ω0 In ω1 G ω2 G2 · · · ωt Gt      yt     Xβ     ut
           ⎢ 0n ω0 In ω1 G · · · ωt−1 Gt−1 ⎥ ⎢yt−1 ⎥ ⎢Xβ ⎥ ⎢ut−1 ⎥
           ⎢                               ⎥⎢      ⎥ ⎢   ⎥ ⎢     ⎥
           ⎢ 0n 0n ω0 In ω1 G              ⎥ ⎢yt−2 ⎥ ⎢Xβ ⎥ ⎢ut−2 ⎥
           ⎢                               ⎥⎢      ⎥=⎢   ⎥+⎢     ⎥ (7.66)
           ⎢ ..     ..        ..      ..   ⎥ ⎢ .. ⎥ ⎢ .. ⎥ ⎢ .. ⎥
           ⎣ .       .   0        . n  .   ⎦ ⎣  .  ⎦ ⎣ . ⎦ ⎣  . ⎦
                0n                        0n       ω0 In          y0    Xβ   u0

We rewrite this in more compact form in (7.67).


                                          Hy = (ιt+1 ⊗ Xβ) + u                    (7.67)

We assume that the weights ωi are associated with some analytic function
F (·) and that an inverse function F −1 (·) exists with weights πi . The models
discussed in earlier sections of this chapter reﬂect restricted versions of this
more general speciﬁcation. For example, the autoregressive model uses ω0 = 1,
ω1 = −1, and ω2 , . . . , ωt = 0 while π0 , . . . , πt = 1. However, we can represent
other forms of dependence using diﬀerent values for the parameters ωi and πi .
   Our interest focuses on the long-run equilibrium, and so we examine the
last period. We assume the system has converged so ωt Gt is very small in
magnitude. Solving for yt and taking its expectation yields (7.68), where
(H −1 )1 represents the ﬁrst row of H −1 . Given the constant mean structure
Xβ which does not change over time sets up the simpler form in (7.69), with
an associated matrix function version in (7.70).


                                        E(yt ) ≈ (H −1 )1 (ιt+1 ⊗ Xβ)             (7.68)
                                                   t−1
                                               ≈         πi Gi Xβ                 (7.69)
                                                   i=0
                                                     −1
                                               ≈F         (G)Xβ                   (7.70)

  Some examples may clarify the relation between diﬀerent types of time-
series dependence and the resulting spatial equilibria.


Autoregressive Case                      If F (G) = (In − G),


                                  E(yt ) ≈ ((1 − τ )In − ρW )−1 Xβ                (7.71)
                                                    ρ            β
                                         ≈ (In −        W )−1 X                   (7.72)
                                                 1−τ            1−τ
                                         ≈ (In − ρ∗ W )−1 Xβ ∗                    (7.73)



© 2009 by Taylor & Francis Group, LLC
                              Spatiotemporal and Spatial Models             205

Matrix Exponential Case If F (G) = e−αG ,


                                        E(yt ) ≈ eα(τ In +ρW ) Xβ        (7.74)
                                               ≈ eαρW X(eατ β)           (7.75)
                                                   ∗∗
                                              ≈ eα      W
                                                            Xβ ∗∗        (7.76)

  To make this last case more concrete, for the matrix exponential spatial
speciﬁcation described in Chapter 9, ωi = (i!)−1 αi and πi = (i!)−1 (−α)i . We
chose α = 0.2 to ensure quick convergence (to ﬁt the tables on the page). The
matrix H in (7.66) was populated using the deﬁnition of ωi which produced
(7.77).

               ⎡                                                ⎤
            1.0000 -0.2000 0.0200 -0.0013 0.0001 -0.0000 0.0000
          ⎢ 0.0000 1.0000 -0.2000 0.0200 -0.0013 0.0001 -0.0000 ⎥
          ⎢                                                     ⎥
          ⎢ 0.0000 0.0000 1.0000 -0.2000 0.0200 -0.0013 0.0001 ⎥
          ⎢                                                     ⎥
       H =⎢
          ⎢ 0.0000 0.0000 0.0000 1.0000 -0.2000 0.0200 -0.0013 ⎥
                                                                ⎥        (7.77)
          ⎢ 0.0000 0.0000 0.0000 0.0000 1.0000 -0.2000 0.0200 ⎥
          ⎢                                                     ⎥
          ⎣ 0.0000 0.0000 0.0000 0.0000 0.0000 1.0000 -0.2000 ⎦
            0.0000 0.0000 0.0000 0.0000 0.0000 0.0000 1.0000

The numerical inverse of the matrix H is shown in (7.78) as H −1 , where we
see table entries that correspond very closely to the formula for πi .

                     ⎡                                            ⎤
                 1.0000 0.2000 0.0200 0.0013 0.0001 0.0000 0.0000
               ⎢ 0.0000 1.0000 0.2000 0.0200 0.0013 0.0001 0.0000 ⎥
               ⎢                                                  ⎥
               ⎢ 0.0000 0.0000 1.0000 0.2000 0.0200 0.0013 0.0001 ⎥
               ⎢                                                  ⎥
        H −1 = ⎢                                                  ⎥
               ⎢ 0.0000 0.0000 0.0000 1.0000 0.2000 0.0200 0.0013 ⎥      (7.78)
               ⎢ 0.0000 0.0000 0.0000 0.0000 1.0000 0.2000 0.0200 ⎥
               ⎢                                                  ⎥
               ⎣ 0.0000 0.0000 0.0000 0.0000 0.0000 1.0000 0.2000 ⎦
                 0.0000 0.0000 0.0000 0.0000 0.0000 0.0000 1.0000

Therefore, taking the ﬁrst row of (H −1 ) from (7.78) and using (7.68) shows
that E(yt ) = (In + 0.2G + 0.02G2 + 0.0013G3+, . . .)Xβ or E(yt ) = e0.2G Xβ.
   To further explore the relation between the matrix exponential spatiotem-
poral model and the matrix exponential spatial model we conducted a simple
Monte Carlo experiment. We generated the data using the spatiotemporal
equation (7.66) where ωi represent terms from the Taylor series expansion of
the matrix exponential. See both Chapter 4 and Chapter 9 for more details
regarding the matrix exponential spatial speciﬁcation.
   In the Monte Carlo experiment we used 200 periods ( t = 1, . . . , 200), with
                                                            
5, 000 observations for each period. The parameters β = 0 1 , and the matrix
X consisted of a constant term and a standard normal vector (mean zero,
variance of unity) that was held constant over all time periods. The vector



© 2009 by Taylor & Francis Group, LLC
206                                Introduction to Spatial Econometrics

u represented a standard normal deviate that was held constant over time to
reﬂect locational omitted variables. We used the last period’s observations
as the cross-sectional sample. That is, the cross-sectional n × 1 dependent
variable vector y was taken from the last period of a spatiotemporal process.


  We used three settings for the strength of temporal and spatial dependence
to determine parameters used to form αG. The ﬁrst case had moderate tem-
poral dependence and no spatial dependence (ατ = 1.00, αρ = 0.0), while
the second case reversed this and had no temporal dependence with moderate
spatial dependence (ατ = 0.0, αρ = 1.0). The third case represents moderate
spatial and temporal dependence (ατ = 1.0, αρ = 1.0). For each case we
simulated and estimated the model parameters using 100 trials via the matrix
exponential methods described in Chapter 9.


                                        TABLE 7.2:      Matrix
                                        exponential Monte Carlo results
                                          Cases     α∗∗    β0∗∗      β1∗∗
                                          1 true 0.0000 0.0000 2.7183
                                          1 mean 0.0049 0.0042 2.7111
                                          1 s.d. 0.0249 0.0599 0.0371

                                          2 true 1.0000 0.0000 1.0000
                                          2 mean 0.9976 0.0087 0.9954
                                          2 s.d. 0.0227 0.0172 0.0125

                                          3 true 1.0000 0.0000 2.7183
                                          3 mean 0.9981 0.0145 2.7097
                                          3 s.d. 0.0186 0.0320 0.0204




   The experimental results appear in Table 7.2 where α∗∗ is the overall de-
pendence parameter, β0∗∗ is the intercept parameter, and β1∗∗ is the parameter
associated with the non-constant explanatory variable. These results show
close agreement between the spatiotemporal theory and experimental esti-
mates.


   As the matrix exponential example illustrates, the relation between spa-
tial and spatiotemporal models is not speciﬁc to the autoregressive model
speciﬁcation. Many alternative forms of temporal dependence could lead to
spatial dependence model speciﬁcations. This has the potential to broaden
and expand spatial modeling. These developments also generalize our spa-
tiotemporal motivation for observed cross-sectional spatial dependence.



© 2009 by Taylor & Francis Group, LLC
                              Spatiotemporal and Spatial Models             207




7.7        Chapter summary
   This chapter dealt with spatiotemporal models as well as the relation be-
tween spatial and spatiotemporal models. We began with Section 7.1 and
showed that the well-known partial adjustment model can be easily augmented
to include previous values of the dependent and explanatory variables from
nearby observations or regions. This results in a spatiotemporal model that
contains both time as well as space-time lags of the model variables, but no
contemporaneous spatial lags.
   In Section 7.2 we introduced a general spatiotemporal autoregressive pro-
cess involving explanatory variables with deterministic growth, temporal lags
of variables, temporal lags of spatial lags of variables, and a disturbance term
comprised of three components. One component was a locational omitted
variable (not correlated with the included variables), the second component
was an omitted variable correlated with the included variables, and the third
component was an iid disturbance.
   Although this was a more general process, it did not contain any form of
simultaneous spatial dependence in the spatiotemporal process itself as this
would be assuming what we are trying to demonstrate (how simultaneous
spatial dependence arises).
   We showed that the resulting long-run equilibrium arising from this strict
spatiotemporal process took the form: E(yt ) ≈ (In − ρ∗ W )−1 Xt β ∗ , where
ρ∗ = ρ(ϕ − τ )−1 , and β ∗ = (β + γ)ϕ(ϕ − τ )−1 . The scalar ρ is the spatial
dependence parameter, τ is the temporal dependence parameter, γ reﬂects
dependence between the included and omitted variable, and ϕ equals 1 plus
the growth rate of X over time.
   The relation between the long-run equilibrium parameters and the spa-
tiotemporal model parameters has important implications concerning the in-
terpretation and use of these models. In particular, cross-sectional spatial
regressions and spatiotemporal regressions could produce very diﬀerent esti-
mates of dependence even when both types of models are correctly speciﬁed.
For example, a cross-sectional spatial regression could result in estimates in-
dicating high spatial dependence while a spatiotemporal regression could pro-
duce estimates indicating relatively high temporal dependence and low spatial
dependence. Despite the fact that the estimates from these two types of mod-
els are seemingly quite diﬀerent, both regressions could be correct since they
are based on diﬀerent information sets. In some applications, a large and
signiﬁcant temporal parameter estimate coupled with a small and less sig-
niﬁcant spatial parameter estimate could entice a practitioner into deleting
the spatial variable. Although this strategy may seem ﬁne from a goodness-
of-ﬁt perspective, interpretation of the two models would diﬀer greatly. A
small spatial parameter estimate and large temporal parameter estimate in
a spatiotemporal model implies a long-run equilibrium with material spatial



© 2009 by Taylor & Francis Group, LLC
208                                Introduction to Spatial Econometrics

dependence, whereas a purely temporal regression implies a long-run equilib-
rium with no spatial dependence. This would make a large diﬀerence in how
we interpret the impacts arising from changes in the explanatory variables of
the model.
   Section 7.3 showed a similar analysis for a spatiotemporal error model
where, in the absence of omitted variables correlated with the included vari-
ables, the long-run equilibrium resulted in E(yt ) ≈ Xt β. Although the dis-
turbances exhibit spatial dependence, the actual long-run equilibrium is non-
spatial. However, in the presence of omitted variables correlated with included
variables, the error model yields a form of SDM, and this is fundamentally a
spatial model.
   Section 7.4 addressed the form of covariance structure that arises from
using a spatiotemporal process to motivate a cross-sectional model speciﬁca-
tion. This development considered the case where the disturbances consisted
of components related to a locational omitted variable as well as iid distur-
bances. Various parameter combinations resulted in CSG and SSG covariance
structures. In particular, the presence of time-persistent, spatially dependent
disturbances and high levels of time dependence τ yield the SSG covariance
structure.
   Section 7.4.1 provided a Monte Carlo demonstration that the CSG speciﬁ-
cation can arise in the presence of strong temporal dependence as discussed in
Section 7.4. Under the correct model speciﬁcation, the regression parameters
were well estimated by a purely spatial model and comparable (proportion-
ally) to those estimated from a spatiotemporal model using panel data. The
Monte Carlo experiment corroborated the relation between the spatial and
spatiotemporal approaches. However, for actual data the relation between
these may be diﬃcult to conﬁrm as these relations take the form of ratios and
are very sensitive to minor estimation errors, especially those pertaining to
the temporal parameter τ .
   Section 7.6 showed how speciﬁc assumptions within the general spatiotem-
poral framework could lead to standard cross-sectional spatial models. We
showed that other temporal DGPs such as the matrix exponential process
also implied various spatial long-run equilibria. This provides a means of
extending various results from time series analysis to spatial econometrics.
   The relation between spatiotemporal and spatial models motivates some
modeling strategies. First, economic theory underlies many time series models
and these may have spatial analogs. Therefore, theory may suggest more
speciﬁc functional forms.
   Second, allowing for growth in the explanatory variables X over time implies
that the dependence parameter governing the mean could diﬀer from the
dependence parameter governing the covariance structure of the model. For
example, in the spatial autoregressive model that allows X to grow over time
the DGP is: y = (In − ρa W )−1 Xβ + (In − ρb W )−1 r. Only the special case in
which X is constant over time leads to ρa = ρb . In large samples, eﬃciency
becomes less of an issue relative to bias, and so getting the mean part of the



© 2009 by Taylor & Francis Group, LLC
                              Spatiotemporal and Spatial Models             209

model correct (i.e., E(yt ) = F −1 (G)Xβ) becomes more important and greatly
aﬀects model interpretation.
   More generally, the processes governing X over time enter into the form of
the spatial model. This suggests more elaborate lag structures involving the
explanatory variables. For example, variants of the SDM that involve some
form of distributed lags might be considered (Byron, 1992).
   A third implication for modeling strategy would be that the covariance
structure may be more complicated than in the standard models. Although
modeling covariance may not be as important in large samples, it obviously
aﬀects the validity of inference for marginal variables and could aid in predic-
tion as well as imputation.
   Finally, using diﬀerent parameters for modeling the mean of the process
versus the disturbance process should provide some insurance against con-
tamination of the mean model parameters that can arise from misspeciﬁcation
of the disturbance process. As discussed in Chapter 3 in the context of the
Hausman test, misspeciﬁcation of the model for the disturbance process will
not aﬀect parameter estimates associated with the (correctly speciﬁed) mean
model in large samples. Therefore, using diﬀerent parameters to specify the
model for the mean versus the model for the disturbances may lead to more
robust spatial modeling. The SDEM introduced in Section 2.7 represents one
of the simplest models with this property.
   The development here should also beneﬁt the literature on space-time panel
data models. This literature relies on traditional spatial regression models
augmented with random eﬀects parameters and space-time covariance struc-
tures. Using spatiotemporal processes of the type explored here could make
these models more intuitive. This would ensure that space-time panel model
speciﬁcations could be justiﬁed as arising from underlying space-time inter-
actions that evolve over time to a steady state equilibrium. It would also
promote understanding of the properties associated with the observed panel
of cross-sectional sample data used to estimate the parameters of these mod-
els.




© 2009 by Taylor & Francis Group, LLC
Chapter 8
Spatial Econometric Interaction
Models


Gravity models have often been used to explain origin-destination (OD) ﬂows
that arise in ﬁelds such as international and regional trade, transportation
economics, population migration research, modeling of commodity ﬂows, com-
munication and other types of information ﬂows along a network and journey-
to-work studies.
   A large literature on theoretical foundations for these models in the speciﬁc
context of international trade models exists (Anderson, 1979; Anderson and
van Wincoop, 2004). In the regional science literature the gravity model
has been labeled a spatial interaction model (Sen and Smith, 1995), because
the regional interaction is directly proportional to the product of regional
size measures. In the case of interregional commodity ﬂows, the measure of
regional size is typically gross regional product or regional income. The model
predicts more interaction in the form of commodity ﬂows between regions of
similar (economic) size than regions dissimilar in size. In other contexts such
as knowledge ﬂows between regions (LeSage, Fischer and Scherngell, 2007)
the size measure of regions might be the stock of patents, so that regions with
similar knowledge stocks would exhibit more spatial interaction taking the
form of knowledge ﬂows.
   These models rely on a function of the distance between an origin and des-
tination as well as explanatory variables pertaining to characteristics of both
origin and destination regions. Spatial interaction models assume that us-
ing distance as an explanatory variable will eradicate the spatial dependence
among the sample of OD ﬂows between pairs of regions. The notion that
use of distance functions in conventional spatial interaction models eﬀectively
captures spatial dependence in interregional ﬂows has long been challenged.
Griﬃth (2007) provides an historical review of regional science literature on
this topic in which he credits Curry (1972) as the ﬁrst to conceptualize the
problem of spatial dependence in ﬂows. Griﬃth and Jones (1980) in a study
of Canadian journey-to-work ﬂows noted that ﬂows from an origin are “en-
hanced or diminished in accordance with the propensity of emissiveness of its
neighboring origin locations.” They also stated that ﬂows associated with a
destination are “enhanced or diminished in accordance with the propensity of
attractiveness of its neighboring destination locations.”
   LeSage and Pace (2008) make the point that assuming independence be-


                                                                            211
© 2009 by Taylor & Francis Group, LLC
212                                Introduction to Spatial Econometrics

tween ﬂows is heroic since OD ﬂows are fundamentally spatial in nature. They
extend the traditional gravity model to allow for spatial lags of the dependent
variable, which represent ﬂows from neighboring regions in these models. In
contrast to typical spatial econometric models where the sample involves n
regions, with each region being an observation, these models involve n2 = N
origin-destination pairs with each origin-destination pair being an observa-
tion. Spatial interaction modeling seeks to explain variation in the level of
ﬂows across the sample of N OD pairs.
   This chapter introduces maximum likelihood estimation procedures for spa-
tial interaction models set forth in LeSage and Pace (2008) along with Bayesian
MCMC estimation procedures that have not appeared elsewhere. Section 8.1
introduces the notation, and develops a general family of spatial econometric
interaction models that accommodate spatial dependence. Section 8.2 sets
forth the maximum likelihood estimation approach from LeSage and Pace
(2008) as well as Bayesian MCMC estimation procedures. An illustration is
provided in Section 8.3 using population migration ﬂows between metropolitan
areas. Section 8.4 discusses extensions to the spatial econometric interaction
model as well as alternative spatial modeling approaches to dealing with OD
ﬂows.




8.1        Interregional ﬂows in a spatial regression context
   Let Y denote an n × n square matrix of interregional ﬂows from n origin
regions to n destination regions where the n columns represent diﬀerent origins
and the n rows represent diﬀerent destinations as shown in Table 8.1. The
ﬂows considered here reﬂect a closed system that consists of an equal number
of origin and destination regions.


                  TABLE 8.1:        Origin-destination ﬂow matrix
                     Destination /Origin Origin 1 Origin 2 . . . Origin n
                       Destination 1      o1 → d1 o2 → d1 . . . on → d1
                       Destination 2      o1 → d2 o2 → d2 . . . on → d2
                              ..                          ..
                               .                           .
                          Destination n         o1 → dn   o2 → dn    ...   on → dn




   Given the organization of the OD ﬂow matrix in Table 8.1, we can use
n−1 Y ιn to form an n × 1 vector representing an average of the ﬂows from all
of the n origins to each of the n destinations, where ιn is an n × 1 vector of



© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models                    213

ones. Similarly, n−1 Y  ιn would produce an n × 1 vector that is an average of
ﬂows from all of the n destinations to each of the n origins.
   We can produce an N (= n2 ) × 1 vector of these ﬂows from the ﬂow matrix
in Table 8.1 in two ways, one reﬂecting an origin-centric ordering as shown
in Part A of Table 8.2, and the other reﬂecting a destination-centric ordering
as in Part B of the table.


 TABLE 8.2:                   Origin- and destination-centric OD ﬂow arrangements

                      Part A: Origin-centric scheme for OD ﬂows
        Origin-centric index l(o)     Origin-index o(o) Destination-index d(o)
                   1                           1                  1
                   ..                          ..                 ..
                    .                           .                  .
                   n                           1                  n
                    ..                          ..                 ..
                     .                           .                  .
                   N −n+1                          n                     1
                      ..                           ..                    ..
                       .                            .                     .
                          N                        n                     n


                Part B: Destination-centric scheme for OD ﬂows
    Destination-centric index l(d) Origin-index o(d) Destination-index d(d)
                  1                        1                   1
                    ..                       ..                  ..
                     .                        .                   .
                  n                        n                   1
                   ..                       ..                  ..
                    .                        .                   .
             N −n+1                        1                   n
                  ..                       ..                  ..
                   .                        .                   .
                          N                        n                     n




In the tables, the indices l(o) , l(d) denote the overall index from 1, . . . , N for the
origin-centric and destination-centric orderings respectively. The origin and
destination indices o, d range from 1, . . . , n, indicating the region of origin
and destination respectively.
   Beginning with a matrix Y whose columns reﬂect origins and rows des-
tinations, we obtain the origin-centric ordering using the vec operator that
transforms a matrix into a column vector by stacking columns sequentially,
y (o) = vec(Y ). The destination-centric ordering is produced using y (d) =



© 2009 by Taylor & Francis Group, LLC
214                                Introduction to Spatial Econometrics

vec(Y  ). These two orderings are related by the vec-permutation matrix P
so that P y (o) = y (d) . Based on the properties of permutation matrices, it is
also true that y (o) = P −1 y (d) = P  y (d) . For our discussion in this chapter
we will focus on the origin-centric ordering where the ﬁrst n elements in the
stacked vector y (o) reﬂect ﬂows from origin 1 to all n destinations. The last
n elements of this vector represent ﬂows from origin n to destinations 1 to
n. We will refer to this OD ﬂow vector as simply y, which represents the
dependent variable vector in our spatial econometric interaction model.
   A conventional gravity or spatial interaction model relies on a single vector
or an n × k matrix of explanatory variables that we label X, containing k
characteristics for each of the n regions. The matrix X is repeated n times
to produce an N × k matrix representing destination characteristics that we
label Xd . LeSage and Pace (2008) note that Xd equals ιn ⊗ X, where ιn is
an n × 1 vector of ones. A second matrix can be formed to represent origin
characteristics that we label Xo . This would repeat the characteristics of the
ﬁrst region n times to form the ﬁrst n rows of Xo , the characteristics of the
second region n times for the next n rows of Xo and so on, resulting in an
N × k matrix that we label Xo = X ⊗ ιn . International trade models typically
rely on a single explanatory variable vector X such as income to reﬂect the
size of regions. This would result in N ×1 vectors Xd , Xo rather than matrices
of explanatory variables.
   We note that the vec-permutation matrix P can be used to translate be-
tween origin-centric and destination-centric ordering of the sample data. For
example, if we adopted the destination-centric ordering (as opposed to the
origin-centric ordering), speciﬁcation of the destination explanatory variables
                         (d)
matrix would be Xd = X ⊗ ιn . This can be seen using the relation:
                                 (d)
P  Xd P = P  (ιn ⊗ X)P = Xd , to translate the origin-centric destination
                                                                   (d)
covariates Xd to the destination-centric ordering scheme Xd . Rules for
multiplication using Kronecker products allow us to simplify the expression
P  (ιn ⊗ X)P , (Horn and Johnson, 1994, Corollary 4.3.10, p. 260), so that
                                     (d)
P  (ιn ⊗ X)P = X ⊗ ιn , and thus Xd = X ⊗ ιn , under the destination-centric
ordering of the sample data.
   The distance from each origin to destination is also included as an explana-
tory variable vector in the gravity model. If we let G represent the n × n
matrix of distances between origins and destinations, g = vec(G) is an N × 1
vector of distances from each origin to each destination formed by stacking
the columns of the origin-destination distance matrix into a variable vector.
   This results in a regression model of the type shown in (8.1). This is
identical to the model that arises when applying a log transformation to the
standard gravity model (Sen and Smith, 1995, c.f., equation (6.4)).

                                  y = αιN + Xd βd + Xo βo + γg + ε          (8.1)
   The vectors βd and βo are k × 1 parameter vectors associated with the des-
tination and origin region characteristics. If a log transformation is applied to



© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models               215

the dependent variable y and explanatory variables matrix X, the coeﬃcient
estimates would reﬂect elasticity responses of OD ﬂows to the various origin
and destination characteristics. The scalar parameter γ reﬂects the eﬀect of
distance g, and α denotes the constant term parameter. The N × 1 vector ε
has a zero mean, constant variance and zero covariance between disturbances.
   LeSage and Pace (2008) propose a spatial autoregressive extension of the
non-spatial model in (8.1) shown in (8.2). This model can be viewed as
ﬁltering for spatial dependence related to the destination and origin regions.


          (IN − ρd Wd )(IN − ρo Wo )y = αιN + Xd βd + Xo βo + γg + ε         (8.2)

  The N × N matrix Wd is constructed from the typical row-stochastic n × n
matrix W that describes spatial connectivity between the n regions. We
assume that W is similar to a symmetric matrix so that it has real eigenvalues
and n orthogonal eigenvectors. The matrix Wd can be written using the
Kronecker product shown in (8.3).
                                                ⎛                   ⎞
                                               W 0n . . . . . . 0n
                                             ⎜                   .. ⎟
                                             ⎜ 0n W               . ⎟
                                             ⎜                      ⎟
                                             ⎜ ..                   ⎟
                               Wd = In ⊗ W = ⎜ .        W           ⎟        (8.3)
                                             ⎜                      ⎟
                                             ⎜            ..        ⎟
                                             ⎝                .     ⎠
                                               0n . . .         W
   The motivation for this construction is given by the origin-centric notation
from Table 8.2. Let Y1 be origin-destination ﬂows from the ﬁrst origin to all
destinations. The spatial lag W Y1 would then contain a spatial average of
ﬂows from this origin to neighbors of each destination i = 1, . . . , n. Similarly,
the spatial lag W Y2 would produce a spatial average of ﬂows from the second
origin to neighbors of each destination, and so on. This motivates use of the
Kronecker product to repeat the spatial lags n times, resulting in an N × N
spatial weight matrix that captures destination-based dependence.
   This type of dependence reﬂects the intuition that forces leading to ﬂows
from an origin to a destination may create similar ﬂows to nearby or neigh-
boring destinations, which is captured by the spatial lag created using the
matrix-vector product Wd y. This spatial lag formally captures the notion set
forth in Griﬃth and Jones (1980) that ﬂows associated with a destination are
“enhanced or diminished in accordance with the propensity of attractiveness
of its neighboring destination locations.”
   Taking a similar approach to that used in developing the matrix Wd , we
can also create an N × N row-standardized spatial weight matrix that we
label Wo = W ⊗ In . This follows by noting that W (Y1 ) provides spatial
averages around each origin of ﬂows to the ﬁrst destination. Doing this for all
destinations yields W Y  , and vec(W Y  ) = (W ⊗ In )vec(Y ) = (W ⊗ In )y. The



© 2009 by Taylor & Francis Group, LLC
216                                Introduction to Spatial Econometrics

spatial lag formed by the matrix product Wo y = (W ⊗ In )y captures origin-
based spatial dependence using an average of ﬂows from neighbors to the origin
regions to each of the destinations. This type of dependence reﬂects the notion
that forces leading to ﬂows from any origin to a particular destination region
may create similar ﬂows from nearby neighboring origins. The spatial lag
Wo y formally captures the point of Griﬃth and Jones (1980) that ﬂows from
an origin are “enhanced or diminished in accordance with the propensity of
emissiveness of its neighboring origin locations.”
   As already noted for the case of the explanatory variables matrices, the
vec-permutation matrix P can be used to translate between origin-centric
and destination-centric ordering of the sample data. For example, if we adopt
the destination-centric ordering (as opposed to the origin-centric ordering used
                                                                     (d)
here), speciﬁcation of the destination weight matrix would be Wd = W ⊗ In .
As in the case of the matrix Xd , we can use the relation: P Wd P = P  (In ⊗
                                                                 
                         (d)
W )P = W ⊗ In = Wd , to produce the destination weight matrix for the
destination-centric ordering scheme.
   The model in (8.2) is motivated by the fact that both types of dependence
are likely to exist in our spatial speciﬁcation for origin-destination ﬂows. This
model can be viewed as a successive spatial ﬁlter that ﬁlters the OD ﬂows in
y successively by (IN − ρd Wd ) and (IN − ρo Wo ). Remarkably one can change
the order in which the ﬁlter is applied and arrive at the same model. That is,
we could remove origin dependence ﬁrst and destination dependence second,
using the ﬁlter (IN − ρo Wo )(IN − ρd Wd ). This is true because the cross-
product term (W ⊗ In )(In ⊗ W ) = W ⊗ W is the same as the cross-product
(In ⊗ W )(W ⊗ In ) via the mixed-product rule for Kronecker products.
   Expanding the product (IN − ρd Wd )(IN − ρo Wo ) = IN − ρd Wd − ρo Wo +
ρd ρo Wd · Wo = IN − ρd Wd − ρo Wo − ρw Ww , leads us to consider a third
type of dependence reﬂected in the product Ww = Wo · Wd = (In ⊗ W ) ·
(W ⊗ In ) = W ⊗ W .1 This spatial weight matrix reﬂects an average of ﬂows
from neighbors to the origin to neighbors of the destination, which LeSage
and Pace (2008) label origin-to-destination dependence to distinguish it from
origin-based dependence and destination-based dependence.
   This leads LeSage and Pace (2008) to propose the general spatial autore-
gressive interaction model in (8.4) that takes into account origin, destination,
and origin-to-destination dependence.


       y = ρd Wd y + ρo Wo y + ρw Ww y + αιN + Xd βd + Xo βo + γg + ε                (8.4)
  The omitted variables and space-time dynamic motivations used to produce
spatial regression models that contain spatial lags of the dependent variables

1 We note that this speciﬁcation implies a restriction that ρ = −ρ ρ , but this restriction
                                                             w    o d
need not be enforced in applied work. Of course, restrictions on the values of the scalar
dependence parameters ρd , ρo , ρw must be imposed to ensure stationarity in the case where
ρw is free of the restriction.




© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models                217

set forth in Chapter 2 and Chapter 7 also apply to this model. One can begin
with a non-spatial theoretical relationship such as the utility theory used to
motivate non-spatial interaction models for migration, or the monopolistic
competition model in conjunction with a CES utility function used to derive
a non-spatial gravity equation for trade ﬂows. If we posit the existence of
omitted variables that exhibit spatial dependence and are correlated with
included variables, a model such as (8.4) that contains spatial lags of the
dependent variable (as well as the explanatory variables) will arise. That
is, an SDM variant of the model in (8.4) could be appropriate for spatial
econometric modeling of OD ﬂows. Similarly, a space-time dynamic can be
used to motivate the model in (8.4) as the long-run steady state equilibrium
of a process where OD ﬂows exhibit time dependence as well as space-time
dependence.
    In the trade literature, Anderson and van Wincoop (2004) argue that it
is important to include interaction terms that capture the fact that bilateral
trade ﬂows depend not only on bilateral barriers to trade, but also on trade
barriers across all trading partners. Trade barriers or multilateral trade resis-
tance are usually modeled as arising from price diﬀerentials between regions
taking the form of ‘cost-in-freight’ (c.i.f.) and ‘free-on-board’ (f.o.b.) prices at
the destination and origin regions. The argument is essentially that bilateral
predictions do not readily extend to a multilateral world because these ignore
indirect interactions that link all trading partners. Also of note is the work
of Behrens, Ertur and Koch (2007) who extend the monopolistic competition
model in conjunction with a CES utility function to derive a gravity equation
for trade ﬂows that contains spatial lags of the dependent variable. They ac-
complish this using a quantity-based version of the CES model and exploiting
the fact that price indices (that represent multilateral resistance to trade) im-
plicitly depend on trade ﬂows. This in conjunction with the fact that bilateral
trade ﬂows in their model depend on ﬂows from all other trading partners,
leads to a model that displays a spatial autoregressive structure in trade ﬂows.
Intuitively, they argue that when goods are gross substitutes, trade ﬂows from
any origin to a particular destination will depend on the entire distribution
of bilateral trade barriers (prices of substitute goods).
    A problem that plagues the empirical trade literature is the lack of reli-
able regional price information, (Anderson and van Wincoop, 2004). Because
of this, Anderson and van Wincoop (2004) suggest a non-statistical compu-
tational approach to replace the unobservable prices. As we have already
motivated, the presence of latent unobservable variables that exhibit spatial
dependence would lead to a model of the type in (8.4) which accounts for the
unobserved variables using spatial lags of the dependent variable.
    LeSage and Pace (2008) point out that this general model leads to nine
more speciﬁc models that may be of interest in empirical work. We enumerate
four of these models that result from various restrictions on the parameters
ρi , i = d, o, w. The model comparison methods from Chapter 6 could be used
to test these parameter restrictions. However, the nested nature of the family



© 2009 by Taylor & Francis Group, LLC
218                                Introduction to Spatial Econometrics

of nine models associated with the parameter restrictions allows the use of
conventional likelihood ratio tests. The four models are enumerated below.

         Non-spatial model. The restriction: ρd = ρo = ρw = 0 produces the
         non-spatial model where no spatial autoregressive dependence exists.
         Model 1. The restriction: ρw = 0 leads to a model with separable
         origin and destination autoregressive dependence embodied in the two
         weight matrices Wd and Wo , while ruling out origin-to-destination based
         dependence between neighbors of the origin and destination locations
         that would be captured by Ww .
         Model 2. The restriction: ρw = −ρd ρo results in a successive ﬁltering
         model involving both origin Wd , and destination Wo dependence as well
         as product separable interaction Ww , constrained to reﬂect the ﬁlter
         (IN − ρd Wd )(IN − ρo Wo ) = (IN − ρo Wo )(IN − ρd Wd ) = (IN − ρd Wd −
         ρo Wo + ρd ρo Ww ).
         Model 3. The unrestricted model shown in (8.4) involves three matrices
         Wd , Wo , and Ww , which represents the most general member of the
         family of models. Appropriate restrictions on ρd , ρo , and ρw can thus
         produce the other more specialized models.




8.2        Maximum likelihood and Bayesian estimation
   The likelihood provides the starting point for both maximum likelihood and
Bayesian estimation. We note that the concentrated log-likelihood function
for the model speciﬁcations will take the form in (8.5).

                                                              N
      ln L = κ + ln |IN − ρd Wd − ρo Wo − ρw Ww | −             ln(S(ρd , ρo , ρw ))   (8.5)
                                                              2
where S(ρd , ρo , ρw ) represents the sum of squared errors expressed as a func-
tion of the scalar dependence parameters alone after concentrating out the
parameters α, βo , βd , γ and σ 2 , and the constant κ that does not depend on
ρd , ρo , ρw (LeSage and Pace, 2008).
   LeSage and Pace (2008) show that the log-determinant of the N ×N matrix
that appears in (8.5) can be calculated using only traces of the n×n matrix W ,
which greatly simpliﬁes estimation of these models (see Chapter 4). Further
computational savings can be achieved by noting that we need not reproduce
the n × k data matrix X using the Kronecker products ιn ⊗ X, X ⊗ ιn , if
we exploit the special structure of this model. The algebra of Kronecker
products can be used to form moment matrices without dealing directly with



© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models                     219

N by N matrices. Given arbitrary, conformable matrices A, B, C, then
(C  ⊗ A)vec(B) = vec(ABC) (Horn    and Johnson, 1994, Lemma 4.3.1, p. 254-
255). Using Z = ιN Xd Xo g yields the moment matrix Z  Z shown in
(8.6), where the symbol 0k denotes a 1 × k vector of zeros.2
                          ⎛                                   ⎞
                               N        0k       0k ιn Gιn
                          ⎜ 0 nX  X 0 0k X  Gιn ⎟
                   Z Z = ⎜
                          ⎝ 0k
                                 k               k            ⎟        (8.6)
                                      0k 0k nX  X X  Gιn ⎠
                            ιn Gιn ιn G X ιn G X tr(G2 )
  Using the algebra of Kronecker products also allows us to avoid forming the
N by N matrices Wd , Wo , or Ww . Since Wd y = (In ⊗W )vec(Y ), it follows that
Wd y = vec(W Y ), using the relation, (C  ⊗ A)vec(B) = vec(ABC). Similarly,
Wo y = vec(Y W  ), and Ww y = vec(W Y W  ). We use these forms to rewrite the
model from (8.4) as shown in (8.7), where E is an n × n matrix of theoretical
disturbances.


 vec(Y ) − ρd vec(W Y ) − ρo vec(Y W  ) − ρw vec(W Y W  ) = Zδ + vec(E) (8.7)

   The expression on the left-hand-side of (8.7) is a linear combination of four
components, one involving the dependent variable vector vec(Y ), and the
other three representing spatial lags of this vector that reﬂect destination-
based dependence vec(W Y ), origin-based dependence vec(Y W  ) as well as
origin-to-destination based dependence, vec(W Y W  ). This allows us to ex-
press the parameter estimates as a linear combination of four separate com-
ponents which we label δ̂ (t) = (Z  Z)−1 Z  vec(F (t) (Y )), where F (t) (Y ) equals
Y , W Y , Y W  , or W Y W  when t = 1, . . . , 4. These components can be used
to determine the parameter estimate δ̂ using (8.8).

                                                                ⎛          ⎞
                                                                        1
                                                                    ⎜ −ρd ⎟
                                   δ̂ = δ̂ (1) δ̂ (2) δ̂ (3) δ̂ (4) ⎜      ⎟
                                                                     ⎝ −ρo ⎠        (8.8)
                                                                       −ρw

   We can use the expressions δ̂ (t) for t = 1, . . . , 4, to write these terms as
a function of the sample data X and Y and the parameters ρd , ρo , ρw . This
allows us to concentrate the log-likelihood with respect to the parameters δ̂ (t) ,
which contain the parameters α, βd , βo , γ associated with the model covariates.
   Component residual matrices Ê (t) , t = 1, . . . , 4 that take the form shown in
(8.9) can be used to express the overall residual matrix Ê = Ê (1) − ρd Ê (2) −
ρo Ê (3) − ρw Ê (4) related to the concentrated log-likelihood function.

2 We note that this log-likelihood function can be used for the SDM model by replacing the
                                                             
covariate matrix Z with Z̃ = ιN Xd Xo Wd Xd Wo Xo g in the expressions set forth in
the text.




© 2009 by Taylor & Francis Group, LLC
220                                Introduction to Spatial Econometrics


                                                            (t)
               Ê (t) = F (t) (Y ) − α̂(t) ιn ιn − X β̂d ιn − ιn (β̂o(t) ) X  − γ̂ (t) G    (8.9)

   For the purpose of maximizing the log-likelihood we introduce the cross-
product matrix Q that consists of various component residual matrices. Deﬁne
                  
Qij = tr(Ê (i) Ê (j) ), i = 1, . . . , 4, j = 1, . . . , 4, so the sum-of-squared residu-
als for our model become S(ρd , ρo , ρw ) = τ (ρd , ρo , ρw ) Qτ (ρd , ρo , ρw ), where
                                          
τ (ρd , ρo , ρw ) = 1 −ρd −ρo −ρw .
                                                                                          
   Consequently, recomputing S(ρd , ρo , ρw ) for any set of values ρd ρo ρw
requires a small number of operations that do not depend on n or k. This in
conjunction with pre-computed values for the log-determinant term also ex-
pressed as a function of these parameters calculated using the eﬃcient meth-
ods set forth in LeSage and Pace (2008) permits rapid optimization of the
likelihood function with respect to these parameters. Using a 2.0 Ghz. Intel
Core 2 Duo laptop computer it takes around 5 seconds to maximize the log-
likelihood function for a problem involving migration ﬂows between n = 359
(N = 128, 881) US metropolitan areas.
   The Bayesian Markov Chain Monte Carlo (MCMC) estimation procedures
for standard spatial regression models set forth in Chapter 5 can be applied
to these models. This allows us to extend the model in two useful ways. First,
we can accommodate fat-tailed disturbance distributions using our spatial au-
toregressive model extension of the non-spatial model introduced by Geweke
(1993) discussed in Chapter 5. Second, we can deal with a common problem
that arises in modeling OD ﬂows where many of the ﬂows associated with
OD pairs take on zero values. In Chapter 10, we discuss spatial Tobit models
where zero observations of the dependent variable are viewed as arising from
a sample truncation process. In the context of spatial econometric interaction
models we could view zero ﬂows as indicative of negative utility (or proﬁts)
associated with ﬂows between these particular OD pairs. For example, the ab-
sence of migration ﬂows between origin-destination pairs might be indicative
of negative utility arising from moves between these locations.
   Turning to Bayesian robust estimation of the spatial econometric interaction
model, we introduce a set of latent variance scalars for each observation. That
is, we replace ε ∼ N (0, σ 2 IN ), with:


                                           ε ∼ N [0, σ 2 Ṽ ]                                  (8.10)
                                        Ṽii = Vi , i = 1, . . . , N
                                         V = vec(R)
                                             ⎛                   ⎞
                                               v11 v12 . . . v1n
                                             ⎜ v21 v22       v2n ⎟
                                             ⎜                   ⎟
                                         R=⎜ .         ..        ⎟
                                             ⎝ ..          .     ⎠
                                                   vn1            vnn



© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models                     221

   Estimates for the N variance scalars in (8.10) are produced using an iid
χ2 (λ) prior on each of the variance scalars vij , i = 1, . . . , n, j = 1, . . . , n con-
tained in the n × n matrix R, with a mean of unity and a mode and variance
that depend on the hyperparameter λ of the prior. As discussed in Chapter 5,
small values of λ (around 5) result in a prior that allows for the individual vij
estimates to be centered on their prior mean of unity, but deviate greatly from
the prior value of unity in cases where the model residuals are large. Large
residuals are indicative of outliers or origin-destination combinations that are
atypical or aberrant relative to the majority of the sample of origin-destination
ﬂows.
   MCMC estimation requires that we sample sequentially from the complete
set of conditional distributions for all parameters in the model. We present
the conditional distributions (using our computationally eﬃcient) moment
matrix structure. The parameters of the model are: δ, σ, ρd , ρo , ρw and Ṽii , i =
                                   
1, . . . , N , where δ = α βd βo γ . The N × N diagonal matrix Ṽ contains the
variance scalar parameters that distinguish this model from the homoscedastic
model.
   We present conditional distributions for the parameters δ and σ 2 , when
uninformative priors are assigned to the parameters δ, and an independent
IG(a, b) prior is assigned to σ 2 . We rely on a uniform prior over the range
−1 < ρd , ρo , ρw < 1 for these parameters, and impose stability restrictions
that i ρi > −1, i ρi < 1, i = d, o, w, using rejection sampling. We rely on
Geweke’s iid chi-squared prior based on λ degrees of freedom for the variance
scalars vij . We treat λ as a degenerate hyperparameter, but note that Koop
(2003) provides an extension where an exponential prior distribution is placed
on λ. Formally, our priors can be expressed as:


                                        π(δ) ∝ N (c, T ), T → ∞                    (8.11)
                                                       2
                                   π(λ/vij ) ∼ iid χ (λ)                           (8.12)
                                     π(σ 2 ) ∼ IG(a, b)                            (8.13)
                                        π(ρi ) ∼ U (−1, 1), i = d, o, w            (8.14)
   The conditional posterior distribution for the δ parameters take the form
of a multivariate normal:


                            p(δ | ρd , ρo , ρw , σ 2 , Ṽ ) ∝ N (δ̄, σ 2 D̄)       (8.15)
                                δ̄ = β (1) − ρd β (2) − ρo β (3) − ρw β (4)
                           β (i) = (Z  Ṽ −1 Z)−1 Z  Ṽ −1 F (i) (Y )
                     F (i) (Y ) = Y, W Y, Y W  , W Y W  , i = 1, . . . , 4
                              D̄ = (Z  Ṽ −1 Z)−1
  The conditional posterior for the parameter σ 2 based on our prior σ 2 ∼
IG(a, b) is proportional to an inverse gamma distribution:



© 2009 by Taylor & Francis Group, LLC
222                                Introduction to Spatial Econometrics




               p(σ 2 | ρd , ρo , ρw , δ, Ṽ ) ∝ IG[a + N/2, τ  Q̃τ /(2 + b)]
                                               
                  τ = 1 −ρd −ρo −ρw
                Q̃ij = tr[(E (i)  R̃ )(R̃  E (j) )] i, j = 1, . . . , 4
                       ⎛ −1 −1              −1 ⎞
                          v112 v122 . . . v1n2
                       ⎜ − 12 − 12          −1 ⎟
                       ⎜ v21 v22           v2n2 ⎟
                       ⎜
                  R̃ = ⎜ .                      ⎟
                                     ..         ⎟
                       ⎝ ..              .      ⎠
                                 −1               −1
                               vn12              vnn2
                                                           (i)
               E (i) = F (i) (Y ) − α(i) ιn ιn − Xβd ιn − ιn (βo(i) ) X  − γ (i) G
                                               
               β (i) ≡ α(i) βd(i) βo(i) γ (i) = (Z  Ṽ −1 Z)−1 Z  Ṽ −1 F (i) (Y )


where τ  Q̃τ represents the sum of squared residuals for any given values of
the parameters ρd , ρo , ρw .
  The conditional posterior for each variance scalar vij , i, j = 1, . . . , n can be
expressed as in (8.16), where Eij references the i, jth element of the matrix
E.


                               2
                              Eij +λ
                         p(          | ρd , ρo , ρw , δ, σ 2 ) ∝ χ2 (λ + 1)              (8.16)
                                vij
                                        E = E (1) − ρd E (2) − ρo E (3) − ρw E (4)

   In this model we must sample each of the three parameters ρd , ρo , ρw condi-
tional on the two other dependence parameters and the remaining parameters
(δ, σ 2 , V ). The log conditional posterior for ρd takes the form shown in (8.17),
with analogous expressions for the other two spatial dependence parameters.



           p(ρd |ρo , ρw , δ, σ 2 , Ṽ ) ∝ |IN − ρd Wd − ρo Wo − ρw Ww |                   (8.17)
                                                                                        
                                                    1
                                         · exp − 2 τ (ρd , ρo , ρw ) Q̃τ (ρd , ρo , ρw )
                                                  2σ

We note the presence of the determinant term which can be evaluated using
the same algorithms for rapidly evaluating this expression as in maximum like-
lihood estimation (Chapter 4). Sampling for the parameters ρi , i = d, o, w is
accomplished using a Metropolis-Hastings algorithm based on a tuned normal
random-walk proposal of the type discussed in Chapter 5.



© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models             223



8.3        Application of the spatial econometric interaction
           model
   To illustrate the model, we used (logged) population migration ﬂows be-
tween the 50 largest US metropolitan areas over the period from 1995 to
2000. The metropolitan area ﬂows were constructed from population-weighted
county-level migration ﬂows and explanatory variables were taken from the
1990 Census. The population-weight (logged) level of 1990 county income
and the metropolitan area (logged) population were used as explanatory vari-
ables to avoid potential endogeneity problems. A third explanatory variable
was the proportion of 1990 metropolitan area residents who lived in the same
house ﬁve years ago. A log transformation was applied to this proportion.
   One problem that often arises with OD ﬂows is the presence of zero ﬂow
magnitudes between origin-destination pairs, and for this sample there were
122 of the 2500 ﬂows that were zero, making this a minor problem here.
   A second problem is the presence of large ﬂows on the diagonal of the OD
ﬂow matrix because of the large degree of intraregional migration relative to
interregional migration reﬂected by smaller ﬂows or zeros for the oﬀ-diagonal
elements. One approach used in empirical studies is to set the diagonal ele-
ments of the ﬂow matrix to zero (Tiefelsdorf, 2003; Fischer, Scherngell and
Jansenberger, 2006). This reﬂects a view that intraregional ﬂow elements
represent a nuisance, since the focus of the model is on interregional ﬂows.
However, in our spatial econometric interaction model where spatial lags re-
ﬂect local averages of the dependent variable, this would defeat the purpose
of using local averages.
   LeSage and Pace (2008) suggest an alternative approach to dealing with
the large intraregional ﬂow magnitudes which involves adding a separate in-
tercept term for these observations as well as a set of explanatory variables.
The intraregional explanatory variables contain non-zero observations for the
intraregional observations extracted from the explanatory variables matrix X,
and zeros elsewhere. We label this matrix Xi , and the associated intercept
term c = vec(In ). This procedure introduces a separate model for the intrare-
gional ﬂows. This should allow the coeﬃcients associated with the matrices
Xd , Xo to reﬂect interregional variation in OD ﬂows, and those associated
with the matrix Xi to capture intraregional variation in ﬂows. Implementing
this approach requires that we adjust the moment matrix Z  Z as well as the
cross-product terms Z  vec(F (t) (Y )) to reﬂect these changes.
   We can write the adjusted model as in (8.18).


 (IN − ρd Wd )(IN − ρo Wo )y = ιN α + cαi + Xd βd + Xo βo + Xi βi + γg + ε (8.18)




© 2009 by Taylor & Francis Group, LLC
224                                Introduction to Spatial Econometrics

  The modiﬁed moments matrix for this model is shown in (8.19), where
dg = diag(G).3 The cross-product terms Z  y required to produce least-
squares estimates for the parameters, (Z  Z)−1 Z  y would take the form shown
in (8.19). We could use a similar set of deﬁnitions Z  vec(F (t) (Y )), where
(F (t) (Y )) equals Y , W Y , Y W  , or W Y W  for t = 1, . . . , 4 to produce spatial
autoregressive model estimates.

               ⎛                                    ⎞         ⎛             ⎞
            N     n 0k          0k     0k ιn Gιn                 ιn Y ιn
      ⎜ n         n 0k          0k     0k       0 ⎟           ⎜ tr(Y ) ⎟
      ⎜                                             ⎟         ⎜             ⎟
      ⎜     0     0   nX  
                            X 0 
                                  0   X 
                                          X X 
                                                Gι  ⎟         ⎜ X  Y ιn ⎟
     ⎜
   ZZ=⎜       k     k           k   k             n ⎟        ⎜             ⎟
                                               ⎟ , Z y = ⎜ X  Y  ιn ⎟
      ⎜ 0k 0k 0k0k nX X X  X X G ιn ⎟                     ⎜            ⎟
      ⎝ 0k 0k X X X X X X 0k ⎠                                ⎝ X diag(Y ) ⎠
        ιn G ιn 0 ιn G X ιn GX 0k tr(G2 )                   tr(GY )
                                                                           (8.19)


        TABLE 8.3:         Spatial econometric interaction model estimates
                                                 Adjusted Model
           Variables                   Coeﬃcient t-statistic t-probability
           Constant                    1.5073           8.19   0.0000
           c                           0.7170           2.63   0.0086
           Destination Pop 90          0.2376           2.06   0.0387
           Destination Inc 90          0.3269           5.56   0.0000
           Destination Samehouse      −0.2371         −1.35    0.1757
           Origin Pop 90               0.2129           1.82   0.0683
           Origin Inc 90               0.2842           4.90   0.0000
           Origin Samehouse           −0.4787         −2.69    0.0071
           Intraregional Pop 90        0.3869           0.48   0.6269
           Intraregional Inc 90        0.8018           2.05   0.0399
           Intraregional Samehouse     2.0410           1.65   0.0991
           Distance                   −0.1255         −6.30    0.0000
           ρ̂d                         0.6428         39.78    0.0000
           ρ̂o                         0.6358         39.25    0.0000
           ρ̂w                        −0.5427        −16.39    0.0000
           σ̂ 2                        1.8119
           Log-Likelihood             −3.6309 ·103



  Maximum likelihood estimates are presented in Table 8.3 for the model
in (8.18). From the table, we see that all three spatial dependence param-

3 In our discussion we have portrayed the diagonal of the distance matrix as containing

zeros. However, a frequent practice in analysis of trade ﬂows between countries is to use
a non-zero intraregional distance which would make the main diagonal contain non-zero
values.




© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models                          225

eters are statistically signiﬁcant. This suggests the presence of origin-based,
destination-based and origin-to-destination based spatial dependence in the
population migration ﬂows between the largest 50 metropolitan areas.
   Table 8.4 shows log-likelihoods from four models: the non-spatial model es-
timated using least-squares and models that we have labeled Model 1, Model
2, and Model 3 from the family of models enumerated in Section 8.1. These
values along with likelihood ratio test statistics make it clear that the unre-
stricted version of the model (Model 3) is superior to the restricted variants of
the model (Models 1 and 2). The non-spatial model has a much lower likeli-
hood than all of the spatial models, and this model included the adjustments
to the intercept as well as the variables Xi to account for large intraregional
ﬂows. The LR tests also reject Model 2 containing the restriction ρw = −ρd ·ρo
as inconsistent with this sample data. To draw inferences regarding the mag-
nitude and signiﬁcance of the coeﬃcient estimates we need to calculate direct,
indirect and total eﬀects estimates for our model parameters.
   Interpreting the parameter estimates requires that we implement our cal-
culations for direct, indirect and total impact estimates. For this model the
partial derivatives take a more complex form that can be derived from the
expression in (8.20) for this extended type of SAR model.4


        TABLE 8.4:                      Spatial econometric interaction model
        log-likelihoods
           Model             Log-likelihood LR test                       χ2 (5%) Value
                                            vs. Model 3
           Model 3           −3630.9
           Model 2           −3645.5          29.2                        χ2 (1) = 3.84
           Model 1           −3868.3         474.8                        χ2 (1) = 3.84
           Non-spatial model −4370.7        1479.6                        χ2 (3) = 7.82



   To produce measures of dispersion for these estimates, the parameters δ
and ρd , ρo , ρw were simulated using a multivariate normal distribution and
the numerical Hessian estimate of the variance-covariance matrix. A sample
of 1,000 simulated parameters were used in Sr (Wd , Wo , Ww ) with means and
standard deviations used to construct t-statistics reported in Table 8.5.
   The eﬀects estimates indicate that the (cumulative) indirect impacts are
larger than direct impacts, accounting for about two-thirds of the total eﬀects
magnitudes. Impact estimates for the 1990 population (Pop 90 ) and 1990 per
capita income (Inc 90 ) can be interpreted as elasticities since these variables as

4 Only traces are required to calculate the eﬀects estimates so it would be computationally

ineﬃcient to use the large matrix inverse of S(Wd , Wo , Ww ). The trace-based methods
described in Chapter 4 can be extended to this case.




© 2009 by Taylor & Francis Group, LLC
226                                Introduction to Spatial Econometrics

well as the dependent variable are in log form. The eﬀects estimates emphasize
the relative importance of spatial spillovers when considering migration ﬂows
which have been ignored by empirical studies relying on non-spatial models.


       (IN − ρd Wd − ρo Wo − ρw Ww )y = Zδ + ιN α + cαi + ε                        (8.20)
                                                      k
                                            E(y) =         S(Wd , Wo , Ww )Zr δr
                                                     r=1
                                         ∂y/∂Zr = S(Wd , Wo , Ww )IN δr
                                 S(Wd , Wo , Ww ) = (IN − ρd Wd − ρo Wo − ρw Ww )−1

   A motivation for use of origin- and destination-speciﬁc variables such as
per capita income and population, Origin Pop 90, Origin Inc 90, Destination
Pop 90, Destination Income 90, in non-spatial models was the notion of push
factors associated with origin regions and pull factors associated with destina-
tion regions. When we allow for spatial dependence taking the form of lagged
dependent variables, this type of interpretation becomes problematical.
   To illustrate, we consider the case of a positive pull factor, a ceteris paribus
increase in per capita income of a single destination metropolitan area. A
positive direct eﬀect arising from this change would be relatively straightfor-
ward to interpret in terms of a pull factor, with some positive feedback loop
eﬀect. The existence of positive indirect eﬀects or spatial spillovers in our
model suggests that neighbors to the destination may also receive a positive
pull from the increase in income. However, in addition to destination-based
dependence, our model also includes origin-based dependence as well as origin-
to-destination based dependence. Our measure of cumulative indirect eﬀects
captures spatial spillovers to all other regions as should be clear from the
structure of Sr (Wd , Wo , Ww ). This means that if we partitioned these spillover
impacts over space, we would expect to ﬁnd spillovers falling on: 1) neighbors
to the destination region and 2) neighbors to the regions where migration
ﬂows originate. This makes it more diﬃcult to rely on the conventional pull
factor interpretation, since spatial spillover eﬀects that arise at origin regions
would typically be associated with push factors, not pull factors.
   Allowing for spatial dependence at origins, destinations, and between ori-
gins and destinations leads to a situation where changes at either the origin
or destination will give rise to forces that set in motion a series of events. If
we attempt to associate push with origin regions and pull with destination
regions, any change gives rise to a series of push and pull events. A better way
to view the forces set in motion by ceteris paribus changes in an explanatory
variable associated with a single metropolitan area is in terms of multilateral
eﬀects that permeate the entire system of spatially interrelated regions. The
point here is essentially that advanced by Anderson and van Wincoop (2004)
and Behrens, Ertur and Koch (2007), who noted the diﬃculty of extending



© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models                 227
     TABLE 8.5:                   Spatial econometric interaction model eﬀects
     estimates
       Variables                Mean estimates t-statistic t-probability
                                             Direct eﬀects
        Destination Pop 90       0.2982           2.13      0.0331
        Destination Inc 90       0.4068           5.94      0.0000
        Destination Samehouse   −0.2870         −1.31       0.1885
        Origin Pop 90            0.2608           1.85      0.0640
        Origin Inc 90            0.3517           4.69      0.0000
        Origin Samehouse        −0.6007         −2.62       0.0087
        Intraregional Pop 90     0.4543           0.46      0.6434
        Intraregional Inc 90     1.0061           2.09      0.0362
        Intraregional Samehouse  2.5476           1.68      0.0922
        Distance                −0.1538         −6.36       0.0000
                                            Indirect eﬀects
        Destination Pop 90       0.6293           1.95      0.0504
        Destination Inc 90       0.8591           4.42      0.0000
        Destination Samehouse   −0.5845         −1.27       0.2014
        Origin Pop 90            0.5571           1.68      0.0918
        Origin Inc 90            0.7448           3.65      0.0003
        Origin Samehouse        −1.2491         −2.60       0.0093
        Intraregional Pop 90     0.9895           0.45      0.6474
        Intraregional Inc 90     2.1270           1.98      0.0474
        Intraregional Samehouse  5.3675           1.60      0.1082
        Distance                −0.3192         −9.01       0.0000
                                             Total eﬀects
        Destination Pop 90       0.9275           2.04      0.0414
        Destination Inc 90       1.2659           5.17      0.0000
        Destination Samehouse   −0.8715         −1.30       0.1936
        Origin Pop 90            0.8179           1.75      0.0787
        Origin Inc 90            1.0965           4.13      0.0000
        Origin Samehouse        −1.8498         −2.67       0.0076
        Intraregional Pop 90     1.4438           0.46      0.6449
        Intraregional Inc 90     3.1331           2.05      0.0404
        Intraregional Samehouse  7.9151           1.64      0.0994
        Distance                −0.4730         −9.82       0.0000




notions such as push and pull that arose in the context of bilateral ﬂows to a
multilateral world where indirect interactions link all metropolitan regions.
  Given these caveats regarding interpretation of the eﬀects estimates from
our model of metropolitan migration ﬂows, the most salient interpretation
of these eﬀects might be in terms of diﬀerences between the direct and in-
direct eﬀects of origin and destination variables. For example, the positive
diﬀerence between destination and origin direct eﬀects associated with per
capita income (0.40 − 0.35) could be interpreted as meaning that positive



© 2009 by Taylor & Francis Group, LLC
228                                Introduction to Spatial Econometrics

(1990) income gaps between metropolitan areas gave rise to increased migra-
tion ﬂows to metropolitan areas having relatively higher per capita incomes.
The positive diﬀerence between indirect eﬀects associated with (1990) per
capita income of destination and origin metropolitan areas (0.86 − 0.74) sug-
gests that (1990) income gaps between metropolitan areas led to spillovers that
increased migration ﬂows to all other regions. Given what we know about the
spatial structure of indirect or spatial spillover eﬀects, these increased mi-
gration ﬂows most likely impacted regions that were neighbors to origin and
destination metropolitan areas exhibiting large relative income gaps.
   There is a similar pattern of positive diﬀerences between the direct ef-
fects associated with the destination and origin (1990) population variable
(0.29 − 0.26). This suggests positive migration ﬂows arose as a result of
(1990) population size diﬀerences that had a positive direct impact on des-
tination metropolitan areas. The positive diﬀerence between indirect eﬀects
(0.63−0.55) suggests that (1990) population gaps between metropolitan areas
led to spatial spillover eﬀects that gave rise to higher levels of migration ﬂows
to all other regions, in a fashion similar to gaps in (1990) per capita income.
   The origin and destination Samehouse variables exhibit negative direct and
indirect eﬀects, suggesting lower (1995-2000) migration ﬂows for metropolitan
areas where more people lived in the same house in 1990 as in 1985. This also
resulted in negative spatial spillovers, meaning lower levels of migration ﬂow
for other metropolitan regions as well.
   If our interest centered on interregional migration ﬂows, we might view
the intraregional variables as controls and the associated eﬀects estimates as
nuisance parameters. However, the positive direct eﬀect elasticity of 1 and
indirect eﬀect elasticity of 2.12 leads to a total eﬀect greater than 3. This sug-
gests the direct or own-region eﬀect of (1990) per capita income on migration
ﬂows was positive as was the indirect eﬀect. Intraregional (1990) population
also had positive but not signiﬁcant direct, indirect and total eﬀects. The
total eﬀect of the intraregional Samehouse variable is large and positive, but
signiﬁcant only at the 90 percent level.
   The distance estimate has a total eﬀect of −0.48 which is much larger
than one would infer from the model coeﬃcients reported in Table 8.3. The
model coeﬃcient is of course close to the direct eﬀect estimate in Table 8.5, a
typical result noted earlier in our discussion regarding interpretation of impact
estimates from these models.




8.4        Extending the spatial econometric interaction model
   There are a number of problems that are encountered in empirical modeling
of OD ﬂows. The next sections describe three extensions of these models that



© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models              229

address some of these issues.

8.4.1         Adjusting spatial weights using prior knowledge
   One way to extend the spatial econometric interaction model that is appli-
cable to interregional commodity ﬂows is to use a priori non-sample knowledge
regarding the transportation network structure that connects regions. LeSage
and Polasek (2008) point out that it is relatively simple to adjust the spatial
weight matrix to reﬂect the presence or absence of interregional transport
connectivity. They use truck and train commodity ﬂows between 40 Austrian
regions, where the mountainous terrain precludes the presence of major rail
and highway infrastructure in all regions. Bayesian model comparison meth-
ods show that adjusting the spatial weight matrix to reﬂect transportation
network structure results in an improved model.
   To illustrate this type of adjustment, consider ﬂows from origin A to des-
tination Z depicted in Figure 8.1. Rook-type contiguity has been used to
deﬁne neighbors to the origin region A and destination region Z. This re-
ﬂects the type of movements that the Rook piece in the game of chess can
make on our regular grid that resembles a checkerboard. Using the standard
spatial weighting approach, origin-based dependence would rely on neighbors
to origin region A (labeled c, e, f, h) to form the spatial lag vector Wo y. The
spatial lag vector Wd y reﬂecting destination-based dependence would rely on
an average of neighbors to destination region Z (s, u, v, x). Finally, the spatial
lag Ww y that captures origin-to-destination dependence would be constructed
using an average over all neighbors to both the origin and destination regions
A and Z, (c, e, f, h, s, u, v, x).
   LeSage and Polasek (2008) suggest using information on regions through
which the transportation routes pass to modify the spatial weight structure
that is used to form the matrices Wd , Wo and Ww . The ﬁgure provides an
example where a highway extends from region A to Z, passing through re-
gions h, A, c on the way to and from the origin region A, and through regions
x, Z, s as it passes through the destination region Z. They make the plausible
argument that if accessibility to the highway from regions such as e, f, or u, v
is diﬃcult or impossible, the matrices Wo , Wd and Ww should be adjusted to
reﬂect this a priori information.
   One example of a possible modiﬁcation would be to construct Wo y based
on an average of neighboring regions h and c on the highway route near the
origin region A. For the destination spatial lag, an average of regions x and
s that are neighbors to Z and also on the highway route would be used to
form Wd y. Finally, the spatial lag Ww y could be constructed using an average
involving regions h, c, x, s, those that neighbor both the origin and destination
and are also on the highway route. Intuitively, they argue that we would
expect to ﬁnd higher levels of commodity ﬂows between origin-destination
pairs with a highway connection, than those that are not connected. Of
course, one important role played by the spatial weight matrix in spatial



© 2009 by Taylor & Francis Group, LLC
230                                Introduction to Spatial Econometrics




                                                 s

                                            u    Z      v      <------ Destination Region
                                                                  and neighbors
                                                 x



                                                 <----- highway route



                                                 c

                                            e    A      f      <------ Origin Region
                                                                  and neighbors
                                                 h




       FIGURE 8.1: Origin-Destination region contiguity relationships



econometric models is to capture interregional connectivity. It should not be
surprising that LeSage and Polasek (2008) ﬁnd evidence that improvements
on this aspect of the spatial weight matrix lead to a superior ﬁt of the model.
  Of course, in most developed countries regions tend to be well-connected
by transportation infrastructure, however there are exceptions where natural
boundaries such as bodies of water or mountains lead to less connectivity.
A map showing Austrian regions that lie on or oﬀ the major road and rail
network is shown in Figure 8.2. From the map we can see clear evidence of
regions that do not share a position along major transportation routes, and
we would expect this to have an impact on interregional road/rail commodity
ﬂows.


8.4.2         Adjustments to address the zero ﬂow problem
   There are extensions that can be made to the spatial econometric interac-
tion model to address the issue of zero ﬂows. The presence of a large number
of zero ﬂows would invalidate the normality assumption needed for maximum
likelihood estimation. At a ﬁner spatial scale this problem becomes more



© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models                  231


                                                                   road/rail absent
                                                                   road/rail present




  FIGURE 8.2: Regions on and oﬀ of Austria’s major road/rail network



acute, suggesting that aggregation to larger spatial units or cumulating ﬂows
over a longer time period is one approach to eliminating zeros.
  For our sample of 1995-2000 population migration ﬂows between the largest
50 metropolitan areas, 3.76% of the OD-pairs contained zero ﬂows, whereas
9.38% of the OD-pairs were zero for the largest 100 metropolitan areas. In the
case of the largest 300 metropolitan areas, 32.89% of the OD pairs exhibit zero
ﬂows. Since the largest 50 metropolitan areas contain around 49 percent of
the population and 30 percent of persons migrating, one might not be willing
to restrict the sample to only large metropolitan areas to avoid excessive zero
ﬂows.
  In a non-spatial application to international trade ﬂows, Ranjan and To-
bias (2007) treat the zero ﬂows using a threshold Tobit model. They note
that commonly used ln(1 + y) as the dependent variable ignores the mixed
discrete/continuous nature of ﬂows and arbitrarily adds unity to the depen-
dent variable to avoid taking the log of zero.
  Their treatment interprets observed ﬂows (y) as a latent indicator of desired
trade (y ), with zero trade volume viewed as resulting from a situation where



© 2009 by Taylor & Francis Group, LLC
232                                Introduction to Spatial Econometrics

the desired amount of trade is less than an amount that would be lost in
transit (the threshold) using the conventional iceberg transport cost from
trade theory. This results in a non-spatial model taking the form in (8.21),
where the scalar τ represents the threshold, a parameter to be estimated.

                                           ln(y + ιN τ ) = Zδ + ε         (8.21)
                                              &
                                               yi if yi > 0,
                                        yi =                              (8.22)
                                               0 if −τ < yi ≤ 0.
   When the parameter τ = 0, we have the standard Tobit model and the
latent data interpretation for y is limited because we are simply modeling
observed ﬂows y. They use the fact that for τ > 0, the model places a discrete
mass over the zero ﬂows that we noted are typically found in ﬂow data. This
approach allows the basic log-linear speciﬁcation of the gravity equation to
be used.
   In Chapter 10 we introduce a spatial Tobit model that contains spatial
lags of the dependent variable which could be used in conjunction with the
threshold ideas from Ranjan and Tobias (2007) to treat the zero ﬂows problem.

8.4.3         Spatially structured multilateral resistance eﬀects
   The monopolistic competition model in conjunction with a CES utility
function was used by Anderson and van Wincoop (2004) to derive a gravity
equation for trade ﬂows that allows for transport costs and general barriers
to trade. Conventional approaches to empirically incorporating multilateral
trade resistance terms that arise in the form of “cost-in-freight” (c.i.f.) and
“free-on-board” (f.o.b.) price diﬀerentials between regions have suﬀered from
the lack of reliable price information. A host of alternative approaches have
been used to overcome this problem in empirical applications. One approach
is to simply use published price indexes, but the validity of these has been
questioned by Anderson and van Wincoop (2004). Ranjan and Tobias (2007)
incorporate random eﬀects parameters for the origin and destination regions
in their threshold Tobit model, and it has become standard practice to rely
on ﬁxed eﬀects parameters for origin and destination regions in non-spatial
versions of the gravity model used in the empirical trade literature (Feenstra,
2002).
   The ﬁxed eﬀects models take the form in (8.23), where Δo is an N × n
matrix containing elements that equal 1 if region i is the origin region and
zero otherwise, and θo is an n × 1 vector of associated ﬁxed eﬀects estimates
for regions treated as origins. Similarly, Δd is an N × n matrix containing
elements that equal 1 if region j is the destination region and zero otherwise,
and θd is an n×1 vector of associated ﬁxed eﬀects estimates for regions treated
as destinations.

                        y = α + βo Xo + βd Xd + γg + Δo θo + Δd θd + ε    (8.23)



© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models              233

   This approach interprets the parameters in the vector θo as latent “prices”
or multilateral resistance indices for the n regions viewed as origins and sim-
ilarly for the parameters θd for the destinations.
   Spatially structured random eﬀects seem more plausible since this approach
introduces latent eﬀects parameters that are structured to follow a spatial
autoregressive process. We provided one motivation for this in Section 2.3
based on spatial heterogeneity. This type of model can be viewed as imposing
a “stochastic restriction” on the origin-destination eﬀects parameters so that
multilateral resistance is similar for neighboring regions. This is motivated by
the notion that latent or unobservable barriers to regional trade (which are
usually motivated theoretically as price diﬀerential eﬀects) should be similar
for regions that are located nearby. As in the case of ﬁxed eﬀects, a set of
2n individual eﬀects parameters is estimated using the sample of N OD ﬂow
observations. This approach was introduced by LeSage and Llano (2007) to
model commodity ﬂows between Spanish regions. The model takes the form
in (8.24).


                                         y = Zδ + Δd θd + Δo θo + ε         (8.24)
                                        θd = ρd W θ d + u d
                                        θo = ρo W θ o + u 0
                                        ud ∼ N (0, σd2 In )
                                        uo ∼ N (0, σo2 In )
   Given an origin-centric orientation of the ﬂow matrix (columns as origins
and rows as destinations), the matrices Δd = In ⊗ ιn and Δo = ιn ⊗ In
produce N by n matrices. It should be noted that estimates for these two
sets of random eﬀects parameters are identiﬁed, since a set of n sample data
observations are aggregated through the matrices Δd and Δo to produce each
estimate in θd , θo .
   The spatial autoregressive structure placed on the origin and destination
eﬀects reﬂects an implied prior for the spatial eﬀects vector θd conditional on
ρd , σd2 and for θo conditional on ρo , σo2 shown in (8.25) and (8.26).

                                                                       
                                                          1  
                      π(θd |ρd , σd2 ) ∼ (σd2 )n/2 |Bd |exp
                                                        − 2 θd Bd Bd θd     (8.25)
                                                         2σd
                                                                      
                                  2       2 n/2           1  
                      π(θo |ρo , σo ) ∼ (σo ) |Bo |exp − 2 θo Bo Bo θo      (8.26)
                                                         2σo
                                 Bd = In − ρd W
                                 Bo = In − ρo W
  Estimation of the spatially structured origin eﬀects vector θo requires intro-
duction of two additional parameters (ρo , σo2 ) to the model. One of these con-
trols the strength of spatial dependence between regions (treated as origins)



© 2009 by Taylor & Francis Group, LLC
234                                Introduction to Spatial Econometrics

and the other controls the variance/uncertainty of the prior spatial structure.
Given these two scalar parameters along with the spatial structure, the n ori-
gin eﬀects parameters are completely determined. One could view the spatial
connectivity matrix W as introducing additional exogenous information that
augments the sample data information. In contrast, the conventional ﬁxed
origin eﬀects approach introduces n additional parameters to be estimated
without (materially) augmenting the sample data information.
   Another point about the spatially structured prior is that if the scalar spa-
tial dependence parameters (ρo , ρd ) are not signiﬁcantly diﬀerent from zero,
the spatial structure of the eﬀects vectors disappears, leaving us with normally
distributed random eﬀects parameters for the origins and destinations similar
to the model of Ranjan and Tobias (2007). LeSage and Llano (2007) pro-
vide details regarding Bayesian MCMC estimation of this hierarchical linear
model.

8.4.4         Flows as a rare event
   For some OD ﬂow matrices that contain an extremely large proportion of ze-
ros, the argument for sample truncation seems questionable. LeSage, Fischer
and Scherngell (2007) extend the model in (8.14) using results from Frühwirth-
Schnatter and Wagner (2006). In their examination they treat interregional
patent citations from a sample of European Union regions as representing
knowledge ﬂows. Counts of patents originating in region i that were cited by
regions j = 1, . . . , n are used to form an OD knowledge ﬂow matrix. Since
cross-region patent citations are both counts and rare events, a Poisson distri-
bution seems much more plausible than the normal distribution required for
maximum likelihood estimation of the spatial econometric interaction model.
   Frühwirth-Schnatter and Wagner (2006) argue that (non-spatial) Poisson
regression models (including those with random-eﬀects) can be treated as
a partially Gaussian regression model by conditioning on two strategically
chosen sequences of artiﬁcially missing data. Chapter 10 provides more de-
tails regarding Bayesian treatment of binary 0,1 observations as indicators of
latent unobserved utility, an idea originated by Albert and Chib (1993). Af-
ter conditioning on both of these latent sequences, Frühwirth-Schnatter and
Wagner (2006) show that the resulting model can be sampled using Gibbs
sampling of all regression parameters and the latent sequences. This requires
random draws from only known distributions such as multivariate normal, in-
verse Gamma, exponential, and a discrete distribution with a limited number
of categories, which eliminates the need for use of Metropolis-Hastings steps
during sampling.
   There is a large literature on Bayesian hierarchical spatial models (Baner-
jee, Carlin and Gelfand, 2004; Cressie, 1995), but this work cannot be applied
to the case of non-linear Poisson regression models in a straightforward fash-
ion. The tremendous advantage of the approach introduced by Frühwirth-
Schnatter and Wagner (2006) is that this large suite of existing hierarchical



© 2009 by Taylor & Francis Group, LLC
                          Spatial Econometric Interaction Models                235

linear spatial models can be directly applied after augmenting the existing
sampling scheme with the two latent sequences. The addition of these two
latent variable vectors does not aﬀect the conditional distributions of existing
hierarchical models, so existing algorithms and code can be used.
   The one drawback to the approach is that one must sample two sets of
latent parameters equal to yij + 1, where yij denotes the count for observation
i. Speciﬁcally, if we have a sample i = 1, . . . , n, and half of these observations
exhibit magnitudes of yij = 0, while the other half take on non-zero count
values of yij = 10, then we must sample two vectors of latent parameters equal
to 11(n/2) + (n/2), where the 11(n/2) latent parameters are associated with
the non-zero counts where yij + 1 = 11, and the n/2 parameters with the zero
counts where yij +1 = 1. For the sample of n = 188 regions in LeSage, Fischer
                                                                 j
and Scherngell (2007), there were 23,718 zero values and i yij +1 = 109, 817,
for a total of 133,535 latent observations needed to sample each of the two
latent variable vectors.
   For the spatially structured random eﬀects model from (8.14), let y =
(y1 , . . . , yN ) denote our sample of N = n2 counts for the OD pairs of regions.
The assumption regarding yi is that yi |λi follows a Poisson, P(λi ) distribution,
where λi depends on (standardized) covariates zi with associated parameter
vector γ as well as n vectors of latent spatial eﬀects parameters. This model
can be expressed as:


                                    yi |λi ∼ P(λi ),                         (8.27)
                                        λi = exp(zi γ + δdi θd + δoi θo )

where δdi represents the ith row from the matrix Δd that identiﬁes region i
as a destination region and δoi identiﬁes origin regions using rows from the
matrix Δo .
  Frühwirth-Schnatter and Wagner (2006) note that the posterior density
takes the form in (8.28), where V are parameters and ψ are the latent unob-
servables on which we are conditioning.


                            p(V|ψ, y) ∝ p(y|V)p(V|ψ)                         (8.28)
                                             
                                             N
                                                 exp(zi δ)yi
                                p(y|V) =                   exp(−exp(zi δ))
                                             i=1
                                                    yi !

   The use of a normal distribution for the random eﬀects in place of the con-
jugate gamma distribution results in a posterior density that does not belong
to a density from a known distribution family. The contribution of Frühwirth-
Schnatter and Wagner (2006) was to note that introduction of two sequences
of artiﬁcially missing data (treated using data augmentation) can lead to a
sequence of conditional posteriors for the parameters V that take the same
form as those that would arise if our model was a normal linear model. One



© 2009 by Taylor & Francis Group, LLC
236                                Introduction to Spatial Econometrics

of the two sequences of artiﬁcially missing data eliminates the non-linearity of
the Poisson model using ideas regarding unobserved inter-arrival times from
a Poisson process. After eliminating the non-linearity, a linear regression
model results, where the non-normal errors follow a log exponential distri-
bution having a mean of unity. The second sequence of missing data is a
component indicator associated with a normal mixture approximation to the
log exponential distribution that is used to eliminate the non-normality.




8.5        Chapter summary
   Standard spatial regression models rely on spatial autoregressive constructs
that use spatial weight structures to specify dependence among n regions.
Ways of parsimoniously modeling the connectivity among the sample of N =
n2 origin-destination (OD) pairs that arise in a closed system of interregional
ﬂows has remained a stumbling block. We demonstrated that the algebra
of Kronecker products can be used to produce spatial weight structures that
model dependence among the N OD pairs in a fashion consistent with stan-
dard spatial autoregressive processes. This allows us to extend spatial regres-
sion models that have served as the workhorse in applied spatial econometric
analysis to model OD ﬂows. The resulting models reﬂect a spatial ﬁlter for
origin- and destination-based dependence, as well as an interaction term that
we label origin-to-destination based dependence.
   Important computational issues arise when working with OD ﬂows since
the sample is of dimension N = n2 , where n is the number of regions being
modeled. We provide a moment-matrix approach that can be used for both
maximum likelihood and Bayesian estimation of the models set forth here.
The computational time and memory required by our approach to estimation
does not depend on the sample size n, making it applicable to large problems.




© 2009 by Taylor & Francis Group, LLC
Chapter 9
Matrix Exponential Spatial Models


This chapter discusses a matrix exponential spatial speciﬁcation (MESS) in-
troduced by LeSage and Pace (2007). As discussed in Section 7.6, one can
view MESS as arising from a spatiotemporal process with exponential decay
of inﬂuence from previous periods. The matrix exponential can provide an
alternative to the spatial autoregressive process as a basis for building spatial
regression models. It essentially replaces the geometric decay over space as-
sociated with the spatial autoregressive process with exponential decay over
space.
   This alternative has a computational advantage over conventional spatial
autoregressive based regression models since it eliminates the need to calculate
the log-determinant when producing maximum likelihood and Bayesian model
estimates. There are also theoretical advantages associated with this type of
spatial speciﬁcation.
   Section 9.1 presents the matrix exponential spatial speciﬁcation, which we
label the MESS model. This speciﬁcation replaces the spatial autoregressive
process with a matrix exponential spatial transformation. In Section 9.2 we
introduce the idea of modeling spatial error variance-covariance matrices as
a matrix exponential and show how this can be applied to produce a spa-
tial regression speciﬁcation. We describe a number of connections between
various traditional spatial error model speciﬁcations that can be established
using the matrix exponential spatial speciﬁcation. A Bayesian version of the
model is introduced in Section 9.3, and the basic MESS model is extended in
Section 9.4 to include a parameterized spatial weight structure. Estimation
of this extended model using MCMC is discussed and illustrated. Section 9.5
extends the MESS model to implement spatial fractional diﬀerencing.




9.1        The MESS model
   In Section 9.1.1, we present a unique interior optimal spatial transforma-
tion of the dependent variable that leads to the MESS model. Section 9.1.2
discusses maximum likelihood estimation using this model, and Section 9.1.3
provides details on a closed form solution for this model using the approach


                                                                             237
© 2009 by Taylor & Francis Group, LLC
238                                Introduction to Spatial Econometrics

discussed in Chapter 4.


9.1.1         The matrix exponential
   Consider estimation of models where the dependent variable y undergoes a
linear transformation Sy as in (9.1).

                                             Sy = Xβ + ε                    (9.1)
   The vector y contains the n observations on the dependent variable, X
represents the n × k matrix of observations on the independent variables, S
is a positive deﬁnite n × n matrix, and the n-element vector ε is distributed
N (0, σ 2 In ). Note that a conventional spatial autoregressive model can be
written by setting S = (In − ρW ) in (9.1). The concentrated log-likelihood
for the model in (9.1) is shown in (9.2), where β and σ 2 have been concentrated
out of the model.

                                  L = κ + ln|S| − (n/2)ln(y  S  M Sy)     (9.2)
The term κ represents a scalar constant and both M = In − H and H =
X(X  X)−1 X  are idempotent matrices. The term |S| is the Jacobian of the
transformation from y to Sy. Without the Jacobian term, S containing all
zeros would lead to a perfect, albeit pathological ﬁt as noted in Chapter 4.
The Jacobian term penalizes attempts to use singular or near singular trans-
formations to artiﬁcially increase the regression ﬁt.
   The matrix exponential deﬁned in (9.3) can be used as a model for S, where
W represents an n × n non-negative matrix with zeros on the diagonal and α
represents a scalar real parameter.
                                                      ∞
                                                         αi W i
                                        S = eαW =                           (9.3)
                                                     i=0
                                                           i!

Of course, W is a spatial weight matrix, where Wij > 0 indicates that ob-
servation j is a neighbor of observation i. As usual, Wii = 0 to preclude an
observation from directly predicting itself. Also, (W 2 )ij > 0 indicates that
observation j is a neighbor to a neighbor of observation i. Similar relations
hold for higher powers of W which identify higher-order neighbors. Thus the
matrix exponential S, associated with matrix W , imposes a decay of inﬂuence
for higher-order neighboring relationships. The MESS speciﬁcation replaces
the conventional geometric decay of inﬂuence from higher-order neighboring
relationships implied by the spatial autoregressive process with an exponential
pattern of decay in inﬂuence from higher-order neighboring relationships.
   As in the case of conventional autoregressive processes, if W is row-stochastic,
S will be proportional to a row-stochastic matrix, since products of row-
stochastic matrices are row-stochastic (i.e., by deﬁnition W ιn = ιn and there-
fore W (W ιn ) = ιn , and so on, where ιn denotes a vector of ones). Con-



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models              239

sequently, S is a linear combination of row-stochastic matrices and thus is
proportional to a row-stochastic matrix.
  In a non-spatial setting, Chiu, Leonard, and Tsui (1996) proposed use of
the matrix exponential and discussed several of its salient properties, some of
which are enumerated below:

    1. S is positive deﬁnite,
    2. any positive deﬁnite matrix is the matrix exponential of some matrix,
    3. S −1 = e−αW ,
    4. |eαW | = etr(αW ) .

   The last property greatly simpliﬁes the MESS log-likelihood. Since tr(W ) =
0 and by extension |eαW | = etr(αW ) = e0 = 1, the concentrated log-likelihood
takes the form: L = κ − (n/2)ln(y  S  M Sy). Therefore, maximizing the log-
likelihood is equivalent to minimizing (y  S  M Sy), the overall sum-of-squared
errors.
   The MESS model in (9.1) can be extended in a fashion similar to the SDM
model. Let U represent a matrix of observations on p non-constant indepen-
dent variables and let q be an integer large enough so that X approximately
spans SU , but small enough so that X cannot span y. The design matrix X
(assuming full rank) could have the form (9.4).

                                        X = [ιn U W U . . . W q−1 U ]      (9.4)
   In this case, X approximately spans SU and thus the MESS model based
on (9.4) nests a spatial autoregression in the errors. Like the SDM model,
this variant of the MESS model results in a situation where a set of linear re-
strictions on the parameters associated with the columns of X could yield the
error autoregression. Hendry et al. (1984) advocates estimation of this type of
general distributed lag model with subsequent imposition of restrictions that
has been labeled the general to speciﬁc approach to model speciﬁcation.

9.1.2         Maximum likelihood estimation
   If elements of the powers of W represent magnitudes that do not rise with
the power, the power series in (9.3) converges rapidly. Since row-stochastic,
non-negative matrices W have a maximum of 1 in any row, the magnitude of
the elements in the powers of W does not grow with powers of the matrix.
Given a rapid decline in the coeﬃcients of the power series, achieving a sat-
isfactory progression towards convergence seems feasible with ten to twelve
terms.
   If the graph of W is strongly connected, meaning that a path exists between
every pair of observations, then nr=1 ωr W r will be dense (all non-zeros) for
positive ωr (Horn and Johnson, 1993, p. 361-362), leading to a dense S. In this



© 2009 by Taylor & Francis Group, LLC
240                                Introduction to Spatial Econometrics

case, computing S separately would require prohibitive amounts of memory
and time for large n. Fortunately, we do not need to compute S separately
since S always appears in conjunction with y. This allows computation of Sy
in O((q − 1)n2 ) operations for dense W by sequential left-multiplication of y
by W to form n−element vectors, (i.e., W y, W (W y) = W 2 y, and so on).
   For sparse W the number of operations required to compute Sy declines to
O((q − 1)n=0 ), where n=0 denotes the number of non-zeros. For an m nearest
neighbor spatial weight matrix that has m non-zero entries in each row, the
operation count associated with computing Sy would decline to O((q −1)mn).
This results in an operation count for computing Sy in nearest neighbor spec-
iﬁcations of W that is linear in n.


9.1.3         A closed form solution for the parameters
   Section 4.10 presented a means of ﬁnding closed-form solutions for many
single dependence parameter models. In this section we show how to ﬁnd
a closed-form solution to MESS using this framework. To illustrate this ap-
proach in detail, we deﬁne the n × q matrix Y comprised of powers of W times
y in (9.5).

                                        Y = [y W y W 2 y . . . W q−1 y]    (9.5)
  We deﬁne a diagonal matrix G1 containing some of the coeﬃcients from the
power series as shown in (9.6).
                            ⎛                      ⎞
                              1/0!
                            ⎜      1/1!            ⎟
                            ⎜                      ⎟
                     G1 = ⎜             ..         ⎟                  (9.6)
                            ⎝              .       ⎠
                                                            1/(q − 1)!
In addition, we deﬁne the q-element column vector v shown in (9.7) that
contains powers of the scalar real parameter α, |α| < ∞.

                                         v(α) = [1 α α2 . . . αq−1 ]      (9.7)
Using (9.5), (9.6) and (9.7), we can rewrite Sy as shown in (9.8).

                                               Sy ≈ Y G1 v(α)              (9.8)
Premultiplying Sy by the least-squares idempotent matrix M yields the resid-
uals e, allowing us to express the overall sum-of-squared errors as in (9.9),


                                   e e = v(α) G1 (Y  M  M Y )G1 v(α)
                                        = v(α) G1 (Y  M Y )G1 v(α)
                                         = v(α) Qv(α)                     (9.9)



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models                       241

where Q = G1 (Y  M Y )G1 . This allows us to rewrite v(α) Qv(α) as the 2q − 2
degree polynomial Z(α), shown in (9.10).
                                            2q−1
                                   Z(α) =          ci αi−1 = v(α) Qv(α)           (9.10)
                                            i=1

   As discussed in Section 4.10, this is a polynomial in α and has a closed-
form solution. With regard to second order conditions, LeSage and Pace
(2007) show that the optimum α is unique for MESS.
   The closed-form solution provides an optimal value of α and also the second
derivative at this optimal value. Given the second derivative, a variant of
the mixed analytical-numerical Hessian described in Section 3.2.1 provides
standard errors. In addition, the analytic Hessian for MESS is more tractable
than the SAR analytic Hessian.


9.1.4         An applied illustration
   This section illustrates maximum likelihood estimation and demonstrates
how the MESS model can be used to produce estimates for a data vector
y generated using the more traditional spatial autoregressive speciﬁcation:
y = ρW y + Xβ + ε. In many cases, the resulting estimates for the parameters
β and the noise variance σε2 will be nearly identical to those from maximum
likelihood estimation of the more traditional spatial autoregressive model.
Given the computational advantages of the MESS model, this seems a de-
sirable situation and provides a valuable tool for those working with large
spatial data sets. The MESS model parameter α represents an analogue to
the spatial dependence parameter ρ in the SAR model. While its value will
not take on the same magnitudes, we establish a correspondence between α
and ρ that can be used to provide a translation between these measures of
spatial dependence from the two types of models.
   As an illustration of the similarity in parameter magnitudes and inferences
provided by conventional and MESS models, a dataset from Harrison and Ru-
binfeld (1978) containing information on housing values in 506 Boston area
census tracts was used to produce SAR and MESS estimates.1 The estimates
shown in Table 9.1 are based on a ﬁrst-order spatial contiguity matrix often
used in conventional models. The estimation results indicate that identical
inferences would be drawn regarding both the magnitude and signiﬁcance of
the 14 explanatory variables on housing values in the model. Both the point
estimates as well as asymptotic t-values (based on a variance-covariance ma-
trix obtained using a numerical Hessian to evaluate the log-likelihood function

1 This data was augmented with with latitude-longitude coordinates described in Gilley and

Pace (1996). These were used to create a ﬁrst-order spatial contiguity weight matrix for
the observations. The data is described in detail in Belsley, Kuh, and Welch (1980), with
various transformations used presented in the table on pages 244-261.




© 2009 by Taylor & Francis Group, LLC
242                                Introduction to Spatial Econometrics

at the maximum likelihood magnitudes) are presented in the table, where we
see nearly identical values for both. Although we used the numerical Hessian
in this application, the closed-form solution for α also yields the information
needed to implement a mixed numerical-analytical Hessian as described in
Chapter 4.


       TABLE 9.1:       Correspondence between SAR and MESS estimates
          Variables     SAR model t-statistic MESS model t-statistic
          Constant      −0.00195     −0.1105 −0.00168       −0.0927
          Crime         −0.16567     −6.8937 −0.16776       −6.8184
          Zoning          0.08057      3.0047    0.07929      2.8732
          Industry        0.04428      1.2543    0.04670      1.2847
          Charlesr        0.01744      0.9327    0.01987      1.0406
          Noxsqr        −0.13021     −3.4442 −0.13271       −3.4307
          Roomsqr         0.16082      6.5430    0.16311      6.4428
          Houseage        0.01850      0.5946    0.01661      0.5187
          Distance      −0.21548     −6.1068 −0.21359       −5.8798
          Access          0.27243      5.6273    0.27489      5.5188
          Taxrate       −0.22146     −4.1688 −0.22639       −4.1435
          Pupil/Teacher −0.10304     −4.0992 −0.10815       −4.2724
          Blackpop        0.07760      3.7746    0.07838      3.7058
          Lowclass      −0.33871    −10.1290 −0.34155      −10.1768
          ρ | α           0.44799     11.892   −0.55136    −10.5852
          R2              0.8420                 0.8372
          σ2              0.1577                 0.1671




   Regarding the relation between the spatial dependence parameters α and
ρ, we can use the correspondence, ρ = 1 − eα to transform the value of
α = −0.55136 reported in the table. This results in ρ = 1−e−0.55136 = 0.4238,
a value close to the reported SAR estimate of ρ = 0.44799. We derive this
correspondence by equating the matrix norms from the two transformations
In − ρW and eαW . The most convenient matrix norm to use is the maximum
row sum norm which equals 1−ρ for the autoregressive transformation and eα
for the matrix exponential transformation. Equating these leads to ρ = 1 − eα
or α = ln(1 − ρ).




   The correspondence between MESS and SAR models allows us to take ad-
vantage of the computational convenience arising from the matrix exponential
spatial speciﬁcation when analyzing spatial regression relationships tradition-
ally explored using spatial autoregressive models.



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models                        243



9.2        Spatial error models using MESS
   A host of regression models can accommodate spatial dependence in the
disturbances and many of these rely upon particular implementations of mul-
tivariate normal regression models. Speciﬁcally, given n observations on the
dependent variable y and k independent variables X, such models posit a
linear (in the parameters) relation among the independent variables as shown
in (9.11), where β represents a k element parameter vector and ε follows a
multivariate normal distribution with variance-covariance matrix Ω.


                                                y = Xβ + ε                           (9.11)
                                                ε ∼ N (0, Ω)

Models for spatially dependent errors rely on setting Ωij = 0 when observation
i is located near observation j. For example, an externality aﬀecting both
spatial locations i and j could result in εi and εj behaving similarly ( Ωij > 0),
the case of positive spatial dependence.
   Diﬀerences among multivariate normal spatial models arise from alternative
speciﬁcations for the variance-covariance matrix Ω. Equation (9.12) shows
the conditional (CSG), simultaneous (SSG), linear moving average (MAL),
quadratic moving average (MAQ), and matrix exponential (MESS) speciﬁ-
cations using the real scalar parameters φ, λ, γ, θ, α as well as the real n × n
spatial weight matrix W .2 We use a symmetric W in this section because CSG
and MAL speciﬁcations require a symmetric spatial weight matrix. Of course,
other spatial speciﬁcations can also accommodate symmetric spatial weights,
so we rely on this to facilitate comparison of various spatial speciﬁcations.


                                        CSG : Ω−1 = In − φW                          (9.12)
                                        SSG : Ω−1 = In − 2ρW + ρ2 W 2
                                   MAL : Ω = In + γW
                                   MAQ : Ω = In + 2θW + θ2 W 2
                                                         ∞
                                                             αi W i
                                  MESS : Ω = eαW =
                                                         i=0
                                                               i!

  To provide more insight into MESS, consider an expansion of the Taylor
series in (9.12) shown in (9.13).

2 Following Cressie (1993) we use SSG in this discussion of error models as a label for

simultaneous autoregressive models. This is to avoid confusion because these are commonly
referred to as SAR models in the spatial statistics literature. We also use CSG to reference
what are commonly labeled CAR models in the spatial statistics literature.




© 2009 by Taylor & Francis Group, LLC
244                                Introduction to Spatial Econometrics



                            α2 2 α3 3     α4 4   α5 5
                 Ω = In + αW + W +   W +    W +      W + ···                        (9.13)
                            2      6     24      120
                            α2     α3 3 α4 4    α5 5
             Ω−1 = In − αW + W 2 −   W +    W −     W + ···
                            2      6     24     120
   For positive α and non-negative W , MESS results in non-negative variance-
covariance matrix elements, as in the linear (MAL) and quadratic (MAQ)
moving average speciﬁcations. The inverse of the matrix
                                                            exponential involves
a simple switch in the sign of α, (eαW )−1 = e−αW , so negative α corresponds
to specifying the inverse variance-covariance matrix. For negative values of
α, MESS results in a potential mixture of negative and positive elements as
in the SSG speciﬁcation.
   For all speciﬁcations either the variance-covariance matrix or the inverse
variance-covariance matrix involve powers of the spatial weight matrix in their
Taylor series expansions. These powers have a natural interpretation in the
context of modeling spatial dependence. For example, positive elements in the
squared weight matrix (W 2 )ij > 0 indicate that observation j is a neighbor of
a neighbor to observation i (second-order neighbor). This relation holds for
higher powers of W as well, where non-zero elements of W h represent h-order
neighbors. Over the relevant parameter domains, all the speciﬁcations place
lower values on higher-order powers of the spatial weight matrices.
   The CSG, SSG, MAL, and MAQ speciﬁcations have been mainstays of the
spatial dependence literature (Ord, 1975; Anselin, 1988; Ripley, 1988; Hain-
ing, 1990). Chiu, Leonard, and Tsui (1996) introduced the matrix exponential
function in the context of modeling general non-spatial covariance structures.
However, the matrix exponential possesses many desirable properties and ap-
pears ideally suited for spatial applications.
   First, eαW is positive deﬁnite for all α and symmetric W and thus e−αW
is positive deﬁnite as well.3 This freedom from singularities greatly simpli-
ﬁes both computational and theoretical work. In contrast to MESS, tradi-
tional speciﬁcations must obey various restrictions to ensure a positive-deﬁnite
variance-covariance matrix (Cressie, 1993, p. 468).
   Second, since any positive deﬁnite matrix is the matrix exponential of some
matrix, this means the exponential of some matrix can yield the correct
variance-covariance matrix. In fact, when eαW = Ω, W = α−1 ln (Ω) where
ln (·) is the matrix logarithm function (Horn and Johnson, 1994, p. 448, 474).
   We can again use the fact that the determinant is a simple function of the
trace |eαW | = eα·tr(W ) , and this holds for any real, square matrix (Horn and
Johnson, 1994, p. 474). Since the spatial weight matrix W has zeros on the
diagonal tr(W ) = 0, resulting in |eαW | = e0 = 1 and ln |Ω (α) | = 0 for all
values of α. This produces a major simpliﬁcation as shown by the proﬁle or

                                        
3 For non-symmetric W , e− α
                           2
                             W                α
                                            e− 2 W is symmetric positive deﬁnite.




© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models             245

concentrated log-likelihood function in (9.14), where (·) denotes the relevant
spatial dependence parameter for each speciﬁcation (Anselin, 1988, p. 110).

                                                                          
                                                             −1
    L (·) = κ − (1/2) ln |Ω (·)| − (n/2) ln (y − Xβ (·)) Ω (·) (y − Xβ (·))
                          −1
    β (·) = X  Ω (·)−1 X       X  Ω (·)−1 y                            (9.14)

As already emphasized, the presence of the n × n log-determinant of the
variance-covariance matrix (ln |Ω (·)|) ordinarily poses a computational chal-
lenge. For the MESS Ω (·), maximum likelihood estimation can rely on non-
linear least-squares.
   Finally, any
             τ power of a matrix exponential remains a matrix exponential.
Thus, eαW       = eτ αW for some real scalar τ (Horn and Johnson, 1994, p.
435). This property leads to a simple expression of relations among the various
modeling methods. As an alternative to (9.12), consider the weight matrices
associated with the various speciﬁcations when these produce identical esti-
mates. Let C, S, L, Q, and W represent symmetric spatial weight matrices
associated with CSG, SSG, MAL, MAQ, and MESS. Equating the speciﬁca-
tions yields the expression in (9.15), allowing us to express the other speciﬁ-
cations in terms of the matrix exponential. This produces C = In − e−αW ,
              α         α
S = In − e− 2 W , Q = e 2 W − In , and L = eαW − In .


         Ω = In + L = (In + Q)2 = (In − S)−2 = (In − C)−1 = eαW          (9.15)

   This formulation of the speciﬁcations reveals rather simple relations among
the speciﬁcations in terms of the matrix exponential parameter α. Speciﬁcally,
α varies by a factor of two between SSG and CSG, as well as between MAL
and MAQ. This agrees with Ripley (1981, p. 97) who showed that the CSG
parameter exceeded the SSG parameter by almost a factor of two for small
CSG parameter values. Under MESS, the CSG parameter estimate of −α
exactly doubles the SSG parameter estimate of −(1/2)α.
   As Cressie (1993, p. 409, 434) notes, any valid variance-covariance ma-
trix can yield a conditional or simultaneous autoregression. Since the matrix
exponential of a symmetric weight matrix always produces a valid variance-
covariance matrix, this allows users to select their preferred interpretation
(conditional or simultaneous). Many statisticians (Cressie, 1993, p. 408) pre-
fer CSG, while SSG sees more usage in spatial econometrics (Anselin, 1988).
   From a computational perspective, any algorithm for the rapid computa-
tion of the matrix exponential also yields rapid computation of other powers
such as the inverse. Most applications only need eτ αW y or eτ αW X (not eτ αW
itself), and particularly fast algorithms exist for these expressions. For dense
matrices, these computations require O(n2 ) operations and sparse matrices
may require as few as O(n) operations (Pace and Barry, 1997). Consequently,
the computational advantages of the matrix exponential spatial speciﬁcation



© 2009 by Taylor & Francis Group, LLC
246                                Introduction to Spatial Econometrics

permit estimates, predictions, residuals, and other statistics for both simulta-
neous and conditional speciﬁcations at low computational cost.


9.2.1         Spatial model Monte Carlo experiments
   We investigate the performance of MESS relative to the other common spa-
tial models with a simple Monte Carlo experiment. The experiment involved
generating sample data using each of the diﬀerent spatial speciﬁcations as the
data generating process (DGP) and estimating parameters for each model to
examine the performance under reciprocal misspeciﬁcation.
   In these experiments, X contained a constant vector and a standard random
normal vector (mean zero, variance unity). The ﬁrst-order contiguity spatial
weight matrix was constructed using Delaunay triangles based upon coordi-
nates from a sample of 3,107 US counties in the lower 48 states from the 1990
Census.4 The SSG speciﬁcation most frequently employs a row-stochastic
weight matrix while CSG and MAL require symmetric weight matrices, so
we used a symmetric doubly stochastic weight matrix where each row and
column sum to unity. The doubly stochastic weight matrix is constant pre-
serving (e.g., W ιn = ιn , W  ιn = ιn ), so each speciﬁcation has an intercept
variable proportional to a constant and thus the residuals in all speciﬁcations
sum to zero, as in ordinary least-squares (OLS).
   For the ﬁrst two experiments, we used a relatively large dependence pa-
rameter of 0.8 for each DGP, and set the R2 to 0.8 to hold signal-to-noise
constant. These parameter choices mimic the situation found in housing data
where models ﬁt well, but also display residual spatial dependence (Pace et
al., 2000). For all three experiments, we generated 100 trials per reported
number and summarized these using the arithmetic mean.
   Table 9.2 presents results from simulating each DGP, estimating all six mod-
els, and calculating spatial dependence estimates. Each estimator returned
an average spatial dependence parameter estimate close to the true value of
0.8, when estimated under its own DGP. As previously discussed, the CSG
and MAL estimates are almost twice the SSG and MAQ estimates for the
CSG, MAL DGP. We note that when SSG, MAQ are the DGPs, the CSG
and MAL speciﬁcations cannot produce an estimate that is twice 0.8 since
they must be less than 1. The complement of the MESS parameter estimate
lies between the SSG and MAQ parameter estimates for all but the SSG DGP
(which produces the strongest spatial dependence).
   Another experiment compared the mean and standard deviation of 100
regression parameter estimates (β̂) under varying amounts of spatial depen-
dence as well as the signal-to-noise. We used SSG parameter ρ values of 0.25,
0.50, 0.75, 0.90, and R2 values of 0.20 and 0.80. We used MESS parameter α

4 The lower 48 states in the US contain 3,111 counties. However, four counties did not

have complete data in all ﬁelds and we deleted these. The deleted observations consisted
of unusual counties such as Yellowstone within Yellowstone National Park.




© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models                      247
          TABLE 9.2:                    Dependence estimates across estimators and
          DGPs
                                 DGP        CSG      SSG     MESS     MAQ      MAL
             Estimator
             CSG                            0.801  0.989  0.911  0.870  0.596
             SSG                            0.483  0.800  0.639  0.597  0.343
             MESS                          −0.532 −1.073 −0.804 −0.762 −0.382
             MAQ                            0.533  0.988  0.813  0.804  0.403
             MAL                            0.971  0.990  0.990  0.990  0.805




values of −0.25, −0.50, −1.0, −2.0, and R2 values of 0.20 and 0.80. Table 9.3
presents the average and standard deviation of parameter estimates (β̂) on the
non-constant variable across 100 trials for the SSG DGP (top panel) and the
MESS DGP (bottom panel). Both SSG and MESS produced a distribution of
estimates with nearly identical means and standard deviations under either
DGP.


9.2.2         An applied illustration
   To examine whether the ﬁndings from the Monte Carlo experiment hold
for actual spatial data samples, we constructed models using 32 expenditure
categories (e.g., alcohol, tobacco, furniture, etc.) from the 1998 Consumer
Expenditure Survey. Regressions employed the double-log form with (logged)
expenditure shares as the dependent variable and 12 (logged) explanatory
variables measuring age (six separate variables based on age categories), race,
gender, income, population, housing units, and land area. The data used for
these variables came from the same sample of 3,107 US counties from the 1990
Census that was used in the previous section. The large number of estimated
parameters (384) provides a natural setting to examine relations among the
ﬁve spatial speciﬁcations (SSG, CSG, MESS, MAQ, MAL). We used the same
doubly stochastic weight matrix based on Delaunay triangles as in the Monte
Carlo experiment from the previous section.
   For all ﬁve spatial speciﬁcations and for all 32 dependent variables, the
estimated spatial dependence parameters were signiﬁcant at the 1% level.
Of 384 possible coeﬃcients, the CSG, SSG, MESS, MAQ, MAL, and OLS
estimators produced signiﬁcant coeﬃcients in 316, 313, 310, 311, 312, and 318
instances. OLS proved the most liberal (318) and MESS the most conservative
(310) in ﬁnding signiﬁcance.
   Tables 9.4 and 9.5 present correlations among parameter estimates as well
as signed square roots of the likelihood ratios. These results reinforce those
from the Monte Carlo study and show a close relation between SSG and
MESS as well as between MAQ and MESS. Of course, as n becomes large
we would expect the correlation between estimates to approach 1.0 given the



© 2009 by Taylor & Francis Group, LLC
248                                Introduction to Spatial Econometrics
                                        TABLE 9.3:        Mean and dispersion
                                        of estimates across estimators and DGPs
                                                   Autoregressive DGP
                                           R2      ρ     OLS      SSG MESS
                                          0.80    0.25 0.9994 0.9992 0.9992
                                          0.80    0.25 0.0087 0.0086 0.0086
                                          0.80    0.50 0.9996 0.9991 0.9991
                                          0.80    0.50 0.0094 0.0086 0.0086
                                          0.80    0.75 0.9999 0.9991 0.9990
                                          0.80    0.75 0.0118 0.0085 0.0087
                                          0.80    0.90 1.0006 0.9990 0.9989
                                          0.80    0.90 0.0167 0.0084 0.0088
                                          0.20    0.25 0.9977 0.9969 0.9970
                                          0.20    0.25 0.0348 0.0343 0.0344
                                          0.20    0.50 0.9983 0.9965 0.9965
                                          0.20    0.50 0.0378 0.0343 0.0345
                                          0.20    0.75 0.9996 0.9963 0.9960
                                          0.20    0.75 0.0472 0.0339 0.0346
                                          0.20    0.90 1.0026 0.9961 0.9955
                                          0.20    0.90 0.0667 0.0335 0.0353

                                                Matrix exponential DGP
                                          R2     α      OLS     SSG MESS
                                         0.80   −0.25 0.9997 1.0004 1.0003
                                         0.80   −0.25 0.0076 0.0074 0.0074
                                         0.80   −0.50 0.9994 1.0005 1.0006
                                         0.80   −0.50 0.0080 0.0072 0.0072
                                         0.80   −1.00 0.9987 1.0006 1.0009
                                         0.80   −1.00 0.0098 0.0067 0.0066
                                         0.80   −2.00 0.9967 1.0003 1.0010
                                         0.80   −2.00 0.0191 0.0055 0.0050
                                         0.20   −0.25 0.9990 1.0014 1.0014
                                         0.20   −0.25 0.0306 0.0296 0.0296
                                         0.20   −0.50 0.9977 1.0022 1.0024
                                         0.20   −0.50 0.0322 0.0289 0.0289
                                         0.20   −1.00 0.9948 1.0026 1.0036
                                         0.20   −1.00 0.0393 0.0267 0.0265
                                         0.20   −2.00 0.9866 1.0011 1.0040
                                         0.20   −2.00 0.0764 0.0221 0.0202



relation among error models discussed in Section 3.3.1 where we developed
the Hausman test.



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models                         249
                      TABLE 9.4:                Correlations among β estimates
                               CSG              SSG MESS MAQ MAL OLS
                          CSG  1.000            0.997 0.991 0.986 0.980 0.942
                          SSG  0.997            1.000 0.998 0.996 0.992 0.963
                          MESS 0.991            0.998 1.000 0.999 0.997 0.976
                          MAQ 0.986             0.996 0.999 1.000 0.999 0.983
                          MAL 0.980             0.992 0.997 0.999 1.000 0.988
                          OLS  0.942            0.963 0.976 0.983 0.988 1.000




                      TABLE 9.5:                Correlations among signed root
                      deviances
                                        CSG     SSG     MESS    MAQ     MAL     OLS
                          CSG           1.000   0.993   0.980   0.969   0.958   0.912
                          SSG           0.993   1.000   0.996   0.990   0.984   0.949
                          MESS          0.980   0.996   1.000   0.999   0.995   0.971
                          MAQ           0.969   0.990   0.999   1.000   0.999   0.981
                          MAL           0.958   0.984   0.995   0.999   1.000   0.988
                          OLS           0.912   0.949   0.971   0.981   0.988   1.000




  Table 9.6 shows the number of times a speciﬁcation produced a signiﬁcant
result of opposite sign relative to another speciﬁcation. The spatial speci-
ﬁcations diﬀer in various cases. For example, CSG and the moving average
speciﬁcations disagreed in 3 cases regarding the sign of a signiﬁcant coeﬃcient.
Interestingly, MESS never produced an opposite inference when compared to
other spatial speciﬁcations.


                      TABLE 9.6:        Number of signiﬁcant coeﬃcients
                      with opposite signs
                                CSG SSG MESS MAQ MAL OLS
                       CSG     0.000 0.000 0.000 3.000 3.000 7.000
                       SSG     0.000 0.000 0.000 2.000 2.000 3.000
                       MESS 0.000 0.000 0.000 0.000 0.000 1.000
                       MAQ 3.000 2.000 0.000 0.000 0.000 1.000
                       MAL 3.000 2.000 0.000 0.000 0.000 0.000
                       OLS     7.000 3.000 1.000 1.000 0.000 0.000




© 2009 by Taylor & Francis Group, LLC
250                                Introduction to Spatial Econometrics



9.3        A Bayesian version of the model
   A Bayesian approach to the MESS model would include speciﬁcation of
prior distributions for the parameters in the model, α, β, σ. Prior informa-
tion regarding the parameters β and σ 2 is unlikely to exert much inﬂuence on
the posterior distribution of these estimates in the case of very large samples
where application of MESS models holds an advantage over spatial autore-
gressive speciﬁcations. However, the parameter α could exert an inﬂuence
even in large samples, because of the important role played by the spatial
dependence parameter in these models. Given this motivation, we begin with
an uninformative prior π(β, σ 2 |α) ∝ κ, and let π(α) denote an arbitrary prior
for α.
   Using Bayes’ theorem to combine the likelihood and prior, we obtain the
kernel posterior distribution:


   p(β, σ 2 , α|D) ∝ σ −(n+1) exp −(1/2σ 2 )(Sy − Xβ) (Sy − Xβ) π(α)       (9.16)

  Using the properties of the gamma distribution (Judge et al., 1982, p. 86),
we can integrate out the parameter σ 2 to obtain:


      p(β, α|D) ∝ ([y  S(α) M S(α)y] + [β − β(α)] X  X [β − β(α)])−n/2 π(α)
             β(α) = (X  X)−1 X  S(α)y
             S(α) = eαW                                                     (9.17)

where we write S(α) and β(α) to reﬂect the dependence of these expressions
on the spatial dependence parameter α.

9.3.1         The posterior for α
  The joint distribution in (9.17) is a multivariate t-distribution (conditional
on α) that can be integrated with respect to β to arrive at the posterior
distribution for the spatial dependence parameter α.
                                                         −(n−k)/2
                             p(α|D) ∝ [y  S(α) M S(α)y]           π(α)    (9.18)
   The expression in (9.18) represents the marginal posterior for α. The 2q − 2
degree polynomial expression in (9.10) for Z(α) = y  S(α) M S(α)y proves par-
ticularly convenient for integration of this marginal posterior. The posterior
expectation of the parameter α is:
                                        +∞
                                             α · p(α|D)dα
                      E(α|D) = α = −∞
                                   ∗
                                          +∞                            (9.19)
                                          −∞
                                              p(α|D)dα



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models                 251

A few points to note regarding the limits of integration in (9.19). First,
restriction of the upper limit of integration to zero imposes positive spatial
dependence, an approach often taken in applied practice. Without loss of
generality we could extend the limit of integration to allow for negative spatial
dependence estimates. Second, we can use the correspondence between ρ in
conventional spatial autoregressive (SAR) models and α from the MESS model
to show that α = −5 implies ρ = 0.9933. Since the upper bound on ρ is unity,
and values of 0.99 are seldom encountered during empirical application of
SAR models, we can set the lower integration limit to −5, rather than rely on
−∞. The correspondence also indicates that we can accommodate negative
spatial autocorrelation ranging down to −1 by extending the upper limit of
integration to 0.7.
   The integrand in the normalizing constant of the denominator in (9.19) can
be expressed using our polynomial Z(α) from (9.10) as:

                                          2q−1
                                 p(α|D) ∝ (          ci αi−1 )−(n−k)/2 π(α)   (9.20)
                                              i=1

which makes univariate integration a simple scalar problem. This is true
irrespective of the number of observations in the problem.
   Turning attention to the posterior variance for α, this takes the form shown
in (9.21), where the limits of integration are those noted in the discussion
surrounding (9.19).
                                               
                                                    [α − α∗ ]2 · p(α|D)dα
                                  var(α|D) =                                 (9.21)
                                                          p(α|D)dα

This numerical integration problem would also beneﬁt from the scalar form
of Z(α) which is embedded in p(α|D) in (9.21).
   It is informative to contrast this result with that arising in more traditional
spatial autoregressive models such as: y = ρW y + Xβ + ε. Using the de-
velopment from Chapter 5, we have a marginal posterior for ρ, the spatial
dependence parameter in these models shown in (9.22), where π(ρ) denotes a
prior for the parameter ρ (see Chapter 5).


                   p(ρ|D) ∝ |In − ρW |[(n − k)−1 u(ρ) u(ρ)]−(n−k)/2 π(ρ)
                     u(ρ) = (In − ρW )y − Xβ(ρ)
                       β(ρ) = (X  X)−1 X  (In − ρW )y                       (9.22)

  To compute the posterior expectation of ρ in this model one would need to
perform univariate numerical integration on the expression in (9.23), where
the limits of integration involve those for the parameter ρ set forth in Chap-
ter 4 involving eigenvalues of the spatial weight matrix W .



© 2009 by Taylor & Francis Group, LLC
252                                Introduction to Spatial Econometrics


                                                         
                                                   ∗         ρ · p(ρ|D)dρ
                                        E(ρ|D) = ρ =                            (9.23)
                                                               p(ρ|D)dρ

Note that this involves calculating the n × n determinant |In − ρW | over a
grid of values for the parameter ρ as well as ﬁnding the eigenvalue limits. It
should be clear that this is a more diﬃcult problem to solve, especially for
large spatial data samples. In addition to computing the log determinant,
we would also need to compute minimum and maximum eigenvalues of W ,
or restrict the range of the spatial dependence to an interval such as (−1, 1).
The eigenvalue information is not needed for the case of the MESS model
where the lower and upper limits of integration can be set for all estimation
problems (see the discussion surrounding (9.19)).
   In summary, solution of the Bayesian MESS model for the posterior mean
and variance of the spatial dependence parameter α, as well as the entire
posterior distribution of α requires simple univariate integration involving
the scalar polynomial Z(α).


9.3.2         The posterior for β
  Turning attention to the posterior distribution for β in the Bayesian MESS
model, we can use the multivariate t-density centered at β(α∗ ), suggesting
that the posterior mean can be computed analytically using:


                                        E(β|D) = (X  X)−1 X  S(α∗ )y           (9.24)

where α∗ denotes the posterior mean from (9.19). The posterior variance-
covariance matrix unconditional on α takes the form:

                                                %                  
                                     1
             var-cov(β) =                              (Z(α)p(α|D)dα (X  X)−1   (9.25)
                                   n−k−2

This requires univariate integration of the posterior expectation: E(Z(α)|D) =
   Z(α)p(α|D)dα. As we have already seen, the scalar polynomial expression
for Z(α) makes this a simple computation. One might also rely on the approx-
imation Z(α∗ )/(n − k), which would involve simply evaluating the expression
Z(α) at the posterior mean α∗ .
    Given the multivariate t-density for β, we can express this joint distribu-
 tion as the product of a marginal and conditional distribution. We can use
 standard expressions from Zellner (1971, p. 67) to analyze the posterior dis-
 tributions for individual elements of β. Here as in the case of the posterior
 distribution for α, the scalar polynomial expression Z(α) plays an important
role in simplifying the computational tasks involved.



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models              253

9.3.3         Applied illustrations
   Three applied illustrations of the Bayesian version of the MESS model are
provided. The ﬁrst illustration uses a dataset from Pace and Barry (1997)
and examines voter turnout in the 1980 presidential election by county for a
sample of 3,107 US counties and four explanatory variables. A second illus-
tration involves 30,987 house sales in Lucas county, Ohio and 10 explanatory
variables, and the third relies on expenditure budget shares for gasoline in
59,025 census tracts with 4 explanatory variables. A standardized ﬁrst-order
contiguity matrix was used for the spatial weight matrix W in all illustra-
tions. For this application, the matrices W were constructed using Delaunay
triangle algorithms described in Chapter 4 applied to the location coordinates
measuring relative position in the map plane.
   Estimation results based on maximum likelihood and the Bayesian MESS
models are presented in Table 9.7. We discuss each of these applications in
turn.
   For the presidential election example, explanatory variables were: a con-
stant term, education (high school graduates), homeownership, and median
household income. The dependent variable is the population voting as a pro-
portion of population 19 years or older (those eligible to vote). This proportion
was logged to induce normality. All explanatory variables were expressed as
logs of the population proportion, e.g., the log of homeowners in the county
as a proportion of the county population. A diﬀuse prior on all parameters,
α, β, σ was employed in the Bayesian model, which should produce estimates
nearly identical to those from maximum likelihood estimation.
   In the table, we see that Bayesian and maximum likelihood estimates are
identical to at least 3 decimal places in all cases. This similarity of the two
sets of estimates also extends to the inferential parameter estimates shown
in the table. We used a numerical Hessian evaluation of the log-likelihood
at the ML estimates to produce the standard errors, although one could pro-
duce the ML standard errors using the analytic or mixed numerical-analytic
Hessian described in Chapter 4. The time required to produce estimates for
this 3,107 observation example was 0.110 seconds based on lower and upper
integration limits of −4 and 0 respectively. An important point to note is that
a priori knowledge regarding the magnitude of spatial dependence reﬂected
in the parameter α can be used to further improve the speed of solution. For
example, setting the lower integration limit to −2 and the upper limit to 0
reduced the time needed to solve the problem to 0.08 seconds. Increasing the
limits of integration to −5 and 0 resulted in 0.14 seconds. Varying the limits
of integration produced estimates that were nearly identical. In the table, we
report times based on integration limits of −4 to 0 for timing compatibility
in all three examples.
   The second illustration involves a fairly typical housing price model, based
on houses sold over the period from 1993 to 1997 in a single Ohio county.
The dependent variable was the log of selling price. Explanatory variables



© 2009 by Taylor & Francis Group, LLC
254                                Introduction to Spatial Econometrics
 TABLE 9.7:       Bayesian estimation results for three applied examples
                             Presidential election, 3, 107 Observations
    Variables             Bayes mean Bayes std ML mean ML std
    constant                0.696283    0.042381       0.696371 0.042360
    education               0.272566    0.013923       0.272640 0.013917
    homeowners              0.505877    0.015182       0.505883 0.015174
    median income         −0.128554     0.016474 −0.128601 0.016466
    α                     −0.675480     0.023520 −0.675204 0.023174
    σ2                      0.015336    0.000389       0.015331 0.000395
    time (secs)             0.110
                                              House sales, 30, 987 Observations
    Variables                           Bayes mean Bayes std ML mean ML std
    House age                            0.464807    0.018170      0.464774 0.018224
    (House age)2                        −0.967741    0.038228 −0.967641 0.038461
    (House age)3                         0.308795    0.022616      0.308757 0.022682
    log(living area)                     0.299507    0.002835      0.299488 0.002940
    log(lotsize)                         0.068662    0.002785      0.068647 0.002855
    1993 dummy                          −0.092811    0.002816 −0.092811 0.002817
    1994 dummy                          −0.077587    0.002864 −0.077587 0.002865
    1995 dummy                          −0.059417    0.002902 −0.059417 0.002902
    1996 dummy                          −0.052613    0.002975 −0.052613 0.002975
    1997 dummy                          −0.030402    0.002986 −0.030402 0.002986
    α                                   −0.785965    0.006363 −0.786043 0.006347
    σ2                                   0.161119    0.001294      0.161109 0.001301
    time (secs)                          0.591
                                Census tracts, 59, 025 Observations
    Variables              Bayes mean Bayes std ML mean ML std
    constant                0.328584    0.015496      0.328840 0.015495
    log(vehicles/spending)  0.563411    0.006083      0.563363 0.006082
    log(median income)     −0.036234    0.000289 −0.036231 0.000289
    log(employment)         0.000969    0.000248      0.000969 0.000248
    α                      −0.844754    0.004958 −0.844892 0.001480
    σ2                      0.001206    0.000007      0.001206 0.000008
    time (secs)             0.641




consisted of housing characteristics such as: house age, as well as house age-
squared and cubed, living area and lotsize measured in square feet and dummy
variables for each of the 5 years covered by the sample. Here again, we see
estimates that are identical to a least 3 decimal digits in all cases, including
the standard deviation estimates. The time required for this data sample
was 0.5910 seconds when using integration limits of −4 to 0. Although the
sample contained nearly 10 times as many observations as the presidential
election example, we see only a six-fold increase in time required to produce
estimates. Here again, the time required to solve the problem was reduced to



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models             255

0.54 seconds when the integration limits were set to −2 and 0, with identical
estimation results.
   For the third example using 59,025 census tracts, the relationship explored
involved the log share of all expenditures devoted to gasoline on average in
each census tract. One might expect spatial dependence in these observations
as similarly located census tracts would exhibit similar commuting patterns
for work and shopping. A constant term and three explanatory variables were
used: the log budget share of expenditures on vehicles, log median income and
log of employment in the census tract. Here we see a time of 0.641 seconds
based on the integration limits of −4 to 0. In this example, changing the limits
of integration to −2 and 0 had a very modest impact on the time required,
reducing it to 0.621 seconds.




9.4        Extensions of the model
   We can extend the MESS model to include a more ﬂexible spatial weight
speciﬁcation that is governed by the introduction of hyperparameters used in
the weight speciﬁcation. Bayesian MCMC estimation methods can be used to
produce estimates of the hyperparameters that provide information regarding
the nature and extent of spatial inﬂuence.
   In Section 9.4.1 we introduce this extended version of the model, and in Sec-
tion 9.4.2 we describe estimation using Markov Chain Monte Carlo methods.
In Section 9.4.3 we illustrate the method in an application.

9.4.1         More ﬂexible weights
   Additional ﬂexibility can be introduced by specifying a spatial weight that
includes a decay parameter φ that lies between 0 and 1, along with a variable
number of nearest neighbor spatial weight matrices Ni , where the subscript
i is used to refer to a weight matrix containing non-zero elements for the ith
closest neighbor. The weight structure speciﬁcation is shown in (9.26), where
m denotes the maximum number of neighbors considered.
                                              m                  
                                                        φi Ni
                                        W =              m    i
                                                                         (9.26)
                                              i=1        i=1 φ

In (9.26), φi weights the relative eﬀect of the ith individual neighbor matrix,
so that S depends on the parameters φ as well as m in both its construction
and the metric used. By construction, each row in W sums to 1 and has
zeros on the diagonal. To see the role of the spatial decay hyperparameter φ,
consider that a value of φ = 0.87 implies a decay proﬁle where the 6th nearest
neighbor exerts less than 1/2 the inﬂuence of the nearest neighbor. We might



© 2009 by Taylor & Francis Group, LLC
256                                Introduction to Spatial Econometrics

think of this value of φ as having a half-life of six neighbors. On the other
hand, a value of φ = 0.95 has a half-life between 14 and 15 neighbors.
   The ﬂexibility arising from this type of weight speciﬁcation adds to the
burden of estimation requiring that we draw an inference on the parameters φ
and m. Together these hyperparameters determine the nature of the spatial
weight structure. To the extent that the weight structure speciﬁcation in
(9.26) is ﬂexible enough to adequately approximate more traditional weight
matrices based on contiguity, the model introduced here can replicate results
from models that assume the matrix W is ﬁxed and known. However, all
inferences regarding β and σ 2 drawn from a model based on a ﬁxed matrix
W are conditional on the particular W matrix employed. The model we
introduce here produces inferences regarding β and σ 2 that are conditional
only on a family of spatial weight transformations that we denote Sy, where
S = eαW , with the matrices W taking the form in (9.26). Of course, this raises
the issue of inference regarding these hyperparameters, and we show that the
Bayesian MESS model introduced here can produce a posterior distribution
for the joint distribution of the parameters α, φ and m as well as the other
model parameters of interest, β and σ 2 .

9.4.2         MCMC estimation
  The extended variant of the Bayesian MESS is presented in (9.27), where
the prior distributions for the parameters are also listed.


                      Sy = Xβ + ε
                        S = eαW#                           $
                                 m               m
                                         i             i
                       W =              φ Ni /         φ
                                i=1              i=1
                         ε ∼ N (0, σ 2 V ),       Vii = (v1 , . . . , vn ), Vij = 0 (i = j)
                 π(β) ∼ N (c, T )
               π(r/vi ) ∼ iid χ2 (r)
                  π(σ 2 ) ∼ IG(a, b)
                   π(α) ∼ U (−∞, 0]
                  π(φ) ∼ U (0, 1)
                  π(m) ∼ U D [1, mmax ]                                                        (9.27)

   We rely on a normal prior for β ∼ N (c, T ), and inverse gamma prior for
σ 2 , with prior parameters a, b, where the normal and inverse gamma priors
are independent. The prior assigned for α can be a relatively non-informative
uniform prior that allows for the case of no spatial eﬀects when α = 0.
   The relative variance terms (v1 , v2 , . . . , vn ) represent our variance scalars to
accommodate outliers and heteroscedasticity as motivated in Chapter 5. We



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models                       257

rely on the same iid χ2 (r)/r distribution as a prior for these variance scalars.
   A relatively non-informative approach was taken for the hyperparameters
φ and m where we rely on a uniform prior distribution for φ and a discrete
uniform distribution for m, the number of nearest neighbors. The term mmax
denotes a maximum number of nearest neighbors to be considered in the spa-
tial weight structure, and U D denotes the discrete uniform distribution that
imposes an integer restriction on values taken by m. Note that practitioners
may often have prior knowledge regarding the number of neighboring obser-
vations that are important in speciﬁc problems, or the extent to which spatial
inﬂuence decays over neighboring units. Informative priors could be developed
and used here as well, but in problems where interest centers on inference re-
garding the spatial structure, relatively non-informative priors would be used
for these hyperparameters.
   Given these distributional assumptions, it follows that the prior densities
for β, σ 2 , α, φ, m, vi are given up to constants of proportionality by (9.28),
(where we rely on a uniform prior for α).

                                               1
                                  π(β) ∝ exp[− (β − c) T −1 (β − c)]               (9.28)
                                               2             
                                    2      2 −(a+1)         b
                                 π(σ ) ∝ (σ )       exp − 2
                                                           σ
                                  π(φ) ∝ 1
                                 π(α) ∝ 1
                                 π(m) ∝ 1
                                                                 
                                            −( r2 +1)          r
                                  π(vi ) ∝ vi           exp −
                                                              2vi

9.4.3         MCMC estimation of the model
   Given the prior densities from section 9.4.2, the Bayesian identity,


     p(β, σ 2 , V, φ, α, m|D) = p(D|β, σ 2 , V, φ, α, m) · π(β, σ 2 , V, φ, α, m)   (9.29)

together with the assumed prior independence of the prior distributions for
the parameters allows us to establish the joint posterior density for the pa-
rameters, p(β, σ 2 , V, φ, α, m|D). This posterior is not amenable to analysis of
the type described previously, because we would need to integrate over the
hyperparameters m and φ. We can however use Markov Chain Monte Carlo
(MCMC) to sample from the posterior distribution for the parameters in our
model.
   We rely on Metropolis-Hastings to sample from the posterior distributions
for the parameters α, φ and m in the MESS model. A normal distribution
is used as the proposal density for α and rejection sampling can be used to



© 2009 by Taylor & Francis Group, LLC
258                                Introduction to Spatial Econometrics

constrain α to a range such as [−5, 0.7] discussed in Section 9.3.1. A uniform
proposal distribution for φ over the interval (0, 1) was used along with a
discrete uniform for m over the interval [1, mmax ]. The parameters β, V and
σ in the MESS model can be estimated using draws from the conditional
distributions of these parameters that take a known form.
  Summarizing, we will rely on Metropolis sampling for the parameters α, φ
and m within a sequence of Gibbs sampling steps to obtain β, σ and V .


9.4.4         The conditional distributions for β, σ and V
   To implement our Metropolis within Gibbs sampling approach to estimation
we need the conditional distributions for β, σ and V which are presented here.
   For the case of the parameter vector β conditional on the other parameters
in the model, α, σ, V, φ, m we ﬁnd that:


          p(β|α, σ, V, φ, m) ∼ N (c∗ , T ∗ )
                          c∗ = (X  V −1 X + σ 2 T −1 )−1 (X  V −1 Sy + σ 2 T −1 c)
                                T ∗ = σ 2 (X  V −1 X + σ 2 T −1 )−1                     (9.30)

  Note that given the parameters V, α, φ, σ and m, the vector Sy and X  V −1 X
can be treated as known, making this conditional distribution easy to sam-
ple. This is often the case in MCMC estimation, which makes the method
attractive.
  The conditional distribution of σ 2 is shown in (9.31), (Gelman et al., 1995).
                                                                                    
                         2                       2 −( n             e V −1 e + 2b
                   p(σ |β, α, V, φ, m) ∝ (σ )         2 +a)   exp −                      (9.31)
                                                                         2σ 2
where e = Sy − Xβ, which is proportional to an inverse gamma distribution
with parameters (n/2) + a and e V −1 e + 2b.
   The conditional distribution of V given the other parameters is propor-
tional to a chi-square density with r + 1 degrees of freedom (Geweke, 1993).
Speciﬁcally, we can express the conditional posterior of each vi as:

                                e2 + r
                              p( i     |β, α, σ 2 , v−i , φ, m) ∼ χ2 (r + 1)             (9.32)
                                   vi
where v−i = (v1 , . . . , vi−1 , vi+1 , . . . , vn ) for each i.
   As noted above, the conditional distributions for α, φ and m take unknown
distributional forms that require Metropolis-Hastings sampling. By way of
summary, the MCMC estimation scheme involves starting with arbitrary ini-
tial values for the parameters which we denote β 0 , σ 0 , V 0 , α0 , φ0 , m0 . We then
sample sequentially from the set of conditional distributions for the parame-
ters in our model.



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models                     259

    1. p(β|σ 0 , V 0 , α0 , φ0 , m0 ), which is a normal distribution with mean and
       variance-covariance deﬁned in (9.30). This updated value for the pa-
       rameter vector β we label β 1 .

    2. p(σ 2 |β 1 , V 0 , α0 , φ0 , m0 ), which is inverse gamma distributed as shown
       in (9.31). Note that we rely on the updated value of the parameter
       vector β = β 1 when evaluating this conditional density. We label the
       updated parameter σ = σ 1 and note that we will continue to employ
       the updated values of previously sampled parameters when evaluating
       the next conditional densities in the sequence.

    3. p(vi |β 1 , σ 1 , v−i , α0 , φ0 , m0 ) which can be obtained from the chi-squared
       distribution shown in (9.32). Note that this draw can be accomplished
       as a vector, providing greater speed.

    4. p(α|β 1 , σ 1 , V 1 , φ0 , m0 ), which we sample using a Metropolis step with
       a normal proposal density, along with rejection sampling to constrain
       α to the desired interval. The likelihood is proportional to the desired
       conditional distribution of α.

    5. p(φ|β 1 , σ 1 , V 1 , α1 , m0 ), which we sample using a Metropolis step based
       on a uniform distribution that constrains φ to the interval (0,1). Here
       again, we rely on the likelihood (which is proportional to the conditional
       distribution) to evaluate the candidate value of φ. As in the case of the
       parameter α it would be easy to implement a normal or some alternative
       prior distributional form for this hyperparameter.

    6. p(m|β 1 , σ 1 , V 1 , α1 , φ1 ), which we sample using a Metropolis step based
       on a discrete uniform distribution that constrains m to be an integer
       from the interval [1, mmax ]. As in the case of α and φ, we rely on the
       likelihood to evaluate the candidate value of m.

  Sampling proceeds sequentially through steps 1) to 6) and on each pass
through the sampler we employ the updated parameter values in place of
the initial values β 0 , σ 0 , V 0 , α0 , φ0 , m0 . On each pass through the sequence
we collect the parameter draws which are used to construct a joint posterior
distribution for the parameters in our model.


9.4.5         Computational considerations
  Use of the likelihood when evaluating candidate values of α, φ and m in
the MCMC sampling scheme requires that we form the matrix exponential
                                                          m           m
S = eαW , which in turn requires computation of W = i=1 (φi Ni / i=1 φi )
based on the current values for the other two parameters. For example, in the
case of update α = α1 , we use φ = φ0 and m = m0 to ﬁnd W . The nearest
neighbor matrices Ni can be computed outside the sampling loop to save time,



© 2009 by Taylor & Francis Group, LLC
260                                Introduction to Spatial Econometrics

but the remaining calculations can still be computationally demanding if the
number of observations in the problem is large.
   Further aggravating this problem is the need to evaluate both the existing
value of the parameters α, φ and m, given the updated values for β, σ and V
as well as the candidate values. In all, we need to form the matrix product
Sy, along with the matrix W six times on each pass through the sampling
loop.
   To enhance the speed of the sampler, we compute the part of Sy that
depends only on φ and m, for a grid of values over these two parameters
prior to beginning the sampler. During evaluation of the conditionals and the
Metropolis-Hastings steps, a simple table look-up recovers the stored compo-
nent of Sy and applies the remaining calculations needed to fully form Sy.
   The ranges for these grids can be speciﬁed by the user, with a trade-oﬀ
between selecting a large grid that ensures coverage of the region of posterior
support and a narrow grid that requires less time. In a typical spatial problem,
the ranges might be 0.5 ≤ φ ≤ 1, and 4 < m < 30. If the grid range is too
small, the posterior distributions for these parameters should take the form
of a censured distribution, indicating inadequate coverage of the region of
support.
   Simpler models than that presented in (9.27) could be considered. For ex-
ample either φ or m, or both φ and m could be ﬁxed a priori. This would
enhance the speed of the sampler because eliminating one of the two hyper-
parameters from the model reduces the computational time needed by almost
one-third since it eliminates two of the six computationally intensive steps
involving formation of Sy. For example, labels for the various MESS models
used in the experiments presented in the next section are enumerated below
from simplest to most complex.
         MESS1 – a model with both ρ and m ﬁxed, and no vi parameters.
         MESS2 – a model with ρ ﬁxed, m estimated and no vi parameters.
         MESS3 – a model with m ﬁxed, ρ estimated and no vi parameters.
         MESS4 – a model with both ρ and m estimated and no vi parameters.
         MESS5 – a model with both ρ and m estimated as well as estimates for
         the vi parameters.
  The use of nearest neighbors also accelerates computation. As described in
Section 4.11, nearest neighbor calculations using index arithmetic in place of
matrix multiplication can greatly reduce computation time as indexing into a
matrix is one of the fastest digital operations.

9.4.6         An illustration of the extended model
  We provide illustrations of the extended Bayesian MESS model in using a
generated model with only 49 observations taken from Anselin (1988). Use of



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models                      261

a generated example where the true model and parameters are known allows
us to illustrate the ability of the model to ﬁnd the true spatial weight structure
used in generating the model.
   A traditional spatial autoregressive (SAR) model: y = ρW y + Xβ + ε was
used to generate the vector y based on 49 spatial observations from Columbus
neighborhoods presented in Anselin (1988). The spatial weight matrix, W =
   m     i       m    i
   i=1 φ Ni /    i=1 φ , was based on m = 5 nearest neighbors and distance
decay determined by φ = 0.9. The two explanatory variables from Anselin’s
data set (in studentized form) along with a constant term and ρW were used
to generate a vector y = (In − ρW )−1 Xβ + (In − ρW )−1 ε. The parameters
β and the noise variance, σε2 were set to unity and the spatial correlation
coeﬃcient ρ was set to 0.65.
   This generated data was used to produce maximum likelihood estimates
of the parameters based on a SAR and MESS model speciﬁcation as well as
Bayesian MCMC estimates. Of course, traditional implementation of the SAR
model would likely rely on a ﬁrst-order contiguity matrix treated as exogenous
information, which we label W1 . Maximum likelihood estimation of this MESS
speciﬁcation would attempt to determine values for the hyperparameters φ, m
using a concentrated likelihood grid search over these values. The Bayesian
model would produce posterior estimates for the hyperparameters as part of
the MCMC estimation as in the models labeled MESS4 and MESS5 in the
previous section. Of course, it would be possible to rely on MCMC estimation
and the simpler models labeled MESS1 to MESS3 in the previous section, but
the computational requirements for this small sample are minimal.
   We illustrate the diﬀerence in estimates and inferences that arise from us-
ing these three approaches. Note that two variants of the SAR model were
estimated, one based on a ﬁrst-order contiguity matrix, W1 and another based
on the true W matrix used to generate the model. In practice of course, one
would not know the true form of the W matrix. One point to note is that
the ﬁrst-order contiguity matrix for this data set contains an average number
of neighbors equal to 4.73 with a standard deviation of 1.96. Of the total
49 × 49 = 2, 401 elements there are 232 non-zero entries. We might expect
that the diﬀerences between SAR models based on W1 and the true W con-
taining ﬁve nearest neighbors and a small amount of distance decay should
be small.
   The non-Bayesian MESS model implemented maximum likelihood estima-
tion by searching over a grid of φ values from 0.01 to 1 in 0.01 increments and
neighbors m ranging from 1 to 10. Estimates were produced based on the
values of φ and m that maximized the concentrated log likelihood function.
The Bayesian MESS model was run to produce 5500 draws with the ﬁrst 500
discarded to allow the MCMC chain to converge to a steady state.5 Diﬀuse


5 This is actually an excessive number of draws, since the estimates were the same to one

or two decimal places as those from a sample of 1250 draws with the ﬁrst 250 discarded.




© 2009 by Taylor & Francis Group, LLC
262                                Introduction to Spatial Econometrics

priors were used for β and σ and two variants of the model were estimated:
one that included the parameters V and another that did not. The latter
Bayesian model assumes that ε ∼ N (0, σ 2 In ), which is consistent with the
assumption made by the non-Bayesian SAR and MESS models.
   The estimation results are presented in Table 9.8. Measures of precision for
the parameter estimates are not reported in the table because all coeﬃcients
were signiﬁcant at the 0.01 level. In the table we see that the SAR model based
on the true spatial weight matrix W performed better than the model based on
W1 , as we would expect. (True values used to generate the data are reported
in the ﬁrst column next to the parameter labels). Both the concentrated
likelihood approach and the posterior distribution from the Bayesian MESS
models identiﬁed the correct number of neighbors used to generate the data.
The Bayesian MESS models produced posterior estimates for φ based on the
mean of the draws equal to 0.91 and 0.89 compared to the true value of 0.90,
whereas the concentrated likelihood search resulted in an estimate of φ = 1.0.
Nonetheless, the MESS models produced very similar β estimates as well as
estimates for the spatial dependence parameter in this model, α. The estimate
of σ 2 from one Bayesian MESS model was close to the true value of unity,
while the other Bayesian model produced an estimate closer to the maximum
likelihood estimates for the SAR model based on the true W matrix.


       TABLE 9.8:                  A comparison of models from experiment 1
          Parameters            SAR W1 SAR W ML MESS MESS4 MESS5
          β0 = 1†               1.3144   1.1328         1.1848    1.1967    1.1690
          β1 = 1                1.1994   0.9852         1.0444    1.0607    1.0071
          β2 = 1                1.0110   1.0015         1.0144    1.0102    0.9861
          σ2 = 1                1.4781   0.7886         0.8616    0.9558    0.7819
          ρ = 0.65              0.5148   0.6372
          α                                           −0.8879 −0.8871 −0.9197
          R2                    0.8464   0.9181         0.9160    0.9141    0.9134
          m=5                                           5         5.0466    5.0720
          φ = 0.90                                      1.0       0.9171    0.8982
          † true values used to generate the data.




  The concentrated likelihood approach identiﬁed the correct number of neigh-
bors used to generate the data and points to a value of φ = 1, versus the true
value of 0.9. The posterior distribution of φ was skewed, having a mean of
0.9171, a median of 0.9393 and a mode of 0.9793. This partially explains
the diﬀerence between the maximum likelihood estimate of unity and the
Bayesian estimate reported in Table 9.8. The posterior distributions for the
hyperparameters φ and m provide a convenient summary that allows the user
to rely on mean, median or modes in cases where the resulting distributions



© 2009 by Taylor & Francis Group, LLC
                                 Matrix Exponential Spatial Models         263

are skewed.
   Note that the parameter α in the MESS model plays the role of ρ in the
traditional spatial autoregressive models capturing the extent of spatial de-
pendence. Inferences about spatial dependence are based on a test of the
magnitude of α versus zero. Figure 9.1 shows the posterior distribution of α
from the MESS4 model, which should make it clear that this estimate would
lead to an inference of spatial dependence, that is, α = 0.
 Posterior density of α




                          -2   -1. 5         -1              -0. 5   0    0.5
                                                  α values


FIGURE 9.1: Posterior distribution of α parameter


   As an illustration of the ability of the MESS model to ﬁnd the correct
model speciﬁcation, we produced estimates for models based on a ﬁrst-order
contiguity matrix used to generate the data in this experiment as well as mod-
els based on the two through six nearest neighbors. Note that use of spatial
weight matrices based on nearest neighbors represents a misspeciﬁcation since
the ﬁrst-order contiguity matrix was used to generate the dependent variable
vector y. No hyperparameters were used in this experiment, so the speciﬁca-
tion: Wi = Ni /i, i = 2, . . . , 6, was used, where the binary nearest neighbor
matrix Ni contains ones for the i nearest neighbors to each observation.
   The question of interest here is whether the MESS models can distinguish



© 2009 by Taylor & Francis Group, LLC
264                                Introduction to Spatial Econometrics

the ﬁrst-order contiguity matrix used to generate the data from the nearest
neighbor matrices. Posterior probabilities for these six models are shown in
Table 9.9 for the Bayesian model and the log likelihood function values are
shown for the non-Bayesian MESS model.6 From the table we see that the
MESS models correctly identiﬁed the model associated with the true weight
matrix. Almost all of the posterior probability weight was placed on this
model, indicating that the ﬂexibility associated with a speciﬁcation that allows
varying the number of neighbors did not lead the model to pick an inferior
spatial weight structure when confronted with the true structure.


                 TABLE 9.9:              Speciﬁcation search example involving six
                 models
                  Neighbors           ML MESS                    MCMC MESS
                                     Log likelihood           Posterior probability
                    Correct W matrix −75.7670                 0.9539
                    2 neighbors      −85.0179                 0.0001
                    3 neighbors      −80.2273                 0.0094
                    4 neighbors      −81.9299                 0.0017
                    5 neighbors      −79.3733                 0.0247
                    6 neighbors      −80.3274                 0.0102




   Relatively diﬀuse priors along with a prior reﬂecting a belief in constant
variance across space were used in the experiments above to illustrate that
the Bayesian MESS model can replicate maximum likelihood estimates. This
is however a computationally expensive approach to producing MESS esti-
mates. A practical motivation for the Bayesian model would be cases involv-
ing outliers or non-constant variance across space. To illustrate the Bayesian
approach to non-constant variance over space we compare six models based
on alternative values for the hyperparameter r that speciﬁes our prior on het-
erogeneity versus homogeneity in the disturbance variances. These tests are
carried out using two data sets, one with homoscedastic and another with
heteroscedastic disturbances. Non-constant variances were created by scaling
up the noise variance for the last 20 observations during generation of the
y vector. This might occur in practice if a neighborhood in space reﬂects
more inherent noise in the regression relationship being examined. The last
20 observations might represent one region of the spatial sample.
   We test a sequence of declining values for r with large values reﬂecting a
prior belief in homogeneity and smaller values indicating heterogeneity. Pos-
terior probabilities for these alternative values of r are shown in Table 9.10 for

6 Posterior probabilities can be computed using the log marginal likelihood which is de-

scribed in LeSage and Pace (2007) for this model (see Chapter 6).




© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models                               265

both sets of generated data. For the case of constant variances, the posterior
model probabilities correctly point to a model based on large r values of 50. In
the case of heteroscedastic disturbances, the models based on r values of 10,
7 and 4 receive high posterior probability weights, reﬂecting the non-constant
variance.


                   TABLE 9.10:                  Homogeneity test results for two data
                   sets
                                         Homoscedastic data        Heteroscedastic data
                      r-value           Posterior probabilities   Posterior probabilities
                      50                0.9435                    0.0001
                      20                0.0554                    0.0039
                      10                0.0011                    0.2347
                      7                 0.0001                    0.6200
                      4                 0.0000                    0.1413
                      1                 0.0000                    0.0000




   In addition to correctly identifying the existence of heterogeneity in the
disturbance variances, a plot of the posterior means of the vi estimates can
be a useful diagnostic regarding the nature and extent of the heterogeneity.
Figure 9.2 shows a plot of these estimates for the heteroscedastic Bayesian
MESS model as well as the heteroscedastic Bayesian SAR model. From the
ﬁgure we see that the pattern of inﬂated variances over the last 20 observations
is correctly identiﬁed by the vi estimates from both models.




9.5        Fractional diﬀerencing
   In this chapter we developed a spatial model based on the matrix expo-
nential and in Chapter 4 we considered matrix logarithms when examining
alternative ways to calculate the log-determinant. Having the ability to work
with matrix exponentials and logarithms suggests possible model extensions
such as,


                                              ea ln(A) y = Xβ + ε                           (9.33)
                                                   Aa y = Xβ + ε                            (9.34)

where we assume that A is positive deﬁnite and a is real. This is a fractional
transformation of A. An attractive computational feature of this speciﬁcation



© 2009 by Taylor & Francis Group, LLC
266                                                Introduction to Spatial Econometrics

                                       8




                                       7
                                                               MESS model
                                                               SAR model
          Posterior mean V estimates




                                       6




                                       5




                                       4




                                       3




                                       2




                                       1
                                           0   5   10    15    20       25         30   35   40   45   50
                                                                    Observations


FIGURE 9.2: Posterior means of the vi estimates for a heteroscedastic
model


is that ln |Aa | = a ln |A|. Therefore, updating ln |Aa | over a range of changing
values for the parameter a requires simple multiplication of two scalars, a and
ln |A|. The log-determinant term would be computed once for any particular
A.
   In the time series literature fractional transformations are usually associ-
ated with diﬀerencing so that A = In − L where L is a triangular temporal lag
matrix. Fractional diﬀerencing has proven useful for situations where depen-
dence slowly declines with time (Hosking, 1981). A variety of mechanisms can
yield this type of dependence pattern. For example, Granger (1980) showed
that fractional diﬀerencing could arise from aggregation. In ﬁnite time se-
ries, fractional diﬀerencing can be used to represent some high order ARMA
processes (Haubrich, 1993, p. 767).
   If we view the spatial equilibrium as the long-run outcome of a spatiotempo-
ral process as motivated in Chapter 7, a fractional diﬀerencing spatiotemporal
process could lead to a fractional diﬀerencing spatial equilibrium. Therefore,
some of the motivations used in the time series literature may also apply to
the spatial analogs.
   Various aspects of spatial systems may be more likely to produce higher
order dependence than in time. First, in space there are a large number of



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models             267

paths to each observation from every other observation. This means that
changes in one location could take a very indirect path to inﬂuence another
location leading to small amounts of high order dependence. Although in-
dividual paths may have a very small inﬂuence, the cumulative eﬀect may
be non-trivial. Second, boundaries such as borders and natural features may
lead to a reﬂection of inﬂuences, and these inﬂuences may not die away as
quickly as they would in an inﬁnite, featureless plain. Borders, oceans, rivers,
jurisdictions, and other boundaries are integral aspects of the spatial system
and not data artifacts. Complicated geographic features may thus lead to
multiple reﬂections and high order dependence.
   In time series analysis In − L is non-singular, whereas in a spatial setting
A = In − W is singular for stochastic W . Although spatial diﬀerencing has
appeared in the literature (Ord, 1975), the singular nature of the transforma-
tion and its poor empirical performance have not led to much use. However, a
small modiﬁcation to W can allow for an operation that acts like diﬀerencing,
but still results in positive deﬁnite A.
   To see this, consider the usual SAR model in (9.35) where one of the columns
of X equals the unit constant vector ιn . The residuals e in (9.36) result from
multiplying the transformed y by the idempotent matrix MX .


                                           (In − ρW )y = Xβ + ε          (9.35)
                                        MX (In − ρW )y = e               (9.36)

   As a brief review of idempotent matrices, for some matrix Z, the matrix
HZ = Z(Z  Z)−1 Z  is the idempotent projection matrix or Hat matrix, with
its complement being the idempotent matrix MZ = In − HZ . Properties of
idempotent matrices include: MZ2 = MZ , HZ2 = HZ , and MZ HZ = 0n . If Z1
is a subset of Z2 , MZ1 MZ2 = MZ2 MZ1 = MZ2 .
   Since ιn is a column of X, MX Mι = MX . In terms of the Z notation,
Z1 = ιn and Z2 = X. The matrix Mι acts to mean-center columns of matrices
or vectors. For example, a regression using an intercept on a variable v yields
residuals u with zero mean (u = MX v). This same result could be obtained
by calculating u = MX Mι v, since mean-centering a second time still yields
residuals with zero mean. The equality in (9.37) arises since MX Mι = MX ,


                               MX (In − ρW )y = MX (In − ρMι W )y        (9.37)

Although Mι W in (9.37) acts the same as W , In − Mι W could be positive
deﬁnite for some forms of W .
  Speciﬁcally, we introduce a spatial weight matrix W so that In − Mι W is
positive deﬁnite. One form of W that will produce a positive deﬁnite matrix
In − Mι W is a symmetric, doubly stochastic weight matrix Wds such that



© 2009 by Taylor & Francis Group, LLC
268                                Introduction to Spatial Econometrics

Wdsr
      > 0 for some positive integer r.7 This weight matrix has a number
of convenient properties that lead to positive deﬁnite In − Mι Wds . First,
because Wds is real and symmetric, Wds = U ΛU  where U is an n × n matrix
of orthogonal eigenvectors and Λ is a real matrix with associated eigenvalues
on the diagonal (Horn and Johnson, 1993, 4.1.5). We use ui to denote column
i of U or the ith eigenvector. Second, doubly stochastic matrices have a
maximum eigenvalue of 1 with a corresponding constant eigenvector (Marcus
                                        r
and Minc, 1992, 5.13.2). Third, since Wds  > 0 for some positive integer r, this
implies that the largest eigenvalue of 1 is unique (Horn and Johnson, 1993,
Theorem 8.5.2). This condition will be satisﬁed if there are paths of order r
or less between any two entries involved in higher order neighboring relations
                r
speciﬁed by Wds   .
   As a result, the doubly stochastic weight matrix Wds has the eigenvalue
expansion shown in (9.38) and (9.39), where the outer product of the ﬁrst
eigenvector equals Hι and is associated with the maximum eigenvalue, λ1 = 1.


                       Wds = n−1 ιn ιn λ1 + u2 u2 λ2 + . . . + un un λn          (9.38)
                       Wds = Hι λ1 + u2 u2 λ2 + . . . + un un λn                  (9.39)
                          λ1 = max(λ) = 1,       abs(λi ) < 1 (i = 2, . . . n)      (9.40)

  Multiplication of Wds by Mι in (9.41) strips away the ﬁrst eigenvector term
associated with the largest eigenvalue of 1. This deﬁnes W−ι where the largest
magnitude eigenvalue is now strictly less than 1 as stated in (9.42).


                             Mι Wds = W−ι = u2 u2 λ2 + . . . + un un λn           (9.41)
                     max(abs(λW−ι )) < 1                                            (9.42)

 A brief example may make this clearer. Expression (9.43) presents a sym-
                                 (o)
metric doubly stochastic matrix Wds .
                                        ⎡                          ⎤
                                0.0000 0.3389 0.1895 0.2627 0.2089
                              ⎢ 0.3389 0.0000 0.1933 0.1618 0.3060 ⎥
                              ⎢                                    ⎥
                        Wds = ⎢                                    ⎥
                         (o)
                              ⎢ 0.1895 0.1933 0.0000 0.3538 0.2634 ⎥                (9.43)
                              ⎣ 0.2627 0.1618 0.3538 0.0000 0.2217 ⎦
                                0.2089 0.3060 0.2634 0.2217 0.0000

  The eigenvectors U (o) and the eigenvalues on the diagonal of Λ(o) associated
       (o)
with Wds appear in (9.44) and (9.45).


7 Row stochastic matrices could also be used, but these require a more involved development

based on the Schur decomposition.




© 2009 by Taylor & Francis Group, LLC
                               Matrix Exponential Spatial Models             269

                               ⎡                                   ⎤
                             0.4472 0.3512 −0.6123 0.5265 0.1568
                           ⎢ 0.4472 0.5657 0.0769 −0.5409 −0.4261 ⎥
                           ⎢                                       ⎥
                   U (o) = ⎢
                           ⎢ 0.4472 −0.5247 0.1534 0.3343 −0.6240 ⎥
                                                                   ⎥      (9.44)
                           ⎣ 0.4472 −0.5158 −0.3202 −0.5255 0.3940 ⎦
                             0.4472 0.1237 0.7022 0.2056 0.4993

                         diag(Λ(o) ) = 1.00 −0.05 −0.19 −0.41 −0.35       (9.45)

   The ﬁrst column of U (o) contains
                               ' the constant eigenvector, where each of the
ﬁve elements equal 0.4472 = (1/5), and this eigenvector has an associated
eigenvalue of 1. Multiplication of the constant eigenvector by Mι , which mean-
centers vectors, essentially eliminates the ﬁrst eigenvector of U (o) , but does
not change the other eigenvectors. Since the eigenvectors are orthogonal and
one of the eigenvectors was a constant vector, the other eigenvectors have a
zero mean. Multiplication by Mι does not change the other eigenvectors, so
the multiplication Mι U (o) eﬀectively removes the largest eigenvalue of 1 from
   (o)
Wds .

                           ⎡                               ⎤
                     0.0000 0.3512 −0.6123 0.5265 0.1568
                  ⎢ −0.0000 0.5657 0.0769 −0.5409 −0.4261 ⎥
                  ⎢                                        ⎥
          Mι U = ⎢
              (o)
                  ⎢ −0.0000 −0.5247 0.1534 0.3343 −0.6240 ⎥
                                                           ⎥              (9.46)
                  ⎣ −0.0000 −0.5158 −0.3202 −0.5255 0.3940 ⎦
                     0.0000 0.1237 0.7022 0.2056 0.4993

   This allows us to use the matrix W−ι that has a largest eigenvalue less than
1 to deﬁne a positive deﬁnite spatial diﬀerencing transformation, Δ−ι , shown
in (9.47). We label this term a feasible spatial diﬀerencing transformation.
The transformation has a log-determinant equal to ψ as indicated in (9.49).


                                           Δ−ι = In − W−ι                 (9.47)
                                           |Δ−ι | = |In − W−ι | > 0       (9.48)
                                        ln |Δ−ι | = ψ                     (9.49)

   Although it is possible to use (9.47) as a feasible spatial diﬀerencing trans-
formation, it is more ﬂexible to rely on a transformation that introduces a
real fractional parameter, δ, as shown in (9.50). Following Hosking (1981),
we assume δ ∈ (−0.5, 0.5). An outstanding advantage of the fractional trans-
formation is that this leads to a linear log-determinant term in (9.51).


                                              Δδ−ι = eδ ln(Δ−ι )          (9.50)
                                           ln |Δδ−ι | = δψ                (9.51)



© 2009 by Taylor & Francis Group, LLC
270                                Introduction to Spatial Econometrics

   In turn, the linear log-determinant term leads to a simple concentrated log
likelihood shown in (9.52).

                                                         n
                                 ln L(δ) = κ + δψ −        ln (e(δ) e(δ))   (9.52)
                                                         2
                                        e(δ) = MX eδ ln(Δ−ι ) y              (9.53)
  To provide an idea of the performance of spatial fractional feasible diﬀer-
encing, we examine two sets of sample data using spatial fractional feasible
diﬀerencing in the next section.

9.5.1         Empirical illustrations
   This section provides two illustrations of spatial fractional diﬀerencing, one
based on a census tract sample involving housing and the other based on a
sample of US counties and election data. Use of the smaller sample of US
counties versus the larger sample of US Census tracts should allow variation
in the level and relative importance of higher-order spatial dependence.
   We compare the fractional diﬀerencing method to a variety of other estima-
tors. Speciﬁcally, for each data set we ﬁtted the model using ordinary least-
squares (OLS) as well as moving average (MA), matrix exponential (ME),
autoregressive (AR), and fractional diﬀerencing (FD) estimators.


                                        (In − W−ι )δ y = XβF D + ε1          (9.54)
                                          (In − ρW )y = XβAR + ε2            (9.55)
                                                eαW y = XβME + ε3            (9.56)
                                        (In − θW )−1 y = XβMA + ε4           (9.57)
                                                     y = XβOLS + ε5          (9.58)
  The motivation for using alternative speciﬁcations in the series of exper-
iments set forth here is that one approach to accommodating higher-order
spatial dependence would be to rely on alternative model speciﬁcations such
as the FD, AR, ME, and MA shown in (9.54)–(9.57).
  Another means of capturing neighboring relations is through the weight
matrix, and we use two speciﬁcations for W , one based on contiguity with
doubly stochastic scaling that we label (Wc ). The second is a weight matrix
based on 30 nearest neighbors with a geometric decay parameter of 0.9 for
each order of neighbor as shown in (9.26). Let Ws = N1 +N2 0.9+N3 0.81+. . .
where Ni are individual neighbor matrices described in Chapter 4. By itself
Ws is non-symmetric. Forming (Ws + Ws ) and scaling it to make the rows
and columns sum to 1 yields the symmetric doubly stochastic nearest neighbor
matrix that we label Wnn .
  The experiments will examine whether use of the relatively more sophisti-
cated FD model in conjunction with the simpler contiguity weight matrix can



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models              271

produce results comparable to those from simpler model speciﬁcations such
as the AR, ME, and MA based on the richer 30 nearest neighbor weight ma-
trix. It should be clear that the 30 nearest neighbor weight matrix has more
connections among neighbors than does a contiguity-based weight matrix.
   The experiments will examine the trade-oﬀ between specifying dependence
via methods which diﬀer in the emphasis placed on higher-order neighboring
relations versus specifying dependence via weight matrix choice. As will be
shown later, ranking methods in terms of the role of high order dependence
yields (from low to high) OLS, MA, MESS, AR, and FD. Intuitively, methods
such as fractional diﬀerencing which allow a role for high order dependence
may prefer a less connected weight matrix such as one based on contiguity.
Methods such as moving averages which allow for almost no role for high order
dependence may prefer a more connected weight matrix such as one based on
nearest neighbors. Of course, a third modeling strategy is to use both a more
sophisticated model and weight matrix in an eﬀort to model higher order
spatial dependence. This is also considered in our experiments.
   The ﬁrst application uses sample data on the votes cast in the 1980 pres-
idential election across U.S. counties taken from Pace and Barry (1997). To
determine the contiguous US counties, we relied on the geographic centroids
of all counties (or their equivalents) from the Census. The dependent variable
reﬂects the total number of recorded votes cast for all parties in the 1980 pres-
idential election as a proportion of the voting age population, ln(Votes/Pop)
or ln(Votes) − ln(Pop). Explanatory variables used were: the population 18
years of age or older (Pop) in each county, the population in each county with
a 12th grade or higher education (Education), the number of owner-occupied
housing units (Houses), and aggregate county-level income (Income). These
were used to form the 3, 107 × 5 matrix X shown in (9.59), where we have
added a constant term vector ιn .

             X = ιn ln(Pop) ln(Education) ln(Houses) ln(Income)           (9.59)

   Table 9.11 contains the coeﬃcient and dependence parameter estimates
along with signed root deviances and log-likelihoods for the various speciﬁca-
tions based on the doubly stochastic symmetric contiguity weight matrix, Wc .
A clear pattern emerges. Speciﬁcally, the log-likelihoods rise as the methods
place greater emphasis on the role of higher-order neighboring relations with
fractional diﬀerencing producing the highest log likelihood and OLS the low-
est log likelihood. In addition, the fractionally diﬀerenced method produced
a material improvement in log-likelihood function values, achieving a value
that is 92.9 higher than its nearest competitor, the AR model.
   Table 9.12 contains the coeﬃcient estimates along with signed root de-
viances and log-likelihoods for the various speciﬁcations based on the dou-
bly stochastic symmetric nearest neighbor weight matrix, Wnn . Table 9.12
shows that every spatial speciﬁcation except fractional diﬀerencing displayed
a higher likelihood for the nearest neighbor weight matrix Wnn relative to a



© 2009 by Taylor & Francis Group, LLC
272                                Introduction to Spatial Econometrics

contiguity based weight matrix Wc . This result is consistent with the notion
that a richer weight matrix speciﬁcation should improve the model estimates
from methods that place less emphasis on higher order neighboring relations.
These results produced a higher concentrated-log likelihood function value for
the AR speciﬁcation than the fractional diﬀerencing speciﬁcation. However,
the geometric parameter used to create the weight matrix was set to maximize
performance of the AR speciﬁcation. Relative to the fractional diﬀerencing
results based on the contiguity-based weight matrix, here we ﬁnd that an AR
speciﬁcation based on the nearest neighbor weight matrix produced the high-
est likelihood. However, the small diﬀerence of 6.21 between log likelihoods
may be partially due to ﬁtting the geometric parameter governing the weights
assigned to individual neighbors.
   Another interesting pattern emerges from comparing the coeﬃcient esti-
mates from Table 9.11 and Table 9.12. If we compare the AR estimates as we
move from contiguity (Wc ) to nearest neighbor weights (Wnn ) , these move
toward the FD estimates based on contiguity (Wc ). This suggests that the FD
model is better capable of using the simpler contiguity weight matrix (Wc ) to
capture patterns of higher-order spatial dependence relative to the AR model
using Wc .
   The second application uses housing data. Housing provides a classic ex-
ample of spatially dependent data, and we examine (logged) housing values
as a function of (logged) households, median household income, median years
of education, and land area. The sample data represent 62, 226 census-tract
level observations from the 2000 Census. This application uses the deﬁnition
of X from (9.60).


    X = ιn ln(Households) ln(Income) ln(Education) ln(Land Area)          (9.60)

   Table 9.13 contains the coeﬃcient and dependence estimates along with
signed root deviances and log-likelihoods for the various speciﬁcations based
on the doubly stochastic symmetric contiguity weight matrix, Wc . Like the
county-level election data results, Table 9.13 again shows a pattern where
the log-likelihood rises as each method places more emphasis on higher or-
der dependence (FD>AR>ME>MA>OLS). The diﬀerence between log like-
lihoods is material with FD exceeding the likelihood of the AR speciﬁcation
by 2, 588.60.
   Table 9.14 contains results for the various speciﬁcations based on the dou-
bly stochastic symmetric nearest neighbor weight matrix, Wnn in the same
format as Table 9.13. We see a similar pattern to those from the election
data, with the AR speciﬁcation exhibiting the highest likelihood. In this case,
the log-likelihood from the ME speciﬁcation also exceeded the FD log likeli-
hood, but unlike the election data example, FD using the simpler contiguity
weight matrix Wc outperformed an AR speciﬁcation based on the richer 30
nearest neighbors weight matrix. This makes the point that the FD model



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models                   273

speciﬁcation can exploit a simpler weight structure to successfully capture
higher-order patterns of dependence.
  It is also noteworthy that the fractional diﬀerencing speciﬁcations in all four
tables resulted in similar estimates for the parameter δ, which ranged from
0.22 to 0.29. These dependence estimates also displayed less variation over
the alternative data samples and weight matrices than the spatial dependence
parameters from other model speciﬁcations.


TABLE 9.11:                    Maximum likelihood estimates for election data using Wc
  Variables                        FD         AR        ME           MA         OLS
  Intercept        0.7157   0.8952   1.0100   1.1711   1.5576
                  16.9542  20.4268  22.5129  25.6052  30.7777
  Voting Pop      −0.5675 −0.6493 −0.6948 −0.7451 −0.8464
                 −29.1112 −31.7391 −32.6442 −33.8985 −34.7211
  Education        0.1281   0.2274   0.2739   0.3431   0.5167
                   8.6762  14.9267  17.9317  22.3849  30.8928
  Home Ownership   0.3991   0.3986   0.4134   0.4232   0.4291
                  26.3627  25.3995  25.2175  24.9422  23.0066
  Income           0.0151 −0.0079 −0.0265 −0.0585 −0.1439
                   0.9211 −0.4727 −1.5058 −3.2359 −7.2373
  Parameter        0.2189   0.5320 −0.5845 −0.4600     0.0000
                  33.6086  30.7143  29.2650 −25.2714   0.0000
  n−1 ln L        −1.8482 −1.8781 −1.8921 −1.9272 −2.0300




   To summarize the empirical results, both the election and housing data
showed a consistent pattern of FD having the highest likelihood when using
contiguity Wc . We also found a pattern of improvement in the likelihood
function values from the other spatial speciﬁcations when the model switched
from the simpler contiguity weights, Wc to the richer 30 nearest neighbor
weights Wnn . Examining the alternative estimators in terms of the weight
assigned to low-order versus high-order neighbors provides some insight into
these patterns. Ranking the alternative speciﬁcations on the basis of low-
versus high-order neighbor emphasis leads to: OLS, MA, ME, AR, and FD.
   We now provide an empirical examination of the emphasis placed on high-
order neighboring relations by the various dependence speciﬁcations. The
results we present were constructed using estimates from ﬁtting the election
data example with the contiguity weight matrix Wc shown in (Table 9.11).
We can express E(y) using (9.61)–(9.65) as a function of X and the empirical
estimates from the various dependence speciﬁcations. Each of the dependence
speciﬁcations has a series approximation based on powers of the weight ma-
trix. The emphasis each speciﬁcation gives to the various orders of neighbors
distinguishes these speciﬁcations.



© 2009 by Taylor & Francis Group, LLC
274                                Introduction to Spatial Econometrics




TABLE 9.12:                    Maximum likelihood estimates for election data using Wnn
  Variables                        FD         AR        ME           MA         OLS
  Intercept        0.6953   0.7659   0.8264   0.9859   1.5576
                  15.7086  17.5550  18.8537  22.8608  30.7777
  Voting Pop      −0.5618 −0.6108 −0.6397 −0.6913 −0.8464
                 −28.1070 −30.2889 −31.2022 −32.9737 −34.7211
  Education        0.1083   0.1604   0.1882   0.2583   0.5167
                   6.8455  10.3655  12.3896  18.0939  30.8928
  Home Ownership   0.4099   0.4025   0.4097   0.4190   0.4291
                  26.3939  26.0726  25.9185  25.7206  23.0066
  Income           0.0191   0.0194   0.0115 −0.0195 −0.1439
                   1.1257   1.1535   0.6753 −1.1408 −7.2373
  Parameter        0.2899   0.6700 −0.9392 −0.9100     0.0000
                  33.2438  33.7897  33.2053 −30.1890   0.0000
  n−1 ln L        −1.8521 −1.8462 −1.8525 −1.8833 −2.0300




TABLE 9.13:                   Maximum likelihood estimates for housing data using Wc
  Variables                   FD        AR           ME          MA          OLS
  Intercept              −5.4482   −4.8989   −5.8024   −7.4016 −11.0700
                        −154.5890 −148.0487 −161.3703 −188.2670 −208.6987
  Households               0.0185    0.0142    0.0221    0.0374    0.0767
                          10.6710    8.0028   11.1578   16.9300   25.8473
  Income                   0.3464    0.3643    0.4470    0.5867    0.9105
                         111.0039  116.6410  132.0263  158.0656  181.5669
  Education                0.6208    0.4360    0.4808    0.5751    0.7828
                          65.8672   45.9048   45.4117   48.6392   49.3896
  Land Area                0.0036  −0.0112   −0.0203   −0.0349   −0.0711
                           8.0856 −24.7413 −41.2206 −64.3828 −97.6894
  Parameter                0.2652    0.7260  −0.9551   −0.7700     0.0000
                         246.6843  235.9442  224.6063 −190.9716    0.0000
  n−1 ln L               −4.0564   −4.0980   −4.1400   −4.2523   −4.5453




© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models                 275

TABLE 9.14:                   Maximum likelihood estimates for housing data using Wnn
  Variables                   FD        AR           ME          MA           OLS
  Intercept              −6.4223   −5.4099   −5.4572   −7.2926 −11.0700
                        −160.8616 −157.6558 −155.2703 −200.2547 −208.6987
  Households               0.0263    0.0143    0.0147    0.0347    0.0767
                          14.0014    7.8368    7.7959   16.7868   25.8473
  Income                   0.4011    0.3799    0.3960    0.5639    0.9105
                         113.8333  117.0507  120.5236  165.2767  181.5669
  Education                0.7350    0.5157    0.4906    0.5869    0.7828
                          72.0133   52.6201   48.5588   53.0282   49.3896
  Land Area                0.0065  −0.0024   −0.0063   −0.0272   −0.0711
                          13.0689  −5.0206 −13.0949 −55.0203 −97.6894
  Parameter                0.2721    0.7770  −1.3320   −0.9900     0.0000
                         236.2361  238.8063  237.9460 −211.8613    0.0000
  n−1 ln L               −4.0969   −4.0871   −4.0904   −4.1847   −4.5453




                                  E(yF D ) = (In − W−ι )−0.2189 XβF D         (9.61)
                                  E(yAR ) = (In − 0.5320 W )−1 XβAR           (9.62)
                               E(yME )y = e0.5845 W XβME                      (9.63)
                               E(yMA )y = (In + 0.4600 W )XβMA                (9.64)
                                E(yOLS ) = XβOLS                              (9.65)

  To make this less abstract, Table 9.15 presents the weights assigned to var-
ious powers of W based on the estimates shown in (9.61)–(9.64). Inspection
of Table 9.15 shows that relative to the AR speciﬁcation, FD assigns lower
weight to the ﬁrst three orders of neighbors, about the same weight to fourth
order neighbors, and larger weights for ﬁfth and higher order neighbors. Rel-
ative to the other spatial speciﬁcations, the FD weights decline more slowly
with order.


9.5.2         Computational considerations
   From a computational standpoint, one can use many of the same calcula-
tions set forth in the case of the matrix exponential spatial speciﬁcation to
produce estimates for the FD speciﬁcation. For example, we can rely on the
closed-form solution method from Chapter 4, where the expression for G1
remains the same. However, Y has a diﬀerent deﬁnition.


                        Y = y ln(Δ−ι )y ln(Δ−ι )2 y . . . ln(Δ−ι )q−1 y       (9.66)



© 2009 by Taylor & Francis Group, LLC
276                                Introduction to Spatial Econometrics
                                   TABLE 9.15:        Weights by order of
                                   neighbors
                                     Order   FD        AR       ME        MA
                                        0    0.0000   1.0000   1.0000   1.0000
                                        1    0.2189   0.5320   0.5845   0.4600
                                        2    0.1334   0.2830   0.1708   0.0000
                                        3    0.0987   0.1506   0.0333   0.0000
                                        4    0.0794   0.0801   0.0049   0.0000
                                        5    0.0670   0.0426   0.0006   0.0000
                                        6    0.0583   0.0227   0.0001   0.0000
                                        7    0.0518   0.0121   0.0000   0.0000
                                        8    0.0467   0.0064   0.0000   0.0000
                                        9    0.0427   0.0034   0.0000   0.0000
                                        10   0.0393   0.0018   0.0000   0.0000
                                        11   0.0365   0.0010   0.0000   0.0000
                                        12   0.0342   0.0005   0.0000   0.0000
                                        13   0.0321   0.0003   0.0000   0.0000
                                        14   0.0303   0.0001   0.0000   0.0000
                                        15   0.0287   0.0001   0.0000   0.0000
                                        16   0.0273   0.0000   0.0000   0.0000
                                        17   0.0261   0.0000   0.0000   0.0000
                                        18   0.0249   0.0000   0.0000   0.0000
                                        19   0.0239   0.0000   0.0000   0.0000
                                        20   0.0230   0.0000   0.0000   0.0000




   In the matrix exponential case, W 2 y is calculated as W (W y) as opposed
to forming W 2 and multiplying it by y. In the fractional diﬀerencing case, we
calculate ln(Δ−ι )2 y by ﬁnding v = ln(Δ−ι )y and then by forming ln(Δ−ι )v.
In turn, v = − i=1 i−1 W i Mι y, where p is the highest-order power used.
                     p

Since this converges slowly, p should be large (e.g., 1000). Calculating Y
represents the most time consuming part of fractional diﬀerencing estimation.
However, this only needs to be done once for a given W , making estimation
feasible for large n.
   The matrix W−ι is dense by itself even though W is sparse. Therefore, cal-
culation of ψ by direct evaluation of ln |In −W−ι | is not practical. Also, ln |In −
W | is singular. However, the constant ψ = ln |In − W−ι | = limω→1 (ln |In −
ωW |− ln(1 − ω)). This is the overall log-determinant ln |In − W | with the part
(ln(1 − ω)) associated with the eigenvalue of 1 subtracted out. A practical
computational approach is to calculate ln |In − ωW | − ln(1 − ω) for a sequence
of values of ω approaching (but not including) 1. This sequence can be used
to extrapolate ln |In − ωW | − ln(1 − ω) for ω = 1. This method permits use
of non-symmetric or symmetric matrices, takes advantage of sparseness in W ,
and avoids the singularity at ω = 1.
   The computational time required by the various procedures is quite mod-



© 2009 by Taylor & Francis Group, LLC
                              Matrix Exponential Spatial Models           277

erate. For the n = 3, 107 data set it took 0.2 seconds to ﬁnd the contiguity
weight matrix, 0.06 seconds to calculate ψ, 9.61 seconds to compute Y (for
p = 2, 500, q = 16) and only 0.13 seconds to produce the fractional diﬀerenc-
ing estimates. The 30 nearest neighbor case required 0.47 seconds to ﬁnd the
weight matrix, 0.28 seconds to compute ψ, 19.84 seconds to compute Y , and
0.14 seconds to ﬁnd the estimates.8 We need only form ψ and Y when chang-
ing W , and thus exploring models based on alternative independent variables
requires very little computational time.
  As a check on this approach to calculating ψ, we found the eigenvalues of
Wc for the election data and calculated the log-determinant of W−ι directly.
The diﬀerence between the log-determinant from the eigenvalue calculation
and the proposed approach was 0.0054, a very small number. We also checked
the accuracy of the fractional diﬀerencing approximation. This was done by
changing p, the degree of the matrix logarithm approximation, and q, the
degree of the matrix exponential approximation. Changing p and q had some
eﬀect on the accuracy of δ̃, and therefore on the regression coeﬃcients. For
the election data using Wc , changing from p = 1, 000 and q = 8 to p = 2, 500
and q = 16 resulted in a change in the δ estimate from 0.2197 to 0.2189, a
diﬀerence of 0.0008.
  For the larger n = 62, 226 data set, it took 2.4 seconds to form the spatial
weight matrix, 0.80 seconds to determine ψ, 4.65 minutes to compute Y using
q = 16 and p = 2, 500, and only 0.17 seconds to ﬁnd the fractional diﬀerencing
estimates. The 30 nearest neighbor case required 6.03 seconds for ψ, and 13.47
minutes to compute Y . Again, when changing X the marginal computational
cost would just be the time to ﬁnd the fractional diﬀerencing estimates. The
key computational burden is computing Y , and this could be reduced by going
to a Chebyshev approximation of the type described in Chapter 4.




9.6        Chapter summary
  We have introduced the matrix exponential spatial speciﬁcation (MESS)
as an alternative to the spatial autoregressive process. MESS can be used
to construct spatial regression models that replace geometric decay from the
spatial autoregressive process with exponential decay.
  This type of speciﬁcation has both computational as well as theoretical ad-
vantages over the spatial autoregressive speciﬁcation. These arise from the
ease of inversion, diﬀerentiation, and integration of the matrix exponential.
Moreover, the covariance matrix associated with the matrix exponential is
always positive deﬁnite. Finally, the matrix exponential has a simple matrix

8 All the times were for a machine using an AMD 3.2 Ghz Athlon.




© 2009 by Taylor & Francis Group, LLC
278                                Introduction to Spatial Econometrics

determinant which vanishes for the common case of a spatial weight matrix
with a trace of zero. This simpliﬁcation was used to produce a closed-form
solution for maximum likelihood estimates, and to provide Bayesian estimates
based on univariate numerical integration of a scalar polynomial expression.
In addition, some of the beneﬁts of MESS extend to the case of spatial frac-
tional diﬀerencing.
   LeSage and Pace (2007) provide a further illustration that demonstrates
how the analytical and computational advantages of MESS can be exploited in
Bayesian model comparison M C 3 methods of the type described in Chapter 6.
The M C 3 method was implemented by drawing on straightforward extensions
of the existing results in the regression model literature.
   The chapter also set forth a spatial speciﬁcation based on a fractional diﬀer-
encing transformation. In the time series literature fractional diﬀerencing has
proven useful in situations where dependence slowly declines with time. We
argued that spatial systems may be more likely to produce patterns of higher
order dependence than in the case of time series analysis. This type of pat-
tern seems likely to arise when the number of connection paths between each
observation and all others is large, or when boundaries or borders produce
multiple reﬂections as a result of changes to nodes in the system.




© 2009 by Taylor & Francis Group, LLC
Chapter 10
Limited Dependent Variable Spatial
Models


This chapter introduces approaches to modeling dependent variables that re-
ﬂect binary choice outcomes generated by spatially dependent processes. Spa-
tial dependence in choice outcomes result in a situation where observed choices
at one location are similar to choices made at nearby locations. There are a
number of scenarios where we might see this type of outcome in observed
choices. For example, in the aftermath of Hurricane Katrina the decision of
a business owner in New Orleans to rebuild and reopen a store might de-
pend on the decision of neighboring businesses to reopen. When considering
origin-destination ﬂows of commuters traveling to work, the choice between
mass transit and automobile mode of travel might exhibit spatial dependence
because commuters located at nearby origins would be faced with the same
presence or absence of mass transit opportunities. Holloway, Shankara, and
Rahman (2002) show that binary choices regarding adoption of an agricul-
tural program by Bangladeshi rice producers exhibited spatial dependence.
Applications to land-use decisions regarding conversion from agricultural to
non-agricultural uses, where land-use decisions of neighboring property own-
ers exert an inﬂuence on the decision outcome have also been popular (Zhou
and Kockelman, 2008; Irwin and Bockstael, 2004). Probit variants of the SAR
model were considered by McMillen (1992), who proposed an EM algorithm as
a way to produce consistent (maximum likelihood) measures of dispersion for
estimates β from these models. A major contribution to the non-spatial probit
literature was the work of Albert and Chib (1993) who proposed treating the
binary dependent variable observations as indicators that relate to underlying
unobservable or latent levels of utility. They introduce these latent levels as
parameters that can be estimated using a Bayesian MCMC framework. We
discuss this type of approach in Section 10.1 which we extend to the case of
the spatial probit SAR model (LeSage, 2000). We consider a related Tobit
(or censored regression) model variant of the SAR model in Section 10.3.
   The ﬁrst type of spatial probit model that we discuss takes the SAR form
shown in (10.1), where the n × 1 vector y contains a set of 0,1 binary values
that reﬂect choice outcomes, or they might reﬂect presence or absence of a tax
or other feature in each region/observation. We could also have a measure of
negative or positive change in (average) land values for a sample of regions,
and so on.


                                                                           279
© 2009 by Taylor & Francis Group, LLC
280                                Introduction to Spatial Econometrics



                              y = ρW y + Xβ + ε,       ε ∼ N (0, σε2 In )   (10.1)

   This probit variant of the SAR model could of course be extended to the
case of the SDM model by adding spatial lags of the explanatory variables.
The motivations for a spatial lag of the dependent variable already described
in the initial chapters should apply here as well. For example, if we begin
with a time-lagged model that relates yt to W yt−1 , then we are stating that
decision outcomes (or the presence or absence of some feature in each region)
exert an impact on future decisions (or features) of neighboring regions.
   Similarly, beginning with a non-spatial relationship: y = Xβ + u, our moti-
vation for a spatial lag of the dependent variable as arising from the presence
of an omitted variable that is correlated with an included variable and ex-
hibits spatial dependence would also provide a motivation for the SAR or
SDM model. As an example, if we have a binary measure of the presence or
absence of patenting activity for a sample of regions, the existence of tacit un-
measurable knowledge that is excluded from the set of explanatory variables
in the model should lead to spatial dependence in the observed measures that
record the presence or absence of regional patenting activity.
   In addition to the SAR probit model we also discuss SAR ordered probit,
SAR Tobit, and SAR multinomial probit variants of the SAR probit model.
We approach the estimation task from a Bayesian MCMC sampling viewpoint.
For an extensive discussion of alternative approaches to estimating these mod-
els see Flemming (2004). Maximum likelihood estimation seems quite diﬃcult
as pointed out by Beron and Vijverberg (2000), who report estimation times
for a SAR probit model requiring many hours for a 49 observation problem.
Early use of Bayesian MCMC sampling for spatial probit models can be found
in Bolduc, Fortin and Gordon (1997), who model a spatial error covariance
structure.
   A second type of model that we explore in Section 10.6 was introduced
by Smith and LeSage (2004). This model relies on an error structure that
involves an additive error speciﬁcation ﬁrst introduced by Besag, York and
Mollie (1991) and subsequently employed by many authors (Gelman et al.,
1995). The approach of Smith and LeSage (2004) allows both spatial depen-
dencies and general spatial heteroscedasticity to be treated simultaneously
and has been popular in marketing applications (Allenby et al., 2002; Yang
and Allenby, 2003; Ter Hofstede, Wedel and Steenkamp, 2002).
   Smith and LeSage (2004) illustrate the method using county-level voting
outcomes for a presidential election. The model relies on spatially structured
eﬀects parameters as well as common variance scalars for broader regions such
as states in the county-level voting application. This allows for state-level
diﬀerences in the eﬀects parameters as well as the variance.
   Section 10.6 also discusses a dynamic spatial ordered probit extension of this
model described in Wang and Kockelman (2008a,b). This dynamic variant



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models                    281

of the model can capture patterns of spatial and temporal autocorrelation in
ordered categorical response data.
   The next section begins with a discussion of Bayesian treatment of unob-
served latent utilities, which is a key feature of MCMC estimation of probit,
tobit and multinomial probit models.




10.1         Bayesian latent variable treatment
   The Bayesian approach to modeling binary limited dependent variables
treats the binary 0,1 observations in y as indicators of latent, unobserved (net)
utility. The unobservable utility underlies the observed choice outcomes. For
example, if the binary dependent variable reﬂects the decision to buy or not
buy a product, the observed 0,1 indicator variable y represents observed de-
cision outcomes in our sample. These are viewed as merely a proxy for the
fact that when net utility is negative, a decision not to buy (y = 0) is made,
and when net utility associated with the purchase is positive, a buy decision
(y = 1) is made.1 The Bayesian estimation approach to these models is to
replace the unobserved latent utility with parameters that are estimated. For
the case of a SAR probit model, given estimates of the n × 1 vector of miss-
ing or unobserved (parameter) values that we denote as y ∗ , we can proceed
to estimate the remaining model parameters β, ρ by sampling from the same
conditional distributions that we used in the continuous dependent variable
Bayesian SAR models from Chapter 5.
   More formally, the choice depends on the diﬀerence in utilities: (U1i −
U0i ), i = 1, . . . , n associated with observed 0,1 choice indicators. The probit
model assumes this diﬀerence, yi∗ = U1i − U0i , follows a normal distribution.
We do not observe yi∗ , only the choices made, which are reﬂected in:


                                        yi = 1,   if yi∗ ≥ 0
                                        yi = 0,   if yi∗ < 0

  There are strict interpretations of this relationship that rely on utility max-
imization to argue that an individual located in region i choosing alternative
1 implies: Pr(yi = 1) = Pr(U1i ≥ U0i ) = Pr(yi∗ ≥ 0). Smith and LeSage
(2004) provide a more detailed discussion of these issues. Albert and Chib
(1993) adopt a less formal economic interpretation and view the yi∗ as simply
unobserved values associated with observed choice events. These are modeled
using the non-spatial regression relation: yi∗ = Xi β + εi , εi ∼ N (0, σε2 ).

1 The utility derived from owning the good could be considered minus that from retaining

income equal to the purchase price when the consumer does not buy the good.




© 2009 by Taylor & Francis Group, LLC
282                                Introduction to Spatial Econometrics

   If the vector of latent utilities y ∗ were known, we would also know y, which
led Albert and Chib (1993) to conclude: p(β, σε2 |y ∗ ) = p(β, σε2 |y ∗ , y). The
insight here is that if we view y ∗ as an additional set of parameters to be es-
timated, then the (joint) conditional posterior distribution for the model pa-
rameters β, σε2 (conditioning on both y ∗ , y) takes the same form as a Bayesian
regression problem involving a continuous dependent variable rather than the
problem involving the discrete-valued vector y. We extend this approach to
the case of a SAR model where the model parameters are β, ρ, σε2 . If an ad-
ditional set of n parameters yi∗ , i = 1, . . . , n were introduced to the model,
estimation via MCMC sampling would require that we sequentially sample
each of these parameters from their conditional distributions. Recall that our
MCMC estimation scheme for the SAR model simply cycles through the se-
quence of conditional distributions for all model parameters taking samples
from each of these. A large number of passes through the sampler produces a
sequence of draws for the model parameters that converge to the unconditional
joint posterior distribution.
   Albert and Chib (1993) argued that if we could introduce a vector of pa-
rameters y ∗ and obtain a sample from the conditional posterior distribution
of each element (parameter) in this vector, then estimation of the remaining
parameters of interest β, σε2 , would be relatively simple. The simplicity arises
from the fact that given y ∗ values in place of the binary y values, we can
use the same conditional posterior distributions that arise for the case of a
continuous dependent variable regression model. We follow this approach for
our Bayesian SAR model from Chapter 5 rather than the conventional regres-
sion model used by Albert and Chib (1993). In this case, given the vector
of n parameter values in y ∗ in place of the binary y values, we can use the
same conditional posterior distributions set forth in Chapter 5 to sample the
remaining model parameters β, ρ, σε2 , where y ∗ is used to replace the vector
y containing binary values. This approach is quite simple since the form of
the distributions from which we need to sample the parameters β, ρ, σε2 con-
ditional on the parameters y ∗ are the same as those from Chapter 5 for the
continuous dependent variable model.
  Albert and Chib (1993) go on to derive the form of the joint posterior
distribution p(β, σε2 |y ∗ , y) and associated conditional posterior distributions
that allow MCMC estimation for their non-spatial probit regression model.
However, their results concerning the conditional posterior distributions are
not applicable to our case where the dependent variable follows a spatial
dependence process.
  For the case of independent observations considered by Albert and Chib
(1993), combining the normality assumption from the non-spatial regression
model with the sample data information contained in y, leads to conditional
distributions for the important parameters yi∗ that take the form of univariate
truncated normal distributions shown in (10.2) and (10.3).



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models                   283



                      yi∗ |yi , β, σε2 ∼ N (Xi β, σε2 ) δ(yi∗ ≥ 0)   if yi = 1   (10.2)
                      yi∗ |yi , β, σε2 ∼ N (Xi β, σε2 ) δ(yi∗ < 0)   if yi = 0   (10.3)

   We use δ(A) as an indicator function for each event A (in the appropriate
underlying probability space), so δ(A) = 1 for outcomes where A occurs and
δ(A) = 0 otherwise. Expression (10.2) represents a univariate normal dis-
tribution truncated to the left at 0 if yi = 1, where Xi β is the mean of the
distribution and σε2 is the variance. Similarly, expression (10.3) is a univariate
normal distribution truncated to the right at zero.
   There is an identiﬁcation problem with the non-spatial probit model since
multiple values for the model parameters β, σε2 give rise to the same likelihood
function values. This arises because P r(Xi β+εi ≥ 0|β, σε2 ) = P r(cXi β+cεi ≥
0|β, σε2 ). That is, multiplying the mean Xi β and variance σε2 by the scalar
c > 0 leads to a distribution for the disturbances: cεi ∼ N (0, c2 σε2 ), which
is the same model with diﬀerent coeﬃcients and error variance. This means
that the probit model cannot identify both β and σε2 , which is conventionally
solved by setting σε2 = 1.


10.1.1          The SAR probit model
   An important diﬀerence between the non-spatial regression model and the
SAR model is that the dependence leads to a multivariate truncated normal
distribution (TMVN) for the latent y ∗ parameters from which we need to
sample these parameters. Speciﬁcally, for the SAR model we have a mean
vector and variance-covariance matrix shown in (10.4), where we have set
σε2 = 1 for identiﬁcation.


              y ∗ ∼ T M V N {(In − ρW )−1 Xβ, [(In − ρW ) (In − ρW )]−1 }       (10.4)
              y ∗ ∼ T M V N (μ, Ω)

   We introduce μ = (In − ρW )−1 Xβ as the mean and Ω = [(In − ρW ) (In −
ρW )]−1 as the variance-covariance matrix. As in the case of independent
observations, the insight of Albert and Chib (1993) holds so the (joint) con-
ditional distribution for the model parameters p(β, ρ|y ∗ ) = p(β, ρ|y ∗ , y) takes
the same form as in the case of a continuous dependent variable SAR model.
It also leads to individual conditional posterior distributions for the parame-
ters p(β|ρ, y ∗ ) and p(ρ|β, y ∗ ) that are the same as in the case where we have
a continuous dependent variable y in place of y ∗ . The key conditional pos-
terior distribution that we require to implement this scheme is the n-variate
truncated normal for p(y ∗ |β, ρ, y).



© 2009 by Taylor & Francis Group, LLC
284                                Introduction to Spatial Econometrics

10.1.2          An MCMC sampler for the SAR probit model
   For clarity we refer to estimation of the SAR probit model as an MCMC
sampling scheme that samples sequentially from the conditional posterior dis-
tributions for the model parameters β, ρ, y ∗ . Within this sequence, we need
to sample a set of n values to ﬁll-in the vector y ∗ . Details regarding this are
described in the next section. For clarity we describe the MCMC sampling
scheme here without details regarding this step.
   If we use the same independent prior distributions π(β, ρ) = π(β)π(ρ) as
in Chapter 5, where we assign a normal prior β ∼ N (c, T ) and a uniform (or
B(a, a)) prior for the parameter ρ, these two conditional distributions given
the parameters y ∗ should be the same. Speciﬁcally, we can sample:


                         p(β|ρ, y ∗ ) ∝ N (c∗ , T ∗ )                         (10.5)
                                 c∗ = (X  X + T −1 )−1 (X  Sy ∗ + T −1 c)
                                    T ∗ = (X  X + T −1 )−1                   (10.6)
                                     S = (In − ρW )

  To see the insight of Albert and Chib (1993), suppose we had three scalar
parameters θ1 , θ2 , θ3 and sample data y. The joint distribution: p(θ1 , θ2 |θ3 , y)
would be used as the basis for deriving a conditional distribution for the pa-
rameter θ1 , and another conditional distribution for the parameter θ2 . These
two conditionals would take the form: p(θ1 |θ2 , θ3 , y) and p(θ2 |θ1 , θ3 , y). Of
course, to complete the sampler we would need to also have a conditional
distribution: p(θ3 |θ1 , θ2 , y).
  Applying the result from Albert and Chib (1993), the (joint) conditional
distribution for the parameters p(θ1 , θ2 |θ3 ) = p(θ1 , θ2 |θ3 , y). Further, using
β = θ1 , ρ = θ2 and y ∗ = θ3 , we have the result in (10.5), after noting that the
parameters y ∗ play the role of the continuous data vector y from Chapter 5.
  Following this same line of reasoning, the parameter ρ can be sampled from
p(ρ|β, y ∗ ). This can be accomplished using either the Metropolis-Hastings
approach or integration and draw by inversion set forth in Section 5.3.2. This
requires evaluating the expression in (10.7)

                                                               
                           ∗                1   ∗        ∗
               p(ρ|β, y ) ∝ |In − ρW | exp − [Sy − Xβ] [Sy − Xβ]              (10.7)
                                            2
   Finally, we need to sample each value of y ∗ from its conditional distribu-
tion. In the work of Albert and Chib (1993), each value yi∗ in the vector had
a univariate truncated normal conditional distribution. This univariate trun-
cated normal distribution with a mean and variance that was easy to calculate
provided the basis for sampling these n parameters.
   In the case of our SAR probit model, the conditional distribution of the pa-
rameter vector y ∗ takes the form of a truncated multivariate distribution. For



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models              285

the case of a non-truncated n-dimensional multivariate normal distribution,
one can sample from a sequence of n conditional univariate normal distri-
butions to obtain the n parameters. Smith and LeSage (2004) provide an
example of this type of procedure. However, Geweke (1991) points out that
this cannot be done for the case of a truncated multivariate distribution. That
is, the individual elements from a vector such as y ∗ cannot be obtained by
sampling from a sequence of univariate truncated normal distributions. This
has been a source of misunderstanding in work on the SAR probit model such
as that by LeSage (2000).
   It is possible to sample the n parameters in the vector y ∗ from the truncated
multivariate normal distribution using a method proposed by Geweke (1991).
Details regarding this are provided in the next section. For now, we simply
assume that these parameters can be sampled.
   Given the ability to sample from the complete sequence of conditional distri-
butions for all of the model parameters, MCMC estimation can be applied to
the SAR probit model. A single sequence of samples from p(β|ρ, y ∗ ), p(ρ|β, y ∗ )
and p(y ∗ |β, ρ) constitutes only a single pass through the MCMC sampler. We
must make a large number of passes to produce a large sample of draws from
the joint posterior distribution of the model parameters.
   The sample of draws can be used to construct parameter estimates based
on posterior means and standard deviations as described in Chapter 5.

10.1.3          Gibbs sampling the conditional distribution for y ∗
   The key conditional distribution required to implement our MCMC sam-
pling scheme for the SAR probit model is p(y ∗ |β, ρ). This section focuses on
details regarding how to obtain samples from this conditional distribution.
As already noted, we cannot sample the individual elements yi∗ by sampling
from a sequence of univariate truncated normal distributions. That is, the
marginal distributions for individual elements of the n × 1 vector y ∗ are not
univariate truncated normal.
   Geweke (1991) sets forth one approach to sample from a multivariate trun-
cated normal distribution. We will rely on the Geweke (1991) approach, but
note that this is an active area of research and other approaches have also
appeared in the literature. Geweke (1991) uses a Gibbs sampling algorithm
to carry out draws from a multivariate truncated normal distribution. Recall
that we use the term Gibbs sampler to refer to situations where the conditional
distributions from which we need to sample take known forms.
   The approach involves Gibbs sampling that produces draws for individual
elements yi∗ from the n × 1 vector y ∗ based on the (conditional) distribution
of each element yi∗ conditional on all other n − 1 elements, which we denote
        ∗
using y−i . For our SAR probit model, we wish to sample from a truncated
n-variate normal distribution: y ∗ ∼ T M V N (μ, Ω) subject to vector of lin-
ear inequality restrictions a ≤ y ∗ ≤ b, where the truncation bounds a and b
depend on the observed values 0, 1 for elements of y, with details provided



© 2009 by Taylor & Francis Group, LLC
286                                Introduction to Spatial Econometrics

later. Geweke (1991) establishes that sampling from a truncated n-variate
normal distribution: y ∗ ∼ T M V N (μ, Ω) subject to linear inequality restric-
tions a ≤ y ∗ ≤ b, is equivalent to constructing samples from the n-variate
normal distribution z ∼ N (0, Ω) subject to the linear restrictions: b ≤ z ≤ b.
Where b = a−μ, b = b−μ. We then obtain the sample for y ∗ using: y ∗ = μ+z.
   The method of Geweke (1991) works with the precision matrix, or inverse
of the variance-covariance matrix of the truncated multivariate normal distri-
bution from which we wish to sample. We label this for our SAR probit model
using: Ψ = Ω−1 = (1/σε2 )(In − ρW  )(In − ρW ). As in the case of non-spatial
probit, we impose the identiﬁcation restriction that σε2 = 1.
   Geweke’s procedure takes into account the fact that the marginal distribu-
tions of the elements of z are not univariate truncated normal. He exploits the
fact that the (conditional) distribution of each element of zi , conditional on
all other elements z−i can be expressed as univariate distributions with (con-
ditional) mean and (conditional) variance that are easy to calculate. These
expressions for the mean and variance can be used to produce a draw from a
univariate truncated normal distribution subject to appropriate constraints.
This allows us to use Gibbs sampling to build up a sample from the (joint)
multivariate truncated normal distribution in which we are interested. We
emphasize that we use the term Gibbs sampler because Geweke’s approach
takes advantage of the fact that the (conditional) distribution of each element
i, zi |z−i , conditional on all of the other elements −i takes a known form from
which random deviates can be easily generated.
   Geweke uses expressions for the partitioned (symmetric) matrix inverse to
establish that E(zi |z−i ) = γ−i z−i for the case of a non-truncated multivariate
normal distribution N (0, Ω), where γ−i = −Ψ−i /Ψi,i , and Ψ−i is the ith row
of Ψ excluding the ith element. This implies that for the truncated distribu-
tion we have normal conditional distributions taking the form in (10.8).


                                        zi |z−i = γ−i z−i + hi vi             (10.8)
                                                        −1/2
                                            hi = (Ψi,i )
   Samples for vi ∼ N (0, 1) are subject to the truncation constraints:


                               (bi − γ−i z−i )/hi < vi < (bi − γ−i z−i )/hi
                               bi = −∞ and bi = −μi for yi = 0
                               bi = −μi and bi = +∞ for yi = 1
These can be used to produce a vector z of zi , i = 1, . . . , n, where previously
sampled values z1 , z2 , . . . , zi−1 are used during sampling of element zi . In
addition, we use zi+1 , zi+2 , . . . , zn from the previous pass through the Gibbs
                                                        (0)
sampler when updating zi . More formally, let zi denote the initial values
              (m)
of zero, and zi    the values after pass m through the Gibbs sampler. On



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models              287
                                        (1)   (1)   (1)
the ﬁrst pass we use: z1 , z2 , . . . , zi−1 when ﬁlling in the initial zero value
       (0)
for zi . Having reached the ﬁnal element i = n, we have a set of values
  (1)
zi , i = 1, . . . , n. For the second pass, m = 2, we sample the ﬁrst element
  (2)                                 (1)
z1 , using previously generated zi , i = 2, . . . , n values, leading to a new
        (2)                                              (2)
value zi , i = 1. For the second element we use z1 in conjunction with
  (1)
zi , i = 3, . . . , n. We follow a similar process for the third and subsequent
elements. At the end of the second pass through the sampler, we have an
                               (2)
updated vector of values zi , i = 1, . . . , n. This procedure is continued on
each of the m passes.
   This procedure represents a Gibbs sampling scheme that takes into ac-
count the dependence between observations using the basic idea of Gibbs
sampling. That is, the joint distribution for the vector z can be constructed
by sampling from the complete sequence of conditional distributions for each
element, zi |z−i .
   Having made a series of m passes through the n-observation vector z, we
generate y ∗ = μ + z (m) . The vector y ∗ can then be used to produce draws
from the conditional distributions for the remaining model parameters β, ρ as
described in the previous section.


10.1.4          Some observations regarding implementation
    For clarity we refer to estimation of the SAR probit model as an MCMC
sampling scheme that samples sequentially from the conditional posterior dis-
tributions for the model parameters β, ρ, y ∗ . Within this sequence, we rely on
an m-step Gibbs sampler to produce the vector of parameters y ∗ . The m-step
Gibbs sampler is the procedure set forth in the previous section.
    The typical implementation of the m-step Gibbs sampler sets the vector z
to zero values on the initial step and uses the m-steps to build up a sample
of values for the n-vector z. Taking this approach to sampling y ∗ is a com-
putationally intensive operation. To see this, consider an example where we
are working with a sample of 3,000 US counties, and wish to produce 5,000
draws by making passes through the MCMC sampler. Let the m-step Gibbs
sampler for y ∗ be based on m = 10, so on each of the 5,000 passes we need
to make 10 × 3, 000 = 30, 000 passes over the sample of counties to produce
a single vector z that can be used to construct a single draw for the vector
y ∗ . Of course, we must do this 5,000 times, so this amounts to a total of
5, 000 × 30, 000 = 150, 000, 000 evaluations of the inner-most m-step Gibbs
sampler.
    Using a value of m = 10 is fairly standard in applied code used in Bayesian
multinomial probit applications by Koop (2003). It might seem surprising
that only 10 passes are required to build up an adequate sample from the
truncated multivariate normal distribution. However, keep in mind that we
will make many passes through the MCMC sampler. On each MCMC pass



© 2009 by Taylor & Francis Group, LLC
288                                Introduction to Spatial Econometrics

we only need a sample of y ∗ values that are reasonably accurate, since our
procedure will involve thousands of samples drawn for the y ∗ values.
   Fortunately, it is often possible to rely on a single step, that is we can set
m = 1. When doing this, we rely on the values z from the previous trip
through the MCMC sampler rather than initializing the vector z to zero on
each pass. To see why this is possible, consider a case where the parameters β
and ρ exhibit a great deal of precision. This is typically the case in estimation
problems involving large spatial samples, say the 3,000 US counties. In this
situation, these parameters will not change greatly on each pass through the
MCMC sampler. If these parameter values are approximately equal on each
MCMC pass, then each pass is equivalent to taking another step m when
we rely on the vector z from the previous MCMC pass. Recall that for step
m = 2, we would rely on the same parameters β, ρ and the values in the vector
z from the m = 1 step.
   We note that the true criterion for whether this scheme of reusing the vector
of values in z and m = 1 will work well is the amount of precision in the model
parameters. This is unfortunately not known a priori. In applied practice, one
could produce estimates for increasing values of m to see if the same estimates
arise.
   Obviously, reducing m = 10 to m = 1 would decrease the time required
to produce MCMC estimates for the SAR probit model. Theoretically, even
if the parameters β and ρ change on each pass through the MCMC sampler,
sampling from the complete sequence of conditional distributions will still
lead to the joint posterior distribution for the parameters in which we are
interested. However, this theory is asymptotic, so with small samples it would
be important to check for sensitivity of the estimates to values of m used.
In exploratory work involving data generated experiments where the true
parameters are known, m = 1 seems to produce estimates that were similar
to those from using m = 10 or m = 20 for larger sample sizes (those where
n > 500). For smaller samples (those where n < 500), reliance on m = 1
produces estimates with larger standard deviations than m = 10 or m = 20,
and some bias in estimates for the parameters β. It seems intuitively plausible
that increasing the sample size should produce more precise estimates, so
smaller values of m could be used. We also note that carrying out the full
m−step procedure for smaller samples is not a problem.
   There may be a trade-oﬀ between increased speed and the need to carry out
more draws, an issue that needs to be studied further. There are a number
of hybrid approaches that could also be explored. For example, one could
begin using m = 10 during the burn-in period and then switch to m = 1 for
the remaining MCMC draws. The rationale for this would be to allow the
sampler to work harder during the initial exploratory phase to obtain high-
quality estimates for the parameters y ∗ . After this, we rely on passes through
the MCMC sampler to capture the dependence rather than the m-step Gibbs
sampler.
   When we set m = 1, it takes around 45 minutes to produce 1,000 draws



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models            289

for a sample of 3,100 US counties using a relatively slow laptop computer and
MATLAB. Using compiled code to carry out the innermost Gibbs sampling
task should provide a six times speed improvement, and there are other ways
to optimize the coding implementation. Some timing experiments indicate
that doubling the number of sample observations results in doubling the time
required to produce the same number of MCMC draws.
   There are some fortunate computational aspects to this procedure. One
positive aspect is that we can work with the precision matrix Ψ, so we avoid
the need to calculate the inverse: [(In − ρW ) (In − ρW )]−1 .
   Computing an inverse for S −1 = (In − ρW )−1 is problematical. Despite use
of a sparse matrix W , the inverse is a dense matrix containing all non-zero
elements. Computer memory requirements for storing elements of a dense
matrix when n is large place severe constraints on the size of the problem
that can be handled. LeSage and Pace (2004) point out that the memory
requirements for the inverse matrix S −1 increased 50 fold over those for the
matrix S = (In − ρW ) in their application involving the prices of sold and
unsold homes. See Chapter 4 for a discussion of these issues. Chapter 4
also discusses computing μ = (In − ρW )−1 Xβ by solving the equation (In −
ρW )μ = Xβ for μ, to avoid forming an explicit inverse.
   A ﬁnal positive aspect of the m−step Gibbs sampling scheme within the
MCMC sampler is that problems involving large n can be solved without resort
to a large amount of computer memory. This is because the larger problem is
broken into a series of n draws from univariate conditionals. This in conjunc-
tion with use of the precision matrix in place of the variance covariance matrix
(which avoids the need to compute the inverse of the variance-covariance ma-
trix), limits the memory required.


10.1.5          Applied illustrations of the spatial probit model
   As an initial illustration, two samples of n = 400 and n = 1, 000 continuous
values y ∗ were generated. These were used to determine yi values of zero if
yi∗ < 0 and one when yi∗ ≥ 0. The SAR model DGP used was:


                              y ∗ = (In − ρW )−1 Xβ + (In − ρW )−1 ε
                                ε ∼ N (0, In )

   The matrix X consisted of an intercept term and two standard random
                                                      
normal deviates, and the coeﬃcients β = 0 1 −1 . A value of ρ = 0.75
was used and a spatial weight matrix based on six nearest neighbors was con-
structed, using vectors of standard normal deviates as locational coordinates.
   Results are shown in Table 10.1 alongside those for the Albert and Chib
(1993) non-spatial probit model, and maximum likelihood estimates based
on the continuous y ∗ values that were used to produce the binary dependent
variable. Of course, in applied practice one would not know these values, but



© 2009 by Taylor & Francis Group, LLC
290                                Introduction to Spatial Econometrics

they serve as a benchmark for the accuracy of our m-step Gibbs sampling
procedure which simulates these values as model parameters. The correlation
coeﬃcient between these actual latent utilities and the posterior mean of the
simulated values was 0.92, for both the 400 and 1, 000 observation samples,
indicating accurate sampling.
   A value of m = 10 was used for the Gibbs steps within the MCMC sampling
procedure to produce estimation results for the n = 400 sample and m = 1
was used for the n = 1, 000 sample. The estimates reported in the table
represent posterior means based on 1,200 draws with the ﬁrst 200 omitted
to account for burn-in of the MCMC sampler. For the case of n = 400 and
m = 10 on each MCMC draw, the latent variable values zi were initialized to
zero on each MCMC draw, so the sample of latent z values were built up anew
using the m = 10 step Gibbs sampler. We contrast the results in Table 10.1
based on this procedure with results presented in Table 10.2, based on reusing
z values from previous MCMC draws and values for m = 1, 2 and 10. For the
n = 1, 000 sample with m = 1 presented in Table 10.1, we relied on reuse of
z values from previous draws.
   The posterior means for the SAR probit model are all within one standard
deviation of the coeﬃcients that resulted from maximum likelihood estimation
based on the actual y ∗ values. Using the non-spatial probit model produced
biased estimates that are more than three standard deviations away from the
true coeﬃcient values as well as the maximum likelihood estimates. For the
larger sample of n = 1, 000, we see SAR probit model posterior mean estimates
for the parameters β that are nearly indistinguishable from those based on the
actual y ∗ values. Interestingly, the standard deviations from the SAR probit
model are around twice those from maximum likelihood estimation. Working
with a binary rather than continuous dependent variable imposes some costs,
which include more uncertainty in the coeﬃcient estimates. This is apparent
in the larger standard deviations relative to those from a model based on the
actual utilities.
   As an illustration of the impact of changing the number of Gibbs steps,
a comparison of estimates from m = 1, m = 2 and m = 10 are shown in
Table 10.2 for a sample of n = 400 observations.
   The times required to produce 1,200 draws (with the estimates based on the
last 1,000 draws) are reported in the table. Convergence tests indicated that
the same posterior means and standard deviations were associated with 1,200
draws as with the last 1,000 draws from a sample of 5,000 draws, suggesting
no problems with convergence of the MCMC sampler. As indicated earlier,
doubling the sample size results in a doubling of the time required to produce
the sample number of MCMC draws.
   In contrast, the speed improvement from reducing m from 10 to 1 is not a
ten-fold decrease in time required as we might suppose, but rather a decrease
around 6.5 in time required. Caching and other loop optimizing features of
the MATLAB software used to produce the estimates are such that the time
cost of looping within the inner m-step Gibbs sampler is not linear in m.



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models                291
TABLE 10.1:                 SAR probit model estimates
                              SAR            SAR probit               Probit
    Estimates             Mean  Std dev    Mean      Std dev       Mean   Std dev
                            m = 10, n = 400
    α=0        −0.1196 0.0549   −0.1844 0.0686                   −0.5715 0.0763
    β1 = 1      1.0187 0.0493     0.9654 0.1179                   0.7531 0.0946
    β2 = −1    −1.0078 0.0495   −0.8816 0.1142                   −0.7133 0.0855
    ρ = 0.75    0.7189 0.0290     0.6653 0.0564
    Time(sec.)  0.2                1,276                           2.8
                           m = 1, n = 1, 000
    α=0         0.0436 0.0316     0.05924 0.0438                  0.0980 0.0466
    β1 = 1      0.9538 0.0318     0.96105 0.0729                  0.7409 0.0528
    β2 = −1    −1.0357 0.0315   −1.04398 0.0749                  −0.8003 0.0586
    ρ = 0.75    0.7019 0.0116     0.69476 0.0382
    Time(sec.)  0.4                586                             4.7




   As the results show, using only m = 1 leads to similar estimates and stan-
dard deviations as m = 2 and m = 10. Recall also that setting m = 1 involves
reuse of z-values from previous draws of the MCMC sampler versus initializing
z to zero values. This appears to have no impact on estimation outcomes. We
note that reuse of z-values from previous draws may create dependence in the
sample of draws for y ∗ , but typically these are not an object of inference. This
sampling dependence could carry over to other model parameters, but this is
a question to be addressed by a detailed study of alternative implementation
schemes for this procedure. In our data generated experiments where the true
model parameters are known, the simple scheme based on m = 1 produced
estimates very close to truth based on only a small sample of 1,200 draws
with the ﬁrst 200 draws excluded from the sample used to calculate posterior
means. This suggests dependence in the sequence of MCMC draws was not a
problem.


  TABLE 10.2:                    The impact of changing m on SAR probit model
  estimates
                                     m=1             m=2             m = 10
     Coeﬃcients                   Mean   Std      Mean   Std       Mean    Std
                                         dev             dev               dev
     constant= 0     0.0241 0.0649  0.0236 0.0585  0.0223 0.0551
     β1 = 1          1.0637 0.1394  1.0457 0.1172  1.0364 0.1176
     β2 = −1        −1.0081 0.1323 −0.9788 0.1087 −0.9844 0.1067
     ρ = 0.75        0.7454 0.0538  0.7374 0.0515  0.7468 0.0488
     time (seconds)   195            314            1,270




© 2009 by Taylor & Francis Group, LLC
292                                Introduction to Spatial Econometrics

   An applied example involved a county-level model of presidential voting
from the 2000 US presidential election where y = 1 for the 2,438 counties won
by George Bush and y = 0 for 669 counties won by Al Gore. Explanatory
variables used were a constant term, a binary vector of 0,1 values with 1 for
counties won by the Republican party presidential candidate in the 1996 elec-
tion and 0 for counties won by the democratic party candidate (Repub96 ), the
log of other party votes going to candidates other than Republican or Demo-
crat candidates (Oparty), the log of county population over age 25 having
college degrees (College), the log of median household income in the county
(Income), the log of the number of persons who lived in the same house ﬁve
years ago in 1995 (Shouse), the log of persons who were foreign born (Fborn),
the log of persons in poverty (Poverty), and the log of homes built within the
last year (1999) prior to the year 2000 Census (Nhomes).
   Conventional non-spatial probit estimates are reported in Table 10.3 along-
side the SAR probit model estimates. These were based on 1,200 MCMC
draws and m = 1. The time required to produce 1,200 draws for the sample
of n = 3, 107 was around 45 minutes. Another run with m = 5 and the z-
values initialized to zero on each pass through the MCMC sampler produced
nearly identical results.


       TABLE 10.3:                 SAR probit model estimates
                                   SAR probit model           Probit model
          Coeﬃcients              Mean    Std   p-level   Mean     Std    p-level
          Constant               8.1454    3.0757   0.004   13.7828   3.2507   0.000
          Repub96                2.0604    0.1305   0.000    2.4367   0.1240   0.000
          Oparty                 0.0864    0.0469   0.035    0.0751   0.0565   0.180
          College               −0.5730    0.1107   0.000   −0.6477   0.1186   0.000
          Income                −1.1003    0.3154   0.001   −1.7270   0.3334   0.000
          Shouse                 0.2433    0.2994   0.213   −0.7385   0.3027   0.014
          Fborn                 −2.0122    0.8532   0.008   −3.6200   0.9378   0.000
          Poverty               −0.8945    0.1304   0.000   −1.1215   0.1412   0.000
          Nhomes                 2.0381    0.5968   0.000    2.3017   0.6255   0.000
          ρ                      0.4978    0.0307   0.000




  The table reports posterior means and standard deviations for the SAR
probit model along with a Bayesian p-level that measures whether the coef-
ﬁcient is suﬃciently diﬀerent from zero. This statistic should be comparable
to the conventional p-level associated with the asymptotic t-statistic from the
non-spatial probit model reported in the table (Gelman et al., 1995).
  From the reported estimates we see non-spatial probit estimates that are
generally larger in absolute magnitude than those from the spatial model
and around two standard deviations away from the spatial estimates. This



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models             293

is consistent with signiﬁcant bias in the non-spatial estimates. There is one
interesting reversal in sign associated with the Shouse variable, which is neg-
ative and signiﬁcant in the non-spatial model, but positive and not diﬀerent
from zero in the spatial model. However, as in the case of continuous spatial
regression models, we cannot directly compare these coeﬃcient magnitudes.
As is well-known for conventional probit models we need to evaluate the non-
linear probit relationship by calculating marginal eﬀects estimates. This is
the subject to which we turn attention in the next section.


10.1.6          Marginal eﬀects for the spatial probit model
   In non-spatial probit models, the parameter magnitudes associated with
the estimated coeﬃcients β̂ do not have the same marginal eﬀects interpreta-
tion as in standard regression models. This arises due to non-linearity in the
normal probability distribution. The magnitude of impact on the expected
probability of the event y occurring varies with the level of say the rth ex-
planatory variable, xr . The nature of this non-linear relationship between
changes in the dependent variable (the expected probability of the event) and
changes in xr is determined by the standard normal density such that:

                                        ∂E[y|xr ]/∂xr = φ(xr βr )βr       (10.9)

where βr is a non-spatial probit model estimate, and the expression φ(·) is
the standard normal density. Because the magnitude of impact on changes
in expected probability varies with the level of xr , model estimates are often
interpreted using mean values of a regressor such as x̄r . The marginal eﬀects
are then interpreted as the change in the event probability associated with
a change in the average or typical sample observation for variable xr . In
addition to the non-linear nature of the mean response of expected probability
to changes in xr , there is also the need to consider a measure of dispersion
for this to provide a basis for statistical inference regarding the signiﬁcance
of these changes.
   In spatial regression models that involve spatial lags of the dependent vari-
able (such as our SAR probit model), a change in the ith observation of the ex-
planatory variable vector xir will impact the own region yi plus other-regions
yj , j = i in the sample. This of course suggests that changes in the level of a
single observation xir will have an impact on the expected probability of the
event being analyzed in both own- and other-regions.
   We have already established that E(∂y/∂xr ) = (In − ρW )−1 In βr for the
SAR model, which is an n × n matrix. The diagonal of this matrix cap-
tures what we have labeled the direct impact of a change in xir on the own-
observation yi , with the oﬀ-diagonal elements representing indirect or spatial
spillover impacts. This matrix replaces the non-spatial model coeﬃcient βr ,
so we can calculate the marginal eﬀects for our spatial SAR probit model by



© 2009 by Taylor & Francis Group, LLC
294                                Introduction to Spatial Econometrics

replacing βr in (10.9) with this matrix. This leads to the expression in (10.10),
where: S = (In − ρW ), and x̄r denotes the mean value of the rth variable.

                            ∂E[y|xr ]/∂xr = φ(S −1 In x̄r βr )  S −1 In βr       (10.10)
   In place of the expression φ(x̄r βr ) that scales the parameter estimate βr
in the non-spatial probit model, we have a matrix, φ(S −1 In x̄r βr ). And, in
place of the (scalar) coeﬃcient βr from the non-spatial probit model, we have
another matrix, S −1 In βr .
   We can adopt the same approach taken earlier to develop scalar summary
measures for the continuous dependent variable SAR model. The main di-
agonal elements of φ (In − ρW )−1 In x̄r βr  (In − ρW )−1 In βr represent the
direct impacts, which we average over. Similarly, the average of the row (or
column) sums can be used to produce a total impact scalar summary mea-
sure, and the indirect impacts are the diﬀerence between these two measures.
We interpret the average of the row-sums as the average total impact from
changing an observation, and the average of the column-sums as the average
total impact to an observation.
   As an example, consider the decision to install a home security system,
where the binary dependent variable indicates the absence (y = 0) or presence
(y = 1) of security systems in a sample of n homes. Suppose we are interested
in the marginal eﬀects of a variable xr recording the number of burglaries
that have occurred for each home in the sample. From the viewpoint of a
single homeowner i who is contemplating spending on an alarm system, the
conventional probit model would indicate that a burglary at a neighboring
home j would have no eﬀect on homeowner i’s decision to purchase a security
system. Only an increase in burglaries at home i represented by a change in
xir would impact the probability that homeowner i makes a security system
purchase. The conventional use of the average or mean burglary rate x̄r to
calculate marginal eﬀects has the implication that an increase in the mean
burglary rate x̄r across the sample of homes would increase the probability of
all homeowners in the sample purchasing security systems. For this reason,
the marginal eﬀects are usually analyzed in the conventional model by varying
the level of xr over the range of values taken by this variable to assess how the
level of burglaries at various homes in the sample would impact the decision
to purchase a security system. Doing this creates a type of spatial variation
in the eﬀects estimates since the level of xr values vary over space.2 However,
this does not imply any spatial interaction between observations, as this is
not possible in a non-spatial probit model.
   In contrast, the SAR probit model implies that a change in burglaries of
neighboring homes j would have an eﬀect on the probability that homeowner
i purchases a security system. The eﬀect would depend on spatial proximity

2 This evaluation is of course conditional on all explanatory variables and associated coeﬃ-

cient estimates) in the model, which are typically held ﬁxed at their respective means.




© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models           295

of homeowner i to j, captured by the spatial weight matrix W , as well as the
strength of spatial dependence measured by the parameter ρ. A burglary at
home j would have both a direct impact on the probability that homeowner j
purchases a security system, as well as an indirect or spatial spillover impact
on neighbors. The total eﬀect is the sum of these two impacts.
   Conventional practice in the non-spatial probit model calculates marginal
eﬀects using the point estimates (or posterior means in the case of Bayesian
analysis) and average variable values. One advantage of MCMC estimation
is that the sample draws arising from estimation can be used to produce
separate marginal eﬀects for every observation at each iteration (or using the
sample of draws from the MCMC procedure in a post-estimation procedure).
Averaging over these results recognizes the global nature of spatial spillovers
that cumulate across interrelated observations in the sample, and reﬂect the
joint posterior distribution of the model parameters.
   Average marginal eﬀects calculated in this fashion based on our scalar sum-
mary measures of the direct and indirect impacts would produce impact es-
timates that could be interpreted in the following way. The direct impact
would show how a rise in burglaries (burglaries on average across the sample
of homes) would aﬀect the decision of (the average) individual homeowner be-
ing burglarized to purchase a security system, where the impact is of course
measured in expected probability terms. The indirect eﬀect would repre-
sent the probabilistic impact of these increased burglaries on (the average)
neighboring homeowners’ purchase decisions. We could of course carry out
a partitioning of these impacts to determine the spatial extent of the eﬀects,
that is, the rate at which the impacts decay as we move to more distant neigh-
bors. We further note that if interest centered on a sub-sample representing
a particular neighborhood, these individual observations could be analyzed in
the same fashion.
   In terms of the from an observation and to an observation interpretation
for our scalar summary measures of the impacts, we might consider the follow-
ing interpretation. From a seller of security systems perspective, the model
estimates would be useful in determining to an observation impacts. These
measure how changes in the mean burglaries would inﬂuence the probability
of all homeowners in the sample purchasing systems (the total impact), which
would be useful for projecting sales of security systems. In terms of the from
an observation viewpoint, a security system salesperson could use the model
estimates to determine how likely individual homeowners who have been bur-
glarized (the direct impact) and their neighbors (the indirect impact) are to
purchase a system.
   In addition to calculating mean summary measures for the spatial marginal
eﬀects, there is also a need to calculate measures of dispersion for these es-
timates. This could be done using the MCMC draws in expression (10.10)
to construct a posterior distribution for the spatial marginal eﬀects summary
measures. A computationally eﬃcient approach to doing this remains a sub-
ject for future research.



© 2009 by Taylor & Francis Group, LLC
296                                Introduction to Spatial Econometrics

   Table 10.4 shows the marginal eﬀects estimates for both the non-spatial and
SAR probit model for our year 2000 presidential election example. The table
illustrates that the non-spatial model has only a single marginal eﬀect that
would be interpreted as a direct impact. This would equal the total impact
since there are no indirect (spatial spillover) impacts. In contrast, the SAR
probit model has an indirect or spatial spillover impact, which is added to the
direct impact to produce a summary measure of the total impact associated
with changes in each explanatory variable.
   From the table we see some similarity between the direct eﬀects estimates
from the spatial model and the marginal eﬀects estimates of the non-spatial
model. This result is consistent with previous comparisons of spatial and
non-spatial models for the case of a continuous dependent variable. However,
there are some striking diﬀerences which arise from diﬀerences in the estimated
parameter magnitudes β̂ representing the posterior means. For example, the
marginal eﬀects and direct eﬀects for the Shouse variable noted earlier are
widely divergent, as are those for the Fborn variable.


 TABLE 10.4:                   Probit and SAR probit marginal eﬀects estimates
                            probit model              SAR probit model
    Variables               β̂     marginal    β̂      direct    indirect    total
                                    eﬀects            impacts impacts impacts
    Repub96             2.4367           0.4520    2.0605    0.4729    0.7807    1.2536
    Oparty              0.0751           0.0289    0.0865    0.0340    0.0329    0.0668
    College            −0.6477          −0.0851   −0.5730   −0.0929   −0.2167   −0.3096
    Income             −1.7270          −0.0000   −1.1003   −0.0000   −0.2985   −0.2985
    Shouse             −0.7386          −0.2669    0.2433    0.0997    0.0925    0.1921
    Fborn              −3.6201          −1.4341   −2.0122   −0.8319   −0.7647   −1.5966
    Poverty            −1.1216          −0.0136   −0.8945   −0.0337   −0.3358   −0.3695
    Nhomes              2.3018           0.8862    2.0382    0.8196    0.7744    1.5940




   The indirect eﬀects are larger than the direct eﬀects for 4 of the 8 explana-
tory variables, and nearly equal to the direct eﬀects in the other 4 cases. Keep
in mind that the indirect eﬀects are cumulated over all neighboring observa-
tions, so the impact on individual neighboring counties is likely smaller than
the direct eﬀects. This example illustrates a substantial role played by spa-
tial spillovers, so that changes in the level of an explanatory variable such as
College graduates will exert an indirect or spillover impact (cumulated over
all other counties) on the probability of voting for George Bush that is twice
the size of the direct own-county eﬀect. Because the explanatory variables
have all been transformed using logs, these eﬀects estimates have an elasticity
interpretation.
   The largest total eﬀects are associated with the Nhomes and Fborn vari-



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models            297

ables, having elasticities around 1.6 and −1.6 respectively. The binary variable
Repub96 representing a win by the 1996 Republican party presidential can-
didate is also large, but does not have the same elasticity interpretation as
other explanatory variables. Votes for candidates such as Nader or Buchanan
(Oparty) had positive direct and indirect impacts around 0.033 leading to a
total eﬀect around 0.066. This suggests that a 10 percent increase in these
votes increased the probability of Bush winning the county by around 2/3
of one percent. We note that the coeﬃcient estimate for this variable is not
signiﬁcantly diﬀerent from zero in the conventional probit model, but has a
Bayesian p-level of 0.035, suggesting a non-zero impact. To further explore
the importance of other party candidates on the probability of Bush winning
a county, one would need to calculate a measure of dispersion for the mean
eﬀects estimates reported in the table.




10.2         The ordered spatial probit model
   One extension to the spatial probit model is an ordered probit model. This
type of model describes a situation where we can observe more than two
choice outcomes, but the alternatives must take a particular form. They
must be ordered, which may arise in certain modeling situations where the
alternatives exhibit a natural or logical ordering. For example, if we had
survey information where participants are asked to choose from alternatives
such as: Strongly Agree, Agree, Uncertain, Disagree, Strongly Disagree, then
the choice set exhibits a natural ordering.
   The ordered spatial probit model would generalize the basic model from
Section 10.1, but still rely on the relationship between y ∗ and y. If the ob-
served choice outcomes yi can take ordered values {j = 1, . . . , J}, where J is
the number of ordered alternatives, then we posit the relationship in (10.11),

                                        yi = j,   if   φj−1 < yi∗ ≤ φj   (10.11)

where φ0 ≤ φ1 ≤ . . . ≤ φJ are parameters to be estimated. The probit
model we already examined is a special case of this model where J = 2 and
φ0 = −∞, φ1 = 0, and φ2 = +∞. This turns out to be an identiﬁcation
restriction that is typically placed on the ordered probit model, where the
restriction for a J alternative model takes the form: φ0 = −∞, φ1 = 0, and
φJ = +∞. The other φj , j = 2, . . . , J − 1 are parameters to be estimated.
  The parameters φj , j = 2, . . . , J − 1 can be added to a Bayesian MCMC
estimation scheme by sampling from their conditional posterior distributions.
In the non-spatial model, Koop (2003) shows that the form of the conditional
posterior can be deduced for the case of a ﬂat or uniform prior by arguing:



© 2009 by Taylor & Francis Group, LLC
298                                Introduction to Spatial Econometrics

    1. Conditional on knowing the other parameters which we denote φ−j , we
       know that φj must lie in the interval [φj−1 , φj+1 ].

    2. Conditional on both y ∗ , y we know which values of the latent data y ∗
       correspond to the observed choices y, the insight of Albert and Chib
       (1993).

    3. The conditional posterior distribution for the parameters φ is based on
       no other information from the model.

   Items 1) to 3) above imply a uniform conditional posterior distribution for
φj , j = 2, . . . , J − 1 taking the form:

              p(φj |φ−j , y ∗ , y, β) ∼ U (φ̄j−1 , φ̄j+1 ), j = 2, . . . , J − 1   (10.12)
   The bounding or cut-point values φ are determined by examining the max-
imum (and minimum) values of the latent data yi∗ over all individuals i who
have chosen alternative j, that is where yi = j. Since individuals’ choices
are independent from those of other individuals in the non-spatial model, this
leads to:


                             φ̄j−1 = max{max{yi∗ : yi = j}, φj−1 }
                             φ̄j+1 = min{min{yi∗ : yi = j + 1}, φj+1 }

   For the case of our ordered spatial probit model we do not have indepen-
dence between choices of individuals, so we need to consider if this same
approach can be applied. In Section 10.6 we discuss a space-time dynamic
ordered probit model introduced by Wang and Kockelman (2008a,b) that al-
lows for spatially structured random eﬀects. In their model where individual
choices are dependent across both time and space, the cut-points exhibit de-
pendence invalidating the non-spatial approach.
   In our cross-sectional model, we can sample from the conditional distribu-
tion for each yi∗ , making these unconditional on other yj∗ . This allows us to
use an argument that there is conditional independence in the sampled yi∗ ,
and apply the same approach to sampling the cut-points φ̄j−1 and φ̄j+1 . This
involves making a claim that for all i:


        max{max{yi∗ |z (m) : yi = j}, φj−1 } = max{max{yi∗ : yi = j}, φj−1 }
          min{min{yi∗ |z (m) : yi = j}, φj+1 } = min{min{yi∗ : yi = j}, φj+1 }

where the equality arises from using the Gibbs sampler to produce a distribu-
tion for the vector y ∗ using zi |z−i that takes spatial dependence into account.
If this argument is plausible, then we can resort to an m-step Gibbs sampler:



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models                  299



                                        zi |z−i = γ−i z−i + hi vi              (10.13)
                                             hi = (Ψi,i )−1/2

where we sample vi ∼ N (0, 1) and use the truncation constraints:


                   (b1 − γ−i z−i )/hi < vi ≤ (b1 − γ−i z−i )/hi , for yi = 1
                   (b2 − γ−i z−i )/hi < vi ≤ (b2 − γ−i z−i )/hi , for yi = 2
                                         ..
                                          .
                   (bJ − γ−i z−i )/hi < vi ≤ (bJ − γ−i z−i )/hi , for yi = J

Where:


                                b1 = −∞ and b1 = 0          for yi = 1
                                b2 = 0 and b2 = φ2          for yi = 2
                                         ..                                    (10.14)
                                          .
                                bJ = φJ−1 and bJ = +∞ for yi = J

   Given these assumptions, this model and associated MCMC procedure rep-
resents a relatively simple extension of the spatial probit model. After mak-
ing a series of m passes through the n-observation vector z, we generate
y ∗ = μ + z (m) . The vector y ∗ can then be used to produce draws from the
conditional distributions for the remaining model parameters β, ρ, φ as in the
binary spatial probit model.




10.3         Spatial Tobit models
   These models deal with situations where a subset of the observations are
believed to represent censored values, which result in a truncated distribution
for the dependent variable observations. We might argue that censoring of
some sample observations arose because the utility is negative for an action
measured by our dependent variable observations y. For example, if y mea-
sures the number of persons in a sample of census tracts who commute to
work by walking, there may be a number of zero observations. These could
be argued to represent census tracts where the utility associated with walking
as a mode of travel to work is negative.
   This same line of argument was used to motivate the truncated multivariate
normal conditional posterior distributions for the latent unobserved utilities



© 2009 by Taylor & Francis Group, LLC
300                                Introduction to Spatial Econometrics

in the case of spatial probit. Indeed the same approach as taken by Albert
and Chib (1993) works here, as was pointed out by Chib (1992) for the case
of non-spatial Tobit models. In terms of motivation for spatial dependence in
censored observations, it seems likely that census tracts located nearby in large
cities would have similar numbers of persons who walk to work. It should also
be clear that large rural census tracts, or those in outlying suburbs are not
likely to see commuters walking to work as the utility is probably negative.
Another example used earlier is the case of regional trade ﬂows, where we
might expect to see zero ﬂows between regions where the trade costs exceed a
threshold level. Since trade costs are thought to be related to distance, zero
trade ﬂows between origin and destination regions might imply zero ﬂows
for neighbors to the origin to the same destination, and vice versa. Similar
situations arise in observed and unobserved home selling prices. There may be
a number of homes that do not sell because the utility associated with owning
a house in a central city location plagued by crime and negative externalities
from neighboring homes that are abandoned or in poor condition might be
below a threshold level required to undertake the transaction costs.

  The latent regression model motivation for this model when censoring oc-
curs at zero takes the form in (10.15), where y2 denotes a vector of non-
censored observations.




                                        y ∗ = S −1 Xβ + S −1 ε            (10.15)
                                        y ∗ = y1∗  if y ∗ ≤ 0
                                        y ∗ = y2 otherwise
                                         S = In − ρW




   For the case of Tobit, where we have a block of n1 censored observations and
another set of n2 observed values, we need only produce latent y1∗ for the n1
censored observations. We construct the mean and variance-covariance matrix
for the block of n1 censored observations conditional on the n2 uncensored
observations y2 . We assume the locations of all observations are known, so the
n × n weight matrix W can be formed. The conditional posterior distribution
for the n1 censored observations can be expressed as a multivariate truncated
normal distribution y1∗ ∼ T M V N (μ∗1 , Ω∗1,1 ), where the mean and variance-
covariance are set forth in (10.16) and (10.17).



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models                  301



                                    μ∗1 = E(y1∗ |y2 , X, W, β, ρ, σε2 )
                                        = μ1 − (Ψ1,1 )−1 Ψ1,2 (y2 − μ2 )       (10.16)
                                 Ω∗1,1 = var-cov(y1∗ |y2 , X, W, β, ρ, σε2 )
                                       = Ω1,1 + (Ψ1,1 )−1 Ψ1,2 Ω2,1            (10.17)
                                    Ω = σε2 [(In − ρW ) (In − ρW )]−1
                                          −1
                                        Ψ=Ω
                                    μ1 = (In − ρW )−1
                                                   1,1 X1 β

                                    μ2 = (In − ρW )−1
                                                   2,2 X2 β

   We use the subscripts 1, 2 to denote an n1 ×n2 matrix, and matrices such as
Ω1,1 would contain n1 rows and columns, whereas Ω2,2 would be of dimension
n2 × n2 . The term (In − ρW )−1  1,1 refers to the n1 × n1 block of the matrix
inverse (In − ρW )−1 , and a similar deﬁnition applies to the n2 × n2 block used
in μ2 . Note that we have a scalar noise variance parameter σε2 in the model,
which appears in the expressions for Ω and Ψ.
   Fortunately, calculating Ω = Ψ−1 is not necessary. This would be required
on each pass through the MCMC sampler because the parameters ρ and σε2
change, making estimation of this model computationally challenging. The
Geweke m-step Gibbs sampler used to produce draws from the multivariate
truncated normal distribution works with the precison matrix Ψ = Ω−1 . We
can calculate the matrices W + W  and W  W prior to beginning the MCMC
sampling loop and produce Ψ = (1/σε2 )[In − ρ(W + W  ) + ρ2 W  W ] using the
current values of ρ and σε2 obtained during sampling. The terms needed to
form the n1 -dimensional mean and variance-covariance for the the block of n1
TMVN censored observations are:


                          μ∗1 = μ1 − (Ψ1,1 )−1 Ψ1,2 (y2 − μ2 )
                        Ψ∗11 = (In1 − ρ(W + W  )1,1 + ρ2 (W  W )1,1 )/σε2

where (W + W  )1,1 and (W  W )1,1 refer to the block of n1 × n1 observations
taken from the matrices (W + W  ) and (W  W ).
  Given the n1 ×1 vector μ∗1 of means and associated precision matrix Ψ∗11 , we
use the Geweke m-step Gibbs sampling procedure to carry out a sequence of
m draws for each censored observation i = 1, . . . , n1 conditional on all other
censored observations which we label −i. Of course, we follow the scheme
detailed in our discussion of the spatial probit model, where previously sam-
pled censored observation values are used when sampling the ith observation
during each pass through the Gibbs sampler. This can be used to build up
the joint conditional multivariate posterior distribution for the n1 × 1 latent
vector y1∗ which is used to replace the censored observations. Speciﬁcally, we



© 2009 by Taylor & Francis Group, LLC
302                                Introduction to Spatial Econometrics

generate y1∗ = μ∗1 + z (m) , where m denotes the number of passes made and the
vector z is for censored observations. These are sampled from the complete
sequence of univariate (conditional) distributions, zi |z−i .
   This procedure represents a Gibbs sampling scheme that takes into account
dependence between observed and unobserved observations when calculating
μ∗1 and Ω∗1,1 , and then uses the m-step Gibbs sampler to build up the joint dis-
tribution for the n1 ×1 vector z of censored observations. This latter procedure
takes into account spatial dependence between the censored observations.
   These latent parameters are then used to produce a full-sample of observa-
                    
tions y ∗ = y1∗ y2 , some of which are observed values and others represent
sampled unobserved latent variables. The full-sample vector y ∗ is then used
when sampling from the conditional posterior distributions for the remaining
model parameters β, ρ, σε2 .
   For the standard non-spatial tobit model with censoring at zero and nor-
mally distributed disturbances the marginal eﬀects for the censored regression
model take the form, Greene (2000).

                                        ∂E[yi |xr ]/∂xr = βΦ (xr β/σ)    (10.18)
where Φ(·) represents the normal CDF function and the subscript r references
a variable. Intuitively, this expression indicates that the maximum likelihood
Tobit coeﬃcient estimates are adjusted versions of least-squares estimates,
where the adjustment involves the proportion of the sample that is censored.
   We have already explored expressions like ∂E[y|xr ]/∂xr for our SAR model
in the context of interpreting the parameter estimates, as well as calculating
SAR probit marginal eﬀects. A similar approach can be used here where the
missing or censored observations are replaced with the posterior mean of the
draws for the latent values y1∗ .

10.3.1          An example of the spatial Tobit model
   A data-generated experiment from Koop (2003), which allows us to control
the degree of sample censoring was adapted to generate a sample of 1,000 ob-
servations. We draw independent observations xi from a uniform distribution,
U (a, 1) and a disturbance term εi ∼ N (0, 0.5). These are used to construct:

                              y ∗ = (In − ρW )−1 Xβ + (In − ρW )−1 ε      (10.19)
   A value of ρ = 0.7 was used in conjunction with a spatial weight matrix
W generated using random locational coordinates and six nearest neighbors.
The degree of censoring that occurs can be controlled using diﬀerent settings
for the parameter a. Negative generated values from the vector y ∗ are set to
zero to reﬂect sample truncation at zero. We report results for an experiment
where 51.3 percent of the 1,000 observation sample was censored.
   These are shown in Table 10.5 where we also report Bayesian MCMC SAR
model estimates based on the true non-censored values. Ideally, we would like



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models                   303

to produce estimates close to those based on the uncensored sample containing
the true underlying utilities, which are of course unknown in applied settings.
The value of m = 1 was used in the Gibbs sampler for the censored obser-
vations when constructing the parameters zi |z−i , and values of the vector z
from previous passes through the MCMC sampler were used. The results are
based on 1,000 retained draws from a sample of 1,200.


              TABLE 10.5:                SAR and SAR Tobit estimates
                                              SAR model y1     SAR Tobit model
                 Variables                   mean β̂ std dev. mean β̂ std dev.
                 Constant          (α = 0)     0.0123   0.0222   0.0280   0.0234
                 Slope             (β = 2)     1.9708   0.0419   1.9521   0.0619
                 Wy                (ρ = 0.7)   0.7089   0.0157   0.7030   0.0181
                 σε2               (= 0.5)     0.4972            0.5072
                 R2                            0.7334




  From the table, we see estimates close to the true parameter values and
those based on the uncensored sample data. Of course, the standard de-
viations for the Tobit estimates will be larger than those based on the full
sample of data. This reﬂects additional parameter uncertainty arising from
the censoring process.
  Experiments indicated that the model worked well in situations where cen-
soring involved up to seventy percent of the sample data. Of course, success
requires a model that is good enough to produce accurate imputations of
the censored observations. The signal-to-noise ratio used in our experiments
resulted in R2 estimates between 0.7 and 0.8, representing a level of ﬁt consis-
tent with applied practice. An important consideration when contemplating
use of the spatial Tobit model is whether the underlying sample data can be
plausibly assumed to represent a censored (multivariate) normal distribution.
In some cases where we observe excessive censoring, this is an indication that
a zero-inﬂated Poisson process may be more consistent with the underlying
data generating process (Agarwal, Gelfand and Citron-Pousty, 2002; Rathbun
and Fei, 2006).
  The SAR Tobit model may be useful in modeling origin-destination (OD)
ﬂows. One of the problems encountered with OD ﬂows is that a number
of elements in the ﬂow matrix are often zero. As noted in our Chapter 8
discussion of these models, we can view the zero ﬂows as indicative of negative
utility associated with say commodity or migration ﬂows between particular
origin-destination pairs. Since positive utility is required to produce ﬂows, we
have an observed sample truncation situation.
  As an example a sample of 60 origin-destination commuting ﬂows from dis-



© 2009 by Taylor & Francis Group, LLC
304                                Introduction to Spatial Econometrics

tricts in Toulouse, France were used. Of the 3,600 OD ﬂows 15 percent repre-
sented zero values. A series of explanatory variables representing destination-
speciﬁc, origin-speciﬁc and intra-regional variables were used to formulate a
model (see Section 8.3). These are labeled in Table 10.6 with preﬁxes D , O
and I respectively. Explanatory variables consisted of employment and hous-
ing characteristics for each of the 60 districts. Employment characteristics
were: the number of workers employed and unemployed, independent (non-
salaried) workers, and the number of employers in each district. Housing
characteristics consisted of owner-occupied versus tenants in private and pub-
lic rental units, and holiday housing. Both the dependent variable number of
commuting ﬂows as well as the explanatory variables were transformed using
logs.

  Posterior means and standard deviations based on a SAR model that ig-
nores the 15 percent sample censoring are presented alongside the SAR Tobit
estimates. A value of m = 1 was used for the Gibbs sampler and a series of
1,200 draws were produced with the ﬁrst 200 excluded for burn-in. Of course,
in applied practice one might rely on a small number of draws such as this
during exploratory analysis. However, when reporting ﬁnal results for publi-
cation, a larger sample of MCMC draws as well as a larger number of excluded
burn-in draws should be used. In addition, diagnostics for convergence of the
MCMC sampler should be examined.

   There is a clear pattern of Tobit estimates being larger (in absolute value
terms) than the non-Tobit estimates, which suggests systematic downward
bias in estimates that ignore sample censoring. Given the double-log trans-
formation, we can compare the relative magnitudes of the coeﬃcients, which
suggests the most important inﬂuence was distance. For the other explana-
tory variables, the number of employed workers within a district (I employed
workers) exhibited the largest coeﬃcient. The number of employed workers
at the origin exhibited a negative inﬂuence on interregional commuting ﬂows
whereas those at the destination had a positive inﬂuence. It may seem some-
what surprising that the number of unemployed workers at both the origin
and destination exhibit a positive inﬂuence on interregional commuting ﬂows.
However, the sum of (logged) employed and unemployed workers reﬂects the
labor force at the origin and destination regions, so this may be a size eﬀect.
The sum of the two coeﬃcients for both origin and destination employed and
unemployed workers is positive, as is the intraregional coeﬃcient on employed
workers. Of course, to fully analyze the posterior means we would need to
carry out the direct, indirect and total eﬀects scalar summary calculations to
determine the magnitude of spatial spillovers. This can be accomplished using
the same summary measures discussed for the non-censored SAR model, where
we use our matrix expressions to replace the partial derivative ∂E[yi |xr ]/∂xr
in (10.18).



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models                   305




     TABLE 10.6:                    OD SAR and OD SAR Tobit estimates
                                               SAR model       SAR Tobit model
        Variables                             β̂    std dev.     β̂     std dev.
        Constant                  −5.2154 0.4044                −6.1607   0.4705
        D employed workers         0.6928 0.0812                 0.7635   0.0977
        D unemployed workers       0.9521 0.2206                 1.1150   0.2623
        D independent workers      0.0586 0.0516                 0.0946   0.0579
        D employers               −0.0675 0.0373                −0.0817   0.0430
        D holiday housing units   −0.0192 0.0172                −0.0275   0.0204
        D owner occupier           0.0121 0.0236                 0.0261   0.0288
        D tenant private housing −0.0484 0.0384                 −0.0438   0.0474
        D tenant social housing   −0.0416 0.0160                −0.0311   0.0189
        D area                     0.1451 0.0382                 0.1368   0.0484
        O employed workers        −0.3210 0.0824                −0.3790   0.0948
        O unemployed workers       1.2306 0.2335                 1.5633   0.2556
        O independent workers     −0.2392 0.0528                −0.2162   0.0576
        O employers               −0.0786 0.0362                −0.1053   0.0407
        O holiday housing units    0.1325 0.0182                 0.1469   0.0180
        O owner occupier          −0.0772 0.0238                −0.0854   0.0259
        O tenant private housing   0.6049 0.0415                 0.6873   0.0423
        O tenant social housing   −0.0665 0.0162                −0.0859   0.0194
        O area                     0.8222 0.0418                 0.9543   0.0448
        I employed workers         1.4038 0.3215                 1.6420   0.3758
        I unemployed workers       0.6099 1.7787                 1.0200   2.0277
        I independent workers     −0.0833 0.3789                −0.1261   0.4082
        I employers                0.0250 0.2903                 0.0149   0.3313
        I holiday housing units   −0.0470 0.1262                −0.0680   0.1467
        I owner occupier          −0.1996 0.1659                −0.2281   0.1893
        I tenant private housing  −0.1393 0.2839                −0.1584   0.3109
        I tenant social housing   −0.0907 0.1020                −0.1386   0.1121
        I area                     0.1625 0.3006                 0.1900   0.3308
        Distance                 −39.5906 6.6526               −47.8385   8.0114
        ρ                          0.7646 0.0215                 0.7328   0.0215
        σε2                        0.7007                        0.9125




© 2009 by Taylor & Francis Group, LLC
306                                Introduction to Spatial Econometrics



10.4         The multinomial spatial probit model
   This model is a modiﬁcation of the basic spatial probit model where yi
can take values {j = 0, 1, . . . , J}, representing J + 1 alternative choices. The
same random utility framework can be used, where we consider utility of
observation/region i for choice j, (Uji ) relative to some other base choice
alternative, (U0i ). If we use choice alternative 0 as the base, then our latent
utility diﬀerences take the form:
                                         ∗
                                        yji = Uji − U0i , j = 1, . . . , J                (10.20)
  We can treat this as a system of J seemingly unrelated (SURE) SAR re-
gression equations (Wang and Kockelman, 2007). This involves stacking J
observations for each set of observed choices as shown in (10.21), where Xji
represent 1 × k vectors of explanatory variables associated with each choice.
For simplicity we assume k is the same for all choices.

                                   ⎛   ⎞                    ⎛   ⎞
                                   y1i                      ỹ1
                                 ⎜ y2i ⎟                  ⎜ ỹ2 ⎟
                                 ⎜     ⎟                  ⎜ ⎟
                           ỹi = ⎜ . ⎟ ,             ỹ = ⎜ . ⎟                           (10.21)
                                 ⎝ .. ⎠                   ⎝ .. ⎠
                                        yJi                  ỹn
                                   ⎛                        ⎞                ⎛⎞
                                 X1i 0k . . . 0k                           X1
                               ⎜                .. ⎟                     ⎜ X2 ⎟
                               ⎜ 0k X2i          . ⎟                     ⎜    ⎟
                               ⎜
                          Xi = ⎜ .                  ⎟,              X̃ = ⎜ . ⎟
                                          .         ⎟                    ⎝ .. ⎠
                               ⎝ ..         .. 0 ⎠
                                                  k
                                 0k . . . 0k XJi                                 Xn

  Values of yj,i are such that: yj,i = δ(max(ỹi∗ )) or 0 if max(ỹi∗ ) < 0.3 Given
the arrangement of the dependent variable vector, we must re-arrange the
conventional n × n spatial weight matrix to produce spatial lags of the de-
pendent variable ỹ. This can be done by repeating each row from the n × n
conventional weight matrix J times, which can be expressed as W ⊗ IJ .
  As an example, for the case of three choices where J = 2 we would have:

                                               ⎞  ⎛
                                           W̃1
                                         ⎜     ⎟
                           W̃ = W ⊗ I2 = ⎝ ... ⎠
                                                      W̃n
                                                                                     
                                        Wi,1 0 Wi,2 0 . . . Wi,n 0
                          W̃i =                                                           (10.22)
                                         0 Wi,1 0 Wi,2 . . . 0 Wi,n

3 We note that the indicator function δ(max(ỹ ∗ )) returns {0, 1, . . . , J}.
                                              i




© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models                 307

   The matrix product W̃ ỹ results in a spatial lag representing an average
of neighboring region observations for each choice. For example, the spatial
lag for choice 1, observation/region 1 will consist of a weighted average of
neighboring regions choice 1, and for choice 2 we also have an average of
neighboring regions choice 2. We note the spatial lag formed in this fashion
does not allow for choice 1 in region 1 to depend directly on observed choice 2
outcomes from neighboring regions. That is, the model for utility associated
with the vector of say choices 2, made in all regions 1 to n are speciﬁed to
depend only on choices 2 made in neighboring regions.
   We accommodate cross-choice covariance in the conventional multinomial
probit fashion by allowing for cross-equation/choice covariance in the distur-
bances of the J-equation system, where we estimate a single J × J variance-
covariance matrix using all observations. This leads to a SURE SAR model
shown in (10.23), where we have assumed for simplicity that the same scalar
dependence parameter ρ applies to all J choices.


                                        ỹ = ρW̃ ỹ + X̃β + ε̃                (10.23)
                                                   ⎛                      ⎞
                                                     σ1,1 σ1,2 . . . σ1,J
                                                   ⎜ σ2,1 σ2,2            ⎟
                                                   ⎜                      ⎟
                             var-cov(ε̃i ) = Σ = ⎜ .           ..         ⎟   (10.24)
                                                   ⎝ ..            .      ⎠
                                                     σJ,1          σJ,J

  In (10.23), we allow for diﬀerent β1 , . . . , βJ associated with each of the J
equations being modeled.


10.4.1          The MCMC sampler for the SAR MNP model
  In the univariate SAR probit model, we implemented an MCMC sampling
scheme with data augmentation, where y ∗ were treated as parameters to be
estimated. The sampler drew sequentially from the conditional posteriors:

         p(β|ρ, y ∗ ),

         p(ρ|β, y ∗ ),

         p(y ∗ |β, ρ, y)

to produce estimates for inference. For this multinomial setup we require
conditional posteriors taking the form:

         p(β|ρ, Σ, ỹ ∗ ),

         p(ρ|β, Σ, ỹ ∗ ),

         p(Σ|β, ρ, ỹ ∗ ),



© 2009 by Taylor & Francis Group, LLC
308                                Introduction to Spatial Econometrics

         p(ỹ ∗ |β, ρ, Σ, y)

   The nature of these conditional posteriors as well as methods for sampling
from each are discussed in the following sections.

10.4.2          Sampling for β and ρ
  Samples from the conditional posterior distributions p(β|ρ, Σ, ỹ ∗ , X̃) take
the same form as would be used for a seemingly unrelated (SURE) SAR
model, containing J equations with a common spatial autoregressive struc-
ture involving the same parameter ρ, and spatial weight matrix W̃ . This can
easily be seen by considering ỹ ∗ as a set of continuous dependent variables,
and noting that we are conditioning on these latent values treated as param-
eters of the model. If an independent Normal-Wishart prior is used for the
parameters β and Σ (and a uniform prior for ρ), the conditional posterior for
the parameters β take the form of a normal distribution (Koop, 2003).
  If we rely on a non-informative prior for the parameters
                                                          β, the conditional
posterior for the parameters β = β1 β2 , . . . , βJ take the form in (10.25).


                                p(β|ρ, Σ, ỹ ∗ ) ∼ N (c∗ , T ∗ )
                                            c∗ = T ∗ (X̃  (InJ − ρW̃ )ỹ ∗ )
                                            T ∗ = (X̃  (In ⊗ Σ−1 )X̃)−1        (10.25)

   For the parameter ρ, we can sample p(ρ|β, y ∗ ), using either the M-H or
integration and draw by inversion approach set forth in Chapter 5. This
requires evaluating the expression in (10.26)


        p(ρ|β, Σ, ỹ ∗ ) ∝ |In − ρW |J |Σ|−n/2                                  (10.26)
                                                                              
                                  1
                         · exp − [H ỹ ∗ − X̃β] H  (In ⊗ Σ−1 )H[H ỹ ∗ − X̃β]
                                  2
                        H = InJ − ρW̃

10.4.3          Sampling for Σ
   When sampling the conditional distribution for the covariance matrix Σ,
the conventional MNP model has an additional identiﬁcation problem. As
noted in the case of the univariate probit model, a scale shift will not change
the observed choices. Typically, the MNP model is identiﬁed by setting the
ﬁrst diagonal element of the covariance matrix (σ11 ) to unity.
   From a strictly Bayesian viewpoint we can work with what has been la-
beled a non-identiﬁed model by McCulloch, Polson and Rossi (2000). This
model speciﬁes a prior for the full set of parameters (β, Σ, ρ), computes the
full posterior over β, Σ, ρ and reports the marginal posterior distribution of



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models             309
                              √        √            √
the identiﬁed parameters (β/ σ11 , Σ/ σ11 , ρ/ σ11 ). A drawback to this
approach is that we cannot rely on improper priors for β, Σ, ρ (McCulloch,
Polson and Rossi, 2000).
   McCulloch, Polson and Rossi (2000) present an alternative approach that
produces an identiﬁed model. A detailed discussion of this approach is set
forth in Koop (2003), which we follow here. A prior is placed on Σ such that
the ﬁrst diagonal element takes a value of unity. To use this approach, Σ
must be re-parameterized. This is accomplished by working with the joint
distribution of gi = ε1i and G−i = (ε2i , . . . , εJi ), where the (J × 1) vector
             
εi = gi G−i . This leads to a partitioning of Σ as shown in (10.27).
                                               
                                     σ11 η 
                              Σ=                                          (10.27)
                                      η ΣG
   They exploit the fact that any joint distribution can be expressed as the
product of a marginal and conditional distribution, in this case: p(gi , G−i ) =
p(gi )p(G−i |gi ). This is of course similar to the approach taken by Geweke
(1991) for sampling from the multivariate truncated normal distribution by
exploiting a sequence of univariate distributions based on conditionals. The
(multivariate) normal distribution for the vector εi , leads to a univariate nor-
mal distribution for gi ∼ N (0, σ11 ), and a (J − 1)-variate normal distribution
for G−i |gi ∼ N (ηgi /σ11 , Φ). The (J − 1 × J − 1) matrix Φ = ΣG − ηη  /σ11 .
   This allows imposing the restriction σ11 = 1, while assigning priors for
the remaining unrestricted parameters of the covariance matrix, η and ΣG . A
combination of a normal prior for the (1×J −1) vector η and Wishart prior for
the (J − 1 × J − 1) covariance matrix Φ−1 is convenient, since these priors lead
to conditional posterior distributions taking known forms that are amenable
to Gibbs sampling. These conditional distributions take the form of a normal
and Wishart distribution (see Koop (2003) for the detailed expressions).
   Nobile (2000) discusses how to generate directly from Wishart and inverted
Wishart random matrices conditional on one of the diagonal elements. This
provides an alternative way of imposing the normalization constraint in a
Bayesian MNP model, where we simply need to assign a Wishart prior to the
(J × J) covariance matrix Σ. Use of the normal priors for the parameters β
and a Wishart prior for the covariance matrix Σ then leads to a (multivariate)
normal distribution for β conditional on the other model parameters, and a
Wishart prior for Σ conditional on the other parameters. Draws from the
Wishart prior subject to the restriction σ11 = 1 can be obtained directly,
allowing us to impose identiﬁcation.
   The conventional algorithm based on the Bartlett decomposition for pro-
ducing draws for E(Σ) = νV −1 from the Wishart dimension J distribution
WJ (ν, V ) takes the form:

    1. Let V −1 = LL .

    2. where L = ij , i > j, a lower triangular matrix.



© 2009 by Taylor & Francis Group, LLC
310                                Introduction to Spatial Econometrics

    3. Construct a lower triangular matrix A with aii equal to the square root
       of χ2 (ν + 1 − i) deviates, i = 1, . . . , J.

    4. Set aij equal to N (0, 1) deviates, for i > j.

    5. Return Σ = LAA L .

   Nobile (2000) proposes modifying this algorithm to allow setting σ11 = 1.

    1. Construct a lower triangular matrix A with a11 = 1/11 .

    2. Set aii equal to the square root of χ2 (ν + 1 − i) deviates, i = 2, . . . , J.

    3. Set aij equal to N (0, 1) deviates, for i > j.

    4. Return Σ = LAA L .

  Either approach for sampling Σ should work, but we found the approach of
Nobile (2000) to have better MCMC sampling properties.


10.4.4          Sampling for ỹ ∗
     The ﬁnal conditional distribution from which we need to sample is that for
ỹ ∗ . We accomplish this using a modiﬁcation of the Geweke (1991) m-step
Gibbs sampling scheme that was applied to the univariate SAR probit model.
For the MNP SAR model we have a mean vector and variance-covariance
matrix shown in (10.28).


                          ỹ ∗ ∼ T M V N {H −1 X̃β, [H  (In ⊗ Σ−1 )H]−1 }
                          ỹ ∗ ∼ T M V N (μ, Ω)                               (10.28)
                                        −1
                           μ=H               X̃β
                          Ω = [H (In ⊗ Σ−1 )H]−1
                                        

                          H = InJ − ρW̃

   We can use the method of Geweke (1991) to produce an m-step Gibbs
sampler to produce draws from this nJ-variate truncated normal distribution.
As before, the method of Geweke (1991) works with a precision matrix, which
                                                          
in this case takes the form of an nJ×nJ matrix: Ψ = D−1 H  (In ⊗Σ−1 )HD−1 ,
with details regarding the nJ × nJ block diagonal matrix D provided shortly.
                                
   Samples for v ∼ N (0, D−1 H  (In ⊗ Σ−1 )HD−1 ) subject to linear restric-
                ∗                                                     ∗
tions: a < Dỹ < b, where D is an nJ × nJ matrix that restricts yj,i    to be
the largest component of ỹi if yj,i = j or assures that each component of ỹi∗
                             ∗

is negative if max(yj,i ) = 0.
   As in the case of the SAR probit model, the samples v are used to pro-
duce the series of zi |z−i needed to build up the joint posterior for z. This



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models                         311

is equivalent to constructing samples from the nJ-variate normal distribu-
tion z ∼ N (0, DΩD ) subject to the linear restrictions: b ≤ z ≤ b. Where
b = a − Dμ, b = b − Dμ. The sampled z are used to obtain: y ∗ = μ + D−1 z.
   The restrictions applied to samples from vi ∼ N (0, 1) are shown in (10.29),
where yj,i represents the jth element from ỹi . These are used to produce an
nJ-vector of values for all observations and choices, where previously sampled
values z1 , z2 , . . . , zi−1 , zi+1 , . . . , zn are used during sampling of element zi , i =
1, . . . , nJ. The same deﬁnition for Ψ−i as the ith row of Ψ excluding the
ith element applies here as in the case of probit, but Ψ represents the larger
(nJ × nJ) precision matrix.


                              (bi − γ−i z−i )/ri < vi < (bi − γ−i z−i )/ri           (10.29)
                             γ−i = −Ψ−i /Ψi,i
                               ri = (Ψi,i )−1/2


                         bi = −∞    and bi = −D(0) μi for yj,i = 0
                         bi = −D μi and bi = −D(1) μi for yj,i = 1
                                (0)

                         ..
                          .
                         bi = −D(J) μi and bi = +∞            for yj,i = J

  An important diﬀerence between this model and the SAR probit is intro-
duction of the matrices D(j) , j = 0, . . . , J. The nJ × nJ matrix D contains
a series of J × J matrices on the diagonal and zeros elsewhere. For each ob-
servation i we determine an appropriate J × J matrix Di that is placed on
the ith diagonal of the matrix D. For the case where we have three choices
so J = 2, the matrices Di take the form:4

                                                   
                                        (0)   +1 0
                                Di = D =              , if yj,i = 0
                                             0 +1 
                                              +1 0
                                   = D(1) =           , if yj,i = 1
                                             +1 −1 
                                              −1 +1
                                   = D(2) =           , if yj,i = 2
                                               0 +1

  These take a similar form for models involving more choices, for example
when there are four choices and J = 3 we have:


4 Recall that we work with J + 1 choices, so J + 1 = 3 choices leads to J = 2.




© 2009 by Taylor & Francis Group, LLC
312                                  Introduction to Spatial Econometrics


                                               ⎛   ⎞
                                           +1 0 0
                             Di = D(0) = ⎝ 0 +1 0 ⎠ , if yj,i = 0
                                         ⎛ 0 0 +1 ⎞
                                           +1 0 0
                                = D(1) = ⎝ +1 −1 0 ⎠ , if yj,i = 1
                                         ⎛ +1 0 −1 ⎞
                                           −1 +1 0
                                = D(2) = ⎝ 0 +1 0 ⎠ , if yj,i = 2
                                         ⎛ 0 +1 −1 ⎞
                                           −1 0 +1
                                = D(3) = ⎝ 0 −1 +1 ⎠ , if yj,i = 3
                                            0 0 +1
  While this appears to be a relatively straightforward extension from the
SAR probit model, in practice this approach can be slow. There is room for
a number of computational improvements.




10.5         An applied illustration of spatial MNP
  A data generated experiment was conducted using three choices and J =
2, with n = 400. A set of continuous y-values representing utilities were
generated using:


                                y1∗ = (In − ρW )−1 X1 β1 + (In − ρW )−1 ε1          (10.30)
                                y2∗ = (In − ρW )−1 X2 β2 + (In − ρW )−1 ε2          (10.31)
                                                         
                                            0      1.0 −0.5
                       (ε1i , ε2i ) ∼ N      ,
                                            0    −0.5 1.0
                               X1i ∼ N (0, 2),        i = 1, . . . , n
                               X2i ∼ N (0, 2),        i = 1, . . . , n

  A value of ρ = 0.7 was used, and a spatial weight matrix constructed using
random vectors of locational coordinates, based on six nearest neighbors. The
continuous dependent variables y1∗ , y2∗ were converted to values of 0, 1, and 2
based on:

                                     yj,i = 0,            if max(ỹi∗ ) < 0
                                     yj,i = δ[max(ỹi )], if max(ỹi∗ ) ≥ 0
                                                    ∗

              ∗   ∗
                                
where ỹi∗ = y1i y2i                 is based on the ith observation from equations (10.30)
and (10.31) above.



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models                  313

   Table 10.7 shows estimation results based on 1,200 draws with 200 omitted
for burn-in. A value of m = 1 was used for the Gibbs sampler. The results
in the table were based on the Nobile (2000) procedure for sampling the
covariance matrix Σ. The table shows estimates based on the continuous
observations y1∗ , y2∗ used to produce the experimental choices. Spatial MNP
estimates close to these would be an indication of success. From the table we
see estimates that are within one standard deviation of the true values. As we
would expect, having discrete choice values for the dependent variable in the
model greatly increases uncertainty associated with the parameter estimates
for β, reﬂected in the standard deviations that are around four times as large
as those for the model based on the continuous dependent variables.


TABLE 10.7:                    SAR and SAR MNP estimates
                                SAR model y1   SAR model y2        SAR MNP model
  Variables                      β̂   std dev.  β̂   std dev.        β̂   std dev.
  X11 , (β = 1.0)              0.9733 0.0246                        1.0094   0.1554
  X12 , (β = 0.5)              0.4893 0.0245                        0.5160   0.0844
  X21 , (β = 0.5)                              0.5042 0.0262        0.5546   0.0806
  X22 , (β = 1.0)                              0.9315 0.0254        1.1084   0.1384
  W y1 , (ρ1 = 0.7)            0.6741 0.0290
  W y2 , (ρ2 = 0.7)                            0.7228 0.0201
  W̃ y, (ρ = 0.7)                                                0.7249 0.0269
   2
  σ11 =1                       1.0360                            1.0000
   2
  σ22 =1                                       1.0690            1.1479 0.4004
   2
  σ12 = −0.5                                                    −0.5172 0.2747
  R2                           0.7975          0.8518




   Summarizing, there is a great deal of work to be done on MNP models
involving spatial lags. The approach set forth here represents a rudimentary
approach that does not attempt to exploit special structure of the variance-
covariance matrix Ω = [(H  (In ⊗ Σ−1 )H]−1 . It may be possible to exploit the
Kronecker product nature of H = IJ ⊗ (In − ρW ) in conjunction with that of
(In ⊗ Σ−1 ) to produce a more computationally eﬃcient approach to estima-
tion. Wang and Kockelman (2007) take this approach when implementing a
spatiotemporal seemingly unrelated regression model.

   The approach set forth here samples each observation (i) conditional on
all others (−i), which may be unnecessary. Intuitively, choices observed in
region i should only depend on those from nearby regions, which we might
deﬁne as i ∈ ℵ. This raises the prospect of adopting Geweke’s procedure to
sample the distribution of each region’s zi conditional only on a limited set of
neighboring regions zi |zi∈ℵ .



© 2009 by Taylor & Francis Group, LLC
314                                Introduction to Spatial Econometrics

  The matrix H could be generalized to allow for diﬀerent spatial depen-
dence parameters associated with each choice. This variant of the model is
implemented in Autant-Bernard, LeSage and Parent (2008), where:

                                        ⎛                                    ⎞
                                            In − ρ1 W
                                    ⎜                   ..                   ⎟
                                  H=⎝                        .               ⎠   (10.32)
                                                                 In − ρJ W

  Another avenue for exploration is the relative importance of spatial depen-
dence versus dependence across choices. It may be that cross-choice covari-
ance is unimportant relative to spatial dependence, allowing the model to be
simpliﬁed by restricting Σ = IJ . The MNP model is often criticized as over-
parameterized, so prior information such as this that reduces the number of
parameters to be estimated would be helpful.

10.5.1          Eﬀects estimates for the spatial MNP model
   Eﬀects estimates for non-spatial MNP models estimated using maximum
likelihood methods are typically calculated by post-estimation simulation of
the model with all but a single explanatory variable ﬁxed. The impact of
changing the single explanatory variable on the choice probabilities is used to
assess the marginal impact of changes in the explanatory variables of interest.
   Our Bayesian MCMC estimation procedure produces a set of continuous
latent dependent variable values that represent a proxy for unobserved utility
associated with the J choices. The posterior mean of these latent variable
values can of course be used to produce J posterior choice probabilities, with
the excluded J + 1 choice also recovered.
   Most of the same insights regarding interpretation of marginal eﬀects for
the SAR probit model apply to the SAR MNP model as well. For example,
we can extend our example of burglaries on the decision to purchase a security
system to include purchasing a dog, or installing security lights. The SAR
MNP model implies that a change in burglaries (an explanatory variable in
the model) of neighboring homes j would have an eﬀect on the probability
that homeowner i purchases a security system, a dog, or security lighting.
The eﬀect would depend on spatial proximity of homeowner i to j, captured
by the spatial weight matrix W as well as the strength of spatial dependence
measured by the parameter ρ. A burglary at home j would have both a direct
eﬀect on the probability that homeowner j purchases a security system, a
dog or security lighting, as well as an indirect or spatial spillover eﬀect on
neighbors’ choices regarding these three alternatives. The total eﬀect is the
sum of these two eﬀects for each choice alternative.
   There are also some important qualiﬁcations that may apply to interpre-
tation based on the particular model speciﬁcation. For example, use of the
block diagonal dependence structure: InJ − ρW̃ , or that shown in (10.32),



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models           315

restricts us to a situation where the utility of choice j by an individual lo-
cated in region i is not directly inﬂuenced by the utility of choice k = j by
an individual located in a neighboring region h = i. Cross-choice inﬂuence
works through dependence captured by the covariance structure Σ, rather
than through spatial lags that embody cross-choice spatial dependence. This
simpliﬁes calculation of the marginal eﬀects estimates, since changes in xkh,r
will not impact yji , when k = j, and when h = i.
  The model could of course be extended along these lines by directly intro-
ducing spatial lags for utility associated with the J choices being modeled in
each equation of the model. For example in the case of three choices where
J = 2, we might use:


                                y1 = ρ11 W y1 + ρ12 W y2 + X1 β1 + ε1
                                y2 = ρ21 W y1 + ρ22 W y2 + X2 β2 + ε2
   In this model, y1 and y2 represent n × 1 vectors containing indicators for
observed choices 1 and 2 across the n regions. The n × k matrices X1 , X2 are
also arranged according to regions.
   This type of model might be appropriate in situations where we are mod-
eling the utility of a local government choosing to impose a payroll income
tax (y1 ) versus a sales tax (y2 ). The utility of imposing a payroll tax might
depend directly on whether neighboring governments have chosen to imple-
ment a payroll tax (ρ11 W y1 ) or sales tax (ρ12 W y2 ). Similarly, the utility
associated with the sales tax might depend on the existence of both payroll
taxes in neighboring governments, (ρ21 W y1 ) as well as sales taxes by neigh-
bors (ρ22 W y2 ). Intuitively, this might arise because ﬁrms could relocate to
avoid the payroll taxes, and local residents could alter shopping behavior to
avoid sales taxes. Imposing the restriction that Σ = IJ for this model seems
reasonable, since cross-choice dependence is modeled in the mean part of the
model.
   Calculating marginal eﬀects for this type of model would require altering
our basic expression used to produce the scalar summary measures. If we
deﬁne:
                                                                 
                                            In − ρ11 W −ρ12 W
                                    H̃ =
                                              −ρ21 W In − ρ22 W
                                                  
                                            X1 0 k
                                    X̃ =
                                            0 k X2
                                           
                                            y1
                                     ỹ =
                                            y2

then, assuming Σ = IJ , we have a variance-covariance matrix: Ω = (H̃  H̃)−1 ,
with the associated precision matrix that would be subjected to the m-step
Gibbs sampling procedure.



© 2009 by Taylor & Francis Group, LLC
316                                Introduction to Spatial Econometrics

   For this two-equation example, the SAR MNP eﬀects are such that changes
in an explanatory variable associated with say, equation j = 2 will impact
observations y1i , i = 1, . . . , n as well as y2i , i = 1, . . . , n. That is, ∂y1 /∂x2r =
0 and ∂y2 /∂x1r = 0. This of course follows from allowing for cross-choice
impacts in the mean component of the model, reﬂected by the spatial lag
structure, and the resulting: μ = H̃ −1 X̃β.
   For the payroll versus sales tax example, we could use the model to ana-
lyze the impact of changes in an explanatory variable such as levels of payroll
income in each location on the long-run steady state probabilities that lo-
cal governments would rely on payroll versus sales taxes. The impact of an
increase in payroll income of one local government jurisdiction on the prob-
ability of the own- and other-local governments adopting a payroll income
tax versus sales tax, plus spatial spillover (indirect) eﬀects on the probability
that neighboring governments adopt both payroll and sales taxes could be
analyzed using the scalar summary measures.




10.6         Spatially structured eﬀects probit models
   An alternative to SAR models for situations involving limited dependent
variables is a model that introduces a spatially structured random eﬀects
vector (Smith and LeSage, 2004). This type of model was already introduced
in the context of interregional trade ﬂows in Chapter 8.
   This hierarchical Bayesian model is shown in (10.33), where Uik , indexes
utility in regions i = 1, . . . , m for individuals k = 1, . . . , ni within each region.
There are N = m     i=1 ni observations in the model, and we use wij to denote
the i, jth elements of the m × m spatial weight matrix W .


                                        Uik = Xik β + ξik                          (10.33)
                                        ξik = θi + εik
                                                   m
                                          θi = ρ         wij θj + ui
                                                   j=1


   This model treats the unobserved component ξik as consisting of a region-
speciﬁc eﬀect θi as well as an individual eﬀect εik . The regional eﬀect param-
eter θi captures unobserved common features for observations located within
region i. The regional eﬀects parameters are modeled using a SAR process:
          m
θi = ρ j=1 wij θj + ui which imposes a restriction that individuals located
within region i are likely to be similar to those from neighboring regions.
The individualistic eﬀects parameters are then assumed to be conditionally
independent given the regional eﬀects θi .



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models                      317

  This model is a variation on a ﬁxed eﬀects model. Using matrix notation
we can express the model as in (10.34), where the m × 1 vector θ represents
the spatially structured eﬀects.


                                         y = Xβ + Δθ + ε                           (10.34)
                                         θ = ρW θ + u
                                         u ∼ N (0, σu2 Im )
                                        ε|θ ∼ N (0, V )
                                              ⎛                                ⎞
                                                v1 In1
                                              ⎜         ..                     ⎟
                                         V =⎝              .                   ⎠   (10.35)
                                                                      vm Inm
                                               ⎛                      ⎞
                                                   11
                                           ⎜            ..            ⎟
                                         Δ=⎝                 .        ⎠            (10.36)
                                                                 1m

    We accommodate heterogeneity across regions using a set of variance scalars
vi , i = 1, . . . , m, and use 1i , i = 1, . . . , m to denote an (ni × 1) vector of ones.
The eﬀects parameters need not be applied to all regions, for example when
working with counties we might estimate state-level eﬀects parameters. The
N × m matrix Δ works to assign the same eﬀect parameter to each of the ni
counties in state i. Speciﬁcally, Δ contains row-elements i = 1, . . . , m that
equal 1 if region (county) i is located in state m and zero otherwise. This
model interprets the parameters in the m × 1 vector θ as latent indicators
for unobservable/unmeasured state-level inﬂuences. These are restricted to
follow a SAR process, so neighboring states will exhibit similar eﬀects levels.
    The model also accommodates heterogeneity across the m broader regions
(e.g. states) allowing for diﬀerent variance scalars vi to be associated with
each of these regions. This is accomplished using the independent identically
distributed chi-squared prior discussed in Chapter 5. All observations in each
state (broader region) are assigned the same variance scalar parameter.
    The spatial autoregressive structure placed on the eﬀects parameters reﬂects
an implied prior for the vector θ conditional on ρ, σu2 , V shown in (10.37).

                                                                      
                                                           1
                        π(θ|ρ, σu2 ) ∝ (σu2 )−m/2 |B|exp − 2 θ B  Bθ             (10.37)
                                                          2σu
                                 B = Im − ρW

   Estimation of the spatially structured eﬀects vector θ requires introduction
of two additional parameters (ρ, σu2 ) to the model. One of these controls the
strength of spatial dependence between regions and the other controls the
variance/uncertainty of the prior spatial structure. Given these two scalar



© 2009 by Taylor & Francis Group, LLC
318                                Introduction to Spatial Econometrics

parameters along with the spatial structure, the m eﬀects parameters are
completely determined. One could view the spatial connectivity matrix W as
introducing additional exogenous information that augments the sample data
information. In contrast, the conventional ﬁxed eﬀects approach introduces m
additional parameters to be estimated without augmenting the sample data
information.
   There is also an implied prior density for ε conditional on θ, V which takes
the form:
                                                        
                                                1
                      π(ε|V ) ∝ |V |−1/2 exp − ε V −1 ε                (10.38)
                                                2
   Smith and LeSage (2004) provide details regarding Bayesian MCMC esti-
mation of this hierarchical linear model, and the model is discussed in detail
by Rossi, Allenby and McCulloch (2006). The binary dependent variables are
treated as choice outcomes that reﬂect latent underlying utilities following
Albert and Chib (1993). The conditional posterior of zik for individual k in
region i takes the form of a normal distribution truncated at zero:
                                           (
                                               N (xi β + θi , vi ) left-truncated, if yi = 1
 p(zik |z−ik , ρ, β, θ, σu2 , V, y) ∼
                                               N (xi β + θi , vi ) right-truncated, if yi = 0
   This model is considerably faster to estimate than the SAR probit model
because it relies on a smaller m × m spatial component. Smith and LeSage
(2004) decompose the m × m multivariate normal distribution for the eﬀects
vector θ into a sequence of univariate normal distributions which are sam-
pled to produce the eﬀects parameter estimates. This is of course similar to
the approach of Geweke (1991) outlined here, but does not involve sampling
from a truncated normal distribution, just a sequence of univariate normals
conditional on other elements of θ−i .
   Interpreting the parameters β for this model is similar to that from an
ordinary probit model, so there are no spatial spillover eﬀects in this model.
However, we can use the spatially structured eﬀects estimates for each region
to draw inferences regarding spatial variation in the model relationship. The
eﬀects parameters θ are centered on zero, so regions with negative and positive
and signiﬁcant eﬀects point to latent factors at work that are not included in
the explanatory variables matrix X.
   An interesting extension of this model can be found in Wang and Kock-
elman (2008a,b), who extend this model to allow for a set of M     i=1 ni = N ,
individuals located in M regions across time periods t = 1, . . . , T . Their
model is dynamic, taking the form:

                                   ∗       ∗
                                  yikt = λyikt−1 + Xikt β + θit + εikt                   (10.39)
where t indexes time periods, k individuals and i regions. This model allows
for temporal dependence governed by the parameter λ. Each individual makes



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models             319

a decision that is observed T times, so we have a balanced panel containing
N T observations. The parameters θit and εikt are assumed iid distributed
over time conditional on controlling for the inﬂuence of the lagged dependent
           ∗
variable yikt−1 . The argument is that after controlling for time dependence
in decisions, θit = θi and εikt = εik , for all t = 1, . . . , T .
   The motivating example for this type of model given by Wang and Kock-
elman (2008b) is an application to land development decisions. They argue
that land usage patterns depend strongly on pre-existing as well as existing
conditions, and owner/developer expectations of future conditions (such as
local and regional congestion, population, and school access). Future expec-
tations are approximated using contemporaneous measures of access and land
use intensity, but Wang and Kockelman (2008b) argue that spatial correlation
in unobserved factors is likely to remain.
   They argue that land use conversion decisions can be viewed as an ordered
probit situation if we consider varying intensity levels of land development.
As already noted, ordered probit models describe situations where there are
more than two choice outcomes, but the alternatives exhibit a natural or
logical ordering. As noted, in the simple cross-sectional case where individual
i’s choices are independent from those of other individuals in the non-spatial
model, the cut-point values φ can be determined by examining the maximum
(and minimum) values of the latent data yi∗ over all individuals i = 1, . . . , n
who have chosen alternative j.


                             φ̄j−1 = max{max{yi∗ : yi = j}, φj−1 }
                             φ̄j+1 = min{min{yi∗ : yi = j + 1}, φj+1 }

  Wang and Kockelman (2008a) point out that in a spatial model setting
where choices of individuals are not independent, but exhibit both space as
well as time dependence, this line of argument no longer holds. To pursue
this, we consider the (multivariate) normal prior placed on the cut-point pa-
rameters by Wang and Kockelman (2008a).

                                 φ ∼ N (g, Q)δ(φ1 < φ2 < . . . , φJ−1 )   (10.40)
where g is a vector of prior means (with elements gj ) and Q is a (diagonal)
matrix containing prior variances, which we label qj . Recall, δ(A) is an in-
dicator function for each event A, so δ(A) = 1 for outcomes where A occurs
and δ(A) = 0 otherwise. This acts as a constraint to ensure probabilities
derived from the thresholds are positive. Of course, in the limit with all ele-
ments of gj = 0 and the variances qj inﬁnite, we have the ﬂat prior used in
our discussion of the ordered probit model in Section 10.2. The conditional
posterior for these parameters takes the form in (10.41), where we use  to
denote conditioning arguments other than φ−j consisting of other parameters
in the model.



© 2009 by Taylor & Francis Group, LLC
320                                Introduction to Spatial Econometrics


                                                                     
                                                       1            2
         p(φj |φ−j , ) ∝ δ(φ̄j−1 < φj < φ̄j+1 )exp −     (φj − gj )           (10.41)
                                                      2qj

Of course, in the limiting case of a ﬂat prior where qj → ∞, this collapses to
our Uniform distribution:

             p(φj |φ−j , ) ∝ U (φ̄j−1 < φj < φ̄j+1 ), j = 2, . . . , J − 1    (10.42)
  The bounding values are determined by examining the maximum (and min-
                                    ∗
imum) values of the latent data yikt   over all individuals k = 1, . . . , ni , and all
regions i = 1, . . . , M who have chosen alternative j at all times t = 1, . . . , T .
In this general spatial model, individuals’ choices are spatially dependent on
those of individuals in nearby regions and past time periods leading to:

                                             ∗
                           φ̄j−1 = max{max{yikt  : yikt = j}, φj−1 }
                                            ∗
                           φ̄j+1 = min{min{yikt : yikt = j + 1}, φj+1 }
                                  ∗
  Because of the dependence of yikt  on other time periods and regions, the
lower and upper bounds in this model also exhibit dependence. This can lead
to a multimodal posterior distribution for these parameters.




10.7         Chapter summary
   We have seen that Bayesian treatment of observable binary and polychoto-
mous dependent variables y as indicators of latent underlying utilities y ∗ can
be useful in modeling limited dependent variables that exhibit spatial depen-
dence. Albert and Chib (1993) argue that if the vector of latent utilities y ∗
were known, p(β, ρ, |y ∗ ) = p(β, ρ|y ∗ , y), allowing us to view y ∗ as an addi-
tional set of parameters to be estimated. This leads to a (joint) conditional
posterior distribution for our model parameters (conditioning on both y ∗ , y)
that takes the same form as the Bayesian estimation problem from Chapter 5.
   For models involving spatial dependence, we need to perform some com-
putational work to sample from the conditional posterior distribution for the
parameters y ∗ that we introduce in the model. The spatial dependence struc-
ture leads to a multivariate truncated normal distribution for these param-
eters, rather than the simple univariate truncated normal distribution that
arises in the case of independent sample data. However, we showed that
a procedure proposed by Geweke (1991) can be used to successfully sample
from this conditional distribution. The procedure samples from this multi-
variate truncated normal distribution by breaking the task into an m-step



© 2009 by Taylor & Francis Group, LLC
                       Limited Dependent Variable Spatial Models        321

Gibbs sampler that carries out m-draws from a series of n univariate con-
ditional distributions. These m-draws provide an asymptotically consistent
estimate for the parameters y ∗ . These are then used when sampling from the
conditional distributions of the remaining model parameters, β, ρ.
  Despite the drawback arising from the computational intensity of this ap-
proach, there are a number of desirable aspects as well. One point is that
implementation of the method is quite simple from a coding standpoint. We
simply need to add code to our existing routine for MCMC estimation of the
Bayesian SAR model to implement the m-step Gibbs sampler, with the re-
maining code unchanged. This amounts to a few lines of code that calls a
specialized function to carry out the truncated multivariate normal sampling
task.




© 2009 by Taylor & Francis Group, LLC


